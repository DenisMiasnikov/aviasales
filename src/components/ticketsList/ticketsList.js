/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { connect } from 'react-redux';

import ShowMoreButton from '../showMoreButton';
import TimeFilter from '../timeFilter';
import TicketCard from '../ticketCard';

import style from './ticketsList.module.scss';

function TicketsList({ data }) {
  const { tickets, isFetching } = data;
  // console.log(`Fetching - ${isFetching}`);
  const ticket = tickets.map((item) => {
    const { ...itemProps } = item;
    return <TicketCard {...itemProps} key={item.id} />; // unique id needed
  });
  return (
    <div className={style.content}>
      <TimeFilter />
      <ul className={style.flightList}>{ticket}</ul>
      <ShowMoreButton />
    </div>
  );
}

const mapStateToProps = (state) => ({
  data: state.dataReducer,
});

export default connect(mapStateToProps)(TicketsList);
