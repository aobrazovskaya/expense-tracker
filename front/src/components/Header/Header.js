import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.scss';

function Header() {
  return (
    <div className="header">
      <nav>
        <ul>
          <li>
            <NavLink to="/">Мои финансы</NavLink>
          </li>
          <li>
            <NavLink to="/categories">Категории</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;