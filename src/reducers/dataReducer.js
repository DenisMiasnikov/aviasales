/* eslint-disable no-case-declarations */
/* eslint-disable indent */
/* eslint-disable default-param-last */
/* eslint-disable consistent-return */
const cheapTicket = (data) =>
  data.sort((actItem, nextItem) => {
    if (actItem.price > nextItem.price) {
      return 1;
    }
    if (actItem.price < nextItem.price) {
      return -1;
    }
    return 0;
  });

const fastTicket = (data) =>
  data.sort((actItem, nextItem) => {
    const actDuration = actItem.segments.reduce((acc, item) => {
      acc += item.duration;
      return acc;
    }, 0);
    const nextDuration = nextItem.segments.reduce((acc, item) => {
      acc += item.duration;
      return acc;
    }, 0);
    if (actDuration > nextDuration) {
      return 1;
    }
    if (actDuration < nextDuration) {
      return -1;
    }
    return 0;
  });

const comodTicket = (data) =>
  data.sort((actItem, nextItem) => {
    const actDuration = actItem.segments.reduce((acc, item) => {
      acc += item.duration;
      return acc;
    }, 0);
    const nextDuration = nextItem.segments.reduce((acc, item) => {
      acc += item.duration;
      return acc;
    }, 0);
    if (actDuration > nextDuration && actItem.price > nextItem.price) {
      return 1;
    }
    if (actDuration > nextDuration && actItem.price < nextItem.price) {
      return -1;
    }
    if (actDuration > nextDuration) {
      return 0;
    }
    if (actDuration < nextDuration && actItem.price > nextItem.price) {
      return 1;
    }
    if (actDuration < nextDuration && actItem.price < nextItem.price) {
      return -1;
    }
    return 0;
  });

const changeFilterData = (state, actionFilter) => {
  if (state.filter.includes(Number(actionFilter))) {
    return [...state.filter].filter((item) => item !== Number(actionFilter));
  }
  if (!state.filter.includes(Number(actionFilter))) {
    return [...state.filter, Number(actionFilter)];
  }
};

const filterConnection = (data, arr) =>
  data.reduce((newData, item) => {
    const conLenArr = item.segments.reduce((accum, segment) => {
      const stop = segment.stops;
      accum.push(stop.length);
      return accum;
    }, []);
    const filtConArr = arr.map((conTimes) => conLenArr.includes(conTimes));
    if (filtConArr.includes(true)) {
      newData.push(item);
    }
    return newData;
  }, []);

const filter = (data, act) => {
  const newFilter = changeFilterData(data, act.filter);
  const newFilterRes = filterConnection(data.tickets, newFilter);
  return {
    ...data,
    cheapTickets: cheapTicket([...newFilterRes]),
    fastTickets: fastTicket([...newFilterRes]),
    comodTickets: comodTicket([...newFilterRes]),
    filter: newFilter,
  };
};

const liveFilter = (data, act) => {
  if (data.tickets.length !== 0) {
    return filterConnection(data.tickets, data.filter);
  }
  return [...data.tickets, ...act.payload];
};

const dataReducer = (
  state = {
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
    case 'FETCH_POSTS_REQUEST':
      return { ...state, isFetching: true };
    case 'FETCH_POSTS_REQUEST_FINISHED':
      return { ...state, isFetching: false };
    case 'FETCH_POSTS_FAILURE':
      return { ...state, error: action.payload };
    case 'FETCH_POSTS_SUCCESS':
      const actFilterRes = liveFilter(state, action);
      return {
        ...state,
        tickets: [...state.tickets, ...action.payload],
        cheapTickets: cheapTicket([...actFilterRes]),
        fastTickets: fastTicket([...actFilterRes]),
        comodTickets: comodTicket([...state.tickets, ...action.payload]),
      };
    case 'SHOW_MORE_TICKETS':
      return { ...state, ticketsOnPage: state.ticketsOnPage + 5 };
    case 'SHOW_LESS_TICKETS':
      return { ...state, ticketsOnPage: 5 };
    case 'all':
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
        cheapTickets: cheapTicket([...state.tickets]),
        fastTickets: fastTicket([...state.tickets]),
        comodTickets: comodTicket([...state.tickets]),
        filter: [0, 1, 2, 3],
      };
    case 'zero':
      return filter(state, action);
    case 'one':
      return filter(state, action);
    case 'two':
      return filter(state, action);
    case 'free':
      return filter(state, action);
    default:
      return state;
  }
};

export default dataReducer;
