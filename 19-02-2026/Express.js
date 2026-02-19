const express = require('express');
const app = express();
const port = 8000;
app.get('/',(req,res)=>{
    res.send('Post request to the homepage');
});
app.get('/about',(req,res)=>{
    res.send('About Page');
});
app.all('*',(req,res)=>{
    res.status(404).send('404-Page not found');
});
app.listen(port,()=>{
    console.log(`Server now listening to port ${port}`);
});