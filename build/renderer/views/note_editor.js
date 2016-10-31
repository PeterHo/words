'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; // pandao markdown editor
// now not used


var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _co = require('co');

var _co2 = _interopRequireDefault(_co);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _util = require('../../util');

var _constants = require('../../constants');

var _constants2 = _interopRequireDefault(_constants);

var _spinner = require('./spinner');

var _spinner2 = _interopRequireDefault(_spinner);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FILES_PATH = _constants2.default.FILES_PATH;


var clipboard = require('electron').clipboard;
var fs = require('fs');
var toMarkdown = require('to-markdown');
var sanitizeHtml = require('sanitize-html');

// for past image
function pastImage(cm) {
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
function pastHtml(cm, ele) {
  console.log('pastHtml');
  var htmlText = clipboard.readHTML();
  console.log(htmlText);
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
    ele.showSpinner();
    (0, _util.placeImageToLocalAsyn)(tmpContent).then(function (content) {
      ele.hideSpinner();
      cm.replaceSelection(content);
    }, function () {
      ele.hideSpinner();
    });
    // cm.replaceSelection(tmpContent);
    return true;
  }
  return false;
}

// past text
function pastText(cm) {
  var text = clipboard.readText();
  console.log('pastText\n');
  console.log(text);
  if (text && text.length > 0) {
    cm.replaceSelection(text);
  }
}

var NoteEditor = function (_Component) {
  _inherits(NoteEditor, _Component);

  function NoteEditor(props) {
    _classCallCheck(this, NoteEditor);

    var _this = _possibleConstructorReturn(this, (NoteEditor.__proto__ || Object.getPrototypeOf(NoteEditor)).call(this, props));

    _this.showSpinner = function () {
      _this.setState({
        showSpinner: true
      });
    };

    _this.hideSpinner = function () {
      _this.setState({
        showSpinner: false
      });
    };

    _this.keyMap = function () {
      var that = _this;
      var keyMap = {
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
        "Cmd-V": function CmdV(cm) {
          if (pastImage(cm)) {
            return;
          }
          if (pastHtml(cm, that)) {
            return;
          }
          pastText(cm);
        }
      };
      return keyMap;
    };

    _this.setValue = function (value) {
      if (_this.editor.cm) return _this.editor.cm.setValue(value);
      jQuery(_reactDom2.default.findDOMNode(_this.refs.textArea)).val(value);
    };

    _this.clearHistory = function () {
      if (_this.editor.cm) _this.editor.cm.clearHistory();
    };

    _this.state = {
      showSpinner: false
    };
    return _this;
  }

  // default keymap like emacs keybinding
  // todo: add custom keymap


  _createClass(NoteEditor, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var that = this,
          $imageInput = $(_reactDom2.default.findDOMNode(that.refs.imageInput));
      var editor = editormd("editormd", {
        autoFocus: false,
        path: "./lib/",
        // 这个方法只有preview和watch的时候才调用
        onchange: function onchange() {},
        watch: false,
        toolbarIcons: ["undo", "redo", "|", "bold", "italic", "quote", "|", "h1", "h2", "h3", "|", "list-ul", "list-ol", "hr", "|", "link", "reference-link", "insertImage", "code", "preformatted-text", "code-block", "table", "datetime", "html-entities", "pagebreak", "|", "goto-line", "watch", "preview", "fullscreen", "clear", "search"],
        toolbarIconsClass: {
          insertImage: "fa-picture-o" // 指定一个FontAawsome的图标类
        },
        toolbarHandlers: {
          insertImage: function insertImage(cm, icon, cursor, selection) {
            $imageInput.trigger('click');
          }
        },
        // a hack hook
        onChange: function onChange() {
          if (that.props.onChange && that.refs.textArea) {
            that.props.onChange(that.refs.textArea && that.refs.textArea.value || '');
          }
        },
        onload: function onload() {
          $imageInput.change(function (event) {
            var files = event.target.files;
            if (files.length == 0) return;
            (0, _co2.default)(regeneratorRuntime.mark(function _callee() {
              var path, hashKey, key;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      path = files[0].path;
                      _context.next = 3;
                      return (0, _util.getFileHash)(path);

                    case 3:
                      hashKey = _context.sent;
                      key = (0, _util.hash2Key)(hashKey);
                      _context.next = 7;
                      return (0, _util.copyFile)(path, FILES_PATH + '/' + key);

                    case 7:
                      editor.cm.replaceSelection("![" + files[0].name + "](" + key + ")");

                    case 8:
                    case 'end':
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          });

          this.addKeyMap(that.keyMap());
        }
      });
      editor.setToolbarAutoFixed(true);
      this.editor = editor;
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { id: 'editormd' },
        _react2.default.createElement('textarea', {
          defaultValue: this.props.defaultValue,
          ref: 'textArea'
        }),
        _react2.default.createElement('input', { type: 'file', style: { display: 'none' }, ref: 'imageInput', accept: 'image/*' }),
        _react2.default.createElement(_spinner2.default, { show: this.state.showSpinner })
      );
    }
  }]);

  return NoteEditor;
}(_react.Component);

exports.default = NoteEditor;