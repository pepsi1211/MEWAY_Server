// 费用
var mongoose = require('mongoose');
mongoose.set('useCreateIndex', true);

var CostSchema = new mongoose.Schema({
  cost_name: { type: String, index: { unique: true } },           // 费用名称
  price: { type: Number, default: 0 },                            // 单价
  course: String                                                  // (选填)绑定课程
});

var CostModel = mongoose.model('cost', CostSchema);
CostModel.createIndexes();

// 添加费用
var costSave = (data) => {
  var goods = new CostModel(data);
  return goods.save().then(()=>{return true}).catch(()=>{return false});
}


// 查询所有费用
var costList = () => {
  return CostModel.find();
}

// 查询某个费用
// var singleGoods = (id) => {
//   return GoodsModel.findById(id);
// }

// 删除某个费用
var deleteCost = (id) => {
  return CostModel.deleteOne({ _id: id });
}

// 修改/更新某个费用
var updateCost = (id,data) => {
  return CostModel.findOneAndUpdate({_id: id},{$set: data},{new: true});
}


module.exports = {
  costSave,
  costList,
  deleteCost,
  updateCost
}