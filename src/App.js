import React from 'react';
import data from './data.js';
import Posts from './Posts.js';
import Post from './Post.js';
import './App.css';

import {
  BrowserRouter as Router,
  // HashRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <img src='https://image.flaticon.com/icons/png/512/2983/2983803.png' className="App-logo" alt="logo" />
          <h2 className="App-title">My Posts</h2>
        </header>
        <section>
          <Switch>
            <Route path="/post/:id">
              <Post />
            </Route>
            <Route path="/">
              <Posts posts={data} />
            </Route>
            <Redirect from='/user' to='/login' />
          </Switch>
        </section>
      </div>
    </Router>
  );
}

export default App;
