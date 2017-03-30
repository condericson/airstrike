import React from 'react';
import {connect} from 'react-redux';

export function PlayerStats(props) {
    return (
      <div className="playerStats">
        <div className="soldierdiv">
          <img src="../public/images/soldier_squad.jpg" alt="soldier_squad" />
          <div className="squadindicators"></div>
          <div className="soldierX"></div>
        </div>
        <div className="hummerdiv">
          <img src="../public/images/hummer.jpg" alt="hummer" />
          <div className="hummerindicators"></div>
          <div className="hummerX"></div>
        </div>
        <div className="transportdiv">
          <img src="../public/images/transport.jpg" alt="transport" />
          <div className="transportindicators"></div>
          <div className="transportX"></div>
        </div>
        <div className="tanksmalldiv">
          <img src="../public/images/tanksmall.jpg" alt="tanksmall" />
          <div className="tanksmallindicators"></div>
          <div className="tanksmallX"></div>
        </div>
        <div className="tanklargediv">
          <img src="../public/images/tanklarge.jpg" alt="tanklarge" />
          <div className="tanklargeindicators"></div>
          <div className="tanklargeX"></div>
        </div>
      </div>
    );
}

export default connect()(PlayerStats);
