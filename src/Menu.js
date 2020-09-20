import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import { makeStyles } from '@material-ui/core/styles';
import Slide from '@material-ui/core/Slide';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  menuButton: {
    color: 'white',
    '&:hover': {
      color: 'white',
    },
  },
});

function HideOnScroll({ children }) {
  const trigger = useScrollTrigger({ target: window });
  return (
    <Slide appear={false} direction='down' in={!trigger}>
      {children}
    </Slide>
  );
}

export default function HideAppBar(props) {
  const classes = useStyles();
  return (
    <>
      <CssBaseline />
      <HideOnScroll {...props}>
        <AppBar>
          <Toolbar>
            <Link to='/movies' className={classes.menuButton}>
              <Typography variant='h6'>Prince's Theatre</Typography>
            </Link>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Toolbar />
    </>
  );
}
