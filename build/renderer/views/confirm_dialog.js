'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _FlatButton = require('material-ui/FlatButton');

var _FlatButton2 = _interopRequireDefault(_FlatButton);

var _Dialog = require('material-ui/Dialog');

var _Dialog2 = _interopRequireDefault(_Dialog);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ConfirmDialog = function (_Component) {
  _inherits(ConfirmDialog, _Component);

  function ConfirmDialog() {
    _classCallCheck(this, ConfirmDialog);

    return _possibleConstructorReturn(this, (ConfirmDialog.__proto__ || Object.getPrototypeOf(ConfirmDialog)).apply(this, arguments));
  }

  _createClass(ConfirmDialog, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var actions = [_react2.default.createElement(_FlatButton2.default, {
        primary: true,
        label: this.props.cancelString,
        onTouchTap: this.props.onCancel
      }), _react2.default.createElement(_FlatButton2.default, {
        label: this.props.okString,
        onTouchTap: function onTouchTap(event) {
          _this2.props.onOk(event, _this2.props.tmpData);
        }
      })];

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          _Dialog2.default,
          {
            title: this.props.title,
            actions: actions,
            modal: true,
            open: this.props.open
          },
          this.props.confirmString
        )
      );
    }
  }]);

  return ConfirmDialog;
}(_react.Component);

exports.default = ConfirmDialog;


ConfirmDialog.propTypes = {
  cancelString: _react.PropTypes.string,
  okString: _react.PropTypes.string,
  onCancel: _react.PropTypes.func,
  onOk: _react.PropTypes.func,
  title: _react.PropTypes.string,
  open: _react.PropTypes.bool,
  confirmString: _react.PropTypes.string,
  // the data is used for tmp data persistence
  tmpData: _react.PropTypes.object
};
//# sourceMappingURL=confirm_dialog.js.map