import React from 'react';
import {connect} from 'react-redux';


export function OpponentStats(props) {
    return (
      <div className="opponentStats">
        <div className="soldierdiv">
          <img src="../public/images/soldier_squad.jpg" alt="soldier_squad" />
          <div className="soldierX"></div>
        </div>
        <div className="hummerdiv">
          <img src="../public/images/hummer.jpg" alt="hummer" />
          <div className="hummerX"></div>
        </div>
        <div className="transportdiv">
          <img src="../public/images/transport.jpg" alt="transport" />
          <div className="transportX"></div>
        </div>
        <div className="tanksmalldiv">
          <img src="../public/images/tanksmall.jpg" alt="tanksmall" />
          <div className="tanksmallX"></div>
        </div>
        <div className="tanklargediv">
          <img src="../public/images/tanklarge.jpg" alt="tanklarge" />
          <div className="tanklargeX"></div>
        </div>

      </div>
    );
}

export default connect()(OpponentStats);
