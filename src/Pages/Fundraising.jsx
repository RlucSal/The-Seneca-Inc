import React from "react";
import "../App.css";
import qrCode from "../img/qrCode.svg";


const Fundraising = () => {
  return (
    <div>
      <div className="fund-container">
        <div className="fund-image"></div>
        <div className="image-text4">
          <h1>FUNDRAISING</h1>
        </div>
      </div>
      <div className="why-found">
        <h3>The Seneca Capital Campaign</h3>
        <p>
          The Seneca Capital Campaign is run separately from our general fund...
        </p>
        <p>
          Donations can also be used to provide financial aid to members...
        </p>
      </div>
      <div className="fundraising-grid">
        <div className="donorbox-container">
          <iframe
            src="https://donorbox.org/embed/the-seneca-capital-campaign?language=en"
            name="donorbox"
            id="donorbox"
            allow="payment"
            allowpaymentrequest="allowpaymentrequest"
            seamless="seamless"
            style={{
              height: "525px",
              width: "100%",
              maxWidth: "400px",
            }}
          ></iframe>
        </div>
        <div className="qr-code-container">
          <img
            src={qrCode}
            alt="QR Code for the campaign"
            className="qr-code"
          />
          <a
            href="https://donorbox.org/the-seneca-capital-campaign"
            target="_blank"
            rel="noopener noreferrer"
            className="campaign-link"
          >
            Visit Campaign Page
          </a>
        </div>
      </div>
    </div>
  );
};

export default Fundraising;
