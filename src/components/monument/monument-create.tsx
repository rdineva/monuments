import { useState } from 'react';
import React from 'react';
import { Button, makeStyles, TextField } from '@material-ui/core';

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
    
    const [statueName, setStatueName] = useState('Statue');
    const [publicFigure, setPublicFigure] = useState('Public Figure');
    const [inscription, setInscription] = useState('Inscription');
    const [latitude, setLatitude] = useState('Latitude');
    const [longitude, setLongitude] = useState('Longitude');

    return (
        <div className={classes.form}>
            <form noValidate>
                <h1>Създай Паметник</h1>
                <div>
                    <TextField
                        margin='normal'
                        label='Име'
                        type='text'
                        id='name'
                        placeholder='Въведи име...'
                        onChange={(event) => setStatueName(event.target.value)} />
                </div>
                <div>
                    <TextField
                        margin='normal'
                        label='Надпис'
                        type='text'
                        id='inscription'
                        placeholder='Въведи надпис...'
                        onChange={(event) => setInscription(event.target.value)} />
                </div>
                <div>
                    <TextField
                        margin='normal'
                        label='Ширина'
                        type='text'
                        id='latitude'
                        placeholder='Въведи ширина...'
                        onChange={(event) => setLatitude(event.target.value)} />
                </div>
                <div>
                    <TextField
                        margin='normal'
                        label='Дължина'
                        type='text'
                        id='longitude'
                        placeholder='Въведи дължина...'
                        onChange={(event) => setLongitude(event.target.value)} />
                </div>
                <div>
                    <TextField
                        margin='normal'
                        label='Публична Личност'
                        type='text'
                        id='publicFigure'
                        placeholder='Въведи публична личност...'
                        onChange={(event) => setPublicFigure(event.target.value)} />
                </div>
                <div>
                    <Button className={classes.button} variant='outlined' color='inherit'>Създай</Button>
                </div>
            </form>
        </div>
    );
}