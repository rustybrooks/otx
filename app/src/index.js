import React from "react";
import ReactDOM from "react-dom";

import { ConnectedRouter } from 'connected-react-router'

import { createBrowserHistory } from 'history'
import { connectRouter, routerMiddleware } from 'connected-react-router'

import App from './App'

// Create a history of your choosing (we're using a browser history in this case)
const history = createBrowserHistory();



const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(
  connectRouter(history)(rootReducer),
  composeEnhancer(
    applyMiddleware(
      routerMiddleware(history),
      thunkMiddleware,
    ),
  ),
)


ReactDOM.render(
  <Provider store={store}>
    {/* ConnectedRouter will use the store from Provider automatically */}
    <ConnectedRouter history={history}>
        <App/>
    </ConnectedRouter>
  </Provider>,
  document.getElementById("root")
)
// registerServiceWorker();



