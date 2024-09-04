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
                onClick={() => handleToggle("productStuff")}
                aria-expanded={openSection === "productStuff"}
                aria-controls="collapseSixtt"
              >
                Product Stuff
              </a>
            </div>
          </div>
          <div
            id="collapseSixtt"
            className={`panel-collapse collapse ${
              openSection === "productStuff" ? "show" : ""
            }`}
            role="tabpanel"
            aria-labelledby="headingOne"
          >
            <div className="panel-body">
              <ul className="metismenu-dropdown-container">
                <li className="metismenu-item">
                  <NavLink
                    to="/manageAdditionalStuff"
                    className="metismenu-link"
                  >
                    Add Manage Stuff
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
