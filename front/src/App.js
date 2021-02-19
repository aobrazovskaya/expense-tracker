import React from 'react';
import './App.scss';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AppWrapper from './components/AppWrapper/AppWrapper';
import Main from './components/Main/Main';
import Categories from './components/Categories/Categories';
import NotFoundPage from './components/NotFoundPage/NotFoundPage';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <AppWrapper>
              <Main/>
            </AppWrapper>
          </Route>
          <Route path="/categories">
            <AppWrapper>
            </AppWrapper>
          </Route>
          <Route component={ NotFoundPage } />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
