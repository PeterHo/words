const electron = require('electron');
const {app, BrowserWindow, Menu, ipcMain, ipcRenderer} = electron;

import * as wnd from './windows';
const ipc = require('./ipc');

// 判断多开
const shouldQuit = app.makeSingleInstance(() => {
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
