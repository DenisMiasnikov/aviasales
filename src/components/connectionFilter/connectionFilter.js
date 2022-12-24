import React from 'react';
import { connect } from 'react-redux';

import * as actions from '../../actions/connectionFilterActions';
import Checkbox from '../checkbox';

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
            <Checkbox text="Все" name={all} myId="all" handleConnection={handleConnectionAll} />
          </li>
          <li className={style.item}>
            <Checkbox text="Без пересадок" name={connections.zero} myId={0} handleConnection={handleConnectionZero} />
          </li>
          <li className={style.item}>
            <Checkbox text="1 пересадка" name={connections.one} myId={1} handleConnection={handleConnectionOne} />
          </li>
          <li className={style.item}>
            <Checkbox text="2 пересадки" name={connections.two} myId={2} handleConnection={handleConnectionTwo} />
          </li>
          <li className={style.item}>
            <Checkbox text="3 пересадки" name={connections.free} myId={3} handleConnection={handleConnectionFree} />
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
