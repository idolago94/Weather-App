var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/app-key', function(req, res, next) {
  res.send(process.env.API_KEY);
});

module.exports = router;
