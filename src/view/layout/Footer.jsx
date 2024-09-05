import React from "react";
import logo1 from "../../images/ssl.png";
import logo2 from "../../images/18plus.png";
import logo3 from "../../images/gamecare.png";
import logo4 from "../../images/gt.png";

const Footer = () => {
  return (
    <>
      <div className="footer_item">
        <div className="footer_left">
          <p>Terms and Conditions</p>
          <p> Responsible Gaming</p>
        </div>
        <div className="footer_left_2"><p>24X7 Support</p></div>
      </div>
      <div>
        <div className="footer_down_left">
          <div className="footer_up">
            <img src={logo1} alt="" />
            <div className="footer_text">
            <p className="text_bold">100% SAFE</p>
            <p>Protected connection and encrypted data.</p>
            </div>
          </div>
          <div>
            <img src={logo2} alt="" className="footer_logo"/>
            <img src={logo3} alt="" className="footer_logo"/>
            <img src={logo4} alt="" className="footer_logo"/>
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
