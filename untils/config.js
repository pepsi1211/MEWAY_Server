var mongoose = require('mongoose');
var jwt = require('jsonwebtoken');

var Mongoose = {
  url: 'mongodb://localhost:27017/meway',
  connect() {
    mongoose.connect(this.url, {
      useNewUrlParser: true
    }, (err) => {
      if (err) {
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

var JWT = {
  // 生成token
  generateToken(info) {
    let data = info;
    let token = jwt.sign(data, 'pepsi', {
      expiresIn: '2d',
      issuer: 'HONG'
    });
    return token;
  },
  // 验证token
  verifyToken(token) {
    var outerDecoded = {};
    jwt.verify(token, 'pepsi', (err, decoded)=>{
      if(err){
        // 如果token过期就会执行err代码块
        return err;
      }else{
        outerDecoded = decoded;
      }
    })
    return outerDecoded;
  }
}


module.exports = {
  Mongoose,
  avatar,
  JWT
}