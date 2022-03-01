var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('crown_76/index', { id: '207410076', name: 'Doris Hsieh' });
});

module.exports = router;