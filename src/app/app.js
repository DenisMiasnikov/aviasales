import React from 'react';

import Header from '../header';
import Content from '../content';

import styles from './app.module.scss';

export default function App() {
  return (
    <div className={styles.app}>
      <Header />
      <Content />
    </div>
  );
}
