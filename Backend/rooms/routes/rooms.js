const { req, res } = require("express");
const express = require("express");
//const mongoose=require('mongoose')
const router = express.Router();
var ObjectId=require('mongoose').Types.ObjectId

var Rooms=require('./model/rooms')

//=> localhost:8000/rooms
router.get('/',(req,res)=>{
    Rooms.find((err,docs)=>{
        if(!err){res.send(docs);}
        else{console.log('Error in retriving Rooms:'+JSON.stringify(err, undefined, 2));}
    });
})
router.get('/:id',(req,res)=>{
   if(!ObjectId.isValid(req.params.id))
   return res.status(400).send('No record with given id: ${req.params.id}')
   Rooms.findById(req.params.id,(err,doc)=>{
    if(!err){res.send(doc);}
    else{console.log('Error in retriving Rooms:'+JSON.stringify(err, undefined, 2));}
   })
})

router.post('/room',(req,res)=>{
        var newRoom = {
            room_no: req.body.room_no,
            floor: req.body.floor,
            room_type: req.body.room_type,
            bed_type: req.body.bed_type,
            no_of_bed:req.body.no_of_bed,
            bathrooms: req.body.bathrooms,
            price: req.body.price,
            availability: req.body.availability
        };
        var room=new Staff(newRoom)
        room
        .save()
        .then(()=>{
            console.log("New Room added")
        })
        .catch((err)=>{
            if(err){
                console.log('Error during inserting record:'+err)
            }
        });
        res.send("New Room is added");
    })

//listing all room details
router.get("/room", (req, res) => {
	Rooms.find()
		.then((room) => {
			res.json(room);
		})
		.catch((err) => {
			throw err;
		});
});

// list room details by id 
router.get('/staff/:id',(req,res)=>{
    if(!ObjectId.isValid(req.params.id))
    return res.status(400).send('No record with given id: ${req.params.id}')
    
    Rooms.findById(req.params.id,(err,doc)=>{
     if(!err){res.send(doc);
     }
     else{console.log('Error in retriving Rooms:'+JSON.stringify(err, undefined, 2));}
    })
 })

//updating the room details
router.put('/:id',(req,res)=>{
    if(!ObjectId.isValid(req.params.id))
    return res.status(400).send('No record with given id: ${req.params.id}')
    var room={
            room_no: req.body.room_no,
            floor: req.body.floor,
            room_type: req.body.room_type,
            bed_type: req.body.bed_type,
            no_of_bed:req.body.no_of_bed,
            bathrooms: req.body.bathrooms,
            price: req.body.price,
            availability: req.body.availability
    }
    Rooms.findByIdAndUpdate(req.params.id,
        {$set:room},{new:true},(err,doc)=>{
            if(!err)
            res.send(doc);
            else
                console.log('Error during record updation:'+err) 
        });
})

//deleting the room member
router.delete('/:id',(req,res)=>{
    if(!ObjectId.isValid(req.params.id))
    return res.status(400).send('No record with given id: ${req.params.id}')
    Rooms.findByIdAndRemove(req.params.id,
        {$set:room},{new:true},(err,doc)=>{
            if(!err)
            res.send(doc);
            else
                console.log('Error during record deletion:'+err) 
        });
})  


module.exports=router;