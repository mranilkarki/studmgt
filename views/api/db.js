const express = require('express');
var bodyParser = require('body-parser');
var app=express();

var Student= require('../../module/student');
var mongoose=require('mongoose');
var path = require('path');
app.use(bodyParser.urlencoded({extended:true}));

//connecting to database
const connection = mongoose.createConnection(`mongodb+srv://anilkarki:anil@cluster0-4eqlb.mongodb.net/test?retryWrites=true&w=majority`,{
    useNewUrlParser: true ,
    useUnifiedTopology: true 
});
connection.on('connected', () => {
  console.log('connected to mongodb');
});

connection.on('disconnected', () => {
  console.log('connection disconnected');
});

//end of connection

const AddStudents=(req,res)=>{
    var studentData={
        name: req.body.name,
        parentsname: req.body.parentsname,
        address: req.body.address,
        contactno:req.body.contactno
    };
   
    // Student.create(req.body).then(function(Students){
    //     console.log(Students);
    // })
    new Student(studentData).save(function(err, res){
            console.log('success');
       
    });
};

const Displayrecords=(req,res)=>{
    //  var rec=[];
    //  console.log('helo');
    // var stud=Student.find({},function(err,docs){
    //        if(err) res.json(err);
    //        for(var i=0;i<Object.keys(docs).length;i++){
    //             var obj={
    //                 id:docs[i].id,
    //                 name:docs[i].Name,
    //                 parentsname:docs[i].ParentsName,
    //                 address:docs[i].Address,
    //                 contactno:docs[i].ContactNo
    //             }
    //             console.log(obj);
    //             rec.push(obj);
    // }
   
    Student.find({})
    .then(console.log(Student))
        .then(function(result) {
            console.log('hello');
            res.status(200).json(Student)
        })
        // .then(console.log('welcome'));
//      const stud=Student.find()
//     .exec()
//         .then(docs => {
            
//             res.status(200).json({
//                 docs
//             });
           
//         })
//         // .catch(err => {
//         //     console.log(err)
//         // });
//         stud.then(function(result) {
//   console.log("Success!", result);
// }).catch(function(error) {
//   console.log("Failed!", error);
// })
        
    //  const data=await stud;
    //  console.log(data);   
//         stud.then(function(result){
// console.log(result)
// });
// console.log(stud);
//         res.send(stud);
        
    // res.render('./pages/studentlist',{result:stud });
 
      
   
  


};
const DeleteRecord=(req,res)=>{
    var delid=parseInt(req.params.id);
    var sql="DELETE FROM records WHERE id="+delid;
    con.query(sql,function(err,res){
        if(err) throw err;
    });
    res.redirect("../../register/studentlist");

}
const EditRecord=(req,res)=>{
    
    var editid=parseInt(req.params.id);
    
    con.query('SELECT *FROM records Where id=?',req.params.id,function (err, result){
        // for(var i=0;i<result.length;i++){
        //     console.log(result[i].id);
        //     }
           console.log(result);
        res.render('pages/edit',{result:result});
        
 });
 const UpdateRecord=(req,res)=>{
    var name=req.body.name;
    var parentsname=req.body.parentsname;
    var address=req.body.address;
    var contactno=req.body.contactno;
    con.query('UPDATE records SET name=? WHERE id=?',param,function (err, result) {
        if (err) throw err;
      
       
    });
     
 }
 


}




module.exports={
    AddStudents,
    Displayrecords,
    DeleteRecord,
    EditRecord
}




//mongodb 
// const express = require('express');
// var bodyParser = require('body-parser');
// var app=express();
// const path = require('path');
// app.use(bodyParser.urlencoded({extended:true}));
// const mongoose = require('mongodb').MongoClient;

// const URI='mongodb+srv://anilkarki:<password>@cluster0-4eqlb.mongodb.net/test?retryWrites=true&w=majority';

// var con =async()=>{
//     await mongoose.connect(URI,{
//     useUnifiedTopology:true,
//     useNewUrlParser:true
    
// });
// console.log('db connected successfully');

// }

// module.exports={
//     con
//     AddStudents,
//     Displayrecords,
//     DeleteRecord,
//     EditRecord
// }

