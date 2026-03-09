const express=require('express');
const app=express();
const path =require('path');
const fs=require('fs');

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,'public')));
app.set('view engine','ejs');

app.get('/',function(req,res){
    fs.readdir(`./files`,function(err,files){
        res.render('index',{files:files});
    })
   
});


app.get('/file/:filename',function(req,res){
    fs.readFile(`./files/${req.params.filename}`,'utf-8',function(err,filedata){
        res.render('show',{filename : req.params.filename, filedata : filedata });
    })
});


app.get('/edit/:filename',function(req,res){
    res.render('edit',{filename:req.params.filename});
});

app.post('/edit',function(req,res){
    fs.rename(`./files/${req.body.previous}`,`./files/${req.body.new}.txt`,function(err) {
        res.redirect('/');
    });
});

app.post('/create',function(req,res){
    fs.writeFile(`./files/${req.body.title.split(' ').join('')}.txt`,req.body.details,function(err){
          res.redirect('/');
    });
});
  
app.listen(3000,function(){
    console.log('server is running on port 3000');
});