const db = require ('../db')



//-----------------------------to delete product-------------------------

const deleteproduct = (id) => {
    
    return db.Product.findByIdAndDelete({_id:id}).then((data)=> {
        if(data){
            console.log(data);
            return {
                status:true,
                statuscode:200,
                message:'success'
            }
        }
    })
}

const deleteUser = (id) => {
    return db.User.findByIdAndDelete({_id:id}).then((data) => {
        if(data){
            return{
                status:true,
                statuscode:200,
                message:"success"
            }
        }else{
            return{
                status:false,
                statuscode:404,
                message:"error"

            }
        }
    })
   
}


module.exports = {deleteUser,deleteproduct}