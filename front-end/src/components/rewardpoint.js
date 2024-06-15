import React from 'react';
import '../style.css';
import Header from './Header';

const RewardsProgram = () => {
  return (
    <div>
      <Header />
      <div className="rewards-program">
        <div className="content-wrapper">
          <h1 className="section-title">Rewards Program</h1>
          <p className="section-description">
            Welcome to our Rewards Program! Earn points with every purchase and unlock exciting rewards.
          </p>

          <div className="points-section">
            <div className="points-card">
              <h2 className="points-title">Earning Points</h2>
              <ul className="points-list">
                <li>For every Rp 1.000 spent, you earn 1 point.</li>
                <li>Double points on select items or during promotional periods.</li>
                <li>Refer a friend and receive 50 bonus points each!</li>
              </ul>
            </div>
            <div className="points-card">
              <h2 className="points-title">Redeeming Points</h2>
              <ul className="points-list">
                <li>Redeem 100 points for Rp 5.000 off your next order.</li>
                <li>Unlock exclusive discounts and special offers with your points.</li>
                <li>Visit your account dashboard to track your points balance and rewards.</li>
              </ul>
            </div>
          </div>

          <h2 className="section-subtitle">How It Works?</h2>
          <div className="how-it-works">
            <div className="how-step">
              <h3 className="how-title">Earning Points</h3>
              <div className="how-content">
                <div className="how-item">
                  <span className="how-number">1</span>
                  <div className="how-text">
                    <h4>Create an Account</h4>
                    <p>Log in to your existing account or sign up if you’re new.</p>
                  </div>
                </div>
                <div className="how-item">
                  <span className="how-number">2</span>
                  <div className="how-text">
                    <h4>Purchase Products</h4>
                    <p>Make a purchase to automatically earn points with every transaction.</p>
                  </div>
                </div>
                <div className="how-item">
                  <span className="how-number">3</span>
                  <div className="how-text">
                    <h4>Look for Bonus Opportunities</h4>
                    <p>Keep an eye out for bonus point opportunities and promotions to boost your points balance.</p>
                  </div>
                </div>
                <div className="how-item">
                  <span className="how-number">4</span>
                  <div className="how-text">
                    <h4>Refer Friends</h4>
                    <p>Refer a friend and receive bonus points when they make their first purchase.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="how-step">
              <h3 className="how-title">Redeeming Points</h3>
              <div className="how-content">
                <div className="how-item">
                  <span className="how-number">1</span>
                  <div className="how-text">
                    <h4>Log In to Your Account</h4>
                    <p>Sign in to your account using your credentials.</p>
                  </div>
                </div>
                <div className="how-item">
                  <span className="how-number">2</span>
                  <div className="how-text">
                    <h4>Navigate to the Rewards Section</h4>
                    <p>Once logged in, go to the rewards section in your account dashboard.</p>
                  </div>
                </div>
                <div className="how-item">
                  <span className="how-number">3</span>
                  <div className="how-text">
                    <h4>Choose Your Reward</h4>
                    <p>Select the reward you want to redeem from the available options.</p>
                  </div>
                </div>
                <div className="how-item">
                  <span className="how-number">4</span>
                  <div className="how-text">
                    <h4>Redeem Your Points</h4>
                    <p>Follow the prompts during checkout to redeem your points for the chosen reward.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <h2 className="section-subtitle">Frequently Asked Questions</h2>
          <div className="faq-section">
            <div className="faq-item">
              <h3 className="faq-question">How do I check my points balance?</h3>
              <p className="faq-answer">Log in to your account and navigate to the rewards section to check your points balance.</p>
            </div>
            <div className="faq-item">
              <h3 className="faq-question">Do my points expire?</h3>
              <p className="faq-answer">Points expire after 12 months of inactivity on your account.</p>
            </div>
            <div className="faq-item">
              <h3 className="faq-question">Can I combine points with other offers?</h3>
              <p className="faq-answer">Yes, you can combine points with other promotional offers.</p>
            </div>
            <div className="faq-item">
              <h3 className="faq-question">How soon can I redeem my points?</h3>
              <p className="faq-answer">You can redeem your points as soon as they are earned and reflected in your account.</p>
            </div>
          </div>
        </div>

        <footer className="footer">
          <div className="footer-content">
            <div className="footer-section">
              <h4 className="footer-title">Useful Links</h4>
              <ul className="footer-links">
                <li><a href="#">FAQ</a></li>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Terms & Conditions</a></li>
              </ul>
            </div>
            <div className="footer-section">
              <h4 className="footer-title">Information</h4>
              <ul className="footer-links">
                <li><a href="#">Find Restaurants</a></li>
                <li><a href="#">Rewards Program</a></li>
                <li><a href="#">About Us</a></li>
                <li><a href="#">For Restaurants</a></li>
              </ul>
            </div>
            <div className="footer-section">
              <h4 className="footer-title">Contact Us</h4>
              <p>Email: iniemail@gmail.com</p>
              <p>Phone: 123-456-789</p>
              <div className="social-icons">
                <a href="#"><img src={`${process.env.PUBLIC_URL}/assets/images/reward/facebook-1.svg`} alt="facebook" /></a>
                <a href="#"><img src={`${process.env.PUBLIC_URL}/assets/images/reward/twitter-1.svg`} alt="twitter" /></a>
                <a href="#"><img src={`${process.env.PUBLIC_URL}/assets/images/reward/instagram-1.svg`} alt="instagram" /></a>
                <a href="#"><img src={`${process.env.PUBLIC_URL}/assets/images/reward/youtube-1.svg`} alt="youtube" /></a>
              </div>
            </div>
            <div className="footer-section">
              <h4 className="footer-title">Download Our App</h4>
              <div className="app-links">
                <a href="#"><img src={`${process.env.PUBLIC_URL}/assets/images/reward/appstore-1.svg`} alt="appstore" /></a>
                <a href="#"><img src={`${process.env.PUBLIC_URL}/assets/images/reward/googleplay-1.png`} alt="googleplay" /></a>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>Copyright © 2024 Savery, All Rights Reserved</p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default RewardsProgram;
