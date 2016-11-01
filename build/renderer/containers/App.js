'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _redux = require('redux');

var _reactRedux = require('react-redux');

var _Tabs = require('material-ui/Tabs');

var _actions = require('../actions');

var WordsActions = _interopRequireWildcard(_actions);

var _prefixList = require('../components/prefixList');

var _prefixList2 = _interopRequireDefault(_prefixList);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var App = function App(_ref) {
    var letter = _ref.letter,
        prefix = _ref.prefix,
        actions = _ref.actions;
    return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
            _Tabs.Tabs,
            null,
            _react2.default.createElement(
                _Tabs.Tab,
                { label: '\u524D\u7F00' },
                _react2.default.createElement(_prefixList2.default, { letter: letter, prefix: prefix, actions: actions })
            ),
            _react2.default.createElement(
                _Tabs.Tab,
                { label: '\u8BCD\u6839' },
                _react2.default.createElement(
                    'div',
                    null,
                    _react2.default.createElement(
                        'h2',
                        null,
                        'Tab Two'
                    ),
                    _react2.default.createElement(
                        'p',
                        null,
                        'This is another example tab.'
                    )
                )
            ),
            _react2.default.createElement(
                _Tabs.Tab,
                { label: '\u540E\u7F00' },
                _react2.default.createElement(
                    'div',
                    null,
                    _react2.default.createElement(
                        'h2',
                        null,
                        'Tab Three'
                    ),
                    _react2.default.createElement(
                        'p',
                        null,
                        'This is a third example tab.'
                    )
                )
            )
        )
    );
};

App.propTypes = {
    letter: _react.PropTypes.string.isRequired,
    prefix: _react.PropTypes.string.isRequired,
    actions: _react.PropTypes.object.isRequired
};

var mapStateToProps = function mapStateToProps(state) {
    return {
        letter: state.prefix.letter,
        prefix: state.prefix.prefix
    };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return {
        actions: (0, _redux.bindActionCreators)(WordsActions, dispatch)
    };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(App);
//# sourceMappingURL=App.js.map