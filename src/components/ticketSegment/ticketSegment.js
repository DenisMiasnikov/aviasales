/* eslint-disable indent */
import React from 'react';
import add from 'date-fns/add';
import format from 'date-fns/format';

import style from './ticketSegment.module.scss';

export default function TicketSegment(props) {
  const { origin, destination, duration, date, stops } = props;

  const hours = Math.floor(duration / 60);
  const minutes = duration - hours * 60;

  const timesOfConnections = (stop) => {
    switch (stop) {
      case 0:
        return 'пресадок';
      case 1:
        return 'пресадка';
      default:
        return 'пересадки';
    }
  };
  const connections = stops.map((item, index) => {
    if (index !== stops.length - 1) {
      return `${item}, `;
    }
    return item;
  });
  const dateStart = new Date(date);
  const timeStart = format(dateStart, 'HH:mm');
  const dateArrive = add(dateStart, { minutes: duration });
  const timeArrive = format(dateArrive, 'HH:mm');
  return (
    <li className={style.item}>
      <div className={style.timetable}>
        <h3 className={style.title}>
          {origin} – {destination}
        </h3>
        <span className={style.data}>
          {timeStart} - {timeArrive}
        </span>
      </div>
      <div className={style.timetable}>
        <h3 className={style.title}>В пути</h3>
        <span className={style.data}>
          {hours}ч {minutes}мин
        </span>
      </div>
      <div className={style.timetable}>
        <h3 className={style.title}>
          {stops.length} {timesOfConnections(stops.length)}
        </h3>
        <span className={style.data}>{connections}</span>
      </div>
    </li>
  );
}
