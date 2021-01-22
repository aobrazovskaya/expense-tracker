import React, { useState } from 'react';
import './ExpenseEditor.scss';

function ExpenseEditor(props) {
  const categoriesList = [
    { id: 0, name: "Еда", category: "fast-food" },
    { id: 1, name: "Жилье", category: "house" },
    { id: 2, name: "Здоровье", category: "heartbeat" },
    { id: 3, name: "Красота", category: "beauty" },
    { id: 4, name: "Машина", category: "car" },
    { id: 5, name: "Транспорт", category: "van" },
    { id: 6, name: "Спорт", category: "running" },
    { id: 7, name: "Развлечения", category: "popcorn" },
    { id: 8, name: "Питомцы", category: "dog-house" },
    { id: 9, name: "Подарки", category: "giftbox" },
    { id: 10, name: "Счета", category: "finance" }
  ];

  const categoriesSelection = categoriesList.map((item) =>
    <option key={item.id} value={item.category}>{item.name}</option>
  );

  const [newTitle, setNewTitle] = useState(props.expense.title);
  const [newCategory, setNewCategory] = useState(props.expense.category);
  const [newPrice, setNewPrice] = useState(props.expense.price);

  function handleNewExpense(event) {
    event.preventDefault();
    props.handleExpenseEditClick({
      id: props.expense.id,
      title: newTitle,
      category: newCategory,
      price: newPrice
    });
  }

  return (
    <form className="expense-editor">
      <div className="expense-editor__about">
        <label className="expense-editor__title">
          <p>Описание:</p>
          <input name="title" type="text" value={newTitle} onChange={ (e) => setNewTitle(e.target.value) } required></input>
        </label>
        <div className="expense-editor__details">
          <label className="expense-editor__category">
            <p>Категория:</p>
            <select name="category"  value={newCategory} onChange={ (e) => setNewCategory(e.target.value) }>
              {categoriesSelection}
            </select>
          </label>
          <label className="expense-editor__price">
            <p>Цена:</p>
            $ <input name="price" type="number" value={newPrice} onChange={ (e) => setNewPrice(e.target.value) } required></input>
          </label>
        </div>
      </div>
      <button onClick={ handleNewExpense } >Обновить</button>
    </form>
  );
}

export default ExpenseEditor;