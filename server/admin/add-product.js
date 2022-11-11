const db = require('../db')

const addProduct = (productname,price,image,category,description) => {
    return db.Product.insertMany({productname,price,image,category,description}).then((data) => {
        if(!data){
            return{
                status:false,
                statuscode:400,
                message:"error"
            }
        }else{  
            return{
                status:true,
                statuscode:200,
                message:"added"
            }

        }
    })
}


module.exports = {addProduct}