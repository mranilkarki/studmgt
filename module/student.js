const mongoose= require('mongoose');
const studentModel= new mongoose.Schema({
    name:{type:String, required:true},
    ParentsName:{type:String, required:true},
    Address:{type:String, required:true},
    contact:{type:String, required:true},
    isDeleted: {type: Boolean, default: false},
});

const Student = mongoose.model('Students', studentModel);
module.exports=Student;
