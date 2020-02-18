const express = require('express');


const AddStudents=require('./db').AddStudents;
const Displayrecords=require('./db').Displayrecords;
const DeleteRecord=require('./db').DeleteRecord;
const EditRecord=require('./db').EditRecord;
const bodyParser=require('body-parser');
const path = require('path');
var app= express();
app.set('view engine','ejs');
app.use('/', express.static('public'));
app.use(bodyParser.json());


app.get('/',function(req,res){
    res.render('./pages/register');

});

// to add a new students
app.post('/register-send',function(req,res){
    AddStudents(req,res);
    res.redirect('../register');
});

app.get('/delete/:id',function(req,res){
    DeleteRecord(req,res);
});
app.get('/studentlist',function(req,res,next){
   Displayrecords(req,res);
   
       
       
      

   
   
    

});
app.get('/edit/:id',function(req,res){
    
    EditRecord(req,res)
});
app.post('/edit/edited-item',function(req,res){
    AddStudents(req,res);
    res.redirect('../studentlist');
})




module.exports={
  
    app
}
