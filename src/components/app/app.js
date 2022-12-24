import React from 'react';
import { connect } from 'react-redux';

import Header from '../header';
import Content from '../content';
import LoadBar from '../loadBar/loadBar';

import styles from './app.module.scss';

function App({ data }) {
  const { tickets, isFetching } = data;
  return (
    <div className={styles.app}>
      <Header />
      <Content />
    </div>
  );
}

const mapStateToProps = (state) => ({
  data: state.dataReducer,
});

export default connect(mapStateToProps)(App);
