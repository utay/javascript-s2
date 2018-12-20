import React from 'react';
import { connect } from 'react-redux';
import {
  TARGET_DESTROY_REQUESTED,
  SELF_TARGET_DESTROY_REQUESTED
} from '../actions';
import { getRandomColor } from '../utils';

class Target extends React.Component {
  componentDidUpdate() {
    const { id, value, dispatch } = this.props;

    if (value === 0) {
      dispatch({ type: SELF_TARGET_DESTROY_REQUESTED, targetId: id });
    }
  }

  render() {
    const { id, x, y, value, dispatch } = this.props;

    return (
      <div
        style={{
          position: 'absolute',
          top: `${y}%`,
          left: `${x}%`,
          width: '25px',
          height: '25px',
          textAlign: 'center',
          lineHeight: '25px',
          cursor: 'pointer',
          backgroundColor: getRandomColor()
        }}
        onClick={() =>
          dispatch({ type: TARGET_DESTROY_REQUESTED, targetId: id })
        }
      >
        {value}
      </div>
    );
  }
}

export default connect(null)(Target);
