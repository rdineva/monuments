import { RouteComponentProps } from 'react-router';
import { useDispatch } from 'react-redux';
import React, { useEffect } from 'react';
import useAppState from '../../hooks/use-app-state';
import { selectMonument } from '../../store/monuments/actions';
import MonumentPageComponent from '../../components/monument/monument-page';

export function MonumentPage(props: RouteComponentProps<{ id: string }>) {
  const { id } = props.match.params;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(selectMonument(id));
  }, []);

  const monument = useAppState((state) => state.monuments.selectedMonument);

  return <MonumentPageComponent monument={monument} />;
}
