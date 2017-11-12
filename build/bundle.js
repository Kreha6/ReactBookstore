/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 10);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("react-bootstrap");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("react-router-config");

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.getCart = getCart;
exports.addToCart = addToCart;
exports.deleteCartItem = deleteCartItem;
exports.updateItem = updateItem;

var _axios = __webpack_require__(4);

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function getCart() {
  return function (dispatch) {
    _axios2.default.get('/api/cart').then(function (response) {
      console.log("cart");
      console.log(response);
      dispatch({ type: "GET_CART", payload: response.data });
    }).catch(function (err) {
      dispatch({ type: "GET_CART_REJECTED", msg: "error when getting the cart from session" });
    });
  };
}

function addToCart(cart) {
  return function (dispatch) {
    _axios2.default.post("/api/cart", cart).then(function (response) {
      dispatch({ type: "ADD_TO_CART", payload: response.data });
    }).catch(function (err) {
      dispatch({ type: "ADD_TO_CART_REJECTED", msg: 'error when adding to the cart' });
    });
  };
}

function deleteCartItem(_id, cart) {
  var currentCart = cart;
  var indexToDelete = currentCart.findIndex(function (book) {
    return book._id === _id;
  });

  var newCart = [].concat(_toConsumableArray(currentCart.slice(0, indexToDelete)), _toConsumableArray(currentCart.slice(indexToDelete + 1)));

  return function (dispatch) {
    _axios2.default.post("/api/cart", newCart).then(function (response) {
      dispatch({ type: "DELETE_FROM_CART", payload: response.data });
    }).catch(function (err) {
      dispatch({ type: "DELETE_CART_REJECTED", msg: 'error while deleting cart item' });
    });
  };
}

function updateItem(_id, amount, cart) {
  var currentCart = cart;
  var indexToUpdate = currentCart.findIndex(function (book) {
    return book._id === _id;
  });
  var newBook = _extends({}, currentCart[indexToUpdate], {
    quantity: currentCart[indexToUpdate].quantity + amount
  });

  var newCart = [].concat(_toConsumableArray(currentCart.slice(0, indexToUpdate)), [newBook], _toConsumableArray(currentCart.slice(indexToUpdate + 1)));

  return function (dispatch) {
    _axios2.default.post("/api/cart", newCart).then(function (response) {
      dispatch({ type: "UPDATE_ITEM", payload: response.data });
    }).catch(function (err) {
      dispatch({ type: "UPDATE_CART_REJECTED", msg: 'error while updating the cart' });
    });
  };
}

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _App = __webpack_require__(15);

var _App2 = _interopRequireDefault(_App);

var _BookList = __webpack_require__(19);

var _BookList2 = _interopRequireDefault(_BookList);

var _Cart = __webpack_require__(21);

var _Cart2 = _interopRequireDefault(_Cart);

var _BooksForm = __webpack_require__(22);

var _BooksForm2 = _interopRequireDefault(_BooksForm);

var _About = __webpack_require__(24);

var _About2 = _interopRequireDefault(_About);

var _NotFound = __webpack_require__(25);

var _NotFound2 = _interopRequireDefault(_NotFound);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = [_extends({}, _App2.default, {
  routes: [_extends({}, _BookList2.default, {
    exact: true,
    path: '/'
  }), _extends({}, _BooksForm2.default, {
    path: '/admin'
  }), _extends({}, _Cart2.default, {
    path: '/cart'
  }), _extends({}, _About2.default, {
    path: '/about'
  }), _extends({}, _NotFound2.default)]
})];

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getBooks = getBooks;
exports.postBook = postBook;
exports.deleteBook = deleteBook;
exports.updateBook = updateBook;
exports.resetForm = resetForm;

var _axios = __webpack_require__(4);

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getBooks() {
  return function (dispatch) {
    _axios2.default.get('/api/books').then(function (response) {
      dispatch({ type: "GET_BOOKS", payload: response.data });
    }).catch(function (err) {
      console.log('error');
      dispatch({ type: "GET_REJECTED", payload: "there was an error while getting" });
    });
  };
}

function postBook(book) {
  return function (dispatch) {
    _axios2.default.post('/api/books', book).then(function (response) {
      dispatch({ type: "POST_BOOK", payload: response.data });
    }).catch(function (err) {
      dispatch({ type: "POST_REJECTED", payload: "there was an error while posting" });
    });
  };
}

function deleteBook(id) {
  return function (dispatch) {
    _axios2.default.delete('/api/books/' + id).then(function (response) {
      dispatch({ type: "DELETE_BOOK", payload: id });
    }).catch(function (err) {
      dispatch({ type: "DELETE_REJECTED", payload: "there was an error while deleting" });
    });
  };
}

function updateBook(book) {
  return { type: "UPDATE_BOOK", payload: book };
}

function resetForm() {
  return { type: "RESET_FORM" };
}

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(11);

var _express = __webpack_require__(12);

var _express2 = _interopRequireDefault(_express);

var _renderer = __webpack_require__(13);

var _renderer2 = _interopRequireDefault(_renderer);

var _createStore = __webpack_require__(28);

var _createStore2 = _interopRequireDefault(_createStore);

var _reactRouterConfig = __webpack_require__(5);

var _Routes = __webpack_require__(8);

var _Routes2 = _interopRequireDefault(_Routes);

var _httpProxy = __webpack_require__(33);

var _httpProxy2 = _interopRequireDefault(_httpProxy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

var apiProxy = _httpProxy2.default.createProxyServer({ target: 'http://localhost:3001' });

app.use('/api', function (req, res) {
  apiProxy.web(req, res);
});

app.use(_express2.default.static('public'));

app.get('*', function (req, res) {
  //req does contain cookies so I need it inside createStore
  var store = (0, _createStore2.default)(req);

  var promises = (0, _reactRouterConfig.matchRoutes)(_Routes2.default, req.path).map(function (_ref) {
    var route = _ref.route;

    return route.loadData ? route.loadData(store) : null;
  }).map(function (promise) {
    if (promise) {
      return new Promise(function (resolve, reject) {
        //this new Promise wrapping original one is going to be resolved no matter what
        promise.then(resolve).catch(resolve);
      });
    }
  });

  //connecting all the promises into one
  Promise.all(promises).then(function () {
    var context = {};

    var content = (0, _renderer2.default)(req, store, context);

    if (context.url) {
      return res.redirect(301, context.url);
    }
    if (context.notFound) {
      res.status(404);
    }

    res.send(content);
  });
});

app.listen(3000, function () {
  console.log("Listening on port 3000");
});

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("babel-polyfill");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _server = __webpack_require__(14);

var _reactRouterDom = __webpack_require__(7);

var _Routes = __webpack_require__(8);

var _Routes2 = _interopRequireDefault(_Routes);

var _reactRedux = __webpack_require__(1);

var _reactRouterConfig = __webpack_require__(5);

var _serializeJavascript = __webpack_require__(26);

var _serializeJavascript2 = _interopRequireDefault(_serializeJavascript);

var _reactHelmet = __webpack_require__(27);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//protects against potential xss attacks, it replaces things like < or > with unicode
exports.default = function (req, store, context) {
  var content = (0, _server.renderToString)(_react2.default.createElement(
    _reactRedux.Provider,
    { store: store },
    _react2.default.createElement(
      _reactRouterDom.StaticRouter,
      { location: req.url, context: context },
      _react2.default.createElement(
        'div',
        null,
        (0, _reactRouterConfig.renderRoutes)(_Routes2.default)
      )
    )
  ));

  var helmet = _reactHelmet.Helmet.renderStatic();

  return '\n    <html>\n      <head>\n        ' + helmet.title.toString() + '\n        ' + helmet.meta.toString() + '\n        <link rel="stylesheet" type="text/css" href="bundle.css">\n        <link href="https://maxcdn.bootstrapcdn.com/bootswatch/3.3.7/darkly/bootstrap.min.css"\n        rel="stylesheet"\n        integrity="sha384-S7YMK1xjUjSpEnF4P8hPUcgjXYLZKK3fQW1j5ObLSl787II9p8RO9XUGehRmKsxd" \n        crossorigin="anonymous">\n      </head>\n      <body>\n        <div id="root">' + content + '</div>\n        <script>\n          window.INITIAL_STATE = ' + (0, _serializeJavascript2.default)(store.getState()) + '\n        </script>\n        <script src="bundle.js"></script>\n      </body>\n    </html>\n  ';
};

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterConfig = __webpack_require__(5);

var _Footer = __webpack_require__(16);

var _Footer2 = _interopRequireDefault(_Footer);

var _Menu = __webpack_require__(17);

var _Menu2 = _interopRequireDefault(_Menu);

var _cartActions = __webpack_require__(6);

var _reactRedux = __webpack_require__(1);

var _redux = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_Component) {
  _inherits(App, _Component);

  function App() {
    _classCallCheck(this, App);

    return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
  }

  _createClass(App, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'main',
        null,
        _react2.default.createElement(_Menu2.default, null),
        (0, _reactRouterConfig.renderRoutes)(this.props.route.routes),
        _react2.default.createElement(_Footer2.default, null)
      );
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.props.getCart();
    }
  }]);

  return App;
}(_react.Component);

;

function mapDispatchToProps(dispatch) {
  return (0, _redux.bindActionCreators)({
    getCart: _cartActions.getCart
  }, dispatch);
}

exports.default = {
  component: (0, _reactRedux.connect)(null, mapDispatchToProps)(App),
  loadData: function loadData(_ref) {
    var dispatch = _ref.dispatch;
    return dispatch((0, _cartActions.getCart)());
  }
};

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Footer = function (_Component) {
  _inherits(Footer, _Component);

  function Footer() {
    _classCallCheck(this, Footer);

    return _possibleConstructorReturn(this, (Footer.__proto__ || Object.getPrototypeOf(Footer)).apply(this, arguments));
  }

  _createClass(Footer, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "footer",
        { className: "footer text-center" },
        _react2.default.createElement(
          "p",
          null,
          "I'm gonna be beautiful footer some day!"
        )
      );
    }
  }]);

  return Footer;
}(_react.Component);

exports.default = Footer;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactBootstrap = __webpack_require__(3);

var _reactRouterDom = __webpack_require__(7);

var _reactRedux = __webpack_require__(1);

var _reactRouterBootstrap = __webpack_require__(18);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Menu = function (_Component) {
  _inherits(Menu, _Component);

  function Menu() {
    _classCallCheck(this, Menu);

    return _possibleConstructorReturn(this, (Menu.__proto__ || Object.getPrototypeOf(Menu)).apply(this, arguments));
  }

  _createClass(Menu, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _reactBootstrap.Navbar,
        { inverse: true, fixedTop: true, className: 'menu' },
        _react2.default.createElement(
          _reactBootstrap.Navbar.Header,
          null,
          _react2.default.createElement(
            _reactBootstrap.Navbar.Brand,
            null,
            _react2.default.createElement(
              _reactRouterDom.Link,
              { to: '/' },
              'BookStore'
            )
          ),
          _react2.default.createElement(_reactBootstrap.Navbar.Toggle, null)
        ),
        _react2.default.createElement(
          _reactBootstrap.Navbar.Collapse,
          { className: 'menu__navbar' },
          _react2.default.createElement(
            _reactBootstrap.Nav,
            null,
            _react2.default.createElement(
              _reactRouterBootstrap.LinkContainer,
              { to: '/about' },
              _react2.default.createElement(
                _reactBootstrap.NavItem,
                { eventKey: 1 },
                'About'
              )
            ),
            _react2.default.createElement(
              _reactRouterBootstrap.LinkContainer,
              { to: '/contact' },
              _react2.default.createElement(
                _reactBootstrap.NavItem,
                { eventKey: 2 },
                'Contact'
              )
            )
          ),
          _react2.default.createElement(
            _reactBootstrap.Nav,
            { pullRight: true },
            _react2.default.createElement(
              _reactRouterBootstrap.LinkContainer,
              { to: '/admin' },
              _react2.default.createElement(
                _reactBootstrap.NavItem,
                { eventKey: 3 },
                'Admin'
              )
            ),
            _react2.default.createElement(
              _reactRouterBootstrap.LinkContainer,
              { to: '/cart' },
              _react2.default.createElement(
                _reactBootstrap.NavItem,
                { eventKey: 1 },
                'Cart ',
                _react2.default.createElement(
                  _reactBootstrap.Badge,
                  { className: 'menu__navbar__badge' },
                  this.props.qty
                )
              )
            )
          )
        )
      );
    }
  }]);

  return Menu;
}(_react.Component);

function mapStateToProps(state) {
  return { qty: state.cart.totalQty };
}

exports.default = (0, _reactRedux.connect)(mapStateToProps)(Menu);

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("react-router-bootstrap");

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(1);

var _bookActions = __webpack_require__(9);

var _redux = __webpack_require__(2);

var _reactBootstrap = __webpack_require__(3);

var _BookItem = __webpack_require__(20);

var _BookItem2 = _interopRequireDefault(_BookItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BookList = function (_Component) {
  _inherits(BookList, _Component);

  function BookList() {
    _classCallCheck(this, BookList);

    return _possibleConstructorReturn(this, (BookList.__proto__ || Object.getPrototypeOf(BookList)).apply(this, arguments));
  }

  _createClass(BookList, [{
    key: 'render',
    value: function render() {
      console.log(this.props);
      var booksList = this.props.books.map(function (book) {
        return _react2.default.createElement(
          _reactBootstrap.Col,
          { xs: 12, sm: 6, md: 4, key: book._id },
          _react2.default.createElement(_BookItem2.default, {
            book: book
          })
        );
      });

      return _react2.default.createElement(
        _reactBootstrap.Grid,
        null,
        _react2.default.createElement(
          _reactBootstrap.Row,
          { bsClass: 'row booklist' },
          booksList
        )
      );
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.props.getBooks();
    }
  }]);

  return BookList;
}(_react.Component);

function mapStateToProps(state) {
  return { books: state.books.books };
}

function mapDispatchToProps(dispatch) {
  return (0, _redux.bindActionCreators)({
    getBooks: _bookActions.getBooks
  }, dispatch);
}

function loadData(store) {
  return store.dispatch((0, _bookActions.getBooks)());
}

exports.default = {
  component: (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(BookList),
  loadData: loadData
};

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactBootstrap = __webpack_require__(3);

var _reactRedux = __webpack_require__(1);

var _cartActions = __webpack_require__(6);

var _redux = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BookItem = function (_Component) {
  _inherits(BookItem, _Component);

  function BookItem(props) {
    _classCallCheck(this, BookItem);

    var _this = _possibleConstructorReturn(this, (BookItem.__proto__ || Object.getPrototypeOf(BookItem)).call(this, props));

    _this.onReadMore = function () {
      _this.setState({ isClicked: !_this.state.isClicked });
    };

    _this.handleAdd = function () {
      var book = _this.props.book;

      var newBook = {
        _id: book._id,
        title: book.title,
        description: book.description,
        images: book.images,
        price: book.price,
        quantity: 1
      };
      if (_this.props.cart.length > 0) {
        var itemIndex = _this.props.cart.findIndex(function (item) {
          return item._id === book._id;
        });
        if (itemIndex == -1) {
          var newCart = [].concat(_toConsumableArray(_this.props.cart), [newBook]);
          _this.props.addToCart(newCart);
        } else {
          _this.props.updateItem(book._id, 1, _this.props.cart);
        }
      } else {
        var _newCart = [].concat(_toConsumableArray(_this.props.cart), [newBook]);
        _this.props.addToCart(_newCart);
      }
    };

    _this.state = {
      isClicked: false
    };

    return _this;
  }

  _createClass(BookItem, [{
    key: 'render',
    value: function render() {
      var book = this.props.book;

      return _react2.default.createElement(
        _reactBootstrap.Well,
        null,
        _react2.default.createElement(
          _reactBootstrap.Row,
          { bsClass: 'row book-item' },
          _react2.default.createElement(
            _reactBootstrap.Col,
            { xs: 12, sm: 4 },
            _react2.default.createElement(_reactBootstrap.Image, { src: book.images, responsive: true })
          ),
          _react2.default.createElement(
            _reactBootstrap.Col,
            { xs: 12, sm: 8 },
            _react2.default.createElement(
              'h6',
              null,
              book.title
            ),
            _react2.default.createElement(
              'p',
              null,
              book.description.length > 50 && !this.state.isClicked ? book.description.substring(0, 50) : book.description,
              _react2.default.createElement(
                'button',
                { className: 'book-item__button--show', onClick: this.onReadMore },
                book.description.length > 50 && !this.state.isClicked && book.description != null ? "...read more" : book.description.length > 50 ? "Read less" : ""
              )
            ),
            _react2.default.createElement(
              'h6',
              null,
              book.price
            ),
            _react2.default.createElement(
              _reactBootstrap.Button,
              { bsClass: 'btn btn-primary book-item__button--add', onClick: this.handleAdd, bsStyle: 'primary' },
              'Add to cart'
            )
          )
        )
      );
    }
  }]);

  return BookItem;
}(_react.Component);

function mapStateToProps(state) {
  return { cart: state.cart.cart };
}

function mapDispatchToProps(dispatch) {
  return (0, _redux.bindActionCreators)({
    addToCart: _cartActions.addToCart,
    updateItem: _cartActions.updateItem
  }, dispatch);
}

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(BookItem);

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactBootstrap = __webpack_require__(3);

var _reactRedux = __webpack_require__(1);

var _redux = __webpack_require__(2);

var _cartActions = __webpack_require__(6);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Cart = function (_Component) {
  _inherits(Cart, _Component);

  function Cart(props) {
    _classCallCheck(this, Cart);

    var _this = _possibleConstructorReturn(this, (Cart.__proto__ || Object.getPrototypeOf(Cart)).call(this, props));

    _this.handleDelete = function (_id) {
      _this.props.deleteCartItem(_id, _this.props.cart);
    };

    _this.handleUpdate = function (_id, amount, quantity) {
      if (amount == -1 && quantity == 1) {
        _this.props.deleteCartItem(_id, _this.props.cart);
      } else {
        _this.props.updateItem(_id, amount, _this.props.cart);
      }
    };

    _this.toggleModal = function () {
      _this.setState({ modalOpen: !_this.state.modalOpen });
    };

    _this.state = {
      modalOpen: false
    };
    return _this;
  }

  _createClass(Cart, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      if (this.props.cart[0]) {
        var cartItems = this.props.cart.map(function (item) {
          return _react2.default.createElement(
            _reactBootstrap.Panel,
            { key: item._id },
            _react2.default.createElement(
              _reactBootstrap.Row,
              null,
              _react2.default.createElement(
                _reactBootstrap.Col,
                { xs: 12, sm: 4 },
                _react2.default.createElement(
                  'h6',
                  null,
                  item.title
                )
              ),
              _react2.default.createElement(
                _reactBootstrap.Col,
                { xs: 12, sm: 2 },
                _react2.default.createElement(
                  'h6',
                  null,
                  'usd. ',
                  item.price
                )
              ),
              _react2.default.createElement(
                _reactBootstrap.Col,
                { xs: 12, sm: 2 },
                _react2.default.createElement(
                  'h6',
                  null,
                  'qty.',
                  _react2.default.createElement(
                    _reactBootstrap.Label,
                    { bsStyle: 'success' },
                    item.quantity
                  )
                )
              ),
              _react2.default.createElement(
                _reactBootstrap.Col,
                { xs: 6, sm: 4 },
                _react2.default.createElement(
                  _reactBootstrap.ButtonGroup,
                  { bsClass: 'cart__buttons' },
                  _react2.default.createElement(
                    _reactBootstrap.Button,
                    {
                      onClick: function onClick() {
                        _this2.handleUpdate(item._id, -1, item.quantity);
                      },
                      bsStyle: 'default',
                      bsSize: 'small' },
                    '-'
                  ),
                  _react2.default.createElement(
                    _reactBootstrap.Button,
                    {
                      onClick: function onClick() {
                        _this2.handleUpdate(item._id, 1, item.quantity);
                      },
                      bsStyle: 'default',
                      bsSize: 'small' },
                    '+'
                  ),
                  _react2.default.createElement(
                    _reactBootstrap.Button,
                    { onClick: function onClick() {
                        return _this2.handleDelete(item._id);
                      }, bsStyle: 'danger', bsSize: 'small' },
                    'DELETE'
                  )
                )
              )
            )
          );
        });

        return _react2.default.createElement(
          _reactBootstrap.Panel,
          { header: 'cart', bsStyle: 'primary' },
          cartItems,
          _react2.default.createElement(
            _reactBootstrap.Row,
            null,
            _react2.default.createElement(
              _reactBootstrap.Col,
              { xs: 12 },
              _react2.default.createElement(
                'h6',
                null,
                'Total amount: ',
                this.props.totalAmount
              ),
              _react2.default.createElement(
                _reactBootstrap.Button,
                { onClick: this.toggleModal, bsStyle: 'success', bsSize: 'small' },
                'Proceed to checkout'
              )
            )
          ),
          _react2.default.createElement(
            _reactBootstrap.Modal,
            { show: this.state.modalOpen, onHide: this.toggleModal },
            _react2.default.createElement(
              _reactBootstrap.Modal.Header,
              { closeButton: true },
              _react2.default.createElement(
                _reactBootstrap.Modal.Title,
                null,
                'Checkout'
              )
            ),
            _react2.default.createElement(
              _reactBootstrap.Modal.Body,
              null,
              'test'
            ),
            _react2.default.createElement(
              _reactBootstrap.Modal.Footer,
              null,
              _react2.default.createElement(
                _reactBootstrap.Col,
                { xs: 6 },
                _react2.default.createElement(
                  'h6',
                  null,
                  'Total cost: ',
                  this.props.totalAmount
                )
              ),
              _react2.default.createElement(
                _reactBootstrap.Button,
                { onClick: this.toggleModal },
                'Close'
              )
            )
          )
        );
      } else {
        return _react2.default.createElement(
          'div',
          null,
          'add some books to your cart'
        );
      }
    }
  }]);

  return Cart;
}(_react.Component);

function mapStateToProps(state) {
  return {
    cart: state.cart.cart,
    totalAmount: state.cart.totalAmount,
    totalQty: state.cart.totalQty
  };
}

function mapDispatchToProps(dispatch) {
  return (0, _redux.bindActionCreators)({
    deleteCartItem: _cartActions.deleteCartItem,
    updateItem: _cartActions.updateItem
  }, dispatch);
}

exports.default = {
  component: (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Cart)
};

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactBootstrap = __webpack_require__(3);

var _reactRedux = __webpack_require__(1);

var _redux = __webpack_require__(2);

var _bookActions = __webpack_require__(9);

var _reactDom = __webpack_require__(23);

var _axios = __webpack_require__(4);

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BooksForm = function (_Component) {
  _inherits(BooksForm, _Component);

  function BooksForm(props) {
    _classCallCheck(this, BooksForm);

    var _this = _possibleConstructorReturn(this, (BooksForm.__proto__ || Object.getPrototypeOf(BooksForm)).call(this, props));

    _this.handleSubmit = function () {
      var book = {
        title: (0, _reactDom.findDOMNode)(_this.refs.title).value,
        description: (0, _reactDom.findDOMNode)(_this.refs.description).value,
        images: (0, _reactDom.findDOMNode)(_this.refs.img).value,
        price: (0, _reactDom.findDOMNode)(_this.refs.price).value
      };
      _this.props.postBook(book);
    };

    _this.handleDelete = function () {
      var bookId = (0, _reactDom.findDOMNode)(_this.refs.delete).value;
      _this.props.deleteBook(bookId);
    };

    _this.resetForm = function () {
      (0, _reactDom.findDOMNode)(_this.refs.title).value = "";
      (0, _reactDom.findDOMNode)(_this.refs.description).value = "";
      (0, _reactDom.findDOMNode)(_this.refs.price).value = "";
      _this.setState({
        img: ""
      });
      _this.props.resetForm();
    };

    _this.state = {
      images: [{}],
      img: ""
    };
    return _this;
  }

  _createClass(BooksForm, [{
    key: 'handleSelect',
    value: function handleSelect(img) {
      this.setState({
        img: '/images/' + img
      });
    }
  }, {
    key: 'render',
    value: function render() {

      var books = this.props.books.map(function (book) {
        return _react2.default.createElement(
          'option',
          { key: book._id },
          book._id
        );
      });

      var images = this.state.images.map(function (imgArr, i) {
        return _react2.default.createElement(
          _reactBootstrap.MenuItem,
          { key: i, eventKey: imgArr.name,
            onClick: this.handleSelect.bind(this, imgArr.name) },
          imgArr.name
        );
      }, this);

      return _react2.default.createElement(
        _reactBootstrap.Well,
        null,
        _react2.default.createElement(
          _reactBootstrap.Row,
          null,
          _react2.default.createElement(
            _reactBootstrap.Col,
            { xs: 12, sm: 6 },
            _react2.default.createElement(
              _reactBootstrap.Panel,
              null,
              _react2.default.createElement(
                _reactBootstrap.InputGroup,
                null,
                _react2.default.createElement(_reactBootstrap.FormControl, { type: 'text', ref: 'img', value: this.state.img }),
                _react2.default.createElement(
                  _reactBootstrap.DropdownButton,
                  {
                    componentClass: _reactBootstrap.InputGroup.Button,
                    id: 'input-dropdown-addon',
                    title: 'Select an image',
                    bsStyle: 'primary'
                  },
                  images
                )
              ),
              _react2.default.createElement(_reactBootstrap.Image, { src: this.state.img, responsive: true })
            )
          ),
          _react2.default.createElement(
            _reactBootstrap.Col,
            { xs: 12, sm: 6 },
            _react2.default.createElement(
              _reactBootstrap.Panel,
              null,
              _react2.default.createElement(
                _reactBootstrap.FormGroup,
                { controlId: 'title', validationState: this.props.validation },
                _react2.default.createElement(
                  _reactBootstrap.ControlLabel,
                  null,
                  'Title'
                ),
                _react2.default.createElement(_reactBootstrap.FormControl, {
                  type: 'text',
                  placeholder: 'Enter title',
                  ref: 'title'
                }),
                _react2.default.createElement(_reactBootstrap.FormControl.Feedback, null)
              ),
              _react2.default.createElement(
                _reactBootstrap.FormGroup,
                { controlId: 'description', validationState: this.props.validation },
                _react2.default.createElement(
                  _reactBootstrap.ControlLabel,
                  null,
                  'Description'
                ),
                _react2.default.createElement(_reactBootstrap.FormControl, {
                  type: 'text',
                  placeholder: 'Enter description',
                  ref: 'description'
                }),
                _react2.default.createElement(_reactBootstrap.FormControl.Feedback, null)
              ),
              _react2.default.createElement(
                _reactBootstrap.FormGroup,
                { controlId: 'price', validationState: this.props.validation },
                _react2.default.createElement(
                  _reactBootstrap.ControlLabel,
                  null,
                  'Price'
                ),
                _react2.default.createElement(_reactBootstrap.FormControl, {
                  type: 'text',
                  placeholder: 'Enter price',
                  ref: 'price'
                }),
                _react2.default.createElement(_reactBootstrap.FormControl.Feedback, null)
              ),
              _react2.default.createElement(
                _reactBootstrap.Button,
                {
                  onClick: !this.props.msg ? this.handleSubmit : this.resetForm,
                  bsStyle: !this.props.style ? "primary" : this.props.style
                },
                !this.props.msg ? "Save book" : this.props.msg
              )
            ),
            _react2.default.createElement(
              _reactBootstrap.Panel,
              { bsClass: 'delete-form panel' },
              _react2.default.createElement(
                _reactBootstrap.FormGroup,
                { controlId: 'formControlSelect' },
                _react2.default.createElement(
                  _reactBootstrap.ControlLabel,
                  null,
                  'Select a book to delete'
                ),
                _react2.default.createElement(
                  _reactBootstrap.FormControl,
                  { ref: 'delete', componentClass: 'select', placeholder: '' },
                  _react2.default.createElement(
                    'option',
                    { value: 'select' },
                    'select'
                  ),
                  books
                )
              ),
              _react2.default.createElement(
                _reactBootstrap.Button,
                { bsStyle: 'danger', onClick: this.handleDelete },
                'Delete book'
              )
            )
          )
        )
      );
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      _axios2.default.get('/api/images').then(function (response) {
        _this2.setState({ images: response.data });
      }).catch(function (err) {
        _this2.setState({
          images: 'error',
          img: ''
        });
      });

      this.props.getBooks();
    }
  }]);

  return BooksForm;
}(_react.Component);

function mapStateToProps(state) {
  return {
    books: state.books.books,
    msg: state.books.msg,
    style: state.books.style,
    validation: state.books.validation
  };
}

function mapDispatchToProps(dispatch) {
  return (0, _redux.bindActionCreators)({
    postBook: _bookActions.postBook,
    deleteBook: _bookActions.deleteBook,
    getBooks: _bookActions.getBooks,
    resetForm: _bookActions.resetForm
  }, dispatch);
}

function loadData(store) {
  return store.dispatch((0, _bookActions.getBooks)());
}

exports.default = {
  component: (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(BooksForm),
  loadData: loadData
};

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var About = function About() {
  return _react2.default.createElement(
    'div',
    null,
    'TODO:',
    _react2.default.createElement(
      'ul',
      null,
      _react2.default.createElement(
        'li',
        null,
        'rebuild navbar'
      ),
      _react2.default.createElement(
        'li',
        null,
        'secure admin panel'
      ),
      _react2.default.createElement(
        'li',
        null,
        'add more options to the admin panel'
      ),
      _react2.default.createElement(
        'li',
        null,
        'get rid of this react-bootstrap stuff'
      ),
      _react2.default.createElement(
        'li',
        null,
        'add user authentification'
      )
    )
  );
};

exports.default = { component: About };

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NotFound = function NotFound(_ref) {
  var _ref$staticContext = _ref.staticContext,
      staticContext = _ref$staticContext === undefined ? {} : _ref$staticContext;

  staticContext.notFound = true;
  return _react2.default.createElement(
    'h1',
    null,
    'Ooops, route not found.'
  );
};

exports.default = {
  component: NotFound
};

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = require("serialize-javascript");

/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = require("react-helmet");

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(2);

var _reduxThunk = __webpack_require__(29);

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _reducers = __webpack_require__(30);

var _reducers2 = _interopRequireDefault(_reducers);

var _axios = __webpack_require__(4);

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (req) {
  var axiosInstance = _axios2.default.create({
    headers: { cookie: req.get('cookie') || '' }
  });
  //thanks to this axiosInstance my api server is going to think he received request from user not from server (while ssr)
  var store = (0, _redux.createStore)(_reducers2.default, {}, (0, _redux.applyMiddleware)(_reduxThunk2.default.withExtraArgument(axiosInstance)));

  return store;
};

/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(2);

var _booksReducer = __webpack_require__(31);

var _cartReducer = __webpack_require__(32);

var rootReducer = (0, _redux.combineReducers)({
  books: _booksReducer.booksReducer,
  cart: _cartReducer.cartReducer
});

exports.default = rootReducer;

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.booksReducer = booksReducer;

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function booksReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    books: []
  };
  var action = arguments[1];

  switch (action.type) {
    case "GET_BOOKS":
      {
        return _extends({}, state, {
          books: [].concat(_toConsumableArray(action.payload))
        });
      }
    case "POST_BOOK":
      {
        return _extends({}, state, {
          books: [].concat(_toConsumableArray(state.books), [action.payload]),
          msg: 'Saved! Click to continue',
          style: 'success',
          validation: 'success'
        });
      }
    case "POST_REJECTED":
      {
        return _extends({}, state, {
          msg: 'Please try again',
          style: 'danger',
          validation: 'error'
        });
      }
    case "RESET_FORM":
      {
        return _extends({}, state, {
          msg: null,
          style: 'primary',
          validation: null

        });
      }
    case "DELETE_BOOK":
      {
        var currentBooks = [].concat(_toConsumableArray(state.books));
        var indexToDelete = currentBooks.findIndex(function (book) {
          return book._id == action.payload;
        });
        return _extends({}, state, {
          books: [].concat(_toConsumableArray(currentBooks.slice(0, indexToDelete)), _toConsumableArray(currentBooks.slice(indexToDelete + 1)))
        });
      }
    case "UPDATE_BOOK":
      {
        var _currentBooks = [].concat(_toConsumableArray(state.books));
        var indexToUpdate = _currentBooks.findIndex(function (book) {
          return book._id === action.payload._id;
        });
        var newBook = _extends({}, _currentBooks[indexToUpdate], {
          title: action.payload.title
        });
        return _extends({}, state, {
          books: [].concat(_toConsumableArray(_currentBooks.slice(0, indexToUpdate)), [newBook], _toConsumableArray(_currentBooks.slice(indexToUpdate + 1)))
        });
      }
    default:
      {
        return state;
      }
  }
}

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.cartReducer = cartReducer;
exports.totals = totals;
function cartReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    cart: [],
    totalAmount: 0,
    totalQty: 0
  };
  var action = arguments[1];

  switch (action.type) {
    case "GET_CART":
      {
        var total = totals(action.payload);
        return _extends({}, state, {
          cart: action.payload,
          totalAmount: total.amount,
          totalQty: total.qty
        });
      }
    case "ADD_TO_CART":
      {
        var _total = totals(action.payload);
        return _extends({}, state, {
          cart: action.payload,
          totalAmount: _total.amount,
          totalQty: _total.qty

        });
      }
    case "DELETE_FROM_CART":
      {
        var _total2 = totals(action.payload);
        return _extends({}, state, {
          cart: action.payload,
          totalAmount: _total2.amount,
          totalQty: _total2.qty
        });
      }
    case "UPDATE_ITEM":
      {
        var _total3 = totals(action.payload);
        return _extends({}, state, {
          cart: action.payload,
          totalAmount: _total3.amount,
          totalQty: _total3.qty
        });
      }
    default:
      {
        return state;
      }
  }
}

function totals(items) {
  var totalCost = items.map(function (item) {
    return item.price * item.quantity;
  }).reduce(function (a, b) {
    return a + b;
  }, 0);

  var totalQty = items.map(function (item) {
    return item.quantity;
  }).reduce(function (a, b) {
    return a + b;
  }, 0);

  return { amount: totalCost.toFixed(2), qty: totalQty };
}

/***/ }),
/* 33 */
/***/ (function(module, exports) {

module.exports = require("http-proxy");

/***/ })
/******/ ]);