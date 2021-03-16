const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const userRoutes = require('./routes/user')
const cardsRoutes = require('./routes/cards')
const auth = require('./auth/lib')

// mongo database setup
const local_db_url = 'mongodb://localhost/Flashcard'
const mongoDB = process.env.MONGODB_URI || local_db_url
mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true})
const connection = mongoose.connection
connection.on('error', () => console.log('db error'))

// express and middleware setup
const app = express()
const appPort = 3000
app.all('*', auth.verifyToken)
app.use(express.json())
app.use(cors())
app.use('/user', userRoutes)
app.use('/cards', cardsRoutes)
app.listen(appPort)