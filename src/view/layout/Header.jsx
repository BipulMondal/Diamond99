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
            <p className="header_blnc">Blance:1500</p>
            <p className="header_blnc">Exp:0</p>
          </div>
          <div class="dropdown ms-3">
            <a
              class="demo d-xl-block"
              id="dropdownMenuButton"
              href="#"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Demo
              <i class="fas fa-chevron-down ms-1"></i>
            </a>

            <ul
              class="dropdown-menu own_dropdown"
              aria-labelledby="dropdownMenuButton"
            >
              <li class="dropdown-item">
                <a href="/accountstatement">Account Statement</a>
              </li>
              <li class="dropdown-item">
                <a href="#">Current Bet</a>
              </li>
              <li class="dropdown-item">
                <a href="#">Casino Results</a>
              </li>
              <li class="dropdown-item">
                <a href="#">Set Button Values</a>
              </li>
              <li class="dropdown-item d-xl-none">
                <a href="#">Rules</a>
              </li>
              <li class="dropdown-item d-xl-none">
                Balance
                <div class="form-check float-end">
                  <input class="form-check-input" type="checkbox" checked />
                </div>
              </li>
              <li class="dropdown-item d-xl-none">
                Exposure
                <div class="form-check float-end">
                  <input class="form-check-input" type="checkbox" checked />
                </div>
              </li>
              <hr class="dropdown-divider" role="separator" />
              <li
                class="dropdown-item"
                onClick={() => {
                  localStorage.clear();
                  window.location.reload();
                }}
              >
                Sign Out
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="header_list">
        <ul>
          <li
            className="bold"
            onClick={() => {
              navigate("/");
            }}
          >
            HOME
          </li>
          <li className="bold">LOTTERY</li>
          <li
            className="bold"
            onClick={() => {
              navigate("/gamedetails");
            }}
          >
            CRICKET
          </li>
          <li
            className="bold"
            onClick={() => {
              navigate("/gamedetails");
            }}
          >
            FOOTBALL
          </li>
          <li
            className="bold"
            onClick={() => {
              navigate("/gamedetails");
            }}
          >
            TENNIS
          </li>
        </ul>
      </div>
    </>
  );
};

export default Header;
