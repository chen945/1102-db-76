var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('crown2_76/index', { id: '207410076', title: 'Crown2' });
});

module.exports = router;