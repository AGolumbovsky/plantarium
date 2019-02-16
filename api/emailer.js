const nodemailer = require('nodemailer');

/* 

!!!!!!!!! CHECK SPAM FOLDER, IT WILL END UP THERE

*/

async function emailer(reading) {

  if (!reading) {
    reading = "Low";
  }

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({

    host: "smtp.gmail.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {

      user: "yourCactos@gmail.com", 
      pass: "ko00KO))" 

    }

  });

  let receiver = "aggenuse@gmail.com";

  // unicode symbols
  let mailOptions = {

    from: '"Your Cactus <yourCactos@gmail.com>', // sender address
    to: receiver, // list of receivers, CSV inside string works
    subject: `Feed Me, I'm at ${reading}`, 
    // text is not seen in email body, find out why 
    text: "Feed me now, don't make me call your mother again", // plain text body
    html: "<b>Something inside an html bee tag</b>" // html body

  };

  let info = await transporter.sendMail(mailOptions)

  console.log(`Message sent to ${receiver}`);
}

// emailer().catch(console.error);

module.exports = emailer;