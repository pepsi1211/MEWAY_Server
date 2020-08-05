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