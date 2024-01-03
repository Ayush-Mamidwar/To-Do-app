const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
require('dotenv').config()

const routes = require('./routes/ToDoroutes')

const PORT = process.env.PORT || 5000

mongoose.connect(process.env.MONGO_URI)
    .then(()=>{console.log("successfully connected to mongo")})
    .catch((err)=>{console.log(err)})

const app = express();

app.use(express.json())
app.use(cors())
app.use(routes)

app.listen(PORT,()=>{console.log(`running on port ${PORT}`)})