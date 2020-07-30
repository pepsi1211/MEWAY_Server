var mongoose = require('mongoose');
mongoose.set('useCreateIndex', true);

var StudentSchema = new mongoose.Schema({
  students_name: { type: String, index: {unique: true} },
  phone: { type: String },
  time: { type: Number, default: 0}, // 购买课时
  gift_time: { type: Number, default: 0 }, // 赠送课时
  already_time: { type: Number, default: 0 }, // 已经消耗的课时
  odd_time: { type: Number, default: 0 }, // 剩余课时
  lack_time: { type: Number, default: 0 }, // 缺课次数
  integral: { type: Number, default: 0 }, // 积分
  birthday: { type: String }, // 出生年月日
  age: { type:Number }, // 年龄
  grade: { type: String }, // 年级
  school_name: { type: String, default: '待分配' }, // 学校名称
  follow_up: { type: String, default: '待分配' }, // 跟进人
  teacher: { type: String }, // 学管师
  date: { type: Date, default: Date.now() }
})

var StudentModel = mongoose.model('student', StudentSchema);
StudentModel.createIndexes();

var StudentSave = (data) => {
  var student = new StudentModel(data);
  return student.save()
    .then(() => {
      return true;
    })
    .catch((err) => {
      // console.log(err);
      return false;
    });
}

var StudentList = () => {
  return StudentModel.find();
}

var deleteStudent = (id) => {
  return StudentModel.deleteOne({ _id: id });
}

var singleStudent = (id) => {
  return StudentModel.findById(id);
}

var updateStudentInfo = (id,data) => {
  console.log('updateStudentInfo开始了');
  var doc = eval('(' + data + ')');
  console.log('修改后的data类型是:',typeof data);
  return StudentModel.findOneAndUpdate({_id: id},{$set:doc},{new: true});
}

module.exports = {
  StudentSave,
  StudentList,
  deleteStudent,
  singleStudent,
  updateStudentInfo
}