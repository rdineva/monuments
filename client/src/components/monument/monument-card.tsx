import React, { useState } from 'react';
import {
  Card, CardActionArea, CardMedia, CardContent, Typography, CardActions, Button, makeStyles,
} from '@material-ui/core';
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
    flexDirection: 'column',
  },
  cardActions: {
    alignSelf: 'end',
  },
});

export default function MonumentCard({
  id, image, title, onMonumentSelect,
}: Props) {
  const classes = useStyles({});
  const [redirect, setRedirect] = useState(null);

  return redirect || (
    <Card
      className={classes.card}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          alt={title}
          height="140"
          image={image}
          title={title}
        />
        <CardContent>
          <Typography
            variant="h5"
            component="h2"
          >
            {title}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions
        className={classes.cardActions}
      >
        <Button
          onClick={() => {
            onMonumentSelect();
            setRedirect(<Redirect to={`/monuments/${id}`} push />);
          }}
          variant="contained"
          color="primary"
          className={classes.button}
        >
          Виж Повече
        </Button>
      </CardActions>
    </Card>
  );
}
