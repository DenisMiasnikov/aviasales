import React from 'react';

import style from './ticketCard.module.scss';
import logo from './S7 Logo.svg';

export default function TicketCard() {
  return (
    <li className={style.card}>
      <div className={style.price}>
        <span>13 400 P</span>
      </div>
      <img src={logo} alt="logo" className={style.logo} />
      <ul className={style.info}>
        <li className={style.item}>
          <div className={style.timetable}>
            <h3 className={style.title}>MOW – HKT</h3>
            <span>10:45 – 08:00</span>
          </div>
          <div className={style.timetable}>
            <h3 className={style.title}>В пути</h3>
            <span>21ч 15м</span>
          </div>
          <div className={style.timetable}>
            <h3 className={style.title}>2 пересадки</h3>
            <span>HKG, JNB</span>
          </div>
        </li>
      </ul>
    </li>
  );
}
