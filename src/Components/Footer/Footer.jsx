import React from 'react';
import './Footer.css';
import user_icon from '../../assets/user_icon.svg';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer-top-left">
          {/* Değirilecek */}
          {/* <img src={footer_logo} alt="" /> */}
          <p>Güvenli ve hızlı bir şekilde hayallerinizi gerçeğe dönüştürün.</p>
        </div>
        <div className="footer-top-right">
          <div className="footer-email-input">
            <img src={user_icon} alt="" />
            <input type="email" placeholder="Enter your email" />
          </div>
          <div className="footer-subscribe">Subscribe</div>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <p className="footer-bottom-left">
          {' '}
          © 2024 Emir Berk Oncu.All Rights Reserved
        </p>
        <div className="footer-bottom-right">
          <p>Term of Services</p>
          <p>Privacy Policy</p>
          <p>
            <a
              style={{ textDecoration: 'none', color: 'white' }}
              href="#contact"
            >
              Connect with me
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
