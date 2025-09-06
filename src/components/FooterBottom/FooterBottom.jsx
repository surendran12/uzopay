import React from "react";
import "./FooterBottom.scss";


const FooterBottom = () => {
  
  return (
    <div className="footer-bottom">
      <div className="footer-bottom-container">
        <p className="copyright">© 2025 UzOPay</p>
        <div className="footer-bottom-links">
          <a href="/terms">Terms of Service</a>
          <span className="divider">|</span>
          <a href="/privacy">Privacy Policy</a>
        </div>
      </div>
    </div>
  );
};

export default FooterBottom;
