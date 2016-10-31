'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _FlatButton = require('material-ui/FlatButton');

var _FlatButton2 = _interopRequireDefault(_FlatButton);

var _Paper = require('material-ui/Paper');

var _Paper2 = _interopRequireDefault(_Paper);

var _Dialog = require('material-ui/Dialog');

var _Dialog2 = _interopRequireDefault(_Dialog);

var _Menu = require('material-ui/Menu');

var _Menu2 = _interopRequireDefault(_Menu);

var _MenuItem = require('material-ui/MenuItem');

var _MenuItem2 = _interopRequireDefault(_MenuItem);

var _Divider = require('material-ui/Divider');

var _Divider2 = _interopRequireDefault(_Divider);

var _navigationArrowDropRight = require('material-ui/svg-icons/navigation-arrow-drop-right');

var _navigationArrowDropRight2 = _interopRequireDefault(_navigationArrowDropRight);

var _List = require('material-ui/List');

var _done = require('material-ui/svg-icons/action/done');

var _done2 = _interopRequireDefault(_done);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var style = {
  display: 'inline-block',
  margin: '16px 32px 16px 0'
};

var ListMenu = function (_Component) {
  _inherits(ListMenu, _Component);

  function ListMenu(props) {
    _classCallCheck(this, ListMenu);

    var _this = _possibleConstructorReturn(this, (ListMenu.__proto__ || Object.getPrototypeOf(ListMenu)).call(this, props));

    _this.borderStyle = function (dataItem) {
      if (dataItem.id == _this.state.checkedId) {
        return '1.5px #d1c091 solid';
      } else {
        return 'none';
      }
    };

    _this.state = {
      checkedId: null
    };
    return _this;
  }

  _createClass(ListMenu, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(newProps) {
      this.setState({
        checkedId: null
      });
    }
  }, {
    key: 'selectDataItem',
    value: function selectDataItem(event, checkedId) {
      console.log('selectDataItem');
      console.log(checkedId);
      this.setState({
        checkedId: checkedId
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var actions = [_react2.default.createElement(_FlatButton2.default, {
        primary: true,
        label: this.props.cancelString,
        onTouchTap: this.props.onCancel
      }), _react2.default.createElement(_FlatButton2.default, {
        label: this.props.okString,
        onTouchTap: function onTouchTap(event) {
          _this2.props.onOk(event, _this2.state.checkedId, _this2.props.tmpData);
        },
        disabled: this.state.checkedId == null
      })];

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          _Dialog2.default,
          {
            title: this.props.title,
            actions: actions,
            modal: true,
            open: this.props.open,
            autoScrollBodyContent: true
          },
          _react2.default.createElement(
            _List.List,
            null,
            this.props.dataList.map(function (dataItem, index) {
              return _this2.props.filterFunc(dataItem, _this2.props.dataItem) ? _react2.default.createElement(_List.ListItem, {
                key: dataItem.id,
                primaryText: dataItem.name,
                leftIcon: _react2.default.createElement(_done2.default, null)
              }) : _react2.default.createElement(_List.ListItem, {
                style: {
                  border: _this2.borderStyle(dataItem)
                },
                key: dataItem.id,
                primaryText: dataItem.name,
                insetChildren: true,
                onTouchTap: function onTouchTap(event) {
                  _this2.selectDataItem(event, dataItem.id);
                }
              });
            })
          )
        )
      );
    }
  }]);

  return ListMenu;
}(_react.Component);

exports.default = ListMenu;


ListMenu.propTypes = {
  cancelString: _react.PropTypes.string,
  okString: _react.PropTypes.string,
  onCancel: _react.PropTypes.func,
  onOk: _react.PropTypes.func,
  title: _react.PropTypes.string,
  open: _react.PropTypes.bool,
  dataList: _react.PropTypes.array,
  dataItem: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number, _react.PropTypes.object]),
  filterFunc: _react.PropTypes.func
};