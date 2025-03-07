import React, { useState, useEffect } from 'react';
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link, useParams } from 'react-router-dom';
import Table from '@material-ui/core/Table';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

import api from './apiRequest';

const useStyles = makeStyles((theme) => ({
  card: {
    maxWidth: '800px',
    display: 'flex',
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
      alignItems: 'center',
    },
  },
  container: {
    marginTop: '50px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  poster: {
    maxWidth: 350,
  },
  backButton: {
    margin: 40,
  },
}));

// starts with tt prefix, then 7-10 digits
const imdbRegex = /^tt\d{7,10}$/;
export function validateId(id) {
  if (typeof id !== 'string') return false;

  return imdbRegex.test(id);
}

const DetailedMovieCard = ({}) => {
  const { id } = useParams();

  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchMovie = async () => {
      try {
        if (!validateId(id)) {
          setError('Invalid id');
        } else {
          const payload = await api.get(`movie/${id}`).json();
          setMovie(payload);
        }
      } catch (err) {
        setError('Failed to load the data. Try refreshing');
        console.log(err);
      }
    };
    fetchMovie();
  }, [id, setMovie]);

  if (error) return <div>{error}</div>;

  return movie ? <MovieView movie={movie} /> : <div>Loading</div>;
};

const MovieView = ({ movie }) => {
  const { Poster, Title, Price, Plot } = movie;
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Card className={classes.card} elevation={3}>
        <CardMedia
          className={classes.poster}
          component='img'
          image={Poster}
          title={Title}
          alt={Title + ' Poster'}
        />
        <CardContent>
          <CardContent>
            <Typography variant='h6' component='h6'>
              {Title}
            </Typography>
          </CardContent>
          <CardContent>
            <Typography variant='p' gutterBottom>
              {Plot}
            </Typography>

            <Prices priceData={Price} />
          </CardContent>
        </CardContent>
      </Card>
      <Link to='/movies' className={classes.backButton}>
        <Button variant='contained' color='primary'>
          Back to catalogue
        </Button>
      </Link>
    </div>
  );
};

const Prices = ({ priceData }) => {
  const tableData = Object.entries(priceData).map(([source, price]) => (
    <TableRow key={source}>
      <TableCell>{source}</TableCell>
      <TableCell>${price}</TableCell>
    </TableRow>
  ));
  return <Table>{tableData}</Table>;
};

export default DetailedMovieCard;
