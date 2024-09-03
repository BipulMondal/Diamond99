import React from "react";
import logo from "../../images/logo.png";
import { useNavigate } from "react-router-dom";
const Header = () => {
  const navigate = useNavigate();
  return (
    <div className="header_main">
      <div className="header_left">
        <div>
          <img
            className="header_logo"
            src={logo}
            alt="logo"
            onClick={() => {
              navigate("/");
            }}
          />
        </div>
      </div>
      <div className="herder_right">
        <div class="dropdown">
          <p class="dropbtn">SUMT</p>
          <div class="dropdown-content">
            <p>Change Password</p>
            <p>Security Auth</p>
            <p
              onClick={() => {
                localStorage.clear();
                window.location.reload();
              }}
            >
              logout
            </p>
          </div>
        </div>
        <button type="button" class="btn btn-light">
          All Client
        </button>
      </div>
    </div>
  );
};

export default Header;
