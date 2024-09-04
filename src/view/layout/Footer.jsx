import React from "react";
import logo1 from "../../images/ssl.png";
import logo2 from "../../images/18plus.png";

const Footer = () => {
  return (
    <>
      <div className="footer_item">
        <div className="footer_left">
          <div>Terms and Conditions</div>
          <div>Responsible Gaming</div>
        </div>
        <div>24X7 Support</div>
      </div>
      <div>
        <div className="footer_down_left">
          <div className="footer_up">
            <img src={logo1} alt="" />
            <div className="footer_text">
            <h6>100% SAFE</h6>
            <p>Protected connection and encrypted data.</p>
            </div>
          </div>
          <div>
            <img src={logo2} alt="" />
          </div>
        </div>
        <div>
          <div className="footer_buttom">
            Copyright 2024.All Rights Reserved. Powered by DIAMONDEXCH99.
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
