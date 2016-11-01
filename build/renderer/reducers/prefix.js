'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = prefix;

var _ActionTypes = require('../constants/ActionTypes');

var initialState = {
    letter: 'a',
    prefix: 'an'
};

function prefix() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
    var action = arguments[1];

    console.log('reducers: state: ' + JSON.stringify(state) + ' action: ' + JSON.stringify(action));
    switch (action.type) {
        case _ActionTypes.SELECT_PREFIX_LETTER:
            return _extends({}, state, {
                letter: action.letter
            });
        case _ActionTypes.SELECT_PREFIX:
            return _extends({}, state, {
                prefix: action.prefix
            });
        default:
            return state;
    }
};
//# sourceMappingURL=prefix.js.map