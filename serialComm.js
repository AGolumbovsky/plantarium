const SerialPort = require('serialport');
const ReadLine = require('@serialport/parser-readline');

const pool = require('./api/config/dbConnect');


module.exports = () => {

var portName = process.argv[2] || 'COM5' || '/dev/tty/ACM0'; // make persistent on the pi
console.log("Port connected: " + portName);

var port = new SerialPort(portName, {
    baudRate: 9600
    // parser: serialport.parsers.readline("\r\n")
});
var parser = port.pipe(new ReadLine({ delimiter: '\r\n'})); // new line is delimiter bc used println in arduino

port.on('open', () => {
    console.log("serial port is open", portName);
});

parser.on('data', data => {

    console.log("some data is here: " + data);

    pool.query()



    var parsedData = parseInt(data);
    
   
    var dataObj = {

        reading: parsedData,
        identifier: 'some idfier'

    }
    
    
});
}