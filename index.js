const express = require('express')
const app = express()
const port = 3000

const mongoose = require('mongoose')
mongoose.connect('mongodb://root:password@192.168.0.148:27017',{
    useNewUrlParser: true, 
    useUnifiedTopology: true, 
    

    }
).then( () => console.log("MongoDB Connect success"))
 .catch(err => console.log(err))



app.get('/', (req, res) => {
  res.send('Hello World! 안녕하세요')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})