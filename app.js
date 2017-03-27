var express = require('express');
var app = express();
var port = 4000;

app.use(express.static(__dirname +'/public'));

app.disabled('view cache');

app.get('/*', function(req,res){
    res.sendFile(__dirname + '/public/index.html');
});

app.get('/index.html',function(req,res){
 res.render('index.html');
});

app.listen(port, function(){
    console.log('Esperando la respuesta en el puerto ' + port);
});