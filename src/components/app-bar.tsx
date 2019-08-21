import React, { useRef } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AppBar from '@material-ui/core/AppBar';
import { Beenhere } from '@material-ui/icons';
import { CustomButton } from './button';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    icon: {
      marginRight: theme.spacing(1),
    }
  }),
);

export function CustomAppBar() {
  const classes = useStyles({});
  const ref = useRef<HTMLButtonElement>();

  return (
    <>
      <div className={classes.root}>
        <AppBar ref={ref} position="static" color="default">
          <Toolbar>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
            <Beenhere className={classes.icon} />
            <Typography variant="h6" className={classes.title}>
              <CustomButton path='/' type='Monuments'/>
            </Typography>
            <CustomButton path='/monuments/create' type='Create' />
          </Toolbar>
        </AppBar>
      </div>
    </>
  );
}
