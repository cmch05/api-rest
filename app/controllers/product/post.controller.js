'use strict'

const errorHandler = require('./error.controller')
const Product = require('../../models/product')

function postHandler(req, res) {
    console.log('POST /api/product')
    mapProduct(req.body).save().then((productStore) => {
        res.status(200).send({ product: productStore })
    }).catch(err => { return errorHandler(res) })

}
function mapProduct(body) {
    let product = new Product()
    product.name = body.name
    product.picture = body.picture
    product.price = body.price
    product.category = body.category
    product.description = body.description
    console.log(product)
    return product;
}

module.exports = postHandler;