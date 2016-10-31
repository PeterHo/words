'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = require('redux');

var _books = require('./books');

var _books2 = _interopRequireDefault(_books);

var _active_book = require('./active_book');

var _active_book2 = _interopRequireDefault(_active_book);

var _histories = require('./histories');

var _histories2 = _interopRequireDefault(_histories);

var _files = require('./files');

var _files2 = _interopRequireDefault(_files);

var _active_file = require('./active_file');

var _active_file2 = _interopRequireDefault(_active_file);

var _global_book = require('./global_book');

var _global_book2 = _interopRequireDefault(_global_book);

var _editor_state = require('./editor_state');

var _editor_state2 = _interopRequireDefault(_editor_state);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var reducers = (0, _redux.combineReducers)({
  books: _books2.default,
  activeBook: _active_book2.default,
  histories: _histories2.default,
  files: _files2.default,
  activeFile: _active_file2.default,
  globalBook: _global_book2.default,
  editorState: _editor_state2.default
});

exports.default = reducers;