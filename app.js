const express = require('express')
const dbConfig = require('./config/dbConfig.js')
const mongoose = require('mongoose')

mongoose.Promise = global.Promise

const app = express()
app.use(express.json())

const port = 2000

mongoose.connect(dbConfig.url,{
    useNewUrlParser: true
}).then((res)=>{
    console.log("Connection made successfully ")
    console.log(module)
}, (err)=>{
    console.log("Error happened ",err)
}).catch(err => {
    console.log("Could not connect with db. Exiting now...",err);
    process.exit()
})

require('./routes/routes.js')(app)

app.listen(port,'127.0.0.2', () => console.log(`Example app listening on port ${port}!`))
