// // const express = require('express');
// // var bodyParser = require('body-parser');
// // var app=express();
// // var mysql = require('mysql');

// // const path = require('path');
// // app.use(bodyParser.urlencoded({extended:true}));
// // var con = mysql.createConnection({
// //     host: "localhost",
// //     user: "root",
// //     password: "",
// //     database: "StudentsRecord"
// //     });
// //     con.connect(function(err) {
// //         if (err) throw err;
// //         console.log("Connected!");
// //     });
// // const AddStudents=(req,res)=>{
   
// //     var name=req.body.name;
// //     var parentsname=req.body.parentsname;
// //     var address=req.body.address;
// //     var contactno=req.body.contactno;
   
// //     var sql = "INSERT INTO records VALUES ?";
// //     var values = [["",name,parentsname,address,contactno]];
       
// //     con.query(sql, [values], function (err, result) {
// //         if (err) throw err;
       
   
// //         console.log("1 record inserted");
// //     });
    


// // };

// // const Displayrecords=(req,res)=>{
// //     var rec=[];
// //         con.query('SELECT *FROM records', function (err, result) {
// //             if (err) throw err;
           
// //             for(var i=0;i<Object.keys(result).length;i++){
// //                 var obj={
// //                     id:result[i].id,
// //                     name:result[i].Name,
// //                     parentsname:result[i].ParentsName,
// //                     address:result[i].Address,
// //                     contactno:result[i].ContactNo
// //                 }
               
               
           
// //                 rec.push(obj);
                
// //             // console.log(todo[i].newadded);
             
// //         } 
       
// //         // console.log(rec);
    
// //             res.render('./pages/studentlist',{result:rec });
           
            
// //           });
      
   
  


// // };
// // const DeleteRecord=(req,res)=>{
// //     var delid=parseInt(req.params.id);
// //     var sql="DELETE FROM records WHERE id="+delid;
// //     con.query(sql,function(err,res){
// //         if(err) throw err;
// //     });
// //     res.redirect("../../register/studentlist");

// // }
// // const EditRecord=(req,res)=>{
    
// //     var editid=parseInt(req.params.id);
    
// //     con.query('SELECT *FROM records Where id=?',req.params.id,function (err, result){
// //         // for(var i=0;i<result.length;i++){
// //         //     console.log(result[i].id);
// //         //     }
// //            console.log(result);
// //         res.render('pages/edit',{result:result});
        
// //  });
// //  const UpdateRecord=(req,res)=>{
// //     var name=req.body.name;
// //     var parentsname=req.body.parentsname;
// //     var address=req.body.address;
// //     var contactno=req.body.contactno;
// //     con.query('UPDATE records SET name=? WHERE id=?',param,function (err, result) {
// //         if (err) throw err;
      
       
// //     });
     
// //  }
 


// // }




// // module.exports={
// //     AddStudents,
// //     Displayrecords,
// //     DeleteRecord,
// //     EditRecord
// // }




// //mongodb 
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

// // module.exports={
// //     con
// //     // AddStudents,
// //     // Displayrecords,
// //     // DeleteRecord,
// //     // EditRecord
// // }

const mongoose = require('mongoose');
var Schema= mongoose.Schema;


var NoteSchema = new Schema({
    name: String,
    address: String
});

var Test= mongoose.model('Note', NoteSchema);

module.exports={
    Test
}