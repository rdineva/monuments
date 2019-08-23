import React, { useState, useEffect, useCallback } from 'react';
import { RouteComponentProps } from 'react-router';
import { Monument } from '../../store/monument';
import { store } from '../../store/store';
import { Typography, Container, makeStyles, CardMedia } from '@material-ui/core';

interface Props extends RouteComponentProps<{ id: string }> {

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

export function MonumentPage(props: Props) {
  const classes = useStyles({});

  const id = props.match.params.id;
  const [monument, setMonument] = useState<Monument>(null);

  function findMonument() {
      return store.data.monuments.find(m => m.id === id);
  }

  const observer = useCallback(() => setMonument(findMonument()), []);

  useEffect(() => {
      setMonument(findMonument());
       store.addObserver(observer);
      store.loadMonuments();
      return () => store.removeObserver(observer);
  }, []);

  return monument && (
    <Container maxWidth='md' className={classes.container}>
      <Typography variant='h5'>{monument.title}</Typography>
      <Typography variant='subtitle1'>Координати: [{monument.latitude}, {monument.longitude}]</Typography>
      <CardMedia component='img' 
        alt={monument.title}
        image={monument.image} />
    </Container>
  );
}