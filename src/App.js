import React, { useEffect, useState } from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from 'react-router-dom';

import CatalogueView from './MoviesCatalogue';
import DetailedMovieCard from './DetailedMovieCard';

import './App.css';

function App() {
  return (
    <div className='App'>
      <Router>
        <Switch>
          <Route exact path='/movies'>
            <CatalogueView />
          </Route>
          <Route exact path='/movie/:id' component={DetailedMovieCard} />
          <Redirect from='/' to='/movies' />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
