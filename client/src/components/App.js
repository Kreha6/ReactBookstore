import React,{ Component } from 'react';
import BookList from './pages/BookList';
import Cart from './pages/Cart';
import BooksForm from './pages/BooksForm';
import Menu from './Menu';
import Footer from './Footer';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import '../scss/app.scss';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <Menu />
          <main>
            <Switch>
              <Route exact path="/admin" component = {BooksForm} />
              <Route exact path="/cart" component = {Cart} />
              <Route exact path="/" component = {BookList} />
            </Switch>
            <Footer />
          </main>
        </div>
      </BrowserRouter>

    );
  }
}

export default App;
