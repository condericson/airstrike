import React from 'react';
import {connect} from 'react-redux';


export function OpponentName(props) {
    return (
      <div className="opponentName">
        {props.opponentName}
      </div>
    );
}

const mapStateToProps = state => ({
  opponentName: state.opponentName
});

export default connect(mapStateToProps)(OpponentName);
