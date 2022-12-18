import { combineReducers } from 'redux';

import timeFilterReducer from './timeFilterReducer';
import connectionFilterReducer from './connectionsFilterReducer';

export default combineReducers({
  timeFilterReducer,
  connectionFilterReducer,
});
