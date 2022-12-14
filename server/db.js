const mongoose = require('mongoose')
const mongoDB = 'mongodb://127.0.0.1:27017/E-commerce'

mongoose.connect(mongoDB,{useNewUrlParser:true} ,err => {
    if(!err){   
        console.log("db connected");
    }else{
        console.log("Error");
    }
})

const User = mongoose.model('User',{
    name:String,
    phone:String,
    email:String,
    password:String
})

const Product = mongoose.model('Product',{
    productname:String,
    price:String,
    image:String,
    category:String,
    description:String
})

const Cart = mongoose.model('Cart',{
    productname:String,
    price:String,
    image:String,
    category:String,
    description:String
})


const Order = mongoose.model('Order',{
    productname:String,
    price:String,
    image:String,
    category:String,
    description:String,
    firstname:String,
    secondname:String,
    pin:String,
    address:String,
    email:String,
    phone:String,
    payment:String,
    amount:String,
    orderStatus:String
}) 


module.exports = {User , Product ,Cart,Order}

