const electron = require('electron')
const {app, BrowserWindow} = electron;

const path = require('path')

import {mainMsgQueue} from './ipc.js';


export let mainWnd = null;

export function init() {
    if (mainWnd) {
        return mainWnd.show();
    }

    mainWnd = new BrowserWindow({
        width: 1000,
        height: 800,
        icon: `${path.resolve(__dirname, '../../static/images/app-icon.jpeg')}`
    });

    mainWnd.loadURL(`file://${path.resolve(__dirname, '../../static/main.html')}`)

    mainWnd.on('closed', function () {
        mainWnd = null;
        mainMsgQueue.length = 0;
        app.mainRenderReady = false;
    })
}

export function send(...args) {
    if (!mainWnd || !app.mainRenderReady) {
        mainMsgQueue.push(args);
    } else {
        mainWnd.send(...args);
    }
}

export function dispatch(...args) {
    send('dispatch', ...args);
}
