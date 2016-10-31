'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _path2 = require('path');

var _path3 = _interopRequireDefault(_path2);

var _co = require('co');

var _co2 = _interopRequireDefault(_co);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _util = require('../../util');

var _spinner = require('./spinner');

var _spinner2 = _interopRequireDefault(_spinner);

var _constants = require('../../constants');

var _constants2 = _interopRequireDefault(_constants);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _codemirror = require('codemirror');

var _codemirror2 = _interopRequireDefault(_codemirror);

var _anote_preview = require('./anote_preview');

var _anote_preview2 = _interopRequireDefault(_anote_preview);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FILES_PATH = _constants2.default.FILES_PATH;

var clipboard = require('electron').clipboard;
var fs = require('fs');
var toMarkdown = require('to-markdown');
var sanitizeHtml = require('sanitize-html');

require('codemirror/addon/dialog/dialog.js');
require('codemirror/addon/search/searchcursor.js');
require('codemirror/addon/search/search.js');
require('codemirror/addon/scroll/annotatescrollbar.js');
require('codemirror/addon/search/matchesonscrollbar.js');
require('codemirror/addon/search/jump-to-line.js');

require('codemirror/mode/markdown/markdown');

// for past image
function pastImage(cm) {
  console.log('pastImage');
  var image = clipboard.readImage();
  if (image && !image.isEmpty()) {
    var _ret = function () {
      var text = clipboard.readText();
      (0, _util.buffer2File)(image.toPNG()).then(function (key) {
        cm.replaceSelection("![" + (text.length == 0 ? 'past-image' : text) + "](" + key + ")");
      });
      return {
        v: true
      };
    }();

    if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === "object") return _ret.v;
  }
  return false;
}

// for past html(html2markdown)
function pastHtml(cm, component) {
  var htmlText = clipboard.readHTML();
  //这里electron的坑不小，它也判断不太好是html还是text
  if (!/<[a-z][\s\S]*>/i.test(htmlText)) return false;
  var cleanText = sanitizeHtml(htmlText, {
    allowedTags: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'blockquote', 'p', 'a', 'ul', 'ol', 'nl', 'li', 'b', 'i', 'strong', 'em', 'strike', 'code', 'hr', 'br', 'table', 'thead', 'tbody', 'tr', 'th', 'td', 'pre', 'img'],
    selfClosing: ['br', 'hr', 'base', 'img'],
    allowedAttributes: {
      'a': ['href'],
      'img': ['src']
    }
  });
  if (htmlText && htmlText.length > 0) {
    var tmpContent = toMarkdown(cleanText, {
      converters: [{
        filter: 'code',
        replacement: function replacement(content) {
          return '`' + content + '`';
        }
      }, {
        filter: 'img',
        replacement: function replacement(content, node) {
          // need add back worker
          return "![" + 'web-image' + "](" + node.src + ")";
        }
      }]
    });
    var regex = /(<([^>]+)>)/ig;
    tmpContent = tmpContent.replace(regex, '');
    component.showSpinner();
    (0, _util.placeImageToLocalAsyn)(tmpContent).then(function (content) {
      component.hideSpinner();
      cm.replaceSelection(content);
    }, function () {
      component.hideSpinner();
    });
    // cm.replaceSelection(tmpContent);
    return true;
  }
  return false;
}

// past text
function pastText(cm) {
  var text = clipboard.readText();
  if (text && text.length > 0) {
    cm.replaceSelection(text);
  }
}

var ANoteEditor = function (_Component) {
  _inherits(ANoteEditor, _Component);

  function ANoteEditor(props) {
    _classCallCheck(this, ANoteEditor);

    var _this = _possibleConstructorReturn(this, (ANoteEditor.__proto__ || Object.getPrototypeOf(ANoteEditor)).call(this, props));

    _initialiseProps.call(_this);

    _this.state = {
      showSpinner: false,
      previewValue: _this.props.defaultValue,
      fullscreen: false
    };

    _this.debouncedSetPreviewValue = (0, _util.debounce)(_this.setPrevewValue, 50);
    return _this;
  }

  _createClass(ANoteEditor, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      // init editor
      this.textAreaElement = _reactDom2.default.findDOMNode(this.refs.textArea);
      this.$imageInput = $(_reactDom2.default.findDOMNode(this.refs.imageInput));

      window.editor = this.editor = _codemirror2.default.fromTextArea(this.textAreaElement, {
        theme: 'base16-light',
        mode: 'markdown',
        lineWrapping: true,
        lineNumbers: true
      });

      // set keymaps
      this.setKeyMaps();

      // setsize based on the editorState prop
      this.setSize();

      // change event
      this.editor.on('change', function (instance, changeObj) {
        if (_this2.props.editorState == 1 || _this2.editorState == 2) _this2.debouncedSetPreviewValue(_this2.editor.getValue());
        if (_this2.props.onChange) {
          _this2.props.onChange(_this2.editor.getValue());
        }
      });

      this.editor.setValue(this.props.defaultValue || '');

      // set image input
      this.$imageInput.change(function (event) {
        var files = event.target.files;
        if (files.length == 0) return;
        (0, _co2.default)(regeneratorRuntime.mark(function _callee() {
          var i, _path, hashKey, key;

          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  i = 0;

                case 1:
                  if (!(i < files.length)) {
                    _context.next = 13;
                    break;
                  }

                  _path = files[i].path;
                  _context.next = 5;
                  return (0, _util.getFileHash)(_path);

                case 5:
                  hashKey = _context.sent;
                  key = (0, _util.hash2Key)(hashKey);
                  _context.next = 9;
                  return (0, _util.copyFile)(_path, FILES_PATH + '/' + key);

                case 9:
                  this.editor.replaceSelection("![" + files[i].name + "](" + key + ")");

                case 10:
                  i++;
                  _context.next = 1;
                  break;

                case 13:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, this);
        }));
      });
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(newProps) {
      this.setSize(newProps);
      if (newProps.editorState == 1 || newProps.editorState == 2) this.debouncedSetPreviewValue(this.editor.getValue());
    }

    // set editor size based on editorState
    // 0 => normal editor, 1 => watching, 2 => preview


    // set keymaps


    // 这个用于以ref形式来操作editor


    // toolbar elements

  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        {
          className: this._anoteClassNames()
        },
        _react2.default.createElement(_spinner2.default, { show: this.state.showSpinner }),
        _react2.default.createElement(
          'div',
          {
            className: 'content-wrapper'
          },
          _react2.default.createElement(
            'div',
            {
              className: this.props.editorState == 2 || !!this.props.withoutToolbar ? 'toolbar hidden' : 'toolbar'
            },
            this._renderTools()
          ),
          _react2.default.createElement(
            'div',
            {
              className: 'anote-workpanel'
            },
            _react2.default.createElement('textarea', {
              ref: 'textArea'
            }),
            _react2.default.createElement('input', {
              type: 'file',
              style: { display: 'none' },
              ref: 'imageInput',
              accept: 'image/*',
              multiple: true
            }),
            _react2.default.createElement(_anote_preview2.default, {
              style: {
                position: 'absolute',
                top: '0px',
                right: '0px'
              },
              value: this.state.previewValue,
              ref: 'preview'
            }),
            _react2.default.createElement('a', {
              href: 'javascript:;',
              className: 'fa fa-close anote-preview-close-btn',
              style: this._anotePreviewCloseBtnStyle(),
              onClick: this.togglePreview
            })
          )
        )
      );
    }
  }]);

  return ANoteEditor;
}(_react.Component);

var _initialiseProps = function _initialiseProps() {
  var _this3 = this,
      _arguments = arguments;

  this.componentWillUnmount = function () {
    _this3.debouncedSetPreviewValue.cancel();
  };

  this.setPrevewValue = function (previewValue) {
    _this3.setState({
      previewValue: previewValue
    });
  };

  this.showSpinner = function () {
    _this3.setState({
      showSpinner: true
    });
  };

  this.hideSpinner = function () {
    _this3.setState({
      showSpinner: false
    });
  };

  this.defaultKeyMaps = function () {
    var that = _this3;
    return {
      "Ctrl-P": function CtrlP(cm) {
        cm.execCommand("goLineUp");
      },
      "Ctrl-N": function CtrlN(cm) {
        cm.execCommand("goLineDown");
      },
      "Ctrl-A": function CtrlA(cm) {
        cm.execCommand("goLineStart");
      },
      "Ctrl-E": function CtrlE(cm) {
        cm.execCommand("goLineEnd");
      },
      "Ctrl-K": function CtrlK(cm) {
        cm.execCommand("killLine");
      },
      "Ctrl-F": function CtrlF(cm) {
        cm.execCommand("goColumnRight");
      },
      "Ctrl-B": function CtrlB(cm) {
        cm.execCommand("goColumnLeft");
      },
      "Alt-F": function AltF(cm) {
        cm.execCommand("goWordRight");
      },
      "Alt-B": function AltB(cm) {
        cm.execCommand("goWordLeft");
      },
      // 自动判断文本格式来粘贴
      "Cmd-V": function CmdV(cm) {
        if (pastImage(cm)) {
          return;
        }
        if (pastHtml(cm, that)) {
          return;
        }
        pastText(cm);
      },
      "Cmd-Z": function CmdZ(cm) {
        var doc = cm.getDoc();
        if (doc) doc.undo();
      },
      "Cmd-Y": function CmdY(cm) {
        var doc = cm.getDoc();
        if (doc) doc.redo();
      },
      // 粘贴纯文本
      "Alt-V": function AltV(cm) {
        pastText(cm);
      },
      "Cmd-S": function CmdS(cm) {
        if (that.props.onChange) that.props.onChange(cm.getValue());
      },
      "Cmd-F": "findPersistent"
    };
  };

  this.setSize = function (newProps) {
    var props = newProps || _this3.props,
        editorState = props.editorState || 0;
    switch (editorState) {
      // normal
      case 0:
        _this3.editor.setSize('100%', '100%');
        _this3.refs.preview.setSize('0px', '0px');
        break;
      // watching
      case 1:
        _this3.editor.setSize('50%', '100%');
        _this3.refs.preview.setSize('50%', '100%');
        break;
      // preview
      case 2:
        _this3.editor.setSize('0px', '0px');
        _this3.refs.preview.setSize('100%', '100%');
        break;
      default:
        return;
    }
  };

  this.setValue = function (value) {
    if (_this3.editor) {
      return _this3.editor.setValue(value);
    }
    jQuery(_reactDom2.default.findDOMNode(_this3.refs.textArea)).val(value);
  };

  this.getValue = function () {
    if (_this3.editor) return _this3.editor.getValue();
    return false;
  };

  this.clearHistory = function () {
    if (_this3.editor) _this3.editor.clearHistory();
  };

  this.setKeyMaps = function (newProps) {
    var props = newProps || _this3.props;
    console.log(Object.assign({}, _this3.defaultKeyMaps(), props.keyMaps));
    if (props.keyMaps && _typeof(props.keyMaps) == 'object') return _this3.editor.setOption('extraKeys', Object.assign({}, _this3.defaultKeyMaps(), props.keyMaps));
    if (_this3.props.keyMaps && typeof props.keyMaps == 'function') return _this3.editor.setOption('extraKeys', Object.assign({}, _this3.defaultKeyMaps(), props.keyMaps()));
    _this3.editor.setOption('extraKeys', _this3.defaultKeyMaps());
  };

  this.performEditor = function (method) {
    if (!_this3.editor || !_this3.editor[method] || typeof _this3.editor[method] != 'function') return;
    var args = [].slice.apply(_arguments, [1]);
    _this3.editor[method].apply(_this3.editor, args);
  };

  this.insertImage = function (event) {
    event.preventDefault();
    event.stopPropagation();
    if (_this3.$imageInput) _this3.$imageInput.trigger('click');
  };

  this._renderTools = function () {
    return _react2.default.createElement(
      'div',
      {
        className: 'toolbar-container'
      },
      _react2.default.createElement(
        'ul',
        {
          className: 'menu left'
        },
        _react2.default.createElement(
          'li',
          null,
          _react2.default.createElement(
            'a',
            {
              href: 'javascript:;',
              title: 'undo\uFF08Cmd+Z\uFF09',
              unselectable: 'on',
              onClick: _this3.undo
            },
            _react2.default.createElement('i', { className: 'fa fa-undo', name: 'undo' })
          )
        ),
        _react2.default.createElement(
          'li',
          null,
          _react2.default.createElement(
            'a',
            {
              href: 'javascript:;',
              title: 'redo\uFF08Cmd+Y\uFF09',
              unselectable: 'on',
              onClick: _this3.redo
            },
            _react2.default.createElement('i', { className: 'fa fa-repeat', name: 'redo' })
          )
        )
      ),
      _react2.default.createElement(
        'ul',
        {
          className: 'menu right'
        },
        _react2.default.createElement(
          'li',
          null,
          _react2.default.createElement(
            'a',
            {
              href: 'javascript:;',
              title: 'bold',
              unselectable: 'on',
              onClick: _this3.changeBold
            },
            _react2.default.createElement('i', { className: 'fa fa-bold', name: 'bold', unselectable: 'on' })
          )
        ),
        _react2.default.createElement(
          'li',
          null,
          _react2.default.createElement(
            'a',
            {
              href: 'javascript:;',
              title: 'italics',
              unselectable: 'on',
              onClick: _this3.changeItalics
            },
            _react2.default.createElement('i', { className: 'fa fa-italic', name: 'italic', unselectable: 'on' })
          )
        ),
        _react2.default.createElement(
          'li',
          {
            className: 'divider',
            unselectable: 'on'
          },
          '|'
        ),
        _react2.default.createElement(
          'li',
          null,
          _react2.default.createElement(
            'a',
            {
              href: 'javascript:;',
              title: 'list',
              unselectable: 'on',
              onClick: _this3.insertUl
            },
            _react2.default.createElement('i', {
              className: 'fa fa-list-ul',
              name: 'list-ul',
              unselectable: 'on'
            })
          )
        ),
        _react2.default.createElement(
          'li',
          null,
          _react2.default.createElement(
            'a',
            {
              href: 'javascript:;',
              title: 'order list',
              unselectable: 'on',
              onClick: _this3.insertOl
            },
            _react2.default.createElement('i', {
              className: 'fa fa-list-ol',
              name: 'list-ol',
              unselectable: 'on'
            })
          )
        ),
        _react2.default.createElement(
          'li',
          null,
          _react2.default.createElement(
            'a',
            {
              href: 'javascript:;',
              title: 'hr',
              unselectable: 'on',
              onClick: _this3.insertHr
            },
            _react2.default.createElement('i', {
              className: 'fa fa-minus',
              name: 'hr',
              unselectable: 'on'
            })
          )
        ),
        _react2.default.createElement(
          'li',
          null,
          _react2.default.createElement(
            'a',
            {
              href: 'javascript:;',
              title: 'add image',
              unselectable: 'on',
              onClick: _this3.insertImage
            },
            _react2.default.createElement('i', { className: 'fa fa-picture-o', name: 'image' })
          )
        ),
        _react2.default.createElement(
          'li',
          {
            className: 'divider',
            unselectable: 'on'
          },
          '|'
        ),
        _react2.default.createElement(
          'li',
          null,
          _react2.default.createElement(
            'a',
            {
              href: 'javascript:;',
              title: 'watch',
              unselectable: 'on',
              onClick: _this3.toggleWatching
            },
            _react2.default.createElement('i', { className: _this3._anoteWatchingClassNames(), name: 'watch' })
          )
        ),
        _react2.default.createElement(
          'li',
          null,
          _react2.default.createElement(
            'a',
            {
              href: 'javascript:;',
              title: 'preview',
              unselectable: 'on',
              onClick: _this3.togglePreview
            },
            _react2.default.createElement('i', { className: 'fa fa-desktop', name: 'preview' })
          )
        ),
        _react2.default.createElement(
          'li',
          null,
          _react2.default.createElement(
            'a',
            {
              href: 'javascript:;',
              title: 'fullscreen',
              unselectable: 'on',
              onClick: _this3.toggleFullscreen,
              className: _this3.state.fullscreen ? 'active' : ''
            },
            _react2.default.createElement('i', { className: 'fa fa-arrows-alt', name: 'fullscreen' })
          )
        )
      )
    );
  };

  this.undo = function (event) {
    event.preventDefault();
    event.stopPropagation();

    var doc = _this3.editor.getDoc();
    if (doc) doc.undo();
  };

  this.redo = function (event) {
    event.preventDefault();
    event.stopPropagation();

    var doc = _this3.editor.getDoc();
    if (doc) doc.redo();
  };

  this.toggleFullscreen = function () {
    _this3.setState({
      fullscreen: !_this3.state.fullscreen
    });
  };

  this.toggleWatching = function () {
    if (_this3.props.toggleWatching) _this3.props.toggleWatching();
  };

  this.togglePreview = function () {
    if (_this3.props.togglePreview) _this3.props.togglePreview();
  };

  this.changeBold = function (event) {
    event.preventDefault();
    event.stopPropagation();

    _this3.editor.replaceSelection('**' + _this3.editor.getSelection() + '**');
  };

  this.changeItalics = function (event) {
    event.preventDefault();
    event.stopPropagation();

    _this3.editor.replaceSelection('*' + _this3.editor.getSelection() + '*');
  };

  this.insertHr = function (event) {
    event.preventDefault();
    event.stopPropagation();

    _this3.editor.replaceSelection('------------');
  };

  this.insertUl = function (event) {
    event.preventDefault();
    event.stopPropagation();

    _this3.editor.replaceSelection('- ');
  };

  this.insertOl = function (event) {
    event.preventDefault();
    event.stopPropagation();

    _this3.editor.replaceSelection('1. ');
  };

  this._anoteClassNames = function () {
    var klasses = '';
    klasses = _this3.state.fullscreen ? 'anote-editor anote-fullscreen' : 'anote-editor';
    if (_this3.props.editorState == 2 || _this3.props.withoutToolbar) klasses += ' anote-without-toolbar';
    return klasses;
  };

  this._anoteWatchingClassNames = function () {
    var klasses = '';
    if (_this3.props.editorState == 1) {
      klasses += 'fa fa-eye-slash';
    } else {
      klasses += 'fa fa-eye';
    }
    return klasses;
  };

  this._anotePreviewCloseBtnStyle = function () {
    if (_this3.props.editorState == 2) {
      return {
        display: 'block'
      };
    }
    return {
      display: 'none'
    };
  };
};

exports.default = ANoteEditor;