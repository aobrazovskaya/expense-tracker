import React from 'react';
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

function NewExpense() {
  const categoriesSelection = categoriesList.map((item) =>
    <option value={item.icon}>{item.name}</option>
  );

  return (
    <div className="new-expense">
      <form>
        <div className="new-expense__about">
          <label className="new-expense__text">
            <p>Описание:</p>
            <input name="name" type="text" required></input>
          </label>
          <div className="new-expense__details">
            <label className="new-expense__category">
              <p>Категория:</p>
              <select name="select">
                {categoriesSelection}
              </select>
            </label>
            <label className="new-expense__price">
              <p>Цена:</p>
              $ <input name="price" type="number" required></input>
            </label>
          </div>
        </div>
        <button>Добавить</button>
      </form>
    </div>
  );
}

export default NewExpense;