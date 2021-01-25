import React, { useState } from 'react';
import './Categories.scss';
import Category from '../Category/Category';
import axiosInstance from '../../http/httpInstance';
import Expenses from '../Expenses/Expenses';

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

function Categories() {
  const [isCategoryChecked, setIsCategoryChecked] = useState(false);
  const [checkedExpenses, setCheckedExpenses] = useState([]);

  function getExpensesByCategory(category) {
    axiosInstance.get(`/expenses/${category}`)
      .then((response) => {
        setIsCategoryChecked(true);
        setCheckedExpenses(response.data);
      });
    }

  const categories = categoriesList.map((item) =>
    <Category key={item.id} name={item.name} category={item.category} getExpensesByCategory={getExpensesByCategory}/>
  );

  return (
    <div className="categories">
      <h2>Категории</h2>
      <div className="categories__wrapper">
        <ul className="categories__list">{categories}</ul>
        { isCategoryChecked && <Expenses expenses={ checkedExpenses } /> }
      </div>
    </div>
  );
}

export default Categories;