import React, { useState } from 'react';
import '../style.css';
import Header from './Header';
import LoginUser from './loginuser';
import SignupUser from './signupuser';
import ForgotPassword from './ForgotPassword';

const AboutUs = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const [showForgotPassword, setShowForgotPassword] = useState(false);

  const handleLoginClick = () => {
    setShowLogin(true);
    setShowSignup(false);
    setShowForgotPassword(false);
  };

  const handleSignupClick = () => {
    setShowSignup(true);
    setShowLogin(false);
    setShowForgotPassword(false);
  };

  return (
    <div className="about-us-page">
      {!showLogin && !showSignup && !showForgotPassword && (
        <Header 
          onLoginClick={handleLoginClick} 
          onSignupClick={handleSignupClick}
        />
      )}
      {!showLogin && !showSignup && !showForgotPassword && (
        <>
          <header className="about-us-header">
            <h1>About Us</h1>
            <p>
              At Savery, we are passionate about combating food waste and creating a more sustainable future for all. Every year, millions of tons of food are wasted globally, contributing to environmental degradation and exacerbating food insecurity. We believe that through innovative solutions and collective action, we can make a meaningful difference in reducing food waste.
            </p>
          </header>
          <section className="about-us-section">
            <div className="about-us-content">
              <h2>Who We Are</h2>
              <p>
                We are Savery, committed to fighting food waste. Our goal is simple: to create a more sustainable future by reducing food waste. Join us in making a difference.
              </p>
              <button className="join-now">Join Now</button>
            </div>
            <img src="/assets/images/about/teamwork-high-five-bro-1.svg" alt="Teamwork" className="about-us-image"/>
          </section>
          <section className="features-section">
            <h2>Our Features</h2>
            <div className="features">
              <div className="feature-item">
                <img src="/assets/images/about/icon-notif.svg" alt="Real-Time Notifications"/>
                <h3>Real-Time Notifications</h3>
                <p>Instantly know when restaurants have surplus food available, ensuring you don't miss any offers.</p>
              </div>
              <div className="feature-item">
                <img src="/assets/images/about/icon-rewards.svg" alt="Reward Points Program"/>
                <h3>Reward Points Program</h3>
                <p>Accumulate points with each meal purchase, redeemable for discounts on future orders.</p>
              </div>
              <div className="feature-item">
                <img src="/assets/images/about/icon-our-features-2.svg" alt="Nearby Restaurant Map"/>
                <h3>Nearby Restaurant Map</h3>
                <p>Easily find quality food from various restaurants near you based on location, food type, or specific categories.</p>
              </div>
              <div className="feature-item">
                <img src="/assets/images/about/icon-nut-info.svg" alt="Nutritional Information"/>
                <h3>Nutritional Information</h3>
                <p>Access detailed nutrition and expiry information to make healthier food decisions.</p>
              </div>
            </div>
          </section>
          <footer className="about-us-footer">
            <div className="footer-links">
              <div className="footer-section">
                <h4>Useful Link</h4>
                <ul>
                  <li>FAQ</li>
                  <li>Privacy Policy</li>
                  <li>Terms &amp; Condition</li>
                </ul>
              </div>
              <div className="footer-section">
                <h4>Information</h4>
                <ul>
                  <li>Find Restaurants</li>
                  <li>Rewards Program</li>
                  <li>About Us</li>
                  <li>For Restaurants</li>
                </ul>
              </div>
              <div className="footer-section">
                <h4>Contact Us</h4>
                <ul>
                  <li>Email: iniemail@gmail.com</li>
                  <li>Phone: 123-456-789</li>
                </ul>
              </div>
              <div className="footer-section">
                <h4>Download Our App</h4>
                <div className="app-links">
                  <img src="/assets/images/about/appstore-1.svg" alt="App Store"/>
                  <img src="/assets/images/about/googleplay-1.png" alt="Google Play"/>
                </div>
              </div>
            </div>
            <div className="footer-bottom">
              <img src="/assets/images/about/line-37.svg" alt="Line" className="footer-line"/>
              <p>Copyright © 2024 Savery, All Rights Reserved</p>
            </div>
          </footer>
        </>
      )}
      {showLogin && (
        <LoginUser 
          onSignupClick={handleSignupClick} 
        />
      )}
      {showSignup && <SignupUser onLoginClick={handleLoginClick} />}
      {showForgotPassword && <ForgotPassword />}
    </div>
  );
}

export default AboutUs;
