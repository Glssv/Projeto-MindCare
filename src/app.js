require('dotenv').config()
const express = require('express')
const cors = require('cors')
const mongoose = require('./database/dbconnect')

const consultoriosRoutes = require("./routes/consultoriosRoute")

const app = express()
app.use(express.json())
app.use(cors())
mongoose.connect()

app.use("/mindcare", consultoriosRoutes)

module.exports = app