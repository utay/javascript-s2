import React from 'react';

function Form({ titleRef, bodyRef, addPost }) {
  return (
    <div>
      <label>Title:</label>
      <input ref={titleRef} type="text" />
      <label>Body:</label>
      <input ref={bodyRef} type="text" />
      <button onClick={() => addPost()}>Add post</button>
    </div>
  )
};

export default Form;
