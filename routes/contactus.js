const express=require('express');
const contactusController=require('../controller/contactus.js')

const router=express.Router();
router.get('/contactus', contactusController.getContact);
router.post('/contactus',contactusController.postContact);
module.exports=router;
