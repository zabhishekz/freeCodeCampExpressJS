/*
Express.js

API-
JSON
send data
res.json()

SSR-
template
send template
res.render()
*/

const express = require('express');
const app = express();

app.get('/',(req,res)=>{
    res.json([{name: 'john'},{name: 'susan'}]);
})

app.listen(5000,()=>{
    console.log("server is listening on port 5000...");
})