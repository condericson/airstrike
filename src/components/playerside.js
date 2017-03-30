import React from 'react';
import {connect} from 'react-redux';
import PlayerName from './playername';
import PlayerBoard from './playerboard';
import PlayerStats from './playerstats';


export function PlayerSide(props) {
    return (
      <div className="playerSide">
        <PlayerName />
        <PlayerBoard />
        <PlayerStats />
        {/* chat room? */}
      </div>
    );
}

export default connect()(PlayerSide);
