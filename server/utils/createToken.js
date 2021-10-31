const jwt = require('jsonwebtoken')

exports.createToken = (user) =>{
    return jwt.sign({user:user }, process.env.ACCESS_TOKEN_SECRET, {expiresIn: '4h'})
}