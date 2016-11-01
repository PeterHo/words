'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _RaisedButton = require('material-ui/RaisedButton');

var _RaisedButton2 = _interopRequireDefault(_RaisedButton);

var _FlatButton = require('material-ui/FlatButton');

var _FlatButton2 = _interopRequireDefault(_FlatButton);

var _Divider = require('material-ui/Divider');

var _Divider2 = _interopRequireDefault(_Divider);

var _Paper = require('material-ui/Paper');

var _Paper2 = _interopRequireDefault(_Paper);

var _prefixData = require('./prefixData');

var _prefixData2 = _interopRequireDefault(_prefixData);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by peter on 10/27/16.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var PrefixList = function (_Component) {
    _inherits(PrefixList, _Component);

    function PrefixList() {
        _classCallCheck(this, PrefixList);

        return _possibleConstructorReturn(this, (PrefixList.__proto__ || Object.getPrototypeOf(PrefixList)).apply(this, arguments));
    }

    _createClass(PrefixList, [{
        key: 'getLetterList',
        value: function getLetterList() {
            var style = { margin: 12 };
            var _props = this.props,
                letter = _props.letter,
                actions = _props.actions;

            return _prefixData2.default.getLetterList().map(function (l) {
                return _react2.default.createElement(_RaisedButton2.default, { key: l, label: l, style: style, primary: letter === l,
                    onClick: function onClick() {
                        return actions.selectPrefixLetter(l);
                    } });
            });
        }
    }, {
        key: 'getFirstPrefixByLetter',
        value: function getFirstPrefixByLetter(letter) {
            return _prefixData2.default.getFirstPrefixByLetter(letter);
        }
    }, {
        key: 'getPrefixList',
        value: function getPrefixList(letter) {
            var style = { margin: 12 };
            var labelStyle = { "textTransform": "lowercase" };
            var _props2 = this.props,
                prefix = _props2.prefix,
                actions = _props2.actions;

            return _prefixData2.default.getPrefixByLetter(letter).map(function (p) {
                return _react2.default.createElement(_FlatButton2.default, { key: p, label: p, style: style, primary: prefix === p,
                    labelStyle: labelStyle,
                    onClick: function onClick() {
                        return actions.selectPrefix(p);
                    } });
            });
        }
    }, {
        key: 'getPrefixDetail',
        value: function getPrefixDetail(letter, prefix) {
            var style = {
                margin: 20,
                padding: 20
            };
            return _prefixData2.default.getPrefixDetail(letter, prefix).map(function (detail) {
                return _react2.default.createElement(
                    _Paper2.default,
                    { key: prefix, style: style, zDepth: 2 },
                    _react2.default.createElement(
                        'div',
                        null,
                        detail.chinese_meaning
                    )
                );
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'div',
                    null,
                    this.getLetterList()
                ),
                _react2.default.createElement(_Divider2.default, null),
                _react2.default.createElement(
                    'div',
                    null,
                    this.getPrefixList(this.props.letter)
                ),
                _react2.default.createElement(
                    'div',
                    null,
                    this.getPrefixDetail(this.props.letter, this.props.letter)
                )
            );
        }
    }]);

    return PrefixList;
}(_react.Component);

PrefixList.propTypes = {
    letter: _react.PropTypes.string.isRequired,
    prefix: _react.PropTypes.string.isRequired,
    actions: _react.PropTypes.object.isRequired
};
exports.default = PrefixList;
;
//# sourceMappingURL=prefixList.js.map