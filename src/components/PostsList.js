import React from 'react';
import Post from './Post';

const PostsList = ({ posts = [] }) => (
  <ul style={{ listStyle: 'none', width: '800px' }}>
    {posts.map((p, index) => (
      <Post data={p} key={index} />
    ))}
  </ul>
);

export default PostsList;
