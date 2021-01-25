import React, { useState, useEffect } from 'react';
import './Main.scss';
import axiosInstance from '../../http/httpInstance';
import Expenses from '../Expenses/Expenses';

function Main() {
  const [isLoading, setIsLoading] = useState(false);
  const [expensesList, setExpensesList] = useState([]);

  function updateExpensesList(expenses) {
    setExpensesList(expenses);
  }

  useEffect(() => {
    axiosInstance.get('/expenses')
      .then((response) => {
        setExpensesList(response.data);
        setIsLoading(true);
      });
    }, []);

  return (
    <div className="main-page">
      <Expenses expenses={ isLoading && expensesList } updateExpensesList={ updateExpensesList } />
    </div>
  );
}

export default Main;