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
}

var findLogin = (data) => {
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