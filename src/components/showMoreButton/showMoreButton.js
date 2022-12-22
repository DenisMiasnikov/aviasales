import React from 'react';
import { connect } from 'react-redux';

import * as actions from '../../actions/dataFetchAction';

import style from './showMoreButton.module.scss';

function ShowMoreButton({ showMore }) {
  return (
    <button type="button" className={style.btn} onClick={showMore}>
      ПОКАЗАТЬ ЕЩЕ 5 БИЛЕТОВ!
    </button>
  );
}

const mapStateToProps = (state) => ({
  data: state.dataReducer,
});

export default connect(mapStateToProps, actions)(ShowMoreButton);
