import React from "react";
import logo from "../../images/logo.png";
import { useNavigate } from "react-router-dom";
const Header = () => {
  const navigate = useNavigate();
  return (
    <>
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
          <div>
            <i class="fa fa-search-plus" aria-hidden="true"></i>
          </div>
          <div>Rules</div>
          <div>Blance:1500</div>
          <div>
            <select class="form-control" id="exampleFormControlSelect1">
              <option selected>Demo</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
        </div>
      </div>
      <div className="header_list">
        <ul>
          <li>HOME</li>
          <li>LOTTERY</li>
          <li>CRICKET</li>
          <li>FOOTBALL</li>
          <li>TENNIS</li>
        </ul>
      </div>
    </>
  );
};

export default Header;
