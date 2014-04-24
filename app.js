
/**
 * Module dependencies.
 */

var express = require('express');
var todo = require('./routes/todo');
var http = require('http');
var path = require('path');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/todos/:id', todo.getOne);
app.get('/todos', todo.getAll);
app.put('/todos/:id', todo.update);
app.delete('/todos/:id', todo.delete);
app.post('/todos', todo.insert);

app.get('/todoData', todo.getTestOne);

app.get('/todo', function(req, res) {
    res.sendfile(__dirname + '/views/todo.html');
});
app.get('/todo2', function(req, res) {
    res.sendfile(__dirname + '/views/todo2.html');
});
app.get('/todo3', function(req, res) {
    res.sendfile(__dirname + '/views/todo3.html');
});
app.get('/todo4', function(req, res) {
    res.sendfile(__dirname + '/views/todo4.html');
});
app.get('/todo5', function(req, res) {
    res.sendfile(__dirname + '/views/todo5.html');
});

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
