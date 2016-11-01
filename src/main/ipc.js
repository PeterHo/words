const electron = require('electron');
const app = electron.app;
import * as wnd from './windows';
import {log} from './log';

var mainMsgQueue = [];

const init = () => {
    var ipc = electron.ipcMain;

    ipc.on('mainRenderReady', function (e) {
        app.mainRenderReady = true;

        // 暂存msg的queue
        mainMsgQueue.forEach(function (message) {
            if (wnd.mainWnd) {
                wnd.mainWnd.send(...message);
            }
        });

        mainMsgQueue.length = 0;
        console.log('mainRenderReady ............');
    });

    ipc.on('ipcTestMain', (event, arg) => {
        log('main prcess received the ipcTestMain');
    });

    ipc.on('mainCmd', (event, ...args) => {
        if (wnd.mainWnd) {
            return wnd.mainWnd.dispatch(...args);
        }
        wnd.mainWnd.init();
        wnd.mainWnd.dispatch(...args);
    });
};

exports.mainMsgQueue = mainMsgQueue;
exports.init = init;
