import React, {Component} from 'react';
import { renderRoutes } from 'react-router-config';
import Footer from './components/Footer';
import Menu from './components/Menu';
import {getCart} from './actions/cartActions';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

class App extends Component {
  render(){
    return (
      <main>
        <Menu />
        {renderRoutes(this.props.route.routes)}
        <Footer />
      </main>
    );
  }

  componentDidMount(){
    this.props.getCart();
  }
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    getCart
  }, dispatch)
}

export default {
  component: connect(null, mapDispatchToProps)(App),
  loadData: ({ dispatch }) => dispatch(getCart())
};
