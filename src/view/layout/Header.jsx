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
          <div>
            <a
              class="demo ms-3 d-none d-xl-block dropdown-toggle"
              id="react-aria3807262034-2"
              aria-expanded="false"
            >
              Demo<i class="fas fa-chevron-down ms-1"></i>
            </a>

            <ul
                x-placement="bottom-end"
                aria-labelledby="react-aria3807262034-6"
                class="dropdown-menu"
                data-popper-reference-hidden="false"
                data-popper-escaped="false"
                data-popper-placement="bottom-end"
              style={{
                position: "absolute",
                inset: "0px 0px auto auto",
                transform: "translate(0px, 21px)",
              }}
            >
              <li className="dropdown-item">
                <a href="/account-statement">Account Statement</a>
              </li>
              <li className="dropdown-item">
                <a href="/current-bet">Current Bet</a>
              </li>
              <li className="dropdown-item">
                <a href="/casino-results">Casino Results</a>
              </li>
              <li className="dropdown-item">
                <a href="#">Set Button Values</a>
              </li>
              <li className="dropdown-item d-xl-none">
                <a href="#">Rules</a>
              </li>
              <li className="dropdown-item d-xl-none">
                Balance
                <div className="form-check float-end">
                  <input className="form-check-input" type="checkbox" checked />
                </div>
              </li>
              <li className="dropdown-item d-xl-none">
                Exposure
                <div className="form-check float-end">
                  <input className="form-check-input" type="checkbox" checked />
                </div>
              </li>
              <hr className="dropdown-divider" role="separator" />
              <li className="dropdown-item">
                <a href="#">Sign Out</a>
              </li>
            </ul>
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
