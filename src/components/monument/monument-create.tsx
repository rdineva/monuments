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
                <h1>Създай Паметник</h1>
                <div>
                    <MonumentInput label='Име' type='text' id='title' placeholder='Въведи име...' onChange={setStatueTitle} />
                </div>
                <div>
                    <MonumentInput label='Надпис' type='text' id='inscription' placeholder='Въведи надпис...' onChange={setInscription} />
                </div>
                <div>
                    <MonumentInput label='Ширина' type='text' id='latitude' placeholder='Въведи ширина...' onChange={setLatitude} />
                </div>
                <div>
                    <MonumentInput label='Дължина' type='text' id='longitude' placeholder='Въведи дължина...' onChange={setLongitude} />
                </div>
                <div>
                    <MonumentInput label='Публична Личност' type='text' id='publicFigure' placeholder='Въведи публична личност...' onChange={setPublicFigure} />
                </div>
                <div>
                    <Button className={classes.button} variant='outlined' color='inherit'>Създай</Button>
                </div>
            </form>
        </div>
    );
}