'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _render_factory = require('../../render_factory');

var _render_factory2 = _interopRequireDefault(_render_factory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var marked = require('marked');


var defaultStyle = {
  backgroundColor: '#fff',
  overflowY: 'scroll'
};

var ANotePreview = function (_Component) {
  _inherits(ANotePreview, _Component);

  function ANotePreview(props) {
    _classCallCheck(this, ANotePreview);

    var _this = _possibleConstructorReturn(this, (ANotePreview.__proto__ || Object.getPrototypeOf(ANotePreview)).call(this, props));

    _this.renderMarkdown = function () {
      return {
        __html: marked(_this.props.value || '', {
          renderer: _this.markedRenderer
        })
      };
    };

    _this.setSize = function (width, height) {
      var newStyle = {};
      if (width) newStyle['width'] = width;
      if (height) newStyle['height'] = height;
      var style = Object.assign({}, _this.state.style, newStyle);
      _this.setState({
        style: style
      });
    };

    _this.markedRenderer = (0, _render_factory2.default)(_this.props.rendererOptions);
    _this.state = {
      style: Object.assign({}, defaultStyle, _this.props.style || {})
    };
    return _this;
  }

  _createClass(ANotePreview, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        {
          style: this.state.style,
          className: 'anote-preview'
        },
        _react2.default.createElement('div', {
          className: 'markdown-body editormd-preview-container',
          dangerouslySetInnerHTML: this.renderMarkdown()
        })
      );
    }
  }]);

  return ANotePreview;
}(_react.Component);

ANotePreview.propTypes = {
  value: _react.PropTypes.string,
  style: _react.PropTypes.object,
  rendererOptions: _react.PropTypes.object
};

exports.default = ANotePreview;
//# sourceMappingURL=anote_preview.js.map