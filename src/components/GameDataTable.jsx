import React from "react";
// import gameIcon from "../images/icons/game-icon.svg";
import gameIcon from "../images/icon/game-icon.svg";
import superOver2 from "../images/gameImg/superover2.jpg";
import teen41 from "../images/gameImg/teen41.jpg";
import { useNavigate } from "react-router-dom";

const GameDataTable = () => {
  const navigate = useNavigate();
  const data = [
    {
      gamename: "Ball by ball",
      green: true,
      live: true,
      game: true,
      point1: "-",
      point2: "3",
      point3: "-",
      point4: "4",
      point5: "-",
      point6: "-",
    },
    {
      gamename: "Caribbean Premier League - Winner / 29/08/2024 04:30:00 AM",
      green: true,
      live: false,
      game: true,
      point1: "3",
      point2: "3",
      point3: "10.2",
      point4: "4",
      point5: "-",
      point6: "-",
    },
    {
      gamename: "Sussex v Lancashire / 04/09/2024 11:30:00 PM",
      green: false,
      live: false,
      game: true,
      point1: "-",
      point2: "",
      point3: "-",
      point4: "",
      point5: "-",
      point6: "-",
    },
    {
      gamename: "Ball by ball",
      green: false,
      live: true,
      game: false,
      point1: "-",
      point2: "3",
      point3: "-",
      point4: "7",
      point5: "-",
      point6: "-",
    },
    {
      gamename: "New Star Club v Bud Cricket Club / 05/09/2024 08:45:00 AM",
      green: true,
      live: true,
      game: true,
      point1: "2.8",
      point2: "2.84",
      point3: "-",
      point4: "-",
      point5: "1.54",
      point6: "1.55",
    },
    {
      gamename: "INDIA A v INDIA B / 05/09/2024 09:30:00 AM",
      green: true,
      live: true,
      game: true,
      point1: "-",
      point2: "3",
      point3: "-",
      point4: "4",
      point5: "-",
      point6: "-",
    },
    {
      gamename:
        "Perth Scorchers XI v Melbourne Stars XI / 05/09/2024 11:20:00 AM",
      green: true,
      live: true,
      game: true,
      point1: "-",
      point2: "3.15",
      point3: "3.2",
      point4: "-",
      point5: "-",
      point6: "-",
    },
    {
      gamename: "BIndia T10 v Australia T10 / 05/09/2024 11:40:00 AM",
      green: true,
      live: true,
      game: true,
      point1: "1,57",
      point2: "-",
      point3: "-",
      point4: "4",
      point5: "-",
      point6: "-",
    },
    {
      gamename: "SLZ XI v BT XI / 05/09/2024 12:00:00 PM",
      green: true,
      live: true,
      game: true,
      point1: "-",
      point2: "3",
      point3: "-",
      point4: "7.6",
      point5: "7.8",
      point6: "-",
    },
    {
      gamename: "INDIA C v INDIA D / 05/09/2024 09:30:00 AM",
      green: true,
      live: true,
      game: true,
      point1: "14.5",
      point2: "15",
      point3: "-",
      point4: "-",
      point5: "1.07",
      point6: "1.08",
    },
    {
      gamename:
        "Rajasthan Royals T10 v Sunrisers Hyderabad T10 / 05/09/2024 12:40:00 PM",
      green: true,
      live: true,
      game: true,
      point1: "3.45",
      point2: "-",
      point3: "-",
      point4: "",
      point5: "2.78",
      point6: "-",
    },
    {
      gamename:
        "Gujarat Titans T10 v Kolkata Knight Riders T10 / 05/09/2024 12:50:00 PM",
      green: true,
      live: true,
      game: true,
      point1: "-",
      point2: "-",
      point3: "-",
      point4: "-",
      point5: "-",
      point6: "-",
    },
    {
      gamename: "West Indies T10 v South Africa T10 / 05/09/2024 01:00:00 PM",
      green: true,
      live: true,
      game: true,
      point1: "-",
      point2: "3",
      point3: "-",
      point4: "4",
      point5: "-",
      point6: "-",
    },
    {
      gamename: "Gauhati Town Club v Ankurjyoti Club / 05/09/2024 01:00:00 PM",
      green: true,
      live: true,
      game: true,
      point1: "-",
      point2: "-",
      point3: "-",
      point4: "-",
      point5: "-",
      point6: "-",
    },
    {
      gamename: "Trivandrum Royals v Thrissur Titans / 05/09/2024 02:30:00 PM",
      green: true,
      live: true,
      game: true,
      point1: "-",
      point2: "-",
      point3: "-",
      point4: "-",
      point5: "-",
      point6: "-",
    },
    {
      gamename: "Kashi Rudras v Kanpur Superstars / 05/09/2024 03:30:00 PM",
      green: true,
      live: true,
      game: true,
      point1: "-",
      point2: "-",
      point3: "-",
      point4: "-",
      point5: "-",
      point6: "-",
    },
    {
      gamename: "Alleppey Ripples v Kochi Blue Tigers / 05/09/2024 06:45:00 PM",
      green: true,
      live: true,
      game: true,
      point1: "-",
      point2: "-",
      point3: "-",
      point4: "4",
      point5: "-",
      point6: "-",
    },
    {
      gamename: "Lucknow Falcons v Gorakhpur Lions / 05/09/2024 07:30:00 PM",
      green: true,
      live: true,
      game: true,
      point1: "-",
      point2: "3",
      point3: "-",
      point4: "3.8",
      point5: "-",
      point6: "-",
    },
    {
      gamename: "Northern Raiders v Wellington Wolves / 05/09/2024 09:00:00 PM",
      green: true,
      live: true,
      game: true,
      point1: "2.8",
      point2: "2.08",
      point3: "-",
      point4: "",
      point5: "3.0",
      point6: "5.6",
    },
    {
      gamename: "Northamptonshire v Somerset / 05/09/2024 11:00:00 PM",
      green: true,
      live: true,
      game: true,
      point1: "-",
      point2: "-",
      point3: "-",
      point4: "-",
      point5: "-",
      point6: "-",
    },
    {
      gamename:
        "Stellenbosch Kings v West Coast Blues / 05/09/2024 11:30:00 PM",
      green: true,
      live: true,
      game: true,
      point1: "-",
      point2: "-",
      point3: "-",
      point4: "-",
      point5: "-",
      point6: "-",
    },
    {
      gamename:
        "Antigua and Barbuda Falcons v Trinbago Knight Riders / 06/09/2024 04:30:00 AM",
      green: true,
      live: true,
      game: true,
      point1: "-",
      point2: "-",
      point3: "-",
      point4: "-",
      point5: "-",
      point6: "-",
    },
    {
      gamename: "The Blaze v Central Sparks / 06/09/2024 03:00:00 PM",
      green: true,
      live: true,
      game: true,
      point1: "-",
      point2: "-",
      point3: "-",
      point4: "-",
      point5: "-",
      point6: "-",
    },
    {
      gamename: "England v Sri Lanka / 06/09/2024 03:30:00 PM",
      green: true,
      live: true,
      game: true,
      point1: "-",
      point2: "5.0",
      point3: "-",
      point4: "",
      point5: "-",
      point6: "-",
    },

    {
      gamename: "Meerut Mavericks v Noida Super Kings / 06/09/2024 03:30:00 PM",
      green: true,
      live: true,
      game: true,
      point1: "-",
      point2: "-",
      point3: "-",
      point4: "-",
      point5: "-",
      point6: "-",
    },
    {
      gamename: "Scotland v Australia / 06/09/2024 06:30:00 PM",
      green: true,
      live: true,
      game: true,
      point1: "8.0",
      point2: "9.2",
      point3: "-",
      point4: "",
      point5: "8.0",
      point6: "6.0",
    },
    {
      gamename: "Lucknow Falcons v Kashi Rudras / 06/09/2024 07:30:00 PM",
      green: true,
      live: true,
      game: true,
      point1: "-",
      point2: "-",
      point3: "-",
      point4: "-",
      point5: "-",
      point6: "-",
    },
    {
      gamename: "Warwickshire v Gloucestershire / 06/09/2024 11:30:00 PM",
      green: true,
      live: true,
      game: true,
      point1: "-",
      point2: "-",
      point3: "-",
      point4: "-",
      point5: "-",
      point6: "-",
    },
    {
      gamename:
        "St. Kitts and Nevis Patriots v Barbados Royals / 07/09/2024 04:30:00 AM",
      green: true,
      live: true,
      game: true,
      point1: "2.9",
      point2: "2.0",
      point3: "-",
      point4: "-",
      point5: "6.0",
      point6: "7.0",
    },

    {
      gamename: "Ireland Women v England Women / 07/09/2024 03:30:00 PM",
      green: true,
      live: true,
      game: true,
      point1: "-",
      point2: "-",
      point3: "-",
      point4: "-",
      point5: "-",
      point6: "-",
    },
    {
      gamename: "Afghanistan v New Zealand / 09/09/2024 09:30:00 AM",
      green: true,
      live: true,
      game: true,
      point1: "10.9",
      point2: "10.8",
      point3: "-",
      point4: "-",
      point5: "1.9",
      point6: "1.09",
    },
  ];

  const gamesData = [
    {
      gameImage: require("../images/gameImg/superover2.jpg"),
      gameName: "Super Over 2",
    },
    {
      gameImage: require("../images/gameImg/teen41.jpg"),
      gameName: "teen 41",
    },
    {
      gameImage: require("../images/gameImg/sicbo2.jpg"),
      gameName: "Sicbo 2",
    },
    {
      gameImage: require("../images/gameImg/teen41.jpg"),
      gameName: "teen 41",
    },
    {
      gameImage: require("../images/gameImg/superover2.jpg"),
      gameName: "Super Over 2",
    },

    {
      gameImage: require("../images/gameImg/teen41.jpg"),
      gameName: "teen 41",
    },
    {
      gameImage: require("../images/gameImg/teen41.jpg"),
      gameName: "teen 41",
    },
    {
      gameImage: require("../images/gameImg/teen41.jpg"),
      gameName: "teen 41",
    },
    {
      gameImage: require("../images/gameImg/teen41.jpg"),
      gameName: "teen 41",
    },
    {
      gameImage: require("../images/gameImg/teen41.jpg"),
      gameName: "teen 41",
    },
    {
      gameImage: require("../images/gameImg/teen41.jpg"),
      gameName: "teen 41",
    },
    {
      gameImage: require("../images/gameImg/teen41.jpg"),
      gameName: "teen 41",
    },
    {
      gameImage: require("../images/gameImg/teen41.jpg"),
      gameName: "teen 41",
    },
    {
      gameImage: require("../images/gameImg/teen41.jpg"),
      gameName: "teen 41",
    },
    {
      gameImage: require("../images/gameImg/teen41.jpg"),
      gameName: "teen 41",
    },
    {
      gameImage: require("../images/gameImg/teen41.jpg"),
      gameName: "teen 41",
    },
    {
      gameImage: require("../images/gameImg/teen41.jpg"),
      gameName: "teen 41",
    },
    {
      gameImage: require("../images/gameImg/teen41.jpg"),
      gameName: "teen 41",
    },
    {
      gameImage: require("../images/gameImg/teen41.jpg"),
      gameName: "teen 41",
    },
    {
      gameImage: require("../images/gameImg/teen41.jpg"),
      gameName: "teen 41",
    },
    {
      gameImage: require("../images/gameImg/teen41.jpg"),
      gameName: "teen 41",
    },
  ];
  return (
    <div>
      <div className="original_main_body">
        <div className="head_main">
          <div className="head_left">Game</div>
          <div className="head_right">
            <div>1</div>
            <div>x</div>
            <div>2</div>
          </div>
        </div>

        {data &&
          data?.map((item) => {
            return (
              <div className="headBody">
                <div className="game_left">
                  <div>
                    <h4
                    className="game_name"
                      onClick={() => {
                        navigate("/gamedetails");
                      }}
                    >
                      {item?.gamename}
                    </h4>
                  </div>
                  <div className="game_left_right">
                    <div className="icons_main_div">
                      {item.green ? <div className="green_circle"></div> : ""}
                    </div>
                    <div className="icons_main_div">
                      {item.live ? (
                        <div>
                          <i class="fas fa-tv icon-tv"></i>
                        </div>
                      ) : (
                        ""
                      )}
                    </div>
                    <div className="icons_main_div">
                      {item.game ? (
                        <div>
                          <img
                            src={gameIcon}
                            alt="gameIcon"
                            className="gameIcon"
                          />
                        </div>
                      ) : (
                        ""
                      )}
                    </div>
                  </div>
                </div>
                <div className="game_right">
                  <div className="bg_blue">{item.point1}</div>
                  <div className="bg_pink">{item.point2}</div>
                  <div className="bg_blue">{item.point3}</div>
                  <div className="bg_pink">{item.point4}</div>
                  <div className="bg_blue">{item.point5}</div>
                  <div className="bg_pink">{item.point6}</div>
                </div>
              </div>
            );
          })}

        <div className="game_image_main">
          {gamesData &&
            gamesData?.map((item) => {
              return (
                <div className="single_game_main">
                  <div>
                    <img src={item?.gameImage} alt="" className="game_image" />
                  </div>
                  <h5>{item?.gameName}</h5>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default GameDataTable;
