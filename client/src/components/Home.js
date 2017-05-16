import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <Link to="/posts">Posts</Link>
      <h1>Home</h1>
      <p>This is a Rails PWA Starter Kit</p>
    </div>
  );
}

export default Home;
