var express = require('express');
var router = express.Router();
var bloodType = require('../../models/bloodtype');

router.get('/', function(req, res) {
  bloodType.find({}, function(err, dbbloodType) {
    res.json({ bloodtype: dbbloodType })
  });
});

router.post('/:firstname/:lastname/:bloodtype', function(req, res) {
  var bloodTypeData = req.params;
  var newBloodType = new bloodType(bloodTypeData);
  newBloodType.save(function(err, dbbloodType) {
    res.json( dbbloodType );
  });
});

// router.put('/:id', function(req, res) {
//   var bloodTypeData = req.params;
//   var updateBloodType = bloodType(bloodTypeData);
//   bloodType.findByIdAndUpdate(req.params.id) function(err, dbbloodType) {
//     res.json( dbbloodType)
//   }

router.delete('/:id', function(req, res) {
  bloodType.findByIdAndRemove(req.params.id, function(err) {
    if (err) { res.status(500).end(); }
    res.status(204).end();
  });
});

module.exports = router;
