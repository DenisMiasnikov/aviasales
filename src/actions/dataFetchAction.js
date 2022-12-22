import TicketService from '../services/ticket-services';

const ticket = new TicketService();

export function showMore() {
  return {
    type: 'SHOW_MORE_TICKETS',
  };
}

export function addData(tickets) {
  return {
    type: 'FETCH_POSTS_SUCCESS',
    payload: tickets,
  };
}

export function startFetch() {
  return {
    type: 'FETCH_POSTS_REQUEST',
  };
}

export function finishFetch() {
  return {
    type: 'FETCH_POSTS_REQUEST_FINISHED',
  };
}

export function errorFetch(e) {
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
        if (!res.stop) {
          dispatch(addData(res.tickets));
          dispatch(getData(localId));
        }
        if (res.stop) {
          dispatch(finishFetch());
          localStorage.clear();
        }
      })
      .catch((e) => {
        dispatch(errorFetch(e));
        dispatch(getData(localId));
      });
  };
}
