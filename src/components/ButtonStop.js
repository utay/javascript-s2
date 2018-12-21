import React from 'react';
import { connect } from 'react-redux';
import { GAME_STOP_REQUESTED } from '../actions';

const ButtonStop = ({ dispatch }) => (
  <div
    style={{
      position: 'fixed',
      padding: '10px 20px',
      top: '10px',
      left: '10px',
      backgroundColor: 'white',
      borderRadius: '10px',
      textAlign: 'right',
      cursor: 'pointer'
    }}
    onClick={() => dispatch({ type: GAME_STOP_REQUESTED })}
  >
    STOP
  </div>
);

export default connect(null)(ButtonStop);
