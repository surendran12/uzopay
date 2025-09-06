import React from "react";
import { FaFacebookF, FaXTwitter, FaInstagram } from "react-icons/fa6";
import "./FooterSection.scss";

const FooterSection = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Left Section */}
        <div className="footer-about">
          <h2 className="footer-logo">UzOPay</h2>
          <p>
            Our payment gateway simplifies transactions for e-commerce
            businesses, delivering fast and secure processing. With smooth
            integration, we enhance your store's payment capabilities. Optimize
            your checkout process and boost customer satisfaction easily.
          </p>
          <div className="footer-socials">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaXTwitter /></a>
            <a href="#"><FaInstagram /></a>
          </div>
        </div>

        {/* Middle Sections */}
        <div className="footer-links">
          <div className="footer-column">
            <h4>Payment</h4>
            <ul>
              <li><a href="#">Payment Gateway</a></li>
              <li><a href="#">Payment Links</a></li>
              <li><a href="#">Payment Methods</a></li>
              <li><a href="#">Bulk Payment</a></li>
              <li><a href="#">Invoice</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>AI Banking</h4>
            <ul>
              <li><a href="#">Current Account</a></li>
              <li><a href="#">Accounting</a></li>
              <li><a href="#">API Banking</a></li>
              <li><a href="#">UPI Autopay</a></li>
              <li><a href="#">Tax Payment</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>Cards</h4>
            <ul>
              <li><a href="#">CMS</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>Company</h4>
            <ul>
              <li><a href="#">About us</a></li>
              <li><a href="#">Contact us</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
