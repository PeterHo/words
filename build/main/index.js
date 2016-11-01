'use strict';

var _windows = require('./windows');

var wnd = _interopRequireWildcard(_windows);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var electron = require('electron');
var app = electron.app,
    BrowserWindow = electron.BrowserWindow,
    Menu = electron.Menu,
    ipcMain = electron.ipcMain,
    ipcRenderer = electron.ipcRenderer;

var ipc = require('./ipc');

// 判断多开
var shouldQuit = app.makeSingleInstance(function () {
    if (wnd.mainWnd) {
        if (wnd.mainWnd.isMinimized()) {
            wnd.mainWnd.restore();
        }
        wnd.mainWnd.focus();
    }
});

if (shouldQuit) {
    app.quit();
}

// 初始化ipc
ipc.init();

// 初始化程序
app.on('ready', function () {
    wnd.init();
});

// 关闭程序
app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});