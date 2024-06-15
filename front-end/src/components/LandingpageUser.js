import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style.css';
import LoginUser from './loginuser';
import SignupUser from './signupuser';
import ForgotPassword from './ForgotPassword';
import Header from './Header';

function LandingpageUser() {
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

  const handleForgotPasswordClick = () => {
    setShowForgotPassword(true);
    setShowLogin(false);
    setShowSignup(false);
  };

  const handleLogoClick = () => {
    setShowLogin(false);
    setShowSignup(false);
    setShowForgotPassword(false);
  };

  return (
    <div className="landingpage">
      {!showLogin && !showSignup && !showForgotPassword && (
        <Header 
          onLoginClick={handleLoginClick} 
          onSignupClick={handleSignupClick} 
        />
      )}
      {!showLogin && !showSignup && !showForgotPassword && <Hero />}
      {showLogin && (
        <LoginUser 
          onSignupClick={handleSignupClick} 
          onForgotPasswordClick={handleForgotPasswordClick} 
          onLogoClick={handleLogoClick} 
        />
      )}
      {showSignup && <SignupUser onLoginClick={handleLoginClick} onLogoClick={handleLogoClick} />}
      {showForgotPassword && <ForgotPassword onLogoClick={handleLogoClick} />}
    </div>
  );
}

function Hero() {
  return (
    <main>
      <section className="hero">
        <div className="hero-content">
          <div className="hero-text">
            <h1>Sumber Makanan Berkualitas yang Terjangkau dan Berkelanjutan!</h1>
            <p>
              Temukan restoran terdekat yang menawarkan menu berkualitas dan ramah anggaran, serta dapatkan poin hadiah untuk diskon pada setiap hidangan yang Anda nikmati!
            </p>
            <Link to="/dashboard">
              <button className="get-started">Mulai <i className="bx bx-right-arrow-alt"></i></button>
            </Link>
          </div>
          <div className="hero-image">
            <img src={`${process.env.PUBLIC_URL}/assets/images/landinguser.png`} alt="Landing Page Image" />
          </div>
        </div>
      </section>
    </main>
  );
}

export default LandingpageUser;