'use strict'

const errorHandler = require('./error.controller')
const Product = require('../../models/product')

function deleteHandler(req, res) {

    let productId = req.params.productId
    console.log(productId)
    Product.findByIdAndRemove(productId, (err) => {
        if (err) return res.status(500).send({ message: `erro al eliminar el elemento ${err}` })
        res.status(200).send({ message: 'producto eliminado ' })
    })

}

module.exports = deleteHandler;