import React, { useState, useEffect, useCallback } from 'react';
import { Monument } from '../../entities/monument';
import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { MonumentCard } from './monument-card';
import { MonumentsTitle } from './monuments-title';
import { useSelector, useDispatch } from 'react-redux';
import { loadMonuments } from '../../store/monuments/actions';

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
  const monuments: Monument[] = useSelector((state: any) => state.monuments.monuments);
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