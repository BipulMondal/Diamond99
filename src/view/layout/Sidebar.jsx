import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const [openSection, setOpenSection] = useState(null);

  const handleToggle = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <div className="sidebar_main">
      <div>
        <div className="panel panel-default metismenu vertical-nav-menu">
          <div
            className="panel-heading metismenu-container"
            role="tab"
            id="headingOne"
          >
            <div className="panel-title metismenu-item">
              <a
                className="metismenu-link"
                role="button"
                onClick={() => handleToggle("cricket")}
                aria-expanded={openSection === "cricket"}
                aria-controls="collapseSixtt"
              >
                Cricket
              </a>
            </div>
          </div>
          <div
            id="collapseSixtt"
            className={`panel-collapse collapse ${
              openSection === "cricket" ? "show" : ""
            }`}
            role="tabpanel"
            aria-labelledby="headingOne"
          >
            <div className="panel-body">
              <ul className="metismenu-dropdown-container">
                <li className="metismenu-item">
                  <NavLink
                    to="/manageAdditionalStuff"
                    className="metismenu-link_baby"
                  >
                    cricket result 
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="panel panel-default metismenu vertical-nav-menu">
          <div
            className="panel-heading metismenu-container"
            role="tab"
            id="headingOne"
          >
            <div className="panel-title metismenu-item">
              <a
                className="metismenu-link"
                role="button"
                onClick={() => handleToggle("football")}
                aria-expanded={openSection === "football"}
                aria-controls="collapseSixtt"
              >
              Football
              </a>
            </div>
          </div>
          <div
            id="collapseSixtt"
            className={`panel-collapse collapse ${
              openSection === "football" ? "show" : ""
            }`}
            role="tabpanel"
            aria-labelledby="headingOne"
          >
            <div className="panel-body">
              <ul className="metismenu-dropdown-container">
                <li className="metismenu-item">
                  <NavLink
                    to="/manageAdditionalStuff"
                    className="metismenu-link_baby"
                  >
                   football result
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="panel panel-default metismenu vertical-nav-menu">
          <div
            className="panel-heading metismenu-container"
            role="tab"
            id="headingOne"
          >
            <div className="panel-title metismenu-item">
              <a
                className="metismenu-link"
                role="button"
                onClick={() => handleToggle("Tennis")}
                aria-expanded={openSection === "Tennis"}
                aria-controls="collapseSixtt"
              >
                Tennis
              </a>
            </div>
          </div>
          <div
            id="collapseSixtt"
            className={`panel-collapse collapse ${
              openSection === "Tennis" ? "show" : ""
            }`}
            role="tabpanel"
            aria-labelledby="headingOne"
          >
            <div className="panel-body">
              <ul className="metismenu-dropdown-container">
                <li className="metismenu-item">
                  <NavLink
                    to="/manageAdditionalStuff"
                    className="metismenu-link_baby"
                  >
                   tennis result1
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Add more sections as needed */}
      </div>
    </div>
  );
};

export default Sidebar;
