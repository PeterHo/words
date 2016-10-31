'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _constants = require('./constants');

var _constants2 = _interopRequireDefault(_constants);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var marked = require('marked');
var FILES_PATH = _constants2.default.FILES_PATH;


var defaultOptions = {
  image: function image(href, title, text) {
    console.log('render image');
    var pp = /[http|https]/;
    if (!pp.test(href)) {
      return "<p>" + "<img src='" + FILES_PATH + '/' + href + "'/>" + "</p>";
    } else {
      return "<p>" + "<img src='" + href + "'/>" + "</p>";
    }
  },
  link: function link(href, title, text) {
    var out = "<a class='external' href=\"" + href + "\"";
    if (title) {
      out += " title=\"" + title + "\"";
    }
    out += ">" + text + "</a>";
    return out;
  }
};

function renderFactory() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var markedRenderer = new marked.Renderer();
  options = Object.assign({}, defaultOptions, options);
  var propKeys = Object.keys(options);
  propKeys.forEach(function (key) {
    markedRenderer[key] = options[key];
  });
  return markedRenderer;
}

exports.default = renderFactory;