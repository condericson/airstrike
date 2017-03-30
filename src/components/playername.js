import React from 'react';
import {connect} from 'react-redux';


export function PlayerName(props) {
    return (
      <div className="playerName">
        {props.playerName}
      </div>
    );
}

const mapStateToProps = state => ({
  playerName: state.playerName
});

export default connect(mapStateToProps)(PlayerName);
