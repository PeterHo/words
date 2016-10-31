'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _anote_editor = require('./anote_editor');

var _anote_editor2 = _interopRequireDefault(_anote_editor);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _require = require('electron'),
    remote = _require.remote;

var Menu = remote.Menu,
    MenuItem = remote.MenuItem;

var BrowserWindow = remote.BrowserWindow;
var path = require('path');
var ipcRender = require('electron').ipcRenderer;
var webContents = remote.webContents;

var menu = new Menu();
menu.append(new MenuItem({ label: 'MenuItem1', click: function click() {
    console.log('item 1 clicked');
  }
}));
menu.append(new MenuItem({ type: 'separator' }));
menu.append(new MenuItem({ label: 'MenuItem2', type: 'checkbox', checked: true }));

var TestContainer = function (_Component) {
  _inherits(TestContainer, _Component);

  function TestContainer(props) {
    _classCallCheck(this, TestContainer);

    var _this = _possibleConstructorReturn(this, (TestContainer.__proto__ || Object.getPrototypeOf(TestContainer)).call(this, props));

    _this.contextMunuHandler = function () {
      menu.popup(remote.getCurrentWindow());
    };

    _this.windowClick = function () {
      var modalPath = path.join('file://', __dirname, '../../../static/test.html');
      var win = new BrowserWindow({ width: 400, height: 320 });
      win.on('close', function () {
        win = null;
      });
      win.loadURL(modalPath);
      win.show();
      var opts = {
        marginsType: 0,
        printBackground: true,
        printSelectionOnly: false,
        pageSize: 'A4',
        landscape: false
      };
      win.webContents.on('did-finish-load', function () {
        win.webContents.printToPDF(opts, function (err, data) {
          if (err) console.log(err);
          _fs2.default.writeFile(path.resolve(__dirname, '../../../testpdf.pdf'), data, function (err) {
            if (err) {
              console.error(err);
            }
            console.log('success!!!');
          });
        });
      });
    };

    _this.testIpc = function () {
      // 函数是传不过去的
      ipcRender.send('ipcTestMain', { hh: 'hh' });
    };

    _this.testPdf = function () {
      var opts = {
        marginsType: 0,
        printBackground: true,
        printSelectionOnly: false,
        pageSize: 'A4',
        landscape: false
      };
      webContents.getFocusedWebContents().printToPDF(opts, function (err, data) {
        if (err) console.log(err);
        _fs2.default.writeFile(path.resolve(__dirname, '../../../testpdf.pdf'), data, function (err) {
          if (err) {
            console.error(err);
          }
          console.log('success!!!');
        });
      });
    };

    _this.toggleWatching = function () {
      _this.setState({
        editorState: _this.state.editorState == 1 ? 0 : 1,
        oldState: _this.state.editorState == 1 ? 0 : 1
      });
    };

    _this.togglePreview = function () {
      _this.setState({
        editorState: _this.state.editorState == 2 ? _this.state.oldState || 0 : 2
      });
    };

    _this.state = {
      editorState: 1,
      oldState: null
    };
    return _this;
  }

  // context menu handler


  // open new window


  // electron printToPDF, so cool!!!!!!


  _createClass(TestContainer, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          {
            onContextMenu: this.contextMunuHandler,
            style: {
              height: '100px',
              backgroundColor: '#fae'
            }
          },
          'right menu'
        ),
        _react2.default.createElement(
          'div',
          {
            style: {
              height: '100px',
              backgroundColor: '#efa'
            },
            onClick: this.windowClick
          },
          'open window'
        ),
        _react2.default.createElement(
          'div',
          {
            style: {
              height: '400px',
              backgroundColor: '#eef'
            },
            onClick: this.testIpc
          },
          'test Ipc'
        ),
        _react2.default.createElement(
          'div',
          {
            style: {
              height: '500px'
            }
          },
          _react2.default.createElement(_anote_editor2.default, {
            defaultValue: '### h',
            editorState: this.state.editorState,
            toggleWatching: this.toggleWatching,
            togglePreview: this.togglePreview
          })
        ),
        _react2.default.createElement(
          'div',
          {
            onClick: this.testPdf
          },
          'test5'
        )
      );
    }
  }]);

  return TestContainer;
}(_react.Component);

exports.default = TestContainer;