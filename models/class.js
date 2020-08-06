// 班级管理
var mongoose = require('mongoose');
mongoose.set('useCreateIndex', true);

var ClassesSchema = new mongoose.Schema({
  course_name: { type: String, index: { unique: true } }, // 课程名称
  class_name: { type: String, index: { unique: true } },  // 班级名称
  capacity: { type: Number, default: 1 },                 // 班级容量
  classroom: { type: String },                            // 上课教室
  teacher: { type: String },                              // 上课老师
  time: { type: Number, default: 0 },                     // 已授课时
  default_time: { type: Number, default: 1 },             // 默认授课课时
  class_kind: { type: String, default: '不指定' },         // 班级分类
  remark: { type: String },                               // 备注
});

var ClassModel = mongoose.model('class', ClassesSchema);
ClassModel.createIndexes();

// 添加班级
var classSave = (data) => {
  var classes = new ClassModel(data);
  return classes.save().then(()=>{return true}).catch((err)=>{ console.log(err); return false});
}

// 查询所有班级
var classList = () => {
  return ClassModel.find();
}

// 查询某个班级
var singleClass = (id) => {
  return ClassModel.findById(id);
}

// 删除某个班级
var deleteClass = (id) => {
  return ClassModel.deleteOne({ _id: id });
}

// 修改/更新某个班级
var updateClass = (id,data) => {
  return ClassModel.findOneAndUpdate({_id: id},{$set: data},{new: true});
}


module.exports = {
  classSave,
  classList,
  singleClass,
  deleteClass,
  updateClass
}