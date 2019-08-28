import React from 'react';
import { MonumentForm } from './components/monument/monument-create';
import { MonumentsList } from './containers/monument/monuments-list';
import { CustomAppBar } from './components/app-bar';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { CssBaseline } from '@material-ui/core';
import { MonumentsMap } from './components/monument/monuments-map';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './store';
import { MonumentPage } from './containers/monument/monument-page';

const store = createStore(rootReducer, applyMiddleware(thunk));

export function App()  {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <CssBaseline />
        <CustomAppBar />
        <Switch>
          <Route path='/monuments/create' exact component={MonumentForm} />
          <Route path='/monuments/:id' exact component={MonumentPage} />
          <Route path='/monuments' exact component={MonumentsList} />
          <Route path='/' exact component={MonumentsMap} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}
