import { useDispatch } from "react-redux";
import { selectMonument } from "../../store/monuments/actions";
import { MonumentCard as MonumentCardComponent } from '../../components/monument/monument-card'
import React from "react";

interface Props {
  id: string;
  image: string;
  title: string;
}

export function MonumentCard(props: Props) {
  const dispatch = useDispatch();

  function onMonumentSelect() {
    dispatch(selectMonument(props.id));
  }

  return <MonumentCardComponent
    onMonumentSelect={onMonumentSelect}
    id={props.id}
    image={props.image}
    title={props.title}
  />;
}