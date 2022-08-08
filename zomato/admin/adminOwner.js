const express = require('express')
const adminOwner = express.Router()

adminOwner.get('/admin',(req,res)=>{
    res.json({
        msg:"hello i am  admin in zomato "
    })
})

module.exports = {adminOwner}