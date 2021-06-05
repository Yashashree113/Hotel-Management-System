const mongoose=require('mongoose')

var inventSchema= new mongoose.Schema({
    invent_id:{
        type:Number,
        required:'This field is required'
    },
    item_name:{
        type:String,
        required:'This field is required'
    },
    quantity:{
        type:Number,
        required:'This field is required'
    },
    cost:{
        type:Number,
        required:'This field is required'
    }
})

/*inventSchema.path('email').validate((val)=>{
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(val).toLowerCase());
}, 'Invalid e-mail')*/

module.exports=mongoose.model('inventory',inventSchema)