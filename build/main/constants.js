'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _keymirror = require('keymirror');

var _keymirror2 = _interopRequireDefault(_keymirror);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var constants = (0, _keymirror2.default)({
  LIST_BOOKS: null,
  ADD_BOOK: null,
  DEL_BOOK: null,
  EDIT_BOOK: null,
  CONCAT_BOOKS: null,
  ACTIVE_BOOK: null,
  POP_HISTORY: null,
  PUSH_HISTORY: null,
  LIST_FILES: null,
  ADD_FILE: null,
  DEL_FILE: null,
  EDIT_FILE: null,
  CONCAT_FILES: null,
  ACTIVE_FILE: null,
  SET_GLOBAL_BOOK: null,
  SET_EDITOR_STATE: null
});

constants.HOME_PATH = process.env.HOME || process.env.HOMEPATH || process.env.USERPROFILE;
constants.FILES_PATH = '' + _path2.default.resolve(constants.HOME_PATH, './anote/files');
constants.DB_PATH = '' + _path2.default.resolve(constants.HOME_PATH, './anote/dbs');
constants.TMP_FILES_PATH = '' + _path2.default.resolve(constants.HOME_PATH, './anote/tmp_files');
constants.TMP_IMAGE_PATH = '' + _path2.default.resolve(__dirname, '../tmp/tmp.jpeg');

exports.default = constants;
//# sourceMappingURL=constants.js.map