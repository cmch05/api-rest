'use strict'

const errorHandler = require('./error.controller')
const Product = require('../../models/product')

function putHandler(req, res) {

    let productId = req.params.productId
    let update = req.body
    console.log(productId)
    Product.findByIdAndUpdate(productId, update, (err, product) => {
        if (err) return res.status(500).send({ message: `error al actualizar r el elemento ${err}` })
        res.status(200).send({ product })
    })
}

module.exports = putHandler;