import { useState } from 'react';
import React from 'react';
import { Button, makeStyles, TextField } from '@material-ui/core';
import { createMonument } from '../../store/monuments/actions';
import { useDispatch } from 'react-redux';

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

    const [statueTitle, setStatueTitle] = useState('');
    const [publicFigure, setPublicFigure] = useState('');
    const [inscription, setInscription] = useState('');
    const [latitude, setLatitude] = useState('');
    const [longitude, setLongitude] = useState('');

    const dispatch = useDispatch();

    return (
        <div className={classes.form}>
            <div >
                <h1>Създай Паметник</h1>
                <div>
                    <TextField
                        name='name'
                        margin='normal'
                        label='Име'
                        type='text'
                        id='name'
                        placeholder='Въведи име...'
                        onChange={event => setStatueTitle(event.target.value)}
                    />
                </div>
                <div>
                    <TextField
                        name='inscription'
                        margin='normal'
                        label='Надпис'
                        type='text'
                        id='inscription'
                        placeholder='Въведи надпис...'
                        onChange={event => setInscription(event.target.value)} />
                </div>
                <div>
                    <TextField
                        name='latitude'
                        margin='normal'
                        label='Ширина'
                        type='text'
                        id='latitude'
                        placeholder='Въведи ширина...'
                        onChange={event => setLatitude(event.target.value)} />
                </div>
                <div>
                    <TextField
                        name='longitude'
                        margin='normal'
                        label='Дължина'
                        type='text'
                        id='longitude'
                        placeholder='Въведи дължина...'
                        onChange={event => setLongitude(event.target.value)} />
                </div>
                <div>
                    <TextField
                        name='publicFigure'
                        margin='normal'
                        label='Публична Личност'
                        type='text'
                        id='publicFigure'
                        placeholder='Въведи публична личност...'
                        onChange={event => setPublicFigure(event.target.value)} />
                </div>
                <div>
                    <Button
                        type='submit'
                        className={classes.button}
                        variant='outlined'
                        color='inherit'
                        onClick={() => {
                            let body = {
                                'name': statueTitle,
                                'inscription': inscription,
                                'latitude': latitude,
                                'longitude': longitude,
                                'publicFigure': publicFigure,
                            };

                            dispatch(createMonument(body));
                        }
                        }
                    >Създай
                    </Button>
                </div>
            </div>
        </div>
    );
}