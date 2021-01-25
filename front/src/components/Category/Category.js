import React from 'react';
import './Category.scss';

function Category(props) {
  return (
    <li className="category" onClick={ () => { props.getExpensesByCategory(props.category) }}>
      <div className="category__icon">
        <svg width="100" height="100">
          <use href={`/sprite.svg#${props.category}`}></use>
        </svg>
      </div>
      <p className="category__name">{props.name}</p>
    </li>
  );
}

export default Category;