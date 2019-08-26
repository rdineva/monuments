import React, { useState, useEffect, useCallback } from 'react';
import { RouteComponentProps } from 'react-router';
import { Monument } from '../../store/monument';
import { store } from '../../store/store';
import { Typography, Container, makeStyles, CardMedia } from '@material-ui/core';

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
  return <></>;
//   const classes = useStyles({});
//   const id = props.match.params.id;
//   const [monument, setMonument] = useState<Monument>(null);
//   const observer = useCallback(() => setMonument(store.data.monument)), []);

//   useEffect(() => {
//     setMonument(store.data.monument);
//     store.addObserver(observer);
//     store.loadMonumentById(id);

//     return () => store.removeObserver(observer);
//   }, []);

//   return monument && (
//     <Container maxWidth='md' className={classes.container}>
//       <Typography variant='h5'>{monument.name}</Typography>
//       <Typography variant='subtitle1'>
//         Координати: [{monument.latitude}, {monument.longitude}]
//       </Typography>
//       <CardMedia component='img'
//         alt={monument.name}
//         image={monument.image} />
//     </Container>
//   );
//   return <></>;
}