import { useState } from "react";
import { useDispatch } from "react-redux";
import { useAppState } from "../../hooks/use-app-state";
import { Redirect } from "react-router";
import { MonumentCreate as MonumentCreateComponent } from '../../components/monument/monument-create';
import { createMonument } from "../../store/monuments/actions";
import React from 'react';

export function MonumentCreate() {
    const dispatch = useDispatch();
    const createdMonument = useAppState(state => state.monuments.createdMonument);

    function onCreateClick(body: any) {
        dispatch(createMonument(body));
    }

    return <MonumentCreateComponent
        onCreateClick={onCreateClick}
        createdMonument={createdMonument}
    />
}