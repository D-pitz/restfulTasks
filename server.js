const express = require('express')
const mongoose = require('mongoose')
const app = express()

mongoose.connect('mongodb://localhost/tasks', {useNewUrlParser: true})

app.use(express.static(__dirname + '/public/dist/public'))
app.use(express.urlencoded({extended:true}))
app.use(express.json({extended:true}))

require('./server/config/routes')(app)


app.listen(8000, ()=>{
    console.log('listening on port 8000')
})
