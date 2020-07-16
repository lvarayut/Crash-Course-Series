import React, { useState } from 'react';

import './App.css';
import Navbar from './Navbar';
import Input from './Input';
import Post from './Post';

let id = 1;

function App() {
  const [posts, setPosts] = useState([]);

  function addPost(newPost) {
    setPosts([{ id, title: newPost }, ...posts]);
    id += 1;
  }

  function removePost(id) {
    const updatedPosts = posts.filter((post) => post.id !== id);
    setPosts(updatedPosts);
  }

  return (
    <>
      <Navbar />
      <Input addPost={addPost} />
      {posts.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          title={post.title}
          removePost={removePost}
        />
      ))}
    </>
  );
}

export default App;
