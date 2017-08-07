'use strict'
function errorHandler(res, status, message) {
    status = status ? status : 500
    if (status === 404) {
        message = 'datos no encontrados'
    } else if (status === 500 && !message) {
        message = 'error interno en el servidor '

    }
    return res.status(status).send({ message })
}

module.exports = errorHandler;