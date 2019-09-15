import { useDispatch } from 'react-redux';
import React, { useEffect } from 'react';
import useAppState from '../../hooks/use-app-state';
import { loadMonuments } from '../../store/monuments/actions';
import MonumentsListComponent from '../../components/monument/monuments-list';

export function MonumentsList() {
  const monuments = useAppState((state) => state.monuments.monuments);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadMonuments());
  }, []);

  return (
    <MonumentsListComponent
      monuments={monuments}
    />
  );
}
