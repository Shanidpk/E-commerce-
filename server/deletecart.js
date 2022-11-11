const db = require('./db')

deletecart = (id) => {
    return db.Cart.findByIdAndDelete({_id:id}).then((data) => {
        if(data){
            console.log(data);
            return {
                status:true,
                statuscode:200,
                message:'success'
            }
        }else{
            return {
                status:false,
                statuscode:400,
                message:'error'
            }
        }
    })
}

module.exports = {deletecart}