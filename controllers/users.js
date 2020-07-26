var { JWT } = require('../untils/config.js');
var UserModel = require('../models/users.js');
var fs = require('fs');
var { setCrypto } = require('../untils/base.js');

// 登录接口
var login = async (req, res, next) => {
  var { phone, password } = req.body;
  console.log(phone, password);

  var result = await UserModel.findLogin({
    phone,
    password: setCrypto(password)
  });

  // 生成token
  var token = await JWT.generateToken({phone, password});

  if(result){
    res.send({
      status: 200,
      data: {
        token
      },
      msg: '登录成功'
    })
  }else{
    res.send({
      status: 404,
      data: {},
      msg: '账号或密码错误'
    })
  }
}

// 注册接口
var register = async (req, res, next) => {
  var { phone, password, verify } = req.body;
  console.log(req.body);

  if(verify == 'MEWAY'){
    var result = await UserModel.save({
      phone,
      password: setCrypto(password)
    })
    console.log(result);

    if (result) {
      res.send({
        msg: "注册成功",
        status: 200
      })
    } else {
      res.send({
        msg: "注册失败",
        status: 404
      })
    }
  }else{
    res.send({
      msg: '请填入正确识别码',
      status: 404
    })
  }
}



module.exports = {
  login,
  register
}