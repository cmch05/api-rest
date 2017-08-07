'use strict'
const app = require('./app')
const mongoose = require('mongoose')
const config = require('./config')


mongoose.connect(config.db, (err, res) => {
    if (err) throw err
    console.log("conexion a mongoo")
})

app.listen(config.port, () => {
    console.log(`rest puerto ${config.port}`)
})

