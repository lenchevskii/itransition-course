const expressJwt = require('express-jwt')
const config = require('config.json')
const userService = require('../users/user.service')

module.exports = jwt

function jwt() {
    console.log('jwt function')
    const secret = config.secret
    return expressJwt({ secret, isRevoked }).unless({
        path: [
            // public routes that don't require authentication
            '/users/authenticate',
            '/users/register'
        ]
    })
}

async function isRevoked(req, payload, done) {
    console.log('isRevoked')
    console.log('payload.sub: ', payload.sub)
    console.log('payload: ', payload)
    const user = await userService.getById(payload.sub)

    // revoke token if user no longer exists
    if (!user) return done(null, true)

    done()
}