var mongoose = require('mongoose');

var Mongoose = {
  url: 'mongodb://localhost:27017/meway',
  connect() {
    mongoose.connect(this.url, {useNewUrlParser: true}, (err)=>{
      if(err){
        console.log('数据库连接失败');
        return;
      }
      console.log("数据库连接成功");
    })
  }
}

var avatar = {
  baseUrl: 'http://49.233.128.141:3000/uploads/'
}

module.exports = {
  Mongoose,
  avatar
}