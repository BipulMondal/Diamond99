import React, { useState } from "react";

const GameDetails = () => {
  const [showVideo, setShowVideo] = useState(false);
  const [showPlaceBet, setPlaceBet] = useState(true);

  const openPlaceBet = () => {
    setPlaceBet(true);
  };

  return (
    <div className="game_details_main">
      <div className="game_details_main_left">
        {/* 1st div */}
        <div className="game_details_header black_header">
          <p>Lucknow Falcons v Gorakhpur Lions</p>
          <p>05/09/2024 07:30:00 PM</p>
        </div>
        {/* 2nd div */}
        <div className="game_details_scoreboard">
          <div className="pitch_background">
            <div className="pitch_top">
              <p>LF</p>
              <p>115-9 (18.0)</p>
              <p>GL won the match</p>
            </div>
            <div className="pitch_bottom">
              <p>GL</p>
              <div className="two_run_over">
                <p>54-4 (10.5)</p>
                <div>
                  <p>CRR 48.9 RR</p>
                  <p>48.65</p>
                </div>
              </div>
              <div className="over_ball">
                <div className="circle_blue_ball">1</div>
                <div className="circle_blue_ball">1</div>
                <div className="circle_blue_ball">1lb</div>
                <div className="circle_blue_ball">1</div>
                <div className="circle_blue_ball">1</div>
                <div className="circle_blue_ball">1</div>
              </div>
            </div>
          </div>
        </div>
        {/* 3rd bookmaker div */}
        <div className="book_maker_main">
          <div className="black_header">
            <p>Bookmaker</p>
          </div>
          <div className="bookmaker_body">
            <div className="bookmaker_body_single">
              <div className="bookmaker_body_left">
                <p>Min - 100 </p>
                <p>Max - 1L</p>
              </div>
              <div className="bookmaker_body_right">
                <div className="body_right "></div>
                <div className="body_right "></div>
                <div className="body_right darkblue">Back</div>
                <div className="body_right darkpink">Lay</div>
                <div className="body_right"></div>
                <div className="body_right"></div>
              </div>
            </div>
            <div className="bookmaker_body_single">
              <div className="bookmaker_body_left">
                <p>Lucknow Falcons 620</p>
              </div>
              <div className="bookmaker_body_right">
                <div className="body_right lighterblue">-</div>
                <div className="body_right lightblue">-</div>
                <div className="body_right darkblue">76</div>
                <div className="body_right darkpink">80</div>
                <div className="body_right lightpink">-</div>
                <div className="body_right lighterpink"> -</div>
              </div>
            </div>
            <div className="bookmaker_body_single">
              <div className="bookmaker_body_left">
                <p>Gorakhpur Lions</p>
                <p>-1,000</p>
              </div>
              <div className="bookmaker_body_right">
                <div className="body_right lighterblue">-</div>
                <div className="body_right lightblue">-</div>
                <div className="body_right darkblue">125</div>
                <div className="body_right darkpink">131</div>
                <div className="body_right lightpink">-</div>
                <div className="body_right lighterpink"> -</div>
              </div>
            </div>
          </div>
        </div>

        {/* 4th normal div */}
        <div className="black_header">
          <p>Normal</p>
        </div>
        <div className="normal_main_body">
          <div className="normal_main_left">
            <div className="normal_maker_main">
              <div className="normal_body">
                <div className="normal_body_single">
                  <div className="normal_body_left">
                    <p></p>
                  </div>
                  <div className="normal_body_right">
                    <div className="body_right darkblue">No</div>
                    <div className="body_right darkpink">Yes</div>
                    <div className="body_right"></div>
                  </div>
                </div>

                <div className="normal_body_single">
                  <div className="bookmaker_body_left">
                    <p>15 over run GL</p>
                  </div>
                  <div className="bookmaker_body_right">
                    <div className="body_right darkblue" onClick={openPlaceBet}>
                      76
                    </div>
                    <div className="body_right darkpink" onClick={openPlaceBet}>
                      80
                    </div>
                    <div className="body_right min_max_bet">
                      <p>Min 100</p>
                      <p>Max 2L</p>
                    </div>
                  </div>
                </div>
                <div className="normal_body_single">
                  <div className="bookmaker_body_left">
                    <p>11 over run GL</p>
                  </div>
                  <div className="bookmaker_body_right">
                    <div className="body_right darkblue" onClick={openPlaceBet}>
                      125
                    </div>
                    <div className="body_right darkpink" onClick={openPlaceBet}>
                      131
                    </div>
                    <div className="body_right min_max_bet">
                      <p>Min 100</p>
                      <p>Max 2L</p>
                    </div>
                  </div>
                </div>

                <div className="normal_body_single">
                  <div className="bookmaker_body_left">
                    <p>12 over run GL</p>
                  </div>
                  <div className="bookmaker_body_right">
                    <div className="body_right darkblue" onClick={openPlaceBet}>
                      125
                    </div>
                    <div className="body_right darkpink" onClick={openPlaceBet}>
                      131
                    </div>
                    <div className="body_right min_max_bet">
                      <p>Min 100</p>
                      <p>Max 2L</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="normal_main_right">
            <div className="book_maker_main">
              <div className="bookmaker_body">
                <div className="normal_body_single">
                  <div className="normal_body_left">
                    <p></p>
                  </div>
                  <div className="normal_body_right">
                    <div className="body_right darkblue">No</div>
                    <div className="body_right darkpink">Yes</div>
                    <div className="body_right"></div>
                  </div>
                </div>
                <div className="normal_body_single">
                  <div className="bookmaker_body_left">
                    <p>Lucknow Falcons</p>
                    <p>620</p>
                  </div>
                  <div className="bookmaker_body_right">
                    <div className="body_right darkblue">76</div>
                    <div className="body_right darkpink">80</div>
                    <div className="body_right min_max_bet">
                      <p>Min 100</p>
                      <p>Max 2L</p>
                    </div>
                  </div>
                </div>
                <div className="normal_body_single">
                  <div className="">
                    <p>Gorakhpur Lions</p>
                    <p>-1,000</p>
                  </div>
                  <div className="bookmaker_body_right">
                    <div className="body_right darkblue">125</div>
                    <div className="body_right darkpink">131</div>
                    <div className="body_right min_max_bet">
                      <p>Min 100</p>
                      <p>Max 2L</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="black_header">
          <p>Over BY Over</p>
        </div>
        <div className="over_body_main">
          <div className="over_body_single">
            <div className="over_body_left">
              <p></p>
            </div>
            <div className="over_body_right">
              <div className="body_right darkblue">No</div>
              <div className="body_right darkpink">Yes</div>
              <div className="body_right"></div>
            </div>
          </div>

          <div className="over_body_single">
            <div className="over_body_left">
              <p>only 9 over</p>
            </div>
            <div className="over_body_right">
              <div className="body_right darkblue">125</div>
              <div className="body_right darkpink">131</div>
              <div className="body_right min_max_bet">
                <p>Min 100</p>
                <p>Max 2L</p>
              </div>
            </div>
          </div>
        </div>
        <div className="black_header">
          <p>Odd even</p>
        </div>

        <div className="normal_main_body">
          <div className="normal_main_left">
            <div className="normal_maker_main">
              <div className="normal_body">
                <div className="normal_body_single">
                  <div className="bookmaker_body_left">
                    <p>15 over run GL</p>
                  </div>
                  <div className="bookmaker_body_right">
                    <div className="body_right darkblue" onClick={openPlaceBet}>
                      76
                    </div>
                    <div className="body_right darkblue" onClick={openPlaceBet}>
                      80
                    </div>
                    <div className="body_right min_max_bet">
                      <p>Min 100</p>
                      <p>Max 2L</p>
                    </div>
                  </div>
                </div>
                <div className="normal_body_single">
                  <div className="bookmaker_body_left">
                    <p>11 over run GL</p>
                  </div>
                  <div className="bookmaker_body_right">
                    <div className="body_right darkblue" onClick={openPlaceBet}>
                      125
                    </div>
                    <div className="body_right darkblue" onClick={openPlaceBet}>
                      131
                    </div>
                    <div className="body_right min_max_bet">
                      <p>Min 100</p>
                      <p>Max 2L</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="normal_main_right">
            <div className="book_maker_main">
              <div className="bookmaker_body">
                <div className="normal_body_single">
                  <div className="bookmaker_body_left">
                    <p>Lucknow Falcons</p>
                    <p>620</p>
                  </div>
                  <div className="bookmaker_body_right">
                    <div className="body_right darkblue">76</div>
                    <div className="body_right darkblue">80</div>
                    <div className="body_right min_max_bet">
                      <p>Min 100</p>
                      <p>Max 2L</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="black_header">
          <p>2Nd ii nn</p>
        </div>
        <div className="four_body">
          <div className="four_body_single">
            <div className="four_body_left">
              <p>Lucknow Falcons</p>
              <p>620</p>
            </div>
            <div className="four_body_right">
              <div className="body_right darkblue">76</div>
            </div>
          </div>
          <div className="four_body_single">
            <div className="four_body_left">
              <p>Lucknow Falcons</p>
              <p>620</p>
            </div>
            <div className="four_body_right">
              <div className="body_right darkblue">76</div>
            </div>
          </div>
          <div className="four_body_single">
            <div className="four_body_left">
              <p>Lucknow Falcons</p>
              <p>620</p>
            </div>
            <div className="four_body_right">
              <div className="body_right darkblue">76</div>
            </div>
          </div>
          <div className="four_body_single">
            <div className="four_body_left">
              <p>Lucknow Falcons</p>
              <p>620</p>
            </div>
            <div className="four_body_right">
              <div className="body_right darkblue">76</div>
            </div>
          </div>
          <div className="four_body_single">
            <div className="four_body_left">
              <p>Lucknow Falcons</p>
              <p>620</p>
            </div>
            <div className="four_body_right">
              <div className="body_right darkblue">76</div>
            </div>
          </div>
          <div className="four_body_single">
            <div className="four_body_left">
              <p>Lucknow Falcons</p>
              <p>620</p>
            </div>
            <div className="four_body_right">
              <div className="body_right darkblue">80</div>
            </div>
          </div>
          <div className="four_body_single">
            <div className="four_body_left">
              <p>Lucknow Falcons</p>
              <p>620</p>
            </div>
            <div className="four_body_right">
              <div className="body_right darkblue">80</div>
            </div>
          </div>
        </div>
      </div>

      {/* total right section */}
      <div className="game_details_main_right">
        <div className="mive_match_main">
          <div
            className="black_header live_match"
            onClick={() => setShowVideo(!showVideo)}
          >
            Live Match
          </div>
          {showVideo && (
            <div>
              <iframe
                width="336"
                height="315"
                src="https://www.youtube.com/embed/tmg6d3T_T6Q"
                title="DiamondEXCH99"
              ></iframe>
            </div>
          )}
        </div>
        {showPlaceBet && (
          <div className="place_bet_main">
            <div className="black_header place_bet">Place Bet</div>
            <div className="place_bet_body">
              <div className="place_bet_head">
                <div className="place_header">
                  <p>(Bet for)</p>
                  <p>Odds</p>
                </div>
                <div className="place_header">
                  <p>Stake</p>
                  <p>Profit</p>
                </div>
              </div>
            </div>
          </div>
        )}
        <div className="mybet_main">
          <div className="black_header mybet">My Bet</div>
          <div className="mybet_bluediv">
            <div className="mybet_bluediv_up">
              <div>
                <p>10 over Fun FL</p>
                <p>-90</p>
              </div>
              <div class="placebet_input_main">
                <div>
                  <input
                    type="number"
                    class="placebet_input"
                    id="exampleFormControlInput1"
                  />
                  <div class="spinner-buttons input-group-btn btn-group-vertical">
                    <button class=" up_arow">
                      <i class="fa fa-angle-up"></i>
                    </button>
                    <button class=" up_arow">
                      <i class="fa fa-angle-down"></i>
                    </button>
                  </div>
                </div>
                <input
                  type="number"
                  class="placebet_input"
                  id="exampleFormControlInput1"
                />
              </div>

              <div>
                <p>0</p>
              </div>
            </div>
            <div className="place_button">
              <button className="btn btn-light">1k</button>
              <button className="btn btn-light">1k</button>
              <button className="btn btn-light">1k</button>
              <button className="btn btn-light">1k</button>
              <button className="btn btn-light">1k</button>
              <button className="btn btn-light">1k</button>
              <button className="btn btn-light">1k</button>
              <button className="btn btn-light">1k</button>
              <button className="btn btn-light">1k</button>
              <button className="btn btn-light">1k</button>
            </div>

            <div className="mybet_bluediv_buttom">
              <div>
                <button type="button" class="btn btn-info">
                  Edit
                </button>
              </div>
              <div>
                <button type="button" class="btn btn-danger">
                  Reset
                </button>
                <button type="button" class="btn btn-success">
                  Submit
                </button>
              </div>
            </div>
          </div>
          <div className="black_header mybet">My Bet</div>
        </div>
      </div>
    </div>
  );
};

export default GameDetails;
