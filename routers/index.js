const express = require('express')
const router = express.Router()
const auth = require('../controllers/auth')

// Partial Router
router.get('/', (req,res) => {
    res.render('partials/index')
})
router.get('/profile', (req,res) => {
    res.render('partials/profile')
})
router.get('/addunit', (req,res) => {
    res.render('partials/addunit')
})
router.get('/login', (req,res) => {
    res.render('auth/login')
})

router.get('/register', auth.register)
router.get('/login', auth.login)
router.post('/register', auth.post.register)
router.post('/login', auth.post.login)
module.exports = {
    partial: router,
    user : router,
    auth: router
} 