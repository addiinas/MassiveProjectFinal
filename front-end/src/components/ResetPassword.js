import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style.css';

const ResetPassword = ({ onReset }) => {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newPassword === confirmPassword) {
      onReset(newPassword);
    } else {
      alert('Passwords do not match');
    }
  };

  return (
    <div className="vh-100 d-flex justify-content-center align-items-center">
      <div className="container reset-password-container">
        <h1>Reset Password</h1>
        <p>Please enter your new password. You will need to login after you reset</p>
        <form onSubmit={handleSubmit}>
          <label htmlFor="newPassword">New Password</label>
          <input
            type="password"
            id="newPassword"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            required
            placeholder="Enter Your New Password"
            className="form-control mb-3"
          />
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            placeholder="Confirm Your New Password"
            className="form-control mb-3"
          />
          <button type="submit" className="btn btn-submit w-100">Send</button>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
