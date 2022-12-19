/* eslint-disable consistent-return */
/* eslint-disable indent */
/* eslint-disable default-param-last */

const dataReducer = (
  state = {
    isFetching: false,
    error: {},
    tickets: [],
  },
  action
) => {
  switch (action.type) {
    case 'FETCH_POSTS_REQUEST':
      return { ...state, isFetching: true };
    case 'FETCH_POSTS_FAILURE':
      return { isFetching: false, error: action.payload };
    case 'FETCH_POSTS_SUCCESS':
      return { isFetching: false, tickets: action.payload };
    default:
      return state;
  }
};

export default dataReducer;
