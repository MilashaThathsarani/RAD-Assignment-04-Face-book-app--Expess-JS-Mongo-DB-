const express = require('express');
const router = express.Router();
const Post = require('../Models/post.models')


router.post('/',async (req,res) =>{
    const post = new Post({
        userId: req.body.userId,
        date : req.body.date,
        time: req.body.time,
        title: req.body.title,
        body: req.body.body
    })

    try {
        const response = await post.save()
        res.json(response)
    }catch (err) {
        res.send('Err:' + err)
    }
})

router.get('/',async (req,res) =>{
    try {
        const posts = await Post.find()
        res.send(posts)
    }catch (err) {
        res.send('Err:'+ err)
    }
})

router.get('/:id',async (req,res) =>{
    try {
        const post = await Post.findById(req.params.id)
        res.json(post)
    }catch (err) {
    }
})


router.delete('/:id',async (req,res) =>{
    try {
        const post = await Post.findById(req.params.id)
        const response = await post.remove()
        res.json(response)
    }catch (err) {
        res.send('Err:'+ err)
    }
})

module.exports = router