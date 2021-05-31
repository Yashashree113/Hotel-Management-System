const express = require("express");
const router = express.Router();
const mongoose=require('mongoose')
const bcrypt= require('bcrypt')
const jwt= require('jsonwebtoken')

const Receptionist= require('..model/receptionist')

mongoose.connect('mongodb+srv://admin:EK709XD6rjXFuznt@cluster0.fxdvc.mongodb.net/admindata?retryWrites=true&w=majority',
{useNewUrlParser: true}, (err)=>{
    if(!err) {
        console.log('MongoDB connected successfully')
    }
    else{console.log('Error in DB connection: '+err)}
})

router.get('/signup',(req,res)=>{
    Receptionist.find({email:req.body.email})
    .exec()
    .then(admin=>{
        if(admin.length>=1){
            return res.status(409).json({
                message:'Email exists'
            })
        }
        else{
            bcrypt.hash(req.body.password, 10, (err, hash)=>{
                if(err){
                    return res.status(500).json({
                        error:err
                    })
                }else{
                    const admin=new Receptionist({
                        email: req.body.email,
                        password: hash
                            
                    })
                    admin.save()
                    .then(result=>{
                        console.log(result)
                        res.status(201).json({
                            message:'Admin created'
                        })
                    })
                    .catch(err=>{
                        console.log(err)
                        res.status(500).json({
                            error:err
                        })
                    });
                    }
            })
        }
    })

router.post('/login',(req,res)=>{
    Receptionist.find({email:req.body.email})
    .exec()
    .then(admin=>{
        if(admin.length<1){
            return res.status(401).json({
                message:'Auth Failed'
            })
        }
        bcrypt.compare(req.body.password, admin[0].password,(err,result)=>{
            if(err){
                return res.status(401).json({
                    message:'Auth Failed'
                })
            }
            if(result){
                const token=jwt.sign({
                    email: admin[0].email,
                    adminId: admin[0]._id
                },
                process.env.JWT_KEY_RECEPTIONIST,
                {
                    expiresIn: "1h"
                })
                return res.status(200).json({
                    message:'Auth successful',
                    token:token
                })
            }
            res.status(401).json({
                message:'Auth Failed'
            })
        })
    })
    .catch(err=>{
        console.log(err)
        res.status(500).json({
            error:err
        })
    })
})
router.delete('/:adminId',(req,res,next)=>{
    Receptionist.remove({_id:req.params.adminId})
    .exec()
    .then(result=>{
       
        res.status(200).json({
            message:'Admin deleted'
        })
    })
    .catch(err=>{
        console.log(err)
        res.status(500).json({
            error:err
        })
    })
})
})
module.exports=router;