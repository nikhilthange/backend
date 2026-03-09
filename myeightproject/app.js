const express= require('express');
const app=express();
const userModel=require('./models/user');
const postModel=require('./models/post');


app.use(express.json());

app.get('/',(req,res)=>{
    res.send('Hello, World!');
})

app.get('/create', async function (req,res) {
    let user= await  userModel.create({
        username:"Nikhil",
        age:20,
        email:'nikhil@gmail.com'
        
    });
    res.send(user);
})

app.get('/post/create',async function(req,res){
        let post= await postModel.create({
            postdata:'this is my first post',
            user:"694931e6db857062db32ba81"
         })

         let user= await userModel.findOne({_id:"694931e6db857062db32ba81"});
         user.posts.push(post._id);
         await user.save();

         res.send({post,user})
             
         
})

app.listen(3000);