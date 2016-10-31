'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactAddonsShallowCompare = require('react-addons-shallow-compare');

var _reactAddonsShallowCompare2 = _interopRequireDefault(_reactAddonsShallowCompare);

var _GridList = require('material-ui/GridList');

var _IconButton = require('material-ui/IconButton');

var _IconButton2 = _interopRequireDefault(_IconButton);

var _Subheader = require('material-ui/Subheader');

var _Subheader2 = _interopRequireDefault(_Subheader);

var _settings = require('material-ui/svg-icons/action/settings');

var _settings2 = _interopRequireDefault(_settings);

var _IconMenu = require('material-ui/IconMenu');

var _IconMenu2 = _interopRequireDefault(_IconMenu);

var _Menu = require('material-ui/Menu');

var _Menu2 = _interopRequireDefault(_Menu);

var _MenuItem = require('material-ui/MenuItem');

var _MenuItem2 = _interopRequireDefault(_MenuItem);

var _constants = require('../../constants');

var _constants2 = _interopRequireDefault(_constants);

var _util = require('../../util');

var _reactRouter = require('react-router');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    marginTop: '20px'
  },
  gridList: {
    width: '90%',
    overflowY: 'auto',
    marginBottom: 24
  }
};

// props {callbacks, books}

var BooksList = function (_Component) {
  _inherits(BooksList, _Component);

  function BooksList(props) {
    _classCallCheck(this, BooksList);

    var _this = _possibleConstructorReturn(this, (BooksList.__proto__ || Object.getPrototypeOf(BooksList)).call(this, props));

    _this.gridCols = function () {
      if (!_this.refs.listRoot) return;
      var width = _this.refs.listRoot.getBoundingClientRect().width;
      // js switch add true when in case use less or greater than
      switch (true) {
        case width > 800:
          _this.setState({
            gridCols: 4
          });
          break;
        case width > 600:
          _this.setState({
            gridCols: 3
          });
          break;
        case width > 400:
          _this.setState({
            gridCols: 2
          });
          break;
        default:
          _this.setState({
            gridCols: 1
          });
      }
    };

    _this.handleMenuChange = function (event, value, book) {
      // edit
      if (parseInt(value) == 1) {
        console.log('edit book');
        _this.props.callbacks.editBook(book);
        // delete
      } else if (parseInt(value) == 2) {
        _this.props.callbacks.delBook(book);
      }
    };

    _this.state = {
      gridCols: 4
    };
    _this.throttledGridCols = (0, _util.throttle)(_this.gridCols, 10);
    return _this;
  }

  _createClass(BooksList, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      // add a throttle process
      window.addEventListener('resize', this.gridCols);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if (this.throttledGridCols) this.throttledGridCols.cancel();
    }

    // for better performance

  }, {
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps, nextState) {
      return (0, _reactAddonsShallowCompare2.default)(this, nextProps, nextState);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        'div',
        { style: styles.root, ref: 'listRoot' },
        _react2.default.createElement(
          _GridList.GridList,
          {
            cellHeight: 200,
            style: styles.gridList,
            cols: this.state.gridCols,
            padding: 20
          },
          this.props.books.map(function (book) {
            return _react2.default.createElement(
              _GridList.GridTile,
              {
                key: book._id,
                title: book.name,
                subtitle: _react2.default.createElement(
                  'span',
                  null,
                  _react2.default.createElement(
                    'b',
                    null,
                    book.filesCount,
                    ' Notes'
                  )
                ),
                actionIcon: _react2.default.createElement(
                  _IconMenu2.default,
                  {
                    iconButtonElement: _react2.default.createElement(
                      _IconButton2.default,
                      null,
                      _react2.default.createElement(_settings2.default, { color: 'white' })
                    ),
                    onChange: function onChange(event, value) {
                      event.stopPropagation();_this2.handleMenuChange(event, value, book);
                    },
                    value: 0
                  },
                  _react2.default.createElement(_MenuItem2.default, { value: '1', primaryText: 'Edit...' }),
                  _react2.default.createElement(_MenuItem2.default, { value: '2', primaryText: 'Move To Trash...' })
                ),
                cols: 1,
                className: 'book-item',
                onContextMenu: function onContextMenu(event) {
                  event.stopPropagation();_this2.props.callbacks.onContextMenu(event, book);
                }
              },
              _react2.default.createElement('img', {
                onClick: function onClick(event) {
                  _this2.props.callbacks.jumpToNotes({ pathname: '/notes', query: { bookId: book._id, bookName: book.name, available: true } });
                },
                src: book.imagePath != '' ? (0, _util.key2path)(book.imagePath) : _constants2.default.TMP_IMAGE_PATH
              })
            );
          })
        )
      );
    }
  }]);

  return BooksList;
}(_react.Component);

BooksList.propTypes = {
  books: _react.PropTypes.array,
  callbacks: _react.PropTypes.object
};

exports.default = BooksList;