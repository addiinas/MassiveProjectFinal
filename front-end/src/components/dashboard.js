import React from 'react';
import { useNavigate } from 'react-router-dom';
import 'boxicons/css/boxicons.min.css';
import '../style.css';

function Dashboard() {
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
      <Discover />
      <NearbyRestaurants />
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

  const handlePointsClick = () => {
    navigate('/point');
  };

  const handleHistoryClick = () => {
    navigate('/history');
  };

  const handleSettingsClick = () => {
    navigate('/setting');
  };

  return (
    <div className="header">
      <h1>Welcome, Ningsih! <br /> <p>Discover surplus food easily here</p></h1>
      <div className="icons">
        <i className='bx bxs-cart-alt menu-item' onClick={handleCartClick} style={{ cursor: 'pointer' }}></i>
        <i className='bx bxs-bell menu-item' onClick={handleNotificationClick} style={{ cursor: 'pointer' }}></i>
        <i className='bx bx-history menu-item' onClick={handleHistoryClick} style={{ cursor: 'pointer' }}></i>
        <i className='bx bxs-donate-blood menu-item' onClick={handlePointsClick} style={{ cursor: 'pointer' }}></i>
        <i className='bx bxs-cog menu-item' onClick={handleSettingsClick} style={{ cursor: 'pointer' }}></i>
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

function Discover() {
  return (
    <section className="discover">
      <h1>Discover Restaurants</h1>
      <p>Explore restaurants offering quality and affordable meals. Filter by location, food type, and price range to discover your ideal dining experience. Start exploring now!</p>
      <div className="search-bar">
        <i className='bx bx-search'></i>
        <input type="text" placeholder="Enter Keyword" />
        <select>
          <option>Location</option>
          <option>Aceh</option>
          <option>Bali</option>
          <option>Bandung</option>
          <option>Batam</option>
        </select>
        <select>
          <option>Food Type</option>
          <option>Bakery</option>
          <option>Barbecue</option>
          <option>Chicken</option>
          <option>Chinese</option>
        </select>
        <select>
          <option>Price Range</option>
          <option>Rp 10.000-Rp 50.000</option>
          <option>Rp 50.000-Rp 100.000</option>
          <option>Rp 100.000-Rp 200.000</option>
          <option>Rp 200.000-Rp 300.000</option>
        </select>
        <button>Search</button>
      </div>
    </section>
  );
}

function NearbyRestaurants() {
  return (
    <section className="nearby-restaurants">
      <div className="address-search">
        <h2>Looking for a Nearby Restaurant?</h2>
        <div className="address-input">
          <input type="text" placeholder="Enter your address..." />
          <button><i className='bx bx-search'></i></button>
        </div>
        <ul className="restaurant-list">
          <li>Cafe Delight - Jl. Harmoni No. 123, Jakarta</li>
          <li>Dapur Nyonya - Jl. Ahmad Yani No. 25, Jakarta</li>
          <li>Golden Spoon Eatery - Jl. Gatot Subroto, Jakarta</li>
          <li>Harbor Fisherman's Grill - Jl. Pantai Kuta, Bali</li>
          <li>Oriental Palace - Jl. Pahlawan No. 95, Kupang</li>
        </ul>
      </div>
      <div className="map-container">
        <img src="/assets/images/user/peta_landing.png" alt="Map" className="map-image" />
      </div>
    </section>
  );
}

export default Dashboard;
