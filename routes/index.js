var express = require('express');
var router = express.Router();
var mysql = require('mysql');

/* Connect mysql */
var client = mysql.createConnection({
	user: 'root',
	password: 'dp980605',
	database: 'tipenwon'
});

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
  
});

router.post('/', function(req, res){
	var data = req.body;
	
	client.query('SELECT id, pw FROM memberships WHERE (id=data.id) AND (pw=data.pw)', function(error, result, fields){
		if(error){
			socket.emit('message", 'Please Check again');
		}else{
			
		}
});

module.exports = router;
