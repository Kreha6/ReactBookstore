import React,{ Component } from 'react';
import Menu from './Menu';
import Footer from './Footer';
import {Route, withRouter} from 'react-router-dom';
import routes from './routes';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getCart} from '../actions/cartActions';

class App extends Component {
  render() {
    return (
          <main>
            <Menu />
            {routes}
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
