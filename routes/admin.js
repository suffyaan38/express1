const path=require('path');
const express = require('express');
const router = express.Router();
const rootDir=require('../util/path')
// /admin/add-product => GET
router.get('/admin/add-product', (req, res, next) => {
  res.sendFile(path.join(rootDir,'views','addproduct.html'))
});

// /admin/add-product => POST
router.post('/admin/add-product', (req, res, next) => {
  console.log(req.body);
  res.redirect('/');
});

module.exports = router;
