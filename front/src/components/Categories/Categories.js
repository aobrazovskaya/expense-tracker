import React from 'react';
import './Categories.scss';
import Category from '../Category/Category'

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

function Categories() {
  const categories = categoriesList.map((item) =>
    <Category key={item.id} name={item.name} icon={item.icon}/>
  );

  return (
    <div className="categories">
      <h2>Категории</h2>
      <ul>{categories}</ul>
    </div>
  );
}

export default Categories;