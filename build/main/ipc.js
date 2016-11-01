'use strict';

var _windows = require('./windows');

var wnd = _interopRequireWildcard(_windows);

var _log = require('./log');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var electron = require('electron');
var app = electron.app;


var mainMsgQueue = [];

var init = function init() {
    var ipc = electron.ipcMain;

    ipc.on('mainRenderReady', function (e) {
        app.mainRenderReady = true;

        // 暂存msg的queue
        mainMsgQueue.forEach(function (message) {
            if (wnd.mainWnd) {
                var _wnd$mainWnd;

                (_wnd$mainWnd = wnd.mainWnd).send.apply(_wnd$mainWnd, _toConsumableArray(message));
            }
        });

        mainMsgQueue.length = 0;
        console.log('mainRenderReady ............');
    });

    ipc.on('ipcTestMain', function (event, arg) {
        (0, _log.log)('main prcess received the ipcTestMain');
    });

    ipc.on('mainCmd', function (event) {
        var _wnd$mainWnd3;

        for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            args[_key - 1] = arguments[_key];
        }

        if (wnd.mainWnd) {
            var _wnd$mainWnd2;

            return (_wnd$mainWnd2 = wnd.mainWnd).dispatch.apply(_wnd$mainWnd2, args);
        }
        wnd.mainWnd.init();
        (_wnd$mainWnd3 = wnd.mainWnd).dispatch.apply(_wnd$mainWnd3, args);
    });
};

exports.mainMsgQueue = mainMsgQueue;
exports.init = init;
//# sourceMappingURL=ipc.js.map