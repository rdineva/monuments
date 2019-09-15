import { useDispatch } from 'react-redux';
import React from 'react';
import { selectMonument } from '../../store/monuments/actions';
import MonumentCardComponent from '../../components/monument/monument-card';

interface Props {
  id: string;
  image: string;
  title: string;
}

export function MonumentCard({ id, image, title }: Props) {
  const dispatch = useDispatch();

  function onMonumentSelect() {
    dispatch(selectMonument(id));
  }

  return (
    <MonumentCardComponent
      onMonumentSelect={onMonumentSelect}
      id={id}
      image={image}
      title={title}
    />
  );
}
