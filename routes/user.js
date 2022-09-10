const express = require('express');
const router = express.Router();
const User = require('../Models/user.models')

router.post('/',async (req,res) =>{
    const user = new User({
        firstName: req.body.firstName,
        surName: req.body.surName,
        gender: req.body.gender,
        dateOfBirth: req.body.dateOfBirth,
        password: req.body.password,
        phoneNumber: req.body.phoneNumber,
        email: req.body.email
    })

    try {
        const response = await user.save()
        //res.send(response)
        res.json(response)
    }catch (err) {
        res.send('Err:' + err)
    }
})



module.exports = router