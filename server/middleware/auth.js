const jwt = require('jsonwebtoken')


exports.authToken = (req, res, next) =>{
    const token = req.headers['authorization']
    console.log("TRYING TO AUTH")
    if(token == null) return res.sendStatus(401)
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user)=>{
        if(err) return res.sendStatus(403)
        req.user = user.user
        console.log("MANNAGE AUTH")
        next()
    })
}