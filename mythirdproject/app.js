const express= require('express');
const app=express();
const userModel =require('./usermodel');

app.get('/',(req,res) =>{
res.send('hey');
});

app.get('/create',async (req,res) =>{
 let createduser=await userModel.create({
    name:'nikhil',
    username:'nikhil',
    email:'nikhil@gmail.com'
})
res.send(createduser);
});

app.get('/update', async (req,res) =>{
   let updateuser= await userModel.findOneAndUpdate({username:'nikhil'},{name:'nikhil ankush thange'},{new:true})
res.send(updateuser);
})

app.get('/read',async (req,res)=>{
 let users= await userModel.findOne({username:'nikhil'});
 res.send(users);
})

app.get('/delete', async (req,res) =>{
  let users= await userModel.findOneAndDelete({username:'nikhil'});
  res.send(users);
})

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
