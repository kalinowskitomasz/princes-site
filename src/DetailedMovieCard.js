import React, { useState, useEffect } from 'react';
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import styled from 'styled-components';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
} from 'react-router-dom';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import api from './apiRequest';

const useStyles = makeStyles({
  root: {
    maxWidth: '800px',
    display: 'flex',
  },
  container: {
    display: 'flex',
    justifyContent: 'center',
  },
  poster: {
    maxWidth: 350,
  },
});

const DetailedMovieCard = ({}) => {
  const { id } = useParams();

  const [movie, setMovie] = useState(null);
  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const payload = await api.get(`movie/${id}`).json();
        console.log('PAYLOAD', payload);
        setMovie(payload);
      } catch (err) {
        console.log(err);
      }
    };
    fetchMovie();
  }, [id, setMovie]);

  return movie ? <MovieView movie={movie} /> : <div>Placeholder</div>;
};

const MovieView = ({ movie }) => {
  const { Poster, Title, Price } = movie;
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Card className={classes.root} elevation={3}>
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
            <Typography variant='h6' component='h6'>
              Available on:
            </Typography>
            <Prices priceData={Price} />
          </CardContent>
        </CardContent>
      </Card>
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
