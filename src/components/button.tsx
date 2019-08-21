import React, { useState, useEffect } from "react";
import { Redirect } from "react-router";
import Button from '@material-ui/core/Button';

interface Props {
    path: string;
    type: string;
}

export function CustomButton(props: Props) {
    const [redirect, setRedirect] = useState(null);

    useEffect(() => {
        setRedirect(null);
    });

    function onCreateClick() {
        setRedirect(<Redirect to={`${props.path}`} push/>);
    }

    return redirect || (
        <Button size='large' color="inherit" onClick={() => onCreateClick()}>{props.type}</Button>
    );
}