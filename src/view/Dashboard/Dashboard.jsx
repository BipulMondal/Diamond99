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
          <h4>% usa president icon</h4>
        </div>
        <div className="container_1">
          <h4>% usa president icon</h4>
        </div>
        <div className="container_1">
          <h4>% usa president icon</h4>
        </div>
        <div className="container_1">
          <h4>% usa president icon</h4>
        </div>
      </div>
      <div className="home_second_container">
        <ul className="nav nav-pills">
          <li className="nav-item">
            <p
              className={`nav-link ${
                activeTab === "Active" ? "active-tab" : ""
              }`}
              to="#"
              onClick={() => handleTabClick("Active")}
            >
              Active
            </p>
          </li>
          <li className="nav-item">
            <p
              className={`nav-link ${
                activeTab === "Link1" ? "active-tab" : ""
              }`}
              to="#"
              onClick={() => handleTabClick("Link1")}
            >
              Link
            </p>
          </li>
          <li className="nav-item">
            <p
              className={`nav-link ${
                activeTab === "Link2" ? "active-tab" : ""
              }`}
              to="#"
              onClick={() => handleTabClick("Link2")}
            >
              Link
            </p>
          </li>
          <li className="nav-item">
            <p
              className={`nav-link ${
                activeTab === "Disabled" ? "active-tab" : ""
              }`}
              to="#"
              tabIndex="-1"
              aria-disabled="true"
              onClick={() => handleTabClick("Disabled")}
            >
              Disabled
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
