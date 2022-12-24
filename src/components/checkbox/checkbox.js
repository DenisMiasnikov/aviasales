import React from 'react';

import style from './checkbox.module.scss';

function Checkbox(props) {
  const { text, name, myId, handleConnection } = props;
  return (
    <>
      <input className={style.checkbox} type="checkbox" id={myId} checked={name} onChange={handleConnection} />
      <label className={style.myCheckbox} htmlFor={myId}>
        {text}
      </label>
    </>
  );
}

export default Checkbox;
