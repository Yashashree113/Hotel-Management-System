const mongoose=require('mongoose')

var paySchema= new mongoose.Schema({
    pay_mode:{
        type:String,
        required:'This field is required'
    },
    card_no:{
        type:Number,
        required:'This field is required'
    },
    card_name:{
        type:String,
        required:'This field is required'
    }
})

/*paySchema.path('email').validate((val)=>{
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(val).toLowerCase());
}, 'Invalid e-mail')*/

module.exports=mongoose.model('payment',paySchema)