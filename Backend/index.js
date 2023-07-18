// const express = require ('express')
// const cors = require('cors')
// const  mongoose  = require('mongoose')

// const userRoutes = require('./Routes/user')

// const app = express()
// app.use(express.json())
// app.use(cors)

// app.use('/api/user',userRoutes)
// app.get('/hello',(req,res)=>{
//     res.send("Hello")
// })
//Connection To Database + Assigning Port forBackend
// mongoose.connect("mongodb://localhost:27017/SGP",{
//     useNewUrlParser:true,
//     useUnifiedTopology:true
// },(err)=>{
//     if(err)console.log(err)
//     else{
//         console.log("Connected To Database")
//     }
// })
// const port = process.env.PORT || 1337
// app.listen(port,() => console.log(`Running  on ${port}`))


const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const DocLog = require('./Models/DoctorLoginSchema')
const AddPatientLog = require('./Models/AddPatient')
mongoose.connect('mongodb://localhost:27017/SGP')

const jwt = require('jsonwebtoken')
const app = express()

app.use(cors())
app.use(express.json())

app.post('/api/register' , async(req , res) => {
    console.log(req.body)
    try{
        const user = await DocLog.create({
            name:req.body.name,
            speciality:req.body.speciality,
            contact : req.body.contact,
            email:req.body.email,
            password:req.body.password 
        })
        res.json({status:'ok'})
    }catch(err){
        res.json({status:'error',error:'Duplicate Email'})
    }
    
})


app.post('/api/login' , async(req , res) => {
    
        const user = await DocLog.findOne({
            email:req.body.email,
            password:req.body.password
        })
        if(user){
            const token = jwt.sign({
                name:user.name,
                email:user.email
            },
            'secret123'
            )
            return res.json({status:'ok',user:token})
        }else{
            return res.json({status:'error',user:false})
        }
        
})

// app.post('/api/AddPatient' , async(req , res) => {
//     console.log(req.body)
//     try{
//         const user = await AddPatientLog.create({
//             fname:req.body.name,
//             mname:req.body.speciality,
//             lname : req.body.contact,
//             email:req.body.email,
//             age:req.body.age, 
//             bloodgroup:req.body.bloodgroup, 
//             marriedstatuse:req.body.marriedstatus, 
//             gender:req.body.gender,
//             address:req.body.address, 
//             height:req.body.height, 
//             weight:req.body.weight, 
//             mobile:req.body.mobile
//         })
//         res.json({status:'ok'})
//     }catch(err){
//         res.json({status:'error',error:'Error In Inserting data'})
//     }
    
// })

app.post('/api/AddPatient',(req,res)=>{
    const {email} = req.body

    AddPatientLog.findOne({email:email})
    .then(user =>{
        if(user){
            res.json({status:'error',error:'Duplicate Email'})
        }else{
            AddPatientLog.create(req.body)
            .then(AddPatient => res.json(AddPatient))
            // .then(setModalOpen(!modalOpen))
            // .then(alert("New Patient Added Successfully"))
            .then(console.log("Added"))
            // .then(window.location.href='/Patient')
            .catch(err => res.json(err))
            res.json({status:'ok'})
        }
    })
    
})

app.listen(1337 , () => {
    console.log('Port 1337')
})