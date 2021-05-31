const mongoose=require('mongoose')

var roomsSchema= new mongoose.Schema({
    room_no:{
        type:Number,
        required:'This field is required'
    },
    room_type:{
        type:String,
        required:'This field is required'
    },
    bed_type:{
        type:String
    },
    no_of_bed:{
        type:Number
    },
    bathrooms:{
        type:Number
    },
    price:{
        type:Number,
        required:'This field is required'
    },
    availability:{
        type:String,
        required:'This field is required'
    },
    updatedOn: {type: Date, default: Date.now()}
})


module.exports=mongoose.model('rooms',roomsSchema)