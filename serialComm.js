var SerialPort = require('serialport');
var ReadLine = require('@serialport/parser-readline');

var portName = process.argv[2] || 'COM5'; // '/dev/ttyACM0' 
console.log("Port connected: " + portName);

var port = new SerialPort(portName, {
    baudRate: 9600
    //parser: serialport.parsers.readline("\r\n")
});
var parser = port.pipe(new ReadLine({ delimiter: '\n'})); // new line is delimiter bc used println in arduino

var readings = ["uno", "dos", "tress"];

port.on('open', () => {
    console.log("serial port is open")
});

parser.on('data', data => {
    console.log("some data is here: " + data);
    readings.push(data);
});

setTimeout(() => {
    console.log("readings array: " + readings);
}, 15000);


