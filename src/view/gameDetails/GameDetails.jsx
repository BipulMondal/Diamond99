import React from "react";

const GameDetails = () => {
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
        {/* 3rd div */}
        <div className="book_maker_main">
          <div className="black_header">
            <p>Bookmaker</p>
          </div>
          <div className="bookmaker_body">
            <div className="bookmark_body_single">
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
            <div className="bookmark_body_single">
              <div className="bookmaker_body_left">
                <p>Lucknow Falcons</p>
                <p>620</p>
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
            <div className="bookmark_body_single">
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

        {/* 4th div */}
        <div className="normal_main_body">
          <div className="normal_main_left">
            <div className="normal_maker_main">
              <div className="black_header">
                <p>Normal</p>
              </div>
              <div className="normal_body">
                <div className="normal_body_single">
                  <div className="normal_body_left">
                    <p>---</p>
                  </div>
                  <div className="normal_body_right">
                    <div className="body_right darkblue">No</div>
                    <div className="body_right darkpink">Yes</div>
                    <div className="body_right">-----</div>
                  </div>
                </div>

                <div className="bookmark_body_single">
                  <div className="bookmaker_body_left">
                    <p>15 over run GL</p>
                    
                  </div>
                  <div className="bookmaker_body_right">
                    <div className="body_right darkblue">76</div>
                    <div className="body_right darkpink">80</div>
                    <div className="body_right lightpink">-</div>
                  </div>
                </div>
                <div className="bookmark_body_single">
                  <div className="bookmaker_body_left">
                    <p>11 over run GL</p>
                    
                  </div>
                  <div className="bookmaker_body_right">
                    <div className="body_right darkblue">125</div>
                    <div className="body_right darkpink">131</div>
                    <div className="body_right lightpink">-</div>
                  </div>
                </div>

                
                <div className="bookmark_body_single">
                  <div className="bookmaker_body_left">
                    <p>12 over run GL</p>
                    
                  </div>
                  <div className="bookmaker_body_right">
                    <div className="body_right darkblue">125</div>
                    <div className="body_right darkpink">131</div>
                    <div className="body_right lightpink">-</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="normal_main_right">
            <div className="book_maker_main">
              <div className="black_header">
                <p></p>
              </div>
              <div className="bookmaker_body">
                <div className="bookmark_body_single">
                  <div className="">
                    <p>Min - 100 </p>
                    <p>Max - 1L</p>
                  </div>
                  <div className="bookmaker_body_right">
                  
                    <div className="body_right darkblue">Back</div>
                    <div className="body_right darkpink">Lay</div>
                    <div className="body_right"></div>
                    
                  </div>
                </div>
                <div className="bookmark_body_single">
                  <div className="bookmaker_body_left">
                    <p>Lucknow Falcons</p>
                    <p>620</p>
                  </div>
                  <div className="bookmaker_body_right">
                    
                    <div className="body_right darkblue">76</div>
                    <div className="body_right darkpink">80</div>
                    <div className="body_right lightpink">-</div>
                    
                  </div>
                </div>
                <div className="bookmark_body_single">
                  <div className="">
                    <p>Gorakhpur Lions</p>
                    <p>-1,000</p>
                  </div>
                  <div className="bookmaker_body_right">
                    
                    <div className="body_right darkblue">125</div>
                    <div className="body_right darkpink">131</div>
                    <div className="body_right lightpink">-</div>
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="game_details_main_right"></div>
    </div>
  );
};

export default GameDetails;
