import React from 'react';
import './Main.scss';
import Expenses from '../Expenses/Expenses';

function Header() {
  return (
    <div className="main-page">
      <Expenses />
    </div>
  );
}

export default Header;