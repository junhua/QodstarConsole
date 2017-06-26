import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import LoginPage from './components/login_page';
import JobsListPage from './components/jobs_page';
// import HomePage from './components/home_page';

import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
          <BrowserRouter>
              <div>
                  <Switch>
                      <Route path="/jobs" component={JobsListPage} />
                      <Route path="/" component={LoginPage} />
                      {/* <Route path="/" component={Home} /> */}
                  </Switch>
              </div>
          </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
