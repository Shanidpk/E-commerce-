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
    phone:Number,
    password:String
})

module.exports = {User}

