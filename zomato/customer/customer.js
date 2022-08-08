const express = require('express')
const customerRouter = express.Router()

customerRouter.get('/customer',(req,res)=>{
    res.json({
        msg:"hello i am a customer "
    })
})

module.exports = {customerRouter}


