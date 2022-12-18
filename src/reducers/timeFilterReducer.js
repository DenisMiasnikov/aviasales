/* eslint-disable indent */
/* eslint-disable default-param-last */
const initialState = {
  timeFilters: {
    cheap: true,
    fast: false,
    comod: false,
  },
  all: false,
  connections: {
    zero: false,
    one: false,
    two: false,
    free: false,
  },
};

const timeFilterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'cheap':
      return {
        ...state,
        timeFilters: action.payload,
      };
    case 'fast':
      return {
        ...state,
        timeFilters: action.payload,
      };
    case 'comod':
      return {
        ...state,
        timeFilters: action.payload,
      };
    default:
      return state;
  }
};

export default timeFilterReducer;
