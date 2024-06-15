import React, { useState } from 'react';
import VerificationCode from './VerificationCode';
import ResetPassword from './ResetPassword';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style.css';

const ForgotPassword = () => {
  const [step, setStep] = useState('email');
  const [email, setEmail] = useState('');
  const [error, setError] = useState(null);

  const sendVerificationCode = () => {
    fetch('http://localhost:5000/api/auth/forgot-password', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email }),
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Failed to fetch');
      }
      return response.json();
    })
    .then(data => {
      if (data.success) {
        setStep('verification');
      } else {
        alert('Failed to send verification code: ' + data.message);
      }
    })
    .catch(error => {
      console.error('Error:', error);
      setError('Failed to fetch');
    });
  };

  const verifyCode = (code) => {
    fetch('http://localhost:5000/api/auth/verify-code', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, code }),
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch');
        }
        return response.json();
      })
      .then(data => {
        if (data.success) {
          setStep('reset');
        } else {
          alert('Invalid verification code');
        }
      })
      .catch(error => {
        console.error('Error:', error);
        setError('Failed to fetch');
      });
  };

  const resetPassword = (password) => {
    fetch('http://localhost:5000/api/auth/reset-password', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch');
        }
        return response.json();
      })
      .then(data => {
        if (data.success) {
          alert('Password reset successfully. Redirecting to login page...');
          window.location.href = '/login';
        } else {
          alert('Failed to reset password');
        }
      })
      .catch(error => {
        console.error('Error:', error);
        setError('Failed to fetch');
      });
  };

  return (
    <div className="vh-100 d-flex justify-content-center align-items-center">
      <div className="container">
        {step === 'email' && (
          <div className="form-section active">
            <h1>Forgot Password</h1>
            <p>Please enter your email address to receive a verification code</p>
            {error && <div className="alert alert-danger">{error}</div>}
            <div className="input-text">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                placeholder="Enter Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <button onClick={sendVerificationCode}>Send</button>
            <div className="afterform">
              <p>Remember your password? <a href="/login">Back to Log In</a></p>
            </div>
          </div>
        )}
        {step === 'verification' && (
          <VerificationCode email={email} onVerify={verifyCode} />
        )}
        {step === 'reset' && (
          <ResetPassword onReset={resetPassword} />
        )}
      </div>
    </div>
  );
};

export default ForgotPassword;
