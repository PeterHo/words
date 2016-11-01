'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _RefreshIndicator = require('material-ui/RefreshIndicator');

var _RefreshIndicator2 = _interopRequireDefault(_RefreshIndicator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var style = {
  container: {
    position: 'absolute',
    left: '0px',
    right: '0px',
    top: '0px',
    bottom: '0px',
    background: '#fff',
    zIndex: 900
  },
  center: {
    margin: 'auto',
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    width: '60px',
    height: '60px'
  },
  refresh: {
    display: 'inline-block',
    position: 'relative',
    zIndex: 1000
  }
};

var Spinner = function Spinner(props) {
  return props.show ? _react2.default.createElement(
    'div',
    { style: style.container },
    _react2.default.createElement(
      'div',
      { style: style.center },
      _react2.default.createElement(_RefreshIndicator2.default, {
        size: 60,
        left: 0,
        top: 0,
        status: 'loading',
        style: style.refresh
      })
    )
  ) : _react2.default.createElement('div', null);
};

exports.default = Spinner;
//# sourceMappingURL=spinner.js.map