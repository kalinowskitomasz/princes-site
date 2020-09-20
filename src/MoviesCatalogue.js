import React, { useEffect, useState } from 'react';
import './App.css';

import Movie from './MovieCard';
import api from './apiRequest';

export default function MoviesCatalogue() {
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
  }, [setMovies]);

  const moviesGrid = movies ? <CatalogueView movies={movies} /> : null;

  return <div className='container'>{moviesGrid}</div>;
}

export function CatalogueView({ movies }) {
  const moviesGrid = movies.map((movie) => (
    <Movie
      key={movie.ID}
      title={movie.Title}
      poster={movie.Poster}
      id={movie.ID}
    />
  ));
  return <>{moviesGrid} </>;
}
