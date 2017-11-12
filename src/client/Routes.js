import React from 'react';
import App from './App';
import BookList from './pages/BookList';
import Cart from './pages/Cart';
import BooksForm from './pages/BooksForm';
import About from './pages/About';
import NotFound from './pages/NotFound';

export default [
  {
    ...App,
    routes: [
      {
        ...BookList,
        exact:true,
        path: '/'
      },
      {
        ...BooksForm,
        path: '/admin'
      },
      {
        ...Cart,
        path: '/cart'
      },
      {
        ...About,
        path: '/about'
      },
      {
        ...NotFound
      }
    ]
  }
];
