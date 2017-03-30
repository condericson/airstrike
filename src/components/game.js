import React from 'react';
import {connect} from 'react-redux';
import PlayerSide from './playerside';
import OpponentSide from './opponentside';

export function Game(props) {
    return (
      <div className="game">
        <PlayerSide />
        <OpponentSide />
      </div>
    );
}

export default connect()(Game);
