'use strict'

const errorHandler = require('../error.controller')
const User = require('../../models/user.model')
const service = require('../../services')

class Post {

    postHandler(req, res) {
        console.log(req.params.log)
        const log = req.params.log
        if (log == 'signin') {
            this.signIn(req, res)
        } else if (log === 'signup') {
            this.signUp(req, res)
        }
    }

    signUp(req, res) {
        const user = new User({
            email: req.body.email,
            dispalyName: req.body.displayName,
            password: req.body.password
        })

        user.save().then(
            resp => {
                return res.status(200).send({ token: service.token.createToken(user) })
            }).catch(
            err => {
                //console.log(err); 
                return errorHandler(res, 500, err.errmsg)
            })
    }

    signIn(req, res) {
        User.findOne({ email: req.body.email }).then(
            user => {
                console.log("user", user)
                if (!user) return errorHandler(res, 404)
                let c = new service.password();
                c.encriptAndCompare(user.password, req.body.password).then(
                    resp => {
                        console.log(resp)
                        if (!resp) return errorHandler(res, 404)
                        req.user = user
                        res.status(200)
                            .header('token', service.token.createToken(user))
                            .send({
                                message: ' logueado con exito',
                                token: service.token.createToken(user)
                            })
                    }
                )

            }).catch(err => { console.log(err); return errorHandler(res) })
    }

}

module.exports = Post;