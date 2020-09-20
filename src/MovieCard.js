import React from 'react';
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    width: '250px',
  },
});

const MovieCard = ({ title, poster, id }) => {
  const classes = useStyles();
  return (
    <Card className={classes.root} elevation={3}>
      <CardActionArea>
        <Link to={`/movie/${id}`}>
          <CardMedia
            component='img'
            image={poster}
            title={title}
            alt={title + ' Poster'}
          />
          <CardContent>
            <CardContent>
              <Typography variant='h6' component='h6'>
                {title}
              </Typography>
            </CardContent>
          </CardContent>
        </Link>
      </CardActionArea>
    </Card>
  );
};

export default MovieCard;
