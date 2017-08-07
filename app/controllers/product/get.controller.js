'use strict'

const errorHandler = require('./error.controller')
const Product = require('../../models/product')

function getHandler(req, res) {

    if (req.params.productId) {
        let productId = req.params.productId
        Product.findById(productId).then(product => {
            if (!product) return   errorHandler(res, 404)
            return res.status(200).send({ product })
        }).catch(err => { return errorHandler(res, 404) })
    } else {
        Product.find({}, (err, products) => {
            if (err) return res.status(500).send({ message: `error al buscar los elemento ${err}` })
            if (!products) return res.status(404).send({ message: `no existen productos` })
            res.status(200).send({ products: products })
        })
    }
}

module.exports = getHandler;