import React from 'react';

import style from './timeFilter.module.scss';

export default function TimeFilter() {
  return (
    <form className={style.filters}>
      <ul className={style.list}>
        <li className={style.item}>
          <input className={style.input} type="radio" id="cheap" value="all" name="filter" defaultChecked />
          <label className={style.label} htmlFor="cheap">
            CАМЫЙ ДЕШЕВЫЙ
          </label>
        </li>
        <li className={style.item}>
          <input className={style.input} type="radio" id="active" value="active" name="filter" />
          <label className={style.label} htmlFor="active">
            САМЫЙ БЫСТРЫЙ
          </label>
        </li>
        <li className={style.item}>
          <input className={style.input} type="radio" id="completed" value="completed" name="filter" />
          <label className={style.label} htmlFor="completed">
            ОПТИМАЛЬНЫЙ
          </label>
        </li>
      </ul>
    </form>
  );
}
