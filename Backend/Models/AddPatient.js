const mongoose = require('mongoose')

const Schema = mongoose.Schema

const AddPatientSchema = new Schema({
    fname:{type:String , required:true},
    mname:{type:String , required:true},
    lname:{type:String , required:true},
    email:{type:String , required:true},
    age:{type:Number , required:true},
    mobile:{type:Number , required:true},
    gender:{type:String,required:true},
    bloodgroup:{type:String , required:true},
    marriedstatus:{type:String , required:true},
    address:{type:String , required:true},
    height:{type:Number , required:true},
    weight:{type:Number,required:true},
    

},{collection:'AddPatient'}
)
const AddPatientLog = mongoose.model('AddPatient', AddPatientSchema)
module.exports = AddPatientLog