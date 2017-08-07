const bcrypt = require('bcrypt-nodejs')
const crypto = require('crypto')

class Crypt {

    compare() {

    }

    encriptAndCompare(password, toEncrypt) {
        console.log(password, toEncrypt)
        return new Promise((resolve, reject) => {
            /*
            this.encript(toEncrypt).then(
                res => {
                }
            )
            */
            bcrypt.compare( toEncrypt ,password, (err, response) => {
                if (err) reject(err)
                resolve(response)
            })
        })
    }

    encript(password) {
        return new Promise((resolve, reject) => {
            try {
                bcrypt.genSalt(10, (err, salt) => {
                    if (err) reject(err)
                    bcrypt.hash(password, salt, null, (err, hash) => {
                        if (err) reject(err)
                        resolve(hash)
                    })
                })
            }
            catch (err) {
                reject(err)
            }
        })
    }
}

module.exports = Crypt;
