import React, { useState, useEffect, useCallback } from 'react';
import { RouteComponentProps } from 'react-router';
import { Monument } from '../../entities/monument';
import { Typography, Container, makeStyles, CardMedia } from '@material-ui/core';
import { useSelector } from 'react-redux';

interface Props extends RouteComponentProps<{ id: string }> { }

const useStyles = makeStyles({
  container: {
    textAlign: 'center',
    marginTop: '15px'
  },
  media: {
    width: '33%',
  }
});

export function MonumentPage(props: Props) {
  const classes = useStyles({});
  const id = props.match.params.id;

  const monuments: Monument[] = useSelector((state: any) => state.monuments.monuments);
  const monument = monuments.find(m => m.id == id);

  return monument && (
    <Container maxWidth='md' className={classes.container}>
      <Typography variant='h5'>{monument.name}</Typography>
      <Typography variant='subtitle1'>
        Координати: [{monument.latitude}, {monument.longitude}]
      </Typography>
      <CardMedia component='img'
        alt={monument.name}
        image={monument.image} />
    </Container>
  );
}