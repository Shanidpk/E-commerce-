const db = require('./db')

const signup = ((name,phone,password) => {
   return db.User.findOne({phone}).then(user => {
        if(user){
            return {
                status:false,
                statuscode:401,
                message:"error"
            }
        }else{
            const newdata = new db.User({
                name,phone,password
            })
            newdata.save()
            return{
                status:true,
                statuscode:200,
                message:"success"
            }
        }
    })
})


const login = ((phone,password) => {
    return db.User.findOne({phone}).then((data) => {
        if(data){
            return{
                status:true,
                statuscode:200,
                message:'success'
            }
        }else{
            return{
                status:false,
                statuscode:400,
                message:"Login failed"
            }
        }
    })
})





module.exports = {signup,login}