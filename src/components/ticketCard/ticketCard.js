import React from 'react';
import { nanoid } from 'nanoid';

import TicketSegment from '../ticketSegment/ticketSegment';

import style from './ticketCard.module.scss';

export default function TicketCard(props) {
  const { price, carrier, segments } = props;
  const segment = segments.map((item) => {
    const { ...itemProps } = item;
    return <TicketSegment {...itemProps} key={nanoid()} />;
  });
  return (
    <li className={style.card}>
      <div className={style.price}>
        <span>{`${price}`} P</span>
      </div>
      <img src={`http://pics.avs.io/99/36/${carrier}.png`} alt="logo" className={style.logo} />
      <ul className={style.info}>{segment}</ul>
    </li>
  );
}
