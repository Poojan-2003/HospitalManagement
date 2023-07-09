const express = require('express')

const router = express.Router()
const {signUpuser , loginuser}  = require('../Controller/userController')
router.post('/login',loginuser)
router.post('/signup',signUpuser)

module.exports = router