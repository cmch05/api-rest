'use strict'

const errorHandler = require('../error.controller')
const User = require('../../models/user.model')


function getHandler(req, res) {

    if (req.params.productId) {
        let productId = req.params.productId
        User.findById(productId).then(product => {
            if (!product) return   errorHandler(res, 404)
            return res.status(200).send({ product })
        }).catch(err => { return errorHandler(res, 404) })
    } else {
        User.find({}, (err, users) => {
            if (err) return res.status(500).send({ message: `error al buscar los elemento ${err}` })
            if (!users) return res.status(404).send({ message: `no existen productos` })
            res.status(200).send({ users })
        })
    }
}

module.exports = getHandler;