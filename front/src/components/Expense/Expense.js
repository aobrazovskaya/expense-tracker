import React from 'react';
import './Expense.scss';

function Expense(props) {
  return (
    <li className="expense">
      <div className="expense__category">
        <svg width="60" height="60">
          <use href={`/sprite.svg#${props.category}`}></use>
        </svg>
      </div>
      <p className="expense__title">{props.title}</p>
      <p className="expense__price">{`$ ${props.price}`}</p>
    </li>
  );
}

export default Expense;