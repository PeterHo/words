'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = sendMainCmd;
var ipcRenderer = require('electron').ipcRenderer;

function sendMainCmd() {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
    }

    ipcRenderer.send.apply(ipcRenderer, ['mainCmd'].concat(args));
}
//# sourceMappingURL=main_util.js.map