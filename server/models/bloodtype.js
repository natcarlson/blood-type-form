var mongoose = require('mongoose');

var bloodTypeSchema = mongoose.Schema( {
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  bloodtype: { type: String, required: true }
}, {timestamps: true});

var bloodType = mongoose.model('bloodType', bloodTypeSchema);
module.exports = bloodType;
