var StudentsModel = require('../models/students.js');

// 录入学生信息
var saveStudentInfo = async (req, res, next)=>{
  var data = req.body;
  delete data.token;
  console.log(data); 
  var result = await StudentsModel.StudentSave(data);

  if(result){
    res.send({
      status: 200,
      data: result,
      msg: '录入成功'
    })
  }else{
    res.send({
      status: 404,
      data: null,
      msg: '录入失败'
    })
  }
}

// 查看所有学生档案
var studentList = async (req, res, next) => {
  var result = await StudentsModel.StudentList();
  console.log(result);
  if(result){
    res.send({
      status: 200,
      msg: '查询成功',
      data: result
    })
  }else{
    res.send({
      status: 404,
      msg: '未成功',
      data: []
    })
  }
}

// 查看单个学生档案
var singleStudent = async (req, res, next) => {
  var { id } = req.body;

  var result = await StudentsModel.singleStudent(id);

  if(result){
    res.send({
      status: 200,
      msg: '查询成功',
      data: result
    })
  }else{
    res.send({
      status: 404,
      msg: '未成功',
      data: {}
    })
  }
}



module.exports = {
  saveStudentInfo,
  studentList,
  singleStudent
}