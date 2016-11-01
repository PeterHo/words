'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Card = require('material-ui/Card');

var _reactRouter = require('react-router');

var _util = require('../../util');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FilesList = function (_Component) {
  _inherits(FilesList, _Component);

  function FilesList(props) {
    _classCallCheck(this, FilesList);

    // this.debouncedLinkClick = debounce(this.linkClick, 200);
    var _this = _possibleConstructorReturn(this, (FilesList.__proto__ || Object.getPrototypeOf(FilesList)).call(this, props));

    _this.linkClick = function (pathname) {
      _reactRouter.hashHistory.push({ pathname: pathname, query: _this.props.query });
    };

    _this.debouncedLinkClick = _this.linkClick;
    return _this;
  }

  _createClass(FilesList, [{
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if (this.debouncedLinkClick.cancel) this.debouncedLinkClick.cancel();
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        'div',
        {
          style: { marginTop: '95px' }
        },
        this.props.files.map(function (file, index) {
          return _react2.default.createElement(
            _reactRouter.Link,
            {
              to: { pathname: '/notes/' + file._id + '/edit', query: _this2.props.query },
              key: file._id,
              activeClassName: 'active',
              className: 'file-item',
              onClick: function onClick(event) {
                event.preventDefault();
                event.stopPropagation();
                _this2.debouncedLinkClick('/notes/' + file._id + '/edit');
              }
            },
            _react2.default.createElement(
              _Card.Card,
              {
                style: {
                  boxShadow: 'none',
                  border: '1px solid #eee',
                  marginTop: '1px',
                  marginBottom: '1px'
                },
                onContextMenu: function onContextMenu(event) {
                  event.stopPropagation();_this2.props.onContextMenu(file, index);
                }
              },
              _react2.default.createElement(_Card.CardHeader, {
                title: file.title || 'Untitled',
                subtitle: (0, _util.ppDate)((0, _util.chineseDate)(file.updatedAt || file.createdAt)),
                showExpandableButton: true,
                style: {
                  lineHeight: '18px',
                  fontSize: '16px'
                }
              }),
              _react2.default.createElement(
                _Card.CardText,
                {
                  expandable: true,
                  style: {
                    maxHeight: '50px',
                    overflow: 'hidden',
                    fontSize: '14px',
                    lineHeight: '16px'
                  }
                },
                file.content || 'Enjoy Markdown! coding now'
              )
            )
          );
        })
      );
    }
  }]);

  return FilesList;
}(_react.Component);

FilesList.propTypes = {
  files: _react.PropTypes.array,
  callbacks: _react.PropTypes.object
};

exports.default = FilesList;
//# sourceMappingURL=files_list.js.map