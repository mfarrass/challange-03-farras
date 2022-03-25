global.users = []

// impor modul express ej layouts
const expressLayouts = require('express-ejs-layouts')
// import express
const express = require('express')
const app = express()

// import module router
const router = require('./routers')



// setup view engine
app.set('view engine', 'ejs')
app.use(expressLayouts)
app.use(express.urlencoded({ extended: false}))
app.set('layout', 'layouts/default')

// setup public folder
app.use( express.static('public') )



// Default Router ada di layout 
app.get('/', (req,res) => { res.render('index') })

app.use('/partials',router.partial)
app.use('/auth',router.auth)




app.listen(1500, () => {console.log(`is running...`) })

