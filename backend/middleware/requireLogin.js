// for verifying if the user has logged in with the same token that we had given them

require('dotenv').config()
const jwt = require('jsonwebtoken')
const mongoose = require('mongoose')
const User = mongoose.model('user')

module.exports = (req, res, next) => {
    const { authorization } = req.headers
    // authorization will look like "Bearer token"
    if (!authorization) {
        return res.status(401).json({error:"you must be logged in"})
    }
    const token = authorization.replace("Bearer ", "")
    jwt.verify(token, process.env.JWT_SECRET, (err, payload) => {
        if (err) {
            return res.status(401).json({error:"you must be logged in"})
        }
        console.log(payload._id)
        req.user = payload._id
        next()
        
    })
}