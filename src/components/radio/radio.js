import React from 'react';

import style from './radio.module.scss';

function Radio(props) {
  const { text, myId, status, handleTime, resetTicketsOnPage } = props;
  const onMyChange = () => {
    resetTicketsOnPage();
    handleTime();
  };
  return (
    <>
      <input
        className={style.input}
        type="radio"
        id={myId}
        value={myId}
        name="filter"
        checked={status}
        onChange={onMyChange}
      />
      <label className={style.label} htmlFor={myId}>
        {text}
      </label>
    </>
  );
}

export default Radio;
