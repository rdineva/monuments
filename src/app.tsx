import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { CssBaseline } from '@material-ui/core';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import MonumentsMap from './components/monument/monuments-map';
import CustomAppBar from './components/app-bar';
import { MonumentsList } from './containers/monument/monuments-list';
import { MonumentCreate } from './containers/monument/monument-create';
import rootReducer from './store';
import { MonumentPage } from './containers/monument/monument-page';

const store = createStore(rootReducer, applyMiddleware(thunk));

export default function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <CssBaseline />
        <CustomAppBar />
        <Switch>
          <Route path="/monuments/create" exact component={MonumentCreate} />
          <Route path="/monuments/:id" exact component={MonumentPage} />
          <Route path="/monuments" exact component={MonumentsList} />
          <Route path="/" exact component={MonumentsMap} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}
