var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var debug = require('debug')('app_v1');

var app = express();

app.set('port', process.env.PORT || 3000);

var server = app.listen(app.get('port'), function() {
  debug('Express server listening on port ' + server.address().port);
});


var router = express.Router();

//var routes = require('./routes/index');
//var users = require('./routes/users');
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





// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
//app.use('/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});



