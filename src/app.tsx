import React from 'react';
import { MonumentForm } from './components/monument/monument-create';
import { MonumentsList } from './components/monument/monuments-list';
import { CustomAppBar } from './components/app-bar';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { MonumentPage } from './components/monument/monument-page';
import { CssBaseline } from '@material-ui/core';

export function App() {
  return (
    <>
      <BrowserRouter>
        <CssBaseline />
        <CustomAppBar />
        <Switch>
          <Route path='/monuments/create' exact component={MonumentForm} />
          <Route path='/monuments/:id' exact component={MonumentPage} />
          <Route path='/' exact component={MonumentsList} />
        </Switch>
      </BrowserRouter>
    </>
  );
}