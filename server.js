const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const MongoClient = require('mongodb').MongoClient

// Make sure you place body-parser before your CRUD handlers!
app.use(bodyParser.urlencoded({ extended: true }))


app.listen(3000, function () {
    console.log('listening on 3000')
})

// app.get('/', (req, res) => {
//     res.sendFile(__dirname + '/index.html')
// })

// app.post('/quotes', (req, res) => {
//     console.log(req.body)
// })

MongoClient.connect('mongodb+srv://tarunraja2001:jqEep0ACj11xoMMK@cluster0.pzske8o.mongodb.net/?retryWrites=true&w=majority', (err, client) => {
    if (err) return console.error(err)
        console.log('Connected to Database')
})