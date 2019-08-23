import React from "react";
import { makeStyles } from "@material-ui/styles";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles({
  title: {
    textAlign: 'center',
    margin: '20px'
  }
});

export function MonumentsTitle() {
  const classes = useStyles({});

  return (
    <>
      <Typography className={classes.title} variant='h4'>Паметници в Борисовата Градина</Typography>
    </>
  );
}