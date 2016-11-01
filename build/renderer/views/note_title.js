'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NoteTitle = function (_Component) {
  _inherits(NoteTitle, _Component);

  function NoteTitle() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, NoteTitle);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = NoteTitle.__proto__ || Object.getPrototypeOf(NoteTitle)).call.apply(_ref, [this].concat(args))), _this), _this.onChange = function (event) {
      if (_this.props.onChange) _this.props.onChange(event);
    }, _this.setValue = function (value) {
      jQuery(_reactDom2.default.findDOMNode(_this.refs.input)).val(value);
    }, _this.focus = function () {
      // a chrome focus bug
      setTimeout(function () {
        if (_this.refs.input) _this.refs.input.focus();
      }, 1);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(NoteTitle, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (this.props.autoFocus) jQuery(_reactDom2.default.findDOMNode(this.refs.input)).focus();
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement('input', {
          defaultValue: this.props.defaultValue,
          onChange: this.onChange,
          ref: 'input',
          placeholder: 'Untitled',
          style: this.props.style
        })
      );
    }
  }]);

  return NoteTitle;
}(_react.Component);

NoteTitle.propTypes = {
  onChange: _react.PropTypes.func,
  defaultValue: _react.PropTypes.string
};

exports.default = NoteTitle;
//# sourceMappingURL=note_title.js.map