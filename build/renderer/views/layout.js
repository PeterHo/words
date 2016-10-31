'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _List = require('material-ui/List');

var _TextField = require('material-ui/TextField');

var _TextField2 = _interopRequireDefault(_TextField);

var _Menu = require('material-ui/Menu');

var _Menu2 = _interopRequireDefault(_Menu);

var _MenuItem = require('material-ui/MenuItem');

var _MenuItem2 = _interopRequireDefault(_MenuItem);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _dispatch_handlers = require('../dispatch_handlers');

var _set_db = require('../../main/set_db');

var _single_event = require('../single_event');

var _single_event2 = _interopRequireDefault(_single_event);

var _setup_ipc = require('../setup_ipc');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Layout = function (_Component) {
  _inherits(Layout, _Component);

  function Layout(props) {
    _classCallCheck(this, Layout);

    var _this = _possibleConstructorReturn(this, (Layout.__proto__ || Object.getPrototypeOf(Layout)).call(this, props));

    _this.globalSearch = function (event) {
      event.preventDefault();
      event.stopPropagation();
      _reactRouter.hashHistory.push({ pathname: '/notes', query: { searchFileText: _this.state.searchFileText, available: true } });
    };

    _this.changeSearchFileText = function (event) {
      _this.setState({
        searchFileText: event.target.value
      });
    };

    _this.componentDidMount = function () {
      (0, _setup_ipc.setupIpc)();
      // 配些全局的相应appmenu的event
      (0, _dispatch_handlers.setDispatchHandler)('newNoteBook', function () {
        _reactRouter.hashHistory.replace({
          pathname: '/',
          query: {
            newNoteBook: true
          }
        });
      });
      (0, _dispatch_handlers.setDispatchHandler)('newNote', function () {
        var patt = new RegExp('notes');
        if (patt.test(_this.props.location.pathname)) {
          _reactRouter.hashHistory.push({
            pathname: _this.props.location.pathname,
            query: Object.assign({}, _this.props.location.query, { available: true, newNote: true })
          });
        } else {
          _reactRouter.hashHistory.push({
            pathname: '/notes',
            query: { available: true, newNote: true }
          });
        }
      });

      //new note From tray
      (0, _dispatch_handlers.setDispatchHandler)('newNoteFromTray', function (fileParams) {
        _set_db.files.insert(fileParams, function (error, newFile) {
          _single_event2.default.emit('addNoteFromTray', newFile);
        });
      });

      // hack notes和trash的相应
      jQuery(_reactDom2.default.findDOMNode(_this.refs.notesLink)).click(function (event) {
        if ($(this).hasClass('active')) event.preventDefault();
      });
      jQuery(_reactDom2.default.findDOMNode(_this.refs.trashLink)).click(function (event) {
        if ($(this).hasClass('active')) event.preventDefault();
      });
    };

    _this.state = {
      searchFileText: props.location.query.searchFileText || ''
    };
    return _this;
  }

  _createClass(Layout, [{
    key: 'componentWillReceiveProps',


    // maybe not a legant way, the method break the react lifecycle!!!
    value: function componentWillReceiveProps(newProps) {
      if (newProps.location.query.searchFileText != this.state.searchFileText) {
        this.setState({ searchFileText: newProps.location.query.searchFileText || '' });
        jQuery(_reactDom2.default.findDOMNode(this.refs.globalSearchInput)).find('input').val(newProps.location.query.searchFileText || '');
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'body' },
        _react2.default.createElement(
          'div',
          { className: 'header' },
          _react2.default.createElement(
            'form',
            { onSubmit: this.globalSearch },
            _react2.default.createElement(_TextField2.default, {
              hintText: 'Search notes',
              style: { right: '0px', position: 'absolute', marginRight: '10px' },
              inputStyle: { color: 'white' },
              hintStyle: { color: 'white' },
              defaultValue: this.state.searchFileText || '',
              onChange: this.changeSearchFileText,
              ref: 'globalSearchInput'
            })
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'sidebar' },
          _react2.default.createElement(
            'div',
            { className: 'banner' },
            _react2.default.createElement(
              'p',
              null,
              'Enjoy ANOTE'
            )
          ),
          _react2.default.createElement(
            'ul',
            { className: 's-menu main-menu' },
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                _reactRouter.IndexLink,
                { to: '/', activeClassName: 'active' },
                'Notebooks'
              )
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                _reactRouter.Link,
                {
                  to: { pathname: '/notes', query: { available: true } },
                  activeClassName: 'active',
                  ref: 'notesLink'
                },
                'Notes'
              )
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                _reactRouter.Link,
                {
                  to: { pathname: '/notes', query: { available: false } },
                  activeClassName: 'active',
                  ref: 'trashLink'
                },
                'Trash'
              )
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'content' },
          this.props.children
        )
      );
    }
  }]);

  return Layout;
}(_react.Component);

exports.default = Layout;