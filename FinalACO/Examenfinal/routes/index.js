var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('Examne final', { title: 'Avances de Computacion' });
});

module.exports = router;
