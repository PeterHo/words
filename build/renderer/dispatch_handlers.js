"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setDispatchHandler = setDispatchHandler;
var dispatchHandlers = {};

exports.default = dispatchHandlers;
function setDispatchHandler(name, callback) {
  dispatchHandlers[name] = callback;
}