import React from 'react';
import BookList from './pages/BookList';
import Cart from './pages/Cart';
import BooksForm from './pages/BooksForm';
import About from './pages/About';
import Menu from './Menu';
import Footer from './Footer';
import {Route, Switch} from 'react-router-dom';

const NotFound = () =>(
      <div>
        <h2>
        Sorry, can’t find this page</h2>
      </div>
  )

const routes = (
  <main>
    <Menu/>
    <Switch>
      <Route exact path="/" component = {BookList} />
      <Route exact path="/about" component = {About} />
      <Route exact path="/admin" component = {BooksForm} />
      <Route exact path="/cart" component = {Cart} />
      <Route component={NotFound}/>
    </Switch>
    <Footer />
  </main>
);

export default routes;
