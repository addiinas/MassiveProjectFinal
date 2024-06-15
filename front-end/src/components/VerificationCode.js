import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style.css';

const VerificationCode = ({ email, onVerify }) => {
  const [code, setCode] = useState(['', '', '', '']);

  const handleChange = (e, index) => {
    const newCode = [...code];
    newCode[index] = e.target.value;
    setCode(newCode);
    if (e.target.value && index < 3) {
      document.getElementById(`code-${index + 1}`).focus();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const verificationCode = code.join('');
    onVerify(verificationCode);
  };

  return (
    <div className="verification-container">
      <h1>Verification Code</h1>
      <p>Please enter the 4-digit verification code we sent to your email</p>
      <form onSubmit={handleSubmit}>
        <div className="verification-code-inputs">
          {code.map((digit, index) => (
            <input
              key={index}
              id={`code-${index}`}
              type="text"
              maxLength="1"
              value={digit}
              onChange={(e) => handleChange(e, index)}
              className="verification-code-input"
            />
          ))}
        </div>
        <button type="submit" className="btn-submit">Submit</button>
      </form>
      <p>Didn't receive a code? <a href="/resend-code">Resend Code</a></p>
    </div>
  );
};

export default VerificationCode;
