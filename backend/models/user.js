const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    FirstName: {
        type: String,
        required: true
    },
    LastName: {
        type: String,
        required: true
    },
    Email: {
        type: String,
        required: true
    },
    Password: {
        type: String,
        required: true
    },
    token: {
        type: String
    },
    mobile: {
        type:Number
    },
    interest:{
        type:Array
    }
    
})

mongoose.model('user', userSchema)