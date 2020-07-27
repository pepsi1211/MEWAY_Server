var mongoose = require('mongoose');
mongoose.set('useCreateIndex', true);

var StudentSchema = new mongoose.Schema({
  students_name: { type: String, index: {unique: true} },
  phone: { type: String, required: true, index: { unique: true } },
  times: { type: Number, },
  date: { type: Date, default: Date.now() }
})

var StudentModel = mongoose.model('student', StudentSchema);
StudentModel.createIndexes();

