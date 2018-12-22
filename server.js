const express = require('express');
const WebSocketServer = require('ws').Server;
const io = require('socket.io');

const apiController = require('./api/apiController');
console.log("apiController in server.js " + apiController);

const app = express();

const PORT = process.env.PORT || 8888;

var wss = new WebSocketServer({port: 3000}); // I just put 3000 to make it run, I don't know what port is
var connections = [];

app.use(express.static(__dirname + '/public'));


wss.on('connection', handleConnection);

function handleConnection(client) {
    console.log("New WebSocket Connection");
    connections.push(client);

    client.on('message', sendToSerial);

    client.on('close', () => {
        console.log("WS Connection Closed");
        var position = connections.indexOf(client);
        connections.splice(position, 1);
    })
}

function sendToSerial(data) {
    console.log("sending to serial: " + data);

}


// create a timestamp for nodemon
var currentDate = new Date();
var timestamp = currentDate.getHours() + ":" + currentDate.getMinutes() + ":" + currentDate.getSeconds();

app.listen(PORT, () => {
    console.log("Now Is Good Time To Plant on port: ", PORT);
})