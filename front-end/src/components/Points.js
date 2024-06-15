import React from 'react';
import { useNavigate } from 'react-router-dom';
import 'boxicons/css/boxicons.min.css';
import '../style.css';

function Points() {
  return (
    <div className="dashboard">
      <Sidebar />
      <MainContent />
    </div>
  );
}

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="logo">
        <img src="/assets/images/user/logo.png" alt="Logo" />
      </div>
      <div className="menu">
        <a href="/dashboard" className="menu-item"><i className='bx bxs-home'></i></a>
        <a href="/history" className="menu-item"><i className='bx bx-history'></i></a>
        <a href="/point" className="menu-item active"><i className='bx bxs-donate-blood'></i></a>
        <div className="spacer"></div>
        <a href="/setting" className="menu-item"><i className='bx bxs-cog'></i></a>
        <a href="#" className="menu-item"><i className='bx bx-log-out'></i></a>
      </div>
    </div>
  );
}

function MainContent() {
  return (
    <div className="main-content">
      <Header />
      <PointsSection />
    </div>
  );
}

function Header() {
  const navigate = useNavigate();

  const handleProfileClick = () => {
    navigate('/profil_user');
  };

  const handleNotificationClick = () => {
    navigate('/notif');
  };

  const handleCartClick = () => {
    navigate('/chart');
  };

  return (
    <div className="header">
      <h1>My Points</h1>
      <div className="icons">
        <i className='bx bxs-cart-alt menu-item' onClick={handleCartClick} style={{ cursor: 'pointer' }}></i>
        <i className='bx bxs-bell menu-item' onClick={handleNotificationClick} style={{ cursor: 'pointer' }}></i>
        <img
          src="/assets/images/user/Ningning.jpg"
          alt="User"
          className="user-icon"
          onClick={handleProfileClick}
          style={{ cursor: 'pointer' }}
        />
      </div>
    </div>
  );
}

function PointsSection() {
  return (
    <div className="points-section">
      <CurrentPoints />
      <RedeemPoints />
    </div>
  );
}

function CurrentPoints() {
  return (
    <div className="current-points">
      <div className="points-info">
        <div className="points-icon" style={{ backgroundImage: 'linear-gradient(to bottom right, #FFFFFF, #C7E2E4)' }}>
          <i className='bx bxs-trophy'></i>
        </div>
        <div className="points-text">
          <h3>80pts</h3>
          <p>20 points till Rp 5.000 off on your next order</p>
          <p>Expiry 03/25</p>
        </div>
      </div>
      <div className="points-status">
        <span className="status-label">Regular</span>
      </div>
    </div>
  );
}

function RedeemPoints() {
  return (
    <div className="redeem-points">
      <h3>Redeem Points</h3>
      <div className="redeem-options">
        <RedeemOption bgColor="#FFE1D2" value="Rp 5.000" desc="Discount for your next order" points="100 Points" />
        <RedeemOption bgColor="#D6EAEC" value="Rp 10.000" desc="Discount for your next order" points="200 Points" />
        <RedeemOption bgColor="#FFF1D2" value="Rp 50.000" desc="Discount for your next order" points="400 Points" />
        <RedeemOption bgColor="#E7F3CC" value="Rp 100.000" desc="Discount for your next order" points="800 Points" />
      </div>
    </div>
  );
}

function RedeemOption({ bgColor, value, desc, points }) {
  return (
    <div className="redeem-option" style={{ backgroundColor: bgColor }}>
      <div className="redeem-icon"><i className='bx bxs-offer'></i></div>
      <div className="redeem-info">
        <p className="redeem-value">{value}</p>
        <p className="redeem-desc">{desc}</p>
        <p className="redeem-points">{points}</p>
      </div>
    </div>
  );
}

export default Points;
