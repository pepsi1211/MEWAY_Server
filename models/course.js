// 科目/课程
var mongoose = require('mongoose');
mongoose.set('useCreateIndex', true);

var CourseSchema = new mongoose.Schema({
  course_name: { type: String, index: { unique: true } }, // 课程名称
  one_to_one: { type: Boolean, default: false }, // 是否一对一, false为一对多 true为一对一
  payment: {
    way: Boolean, // 是否按课时收费, true为按课时收费 false为按月收费
    price: Number, // 单价
    name: String, // 定价标准名称
    count: Number, // 总课时
    total: Number // 总价格
  }, 
  absent: { type: Boolean, default: true }, // 缺勤是否扣课时 true为扣 false为不扣
  leave: { type: Boolean, default: false }, // 请假是否扣课时 true为扣 false为不扣
  people: { type: Number, default: 0 }, // 在读学员数
  is_sale: { type: Boolean, default: false }, // 是否线上销售
  is_on: { type: Boolean, default: true }, // 是否启用
  remark: String // 备注
});

var CourseModel = mongoose.model('course', CourseSchema);
CourseModel.createIndexes();

// 添加课程
var courseSave = (data) => {
  var course = new CourseModel(data);
  return course.save().then(()=>{return true}).catch(()=>{return false});
}


// 查询所有课程
var courseList = () => {
  return CourseModel.find();
}

// 查询某个课程
var singleCourse = (id) => {
  return CourseModel.findById(id);
}

// 删除某个课程
var deleteCourse = (id) => {
  return CourseModel.deleteOne({ _id: id });
}

// 修改/更新某个课程
var updateCourse = (id,data) => {
  return CourseModel.findOneAndUpdate({_id: id},{$set: data},{new: true});
}


module.exports = {
  courseSave,
  courseList,
  singleCourse,
  deleteCourse,
  updateCourse
}