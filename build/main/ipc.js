'use strict';

var _windows = require('./windows');

var _windows2 = _interopRequireDefault(_windows);

var _log = require('./log');

var _dialog = require('./dialog');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var electron = require('electron');
var app = electron.app;
var Menu = electron.Menu,
    MenuItem = electron.MenuItem;

var BrowserWindow = electron.BrowserWindow;
var menu = require('./menu');
var shell = require('./shell');


var mainMsgQueue = [];

var init = function init() {
    var ipc = electron.ipcMain;

    ipc.on('mainRenderReady', function (e) {
        app.mainRenderReady = true;

        // 暂存msg的queue
        mainMsgQueue.forEach(function (message) {
            var _windows$main;

            if (_windows2.default.main) (_windows$main = _windows2.default.main).send.apply(_windows$main, _toConsumableArray(message));
        });

        mainMsgQueue.length = 0;
        console.log('mainRenderReady ............');
    });

    ipc.on('ipcTestMain', function (event, arg) {
        (0, _log.log)('main prcess received the ipcTestMain');
    });

    ipc.on('onNotebookContainer', function (event, arg) {
        menu.onNotebookContainer();
    });

    ipc.on('onEditNote', function (event, arg) {
        menu.onEditNote();
    });

    ipc.on('onEditTrash', function (event, arg) {
        menu.onEditTrash();
    });

    ipc.on('onNoEditNotesList', function (event, arg) {
        menu.onNoEditNotesList();
    });

    ipc.on('enableItem', function (event, item) {
        menu.enableItem(item);
    });

    ipc.on('disableItem', function (event, item) {
        menu.disableItem(item);
    });

    ipc.on('openExternal', shell.openExternal);

    // a bridge between main render process to worker process
    ipc.on('workerCmd', function (event) {
        var _windows$worker;

        for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            args[_key - 1] = arguments[_key];
        }

        if (_windows2.default.worker.win) return (_windows$worker = _windows2.default.worker).dispatch.apply(_windows$worker, args);
        _windows2.default.worker.init(function () {
            var _windows$worker2;

            (_windows$worker2 = _windows2.default.worker).dispatch.apply(_windows$worker2, args);
        });
    });

    // a bridge between other window to main
    ipc.on('mainCmd', function (event) {
        var _windows$main2, _windows$main3;

        for (var _len2 = arguments.length, args = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
            args[_key2 - 1] = arguments[_key2];
        }

        if (_windows2.default.main.win) return (_windows$main2 = _windows2.default.main).dispatch.apply(_windows$main2, args);
        _windows2.default.main.init();
        (_windows$main3 = _windows2.default.main).dispatch.apply(_windows$main3, args);
    });

    // open save dialog
    ipc.on('saveDialog', function () {
        _dialog.openSaveDialog.apply(undefined, arguments);
    });

    ipc.on('openFile', function () {
        _dialog.openFileDialog.apply(undefined, arguments);
    });
};

exports.mainMsgQueue = mainMsgQueue;
exports.init = init;
//# sourceMappingURL=ipc.js.map