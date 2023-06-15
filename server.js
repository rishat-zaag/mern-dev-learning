// console.log("Hello From the Other side");
const express=require('express');
const mongoose=require('mongoose');
const product=require('./models/productModel');
const app=express();

app.use(express.json());

//routes
app.get('/',(req,res)=>{
    res.send('Hello Client');
});
app.get('/blog',(req,res)=>{
    res.send('Hello from the blog route');
});

app.get('/products',async(req,res)=>{
    try {
        const products=await product.find({});
       res.status(200).json(products);
    } catch (error) {
        res.status(500).json({message:error.message})
    }
})


app.get('/products/id',async(req,res)=>{
    try {
        const{id}=req.params;
        const product=await product.findById();
       res.status(200).json(product);
    } catch (error) {
        res.status(500).json({message:error.message})
    }
})


app.post('/products',async(req,res)=>{
    // console.log(req.body)
    // res.send(req.body)
    try {
        const product=await product.create(req.body)
        res.status(200).json(product)
    } catch (error) {
        console.log(error.message)
        res.status(500).json({message: error.message})
    }

});

mongoose.set("strictQuery",false);

mongoose.connect('mongodb+srv://admin:admin1234@node-test-1.wgx5i0z.mongodb.net/crud-api?retryWrites=true&w=majority')
.then(()=>{
    app.listen(3000,()=>{
        console.log('Node is running on port : 3000');
    });
    console.log('Connected to Mongo Atlas')
}).catch((error)=>{
    console.log(error);
})