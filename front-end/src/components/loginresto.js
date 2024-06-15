import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style.css';

const LoginResto = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('http://localhost:5000/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    })
    .then(response => response.json())
    .then(data => {
      if (data.success) {
        alert('Login successful!');
        // Redirect to dashboard or home page
        window.location.href = '/dashboard'; 
      } else {
        alert('Login failed: ' + data.message);
      }
    });
  };

  return (
    <section className="row justify-content-center align-items-center vh-100 login-form">
      <div className="col-12 text-start position-absolute top-0 start-0 m-3">
        <img src={`${process.env.PUBLIC_URL}/assets/images/logo.png`} alt="Logo" className="logo" />
      </div>
      <div className="col-md-5 text-center">
        <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={`${process.env.PUBLIC_URL}/assets/images/login1.png`} className="d-block w-75 mx-auto" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={`${process.env.PUBLIC_URL}/assets/images/login2.png`} className="d-block w-75 mx-auto" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={`${process.env.PUBLIC_URL}/assets/images/login3.png`} className="d-block w-75 mx-auto" alt="..." />
            </div>
          </div>
        </div>
      </div>

      <div className="col-md-5 position-relative">
        <div className="form-box login position-relative">
          <h1>Log In</h1>
          <p className="welcome">Welcome back to your account!</p>
          <form onSubmit={handleSubmit}>
            <label htmlFor="email">Email/ Username</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              placeholder="Enter Your Email/ Username"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
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
            <p className="forgot"><a href="/forgotpw">Forgot Password?</a></p>
            <button type="submit">Log In</button>
          </form>

          <div className="afterform">
            <p>Or Log In With</p>
            <div className="d-flex justify-content-around pb-3">
              <button className="btn btn-light border border-2 flex-fill me-2"><i className='bx bxl-google'></i> Google</button>
              <button className="btn btn-light border border-2 flex-fill ms-2"><i className='bx bxl-apple'></i> Apple ID</button>
            </div>
          </div>

          <p>Didn’t have an account? <a href="/signup-resto" className="signup-button">Sign Up</a></p>
        </div>
      </div>
    </section>
  );
};

export default LoginResto;
