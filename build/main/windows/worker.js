'use strict';

var _log = require('../log');

var worker = module.exports = {
    win: null,
    init: init,
    send: send,
    dispatch: dispatch
};


// 做后台工作的invisible window
var electron = require('electron');
var BrowserWindow = electron.BrowserWindow;
var path = require('path');

function init(callback) {
    if (worker.win) return;
    worker.win = new BrowserWindow({
        width: 0,
        height: 0,
        show: false
    });

    worker.win.loadURL('file://' + path.resolve(__dirname, '../../../static/worker.html'));

    worker.win.on('closed', function () {
        worker.win = null;
    });

    // 确保worker是开着的, 因为main window的reload会使得worker经常死掉
    if (callback) {
        worker.win.webContents.once('did-finish-load', function () {
            callback();
        });
    }
}

function send() {
    var _worker$win;

    if (worker.win) (_worker$win = worker.win).send.apply(_worker$win, arguments);
}

function dispatch() {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
    }

    send.apply(undefined, ['dispatch'].concat(args));
}
//# sourceMappingURL=worker.js.map