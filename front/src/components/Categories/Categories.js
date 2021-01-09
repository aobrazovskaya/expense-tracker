import React from 'react';
import './Categories.scss';
import Category from '../Category/Category'

const categories = [];

function Categories() {
  return (
    <div>
      <h2>Категории</h2>
      <ul>
        <Category />
      </ul>
    </div>
  );
}

export default Categories;