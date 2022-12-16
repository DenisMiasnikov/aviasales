import React from 'react';

import style from './connectionFilter.module.scss';

export default function ConnetctionFilter() {
  return (
    <aside className={style.filters}>
      <h3 className={style.title}>Количество пересадок</h3>
      <form className={style.form}>
        <ul className={style.list}>
          <li className={style.item}>
            <input className={style.checkbox} type="checkbox" id="all" />
            <label className={style.myCheckbox} htmlFor="all">
              Все
            </label>
          </li>
          <li className={style.item}>
            <input className={style.checkbox} type="checkbox" id="noConnection" />
            <label className={style.myCheckbox} htmlFor="noConnection">
              Без пересадок
            </label>
          </li>
          <li className={style.item}>
            <input className={style.checkbox} type="checkbox" id="oneConnection" />
            <label className={style.myCheckbox} htmlFor="oneConnection">
              1 пересадка
            </label>
          </li>
          <li className={style.item}>
            <input className={style.checkbox} type="checkbox" id="twoConnection" />
            <label className={style.myCheckbox} htmlFor="twoConnection">
              2 пересадки
            </label>
          </li>
          <li className={style.item}>
            <input className={style.checkbox} type="checkbox" id="freeConnection" />
            <label className={style.myCheckbox} htmlFor="freeConnection">
              3 пересадки
            </label>
          </li>
        </ul>
      </form>
    </aside>
  );
}
