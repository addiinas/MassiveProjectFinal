import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../style.css';

const Header = ({ onLoginClick, onSignupClick }) => {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate('/');
  };

  return (
    <header>
      <nav className="nav">
        <div className="logo" onClick={handleLogoClick}>
          <img src={`${process.env.PUBLIC_URL}/assets/images/logo.png`} alt="logo" />
        </div>
        <ul>
          <li><Link to="/">Find Restaurants</Link></li>
          <li><Link to="/reward-point">Rewards Program</Link></li>
          <li><Link to="/about-us">About Us</Link></li>
          <li><Link to="/for-restaurants">For Restaurants</Link></li>
        </ul>
        <div className="auth-buttons">
          <button className="login" onClick={onLoginClick}>Log In</button>
          <button className="signup" onClick={onSignupClick}>Sign Up</button>
        </div>
      </nav>
    </header>
  );
}

export default Header;
