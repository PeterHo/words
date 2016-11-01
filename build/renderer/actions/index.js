'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.selectPrefix = exports.selectPrefixLetter = undefined;

var _ActionTypes = require('../constants/ActionTypes');

var types = _interopRequireWildcard(_ActionTypes);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var selectPrefixLetter = exports.selectPrefixLetter = function selectPrefixLetter(letter) {
    return {
        type: types.SELECT_PREFIX_LETTER,
        letter: letter
    };
};

var selectPrefix = exports.selectPrefix = function selectPrefix(prefix) {
    return {
        type: types.SELECT_PREFIX,
        prefix: prefix
    };
};
//# sourceMappingURL=index.js.map