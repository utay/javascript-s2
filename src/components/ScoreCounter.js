import React, { useState } from 'react';

function ScoreButton({ style = {}, symbol, onClick }) {
  return (
    <span
      style={style}
      onClick={onClick}
    >
      { symbol }
    </span>
  )
}

function ScoreCounter({ style = {} }) {
  const [counter, setCounter] = useState(0);
  return (
    <>
      <ScoreButton
        style={{
          ...style,
          marginLeft: '5px'
        }}
        symbol={'-'}
        onClick={() => setCounter((counter > 0) ? counter - 1 : 0)}
      />
      <span
        style={style}
      >
        { counter }
      </span>
      <ScoreButton
        style={{
          ...style,
          marginRight: '5px'
        }}
        symbol={'+'}
        onClick={() => setCounter(counter + 1)}
      />
    </>
  )
};

export default ScoreCounter;
