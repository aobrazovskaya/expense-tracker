import React, { useRef } from 'react';
import './ExpenseOptions.scss';
import useOutsideClick from '../../../hooks/click-otside';

function ExpenseOptions(props) {
  const wrapperRef = useRef(null);

  function hideExpenseOptions() {
    props.hideOptions();
  }

  useOutsideClick(wrapperRef, hideExpenseOptions);

  return (
    <ul ref={wrapperRef} className="expense-options">
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