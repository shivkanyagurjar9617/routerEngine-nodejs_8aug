const express = require('express')
const { adminOwner } = require('./zomato/admin/adminOwner')
const { customerRouter } = require('./zomato/customer/customer')
const { customerCareRouter } = require('./zomato/customercare/customerCare')
const { deliveryBoy } = require('./zomato/deliveryzomato/deliveryBoy')
const app = express()

require('dotenv').config()

app.use(customerRouter)
app.use(deliveryBoy)
app.use(customerCareRouter)
app.use(adminOwner)

let port = process.env.PORT
app.listen(port,()=>{
    console.log(`the port number is running on ${port}`)
})