import React from 'react';
import {connect} from 'react-redux';
import Game from './components/game';

export function App(props) {
    return (
      <div className="App">
        <Game />
      </div>
    );
}

export default connect()(App);
