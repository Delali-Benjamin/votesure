const prisma = require("../config/prisma");
const sendOtpEmail = require("../utils/sendOtp");
const jwt = require("jsonwebtoken");

// Send OTP
exports.sendOtp = async (req, res) => {
  const { email } = req.body;

  try {
    const user = await prisma.user.findUnique({ where: { email } });

    if (!user) {
      return res.status(404).json({ message: "User not found or not eligible" });
    }

    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    const expiry = new Date(Date.now() + 5 * 60 * 1000); // 5 min

    await prisma.user.update({
      where: { email },
      data: {
        otp,
        otpExpiry: expiry,
      },
    });

    await sendOtpEmail(email, otp);

    res.status(200).json({ message: "OTP sent to your email." });
  } catch (err) {
    console.error("❌ Error sending OTP:", err);
    res.status(500).json({ message: "Server error sending OTP" });
  }
};

//Verifies OTP
exports.verifyOtp = async (req, res) => {
  const { email, otp } = req.body;

  try {
    const user = await prisma.user.findUnique({ where: { email } });

    if (!user) return res.status(404).json({ message: "User not found" });

    const isOtpValid = user.otp === otp && new Date(user.otpExpiry) > new Date();

    if (!isOtpValid) return res.status(400).json({ message: "Invalid or expired OTP" });

    await prisma.user.update({
      where: { email },
      data: {
        otp: null,
        otpExpiry: null,
      },
    });

    const token = jwt.sign(
      { id: user.id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    res.status(200).json({ token, name: user.name, role: user.role });
  } catch (err) {
    console.error("❌ Error verifying OTP:", err);
    res.status(500).json({ message: "Server error" });
  }
};
