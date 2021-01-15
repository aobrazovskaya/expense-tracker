import React, { useState } from 'react';
import './NewExpense.scss';

const categoriesList = [
  { id: 0, name: "Еда", icon: "fast-food" },
  { id: 1, name: "Жилье", icon: "house"  },
  { id: 2, name: "Здоровье", icon: "heartbeat"  },
  { id: 3, name: "Красота", icon: "beauty"  },
  { id: 4, name: "Машина", icon: "car"  },
  { id: 5, name: "Транспорт", icon: "van"  },
  { id: 6, name: "Спорт", icon: "running"  },
  { id: 7, name: "Развлечения", icon: "popcorn"  },
  { id: 8, name: "Питомцы", icon: "dog-house"  },
  { id: 9, name: "Подарки", icon: "giftbox"  },
  { id: 10, name: "Счета", icon: "finance"  }
];

function NewExpense(props) {
  const [newTitle, setNewTitle] = useState('');
  const [newCategory, setNewCategory] = useState(categoriesList[0].icon);
  const [newPrice, setNewPrice] = useState('');

  const categoriesSelection = categoriesList.map((item) =>
    <option key={item.id} value={item.icon}>{item.name}</option>
  );

  function handleNewExpense(event) {
    event.preventDefault();
    props.handleClick({
      title: newTitle,
      category: newCategory,
      price: newPrice
    });
  }

  return (
    <div className="new-expense">
      <form>
        <div className="new-expense__about">
          <label className="new-expense__title">
            <p>Описание:</p>
            <input name="title" type="text" onChange={ (e) => setNewTitle(e.target.value) } required></input>
          </label>
          <div className="new-expense__details">
            <label className="new-expense__category">
              <p>Категория:</p>
              <select name="category" onChange={ (e) => setNewCategory(e.target.value) }>
                {categoriesSelection}
              </select>
            </label>
            <label className="new-expense__price">
              <p>Цена:</p>
              $ <input name="price" type="number" onChange={ (e) => setNewPrice(e.target.value) } required></input>
            </label>
          </div>
        </div>
        <button onClick={ handleNewExpense }>Добавить</button>
      </form>
    </div>
  );
}

export default NewExpense;