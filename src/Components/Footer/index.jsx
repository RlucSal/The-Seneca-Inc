import React from "react";
import "./style.css";

const Footer = () => {
  return (
    <div className="footer">
      <footer>
        <div className="align-container">
          <div className="logo-container">
            <img
              src="src\img\logowhite1.png"
              alt="The Seneca Logo"
              className="footer-logo"
            />
          </div>
          <p className="footer-copyright">© The Seneca, Inc.</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
