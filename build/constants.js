'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var constants = {
    HOME_PATH: process.env.HOME || process.env.HOMEPATH || process.env.USERPROFILE,
    FILES_PATH: '' + _path2.default.resolve(constants.HOME_PATH, './anote/files'),
    DB_PATH: '' + _path2.default.resolve(constants.HOME_PATH, './anote/dbs'),
    TMP_FILES_PATH: '' + _path2.default.resolve(constants.HOME_PATH, './anote/tmp_files'),
    TMP_IMAGE_PATH: '' + _path2.default.resolve(__dirname, '../tmp/tmp.jpeg')
};

exports.default = constants;