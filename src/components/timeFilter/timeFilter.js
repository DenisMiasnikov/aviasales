import React from 'react';
import { connect } from 'react-redux';

import * as actions from '../../actions/timeFilterActions';

import style from './timeFilter.module.scss';

function TimeFilter({ timeFilter, handleCheap, handleFast, handleComod, resetTicketsOnPage }) {
  const onFast = () => {
    resetTicketsOnPage();
    handleFast();
  };
  const onCheap = () => {
    resetTicketsOnPage();
    handleCheap();
  };
  const onComod = () => {
    resetTicketsOnPage();
    handleComod();
  };
  return (
    <form className={style.filters}>
      <ul className={style.list}>
        <li className={style.item}>
          <input
            className={style.input}
            type="radio"
            id="cheap"
            value="all"
            name="filter"
            checked={timeFilter.cheap}
            onChange={onCheap}
          />
          <label className={style.label} htmlFor="cheap">
            CАМЫЙ ДЕШЕВЫЙ
          </label>
        </li>
        <li className={style.item}>
          <input
            className={style.input}
            type="radio"
            id="fast"
            value="active"
            name="filter"
            checked={timeFilter.fast}
            onChange={onFast}
          />
          <label className={style.label} htmlFor="fast">
            САМЫЙ БЫСТРЫЙ
          </label>
        </li>
        <li className={style.item}>
          <input
            className={style.input}
            type="radio"
            id="comod"
            value="completed"
            name="filter"
            checked={timeFilter.comod}
            onChange={onComod}
          />
          <label className={style.label} htmlFor="comod">
            ОПТИМАЛЬНЫЙ
          </label>
        </li>
      </ul>
    </form>
  );
}

const mapStateToProps = (state) => ({
  timeFilter: state.timeFilterReducer,
});

export default connect(mapStateToProps, actions)(TimeFilter);
