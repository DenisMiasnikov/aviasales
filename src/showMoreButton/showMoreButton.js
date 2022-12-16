import React from 'react';

import style from './showMoreButton.module.scss';

export default function ShowMoreButton() {
  return (
    <button type="button" className={style.btn}>
      ПОКАЗАТЬ ЕЩЕ 5 БИЛЕТОВ!
    </button>
  );
}
