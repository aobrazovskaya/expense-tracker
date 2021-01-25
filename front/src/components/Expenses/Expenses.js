import React, { useState } from 'react';
import './Expenses.scss';
import Expense from '../Expense/Expense';
import NewExpense from '../NewExpense/NewExpense';
import axiosInstance from '../../http/httpInstance';
import { AiOutlinePlus } from "react-icons/ai";
import ExpenseEditor from "../Expense/ExpenseEditor/ExpenseEditor";

function Expenses(props) {
  const expenses = props.expenses;
  const [expenseIdEditor, setExpenseIdEditor] = useState('');
  const [isNewExpense, setIsNewExpense] = useState(false);

  function handleExpenseEditClick(expense) {
    axiosInstance.put('/newexpense', expense)
    .then((res) => {
      if (res.status === 200) {
        setExpenseIdEditor('');
        axiosInstance.get('/expenses')
          .then((response) => {
            props.updateExpensesList(response.data);
          });
      }
    });
  }

  function handleExpenseClick(id) {
    setExpenseIdEditor(id);
  }

  function handleExpenseDelete(id) {
    axiosInstance.delete(`/expenses/${id}`)
    .then((res) => {
      if (res.status === 200) {
        axiosInstance.get('/expenses')
          .then((response) => {
            props.updateExpensesList(response.data);
          });
      }
    });
  }

  //
  function addExpensesList(expenses) {
    return expenses.map((item) => {
      if (expenseIdEditor === item.id) {
        return <ExpenseEditor key={item.id} expense={item} handleExpenseEditClick={ handleExpenseEditClick } />
      } else {
        return <Expense key={item.id} item={item} handleExpenseClick={ handleExpenseClick } handleExpenseDelete={ handleExpenseDelete } />
      }
    });
  }

  function handleNewExpenseClick(newExpense) {
    setIsNewExpense(false);
    axiosInstance.post('/expenses', newExpense)
    .then((res) => {
      if (res.status === 200) {
        axiosInstance.get('/expenses')
          .then((response) => {
            props.updateExpensesList(response.data);
          });
      }
    });
  }

  return (
    <div className="expenses">
      <h2>Операции</h2>
      <div className="expenses__table">
        <ul className="expenses__list">
          { expenses.length ? addExpensesList(expenses) : 'Пока нет записей' }
        </ul>
        { !isNewExpense && <button className="expenses__button" onClick={ () => { setIsNewExpense(true); } }>
          <AiOutlinePlus />
        </button> }
        { isNewExpense && <NewExpense handleClick={ handleNewExpenseClick } /> }
      </div>
    </div>
  );
}

export default Expenses;