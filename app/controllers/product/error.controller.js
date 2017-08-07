'use strict'
function errorHandler(res, status) {
    let message;
    status = status ? status : 500
    if (status === 404) {
        message = 'producto no encontrado'
    } else if (status === 404) {
        message = 'error interno en el servidor '

    }
    return res.status(status).send({ message })
}

module.exports = errorHandler;