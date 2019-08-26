import {
  GoogleMapProvider,
  InfoWindow,
  MapBox,
  Marker
} from '@googlemap-react/core'
import React, { useState, useEffect } from 'react';
import { MonumentsTitle } from './monuments-title';
import { getData } from '../../../monuments-data';

export function MonumentsMap() {
  const monuments = getData();
  const [selectedMonument, setSelectedMonument] = useState(null);

  function infowindow() {
    return selectedMonument && <InfoWindow
      opts={{
        content: `${selectedMonument.title}`,
        position: {
          lat: parseFloat(`${selectedMonument.latitude}`),
          lng: parseFloat(`${selectedMonument.longitude}`)
        },
      }}
      visible
    />
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
            height: '50vh',
            width: '100%',
          }}
          useDrawing
          useGeometry
          usePlaces
          useVisualization
        />
        {monuments.map((monument) => {
          return (
            <Marker key={monument.id}
              id={`marker-${monument.id}`}
              opts={{
                title: `${monument.title}`,
                draggable: true,
                label: '',
                position: {
                  lat: parseFloat(`${monument.latitude}`),
                  lng: parseFloat(`${monument.longitude}`)
                },
              }}
              onClick={() => {
                setSelectedMonument(monument);
              }}
            />
          )
        })}
        {infowindow()}
      </GoogleMapProvider>
    </>
  )
}