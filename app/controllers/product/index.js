'use strict'

const getHandler = require('./get.controller')
const postHandler = require('./post.controller')
const putHandler = require('./put.controller')
const deleteHandler = require('./delete.controller')

function requestResponseHandler(req, res) {
    console.log(req.method)
    if (req.method === 'GET') {
        getHandler(req, res)
    } else if (req.method === 'POST') {
        postHandler(req, res)
    } else if (req.method === 'PUT') {
        putHandler(req, res)
    } else if (req.method === 'DELETE') {
        deleteHandler(req, res)
    }
}
module.exports = requestResponseHandler;