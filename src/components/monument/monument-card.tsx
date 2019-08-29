import React, { useState } from 'react';
import { Card, CardActionArea, CardMedia, CardContent, Typography, CardActions, Button, makeStyles } from '@material-ui/core';
import { Redirect } from 'react-router';

interface Props {
  onMonumentSelect(): void,
  id: string;
  image: string;
  title: string;
}

const useStyles = makeStyles({
  button: {
    alignSelf: 'end',
    backgroundColor: 'black',
  },
  card: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'column'
  },
  cardActions: {
    alignSelf: 'end',
  }
});

export function MonumentCard(props: Props) {
  const classes = useStyles({});
  const [redirect, setRedirect] = useState(null);

  return redirect || (
    <Card
      className={classes.card}>
      <CardActionArea>
        <CardMedia
          component='img'
          alt={props.title}
          height='140'
          image={props.image}
          title={props.title}
        />
        <CardContent>
          <Typography
            variant='h5'
            component='h2'
          >{props.title}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions
        className={classes.cardActions}>
        <Button
          onClick={() => {
            props.onMonumentSelect();
            setRedirect(<Redirect to={`/monuments/${props.id}`} push />);
          }}
          variant='contained'
          color='primary'
          className={classes.button}
        >Виж Повече
          </Button>
      </CardActions>
    </Card>
  );
}