var express = require('express');
var router = express.Router();
var mysql = require('mysql');

var errMsg = '';

/* Connect mysql */
var client = mysql.createConnection({
	user: 'root',
	password: 'dp980605',
	database: 'tipenwon'
});

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { msg: errMsg });
  
});

/* POST home page. */
router.post('/', function(req, res){
	var data = req.body;
	
	var id = data.id;
	var pw = data.pw;
	
	if(id === '' || pw === ''){
		errMsg = "아이디와 비밀번호를 다시 확인해주세요.";
		res.redirect('/');
	}
	
	client.query('SELECT id, pw FROM memberships WHERE (id=data.id) AND (pw=data.pw)', function(error, result, fields){
		if(error){
			socket.emit('message', 'Please Check again');
		}else{
			res.redirect('/clickinout');
		}
	});					
});

/* GET home page. */
router.get('/clickinout', function(req, res){
	res.render('clickinout');
});


module.exports = router;
