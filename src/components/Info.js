import React from 'react';
import { connect } from 'react-redux';
import { GAME_STOP_REQUESTED } from '../actions';

class Info extends React.Component {
  componentDidUpdate() {
    const { lives, dispatch } = this.props;

    if (lives === 0) {
      dispatch({ type: GAME_STOP_REQUESTED });
    }
  }

  render() {
    const { lives, score } = this.props;

    return (
      <div
        style={{
          position: 'fixed',
          padding: '10px 20px',
          top: '10px',
          right: '10px',
          backgroundColor: 'white',
          borderRadius: '10px',
          textAlign: 'right'
        }}
      >
        <div>{lives} ❤️</div>
        <div>{score} 🥇</div>
      </div>
    );
  }
}

export default connect(null)(Info);
