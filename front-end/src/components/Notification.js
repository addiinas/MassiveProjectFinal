import React from 'react';
import { useNavigate } from 'react-router-dom';
import 'boxicons/css/boxicons.min.css';
import '../style.css';

function Notification() {
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
      <Notifications />
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
      <h1>Notification</h1>
      <div className="icons">
        <a href="/chart" className="menu-item"><i className='bx bxs-cart-alt'></i></a>
        <a href="/notif" className="menu-item active"><i className='bx bxs-bell'></i></a>
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

function Notifications() {
  return (
    <div className="notifications">
      <NotificationItem
        bgColor="#f8d7da"
        icon="D"
        title="Dough Dreams"
        message="Surplus treats available at Dough Dreams! Order and enjoy our leftover pastries and doughnuts at discounted prices."
        date="2024-03-10"
        time="21.00 WIB"
      />
      <NotificationItem
        bgColor="#d1ecf1"
        icon="B"
        title="Baked Bliss"
        message="Surplus treats available at Baked Bliss! Order and enjoy our leftover pastries and doughnuts at discounted prices."
        date="2024-03-11"
        time="20.31 WIB"
      />
      <NotificationItem
        bgColor="#fff3cd"
        icon="S"
        title="Sour & Co"
        message="Surplus treats available at Sour & Co! Order and enjoy our leftover pastries and doughnuts at discounted prices."
        date="2024-03-11"
        time="21.00 WIB"
      />
      <NotificationItem
        bgColor="#e2e3e5"
        icon="C"
        title="Cafe Delight"
        message="Surplus treats available at Cafe Delight! Order and enjoy our leftover pastries and doughnuts at discounted prices."
        date="2024-03-12"
        time="19.45 WIB"
      />
    </div>
  );
}

function NotificationItem({ bgColor, icon, title, message, date, time }) {
  return (
    <div className="notification">
      <div className="icon" style={{ backgroundColor: bgColor }}>{icon}</div>
      <div className="content">
        <h2>{title}</h2>
        <p>{message}</p>
        <div className="details">
          <span>{date} | {time}</span>
          <button className="explore-btn">Explore</button>
        </div>
      </div>
    </div>
  );
}

export default Notification;
