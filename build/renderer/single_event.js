'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
// 这样不是很好，用了eventEmitter在react中，用于tray note新建之后添加到list中
var EventEmitter = require('events');
var singleEvent = new EventEmitter();
exports.default = singleEvent;