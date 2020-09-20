import React, { useEffect, useState } from 'react';
import './App.css';

import Movie from './MovieCard';
import api from './apiRequest';

export default function MoviesCatalogue() {
  const [movies, setMovies] = useState(null);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchAllMovies = async () => {
      try {
        const payload = await api.get('movies').json();
        console.log('PAYLOAD', payload);
        setMovies(payload);
      } catch (err) {
        setError('Failed to load the data');
        console.log(err);
      }
    };
    fetchAllMovies();
  }, [setMovies, setError]);

  if (error) return <div>Failed to load the data. Try refreshing.</div>;

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
