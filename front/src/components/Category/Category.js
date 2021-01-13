import React from 'react';
import './Category.scss';

function Category(props) {

  // const iconPath = `/path/to/spritemap.svg#${props.icon}`;
  return (
    <li className="category">
      <div className="category__icon">
        <svg width="100" height="100">
          <use href={`/sprite.svg#${props.icon}`}></use>
        </svg>
      </div>
      <p className="category__name">{props.name}</p>
    </li>
  );
}

export default Category;