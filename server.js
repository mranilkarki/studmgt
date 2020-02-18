var express=require('express');
var app=express();
var mongoose = require('mongoose');

app.use(express.json());
app.use(express.urlencoded({extended:true}))


const port = process.env.PORT || 3000;




app.use('/', require('./views/api/index').router);


var server=app.listen(port,function(){
    console.log('Listening on port %d', server.address().port);
});









