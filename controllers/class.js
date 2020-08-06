var ClassModel = require('../models/class.js');

// 录入班级信息
var saveClass = async (req, res, next) => {
  var data = req.body;
  var result = await ClassModel.classSave(data);
  if(result){
    res.send({
      status: 200,
      msg: '添加班级成功',
      data: result
    })
  }else{
    res.send({
      status: 404,
      msg: '添加班级失败',
      data: result
    })
  }
};

// 查询所有班级
var classList = async (req, res, next) => {
  var result = await ClassModel.classList();
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

// 查询某个班级
var singleClass = async (req, res, next) => {
  var { id } = req.body;

  var result = await ClassModel.singleClass(id);

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

// 删除某个班级
var deleteClass = async (req, res, next) => {
  var { id } = req.body;

  var result = await ClassModel.deleteClass(id);

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


// 修改班级信息
var updateClass = async (req, res, next) => {
  var { id, data } = req.body;
  data = eval(`(`+data+`)`);
  var result = await ClassModel.updateClass(id, data);
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
  saveClass,
  classList,
  singleClass,
  deleteClass,
  updateClass
}