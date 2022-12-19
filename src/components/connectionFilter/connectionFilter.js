/* eslint-disable indent */
import React from 'react';
import { connect } from 'react-redux';

import * as actions from '../../actions/connectionFilterActions';

import style from './connectionFilter.module.scss';

function ConnectionFilter({
  connectionFilter,
  handleConnectionAll,
  handleConnectionZero,
  handleConnectionOne,
  handleConnectionTwo,
  handleConnectionFree,
}) {
  const { all, connections } = connectionFilter;
  return (
    <aside className={style.filters}>
      <h3 className={style.title}>Количество пересадок</h3>
      <form className={style.form}>
        <ul className={style.list}>
          <li className={style.item}>
            <input className={style.checkbox} type="checkbox" id="all" checked={all} onChange={handleConnectionAll} />
            <label className={style.myCheckbox} htmlFor="all">
              Все
            </label>
          </li>
          <li className={style.item}>
            <input
              className={style.checkbox}
              type="checkbox"
              id="zero"
              checked={connections.zero}
              onChange={handleConnectionZero}
            />
            <label className={style.myCheckbox} htmlFor="zero">
              Без пересадок
            </label>
          </li>
          <li className={style.item}>
            <input
              className={style.checkbox}
              type="checkbox"
              id="one"
              checked={connections.one}
              onChange={handleConnectionOne}
            />
            <label className={style.myCheckbox} htmlFor="one">
              1 пересадка
            </label>
          </li>
          <li className={style.item}>
            <input
              className={style.checkbox}
              type="checkbox"
              id="two"
              checked={connections.two}
              onChange={handleConnectionTwo}
            />
            <label className={style.myCheckbox} htmlFor="two">
              2 пересадки
            </label>
          </li>
          <li className={style.item}>
            <input
              className={style.checkbox}
              type="checkbox"
              id="free"
              checked={connections.free}
              onChange={handleConnectionFree}
            />
            <label className={style.myCheckbox} htmlFor="free">
              3 пересадки
            </label>
          </li>
        </ul>
      </form>
    </aside>
  );
}

const mapStateToProps = (state) => ({
  connectionFilter: state.connectionFilterReducer,
});

export default connect(mapStateToProps, actions)(ConnectionFilter);
