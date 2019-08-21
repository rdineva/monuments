import React, { useRef, useState } from 'react';
import { Card, CardActionArea, CardMedia, CardContent, Typography, CardActions, Button, makeStyles } from '@material-ui/core';
import { Redirect } from 'react-router';

interface Props {
  id: string;
  image: string;
  title: string;
}

const useStyles = makeStyles({
  button: {
    //TODO: align right
    alignContent: 'right',
    backgroundColor: 'black',
  }
});

export function MonumentCard(props: Props) {
  const classes = useStyles({});

  const ref = useRef<HTMLButtonElement>();
  const [redirect, setRedirect] = useState(null);

  function onMonumentClick(props: Props) {
    setRedirect(<Redirect to={`/monuments/${props.id}`} push />);
  }

  return redirect || (
    <Card ref={ref}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt={props.title}
          height="140"
          image={props.image}
          title={props.title}
        />
        <CardContent>
          <Typography variant="h5" component="h2">
            {props.title}         
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button onClick={() => onMonumentClick(props)} 
          variant="contained" 
          color="primary" className={classes.button}>
            Виж Повече
        </Button>
      </CardActions>
    </Card>
  );
}