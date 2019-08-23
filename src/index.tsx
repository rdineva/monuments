import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './app';

const theme = {
    button: {
      backgroundColor: "white",
      borderColor: "red",
      color: "blue"
    }
  };

ReactDOM.render(<App />, document.getElementById('app'));