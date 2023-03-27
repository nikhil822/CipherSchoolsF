require('dotenv').config()
const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const User = mongoose.model('user')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const requireLogin = require('../middleware/requireLogin')

router.post('/signup', (req, res) => {
    const { firstName, lastName, email, password } = req.body
    if (!email || !firstName || !lastName || !password) {
        return res.status(422).json({error:"Please add all the entries"})
    }
    User.findOne({ email: email })
        .then((savedUser) => {
            if (savedUser) {
                return res.status(422).json({error:"Already registered"})
            }
            bcrypt.hash(password, 12)
                .then(hashPasswd => {
                    const user = new User({
                        firstName,
                        lastName,
                        email,
                        password:hashPasswd
                    })
                    user.save()
                        .then(user => {
                        res.json({message:"Successfully added"})
                        })
                        .catch(err => {
                            console.log(err)
                        })
                })
        })
        .catch(err => {
            console.log(err)
        })
})

router.post('/signin', (req, res) => {
    const { email, password } = req.body
    if (!email || !password) {
        return res.status(422).json({error:"Please enter email and password"})
    }
    User.findOne({ email: email })
        .then(savedUser => {
            if (!savedUser) {
                return res.status(422).json({error:"Invalid username or password"})
            }
            bcrypt.compare(password, savedUser.password)
                .then(isMatch => {
                    if (isMatch) {
                        // res.json({message:"Successfully logged in"})
                        const token = jwt.sign({ _id: savedUser._id }, process.env.JWT_SECRET)
                        savedUser.token = token
                        savedUser.save()
                        .then(user => {
                        res.json({message:"Successfully added token"})
                        })
                        .catch(err => {
                            console.log(err)
                        })
                    }
                    else {
                        return res.status(422).json({error:"Invalid username and password"})
                    }
                })
                .catch(err => {
                    console.log(err)
                })
        })
        // .catch(err => {
        //     console.log(err)
        // })
})

router.post('/changePass',requireLogin, (req, res, next) => {
   console.log("Heer")
    const {password, changePass, confirmPass} = req.body
    User.findOne({_id:req.user}).then((user)=>{
        
        bcrypt.compare(password,user.password).then((isMatch)=>{
            if(!isMatch){
                console.log("HERHE")
                const err = new Error("Wrong")
                throw err
            }
            if(isMatch){

                if(changePass === confirmPass){
                    bcrypt.hash(changePass, 12).then((hashedpass)=>{
                        user.password = hashedpass
                        user.save()
                        res.status(200).send("Successful")
                    })
                }
                    
            }
        }).catch((err)=>{
            res.status(422).send("Wrong credentials")
            
        })
    })
    if(changePass !== confirmPass){
        return res.status(422).json({error:"Password do not match"})
    }
})
router.post('/update',requireLogin, (req, res) => {
    const {firstName, lastName, mobile} = req.body
    User.findOne({_id:req.user}).then((user)=>{
        user.firstName = firstName
        user.lastName = lastName
        user.mobile = mobile
        user.save()
        res.status(200).send("Successfully updated")
    })
    .catch((err)=>{
        res.status(422).send("Wrong credentials")
        
    })
})
router.post('/interest',requireLogin, (req, res) => {
    const {interest} = req.body
    User.findOne({_id:req.user}).then((user)=>{
        user.interest = interest
        user.save()
        res.status(200).send("Successfully added interest")
    })
    .catch((err)=>{
        res.status(422).send("Wrong credentials")
        
    })
})

module.exports = router