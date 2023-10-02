const http=require('http');

const adminRouter=require('./routes/admin');
const shopRouter=require('./routes/shop');
const express=require('express');
const bodyParser = require('body-parser');

const app=express();
app.use(bodyParser.urlencoded({extended:false}));

app.use('/admin',adminRouter);
app.use('/shop',shopRouter);
app.use((req,res,next)=>{
    res.status(404).send('<h1>Page not found</h1>')
});

app.listen(4000);