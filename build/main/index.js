'use strict';

var _config = require('../config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var electron = require('electron');
var app = electron.app,
    BrowserWindow = electron.BrowserWindow,
    Menu = electron.Menu,
    ipcMain = electron.ipcMain,
    ipcRenderer = electron.ipcRenderer;


var path = require('path');
var windows = require('./windows');
var ipc = require('./ipc');
var menu = require('./menu');
var tray = require('./tray');


var menubar = tray({
    height: 450,
    showDockIcon: true,
    index: 'file://' + path.resolve(__dirname, '../../static/tray.html'),
    icon: path.resolve(__dirname, '../../static/images/IconTemplate.png')
});

menubar.on('ready', function () {});

function init() {
    app.on('ready', function () {
        windows.main.init();
        windows.worker.init();
        menu.init();
    });
}

var shouldQuit = false;

if (!shouldQuit) {
    shouldQuit = app.makeSingleInstance(onAppOpen);
    if (shouldQuit) {
        app.quite();
    }
}

if (!shouldQuit) {
    init();
}

ipc.init();

app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', function () {
    if (windows.main.win === null) {
        windows.main.init();
    }
});

function onAppOpen() {
    if (app.ipcReady) {
        windows.main.show();
    }
}
//# sourceMappingURL=index.js.map