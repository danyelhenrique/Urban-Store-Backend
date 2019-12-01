require('./config/dotenv')
require('./config/mongoDb')

const express = require('express')

const Recepie = require('./app/models/schemas/Recepie')
const User = require('./app/models/schemas/User')


const app = express()
const PORT = process.env.PORT || 3333


app.listen(PORT, () => {
    console.log(`SERVER IS RUNNIG ON ${PORT}`)
})