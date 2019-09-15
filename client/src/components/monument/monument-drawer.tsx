import React, { useState } from 'react';
import {
  Container, Typography, CardMedia, makeStyles,
} from '@material-ui/core';


const useStyles = makeStyles({
  container: {
    textAlign: 'center',
    marginTop: '15px',
  },
  media: {
    width: '33%',
  },
});


export function MonumentDrawer(monument: any) {
  const [state, setState] = useState(false);
  const classes = useStyles({});

  const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    if (event.type === 'keydown'
      && ((event as React.KeyboardEvent).key === 'Tab'
        || (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return;
    }

    setState(open);
  };

  const info = (
    <Container
      maxWidth="md"
      className={classes.container}
    >
      <Typography
        variant="h5"
      >
        {monument.name}
      </Typography>
      <Typography
        variant="subtitle1"
      >
        Координати: [
        {monument.latitude}
,
        {' '}
        {monument.longitude}
]
      </Typography>
      <CardMedia
        component="img"
        alt={monument.name}
        image={monument.image}
      />
    </Container>
  );

  return info;
}
