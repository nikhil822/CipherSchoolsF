require('dotenv').config()
const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const User = mongoose.model('user')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const requireLogin = require('../middleware/requireLogin')

router.post('/signup', (req, res) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
    const { FirstName, LastName, Email, Password } = req.body
    if (!Email || !FirstName || !LastName || !Password) {
        return res.status(422).json({error:"Please add all the entries"})
    }
    User.findOne({ Email: Email })
        .then((savedUser) => {
            if (savedUser) {
                return res.status(422).json({error:"Already registered"})
            }
            bcrypt.hash(Password, 12)
                .then(hashPasswd => {
                    const user = new User({
                        FirstName,
                        LastName,
                        Email,
                        Password:hashPasswd
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
    const { Email, Password } = req.body
    if (!Email || !Password) {
        return res.status(422).json({error:"Please enter Email and Password"})
    }
    User.findOne({ Email: Email })
        .then(savedUser => {
            if (!savedUser) {
                return res.status(422).json({error:"Invalid username or Password"})
            }
            bcrypt.compare(Password, savedUser.Password)
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
                        return res.status(422).json({error:"Invalid username and Password"})
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
    const {Password, changePass, confirmPass} = req.body
    User.findOne({_id:req.user}).then((user)=>{
        
        bcrypt.compare(Password,user.Password).then((isMatch)=>{
            if(!isMatch){
                console.log("HERHE")
                const err = new Error("Wrong")
                throw err
            }
            if(isMatch){

                if(changePass === confirmPass){
                    bcrypt.hash(changePass, 12).then((hashedpass)=>{
                        user.Password = hashedpass
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
    const {FirstName, LastName, Mobile} = req.body
    User.findOne({_id:req.user}).then((user)=>{
        user.FirstName = FirstName
        user.LastName = LastName
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