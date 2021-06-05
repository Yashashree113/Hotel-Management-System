const mongoose=require('mongoose')

var adminSchema= new mongoose.Schema({
    email:{
        type: String,
        required: 'This field is required',
        unique: true,
        match: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
    },
    password:{
        type:String,
        required: 'This field is required'
    }
})
module.exports=mongoose.model('receptionist',adminSchema)