import React from 'react';
import BookList from './pages/BookList';
import Cart from './pages/Cart';
import BooksForm from './pages/BooksForm';
import About from './pages/About';
import Menu from './Menu';
import Footer from './Footer';
import {Route,Switch} from 'react-router-dom';


const NotFound = () => (
      <div>
        <h2>Sorry, can’t find this page</h2>
      </div>
  )

const routes = (
    <Switch>
      <Route exact path="/" component = {BookList} />
      <Route path="/about" component = {About} />
      <Route path="/admin" component = {BooksForm} />
      <Route path="/cart" component = {Cart} />
      <Route component={NotFound}/>
    </Switch>


)

export default routes;
