const express = require('express');
const router = express.Router();
const db = require('../db');
const sendVerificationEmail = require('../utils/email');

router.post('/forgot-password', async (req, res) => {
  const { email } = req.body;
  console.log(`Received forgot password request for: ${email}`);

  try {
    const code = Math.floor(100000 + Math.random() * 900000).toString();
    await sendVerificationEmail(email, code);

    // Simpan kode verifikasi ke database atau memori
    await db.query('INSERT INTO verification_codes (email, code) VALUES (?, ?)', [email, code]);

    res.json({ success: true, message: 'Verification code sent to email!' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: err.message });
  }
});

router.post('/verify-code', async (req, res) => {
  const { email, code } = req.body;
  console.log(`Verifying code ${code} for email ${email}`);

  try {
    const [rows] = await db.query('SELECT * FROM verification_codes WHERE email = ? AND code = ?', [email, code]);
    if (rows.length > 0) {
      res.json({ success: true, message: 'Code verified' });
    } else {
      res.status(400).json({ success: false, message: 'Invalid code' });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: err.message });
  }
});

router.post('/reset-password', async (req, res) => {
  const { email, password } = req.body;
  console.log(`Resetting password for email ${email}`);

  try {
    await db.query('UPDATE users SET password = ? WHERE email = ?', [password, email]);
    res.json({ success: true, message: 'Password has been reset successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: err.message });
  }
});

module.exports = router;
