'use strict';

var _co = require('co');

var _co2 = _interopRequireDefault(_co);

var _constants = require('../constants');

var _constants2 = _interopRequireDefault(_constants);

var _set_db = require('../main/set_db');

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _util = require('../util');

var _render_factory = require('../render_factory');

var _render_factory2 = _interopRequireDefault(_render_factory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Promise = require('bluebird');
window.$ = window.jQuery = window.jquery = require('jquery');

require('babel-polyfill');
var FILES_PATH = _constants2.default.FILES_PATH;

var ipcRenderer = require('electron').ipcRenderer;

var marked = require('marked');

var _require = require('electron'),
    remote = _require.remote;

var BrowserWindow = remote.BrowserWindow;
var statAsync = Promise.promisify(_fs2.default.stat);
var writeFileAsync = Promise.promisify(_fs2.default.writeFile);

function _renderHtml(markdown) {
  var markedRenderer = (0, _render_factory2.default)({});
  return marked(markdown, {
    renderer: markedRenderer
  });
}

function _renderPdf(html, filename) {
  var opts = {
    marginsType: 0,
    printBackground: true,
    printSelectionOnly: false,
    pageSize: 'A4',
    landscape: false
  };
  var win = new BrowserWindow({ width: 0, height: 0, show: false });
  win.loadURL('file://' + _path2.default.resolve(__dirname, '../../static/html_to_pdf.html'), {});
  win.on('closed', function () {
    win = null;
  });
  win.webContents.on('dom-ready', function () {
    win.webContents.executeJavaScript('\n      var $marked = $(\'#marked\');\n      $(\'#marked\').html(`' + html + '`);\n    ');
    setTimeout(function () {
      win.webContents.printToPDF(opts, function (err, data) {
        if (err) {
          return;
        }
        _fs2.default.writeFile(filename, data, function (err) {
          if (err) {
            return;
          }
          win.destroy();
        });
      });
    }, 200);
  });
}

var dispatchHandlers = {
  'testHandler': function testHandler() {
    var _console;

    (_console = console).log.apply(_console, arguments);
  },
  // 把笔记到处存为markdown
  'saveNoteAsMarkdown': function saveNoteAsMarkdown(fileId) {
    ipcRenderer.send('saveDialog', 'export a note', 'md', { fileId: fileId, type: 'saveNoteAsMarkdown' });
  },
  'saveNoteAsPdf': function saveNoteAsPdf(fileId) {
    ipcRenderer.send('saveDialog', 'export a note', 'pdf', { fileId: fileId, type: 'saveNoteAsPdf' });
  },
  // main process save的callback
  'fileSaved': function fileSaved(filename, tmpData) {
    var that = this;
    switch (tmpData.type) {
      case 'saveNoteAsMarkdown':
        _set_db.files.find({ _id: tmpData.fileId }, function (err, docs) {
          if (err || docs.length == 0) return;
          var content = docs[0].content;
          (0, _co2.default)(regeneratorRuntime.mark(function _callee() {
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    if (!(content.length > 0)) {
                      _context.next = 4;
                      break;
                    }

                    _context.next = 3;
                    return mdLocalImageOut(filename, content);

                  case 3:
                    content = _context.sent;

                  case 4:
                    _context.next = 6;
                    return writeFileAsync(filename, content);

                  case 6:
                  case 'end':
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        });
        break;
        return;
      case 'saveNoteAsPdf':
        _set_db.files.find({ _id: tmpData.fileId }, function (err, docs) {
          if (err || docs.length == 0) return;
          var content = docs[0].content;
          var html = _renderHtml(content);
          _renderPdf(html, filename);
        });
        break;
        return;
      default:
        return;
    }
  },
  // 导入markdown or html
  importFile: function importFile() {
    ipcRenderer.send('openFile', { type: "importFile" });
  },
  // 选择文件的callback
  selectedFile: function selectedFile(files, tmpData) {
    console.log(files);
    console.log(tmpData);
    var file = files[0];
    switch (tmpData.type) {
      case "importFile":
        console.log('xxxxx');
        return;
        break;
      default:

    }
  }
};

var ipcRender = require('electron').ipcRenderer;

function dispatch(action) {
  for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  if (dispatchHandlers[action]) dispatchHandlers[action].apply(dispatchHandlers, args);
}

function init() {
  ipcRender.on('dispatch', function (e) {
    for (var _len2 = arguments.length, args = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      args[_key2 - 1] = arguments[_key2];
    }

    dispatch.apply(undefined, args);
  });
}

// 调用方法前确定有content
function mdLocalImageOut(filename, content) {
  content = content || '';
  var basename = _path2.default.basename(filename).split('.')[0];
  var dirname = _path2.default.dirname(filename);
  var index = 0;
  var pp = /!\[(.*?)\]\((.*?)\)/i;
  var ppp = /[http|https]/;
  var m = void 0;
  var result = content;
  return (0, _co2.default)(regeneratorRuntime.mark(function _callee2() {
    var matchTxt, text, href, originPath, stats;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            m = pp.exec(content);

            if (!m) {
              _context2.next = 16;
              break;
            }

            matchTxt = m[0];
            text = m[1];
            href = m[2];

            if (ppp.test(href)) {
              _context2.next = 16;
              break;
            }

            originPath = _path2.default.resolve(FILES_PATH, href);
            _context2.next = 9;
            return statAsync(originPath);

          case 9:
            stats = _context2.sent;

            if (!stats.isFile()) {
              _context2.next = 16;
              break;
            }

            _context2.next = 13;
            return (0, _util.copyFile)(originPath, _path2.default.resolve(dirname, './' + basename + '_images/' + index));

          case 13:
            result = result.replace(matchTxt, '![' + text + '](./' + basename + '_images/' + index + ')');
            content = content.replace(matchTxt, '');
            index = index + 1;

          case 16:
            if (m) {
              _context2.next = 0;
              break;
            }

          case 17:
            return _context2.abrupt('return', result);

          case 18:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, this);
  }));
}

init();