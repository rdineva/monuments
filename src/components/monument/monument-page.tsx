import React, { useEffect } from 'react';
import { RouteComponentProps } from 'react-router';
import { Typography, Container, makeStyles, CardMedia } from '@material-ui/core';
import { useAppState } from '../../hooks/use-app-state';
import { useDispatch } from 'react-redux';
import { selectMonument } from '../../store/monuments/actions';

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
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(selectMonument(id));
  }, []);

  const monument = useAppState(state => state.monuments.selectedMonument);

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