import React from 'react';

import style from './header.module.scss';
import logo from './Logo.svg';

export default function Header() {
  return (
    <header className={style.header}>
      <img src={logo} alt="logo" className="header-logo" />
    </header>
  );
}
