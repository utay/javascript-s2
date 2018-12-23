import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import PostsList from './components/PostsList';
import Form from './components/Form';

function App()  {
  const [posts, setPosts] = useState({ posts: [], isFetch: false });
  useEffect(() => {
    if (!posts.isFetch) {
      fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(json => setPosts({ posts: json, isFetch: true }))
    }
  });
  const inputTitle = useRef(null);
  const inputBody = useRef(null);
  const addPost = () => {
    if (inputTitle.current.value && inputBody.current.value) {
      setPosts({ posts: [{
        userId: 2,
        id: 200,
        title: inputTitle.current.value,
        body: inputBody.current.value
      }, ...posts.posts], isFetch: posts.isFetch})
    }
  }
  return (
    <div>
      <header className="App-header">
        <Form
          titleRef={inputTitle}
          bodyRef={inputBody}
          addPost={addPost}
        />
        <PostsList
          posts={posts.posts}
        />
      </header>
    </div>
  );
};

export default App;
