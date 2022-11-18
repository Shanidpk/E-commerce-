const db = require ('./db')

const orders = (productname,price,image,category,description,firstname,secondname,pin,address,email,phone,payment,amount,orderStatus) => {
   return  db.Order.insertMany({productname,price,image,category,description,firstname,secondname,pin,address,email,phone,payment,amount,orderStatus}).then((data) => {
        console.log("sdfas",data)
        if(data){
            return{
                status:true,
                statuscode:200,
                message:"success"
            }
        }else{
            return{
                status:false,
                statuscode:400,
                message:"failed"
            }
        }
    })
}



module.exports = {orders}