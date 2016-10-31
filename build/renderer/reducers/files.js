'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments[1];

  switch (action.type) {
    case LIST_FILES:
      return action.files;
      break;
    case ADD_FILE:
      return [action.file].concat(_toConsumableArray(state));
      break;
    case DEL_FILE:
      var tI = (0, _util.findIndexById)(state, action.file);
      return [].concat(_toConsumableArray(state.slice(0, tI)), _toConsumableArray(state.slice(tI + 1)));
      break;
    case EDIT_FILE:
      var tIn = (0, _util.findIndexById)(state, action.file);
      return [action.file].concat(_toConsumableArray(state.slice(0, tIn)), _toConsumableArray(state.slice(tIn + 1)));
      break;
    case CONCAT_FILES:
      return [].concat(_toConsumableArray(state), _toConsumableArray(action.files));
      break;
    default:
      return state;
  }
};

var _constants = require('../../constants');

var _constants2 = _interopRequireDefault(_constants);

var _util = require('../../util');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var LIST_FILES = _constants2.default.LIST_FILES,
    ADD_FILE = _constants2.default.ADD_FILE,
    DEL_FILE = _constants2.default.DEL_FILE,
    EDIT_FILE = _constants2.default.EDIT_FILE,
    CONCAT_FILES = _constants2.default.CONCAT_FILES;