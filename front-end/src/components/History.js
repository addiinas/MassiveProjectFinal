import React from 'react';
import { useNavigate } from 'react-router-dom';
import 'boxicons/css/boxicons.min.css';
import '../style.css';

function History() {
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
        <a href="/history" className="menu-item active"><i className='bx bx-history'></i></a>
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
      <HistoryContent />
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
      <h1>History</h1>
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

function HistoryContent() {
  return (
    <>
      <p className="text-end">All Status <i className='bx bxs-chevron-down'></i></p>
      <div className="order-history">
        <OrderItem
          orderId="391836109365888"
          restaurantName="Baked Bliss"
          imgSrc="/assets/images/user/food1.png"
          altText="Sweet Tarts"
          itemName="Sweet Tarts"
          cutlery="No cutlery"
          date="2024-03-11 | 20:31 WIB"
          price="Rp 41.000"
          points="+41 points"
        />
        <OrderItem
          orderId="461336502363825"
          restaurantName="Sunrise Cafe"
          imgSrc="/assets/images/user/food2.png"
          altText="Fluffy Omelette"
          itemName="Fluffy Omelette"
          cutlery="With cutlery"
          date="2024-03-05 | 21:00 WIB"
          price="Rp 32.000"
          points="+32 points"
        />
      </div>
    </>
  );
}

function OrderItem({ orderId, restaurantName, imgSrc, altText, itemName, cutlery, date, price, points }) {
  return (
    <div className="order-item">
      <div className="order-id">{orderId}</div>
      <div className="order-restaurant">
        <i className='bx bxs-map'></i> <span className="restaurant-name">{restaurantName}</span>
      </div>
      <div className="order-details">
        <div className="order-image">
          <img src={imgSrc} alt={altText} />
        </div>
        <div className="order-info">
          <div className="order-name">{itemName}</div>
          <div className="order-cutlery">{cutlery}</div>
        </div>
        <div className="order-meta">
          <div className="order-date">{date}</div>
          <div className="order-price-points">
            <div className="order-price">{price}</div>
            <div className="order-points">{points}</div>
          </div>
          <button className="order-again-btn">Order Again</button>
        </div>
      </div>
    </div>
  );
}

export default History;
