import { useAppState } from "../../hooks/use-app-state";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { loadMonuments } from "../../store/monuments/actions";
import { MonumentsList as MonumentsListComponent } from '../../components/monument/monuments-list';
import React from "react";

export function MonumentsList() {
  const monuments = useAppState(state => state.monuments.monuments);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadMonuments());
  }, []);

  return <MonumentsListComponent
    monuments={monuments} 
  />
}