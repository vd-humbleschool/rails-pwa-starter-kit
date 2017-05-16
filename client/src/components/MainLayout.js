import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';

import Home from './Home';
import Post from './Post';
import Posts from './Posts';
import TopBar from './TopBar';

import mobxify from './mobxify';

function MainLayout() {
  return(
    <Router>
      <div>
        <TopBar/>
        <section className="section">
          <div className="container">
            <Route exact path="/" component={Home} />
            <Route exact path="/posts" component={Posts} />
            <Route path="/posts/:id" component={Post} />
          </div>
        </section>
      </div>
    </Router>
  );
}

export default mobxify('uiStore')(MainLayout);
