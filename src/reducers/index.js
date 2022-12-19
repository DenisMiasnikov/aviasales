import { combineReducers } from 'redux';

import timeFilterReducer from './timeFilterReducer';
import connectionFilterReducer from './connectionsFilterReducer';
import dataReducer from './dataReducer';

export default combineReducers({
  timeFilterReducer,
  connectionFilterReducer,
  dataReducer,
});
