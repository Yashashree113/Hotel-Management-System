const { request, response } = require("express");
const express = require("express");
const mongoose=require('mongoose')
const router = express.Router();


router.get('/',(req,res)=>{
    res.render('');
})
module.exports=router;