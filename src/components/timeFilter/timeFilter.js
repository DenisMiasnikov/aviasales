import React from 'react';
import { connect } from 'react-redux';

import * as actions from '../../actions/timeFilterActions';
import Radio from '../radio';

import style from './timeFilter.module.scss';

function TimeFilter({ timeFilter, handleCheap, handleFast, handleComod, resetTicketsOnPage }) {
  return (
    <form className={style.filters}>
      <ul className={style.list}>
        <li className={style.item}>
          <Radio
            text="CАМЫЙ ДЕШЕВЫЙ"
            myId="cheap"
            status={timeFilter.cheap}
            handleTime={handleCheap}
            resetTicketsOnPage={resetTicketsOnPage}
          />
        </li>
        <li className={style.item}>
          <Radio
            text="САМЫЙ БЫСТРЫЙ"
            myId="fast"
            status={timeFilter.fast}
            handleTime={handleFast}
            resetTicketsOnPage={resetTicketsOnPage}
          />
        </li>
        <li className={style.item}>
          <Radio
            text="ОПТИМАЛЬНЫЙ"
            myId="comod"
            status={timeFilter.comod}
            handleTime={handleComod}
            resetTicketsOnPage={resetTicketsOnPage}
          />
        </li>
      </ul>
    </form>
  );
}

const mapStateToProps = (state) => ({
  timeFilter: state.timeFilterReducer,
});

export default connect(mapStateToProps, actions)(TimeFilter);
