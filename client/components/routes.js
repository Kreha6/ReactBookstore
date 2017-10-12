import BookList from './pages/BookList';
import Cart from './pages/Cart';
import BooksForm from './pages/BooksForm';
import About from './pages/About';
import {Route} from 'react-router-dom';

const routes = (
  <Route exact path="/about" component = {About} />
  <Route exact path="/admin" component = {BooksForm} />
  <Route exact path="/cart" component = {Cart} />
  <Route exact path="/" component = {BookList} />
)

export default routes;
