'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.openBookItemContextMenu = openBookItemContextMenu;
exports.openNormalContextMenu = openNormalContextMenu;

var _require = require('electron'),
    remote = _require.remote;

var Menu = remote.Menu,
    MenuItem = remote.MenuItem;
function openBookItemContextMenu(callbacks) {
  var menu = new Menu();
  menu.append(new MenuItem({ label: 'New Notebook...', click: function click() {
      callbacks.newBook();
    }
  }));
  menu.append(new MenuItem({ label: 'Edit Notebook...', click: function click() {
      callbacks.editBook();
    }
  }));
  menu.append(new MenuItem({ type: 'separator' }));
  menu.append(new MenuItem({ label: 'Move To Trash...', click: function click() {
      callbacks.deleteBook();
    }
  }));
  menu.popup(remote.getCurrentWindow());
}

function openNormalContextMenu(callbacks) {
  var menu = new Menu();
  menu.append(new MenuItem({ label: 'New Notebook...', click: function click() {
      callbacks.newBook();
    }
  }));
  menu.popup(remote.getCurrentWindow());
}