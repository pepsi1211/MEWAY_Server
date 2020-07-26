var mongoose = require('mongoose');
mongoose.set('useCreateIndex', true);

var UserSchema = new mongoose.Schema({
  phone: { type: String, required: true, index: { unique: true } },
  password: { type: String, required: true },
  date: { type: Date, default: Date.now() }
})


var UserModel = mongoose.model('user', UserSchema);
UserModel.createIndexes();

var save = (data) => {
  var user = new UserModel(data);
  return user.save()
    .then(() => {
      return true;
    })
    .catch((err) => {
      console.log(err)
      return false;
    });
  // return user.save((err,product)=>{
  //   if(err){ console.log(err); return false }else{ return true }
  // })
}

var findLogin = (data) => {
  // console.log(data)
  return UserModel.findOne(data);
}

var usersList = () => {
  return UserModel.find();
}

var deleteUser = (email) => {
  return UserModel.deleteOne({ email });
}


module.exports = {
  save,
  findLogin,
  usersList,
  deleteUser
}