/* eslint-disable no-case-declarations */
/* eslint-disable indent */
/* eslint-disable default-param-last */
/* eslint-disable consistent-return */
import * as utils from '../utils/redusersUtils';
import {
  all,
  zero,
  one,
  two,
  free,
  FETCH_POSTS_REQUEST,
  SHOW_MORE_TICKETS,
  SHOW_LESS_TICKETS,
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_REQUEST_FINISHED,
  FETCH_POSTS_FAILURE,
} from '../actions/actionTypes';

const dataReducer = (
  state = {
    moreButtonText: 'ПОКАЗАТЬ ЕЩЕ 5 БИЛЕТОВ!',
    isFetching: true,
    error: {},
    tickets: [],
    cheapTickets: [],
    fastTickets: [],
    comodTickets: [],
    ticketsOnPage: 5,
    filter: [0, 1, 2, 3],
  },
  action
) => {
  switch (action.type) {
    case FETCH_POSTS_REQUEST:
      return { ...state, isFetching: true };
    case FETCH_POSTS_REQUEST_FINISHED:
      return { ...state, isFetching: false };
    case FETCH_POSTS_FAILURE:
      return { ...state, error: action.payload };
    case FETCH_POSTS_SUCCESS:
      const actFilterRes = utils.liveFilter(state, action);
      return {
        ...state,
        tickets: [...state.tickets, ...action.payload],
        cheapTickets: utils.cheapTicket([...actFilterRes]),
        fastTickets: utils.fastTicket([...actFilterRes]),
        comodTickets: utils.comodTicket([...state.tickets, ...action.payload]),
      };
    case SHOW_MORE_TICKETS:
      return { ...state, ticketsOnPage: state.ticketsOnPage + 5 };
    case SHOW_LESS_TICKETS:
      return { ...state, ticketsOnPage: 5 };
    case all:
      if (!action.filter) {
        return {
          ...state,
          cheapTickets: [],
          fastTickets: [],
          comodTickets: [],
          filter: [],
        };
      }
      return {
        ...state,
        cheapTickets: utils.cheapTicket([...state.tickets]),
        fastTickets: utils.fastTicket([...state.tickets]),
        comodTickets: utils.comodTicket([...state.tickets]),
        filter: [0, 1, 2, 3],
      };
    case zero:
      return utils.filter(state, action);
    case one:
      return utils.filter(state, action);
    case two:
      return utils.filter(state, action);
    case free:
      return utils.filter(state, action);
    default:
      return state;
  }
};

export default dataReducer;
