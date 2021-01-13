import React from 'react';
import './App.scss';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Categories from './components/Categories/Categories';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <div className="app-header">
          <Header />
        </div>
        <div className="app-wrapper">
          <div className="app-content">
            <div>
              <Route exact path="/" component={Main}/>
              <Route path="/categories" component={Categories}/>
            </div>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
