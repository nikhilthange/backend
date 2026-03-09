const mongoose=require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/yourDBname');

const userSchema=mongoose.Schema({
       username:String,
       name:String,
       age:Number,
       email:String,
       password:String,
       profilepic:{
        type:String,
        default:'default.png'
       },
       posts: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'post',
        default: []   // 🔥 THIS FIXES YOUR ERROR
    }]
})

module.exports=mongoose.model('user',userSchema);