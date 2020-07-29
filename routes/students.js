var express = require('express');
var StudentsController = require('../controllers/students.js')
var router = express.Router();


router.post('/saveStudentInfo', StudentsController.saveStudentInfo);
router.post('/studentList', StudentsController.studentList);
router.post('/singleStudent', StudentsController.singleStudent);


module.exports = router;
