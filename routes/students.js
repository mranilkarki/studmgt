var express = require('express');
var router = express.Router();

router.get('/addStudent',(req , res , next)=>{
    res.render('pages/register');
})

module.exports  = router;