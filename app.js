const express = require('express');
const path = require('path');
const app = express();

app.use(express.static('./public'))

// app.get('/',(req,res)=>{
//     res.sendFile(path.resolve(__dirname,'./navbar-app/index.html'))
// })

//adding to static assests 
//SSR
/*Now we have removed the app.get for root url and added index.html to public folder.
so by default the app will always serve the index.html as root file
*/

app.all('*',(req,res)=>{
    res.status(404).send('resource not found');
})

app.listen(5000,()=>{
    console.log(`server is listening on port ${5000}`);
});