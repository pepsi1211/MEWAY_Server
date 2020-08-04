var express = require('express');
var teacherController = require('../controllers/teachers.js')
var router = express.Router();



router.post('/saveTeacher', teacherController.saveTeacher);
router.post('/teacherList', teacherController.teacherList);
router.post('/singleTeacher', teacherController.singleTeacher);
router.post('/deleteTeacher', teacherController.deleteTeacher);
router.post('/updateTeacher', teacherController.updateTeacher);

module.exports = router;