'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _co = require('co');

var _co2 = _interopRequireDefault(_co);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _TextField = require('material-ui/TextField');

var _TextField2 = _interopRequireDefault(_TextField);

var _Dialog = require('material-ui/Dialog');

var _Dialog2 = _interopRequireDefault(_Dialog);

var _FlatButton = require('material-ui/FlatButton');

var _FlatButton2 = _interopRequireDefault(_FlatButton);

var _reactDropzone = require('react-dropzone');

var _reactDropzone2 = _interopRequireDefault(_reactDropzone);

var _constants = require('../../constants');

var _constants2 = _interopRequireDefault(_constants);

var _util = require('../../util');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FILES_PATH = _constants2.default.FILES_PATH;

// props {book, open, onCancel, onOk}
var BookForm = function (_Component) {
  _inherits(BookForm, _Component);

  function BookForm(props) {
    _classCallCheck(this, BookForm);

    var _this = _possibleConstructorReturn(this, (BookForm.__proto__ || Object.getPrototypeOf(BookForm)).call(this, props));

    _this._changeName = function (event) {
      _this.setState({
        book: Object.assign({}, _this.state.book, { name: event.target.value })
      });
    };

    _this._submit = function (event) {
      event.preventDefault();
      event.stopPropagation();
      if (_this.state.book.name == '' || !_this.state.book.name) {
        _this.setState({
          nameErrorText: 'need a name!!'
        });
        return;
      }
      _this.props.onOk(_this.state.book);
    };

    _this._dropImage = function (files) {
      var that = _this;
      (0, _co2.default)(regeneratorRuntime.mark(function _callee() {
        var path, hashKey, key;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                path = files[0].path;
                _context.next = 3;
                return (0, _util.getFileHash)(path);

              case 3:
                hashKey = _context.sent;
                key = (0, _util.hash2Key)(hashKey);
                _context.next = 7;
                return (0, _util.copyFile)(path, FILES_PATH + '/' + key);

              case 7:
                that.setState({
                  book: Object.assign({}, that.state.book, { imagePath: key })
                });

              case 8:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));
    };

    _this.state = {
      book: _this.props.book,
      nameErrorText: null,
      processImage: false
    };
    return _this;
  }

  _createClass(BookForm, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(newProps) {
      if (JSON.stringify(newProps.book) != JSON.stringify(this.state.book)) {
        this.setState({
          book: newProps.book,
          nameErrorText: null
        });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var actions = [_react2.default.createElement(_FlatButton2.default, {
        label: 'Cancel',
        secondary: true,
        onTouchTap: this.props.onCancel
      }), _react2.default.createElement(_FlatButton2.default, {
        label: 'Ok',
        primary: true,
        keyboardFocused: true,
        onTouchTap: this._submit
      })];

      return _react2.default.createElement(
        _Dialog2.default,
        {
          title: this.state.book._id ? 'Edit Book' : 'New Book',
          actions: actions,
          open: this.props.open,
          onRequestClose: this.props.onCancel,
          autoScrollBodyContent: true
        },
        _react2.default.createElement(
          'form',
          { onSubmit: this._submit },
          _react2.default.createElement(_TextField2.default, {
            fullWidth: true,
            hintText: 'name of the new book',
            errorText: this.state.nameErrorText,
            floatingLabelText: 'name',
            defaultValue: this.state.book.name,
            onChange: this._changeName
          }),
          _react2.default.createElement('br', null),
          _react2.default.createElement(
            _reactDropzone2.default,
            { onDrop: this._dropImage, multiple: false, style: { width: '200px', height: '200px' } },
            _react2.default.createElement('img', {
              src: this.state.book.imagePath != '' ? FILES_PATH + '/' + this.state.book.imagePath : _constants2.default.TMP_IMAGE_PATH,
              style: { height: '100%', width: '100%', objectFit: 'contain' }
            })
          )
        )
      );
    }
  }]);

  return BookForm;
}(_react.Component);

// strong params


BookForm.propTypes = {
  book: _react.PropTypes.object,
  open: _react.PropTypes.bool,
  onCancel: _react.PropTypes.func,
  onOk: _react.PropTypes.func
};

exports.default = BookForm;
//# sourceMappingURL=book_form.js.map