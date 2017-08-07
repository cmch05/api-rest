'use strict'

const express = require('express')
const productControl = require('../controllers/product')
const urserControl = require('../controllers/user')

const auth = require('../middlewares/auth')

const api = express.Router()

api.get('/product', productControl)

api.get('/product/:productId', productControl)

api.post('/product', productControl)

api.put('/product/:productId', productControl)

api.delete('/product/:productId', productControl)

api.get('/private',auth ,urserControl)

api.post('/user/:log',urserControl)
api.post('/user/:log',urserControl)

module.exports = api;