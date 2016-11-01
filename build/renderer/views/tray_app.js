'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _anote_editor = require('./anote_editor');

var _anote_editor2 = _interopRequireDefault(_anote_editor);

var _set_db = require('../../main/set_db');

var _IconMenu = require('material-ui/IconMenu');

var _IconMenu2 = _interopRequireDefault(_IconMenu);

var _MenuItem = require('material-ui/MenuItem');

var _MenuItem2 = _interopRequireDefault(_MenuItem);

var _Dialog = require('material-ui/Dialog');

var _Dialog2 = _interopRequireDefault(_Dialog);

var _FlatButton = require('material-ui/FlatButton');

var _FlatButton2 = _interopRequireDefault(_FlatButton);

var _TextField = require('material-ui/TextField');

var _TextField2 = _interopRequireDefault(_TextField);

var _IconButton = require('material-ui/IconButton');

var _IconButton2 = _interopRequireDefault(_IconButton);

var _moreVert = require('material-ui/svg-icons/navigation/more-vert');

var _moreVert2 = _interopRequireDefault(_moreVert);

var _SelectField = require('material-ui/SelectField');

var _SelectField2 = _interopRequireDefault(_SelectField);

var _main_util = require('../main_util');

var _main_util2 = _interopRequireDefault(_main_util);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } //tray menubar 速记功能


var TrayApp = function (_Component) {
  _inherits(TrayApp, _Component);

  function TrayApp(props) {
    _classCallCheck(this, TrayApp);

    var _this = _possibleConstructorReturn(this, (TrayApp.__proto__ || Object.getPrototypeOf(TrayApp)).call(this, props));

    _this.getKeyMaps = function () {
      var that = _this;
      return {
        'Cmd-S': function CmdS(cm) {
          that.saveFile();
        }
      };
    };

    _this.saveFile = function (event) {
      if (event) {
        event.preventDefault();
        event.stopPropagation();
      }
      _this._openDialog();
    };

    _this.clear = function (event) {
      if (event) {
        event.preventDefault();
        event.stopPropagation();
      }
      if (_this.refs.fileContent) _this.refs.fileContent.setValue('');
    };

    _this._openDialog = function () {
      var that = _this;
      _set_db.books.loadDatabase(function (error) {
        if (error) return;
        _set_db.books.find({ available: true }).sort({ 'updatedAt': -1 }).exec(function (err, bks) {
          if (bks.length == 0) {
            that.setState({
              books: []
            });
            return that._alertNoBooks();
          }
          that.setState({
            books: bks
          }, that._showSaveDialog);
        });
      });
    };

    _this._alertNoBooks = function () {
      _this.setState({
        alertDialogOpen: true
      });
    };

    _this._closeAlertNoBooksDialog = function () {
      _this.setState({
        alertDialogOpen: false
      });
    };

    _this._showSaveDialog = function () {
      _this.setState({
        saveDialogOpen: true
      }, function () {
        _this.refs.titleInput.focus();
      });
    };

    _this._okSave = function (event) {
      event.preventDefault();
      event.stopPropagation();
      var canSave = true;

      // validates
      if (!_this.state.bookId || _this.state.bookId == '') {
        canSave = false;
        _this.setState({
          bookIdErrorText: 'must choose a book!!!'
        });
      }
      if (!_this.state.title || _this.state.title == '') {
        canSave = false;
        _this.setState({
          titleErrorText: 'must input a title'
        });
      }

      // persistence
      if (canSave) {
        // cannot save like this, because some cache I think.
        // files.insert({
        //   bookId: this.state.bookId,
        //   available: true,
        //   content: this.refs.fileContent.getValue() || '',
        //   title: this.state.title
        // }, (error, newFile) => {
        //
        // });
        (0, _main_util2.default)('newNoteFromTray', {
          bookId: _this.state.bookId,
          available: true,
          content: _this.refs.fileContent.getValue() || '',
          title: _this.state.title
        });

        _this.setState({
          bookId: null,
          title: null,
          bookIdErrorText: null,
          titleErrorText: null,
          saveDialogOpen: false
        });
        _this.refs.fileContent.setValue('');
        _this.refs.fileContent.clearHistory();
      }
    };

    _this._cancelSave = function () {
      _this.setState({
        titleErrorText: null,
        title: null,
        saveDialogOpen: false
      });
    };

    _this._changeTitle = function (event) {
      _this.setState({
        title: event.target.value
      });
    };

    _this._changeBookId = function (event, index, value) {
      _this.setState({
        bookId: value
      });
    };

    _this.state = {
      bookId: null,
      saveDialogOpen: false,
      alertDialogOpen: false,
      books: [],
      titleErrorText: null,
      bookIdErrorText: null,
      title: null
    };
    return _this;
  }

  _createClass(TrayApp, [{
    key: 'render',
    value: function render() {
      var saveActions = [_react2.default.createElement(_FlatButton2.default, {
        label: 'Cancel',
        secondary: true,
        onTouchTap: this._cancelSave
      }), _react2.default.createElement(_FlatButton2.default, {
        label: 'Ok',
        primary: true,
        keyboardFocused: true,
        onTouchTap: this._okSave
      })];

      return _react2.default.createElement(
        'div',
        {
          className: 'tray-layout'
        },
        _react2.default.createElement(
          'div',
          {
            className: 'tray-header'
          },
          _react2.default.createElement(
            'ul',
            { className: 'menu left' },
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                _IconMenu2.default,
                {
                  anchorOrigin: { horizontal: 'left', vertical: 'top' },
                  targetOrigin: { horizontal: 'left', vertical: 'top' },
                  iconButtonElement: _react2.default.createElement(
                    _IconButton2.default,
                    { style: { width: '40px', height: '40px', padding: '3px' } },
                    _react2.default.createElement(_moreVert2.default, null)
                  )
                },
                _react2.default.createElement(_MenuItem2.default, {
                  primaryText: 'save...',
                  onClick: this.saveFile
                }),
                _react2.default.createElement(_MenuItem2.default, {
                  primaryText: 'clear',
                  onClick: this.clear
                })
              )
            )
          )
        ),
        _react2.default.createElement(
          'div',
          {
            className: 'tray-content'
          },
          _react2.default.createElement(_anote_editor2.default, {
            defaultValue: this.state.content,
            ref: 'fileContent',
            editorState: 0,
            toggleWatching: function toggleWatching() {},
            togglePreview: function togglePreview() {},
            onChange: function onChange() {},
            keyMaps: this.getKeyMaps(),
            withoutToolbar: true
          })
        ),
        _react2.default.createElement(
          _Dialog2.default,
          {
            title: 'Save File',
            actions: saveActions,
            open: this.state.saveDialogOpen,
            onRequestClose: this._cancelSave,
            autoScrollBodyContent: true
          },
          _react2.default.createElement(
            'form',
            { onSubmit: this._okSave },
            _react2.default.createElement(_TextField2.default, {
              fullWidth: true,
              hintText: 'title of the note',
              errorText: this.state.titleErrorText,
              floatingLabelText: 'title',
              defaultValue: '',
              onChange: this._changeTitle,
              ref: 'titleInput'
            }),
            _react2.default.createElement(
              _SelectField2.default,
              {
                value: this.state.bookId,
                onChange: this._changeBookId,
                floatingLabelText: 'select a book',
                errorText: this.state.bookIdErrorText
              },
              this.state.books.map(function (book) {
                return _react2.default.createElement(_MenuItem2.default, {
                  key: book._id,
                  value: book._id,
                  primaryText: book.name
                });
              })
            )
          )
        ),
        _react2.default.createElement(
          _Dialog2.default,
          {
            title: 'Alert!!',
            actions: [_react2.default.createElement(_FlatButton2.default, {
              label: 'Ok',
              primary: true,
              keyboardFocused: true,
              onTouchTap: this._closeAlertNoBooksDialog
            })],
            open: this.state.alertDialogOpen,
            onRequestClose: this._closeAlertNoBooksDialog,
            autoScrollBodyContent: true
          },
          _react2.default.createElement('br', null),
          _react2.default.createElement(
            'div',
            null,
            'before u save a note, please create a notebook first'
          )
        )
      );
    }
  }]);

  return TrayApp;
}(_react.Component);

exports.default = TrayApp;
//# sourceMappingURL=tray_app.js.map