'use strict'
const mongoose = require('mongoose')
// const bcrypt = require('bcrypt-nodejs')
const crypto = require('crypto')
const Schema = mongoose.Schema
const services = require('../services')


const UserSchema = Schema({
    email: { type: String, unique: true, lowercase: true },
    displayName: String,
    avatar: String,
    password: String ,
    signupDate: { type: Date, default: Date.now() },
    lastLogin: Date,
})

// no se puede usar arrow function porque this pierde el scope

UserSchema.pre('save', function (next) {
    let user = this
    console.log('this', this)
    if (!user.isModified('password')) return next()
    let c = new services.password()
    c.encript(user.password).then(
        res => {
            console.log('has', res)
            user.password = res
            next()
        }).catch(
        err => {
            console.log('error', err)
            next(err)
        } )
})

UserSchema.methods.gravatar = function () {
    if (!this.email) return `https://gravatar.com/avatar/?s=200&d=retro`
    const md5 = crypto.createHash('md5').update(this.email).digest('hex')
    return `https://gravatar.com/avata/${md5}?s=200&d=retro`
}

module.exports = mongoose.model('User', UserSchema)