import React, { useState } from 'react';
import './Expense.scss';
import { AiOutlineMore } from "react-icons/ai";
import ExpenseOptions from "./ExpenseOptions/ExpenseOptions";

function Expense(props) {
  let [isOptions, setIsOptions] = useState(false);

  function handleOptionsClick() {
    setIsOptions(true);
  }

  function hideOptions() {
    setIsOptions(false);
  }

  return (
    <li className="expense">
      <div className="expense__category">
        <svg width="60" height="60">
          <use href={`/sprite.svg#${ props.item.category }`}></use>
        </svg>
      </div>
      <p className="expense__title">{ props.item.title }</p>
      <p className="expense__price">{`$ ${ props.item.price }`}</p>
      <button onClick={ handleOptionsClick }>
        <AiOutlineMore />
      </button>
      { isOptions && <ExpenseOptions props={ props } hideOptions={ hideOptions } /> }
    </li>
  );
}

export default Expense;