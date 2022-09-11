const express = require('express')
const app = express()
const router = express.Router()

app.use(express.json())

const User = require('../models/user.models')

router.get('/', async(req,res)=>{
    const data = req.body
    try {
        const user = await User.find()
        user.map((u)=>{
            if(u.email === data.email){
                if(u.password === data.password){
                    res.json(u._id)
                }else{
                    res.send("Invalid Password")
                }
            }
        })
    } catch (error) {
        res.send(error)
    }
})

module.exports = router