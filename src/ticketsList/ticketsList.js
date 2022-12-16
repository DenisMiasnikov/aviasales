import React from 'react';

import ShowMoreButton from '../showMoreButton';
import TimeFilter from '../timeFilter';
import TicketCard from '../ticketCard';

import style from './ticketsList.module.scss';

export default function TicketsList() {
  return (
    <div className={style.content}>
      <TimeFilter />
      <ul className={style.flightList}>
        <TicketCard />
      </ul>
      <ShowMoreButton />
    </div>
  );
}
