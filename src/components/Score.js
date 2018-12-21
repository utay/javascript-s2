import React from 'react';

const Score = ({ score }) => (
  <div
    style={{
      position: 'absolute',
      top: '-40%',
      left: 0,
      right: 0,
      bottom: 0,
      width: '300px',
      height: '100px',
      margin: 'auto',
      fontSize: '32px',
      textAlign: 'center',
      lineHeight: '100px',
      color: 'white'
    }}
  >
    SCORE: {score}
  </div>
);

export default Score;
