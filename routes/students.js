var express = require('express');
var StudentsController = require('../controllers/students.js')
var router = express.Router();


router.post('/saveStudentInfo', StudentsController.saveStudentInfo);


module.exports = router;