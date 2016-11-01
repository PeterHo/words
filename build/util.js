'use strict';

var _bluebird = require('bluebird');

var _bluebird2 = _interopRequireDefault(_bluebird);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _crypto = require('crypto');

var _crypto2 = _interopRequireDefault(_crypto);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _constants = require('./constants');

var _constants2 = _interopRequireDefault(_constants);

var _co = require('co');

var _co2 = _interopRequireDefault(_co);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var FILES_PATH = _constants2.default.FILES_PATH,
    TMP_FILES_PATH = _constants2.default.TMP_FILES_PATH;

var http = require('http');
var https = require('https');

var writeFileAsyn = _bluebird2.default.promisify(_fs2.default.writeFile);

var unlinkAsync = _bluebird2.default.promisify(_fs2.default.unlink);

function guid() {
    function s4() {
        return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
    }

    return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
}

var downloadAsyn = function downloadAsyn(url, dest) {
    var file = _fs2.default.createWriteStream(dest);
    return new _bluebird2.default(function (resolve, reject) {
        var responseSent = false,
            pModule = null;
        if (url.indexOf('https') > -1) {
            pModule = https;
        } else {
            pModule = http;
        }
        pModule.get(url, function (response) {
            response.pipe(file);
            file.on('finish', function () {
                file.close(function () {
                    if (responseSent) return;
                    responseSent = true;
                    resolve();
                });
            });
        }).on('error', function (err) {
            console.log('error');
            if (responseSent) return;
            responseSent = true;
            reject(err);
        });
    });
};

// const downloadAsyn = Promise.promisify(download);

function ensureDirectoryExistence(filePath) {
    var dirname = _path2.default.dirname(filePath);
    if (directoryExists(dirname)) {
        return true;
    }
    ensureDirectoryExistence(dirname);
    _fs2.default.mkdirSync(dirname);
}

function directoryExists(path) {
    try {
        return _fs2.default.statSync(path).isDirectory();
    } catch (err) {
        return false;
    }
}

var copyFile = function copyFile(source, target) {
    return new _bluebird2.default(function (resolve, reject) {
        ensureDirectoryExistence(target);
        var rs = _fs2.default.createReadStream(source),
            ws = _fs2.default.createWriteStream(target);
        rs.pipe(ws);
        ws.on('close', function () {
            resolve();
        });
        ws.on('error', function () {
            reject();
        });
    });
};

var buffer2File = function buffer2File(buffer) {
    var tmpPath = _path2.default.resolve(TMP_FILES_PATH, '' + Date.now());
    ensureDirectoryExistence(tmpPath);
    return (0, _co2.default)(regeneratorRuntime.mark(function _callee() {
        var hashKey, key;
        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        _context.next = 2;
                        return writeFileAsyn(tmpPath, buffer);

                    case 2:
                        _context.next = 4;
                        return getFileHash(tmpPath);

                    case 4:
                        hashKey = _context.sent;
                        key = hash2Key(hashKey);
                        _context.next = 8;
                        return copyFile(tmpPath, FILES_PATH + '/' + key);

                    case 8:
                        _context.next = 10;
                        return unlinkAsync(tmpPath);

                    case 10:
                        return _context.abrupt('return', '' + key);

                    case 11:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, this);
    }));
};

var downloadImageAsyn = function downloadImageAsyn(url) {
    var tmpPath = _path2.default.resolve(TMP_FILES_PATH, '' + guid());
    ensureDirectoryExistence(tmpPath);
    return (0, _co2.default)(regeneratorRuntime.mark(function _callee2() {
        var hashKey, key;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
                switch (_context2.prev = _context2.next) {
                    case 0:
                        _context2.prev = 0;
                        _context2.next = 3;
                        return downloadAsyn(url, tmpPath);

                    case 3:
                        _context2.next = 9;
                        break;

                    case 5:
                        _context2.prev = 5;
                        _context2.t0 = _context2['catch'](0);

                        console.log('出问题了返回原来的url');
                        return _context2.abrupt('return', url);

                    case 9:
                        _context2.next = 11;
                        return getFileHash(tmpPath);

                    case 11:
                        hashKey = _context2.sent;
                        key = hash2Key(hashKey);
                        _context2.next = 15;
                        return copyFile(tmpPath, FILES_PATH + '/' + key);

                    case 15:
                        _context2.next = 17;
                        return unlinkAsync(tmpPath);

                    case 17:
                        return _context2.abrupt('return', '' + key);

                    case 18:
                    case 'end':
                        return _context2.stop();
                }
            }
        }, _callee2, this, [[0, 5]]);
    }));
};

var getFileHash = function getFileHash(filePath) {
    return new _bluebird2.default(function (resolve, reject) {
        var rs = _fs2.default.createReadStream(filePath);
        var hash = _crypto2.default.createHash('sha1');
        hash.setEncoding('hex');
        rs.pipe(hash);
        rs.on('end', function () {
            hash.end();
            resolve(hash.read());
        });
    });
};

var hash2Key = function hash2Key(hash) {
    return hash.slice(0, 5) + '/' + hash;
};

var key2path = function key2path(key) {
    return FILES_PATH + '/' + key;
};

var debounce = function debounce(func, wait, immediate) {
    var timeout = null,
        debounced = function debounced() {
        var context = this,
            args = arguments;
        var later = function later() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
    debounced.cancel = function () {
        clearTimeout(timeout);
    };
    return debounced;
};

var throttle = function throttle(func, wait, options) {
    var timeout, context, args, result;
    var previous = 0;
    if (!options) options = {};
    var getNow = function getNow() {
        return new Date().getTime();
    };
    var later = function later() {
        // 如果options.leading === false在这里重新设置 previous
        previous = options.leading === false ? 0 : getNow();
        timeout = null;
        result = func.apply(context, args);
        if (!timeout) context = args = null;
    };

    var throttled = function throttled() {
        var now = getNow();
        if (!previous && options.leading === false) previous = now;
        var remaining = wait - (now - previous);
        context = this;
        // 但是args每次都是最新的
        args = arguments;
        // 距离上次的时间已经大约wait，直接运行
        if (remaining <= 0 || remaining > wait) {
            if (timeout) {
                clearTimeout(timeout);
                timeout = null;
            }
            previous = now;
            result = func.apply(context, args);
            if (!timeout) context = args = null;

            // 这个是options.leading === false的时候做第一次调用
            // 或者wait之内再调用的时候
        } else if (!timeout && options.trailing !== false) {
            timeout = setTimeout(later, remaining);
        }

        return result;
    };

    throttled.cancel = function () {
        clearTimeout(timeout);
        previous = 0;
        timeout = context = args = null;
    };

    return throttled;
};

var findIndexById = function findIndexById(list, item) {
    return list.findIndex(function (currentItem) {
        return currentItem._id == item._id;
    });
};

var pick = function pick(o) {
    for (var _len = arguments.length, props = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        props[_key - 1] = arguments[_key];
    }

    return Object.assign.apply(Object, [{}].concat(_toConsumableArray(props.map(function (prop) {
        return _defineProperty({}, prop, o[prop]);
    }))));
};

var chineseDate = function chineseDate(date) {
    var tmpDate = new Date(date);
    tmpDate.setHours(date.getHours() + 8);
    return tmpDate;
};

var ppDate = function ppDate(date) {
    return date.getMonth() + 1 + '/' + date.getDate() + '/' + date.getFullYear().toString();
};

// sequial process
// const placeImageToLocalAsyn = (content) => {
//   content = content || '';
//   let pp = /!\[(.*?)\]\((.*?)\)/i;
//   let ppp = /[http|https]/;
//   let result = content;
//   let m;
//   return co (function * () {
//     do {
//         m = pp.exec(content);
//         if (m) {
//           let matchTxt = m[0];
//           let text = m[1];
//           let href = m[2];
//           if(ppp.test(href)){
//             let key = yield downloadImageAsyn(href);
//             result = result.split(href).join(key);
//             content = content.split(matchTxt).join('');
//           }
//         }
//     } while (m);
//     return result;
//   });
// }

// parallel process
var placeImageToLocalAsyn = function placeImageToLocalAsyn(content) {
    content = content || '';
    var pp = /!\[(.*?)\]\((.*?)\)/i;
    var ppp = /[http|https]/;
    var result = content;
    var m = void 0;
    var promisesHash = {};
    return (0, _co2.default)(regeneratorRuntime.mark(function _callee3() {
        var matchTxt, text, href, res;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) {
                switch (_context3.prev = _context3.next) {
                    case 0:
                        do {
                            m = pp.exec(content);
                            if (m) {
                                matchTxt = m[0];
                                text = m[1];
                                href = m[2];

                                if (ppp.test(href)) {
                                    promisesHash[href] = downloadImageAsyn(href);
                                    content = content.split(matchTxt).join('');
                                }
                            }
                        } while (m);
                        _context3.next = 3;
                        return promisesHash;

                    case 3:
                        res = _context3.sent;

                        Object.keys(res).forEach(function (href) {
                            result = result.split(href).join(res[href]);
                        });
                        return _context3.abrupt('return', result);

                    case 6:
                    case 'end':
                        return _context3.stop();
                }
            }
        }, _callee3, this);
    }));
};

module.exports = {
    copyFile: copyFile,
    getFileHash: getFileHash,
    hash2Key: hash2Key,
    key2path: key2path,
    debounce: debounce,
    throttle: throttle,
    findIndexById: findIndexById,
    pick: pick,
    chineseDate: chineseDate,
    ppDate: ppDate,
    buffer2File: buffer2File,
    downloadImageAsyn: downloadImageAsyn,
    placeImageToLocalAsyn: placeImageToLocalAsyn,
    downloadAsyn: downloadAsyn
};