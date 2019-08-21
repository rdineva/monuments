import React from 'react';
import { TextField } from '@material-ui/core';

interface Props {
    onChange: (value: string) => void;
    id: string;
    type: string;
    placeholder: string;
    label: string;
}

export function MonumentInput(props: Props) {
    return (
        <TextField 
            margin="normal"
            label={props.label}
            type={props.type}
            id={props.id}
            onChange={event => props.onChange(event.target.value)}
            placeholder={props.placeholder}
        />
    );
}