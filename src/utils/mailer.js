const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

const sendOtpEmail = async (to, otp) => {
  return transporter.sendMail({
    from: `"VoteSure" <${process.env.EMAIL_USER}>`,
    to,
    subject: "Your OTP Code",
    html: `<h2>Your OTP: ${otp}</h2><p>This code will expire in 5 minutes.</p>`,
  });
};

module.exports = sendOtpEmail;
