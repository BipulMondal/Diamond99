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
          <h6 className="container_1_text"><i class="d-icon me-1 icon-40"></i>USA - Presidential Election 2024</h6>
        </div>
        <div className="container_1">
          <h6 className="container_1_text">Caribbean Premier League - Winner</h6>
        </div>
        <div className="container_1">
          <h6 className="container_1_text">Portugal v Croatia</h6>
        </div>
        <div className="container_1">
          <h6 className="container_1_text">Serbia v Spain</h6>
        </div>
      </div>
      <div className="home_second_container">
        <ul className="nav nav-pills">
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
              Tennis
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
