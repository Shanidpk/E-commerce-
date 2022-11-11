// const db = require('../db')
// const objectId = require('mongoose').Types.ObjectId

// const edituser = (id) => {
//    return db.User.findByIdAndUpdate({_id:id}).then((data) => {
//     if(data){
//           newdata = ({
//             name,phone,email,password
//           })

//         newdata.save()

//         return{
//             status:true,
//             statuscode:200,
//             message:"success"
//         }
//     }else{
//         return{
//             status:false,
//             statuscode:400,
//             message:"failed"
//         }
//     }   
// })
// }

// module.exports = {edituser}