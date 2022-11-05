
const express = require('express')
const db = require('./db')
const auth = require('./authservice')

const app = express()

app.use(express.json())

    
app.post('/signup',(req,res)=> {
    auth.signup(req.body.name,req.body.phone,req.body.password)
    .then((result) => {
        res.status(result.statuscode).json(result)
    })
})

app.post('/login',(req,res) => {
    auth.login(req.body.phone,req.body.password)
    .then((result) => {
        res.status(result.statuscode).json(result)
    })
})






app.listen(3000,()=> {
    console.log("port running");
})