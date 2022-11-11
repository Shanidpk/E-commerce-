const db = require('./db')

const signup = ((name,phone,email,password) => {
   return db.User.findOne({phone}).then(user => {
        if(user){
            return {
                status:false,
                statuscode:401,
                message:"error"
            }
        }else{
            const newdata = new db.User({
                name,phone,email,password
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


const login = ((email,password) => {
    return db.User.findOne({email,password}).then((data) => {
        if(data){
            return{
                status:true,
                statuscode:200,
                message:'Login success'
            }
        }else{
            return{
                status:false,
                statuscode:401,
                message:"Login failed"
            }
        }
    })
})





module.exports = {signup,login}