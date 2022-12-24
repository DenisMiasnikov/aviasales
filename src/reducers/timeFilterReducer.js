/* eslint-disable indent */
/* eslint-disable default-param-last */
import { cheap, fast, comod } from '../actions/actionTypes';

const timeFilterReducer = (
  state = {
    cheap: true,
    fast: false,
    comod: false,
  },
  action
) => {
  switch (action.type) {
    case cheap:
      return action.payload;
    case fast:
      return action.payload;
    case comod:
      return action.payload;
    default:
      return state;
  }
};

export default timeFilterReducer;
