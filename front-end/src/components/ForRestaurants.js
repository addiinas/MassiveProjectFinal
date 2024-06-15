import React from 'react';
import '../style.css';

const ForRestaurants = () => {
  return (
    <div className="for-restaurants">
      <header className="header">
        <nav className="navbar">
          <div className="container">
            <img src="/assets/images/forresto/image-removebg-preview-1.png" alt="Logo" className="logo" />
            <ul className="nav-links">
              <li><a href="/">Find Restaurants</a></li>
              <li><a href="/">Rewards Program</a></li>
              <li><a href="/">About Us</a></li>
              <li><a href="/for-restaurants">For Restaurants</a></li>
              <li><button className="btn login">Log In</button></li>
              <li><button className="btn signup">Sign Up</button></li>
            </ul>
          </div>
        </nav>
      </header>
      <main>
        <section className="hero">
          <div className="container">
            <h1>For Restaurants</h1>
            <p>Welcome to Savery! We're excited to partner with restaurants like yours to offer quality dining experiences to our users.</p>
          </div>
        </section>
        <section className="benefits">
          <div className="container">
            <h2>Benefit of Joining Us!</h2>
            <div className="benefit-cards">
              <div className="benefit-card">
                <img src="/assets/images/forresto/maki-waste-basket.svg" alt="Reduce Food Waste" />
                <h3>Reduce Food Waste</h3>
              </div>
              <div className="benefit-card">
                <img src="/assets/images/forresto/bi-people-fill.svg" alt="Reach More Customers" />
                <h3>Reach More Customers</h3>
              </div>
              <div className="benefit-card">
                <img src="/assets/images/forresto/mdi-recycle.svg" alt="Support Sustainability" />
                <h3>Support Sustainability</h3>
              </div>
            </div>
            <button className="btn join-now">Join Now</button>
          </div>
        </section>
        <section className="how-it-works">
          <div className="container">
            <h2>How It Works</h2>
            <div className="steps">
              <div className="step">
                <span>1</span>
                <h3>Registration and Profile</h3>
              </div>
              <div className="step">
                <span>2</span>
                <h3>Promotions & Discounts</h3>
              </div>
              <div className="step">
                <span>3</span>
                <h3>Product Offerings</h3>
              </div>
              <div className="step">
                <span>4</span>
                <h3>Order Management</h3>
              </div>
              <div className="step">
                <span>5</span>
                <h3>Analysis and Feedback</h3>
              </div>
            </div>
          </div>
        </section>
        <section className="reporting">
          <div className="container">
            <h2>Reporting & Analytics Features</h2>
            <div className="reporting-cards">
              <div className="reporting-card">
                <img src="/assets/images/forresto/icon-park-solid-market-analysis.svg" alt="Sales Performance Training" />
                <h3>Sales Performance Training</h3>
                <p>Generate customized reports based on your specific needs.</p>
              </div>
              <div className="reporting-card">
                <img src="/assets/images/forresto/ic-baseline-insights.svg" alt="Order Insights" />
                <h3>Order Insights</h3>
                <p>Generate customized reports based on your specific needs.</p>
              </div>
              <div className="reporting-card">
                <img src="/assets/images/forresto/mdi-hand-coin.svg" alt="Reward Program Analysis" />
                <h3>Reward Program Analysis</h3>
                <p>Generate customized reports based on your specific needs.</p>
              </div>
              <div className="reporting-card">
                <img src="/assets/images/forresto/fluent-person-star-20-filled.svg" alt="Customer Behavior Insights" />
                <h3>Customer Behavior Insights</h3>
                <p>Generate customized reports based on your specific needs.</p>
              </div>
              <div className="reporting-card">
                <img src="/assets/images/forresto/bxs-customize.svg" alt="Customizable Reports" />
                <h3>Customizable Reports</h3>
                <p>Generate customized reports based on your specific needs.</p>
              </div>
              <div className="reporting-card">
                <img src="/assets/images/forresto/material-symbols-library-books-rounded.svg" alt="Support and Training" />
                <h3>Support and Training</h3>
                <p>Access detailed nutrition and expiry information to make healthier food decisions.</p>
              </div>
            </div>
          </div>
        </section>
        <section className="faq">
          <div className="container">
            <h2>Frequently Asked Questions</h2>
            <div className="faqs">
              <div className="faq">
                <h3>How do I register my restaurant on Savery?</h3>
              </div>
              <div className="faq">
                <h3>How can I update my menu or promotions?</h3>
              </div>
              <div className="faq">
                <h3>Can I customize my restaurant profile on the platform?</h3>
              </div>
              <div className="faq">
                <h3>What support and resources are available to restaurants?</h3>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="footer">
        <div className="container">
          <div className="footer-links">
            <div className="footer-link">
              <h4>Useful Link</h4>
              <ul>
                <li>Faq</li>
                <li>Privacy Policy</li>
                <li>Terms &amp; Condition</li>
              </ul>
            </div>
            <div className="footer-link">
              <h4>Information</h4>
              <ul>
                <li>Find Restaurants</li>
                <li>Rewards Program</li>
                <li>About Us</li>
                <li>For Restaurants</li>
              </ul>
            </div>
            <div className="footer-link">
              <h4>Contact Us</h4>
              <ul>
                <li>Email: iniemail@gmail.com</li>
                <li>Phone: 123-456-789</li>
              </ul>
            </div>
            <div className="footer-link">
              <h4>Download Our App</h4>
              <img src="/assets/images/forresto/appstore-1.svg" alt="App Store" />
              <img src="/assets/images/forresto/googleplay-1.png" alt="Google Play" />
            </div>
          </div>
          <div className="footer-bottom">
            <img className="line" src="/assets/images/forresto/line-37.svg" alt="Line" />
            <p>&copy; 2024 Savery, All Rights Reserved</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ForRestaurants;