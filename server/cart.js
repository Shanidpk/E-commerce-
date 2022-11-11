const db = require('./db')

    const addtocart =(productname,price,image,category,description) => {
        return db.Product.findOne().then((data)=> {
            console.log(data)
            if(data){
                const newdata = new db.Cart({
                    productname,price,image,category,description     
                })
                newdata.save()

                return{
                    status:true,
                    statuscode:200,
                    message:'success'
                }
            }else{
                return{
                    status:false,
                    statuscode:400,
                    message:'allready in cart'
                }
            }
        })
    }

    



    module.exports = {addtocart}