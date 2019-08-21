import { useState } from 'react';
import React from 'react';
import { MonumentInput } from './monument-input';
import { Button, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    form: {
        textAlign: 'center', 
        marginLeft: '2px'
    },
    button: {
        marginTop: '10px'
    }
});

export function MonumentForm() {
    const classes = useStyles({});

    const [title, setStatueTitle] = useState('Statue');
    const [publicFigure, setPublicFigure] = useState('Public Figure');
    const [inscription, setInscription] = useState('Inscription');
    const [latitude, setLatitude] = useState('Latitude');
    const [longitude, setLongitude] = useState('Longitude');

    return (
        <div className={classes.form}>
            <form noValidate>
                <h1>Create Monument</h1>
                <div>
                    <MonumentInput label="Title" type="text" id="title" placeholder="Enter title..." onChange={setStatueTitle} />
                </div>
                <div>
                    <MonumentInput label="Inscription" type="text" id="inscription" placeholder="Enter inscription..." onChange={setInscription} />
                </div>
                <div>
                    <MonumentInput label="Latitude" type="text" id="latitude" placeholder="Enter latitude..." onChange={setLatitude} />
                </div>
                <div>
                    <MonumentInput label="Longitude" type="text" id="longitude" placeholder="Enter longitude..." onChange={setLongitude} />
                </div>
                <div>
                    <MonumentInput label="Public Figure" type="text" id="publicFigure" placeholder="Enter public figure..." onChange={setPublicFigure} />
                </div>
                <div>
                    <Button className={classes.button} variant="outlined" color="inherit">Create Monument</Button>
                </div>
            </form>
        </div>
    );
}