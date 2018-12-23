import React, { useState } from 'react';
import FavouriteToggle from './FavouriteToggle';
import ScoreCounter from './ScoreCounter';

function Post({ data, index }) {
  const [isBody, setBody] = useState(false);
  return (
    <li
      key={index}
      style={{
        backgroundColor: 'white',
        color: '#333',
        margin: '5px',
        padding: '10px',
        fontSize: '11pt',
        cursor: 'pointer'
      }}
    >
      <span
        style={{ fontWeight: '900' }}
        onClick={() => setBody(!isBody)}
      >
        {
          isBody
          ? data.body
          : data.title
        }
      </span>
      <FavouriteToggle
        style={{
          float: 'right',
          marginLeft: '20px'
        }} />
      <ScoreCounter style={{ float: 'right' }} />
    </li>
  );
};

export default Post;
