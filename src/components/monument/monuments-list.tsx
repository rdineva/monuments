import React, { useState, useEffect, useCallback } from 'react';
import { Monument } from '../../store/monument';
import { store } from '../../store/store';
import { Container, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { MonumentCard } from './monument-card';
import { MonumentsTitle } from './monuments-title';

const useStyles = makeStyles({
  container: {
    display: 'grid',
    gridTemplateColumns: 'auto auto auto',
    gridGap: '10px',
    marginTop: '15px',
    marginBottom: '35px'
  },
  title: {
    textAlign: 'center',
    margin: '20px'
  }
});

export function MonumentsList() {
  const [monuments, setMonuments] = useState<Monument[]>([]);
  const classes = useStyles({});
  const observer = useCallback(() => setMonuments(store.data.monuments), []);

  useEffect(() => {
    setMonuments(store.data.monuments);
    store.addObserver(observer);
    store.loadMonuments();

    return function cleanup() {
      store.removeObserver(observer);
    }
  }, []);

  return (
    <>
      <MonumentsTitle />
      <Container maxWidth='md' className={classes.container}>
        {monuments.map((monument) => <MonumentCard key={monument.id} id={monument.id} title={monument.title} image={monument.image} />)}
      </Container>
    </>
  );
}