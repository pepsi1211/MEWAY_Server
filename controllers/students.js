var { JWT } = require('../untils/config.js');
var StudentsModel = require('../models/students.js');
var fs = require('fs');

// 录入学生信息
var saveStudentInfo = async (req, res, next)=>{
  // var {  } = req.body
  // console.log(req.body);
  var data = req.body;

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



module.exports = {
  saveStudentInfo
}