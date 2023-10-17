const express = require('express')
const app = express()
const port = 3000
const sushiRoutes = require('./route/sushi')
const session = require('express-session')
const mongodbSession = require('connect-mongodb-session')(session)
const mongoUri = "mongodb://localhost:27017/sessions"

const mongoose = require('mongoose')

const store = new mongodbSession({
    'uri': mongoUri,
    collection: "mySessions",
})

app.use(
    session({
        secret: "This is the key",
        resave: false,
        saveUninitialized: false,
        store : store
    })
)
mongoose
    .connect('mongodb://localhost:27017/foodtruck')
    .then(()=>{
        console.log('On est bien connectés')
    })
    .catch((err)=>{console.log(err)})


app.get('/connect', (req, res)=>{
    req.session.isAuth = true
    console.log(req.session)
    res.send('Connected')
})


app.use(express.json())
app.use('/api/sushi', sushiRoutes)


app.listen(port, ()=>{
    console.log('Hello World !')
})



