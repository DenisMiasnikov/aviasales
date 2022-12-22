/* eslint-disable indent */
/* eslint-disable consistent-return */
/* eslint-disable default-param-last */
const initialState = {
  all: true,
  connections: {
    zero: true,
    one: true,
    two: true,
    free: true,
  },
};

const timeFilterReducer = (state = initialState, action) => {
  if (JSON.stringify(state.connections) === JSON.stringify(action.notAllActivated)) {
    return action.allActivated;
  }
  if (JSON.stringify(state) === JSON.stringify(action.allActivated)) {
    return action.notAllDeactivated;
  }
  switch (action.type) {
    case 'all':
      if (!state.all) {
        return action.allActivated;
      }
      break;
    case 'zero':
      return {
        ...state,
        connections: { ...state.connections, zero: !state.connections.zero },
      };
    case 'one':
      return {
        ...state,
        connections: { ...state.connections, one: !state.connections.one },
      };
    case 'two':
      return {
        ...state,
        connections: { ...state.connections, two: !state.connections.two },
      };
    case 'free':
      return {
        ...state,
        connections: { ...state.connections, free: !state.connections.free },
      };
    default:
      return state;
  }
};

export default timeFilterReducer;
