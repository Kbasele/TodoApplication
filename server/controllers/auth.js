const jwt = require('jsonwebtoken')


exports.auth = (req, res, next) =>{
    const token = req.headers['authorization']

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user)=>{
        if(err) return res.sendStatus(403)
        req.user = user.user
        res.sendStatus(200)
    })
}