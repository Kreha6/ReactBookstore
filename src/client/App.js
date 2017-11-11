import React from 'react';
import { renderRoutes } from 'react-router-config';
import Footer from './components/Footer';
import Menu from './components/Menu';
import {getCart} from './actions/cartActions';

const App = ({ route }) => {
  return (
    <main>
      <Menu />
      {renderRoutes(route.routes)}
      <Footer />
    </main>
  );
};

export default {
  component: App,
  loadData: ({ dispatch }) => dispatch(getCart())
};
