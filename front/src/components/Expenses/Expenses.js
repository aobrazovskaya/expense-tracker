import React, { useState, useEffect } from 'react';
import './Expenses.scss';
import Expense from '../Expense/Expense';
import NewExpense from '../NewExpense/NewExpense';
import axiosInstance from '../../http/httpInstance';
import { AiOutlinePlus } from "react-icons/ai";
import ExpenseEditor from "../Expense/ExpenseEditor/ExpenseEditor";

function Expenses() {
  const [expensesList, setExpensesList] = useState([]);
  const [expenseIdEditor, setExpenseIdEditor] = useState('');
  // const [isExpenseEdit, setIsExpenseEdit] = useState(false);

  function handleExpenseClick(id) {
    setExpenseIdEditor(id);
  }

  function handleExpenseEditClick(expense) {
    axiosInstance.put('/newexpense', expense)
    .then((res) => {
      if (res.status === 200) {
        setExpenseIdEditor('');
        axiosInstance.get('/expenses')
          .then((response) => {
            setExpensesList(response.data);
          });
      }
    });
  }

  function handleExpenseDelete(id) {
    axiosInstance.delete(`/expenses/${id}`)
    .then((res) => {
      if (res.status === 200) {
        axiosInstance.get('/expenses')
          .then((response) => {
            setExpensesList(response.data);
          });
      }
    });
  }

  const expenses = expensesList.map((item) => {
    if (expenseIdEditor === item.id) {
      return <ExpenseEditor key={item.id} expense={item} handleExpenseEditClick={ handleExpenseEditClick } />
    } else {
      return <Expense key={item.id} item={item} handleExpenseClick={ handleExpenseClick } handleExpenseDelete={ handleExpenseDelete } />
    }
  });

  const [isNewExpense, setIsNewExpense] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    axiosInstance.get('/expenses')
      .then((response) => {
        setExpensesList(response.data);
        setIsLoading(true);
      });
    }, []);

  function handleClick(newExpense) {
    setIsNewExpense(false);
    axiosInstance.post('/expenses', newExpense)
    .then((res) => {
      if (res.status === 200) {
        axiosInstance.get('/expenses')
          .then((response) => {
            setExpensesList(response.data);
          });
      }
    });
  }

  return (
    <div className="expenses">
      <h2>Операции</h2>
      <div className="expenses__table">
        <ul className="expenses__list">
          { isLoading ? expenses : 'Вы все еще богаты' }
        </ul>
        { !isNewExpense && <button className="expenses__button" onClick={ () => { setIsNewExpense(true); } }>
          <AiOutlinePlus />
        </button> }
        { isNewExpense && <NewExpense handleClick={ handleClick } /> }
      </div>
    </div>
  );
}

export default Expenses;