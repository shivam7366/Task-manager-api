const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "shivamkhandelwal1623@gmail.com",
    subject: "Welcome Email",
    text: `Hello ${name} welcome to task manager app`,
  });
};
const sendCancelEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "shivamkhandelwal1623@gmail.com",
    subject: "Cancel Email",
    text: `Goodbye ${name} ,Sorry to see you go.`,
  });
};

module.exports = { sendWelcomeEmail, sendCancelEmail };
