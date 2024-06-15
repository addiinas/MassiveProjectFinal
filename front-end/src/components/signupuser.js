import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style.css';

const SignUpUser = ({ onLoginClick, onLogoClick }) => {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('http://localhost:5000/api/auth/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, username, email, password }),
    })
    .then(response => response.json())
    .then(data => {
      if (data.success) {
        alert('Sign up successful!');
        window.location.href = '/login';
      } else {
        alert('Sign up failed: ' + data.message);
      }
    });
  };

  return (
    <section className="row justify-content-center align-items-center vh-100 signup-form">
      <div className="col-12 text-start position-absolute top-0 start-0 m-3" onClick={onLogoClick}>
        <img src={`${process.env.PUBLIC_URL}/assets/images/logo.png`} alt="Logo" className="logo" />
      </div>
      <div className="col-md-5 text-center">
        <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={`${process.env.PUBLIC_URL}/assets/images/img1.png`} className="d-block w-75 mx-auto" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={`${process.env.PUBLIC_URL}/assets/images/img2.png`} className="d-block w-75 mx-auto" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={`${process.env.PUBLIC_URL}/assets/images/img3.png`} className="d-block w-75 mx-auto" alt="..." />
            </div>
          </div>
        </div>
      </div>

      <div className="col-md-5 position-relative">
        <div className="form-box signup position-relative">
          <h1>Sign Up</h1>
          <p>Create Your Account!</p>
          <form onSubmit={handleSubmit} className="signup-form">
            <div className="half-width">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                placeholder="Enter Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="half-width">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                name="username"
                required
                placeholder="Enter Your Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="full-width">
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
            <div className="full-width">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                required
                placeholder="Enter Your Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button type="submit">Sign Up</button>
          </form>

          <div className="afterform">
            <p>Or Sign Up With</p>
            <div className="auth-buttons">
              <a href="http://localhost:5000/auth/google" className="btn-auth">
                <i className='bx bxl-google'></i> Google
              </a>
              <a href="#" className="btn-auth">
                <i className='bx bxl-apple'></i> Apple ID
              </a>
            </div>
          </div>

          <p>Already have an account? <a href="#" onClick={onLoginClick} className="login-button">Log In</a></p>
        </div>
      </div>
    </section>
  );
};

export default SignUpUser;
