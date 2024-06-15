import React from 'react';
import { useNavigate } from 'react-router-dom';
import 'boxicons/css/boxicons.min.css';
import '../style.css';

function Cart() {
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
      <CartItems />
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

  return (
    <div className="header">
      <h1>My Cart</h1>
      <div className="icons">
        <a href="/chart" className="menu-item active"><i className='bx bxs-cart-alt'></i></a>
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

function CartItems() {
  return (
    <div className="cart-items">
      <CartItem
        imgSrc="/assets/images/user/tart.png"
        altText="Sweet Tarts"
        shopName="Baked Bliss"
        itemName="Sweet Tarts"
        price="Rp 25.000"
        originalPrice="Rp 50.000"
      />
      <CartItem
        imgSrc="/assets/images/user/bread.png"
        altText="Nutella Swirl Bread"
        shopName="Dough Dreams"
        itemName="Nutella Swirl Bread"
        price="Rp 19.500"
        originalPrice="Rp 39.000"
      />
    </div>
  );
}

function CartItem({ imgSrc, altText, shopName, itemName, price, originalPrice }) {
  return (
    <div className="cart-item">
      <img src={imgSrc} alt={altText} />
      <div className="item-details">
        <i className='bx bxs-map'></i>
        <h2>{shopName}</h2>
        <p>{itemName}</p>
        <p className="price">{price} <span className="original-price">{originalPrice}</span></p>
        <div className="quantity">
          <button className="minus">-</button>
          <input type="text" value="1" readOnly />
          <button className="plus">+</button>
        </div>
        <button className="order-button">Order</button>
      </div>
    </div>
  );
}

export default Cart;