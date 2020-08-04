var express = require('express');
var courseController = require('../controllers/course.js')
var router = express.Router();



router.post('/saveCourse', courseController.saveCourse);
router.post('/courseList', courseController.courseList);
router.post('/singleCourse', courseController.singleCourse);
router.post('/deleteCourse', courseController.deleteCourse);
router.post('/updateCourse', courseController.updateCourse);

module.exports = router;