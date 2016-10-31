'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.openFileItemContextMenu = openFileItemContextMenu;

var _require = require('electron'),
    remote = _require.remote;

var Menu = remote.Menu,
    MenuItem = remote.MenuItem;


var handlers = {};

handlers.openAvailableFileItemContextMenu = function (canNew, chooseFile, callbacks) {
  var menu = new Menu();
  if (!canNew && !chooseFile) return;
  if (canNew) {
    menu.append(new MenuItem({ label: 'New Note', click: function click() {
        callbacks.newFile();
      }
    }));
    // todo, not now
    // menu.append(new MenuItem({label: 'Import...', click() { callbacks.importFile(); }}));
  }
  if (chooseFile) {
    menu.append(new MenuItem({ type: 'separator' }));
    menu.append(new MenuItem({ label: 'Move To Notebook...', click: function click() {
        callbacks.moveToNotebook();
      }
    }));
    menu.append(new MenuItem({ label: 'Copy To Notebook...', click: function click() {
        callbacks.copyToNotebook();
      }
    }));
    menu.append(new MenuItem({ type: 'separator' }));
    menu.append(new MenuItem({ label: 'Export...', click: function click() {
        callbacks.normalExport();
      }
    }));
    menu.append(new MenuItem({ label: 'Export As Pdf...', click: function click() {
        callbacks.exportAsPdf();
      }
    }));
    menu.append(new MenuItem({ type: 'separator' }));
    menu.append(new MenuItem({ label: 'Move To Trash...', click: function click() {
        callbacks.deleteFile();
      }
    }));
  }
  menu.popup(remote.getCurrentWindow());
};

handlers.openUnavailableFileItemContextMenu = function (canNew, chooseFile, callbacks) {
  var menu = new Menu();
  if (chooseFile) {
    menu.append(new MenuItem({ label: 'Delete Forever...', click: function click() {
        callbacks.clearFile();
      }
    }));
    menu.append(new MenuItem({ label: 'Restore...', click: function click() {
        callbacks.restoreFile();
      }
    }));
    menu.append(new MenuItem({ type: 'separator' }));
    menu.append(new MenuItem({ label: 'Empty Trash...', click: function click() {
        callbacks.clearTrash();
      }
    }));
  } else {
    menu.append(new MenuItem({ label: 'Empty Trash...', click: function click() {
        callbacks.clearTrash();
      }
    }));
  }
  menu.popup(remote.getCurrentWindow());
};

// canNew checkIf can new a file
// chooseFile checkIf choose a file
function openFileItemContextMenu(available, canNew, chooseFile, callbacks) {
  var availableDic = {
    'false': 'openUnavailableFileItemContextMenu',
    'true': 'openAvailableFileItemContextMenu'
  };
  handlers[availableDic[available]](canNew, chooseFile, callbacks);
}