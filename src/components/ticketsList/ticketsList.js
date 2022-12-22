/* eslint-disable array-callback-return */
/* eslint-disable consistent-return */
import React from 'react';
import { connect } from 'react-redux';
import { nanoid } from 'nanoid';
import { Spin } from 'antd';

import ShowMoreButton from '../showMoreButton';
import TimeFilter from '../timeFilter';
import TicketCard from '../ticketCard';

import style from './ticketsList.module.scss';

function TicketsList({ data, timeFilter }) {
  const { cheapTickets, fastTickets, comodTickets, isFetching, ticketsOnPage } = data;
  const { cheap, fast, comod } = timeFilter;

  const filtredData = () => {
    if (cheap) {
      return cheapTickets;
    }
    if (fast) {
      return fastTickets;
    }
    if (comod) {
      return comodTickets;
    }
  };

  const ticket = filtredData().map((item, index) => {
    const { ...itemProps } = item;
    if (index < ticketsOnPage) {
      return <TicketCard {...itemProps} key={nanoid()} />;
    }
  });
  const ticketCard =
    ticket.length !== 0 ? (
      ticket
    ) : (
      <span className={style.noMatchingMessage}>
        <span className={style.noMatchingItem}>Рейсов,</span>
        <span className={style.noMatchingItem}>&nbsp;подходящих под заданные фильтры,</span>
        <span className={style.noMatchingItem}>&nbsp;не найдено</span>
      </span>
    );

  const button = ticket.length === 0 ? null : <ShowMoreButton />;

  return (
    <div className={style.content}>
      <TimeFilter />
      <Spin
        tip="Улучшаем подборку вариатов для Вас..."
        spinning={isFetching && ticket.length !== 0}
        size="large"
        style={{ marginTop: 32 }}
      >
        <ul className={style.flightList}>{ticketCard}</ul>
      </Spin>
      {button}
    </div>
  );
}

const mapStateToProps = (state) => ({
  data: state.dataReducer,
  timeFilter: state.timeFilterReducer,
});

export default connect(mapStateToProps)(TicketsList);
