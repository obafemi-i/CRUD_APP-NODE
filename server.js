const express = require('express')
const dotenv = require('dotenv')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const path = require('path')

const connectDB = require('./server/database/connect')

const app = express()

dotenv.config({path:'config.env'})
const port = process.env.port || 8080

// log requets
app.use(morgan('tiny'))

connectDB()

app.use(bodyParser.urlencoded({extended:false}))

app.set("view engine", "ejs")

app.use('/css', express.static(path.resolve(__dirname, 'assets/css')))
app.use('/img', express.static(path.resolve(__dirname, 'assets/img')))
app.use('/js', express.static(path.resolve(__dirname, 'assets/js')))


app.use('/', require('./server/routes/router'))
app.listen(port, ()=>{
    console.log(`Server listening on port ${port}`);
})

