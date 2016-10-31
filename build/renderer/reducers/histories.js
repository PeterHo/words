'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [defaultHome];
  var action = arguments[1];

  switch (action.type) {
    case PUSH_HISTORY:
      return [].concat(_toConsumableArray(state), [action.history]).slice(-10);
      break;
    case POP_HISTORY:
      return state.slice(0, state.length - 1);
      break;
    default:
      return state;
  }
};

var _constants = require('../../constants');

var _constants2 = _interopRequireDefault(_constants);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } } // use history array replace url history and url


var POP_HISTORY = _constants2.default.POP_HISTORY,
    PUSH_HISTORY = _constants2.default.PUSH_HISTORY;


var defaultHome = {
  containerName: 'BooksContainer',
  props: {}
};