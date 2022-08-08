const express = require('express')
const customerCareRouter = express.Router()

customerCareRouter.get('/customercare',(req,res)=>{
    res.json({
        msg:"hello i am a customercare how can i help you "
    })
})

module.exports = {customerCareRouter}