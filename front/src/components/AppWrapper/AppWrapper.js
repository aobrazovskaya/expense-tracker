import React from 'react';
import './AppWrapper.scss';
import Header from '../Header/Header';

function AppWrapper(props) {
  return (
    <div>
      <div className="app-header">
        <Header />
      </div>
      <div className="app-wrapper">
        <div className="app-content">
          <div>
            { props.children }
          </div>
        </div>
      </div>
    </div>
  );
}

export default AppWrapper;