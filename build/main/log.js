'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.log = log;
exports.error = error;

var _windows = require('./windows');

var _windows2 = _interopRequireDefault(_windows);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var electron = require('electron');

function log() {
    var _windows$main;

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
    }

    (_windows$main = _windows2.default.main).send.apply(_windows$main, ['log'].concat(args));
}

function error() {
    var _windows$main2;

    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
    }

    (_windows$main2 = _windows2.default.main).send.apply(_windows$main2, ['error'].concat(args));
}
//# sourceMappingURL=log.js.map