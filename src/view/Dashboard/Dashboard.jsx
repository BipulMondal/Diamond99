import React, { useState } from "react";

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
            <a
              className={`nav-link ${activeTab === "Active" ? "active-tab" : ""}`}
              href="#"
              onClick={() => handleTabClick("Active")}
            >
              Active
            </a>
          </li>
          <li className="nav-item">
            <a
              className={`nav-link ${activeTab === "Link1" ? "active-tab" : ""}`}
              href="#"
              onClick={() => handleTabClick("Link1")}
            >
              Link
            </a>
          </li>
          <li className="nav-item">
            <a
              className={`nav-link ${activeTab === "Link2" ? "active-tab" : ""}`}
              href="#"
              onClick={() => handleTabClick("Link2")}
            >
              Link
            </a>
          </li>
          <li className="nav-item">
            <a
              className={`nav-link ${activeTab === "Disabled" ? "active-tab" : ""}`}
              href="#"
              tabIndex="-1"
              aria-disabled="true"
              onClick={() => handleTabClick("Disabled")}
            >
              Disabled
            </a>
          </li>
        </ul>
      </div>
      <div className="home_body">
        
      </div>
    </div>
  );
};

export default Dashboard;
