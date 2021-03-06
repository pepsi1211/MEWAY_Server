var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bodyParser = require('body-parser');
var { Mongoose } = require('./untils/config.js');

// 路由(开始)
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var studentsRouter = require('./routes/students');
var courseRouter = require('./routes/course');
var teachersRouter = require('./routes/teachers');
var classesRouter = require('./routes/class');
// 路由(结束)

var { JWT } = require('./untils/config.js');
var UserModel = require('./models/users.js');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.all('/*',(req, res, next)=>{
  console.log('触发了app.all, 通过的url为:',req.url);
  // console.log('headers: ',req.headers);
  if(req.url == '/api/users/register' || req.url == '/api/users/login'){
    // 如果是注册或者登陆 直接通过,不验证token
    next();
  }else{
    var token = req.headers.authorization;
    var decoded = JWT.verifyToken(token);
    if(!decoded.phone){
      res.send({
        status: 404,
        msg: 'token验证不通过'
      })
      return;
    }
    var { phone } = decoded;
    var result = UserModel.findLogin({phone});
    result.select('phone').exec(function(err,res){
      if(err){
        return false
      }else{
        // verifyRes = res;
        if(res.phone == phone){
          next();
        }else{
          res.send({
            status: 404,
            msg: '无法验证token,可能已过期'
          })
        }
      }
    })
  }
})
app.use('/', indexRouter);
app.use('/api/users', usersRouter);
app.use('/api/students', studentsRouter);
app.use('/api/course', courseRouter);
app.use('/api/teachers', teachersRouter);
app.use('/api/class', classesRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

Mongoose.connect();

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;