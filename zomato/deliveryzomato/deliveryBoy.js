const express = require('express')
const deliveryBoy = express.Router()

deliveryBoy.get('/deliveryboy',(req,res)=>{
    res.json({
        msg:"hello i am delivery boy "
    })
})

module.exports = {deliveryBoy}