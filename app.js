const express = require('express')
const app = express()
const morgan = require('morgan');
const logger = require("./logger")
const authorize = require("./authorize")
//req => middleware => res

//1. use ve route
//2.options- our own / express/ 3rd party

//app.use([logger, authorize])
//app.use(express.static('./public'))
app.use(morgan('tiny'))

app.get('/',(req,res)=>{
    res.send('Home');
})
app.get('/about',(req,res)=>{
    res.send('About')
})
app.get('/api/products',(req,res)=>{
    res.send('Products');
})
app.get('/api/items',[logger, authorize],(req,res)=>{
    res.send('About')
})


app.listen(5000, () => {
  console.log('Server is listening on port 5000....')
})