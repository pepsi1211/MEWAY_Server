// 物品
var mongoose = require('mongoose');
mongoose.set('useCreateIndex', true);

var GoodsSchema = new mongoose.Schema({
  goods_name: { type: String, index: { unique: true } },          // 物品名称
  price: { type: Number, default: 0 },                            // 单价
  warning: { type: Number, default: 0 },                          // (选填)预警数,如果为0即不预警
  course: String                                                  // (选填)绑定课程
});

var GoodsModel = mongoose.model('goods', GoodsSchema);
GoodsModel.createIndexes();

// 添加物品
var goodsSave = (data) => {
  var goods = new GoodsModel(data);
  return goods.save().then(()=>{return true}).catch(()=>{return false});
}


// 查询所有物品
var goodsList = () => {
  return GoodsModel.find();
}

// 查询某个物品
// var singleGoods = (id) => {
//   return GoodsModel.findById(id);
// }

// 删除某个物品
var deleteGoods = (id) => {
  return GoodsModel.deleteOne({ _id: id });
}

// 修改/更新某个物品
var updateGoods = (id,data) => {
  return GoodsModel.findOneAndUpdate({_id: id},{$set: data},{new: true});
}


module.exports = {
  goodsSave,
  goodsList,
  deleteGoods,
  updateGoods
}