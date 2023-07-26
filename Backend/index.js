const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const DocLog = require('./Models/DoctorLoginSchema')
// const AddPatientLog = require('./Models/AddPatient')
const addPatientModel = require('./Models/AddPatient')
mongoose.connect('mongodb://localhost:27017/SGP')
.then(console.log("Connected to database"))

const jwt = require('jsonwebtoken')
const AddMedicineModel = require('./Models/AddMedicine')
const AddDoctorModel = require('./Models/AddDoctor')
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
//             mobile:req.body.mobile,
//             date:req.body.birthdate,
           
//         })
//         res.json({status:'ok'})
//     }catch(err){
//         res.json({status:'error',error:'Error In Inserting data'})
//     }
    
// })

// app.post('/api/AddPatient',(req,res)=>{
//     // const {email} = req.body

//     // AddPatientLog.findOne({email:email})
//     // .then(user =>{
//     //     if(user){
//     //          return res.json({status:'error',error:'Duplicate Email'})
//     //     }else{
//     //         AddPatientLog.create(req.body)
//     //         .then(AddPatient => res.json(AddPatient))
//     //         // .then(setModalOpen(!modalOpen))
//     //         // .then(alert("New Patient Added Successfully"))
//     //         .then(console.log("Added"))
//     //         // .then(window.location.href='/Patient')
//     //         .catch(err => res.json(err))
//     //          res.json({status:'ok'})
//     //     }
//     // })
    
// })

// app.get('/AllPatient', async (req,res) => {
//     try{
//         const AllPatient = await addPatientModel.find({status:{$eq:1}}).then(documents => {
//             if (documents.length > 0) {
//               return res.send(documents)
//             } else {
//               console.log('No documents found');
//             }    
//           })
//           .catch(error => {
//             console.error('Error finding documents:', error);
            
//           });
//         // res.send({status:'ok',data:AllPatient}) 
//     }catch(err){
//         console.log(err)
//     }
// })


// app.delete('/DeletePatient/:id' , (req,res) => {
//     const id =req.params.id;
//     addPatientModel.findByIdAndDelete({_id:id})
//     .then(res => {return res.send({status:'ok'})})
//     .catch(err => res.json({status:'error',error:err}))    
// })


// app.post("/addPatient" , (req,res) => {
//     const {email} = req.body

//      addPatientModel.findOne({email:email})
//     .then(user=>{
//         if(user){
//             return res.json({status:'error',error:'Duplicate Email'})
//         }else{
//             addPatientModel.create(req.body)
//             // .then(addpatient => res.json(addpatient))
//             .then(res.send({status:'ok'}))
//             // .catch(err => console.log(err))
//              .catch(res.send({status:'error',error:'Error In Inserting data'}))
//         }
//       }
//     )
    
   
// })




















app.get('/AllPatient', async (req,res) => {
    const AllPatientData = await addPatientModel.find({})
    try{
        res.status(200).json({
            status : 'ok',
            data : {
                AllPatientData
            }
        })
    }catch(err){
        res.status(500).json({
            status: 'err',
            message : err
        })
    }
})




app.post('/addPatient', async(req,res) => {
    const {email} = req.body
    // const patientdata = new addPatientModel(req.body)
    // try{
    //     await patientdata.save()
    //     res.status(201).json({
    //         status: 'Success',
    //         data : {
    //             patientdata
    //         }
    //     })
    // }catch(err){
    //     res.status(500).json({
    //         status: 'Failed',
    //         message : err
    //     })
    // }

    addPatientModel.findOne({email:email})
    .then(user => {
        if(user) {res.status(205).json({
            status:'err',
            message:'Email Already exists'
        })}
        else{
            const patientdata = new addPatientModel(req.body)
             patientdata.save()
             res.status(201).json({
                status: 'Success',
                data : {
                    patientdata
                }
            })
        }

    })
})


app.delete('/DeletePatient/:id', async(req,res) => {
    await addPatientModel.findByIdAndDelete(req.params.id)
    
    try{
       res.status(204).json({
          status : 'ok',
          data : "Patient Deleted Successfully"
      })
    }catch(err){
         res.status(500).json({
            status: 'error',
            message : err
        })
    }
})

//Fetching Medicine
app.get('/AllMedicine', async (req,res) => {
    const AllMedicine = await AddMedicineModel.find({})
    try{
        res.status(200).json({
            status : 'ok',
            data : {
                AllMedicine
            }
        })
    }catch(err){
        res.status(500).json({
            status: 'err',
            message : err
        })
    }
})


//Adding Medicine
app.post('/AddMedicineData', async(req,res) => {
    const {name} = req.body
    AddMedicineModel.findOne({name:name})
    .then(user => {
        if(user) {res.status(205).json({
            status:'err',
            message:'Medicine Already exists'
        })}
        else{
            const MedicineData = new AddMedicineModel(req.body)
            MedicineData.save()
             res.status(201).json({
                status: 'Success',
                data : {
                    MedicineData
                }
            })
        }

    })
})

//Deleting Medicine
app.delete('/DeleteMedicine/:id', async(req,res) => {
    await AddMedicineModel.findByIdAndDelete(req.params.id)
    
    try{
       res.status(204).json({
          status : 'ok',
          data : "Medicine Deleted Successfully"
      })
    }catch(err){
         res.status(500).json({
            status: 'error',
            message : err
        })
    }
})



app.get('/AllDoctor', async (req,res) => {
    const AllDoctorData = await AddDoctorModel.find({})
    try{
        res.status(200).json({
            status : 'ok',
            data : {
                AllDoctorData
            }
        })
    }catch(err){
        res.status(500).json({
            status: 'err',
            message : err
        })
    }
})




app.post('/AddDoctor', async(req,res) => {
    const {email} = req.body
    // const patientdata = new addPatientModel(req.body)
    // try{
    //     await patientdata.save()
    //     res.status(201).json({
    //         status: 'Success',
    //         data : {
    //             patientdata
    //         }
    //     })
    // }catch(err){
    //     res.status(500).json({
    //         status: 'Failed',
    //         message : err
    //     })
    // }

    AddDoctorModel.findOne({email:email})
    .then(user => {
        if(user) {res.status(205).json({
            status:'err',
            message:'Doctor Already exists'
        })}
        else{
            const Doctordata = new AddDoctorModel(req.body)
            Doctordata.save()
             res.status(201).json({
                status: 'Success',
                data : {
                    Doctordata
                }
            })
        }

    })
})


app.delete('/DeleteDoctor/:id', async(req,res) => {
    await AddDoctorModel.findByIdAndDelete(req.params.id)
    
    try{
       res.status(204).json({
          status : 'ok',
          data : "Doctor Deleted Successfully"
      })
    }catch(err){
         res.status(500).json({
            status: 'error',
            message : err
        })
    }
})


app.listen(1337 , () => {
    console.log('Port 1337')
})