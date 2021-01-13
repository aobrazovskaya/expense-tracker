import React, { useState } from 'react';
import './Expenses.scss';
import Expense from '../Expense/Expense';
import NewExpense from '../NewExpense/NewExpense';
import { AiOutlinePlus } from "react-icons/ai";

const expensesList = [
  { id: 1, title: "Коммунальные", price: 40, category: "Жилье" },
  { id: 2, title: "Корм кошке", price: 5, category: "Питомцы" },
  { id: 3, title: "Продукты", price: 50, category: "Еда" },
  { id: 4, title: "Бензин", price: 20, category: "Машина" },
  { id: 5, title: "Коммунальные", price: 40, category: "Жилье" },
  { id: 6, title: "Корм кошке", price: 5, category: "Питомцы" },
  { id: 7, title: "Продукты", price: 50, category: "Еда" },
  { id: 8, title: "Бензин", price: 20, category: "Машина" }
];

function Expenses() {
  const expenses = expensesList.map((item) =>
    <Expense key={item.id} title={item.title} price={item.price} category={item.category} />
  );
  let [isNewExpense, setIsNewExpense] = useState(false);

  return (
    <div className="expenses">
      <h2>Операции</h2>
      <div className="expenses__table">
        <ul>
          {expenses}
        </ul>
        { !isNewExpense && <button onClick={ () => { setIsNewExpense(true); } }>
          <AiOutlinePlus />
        </button> }
        { isNewExpense && <NewExpense /> }
      </div>
    </div>
  );
}

export default Expenses;