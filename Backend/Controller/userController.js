const DoctorLogin = require('../Models/DoctorLoginSchema')

const loginuser = async(req,res) => {
    res.json({msg:"Login User"})
}
const signUpuser = async(req,res) => {
    res.json({msg:"signup User"})
}
module.exports = {signUpuser , loginuser}