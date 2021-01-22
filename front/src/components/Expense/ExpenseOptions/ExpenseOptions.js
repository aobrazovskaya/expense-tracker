import React from 'react';
import './ExpenseOptions.scss';

function ExpenseOptions(props) {
  console.log(props);
  return (
    <ul className="expense-options">
      <li>
        <button onClick={ () => { props.props.handleExpenseClick(props.props.item.id) }}>
          Редактировать
        </button>
      </li>
      <li>
        <button onClick={ () => { props.props.handleExpenseDelete(props.props.item.id) }}>
          Удалить
        </button>
      </li>
    </ul>
  );
}

export default ExpenseOptions;