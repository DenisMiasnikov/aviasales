import React from 'react';

import ConnectionFilter from '../connectionFilter';
import TicketsList from '../ticketsList/ticketsList';

import style from './content.module.scss';

export default function Content() {
  return (
    <div className={style.main}>
      <ConnectionFilter />
      <TicketsList />
    </div>
  );
}
