import React, { useEffect } from 'react';
import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { MonumentCard } from './monument-card';
import { MonumentsTitle } from './monuments-title';
import { loadMonuments } from '../../store/monuments/actions';
import { useDispatch } from 'react-redux';
import { useAppState } from '../../hooks/use-app-state';

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
  const classes = useStyles({});
  const monuments = useAppState(state => state.monuments.monuments);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadMonuments());
  }, []);

  return (
    <>
      <MonumentsTitle />
      <Container 
        maxWidth='md' 
        className={classes.container}>
          {monuments.map((monument) => 
            <MonumentCard 
              key={monument.id} 
              id={monument.id} 
              title={monument.name} 
              image={monument.image} 
            />
          )}
      </Container>
    </>
  );
}