/* eslint-disable consistent-return */
export const cheapTicket = (data) =>
  data.sort((actItem, nextItem) => {
    if (actItem.price > nextItem.price) {
      return 1;
    }
    if (actItem.price < nextItem.price) {
      return -1;
    }
    return 0;
  });

export const fastTicket = (data) =>
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

export const comodTicket = (data) =>
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

export const changeFilterData = (state, actionFilter) => {
  if (state.filter.includes(Number(actionFilter))) {
    return [...state.filter].filter((item) => item !== Number(actionFilter));
  }
  if (!state.filter.includes(Number(actionFilter))) {
    return [...state.filter, Number(actionFilter)];
  }
};

export const filterConnection = (data, arr) =>
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

export const filter = (data, act) => {
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

export const liveFilter = (data, act) => {
  if (data.tickets.length !== 0) {
    return filterConnection(data.tickets, data.filter);
  }
  return [...data.tickets, ...act.payload];
};
