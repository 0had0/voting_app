const express = require('express')
const app = express()
const mongoose = require('mongoose')
const router = require('./routes/api/index')

//Get env variable
require('dotenv').config()

//Connect to MongoDB
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true })

//Etablish Connection
const db = mongoose.connection

//handle DB Connection error
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('connected to database'))

app.use(express.json());
app.use('/api', router)

app.listen(3000, () => console.log('server started'))