import {SET_NEW_GAME} from './actions';

const initialState = {
  playerName: "",
  opponentName: "",
  fired: false
};

export default (state, action) => {
  state = state || initialState;
  if (action.type === SET_NEW_GAME) {
    state = Object.assign({},
      initialState, {
        playerName: "",
        opponentName: "",
        fired: false
      });
      return state;
  }
  return state;
};
