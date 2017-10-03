webpackHotUpdate(0,{

/***/ "./src/components/pages/BooksForm.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _reactBootstrap = __webpack_require__("./node_modules/react-bootstrap/es/index.js");

var _reactRedux = __webpack_require__("./node_modules/react-redux/es/index.js");

var _redux = __webpack_require__("./node_modules/redux/es/index.js");

var _bookActions = __webpack_require__("./src/actions/bookActions.js");

var _reactDom = __webpack_require__("./node_modules/react-dom/index.js");

var _axios = __webpack_require__("./node_modules/axios/index.js");

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
      return _this.__handleSubmit__REACT_HOT_LOADER__.apply(_this, arguments);
    };

    _this.handleDelete = function () {
      return _this.__handleDelete__REACT_HOT_LOADER__.apply(_this, arguments);
    };

    _this.state = {
      images: [{}],
      img: ""
    };
    return _this;
  }

  _createClass(BooksForm, [{
    key: '__handleSubmit__REACT_HOT_LOADER__',
    value: function __handleSubmit__REACT_HOT_LOADER__() {
      var book = {
        title: (0, _reactDom.findDOMNode)(this.refs.title).value,
        description: (0, _reactDom.findDOMNode)(this.refs.description).value,
        price: (0, _reactDom.findDOMNode)(this.refs.price).value

      };
      this.props.postBook(book);
    }
  }, {
    key: '__handleDelete__REACT_HOT_LOADER__',
    value: function __handleDelete__REACT_HOT_LOADER__() {
      var bookId = (0, _reactDom.findDOMNode)(this.refs.delete).value;
      this.props.deleteBook(bookId);
    }
  }, {
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
                { controlId: 'title' },
                _react2.default.createElement(
                  _reactBootstrap.ControlLabel,
                  null,
                  'Title'
                ),
                _react2.default.createElement(_reactBootstrap.FormControl, {
                  type: 'text',
                  placeholder: 'Enter title',
                  ref: 'title' })
              ),
              _react2.default.createElement(
                _reactBootstrap.FormGroup,
                { controlId: 'description' },
                _react2.default.createElement(
                  _reactBootstrap.ControlLabel,
                  null,
                  'Description'
                ),
                _react2.default.createElement(_reactBootstrap.FormControl, {
                  type: 'text',
                  placeholder: 'Enter description',
                  ref: 'description' })
              ),
              _react2.default.createElement(
                _reactBootstrap.FormGroup,
                { controlId: 'price' },
                _react2.default.createElement(
                  _reactBootstrap.ControlLabel,
                  null,
                  'Price'
                ),
                _react2.default.createElement(_reactBootstrap.FormControl, {
                  type: 'text',
                  placeholder: 'Enter price',
                  ref: 'price' })
              ),
              _react2.default.createElement(
                _reactBootstrap.Button,
                { onClick: this.handleSubmit, bsStyle: 'primary' },
                'Add book'
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
    }
  }]);

  return BooksForm;
}(_react.Component);

function mapStateToProps(state) {
  return {
    books: state.books.books
  };
}

function mapDispatchToProps(dispatch) {
  return (0, _redux.bindActionCreators)({
    postBook: _bookActions.postBook,
    deleteBook: _bookActions.deleteBook,
    getBooks: _bookActions.getBooks
  }, dispatch);
}

var _default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(BooksForm);

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(BooksForm, 'BooksForm', 'E:/WEB/BookStore/client/src/components/pages/BooksForm.js');

  __REACT_HOT_LOADER__.register(mapStateToProps, 'mapStateToProps', 'E:/WEB/BookStore/client/src/components/pages/BooksForm.js');

  __REACT_HOT_LOADER__.register(mapDispatchToProps, 'mapDispatchToProps', 'E:/WEB/BookStore/client/src/components/pages/BooksForm.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'E:/WEB/BookStore/client/src/components/pages/BooksForm.js');
}();

;

/***/ })

})
//# sourceMappingURL=0.3dc200e555959263d671.hot-update.js.map