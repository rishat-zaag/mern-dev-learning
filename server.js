// console.log("Hello From the Other side");
const express=require('express');
const app=express();

//routes
app.get('/',(req,res)=>{
    res.send('Hello Client');
});

app.listen(3000,()=>{
    console.log('Node is running on port : 3000');
});