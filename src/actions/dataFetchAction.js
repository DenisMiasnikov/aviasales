/* eslint-disable no-undef */
import TicketService from '../services/ticket-services';

const ticket = new TicketService();

export function addData(data) {
  console.log('i statrt to add');
  return {
    type: 'FETCH_POSTS_SUCCESS',
    payload: data,
  };
}

export function startFetch() {
  console.log('i statrt to fetch');
  return {
    type: 'FETCH_POSTS_REQUEST',
  };
}

export function errorFetch(e) {
  console.log('oops an error');
  console.log(typeof e);
  return {
    type: 'FETCH_POSTS_FAILURE',
    payload: e,
  };
}

export function getData(localId) {
  return async (dispatch) => {
    dispatch(startFetch());
    ticket
      .getTickets(localId)
      .then((res) => {
        dispatch(addData(res.tickets));
      })
      .catch((e) => {
        dispatch(errorFetch(e));
      });
  };
}
