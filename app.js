const express = require('express')
const morgan = require('morgan')

const userRouter = require('./routes/userRoutes')

const app = express()


//MIDDLEWARE
app.use(morgan('dev'))
app.use(express.json())

//ROUTES
app.use('/user', userRouter)

module.exports = app;