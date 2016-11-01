'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _TextField = require('material-ui/TextField');

var _TextField2 = _interopRequireDefault(_TextField);

var _anote_preview = require('./anote_preview');

var _anote_preview2 = _interopRequireDefault(_anote_preview);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // only preview


var NotePreview = function (_Component) {
  _inherits(NotePreview, _Component);

  function NotePreview() {
    _classCallCheck(this, NotePreview);

    return _possibleConstructorReturn(this, (NotePreview.__proto__ || Object.getPrototypeOf(NotePreview)).apply(this, arguments));
  }

  _createClass(NotePreview, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          {
            style: {
              fontSize: '18px',
              color: '#5d5d5d',
              height: '45px',
              verticalAlign: 'middle',
              lineHeight: '45px',
              padding: '0px 18px 0px 18px',
              backgroundColor: '#fff',
              boxSizing: 'border-box',
              width: '100%',
              overflowX: 'none'
            }
          },
          this.props.currentFile && this.props.currentFile.title || 'Untitled'
        ),
        _react2.default.createElement(
          'div',
          {
            className: 'editor-wrapper',
            ref: 'previewPanel',
            id: 'previewPanel'
          },
          _react2.default.createElement(_anote_preview2.default, {
            style: {
              position: 'absolute',
              top: '0px',
              right: '0px',
              left: '0px',
              bottom: '0px'
            },
            value: this.props.currentFile.content || ''
          })
        )
      );
    }
  }]);

  return NotePreview;
}(_react.Component);

NotePreview.propTypes = {
  currentFile: _react.PropTypes.object
};

exports.default = NotePreview;
//# sourceMappingURL=note_preview.js.map