var CourseModel = require('../models/course.js');

// 录入课程信息
var saveCourse = async (req, res, next) => {
  var data = req.body;
  delete data.token;
  data.payment = eval('('+data.payment+')');
  var result = await CourseModel.courseSave(data);
  if(result){
    res.send({
      status: 200,
      msg: '添加课程成功',
      data: result
    })
  }else{
    res.send({
      status: 404,
      msg: '添加课程失败',
      data: false
    })
  }
};

// 查询所有课程
var courseList = async (req, res, next) => {
  var result = await CourseModel.courseList();
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

// 查询某个课程
var singleCourse = async (req, res, next) => {
  var { id } = req.body;

  var result = await CourseModel.singleCourse(id);

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

// 删除某个课程
var deleteCourse = async (req, res, next) => {
  var { id } = req.body;

  var result = await CourseModel.deleteCourse(id);

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
var updateCourse = async (req, res, next) => {
  var { id, data } = req.body;
  data = eval(`(`+data+`)`);
  var result = await CourseModel.updateCourse(id, data);
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
  saveCourse,
  courseList,
  singleCourse,
  deleteCourse,
  updateCourse
}