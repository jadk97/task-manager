const sgMail = require("@sendgrid/mail");


sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: 'jadk97@example.com',
    subject: "Thanks for joining in!",
    text: `Welcome to the app, ${name}. Let me know what you think.`
  })
}

const sendCancelationEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "jadk97@example.com",
    subject: "Sorry to see you go!",
    text: `Goodbye, ${name}. I hope we meet again soon.`
  })
}

module.exports = {
  sendWelcomeEmail,
  sendCancelationEmail
}