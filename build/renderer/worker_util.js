'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.sendWorkerCmd = sendWorkerCmd;
var ipcRenderer = require('electron').ipcRenderer;

function sendWorkerCmd() {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
    }

    ipcRenderer.send.apply(ipcRenderer, ['workerCmd'].concat(args));
}
//# sourceMappingURL=worker_util.js.map