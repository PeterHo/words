'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments[1];

  switch (action.type) {
    case LIST_BOOKS:
      return action.books;
      break;
    case ADD_BOOK:
      return [action.book].concat(_toConsumableArray(state));
      break;
    case DEL_BOOK:
      var tI = (0, _util.findIndexById)(state, action.book);
      return [].concat(_toConsumableArray(state.slice(0, tI)), _toConsumableArray(state.slice(tI + 1)));
      break;
    case EDIT_BOOK:
      var tIn = (0, _util.findIndexById)(state, action.book);
      return [action.book].concat(_toConsumableArray(state.slice(0, tIn)), _toConsumableArray(state.slice(tIn + 1)));
      break;
    case CONCAT_BOOKS:
      return [].concat(_toConsumableArray(state), _toConsumableArray(action.books));
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

var LIST_BOOKS = _constants2.default.LIST_BOOKS,
    ADD_BOOK = _constants2.default.ADD_BOOK,
    DEL_BOOK = _constants2.default.DEL_BOOK,
    EDIT_BOOK = _constants2.default.EDIT_BOOK,
    CONCAT_BOOKS = _constants2.default.CONCAT_BOOKS;