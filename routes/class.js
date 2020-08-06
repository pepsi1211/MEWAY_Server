var express = require('express');
var classController = require('../controllers/class.js')
var router = express.Router();



router.post('/saveClass', classController.saveClass);
router.post('/classList', classController.classList);
router.post('/singleClass', classController.singleClass);
router.post('/deleteClass', classController.deleteClass);
router.post('/updateClass', classController.updateClass);

module.exports = router;