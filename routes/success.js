
const express=require('express');

const router=express.Router();
const successController=require('../controller/success.js')
router.get('/success',successController.getSuccess);
module.exports=router;