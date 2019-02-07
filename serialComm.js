const SerialPort = require('serialport');
const ReadLine = require('@serialport/parser-readline');

// const pool = require('./api/config/dbConnect');
const { Pool } = require('pg');

const connectionString = "postgres://plantr:ko00KO))@localhost/plantarium_db";
    
const pool = new Pool({
        connectionString: connectionString
    });

console.log("jsut outside module.exports");
// module.exports = () => {

    var portName = process.argv[2] || 'COM5' || '/dev/tty/ACM0'; // make persistent on the pi
    console.log("Port is: " + portName);

    var port = new SerialPort(portName, {
        baudRate: 9600
        // parser: serialport.parsers.readline("\r\n")
    });
    var parser = port.pipe(new ReadLine({ delimiter: '\r\n'})); // new line is delimiter bc used println in arduino
    console.log("just before port.on()")

    port.on('open', () => {
        console.log("serial port is open", portName);
    })
    parser.on('data', data => {

        console.log("some data is here: " + data);
    
        var queryString = `INSERT INTO readings(reading, identifier)
        VALUES(${data}, 'from ser, real data')`;

        pool.query(queryString, (err, data) => {

            if (err) throw err;

            console.log(data.rows);
        })

    });
