'use strict';

module.exports = {
    openExternal: openExternal
};

var shell = require('electron').shell;

function openExternal(event, url) {
    shell.openExternal(url);
}
//# sourceMappingURL=shell.js.map