'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _app = require('./views/app');

var _app2 = _interopRequireDefault(_app);

var _set_db = require('../main/set_db');

var _reactRedux = require('react-redux');

var _store = require('./store');

var _store2 = _interopRequireDefault(_store);

var _constants = require('../constants');

var _constants2 = _interopRequireDefault(_constants);

var _reactTapEventPlugin = require('react-tap-event-plugin');

var _reactTapEventPlugin2 = _interopRequireDefault(_reactTapEventPlugin);

var _MuiThemeProvider = require('material-ui/styles/MuiThemeProvider');

var _MuiThemeProvider2 = _interopRequireDefault(_MuiThemeProvider);

var _getMuiTheme = require('material-ui/styles/getMuiTheme');

var _getMuiTheme2 = _interopRequireDefault(_getMuiTheme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

Promise = require('bluebird');
window.$ = window.jQuery = window.jquery = require('jquery');
require('babel-polyfill');

var fs = require('fs'),
    path = require('path');

window.constants = _constants2.default;
var FILES_PATH = _constants2.default.FILES_PATH;

// material-ui use the plugin

(0, _reactTapEventPlugin2.default)();

// material-ui theme provider


var muiTheme = (0, _getMuiTheme2.default)({
  fontFamily: '"YaHei Consolas Hybrid", Consolas, 微软雅黑, "Meiryo UI", "Malgun Gothic", "Segoe UI", "Trebuchet MS", Helvetica, Monaco, courier, monospace !important',
  palette: {
    primary1Color: '#e78170'
  }
});

var ipcRenderer = require('electron').ipcRenderer;

// subscribe redux to control new note menu item
function controlNewNoteMenu() {
  var globalBook = null;
  _store2.default.subscribe(function () {
    if (!!_store2.default.getState().globalBook._id != globalBook) {
      globalBook = !!_store2.default.getState().globalBook._id;
      if (_store2.default.getState().globalBook._id) {
        ipcRenderer.send('enableItem', 'New Note');
      } else {
        ipcRenderer.send('disableItem', 'New Note');
      }
    }
  });
}

controlNewNoteMenu();

document.addEventListener('DOMContentLoaded', function () {
  (0, _reactDom.render)(_react2.default.createElement(
    _reactRedux.Provider,
    { store: _store2.default },
    _react2.default.createElement(
      _MuiThemeProvider2.default,
      { muiTheme: muiTheme },
      _react2.default.createElement(_app2.default, null)
    )
  ), document.getElementById('root'));
}, false);

window.FILES_PATH = FILES_PATH;

// prevent external link open from browser
$('body').on('click', 'a.external', function (event) {
  event.preventDefault();
  event.stopPropagation();
  var href = $(this).attr('href');
  var pp = /[http|https]/;
  if (pp.test(href)) {
    ipcRenderer.send('openExternal', href);
  }
});