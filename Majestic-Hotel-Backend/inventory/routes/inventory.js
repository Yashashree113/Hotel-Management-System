const { req, res } = require("express");
const express = require("express");
const mongoose=require('mongoose')
const router = express.Router();
var ObjectId=require('mongoose').Types.ObjectId

var Inventory=require('../model/inventory')
//=> localhost:8000/rooms
router.get('/',(req,res)=>{
    Inventory.find((err,docs)=>{
        if(!err){res.send(docs);}
        else{console.log('Error in retriving Inventory:'+JSON.stringify(err, undefined, 2));}
    });
})
router.get('/:id',(req,res)=>{
   if(!ObjectId.isValid(req.params.id))
   return res.status(400).send('No record with given id: ${req.params.id}')
   Inventory.findById(req.params.id,(err,doc)=>{
    if(!err){res.send(doc);}
    else{console.log('Error in retriving Inventory:'+JSON.stringify(err, undefined, 2));}
   })
})

router.post('/',(req,res)=>{
    var inventory= new Inventory({
        invent_id:req.body.invent_id,
        item_name:req.body.item_name,
        quantity:req.body.quantity,
        cost:req.body.cost
    })
    inventory.save((err,doc)=>{
        if(!err)
        res.send(doc);
        else
            console.log('Error during record insertion:'+err)
        })
})

router.put('/:id',(req,res)=>{
    if(!ObjectId.isValid(req.params.id))
    return res.status(400).send('No record with given id: ${req.params.id}')
    var inventory={
        invent_id:req.body.invent_id,
        item_name:req.body.item_name,
        quantity:req.body.quantity,
        cost:req.body.cost
    }
    Inventory.findByIdAndUpdate(req.params.id,
        {$set:inventory},{new:true},(err,doc)=>{
            if(!err)
            res.send(doc);
            else
                console.log('Error during record updation:'+err) 
        });
})

router.delete('/:id',(req,res)=>{
    if(!ObjectId.isValid(req.params.id))
    return res.status(400).send('No record with given id: ${req.params.id}')
    Inventory.findByIdAndRemove(req.params.id,
        {$set:inventory},{new:true},(err,doc)=>{
            if(!err)
            res.send(doc);
            else
                console.log('Error during record deletion:'+err) 
        });
})    

module.exports=router;