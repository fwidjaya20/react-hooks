import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ExampleUseStateHook from './use-state';
import ExampleUseEffectHook from './use-effect';
import ExampleUseContextHook from './use-context';
import ExampleUseReducerHook from "./use-reducer";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/use-state" component={ExampleUseStateHook} />
        <Route path="/use-effect" component={ExampleUseEffectHook} />
        <Route path="/use-context" component={ExampleUseContextHook} />
        <Route path="/use-reducer" component={ExampleUseReducerHook} />
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
