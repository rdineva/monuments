import React, { useState } from 'react';
import { Button, makeStyles, TextField } from '@material-ui/core';
import { Redirect } from 'react-router';
import { Monument } from '../../entities/monument';

interface Props {
    onCreateClick(body: any): void;
    createdMonument: Monument;
}

const useStyles = makeStyles({
  form: {
    textAlign: 'center',
    marginLeft: '2px',
  },
  button: {
    marginTop: '10px',
  },
});

export default function MonumentCreate(props: Props) {
  const classes = useStyles({});
  const [statueName, setStatueName] = useState('');
  const [publicFigure, setPublicFigure] = useState('');
  const [inscription, setInscription] = useState('');
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  const [onCreatedRedirect, setOnCreatedRedirect] = useState(null);

  if (props.createdMonument && !onCreatedRedirect) {
    setOnCreatedRedirect(<Redirect to={`/monuments/${props.createdMonument.id}`} push />);
  }

  return onCreatedRedirect || (
  <div className={classes.form}>
    <div>
      <h1>Създай Паметник</h1>
      <div>
        <TextField
          name="name"
          margin="normal"
          label="Име"
          type="text"
          id="name"
          placeholder="Въведи име..."
          onChange={(event) => setStatueName(event.target.value)}
        />
      </div>
      <div>
        <TextField
          name="inscription"
          margin="normal"
          label="Надпис"
          type="text"
          id="inscription"
          placeholder="Въведи надпис..."
          onChange={(event) => setInscription(event.target.value)}
        />
      </div>
      <div>
        <TextField
          name="latitude"
          margin="normal"
          label="Ширина"
          type="text"
          id="latitude"
          placeholder="Въведи ширина..."
          onChange={(event) => setLatitude(event.target.value)}
        />
      </div>
      <div>
        <TextField
          name="longitude"
          margin="normal"
          label="Дължина"
          type="text"
          id="longitude"
          placeholder="Въведи дължина..."
          onChange={(event) => setLongitude(event.target.value)}
        />
      </div>
      <div>
        <TextField
          name="publicFigure"
          margin="normal"
          label="Публична Личност"
          type="text"
          id="publicFigure"
          placeholder="Въведи публична личност..."
          onChange={(event) => setPublicFigure(event.target.value)}
        />
      </div>
      <div>
        <Button
          type="submit"
          className={classes.button}
          variant="outlined"
          color="inherit"
          onClick={() => {
            const body = {
              name: statueName,
              inscription,
              latitude,
              longitude,
              publicFigure,
            };

            props.onCreateClick(body);
          }}
        >
Създай
        </Button>
      </div>
    </div>
  </div>
  );
}
