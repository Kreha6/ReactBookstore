import React,{ Component } from 'react';
import BookList from './pages/BookList';
import Cart from './pages/Cart';
import BooksForm from './pages/BooksForm';
import About from './pages/About';
import Menu from './Menu';
import Footer from './Footer';
import {Route, Switch, withRouter} from 'react-router-dom';
import '../scss/app.scss';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getCart} from '../actions/cartActions';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return (
          <main>
            <Switch>
              <Route exact path="/about" component = {About} />
              <Route exact path="/admin" component = {BooksForm} />
              <Route exact path="/cart" component = {Cart} />
              <Route exact path="/" component = {BookList} />
            </Switch>
            <Footer />
          </main>
    );
  }

  componentDidMount(){
    this.props.getCart();
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    getCart
  }, dispatch)
}

export default withRouter(connect(null, mapDispatchToProps)(App));
