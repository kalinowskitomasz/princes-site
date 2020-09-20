import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Movie from './MovieCard';
import api from './apiRequest';

const useStyles = makeStyles({
  moviesGrid: {
    margin: '5vw',
    display: 'grid',
    gridAutoFlow: 'row',
    gridGap: '2em',
    gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
    justifyItems: 'center',
  },
});

export default function MoviesCatalogue() {
  const [movies, setMovies] = useState(null);
  const [error, setError] = useState(null);
  const classes = useStyles();
  useEffect(() => {
    const fetchAllMovies = async () => {
      try {
        const payload = await api.get('movies').json();
        setMovies(payload);
      } catch (err) {
        setError('Failed to load the data');
        console.log(err);
      }
    };
    fetchAllMovies();
  }, [setMovies, setError]);

  if (error) return <div>{error}</div>;

  const moviesGrid = movies ? (
    <CatalogueView movies={movies} />
  ) : (
    <div>Loading...</div>
  );

  return <div className={classes.moviesGrid}>{moviesGrid}</div>;
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
