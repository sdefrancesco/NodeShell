var express = require('express')
var router = express.Router();
//bring in post schema
var Post = require('../models/post')

router.get('/', function(req, res) {
    Post.find({},function(err, posts) {
        res.render('index', {
            posts: posts
        })
    })
})

router.post('/new', function(req, res) {
    var newPost = new Post()
    newPost.title = req.body.title
    newPost.description = req.body.description
    newPost.created_at = new Date()
    newPost.save(function(err) {
        if(err) {
            throw err
        } else {
            console.log('Created New Post')
        }
    })
    res.send('added post')
})

router.get('/posts.json', function(req, res) {
    Post.find({}, function(err, post) {
        if (err) {
            throw err
        }
        res.json(post)
    })
})

module.exports = router