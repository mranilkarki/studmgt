const express = require('express');
const mongoose= require('mongoose');

const app = express();

const router = express.Router()

// router.get('/',function(req,res){
//     res.send('thankyou');
// });

router.use('/register',require('./students').app);
module.exports={
    router
}

