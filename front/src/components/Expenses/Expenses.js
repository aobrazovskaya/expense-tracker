import React, { useState, useEffect } from 'react';
import './Expenses.scss';
import Expense from '../Expense/Expense';
import NewExpense from '../NewExpense/NewExpense';
import { AiOutlinePlus } from "react-icons/ai";
import axiosInstance from '../../http/httpInstance';


function Expenses() {
  const [expensesList, setExpensesList] = useState([]);

  const expenses = expensesList.map((item) =>
    <Expense key={item.id} title={item.title} price={item.price} category={item.category} />
  );
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
      console.log(expensesList);
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
        <ul>
          { isLoading ? expenses : 'Вы все еще богаты' }
        </ul>
        { !isNewExpense && <button onClick={ () => { setIsNewExpense(true); } }>
          <AiOutlinePlus />
        </button> }
        { isNewExpense && <NewExpense handleClick={ handleClick } /> }
      </div>
    </div>
  );
}

export default Expenses;