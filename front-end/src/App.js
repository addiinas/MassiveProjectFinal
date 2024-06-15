import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingpageUser from './components/LandingpageUser';
import LoginUser from './components/loginuser';
import SignupUser from './components/signupuser';
import ForgotPassword from './components/ForgotPassword';
import VerificationCode from './components/VerificationCode';
import ResetPassword from './components/ResetPassword';
import RewardPoint from './components/rewardpoint';
import AboutUs from './components/about';
import ForRestaurants from './components/ForRestaurants';
import Dashboard from './components/dashboard';
import Profile from './components/profile';
import Notification from './components/Notification';
import Cart from './components/Cart';
import History from './components/History';
import Points from './components/Points';
import Settings from './components/Settings';


import 'boxicons/css/boxicons.min.css';
import './style.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingpageUser />} />
        <Route path="/login" element={<LoginUser />} />
        <Route path="/signup" element={<SignupUser />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/verification-code" element={<VerificationCode />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/reward-point" element={<RewardPoint />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/for-restaurants" element={<ForRestaurants />} />
        <Route path="/dashboard" element={<Dashboard />} /> 
        <Route path="/profil_user" element={<Profile />} />
        <Route path="/notif" element={<Notification />} />
        <Route path="/chart" element={<Cart />} />
        <Route path="/history" element={<History />} />
        <Route path="/point" element={<Points />} />
        <Route path="/setting" element={<Settings />} />
      </Routes>
    </Router>
  );
}

export default App;
