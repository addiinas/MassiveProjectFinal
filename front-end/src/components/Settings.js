import React from 'react';
import { useNavigate } from 'react-router-dom';
import 'boxicons/css/boxicons.min.css';
import '../style.css';

function Settings() {
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
        <a href="/point" className="menu-item"><i className='bx bxs-donate-blood'></i></a>
        <div className="spacer"></div>
        <a href="/setting" className="menu-item active"><i className='bx bxs-cog'></i></a>
        <a href="#" className="menu-item"><i className='bx bx-log-out'></i></a>
      </div>
    </div>
  );
}

function MainContent() {
  return (
    <div className="main-content">
      <Header />
      <SettingsMenu />
      <ProfileSection />
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
      <h1>Settings</h1>
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

function SettingsMenu() {
  return (
    <div className="settings-menu">
      <a href="/setting" className="active"><button>Account Information</button></a>
      <a href="#"><button type="button" className="btn">Change Password</button></a>
      <a href="#"><button type="button" className="btn">My Address</button></a>
      <a href="#"><button type="button" className="btn">Notification Settings</button></a>
      <a href="#"><button type="button" className="btn">Security & Privacy</button></a>
    </div>
  );
}

function ProfileSection() {
  return (
    <div className="setprofile-section">
      <div className="setpersonal-info">
        <img src="/assets/images/user/Ningning.jpg" alt="Profile Picture" className="setprofile-pic" />
        <div className="setinfo-container">
          <div className="setinfo">
            <div className="setinfo-item">
              <span className="setlabel">Name</span>
              <span className="setvalue">Ningsih</span>
            </div>
            <div className="setinfo-item">
              <span className="setlabel">Username</span>
              <span className="setvalue">Ningsih23</span>
            </div>
            <div className="setinfo-item">
              <span className="setlabel">Email</span>
              <span className="setvalue">ningsih23@gmail.com</span>
            </div>
            <div className="setinfo-item">
              <span className="setlabel">Phone</span>
              <span className="setvalue">0821-2310-2002</span>
            </div>
          </div>
        </div>
        <button className="setsave-btn">Save Changes</button>
      </div>
    </div>
  );
}

export default Settings;
