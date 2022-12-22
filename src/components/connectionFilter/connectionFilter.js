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
              id={0}
              checked={connections.zero}
              onChange={handleConnectionZero}
            />
            <label className={style.myCheckbox} htmlFor={0}>
              Без пересадок
            </label>
          </li>
          <li className={style.item}>
            <input
              className={style.checkbox}
              type="checkbox"
              id={1}
              checked={connections.one}
              onChange={handleConnectionOne}
            />
            <label className={style.myCheckbox} htmlFor={1}>
              1 пересадка
            </label>
          </li>
          <li className={style.item}>
            <input
              className={style.checkbox}
              type="checkbox"
              id={2}
              checked={connections.two}
              onChange={handleConnectionTwo}
            />
            <label className={style.myCheckbox} htmlFor={2}>
              2 пересадки
            </label>
          </li>
          <li className={style.item}>
            <input
              className={style.checkbox}
              type="checkbox"
              id={3}
              checked={connections.free}
              onChange={handleConnectionFree}
            />
            <label className={style.myCheckbox} htmlFor={3}>
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
