const express=require('express');   
const app=express();
const bcrypt=require('bcrypt');

app.get('/',(req,res)=>{
   bcrypt.genSalt(10, function(err, salt) {
    bcrypt.hash(nikhil, salt, function(err, hash) {
        // Store hash in your password DB.
    });
});
})

app.listen(3000);