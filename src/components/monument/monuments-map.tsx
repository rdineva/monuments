import {
  GoogleMapProvider,
  MapBox,
  Marker
} from '@googlemap-react/core'
import React, { useState } from 'react';
import { MonumentsTitle } from './monuments-title';
import { getData } from '../../../monuments-data';
import Drawer from '@material-ui/core/Drawer';
import { makeStyles } from '@material-ui/styles';
import { Typography, CardMedia, Container } from '@material-ui/core';

const useStyles = makeStyles({
  container: {
    position: 'absolute',
    top: '40%',
    left: '50%',
    transform: 'translate(-50%, -50%)'
  },
  drawerBody: {
    width: 400,
    textAlign: 'center',
    alignItems: 'center'
  },
  image: {
    marginTop: '20px',
    marginBottom: '20px'
  }
});

export function MonumentsMap() {
  const classes = useStyles({});
  const monuments = getData();
  const [selectedMonument, setSelectedMonument] = useState(null);
  const [state, setState] = useState(false);

  const toggleDrawer = (open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (event.type === 'keydown') {
        return;
      }

      setState(open);
    };

  function OpenDrawer() {
    return selectedMonument && (
      <Drawer anchor='right' open={state} onClose={toggleDrawer(false)} >
        <div className={classes.drawerBody}>
          <Container className={classes.container}>
            <Typography
              variant='h5'>
              {selectedMonument.name}
            </Typography>
            <CardMedia
              component='img'
              alt={selectedMonument.name}
              image={selectedMonument.image}
              className={classes.image}
            />
            <Typography
              variant='body1'>
              <div>
                Координати:
              </div>
              <div>
                [{selectedMonument.latitude}, {selectedMonument.longitude}]
              </div>
            </Typography>
          </Container>
        </div>
      </Drawer>
    );
  }

  function MonumentMarkers(selectedMonument: any) {
    return (
      <Marker key={selectedMonument.id}
        id={`marker-${selectedMonument.id}`}
        opts={{
          title: `${selectedMonument.name}`,
          draggable: true,
          label: '',
          position: {
            lat: parseFloat(`${selectedMonument.latitude}`),
            lng: parseFloat(`${selectedMonument.longitude}`)
          },
        }}
        onClick={async () => {
          await setSelectedMonument(selectedMonument);
          setState(true);
        }}
      />
    );
  }

  return (
    <>
      <MonumentsTitle />
      <GoogleMapProvider>
        <MapBox
          apiKey="AIzaSyDu2TgOFkyODTM_h9l59fzQ_6ybd6A5mPs"
          opts={{
            center: { lat: 42.684248, lng: 23.339620 },
            zoom: 15,
          }}
          style={{
            height: '80vh',
            width: '100%',
          }}
        />
        {monuments.map((selectedMonument) => MonumentMarkers(selectedMonument))}
      </GoogleMapProvider>
      {OpenDrawer()}
    </>
  )
}