var express = require('express');
var router = express.Router();
var registerInitialCheck = require('../middlewares/registerCheck')
var register = require('../contollers/register');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/*
  @requires {email, password, confirmPassword } - req.body
  @description
   Security performance and edge cases
   
   lvl-2
   js / sql injection - THA
   
*/

router.post('/register', registerInitialCheck, register, );

module.exports = router;
