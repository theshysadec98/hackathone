var path = require('path');
var express = require('express');
const { isObject } = require('util');
var app = express();
var server = require('http').createServer("app");
var id = require('socket.io')(server);


app.use(express.static(path.join(__dirname,"public")));

app.get("/", function(req, res){
    res.sendFile(path.join(__dirname + "/views/chat.html"));
});

io.on('connection', function(socket){
    console.log("Xin chao den voi tinder.");
    socket.on('send', function(data){
        io.socket.emit('send', data);
    })
});

server.listen(3000);