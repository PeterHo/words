'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _util = require('../../util');

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _note_preview = require('./note_preview');

var _note_preview2 = _interopRequireDefault(_note_preview);

var _note_title = require('./note_title');

var _note_title2 = _interopRequireDefault(_note_title);

var _anote_editor = require('./anote_editor');

var _anote_editor2 = _interopRequireDefault(_anote_editor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FileForm = function (_Component) {
  _inherits(FileForm, _Component);

  function FileForm(props) {
    _classCallCheck(this, FileForm);

    var _this = _possibleConstructorReturn(this, (FileForm.__proto__ || Object.getPrototypeOf(FileForm)).call(this, props));

    _this.onTitleChange = function (value, currentFile) {
      if (_this.props.callbacks && _this.props.callbacks.onChangeTitle && currentFile.title != value) _this.props.callbacks.onChangeTitle(value, currentFile);
    };

    _this.onContentChange = function (value, currentFile) {
      if (value == null || currentFile == null) return;
      if (_this.props.callbacks && _this.props.callbacks.onChangeContent) {
        if (value != currentFile.content) _this.props.callbacks.onChangeContent(value, currentFile);
      }
    };

    _this.toggleWatching = function () {
      _this.setState({
        oldState: _this.props.editorState == 1 ? 0 : 1
      });
      _this.props.setEditorState(_this.props.editorState == 1 ? 0 : 1);
    };

    _this.togglePreview = function () {
      _this.props.setEditorState(_this.props.editorState == 2 ? _this.state.oldState || 0 : 2);
    };

    _this.componentWillUnmount = function () {
      _this.debouncedOnTitleChange.cancel();
      _this.debouncedOnContentchange.cancel();
    };

    _this.componentWillReceiveProps = function (newProps) {
      if ((_this.props.currentFile && _this.props.currentFile._id) != (newProps.currentFile && newProps.currentFile._id)) {
        if (_this.refs.fileTitle) {
          _this.refs.fileTitle.setValue(newProps.currentFile.title);
          _this.refs.fileTitle.focus();
          _this.debouncedOnTitleChange.cancel();
        }
      }
      if ((_this.props.currentFile && _this.props.currentFile._id) != (newProps.currentFile && newProps.currentFile._id)) {
        if (_this.refs.fileContent) {
          _this.refs.fileContent.setValue(newProps.currentFile.content || '');
          _this.refs.fileContent.clearHistory();
          _this.debouncedOnContentchange.cancel();
        }
      }
    };

    _this.debouncedOnTitleChange = (0, _util.debounce)(_this.onTitleChange, 200);
    _this.debouncedOnContentchange = (0, _util.debounce)(_this.onContentChange, 200);
    _this.state = {
      oldState: null
    };
    return _this;
  }

  _createClass(FileForm, [{
    key: 'render',


    // cause: defaultValue only a initial state, not updated by state or props, so, have to replace element by condition
    // cause: key is very very important, key change will update the whole element. not just replace the attributes
    // key={(this.props.currentFile && this.props.currentFile._id) || 'none'}
    // 暂时去掉key的写法，用componentWillReceiveProps来手动赋值，提高editor的效率
    value: function render() {
      var _this2 = this;

      var realForm = this.props.available == 'true' ? _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_note_title2.default, {
          autoFocus: true,
          onChange: function onChange(event) {
            event.preventDefault();
            event.stopPropagation();
            _this2.debouncedOnTitleChange(event.target.value, _this2.props.currentFile);
          },
          defaultValue: this.props.currentFile && this.props.currentFile.title,
          ref: 'fileTitle',
          style: {
            padding: '11px 8px 12px 8px',
            display: 'block',
            border: 'none',
            borderBottom: '1pz solid #808080',
            fontSize: '16px',
            width: '100%',
            boxSizing: 'border-box'
          }
        }),
        _react2.default.createElement(
          'div',
          { className: 'editor-wrapper' },
          _react2.default.createElement(_anote_editor2.default, {
            defaultValue: this.props.currentFile && this.props.currentFile.content,
            ref: 'fileContent',
            editorState: this.props.editorState,
            toggleWatching: this.toggleWatching,
            togglePreview: this.togglePreview,
            onChange: function onChange(value) {
              _this2.debouncedOnContentchange(value, _this2.props && _this2.props.currentFile || null);
            }
          })
        )
      ) : _react2.default.createElement(_note_preview2.default, {
        key: this.props.currentFile._id,
        currentFile: this.props.currentFile
      });
      return this.props.currentFile && this.props.currentFile._id ? realForm : _react2.default.createElement('div', null);
    }
  }]);

  return FileForm;
}(_react.Component);

FileForm.propTypes = {
  currentFile: _react.PropTypes.object,
  callbacks: _react.PropTypes.object
};

exports.default = FileForm;
//# sourceMappingURL=file_form.js.map