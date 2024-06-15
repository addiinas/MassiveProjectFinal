import React from 'react';
import { useNavigate } from 'react-router-dom';
import 'boxicons/css/boxicons.min.css';
import '../style.css';

function Profile() {
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
        <a href="/" className="menu-item"><i className='bx bxs-home'></i></a>
        <a href="/history" className="menu-item"><i className='bx bx-history'></i></a>
        <a href="/point" className="menu-item"><i className='bx bxs-donate-blood'></i></a>
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
      <PersonalInfo />
      <ProfileSection />
    </div>
  );
}

function Header() {
  const navigate = useNavigate();

  const handleProfileClick = () => {
    navigate('/profil_user');
  };

  return (
    <div className="header">
      <h1>Profile</h1>
      <div className="icons">
        <a href="/chart" className="menu-item"><i className='bx bxs-cart-alt'></i></a>
        <a href="/notif" className="menu-item"><i className='bx bxs-bell'></i></a>
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

function PersonalInfo() {
  return (
    <div className="personal-info">
      <h3>Personal Information</h3>
      <div className="userinfo-container">
        <img src="/assets/images/user/Ningning.jpg" alt="Profile Picture" className="profile-pic" />
        <div className="info">
          <div className="info-item">
            <span className="label">Name</span>
            <span className="value">Ningsih</span>
          </div>
          <div className="info-item">
            <span className="label">Username</span>
            <span className="value">Ningsih23</span>
          </div>
          <div className="info-item">
            <span className="label">Email</span>
            <span className="value">ningsih23@gmail.com</span>
          </div>
          <div className="info-item">
            <span className="label">Phone</span>
            <span className="value">0821-2310-2002</span>
          </div>
        </div>
        <div className="edit-icon">
          <a href="/setting"><button className="edit" style={{fontSize: '24px'}}><i className='bx bxs-edit'></i></button></a>
        </div>
      </div>
    </div>
  );
}

function ProfileSection() {
  return (
    <div className="profile-section">
      <div className="userpoints-section">
        <h3>Current Points</h3>
        <div className="userpoints-info">
          <div className="userpoints-icon" style={{backgroundImage: 'linear-gradient(to bottom right, #FFFFFF, #C7E2E4)'}}>
            <i className='bx bxs-trophy'></i>
          </div>
          <div className="userpoints-details">
            <span className="userpoints">80pts</span>
            <p>20 points till Rp 5.000 off on your next order</p>
          </div>
          <div className="more-details">
            <a href="/point">More Details</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;