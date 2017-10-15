import React from 'react';
import BookList from './pages/BookList';
import Cart from './pages/Cart';
import BooksForm from './pages/BooksForm';
import About from './pages/About';
import NotFound from './pages/NotFound';
import App from './App';




  const routes = [
    { component: App,
      routes: [
        { path: '/',
          exact: true,
          component: BookList
        },
        { path: '/about',
          component: About
        },
        { path: '/Cart',
          component: Cart
        },
        { path: '/admin',
          component: BooksForm
        },
        {
          path: '*',
          component: NotFound
        }
      ]
    }
  ];

  export default routes;
