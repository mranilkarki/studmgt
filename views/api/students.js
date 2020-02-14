const express = require('express');
const Student= require('../../module/student');

// const AddStudents=require('./db').AddStudents;
// const Displayrecords=require('./db').Displayrecords;
// const DeleteRecord=require('./db').DeleteRecord;
// const EditRecord=require('./db').EditRecord;
const bodyParser=require('body-parser');
const path = require('path');
var app= express();
app.set('view engine','ejs');
app.use('/', express.static('public'));
app.use(bodyParser.json());
// app.use(express.static(__dirname + '/pages'));

app.get('/',function(req,res){
  
    // const recstudent= new Student({
    //     name:'anil',
    //     address:'anil'
    // });
    
    // t.save().then(result=>{
    //     console.log('errror');
    // })
   

   
   
    res.render('./pages/register');

});

// to add a new students
app.post('/register-send',function(req,res){
    // AddStudents(req,res);
    var studentData={
        name: req.body.name,
        parentsname: req.body.parentsname,
        address: req.body.address,
        contactno:req.body.contactno
    };
    console.log(studentData);
    // Student.create(req.body).then(function(Students){
    //     console.log(Students);
    // })
    new Student(studentData).save(function(err, res){
            console.log('success');
       
    });
    
    res.redirect('../register');
    
     
       

    
});

app.get('/delete/:id',function(req,res){
        
   
    DeleteRecord(req,res);
});
app.get('/studentlist',function(req,res,next){
    // Displayrecords(req,res);
   
    // Student.find({},{},function(err,docs){
    //     console.log(docs);
    //     if(err){
    //         res.send(err);
    //     }
    const stud=Student.find()
    .exec()
        .then(docs => {
            
            res.status(200).json({
                docs
            });
           
        })
        .catch(err => {
            console.log(err)
        });
        console.log(stud);
        res.send(stud);
       
      

    // var datatablesQuery = require('../../bin/Query'),
    //     params = req.body,
    //     query = datatablesQuery(UserModel);
    // query.run(params).then(response => {
    //     res.json(response);
    // }).catch(err => {
    //     res.send(err);
    // });
   
    

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
