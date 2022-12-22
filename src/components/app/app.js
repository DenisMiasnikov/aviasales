import React from 'react';
import { connect } from 'react-redux';
import { Spin } from 'antd';

import Header from '../header';
import Content from '../content';

import styles from './app.module.scss';

function App({ data }) {
  const { tickets, isFetching } = data;
  return (
    <Spin
      tip="Подбираем лучшие вариаты для Вас..."
      spinning={isFetching && tickets.length === 0}
      size="large"
      style={{ marginTop: 50 }}
    >
      <div className={styles.app}>
        <Header />
        <Content />
      </div>
    </Spin>
  );
}

const mapStateToProps = (state) => ({
  data: state.dataReducer,
});

export default connect(mapStateToProps)(App);
