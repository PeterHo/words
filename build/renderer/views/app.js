'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _reducers = require('../reducers');

var _reducers2 = _interopRequireDefault(_reducers);

var _reactRouter = require('react-router');

var _actions = require('../actions');

var _layout = require('./layout');

var _layout2 = _interopRequireDefault(_layout);

var _books_container = require('./books_container');

var _books_container2 = _interopRequireDefault(_books_container);

var _files_container = require('./files_container');

var _files_container2 = _interopRequireDefault(_files_container);

var _file_form = require('./file_form');

var _file_form2 = _interopRequireDefault(_file_form);

var _empty_file = require('./empty_file');

var _empty_file2 = _interopRequireDefault(_empty_file);

var _test_container = require('./test_container');

var _test_container2 = _interopRequireDefault(_test_container);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var mapStateToProps = function mapStateToProps(state) {
  return {
    histories: state.histories
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    popHistory: function popHistory() {
      dispatch((0, _actions.popHistory)());
    },
    pushHistory: function pushHistory(history) {
      dispatch((0, _actions.pushHistory)(history));
    }
  };
};

var App = function (_Component) {
  _inherits(App, _Component);

  function App(props) {
    _classCallCheck(this, App);

    return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));
  }

  _createClass(App, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _reactRouter.Router,
        { history: _reactRouter.hashHistory },
        _react2.default.createElement(
          _reactRouter.Route,
          { path: '/', component: _layout2.default },
          _react2.default.createElement(_reactRouter.IndexRoute, { component: _books_container2.default }),
          _react2.default.createElement(_reactRouter.Route, { path: 'books', component: _books_container2.default }),
          _react2.default.createElement(
            _reactRouter.Route,
            { path: 'notes', component: _files_container2.default },
            _react2.default.createElement(_reactRouter.IndexRoute, { component: _empty_file2.default }),
            _react2.default.createElement(_reactRouter.Route, { path: ':id/edit', component: _file_form2.default })
          ),
          _react2.default.createElement(_reactRouter.Route, { path: 'test', component: _test_container2.default })
        )
      );
    }
  }]);

  return App;
}(_react.Component);

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(App);
//# sourceMappingURL=app.js.map