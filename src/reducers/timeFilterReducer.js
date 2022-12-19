/* eslint-disable indent */
/* eslint-disable default-param-last */
const initialState = {
  cheap: true,
  fast: false,
  comod: false,
};

const timeFilterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'cheap':
      return action.payload;
    case 'fast':
      return action.payload;
    case 'comod':
      return action.payload;
    default:
      return state;
  }
};

export default timeFilterReducer;
