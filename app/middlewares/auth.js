'use strict'

const services= require('../services')
function isAuth(req, res, next) {
    if (!req.headers.token) {
        return res.status(403).send({ message: 'sin autorizacion ' })
    }
     services.token.decodeToken(req.headers.token).then(
        res=>{
            req.user = res
            next()
        }
    ).catch(
        res=>{ res.status(res.status).send(res.message)   } )
}


module.exports = isAuth