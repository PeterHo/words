'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.setupIpc = setupIpc;
exports.dispatch = dispatch;

var _dispatch_handlers = require('./dispatch_handlers');

var _dispatch_handlers2 = _interopRequireDefault(_dispatch_handlers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ipcRender = require('electron').ipcRenderer;


// setup render ipc
function setupIpc() {
    ipcRender.on('log', function (e) {
        var _console;

        for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            args[_key - 1] = arguments[_key];
        }

        return (_console = console).log.apply(_console, args);
    });
    ipcRender.on('error', function (e) {
        var _console2;

        for (var _len2 = arguments.length, args = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
            args[_key2 - 1] = arguments[_key2];
        }

        return (_console2 = console).log.apply(_console2, args);
    });
    ipcRender.on('dispatch', function (e) {
        for (var _len3 = arguments.length, args = Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
            args[_key3 - 1] = arguments[_key3];
        }

        return dispatch.apply(undefined, args);
    });
    ipcRender.send('mainRenderReady');
}

// dispatch main event to render handler
function dispatch(action) {
    var handler = _dispatch_handlers2.default[action];
    if (handler) {
        for (var _len4 = arguments.length, args = Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
            args[_key4 - 1] = arguments[_key4];
        }

        handler.apply(undefined, args);
    }
}
//# sourceMappingURL=setup_ipc.js.map