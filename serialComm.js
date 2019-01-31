const SerialPort = require('serialport');
const ReadLine = require('@serialport/parser-readline');
const Reading = require('./api/ReadingModel')

var portName = process.argv[2] || 'COM5' || '/dev/tty/ACM0'; // make persistent on the pi
console.log("Port connected: " + portName);

var port = new SerialPort(portName, {
    baudRate: 9600
    // parser: serialport.parsers.readline("\r\n")
});
var parser = port.pipe(new ReadLine({ delimiter: '\r\n'})); // new line is delimiter bc used println in arduino

port.on('open', () => {
    console.log("serial port is open")
});

parser.on('data', data => {

    console.log("some data is here: " + data);

    var parsedData = parseInt(data);
    
   
    var dataObj = {

        reading: parsedData,
        identifier: "some idfier"

    }
    
    var newReading = new Reading(dataObj);
    console.log("data obj looks like:", dataObj)
    
    newReading.save((err) => {

        if (err) throw err;

        /* else {
   
            console.log("about to send data to db")
            //res.send(data);
            
        } */
    });

});

 


