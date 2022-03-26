


// impor modul express ej layouts
const expressLayouts = require('express-ejs-layouts')
// import express
const express = require('express')
const app = express()

// import module router
const router = require('./routers')


// Module untuk autentikasi
const passport = require('passport')
const flash = require('express-flash')
const session = require('express-session')

app.set('view engine', 'ejs')
app.use(expressLayouts)
app.use(express.urlencoded({ extended: false})) // untuk mengirim data dari form melalui parameter req
app.use(express.json())

// Middleware untuk autentikasi & session
app.use(flash())
app.use(session({
  secret: 'fejsbinar',
  resave: false,
  saveUninitialized: false
}))
app.use(passport.initialize())
app.use(passport.session())


// setup view engine
app.set('view engine', 'ejs')
app.use(expressLayouts) 
app.use(express.urlencoded({ extended: false}))
app.set('layout', 'layouts/default')

app.set('partials', 'partials/login')

// setup public folder
app.use( express.static('public') )



// Default Router ada di layout 
app.get('/', (req,res) => { res.render('index') })
app.use('/partials/',router.partial)
app.use('/auth/',router.auth)




app.listen(1500, () => {console.log(`is running...`) })

