const mongoose=require('mongoose')

var guestSchema= new mongoose.Schema({
    Code:{
        type:Number,
        required:'This field is required'
    },
    guest_name:{
        type:String,
        required:'This field is required'
    },
    phone_no:{
        type:Number,
    },
    email:{
        type: String
    },
    age:{
        type:Number,
        required:'This field is required'
    },
    gender:{
        type:String,
    },
    address:{
        type:String,
        required:'This field is required'
    },
    company:{
        type:String
    }
})

guestSchema.path('email').validate((val)=>{
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(val).toLowerCase());
}, 'Invalid e-mail')

module.exports=mongoose.model('guest',guestSchema)