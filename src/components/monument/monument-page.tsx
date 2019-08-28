import React from 'react';
import { Typography, Container, makeStyles, CardMedia } from '@material-ui/core';
import { Monument } from '../../entities/monument';

interface Props {
  monument: Monument
}

const useStyles = makeStyles({
  container: {
    textAlign: 'center',
    marginTop: '15px'
  },
  media: {
    width: '33%',
  }
});

export function MonumentPage({ monument }: Props) {
  const classes = useStyles({});

  return monument && (
    <Container
      maxWidth='md'
      className={classes.container}>
      <Typography
        variant='h5'>
        {monument.name}
      </Typography>
      <Typography
        variant='subtitle1'>
        Координати: [{monument.latitude}, {monument.longitude}]
      </Typography>
      <CardMedia
        component='img'
        alt={monument.name}
        image={monument.image}
      />
    </Container>
  );
}