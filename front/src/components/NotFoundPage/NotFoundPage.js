import React from 'react';
import './NotFoundPage.scss';
import notFoundImg from '../../asset/not-found.jpg';

function NotFoundPage() {
  return (
    <div className="not-found-page">
      <p>Что-то пошло не так...</p>
      <img src={notFoundImg}></img>
    </div>
  );
}

export default NotFoundPage;