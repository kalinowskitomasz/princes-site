import React, { useEffect, useState } from 'react';
import ky from 'ky';
import { Grid, Image, Segment } from 'semantic-ui-react';
import logo from './logo.svg';
import './App.css';

import Movie from './Movie';
import Menu from './Menu';

const api = ky.create({ prefixUrl: process.env.REACT_APP_API });

function App() {
  const [movies, setMovies] = useState(null);
  useEffect(() => {
    const fetchAllMovies = async () => {
      try {
        const payload = await api.get('movies').json();
        console.log('PAYLOAD', payload);
        setMovies(payload);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllMovies();
  }, []);

  const moviesGrid = movies
    ? movies.map((movie) => (
        <Movie key={movie.ID} title={movie.Title} poster={movie.Poster} />
      ))
    : null;

  return (
    <div className='App'>
      <Menu />
      <div className='container'>{moviesGrid}</div>
    </div>
  );
}

export default App;
