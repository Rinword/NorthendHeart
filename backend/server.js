var express = require('express');
var path = require('path');
var logger = require('morgan');
// var bodyParser = require('body-parser');
var router = require('./router'); //дополняем конфиг логикой роутера

var app = express();

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));
app.use(logger('dev'));

app.use(express.static(path.join(__dirname, '../', 'build')));

// app.set('views', path.resolve(__dirname, '../', 'build'));
app.set('view engine', 'html');
app.engine('html', require('ejs').renderFile);

router(app);

app.get('*', (req, res) => {
    res.render(path.resolve(__dirname, '../', 'build', 'index.html'));
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;
