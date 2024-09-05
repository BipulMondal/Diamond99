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
          <div className="header_search_icon">
            <i class="fa fa-search-plus" aria-hidden="true"></i>
          </div>
          <div className="header_text1">Rules</div>
          <div className="header_text2">
            <h6>Blance:1500</h6>
            <h6>Exp:0</h6>
          </div>
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
          <li className="bold">HOME</li>
          <li className="bold">LOTTERY</li>
          <li className="bold">CRICKET</li>
          <li className="bold">FOOTBALL</li>
          <li className="bold">TENNIS</li>
        </ul>
      </div>
    </>
  );
};

export default Header;
