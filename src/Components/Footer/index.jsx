import React from "react";
import "./style.css";
import logowhite1 from "../../img/logowhite1.png"; // Correct relative path

const Footer = () => {
  return (
    <div className="footer">
      <footer>
        <div className="align-container">
          <div className="logo-container">
            <img
              src={logowhite1}
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
