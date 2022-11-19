const express = require('express')
const db = require('./db')
const cors = require('cors')
const auth = require('./authservice')
const admin = require('./admin/add-product')
const deleteData = require('./admin/delete')
const editData = require('./admin/edit')
const addtocart = require('./cart')
const deletecart = require('./deletecart')
const order = require('./orders')
const app = express()

app.use(cors({
    origin:'http://localhost:4200'
}))
app.use(express.json())

    
app.post('/signup',(req,res)=> {
    auth.signup(req.body.name,req.body.phone,req.body.email,req.body.password)
    .then((result) => {
        res.status(result.statuscode).json(result)
    })
})

app.post('/login',(req,res) => {
    auth.login(req.body.email,req.body.password)
    .then((result) => {
        res.status(result.statuscode).json(result)
    })
})

//------------------------------------ POST the Products..

app.post('/addProduct',(req,res)=> {
    admin.addProduct(req.body.productname,req.body.price,req.body.image,req.body.category,req.body.description).then((result) => {
        res.status(result.statuscode).json(result)
    })
})

//---------------------------------GET the Products...................

app.get('/getproduct',(req,res) =>{
    db.Product.find()
    .then((result) => {
        res.status(200).json({
            item:result
        })
    })
})

//---------------------------GET users -----------------------------------
app.get('/users',(req,res) => {
    db.User.find().then((result) => {
        res.status(200).json(result)
    })
})

//-------------Delete product -----------------------------------------

app.delete('/deleteproduct/:id',(req,res) => {
    deleteData.deleteproduct(req.params.id).then((data) => {
        console.log("dataaa",data);
        res.status(data.statuscode).json(data)
    })
})

// ---------delete user-----------------------------------------

app.delete('/deleteuser/:id',(req,res) => {
    deleteData.deleteUser(req.params.id).then((data) => {
        res.status(data.statuscode).json(data)
    })
})

//-----------edit user -----------------------------

app.put('/edituser/:id',(req,res) => {
        let newdata = {
            name:req.body.name, 
            phone:req.body.phone,
            email:req.body.email,
            password:req.body.password
        }
        db.User.findByIdAndUpdate(req.params.id, {$set:newdata},{new:true}, (err,doc) =>{
            if(err){
                console.log("error in update");
            }else{
                
                res.send(doc)
            }
        }) 
})





//------------------------------Edit the Product -----------------------------

app.put('/editProduct/:id',(req,res) => {
    let product = {
        productname:req.body.productname,
        price:req.body.price,
        image:req.body.image,
        category:req.body.category,
        description:req.body.description
    }

    db.Product.findByIdAndUpdate(req.params.id, {$set:product} ,{new:true} ,(err,doc) => {
        if(err){
            console.log("error");
        }else{
            
             res.send(doc)
        }
    })
})

// --------------get the single product by id --------------------------- 
app.get('/single-product/:id',(req,res) => {
    db.Product.findById(req.params.id).then((data) => {
        res.status(200).json(data)
    })
})
//--------------------add to cart-----------------------

app.post('/addtocart',(req,res)=> { 
    addtocart.addtocart(req.body.productname,req.body.price,req.body.image,req.body.category,req.body.description).then((data) => {
        res.status(data.statuscode).json(data)
    })
})


// ------------------------------get the cart-----------------------------
app.get('/getCart',(req,res) =>{
    db.Cart.find()
    .then((result) => {
        res.status(200).json({
            item:result
        })
    })
})

//-----------------------------remove from cart-----------------------------

app.delete('/removecart/:id',(req,res)=> {
    deletecart.deletecart(req.params.id).then((data)=> {
        res.status(data.statuscode).json(data)
    })
})
//---------------------------add the orders----------------------
app.post('/orders',(req,res) => {
    console.log(res.body)
    order.orders(req.body.productname,req.body.price,req.body.image,req.body.category,req.body.description,req.body.firstname,req.body.secondname,req.body.pin,req.body.address,req.body.email,req.body.phone,req.body.payment,req.body.amount,req.body.orderStatus).then((data) => {
        res.status(data.statuscode).json(data)
    })
})
// ====================get the orders ===================
app.get('/orderpage',(req,res) => {
    db.Order.find().then((data)=> {
        if(data){
            res.status(200).json(data)
        }
    })
})

//------------------------update the order status---------------------------
app.put('/orderchange/:id',(req,res)=>{
    console.log("body ",req.body)
    db.Order.findOneAndUpdate(req.params.id,{$set:{orderStatus:"shipped"}},{new:true},(err,doc) => {
        if(err){
            console.log("error")
        }else{
            res.send(doc)
            console.log("doc working",doc)
        }
    })
})




app.listen(3000,()=> {
    console.log("port running");
})