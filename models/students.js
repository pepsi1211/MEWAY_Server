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
  school_name: { type: String }, // 学校名称
  follow_up: { type: String }, // 跟进人
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

var FindStudent = (data) => {
  return StudentModel.findOne(data);
}

var StudentList = () => {
  return StudentModel.find();
}

var DeleteStudent = (name) => {
  return StudentModel.deleteOne({ name });
}

module.exports = {
  StudentSave,
  StudentList,
  FindStudent,
  DeleteStudent
}