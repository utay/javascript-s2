import React, { useState } from 'react';

function FavouriteToggle({ initialActive = false, style = {} }) {
  const [isActive, setActive] = useState(initialActive);
  return (
    <span
      style={style}
      onClick={() => setActive(!isActive)}
    >
      {
        isActive
        ? '♥️'
        : '♡'
      }
    </span>
  )
};

export default FavouriteToggle;
