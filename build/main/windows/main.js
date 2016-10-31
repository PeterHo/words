'use strict';

var _ipc = require('../ipc.js');

var main = module.exports = {
    init: init,
    show: show,
    hide: hide,
    send: send,
    dispatch: dispatch,
    win: null
};

var electron = require('electron');

var app = electron.app;

var BrowserWindow = electron.BrowserWindow;

var path = require('path');

var menu = require('../menu');

function init() {
    if (main.win) {
        return main.win.show();
    }

    var win = main.win = new BrowserWindow({
        width: 1000,
        height: 800,
        darkTheme: true,
        name: 'ANOTE',
        backgroundColor: '#eee',
        show: false
    });

    win.once('ready-to-show', function () {
        show();
        menu.enableItem('New Notebook');
    });

    // and load the index.html of the app.
    win.loadURL('file://' + path.resolve(__dirname, '../../../static/main.html'));

    // Open the DevTools.
    // win.webContents.openDevTools();

    // Emitted when the window is closed.
    win.on('closed', function () {
        win = main.win = null;
        _ipc.mainMsgQueue.length = 0;
        app.mainRenderReady = false;
        menu.onNoMainWin();
    });
}

function show() {
    if (!main.win) return;
    main.win.show();
}

function hide() {
    if (!main.win) return;
    main.win.hide();
}

function send() {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
    }

    if (!main.win || !app.mainRenderReady) {
        _ipc.mainMsgQueue.push(args);
    } else {
        var _main$win;

        (_main$win = main.win).send.apply(_main$win, args);
    }
}

// dispath a event to render process
// 处于给render process 发送事件dispatch，并且处理.
function dispatch() {
    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
    }

    send.apply(undefined, ['dispatch'].concat(args));
}
//# sourceMappingURL=main.js.map