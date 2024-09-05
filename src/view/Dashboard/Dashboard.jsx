import React, { useState } from "react";
import { Link } from "react-router-dom";
import GameDataTable from "../../components/GameDataTable";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("");

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <div className="home_container">
      <div className="home_top_container">
        <div className="container_1">
          <h6 className="container_1_text">% usa president icon</h6>
        </div>
        <div className="container_1">
          <h6 className="container_1_text">% usa president icon</h6>
        </div>
        <div className="container_1">
          <h6 className="container_1_text">% usa president icon</h6>
        </div>
        <div className="container_1">
          <h6 className="container_1_text">% usa president icon</h6>
        </div>
      </div>
      <div className="home_second_container">
        <ul className="nav nav-pills">
          <li className="nav-item">
            <p
              className={`nav-link ${
                activeTab === "Active" ? "active-tab" : ""
              }`}
              onClick={() => handleTabClick("Active")}
            >
              Politics
            </p>
          </li>
          <li className="nav-item">
            <p
              className={`nav-link ${
                activeTab === "Link1" ? "active-tab" : ""
              }`}
              onClick={() => handleTabClick("Link1")}
            >
              Cricket
            </p>
          </li>
          <li className="nav-item">
            <p
              className={`nav-link ${
                activeTab === "Link2" ? "active-tab" : ""
              }`}
              onClick={() => handleTabClick("Link2")}
            >
              Football
            </p>
          </li>
          
          <li className="nav-item">
            <p
              className={`nav-link ${
                activeTab === "Disabled" ? "active-tab" : ""
              }`}
              tabIndex="-1"
              aria-disabled="true"
              onClick={() => handleTabClick("Disabled")}
            >
              Esoccer
            </p>
          </li>

          <li className="nav-item">
            <p
              className={`nav-link ${
                activeTab === "Disabled" ? "active-tab" : ""
              }`}
              tabIndex="-1"
              aria-disabled="true"
              onClick={() => handleTabClick("Disabled")}
            >
              Tennis
            </p>
          </li>

          <li className="nav-item">
            <p
              className={`nav-link ${
                activeTab === "Disabled" ? "active-tab" : ""
              }`}
              tabIndex="-1"
              aria-disabled="true"
              onClick={() => handleTabClick("Disabled")}
            >
              Horse Racing
            </p>
          </li>

          <li className="nav-item">
            <p
              className={`nav-link ${
                activeTab === "Disabled" ? "active-tab" : ""
              }`}
              tabIndex="-1"
              aria-disabled="true"
              onClick={() => handleTabClick("Disabled")}
            >
              Greyhound Racing
            </p>
          </li>

          <li className="nav-item">
            <p
              className={`nav-link ${
                activeTab === "Disabled" ? "active-tab" : ""
              }`}
              tabIndex="-1"
              aria-disabled="true"
              onClick={() => handleTabClick("Disabled")}
            >
              Table Tennis
            </p>
          </li>

          <li className="nav-item">
            <p
              className={`nav-link ${
                activeTab === "Disabled" ? "active-tab" : ""
              }`}
              tabIndex="-1"
              aria-disabled="true"
              onClick={() => handleTabClick("Disabled")}
            >
            Basketball
            </p>
          </li>

          <li className="nav-item">
            <p
              className={`nav-link ${
                activeTab === "Disabled" ? "active-tab" : ""
              }`}
              tabIndex="-1"
              aria-disabled="true"
              onClick={() => handleTabClick("Disabled")}
            >
              Boxing
            </p>
          </li>

        </ul>
      </div>
      <div className="home_body">
        <GameDataTable />
      </div>
    </div>
  );
};

export default Dashboard;
