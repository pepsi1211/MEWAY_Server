var TeacherModel = require('../models/teachers.js');

// 录入课程信息
var saveTeacher = async (req, res, next) => {
  var data = req.body;
  delete data.token;
  var result = await TeacherModel.teacherSave(data);
  if(result){
    res.send({
      status: 200,
      msg: '添加老师成功',
      data: result
    })
  }else{
    res.send({
      status: 404,
      msg: '添加老师失败',
      data: result
    })
  }
};

// 查询所有老师
var teacherList = async (req, res, next) => {
  var result = await TeacherModel.teacherList();
  if(result){
    res.send({
      status: 200,
      msg: '查询成功',
      data: result
    })
  }else{
    res.send({
      status: 404,
      msg: '查询失败',
      data: result
    })
  }
};

// 查询某个老师
var singleTeacher = async (req, res, next) => {
  var { id } = req.body;

  var result = await TeacherModel.singleTeacher(id);

  if(result){
    res.send({
      status: 200,
      msg: '查询成功',
      data: result
    })
  }else{
    res.send({
      status: 404,
      msg: '查询失败',
      data: result
    })
  }
};

// 删除某个老师
var deleteTeacher = async (req, res, next) => {
  var { id } = req.body;

  var result = await TeacherModel.deleteTeacher(id);

  if(result){
    res.send({
      status: 200,
      msg: '删除成功',
      data: result
    })
  }else{
    res.send({
      status: 404,
      msg: '删除失败',
      data: result
    })
  }
}


// 修改学生档案
var updateTeacher = async (req, res, next) => {
  var { id, data } = req.body;
  data = eval(`(`+data+`)`);
  var result = await TeacherModel.updateTeacher(id, data);
  if(result){
    res.send({
      status: 200,
      msg: '修改成功',
      data: result
    })
  }else{
    res.send({
      status: 404,
      msg: '修改失败',
      data: {}
    })
  }
}


module.exports = {
  saveTeacher,
  teacherList,
  singleTeacher,
  deleteTeacher,
  updateTeacher
}