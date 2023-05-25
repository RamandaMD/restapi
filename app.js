const express = require('express')
const app = express()
require('dotenv/config')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')
require('dotenv/config')

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());
app.use(cors())


const postRoutes = require("./routes/post")
app.use('/post', postRoutes)
app.get('/', (req, res) => {
    res.send('Hello GAEEYYSSSS')
})

mongoose.connect(process.env.DB_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

let db = mongoose.connection

db.on('error', console.error.bind(console, 'Error Establishing a Database Connection?'))

db.once('open', () => {
    console.log('Database is connected')
})

app.listen(process.env.PORT, () => {
    console.log(`Server Running on port ${process.env.PORT}`)
})