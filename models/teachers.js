// 老师列表
var mongoose = require('mongoose');
mongoose.set('useCreateIndex', true);

var TeachersSchema = new mongoose.Schema({
  teacher_name: { type: String },
  gender: { type: Boolean, default: true },         // true为男, false为女
  phone: { type: String, index: { unique: true } }, // 手机号码
  subject: { type: String },                        // 擅长科目
  remark: { type: String },                         // 备注
  previous_mouth: { type: Number, default: 0 },     // 上个月已授课时
  current_mouth: { type: Number, default: 0 },      // 本月已授课时
  total_time: { type: Number, default: 0 },         // 总共已授课时
  is_on: { type: Boolean, default: true }           // 是否启用
});


var TeacherModel = mongoose.model('teacher', TeachersSchema);
TeacherModel.createIndexes();

// 添加老师
var teacherSave = (data) => {
  var teacher = new TeacherModel(data);
  return teacher.save().then(()=>{return true}).catch((err)=>{ console.log(err); return false});
}

// 查询所有老师
var teacherList = () => {
  return TeacherModel.find();
}

// 查询某个老师
var singleTeacher = (id) => {
  return TeacherModel.findById(id);
}

// 删除某个老师
var deleteTeacher = (id) => {
  return TeacherModel.deleteOne({ _id: id });
}

// 修改/更新某个老师
var updateTeacher = (id,data) => {
  return TeacherModel.findOneAndUpdate({_id: id},{$set: data},{new: true});
}


module.exports = {
  teacherSave,
  teacherList,
  singleTeacher,
  deleteTeacher,
  updateTeacher
}