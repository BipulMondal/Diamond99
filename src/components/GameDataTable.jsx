import React from "react";

const gameDataTable = () => {
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
                    <h4>{item?.gamename}</h4>
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
      </div>
    </div>
  );
};

export default gameDataTable;
