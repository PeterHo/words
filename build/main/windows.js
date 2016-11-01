'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.mainWnd = undefined;
exports.init = init;
exports.send = send;
exports.dispatch = dispatch;

var _ipc = require('./ipc.js');

var electron = require('electron');
var app = electron.app,
    BrowserWindow = electron.BrowserWindow;


var path = require('path');

var mainWnd = exports.mainWnd = null;

function init() {
    if (mainWnd) {
        return mainWnd.show();
    }

    exports.mainWnd = mainWnd = new BrowserWindow({
        width: 1000,
        height: 800,
        icon: '' + path.resolve(__dirname, '../../static/images/app-icon.jpeg')
    });

    mainWnd.loadURL('file://' + path.resolve(__dirname, '../../static/main.html'));

    mainWnd.on('closed', function () {
        exports.mainWnd = mainWnd = null;
        _ipc.mainMsgQueue.length = 0;
        app.mainRenderReady = false;
    });
}

function send() {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
    }

    if (!mainWnd || !app.mainRenderReady) {
        _ipc.mainMsgQueue.push(args);
    } else {
        var _mainWnd;

        (_mainWnd = mainWnd).send.apply(_mainWnd, args);
    }
}

function dispatch() {
    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
    }

    send.apply(undefined, ['dispatch'].concat(args));
}
//# sourceMappingURL=windows.js.map