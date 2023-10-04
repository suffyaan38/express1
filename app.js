const path=require('path');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const contactusRoutes=require('./routes/contactus.js');
const successRoutes=require('./routes/success.js');

app.use(bodyParser.urlencoded({extended: false}));

app.use(adminRoutes);
app.use(shopRoutes);
app.use(contactusRoutes);
app.use(successRoutes);

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname,'views','pagenotfound.html'));
});

app.listen(3000);
