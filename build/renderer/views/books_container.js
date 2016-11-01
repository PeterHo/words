'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactAddonsShallowCompare = require('react-addons-shallow-compare');

var _reactAddonsShallowCompare2 = _interopRequireDefault(_reactAddonsShallowCompare);

var _reactRedux = require('react-redux');

var _actions = require('../actions');

var _set_db = require('../../main/set_db');

var _books_list = require('./books_list');

var _books_list2 = _interopRequireDefault(_books_list);

var _book_form = require('./book_form');

var _book_form2 = _interopRequireDefault(_book_form);

var _FloatingActionButton = require('material-ui/FloatingActionButton');

var _FloatingActionButton2 = _interopRequireDefault(_FloatingActionButton);

var _add = require('material-ui/svg-icons/content/add');

var _add2 = _interopRequireDefault(_add);

var _reactDropzone = require('react-dropzone');

var _reactDropzone2 = _interopRequireDefault(_reactDropzone);

var _TextField = require('material-ui/TextField');

var _TextField2 = _interopRequireDefault(_TextField);

var _util = require('../../util');

var _reactRouter = require('react-router');

var _confirm_dialog = require('./confirm_dialog');

var _confirm_dialog2 = _interopRequireDefault(_confirm_dialog);

var _books_controller = require('../controllers/books_controller.js');

var _electron = require('electron');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var mapStateToProps = function mapStateToProps(state) {
  return {
    books: state.books,
    currentBook: state.activeBook,
    globalBook: state.globalBook
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    addBook: function addBook(book) {
      dispatch((0, _actions.addBook)(book));
    },
    listBooks: function listBooks(books) {
      dispatch((0, _actions.listBooks)(books));
    },
    delBook: function delBook(book) {
      dispatch((0, _actions.delBook)(book));
    },
    editBook: function editBook(book) {
      dispatch((0, _actions.editBook)(book));
    },
    activeBook: function activeBook(book) {
      dispatch((0, _actions.activeBook)(book));
    },
    setGlobalBook: function setGlobalBook(book) {
      dispatch((0, _actions.setGlobalBook)(book));
    }
  };
};

var BooksContainer = function (_Component) {
  _inherits(BooksContainer, _Component);

  function BooksContainer(props) {
    _classCallCheck(this, BooksContainer);

    var _this = _possibleConstructorReturn(this, (BooksContainer.__proto__ || Object.getPrototypeOf(BooksContainer)).call(this, props));

    _initialiseProps.call(_this);

    _this.state = {
      editBook: {},
      bookDialogOpen: false,
      booksSearchText: null,
      // for custom confirm dialog
      confirmationOpen: false,
      confirmString: '',
      confirmationTmpData: {}
    };
    _this.debouncedChangeBooksSearchText = (0, _util.debounce)(_this.changeBooksSearchText, 200);
    return _this;
  }
  // hook method for fetch books


  _createClass(BooksContainer, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      // can write some fetch infos code
      var that = this;
      _set_db.books.find({}).sort({ 'updatedAt': -1 }).exec(function (err, bks) {
        if (bks.length == 0) that.props.listBooks(bks);
        var tmpC = 0;
        bks.forEach(function (bk, index) {
          _set_db.files.count({ bookId: bk._id, available: true }, function (error, count) {
            if (error) {
              throw new Error('db error');
              return;
            }
            bk.filesCount = count;
            tmpC += 1;
            if (tmpC == bks.length) that.props.listBooks(bks);
          });
          var availableBooks = bks.filter(function (book) {
            return book.available;
          });
          if (!that.props.globalBook._id && availableBooks.length > 0) {
            that.props.setGlobalBook({
              _id: availableBooks[0]._id,
              name: availableBooks[0].name
            });
          }
        });
      });
      _electron.ipcRenderer.send('onNotebookContainer');
      this._checkNewNoteBookParam();
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(newProps) {
      this._checkNewNoteBookParam(newProps);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.debouncedChangeBooksSearchText.cancel();
    }
  }, {
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps, nextState) {
      return (0, _reactAddonsShallowCompare2.default)(this, nextProps, nextState);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        'div',
        {
          onContextMenu: this.onNormalContextMenu,
          style: {
            height: '100%',
            width: '100%'
          }
        },
        _react2.default.createElement(
          _FloatingActionButton2.default,
          { style: { position: 'fixed', bottom: '10px', right: '10px', zIndex: 1000 }, onClick: this._newBook },
          _react2.default.createElement(_add2.default, null)
        ),
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(_TextField2.default, {
            hintText: 'Search a notebook',
            style: { marginLeft: '10px' },
            defaultValue: this.state.booksSearchText,
            onChange: function onChange(event) {
              event.persist();_this2.debouncedChangeBooksSearchText(event);
            }
          })
        ),
        _react2.default.createElement(_books_list2.default, {
          books: this.availableBooks().filter(function (book) {
            if (!_this2.state.booksSearchText || _this2.state.booksSearchText == '') return true;
            var patt = new RegExp(_this2.state.booksSearchText, 'i');
            return patt.test(book.name);
          }),
          callbacks: {
            editBook: this.editBook,
            delBook: this.delBook,
            jumpToNotes: this.jumpToNotes,
            onContextMenu: this.onContextMenu
          }
        }),
        _react2.default.createElement(_book_form2.default, {
          book: this.props.currentBook,
          open: this.state.bookDialogOpen,
          onCancel: this.closeBookFormDialog,
          onOk: this.submitBookFormDialog
        }),
        _react2.default.createElement(_confirm_dialog2.default, {
          cancelString: 'Cancel',
          okString: 'Delete',
          onCancel: this.onCancelConfirmationDialog,
          onOk: this.onOkConfirmationDialog,
          title: '',
          open: this.state.confirmationOpen,
          confirmString: this.state.confirmString,
          tmpData: this.state.confirmationTmpData
        })
      );
    }
  }]);

  return BooksContainer;
}(_react.Component);

var _initialiseProps = function _initialiseProps() {
  var _this3 = this;

  this._checkNewNoteBookParam = function (props) {
    props = props || _this3.props;
    if (props.location.query.newNoteBook == 'true') {
      // 保证只开一次新建的dialog
      _this3._delNewNoteBookParam();
      _this3._newBook();
    }
  };

  this._delNewNoteBookParam = function () {
    _reactRouter.hashHistory.replace({
      pathname: '/'
    });
  };

  this._newBook = function (event) {
    _this3.props.activeBook({ imagePath: '', available: true });
    _this3.setState({
      bookDialogOpen: true
    });
  };

  this.editBook = function (book) {
    _this3.props.activeBook(book);
    _this3.setState({
      bookDialogOpen: true
    });
  };

  this.closeBookFormDialog = function () {
    _this3.setState({
      bookDialogOpen: false
    });
  };

  this.submitBookFormDialog = function (book) {
    var that = _this3;
    if (!book._id) {
      _set_db.books.insert(that._bookAttributes(book), function (error, newBook) {
        if (error) {
          throw error;
          return;
        }
        that.props.addBook(Object.assign({}, newBook, { filesCount: 0 }));
        that.setState({
          bookDialogOpen: false
        });
        if (!that.props.globalBook._id) {
          that.props.setGlobalBook({
            _id: newBook._id,
            name: newBook.name
          });
        }
      });
    } else {
      _set_db.books.update({ '_id': book._id }, that._bookAttributes(book), {}, function (error) {
        if (error) {
          throw error;
          return;
        }
        that.props.editBook(book);
        that.setState({
          bookDialogOpen: false
        });
      });
    }
  };

  this._bookAttributes = function (book) {
    return (0, _util.pick)(book, 'imagePath', 'available', 'name');
  };

  this.changeBooksSearchText = function (event) {
    _this3.setState({
      booksSearchText: event.target.value
    });
  };

  this.jumpToNotes = function (obj) {
    _reactRouter.hashHistory.push(obj);
  };

  this.delBook = function (book) {
    _this3.setState({
      confirmationOpen: true,
      confirmString: 'Are you sure you want to delete the notebook \'' + book.name + '\' all notes to trash',
      confirmationTmpData: { bookId: book._id, book: book }
    });
  };

  this.onCancelConfirmationDialog = function () {
    _this3.setState({
      confirmationOpen: false
    });
  };

  this.onOkConfirmationDialog = function (event, tmpData) {
    var that = _this3;
    _set_db.books.update({ _id: tmpData.bookId }, { $set: { available: false } }, {}, function (error) {
      if (error) {
        throw error;
        return;
      }
      that.props.editBook(Object.assign({}, tmpData.book, { available: false }));
      if (that.props.globalBook._id == tmpData.bookId) {
        that.props.setGlobalBook({});
      }
      _set_db.files.update({ bookId: tmpData.bookId }, { $set: { available: false } }, { multi: true }, function (error) {
        if (error) {
          throw error;
          return;
        }
        that.setState({
          confirmationOpen: false
        });
      });
    });
  };

  this.onContextMenu = function (event, book) {
    var that = _this3;
    (0, _books_controller.openBookItemContextMenu)({
      editBook: function editBook() {
        that.editBook(book);
      },
      deleteBook: function deleteBook() {
        that.delBook(book);
      },
      newBook: function newBook() {
        that._newBook();
      }
    });
  };

  this.onNormalContextMenu = function (event) {
    event.preventDefault();
    event.stopPropagation();
    var that = _this3;
    (0, _books_controller.openNormalContextMenu)({
      newBook: function newBook() {
        that._newBook();
      }
    });
  };

  this.availableBooks = function () {
    return _this3.props.books.filter(function (book) {
      return book.available;
    });
  };

  this.unavailableBooks = function () {
    return _this3.props.books.filter(function (book) {
      return !book.available;
    });
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(BooksContainer);
//# sourceMappingURL=books_container.js.map