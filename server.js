var express=require('express');
var app=express();
var mongoose = require('mongoose');

app.use(express.json());
app.use(express.urlencoded({extended:true}))


const port = process.env.PORT || 3000;


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



app.use('/', require('./views/api/index').router);


var server=app.listen(port,function(){
    console.log('Listening on port %d', server.address().port);
});









