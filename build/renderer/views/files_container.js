'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _actions = require('../actions');

var _set_db = require('../../main/set_db');

var _reactRouter = require('react-router');

var _files_list = require('./files_list');

var _files_list2 = _interopRequireDefault(_files_list);

var _file_form = require('./file_form');

var _file_form2 = _interopRequireDefault(_file_form);

var _FlatButton = require('material-ui/FlatButton');

var _FlatButton2 = _interopRequireDefault(_FlatButton);

var _util = require('../../util');

var _files_controller = require('../controllers/files_controller.js');

var _confirm_dialog = require('./confirm_dialog');

var _confirm_dialog2 = _interopRequireDefault(_confirm_dialog);

var _list_menu = require('./list_menu');

var _list_menu2 = _interopRequireDefault(_list_menu);

var _DropDownMenu = require('material-ui/DropDownMenu');

var _DropDownMenu2 = _interopRequireDefault(_DropDownMenu);

var _MenuItem = require('material-ui/MenuItem');

var _MenuItem2 = _interopRequireDefault(_MenuItem);

var _Divider = require('material-ui/Divider');

var _Divider2 = _interopRequireDefault(_Divider);

var _util2 = require('util');

var _util3 = _interopRequireDefault(_util2);

var _dispatch_handlers = require('../dispatch_handlers');

var _worker_util = require('../worker_util');

var _single_event = require('../single_event');

var _single_event2 = _interopRequireDefault(_single_event);

var _spinner = require('./spinner');

var _spinner2 = _interopRequireDefault(_spinner);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ipcRenderer = require('electron').ipcRenderer;


var mapStateToProps = function mapStateToProps(state) {
  return {
    files: state.files,
    currentFile: state.activeFile,
    globalBook: state.globalBook,
    books: state.books,
    editorState: state.editorState
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    addFile: function addFile(file) {
      dispatch((0, _actions.addFile)(file));
    },
    listFiles: function listFiles(files) {
      dispatch((0, _actions.listFiles)(files));
    },
    delFile: function delFile(file) {
      dispatch((0, _actions.delFile)(file));
    },
    concatFiles: function concatFiles(files) {
      dispatch((0, _actions.concatFiles)(files));
    },
    editFile: function editFile(file) {
      dispatch((0, _actions.editFile)(file));
    },
    activeFile: function activeFile(file) {
      dispatch((0, _actions.activeFile)(file));
    },
    setGlobalBook: function setGlobalBook(book) {
      dispatch((0, _actions.setGlobalBook)(book));
    },
    listBooks: function listBooks(books) {
      dispatch((0, _actions.listBooks)(books));
    },
    setEditorState: function setEditorState(state) {
      dispatch((0, _actions.setEditorState)(state));
    }
  };
};

var FilesContainer = function (_Component) {
  _inherits(FilesContainer, _Component);

  function FilesContainer(props) {
    _classCallCheck(this, FilesContainer);

    var _this = _possibleConstructorReturn(this, (FilesContainer.__proto__ || Object.getPrototypeOf(FilesContainer)).call(this, props));

    _initialiseProps.call(_this);

    _this.debouncedSaveFileToDb = (0, _util.debounce)(_this.saveFileToDb, 200);
    if (_this.props.location.query.bookId) {
      _this.props.setGlobalBook({
        _id: _this.props.location.query.bookId,
        name: _this.props.location.query.bookName
      });
    }
    _this.state = {
      // for confirmation dialog
      confirmationOpen: false,
      confirmString: '',
      confirmationTmpData: {},
      // for copy and past menu
      listMenuOpen: false,
      currentBookId: null,
      listMenuTmpData: {}
    };
    (0, _dispatch_handlers.setDispatchHandler)('moveToNotebook', _this.menuMoveToNotebook);
    (0, _dispatch_handlers.setDispatchHandler)('copyToNotebook', _this.menuCopyToNotebook);
    (0, _dispatch_handlers.setDispatchHandler)('moveToTrash', _this.menuMoveToTrash);
    (0, _dispatch_handlers.setDispatchHandler)('clearFile', _this.menuClearFile);
    (0, _dispatch_handlers.setDispatchHandler)('restoreFile', _this.menuRestoreFile);
    return _this;
  }

  _createClass(FilesContainer, [{
    key: 'componentDidMount',


    // this hook method is not always recalled when url changed
    // this decided by react diff and replace strategy
    value: function componentDidMount() {
      this._checkNewNoteParam();
      this._fetchFiles();
      this._fetchBooks();
      ipcRenderer.send('onNoEditNotesList');
      _single_event2.default.on('addNoteFromTray', this._addNoteFromTray);
    }
  }, {
    key: 'componentWillReceiveProps',


    // cause: use newProps, because this.props has not been updated !!!!
    value: function componentWillReceiveProps(newProps) {
      // 用于新建note
      this._checkNewNoteParam(newProps);

      // 确保files最新
      if (this.props.location.query.bookId != newProps.location.query.bookId) {
        this._fetchFiles(newProps);
        if (newProps.location.query.bookId) {
          this.props.setGlobalBook({
            _id: newProps.location.query.bookId,
            name: newProps.location.query.bookName
          });
        }
      }

      // searchFileText change 重新 fetch 数据
      if (this.props.location.query.searchFileText != newProps.location.query.searchFileText || this.props.location.query.available != newProps.location.query.available) {
        this._fetchFiles(newProps);
      }

      // 确保currentfile最新，由于我们用一个页面相同元素换属性来展示页面，所以不是替换元素，出发不了componentDidMount
      if (newProps.files != this.props.files || newProps.params.id != this.props.params.id) {
        if (newProps.params.id && newProps.files.length > 0) {
          this.getCurrentFile(newProps);
        }
      }

      // 确保有book可以新建文章
      if (newProps.books != this.props.books) this._ensureGlobalBook(newProps.books.filter(function (book) {
        return book.available;
      })[0]);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.debouncedSaveFileToDb.cancel();
      (0, _dispatch_handlers.setDispatchHandler)('moveToNotebook', null);
      (0, _dispatch_handlers.setDispatchHandler)('copyToNotebook', null);
      (0, _dispatch_handlers.setDispatchHandler)('moveToTrash', null);
      (0, _dispatch_handlers.setDispatchHandler)('clearFile', null);
      (0, _dispatch_handlers.setDispatchHandler)('restoreFile', null);
      _single_event2.default.removeAllListeners('addNoteFromTray');
    }

    // 如果没有book数据，就需要fetch book的数据


    // decide where to go


    // 用于新建的bookId


    // process delete action and jump


    // move file to other notebook


    // copy file to other notebook

  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        'div',
        { className: 'work-wrapper' },
        _react2.default.createElement(
          'div',
          {
            className: 'sec-sidebar',
            onContextMenu: function onContextMenu(event) {
              _this2.onContextMenu();
            }
          },
          _react2.default.createElement(_FlatButton2.default, {
            label: this.bookId() ? 'NEW NOTE IN ' + this.props.globalBook.name : 'NEW A BOOK First!!',
            onClick: this.newAndCreateFile,
            primary: true,
            backgroundColor: this.bookId() ? 'rgba(255, 255, 255, 1)' : '#ddd',
            style: {
              width: '295px',
              lineHeight: '40px',
              height: '42px',
              color: '#3d3d3d',
              border: '1px solid #ddd',
              position: 'fixed',
              zIndex: 100
            }
          }),
          _react2.default.createElement(
            _DropDownMenu2.default,
            {
              value: this.dropdownMenuValue(),
              onChange: this.dropdownMenuChange,
              style: {
                zIndex: 100,
                marginTop: '43px',
                width: '294px',
                position: 'fixed',
                color: '#3d3d3d',
                border: '1px solid #ddd',
                backgroundColor: 'white',
                fontSize: '16px',
                lineHeight: '16px',
                textAlign: 'center'
              },
              maxHeight: 300
            },
            this._availableBooks().map(function (book) {
              return _react2.default.createElement(_MenuItem2.default, {
                key: book._id,
                value: book._id,
                primaryText: book.name
              });
            }),
            _react2.default.createElement(_Divider2.default, null),
            _react2.default.createElement(_MenuItem2.default, {
              value: 'all',
              primaryText: 'All'
            }),
            _react2.default.createElement(_MenuItem2.default, {
              value: 'trash',
              primaryText: 'Trash'
            })
          ),
          _react2.default.createElement(_files_list2.default, {
            files: this.props.files,
            query: this.props.location.query,
            onContextMenu: this.onContextMenu
          })
        ),
        _react2.default.createElement(
          'div',
          { className: 'work-pane' },
          this.props.children && _react2.default.cloneElement(this.props.children, {
            currentFile: this.props.currentFile,
            editorState: this.props.editorState,
            setEditorState: this.props.setEditorState,
            available: this.props.location.query.available,
            callbacks: {
              onChangeContent: this.onChangeContent,
              onChangeTitle: this.onChangeTitle
            }
          })
        ),
        _react2.default.createElement(_confirm_dialog2.default, {
          cancelString: 'Cancel',
          okString: 'Ok',
          onCancel: this.onCancelConfirmationDialog,
          onOk: this.onOkConfirmationDialog,
          title: '',
          open: this.state.confirmationOpen,
          confirmString: this.state.confirmString,
          tmpData: this.state.confirmationTmpData
        }),
        _react2.default.createElement(_list_menu2.default, {
          cancelString: 'Cancel',
          okString: 'Ok',
          onCancel: this.listMenuCancel,
          onOk: this.listMenuOk,
          title: '',
          open: this.state.listMenuOpen,
          dataList: this._availableBooks().map(function (book) {
            return { name: book.name, id: book._id };
          }),
          dataItem: this.state.currentBookId,
          filterFunc: this.menuListFilter,
          tmpData: this.state.listMenuTmpData
        })
      );
    }
  }]);

  return FilesContainer;
}(_react.Component);

var _initialiseProps = function _initialiseProps() {
  var _this3 = this;

  this.menuMoveToNotebook = function () {
    _this3.moveToNotebook(_this3.props.currentFile, _this3.props.files.findIndex(function (file) {
      return file._id == _this3.props.currentFile._id;
    }));
  };

  this.menuCopyToNotebook = function () {
    _this3.copyToNotebook(_this3.props.currentFile, _this3.props.files.findIndex(function (file) {
      return file._id == _this3.props.currentFile._id;
    }));
  };

  this.menuMoveToTrash = function () {
    _this3.delFile(_this3.props.currentFile, _this3.props.files.findIndex(function (file) {
      return file._id == _this3.props.currentFile._id;
    }));
  };

  this.menuClearFile = function () {
    _this3.clearFile(_this3.props.currentFile, _this3.props.files.findIndex(function (file) {
      return file._id == _this3.props.currentFile._id;
    }));
  };

  this.menuRestoreFile = function () {
    _this3.restoreFile(_this3.props.currentFile, _this3.props.files.findIndex(function (file) {
      return file._id == _this3.props.currentFile._id;
    }));
  };

  this._addNoteFromTray = function (newFile) {
    if (!_this3.props.location.query.available) return;
    if (_this3.props.location.query.searchFileText && _this3.props.location.query.searchFileText != '') return;
    if (_this3.props.location.query.bookId && _this3.props.location.query.bookId != newFile.bookId) return;
    _this3.props.addFile(newFile);
  };

  this._checkNewNoteParam = function (props) {
    props = props || _this3.props;
    if (props.location.query.newNote == 'true') {
      // 保证只开一次新建的dialog
      _this3._delNewNoteParam();
      _this3.newAndCreateFile();
      return true;
    }
    return false;
  };

  this._delNewNoteParam = function () {
    _reactRouter.hashHistory.replace({
      pathname: _this3.props.location.pathname,
      query: Object.assign({}, (0, _util.pick)(_this3.props.location.query, 'searchFileText', 'bookId', 'bookName'), { available: true })
    });
  };

  this._fetchFiles = function (newProps) {
    var that = _this3,
        searchConditions = null,
        sortConditions = { 'updatedAt': -1 },
        props = newProps || _this3.props;
    if (props.location.query.bookId) {
      searchConditions = { bookId: props.location.query.bookId, available: true };
    } else if (props.location.query.searchFileText) {
      searchConditions = { $or: [{ title: { $regex: new RegExp(props.location.query.searchFileText, 'i') } }, { content: { $regex: new RegExp(props.location.query.searchFileText, 'i') } }], available: true };
    } else if (props.location.query.available == 'false') {
      searchConditions = { available: false };
    } else {
      searchConditions = { available: true };
    }
    _set_db.files.find(searchConditions).sort(sortConditions).exec(function (err, fls) {
      if (err) throw new Error('search file error');
      that.props.listFiles(fls);
      that._processJump(fls);
    });
  };

  this._fetchBooks = function () {
    var that = _this3;
    if (_this3.props.books.length == 0) {
      _set_db.books.find({}).sort({ 'updatedAt': -1 }).exec(function (err, bks) {
        that.props.listBooks(bks);
      });
    } else {
      _this3._ensureGlobalBook();
    }
  };

  this._ensureGlobalBook = function (book) {
    var firstBook = null;
    if (!_this3.bookId() && (firstBook = book || _this3._availableBooks()[0])) {
      _this3.props.setGlobalBook({
        _id: firstBook._id,
        name: firstBook.name
      });
    }
  };

  this._availableBooks = function () {
    return _this3.props.books.filter(function (book) {
      return book.available;
    });
  };

  this._unavailableBooks = function () {
    return _this3.props.books.filter(function (book) {
      return !book.available;
    });
  };

  this._processJump = function (fls) {
    if (_this3.props.params.id) return;
    if (fls.length > 0) {
      _reactRouter.hashHistory.push({ pathname: '/notes/' + fls[0]._id + '/edit', query: _this3.props.location.query });
    }
  };

  this.getCurrentFile = function (newProps) {
    console.log('getCurrentFile');
    var currentFile = newProps.files.find(function (file) {
      return file._id == newProps.params.id;
    }) || {};
    _this3.debouncedSaveFileToDb.cancel();
    _this3.props.activeFile(currentFile);
    if (currentFile._id && _this3.props.location.query.available == 'true') {
      ipcRenderer.send('onEditNote');
    } else if (currentFile._id && _this3.props.location.query.available == 'false') {
      ipcRenderer.send('onEditTrash');
    }
    console.log(currentFile);
    return currentFile;
  };

  this.newAndCreateFile = function (event) {
    if (event) {
      event.preventDefault();
      event.stopPropagation();
    }
    // only can create note when there is bookId
    if (!_this3.bookId()) {
      return;
    }
    _set_db.files.insert({ bookId: _this3.bookId(), available: true }, function (error, newFile) {
      if (error) {
        throw error;
        return;
      }
      if (_this3.props.location.query.available == 'true') {
        _this3.props.addFile(newFile);
      }
      _reactRouter.hashHistory.push({ pathname: '/notes/' + newFile._id + '/edit', query: _this3.props.location.query });
    });
  };

  this.bookId = function () {
    var result = _this3.props.location.query.bookId || _this3.props.globalBook._id;
    return result;
  };

  this.isInBook = function () {
    return _this3.props.location.query.bookId;
  };

  this.onChangeContent = function (content, file) {
    _this3.debouncedSaveFileToDb(Object.assign({}, file, { content: content }));
  };

  this.onChangeTitle = function (value, file) {
    _this3.debouncedSaveFileToDb(Object.assign({}, file, { title: value }));
  };

  this.saveFileToDb = function (file) {
    var that = _this3;
    that.props.editFile(file);
    _set_db.files.update({ '_id': file._id }, { $set: that._fileAttributes(file) }, { upsert: false, multi: false }, function (error) {
      if (error) {
        throw error;
        return;
      }
    });
  };

  this._fileAttributes = function (file) {
    return (0, _util.pick)(file, 'title', 'content');
  };

  this.delFile = function (file, index) {
    _this3.setState({
      confirmationOpen: true,
      confirmString: 'Are you sure you want to delete the note \'' + (file.title || "Untitled") + '\'',
      confirmationTmpData: { fileId: file._id, index: index, callback: 'delFileOk' }
    });
  };

  this.delFileOk = function (tmpData) {
    var that = _this3;
    _set_db.files.update({ _id: tmpData.fileId }, { $set: { available: false } }, {}, function (error) {
      if (error) {
        throw error;
        return;
      }
      that._processDelAndJump(tmpData.index, tmpData.fileId, function () {
        that.setState({
          confirmationOpen: false
        });
      });
    });
  };

  this.clearFile = function (file, index) {
    _this3.setState({
      confirmationOpen: true,
      confirmString: 'Are you sure you want to delete forever the note \'' + (file.title || "Untitled") + '\'',
      confirmationTmpData: { fileId: file._id, index: index, callback: 'clearFileOk' }
    });
  };

  this.clearFileOk = function (tmpData) {
    var that = _this3;
    _set_db.files.remove({ _id: tmpData.fileId }, {}, function (error) {
      if (error) {
        throw error;
        return;
      }
      that._processDelAndJump(tmpData.index, tmpData.fileId, function () {
        that.setState({
          confirmationOpen: false
        });
      });
    });
  };

  this.clearTrash = function (file, index) {
    _this3.setState({
      confirmationOpen: true,
      confirmString: 'Are you sure you want to clear trash',
      confirmationTmpData: { callback: 'clearTrashOk' }
    });
  };

  this.clearTrashOk = function () {
    var that = _this3;
    _set_db.files.remove({ available: false }, { multi: true }, function (err) {
      that.props.listFiles([]);
      _reactRouter.hashHistory.push({ pathname: '/notes', query: { available: false } });
      that.setState({
        confirmationOpen: false
      });
    });
  };

  this.findBook = function (bookId) {
    return _this3.props.books.filter(function (book) {
      return book._id == bookId;
    })[0];
  };

  this.restoreFile = function (file, index) {
    var tmpBook = _this3.findBook(file.bookId);
    _this3.setState({
      confirmationOpen: true,
      confirmString: 'Are you sure you want to restore the note \'' + (file.title || "Untitled") + '\' to ' + (tmpBook && tmpBook.name || 'original book'),
      confirmationTmpData: { fileId: file._id, index: index, callback: 'restoreFileOk', file: file }
    });
  };

  this.restoreFileOk = function (tmpData) {
    var that = _this3;
    var tmpBook = _this3.findBook(tmpData.file.bookId);
    if (tmpBook && !tmpBook.available) {
      _set_db.books.update({ _id: tmpBook._id }, { $set: { available: true } }, {}, function (error) {
        if (error) {
          throw error;
          return;
        }
        _set_db.files.update({ _id: tmpData.fileId }, { $set: { available: true } }, {}, function (error) {
          if (error) {
            throw error;
            return;
          }
          that._processDelAndJump(tmpData.index, tmpData.fileId, function () {
            that.setState({
              confirmationOpen: false
            });
          });
        });
      });
    } else {
      _set_db.files.update({ _id: tmpData.fileId }, { $set: { available: true } }, {}, function (error) {
        if (error) {
          throw error;
          return;
        }
        that._processDelAndJump(tmpData.index, tmpData.fileId, function () {
          that.setState({
            confirmationOpen: false
          });
        });
      });
    }
  };

  this.onOkConfirmationDialog = function (event, tmpData) {
    _this3[tmpData.callback](tmpData);
  };

  this._processDelAndJump = function (index, fileId, customerFunc) {
    console.log('_processDelAndJump');
    console.log(index, fileId);
    var tmpFile = null,
        fileLength = _this3.props.files.length;
    if (fileLength > 1 && index == fileLength - 1) {
      tmpFile = _this3.props.files[0];
    } else if (fileLength > 1) {
      tmpFile = _this3.props.files[index + 1];
    }
    _this3.props.delFile({ _id: fileId });
    if (customerFunc) customerFunc();
    if (fileLength == 1) return _reactRouter.hashHistory.push({ pathname: '/notes', query: _this3.props.location.query });
    _reactRouter.hashHistory.push({ pathname: '/notes/' + tmpFile._id + '/edit', query: _this3.props.location.query });
  };

  this.onCancelConfirmationDialog = function () {
    _this3.setState({
      confirmationOpen: false
    });
  };

  this.onContextMenu = function (file, index) {
    var chooseFile = file ? true : false;
    var canNew = _this3.bookId() ? true : false;
    (0, _files_controller.openFileItemContextMenu)(_this3.props.location.query.available, canNew, chooseFile, {
      importFile: function importFile() {
        (0, _worker_util.sendWorkerCmd)('importFile');
      },
      newFile: function newFile() {
        _this3.newAndCreateFile();
      },
      moveToNotebook: function moveToNotebook() {
        _this3.moveToNotebook(file, index);
      },
      copyToNotebook: function copyToNotebook() {
        _this3.copyToNotebook(file, index);
      },
      normalExport: function normalExport() {
        (0, _worker_util.sendWorkerCmd)('saveNoteAsMarkdown', file._id);
      },
      exportAsPdf: function exportAsPdf() {
        (0, _worker_util.sendWorkerCmd)('saveNoteAsPdf', file._id);
      },
      deleteFile: function deleteFile() {
        _this3.delFile(file, index);
      },
      clearFile: function clearFile() {
        _this3.clearFile(file, index);
      },
      restoreFile: function restoreFile() {
        console.log('restore');
        _this3.restoreFile(file, index);
      },
      clearTrash: function clearTrash() {
        _this3.clearTrash();
      }
    });
  };

  this.moveToNotebook = function (file, index) {
    var tmpIdx = _this3._availableBooks().findIndex(function (book) {
      return book._id == file.bookId;
    });
    _this3.setState({
      currentBookId: _this3._availableBooks()[tmpIdx]._id,
      listMenuOpen: true,
      listMenuTmpData: {
        file: file,
        type: 'move',
        index: index
      }
    });
  };

  this.copyToNotebook = function (file, index) {
    var tmpIdx = _this3._availableBooks().findIndex(function (book) {
      return book._id == file.bookId;
    });
    _this3.setState({
      currentBookId: _this3._availableBooks()[tmpIdx]._id,
      listMenuOpen: true,
      listMenuTmpData: {
        file: file,
        type: 'copy',
        index: index
      }
    });
  };

  this.menuListFilter = function (dataItem, currentDataItem) {
    return dataItem.id == currentDataItem;
  };

  this.listMenuCancel = function () {
    _this3.setState({
      listMenuOpen: false
    });
  };

  this.listMenuOk = function (event, checkedId, tmpData) {
    _this3['_' + tmpData.type + 'File'](tmpData, checkedId);
  };

  this._moveFile = function (_ref, bookId) {
    var file = _ref.file,
        index = _ref.index;

    var that = _this3;
    _set_db.files.update({ _id: file._id }, { $set: { bookId: bookId } }, {}, function (error) {
      if (error) {
        throw error;
        return;
      }
      that._processDelAndJump(index, file._id, function () {
        that.setState({
          listMenuOpen: false
        });
      });
    });
  };

  this._copyFile = function (_ref2, bookId) {
    var file = _ref2.file,
        index = _ref2.index;

    var that = _this3;
    _set_db.files.insert(Object.assign({
      available: true,
      bookId: bookId
    }, that._fileAttributes(file)), function (error, newFile) {
      that.setState({
        listMenuOpen: false
      });
    });
  };

  this.dropdownMenuChange = function (event, index, value) {
    if (value == _this3.dropdownMenuValue()) return;
    if (value == 'trash') {
      return _reactRouter.hashHistory.push({
        pathname: '/notes',
        query: {
          available: false
        }
      });
    }
    if (value == 'all') {
      return _reactRouter.hashHistory.push({
        pathname: '/notes',
        query: {
          available: true
        }
      });
    }
    var tmpBook = _this3.findBook(value);
    if (tmpBook) return _reactRouter.hashHistory.push({
      pathname: '/notes',
      query: {
        bookId: tmpBook._id,
        bookName: tmpBook.name,
        available: true
      }
    });
  };

  this.dropdownMenuValue = function () {
    if (_this3.props.location.query.available == 'false') {
      return 'trash';
    }
    if (_this3.props.location.query.bookId) {
      return _this3.props.location.query.bookId;
    }
    return 'all';
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(FilesContainer);
//# sourceMappingURL=files_container.js.map