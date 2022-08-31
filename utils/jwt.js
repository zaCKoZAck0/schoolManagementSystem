const jwt = require('jsonwebtoken')
require('dotenv/config')

function authenticateToken(request,response,next){
    // const authHeader = request.cookie.accessToken;
    console.log("Here")
    const authHeader = request.headers['authorization'];
    const token = authHeader && authHeader.split(" ")[1]
    console.log(token)
    if (token == null) return response.status(401)
    if (token){
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user)=>{
        if (err) return response.status(403)
        request.user = user
        next() 
    })}
    else
    return response.status(401) 
}

module.exports = authenticateToken;