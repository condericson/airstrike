import React from 'react';
import {connect} from 'react-redux';
import OpponentName from './opponentname';
import OpponentBoard from './opponentboard';
import OpponentStats from './opponentstats';
import Airstrike from './airstrike';


export function OpponentSide(props) {
    return (
      <div className="opponentSide">
        <OpponentName />
        <OpponentBoard />
        <OpponentStats />
        <Airstrike />
        {/* chat room? */}
      </div>
    );
}

export default connect()(OpponentSide);
