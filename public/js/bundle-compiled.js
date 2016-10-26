"use strict";var _typeof4=typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"?function(obj){return typeof obj;}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f;}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e);},l,l.exports,e,t,n,r);}return n[o].exports;}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++){s(r[o]);}return s;})({1:[function(require,module,exports){/*
 * Copyright (C) 2016. All Rights Reserved.
 *
 * @author  Arno Zhang
 * @email   zyfgood12@163.com
 * @date    2016/06/22
 */'use strict';var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=require('react');var _react2=_interopRequireDefault(_react);var _reactDom=require('react-dom');var _reactDom2=_interopRequireDefault(_reactDom);var _reactTapEventPlugin=require('react-tap-event-plugin');var _reactTapEventPlugin2=_interopRequireDefault(_reactTapEventPlugin);var _getMuiTheme=require('material-ui/styles/getMuiTheme');var _getMuiTheme2=_interopRequireDefault(_getMuiTheme);var _MuiThemeProvider=require('material-ui/styles/MuiThemeProvider');var _MuiThemeProvider2=_interopRequireDefault(_MuiThemeProvider);var _TextField=require('material-ui/TextField');var _TextField2=_interopRequireDefault(_TextField);var _RaisedButton=require('material-ui/RaisedButton');var _RaisedButton2=_interopRequireDefault(_RaisedButton);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&((typeof call==="undefined"?"undefined":_typeof4(call))==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+(typeof superClass==="undefined"?"undefined":_typeof4(superClass)));}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var events=window.require('events');var path=window.require('path');var fs=window.require('fs');var electron=window.require('electron');var ipcRenderer=electron.ipcRenderer,shell=electron.shell;var dialog=electron.remote.dialog;var muiTheme=(0,_getMuiTheme2.default)({fontFamily:'Microsoft YaHei'});var MainWindow=function(_React$Component){_inherits(MainWindow,_React$Component);function MainWindow(props){_classCallCheck(this,MainWindow);var _this=_possibleConstructorReturn(this,(MainWindow.__proto__||Object.getPrototypeOf(MainWindow)).call(this,props));(0,_reactTapEventPlugin2.default)();_this.state={userName:null,password:null};return _this;}_createClass(MainWindow,[{key:'render',value:function render(){var _this2=this;return _react2.default.createElement(_MuiThemeProvider2.default,{muiTheme:muiTheme},_react2.default.createElement('div',{style:styles.root},_react2.default.createElement('img',{style:styles.icon,src:'public/img/app-icon.png'}),_react2.default.createElement(_TextField2.default,{hintText:"\u8BF7\u8F93\u5165\u7528\u6237\u540D",value:this.state.userName,onChange:function onChange(event){_this2.setState({userName:event.target.value});}}),_react2.default.createElement(_TextField2.default,{hintText:"\u8BF7\u8F93\u5165\u5BC6\u7801",type:'password',value:this.state.password,onChange:function onChange(event){_this2.setState({password:event.target.value});}}),_react2.default.createElement('div',{style:styles.buttons_container},_react2.default.createElement(_RaisedButton2.default,{label:"\u767B\u5F55",primary:true,onClick:this._handleLogin.bind(this)}),_react2.default.createElement(_RaisedButton2.default,{label:"\u6CE8\u518C",primary:false,style:{marginLeft:60},onClick:this._handleRegistry.bind(this)}))));}},{key:'_handleLogin',value:function _handleLogin(){var options={type:'info',buttons:['确定'],title:'登录',message:this.state.userName,defaultId:0,cancelId:0};dialog.showMessageBox(options,function(response){if(response==0){console.log('OK pressed!');}});}},{key:'_handleRegistry',value:function _handleRegistry(){}}]);return MainWindow;}(_react2.default.Component);var styles={root:{position:'absolute',left:0,top:0,right:0,bottom:0,display:'flex',flex:1,flexDirection:'column',alignItems:'center',justifyContent:'center'},icon:{width:100,height:100,marginBottom:40},buttons_container:{paddingTop:30,width:'100%',display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'center'}};var mainWndComponent=MainWindow.render(_react2.default.createElement(MainWindow,null),document.getElementById('content'));},{"material-ui/RaisedButton":7,"material-ui/TextField":13,"material-ui/styles/MuiThemeProvider":20,"material-ui/styles/getMuiTheme":23,"react":225,"react-dom":78,"react-tap-event-plugin":72}],2:[function(require, module, exports){module.exports=function(target){for(var i=1; i<arguments.length; i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};},{}],3:[function(require,module,exports){// shim for using process in browser
var process=module.exports={};// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.
var cachedSetTimeout;var cachedClearTimeout;function defaultSetTimout(){throw new Error('setTimeout has not been defined');}function defaultClearTimeout(){throw new Error('clearTimeout has not been defined');}(function(){try{if(typeof setTimeout==='function'){cachedSetTimeout=setTimeout;}else{cachedSetTimeout=defaultSetTimout;}}catch(e){cachedSetTimeout=defaultSetTimout;}try{if(typeof clearTimeout==='function'){cachedClearTimeout=clearTimeout;}else{cachedClearTimeout=defaultClearTimeout;}}catch(e){cachedClearTimeout=defaultClearTimeout;}})();function runTimeout(fun){if(cachedSetTimeout===setTimeout){//normal enviroments in sane situations
return setTimeout(fun,0);}// if setTimeout wasn't available but was latter defined
if((cachedSetTimeout===defaultSetTimout||!cachedSetTimeout)&&setTimeout){cachedSetTimeout=setTimeout;return setTimeout(fun,0);}try{// when when somebody has screwed with setTimeout but no I.E. maddness
return cachedSetTimeout(fun,0);}catch(e){try{// When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
return cachedSetTimeout.call(null,fun,0);}catch(e){// same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
return cachedSetTimeout.call(this,fun,0);}}}function runClearTimeout(marker){if(cachedClearTimeout===clearTimeout){//normal enviroments in sane situations
return clearTimeout(marker);}// if clearTimeout wasn't available but was latter defined
if((cachedClearTimeout===defaultClearTimeout||!cachedClearTimeout)&&clearTimeout){cachedClearTimeout=clearTimeout;return clearTimeout(marker);}try{// when when somebody has screwed with setTimeout but no I.E. maddness
return cachedClearTimeout(marker);}catch(e){try{// When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
return cachedClearTimeout.call(null,marker);}catch(e){// same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
// Some versions of I.E. have different rules for clearTimeout vs setTimeout
return cachedClearTimeout.call(this,marker);}}}var queue=[];var draining=false;var currentQueue;var queueIndex=-1;function cleanUpNextTick(){if(!draining||!currentQueue){return;}draining=false;if(currentQueue.length){queue=currentQueue.concat(queue);}else{queueIndex=-1;}if(queue.length){drainQueue();}}function drainQueue(){if(draining){return;}var timeout=runTimeout(cleanUpNextTick);draining=true;var len=queue.length;while(len){currentQueue=queue;queue=[];while(++queueIndex<len){if(currentQueue){currentQueue[queueIndex].run();}}queueIndex=-1;len=queue.length;}currentQueue=null;draining=false;runClearTimeout(timeout);}process.nextTick=function(fun){var args=new Array(arguments.length-1);if(arguments.length>1){for(var i=1;i<arguments.length;i++){args[i-1]=arguments[i];}}queue.push(new Item(fun,args));if(queue.length===1&&!draining){runTimeout(drainQueue);}};// v8 likes predictible objects
function Item(fun,array){this.fun=fun;this.array=array;}Item.prototype.run=function(){this.fun.apply(null,this.array);};process.title='browser';process.browser=true;process.env={};process.argv=[];process.version='';// empty string to avoid regexp issues
process.versions={};function noop(){}process.on=noop;process.addListener=noop;process.once=noop;process.off=noop;process.removeListener=noop;process.removeAllListeners=noop;process.emit=noop;process.binding=function(name){throw new Error('process.binding is not supported');};process.cwd=function(){return'/';};process.chdir=function(dir){throw new Error('process.chdir is not supported');};process.umask=function(){return 0;};},{}],4:[function(require,module,exports){(function(process){'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _extends2=require('babel-runtime/helpers/extends');var _extends3=_interopRequireDefault(_extends2);var _objectWithoutProperties2=require('babel-runtime/helpers/objectWithoutProperties');var _objectWithoutProperties3=_interopRequireDefault(_objectWithoutProperties2);var _getPrototypeOf=require('babel-runtime/core-js/object/get-prototype-of');var _getPrototypeOf2=_interopRequireDefault(_getPrototypeOf);var _classCallCheck2=require('babel-runtime/helpers/classCallCheck');var _classCallCheck3=_interopRequireDefault(_classCallCheck2);var _createClass2=require('babel-runtime/helpers/createClass');var _createClass3=_interopRequireDefault(_createClass2);var _possibleConstructorReturn2=require('babel-runtime/helpers/possibleConstructorReturn');var _possibleConstructorReturn3=_interopRequireDefault(_possibleConstructorReturn2);var _inherits2=require('babel-runtime/helpers/inherits');var _inherits3=_interopRequireDefault(_inherits2);var _simpleAssign=require('simple-assign');var _simpleAssign2=_interopRequireDefault(_simpleAssign);var _react=require('react');var _react2=_interopRequireDefault(_react);var _propTypes=require('../utils/propTypes');var _propTypes2=_interopRequireDefault(_propTypes);var _transitions=require('../styles/transitions');var _transitions2=_interopRequireDefault(_transitions);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function getStyles(props,context){var rounded=props.rounded;var circle=props.circle;var transitionEnabled=props.transitionEnabled;var zDepth=props.zDepth;var _context$muiTheme=context.muiTheme;var baseTheme=_context$muiTheme.baseTheme;var paper=_context$muiTheme.paper;return{root:{color:paper.color,backgroundColor:paper.backgroundColor,transition:transitionEnabled&&_transitions2.default.easeOut(),boxSizing:'border-box',fontFamily:baseTheme.fontFamily,WebkitTapHighlightColor:'rgba(0,0,0,0)',// Remove mobile color flashing (deprecated)
boxShadow:paper.zDepthShadows[zDepth-1],// No shadow for 0 depth papers
borderRadius:circle?'50%':rounded?'2px':'0px'}};}var Paper=function(_Component){(0,_inherits3.default)(Paper,_Component);function Paper(){(0,_classCallCheck3.default)(this,Paper);return(0,_possibleConstructorReturn3.default)(this,(Paper.__proto__||(0,_getPrototypeOf2.default)(Paper)).apply(this,arguments));}(0,_createClass3.default)(Paper,[{key:'render',value:function render(){var _props=this.props;var children=_props.children;var circle=_props.circle;var rounded=_props.rounded;var style=_props.style;var transitionEnabled=_props.transitionEnabled;var zDepth=_props.zDepth;var other=(0,_objectWithoutProperties3.default)(_props,['children','circle','rounded','style','transitionEnabled','zDepth']);var prepareStyles=this.context.muiTheme.prepareStyles;var styles=getStyles(this.props,this.context);return _react2.default.createElement('div',(0,_extends3.default)({},other,{style:prepareStyles((0,_simpleAssign2.default)(styles.root,style))}),children);}}]);return Paper;}(_react.Component);Paper.defaultProps={circle:false,rounded:true,transitionEnabled:true,zDepth:1};Paper.contextTypes={muiTheme:_react.PropTypes.object.isRequired};process.env.NODE_ENV!=="production"?Paper.propTypes={/**
   * Children passed into the paper element.
   */children:_react.PropTypes.node,/**
   * Set to true to generate a circlular paper container.
   */circle:_react.PropTypes.bool,/**
   * By default, the paper container will have a border radius.
   * Set this to false to generate a container with sharp corners.
   */rounded:_react.PropTypes.bool,/**
   * Override the inline-styles of the root element.
   */style:_react.PropTypes.object,/**
   * Set to false to disable CSS transitions for the paper element.
   */transitionEnabled:_react.PropTypes.bool,/**
   * This number represents the zDepth of the paper shadow.
   */zDepth:_propTypes2.default.zDepth}:void 0;exports.default=Paper;}).call(this,require('_process'));},{"../styles/transitions":25,"../utils/propTypes":35,"_process":3,"babel-runtime/core-js/object/get-prototype-of":350,"babel-runtime/helpers/classCallCheck":355,"babel-runtime/helpers/createClass":356,"babel-runtime/helpers/extends":357,"babel-runtime/helpers/inherits":358,"babel-runtime/helpers/objectWithoutProperties":359,"babel-runtime/helpers/possibleConstructorReturn":360,"react":225,"simple-assign":2}],5:[function(require,module,exports){'use strict';Object.defineProperty(exports,"__esModule",{value:true});exports.default=undefined;var _Paper=require('./Paper');var _Paper2=_interopRequireDefault(_Paper);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}exports.default=_Paper2.default;},{"./Paper":4}],6:[function(require,module,exports){(function(process){'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _extends2=require('babel-runtime/helpers/extends');var _extends3=_interopRequireDefault(_extends2);var _objectWithoutProperties2=require('babel-runtime/helpers/objectWithoutProperties');var _objectWithoutProperties3=_interopRequireDefault(_objectWithoutProperties2);var _getPrototypeOf=require('babel-runtime/core-js/object/get-prototype-of');var _getPrototypeOf2=_interopRequireDefault(_getPrototypeOf);var _classCallCheck2=require('babel-runtime/helpers/classCallCheck');var _classCallCheck3=_interopRequireDefault(_classCallCheck2);var _createClass2=require('babel-runtime/helpers/createClass');var _createClass3=_interopRequireDefault(_createClass2);var _possibleConstructorReturn2=require('babel-runtime/helpers/possibleConstructorReturn');var _possibleConstructorReturn3=_interopRequireDefault(_possibleConstructorReturn2);var _inherits2=require('babel-runtime/helpers/inherits');var _inherits3=_interopRequireDefault(_inherits2);var _simpleAssign=require('simple-assign');var _simpleAssign2=_interopRequireDefault(_simpleAssign);var _react=require('react');var _react2=_interopRequireDefault(_react);var _transitions=require('../styles/transitions');var _transitions2=_interopRequireDefault(_transitions);var _colorManipulator=require('../utils/colorManipulator');var _childUtils=require('../utils/childUtils');var _EnhancedButton=require('../internal/EnhancedButton');var _EnhancedButton2=_interopRequireDefault(_EnhancedButton);var _Paper=require('../Paper');var _Paper2=_interopRequireDefault(_Paper);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function validateLabel(props,propName,componentName){if(process.env.NODE_ENV!=='production'){if(!props.children&&props.label!==0&&!props.label&&!props.icon){return new Error('Required prop label or children or icon was not specified in '+componentName+'.');}}}function getStyles(props,context,state){var _context$muiTheme=context.muiTheme;var baseTheme=_context$muiTheme.baseTheme;var button=_context$muiTheme.button;var raisedButton=_context$muiTheme.raisedButton;var disabled=props.disabled;var disabledBackgroundColor=props.disabledBackgroundColor;var disabledLabelColor=props.disabledLabelColor;var fullWidth=props.fullWidth;var icon=props.icon;var label=props.label;var labelPosition=props.labelPosition;var primary=props.primary;var secondary=props.secondary;var style=props.style;var amount=primary||secondary?0.4:0.08;var backgroundColor=raisedButton.color;var labelColor=raisedButton.textColor;if(disabled){backgroundColor=disabledBackgroundColor||raisedButton.disabledColor;labelColor=disabledLabelColor||raisedButton.disabledTextColor;}else if(primary){backgroundColor=raisedButton.primaryColor;labelColor=raisedButton.primaryTextColor;}else if(secondary){backgroundColor=raisedButton.secondaryColor;labelColor=raisedButton.secondaryTextColor;}else{if(props.backgroundColor){backgroundColor=props.backgroundColor;}if(props.labelColor){labelColor=props.labelColor;}}var buttonHeight=style&&style.height||button.height;var borderRadius=2;return{root:{display:'inline-block',transition:_transitions2.default.easeOut(),minWidth:fullWidth?'100%':button.minWidth},button:{position:'relative',height:buttonHeight,lineHeight:buttonHeight+'px',width:'100%',padding:0,borderRadius:borderRadius,transition:_transitions2.default.easeOut(),backgroundColor:backgroundColor,// That's the default value for a button but not a link
textAlign:'center'},label:{position:'relative',opacity:1,fontSize:raisedButton.fontSize,letterSpacing:0,textTransform:raisedButton.textTransform||button.textTransform||'uppercase',fontWeight:raisedButton.fontWeight,margin:0,userSelect:'none',paddingLeft:icon&&labelPosition!=='before'?8:baseTheme.spacing.desktopGutterLess,paddingRight:icon&&labelPosition==='before'?8:baseTheme.spacing.desktopGutterLess,color:labelColor},icon:{verticalAlign:'middle',marginLeft:label&&labelPosition!=='before'?12:0,marginRight:label&&labelPosition==='before'?12:0},overlay:{height:buttonHeight,borderRadius:borderRadius,backgroundColor:(state.keyboardFocused||state.hovered)&&!disabled&&(0,_colorManipulator.fade)(labelColor,amount),transition:_transitions2.default.easeOut(),top:0},ripple:{color:labelColor,opacity:!(primary||secondary)?0.1:0.16}};}var RaisedButton=function(_Component){(0,_inherits3.default)(RaisedButton,_Component);function RaisedButton(){var _ref;var _temp,_this,_ret;(0,_classCallCheck3.default)(this,RaisedButton);for(var _len=arguments.length,args=Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}return _ret=(_temp=(_this=(0,_possibleConstructorReturn3.default)(this,(_ref=RaisedButton.__proto__||(0,_getPrototypeOf2.default)(RaisedButton)).call.apply(_ref,[this].concat(args))),_this),_this.state={hovered:false,keyboardFocused:false,touched:false,initialZDepth:0,zDepth:0},_this.handleMouseDown=function(event){// only listen to left clicks
if(event.button===0){_this.setState({zDepth:_this.state.initialZDepth+1});}if(_this.props.onMouseDown){_this.props.onMouseDown(event);}},_this.handleMouseUp=function(event){_this.setState({zDepth:_this.state.initialZDepth});if(_this.props.onMouseUp){_this.props.onMouseUp(event);}},_this.handleMouseLeave=function(event){if(!_this.state.keyboardFocused){_this.setState({zDepth:_this.state.initialZDepth,hovered:false});}if(_this.props.onMouseLeave){_this.props.onMouseLeave(event);}},_this.handleMouseEnter=function(event){if(!_this.state.keyboardFocused&&!_this.state.touched){_this.setState({hovered:true});}if(_this.props.onMouseEnter){_this.props.onMouseEnter(event);}},_this.handleTouchStart=function(event){_this.setState({touched:true,zDepth:_this.state.initialZDepth+1});if(_this.props.onTouchStart){_this.props.onTouchStart(event);}},_this.handleTouchEnd=function(event){_this.setState({zDepth:_this.state.initialZDepth});if(_this.props.onTouchEnd){_this.props.onTouchEnd(event);}},_this.handleKeyboardFocus=function(event,keyboardFocused){var zDepth=keyboardFocused&&!_this.props.disabled?_this.state.initialZDepth+1:_this.state.initialZDepth;_this.setState({zDepth:zDepth,keyboardFocused:keyboardFocused});},_temp),(0,_possibleConstructorReturn3.default)(_this,_ret);}(0,_createClass3.default)(RaisedButton,[{key:'componentWillMount',value:function componentWillMount(){var zDepth=this.props.disabled?0:1;this.setState({zDepth:zDepth,initialZDepth:zDepth});}},{key:'componentWillReceiveProps',value:function componentWillReceiveProps(nextProps){var zDepth=nextProps.disabled?0:1;var nextState={zDepth:zDepth,initialZDepth:zDepth};if(nextProps.disabled){nextState.hovered=false;}this.setState(nextState);}},{key:'render',value:function render(){var _props=this.props;var backgroundColor=_props.backgroundColor;var buttonStyle=_props.buttonStyle;var children=_props.children;var className=_props.className;var disabled=_props.disabled;var disabledBackgroundColor=_props.disabledBackgroundColor;var disabledLabelColor=_props.disabledLabelColor;var fullWidth=_props.fullWidth;var icon=_props.icon;var label=_props.label;var labelColor=_props.labelColor;var labelPosition=_props.labelPosition;var labelStyle=_props.labelStyle;var overlayStyle=_props.overlayStyle;var primary=_props.primary;var rippleStyle=_props.rippleStyle;var secondary=_props.secondary;var style=_props.style;var other=(0,_objectWithoutProperties3.default)(_props,['backgroundColor','buttonStyle','children','className','disabled','disabledBackgroundColor','disabledLabelColor','fullWidth','icon','label','labelColor','labelPosition','labelStyle','overlayStyle','primary','rippleStyle','secondary','style']);var prepareStyles=this.context.muiTheme.prepareStyles;var styles=getStyles(this.props,this.context,this.state);var mergedRippleStyles=(0,_simpleAssign2.default)({},styles.ripple,rippleStyle);var buttonEventHandlers=disabled?{}:{onMouseDown:this.handleMouseDown,onMouseUp:this.handleMouseUp,onMouseLeave:this.handleMouseLeave,onMouseEnter:this.handleMouseEnter,onTouchStart:this.handleTouchStart,onTouchEnd:this.handleTouchEnd,onKeyboardFocus:this.handleKeyboardFocus};var labelElement=label&&_react2.default.createElement('span',{style:prepareStyles((0,_simpleAssign2.default)(styles.label,labelStyle))},label);var iconCloned=icon&&(0,_react.cloneElement)(icon,{color:icon.props.color||styles.label.color,style:(0,_simpleAssign2.default)(styles.icon,icon.props.style)});// Place label before or after children.
var childrenFragment=labelPosition==='before'?{labelElement:labelElement,iconCloned:iconCloned,children:children}:{children:children,iconCloned:iconCloned,labelElement:labelElement};var enhancedButtonChildren=(0,_childUtils.createChildFragment)(childrenFragment);return _react2.default.createElement(_Paper2.default,{className:className,style:(0,_simpleAssign2.default)(styles.root,style),zDepth:this.state.zDepth},_react2.default.createElement(_EnhancedButton2.default,(0,_extends3.default)({},other,buttonEventHandlers,{ref:'container',disabled:disabled,style:(0,_simpleAssign2.default)(styles.button,buttonStyle),focusRippleColor:mergedRippleStyles.color,touchRippleColor:mergedRippleStyles.color,focusRippleOpacity:mergedRippleStyles.opacity,touchRippleOpacity:mergedRippleStyles.opacity}),_react2.default.createElement('div',{ref:'overlay',style:prepareStyles((0,_simpleAssign2.default)(styles.overlay,overlayStyle))},enhancedButtonChildren)));}}]);return RaisedButton;}(_react.Component);RaisedButton.muiName='RaisedButton';RaisedButton.defaultProps={disabled:false,labelPosition:'after',fullWidth:false,primary:false,secondary:false};RaisedButton.contextTypes={muiTheme:_react.PropTypes.object.isRequired};process.env.NODE_ENV!=="production"?RaisedButton.propTypes={/**
   * Override the default background color for the button,
   * but not the default disabled background color
   * (use `disabledBackgroundColor` for this).
   */backgroundColor:_react.PropTypes.string,/**
   * Override the inline-styles of the button element.
   */buttonStyle:_react.PropTypes.object,/**
   * The content of the button.
   * If a label is provided via the `label` prop, the text within the label
   * will be displayed in addition to the content provided here.
   */children:_react.PropTypes.node,/**
   * The CSS class name of the root element.
   */className:_react.PropTypes.string,/**
   * If true, the button will be disabled.
   */disabled:_react.PropTypes.bool,/**
   * Override the default background color for the button
   * when it is disabled.
   */disabledBackgroundColor:_react.PropTypes.string,/**
   * The color of the button's label when the button is disabled.
   */disabledLabelColor:_react.PropTypes.string,/**
   * If true, the button will take up the full width of its container.
   */fullWidth:_react.PropTypes.bool,/**
   * The URL to link to when the button is clicked.
   */href:_react.PropTypes.string,/**
   * An icon to be displayed within the button.
   */icon:_react.PropTypes.node,/**
   * The label to be displayed within the button.
   * If content is provided via the `children` prop, that content will be
   * displayed in addition to the label provided here.
   */label:validateLabel,/**
   * The color of the button's label.
   */labelColor:_react.PropTypes.string,/**
   * The position of the button's label relative to the button's `children`.
   */labelPosition:_react.PropTypes.oneOf(['before','after']),/**
   * Override the inline-styles of the button's label element.
   */labelStyle:_react.PropTypes.object,/** @ignore */onMouseDown:_react.PropTypes.func,/** @ignore */onMouseEnter:_react.PropTypes.func,/** @ignore */onMouseLeave:_react.PropTypes.func,/** @ignore */onMouseUp:_react.PropTypes.func,/** @ignore */onTouchEnd:_react.PropTypes.func,/** @ignore */onTouchStart:_react.PropTypes.func,/**
   * Override the inline style of the button overlay.
   */overlayStyle:_react.PropTypes.object,/**
   * If true, the button will use the theme's primary color.
   */primary:_react.PropTypes.bool,/**
   * Override the inline style of the ripple element.
   */rippleStyle:_react.PropTypes.object,/**
   * If true, the button will use the theme's secondary color.
   * If both `secondary` and `primary` are true, the button will use
   * the theme's primary color.
   */secondary:_react.PropTypes.bool,/**
   * Override the inline-styles of the root element.
   */style:_react.PropTypes.object}:void 0;exports.default=RaisedButton;}).call(this,require('_process'));},{"../Paper":5,"../internal/EnhancedButton":15,"../styles/transitions":25,"../utils/childUtils":31,"../utils/colorManipulator":32,"_process":3,"babel-runtime/core-js/object/get-prototype-of":350,"babel-runtime/helpers/classCallCheck":355,"babel-runtime/helpers/createClass":356,"babel-runtime/helpers/extends":357,"babel-runtime/helpers/inherits":358,"babel-runtime/helpers/objectWithoutProperties":359,"babel-runtime/helpers/possibleConstructorReturn":360,"react":225,"simple-assign":2}],7:[function(require,module,exports){'use strict';Object.defineProperty(exports,"__esModule",{value:true});exports.default=undefined;var _RaisedButton=require('./RaisedButton');var _RaisedButton2=_interopRequireDefault(_RaisedButton);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}exports.default=_RaisedButton2.default;},{"./RaisedButton":6}],8:[function(require,module,exports){(function(process){'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _extends2=require('babel-runtime/helpers/extends');var _extends3=_interopRequireDefault(_extends2);var _objectWithoutProperties2=require('babel-runtime/helpers/objectWithoutProperties');var _objectWithoutProperties3=_interopRequireDefault(_objectWithoutProperties2);var _getPrototypeOf=require('babel-runtime/core-js/object/get-prototype-of');var _getPrototypeOf2=_interopRequireDefault(_getPrototypeOf);var _classCallCheck2=require('babel-runtime/helpers/classCallCheck');var _classCallCheck3=_interopRequireDefault(_classCallCheck2);var _createClass2=require('babel-runtime/helpers/createClass');var _createClass3=_interopRequireDefault(_createClass2);var _possibleConstructorReturn2=require('babel-runtime/helpers/possibleConstructorReturn');var _possibleConstructorReturn3=_interopRequireDefault(_possibleConstructorReturn2);var _inherits2=require('babel-runtime/helpers/inherits');var _inherits3=_interopRequireDefault(_inherits2);var _simpleAssign=require('simple-assign');var _simpleAssign2=_interopRequireDefault(_simpleAssign);var _react=require('react');var _react2=_interopRequireDefault(_react);var _reactEventListener=require('react-event-listener');var _reactEventListener2=_interopRequireDefault(_reactEventListener);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var rowsHeight=24;function getStyles(props,context,state){return{root:{position:'relative'},textarea:{height:state.height,width:'100%',resize:'none',font:'inherit',padding:0,cursor:props.disabled?'not-allowed':'initial'},shadow:{resize:'none',// Overflow also needed to here to remove the extra row
// added to textareas in Firefox.
overflow:'hidden',// Visibility needed to hide the extra text area on ipads
visibility:'hidden',position:'absolute',height:'initial'}};}var EnhancedTextarea=function(_Component){(0,_inherits3.default)(EnhancedTextarea,_Component);function EnhancedTextarea(){var _ref;var _temp,_this,_ret;(0,_classCallCheck3.default)(this,EnhancedTextarea);for(var _len=arguments.length,args=Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}return _ret=(_temp=(_this=(0,_possibleConstructorReturn3.default)(this,(_ref=EnhancedTextarea.__proto__||(0,_getPrototypeOf2.default)(EnhancedTextarea)).call.apply(_ref,[this].concat(args))),_this),_this.state={height:null},_this.handleResize=function(event){_this.syncHeightWithShadow(undefined,event);},_this.handleChange=function(event){_this.syncHeightWithShadow(event.target.value);if(_this.props.hasOwnProperty('valueLink')){_this.props.valueLink.requestChange(event.target.value);}if(_this.props.onChange){_this.props.onChange(event);}},_temp),(0,_possibleConstructorReturn3.default)(_this,_ret);}(0,_createClass3.default)(EnhancedTextarea,[{key:'componentWillMount',value:function componentWillMount(){this.setState({height:this.props.rows*rowsHeight});}},{key:'componentDidMount',value:function componentDidMount(){this.syncHeightWithShadow();}},{key:'componentWillReceiveProps',value:function componentWillReceiveProps(nextProps){if(nextProps.value!==this.props.value){this.syncHeightWithShadow(nextProps.value);}}},{key:'getInputNode',value:function getInputNode(){return this.refs.input;}},{key:'setValue',value:function setValue(value){this.getInputNode().value=value;this.syncHeightWithShadow(value);}},{key:'syncHeightWithShadow',value:function syncHeightWithShadow(newValue,event){var shadow=this.refs.shadow;if(newValue!==undefined){shadow.value=newValue;}var newHeight=shadow.scrollHeight;// Guarding for jsdom, where scrollHeight isn't present.
// See https://github.com/tmpvar/jsdom/issues/1013
if(newHeight===undefined)return;if(this.props.rowsMax>=this.props.rows){newHeight=Math.min(this.props.rowsMax*rowsHeight,newHeight);}newHeight=Math.max(newHeight,rowsHeight);if(this.state.height!==newHeight){this.setState({height:newHeight});if(this.props.onHeightChange){this.props.onHeightChange(event,newHeight);}}}},{key:'render',value:function render(){var _props=this.props;var onChange=_props.onChange;var onHeightChange=_props.onHeightChange;var rows=_props.rows;var rowsMax=_props.rowsMax;var shadowStyle=_props.shadowStyle;var style=_props.style;var textareaStyle=_props.textareaStyle;var valueLink=_props.valueLink;var other=(0,_objectWithoutProperties3.default)(_props,['onChange','onHeightChange','rows','rowsMax','shadowStyle','style','textareaStyle','valueLink']);var prepareStyles=this.context.muiTheme.prepareStyles;var styles=getStyles(this.props,this.context,this.state);var rootStyles=(0,_simpleAssign2.default)(styles.root,style,{appearance:'none'});var textareaStyles=(0,_simpleAssign2.default)(styles.textarea,textareaStyle);var shadowStyles=(0,_simpleAssign2.default)({},textareaStyles,styles.shadow,shadowStyle);if(this.props.hasOwnProperty('valueLink')){other.value=this.props.valueLink.value;}return _react2.default.createElement('div',{style:prepareStyles(rootStyles)},_react2.default.createElement(_reactEventListener2.default,{target:'window',onResize:this.handleResize}),_react2.default.createElement('textarea',{ref:'shadow',style:prepareStyles(shadowStyles),tabIndex:'-1',rows:this.props.rows,defaultValue:this.props.defaultValue,readOnly:true,value:this.props.value,valueLink:this.props.valueLink}),_react2.default.createElement('textarea',(0,_extends3.default)({},other,{ref:'input',rows:this.props.rows,style:prepareStyles(textareaStyles),onChange:this.handleChange})));}}]);return EnhancedTextarea;}(_react.Component);EnhancedTextarea.defaultProps={rows:1};EnhancedTextarea.contextTypes={muiTheme:_react.PropTypes.object.isRequired};process.env.NODE_ENV!=="production"?EnhancedTextarea.propTypes={defaultValue:_react.PropTypes.any,disabled:_react.PropTypes.bool,onChange:_react.PropTypes.func,onHeightChange:_react.PropTypes.func,rows:_react.PropTypes.number,rowsMax:_react.PropTypes.number,shadowStyle:_react.PropTypes.object,/**
   * Override the inline-styles of the root element.
   */style:_react.PropTypes.object,textareaStyle:_react.PropTypes.object,value:_react.PropTypes.string,valueLink:_react.PropTypes.object}:void 0;exports.default=EnhancedTextarea;}).call(this,require('_process'));},{"_process":3,"babel-runtime/core-js/object/get-prototype-of":350,"babel-runtime/helpers/classCallCheck":355,"babel-runtime/helpers/createClass":356,"babel-runtime/helpers/extends":357,"babel-runtime/helpers/inherits":358,"babel-runtime/helpers/objectWithoutProperties":359,"babel-runtime/helpers/possibleConstructorReturn":360,"react":225,"react-event-listener":42,"simple-assign":2}],9:[function(require,module,exports){(function(process){'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _extends2=require('babel-runtime/helpers/extends');var _extends3=_interopRequireDefault(_extends2);var _objectWithoutProperties2=require('babel-runtime/helpers/objectWithoutProperties');var _objectWithoutProperties3=_interopRequireDefault(_objectWithoutProperties2);var _getPrototypeOf=require('babel-runtime/core-js/object/get-prototype-of');var _getPrototypeOf2=_interopRequireDefault(_getPrototypeOf);var _classCallCheck2=require('babel-runtime/helpers/classCallCheck');var _classCallCheck3=_interopRequireDefault(_classCallCheck2);var _createClass2=require('babel-runtime/helpers/createClass');var _createClass3=_interopRequireDefault(_createClass2);var _possibleConstructorReturn2=require('babel-runtime/helpers/possibleConstructorReturn');var _possibleConstructorReturn3=_interopRequireDefault(_possibleConstructorReturn2);var _inherits2=require('babel-runtime/helpers/inherits');var _inherits3=_interopRequireDefault(_inherits2);var _simpleAssign=require('simple-assign');var _simpleAssign2=_interopRequireDefault(_simpleAssign);var _react=require('react');var _react2=_interopRequireDefault(_react);var _reactDom=require('react-dom');var _reactDom2=_interopRequireDefault(_reactDom);var _shallowEqual=require('recompose/shallowEqual');var _shallowEqual2=_interopRequireDefault(_shallowEqual);var _colorManipulator=require('../utils/colorManipulator');var _transitions=require('../styles/transitions');var _transitions2=_interopRequireDefault(_transitions);var _EnhancedTextarea=require('./EnhancedTextarea');var _EnhancedTextarea2=_interopRequireDefault(_EnhancedTextarea);var _TextFieldHint=require('./TextFieldHint');var _TextFieldHint2=_interopRequireDefault(_TextFieldHint);var _TextFieldLabel=require('./TextFieldLabel');var _TextFieldLabel2=_interopRequireDefault(_TextFieldLabel);var _TextFieldUnderline=require('./TextFieldUnderline');var _TextFieldUnderline2=_interopRequireDefault(_TextFieldUnderline);var _warning=require('warning');var _warning2=_interopRequireDefault(_warning);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var getStyles=function getStyles(props,context,state){var _context$muiTheme=context.muiTheme;var baseTheme=_context$muiTheme.baseTheme;var _context$muiTheme$tex=_context$muiTheme.textField;var floatingLabelColor=_context$muiTheme$tex.floatingLabelColor;var focusColor=_context$muiTheme$tex.focusColor;var textColor=_context$muiTheme$tex.textColor;var disabledTextColor=_context$muiTheme$tex.disabledTextColor;var backgroundColor=_context$muiTheme$tex.backgroundColor;var hintColor=_context$muiTheme$tex.hintColor;var errorColor=_context$muiTheme$tex.errorColor;var styles={root:{fontSize:16,lineHeight:'24px',width:props.fullWidth?'100%':256,height:(props.rows-1)*24+(props.floatingLabelText?72:48),display:'inline-block',position:'relative',backgroundColor:backgroundColor,fontFamily:baseTheme.fontFamily,transition:_transitions2.default.easeOut('200ms','height')},error:{position:'relative',bottom:2,fontSize:12,lineHeight:'12px',color:errorColor,transition:_transitions2.default.easeOut()},floatingLabel:{color:hintColor,pointerEvents:'none'},input:{padding:0,position:'relative',width:'100%',border:'none',outline:'none',backgroundColor:'rgba(0,0,0,0)',color:props.disabled?disabledTextColor:textColor,cursor:props.disabled?'not-allowed':'initial',font:'inherit',appearance:'textfield',// Improve type search style.
WebkitTapHighlightColor:'rgba(0,0,0,0)'}};(0,_simpleAssign2.default)(styles.error,props.errorStyle);styles.textarea=(0,_simpleAssign2.default)({},styles.input,{marginTop:props.floatingLabelText?36:12,marginBottom:props.floatingLabelText?-36:-12,boxSizing:'border-box',font:'inherit'});// Do not assign a height to the textarea as he handles it on his own.
styles.input.height='100%';if(state.hasValue){styles.floatingLabel.color=(0,_colorManipulator.fade)(props.disabled?disabledTextColor:floatingLabelColor,0.5);}if(state.isFocused){styles.floatingLabel.color=focusColor;}if(props.floatingLabelText){styles.input.boxSizing='border-box';if(!props.multiLine){styles.input.marginTop=14;}if(state.errorText){styles.error.bottom=!props.multiLine?styles.error.fontSize+3:3;}}if(state.errorText){if(state.isFocused){styles.floatingLabel.color=styles.error.color;}}return styles;};/**
 * Check if a value is valid to be displayed inside an input.
 *
 * @param The value to check.
 * @returns True if the string provided is valid, false otherwise.
 */function isValid(value){return value!==''&&value!==undefined&&value!==null;}var TextField=function(_Component){(0,_inherits3.default)(TextField,_Component);function TextField(){var _ref;var _temp,_this,_ret;(0,_classCallCheck3.default)(this,TextField);for(var _len=arguments.length,args=Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}return _ret=(_temp=(_this=(0,_possibleConstructorReturn3.default)(this,(_ref=TextField.__proto__||(0,_getPrototypeOf2.default)(TextField)).call.apply(_ref,[this].concat(args))),_this),_this.state={isFocused:false,errorText:undefined,hasValue:false,isClean:true},_this.handleInputBlur=function(event){_this.setState({isFocused:false});if(_this.props.onBlur)_this.props.onBlur(event);},_this.handleInputChange=function(event){_this.setState({hasValue:isValid(event.target.value),isClean:false});if(_this.props.onChange)_this.props.onChange(event,event.target.value);},_this.handleInputFocus=function(event){if(_this.props.disabled){return;}_this.setState({isFocused:true});if(_this.props.onFocus){_this.props.onFocus(event);}},_this.handleHeightChange=function(event,height){var newHeight=height+24;if(_this.props.floatingLabelText){newHeight+=24;}_reactDom2.default.findDOMNode(_this).style.height=newHeight+'px';},_temp),(0,_possibleConstructorReturn3.default)(_this,_ret);}(0,_createClass3.default)(TextField,[{key:'componentWillMount',value:function componentWillMount(){var _props=this.props;var children=_props.children;var name=_props.name;var hintText=_props.hintText;var floatingLabelText=_props.floatingLabelText;var id=_props.id;var propsLeaf=children?children.props:this.props;this.setState({errorText:this.props.errorText,hasValue:isValid(propsLeaf.value)||isValid(propsLeaf.defaultValue)});process.env.NODE_ENV!=="production"?(0,_warning2.default)(name||hintText||floatingLabelText||id,'We don\'t have enough information\n      to build a robust unique id for the TextField component. Please provide an id or a name.'):void 0;var uniqueId=name+'-'+hintText+'-'+floatingLabelText+'-'+Math.floor(Math.random()*0xFFFF);this.uniqueId=uniqueId.replace(/[^A-Za-z0-9-]/gi,'');}},{key:'componentWillReceiveProps',value:function componentWillReceiveProps(nextProps){if(nextProps.errorText!==this.props.errorText){this.setState({errorText:nextProps.errorText});}if(nextProps.children&&nextProps.children.props){nextProps=nextProps.children.props;}if(nextProps.hasOwnProperty('value')){var hasValue=isValid(nextProps.value)||this.state.isClean&&isValid(nextProps.defaultValue);this.setState({hasValue:hasValue});}}},{key:'shouldComponentUpdate',value:function shouldComponentUpdate(nextProps,nextState,nextContext){return!(0,_shallowEqual2.default)(this.props,nextProps)||!(0,_shallowEqual2.default)(this.state,nextState)||!(0,_shallowEqual2.default)(this.context,nextContext);}},{key:'blur',value:function blur(){if(this.input)this.getInputNode().blur();}},{key:'focus',value:function focus(){if(this.input)this.getInputNode().focus();}},{key:'select',value:function select(){if(this.input)this.getInputNode().select();}},{key:'getValue',value:function getValue(){return this.input?this.getInputNode().value:undefined;}},{key:'getInputNode',value:function getInputNode(){return this.props.children||this.props.multiLine?this.input.getInputNode():_reactDom2.default.findDOMNode(this.input);}},{key:'_isControlled',value:function _isControlled(){return this.props.hasOwnProperty('value');}},{key:'render',value:function render(){var _this2=this;var _props2=this.props;var children=_props2.children;var className=_props2.className;var disabled=_props2.disabled;var errorStyle=_props2.errorStyle;var errorText=_props2.errorText;var floatingLabelFixed=_props2.floatingLabelFixed;var floatingLabelFocusStyle=_props2.floatingLabelFocusStyle;var floatingLabelStyle=_props2.floatingLabelStyle;var floatingLabelText=_props2.floatingLabelText;var fullWidth=_props2.fullWidth;var hintText=_props2.hintText;var hintStyle=_props2.hintStyle;var id=_props2.id;var inputStyle=_props2.inputStyle;var multiLine=_props2.multiLine;var onBlur=_props2.onBlur;var onChange=_props2.onChange;var onFocus=_props2.onFocus;var style=_props2.style;var type=_props2.type;var underlineDisabledStyle=_props2.underlineDisabledStyle;var underlineFocusStyle=_props2.underlineFocusStyle;var underlineShow=_props2.underlineShow;var underlineStyle=_props2.underlineStyle;var rows=_props2.rows;var rowsMax=_props2.rowsMax;var textareaStyle=_props2.textareaStyle;var other=(0,_objectWithoutProperties3.default)(_props2,['children','className','disabled','errorStyle','errorText','floatingLabelFixed','floatingLabelFocusStyle','floatingLabelStyle','floatingLabelText','fullWidth','hintText','hintStyle','id','inputStyle','multiLine','onBlur','onChange','onFocus','style','type','underlineDisabledStyle','underlineFocusStyle','underlineShow','underlineStyle','rows','rowsMax','textareaStyle']);var prepareStyles=this.context.muiTheme.prepareStyles;var styles=getStyles(this.props,this.context,this.state);var inputId=id||this.uniqueId;var errorTextElement=this.state.errorText&&_react2.default.createElement('div',{style:prepareStyles(styles.error)},this.state.errorText);var floatingLabelTextElement=floatingLabelText&&_react2.default.createElement(_TextFieldLabel2.default,{muiTheme:this.context.muiTheme,style:(0,_simpleAssign2.default)(styles.floatingLabel,this.props.floatingLabelStyle),shrinkStyle:this.props.floatingLabelFocusStyle,htmlFor:inputId,shrink:this.state.hasValue||this.state.isFocused||floatingLabelFixed,disabled:disabled},floatingLabelText);var inputProps={id:inputId,ref:function ref(elem){return _this2.input=elem;},disabled:this.props.disabled,onBlur:this.handleInputBlur,onChange:this.handleInputChange,onFocus:this.handleInputFocus};var inputStyleMerged=(0,_simpleAssign2.default)(styles.input,inputStyle);var inputElement=void 0;if(children){inputElement=_react2.default.cloneElement(children,(0,_extends3.default)({},inputProps,children.props,{style:(0,_simpleAssign2.default)(inputStyleMerged,children.props.style)}));}else{inputElement=multiLine?_react2.default.createElement(_EnhancedTextarea2.default,(0,_extends3.default)({},other,inputProps,{style:inputStyleMerged,rows:rows,rowsMax:rowsMax,onHeightChange:this.handleHeightChange,textareaStyle:(0,_simpleAssign2.default)(styles.textarea,textareaStyle)})):_react2.default.createElement('input',(0,_extends3.default)({},other,inputProps,{style:prepareStyles(inputStyleMerged),type:type}));}var rootProps={};if(children){rootProps=other;}return _react2.default.createElement('div',(0,_extends3.default)({},rootProps,{className:className,style:prepareStyles((0,_simpleAssign2.default)(styles.root,style))}),floatingLabelTextElement,hintText?_react2.default.createElement(_TextFieldHint2.default,{muiTheme:this.context.muiTheme,show:!(this.state.hasValue||floatingLabelText&&!this.state.isFocused)||!this.state.hasValue&&floatingLabelText&&floatingLabelFixed&&!this.state.isFocused,style:hintStyle,text:hintText}):null,inputElement,underlineShow?_react2.default.createElement(_TextFieldUnderline2.default,{disabled:disabled,disabledStyle:underlineDisabledStyle,error:!!this.state.errorText,errorStyle:errorStyle,focus:this.state.isFocused,focusStyle:underlineFocusStyle,muiTheme:this.context.muiTheme,style:underlineStyle}):null,errorTextElement);}}]);return TextField;}(_react.Component);TextField.defaultProps={disabled:false,floatingLabelFixed:false,multiLine:false,fullWidth:false,type:'text',underlineShow:true,rows:1};TextField.contextTypes={muiTheme:_react.PropTypes.object.isRequired};process.env.NODE_ENV!=="production"?TextField.propTypes={children:_react.PropTypes.node,/**
   * The css class name of the root element.
   */className:_react.PropTypes.string,/**
   * The text string to use for the default value.
   */defaultValue:_react.PropTypes.any,/**
   * Disables the text field if set to true.
   */disabled:_react.PropTypes.bool,/**
   * The style object to use to override error styles.
   */errorStyle:_react.PropTypes.object,/**
   * The error content to display.
   */errorText:_react.PropTypes.node,/**
   * If true, the floating label will float even when there is no value.
   */floatingLabelFixed:_react.PropTypes.bool,/**
   * The style object to use to override floating label styles when focused.
   */floatingLabelFocusStyle:_react.PropTypes.object,/**
   * The style object to use to override floating label styles.
   */floatingLabelStyle:_react.PropTypes.object,/**
   * The content to use for the floating label element.
   */floatingLabelText:_react.PropTypes.node,/**
   * If true, the field receives the property width 100%.
   */fullWidth:_react.PropTypes.bool,/**
   * Override the inline-styles of the TextField's hint text element.
   */hintStyle:_react.PropTypes.object,/**
   * The hint content to display.
   */hintText:_react.PropTypes.node,/**
   * The id prop for the text field.
   */id:_react.PropTypes.string,/**
   * Override the inline-styles of the TextField's input element.
   * When multiLine is false: define the style of the input element.
   * When multiLine is true: define the style of the container of the textarea.
   */inputStyle:_react.PropTypes.object,/**
   * If true, a textarea element will be rendered.
   * The textarea also grows and shrinks according to the number of lines.
   */multiLine:_react.PropTypes.bool,/**
   * Name applied to the input.
   */name:_react.PropTypes.string,/** @ignore */onBlur:_react.PropTypes.func,/**
   * Callback function that is fired when the textfield's value changes.
   */onChange:_react.PropTypes.func,/** @ignore */onFocus:_react.PropTypes.func,/**
   * Number of rows to display when multiLine option is set to true.
   */rows:_react.PropTypes.number,/**
   * Maximum number of rows to display when
   * multiLine option is set to true.
   */rowsMax:_react.PropTypes.number,/**
   * Override the inline-styles of the root element.
   */style:_react.PropTypes.object,/**
   * Override the inline-styles of the TextField's textarea element.
   * The TextField use either a textarea or an input,
   * this property has effects only when multiLine is true.
   */textareaStyle:_react.PropTypes.object,/**
   * Specifies the type of input to display
   * such as "password" or "text".
   */type:_react.PropTypes.string,/**
   * Override the inline-styles of the
   * TextField's underline element when disabled.
   */underlineDisabledStyle:_react.PropTypes.object,/**
   * Override the inline-styles of the TextField's
   * underline element when focussed.
   */underlineFocusStyle:_react.PropTypes.object,/**
   * If true, shows the underline for the text field.
   */underlineShow:_react.PropTypes.bool,/**
   * Override the inline-styles of the TextField's underline element.
   */underlineStyle:_react.PropTypes.object,/**
   * The value of the text field.
   */value:_react.PropTypes.any}:void 0;exports.default=TextField;}).call(this,require('_process'));},{"../styles/transitions":25,"../utils/colorManipulator":32,"./EnhancedTextarea":8,"./TextFieldHint":10,"./TextFieldLabel":11,"./TextFieldUnderline":12,"_process":3,"babel-runtime/core-js/object/get-prototype-of":350,"babel-runtime/helpers/classCallCheck":355,"babel-runtime/helpers/createClass":356,"babel-runtime/helpers/extends":357,"babel-runtime/helpers/inherits":358,"babel-runtime/helpers/objectWithoutProperties":359,"babel-runtime/helpers/possibleConstructorReturn":360,"react":225,"react-dom":78,"recompose/shallowEqual":40,"simple-assign":2,"warning":343}],10:[function(require,module,exports){(function(process){'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _simpleAssign=require('simple-assign');var _simpleAssign2=_interopRequireDefault(_simpleAssign);var _react=require('react');var _react2=_interopRequireDefault(_react);var _transitions=require('../styles/transitions');var _transitions2=_interopRequireDefault(_transitions);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function getStyles(props){var hintColor=props.muiTheme.textField.hintColor;var show=props.show;return{root:{position:'absolute',opacity:show?1:0,color:hintColor,transition:_transitions2.default.easeOut(),bottom:12}};}var TextFieldHint=function TextFieldHint(props){var prepareStyles=props.muiTheme.prepareStyles;var style=props.style;var text=props.text;var styles=getStyles(props);return _react2.default.createElement('div',{style:prepareStyles((0,_simpleAssign2.default)(styles.root,style))},text);};process.env.NODE_ENV!=="production"?TextFieldHint.propTypes={/**
   * @ignore
   * The material-ui theme applied to this component.
   */muiTheme:_react.PropTypes.object.isRequired,/**
   * True if the hint text should be visible.
   */show:_react.PropTypes.bool,/**
   * Override the inline-styles of the root element.
   */style:_react.PropTypes.object,/**
   * The hint text displayed.
   */text:_react.PropTypes.node}:void 0;TextFieldHint.defaultProps={show:true};exports.default=TextFieldHint;}).call(this,require('_process'));},{"../styles/transitions":25,"_process":3,"react":225,"simple-assign":2}],11:[function(require,module,exports){(function(process){'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _simpleAssign=require('simple-assign');var _simpleAssign2=_interopRequireDefault(_simpleAssign);var _react=require('react');var _react2=_interopRequireDefault(_react);var _transitions=require('../styles/transitions');var _transitions2=_interopRequireDefault(_transitions);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function getStyles(props){var defaultStyles={position:'absolute',lineHeight:'22px',top:38,transition:_transitions2.default.easeOut(),zIndex:1,// Needed to display label above Chrome's autocomplete field background
cursor:props.disabled?'not-allowed':'text',transform:'scale(1) translate(0, 0)',transformOrigin:'left top',pointerEvents:'auto',userSelect:'none'};var shrinkStyles=props.shrink?(0,_simpleAssign2.default)({transform:'scale(0.75) translate(0, -28px)',pointerEvents:'none'},props.shrinkStyle):null;return{root:(0,_simpleAssign2.default)(defaultStyles,props.style,shrinkStyles)};}var TextFieldLabel=function TextFieldLabel(props){var muiTheme=props.muiTheme;var className=props.className;var children=props.children;var htmlFor=props.htmlFor;var onTouchTap=props.onTouchTap;var prepareStyles=muiTheme.prepareStyles;var styles=getStyles(props);return _react2.default.createElement('label',{className:className,style:prepareStyles(styles.root),htmlFor:htmlFor,onTouchTap:onTouchTap},children);};process.env.NODE_ENV!=="production"?TextFieldLabel.propTypes={/**
   * The label contents.
   */children:_react.PropTypes.node,/**
   * The css class name of the root element.
   */className:_react.PropTypes.string,/**
   * Disables the label if set to true.
   */disabled:_react.PropTypes.bool,/**
   * The id of the target element that this label should refer to.
   */htmlFor:_react.PropTypes.string,/**
   * @ignore
   * The material-ui theme applied to this component.
   */muiTheme:_react.PropTypes.object.isRequired,/**
   * Callback function for when the label is selected via a touch tap.
   */onTouchTap:_react.PropTypes.func,/**
   * True if the floating label should shrink.
   */shrink:_react.PropTypes.bool,/**
   * Override the inline-styles of the root element when focused.
   */shrinkStyle:_react.PropTypes.object,/**
   * Override the inline-styles of the root element.
   */style:_react.PropTypes.object}:void 0;TextFieldLabel.defaultProps={disabled:false,shrink:false};exports.default=TextFieldLabel;}).call(this,require('_process'));},{"../styles/transitions":25,"_process":3,"react":225,"simple-assign":2}],12:[function(require,module,exports){(function(process){'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _simpleAssign=require('simple-assign');var _simpleAssign2=_interopRequireDefault(_simpleAssign);var _react=require('react');var _react2=_interopRequireDefault(_react);var _transitions=require('../styles/transitions');var _transitions2=_interopRequireDefault(_transitions);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var propTypes={/**
   * True if the parent `TextField` is disabled.
   */disabled:_react.PropTypes.bool,/**
   * Override the inline-styles of the underline when parent `TextField` is disabled.
   */disabledStyle:_react.PropTypes.object,/**
   * True if the parent `TextField` has an error.
   */error:_react.PropTypes.bool,/**
   * Override the inline-styles of the underline when parent `TextField` has an error.
   */errorStyle:_react.PropTypes.object,/**
   * True if the parent `TextField` is focused.
   */focus:_react.PropTypes.bool,/**
   * Override the inline-styles of the underline when parent `TextField` is focused.
   */focusStyle:_react.PropTypes.object,/**
   * @ignore
   * The material-ui theme applied to this component.
   */muiTheme:_react.PropTypes.object.isRequired,/**
   * Override the inline-styles of the root element.
   */style:_react.PropTypes.object};var defaultProps={disabled:false,disabledStyle:{},error:false,errorStyle:{},focus:false,focusStyle:{},style:{}};var TextFieldUnderline=function TextFieldUnderline(props){var disabled=props.disabled;var disabledStyle=props.disabledStyle;var error=props.error;var errorStyle=props.errorStyle;var focus=props.focus;var focusStyle=props.focusStyle;var muiTheme=props.muiTheme;var style=props.style;var errorStyleColor=errorStyle.color;var prepareStyles=muiTheme.prepareStyles;var _muiTheme$textField=muiTheme.textField;var borderColor=_muiTheme$textField.borderColor;var disabledTextColor=_muiTheme$textField.disabledTextColor;var errorColor=_muiTheme$textField.errorColor;var focusColor=_muiTheme$textField.focusColor;var styles={root:{border:'none',borderBottom:'solid 1px',borderColor:borderColor,bottom:8,boxSizing:'content-box',margin:0,position:'absolute',width:'100%'},disabled:{borderBottom:'dotted 2px',borderColor:disabledTextColor,cursor:'not-allowed'},focus:{borderBottom:'solid 2px',borderColor:focusColor,transform:'scaleX(0)',transition:_transitions2.default.easeOut()},error:{borderColor:errorStyleColor?errorStyleColor:errorColor,transform:'scaleX(1)'}};var underline=(0,_simpleAssign2.default)({},styles.root,style);var focusedUnderline=(0,_simpleAssign2.default)({},underline,styles.focus,focusStyle);if(disabled)underline=(0,_simpleAssign2.default)({},underline,styles.disabled,disabledStyle);if(focus)focusedUnderline=(0,_simpleAssign2.default)({},focusedUnderline,{transform:'scaleX(1)'});if(error)focusedUnderline=(0,_simpleAssign2.default)({},focusedUnderline,styles.error);return _react2.default.createElement('div',null,_react2.default.createElement('hr',{style:prepareStyles(underline)}),_react2.default.createElement('hr',{style:prepareStyles(focusedUnderline)}));};process.env.NODE_ENV!=="production"?TextFieldUnderline.propTypes=propTypes:void 0;TextFieldUnderline.defaultProps=defaultProps;exports.default=TextFieldUnderline;}).call(this,require('_process'));},{"../styles/transitions":25,"_process":3,"react":225,"simple-assign":2}],13:[function(require,module,exports){'use strict';Object.defineProperty(exports,"__esModule",{value:true});exports.default=undefined;var _TextField=require('./TextField');var _TextField2=_interopRequireDefault(_TextField);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}exports.default=_TextField2.default;},{"./TextField":9}],14:[function(require,module,exports){(function(process){'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _extends2=require('babel-runtime/helpers/extends');var _extends3=_interopRequireDefault(_extends2);var _objectWithoutProperties2=require('babel-runtime/helpers/objectWithoutProperties');var _objectWithoutProperties3=_interopRequireDefault(_objectWithoutProperties2);var _getPrototypeOf=require('babel-runtime/core-js/object/get-prototype-of');var _getPrototypeOf2=_interopRequireDefault(_getPrototypeOf);var _classCallCheck2=require('babel-runtime/helpers/classCallCheck');var _classCallCheck3=_interopRequireDefault(_classCallCheck2);var _createClass2=require('babel-runtime/helpers/createClass');var _createClass3=_interopRequireDefault(_createClass2);var _possibleConstructorReturn2=require('babel-runtime/helpers/possibleConstructorReturn');var _possibleConstructorReturn3=_interopRequireDefault(_possibleConstructorReturn2);var _inherits2=require('babel-runtime/helpers/inherits');var _inherits3=_interopRequireDefault(_inherits2);var _simpleAssign=require('simple-assign');var _simpleAssign2=_interopRequireDefault(_simpleAssign);var _react=require('react');var _react2=_interopRequireDefault(_react);var _reactDom=require('react-dom');var _reactDom2=_interopRequireDefault(_reactDom);var _shallowEqual=require('recompose/shallowEqual');var _shallowEqual2=_interopRequireDefault(_shallowEqual);var _autoPrefix=require('../utils/autoPrefix');var _autoPrefix2=_interopRequireDefault(_autoPrefix);var _transitions=require('../styles/transitions');var _transitions2=_interopRequireDefault(_transitions);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var CircleRipple=function(_Component){(0,_inherits3.default)(CircleRipple,_Component);function CircleRipple(){(0,_classCallCheck3.default)(this,CircleRipple);return(0,_possibleConstructorReturn3.default)(this,(CircleRipple.__proto__||(0,_getPrototypeOf2.default)(CircleRipple)).apply(this,arguments));}(0,_createClass3.default)(CircleRipple,[{key:'shouldComponentUpdate',value:function shouldComponentUpdate(nextProps){return!(0,_shallowEqual2.default)(this.props,nextProps);}},{key:'componentWillUnmount',value:function componentWillUnmount(){clearTimeout(this.enterTimer);clearTimeout(this.leaveTimer);}},{key:'componentWillAppear',value:function componentWillAppear(callback){this.initializeAnimation(callback);}},{key:'componentWillEnter',value:function componentWillEnter(callback){this.initializeAnimation(callback);}},{key:'componentDidAppear',value:function componentDidAppear(){this.animate();}},{key:'componentDidEnter',value:function componentDidEnter(){this.animate();}},{key:'componentWillLeave',value:function componentWillLeave(callback){var style=_reactDom2.default.findDOMNode(this).style;style.opacity=0;// If the animation is aborted, remove from the DOM immediately
var removeAfter=this.props.aborted?0:2000;this.enterTimer=setTimeout(callback,removeAfter);}},{key:'animate',value:function animate(){var style=_reactDom2.default.findDOMNode(this).style;var transitionValue=_transitions2.default.easeOut('2s','opacity')+', '+_transitions2.default.easeOut('1s','transform');_autoPrefix2.default.set(style,'transition',transitionValue);_autoPrefix2.default.set(style,'transform','scale(1)');}},{key:'initializeAnimation',value:function initializeAnimation(callback){var style=_reactDom2.default.findDOMNode(this).style;style.opacity=this.props.opacity;_autoPrefix2.default.set(style,'transform','scale(0)');this.leaveTimer=setTimeout(callback,0);}},{key:'render',value:function render(){var _props=this.props;var aborted=_props.aborted;var color=_props.color;var opacity=_props.opacity;var style=_props.style;var touchGenerated=_props.touchGenerated;var other=(0,_objectWithoutProperties3.default)(_props,['aborted','color','opacity','style','touchGenerated']);var prepareStyles=this.context.muiTheme.prepareStyles;var mergedStyles=(0,_simpleAssign2.default)({position:'absolute',top:0,left:0,height:'100%',width:'100%',borderRadius:'50%',backgroundColor:color},style);return _react2.default.createElement('div',(0,_extends3.default)({},other,{style:prepareStyles(mergedStyles)}));}}]);return CircleRipple;}(_react.Component);CircleRipple.defaultProps={opacity:0.1,aborted:false};CircleRipple.contextTypes={muiTheme:_react.PropTypes.object.isRequired};process.env.NODE_ENV!=="production"?CircleRipple.propTypes={aborted:_react.PropTypes.bool,color:_react.PropTypes.string,opacity:_react.PropTypes.number,style:_react.PropTypes.object,touchGenerated:_react.PropTypes.bool}:void 0;exports.default=CircleRipple;}).call(this,require('_process'));},{"../styles/transitions":25,"../utils/autoPrefix":28,"_process":3,"babel-runtime/core-js/object/get-prototype-of":350,"babel-runtime/helpers/classCallCheck":355,"babel-runtime/helpers/createClass":356,"babel-runtime/helpers/extends":357,"babel-runtime/helpers/inherits":358,"babel-runtime/helpers/objectWithoutProperties":359,"babel-runtime/helpers/possibleConstructorReturn":360,"react":225,"react-dom":78,"recompose/shallowEqual":40,"simple-assign":2}],15:[function(require,module,exports){(function(process){'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _extends2=require('babel-runtime/helpers/extends');var _extends3=_interopRequireDefault(_extends2);var _objectWithoutProperties2=require('babel-runtime/helpers/objectWithoutProperties');var _objectWithoutProperties3=_interopRequireDefault(_objectWithoutProperties2);var _getPrototypeOf=require('babel-runtime/core-js/object/get-prototype-of');var _getPrototypeOf2=_interopRequireDefault(_getPrototypeOf);var _classCallCheck2=require('babel-runtime/helpers/classCallCheck');var _classCallCheck3=_interopRequireDefault(_classCallCheck2);var _createClass2=require('babel-runtime/helpers/createClass');var _createClass3=_interopRequireDefault(_createClass2);var _possibleConstructorReturn2=require('babel-runtime/helpers/possibleConstructorReturn');var _possibleConstructorReturn3=_interopRequireDefault(_possibleConstructorReturn2);var _inherits2=require('babel-runtime/helpers/inherits');var _inherits3=_interopRequireDefault(_inherits2);var _simpleAssign=require('simple-assign');var _simpleAssign2=_interopRequireDefault(_simpleAssign);var _react=require('react');var _react2=_interopRequireDefault(_react);var _childUtils=require('../utils/childUtils');var _events=require('../utils/events');var _events2=_interopRequireDefault(_events);var _keycode=require('keycode');var _keycode2=_interopRequireDefault(_keycode);var _FocusRipple=require('./FocusRipple');var _FocusRipple2=_interopRequireDefault(_FocusRipple);var _TouchRipple=require('./TouchRipple');var _TouchRipple2=_interopRequireDefault(_TouchRipple);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var styleInjected=false;var listening=false;var tabPressed=false;function injectStyle(){if(!styleInjected){// Remove inner padding and border in Firefox 4+.
var style=document.createElement('style');style.innerHTML='\n      button::-moz-focus-inner,\n      input::-moz-focus-inner {\n        border: 0;\n        padding: 0;\n      }\n    ';document.body.appendChild(style);styleInjected=true;}}function listenForTabPresses(){if(!listening){_events2.default.on(window,'keydown',function(event){tabPressed=(0,_keycode2.default)(event)==='tab';});listening=true;}}var EnhancedButton=function(_Component){(0,_inherits3.default)(EnhancedButton,_Component);function EnhancedButton(){var _ref;var _temp,_this,_ret;(0,_classCallCheck3.default)(this,EnhancedButton);for(var _len=arguments.length,args=Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}return _ret=(_temp=(_this=(0,_possibleConstructorReturn3.default)(this,(_ref=EnhancedButton.__proto__||(0,_getPrototypeOf2.default)(EnhancedButton)).call.apply(_ref,[this].concat(args))),_this),_this.state={isKeyboardFocused:false},_this.handleKeyDown=function(event){if(!_this.props.disabled&&!_this.props.disableKeyboardFocus){if((0,_keycode2.default)(event)==='enter'&&_this.state.isKeyboardFocused){_this.handleTouchTap(event);}if((0,_keycode2.default)(event)==='esc'&&_this.state.isKeyboardFocused){_this.removeKeyboardFocus(event);}}_this.props.onKeyDown(event);},_this.handleKeyUp=function(event){if(!_this.props.disabled&&!_this.props.disableKeyboardFocus){if((0,_keycode2.default)(event)==='space'&&_this.state.isKeyboardFocused){_this.handleTouchTap(event);}}_this.props.onKeyUp(event);},_this.handleBlur=function(event){_this.cancelFocusTimeout();_this.removeKeyboardFocus(event);_this.props.onBlur(event);},_this.handleFocus=function(event){if(event)event.persist();if(!_this.props.disabled&&!_this.props.disableKeyboardFocus){// setTimeout is needed because the focus event fires first
// Wait so that we can capture if this was a keyboard focus
// or touch focus
_this.focusTimeout=setTimeout(function(){if(tabPressed){_this.setKeyboardFocus(event);tabPressed=false;}},150);_this.props.onFocus(event);}},_this.handleClick=function(event){if(!_this.props.disabled){tabPressed=false;_this.props.onClick(event);}},_this.handleTouchTap=function(event){_this.cancelFocusTimeout();if(!_this.props.disabled){tabPressed=false;_this.removeKeyboardFocus(event);_this.props.onTouchTap(event);}},_temp),(0,_possibleConstructorReturn3.default)(_this,_ret);}(0,_createClass3.default)(EnhancedButton,[{key:'componentWillMount',value:function componentWillMount(){var _props=this.props;var disabled=_props.disabled;var disableKeyboardFocus=_props.disableKeyboardFocus;var keyboardFocused=_props.keyboardFocused;if(!disabled&&keyboardFocused&&!disableKeyboardFocus){this.setState({isKeyboardFocused:true});}}},{key:'componentDidMount',value:function componentDidMount(){injectStyle();listenForTabPresses();if(this.state.isKeyboardFocused){this.refs.enhancedButton.focus();this.props.onKeyboardFocus(null,true);}}},{key:'componentWillReceiveProps',value:function componentWillReceiveProps(nextProps){if((nextProps.disabled||nextProps.disableKeyboardFocus)&&this.state.isKeyboardFocused){this.setState({isKeyboardFocused:false});if(nextProps.onKeyboardFocus){nextProps.onKeyboardFocus(null,false);}}}},{key:'componentWillUnmount',value:function componentWillUnmount(){clearTimeout(this.focusTimeout);}},{key:'isKeyboardFocused',value:function isKeyboardFocused(){return this.state.isKeyboardFocused;}},{key:'removeKeyboardFocus',value:function removeKeyboardFocus(event){if(this.state.isKeyboardFocused){this.setState({isKeyboardFocused:false});this.props.onKeyboardFocus(event,false);}}},{key:'setKeyboardFocus',value:function setKeyboardFocus(event){if(!this.state.isKeyboardFocused){this.setState({isKeyboardFocused:true});this.props.onKeyboardFocus(event,true);}}},{key:'cancelFocusTimeout',value:function cancelFocusTimeout(){if(this.focusTimeout){clearTimeout(this.focusTimeout);this.focusTimeout=null;}}},{key:'createButtonChildren',value:function createButtonChildren(){var _props2=this.props;var centerRipple=_props2.centerRipple;var children=_props2.children;var disabled=_props2.disabled;var disableFocusRipple=_props2.disableFocusRipple;var disableKeyboardFocus=_props2.disableKeyboardFocus;var disableTouchRipple=_props2.disableTouchRipple;var focusRippleColor=_props2.focusRippleColor;var focusRippleOpacity=_props2.focusRippleOpacity;var touchRippleColor=_props2.touchRippleColor;var touchRippleOpacity=_props2.touchRippleOpacity;var isKeyboardFocused=this.state.isKeyboardFocused;// Focus Ripple
var focusRipple=isKeyboardFocused&&!disabled&&!disableFocusRipple&&!disableKeyboardFocus?_react2.default.createElement(_FocusRipple2.default,{color:focusRippleColor,opacity:focusRippleOpacity,show:isKeyboardFocused}):undefined;// Touch Ripple
var touchRipple=!disabled&&!disableTouchRipple?_react2.default.createElement(_TouchRipple2.default,{centerRipple:centerRipple,color:touchRippleColor,opacity:touchRippleOpacity},children):undefined;return(0,_childUtils.createChildFragment)({focusRipple:focusRipple,touchRipple:touchRipple,children:touchRipple?undefined:children});}},{key:'render',value:function render(){var _props3=this.props;var centerRipple=_props3.centerRipple;var children=_props3.children;var containerElement=_props3.containerElement;var disabled=_props3.disabled;var disableFocusRipple=_props3.disableFocusRipple;var disableKeyboardFocus=_props3.disableKeyboardFocus;var disableTouchRipple=_props3.disableTouchRipple;var focusRippleColor=_props3.focusRippleColor;var focusRippleOpacity=_props3.focusRippleOpacity;var href=_props3.href;var keyboardFocused=_props3.keyboardFocused;var touchRippleColor=_props3.touchRippleColor;var touchRippleOpacity=_props3.touchRippleOpacity;var onBlur=_props3.onBlur;var onClick=_props3.onClick;var onFocus=_props3.onFocus;var onKeyUp=_props3.onKeyUp;var onKeyDown=_props3.onKeyDown;var onKeyboardFocus=_props3.onKeyboardFocus;var onTouchTap=_props3.onTouchTap;var style=_props3.style;var tabIndex=_props3.tabIndex;var type=_props3.type;var other=(0,_objectWithoutProperties3.default)(_props3,['centerRipple','children','containerElement','disabled','disableFocusRipple','disableKeyboardFocus','disableTouchRipple','focusRippleColor','focusRippleOpacity','href','keyboardFocused','touchRippleColor','touchRippleOpacity','onBlur','onClick','onFocus','onKeyUp','onKeyDown','onKeyboardFocus','onTouchTap','style','tabIndex','type']);var _context$muiTheme=this.context.muiTheme;var prepareStyles=_context$muiTheme.prepareStyles;var enhancedButton=_context$muiTheme.enhancedButton;var mergedStyles=(0,_simpleAssign2.default)({border:10,boxSizing:'border-box',display:'inline-block',fontFamily:this.context.muiTheme.baseTheme.fontFamily,WebkitTapHighlightColor:enhancedButton.tapHighlightColor,// Remove mobile color flashing (deprecated)
cursor:disabled?'default':'pointer',textDecoration:'none',margin:0,padding:0,outline:'none',fontSize:'inherit',fontWeight:'inherit',/**
         * This is needed so that ripples do not bleed
         * past border radius.
         * See: http://stackoverflow.com/questions/17298739/
         * css-overflow-hidden-not-working-in-chrome-when-parent-has-border-radius-and-chil
         */transform:disableTouchRipple&&disableFocusRipple?null:'translate(0, 0)',verticalAlign:href?'middle':null},style);// Passing both background:none & backgroundColor can break due to object iteration order
if(!mergedStyles.backgroundColor&&!mergedStyles.background){mergedStyles.background='none';}if(disabled&&href){return _react2.default.createElement('span',(0,_extends3.default)({},other,{style:mergedStyles}),children);}var buttonProps=(0,_extends3.default)({},other,{style:prepareStyles(mergedStyles),ref:'enhancedButton',disabled:disabled,href:href,onBlur:this.handleBlur,onClick:this.handleClick,onFocus:this.handleFocus,onKeyUp:this.handleKeyUp,onKeyDown:this.handleKeyDown,onTouchTap:this.handleTouchTap,tabIndex:tabIndex,type:type});var buttonChildren=this.createButtonChildren();if(_react2.default.isValidElement(containerElement)){return _react2.default.cloneElement(containerElement,buttonProps,buttonChildren);}return _react2.default.createElement(href?'a':containerElement,buttonProps,buttonChildren);}}]);return EnhancedButton;}(_react.Component);EnhancedButton.defaultProps={containerElement:'button',onBlur:function onBlur(){},onClick:function onClick(){},onFocus:function onFocus(){},onKeyDown:function onKeyDown(){},onKeyUp:function onKeyUp(){},onKeyboardFocus:function onKeyboardFocus(){},onMouseDown:function onMouseDown(){},onMouseEnter:function onMouseEnter(){},onMouseLeave:function onMouseLeave(){},onMouseUp:function onMouseUp(){},onTouchEnd:function onTouchEnd(){},onTouchStart:function onTouchStart(){},onTouchTap:function onTouchTap(){},tabIndex:0,type:'button'};EnhancedButton.contextTypes={muiTheme:_react.PropTypes.object.isRequired};process.env.NODE_ENV!=="production"?EnhancedButton.propTypes={centerRipple:_react.PropTypes.bool,children:_react.PropTypes.node,containerElement:_react.PropTypes.oneOfType([_react.PropTypes.string,_react.PropTypes.element]),disableFocusRipple:_react.PropTypes.bool,disableKeyboardFocus:_react.PropTypes.bool,disableTouchRipple:_react.PropTypes.bool,disabled:_react.PropTypes.bool,focusRippleColor:_react.PropTypes.string,focusRippleOpacity:_react.PropTypes.number,href:_react.PropTypes.string,keyboardFocused:_react.PropTypes.bool,onBlur:_react.PropTypes.func,onClick:_react.PropTypes.func,onFocus:_react.PropTypes.func,onKeyDown:_react.PropTypes.func,onKeyUp:_react.PropTypes.func,onKeyboardFocus:_react.PropTypes.func,onMouseDown:_react.PropTypes.func,onMouseEnter:_react.PropTypes.func,onMouseLeave:_react.PropTypes.func,onMouseUp:_react.PropTypes.func,onTouchEnd:_react.PropTypes.func,onTouchStart:_react.PropTypes.func,onTouchTap:_react.PropTypes.func,style:_react.PropTypes.object,tabIndex:_react.PropTypes.number,touchRippleColor:_react.PropTypes.string,touchRippleOpacity:_react.PropTypes.number,type:_react.PropTypes.string}:void 0;exports.default=EnhancedButton;}).call(this,require('_process'));},{"../utils/childUtils":31,"../utils/events":34,"./FocusRipple":16,"./TouchRipple":19,"_process":3,"babel-runtime/core-js/object/get-prototype-of":350,"babel-runtime/helpers/classCallCheck":355,"babel-runtime/helpers/createClass":356,"babel-runtime/helpers/extends":357,"babel-runtime/helpers/inherits":358,"babel-runtime/helpers/objectWithoutProperties":359,"babel-runtime/helpers/possibleConstructorReturn":360,"keycode":254,"react":225,"simple-assign":2}],16:[function(require,module,exports){(function(process){'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _getPrototypeOf=require('babel-runtime/core-js/object/get-prototype-of');var _getPrototypeOf2=_interopRequireDefault(_getPrototypeOf);var _classCallCheck2=require('babel-runtime/helpers/classCallCheck');var _classCallCheck3=_interopRequireDefault(_classCallCheck2);var _createClass2=require('babel-runtime/helpers/createClass');var _createClass3=_interopRequireDefault(_createClass2);var _possibleConstructorReturn2=require('babel-runtime/helpers/possibleConstructorReturn');var _possibleConstructorReturn3=_interopRequireDefault(_possibleConstructorReturn2);var _inherits2=require('babel-runtime/helpers/inherits');var _inherits3=_interopRequireDefault(_inherits2);var _simpleAssign=require('simple-assign');var _simpleAssign2=_interopRequireDefault(_simpleAssign);var _react=require('react');var _react2=_interopRequireDefault(_react);var _reactDom=require('react-dom');var _reactDom2=_interopRequireDefault(_reactDom);var _shallowEqual=require('recompose/shallowEqual');var _shallowEqual2=_interopRequireDefault(_shallowEqual);var _autoPrefix=require('../utils/autoPrefix');var _autoPrefix2=_interopRequireDefault(_autoPrefix);var _transitions=require('../styles/transitions');var _transitions2=_interopRequireDefault(_transitions);var _ScaleIn=require('./ScaleIn');var _ScaleIn2=_interopRequireDefault(_ScaleIn);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var pulsateDuration=750;var FocusRipple=function(_Component){(0,_inherits3.default)(FocusRipple,_Component);function FocusRipple(){var _ref;var _temp,_this,_ret;(0,_classCallCheck3.default)(this,FocusRipple);for(var _len=arguments.length,args=Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}return _ret=(_temp=(_this=(0,_possibleConstructorReturn3.default)(this,(_ref=FocusRipple.__proto__||(0,_getPrototypeOf2.default)(FocusRipple)).call.apply(_ref,[this].concat(args))),_this),_this.pulsate=function(){var innerCircle=_reactDom2.default.findDOMNode(_this.refs.innerCircle);if(!innerCircle)return;var startScale='scale(1)';var endScale='scale(0.85)';var currentScale=innerCircle.style.transform||startScale;var nextScale=currentScale===startScale?endScale:startScale;_autoPrefix2.default.set(innerCircle.style,'transform',nextScale);_this.timeout=setTimeout(_this.pulsate,pulsateDuration);},_temp),(0,_possibleConstructorReturn3.default)(_this,_ret);}(0,_createClass3.default)(FocusRipple,[{key:'componentDidMount',value:function componentDidMount(){if(this.props.show){this.setRippleSize();this.pulsate();}}},{key:'shouldComponentUpdate',value:function shouldComponentUpdate(nextProps,nextState){return!(0,_shallowEqual2.default)(this.props,nextProps)||!(0,_shallowEqual2.default)(this.state,nextState);}},{key:'componentDidUpdate',value:function componentDidUpdate(){if(this.props.show){this.setRippleSize();this.pulsate();}else{if(this.timeout)clearTimeout(this.timeout);}}},{key:'componentWillUnmount',value:function componentWillUnmount(){clearTimeout(this.timeout);}},{key:'getRippleElement',value:function getRippleElement(props){var color=props.color;var innerStyle=props.innerStyle;var opacity=props.opacity;var _context$muiTheme=this.context.muiTheme;var prepareStyles=_context$muiTheme.prepareStyles;var ripple=_context$muiTheme.ripple;var innerStyles=(0,_simpleAssign2.default)({position:'absolute',height:'100%',width:'100%',borderRadius:'50%',opacity:opacity?opacity:0.16,backgroundColor:color||ripple.color,transition:_transitions2.default.easeOut(pulsateDuration+'ms','transform',null,_transitions2.default.easeInOutFunction)},innerStyle);return _react2.default.createElement('div',{ref:'innerCircle',style:prepareStyles((0,_simpleAssign2.default)({},innerStyles))});}},{key:'setRippleSize',value:function setRippleSize(){var el=_reactDom2.default.findDOMNode(this.refs.innerCircle);var height=el.offsetHeight;var width=el.offsetWidth;var size=Math.max(height,width);var oldTop=0;// For browsers that don't support endsWith()
if(el.style.top.indexOf('px',el.style.top.length-2)!==-1){oldTop=parseInt(el.style.top);}el.style.height=size+'px';el.style.top=height/2-size/2+oldTop+'px';}},{key:'render',value:function render(){var _props=this.props;var show=_props.show;var style=_props.style;var mergedRootStyles=(0,_simpleAssign2.default)({height:'100%',width:'100%',position:'absolute',top:0,left:0},style);var ripple=show?this.getRippleElement(this.props):null;return _react2.default.createElement(_ScaleIn2.default,{maxScale:0.85,style:mergedRootStyles},ripple);}}]);return FocusRipple;}(_react.Component);FocusRipple.contextTypes={muiTheme:_react.PropTypes.object.isRequired};process.env.NODE_ENV!=="production"?FocusRipple.propTypes={color:_react.PropTypes.string,innerStyle:_react.PropTypes.object,opacity:_react.PropTypes.number,show:_react.PropTypes.bool,style:_react.PropTypes.object}:void 0;exports.default=FocusRipple;}).call(this,require('_process'));},{"../styles/transitions":25,"../utils/autoPrefix":28,"./ScaleIn":17,"_process":3,"babel-runtime/core-js/object/get-prototype-of":350,"babel-runtime/helpers/classCallCheck":355,"babel-runtime/helpers/createClass":356,"babel-runtime/helpers/inherits":358,"babel-runtime/helpers/possibleConstructorReturn":360,"react":225,"react-dom":78,"recompose/shallowEqual":40,"simple-assign":2}],17:[function(require,module,exports){(function(process){'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _extends2=require('babel-runtime/helpers/extends');var _extends3=_interopRequireDefault(_extends2);var _objectWithoutProperties2=require('babel-runtime/helpers/objectWithoutProperties');var _objectWithoutProperties3=_interopRequireDefault(_objectWithoutProperties2);var _getPrototypeOf=require('babel-runtime/core-js/object/get-prototype-of');var _getPrototypeOf2=_interopRequireDefault(_getPrototypeOf);var _classCallCheck2=require('babel-runtime/helpers/classCallCheck');var _classCallCheck3=_interopRequireDefault(_classCallCheck2);var _createClass2=require('babel-runtime/helpers/createClass');var _createClass3=_interopRequireDefault(_createClass2);var _possibleConstructorReturn2=require('babel-runtime/helpers/possibleConstructorReturn');var _possibleConstructorReturn3=_interopRequireDefault(_possibleConstructorReturn2);var _inherits2=require('babel-runtime/helpers/inherits');var _inherits3=_interopRequireDefault(_inherits2);var _simpleAssign=require('simple-assign');var _simpleAssign2=_interopRequireDefault(_simpleAssign);var _react=require('react');var _react2=_interopRequireDefault(_react);var _reactAddonsTransitionGroup=require('react-addons-transition-group');var _reactAddonsTransitionGroup2=_interopRequireDefault(_reactAddonsTransitionGroup);var _ScaleInChild=require('./ScaleInChild');var _ScaleInChild2=_interopRequireDefault(_ScaleInChild);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var ScaleIn=function(_Component){(0,_inherits3.default)(ScaleIn,_Component);function ScaleIn(){(0,_classCallCheck3.default)(this,ScaleIn);return(0,_possibleConstructorReturn3.default)(this,(ScaleIn.__proto__||(0,_getPrototypeOf2.default)(ScaleIn)).apply(this,arguments));}(0,_createClass3.default)(ScaleIn,[{key:'render',value:function render(){var _props=this.props;var children=_props.children;var childStyle=_props.childStyle;var enterDelay=_props.enterDelay;var maxScale=_props.maxScale;var minScale=_props.minScale;var style=_props.style;var other=(0,_objectWithoutProperties3.default)(_props,['children','childStyle','enterDelay','maxScale','minScale','style']);var prepareStyles=this.context.muiTheme.prepareStyles;var mergedRootStyles=(0,_simpleAssign2.default)({},{position:'relative',overflow:'hidden',height:'100%'},style);var newChildren=_react2.default.Children.map(children,function(child){return _react2.default.createElement(_ScaleInChild2.default,{key:child.key,enterDelay:enterDelay,maxScale:maxScale,minScale:minScale,style:childStyle},child);});return _react2.default.createElement(_reactAddonsTransitionGroup2.default,(0,_extends3.default)({},other,{style:prepareStyles(mergedRootStyles),component:'div'}),newChildren);}}]);return ScaleIn;}(_react.Component);ScaleIn.defaultProps={enterDelay:0};ScaleIn.contextTypes={muiTheme:_react.PropTypes.object.isRequired};process.env.NODE_ENV!=="production"?ScaleIn.propTypes={childStyle:_react.PropTypes.object,children:_react.PropTypes.node,enterDelay:_react.PropTypes.number,maxScale:_react.PropTypes.number,minScale:_react.PropTypes.number,/**
   * Override the inline-styles of the root element.
   */style:_react.PropTypes.object}:void 0;exports.default=ScaleIn;}).call(this,require('_process'));},{"./ScaleInChild":18,"_process":3,"babel-runtime/core-js/object/get-prototype-of":350,"babel-runtime/helpers/classCallCheck":355,"babel-runtime/helpers/createClass":356,"babel-runtime/helpers/extends":357,"babel-runtime/helpers/inherits":358,"babel-runtime/helpers/objectWithoutProperties":359,"babel-runtime/helpers/possibleConstructorReturn":360,"react":225,"react-addons-transition-group":77,"simple-assign":2}],18:[function(require,module,exports){(function(process){'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _extends2=require('babel-runtime/helpers/extends');var _extends3=_interopRequireDefault(_extends2);var _objectWithoutProperties2=require('babel-runtime/helpers/objectWithoutProperties');var _objectWithoutProperties3=_interopRequireDefault(_objectWithoutProperties2);var _getPrototypeOf=require('babel-runtime/core-js/object/get-prototype-of');var _getPrototypeOf2=_interopRequireDefault(_getPrototypeOf);var _classCallCheck2=require('babel-runtime/helpers/classCallCheck');var _classCallCheck3=_interopRequireDefault(_classCallCheck2);var _createClass2=require('babel-runtime/helpers/createClass');var _createClass3=_interopRequireDefault(_createClass2);var _possibleConstructorReturn2=require('babel-runtime/helpers/possibleConstructorReturn');var _possibleConstructorReturn3=_interopRequireDefault(_possibleConstructorReturn2);var _inherits2=require('babel-runtime/helpers/inherits');var _inherits3=_interopRequireDefault(_inherits2);var _simpleAssign=require('simple-assign');var _simpleAssign2=_interopRequireDefault(_simpleAssign);var _react=require('react');var _react2=_interopRequireDefault(_react);var _reactDom=require('react-dom');var _reactDom2=_interopRequireDefault(_reactDom);var _autoPrefix=require('../utils/autoPrefix');var _autoPrefix2=_interopRequireDefault(_autoPrefix);var _transitions=require('../styles/transitions');var _transitions2=_interopRequireDefault(_transitions);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var ScaleInChild=function(_Component){(0,_inherits3.default)(ScaleInChild,_Component);function ScaleInChild(){(0,_classCallCheck3.default)(this,ScaleInChild);return(0,_possibleConstructorReturn3.default)(this,(ScaleInChild.__proto__||(0,_getPrototypeOf2.default)(ScaleInChild)).apply(this,arguments));}(0,_createClass3.default)(ScaleInChild,[{key:'componentWillUnmount',value:function componentWillUnmount(){clearTimeout(this.enterTimer);clearTimeout(this.leaveTimer);}},{key:'componentWillAppear',value:function componentWillAppear(callback){this.initializeAnimation(callback);}},{key:'componentWillEnter',value:function componentWillEnter(callback){this.initializeAnimation(callback);}},{key:'componentDidAppear',value:function componentDidAppear(){this.animate();}},{key:'componentDidEnter',value:function componentDidEnter(){this.animate();}},{key:'componentWillLeave',value:function componentWillLeave(callback){var style=_reactDom2.default.findDOMNode(this).style;style.opacity='0';_autoPrefix2.default.set(style,'transform','scale('+this.props.minScale+')');this.leaveTimer=setTimeout(callback,450);}},{key:'animate',value:function animate(){var style=_reactDom2.default.findDOMNode(this).style;style.opacity='1';_autoPrefix2.default.set(style,'transform','scale('+this.props.maxScale+')');}},{key:'initializeAnimation',value:function initializeAnimation(callback){var style=_reactDom2.default.findDOMNode(this).style;style.opacity='0';_autoPrefix2.default.set(style,'transform','scale(0)');this.enterTimer=setTimeout(callback,this.props.enterDelay);}},{key:'render',value:function render(){var _props=this.props;var children=_props.children;var enterDelay=_props.enterDelay;var maxScale=_props.maxScale;var minScale=_props.minScale;var style=_props.style;var other=(0,_objectWithoutProperties3.default)(_props,['children','enterDelay','maxScale','minScale','style']);var prepareStyles=this.context.muiTheme.prepareStyles;var mergedRootStyles=(0,_simpleAssign2.default)({},{position:'absolute',height:'100%',width:'100%',top:0,left:0,transition:_transitions2.default.easeOut(null,['transform','opacity'])},style);return _react2.default.createElement('div',(0,_extends3.default)({},other,{style:prepareStyles(mergedRootStyles)}),children);}}]);return ScaleInChild;}(_react.Component);ScaleInChild.defaultProps={enterDelay:0,maxScale:1,minScale:0};ScaleInChild.contextTypes={muiTheme:_react.PropTypes.object.isRequired};process.env.NODE_ENV!=="production"?ScaleInChild.propTypes={children:_react.PropTypes.node,enterDelay:_react.PropTypes.number,maxScale:_react.PropTypes.number,minScale:_react.PropTypes.number,style:_react.PropTypes.object}:void 0;exports.default=ScaleInChild;}).call(this,require('_process'));},{"../styles/transitions":25,"../utils/autoPrefix":28,"_process":3,"babel-runtime/core-js/object/get-prototype-of":350,"babel-runtime/helpers/classCallCheck":355,"babel-runtime/helpers/createClass":356,"babel-runtime/helpers/extends":357,"babel-runtime/helpers/inherits":358,"babel-runtime/helpers/objectWithoutProperties":359,"babel-runtime/helpers/possibleConstructorReturn":360,"react":225,"react-dom":78,"simple-assign":2}],19:[function(require,module,exports){(function(process){'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _toConsumableArray2=require('babel-runtime/helpers/toConsumableArray');var _toConsumableArray3=_interopRequireDefault(_toConsumableArray2);var _getPrototypeOf=require('babel-runtime/core-js/object/get-prototype-of');var _getPrototypeOf2=_interopRequireDefault(_getPrototypeOf);var _classCallCheck2=require('babel-runtime/helpers/classCallCheck');var _classCallCheck3=_interopRequireDefault(_classCallCheck2);var _createClass2=require('babel-runtime/helpers/createClass');var _createClass3=_interopRequireDefault(_createClass2);var _possibleConstructorReturn2=require('babel-runtime/helpers/possibleConstructorReturn');var _possibleConstructorReturn3=_interopRequireDefault(_possibleConstructorReturn2);var _inherits2=require('babel-runtime/helpers/inherits');var _inherits3=_interopRequireDefault(_inherits2);var _toArray2=require('babel-runtime/helpers/toArray');var _toArray3=_interopRequireDefault(_toArray2);var _simpleAssign=require('simple-assign');var _simpleAssign2=_interopRequireDefault(_simpleAssign);var _react=require('react');var _react2=_interopRequireDefault(_react);var _reactDom=require('react-dom');var _reactDom2=_interopRequireDefault(_reactDom);var _reactAddonsTransitionGroup=require('react-addons-transition-group');var _reactAddonsTransitionGroup2=_interopRequireDefault(_reactAddonsTransitionGroup);var _dom=require('../utils/dom');var _dom2=_interopRequireDefault(_dom);var _CircleRipple=require('./CircleRipple');var _CircleRipple2=_interopRequireDefault(_CircleRipple);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}// Remove the first element of the array
var shift=function shift(_ref){var _ref2=(0,_toArray3.default)(_ref);var newArray=_ref2.slice(1);return newArray;};var TouchRipple=function(_Component){(0,_inherits3.default)(TouchRipple,_Component);function TouchRipple(props,context){(0,_classCallCheck3.default)(this,TouchRipple);// Touch start produces a mouse down event for compat reasons. To avoid
// showing ripples twice we skip showing a ripple for the first mouse down
// after a touch start. Note we don't store ignoreNextMouseDown in this.state
// to avoid re-rendering when we change it.
var _this=(0,_possibleConstructorReturn3.default)(this,(TouchRipple.__proto__||(0,_getPrototypeOf2.default)(TouchRipple)).call(this,props,context));_this.handleMouseDown=function(event){// only listen to left clicks
if(event.button===0){_this.start(event,false);}};_this.handleMouseUp=function(){_this.end();};_this.handleMouseLeave=function(){_this.end();};_this.handleTouchStart=function(event){event.stopPropagation();// If the user is swiping (not just tapping), save the position so we can
// abort ripples if the user appears to be scrolling.
if(_this.props.abortOnScroll&&event.touches){_this.startListeningForScrollAbort(event);_this.startTime=Date.now();}_this.start(event,true);};_this.handleTouchEnd=function(){_this.end();};_this.handleTouchMove=function(event){// Stop trying to abort if we're already 300ms into the animation
var timeSinceStart=Math.abs(Date.now()-_this.startTime);if(timeSinceStart>300){_this.stopListeningForScrollAbort();return;}// If the user is scrolling...
var deltaY=Math.abs(event.touches[0].clientY-_this.firstTouchY);var deltaX=Math.abs(event.touches[0].clientX-_this.firstTouchX);// Call it a scroll after an arbitrary 6px (feels reasonable in testing)
if(deltaY>6||deltaX>6){var currentRipples=_this.state.ripples;var ripple=currentRipples[0];// This clone will replace the ripple in ReactTransitionGroup with a
// version that will disappear immediately when removed from the DOM
var abortedRipple=_react2.default.cloneElement(ripple,{aborted:true});// Remove the old ripple and replace it with the new updated one
currentRipples=shift(currentRipples);currentRipples=[].concat((0,_toConsumableArray3.default)(currentRipples),[abortedRipple]);_this.setState({ripples:currentRipples},function(){// Call end after we've set the ripple to abort otherwise the setState
// in end() merges with this and the ripple abort fails
_this.end();});}};_this.ignoreNextMouseDown=false;_this.state={// This prop allows us to only render the ReactTransitionGroup
// on the first click of the component, making the inital render faster.
hasRipples:false,nextKey:0,ripples:[]};return _this;}(0,_createClass3.default)(TouchRipple,[{key:'start',value:function start(event,isRippleTouchGenerated){var theme=this.context.muiTheme.ripple;if(this.ignoreNextMouseDown&&!isRippleTouchGenerated){this.ignoreNextMouseDown=false;return;}var ripples=this.state.ripples;// Add a ripple to the ripples array
ripples=[].concat((0,_toConsumableArray3.default)(ripples),[_react2.default.createElement(_CircleRipple2.default,{key:this.state.nextKey,style:!this.props.centerRipple?this.getRippleStyle(event):{},color:this.props.color||theme.color,opacity:this.props.opacity,touchGenerated:isRippleTouchGenerated})]);this.ignoreNextMouseDown=isRippleTouchGenerated;this.setState({hasRipples:true,nextKey:this.state.nextKey+1,ripples:ripples});}},{key:'end',value:function end(){var currentRipples=this.state.ripples;this.setState({ripples:shift(currentRipples)});if(this.props.abortOnScroll){this.stopListeningForScrollAbort();}}// Check if the user seems to be scrolling and abort the animation if so
},{key:'startListeningForScrollAbort',value:function startListeningForScrollAbort(event){this.firstTouchY=event.touches[0].clientY;this.firstTouchX=event.touches[0].clientX;// Note that when scolling Chrome throttles this event to every 200ms
// Also note we don't listen for scroll events directly as there's no general
// way to cover cases like scrolling within containers on the page
document.body.addEventListener('touchmove',this.handleTouchMove);}},{key:'stopListeningForScrollAbort',value:function stopListeningForScrollAbort(){document.body.removeEventListener('touchmove',this.handleTouchMove);}},{key:'getRippleStyle',value:function getRippleStyle(event){var el=_reactDom2.default.findDOMNode(this);var elHeight=el.offsetHeight;var elWidth=el.offsetWidth;var offset=_dom2.default.offset(el);var isTouchEvent=event.touches&&event.touches.length;var pageX=isTouchEvent?event.touches[0].pageX:event.pageX;var pageY=isTouchEvent?event.touches[0].pageY:event.pageY;var pointerX=pageX-offset.left;var pointerY=pageY-offset.top;var topLeftDiag=this.calcDiag(pointerX,pointerY);var topRightDiag=this.calcDiag(elWidth-pointerX,pointerY);var botRightDiag=this.calcDiag(elWidth-pointerX,elHeight-pointerY);var botLeftDiag=this.calcDiag(pointerX,elHeight-pointerY);var rippleRadius=Math.max(topLeftDiag,topRightDiag,botRightDiag,botLeftDiag);var rippleSize=rippleRadius*2;var left=pointerX-rippleRadius;var top=pointerY-rippleRadius;return{directionInvariant:true,height:rippleSize,width:rippleSize,top:top,left:left};}},{key:'calcDiag',value:function calcDiag(a,b){return Math.sqrt(a*a+b*b);}},{key:'render',value:function render(){var _props=this.props;var children=_props.children;var style=_props.style;var _state=this.state;var hasRipples=_state.hasRipples;var ripples=_state.ripples;var prepareStyles=this.context.muiTheme.prepareStyles;var rippleGroup=void 0;if(hasRipples){var mergedStyles=(0,_simpleAssign2.default)({height:'100%',width:'100%',position:'absolute',top:0,left:0,overflow:'hidden'},style);rippleGroup=_react2.default.createElement(_reactAddonsTransitionGroup2.default,{style:prepareStyles(mergedStyles)},ripples);}return _react2.default.createElement('div',{onMouseUp:this.handleMouseUp,onMouseDown:this.handleMouseDown,onMouseLeave:this.handleMouseLeave,onTouchStart:this.handleTouchStart,onTouchEnd:this.handleTouchEnd},rippleGroup,children);}}]);return TouchRipple;}(_react.Component);TouchRipple.defaultProps={abortOnScroll:true};TouchRipple.contextTypes={muiTheme:_react.PropTypes.object.isRequired};process.env.NODE_ENV!=="production"?TouchRipple.propTypes={abortOnScroll:_react.PropTypes.bool,centerRipple:_react.PropTypes.bool,children:_react.PropTypes.node,color:_react.PropTypes.string,opacity:_react.PropTypes.number,style:_react.PropTypes.object}:void 0;exports.default=TouchRipple;}).call(this,require('_process'));},{"../utils/dom":33,"./CircleRipple":14,"_process":3,"babel-runtime/core-js/object/get-prototype-of":350,"babel-runtime/helpers/classCallCheck":355,"babel-runtime/helpers/createClass":356,"babel-runtime/helpers/inherits":358,"babel-runtime/helpers/possibleConstructorReturn":360,"babel-runtime/helpers/toArray":361,"babel-runtime/helpers/toConsumableArray":362,"react":225,"react-addons-transition-group":77,"react-dom":78,"simple-assign":2}],20:[function(require,module,exports){(function(process){'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _getPrototypeOf=require('babel-runtime/core-js/object/get-prototype-of');var _getPrototypeOf2=_interopRequireDefault(_getPrototypeOf);var _classCallCheck2=require('babel-runtime/helpers/classCallCheck');var _classCallCheck3=_interopRequireDefault(_classCallCheck2);var _createClass2=require('babel-runtime/helpers/createClass');var _createClass3=_interopRequireDefault(_createClass2);var _possibleConstructorReturn2=require('babel-runtime/helpers/possibleConstructorReturn');var _possibleConstructorReturn3=_interopRequireDefault(_possibleConstructorReturn2);var _inherits2=require('babel-runtime/helpers/inherits');var _inherits3=_interopRequireDefault(_inherits2);var _react=require('react');var _getMuiTheme=require('./getMuiTheme');var _getMuiTheme2=_interopRequireDefault(_getMuiTheme);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var MuiThemeProvider=function(_Component){(0,_inherits3.default)(MuiThemeProvider,_Component);function MuiThemeProvider(){(0,_classCallCheck3.default)(this,MuiThemeProvider);return(0,_possibleConstructorReturn3.default)(this,(MuiThemeProvider.__proto__||(0,_getPrototypeOf2.default)(MuiThemeProvider)).apply(this,arguments));}(0,_createClass3.default)(MuiThemeProvider,[{key:'getChildContext',value:function getChildContext(){return{muiTheme:this.props.muiTheme||(0,_getMuiTheme2.default)()};}},{key:'render',value:function render(){return this.props.children;}}]);return MuiThemeProvider;}(_react.Component);MuiThemeProvider.childContextTypes={muiTheme:_react.PropTypes.object.isRequired};process.env.NODE_ENV!=="production"?MuiThemeProvider.propTypes={children:_react.PropTypes.element,muiTheme:_react.PropTypes.object}:void 0;exports.default=MuiThemeProvider;}).call(this,require('_process'));},{"./getMuiTheme":23,"_process":3,"babel-runtime/core-js/object/get-prototype-of":350,"babel-runtime/helpers/classCallCheck":355,"babel-runtime/helpers/createClass":356,"babel-runtime/helpers/inherits":358,"babel-runtime/helpers/possibleConstructorReturn":360,"react":225}],21:[function(require,module,exports){'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _colors=require('../colors');var _colorManipulator=require('../../utils/colorManipulator');var _spacing=require('../spacing');var _spacing2=_interopRequireDefault(_spacing);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}/**
 *  Light Theme is the default theme used in material-ui. It is guaranteed to
 *  have all theme variables needed for every component. Variables not defined
 *  in a custom theme will default to these values.
 */exports.default={spacing:_spacing2.default,fontFamily:'Roboto, sans-serif',palette:{primary1Color:_colors.cyan500,primary2Color:_colors.cyan700,primary3Color:_colors.grey400,accent1Color:_colors.pinkA200,accent2Color:_colors.grey100,accent3Color:_colors.grey500,textColor:_colors.darkBlack,secondaryTextColor:(0,_colorManipulator.fade)(_colors.darkBlack,0.54),alternateTextColor:_colors.white,canvasColor:_colors.white,borderColor:_colors.grey300,disabledColor:(0,_colorManipulator.fade)(_colors.darkBlack,0.3),pickerHeaderColor:_colors.cyan500,clockCircleColor:(0,_colorManipulator.fade)(_colors.darkBlack,0.07),shadowColor:_colors.fullBlack}};/**
    * NB: If you update this file, please also update `docs/src/app/customization/Themes.js`
    */},{"../../utils/colorManipulator":32,"../colors":22,"../spacing":24}],22:[function(require,module,exports){'use strict';Object.defineProperty(exports,"__esModule",{value:true});var red50=exports.red50='#ffebee';var red100=exports.red100='#ffcdd2';var red200=exports.red200='#ef9a9a';var red300=exports.red300='#e57373';var red400=exports.red400='#ef5350';var red500=exports.red500='#f44336';var red600=exports.red600='#e53935';var red700=exports.red700='#d32f2f';var red800=exports.red800='#c62828';var red900=exports.red900='#b71c1c';var redA100=exports.redA100='#ff8a80';var redA200=exports.redA200='#ff5252';var redA400=exports.redA400='#ff1744';var redA700=exports.redA700='#d50000';var pink50=exports.pink50='#fce4ec';var pink100=exports.pink100='#f8bbd0';var pink200=exports.pink200='#f48fb1';var pink300=exports.pink300='#f06292';var pink400=exports.pink400='#ec407a';var pink500=exports.pink500='#e91e63';var pink600=exports.pink600='#d81b60';var pink700=exports.pink700='#c2185b';var pink800=exports.pink800='#ad1457';var pink900=exports.pink900='#880e4f';var pinkA100=exports.pinkA100='#ff80ab';var pinkA200=exports.pinkA200='#ff4081';var pinkA400=exports.pinkA400='#f50057';var pinkA700=exports.pinkA700='#c51162';var purple50=exports.purple50='#f3e5f5';var purple100=exports.purple100='#e1bee7';var purple200=exports.purple200='#ce93d8';var purple300=exports.purple300='#ba68c8';var purple400=exports.purple400='#ab47bc';var purple500=exports.purple500='#9c27b0';var purple600=exports.purple600='#8e24aa';var purple700=exports.purple700='#7b1fa2';var purple800=exports.purple800='#6a1b9a';var purple900=exports.purple900='#4a148c';var purpleA100=exports.purpleA100='#ea80fc';var purpleA200=exports.purpleA200='#e040fb';var purpleA400=exports.purpleA400='#d500f9';var purpleA700=exports.purpleA700='#aa00ff';var deepPurple50=exports.deepPurple50='#ede7f6';var deepPurple100=exports.deepPurple100='#d1c4e9';var deepPurple200=exports.deepPurple200='#b39ddb';var deepPurple300=exports.deepPurple300='#9575cd';var deepPurple400=exports.deepPurple400='#7e57c2';var deepPurple500=exports.deepPurple500='#673ab7';var deepPurple600=exports.deepPurple600='#5e35b1';var deepPurple700=exports.deepPurple700='#512da8';var deepPurple800=exports.deepPurple800='#4527a0';var deepPurple900=exports.deepPurple900='#311b92';var deepPurpleA100=exports.deepPurpleA100='#b388ff';var deepPurpleA200=exports.deepPurpleA200='#7c4dff';var deepPurpleA400=exports.deepPurpleA400='#651fff';var deepPurpleA700=exports.deepPurpleA700='#6200ea';var indigo50=exports.indigo50='#e8eaf6';var indigo100=exports.indigo100='#c5cae9';var indigo200=exports.indigo200='#9fa8da';var indigo300=exports.indigo300='#7986cb';var indigo400=exports.indigo400='#5c6bc0';var indigo500=exports.indigo500='#3f51b5';var indigo600=exports.indigo600='#3949ab';var indigo700=exports.indigo700='#303f9f';var indigo800=exports.indigo800='#283593';var indigo900=exports.indigo900='#1a237e';var indigoA100=exports.indigoA100='#8c9eff';var indigoA200=exports.indigoA200='#536dfe';var indigoA400=exports.indigoA400='#3d5afe';var indigoA700=exports.indigoA700='#304ffe';var blue50=exports.blue50='#e3f2fd';var blue100=exports.blue100='#bbdefb';var blue200=exports.blue200='#90caf9';var blue300=exports.blue300='#64b5f6';var blue400=exports.blue400='#42a5f5';var blue500=exports.blue500='#2196f3';var blue600=exports.blue600='#1e88e5';var blue700=exports.blue700='#1976d2';var blue800=exports.blue800='#1565c0';var blue900=exports.blue900='#0d47a1';var blueA100=exports.blueA100='#82b1ff';var blueA200=exports.blueA200='#448aff';var blueA400=exports.blueA400='#2979ff';var blueA700=exports.blueA700='#2962ff';var lightBlue50=exports.lightBlue50='#e1f5fe';var lightBlue100=exports.lightBlue100='#b3e5fc';var lightBlue200=exports.lightBlue200='#81d4fa';var lightBlue300=exports.lightBlue300='#4fc3f7';var lightBlue400=exports.lightBlue400='#29b6f6';var lightBlue500=exports.lightBlue500='#03a9f4';var lightBlue600=exports.lightBlue600='#039be5';var lightBlue700=exports.lightBlue700='#0288d1';var lightBlue800=exports.lightBlue800='#0277bd';var lightBlue900=exports.lightBlue900='#01579b';var lightBlueA100=exports.lightBlueA100='#80d8ff';var lightBlueA200=exports.lightBlueA200='#40c4ff';var lightBlueA400=exports.lightBlueA400='#00b0ff';var lightBlueA700=exports.lightBlueA700='#0091ea';var cyan50=exports.cyan50='#e0f7fa';var cyan100=exports.cyan100='#b2ebf2';var cyan200=exports.cyan200='#80deea';var cyan300=exports.cyan300='#4dd0e1';var cyan400=exports.cyan400='#26c6da';var cyan500=exports.cyan500='#00bcd4';var cyan600=exports.cyan600='#00acc1';var cyan700=exports.cyan700='#0097a7';var cyan800=exports.cyan800='#00838f';var cyan900=exports.cyan900='#006064';var cyanA100=exports.cyanA100='#84ffff';var cyanA200=exports.cyanA200='#18ffff';var cyanA400=exports.cyanA400='#00e5ff';var cyanA700=exports.cyanA700='#00b8d4';var teal50=exports.teal50='#e0f2f1';var teal100=exports.teal100='#b2dfdb';var teal200=exports.teal200='#80cbc4';var teal300=exports.teal300='#4db6ac';var teal400=exports.teal400='#26a69a';var teal500=exports.teal500='#009688';var teal600=exports.teal600='#00897b';var teal700=exports.teal700='#00796b';var teal800=exports.teal800='#00695c';var teal900=exports.teal900='#004d40';var tealA100=exports.tealA100='#a7ffeb';var tealA200=exports.tealA200='#64ffda';var tealA400=exports.tealA400='#1de9b6';var tealA700=exports.tealA700='#00bfa5';var green50=exports.green50='#e8f5e9';var green100=exports.green100='#c8e6c9';var green200=exports.green200='#a5d6a7';var green300=exports.green300='#81c784';var green400=exports.green400='#66bb6a';var green500=exports.green500='#4caf50';var green600=exports.green600='#43a047';var green700=exports.green700='#388e3c';var green800=exports.green800='#2e7d32';var green900=exports.green900='#1b5e20';var greenA100=exports.greenA100='#b9f6ca';var greenA200=exports.greenA200='#69f0ae';var greenA400=exports.greenA400='#00e676';var greenA700=exports.greenA700='#00c853';var lightGreen50=exports.lightGreen50='#f1f8e9';var lightGreen100=exports.lightGreen100='#dcedc8';var lightGreen200=exports.lightGreen200='#c5e1a5';var lightGreen300=exports.lightGreen300='#aed581';var lightGreen400=exports.lightGreen400='#9ccc65';var lightGreen500=exports.lightGreen500='#8bc34a';var lightGreen600=exports.lightGreen600='#7cb342';var lightGreen700=exports.lightGreen700='#689f38';var lightGreen800=exports.lightGreen800='#558b2f';var lightGreen900=exports.lightGreen900='#33691e';var lightGreenA100=exports.lightGreenA100='#ccff90';var lightGreenA200=exports.lightGreenA200='#b2ff59';var lightGreenA400=exports.lightGreenA400='#76ff03';var lightGreenA700=exports.lightGreenA700='#64dd17';var lime50=exports.lime50='#f9fbe7';var lime100=exports.lime100='#f0f4c3';var lime200=exports.lime200='#e6ee9c';var lime300=exports.lime300='#dce775';var lime400=exports.lime400='#d4e157';var lime500=exports.lime500='#cddc39';var lime600=exports.lime600='#c0ca33';var lime700=exports.lime700='#afb42b';var lime800=exports.lime800='#9e9d24';var lime900=exports.lime900='#827717';var limeA100=exports.limeA100='#f4ff81';var limeA200=exports.limeA200='#eeff41';var limeA400=exports.limeA400='#c6ff00';var limeA700=exports.limeA700='#aeea00';var yellow50=exports.yellow50='#fffde7';var yellow100=exports.yellow100='#fff9c4';var yellow200=exports.yellow200='#fff59d';var yellow300=exports.yellow300='#fff176';var yellow400=exports.yellow400='#ffee58';var yellow500=exports.yellow500='#ffeb3b';var yellow600=exports.yellow600='#fdd835';var yellow700=exports.yellow700='#fbc02d';var yellow800=exports.yellow800='#f9a825';var yellow900=exports.yellow900='#f57f17';var yellowA100=exports.yellowA100='#ffff8d';var yellowA200=exports.yellowA200='#ffff00';var yellowA400=exports.yellowA400='#ffea00';var yellowA700=exports.yellowA700='#ffd600';var amber50=exports.amber50='#fff8e1';var amber100=exports.amber100='#ffecb3';var amber200=exports.amber200='#ffe082';var amber300=exports.amber300='#ffd54f';var amber400=exports.amber400='#ffca28';var amber500=exports.amber500='#ffc107';var amber600=exports.amber600='#ffb300';var amber700=exports.amber700='#ffa000';var amber800=exports.amber800='#ff8f00';var amber900=exports.amber900='#ff6f00';var amberA100=exports.amberA100='#ffe57f';var amberA200=exports.amberA200='#ffd740';var amberA400=exports.amberA400='#ffc400';var amberA700=exports.amberA700='#ffab00';var orange50=exports.orange50='#fff3e0';var orange100=exports.orange100='#ffe0b2';var orange200=exports.orange200='#ffcc80';var orange300=exports.orange300='#ffb74d';var orange400=exports.orange400='#ffa726';var orange500=exports.orange500='#ff9800';var orange600=exports.orange600='#fb8c00';var orange700=exports.orange700='#f57c00';var orange800=exports.orange800='#ef6c00';var orange900=exports.orange900='#e65100';var orangeA100=exports.orangeA100='#ffd180';var orangeA200=exports.orangeA200='#ffab40';var orangeA400=exports.orangeA400='#ff9100';var orangeA700=exports.orangeA700='#ff6d00';var deepOrange50=exports.deepOrange50='#fbe9e7';var deepOrange100=exports.deepOrange100='#ffccbc';var deepOrange200=exports.deepOrange200='#ffab91';var deepOrange300=exports.deepOrange300='#ff8a65';var deepOrange400=exports.deepOrange400='#ff7043';var deepOrange500=exports.deepOrange500='#ff5722';var deepOrange600=exports.deepOrange600='#f4511e';var deepOrange700=exports.deepOrange700='#e64a19';var deepOrange800=exports.deepOrange800='#d84315';var deepOrange900=exports.deepOrange900='#bf360c';var deepOrangeA100=exports.deepOrangeA100='#ff9e80';var deepOrangeA200=exports.deepOrangeA200='#ff6e40';var deepOrangeA400=exports.deepOrangeA400='#ff3d00';var deepOrangeA700=exports.deepOrangeA700='#dd2c00';var brown50=exports.brown50='#efebe9';var brown100=exports.brown100='#d7ccc8';var brown200=exports.brown200='#bcaaa4';var brown300=exports.brown300='#a1887f';var brown400=exports.brown400='#8d6e63';var brown500=exports.brown500='#795548';var brown600=exports.brown600='#6d4c41';var brown700=exports.brown700='#5d4037';var brown800=exports.brown800='#4e342e';var brown900=exports.brown900='#3e2723';var blueGrey50=exports.blueGrey50='#eceff1';var blueGrey100=exports.blueGrey100='#cfd8dc';var blueGrey200=exports.blueGrey200='#b0bec5';var blueGrey300=exports.blueGrey300='#90a4ae';var blueGrey400=exports.blueGrey400='#78909c';var blueGrey500=exports.blueGrey500='#607d8b';var blueGrey600=exports.blueGrey600='#546e7a';var blueGrey700=exports.blueGrey700='#455a64';var blueGrey800=exports.blueGrey800='#37474f';var blueGrey900=exports.blueGrey900='#263238';var grey50=exports.grey50='#fafafa';var grey100=exports.grey100='#f5f5f5';var grey200=exports.grey200='#eeeeee';var grey300=exports.grey300='#e0e0e0';var grey400=exports.grey400='#bdbdbd';var grey500=exports.grey500='#9e9e9e';var grey600=exports.grey600='#757575';var grey700=exports.grey700='#616161';var grey800=exports.grey800='#424242';var grey900=exports.grey900='#212121';var black=exports.black='#000000';var white=exports.white='#ffffff';var transparent=exports.transparent='rgba(0, 0, 0, 0)';var fullBlack=exports.fullBlack='rgba(0, 0, 0, 1)';var darkBlack=exports.darkBlack='rgba(0, 0, 0, 0.87)';var lightBlack=exports.lightBlack='rgba(0, 0, 0, 0.54)';var minBlack=exports.minBlack='rgba(0, 0, 0, 0.26)';var faintBlack=exports.faintBlack='rgba(0, 0, 0, 0.12)';var fullWhite=exports.fullWhite='rgba(255, 255, 255, 1)';var darkWhite=exports.darkWhite='rgba(255, 255, 255, 0.87)';var lightWhite=exports.lightWhite='rgba(255, 255, 255, 0.54)';},{}],23:[function(require,module,exports){'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _toConsumableArray2=require('babel-runtime/helpers/toConsumableArray');var _toConsumableArray3=_interopRequireDefault(_toConsumableArray2);exports.default=getMuiTheme;var _lodash=require('lodash.merge');var _lodash2=_interopRequireDefault(_lodash);var _colorManipulator=require('../utils/colorManipulator');var _lightBaseTheme=require('./baseThemes/lightBaseTheme');var _lightBaseTheme2=_interopRequireDefault(_lightBaseTheme);var _zIndex=require('./zIndex');var _zIndex2=_interopRequireDefault(_zIndex);var _autoprefixer=require('../utils/autoprefixer');var _autoprefixer2=_interopRequireDefault(_autoprefixer);var _callOnce=require('../utils/callOnce');var _callOnce2=_interopRequireDefault(_callOnce);var _rtl=require('../utils/rtl');var _rtl2=_interopRequireDefault(_rtl);var _compose=require('recompose/compose');var _compose2=_interopRequireDefault(_compose);var _typography=require('./typography');var _typography2=_interopRequireDefault(_typography);var _colors=require('./colors');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}/**
 * Get the MUI theme corresponding to a base theme.
 * It's possible to override the computed theme values
 * by providing a second argument. The calculated
 * theme will be deeply merged with the second argument.
 */function getMuiTheme(muiTheme){for(var _len=arguments.length,more=Array(_len>1?_len-1:0),_key=1;_key<_len;_key++){more[_key-1]=arguments[_key];}muiTheme=_lodash2.default.apply(undefined,[{zIndex:_zIndex2.default,isRtl:false,userAgent:undefined},_lightBaseTheme2.default,muiTheme].concat(more));var _muiTheme=muiTheme;var spacing=_muiTheme.spacing;var fontFamily=_muiTheme.fontFamily;var palette=_muiTheme.palette;var baseTheme={spacing:spacing,fontFamily:fontFamily,palette:palette};muiTheme=(0,_lodash2.default)({appBar:{color:palette.primary1Color,textColor:palette.alternateTextColor,height:spacing.desktopKeylineIncrement,titleFontWeight:_typography2.default.fontWeightNormal,padding:spacing.desktopGutter},avatar:{color:palette.canvasColor,backgroundColor:(0,_colorManipulator.emphasize)(palette.canvasColor,0.26)},badge:{color:palette.alternateTextColor,textColor:palette.textColor,primaryColor:palette.primary1Color,primaryTextColor:palette.alternateTextColor,secondaryColor:palette.accent1Color,secondaryTextColor:palette.alternateTextColor,fontWeight:_typography2.default.fontWeightMedium},bottomNavigation:{backgroundColor:palette.canvasColor,unselectedColor:(0,_colorManipulator.fade)(palette.textColor,0.54),selectedColor:palette.primary1Color,height:56,unselectedFontSize:12,selectedFontSize:14},button:{height:36,minWidth:88,iconButtonSize:spacing.iconSize*2},card:{titleColor:(0,_colorManipulator.fade)(palette.textColor,0.87),subtitleColor:(0,_colorManipulator.fade)(palette.textColor,0.54),fontWeight:_typography2.default.fontWeightMedium},cardMedia:{color:_colors.darkWhite,overlayContentBackground:_colors.lightBlack,titleColor:_colors.darkWhite,subtitleColor:_colors.lightWhite},cardText:{textColor:palette.textColor},checkbox:{boxColor:palette.textColor,checkedColor:palette.primary1Color,requiredColor:palette.primary1Color,disabledColor:palette.disabledColor,labelColor:palette.textColor,labelDisabledColor:palette.disabledColor},chip:{backgroundColor:(0,_colorManipulator.emphasize)(palette.canvasColor,0.12),deleteIconColor:(0,_colorManipulator.fade)(palette.textColor,0.26),textColor:(0,_colorManipulator.fade)(palette.textColor,0.87),fontSize:14,fontWeight:_typography2.default.fontWeightNormal,shadow:'0 1px 6px '+(0,_colorManipulator.fade)(palette.shadowColor,0.12)+',\n        0 1px 4px '+(0,_colorManipulator.fade)(palette.shadowColor,0.12)},datePicker:{color:palette.primary1Color,textColor:palette.alternateTextColor,calendarTextColor:palette.textColor,selectColor:palette.primary2Color,selectTextColor:palette.alternateTextColor,calendarYearBackgroundColor:palette.canvasColor},dialog:{titleFontSize:22,bodyFontSize:16,bodyColor:(0,_colorManipulator.fade)(palette.textColor,0.6)},dropDownMenu:{accentColor:palette.borderColor},enhancedButton:{tapHighlightColor:_colors.transparent},flatButton:{color:_colors.transparent,buttonFilterColor:'#999999',disabledTextColor:(0,_colorManipulator.fade)(palette.textColor,0.3),textColor:palette.textColor,primaryTextColor:palette.primary1Color,secondaryTextColor:palette.accent1Color,fontSize:_typography2.default.fontStyleButtonFontSize,fontWeight:_typography2.default.fontWeightMedium},floatingActionButton:{buttonSize:56,miniSize:40,color:palette.primary1Color,iconColor:palette.alternateTextColor,secondaryColor:palette.accent1Color,secondaryIconColor:palette.alternateTextColor,disabledTextColor:palette.disabledColor,disabledColor:(0,_colorManipulator.emphasize)(palette.canvasColor,0.12)},gridTile:{textColor:_colors.white},icon:{color:palette.canvasColor,backgroundColor:palette.primary1Color},inkBar:{backgroundColor:palette.accent1Color},drawer:{width:spacing.desktopKeylineIncrement*4,color:palette.canvasColor},listItem:{nestedLevelDepth:18,secondaryTextColor:palette.secondaryTextColor,leftIconColor:_colors.grey600,rightIconColor:_colors.grey600},menu:{backgroundColor:palette.canvasColor,containerBackgroundColor:palette.canvasColor},menuItem:{dataHeight:32,height:48,hoverColor:(0,_colorManipulator.fade)(palette.textColor,0.035),padding:spacing.desktopGutter,selectedTextColor:palette.accent1Color,rightIconDesktopFill:_colors.grey600},menuSubheader:{padding:spacing.desktopGutter,borderColor:palette.borderColor,textColor:palette.primary1Color},overlay:{backgroundColor:_colors.lightBlack},paper:{color:palette.textColor,backgroundColor:palette.canvasColor,zDepthShadows:[[1,6,0.12,1,4,0.12],[3,10,0.16,3,10,0.23],[10,30,0.19,6,10,0.23],[14,45,0.25,10,18,0.22],[19,60,0.30,15,20,0.22]].map(function(d){return'0 '+d[0]+'px '+d[1]+'px '+(0,_colorManipulator.fade)(palette.shadowColor,d[2])+',\n         0 '+d[3]+'px '+d[4]+'px '+(0,_colorManipulator.fade)(palette.shadowColor,d[5]);})},radioButton:{borderColor:palette.textColor,backgroundColor:palette.alternateTextColor,checkedColor:palette.primary1Color,requiredColor:palette.primary1Color,disabledColor:palette.disabledColor,size:24,labelColor:palette.textColor,labelDisabledColor:palette.disabledColor},raisedButton:{color:palette.alternateTextColor,textColor:palette.textColor,primaryColor:palette.primary1Color,primaryTextColor:palette.alternateTextColor,secondaryColor:palette.accent1Color,secondaryTextColor:palette.alternateTextColor,disabledColor:(0,_colorManipulator.darken)(palette.alternateTextColor,0.1),disabledTextColor:(0,_colorManipulator.fade)(palette.textColor,0.3),fontSize:_typography2.default.fontStyleButtonFontSize,fontWeight:_typography2.default.fontWeightMedium},refreshIndicator:{strokeColor:palette.borderColor,loadingStrokeColor:palette.primary1Color},ripple:{color:(0,_colorManipulator.fade)(palette.textColor,0.87)},slider:{trackSize:2,trackColor:palette.primary3Color,trackColorSelected:palette.accent3Color,handleSize:12,handleSizeDisabled:8,handleSizeActive:18,handleColorZero:palette.primary3Color,handleFillColor:palette.alternateTextColor,selectionColor:palette.primary1Color,rippleColor:palette.primary1Color},snackbar:{textColor:palette.alternateTextColor,backgroundColor:palette.textColor,actionColor:palette.accent1Color},subheader:{color:(0,_colorManipulator.fade)(palette.textColor,0.54),fontWeight:_typography2.default.fontWeightMedium},stepper:{backgroundColor:'transparent',hoverBackgroundColor:(0,_colorManipulator.fade)(_colors.black,0.06),iconColor:palette.primary1Color,hoveredIconColor:_colors.grey700,inactiveIconColor:_colors.grey500,textColor:(0,_colorManipulator.fade)(_colors.black,0.87),disabledTextColor:(0,_colorManipulator.fade)(_colors.black,0.26),connectorLineColor:_colors.grey400},svgIcon:{color:palette.textColor},table:{backgroundColor:palette.canvasColor},tableFooter:{borderColor:palette.borderColor,textColor:palette.accent3Color},tableHeader:{borderColor:palette.borderColor},tableHeaderColumn:{textColor:palette.accent3Color,height:56,spacing:24},tableRow:{hoverColor:palette.accent2Color,stripeColor:(0,_colorManipulator.fade)((0,_colorManipulator.lighten)(palette.primary1Color,0.5),0.4),selectedColor:palette.borderColor,textColor:palette.textColor,borderColor:palette.borderColor,height:48},tableRowColumn:{height:48,spacing:24},tabs:{backgroundColor:palette.primary1Color,textColor:(0,_colorManipulator.fade)(palette.alternateTextColor,0.7),selectedTextColor:palette.alternateTextColor},textField:{textColor:palette.textColor,hintColor:palette.disabledColor,floatingLabelColor:palette.textColor,disabledTextColor:palette.disabledColor,errorColor:_colors.red500,focusColor:palette.primary1Color,backgroundColor:'transparent',borderColor:palette.borderColor},timePicker:{color:palette.alternateTextColor,textColor:palette.accent3Color,accentColor:palette.primary1Color,clockColor:palette.textColor,clockCircleColor:palette.clockCircleColor,headerColor:palette.pickerHeaderColor||palette.primary1Color,selectColor:palette.primary2Color,selectTextColor:palette.alternateTextColor},toggle:{thumbOnColor:palette.primary1Color,thumbOffColor:palette.accent2Color,thumbDisabledColor:palette.borderColor,thumbRequiredColor:palette.primary1Color,trackOnColor:(0,_colorManipulator.fade)(palette.primary1Color,0.5),trackOffColor:palette.primary3Color,trackDisabledColor:palette.primary3Color,labelColor:palette.textColor,labelDisabledColor:palette.disabledColor,trackRequiredColor:(0,_colorManipulator.fade)(palette.primary1Color,0.5)},toolbar:{color:(0,_colorManipulator.fade)(palette.textColor,0.54),hoverColor:(0,_colorManipulator.fade)(palette.textColor,0.87),backgroundColor:(0,_colorManipulator.darken)(palette.accent2Color,0.05),height:56,titleFontSize:20,iconColor:(0,_colorManipulator.fade)(palette.textColor,0.4),separatorColor:(0,_colorManipulator.fade)(palette.textColor,0.175),menuHoverColor:(0,_colorManipulator.fade)(palette.textColor,0.1)},tooltip:{color:_colors.white,rippleBackgroundColor:_colors.grey700}},muiTheme,{baseTheme:baseTheme,// To provide backward compatibility.
rawTheme:baseTheme});var transformers=[_autoprefixer2.default,_rtl2.default,_callOnce2.default].map(function(t){return t(muiTheme);}).filter(function(t){return t;});muiTheme.prepareStyles=_compose2.default.apply(undefined,(0,_toConsumableArray3.default)(transformers));return muiTheme;}},{"../utils/autoprefixer":29,"../utils/callOnce":30,"../utils/colorManipulator":32,"../utils/rtl":36,"./baseThemes/lightBaseTheme":21,"./colors":22,"./typography":26,"./zIndex":27,"babel-runtime/helpers/toConsumableArray":362,"lodash.merge":345,"recompose/compose":39}],24:[function(require,module,exports){"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports.default={iconSize:24,desktopGutter:24,desktopGutterMore:32,desktopGutterLess:16,desktopGutterMini:8,desktopKeylineIncrement:64,desktopDropDownMenuItemHeight:32,desktopDropDownMenuFontSize:15,desktopDrawerMenuItemHeight:48,desktopSubheaderHeight:48,desktopToolbarHeight:56};},{}],25:[function(require,module,exports){'use strict';Object.defineProperty(exports,"__esModule",{value:true});exports.default={easeOutFunction:'cubic-bezier(0.23, 1, 0.32, 1)',easeInOutFunction:'cubic-bezier(0.445, 0.05, 0.55, 0.95)',easeOut:function easeOut(duration,property,delay,easeFunction){easeFunction=easeFunction||this.easeOutFunction;if(property&&Object.prototype.toString.call(property)==='[object Array]'){var transitions='';for(var i=0;i<property.length;i++){if(transitions)transitions+=',';transitions+=this.create(duration,property[i],delay,easeFunction);}return transitions;}else{return this.create(duration,property,delay,easeFunction);}},create:function create(duration,property,delay,easeFunction){duration=duration||'450ms';property=property||'all';delay=delay||'0ms';easeFunction=easeFunction||'linear';return property+' '+duration+' '+easeFunction+' '+delay;}};},{}],26:[function(require,module,exports){'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _classCallCheck2=require('babel-runtime/helpers/classCallCheck');var _classCallCheck3=_interopRequireDefault(_classCallCheck2);var _colors=require('./colors');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var Typography=function Typography(){(0,_classCallCheck3.default)(this,Typography);// text colors
this.textFullBlack=_colors.fullBlack;this.textDarkBlack=_colors.darkBlack;this.textLightBlack=_colors.lightBlack;this.textMinBlack=_colors.minBlack;this.textFullWhite=_colors.fullWhite;this.textDarkWhite=_colors.darkWhite;this.textLightWhite=_colors.lightWhite;// font weight
this.fontWeightLight=300;this.fontWeightNormal=400;this.fontWeightMedium=500;this.fontStyleButtonFontSize=14;};exports.default=new Typography();},{"./colors":22,"babel-runtime/helpers/classCallCheck":355}],27:[function(require,module,exports){"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports.default={menu:1000,appBar:1100,drawerOverlay:1200,drawer:1300,dialogOverlay:1400,dialog:1500,layer:2000,popover:2100,snackbar:2900,tooltip:3000};},{}],28:[function(require,module,exports){"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports.default={set:function set(style,key,value){style[key]=value;}};},{}],29:[function(require,module,exports){(function(process){'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _typeof2=require('babel-runtime/helpers/typeof');var _typeof3=_interopRequireDefault(_typeof2);exports.default=function(muiTheme){var userAgent=muiTheme.userAgent;if(userAgent===undefined&&typeof navigator!=='undefined'){userAgent=navigator.userAgent;}if(userAgent===undefined&&!hasWarnedAboutUserAgent){process.env.NODE_ENV!=="production"?(0,_warning2.default)(false,'Material-UI: userAgent should be supplied in the muiTheme context\n      for server-side rendering.'):void 0;hasWarnedAboutUserAgent=true;}if(userAgent===false){// Disabled autoprefixer
return null;}else if(userAgent==='all'||userAgent===undefined){// Prefix for all user agent
return function(style){return _inlineStylePrefixer2.default.prefixAll(style);};}else{var _ret=function(){var prefixer=new _inlineStylePrefixer2.default({userAgent:userAgent});return{v:function v(style){return prefixer.prefix(style);}};}();if((typeof _ret==='undefined'?'undefined':(0,_typeof3.default)(_ret))==="object")return _ret.v;}};var _inlineStylePrefixer=require('inline-style-prefixer');var _inlineStylePrefixer2=_interopRequireDefault(_inlineStylePrefixer);var _warning=require('warning');var _warning2=_interopRequireDefault(_warning);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var hasWarnedAboutUserAgent=false;}).call(this,require('_process'));},{"_process":3,"babel-runtime/helpers/typeof":363,"inline-style-prefixer":226,"warning":343}],30:[function(require,module,exports){(function(process){'use strict';Object.defineProperty(exports,"__esModule",{value:true});exports.default=callOnce;var _warning=require('warning');var _warning2=_interopRequireDefault(_warning);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var CALLED_ONCE='muiPrepared';function callOnce(){if(process.env.NODE_ENV!=='production'){return function(style){if(style[CALLED_ONCE]){process.env.NODE_ENV!=="production"?(0,_warning2.default)(false,'You cannot call prepareStyles() on the same style object more than once.'):void 0;}style[CALLED_ONCE]=true;return style;};}}}).call(this,require('_process'));},{"_process":3,"warning":343}],31:[function(require,module,exports){'use strict';Object.defineProperty(exports,"__esModule",{value:true});exports.createChildFragment=createChildFragment;exports.extendChildren=extendChildren;var _react=require('react');var _react2=_interopRequireDefault(_react);var _reactAddonsCreateFragment=require('react-addons-create-fragment');var _reactAddonsCreateFragment2=_interopRequireDefault(_reactAddonsCreateFragment);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function createChildFragment(fragments){var newFragments={};var validChildrenCount=0;var firstKey=void 0;// Only create non-empty key fragments
for(var key in fragments){var currentChild=fragments[key];if(currentChild){if(validChildrenCount===0)firstKey=key;newFragments[key]=currentChild;validChildrenCount++;}}if(validChildrenCount===0)return undefined;if(validChildrenCount===1)return newFragments[firstKey];return(0,_reactAddonsCreateFragment2.default)(newFragments);}function extendChildren(children,extendedProps,extendedChildren){return _react2.default.isValidElement(children)?_react2.default.Children.map(children,function(child){var newProps=typeof extendedProps==='function'?extendedProps(child):extendedProps;var newChildren=typeof extendedChildren==='function'?extendedChildren(child):extendedChildren?extendedChildren:child.props.children;return _react2.default.cloneElement(child,newProps,newChildren);}):children;}},{"react":225,"react-addons-create-fragment":75}],32:[function(require,module,exports){'use strict';Object.defineProperty(exports,"__esModule",{value:true});exports.convertColorToString=convertColorToString;exports.convertHexToRGB=convertHexToRGB;exports.decomposeColor=decomposeColor;exports.getContrastRatio=getContrastRatio;exports.getLuminance=getLuminance;exports.emphasize=emphasize;exports.fade=fade;exports.darken=darken;exports.lighten=lighten;/**
 * Returns a number whose value is limited to the given range.
 *
 * @param {number} value The value to be clamped
 * @param {number} min The lower boundary of the output range
 * @param {number} max The upper boundary of the output range
 * @returns {number} A number in the range [min, max]
 */function clamp(value,min,max){if(value<min){return min;}if(value>max){return max;}return value;}/**
 * Converts a color object with type and values to a string.
 *
 * @param {object} color - Decomposed color
 * @param {string} color.type - One of, 'rgb', 'rgba', 'hsl', 'hsla'
 * @param {array} color.values - [n,n,n] or [n,n,n,n]
 * @returns {string} A CSS color string
 */function convertColorToString(color){var type=color.type;var values=color.values;if(type.indexOf('rgb')>-1){// Only convert the first 3 values to int (i.e. not alpha)
for(var i=0;i<3;i++){values[i]=parseInt(values[i]);}}var colorString=void 0;if(type.indexOf('hsl')>-1){colorString=color.type+'('+values[0]+', '+values[1]+'%, '+values[2]+'%';}else{colorString=color.type+'('+values[0]+', '+values[1]+', '+values[2];}if(values.length===4){colorString+=', '+color.values[3]+')';}else{colorString+=')';}return colorString;}/**
 * Converts a color from CSS hex format to CSS rgb format.
 *
 *  @param {string} color - Hex color, i.e. #nnn or #nnnnnn
 *  @returns {string} A CSS rgb color string
 */function convertHexToRGB(color){if(color.length===4){var extendedColor='#';for(var i=1;i<color.length;i++){extendedColor+=color.charAt(i)+color.charAt(i);}color=extendedColor;}var values={r:parseInt(color.substr(1,2),16),g:parseInt(color.substr(3,2),16),b:parseInt(color.substr(5,2),16)};return'rgb('+values.r+', '+values.g+', '+values.b+')';}/**
 * Returns an object with the type and values of a color.
 *
 * Note: Does not support rgb % values.
 *
 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
 * @returns {{type: string, values: number[]}} A MUI color object
 */function decomposeColor(color){if(color.charAt(0)==='#'){return decomposeColor(convertHexToRGB(color));}var marker=color.indexOf('(');var type=color.substring(0,marker);var values=color.substring(marker+1,color.length-1).split(',');values=values.map(function(value){return parseFloat(value);});return{type:type,values:values};}/**
 * Calculates the contrast ratio between two colors.
 *
 * Formula: http://www.w3.org/TR/2008/REC-WCAG20-20081211/#contrast-ratiodef
 *
 * @param {string} foreground - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
 * @param {string} background - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
 * @returns {number} A contrast ratio value in the range 0 - 21 with 2 digit precision.
 */function getContrastRatio(foreground,background){var lumA=getLuminance(foreground);var lumB=getLuminance(background);var contrastRatio=(Math.max(lumA,lumB)+0.05)/(Math.min(lumA,lumB)+0.05);return Number(contrastRatio.toFixed(2));// Truncate at two digits
}/**
 * The relative brightness of any point in a color space,
 * normalized to 0 for darkest black and 1 for lightest white.
 *
 * Formula: https://www.w3.org/WAI/GL/wiki/Relative_luminance
 *
 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
 * @returns {number} The relative brightness of the color in the range 0 - 1
 */function getLuminance(color){color=decomposeColor(color);if(color.type.indexOf('rgb')>-1){var rgb=color.values.map(function(val){val/=255;// normalized
return val<=0.03928?val/12.92:Math.pow((val+0.055)/1.055,2.4);});return Number((0.2126*rgb[0]+0.7152*rgb[1]+0.0722*rgb[2]).toFixed(3));// Truncate at 3 digits
}else if(color.type.indexOf('hsl')>-1){return color.values[2]/100;}}/**
 * Darken or lighten a colour, depending on its luminance.
 * Light colors are darkened, dark colors are lightened.
 *
 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
 * @param {number} coefficient=0.15 - multiplier in the range 0 - 1
 * @returns {string} A CSS color string. Hex input values are returned as rgb
 */function emphasize(color){var coefficient=arguments.length>1&&arguments[1]!==undefined?arguments[1]:0.15;return getLuminance(color)>0.5?darken(color,coefficient):lighten(color,coefficient);}/**
 * Set the absolute transparency of a color.
 * Any existing alpha values are overwritten.
 *
 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
 * @param {number} value - value to set the alpha channel to in the range 0 -1
 * @returns {string} A CSS color string. Hex input values are returned as rgb
 */function fade(color,value){color=decomposeColor(color);value=clamp(value,0,1);if(color.type==='rgb'||color.type==='hsl'){color.type+='a';}color.values[3]=value;return convertColorToString(color);}/**
 * Darkens a color.
 *
 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
 * @param {number} coefficient - multiplier in the range 0 - 1
 * @returns {string} A CSS color string. Hex input values are returned as rgb
 */function darken(color,coefficient){color=decomposeColor(color);coefficient=clamp(coefficient,0,1);if(color.type.indexOf('hsl')>-1){color.values[2]*=1-coefficient;}else if(color.type.indexOf('rgb')>-1){for(var i=0;i<3;i++){color.values[i]*=1-coefficient;}}return convertColorToString(color);}/**
 * Lightens a color.
 *
 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
 * @param {number} coefficient - multiplier in the range 0 - 1
 * @returns {string} A CSS color string. Hex input values are returned as rgb
 */function lighten(color,coefficient){color=decomposeColor(color);coefficient=clamp(coefficient,0,1);if(color.type.indexOf('hsl')>-1){color.values[2]+=(100-color.values[2])*coefficient;}else if(color.type.indexOf('rgb')>-1){for(var i=0;i<3;i++){color.values[i]+=(255-color.values[i])*coefficient;}}return convertColorToString(color);}},{}],33:[function(require,module,exports){"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports.default={isDescendant:function isDescendant(parent,child){var node=child.parentNode;while(node!==null){if(node===parent)return true;node=node.parentNode;}return false;},offset:function offset(el){var rect=el.getBoundingClientRect();return{top:rect.top+document.body.scrollTop,left:rect.left+document.body.scrollLeft};}};},{}],34:[function(require,module,exports){'use strict';Object.defineProperty(exports,"__esModule",{value:true});exports.default={once:function once(el,type,callback){var typeArray=type?type.split(' '):[];var recursiveFunction=function recursiveFunction(event){event.target.removeEventListener(event.type,recursiveFunction);return callback(event);};for(var i=typeArray.length-1;i>=0;i--){this.on(el,typeArray[i],recursiveFunction);}},on:function on(el,type,callback){if(el.addEventListener){el.addEventListener(type,callback);}else{// IE8+ Support
el.attachEvent('on'+type,function(){callback.call(el);});}},off:function off(el,type,callback){if(el.removeEventListener){el.removeEventListener(type,callback);}else{// IE8+ Support
el.detachEvent('on'+type,callback);}},isKeyboard:function isKeyboard(event){return['keydown','keypress','keyup'].indexOf(event.type)!==-1;}};},{}],35:[function(require,module,exports){'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _react=require('react');var horizontal=_react.PropTypes.oneOf(['left','middle','right']);var vertical=_react.PropTypes.oneOf(['top','center','bottom']);exports.default={corners:_react.PropTypes.oneOf(['bottom-left','bottom-right','top-left','top-right']),horizontal:horizontal,vertical:vertical,origin:_react.PropTypes.shape({horizontal:horizontal,vertical:vertical}),cornersAndCenter:_react.PropTypes.oneOf(['bottom-center','bottom-left','bottom-right','top-center','top-left','top-right']),stringOrNumber:_react.PropTypes.oneOfType([_react.PropTypes.string,_react.PropTypes.number]),zDepth:_react.PropTypes.oneOf([0,1,2,3,4,5])};},{"react":225}],36:[function(require,module,exports){'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _keys=require('babel-runtime/core-js/object/keys');var _keys2=_interopRequireDefault(_keys);exports.default=rtl;function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var reTranslate=/((^|\s)translate(3d|X)?\()(\-?[\d]+)/;var reSkew=/((^|\s)skew(x|y)?\()\s*(\-?[\d]+)(deg|rad|grad)(,\s*(\-?[\d]+)(deg|rad|grad))?/;/**
 * This function ensures that `style` supports both ltr and rtl directions by
 * checking `styleConstants` in `muiTheme` and replacing attribute keys if
 * necessary.
 */function rtl(muiTheme){if(muiTheme.isRtl){return function(style){if(style.directionInvariant===true){return style;}var flippedAttributes={// Keys and their replacements.
right:'left',left:'right',marginRight:'marginLeft',marginLeft:'marginRight',paddingRight:'paddingLeft',paddingLeft:'paddingRight',borderRight:'borderLeft',borderLeft:'borderRight'};var newStyle={};(0,_keys2.default)(style).forEach(function(attribute){var value=style[attribute];var key=attribute;if(flippedAttributes.hasOwnProperty(attribute)){key=flippedAttributes[attribute];}switch(attribute){case'float':case'textAlign':if(value==='right'){value='left';}else if(value==='left'){value='right';}break;case'direction':if(value==='ltr'){value='rtl';}else if(value==='rtl'){value='ltr';}break;case'transform':if(!value)break;var matches=void 0;if(matches=value.match(reTranslate)){value=value.replace(matches[0],matches[1]+-parseFloat(matches[4]));}if(matches=value.match(reSkew)){value=value.replace(matches[0],matches[1]+-parseFloat(matches[4])+matches[5]+matches[6]?', '+(-parseFloat(matches[7])+matches[8]):'');}break;case'transformOrigin':if(!value)break;if(value.indexOf('right')>-1){value=value.replace('right','left');}else if(value.indexOf('left')>-1){value=value.replace('left','right');}break;}newStyle[key]=value;});return newStyle;};}}},{"babel-runtime/core-js/object/keys":351}],37:[function(require,module,exports){(function(process){/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule invariant
 */"use strict";/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */var invariant=function invariant(condition,format,a,b,c,d,e,f){if(process.env.NODE_ENV!=='production'){if(format===undefined){throw new Error('invariant requires an error message argument');}}if(!condition){var error;if(format===undefined){error=new Error('Minified exception occurred; use the non-minified dev environment '+'for the full error message and additional helpful warnings.');}else{var args=[a,b,c,d,e,f];var argIndex=0;error=new Error('Invariant Violation: '+format.replace(/%s/g,function(){return args[argIndex++];}));}error.framesToPop=1;// we don't care about invariant's own frame
throw error;}};module.exports=invariant;}).call(this,require('_process'));},{"_process":3}],38:[function(require,module,exports){/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule keyOf
 *//**
 * Allows extraction of a minified key. Let's the build system minify keys
 * without losing the ability to dynamically use key strings as values
 * themselves. Pass in an object with a single key/val pair and it will return
 * you the string key of that single record. Suppose you want to grab the
 * value for a key 'className' inside of an object. Key/val minification may
 * have aliased that key to be 'xa12'. keyOf({className: null}) will return
 * 'xa12' in that case. Resolve keys you want to use once at startup time, then
 * reuse those resolutions.
 */"use strict";var keyOf=function keyOf(oneKeyObj){var key;for(key in oneKeyObj){if(!oneKeyObj.hasOwnProperty(key)){continue;}return key;}return null;};module.exports=keyOf;},{}],39:[function(require,module,exports){"use strict";exports.__esModule=true;exports.default=compose;function compose(){for(var _len=arguments.length,funcs=Array(_len),_key=0;_key<_len;_key++){funcs[_key]=arguments[_key];}if(funcs.length===0){return function(arg){return arg;};}if(funcs.length===1){return funcs[0];}var last=funcs[funcs.length-1];return function(){var result=last.apply(undefined,arguments);for(var i=funcs.length-2;i>=0;i--){var f=funcs[i];result=f(result);}return result;};}},{}],40:[function(require,module,exports){'use strict';exports.__esModule=true;var _shallowEqual=require('fbjs/lib/shallowEqual');var _shallowEqual2=_interopRequireDefault(_shallowEqual);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}exports.default=_shallowEqual2.default;},{"fbjs/lib/shallowEqual":67}],41:[function(require,module,exports){"use strict";Object.defineProperty(exports,"__esModule",{value:true});var _defineProperty=require("babel-runtime/core-js/object/define-property");var _defineProperty2=_interopRequireDefault(_defineProperty);exports.default=defineProperty;function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}//  weak
function defineProperty(o,p,attr){return(0,_defineProperty2.default)(o,p,attr);}},{"babel-runtime/core-js/object/define-property":349}],42:[function(require,module,exports){(function(process){'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _getPrototypeOf=require('babel-runtime/core-js/object/get-prototype-of');var _getPrototypeOf2=_interopRequireDefault(_getPrototypeOf);var _classCallCheck2=require('babel-runtime/helpers/classCallCheck');var _classCallCheck3=_interopRequireDefault(_classCallCheck2);var _createClass2=require('babel-runtime/helpers/createClass');var _createClass3=_interopRequireDefault(_createClass2);var _possibleConstructorReturn2=require('babel-runtime/helpers/possibleConstructorReturn');var _possibleConstructorReturn3=_interopRequireDefault(_possibleConstructorReturn2);var _inherits2=require('babel-runtime/helpers/inherits');var _inherits3=_interopRequireDefault(_inherits2);var _typeof2=require('babel-runtime/helpers/typeof');var _typeof3=_interopRequireDefault(_typeof2);var _assign=require('babel-runtime/core-js/object/assign');var _assign2=_interopRequireDefault(_assign);exports.withOptions=withOptions;var _react=require('react');var _react2=_interopRequireDefault(_react);var _reactAddonsShallowCompare=require('react-addons-shallow-compare');var _reactAddonsShallowCompare2=_interopRequireDefault(_reactAddonsShallowCompare);var _warning=require('warning');var _warning2=_interopRequireDefault(_warning);var _supports=require('./supports');var supports=_interopRequireWildcard(_supports);function _interopRequireWildcard(obj){if(obj&&obj.__esModule){return obj;}else{var newObj={};if(obj!=null){for(var key in obj){if(Object.prototype.hasOwnProperty.call(obj,key))newObj[key]=obj[key];}}newObj.default=obj;return newObj;}}function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var defaultEventOptions={capture:false,passive:false};function mergeDefaultEventOptions(options){return(0,_assign2.default)({},defaultEventOptions,options);}function getEventListenerArgs(eventName,callback,options){var args=[eventName,callback];args.push(supports.passiveOption?options:options.capture);return args;}function on(target,eventName,callback,options){if(supports.addEventListener){target.addEventListener.apply(target,getEventListenerArgs(eventName,callback,options));}else if(supports.attachEvent){// IE8+ Support
target.attachEvent('on'+eventName,function(){callback.call(target);});}}function off(target,eventName,callback,options){if(supports.removeEventListener){target.removeEventListener.apply(target,getEventListenerArgs(eventName,callback,options));}else if(supports.detachEvent){// IE8+ Support
target.detachEvent('on'+eventName,callback);}}var state={};function forEachListener(props,iteratee){for(var name in props){if(name.substring(0,2)!=='on')continue;var prop=props[name];var type=typeof prop==='undefined'?'undefined':(0,_typeof3.default)(prop);var isObject=type==='object';var isFunction=type==='function';if(!isObject&&!isFunction)continue;var _capture=name.substr(-7).toLowerCase()==='capture';var _eventName=name.substring(2).toLowerCase();_eventName=_capture?_eventName.substring(0,_eventName.length-7):_eventName;if(isObject){iteratee(_eventName,prop.handler,prop.options);}else{iteratee(_eventName,prop,mergeDefaultEventOptions({capture:_capture}));}}}function withOptions(handler,options){process.env.NODE_ENV!=="production"?(0,_warning2.default)(options,'[react-event-listener] Should be specified options in withOptions.'):void 0;return{handler:handler,options:mergeDefaultEventOptions(options)};}var EventListener=function(_Component){(0,_inherits3.default)(EventListener,_Component);function EventListener(){(0,_classCallCheck3.default)(this,EventListener);return(0,_possibleConstructorReturn3.default)(this,(EventListener.__proto__||(0,_getPrototypeOf2.default)(EventListener)).apply(this,arguments));}(0,_createClass3.default)(EventListener,[{key:'componentDidMount',value:function componentDidMount(){this.addListeners();}},{key:'shouldComponentUpdate',value:function shouldComponentUpdate(nextProps){return(0,_reactAddonsShallowCompare2.default)({props:this.props,state:state},nextProps,state);}},{key:'componentWillUpdate',value:function componentWillUpdate(){this.removeListeners();}},{key:'componentDidUpdate',value:function componentDidUpdate(){this.addListeners();}},{key:'componentWillUnmount',value:function componentWillUnmount(){this.removeListeners();}},{key:'addListeners',value:function addListeners(){this.applyListeners(on);}},{key:'removeListeners',value:function removeListeners(){this.applyListeners(off);}},{key:'applyListeners',value:function applyListeners(onOrOff){var target=this.props.target;if(target){var element=target;if(typeof target==='string'){element=window[target];}forEachListener(this.props,onOrOff.bind(null,element));}}},{key:'render',value:function render(){return this.props.children||null;}}]);return EventListener;}(_react.Component);process.env.NODE_ENV!=="production"?EventListener.propTypes={/**
   * You can provide a children too.
   */children:_react.PropTypes.node,/**
   * The DOM target to listen to.
   */target:_react.PropTypes.oneOfType([_react.PropTypes.object,_react.PropTypes.string])}:void 0;exports.default=EventListener;}).call(this,require('_process'));},{"./supports":43,"_process":3,"babel-runtime/core-js/object/assign":347,"babel-runtime/core-js/object/get-prototype-of":350,"babel-runtime/helpers/classCallCheck":355,"babel-runtime/helpers/createClass":356,"babel-runtime/helpers/inherits":358,"babel-runtime/helpers/possibleConstructorReturn":360,"babel-runtime/helpers/typeof":363,"react":225,"react-addons-shallow-compare":76,"warning":343}],43:[function(require,module,exports){'use strict';Object.defineProperty(exports,"__esModule",{value:true});exports.passiveOption=exports.detachEvent=exports.attachEvent=exports.removeEventListener=exports.addEventListener=exports.canUseDOM=undefined;var _defineProperty=require('./define-property');var _defineProperty2=_interopRequireDefault(_defineProperty);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}// Inspired by https://github.com/facebook/fbjs/blob/master/packages/fbjs/src/core/ExecutionEnvironment.js
var canUseDOM=exports.canUseDOM=!!(typeof window!=='undefined'&&window.document&&window.document.createElement);var addEventListener=exports.addEventListener=canUseDOM&&'addEventListener'in window;var removeEventListener=exports.removeEventListener=canUseDOM&&'removeEventListener'in window;// IE8+ Support
var attachEvent=exports.attachEvent=canUseDOM&&'attachEvent'in window;var detachEvent=exports.detachEvent=canUseDOM&&'detachEvent'in window;// Passive options
// Inspired by https://github.com/Modernizr/Modernizr/blob/master/feature-detects/dom/passiveeventlisteners.js
var passiveOption=exports.passiveOption=function(){var cache=null;return function(){if(cache!==null){return cache;}var supportsPassiveOption=false;try{window.addEventListener('test',null,(0,_defineProperty2.default)({},'passive',{get:function get(){supportsPassiveOption=true;}}));}catch(e){}// eslint-disable-line no-empty
cache=supportsPassiveOption;return supportsPassiveOption;}();}();},{"./define-property":41}],44:[function(require,module,exports){(function(process){'use strict';/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * @typechecks
 */var emptyFunction=require('./emptyFunction');/**
 * Upstream version of event listener. Does not take into account specific
 * nature of platform.
 */var EventListener={/**
   * Listen to DOM events during the bubble phase.
   *
   * @param {DOMEventTarget} target DOM element to register listener on.
   * @param {string} eventType Event type, e.g. 'click' or 'mouseover'.
   * @param {function} callback Callback function.
   * @return {object} Object with a `remove` method.
   */listen:function listen(target,eventType,callback){if(target.addEventListener){target.addEventListener(eventType,callback,false);return{remove:function remove(){target.removeEventListener(eventType,callback,false);}};}else if(target.attachEvent){target.attachEvent('on'+eventType,callback);return{remove:function remove(){target.detachEvent('on'+eventType,callback);}};}},/**
   * Listen to DOM events during the capture phase.
   *
   * @param {DOMEventTarget} target DOM element to register listener on.
   * @param {string} eventType Event type, e.g. 'click' or 'mouseover'.
   * @param {function} callback Callback function.
   * @return {object} Object with a `remove` method.
   */capture:function capture(target,eventType,callback){if(target.addEventListener){target.addEventListener(eventType,callback,true);return{remove:function remove(){target.removeEventListener(eventType,callback,true);}};}else{if(process.env.NODE_ENV!=='production'){console.error('Attempted to listen to events during the capture phase on a '+'browser that does not support the capture phase. Your application '+'will not receive some events.');}return{remove:emptyFunction};}},registerDefault:function registerDefault(){}};module.exports=EventListener;}).call(this,require('_process'));},{"./emptyFunction":51,"_process":3}],45:[function(require,module,exports){/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */'use strict';var canUseDOM=!!(typeof window!=='undefined'&&window.document&&window.document.createElement);/**
 * Simple, lightweight module assisting with the detection and context of
 * Worker. Helps avoid circular dependencies and allows code to reason about
 * whether or not they are in a Worker, even if they never include the main
 * `ReactWorker` dependency.
 */var ExecutionEnvironment={canUseDOM:canUseDOM,canUseWorkers:typeof Worker!=='undefined',canUseEventListeners:canUseDOM&&!!(window.addEventListener||window.attachEvent),canUseViewport:canUseDOM&&!!window.screen,isInWorker:!canUseDOM// For now, this is true - might change in the future.
};module.exports=ExecutionEnvironment;},{}],46:[function(require,module,exports){"use strict";/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @typechecks
 */var _hyphenPattern=/-(.)/g;/**
 * Camelcases a hyphenated string, for example:
 *
 *   > camelize('background-color')
 *   < "backgroundColor"
 *
 * @param {string} string
 * @return {string}
 */function camelize(string){return string.replace(_hyphenPattern,function(_,character){return character.toUpperCase();});}module.exports=camelize;},{}],47:[function(require,module,exports){/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @typechecks
 */'use strict';var camelize=require('./camelize');var msPattern=/^-ms-/;/**
 * Camelcases a hyphenated CSS property name, for example:
 *
 *   > camelizeStyleName('background-color')
 *   < "backgroundColor"
 *   > camelizeStyleName('-moz-transition')
 *   < "MozTransition"
 *   > camelizeStyleName('-ms-transition')
 *   < "msTransition"
 *
 * As Andi Smith suggests
 * (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
 * is converted to lowercase `ms`.
 *
 * @param {string} string
 * @return {string}
 */function camelizeStyleName(string){return camelize(string.replace(msPattern,'ms-'));}module.exports=camelizeStyleName;},{"./camelize":46}],48:[function(require,module,exports){'use strict';/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * 
 */var isTextNode=require('./isTextNode');/*eslint-disable no-bitwise *//**
 * Checks if a given DOM node contains or is another DOM node.
 */function containsNode(outerNode,innerNode){if(!outerNode||!innerNode){return false;}else if(outerNode===innerNode){return true;}else if(isTextNode(outerNode)){return false;}else if(isTextNode(innerNode)){return containsNode(outerNode,innerNode.parentNode);}else if('contains'in outerNode){return outerNode.contains(innerNode);}else if(outerNode.compareDocumentPosition){return!!(outerNode.compareDocumentPosition(innerNode)&16);}else{return false;}}module.exports=containsNode;},{"./isTextNode":61}],49:[function(require,module,exports){(function(process){'use strict';/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @typechecks
 */var invariant=require('./invariant');/**
 * Convert array-like objects to arrays.
 *
 * This API assumes the caller knows the contents of the data type. For less
 * well defined inputs use createArrayFromMixed.
 *
 * @param {object|function|filelist} obj
 * @return {array}
 */function toArray(obj){var length=obj.length;// Some browsers builtin objects can report typeof 'function' (e.g. NodeList
// in old versions of Safari).
!(!Array.isArray(obj)&&((typeof obj==="undefined"?"undefined":_typeof4(obj))==='object'||typeof obj==='function'))?process.env.NODE_ENV!=='production'?invariant(false,'toArray: Array-like object expected'):invariant(false):void 0;!(typeof length==='number')?process.env.NODE_ENV!=='production'?invariant(false,'toArray: Object needs a length property'):invariant(false):void 0;!(length===0||length-1 in obj)?process.env.NODE_ENV!=='production'?invariant(false,'toArray: Object should have keys for indices'):invariant(false):void 0;!(typeof obj.callee!=='function')?process.env.NODE_ENV!=='production'?invariant(false,'toArray: Object can\'t be `arguments`. Use rest params '+'(function(...args) {}) or Array.from() instead.'):invariant(false):void 0;// Old IE doesn't give collections access to hasOwnProperty. Assume inputs
// without method will throw during the slice call and skip straight to the
// fallback.
if(obj.hasOwnProperty){try{return Array.prototype.slice.call(obj);}catch(e){// IE < 9 does not support Array#slice on collections objects
}}// Fall back to copying key by key. This assumes all keys have a value,
// so will not preserve sparsely populated inputs.
var ret=Array(length);for(var ii=0;ii<length;ii++){ret[ii]=obj[ii];}return ret;}/**
 * Perform a heuristic test to determine if an object is "array-like".
 *
 *   A monk asked Joshu, a Zen master, "Has a dog Buddha nature?"
 *   Joshu replied: "Mu."
 *
 * This function determines if its argument has "array nature": it returns
 * true if the argument is an actual array, an `arguments' object, or an
 * HTMLCollection (e.g. node.childNodes or node.getElementsByTagName()).
 *
 * It will return false for other array-like objects like Filelist.
 *
 * @param {*} obj
 * @return {boolean}
 */function hasArrayNature(obj){return(// not null/false
!!obj&&(// arrays are objects, NodeLists are functions in Safari
(typeof obj==="undefined"?"undefined":_typeof4(obj))=='object'||typeof obj=='function')&&// quacks like an array
'length'in obj&&// not window
!('setInterval'in obj)&&// no DOM node should be considered an array-like
// a 'select' element has 'length' and 'item' properties on IE8
typeof obj.nodeType!='number'&&(// a real array
Array.isArray(obj)||// arguments
'callee'in obj||// HTMLCollection/NodeList
'item'in obj));}/**
 * Ensure that the argument is an array by wrapping it in an array if it is not.
 * Creates a copy of the argument if it is already an array.
 *
 * This is mostly useful idiomatically:
 *
 *   var createArrayFromMixed = require('createArrayFromMixed');
 *
 *   function takesOneOrMoreThings(things) {
 *     things = createArrayFromMixed(things);
 *     ...
 *   }
 *
 * This allows you to treat `things' as an array, but accept scalars in the API.
 *
 * If you need to convert an array-like object, like `arguments`, into an array
 * use toArray instead.
 *
 * @param {*} obj
 * @return {array}
 */function createArrayFromMixed(obj){if(!hasArrayNature(obj)){return[obj];}else if(Array.isArray(obj)){return obj.slice();}else{return toArray(obj);}}module.exports=createArrayFromMixed;}).call(this,require('_process'));},{"./invariant":59,"_process":3}],50:[function(require,module,exports){(function(process){'use strict';/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @typechecks
 *//*eslint-disable fb-www/unsafe-html*/var ExecutionEnvironment=require('./ExecutionEnvironment');var createArrayFromMixed=require('./createArrayFromMixed');var getMarkupWrap=require('./getMarkupWrap');var invariant=require('./invariant');/**
 * Dummy container used to render all markup.
 */var dummyNode=ExecutionEnvironment.canUseDOM?document.createElement('div'):null;/**
 * Pattern used by `getNodeName`.
 */var nodeNamePattern=/^\s*<(\w+)/;/**
 * Extracts the `nodeName` of the first element in a string of markup.
 *
 * @param {string} markup String of markup.
 * @return {?string} Node name of the supplied markup.
 */function getNodeName(markup){var nodeNameMatch=markup.match(nodeNamePattern);return nodeNameMatch&&nodeNameMatch[1].toLowerCase();}/**
 * Creates an array containing the nodes rendered from the supplied markup. The
 * optionally supplied `handleScript` function will be invoked once for each
 * <script> element that is rendered. If no `handleScript` function is supplied,
 * an exception is thrown if any <script> elements are rendered.
 *
 * @param {string} markup A string of valid HTML markup.
 * @param {?function} handleScript Invoked once for each rendered <script>.
 * @return {array<DOMElement|DOMTextNode>} An array of rendered nodes.
 */function createNodesFromMarkup(markup,handleScript){var node=dummyNode;!!!dummyNode?process.env.NODE_ENV!=='production'?invariant(false,'createNodesFromMarkup dummy not initialized'):invariant(false):void 0;var nodeName=getNodeName(markup);var wrap=nodeName&&getMarkupWrap(nodeName);if(wrap){node.innerHTML=wrap[1]+markup+wrap[2];var wrapDepth=wrap[0];while(wrapDepth--){node=node.lastChild;}}else{node.innerHTML=markup;}var scripts=node.getElementsByTagName('script');if(scripts.length){!handleScript?process.env.NODE_ENV!=='production'?invariant(false,'createNodesFromMarkup(...): Unexpected <script> element rendered.'):invariant(false):void 0;createArrayFromMixed(scripts).forEach(handleScript);}var nodes=Array.from(node.childNodes);while(node.lastChild){node.removeChild(node.lastChild);}return nodes;}module.exports=createNodesFromMarkup;}).call(this,require('_process'));},{"./ExecutionEnvironment":45,"./createArrayFromMixed":49,"./getMarkupWrap":55,"./invariant":59,"_process":3}],51:[function(require,module,exports){"use strict";/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * 
 */function makeEmptyFunction(arg){return function(){return arg;};}/**
 * This function accepts and discards inputs; it has no side effects. This is
 * primarily useful idiomatically for overridable function endpoints which
 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
 */var emptyFunction=function emptyFunction(){};emptyFunction.thatReturns=makeEmptyFunction;emptyFunction.thatReturnsFalse=makeEmptyFunction(false);emptyFunction.thatReturnsTrue=makeEmptyFunction(true);emptyFunction.thatReturnsNull=makeEmptyFunction(null);emptyFunction.thatReturnsThis=function(){return this;};emptyFunction.thatReturnsArgument=function(arg){return arg;};module.exports=emptyFunction;},{}],52:[function(require,module,exports){(function(process){/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */'use strict';var emptyObject={};if(process.env.NODE_ENV!=='production'){Object.freeze(emptyObject);}module.exports=emptyObject;}).call(this,require('_process'));},{"_process":3}],53:[function(require,module,exports){/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */'use strict';/**
 * @param {DOMElement} node input/textarea to focus
 */function focusNode(node){// IE8 can throw "Can't move focus to the control because it is invisible,
// not enabled, or of a type that does not accept the focus." for all kinds of
// reasons that are too expensive and fragile to test.
try{node.focus();}catch(e){}}module.exports=focusNode;},{}],54:[function(require,module,exports){'use strict';/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @typechecks
 *//* eslint-disable fb-www/typeof-undefined *//**
 * Same as document.activeElement but wraps in a try-catch block. In IE it is
 * not safe to call document.activeElement if there is nothing focused.
 *
 * The activeElement will be null only if the document or document body is not
 * yet defined.
 */function getActiveElement()/*?DOMElement*/{if(typeof document==='undefined'){return null;}try{return document.activeElement||document.body;}catch(e){return document.body;}}module.exports=getActiveElement;},{}],55:[function(require,module,exports){(function(process){'use strict';/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 *//*eslint-disable fb-www/unsafe-html */var ExecutionEnvironment=require('./ExecutionEnvironment');var invariant=require('./invariant');/**
 * Dummy container used to detect which wraps are necessary.
 */var dummyNode=ExecutionEnvironment.canUseDOM?document.createElement('div'):null;/**
 * Some browsers cannot use `innerHTML` to render certain elements standalone,
 * so we wrap them, render the wrapped nodes, then extract the desired node.
 *
 * In IE8, certain elements cannot render alone, so wrap all elements ('*').
 */var shouldWrap={};var selectWrap=[1,'<select multiple="true">','</select>'];var tableWrap=[1,'<table>','</table>'];var trWrap=[3,'<table><tbody><tr>','</tr></tbody></table>'];var svgWrap=[1,'<svg xmlns="http://www.w3.org/2000/svg">','</svg>'];var markupWrap={'*':[1,'?<div>','</div>'],'area':[1,'<map>','</map>'],'col':[2,'<table><tbody></tbody><colgroup>','</colgroup></table>'],'legend':[1,'<fieldset>','</fieldset>'],'param':[1,'<object>','</object>'],'tr':[2,'<table><tbody>','</tbody></table>'],'optgroup':selectWrap,'option':selectWrap,'caption':tableWrap,'colgroup':tableWrap,'tbody':tableWrap,'tfoot':tableWrap,'thead':tableWrap,'td':trWrap,'th':trWrap};// Initialize the SVG elements since we know they'll always need to be wrapped
// consistently. If they are created inside a <div> they will be initialized in
// the wrong namespace (and will not display).
var svgElements=['circle','clipPath','defs','ellipse','g','image','line','linearGradient','mask','path','pattern','polygon','polyline','radialGradient','rect','stop','text','tspan'];svgElements.forEach(function(nodeName){markupWrap[nodeName]=svgWrap;shouldWrap[nodeName]=true;});/**
 * Gets the markup wrap configuration for the supplied `nodeName`.
 *
 * NOTE: This lazily detects which wraps are necessary for the current browser.
 *
 * @param {string} nodeName Lowercase `nodeName`.
 * @return {?array} Markup wrap configuration, if applicable.
 */function getMarkupWrap(nodeName){!!!dummyNode?process.env.NODE_ENV!=='production'?invariant(false,'Markup wrapping node not initialized'):invariant(false):void 0;if(!markupWrap.hasOwnProperty(nodeName)){nodeName='*';}if(!shouldWrap.hasOwnProperty(nodeName)){if(nodeName==='*'){dummyNode.innerHTML='<link />';}else{dummyNode.innerHTML='<'+nodeName+'></'+nodeName+'>';}shouldWrap[nodeName]=!dummyNode.firstChild;}return shouldWrap[nodeName]?markupWrap[nodeName]:null;}module.exports=getMarkupWrap;}).call(this,require('_process'));},{"./ExecutionEnvironment":45,"./invariant":59,"_process":3}],56:[function(require,module,exports){/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @typechecks
 */'use strict';/**
 * Gets the scroll position of the supplied element or window.
 *
 * The return values are unbounded, unlike `getScrollPosition`. This means they
 * may be negative or exceed the element boundaries (which is possible using
 * inertial scrolling).
 *
 * @param {DOMWindow|DOMElement} scrollable
 * @return {object} Map with `x` and `y` keys.
 */function getUnboundedScrollPosition(scrollable){if(scrollable===window){return{x:window.pageXOffset||document.documentElement.scrollLeft,y:window.pageYOffset||document.documentElement.scrollTop};}return{x:scrollable.scrollLeft,y:scrollable.scrollTop};}module.exports=getUnboundedScrollPosition;},{}],57:[function(require,module,exports){'use strict';/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @typechecks
 */var _uppercasePattern=/([A-Z])/g;/**
 * Hyphenates a camelcased string, for example:
 *
 *   > hyphenate('backgroundColor')
 *   < "background-color"
 *
 * For CSS style names, use `hyphenateStyleName` instead which works properly
 * with all vendor prefixes, including `ms`.
 *
 * @param {string} string
 * @return {string}
 */function hyphenate(string){return string.replace(_uppercasePattern,'-$1').toLowerCase();}module.exports=hyphenate;},{}],58:[function(require,module,exports){/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @typechecks
 */'use strict';var hyphenate=require('./hyphenate');var msPattern=/^ms-/;/**
 * Hyphenates a camelcased CSS property name, for example:
 *
 *   > hyphenateStyleName('backgroundColor')
 *   < "background-color"
 *   > hyphenateStyleName('MozTransition')
 *   < "-moz-transition"
 *   > hyphenateStyleName('msTransition')
 *   < "-ms-transition"
 *
 * As Modernizr suggests (http://modernizr.com/docs/#prefixed), an `ms` prefix
 * is converted to `-ms-`.
 *
 * @param {string} string
 * @return {string}
 */function hyphenateStyleName(string){return hyphenate(string).replace(msPattern,'-ms-');}module.exports=hyphenateStyleName;},{"./hyphenate":57}],59:[function(require,module,exports){(function(process){/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */'use strict';/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */function invariant(condition,format,a,b,c,d,e,f){if(process.env.NODE_ENV!=='production'){if(format===undefined){throw new Error('invariant requires an error message argument');}}if(!condition){var error;if(format===undefined){error=new Error('Minified exception occurred; use the non-minified dev environment '+'for the full error message and additional helpful warnings.');}else{var args=[a,b,c,d,e,f];var argIndex=0;error=new Error(format.replace(/%s/g,function(){return args[argIndex++];}));error.name='Invariant Violation';}error.framesToPop=1;// we don't care about invariant's own frame
throw error;}}module.exports=invariant;}).call(this,require('_process'));},{"_process":3}],60:[function(require,module,exports){'use strict';/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @typechecks
 *//**
 * @param {*} object The object to check.
 * @return {boolean} Whether or not the object is a DOM node.
 */function isNode(object){return!!(object&&(typeof Node==='function'?object instanceof Node:(typeof object==="undefined"?"undefined":_typeof4(object))==='object'&&typeof object.nodeType==='number'&&typeof object.nodeName==='string'));}module.exports=isNode;},{}],61:[function(require,module,exports){'use strict';/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @typechecks
 */var isNode=require('./isNode');/**
 * @param {*} object The object to check.
 * @return {boolean} Whether or not the object is a DOM text node.
 */function isTextNode(object){return isNode(object)&&object.nodeType==3;}module.exports=isTextNode;},{"./isNode":60}],62:[function(require,module,exports){(function(process){/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @typechecks static-only
 */'use strict';var invariant=require('./invariant');/**
 * Constructs an enumeration with keys equal to their value.
 *
 * For example:
 *
 *   var COLORS = keyMirror({blue: null, red: null});
 *   var myColor = COLORS.blue;
 *   var isColorValid = !!COLORS[myColor];
 *
 * The last line could not be performed if the values of the generated enum were
 * not equal to their keys.
 *
 *   Input:  {key1: val1, key2: val2}
 *   Output: {key1: key1, key2: key2}
 *
 * @param {object} obj
 * @return {object}
 */var keyMirror=function keyMirror(obj){var ret={};var key;!(obj instanceof Object&&!Array.isArray(obj))?process.env.NODE_ENV!=='production'?invariant(false,'keyMirror(...): Argument must be an object.'):invariant(false):void 0;for(key in obj){if(!obj.hasOwnProperty(key)){continue;}ret[key]=key;}return ret;};module.exports=keyMirror;}).call(this,require('_process'));},{"./invariant":59,"_process":3}],63:[function(require,module,exports){"use strict";/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 *//**
 * Allows extraction of a minified key. Let's the build system minify keys
 * without losing the ability to dynamically use key strings as values
 * themselves. Pass in an object with a single key/val pair and it will return
 * you the string key of that single record. Suppose you want to grab the
 * value for a key 'className' inside of an object. Key/val minification may
 * have aliased that key to be 'xa12'. keyOf({className: null}) will return
 * 'xa12' in that case. Resolve keys you want to use once at startup time, then
 * reuse those resolutions.
 */var keyOf=function keyOf(oneKeyObj){var key;for(key in oneKeyObj){if(!oneKeyObj.hasOwnProperty(key)){continue;}return key;}return null;};module.exports=keyOf;},{}],64:[function(require,module,exports){/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * 
 * @typechecks static-only
 */'use strict';/**
 * Memoizes the return value of a function that accepts one string argument.
 */function memoizeStringOnly(callback){var cache={};return function(string){if(!cache.hasOwnProperty(string)){cache[string]=callback.call(this,string);}return cache[string];};}module.exports=memoizeStringOnly;},{}],65:[function(require,module,exports){/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @typechecks
 */'use strict';var ExecutionEnvironment=require('./ExecutionEnvironment');var performance;if(ExecutionEnvironment.canUseDOM){performance=window.performance||window.msPerformance||window.webkitPerformance;}module.exports=performance||{};},{"./ExecutionEnvironment":45}],66:[function(require,module,exports){'use strict';/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @typechecks
 */var performance=require('./performance');var performanceNow;/**
 * Detect if we can use `window.performance.now()` and gracefully fallback to
 * `Date.now()` if it doesn't exist. We need to support Firefox < 15 for now
 * because of Facebook's testing infrastructure.
 */if(performance.now){performanceNow=function performanceNow(){return performance.now();};}else{performanceNow=function performanceNow(){return Date.now();};}module.exports=performanceNow;},{"./performance":65}],67:[function(require,module,exports){/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @typechecks
 * 
 *//*eslint-disable no-self-compare */'use strict';var hasOwnProperty=Object.prototype.hasOwnProperty;/**
 * inlined Object.is polyfill to avoid requiring consumers ship their own
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
 */function is(x,y){// SameValue algorithm
if(x===y){// Steps 1-5, 7-10
// Steps 6.b-6.e: +0 != -0
// Added the nonzero y check to make Flow happy, but it is redundant
return x!==0||y!==0||1/x===1/y;}else{// Step 6.a: NaN == NaN
return x!==x&&y!==y;}}/**
 * Performs equality by iterating through keys on an object and returning false
 * when any key has values which are not strictly equal between the arguments.
 * Returns true when the values of all keys are strictly equal.
 */function shallowEqual(objA,objB){if(is(objA,objB)){return true;}if((typeof objA==="undefined"?"undefined":_typeof4(objA))!=='object'||objA===null||(typeof objB==="undefined"?"undefined":_typeof4(objB))!=='object'||objB===null){return false;}var keysA=Object.keys(objA);var keysB=Object.keys(objB);if(keysA.length!==keysB.length){return false;}// Test for A's keys different from B.
for(var i=0;i<keysA.length;i++){if(!hasOwnProperty.call(objB,keysA[i])||!is(objA[keysA[i]],objB[keysA[i]])){return false;}}return true;}module.exports=shallowEqual;},{}],68:[function(require,module,exports){(function(process){/**
 * Copyright 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */'use strict';var emptyFunction=require('./emptyFunction');/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */var warning=emptyFunction;if(process.env.NODE_ENV!=='production'){(function(){var printWarning=function printWarning(format){for(var _len=arguments.length,args=Array(_len>1?_len-1:0),_key=1;_key<_len;_key++){args[_key-1]=arguments[_key];}var argIndex=0;var message='Warning: '+format.replace(/%s/g,function(){return args[argIndex++];});if(typeof console!=='undefined'){console.error(message);}try{// --- Welcome to debugging React ---
// This error was thrown as a convenience so that you can use this stack
// to find the callsite that caused this warning to fire.
throw new Error(message);}catch(x){}};warning=function warning(condition,format){if(format===undefined){throw new Error('`warning(condition, format, ...args)` requires a warning '+'message argument');}if(format.indexOf('Failed Composite propType: ')===0){return;// Ignore CompositeComponent proptype check.
}if(!condition){for(var _len2=arguments.length,args=Array(_len2>2?_len2-2:0),_key2=2;_key2<_len2;_key2++){args[_key2-2]=arguments[_key2];}printWarning.apply(undefined,[format].concat(args));}};})();}module.exports=warning;}).call(this,require('_process'));},{"./emptyFunction":51,"_process":3}],69:[function(require,module,exports){/**
 * Copyright 2013-2014 Facebook, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * @providesModule TapEventPlugin
 * @typechecks static-only
 */"use strict";var EventConstants=require('react/lib/EventConstants');var EventPluginUtils=require('react/lib/EventPluginUtils');var EventPropagators=require('react/lib/EventPropagators');var SyntheticUIEvent=require('react/lib/SyntheticUIEvent');var TouchEventUtils=require('./TouchEventUtils');var ViewportMetrics=require('react/lib/ViewportMetrics');var keyOf=require('fbjs/lib/keyOf');var topLevelTypes=EventConstants.topLevelTypes;var isStartish=EventPluginUtils.isStartish;var isEndish=EventPluginUtils.isEndish;var isTouch=function isTouch(topLevelType){var touchTypes=[topLevelTypes.topTouchCancel,topLevelTypes.topTouchEnd,topLevelTypes.topTouchStart,topLevelTypes.topTouchMove];return touchTypes.indexOf(topLevelType)>=0;};/**
 * Number of pixels that are tolerated in between a `touchStart` and `touchEnd`
 * in order to still be considered a 'tap' event.
 */var tapMoveThreshold=10;var ignoreMouseThreshold=750;var startCoords={x:null,y:null};var lastTouchEvent=null;var Axis={x:{page:'pageX',client:'clientX',envScroll:'currentPageScrollLeft'},y:{page:'pageY',client:'clientY',envScroll:'currentPageScrollTop'}};function getAxisCoordOfEvent(axis,nativeEvent){var singleTouch=TouchEventUtils.extractSingleTouch(nativeEvent);if(singleTouch){return singleTouch[axis.page];}return axis.page in nativeEvent?nativeEvent[axis.page]:nativeEvent[axis.client]+ViewportMetrics[axis.envScroll];}function getDistance(coords,nativeEvent){var pageX=getAxisCoordOfEvent(Axis.x,nativeEvent);var pageY=getAxisCoordOfEvent(Axis.y,nativeEvent);return Math.pow(Math.pow(pageX-coords.x,2)+Math.pow(pageY-coords.y,2),0.5);}var touchEvents=[topLevelTypes.topTouchStart,topLevelTypes.topTouchCancel,topLevelTypes.topTouchEnd,topLevelTypes.topTouchMove];var dependencies=[topLevelTypes.topMouseDown,topLevelTypes.topMouseMove,topLevelTypes.topMouseUp].concat(touchEvents);var eventTypes={touchTap:{phasedRegistrationNames:{bubbled:keyOf({onTouchTap:null}),captured:keyOf({onTouchTapCapture:null})},dependencies:dependencies}};var now=function(){if(Date.now){return Date.now;}else{// IE8 support: http://stackoverflow.com/questions/9430357/please-explain-why-and-how-new-date-works-as-workaround-for-date-now-in
return function(){return+new Date();};}}();function createTapEventPlugin(shouldRejectClick){return{tapMoveThreshold:tapMoveThreshold,ignoreMouseThreshold:ignoreMouseThreshold,eventTypes:eventTypes,/**
     * @param {string} topLevelType Record from `EventConstants`.
     * @param {DOMEventTarget} targetInst The listening component root node.
     * @param {object} nativeEvent Native browser event.
     * @return {*} An accumulation of synthetic events.
     * @see {EventPluginHub.extractEvents}
     */extractEvents:function extractEvents(topLevelType,targetInst,nativeEvent,nativeEventTarget){if(isTouch(topLevelType)){lastTouchEvent=now();}else{if(shouldRejectClick(lastTouchEvent,now())){return null;}}if(!isStartish(topLevelType)&&!isEndish(topLevelType)){return null;}var event=null;var distance=getDistance(startCoords,nativeEvent);if(isEndish(topLevelType)&&distance<tapMoveThreshold){event=SyntheticUIEvent.getPooled(eventTypes.touchTap,targetInst,nativeEvent,nativeEventTarget);}if(isStartish(topLevelType)){startCoords.x=getAxisCoordOfEvent(Axis.x,nativeEvent);startCoords.y=getAxisCoordOfEvent(Axis.y,nativeEvent);}else if(isEndish(topLevelType)){startCoords.x=0;startCoords.y=0;}EventPropagators.accumulateTwoPhaseDispatches(event);return event;}};}module.exports=createTapEventPlugin;},{"./TouchEventUtils":70,"fbjs/lib/keyOf":38,"react/lib/EventConstants":94,"react/lib/EventPluginUtils":97,"react/lib/EventPropagators":98,"react/lib/SyntheticUIEvent":189,"react/lib/ViewportMetrics":192}],70:[function(require,module,exports){/**
 * Copyright 2013-2014 Facebook, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * @providesModule TouchEventUtils
 */var TouchEventUtils={/**
   * Utility function for common case of extracting out the primary touch from a
   * touch event.
   * - `touchEnd` events usually do not have the `touches` property.
   *   http://stackoverflow.com/questions/3666929/
   *   mobile-sarai-touchend-event-not-firing-when-last-touch-is-removed
   *
   * @param {Event} nativeEvent Native event that may or may not be a touch.
   * @return {TouchesObject?} an object with pageX and pageY or null.
   */extractSingleTouch:function extractSingleTouch(nativeEvent){var touches=nativeEvent.touches;var changedTouches=nativeEvent.changedTouches;var hasTouches=touches&&touches.length>0;var hasChangedTouches=changedTouches&&changedTouches.length>0;return!hasTouches&&hasChangedTouches?changedTouches[0]:hasTouches?touches[0]:nativeEvent;}};module.exports=TouchEventUtils;},{}],71:[function(require,module,exports){module.exports=function(lastTouchEvent,clickTimestamp){if(lastTouchEvent&&clickTimestamp-lastTouchEvent<750){return true;}};},{}],72:[function(require,module,exports){(function(process){var invariant=require('fbjs/lib/invariant');var defaultClickRejectionStrategy=require('./defaultClickRejectionStrategy');var alreadyInjected=false;module.exports=function injectTapEventPlugin(strategyOverrides){strategyOverrides=strategyOverrides||{};var shouldRejectClick=strategyOverrides.shouldRejectClick||defaultClickRejectionStrategy;if(process.env.NODE_ENV!=='production'){invariant(!alreadyInjected,'injectTapEventPlugin(): Can only be called once per application lifecycle.\n\n\
It is recommended to call injectTapEventPlugin() just before you call \
ReactDOM.render(). If you are using an external library which calls injectTapEventPlugin() \
itself, please contact the maintainer as it shouldn\'t be called in library code and \
should be injected by the application.');}alreadyInjected=true;require('react/lib/EventPluginHub').injection.injectEventPluginsByName({'TapEventPlugin':require('./TapEventPlugin.js')(shouldRejectClick)});};}).call(this,require('_process'));},{"./TapEventPlugin.js":69,"./defaultClickRejectionStrategy":71,"_process":3,"fbjs/lib/invariant":37,"react/lib/EventPluginHub":95}],73:[function(require,module,exports){'use strict';var uppercasePattern=/[A-Z]/g;var msPattern=/^ms-/;var cache={};function hyphenateStyleName(string){return string in cache?cache[string]:cache[string]=string.replace(uppercasePattern,'-$&').toLowerCase().replace(msPattern,'-ms-');}module.exports=hyphenateStyleName;},{}],74:[function(require,module,exports){/*!
 * Bowser - a browser detector
 * https://github.com/ded/bowser
 * MIT License | (c) Dustin Diaz 2015
 */!function(name,definition){if(typeof module!='undefined'&&module.exports)module.exports=definition();else if(typeof define=='function'&&define.amd)define(name,definition);else this[name]=definition();}('bowser',function(){/**
    * See useragents.js for examples of navigator.userAgent
    */var t=true;function detect(ua){function getFirstMatch(regex){var match=ua.match(regex);return match&&match.length>1&&match[1]||'';}function getSecondMatch(regex){var match=ua.match(regex);return match&&match.length>1&&match[2]||'';}var iosdevice=getFirstMatch(/(ipod|iphone|ipad)/i).toLowerCase(),likeAndroid=/like android/i.test(ua),android=!likeAndroid&&/android/i.test(ua),nexusMobile=/nexus\s*[0-6]\s*/i.test(ua),nexusTablet=!nexusMobile&&/nexus\s*[0-9]+/i.test(ua),chromeos=/CrOS/.test(ua),silk=/silk/i.test(ua),sailfish=/sailfish/i.test(ua),tizen=/tizen/i.test(ua),webos=/(web|hpw)os/i.test(ua),windowsphone=/windows phone/i.test(ua),samsungBrowser=/SamsungBrowser/i.test(ua),windows=!windowsphone&&/windows/i.test(ua),mac=!iosdevice&&!silk&&/macintosh/i.test(ua),linux=!android&&!sailfish&&!tizen&&!webos&&/linux/i.test(ua),edgeVersion=getFirstMatch(/edge\/(\d+(\.\d+)?)/i),versionIdentifier=getFirstMatch(/version\/(\d+(\.\d+)?)/i),tablet=/tablet/i.test(ua),mobile=!tablet&&/[^-]mobi/i.test(ua),xbox=/xbox/i.test(ua),result;if(/opera/i.test(ua)){//  an old Opera
result={name:'Opera',opera:t,version:versionIdentifier||getFirstMatch(/(?:opera|opr|opios)[\s\/](\d+(\.\d+)?)/i)};}else if(/opr|opios/i.test(ua)){// a new Opera
result={name:'Opera',opera:t,version:getFirstMatch(/(?:opr|opios)[\s\/](\d+(\.\d+)?)/i)||versionIdentifier};}else if(/SamsungBrowser/i.test(ua)){result={name:'Samsung Internet for Android',samsungBrowser:t,version:versionIdentifier||getFirstMatch(/(?:SamsungBrowser)[\s\/](\d+(\.\d+)?)/i)};}else if(/coast/i.test(ua)){result={name:'Opera Coast',coast:t,version:versionIdentifier||getFirstMatch(/(?:coast)[\s\/](\d+(\.\d+)?)/i)};}else if(/yabrowser/i.test(ua)){result={name:'Yandex Browser',yandexbrowser:t,version:versionIdentifier||getFirstMatch(/(?:yabrowser)[\s\/](\d+(\.\d+)?)/i)};}else if(/ucbrowser/i.test(ua)){result={name:'UC Browser',ucbrowser:t,version:getFirstMatch(/(?:ucbrowser)[\s\/](\d+(?:\.\d+)+)/i)};}else if(/mxios/i.test(ua)){result={name:'Maxthon',maxthon:t,version:getFirstMatch(/(?:mxios)[\s\/](\d+(?:\.\d+)+)/i)};}else if(/epiphany/i.test(ua)){result={name:'Epiphany',epiphany:t,version:getFirstMatch(/(?:epiphany)[\s\/](\d+(?:\.\d+)+)/i)};}else if(/puffin/i.test(ua)){result={name:'Puffin',puffin:t,version:getFirstMatch(/(?:puffin)[\s\/](\d+(?:\.\d+)?)/i)};}else if(/sleipnir/i.test(ua)){result={name:'Sleipnir',sleipnir:t,version:getFirstMatch(/(?:sleipnir)[\s\/](\d+(?:\.\d+)+)/i)};}else if(/k-meleon/i.test(ua)){result={name:'K-Meleon',kMeleon:t,version:getFirstMatch(/(?:k-meleon)[\s\/](\d+(?:\.\d+)+)/i)};}else if(windowsphone){result={name:'Windows Phone',windowsphone:t};if(edgeVersion){result.msedge=t;result.version=edgeVersion;}else{result.msie=t;result.version=getFirstMatch(/iemobile\/(\d+(\.\d+)?)/i);}}else if(/msie|trident/i.test(ua)){result={name:'Internet Explorer',msie:t,version:getFirstMatch(/(?:msie |rv:)(\d+(\.\d+)?)/i)};}else if(chromeos){result={name:'Chrome',chromeos:t,chromeBook:t,chrome:t,version:getFirstMatch(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)};}else if(/chrome.+? edge/i.test(ua)){result={name:'Microsoft Edge',msedge:t,version:edgeVersion};}else if(/vivaldi/i.test(ua)){result={name:'Vivaldi',vivaldi:t,version:getFirstMatch(/vivaldi\/(\d+(\.\d+)?)/i)||versionIdentifier};}else if(sailfish){result={name:'Sailfish',sailfish:t,version:getFirstMatch(/sailfish\s?browser\/(\d+(\.\d+)?)/i)};}else if(/seamonkey\//i.test(ua)){result={name:'SeaMonkey',seamonkey:t,version:getFirstMatch(/seamonkey\/(\d+(\.\d+)?)/i)};}else if(/firefox|iceweasel|fxios/i.test(ua)){result={name:'Firefox',firefox:t,version:getFirstMatch(/(?:firefox|iceweasel|fxios)[ \/](\d+(\.\d+)?)/i)};if(/\((mobile|tablet);[^\)]*rv:[\d\.]+\)/i.test(ua)){result.firefoxos=t;}}else if(silk){result={name:'Amazon Silk',silk:t,version:getFirstMatch(/silk\/(\d+(\.\d+)?)/i)};}else if(/phantom/i.test(ua)){result={name:'PhantomJS',phantom:t,version:getFirstMatch(/phantomjs\/(\d+(\.\d+)?)/i)};}else if(/slimerjs/i.test(ua)){result={name:'SlimerJS',slimer:t,version:getFirstMatch(/slimerjs\/(\d+(\.\d+)?)/i)};}else if(/blackberry|\bbb\d+/i.test(ua)||/rim\stablet/i.test(ua)){result={name:'BlackBerry',blackberry:t,version:versionIdentifier||getFirstMatch(/blackberry[\d]+\/(\d+(\.\d+)?)/i)};}else if(webos){result={name:'WebOS',webos:t,version:versionIdentifier||getFirstMatch(/w(?:eb)?osbrowser\/(\d+(\.\d+)?)/i)};/touchpad\//i.test(ua)&&(result.touchpad=t);}else if(/bada/i.test(ua)){result={name:'Bada',bada:t,version:getFirstMatch(/dolfin\/(\d+(\.\d+)?)/i)};}else if(tizen){result={name:'Tizen',tizen:t,version:getFirstMatch(/(?:tizen\s?)?browser\/(\d+(\.\d+)?)/i)||versionIdentifier};}else if(/qupzilla/i.test(ua)){result={name:'QupZilla',qupzilla:t,version:getFirstMatch(/(?:qupzilla)[\s\/](\d+(?:\.\d+)+)/i)||versionIdentifier};}else if(/chromium/i.test(ua)){result={name:'Chromium',chromium:t,version:getFirstMatch(/(?:chromium)[\s\/](\d+(?:\.\d+)?)/i)||versionIdentifier};}else if(/chrome|crios|crmo/i.test(ua)){result={name:'Chrome',chrome:t,version:getFirstMatch(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)};}else if(android){result={name:'Android',version:versionIdentifier};}else if(/safari|applewebkit/i.test(ua)){result={name:'Safari',safari:t};if(versionIdentifier){result.version=versionIdentifier;}}else if(iosdevice){result={name:iosdevice=='iphone'?'iPhone':iosdevice=='ipad'?'iPad':'iPod'};// WTF: version is not part of user agent in web apps
if(versionIdentifier){result.version=versionIdentifier;}}else if(/googlebot/i.test(ua)){result={name:'Googlebot',googlebot:t,version:getFirstMatch(/googlebot\/(\d+(\.\d+))/i)||versionIdentifier};}else{result={name:getFirstMatch(/^(.*)\/(.*) /),version:getSecondMatch(/^(.*)\/(.*) /)};}// set webkit or gecko flag for browsers based on these engines
if(!result.msedge&&/(apple)?webkit/i.test(ua)){if(/(apple)?webkit\/537\.36/i.test(ua)){result.name=result.name||"Blink";result.blink=t;}else{result.name=result.name||"Webkit";result.webkit=t;}if(!result.version&&versionIdentifier){result.version=versionIdentifier;}}else if(!result.opera&&/gecko\//i.test(ua)){result.name=result.name||"Gecko";result.gecko=t;result.version=result.version||getFirstMatch(/gecko\/(\d+(\.\d+)?)/i);}// set OS flags for platforms that have multiple browsers
if(!result.msedge&&(android||result.silk)){result.android=t;}else if(iosdevice){result[iosdevice]=t;result.ios=t;}else if(mac){result.mac=t;}else if(xbox){result.xbox=t;}else if(windows){result.windows=t;}else if(linux){result.linux=t;}// OS version extraction
var osVersion='';if(result.windowsphone){osVersion=getFirstMatch(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i);}else if(iosdevice){osVersion=getFirstMatch(/os (\d+([_\s]\d+)*) like mac os x/i);osVersion=osVersion.replace(/[_\s]/g,'.');}else if(android){osVersion=getFirstMatch(/android[ \/-](\d+(\.\d+)*)/i);}else if(result.webos){osVersion=getFirstMatch(/(?:web|hpw)os\/(\d+(\.\d+)*)/i);}else if(result.blackberry){osVersion=getFirstMatch(/rim\stablet\sos\s(\d+(\.\d+)*)/i);}else if(result.bada){osVersion=getFirstMatch(/bada\/(\d+(\.\d+)*)/i);}else if(result.tizen){osVersion=getFirstMatch(/tizen[\/\s](\d+(\.\d+)*)/i);}if(osVersion){result.osversion=osVersion;}// device type extraction
var osMajorVersion=osVersion.split('.')[0];if(tablet||nexusTablet||iosdevice=='ipad'||android&&(osMajorVersion==3||osMajorVersion>=4&&!mobile)||result.silk){result.tablet=t;}else if(mobile||iosdevice=='iphone'||iosdevice=='ipod'||android||nexusMobile||result.blackberry||result.webos||result.bada){result.mobile=t;}// Graded Browser Support
// http://developer.yahoo.com/yui/articles/gbs
if(result.msedge||result.msie&&result.version>=10||result.yandexbrowser&&result.version>=15||result.vivaldi&&result.version>=1.0||result.chrome&&result.version>=20||result.samsungBrowser&&result.version>=4||result.firefox&&result.version>=20.0||result.safari&&result.version>=6||result.opera&&result.version>=10.0||result.ios&&result.osversion&&result.osversion.split(".")[0]>=6||result.blackberry&&result.version>=10.1||result.chromium&&result.version>=20){result.a=t;}else if(result.msie&&result.version<10||result.chrome&&result.version<20||result.firefox&&result.version<20.0||result.safari&&result.version<6||result.opera&&result.version<10.0||result.ios&&result.osversion&&result.osversion.split(".")[0]<6||result.chromium&&result.version<20){result.c=t;}else result.x=t;return result;}var bowser=detect(typeof navigator!=='undefined'?navigator.userAgent||'':'');bowser.test=function(browserList){for(var i=0;i<browserList.length;++i){var browserItem=browserList[i];if(typeof browserItem==='string'){if(browserItem in bowser){return true;}}}return false;};/**
   * Get version precisions count
   *
   * @example
   *   getVersionPrecision("1.10.3") // 3
   *
   * @param  {string} version
   * @return {number}
   */function getVersionPrecision(version){return version.split(".").length;}/**
   * Array::map polyfill
   *
   * @param  {Array} arr
   * @param  {Function} iterator
   * @return {Array}
   */function map(arr,iterator){var result=[],i;if(Array.prototype.map){return Array.prototype.map.call(arr,iterator);}for(i=0;i<arr.length;i++){result.push(iterator(arr[i]));}return result;}/**
   * Calculate browser version weight
   *
   * @example
   *   compareVersions(['1.10.2.1',  '1.8.2.1.90'])    // 1
   *   compareVersions(['1.010.2.1', '1.09.2.1.90']);  // 1
   *   compareVersions(['1.10.2.1',  '1.10.2.1']);     // 0
   *   compareVersions(['1.10.2.1',  '1.0800.2']);     // -1
   *
   * @param  {Array<String>} versions versions to compare
   * @return {Number} comparison result
   */function compareVersions(versions){// 1) get common precision for both versions, for example for "10.0" and "9" it should be 2
var precision=Math.max(getVersionPrecision(versions[0]),getVersionPrecision(versions[1]));var chunks=map(versions,function(version){var delta=precision-getVersionPrecision(version);// 2) "9" -> "9.0" (for precision = 2)
version=version+new Array(delta+1).join(".0");// 3) "9.0" -> ["000000000"", "000000009"]
return map(version.split("."),function(chunk){return new Array(20-chunk.length).join("0")+chunk;}).reverse();});// iterate in reverse order by reversed chunks array
while(--precision>=0){// 4) compare: "000000009" > "000000010" = false (but "9" > "10" = true)
if(chunks[0][precision]>chunks[1][precision]){return 1;}else if(chunks[0][precision]===chunks[1][precision]){if(precision===0){// all version chunks are same
return 0;}}else{return-1;}}}/**
   * Check if browser is unsupported
   *
   * @example
   *   bowser.isUnsupportedBrowser({
   *     msie: "10",
   *     firefox: "23",
   *     chrome: "29",
   *     safari: "5.1",
   *     opera: "16",
   *     phantom: "534"
   *   });
   *
   * @param  {Object}  minVersions map of minimal version to browser
   * @param  {Boolean} [strictMode = false] flag to return false if browser wasn't found in map
   * @param  {String}  [ua] user agent string
   * @return {Boolean}
   */function isUnsupportedBrowser(minVersions,strictMode,ua){var _bowser=bowser;// make strictMode param optional with ua param usage
if(typeof strictMode==='string'){ua=strictMode;strictMode=void 0;}if(strictMode===void 0){strictMode=false;}if(ua){_bowser=detect(ua);}var version=""+_bowser.version;for(var browser in minVersions){if(minVersions.hasOwnProperty(browser)){if(_bowser[browser]){// browser version and min supported version.
return compareVersions([version,minVersions[browser]])<0;}}}return strictMode;// not found
}/**
   * Check if browser is supported
   *
   * @param  {Object} minVersions map of minimal version to browser
   * @param  {Boolean} [strictMode = false] flag to return false if browser wasn't found in map
   * @param  {String}  [ua] user agent string
   * @return {Boolean}
   */function check(minVersions,strictMode,ua){return!isUnsupportedBrowser(minVersions,strictMode,ua);}bowser.isUnsupportedBrowser=isUnsupportedBrowser;bowser.compareVersions=compareVersions;bowser.check=check;/*
   * Set our detect method to the main bowser object so we can
   * reuse it to test other user agents.
   * This is needed to implement future tests.
   */bowser._detect=detect;return bowser;});},{}],75:[function(require,module,exports){module.exports=require('react/lib/ReactFragment').create;},{"react/lib/ReactFragment":145}],76:[function(require,module,exports){module.exports=require('react/lib/shallowCompare');},{"react/lib/shallowCompare":221}],77:[function(require,module,exports){module.exports=require('react/lib/ReactTransitionGroup');},{"react/lib/ReactTransitionGroup":171}],78:[function(require,module,exports){'use strict';module.exports=require('react/lib/ReactDOM');},{"react/lib/ReactDOM":116}],79:[function(require,module,exports){/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule AutoFocusUtils
 */'use strict';var ReactDOMComponentTree=require('./ReactDOMComponentTree');var focusNode=require('fbjs/lib/focusNode');var AutoFocusUtils={focusDOMComponent:function focusDOMComponent(){focusNode(ReactDOMComponentTree.getNodeFromInstance(this));}};module.exports=AutoFocusUtils;},{"./ReactDOMComponentTree":120,"fbjs/lib/focusNode":53}],80:[function(require,module,exports){/**
 * Copyright 2013-present Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule BeforeInputEventPlugin
 */'use strict';var EventConstants=require('./EventConstants');var EventPropagators=require('./EventPropagators');var ExecutionEnvironment=require('fbjs/lib/ExecutionEnvironment');var FallbackCompositionState=require('./FallbackCompositionState');var SyntheticCompositionEvent=require('./SyntheticCompositionEvent');var SyntheticInputEvent=require('./SyntheticInputEvent');var keyOf=require('fbjs/lib/keyOf');var END_KEYCODES=[9,13,27,32];// Tab, Return, Esc, Space
var START_KEYCODE=229;var canUseCompositionEvent=ExecutionEnvironment.canUseDOM&&'CompositionEvent'in window;var documentMode=null;if(ExecutionEnvironment.canUseDOM&&'documentMode'in document){documentMode=document.documentMode;}// Webkit offers a very useful `textInput` event that can be used to
// directly represent `beforeInput`. The IE `textinput` event is not as
// useful, so we don't use it.
var canUseTextInputEvent=ExecutionEnvironment.canUseDOM&&'TextEvent'in window&&!documentMode&&!isPresto();// In IE9+, we have access to composition events, but the data supplied
// by the native compositionend event may be incorrect. Japanese ideographic
// spaces, for instance (\u3000) are not recorded correctly.
var useFallbackCompositionData=ExecutionEnvironment.canUseDOM&&(!canUseCompositionEvent||documentMode&&documentMode>8&&documentMode<=11);/**
 * Opera <= 12 includes TextEvent in window, but does not fire
 * text input events. Rely on keypress instead.
 */function isPresto(){var opera=window.opera;return(typeof opera==="undefined"?"undefined":_typeof4(opera))==='object'&&typeof opera.version==='function'&&parseInt(opera.version(),10)<=12;}var SPACEBAR_CODE=32;var SPACEBAR_CHAR=String.fromCharCode(SPACEBAR_CODE);var topLevelTypes=EventConstants.topLevelTypes;// Events and their corresponding property names.
var eventTypes={beforeInput:{phasedRegistrationNames:{bubbled:keyOf({onBeforeInput:null}),captured:keyOf({onBeforeInputCapture:null})},dependencies:[topLevelTypes.topCompositionEnd,topLevelTypes.topKeyPress,topLevelTypes.topTextInput,topLevelTypes.topPaste]},compositionEnd:{phasedRegistrationNames:{bubbled:keyOf({onCompositionEnd:null}),captured:keyOf({onCompositionEndCapture:null})},dependencies:[topLevelTypes.topBlur,topLevelTypes.topCompositionEnd,topLevelTypes.topKeyDown,topLevelTypes.topKeyPress,topLevelTypes.topKeyUp,topLevelTypes.topMouseDown]},compositionStart:{phasedRegistrationNames:{bubbled:keyOf({onCompositionStart:null}),captured:keyOf({onCompositionStartCapture:null})},dependencies:[topLevelTypes.topBlur,topLevelTypes.topCompositionStart,topLevelTypes.topKeyDown,topLevelTypes.topKeyPress,topLevelTypes.topKeyUp,topLevelTypes.topMouseDown]},compositionUpdate:{phasedRegistrationNames:{bubbled:keyOf({onCompositionUpdate:null}),captured:keyOf({onCompositionUpdateCapture:null})},dependencies:[topLevelTypes.topBlur,topLevelTypes.topCompositionUpdate,topLevelTypes.topKeyDown,topLevelTypes.topKeyPress,topLevelTypes.topKeyUp,topLevelTypes.topMouseDown]}};// Track whether we've ever handled a keypress on the space key.
var hasSpaceKeypress=false;/**
 * Return whether a native keypress event is assumed to be a command.
 * This is required because Firefox fires `keypress` events for key commands
 * (cut, copy, select-all, etc.) even though no character is inserted.
 */function isKeypressCommand(nativeEvent){return(nativeEvent.ctrlKey||nativeEvent.altKey||nativeEvent.metaKey)&&// ctrlKey && altKey is equivalent to AltGr, and is not a command.
!(nativeEvent.ctrlKey&&nativeEvent.altKey);}/**
 * Translate native top level events into event types.
 *
 * @param {string} topLevelType
 * @return {object}
 */function getCompositionEventType(topLevelType){switch(topLevelType){case topLevelTypes.topCompositionStart:return eventTypes.compositionStart;case topLevelTypes.topCompositionEnd:return eventTypes.compositionEnd;case topLevelTypes.topCompositionUpdate:return eventTypes.compositionUpdate;}}/**
 * Does our fallback best-guess model think this event signifies that
 * composition has begun?
 *
 * @param {string} topLevelType
 * @param {object} nativeEvent
 * @return {boolean}
 */function isFallbackCompositionStart(topLevelType,nativeEvent){return topLevelType===topLevelTypes.topKeyDown&&nativeEvent.keyCode===START_KEYCODE;}/**
 * Does our fallback mode think that this event is the end of composition?
 *
 * @param {string} topLevelType
 * @param {object} nativeEvent
 * @return {boolean}
 */function isFallbackCompositionEnd(topLevelType,nativeEvent){switch(topLevelType){case topLevelTypes.topKeyUp:// Command keys insert or clear IME input.
return END_KEYCODES.indexOf(nativeEvent.keyCode)!==-1;case topLevelTypes.topKeyDown:// Expect IME keyCode on each keydown. If we get any other
// code we must have exited earlier.
return nativeEvent.keyCode!==START_KEYCODE;case topLevelTypes.topKeyPress:case topLevelTypes.topMouseDown:case topLevelTypes.topBlur:// Events are not possible without cancelling IME.
return true;default:return false;}}/**
 * Google Input Tools provides composition data via a CustomEvent,
 * with the `data` property populated in the `detail` object. If this
 * is available on the event object, use it. If not, this is a plain
 * composition event and we have nothing special to extract.
 *
 * @param {object} nativeEvent
 * @return {?string}
 */function getDataFromCustomEvent(nativeEvent){var detail=nativeEvent.detail;if((typeof detail==="undefined"?"undefined":_typeof4(detail))==='object'&&'data'in detail){return detail.data;}return null;}// Track the current IME composition fallback object, if any.
var currentComposition=null;/**
 * @return {?object} A SyntheticCompositionEvent.
 */function extractCompositionEvent(topLevelType,targetInst,nativeEvent,nativeEventTarget){var eventType;var fallbackData;if(canUseCompositionEvent){eventType=getCompositionEventType(topLevelType);}else if(!currentComposition){if(isFallbackCompositionStart(topLevelType,nativeEvent)){eventType=eventTypes.compositionStart;}}else if(isFallbackCompositionEnd(topLevelType,nativeEvent)){eventType=eventTypes.compositionEnd;}if(!eventType){return null;}if(useFallbackCompositionData){// The current composition is stored statically and must not be
// overwritten while composition continues.
if(!currentComposition&&eventType===eventTypes.compositionStart){currentComposition=FallbackCompositionState.getPooled(nativeEventTarget);}else if(eventType===eventTypes.compositionEnd){if(currentComposition){fallbackData=currentComposition.getData();}}}var event=SyntheticCompositionEvent.getPooled(eventType,targetInst,nativeEvent,nativeEventTarget);if(fallbackData){// Inject data generated from fallback path into the synthetic event.
// This matches the property of native CompositionEventInterface.
event.data=fallbackData;}else{var customData=getDataFromCustomEvent(nativeEvent);if(customData!==null){event.data=customData;}}EventPropagators.accumulateTwoPhaseDispatches(event);return event;}/**
 * @param {string} topLevelType Record from `EventConstants`.
 * @param {object} nativeEvent Native browser event.
 * @return {?string} The string corresponding to this `beforeInput` event.
 */function getNativeBeforeInputChars(topLevelType,nativeEvent){switch(topLevelType){case topLevelTypes.topCompositionEnd:return getDataFromCustomEvent(nativeEvent);case topLevelTypes.topKeyPress:/**
       * If native `textInput` events are available, our goal is to make
       * use of them. However, there is a special case: the spacebar key.
       * In Webkit, preventing default on a spacebar `textInput` event
       * cancels character insertion, but it *also* causes the browser
       * to fall back to its default spacebar behavior of scrolling the
       * page.
       *
       * Tracking at:
       * https://code.google.com/p/chromium/issues/detail?id=355103
       *
       * To avoid this issue, use the keypress event as if no `textInput`
       * event is available.
       */var which=nativeEvent.which;if(which!==SPACEBAR_CODE){return null;}hasSpaceKeypress=true;return SPACEBAR_CHAR;case topLevelTypes.topTextInput:// Record the characters to be added to the DOM.
var chars=nativeEvent.data;// If it's a spacebar character, assume that we have already handled
// it at the keypress level and bail immediately. Android Chrome
// doesn't give us keycodes, so we need to blacklist it.
if(chars===SPACEBAR_CHAR&&hasSpaceKeypress){return null;}return chars;default:// For other native event types, do nothing.
return null;}}/**
 * For browsers that do not provide the `textInput` event, extract the
 * appropriate string to use for SyntheticInputEvent.
 *
 * @param {string} topLevelType Record from `EventConstants`.
 * @param {object} nativeEvent Native browser event.
 * @return {?string} The fallback string for this `beforeInput` event.
 */function getFallbackBeforeInputChars(topLevelType,nativeEvent){// If we are currently composing (IME) and using a fallback to do so,
// try to extract the composed characters from the fallback object.
// If composition event is available, we extract a string only at
// compositionevent, otherwise extract it at fallback events.
if(currentComposition){if(topLevelType===topLevelTypes.topCompositionEnd||!canUseCompositionEvent&&isFallbackCompositionEnd(topLevelType,nativeEvent)){var chars=currentComposition.getData();FallbackCompositionState.release(currentComposition);currentComposition=null;return chars;}return null;}switch(topLevelType){case topLevelTypes.topPaste:// If a paste event occurs after a keypress, throw out the input
// chars. Paste events should not lead to BeforeInput events.
return null;case topLevelTypes.topKeyPress:/**
       * As of v27, Firefox may fire keypress events even when no character
       * will be inserted. A few possibilities:
       *
       * - `which` is `0`. Arrow keys, Esc key, etc.
       *
       * - `which` is the pressed key code, but no char is available.
       *   Ex: 'AltGr + d` in Polish. There is no modified character for
       *   this key combination and no character is inserted into the
       *   document, but FF fires the keypress for char code `100` anyway.
       *   No `input` event will occur.
       *
       * - `which` is the pressed key code, but a command combination is
       *   being used. Ex: `Cmd+C`. No character is inserted, and no
       *   `input` event will occur.
       */if(nativeEvent.which&&!isKeypressCommand(nativeEvent)){return String.fromCharCode(nativeEvent.which);}return null;case topLevelTypes.topCompositionEnd:return useFallbackCompositionData?null:nativeEvent.data;default:return null;}}/**
 * Extract a SyntheticInputEvent for `beforeInput`, based on either native
 * `textInput` or fallback behavior.
 *
 * @return {?object} A SyntheticInputEvent.
 */function extractBeforeInputEvent(topLevelType,targetInst,nativeEvent,nativeEventTarget){var chars;if(canUseTextInputEvent){chars=getNativeBeforeInputChars(topLevelType,nativeEvent);}else{chars=getFallbackBeforeInputChars(topLevelType,nativeEvent);}// If no characters are being inserted, no BeforeInput event should
// be fired.
if(!chars){return null;}var event=SyntheticInputEvent.getPooled(eventTypes.beforeInput,targetInst,nativeEvent,nativeEventTarget);event.data=chars;EventPropagators.accumulateTwoPhaseDispatches(event);return event;}/**
 * Create an `onBeforeInput` event to match
 * http://www.w3.org/TR/2013/WD-DOM-Level-3-Events-20131105/#events-inputevents.
 *
 * This event plugin is based on the native `textInput` event
 * available in Chrome, Safari, Opera, and IE. This event fires after
 * `onKeyPress` and `onCompositionEnd`, but before `onInput`.
 *
 * `beforeInput` is spec'd but not implemented in any browsers, and
 * the `input` event does not provide any useful information about what has
 * actually been added, contrary to the spec. Thus, `textInput` is the best
 * available event to identify the characters that have actually been inserted
 * into the target node.
 *
 * This plugin is also responsible for emitting `composition` events, thus
 * allowing us to share composition fallback code for both `beforeInput` and
 * `composition` event types.
 */var BeforeInputEventPlugin={eventTypes:eventTypes,extractEvents:function extractEvents(topLevelType,targetInst,nativeEvent,nativeEventTarget){return[extractCompositionEvent(topLevelType,targetInst,nativeEvent,nativeEventTarget),extractBeforeInputEvent(topLevelType,targetInst,nativeEvent,nativeEventTarget)];}};module.exports=BeforeInputEventPlugin;},{"./EventConstants":94,"./EventPropagators":98,"./FallbackCompositionState":99,"./SyntheticCompositionEvent":180,"./SyntheticInputEvent":184,"fbjs/lib/ExecutionEnvironment":45,"fbjs/lib/keyOf":63}],81:[function(require,module,exports){/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule CSSProperty
 */'use strict';/**
 * CSS properties which accept numbers but are not in units of "px".
 */var isUnitlessNumber={animationIterationCount:true,borderImageOutset:true,borderImageSlice:true,borderImageWidth:true,boxFlex:true,boxFlexGroup:true,boxOrdinalGroup:true,columnCount:true,flex:true,flexGrow:true,flexPositive:true,flexShrink:true,flexNegative:true,flexOrder:true,gridRow:true,gridColumn:true,fontWeight:true,lineClamp:true,lineHeight:true,opacity:true,order:true,orphans:true,tabSize:true,widows:true,zIndex:true,zoom:true,// SVG-related properties
fillOpacity:true,floodOpacity:true,stopOpacity:true,strokeDasharray:true,strokeDashoffset:true,strokeMiterlimit:true,strokeOpacity:true,strokeWidth:true};/**
 * @param {string} prefix vendor-specific prefix, eg: Webkit
 * @param {string} key style name, eg: transitionDuration
 * @return {string} style name prefixed with `prefix`, properly camelCased, eg:
 * WebkitTransitionDuration
 */function prefixKey(prefix,key){return prefix+key.charAt(0).toUpperCase()+key.substring(1);}/**
 * Support style names that may come passed in prefixed by adding permutations
 * of vendor prefixes.
 */var prefixes=['Webkit','ms','Moz','O'];// Using Object.keys here, or else the vanilla for-in loop makes IE8 go into an
// infinite loop, because it iterates over the newly added props too.
Object.keys(isUnitlessNumber).forEach(function(prop){prefixes.forEach(function(prefix){isUnitlessNumber[prefixKey(prefix,prop)]=isUnitlessNumber[prop];});});/**
 * Most style properties can be unset by doing .style[prop] = '' but IE8
 * doesn't like doing that with shorthand properties so for the properties that
 * IE8 breaks on, which are listed here, we instead unset each of the
 * individual properties. See http://bugs.jquery.com/ticket/12385.
 * The 4-value 'clock' properties like margin, padding, border-width seem to
 * behave without any problems. Curiously, list-style works too without any
 * special prodding.
 */var shorthandPropertyExpansions={background:{backgroundAttachment:true,backgroundColor:true,backgroundImage:true,backgroundPositionX:true,backgroundPositionY:true,backgroundRepeat:true},backgroundPosition:{backgroundPositionX:true,backgroundPositionY:true},border:{borderWidth:true,borderStyle:true,borderColor:true},borderBottom:{borderBottomWidth:true,borderBottomStyle:true,borderBottomColor:true},borderLeft:{borderLeftWidth:true,borderLeftStyle:true,borderLeftColor:true},borderRight:{borderRightWidth:true,borderRightStyle:true,borderRightColor:true},borderTop:{borderTopWidth:true,borderTopStyle:true,borderTopColor:true},font:{fontStyle:true,fontVariant:true,fontWeight:true,fontSize:true,lineHeight:true,fontFamily:true},outline:{outlineWidth:true,outlineStyle:true,outlineColor:true}};var CSSProperty={isUnitlessNumber:isUnitlessNumber,shorthandPropertyExpansions:shorthandPropertyExpansions};module.exports=CSSProperty;},{}],82:[function(require,module,exports){(function(process){/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule CSSPropertyOperations
 */'use strict';var CSSProperty=require('./CSSProperty');var ExecutionEnvironment=require('fbjs/lib/ExecutionEnvironment');var ReactInstrumentation=require('./ReactInstrumentation');var camelizeStyleName=require('fbjs/lib/camelizeStyleName');var dangerousStyleValue=require('./dangerousStyleValue');var hyphenateStyleName=require('fbjs/lib/hyphenateStyleName');var memoizeStringOnly=require('fbjs/lib/memoizeStringOnly');var warning=require('fbjs/lib/warning');var processStyleName=memoizeStringOnly(function(styleName){return hyphenateStyleName(styleName);});var hasShorthandPropertyBug=false;var styleFloatAccessor='cssFloat';if(ExecutionEnvironment.canUseDOM){var tempStyle=document.createElement('div').style;try{// IE8 throws "Invalid argument." if resetting shorthand style properties.
tempStyle.font='';}catch(e){hasShorthandPropertyBug=true;}// IE8 only supports accessing cssFloat (standard) as styleFloat
if(document.documentElement.style.cssFloat===undefined){styleFloatAccessor='styleFloat';}}if(process.env.NODE_ENV!=='production'){// 'msTransform' is correct, but the other prefixes should be capitalized
var badVendoredStyleNamePattern=/^(?:webkit|moz|o)[A-Z]/;// style values shouldn't contain a semicolon
var badStyleValueWithSemicolonPattern=/;\s*$/;var warnedStyleNames={};var warnedStyleValues={};var warnedForNaNValue=false;var warnHyphenatedStyleName=function warnHyphenatedStyleName(name,owner){if(warnedStyleNames.hasOwnProperty(name)&&warnedStyleNames[name]){return;}warnedStyleNames[name]=true;process.env.NODE_ENV!=='production'?warning(false,'Unsupported style property %s. Did you mean %s?%s',name,camelizeStyleName(name),checkRenderMessage(owner)):void 0;};var warnBadVendoredStyleName=function warnBadVendoredStyleName(name,owner){if(warnedStyleNames.hasOwnProperty(name)&&warnedStyleNames[name]){return;}warnedStyleNames[name]=true;process.env.NODE_ENV!=='production'?warning(false,'Unsupported vendor-prefixed style property %s. Did you mean %s?%s',name,name.charAt(0).toUpperCase()+name.slice(1),checkRenderMessage(owner)):void 0;};var warnStyleValueWithSemicolon=function warnStyleValueWithSemicolon(name,value,owner){if(warnedStyleValues.hasOwnProperty(value)&&warnedStyleValues[value]){return;}warnedStyleValues[value]=true;process.env.NODE_ENV!=='production'?warning(false,'Style property values shouldn\'t contain a semicolon.%s '+'Try "%s: %s" instead.',checkRenderMessage(owner),name,value.replace(badStyleValueWithSemicolonPattern,'')):void 0;};var warnStyleValueIsNaN=function warnStyleValueIsNaN(name,value,owner){if(warnedForNaNValue){return;}warnedForNaNValue=true;process.env.NODE_ENV!=='production'?warning(false,'`NaN` is an invalid value for the `%s` css style property.%s',name,checkRenderMessage(owner)):void 0;};var checkRenderMessage=function checkRenderMessage(owner){if(owner){var name=owner.getName();if(name){return' Check the render method of `'+name+'`.';}}return'';};/**
   * @param {string} name
   * @param {*} value
   * @param {ReactDOMComponent} component
   */var warnValidStyle=function warnValidStyle(name,value,component){var owner;if(component){owner=component._currentElement._owner;}if(name.indexOf('-')>-1){warnHyphenatedStyleName(name,owner);}else if(badVendoredStyleNamePattern.test(name)){warnBadVendoredStyleName(name,owner);}else if(badStyleValueWithSemicolonPattern.test(value)){warnStyleValueWithSemicolon(name,value,owner);}if(typeof value==='number'&&isNaN(value)){warnStyleValueIsNaN(name,value,owner);}};}/**
 * Operations for dealing with CSS properties.
 */var CSSPropertyOperations={/**
   * Serializes a mapping of style properties for use as inline styles:
   *
   *   > createMarkupForStyles({width: '200px', height: 0})
   *   "width:200px;height:0;"
   *
   * Undefined values are ignored so that declarative programming is easier.
   * The result should be HTML-escaped before insertion into the DOM.
   *
   * @param {object} styles
   * @param {ReactDOMComponent} component
   * @return {?string}
   */createMarkupForStyles:function createMarkupForStyles(styles,component){var serialized='';for(var styleName in styles){if(!styles.hasOwnProperty(styleName)){continue;}var styleValue=styles[styleName];if(process.env.NODE_ENV!=='production'){warnValidStyle(styleName,styleValue,component);}if(styleValue!=null){serialized+=processStyleName(styleName)+':';serialized+=dangerousStyleValue(styleName,styleValue,component)+';';}}return serialized||null;},/**
   * Sets the value for multiple styles on a node.  If a value is specified as
   * '' (empty string), the corresponding style property will be unset.
   *
   * @param {DOMElement} node
   * @param {object} styles
   * @param {ReactDOMComponent} component
   */setValueForStyles:function setValueForStyles(node,styles,component){if(process.env.NODE_ENV!=='production'){ReactInstrumentation.debugTool.onHostOperation(component._debugID,'update styles',styles);}var style=node.style;for(var styleName in styles){if(!styles.hasOwnProperty(styleName)){continue;}if(process.env.NODE_ENV!=='production'){warnValidStyle(styleName,styles[styleName],component);}var styleValue=dangerousStyleValue(styleName,styles[styleName],component);if(styleName==='float'||styleName==='cssFloat'){styleName=styleFloatAccessor;}if(styleValue){style[styleName]=styleValue;}else{var expansion=hasShorthandPropertyBug&&CSSProperty.shorthandPropertyExpansions[styleName];if(expansion){// Shorthand property that IE8 won't like unsetting, so unset each
// component to placate it
for(var individualStyleName in expansion){style[individualStyleName]='';}}else{style[styleName]='';}}}}};module.exports=CSSPropertyOperations;}).call(this,require('_process'));},{"./CSSProperty":81,"./ReactInstrumentation":151,"./dangerousStyleValue":198,"_process":3,"fbjs/lib/ExecutionEnvironment":45,"fbjs/lib/camelizeStyleName":47,"fbjs/lib/hyphenateStyleName":58,"fbjs/lib/memoizeStringOnly":64,"fbjs/lib/warning":68}],83:[function(require,module,exports){(function(process){/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule CallbackQueue
 */'use strict';var _prodInvariant=require('./reactProdInvariant'),_assign=require('object-assign');var PooledClass=require('./PooledClass');var invariant=require('fbjs/lib/invariant');/**
 * A specialized pseudo-event module to help keep track of components waiting to
 * be notified when their DOM representations are available for use.
 *
 * This implements `PooledClass`, so you should never need to instantiate this.
 * Instead, use `CallbackQueue.getPooled()`.
 *
 * @class ReactMountReady
 * @implements PooledClass
 * @internal
 */function CallbackQueue(){this._callbacks=null;this._contexts=null;}_assign(CallbackQueue.prototype,{/**
   * Enqueues a callback to be invoked when `notifyAll` is invoked.
   *
   * @param {function} callback Invoked when `notifyAll` is invoked.
   * @param {?object} context Context to call `callback` with.
   * @internal
   */enqueue:function enqueue(callback,context){this._callbacks=this._callbacks||[];this._contexts=this._contexts||[];this._callbacks.push(callback);this._contexts.push(context);},/**
   * Invokes all enqueued callbacks and clears the queue. This is invoked after
   * the DOM representation of a component has been created or updated.
   *
   * @internal
   */notifyAll:function notifyAll(){var callbacks=this._callbacks;var contexts=this._contexts;if(callbacks){!(callbacks.length===contexts.length)?process.env.NODE_ENV!=='production'?invariant(false,'Mismatched list of contexts in callback queue'):_prodInvariant('24'):void 0;this._callbacks=null;this._contexts=null;for(var i=0;i<callbacks.length;i++){callbacks[i].call(contexts[i]);}callbacks.length=0;contexts.length=0;}},checkpoint:function checkpoint(){return this._callbacks?this._callbacks.length:0;},rollback:function rollback(len){if(this._callbacks){this._callbacks.length=len;this._contexts.length=len;}},/**
   * Resets the internal queue.
   *
   * @internal
   */reset:function reset(){this._callbacks=null;this._contexts=null;},/**
   * `PooledClass` looks for this.
   */destructor:function destructor(){this.reset();}});PooledClass.addPoolingTo(CallbackQueue);module.exports=CallbackQueue;}).call(this,require('_process'));},{"./PooledClass":103,"./reactProdInvariant":217,"_process":3,"fbjs/lib/invariant":59,"object-assign":344}],84:[function(require,module,exports){/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ChangeEventPlugin
 */'use strict';var EventConstants=require('./EventConstants');var EventPluginHub=require('./EventPluginHub');var EventPropagators=require('./EventPropagators');var ExecutionEnvironment=require('fbjs/lib/ExecutionEnvironment');var ReactDOMComponentTree=require('./ReactDOMComponentTree');var ReactUpdates=require('./ReactUpdates');var SyntheticEvent=require('./SyntheticEvent');var getEventTarget=require('./getEventTarget');var isEventSupported=require('./isEventSupported');var isTextInputElement=require('./isTextInputElement');var keyOf=require('fbjs/lib/keyOf');var topLevelTypes=EventConstants.topLevelTypes;var eventTypes={change:{phasedRegistrationNames:{bubbled:keyOf({onChange:null}),captured:keyOf({onChangeCapture:null})},dependencies:[topLevelTypes.topBlur,topLevelTypes.topChange,topLevelTypes.topClick,topLevelTypes.topFocus,topLevelTypes.topInput,topLevelTypes.topKeyDown,topLevelTypes.topKeyUp,topLevelTypes.topSelectionChange]}};/**
 * For IE shims
 */var activeElement=null;var activeElementInst=null;var activeElementValue=null;var activeElementValueProp=null;/**
 * SECTION: handle `change` event
 */function shouldUseChangeEvent(elem){var nodeName=elem.nodeName&&elem.nodeName.toLowerCase();return nodeName==='select'||nodeName==='input'&&elem.type==='file';}var doesChangeEventBubble=false;if(ExecutionEnvironment.canUseDOM){// See `handleChange` comment below
doesChangeEventBubble=isEventSupported('change')&&(!document.documentMode||document.documentMode>8);}function manualDispatchChangeEvent(nativeEvent){var event=SyntheticEvent.getPooled(eventTypes.change,activeElementInst,nativeEvent,getEventTarget(nativeEvent));EventPropagators.accumulateTwoPhaseDispatches(event);// If change and propertychange bubbled, we'd just bind to it like all the
// other events and have it go through ReactBrowserEventEmitter. Since it
// doesn't, we manually listen for the events and so we have to enqueue and
// process the abstract event manually.
//
// Batching is necessary here in order to ensure that all event handlers run
// before the next rerender (including event handlers attached to ancestor
// elements instead of directly on the input). Without this, controlled
// components don't work properly in conjunction with event bubbling because
// the component is rerendered and the value reverted before all the event
// handlers can run. See https://github.com/facebook/react/issues/708.
ReactUpdates.batchedUpdates(runEventInBatch,event);}function runEventInBatch(event){EventPluginHub.enqueueEvents(event);EventPluginHub.processEventQueue(false);}function startWatchingForChangeEventIE8(target,targetInst){activeElement=target;activeElementInst=targetInst;activeElement.attachEvent('onchange',manualDispatchChangeEvent);}function stopWatchingForChangeEventIE8(){if(!activeElement){return;}activeElement.detachEvent('onchange',manualDispatchChangeEvent);activeElement=null;activeElementInst=null;}function getTargetInstForChangeEvent(topLevelType,targetInst){if(topLevelType===topLevelTypes.topChange){return targetInst;}}function handleEventsForChangeEventIE8(topLevelType,target,targetInst){if(topLevelType===topLevelTypes.topFocus){// stopWatching() should be a noop here but we call it just in case we
// missed a blur event somehow.
stopWatchingForChangeEventIE8();startWatchingForChangeEventIE8(target,targetInst);}else if(topLevelType===topLevelTypes.topBlur){stopWatchingForChangeEventIE8();}}/**
 * SECTION: handle `input` event
 */var isInputEventSupported=false;if(ExecutionEnvironment.canUseDOM){// IE9 claims to support the input event but fails to trigger it when
// deleting text, so we ignore its input events.
// IE10+ fire input events to often, such when a placeholder
// changes or when an input with a placeholder is focused.
isInputEventSupported=isEventSupported('input')&&(!document.documentMode||document.documentMode>11);}/**
 * (For IE <=11) Replacement getter/setter for the `value` property that gets
 * set on the active element.
 */var newValueProp={get:function get(){return activeElementValueProp.get.call(this);},set:function set(val){// Cast to a string so we can do equality checks.
activeElementValue=''+val;activeElementValueProp.set.call(this,val);}};/**
 * (For IE <=11) Starts tracking propertychange events on the passed-in element
 * and override the value property so that we can distinguish user events from
 * value changes in JS.
 */function startWatchingForValueChange(target,targetInst){activeElement=target;activeElementInst=targetInst;activeElementValue=target.value;activeElementValueProp=Object.getOwnPropertyDescriptor(target.constructor.prototype,'value');// Not guarded in a canDefineProperty check: IE8 supports defineProperty only
// on DOM elements
Object.defineProperty(activeElement,'value',newValueProp);if(activeElement.attachEvent){activeElement.attachEvent('onpropertychange',handlePropertyChange);}else{activeElement.addEventListener('propertychange',handlePropertyChange,false);}}/**
 * (For IE <=11) Removes the event listeners from the currently-tracked element,
 * if any exists.
 */function stopWatchingForValueChange(){if(!activeElement){return;}// delete restores the original property definition
delete activeElement.value;if(activeElement.detachEvent){activeElement.detachEvent('onpropertychange',handlePropertyChange);}else{activeElement.removeEventListener('propertychange',handlePropertyChange,false);}activeElement=null;activeElementInst=null;activeElementValue=null;activeElementValueProp=null;}/**
 * (For IE <=11) Handles a propertychange event, sending a `change` event if
 * the value of the active element has changed.
 */function handlePropertyChange(nativeEvent){if(nativeEvent.propertyName!=='value'){return;}var value=nativeEvent.srcElement.value;if(value===activeElementValue){return;}activeElementValue=value;manualDispatchChangeEvent(nativeEvent);}/**
 * If a `change` event should be fired, returns the target's ID.
 */function getTargetInstForInputEvent(topLevelType,targetInst){if(topLevelType===topLevelTypes.topInput){// In modern browsers (i.e., not IE8 or IE9), the input event is exactly
// what we want so fall through here and trigger an abstract event
return targetInst;}}function handleEventsForInputEventIE(topLevelType,target,targetInst){if(topLevelType===topLevelTypes.topFocus){// In IE8, we can capture almost all .value changes by adding a
// propertychange handler and looking for events with propertyName
// equal to 'value'
// In IE9-11, propertychange fires for most input events but is buggy and
// doesn't fire when text is deleted, but conveniently, selectionchange
// appears to fire in all of the remaining cases so we catch those and
// forward the event if the value has changed
// In either case, we don't want to call the event handler if the value
// is changed from JS so we redefine a setter for `.value` that updates
// our activeElementValue variable, allowing us to ignore those changes
//
// stopWatching() should be a noop here but we call it just in case we
// missed a blur event somehow.
stopWatchingForValueChange();startWatchingForValueChange(target,targetInst);}else if(topLevelType===topLevelTypes.topBlur){stopWatchingForValueChange();}}// For IE8 and IE9.
function getTargetInstForInputEventIE(topLevelType,targetInst){if(topLevelType===topLevelTypes.topSelectionChange||topLevelType===topLevelTypes.topKeyUp||topLevelType===topLevelTypes.topKeyDown){// On the selectionchange event, the target is just document which isn't
// helpful for us so just check activeElement instead.
//
// 99% of the time, keydown and keyup aren't necessary. IE8 fails to fire
// propertychange on the first input event after setting `value` from a
// script and fires only keydown, keypress, keyup. Catching keyup usually
// gets it and catching keydown lets us fire an event for the first
// keystroke if user does a key repeat (it'll be a little delayed: right
// before the second keystroke). Other input methods (e.g., paste) seem to
// fire selectionchange normally.
if(activeElement&&activeElement.value!==activeElementValue){activeElementValue=activeElement.value;return activeElementInst;}}}/**
 * SECTION: handle `click` event
 */function shouldUseClickEvent(elem){// Use the `click` event to detect changes to checkbox and radio inputs.
// This approach works across all browsers, whereas `change` does not fire
// until `blur` in IE8.
return elem.nodeName&&elem.nodeName.toLowerCase()==='input'&&(elem.type==='checkbox'||elem.type==='radio');}function getTargetInstForClickEvent(topLevelType,targetInst){if(topLevelType===topLevelTypes.topClick){return targetInst;}}/**
 * This plugin creates an `onChange` event that normalizes change events
 * across form elements. This event fires at a time when it's possible to
 * change the element's value without seeing a flicker.
 *
 * Supported elements are:
 * - input (see `isTextInputElement`)
 * - textarea
 * - select
 */var ChangeEventPlugin={eventTypes:eventTypes,extractEvents:function extractEvents(topLevelType,targetInst,nativeEvent,nativeEventTarget){var targetNode=targetInst?ReactDOMComponentTree.getNodeFromInstance(targetInst):window;var getTargetInstFunc,handleEventFunc;if(shouldUseChangeEvent(targetNode)){if(doesChangeEventBubble){getTargetInstFunc=getTargetInstForChangeEvent;}else{handleEventFunc=handleEventsForChangeEventIE8;}}else if(isTextInputElement(targetNode)){if(isInputEventSupported){getTargetInstFunc=getTargetInstForInputEvent;}else{getTargetInstFunc=getTargetInstForInputEventIE;handleEventFunc=handleEventsForInputEventIE;}}else if(shouldUseClickEvent(targetNode)){getTargetInstFunc=getTargetInstForClickEvent;}if(getTargetInstFunc){var inst=getTargetInstFunc(topLevelType,targetInst);if(inst){var event=SyntheticEvent.getPooled(eventTypes.change,inst,nativeEvent,nativeEventTarget);event.type='change';EventPropagators.accumulateTwoPhaseDispatches(event);return event;}}if(handleEventFunc){handleEventFunc(topLevelType,targetNode,targetInst);}}};module.exports=ChangeEventPlugin;},{"./EventConstants":94,"./EventPluginHub":95,"./EventPropagators":98,"./ReactDOMComponentTree":120,"./ReactUpdates":173,"./SyntheticEvent":182,"./getEventTarget":206,"./isEventSupported":213,"./isTextInputElement":214,"fbjs/lib/ExecutionEnvironment":45,"fbjs/lib/keyOf":63}],85:[function(require,module,exports){(function(process){/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule DOMChildrenOperations
 */'use strict';var DOMLazyTree=require('./DOMLazyTree');var Danger=require('./Danger');var ReactMultiChildUpdateTypes=require('./ReactMultiChildUpdateTypes');var ReactDOMComponentTree=require('./ReactDOMComponentTree');var ReactInstrumentation=require('./ReactInstrumentation');var createMicrosoftUnsafeLocalFunction=require('./createMicrosoftUnsafeLocalFunction');var setInnerHTML=require('./setInnerHTML');var setTextContent=require('./setTextContent');function getNodeAfter(parentNode,node){// Special case for text components, which return [open, close] comments
// from getHostNode.
if(Array.isArray(node)){node=node[1];}return node?node.nextSibling:parentNode.firstChild;}/**
 * Inserts `childNode` as a child of `parentNode` at the `index`.
 *
 * @param {DOMElement} parentNode Parent node in which to insert.
 * @param {DOMElement} childNode Child node to insert.
 * @param {number} index Index at which to insert the child.
 * @internal
 */var insertChildAt=createMicrosoftUnsafeLocalFunction(function(parentNode,childNode,referenceNode){// We rely exclusively on `insertBefore(node, null)` instead of also using
// `appendChild(node)`. (Using `undefined` is not allowed by all browsers so
// we are careful to use `null`.)
parentNode.insertBefore(childNode,referenceNode);});function insertLazyTreeChildAt(parentNode,childTree,referenceNode){DOMLazyTree.insertTreeBefore(parentNode,childTree,referenceNode);}function moveChild(parentNode,childNode,referenceNode){if(Array.isArray(childNode)){moveDelimitedText(parentNode,childNode[0],childNode[1],referenceNode);}else{insertChildAt(parentNode,childNode,referenceNode);}}function removeChild(parentNode,childNode){if(Array.isArray(childNode)){var closingComment=childNode[1];childNode=childNode[0];removeDelimitedText(parentNode,childNode,closingComment);parentNode.removeChild(closingComment);}parentNode.removeChild(childNode);}function moveDelimitedText(parentNode,openingComment,closingComment,referenceNode){var node=openingComment;while(true){var nextNode=node.nextSibling;insertChildAt(parentNode,node,referenceNode);if(node===closingComment){break;}node=nextNode;}}function removeDelimitedText(parentNode,startNode,closingComment){while(true){var node=startNode.nextSibling;if(node===closingComment){// The closing comment is removed by ReactMultiChild.
break;}else{parentNode.removeChild(node);}}}function replaceDelimitedText(openingComment,closingComment,stringText){var parentNode=openingComment.parentNode;var nodeAfterComment=openingComment.nextSibling;if(nodeAfterComment===closingComment){// There are no text nodes between the opening and closing comments; insert
// a new one if stringText isn't empty.
if(stringText){insertChildAt(parentNode,document.createTextNode(stringText),nodeAfterComment);}}else{if(stringText){// Set the text content of the first node after the opening comment, and
// remove all following nodes up until the closing comment.
setTextContent(nodeAfterComment,stringText);removeDelimitedText(parentNode,nodeAfterComment,closingComment);}else{removeDelimitedText(parentNode,openingComment,closingComment);}}if(process.env.NODE_ENV!=='production'){ReactInstrumentation.debugTool.onHostOperation(ReactDOMComponentTree.getInstanceFromNode(openingComment)._debugID,'replace text',stringText);}}var dangerouslyReplaceNodeWithMarkup=Danger.dangerouslyReplaceNodeWithMarkup;if(process.env.NODE_ENV!=='production'){dangerouslyReplaceNodeWithMarkup=function dangerouslyReplaceNodeWithMarkup(oldChild,markup,prevInstance){Danger.dangerouslyReplaceNodeWithMarkup(oldChild,markup);if(prevInstance._debugID!==0){ReactInstrumentation.debugTool.onHostOperation(prevInstance._debugID,'replace with',markup.toString());}else{var nextInstance=ReactDOMComponentTree.getInstanceFromNode(markup.node);if(nextInstance._debugID!==0){ReactInstrumentation.debugTool.onHostOperation(nextInstance._debugID,'mount',markup.toString());}}};}/**
 * Operations for updating with DOM children.
 */var DOMChildrenOperations={dangerouslyReplaceNodeWithMarkup:dangerouslyReplaceNodeWithMarkup,replaceDelimitedText:replaceDelimitedText,/**
   * Updates a component's children by processing a series of updates. The
   * update configurations are each expected to have a `parentNode` property.
   *
   * @param {array<object>} updates List of update configurations.
   * @internal
   */processUpdates:function processUpdates(parentNode,updates){if(process.env.NODE_ENV!=='production'){var parentNodeDebugID=ReactDOMComponentTree.getInstanceFromNode(parentNode)._debugID;}for(var k=0;k<updates.length;k++){var update=updates[k];switch(update.type){case ReactMultiChildUpdateTypes.INSERT_MARKUP:insertLazyTreeChildAt(parentNode,update.content,getNodeAfter(parentNode,update.afterNode));if(process.env.NODE_ENV!=='production'){ReactInstrumentation.debugTool.onHostOperation(parentNodeDebugID,'insert child',{toIndex:update.toIndex,content:update.content.toString()});}break;case ReactMultiChildUpdateTypes.MOVE_EXISTING:moveChild(parentNode,update.fromNode,getNodeAfter(parentNode,update.afterNode));if(process.env.NODE_ENV!=='production'){ReactInstrumentation.debugTool.onHostOperation(parentNodeDebugID,'move child',{fromIndex:update.fromIndex,toIndex:update.toIndex});}break;case ReactMultiChildUpdateTypes.SET_MARKUP:setInnerHTML(parentNode,update.content);if(process.env.NODE_ENV!=='production'){ReactInstrumentation.debugTool.onHostOperation(parentNodeDebugID,'replace children',update.content.toString());}break;case ReactMultiChildUpdateTypes.TEXT_CONTENT:setTextContent(parentNode,update.content);if(process.env.NODE_ENV!=='production'){ReactInstrumentation.debugTool.onHostOperation(parentNodeDebugID,'replace text',update.content.toString());}break;case ReactMultiChildUpdateTypes.REMOVE_NODE:removeChild(parentNode,update.fromNode);if(process.env.NODE_ENV!=='production'){ReactInstrumentation.debugTool.onHostOperation(parentNodeDebugID,'remove child',{fromIndex:update.fromIndex});}break;}}}};module.exports=DOMChildrenOperations;}).call(this,require('_process'));},{"./DOMLazyTree":86,"./Danger":90,"./ReactDOMComponentTree":120,"./ReactInstrumentation":151,"./ReactMultiChildUpdateTypes":156,"./createMicrosoftUnsafeLocalFunction":197,"./setInnerHTML":219,"./setTextContent":220,"_process":3}],86:[function(require,module,exports){/**
 * Copyright 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule DOMLazyTree
 */'use strict';var DOMNamespaces=require('./DOMNamespaces');var setInnerHTML=require('./setInnerHTML');var createMicrosoftUnsafeLocalFunction=require('./createMicrosoftUnsafeLocalFunction');var setTextContent=require('./setTextContent');var ELEMENT_NODE_TYPE=1;var DOCUMENT_FRAGMENT_NODE_TYPE=11;/**
 * In IE (8-11) and Edge, appending nodes with no children is dramatically
 * faster than appending a full subtree, so we essentially queue up the
 * .appendChild calls here and apply them so each node is added to its parent
 * before any children are added.
 *
 * In other browsers, doing so is slower or neutral compared to the other order
 * (in Firefox, twice as slow) so we only do this inversion in IE.
 *
 * See https://github.com/spicyj/innerhtml-vs-createelement-vs-clonenode.
 */var enableLazy=typeof document!=='undefined'&&typeof document.documentMode==='number'||typeof navigator!=='undefined'&&typeof navigator.userAgent==='string'&&/\bEdge\/\d/.test(navigator.userAgent);function insertTreeChildren(tree){if(!enableLazy){return;}var node=tree.node;var children=tree.children;if(children.length){for(var i=0;i<children.length;i++){insertTreeBefore(node,children[i],null);}}else if(tree.html!=null){setInnerHTML(node,tree.html);}else if(tree.text!=null){setTextContent(node,tree.text);}}var insertTreeBefore=createMicrosoftUnsafeLocalFunction(function(parentNode,tree,referenceNode){// DocumentFragments aren't actually part of the DOM after insertion so
// appending children won't update the DOM. We need to ensure the fragment
// is properly populated first, breaking out of our lazy approach for just
// this level. Also, some <object> plugins (like Flash Player) will read
// <param> nodes immediately upon insertion into the DOM, so <object>
// must also be populated prior to insertion into the DOM.
if(tree.node.nodeType===DOCUMENT_FRAGMENT_NODE_TYPE||tree.node.nodeType===ELEMENT_NODE_TYPE&&tree.node.nodeName.toLowerCase()==='object'&&(tree.node.namespaceURI==null||tree.node.namespaceURI===DOMNamespaces.html)){insertTreeChildren(tree);parentNode.insertBefore(tree.node,referenceNode);}else{parentNode.insertBefore(tree.node,referenceNode);insertTreeChildren(tree);}});function replaceChildWithTree(oldNode,newTree){oldNode.parentNode.replaceChild(newTree.node,oldNode);insertTreeChildren(newTree);}function queueChild(parentTree,childTree){if(enableLazy){parentTree.children.push(childTree);}else{parentTree.node.appendChild(childTree.node);}}function queueHTML(tree,html){if(enableLazy){tree.html=html;}else{setInnerHTML(tree.node,html);}}function queueText(tree,text){if(enableLazy){tree.text=text;}else{setTextContent(tree.node,text);}}function toString(){return this.node.nodeName;}function DOMLazyTree(node){return{node:node,children:[],html:null,text:null,toString:toString};}DOMLazyTree.insertTreeBefore=insertTreeBefore;DOMLazyTree.replaceChildWithTree=replaceChildWithTree;DOMLazyTree.queueChild=queueChild;DOMLazyTree.queueHTML=queueHTML;DOMLazyTree.queueText=queueText;module.exports=DOMLazyTree;},{"./DOMNamespaces":87,"./createMicrosoftUnsafeLocalFunction":197,"./setInnerHTML":219,"./setTextContent":220}],87:[function(require,module,exports){/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule DOMNamespaces
 */'use strict';var DOMNamespaces={html:'http://www.w3.org/1999/xhtml',mathml:'http://www.w3.org/1998/Math/MathML',svg:'http://www.w3.org/2000/svg'};module.exports=DOMNamespaces;},{}],88:[function(require,module,exports){(function(process){/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule DOMProperty
 */'use strict';var _prodInvariant=require('./reactProdInvariant');var invariant=require('fbjs/lib/invariant');function checkMask(value,bitmask){return(value&bitmask)===bitmask;}var DOMPropertyInjection={/**
   * Mapping from normalized, camelcased property names to a configuration that
   * specifies how the associated DOM property should be accessed or rendered.
   */MUST_USE_PROPERTY:0x1,HAS_BOOLEAN_VALUE:0x4,HAS_NUMERIC_VALUE:0x8,HAS_POSITIVE_NUMERIC_VALUE:0x10|0x8,HAS_OVERLOADED_BOOLEAN_VALUE:0x20,/**
   * Inject some specialized knowledge about the DOM. This takes a config object
   * with the following properties:
   *
   * isCustomAttribute: function that given an attribute name will return true
   * if it can be inserted into the DOM verbatim. Useful for data-* or aria-*
   * attributes where it's impossible to enumerate all of the possible
   * attribute names,
   *
   * Properties: object mapping DOM property name to one of the
   * DOMPropertyInjection constants or null. If your attribute isn't in here,
   * it won't get written to the DOM.
   *
   * DOMAttributeNames: object mapping React attribute name to the DOM
   * attribute name. Attribute names not specified use the **lowercase**
   * normalized name.
   *
   * DOMAttributeNamespaces: object mapping React attribute name to the DOM
   * attribute namespace URL. (Attribute names not specified use no namespace.)
   *
   * DOMPropertyNames: similar to DOMAttributeNames but for DOM properties.
   * Property names not specified use the normalized name.
   *
   * DOMMutationMethods: Properties that require special mutation methods. If
   * `value` is undefined, the mutation method should unset the property.
   *
   * @param {object} domPropertyConfig the config as described above.
   */injectDOMPropertyConfig:function injectDOMPropertyConfig(domPropertyConfig){var Injection=DOMPropertyInjection;var Properties=domPropertyConfig.Properties||{};var DOMAttributeNamespaces=domPropertyConfig.DOMAttributeNamespaces||{};var DOMAttributeNames=domPropertyConfig.DOMAttributeNames||{};var DOMPropertyNames=domPropertyConfig.DOMPropertyNames||{};var DOMMutationMethods=domPropertyConfig.DOMMutationMethods||{};if(domPropertyConfig.isCustomAttribute){DOMProperty._isCustomAttributeFunctions.push(domPropertyConfig.isCustomAttribute);}for(var propName in Properties){!!DOMProperty.properties.hasOwnProperty(propName)?process.env.NODE_ENV!=='production'?invariant(false,'injectDOMPropertyConfig(...): You\'re trying to inject DOM property \'%s\' which has already been injected. You may be accidentally injecting the same DOM property config twice, or you may be injecting two configs that have conflicting property names.',propName):_prodInvariant('48',propName):void 0;var lowerCased=propName.toLowerCase();var propConfig=Properties[propName];var propertyInfo={attributeName:lowerCased,attributeNamespace:null,propertyName:propName,mutationMethod:null,mustUseProperty:checkMask(propConfig,Injection.MUST_USE_PROPERTY),hasBooleanValue:checkMask(propConfig,Injection.HAS_BOOLEAN_VALUE),hasNumericValue:checkMask(propConfig,Injection.HAS_NUMERIC_VALUE),hasPositiveNumericValue:checkMask(propConfig,Injection.HAS_POSITIVE_NUMERIC_VALUE),hasOverloadedBooleanValue:checkMask(propConfig,Injection.HAS_OVERLOADED_BOOLEAN_VALUE)};!(propertyInfo.hasBooleanValue+propertyInfo.hasNumericValue+propertyInfo.hasOverloadedBooleanValue<=1)?process.env.NODE_ENV!=='production'?invariant(false,'DOMProperty: Value can be one of boolean, overloaded boolean, or numeric value, but not a combination: %s',propName):_prodInvariant('50',propName):void 0;if(process.env.NODE_ENV!=='production'){DOMProperty.getPossibleStandardName[lowerCased]=propName;}if(DOMAttributeNames.hasOwnProperty(propName)){var attributeName=DOMAttributeNames[propName];propertyInfo.attributeName=attributeName;if(process.env.NODE_ENV!=='production'){DOMProperty.getPossibleStandardName[attributeName]=propName;}}if(DOMAttributeNamespaces.hasOwnProperty(propName)){propertyInfo.attributeNamespace=DOMAttributeNamespaces[propName];}if(DOMPropertyNames.hasOwnProperty(propName)){propertyInfo.propertyName=DOMPropertyNames[propName];}if(DOMMutationMethods.hasOwnProperty(propName)){propertyInfo.mutationMethod=DOMMutationMethods[propName];}DOMProperty.properties[propName]=propertyInfo;}}};/* eslint-disable max-len */var ATTRIBUTE_NAME_START_CHAR=":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD";/* eslint-enable max-len *//**
 * DOMProperty exports lookup objects that can be used like functions:
 *
 *   > DOMProperty.isValid['id']
 *   true
 *   > DOMProperty.isValid['foobar']
 *   undefined
 *
 * Although this may be confusing, it performs better in general.
 *
 * @see http://jsperf.com/key-exists
 * @see http://jsperf.com/key-missing
 */var DOMProperty={ID_ATTRIBUTE_NAME:'data-reactid',ROOT_ATTRIBUTE_NAME:'data-reactroot',ATTRIBUTE_NAME_START_CHAR:ATTRIBUTE_NAME_START_CHAR,ATTRIBUTE_NAME_CHAR:ATTRIBUTE_NAME_START_CHAR+"\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040",/**
   * Map from property "standard name" to an object with info about how to set
   * the property in the DOM. Each object contains:
   *
   * attributeName:
   *   Used when rendering markup or with `*Attribute()`.
   * attributeNamespace
   * propertyName:
   *   Used on DOM node instances. (This includes properties that mutate due to
   *   external factors.)
   * mutationMethod:
   *   If non-null, used instead of the property or `setAttribute()` after
   *   initial render.
   * mustUseProperty:
   *   Whether the property must be accessed and mutated as an object property.
   * hasBooleanValue:
   *   Whether the property should be removed when set to a falsey value.
   * hasNumericValue:
   *   Whether the property must be numeric or parse as a numeric and should be
   *   removed when set to a falsey value.
   * hasPositiveNumericValue:
   *   Whether the property must be positive numeric or parse as a positive
   *   numeric and should be removed when set to a falsey value.
   * hasOverloadedBooleanValue:
   *   Whether the property can be used as a flag as well as with a value.
   *   Removed when strictly equal to false; present without a value when
   *   strictly equal to true; present with a value otherwise.
   */properties:{},/**
   * Mapping from lowercase property names to the properly cased version, used
   * to warn in the case of missing properties. Available only in __DEV__.
   * @type {Object}
   */getPossibleStandardName:process.env.NODE_ENV!=='production'?{}:null,/**
   * All of the isCustomAttribute() functions that have been injected.
   */_isCustomAttributeFunctions:[],/**
   * Checks whether a property name is a custom attribute.
   * @method
   */isCustomAttribute:function isCustomAttribute(attributeName){for(var i=0;i<DOMProperty._isCustomAttributeFunctions.length;i++){var isCustomAttributeFn=DOMProperty._isCustomAttributeFunctions[i];if(isCustomAttributeFn(attributeName)){return true;}}return false;},injection:DOMPropertyInjection};module.exports=DOMProperty;}).call(this,require('_process'));},{"./reactProdInvariant":217,"_process":3,"fbjs/lib/invariant":59}],89:[function(require,module,exports){(function(process){/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule DOMPropertyOperations
 */'use strict';var DOMProperty=require('./DOMProperty');var ReactDOMComponentTree=require('./ReactDOMComponentTree');var ReactInstrumentation=require('./ReactInstrumentation');var quoteAttributeValueForBrowser=require('./quoteAttributeValueForBrowser');var warning=require('fbjs/lib/warning');var VALID_ATTRIBUTE_NAME_REGEX=new RegExp('^['+DOMProperty.ATTRIBUTE_NAME_START_CHAR+']['+DOMProperty.ATTRIBUTE_NAME_CHAR+']*$');var illegalAttributeNameCache={};var validatedAttributeNameCache={};function isAttributeNameSafe(attributeName){if(validatedAttributeNameCache.hasOwnProperty(attributeName)){return true;}if(illegalAttributeNameCache.hasOwnProperty(attributeName)){return false;}if(VALID_ATTRIBUTE_NAME_REGEX.test(attributeName)){validatedAttributeNameCache[attributeName]=true;return true;}illegalAttributeNameCache[attributeName]=true;process.env.NODE_ENV!=='production'?warning(false,'Invalid attribute name: `%s`',attributeName):void 0;return false;}function shouldIgnoreValue(propertyInfo,value){return value==null||propertyInfo.hasBooleanValue&&!value||propertyInfo.hasNumericValue&&isNaN(value)||propertyInfo.hasPositiveNumericValue&&value<1||propertyInfo.hasOverloadedBooleanValue&&value===false;}/**
 * Operations for dealing with DOM properties.
 */var DOMPropertyOperations={/**
   * Creates markup for the ID property.
   *
   * @param {string} id Unescaped ID.
   * @return {string} Markup string.
   */createMarkupForID:function createMarkupForID(id){return DOMProperty.ID_ATTRIBUTE_NAME+'='+quoteAttributeValueForBrowser(id);},setAttributeForID:function setAttributeForID(node,id){node.setAttribute(DOMProperty.ID_ATTRIBUTE_NAME,id);},createMarkupForRoot:function createMarkupForRoot(){return DOMProperty.ROOT_ATTRIBUTE_NAME+'=""';},setAttributeForRoot:function setAttributeForRoot(node){node.setAttribute(DOMProperty.ROOT_ATTRIBUTE_NAME,'');},/**
   * Creates markup for a property.
   *
   * @param {string} name
   * @param {*} value
   * @return {?string} Markup string, or null if the property was invalid.
   */createMarkupForProperty:function createMarkupForProperty(name,value){var propertyInfo=DOMProperty.properties.hasOwnProperty(name)?DOMProperty.properties[name]:null;if(propertyInfo){if(shouldIgnoreValue(propertyInfo,value)){return'';}var attributeName=propertyInfo.attributeName;if(propertyInfo.hasBooleanValue||propertyInfo.hasOverloadedBooleanValue&&value===true){return attributeName+'=""';}return attributeName+'='+quoteAttributeValueForBrowser(value);}else if(DOMProperty.isCustomAttribute(name)){if(value==null){return'';}return name+'='+quoteAttributeValueForBrowser(value);}return null;},/**
   * Creates markup for a custom property.
   *
   * @param {string} name
   * @param {*} value
   * @return {string} Markup string, or empty string if the property was invalid.
   */createMarkupForCustomAttribute:function createMarkupForCustomAttribute(name,value){if(!isAttributeNameSafe(name)||value==null){return'';}return name+'='+quoteAttributeValueForBrowser(value);},/**
   * Sets the value for a property on a node.
   *
   * @param {DOMElement} node
   * @param {string} name
   * @param {*} value
   */setValueForProperty:function setValueForProperty(node,name,value){var propertyInfo=DOMProperty.properties.hasOwnProperty(name)?DOMProperty.properties[name]:null;if(propertyInfo){var mutationMethod=propertyInfo.mutationMethod;if(mutationMethod){mutationMethod(node,value);}else if(shouldIgnoreValue(propertyInfo,value)){this.deleteValueForProperty(node,name);return;}else if(propertyInfo.mustUseProperty){// Contrary to `setAttribute`, object properties are properly
// `toString`ed by IE8/9.
node[propertyInfo.propertyName]=value;}else{var attributeName=propertyInfo.attributeName;var namespace=propertyInfo.attributeNamespace;// `setAttribute` with objects becomes only `[object]` in IE8/9,
// ('' + value) makes it output the correct toString()-value.
if(namespace){node.setAttributeNS(namespace,attributeName,''+value);}else if(propertyInfo.hasBooleanValue||propertyInfo.hasOverloadedBooleanValue&&value===true){node.setAttribute(attributeName,'');}else{node.setAttribute(attributeName,''+value);}}}else if(DOMProperty.isCustomAttribute(name)){DOMPropertyOperations.setValueForAttribute(node,name,value);return;}if(process.env.NODE_ENV!=='production'){var payload={};payload[name]=value;ReactInstrumentation.debugTool.onHostOperation(ReactDOMComponentTree.getInstanceFromNode(node)._debugID,'update attribute',payload);}},setValueForAttribute:function setValueForAttribute(node,name,value){if(!isAttributeNameSafe(name)){return;}if(value==null){node.removeAttribute(name);}else{node.setAttribute(name,''+value);}if(process.env.NODE_ENV!=='production'){var payload={};payload[name]=value;ReactInstrumentation.debugTool.onHostOperation(ReactDOMComponentTree.getInstanceFromNode(node)._debugID,'update attribute',payload);}},/**
   * Deletes an attributes from a node.
   *
   * @param {DOMElement} node
   * @param {string} name
   */deleteValueForAttribute:function deleteValueForAttribute(node,name){node.removeAttribute(name);if(process.env.NODE_ENV!=='production'){ReactInstrumentation.debugTool.onHostOperation(ReactDOMComponentTree.getInstanceFromNode(node)._debugID,'remove attribute',name);}},/**
   * Deletes the value for a property on a node.
   *
   * @param {DOMElement} node
   * @param {string} name
   */deleteValueForProperty:function deleteValueForProperty(node,name){var propertyInfo=DOMProperty.properties.hasOwnProperty(name)?DOMProperty.properties[name]:null;if(propertyInfo){var mutationMethod=propertyInfo.mutationMethod;if(mutationMethod){mutationMethod(node,undefined);}else if(propertyInfo.mustUseProperty){var propName=propertyInfo.propertyName;if(propertyInfo.hasBooleanValue){node[propName]=false;}else{node[propName]='';}}else{node.removeAttribute(propertyInfo.attributeName);}}else if(DOMProperty.isCustomAttribute(name)){node.removeAttribute(name);}if(process.env.NODE_ENV!=='production'){ReactInstrumentation.debugTool.onHostOperation(ReactDOMComponentTree.getInstanceFromNode(node)._debugID,'remove attribute',name);}}};module.exports=DOMPropertyOperations;}).call(this,require('_process'));},{"./DOMProperty":88,"./ReactDOMComponentTree":120,"./ReactInstrumentation":151,"./quoteAttributeValueForBrowser":216,"_process":3,"fbjs/lib/warning":68}],90:[function(require,module,exports){(function(process){/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule Danger
 */'use strict';var _prodInvariant=require('./reactProdInvariant');var DOMLazyTree=require('./DOMLazyTree');var ExecutionEnvironment=require('fbjs/lib/ExecutionEnvironment');var createNodesFromMarkup=require('fbjs/lib/createNodesFromMarkup');var emptyFunction=require('fbjs/lib/emptyFunction');var invariant=require('fbjs/lib/invariant');var Danger={/**
   * Replaces a node with a string of markup at its current position within its
   * parent. The markup must render into a single root node.
   *
   * @param {DOMElement} oldChild Child node to replace.
   * @param {string} markup Markup to render in place of the child node.
   * @internal
   */dangerouslyReplaceNodeWithMarkup:function dangerouslyReplaceNodeWithMarkup(oldChild,markup){!ExecutionEnvironment.canUseDOM?process.env.NODE_ENV!=='production'?invariant(false,'dangerouslyReplaceNodeWithMarkup(...): Cannot render markup in a worker thread. Make sure `window` and `document` are available globally before requiring React when unit testing or use ReactDOMServer.renderToString() for server rendering.'):_prodInvariant('56'):void 0;!markup?process.env.NODE_ENV!=='production'?invariant(false,'dangerouslyReplaceNodeWithMarkup(...): Missing markup.'):_prodInvariant('57'):void 0;!(oldChild.nodeName!=='HTML')?process.env.NODE_ENV!=='production'?invariant(false,'dangerouslyReplaceNodeWithMarkup(...): Cannot replace markup of the <html> node. This is because browser quirks make this unreliable and/or slow. If you want to render to the root you must use server rendering. See ReactDOMServer.renderToString().'):_prodInvariant('58'):void 0;if(typeof markup==='string'){var newChild=createNodesFromMarkup(markup,emptyFunction)[0];oldChild.parentNode.replaceChild(newChild,oldChild);}else{DOMLazyTree.replaceChildWithTree(oldChild,markup);}}};module.exports=Danger;}).call(this,require('_process'));},{"./DOMLazyTree":86,"./reactProdInvariant":217,"_process":3,"fbjs/lib/ExecutionEnvironment":45,"fbjs/lib/createNodesFromMarkup":50,"fbjs/lib/emptyFunction":51,"fbjs/lib/invariant":59}],91:[function(require,module,exports){/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule DefaultEventPluginOrder
 */'use strict';var keyOf=require('fbjs/lib/keyOf');/**
 * Module that is injectable into `EventPluginHub`, that specifies a
 * deterministic ordering of `EventPlugin`s. A convenient way to reason about
 * plugins, without having to package every one of them. This is better than
 * having plugins be ordered in the same order that they are injected because
 * that ordering would be influenced by the packaging order.
 * `ResponderEventPlugin` must occur before `SimpleEventPlugin` so that
 * preventing default on events is convenient in `SimpleEventPlugin` handlers.
 */var DefaultEventPluginOrder=[keyOf({ResponderEventPlugin:null}),keyOf({SimpleEventPlugin:null}),keyOf({TapEventPlugin:null}),keyOf({EnterLeaveEventPlugin:null}),keyOf({ChangeEventPlugin:null}),keyOf({SelectEventPlugin:null}),keyOf({BeforeInputEventPlugin:null})];module.exports=DefaultEventPluginOrder;},{"fbjs/lib/keyOf":63}],92:[function(require,module,exports){/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule DisabledInputUtils
 */'use strict';var disableableMouseListenerNames={onClick:true,onDoubleClick:true,onMouseDown:true,onMouseMove:true,onMouseUp:true,onClickCapture:true,onDoubleClickCapture:true,onMouseDownCapture:true,onMouseMoveCapture:true,onMouseUpCapture:true};/**
 * Implements a host component that does not receive mouse events
 * when `disabled` is set.
 */var DisabledInputUtils={getHostProps:function getHostProps(inst,props){if(!props.disabled){return props;}// Copy the props, except the mouse listeners
var hostProps={};for(var key in props){if(!disableableMouseListenerNames[key]&&props.hasOwnProperty(key)){hostProps[key]=props[key];}}return hostProps;}};module.exports=DisabledInputUtils;},{}],93:[function(require,module,exports){/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule EnterLeaveEventPlugin
 */'use strict';var EventConstants=require('./EventConstants');var EventPropagators=require('./EventPropagators');var ReactDOMComponentTree=require('./ReactDOMComponentTree');var SyntheticMouseEvent=require('./SyntheticMouseEvent');var keyOf=require('fbjs/lib/keyOf');var topLevelTypes=EventConstants.topLevelTypes;var eventTypes={mouseEnter:{registrationName:keyOf({onMouseEnter:null}),dependencies:[topLevelTypes.topMouseOut,topLevelTypes.topMouseOver]},mouseLeave:{registrationName:keyOf({onMouseLeave:null}),dependencies:[topLevelTypes.topMouseOut,topLevelTypes.topMouseOver]}};var EnterLeaveEventPlugin={eventTypes:eventTypes,/**
   * For almost every interaction we care about, there will be both a top-level
   * `mouseover` and `mouseout` event that occurs. Only use `mouseout` so that
   * we do not extract duplicate events. However, moving the mouse into the
   * browser from outside will not fire a `mouseout` event. In this case, we use
   * the `mouseover` top-level event.
   */extractEvents:function extractEvents(topLevelType,targetInst,nativeEvent,nativeEventTarget){if(topLevelType===topLevelTypes.topMouseOver&&(nativeEvent.relatedTarget||nativeEvent.fromElement)){return null;}if(topLevelType!==topLevelTypes.topMouseOut&&topLevelType!==topLevelTypes.topMouseOver){// Must not be a mouse in or mouse out - ignoring.
return null;}var win;if(nativeEventTarget.window===nativeEventTarget){// `nativeEventTarget` is probably a window object.
win=nativeEventTarget;}else{// TODO: Figure out why `ownerDocument` is sometimes undefined in IE8.
var doc=nativeEventTarget.ownerDocument;if(doc){win=doc.defaultView||doc.parentWindow;}else{win=window;}}var from;var to;if(topLevelType===topLevelTypes.topMouseOut){from=targetInst;var related=nativeEvent.relatedTarget||nativeEvent.toElement;to=related?ReactDOMComponentTree.getClosestInstanceFromNode(related):null;}else{// Moving to a node from outside the window.
from=null;to=targetInst;}if(from===to){// Nothing pertains to our managed components.
return null;}var fromNode=from==null?win:ReactDOMComponentTree.getNodeFromInstance(from);var toNode=to==null?win:ReactDOMComponentTree.getNodeFromInstance(to);var leave=SyntheticMouseEvent.getPooled(eventTypes.mouseLeave,from,nativeEvent,nativeEventTarget);leave.type='mouseleave';leave.target=fromNode;leave.relatedTarget=toNode;var enter=SyntheticMouseEvent.getPooled(eventTypes.mouseEnter,to,nativeEvent,nativeEventTarget);enter.type='mouseenter';enter.target=toNode;enter.relatedTarget=fromNode;EventPropagators.accumulateEnterLeaveDispatches(leave,enter,from,to);return[leave,enter];}};module.exports=EnterLeaveEventPlugin;},{"./EventConstants":94,"./EventPropagators":98,"./ReactDOMComponentTree":120,"./SyntheticMouseEvent":186,"fbjs/lib/keyOf":63}],94:[function(require,module,exports){/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule EventConstants
 */'use strict';var keyMirror=require('fbjs/lib/keyMirror');var PropagationPhases=keyMirror({bubbled:null,captured:null});/**
 * Types of raw signals from the browser caught at the top level.
 */var topLevelTypes=keyMirror({topAbort:null,topAnimationEnd:null,topAnimationIteration:null,topAnimationStart:null,topBlur:null,topCanPlay:null,topCanPlayThrough:null,topChange:null,topClick:null,topCompositionEnd:null,topCompositionStart:null,topCompositionUpdate:null,topContextMenu:null,topCopy:null,topCut:null,topDoubleClick:null,topDrag:null,topDragEnd:null,topDragEnter:null,topDragExit:null,topDragLeave:null,topDragOver:null,topDragStart:null,topDrop:null,topDurationChange:null,topEmptied:null,topEncrypted:null,topEnded:null,topError:null,topFocus:null,topInput:null,topInvalid:null,topKeyDown:null,topKeyPress:null,topKeyUp:null,topLoad:null,topLoadedData:null,topLoadedMetadata:null,topLoadStart:null,topMouseDown:null,topMouseMove:null,topMouseOut:null,topMouseOver:null,topMouseUp:null,topPaste:null,topPause:null,topPlay:null,topPlaying:null,topProgress:null,topRateChange:null,topReset:null,topScroll:null,topSeeked:null,topSeeking:null,topSelectionChange:null,topStalled:null,topSubmit:null,topSuspend:null,topTextInput:null,topTimeUpdate:null,topTouchCancel:null,topTouchEnd:null,topTouchMove:null,topTouchStart:null,topTransitionEnd:null,topVolumeChange:null,topWaiting:null,topWheel:null});var EventConstants={topLevelTypes:topLevelTypes,PropagationPhases:PropagationPhases};module.exports=EventConstants;},{"fbjs/lib/keyMirror":62}],95:[function(require,module,exports){(function(process){/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule EventPluginHub
 */'use strict';var _prodInvariant=require('./reactProdInvariant');var EventPluginRegistry=require('./EventPluginRegistry');var EventPluginUtils=require('./EventPluginUtils');var ReactErrorUtils=require('./ReactErrorUtils');var accumulateInto=require('./accumulateInto');var forEachAccumulated=require('./forEachAccumulated');var invariant=require('fbjs/lib/invariant');/**
 * Internal store for event listeners
 */var listenerBank={};/**
 * Internal queue of events that have accumulated their dispatches and are
 * waiting to have their dispatches executed.
 */var eventQueue=null;/**
 * Dispatches an event and releases it back into the pool, unless persistent.
 *
 * @param {?object} event Synthetic event to be dispatched.
 * @param {boolean} simulated If the event is simulated (changes exn behavior)
 * @private
 */var executeDispatchesAndRelease=function executeDispatchesAndRelease(event,simulated){if(event){EventPluginUtils.executeDispatchesInOrder(event,simulated);if(!event.isPersistent()){event.constructor.release(event);}}};var executeDispatchesAndReleaseSimulated=function executeDispatchesAndReleaseSimulated(e){return executeDispatchesAndRelease(e,true);};var executeDispatchesAndReleaseTopLevel=function executeDispatchesAndReleaseTopLevel(e){return executeDispatchesAndRelease(e,false);};var getDictionaryKey=function getDictionaryKey(inst){// Prevents V8 performance issue:
// https://github.com/facebook/react/pull/7232
return'.'+inst._rootNodeID;};/**
 * This is a unified interface for event plugins to be installed and configured.
 *
 * Event plugins can implement the following properties:
 *
 *   `extractEvents` {function(string, DOMEventTarget, string, object): *}
 *     Required. When a top-level event is fired, this method is expected to
 *     extract synthetic events that will in turn be queued and dispatched.
 *
 *   `eventTypes` {object}
 *     Optional, plugins that fire events must publish a mapping of registration
 *     names that are used to register listeners. Values of this mapping must
 *     be objects that contain `registrationName` or `phasedRegistrationNames`.
 *
 *   `executeDispatch` {function(object, function, string)}
 *     Optional, allows plugins to override how an event gets dispatched. By
 *     default, the listener is simply invoked.
 *
 * Each plugin that is injected into `EventsPluginHub` is immediately operable.
 *
 * @public
 */var EventPluginHub={/**
   * Methods for injecting dependencies.
   */injection:{/**
     * @param {array} InjectedEventPluginOrder
     * @public
     */injectEventPluginOrder:EventPluginRegistry.injectEventPluginOrder,/**
     * @param {object} injectedNamesToPlugins Map from names to plugin modules.
     */injectEventPluginsByName:EventPluginRegistry.injectEventPluginsByName},/**
   * Stores `listener` at `listenerBank[registrationName][key]`. Is idempotent.
   *
   * @param {object} inst The instance, which is the source of events.
   * @param {string} registrationName Name of listener (e.g. `onClick`).
   * @param {function} listener The callback to store.
   */putListener:function putListener(inst,registrationName,listener){!(typeof listener==='function')?process.env.NODE_ENV!=='production'?invariant(false,'Expected %s listener to be a function, instead got type %s',registrationName,typeof listener==="undefined"?"undefined":_typeof4(listener)):_prodInvariant('94',registrationName,typeof listener==="undefined"?"undefined":_typeof4(listener)):void 0;var key=getDictionaryKey(inst);var bankForRegistrationName=listenerBank[registrationName]||(listenerBank[registrationName]={});bankForRegistrationName[key]=listener;var PluginModule=EventPluginRegistry.registrationNameModules[registrationName];if(PluginModule&&PluginModule.didPutListener){PluginModule.didPutListener(inst,registrationName,listener);}},/**
   * @param {object} inst The instance, which is the source of events.
   * @param {string} registrationName Name of listener (e.g. `onClick`).
   * @return {?function} The stored callback.
   */getListener:function getListener(inst,registrationName){var bankForRegistrationName=listenerBank[registrationName];var key=getDictionaryKey(inst);return bankForRegistrationName&&bankForRegistrationName[key];},/**
   * Deletes a listener from the registration bank.
   *
   * @param {object} inst The instance, which is the source of events.
   * @param {string} registrationName Name of listener (e.g. `onClick`).
   */deleteListener:function deleteListener(inst,registrationName){var PluginModule=EventPluginRegistry.registrationNameModules[registrationName];if(PluginModule&&PluginModule.willDeleteListener){PluginModule.willDeleteListener(inst,registrationName);}var bankForRegistrationName=listenerBank[registrationName];// TODO: This should never be null -- when is it?
if(bankForRegistrationName){var key=getDictionaryKey(inst);delete bankForRegistrationName[key];}},/**
   * Deletes all listeners for the DOM element with the supplied ID.
   *
   * @param {object} inst The instance, which is the source of events.
   */deleteAllListeners:function deleteAllListeners(inst){var key=getDictionaryKey(inst);for(var registrationName in listenerBank){if(!listenerBank.hasOwnProperty(registrationName)){continue;}if(!listenerBank[registrationName][key]){continue;}var PluginModule=EventPluginRegistry.registrationNameModules[registrationName];if(PluginModule&&PluginModule.willDeleteListener){PluginModule.willDeleteListener(inst,registrationName);}delete listenerBank[registrationName][key];}},/**
   * Allows registered plugins an opportunity to extract events from top-level
   * native browser events.
   *
   * @return {*} An accumulation of synthetic events.
   * @internal
   */extractEvents:function extractEvents(topLevelType,targetInst,nativeEvent,nativeEventTarget){var events;var plugins=EventPluginRegistry.plugins;for(var i=0;i<plugins.length;i++){// Not every plugin in the ordering may be loaded at runtime.
var possiblePlugin=plugins[i];if(possiblePlugin){var extractedEvents=possiblePlugin.extractEvents(topLevelType,targetInst,nativeEvent,nativeEventTarget);if(extractedEvents){events=accumulateInto(events,extractedEvents);}}}return events;},/**
   * Enqueues a synthetic event that should be dispatched when
   * `processEventQueue` is invoked.
   *
   * @param {*} events An accumulation of synthetic events.
   * @internal
   */enqueueEvents:function enqueueEvents(events){if(events){eventQueue=accumulateInto(eventQueue,events);}},/**
   * Dispatches all synthetic events on the event queue.
   *
   * @internal
   */processEventQueue:function processEventQueue(simulated){// Set `eventQueue` to null before processing it so that we can tell if more
// events get enqueued while processing.
var processingEventQueue=eventQueue;eventQueue=null;if(simulated){forEachAccumulated(processingEventQueue,executeDispatchesAndReleaseSimulated);}else{forEachAccumulated(processingEventQueue,executeDispatchesAndReleaseTopLevel);}!!eventQueue?process.env.NODE_ENV!=='production'?invariant(false,'processEventQueue(): Additional events were enqueued while processing an event queue. Support for this has not yet been implemented.'):_prodInvariant('95'):void 0;// This would be a good time to rethrow if any of the event handlers threw.
ReactErrorUtils.rethrowCaughtError();},/**
   * These are needed for tests only. Do not use!
   */__purge:function __purge(){listenerBank={};},__getListenerBank:function __getListenerBank(){return listenerBank;}};module.exports=EventPluginHub;}).call(this,require('_process'));},{"./EventPluginRegistry":96,"./EventPluginUtils":97,"./ReactErrorUtils":141,"./accumulateInto":193,"./forEachAccumulated":202,"./reactProdInvariant":217,"_process":3,"fbjs/lib/invariant":59}],96:[function(require,module,exports){(function(process){/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule EventPluginRegistry
 */'use strict';var _prodInvariant=require('./reactProdInvariant');var invariant=require('fbjs/lib/invariant');/**
 * Injectable ordering of event plugins.
 */var EventPluginOrder=null;/**
 * Injectable mapping from names to event plugin modules.
 */var namesToPlugins={};/**
 * Recomputes the plugin list using the injected plugins and plugin ordering.
 *
 * @private
 */function recomputePluginOrdering(){if(!EventPluginOrder){// Wait until an `EventPluginOrder` is injected.
return;}for(var pluginName in namesToPlugins){var PluginModule=namesToPlugins[pluginName];var pluginIndex=EventPluginOrder.indexOf(pluginName);!(pluginIndex>-1)?process.env.NODE_ENV!=='production'?invariant(false,'EventPluginRegistry: Cannot inject event plugins that do not exist in the plugin ordering, `%s`.',pluginName):_prodInvariant('96',pluginName):void 0;if(EventPluginRegistry.plugins[pluginIndex]){continue;}!PluginModule.extractEvents?process.env.NODE_ENV!=='production'?invariant(false,'EventPluginRegistry: Event plugins must implement an `extractEvents` method, but `%s` does not.',pluginName):_prodInvariant('97',pluginName):void 0;EventPluginRegistry.plugins[pluginIndex]=PluginModule;var publishedEvents=PluginModule.eventTypes;for(var eventName in publishedEvents){!publishEventForPlugin(publishedEvents[eventName],PluginModule,eventName)?process.env.NODE_ENV!=='production'?invariant(false,'EventPluginRegistry: Failed to publish event `%s` for plugin `%s`.',eventName,pluginName):_prodInvariant('98',eventName,pluginName):void 0;}}}/**
 * Publishes an event so that it can be dispatched by the supplied plugin.
 *
 * @param {object} dispatchConfig Dispatch configuration for the event.
 * @param {object} PluginModule Plugin publishing the event.
 * @return {boolean} True if the event was successfully published.
 * @private
 */function publishEventForPlugin(dispatchConfig,PluginModule,eventName){!!EventPluginRegistry.eventNameDispatchConfigs.hasOwnProperty(eventName)?process.env.NODE_ENV!=='production'?invariant(false,'EventPluginHub: More than one plugin attempted to publish the same event name, `%s`.',eventName):_prodInvariant('99',eventName):void 0;EventPluginRegistry.eventNameDispatchConfigs[eventName]=dispatchConfig;var phasedRegistrationNames=dispatchConfig.phasedRegistrationNames;if(phasedRegistrationNames){for(var phaseName in phasedRegistrationNames){if(phasedRegistrationNames.hasOwnProperty(phaseName)){var phasedRegistrationName=phasedRegistrationNames[phaseName];publishRegistrationName(phasedRegistrationName,PluginModule,eventName);}}return true;}else if(dispatchConfig.registrationName){publishRegistrationName(dispatchConfig.registrationName,PluginModule,eventName);return true;}return false;}/**
 * Publishes a registration name that is used to identify dispatched events and
 * can be used with `EventPluginHub.putListener` to register listeners.
 *
 * @param {string} registrationName Registration name to add.
 * @param {object} PluginModule Plugin publishing the event.
 * @private
 */function publishRegistrationName(registrationName,PluginModule,eventName){!!EventPluginRegistry.registrationNameModules[registrationName]?process.env.NODE_ENV!=='production'?invariant(false,'EventPluginHub: More than one plugin attempted to publish the same registration name, `%s`.',registrationName):_prodInvariant('100',registrationName):void 0;EventPluginRegistry.registrationNameModules[registrationName]=PluginModule;EventPluginRegistry.registrationNameDependencies[registrationName]=PluginModule.eventTypes[eventName].dependencies;if(process.env.NODE_ENV!=='production'){var lowerCasedName=registrationName.toLowerCase();EventPluginRegistry.possibleRegistrationNames[lowerCasedName]=registrationName;if(registrationName==='onDoubleClick'){EventPluginRegistry.possibleRegistrationNames.ondblclick=registrationName;}}}/**
 * Registers plugins so that they can extract and dispatch events.
 *
 * @see {EventPluginHub}
 */var EventPluginRegistry={/**
   * Ordered list of injected plugins.
   */plugins:[],/**
   * Mapping from event name to dispatch config
   */eventNameDispatchConfigs:{},/**
   * Mapping from registration name to plugin module
   */registrationNameModules:{},/**
   * Mapping from registration name to event name
   */registrationNameDependencies:{},/**
   * Mapping from lowercase registration names to the properly cased version,
   * used to warn in the case of missing event handlers. Available
   * only in __DEV__.
   * @type {Object}
   */possibleRegistrationNames:process.env.NODE_ENV!=='production'?{}:null,/**
   * Injects an ordering of plugins (by plugin name). This allows the ordering
   * to be decoupled from injection of the actual plugins so that ordering is
   * always deterministic regardless of packaging, on-the-fly injection, etc.
   *
   * @param {array} InjectedEventPluginOrder
   * @internal
   * @see {EventPluginHub.injection.injectEventPluginOrder}
   */injectEventPluginOrder:function injectEventPluginOrder(InjectedEventPluginOrder){!!EventPluginOrder?process.env.NODE_ENV!=='production'?invariant(false,'EventPluginRegistry: Cannot inject event plugin ordering more than once. You are likely trying to load more than one copy of React.'):_prodInvariant('101'):void 0;// Clone the ordering so it cannot be dynamically mutated.
EventPluginOrder=Array.prototype.slice.call(InjectedEventPluginOrder);recomputePluginOrdering();},/**
   * Injects plugins to be used by `EventPluginHub`. The plugin names must be
   * in the ordering injected by `injectEventPluginOrder`.
   *
   * Plugins can be injected as part of page initialization or on-the-fly.
   *
   * @param {object} injectedNamesToPlugins Map from names to plugin modules.
   * @internal
   * @see {EventPluginHub.injection.injectEventPluginsByName}
   */injectEventPluginsByName:function injectEventPluginsByName(injectedNamesToPlugins){var isOrderingDirty=false;for(var pluginName in injectedNamesToPlugins){if(!injectedNamesToPlugins.hasOwnProperty(pluginName)){continue;}var PluginModule=injectedNamesToPlugins[pluginName];if(!namesToPlugins.hasOwnProperty(pluginName)||namesToPlugins[pluginName]!==PluginModule){!!namesToPlugins[pluginName]?process.env.NODE_ENV!=='production'?invariant(false,'EventPluginRegistry: Cannot inject two different event plugins using the same name, `%s`.',pluginName):_prodInvariant('102',pluginName):void 0;namesToPlugins[pluginName]=PluginModule;isOrderingDirty=true;}}if(isOrderingDirty){recomputePluginOrdering();}},/**
   * Looks up the plugin for the supplied event.
   *
   * @param {object} event A synthetic event.
   * @return {?object} The plugin that created the supplied event.
   * @internal
   */getPluginModuleForEvent:function getPluginModuleForEvent(event){var dispatchConfig=event.dispatchConfig;if(dispatchConfig.registrationName){return EventPluginRegistry.registrationNameModules[dispatchConfig.registrationName]||null;}for(var phase in dispatchConfig.phasedRegistrationNames){if(!dispatchConfig.phasedRegistrationNames.hasOwnProperty(phase)){continue;}var PluginModule=EventPluginRegistry.registrationNameModules[dispatchConfig.phasedRegistrationNames[phase]];if(PluginModule){return PluginModule;}}return null;},/**
   * Exposed for unit testing.
   * @private
   */_resetEventPlugins:function _resetEventPlugins(){EventPluginOrder=null;for(var pluginName in namesToPlugins){if(namesToPlugins.hasOwnProperty(pluginName)){delete namesToPlugins[pluginName];}}EventPluginRegistry.plugins.length=0;var eventNameDispatchConfigs=EventPluginRegistry.eventNameDispatchConfigs;for(var eventName in eventNameDispatchConfigs){if(eventNameDispatchConfigs.hasOwnProperty(eventName)){delete eventNameDispatchConfigs[eventName];}}var registrationNameModules=EventPluginRegistry.registrationNameModules;for(var registrationName in registrationNameModules){if(registrationNameModules.hasOwnProperty(registrationName)){delete registrationNameModules[registrationName];}}if(process.env.NODE_ENV!=='production'){var possibleRegistrationNames=EventPluginRegistry.possibleRegistrationNames;for(var lowerCasedName in possibleRegistrationNames){if(possibleRegistrationNames.hasOwnProperty(lowerCasedName)){delete possibleRegistrationNames[lowerCasedName];}}}}};module.exports=EventPluginRegistry;}).call(this,require('_process'));},{"./reactProdInvariant":217,"_process":3,"fbjs/lib/invariant":59}],97:[function(require,module,exports){(function(process){/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule EventPluginUtils
 */'use strict';var _prodInvariant=require('./reactProdInvariant');var EventConstants=require('./EventConstants');var ReactErrorUtils=require('./ReactErrorUtils');var invariant=require('fbjs/lib/invariant');var warning=require('fbjs/lib/warning');/**
 * Injected dependencies:
 *//**
 * - `ComponentTree`: [required] Module that can convert between React instances
 *   and actual node references.
 */var ComponentTree;var TreeTraversal;var injection={injectComponentTree:function injectComponentTree(Injected){ComponentTree=Injected;if(process.env.NODE_ENV!=='production'){process.env.NODE_ENV!=='production'?warning(Injected&&Injected.getNodeFromInstance&&Injected.getInstanceFromNode,'EventPluginUtils.injection.injectComponentTree(...): Injected '+'module is missing getNodeFromInstance or getInstanceFromNode.'):void 0;}},injectTreeTraversal:function injectTreeTraversal(Injected){TreeTraversal=Injected;if(process.env.NODE_ENV!=='production'){process.env.NODE_ENV!=='production'?warning(Injected&&Injected.isAncestor&&Injected.getLowestCommonAncestor,'EventPluginUtils.injection.injectTreeTraversal(...): Injected '+'module is missing isAncestor or getLowestCommonAncestor.'):void 0;}}};var topLevelTypes=EventConstants.topLevelTypes;function isEndish(topLevelType){return topLevelType===topLevelTypes.topMouseUp||topLevelType===topLevelTypes.topTouchEnd||topLevelType===topLevelTypes.topTouchCancel;}function isMoveish(topLevelType){return topLevelType===topLevelTypes.topMouseMove||topLevelType===topLevelTypes.topTouchMove;}function isStartish(topLevelType){return topLevelType===topLevelTypes.topMouseDown||topLevelType===topLevelTypes.topTouchStart;}var validateEventDispatches;if(process.env.NODE_ENV!=='production'){validateEventDispatches=function validateEventDispatches(event){var dispatchListeners=event._dispatchListeners;var dispatchInstances=event._dispatchInstances;var listenersIsArr=Array.isArray(dispatchListeners);var listenersLen=listenersIsArr?dispatchListeners.length:dispatchListeners?1:0;var instancesIsArr=Array.isArray(dispatchInstances);var instancesLen=instancesIsArr?dispatchInstances.length:dispatchInstances?1:0;process.env.NODE_ENV!=='production'?warning(instancesIsArr===listenersIsArr&&instancesLen===listenersLen,'EventPluginUtils: Invalid `event`.'):void 0;};}/**
 * Dispatch the event to the listener.
 * @param {SyntheticEvent} event SyntheticEvent to handle
 * @param {boolean} simulated If the event is simulated (changes exn behavior)
 * @param {function} listener Application-level callback
 * @param {*} inst Internal component instance
 */function executeDispatch(event,simulated,listener,inst){var type=event.type||'unknown-event';event.currentTarget=EventPluginUtils.getNodeFromInstance(inst);if(simulated){ReactErrorUtils.invokeGuardedCallbackWithCatch(type,listener,event);}else{ReactErrorUtils.invokeGuardedCallback(type,listener,event);}event.currentTarget=null;}/**
 * Standard/simple iteration through an event's collected dispatches.
 */function executeDispatchesInOrder(event,simulated){var dispatchListeners=event._dispatchListeners;var dispatchInstances=event._dispatchInstances;if(process.env.NODE_ENV!=='production'){validateEventDispatches(event);}if(Array.isArray(dispatchListeners)){for(var i=0;i<dispatchListeners.length;i++){if(event.isPropagationStopped()){break;}// Listeners and Instances are two parallel arrays that are always in sync.
executeDispatch(event,simulated,dispatchListeners[i],dispatchInstances[i]);}}else if(dispatchListeners){executeDispatch(event,simulated,dispatchListeners,dispatchInstances);}event._dispatchListeners=null;event._dispatchInstances=null;}/**
 * Standard/simple iteration through an event's collected dispatches, but stops
 * at the first dispatch execution returning true, and returns that id.
 *
 * @return {?string} id of the first dispatch execution who's listener returns
 * true, or null if no listener returned true.
 */function executeDispatchesInOrderStopAtTrueImpl(event){var dispatchListeners=event._dispatchListeners;var dispatchInstances=event._dispatchInstances;if(process.env.NODE_ENV!=='production'){validateEventDispatches(event);}if(Array.isArray(dispatchListeners)){for(var i=0;i<dispatchListeners.length;i++){if(event.isPropagationStopped()){break;}// Listeners and Instances are two parallel arrays that are always in sync.
if(dispatchListeners[i](event,dispatchInstances[i])){return dispatchInstances[i];}}}else if(dispatchListeners){if(dispatchListeners(event,dispatchInstances)){return dispatchInstances;}}return null;}/**
 * @see executeDispatchesInOrderStopAtTrueImpl
 */function executeDispatchesInOrderStopAtTrue(event){var ret=executeDispatchesInOrderStopAtTrueImpl(event);event._dispatchInstances=null;event._dispatchListeners=null;return ret;}/**
 * Execution of a "direct" dispatch - there must be at most one dispatch
 * accumulated on the event or it is considered an error. It doesn't really make
 * sense for an event with multiple dispatches (bubbled) to keep track of the
 * return values at each dispatch execution, but it does tend to make sense when
 * dealing with "direct" dispatches.
 *
 * @return {*} The return value of executing the single dispatch.
 */function executeDirectDispatch(event){if(process.env.NODE_ENV!=='production'){validateEventDispatches(event);}var dispatchListener=event._dispatchListeners;var dispatchInstance=event._dispatchInstances;!!Array.isArray(dispatchListener)?process.env.NODE_ENV!=='production'?invariant(false,'executeDirectDispatch(...): Invalid `event`.'):_prodInvariant('103'):void 0;event.currentTarget=dispatchListener?EventPluginUtils.getNodeFromInstance(dispatchInstance):null;var res=dispatchListener?dispatchListener(event):null;event.currentTarget=null;event._dispatchListeners=null;event._dispatchInstances=null;return res;}/**
 * @param {SyntheticEvent} event
 * @return {boolean} True iff number of dispatches accumulated is greater than 0.
 */function hasDispatches(event){return!!event._dispatchListeners;}/**
 * General utilities that are useful in creating custom Event Plugins.
 */var EventPluginUtils={isEndish:isEndish,isMoveish:isMoveish,isStartish:isStartish,executeDirectDispatch:executeDirectDispatch,executeDispatchesInOrder:executeDispatchesInOrder,executeDispatchesInOrderStopAtTrue:executeDispatchesInOrderStopAtTrue,hasDispatches:hasDispatches,getInstanceFromNode:function getInstanceFromNode(node){return ComponentTree.getInstanceFromNode(node);},getNodeFromInstance:function getNodeFromInstance(node){return ComponentTree.getNodeFromInstance(node);},isAncestor:function isAncestor(a,b){return TreeTraversal.isAncestor(a,b);},getLowestCommonAncestor:function getLowestCommonAncestor(a,b){return TreeTraversal.getLowestCommonAncestor(a,b);},getParentInstance:function getParentInstance(inst){return TreeTraversal.getParentInstance(inst);},traverseTwoPhase:function traverseTwoPhase(target,fn,arg){return TreeTraversal.traverseTwoPhase(target,fn,arg);},traverseEnterLeave:function traverseEnterLeave(from,to,fn,argFrom,argTo){return TreeTraversal.traverseEnterLeave(from,to,fn,argFrom,argTo);},injection:injection};module.exports=EventPluginUtils;}).call(this,require('_process'));},{"./EventConstants":94,"./ReactErrorUtils":141,"./reactProdInvariant":217,"_process":3,"fbjs/lib/invariant":59,"fbjs/lib/warning":68}],98:[function(require,module,exports){(function(process){/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule EventPropagators
 */'use strict';var EventConstants=require('./EventConstants');var EventPluginHub=require('./EventPluginHub');var EventPluginUtils=require('./EventPluginUtils');var accumulateInto=require('./accumulateInto');var forEachAccumulated=require('./forEachAccumulated');var warning=require('fbjs/lib/warning');var PropagationPhases=EventConstants.PropagationPhases;var getListener=EventPluginHub.getListener;/**
 * Some event types have a notion of different registration names for different
 * "phases" of propagation. This finds listeners by a given phase.
 */function listenerAtPhase(inst,event,propagationPhase){var registrationName=event.dispatchConfig.phasedRegistrationNames[propagationPhase];return getListener(inst,registrationName);}/**
 * Tags a `SyntheticEvent` with dispatched listeners. Creating this function
 * here, allows us to not have to bind or create functions for each event.
 * Mutating the event's members allows us to not have to create a wrapping
 * "dispatch" object that pairs the event with the listener.
 */function accumulateDirectionalDispatches(inst,upwards,event){if(process.env.NODE_ENV!=='production'){process.env.NODE_ENV!=='production'?warning(inst,'Dispatching inst must not be null'):void 0;}var phase=upwards?PropagationPhases.bubbled:PropagationPhases.captured;var listener=listenerAtPhase(inst,event,phase);if(listener){event._dispatchListeners=accumulateInto(event._dispatchListeners,listener);event._dispatchInstances=accumulateInto(event._dispatchInstances,inst);}}/**
 * Collect dispatches (must be entirely collected before dispatching - see unit
 * tests). Lazily allocate the array to conserve memory.  We must loop through
 * each event and perform the traversal for each one. We cannot perform a
 * single traversal for the entire collection of events because each event may
 * have a different target.
 */function accumulateTwoPhaseDispatchesSingle(event){if(event&&event.dispatchConfig.phasedRegistrationNames){EventPluginUtils.traverseTwoPhase(event._targetInst,accumulateDirectionalDispatches,event);}}/**
 * Same as `accumulateTwoPhaseDispatchesSingle`, but skips over the targetID.
 */function accumulateTwoPhaseDispatchesSingleSkipTarget(event){if(event&&event.dispatchConfig.phasedRegistrationNames){var targetInst=event._targetInst;var parentInst=targetInst?EventPluginUtils.getParentInstance(targetInst):null;EventPluginUtils.traverseTwoPhase(parentInst,accumulateDirectionalDispatches,event);}}/**
 * Accumulates without regard to direction, does not look for phased
 * registration names. Same as `accumulateDirectDispatchesSingle` but without
 * requiring that the `dispatchMarker` be the same as the dispatched ID.
 */function accumulateDispatches(inst,ignoredDirection,event){if(event&&event.dispatchConfig.registrationName){var registrationName=event.dispatchConfig.registrationName;var listener=getListener(inst,registrationName);if(listener){event._dispatchListeners=accumulateInto(event._dispatchListeners,listener);event._dispatchInstances=accumulateInto(event._dispatchInstances,inst);}}}/**
 * Accumulates dispatches on an `SyntheticEvent`, but only for the
 * `dispatchMarker`.
 * @param {SyntheticEvent} event
 */function accumulateDirectDispatchesSingle(event){if(event&&event.dispatchConfig.registrationName){accumulateDispatches(event._targetInst,null,event);}}function accumulateTwoPhaseDispatches(events){forEachAccumulated(events,accumulateTwoPhaseDispatchesSingle);}function accumulateTwoPhaseDispatchesSkipTarget(events){forEachAccumulated(events,accumulateTwoPhaseDispatchesSingleSkipTarget);}function accumulateEnterLeaveDispatches(leave,enter,from,to){EventPluginUtils.traverseEnterLeave(from,to,accumulateDispatches,leave,enter);}function accumulateDirectDispatches(events){forEachAccumulated(events,accumulateDirectDispatchesSingle);}/**
 * A small set of propagation patterns, each of which will accept a small amount
 * of information, and generate a set of "dispatch ready event objects" - which
 * are sets of events that have already been annotated with a set of dispatched
 * listener functions/ids. The API is designed this way to discourage these
 * propagation strategies from actually executing the dispatches, since we
 * always want to collect the entire set of dispatches before executing event a
 * single one.
 *
 * @constructor EventPropagators
 */var EventPropagators={accumulateTwoPhaseDispatches:accumulateTwoPhaseDispatches,accumulateTwoPhaseDispatchesSkipTarget:accumulateTwoPhaseDispatchesSkipTarget,accumulateDirectDispatches:accumulateDirectDispatches,accumulateEnterLeaveDispatches:accumulateEnterLeaveDispatches};module.exports=EventPropagators;}).call(this,require('_process'));},{"./EventConstants":94,"./EventPluginHub":95,"./EventPluginUtils":97,"./accumulateInto":193,"./forEachAccumulated":202,"_process":3,"fbjs/lib/warning":68}],99:[function(require,module,exports){/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule FallbackCompositionState
 */'use strict';var _assign=require('object-assign');var PooledClass=require('./PooledClass');var getTextContentAccessor=require('./getTextContentAccessor');/**
 * This helper class stores information about text content of a target node,
 * allowing comparison of content before and after a given event.
 *
 * Identify the node where selection currently begins, then observe
 * both its text content and its current position in the DOM. Since the
 * browser may natively replace the target node during composition, we can
 * use its position to find its replacement.
 *
 * @param {DOMEventTarget} root
 */function FallbackCompositionState(root){this._root=root;this._startText=this.getText();this._fallbackText=null;}_assign(FallbackCompositionState.prototype,{destructor:function destructor(){this._root=null;this._startText=null;this._fallbackText=null;},/**
   * Get current text of input.
   *
   * @return {string}
   */getText:function getText(){if('value'in this._root){return this._root.value;}return this._root[getTextContentAccessor()];},/**
   * Determine the differing substring between the initially stored
   * text content and the current content.
   *
   * @return {string}
   */getData:function getData(){if(this._fallbackText){return this._fallbackText;}var start;var startValue=this._startText;var startLength=startValue.length;var end;var endValue=this.getText();var endLength=endValue.length;for(start=0;start<startLength;start++){if(startValue[start]!==endValue[start]){break;}}var minEnd=startLength-start;for(end=1;end<=minEnd;end++){if(startValue[startLength-end]!==endValue[endLength-end]){break;}}var sliceTail=end>1?1-end:undefined;this._fallbackText=endValue.slice(start,sliceTail);return this._fallbackText;}});PooledClass.addPoolingTo(FallbackCompositionState);module.exports=FallbackCompositionState;},{"./PooledClass":103,"./getTextContentAccessor":210,"object-assign":344}],100:[function(require,module,exports){/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule HTMLDOMPropertyConfig
 */'use strict';var DOMProperty=require('./DOMProperty');var MUST_USE_PROPERTY=DOMProperty.injection.MUST_USE_PROPERTY;var HAS_BOOLEAN_VALUE=DOMProperty.injection.HAS_BOOLEAN_VALUE;var HAS_NUMERIC_VALUE=DOMProperty.injection.HAS_NUMERIC_VALUE;var HAS_POSITIVE_NUMERIC_VALUE=DOMProperty.injection.HAS_POSITIVE_NUMERIC_VALUE;var HAS_OVERLOADED_BOOLEAN_VALUE=DOMProperty.injection.HAS_OVERLOADED_BOOLEAN_VALUE;var HTMLDOMPropertyConfig={isCustomAttribute:RegExp.prototype.test.bind(new RegExp('^(data|aria)-['+DOMProperty.ATTRIBUTE_NAME_CHAR+']*$')),Properties:{/**
     * Standard Properties
     */accept:0,acceptCharset:0,accessKey:0,action:0,allowFullScreen:HAS_BOOLEAN_VALUE,allowTransparency:0,alt:0,// specifies target context for links with `preload` type
as:0,async:HAS_BOOLEAN_VALUE,autoComplete:0,// autoFocus is polyfilled/normalized by AutoFocusUtils
// autoFocus: HAS_BOOLEAN_VALUE,
autoPlay:HAS_BOOLEAN_VALUE,capture:HAS_BOOLEAN_VALUE,cellPadding:0,cellSpacing:0,charSet:0,challenge:0,checked:MUST_USE_PROPERTY|HAS_BOOLEAN_VALUE,cite:0,classID:0,className:0,cols:HAS_POSITIVE_NUMERIC_VALUE,colSpan:0,content:0,contentEditable:0,contextMenu:0,controls:HAS_BOOLEAN_VALUE,coords:0,crossOrigin:0,data:0,// For `<object />` acts as `src`.
dateTime:0,'default':HAS_BOOLEAN_VALUE,defer:HAS_BOOLEAN_VALUE,dir:0,disabled:HAS_BOOLEAN_VALUE,download:HAS_OVERLOADED_BOOLEAN_VALUE,draggable:0,encType:0,form:0,formAction:0,formEncType:0,formMethod:0,formNoValidate:HAS_BOOLEAN_VALUE,formTarget:0,frameBorder:0,headers:0,height:0,hidden:HAS_BOOLEAN_VALUE,high:0,href:0,hrefLang:0,htmlFor:0,httpEquiv:0,icon:0,id:0,inputMode:0,integrity:0,is:0,keyParams:0,keyType:0,kind:0,label:0,lang:0,list:0,loop:HAS_BOOLEAN_VALUE,low:0,manifest:0,marginHeight:0,marginWidth:0,max:0,maxLength:0,media:0,mediaGroup:0,method:0,min:0,minLength:0,// Caution; `option.selected` is not updated if `select.multiple` is
// disabled with `removeAttribute`.
multiple:MUST_USE_PROPERTY|HAS_BOOLEAN_VALUE,muted:MUST_USE_PROPERTY|HAS_BOOLEAN_VALUE,name:0,nonce:0,noValidate:HAS_BOOLEAN_VALUE,open:HAS_BOOLEAN_VALUE,optimum:0,pattern:0,placeholder:0,playsInline:HAS_BOOLEAN_VALUE,poster:0,preload:0,profile:0,radioGroup:0,readOnly:HAS_BOOLEAN_VALUE,referrerPolicy:0,rel:0,required:HAS_BOOLEAN_VALUE,reversed:HAS_BOOLEAN_VALUE,role:0,rows:HAS_POSITIVE_NUMERIC_VALUE,rowSpan:HAS_NUMERIC_VALUE,sandbox:0,scope:0,scoped:HAS_BOOLEAN_VALUE,scrolling:0,seamless:HAS_BOOLEAN_VALUE,selected:MUST_USE_PROPERTY|HAS_BOOLEAN_VALUE,shape:0,size:HAS_POSITIVE_NUMERIC_VALUE,sizes:0,span:HAS_POSITIVE_NUMERIC_VALUE,spellCheck:0,src:0,srcDoc:0,srcLang:0,srcSet:0,start:HAS_NUMERIC_VALUE,step:0,style:0,summary:0,tabIndex:0,target:0,title:0,// Setting .type throws on non-<input> tags
type:0,useMap:0,value:0,width:0,wmode:0,wrap:0,/**
     * RDFa Properties
     */about:0,datatype:0,inlist:0,prefix:0,// property is also supported for OpenGraph in meta tags.
property:0,resource:0,'typeof':0,vocab:0,/**
     * Non-standard Properties
     */// autoCapitalize and autoCorrect are supported in Mobile Safari for
// keyboard hints.
autoCapitalize:0,autoCorrect:0,// autoSave allows WebKit/Blink to persist values of input fields on page reloads
autoSave:0,// color is for Safari mask-icon link
color:0,// itemProp, itemScope, itemType are for
// Microdata support. See http://schema.org/docs/gs.html
itemProp:0,itemScope:HAS_BOOLEAN_VALUE,itemType:0,// itemID and itemRef are for Microdata support as well but
// only specified in the WHATWG spec document. See
// https://html.spec.whatwg.org/multipage/microdata.html#microdata-dom-api
itemID:0,itemRef:0,// results show looking glass icon and recent searches on input
// search fields in WebKit/Blink
results:0,// IE-only attribute that specifies security restrictions on an iframe
// as an alternative to the sandbox attribute on IE<10
security:0,// IE-only attribute that controls focus behavior
unselectable:0},DOMAttributeNames:{acceptCharset:'accept-charset',className:'class',htmlFor:'for',httpEquiv:'http-equiv'},DOMPropertyNames:{}};module.exports=HTMLDOMPropertyConfig;},{"./DOMProperty":88}],101:[function(require,module,exports){/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule KeyEscapeUtils
 * 
 */'use strict';/**
 * Escape and wrap key so it is safe to use as a reactid
 *
 * @param {string} key to be escaped.
 * @return {string} the escaped key.
 */function escape(key){var escapeRegex=/[=:]/g;var escaperLookup={'=':'=0',':':'=2'};var escapedString=(''+key).replace(escapeRegex,function(match){return escaperLookup[match];});return'$'+escapedString;}/**
 * Unescape and unwrap key for human-readable display
 *
 * @param {string} key to unescape.
 * @return {string} the unescaped key.
 */function unescape(key){var unescapeRegex=/(=0|=2)/g;var unescaperLookup={'=0':'=','=2':':'};var keySubstring=key[0]==='.'&&key[1]==='$'?key.substring(2):key.substring(1);return(''+keySubstring).replace(unescapeRegex,function(match){return unescaperLookup[match];});}var KeyEscapeUtils={escape:escape,unescape:unescape};module.exports=KeyEscapeUtils;},{}],102:[function(require,module,exports){(function(process){/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule LinkedValueUtils
 */'use strict';var _prodInvariant=require('./reactProdInvariant');var ReactPropTypes=require('./ReactPropTypes');var ReactPropTypeLocations=require('./ReactPropTypeLocations');var ReactPropTypesSecret=require('./ReactPropTypesSecret');var invariant=require('fbjs/lib/invariant');var warning=require('fbjs/lib/warning');var hasReadOnlyValue={'button':true,'checkbox':true,'image':true,'hidden':true,'radio':true,'reset':true,'submit':true};function _assertSingleLink(inputProps){!(inputProps.checkedLink==null||inputProps.valueLink==null)?process.env.NODE_ENV!=='production'?invariant(false,'Cannot provide a checkedLink and a valueLink. If you want to use checkedLink, you probably don\'t want to use valueLink and vice versa.'):_prodInvariant('87'):void 0;}function _assertValueLink(inputProps){_assertSingleLink(inputProps);!(inputProps.value==null&&inputProps.onChange==null)?process.env.NODE_ENV!=='production'?invariant(false,'Cannot provide a valueLink and a value or onChange event. If you want to use value or onChange, you probably don\'t want to use valueLink.'):_prodInvariant('88'):void 0;}function _assertCheckedLink(inputProps){_assertSingleLink(inputProps);!(inputProps.checked==null&&inputProps.onChange==null)?process.env.NODE_ENV!=='production'?invariant(false,'Cannot provide a checkedLink and a checked property or onChange event. If you want to use checked or onChange, you probably don\'t want to use checkedLink'):_prodInvariant('89'):void 0;}var propTypes={value:function value(props,propName,componentName){if(!props[propName]||hasReadOnlyValue[props.type]||props.onChange||props.readOnly||props.disabled){return null;}return new Error('You provided a `value` prop to a form field without an '+'`onChange` handler. This will render a read-only field. If '+'the field should be mutable use `defaultValue`. Otherwise, '+'set either `onChange` or `readOnly`.');},checked:function checked(props,propName,componentName){if(!props[propName]||props.onChange||props.readOnly||props.disabled){return null;}return new Error('You provided a `checked` prop to a form field without an '+'`onChange` handler. This will render a read-only field. If '+'the field should be mutable use `defaultChecked`. Otherwise, '+'set either `onChange` or `readOnly`.');},onChange:ReactPropTypes.func};var loggedTypeFailures={};function getDeclarationErrorAddendum(owner){if(owner){var name=owner.getName();if(name){return' Check the render method of `'+name+'`.';}}return'';}/**
 * Provide a linked `value` attribute for controlled forms. You should not use
 * this outside of the ReactDOM controlled form components.
 */var LinkedValueUtils={checkPropTypes:function checkPropTypes(tagName,props,owner){for(var propName in propTypes){if(propTypes.hasOwnProperty(propName)){var error=propTypes[propName](props,propName,tagName,ReactPropTypeLocations.prop,null,ReactPropTypesSecret);}if(error instanceof Error&&!(error.message in loggedTypeFailures)){// Only monitor this failure once because there tends to be a lot of the
// same error.
loggedTypeFailures[error.message]=true;var addendum=getDeclarationErrorAddendum(owner);process.env.NODE_ENV!=='production'?warning(false,'Failed form propType: %s%s',error.message,addendum):void 0;}}},/**
   * @param {object} inputProps Props for form component
   * @return {*} current value of the input either from value prop or link.
   */getValue:function getValue(inputProps){if(inputProps.valueLink){_assertValueLink(inputProps);return inputProps.valueLink.value;}return inputProps.value;},/**
   * @param {object} inputProps Props for form component
   * @return {*} current checked status of the input either from checked prop
   *             or link.
   */getChecked:function getChecked(inputProps){if(inputProps.checkedLink){_assertCheckedLink(inputProps);return inputProps.checkedLink.value;}return inputProps.checked;},/**
   * @param {object} inputProps Props for form component
   * @param {SyntheticEvent} event change event to handle
   */executeOnChange:function executeOnChange(inputProps,event){if(inputProps.valueLink){_assertValueLink(inputProps);return inputProps.valueLink.requestChange(event.target.value);}else if(inputProps.checkedLink){_assertCheckedLink(inputProps);return inputProps.checkedLink.requestChange(event.target.checked);}else if(inputProps.onChange){return inputProps.onChange.call(undefined,event);}}};module.exports=LinkedValueUtils;}).call(this,require('_process'));},{"./ReactPropTypeLocations":161,"./ReactPropTypes":162,"./ReactPropTypesSecret":163,"./reactProdInvariant":217,"_process":3,"fbjs/lib/invariant":59,"fbjs/lib/warning":68}],103:[function(require,module,exports){(function(process){/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule PooledClass
 */'use strict';var _prodInvariant=require('./reactProdInvariant');var invariant=require('fbjs/lib/invariant');/**
 * Static poolers. Several custom versions for each potential number of
 * arguments. A completely generic pooler is easy to implement, but would
 * require accessing the `arguments` object. In each of these, `this` refers to
 * the Class itself, not an instance. If any others are needed, simply add them
 * here, or in their own files.
 */var oneArgumentPooler=function oneArgumentPooler(copyFieldsFrom){var Klass=this;if(Klass.instancePool.length){var instance=Klass.instancePool.pop();Klass.call(instance,copyFieldsFrom);return instance;}else{return new Klass(copyFieldsFrom);}};var twoArgumentPooler=function twoArgumentPooler(a1,a2){var Klass=this;if(Klass.instancePool.length){var instance=Klass.instancePool.pop();Klass.call(instance,a1,a2);return instance;}else{return new Klass(a1,a2);}};var threeArgumentPooler=function threeArgumentPooler(a1,a2,a3){var Klass=this;if(Klass.instancePool.length){var instance=Klass.instancePool.pop();Klass.call(instance,a1,a2,a3);return instance;}else{return new Klass(a1,a2,a3);}};var fourArgumentPooler=function fourArgumentPooler(a1,a2,a3,a4){var Klass=this;if(Klass.instancePool.length){var instance=Klass.instancePool.pop();Klass.call(instance,a1,a2,a3,a4);return instance;}else{return new Klass(a1,a2,a3,a4);}};var fiveArgumentPooler=function fiveArgumentPooler(a1,a2,a3,a4,a5){var Klass=this;if(Klass.instancePool.length){var instance=Klass.instancePool.pop();Klass.call(instance,a1,a2,a3,a4,a5);return instance;}else{return new Klass(a1,a2,a3,a4,a5);}};var standardReleaser=function standardReleaser(instance){var Klass=this;!(instance instanceof Klass)?process.env.NODE_ENV!=='production'?invariant(false,'Trying to release an instance into a pool of a different type.'):_prodInvariant('25'):void 0;instance.destructor();if(Klass.instancePool.length<Klass.poolSize){Klass.instancePool.push(instance);}};var DEFAULT_POOL_SIZE=10;var DEFAULT_POOLER=oneArgumentPooler;/**
 * Augments `CopyConstructor` to be a poolable class, augmenting only the class
 * itself (statically) not adding any prototypical fields. Any CopyConstructor
 * you give this may have a `poolSize` property, and will look for a
 * prototypical `destructor` on instances.
 *
 * @param {Function} CopyConstructor Constructor that can be used to reset.
 * @param {Function} pooler Customizable pooler.
 */var addPoolingTo=function addPoolingTo(CopyConstructor,pooler){var NewKlass=CopyConstructor;NewKlass.instancePool=[];NewKlass.getPooled=pooler||DEFAULT_POOLER;if(!NewKlass.poolSize){NewKlass.poolSize=DEFAULT_POOL_SIZE;}NewKlass.release=standardReleaser;return NewKlass;};var PooledClass={addPoolingTo:addPoolingTo,oneArgumentPooler:oneArgumentPooler,twoArgumentPooler:twoArgumentPooler,threeArgumentPooler:threeArgumentPooler,fourArgumentPooler:fourArgumentPooler,fiveArgumentPooler:fiveArgumentPooler};module.exports=PooledClass;}).call(this,require('_process'));},{"./reactProdInvariant":217,"_process":3,"fbjs/lib/invariant":59}],104:[function(require,module,exports){(function(process){/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule React
 */'use strict';var _assign=require('object-assign');var ReactChildren=require('./ReactChildren');var ReactComponent=require('./ReactComponent');var ReactPureComponent=require('./ReactPureComponent');var ReactClass=require('./ReactClass');var ReactDOMFactories=require('./ReactDOMFactories');var ReactElement=require('./ReactElement');var ReactPropTypes=require('./ReactPropTypes');var ReactVersion=require('./ReactVersion');var onlyChild=require('./onlyChild');var warning=require('fbjs/lib/warning');var createElement=ReactElement.createElement;var createFactory=ReactElement.createFactory;var cloneElement=ReactElement.cloneElement;if(process.env.NODE_ENV!=='production'){var ReactElementValidator=require('./ReactElementValidator');createElement=ReactElementValidator.createElement;createFactory=ReactElementValidator.createFactory;cloneElement=ReactElementValidator.cloneElement;}var __spread=_assign;if(process.env.NODE_ENV!=='production'){var warned=false;__spread=function __spread(){process.env.NODE_ENV!=='production'?warning(warned,'React.__spread is deprecated and should not be used. Use '+'Object.assign directly or another helper function with similar '+'semantics. You may be seeing this warning due to your compiler. '+'See https://fb.me/react-spread-deprecation for more details.'):void 0;warned=true;return _assign.apply(null,arguments);};}var React={// Modern
Children:{map:ReactChildren.map,forEach:ReactChildren.forEach,count:ReactChildren.count,toArray:ReactChildren.toArray,only:onlyChild},Component:ReactComponent,PureComponent:ReactPureComponent,createElement:createElement,cloneElement:cloneElement,isValidElement:ReactElement.isValidElement,// Classic
PropTypes:ReactPropTypes,createClass:ReactClass.createClass,createFactory:createFactory,createMixin:function createMixin(mixin){// Currently a noop. Will be used to validate and trace mixins.
return mixin;},// This looks DOM specific but these are actually isomorphic helpers
// since they are just generating DOM strings.
DOM:ReactDOMFactories,version:ReactVersion,// Deprecated hook for JSX spread, don't use this for anything.
__spread:__spread};module.exports=React;}).call(this,require('_process'));},{"./ReactChildren":107,"./ReactClass":109,"./ReactComponent":110,"./ReactDOMFactories":123,"./ReactElement":138,"./ReactElementValidator":139,"./ReactPropTypes":162,"./ReactPureComponent":164,"./ReactVersion":174,"./onlyChild":215,"_process":3,"fbjs/lib/warning":68,"object-assign":344}],105:[function(require,module,exports){/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactBrowserEventEmitter
 */'use strict';var _assign=require('object-assign');var EventConstants=require('./EventConstants');var EventPluginRegistry=require('./EventPluginRegistry');var ReactEventEmitterMixin=require('./ReactEventEmitterMixin');var ViewportMetrics=require('./ViewportMetrics');var getVendorPrefixedEventName=require('./getVendorPrefixedEventName');var isEventSupported=require('./isEventSupported');/**
 * Summary of `ReactBrowserEventEmitter` event handling:
 *
 *  - Top-level delegation is used to trap most native browser events. This
 *    may only occur in the main thread and is the responsibility of
 *    ReactEventListener, which is injected and can therefore support pluggable
 *    event sources. This is the only work that occurs in the main thread.
 *
 *  - We normalize and de-duplicate events to account for browser quirks. This
 *    may be done in the worker thread.
 *
 *  - Forward these native events (with the associated top-level type used to
 *    trap it) to `EventPluginHub`, which in turn will ask plugins if they want
 *    to extract any synthetic events.
 *
 *  - The `EventPluginHub` will then process each event by annotating them with
 *    "dispatches", a sequence of listeners and IDs that care about that event.
 *
 *  - The `EventPluginHub` then dispatches the events.
 *
 * Overview of React and the event system:
 *
 * +------------+    .
 * |    DOM     |    .
 * +------------+    .
 *       |           .
 *       v           .
 * +------------+    .
 * | ReactEvent |    .
 * |  Listener  |    .
 * +------------+    .                         +-----------+
 *       |           .               +--------+|SimpleEvent|
 *       |           .               |         |Plugin     |
 * +-----|------+    .               v         +-----------+
 * |     |      |    .    +--------------+                    +------------+
 * |     +-----------.--->|EventPluginHub|                    |    Event   |
 * |            |    .    |              |     +-----------+  | Propagators|
 * | ReactEvent |    .    |              |     |TapEvent   |  |------------|
 * |  Emitter   |    .    |              |<---+|Plugin     |  |other plugin|
 * |            |    .    |              |     +-----------+  |  utilities |
 * |     +-----------.--->|              |                    +------------+
 * |     |      |    .    +--------------+
 * +-----|------+    .                ^        +-----------+
 *       |           .                |        |Enter/Leave|
 *       +           .                +-------+|Plugin     |
 * +-------------+   .                         +-----------+
 * | application |   .
 * |-------------|   .
 * |             |   .
 * |             |   .
 * +-------------+   .
 *                   .
 *    React Core     .  General Purpose Event Plugin System
 */var hasEventPageXY;var alreadyListeningTo={};var isMonitoringScrollValue=false;var reactTopListenersCounter=0;// For events like 'submit' which don't consistently bubble (which we trap at a
// lower node than `document`), binding at `document` would cause duplicate
// events so we don't include them here
var topEventMapping={topAbort:'abort',topAnimationEnd:getVendorPrefixedEventName('animationend')||'animationend',topAnimationIteration:getVendorPrefixedEventName('animationiteration')||'animationiteration',topAnimationStart:getVendorPrefixedEventName('animationstart')||'animationstart',topBlur:'blur',topCanPlay:'canplay',topCanPlayThrough:'canplaythrough',topChange:'change',topClick:'click',topCompositionEnd:'compositionend',topCompositionStart:'compositionstart',topCompositionUpdate:'compositionupdate',topContextMenu:'contextmenu',topCopy:'copy',topCut:'cut',topDoubleClick:'dblclick',topDrag:'drag',topDragEnd:'dragend',topDragEnter:'dragenter',topDragExit:'dragexit',topDragLeave:'dragleave',topDragOver:'dragover',topDragStart:'dragstart',topDrop:'drop',topDurationChange:'durationchange',topEmptied:'emptied',topEncrypted:'encrypted',topEnded:'ended',topError:'error',topFocus:'focus',topInput:'input',topKeyDown:'keydown',topKeyPress:'keypress',topKeyUp:'keyup',topLoadedData:'loadeddata',topLoadedMetadata:'loadedmetadata',topLoadStart:'loadstart',topMouseDown:'mousedown',topMouseMove:'mousemove',topMouseOut:'mouseout',topMouseOver:'mouseover',topMouseUp:'mouseup',topPaste:'paste',topPause:'pause',topPlay:'play',topPlaying:'playing',topProgress:'progress',topRateChange:'ratechange',topScroll:'scroll',topSeeked:'seeked',topSeeking:'seeking',topSelectionChange:'selectionchange',topStalled:'stalled',topSuspend:'suspend',topTextInput:'textInput',topTimeUpdate:'timeupdate',topTouchCancel:'touchcancel',topTouchEnd:'touchend',topTouchMove:'touchmove',topTouchStart:'touchstart',topTransitionEnd:getVendorPrefixedEventName('transitionend')||'transitionend',topVolumeChange:'volumechange',topWaiting:'waiting',topWheel:'wheel'};/**
 * To ensure no conflicts with other potential React instances on the page
 */var topListenersIDKey='_reactListenersID'+String(Math.random()).slice(2);function getListeningForDocument(mountAt){// In IE8, `mountAt` is a host object and doesn't have `hasOwnProperty`
// directly.
if(!Object.prototype.hasOwnProperty.call(mountAt,topListenersIDKey)){mountAt[topListenersIDKey]=reactTopListenersCounter++;alreadyListeningTo[mountAt[topListenersIDKey]]={};}return alreadyListeningTo[mountAt[topListenersIDKey]];}/**
 * `ReactBrowserEventEmitter` is used to attach top-level event listeners. For
 * example:
 *
 *   EventPluginHub.putListener('myID', 'onClick', myFunction);
 *
 * This would allocate a "registration" of `('onClick', myFunction)` on 'myID'.
 *
 * @internal
 */var ReactBrowserEventEmitter=_assign({},ReactEventEmitterMixin,{/**
   * Injectable event backend
   */ReactEventListener:null,injection:{/**
     * @param {object} ReactEventListener
     */injectReactEventListener:function injectReactEventListener(ReactEventListener){ReactEventListener.setHandleTopLevel(ReactBrowserEventEmitter.handleTopLevel);ReactBrowserEventEmitter.ReactEventListener=ReactEventListener;}},/**
   * Sets whether or not any created callbacks should be enabled.
   *
   * @param {boolean} enabled True if callbacks should be enabled.
   */setEnabled:function setEnabled(enabled){if(ReactBrowserEventEmitter.ReactEventListener){ReactBrowserEventEmitter.ReactEventListener.setEnabled(enabled);}},/**
   * @return {boolean} True if callbacks are enabled.
   */isEnabled:function isEnabled(){return!!(ReactBrowserEventEmitter.ReactEventListener&&ReactBrowserEventEmitter.ReactEventListener.isEnabled());},/**
   * We listen for bubbled touch events on the document object.
   *
   * Firefox v8.01 (and possibly others) exhibited strange behavior when
   * mounting `onmousemove` events at some node that was not the document
   * element. The symptoms were that if your mouse is not moving over something
   * contained within that mount point (for example on the background) the
   * top-level listeners for `onmousemove` won't be called. However, if you
   * register the `mousemove` on the document object, then it will of course
   * catch all `mousemove`s. This along with iOS quirks, justifies restricting
   * top-level listeners to the document object only, at least for these
   * movement types of events and possibly all events.
   *
   * @see http://www.quirksmode.org/blog/archives/2010/09/click_event_del.html
   *
   * Also, `keyup`/`keypress`/`keydown` do not bubble to the window on IE, but
   * they bubble to document.
   *
   * @param {string} registrationName Name of listener (e.g. `onClick`).
   * @param {object} contentDocumentHandle Document which owns the container
   */listenTo:function listenTo(registrationName,contentDocumentHandle){var mountAt=contentDocumentHandle;var isListening=getListeningForDocument(mountAt);var dependencies=EventPluginRegistry.registrationNameDependencies[registrationName];var topLevelTypes=EventConstants.topLevelTypes;for(var i=0;i<dependencies.length;i++){var dependency=dependencies[i];if(!(isListening.hasOwnProperty(dependency)&&isListening[dependency])){if(dependency===topLevelTypes.topWheel){if(isEventSupported('wheel')){ReactBrowserEventEmitter.ReactEventListener.trapBubbledEvent(topLevelTypes.topWheel,'wheel',mountAt);}else if(isEventSupported('mousewheel')){ReactBrowserEventEmitter.ReactEventListener.trapBubbledEvent(topLevelTypes.topWheel,'mousewheel',mountAt);}else{// Firefox needs to capture a different mouse scroll event.
// @see http://www.quirksmode.org/dom/events/tests/scroll.html
ReactBrowserEventEmitter.ReactEventListener.trapBubbledEvent(topLevelTypes.topWheel,'DOMMouseScroll',mountAt);}}else if(dependency===topLevelTypes.topScroll){if(isEventSupported('scroll',true)){ReactBrowserEventEmitter.ReactEventListener.trapCapturedEvent(topLevelTypes.topScroll,'scroll',mountAt);}else{ReactBrowserEventEmitter.ReactEventListener.trapBubbledEvent(topLevelTypes.topScroll,'scroll',ReactBrowserEventEmitter.ReactEventListener.WINDOW_HANDLE);}}else if(dependency===topLevelTypes.topFocus||dependency===topLevelTypes.topBlur){if(isEventSupported('focus',true)){ReactBrowserEventEmitter.ReactEventListener.trapCapturedEvent(topLevelTypes.topFocus,'focus',mountAt);ReactBrowserEventEmitter.ReactEventListener.trapCapturedEvent(topLevelTypes.topBlur,'blur',mountAt);}else if(isEventSupported('focusin')){// IE has `focusin` and `focusout` events which bubble.
// @see http://www.quirksmode.org/blog/archives/2008/04/delegating_the.html
ReactBrowserEventEmitter.ReactEventListener.trapBubbledEvent(topLevelTypes.topFocus,'focusin',mountAt);ReactBrowserEventEmitter.ReactEventListener.trapBubbledEvent(topLevelTypes.topBlur,'focusout',mountAt);}// to make sure blur and focus event listeners are only attached once
isListening[topLevelTypes.topBlur]=true;isListening[topLevelTypes.topFocus]=true;}else if(topEventMapping.hasOwnProperty(dependency)){ReactBrowserEventEmitter.ReactEventListener.trapBubbledEvent(dependency,topEventMapping[dependency],mountAt);}isListening[dependency]=true;}}},trapBubbledEvent:function trapBubbledEvent(topLevelType,handlerBaseName,handle){return ReactBrowserEventEmitter.ReactEventListener.trapBubbledEvent(topLevelType,handlerBaseName,handle);},trapCapturedEvent:function trapCapturedEvent(topLevelType,handlerBaseName,handle){return ReactBrowserEventEmitter.ReactEventListener.trapCapturedEvent(topLevelType,handlerBaseName,handle);},/**
   * Protect against document.createEvent() returning null
   * Some popup blocker extensions appear to do this:
   * https://github.com/facebook/react/issues/6887
   */supportsEventPageXY:function supportsEventPageXY(){if(!document.createEvent){return false;}var ev=document.createEvent('MouseEvent');return ev!=null&&'pageX'in ev;},/**
   * Listens to window scroll and resize events. We cache scroll values so that
   * application code can access them without triggering reflows.
   *
   * ViewportMetrics is only used by SyntheticMouse/TouchEvent and only when
   * pageX/pageY isn't supported (legacy browsers).
   *
   * NOTE: Scroll events do not bubble.
   *
   * @see http://www.quirksmode.org/dom/events/scroll.html
   */ensureScrollValueMonitoring:function ensureScrollValueMonitoring(){if(hasEventPageXY===undefined){hasEventPageXY=ReactBrowserEventEmitter.supportsEventPageXY();}if(!hasEventPageXY&&!isMonitoringScrollValue){var refresh=ViewportMetrics.refreshScrollValues;ReactBrowserEventEmitter.ReactEventListener.monitorScrollValue(refresh);isMonitoringScrollValue=true;}}});module.exports=ReactBrowserEventEmitter;},{"./EventConstants":94,"./EventPluginRegistry":96,"./ReactEventEmitterMixin":142,"./ViewportMetrics":192,"./getVendorPrefixedEventName":211,"./isEventSupported":213,"object-assign":344}],106:[function(require,module,exports){(function(process){/**
 * Copyright 2014-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactChildReconciler
 */'use strict';var ReactReconciler=require('./ReactReconciler');var instantiateReactComponent=require('./instantiateReactComponent');var KeyEscapeUtils=require('./KeyEscapeUtils');var shouldUpdateReactComponent=require('./shouldUpdateReactComponent');var traverseAllChildren=require('./traverseAllChildren');var warning=require('fbjs/lib/warning');var ReactComponentTreeHook;if(typeof process!=='undefined'&&process.env&&process.env.NODE_ENV==='test'){// Temporary hack.
// Inline requires don't work well with Jest:
// https://github.com/facebook/react/issues/7240
// Remove the inline requires when we don't need them anymore:
// https://github.com/facebook/react/pull/7178
ReactComponentTreeHook=require('./ReactComponentTreeHook');}function instantiateChild(childInstances,child,name,selfDebugID){// We found a component instance.
var keyUnique=childInstances[name]===undefined;if(process.env.NODE_ENV!=='production'){if(!ReactComponentTreeHook){ReactComponentTreeHook=require('./ReactComponentTreeHook');}if(!keyUnique){process.env.NODE_ENV!=='production'?warning(false,'flattenChildren(...): Encountered two children with the same key, '+'`%s`. Child keys must be unique; when two children share a key, only '+'the first child will be used.%s',KeyEscapeUtils.unescape(name),ReactComponentTreeHook.getStackAddendumByID(selfDebugID)):void 0;}}if(child!=null&&keyUnique){childInstances[name]=instantiateReactComponent(child,true);}}/**
 * ReactChildReconciler provides helpers for initializing or updating a set of
 * children. Its output is suitable for passing it onto ReactMultiChild which
 * does diffed reordering and insertion.
 */var ReactChildReconciler={/**
   * Generates a "mount image" for each of the supplied children. In the case
   * of `ReactDOMComponent`, a mount image is a string of markup.
   *
   * @param {?object} nestedChildNodes Nested child maps.
   * @return {?object} A set of child instances.
   * @internal
   */instantiateChildren:function instantiateChildren(nestedChildNodes,transaction,context,selfDebugID// 0 in production and for roots
){if(nestedChildNodes==null){return null;}var childInstances={};if(process.env.NODE_ENV!=='production'){traverseAllChildren(nestedChildNodes,function(childInsts,child,name){return instantiateChild(childInsts,child,name,selfDebugID);},childInstances);}else{traverseAllChildren(nestedChildNodes,instantiateChild,childInstances);}return childInstances;},/**
   * Updates the rendered children and returns a new set of children.
   *
   * @param {?object} prevChildren Previously initialized set of children.
   * @param {?object} nextChildren Flat child element maps.
   * @param {ReactReconcileTransaction} transaction
   * @param {object} context
   * @return {?object} A new set of child instances.
   * @internal
   */updateChildren:function updateChildren(prevChildren,nextChildren,mountImages,removedNodes,transaction,hostParent,hostContainerInfo,context,selfDebugID// 0 in production and for roots
){// We currently don't have a way to track moves here but if we use iterators
// instead of for..in we can zip the iterators and check if an item has
// moved.
// TODO: If nothing has changed, return the prevChildren object so that we
// can quickly bailout if nothing has changed.
if(!nextChildren&&!prevChildren){return;}var name;var prevChild;for(name in nextChildren){if(!nextChildren.hasOwnProperty(name)){continue;}prevChild=prevChildren&&prevChildren[name];var prevElement=prevChild&&prevChild._currentElement;var nextElement=nextChildren[name];if(prevChild!=null&&shouldUpdateReactComponent(prevElement,nextElement)){ReactReconciler.receiveComponent(prevChild,nextElement,transaction,context);nextChildren[name]=prevChild;}else{if(prevChild){removedNodes[name]=ReactReconciler.getHostNode(prevChild);ReactReconciler.unmountComponent(prevChild,false);}// The child must be instantiated before it's mounted.
var nextChildInstance=instantiateReactComponent(nextElement,true);nextChildren[name]=nextChildInstance;// Creating mount image now ensures refs are resolved in right order
// (see https://github.com/facebook/react/pull/7101 for explanation).
var nextChildMountImage=ReactReconciler.mountComponent(nextChildInstance,transaction,hostParent,hostContainerInfo,context,selfDebugID);mountImages.push(nextChildMountImage);}}// Unmount children that are no longer present.
for(name in prevChildren){if(prevChildren.hasOwnProperty(name)&&!(nextChildren&&nextChildren.hasOwnProperty(name))){prevChild=prevChildren[name];removedNodes[name]=ReactReconciler.getHostNode(prevChild);ReactReconciler.unmountComponent(prevChild,false);}}},/**
   * Unmounts all rendered children. This should be used to clean up children
   * when this component is unmounted.
   *
   * @param {?object} renderedChildren Previously initialized set of children.
   * @internal
   */unmountChildren:function unmountChildren(renderedChildren,safely){for(var name in renderedChildren){if(renderedChildren.hasOwnProperty(name)){var renderedChild=renderedChildren[name];ReactReconciler.unmountComponent(renderedChild,safely);}}}};module.exports=ReactChildReconciler;}).call(this,require('_process'));},{"./KeyEscapeUtils":101,"./ReactComponentTreeHook":113,"./ReactReconciler":166,"./instantiateReactComponent":212,"./shouldUpdateReactComponent":222,"./traverseAllChildren":223,"_process":3,"fbjs/lib/warning":68}],107:[function(require,module,exports){/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactChildren
 */'use strict';var PooledClass=require('./PooledClass');var ReactElement=require('./ReactElement');var emptyFunction=require('fbjs/lib/emptyFunction');var traverseAllChildren=require('./traverseAllChildren');var twoArgumentPooler=PooledClass.twoArgumentPooler;var fourArgumentPooler=PooledClass.fourArgumentPooler;var userProvidedKeyEscapeRegex=/\/+/g;function escapeUserProvidedKey(text){return(''+text).replace(userProvidedKeyEscapeRegex,'$&/');}/**
 * PooledClass representing the bookkeeping associated with performing a child
 * traversal. Allows avoiding binding callbacks.
 *
 * @constructor ForEachBookKeeping
 * @param {!function} forEachFunction Function to perform traversal with.
 * @param {?*} forEachContext Context to perform context with.
 */function ForEachBookKeeping(forEachFunction,forEachContext){this.func=forEachFunction;this.context=forEachContext;this.count=0;}ForEachBookKeeping.prototype.destructor=function(){this.func=null;this.context=null;this.count=0;};PooledClass.addPoolingTo(ForEachBookKeeping,twoArgumentPooler);function forEachSingleChild(bookKeeping,child,name){var func=bookKeeping.func;var context=bookKeeping.context;func.call(context,child,bookKeeping.count++);}/**
 * Iterates through children that are typically specified as `props.children`.
 *
 * See https://facebook.github.io/react/docs/top-level-api.html#react.children.foreach
 *
 * The provided forEachFunc(child, index) will be called for each
 * leaf child.
 *
 * @param {?*} children Children tree container.
 * @param {function(*, int)} forEachFunc
 * @param {*} forEachContext Context for forEachContext.
 */function forEachChildren(children,forEachFunc,forEachContext){if(children==null){return children;}var traverseContext=ForEachBookKeeping.getPooled(forEachFunc,forEachContext);traverseAllChildren(children,forEachSingleChild,traverseContext);ForEachBookKeeping.release(traverseContext);}/**
 * PooledClass representing the bookkeeping associated with performing a child
 * mapping. Allows avoiding binding callbacks.
 *
 * @constructor MapBookKeeping
 * @param {!*} mapResult Object containing the ordered map of results.
 * @param {!function} mapFunction Function to perform mapping with.
 * @param {?*} mapContext Context to perform mapping with.
 */function MapBookKeeping(mapResult,keyPrefix,mapFunction,mapContext){this.result=mapResult;this.keyPrefix=keyPrefix;this.func=mapFunction;this.context=mapContext;this.count=0;}MapBookKeeping.prototype.destructor=function(){this.result=null;this.keyPrefix=null;this.func=null;this.context=null;this.count=0;};PooledClass.addPoolingTo(MapBookKeeping,fourArgumentPooler);function mapSingleChildIntoContext(bookKeeping,child,childKey){var result=bookKeeping.result;var keyPrefix=bookKeeping.keyPrefix;var func=bookKeeping.func;var context=bookKeeping.context;var mappedChild=func.call(context,child,bookKeeping.count++);if(Array.isArray(mappedChild)){mapIntoWithKeyPrefixInternal(mappedChild,result,childKey,emptyFunction.thatReturnsArgument);}else if(mappedChild!=null){if(ReactElement.isValidElement(mappedChild)){mappedChild=ReactElement.cloneAndReplaceKey(mappedChild,// Keep both the (mapped) and old keys if they differ, just as
// traverseAllChildren used to do for objects as children
keyPrefix+(mappedChild.key&&(!child||child.key!==mappedChild.key)?escapeUserProvidedKey(mappedChild.key)+'/':'')+childKey);}result.push(mappedChild);}}function mapIntoWithKeyPrefixInternal(children,array,prefix,func,context){var escapedPrefix='';if(prefix!=null){escapedPrefix=escapeUserProvidedKey(prefix)+'/';}var traverseContext=MapBookKeeping.getPooled(array,escapedPrefix,func,context);traverseAllChildren(children,mapSingleChildIntoContext,traverseContext);MapBookKeeping.release(traverseContext);}/**
 * Maps children that are typically specified as `props.children`.
 *
 * See https://facebook.github.io/react/docs/top-level-api.html#react.children.map
 *
 * The provided mapFunction(child, key, index) will be called for each
 * leaf child.
 *
 * @param {?*} children Children tree container.
 * @param {function(*, int)} func The map function.
 * @param {*} context Context for mapFunction.
 * @return {object} Object containing the ordered map of results.
 */function mapChildren(children,func,context){if(children==null){return children;}var result=[];mapIntoWithKeyPrefixInternal(children,result,null,func,context);return result;}function forEachSingleChildDummy(traverseContext,child,name){return null;}/**
 * Count the number of children that are typically specified as
 * `props.children`.
 *
 * See https://facebook.github.io/react/docs/top-level-api.html#react.children.count
 *
 * @param {?*} children Children tree container.
 * @return {number} The number of children.
 */function countChildren(children,context){return traverseAllChildren(children,forEachSingleChildDummy,null);}/**
 * Flatten a children object (typically specified as `props.children`) and
 * return an array with appropriately re-keyed children.
 *
 * See https://facebook.github.io/react/docs/top-level-api.html#react.children.toarray
 */function toArray(children){var result=[];mapIntoWithKeyPrefixInternal(children,result,null,emptyFunction.thatReturnsArgument);return result;}var ReactChildren={forEach:forEachChildren,map:mapChildren,mapIntoWithKeyPrefixInternal:mapIntoWithKeyPrefixInternal,count:countChildren,toArray:toArray};module.exports=ReactChildren;},{"./PooledClass":103,"./ReactElement":138,"./traverseAllChildren":223,"fbjs/lib/emptyFunction":51}],108:[function(require,module,exports){(function(process){/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactChildrenMutationWarningHook
 */'use strict';var ReactComponentTreeHook=require('./ReactComponentTreeHook');var warning=require('fbjs/lib/warning');function handleElement(debugID,element){if(element==null){return;}if(element._shadowChildren===undefined){return;}if(element._shadowChildren===element.props.children){return;}var isMutated=false;if(Array.isArray(element._shadowChildren)){if(element._shadowChildren.length===element.props.children.length){for(var i=0;i<element._shadowChildren.length;i++){if(element._shadowChildren[i]!==element.props.children[i]){isMutated=true;}}}else{isMutated=true;}}if(!Array.isArray(element._shadowChildren)||isMutated){process.env.NODE_ENV!=='production'?warning(false,'Component\'s children should not be mutated.%s',ReactComponentTreeHook.getStackAddendumByID(debugID)):void 0;}}var ReactChildrenMutationWarningHook={onMountComponent:function onMountComponent(debugID){handleElement(debugID,ReactComponentTreeHook.getElement(debugID));},onUpdateComponent:function onUpdateComponent(debugID){handleElement(debugID,ReactComponentTreeHook.getElement(debugID));}};module.exports=ReactChildrenMutationWarningHook;}).call(this,require('_process'));},{"./ReactComponentTreeHook":113,"_process":3,"fbjs/lib/warning":68}],109:[function(require,module,exports){(function(process){/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactClass
 */'use strict';var _prodInvariant=require('./reactProdInvariant'),_assign=require('object-assign');var ReactComponent=require('./ReactComponent');var ReactElement=require('./ReactElement');var ReactPropTypeLocations=require('./ReactPropTypeLocations');var ReactPropTypeLocationNames=require('./ReactPropTypeLocationNames');var ReactNoopUpdateQueue=require('./ReactNoopUpdateQueue');var emptyObject=require('fbjs/lib/emptyObject');var invariant=require('fbjs/lib/invariant');var keyMirror=require('fbjs/lib/keyMirror');var keyOf=require('fbjs/lib/keyOf');var warning=require('fbjs/lib/warning');var MIXINS_KEY=keyOf({mixins:null});/**
 * Policies that describe methods in `ReactClassInterface`.
 */var SpecPolicy=keyMirror({/**
   * These methods may be defined only once by the class specification or mixin.
   */DEFINE_ONCE:null,/**
   * These methods may be defined by both the class specification and mixins.
   * Subsequent definitions will be chained. These methods must return void.
   */DEFINE_MANY:null,/**
   * These methods are overriding the base class.
   */OVERRIDE_BASE:null,/**
   * These methods are similar to DEFINE_MANY, except we assume they return
   * objects. We try to merge the keys of the return values of all the mixed in
   * functions. If there is a key conflict we throw.
   */DEFINE_MANY_MERGED:null});var injectedMixins=[];/**
 * Composite components are higher-level components that compose other composite
 * or host components.
 *
 * To create a new type of `ReactClass`, pass a specification of
 * your new class to `React.createClass`. The only requirement of your class
 * specification is that you implement a `render` method.
 *
 *   var MyComponent = React.createClass({
 *     render: function() {
 *       return <div>Hello World</div>;
 *     }
 *   });
 *
 * The class specification supports a specific protocol of methods that have
 * special meaning (e.g. `render`). See `ReactClassInterface` for
 * more the comprehensive protocol. Any other properties and methods in the
 * class specification will be available on the prototype.
 *
 * @interface ReactClassInterface
 * @internal
 */var ReactClassInterface={/**
   * An array of Mixin objects to include when defining your component.
   *
   * @type {array}
   * @optional
   */mixins:SpecPolicy.DEFINE_MANY,/**
   * An object containing properties and methods that should be defined on
   * the component's constructor instead of its prototype (static methods).
   *
   * @type {object}
   * @optional
   */statics:SpecPolicy.DEFINE_MANY,/**
   * Definition of prop types for this component.
   *
   * @type {object}
   * @optional
   */propTypes:SpecPolicy.DEFINE_MANY,/**
   * Definition of context types for this component.
   *
   * @type {object}
   * @optional
   */contextTypes:SpecPolicy.DEFINE_MANY,/**
   * Definition of context types this component sets for its children.
   *
   * @type {object}
   * @optional
   */childContextTypes:SpecPolicy.DEFINE_MANY,// ==== Definition methods ====
/**
   * Invoked when the component is mounted. Values in the mapping will be set on
   * `this.props` if that prop is not specified (i.e. using an `in` check).
   *
   * This method is invoked before `getInitialState` and therefore cannot rely
   * on `this.state` or use `this.setState`.
   *
   * @return {object}
   * @optional
   */getDefaultProps:SpecPolicy.DEFINE_MANY_MERGED,/**
   * Invoked once before the component is mounted. The return value will be used
   * as the initial value of `this.state`.
   *
   *   getInitialState: function() {
   *     return {
   *       isOn: false,
   *       fooBaz: new BazFoo()
   *     }
   *   }
   *
   * @return {object}
   * @optional
   */getInitialState:SpecPolicy.DEFINE_MANY_MERGED,/**
   * @return {object}
   * @optional
   */getChildContext:SpecPolicy.DEFINE_MANY_MERGED,/**
   * Uses props from `this.props` and state from `this.state` to render the
   * structure of the component.
   *
   * No guarantees are made about when or how often this method is invoked, so
   * it must not have side effects.
   *
   *   render: function() {
   *     var name = this.props.name;
   *     return <div>Hello, {name}!</div>;
   *   }
   *
   * @return {ReactComponent}
   * @nosideeffects
   * @required
   */render:SpecPolicy.DEFINE_ONCE,// ==== Delegate methods ====
/**
   * Invoked when the component is initially created and about to be mounted.
   * This may have side effects, but any external subscriptions or data created
   * by this method must be cleaned up in `componentWillUnmount`.
   *
   * @optional
   */componentWillMount:SpecPolicy.DEFINE_MANY,/**
   * Invoked when the component has been mounted and has a DOM representation.
   * However, there is no guarantee that the DOM node is in the document.
   *
   * Use this as an opportunity to operate on the DOM when the component has
   * been mounted (initialized and rendered) for the first time.
   *
   * @param {DOMElement} rootNode DOM element representing the component.
   * @optional
   */componentDidMount:SpecPolicy.DEFINE_MANY,/**
   * Invoked before the component receives new props.
   *
   * Use this as an opportunity to react to a prop transition by updating the
   * state using `this.setState`. Current props are accessed via `this.props`.
   *
   *   componentWillReceiveProps: function(nextProps, nextContext) {
   *     this.setState({
   *       likesIncreasing: nextProps.likeCount > this.props.likeCount
   *     });
   *   }
   *
   * NOTE: There is no equivalent `componentWillReceiveState`. An incoming prop
   * transition may cause a state change, but the opposite is not true. If you
   * need it, you are probably looking for `componentWillUpdate`.
   *
   * @param {object} nextProps
   * @optional
   */componentWillReceiveProps:SpecPolicy.DEFINE_MANY,/**
   * Invoked while deciding if the component should be updated as a result of
   * receiving new props, state and/or context.
   *
   * Use this as an opportunity to `return false` when you're certain that the
   * transition to the new props/state/context will not require a component
   * update.
   *
   *   shouldComponentUpdate: function(nextProps, nextState, nextContext) {
   *     return !equal(nextProps, this.props) ||
   *       !equal(nextState, this.state) ||
   *       !equal(nextContext, this.context);
   *   }
   *
   * @param {object} nextProps
   * @param {?object} nextState
   * @param {?object} nextContext
   * @return {boolean} True if the component should update.
   * @optional
   */shouldComponentUpdate:SpecPolicy.DEFINE_ONCE,/**
   * Invoked when the component is about to update due to a transition from
   * `this.props`, `this.state` and `this.context` to `nextProps`, `nextState`
   * and `nextContext`.
   *
   * Use this as an opportunity to perform preparation before an update occurs.
   *
   * NOTE: You **cannot** use `this.setState()` in this method.
   *
   * @param {object} nextProps
   * @param {?object} nextState
   * @param {?object} nextContext
   * @param {ReactReconcileTransaction} transaction
   * @optional
   */componentWillUpdate:SpecPolicy.DEFINE_MANY,/**
   * Invoked when the component's DOM representation has been updated.
   *
   * Use this as an opportunity to operate on the DOM when the component has
   * been updated.
   *
   * @param {object} prevProps
   * @param {?object} prevState
   * @param {?object} prevContext
   * @param {DOMElement} rootNode DOM element representing the component.
   * @optional
   */componentDidUpdate:SpecPolicy.DEFINE_MANY,/**
   * Invoked when the component is about to be removed from its parent and have
   * its DOM representation destroyed.
   *
   * Use this as an opportunity to deallocate any external resources.
   *
   * NOTE: There is no `componentDidUnmount` since your component will have been
   * destroyed by that point.
   *
   * @optional
   */componentWillUnmount:SpecPolicy.DEFINE_MANY,// ==== Advanced methods ====
/**
   * Updates the component's currently mounted DOM representation.
   *
   * By default, this implements React's rendering and reconciliation algorithm.
   * Sophisticated clients may wish to override this.
   *
   * @param {ReactReconcileTransaction} transaction
   * @internal
   * @overridable
   */updateComponent:SpecPolicy.OVERRIDE_BASE};/**
 * Mapping from class specification keys to special processing functions.
 *
 * Although these are declared like instance properties in the specification
 * when defining classes using `React.createClass`, they are actually static
 * and are accessible on the constructor instead of the prototype. Despite
 * being static, they must be defined outside of the "statics" key under
 * which all other static methods are defined.
 */var RESERVED_SPEC_KEYS={displayName:function displayName(Constructor,_displayName){Constructor.displayName=_displayName;},mixins:function mixins(Constructor,_mixins){if(_mixins){for(var i=0;i<_mixins.length;i++){mixSpecIntoComponent(Constructor,_mixins[i]);}}},childContextTypes:function childContextTypes(Constructor,_childContextTypes){if(process.env.NODE_ENV!=='production'){validateTypeDef(Constructor,_childContextTypes,ReactPropTypeLocations.childContext);}Constructor.childContextTypes=_assign({},Constructor.childContextTypes,_childContextTypes);},contextTypes:function contextTypes(Constructor,_contextTypes){if(process.env.NODE_ENV!=='production'){validateTypeDef(Constructor,_contextTypes,ReactPropTypeLocations.context);}Constructor.contextTypes=_assign({},Constructor.contextTypes,_contextTypes);},/**
   * Special case getDefaultProps which should move into statics but requires
   * automatic merging.
   */getDefaultProps:function getDefaultProps(Constructor,_getDefaultProps){if(Constructor.getDefaultProps){Constructor.getDefaultProps=createMergedResultFunction(Constructor.getDefaultProps,_getDefaultProps);}else{Constructor.getDefaultProps=_getDefaultProps;}},propTypes:function propTypes(Constructor,_propTypes3){if(process.env.NODE_ENV!=='production'){validateTypeDef(Constructor,_propTypes3,ReactPropTypeLocations.prop);}Constructor.propTypes=_assign({},Constructor.propTypes,_propTypes3);},statics:function statics(Constructor,_statics){mixStaticSpecIntoComponent(Constructor,_statics);},autobind:function autobind(){}};// noop
function validateTypeDef(Constructor,typeDef,location){for(var propName in typeDef){if(typeDef.hasOwnProperty(propName)){// use a warning instead of an invariant so components
// don't show up in prod but only in __DEV__
process.env.NODE_ENV!=='production'?warning(typeof typeDef[propName]==='function','%s: %s type `%s` is invalid; it must be a function, usually from '+'React.PropTypes.',Constructor.displayName||'ReactClass',ReactPropTypeLocationNames[location],propName):void 0;}}}function validateMethodOverride(isAlreadyDefined,name){var specPolicy=ReactClassInterface.hasOwnProperty(name)?ReactClassInterface[name]:null;// Disallow overriding of base class methods unless explicitly allowed.
if(ReactClassMixin.hasOwnProperty(name)){!(specPolicy===SpecPolicy.OVERRIDE_BASE)?process.env.NODE_ENV!=='production'?invariant(false,'ReactClassInterface: You are attempting to override `%s` from your class specification. Ensure that your method names do not overlap with React methods.',name):_prodInvariant('73',name):void 0;}// Disallow defining methods more than once unless explicitly allowed.
if(isAlreadyDefined){!(specPolicy===SpecPolicy.DEFINE_MANY||specPolicy===SpecPolicy.DEFINE_MANY_MERGED)?process.env.NODE_ENV!=='production'?invariant(false,'ReactClassInterface: You are attempting to define `%s` on your component more than once. This conflict may be due to a mixin.',name):_prodInvariant('74',name):void 0;}}/**
 * Mixin helper which handles policy validation and reserved
 * specification keys when building React classes.
 */function mixSpecIntoComponent(Constructor,spec){if(!spec){if(process.env.NODE_ENV!=='production'){var typeofSpec=typeof spec==="undefined"?"undefined":_typeof4(spec);var isMixinValid=typeofSpec==='object'&&spec!==null;process.env.NODE_ENV!=='production'?warning(isMixinValid,'%s: You\'re attempting to include a mixin that is either null '+'or not an object. Check the mixins included by the component, '+'as well as any mixins they include themselves. '+'Expected object but got %s.',Constructor.displayName||'ReactClass',spec===null?null:typeofSpec):void 0;}return;}!(typeof spec!=='function')?process.env.NODE_ENV!=='production'?invariant(false,'ReactClass: You\'re attempting to use a component class or function as a mixin. Instead, just use a regular object.'):_prodInvariant('75'):void 0;!!ReactElement.isValidElement(spec)?process.env.NODE_ENV!=='production'?invariant(false,'ReactClass: You\'re attempting to use a component as a mixin. Instead, just use a regular object.'):_prodInvariant('76'):void 0;var proto=Constructor.prototype;var autoBindPairs=proto.__reactAutoBindPairs;// By handling mixins before any other properties, we ensure the same
// chaining order is applied to methods with DEFINE_MANY policy, whether
// mixins are listed before or after these methods in the spec.
if(spec.hasOwnProperty(MIXINS_KEY)){RESERVED_SPEC_KEYS.mixins(Constructor,spec.mixins);}for(var name in spec){if(!spec.hasOwnProperty(name)){continue;}if(name===MIXINS_KEY){// We have already handled mixins in a special case above.
continue;}var property=spec[name];var isAlreadyDefined=proto.hasOwnProperty(name);validateMethodOverride(isAlreadyDefined,name);if(RESERVED_SPEC_KEYS.hasOwnProperty(name)){RESERVED_SPEC_KEYS[name](Constructor,property);}else{// Setup methods on prototype:
// The following member methods should not be automatically bound:
// 1. Expected ReactClass methods (in the "interface").
// 2. Overridden methods (that were mixed in).
var isReactClassMethod=ReactClassInterface.hasOwnProperty(name);var isFunction=typeof property==='function';var shouldAutoBind=isFunction&&!isReactClassMethod&&!isAlreadyDefined&&spec.autobind!==false;if(shouldAutoBind){autoBindPairs.push(name,property);proto[name]=property;}else{if(isAlreadyDefined){var specPolicy=ReactClassInterface[name];// These cases should already be caught by validateMethodOverride.
!(isReactClassMethod&&(specPolicy===SpecPolicy.DEFINE_MANY_MERGED||specPolicy===SpecPolicy.DEFINE_MANY))?process.env.NODE_ENV!=='production'?invariant(false,'ReactClass: Unexpected spec policy %s for key %s when mixing in component specs.',specPolicy,name):_prodInvariant('77',specPolicy,name):void 0;// For methods which are defined more than once, call the existing
// methods before calling the new property, merging if appropriate.
if(specPolicy===SpecPolicy.DEFINE_MANY_MERGED){proto[name]=createMergedResultFunction(proto[name],property);}else if(specPolicy===SpecPolicy.DEFINE_MANY){proto[name]=createChainedFunction(proto[name],property);}}else{proto[name]=property;if(process.env.NODE_ENV!=='production'){// Add verbose displayName to the function, which helps when looking
// at profiling tools.
if(typeof property==='function'&&spec.displayName){proto[name].displayName=spec.displayName+'_'+name;}}}}}}}function mixStaticSpecIntoComponent(Constructor,statics){if(!statics){return;}for(var name in statics){var property=statics[name];if(!statics.hasOwnProperty(name)){continue;}var isReserved=name in RESERVED_SPEC_KEYS;!!isReserved?process.env.NODE_ENV!=='production'?invariant(false,'ReactClass: You are attempting to define a reserved property, `%s`, that shouldn\'t be on the "statics" key. Define it as an instance property instead; it will still be accessible on the constructor.',name):_prodInvariant('78',name):void 0;var isInherited=name in Constructor;!!isInherited?process.env.NODE_ENV!=='production'?invariant(false,'ReactClass: You are attempting to define `%s` on your component more than once. This conflict may be due to a mixin.',name):_prodInvariant('79',name):void 0;Constructor[name]=property;}}/**
 * Merge two objects, but throw if both contain the same key.
 *
 * @param {object} one The first object, which is mutated.
 * @param {object} two The second object
 * @return {object} one after it has been mutated to contain everything in two.
 */function mergeIntoWithNoDuplicateKeys(one,two){!(one&&two&&(typeof one==="undefined"?"undefined":_typeof4(one))==='object'&&(typeof two==="undefined"?"undefined":_typeof4(two))==='object')?process.env.NODE_ENV!=='production'?invariant(false,'mergeIntoWithNoDuplicateKeys(): Cannot merge non-objects.'):_prodInvariant('80'):void 0;for(var key in two){if(two.hasOwnProperty(key)){!(one[key]===undefined)?process.env.NODE_ENV!=='production'?invariant(false,'mergeIntoWithNoDuplicateKeys(): Tried to merge two objects with the same key: `%s`. This conflict may be due to a mixin; in particular, this may be caused by two getInitialState() or getDefaultProps() methods returning objects with clashing keys.',key):_prodInvariant('81',key):void 0;one[key]=two[key];}}return one;}/**
 * Creates a function that invokes two functions and merges their return values.
 *
 * @param {function} one Function to invoke first.
 * @param {function} two Function to invoke second.
 * @return {function} Function that invokes the two argument functions.
 * @private
 */function createMergedResultFunction(one,two){return function mergedResult(){var a=one.apply(this,arguments);var b=two.apply(this,arguments);if(a==null){return b;}else if(b==null){return a;}var c={};mergeIntoWithNoDuplicateKeys(c,a);mergeIntoWithNoDuplicateKeys(c,b);return c;};}/**
 * Creates a function that invokes two functions and ignores their return vales.
 *
 * @param {function} one Function to invoke first.
 * @param {function} two Function to invoke second.
 * @return {function} Function that invokes the two argument functions.
 * @private
 */function createChainedFunction(one,two){return function chainedFunction(){one.apply(this,arguments);two.apply(this,arguments);};}/**
 * Binds a method to the component.
 *
 * @param {object} component Component whose method is going to be bound.
 * @param {function} method Method to be bound.
 * @return {function} The bound method.
 */function bindAutoBindMethod(component,method){var boundMethod=method.bind(component);if(process.env.NODE_ENV!=='production'){boundMethod.__reactBoundContext=component;boundMethod.__reactBoundMethod=method;boundMethod.__reactBoundArguments=null;var componentName=component.constructor.displayName;var _bind=boundMethod.bind;boundMethod.bind=function(newThis){for(var _len=arguments.length,args=Array(_len>1?_len-1:0),_key=1;_key<_len;_key++){args[_key-1]=arguments[_key];}// User is trying to bind() an autobound method; we effectively will
// ignore the value of "this" that the user is trying to use, so
// let's warn.
if(newThis!==component&&newThis!==null){process.env.NODE_ENV!=='production'?warning(false,'bind(): React component methods may only be bound to the '+'component instance. See %s',componentName):void 0;}else if(!args.length){process.env.NODE_ENV!=='production'?warning(false,'bind(): You are binding a component method to the component. '+'React does this for you automatically in a high-performance '+'way, so you can safely remove this call. See %s',componentName):void 0;return boundMethod;}var reboundMethod=_bind.apply(boundMethod,arguments);reboundMethod.__reactBoundContext=component;reboundMethod.__reactBoundMethod=method;reboundMethod.__reactBoundArguments=args;return reboundMethod;};}return boundMethod;}/**
 * Binds all auto-bound methods in a component.
 *
 * @param {object} component Component whose method is going to be bound.
 */function bindAutoBindMethods(component){var pairs=component.__reactAutoBindPairs;for(var i=0;i<pairs.length;i+=2){var autoBindKey=pairs[i];var method=pairs[i+1];component[autoBindKey]=bindAutoBindMethod(component,method);}}/**
 * Add more to the ReactClass base class. These are all legacy features and
 * therefore not already part of the modern ReactComponent.
 */var ReactClassMixin={/**
   * TODO: This will be deprecated because state should always keep a consistent
   * type signature and the only use case for this, is to avoid that.
   */replaceState:function replaceState(newState,callback){this.updater.enqueueReplaceState(this,newState);if(callback){this.updater.enqueueCallback(this,callback,'replaceState');}},/**
   * Checks whether or not this composite component is mounted.
   * @return {boolean} True if mounted, false otherwise.
   * @protected
   * @final
   */isMounted:function isMounted(){return this.updater.isMounted(this);}};var ReactClassComponent=function ReactClassComponent(){};_assign(ReactClassComponent.prototype,ReactComponent.prototype,ReactClassMixin);/**
 * Module for creating composite components.
 *
 * @class ReactClass
 */var ReactClass={/**
   * Creates a composite component class given a class specification.
   * See https://facebook.github.io/react/docs/top-level-api.html#react.createclass
   *
   * @param {object} spec Class specification (which must define `render`).
   * @return {function} Component constructor function.
   * @public
   */createClass:function createClass(spec){var Constructor=function Constructor(props,context,updater){// This constructor gets overridden by mocks. The argument is used
// by mocks to assert on what gets mounted.
if(process.env.NODE_ENV!=='production'){process.env.NODE_ENV!=='production'?warning(this instanceof Constructor,'Something is calling a React component directly. Use a factory or '+'JSX instead. See: https://fb.me/react-legacyfactory'):void 0;}// Wire up auto-binding
if(this.__reactAutoBindPairs.length){bindAutoBindMethods(this);}this.props=props;this.context=context;this.refs=emptyObject;this.updater=updater||ReactNoopUpdateQueue;this.state=null;// ReactClasses doesn't have constructors. Instead, they use the
// getInitialState and componentWillMount methods for initialization.
var initialState=this.getInitialState?this.getInitialState():null;if(process.env.NODE_ENV!=='production'){// We allow auto-mocks to proceed as if they're returning null.
if(initialState===undefined&&this.getInitialState._isMockFunction){// This is probably bad practice. Consider warning here and
// deprecating this convenience.
initialState=null;}}!((typeof initialState==="undefined"?"undefined":_typeof4(initialState))==='object'&&!Array.isArray(initialState))?process.env.NODE_ENV!=='production'?invariant(false,'%s.getInitialState(): must return an object or null',Constructor.displayName||'ReactCompositeComponent'):_prodInvariant('82',Constructor.displayName||'ReactCompositeComponent'):void 0;this.state=initialState;};Constructor.prototype=new ReactClassComponent();Constructor.prototype.constructor=Constructor;Constructor.prototype.__reactAutoBindPairs=[];injectedMixins.forEach(mixSpecIntoComponent.bind(null,Constructor));mixSpecIntoComponent(Constructor,spec);// Initialize the defaultProps property after all mixins have been merged.
if(Constructor.getDefaultProps){Constructor.defaultProps=Constructor.getDefaultProps();}if(process.env.NODE_ENV!=='production'){// This is a tag to indicate that the use of these method names is ok,
// since it's used with createClass. If it's not, then it's likely a
// mistake so we'll warn you to use the static property, property
// initializer or constructor respectively.
if(Constructor.getDefaultProps){Constructor.getDefaultProps.isReactClassApproved={};}if(Constructor.prototype.getInitialState){Constructor.prototype.getInitialState.isReactClassApproved={};}}!MainWindow.render?process.env.NODE_ENV!=='production'?invariant(false,'createClass(...): Class specification must implement a `render` method.'):_prodInvariant('83'):void 0;if(process.env.NODE_ENV!=='production'){process.env.NODE_ENV!=='production'?warning(!Constructor.prototype.componentShouldUpdate,'%s has a method called '+'componentShouldUpdate(). Did you mean shouldComponentUpdate()? '+'The name is phrased as a question because the function is '+'expected to return a value.',spec.displayName||'A component'):void 0;process.env.NODE_ENV!=='production'?warning(!Constructor.prototype.componentWillRecieveProps,'%s has a method called '+'componentWillRecieveProps(). Did you mean componentWillReceiveProps()?',spec.displayName||'A component'):void 0;}// Reduce time spent doing lookups by setting these on the prototype.
for(var methodName in ReactClassInterface){if(!Constructor.prototype[methodName]){Constructor.prototype[methodName]=null;}}return Constructor;},injection:{injectMixin:function injectMixin(mixin){injectedMixins.push(mixin);}}};module.exports=ReactClass;}).call(this,require('_process'));},{"./ReactComponent":110,"./ReactElement":138,"./ReactNoopUpdateQueue":158,"./ReactPropTypeLocationNames":160,"./ReactPropTypeLocations":161,"./reactProdInvariant":217,"_process":3,"fbjs/lib/emptyObject":52,"fbjs/lib/invariant":59,"fbjs/lib/keyMirror":62,"fbjs/lib/keyOf":63,"fbjs/lib/warning":68,"object-assign":344}],110:[function(require,module,exports){(function(process){/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactComponent
 */'use strict';var _prodInvariant=require('./reactProdInvariant');var ReactNoopUpdateQueue=require('./ReactNoopUpdateQueue');var canDefineProperty=require('./canDefineProperty');var emptyObject=require('fbjs/lib/emptyObject');var invariant=require('fbjs/lib/invariant');var warning=require('fbjs/lib/warning');/**
 * Base class helpers for the updating state of a component.
 */function ReactComponent(props,context,updater){this.props=props;this.context=context;this.refs=emptyObject;// We initialize the default updater but the real one gets injected by the
// renderer.
this.updater=updater||ReactNoopUpdateQueue;}ReactComponent.prototype.isReactComponent={};/**
 * Sets a subset of the state. Always use this to mutate
 * state. You should treat `this.state` as immutable.
 *
 * There is no guarantee that `this.state` will be immediately updated, so
 * accessing `this.state` after calling this method may return the old value.
 *
 * There is no guarantee that calls to `setState` will run synchronously,
 * as they may eventually be batched together.  You can provide an optional
 * callback that will be executed when the call to setState is actually
 * completed.
 *
 * When a function is provided to setState, it will be called at some point in
 * the future (not synchronously). It will be called with the up to date
 * component arguments (state, props, context). These values can be different
 * from this.* because your function may be called after receiveProps but before
 * shouldComponentUpdate, and this new state, props, and context will not yet be
 * assigned to this.
 *
 * @param {object|function} partialState Next partial state or function to
 *        produce next partial state to be merged with current state.
 * @param {?function} callback Called after state is updated.
 * @final
 * @protected
 */ReactComponent.prototype.setState=function(partialState,callback){!((typeof partialState==="undefined"?"undefined":_typeof4(partialState))==='object'||typeof partialState==='function'||partialState==null)?process.env.NODE_ENV!=='production'?invariant(false,'setState(...): takes an object of state variables to update or a function which returns an object of state variables.'):_prodInvariant('85'):void 0;this.updater.enqueueSetState(this,partialState);if(callback){this.updater.enqueueCallback(this,callback,'setState');}};/**
 * Forces an update. This should only be invoked when it is known with
 * certainty that we are **not** in a DOM transaction.
 *
 * You may want to call this when you know that some deeper aspect of the
 * component's state has changed but `setState` was not called.
 *
 * This will not invoke `shouldComponentUpdate`, but it will invoke
 * `componentWillUpdate` and `componentDidUpdate`.
 *
 * @param {?function} callback Called after update is complete.
 * @final
 * @protected
 */ReactComponent.prototype.forceUpdate=function(callback){this.updater.enqueueForceUpdate(this);if(callback){this.updater.enqueueCallback(this,callback,'forceUpdate');}};/**
 * Deprecated APIs. These APIs used to exist on classic React classes but since
 * we would like to deprecate them, we're not going to move them over to this
 * modern base class. Instead, we define a getter that warns if it's accessed.
 */if(process.env.NODE_ENV!=='production'){var deprecatedAPIs={isMounted:['isMounted','Instead, make sure to clean up subscriptions and pending requests in '+'componentWillUnmount to prevent memory leaks.'],replaceState:['replaceState','Refactor your code to use setState instead (see '+'https://github.com/facebook/react/issues/3236).']};var defineDeprecationWarning=function defineDeprecationWarning(methodName,info){if(canDefineProperty){Object.defineProperty(ReactComponent.prototype,methodName,{get:function get(){process.env.NODE_ENV!=='production'?warning(false,'%s(...) is deprecated in plain JavaScript React classes. %s',info[0],info[1]):void 0;return undefined;}});}};for(var fnName in deprecatedAPIs){if(deprecatedAPIs.hasOwnProperty(fnName)){defineDeprecationWarning(fnName,deprecatedAPIs[fnName]);}}}module.exports=ReactComponent;}).call(this,require('_process'));},{"./ReactNoopUpdateQueue":158,"./canDefineProperty":195,"./reactProdInvariant":217,"_process":3,"fbjs/lib/emptyObject":52,"fbjs/lib/invariant":59,"fbjs/lib/warning":68}],111:[function(require,module,exports){/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactComponentBrowserEnvironment
 */'use strict';var DOMChildrenOperations=require('./DOMChildrenOperations');var ReactDOMIDOperations=require('./ReactDOMIDOperations');/**
 * Abstracts away all functionality of the reconciler that requires knowledge of
 * the browser context. TODO: These callers should be refactored to avoid the
 * need for this injection.
 */var ReactComponentBrowserEnvironment={processChildrenUpdates:ReactDOMIDOperations.dangerouslyProcessChildrenUpdates,replaceNodeWithMarkup:DOMChildrenOperations.dangerouslyReplaceNodeWithMarkup};module.exports=ReactComponentBrowserEnvironment;},{"./DOMChildrenOperations":85,"./ReactDOMIDOperations":125}],112:[function(require,module,exports){(function(process){/**
 * Copyright 2014-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactComponentEnvironment
 */'use strict';var _prodInvariant=require('./reactProdInvariant');var invariant=require('fbjs/lib/invariant');var injected=false;var ReactComponentEnvironment={/**
   * Optionally injectable hook for swapping out mount images in the middle of
   * the tree.
   */replaceNodeWithMarkup:null,/**
   * Optionally injectable hook for processing a queue of child updates. Will
   * later move into MultiChildComponents.
   */processChildrenUpdates:null,injection:{injectEnvironment:function injectEnvironment(environment){!!injected?process.env.NODE_ENV!=='production'?invariant(false,'ReactCompositeComponent: injectEnvironment() can only be called once.'):_prodInvariant('104'):void 0;ReactComponentEnvironment.replaceNodeWithMarkup=environment.replaceNodeWithMarkup;ReactComponentEnvironment.processChildrenUpdates=environment.processChildrenUpdates;injected=true;}}};module.exports=ReactComponentEnvironment;}).call(this,require('_process'));},{"./reactProdInvariant":217,"_process":3,"fbjs/lib/invariant":59}],113:[function(require,module,exports){(function(process){/**
 * Copyright 2016-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactComponentTreeHook
 */'use strict';var _prodInvariant=require('./reactProdInvariant');var ReactCurrentOwner=require('./ReactCurrentOwner');var invariant=require('fbjs/lib/invariant');var warning=require('fbjs/lib/warning');function isNative(fn){// Based on isNative() from Lodash
var funcToString=Function.prototype.toString;var hasOwnProperty=Object.prototype.hasOwnProperty;var reIsNative=RegExp('^'+funcToString// Take an example native function source for comparison
.call(hasOwnProperty)// Strip regex characters so we can use it for regex
.replace(/[\\^$.*+?()[\]{}|]/g,'\\$&')// Remove hasOwnProperty from the template to make it generic
.replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,'$1.*?')+'$');try{var source=funcToString.call(fn);return reIsNative.test(source);}catch(err){return false;}}var canUseCollections=// Array.from
typeof Array.from==='function'&&// Map
typeof Map==='function'&&isNative(Map)&&// Map.prototype.keys
Map.prototype!=null&&typeof Map.prototype.keys==='function'&&isNative(Map.prototype.keys)&&// Set
typeof Set==='function'&&isNative(Set)&&// Set.prototype.keys
Set.prototype!=null&&typeof Set.prototype.keys==='function'&&isNative(Set.prototype.keys);var itemMap;var rootIDSet;var itemByKey;var rootByKey;if(canUseCollections){itemMap=new Map();rootIDSet=new Set();}else{itemByKey={};rootByKey={};}var unmountedIDs=[];// Use non-numeric keys to prevent V8 performance issues:
// https://github.com/facebook/react/pull/7232
function getKeyFromID(id){return'.'+id;}function getIDFromKey(key){return parseInt(key.substr(1),10);}function get(id){if(canUseCollections){return itemMap.get(id);}else{var key=getKeyFromID(id);return itemByKey[key];}}function remove(id){if(canUseCollections){itemMap['delete'](id);}else{var key=getKeyFromID(id);delete itemByKey[key];}}function create(id,element,parentID){var item={element:element,parentID:parentID,text:null,childIDs:[],isMounted:false,updateCount:0};if(canUseCollections){itemMap.set(id,item);}else{var key=getKeyFromID(id);itemByKey[key]=item;}}function addRoot(id){if(canUseCollections){rootIDSet.add(id);}else{var key=getKeyFromID(id);rootByKey[key]=true;}}function removeRoot(id){if(canUseCollections){rootIDSet['delete'](id);}else{var key=getKeyFromID(id);delete rootByKey[key];}}function getRegisteredIDs(){if(canUseCollections){return Array.from(itemMap.keys());}else{return Object.keys(itemByKey).map(getIDFromKey);}}function getRootIDs(){if(canUseCollections){return Array.from(rootIDSet.keys());}else{return Object.keys(rootByKey).map(getIDFromKey);}}function purgeDeep(id){var item=get(id);if(item){var childIDs=item.childIDs;remove(id);childIDs.forEach(purgeDeep);}}function describeComponentFrame(name,source,ownerName){return'\n    in '+name+(source?' (at '+source.fileName.replace(/^.*[\\\/]/,'')+':'+source.lineNumber+')':ownerName?' (created by '+ownerName+')':'');}function _getDisplayName(element){if(element==null){return'#empty';}else if(typeof element==='string'||typeof element==='number'){return'#text';}else if(typeof element.type==='string'){return element.type;}else{return element.type.displayName||element.type.name||'Unknown';}}function describeID(id){var name=ReactComponentTreeHook.getDisplayName(id);var element=ReactComponentTreeHook.getElement(id);var ownerID=ReactComponentTreeHook.getOwnerID(id);var ownerName;if(ownerID){ownerName=ReactComponentTreeHook.getDisplayName(ownerID);}process.env.NODE_ENV!=='production'?warning(element,'ReactComponentTreeHook: Missing React element for debugID %s when '+'building stack',id):void 0;return describeComponentFrame(name,element&&element._source,ownerName);}var ReactComponentTreeHook={onSetChildren:function onSetChildren(id,nextChildIDs){var item=get(id);item.childIDs=nextChildIDs;for(var i=0;i<nextChildIDs.length;i++){var nextChildID=nextChildIDs[i];var nextChild=get(nextChildID);!nextChild?process.env.NODE_ENV!=='production'?invariant(false,'Expected hook events to fire for the child before its parent includes it in onSetChildren().'):_prodInvariant('140'):void 0;!(nextChild.childIDs!=null||_typeof4(nextChild.element)!=='object'||nextChild.element==null)?process.env.NODE_ENV!=='production'?invariant(false,'Expected onSetChildren() to fire for a container child before its parent includes it in onSetChildren().'):_prodInvariant('141'):void 0;!nextChild.isMounted?process.env.NODE_ENV!=='production'?invariant(false,'Expected onMountComponent() to fire for the child before its parent includes it in onSetChildren().'):_prodInvariant('71'):void 0;if(nextChild.parentID==null){nextChild.parentID=id;// TODO: This shouldn't be necessary but mounting a new root during in
// componentWillMount currently causes not-yet-mounted components to
// be purged from our tree data so their parent ID is missing.
}!(nextChild.parentID===id)?process.env.NODE_ENV!=='production'?invariant(false,'Expected onBeforeMountComponent() parent and onSetChildren() to be consistent (%s has parents %s and %s).',nextChildID,nextChild.parentID,id):_prodInvariant('142',nextChildID,nextChild.parentID,id):void 0;}},onBeforeMountComponent:function onBeforeMountComponent(id,element,parentID){create(id,element,parentID);},onBeforeUpdateComponent:function onBeforeUpdateComponent(id,element){var item=get(id);if(!item||!item.isMounted){// We may end up here as a result of setState() in componentWillUnmount().
// In this case, ignore the element.
return;}item.element=element;},onMountComponent:function onMountComponent(id){var item=get(id);item.isMounted=true;var isRoot=item.parentID===0;if(isRoot){addRoot(id);}},onUpdateComponent:function onUpdateComponent(id){var item=get(id);if(!item||!item.isMounted){// We may end up here as a result of setState() in componentWillUnmount().
// In this case, ignore the element.
return;}item.updateCount++;},onUnmountComponent:function onUnmountComponent(id){var item=get(id);if(item){// We need to check if it exists.
// `item` might not exist if it is inside an error boundary, and a sibling
// error boundary child threw while mounting. Then this instance never
// got a chance to mount, but it still gets an unmounting event during
// the error boundary cleanup.
item.isMounted=false;var isRoot=item.parentID===0;if(isRoot){removeRoot(id);}}unmountedIDs.push(id);},purgeUnmountedComponents:function purgeUnmountedComponents(){if(ReactComponentTreeHook._preventPurging){// Should only be used for testing.
return;}for(var i=0;i<unmountedIDs.length;i++){var id=unmountedIDs[i];purgeDeep(id);}unmountedIDs.length=0;},isMounted:function isMounted(id){var item=get(id);return item?item.isMounted:false;},getCurrentStackAddendum:function getCurrentStackAddendum(topElement){var info='';if(topElement){var type=topElement.type;var name=typeof type==='function'?type.displayName||type.name:type;var owner=topElement._owner;info+=describeComponentFrame(name||'Unknown',topElement._source,owner&&owner.getName());}var currentOwner=ReactCurrentOwner.current;var id=currentOwner&&currentOwner._debugID;info+=ReactComponentTreeHook.getStackAddendumByID(id);return info;},getStackAddendumByID:function getStackAddendumByID(id){var info='';while(id){info+=describeID(id);id=ReactComponentTreeHook.getParentID(id);}return info;},getChildIDs:function getChildIDs(id){var item=get(id);return item?item.childIDs:[];},getDisplayName:function getDisplayName(id){var element=ReactComponentTreeHook.getElement(id);if(!element){return null;}return _getDisplayName(element);},getElement:function getElement(id){var item=get(id);return item?item.element:null;},getOwnerID:function getOwnerID(id){var element=ReactComponentTreeHook.getElement(id);if(!element||!element._owner){return null;}return element._owner._debugID;},getParentID:function getParentID(id){var item=get(id);return item?item.parentID:null;},getSource:function getSource(id){var item=get(id);var element=item?item.element:null;var source=element!=null?element._source:null;return source;},getText:function getText(id){var element=ReactComponentTreeHook.getElement(id);if(typeof element==='string'){return element;}else if(typeof element==='number'){return''+element;}else{return null;}},getUpdateCount:function getUpdateCount(id){var item=get(id);return item?item.updateCount:0;},getRegisteredIDs:getRegisteredIDs,getRootIDs:getRootIDs};module.exports=ReactComponentTreeHook;}).call(this,require('_process'));},{"./ReactCurrentOwner":115,"./reactProdInvariant":217,"_process":3,"fbjs/lib/invariant":59,"fbjs/lib/warning":68}],114:[function(require,module,exports){(function(process){/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactCompositeComponent
 */'use strict';var _prodInvariant=require('./reactProdInvariant'),_assign=require('object-assign');var ReactComponentEnvironment=require('./ReactComponentEnvironment');var ReactCurrentOwner=require('./ReactCurrentOwner');var ReactElement=require('./ReactElement');var ReactErrorUtils=require('./ReactErrorUtils');var ReactInstanceMap=require('./ReactInstanceMap');var ReactInstrumentation=require('./ReactInstrumentation');var ReactNodeTypes=require('./ReactNodeTypes');var ReactPropTypeLocations=require('./ReactPropTypeLocations');var ReactReconciler=require('./ReactReconciler');var checkReactTypeSpec=require('./checkReactTypeSpec');var emptyObject=require('fbjs/lib/emptyObject');var invariant=require('fbjs/lib/invariant');var shallowEqual=require('fbjs/lib/shallowEqual');var shouldUpdateReactComponent=require('./shouldUpdateReactComponent');var warning=require('fbjs/lib/warning');var CompositeTypes={ImpureClass:0,PureClass:1,StatelessFunctional:2};function StatelessComponent(Component){}StatelessComponent.prototype.render=function(){var Component=ReactInstanceMap.get(this)._currentElement.type;var element=Component(this.props,this.context,this.updater);warnIfInvalidElement(Component,element);return element;};function warnIfInvalidElement(Component,element){if(process.env.NODE_ENV!=='production'){process.env.NODE_ENV!=='production'?warning(element===null||element===false||ReactElement.isValidElement(element),'%s(...): A valid React element (or null) must be returned. You may have '+'returned undefined, an array or some other invalid object.',Component.displayName||Component.name||'Component'):void 0;process.env.NODE_ENV!=='production'?warning(!Component.childContextTypes,'%s(...): childContextTypes cannot be defined on a functional component.',Component.displayName||Component.name||'Component'):void 0;}}function shouldConstruct(Component){return!!(Component.prototype&&Component.prototype.isReactComponent);}function isPureComponent(Component){return!!(Component.prototype&&Component.prototype.isPureReactComponent);}// Separated into a function to contain deoptimizations caused by try/finally.
function measureLifeCyclePerf(fn,debugID,timerType){if(debugID===0){// Top-level wrappers (see ReactMount) and empty components (see
// ReactDOMEmptyComponent) are invisible to hooks and devtools.
// Both are implementation details that should go away in the future.
return fn();}ReactInstrumentation.debugTool.onBeginLifeCycleTimer(debugID,timerType);try{return fn();}finally{ReactInstrumentation.debugTool.onEndLifeCycleTimer(debugID,timerType);}}/**
 * ------------------ The Life-Cycle of a Composite Component ------------------
 *
 * - constructor: Initialization of state. The instance is now retained.
 *   - componentWillMount
 *   - render
 *   - [children's constructors]
 *     - [children's componentWillMount and render]
 *     - [children's componentDidMount]
 *     - componentDidMount
 *
 *       Update Phases:
 *       - componentWillReceiveProps (only called if parent updated)
 *       - shouldComponentUpdate
 *         - componentWillUpdate
 *           - render
 *           - [children's constructors or receive props phases]
 *         - componentDidUpdate
 *
 *     - componentWillUnmount
 *     - [children's componentWillUnmount]
 *   - [children destroyed]
 * - (destroyed): The instance is now blank, released by React and ready for GC.
 *
 * -----------------------------------------------------------------------------
 *//**
 * An incrementing ID assigned to each component when it is mounted. This is
 * used to enforce the order in which `ReactUpdates` updates dirty components.
 *
 * @private
 */var nextMountID=1;/**
 * @lends {ReactCompositeComponent.prototype}
 */var ReactCompositeComponentMixin={/**
   * Base constructor for all composite component.
   *
   * @param {ReactElement} element
   * @final
   * @internal
   */construct:function construct(element){this._currentElement=element;this._rootNodeID=0;this._compositeType=null;this._instance=null;this._hostParent=null;this._hostContainerInfo=null;// See ReactUpdateQueue
this._updateBatchNumber=null;this._pendingElement=null;this._pendingStateQueue=null;this._pendingReplaceState=false;this._pendingForceUpdate=false;this._renderedNodeType=null;this._renderedComponent=null;this._context=null;this._mountOrder=0;this._topLevelWrapper=null;// See ReactUpdates and ReactUpdateQueue.
this._pendingCallbacks=null;// ComponentWillUnmount shall only be called once
this._calledComponentWillUnmount=false;if(process.env.NODE_ENV!=='production'){this._warnedAboutRefsInRender=false;}},/**
   * Initializes the component, renders markup, and registers event listeners.
   *
   * @param {ReactReconcileTransaction|ReactServerRenderingTransaction} transaction
   * @param {?object} hostParent
   * @param {?object} hostContainerInfo
   * @param {?object} context
   * @return {?string} Rendered markup to be inserted into the DOM.
   * @final
   * @internal
   */mountComponent:function mountComponent(transaction,hostParent,hostContainerInfo,context){var _this=this;this._context=context;this._mountOrder=nextMountID++;this._hostParent=hostParent;this._hostContainerInfo=hostContainerInfo;var publicProps=this._currentElement.props;var publicContext=this._processContext(context);var Component=this._currentElement.type;var updateQueue=transaction.getUpdateQueue();// Initialize the public class
var doConstruct=shouldConstruct(Component);var inst=this._constructComponent(doConstruct,publicProps,publicContext,updateQueue);var renderedElement;// Support functional components
if(!doConstruct&&(inst==null||MainWindow.render==null)){renderedElement=inst;warnIfInvalidElement(Component,renderedElement);!(inst===null||inst===false||ReactElement.isValidElement(inst))?process.env.NODE_ENV!=='production'?invariant(false,'%s(...): A valid React element (or null) must be returned. You may have returned undefined, an array or some other invalid object.',Component.displayName||Component.name||'Component'):_prodInvariant('105',Component.displayName||Component.name||'Component'):void 0;inst=new StatelessComponent(Component);this._compositeType=CompositeTypes.StatelessFunctional;}else{if(isPureComponent(Component)){this._compositeType=CompositeTypes.PureClass;}else{this._compositeType=CompositeTypes.ImpureClass;}}if(process.env.NODE_ENV!=='production'){// This will throw later in _renderValidatedComponent, but add an early
// warning now to help debugging
if(inst.render==null){process.env.NODE_ENV!=='production'?warning(false,'%s(...): No `render` method found on the returned component '+'instance: you may have forgotten to define `render`.',Component.displayName||Component.name||'Component'):void 0;}var propsMutated=inst.props!==publicProps;var componentName=Component.displayName||Component.name||'Component';process.env.NODE_ENV!=='production'?warning(inst.props===undefined||!propsMutated,'%s(...): When calling super() in `%s`, make sure to pass '+'up the same props that your component\'s constructor was passed.',componentName,componentName):void 0;}// These should be set up in the constructor, but as a convenience for
// simpler class abstractions, we set them up after the fact.
inst.props=publicProps;inst.context=publicContext;inst.refs=emptyObject;inst.updater=updateQueue;this._instance=inst;// Store a reference from the instance back to the internal representation
ReactInstanceMap.set(inst,this);if(process.env.NODE_ENV!=='production'){// Since plain JS classes are defined without any special initialization
// logic, we can not catch common errors early. Therefore, we have to
// catch them here, at initialization time, instead.
process.env.NODE_ENV!=='production'?warning(!inst.getInitialState||inst.getInitialState.isReactClassApproved,'getInitialState was defined on %s, a plain JavaScript class. '+'This is only supported for classes created using React.createClass. '+'Did you mean to define a state property instead?',this.getName()||'a component'):void 0;process.env.NODE_ENV!=='production'?warning(!inst.getDefaultProps||inst.getDefaultProps.isReactClassApproved,'getDefaultProps was defined on %s, a plain JavaScript class. '+'This is only supported for classes created using React.createClass. '+'Use a static property to define defaultProps instead.',this.getName()||'a component'):void 0;process.env.NODE_ENV!=='production'?warning(!inst.propTypes,'propTypes was defined as an instance property on %s. Use a static '+'property to define propTypes instead.',this.getName()||'a component'):void 0;process.env.NODE_ENV!=='production'?warning(!inst.contextTypes,'contextTypes was defined as an instance property on %s. Use a '+'static property to define contextTypes instead.',this.getName()||'a component'):void 0;process.env.NODE_ENV!=='production'?warning(typeof inst.componentShouldUpdate!=='function','%s has a method called '+'componentShouldUpdate(). Did you mean shouldComponentUpdate()? '+'The name is phrased as a question because the function is '+'expected to return a value.',this.getName()||'A component'):void 0;process.env.NODE_ENV!=='production'?warning(typeof inst.componentDidUnmount!=='function','%s has a method called '+'componentDidUnmount(). But there is no such lifecycle method. '+'Did you mean componentWillUnmount()?',this.getName()||'A component'):void 0;process.env.NODE_ENV!=='production'?warning(typeof inst.componentWillRecieveProps!=='function','%s has a method called '+'componentWillRecieveProps(). Did you mean componentWillReceiveProps()?',this.getName()||'A component'):void 0;}var initialState=inst.state;if(initialState===undefined){inst.state=initialState=null;}!((typeof initialState==="undefined"?"undefined":_typeof4(initialState))==='object'&&!Array.isArray(initialState))?process.env.NODE_ENV!=='production'?invariant(false,'%s.state: must be set to an object or null',this.getName()||'ReactCompositeComponent'):_prodInvariant('106',this.getName()||'ReactCompositeComponent'):void 0;this._pendingStateQueue=null;this._pendingReplaceState=false;this._pendingForceUpdate=false;var markup;if(inst.unstable_handleError){markup=this.performInitialMountWithErrorHandling(renderedElement,hostParent,hostContainerInfo,transaction,context);}else{markup=this.performInitialMount(renderedElement,hostParent,hostContainerInfo,transaction,context);}if(inst.componentDidMount){if(process.env.NODE_ENV!=='production'){transaction.getReactMountReady().enqueue(function(){measureLifeCyclePerf(function(){return inst.componentDidMount();},_this._debugID,'componentDidMount');});}else{transaction.getReactMountReady().enqueue(inst.componentDidMount,inst);}}return markup;},_constructComponent:function _constructComponent(doConstruct,publicProps,publicContext,updateQueue){if(process.env.NODE_ENV!=='production'){ReactCurrentOwner.current=this;try{return this._constructComponentWithoutOwner(doConstruct,publicProps,publicContext,updateQueue);}finally{ReactCurrentOwner.current=null;}}else{return this._constructComponentWithoutOwner(doConstruct,publicProps,publicContext,updateQueue);}},_constructComponentWithoutOwner:function _constructComponentWithoutOwner(doConstruct,publicProps,publicContext,updateQueue){var Component=this._currentElement.type;if(doConstruct){if(process.env.NODE_ENV!=='production'){return measureLifeCyclePerf(function(){return new Component(publicProps,publicContext,updateQueue);},this._debugID,'ctor');}else{return new Component(publicProps,publicContext,updateQueue);}}// This can still be an instance in case of factory components
// but we'll count this as time spent rendering as the more common case.
if(process.env.NODE_ENV!=='production'){return measureLifeCyclePerf(function(){return Component(publicProps,publicContext,updateQueue);},this._debugID,'render');}else{return Component(publicProps,publicContext,updateQueue);}},performInitialMountWithErrorHandling:function performInitialMountWithErrorHandling(renderedElement,hostParent,hostContainerInfo,transaction,context){var markup;var checkpoint=transaction.checkpoint();try{markup=this.performInitialMount(renderedElement,hostParent,hostContainerInfo,transaction,context);}catch(e){// Roll back to checkpoint, handle error (which may add items to the transaction), and take a new checkpoint
transaction.rollback(checkpoint);this._instance.unstable_handleError(e);if(this._pendingStateQueue){this._instance.state=this._processPendingState(this._instance.props,this._instance.context);}checkpoint=transaction.checkpoint();this._renderedComponent.unmountComponent(true);transaction.rollback(checkpoint);// Try again - we've informed the component about the error, so they can render an error message this time.
// If this throws again, the error will bubble up (and can be caught by a higher error boundary).
markup=this.performInitialMount(renderedElement,hostParent,hostContainerInfo,transaction,context);}return markup;},performInitialMount:function performInitialMount(renderedElement,hostParent,hostContainerInfo,transaction,context){var inst=this._instance;var debugID=0;if(process.env.NODE_ENV!=='production'){debugID=this._debugID;}if(inst.componentWillMount){if(process.env.NODE_ENV!=='production'){measureLifeCyclePerf(function(){return inst.componentWillMount();},debugID,'componentWillMount');}else{inst.componentWillMount();}// When mounting, calls to `setState` by `componentWillMount` will set
// `this._pendingStateQueue` without triggering a re-render.
if(this._pendingStateQueue){inst.state=this._processPendingState(inst.props,inst.context);}}// If not a stateless component, we now render
if(renderedElement===undefined){renderedElement=this._renderValidatedComponent();}var nodeType=ReactNodeTypes.getType(renderedElement);this._renderedNodeType=nodeType;var child=this._instantiateReactComponent(renderedElement,nodeType!==ReactNodeTypes.EMPTY/* shouldHaveDebugID */);this._renderedComponent=child;var markup=ReactReconciler.mountComponent(child,transaction,hostParent,hostContainerInfo,this._processChildContext(context),debugID);if(process.env.NODE_ENV!=='production'){if(debugID!==0){var childDebugIDs=child._debugID!==0?[child._debugID]:[];ReactInstrumentation.debugTool.onSetChildren(debugID,childDebugIDs);}}return markup;},getHostNode:function getHostNode(){return ReactReconciler.getHostNode(this._renderedComponent);},/**
   * Releases any resources allocated by `mountComponent`.
   *
   * @final
   * @internal
   */unmountComponent:function unmountComponent(safely){if(!this._renderedComponent){return;}var inst=this._instance;if(inst.componentWillUnmount&&!inst._calledComponentWillUnmount){inst._calledComponentWillUnmount=true;if(safely){var name=this.getName()+'.componentWillUnmount()';ReactErrorUtils.invokeGuardedCallback(name,inst.componentWillUnmount.bind(inst));}else{if(process.env.NODE_ENV!=='production'){measureLifeCyclePerf(function(){return inst.componentWillUnmount();},this._debugID,'componentWillUnmount');}else{inst.componentWillUnmount();}}}if(this._renderedComponent){ReactReconciler.unmountComponent(this._renderedComponent,safely);this._renderedNodeType=null;this._renderedComponent=null;this._instance=null;}// Reset pending fields
// Even if this component is scheduled for another update in ReactUpdates,
// it would still be ignored because these fields are reset.
this._pendingStateQueue=null;this._pendingReplaceState=false;this._pendingForceUpdate=false;this._pendingCallbacks=null;this._pendingElement=null;// These fields do not really need to be reset since this object is no
// longer accessible.
this._context=null;this._rootNodeID=0;this._topLevelWrapper=null;// Delete the reference from the instance to this internal representation
// which allow the internals to be properly cleaned up even if the user
// leaks a reference to the public instance.
ReactInstanceMap.remove(inst);// Some existing components rely on inst.props even after they've been
// destroyed (in event handlers).
// TODO: inst.props = null;
// TODO: inst.state = null;
// TODO: inst.context = null;
},/**
   * Filters the context object to only contain keys specified in
   * `contextTypes`
   *
   * @param {object} context
   * @return {?object}
   * @private
   */_maskContext:function _maskContext(context){var Component=this._currentElement.type;var contextTypes=Component.contextTypes;if(!contextTypes){return emptyObject;}var maskedContext={};for(var contextName in contextTypes){maskedContext[contextName]=context[contextName];}return maskedContext;},/**
   * Filters the context object to only contain keys specified in
   * `contextTypes`, and asserts that they are valid.
   *
   * @param {object} context
   * @return {?object}
   * @private
   */_processContext:function _processContext(context){var maskedContext=this._maskContext(context);if(process.env.NODE_ENV!=='production'){var Component=this._currentElement.type;if(Component.contextTypes){this._checkContextTypes(Component.contextTypes,maskedContext,ReactPropTypeLocations.context);}}return maskedContext;},/**
   * @param {object} currentContext
   * @return {object}
   * @private
   */_processChildContext:function _processChildContext(currentContext){var Component=this._currentElement.type;var inst=this._instance;var childContext;if(inst.getChildContext){if(process.env.NODE_ENV!=='production'){ReactInstrumentation.debugTool.onBeginProcessingChildContext();try{childContext=inst.getChildContext();}finally{ReactInstrumentation.debugTool.onEndProcessingChildContext();}}else{childContext=inst.getChildContext();}}if(childContext){!(_typeof4(Component.childContextTypes)==='object')?process.env.NODE_ENV!=='production'?invariant(false,'%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().',this.getName()||'ReactCompositeComponent'):_prodInvariant('107',this.getName()||'ReactCompositeComponent'):void 0;if(process.env.NODE_ENV!=='production'){this._checkContextTypes(Component.childContextTypes,childContext,ReactPropTypeLocations.childContext);}for(var name in childContext){!(name in Component.childContextTypes)?process.env.NODE_ENV!=='production'?invariant(false,'%s.getChildContext(): key "%s" is not defined in childContextTypes.',this.getName()||'ReactCompositeComponent',name):_prodInvariant('108',this.getName()||'ReactCompositeComponent',name):void 0;}return _assign({},currentContext,childContext);}return currentContext;},/**
   * Assert that the context types are valid
   *
   * @param {object} typeSpecs Map of context field to a ReactPropType
   * @param {object} values Runtime values that need to be type-checked
   * @param {string} location e.g. "prop", "context", "child context"
   * @private
   */_checkContextTypes:function _checkContextTypes(typeSpecs,values,location){checkReactTypeSpec(typeSpecs,values,location,this.getName(),null,this._debugID);},receiveComponent:function receiveComponent(nextElement,transaction,nextContext){var prevElement=this._currentElement;var prevContext=this._context;this._pendingElement=null;this.updateComponent(transaction,prevElement,nextElement,prevContext,nextContext);},/**
   * If any of `_pendingElement`, `_pendingStateQueue`, or `_pendingForceUpdate`
   * is set, update the component.
   *
   * @param {ReactReconcileTransaction} transaction
   * @internal
   */performUpdateIfNecessary:function performUpdateIfNecessary(transaction){if(this._pendingElement!=null){ReactReconciler.receiveComponent(this,this._pendingElement,transaction,this._context);}else if(this._pendingStateQueue!==null||this._pendingForceUpdate){this.updateComponent(transaction,this._currentElement,this._currentElement,this._context,this._context);}else{this._updateBatchNumber=null;}},/**
   * Perform an update to a mounted component. The componentWillReceiveProps and
   * shouldComponentUpdate methods are called, then (assuming the update isn't
   * skipped) the remaining update lifecycle methods are called and the DOM
   * representation is updated.
   *
   * By default, this implements React's rendering and reconciliation algorithm.
   * Sophisticated clients may wish to override this.
   *
   * @param {ReactReconcileTransaction} transaction
   * @param {ReactElement} prevParentElement
   * @param {ReactElement} nextParentElement
   * @internal
   * @overridable
   */updateComponent:function updateComponent(transaction,prevParentElement,nextParentElement,prevUnmaskedContext,nextUnmaskedContext){var inst=this._instance;!(inst!=null)?process.env.NODE_ENV!=='production'?invariant(false,'Attempted to update component `%s` that has already been unmounted (or failed to mount).',this.getName()||'ReactCompositeComponent'):_prodInvariant('136',this.getName()||'ReactCompositeComponent'):void 0;var willReceive=false;var nextContext;// Determine if the context has changed or not
if(this._context===nextUnmaskedContext){nextContext=inst.context;}else{nextContext=this._processContext(nextUnmaskedContext);willReceive=true;}var prevProps=prevParentElement.props;var nextProps=nextParentElement.props;// Not a simple state update but a props update
if(prevParentElement!==nextParentElement){willReceive=true;}// An update here will schedule an update but immediately set
// _pendingStateQueue which will ensure that any state updates gets
// immediately reconciled instead of waiting for the next batch.
if(willReceive&&inst.componentWillReceiveProps){if(process.env.NODE_ENV!=='production'){measureLifeCyclePerf(function(){return inst.componentWillReceiveProps(nextProps,nextContext);},this._debugID,'componentWillReceiveProps');}else{inst.componentWillReceiveProps(nextProps,nextContext);}}var nextState=this._processPendingState(nextProps,nextContext);var shouldUpdate=true;if(!this._pendingForceUpdate){if(inst.shouldComponentUpdate){if(process.env.NODE_ENV!=='production'){shouldUpdate=measureLifeCyclePerf(function(){return inst.shouldComponentUpdate(nextProps,nextState,nextContext);},this._debugID,'shouldComponentUpdate');}else{shouldUpdate=inst.shouldComponentUpdate(nextProps,nextState,nextContext);}}else{if(this._compositeType===CompositeTypes.PureClass){shouldUpdate=!shallowEqual(prevProps,nextProps)||!shallowEqual(inst.state,nextState);}}}if(process.env.NODE_ENV!=='production'){process.env.NODE_ENV!=='production'?warning(shouldUpdate!==undefined,'%s.shouldComponentUpdate(): Returned undefined instead of a '+'boolean value. Make sure to return true or false.',this.getName()||'ReactCompositeComponent'):void 0;}this._updateBatchNumber=null;if(shouldUpdate){this._pendingForceUpdate=false;// Will set `this.props`, `this.state` and `this.context`.
this._performComponentUpdate(nextParentElement,nextProps,nextState,nextContext,transaction,nextUnmaskedContext);}else{// If it's determined that a component should not update, we still want
// to set props and state but we shortcut the rest of the update.
this._currentElement=nextParentElement;this._context=nextUnmaskedContext;inst.props=nextProps;inst.state=nextState;inst.context=nextContext;}},_processPendingState:function _processPendingState(props,context){var inst=this._instance;var queue=this._pendingStateQueue;var replace=this._pendingReplaceState;this._pendingReplaceState=false;this._pendingStateQueue=null;if(!queue){return inst.state;}if(replace&&queue.length===1){return queue[0];}var nextState=_assign({},replace?queue[0]:inst.state);for(var i=replace?1:0;i<queue.length;i++){var partial=queue[i];_assign(nextState,typeof partial==='function'?partial.call(inst,nextState,props,context):partial);}return nextState;},/**
   * Merges new props and state, notifies delegate methods of update and
   * performs update.
   *
   * @param {ReactElement} nextElement Next element
   * @param {object} nextProps Next public object to set as properties.
   * @param {?object} nextState Next object to set as state.
   * @param {?object} nextContext Next public object to set as context.
   * @param {ReactReconcileTransaction} transaction
   * @param {?object} unmaskedContext
   * @private
   */_performComponentUpdate:function _performComponentUpdate(nextElement,nextProps,nextState,nextContext,transaction,unmaskedContext){var _this2=this;var inst=this._instance;var hasComponentDidUpdate=Boolean(inst.componentDidUpdate);var prevProps;var prevState;var prevContext;if(hasComponentDidUpdate){prevProps=inst.props;prevState=inst.state;prevContext=inst.context;}if(inst.componentWillUpdate){if(process.env.NODE_ENV!=='production'){measureLifeCyclePerf(function(){return inst.componentWillUpdate(nextProps,nextState,nextContext);},this._debugID,'componentWillUpdate');}else{inst.componentWillUpdate(nextProps,nextState,nextContext);}}this._currentElement=nextElement;this._context=unmaskedContext;inst.props=nextProps;inst.state=nextState;inst.context=nextContext;this._updateRenderedComponent(transaction,unmaskedContext);if(hasComponentDidUpdate){if(process.env.NODE_ENV!=='production'){transaction.getReactMountReady().enqueue(function(){measureLifeCyclePerf(inst.componentDidUpdate.bind(inst,prevProps,prevState,prevContext),_this2._debugID,'componentDidUpdate');});}else{transaction.getReactMountReady().enqueue(inst.componentDidUpdate.bind(inst,prevProps,prevState,prevContext),inst);}}},/**
   * Call the component's `render` method and update the DOM accordingly.
   *
   * @param {ReactReconcileTransaction} transaction
   * @internal
   */_updateRenderedComponent:function _updateRenderedComponent(transaction,context){var prevComponentInstance=this._renderedComponent;var prevRenderedElement=prevComponentInstance._currentElement;var nextRenderedElement=this._renderValidatedComponent();var debugID=0;if(process.env.NODE_ENV!=='production'){debugID=this._debugID;}if(shouldUpdateReactComponent(prevRenderedElement,nextRenderedElement)){ReactReconciler.receiveComponent(prevComponentInstance,nextRenderedElement,transaction,this._processChildContext(context));}else{var oldHostNode=ReactReconciler.getHostNode(prevComponentInstance);ReactReconciler.unmountComponent(prevComponentInstance,false);var nodeType=ReactNodeTypes.getType(nextRenderedElement);this._renderedNodeType=nodeType;var child=this._instantiateReactComponent(nextRenderedElement,nodeType!==ReactNodeTypes.EMPTY/* shouldHaveDebugID */);this._renderedComponent=child;var nextMarkup=ReactReconciler.mountComponent(child,transaction,this._hostParent,this._hostContainerInfo,this._processChildContext(context),debugID);if(process.env.NODE_ENV!=='production'){if(debugID!==0){var childDebugIDs=child._debugID!==0?[child._debugID]:[];ReactInstrumentation.debugTool.onSetChildren(debugID,childDebugIDs);}}this._replaceNodeWithMarkup(oldHostNode,nextMarkup,prevComponentInstance);}},/**
   * Overridden in shallow rendering.
   *
   * @protected
   */_replaceNodeWithMarkup:function _replaceNodeWithMarkup(oldHostNode,nextMarkup,prevInstance){ReactComponentEnvironment.replaceNodeWithMarkup(oldHostNode,nextMarkup,prevInstance);},/**
   * @protected
   */_renderValidatedComponentWithoutOwnerOrContext:function _renderValidatedComponentWithoutOwnerOrContext(){var inst=this._instance;var renderedComponent;if(process.env.NODE_ENV!=='production'){renderedComponent=measureLifeCyclePerf(function(){return MainWindow.render();},this._debugID,'render');}else{renderedComponent=MainWindow.render();}if(process.env.NODE_ENV!=='production'){// We allow auto-mocks to proceed as if they're returning null.
if(renderedComponent===undefined&&MainWindow.render._isMockFunction){// This is probably bad practice. Consider warning here and
// deprecating this convenience.
renderedComponent=null;}}return renderedComponent;},/**
   * @private
   */_renderValidatedComponent:function _renderValidatedComponent(){var renderedComponent;if(process.env.NODE_ENV!=='production'||this._compositeType!==CompositeTypes.StatelessFunctional){ReactCurrentOwner.current=this;try{renderedComponent=this._renderValidatedComponentWithoutOwnerOrContext();}finally{ReactCurrentOwner.current=null;}}else{renderedComponent=this._renderValidatedComponentWithoutOwnerOrContext();}!(// TODO: An `isValidNode` function would probably be more appropriate
renderedComponent===null||renderedComponent===false||ReactElement.isValidElement(renderedComponent))?process.env.NODE_ENV!=='production'?invariant(false,'%s.render(): A valid React element (or null) must be returned. You may have returned undefined, an array or some other invalid object.',this.getName()||'ReactCompositeComponent'):_prodInvariant('109',this.getName()||'ReactCompositeComponent'):void 0;return renderedComponent;},/**
   * Lazily allocates the refs object and stores `component` as `ref`.
   *
   * @param {string} ref Reference name.
   * @param {component} component Component to store as `ref`.
   * @final
   * @private
   */attachRef:function attachRef(ref,component){var inst=this.getPublicInstance();!(inst!=null)?process.env.NODE_ENV!=='production'?invariant(false,'Stateless function components cannot have refs.'):_prodInvariant('110'):void 0;var publicComponentInstance=component.getPublicInstance();if(process.env.NODE_ENV!=='production'){var componentName=component&&component.getName?component.getName():'a component';process.env.NODE_ENV!=='production'?warning(publicComponentInstance!=null||component._compositeType!==CompositeTypes.StatelessFunctional,'Stateless function components cannot be given refs '+'(See ref "%s" in %s created by %s). '+'Attempts to access this ref will fail.',ref,componentName,this.getName()):void 0;}var refs=inst.refs===emptyObject?inst.refs={}:inst.refs;refs[ref]=publicComponentInstance;},/**
   * Detaches a reference name.
   *
   * @param {string} ref Name to dereference.
   * @final
   * @private
   */detachRef:function detachRef(ref){var refs=this.getPublicInstance().refs;delete refs[ref];},/**
   * Get a text description of the component that can be used to identify it
   * in error messages.
   * @return {string} The name or null.
   * @internal
   */getName:function getName(){var type=this._currentElement.type;var constructor=this._instance&&this._instance.constructor;return type.displayName||constructor&&constructor.displayName||type.name||constructor&&constructor.name||null;},/**
   * Get the publicly accessible representation of this component - i.e. what
   * is exposed by refs and returned by render. Can be null for stateless
   * components.
   *
   * @return {ReactComponent} the public component instance.
   * @internal
   */getPublicInstance:function getPublicInstance(){var inst=this._instance;if(this._compositeType===CompositeTypes.StatelessFunctional){return null;}return inst;},// Stub
_instantiateReactComponent:null};var ReactCompositeComponent={Mixin:ReactCompositeComponentMixin};module.exports=ReactCompositeComponent;}).call(this,require('_process'));},{"./ReactComponentEnvironment":112,"./ReactCurrentOwner":115,"./ReactElement":138,"./ReactErrorUtils":141,"./ReactInstanceMap":150,"./ReactInstrumentation":151,"./ReactNodeTypes":157,"./ReactPropTypeLocations":161,"./ReactReconciler":166,"./checkReactTypeSpec":196,"./reactProdInvariant":217,"./shouldUpdateReactComponent":222,"_process":3,"fbjs/lib/emptyObject":52,"fbjs/lib/invariant":59,"fbjs/lib/shallowEqual":67,"fbjs/lib/warning":68,"object-assign":344}],115:[function(require,module,exports){/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactCurrentOwner
 */'use strict';/**
 * Keeps track of the current owner.
 *
 * The current owner is the component who should own any components that are
 * currently being constructed.
 */var ReactCurrentOwner={/**
   * @internal
   * @type {ReactComponent}
   */current:null};module.exports=ReactCurrentOwner;},{}],116:[function(require,module,exports){(function(process){/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactDOM
 *//* globals __REACT_DEVTOOLS_GLOBAL_HOOK__*/'use strict';var ReactDOMComponentTree=require('./ReactDOMComponentTree');var ReactDefaultInjection=require('./ReactDefaultInjection');var ReactMount=require('./ReactMount');var ReactReconciler=require('./ReactReconciler');var ReactUpdates=require('./ReactUpdates');var ReactVersion=require('./ReactVersion');var findDOMNode=require('./findDOMNode');var getHostComponentFromComposite=require('./getHostComponentFromComposite');var renderSubtreeIntoContainer=require('./renderSubtreeIntoContainer');var warning=require('fbjs/lib/warning');ReactDefaultInjection.inject();var ReactDOM={findDOMNode:findDOMNode,render:ReactMount.render,unmountComponentAtNode:ReactMount.unmountComponentAtNode,version:ReactVersion,/* eslint-disable camelcase */unstable_batchedUpdates:ReactUpdates.batchedUpdates,unstable_renderSubtreeIntoContainer:renderSubtreeIntoContainer};// Inject the runtime into a devtools global hook regardless of browser.
// Allows for debugging when the hook is injected on the page.
/* eslint-enable camelcase */if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__!=='undefined'&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.inject==='function'){__REACT_DEVTOOLS_GLOBAL_HOOK__.inject({ComponentTree:{getClosestInstanceFromNode:ReactDOMComponentTree.getClosestInstanceFromNode,getNodeFromInstance:function getNodeFromInstance(inst){// inst is an internal instance (but could be a composite)
if(inst._renderedComponent){inst=getHostComponentFromComposite(inst);}if(inst){return ReactDOMComponentTree.getNodeFromInstance(inst);}else{return null;}}},Mount:ReactMount,Reconciler:ReactReconciler});}if(process.env.NODE_ENV!=='production'){var ExecutionEnvironment=require('fbjs/lib/ExecutionEnvironment');if(ExecutionEnvironment.canUseDOM&&window.top===window.self){// First check if devtools is not installed
if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__==='undefined'){// If we're in Chrome or Firefox, provide a download link if not installed.
if(navigator.userAgent.indexOf('Chrome')>-1&&navigator.userAgent.indexOf('Edge')===-1||navigator.userAgent.indexOf('Firefox')>-1){// Firefox does not have the issue with devtools loaded over file://
var showFileUrlMessage=window.location.protocol.indexOf('http')===-1&&navigator.userAgent.indexOf('Firefox')===-1;console.debug('Download the React DevTools '+(showFileUrlMessage?'and use an HTTP server (instead of a file: URL) ':'')+'for a better development experience: '+'https://fb.me/react-devtools');}}var testFunc=function testFn(){};process.env.NODE_ENV!=='production'?warning((testFunc.name||testFunc.toString()).indexOf('testFn')!==-1,'It looks like you\'re using a minified copy of the development build '+'of React. When deploying React apps to production, make sure to use '+'the production build which skips development warnings and is faster. '+'See https://fb.me/react-minification for more details.'):void 0;// If we're in IE8, check to see if we are in compatibility mode and provide
// information on preventing compatibility mode
var ieCompatibilityMode=document.documentMode&&document.documentMode<8;process.env.NODE_ENV!=='production'?warning(!ieCompatibilityMode,'Internet Explorer is running in compatibility mode; please add the '+'following tag to your HTML to prevent this from happening: '+'<meta http-equiv="X-UA-Compatible" content="IE=edge" />'):void 0;var expectedFeatures=[// shims
Array.isArray,Array.prototype.every,Array.prototype.forEach,Array.prototype.indexOf,Array.prototype.map,Date.now,Function.prototype.bind,Object.keys,String.prototype.split,String.prototype.trim];for(var i=0;i<expectedFeatures.length;i++){if(!expectedFeatures[i]){process.env.NODE_ENV!=='production'?warning(false,'One or more ES5 shims expected by React are not available: '+'https://fb.me/react-warning-polyfills'):void 0;break;}}}}if(process.env.NODE_ENV!=='production'){var ReactInstrumentation=require('./ReactInstrumentation');var ReactDOMUnknownPropertyHook=require('./ReactDOMUnknownPropertyHook');var ReactDOMNullInputValuePropHook=require('./ReactDOMNullInputValuePropHook');ReactInstrumentation.debugTool.addHook(ReactDOMUnknownPropertyHook);ReactInstrumentation.debugTool.addHook(ReactDOMNullInputValuePropHook);}module.exports=ReactDOM;}).call(this,require('_process'));},{"./ReactDOMComponentTree":120,"./ReactDOMNullInputValuePropHook":127,"./ReactDOMUnknownPropertyHook":134,"./ReactDefaultInjection":137,"./ReactInstrumentation":151,"./ReactMount":154,"./ReactReconciler":166,"./ReactUpdates":173,"./ReactVersion":174,"./findDOMNode":200,"./getHostComponentFromComposite":207,"./renderSubtreeIntoContainer":218,"_process":3,"fbjs/lib/ExecutionEnvironment":45,"fbjs/lib/warning":68}],117:[function(require,module,exports){/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactDOMButton
 */'use strict';var DisabledInputUtils=require('./DisabledInputUtils');/**
 * Implements a <button> host component that does not receive mouse events
 * when `disabled` is set.
 */var ReactDOMButton={getHostProps:DisabledInputUtils.getHostProps};module.exports=ReactDOMButton;},{"./DisabledInputUtils":92}],118:[function(require,module,exports){(function(process){/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactDOMComponent
 *//* global hasOwnProperty:true */'use strict';var _prodInvariant=require('./reactProdInvariant'),_assign=require('object-assign');var AutoFocusUtils=require('./AutoFocusUtils');var CSSPropertyOperations=require('./CSSPropertyOperations');var DOMLazyTree=require('./DOMLazyTree');var DOMNamespaces=require('./DOMNamespaces');var DOMProperty=require('./DOMProperty');var DOMPropertyOperations=require('./DOMPropertyOperations');var EventConstants=require('./EventConstants');var EventPluginHub=require('./EventPluginHub');var EventPluginRegistry=require('./EventPluginRegistry');var ReactBrowserEventEmitter=require('./ReactBrowserEventEmitter');var ReactDOMButton=require('./ReactDOMButton');var ReactDOMComponentFlags=require('./ReactDOMComponentFlags');var ReactDOMComponentTree=require('./ReactDOMComponentTree');var ReactDOMInput=require('./ReactDOMInput');var ReactDOMOption=require('./ReactDOMOption');var ReactDOMSelect=require('./ReactDOMSelect');var ReactDOMTextarea=require('./ReactDOMTextarea');var ReactInstrumentation=require('./ReactInstrumentation');var ReactMultiChild=require('./ReactMultiChild');var ReactServerRenderingTransaction=require('./ReactServerRenderingTransaction');var emptyFunction=require('fbjs/lib/emptyFunction');var escapeTextContentForBrowser=require('./escapeTextContentForBrowser');var invariant=require('fbjs/lib/invariant');var isEventSupported=require('./isEventSupported');var keyOf=require('fbjs/lib/keyOf');var shallowEqual=require('fbjs/lib/shallowEqual');var validateDOMNesting=require('./validateDOMNesting');var warning=require('fbjs/lib/warning');var Flags=ReactDOMComponentFlags;var deleteListener=EventPluginHub.deleteListener;var getNode=ReactDOMComponentTree.getNodeFromInstance;var listenTo=ReactBrowserEventEmitter.listenTo;var registrationNameModules=EventPluginRegistry.registrationNameModules;// For quickly matching children type, to test if can be treated as content.
var CONTENT_TYPES={'string':true,'number':true};var STYLE=keyOf({style:null});var HTML=keyOf({__html:null});var RESERVED_PROPS={children:null,dangerouslySetInnerHTML:null,suppressContentEditableWarning:null};// Node type for document fragments (Node.DOCUMENT_FRAGMENT_NODE).
var DOC_FRAGMENT_TYPE=11;function getDeclarationErrorAddendum(internalInstance){if(internalInstance){var owner=internalInstance._currentElement._owner||null;if(owner){var name=owner.getName();if(name){return' This DOM node was rendered by `'+name+'`.';}}}return'';}function friendlyStringify(obj){if((typeof obj==="undefined"?"undefined":_typeof4(obj))==='object'){if(Array.isArray(obj)){return'['+obj.map(friendlyStringify).join(', ')+']';}else{var pairs=[];for(var key in obj){if(Object.prototype.hasOwnProperty.call(obj,key)){var keyEscaped=/^[a-z$_][\w$_]*$/i.test(key)?key:JSON.stringify(key);pairs.push(keyEscaped+': '+friendlyStringify(obj[key]));}}return'{'+pairs.join(', ')+'}';}}else if(typeof obj==='string'){return JSON.stringify(obj);}else if(typeof obj==='function'){return'[function object]';}// Differs from JSON.stringify in that undefined because undefined and that
// inf and nan don't become null
return String(obj);}var styleMutationWarning={};function checkAndWarnForMutatedStyle(style1,style2,component){if(style1==null||style2==null){return;}if(shallowEqual(style1,style2)){return;}var componentName=component._tag;var owner=component._currentElement._owner;var ownerName;if(owner){ownerName=owner.getName();}var hash=ownerName+'|'+componentName;if(styleMutationWarning.hasOwnProperty(hash)){return;}styleMutationWarning[hash]=true;process.env.NODE_ENV!=='production'?warning(false,'`%s` was passed a style object that has previously been mutated. '+'Mutating `style` is deprecated. Consider cloning it beforehand. Check '+'the `render` %s. Previous style: %s. Mutated style: %s.',componentName,owner?'of `'+ownerName+'`':'using <'+componentName+'>',friendlyStringify(style1),friendlyStringify(style2)):void 0;}/**
 * @param {object} component
 * @param {?object} props
 */function assertValidProps(component,props){if(!props){return;}// Note the use of `==` which checks for null or undefined.
if(voidElementTags[component._tag]){!(props.children==null&&props.dangerouslySetInnerHTML==null)?process.env.NODE_ENV!=='production'?invariant(false,'%s is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.%s',component._tag,component._currentElement._owner?' Check the render method of '+component._currentElement._owner.getName()+'.':''):_prodInvariant('137',component._tag,component._currentElement._owner?' Check the render method of '+component._currentElement._owner.getName()+'.':''):void 0;}if(props.dangerouslySetInnerHTML!=null){!(props.children==null)?process.env.NODE_ENV!=='production'?invariant(false,'Can only set one of `children` or `props.dangerouslySetInnerHTML`.'):_prodInvariant('60'):void 0;!(_typeof4(props.dangerouslySetInnerHTML)==='object'&&HTML in props.dangerouslySetInnerHTML)?process.env.NODE_ENV!=='production'?invariant(false,'`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://fb.me/react-invariant-dangerously-set-inner-html for more information.'):_prodInvariant('61'):void 0;}if(process.env.NODE_ENV!=='production'){process.env.NODE_ENV!=='production'?warning(props.innerHTML==null,'Directly setting property `innerHTML` is not permitted. '+'For more information, lookup documentation on `dangerouslySetInnerHTML`.'):void 0;process.env.NODE_ENV!=='production'?warning(props.suppressContentEditableWarning||!props.contentEditable||props.children==null,'A component is `contentEditable` and contains `children` managed by '+'React. It is now your responsibility to guarantee that none of '+'those nodes are unexpectedly modified or duplicated. This is '+'probably not intentional.'):void 0;process.env.NODE_ENV!=='production'?warning(props.onFocusIn==null&&props.onFocusOut==null,'React uses onFocus and onBlur instead of onFocusIn and onFocusOut. '+'All React events are normalized to bubble, so onFocusIn and onFocusOut '+'are not needed/supported by React.'):void 0;}!(props.style==null||_typeof4(props.style)==='object')?process.env.NODE_ENV!=='production'?invariant(false,'The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + \'em\'}} when using JSX.%s',getDeclarationErrorAddendum(component)):_prodInvariant('62',getDeclarationErrorAddendum(component)):void 0;}function enqueuePutListener(inst,registrationName,listener,transaction){if(transaction instanceof ReactServerRenderingTransaction){return;}if(process.env.NODE_ENV!=='production'){// IE8 has no API for event capturing and the `onScroll` event doesn't
// bubble.
process.env.NODE_ENV!=='production'?warning(registrationName!=='onScroll'||isEventSupported('scroll',true),'This browser doesn\'t support the `onScroll` event'):void 0;}var containerInfo=inst._hostContainerInfo;var isDocumentFragment=containerInfo._node&&containerInfo._node.nodeType===DOC_FRAGMENT_TYPE;var doc=isDocumentFragment?containerInfo._node:containerInfo._ownerDocument;listenTo(registrationName,doc);transaction.getReactMountReady().enqueue(putListener,{inst:inst,registrationName:registrationName,listener:listener});}function putListener(){var listenerToPut=this;EventPluginHub.putListener(listenerToPut.inst,listenerToPut.registrationName,listenerToPut.listener);}function inputPostMount(){var inst=this;ReactDOMInput.postMountWrapper(inst);}function textareaPostMount(){var inst=this;ReactDOMTextarea.postMountWrapper(inst);}function optionPostMount(){var inst=this;ReactDOMOption.postMountWrapper(inst);}var setAndValidateContentChildDev=emptyFunction;if(process.env.NODE_ENV!=='production'){setAndValidateContentChildDev=function setAndValidateContentChildDev(content){var hasExistingContent=this._contentDebugID!=null;var debugID=this._debugID;// This ID represents the inlined child that has no backing instance:
var contentDebugID=-debugID;if(content==null){if(hasExistingContent){ReactInstrumentation.debugTool.onUnmountComponent(this._contentDebugID);}this._contentDebugID=null;return;}validateDOMNesting(null,String(content),this,this._ancestorInfo);this._contentDebugID=contentDebugID;if(hasExistingContent){ReactInstrumentation.debugTool.onBeforeUpdateComponent(contentDebugID,content);ReactInstrumentation.debugTool.onUpdateComponent(contentDebugID);}else{ReactInstrumentation.debugTool.onBeforeMountComponent(contentDebugID,content,debugID);ReactInstrumentation.debugTool.onMountComponent(contentDebugID);ReactInstrumentation.debugTool.onSetChildren(debugID,[contentDebugID]);}};}// There are so many media events, it makes sense to just
// maintain a list rather than create a `trapBubbledEvent` for each
var mediaEvents={topAbort:'abort',topCanPlay:'canplay',topCanPlayThrough:'canplaythrough',topDurationChange:'durationchange',topEmptied:'emptied',topEncrypted:'encrypted',topEnded:'ended',topError:'error',topLoadedData:'loadeddata',topLoadedMetadata:'loadedmetadata',topLoadStart:'loadstart',topPause:'pause',topPlay:'play',topPlaying:'playing',topProgress:'progress',topRateChange:'ratechange',topSeeked:'seeked',topSeeking:'seeking',topStalled:'stalled',topSuspend:'suspend',topTimeUpdate:'timeupdate',topVolumeChange:'volumechange',topWaiting:'waiting'};function trapBubbledEventsLocal(){var inst=this;// If a component renders to null or if another component fatals and causes
// the state of the tree to be corrupted, `node` here can be null.
!inst._rootNodeID?process.env.NODE_ENV!=='production'?invariant(false,'Must be mounted to trap events'):_prodInvariant('63'):void 0;var node=getNode(inst);!node?process.env.NODE_ENV!=='production'?invariant(false,'trapBubbledEvent(...): Requires node to be rendered.'):_prodInvariant('64'):void 0;switch(inst._tag){case'iframe':case'object':inst._wrapperState.listeners=[ReactBrowserEventEmitter.trapBubbledEvent(EventConstants.topLevelTypes.topLoad,'load',node)];break;case'video':case'audio':inst._wrapperState.listeners=[];// Create listener for each media event
for(var event in mediaEvents){if(mediaEvents.hasOwnProperty(event)){inst._wrapperState.listeners.push(ReactBrowserEventEmitter.trapBubbledEvent(EventConstants.topLevelTypes[event],mediaEvents[event],node));}}break;case'source':inst._wrapperState.listeners=[ReactBrowserEventEmitter.trapBubbledEvent(EventConstants.topLevelTypes.topError,'error',node)];break;case'img':inst._wrapperState.listeners=[ReactBrowserEventEmitter.trapBubbledEvent(EventConstants.topLevelTypes.topError,'error',node),ReactBrowserEventEmitter.trapBubbledEvent(EventConstants.topLevelTypes.topLoad,'load',node)];break;case'form':inst._wrapperState.listeners=[ReactBrowserEventEmitter.trapBubbledEvent(EventConstants.topLevelTypes.topReset,'reset',node),ReactBrowserEventEmitter.trapBubbledEvent(EventConstants.topLevelTypes.topSubmit,'submit',node)];break;case'input':case'select':case'textarea':inst._wrapperState.listeners=[ReactBrowserEventEmitter.trapBubbledEvent(EventConstants.topLevelTypes.topInvalid,'invalid',node)];break;}}function postUpdateSelectWrapper(){ReactDOMSelect.postUpdateWrapper(this);}// For HTML, certain tags should omit their close tag. We keep a whitelist for
// those special-case tags.
var omittedCloseTags={'area':true,'base':true,'br':true,'col':true,'embed':true,'hr':true,'img':true,'input':true,'keygen':true,'link':true,'meta':true,'param':true,'source':true,'track':true,'wbr':true};// NOTE: menuitem's close tag should be omitted, but that causes problems.
var newlineEatingTags={'listing':true,'pre':true,'textarea':true};// For HTML, certain tags cannot have children. This has the same purpose as
// `omittedCloseTags` except that `menuitem` should still have its closing tag.
var voidElementTags=_assign({'menuitem':true},omittedCloseTags);// We accept any tag to be rendered but since this gets injected into arbitrary
// HTML, we want to make sure that it's a safe tag.
// http://www.w3.org/TR/REC-xml/#NT-Name
var VALID_TAG_REGEX=/^[a-zA-Z][a-zA-Z:_\.\-\d]*$/;// Simplified subset
var validatedTagCache={};var hasOwnProperty={}.hasOwnProperty;function validateDangerousTag(tag){if(!hasOwnProperty.call(validatedTagCache,tag)){!VALID_TAG_REGEX.test(tag)?process.env.NODE_ENV!=='production'?invariant(false,'Invalid tag: %s',tag):_prodInvariant('65',tag):void 0;validatedTagCache[tag]=true;}}function isCustomComponent(tagName,props){return tagName.indexOf('-')>=0||props.is!=null;}var globalIdCounter=1;/**
 * Creates a new React class that is idempotent and capable of containing other
 * React components. It accepts event listeners and DOM properties that are
 * valid according to `DOMProperty`.
 *
 *  - Event listeners: `onClick`, `onMouseDown`, etc.
 *  - DOM properties: `className`, `name`, `title`, etc.
 *
 * The `style` property functions differently from the DOM API. It accepts an
 * object mapping of style properties to values.
 *
 * @constructor ReactDOMComponent
 * @extends ReactMultiChild
 */function ReactDOMComponent(element){var tag=element.type;validateDangerousTag(tag);this._currentElement=element;this._tag=tag.toLowerCase();this._namespaceURI=null;this._renderedChildren=null;this._previousStyle=null;this._previousStyleCopy=null;this._hostNode=null;this._hostParent=null;this._rootNodeID=0;this._domID=0;this._hostContainerInfo=null;this._wrapperState=null;this._topLevelWrapper=null;this._flags=0;if(process.env.NODE_ENV!=='production'){this._ancestorInfo=null;setAndValidateContentChildDev.call(this,null);}}ReactDOMComponent.displayName='ReactDOMComponent';ReactDOMComponent.Mixin={/**
   * Generates root tag markup then recurses. This method has side effects and
   * is not idempotent.
   *
   * @internal
   * @param {ReactReconcileTransaction|ReactServerRenderingTransaction} transaction
   * @param {?ReactDOMComponent} the parent component instance
   * @param {?object} info about the host container
   * @param {object} context
   * @return {string} The computed markup.
   */mountComponent:function mountComponent(transaction,hostParent,hostContainerInfo,context){this._rootNodeID=globalIdCounter++;this._domID=hostContainerInfo._idCounter++;this._hostParent=hostParent;this._hostContainerInfo=hostContainerInfo;var props=this._currentElement.props;switch(this._tag){case'audio':case'form':case'iframe':case'img':case'link':case'object':case'source':case'video':this._wrapperState={listeners:null};transaction.getReactMountReady().enqueue(trapBubbledEventsLocal,this);break;case'button':props=ReactDOMButton.getHostProps(this,props,hostParent);break;case'input':ReactDOMInput.mountWrapper(this,props,hostParent);props=ReactDOMInput.getHostProps(this,props);transaction.getReactMountReady().enqueue(trapBubbledEventsLocal,this);break;case'option':ReactDOMOption.mountWrapper(this,props,hostParent);props=ReactDOMOption.getHostProps(this,props);break;case'select':ReactDOMSelect.mountWrapper(this,props,hostParent);props=ReactDOMSelect.getHostProps(this,props);transaction.getReactMountReady().enqueue(trapBubbledEventsLocal,this);break;case'textarea':ReactDOMTextarea.mountWrapper(this,props,hostParent);props=ReactDOMTextarea.getHostProps(this,props);transaction.getReactMountReady().enqueue(trapBubbledEventsLocal,this);break;}assertValidProps(this,props);// We create tags in the namespace of their parent container, except HTML
// tags get no namespace.
var namespaceURI;var parentTag;if(hostParent!=null){namespaceURI=hostParent._namespaceURI;parentTag=hostParent._tag;}else if(hostContainerInfo._tag){namespaceURI=hostContainerInfo._namespaceURI;parentTag=hostContainerInfo._tag;}if(namespaceURI==null||namespaceURI===DOMNamespaces.svg&&parentTag==='foreignobject'){namespaceURI=DOMNamespaces.html;}if(namespaceURI===DOMNamespaces.html){if(this._tag==='svg'){namespaceURI=DOMNamespaces.svg;}else if(this._tag==='math'){namespaceURI=DOMNamespaces.mathml;}}this._namespaceURI=namespaceURI;if(process.env.NODE_ENV!=='production'){var parentInfo;if(hostParent!=null){parentInfo=hostParent._ancestorInfo;}else if(hostContainerInfo._tag){parentInfo=hostContainerInfo._ancestorInfo;}if(parentInfo){// parentInfo should always be present except for the top-level
// component when server rendering
validateDOMNesting(this._tag,null,this,parentInfo);}this._ancestorInfo=validateDOMNesting.updatedAncestorInfo(parentInfo,this._tag,this);}var mountImage;if(transaction.useCreateElement){var ownerDocument=hostContainerInfo._ownerDocument;var el;if(namespaceURI===DOMNamespaces.html){if(this._tag==='script'){// Create the script via .innerHTML so its "parser-inserted" flag is
// set to true and it does not execute
var div=ownerDocument.createElement('div');var type=this._currentElement.type;div.innerHTML='<'+type+'></'+type+'>';el=div.removeChild(div.firstChild);}else if(props.is){el=ownerDocument.createElement(this._currentElement.type,props.is);}else{// Separate else branch instead of using `props.is || undefined` above becuase of a Firefox bug.
// See discussion in https://github.com/facebook/react/pull/6896
// and discussion in https://bugzilla.mozilla.org/show_bug.cgi?id=1276240
el=ownerDocument.createElement(this._currentElement.type);}}else{el=ownerDocument.createElementNS(namespaceURI,this._currentElement.type);}ReactDOMComponentTree.precacheNode(this,el);this._flags|=Flags.hasCachedChildNodes;if(!this._hostParent){DOMPropertyOperations.setAttributeForRoot(el);}this._updateDOMProperties(null,props,transaction);var lazyTree=DOMLazyTree(el);this._createInitialChildren(transaction,props,context,lazyTree);mountImage=lazyTree;}else{var tagOpen=this._createOpenTagMarkupAndPutListeners(transaction,props);var tagContent=this._createContentMarkup(transaction,props,context);if(!tagContent&&omittedCloseTags[this._tag]){mountImage=tagOpen+'/>';}else{mountImage=tagOpen+'>'+tagContent+'</'+this._currentElement.type+'>';}}switch(this._tag){case'input':transaction.getReactMountReady().enqueue(inputPostMount,this);if(props.autoFocus){transaction.getReactMountReady().enqueue(AutoFocusUtils.focusDOMComponent,this);}break;case'textarea':transaction.getReactMountReady().enqueue(textareaPostMount,this);if(props.autoFocus){transaction.getReactMountReady().enqueue(AutoFocusUtils.focusDOMComponent,this);}break;case'select':if(props.autoFocus){transaction.getReactMountReady().enqueue(AutoFocusUtils.focusDOMComponent,this);}break;case'button':if(props.autoFocus){transaction.getReactMountReady().enqueue(AutoFocusUtils.focusDOMComponent,this);}break;case'option':transaction.getReactMountReady().enqueue(optionPostMount,this);break;}return mountImage;},/**
   * Creates markup for the open tag and all attributes.
   *
   * This method has side effects because events get registered.
   *
   * Iterating over object properties is faster than iterating over arrays.
   * @see http://jsperf.com/obj-vs-arr-iteration
   *
   * @private
   * @param {ReactReconcileTransaction|ReactServerRenderingTransaction} transaction
   * @param {object} props
   * @return {string} Markup of opening tag.
   */_createOpenTagMarkupAndPutListeners:function _createOpenTagMarkupAndPutListeners(transaction,props){var ret='<'+this._currentElement.type;for(var propKey in props){if(!props.hasOwnProperty(propKey)){continue;}var propValue=props[propKey];if(propValue==null){continue;}if(registrationNameModules.hasOwnProperty(propKey)){if(propValue){enqueuePutListener(this,propKey,propValue,transaction);}}else{if(propKey===STYLE){if(propValue){if(process.env.NODE_ENV!=='production'){// See `_updateDOMProperties`. style block
this._previousStyle=propValue;}propValue=this._previousStyleCopy=_assign({},props.style);}propValue=CSSPropertyOperations.createMarkupForStyles(propValue,this);}var markup=null;if(this._tag!=null&&isCustomComponent(this._tag,props)){if(!RESERVED_PROPS.hasOwnProperty(propKey)){markup=DOMPropertyOperations.createMarkupForCustomAttribute(propKey,propValue);}}else{markup=DOMPropertyOperations.createMarkupForProperty(propKey,propValue);}if(markup){ret+=' '+markup;}}}// For static pages, no need to put React ID and checksum. Saves lots of
// bytes.
if(transaction.renderToStaticMarkup){return ret;}if(!this._hostParent){ret+=' '+DOMPropertyOperations.createMarkupForRoot();}ret+=' '+DOMPropertyOperations.createMarkupForID(this._domID);return ret;},/**
   * Creates markup for the content between the tags.
   *
   * @private
   * @param {ReactReconcileTransaction|ReactServerRenderingTransaction} transaction
   * @param {object} props
   * @param {object} context
   * @return {string} Content markup.
   */_createContentMarkup:function _createContentMarkup(transaction,props,context){var ret='';// Intentional use of != to avoid catching zero/false.
var innerHTML=props.dangerouslySetInnerHTML;if(innerHTML!=null){if(innerHTML.__html!=null){ret=innerHTML.__html;}}else{var contentToUse=CONTENT_TYPES[_typeof4(props.children)]?props.children:null;var childrenToUse=contentToUse!=null?null:props.children;if(contentToUse!=null){// TODO: Validate that text is allowed as a child of this node
ret=escapeTextContentForBrowser(contentToUse);if(process.env.NODE_ENV!=='production'){setAndValidateContentChildDev.call(this,contentToUse);}}else if(childrenToUse!=null){var mountImages=this.mountChildren(childrenToUse,transaction,context);ret=mountImages.join('');}}if(newlineEatingTags[this._tag]&&ret.charAt(0)==='\n'){// text/html ignores the first character in these tags if it's a newline
// Prefer to break application/xml over text/html (for now) by adding
// a newline specifically to get eaten by the parser. (Alternately for
// textareas, replacing "^\n" with "\r\n" doesn't get eaten, and the first
// \r is normalized out by HTMLTextAreaElement#value.)
// See: <http://www.w3.org/TR/html-polyglot/#newlines-in-textarea-and-pre>
// See: <http://www.w3.org/TR/html5/syntax.html#element-restrictions>
// See: <http://www.w3.org/TR/html5/syntax.html#newlines>
// See: Parsing of "textarea" "listing" and "pre" elements
//  from <http://www.w3.org/TR/html5/syntax.html#parsing-main-inbody>
return'\n'+ret;}else{return ret;}},_createInitialChildren:function _createInitialChildren(transaction,props,context,lazyTree){// Intentional use of != to avoid catching zero/false.
var innerHTML=props.dangerouslySetInnerHTML;if(innerHTML!=null){if(innerHTML.__html!=null){DOMLazyTree.queueHTML(lazyTree,innerHTML.__html);}}else{var contentToUse=CONTENT_TYPES[_typeof4(props.children)]?props.children:null;var childrenToUse=contentToUse!=null?null:props.children;if(contentToUse!=null){// TODO: Validate that text is allowed as a child of this node
if(process.env.NODE_ENV!=='production'){setAndValidateContentChildDev.call(this,contentToUse);}DOMLazyTree.queueText(lazyTree,contentToUse);}else if(childrenToUse!=null){var mountImages=this.mountChildren(childrenToUse,transaction,context);for(var i=0;i<mountImages.length;i++){DOMLazyTree.queueChild(lazyTree,mountImages[i]);}}}},/**
   * Receives a next element and updates the component.
   *
   * @internal
   * @param {ReactElement} nextElement
   * @param {ReactReconcileTransaction|ReactServerRenderingTransaction} transaction
   * @param {object} context
   */receiveComponent:function receiveComponent(nextElement,transaction,context){var prevElement=this._currentElement;this._currentElement=nextElement;this.updateComponent(transaction,prevElement,nextElement,context);},/**
   * Updates a DOM component after it has already been allocated and
   * attached to the DOM. Reconciles the root DOM node, then recurses.
   *
   * @param {ReactReconcileTransaction} transaction
   * @param {ReactElement} prevElement
   * @param {ReactElement} nextElement
   * @internal
   * @overridable
   */updateComponent:function updateComponent(transaction,prevElement,nextElement,context){var lastProps=prevElement.props;var nextProps=this._currentElement.props;switch(this._tag){case'button':lastProps=ReactDOMButton.getHostProps(this,lastProps);nextProps=ReactDOMButton.getHostProps(this,nextProps);break;case'input':lastProps=ReactDOMInput.getHostProps(this,lastProps);nextProps=ReactDOMInput.getHostProps(this,nextProps);break;case'option':lastProps=ReactDOMOption.getHostProps(this,lastProps);nextProps=ReactDOMOption.getHostProps(this,nextProps);break;case'select':lastProps=ReactDOMSelect.getHostProps(this,lastProps);nextProps=ReactDOMSelect.getHostProps(this,nextProps);break;case'textarea':lastProps=ReactDOMTextarea.getHostProps(this,lastProps);nextProps=ReactDOMTextarea.getHostProps(this,nextProps);break;}assertValidProps(this,nextProps);this._updateDOMProperties(lastProps,nextProps,transaction);this._updateDOMChildren(lastProps,nextProps,transaction,context);switch(this._tag){case'input':// Update the wrapper around inputs *after* updating props. This has to
// happen after `_updateDOMProperties`. Otherwise HTML5 input validations
// raise warnings and prevent the new value from being assigned.
ReactDOMInput.updateWrapper(this);break;case'textarea':ReactDOMTextarea.updateWrapper(this);break;case'select':// <select> value update needs to occur after <option> children
// reconciliation
transaction.getReactMountReady().enqueue(postUpdateSelectWrapper,this);break;}},/**
   * Reconciles the properties by detecting differences in property values and
   * updating the DOM as necessary. This function is probably the single most
   * critical path for performance optimization.
   *
   * TODO: Benchmark whether checking for changed values in memory actually
   *       improves performance (especially statically positioned elements).
   * TODO: Benchmark the effects of putting this at the top since 99% of props
   *       do not change for a given reconciliation.
   * TODO: Benchmark areas that can be improved with caching.
   *
   * @private
   * @param {object} lastProps
   * @param {object} nextProps
   * @param {?DOMElement} node
   */_updateDOMProperties:function _updateDOMProperties(lastProps,nextProps,transaction){var propKey;var styleName;var styleUpdates;for(propKey in lastProps){if(nextProps.hasOwnProperty(propKey)||!lastProps.hasOwnProperty(propKey)||lastProps[propKey]==null){continue;}if(propKey===STYLE){var lastStyle=this._previousStyleCopy;for(styleName in lastStyle){if(lastStyle.hasOwnProperty(styleName)){styleUpdates=styleUpdates||{};styleUpdates[styleName]='';}}this._previousStyleCopy=null;}else if(registrationNameModules.hasOwnProperty(propKey)){if(lastProps[propKey]){// Only call deleteListener if there was a listener previously or
// else willDeleteListener gets called when there wasn't actually a
// listener (e.g., onClick={null})
deleteListener(this,propKey);}}else if(isCustomComponent(this._tag,lastProps)){if(!RESERVED_PROPS.hasOwnProperty(propKey)){DOMPropertyOperations.deleteValueForAttribute(getNode(this),propKey);}}else if(DOMProperty.properties[propKey]||DOMProperty.isCustomAttribute(propKey)){DOMPropertyOperations.deleteValueForProperty(getNode(this),propKey);}}for(propKey in nextProps){var nextProp=nextProps[propKey];var lastProp=propKey===STYLE?this._previousStyleCopy:lastProps!=null?lastProps[propKey]:undefined;if(!nextProps.hasOwnProperty(propKey)||nextProp===lastProp||nextProp==null&&lastProp==null){continue;}if(propKey===STYLE){if(nextProp){if(process.env.NODE_ENV!=='production'){checkAndWarnForMutatedStyle(this._previousStyleCopy,this._previousStyle,this);this._previousStyle=nextProp;}nextProp=this._previousStyleCopy=_assign({},nextProp);}else{this._previousStyleCopy=null;}if(lastProp){// Unset styles on `lastProp` but not on `nextProp`.
for(styleName in lastProp){if(lastProp.hasOwnProperty(styleName)&&(!nextProp||!nextProp.hasOwnProperty(styleName))){styleUpdates=styleUpdates||{};styleUpdates[styleName]='';}}// Update styles that changed since `lastProp`.
for(styleName in nextProp){if(nextProp.hasOwnProperty(styleName)&&lastProp[styleName]!==nextProp[styleName]){styleUpdates=styleUpdates||{};styleUpdates[styleName]=nextProp[styleName];}}}else{// Relies on `updateStylesByID` not mutating `styleUpdates`.
styleUpdates=nextProp;}}else if(registrationNameModules.hasOwnProperty(propKey)){if(nextProp){enqueuePutListener(this,propKey,nextProp,transaction);}else if(lastProp){deleteListener(this,propKey);}}else if(isCustomComponent(this._tag,nextProps)){if(!RESERVED_PROPS.hasOwnProperty(propKey)){DOMPropertyOperations.setValueForAttribute(getNode(this),propKey,nextProp);}}else if(DOMProperty.properties[propKey]||DOMProperty.isCustomAttribute(propKey)){var node=getNode(this);// If we're updating to null or undefined, we should remove the property
// from the DOM node instead of inadvertently setting to a string. This
// brings us in line with the same behavior we have on initial render.
if(nextProp!=null){DOMPropertyOperations.setValueForProperty(node,propKey,nextProp);}else{DOMPropertyOperations.deleteValueForProperty(node,propKey);}}}if(styleUpdates){CSSPropertyOperations.setValueForStyles(getNode(this),styleUpdates,this);}},/**
   * Reconciles the children with the various properties that affect the
   * children content.
   *
   * @param {object} lastProps
   * @param {object} nextProps
   * @param {ReactReconcileTransaction} transaction
   * @param {object} context
   */_updateDOMChildren:function _updateDOMChildren(lastProps,nextProps,transaction,context){var lastContent=CONTENT_TYPES[_typeof4(lastProps.children)]?lastProps.children:null;var nextContent=CONTENT_TYPES[_typeof4(nextProps.children)]?nextProps.children:null;var lastHtml=lastProps.dangerouslySetInnerHTML&&lastProps.dangerouslySetInnerHTML.__html;var nextHtml=nextProps.dangerouslySetInnerHTML&&nextProps.dangerouslySetInnerHTML.__html;// Note the use of `!=` which checks for null or undefined.
var lastChildren=lastContent!=null?null:lastProps.children;var nextChildren=nextContent!=null?null:nextProps.children;// If we're switching from children to content/html or vice versa, remove
// the old content
var lastHasContentOrHtml=lastContent!=null||lastHtml!=null;var nextHasContentOrHtml=nextContent!=null||nextHtml!=null;if(lastChildren!=null&&nextChildren==null){this.updateChildren(null,transaction,context);}else if(lastHasContentOrHtml&&!nextHasContentOrHtml){this.updateTextContent('');if(process.env.NODE_ENV!=='production'){ReactInstrumentation.debugTool.onSetChildren(this._debugID,[]);}}if(nextContent!=null){if(lastContent!==nextContent){this.updateTextContent(''+nextContent);if(process.env.NODE_ENV!=='production'){setAndValidateContentChildDev.call(this,nextContent);}}}else if(nextHtml!=null){if(lastHtml!==nextHtml){this.updateMarkup(''+nextHtml);}if(process.env.NODE_ENV!=='production'){ReactInstrumentation.debugTool.onSetChildren(this._debugID,[]);}}else if(nextChildren!=null){if(process.env.NODE_ENV!=='production'){setAndValidateContentChildDev.call(this,null);}this.updateChildren(nextChildren,transaction,context);}},getHostNode:function getHostNode(){return getNode(this);},/**
   * Destroys all event registrations for this instance. Does not remove from
   * the DOM. That must be done by the parent.
   *
   * @internal
   */unmountComponent:function unmountComponent(safely){switch(this._tag){case'audio':case'form':case'iframe':case'img':case'link':case'object':case'source':case'video':var listeners=this._wrapperState.listeners;if(listeners){for(var i=0;i<listeners.length;i++){listeners[i].remove();}}break;case'html':case'head':case'body':/**
         * Components like <html> <head> and <body> can't be removed or added
         * easily in a cross-browser way, however it's valuable to be able to
         * take advantage of React's reconciliation for styling and <title>
         * management. So we just document it and throw in dangerous cases.
         */!false?process.env.NODE_ENV!=='production'?invariant(false,'<%s> tried to unmount. Because of cross-browser quirks it is impossible to unmount some top-level components (eg <html>, <head>, and <body>) reliably and efficiently. To fix this, have a single top-level component that never unmounts render these elements.',this._tag):_prodInvariant('66',this._tag):void 0;break;}this.unmountChildren(safely);ReactDOMComponentTree.uncacheNode(this);EventPluginHub.deleteAllListeners(this);this._rootNodeID=0;this._domID=0;this._wrapperState=null;if(process.env.NODE_ENV!=='production'){setAndValidateContentChildDev.call(this,null);}},getPublicInstance:function getPublicInstance(){return getNode(this);}};_assign(ReactDOMComponent.prototype,ReactDOMComponent.Mixin,ReactMultiChild.Mixin);module.exports=ReactDOMComponent;}).call(this,require('_process'));},{"./AutoFocusUtils":79,"./CSSPropertyOperations":82,"./DOMLazyTree":86,"./DOMNamespaces":87,"./DOMProperty":88,"./DOMPropertyOperations":89,"./EventConstants":94,"./EventPluginHub":95,"./EventPluginRegistry":96,"./ReactBrowserEventEmitter":105,"./ReactDOMButton":117,"./ReactDOMComponentFlags":119,"./ReactDOMComponentTree":120,"./ReactDOMInput":126,"./ReactDOMOption":128,"./ReactDOMSelect":129,"./ReactDOMTextarea":132,"./ReactInstrumentation":151,"./ReactMultiChild":155,"./ReactServerRenderingTransaction":168,"./escapeTextContentForBrowser":199,"./isEventSupported":213,"./reactProdInvariant":217,"./validateDOMNesting":224,"_process":3,"fbjs/lib/emptyFunction":51,"fbjs/lib/invariant":59,"fbjs/lib/keyOf":63,"fbjs/lib/shallowEqual":67,"fbjs/lib/warning":68,"object-assign":344}],119:[function(require,module,exports){/**
 * Copyright 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactDOMComponentFlags
 */'use strict';var ReactDOMComponentFlags={hasCachedChildNodes:1<<0};module.exports=ReactDOMComponentFlags;},{}],120:[function(require,module,exports){(function(process){/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactDOMComponentTree
 */'use strict';var _prodInvariant=require('./reactProdInvariant');var DOMProperty=require('./DOMProperty');var ReactDOMComponentFlags=require('./ReactDOMComponentFlags');var invariant=require('fbjs/lib/invariant');var ATTR_NAME=DOMProperty.ID_ATTRIBUTE_NAME;var Flags=ReactDOMComponentFlags;var internalInstanceKey='__reactInternalInstance$'+Math.random().toString(36).slice(2);/**
 * Drill down (through composites and empty components) until we get a host or
 * host text component.
 *
 * This is pretty polymorphic but unavoidable with the current structure we have
 * for `_renderedChildren`.
 */function getRenderedHostOrTextFromComponent(component){var rendered;while(rendered=component._renderedComponent){component=rendered;}return component;}/**
 * Populate `_hostNode` on the rendered host/text component with the given
 * DOM node. The passed `inst` can be a composite.
 */function precacheNode(inst,node){var hostInst=getRenderedHostOrTextFromComponent(inst);hostInst._hostNode=node;node[internalInstanceKey]=hostInst;}function uncacheNode(inst){var node=inst._hostNode;if(node){delete node[internalInstanceKey];inst._hostNode=null;}}/**
 * Populate `_hostNode` on each child of `inst`, assuming that the children
 * match up with the DOM (element) children of `node`.
 *
 * We cache entire levels at once to avoid an n^2 problem where we access the
 * children of a node sequentially and have to walk from the start to our target
 * node every time.
 *
 * Since we update `_renderedChildren` and the actual DOM at (slightly)
 * different times, we could race here and see a newer `_renderedChildren` than
 * the DOM nodes we see. To avoid this, ReactMultiChild calls
 * `prepareToManageChildren` before we change `_renderedChildren`, at which
 * time the container's child nodes are always cached (until it unmounts).
 */function precacheChildNodes(inst,node){if(inst._flags&Flags.hasCachedChildNodes){return;}var children=inst._renderedChildren;var childNode=node.firstChild;outer:for(var name in children){if(!children.hasOwnProperty(name)){continue;}var childInst=children[name];var childID=getRenderedHostOrTextFromComponent(childInst)._domID;if(childID===0){// We're currently unmounting this child in ReactMultiChild; skip it.
continue;}// We assume the child nodes are in the same order as the child instances.
for(;childNode!==null;childNode=childNode.nextSibling){if(childNode.nodeType===1&&childNode.getAttribute(ATTR_NAME)===String(childID)||childNode.nodeType===8&&childNode.nodeValue===' react-text: '+childID+' '||childNode.nodeType===8&&childNode.nodeValue===' react-empty: '+childID+' '){precacheNode(childInst,childNode);continue outer;}}// We reached the end of the DOM children without finding an ID match.
!false?process.env.NODE_ENV!=='production'?invariant(false,'Unable to find element with ID %s.',childID):_prodInvariant('32',childID):void 0;}inst._flags|=Flags.hasCachedChildNodes;}/**
 * Given a DOM node, return the closest ReactDOMComponent or
 * ReactDOMTextComponent instance ancestor.
 */function getClosestInstanceFromNode(node){if(node[internalInstanceKey]){return node[internalInstanceKey];}// Walk up the tree until we find an ancestor whose instance we have cached.
var parents=[];while(!node[internalInstanceKey]){parents.push(node);if(node.parentNode){node=node.parentNode;}else{// Top of the tree. This node must not be part of a React tree (or is
// unmounted, potentially).
return null;}}var closest;var inst;for(;node&&(inst=node[internalInstanceKey]);node=parents.pop()){closest=inst;if(parents.length){precacheChildNodes(inst,node);}}return closest;}/**
 * Given a DOM node, return the ReactDOMComponent or ReactDOMTextComponent
 * instance, or null if the node was not rendered by this React.
 */function getInstanceFromNode(node){var inst=getClosestInstanceFromNode(node);if(inst!=null&&inst._hostNode===node){return inst;}else{return null;}}/**
 * Given a ReactDOMComponent or ReactDOMTextComponent, return the corresponding
 * DOM node.
 */function getNodeFromInstance(inst){// Without this first invariant, passing a non-DOM-component triggers the next
// invariant for a missing parent, which is super confusing.
!(inst._hostNode!==undefined)?process.env.NODE_ENV!=='production'?invariant(false,'getNodeFromInstance: Invalid argument.'):_prodInvariant('33'):void 0;if(inst._hostNode){return inst._hostNode;}// Walk up the tree until we find an ancestor whose DOM node we have cached.
var parents=[];while(!inst._hostNode){parents.push(inst);!inst._hostParent?process.env.NODE_ENV!=='production'?invariant(false,'React DOM tree root should always have a node reference.'):_prodInvariant('34'):void 0;inst=inst._hostParent;}// Now parents contains each ancestor that does *not* have a cached native
// node, and `inst` is the deepest ancestor that does.
for(;parents.length;inst=parents.pop()){precacheChildNodes(inst,inst._hostNode);}return inst._hostNode;}var ReactDOMComponentTree={getClosestInstanceFromNode:getClosestInstanceFromNode,getInstanceFromNode:getInstanceFromNode,getNodeFromInstance:getNodeFromInstance,precacheChildNodes:precacheChildNodes,precacheNode:precacheNode,uncacheNode:uncacheNode};module.exports=ReactDOMComponentTree;}).call(this,require('_process'));},{"./DOMProperty":88,"./ReactDOMComponentFlags":119,"./reactProdInvariant":217,"_process":3,"fbjs/lib/invariant":59}],121:[function(require,module,exports){(function(process){/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactDOMContainerInfo
 */'use strict';var validateDOMNesting=require('./validateDOMNesting');var DOC_NODE_TYPE=9;function ReactDOMContainerInfo(topLevelWrapper,node){var info={_topLevelWrapper:topLevelWrapper,_idCounter:1,_ownerDocument:node?node.nodeType===DOC_NODE_TYPE?node:node.ownerDocument:null,_node:node,_tag:node?node.nodeName.toLowerCase():null,_namespaceURI:node?node.namespaceURI:null};if(process.env.NODE_ENV!=='production'){info._ancestorInfo=node?validateDOMNesting.updatedAncestorInfo(null,info._tag,null):null;}return info;}module.exports=ReactDOMContainerInfo;}).call(this,require('_process'));},{"./validateDOMNesting":224,"_process":3}],122:[function(require,module,exports){/**
 * Copyright 2014-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactDOMEmptyComponent
 */'use strict';var _assign=require('object-assign');var DOMLazyTree=require('./DOMLazyTree');var ReactDOMComponentTree=require('./ReactDOMComponentTree');var ReactDOMEmptyComponent=function ReactDOMEmptyComponent(instantiate){// ReactCompositeComponent uses this:
this._currentElement=null;// ReactDOMComponentTree uses these:
this._hostNode=null;this._hostParent=null;this._hostContainerInfo=null;this._domID=0;};_assign(ReactDOMEmptyComponent.prototype,{mountComponent:function mountComponent(transaction,hostParent,hostContainerInfo,context){var domID=hostContainerInfo._idCounter++;this._domID=domID;this._hostParent=hostParent;this._hostContainerInfo=hostContainerInfo;var nodeValue=' react-empty: '+this._domID+' ';if(transaction.useCreateElement){var ownerDocument=hostContainerInfo._ownerDocument;var node=ownerDocument.createComment(nodeValue);ReactDOMComponentTree.precacheNode(this,node);return DOMLazyTree(node);}else{if(transaction.renderToStaticMarkup){// Normally we'd insert a comment node, but since this is a situation
// where React won't take over (static pages), we can simply return
// nothing.
return'';}return'<!--'+nodeValue+'-->';}},receiveComponent:function receiveComponent(){},getHostNode:function getHostNode(){return ReactDOMComponentTree.getNodeFromInstance(this);},unmountComponent:function unmountComponent(){ReactDOMComponentTree.uncacheNode(this);}});module.exports=ReactDOMEmptyComponent;},{"./DOMLazyTree":86,"./ReactDOMComponentTree":120,"object-assign":344}],123:[function(require,module,exports){(function(process){/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactDOMFactories
 */'use strict';var ReactElement=require('./ReactElement');/**
 * Create a factory that creates HTML tag elements.
 *
 * @private
 */var createDOMFactory=ReactElement.createFactory;if(process.env.NODE_ENV!=='production'){var ReactElementValidator=require('./ReactElementValidator');createDOMFactory=ReactElementValidator.createFactory;}/**
 * Creates a mapping from supported HTML tags to `ReactDOMComponent` classes.
 * This is also accessible via `React.DOM`.
 *
 * @public
 */var ReactDOMFactories={a:createDOMFactory('a'),abbr:createDOMFactory('abbr'),address:createDOMFactory('address'),area:createDOMFactory('area'),article:createDOMFactory('article'),aside:createDOMFactory('aside'),audio:createDOMFactory('audio'),b:createDOMFactory('b'),base:createDOMFactory('base'),bdi:createDOMFactory('bdi'),bdo:createDOMFactory('bdo'),big:createDOMFactory('big'),blockquote:createDOMFactory('blockquote'),body:createDOMFactory('body'),br:createDOMFactory('br'),button:createDOMFactory('button'),canvas:createDOMFactory('canvas'),caption:createDOMFactory('caption'),cite:createDOMFactory('cite'),code:createDOMFactory('code'),col:createDOMFactory('col'),colgroup:createDOMFactory('colgroup'),data:createDOMFactory('data'),datalist:createDOMFactory('datalist'),dd:createDOMFactory('dd'),del:createDOMFactory('del'),details:createDOMFactory('details'),dfn:createDOMFactory('dfn'),dialog:createDOMFactory('dialog'),div:createDOMFactory('div'),dl:createDOMFactory('dl'),dt:createDOMFactory('dt'),em:createDOMFactory('em'),embed:createDOMFactory('embed'),fieldset:createDOMFactory('fieldset'),figcaption:createDOMFactory('figcaption'),figure:createDOMFactory('figure'),footer:createDOMFactory('footer'),form:createDOMFactory('form'),h1:createDOMFactory('h1'),h2:createDOMFactory('h2'),h3:createDOMFactory('h3'),h4:createDOMFactory('h4'),h5:createDOMFactory('h5'),h6:createDOMFactory('h6'),head:createDOMFactory('head'),header:createDOMFactory('header'),hgroup:createDOMFactory('hgroup'),hr:createDOMFactory('hr'),html:createDOMFactory('html'),i:createDOMFactory('i'),iframe:createDOMFactory('iframe'),img:createDOMFactory('img'),input:createDOMFactory('input'),ins:createDOMFactory('ins'),kbd:createDOMFactory('kbd'),keygen:createDOMFactory('keygen'),label:createDOMFactory('label'),legend:createDOMFactory('legend'),li:createDOMFactory('li'),link:createDOMFactory('link'),main:createDOMFactory('main'),map:createDOMFactory('map'),mark:createDOMFactory('mark'),menu:createDOMFactory('menu'),menuitem:createDOMFactory('menuitem'),meta:createDOMFactory('meta'),meter:createDOMFactory('meter'),nav:createDOMFactory('nav'),noscript:createDOMFactory('noscript'),object:createDOMFactory('object'),ol:createDOMFactory('ol'),optgroup:createDOMFactory('optgroup'),option:createDOMFactory('option'),output:createDOMFactory('output'),p:createDOMFactory('p'),param:createDOMFactory('param'),picture:createDOMFactory('picture'),pre:createDOMFactory('pre'),progress:createDOMFactory('progress'),q:createDOMFactory('q'),rp:createDOMFactory('rp'),rt:createDOMFactory('rt'),ruby:createDOMFactory('ruby'),s:createDOMFactory('s'),samp:createDOMFactory('samp'),script:createDOMFactory('script'),section:createDOMFactory('section'),select:createDOMFactory('select'),small:createDOMFactory('small'),source:createDOMFactory('source'),span:createDOMFactory('span'),strong:createDOMFactory('strong'),style:createDOMFactory('style'),sub:createDOMFactory('sub'),summary:createDOMFactory('summary'),sup:createDOMFactory('sup'),table:createDOMFactory('table'),tbody:createDOMFactory('tbody'),td:createDOMFactory('td'),textarea:createDOMFactory('textarea'),tfoot:createDOMFactory('tfoot'),th:createDOMFactory('th'),thead:createDOMFactory('thead'),time:createDOMFactory('time'),title:createDOMFactory('title'),tr:createDOMFactory('tr'),track:createDOMFactory('track'),u:createDOMFactory('u'),ul:createDOMFactory('ul'),'var':createDOMFactory('var'),video:createDOMFactory('video'),wbr:createDOMFactory('wbr'),// SVG
circle:createDOMFactory('circle'),clipPath:createDOMFactory('clipPath'),defs:createDOMFactory('defs'),ellipse:createDOMFactory('ellipse'),g:createDOMFactory('g'),image:createDOMFactory('image'),line:createDOMFactory('line'),linearGradient:createDOMFactory('linearGradient'),mask:createDOMFactory('mask'),path:createDOMFactory('path'),pattern:createDOMFactory('pattern'),polygon:createDOMFactory('polygon'),polyline:createDOMFactory('polyline'),radialGradient:createDOMFactory('radialGradient'),rect:createDOMFactory('rect'),stop:createDOMFactory('stop'),svg:createDOMFactory('svg'),text:createDOMFactory('text'),tspan:createDOMFactory('tspan')};module.exports=ReactDOMFactories;}).call(this,require('_process'));},{"./ReactElement":138,"./ReactElementValidator":139,"_process":3}],124:[function(require,module,exports){/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactDOMFeatureFlags
 */'use strict';var ReactDOMFeatureFlags={useCreateElement:true};module.exports=ReactDOMFeatureFlags;},{}],125:[function(require,module,exports){/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactDOMIDOperations
 */'use strict';var DOMChildrenOperations=require('./DOMChildrenOperations');var ReactDOMComponentTree=require('./ReactDOMComponentTree');/**
 * Operations used to process updates to DOM nodes.
 */var ReactDOMIDOperations={/**
   * Updates a component's children by processing a series of updates.
   *
   * @param {array<object>} updates List of update configurations.
   * @internal
   */dangerouslyProcessChildrenUpdates:function dangerouslyProcessChildrenUpdates(parentInst,updates){var node=ReactDOMComponentTree.getNodeFromInstance(parentInst);DOMChildrenOperations.processUpdates(node,updates);}};module.exports=ReactDOMIDOperations;},{"./DOMChildrenOperations":85,"./ReactDOMComponentTree":120}],126:[function(require,module,exports){(function(process){/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactDOMInput
 */'use strict';var _prodInvariant=require('./reactProdInvariant'),_assign=require('object-assign');var DisabledInputUtils=require('./DisabledInputUtils');var DOMPropertyOperations=require('./DOMPropertyOperations');var LinkedValueUtils=require('./LinkedValueUtils');var ReactDOMComponentTree=require('./ReactDOMComponentTree');var ReactUpdates=require('./ReactUpdates');var invariant=require('fbjs/lib/invariant');var warning=require('fbjs/lib/warning');var didWarnValueLink=false;var didWarnCheckedLink=false;var didWarnValueDefaultValue=false;var didWarnCheckedDefaultChecked=false;var didWarnControlledToUncontrolled=false;var didWarnUncontrolledToControlled=false;function forceUpdateIfMounted(){if(this._rootNodeID){// DOM component is still mounted; update
ReactDOMInput.updateWrapper(this);}}function isControlled(props){var usesChecked=props.type==='checkbox'||props.type==='radio';return usesChecked?props.checked!=null:props.value!=null;}/**
 * Implements an <input> host component that allows setting these optional
 * props: `checked`, `value`, `defaultChecked`, and `defaultValue`.
 *
 * If `checked` or `value` are not supplied (or null/undefined), user actions
 * that affect the checked state or value will trigger updates to the element.
 *
 * If they are supplied (and not null/undefined), the rendered element will not
 * trigger updates to the element. Instead, the props must change in order for
 * the rendered element to be updated.
 *
 * The rendered element will be initialized as unchecked (or `defaultChecked`)
 * with an empty value (or `defaultValue`).
 *
 * @see http://www.w3.org/TR/2012/WD-html5-20121025/the-input-element.html
 */var ReactDOMInput={getHostProps:function getHostProps(inst,props){var value=LinkedValueUtils.getValue(props);var checked=LinkedValueUtils.getChecked(props);var hostProps=_assign({// Make sure we set .type before any other properties (setting .value
// before .type means .value is lost in IE11 and below)
type:undefined,// Make sure we set .step before .value (setting .value before .step
// means .value is rounded on mount, based upon step precision)
step:undefined,// Make sure we set .min & .max before .value (to ensure proper order
// in corner cases such as min or max deriving from value, e.g. Issue #7170)
min:undefined,max:undefined},DisabledInputUtils.getHostProps(inst,props),{defaultChecked:undefined,defaultValue:undefined,value:value!=null?value:inst._wrapperState.initialValue,checked:checked!=null?checked:inst._wrapperState.initialChecked,onChange:inst._wrapperState.onChange});return hostProps;},mountWrapper:function mountWrapper(inst,props){if(process.env.NODE_ENV!=='production'){LinkedValueUtils.checkPropTypes('input',props,inst._currentElement._owner);var owner=inst._currentElement._owner;if(props.valueLink!==undefined&&!didWarnValueLink){process.env.NODE_ENV!=='production'?warning(false,'`valueLink` prop on `input` is deprecated; set `value` and `onChange` instead.'):void 0;didWarnValueLink=true;}if(props.checkedLink!==undefined&&!didWarnCheckedLink){process.env.NODE_ENV!=='production'?warning(false,'`checkedLink` prop on `input` is deprecated; set `value` and `onChange` instead.'):void 0;didWarnCheckedLink=true;}if(props.checked!==undefined&&props.defaultChecked!==undefined&&!didWarnCheckedDefaultChecked){process.env.NODE_ENV!=='production'?warning(false,'%s contains an input of type %s with both checked and defaultChecked props. '+'Input elements must be either controlled or uncontrolled '+'(specify either the checked prop, or the defaultChecked prop, but not '+'both). Decide between using a controlled or uncontrolled input '+'element and remove one of these props. More info: '+'https://fb.me/react-controlled-components',owner&&owner.getName()||'A component',props.type):void 0;didWarnCheckedDefaultChecked=true;}if(props.value!==undefined&&props.defaultValue!==undefined&&!didWarnValueDefaultValue){process.env.NODE_ENV!=='production'?warning(false,'%s contains an input of type %s with both value and defaultValue props. '+'Input elements must be either controlled or uncontrolled '+'(specify either the value prop, or the defaultValue prop, but not '+'both). Decide between using a controlled or uncontrolled input '+'element and remove one of these props. More info: '+'https://fb.me/react-controlled-components',owner&&owner.getName()||'A component',props.type):void 0;didWarnValueDefaultValue=true;}}var defaultValue=props.defaultValue;inst._wrapperState={initialChecked:props.checked!=null?props.checked:props.defaultChecked,initialValue:props.value!=null?props.value:defaultValue,listeners:null,onChange:_handleChange.bind(inst)};if(process.env.NODE_ENV!=='production'){inst._wrapperState.controlled=isControlled(props);}},updateWrapper:function updateWrapper(inst){var props=inst._currentElement.props;if(process.env.NODE_ENV!=='production'){var controlled=isControlled(props);var owner=inst._currentElement._owner;if(!inst._wrapperState.controlled&&controlled&&!didWarnUncontrolledToControlled){process.env.NODE_ENV!=='production'?warning(false,'%s is changing an uncontrolled input of type %s to be controlled. '+'Input elements should not switch from uncontrolled to controlled (or vice versa). '+'Decide between using a controlled or uncontrolled input '+'element for the lifetime of the component. More info: https://fb.me/react-controlled-components',owner&&owner.getName()||'A component',props.type):void 0;didWarnUncontrolledToControlled=true;}if(inst._wrapperState.controlled&&!controlled&&!didWarnControlledToUncontrolled){process.env.NODE_ENV!=='production'?warning(false,'%s is changing a controlled input of type %s to be uncontrolled. '+'Input elements should not switch from controlled to uncontrolled (or vice versa). '+'Decide between using a controlled or uncontrolled input '+'element for the lifetime of the component. More info: https://fb.me/react-controlled-components',owner&&owner.getName()||'A component',props.type):void 0;didWarnControlledToUncontrolled=true;}}// TODO: Shouldn't this be getChecked(props)?
var checked=props.checked;if(checked!=null){DOMPropertyOperations.setValueForProperty(ReactDOMComponentTree.getNodeFromInstance(inst),'checked',checked||false);}var node=ReactDOMComponentTree.getNodeFromInstance(inst);var value=LinkedValueUtils.getValue(props);if(value!=null){// Cast `value` to a string to ensure the value is set correctly. While
// browsers typically do this as necessary, jsdom doesn't.
var newValue=''+value;// To avoid side effects (such as losing text selection), only set value if changed
if(newValue!==node.value){node.value=newValue;}}else{if(props.value==null&&props.defaultValue!=null){node.defaultValue=''+props.defaultValue;}if(props.checked==null&&props.defaultChecked!=null){node.defaultChecked=!!props.defaultChecked;}}},postMountWrapper:function postMountWrapper(inst){var props=inst._currentElement.props;// This is in postMount because we need access to the DOM node, which is not
// available until after the component has mounted.
var node=ReactDOMComponentTree.getNodeFromInstance(inst);// Detach value from defaultValue. We won't do anything if we're working on
// submit or reset inputs as those values & defaultValues are linked. They
// are not resetable nodes so this operation doesn't matter and actually
// removes browser-default values (eg "Submit Query") when no value is
// provided.
switch(props.type){case'submit':case'reset':break;case'color':case'date':case'datetime':case'datetime-local':case'month':case'time':case'week':// This fixes the no-show issue on iOS Safari and Android Chrome:
// https://github.com/facebook/react/issues/7233
node.value='';node.value=node.defaultValue;break;default:node.value=node.value;break;}// Normally, we'd just do `node.checked = node.checked` upon initial mount, less this bug
// this is needed to work around a chrome bug where setting defaultChecked
// will sometimes influence the value of checked (even after detachment).
// Reference: https://bugs.chromium.org/p/chromium/issues/detail?id=608416
// We need to temporarily unset name to avoid disrupting radio button groups.
var name=node.name;if(name!==''){node.name='';}node.defaultChecked=!node.defaultChecked;node.defaultChecked=!node.defaultChecked;if(name!==''){node.name=name;}}};function _handleChange(event){var props=this._currentElement.props;var returnValue=LinkedValueUtils.executeOnChange(props,event);// Here we use asap to wait until all updates have propagated, which
// is important when using controlled components within layers:
// https://github.com/facebook/react/issues/1698
ReactUpdates.asap(forceUpdateIfMounted,this);var name=props.name;if(props.type==='radio'&&name!=null){var rootNode=ReactDOMComponentTree.getNodeFromInstance(this);var queryRoot=rootNode;while(queryRoot.parentNode){queryRoot=queryRoot.parentNode;}// If `rootNode.form` was non-null, then we could try `form.elements`,
// but that sometimes behaves strangely in IE8. We could also try using
// `form.getElementsByName`, but that will only return direct children
// and won't include inputs that use the HTML5 `form=` attribute. Since
// the input might not even be in a form, let's just use the global
// `querySelectorAll` to ensure we don't miss anything.
var group=queryRoot.querySelectorAll('input[name='+JSON.stringify(''+name)+'][type="radio"]');for(var i=0;i<group.length;i++){var otherNode=group[i];if(otherNode===rootNode||otherNode.form!==rootNode.form){continue;}// This will throw if radio buttons rendered by different copies of React
// and the same name are rendered into the same form (same as #1939).
// That's probably okay; we don't support it just as we don't support
// mixing React radio buttons with non-React ones.
var otherInstance=ReactDOMComponentTree.getInstanceFromNode(otherNode);!otherInstance?process.env.NODE_ENV!=='production'?invariant(false,'ReactDOMInput: Mixing React and non-React radio inputs with the same `name` is not supported.'):_prodInvariant('90'):void 0;// If this is a controlled radio button group, forcing the input that
// was previously checked to update will cause it to be come re-checked
// as appropriate.
ReactUpdates.asap(forceUpdateIfMounted,otherInstance);}}return returnValue;}module.exports=ReactDOMInput;}).call(this,require('_process'));},{"./DOMPropertyOperations":89,"./DisabledInputUtils":92,"./LinkedValueUtils":102,"./ReactDOMComponentTree":120,"./ReactUpdates":173,"./reactProdInvariant":217,"_process":3,"fbjs/lib/invariant":59,"fbjs/lib/warning":68,"object-assign":344}],127:[function(require,module,exports){(function(process){/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactDOMNullInputValuePropHook
 */'use strict';var ReactComponentTreeHook=require('./ReactComponentTreeHook');var warning=require('fbjs/lib/warning');var didWarnValueNull=false;function handleElement(debugID,element){if(element==null){return;}if(element.type!=='input'&&element.type!=='textarea'&&element.type!=='select'){return;}if(element.props!=null&&element.props.value===null&&!didWarnValueNull){process.env.NODE_ENV!=='production'?warning(false,'`value` prop on `%s` should not be null. '+'Consider using the empty string to clear the component or `undefined` '+'for uncontrolled components.%s',element.type,ReactComponentTreeHook.getStackAddendumByID(debugID)):void 0;didWarnValueNull=true;}}var ReactDOMNullInputValuePropHook={onBeforeMountComponent:function onBeforeMountComponent(debugID,element){handleElement(debugID,element);},onBeforeUpdateComponent:function onBeforeUpdateComponent(debugID,element){handleElement(debugID,element);}};module.exports=ReactDOMNullInputValuePropHook;}).call(this,require('_process'));},{"./ReactComponentTreeHook":113,"_process":3,"fbjs/lib/warning":68}],128:[function(require,module,exports){(function(process){/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactDOMOption
 */'use strict';var _assign=require('object-assign');var ReactChildren=require('./ReactChildren');var ReactDOMComponentTree=require('./ReactDOMComponentTree');var ReactDOMSelect=require('./ReactDOMSelect');var warning=require('fbjs/lib/warning');var didWarnInvalidOptionChildren=false;function flattenChildren(children){var content='';// Flatten children and warn if they aren't strings or numbers;
// invalid types are ignored.
ReactChildren.forEach(children,function(child){if(child==null){return;}if(typeof child==='string'||typeof child==='number'){content+=child;}else if(!didWarnInvalidOptionChildren){didWarnInvalidOptionChildren=true;process.env.NODE_ENV!=='production'?warning(false,'Only strings and numbers are supported as <option> children.'):void 0;}});return content;}/**
 * Implements an <option> host component that warns when `selected` is set.
 */var ReactDOMOption={mountWrapper:function mountWrapper(inst,props,hostParent){// TODO (yungsters): Remove support for `selected` in <option>.
if(process.env.NODE_ENV!=='production'){process.env.NODE_ENV!=='production'?warning(props.selected==null,'Use the `defaultValue` or `value` props on <select> instead of '+'setting `selected` on <option>.'):void 0;}// Look up whether this option is 'selected'
var selectValue=null;if(hostParent!=null){var selectParent=hostParent;if(selectParent._tag==='optgroup'){selectParent=selectParent._hostParent;}if(selectParent!=null&&selectParent._tag==='select'){selectValue=ReactDOMSelect.getSelectValueContext(selectParent);}}// If the value is null (e.g., no specified value or after initial mount)
// or missing (e.g., for <datalist>), we don't change props.selected
var selected=null;if(selectValue!=null){var value;if(props.value!=null){value=props.value+'';}else{value=flattenChildren(props.children);}selected=false;if(Array.isArray(selectValue)){// multiple
for(var i=0;i<selectValue.length;i++){if(''+selectValue[i]===value){selected=true;break;}}}else{selected=''+selectValue===value;}}inst._wrapperState={selected:selected};},postMountWrapper:function postMountWrapper(inst){// value="" should make a value attribute (#6219)
var props=inst._currentElement.props;if(props.value!=null){var node=ReactDOMComponentTree.getNodeFromInstance(inst);node.setAttribute('value',props.value);}},getHostProps:function getHostProps(inst,props){var hostProps=_assign({selected:undefined,children:undefined},props);// Read state only from initial mount because <select> updates value
// manually; we need the initial state only for server rendering
if(inst._wrapperState.selected!=null){hostProps.selected=inst._wrapperState.selected;}var content=flattenChildren(props.children);if(content){hostProps.children=content;}return hostProps;}};module.exports=ReactDOMOption;}).call(this,require('_process'));},{"./ReactChildren":107,"./ReactDOMComponentTree":120,"./ReactDOMSelect":129,"_process":3,"fbjs/lib/warning":68,"object-assign":344}],129:[function(require,module,exports){(function(process){/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactDOMSelect
 */'use strict';var _assign=require('object-assign');var DisabledInputUtils=require('./DisabledInputUtils');var LinkedValueUtils=require('./LinkedValueUtils');var ReactDOMComponentTree=require('./ReactDOMComponentTree');var ReactUpdates=require('./ReactUpdates');var warning=require('fbjs/lib/warning');var didWarnValueLink=false;var didWarnValueDefaultValue=false;function updateOptionsIfPendingUpdateAndMounted(){if(this._rootNodeID&&this._wrapperState.pendingUpdate){this._wrapperState.pendingUpdate=false;var props=this._currentElement.props;var value=LinkedValueUtils.getValue(props);if(value!=null){updateOptions(this,Boolean(props.multiple),value);}}}function getDeclarationErrorAddendum(owner){if(owner){var name=owner.getName();if(name){return' Check the render method of `'+name+'`.';}}return'';}var valuePropNames=['value','defaultValue'];/**
 * Validation function for `value` and `defaultValue`.
 * @private
 */function checkSelectPropTypes(inst,props){var owner=inst._currentElement._owner;LinkedValueUtils.checkPropTypes('select',props,owner);if(props.valueLink!==undefined&&!didWarnValueLink){process.env.NODE_ENV!=='production'?warning(false,'`valueLink` prop on `select` is deprecated; set `value` and `onChange` instead.'):void 0;didWarnValueLink=true;}for(var i=0;i<valuePropNames.length;i++){var propName=valuePropNames[i];if(props[propName]==null){continue;}var isArray=Array.isArray(props[propName]);if(props.multiple&&!isArray){process.env.NODE_ENV!=='production'?warning(false,'The `%s` prop supplied to <select> must be an array if '+'`multiple` is true.%s',propName,getDeclarationErrorAddendum(owner)):void 0;}else if(!props.multiple&&isArray){process.env.NODE_ENV!=='production'?warning(false,'The `%s` prop supplied to <select> must be a scalar '+'value if `multiple` is false.%s',propName,getDeclarationErrorAddendum(owner)):void 0;}}}/**
 * @param {ReactDOMComponent} inst
 * @param {boolean} multiple
 * @param {*} propValue A stringable (with `multiple`, a list of stringables).
 * @private
 */function updateOptions(inst,multiple,propValue){var selectedValue,i;var options=ReactDOMComponentTree.getNodeFromInstance(inst).options;if(multiple){selectedValue={};for(i=0;i<propValue.length;i++){selectedValue[''+propValue[i]]=true;}for(i=0;i<options.length;i++){var selected=selectedValue.hasOwnProperty(options[i].value);if(options[i].selected!==selected){options[i].selected=selected;}}}else{// Do not set `select.value` as exact behavior isn't consistent across all
// browsers for all cases.
selectedValue=''+propValue;for(i=0;i<options.length;i++){if(options[i].value===selectedValue){options[i].selected=true;return;}}if(options.length){options[0].selected=true;}}}/**
 * Implements a <select> host component that allows optionally setting the
 * props `value` and `defaultValue`. If `multiple` is false, the prop must be a
 * stringable. If `multiple` is true, the prop must be an array of stringables.
 *
 * If `value` is not supplied (or null/undefined), user actions that change the
 * selected option will trigger updates to the rendered options.
 *
 * If it is supplied (and not null/undefined), the rendered options will not
 * update in response to user actions. Instead, the `value` prop must change in
 * order for the rendered options to update.
 *
 * If `defaultValue` is provided, any options with the supplied values will be
 * selected.
 */var ReactDOMSelect={getHostProps:function getHostProps(inst,props){return _assign({},DisabledInputUtils.getHostProps(inst,props),{onChange:inst._wrapperState.onChange,value:undefined});},mountWrapper:function mountWrapper(inst,props){if(process.env.NODE_ENV!=='production'){checkSelectPropTypes(inst,props);}var value=LinkedValueUtils.getValue(props);inst._wrapperState={pendingUpdate:false,initialValue:value!=null?value:props.defaultValue,listeners:null,onChange:_handleChange.bind(inst),wasMultiple:Boolean(props.multiple)};if(props.value!==undefined&&props.defaultValue!==undefined&&!didWarnValueDefaultValue){process.env.NODE_ENV!=='production'?warning(false,'Select elements must be either controlled or uncontrolled '+'(specify either the value prop, or the defaultValue prop, but not '+'both). Decide between using a controlled or uncontrolled select '+'element and remove one of these props. More info: '+'https://fb.me/react-controlled-components'):void 0;didWarnValueDefaultValue=true;}},getSelectValueContext:function getSelectValueContext(inst){// ReactDOMOption looks at this initial value so the initial generated
// markup has correct `selected` attributes
return inst._wrapperState.initialValue;},postUpdateWrapper:function postUpdateWrapper(inst){var props=inst._currentElement.props;// After the initial mount, we control selected-ness manually so don't pass
// this value down
inst._wrapperState.initialValue=undefined;var wasMultiple=inst._wrapperState.wasMultiple;inst._wrapperState.wasMultiple=Boolean(props.multiple);var value=LinkedValueUtils.getValue(props);if(value!=null){inst._wrapperState.pendingUpdate=false;updateOptions(inst,Boolean(props.multiple),value);}else if(wasMultiple!==Boolean(props.multiple)){// For simplicity, reapply `defaultValue` if `multiple` is toggled.
if(props.defaultValue!=null){updateOptions(inst,Boolean(props.multiple),props.defaultValue);}else{// Revert the select back to its default unselected state.
updateOptions(inst,Boolean(props.multiple),props.multiple?[]:'');}}}};function _handleChange(event){var props=this._currentElement.props;var returnValue=LinkedValueUtils.executeOnChange(props,event);if(this._rootNodeID){this._wrapperState.pendingUpdate=true;}ReactUpdates.asap(updateOptionsIfPendingUpdateAndMounted,this);return returnValue;}module.exports=ReactDOMSelect;}).call(this,require('_process'));},{"./DisabledInputUtils":92,"./LinkedValueUtils":102,"./ReactDOMComponentTree":120,"./ReactUpdates":173,"_process":3,"fbjs/lib/warning":68,"object-assign":344}],130:[function(require,module,exports){/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactDOMSelection
 */'use strict';var ExecutionEnvironment=require('fbjs/lib/ExecutionEnvironment');var getNodeForCharacterOffset=require('./getNodeForCharacterOffset');var getTextContentAccessor=require('./getTextContentAccessor');/**
 * While `isCollapsed` is available on the Selection object and `collapsed`
 * is available on the Range object, IE11 sometimes gets them wrong.
 * If the anchor/focus nodes and offsets are the same, the range is collapsed.
 */function isCollapsed(anchorNode,anchorOffset,focusNode,focusOffset){return anchorNode===focusNode&&anchorOffset===focusOffset;}/**
 * Get the appropriate anchor and focus node/offset pairs for IE.
 *
 * The catch here is that IE's selection API doesn't provide information
 * about whether the selection is forward or backward, so we have to
 * behave as though it's always forward.
 *
 * IE text differs from modern selection in that it behaves as though
 * block elements end with a new line. This means character offsets will
 * differ between the two APIs.
 *
 * @param {DOMElement} node
 * @return {object}
 */function getIEOffsets(node){var selection=document.selection;var selectedRange=selection.createRange();var selectedLength=selectedRange.text.length;// Duplicate selection so we can move range without breaking user selection.
var fromStart=selectedRange.duplicate();fromStart.moveToElementText(node);fromStart.setEndPoint('EndToStart',selectedRange);var startOffset=fromStart.text.length;var endOffset=startOffset+selectedLength;return{start:startOffset,end:endOffset};}/**
 * @param {DOMElement} node
 * @return {?object}
 */function getModernOffsets(node){var selection=window.getSelection&&window.getSelection();if(!selection||selection.rangeCount===0){return null;}var anchorNode=selection.anchorNode;var anchorOffset=selection.anchorOffset;var focusNode=selection.focusNode;var focusOffset=selection.focusOffset;var currentRange=selection.getRangeAt(0);// In Firefox, range.startContainer and range.endContainer can be "anonymous
// divs", e.g. the up/down buttons on an <input type="number">. Anonymous
// divs do not seem to expose properties, triggering a "Permission denied
// error" if any of its properties are accessed. The only seemingly possible
// way to avoid erroring is to access a property that typically works for
// non-anonymous divs and catch any error that may otherwise arise. See
// https://bugzilla.mozilla.org/show_bug.cgi?id=208427
try{/* eslint-disable no-unused-expressions */currentRange.startContainer.nodeType;currentRange.endContainer.nodeType;/* eslint-enable no-unused-expressions */}catch(e){return null;}// If the node and offset values are the same, the selection is collapsed.
// `Selection.isCollapsed` is available natively, but IE sometimes gets
// this value wrong.
var isSelectionCollapsed=isCollapsed(selection.anchorNode,selection.anchorOffset,selection.focusNode,selection.focusOffset);var rangeLength=isSelectionCollapsed?0:currentRange.toString().length;var tempRange=currentRange.cloneRange();tempRange.selectNodeContents(node);tempRange.setEnd(currentRange.startContainer,currentRange.startOffset);var isTempRangeCollapsed=isCollapsed(tempRange.startContainer,tempRange.startOffset,tempRange.endContainer,tempRange.endOffset);var start=isTempRangeCollapsed?0:tempRange.toString().length;var end=start+rangeLength;// Detect whether the selection is backward.
var detectionRange=document.createRange();detectionRange.setStart(anchorNode,anchorOffset);detectionRange.setEnd(focusNode,focusOffset);var isBackward=detectionRange.collapsed;return{start:isBackward?end:start,end:isBackward?start:end};}/**
 * @param {DOMElement|DOMTextNode} node
 * @param {object} offsets
 */function setIEOffsets(node,offsets){var range=document.selection.createRange().duplicate();var start,end;if(offsets.end===undefined){start=offsets.start;end=start;}else if(offsets.start>offsets.end){start=offsets.end;end=offsets.start;}else{start=offsets.start;end=offsets.end;}range.moveToElementText(node);range.moveStart('character',start);range.setEndPoint('EndToStart',range);range.moveEnd('character',end-start);range.select();}/**
 * In modern non-IE browsers, we can support both forward and backward
 * selections.
 *
 * Note: IE10+ supports the Selection object, but it does not support
 * the `extend` method, which means that even in modern IE, it's not possible
 * to programmatically create a backward selection. Thus, for all IE
 * versions, we use the old IE API to create our selections.
 *
 * @param {DOMElement|DOMTextNode} node
 * @param {object} offsets
 */function setModernOffsets(node,offsets){if(!window.getSelection){return;}var selection=window.getSelection();var length=node[getTextContentAccessor()].length;var start=Math.min(offsets.start,length);var end=offsets.end===undefined?start:Math.min(offsets.end,length);// IE 11 uses modern selection, but doesn't support the extend method.
// Flip backward selections, so we can set with a single range.
if(!selection.extend&&start>end){var temp=end;end=start;start=temp;}var startMarker=getNodeForCharacterOffset(node,start);var endMarker=getNodeForCharacterOffset(node,end);if(startMarker&&endMarker){var range=document.createRange();range.setStart(startMarker.node,startMarker.offset);selection.removeAllRanges();if(start>end){selection.addRange(range);selection.extend(endMarker.node,endMarker.offset);}else{range.setEnd(endMarker.node,endMarker.offset);selection.addRange(range);}}}var useIEOffsets=ExecutionEnvironment.canUseDOM&&'selection'in document&&!('getSelection'in window);var ReactDOMSelection={/**
   * @param {DOMElement} node
   */getOffsets:useIEOffsets?getIEOffsets:getModernOffsets,/**
   * @param {DOMElement|DOMTextNode} node
   * @param {object} offsets
   */setOffsets:useIEOffsets?setIEOffsets:setModernOffsets};module.exports=ReactDOMSelection;},{"./getNodeForCharacterOffset":209,"./getTextContentAccessor":210,"fbjs/lib/ExecutionEnvironment":45}],131:[function(require,module,exports){(function(process){/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactDOMTextComponent
 */'use strict';var _prodInvariant=require('./reactProdInvariant'),_assign=require('object-assign');var DOMChildrenOperations=require('./DOMChildrenOperations');var DOMLazyTree=require('./DOMLazyTree');var ReactDOMComponentTree=require('./ReactDOMComponentTree');var escapeTextContentForBrowser=require('./escapeTextContentForBrowser');var invariant=require('fbjs/lib/invariant');var validateDOMNesting=require('./validateDOMNesting');/**
 * Text nodes violate a couple assumptions that React makes about components:
 *
 *  - When mounting text into the DOM, adjacent text nodes are merged.
 *  - Text nodes cannot be assigned a React root ID.
 *
 * This component is used to wrap strings between comment nodes so that they
 * can undergo the same reconciliation that is applied to elements.
 *
 * TODO: Investigate representing React components in the DOM with text nodes.
 *
 * @class ReactDOMTextComponent
 * @extends ReactComponent
 * @internal
 */var ReactDOMTextComponent=function ReactDOMTextComponent(text){// TODO: This is really a ReactText (ReactNode), not a ReactElement
this._currentElement=text;this._stringText=''+text;// ReactDOMComponentTree uses these:
this._hostNode=null;this._hostParent=null;// Properties
this._domID=0;this._mountIndex=0;this._closingComment=null;this._commentNodes=null;};_assign(ReactDOMTextComponent.prototype,{/**
   * Creates the markup for this text node. This node is not intended to have
   * any features besides containing text content.
   *
   * @param {ReactReconcileTransaction|ReactServerRenderingTransaction} transaction
   * @return {string} Markup for this text node.
   * @internal
   */mountComponent:function mountComponent(transaction,hostParent,hostContainerInfo,context){if(process.env.NODE_ENV!=='production'){var parentInfo;if(hostParent!=null){parentInfo=hostParent._ancestorInfo;}else if(hostContainerInfo!=null){parentInfo=hostContainerInfo._ancestorInfo;}if(parentInfo){// parentInfo should always be present except for the top-level
// component when server rendering
validateDOMNesting(null,this._stringText,this,parentInfo);}}var domID=hostContainerInfo._idCounter++;var openingValue=' react-text: '+domID+' ';var closingValue=' /react-text ';this._domID=domID;this._hostParent=hostParent;if(transaction.useCreateElement){var ownerDocument=hostContainerInfo._ownerDocument;var openingComment=ownerDocument.createComment(openingValue);var closingComment=ownerDocument.createComment(closingValue);var lazyTree=DOMLazyTree(ownerDocument.createDocumentFragment());DOMLazyTree.queueChild(lazyTree,DOMLazyTree(openingComment));if(this._stringText){DOMLazyTree.queueChild(lazyTree,DOMLazyTree(ownerDocument.createTextNode(this._stringText)));}DOMLazyTree.queueChild(lazyTree,DOMLazyTree(closingComment));ReactDOMComponentTree.precacheNode(this,openingComment);this._closingComment=closingComment;return lazyTree;}else{var escapedText=escapeTextContentForBrowser(this._stringText);if(transaction.renderToStaticMarkup){// Normally we'd wrap this between comment nodes for the reasons stated
// above, but since this is a situation where React won't take over
// (static pages), we can simply return the text as it is.
return escapedText;}return'<!--'+openingValue+'-->'+escapedText+'<!--'+closingValue+'-->';}},/**
   * Updates this component by updating the text content.
   *
   * @param {ReactText} nextText The next text content
   * @param {ReactReconcileTransaction} transaction
   * @internal
   */receiveComponent:function receiveComponent(nextText,transaction){if(nextText!==this._currentElement){this._currentElement=nextText;var nextStringText=''+nextText;if(nextStringText!==this._stringText){// TODO: Save this as pending props and use performUpdateIfNecessary
// and/or updateComponent to do the actual update for consistency with
// other component types?
this._stringText=nextStringText;var commentNodes=this.getHostNode();DOMChildrenOperations.replaceDelimitedText(commentNodes[0],commentNodes[1],nextStringText);}}},getHostNode:function getHostNode(){var hostNode=this._commentNodes;if(hostNode){return hostNode;}if(!this._closingComment){var openingComment=ReactDOMComponentTree.getNodeFromInstance(this);var node=openingComment.nextSibling;while(true){!(node!=null)?process.env.NODE_ENV!=='production'?invariant(false,'Missing closing comment for text component %s',this._domID):_prodInvariant('67',this._domID):void 0;if(node.nodeType===8&&node.nodeValue===' /react-text '){this._closingComment=node;break;}node=node.nextSibling;}}hostNode=[this._hostNode,this._closingComment];this._commentNodes=hostNode;return hostNode;},unmountComponent:function unmountComponent(){this._closingComment=null;this._commentNodes=null;ReactDOMComponentTree.uncacheNode(this);}});module.exports=ReactDOMTextComponent;}).call(this,require('_process'));},{"./DOMChildrenOperations":85,"./DOMLazyTree":86,"./ReactDOMComponentTree":120,"./escapeTextContentForBrowser":199,"./reactProdInvariant":217,"./validateDOMNesting":224,"_process":3,"fbjs/lib/invariant":59,"object-assign":344}],132:[function(require,module,exports){(function(process){/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactDOMTextarea
 */'use strict';var _prodInvariant=require('./reactProdInvariant'),_assign=require('object-assign');var DisabledInputUtils=require('./DisabledInputUtils');var LinkedValueUtils=require('./LinkedValueUtils');var ReactDOMComponentTree=require('./ReactDOMComponentTree');var ReactUpdates=require('./ReactUpdates');var invariant=require('fbjs/lib/invariant');var warning=require('fbjs/lib/warning');var didWarnValueLink=false;var didWarnValDefaultVal=false;function forceUpdateIfMounted(){if(this._rootNodeID){// DOM component is still mounted; update
ReactDOMTextarea.updateWrapper(this);}}/**
 * Implements a <textarea> host component that allows setting `value`, and
 * `defaultValue`. This differs from the traditional DOM API because value is
 * usually set as PCDATA children.
 *
 * If `value` is not supplied (or null/undefined), user actions that affect the
 * value will trigger updates to the element.
 *
 * If `value` is supplied (and not null/undefined), the rendered element will
 * not trigger updates to the element. Instead, the `value` prop must change in
 * order for the rendered element to be updated.
 *
 * The rendered element will be initialized with an empty value, the prop
 * `defaultValue` if specified, or the children content (deprecated).
 */var ReactDOMTextarea={getHostProps:function getHostProps(inst,props){!(props.dangerouslySetInnerHTML==null)?process.env.NODE_ENV!=='production'?invariant(false,'`dangerouslySetInnerHTML` does not make sense on <textarea>.'):_prodInvariant('91'):void 0;// Always set children to the same thing. In IE9, the selection range will
// get reset if `textContent` is mutated.  We could add a check in setTextContent
// to only set the value if/when the value differs from the node value (which would
// completely solve this IE9 bug), but Sebastian+Ben seemed to like this solution.
// The value can be a boolean or object so that's why it's forced to be a string.
var hostProps=_assign({},DisabledInputUtils.getHostProps(inst,props),{value:undefined,defaultValue:undefined,children:''+inst._wrapperState.initialValue,onChange:inst._wrapperState.onChange});return hostProps;},mountWrapper:function mountWrapper(inst,props){if(process.env.NODE_ENV!=='production'){LinkedValueUtils.checkPropTypes('textarea',props,inst._currentElement._owner);if(props.valueLink!==undefined&&!didWarnValueLink){process.env.NODE_ENV!=='production'?warning(false,'`valueLink` prop on `textarea` is deprecated; set `value` and `onChange` instead.'):void 0;didWarnValueLink=true;}if(props.value!==undefined&&props.defaultValue!==undefined&&!didWarnValDefaultVal){process.env.NODE_ENV!=='production'?warning(false,'Textarea elements must be either controlled or uncontrolled '+'(specify either the value prop, or the defaultValue prop, but not '+'both). Decide between using a controlled or uncontrolled textarea '+'and remove one of these props. More info: '+'https://fb.me/react-controlled-components'):void 0;didWarnValDefaultVal=true;}}var value=LinkedValueUtils.getValue(props);var initialValue=value;// Only bother fetching default value if we're going to use it
if(value==null){var defaultValue=props.defaultValue;// TODO (yungsters): Remove support for children content in <textarea>.
var children=props.children;if(children!=null){if(process.env.NODE_ENV!=='production'){process.env.NODE_ENV!=='production'?warning(false,'Use the `defaultValue` or `value` props instead of setting '+'children on <textarea>.'):void 0;}!(defaultValue==null)?process.env.NODE_ENV!=='production'?invariant(false,'If you supply `defaultValue` on a <textarea>, do not pass children.'):_prodInvariant('92'):void 0;if(Array.isArray(children)){!(children.length<=1)?process.env.NODE_ENV!=='production'?invariant(false,'<textarea> can only have at most one child.'):_prodInvariant('93'):void 0;children=children[0];}defaultValue=''+children;}if(defaultValue==null){defaultValue='';}initialValue=defaultValue;}inst._wrapperState={initialValue:''+initialValue,listeners:null,onChange:_handleChange.bind(inst)};},updateWrapper:function updateWrapper(inst){var props=inst._currentElement.props;var node=ReactDOMComponentTree.getNodeFromInstance(inst);var value=LinkedValueUtils.getValue(props);if(value!=null){// Cast `value` to a string to ensure the value is set correctly. While
// browsers typically do this as necessary, jsdom doesn't.
var newValue=''+value;// To avoid side effects (such as losing text selection), only set value if changed
if(newValue!==node.value){node.value=newValue;}if(props.defaultValue==null){node.defaultValue=newValue;}}if(props.defaultValue!=null){node.defaultValue=props.defaultValue;}},postMountWrapper:function postMountWrapper(inst){// This is in postMount because we need access to the DOM node, which is not
// available until after the component has mounted.
var node=ReactDOMComponentTree.getNodeFromInstance(inst);// Warning: node.value may be the empty string at this point (IE11) if placeholder is set.
node.value=node.textContent;// Detach value from defaultValue
}};function _handleChange(event){var props=this._currentElement.props;var returnValue=LinkedValueUtils.executeOnChange(props,event);ReactUpdates.asap(forceUpdateIfMounted,this);return returnValue;}module.exports=ReactDOMTextarea;}).call(this,require('_process'));},{"./DisabledInputUtils":92,"./LinkedValueUtils":102,"./ReactDOMComponentTree":120,"./ReactUpdates":173,"./reactProdInvariant":217,"_process":3,"fbjs/lib/invariant":59,"fbjs/lib/warning":68,"object-assign":344}],133:[function(require,module,exports){(function(process){/**
 * Copyright 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactDOMTreeTraversal
 */'use strict';var _prodInvariant=require('./reactProdInvariant');var invariant=require('fbjs/lib/invariant');/**
 * Return the lowest common ancestor of A and B, or null if they are in
 * different trees.
 */function getLowestCommonAncestor(instA,instB){!('_hostNode'in instA)?process.env.NODE_ENV!=='production'?invariant(false,'getNodeFromInstance: Invalid argument.'):_prodInvariant('33'):void 0;!('_hostNode'in instB)?process.env.NODE_ENV!=='production'?invariant(false,'getNodeFromInstance: Invalid argument.'):_prodInvariant('33'):void 0;var depthA=0;for(var tempA=instA;tempA;tempA=tempA._hostParent){depthA++;}var depthB=0;for(var tempB=instB;tempB;tempB=tempB._hostParent){depthB++;}// If A is deeper, crawl up.
while(depthA-depthB>0){instA=instA._hostParent;depthA--;}// If B is deeper, crawl up.
while(depthB-depthA>0){instB=instB._hostParent;depthB--;}// Walk in lockstep until we find a match.
var depth=depthA;while(depth--){if(instA===instB){return instA;}instA=instA._hostParent;instB=instB._hostParent;}return null;}/**
 * Return if A is an ancestor of B.
 */function isAncestor(instA,instB){!('_hostNode'in instA)?process.env.NODE_ENV!=='production'?invariant(false,'isAncestor: Invalid argument.'):_prodInvariant('35'):void 0;!('_hostNode'in instB)?process.env.NODE_ENV!=='production'?invariant(false,'isAncestor: Invalid argument.'):_prodInvariant('35'):void 0;while(instB){if(instB===instA){return true;}instB=instB._hostParent;}return false;}/**
 * Return the parent instance of the passed-in instance.
 */function getParentInstance(inst){!('_hostNode'in inst)?process.env.NODE_ENV!=='production'?invariant(false,'getParentInstance: Invalid argument.'):_prodInvariant('36'):void 0;return inst._hostParent;}/**
 * Simulates the traversal of a two-phase, capture/bubble event dispatch.
 */function traverseTwoPhase(inst,fn,arg){var path=[];while(inst){path.push(inst);inst=inst._hostParent;}var i;for(i=path.length;i-->0;){fn(path[i],false,arg);}for(i=0;i<path.length;i++){fn(path[i],true,arg);}}/**
 * Traverses the ID hierarchy and invokes the supplied `cb` on any IDs that
 * should would receive a `mouseEnter` or `mouseLeave` event.
 *
 * Does not invoke the callback on the nearest common ancestor because nothing
 * "entered" or "left" that element.
 */function traverseEnterLeave(from,to,fn,argFrom,argTo){var common=from&&to?getLowestCommonAncestor(from,to):null;var pathFrom=[];while(from&&from!==common){pathFrom.push(from);from=from._hostParent;}var pathTo=[];while(to&&to!==common){pathTo.push(to);to=to._hostParent;}var i;for(i=0;i<pathFrom.length;i++){fn(pathFrom[i],true,argFrom);}for(i=pathTo.length;i-->0;){fn(pathTo[i],false,argTo);}}module.exports={isAncestor:isAncestor,getLowestCommonAncestor:getLowestCommonAncestor,getParentInstance:getParentInstance,traverseTwoPhase:traverseTwoPhase,traverseEnterLeave:traverseEnterLeave};}).call(this,require('_process'));},{"./reactProdInvariant":217,"_process":3,"fbjs/lib/invariant":59}],134:[function(require,module,exports){(function(process){/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactDOMUnknownPropertyHook
 */'use strict';var DOMProperty=require('./DOMProperty');var EventPluginRegistry=require('./EventPluginRegistry');var ReactComponentTreeHook=require('./ReactComponentTreeHook');var warning=require('fbjs/lib/warning');if(process.env.NODE_ENV!=='production'){var reactProps={children:true,dangerouslySetInnerHTML:true,key:true,ref:true,autoFocus:true,defaultValue:true,valueLink:true,defaultChecked:true,checkedLink:true,innerHTML:true,suppressContentEditableWarning:true,onFocusIn:true,onFocusOut:true};var warnedProperties={};var validateProperty=function validateProperty(tagName,name,debugID){if(DOMProperty.properties.hasOwnProperty(name)||DOMProperty.isCustomAttribute(name)){return true;}if(reactProps.hasOwnProperty(name)&&reactProps[name]||warnedProperties.hasOwnProperty(name)&&warnedProperties[name]){return true;}if(EventPluginRegistry.registrationNameModules.hasOwnProperty(name)){return true;}warnedProperties[name]=true;var lowerCasedName=name.toLowerCase();// data-* attributes should be lowercase; suggest the lowercase version
var standardName=DOMProperty.isCustomAttribute(lowerCasedName)?lowerCasedName:DOMProperty.getPossibleStandardName.hasOwnProperty(lowerCasedName)?DOMProperty.getPossibleStandardName[lowerCasedName]:null;var registrationName=EventPluginRegistry.possibleRegistrationNames.hasOwnProperty(lowerCasedName)?EventPluginRegistry.possibleRegistrationNames[lowerCasedName]:null;if(standardName!=null){process.env.NODE_ENV!=='production'?warning(false,'Unknown DOM property %s. Did you mean %s?%s',name,standardName,ReactComponentTreeHook.getStackAddendumByID(debugID)):void 0;return true;}else if(registrationName!=null){process.env.NODE_ENV!=='production'?warning(false,'Unknown event handler property %s. Did you mean `%s`?%s',name,registrationName,ReactComponentTreeHook.getStackAddendumByID(debugID)):void 0;return true;}else{// We were unable to guess which prop the user intended.
// It is likely that the user was just blindly spreading/forwarding props
// Components should be careful to only render valid props/attributes.
// Warning will be invoked in warnUnknownProperties to allow grouping.
return false;}};}var warnUnknownProperties=function warnUnknownProperties(debugID,element){var unknownProps=[];for(var key in element.props){var isValid=validateProperty(element.type,key,debugID);if(!isValid){unknownProps.push(key);}}var unknownPropString=unknownProps.map(function(prop){return'`'+prop+'`';}).join(', ');if(unknownProps.length===1){process.env.NODE_ENV!=='production'?warning(false,'Unknown prop %s on <%s> tag. Remove this prop from the element. '+'For details, see https://fb.me/react-unknown-prop%s',unknownPropString,element.type,ReactComponentTreeHook.getStackAddendumByID(debugID)):void 0;}else if(unknownProps.length>1){process.env.NODE_ENV!=='production'?warning(false,'Unknown props %s on <%s> tag. Remove these props from the element. '+'For details, see https://fb.me/react-unknown-prop%s',unknownPropString,element.type,ReactComponentTreeHook.getStackAddendumByID(debugID)):void 0;}};function handleElement(debugID,element){if(element==null||typeof element.type!=='string'){return;}if(element.type.indexOf('-')>=0||element.props.is){return;}warnUnknownProperties(debugID,element);}var ReactDOMUnknownPropertyHook={onBeforeMountComponent:function onBeforeMountComponent(debugID,element){handleElement(debugID,element);},onBeforeUpdateComponent:function onBeforeUpdateComponent(debugID,element){handleElement(debugID,element);}};module.exports=ReactDOMUnknownPropertyHook;}).call(this,require('_process'));},{"./DOMProperty":88,"./EventPluginRegistry":96,"./ReactComponentTreeHook":113,"_process":3,"fbjs/lib/warning":68}],135:[function(require,module,exports){(function(process){/**
 * Copyright 2016-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactDebugTool
 */'use strict';var ReactInvalidSetStateWarningHook=require('./ReactInvalidSetStateWarningHook');var ReactHostOperationHistoryHook=require('./ReactHostOperationHistoryHook');var ReactComponentTreeHook=require('./ReactComponentTreeHook');var ReactChildrenMutationWarningHook=require('./ReactChildrenMutationWarningHook');var ExecutionEnvironment=require('fbjs/lib/ExecutionEnvironment');var performanceNow=require('fbjs/lib/performanceNow');var warning=require('fbjs/lib/warning');var hooks=[];var didHookThrowForEvent={};function callHook(event,fn,context,arg1,arg2,arg3,arg4,arg5){try{fn.call(context,arg1,arg2,arg3,arg4,arg5);}catch(e){process.env.NODE_ENV!=='production'?warning(didHookThrowForEvent[event],'Exception thrown by hook while handling %s: %s',event,e+'\n'+e.stack):void 0;didHookThrowForEvent[event]=true;}}function emitEvent(event,arg1,arg2,arg3,arg4,arg5){for(var i=0;i<hooks.length;i++){var hook=hooks[i];var fn=hook[event];if(fn){callHook(event,fn,hook,arg1,arg2,arg3,arg4,arg5);}}}var _isProfiling=false;var flushHistory=[];var lifeCycleTimerStack=[];var currentFlushNesting=0;var currentFlushMeasurements=null;var currentFlushStartTime=null;var currentTimerDebugID=null;var currentTimerStartTime=null;var currentTimerNestedFlushDuration=null;var currentTimerType=null;var lifeCycleTimerHasWarned=false;function clearHistory(){ReactComponentTreeHook.purgeUnmountedComponents();ReactHostOperationHistoryHook.clearHistory();}function getTreeSnapshot(registeredIDs){return registeredIDs.reduce(function(tree,id){var ownerID=ReactComponentTreeHook.getOwnerID(id);var parentID=ReactComponentTreeHook.getParentID(id);tree[id]={displayName:ReactComponentTreeHook.getDisplayName(id),text:ReactComponentTreeHook.getText(id),updateCount:ReactComponentTreeHook.getUpdateCount(id),childIDs:ReactComponentTreeHook.getChildIDs(id),// Text nodes don't have owners but this is close enough.
ownerID:ownerID||ReactComponentTreeHook.getOwnerID(parentID),parentID:parentID};return tree;},{});}function resetMeasurements(){var previousStartTime=currentFlushStartTime;var previousMeasurements=currentFlushMeasurements||[];var previousOperations=ReactHostOperationHistoryHook.getHistory();if(currentFlushNesting===0){currentFlushStartTime=null;currentFlushMeasurements=null;clearHistory();return;}if(previousMeasurements.length||previousOperations.length){var registeredIDs=ReactComponentTreeHook.getRegisteredIDs();flushHistory.push({duration:performanceNow()-previousStartTime,measurements:previousMeasurements||[],operations:previousOperations||[],treeSnapshot:getTreeSnapshot(registeredIDs)});}clearHistory();currentFlushStartTime=performanceNow();currentFlushMeasurements=[];}function checkDebugID(debugID){var allowRoot=arguments.length<=1||arguments[1]===undefined?false:arguments[1];if(allowRoot&&debugID===0){return;}if(!debugID){process.env.NODE_ENV!=='production'?warning(false,'ReactDebugTool: debugID may not be empty.'):void 0;}}function beginLifeCycleTimer(debugID,timerType){if(currentFlushNesting===0){return;}if(currentTimerType&&!lifeCycleTimerHasWarned){process.env.NODE_ENV!=='production'?warning(false,'There is an internal error in the React performance measurement code. '+'Did not expect %s timer to start while %s timer is still in '+'progress for %s instance.',timerType,currentTimerType||'no',debugID===currentTimerDebugID?'the same':'another'):void 0;lifeCycleTimerHasWarned=true;}currentTimerStartTime=performanceNow();currentTimerNestedFlushDuration=0;currentTimerDebugID=debugID;currentTimerType=timerType;}function endLifeCycleTimer(debugID,timerType){if(currentFlushNesting===0){return;}if(currentTimerType!==timerType&&!lifeCycleTimerHasWarned){process.env.NODE_ENV!=='production'?warning(false,'There is an internal error in the React performance measurement code. '+'We did not expect %s timer to stop while %s timer is still in '+'progress for %s instance. Please report this as a bug in React.',timerType,currentTimerType||'no',debugID===currentTimerDebugID?'the same':'another'):void 0;lifeCycleTimerHasWarned=true;}if(_isProfiling){currentFlushMeasurements.push({timerType:timerType,instanceID:debugID,duration:performanceNow()-currentTimerStartTime-currentTimerNestedFlushDuration});}currentTimerStartTime=null;currentTimerNestedFlushDuration=null;currentTimerDebugID=null;currentTimerType=null;}function pauseCurrentLifeCycleTimer(){var currentTimer={startTime:currentTimerStartTime,nestedFlushStartTime:performanceNow(),debugID:currentTimerDebugID,timerType:currentTimerType};lifeCycleTimerStack.push(currentTimer);currentTimerStartTime=null;currentTimerNestedFlushDuration=null;currentTimerDebugID=null;currentTimerType=null;}function resumeCurrentLifeCycleTimer(){var _lifeCycleTimerStack$=lifeCycleTimerStack.pop();var startTime=_lifeCycleTimerStack$.startTime;var nestedFlushStartTime=_lifeCycleTimerStack$.nestedFlushStartTime;var debugID=_lifeCycleTimerStack$.debugID;var timerType=_lifeCycleTimerStack$.timerType;var nestedFlushDuration=performanceNow()-nestedFlushStartTime;currentTimerStartTime=startTime;currentTimerNestedFlushDuration+=nestedFlushDuration;currentTimerDebugID=debugID;currentTimerType=timerType;}var ReactDebugTool={addHook:function addHook(hook){hooks.push(hook);},removeHook:function removeHook(hook){for(var i=0;i<hooks.length;i++){if(hooks[i]===hook){hooks.splice(i,1);i--;}}},isProfiling:function isProfiling(){return _isProfiling;},beginProfiling:function beginProfiling(){if(_isProfiling){return;}_isProfiling=true;flushHistory.length=0;resetMeasurements();ReactDebugTool.addHook(ReactHostOperationHistoryHook);},endProfiling:function endProfiling(){if(!_isProfiling){return;}_isProfiling=false;resetMeasurements();ReactDebugTool.removeHook(ReactHostOperationHistoryHook);},getFlushHistory:function getFlushHistory(){return flushHistory;},onBeginFlush:function onBeginFlush(){currentFlushNesting++;resetMeasurements();pauseCurrentLifeCycleTimer();emitEvent('onBeginFlush');},onEndFlush:function onEndFlush(){resetMeasurements();currentFlushNesting--;resumeCurrentLifeCycleTimer();emitEvent('onEndFlush');},onBeginLifeCycleTimer:function onBeginLifeCycleTimer(debugID,timerType){checkDebugID(debugID);emitEvent('onBeginLifeCycleTimer',debugID,timerType);beginLifeCycleTimer(debugID,timerType);},onEndLifeCycleTimer:function onEndLifeCycleTimer(debugID,timerType){checkDebugID(debugID);endLifeCycleTimer(debugID,timerType);emitEvent('onEndLifeCycleTimer',debugID,timerType);},onBeginProcessingChildContext:function onBeginProcessingChildContext(){emitEvent('onBeginProcessingChildContext');},onEndProcessingChildContext:function onEndProcessingChildContext(){emitEvent('onEndProcessingChildContext');},onHostOperation:function onHostOperation(debugID,type,payload){checkDebugID(debugID);emitEvent('onHostOperation',debugID,type,payload);},onSetState:function onSetState(){emitEvent('onSetState');},onSetChildren:function onSetChildren(debugID,childDebugIDs){checkDebugID(debugID);childDebugIDs.forEach(checkDebugID);emitEvent('onSetChildren',debugID,childDebugIDs);},onBeforeMountComponent:function onBeforeMountComponent(debugID,element,parentDebugID){checkDebugID(debugID);checkDebugID(parentDebugID,true);emitEvent('onBeforeMountComponent',debugID,element,parentDebugID);},onMountComponent:function onMountComponent(debugID){checkDebugID(debugID);emitEvent('onMountComponent',debugID);},onBeforeUpdateComponent:function onBeforeUpdateComponent(debugID,element){checkDebugID(debugID);emitEvent('onBeforeUpdateComponent',debugID,element);},onUpdateComponent:function onUpdateComponent(debugID){checkDebugID(debugID);emitEvent('onUpdateComponent',debugID);},onBeforeUnmountComponent:function onBeforeUnmountComponent(debugID){checkDebugID(debugID);emitEvent('onBeforeUnmountComponent',debugID);},onUnmountComponent:function onUnmountComponent(debugID){checkDebugID(debugID);emitEvent('onUnmountComponent',debugID);},onTestEvent:function onTestEvent(){emitEvent('onTestEvent');}};// TODO remove these when RN/www gets updated
ReactDebugTool.addDevtool=ReactDebugTool.addHook;ReactDebugTool.removeDevtool=ReactDebugTool.removeHook;ReactDebugTool.addHook(ReactInvalidSetStateWarningHook);ReactDebugTool.addHook(ReactComponentTreeHook);ReactDebugTool.addHook(ReactChildrenMutationWarningHook);var url=ExecutionEnvironment.canUseDOM&&window.location.href||'';if(/[?&]react_perf\b/.test(url)){ReactDebugTool.beginProfiling();}module.exports=ReactDebugTool;}).call(this,require('_process'));},{"./ReactChildrenMutationWarningHook":108,"./ReactComponentTreeHook":113,"./ReactHostOperationHistoryHook":147,"./ReactInvalidSetStateWarningHook":152,"_process":3,"fbjs/lib/ExecutionEnvironment":45,"fbjs/lib/performanceNow":66,"fbjs/lib/warning":68}],136:[function(require,module,exports){/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactDefaultBatchingStrategy
 */'use strict';var _assign=require('object-assign');var ReactUpdates=require('./ReactUpdates');var Transaction=require('./Transaction');var emptyFunction=require('fbjs/lib/emptyFunction');var RESET_BATCHED_UPDATES={initialize:emptyFunction,close:function close(){ReactDefaultBatchingStrategy.isBatchingUpdates=false;}};var FLUSH_BATCHED_UPDATES={initialize:emptyFunction,close:ReactUpdates.flushBatchedUpdates.bind(ReactUpdates)};var TRANSACTION_WRAPPERS=[FLUSH_BATCHED_UPDATES,RESET_BATCHED_UPDATES];function ReactDefaultBatchingStrategyTransaction(){this.reinitializeTransaction();}_assign(ReactDefaultBatchingStrategyTransaction.prototype,Transaction.Mixin,{getTransactionWrappers:function getTransactionWrappers(){return TRANSACTION_WRAPPERS;}});var transaction=new ReactDefaultBatchingStrategyTransaction();var ReactDefaultBatchingStrategy={isBatchingUpdates:false,/**
   * Call the provided function in a context within which calls to `setState`
   * and friends are batched such that components aren't updated unnecessarily.
   */batchedUpdates:function batchedUpdates(callback,a,b,c,d,e){var alreadyBatchingUpdates=ReactDefaultBatchingStrategy.isBatchingUpdates;ReactDefaultBatchingStrategy.isBatchingUpdates=true;// The code is written this way to avoid extra allocations
if(alreadyBatchingUpdates){callback(a,b,c,d,e);}else{transaction.perform(callback,null,a,b,c,d,e);}}};module.exports=ReactDefaultBatchingStrategy;},{"./ReactUpdates":173,"./Transaction":191,"fbjs/lib/emptyFunction":51,"object-assign":344}],137:[function(require,module,exports){/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactDefaultInjection
 */'use strict';var BeforeInputEventPlugin=require('./BeforeInputEventPlugin');var ChangeEventPlugin=require('./ChangeEventPlugin');var DefaultEventPluginOrder=require('./DefaultEventPluginOrder');var EnterLeaveEventPlugin=require('./EnterLeaveEventPlugin');var HTMLDOMPropertyConfig=require('./HTMLDOMPropertyConfig');var ReactComponentBrowserEnvironment=require('./ReactComponentBrowserEnvironment');var ReactDOMComponent=require('./ReactDOMComponent');var ReactDOMComponentTree=require('./ReactDOMComponentTree');var ReactDOMEmptyComponent=require('./ReactDOMEmptyComponent');var ReactDOMTreeTraversal=require('./ReactDOMTreeTraversal');var ReactDOMTextComponent=require('./ReactDOMTextComponent');var ReactDefaultBatchingStrategy=require('./ReactDefaultBatchingStrategy');var ReactEventListener=require('./ReactEventListener');var ReactInjection=require('./ReactInjection');var ReactReconcileTransaction=require('./ReactReconcileTransaction');var SVGDOMPropertyConfig=require('./SVGDOMPropertyConfig');var SelectEventPlugin=require('./SelectEventPlugin');var SimpleEventPlugin=require('./SimpleEventPlugin');var alreadyInjected=false;function inject(){if(alreadyInjected){// TODO: This is currently true because these injections are shared between
// the client and the server package. They should be built independently
// and not share any injection state. Then this problem will be solved.
return;}alreadyInjected=true;ReactInjection.EventEmitter.injectReactEventListener(ReactEventListener);/**
   * Inject modules for resolving DOM hierarchy and plugin ordering.
   */ReactInjection.EventPluginHub.injectEventPluginOrder(DefaultEventPluginOrder);ReactInjection.EventPluginUtils.injectComponentTree(ReactDOMComponentTree);ReactInjection.EventPluginUtils.injectTreeTraversal(ReactDOMTreeTraversal);/**
   * Some important event plugins included by default (without having to require
   * them).
   */ReactInjection.EventPluginHub.injectEventPluginsByName({SimpleEventPlugin:SimpleEventPlugin,EnterLeaveEventPlugin:EnterLeaveEventPlugin,ChangeEventPlugin:ChangeEventPlugin,SelectEventPlugin:SelectEventPlugin,BeforeInputEventPlugin:BeforeInputEventPlugin});ReactInjection.HostComponent.injectGenericComponentClass(ReactDOMComponent);ReactInjection.HostComponent.injectTextComponentClass(ReactDOMTextComponent);ReactInjection.DOMProperty.injectDOMPropertyConfig(HTMLDOMPropertyConfig);ReactInjection.DOMProperty.injectDOMPropertyConfig(SVGDOMPropertyConfig);ReactInjection.EmptyComponent.injectEmptyComponentFactory(function(instantiate){return new ReactDOMEmptyComponent(instantiate);});ReactInjection.Updates.injectReconcileTransaction(ReactReconcileTransaction);ReactInjection.Updates.injectBatchingStrategy(ReactDefaultBatchingStrategy);ReactInjection.Component.injectEnvironment(ReactComponentBrowserEnvironment);}module.exports={inject:inject};},{"./BeforeInputEventPlugin":80,"./ChangeEventPlugin":84,"./DefaultEventPluginOrder":91,"./EnterLeaveEventPlugin":93,"./HTMLDOMPropertyConfig":100,"./ReactComponentBrowserEnvironment":111,"./ReactDOMComponent":118,"./ReactDOMComponentTree":120,"./ReactDOMEmptyComponent":122,"./ReactDOMTextComponent":131,"./ReactDOMTreeTraversal":133,"./ReactDefaultBatchingStrategy":136,"./ReactEventListener":143,"./ReactInjection":148,"./ReactReconcileTransaction":165,"./SVGDOMPropertyConfig":175,"./SelectEventPlugin":176,"./SimpleEventPlugin":177}],138:[function(require,module,exports){(function(process){/**
 * Copyright 2014-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactElement
 */'use strict';var _assign=require('object-assign');var ReactCurrentOwner=require('./ReactCurrentOwner');var warning=require('fbjs/lib/warning');var canDefineProperty=require('./canDefineProperty');var hasOwnProperty=Object.prototype.hasOwnProperty;// The Symbol used to tag the ReactElement type. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var REACT_ELEMENT_TYPE=typeof Symbol==='function'&&Symbol['for']&&Symbol['for']('react.element')||0xeac7;var RESERVED_PROPS={key:true,ref:true,__self:true,__source:true};var specialPropKeyWarningShown,specialPropRefWarningShown;function hasValidRef(config){if(process.env.NODE_ENV!=='production'){if(hasOwnProperty.call(config,'ref')){var getter=Object.getOwnPropertyDescriptor(config,'ref').get;if(getter&&getter.isReactWarning){return false;}}}return config.ref!==undefined;}function hasValidKey(config){if(process.env.NODE_ENV!=='production'){if(hasOwnProperty.call(config,'key')){var getter=Object.getOwnPropertyDescriptor(config,'key').get;if(getter&&getter.isReactWarning){return false;}}}return config.key!==undefined;}function defineKeyPropWarningGetter(props,displayName){var warnAboutAccessingKey=function warnAboutAccessingKey(){if(!specialPropKeyWarningShown){specialPropKeyWarningShown=true;process.env.NODE_ENV!=='production'?warning(false,'%s: `key` is not a prop. Trying to access it will result '+'in `undefined` being returned. If you need to access the same '+'value within the child component, you should pass it as a different '+'prop. (https://fb.me/react-special-props)',displayName):void 0;}};warnAboutAccessingKey.isReactWarning=true;Object.defineProperty(props,'key',{get:warnAboutAccessingKey,configurable:true});}function defineRefPropWarningGetter(props,displayName){var warnAboutAccessingRef=function warnAboutAccessingRef(){if(!specialPropRefWarningShown){specialPropRefWarningShown=true;process.env.NODE_ENV!=='production'?warning(false,'%s: `ref` is not a prop. Trying to access it will result '+'in `undefined` being returned. If you need to access the same '+'value within the child component, you should pass it as a different '+'prop. (https://fb.me/react-special-props)',displayName):void 0;}};warnAboutAccessingRef.isReactWarning=true;Object.defineProperty(props,'ref',{get:warnAboutAccessingRef,configurable:true});}/**
 * Factory method to create a new React element. This no longer adheres to
 * the class pattern, so do not use new to call it. Also, no instanceof check
 * will work. Instead test $$typeof field against Symbol.for('react.element') to check
 * if something is a React Element.
 *
 * @param {*} type
 * @param {*} key
 * @param {string|object} ref
 * @param {*} self A *temporary* helper to detect places where `this` is
 * different from the `owner` when React.createElement is called, so that we
 * can warn. We want to get rid of owner and replace string `ref`s with arrow
 * functions, and as long as `this` and owner are the same, there will be no
 * change in behavior.
 * @param {*} source An annotation object (added by a transpiler or otherwise)
 * indicating filename, line number, and/or other information.
 * @param {*} owner
 * @param {*} props
 * @internal
 */var ReactElement=function ReactElement(type,key,ref,self,source,owner,props){var element={// This tag allow us to uniquely identify this as a React Element
$$typeof:REACT_ELEMENT_TYPE,// Built-in properties that belong on the element
type:type,key:key,ref:ref,props:props,// Record the component responsible for creating this element.
_owner:owner};if(process.env.NODE_ENV!=='production'){// The validation flag is currently mutative. We put it on
// an external backing store so that we can freeze the whole object.
// This can be replaced with a WeakMap once they are implemented in
// commonly used development environments.
element._store={};var shadowChildren=Array.isArray(props.children)?props.children.slice(0):props.children;// To make comparing ReactElements easier for testing purposes, we make
// the validation flag non-enumerable (where possible, which should
// include every environment we run tests in), so the test framework
// ignores it.
if(canDefineProperty){Object.defineProperty(element._store,'validated',{configurable:false,enumerable:false,writable:true,value:false});// self and source are DEV only properties.
Object.defineProperty(element,'_self',{configurable:false,enumerable:false,writable:false,value:self});Object.defineProperty(element,'_shadowChildren',{configurable:false,enumerable:false,writable:false,value:shadowChildren});// Two elements created in two different places should be considered
// equal for testing purposes and therefore we hide it from enumeration.
Object.defineProperty(element,'_source',{configurable:false,enumerable:false,writable:false,value:source});}else{element._store.validated=false;element._self=self;element._shadowChildren=shadowChildren;element._source=source;}if(Object.freeze){Object.freeze(element.props);Object.freeze(element);}}return element;};/**
 * Create and return a new ReactElement of the given type.
 * See https://facebook.github.io/react/docs/top-level-api.html#react.createelement
 */ReactElement.createElement=function(type,config,children){var propName;// Reserved names are extracted
var props={};var key=null;var ref=null;var self=null;var source=null;if(config!=null){if(hasValidRef(config)){ref=config.ref;}if(hasValidKey(config)){key=''+config.key;}self=config.__self===undefined?null:config.__self;source=config.__source===undefined?null:config.__source;// Remaining properties are added to a new props object
for(propName in config){if(hasOwnProperty.call(config,propName)&&!RESERVED_PROPS.hasOwnProperty(propName)){props[propName]=config[propName];}}}// Children can be more than one argument, and those are transferred onto
// the newly allocated props object.
var childrenLength=arguments.length-2;if(childrenLength===1){props.children=children;}else if(childrenLength>1){var childArray=Array(childrenLength);for(var i=0;i<childrenLength;i++){childArray[i]=arguments[i+2];}props.children=childArray;}// Resolve default props
if(type&&type.defaultProps){var defaultProps=type.defaultProps;for(propName in defaultProps){if(props[propName]===undefined){props[propName]=defaultProps[propName];}}}if(process.env.NODE_ENV!=='production'){if(key||ref){if(typeof props.$$typeof==='undefined'||props.$$typeof!==REACT_ELEMENT_TYPE){var displayName=typeof type==='function'?type.displayName||type.name||'Unknown':type;if(key){defineKeyPropWarningGetter(props,displayName);}if(ref){defineRefPropWarningGetter(props,displayName);}}}}return ReactElement(type,key,ref,self,source,ReactCurrentOwner.current,props);};/**
 * Return a function that produces ReactElements of a given type.
 * See https://facebook.github.io/react/docs/top-level-api.html#react.createfactory
 */ReactElement.createFactory=function(type){var factory=ReactElement.createElement.bind(null,type);// Expose the type on the factory and the prototype so that it can be
// easily accessed on elements. E.g. `<Foo />.type === Foo`.
// This should not be named `constructor` since this may not be the function
// that created the element, and it may not even be a constructor.
// Legacy hook TODO: Warn if this is accessed
factory.type=type;return factory;};ReactElement.cloneAndReplaceKey=function(oldElement,newKey){var newElement=ReactElement(oldElement.type,newKey,oldElement.ref,oldElement._self,oldElement._source,oldElement._owner,oldElement.props);return newElement;};/**
 * Clone and return a new ReactElement using element as the starting point.
 * See https://facebook.github.io/react/docs/top-level-api.html#react.cloneelement
 */ReactElement.cloneElement=function(element,config,children){var propName;// Original props are copied
var props=_assign({},element.props);// Reserved names are extracted
var key=element.key;var ref=element.ref;// Self is preserved since the owner is preserved.
var self=element._self;// Source is preserved since cloneElement is unlikely to be targeted by a
// transpiler, and the original source is probably a better indicator of the
// true owner.
var source=element._source;// Owner will be preserved, unless ref is overridden
var owner=element._owner;if(config!=null){if(hasValidRef(config)){// Silently steal the ref from the parent.
ref=config.ref;owner=ReactCurrentOwner.current;}if(hasValidKey(config)){key=''+config.key;}// Remaining properties override existing props
var defaultProps;if(element.type&&element.type.defaultProps){defaultProps=element.type.defaultProps;}for(propName in config){if(hasOwnProperty.call(config,propName)&&!RESERVED_PROPS.hasOwnProperty(propName)){if(config[propName]===undefined&&defaultProps!==undefined){// Resolve default props
props[propName]=defaultProps[propName];}else{props[propName]=config[propName];}}}}// Children can be more than one argument, and those are transferred onto
// the newly allocated props object.
var childrenLength=arguments.length-2;if(childrenLength===1){props.children=children;}else if(childrenLength>1){var childArray=Array(childrenLength);for(var i=0;i<childrenLength;i++){childArray[i]=arguments[i+2];}props.children=childArray;}return ReactElement(element.type,key,ref,self,source,owner,props);};/**
 * Verifies the object is a ReactElement.
 * See https://facebook.github.io/react/docs/top-level-api.html#react.isvalidelement
 * @param {?object} object
 * @return {boolean} True if `object` is a valid component.
 * @final
 */ReactElement.isValidElement=function(object){return(typeof object==="undefined"?"undefined":_typeof4(object))==='object'&&object!==null&&object.$$typeof===REACT_ELEMENT_TYPE;};ReactElement.REACT_ELEMENT_TYPE=REACT_ELEMENT_TYPE;module.exports=ReactElement;}).call(this,require('_process'));},{"./ReactCurrentOwner":115,"./canDefineProperty":195,"_process":3,"fbjs/lib/warning":68,"object-assign":344}],139:[function(require,module,exports){(function(process){/**
 * Copyright 2014-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactElementValidator
 *//**
 * ReactElementValidator provides a wrapper around a element factory
 * which validates the props passed to the element. This is intended to be
 * used only in DEV and could be replaced by a static type checker for languages
 * that support it.
 */'use strict';var ReactCurrentOwner=require('./ReactCurrentOwner');var ReactComponentTreeHook=require('./ReactComponentTreeHook');var ReactElement=require('./ReactElement');var ReactPropTypeLocations=require('./ReactPropTypeLocations');var checkReactTypeSpec=require('./checkReactTypeSpec');var canDefineProperty=require('./canDefineProperty');var getIteratorFn=require('./getIteratorFn');var warning=require('fbjs/lib/warning');function getDeclarationErrorAddendum(){if(ReactCurrentOwner.current){var name=ReactCurrentOwner.current.getName();if(name){return' Check the render method of `'+name+'`.';}}return'';}/**
 * Warn if there's no key explicitly set on dynamic arrays of children or
 * object keys are not valid. This allows us to keep track of children between
 * updates.
 */var ownerHasKeyUseWarning={};function getCurrentComponentErrorInfo(parentType){var info=getDeclarationErrorAddendum();if(!info){var parentName=typeof parentType==='string'?parentType:parentType.displayName||parentType.name;if(parentName){info=' Check the top-level render call using <'+parentName+'>.';}}return info;}/**
 * Warn if the element doesn't have an explicit key assigned to it.
 * This element is in an array. The array could grow and shrink or be
 * reordered. All children that haven't already been validated are required to
 * have a "key" property assigned to it. Error statuses are cached so a warning
 * will only be shown once.
 *
 * @internal
 * @param {ReactElement} element Element that requires a key.
 * @param {*} parentType element's parent's type.
 */function validateExplicitKey(element,parentType){if(!element._store||element._store.validated||element.key!=null){return;}element._store.validated=true;var memoizer=ownerHasKeyUseWarning.uniqueKey||(ownerHasKeyUseWarning.uniqueKey={});var currentComponentErrorInfo=getCurrentComponentErrorInfo(parentType);if(memoizer[currentComponentErrorInfo]){return;}memoizer[currentComponentErrorInfo]=true;// Usually the current owner is the offender, but if it accepts children as a
// property, it may be the creator of the child that's responsible for
// assigning it a key.
var childOwner='';if(element&&element._owner&&element._owner!==ReactCurrentOwner.current){// Give the component that originally created this child.
childOwner=' It was passed a child from '+element._owner.getName()+'.';}process.env.NODE_ENV!=='production'?warning(false,'Each child in an array or iterator should have a unique "key" prop.'+'%s%s See https://fb.me/react-warning-keys for more information.%s',currentComponentErrorInfo,childOwner,ReactComponentTreeHook.getCurrentStackAddendum(element)):void 0;}/**
 * Ensure that every element either is passed in a static location, in an
 * array with an explicit keys property defined, or in an object literal
 * with valid key property.
 *
 * @internal
 * @param {ReactNode} node Statically passed child of any type.
 * @param {*} parentType node's parent's type.
 */function validateChildKeys(node,parentType){if((typeof node==="undefined"?"undefined":_typeof4(node))!=='object'){return;}if(Array.isArray(node)){for(var i=0;i<node.length;i++){var child=node[i];if(ReactElement.isValidElement(child)){validateExplicitKey(child,parentType);}}}else if(ReactElement.isValidElement(node)){// This element was passed in a valid location.
if(node._store){node._store.validated=true;}}else if(node){var iteratorFn=getIteratorFn(node);// Entry iterators provide implicit keys.
if(iteratorFn){if(iteratorFn!==node.entries){var iterator=iteratorFn.call(node);var step;while(!(step=iterator.next()).done){if(ReactElement.isValidElement(step.value)){validateExplicitKey(step.value,parentType);}}}}}}/**
 * Given an element, validate that its props follow the propTypes definition,
 * provided by the type.
 *
 * @param {ReactElement} element
 */function validatePropTypes(element){var componentClass=element.type;if(typeof componentClass!=='function'){return;}var name=componentClass.displayName||componentClass.name;if(componentClass.propTypes){checkReactTypeSpec(componentClass.propTypes,element.props,ReactPropTypeLocations.prop,name,element,null);}if(typeof componentClass.getDefaultProps==='function'){process.env.NODE_ENV!=='production'?warning(componentClass.getDefaultProps.isReactClassApproved,'getDefaultProps is only used on classic React.createClass '+'definitions. Use a static property named `defaultProps` instead.'):void 0;}}var ReactElementValidator={createElement:function createElement(type,props,children){var validType=typeof type==='string'||typeof type==='function';// We warn in this case but don't throw. We expect the element creation to
// succeed and there will likely be errors in render.
if(!validType){process.env.NODE_ENV!=='production'?warning(false,'React.createElement: type should not be null, undefined, boolean, or '+'number. It should be a string (for DOM elements) or a ReactClass '+'(for composite components).%s',getDeclarationErrorAddendum()):void 0;}var element=ReactElement.createElement.apply(this,arguments);// The result can be nullish if a mock or a custom function is used.
// TODO: Drop this when these are no longer allowed as the type argument.
if(element==null){return element;}// Skip key warning if the type isn't valid since our key validation logic
// doesn't expect a non-string/function type and can throw confusing errors.
// We don't want exception behavior to differ between dev and prod.
// (Rendering will throw with a helpful message and as soon as the type is
// fixed, the key warnings will appear.)
if(validType){for(var i=2;i<arguments.length;i++){validateChildKeys(arguments[i],type);}}validatePropTypes(element);return element;},createFactory:function createFactory(type){var validatedFactory=ReactElementValidator.createElement.bind(null,type);// Legacy hook TODO: Warn if this is accessed
validatedFactory.type=type;if(process.env.NODE_ENV!=='production'){if(canDefineProperty){Object.defineProperty(validatedFactory,'type',{enumerable:false,get:function get(){process.env.NODE_ENV!=='production'?warning(false,'Factory.type is deprecated. Access the class directly '+'before passing it to createFactory.'):void 0;Object.defineProperty(this,'type',{value:type});return type;}});}}return validatedFactory;},cloneElement:function cloneElement(element,props,children){var newElement=ReactElement.cloneElement.apply(this,arguments);for(var i=2;i<arguments.length;i++){validateChildKeys(arguments[i],newElement.type);}validatePropTypes(newElement);return newElement;}};module.exports=ReactElementValidator;}).call(this,require('_process'));},{"./ReactComponentTreeHook":113,"./ReactCurrentOwner":115,"./ReactElement":138,"./ReactPropTypeLocations":161,"./canDefineProperty":195,"./checkReactTypeSpec":196,"./getIteratorFn":208,"_process":3,"fbjs/lib/warning":68}],140:[function(require,module,exports){/**
 * Copyright 2014-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactEmptyComponent
 */'use strict';var emptyComponentFactory;var ReactEmptyComponentInjection={injectEmptyComponentFactory:function injectEmptyComponentFactory(factory){emptyComponentFactory=factory;}};var ReactEmptyComponent={create:function create(instantiate){return emptyComponentFactory(instantiate);}};ReactEmptyComponent.injection=ReactEmptyComponentInjection;module.exports=ReactEmptyComponent;},{}],141:[function(require,module,exports){(function(process){/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactErrorUtils
 */'use strict';var caughtError=null;/**
 * Call a function while guarding against errors that happens within it.
 *
 * @param {?String} name of the guard to use for logging or debugging
 * @param {Function} func The function to invoke
 * @param {*} a First argument
 * @param {*} b Second argument
 */function invokeGuardedCallback(name,func,a,b){try{return func(a,b);}catch(x){if(caughtError===null){caughtError=x;}return undefined;}}var ReactErrorUtils={invokeGuardedCallback:invokeGuardedCallback,/**
   * Invoked by ReactTestUtils.Simulate so that any errors thrown by the event
   * handler are sure to be rethrown by rethrowCaughtError.
   */invokeGuardedCallbackWithCatch:invokeGuardedCallback,/**
   * During execution of guarded functions we will capture the first error which
   * we will rethrow to be handled by the top level error handler.
   */rethrowCaughtError:function rethrowCaughtError(){if(caughtError){var error=caughtError;caughtError=null;throw error;}}};if(process.env.NODE_ENV!=='production'){/**
   * To help development we can get better devtools integration by simulating a
   * real browser event.
   */if(typeof window!=='undefined'&&typeof window.dispatchEvent==='function'&&typeof document!=='undefined'&&typeof document.createEvent==='function'){var fakeNode=document.createElement('react');ReactErrorUtils.invokeGuardedCallback=function(name,func,a,b){var boundFunc=func.bind(null,a,b);var evtType='react-'+name;fakeNode.addEventListener(evtType,boundFunc,false);var evt=document.createEvent('Event');evt.initEvent(evtType,false,false);fakeNode.dispatchEvent(evt);fakeNode.removeEventListener(evtType,boundFunc,false);};}}module.exports=ReactErrorUtils;}).call(this,require('_process'));},{"_process":3}],142:[function(require,module,exports){/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactEventEmitterMixin
 */'use strict';var EventPluginHub=require('./EventPluginHub');function runEventQueueInBatch(events){EventPluginHub.enqueueEvents(events);EventPluginHub.processEventQueue(false);}var ReactEventEmitterMixin={/**
   * Streams a fired top-level event to `EventPluginHub` where plugins have the
   * opportunity to create `ReactEvent`s to be dispatched.
   */handleTopLevel:function handleTopLevel(topLevelType,targetInst,nativeEvent,nativeEventTarget){var events=EventPluginHub.extractEvents(topLevelType,targetInst,nativeEvent,nativeEventTarget);runEventQueueInBatch(events);}};module.exports=ReactEventEmitterMixin;},{"./EventPluginHub":95}],143:[function(require,module,exports){/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactEventListener
 */'use strict';var _assign=require('object-assign');var EventListener=require('fbjs/lib/EventListener');var ExecutionEnvironment=require('fbjs/lib/ExecutionEnvironment');var PooledClass=require('./PooledClass');var ReactDOMComponentTree=require('./ReactDOMComponentTree');var ReactUpdates=require('./ReactUpdates');var getEventTarget=require('./getEventTarget');var getUnboundedScrollPosition=require('fbjs/lib/getUnboundedScrollPosition');/**
 * Find the deepest React component completely containing the root of the
 * passed-in instance (for use when entire React trees are nested within each
 * other). If React trees are not nested, returns null.
 */function findParent(inst){// TODO: It may be a good idea to cache this to prevent unnecessary DOM
// traversal, but caching is difficult to do correctly without using a
// mutation observer to listen for all DOM changes.
while(inst._hostParent){inst=inst._hostParent;}var rootNode=ReactDOMComponentTree.getNodeFromInstance(inst);var container=rootNode.parentNode;return ReactDOMComponentTree.getClosestInstanceFromNode(container);}// Used to store ancestor hierarchy in top level callback
function TopLevelCallbackBookKeeping(topLevelType,nativeEvent){this.topLevelType=topLevelType;this.nativeEvent=nativeEvent;this.ancestors=[];}_assign(TopLevelCallbackBookKeeping.prototype,{destructor:function destructor(){this.topLevelType=null;this.nativeEvent=null;this.ancestors.length=0;}});PooledClass.addPoolingTo(TopLevelCallbackBookKeeping,PooledClass.twoArgumentPooler);function handleTopLevelImpl(bookKeeping){var nativeEventTarget=getEventTarget(bookKeeping.nativeEvent);var targetInst=ReactDOMComponentTree.getClosestInstanceFromNode(nativeEventTarget);// Loop through the hierarchy, in case there's any nested components.
// It's important that we build the array of ancestors before calling any
// event handlers, because event handlers can modify the DOM, leading to
// inconsistencies with ReactMount's node cache. See #1105.
var ancestor=targetInst;do{bookKeeping.ancestors.push(ancestor);ancestor=ancestor&&findParent(ancestor);}while(ancestor);for(var i=0;i<bookKeeping.ancestors.length;i++){targetInst=bookKeeping.ancestors[i];ReactEventListener._handleTopLevel(bookKeeping.topLevelType,targetInst,bookKeeping.nativeEvent,getEventTarget(bookKeeping.nativeEvent));}}function scrollValueMonitor(cb){var scrollPosition=getUnboundedScrollPosition(window);cb(scrollPosition);}var ReactEventListener={_enabled:true,_handleTopLevel:null,WINDOW_HANDLE:ExecutionEnvironment.canUseDOM?window:null,setHandleTopLevel:function setHandleTopLevel(handleTopLevel){ReactEventListener._handleTopLevel=handleTopLevel;},setEnabled:function setEnabled(enabled){ReactEventListener._enabled=!!enabled;},isEnabled:function isEnabled(){return ReactEventListener._enabled;},/**
   * Traps top-level events by using event bubbling.
   *
   * @param {string} topLevelType Record from `EventConstants`.
   * @param {string} handlerBaseName Event name (e.g. "click").
   * @param {object} handle Element on which to attach listener.
   * @return {?object} An object with a remove function which will forcefully
   *                  remove the listener.
   * @internal
   */trapBubbledEvent:function trapBubbledEvent(topLevelType,handlerBaseName,handle){var element=handle;if(!element){return null;}return EventListener.listen(element,handlerBaseName,ReactEventListener.dispatchEvent.bind(null,topLevelType));},/**
   * Traps a top-level event by using event capturing.
   *
   * @param {string} topLevelType Record from `EventConstants`.
   * @param {string} handlerBaseName Event name (e.g. "click").
   * @param {object} handle Element on which to attach listener.
   * @return {?object} An object with a remove function which will forcefully
   *                  remove the listener.
   * @internal
   */trapCapturedEvent:function trapCapturedEvent(topLevelType,handlerBaseName,handle){var element=handle;if(!element){return null;}return EventListener.capture(element,handlerBaseName,ReactEventListener.dispatchEvent.bind(null,topLevelType));},monitorScrollValue:function monitorScrollValue(refresh){var callback=scrollValueMonitor.bind(null,refresh);EventListener.listen(window,'scroll',callback);},dispatchEvent:function dispatchEvent(topLevelType,nativeEvent){if(!ReactEventListener._enabled){return;}var bookKeeping=TopLevelCallbackBookKeeping.getPooled(topLevelType,nativeEvent);try{// Event queue being processed in the same cycle allows
// `preventDefault`.
ReactUpdates.batchedUpdates(handleTopLevelImpl,bookKeeping);}finally{TopLevelCallbackBookKeeping.release(bookKeeping);}}};module.exports=ReactEventListener;},{"./PooledClass":103,"./ReactDOMComponentTree":120,"./ReactUpdates":173,"./getEventTarget":206,"fbjs/lib/EventListener":44,"fbjs/lib/ExecutionEnvironment":45,"fbjs/lib/getUnboundedScrollPosition":56,"object-assign":344}],144:[function(require,module,exports){/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactFeatureFlags
 * 
 */'use strict';var ReactFeatureFlags={// When true, call console.time() before and .timeEnd() after each top-level
// render (both initial renders and updates). Useful when looking at prod-mode
// timeline profiles in Chrome, for example.
logTopLevelRenders:false};module.exports=ReactFeatureFlags;},{}],145:[function(require,module,exports){(function(process){/**
 * Copyright 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactFragment
 */'use strict';var _prodInvariant=require('./reactProdInvariant');var ReactChildren=require('./ReactChildren');var ReactElement=require('./ReactElement');var emptyFunction=require('fbjs/lib/emptyFunction');var invariant=require('fbjs/lib/invariant');var warning=require('fbjs/lib/warning');/**
 * We used to allow keyed objects to serve as a collection of ReactElements,
 * or nested sets. This allowed us a way to explicitly key a set or fragment of
 * components. This is now being replaced with an opaque data structure.
 * The upgrade path is to call React.addons.createFragment({ key: value }) to
 * create a keyed fragment. The resulting data structure is an array.
 */var numericPropertyRegex=/^\d+$/;var warnedAboutNumeric=false;var ReactFragment={/**
   * Wrap a keyed object in an opaque proxy that warns you if you access any
   * of its properties.
   * See https://facebook.github.io/react/docs/create-fragment.html
   */create:function create(object){if((typeof object==="undefined"?"undefined":_typeof4(object))!=='object'||!object||Array.isArray(object)){process.env.NODE_ENV!=='production'?warning(false,'React.addons.createFragment only accepts a single object. Got: %s',object):void 0;return object;}if(ReactElement.isValidElement(object)){process.env.NODE_ENV!=='production'?warning(false,'React.addons.createFragment does not accept a ReactElement '+'without a wrapper object.'):void 0;return object;}!(object.nodeType!==1)?process.env.NODE_ENV!=='production'?invariant(false,'React.addons.createFragment(...): Encountered an invalid child; DOM elements are not valid children of React components.'):_prodInvariant('0'):void 0;var result=[];for(var key in object){if(process.env.NODE_ENV!=='production'){if(!warnedAboutNumeric&&numericPropertyRegex.test(key)){process.env.NODE_ENV!=='production'?warning(false,'React.addons.createFragment(...): Child objects should have '+'non-numeric keys so ordering is preserved.'):void 0;warnedAboutNumeric=true;}}ReactChildren.mapIntoWithKeyPrefixInternal(object[key],result,key,emptyFunction.thatReturnsArgument);}return result;}};module.exports=ReactFragment;}).call(this,require('_process'));},{"./ReactChildren":107,"./ReactElement":138,"./reactProdInvariant":217,"_process":3,"fbjs/lib/emptyFunction":51,"fbjs/lib/invariant":59,"fbjs/lib/warning":68}],146:[function(require,module,exports){(function(process){/**
 * Copyright 2014-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactHostComponent
 */'use strict';var _prodInvariant=require('./reactProdInvariant'),_assign=require('object-assign');var invariant=require('fbjs/lib/invariant');var genericComponentClass=null;// This registry keeps track of wrapper classes around host tags.
var tagToComponentClass={};var textComponentClass=null;var ReactHostComponentInjection={// This accepts a class that receives the tag string. This is a catch all
// that can render any kind of tag.
injectGenericComponentClass:function injectGenericComponentClass(componentClass){genericComponentClass=componentClass;},// This accepts a text component class that takes the text string to be
// rendered as props.
injectTextComponentClass:function injectTextComponentClass(componentClass){textComponentClass=componentClass;},// This accepts a keyed object with classes as values. Each key represents a
// tag. That particular tag will use this class instead of the generic one.
injectComponentClasses:function injectComponentClasses(componentClasses){_assign(tagToComponentClass,componentClasses);}};/**
 * Get a host internal component class for a specific tag.
 *
 * @param {ReactElement} element The element to create.
 * @return {function} The internal class constructor function.
 */function createInternalComponent(element){!genericComponentClass?process.env.NODE_ENV!=='production'?invariant(false,'There is no registered component for the tag %s',element.type):_prodInvariant('111',element.type):void 0;return new genericComponentClass(element);}/**
 * @param {ReactText} text
 * @return {ReactComponent}
 */function createInstanceForText(text){return new textComponentClass(text);}/**
 * @param {ReactComponent} component
 * @return {boolean}
 */function isTextComponent(component){return component instanceof textComponentClass;}var ReactHostComponent={createInternalComponent:createInternalComponent,createInstanceForText:createInstanceForText,isTextComponent:isTextComponent,injection:ReactHostComponentInjection};module.exports=ReactHostComponent;}).call(this,require('_process'));},{"./reactProdInvariant":217,"_process":3,"fbjs/lib/invariant":59,"object-assign":344}],147:[function(require,module,exports){/**
 * Copyright 2016-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactHostOperationHistoryHook
 */'use strict';var history=[];var ReactHostOperationHistoryHook={onHostOperation:function onHostOperation(debugID,type,payload){history.push({instanceID:debugID,type:type,payload:payload});},clearHistory:function clearHistory(){if(ReactHostOperationHistoryHook._preventClearing){// Should only be used for tests.
return;}history=[];},getHistory:function getHistory(){return history;}};module.exports=ReactHostOperationHistoryHook;},{}],148:[function(require,module,exports){/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactInjection
 */'use strict';var DOMProperty=require('./DOMProperty');var EventPluginHub=require('./EventPluginHub');var EventPluginUtils=require('./EventPluginUtils');var ReactComponentEnvironment=require('./ReactComponentEnvironment');var ReactClass=require('./ReactClass');var ReactEmptyComponent=require('./ReactEmptyComponent');var ReactBrowserEventEmitter=require('./ReactBrowserEventEmitter');var ReactHostComponent=require('./ReactHostComponent');var ReactUpdates=require('./ReactUpdates');var ReactInjection={Component:ReactComponentEnvironment.injection,Class:ReactClass.injection,DOMProperty:DOMProperty.injection,EmptyComponent:ReactEmptyComponent.injection,EventPluginHub:EventPluginHub.injection,EventPluginUtils:EventPluginUtils.injection,EventEmitter:ReactBrowserEventEmitter.injection,HostComponent:ReactHostComponent.injection,Updates:ReactUpdates.injection};module.exports=ReactInjection;},{"./DOMProperty":88,"./EventPluginHub":95,"./EventPluginUtils":97,"./ReactBrowserEventEmitter":105,"./ReactClass":109,"./ReactComponentEnvironment":112,"./ReactEmptyComponent":140,"./ReactHostComponent":146,"./ReactUpdates":173}],149:[function(require,module,exports){/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactInputSelection
 */'use strict';var ReactDOMSelection=require('./ReactDOMSelection');var containsNode=require('fbjs/lib/containsNode');var focusNode=require('fbjs/lib/focusNode');var getActiveElement=require('fbjs/lib/getActiveElement');function isInDocument(node){return containsNode(document.documentElement,node);}/**
 * @ReactInputSelection: React input selection module. Based on Selection.js,
 * but modified to be suitable for react and has a couple of bug fixes (doesn't
 * assume buttons have range selections allowed).
 * Input selection module for React.
 */var ReactInputSelection={hasSelectionCapabilities:function hasSelectionCapabilities(elem){var nodeName=elem&&elem.nodeName&&elem.nodeName.toLowerCase();return nodeName&&(nodeName==='input'&&elem.type==='text'||nodeName==='textarea'||elem.contentEditable==='true');},getSelectionInformation:function getSelectionInformation(){var focusedElem=getActiveElement();return{focusedElem:focusedElem,selectionRange:ReactInputSelection.hasSelectionCapabilities(focusedElem)?ReactInputSelection.getSelection(focusedElem):null};},/**
   * @restoreSelection: If any selection information was potentially lost,
   * restore it. This is useful when performing operations that could remove dom
   * nodes and place them back in, resulting in focus being lost.
   */restoreSelection:function restoreSelection(priorSelectionInformation){var curFocusedElem=getActiveElement();var priorFocusedElem=priorSelectionInformation.focusedElem;var priorSelectionRange=priorSelectionInformation.selectionRange;if(curFocusedElem!==priorFocusedElem&&isInDocument(priorFocusedElem)){if(ReactInputSelection.hasSelectionCapabilities(priorFocusedElem)){ReactInputSelection.setSelection(priorFocusedElem,priorSelectionRange);}focusNode(priorFocusedElem);}},/**
   * @getSelection: Gets the selection bounds of a focused textarea, input or
   * contentEditable node.
   * -@input: Look up selection bounds of this input
   * -@return {start: selectionStart, end: selectionEnd}
   */getSelection:function getSelection(input){var selection;if('selectionStart'in input){// Modern browser with input or textarea.
selection={start:input.selectionStart,end:input.selectionEnd};}else if(document.selection&&input.nodeName&&input.nodeName.toLowerCase()==='input'){// IE8 input.
var range=document.selection.createRange();// There can only be one selection per document in IE, so it must
// be in our element.
if(range.parentElement()===input){selection={start:-range.moveStart('character',-input.value.length),end:-range.moveEnd('character',-input.value.length)};}}else{// Content editable or old IE textarea.
selection=ReactDOMSelection.getOffsets(input);}return selection||{start:0,end:0};},/**
   * @setSelection: Sets the selection bounds of a textarea or input and focuses
   * the input.
   * -@input     Set selection bounds of this input or textarea
   * -@offsets   Object of same form that is returned from get*
   */setSelection:function setSelection(input,offsets){var start=offsets.start;var end=offsets.end;if(end===undefined){end=start;}if('selectionStart'in input){input.selectionStart=start;input.selectionEnd=Math.min(end,input.value.length);}else if(document.selection&&input.nodeName&&input.nodeName.toLowerCase()==='input'){var range=input.createTextRange();range.collapse(true);range.moveStart('character',start);range.moveEnd('character',end-start);range.select();}else{ReactDOMSelection.setOffsets(input,offsets);}}};module.exports=ReactInputSelection;},{"./ReactDOMSelection":130,"fbjs/lib/containsNode":48,"fbjs/lib/focusNode":53,"fbjs/lib/getActiveElement":54}],150:[function(require,module,exports){/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactInstanceMap
 */'use strict';/**
 * `ReactInstanceMap` maintains a mapping from a public facing stateful
 * instance (key) and the internal representation (value). This allows public
 * methods to accept the user facing instance as an argument and map them back
 * to internal methods.
 */// TODO: Replace this with ES6: var ReactInstanceMap = new Map();
var ReactInstanceMap={/**
   * This API should be called `delete` but we'd have to make sure to always
   * transform these to strings for IE support. When this transform is fully
   * supported we can rename it.
   */remove:function remove(key){key._reactInternalInstance=undefined;},get:function get(key){return key._reactInternalInstance;},has:function has(key){return key._reactInternalInstance!==undefined;},set:function set(key,value){key._reactInternalInstance=value;}};module.exports=ReactInstanceMap;},{}],151:[function(require,module,exports){(function(process){/**
 * Copyright 2016-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactInstrumentation
 */'use strict';var debugTool=null;if(process.env.NODE_ENV!=='production'){var ReactDebugTool=require('./ReactDebugTool');debugTool=ReactDebugTool;}module.exports={debugTool:debugTool};}).call(this,require('_process'));},{"./ReactDebugTool":135,"_process":3}],152:[function(require,module,exports){(function(process){/**
 * Copyright 2016-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactInvalidSetStateWarningHook
 */'use strict';var warning=require('fbjs/lib/warning');if(process.env.NODE_ENV!=='production'){var processingChildContext=false;var warnInvalidSetState=function warnInvalidSetState(){process.env.NODE_ENV!=='production'?warning(!processingChildContext,'setState(...): Cannot call setState() inside getChildContext()'):void 0;};}var ReactInvalidSetStateWarningHook={onBeginProcessingChildContext:function onBeginProcessingChildContext(){processingChildContext=true;},onEndProcessingChildContext:function onEndProcessingChildContext(){processingChildContext=false;},onSetState:function onSetState(){warnInvalidSetState();}};module.exports=ReactInvalidSetStateWarningHook;}).call(this,require('_process'));},{"_process":3,"fbjs/lib/warning":68}],153:[function(require,module,exports){/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactMarkupChecksum
 */'use strict';var adler32=require('./adler32');var TAG_END=/\/?>/;var COMMENT_START=/^<\!\-\-/;var ReactMarkupChecksum={CHECKSUM_ATTR_NAME:'data-react-checksum',/**
   * @param {string} markup Markup string
   * @return {string} Markup string with checksum attribute attached
   */addChecksumToMarkup:function addChecksumToMarkup(markup){var checksum=adler32(markup);// Add checksum (handle both parent tags, comments and self-closing tags)
if(COMMENT_START.test(markup)){return markup;}else{return markup.replace(TAG_END,' '+ReactMarkupChecksum.CHECKSUM_ATTR_NAME+'="'+checksum+'"$&');}},/**
   * @param {string} markup to use
   * @param {DOMElement} element root React element
   * @returns {boolean} whether or not the markup is the same
   */canReuseMarkup:function canReuseMarkup(markup,element){var existingChecksum=element.getAttribute(ReactMarkupChecksum.CHECKSUM_ATTR_NAME);existingChecksum=existingChecksum&&parseInt(existingChecksum,10);var markupChecksum=adler32(markup);return markupChecksum===existingChecksum;}};module.exports=ReactMarkupChecksum;},{"./adler32":194}],154:[function(require,module,exports){(function(process){/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactMount
 */'use strict';var _prodInvariant=require('./reactProdInvariant');var DOMLazyTree=require('./DOMLazyTree');var DOMProperty=require('./DOMProperty');var ReactBrowserEventEmitter=require('./ReactBrowserEventEmitter');var ReactCurrentOwner=require('./ReactCurrentOwner');var ReactDOMComponentTree=require('./ReactDOMComponentTree');var ReactDOMContainerInfo=require('./ReactDOMContainerInfo');var ReactDOMFeatureFlags=require('./ReactDOMFeatureFlags');var ReactElement=require('./ReactElement');var ReactFeatureFlags=require('./ReactFeatureFlags');var ReactInstanceMap=require('./ReactInstanceMap');var ReactInstrumentation=require('./ReactInstrumentation');var ReactMarkupChecksum=require('./ReactMarkupChecksum');var ReactReconciler=require('./ReactReconciler');var ReactUpdateQueue=require('./ReactUpdateQueue');var ReactUpdates=require('./ReactUpdates');var emptyObject=require('fbjs/lib/emptyObject');var instantiateReactComponent=require('./instantiateReactComponent');var invariant=require('fbjs/lib/invariant');var setInnerHTML=require('./setInnerHTML');var shouldUpdateReactComponent=require('./shouldUpdateReactComponent');var warning=require('fbjs/lib/warning');var ATTR_NAME=DOMProperty.ID_ATTRIBUTE_NAME;var ROOT_ATTR_NAME=DOMProperty.ROOT_ATTRIBUTE_NAME;var ELEMENT_NODE_TYPE=1;var DOC_NODE_TYPE=9;var DOCUMENT_FRAGMENT_NODE_TYPE=11;var instancesByReactRootID={};/**
 * Finds the index of the first character
 * that's not common between the two given strings.
 *
 * @return {number} the index of the character where the strings diverge
 */function firstDifferenceIndex(string1,string2){var minLen=Math.min(string1.length,string2.length);for(var i=0;i<minLen;i++){if(string1.charAt(i)!==string2.charAt(i)){return i;}}return string1.length===string2.length?-1:minLen;}/**
 * @param {DOMElement|DOMDocument} container DOM element that may contain
 * a React component
 * @return {?*} DOM element that may have the reactRoot ID, or null.
 */function getReactRootElementInContainer(container){if(!container){return null;}if(container.nodeType===DOC_NODE_TYPE){return container.documentElement;}else{return container.firstChild;}}function internalGetID(node){// If node is something like a window, document, or text node, none of
// which support attributes or a .getAttribute method, gracefully return
// the empty string, as if the attribute were missing.
return node.getAttribute&&node.getAttribute(ATTR_NAME)||'';}/**
 * Mounts this component and inserts it into the DOM.
 *
 * @param {ReactComponent} componentInstance The instance to mount.
 * @param {DOMElement} container DOM element to mount into.
 * @param {ReactReconcileTransaction} transaction
 * @param {boolean} shouldReuseMarkup If true, do not insert markup
 */function mountComponentIntoNode(wrapperInstance,container,transaction,shouldReuseMarkup,context){var markerName;if(ReactFeatureFlags.logTopLevelRenders){var wrappedElement=wrapperInstance._currentElement.props;var type=wrappedElement.type;markerName='React mount: '+(typeof type==='string'?type:type.displayName||type.name);console.time(markerName);}var markup=ReactReconciler.mountComponent(wrapperInstance,transaction,null,ReactDOMContainerInfo(wrapperInstance,container),context,0/* parentDebugID */);if(markerName){console.timeEnd(markerName);}wrapperInstance._renderedComponent._topLevelWrapper=wrapperInstance;ReactMount._mountImageIntoNode(markup,container,wrapperInstance,shouldReuseMarkup,transaction);}/**
 * Batched mount.
 *
 * @param {ReactComponent} componentInstance The instance to mount.
 * @param {DOMElement} container DOM element to mount into.
 * @param {boolean} shouldReuseMarkup If true, do not insert markup
 */function batchedMountComponentIntoNode(componentInstance,container,shouldReuseMarkup,context){var transaction=ReactUpdates.ReactReconcileTransaction.getPooled(/* useCreateElement */!shouldReuseMarkup&&ReactDOMFeatureFlags.useCreateElement);transaction.perform(mountComponentIntoNode,null,componentInstance,container,transaction,shouldReuseMarkup,context);ReactUpdates.ReactReconcileTransaction.release(transaction);}/**
 * Unmounts a component and removes it from the DOM.
 *
 * @param {ReactComponent} instance React component instance.
 * @param {DOMElement} container DOM element to unmount from.
 * @final
 * @internal
 * @see {ReactMount.unmountComponentAtNode}
 */function unmountComponentFromNode(instance,container,safely){if(process.env.NODE_ENV!=='production'){ReactInstrumentation.debugTool.onBeginFlush();}ReactReconciler.unmountComponent(instance,safely);if(process.env.NODE_ENV!=='production'){ReactInstrumentation.debugTool.onEndFlush();}if(container.nodeType===DOC_NODE_TYPE){container=container.documentElement;}// http://jsperf.com/emptying-a-node
while(container.lastChild){container.removeChild(container.lastChild);}}/**
 * True if the supplied DOM node has a direct React-rendered child that is
 * not a React root element. Useful for warning in `render`,
 * `unmountComponentAtNode`, etc.
 *
 * @param {?DOMElement} node The candidate DOM node.
 * @return {boolean} True if the DOM element contains a direct child that was
 * rendered by React but is not a root element.
 * @internal
 */function hasNonRootReactChild(container){var rootEl=getReactRootElementInContainer(container);if(rootEl){var inst=ReactDOMComponentTree.getInstanceFromNode(rootEl);return!!(inst&&inst._hostParent);}}/**
 * True if the supplied DOM node is a React DOM element and
 * it has been rendered by another copy of React.
 *
 * @param {?DOMElement} node The candidate DOM node.
 * @return {boolean} True if the DOM has been rendered by another copy of React
 * @internal
 */function nodeIsRenderedByOtherInstance(container){var rootEl=getReactRootElementInContainer(container);return!!(rootEl&&isReactNode(rootEl)&&!ReactDOMComponentTree.getInstanceFromNode(rootEl));}/**
 * True if the supplied DOM node is a valid node element.
 *
 * @param {?DOMElement} node The candidate DOM node.
 * @return {boolean} True if the DOM is a valid DOM node.
 * @internal
 */function isValidContainer(node){return!!(node&&(node.nodeType===ELEMENT_NODE_TYPE||node.nodeType===DOC_NODE_TYPE||node.nodeType===DOCUMENT_FRAGMENT_NODE_TYPE));}/**
 * True if the supplied DOM node is a valid React node element.
 *
 * @param {?DOMElement} node The candidate DOM node.
 * @return {boolean} True if the DOM is a valid React DOM node.
 * @internal
 */function isReactNode(node){return isValidContainer(node)&&(node.hasAttribute(ROOT_ATTR_NAME)||node.hasAttribute(ATTR_NAME));}function getHostRootInstanceInContainer(container){var rootEl=getReactRootElementInContainer(container);var prevHostInstance=rootEl&&ReactDOMComponentTree.getInstanceFromNode(rootEl);return prevHostInstance&&!prevHostInstance._hostParent?prevHostInstance:null;}function getTopLevelWrapperInContainer(container){var root=getHostRootInstanceInContainer(container);return root?root._hostContainerInfo._topLevelWrapper:null;}/**
 * Temporary (?) hack so that we can store all top-level pending updates on
 * composites instead of having to worry about different types of components
 * here.
 */var topLevelRootCounter=1;var TopLevelWrapper=function TopLevelWrapper(){this.rootID=topLevelRootCounter++;};TopLevelWrapper.prototype.isReactComponent={};if(process.env.NODE_ENV!=='production'){TopLevelWrapper.displayName='TopLevelWrapper';}TopLevelWrapper.prototype.render=function(){// this.props is actually a ReactElement
return this.props;};/**
 * Mounting is the process of initializing a React component by creating its
 * representative DOM elements and inserting them into a supplied `container`.
 * Any prior content inside `container` is destroyed in the process.
 *
 *   ReactMount.render(
 *     component,
 *     document.getElementById('container')
 *   );
 *
 *   <div id="container">                   <-- Supplied `container`.
 *     <div data-reactid=".3">              <-- Rendered reactRoot of React
 *       // ...                                 component.
 *     </div>
 *   </div>
 *
 * Inside of `container`, the first element rendered is the "reactRoot".
 */var ReactMount={TopLevelWrapper:TopLevelWrapper,/**
   * Used by devtools. The keys are not important.
   */_instancesByReactRootID:instancesByReactRootID,/**
   * This is a hook provided to support rendering React components while
   * ensuring that the apparent scroll position of its `container` does not
   * change.
   *
   * @param {DOMElement} container The `container` being rendered into.
   * @param {function} renderCallback This must be called once to do the render.
   */scrollMonitor:function scrollMonitor(container,renderCallback){renderCallback();},/**
   * Take a component that's already mounted into the DOM and replace its props
   * @param {ReactComponent} prevComponent component instance already in the DOM
   * @param {ReactElement} nextElement component instance to render
   * @param {DOMElement} container container to render into
   * @param {?function} callback function triggered on completion
   */_updateRootComponent:function _updateRootComponent(prevComponent,nextElement,nextContext,container,callback){ReactMount.scrollMonitor(container,function(){ReactUpdateQueue.enqueueElementInternal(prevComponent,nextElement,nextContext);if(callback){ReactUpdateQueue.enqueueCallbackInternal(prevComponent,callback);}});return prevComponent;},/**
   * Render a new component into the DOM. Hooked by hooks!
   *
   * @param {ReactElement} nextElement element to render
   * @param {DOMElement} container container to render into
   * @param {boolean} shouldReuseMarkup if we should skip the markup insertion
   * @return {ReactComponent} nextComponent
   */_renderNewRootComponent:function _renderNewRootComponent(nextElement,container,shouldReuseMarkup,context){// Various parts of our code (such as ReactCompositeComponent's
// _renderValidatedComponent) assume that calls to render aren't nested;
// verify that that's the case.
process.env.NODE_ENV!=='production'?warning(ReactCurrentOwner.current==null,'_renderNewRootComponent(): Render methods should be a pure function '+'of props and state; triggering nested component updates from '+'render is not allowed. If necessary, trigger nested updates in '+'componentDidUpdate. Check the render method of %s.',ReactCurrentOwner.current&&ReactCurrentOwner.current.getName()||'ReactCompositeComponent'):void 0;!isValidContainer(container)?process.env.NODE_ENV!=='production'?invariant(false,'_registerComponent(...): Target container is not a DOM element.'):_prodInvariant('37'):void 0;ReactBrowserEventEmitter.ensureScrollValueMonitoring();var componentInstance=instantiateReactComponent(nextElement,false);// The initial render is synchronous but any updates that happen during
// rendering, in componentWillMount or componentDidMount, will be batched
// according to the current batching strategy.
ReactUpdates.batchedUpdates(batchedMountComponentIntoNode,componentInstance,container,shouldReuseMarkup,context);var wrapperID=componentInstance._instance.rootID;instancesByReactRootID[wrapperID]=componentInstance;return componentInstance;},/**
   * Renders a React component into the DOM in the supplied `container`.
   *
   * If the React component was previously rendered into `container`, this will
   * perform an update on it and only mutate the DOM as necessary to reflect the
   * latest React component.
   *
   * @param {ReactComponent} parentComponent The conceptual parent of this render tree.
   * @param {ReactElement} nextElement Component element to render.
   * @param {DOMElement} container DOM element to render into.
   * @param {?function} callback function triggered on completion
   * @return {ReactComponent} Component instance rendered in `container`.
   */renderSubtreeIntoContainer:function renderSubtreeIntoContainer(parentComponent,nextElement,container,callback){!(parentComponent!=null&&ReactInstanceMap.has(parentComponent))?process.env.NODE_ENV!=='production'?invariant(false,'parentComponent must be a valid React Component'):_prodInvariant('38'):void 0;return ReactMount._renderSubtreeIntoContainer(parentComponent,nextElement,container,callback);},_renderSubtreeIntoContainer:function _renderSubtreeIntoContainer(parentComponent,nextElement,container,callback){ReactUpdateQueue.validateCallback(callback,'ReactDOM.render');!ReactElement.isValidElement(nextElement)?process.env.NODE_ENV!=='production'?invariant(false,'ReactDOM.render(): Invalid component element.%s',typeof nextElement==='string'?' Instead of passing a string like \'div\', pass '+'React.createElement(\'div\') or <div />.':typeof nextElement==='function'?' Instead of passing a class like Foo, pass '+'React.createElement(Foo) or <Foo />.':// Check if it quacks like an element
nextElement!=null&&nextElement.props!==undefined?' This may be caused by unintentionally loading two independent '+'copies of React.':''):_prodInvariant('39',typeof nextElement==='string'?' Instead of passing a string like \'div\', pass '+'React.createElement(\'div\') or <div />.':typeof nextElement==='function'?' Instead of passing a class like Foo, pass '+'React.createElement(Foo) or <Foo />.':nextElement!=null&&nextElement.props!==undefined?' This may be caused by unintentionally loading two independent '+'copies of React.':''):void 0;process.env.NODE_ENV!=='production'?warning(!container||!container.tagName||container.tagName.toUpperCase()!=='BODY','render(): Rendering components directly into document.body is '+'discouraged, since its children are often manipulated by third-party '+'scripts and browser extensions. This may lead to subtle '+'reconciliation issues. Try rendering into a container element created '+'for your app.'):void 0;var nextWrappedElement=ReactElement(TopLevelWrapper,null,null,null,null,null,nextElement);var nextContext;if(parentComponent){var parentInst=ReactInstanceMap.get(parentComponent);nextContext=parentInst._processChildContext(parentInst._context);}else{nextContext=emptyObject;}var prevComponent=getTopLevelWrapperInContainer(container);if(prevComponent){var prevWrappedElement=prevComponent._currentElement;var prevElement=prevWrappedElement.props;if(shouldUpdateReactComponent(prevElement,nextElement)){var publicInst=prevComponent._renderedComponent.getPublicInstance();var updatedCallback=callback&&function(){callback.call(publicInst);};ReactMount._updateRootComponent(prevComponent,nextWrappedElement,nextContext,container,updatedCallback);return publicInst;}else{ReactMount.unmountComponentAtNode(container);}}var reactRootElement=getReactRootElementInContainer(container);var containerHasReactMarkup=reactRootElement&&!!internalGetID(reactRootElement);var containerHasNonRootReactChild=hasNonRootReactChild(container);if(process.env.NODE_ENV!=='production'){process.env.NODE_ENV!=='production'?warning(!containerHasNonRootReactChild,'render(...): Replacing React-rendered children with a new root '+'component. If you intended to update the children of this node, '+'you should instead have the existing children update their state '+'and render the new components instead of calling ReactDOM.render.'):void 0;if(!containerHasReactMarkup||reactRootElement.nextSibling){var rootElementSibling=reactRootElement;while(rootElementSibling){if(internalGetID(rootElementSibling)){process.env.NODE_ENV!=='production'?warning(false,'render(): Target node has markup rendered by React, but there '+'are unrelated nodes as well. This is most commonly caused by '+'white-space inserted around server-rendered markup.'):void 0;break;}rootElementSibling=rootElementSibling.nextSibling;}}}var shouldReuseMarkup=containerHasReactMarkup&&!prevComponent&&!containerHasNonRootReactChild;var component=ReactMount._renderNewRootComponent(nextWrappedElement,container,shouldReuseMarkup,nextContext)._renderedComponent.getPublicInstance();if(callback){callback.call(component);}return component;},/**
   * Renders a React component into the DOM in the supplied `container`.
   * See https://facebook.github.io/react/docs/top-level-api.html#reactdom.render
   *
   * If the React component was previously rendered into `container`, this will
   * perform an update on it and only mutate the DOM as necessary to reflect the
   * latest React component.
   *
   * @param {ReactElement} nextElement Component element to render.
   * @param {DOMElement} container DOM element to render into.
   * @param {?function} callback function triggered on completion
   * @return {ReactComponent} Component instance rendered in `container`.
   */render:function render(nextElement,container,callback){return ReactMount._renderSubtreeIntoContainer(null,nextElement,container,callback);},/**
   * Unmounts and destroys the React component rendered in the `container`.
   * See https://facebook.github.io/react/docs/top-level-api.html#reactdom.unmountcomponentatnode
   *
   * @param {DOMElement} container DOM element containing a React component.
   * @return {boolean} True if a component was found in and unmounted from
   *                   `container`
   */unmountComponentAtNode:function unmountComponentAtNode(container){// Various parts of our code (such as ReactCompositeComponent's
// _renderValidatedComponent) assume that calls to render aren't nested;
// verify that that's the case. (Strictly speaking, unmounting won't cause a
// render but we still don't expect to be in a render call here.)
process.env.NODE_ENV!=='production'?warning(ReactCurrentOwner.current==null,'unmountComponentAtNode(): Render methods should be a pure function '+'of props and state; triggering nested component updates from render '+'is not allowed. If necessary, trigger nested updates in '+'componentDidUpdate. Check the render method of %s.',ReactCurrentOwner.current&&ReactCurrentOwner.current.getName()||'ReactCompositeComponent'):void 0;!isValidContainer(container)?process.env.NODE_ENV!=='production'?invariant(false,'unmountComponentAtNode(...): Target container is not a DOM element.'):_prodInvariant('40'):void 0;if(process.env.NODE_ENV!=='production'){process.env.NODE_ENV!=='production'?warning(!nodeIsRenderedByOtherInstance(container),'unmountComponentAtNode(): The node you\'re attempting to unmount '+'was rendered by another copy of React.'):void 0;}var prevComponent=getTopLevelWrapperInContainer(container);if(!prevComponent){// Check if the node being unmounted was rendered by React, but isn't a
// root node.
var containerHasNonRootReactChild=hasNonRootReactChild(container);// Check if the container itself is a React root node.
var isContainerReactRoot=container.nodeType===1&&container.hasAttribute(ROOT_ATTR_NAME);if(process.env.NODE_ENV!=='production'){process.env.NODE_ENV!=='production'?warning(!containerHasNonRootReactChild,'unmountComponentAtNode(): The node you\'re attempting to unmount '+'was rendered by React and is not a top-level container. %s',isContainerReactRoot?'You may have accidentally passed in a React root node instead '+'of its container.':'Instead, have the parent component update its state and '+'rerender in order to remove this component.'):void 0;}return false;}delete instancesByReactRootID[prevComponent._instance.rootID];ReactUpdates.batchedUpdates(unmountComponentFromNode,prevComponent,container,false);return true;},_mountImageIntoNode:function _mountImageIntoNode(markup,container,instance,shouldReuseMarkup,transaction){!isValidContainer(container)?process.env.NODE_ENV!=='production'?invariant(false,'mountComponentIntoNode(...): Target container is not valid.'):_prodInvariant('41'):void 0;if(shouldReuseMarkup){var rootElement=getReactRootElementInContainer(container);if(ReactMarkupChecksum.canReuseMarkup(markup,rootElement)){ReactDOMComponentTree.precacheNode(instance,rootElement);return;}else{var checksum=rootElement.getAttribute(ReactMarkupChecksum.CHECKSUM_ATTR_NAME);rootElement.removeAttribute(ReactMarkupChecksum.CHECKSUM_ATTR_NAME);var rootMarkup=rootElement.outerHTML;rootElement.setAttribute(ReactMarkupChecksum.CHECKSUM_ATTR_NAME,checksum);var normalizedMarkup=markup;if(process.env.NODE_ENV!=='production'){// because rootMarkup is retrieved from the DOM, various normalizations
// will have occurred which will not be present in `markup`. Here,
// insert markup into a <div> or <iframe> depending on the container
// type to perform the same normalizations before comparing.
var normalizer;if(container.nodeType===ELEMENT_NODE_TYPE){normalizer=document.createElement('div');normalizer.innerHTML=markup;normalizedMarkup=normalizer.innerHTML;}else{normalizer=document.createElement('iframe');document.body.appendChild(normalizer);normalizer.contentDocument.write(markup);normalizedMarkup=normalizer.contentDocument.documentElement.outerHTML;document.body.removeChild(normalizer);}}var diffIndex=firstDifferenceIndex(normalizedMarkup,rootMarkup);var difference=' (client) '+normalizedMarkup.substring(diffIndex-20,diffIndex+20)+'\n (server) '+rootMarkup.substring(diffIndex-20,diffIndex+20);!(container.nodeType!==DOC_NODE_TYPE)?process.env.NODE_ENV!=='production'?invariant(false,'You\'re trying to render a component to the document using server rendering but the checksum was invalid. This usually means you rendered a different component type or props on the client from the one on the server, or your render() methods are impure. React cannot handle this case due to cross-browser quirks by rendering at the document root. You should look for environment dependent code in your components and ensure the props are the same client and server side:\n%s',difference):_prodInvariant('42',difference):void 0;if(process.env.NODE_ENV!=='production'){process.env.NODE_ENV!=='production'?warning(false,'React attempted to reuse markup in a container but the '+'checksum was invalid. This generally means that you are '+'using server rendering and the markup generated on the '+'server was not what the client was expecting. React injected '+'new markup to compensate which works but you have lost many '+'of the benefits of server rendering. Instead, figure out '+'why the markup being generated is different on the client '+'or server:\n%s',difference):void 0;}}}!(container.nodeType!==DOC_NODE_TYPE)?process.env.NODE_ENV!=='production'?invariant(false,'You\'re trying to render a component to the document but you didn\'t use server rendering. We can\'t do this without using server rendering due to cross-browser quirks. See ReactDOMServer.renderToString() for server rendering.'):_prodInvariant('43'):void 0;if(transaction.useCreateElement){while(container.lastChild){container.removeChild(container.lastChild);}DOMLazyTree.insertTreeBefore(container,markup,null);}else{setInnerHTML(container,markup);ReactDOMComponentTree.precacheNode(instance,container.firstChild);}if(process.env.NODE_ENV!=='production'){var hostNode=ReactDOMComponentTree.getInstanceFromNode(container.firstChild);if(hostNode._debugID!==0){ReactInstrumentation.debugTool.onHostOperation(hostNode._debugID,'mount',markup.toString());}}}};module.exports=ReactMount;}).call(this,require('_process'));},{"./DOMLazyTree":86,"./DOMProperty":88,"./ReactBrowserEventEmitter":105,"./ReactCurrentOwner":115,"./ReactDOMComponentTree":120,"./ReactDOMContainerInfo":121,"./ReactDOMFeatureFlags":124,"./ReactElement":138,"./ReactFeatureFlags":144,"./ReactInstanceMap":150,"./ReactInstrumentation":151,"./ReactMarkupChecksum":153,"./ReactReconciler":166,"./ReactUpdateQueue":172,"./ReactUpdates":173,"./instantiateReactComponent":212,"./reactProdInvariant":217,"./setInnerHTML":219,"./shouldUpdateReactComponent":222,"_process":3,"fbjs/lib/emptyObject":52,"fbjs/lib/invariant":59,"fbjs/lib/warning":68}],155:[function(require,module,exports){(function(process){/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactMultiChild
 */'use strict';var _prodInvariant=require('./reactProdInvariant');var ReactComponentEnvironment=require('./ReactComponentEnvironment');var ReactInstanceMap=require('./ReactInstanceMap');var ReactInstrumentation=require('./ReactInstrumentation');var ReactMultiChildUpdateTypes=require('./ReactMultiChildUpdateTypes');var ReactCurrentOwner=require('./ReactCurrentOwner');var ReactReconciler=require('./ReactReconciler');var ReactChildReconciler=require('./ReactChildReconciler');var emptyFunction=require('fbjs/lib/emptyFunction');var flattenChildren=require('./flattenChildren');var invariant=require('fbjs/lib/invariant');/**
 * Make an update for markup to be rendered and inserted at a supplied index.
 *
 * @param {string} markup Markup that renders into an element.
 * @param {number} toIndex Destination index.
 * @private
 */function makeInsertMarkup(markup,afterNode,toIndex){// NOTE: Null values reduce hidden classes.
return{type:ReactMultiChildUpdateTypes.INSERT_MARKUP,content:markup,fromIndex:null,fromNode:null,toIndex:toIndex,afterNode:afterNode};}/**
 * Make an update for moving an existing element to another index.
 *
 * @param {number} fromIndex Source index of the existing element.
 * @param {number} toIndex Destination index of the element.
 * @private
 */function makeMove(child,afterNode,toIndex){// NOTE: Null values reduce hidden classes.
return{type:ReactMultiChildUpdateTypes.MOVE_EXISTING,content:null,fromIndex:child._mountIndex,fromNode:ReactReconciler.getHostNode(child),toIndex:toIndex,afterNode:afterNode};}/**
 * Make an update for removing an element at an index.
 *
 * @param {number} fromIndex Index of the element to remove.
 * @private
 */function makeRemove(child,node){// NOTE: Null values reduce hidden classes.
return{type:ReactMultiChildUpdateTypes.REMOVE_NODE,content:null,fromIndex:child._mountIndex,fromNode:node,toIndex:null,afterNode:null};}/**
 * Make an update for setting the markup of a node.
 *
 * @param {string} markup Markup that renders into an element.
 * @private
 */function makeSetMarkup(markup){// NOTE: Null values reduce hidden classes.
return{type:ReactMultiChildUpdateTypes.SET_MARKUP,content:markup,fromIndex:null,fromNode:null,toIndex:null,afterNode:null};}/**
 * Make an update for setting the text content.
 *
 * @param {string} textContent Text content to set.
 * @private
 */function makeTextContent(textContent){// NOTE: Null values reduce hidden classes.
return{type:ReactMultiChildUpdateTypes.TEXT_CONTENT,content:textContent,fromIndex:null,fromNode:null,toIndex:null,afterNode:null};}/**
 * Push an update, if any, onto the queue. Creates a new queue if none is
 * passed and always returns the queue. Mutative.
 */function enqueue(queue,update){if(update){queue=queue||[];queue.push(update);}return queue;}/**
 * Processes any enqueued updates.
 *
 * @private
 */function processQueue(inst,updateQueue){ReactComponentEnvironment.processChildrenUpdates(inst,updateQueue);}var setChildrenForInstrumentation=emptyFunction;if(process.env.NODE_ENV!=='production'){var getDebugID=function getDebugID(inst){if(!inst._debugID){// Check for ART-like instances. TODO: This is silly/gross.
var internal;if(internal=ReactInstanceMap.get(inst)){inst=internal;}}return inst._debugID;};setChildrenForInstrumentation=function setChildrenForInstrumentation(children){var debugID=getDebugID(this);// TODO: React Native empty components are also multichild.
// This means they still get into this method but don't have _debugID.
if(debugID!==0){ReactInstrumentation.debugTool.onSetChildren(debugID,children?Object.keys(children).map(function(key){return children[key]._debugID;}):[]);}};}/**
 * ReactMultiChild are capable of reconciling multiple children.
 *
 * @class ReactMultiChild
 * @internal
 */var ReactMultiChild={/**
   * Provides common functionality for components that must reconcile multiple
   * children. This is used by `ReactDOMComponent` to mount, update, and
   * unmount child components.
   *
   * @lends {ReactMultiChild.prototype}
   */Mixin:{_reconcilerInstantiateChildren:function _reconcilerInstantiateChildren(nestedChildren,transaction,context){if(process.env.NODE_ENV!=='production'){var selfDebugID=getDebugID(this);if(this._currentElement){try{ReactCurrentOwner.current=this._currentElement._owner;return ReactChildReconciler.instantiateChildren(nestedChildren,transaction,context,selfDebugID);}finally{ReactCurrentOwner.current=null;}}}return ReactChildReconciler.instantiateChildren(nestedChildren,transaction,context);},_reconcilerUpdateChildren:function _reconcilerUpdateChildren(prevChildren,nextNestedChildrenElements,mountImages,removedNodes,transaction,context){var nextChildren;var selfDebugID=0;if(process.env.NODE_ENV!=='production'){selfDebugID=getDebugID(this);if(this._currentElement){try{ReactCurrentOwner.current=this._currentElement._owner;nextChildren=flattenChildren(nextNestedChildrenElements,selfDebugID);}finally{ReactCurrentOwner.current=null;}ReactChildReconciler.updateChildren(prevChildren,nextChildren,mountImages,removedNodes,transaction,this,this._hostContainerInfo,context,selfDebugID);return nextChildren;}}nextChildren=flattenChildren(nextNestedChildrenElements,selfDebugID);ReactChildReconciler.updateChildren(prevChildren,nextChildren,mountImages,removedNodes,transaction,this,this._hostContainerInfo,context,selfDebugID);return nextChildren;},/**
     * Generates a "mount image" for each of the supplied children. In the case
     * of `ReactDOMComponent`, a mount image is a string of markup.
     *
     * @param {?object} nestedChildren Nested child maps.
     * @return {array} An array of mounted representations.
     * @internal
     */mountChildren:function mountChildren(nestedChildren,transaction,context){var children=this._reconcilerInstantiateChildren(nestedChildren,transaction,context);this._renderedChildren=children;var mountImages=[];var index=0;for(var name in children){if(children.hasOwnProperty(name)){var child=children[name];var selfDebugID=0;if(process.env.NODE_ENV!=='production'){selfDebugID=getDebugID(this);}var mountImage=ReactReconciler.mountComponent(child,transaction,this,this._hostContainerInfo,context,selfDebugID);child._mountIndex=index++;mountImages.push(mountImage);}}if(process.env.NODE_ENV!=='production'){setChildrenForInstrumentation.call(this,children);}return mountImages;},/**
     * Replaces any rendered children with a text content string.
     *
     * @param {string} nextContent String of content.
     * @internal
     */updateTextContent:function updateTextContent(nextContent){var prevChildren=this._renderedChildren;// Remove any rendered children.
ReactChildReconciler.unmountChildren(prevChildren,false);for(var name in prevChildren){if(prevChildren.hasOwnProperty(name)){!false?process.env.NODE_ENV!=='production'?invariant(false,'updateTextContent called on non-empty component.'):_prodInvariant('118'):void 0;}}// Set new text content.
var updates=[makeTextContent(nextContent)];processQueue(this,updates);},/**
     * Replaces any rendered children with a markup string.
     *
     * @param {string} nextMarkup String of markup.
     * @internal
     */updateMarkup:function updateMarkup(nextMarkup){var prevChildren=this._renderedChildren;// Remove any rendered children.
ReactChildReconciler.unmountChildren(prevChildren,false);for(var name in prevChildren){if(prevChildren.hasOwnProperty(name)){!false?process.env.NODE_ENV!=='production'?invariant(false,'updateTextContent called on non-empty component.'):_prodInvariant('118'):void 0;}}var updates=[makeSetMarkup(nextMarkup)];processQueue(this,updates);},/**
     * Updates the rendered children with new children.
     *
     * @param {?object} nextNestedChildrenElements Nested child element maps.
     * @param {ReactReconcileTransaction} transaction
     * @internal
     */updateChildren:function updateChildren(nextNestedChildrenElements,transaction,context){// Hook used by React ART
this._updateChildren(nextNestedChildrenElements,transaction,context);},/**
     * @param {?object} nextNestedChildrenElements Nested child element maps.
     * @param {ReactReconcileTransaction} transaction
     * @final
     * @protected
     */_updateChildren:function _updateChildren(nextNestedChildrenElements,transaction,context){var prevChildren=this._renderedChildren;var removedNodes={};var mountImages=[];var nextChildren=this._reconcilerUpdateChildren(prevChildren,nextNestedChildrenElements,mountImages,removedNodes,transaction,context);if(!nextChildren&&!prevChildren){return;}var updates=null;var name;// `nextIndex` will increment for each child in `nextChildren`, but
// `lastIndex` will be the last index visited in `prevChildren`.
var nextIndex=0;var lastIndex=0;// `nextMountIndex` will increment for each newly mounted child.
var nextMountIndex=0;var lastPlacedNode=null;for(name in nextChildren){if(!nextChildren.hasOwnProperty(name)){continue;}var prevChild=prevChildren&&prevChildren[name];var nextChild=nextChildren[name];if(prevChild===nextChild){updates=enqueue(updates,this.moveChild(prevChild,lastPlacedNode,nextIndex,lastIndex));lastIndex=Math.max(prevChild._mountIndex,lastIndex);prevChild._mountIndex=nextIndex;}else{if(prevChild){// Update `lastIndex` before `_mountIndex` gets unset by unmounting.
lastIndex=Math.max(prevChild._mountIndex,lastIndex);// The `removedNodes` loop below will actually remove the child.
}// The child must be instantiated before it's mounted.
updates=enqueue(updates,this._mountChildAtIndex(nextChild,mountImages[nextMountIndex],lastPlacedNode,nextIndex,transaction,context));nextMountIndex++;}nextIndex++;lastPlacedNode=ReactReconciler.getHostNode(nextChild);}// Remove children that are no longer present.
for(name in removedNodes){if(removedNodes.hasOwnProperty(name)){updates=enqueue(updates,this._unmountChild(prevChildren[name],removedNodes[name]));}}if(updates){processQueue(this,updates);}this._renderedChildren=nextChildren;if(process.env.NODE_ENV!=='production'){setChildrenForInstrumentation.call(this,nextChildren);}},/**
     * Unmounts all rendered children. This should be used to clean up children
     * when this component is unmounted. It does not actually perform any
     * backend operations.
     *
     * @internal
     */unmountChildren:function unmountChildren(safely){var renderedChildren=this._renderedChildren;ReactChildReconciler.unmountChildren(renderedChildren,safely);this._renderedChildren=null;},/**
     * Moves a child component to the supplied index.
     *
     * @param {ReactComponent} child Component to move.
     * @param {number} toIndex Destination index of the element.
     * @param {number} lastIndex Last index visited of the siblings of `child`.
     * @protected
     */moveChild:function moveChild(child,afterNode,toIndex,lastIndex){// If the index of `child` is less than `lastIndex`, then it needs to
// be moved. Otherwise, we do not need to move it because a child will be
// inserted or moved before `child`.
if(child._mountIndex<lastIndex){return makeMove(child,afterNode,toIndex);}},/**
     * Creates a child component.
     *
     * @param {ReactComponent} child Component to create.
     * @param {string} mountImage Markup to insert.
     * @protected
     */createChild:function createChild(child,afterNode,mountImage){return makeInsertMarkup(mountImage,afterNode,child._mountIndex);},/**
     * Removes a child component.
     *
     * @param {ReactComponent} child Child to remove.
     * @protected
     */removeChild:function removeChild(child,node){return makeRemove(child,node);},/**
     * Mounts a child with the supplied name.
     *
     * NOTE: This is part of `updateChildren` and is here for readability.
     *
     * @param {ReactComponent} child Component to mount.
     * @param {string} name Name of the child.
     * @param {number} index Index at which to insert the child.
     * @param {ReactReconcileTransaction} transaction
     * @private
     */_mountChildAtIndex:function _mountChildAtIndex(child,mountImage,afterNode,index,transaction,context){child._mountIndex=index;return this.createChild(child,afterNode,mountImage);},/**
     * Unmounts a rendered child.
     *
     * NOTE: This is part of `updateChildren` and is here for readability.
     *
     * @param {ReactComponent} child Component to unmount.
     * @private
     */_unmountChild:function _unmountChild(child,node){var update=this.removeChild(child,node);child._mountIndex=null;return update;}}};module.exports=ReactMultiChild;}).call(this,require('_process'));},{"./ReactChildReconciler":106,"./ReactComponentEnvironment":112,"./ReactCurrentOwner":115,"./ReactInstanceMap":150,"./ReactInstrumentation":151,"./ReactMultiChildUpdateTypes":156,"./ReactReconciler":166,"./flattenChildren":201,"./reactProdInvariant":217,"_process":3,"fbjs/lib/emptyFunction":51,"fbjs/lib/invariant":59}],156:[function(require,module,exports){/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactMultiChildUpdateTypes
 */'use strict';var keyMirror=require('fbjs/lib/keyMirror');/**
 * When a component's children are updated, a series of update configuration
 * objects are created in order to batch and serialize the required changes.
 *
 * Enumerates all the possible types of update configurations.
 *
 * @internal
 */var ReactMultiChildUpdateTypes=keyMirror({INSERT_MARKUP:null,MOVE_EXISTING:null,REMOVE_NODE:null,SET_MARKUP:null,TEXT_CONTENT:null});module.exports=ReactMultiChildUpdateTypes;},{"fbjs/lib/keyMirror":62}],157:[function(require,module,exports){(function(process){/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactNodeTypes
 * 
 */'use strict';var _prodInvariant=require('./reactProdInvariant');var ReactElement=require('./ReactElement');var invariant=require('fbjs/lib/invariant');var ReactNodeTypes={HOST:0,COMPOSITE:1,EMPTY:2,getType:function getType(node){if(node===null||node===false){return ReactNodeTypes.EMPTY;}else if(ReactElement.isValidElement(node)){if(typeof node.type==='function'){return ReactNodeTypes.COMPOSITE;}else{return ReactNodeTypes.HOST;}}!false?process.env.NODE_ENV!=='production'?invariant(false,'Unexpected node: %s',node):_prodInvariant('26',node):void 0;}};module.exports=ReactNodeTypes;}).call(this,require('_process'));},{"./ReactElement":138,"./reactProdInvariant":217,"_process":3,"fbjs/lib/invariant":59}],158:[function(require,module,exports){(function(process){/**
 * Copyright 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactNoopUpdateQueue
 */'use strict';var warning=require('fbjs/lib/warning');function warnNoop(publicInstance,callerName){if(process.env.NODE_ENV!=='production'){var constructor=publicInstance.constructor;process.env.NODE_ENV!=='production'?warning(false,'%s(...): Can only update a mounted or mounting component. '+'This usually means you called %s() on an unmounted component. '+'This is a no-op. Please check the code for the %s component.',callerName,callerName,constructor&&(constructor.displayName||constructor.name)||'ReactClass'):void 0;}}/**
 * This is the abstract API for an update queue.
 */var ReactNoopUpdateQueue={/**
   * Checks whether or not this composite component is mounted.
   * @param {ReactClass} publicInstance The instance we want to test.
   * @return {boolean} True if mounted, false otherwise.
   * @protected
   * @final
   */isMounted:function isMounted(publicInstance){return false;},/**
   * Enqueue a callback that will be executed after all the pending updates
   * have processed.
   *
   * @param {ReactClass} publicInstance The instance to use as `this` context.
   * @param {?function} callback Called after state is updated.
   * @internal
   */enqueueCallback:function enqueueCallback(publicInstance,callback){},/**
   * Forces an update. This should only be invoked when it is known with
   * certainty that we are **not** in a DOM transaction.
   *
   * You may want to call this when you know that some deeper aspect of the
   * component's state has changed but `setState` was not called.
   *
   * This will not invoke `shouldComponentUpdate`, but it will invoke
   * `componentWillUpdate` and `componentDidUpdate`.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @internal
   */enqueueForceUpdate:function enqueueForceUpdate(publicInstance){warnNoop(publicInstance,'forceUpdate');},/**
   * Replaces all of the state. Always use this or `setState` to mutate state.
   * You should treat `this.state` as immutable.
   *
   * There is no guarantee that `this.state` will be immediately updated, so
   * accessing `this.state` after calling this method may return the old value.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {object} completeState Next state.
   * @internal
   */enqueueReplaceState:function enqueueReplaceState(publicInstance,completeState){warnNoop(publicInstance,'replaceState');},/**
   * Sets a subset of the state. This only exists because _pendingState is
   * internal. This provides a merging strategy that is not available to deep
   * properties which is confusing. TODO: Expose pendingState or don't use it
   * during the merge.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {object} partialState Next partial state to be merged with state.
   * @internal
   */enqueueSetState:function enqueueSetState(publicInstance,partialState){warnNoop(publicInstance,'setState');}};module.exports=ReactNoopUpdateQueue;}).call(this,require('_process'));},{"_process":3,"fbjs/lib/warning":68}],159:[function(require,module,exports){(function(process){/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactOwner
 */'use strict';var _prodInvariant=require('./reactProdInvariant');var invariant=require('fbjs/lib/invariant');/**
 * ReactOwners are capable of storing references to owned components.
 *
 * All components are capable of //being// referenced by owner components, but
 * only ReactOwner components are capable of //referencing// owned components.
 * The named reference is known as a "ref".
 *
 * Refs are available when mounted and updated during reconciliation.
 *
 *   var MyComponent = React.createClass({
 *     render: function() {
 *       return (
 *         <div onClick={this.handleClick}>
 *           <CustomComponent ref="custom" />
 *         </div>
 *       );
 *     },
 *     handleClick: function() {
 *       this.refs.custom.handleClick();
 *     },
 *     componentDidMount: function() {
 *       this.refs.custom.initialize();
 *     }
 *   });
 *
 * Refs should rarely be used. When refs are used, they should only be done to
 * control data that is not handled by React's data flow.
 *
 * @class ReactOwner
 */var ReactOwner={/**
   * @param {?object} object
   * @return {boolean} True if `object` is a valid owner.
   * @final
   */isValidOwner:function isValidOwner(object){return!!(object&&typeof object.attachRef==='function'&&typeof object.detachRef==='function');},/**
   * Adds a component by ref to an owner component.
   *
   * @param {ReactComponent} component Component to reference.
   * @param {string} ref Name by which to refer to the component.
   * @param {ReactOwner} owner Component on which to record the ref.
   * @final
   * @internal
   */addComponentAsRefTo:function addComponentAsRefTo(component,ref,owner){!ReactOwner.isValidOwner(owner)?process.env.NODE_ENV!=='production'?invariant(false,'addComponentAsRefTo(...): Only a ReactOwner can have refs. You might be adding a ref to a component that was not created inside a component\'s `render` method, or you have multiple copies of React loaded (details: https://fb.me/react-refs-must-have-owner).'):_prodInvariant('119'):void 0;owner.attachRef(ref,component);},/**
   * Removes a component by ref from an owner component.
   *
   * @param {ReactComponent} component Component to dereference.
   * @param {string} ref Name of the ref to remove.
   * @param {ReactOwner} owner Component on which the ref is recorded.
   * @final
   * @internal
   */removeComponentAsRefFrom:function removeComponentAsRefFrom(component,ref,owner){!ReactOwner.isValidOwner(owner)?process.env.NODE_ENV!=='production'?invariant(false,'removeComponentAsRefFrom(...): Only a ReactOwner can have refs. You might be removing a ref to a component that was not created inside a component\'s `render` method, or you have multiple copies of React loaded (details: https://fb.me/react-refs-must-have-owner).'):_prodInvariant('120'):void 0;var ownerPublicInstance=owner.getPublicInstance();// Check that `component`'s owner is still alive and that `component` is still the current ref
// because we do not want to detach the ref if another component stole it.
if(ownerPublicInstance&&ownerPublicInstance.refs[ref]===component.getPublicInstance()){owner.detachRef(ref);}}};module.exports=ReactOwner;}).call(this,require('_process'));},{"./reactProdInvariant":217,"_process":3,"fbjs/lib/invariant":59}],160:[function(require,module,exports){(function(process){/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactPropTypeLocationNames
 */'use strict';var ReactPropTypeLocationNames={};if(process.env.NODE_ENV!=='production'){ReactPropTypeLocationNames={prop:'prop',context:'context',childContext:'child context'};}module.exports=ReactPropTypeLocationNames;}).call(this,require('_process'));},{"_process":3}],161:[function(require,module,exports){/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactPropTypeLocations
 */'use strict';var keyMirror=require('fbjs/lib/keyMirror');var ReactPropTypeLocations=keyMirror({prop:null,context:null,childContext:null});module.exports=ReactPropTypeLocations;},{"fbjs/lib/keyMirror":62}],162:[function(require,module,exports){(function(process){/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactPropTypes
 */'use strict';var ReactElement=require('./ReactElement');var ReactPropTypeLocationNames=require('./ReactPropTypeLocationNames');var ReactPropTypesSecret=require('./ReactPropTypesSecret');var emptyFunction=require('fbjs/lib/emptyFunction');var getIteratorFn=require('./getIteratorFn');var warning=require('fbjs/lib/warning');/**
 * Collection of methods that allow declaration and validation of props that are
 * supplied to React components. Example usage:
 *
 *   var Props = require('ReactPropTypes');
 *   var MyArticle = React.createClass({
 *     propTypes: {
 *       // An optional string prop named "description".
 *       description: Props.string,
 *
 *       // A required enum prop named "category".
 *       category: Props.oneOf(['News','Photos']).isRequired,
 *
 *       // A prop named "dialog" that requires an instance of Dialog.
 *       dialog: Props.instanceOf(Dialog).isRequired
 *     },
 *     render: function() { ... }
 *   });
 *
 * A more formal specification of how these methods are used:
 *
 *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
 *   decl := ReactPropTypes.{type}(.isRequired)?
 *
 * Each and every declaration produces a function with the same signature. This
 * allows the creation of custom validation functions. For example:
 *
 *  var MyLink = React.createClass({
 *    propTypes: {
 *      // An optional string or URI prop named "href".
 *      href: function(props, propName, componentName) {
 *        var propValue = props[propName];
 *        if (propValue != null && typeof propValue !== 'string' &&
 *            !(propValue instanceof URI)) {
 *          return new Error(
 *            'Expected a string or an URI for ' + propName + ' in ' +
 *            componentName
 *          );
 *        }
 *      }
 *    },
 *    render: function() {...}
 *  });
 *
 * @internal
 */var ANONYMOUS='<<anonymous>>';var ReactPropTypes={array:createPrimitiveTypeChecker('array'),bool:createPrimitiveTypeChecker('boolean'),func:createPrimitiveTypeChecker('function'),number:createPrimitiveTypeChecker('number'),object:createPrimitiveTypeChecker('object'),string:createPrimitiveTypeChecker('string'),symbol:createPrimitiveTypeChecker('symbol'),any:createAnyTypeChecker(),arrayOf:createArrayOfTypeChecker,element:createElementTypeChecker(),instanceOf:createInstanceTypeChecker,node:createNodeChecker(),objectOf:createObjectOfTypeChecker,oneOf:createEnumTypeChecker,oneOfType:createUnionTypeChecker,shape:createShapeTypeChecker};/**
 * inlined Object.is polyfill to avoid requiring consumers ship their own
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
 *//*eslint-disable no-self-compare*/function is(x,y){// SameValue algorithm
if(x===y){// Steps 1-5, 7-10
// Steps 6.b-6.e: +0 != -0
return x!==0||1/x===1/y;}else{// Step 6.a: NaN == NaN
return x!==x&&y!==y;}}/*eslint-enable no-self-compare*//**
 * We use an Error-like object for backward compatibility as people may call
 * PropTypes directly and inspect their output. However we don't use real
 * Errors anymore. We don't inspect their stack anyway, and creating them
 * is prohibitively expensive if they are created too often, such as what
 * happens in oneOfType() for any type before the one that matched.
 */function PropTypeError(message){this.message=message;this.stack='';}// Make `instanceof Error` still work for returned errors.
PropTypeError.prototype=Error.prototype;function createChainableTypeChecker(validate){if(process.env.NODE_ENV!=='production'){var manualPropTypeCallCache={};}function checkType(isRequired,props,propName,componentName,location,propFullName,secret){componentName=componentName||ANONYMOUS;propFullName=propFullName||propName;if(process.env.NODE_ENV!=='production'){if(secret!==ReactPropTypesSecret&&typeof console!=='undefined'){var cacheKey=componentName+':'+propName;if(!manualPropTypeCallCache[cacheKey]){process.env.NODE_ENV!=='production'?warning(false,'You are manually calling a React.PropTypes validation '+'function for the `%s` prop on `%s`. This is deprecated '+'and will not work in the next major version. You may be '+'seeing this warning due to a third-party PropTypes library. '+'See https://fb.me/react-warning-dont-call-proptypes for details.',propFullName,componentName):void 0;manualPropTypeCallCache[cacheKey]=true;}}}if(props[propName]==null){var locationName=ReactPropTypeLocationNames[location];if(isRequired){return new PropTypeError('Required '+locationName+' `'+propFullName+'` was not specified in '+('`'+componentName+'`.'));}return null;}else{return validate(props,propName,componentName,location,propFullName);}}var chainedCheckType=checkType.bind(null,false);chainedCheckType.isRequired=checkType.bind(null,true);return chainedCheckType;}function createPrimitiveTypeChecker(expectedType){function validate(props,propName,componentName,location,propFullName,secret){var propValue=props[propName];var propType=getPropType(propValue);if(propType!==expectedType){var locationName=ReactPropTypeLocationNames[location];// `propValue` being instance of, say, date/regexp, pass the 'object'
// check, but we can offer a more precise error message here rather than
// 'of type `object`'.
var preciseType=getPreciseType(propValue);return new PropTypeError('Invalid '+locationName+' `'+propFullName+'` of type '+('`'+preciseType+'` supplied to `'+componentName+'`, expected ')+('`'+expectedType+'`.'));}return null;}return createChainableTypeChecker(validate);}function createAnyTypeChecker(){return createChainableTypeChecker(emptyFunction.thatReturns(null));}function createArrayOfTypeChecker(typeChecker){function validate(props,propName,componentName,location,propFullName){if(typeof typeChecker!=='function'){return new PropTypeError('Property `'+propFullName+'` of component `'+componentName+'` has invalid PropType notation inside arrayOf.');}var propValue=props[propName];if(!Array.isArray(propValue)){var locationName=ReactPropTypeLocationNames[location];var propType=getPropType(propValue);return new PropTypeError('Invalid '+locationName+' `'+propFullName+'` of type '+('`'+propType+'` supplied to `'+componentName+'`, expected an array.'));}for(var i=0;i<propValue.length;i++){var error=typeChecker(propValue,i,componentName,location,propFullName+'['+i+']',ReactPropTypesSecret);if(error instanceof Error){return error;}}return null;}return createChainableTypeChecker(validate);}function createElementTypeChecker(){function validate(props,propName,componentName,location,propFullName){var propValue=props[propName];if(!ReactElement.isValidElement(propValue)){var locationName=ReactPropTypeLocationNames[location];var propType=getPropType(propValue);return new PropTypeError('Invalid '+locationName+' `'+propFullName+'` of type '+('`'+propType+'` supplied to `'+componentName+'`, expected a single ReactElement.'));}return null;}return createChainableTypeChecker(validate);}function createInstanceTypeChecker(expectedClass){function validate(props,propName,componentName,location,propFullName){if(!(props[propName]instanceof expectedClass)){var locationName=ReactPropTypeLocationNames[location];var expectedClassName=expectedClass.name||ANONYMOUS;var actualClassName=getClassName(props[propName]);return new PropTypeError('Invalid '+locationName+' `'+propFullName+'` of type '+('`'+actualClassName+'` supplied to `'+componentName+'`, expected ')+('instance of `'+expectedClassName+'`.'));}return null;}return createChainableTypeChecker(validate);}function createEnumTypeChecker(expectedValues){if(!Array.isArray(expectedValues)){process.env.NODE_ENV!=='production'?warning(false,'Invalid argument supplied to oneOf, expected an instance of array.'):void 0;return emptyFunction.thatReturnsNull;}function validate(props,propName,componentName,location,propFullName){var propValue=props[propName];for(var i=0;i<expectedValues.length;i++){if(is(propValue,expectedValues[i])){return null;}}var locationName=ReactPropTypeLocationNames[location];var valuesString=JSON.stringify(expectedValues);return new PropTypeError('Invalid '+locationName+' `'+propFullName+'` of value `'+propValue+'` '+('supplied to `'+componentName+'`, expected one of '+valuesString+'.'));}return createChainableTypeChecker(validate);}function createObjectOfTypeChecker(typeChecker){function validate(props,propName,componentName,location,propFullName){if(typeof typeChecker!=='function'){return new PropTypeError('Property `'+propFullName+'` of component `'+componentName+'` has invalid PropType notation inside objectOf.');}var propValue=props[propName];var propType=getPropType(propValue);if(propType!=='object'){var locationName=ReactPropTypeLocationNames[location];return new PropTypeError('Invalid '+locationName+' `'+propFullName+'` of type '+('`'+propType+'` supplied to `'+componentName+'`, expected an object.'));}for(var key in propValue){if(propValue.hasOwnProperty(key)){var error=typeChecker(propValue,key,componentName,location,propFullName+'.'+key,ReactPropTypesSecret);if(error instanceof Error){return error;}}}return null;}return createChainableTypeChecker(validate);}function createUnionTypeChecker(arrayOfTypeCheckers){if(!Array.isArray(arrayOfTypeCheckers)){process.env.NODE_ENV!=='production'?warning(false,'Invalid argument supplied to oneOfType, expected an instance of array.'):void 0;return emptyFunction.thatReturnsNull;}function validate(props,propName,componentName,location,propFullName){for(var i=0;i<arrayOfTypeCheckers.length;i++){var checker=arrayOfTypeCheckers[i];if(checker(props,propName,componentName,location,propFullName,ReactPropTypesSecret)==null){return null;}}var locationName=ReactPropTypeLocationNames[location];return new PropTypeError('Invalid '+locationName+' `'+propFullName+'` supplied to '+('`'+componentName+'`.'));}return createChainableTypeChecker(validate);}function createNodeChecker(){function validate(props,propName,componentName,location,propFullName){if(!isNode(props[propName])){var locationName=ReactPropTypeLocationNames[location];return new PropTypeError('Invalid '+locationName+' `'+propFullName+'` supplied to '+('`'+componentName+'`, expected a ReactNode.'));}return null;}return createChainableTypeChecker(validate);}function createShapeTypeChecker(shapeTypes){function validate(props,propName,componentName,location,propFullName){var propValue=props[propName];var propType=getPropType(propValue);if(propType!=='object'){var locationName=ReactPropTypeLocationNames[location];return new PropTypeError('Invalid '+locationName+' `'+propFullName+'` of type `'+propType+'` '+('supplied to `'+componentName+'`, expected `object`.'));}for(var key in shapeTypes){var checker=shapeTypes[key];if(!checker){continue;}var error=checker(propValue,key,componentName,location,propFullName+'.'+key,ReactPropTypesSecret);if(error){return error;}}return null;}return createChainableTypeChecker(validate);}function isNode(propValue){switch(typeof propValue==="undefined"?"undefined":_typeof4(propValue)){case'number':case'string':case'undefined':return true;case'boolean':return!propValue;case'object':if(Array.isArray(propValue)){return propValue.every(isNode);}if(propValue===null||ReactElement.isValidElement(propValue)){return true;}var iteratorFn=getIteratorFn(propValue);if(iteratorFn){var iterator=iteratorFn.call(propValue);var step;if(iteratorFn!==propValue.entries){while(!(step=iterator.next()).done){if(!isNode(step.value)){return false;}}}else{// Iterator will provide entry [k,v] tuples rather than values.
while(!(step=iterator.next()).done){var entry=step.value;if(entry){if(!isNode(entry[1])){return false;}}}}}else{return false;}return true;default:return false;}}function isSymbol(propType,propValue){// Native Symbol.
if(propType==='symbol'){return true;}// 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
if(propValue['@@toStringTag']==='Symbol'){return true;}// Fallback for non-spec compliant Symbols which are polyfilled.
if(typeof Symbol==='function'&&propValue instanceof Symbol){return true;}return false;}// Equivalent of `typeof` but with special handling for array and regexp.
function getPropType(propValue){var propType=typeof propValue==="undefined"?"undefined":_typeof4(propValue);if(Array.isArray(propValue)){return'array';}if(propValue instanceof RegExp){// Old webkits (at least until Android 4.0) return 'function' rather than
// 'object' for typeof a RegExp. We'll normalize this here so that /bla/
// passes PropTypes.object.
return'object';}if(isSymbol(propType,propValue)){return'symbol';}return propType;}// This handles more types than `getPropType`. Only used for error messages.
// See `createPrimitiveTypeChecker`.
function getPreciseType(propValue){var propType=getPropType(propValue);if(propType==='object'){if(propValue instanceof Date){return'date';}else if(propValue instanceof RegExp){return'regexp';}}return propType;}// Returns class name of the object, if any.
function getClassName(propValue){if(!propValue.constructor||!propValue.constructor.name){return ANONYMOUS;}return propValue.constructor.name;}module.exports=ReactPropTypes;}).call(this,require('_process'));},{"./ReactElement":138,"./ReactPropTypeLocationNames":160,"./ReactPropTypesSecret":163,"./getIteratorFn":208,"_process":3,"fbjs/lib/emptyFunction":51,"fbjs/lib/warning":68}],163:[function(require,module,exports){/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactPropTypesSecret
 */'use strict';var ReactPropTypesSecret='SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';module.exports=ReactPropTypesSecret;},{}],164:[function(require,module,exports){/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactPureComponent
 */'use strict';var _assign=require('object-assign');var ReactComponent=require('./ReactComponent');var ReactNoopUpdateQueue=require('./ReactNoopUpdateQueue');var emptyObject=require('fbjs/lib/emptyObject');/**
 * Base class helpers for the updating state of a component.
 */function ReactPureComponent(props,context,updater){// Duplicated from ReactComponent.
this.props=props;this.context=context;this.refs=emptyObject;// We initialize the default updater but the real one gets injected by the
// renderer.
this.updater=updater||ReactNoopUpdateQueue;}function ComponentDummy(){}ComponentDummy.prototype=ReactComponent.prototype;ReactPureComponent.prototype=new ComponentDummy();ReactPureComponent.prototype.constructor=ReactPureComponent;// Avoid an extra prototype jump for these methods.
_assign(ReactPureComponent.prototype,ReactComponent.prototype);ReactPureComponent.prototype.isPureReactComponent=true;module.exports=ReactPureComponent;},{"./ReactComponent":110,"./ReactNoopUpdateQueue":158,"fbjs/lib/emptyObject":52,"object-assign":344}],165:[function(require,module,exports){(function(process){/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactReconcileTransaction
 */'use strict';var _assign=require('object-assign');var CallbackQueue=require('./CallbackQueue');var PooledClass=require('./PooledClass');var ReactBrowserEventEmitter=require('./ReactBrowserEventEmitter');var ReactInputSelection=require('./ReactInputSelection');var ReactInstrumentation=require('./ReactInstrumentation');var Transaction=require('./Transaction');var ReactUpdateQueue=require('./ReactUpdateQueue');/**
 * Ensures that, when possible, the selection range (currently selected text
 * input) is not disturbed by performing the transaction.
 */var SELECTION_RESTORATION={/**
   * @return {Selection} Selection information.
   */initialize:ReactInputSelection.getSelectionInformation,/**
   * @param {Selection} sel Selection information returned from `initialize`.
   */close:ReactInputSelection.restoreSelection};/**
 * Suppresses events (blur/focus) that could be inadvertently dispatched due to
 * high level DOM manipulations (like temporarily removing a text input from the
 * DOM).
 */var EVENT_SUPPRESSION={/**
   * @return {boolean} The enabled status of `ReactBrowserEventEmitter` before
   * the reconciliation.
   */initialize:function initialize(){var currentlyEnabled=ReactBrowserEventEmitter.isEnabled();ReactBrowserEventEmitter.setEnabled(false);return currentlyEnabled;},/**
   * @param {boolean} previouslyEnabled Enabled status of
   *   `ReactBrowserEventEmitter` before the reconciliation occurred. `close`
   *   restores the previous value.
   */close:function close(previouslyEnabled){ReactBrowserEventEmitter.setEnabled(previouslyEnabled);}};/**
 * Provides a queue for collecting `componentDidMount` and
 * `componentDidUpdate` callbacks during the transaction.
 */var ON_DOM_READY_QUEUEING={/**
   * Initializes the internal `onDOMReady` queue.
   */initialize:function initialize(){this.reactMountReady.reset();},/**
   * After DOM is flushed, invoke all registered `onDOMReady` callbacks.
   */close:function close(){this.reactMountReady.notifyAll();}};/**
 * Executed within the scope of the `Transaction` instance. Consider these as
 * being member methods, but with an implied ordering while being isolated from
 * each other.
 */var TRANSACTION_WRAPPERS=[SELECTION_RESTORATION,EVENT_SUPPRESSION,ON_DOM_READY_QUEUEING];if(process.env.NODE_ENV!=='production'){TRANSACTION_WRAPPERS.push({initialize:ReactInstrumentation.debugTool.onBeginFlush,close:ReactInstrumentation.debugTool.onEndFlush});}/**
 * Currently:
 * - The order that these are listed in the transaction is critical:
 * - Suppresses events.
 * - Restores selection range.
 *
 * Future:
 * - Restore document/overflow scroll positions that were unintentionally
 *   modified via DOM insertions above the top viewport boundary.
 * - Implement/integrate with customized constraint based layout system and keep
 *   track of which dimensions must be remeasured.
 *
 * @class ReactReconcileTransaction
 */function ReactReconcileTransaction(useCreateElement){this.reinitializeTransaction();// Only server-side rendering really needs this option (see
// `ReactServerRendering`), but server-side uses
// `ReactServerRenderingTransaction` instead. This option is here so that it's
// accessible and defaults to false when `ReactDOMComponent` and
// `ReactDOMTextComponent` checks it in `mountComponent`.`
this.renderToStaticMarkup=false;this.reactMountReady=CallbackQueue.getPooled(null);this.useCreateElement=useCreateElement;}var Mixin={/**
   * @see Transaction
   * @abstract
   * @final
   * @return {array<object>} List of operation wrap procedures.
   *   TODO: convert to array<TransactionWrapper>
   */getTransactionWrappers:function getTransactionWrappers(){return TRANSACTION_WRAPPERS;},/**
   * @return {object} The queue to collect `onDOMReady` callbacks with.
   */getReactMountReady:function getReactMountReady(){return this.reactMountReady;},/**
   * @return {object} The queue to collect React async events.
   */getUpdateQueue:function getUpdateQueue(){return ReactUpdateQueue;},/**
   * Save current transaction state -- if the return value from this method is
   * passed to `rollback`, the transaction will be reset to that state.
   */checkpoint:function checkpoint(){// reactMountReady is the our only stateful wrapper
return this.reactMountReady.checkpoint();},rollback:function rollback(checkpoint){this.reactMountReady.rollback(checkpoint);},/**
   * `PooledClass` looks for this, and will invoke this before allowing this
   * instance to be reused.
   */destructor:function destructor(){CallbackQueue.release(this.reactMountReady);this.reactMountReady=null;}};_assign(ReactReconcileTransaction.prototype,Transaction.Mixin,Mixin);PooledClass.addPoolingTo(ReactReconcileTransaction);module.exports=ReactReconcileTransaction;}).call(this,require('_process'));},{"./CallbackQueue":83,"./PooledClass":103,"./ReactBrowserEventEmitter":105,"./ReactInputSelection":149,"./ReactInstrumentation":151,"./ReactUpdateQueue":172,"./Transaction":191,"_process":3,"object-assign":344}],166:[function(require,module,exports){(function(process){/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactReconciler
 */'use strict';var ReactRef=require('./ReactRef');var ReactInstrumentation=require('./ReactInstrumentation');var warning=require('fbjs/lib/warning');/**
 * Helper to call ReactRef.attachRefs with this composite component, split out
 * to avoid allocations in the transaction mount-ready queue.
 */function attachRefs(){ReactRef.attachRefs(this,this._currentElement);}var ReactReconciler={/**
   * Initializes the component, renders markup, and registers event listeners.
   *
   * @param {ReactComponent} internalInstance
   * @param {ReactReconcileTransaction|ReactServerRenderingTransaction} transaction
   * @param {?object} the containing host component instance
   * @param {?object} info about the host container
   * @return {?string} Rendered markup to be inserted into the DOM.
   * @final
   * @internal
   */mountComponent:function mountComponent(internalInstance,transaction,hostParent,hostContainerInfo,context,parentDebugID// 0 in production and for roots
){if(process.env.NODE_ENV!=='production'){if(internalInstance._debugID!==0){ReactInstrumentation.debugTool.onBeforeMountComponent(internalInstance._debugID,internalInstance._currentElement,parentDebugID);}}var markup=internalInstance.mountComponent(transaction,hostParent,hostContainerInfo,context,parentDebugID);if(internalInstance._currentElement&&internalInstance._currentElement.ref!=null){transaction.getReactMountReady().enqueue(attachRefs,internalInstance);}if(process.env.NODE_ENV!=='production'){if(internalInstance._debugID!==0){ReactInstrumentation.debugTool.onMountComponent(internalInstance._debugID);}}return markup;},/**
   * Returns a value that can be passed to
   * ReactComponentEnvironment.replaceNodeWithMarkup.
   */getHostNode:function getHostNode(internalInstance){return internalInstance.getHostNode();},/**
   * Releases any resources allocated by `mountComponent`.
   *
   * @final
   * @internal
   */unmountComponent:function unmountComponent(internalInstance,safely){if(process.env.NODE_ENV!=='production'){if(internalInstance._debugID!==0){ReactInstrumentation.debugTool.onBeforeUnmountComponent(internalInstance._debugID);}}ReactRef.detachRefs(internalInstance,internalInstance._currentElement);internalInstance.unmountComponent(safely);if(process.env.NODE_ENV!=='production'){if(internalInstance._debugID!==0){ReactInstrumentation.debugTool.onUnmountComponent(internalInstance._debugID);}}},/**
   * Update a component using a new element.
   *
   * @param {ReactComponent} internalInstance
   * @param {ReactElement} nextElement
   * @param {ReactReconcileTransaction} transaction
   * @param {object} context
   * @internal
   */receiveComponent:function receiveComponent(internalInstance,nextElement,transaction,context){var prevElement=internalInstance._currentElement;if(nextElement===prevElement&&context===internalInstance._context){// Since elements are immutable after the owner is rendered,
// we can do a cheap identity compare here to determine if this is a
// superfluous reconcile. It's possible for state to be mutable but such
// change should trigger an update of the owner which would recreate
// the element. We explicitly check for the existence of an owner since
// it's possible for an element created outside a composite to be
// deeply mutated and reused.
// TODO: Bailing out early is just a perf optimization right?
// TODO: Removing the return statement should affect correctness?
return;}if(process.env.NODE_ENV!=='production'){if(internalInstance._debugID!==0){ReactInstrumentation.debugTool.onBeforeUpdateComponent(internalInstance._debugID,nextElement);}}var refsChanged=ReactRef.shouldUpdateRefs(prevElement,nextElement);if(refsChanged){ReactRef.detachRefs(internalInstance,prevElement);}internalInstance.receiveComponent(nextElement,transaction,context);if(refsChanged&&internalInstance._currentElement&&internalInstance._currentElement.ref!=null){transaction.getReactMountReady().enqueue(attachRefs,internalInstance);}if(process.env.NODE_ENV!=='production'){if(internalInstance._debugID!==0){ReactInstrumentation.debugTool.onUpdateComponent(internalInstance._debugID);}}},/**
   * Flush any dirty changes in a component.
   *
   * @param {ReactComponent} internalInstance
   * @param {ReactReconcileTransaction} transaction
   * @internal
   */performUpdateIfNecessary:function performUpdateIfNecessary(internalInstance,transaction,updateBatchNumber){if(internalInstance._updateBatchNumber!==updateBatchNumber){// The component's enqueued batch number should always be the current
// batch or the following one.
process.env.NODE_ENV!=='production'?warning(internalInstance._updateBatchNumber==null||internalInstance._updateBatchNumber===updateBatchNumber+1,'performUpdateIfNecessary: Unexpected batch number (current %s, '+'pending %s)',updateBatchNumber,internalInstance._updateBatchNumber):void 0;return;}if(process.env.NODE_ENV!=='production'){if(internalInstance._debugID!==0){ReactInstrumentation.debugTool.onBeforeUpdateComponent(internalInstance._debugID,internalInstance._currentElement);}}internalInstance.performUpdateIfNecessary(transaction);if(process.env.NODE_ENV!=='production'){if(internalInstance._debugID!==0){ReactInstrumentation.debugTool.onUpdateComponent(internalInstance._debugID);}}}};module.exports=ReactReconciler;}).call(this,require('_process'));},{"./ReactInstrumentation":151,"./ReactRef":167,"_process":3,"fbjs/lib/warning":68}],167:[function(require,module,exports){/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactRef
 */'use strict';var ReactOwner=require('./ReactOwner');var ReactRef={};function attachRef(ref,component,owner){if(typeof ref==='function'){ref(component.getPublicInstance());}else{// Legacy ref
ReactOwner.addComponentAsRefTo(component,ref,owner);}}function detachRef(ref,component,owner){if(typeof ref==='function'){ref(null);}else{// Legacy ref
ReactOwner.removeComponentAsRefFrom(component,ref,owner);}}ReactRef.attachRefs=function(instance,element){if(element===null||element===false){return;}var ref=element.ref;if(ref!=null){attachRef(ref,instance,element._owner);}};ReactRef.shouldUpdateRefs=function(prevElement,nextElement){// If either the owner or a `ref` has changed, make sure the newest owner
// has stored a reference to `this`, and the previous owner (if different)
// has forgotten the reference to `this`. We use the element instead
// of the public this.props because the post processing cannot determine
// a ref. The ref conceptually lives on the element.
// TODO: Should this even be possible? The owner cannot change because
// it's forbidden by shouldUpdateReactComponent. The ref can change
// if you swap the keys of but not the refs. Reconsider where this check
// is made. It probably belongs where the key checking and
// instantiateReactComponent is done.
var prevEmpty=prevElement===null||prevElement===false;var nextEmpty=nextElement===null||nextElement===false;return(// This has a few false positives w/r/t empty components.
prevEmpty||nextEmpty||nextElement.ref!==prevElement.ref||// If owner changes but we have an unchanged function ref, don't update refs
typeof nextElement.ref==='string'&&nextElement._owner!==prevElement._owner);};ReactRef.detachRefs=function(instance,element){if(element===null||element===false){return;}var ref=element.ref;if(ref!=null){detachRef(ref,instance,element._owner);}};module.exports=ReactRef;},{"./ReactOwner":159}],168:[function(require,module,exports){(function(process){/**
 * Copyright 2014-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactServerRenderingTransaction
 */'use strict';var _assign=require('object-assign');var PooledClass=require('./PooledClass');var Transaction=require('./Transaction');var ReactInstrumentation=require('./ReactInstrumentation');var ReactServerUpdateQueue=require('./ReactServerUpdateQueue');/**
 * Executed within the scope of the `Transaction` instance. Consider these as
 * being member methods, but with an implied ordering while being isolated from
 * each other.
 */var TRANSACTION_WRAPPERS=[];if(process.env.NODE_ENV!=='production'){TRANSACTION_WRAPPERS.push({initialize:ReactInstrumentation.debugTool.onBeginFlush,close:ReactInstrumentation.debugTool.onEndFlush});}var noopCallbackQueue={enqueue:function enqueue(){}};/**
 * @class ReactServerRenderingTransaction
 * @param {boolean} renderToStaticMarkup
 */function ReactServerRenderingTransaction(renderToStaticMarkup){this.reinitializeTransaction();this.renderToStaticMarkup=renderToStaticMarkup;this.useCreateElement=false;this.updateQueue=new ReactServerUpdateQueue(this);}var Mixin={/**
   * @see Transaction
   * @abstract
   * @final
   * @return {array} Empty list of operation wrap procedures.
   */getTransactionWrappers:function getTransactionWrappers(){return TRANSACTION_WRAPPERS;},/**
   * @return {object} The queue to collect `onDOMReady` callbacks with.
   */getReactMountReady:function getReactMountReady(){return noopCallbackQueue;},/**
   * @return {object} The queue to collect React async events.
   */getUpdateQueue:function getUpdateQueue(){return this.updateQueue;},/**
   * `PooledClass` looks for this, and will invoke this before allowing this
   * instance to be reused.
   */destructor:function destructor(){},checkpoint:function checkpoint(){},rollback:function rollback(){}};_assign(ReactServerRenderingTransaction.prototype,Transaction.Mixin,Mixin);PooledClass.addPoolingTo(ReactServerRenderingTransaction);module.exports=ReactServerRenderingTransaction;}).call(this,require('_process'));},{"./PooledClass":103,"./ReactInstrumentation":151,"./ReactServerUpdateQueue":169,"./Transaction":191,"_process":3,"object-assign":344}],169:[function(require,module,exports){(function(process){/**
 * Copyright 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactServerUpdateQueue
 * 
 */'use strict';function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}var ReactUpdateQueue=require('./ReactUpdateQueue');var Transaction=require('./Transaction');var warning=require('fbjs/lib/warning');function warnNoop(publicInstance,callerName){if(process.env.NODE_ENV!=='production'){var constructor=publicInstance.constructor;process.env.NODE_ENV!=='production'?warning(false,'%s(...): Can only update a mounting component. '+'This usually means you called %s() outside componentWillMount() on the server. '+'This is a no-op. Please check the code for the %s component.',callerName,callerName,constructor&&(constructor.displayName||constructor.name)||'ReactClass'):void 0;}}/**
 * This is the update queue used for server rendering.
 * It delegates to ReactUpdateQueue while server rendering is in progress and
 * switches to ReactNoopUpdateQueue after the transaction has completed.
 * @class ReactServerUpdateQueue
 * @param {Transaction} transaction
 */var ReactServerUpdateQueue=function(){/* :: transaction: Transaction; */function ReactServerUpdateQueue(transaction){_classCallCheck(this,ReactServerUpdateQueue);this.transaction=transaction;}/**
   * Checks whether or not this composite component is mounted.
   * @param {ReactClass} publicInstance The instance we want to test.
   * @return {boolean} True if mounted, false otherwise.
   * @protected
   * @final
   */ReactServerUpdateQueue.prototype.isMounted=function isMounted(publicInstance){return false;};/**
   * Enqueue a callback that will be executed after all the pending updates
   * have processed.
   *
   * @param {ReactClass} publicInstance The instance to use as `this` context.
   * @param {?function} callback Called after state is updated.
   * @internal
   */ReactServerUpdateQueue.prototype.enqueueCallback=function enqueueCallback(publicInstance,callback,callerName){if(this.transaction.isInTransaction()){ReactUpdateQueue.enqueueCallback(publicInstance,callback,callerName);}};/**
   * Forces an update. This should only be invoked when it is known with
   * certainty that we are **not** in a DOM transaction.
   *
   * You may want to call this when you know that some deeper aspect of the
   * component's state has changed but `setState` was not called.
   *
   * This will not invoke `shouldComponentUpdate`, but it will invoke
   * `componentWillUpdate` and `componentDidUpdate`.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @internal
   */ReactServerUpdateQueue.prototype.enqueueForceUpdate=function enqueueForceUpdate(publicInstance){if(this.transaction.isInTransaction()){ReactUpdateQueue.enqueueForceUpdate(publicInstance);}else{warnNoop(publicInstance,'forceUpdate');}};/**
   * Replaces all of the state. Always use this or `setState` to mutate state.
   * You should treat `this.state` as immutable.
   *
   * There is no guarantee that `this.state` will be immediately updated, so
   * accessing `this.state` after calling this method may return the old value.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {object|function} completeState Next state.
   * @internal
   */ReactServerUpdateQueue.prototype.enqueueReplaceState=function enqueueReplaceState(publicInstance,completeState){if(this.transaction.isInTransaction()){ReactUpdateQueue.enqueueReplaceState(publicInstance,completeState);}else{warnNoop(publicInstance,'replaceState');}};/**
   * Sets a subset of the state. This only exists because _pendingState is
   * internal. This provides a merging strategy that is not available to deep
   * properties which is confusing. TODO: Expose pendingState or don't use it
   * during the merge.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {object|function} partialState Next partial state to be merged with state.
   * @internal
   */ReactServerUpdateQueue.prototype.enqueueSetState=function enqueueSetState(publicInstance,partialState){if(this.transaction.isInTransaction()){ReactUpdateQueue.enqueueSetState(publicInstance,partialState);}else{warnNoop(publicInstance,'setState');}};return ReactServerUpdateQueue;}();module.exports=ReactServerUpdateQueue;}).call(this,require('_process'));},{"./ReactUpdateQueue":172,"./Transaction":191,"_process":3,"fbjs/lib/warning":68}],170:[function(require,module,exports){(function(process){/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactTransitionChildMapping
 */'use strict';var flattenChildren=require('./flattenChildren');var ReactTransitionChildMapping={/**
   * Given `this.props.children`, return an object mapping key to child. Just
   * simple syntactic sugar around flattenChildren().
   *
   * @param {*} children `this.props.children`
   * @param {number=} selfDebugID Optional debugID of the current internal instance.
   * @return {object} Mapping of key to child
   */getChildMapping:function getChildMapping(children,selfDebugID){if(!children){return children;}if(process.env.NODE_ENV!=='production'){return flattenChildren(children,selfDebugID);}return flattenChildren(children);},/**
   * When you're adding or removing children some may be added or removed in the
   * same render pass. We want to show *both* since we want to simultaneously
   * animate elements in and out. This function takes a previous set of keys
   * and a new set of keys and merges them with its best guess of the correct
   * ordering. In the future we may expose some of the utilities in
   * ReactMultiChild to make this easy, but for now React itself does not
   * directly have this concept of the union of prevChildren and nextChildren
   * so we implement it here.
   *
   * @param {object} prev prev children as returned from
   * `ReactTransitionChildMapping.getChildMapping()`.
   * @param {object} next next children as returned from
   * `ReactTransitionChildMapping.getChildMapping()`.
   * @return {object} a key set that contains all keys in `prev` and all keys
   * in `next` in a reasonable order.
   */mergeChildMappings:function mergeChildMappings(prev,next){prev=prev||{};next=next||{};function getValueForKey(key){if(next.hasOwnProperty(key)){return next[key];}else{return prev[key];}}// For each key of `next`, the list of keys to insert before that key in
// the combined list
var nextKeysPending={};var pendingKeys=[];for(var prevKey in prev){if(next.hasOwnProperty(prevKey)){if(pendingKeys.length){nextKeysPending[prevKey]=pendingKeys;pendingKeys=[];}}else{pendingKeys.push(prevKey);}}var i;var childMapping={};for(var nextKey in next){if(nextKeysPending.hasOwnProperty(nextKey)){for(i=0;i<nextKeysPending[nextKey].length;i++){var pendingNextKey=nextKeysPending[nextKey][i];childMapping[nextKeysPending[nextKey][i]]=getValueForKey(pendingNextKey);}}childMapping[nextKey]=getValueForKey(nextKey);}// Finally, add the keys which didn't appear before any key in `next`
for(i=0;i<pendingKeys.length;i++){childMapping[pendingKeys[i]]=getValueForKey(pendingKeys[i]);}return childMapping;}};module.exports=ReactTransitionChildMapping;}).call(this,require('_process'));},{"./flattenChildren":201,"_process":3}],171:[function(require,module,exports){(function(process){/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactTransitionGroup
 */'use strict';var _assign=require('object-assign');var React=require('./React');var ReactInstanceMap=require('./ReactInstanceMap');var ReactTransitionChildMapping=require('./ReactTransitionChildMapping');var emptyFunction=require('fbjs/lib/emptyFunction');/**
 * A basis for animations. When children are declaratively added or removed,
 * special lifecycle hooks are called.
 * See https://facebook.github.io/react/docs/animation.html#low-level-api-reacttransitiongroup
 */var ReactTransitionGroup=React.createClass({displayName:'ReactTransitionGroup',propTypes:{component:React.PropTypes.any,childFactory:React.PropTypes.func},getDefaultProps:function getDefaultProps(){return{component:'span',childFactory:emptyFunction.thatReturnsArgument};},getInitialState:function getInitialState(){return{// TODO: can we get useful debug information to show at this point?
children:ReactTransitionChildMapping.getChildMapping(this.props.children)};},componentWillMount:function componentWillMount(){this.currentlyTransitioningKeys={};this.keysToEnter=[];this.keysToLeave=[];},componentDidMount:function componentDidMount(){var initialChildMapping=this.state.children;for(var key in initialChildMapping){if(initialChildMapping[key]){this.performAppear(key);}}},componentWillReceiveProps:function componentWillReceiveProps(nextProps){var nextChildMapping;if(process.env.NODE_ENV!=='production'){nextChildMapping=ReactTransitionChildMapping.getChildMapping(nextProps.children,ReactInstanceMap.get(this)._debugID);}else{nextChildMapping=ReactTransitionChildMapping.getChildMapping(nextProps.children);}var prevChildMapping=this.state.children;this.setState({children:ReactTransitionChildMapping.mergeChildMappings(prevChildMapping,nextChildMapping)});var key;for(key in nextChildMapping){var hasPrev=prevChildMapping&&prevChildMapping.hasOwnProperty(key);if(nextChildMapping[key]&&!hasPrev&&!this.currentlyTransitioningKeys[key]){this.keysToEnter.push(key);}}for(key in prevChildMapping){var hasNext=nextChildMapping&&nextChildMapping.hasOwnProperty(key);if(prevChildMapping[key]&&!hasNext&&!this.currentlyTransitioningKeys[key]){this.keysToLeave.push(key);}}// If we want to someday check for reordering, we could do it here.
},componentDidUpdate:function componentDidUpdate(){var keysToEnter=this.keysToEnter;this.keysToEnter=[];keysToEnter.forEach(this.performEnter);var keysToLeave=this.keysToLeave;this.keysToLeave=[];keysToLeave.forEach(this.performLeave);},performAppear:function performAppear(key){this.currentlyTransitioningKeys[key]=true;var component=this.refs[key];if(component.componentWillAppear){component.componentWillAppear(this._handleDoneAppearing.bind(this,key));}else{this._handleDoneAppearing(key);}},_handleDoneAppearing:function _handleDoneAppearing(key){var component=this.refs[key];if(component.componentDidAppear){component.componentDidAppear();}delete this.currentlyTransitioningKeys[key];var currentChildMapping;if(process.env.NODE_ENV!=='production'){currentChildMapping=ReactTransitionChildMapping.getChildMapping(this.props.children,ReactInstanceMap.get(this)._debugID);}else{currentChildMapping=ReactTransitionChildMapping.getChildMapping(this.props.children);}if(!currentChildMapping||!currentChildMapping.hasOwnProperty(key)){// This was removed before it had fully appeared. Remove it.
this.performLeave(key);}},performEnter:function performEnter(key){this.currentlyTransitioningKeys[key]=true;var component=this.refs[key];if(component.componentWillEnter){component.componentWillEnter(this._handleDoneEntering.bind(this,key));}else{this._handleDoneEntering(key);}},_handleDoneEntering:function _handleDoneEntering(key){var component=this.refs[key];if(component.componentDidEnter){component.componentDidEnter();}delete this.currentlyTransitioningKeys[key];var currentChildMapping;if(process.env.NODE_ENV!=='production'){currentChildMapping=ReactTransitionChildMapping.getChildMapping(this.props.children,ReactInstanceMap.get(this)._debugID);}else{currentChildMapping=ReactTransitionChildMapping.getChildMapping(this.props.children);}if(!currentChildMapping||!currentChildMapping.hasOwnProperty(key)){// This was removed before it had fully entered. Remove it.
this.performLeave(key);}},performLeave:function performLeave(key){this.currentlyTransitioningKeys[key]=true;var component=this.refs[key];if(component.componentWillLeave){component.componentWillLeave(this._handleDoneLeaving.bind(this,key));}else{// Note that this is somewhat dangerous b/c it calls setState()
// again, effectively mutating the component before all the work
// is done.
this._handleDoneLeaving(key);}},_handleDoneLeaving:function _handleDoneLeaving(key){var component=this.refs[key];if(component.componentDidLeave){component.componentDidLeave();}delete this.currentlyTransitioningKeys[key];var currentChildMapping;if(process.env.NODE_ENV!=='production'){currentChildMapping=ReactTransitionChildMapping.getChildMapping(this.props.children,ReactInstanceMap.get(this)._debugID);}else{currentChildMapping=ReactTransitionChildMapping.getChildMapping(this.props.children);}if(currentChildMapping&&currentChildMapping.hasOwnProperty(key)){// This entered again before it fully left. Add it again.
this.performEnter(key);}else{this.setState(function(state){var newChildren=_assign({},state.children);delete newChildren[key];return{children:newChildren};});}},render:function render(){// TODO: we could get rid of the need for the wrapper node
// by cloning a single child
var childrenToRender=[];for(var key in this.state.children){var child=this.state.children[key];if(child){// You may need to apply reactive updates to a child as it is leaving.
// The normal React way to do it won't work since the child will have
// already been removed. In case you need this behavior you can provide
// a childFactory function to wrap every child, even the ones that are
// leaving.
childrenToRender.push(React.cloneElement(this.props.childFactory(child),{ref:key,key:key}));}}// Do not forward ReactTransitionGroup props to primitive DOM nodes
var props=_assign({},this.props);delete props.transitionLeave;delete props.transitionName;delete props.transitionAppear;delete props.transitionEnter;delete props.childFactory;delete props.transitionLeaveTimeout;delete props.transitionEnterTimeout;delete props.transitionAppearTimeout;delete props.component;return React.createElement(this.props.component,props,childrenToRender);}});module.exports=ReactTransitionGroup;}).call(this,require('_process'));},{"./React":104,"./ReactInstanceMap":150,"./ReactTransitionChildMapping":170,"_process":3,"fbjs/lib/emptyFunction":51,"object-assign":344}],172:[function(require,module,exports){(function(process){/**
 * Copyright 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactUpdateQueue
 */'use strict';var _prodInvariant=require('./reactProdInvariant');var ReactCurrentOwner=require('./ReactCurrentOwner');var ReactInstanceMap=require('./ReactInstanceMap');var ReactInstrumentation=require('./ReactInstrumentation');var ReactUpdates=require('./ReactUpdates');var invariant=require('fbjs/lib/invariant');var warning=require('fbjs/lib/warning');function enqueueUpdate(internalInstance){ReactUpdates.enqueueUpdate(internalInstance);}function formatUnexpectedArgument(arg){var type=typeof arg==="undefined"?"undefined":_typeof4(arg);if(type!=='object'){return type;}var displayName=arg.constructor&&arg.constructor.name||type;var keys=Object.keys(arg);if(keys.length>0&&keys.length<20){return displayName+' (keys: '+keys.join(', ')+')';}return displayName;}function getInternalInstanceReadyForUpdate(publicInstance,callerName){var internalInstance=ReactInstanceMap.get(publicInstance);if(!internalInstance){if(process.env.NODE_ENV!=='production'){var ctor=publicInstance.constructor;// Only warn when we have a callerName. Otherwise we should be silent.
// We're probably calling from enqueueCallback. We don't want to warn
// there because we already warned for the corresponding lifecycle method.
process.env.NODE_ENV!=='production'?warning(!callerName,'%s(...): Can only update a mounted or mounting component. '+'This usually means you called %s() on an unmounted component. '+'This is a no-op. Please check the code for the %s component.',callerName,callerName,ctor&&(ctor.displayName||ctor.name)||'ReactClass'):void 0;}return null;}if(process.env.NODE_ENV!=='production'){process.env.NODE_ENV!=='production'?warning(ReactCurrentOwner.current==null,'%s(...): Cannot update during an existing state transition (such as '+'within `render` or another component\'s constructor). Render methods '+'should be a pure function of props and state; constructor '+'side-effects are an anti-pattern, but can be moved to '+'`componentWillMount`.',callerName):void 0;}return internalInstance;}/**
 * ReactUpdateQueue allows for state updates to be scheduled into a later
 * reconciliation step.
 */var ReactUpdateQueue={/**
   * Checks whether or not this composite component is mounted.
   * @param {ReactClass} publicInstance The instance we want to test.
   * @return {boolean} True if mounted, false otherwise.
   * @protected
   * @final
   */isMounted:function isMounted(publicInstance){if(process.env.NODE_ENV!=='production'){var owner=ReactCurrentOwner.current;if(owner!==null){process.env.NODE_ENV!=='production'?warning(owner._warnedAboutRefsInRender,'%s is accessing isMounted inside its render() function. '+'render() should be a pure function of props and state. It should '+'never access something that requires stale data from the previous '+'render, such as refs. Move this logic to componentDidMount and '+'componentDidUpdate instead.',owner.getName()||'A component'):void 0;owner._warnedAboutRefsInRender=true;}}var internalInstance=ReactInstanceMap.get(publicInstance);if(internalInstance){// During componentWillMount and render this will still be null but after
// that will always render to something. At least for now. So we can use
// this hack.
return!!internalInstance._renderedComponent;}else{return false;}},/**
   * Enqueue a callback that will be executed after all the pending updates
   * have processed.
   *
   * @param {ReactClass} publicInstance The instance to use as `this` context.
   * @param {?function} callback Called after state is updated.
   * @param {string} callerName Name of the calling function in the public API.
   * @internal
   */enqueueCallback:function enqueueCallback(publicInstance,callback,callerName){ReactUpdateQueue.validateCallback(callback,callerName);var internalInstance=getInternalInstanceReadyForUpdate(publicInstance);// Previously we would throw an error if we didn't have an internal
// instance. Since we want to make it a no-op instead, we mirror the same
// behavior we have in other enqueue* methods.
// We also need to ignore callbacks in componentWillMount. See
// enqueueUpdates.
if(!internalInstance){return null;}if(internalInstance._pendingCallbacks){internalInstance._pendingCallbacks.push(callback);}else{internalInstance._pendingCallbacks=[callback];}// TODO: The callback here is ignored when setState is called from
// componentWillMount. Either fix it or disallow doing so completely in
// favor of getInitialState. Alternatively, we can disallow
// componentWillMount during server-side rendering.
enqueueUpdate(internalInstance);},enqueueCallbackInternal:function enqueueCallbackInternal(internalInstance,callback){if(internalInstance._pendingCallbacks){internalInstance._pendingCallbacks.push(callback);}else{internalInstance._pendingCallbacks=[callback];}enqueueUpdate(internalInstance);},/**
   * Forces an update. This should only be invoked when it is known with
   * certainty that we are **not** in a DOM transaction.
   *
   * You may want to call this when you know that some deeper aspect of the
   * component's state has changed but `setState` was not called.
   *
   * This will not invoke `shouldComponentUpdate`, but it will invoke
   * `componentWillUpdate` and `componentDidUpdate`.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @internal
   */enqueueForceUpdate:function enqueueForceUpdate(publicInstance){var internalInstance=getInternalInstanceReadyForUpdate(publicInstance,'forceUpdate');if(!internalInstance){return;}internalInstance._pendingForceUpdate=true;enqueueUpdate(internalInstance);},/**
   * Replaces all of the state. Always use this or `setState` to mutate state.
   * You should treat `this.state` as immutable.
   *
   * There is no guarantee that `this.state` will be immediately updated, so
   * accessing `this.state` after calling this method may return the old value.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {object} completeState Next state.
   * @internal
   */enqueueReplaceState:function enqueueReplaceState(publicInstance,completeState){var internalInstance=getInternalInstanceReadyForUpdate(publicInstance,'replaceState');if(!internalInstance){return;}internalInstance._pendingStateQueue=[completeState];internalInstance._pendingReplaceState=true;enqueueUpdate(internalInstance);},/**
   * Sets a subset of the state. This only exists because _pendingState is
   * internal. This provides a merging strategy that is not available to deep
   * properties which is confusing. TODO: Expose pendingState or don't use it
   * during the merge.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {object} partialState Next partial state to be merged with state.
   * @internal
   */enqueueSetState:function enqueueSetState(publicInstance,partialState){if(process.env.NODE_ENV!=='production'){ReactInstrumentation.debugTool.onSetState();process.env.NODE_ENV!=='production'?warning(partialState!=null,'setState(...): You passed an undefined or null state object; '+'instead, use forceUpdate().'):void 0;}var internalInstance=getInternalInstanceReadyForUpdate(publicInstance,'setState');if(!internalInstance){return;}var queue=internalInstance._pendingStateQueue||(internalInstance._pendingStateQueue=[]);queue.push(partialState);enqueueUpdate(internalInstance);},enqueueElementInternal:function enqueueElementInternal(internalInstance,nextElement,nextContext){internalInstance._pendingElement=nextElement;// TODO: introduce _pendingContext instead of setting it directly.
internalInstance._context=nextContext;enqueueUpdate(internalInstance);},validateCallback:function validateCallback(callback,callerName){!(!callback||typeof callback==='function')?process.env.NODE_ENV!=='production'?invariant(false,'%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.',callerName,formatUnexpectedArgument(callback)):_prodInvariant('122',callerName,formatUnexpectedArgument(callback)):void 0;}};module.exports=ReactUpdateQueue;}).call(this,require('_process'));},{"./ReactCurrentOwner":115,"./ReactInstanceMap":150,"./ReactInstrumentation":151,"./ReactUpdates":173,"./reactProdInvariant":217,"_process":3,"fbjs/lib/invariant":59,"fbjs/lib/warning":68}],173:[function(require,module,exports){(function(process){/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactUpdates
 */'use strict';var _prodInvariant=require('./reactProdInvariant'),_assign=require('object-assign');var CallbackQueue=require('./CallbackQueue');var PooledClass=require('./PooledClass');var ReactFeatureFlags=require('./ReactFeatureFlags');var ReactReconciler=require('./ReactReconciler');var Transaction=require('./Transaction');var invariant=require('fbjs/lib/invariant');var dirtyComponents=[];var updateBatchNumber=0;var asapCallbackQueue=CallbackQueue.getPooled();var asapEnqueued=false;var batchingStrategy=null;function ensureInjected(){!(ReactUpdates.ReactReconcileTransaction&&batchingStrategy)?process.env.NODE_ENV!=='production'?invariant(false,'ReactUpdates: must inject a reconcile transaction class and batching strategy'):_prodInvariant('123'):void 0;}var NESTED_UPDATES={initialize:function initialize(){this.dirtyComponentsLength=dirtyComponents.length;},close:function close(){if(this.dirtyComponentsLength!==dirtyComponents.length){// Additional updates were enqueued by componentDidUpdate handlers or
// similar; before our own UPDATE_QUEUEING wrapper closes, we want to run
// these new updates so that if A's componentDidUpdate calls setState on
// B, B will update before the callback A's updater provided when calling
// setState.
dirtyComponents.splice(0,this.dirtyComponentsLength);flushBatchedUpdates();}else{dirtyComponents.length=0;}}};var UPDATE_QUEUEING={initialize:function initialize(){this.callbackQueue.reset();},close:function close(){this.callbackQueue.notifyAll();}};var TRANSACTION_WRAPPERS=[NESTED_UPDATES,UPDATE_QUEUEING];function ReactUpdatesFlushTransaction(){this.reinitializeTransaction();this.dirtyComponentsLength=null;this.callbackQueue=CallbackQueue.getPooled();this.reconcileTransaction=ReactUpdates.ReactReconcileTransaction.getPooled(/* useCreateElement */true);}_assign(ReactUpdatesFlushTransaction.prototype,Transaction.Mixin,{getTransactionWrappers:function getTransactionWrappers(){return TRANSACTION_WRAPPERS;},destructor:function destructor(){this.dirtyComponentsLength=null;CallbackQueue.release(this.callbackQueue);this.callbackQueue=null;ReactUpdates.ReactReconcileTransaction.release(this.reconcileTransaction);this.reconcileTransaction=null;},perform:function perform(method,scope,a){// Essentially calls `this.reconcileTransaction.perform(method, scope, a)`
// with this transaction's wrappers around it.
return Transaction.Mixin.perform.call(this,this.reconcileTransaction.perform,this.reconcileTransaction,method,scope,a);}});PooledClass.addPoolingTo(ReactUpdatesFlushTransaction);function batchedUpdates(callback,a,b,c,d,e){ensureInjected();batchingStrategy.batchedUpdates(callback,a,b,c,d,e);}/**
 * Array comparator for ReactComponents by mount ordering.
 *
 * @param {ReactComponent} c1 first component you're comparing
 * @param {ReactComponent} c2 second component you're comparing
 * @return {number} Return value usable by Array.prototype.sort().
 */function mountOrderComparator(c1,c2){return c1._mountOrder-c2._mountOrder;}function runBatchedUpdates(transaction){var len=transaction.dirtyComponentsLength;!(len===dirtyComponents.length)?process.env.NODE_ENV!=='production'?invariant(false,'Expected flush transaction\'s stored dirty-components length (%s) to match dirty-components array length (%s).',len,dirtyComponents.length):_prodInvariant('124',len,dirtyComponents.length):void 0;// Since reconciling a component higher in the owner hierarchy usually (not
// always -- see shouldComponentUpdate()) will reconcile children, reconcile
// them before their children by sorting the array.
dirtyComponents.sort(mountOrderComparator);// Any updates enqueued while reconciling must be performed after this entire
// batch. Otherwise, if dirtyComponents is [A, B] where A has children B and
// C, B could update twice in a single batch if C's render enqueues an update
// to B (since B would have already updated, we should skip it, and the only
// way we can know to do so is by checking the batch counter).
updateBatchNumber++;for(var i=0;i<len;i++){// If a component is unmounted before pending changes apply, it will still
// be here, but we assume that it has cleared its _pendingCallbacks and
// that performUpdateIfNecessary is a noop.
var component=dirtyComponents[i];// If performUpdateIfNecessary happens to enqueue any new updates, we
// shouldn't execute the callbacks until the next render happens, so
// stash the callbacks first
var callbacks=component._pendingCallbacks;component._pendingCallbacks=null;var markerName;if(ReactFeatureFlags.logTopLevelRenders){var namedComponent=component;// Duck type TopLevelWrapper. This is probably always true.
if(component._currentElement.props===component._renderedComponent._currentElement){namedComponent=component._renderedComponent;}markerName='React update: '+namedComponent.getName();console.time(markerName);}ReactReconciler.performUpdateIfNecessary(component,transaction.reconcileTransaction,updateBatchNumber);if(markerName){console.timeEnd(markerName);}if(callbacks){for(var j=0;j<callbacks.length;j++){transaction.callbackQueue.enqueue(callbacks[j],component.getPublicInstance());}}}}var flushBatchedUpdates=function flushBatchedUpdates(){// ReactUpdatesFlushTransaction's wrappers will clear the dirtyComponents
// array and perform any updates enqueued by mount-ready handlers (i.e.,
// componentDidUpdate) but we need to check here too in order to catch
// updates enqueued by setState callbacks and asap calls.
while(dirtyComponents.length||asapEnqueued){if(dirtyComponents.length){var transaction=ReactUpdatesFlushTransaction.getPooled();transaction.perform(runBatchedUpdates,null,transaction);ReactUpdatesFlushTransaction.release(transaction);}if(asapEnqueued){asapEnqueued=false;var queue=asapCallbackQueue;asapCallbackQueue=CallbackQueue.getPooled();queue.notifyAll();CallbackQueue.release(queue);}}};/**
 * Mark a component as needing a rerender, adding an optional callback to a
 * list of functions which will be executed once the rerender occurs.
 */function enqueueUpdate(component){ensureInjected();// Various parts of our code (such as ReactCompositeComponent's
// _renderValidatedComponent) assume that calls to render aren't nested;
// verify that that's the case. (This is called by each top-level update
// function, like setState, forceUpdate, etc.; creation and
// destruction of top-level components is guarded in ReactMount.)
if(!batchingStrategy.isBatchingUpdates){batchingStrategy.batchedUpdates(enqueueUpdate,component);return;}dirtyComponents.push(component);if(component._updateBatchNumber==null){component._updateBatchNumber=updateBatchNumber+1;}}/**
 * Enqueue a callback to be run at the end of the current batching cycle. Throws
 * if no updates are currently being performed.
 */function asap(callback,context){!batchingStrategy.isBatchingUpdates?process.env.NODE_ENV!=='production'?invariant(false,'ReactUpdates.asap: Can\'t enqueue an asap callback in a context whereupdates are not being batched.'):_prodInvariant('125'):void 0;asapCallbackQueue.enqueue(callback,context);asapEnqueued=true;}var ReactUpdatesInjection={injectReconcileTransaction:function injectReconcileTransaction(ReconcileTransaction){!ReconcileTransaction?process.env.NODE_ENV!=='production'?invariant(false,'ReactUpdates: must provide a reconcile transaction class'):_prodInvariant('126'):void 0;ReactUpdates.ReactReconcileTransaction=ReconcileTransaction;},injectBatchingStrategy:function injectBatchingStrategy(_batchingStrategy){!_batchingStrategy?process.env.NODE_ENV!=='production'?invariant(false,'ReactUpdates: must provide a batching strategy'):_prodInvariant('127'):void 0;!(typeof _batchingStrategy.batchedUpdates==='function')?process.env.NODE_ENV!=='production'?invariant(false,'ReactUpdates: must provide a batchedUpdates() function'):_prodInvariant('128'):void 0;!(typeof _batchingStrategy.isBatchingUpdates==='boolean')?process.env.NODE_ENV!=='production'?invariant(false,'ReactUpdates: must provide an isBatchingUpdates boolean attribute'):_prodInvariant('129'):void 0;batchingStrategy=_batchingStrategy;}};var ReactUpdates={/**
   * React references `ReactReconcileTransaction` using this property in order
   * to allow dependency injection.
   *
   * @internal
   */ReactReconcileTransaction:null,batchedUpdates:batchedUpdates,enqueueUpdate:enqueueUpdate,flushBatchedUpdates:flushBatchedUpdates,injection:ReactUpdatesInjection,asap:asap};module.exports=ReactUpdates;}).call(this,require('_process'));},{"./CallbackQueue":83,"./PooledClass":103,"./ReactFeatureFlags":144,"./ReactReconciler":166,"./Transaction":191,"./reactProdInvariant":217,"_process":3,"fbjs/lib/invariant":59,"object-assign":344}],174:[function(require,module,exports){/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactVersion
 */'use strict';module.exports='15.3.2';},{}],175:[function(require,module,exports){/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule SVGDOMPropertyConfig
 */'use strict';var NS={xlink:'http://www.w3.org/1999/xlink',xml:'http://www.w3.org/XML/1998/namespace'};// We use attributes for everything SVG so let's avoid some duplication and run
// code instead.
// The following are all specified in the HTML config already so we exclude here.
// - class (as className)
// - color
// - height
// - id
// - lang
// - max
// - media
// - method
// - min
// - name
// - style
// - target
// - type
// - width
var ATTRS={accentHeight:'accent-height',accumulate:0,additive:0,alignmentBaseline:'alignment-baseline',allowReorder:'allowReorder',alphabetic:0,amplitude:0,arabicForm:'arabic-form',ascent:0,attributeName:'attributeName',attributeType:'attributeType',autoReverse:'autoReverse',azimuth:0,baseFrequency:'baseFrequency',baseProfile:'baseProfile',baselineShift:'baseline-shift',bbox:0,begin:0,bias:0,by:0,calcMode:'calcMode',capHeight:'cap-height',clip:0,clipPath:'clip-path',clipRule:'clip-rule',clipPathUnits:'clipPathUnits',colorInterpolation:'color-interpolation',colorInterpolationFilters:'color-interpolation-filters',colorProfile:'color-profile',colorRendering:'color-rendering',contentScriptType:'contentScriptType',contentStyleType:'contentStyleType',cursor:0,cx:0,cy:0,d:0,decelerate:0,descent:0,diffuseConstant:'diffuseConstant',direction:0,display:0,divisor:0,dominantBaseline:'dominant-baseline',dur:0,dx:0,dy:0,edgeMode:'edgeMode',elevation:0,enableBackground:'enable-background',end:0,exponent:0,externalResourcesRequired:'externalResourcesRequired',fill:0,fillOpacity:'fill-opacity',fillRule:'fill-rule',filter:0,filterRes:'filterRes',filterUnits:'filterUnits',floodColor:'flood-color',floodOpacity:'flood-opacity',focusable:0,fontFamily:'font-family',fontSize:'font-size',fontSizeAdjust:'font-size-adjust',fontStretch:'font-stretch',fontStyle:'font-style',fontVariant:'font-variant',fontWeight:'font-weight',format:0,from:0,fx:0,fy:0,g1:0,g2:0,glyphName:'glyph-name',glyphOrientationHorizontal:'glyph-orientation-horizontal',glyphOrientationVertical:'glyph-orientation-vertical',glyphRef:'glyphRef',gradientTransform:'gradientTransform',gradientUnits:'gradientUnits',hanging:0,horizAdvX:'horiz-adv-x',horizOriginX:'horiz-origin-x',ideographic:0,imageRendering:'image-rendering','in':0,in2:0,intercept:0,k:0,k1:0,k2:0,k3:0,k4:0,kernelMatrix:'kernelMatrix',kernelUnitLength:'kernelUnitLength',kerning:0,keyPoints:'keyPoints',keySplines:'keySplines',keyTimes:'keyTimes',lengthAdjust:'lengthAdjust',letterSpacing:'letter-spacing',lightingColor:'lighting-color',limitingConeAngle:'limitingConeAngle',local:0,markerEnd:'marker-end',markerMid:'marker-mid',markerStart:'marker-start',markerHeight:'markerHeight',markerUnits:'markerUnits',markerWidth:'markerWidth',mask:0,maskContentUnits:'maskContentUnits',maskUnits:'maskUnits',mathematical:0,mode:0,numOctaves:'numOctaves',offset:0,opacity:0,operator:0,order:0,orient:0,orientation:0,origin:0,overflow:0,overlinePosition:'overline-position',overlineThickness:'overline-thickness',paintOrder:'paint-order',panose1:'panose-1',pathLength:'pathLength',patternContentUnits:'patternContentUnits',patternTransform:'patternTransform',patternUnits:'patternUnits',pointerEvents:'pointer-events',points:0,pointsAtX:'pointsAtX',pointsAtY:'pointsAtY',pointsAtZ:'pointsAtZ',preserveAlpha:'preserveAlpha',preserveAspectRatio:'preserveAspectRatio',primitiveUnits:'primitiveUnits',r:0,radius:0,refX:'refX',refY:'refY',renderingIntent:'rendering-intent',repeatCount:'repeatCount',repeatDur:'repeatDur',requiredExtensions:'requiredExtensions',requiredFeatures:'requiredFeatures',restart:0,result:0,rotate:0,rx:0,ry:0,scale:0,seed:0,shapeRendering:'shape-rendering',slope:0,spacing:0,specularConstant:'specularConstant',specularExponent:'specularExponent',speed:0,spreadMethod:'spreadMethod',startOffset:'startOffset',stdDeviation:'stdDeviation',stemh:0,stemv:0,stitchTiles:'stitchTiles',stopColor:'stop-color',stopOpacity:'stop-opacity',strikethroughPosition:'strikethrough-position',strikethroughThickness:'strikethrough-thickness',string:0,stroke:0,strokeDasharray:'stroke-dasharray',strokeDashoffset:'stroke-dashoffset',strokeLinecap:'stroke-linecap',strokeLinejoin:'stroke-linejoin',strokeMiterlimit:'stroke-miterlimit',strokeOpacity:'stroke-opacity',strokeWidth:'stroke-width',surfaceScale:'surfaceScale',systemLanguage:'systemLanguage',tableValues:'tableValues',targetX:'targetX',targetY:'targetY',textAnchor:'text-anchor',textDecoration:'text-decoration',textRendering:'text-rendering',textLength:'textLength',to:0,transform:0,u1:0,u2:0,underlinePosition:'underline-position',underlineThickness:'underline-thickness',unicode:0,unicodeBidi:'unicode-bidi',unicodeRange:'unicode-range',unitsPerEm:'units-per-em',vAlphabetic:'v-alphabetic',vHanging:'v-hanging',vIdeographic:'v-ideographic',vMathematical:'v-mathematical',values:0,vectorEffect:'vector-effect',version:0,vertAdvY:'vert-adv-y',vertOriginX:'vert-origin-x',vertOriginY:'vert-origin-y',viewBox:'viewBox',viewTarget:'viewTarget',visibility:0,widths:0,wordSpacing:'word-spacing',writingMode:'writing-mode',x:0,xHeight:'x-height',x1:0,x2:0,xChannelSelector:'xChannelSelector',xlinkActuate:'xlink:actuate',xlinkArcrole:'xlink:arcrole',xlinkHref:'xlink:href',xlinkRole:'xlink:role',xlinkShow:'xlink:show',xlinkTitle:'xlink:title',xlinkType:'xlink:type',xmlBase:'xml:base',xmlns:0,xmlnsXlink:'xmlns:xlink',xmlLang:'xml:lang',xmlSpace:'xml:space',y:0,y1:0,y2:0,yChannelSelector:'yChannelSelector',z:0,zoomAndPan:'zoomAndPan'};var SVGDOMPropertyConfig={Properties:{},DOMAttributeNamespaces:{xlinkActuate:NS.xlink,xlinkArcrole:NS.xlink,xlinkHref:NS.xlink,xlinkRole:NS.xlink,xlinkShow:NS.xlink,xlinkTitle:NS.xlink,xlinkType:NS.xlink,xmlBase:NS.xml,xmlLang:NS.xml,xmlSpace:NS.xml},DOMAttributeNames:{}};Object.keys(ATTRS).forEach(function(key){SVGDOMPropertyConfig.Properties[key]=0;if(ATTRS[key]){SVGDOMPropertyConfig.DOMAttributeNames[key]=ATTRS[key];}});module.exports=SVGDOMPropertyConfig;},{}],176:[function(require,module,exports){/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule SelectEventPlugin
 */'use strict';var EventConstants=require('./EventConstants');var EventPropagators=require('./EventPropagators');var ExecutionEnvironment=require('fbjs/lib/ExecutionEnvironment');var ReactDOMComponentTree=require('./ReactDOMComponentTree');var ReactInputSelection=require('./ReactInputSelection');var SyntheticEvent=require('./SyntheticEvent');var getActiveElement=require('fbjs/lib/getActiveElement');var isTextInputElement=require('./isTextInputElement');var keyOf=require('fbjs/lib/keyOf');var shallowEqual=require('fbjs/lib/shallowEqual');var topLevelTypes=EventConstants.topLevelTypes;var skipSelectionChangeEvent=ExecutionEnvironment.canUseDOM&&'documentMode'in document&&document.documentMode<=11;var eventTypes={select:{phasedRegistrationNames:{bubbled:keyOf({onSelect:null}),captured:keyOf({onSelectCapture:null})},dependencies:[topLevelTypes.topBlur,topLevelTypes.topContextMenu,topLevelTypes.topFocus,topLevelTypes.topKeyDown,topLevelTypes.topKeyUp,topLevelTypes.topMouseDown,topLevelTypes.topMouseUp,topLevelTypes.topSelectionChange]}};var activeElement=null;var activeElementInst=null;var lastSelection=null;var mouseDown=false;// Track whether a listener exists for this plugin. If none exist, we do
// not extract events. See #3639.
var hasListener=false;var ON_SELECT_KEY=keyOf({onSelect:null});/**
 * Get an object which is a unique representation of the current selection.
 *
 * The return value will not be consistent across nodes or browsers, but
 * two identical selections on the same node will return identical objects.
 *
 * @param {DOMElement} node
 * @return {object}
 */function getSelection(node){if('selectionStart'in node&&ReactInputSelection.hasSelectionCapabilities(node)){return{start:node.selectionStart,end:node.selectionEnd};}else if(window.getSelection){var selection=window.getSelection();return{anchorNode:selection.anchorNode,anchorOffset:selection.anchorOffset,focusNode:selection.focusNode,focusOffset:selection.focusOffset};}else if(document.selection){var range=document.selection.createRange();return{parentElement:range.parentElement(),text:range.text,top:range.boundingTop,left:range.boundingLeft};}}/**
 * Poll selection to see whether it's changed.
 *
 * @param {object} nativeEvent
 * @return {?SyntheticEvent}
 */function constructSelectEvent(nativeEvent,nativeEventTarget){// Ensure we have the right element, and that the user is not dragging a
// selection (this matches native `select` event behavior). In HTML5, select
// fires only on input and textarea thus if there's no focused element we
// won't dispatch.
if(mouseDown||activeElement==null||activeElement!==getActiveElement()){return null;}// Only fire when selection has actually changed.
var currentSelection=getSelection(activeElement);if(!lastSelection||!shallowEqual(lastSelection,currentSelection)){lastSelection=currentSelection;var syntheticEvent=SyntheticEvent.getPooled(eventTypes.select,activeElementInst,nativeEvent,nativeEventTarget);syntheticEvent.type='select';syntheticEvent.target=activeElement;EventPropagators.accumulateTwoPhaseDispatches(syntheticEvent);return syntheticEvent;}return null;}/**
 * This plugin creates an `onSelect` event that normalizes select events
 * across form elements.
 *
 * Supported elements are:
 * - input (see `isTextInputElement`)
 * - textarea
 * - contentEditable
 *
 * This differs from native browser implementations in the following ways:
 * - Fires on contentEditable fields as well as inputs.
 * - Fires for collapsed selection.
 * - Fires after user input.
 */var SelectEventPlugin={eventTypes:eventTypes,extractEvents:function extractEvents(topLevelType,targetInst,nativeEvent,nativeEventTarget){if(!hasListener){return null;}var targetNode=targetInst?ReactDOMComponentTree.getNodeFromInstance(targetInst):window;switch(topLevelType){// Track the input node that has focus.
case topLevelTypes.topFocus:if(isTextInputElement(targetNode)||targetNode.contentEditable==='true'){activeElement=targetNode;activeElementInst=targetInst;lastSelection=null;}break;case topLevelTypes.topBlur:activeElement=null;activeElementInst=null;lastSelection=null;break;// Don't fire the event while the user is dragging. This matches the
// semantics of the native select event.
case topLevelTypes.topMouseDown:mouseDown=true;break;case topLevelTypes.topContextMenu:case topLevelTypes.topMouseUp:mouseDown=false;return constructSelectEvent(nativeEvent,nativeEventTarget);// Chrome and IE fire non-standard event when selection is changed (and
// sometimes when it hasn't). IE's event fires out of order with respect
// to key and input events on deletion, so we discard it.
//
// Firefox doesn't support selectionchange, so check selection status
// after each key entry. The selection changes after keydown and before
// keyup, but we check on keydown as well in the case of holding down a
// key, when multiple keydown events are fired but only one keyup is.
// This is also our approach for IE handling, for the reason above.
case topLevelTypes.topSelectionChange:if(skipSelectionChangeEvent){break;}// falls through
case topLevelTypes.topKeyDown:case topLevelTypes.topKeyUp:return constructSelectEvent(nativeEvent,nativeEventTarget);}return null;},didPutListener:function didPutListener(inst,registrationName,listener){if(registrationName===ON_SELECT_KEY){hasListener=true;}}};module.exports=SelectEventPlugin;},{"./EventConstants":94,"./EventPropagators":98,"./ReactDOMComponentTree":120,"./ReactInputSelection":149,"./SyntheticEvent":182,"./isTextInputElement":214,"fbjs/lib/ExecutionEnvironment":45,"fbjs/lib/getActiveElement":54,"fbjs/lib/keyOf":63,"fbjs/lib/shallowEqual":67}],177:[function(require,module,exports){(function(process){/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule SimpleEventPlugin
 */'use strict';var _prodInvariant=require('./reactProdInvariant');var EventConstants=require('./EventConstants');var EventListener=require('fbjs/lib/EventListener');var EventPropagators=require('./EventPropagators');var ReactDOMComponentTree=require('./ReactDOMComponentTree');var SyntheticAnimationEvent=require('./SyntheticAnimationEvent');var SyntheticClipboardEvent=require('./SyntheticClipboardEvent');var SyntheticEvent=require('./SyntheticEvent');var SyntheticFocusEvent=require('./SyntheticFocusEvent');var SyntheticKeyboardEvent=require('./SyntheticKeyboardEvent');var SyntheticMouseEvent=require('./SyntheticMouseEvent');var SyntheticDragEvent=require('./SyntheticDragEvent');var SyntheticTouchEvent=require('./SyntheticTouchEvent');var SyntheticTransitionEvent=require('./SyntheticTransitionEvent');var SyntheticUIEvent=require('./SyntheticUIEvent');var SyntheticWheelEvent=require('./SyntheticWheelEvent');var emptyFunction=require('fbjs/lib/emptyFunction');var getEventCharCode=require('./getEventCharCode');var invariant=require('fbjs/lib/invariant');var keyOf=require('fbjs/lib/keyOf');var topLevelTypes=EventConstants.topLevelTypes;var eventTypes={abort:{phasedRegistrationNames:{bubbled:keyOf({onAbort:true}),captured:keyOf({onAbortCapture:true})}},animationEnd:{phasedRegistrationNames:{bubbled:keyOf({onAnimationEnd:true}),captured:keyOf({onAnimationEndCapture:true})}},animationIteration:{phasedRegistrationNames:{bubbled:keyOf({onAnimationIteration:true}),captured:keyOf({onAnimationIterationCapture:true})}},animationStart:{phasedRegistrationNames:{bubbled:keyOf({onAnimationStart:true}),captured:keyOf({onAnimationStartCapture:true})}},blur:{phasedRegistrationNames:{bubbled:keyOf({onBlur:true}),captured:keyOf({onBlurCapture:true})}},canPlay:{phasedRegistrationNames:{bubbled:keyOf({onCanPlay:true}),captured:keyOf({onCanPlayCapture:true})}},canPlayThrough:{phasedRegistrationNames:{bubbled:keyOf({onCanPlayThrough:true}),captured:keyOf({onCanPlayThroughCapture:true})}},click:{phasedRegistrationNames:{bubbled:keyOf({onClick:true}),captured:keyOf({onClickCapture:true})}},contextMenu:{phasedRegistrationNames:{bubbled:keyOf({onContextMenu:true}),captured:keyOf({onContextMenuCapture:true})}},copy:{phasedRegistrationNames:{bubbled:keyOf({onCopy:true}),captured:keyOf({onCopyCapture:true})}},cut:{phasedRegistrationNames:{bubbled:keyOf({onCut:true}),captured:keyOf({onCutCapture:true})}},doubleClick:{phasedRegistrationNames:{bubbled:keyOf({onDoubleClick:true}),captured:keyOf({onDoubleClickCapture:true})}},drag:{phasedRegistrationNames:{bubbled:keyOf({onDrag:true}),captured:keyOf({onDragCapture:true})}},dragEnd:{phasedRegistrationNames:{bubbled:keyOf({onDragEnd:true}),captured:keyOf({onDragEndCapture:true})}},dragEnter:{phasedRegistrationNames:{bubbled:keyOf({onDragEnter:true}),captured:keyOf({onDragEnterCapture:true})}},dragExit:{phasedRegistrationNames:{bubbled:keyOf({onDragExit:true}),captured:keyOf({onDragExitCapture:true})}},dragLeave:{phasedRegistrationNames:{bubbled:keyOf({onDragLeave:true}),captured:keyOf({onDragLeaveCapture:true})}},dragOver:{phasedRegistrationNames:{bubbled:keyOf({onDragOver:true}),captured:keyOf({onDragOverCapture:true})}},dragStart:{phasedRegistrationNames:{bubbled:keyOf({onDragStart:true}),captured:keyOf({onDragStartCapture:true})}},drop:{phasedRegistrationNames:{bubbled:keyOf({onDrop:true}),captured:keyOf({onDropCapture:true})}},durationChange:{phasedRegistrationNames:{bubbled:keyOf({onDurationChange:true}),captured:keyOf({onDurationChangeCapture:true})}},emptied:{phasedRegistrationNames:{bubbled:keyOf({onEmptied:true}),captured:keyOf({onEmptiedCapture:true})}},encrypted:{phasedRegistrationNames:{bubbled:keyOf({onEncrypted:true}),captured:keyOf({onEncryptedCapture:true})}},ended:{phasedRegistrationNames:{bubbled:keyOf({onEnded:true}),captured:keyOf({onEndedCapture:true})}},error:{phasedRegistrationNames:{bubbled:keyOf({onError:true}),captured:keyOf({onErrorCapture:true})}},focus:{phasedRegistrationNames:{bubbled:keyOf({onFocus:true}),captured:keyOf({onFocusCapture:true})}},input:{phasedRegistrationNames:{bubbled:keyOf({onInput:true}),captured:keyOf({onInputCapture:true})}},invalid:{phasedRegistrationNames:{bubbled:keyOf({onInvalid:true}),captured:keyOf({onInvalidCapture:true})}},keyDown:{phasedRegistrationNames:{bubbled:keyOf({onKeyDown:true}),captured:keyOf({onKeyDownCapture:true})}},keyPress:{phasedRegistrationNames:{bubbled:keyOf({onKeyPress:true}),captured:keyOf({onKeyPressCapture:true})}},keyUp:{phasedRegistrationNames:{bubbled:keyOf({onKeyUp:true}),captured:keyOf({onKeyUpCapture:true})}},load:{phasedRegistrationNames:{bubbled:keyOf({onLoad:true}),captured:keyOf({onLoadCapture:true})}},loadedData:{phasedRegistrationNames:{bubbled:keyOf({onLoadedData:true}),captured:keyOf({onLoadedDataCapture:true})}},loadedMetadata:{phasedRegistrationNames:{bubbled:keyOf({onLoadedMetadata:true}),captured:keyOf({onLoadedMetadataCapture:true})}},loadStart:{phasedRegistrationNames:{bubbled:keyOf({onLoadStart:true}),captured:keyOf({onLoadStartCapture:true})}},// Note: We do not allow listening to mouseOver events. Instead, use the
// onMouseEnter/onMouseLeave created by `EnterLeaveEventPlugin`.
mouseDown:{phasedRegistrationNames:{bubbled:keyOf({onMouseDown:true}),captured:keyOf({onMouseDownCapture:true})}},mouseMove:{phasedRegistrationNames:{bubbled:keyOf({onMouseMove:true}),captured:keyOf({onMouseMoveCapture:true})}},mouseOut:{phasedRegistrationNames:{bubbled:keyOf({onMouseOut:true}),captured:keyOf({onMouseOutCapture:true})}},mouseOver:{phasedRegistrationNames:{bubbled:keyOf({onMouseOver:true}),captured:keyOf({onMouseOverCapture:true})}},mouseUp:{phasedRegistrationNames:{bubbled:keyOf({onMouseUp:true}),captured:keyOf({onMouseUpCapture:true})}},paste:{phasedRegistrationNames:{bubbled:keyOf({onPaste:true}),captured:keyOf({onPasteCapture:true})}},pause:{phasedRegistrationNames:{bubbled:keyOf({onPause:true}),captured:keyOf({onPauseCapture:true})}},play:{phasedRegistrationNames:{bubbled:keyOf({onPlay:true}),captured:keyOf({onPlayCapture:true})}},playing:{phasedRegistrationNames:{bubbled:keyOf({onPlaying:true}),captured:keyOf({onPlayingCapture:true})}},progress:{phasedRegistrationNames:{bubbled:keyOf({onProgress:true}),captured:keyOf({onProgressCapture:true})}},rateChange:{phasedRegistrationNames:{bubbled:keyOf({onRateChange:true}),captured:keyOf({onRateChangeCapture:true})}},reset:{phasedRegistrationNames:{bubbled:keyOf({onReset:true}),captured:keyOf({onResetCapture:true})}},scroll:{phasedRegistrationNames:{bubbled:keyOf({onScroll:true}),captured:keyOf({onScrollCapture:true})}},seeked:{phasedRegistrationNames:{bubbled:keyOf({onSeeked:true}),captured:keyOf({onSeekedCapture:true})}},seeking:{phasedRegistrationNames:{bubbled:keyOf({onSeeking:true}),captured:keyOf({onSeekingCapture:true})}},stalled:{phasedRegistrationNames:{bubbled:keyOf({onStalled:true}),captured:keyOf({onStalledCapture:true})}},submit:{phasedRegistrationNames:{bubbled:keyOf({onSubmit:true}),captured:keyOf({onSubmitCapture:true})}},suspend:{phasedRegistrationNames:{bubbled:keyOf({onSuspend:true}),captured:keyOf({onSuspendCapture:true})}},timeUpdate:{phasedRegistrationNames:{bubbled:keyOf({onTimeUpdate:true}),captured:keyOf({onTimeUpdateCapture:true})}},touchCancel:{phasedRegistrationNames:{bubbled:keyOf({onTouchCancel:true}),captured:keyOf({onTouchCancelCapture:true})}},touchEnd:{phasedRegistrationNames:{bubbled:keyOf({onTouchEnd:true}),captured:keyOf({onTouchEndCapture:true})}},touchMove:{phasedRegistrationNames:{bubbled:keyOf({onTouchMove:true}),captured:keyOf({onTouchMoveCapture:true})}},touchStart:{phasedRegistrationNames:{bubbled:keyOf({onTouchStart:true}),captured:keyOf({onTouchStartCapture:true})}},transitionEnd:{phasedRegistrationNames:{bubbled:keyOf({onTransitionEnd:true}),captured:keyOf({onTransitionEndCapture:true})}},volumeChange:{phasedRegistrationNames:{bubbled:keyOf({onVolumeChange:true}),captured:keyOf({onVolumeChangeCapture:true})}},waiting:{phasedRegistrationNames:{bubbled:keyOf({onWaiting:true}),captured:keyOf({onWaitingCapture:true})}},wheel:{phasedRegistrationNames:{bubbled:keyOf({onWheel:true}),captured:keyOf({onWheelCapture:true})}}};var topLevelEventsToDispatchConfig={topAbort:eventTypes.abort,topAnimationEnd:eventTypes.animationEnd,topAnimationIteration:eventTypes.animationIteration,topAnimationStart:eventTypes.animationStart,topBlur:eventTypes.blur,topCanPlay:eventTypes.canPlay,topCanPlayThrough:eventTypes.canPlayThrough,topClick:eventTypes.click,topContextMenu:eventTypes.contextMenu,topCopy:eventTypes.copy,topCut:eventTypes.cut,topDoubleClick:eventTypes.doubleClick,topDrag:eventTypes.drag,topDragEnd:eventTypes.dragEnd,topDragEnter:eventTypes.dragEnter,topDragExit:eventTypes.dragExit,topDragLeave:eventTypes.dragLeave,topDragOver:eventTypes.dragOver,topDragStart:eventTypes.dragStart,topDrop:eventTypes.drop,topDurationChange:eventTypes.durationChange,topEmptied:eventTypes.emptied,topEncrypted:eventTypes.encrypted,topEnded:eventTypes.ended,topError:eventTypes.error,topFocus:eventTypes.focus,topInput:eventTypes.input,topInvalid:eventTypes.invalid,topKeyDown:eventTypes.keyDown,topKeyPress:eventTypes.keyPress,topKeyUp:eventTypes.keyUp,topLoad:eventTypes.load,topLoadedData:eventTypes.loadedData,topLoadedMetadata:eventTypes.loadedMetadata,topLoadStart:eventTypes.loadStart,topMouseDown:eventTypes.mouseDown,topMouseMove:eventTypes.mouseMove,topMouseOut:eventTypes.mouseOut,topMouseOver:eventTypes.mouseOver,topMouseUp:eventTypes.mouseUp,topPaste:eventTypes.paste,topPause:eventTypes.pause,topPlay:eventTypes.play,topPlaying:eventTypes.playing,topProgress:eventTypes.progress,topRateChange:eventTypes.rateChange,topReset:eventTypes.reset,topScroll:eventTypes.scroll,topSeeked:eventTypes.seeked,topSeeking:eventTypes.seeking,topStalled:eventTypes.stalled,topSubmit:eventTypes.submit,topSuspend:eventTypes.suspend,topTimeUpdate:eventTypes.timeUpdate,topTouchCancel:eventTypes.touchCancel,topTouchEnd:eventTypes.touchEnd,topTouchMove:eventTypes.touchMove,topTouchStart:eventTypes.touchStart,topTransitionEnd:eventTypes.transitionEnd,topVolumeChange:eventTypes.volumeChange,topWaiting:eventTypes.waiting,topWheel:eventTypes.wheel};for(var type in topLevelEventsToDispatchConfig){topLevelEventsToDispatchConfig[type].dependencies=[type];}var ON_CLICK_KEY=keyOf({onClick:null});var onClickListeners={};function getDictionaryKey(inst){// Prevents V8 performance issue:
// https://github.com/facebook/react/pull/7232
return'.'+inst._rootNodeID;}var SimpleEventPlugin={eventTypes:eventTypes,extractEvents:function extractEvents(topLevelType,targetInst,nativeEvent,nativeEventTarget){var dispatchConfig=topLevelEventsToDispatchConfig[topLevelType];if(!dispatchConfig){return null;}var EventConstructor;switch(topLevelType){case topLevelTypes.topAbort:case topLevelTypes.topCanPlay:case topLevelTypes.topCanPlayThrough:case topLevelTypes.topDurationChange:case topLevelTypes.topEmptied:case topLevelTypes.topEncrypted:case topLevelTypes.topEnded:case topLevelTypes.topError:case topLevelTypes.topInput:case topLevelTypes.topInvalid:case topLevelTypes.topLoad:case topLevelTypes.topLoadedData:case topLevelTypes.topLoadedMetadata:case topLevelTypes.topLoadStart:case topLevelTypes.topPause:case topLevelTypes.topPlay:case topLevelTypes.topPlaying:case topLevelTypes.topProgress:case topLevelTypes.topRateChange:case topLevelTypes.topReset:case topLevelTypes.topSeeked:case topLevelTypes.topSeeking:case topLevelTypes.topStalled:case topLevelTypes.topSubmit:case topLevelTypes.topSuspend:case topLevelTypes.topTimeUpdate:case topLevelTypes.topVolumeChange:case topLevelTypes.topWaiting:// HTML Events
// @see http://www.w3.org/TR/html5/index.html#events-0
EventConstructor=SyntheticEvent;break;case topLevelTypes.topKeyPress:// Firefox creates a keypress event for function keys too. This removes
// the unwanted keypress events. Enter is however both printable and
// non-printable. One would expect Tab to be as well (but it isn't).
if(getEventCharCode(nativeEvent)===0){return null;}/* falls through */case topLevelTypes.topKeyDown:case topLevelTypes.topKeyUp:EventConstructor=SyntheticKeyboardEvent;break;case topLevelTypes.topBlur:case topLevelTypes.topFocus:EventConstructor=SyntheticFocusEvent;break;case topLevelTypes.topClick:// Firefox creates a click event on right mouse clicks. This removes the
// unwanted click events.
if(nativeEvent.button===2){return null;}/* falls through */case topLevelTypes.topContextMenu:case topLevelTypes.topDoubleClick:case topLevelTypes.topMouseDown:case topLevelTypes.topMouseMove:case topLevelTypes.topMouseOut:case topLevelTypes.topMouseOver:case topLevelTypes.topMouseUp:EventConstructor=SyntheticMouseEvent;break;case topLevelTypes.topDrag:case topLevelTypes.topDragEnd:case topLevelTypes.topDragEnter:case topLevelTypes.topDragExit:case topLevelTypes.topDragLeave:case topLevelTypes.topDragOver:case topLevelTypes.topDragStart:case topLevelTypes.topDrop:EventConstructor=SyntheticDragEvent;break;case topLevelTypes.topTouchCancel:case topLevelTypes.topTouchEnd:case topLevelTypes.topTouchMove:case topLevelTypes.topTouchStart:EventConstructor=SyntheticTouchEvent;break;case topLevelTypes.topAnimationEnd:case topLevelTypes.topAnimationIteration:case topLevelTypes.topAnimationStart:EventConstructor=SyntheticAnimationEvent;break;case topLevelTypes.topTransitionEnd:EventConstructor=SyntheticTransitionEvent;break;case topLevelTypes.topScroll:EventConstructor=SyntheticUIEvent;break;case topLevelTypes.topWheel:EventConstructor=SyntheticWheelEvent;break;case topLevelTypes.topCopy:case topLevelTypes.topCut:case topLevelTypes.topPaste:EventConstructor=SyntheticClipboardEvent;break;}!EventConstructor?process.env.NODE_ENV!=='production'?invariant(false,'SimpleEventPlugin: Unhandled event type, `%s`.',topLevelType):_prodInvariant('86',topLevelType):void 0;var event=EventConstructor.getPooled(dispatchConfig,targetInst,nativeEvent,nativeEventTarget);EventPropagators.accumulateTwoPhaseDispatches(event);return event;},didPutListener:function didPutListener(inst,registrationName,listener){// Mobile Safari does not fire properly bubble click events on
// non-interactive elements, which means delegated click listeners do not
// fire. The workaround for this bug involves attaching an empty click
// listener on the target node.
if(registrationName===ON_CLICK_KEY){var key=getDictionaryKey(inst);var node=ReactDOMComponentTree.getNodeFromInstance(inst);if(!onClickListeners[key]){onClickListeners[key]=EventListener.listen(node,'click',emptyFunction);}}},willDeleteListener:function willDeleteListener(inst,registrationName){if(registrationName===ON_CLICK_KEY){var key=getDictionaryKey(inst);onClickListeners[key].remove();delete onClickListeners[key];}}};module.exports=SimpleEventPlugin;}).call(this,require('_process'));},{"./EventConstants":94,"./EventPropagators":98,"./ReactDOMComponentTree":120,"./SyntheticAnimationEvent":178,"./SyntheticClipboardEvent":179,"./SyntheticDragEvent":181,"./SyntheticEvent":182,"./SyntheticFocusEvent":183,"./SyntheticKeyboardEvent":185,"./SyntheticMouseEvent":186,"./SyntheticTouchEvent":187,"./SyntheticTransitionEvent":188,"./SyntheticUIEvent":189,"./SyntheticWheelEvent":190,"./getEventCharCode":203,"./reactProdInvariant":217,"_process":3,"fbjs/lib/EventListener":44,"fbjs/lib/emptyFunction":51,"fbjs/lib/invariant":59,"fbjs/lib/keyOf":63}],178:[function(require,module,exports){/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule SyntheticAnimationEvent
 */'use strict';var SyntheticEvent=require('./SyntheticEvent');/**
 * @interface Event
 * @see http://www.w3.org/TR/css3-animations/#AnimationEvent-interface
 * @see https://developer.mozilla.org/en-US/docs/Web/API/AnimationEvent
 */var AnimationEventInterface={animationName:null,elapsedTime:null,pseudoElement:null};/**
 * @param {object} dispatchConfig Configuration used to dispatch this event.
 * @param {string} dispatchMarker Marker identifying the event target.
 * @param {object} nativeEvent Native browser event.
 * @extends {SyntheticEvent}
 */function SyntheticAnimationEvent(dispatchConfig,dispatchMarker,nativeEvent,nativeEventTarget){return SyntheticEvent.call(this,dispatchConfig,dispatchMarker,nativeEvent,nativeEventTarget);}SyntheticEvent.augmentClass(SyntheticAnimationEvent,AnimationEventInterface);module.exports=SyntheticAnimationEvent;},{"./SyntheticEvent":182}],179:[function(require,module,exports){/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule SyntheticClipboardEvent
 */'use strict';var SyntheticEvent=require('./SyntheticEvent');/**
 * @interface Event
 * @see http://www.w3.org/TR/clipboard-apis/
 */var ClipboardEventInterface={clipboardData:function clipboardData(event){return'clipboardData'in event?event.clipboardData:window.clipboardData;}};/**
 * @param {object} dispatchConfig Configuration used to dispatch this event.
 * @param {string} dispatchMarker Marker identifying the event target.
 * @param {object} nativeEvent Native browser event.
 * @extends {SyntheticUIEvent}
 */function SyntheticClipboardEvent(dispatchConfig,dispatchMarker,nativeEvent,nativeEventTarget){return SyntheticEvent.call(this,dispatchConfig,dispatchMarker,nativeEvent,nativeEventTarget);}SyntheticEvent.augmentClass(SyntheticClipboardEvent,ClipboardEventInterface);module.exports=SyntheticClipboardEvent;},{"./SyntheticEvent":182}],180:[function(require,module,exports){/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule SyntheticCompositionEvent
 */'use strict';var SyntheticEvent=require('./SyntheticEvent');/**
 * @interface Event
 * @see http://www.w3.org/TR/DOM-Level-3-Events/#events-compositionevents
 */var CompositionEventInterface={data:null};/**
 * @param {object} dispatchConfig Configuration used to dispatch this event.
 * @param {string} dispatchMarker Marker identifying the event target.
 * @param {object} nativeEvent Native browser event.
 * @extends {SyntheticUIEvent}
 */function SyntheticCompositionEvent(dispatchConfig,dispatchMarker,nativeEvent,nativeEventTarget){return SyntheticEvent.call(this,dispatchConfig,dispatchMarker,nativeEvent,nativeEventTarget);}SyntheticEvent.augmentClass(SyntheticCompositionEvent,CompositionEventInterface);module.exports=SyntheticCompositionEvent;},{"./SyntheticEvent":182}],181:[function(require,module,exports){/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule SyntheticDragEvent
 */'use strict';var SyntheticMouseEvent=require('./SyntheticMouseEvent');/**
 * @interface DragEvent
 * @see http://www.w3.org/TR/DOM-Level-3-Events/
 */var DragEventInterface={dataTransfer:null};/**
 * @param {object} dispatchConfig Configuration used to dispatch this event.
 * @param {string} dispatchMarker Marker identifying the event target.
 * @param {object} nativeEvent Native browser event.
 * @extends {SyntheticUIEvent}
 */function SyntheticDragEvent(dispatchConfig,dispatchMarker,nativeEvent,nativeEventTarget){return SyntheticMouseEvent.call(this,dispatchConfig,dispatchMarker,nativeEvent,nativeEventTarget);}SyntheticMouseEvent.augmentClass(SyntheticDragEvent,DragEventInterface);module.exports=SyntheticDragEvent;},{"./SyntheticMouseEvent":186}],182:[function(require,module,exports){(function(process){/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule SyntheticEvent
 */'use strict';var _assign=require('object-assign');var PooledClass=require('./PooledClass');var emptyFunction=require('fbjs/lib/emptyFunction');var warning=require('fbjs/lib/warning');var didWarnForAddedNewProperty=false;var isProxySupported=typeof Proxy==='function';var shouldBeReleasedProperties=['dispatchConfig','_targetInst','nativeEvent','isDefaultPrevented','isPropagationStopped','_dispatchListeners','_dispatchInstances'];/**
 * @interface Event
 * @see http://www.w3.org/TR/DOM-Level-3-Events/
 */var EventInterface={type:null,target:null,// currentTarget is set when dispatching; no use in copying it here
currentTarget:emptyFunction.thatReturnsNull,eventPhase:null,bubbles:null,cancelable:null,timeStamp:function timeStamp(event){return event.timeStamp||Date.now();},defaultPrevented:null,isTrusted:null};/**
 * Synthetic events are dispatched by event plugins, typically in response to a
 * top-level event delegation handler.
 *
 * These systems should generally use pooling to reduce the frequency of garbage
 * collection. The system should check `isPersistent` to determine whether the
 * event should be released into the pool after being dispatched. Users that
 * need a persisted event should invoke `persist`.
 *
 * Synthetic events (and subclasses) implement the DOM Level 3 Events API by
 * normalizing browser quirks. Subclasses do not necessarily have to implement a
 * DOM interface; custom application-specific events can also subclass this.
 *
 * @param {object} dispatchConfig Configuration used to dispatch this event.
 * @param {*} targetInst Marker identifying the event target.
 * @param {object} nativeEvent Native browser event.
 * @param {DOMEventTarget} nativeEventTarget Target node.
 */function SyntheticEvent(dispatchConfig,targetInst,nativeEvent,nativeEventTarget){if(process.env.NODE_ENV!=='production'){// these have a getter/setter for warnings
delete this.nativeEvent;delete this.preventDefault;delete this.stopPropagation;}this.dispatchConfig=dispatchConfig;this._targetInst=targetInst;this.nativeEvent=nativeEvent;var Interface=this.constructor.Interface;for(var propName in Interface){if(!Interface.hasOwnProperty(propName)){continue;}if(process.env.NODE_ENV!=='production'){delete this[propName];// this has a getter/setter for warnings
}var normalize=Interface[propName];if(normalize){this[propName]=normalize(nativeEvent);}else{if(propName==='target'){this.target=nativeEventTarget;}else{this[propName]=nativeEvent[propName];}}}var defaultPrevented=nativeEvent.defaultPrevented!=null?nativeEvent.defaultPrevented:nativeEvent.returnValue===false;if(defaultPrevented){this.isDefaultPrevented=emptyFunction.thatReturnsTrue;}else{this.isDefaultPrevented=emptyFunction.thatReturnsFalse;}this.isPropagationStopped=emptyFunction.thatReturnsFalse;return this;}_assign(SyntheticEvent.prototype,{preventDefault:function preventDefault(){this.defaultPrevented=true;var event=this.nativeEvent;if(!event){return;}if(event.preventDefault){event.preventDefault();}else if(typeof event.returnValue!=='unknown'){// eslint-disable-line valid-typeof
event.returnValue=false;}this.isDefaultPrevented=emptyFunction.thatReturnsTrue;},stopPropagation:function stopPropagation(){var event=this.nativeEvent;if(!event){return;}if(event.stopPropagation){event.stopPropagation();}else if(typeof event.cancelBubble!=='unknown'){// eslint-disable-line valid-typeof
// The ChangeEventPlugin registers a "propertychange" event for
// IE. This event does not support bubbling or cancelling, and
// any references to cancelBubble throw "Member not found".  A
// typeof check of "unknown" circumvents this issue (and is also
// IE specific).
event.cancelBubble=true;}this.isPropagationStopped=emptyFunction.thatReturnsTrue;},/**
   * We release all dispatched `SyntheticEvent`s after each event loop, adding
   * them back into the pool. This allows a way to hold onto a reference that
   * won't be added back into the pool.
   */persist:function persist(){this.isPersistent=emptyFunction.thatReturnsTrue;},/**
   * Checks if this event should be released back into the pool.
   *
   * @return {boolean} True if this should not be released, false otherwise.
   */isPersistent:emptyFunction.thatReturnsFalse,/**
   * `PooledClass` looks for `destructor` on each instance it releases.
   */destructor:function destructor(){var Interface=this.constructor.Interface;for(var propName in Interface){if(process.env.NODE_ENV!=='production'){Object.defineProperty(this,propName,getPooledWarningPropertyDefinition(propName,Interface[propName]));}else{this[propName]=null;}}for(var i=0;i<shouldBeReleasedProperties.length;i++){this[shouldBeReleasedProperties[i]]=null;}if(process.env.NODE_ENV!=='production'){Object.defineProperty(this,'nativeEvent',getPooledWarningPropertyDefinition('nativeEvent',null));Object.defineProperty(this,'preventDefault',getPooledWarningPropertyDefinition('preventDefault',emptyFunction));Object.defineProperty(this,'stopPropagation',getPooledWarningPropertyDefinition('stopPropagation',emptyFunction));}}});SyntheticEvent.Interface=EventInterface;if(process.env.NODE_ENV!=='production'){if(isProxySupported){/*eslint-disable no-func-assign */SyntheticEvent=new Proxy(SyntheticEvent,{construct:function construct(target,args){return this.apply(target,Object.create(target.prototype),args);},apply:function apply(constructor,that,args){return new Proxy(constructor.apply(that,args),{set:function set(target,prop,value){if(prop!=='isPersistent'&&!target.constructor.Interface.hasOwnProperty(prop)&&shouldBeReleasedProperties.indexOf(prop)===-1){process.env.NODE_ENV!=='production'?warning(didWarnForAddedNewProperty||target.isPersistent(),'This synthetic event is reused for performance reasons. If you\'re '+'seeing this, you\'re adding a new property in the synthetic event object. '+'The property is never released. See '+'https://fb.me/react-event-pooling for more information.'):void 0;didWarnForAddedNewProperty=true;}target[prop]=value;return true;}});}});/*eslint-enable no-func-assign */}}/**
 * Helper to reduce boilerplate when creating subclasses.
 *
 * @param {function} Class
 * @param {?object} Interface
 */SyntheticEvent.augmentClass=function(Class,Interface){var Super=this;var E=function E(){};E.prototype=Super.prototype;var prototype=new E();_assign(prototype,Class.prototype);Class.prototype=prototype;Class.prototype.constructor=Class;Class.Interface=_assign({},Super.Interface,Interface);Class.augmentClass=Super.augmentClass;PooledClass.addPoolingTo(Class,PooledClass.fourArgumentPooler);};PooledClass.addPoolingTo(SyntheticEvent,PooledClass.fourArgumentPooler);module.exports=SyntheticEvent;/**
  * Helper to nullify syntheticEvent instance properties when destructing
  *
  * @param {object} SyntheticEvent
  * @param {String} propName
  * @return {object} defineProperty object
  */function getPooledWarningPropertyDefinition(propName,getVal){var isFunction=typeof getVal==='function';return{configurable:true,set:set,get:get};function set(val){var action=isFunction?'setting the method':'setting the property';warn(action,'This is effectively a no-op');return val;}function get(){var action=isFunction?'accessing the method':'accessing the property';var result=isFunction?'This is a no-op function':'This is set to null';warn(action,result);return getVal;}function warn(action,result){var warningCondition=false;process.env.NODE_ENV!=='production'?warning(warningCondition,'This synthetic event is reused for performance reasons. If you\'re seeing this, '+'you\'re %s `%s` on a released/nullified synthetic event. %s. '+'If you must keep the original synthetic event around, use event.persist(). '+'See https://fb.me/react-event-pooling for more information.',action,propName,result):void 0;}}}).call(this,require('_process'));},{"./PooledClass":103,"_process":3,"fbjs/lib/emptyFunction":51,"fbjs/lib/warning":68,"object-assign":344}],183:[function(require,module,exports){/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule SyntheticFocusEvent
 */'use strict';var SyntheticUIEvent=require('./SyntheticUIEvent');/**
 * @interface FocusEvent
 * @see http://www.w3.org/TR/DOM-Level-3-Events/
 */var FocusEventInterface={relatedTarget:null};/**
 * @param {object} dispatchConfig Configuration used to dispatch this event.
 * @param {string} dispatchMarker Marker identifying the event target.
 * @param {object} nativeEvent Native browser event.
 * @extends {SyntheticUIEvent}
 */function SyntheticFocusEvent(dispatchConfig,dispatchMarker,nativeEvent,nativeEventTarget){return SyntheticUIEvent.call(this,dispatchConfig,dispatchMarker,nativeEvent,nativeEventTarget);}SyntheticUIEvent.augmentClass(SyntheticFocusEvent,FocusEventInterface);module.exports=SyntheticFocusEvent;},{"./SyntheticUIEvent":189}],184:[function(require,module,exports){/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule SyntheticInputEvent
 */'use strict';var SyntheticEvent=require('./SyntheticEvent');/**
 * @interface Event
 * @see http://www.w3.org/TR/2013/WD-DOM-Level-3-Events-20131105
 *      /#events-inputevents
 */var InputEventInterface={data:null};/**
 * @param {object} dispatchConfig Configuration used to dispatch this event.
 * @param {string} dispatchMarker Marker identifying the event target.
 * @param {object} nativeEvent Native browser event.
 * @extends {SyntheticUIEvent}
 */function SyntheticInputEvent(dispatchConfig,dispatchMarker,nativeEvent,nativeEventTarget){return SyntheticEvent.call(this,dispatchConfig,dispatchMarker,nativeEvent,nativeEventTarget);}SyntheticEvent.augmentClass(SyntheticInputEvent,InputEventInterface);module.exports=SyntheticInputEvent;},{"./SyntheticEvent":182}],185:[function(require,module,exports){/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule SyntheticKeyboardEvent
 */'use strict';var SyntheticUIEvent=require('./SyntheticUIEvent');var getEventCharCode=require('./getEventCharCode');var getEventKey=require('./getEventKey');var getEventModifierState=require('./getEventModifierState');/**
 * @interface KeyboardEvent
 * @see http://www.w3.org/TR/DOM-Level-3-Events/
 */var KeyboardEventInterface={key:getEventKey,location:null,ctrlKey:null,shiftKey:null,altKey:null,metaKey:null,repeat:null,locale:null,getModifierState:getEventModifierState,// Legacy Interface
charCode:function charCode(event){// `charCode` is the result of a KeyPress event and represents the value of
// the actual printable character.
// KeyPress is deprecated, but its replacement is not yet final and not
// implemented in any major browser. Only KeyPress has charCode.
if(event.type==='keypress'){return getEventCharCode(event);}return 0;},keyCode:function keyCode(event){// `keyCode` is the result of a KeyDown/Up event and represents the value of
// physical keyboard key.
// The actual meaning of the value depends on the users' keyboard layout
// which cannot be detected. Assuming that it is a US keyboard layout
// provides a surprisingly accurate mapping for US and European users.
// Due to this, it is left to the user to implement at this time.
if(event.type==='keydown'||event.type==='keyup'){return event.keyCode;}return 0;},which:function which(event){// `which` is an alias for either `keyCode` or `charCode` depending on the
// type of the event.
if(event.type==='keypress'){return getEventCharCode(event);}if(event.type==='keydown'||event.type==='keyup'){return event.keyCode;}return 0;}};/**
 * @param {object} dispatchConfig Configuration used to dispatch this event.
 * @param {string} dispatchMarker Marker identifying the event target.
 * @param {object} nativeEvent Native browser event.
 * @extends {SyntheticUIEvent}
 */function SyntheticKeyboardEvent(dispatchConfig,dispatchMarker,nativeEvent,nativeEventTarget){return SyntheticUIEvent.call(this,dispatchConfig,dispatchMarker,nativeEvent,nativeEventTarget);}SyntheticUIEvent.augmentClass(SyntheticKeyboardEvent,KeyboardEventInterface);module.exports=SyntheticKeyboardEvent;},{"./SyntheticUIEvent":189,"./getEventCharCode":203,"./getEventKey":204,"./getEventModifierState":205}],186:[function(require,module,exports){/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule SyntheticMouseEvent
 */'use strict';var SyntheticUIEvent=require('./SyntheticUIEvent');var ViewportMetrics=require('./ViewportMetrics');var getEventModifierState=require('./getEventModifierState');/**
 * @interface MouseEvent
 * @see http://www.w3.org/TR/DOM-Level-3-Events/
 */var MouseEventInterface={screenX:null,screenY:null,clientX:null,clientY:null,ctrlKey:null,shiftKey:null,altKey:null,metaKey:null,getModifierState:getEventModifierState,button:function button(event){// Webkit, Firefox, IE9+
// which:  1 2 3
// button: 0 1 2 (standard)
var button=event.button;if('which'in event){return button;}// IE<9
// which:  undefined
// button: 0 0 0
// button: 1 4 2 (onmouseup)
return button===2?2:button===4?1:0;},buttons:null,relatedTarget:function relatedTarget(event){return event.relatedTarget||(event.fromElement===event.srcElement?event.toElement:event.fromElement);},// "Proprietary" Interface.
pageX:function pageX(event){return'pageX'in event?event.pageX:event.clientX+ViewportMetrics.currentScrollLeft;},pageY:function pageY(event){return'pageY'in event?event.pageY:event.clientY+ViewportMetrics.currentScrollTop;}};/**
 * @param {object} dispatchConfig Configuration used to dispatch this event.
 * @param {string} dispatchMarker Marker identifying the event target.
 * @param {object} nativeEvent Native browser event.
 * @extends {SyntheticUIEvent}
 */function SyntheticMouseEvent(dispatchConfig,dispatchMarker,nativeEvent,nativeEventTarget){return SyntheticUIEvent.call(this,dispatchConfig,dispatchMarker,nativeEvent,nativeEventTarget);}SyntheticUIEvent.augmentClass(SyntheticMouseEvent,MouseEventInterface);module.exports=SyntheticMouseEvent;},{"./SyntheticUIEvent":189,"./ViewportMetrics":192,"./getEventModifierState":205}],187:[function(require,module,exports){/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule SyntheticTouchEvent
 */'use strict';var SyntheticUIEvent=require('./SyntheticUIEvent');var getEventModifierState=require('./getEventModifierState');/**
 * @interface TouchEvent
 * @see http://www.w3.org/TR/touch-events/
 */var TouchEventInterface={touches:null,targetTouches:null,changedTouches:null,altKey:null,metaKey:null,ctrlKey:null,shiftKey:null,getModifierState:getEventModifierState};/**
 * @param {object} dispatchConfig Configuration used to dispatch this event.
 * @param {string} dispatchMarker Marker identifying the event target.
 * @param {object} nativeEvent Native browser event.
 * @extends {SyntheticUIEvent}
 */function SyntheticTouchEvent(dispatchConfig,dispatchMarker,nativeEvent,nativeEventTarget){return SyntheticUIEvent.call(this,dispatchConfig,dispatchMarker,nativeEvent,nativeEventTarget);}SyntheticUIEvent.augmentClass(SyntheticTouchEvent,TouchEventInterface);module.exports=SyntheticTouchEvent;},{"./SyntheticUIEvent":189,"./getEventModifierState":205}],188:[function(require,module,exports){/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule SyntheticTransitionEvent
 */'use strict';var SyntheticEvent=require('./SyntheticEvent');/**
 * @interface Event
 * @see http://www.w3.org/TR/2009/WD-css3-transitions-20090320/#transition-events-
 * @see https://developer.mozilla.org/en-US/docs/Web/API/TransitionEvent
 */var TransitionEventInterface={propertyName:null,elapsedTime:null,pseudoElement:null};/**
 * @param {object} dispatchConfig Configuration used to dispatch this event.
 * @param {string} dispatchMarker Marker identifying the event target.
 * @param {object} nativeEvent Native browser event.
 * @extends {SyntheticEvent}
 */function SyntheticTransitionEvent(dispatchConfig,dispatchMarker,nativeEvent,nativeEventTarget){return SyntheticEvent.call(this,dispatchConfig,dispatchMarker,nativeEvent,nativeEventTarget);}SyntheticEvent.augmentClass(SyntheticTransitionEvent,TransitionEventInterface);module.exports=SyntheticTransitionEvent;},{"./SyntheticEvent":182}],189:[function(require,module,exports){/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule SyntheticUIEvent
 */'use strict';var SyntheticEvent=require('./SyntheticEvent');var getEventTarget=require('./getEventTarget');/**
 * @interface UIEvent
 * @see http://www.w3.org/TR/DOM-Level-3-Events/
 */var UIEventInterface={view:function view(event){if(event.view){return event.view;}var target=getEventTarget(event);if(target.window===target){// target is a window object
return target;}var doc=target.ownerDocument;// TODO: Figure out why `ownerDocument` is sometimes undefined in IE8.
if(doc){return doc.defaultView||doc.parentWindow;}else{return window;}},detail:function detail(event){return event.detail||0;}};/**
 * @param {object} dispatchConfig Configuration used to dispatch this event.
 * @param {string} dispatchMarker Marker identifying the event target.
 * @param {object} nativeEvent Native browser event.
 * @extends {SyntheticEvent}
 */function SyntheticUIEvent(dispatchConfig,dispatchMarker,nativeEvent,nativeEventTarget){return SyntheticEvent.call(this,dispatchConfig,dispatchMarker,nativeEvent,nativeEventTarget);}SyntheticEvent.augmentClass(SyntheticUIEvent,UIEventInterface);module.exports=SyntheticUIEvent;},{"./SyntheticEvent":182,"./getEventTarget":206}],190:[function(require,module,exports){/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule SyntheticWheelEvent
 */'use strict';var SyntheticMouseEvent=require('./SyntheticMouseEvent');/**
 * @interface WheelEvent
 * @see http://www.w3.org/TR/DOM-Level-3-Events/
 */var WheelEventInterface={deltaX:function deltaX(event){return'deltaX'in event?event.deltaX:// Fallback to `wheelDeltaX` for Webkit and normalize (right is positive).
'wheelDeltaX'in event?-event.wheelDeltaX:0;},deltaY:function deltaY(event){return'deltaY'in event?event.deltaY:// Fallback to `wheelDeltaY` for Webkit and normalize (down is positive).
'wheelDeltaY'in event?-event.wheelDeltaY:// Fallback to `wheelDelta` for IE<9 and normalize (down is positive).
'wheelDelta'in event?-event.wheelDelta:0;},deltaZ:null,// Browsers without "deltaMode" is reporting in raw wheel delta where one
// notch on the scroll is always +/- 120, roughly equivalent to pixels.
// A good approximation of DOM_DELTA_LINE (1) is 5% of viewport size or
// ~40 pixels, for DOM_DELTA_SCREEN (2) it is 87.5% of viewport size.
deltaMode:null};/**
 * @param {object} dispatchConfig Configuration used to dispatch this event.
 * @param {string} dispatchMarker Marker identifying the event target.
 * @param {object} nativeEvent Native browser event.
 * @extends {SyntheticMouseEvent}
 */function SyntheticWheelEvent(dispatchConfig,dispatchMarker,nativeEvent,nativeEventTarget){return SyntheticMouseEvent.call(this,dispatchConfig,dispatchMarker,nativeEvent,nativeEventTarget);}SyntheticMouseEvent.augmentClass(SyntheticWheelEvent,WheelEventInterface);module.exports=SyntheticWheelEvent;},{"./SyntheticMouseEvent":186}],191:[function(require,module,exports){(function(process){/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule Transaction
 */'use strict';var _prodInvariant=require('./reactProdInvariant');var invariant=require('fbjs/lib/invariant');/**
 * `Transaction` creates a black box that is able to wrap any method such that
 * certain invariants are maintained before and after the method is invoked
 * (Even if an exception is thrown while invoking the wrapped method). Whoever
 * instantiates a transaction can provide enforcers of the invariants at
 * creation time. The `Transaction` class itself will supply one additional
 * automatic invariant for you - the invariant that any transaction instance
 * should not be run while it is already being run. You would typically create a
 * single instance of a `Transaction` for reuse multiple times, that potentially
 * is used to wrap several different methods. Wrappers are extremely simple -
 * they only require implementing two methods.
 *
 * <pre>
 *                       wrappers (injected at creation time)
 *                                      +        +
 *                                      |        |
 *                    +-----------------|--------|--------------+
 *                    |                 v        |              |
 *                    |      +---------------+   |              |
 *                    |   +--|    wrapper1   |---|----+         |
 *                    |   |  +---------------+   v    |         |
 *                    |   |          +-------------+  |         |
 *                    |   |     +----|   wrapper2  |--------+   |
 *                    |   |     |    +-------------+  |     |   |
 *                    |   |     |                     |     |   |
 *                    |   v     v                     v     v   | wrapper
 *                    | +---+ +---+   +---------+   +---+ +---+ | invariants
 * perform(anyMethod) | |   | |   |   |         |   |   | |   | | maintained
 * +----------------->|-|---|-|---|-->|anyMethod|---|---|-|---|-|-------->
 *                    | |   | |   |   |         |   |   | |   | |
 *                    | |   | |   |   |         |   |   | |   | |
 *                    | |   | |   |   |         |   |   | |   | |
 *                    | +---+ +---+   +---------+   +---+ +---+ |
 *                    |  initialize                    close    |
 *                    +-----------------------------------------+
 * </pre>
 *
 * Use cases:
 * - Preserving the input selection ranges before/after reconciliation.
 *   Restoring selection even in the event of an unexpected error.
 * - Deactivating events while rearranging the DOM, preventing blurs/focuses,
 *   while guaranteeing that afterwards, the event system is reactivated.
 * - Flushing a queue of collected DOM mutations to the main UI thread after a
 *   reconciliation takes place in a worker thread.
 * - Invoking any collected `componentDidUpdate` callbacks after rendering new
 *   content.
 * - (Future use case): Wrapping particular flushes of the `ReactWorker` queue
 *   to preserve the `scrollTop` (an automatic scroll aware DOM).
 * - (Future use case): Layout calculations before and after DOM updates.
 *
 * Transactional plugin API:
 * - A module that has an `initialize` method that returns any precomputation.
 * - and a `close` method that accepts the precomputation. `close` is invoked
 *   when the wrapped process is completed, or has failed.
 *
 * @param {Array<TransactionalWrapper>} transactionWrapper Wrapper modules
 * that implement `initialize` and `close`.
 * @return {Transaction} Single transaction for reuse in thread.
 *
 * @class Transaction
 */var Mixin={/**
   * Sets up this instance so that it is prepared for collecting metrics. Does
   * so such that this setup method may be used on an instance that is already
   * initialized, in a way that does not consume additional memory upon reuse.
   * That can be useful if you decide to make your subclass of this mixin a
   * "PooledClass".
   */reinitializeTransaction:function reinitializeTransaction(){this.transactionWrappers=this.getTransactionWrappers();if(this.wrapperInitData){this.wrapperInitData.length=0;}else{this.wrapperInitData=[];}this._isInTransaction=false;},_isInTransaction:false,/**
   * @abstract
   * @return {Array<TransactionWrapper>} Array of transaction wrappers.
   */getTransactionWrappers:null,isInTransaction:function isInTransaction(){return!!this._isInTransaction;},/**
   * Executes the function within a safety window. Use this for the top level
   * methods that result in large amounts of computation/mutations that would
   * need to be safety checked. The optional arguments helps prevent the need
   * to bind in many cases.
   *
   * @param {function} method Member of scope to call.
   * @param {Object} scope Scope to invoke from.
   * @param {Object?=} a Argument to pass to the method.
   * @param {Object?=} b Argument to pass to the method.
   * @param {Object?=} c Argument to pass to the method.
   * @param {Object?=} d Argument to pass to the method.
   * @param {Object?=} e Argument to pass to the method.
   * @param {Object?=} f Argument to pass to the method.
   *
   * @return {*} Return value from `method`.
   */perform:function perform(method,scope,a,b,c,d,e,f){!!this.isInTransaction()?process.env.NODE_ENV!=='production'?invariant(false,'Transaction.perform(...): Cannot initialize a transaction when there is already an outstanding transaction.'):_prodInvariant('27'):void 0;var errorThrown;var ret;try{this._isInTransaction=true;// Catching errors makes debugging more difficult, so we start with
// errorThrown set to true before setting it to false after calling
// close -- if it's still set to true in the finally block, it means
// one of these calls threw.
errorThrown=true;this.initializeAll(0);ret=method.call(scope,a,b,c,d,e,f);errorThrown=false;}finally{try{if(errorThrown){// If `method` throws, prefer to show that stack trace over any thrown
// by invoking `closeAll`.
try{this.closeAll(0);}catch(err){}}else{// Since `method` didn't throw, we don't want to silence the exception
// here.
this.closeAll(0);}}finally{this._isInTransaction=false;}}return ret;},initializeAll:function initializeAll(startIndex){var transactionWrappers=this.transactionWrappers;for(var i=startIndex;i<transactionWrappers.length;i++){var wrapper=transactionWrappers[i];try{// Catching errors makes debugging more difficult, so we start with the
// OBSERVED_ERROR state before overwriting it with the real return value
// of initialize -- if it's still set to OBSERVED_ERROR in the finally
// block, it means wrapper.initialize threw.
this.wrapperInitData[i]=Transaction.OBSERVED_ERROR;this.wrapperInitData[i]=wrapper.initialize?wrapper.initialize.call(this):null;}finally{if(this.wrapperInitData[i]===Transaction.OBSERVED_ERROR){// The initializer for wrapper i threw an error; initialize the
// remaining wrappers but silence any exceptions from them to ensure
// that the first error is the one to bubble up.
try{this.initializeAll(i+1);}catch(err){}}}}},/**
   * Invokes each of `this.transactionWrappers.close[i]` functions, passing into
   * them the respective return values of `this.transactionWrappers.init[i]`
   * (`close`rs that correspond to initializers that failed will not be
   * invoked).
   */closeAll:function closeAll(startIndex){!this.isInTransaction()?process.env.NODE_ENV!=='production'?invariant(false,'Transaction.closeAll(): Cannot close transaction when none are open.'):_prodInvariant('28'):void 0;var transactionWrappers=this.transactionWrappers;for(var i=startIndex;i<transactionWrappers.length;i++){var wrapper=transactionWrappers[i];var initData=this.wrapperInitData[i];var errorThrown;try{// Catching errors makes debugging more difficult, so we start with
// errorThrown set to true before setting it to false after calling
// close -- if it's still set to true in the finally block, it means
// wrapper.close threw.
errorThrown=true;if(initData!==Transaction.OBSERVED_ERROR&&wrapper.close){wrapper.close.call(this,initData);}errorThrown=false;}finally{if(errorThrown){// The closer for wrapper i threw an error; close the remaining
// wrappers but silence any exceptions from them to ensure that the
// first error is the one to bubble up.
try{this.closeAll(i+1);}catch(e){}}}}this.wrapperInitData.length=0;}};var Transaction={Mixin:Mixin,/**
   * Token to look for to determine if an error occurred.
   */OBSERVED_ERROR:{}};module.exports=Transaction;}).call(this,require('_process'));},{"./reactProdInvariant":217,"_process":3,"fbjs/lib/invariant":59}],192:[function(require,module,exports){/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ViewportMetrics
 */'use strict';var ViewportMetrics={currentScrollLeft:0,currentScrollTop:0,refreshScrollValues:function refreshScrollValues(scrollPosition){ViewportMetrics.currentScrollLeft=scrollPosition.x;ViewportMetrics.currentScrollTop=scrollPosition.y;}};module.exports=ViewportMetrics;},{}],193:[function(require,module,exports){(function(process){/**
 * Copyright 2014-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule accumulateInto
 * 
 */'use strict';var _prodInvariant=require('./reactProdInvariant');var invariant=require('fbjs/lib/invariant');/**
 * Accumulates items that must not be null or undefined into the first one. This
 * is used to conserve memory by avoiding array allocations, and thus sacrifices
 * API cleanness. Since `current` can be null before being passed in and not
 * null after this function, make sure to assign it back to `current`:
 *
 * `a = accumulateInto(a, b);`
 *
 * This API should be sparingly used. Try `accumulate` for something cleaner.
 *
 * @return {*|array<*>} An accumulation of items.
 */function accumulateInto(current,next){!(next!=null)?process.env.NODE_ENV!=='production'?invariant(false,'accumulateInto(...): Accumulated items must not be null or undefined.'):_prodInvariant('30'):void 0;if(current==null){return next;}// Both are not empty. Warning: Never call x.concat(y) when you are not
// certain that x is an Array (x could be a string with concat method).
if(Array.isArray(current)){if(Array.isArray(next)){current.push.apply(current,next);return current;}current.push(next);return current;}if(Array.isArray(next)){// A bit too dangerous to mutate `next`.
return[current].concat(next);}return[current,next];}module.exports=accumulateInto;}).call(this,require('_process'));},{"./reactProdInvariant":217,"_process":3,"fbjs/lib/invariant":59}],194:[function(require,module,exports){/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule adler32
 * 
 */'use strict';var MOD=65521;// adler32 is not cryptographically strong, and is only used to sanity check that
// markup generated on the server matches the markup generated on the client.
// This implementation (a modified version of the SheetJS version) has been optimized
// for our use case, at the expense of conforming to the adler32 specification
// for non-ascii inputs.
function adler32(data){var a=1;var b=0;var i=0;var l=data.length;var m=l&~0x3;while(i<m){var n=Math.min(i+4096,m);for(;i<n;i+=4){b+=(a+=data.charCodeAt(i))+(a+=data.charCodeAt(i+1))+(a+=data.charCodeAt(i+2))+(a+=data.charCodeAt(i+3));}a%=MOD;b%=MOD;}for(;i<l;i++){b+=a+=data.charCodeAt(i);}a%=MOD;b%=MOD;return a|b<<16;}module.exports=adler32;},{}],195:[function(require,module,exports){(function(process){/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule canDefineProperty
 */'use strict';var canDefineProperty=false;if(process.env.NODE_ENV!=='production'){try{Object.defineProperty({},'x',{get:function get(){}});canDefineProperty=true;}catch(x){// IE will fail on defineProperty
}}module.exports=canDefineProperty;}).call(this,require('_process'));},{"_process":3}],196:[function(require,module,exports){(function(process){/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule checkReactTypeSpec
 */'use strict';var _prodInvariant=require('./reactProdInvariant');var ReactPropTypeLocationNames=require('./ReactPropTypeLocationNames');var ReactPropTypesSecret=require('./ReactPropTypesSecret');var invariant=require('fbjs/lib/invariant');var warning=require('fbjs/lib/warning');var ReactComponentTreeHook;if(typeof process!=='undefined'&&process.env&&process.env.NODE_ENV==='test'){// Temporary hack.
// Inline requires don't work well with Jest:
// https://github.com/facebook/react/issues/7240
// Remove the inline requires when we don't need them anymore:
// https://github.com/facebook/react/pull/7178
ReactComponentTreeHook=require('./ReactComponentTreeHook');}var loggedTypeFailures={};/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?object} element The React element that is being type-checked
 * @param {?number} debugID The React component instance that is being type-checked
 * @private
 */function checkReactTypeSpec(typeSpecs,values,location,componentName,element,debugID){for(var typeSpecName in typeSpecs){if(typeSpecs.hasOwnProperty(typeSpecName)){var error;// Prop type validation may throw. In case they do, we don't want to
// fail the render phase where it didn't fail before. So we log it.
// After these have been cleaned up, we'll let them throw.
try{// This is intentionally an invariant that gets caught. It's the same
// behavior as without this statement except with a better message.
!(typeof typeSpecs[typeSpecName]==='function')?process.env.NODE_ENV!=='production'?invariant(false,'%s: %s type `%s` is invalid; it must be a function, usually from React.PropTypes.',componentName||'React class',ReactPropTypeLocationNames[location],typeSpecName):_prodInvariant('84',componentName||'React class',ReactPropTypeLocationNames[location],typeSpecName):void 0;error=typeSpecs[typeSpecName](values,typeSpecName,componentName,location,null,ReactPropTypesSecret);}catch(ex){error=ex;}process.env.NODE_ENV!=='production'?warning(!error||error instanceof Error,'%s: type specification of %s `%s` is invalid; the type checker '+'function must return `null` or an `Error` but returned a %s. '+'You may have forgotten to pass an argument to the type checker '+'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and '+'shape all require an argument).',componentName||'React class',ReactPropTypeLocationNames[location],typeSpecName,typeof error==="undefined"?"undefined":_typeof4(error)):void 0;if(error instanceof Error&&!(error.message in loggedTypeFailures)){// Only monitor this failure once because there tends to be a lot of the
// same error.
loggedTypeFailures[error.message]=true;var componentStackInfo='';if(process.env.NODE_ENV!=='production'){if(!ReactComponentTreeHook){ReactComponentTreeHook=require('./ReactComponentTreeHook');}if(debugID!==null){componentStackInfo=ReactComponentTreeHook.getStackAddendumByID(debugID);}else if(element!==null){componentStackInfo=ReactComponentTreeHook.getCurrentStackAddendum(element);}}process.env.NODE_ENV!=='production'?warning(false,'Failed %s type: %s%s',location,error.message,componentStackInfo):void 0;}}}}module.exports=checkReactTypeSpec;}).call(this,require('_process'));},{"./ReactComponentTreeHook":113,"./ReactPropTypeLocationNames":160,"./ReactPropTypesSecret":163,"./reactProdInvariant":217,"_process":3,"fbjs/lib/invariant":59,"fbjs/lib/warning":68}],197:[function(require,module,exports){/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule createMicrosoftUnsafeLocalFunction
 *//* globals MSApp */'use strict';/**
 * Create a function which has 'unsafe' privileges (required by windows8 apps)
 */var createMicrosoftUnsafeLocalFunction=function createMicrosoftUnsafeLocalFunction(func){if(typeof MSApp!=='undefined'&&MSApp.execUnsafeLocalFunction){return function(arg0,arg1,arg2,arg3){MSApp.execUnsafeLocalFunction(function(){return func(arg0,arg1,arg2,arg3);});};}else{return func;}};module.exports=createMicrosoftUnsafeLocalFunction;},{}],198:[function(require,module,exports){(function(process){/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule dangerousStyleValue
 */'use strict';var CSSProperty=require('./CSSProperty');var warning=require('fbjs/lib/warning');var isUnitlessNumber=CSSProperty.isUnitlessNumber;var styleWarnings={};/**
 * Convert a value into the proper css writable value. The style name `name`
 * should be logical (no hyphens), as specified
 * in `CSSProperty.isUnitlessNumber`.
 *
 * @param {string} name CSS property name such as `topMargin`.
 * @param {*} value CSS property value such as `10px`.
 * @param {ReactDOMComponent} component
 * @return {string} Normalized style value with dimensions applied.
 */function dangerousStyleValue(name,value,component){// Note that we've removed escapeTextForBrowser() calls here since the
// whole string will be escaped when the attribute is injected into
// the markup. If you provide unsafe user data here they can inject
// arbitrary CSS which may be problematic (I couldn't repro this):
// https://www.owasp.org/index.php/XSS_Filter_Evasion_Cheat_Sheet
// http://www.thespanner.co.uk/2007/11/26/ultimate-xss-css-injection/
// This is not an XSS hole but instead a potential CSS injection issue
// which has lead to a greater discussion about how we're going to
// trust URLs moving forward. See #2115901
var isEmpty=value==null||typeof value==='boolean'||value==='';if(isEmpty){return'';}var isNonNumeric=isNaN(value);if(isNonNumeric||value===0||isUnitlessNumber.hasOwnProperty(name)&&isUnitlessNumber[name]){return''+value;// cast to string
}if(typeof value==='string'){if(process.env.NODE_ENV!=='production'){// Allow '0' to pass through without warning. 0 is already special and
// doesn't require units, so we don't need to warn about it.
if(component&&value!=='0'){var owner=component._currentElement._owner;var ownerName=owner?owner.getName():null;if(ownerName&&!styleWarnings[ownerName]){styleWarnings[ownerName]={};}var warned=false;if(ownerName){var warnings=styleWarnings[ownerName];warned=warnings[name];if(!warned){warnings[name]=true;}}if(!warned){process.env.NODE_ENV!=='production'?warning(false,'a `%s` tag (owner: `%s`) was passed a numeric string value '+'for CSS property `%s` (value: `%s`) which will be treated '+'as a unitless number in a future version of React.',component._currentElement.type,ownerName||'unknown',name,value):void 0;}}}value=value.trim();}return value+'px';}module.exports=dangerousStyleValue;}).call(this,require('_process'));},{"./CSSProperty":81,"_process":3,"fbjs/lib/warning":68}],199:[function(require,module,exports){/**
 * Copyright 2016-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * Based on the escape-html library, which is used under the MIT License below:
 *
 * Copyright (c) 2012-2013 TJ Holowaychuk
 * Copyright (c) 2015 Andreas Lubbe
 * Copyright (c) 2015 Tiancheng "Timothy" Gu
 *
 * Permission is hereby granted, free of charge, to any person obtaining
 * a copy of this software and associated documentation files (the
 * 'Software'), to deal in the Software without restriction, including
 * without limitation the rights to use, copy, modify, merge, publish,
 * distribute, sublicense, and/or sell copies of the Software, and to
 * permit persons to whom the Software is furnished to do so, subject to
 * the following conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
 * IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
 * CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
 * TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
 * SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 *
 * @providesModule escapeTextContentForBrowser
 */'use strict';// code copied and modified from escape-html
/**
 * Module variables.
 * @private
 */var matchHtmlRegExp=/["'&<>]/;/**
 * Escape special characters in the given string of html.
 *
 * @param  {string} string The string to escape for inserting into HTML
 * @return {string}
 * @public
 */function escapeHtml(string){var str=''+string;var match=matchHtmlRegExp.exec(str);if(!match){return str;}var escape;var html='';var index=0;var lastIndex=0;for(index=match.index;index<str.length;index++){switch(str.charCodeAt(index)){case 34:// "
escape='&quot;';break;case 38:// &
escape='&amp;';break;case 39:// '
escape='&#x27;';// modified from escape-html; used to be '&#39'
break;case 60:// <
escape='&lt;';break;case 62:// >
escape='&gt;';break;default:continue;}if(lastIndex!==index){html+=str.substring(lastIndex,index);}lastIndex=index+1;html+=escape;}return lastIndex!==index?html+str.substring(lastIndex,index):html;}// end code copied and modified from escape-html
/**
 * Escapes text to prevent scripting attacks.
 *
 * @param {*} text Text value to escape.
 * @return {string} An escaped string.
 */function escapeTextContentForBrowser(text){if(typeof text==='boolean'||typeof text==='number'){// this shortcircuit helps perf for types that we know will never have
// special characters, especially given that this function is used often
// for numeric dom ids.
return''+text;}return escapeHtml(text);}module.exports=escapeTextContentForBrowser;},{}],200:[function(require,module,exports){(function(process){/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule findDOMNode
 */'use strict';var _prodInvariant=require('./reactProdInvariant');var ReactCurrentOwner=require('./ReactCurrentOwner');var ReactDOMComponentTree=require('./ReactDOMComponentTree');var ReactInstanceMap=require('./ReactInstanceMap');var getHostComponentFromComposite=require('./getHostComponentFromComposite');var invariant=require('fbjs/lib/invariant');var warning=require('fbjs/lib/warning');/**
 * Returns the DOM node rendered by this element.
 *
 * See https://facebook.github.io/react/docs/top-level-api.html#reactdom.finddomnode
 *
 * @param {ReactComponent|DOMElement} componentOrElement
 * @return {?DOMElement} The root node of this element.
 */function findDOMNode(componentOrElement){if(process.env.NODE_ENV!=='production'){var owner=ReactCurrentOwner.current;if(owner!==null){process.env.NODE_ENV!=='production'?warning(owner._warnedAboutRefsInRender,'%s is accessing findDOMNode inside its render(). '+'render() should be a pure function of props and state. It should '+'never access something that requires stale data from the previous '+'render, such as refs. Move this logic to componentDidMount and '+'componentDidUpdate instead.',owner.getName()||'A component'):void 0;owner._warnedAboutRefsInRender=true;}}if(componentOrElement==null){return null;}if(componentOrElement.nodeType===1){return componentOrElement;}var inst=ReactInstanceMap.get(componentOrElement);if(inst){inst=getHostComponentFromComposite(inst);return inst?ReactDOMComponentTree.getNodeFromInstance(inst):null;}if(typeof componentOrElement.render==='function'){!false?process.env.NODE_ENV!=='production'?invariant(false,'findDOMNode was called on an unmounted component.'):_prodInvariant('44'):void 0;}else{!false?process.env.NODE_ENV!=='production'?invariant(false,'Element appears to be neither ReactComponent nor DOMNode (keys: %s)',Object.keys(componentOrElement)):_prodInvariant('45',Object.keys(componentOrElement)):void 0;}}module.exports=findDOMNode;}).call(this,require('_process'));},{"./ReactCurrentOwner":115,"./ReactDOMComponentTree":120,"./ReactInstanceMap":150,"./getHostComponentFromComposite":207,"./reactProdInvariant":217,"_process":3,"fbjs/lib/invariant":59,"fbjs/lib/warning":68}],201:[function(require,module,exports){(function(process){/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule flattenChildren
 * 
 */'use strict';var KeyEscapeUtils=require('./KeyEscapeUtils');var traverseAllChildren=require('./traverseAllChildren');var warning=require('fbjs/lib/warning');var ReactComponentTreeHook;if(typeof process!=='undefined'&&process.env&&process.env.NODE_ENV==='test'){// Temporary hack.
// Inline requires don't work well with Jest:
// https://github.com/facebook/react/issues/7240
// Remove the inline requires when we don't need them anymore:
// https://github.com/facebook/react/pull/7178
ReactComponentTreeHook=require('./ReactComponentTreeHook');}/**
 * @param {function} traverseContext Context passed through traversal.
 * @param {?ReactComponent} child React child component.
 * @param {!string} name String name of key path to child.
 * @param {number=} selfDebugID Optional debugID of the current internal instance.
 */function flattenSingleChildIntoContext(traverseContext,child,name,selfDebugID){// We found a component instance.
if(traverseContext&&(typeof traverseContext==="undefined"?"undefined":_typeof4(traverseContext))==='object'){var result=traverseContext;var keyUnique=result[name]===undefined;if(process.env.NODE_ENV!=='production'){if(!ReactComponentTreeHook){ReactComponentTreeHook=require('./ReactComponentTreeHook');}if(!keyUnique){process.env.NODE_ENV!=='production'?warning(false,'flattenChildren(...): Encountered two children with the same key, '+'`%s`. Child keys must be unique; when two children share a key, only '+'the first child will be used.%s',KeyEscapeUtils.unescape(name),ReactComponentTreeHook.getStackAddendumByID(selfDebugID)):void 0;}}if(keyUnique&&child!=null){result[name]=child;}}}/**
 * Flattens children that are typically specified as `props.children`. Any null
 * children will not be included in the resulting object.
 * @return {!object} flattened children keyed by name.
 */function flattenChildren(children,selfDebugID){if(children==null){return children;}var result={};if(process.env.NODE_ENV!=='production'){traverseAllChildren(children,function(traverseContext,child,name){return flattenSingleChildIntoContext(traverseContext,child,name,selfDebugID);},result);}else{traverseAllChildren(children,flattenSingleChildIntoContext,result);}return result;}module.exports=flattenChildren;}).call(this,require('_process'));},{"./KeyEscapeUtils":101,"./ReactComponentTreeHook":113,"./traverseAllChildren":223,"_process":3,"fbjs/lib/warning":68}],202:[function(require,module,exports){/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule forEachAccumulated
 * 
 */'use strict';/**
 * @param {array} arr an "accumulation" of items which is either an Array or
 * a single item. Useful when paired with the `accumulate` module. This is a
 * simple utility that allows us to reason about a collection of items, but
 * handling the case when there is exactly one item (and we do not need to
 * allocate an array).
 */function forEachAccumulated(arr,cb,scope){if(Array.isArray(arr)){arr.forEach(cb,scope);}else if(arr){cb.call(scope,arr);}}module.exports=forEachAccumulated;},{}],203:[function(require,module,exports){/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule getEventCharCode
 */'use strict';/**
 * `charCode` represents the actual "character code" and is safe to use with
 * `String.fromCharCode`. As such, only keys that correspond to printable
 * characters produce a valid `charCode`, the only exception to this is Enter.
 * The Tab-key is considered non-printable and does not have a `charCode`,
 * presumably because it does not produce a tab-character in browsers.
 *
 * @param {object} nativeEvent Native browser event.
 * @return {number} Normalized `charCode` property.
 */function getEventCharCode(nativeEvent){var charCode;var keyCode=nativeEvent.keyCode;if('charCode'in nativeEvent){charCode=nativeEvent.charCode;// FF does not set `charCode` for the Enter-key, check against `keyCode`.
if(charCode===0&&keyCode===13){charCode=13;}}else{// IE8 does not implement `charCode`, but `keyCode` has the correct value.
charCode=keyCode;}// Some non-printable keys are reported in `charCode`/`keyCode`, discard them.
// Must not discard the (non-)printable Enter-key.
if(charCode>=32||charCode===13){return charCode;}return 0;}module.exports=getEventCharCode;},{}],204:[function(require,module,exports){/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule getEventKey
 */'use strict';var getEventCharCode=require('./getEventCharCode');/**
 * Normalization of deprecated HTML5 `key` values
 * @see https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent#Key_names
 */var normalizeKey={'Esc':'Escape','Spacebar':' ','Left':'ArrowLeft','Up':'ArrowUp','Right':'ArrowRight','Down':'ArrowDown','Del':'Delete','Win':'OS','Menu':'ContextMenu','Apps':'ContextMenu','Scroll':'ScrollLock','MozPrintableKey':'Unidentified'};/**
 * Translation from legacy `keyCode` to HTML5 `key`
 * Only special keys supported, all others depend on keyboard layout or browser
 * @see https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent#Key_names
 */var translateToKey={8:'Backspace',9:'Tab',12:'Clear',13:'Enter',16:'Shift',17:'Control',18:'Alt',19:'Pause',20:'CapsLock',27:'Escape',32:' ',33:'PageUp',34:'PageDown',35:'End',36:'Home',37:'ArrowLeft',38:'ArrowUp',39:'ArrowRight',40:'ArrowDown',45:'Insert',46:'Delete',112:'F1',113:'F2',114:'F3',115:'F4',116:'F5',117:'F6',118:'F7',119:'F8',120:'F9',121:'F10',122:'F11',123:'F12',144:'NumLock',145:'ScrollLock',224:'Meta'};/**
 * @param {object} nativeEvent Native browser event.
 * @return {string} Normalized `key` property.
 */function getEventKey(nativeEvent){if(nativeEvent.key){// Normalize inconsistent values reported by browsers due to
// implementations of a working draft specification.
// FireFox implements `key` but returns `MozPrintableKey` for all
// printable characters (normalized to `Unidentified`), ignore it.
var key=normalizeKey[nativeEvent.key]||nativeEvent.key;if(key!=='Unidentified'){return key;}}// Browser does not implement `key`, polyfill as much of it as we can.
if(nativeEvent.type==='keypress'){var charCode=getEventCharCode(nativeEvent);// The enter-key is technically both printable and non-printable and can
// thus be captured by `keypress`, no other non-printable key should.
return charCode===13?'Enter':String.fromCharCode(charCode);}if(nativeEvent.type==='keydown'||nativeEvent.type==='keyup'){// While user keyboard layout determines the actual meaning of each
// `keyCode` value, almost all function keys have a universal value.
return translateToKey[nativeEvent.keyCode]||'Unidentified';}return'';}module.exports=getEventKey;},{"./getEventCharCode":203}],205:[function(require,module,exports){/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule getEventModifierState
 */'use strict';/**
 * Translation from modifier key to the associated property in the event.
 * @see http://www.w3.org/TR/DOM-Level-3-Events/#keys-Modifiers
 */var modifierKeyToProp={'Alt':'altKey','Control':'ctrlKey','Meta':'metaKey','Shift':'shiftKey'};// IE8 does not implement getModifierState so we simply map it to the only
// modifier keys exposed by the event itself, does not support Lock-keys.
// Currently, all major browsers except Chrome seems to support Lock-keys.
function modifierStateGetter(keyArg){var syntheticEvent=this;var nativeEvent=syntheticEvent.nativeEvent;if(nativeEvent.getModifierState){return nativeEvent.getModifierState(keyArg);}var keyProp=modifierKeyToProp[keyArg];return keyProp?!!nativeEvent[keyProp]:false;}function getEventModifierState(nativeEvent){return modifierStateGetter;}module.exports=getEventModifierState;},{}],206:[function(require,module,exports){/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule getEventTarget
 */'use strict';/**
 * Gets the target node from a native browser event by accounting for
 * inconsistencies in browser DOM APIs.
 *
 * @param {object} nativeEvent Native browser event.
 * @return {DOMEventTarget} Target node.
 */function getEventTarget(nativeEvent){var target=nativeEvent.target||nativeEvent.srcElement||window;// Normalize SVG <use> element events #4963
if(target.correspondingUseElement){target=target.correspondingUseElement;}// Safari may fire events on text nodes (Node.TEXT_NODE is 3).
// @see http://www.quirksmode.org/js/events_properties.html
return target.nodeType===3?target.parentNode:target;}module.exports=getEventTarget;},{}],207:[function(require,module,exports){/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule getHostComponentFromComposite
 */'use strict';var ReactNodeTypes=require('./ReactNodeTypes');function getHostComponentFromComposite(inst){var type;while((type=inst._renderedNodeType)===ReactNodeTypes.COMPOSITE){inst=inst._renderedComponent;}if(type===ReactNodeTypes.HOST){return inst._renderedComponent;}else if(type===ReactNodeTypes.EMPTY){return null;}}module.exports=getHostComponentFromComposite;},{"./ReactNodeTypes":157}],208:[function(require,module,exports){/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule getIteratorFn
 * 
 */'use strict';/* global Symbol */var ITERATOR_SYMBOL=typeof Symbol==='function'&&Symbol.iterator;var FAUX_ITERATOR_SYMBOL='@@iterator';// Before Symbol spec.
/**
 * Returns the iterator method function contained on the iterable object.
 *
 * Be sure to invoke the function with the iterable as context:
 *
 *     var iteratorFn = getIteratorFn(myIterable);
 *     if (iteratorFn) {
 *       var iterator = iteratorFn.call(myIterable);
 *       ...
 *     }
 *
 * @param {?object} maybeIterable
 * @return {?function}
 */function getIteratorFn(maybeIterable){var iteratorFn=maybeIterable&&(ITERATOR_SYMBOL&&maybeIterable[ITERATOR_SYMBOL]||maybeIterable[FAUX_ITERATOR_SYMBOL]);if(typeof iteratorFn==='function'){return iteratorFn;}}module.exports=getIteratorFn;},{}],209:[function(require,module,exports){/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule getNodeForCharacterOffset
 */'use strict';/**
 * Given any node return the first leaf node without children.
 *
 * @param {DOMElement|DOMTextNode} node
 * @return {DOMElement|DOMTextNode}
 */function getLeafNode(node){while(node&&node.firstChild){node=node.firstChild;}return node;}/**
 * Get the next sibling within a container. This will walk up the
 * DOM if a node's siblings have been exhausted.
 *
 * @param {DOMElement|DOMTextNode} node
 * @return {?DOMElement|DOMTextNode}
 */function getSiblingNode(node){while(node){if(node.nextSibling){return node.nextSibling;}node=node.parentNode;}}/**
 * Get object describing the nodes which contain characters at offset.
 *
 * @param {DOMElement|DOMTextNode} root
 * @param {number} offset
 * @return {?object}
 */function getNodeForCharacterOffset(root,offset){var node=getLeafNode(root);var nodeStart=0;var nodeEnd=0;while(node){if(node.nodeType===3){nodeEnd=nodeStart+node.textContent.length;if(nodeStart<=offset&&nodeEnd>=offset){return{node:node,offset:offset-nodeStart};}nodeStart=nodeEnd;}node=getLeafNode(getSiblingNode(node));}}module.exports=getNodeForCharacterOffset;},{}],210:[function(require,module,exports){/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule getTextContentAccessor
 */'use strict';var ExecutionEnvironment=require('fbjs/lib/ExecutionEnvironment');var contentKey=null;/**
 * Gets the key used to access text content on a DOM node.
 *
 * @return {?string} Key used to access text content.
 * @internal
 */function getTextContentAccessor(){if(!contentKey&&ExecutionEnvironment.canUseDOM){// Prefer textContent to innerText because many browsers support both but
// SVG <text> elements don't support innerText even when <div> does.
contentKey='textContent'in document.documentElement?'textContent':'innerText';}return contentKey;}module.exports=getTextContentAccessor;},{"fbjs/lib/ExecutionEnvironment":45}],211:[function(require,module,exports){/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule getVendorPrefixedEventName
 */'use strict';var ExecutionEnvironment=require('fbjs/lib/ExecutionEnvironment');/**
 * Generate a mapping of standard vendor prefixes using the defined style property and event name.
 *
 * @param {string} styleProp
 * @param {string} eventName
 * @returns {object}
 */function makePrefixMap(styleProp,eventName){var prefixes={};prefixes[styleProp.toLowerCase()]=eventName.toLowerCase();prefixes['Webkit'+styleProp]='webkit'+eventName;prefixes['Moz'+styleProp]='moz'+eventName;prefixes['ms'+styleProp]='MS'+eventName;prefixes['O'+styleProp]='o'+eventName.toLowerCase();return prefixes;}/**
 * A list of event names to a configurable list of vendor prefixes.
 */var vendorPrefixes={animationend:makePrefixMap('Animation','AnimationEnd'),animationiteration:makePrefixMap('Animation','AnimationIteration'),animationstart:makePrefixMap('Animation','AnimationStart'),transitionend:makePrefixMap('Transition','TransitionEnd')};/**
 * Event names that have already been detected and prefixed (if applicable).
 */var prefixedEventNames={};/**
 * Element to check for prefixes on.
 */var style={};/**
 * Bootstrap if a DOM exists.
 */if(ExecutionEnvironment.canUseDOM){style=document.createElement('div').style;// On some platforms, in particular some releases of Android 4.x,
// the un-prefixed "animation" and "transition" properties are defined on the
// style object but the events that fire will still be prefixed, so we need
// to check if the un-prefixed events are usable, and if not remove them from the map.
if(!('AnimationEvent'in window)){delete vendorPrefixes.animationend.animation;delete vendorPrefixes.animationiteration.animation;delete vendorPrefixes.animationstart.animation;}// Same as above
if(!('TransitionEvent'in window)){delete vendorPrefixes.transitionend.transition;}}/**
 * Attempts to determine the correct vendor prefixed event name.
 *
 * @param {string} eventName
 * @returns {string}
 */function getVendorPrefixedEventName(eventName){if(prefixedEventNames[eventName]){return prefixedEventNames[eventName];}else if(!vendorPrefixes[eventName]){return eventName;}var prefixMap=vendorPrefixes[eventName];for(var styleProp in prefixMap){if(prefixMap.hasOwnProperty(styleProp)&&styleProp in style){return prefixedEventNames[eventName]=prefixMap[styleProp];}}return'';}module.exports=getVendorPrefixedEventName;},{"fbjs/lib/ExecutionEnvironment":45}],212:[function(require,module,exports){(function(process){/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule instantiateReactComponent
 */'use strict';var _prodInvariant=require('./reactProdInvariant'),_assign=require('object-assign');var ReactCompositeComponent=require('./ReactCompositeComponent');var ReactEmptyComponent=require('./ReactEmptyComponent');var ReactHostComponent=require('./ReactHostComponent');var invariant=require('fbjs/lib/invariant');var warning=require('fbjs/lib/warning');// To avoid a cyclic dependency, we create the final class in this module
var ReactCompositeComponentWrapper=function ReactCompositeComponentWrapper(element){this.construct(element);};_assign(ReactCompositeComponentWrapper.prototype,ReactCompositeComponent.Mixin,{_instantiateReactComponent:instantiateReactComponent});function getDeclarationErrorAddendum(owner){if(owner){var name=owner.getName();if(name){return' Check the render method of `'+name+'`.';}}return'';}/**
 * Check if the type reference is a known internal type. I.e. not a user
 * provided composite type.
 *
 * @param {function} type
 * @return {boolean} Returns true if this is a valid internal type.
 */function isInternalComponentType(type){return typeof type==='function'&&typeof type.prototype!=='undefined'&&typeof type.prototype.mountComponent==='function'&&typeof type.prototype.receiveComponent==='function';}var nextDebugID=1;/**
 * Given a ReactNode, create an instance that will actually be mounted.
 *
 * @param {ReactNode} node
 * @param {boolean} shouldHaveDebugID
 * @return {object} A new instance of the element's constructor.
 * @protected
 */function instantiateReactComponent(node,shouldHaveDebugID){var instance;if(node===null||node===false){instance=ReactEmptyComponent.create(instantiateReactComponent);}else if((typeof node==="undefined"?"undefined":_typeof4(node))==='object'){var element=node;!(element&&(typeof element.type==='function'||typeof element.type==='string'))?process.env.NODE_ENV!=='production'?invariant(false,'Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s',element.type==null?element.type:_typeof4(element.type),getDeclarationErrorAddendum(element._owner)):_prodInvariant('130',element.type==null?element.type:_typeof4(element.type),getDeclarationErrorAddendum(element._owner)):void 0;// Special case string values
if(typeof element.type==='string'){instance=ReactHostComponent.createInternalComponent(element);}else if(isInternalComponentType(element.type)){// This is temporarily available for custom components that are not string
// representations. I.e. ART. Once those are updated to use the string
// representation, we can drop this code path.
instance=new element.type(element);// We renamed this. Allow the old name for compat. :(
if(!instance.getHostNode){instance.getHostNode=instance.getNativeNode;}}else{instance=new ReactCompositeComponentWrapper(element);}}else if(typeof node==='string'||typeof node==='number'){instance=ReactHostComponent.createInstanceForText(node);}else{!false?process.env.NODE_ENV!=='production'?invariant(false,'Encountered invalid React node of type %s',typeof node==="undefined"?"undefined":_typeof4(node)):_prodInvariant('131',typeof node==="undefined"?"undefined":_typeof4(node)):void 0;}if(process.env.NODE_ENV!=='production'){process.env.NODE_ENV!=='production'?warning(typeof instance.mountComponent==='function'&&typeof instance.receiveComponent==='function'&&typeof instance.getHostNode==='function'&&typeof instance.unmountComponent==='function','Only React Components can be mounted.'):void 0;}// These two fields are used by the DOM and ART diffing algorithms
// respectively. Instead of using expandos on components, we should be
// storing the state needed by the diffing algorithms elsewhere.
instance._mountIndex=0;instance._mountImage=null;if(process.env.NODE_ENV!=='production'){instance._debugID=shouldHaveDebugID?nextDebugID++:0;}// Internal instances should fully constructed at this point, so they should
// not get any new fields added to them at this point.
if(process.env.NODE_ENV!=='production'){if(Object.preventExtensions){Object.preventExtensions(instance);}}return instance;}module.exports=instantiateReactComponent;}).call(this,require('_process'));},{"./ReactCompositeComponent":114,"./ReactEmptyComponent":140,"./ReactHostComponent":146,"./reactProdInvariant":217,"_process":3,"fbjs/lib/invariant":59,"fbjs/lib/warning":68,"object-assign":344}],213:[function(require,module,exports){/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule isEventSupported
 */'use strict';var ExecutionEnvironment=require('fbjs/lib/ExecutionEnvironment');var useHasFeature;if(ExecutionEnvironment.canUseDOM){useHasFeature=document.implementation&&document.implementation.hasFeature&&// always returns true in newer browsers as per the standard.
// @see http://dom.spec.whatwg.org/#dom-domimplementation-hasfeature
document.implementation.hasFeature('','')!==true;}/**
 * Checks if an event is supported in the current execution environment.
 *
 * NOTE: This will not work correctly for non-generic events such as `change`,
 * `reset`, `load`, `error`, and `select`.
 *
 * Borrows from Modernizr.
 *
 * @param {string} eventNameSuffix Event name, e.g. "click".
 * @param {?boolean} capture Check if the capture phase is supported.
 * @return {boolean} True if the event is supported.
 * @internal
 * @license Modernizr 3.0.0pre (Custom Build) | MIT
 */function isEventSupported(eventNameSuffix,capture){if(!ExecutionEnvironment.canUseDOM||capture&&!('addEventListener'in document)){return false;}var eventName='on'+eventNameSuffix;var isSupported=eventName in document;if(!isSupported){var element=document.createElement('div');element.setAttribute(eventName,'return;');isSupported=typeof element[eventName]==='function';}if(!isSupported&&useHasFeature&&eventNameSuffix==='wheel'){// This is the only way to test support for the `wheel` event in IE9+.
isSupported=document.implementation.hasFeature('Events.wheel','3.0');}return isSupported;}module.exports=isEventSupported;},{"fbjs/lib/ExecutionEnvironment":45}],214:[function(require,module,exports){/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule isTextInputElement
 * 
 */'use strict';/**
 * @see http://www.whatwg.org/specs/web-apps/current-work/multipage/the-input-element.html#input-type-attr-summary
 */var supportedInputTypes={'color':true,'date':true,'datetime':true,'datetime-local':true,'email':true,'month':true,'number':true,'password':true,'range':true,'search':true,'tel':true,'text':true,'time':true,'url':true,'week':true};function isTextInputElement(elem){var nodeName=elem&&elem.nodeName&&elem.nodeName.toLowerCase();if(nodeName==='input'){return!!supportedInputTypes[elem.type];}if(nodeName==='textarea'){return true;}return false;}module.exports=isTextInputElement;},{}],215:[function(require,module,exports){(function(process){/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule onlyChild
 */'use strict';var _prodInvariant=require('./reactProdInvariant');var ReactElement=require('./ReactElement');var invariant=require('fbjs/lib/invariant');/**
 * Returns the first child in a collection of children and verifies that there
 * is only one child in the collection.
 *
 * See https://facebook.github.io/react/docs/top-level-api.html#react.children.only
 *
 * The current implementation of this function assumes that a single child gets
 * passed without a wrapper, but the purpose of this helper function is to
 * abstract away the particular structure of children.
 *
 * @param {?object} children Child collection structure.
 * @return {ReactElement} The first and only `ReactElement` contained in the
 * structure.
 */function onlyChild(children){!ReactElement.isValidElement(children)?process.env.NODE_ENV!=='production'?invariant(false,'React.Children.only expected to receive a single React element child.'):_prodInvariant('143'):void 0;return children;}module.exports=onlyChild;}).call(this,require('_process'));},{"./ReactElement":138,"./reactProdInvariant":217,"_process":3,"fbjs/lib/invariant":59}],216:[function(require,module,exports){/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule quoteAttributeValueForBrowser
 */'use strict';var escapeTextContentForBrowser=require('./escapeTextContentForBrowser');/**
 * Escapes attribute value to prevent scripting attacks.
 *
 * @param {*} value Value to escape.
 * @return {string} An escaped string.
 */function quoteAttributeValueForBrowser(value){return'"'+escapeTextContentForBrowser(value)+'"';}module.exports=quoteAttributeValueForBrowser;},{"./escapeTextContentForBrowser":199}],217:[function(require,module,exports){/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule reactProdInvariant
 * 
 */'use strict';/**
 * WARNING: DO NOT manually require this module.
 * This is a replacement for `invariant(...)` used by the error code system
 * and will _only_ be required by the corresponding babel pass.
 * It always throws.
 */function reactProdInvariant(code){var argCount=arguments.length-1;var message='Minified React error #'+code+'; visit '+'http://facebook.github.io/react/docs/error-decoder.html?invariant='+code;for(var argIdx=0;argIdx<argCount;argIdx++){message+='&args[]='+encodeURIComponent(arguments[argIdx+1]);}message+=' for the full message or use the non-minified dev environment'+' for full errors and additional helpful warnings.';var error=new Error(message);error.name='Invariant Violation';error.framesToPop=1;// we don't care about reactProdInvariant's own frame
throw error;}module.exports=reactProdInvariant;},{}],218:[function(require,module,exports){/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
* @providesModule renderSubtreeIntoContainer
*/'use strict';var ReactMount=require('./ReactMount');module.exports=ReactMount.renderSubtreeIntoContainer;},{"./ReactMount":154}],219:[function(require,module,exports){/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule setInnerHTML
 */'use strict';var ExecutionEnvironment=require('fbjs/lib/ExecutionEnvironment');var DOMNamespaces=require('./DOMNamespaces');var WHITESPACE_TEST=/^[ \r\n\t\f]/;var NONVISIBLE_TEST=/<(!--|link|noscript|meta|script|style)[ \r\n\t\f\/>]/;var createMicrosoftUnsafeLocalFunction=require('./createMicrosoftUnsafeLocalFunction');// SVG temp container for IE lacking innerHTML
var reusableSVGContainer;/**
 * Set the innerHTML property of a node, ensuring that whitespace is preserved
 * even in IE8.
 *
 * @param {DOMElement} node
 * @param {string} html
 * @internal
 */var setInnerHTML=createMicrosoftUnsafeLocalFunction(function(node,html){// IE does not have innerHTML for SVG nodes, so instead we inject the
// new markup in a temp node and then move the child nodes across into
// the target node
if(node.namespaceURI===DOMNamespaces.svg&&!('innerHTML'in node)){reusableSVGContainer=reusableSVGContainer||document.createElement('div');reusableSVGContainer.innerHTML='<svg>'+html+'</svg>';var svgNode=reusableSVGContainer.firstChild;while(svgNode.firstChild){node.appendChild(svgNode.firstChild);}}else{node.innerHTML=html;}});if(ExecutionEnvironment.canUseDOM){// IE8: When updating a just created node with innerHTML only leading
// whitespace is removed. When updating an existing node with innerHTML
// whitespace in root TextNodes is also collapsed.
// @see quirksmode.org/bugreports/archives/2004/11/innerhtml_and_t.html
// Feature detection; only IE8 is known to behave improperly like this.
var testElement=document.createElement('div');testElement.innerHTML=' ';if(testElement.innerHTML===''){setInnerHTML=function setInnerHTML(node,html){// Magic theory: IE8 supposedly differentiates between added and updated
// nodes when processing innerHTML, innerHTML on updated nodes suffers
// from worse whitespace behavior. Re-adding a node like this triggers
// the initial and more favorable whitespace behavior.
// TODO: What to do on a detached node?
if(node.parentNode){node.parentNode.replaceChild(node,node);}// We also implement a workaround for non-visible tags disappearing into
// thin air on IE8, this only happens if there is no visible text
// in-front of the non-visible tags. Piggyback on the whitespace fix
// and simply check if any non-visible tags appear in the source.
if(WHITESPACE_TEST.test(html)||html[0]==='<'&&NONVISIBLE_TEST.test(html)){// Recover leading whitespace by temporarily prepending any character.
// \uFEFF has the potential advantage of being zero-width/invisible.
// UglifyJS drops U+FEFF chars when parsing, so use String.fromCharCode
// in hopes that this is preserved even if "\uFEFF" is transformed to
// the actual Unicode character (by Babel, for example).
// https://github.com/mishoo/UglifyJS2/blob/v2.4.20/lib/parse.js#L216
node.innerHTML=String.fromCharCode(0xFEFF)+html;// deleteData leaves an empty `TextNode` which offsets the index of all
// children. Definitely want to avoid this.
var textNode=node.firstChild;if(textNode.data.length===1){node.removeChild(textNode);}else{textNode.deleteData(0,1);}}else{node.innerHTML=html;}};}testElement=null;}module.exports=setInnerHTML;},{"./DOMNamespaces":87,"./createMicrosoftUnsafeLocalFunction":197,"fbjs/lib/ExecutionEnvironment":45}],220:[function(require,module,exports){/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule setTextContent
 */'use strict';var ExecutionEnvironment=require('fbjs/lib/ExecutionEnvironment');var escapeTextContentForBrowser=require('./escapeTextContentForBrowser');var setInnerHTML=require('./setInnerHTML');/**
 * Set the textContent property of a node, ensuring that whitespace is preserved
 * even in IE8. innerText is a poor substitute for textContent and, among many
 * issues, inserts <br> instead of the literal newline chars. innerHTML behaves
 * as it should.
 *
 * @param {DOMElement} node
 * @param {string} text
 * @internal
 */var setTextContent=function setTextContent(node,text){if(text){var firstChild=node.firstChild;if(firstChild&&firstChild===node.lastChild&&firstChild.nodeType===3){firstChild.nodeValue=text;return;}}node.textContent=text;};if(ExecutionEnvironment.canUseDOM){if(!('textContent'in document.documentElement)){setTextContent=function setTextContent(node,text){setInnerHTML(node,escapeTextContentForBrowser(text));};}}module.exports=setTextContent;},{"./escapeTextContentForBrowser":199,"./setInnerHTML":219,"fbjs/lib/ExecutionEnvironment":45}],221:[function(require,module,exports){/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
* @providesModule shallowCompare
*/'use strict';var shallowEqual=require('fbjs/lib/shallowEqual');/**
 * Does a shallow comparison for props and state.
 * See ReactComponentWithPureRenderMixin
 * See also https://facebook.github.io/react/docs/shallow-compare.html
 */function shallowCompare(instance,nextProps,nextState){return!shallowEqual(instance.props,nextProps)||!shallowEqual(instance.state,nextState);}module.exports=shallowCompare;},{"fbjs/lib/shallowEqual":67}],222:[function(require,module,exports){/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule shouldUpdateReactComponent
 */'use strict';/**
 * Given a `prevElement` and `nextElement`, determines if the existing
 * instance should be updated as opposed to being destroyed or replaced by a new
 * instance. Both arguments are elements. This ensures that this logic can
 * operate on stateless trees without any backing instance.
 *
 * @param {?object} prevElement
 * @param {?object} nextElement
 * @return {boolean} True if the existing instance should be updated.
 * @protected
 */function shouldUpdateReactComponent(prevElement,nextElement){var prevEmpty=prevElement===null||prevElement===false;var nextEmpty=nextElement===null||nextElement===false;if(prevEmpty||nextEmpty){return prevEmpty===nextEmpty;}var prevType=typeof prevElement==="undefined"?"undefined":_typeof4(prevElement);var nextType=typeof nextElement==="undefined"?"undefined":_typeof4(nextElement);if(prevType==='string'||prevType==='number'){return nextType==='string'||nextType==='number';}else{return nextType==='object'&&prevElement.type===nextElement.type&&prevElement.key===nextElement.key;}}module.exports=shouldUpdateReactComponent;},{}],223:[function(require,module,exports){(function(process){/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule traverseAllChildren
 */'use strict';var _prodInvariant=require('./reactProdInvariant');var ReactCurrentOwner=require('./ReactCurrentOwner');var ReactElement=require('./ReactElement');var getIteratorFn=require('./getIteratorFn');var invariant=require('fbjs/lib/invariant');var KeyEscapeUtils=require('./KeyEscapeUtils');var warning=require('fbjs/lib/warning');var SEPARATOR='.';var SUBSEPARATOR=':';/**
 * TODO: Test that a single child and an array with one item have the same key
 * pattern.
 */var didWarnAboutMaps=false;/**
 * Generate a key string that identifies a component within a set.
 *
 * @param {*} component A component that could contain a manual key.
 * @param {number} index Index that is used if a manual key is not provided.
 * @return {string}
 */function getComponentKey(component,index){// Do some typechecking here since we call this blindly. We want to ensure
// that we don't block potential future ES APIs.
if(component&&(typeof component==="undefined"?"undefined":_typeof4(component))==='object'&&component.key!=null){// Explicit key
return KeyEscapeUtils.escape(component.key);}// Implicit key determined by the index in the set
return index.toString(36);}/**
 * @param {?*} children Children tree container.
 * @param {!string} nameSoFar Name of the key path so far.
 * @param {!function} callback Callback to invoke with each child found.
 * @param {?*} traverseContext Used to pass information throughout the traversal
 * process.
 * @return {!number} The number of children in this subtree.
 */function traverseAllChildrenImpl(children,nameSoFar,callback,traverseContext){var type=typeof children==="undefined"?"undefined":_typeof4(children);if(type==='undefined'||type==='boolean'){// All of the above are perceived as null.
children=null;}if(children===null||type==='string'||type==='number'||ReactElement.isValidElement(children)){callback(traverseContext,children,// If it's the only child, treat the name as if it was wrapped in an array
// so that it's consistent if the number of children grows.
nameSoFar===''?SEPARATOR+getComponentKey(children,0):nameSoFar);return 1;}var child;var nextName;var subtreeCount=0;// Count of children found in the current subtree.
var nextNamePrefix=nameSoFar===''?SEPARATOR:nameSoFar+SUBSEPARATOR;if(Array.isArray(children)){for(var i=0;i<children.length;i++){child=children[i];nextName=nextNamePrefix+getComponentKey(child,i);subtreeCount+=traverseAllChildrenImpl(child,nextName,callback,traverseContext);}}else{var iteratorFn=getIteratorFn(children);if(iteratorFn){var iterator=iteratorFn.call(children);var step;if(iteratorFn!==children.entries){var ii=0;while(!(step=iterator.next()).done){child=step.value;nextName=nextNamePrefix+getComponentKey(child,ii++);subtreeCount+=traverseAllChildrenImpl(child,nextName,callback,traverseContext);}}else{if(process.env.NODE_ENV!=='production'){var mapsAsChildrenAddendum='';if(ReactCurrentOwner.current){var mapsAsChildrenOwnerName=ReactCurrentOwner.current.getName();if(mapsAsChildrenOwnerName){mapsAsChildrenAddendum=' Check the render method of `'+mapsAsChildrenOwnerName+'`.';}}process.env.NODE_ENV!=='production'?warning(didWarnAboutMaps,'Using Maps as children is not yet fully supported. It is an '+'experimental feature that might be removed. Convert it to a '+'sequence / iterable of keyed ReactElements instead.%s',mapsAsChildrenAddendum):void 0;didWarnAboutMaps=true;}// Iterator will provide entry [k,v] tuples rather than values.
while(!(step=iterator.next()).done){var entry=step.value;if(entry){child=entry[1];nextName=nextNamePrefix+KeyEscapeUtils.escape(entry[0])+SUBSEPARATOR+getComponentKey(child,0);subtreeCount+=traverseAllChildrenImpl(child,nextName,callback,traverseContext);}}}}else if(type==='object'){var addendum='';if(process.env.NODE_ENV!=='production'){addendum=' If you meant to render a collection of children, use an array '+'instead or wrap the object using createFragment(object) from the '+'React add-ons.';if(children._isReactElement){addendum=' It looks like you\'re using an element created by a different '+'version of React. Make sure to use only one copy of React.';}if(ReactCurrentOwner.current){var name=ReactCurrentOwner.current.getName();if(name){addendum+=' Check the render method of `'+name+'`.';}}}var childrenString=String(children);!false?process.env.NODE_ENV!=='production'?invariant(false,'Objects are not valid as a React child (found: %s).%s',childrenString==='[object Object]'?'object with keys {'+Object.keys(children).join(', ')+'}':childrenString,addendum):_prodInvariant('31',childrenString==='[object Object]'?'object with keys {'+Object.keys(children).join(', ')+'}':childrenString,addendum):void 0;}}return subtreeCount;}/**
 * Traverses children that are typically specified as `props.children`, but
 * might also be specified through attributes:
 *
 * - `traverseAllChildren(this.props.children, ...)`
 * - `traverseAllChildren(this.props.leftPanelChildren, ...)`
 *
 * The `traverseContext` is an optional argument that is passed through the
 * entire traversal. It can be used to store accumulations or anything else that
 * the callback might find relevant.
 *
 * @param {?*} children Children tree object.
 * @param {!function} callback To invoke upon traversing each child.
 * @param {?*} traverseContext Context for traversal.
 * @return {!number} The number of children in this subtree.
 */function traverseAllChildren(children,callback,traverseContext){if(children==null){return 0;}return traverseAllChildrenImpl(children,'',callback,traverseContext);}module.exports=traverseAllChildren;}).call(this,require('_process'));},{"./KeyEscapeUtils":101,"./ReactCurrentOwner":115,"./ReactElement":138,"./getIteratorFn":208,"./reactProdInvariant":217,"_process":3,"fbjs/lib/invariant":59,"fbjs/lib/warning":68}],224:[function(require,module,exports){(function(process){/**
 * Copyright 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule validateDOMNesting
 */'use strict';var _assign=require('object-assign');var emptyFunction=require('fbjs/lib/emptyFunction');var warning=require('fbjs/lib/warning');var validateDOMNesting=emptyFunction;if(process.env.NODE_ENV!=='production'){// This validation code was written based on the HTML5 parsing spec:
// https://html.spec.whatwg.org/multipage/syntax.html#has-an-element-in-scope
//
// Note: this does not catch all invalid nesting, nor does it try to (as it's
// not clear what practical benefit doing so provides); instead, we warn only
// for cases where the parser will give a parse tree differing from what React
// intended. For example, <b><div></div></b> is invalid but we don't warn
// because it still parses correctly; we do warn for other cases like nested
// <p> tags where the beginning of the second element implicitly closes the
// first, causing a confusing mess.
// https://html.spec.whatwg.org/multipage/syntax.html#special
var specialTags=['address','applet','area','article','aside','base','basefont','bgsound','blockquote','body','br','button','caption','center','col','colgroup','dd','details','dir','div','dl','dt','embed','fieldset','figcaption','figure','footer','form','frame','frameset','h1','h2','h3','h4','h5','h6','head','header','hgroup','hr','html','iframe','img','input','isindex','li','link','listing','main','marquee','menu','menuitem','meta','nav','noembed','noframes','noscript','object','ol','p','param','plaintext','pre','script','section','select','source','style','summary','table','tbody','td','template','textarea','tfoot','th','thead','title','tr','track','ul','wbr','xmp'];// https://html.spec.whatwg.org/multipage/syntax.html#has-an-element-in-scope
var inScopeTags=['applet','caption','html','table','td','th','marquee','object','template',// https://html.spec.whatwg.org/multipage/syntax.html#html-integration-point
// TODO: Distinguish by namespace here -- for <title>, including it here
// errs on the side of fewer warnings
'foreignObject','desc','title'];// https://html.spec.whatwg.org/multipage/syntax.html#has-an-element-in-button-scope
var buttonScopeTags=inScopeTags.concat(['button']);// https://html.spec.whatwg.org/multipage/syntax.html#generate-implied-end-tags
var impliedEndTags=['dd','dt','li','option','optgroup','p','rp','rt'];var emptyAncestorInfo={current:null,formTag:null,aTagInScope:null,buttonTagInScope:null,nobrTagInScope:null,pTagInButtonScope:null,listItemTagAutoclosing:null,dlItemTagAutoclosing:null};var updatedAncestorInfo=function updatedAncestorInfo(oldInfo,tag,instance){var ancestorInfo=_assign({},oldInfo||emptyAncestorInfo);var info={tag:tag,instance:instance};if(inScopeTags.indexOf(tag)!==-1){ancestorInfo.aTagInScope=null;ancestorInfo.buttonTagInScope=null;ancestorInfo.nobrTagInScope=null;}if(buttonScopeTags.indexOf(tag)!==-1){ancestorInfo.pTagInButtonScope=null;}// See rules for 'li', 'dd', 'dt' start tags in
// https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-inbody
if(specialTags.indexOf(tag)!==-1&&tag!=='address'&&tag!=='div'&&tag!=='p'){ancestorInfo.listItemTagAutoclosing=null;ancestorInfo.dlItemTagAutoclosing=null;}ancestorInfo.current=info;if(tag==='form'){ancestorInfo.formTag=info;}if(tag==='a'){ancestorInfo.aTagInScope=info;}if(tag==='button'){ancestorInfo.buttonTagInScope=info;}if(tag==='nobr'){ancestorInfo.nobrTagInScope=info;}if(tag==='p'){ancestorInfo.pTagInButtonScope=info;}if(tag==='li'){ancestorInfo.listItemTagAutoclosing=info;}if(tag==='dd'||tag==='dt'){ancestorInfo.dlItemTagAutoclosing=info;}return ancestorInfo;};/**
   * Returns whether
   */var isTagValidWithParent=function isTagValidWithParent(tag,parentTag){// First, let's check if we're in an unusual parsing mode...
switch(parentTag){// https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-inselect
case'select':return tag==='option'||tag==='optgroup'||tag==='#text';case'optgroup':return tag==='option'||tag==='#text';// Strictly speaking, seeing an <option> doesn't mean we're in a <select>
// but
case'option':return tag==='#text';// https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-intd
// https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-incaption
// No special behavior since these rules fall back to "in body" mode for
// all except special table nodes which cause bad parsing behavior anyway.
// https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-intr
case'tr':return tag==='th'||tag==='td'||tag==='style'||tag==='script'||tag==='template';// https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-intbody
case'tbody':case'thead':case'tfoot':return tag==='tr'||tag==='style'||tag==='script'||tag==='template';// https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-incolgroup
case'colgroup':return tag==='col'||tag==='template';// https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-intable
case'table':return tag==='caption'||tag==='colgroup'||tag==='tbody'||tag==='tfoot'||tag==='thead'||tag==='style'||tag==='script'||tag==='template';// https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-inhead
case'head':return tag==='base'||tag==='basefont'||tag==='bgsound'||tag==='link'||tag==='meta'||tag==='title'||tag==='noscript'||tag==='noframes'||tag==='style'||tag==='script'||tag==='template';// https://html.spec.whatwg.org/multipage/semantics.html#the-html-element
case'html':return tag==='head'||tag==='body';case'#document':return tag==='html';}// Probably in the "in body" parsing mode, so we outlaw only tag combos
// where the parsing rules cause implicit opens or closes to be added.
// https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-inbody
switch(tag){case'h1':case'h2':case'h3':case'h4':case'h5':case'h6':return parentTag!=='h1'&&parentTag!=='h2'&&parentTag!=='h3'&&parentTag!=='h4'&&parentTag!=='h5'&&parentTag!=='h6';case'rp':case'rt':return impliedEndTags.indexOf(parentTag)===-1;case'body':case'caption':case'col':case'colgroup':case'frame':case'head':case'html':case'tbody':case'td':case'tfoot':case'th':case'thead':case'tr':// These tags are only valid with a few parents that have special child
// parsing rules -- if we're down here, then none of those matched and
// so we allow it only if we don't know what the parent is, as all other
// cases are invalid.
return parentTag==null;}return true;};/**
   * Returns whether
   */var findInvalidAncestorForTag=function findInvalidAncestorForTag(tag,ancestorInfo){switch(tag){case'address':case'article':case'aside':case'blockquote':case'center':case'details':case'dialog':case'dir':case'div':case'dl':case'fieldset':case'figcaption':case'figure':case'footer':case'header':case'hgroup':case'main':case'menu':case'nav':case'ol':case'p':case'section':case'summary':case'ul':case'pre':case'listing':case'table':case'hr':case'xmp':case'h1':case'h2':case'h3':case'h4':case'h5':case'h6':return ancestorInfo.pTagInButtonScope;case'form':return ancestorInfo.formTag||ancestorInfo.pTagInButtonScope;case'li':return ancestorInfo.listItemTagAutoclosing;case'dd':case'dt':return ancestorInfo.dlItemTagAutoclosing;case'button':return ancestorInfo.buttonTagInScope;case'a':// Spec says something about storing a list of markers, but it sounds
// equivalent to this check.
return ancestorInfo.aTagInScope;case'nobr':return ancestorInfo.nobrTagInScope;}return null;};/**
   * Given a ReactCompositeComponent instance, return a list of its recursive
   * owners, starting at the root and ending with the instance itself.
   */var findOwnerStack=function findOwnerStack(instance){if(!instance){return[];}var stack=[];do{stack.push(instance);}while(instance=instance._currentElement._owner);stack.reverse();return stack;};var didWarn={};validateDOMNesting=function validateDOMNesting(childTag,childText,childInstance,ancestorInfo){ancestorInfo=ancestorInfo||emptyAncestorInfo;var parentInfo=ancestorInfo.current;var parentTag=parentInfo&&parentInfo.tag;if(childText!=null){process.env.NODE_ENV!=='production'?warning(childTag==null,'validateDOMNesting: when childText is passed, childTag should be null'):void 0;childTag='#text';}var invalidParent=isTagValidWithParent(childTag,parentTag)?null:parentInfo;var invalidAncestor=invalidParent?null:findInvalidAncestorForTag(childTag,ancestorInfo);var problematic=invalidParent||invalidAncestor;if(problematic){var ancestorTag=problematic.tag;var ancestorInstance=problematic.instance;var childOwner=childInstance&&childInstance._currentElement._owner;var ancestorOwner=ancestorInstance&&ancestorInstance._currentElement._owner;var childOwners=findOwnerStack(childOwner);var ancestorOwners=findOwnerStack(ancestorOwner);var minStackLen=Math.min(childOwners.length,ancestorOwners.length);var i;var deepestCommon=-1;for(i=0;i<minStackLen;i++){if(childOwners[i]===ancestorOwners[i]){deepestCommon=i;}else{break;}}var UNKNOWN='(unknown)';var childOwnerNames=childOwners.slice(deepestCommon+1).map(function(inst){return inst.getName()||UNKNOWN;});var ancestorOwnerNames=ancestorOwners.slice(deepestCommon+1).map(function(inst){return inst.getName()||UNKNOWN;});var ownerInfo=[].concat(// If the parent and child instances have a common owner ancestor, start
// with that -- otherwise we just start with the parent's owners.
deepestCommon!==-1?childOwners[deepestCommon].getName()||UNKNOWN:[],ancestorOwnerNames,ancestorTag,// If we're warning about an invalid (non-parent) ancestry, add '...'
invalidAncestor?['...']:[],childOwnerNames,childTag).join(' > ');var warnKey=!!invalidParent+'|'+childTag+'|'+ancestorTag+'|'+ownerInfo;if(didWarn[warnKey]){return;}didWarn[warnKey]=true;var tagDisplayName=childTag;var whitespaceInfo='';if(childTag==='#text'){if(/\S/.test(childText)){tagDisplayName='Text nodes';}else{tagDisplayName='Whitespace text nodes';whitespaceInfo=' Make sure you don\'t have any extra whitespace between tags on '+'each line of your source code.';}}else{tagDisplayName='<'+childTag+'>';}if(invalidParent){var info='';if(ancestorTag==='table'&&childTag==='tr'){info+=' Add a <tbody> to your code to match the DOM tree generated by '+'the browser.';}process.env.NODE_ENV!=='production'?warning(false,'validateDOMNesting(...): %s cannot appear as a child of <%s>.%s '+'See %s.%s',tagDisplayName,ancestorTag,whitespaceInfo,ownerInfo,info):void 0;}else{process.env.NODE_ENV!=='production'?warning(false,'validateDOMNesting(...): %s cannot appear as a descendant of '+'<%s>. See %s.',tagDisplayName,ancestorTag,ownerInfo):void 0;}}};validateDOMNesting.updatedAncestorInfo=updatedAncestorInfo;// For testing
validateDOMNesting.isTagValidInContext=function(tag,ancestorInfo){ancestorInfo=ancestorInfo||emptyAncestorInfo;var parentInfo=ancestorInfo.current;var parentTag=parentInfo&&parentInfo.tag;return isTagValidWithParent(tag,parentTag)&&!findInvalidAncestorForTag(tag,ancestorInfo);};}module.exports=validateDOMNesting;}).call(this,require('_process'));},{"_process":3,"fbjs/lib/emptyFunction":51,"fbjs/lib/warning":68,"object-assign":344}],225:[function(require,module,exports){'use strict';module.exports=require('./lib/React');},{"./lib/React":104}],226:[function(require,module,exports){'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();// special flexbox specifications
var _prefixAll2=require('./static/prefixAll');var _prefixAll3=_interopRequireDefault(_prefixAll2);var _getBrowserInformation=require('./utils/getBrowserInformation');var _getBrowserInformation2=_interopRequireDefault(_getBrowserInformation);var _getPrefixedKeyframes=require('./utils/getPrefixedKeyframes');var _getPrefixedKeyframes2=_interopRequireDefault(_getPrefixedKeyframes);var _capitalizeString=require('./utils/capitalizeString');var _capitalizeString2=_interopRequireDefault(_capitalizeString);var _prefixProps=require('./prefixProps');var _prefixProps2=_interopRequireDefault(_prefixProps);var _calc=require('./plugins/calc');var _calc2=_interopRequireDefault(_calc);var _zoomCursor=require('./plugins/zoomCursor');var _zoomCursor2=_interopRequireDefault(_zoomCursor);var _grabCursor=require('./plugins/grabCursor');var _grabCursor2=_interopRequireDefault(_grabCursor);var _flex=require('./plugins/flex');var _flex2=_interopRequireDefault(_flex);var _sizing=require('./plugins/sizing');var _sizing2=_interopRequireDefault(_sizing);var _gradient=require('./plugins/gradient');var _gradient2=_interopRequireDefault(_gradient);var _transition=require('./plugins/transition');var _transition2=_interopRequireDefault(_transition);var _flexboxIE=require('./plugins/flexboxIE');var _flexboxIE2=_interopRequireDefault(_flexboxIE);var _flexboxOld=require('./plugins/flexboxOld');var _flexboxOld2=_interopRequireDefault(_flexboxOld);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}var plugins=[_calc2.default,_zoomCursor2.default,_grabCursor2.default,_sizing2.default,_gradient2.default,_transition2.default,_flexboxIE2.default,_flexboxOld2.default,// this must be run AFTER the flexbox specs
_flex2.default];var Prefixer=function(){/**
   * Instantiante a new prefixer
   * @param {string} userAgent - userAgent to gather prefix information according to caniuse.com
   * @param {string} keepUnprefixed - keeps unprefixed properties and values
   */function Prefixer(){var _this=this;var options=arguments.length<=0||arguments[0]===undefined?{}:arguments[0];_classCallCheck(this,Prefixer);var defaultUserAgent=typeof navigator!=='undefined'?navigator.userAgent:undefined;this._userAgent=options.userAgent||defaultUserAgent;this._keepUnprefixed=options.keepUnprefixed||false;this._browserInfo=(0,_getBrowserInformation2.default)(this._userAgent);// Checks if the userAgent was resolved correctly
if(this._browserInfo&&this._browserInfo.prefix){// set additional prefix information
this.cssPrefix=this._browserInfo.prefix.css;this.jsPrefix=this._browserInfo.prefix.inline;this.prefixedKeyframes=(0,_getPrefixedKeyframes2.default)(this._browserInfo);}else{this._usePrefixAllFallback=true;return false;}var data=this._browserInfo.browser&&_prefixProps2.default[this._browserInfo.browser];if(data){this._requiresPrefix=Object.keys(data).filter(function(key){return data[key]>=_this._browserInfo.version;}).reduce(function(result,name){result[name]=true;return result;},{});this._hasPropsRequiringPrefix=Object.keys(this._requiresPrefix).length>0;}else{this._usePrefixAllFallback=true;}}/**
   * Returns a prefixed version of the style object
   * @param {Object} styles - Style object that gets prefixed properties added
   * @returns {Object} - Style object with prefixed properties and values
   */_createClass(Prefixer,[{key:'prefix',value:function prefix(styles){var _this2=this;// use prefixAll as fallback if userAgent can not be resolved
if(this._usePrefixAllFallback){return(0,_prefixAll3.default)(styles);}// only add prefixes if needed
if(!this._hasPropsRequiringPrefix){return styles;}Object.keys(styles).forEach(function(property){var value=styles[property];if(value instanceof Object&&!Array.isArray(value)){// recurse through nested style objects
styles[property]=_this2.prefix(value);}else{// add prefixes if needed
if(_this2._requiresPrefix[property]){styles[_this2.jsPrefix+(0,_capitalizeString2.default)(property)]=value;if(!_this2._keepUnprefixed){delete styles[property];}}}});Object.keys(styles).forEach(function(property){[].concat(styles[property]).forEach(function(value){// resolve plugins
plugins.forEach(function(plugin){// generates a new plugin interface with current data
assignStyles(styles,plugin({property:property,value:value,styles:styles,browserInfo:_this2._browserInfo,prefix:{js:_this2.jsPrefix,css:_this2.cssPrefix,keyframes:_this2.prefixedKeyframes},keepUnprefixed:_this2._keepUnprefixed,requiresPrefix:_this2._requiresPrefix}),value,_this2._keepUnprefixed);});});});return styles;}/**
     * Returns a prefixed version of the style object using all vendor prefixes
     * @param {Object} styles - Style object that gets prefixed properties added
     * @returns {Object} - Style object with prefixed properties and values
     */}],[{key:'prefixAll',value:function prefixAll(styles){return(0,_prefixAll3.default)(styles);}}]);return Prefixer;}();exports.default=Prefixer;function assignStyles(base){var extend=arguments.length<=1||arguments[1]===undefined?{}:arguments[1];var value=arguments[2];var keepUnprefixed=arguments[3];Object.keys(extend).forEach(function(property){var baseValue=base[property];if(Array.isArray(baseValue)){[].concat(extend[property]).forEach(function(val){if(base[property].indexOf(val)===-1){base[property].splice(baseValue.indexOf(value),keepUnprefixed?0:1,val);}});}else{base[property]=extend[property];}});}module.exports=exports['default'];},{"./plugins/calc":227,"./plugins/flex":228,"./plugins/flexboxIE":229,"./plugins/flexboxOld":230,"./plugins/grabCursor":231,"./plugins/gradient":232,"./plugins/sizing":233,"./plugins/transition":234,"./plugins/zoomCursor":235,"./prefixProps":236,"./static/prefixAll":245,"./utils/capitalizeString":247,"./utils/getBrowserInformation":248,"./utils/getPrefixedKeyframes":249}],227:[function(require,module,exports){'use strict';Object.defineProperty(exports,"__esModule",{value:true});exports.default=calc;var _getPrefixedValue=require('../utils/getPrefixedValue');var _getPrefixedValue2=_interopRequireDefault(_getPrefixedValue);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else{obj[key]=value;}return obj;}function calc(_ref){var property=_ref.property;var value=_ref.value;var _ref$browserInfo=_ref.browserInfo;var browser=_ref$browserInfo.browser;var version=_ref$browserInfo.version;var css=_ref.prefix.css;var keepUnprefixed=_ref.keepUnprefixed;if(typeof value==='string'&&value.indexOf('calc(')>-1&&(browser==='firefox'&&version<15||browser==='chrome'&&version<25||browser==='safari'&&version<6.1||browser==='ios_saf'&&version<7)){return _defineProperty({},property,(0,_getPrefixedValue2.default)(value.replace(/calc\(/g,css+'calc('),value,keepUnprefixed));}}module.exports=exports['default'];},{"../utils/getPrefixedValue":250}],228:[function(require,module,exports){'use strict';Object.defineProperty(exports,"__esModule",{value:true});exports.default=flex;var _getPrefixedValue=require('../utils/getPrefixedValue');var _getPrefixedValue2=_interopRequireDefault(_getPrefixedValue);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var values={flex:true,'inline-flex':true};function flex(_ref){var property=_ref.property;var value=_ref.value;var _ref$browserInfo=_ref.browserInfo;var browser=_ref$browserInfo.browser;var version=_ref$browserInfo.version;var css=_ref.prefix.css;var keepUnprefixed=_ref.keepUnprefixed;if(property==='display'&&values[value]&&(browser==='chrome'&&version<29&&version>20||(browser==='safari'||browser==='ios_saf')&&version<9&&version>6||browser==='opera'&&(version==15||version==16))){return{display:(0,_getPrefixedValue2.default)(css+value,value,keepUnprefixed)};}}module.exports=exports['default'];},{"../utils/getPrefixedValue":250}],229:[function(require,module,exports){'use strict';Object.defineProperty(exports,"__esModule",{value:true});exports.default=flexboxIE;var _getPrefixedValue=require('../utils/getPrefixedValue');var _getPrefixedValue2=_interopRequireDefault(_getPrefixedValue);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else{obj[key]=value;}return obj;}var alternativeValues={'space-around':'distribute','space-between':'justify','flex-start':'start','flex-end':'end',flex:'flexbox','inline-flex':'inline-flexbox'};var alternativeProps={alignContent:'msFlexLinePack',alignSelf:'msFlexItemAlign',alignItems:'msFlexAlign',justifyContent:'msFlexPack',order:'msFlexOrder',flexGrow:'msFlexPositive',flexShrink:'msFlexNegative',flexBasis:'msPreferredSize'};function flexboxIE(_ref){var property=_ref.property;var value=_ref.value;var styles=_ref.styles;var _ref$browserInfo=_ref.browserInfo;var browser=_ref$browserInfo.browser;var version=_ref$browserInfo.version;var css=_ref.prefix.css;var keepUnprefixed=_ref.keepUnprefixed;if((alternativeProps[property]||property==='display'&&typeof value==='string'&&value.indexOf('flex')>-1)&&(browser==='ie_mob'||browser==='ie')&&version==10){if(!keepUnprefixed&&!Array.isArray(styles[property])){delete styles[property];}if(property==='display'&&alternativeValues[value]){return{display:(0,_getPrefixedValue2.default)(css+alternativeValues[value],value,keepUnprefixed)};}if(alternativeProps[property]){return _defineProperty({},alternativeProps[property],alternativeValues[value]||value);}}}module.exports=exports['default'];},{"../utils/getPrefixedValue":250}],230:[function(require,module,exports){'use strict';Object.defineProperty(exports,"__esModule",{value:true});exports.default=flexboxOld;var _getPrefixedValue=require('../utils/getPrefixedValue');var _getPrefixedValue2=_interopRequireDefault(_getPrefixedValue);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else{obj[key]=value;}return obj;}var alternativeValues={'space-around':'justify','space-between':'justify','flex-start':'start','flex-end':'end','wrap-reverse':'multiple',wrap:'multiple',flex:'box','inline-flex':'inline-box'};var alternativeProps={alignItems:'WebkitBoxAlign',justifyContent:'WebkitBoxPack',flexWrap:'WebkitBoxLines'};var otherProps=['alignContent','alignSelf','order','flexGrow','flexShrink','flexBasis','flexDirection'];var properties=Object.keys(alternativeProps).concat(otherProps);function flexboxOld(_ref){var property=_ref.property;var value=_ref.value;var styles=_ref.styles;var _ref$browserInfo=_ref.browserInfo;var browser=_ref$browserInfo.browser;var version=_ref$browserInfo.version;var css=_ref.prefix.css;var keepUnprefixed=_ref.keepUnprefixed;if((properties.indexOf(property)>-1||property==='display'&&typeof value==='string'&&value.indexOf('flex')>-1)&&(browser==='firefox'&&version<22||browser==='chrome'&&version<21||(browser==='safari'||browser==='ios_saf')&&version<=6.1||browser==='android'&&version<4.4||browser==='and_uc')){if(!keepUnprefixed&&!Array.isArray(styles[property])){delete styles[property];}if(property==='flexDirection'&&typeof value==='string'){return{WebkitBoxOrient:value.indexOf('column')>-1?'vertical':'horizontal',WebkitBoxDirection:value.indexOf('reverse')>-1?'reverse':'normal'};}if(property==='display'&&alternativeValues[value]){return{display:(0,_getPrefixedValue2.default)(css+alternativeValues[value],value,keepUnprefixed)};}if(alternativeProps[property]){return _defineProperty({},alternativeProps[property],alternativeValues[value]||value);}}}module.exports=exports['default'];},{"../utils/getPrefixedValue":250}],231:[function(require,module,exports){'use strict';Object.defineProperty(exports,"__esModule",{value:true});exports.default=grabCursor;var _getPrefixedValue=require('../utils/getPrefixedValue');var _getPrefixedValue2=_interopRequireDefault(_getPrefixedValue);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var values={grab:true,grabbing:true};function grabCursor(_ref){var property=_ref.property;var value=_ref.value;var browser=_ref.browserInfo.browser;var css=_ref.prefix.css;var keepUnprefixed=_ref.keepUnprefixed;// adds prefixes for firefox, chrome, safari, and opera regardless of version until a reliable brwoser support info can be found (see: https://github.com/rofrischmann/inline-style-prefixer/issues/79)
if(property==='cursor'&&values[value]&&(browser==='firefox'||browser==='chrome'||browser==='safari'||browser==='opera')){return{cursor:(0,_getPrefixedValue2.default)(css+value,value,keepUnprefixed)};}}module.exports=exports['default'];},{"../utils/getPrefixedValue":250}],232:[function(require,module,exports){'use strict';Object.defineProperty(exports,"__esModule",{value:true});exports.default=gradient;var _getPrefixedValue=require('../utils/getPrefixedValue');var _getPrefixedValue2=_interopRequireDefault(_getPrefixedValue);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else{obj[key]=value;}return obj;}var values=/linear-gradient|radial-gradient|repeating-linear-gradient|repeating-radial-gradient/;function gradient(_ref){var property=_ref.property;var value=_ref.value;var _ref$browserInfo=_ref.browserInfo;var browser=_ref$browserInfo.browser;var version=_ref$browserInfo.version;var css=_ref.prefix.css;var keepUnprefixed=_ref.keepUnprefixed;if(typeof value==='string'&&value.match(values)!==null&&(browser==='firefox'&&version<16||browser==='chrome'&&version<26||(browser==='safari'||browser==='ios_saf')&&version<7||(browser==='opera'||browser==='op_mini')&&version<12.1||browser==='android'&&version<4.4||browser==='and_uc')){return _defineProperty({},property,(0,_getPrefixedValue2.default)(css+value,value,keepUnprefixed));}}module.exports=exports['default'];},{"../utils/getPrefixedValue":250}],233:[function(require,module,exports){'use strict';Object.defineProperty(exports,"__esModule",{value:true});exports.default=sizing;var _getPrefixedValue=require('../utils/getPrefixedValue');var _getPrefixedValue2=_interopRequireDefault(_getPrefixedValue);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else{obj[key]=value;}return obj;}var properties={maxHeight:true,maxWidth:true,width:true,height:true,columnWidth:true,minWidth:true,minHeight:true};var values={'min-content':true,'max-content':true,'fill-available':true,'fit-content':true,'contain-floats':true};function sizing(_ref){var property=_ref.property;var value=_ref.value;var css=_ref.prefix.css;var keepUnprefixed=_ref.keepUnprefixed;// This might change in the future
// Keep an eye on it
if(properties[property]&&values[value]){return _defineProperty({},property,(0,_getPrefixedValue2.default)(css+value,value,keepUnprefixed));}}module.exports=exports['default'];},{"../utils/getPrefixedValue":250}],234:[function(require,module,exports){'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _typeof=typeof Symbol==="function"&&_typeof4(Symbol.iterator)==="symbol"?function(obj){return typeof obj==="undefined"?"undefined":_typeof4(obj);}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol?"symbol":typeof obj==="undefined"?"undefined":_typeof4(obj);};exports.default=transition;var _hyphenateStyleName=require('hyphenate-style-name');var _hyphenateStyleName2=_interopRequireDefault(_hyphenateStyleName);var _unprefixProperty=require('../utils/unprefixProperty');var _unprefixProperty2=_interopRequireDefault(_unprefixProperty);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else{obj[key]=value;}return obj;}var properties={transition:true,transitionProperty:true};function transition(_ref){var property=_ref.property;var value=_ref.value;var css=_ref.prefix.css;var requiresPrefix=_ref.requiresPrefix;var keepUnprefixed=_ref.keepUnprefixed;// also check for already prefixed transitions
var unprefixedProperty=(0,_unprefixProperty2.default)(property);if(typeof value==='string'&&properties[unprefixedProperty]){var _ret=function(){// TODO: memoize this array
var requiresPrefixDashCased=Object.keys(requiresPrefix).map(function(prop){return(0,_hyphenateStyleName2.default)(prop);});// only split multi values, not cubic beziers
var multipleValues=value.split(/,(?![^()]*(?:\([^()]*\))?\))/g);requiresPrefixDashCased.forEach(function(prop){multipleValues.forEach(function(val,index){if(val.indexOf(prop)>-1&&prop!=='order'){multipleValues[index]=val.replace(prop,css+prop)+(keepUnprefixed?','+val:'');}});});return{v:_defineProperty({},property,multipleValues.join(','))};}();if((typeof _ret==='undefined'?'undefined':_typeof(_ret))==="object")return _ret.v;}}module.exports=exports['default'];},{"../utils/unprefixProperty":253,"hyphenate-style-name":73}],235:[function(require,module,exports){'use strict';Object.defineProperty(exports,"__esModule",{value:true});exports.default=zoomCursor;var _getPrefixedValue=require('../utils/getPrefixedValue');var _getPrefixedValue2=_interopRequireDefault(_getPrefixedValue);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var values={'zoom-in':true,'zoom-out':true};function zoomCursor(_ref){var property=_ref.property;var value=_ref.value;var _ref$browserInfo=_ref.browserInfo;var browser=_ref$browserInfo.browser;var version=_ref$browserInfo.version;var css=_ref.prefix.css;var keepUnprefixed=_ref.keepUnprefixed;if(property==='cursor'&&values[value]&&(browser==='firefox'&&version<24||browser==='chrome'&&version<37||browser==='safari'&&version<9||browser==='opera'&&version<24)){return{cursor:(0,_getPrefixedValue2.default)(css+value,value,keepUnprefixed)};}}module.exports=exports['default'];},{"../utils/getPrefixedValue":250}],236:[function(require,module,exports){"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports.default={"chrome":{"transform":35,"transformOrigin":35,"transformOriginX":35,"transformOriginY":35,"backfaceVisibility":35,"perspective":35,"perspectiveOrigin":35,"transformStyle":35,"transformOriginZ":35,"animation":42,"animationDelay":42,"animationDirection":42,"animationFillMode":42,"animationDuration":42,"animationIterationCount":42,"animationName":42,"animationPlayState":42,"animationTimingFunction":42,"appearance":55,"userSelect":55,"fontKerning":32,"textEmphasisPosition":55,"textEmphasis":55,"textEmphasisStyle":55,"textEmphasisColor":55,"boxDecorationBreak":55,"clipPath":55,"maskImage":55,"maskMode":55,"maskRepeat":55,"maskPosition":55,"maskClip":55,"maskOrigin":55,"maskSize":55,"maskComposite":55,"mask":55,"maskBorderSource":55,"maskBorderMode":55,"maskBorderSlice":55,"maskBorderWidth":55,"maskBorderOutset":55,"maskBorderRepeat":55,"maskBorder":55,"maskType":55,"textDecorationStyle":55,"textDecorationSkip":55,"textDecorationLine":55,"textDecorationColor":55,"filter":52,"fontFeatureSettings":47,"breakAfter":49,"breakBefore":49,"breakInside":49,"columnCount":49,"columnFill":49,"columnGap":49,"columnRule":49,"columnRuleColor":49,"columnRuleStyle":49,"columnRuleWidth":49,"columns":49,"columnSpan":49,"columnWidth":49},"safari":{"flex":8,"flexBasis":8,"flexDirection":8,"flexGrow":8,"flexFlow":8,"flexShrink":8,"flexWrap":8,"alignContent":8,"alignItems":8,"alignSelf":8,"justifyContent":8,"order":8,"transition":6,"transitionDelay":6,"transitionDuration":6,"transitionProperty":6,"transitionTimingFunction":6,"transform":8,"transformOrigin":8,"transformOriginX":8,"transformOriginY":8,"backfaceVisibility":8,"perspective":8,"perspectiveOrigin":8,"transformStyle":8,"transformOriginZ":8,"animation":8,"animationDelay":8,"animationDirection":8,"animationFillMode":8,"animationDuration":8,"animationIterationCount":8,"animationName":8,"animationPlayState":8,"animationTimingFunction":8,"appearance":10,"userSelect":10,"backdropFilter":10,"fontKerning":9,"scrollSnapType":10,"scrollSnapPointsX":10,"scrollSnapPointsY":10,"scrollSnapDestination":10,"scrollSnapCoordinate":10,"textEmphasisPosition":7,"textEmphasis":7,"textEmphasisStyle":7,"textEmphasisColor":7,"boxDecorationBreak":10,"clipPath":10,"maskImage":10,"maskMode":10,"maskRepeat":10,"maskPosition":10,"maskClip":10,"maskOrigin":10,"maskSize":10,"maskComposite":10,"mask":10,"maskBorderSource":10,"maskBorderMode":10,"maskBorderSlice":10,"maskBorderWidth":10,"maskBorderOutset":10,"maskBorderRepeat":10,"maskBorder":10,"maskType":10,"textDecorationStyle":10,"textDecorationSkip":10,"textDecorationLine":10,"textDecorationColor":10,"shapeImageThreshold":10,"shapeImageMargin":10,"shapeImageOutside":10,"filter":9,"hyphens":10,"flowInto":10,"flowFrom":10,"breakBefore":8,"breakAfter":8,"breakInside":8,"regionFragment":10,"columnCount":8,"columnFill":8,"columnGap":8,"columnRule":8,"columnRuleColor":8,"columnRuleStyle":8,"columnRuleWidth":8,"columns":8,"columnSpan":8,"columnWidth":8},"firefox":{"appearance":51,"userSelect":51,"boxSizing":28,"textAlignLast":48,"textDecorationStyle":35,"textDecorationSkip":35,"textDecorationLine":35,"textDecorationColor":35,"tabSize":51,"hyphens":42,"fontFeatureSettings":33,"breakAfter":51,"breakBefore":51,"breakInside":51,"columnCount":51,"columnFill":51,"columnGap":51,"columnRule":51,"columnRuleColor":51,"columnRuleStyle":51,"columnRuleWidth":51,"columns":51,"columnSpan":51,"columnWidth":51},"opera":{"flex":16,"flexBasis":16,"flexDirection":16,"flexGrow":16,"flexFlow":16,"flexShrink":16,"flexWrap":16,"alignContent":16,"alignItems":16,"alignSelf":16,"justifyContent":16,"order":16,"transform":22,"transformOrigin":22,"transformOriginX":22,"transformOriginY":22,"backfaceVisibility":22,"perspective":22,"perspectiveOrigin":22,"transformStyle":22,"transformOriginZ":22,"animation":29,"animationDelay":29,"animationDirection":29,"animationFillMode":29,"animationDuration":29,"animationIterationCount":29,"animationName":29,"animationPlayState":29,"animationTimingFunction":29,"appearance":41,"userSelect":41,"fontKerning":19,"textEmphasisPosition":41,"textEmphasis":41,"textEmphasisStyle":41,"textEmphasisColor":41,"boxDecorationBreak":41,"clipPath":41,"maskImage":41,"maskMode":41,"maskRepeat":41,"maskPosition":41,"maskClip":41,"maskOrigin":41,"maskSize":41,"maskComposite":41,"mask":41,"maskBorderSource":41,"maskBorderMode":41,"maskBorderSlice":41,"maskBorderWidth":41,"maskBorderOutset":41,"maskBorderRepeat":41,"maskBorder":41,"maskType":41,"textDecorationStyle":41,"textDecorationSkip":41,"textDecorationLine":41,"textDecorationColor":41,"filter":39,"fontFeatureSettings":34,"breakAfter":36,"breakBefore":36,"breakInside":36,"columnCount":36,"columnFill":36,"columnGap":36,"columnRule":36,"columnRuleColor":36,"columnRuleStyle":36,"columnRuleWidth":36,"columns":36,"columnSpan":36,"columnWidth":36},"ie":{"flex":10,"flexDirection":10,"flexFlow":10,"flexWrap":10,"transform":9,"transformOrigin":9,"transformOriginX":9,"transformOriginY":9,"userSelect":11,"wrapFlow":11,"wrapThrough":11,"wrapMargin":11,"scrollSnapType":11,"scrollSnapPointsX":11,"scrollSnapPointsY":11,"scrollSnapDestination":11,"scrollSnapCoordinate":11,"touchAction":10,"hyphens":11,"flowInto":11,"flowFrom":11,"breakBefore":11,"breakAfter":11,"breakInside":11,"regionFragment":11,"gridTemplateColumns":11,"gridTemplateRows":11,"gridTemplateAreas":11,"gridTemplate":11,"gridAutoColumns":11,"gridAutoRows":11,"gridAutoFlow":11,"grid":11,"gridRowStart":11,"gridColumnStart":11,"gridRowEnd":11,"gridRow":11,"gridColumn":11,"gridColumnEnd":11,"gridColumnGap":11,"gridRowGap":11,"gridArea":11,"gridGap":11,"textSizeAdjust":11},"edge":{"userSelect":14,"wrapFlow":14,"wrapThrough":14,"wrapMargin":14,"scrollSnapType":14,"scrollSnapPointsX":14,"scrollSnapPointsY":14,"scrollSnapDestination":14,"scrollSnapCoordinate":14,"hyphens":14,"flowInto":14,"flowFrom":14,"breakBefore":14,"breakAfter":14,"breakInside":14,"regionFragment":14,"gridTemplateColumns":14,"gridTemplateRows":14,"gridTemplateAreas":14,"gridTemplate":14,"gridAutoColumns":14,"gridAutoRows":14,"gridAutoFlow":14,"grid":14,"gridRowStart":14,"gridColumnStart":14,"gridRowEnd":14,"gridRow":14,"gridColumn":14,"gridColumnEnd":14,"gridColumnGap":14,"gridRowGap":14,"gridArea":14,"gridGap":14},"ios_saf":{"flex":8.1,"flexBasis":8.1,"flexDirection":8.1,"flexGrow":8.1,"flexFlow":8.1,"flexShrink":8.1,"flexWrap":8.1,"alignContent":8.1,"alignItems":8.1,"alignSelf":8.1,"justifyContent":8.1,"order":8.1,"transition":6,"transitionDelay":6,"transitionDuration":6,"transitionProperty":6,"transitionTimingFunction":6,"transform":8.1,"transformOrigin":8.1,"transformOriginX":8.1,"transformOriginY":8.1,"backfaceVisibility":8.1,"perspective":8.1,"perspectiveOrigin":8.1,"transformStyle":8.1,"transformOriginZ":8.1,"animation":8.1,"animationDelay":8.1,"animationDirection":8.1,"animationFillMode":8.1,"animationDuration":8.1,"animationIterationCount":8.1,"animationName":8.1,"animationPlayState":8.1,"animationTimingFunction":8.1,"appearance":9.3,"userSelect":9.3,"backdropFilter":9.3,"fontKerning":9.3,"scrollSnapType":9.3,"scrollSnapPointsX":9.3,"scrollSnapPointsY":9.3,"scrollSnapDestination":9.3,"scrollSnapCoordinate":9.3,"boxDecorationBreak":9.3,"clipPath":9.3,"maskImage":9.3,"maskMode":9.3,"maskRepeat":9.3,"maskPosition":9.3,"maskClip":9.3,"maskOrigin":9.3,"maskSize":9.3,"maskComposite":9.3,"mask":9.3,"maskBorderSource":9.3,"maskBorderMode":9.3,"maskBorderSlice":9.3,"maskBorderWidth":9.3,"maskBorderOutset":9.3,"maskBorderRepeat":9.3,"maskBorder":9.3,"maskType":9.3,"textSizeAdjust":9.3,"textDecorationStyle":9.3,"textDecorationSkip":9.3,"textDecorationLine":9.3,"textDecorationColor":9.3,"shapeImageThreshold":9.3,"shapeImageMargin":9.3,"shapeImageOutside":9.3,"filter":9,"hyphens":9.3,"flowInto":9.3,"flowFrom":9.3,"breakBefore":8.1,"breakAfter":8.1,"breakInside":8.1,"regionFragment":9.3,"columnCount":8.1,"columnFill":8.1,"columnGap":8.1,"columnRule":8.1,"columnRuleColor":8.1,"columnRuleStyle":8.1,"columnRuleWidth":8.1,"columns":8.1,"columnSpan":8.1,"columnWidth":8.1},"android":{"flex":4.2,"flexBasis":4.2,"flexDirection":4.2,"flexGrow":4.2,"flexFlow":4.2,"flexShrink":4.2,"flexWrap":4.2,"alignContent":4.2,"alignItems":4.2,"alignSelf":4.2,"justifyContent":4.2,"order":4.2,"transition":4.2,"transitionDelay":4.2,"transitionDuration":4.2,"transitionProperty":4.2,"transitionTimingFunction":4.2,"transform":4.4,"transformOrigin":4.4,"transformOriginX":4.4,"transformOriginY":4.4,"backfaceVisibility":4.4,"perspective":4.4,"perspectiveOrigin":4.4,"transformStyle":4.4,"transformOriginZ":4.4,"animation":4.4,"animationDelay":4.4,"animationDirection":4.4,"animationFillMode":4.4,"animationDuration":4.4,"animationIterationCount":4.4,"animationName":4.4,"animationPlayState":4.4,"animationTimingFunction":4.4,"appearance":51,"userSelect":51,"fontKerning":4.4,"textEmphasisPosition":51,"textEmphasis":51,"textEmphasisStyle":51,"textEmphasisColor":51,"boxDecorationBreak":51,"clipPath":51,"maskImage":51,"maskMode":51,"maskRepeat":51,"maskPosition":51,"maskClip":51,"maskOrigin":51,"maskSize":51,"maskComposite":51,"mask":51,"maskBorderSource":51,"maskBorderMode":51,"maskBorderSlice":51,"maskBorderWidth":51,"maskBorderOutset":51,"maskBorderRepeat":51,"maskBorder":51,"maskType":51,"filter":51,"fontFeatureSettings":4.4,"breakAfter":51,"breakBefore":51,"breakInside":51,"columnCount":51,"columnFill":51,"columnGap":51,"columnRule":51,"columnRuleColor":51,"columnRuleStyle":51,"columnRuleWidth":51,"columns":51,"columnSpan":51,"columnWidth":51},"and_chr":{"appearance":51,"userSelect":51,"textEmphasisPosition":51,"textEmphasis":51,"textEmphasisStyle":51,"textEmphasisColor":51,"boxDecorationBreak":51,"clipPath":51,"maskImage":51,"maskMode":51,"maskRepeat":51,"maskPosition":51,"maskClip":51,"maskOrigin":51,"maskSize":51,"maskComposite":51,"mask":51,"maskBorderSource":51,"maskBorderMode":51,"maskBorderSlice":51,"maskBorderWidth":51,"maskBorderOutset":51,"maskBorderRepeat":51,"maskBorder":51,"maskType":51,"textDecorationStyle":51,"textDecorationSkip":51,"textDecorationLine":51,"textDecorationColor":51,"filter":51},"and_uc":{"flex":9.9,"flexBasis":9.9,"flexDirection":9.9,"flexGrow":9.9,"flexFlow":9.9,"flexShrink":9.9,"flexWrap":9.9,"alignContent":9.9,"alignItems":9.9,"alignSelf":9.9,"justifyContent":9.9,"order":9.9,"transition":9.9,"transitionDelay":9.9,"transitionDuration":9.9,"transitionProperty":9.9,"transitionTimingFunction":9.9,"transform":9.9,"transformOrigin":9.9,"transformOriginX":9.9,"transformOriginY":9.9,"backfaceVisibility":9.9,"perspective":9.9,"perspectiveOrigin":9.9,"transformStyle":9.9,"transformOriginZ":9.9,"animation":9.9,"animationDelay":9.9,"animationDirection":9.9,"animationFillMode":9.9,"animationDuration":9.9,"animationIterationCount":9.9,"animationName":9.9,"animationPlayState":9.9,"animationTimingFunction":9.9,"appearance":9.9,"userSelect":9.9,"fontKerning":9.9,"textEmphasisPosition":9.9,"textEmphasis":9.9,"textEmphasisStyle":9.9,"textEmphasisColor":9.9,"maskImage":9.9,"maskMode":9.9,"maskRepeat":9.9,"maskPosition":9.9,"maskClip":9.9,"maskOrigin":9.9,"maskSize":9.9,"maskComposite":9.9,"mask":9.9,"maskBorderSource":9.9,"maskBorderMode":9.9,"maskBorderSlice":9.9,"maskBorderWidth":9.9,"maskBorderOutset":9.9,"maskBorderRepeat":9.9,"maskBorder":9.9,"maskType":9.9,"textSizeAdjust":9.9,"filter":9.9,"hyphens":9.9,"flowInto":9.9,"flowFrom":9.9,"breakBefore":9.9,"breakAfter":9.9,"breakInside":9.9,"regionFragment":9.9,"fontFeatureSettings":9.9,"columnCount":9.9,"columnFill":9.9,"columnGap":9.9,"columnRule":9.9,"columnRuleColor":9.9,"columnRuleStyle":9.9,"columnRuleWidth":9.9,"columns":9.9,"columnSpan":9.9,"columnWidth":9.9},"op_mini":{}};module.exports=exports["default"];},{}],237:[function(require,module,exports){'use strict';Object.defineProperty(exports,"__esModule",{value:true});exports.default=calc;var _joinPrefixedValue=require('../../utils/joinPrefixedValue');var _joinPrefixedValue2=_interopRequireDefault(_joinPrefixedValue);var _isPrefixedValue=require('../../utils/isPrefixedValue');var _isPrefixedValue2=_interopRequireDefault(_isPrefixedValue);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function calc(property,value){if(typeof value==='string'&&!(0,_isPrefixedValue2.default)(value)&&value.indexOf('calc(')>-1){return(0,_joinPrefixedValue2.default)(property,value,function(prefix,value){return value.replace(/calc\(/g,prefix+'calc(');});}}module.exports=exports['default'];},{"../../utils/isPrefixedValue":251,"../../utils/joinPrefixedValue":252}],238:[function(require,module,exports){'use strict';Object.defineProperty(exports,"__esModule",{value:true});exports.default=cursor;var _joinPrefixedValue=require('../../utils/joinPrefixedValue');var _joinPrefixedValue2=_interopRequireDefault(_joinPrefixedValue);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var values={'zoom-in':true,'zoom-out':true,grab:true,grabbing:true};function cursor(property,value){if(property==='cursor'&&values[value]){return(0,_joinPrefixedValue2.default)(property,value);}}module.exports=exports['default'];},{"../../utils/joinPrefixedValue":252}],239:[function(require,module,exports){'use strict';Object.defineProperty(exports,"__esModule",{value:true});exports.default=flex;var values={flex:true,'inline-flex':true};function flex(property,value){if(property==='display'&&values[value]){return{display:['-webkit-box','-moz-box','-ms-'+value+'box','-webkit-'+value,value]};}}module.exports=exports['default'];},{}],240:[function(require,module,exports){'use strict';Object.defineProperty(exports,"__esModule",{value:true});exports.default=flexboxIE;function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else{obj[key]=value;}return obj;}var alternativeValues={'space-around':'distribute','space-between':'justify','flex-start':'start','flex-end':'end'};var alternativeProps={alignContent:'msFlexLinePack',alignSelf:'msFlexItemAlign',alignItems:'msFlexAlign',justifyContent:'msFlexPack',order:'msFlexOrder',flexGrow:'msFlexPositive',flexShrink:'msFlexNegative',flexBasis:'msPreferredSize'};function flexboxIE(property,value){if(alternativeProps[property]){return _defineProperty({},alternativeProps[property],alternativeValues[value]||value);}}module.exports=exports['default'];},{}],241:[function(require,module,exports){'use strict';Object.defineProperty(exports,"__esModule",{value:true});exports.default=flexboxOld;function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else{obj[key]=value;}return obj;}var alternativeValues={'space-around':'justify','space-between':'justify','flex-start':'start','flex-end':'end','wrap-reverse':'multiple',wrap:'multiple'};var alternativeProps={alignItems:'WebkitBoxAlign',justifyContent:'WebkitBoxPack',flexWrap:'WebkitBoxLines'};function flexboxOld(property,value){if(property==='flexDirection'&&typeof value==='string'){return{WebkitBoxOrient:value.indexOf('column')>-1?'vertical':'horizontal',WebkitBoxDirection:value.indexOf('reverse')>-1?'reverse':'normal'};}if(alternativeProps[property]){return _defineProperty({},alternativeProps[property],alternativeValues[value]||value);}}module.exports=exports['default'];},{}],242:[function(require,module,exports){'use strict';Object.defineProperty(exports,"__esModule",{value:true});exports.default=gradient;var _joinPrefixedValue=require('../../utils/joinPrefixedValue');var _joinPrefixedValue2=_interopRequireDefault(_joinPrefixedValue);var _isPrefixedValue=require('../../utils/isPrefixedValue');var _isPrefixedValue2=_interopRequireDefault(_isPrefixedValue);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var values=/linear-gradient|radial-gradient|repeating-linear-gradient|repeating-radial-gradient/;function gradient(property,value){if(typeof value==='string'&&!(0,_isPrefixedValue2.default)(value)&&value.match(values)!==null){return(0,_joinPrefixedValue2.default)(property,value);}}module.exports=exports['default'];},{"../../utils/isPrefixedValue":251,"../../utils/joinPrefixedValue":252}],243:[function(require,module,exports){'use strict';Object.defineProperty(exports,"__esModule",{value:true});exports.default=sizing;var _joinPrefixedValue=require('../../utils/joinPrefixedValue');var _joinPrefixedValue2=_interopRequireDefault(_joinPrefixedValue);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var properties={maxHeight:true,maxWidth:true,width:true,height:true,columnWidth:true,minWidth:true,minHeight:true};var values={'min-content':true,'max-content':true,'fill-available':true,'fit-content':true,'contain-floats':true};function sizing(property,value){if(properties[property]&&values[value]){return(0,_joinPrefixedValue2.default)(property,value);}}module.exports=exports['default'];},{"../../utils/joinPrefixedValue":252}],244:[function(require,module,exports){'use strict';Object.defineProperty(exports,"__esModule",{value:true});exports.default=transition;var _hyphenateStyleName=require('hyphenate-style-name');var _hyphenateStyleName2=_interopRequireDefault(_hyphenateStyleName);var _capitalizeString=require('../../utils/capitalizeString');var _capitalizeString2=_interopRequireDefault(_capitalizeString);var _isPrefixedValue=require('../../utils/isPrefixedValue');var _isPrefixedValue2=_interopRequireDefault(_isPrefixedValue);var _prefixProps=require('../prefixProps');var _prefixProps2=_interopRequireDefault(_prefixProps);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else{obj[key]=value;}return obj;}var properties={transition:true,transitionProperty:true,WebkitTransition:true,WebkitTransitionProperty:true};function transition(property,value){// also check for already prefixed transitions
if(typeof value==='string'&&properties[property]){var _ref2;var outputValue=prefixValue(value);var webkitOutput=outputValue.split(/,(?![^()]*(?:\([^()]*\))?\))/g).filter(function(value){return value.match(/-moz-|-ms-/)===null;}).join(',');// if the property is already prefixed
if(property.indexOf('Webkit')>-1){return _defineProperty({},property,webkitOutput);}return _ref2={},_defineProperty(_ref2,'Webkit'+(0,_capitalizeString2.default)(property),webkitOutput),_defineProperty(_ref2,property,outputValue),_ref2;}}function prefixValue(value){if((0,_isPrefixedValue2.default)(value)){return value;}// only split multi values, not cubic beziers
var multipleValues=value.split(/,(?![^()]*(?:\([^()]*\))?\))/g);// iterate each single value and check for transitioned properties
// that need to be prefixed as well
multipleValues.forEach(function(val,index){multipleValues[index]=Object.keys(_prefixProps2.default).reduce(function(out,prefix){var dashCasePrefix='-'+prefix.toLowerCase()+'-';Object.keys(_prefixProps2.default[prefix]).forEach(function(prop){var dashCaseProperty=(0,_hyphenateStyleName2.default)(prop);if(val.indexOf(dashCaseProperty)>-1&&dashCaseProperty!=='order'){// join all prefixes and create a new value
out=val.replace(dashCaseProperty,dashCasePrefix+dashCaseProperty)+','+out;}});return out;},val);});return multipleValues.join(',');}module.exports=exports['default'];},{"../../utils/capitalizeString":247,"../../utils/isPrefixedValue":251,"../prefixProps":246,"hyphenate-style-name":73}],245:[function(require,module,exports){'use strict';Object.defineProperty(exports,"__esModule",{value:true});exports.default=prefixAll;var _prefixProps=require('./prefixProps');var _prefixProps2=_interopRequireDefault(_prefixProps);var _capitalizeString=require('../utils/capitalizeString');var _capitalizeString2=_interopRequireDefault(_capitalizeString);var _calc=require('./plugins/calc');var _calc2=_interopRequireDefault(_calc);var _cursor=require('./plugins/cursor');var _cursor2=_interopRequireDefault(_cursor);var _flex=require('./plugins/flex');var _flex2=_interopRequireDefault(_flex);var _sizing=require('./plugins/sizing');var _sizing2=_interopRequireDefault(_sizing);var _gradient=require('./plugins/gradient');var _gradient2=_interopRequireDefault(_gradient);var _transition=require('./plugins/transition');var _transition2=_interopRequireDefault(_transition);var _flexboxIE=require('./plugins/flexboxIE');var _flexboxIE2=_interopRequireDefault(_flexboxIE);var _flexboxOld=require('./plugins/flexboxOld');var _flexboxOld2=_interopRequireDefault(_flexboxOld);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}// special flexbox specifications
var plugins=[_calc2.default,_cursor2.default,_sizing2.default,_gradient2.default,_transition2.default,_flexboxIE2.default,_flexboxOld2.default,_flex2.default];/**
 * Returns a prefixed version of the style object using all vendor prefixes
 * @param {Object} styles - Style object that gets prefixed properties added
 * @returns {Object} - Style object with prefixed properties and values
 */function prefixAll(styles){Object.keys(styles).forEach(function(property){var value=styles[property];if(value instanceof Object&&!Array.isArray(value)){// recurse through nested style objects
styles[property]=prefixAll(value);}else{Object.keys(_prefixProps2.default).forEach(function(prefix){var properties=_prefixProps2.default[prefix];// add prefixes if needed
if(properties[property]){styles[prefix+(0,_capitalizeString2.default)(property)]=value;}});}});Object.keys(styles).forEach(function(property){[].concat(styles[property]).forEach(function(value,index){// resolve every special plugins
plugins.forEach(function(plugin){return assignStyles(styles,plugin(property,value));});});});return styles;}function assignStyles(base){var extend=arguments.length<=1||arguments[1]===undefined?{}:arguments[1];Object.keys(extend).forEach(function(property){var baseValue=base[property];if(Array.isArray(baseValue)){[].concat(extend[property]).forEach(function(value){var valueIndex=baseValue.indexOf(value);if(valueIndex>-1){base[property].splice(valueIndex,1);}base[property].push(value);});}else{base[property]=extend[property];}});}module.exports=exports['default'];},{"../utils/capitalizeString":247,"./plugins/calc":237,"./plugins/cursor":238,"./plugins/flex":239,"./plugins/flexboxIE":240,"./plugins/flexboxOld":241,"./plugins/gradient":242,"./plugins/sizing":243,"./plugins/transition":244,"./prefixProps":246}],246:[function(require,module,exports){"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports.default={"Webkit":{"transform":true,"transformOrigin":true,"transformOriginX":true,"transformOriginY":true,"backfaceVisibility":true,"perspective":true,"perspectiveOrigin":true,"transformStyle":true,"transformOriginZ":true,"animation":true,"animationDelay":true,"animationDirection":true,"animationFillMode":true,"animationDuration":true,"animationIterationCount":true,"animationName":true,"animationPlayState":true,"animationTimingFunction":true,"appearance":true,"userSelect":true,"fontKerning":true,"textEmphasisPosition":true,"textEmphasis":true,"textEmphasisStyle":true,"textEmphasisColor":true,"boxDecorationBreak":true,"clipPath":true,"maskImage":true,"maskMode":true,"maskRepeat":true,"maskPosition":true,"maskClip":true,"maskOrigin":true,"maskSize":true,"maskComposite":true,"mask":true,"maskBorderSource":true,"maskBorderMode":true,"maskBorderSlice":true,"maskBorderWidth":true,"maskBorderOutset":true,"maskBorderRepeat":true,"maskBorder":true,"maskType":true,"textDecorationStyle":true,"textDecorationSkip":true,"textDecorationLine":true,"textDecorationColor":true,"filter":true,"fontFeatureSettings":true,"breakAfter":true,"breakBefore":true,"breakInside":true,"columnCount":true,"columnFill":true,"columnGap":true,"columnRule":true,"columnRuleColor":true,"columnRuleStyle":true,"columnRuleWidth":true,"columns":true,"columnSpan":true,"columnWidth":true,"flex":true,"flexBasis":true,"flexDirection":true,"flexGrow":true,"flexFlow":true,"flexShrink":true,"flexWrap":true,"alignContent":true,"alignItems":true,"alignSelf":true,"justifyContent":true,"order":true,"transition":true,"transitionDelay":true,"transitionDuration":true,"transitionProperty":true,"transitionTimingFunction":true,"backdropFilter":true,"scrollSnapType":true,"scrollSnapPointsX":true,"scrollSnapPointsY":true,"scrollSnapDestination":true,"scrollSnapCoordinate":true,"shapeImageThreshold":true,"shapeImageMargin":true,"shapeImageOutside":true,"hyphens":true,"flowInto":true,"flowFrom":true,"regionFragment":true,"textSizeAdjust":true},"Moz":{"appearance":true,"userSelect":true,"boxSizing":true,"textAlignLast":true,"textDecorationStyle":true,"textDecorationSkip":true,"textDecorationLine":true,"textDecorationColor":true,"tabSize":true,"hyphens":true,"fontFeatureSettings":true,"breakAfter":true,"breakBefore":true,"breakInside":true,"columnCount":true,"columnFill":true,"columnGap":true,"columnRule":true,"columnRuleColor":true,"columnRuleStyle":true,"columnRuleWidth":true,"columns":true,"columnSpan":true,"columnWidth":true},"ms":{"flex":true,"flexBasis":false,"flexDirection":true,"flexGrow":false,"flexFlow":true,"flexShrink":false,"flexWrap":true,"alignContent":false,"alignItems":false,"alignSelf":false,"justifyContent":false,"order":false,"transform":true,"transformOrigin":true,"transformOriginX":true,"transformOriginY":true,"userSelect":true,"wrapFlow":true,"wrapThrough":true,"wrapMargin":true,"scrollSnapType":true,"scrollSnapPointsX":true,"scrollSnapPointsY":true,"scrollSnapDestination":true,"scrollSnapCoordinate":true,"touchAction":true,"hyphens":true,"flowInto":true,"flowFrom":true,"breakBefore":true,"breakAfter":true,"breakInside":true,"regionFragment":true,"gridTemplateColumns":true,"gridTemplateRows":true,"gridTemplateAreas":true,"gridTemplate":true,"gridAutoColumns":true,"gridAutoRows":true,"gridAutoFlow":true,"grid":true,"gridRowStart":true,"gridColumnStart":true,"gridRowEnd":true,"gridRow":true,"gridColumn":true,"gridColumnEnd":true,"gridColumnGap":true,"gridRowGap":true,"gridArea":true,"gridGap":true,"textSizeAdjust":true}};module.exports=exports["default"];},{}],247:[function(require,module,exports){"use strict";Object.defineProperty(exports,"__esModule",{value:true});// helper to capitalize strings
exports.default=function(str){return str.charAt(0).toUpperCase()+str.slice(1);};module.exports=exports["default"];},{}],248:[function(require,module,exports){'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _bowser=require('bowser');var _bowser2=_interopRequireDefault(_bowser);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var vendorPrefixes={Webkit:['chrome','safari','ios','android','phantom','opera','webos','blackberry','bada','tizen','chromium','vivaldi'],Moz:['firefox','seamonkey','sailfish'],ms:['msie','msedge']};var browsers={chrome:[['chrome'],['chromium']],safari:[['safari']],firefox:[['firefox']],edge:[['msedge']],opera:[['opera'],['vivaldi']],ios_saf:[['ios','mobile'],['ios','tablet']],ie:[['msie']],op_mini:[['opera','mobile'],['opera','tablet']],and_uc:[['android','mobile'],['android','tablet']],android:[['android','mobile'],['android','tablet']]};var browserByInfo=function browserByInfo(info){if(info.firefox){return'firefox';}var name='';Object.keys(browsers).forEach(function(browser){browsers[browser].forEach(function(condition){var match=0;condition.forEach(function(single){if(info[single]){match+=1;}});if(condition.length===match){name=browser;}});});return name;};/**
 * Uses bowser to get default browser information such as version and name
 * Evaluates bowser info and adds vendorPrefix information
 * @param {string} userAgent - userAgent that gets evaluated
 */exports.default=function(userAgent){if(!userAgent){return false;}var info=_bowser2.default._detect(userAgent);Object.keys(vendorPrefixes).forEach(function(prefix){vendorPrefixes[prefix].forEach(function(browser){if(info[browser]){info.prefix={inline:prefix,css:'-'+prefix.toLowerCase()+'-'};}});});info.browser=browserByInfo(info);// For cordova IOS 8 the version is missing, set truncated osversion to prevent NaN
info.version=info.version?parseFloat(info.version):parseInt(parseFloat(info.osversion),10);info.osversion=parseFloat(info.osversion);// iOS forces all browsers to use Safari under the hood
// as the Safari version seems to match the iOS version
// we just explicitely use the osversion instead
// https://github.com/rofrischmann/inline-style-prefixer/issues/72
if(info.browser==='ios_saf'&&info.version>info.osversion){info.version=info.osversion;info.safari=true;}// seperate native android chrome
// https://github.com/rofrischmann/inline-style-prefixer/issues/45
if(info.browser==='android'&&info.chrome&&info.version>37){info.browser='and_chr';}// For android < 4.4 we want to check the osversion
// not the chrome version, see issue #26
// https://github.com/rofrischmann/inline-style-prefixer/issues/26
if(info.browser==='android'&&info.osversion<5){info.version=info.osversion;}return info;};module.exports=exports['default'];},{"bowser":74}],249:[function(require,module,exports){'use strict';Object.defineProperty(exports,"__esModule",{value:true});exports.default=function(_ref){var browser=_ref.browser;var version=_ref.version;var prefix=_ref.prefix;var prefixedKeyframes='keyframes';if(browser==='chrome'&&version<43||(browser==='safari'||browser==='ios_saf')&&version<9||browser==='opera'&&version<30||browser==='android'&&version<=4.4||browser==='and_uc'){prefixedKeyframes=prefix.css+prefixedKeyframes;}return prefixedKeyframes;};module.exports=exports['default'];},{}],250:[function(require,module,exports){"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports.default=function(prefixedValue,value,keepUnprefixed){return keepUnprefixed?[prefixedValue,value]:prefixedValue;};module.exports=exports["default"];},{}],251:[function(require,module,exports){'use strict';Object.defineProperty(exports,"__esModule",{value:true});exports.default=function(value){if(Array.isArray(value))value=value.join(',');return value.match(/-webkit-|-moz-|-ms-/)!==null;};module.exports=exports['default'];},{}],252:[function(require,module,exports){'use strict';Object.defineProperty(exports,"__esModule",{value:true});function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else{obj[key]=value;}return obj;}// returns a style object with a single concated prefixed value string
exports.default=function(property,value){var replacer=arguments.length<=2||arguments[2]===undefined?function(prefix,value){return prefix+value;}:arguments[2];return _defineProperty({},property,['-webkit-','-moz-',''].map(function(prefix){return replacer(prefix,value);}));};module.exports=exports['default'];},{}],253:[function(require,module,exports){'use strict';Object.defineProperty(exports,"__esModule",{value:true});exports.default=function(property){var unprefixed=property.replace(/^(ms|Webkit|Moz|O)/,'');return unprefixed.charAt(0).toLowerCase()+unprefixed.slice(1);};module.exports=exports['default'];},{}],254:[function(require,module,exports){// Source: http://jsfiddle.net/vWx8V/
// http://stackoverflow.com/questions/5603195/full-list-of-javascript-keycodes
/**
 * Conenience method returns corresponding value for given keyName or keyCode.
 *
 * @param {Mixed} keyCode {Number} or keyName {String}
 * @return {Mixed}
 * @api public
 */exports=module.exports=function(searchInput){// Keyboard Events
if(searchInput&&'object'===(typeof searchInput==="undefined"?"undefined":_typeof4(searchInput))){var hasKeyCode=searchInput.which||searchInput.keyCode||searchInput.charCode;if(hasKeyCode)searchInput=hasKeyCode;}// Numbers
if('number'===typeof searchInput)return names[searchInput];// Everything else (cast to string)
var search=String(searchInput);// check codes
var foundNamedKey=codes[search.toLowerCase()];if(foundNamedKey)return foundNamedKey;// check aliases
var foundNamedKey=aliases[search.toLowerCase()];if(foundNamedKey)return foundNamedKey;// weird character?
if(search.length===1)return search.charCodeAt(0);return undefined;};/**
 * Get by name
 *
 *   exports.code['enter'] // => 13
 */var codes=exports.code=exports.codes={'backspace':8,'tab':9,'enter':13,'shift':16,'ctrl':17,'alt':18,'pause/break':19,'caps lock':20,'esc':27,'space':32,'page up':33,'page down':34,'end':35,'home':36,'left':37,'up':38,'right':39,'down':40,'insert':45,'delete':46,'command':91,'left command':91,'right command':93,'numpad *':106,'numpad +':107,'numpad -':109,'numpad .':110,'numpad /':111,'num lock':144,'scroll lock':145,'my computer':182,'my calculator':183,';':186,'=':187,',':188,'-':189,'.':190,'/':191,'`':192,'[':219,'\\':220,']':221,"'":222};// Helper aliases
var aliases=exports.aliases={'windows':91,'⇧':16,'⌥':18,'⌃':17,'⌘':91,'ctl':17,'control':17,'option':18,'pause':19,'break':19,'caps':20,'return':13,'escape':27,'spc':32,'pgup':33,'pgdn':34,'ins':45,'del':46,'cmd':91};/*!
 * Programatically add the following
 */// lower case chars
for(i=97;i<123;i++){codes[String.fromCharCode(i)]=i-32;}// numbers
for(var i=48;i<58;i++){codes[i-48]=i;}// function keys
for(i=1;i<13;i++){codes['f'+i]=i+111;}// numpad keys
for(i=0;i<10;i++){codes['numpad '+i]=i+96;}/**
 * Get by code
 *
 *   exports.name[13] // => 'Enter'
 */var names=exports.names=exports.title={};// title for backward compat
// Create reverse mapping
for(i in codes){names[codes[i]]=i;}// Add aliases
for(var alias in aliases){codes[alias]=aliases[alias];}},{}],255:[function(require,module,exports){require('../../modules/es6.string.iterator');require('../../modules/es6.array.from');module.exports=require('../../modules/_core').Array.from;},{"../../modules/_core":270,"../../modules/es6.array.from":329,"../../modules/es6.string.iterator":338}],256:[function(require,module,exports){require('../../modules/es6.object.assign');module.exports=require('../../modules/_core').Object.assign;},{"../../modules/_core":270,"../../modules/es6.object.assign":331}],257:[function(require,module,exports){require('../../modules/es6.object.create');var $Object=require('../../modules/_core').Object;module.exports=function create(P,D){return $Object.create(P,D);};},{"../../modules/_core":270,"../../modules/es6.object.create":332}],258:[function(require,module,exports){require('../../modules/es6.object.define-property');var $Object=require('../../modules/_core').Object;module.exports=function defineProperty(it,key,desc){return $Object.defineProperty(it,key,desc);};},{"../../modules/_core":270,"../../modules/es6.object.define-property":333}],259:[function(require,module,exports){require('../../modules/es6.object.get-prototype-of');module.exports=require('../../modules/_core').Object.getPrototypeOf;},{"../../modules/_core":270,"../../modules/es6.object.get-prototype-of":334}],260:[function(require,module,exports){require('../../modules/es6.object.keys');module.exports=require('../../modules/_core').Object.keys;},{"../../modules/_core":270,"../../modules/es6.object.keys":335}],261:[function(require,module,exports){require('../../modules/es6.object.set-prototype-of');module.exports=require('../../modules/_core').Object.setPrototypeOf;},{"../../modules/_core":270,"../../modules/es6.object.set-prototype-of":336}],262:[function(require,module,exports){require('../../modules/es6.symbol');require('../../modules/es6.object.to-string');require('../../modules/es7.symbol.async-iterator');require('../../modules/es7.symbol.observable');module.exports=require('../../modules/_core').Symbol;},{"../../modules/_core":270,"../../modules/es6.object.to-string":337,"../../modules/es6.symbol":339,"../../modules/es7.symbol.async-iterator":340,"../../modules/es7.symbol.observable":341}],263:[function(require,module,exports){require('../../modules/es6.string.iterator');require('../../modules/web.dom.iterable');module.exports=require('../../modules/_wks-ext').f('iterator');},{"../../modules/_wks-ext":326,"../../modules/es6.string.iterator":338,"../../modules/web.dom.iterable":342}],264:[function(require,module,exports){module.exports=function(it){if(typeof it!='function')throw TypeError(it+' is not a function!');return it;};},{}],265:[function(require,module,exports){module.exports=function(){/* empty */};},{}],266:[function(require,module,exports){var isObject=require('./_is-object');module.exports=function(it){if(!isObject(it))throw TypeError(it+' is not an object!');return it;};},{"./_is-object":288}],267:[function(require,module,exports){// false -> Array#indexOf
// true  -> Array#includes
var toIObject=require('./_to-iobject'),toLength=require('./_to-length'),toIndex=require('./_to-index');module.exports=function(IS_INCLUDES){return function($this,el,fromIndex){var O=toIObject($this),length=toLength(O.length),index=toIndex(fromIndex,length),value;// Array#includes uses SameValueZero equality algorithm
if(IS_INCLUDES&&el!=el)while(length>index){value=O[index++];if(value!=value)return true;// Array#toIndex ignores holes, Array#includes - not
}else for(;length>index;index++){if(IS_INCLUDES||index in O){if(O[index]===el)return IS_INCLUDES||index||0;}}return!IS_INCLUDES&&-1;};};},{"./_to-index":318,"./_to-iobject":320,"./_to-length":321}],268:[function(require,module,exports){// getting tag from 19.1.3.6 Object.prototype.toString()
var cof=require('./_cof'),TAG=require('./_wks')('toStringTag')// ES3 wrong here
,ARG=cof(function(){return arguments;}())=='Arguments';// fallback for IE11 Script Access Denied error
var tryGet=function tryGet(it,key){try{return it[key];}catch(e){/* empty */}};module.exports=function(it){var O,T,B;return it===undefined?'Undefined':it===null?'Null'// @@toStringTag case
:typeof(T=tryGet(O=Object(it),TAG))=='string'?T// builtinTag case
:ARG?cof(O)// ES3 arguments fallback
:(B=cof(O))=='Object'&&typeof O.callee=='function'?'Arguments':B;};},{"./_cof":269,"./_wks":327}],269:[function(require,module,exports){var toString={}.toString;module.exports=function(it){return toString.call(it).slice(8,-1);};},{}],270:[function(require,module,exports){var core=module.exports={version:'2.4.0'};if(typeof __e=='number')__e=core;// eslint-disable-line no-undef
},{}],271:[function(require,module,exports){'use strict';var $defineProperty=require('./_object-dp'),createDesc=require('./_property-desc');module.exports=function(object,index,value){if(index in object)$defineProperty.f(object,index,createDesc(0,value));else object[index]=value;};},{"./_object-dp":300,"./_property-desc":311}],272:[function(require,module,exports){// optional / simple context binding
var aFunction=require('./_a-function');module.exports=function(fn,that,length){aFunction(fn);if(that===undefined)return fn;switch(length){case 1:return function(a){return fn.call(that,a);};case 2:return function(a,b){return fn.call(that,a,b);};case 3:return function(a,b,c){return fn.call(that,a,b,c);};}return function()/* ...args */{return fn.apply(that,arguments);};};},{"./_a-function":264}],273:[function(require,module,exports){// 7.2.1 RequireObjectCoercible(argument)
module.exports=function(it){if(it==undefined)throw TypeError("Can't call method on  "+it);return it;};},{}],274:[function(require,module,exports){// Thank's IE8 for his funny defineProperty
module.exports=!require('./_fails')(function(){return Object.defineProperty({},'a',{get:function get(){return 7;}}).a!=7;});},{"./_fails":279}],275:[function(require,module,exports){var isObject=require('./_is-object'),document=require('./_global').document// in old IE typeof document.createElement is 'object'
,is=isObject(document)&&isObject(document.createElement);module.exports=function(it){return is?document.createElement(it):{};};},{"./_global":280,"./_is-object":288}],276:[function(require,module,exports){// IE 8- don't enum bug keys
module.exports='constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'.split(',');},{}],277:[function(require,module,exports){// all enumerable object keys, includes symbols
var getKeys=require('./_object-keys'),gOPS=require('./_object-gops'),pIE=require('./_object-pie');module.exports=function(it){var result=getKeys(it),getSymbols=gOPS.f;if(getSymbols){var symbols=getSymbols(it),isEnum=pIE.f,i=0,key;while(symbols.length>i){if(isEnum.call(it,key=symbols[i++]))result.push(key);}}return result;};},{"./_object-gops":305,"./_object-keys":308,"./_object-pie":309}],278:[function(require,module,exports){var global=require('./_global'),core=require('./_core'),ctx=require('./_ctx'),hide=require('./_hide'),PROTOTYPE='prototype';var $export=function $export(type,name,source){var IS_FORCED=type&$export.F,IS_GLOBAL=type&$export.G,IS_STATIC=type&$export.S,IS_PROTO=type&$export.P,IS_BIND=type&$export.B,IS_WRAP=type&$export.W,exports=IS_GLOBAL?core:core[name]||(core[name]={}),expProto=exports[PROTOTYPE],target=IS_GLOBAL?global:IS_STATIC?global[name]:(global[name]||{})[PROTOTYPE],key,own,out;if(IS_GLOBAL)source=name;for(key in source){// contains in native
own=!IS_FORCED&&target&&target[key]!==undefined;if(own&&key in exports)continue;// export native or passed
out=own?target[key]:source[key];// prevent global pollution for namespaces
exports[key]=IS_GLOBAL&&typeof target[key]!='function'?source[key]// bind timers to global for call from export context
:IS_BIND&&own?ctx(out,global)// wrap global constructors for prevent change them in library
:IS_WRAP&&target[key]==out?function(C){var F=function F(a,b,c){if(this instanceof C){switch(arguments.length){case 0:return new C();case 1:return new C(a);case 2:return new C(a,b);}return new C(a,b,c);}return C.apply(this,arguments);};F[PROTOTYPE]=C[PROTOTYPE];return F;// make static versions for prototype methods
}(out):IS_PROTO&&typeof out=='function'?ctx(Function.call,out):out;// export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
if(IS_PROTO){(exports.virtual||(exports.virtual={}))[key]=out;// export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
if(type&$export.R&&expProto&&!expProto[key])hide(expProto,key,out);}}};// type bitmap
$export.F=1;// forced
$export.G=2;// global
$export.S=4;// static
$export.P=8;// proto
$export.B=16;// bind
$export.W=32;// wrap
$export.U=64;// safe
$export.R=128;// real proto method for `library` 
module.exports=$export;},{"./_core":270,"./_ctx":272,"./_global":280,"./_hide":282}],279:[function(require,module,exports){module.exports=function(exec){try{return!!exec();}catch(e){return true;}};},{}],280:[function(require,module,exports){// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global=module.exports=typeof window!='undefined'&&window.Math==Math?window:typeof self!='undefined'&&self.Math==Math?self:Function('return this')();if(typeof __g=='number')__g=global;// eslint-disable-line no-undef
},{}],281:[function(require,module,exports){var hasOwnProperty={}.hasOwnProperty;module.exports=function(it,key){return hasOwnProperty.call(it,key);};},{}],282:[function(require,module,exports){var dP=require('./_object-dp'),createDesc=require('./_property-desc');module.exports=require('./_descriptors')?function(object,key,value){return dP.f(object,key,createDesc(1,value));}:function(object,key,value){object[key]=value;return object;};},{"./_descriptors":274,"./_object-dp":300,"./_property-desc":311}],283:[function(require,module,exports){module.exports=require('./_global').document&&document.documentElement;},{"./_global":280}],284:[function(require,module,exports){module.exports=!require('./_descriptors')&&!require('./_fails')(function(){return Object.defineProperty(require('./_dom-create')('div'),'a',{get:function get(){return 7;}}).a!=7;});},{"./_descriptors":274,"./_dom-create":275,"./_fails":279}],285:[function(require,module,exports){// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof=require('./_cof');module.exports=Object('z').propertyIsEnumerable(0)?Object:function(it){return cof(it)=='String'?it.split(''):Object(it);};},{"./_cof":269}],286:[function(require,module,exports){// check on default Array iterator
var Iterators=require('./_iterators'),ITERATOR=require('./_wks')('iterator'),ArrayProto=Array.prototype;module.exports=function(it){return it!==undefined&&(Iterators.Array===it||ArrayProto[ITERATOR]===it);};},{"./_iterators":294,"./_wks":327}],287:[function(require,module,exports){// 7.2.2 IsArray(argument)
var cof=require('./_cof');module.exports=Array.isArray||function isArray(arg){return cof(arg)=='Array';};},{"./_cof":269}],288:[function(require,module,exports){module.exports=function(it){return(typeof it==="undefined"?"undefined":_typeof4(it))==='object'?it!==null:typeof it==='function';};},{}],289:[function(require,module,exports){// call something on iterator step with safe closing on error
var anObject=require('./_an-object');module.exports=function(iterator,fn,value,entries){try{return entries?fn(anObject(value)[0],value[1]):fn(value);// 7.4.6 IteratorClose(iterator, completion)
}catch(e){var ret=iterator['return'];if(ret!==undefined)anObject(ret.call(iterator));throw e;}};},{"./_an-object":266}],290:[function(require,module,exports){'use strict';var create=require('./_object-create'),descriptor=require('./_property-desc'),setToStringTag=require('./_set-to-string-tag'),IteratorPrototype={};// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
require('./_hide')(IteratorPrototype,require('./_wks')('iterator'),function(){return this;});module.exports=function(Constructor,NAME,next){Constructor.prototype=create(IteratorPrototype,{next:descriptor(1,next)});setToStringTag(Constructor,NAME+' Iterator');};},{"./_hide":282,"./_object-create":299,"./_property-desc":311,"./_set-to-string-tag":314,"./_wks":327}],291:[function(require,module,exports){'use strict';var LIBRARY=require('./_library'),$export=require('./_export'),redefine=require('./_redefine'),hide=require('./_hide'),has=require('./_has'),Iterators=require('./_iterators'),$iterCreate=require('./_iter-create'),setToStringTag=require('./_set-to-string-tag'),getPrototypeOf=require('./_object-gpo'),ITERATOR=require('./_wks')('iterator'),BUGGY=!([].keys&&'next'in[].keys())// Safari has buggy iterators w/o `next`
,FF_ITERATOR='@@iterator',KEYS='keys',VALUES='values';var returnThis=function returnThis(){return this;};module.exports=function(Base,NAME,Constructor,next,DEFAULT,IS_SET,FORCED){$iterCreate(Constructor,NAME,next);var getMethod=function getMethod(kind){if(!BUGGY&&kind in proto)return proto[kind];switch(kind){case KEYS:return function keys(){return new Constructor(this,kind);};case VALUES:return function values(){return new Constructor(this,kind);};}return function entries(){return new Constructor(this,kind);};};var TAG=NAME+' Iterator',DEF_VALUES=DEFAULT==VALUES,VALUES_BUG=false,proto=Base.prototype,$native=proto[ITERATOR]||proto[FF_ITERATOR]||DEFAULT&&proto[DEFAULT],$default=$native||getMethod(DEFAULT),$entries=DEFAULT?!DEF_VALUES?$default:getMethod('entries'):undefined,$anyNative=NAME=='Array'?proto.entries||$native:$native,methods,key,IteratorPrototype;// Fix native
if($anyNative){IteratorPrototype=getPrototypeOf($anyNative.call(new Base()));if(IteratorPrototype!==Object.prototype){// Set @@toStringTag to native iterators
setToStringTag(IteratorPrototype,TAG,true);// fix for some old engines
if(!LIBRARY&&!has(IteratorPrototype,ITERATOR))hide(IteratorPrototype,ITERATOR,returnThis);}}// fix Array#{values, @@iterator}.name in V8 / FF
if(DEF_VALUES&&$native&&$native.name!==VALUES){VALUES_BUG=true;$default=function values(){return $native.call(this);};}// Define iterator
if((!LIBRARY||FORCED)&&(BUGGY||VALUES_BUG||!proto[ITERATOR])){hide(proto,ITERATOR,$default);}// Plug for library
Iterators[NAME]=$default;Iterators[TAG]=returnThis;if(DEFAULT){methods={values:DEF_VALUES?$default:getMethod(VALUES),keys:IS_SET?$default:getMethod(KEYS),entries:$entries};if(FORCED)for(key in methods){if(!(key in proto))redefine(proto,key,methods[key]);}else $export($export.P+$export.F*(BUGGY||VALUES_BUG),NAME,methods);}return methods;};},{"./_export":278,"./_has":281,"./_hide":282,"./_iter-create":290,"./_iterators":294,"./_library":296,"./_object-gpo":306,"./_redefine":312,"./_set-to-string-tag":314,"./_wks":327}],292:[function(require,module,exports){var ITERATOR=require('./_wks')('iterator'),SAFE_CLOSING=false;try{var riter=[7][ITERATOR]();riter['return']=function(){SAFE_CLOSING=true;};Array.from(riter,function(){throw 2;});}catch(e){/* empty */}module.exports=function(exec,skipClosing){if(!skipClosing&&!SAFE_CLOSING)return false;var safe=false;try{var arr=[7],iter=arr[ITERATOR]();iter.next=function(){return{done:safe=true};};arr[ITERATOR]=function(){return iter;};exec(arr);}catch(e){/* empty */}return safe;};},{"./_wks":327}],293:[function(require,module,exports){module.exports=function(done,value){return{value:value,done:!!done};};},{}],294:[function(require,module,exports){module.exports={};},{}],295:[function(require,module,exports){var getKeys=require('./_object-keys'),toIObject=require('./_to-iobject');module.exports=function(object,el){var O=toIObject(object),keys=getKeys(O),length=keys.length,index=0,key;while(length>index){if(O[key=keys[index++]]===el)return key;}};},{"./_object-keys":308,"./_to-iobject":320}],296:[function(require,module,exports){module.exports=true;},{}],297:[function(require,module,exports){var META=require('./_uid')('meta'),isObject=require('./_is-object'),has=require('./_has'),setDesc=require('./_object-dp').f,id=0;var isExtensible=Object.isExtensible||function(){return true;};var FREEZE=!require('./_fails')(function(){return isExtensible(Object.preventExtensions({}));});var setMeta=function setMeta(it){setDesc(it,META,{value:{i:'O'+ ++id,// object ID
w:{}// weak collections IDs
}});};var fastKey=function fastKey(it,create){// return primitive with prefix
if(!isObject(it))return(typeof it==="undefined"?"undefined":_typeof4(it))=='symbol'?it:(typeof it=='string'?'S':'P')+it;if(!has(it,META)){// can't set metadata to uncaught frozen object
if(!isExtensible(it))return'F';// not necessary to add metadata
if(!create)return'E';// add missing metadata
setMeta(it);// return object ID
}return it[META].i;};var getWeak=function getWeak(it,create){if(!has(it,META)){// can't set metadata to uncaught frozen object
if(!isExtensible(it))return true;// not necessary to add metadata
if(!create)return false;// add missing metadata
setMeta(it);// return hash weak collections IDs
}return it[META].w;};// add metadata on freeze-family methods calling
var onFreeze=function onFreeze(it){if(FREEZE&&meta.NEED&&isExtensible(it)&&!has(it,META))setMeta(it);return it;};var meta=module.exports={KEY:META,NEED:false,fastKey:fastKey,getWeak:getWeak,onFreeze:onFreeze};},{"./_fails":279,"./_has":281,"./_is-object":288,"./_object-dp":300,"./_uid":324}],298:[function(require,module,exports){'use strict';// 19.1.2.1 Object.assign(target, source, ...)
var getKeys=require('./_object-keys'),gOPS=require('./_object-gops'),pIE=require('./_object-pie'),toObject=require('./_to-object'),IObject=require('./_iobject'),$assign=Object.assign;// should work with symbols and should have deterministic property order (V8 bug)
module.exports=!$assign||require('./_fails')(function(){var A={},B={},S=Symbol(),K='abcdefghijklmnopqrst';A[S]=7;K.split('').forEach(function(k){B[k]=k;});return $assign({},A)[S]!=7||Object.keys($assign({},B)).join('')!=K;})?function assign(target,source){// eslint-disable-line no-unused-vars
var T=toObject(target),aLen=arguments.length,index=1,getSymbols=gOPS.f,isEnum=pIE.f;while(aLen>index){var S=IObject(arguments[index++]),keys=getSymbols?getKeys(S).concat(getSymbols(S)):getKeys(S),length=keys.length,j=0,key;while(length>j){if(isEnum.call(S,key=keys[j++]))T[key]=S[key];}}return T;}:$assign;},{"./_fails":279,"./_iobject":285,"./_object-gops":305,"./_object-keys":308,"./_object-pie":309,"./_to-object":322}],299:[function(require,module,exports){// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject=require('./_an-object'),dPs=require('./_object-dps'),enumBugKeys=require('./_enum-bug-keys'),IE_PROTO=require('./_shared-key')('IE_PROTO'),Empty=function Empty(){/* empty */},PROTOTYPE='prototype';// Create object with fake `null` prototype: use iframe Object with cleared prototype
var _createDict=function createDict(){// Thrash, waste and sodomy: IE GC bug
var iframe=require('./_dom-create')('iframe'),i=enumBugKeys.length,lt='<',gt='>',iframeDocument;iframe.style.display='none';require('./_html').appendChild(iframe);iframe.src='javascript:';// eslint-disable-line no-script-url
// createDict = iframe.contentWindow.Object;
// html.removeChild(iframe);
iframeDocument=iframe.contentWindow.document;iframeDocument.open();iframeDocument.write(lt+'script'+gt+'document.F=Object'+lt+'/script'+gt);iframeDocument.close();_createDict=iframeDocument.F;while(i--){delete _createDict[PROTOTYPE][enumBugKeys[i]];}return _createDict();};module.exports=Object.create||function create(O,Properties){var result;if(O!==null){Empty[PROTOTYPE]=anObject(O);result=new Empty();Empty[PROTOTYPE]=null;// add "__proto__" for Object.getPrototypeOf polyfill
result[IE_PROTO]=O;}else result=_createDict();return Properties===undefined?result:dPs(result,Properties);};},{"./_an-object":266,"./_dom-create":275,"./_enum-bug-keys":276,"./_html":283,"./_object-dps":301,"./_shared-key":315}],300:[function(require,module,exports){var anObject=require('./_an-object'),IE8_DOM_DEFINE=require('./_ie8-dom-define'),toPrimitive=require('./_to-primitive'),dP=Object.defineProperty;exports.f=require('./_descriptors')?Object.defineProperty:function defineProperty(O,P,Attributes){anObject(O);P=toPrimitive(P,true);anObject(Attributes);if(IE8_DOM_DEFINE)try{return dP(O,P,Attributes);}catch(e){/* empty */}if('get'in Attributes||'set'in Attributes)throw TypeError('Accessors not supported!');if('value'in Attributes)O[P]=Attributes.value;return O;};},{"./_an-object":266,"./_descriptors":274,"./_ie8-dom-define":284,"./_to-primitive":323}],301:[function(require,module,exports){var dP=require('./_object-dp'),anObject=require('./_an-object'),getKeys=require('./_object-keys');module.exports=require('./_descriptors')?Object.defineProperties:function defineProperties(O,Properties){anObject(O);var keys=getKeys(Properties),length=keys.length,i=0,P;while(length>i){dP.f(O,P=keys[i++],Properties[P]);}return O;};},{"./_an-object":266,"./_descriptors":274,"./_object-dp":300,"./_object-keys":308}],302:[function(require,module,exports){var pIE=require('./_object-pie'),createDesc=require('./_property-desc'),toIObject=require('./_to-iobject'),toPrimitive=require('./_to-primitive'),has=require('./_has'),IE8_DOM_DEFINE=require('./_ie8-dom-define'),gOPD=Object.getOwnPropertyDescriptor;exports.f=require('./_descriptors')?gOPD:function getOwnPropertyDescriptor(O,P){O=toIObject(O);P=toPrimitive(P,true);if(IE8_DOM_DEFINE)try{return gOPD(O,P);}catch(e){/* empty */}if(has(O,P))return createDesc(!pIE.f.call(O,P),O[P]);};},{"./_descriptors":274,"./_has":281,"./_ie8-dom-define":284,"./_object-pie":309,"./_property-desc":311,"./_to-iobject":320,"./_to-primitive":323}],303:[function(require,module,exports){// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject=require('./_to-iobject'),gOPN=require('./_object-gopn').f,toString={}.toString;var windowNames=(typeof window==="undefined"?"undefined":_typeof4(window))=='object'&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[];var getWindowNames=function getWindowNames(it){try{return gOPN(it);}catch(e){return windowNames.slice();}};module.exports.f=function getOwnPropertyNames(it){return windowNames&&toString.call(it)=='[object Window]'?getWindowNames(it):gOPN(toIObject(it));};},{"./_object-gopn":304,"./_to-iobject":320}],304:[function(require,module,exports){// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys=require('./_object-keys-internal'),hiddenKeys=require('./_enum-bug-keys').concat('length','prototype');exports.f=Object.getOwnPropertyNames||function getOwnPropertyNames(O){return $keys(O,hiddenKeys);};},{"./_enum-bug-keys":276,"./_object-keys-internal":307}],305:[function(require,module,exports){exports.f=Object.getOwnPropertySymbols;},{}],306:[function(require,module,exports){// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has=require('./_has'),toObject=require('./_to-object'),IE_PROTO=require('./_shared-key')('IE_PROTO'),ObjectProto=Object.prototype;module.exports=Object.getPrototypeOf||function(O){O=toObject(O);if(has(O,IE_PROTO))return O[IE_PROTO];if(typeof O.constructor=='function'&&O instanceof O.constructor){return O.constructor.prototype;}return O instanceof Object?ObjectProto:null;};},{"./_has":281,"./_shared-key":315,"./_to-object":322}],307:[function(require,module,exports){var has=require('./_has'),toIObject=require('./_to-iobject'),arrayIndexOf=require('./_array-includes')(false),IE_PROTO=require('./_shared-key')('IE_PROTO');module.exports=function(object,names){var O=toIObject(object),i=0,result=[],key;for(key in O){if(key!=IE_PROTO)has(O,key)&&result.push(key);}// Don't enum bug & hidden keys
while(names.length>i){if(has(O,key=names[i++])){~arrayIndexOf(result,key)||result.push(key);}}return result;};},{"./_array-includes":267,"./_has":281,"./_shared-key":315,"./_to-iobject":320}],308:[function(require,module,exports){// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys=require('./_object-keys-internal'),enumBugKeys=require('./_enum-bug-keys');module.exports=Object.keys||function keys(O){return $keys(O,enumBugKeys);};},{"./_enum-bug-keys":276,"./_object-keys-internal":307}],309:[function(require,module,exports){exports.f={}.propertyIsEnumerable;},{}],310:[function(require,module,exports){// most Object methods by ES6 should accept primitives
var $export=require('./_export'),core=require('./_core'),fails=require('./_fails');module.exports=function(KEY,exec){var fn=(core.Object||{})[KEY]||Object[KEY],exp={};exp[KEY]=exec(fn);$export($export.S+$export.F*fails(function(){fn(1);}),'Object',exp);};},{"./_core":270,"./_export":278,"./_fails":279}],311:[function(require,module,exports){module.exports=function(bitmap,value){return{enumerable:!(bitmap&1),configurable:!(bitmap&2),writable:!(bitmap&4),value:value};};},{}],312:[function(require,module,exports){module.exports=require('./_hide');},{"./_hide":282}],313:[function(require,module,exports){// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */var isObject=require('./_is-object'),anObject=require('./_an-object');var check=function check(O,proto){anObject(O);if(!isObject(proto)&&proto!==null)throw TypeError(proto+": can't set as prototype!");};module.exports={set:Object.setPrototypeOf||('__proto__'in{}?// eslint-disable-line
function(test,buggy,set){try{set=require('./_ctx')(Function.call,require('./_object-gopd').f(Object.prototype,'__proto__').set,2);set(test,[]);buggy=!(test instanceof Array);}catch(e){buggy=true;}return function setPrototypeOf(O,proto){check(O,proto);if(buggy)O.__proto__=proto;else set(O,proto);return O;};}({},false):undefined),check:check};},{"./_an-object":266,"./_ctx":272,"./_is-object":288,"./_object-gopd":302}],314:[function(require,module,exports){var def=require('./_object-dp').f,has=require('./_has'),TAG=require('./_wks')('toStringTag');module.exports=function(it,tag,stat){if(it&&!has(it=stat?it:it.prototype,TAG))def(it,TAG,{configurable:true,value:tag});};},{"./_has":281,"./_object-dp":300,"./_wks":327}],315:[function(require,module,exports){var shared=require('./_shared')('keys'),uid=require('./_uid');module.exports=function(key){return shared[key]||(shared[key]=uid(key));};},{"./_shared":316,"./_uid":324}],316:[function(require,module,exports){var global=require('./_global'),SHARED='__core-js_shared__',store=global[SHARED]||(global[SHARED]={});module.exports=function(key){return store[key]||(store[key]={});};},{"./_global":280}],317:[function(require,module,exports){var toInteger=require('./_to-integer'),defined=require('./_defined');// true  -> String#at
// false -> String#codePointAt
module.exports=function(TO_STRING){return function(that,pos){var s=String(defined(that)),i=toInteger(pos),l=s.length,a,b;if(i<0||i>=l)return TO_STRING?'':undefined;a=s.charCodeAt(i);return a<0xd800||a>0xdbff||i+1===l||(b=s.charCodeAt(i+1))<0xdc00||b>0xdfff?TO_STRING?s.charAt(i):a:TO_STRING?s.slice(i,i+2):(a-0xd800<<10)+(b-0xdc00)+0x10000;};};},{"./_defined":273,"./_to-integer":319}],318:[function(require,module,exports){var toInteger=require('./_to-integer'),max=Math.max,min=Math.min;module.exports=function(index,length){index=toInteger(index);return index<0?max(index+length,0):min(index,length);};},{"./_to-integer":319}],319:[function(require,module,exports){// 7.1.4 ToInteger
var ceil=Math.ceil,floor=Math.floor;module.exports=function(it){return isNaN(it=+it)?0:(it>0?floor:ceil)(it);};},{}],320:[function(require,module,exports){// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject=require('./_iobject'),defined=require('./_defined');module.exports=function(it){return IObject(defined(it));};},{"./_defined":273,"./_iobject":285}],321:[function(require,module,exports){// 7.1.15 ToLength
var toInteger=require('./_to-integer'),min=Math.min;module.exports=function(it){return it>0?min(toInteger(it),0x1fffffffffffff):0;// pow(2, 53) - 1 == 9007199254740991
};},{"./_to-integer":319}],322:[function(require,module,exports){// 7.1.13 ToObject(argument)
var defined=require('./_defined');module.exports=function(it){return Object(defined(it));};},{"./_defined":273}],323:[function(require,module,exports){// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject=require('./_is-object');// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports=function(it,S){if(!isObject(it))return it;var fn,val;if(S&&typeof(fn=it.toString)=='function'&&!isObject(val=fn.call(it)))return val;if(typeof(fn=it.valueOf)=='function'&&!isObject(val=fn.call(it)))return val;if(!S&&typeof(fn=it.toString)=='function'&&!isObject(val=fn.call(it)))return val;throw TypeError("Can't convert object to primitive value");};},{"./_is-object":288}],324:[function(require,module,exports){var id=0,px=Math.random();module.exports=function(key){return'Symbol('.concat(key===undefined?'':key,')_',(++id+px).toString(36));};},{}],325:[function(require,module,exports){var global=require('./_global'),core=require('./_core'),LIBRARY=require('./_library'),wksExt=require('./_wks-ext'),defineProperty=require('./_object-dp').f;module.exports=function(name){var $Symbol=core.Symbol||(core.Symbol=LIBRARY?{}:global.Symbol||{});if(name.charAt(0)!='_'&&!(name in $Symbol))defineProperty($Symbol,name,{value:wksExt.f(name)});};},{"./_core":270,"./_global":280,"./_library":296,"./_object-dp":300,"./_wks-ext":326}],326:[function(require,module,exports){exports.f=require('./_wks');},{"./_wks":327}],327:[function(require,module,exports){var store=require('./_shared')('wks'),uid=require('./_uid'),_Symbol=require('./_global').Symbol,USE_SYMBOL=typeof _Symbol=='function';var $exports=module.exports=function(name){return store[name]||(store[name]=USE_SYMBOL&&_Symbol[name]||(USE_SYMBOL?_Symbol:uid)('Symbol.'+name));};$exports.store=store;},{"./_global":280,"./_shared":316,"./_uid":324}],328:[function(require,module,exports){var classof=require('./_classof'),ITERATOR=require('./_wks')('iterator'),Iterators=require('./_iterators');module.exports=require('./_core').getIteratorMethod=function(it){if(it!=undefined)return it[ITERATOR]||it['@@iterator']||Iterators[classof(it)];};},{"./_classof":268,"./_core":270,"./_iterators":294,"./_wks":327}],329:[function(require,module,exports){'use strict';var ctx=require('./_ctx'),$export=require('./_export'),toObject=require('./_to-object'),call=require('./_iter-call'),isArrayIter=require('./_is-array-iter'),toLength=require('./_to-length'),createProperty=require('./_create-property'),getIterFn=require('./core.get-iterator-method');$export($export.S+$export.F*!require('./_iter-detect')(function(iter){Array.from(iter);}),'Array',{// 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
from:function from(arrayLike/*, mapfn = undefined, thisArg = undefined*/){var O=toObject(arrayLike),C=typeof this=='function'?this:Array,aLen=arguments.length,mapfn=aLen>1?arguments[1]:undefined,mapping=mapfn!==undefined,index=0,iterFn=getIterFn(O),length,result,step,iterator;if(mapping)mapfn=ctx(mapfn,aLen>2?arguments[2]:undefined,2);// if object isn't iterable or it's array with default iterator - use simple case
if(iterFn!=undefined&&!(C==Array&&isArrayIter(iterFn))){for(iterator=iterFn.call(O),result=new C();!(step=iterator.next()).done;index++){createProperty(result,index,mapping?call(iterator,mapfn,[step.value,index],true):step.value);}}else{length=toLength(O.length);for(result=new C(length);length>index;index++){createProperty(result,index,mapping?mapfn(O[index],index):O[index]);}}result.length=index;return result;}});},{"./_create-property":271,"./_ctx":272,"./_export":278,"./_is-array-iter":286,"./_iter-call":289,"./_iter-detect":292,"./_to-length":321,"./_to-object":322,"./core.get-iterator-method":328}],330:[function(require,module,exports){'use strict';var addToUnscopables=require('./_add-to-unscopables'),step=require('./_iter-step'),Iterators=require('./_iterators'),toIObject=require('./_to-iobject');// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports=require('./_iter-define')(Array,'Array',function(iterated,kind){this._t=toIObject(iterated);// target
this._i=0;// next index
this._k=kind;// kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
},function(){var O=this._t,kind=this._k,index=this._i++;if(!O||index>=O.length){this._t=undefined;return step(1);}if(kind=='keys')return step(0,index);if(kind=='values')return step(0,O[index]);return step(0,[index,O[index]]);},'values');// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments=Iterators.Array;addToUnscopables('keys');addToUnscopables('values');addToUnscopables('entries');},{"./_add-to-unscopables":265,"./_iter-define":291,"./_iter-step":293,"./_iterators":294,"./_to-iobject":320}],331:[function(require,module,exports){// 19.1.3.1 Object.assign(target, source)
var $export=require('./_export');$export($export.S+$export.F,'Object',{assign:require('./_object-assign')});},{"./_export":278,"./_object-assign":298}],332:[function(require,module,exports){var $export=require('./_export');// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
$export($export.S,'Object',{create:require('./_object-create')});},{"./_export":278,"./_object-create":299}],333:[function(require,module,exports){var $export=require('./_export');// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S+$export.F*!require('./_descriptors'),'Object',{defineProperty:require('./_object-dp').f});},{"./_descriptors":274,"./_export":278,"./_object-dp":300}],334:[function(require,module,exports){// 19.1.2.9 Object.getPrototypeOf(O)
var toObject=require('./_to-object'),$getPrototypeOf=require('./_object-gpo');require('./_object-sap')('getPrototypeOf',function(){return function getPrototypeOf(it){return $getPrototypeOf(toObject(it));};});},{"./_object-gpo":306,"./_object-sap":310,"./_to-object":322}],335:[function(require,module,exports){// 19.1.2.14 Object.keys(O)
var toObject=require('./_to-object'),$keys=require('./_object-keys');require('./_object-sap')('keys',function(){return function keys(it){return $keys(toObject(it));};});},{"./_object-keys":308,"./_object-sap":310,"./_to-object":322}],336:[function(require,module,exports){// 19.1.3.19 Object.setPrototypeOf(O, proto)
var $export=require('./_export');$export($export.S,'Object',{setPrototypeOf:require('./_set-proto').set});},{"./_export":278,"./_set-proto":313}],337:[function(require,module,exports){},{}],338:[function(require,module,exports){'use strict';var $at=require('./_string-at')(true);// 21.1.3.27 String.prototype[@@iterator]()
require('./_iter-define')(String,'String',function(iterated){this._t=String(iterated);// target
this._i=0;// next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
},function(){var O=this._t,index=this._i,point;if(index>=O.length)return{value:undefined,done:true};point=$at(O,index);this._i+=point.length;return{value:point,done:false};});},{"./_iter-define":291,"./_string-at":317}],339:[function(require,module,exports){'use strict';// ECMAScript 6 symbols shim
var global=require('./_global'),has=require('./_has'),DESCRIPTORS=require('./_descriptors'),$export=require('./_export'),redefine=require('./_redefine'),META=require('./_meta').KEY,$fails=require('./_fails'),shared=require('./_shared'),setToStringTag=require('./_set-to-string-tag'),uid=require('./_uid'),wks=require('./_wks'),wksExt=require('./_wks-ext'),wksDefine=require('./_wks-define'),keyOf=require('./_keyof'),enumKeys=require('./_enum-keys'),isArray=require('./_is-array'),anObject=require('./_an-object'),toIObject=require('./_to-iobject'),toPrimitive=require('./_to-primitive'),createDesc=require('./_property-desc'),_create=require('./_object-create'),gOPNExt=require('./_object-gopn-ext'),$GOPD=require('./_object-gopd'),$DP=require('./_object-dp'),$keys=require('./_object-keys'),gOPD=$GOPD.f,dP=$DP.f,gOPN=gOPNExt.f,$Symbol=global.Symbol,$JSON=global.JSON,_stringify=$JSON&&$JSON.stringify,PROTOTYPE='prototype',HIDDEN=wks('_hidden'),TO_PRIMITIVE=wks('toPrimitive'),isEnum={}.propertyIsEnumerable,SymbolRegistry=shared('symbol-registry'),AllSymbols=shared('symbols'),OPSymbols=shared('op-symbols'),ObjectProto=Object[PROTOTYPE],USE_NATIVE=typeof $Symbol=='function',QObject=global.QObject;// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter=!QObject||!QObject[PROTOTYPE]||!QObject[PROTOTYPE].findChild;// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc=DESCRIPTORS&&$fails(function(){return _create(dP({},'a',{get:function get(){return dP(this,'a',{value:7}).a;}})).a!=7;})?function(it,key,D){var protoDesc=gOPD(ObjectProto,key);if(protoDesc)delete ObjectProto[key];dP(it,key,D);if(protoDesc&&it!==ObjectProto)dP(ObjectProto,key,protoDesc);}:dP;var wrap=function wrap(tag){var sym=AllSymbols[tag]=_create($Symbol[PROTOTYPE]);sym._k=tag;return sym;};var isSymbol=USE_NATIVE&&_typeof4($Symbol.iterator)=='symbol'?function(it){return(typeof it==="undefined"?"undefined":_typeof4(it))=='symbol';}:function(it){return it instanceof $Symbol;};var $defineProperty=function defineProperty(it,key,D){if(it===ObjectProto)$defineProperty(OPSymbols,key,D);anObject(it);key=toPrimitive(key,true);anObject(D);if(has(AllSymbols,key)){if(!D.enumerable){if(!has(it,HIDDEN))dP(it,HIDDEN,createDesc(1,{}));it[HIDDEN][key]=true;}else{if(has(it,HIDDEN)&&it[HIDDEN][key])it[HIDDEN][key]=false;D=_create(D,{enumerable:createDesc(0,false)});}return setSymbolDesc(it,key,D);}return dP(it,key,D);};var $defineProperties=function defineProperties(it,P){anObject(it);var keys=enumKeys(P=toIObject(P)),i=0,l=keys.length,key;while(l>i){$defineProperty(it,key=keys[i++],P[key]);}return it;};var $create=function create(it,P){return P===undefined?_create(it):$defineProperties(_create(it),P);};var $propertyIsEnumerable=function propertyIsEnumerable(key){var E=isEnum.call(this,key=toPrimitive(key,true));if(this===ObjectProto&&has(AllSymbols,key)&&!has(OPSymbols,key))return false;return E||!has(this,key)||!has(AllSymbols,key)||has(this,HIDDEN)&&this[HIDDEN][key]?E:true;};var $getOwnPropertyDescriptor=function getOwnPropertyDescriptor(it,key){it=toIObject(it);key=toPrimitive(key,true);if(it===ObjectProto&&has(AllSymbols,key)&&!has(OPSymbols,key))return;var D=gOPD(it,key);if(D&&has(AllSymbols,key)&&!(has(it,HIDDEN)&&it[HIDDEN][key]))D.enumerable=true;return D;};var $getOwnPropertyNames=function getOwnPropertyNames(it){var names=gOPN(toIObject(it)),result=[],i=0,key;while(names.length>i){if(!has(AllSymbols,key=names[i++])&&key!=HIDDEN&&key!=META)result.push(key);}return result;};var $getOwnPropertySymbols=function getOwnPropertySymbols(it){var IS_OP=it===ObjectProto,names=gOPN(IS_OP?OPSymbols:toIObject(it)),result=[],i=0,key;while(names.length>i){if(has(AllSymbols,key=names[i++])&&(IS_OP?has(ObjectProto,key):true))result.push(AllSymbols[key]);}return result;};// 19.4.1.1 Symbol([description])
if(!USE_NATIVE){$Symbol=function _Symbol2(){if(this instanceof $Symbol)throw TypeError('Symbol is not a constructor!');var tag=uid(arguments.length>0?arguments[0]:undefined);var $set=function $set(value){if(this===ObjectProto)$set.call(OPSymbols,value);if(has(this,HIDDEN)&&has(this[HIDDEN],tag))this[HIDDEN][tag]=false;setSymbolDesc(this,tag,createDesc(1,value));};if(DESCRIPTORS&&setter)setSymbolDesc(ObjectProto,tag,{configurable:true,set:$set});return wrap(tag);};redefine($Symbol[PROTOTYPE],'toString',function toString(){return this._k;});$GOPD.f=$getOwnPropertyDescriptor;$DP.f=$defineProperty;require('./_object-gopn').f=gOPNExt.f=$getOwnPropertyNames;require('./_object-pie').f=$propertyIsEnumerable;require('./_object-gops').f=$getOwnPropertySymbols;if(DESCRIPTORS&&!require('./_library')){redefine(ObjectProto,'propertyIsEnumerable',$propertyIsEnumerable,true);}wksExt.f=function(name){return wrap(wks(name));};}$export($export.G+$export.W+$export.F*!USE_NATIVE,{Symbol:$Symbol});for(var symbols=// 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'.split(','),i=0;symbols.length>i;){wks(symbols[i++]);}for(var symbols=$keys(wks.store),i=0;symbols.length>i;){wksDefine(symbols[i++]);}$export($export.S+$export.F*!USE_NATIVE,'Symbol',{// 19.4.2.1 Symbol.for(key)
'for':function _for(key){return has(SymbolRegistry,key+='')?SymbolRegistry[key]:SymbolRegistry[key]=$Symbol(key);},// 19.4.2.5 Symbol.keyFor(sym)
keyFor:function keyFor(key){if(isSymbol(key))return keyOf(SymbolRegistry,key);throw TypeError(key+' is not a symbol!');},useSetter:function useSetter(){setter=true;},useSimple:function useSimple(){setter=false;}});$export($export.S+$export.F*!USE_NATIVE,'Object',{// 19.1.2.2 Object.create(O [, Properties])
create:$create,// 19.1.2.4 Object.defineProperty(O, P, Attributes)
defineProperty:$defineProperty,// 19.1.2.3 Object.defineProperties(O, Properties)
defineProperties:$defineProperties,// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
getOwnPropertyDescriptor:$getOwnPropertyDescriptor,// 19.1.2.7 Object.getOwnPropertyNames(O)
getOwnPropertyNames:$getOwnPropertyNames,// 19.1.2.8 Object.getOwnPropertySymbols(O)
getOwnPropertySymbols:$getOwnPropertySymbols});// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON&&$export($export.S+$export.F*(!USE_NATIVE||$fails(function(){var S=$Symbol();// MS Edge converts symbol values to JSON as {}
// WebKit converts symbol values to JSON as null
// V8 throws on boxed symbols
return _stringify([S])!='[null]'||_stringify({a:S})!='{}'||_stringify(Object(S))!='{}';})),'JSON',{stringify:function stringify(it){if(it===undefined||isSymbol(it))return;// IE8 returns string on undefined
var args=[it],i=1,replacer,$replacer;while(arguments.length>i){args.push(arguments[i++]);}replacer=args[1];if(typeof replacer=='function')$replacer=replacer;if($replacer||!isArray(replacer))replacer=function replacer(key,value){if($replacer)value=$replacer.call(this,key,value);if(!isSymbol(value))return value;};args[1]=replacer;return _stringify.apply($JSON,args);}});// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE]||require('./_hide')($Symbol[PROTOTYPE],TO_PRIMITIVE,$Symbol[PROTOTYPE].valueOf);// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol,'Symbol');// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math,'Math',true);// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON,'JSON',true);},{"./_an-object":266,"./_descriptors":274,"./_enum-keys":277,"./_export":278,"./_fails":279,"./_global":280,"./_has":281,"./_hide":282,"./_is-array":287,"./_keyof":295,"./_library":296,"./_meta":297,"./_object-create":299,"./_object-dp":300,"./_object-gopd":302,"./_object-gopn":304,"./_object-gopn-ext":303,"./_object-gops":305,"./_object-keys":308,"./_object-pie":309,"./_property-desc":311,"./_redefine":312,"./_set-to-string-tag":314,"./_shared":316,"./_to-iobject":320,"./_to-primitive":323,"./_uid":324,"./_wks":327,"./_wks-define":325,"./_wks-ext":326}],340:[function(require,module,exports){require('./_wks-define')('asyncIterator');},{"./_wks-define":325}],341:[function(require,module,exports){require('./_wks-define')('observable');},{"./_wks-define":325}],342:[function(require,module,exports){require('./es6.array.iterator');var global=require('./_global'),hide=require('./_hide'),Iterators=require('./_iterators'),TO_STRING_TAG=require('./_wks')('toStringTag');for(var collections=['NodeList','DOMTokenList','MediaList','StyleSheetList','CSSRuleList'],i=0;i<5;i++){var NAME=collections[i],Collection=global[NAME],proto=Collection&&Collection.prototype;if(proto&&!proto[TO_STRING_TAG])hide(proto,TO_STRING_TAG,NAME);Iterators[NAME]=Iterators.Array;}},{"./_global":280,"./_hide":282,"./_iterators":294,"./_wks":327,"./es6.array.iterator":330}],343:[function(require,module,exports){(function(process){/**
 * Copyright 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */'use strict';/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */var warning=function warning(){};if(process.env.NODE_ENV!=='production'){warning=function warning(condition,format,args){var len=arguments.length;args=new Array(len>2?len-2:0);for(var key=2;key<len;key++){args[key-2]=arguments[key];}if(format===undefined){throw new Error('`warning(condition, format, ...args)` requires a warning '+'message argument');}if(format.length<10||/^[s\W]*$/.test(format)){throw new Error('The warning format should be able to uniquely identify this '+'warning. Please, use a more descriptive format than: '+format);}if(!condition){var argIndex=0;var message='Warning: '+format.replace(/%s/g,function(){return args[argIndex++];});if(typeof console!=='undefined'){console.error(message);}try{// This error was thrown as a convenience so that you can use this stack
// to find the callsite that caused this warning to fire.
throw new Error(message);}catch(x){}}};}module.exports=warning;}).call(this,require('_process'));},{"_process":3}],344:[function(require,module,exports){'use strict';/* eslint-disable no-unused-vars */var hasOwnProperty=Object.prototype.hasOwnProperty;var propIsEnumerable=Object.prototype.propertyIsEnumerable;function toObject(val){if(val===null||val===undefined){throw new TypeError('Object.assign cannot be called with null or undefined');}return Object(val);}function shouldUseNative(){try{if(!Object.assign){return false;}// Detect buggy property enumeration order in older V8 versions.
// https://bugs.chromium.org/p/v8/issues/detail?id=4118
var test1=new String('abc');// eslint-disable-line
test1[5]='de';if(Object.getOwnPropertyNames(test1)[0]==='5'){return false;}// https://bugs.chromium.org/p/v8/issues/detail?id=3056
var test2={};for(var i=0;i<10;i++){test2['_'+String.fromCharCode(i)]=i;}var order2=Object.getOwnPropertyNames(test2).map(function(n){return test2[n];});if(order2.join('')!=='0123456789'){return false;}// https://bugs.chromium.org/p/v8/issues/detail?id=3056
var test3={};'abcdefghijklmnopqrst'.split('').forEach(function(letter){test3[letter]=letter;});if(Object.keys(Object.assign({},test3)).join('')!=='abcdefghijklmnopqrst'){return false;}return true;}catch(e){// We don't expect any of the above to throw, but better to be safe.
return false;}}module.exports=shouldUseNative()?Object.assign:function(target,source){var from;var to=toObject(target);var symbols;for(var s=1;s<arguments.length;s++){from=Object(arguments[s]);for(var key in from){if(hasOwnProperty.call(from,key)){to[key]=from[key];}}if(Object.getOwnPropertySymbols){symbols=Object.getOwnPropertySymbols(from);for(var i=0;i<symbols.length;i++){if(propIsEnumerable.call(from,symbols[i])){to[symbols[i]]=from[symbols[i]];}}}}return to;};},{}],345:[function(require,module,exports){(function(global){/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 *//** Used as the size to enable large array optimizations. */var LARGE_ARRAY_SIZE=200;/** Used to stand-in for `undefined` hash values. */var HASH_UNDEFINED='__lodash_hash_undefined__';/** Used as references for various `Number` constants. */var MAX_SAFE_INTEGER=9007199254740991;/** `Object#toString` result references. */var argsTag='[object Arguments]',arrayTag='[object Array]',boolTag='[object Boolean]',dateTag='[object Date]',errorTag='[object Error]',funcTag='[object Function]',genTag='[object GeneratorFunction]',mapTag='[object Map]',numberTag='[object Number]',objectTag='[object Object]',promiseTag='[object Promise]',regexpTag='[object RegExp]',setTag='[object Set]',stringTag='[object String]',symbolTag='[object Symbol]',weakMapTag='[object WeakMap]';var arrayBufferTag='[object ArrayBuffer]',dataViewTag='[object DataView]',float32Tag='[object Float32Array]',float64Tag='[object Float64Array]',int8Tag='[object Int8Array]',int16Tag='[object Int16Array]',int32Tag='[object Int32Array]',uint8Tag='[object Uint8Array]',uint8ClampedTag='[object Uint8ClampedArray]',uint16Tag='[object Uint16Array]',uint32Tag='[object Uint32Array]';/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */var reRegExpChar=/[\\^$.*+?()[\]{}|]/g;/** Used to match `RegExp` flags from their coerced string values. */var reFlags=/\w*$/;/** Used to detect host constructors (Safari). */var reIsHostCtor=/^\[object .+?Constructor\]$/;/** Used to detect unsigned integer values. */var reIsUint=/^(?:0|[1-9]\d*)$/;/** Used to identify `toStringTag` values of typed arrays. */var typedArrayTags={};typedArrayTags[float32Tag]=typedArrayTags[float64Tag]=typedArrayTags[int8Tag]=typedArrayTags[int16Tag]=typedArrayTags[int32Tag]=typedArrayTags[uint8Tag]=typedArrayTags[uint8ClampedTag]=typedArrayTags[uint16Tag]=typedArrayTags[uint32Tag]=true;typedArrayTags[argsTag]=typedArrayTags[arrayTag]=typedArrayTags[arrayBufferTag]=typedArrayTags[boolTag]=typedArrayTags[dataViewTag]=typedArrayTags[dateTag]=typedArrayTags[errorTag]=typedArrayTags[funcTag]=typedArrayTags[mapTag]=typedArrayTags[numberTag]=typedArrayTags[objectTag]=typedArrayTags[regexpTag]=typedArrayTags[setTag]=typedArrayTags[stringTag]=typedArrayTags[weakMapTag]=false;/** Used to identify `toStringTag` values supported by `_.clone`. */var cloneableTags={};cloneableTags[argsTag]=cloneableTags[arrayTag]=cloneableTags[arrayBufferTag]=cloneableTags[dataViewTag]=cloneableTags[boolTag]=cloneableTags[dateTag]=cloneableTags[float32Tag]=cloneableTags[float64Tag]=cloneableTags[int8Tag]=cloneableTags[int16Tag]=cloneableTags[int32Tag]=cloneableTags[mapTag]=cloneableTags[numberTag]=cloneableTags[objectTag]=cloneableTags[regexpTag]=cloneableTags[setTag]=cloneableTags[stringTag]=cloneableTags[symbolTag]=cloneableTags[uint8Tag]=cloneableTags[uint8ClampedTag]=cloneableTags[uint16Tag]=cloneableTags[uint32Tag]=true;cloneableTags[errorTag]=cloneableTags[funcTag]=cloneableTags[weakMapTag]=false;/** Detect free variable `global` from Node.js. */var freeGlobal=(typeof global==="undefined"?"undefined":_typeof4(global))=='object'&&global&&global.Object===Object&&global;/** Detect free variable `self`. */var freeSelf=(typeof self==="undefined"?"undefined":_typeof4(self))=='object'&&self&&self.Object===Object&&self;/** Used as a reference to the global object. */var root=freeGlobal||freeSelf||Function('return this')();/** Detect free variable `exports`. */var freeExports=(typeof exports==="undefined"?"undefined":_typeof4(exports))=='object'&&exports&&!exports.nodeType&&exports;/** Detect free variable `module`. */var freeModule=freeExports&&(typeof module==="undefined"?"undefined":_typeof4(module))=='object'&&module&&!module.nodeType&&module;/** Detect the popular CommonJS extension `module.exports`. */var moduleExports=freeModule&&freeModule.exports===freeExports;/** Detect free variable `process` from Node.js. */var freeProcess=moduleExports&&freeGlobal.process;/** Used to access faster Node.js helpers. */var nodeUtil=function(){try{return freeProcess&&freeProcess.binding('util');}catch(e){}}();/* Node.js helper references. */var nodeIsTypedArray=nodeUtil&&nodeUtil.isTypedArray;/**
 * Adds the key-value `pair` to `map`.
 *
 * @private
 * @param {Object} map The map to modify.
 * @param {Array} pair The key-value pair to add.
 * @returns {Object} Returns `map`.
 */function addMapEntry(map,pair){// Don't return `map.set` because it's not chainable in IE 11.
map.set(pair[0],pair[1]);return map;}/**
 * Adds `value` to `set`.
 *
 * @private
 * @param {Object} set The set to modify.
 * @param {*} value The value to add.
 * @returns {Object} Returns `set`.
 */function addSetEntry(set,value){// Don't return `set.add` because it's not chainable in IE 11.
set.add(value);return set;}/**
 * A faster alternative to `Function#apply`, this function invokes `func`
 * with the `this` binding of `thisArg` and the arguments of `args`.
 *
 * @private
 * @param {Function} func The function to invoke.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {Array} args The arguments to invoke `func` with.
 * @returns {*} Returns the result of `func`.
 */function apply(func,thisArg,args){switch(args.length){case 0:return func.call(thisArg);case 1:return func.call(thisArg,args[0]);case 2:return func.call(thisArg,args[0],args[1]);case 3:return func.call(thisArg,args[0],args[1],args[2]);}return func.apply(thisArg,args);}/**
 * A specialized version of `_.forEach` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns `array`.
 */function arrayEach(array,iteratee){var index=-1,length=array?array.length:0;while(++index<length){if(iteratee(array[index],index,array)===false){break;}}return array;}/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */function arrayPush(array,values){var index=-1,length=values.length,offset=array.length;while(++index<length){array[offset+index]=values[index];}return array;}/**
 * A specialized version of `_.reduce` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {*} [accumulator] The initial value.
 * @param {boolean} [initAccum] Specify using the first element of `array` as
 *  the initial value.
 * @returns {*} Returns the accumulated value.
 */function arrayReduce(array,iteratee,accumulator,initAccum){var index=-1,length=array?array.length:0;if(initAccum&&length){accumulator=array[++index];}while(++index<length){accumulator=iteratee(accumulator,array[index],index,array);}return accumulator;}/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */function baseTimes(n,iteratee){var index=-1,result=Array(n);while(++index<n){result[index]=iteratee(index);}return result;}/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */function baseUnary(func){return function(value){return func(value);};}/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */function getValue(object,key){return object==null?undefined:object[key];}/**
 * Checks if `value` is a host object in IE < 9.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
 */function isHostObject(value){// Many host objects are `Object` objects that can coerce to strings
// despite having improperly defined `toString` methods.
var result=false;if(value!=null&&typeof value.toString!='function'){try{result=!!(value+'');}catch(e){}}return result;}/**
 * Converts `map` to its key-value pairs.
 *
 * @private
 * @param {Object} map The map to convert.
 * @returns {Array} Returns the key-value pairs.
 */function mapToArray(map){var index=-1,result=Array(map.size);map.forEach(function(value,key){result[++index]=[key,value];});return result;}/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */function overArg(func,transform){return function(arg){return func(transform(arg));};}/**
 * Converts `set` to an array of its values.
 *
 * @private
 * @param {Object} set The set to convert.
 * @returns {Array} Returns the values.
 */function setToArray(set){var index=-1,result=Array(set.size);set.forEach(function(value){result[++index]=value;});return result;}/** Used for built-in method references. */var arrayProto=Array.prototype,funcProto=Function.prototype,objectProto=Object.prototype;/** Used to detect overreaching core-js shims. */var coreJsData=root['__core-js_shared__'];/** Used to detect methods masquerading as native. */var maskSrcKey=function(){var uid=/[^.]+$/.exec(coreJsData&&coreJsData.keys&&coreJsData.keys.IE_PROTO||'');return uid?'Symbol(src)_1.'+uid:'';}();/** Used to resolve the decompiled source of functions. */var funcToString=funcProto.toString;/** Used to check objects for own properties. */var hasOwnProperty=objectProto.hasOwnProperty;/** Used to infer the `Object` constructor. */var objectCtorString=funcToString.call(Object);/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */var objectToString=objectProto.toString;/** Used to detect if a method is native. */var reIsNative=RegExp('^'+funcToString.call(hasOwnProperty).replace(reRegExpChar,'\\$&').replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,'$1.*?')+'$');/** Built-in value references. */var Buffer=moduleExports?root.Buffer:undefined,_Symbol3=root.Symbol,Uint8Array=root.Uint8Array,getPrototype=overArg(Object.getPrototypeOf,Object),objectCreate=Object.create,propertyIsEnumerable=objectProto.propertyIsEnumerable,splice=arrayProto.splice;/* Built-in method references for those with the same name as other `lodash` methods. */var nativeGetSymbols=Object.getOwnPropertySymbols,nativeIsBuffer=Buffer?Buffer.isBuffer:undefined,nativeKeys=overArg(Object.keys,Object),nativeMax=Math.max;/* Built-in method references that are verified to be native. */var DataView=getNative(root,'DataView'),Map=getNative(root,'Map'),Promise=getNative(root,'Promise'),Set=getNative(root,'Set'),WeakMap=getNative(root,'WeakMap'),nativeCreate=getNative(Object,'create');/** Used to detect maps, sets, and weakmaps. */var dataViewCtorString=toSource(DataView),mapCtorString=toSource(Map),promiseCtorString=toSource(Promise),setCtorString=toSource(Set),weakMapCtorString=toSource(WeakMap);/** Used to convert symbols to primitives and strings. */var symbolProto=_Symbol3?_Symbol3.prototype:undefined,symbolValueOf=symbolProto?symbolProto.valueOf:undefined;/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */function Hash(entries){var index=-1,length=entries?entries.length:0;this.clear();while(++index<length){var entry=entries[index];this.set(entry[0],entry[1]);}}/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */function hashClear(){this.__data__=nativeCreate?nativeCreate(null):{};}/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */function hashDelete(key){return this.has(key)&&delete this.__data__[key];}/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */function hashGet(key){var data=this.__data__;if(nativeCreate){var result=data[key];return result===HASH_UNDEFINED?undefined:result;}return hasOwnProperty.call(data,key)?data[key]:undefined;}/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */function hashHas(key){var data=this.__data__;return nativeCreate?data[key]!==undefined:hasOwnProperty.call(data,key);}/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */function hashSet(key,value){var data=this.__data__;data[key]=nativeCreate&&value===undefined?HASH_UNDEFINED:value;return this;}// Add methods to `Hash`.
Hash.prototype.clear=hashClear;Hash.prototype['delete']=hashDelete;Hash.prototype.get=hashGet;Hash.prototype.has=hashHas;Hash.prototype.set=hashSet;/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */function ListCache(entries){var index=-1,length=entries?entries.length:0;this.clear();while(++index<length){var entry=entries[index];this.set(entry[0],entry[1]);}}/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */function listCacheClear(){this.__data__=[];}/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */function listCacheDelete(key){var data=this.__data__,index=assocIndexOf(data,key);if(index<0){return false;}var lastIndex=data.length-1;if(index==lastIndex){data.pop();}else{splice.call(data,index,1);}return true;}/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */function listCacheGet(key){var data=this.__data__,index=assocIndexOf(data,key);return index<0?undefined:data[index][1];}/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */function listCacheHas(key){return assocIndexOf(this.__data__,key)>-1;}/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */function listCacheSet(key,value){var data=this.__data__,index=assocIndexOf(data,key);if(index<0){data.push([key,value]);}else{data[index][1]=value;}return this;}// Add methods to `ListCache`.
ListCache.prototype.clear=listCacheClear;ListCache.prototype['delete']=listCacheDelete;ListCache.prototype.get=listCacheGet;ListCache.prototype.has=listCacheHas;ListCache.prototype.set=listCacheSet;/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */function MapCache(entries){var index=-1,length=entries?entries.length:0;this.clear();while(++index<length){var entry=entries[index];this.set(entry[0],entry[1]);}}/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */function mapCacheClear(){this.__data__={'hash':new Hash(),'map':new(Map||ListCache)(),'string':new Hash()};}/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */function mapCacheDelete(key){return getMapData(this,key)['delete'](key);}/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */function mapCacheGet(key){return getMapData(this,key).get(key);}/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */function mapCacheHas(key){return getMapData(this,key).has(key);}/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */function mapCacheSet(key,value){getMapData(this,key).set(key,value);return this;}// Add methods to `MapCache`.
MapCache.prototype.clear=mapCacheClear;MapCache.prototype['delete']=mapCacheDelete;MapCache.prototype.get=mapCacheGet;MapCache.prototype.has=mapCacheHas;MapCache.prototype.set=mapCacheSet;/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */function Stack(entries){this.__data__=new ListCache(entries);}/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */function stackClear(){this.__data__=new ListCache();}/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */function stackDelete(key){return this.__data__['delete'](key);}/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */function stackGet(key){return this.__data__.get(key);}/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */function stackHas(key){return this.__data__.has(key);}/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */function stackSet(key,value){var cache=this.__data__;if(cache instanceof ListCache){var pairs=cache.__data__;if(!Map||pairs.length<LARGE_ARRAY_SIZE-1){pairs.push([key,value]);return this;}cache=this.__data__=new MapCache(pairs);}cache.set(key,value);return this;}// Add methods to `Stack`.
Stack.prototype.clear=stackClear;Stack.prototype['delete']=stackDelete;Stack.prototype.get=stackGet;Stack.prototype.has=stackHas;Stack.prototype.set=stackSet;/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */function arrayLikeKeys(value,inherited){// Safari 8.1 makes `arguments.callee` enumerable in strict mode.
// Safari 9 makes `arguments.length` enumerable in strict mode.
var result=isArray(value)||isArguments(value)?baseTimes(value.length,String):[];var length=result.length,skipIndexes=!!length;for(var key in value){if((inherited||hasOwnProperty.call(value,key))&&!(skipIndexes&&(key=='length'||isIndex(key,length)))){result.push(key);}}return result;}/**
 * This function is like `assignValue` except that it doesn't assign
 * `undefined` values.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */function assignMergeValue(object,key,value){if(value!==undefined&&!eq(object[key],value)||typeof key=='number'&&value===undefined&&!(key in object)){object[key]=value;}}/**
 * Assigns `value` to `key` of `object` if the existing value is not equivalent
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */function assignValue(object,key,value){var objValue=object[key];if(!(hasOwnProperty.call(object,key)&&eq(objValue,value))||value===undefined&&!(key in object)){object[key]=value;}}/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */function assocIndexOf(array,key){var length=array.length;while(length--){if(eq(array[length][0],key)){return length;}}return-1;}/**
 * The base implementation of `_.assign` without support for multiple sources
 * or `customizer` functions.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @returns {Object} Returns `object`.
 */function baseAssign(object,source){return object&&copyObject(source,keys(source),object);}/**
 * The base implementation of `_.clone` and `_.cloneDeep` which tracks
 * traversed objects.
 *
 * @private
 * @param {*} value The value to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @param {boolean} [isFull] Specify a clone including symbols.
 * @param {Function} [customizer] The function to customize cloning.
 * @param {string} [key] The key of `value`.
 * @param {Object} [object] The parent object of `value`.
 * @param {Object} [stack] Tracks traversed objects and their clone counterparts.
 * @returns {*} Returns the cloned value.
 */function baseClone(value,isDeep,isFull,customizer,key,object,stack){var result;if(customizer){result=object?customizer(value,key,object,stack):customizer(value);}if(result!==undefined){return result;}if(!isObject(value)){return value;}var isArr=isArray(value);if(isArr){result=initCloneArray(value);if(!isDeep){return copyArray(value,result);}}else{var tag=getTag(value),isFunc=tag==funcTag||tag==genTag;if(isBuffer(value)){return cloneBuffer(value,isDeep);}if(tag==objectTag||tag==argsTag||isFunc&&!object){if(isHostObject(value)){return object?value:{};}result=initCloneObject(isFunc?{}:value);if(!isDeep){return copySymbols(value,baseAssign(result,value));}}else{if(!cloneableTags[tag]){return object?value:{};}result=initCloneByTag(value,tag,baseClone,isDeep);}}// Check for circular references and return its corresponding clone.
stack||(stack=new Stack());var stacked=stack.get(value);if(stacked){return stacked;}stack.set(value,result);if(!isArr){var props=isFull?getAllKeys(value):keys(value);}arrayEach(props||value,function(subValue,key){if(props){key=subValue;subValue=value[key];}// Recursively populate clone (susceptible to call stack limits).
assignValue(result,key,baseClone(subValue,isDeep,isFull,customizer,key,value,stack));});return result;}/**
 * The base implementation of `_.create` without support for assigning
 * properties to the created object.
 *
 * @private
 * @param {Object} prototype The object to inherit from.
 * @returns {Object} Returns the new object.
 */function baseCreate(proto){return isObject(proto)?objectCreate(proto):{};}/**
 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @param {Function} symbolsFunc The function to get the symbols of `object`.
 * @returns {Array} Returns the array of property names and symbols.
 */function baseGetAllKeys(object,keysFunc,symbolsFunc){var result=keysFunc(object);return isArray(object)?result:arrayPush(result,symbolsFunc(object));}/**
 * The base implementation of `getTag`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */function baseGetTag(value){return objectToString.call(value);}/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */function baseIsNative(value){if(!isObject(value)||isMasked(value)){return false;}var pattern=isFunction(value)||isHostObject(value)?reIsNative:reIsHostCtor;return pattern.test(toSource(value));}/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */function baseIsTypedArray(value){return isObjectLike(value)&&isLength(value.length)&&!!typedArrayTags[objectToString.call(value)];}/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */function baseKeys(object){if(!isPrototype(object)){return nativeKeys(object);}var result=[];for(var key in Object(object)){if(hasOwnProperty.call(object,key)&&key!='constructor'){result.push(key);}}return result;}/**
 * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */function baseKeysIn(object){if(!isObject(object)){return nativeKeysIn(object);}var isProto=isPrototype(object),result=[];for(var key in object){if(!(key=='constructor'&&(isProto||!hasOwnProperty.call(object,key)))){result.push(key);}}return result;}/**
 * The base implementation of `_.merge` without support for multiple sources.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @param {number} srcIndex The index of `source`.
 * @param {Function} [customizer] The function to customize merged values.
 * @param {Object} [stack] Tracks traversed source values and their merged
 *  counterparts.
 */function baseMerge(object,source,srcIndex,customizer,stack){if(object===source){return;}if(!(isArray(source)||isTypedArray(source))){var props=baseKeysIn(source);}arrayEach(props||source,function(srcValue,key){if(props){key=srcValue;srcValue=source[key];}if(isObject(srcValue)){stack||(stack=new Stack());baseMergeDeep(object,source,key,srcIndex,baseMerge,customizer,stack);}else{var newValue=customizer?customizer(object[key],srcValue,key+'',object,source,stack):undefined;if(newValue===undefined){newValue=srcValue;}assignMergeValue(object,key,newValue);}});}/**
 * A specialized version of `baseMerge` for arrays and objects which performs
 * deep merges and tracks traversed objects enabling objects with circular
 * references to be merged.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @param {string} key The key of the value to merge.
 * @param {number} srcIndex The index of `source`.
 * @param {Function} mergeFunc The function to merge values.
 * @param {Function} [customizer] The function to customize assigned values.
 * @param {Object} [stack] Tracks traversed source values and their merged
 *  counterparts.
 */function baseMergeDeep(object,source,key,srcIndex,mergeFunc,customizer,stack){var objValue=object[key],srcValue=source[key],stacked=stack.get(srcValue);if(stacked){assignMergeValue(object,key,stacked);return;}var newValue=customizer?customizer(objValue,srcValue,key+'',object,source,stack):undefined;var isCommon=newValue===undefined;if(isCommon){newValue=srcValue;if(isArray(srcValue)||isTypedArray(srcValue)){if(isArray(objValue)){newValue=objValue;}else if(isArrayLikeObject(objValue)){newValue=copyArray(objValue);}else{isCommon=false;newValue=baseClone(srcValue,true);}}else if(isPlainObject(srcValue)||isArguments(srcValue)){if(isArguments(objValue)){newValue=toPlainObject(objValue);}else if(!isObject(objValue)||srcIndex&&isFunction(objValue)){isCommon=false;newValue=baseClone(srcValue,true);}else{newValue=objValue;}}else{isCommon=false;}}if(isCommon){// Recursively merge objects and arrays (susceptible to call stack limits).
stack.set(srcValue,newValue);mergeFunc(newValue,srcValue,srcIndex,customizer,stack);stack['delete'](srcValue);}assignMergeValue(object,key,newValue);}/**
 * The base implementation of `_.rest` which doesn't validate or coerce arguments.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @returns {Function} Returns the new function.
 */function baseRest(func,start){start=nativeMax(start===undefined?func.length-1:start,0);return function(){var args=arguments,index=-1,length=nativeMax(args.length-start,0),array=Array(length);while(++index<length){array[index]=args[start+index];}index=-1;var otherArgs=Array(start+1);while(++index<start){otherArgs[index]=args[index];}otherArgs[start]=array;return apply(func,this,otherArgs);};}/**
 * Creates a clone of  `buffer`.
 *
 * @private
 * @param {Buffer} buffer The buffer to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Buffer} Returns the cloned buffer.
 */function cloneBuffer(buffer,isDeep){if(isDeep){return buffer.slice();}var result=new buffer.constructor(buffer.length);buffer.copy(result);return result;}/**
 * Creates a clone of `arrayBuffer`.
 *
 * @private
 * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
 * @returns {ArrayBuffer} Returns the cloned array buffer.
 */function cloneArrayBuffer(arrayBuffer){var result=new arrayBuffer.constructor(arrayBuffer.byteLength);new Uint8Array(result).set(new Uint8Array(arrayBuffer));return result;}/**
 * Creates a clone of `dataView`.
 *
 * @private
 * @param {Object} dataView The data view to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned data view.
 */function cloneDataView(dataView,isDeep){var buffer=isDeep?cloneArrayBuffer(dataView.buffer):dataView.buffer;return new dataView.constructor(buffer,dataView.byteOffset,dataView.byteLength);}/**
 * Creates a clone of `map`.
 *
 * @private
 * @param {Object} map The map to clone.
 * @param {Function} cloneFunc The function to clone values.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned map.
 */function cloneMap(map,isDeep,cloneFunc){var array=isDeep?cloneFunc(mapToArray(map),true):mapToArray(map);return arrayReduce(array,addMapEntry,new map.constructor());}/**
 * Creates a clone of `regexp`.
 *
 * @private
 * @param {Object} regexp The regexp to clone.
 * @returns {Object} Returns the cloned regexp.
 */function cloneRegExp(regexp){var result=new regexp.constructor(regexp.source,reFlags.exec(regexp));result.lastIndex=regexp.lastIndex;return result;}/**
 * Creates a clone of `set`.
 *
 * @private
 * @param {Object} set The set to clone.
 * @param {Function} cloneFunc The function to clone values.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned set.
 */function cloneSet(set,isDeep,cloneFunc){var array=isDeep?cloneFunc(setToArray(set),true):setToArray(set);return arrayReduce(array,addSetEntry,new set.constructor());}/**
 * Creates a clone of the `symbol` object.
 *
 * @private
 * @param {Object} symbol The symbol object to clone.
 * @returns {Object} Returns the cloned symbol object.
 */function cloneSymbol(symbol){return symbolValueOf?Object(symbolValueOf.call(symbol)):{};}/**
 * Creates a clone of `typedArray`.
 *
 * @private
 * @param {Object} typedArray The typed array to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned typed array.
 */function cloneTypedArray(typedArray,isDeep){var buffer=isDeep?cloneArrayBuffer(typedArray.buffer):typedArray.buffer;return new typedArray.constructor(buffer,typedArray.byteOffset,typedArray.length);}/**
 * Copies the values of `source` to `array`.
 *
 * @private
 * @param {Array} source The array to copy values from.
 * @param {Array} [array=[]] The array to copy values to.
 * @returns {Array} Returns `array`.
 */function copyArray(source,array){var index=-1,length=source.length;array||(array=Array(length));while(++index<length){array[index]=source[index];}return array;}/**
 * Copies properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy properties from.
 * @param {Array} props The property identifiers to copy.
 * @param {Object} [object={}] The object to copy properties to.
 * @param {Function} [customizer] The function to customize copied values.
 * @returns {Object} Returns `object`.
 */function copyObject(source,props,object,customizer){object||(object={});var index=-1,length=props.length;while(++index<length){var key=props[index];var newValue=customizer?customizer(object[key],source[key],key,object,source):undefined;assignValue(object,key,newValue===undefined?source[key]:newValue);}return object;}/**
 * Copies own symbol properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy symbols from.
 * @param {Object} [object={}] The object to copy symbols to.
 * @returns {Object} Returns `object`.
 */function copySymbols(source,object){return copyObject(source,getSymbols(source),object);}/**
 * Creates a function like `_.assign`.
 *
 * @private
 * @param {Function} assigner The function to assign values.
 * @returns {Function} Returns the new assigner function.
 */function createAssigner(assigner){return baseRest(function(object,sources){var index=-1,length=sources.length,customizer=length>1?sources[length-1]:undefined,guard=length>2?sources[2]:undefined;customizer=assigner.length>3&&typeof customizer=='function'?(length--,customizer):undefined;if(guard&&isIterateeCall(sources[0],sources[1],guard)){customizer=length<3?undefined:customizer;length=1;}object=Object(object);while(++index<length){var source=sources[index];if(source){assigner(object,source,index,customizer);}}return object;});}/**
 * Creates an array of own enumerable property names and symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */function getAllKeys(object){return baseGetAllKeys(object,keys,getSymbols);}/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */function getMapData(map,key){var data=map.__data__;return isKeyable(key)?data[typeof key=='string'?'string':'hash']:data.map;}/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */function getNative(object,key){var value=getValue(object,key);return baseIsNative(value)?value:undefined;}/**
 * Creates an array of the own enumerable symbol properties of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */var getSymbols=nativeGetSymbols?overArg(nativeGetSymbols,Object):stubArray;/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */var getTag=baseGetTag;// Fallback for data views, maps, sets, and weak maps in IE 11,
// for data views in Edge < 14, and promises in Node.js.
if(DataView&&getTag(new DataView(new ArrayBuffer(1)))!=dataViewTag||Map&&getTag(new Map())!=mapTag||Promise&&getTag(Promise.resolve())!=promiseTag||Set&&getTag(new Set())!=setTag||WeakMap&&getTag(new WeakMap())!=weakMapTag){getTag=function getTag(value){var result=objectToString.call(value),Ctor=result==objectTag?value.constructor:undefined,ctorString=Ctor?toSource(Ctor):undefined;if(ctorString){switch(ctorString){case dataViewCtorString:return dataViewTag;case mapCtorString:return mapTag;case promiseCtorString:return promiseTag;case setCtorString:return setTag;case weakMapCtorString:return weakMapTag;}}return result;};}/**
 * Initializes an array clone.
 *
 * @private
 * @param {Array} array The array to clone.
 * @returns {Array} Returns the initialized clone.
 */function initCloneArray(array){var length=array.length,result=array.constructor(length);// Add properties assigned by `RegExp#exec`.
if(length&&typeof array[0]=='string'&&hasOwnProperty.call(array,'index')){result.index=array.index;result.input=array.input;}return result;}/**
 * Initializes an object clone.
 *
 * @private
 * @param {Object} object The object to clone.
 * @returns {Object} Returns the initialized clone.
 */function initCloneObject(object){return typeof object.constructor=='function'&&!isPrototype(object)?baseCreate(getPrototype(object)):{};}/**
 * Initializes an object clone based on its `toStringTag`.
 *
 * **Note:** This function only supports cloning values with tags of
 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
 *
 * @private
 * @param {Object} object The object to clone.
 * @param {string} tag The `toStringTag` of the object to clone.
 * @param {Function} cloneFunc The function to clone values.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the initialized clone.
 */function initCloneByTag(object,tag,cloneFunc,isDeep){var Ctor=object.constructor;switch(tag){case arrayBufferTag:return cloneArrayBuffer(object);case boolTag:case dateTag:return new Ctor(+object);case dataViewTag:return cloneDataView(object,isDeep);case float32Tag:case float64Tag:case int8Tag:case int16Tag:case int32Tag:case uint8Tag:case uint8ClampedTag:case uint16Tag:case uint32Tag:return cloneTypedArray(object,isDeep);case mapTag:return cloneMap(object,isDeep,cloneFunc);case numberTag:case stringTag:return new Ctor(object);case regexpTag:return cloneRegExp(object);case setTag:return cloneSet(object,isDeep,cloneFunc);case symbolTag:return cloneSymbol(object);}}/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */function isIndex(value,length){length=length==null?MAX_SAFE_INTEGER:length;return!!length&&(typeof value=='number'||reIsUint.test(value))&&value>-1&&value%1==0&&value<length;}/**
 * Checks if the given arguments are from an iteratee call.
 *
 * @private
 * @param {*} value The potential iteratee value argument.
 * @param {*} index The potential iteratee index or key argument.
 * @param {*} object The potential iteratee object argument.
 * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
 *  else `false`.
 */function isIterateeCall(value,index,object){if(!isObject(object)){return false;}var type=typeof index==="undefined"?"undefined":_typeof4(index);if(type=='number'?isArrayLike(object)&&isIndex(index,object.length):type=='string'&&index in object){return eq(object[index],value);}return false;}/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */function isKeyable(value){var type=typeof value==="undefined"?"undefined":_typeof4(value);return type=='string'||type=='number'||type=='symbol'||type=='boolean'?value!=='__proto__':value===null;}/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */function isMasked(func){return!!maskSrcKey&&maskSrcKey in func;}/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */function isPrototype(value){var Ctor=value&&value.constructor,proto=typeof Ctor=='function'&&Ctor.prototype||objectProto;return value===proto;}/**
 * This function is like
 * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * except that it includes inherited enumerable properties.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */function nativeKeysIn(object){var result=[];if(object!=null){for(var key in Object(object)){result.push(key);}}return result;}/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to process.
 * @returns {string} Returns the source code.
 */function toSource(func){if(func!=null){try{return funcToString.call(func);}catch(e){}try{return func+'';}catch(e){}}return'';}/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */function eq(value,other){return value===other||value!==value&&other!==other;}/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */function isArguments(value){// Safari 8.1 makes `arguments.callee` enumerable in strict mode.
return isArrayLikeObject(value)&&hasOwnProperty.call(value,'callee')&&(!propertyIsEnumerable.call(value,'callee')||objectToString.call(value)==argsTag);}/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */var isArray=Array.isArray;/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */function isArrayLike(value){return value!=null&&isLength(value.length)&&!isFunction(value);}/**
 * This method is like `_.isArrayLike` except that it also checks if `value`
 * is an object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array-like object,
 *  else `false`.
 * @example
 *
 * _.isArrayLikeObject([1, 2, 3]);
 * // => true
 *
 * _.isArrayLikeObject(document.body.children);
 * // => true
 *
 * _.isArrayLikeObject('abc');
 * // => false
 *
 * _.isArrayLikeObject(_.noop);
 * // => false
 */function isArrayLikeObject(value){return isObjectLike(value)&&isArrayLike(value);}/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */var isBuffer=nativeIsBuffer||stubFalse;/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */function isFunction(value){// The use of `Object#toString` avoids issues with the `typeof` operator
// in Safari 8-9 which returns 'object' for typed array and other constructors.
var tag=isObject(value)?objectToString.call(value):'';return tag==funcTag||tag==genTag;}/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */function isLength(value){return typeof value=='number'&&value>-1&&value%1==0&&value<=MAX_SAFE_INTEGER;}/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */function isObject(value){var type=typeof value==="undefined"?"undefined":_typeof4(value);return!!value&&(type=='object'||type=='function');}/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */function isObjectLike(value){return!!value&&(typeof value==="undefined"?"undefined":_typeof4(value))=='object';}/**
 * Checks if `value` is a plain object, that is, an object created by the
 * `Object` constructor or one with a `[[Prototype]]` of `null`.
 *
 * @static
 * @memberOf _
 * @since 0.8.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * _.isPlainObject(new Foo);
 * // => false
 *
 * _.isPlainObject([1, 2, 3]);
 * // => false
 *
 * _.isPlainObject({ 'x': 0, 'y': 0 });
 * // => true
 *
 * _.isPlainObject(Object.create(null));
 * // => true
 */function isPlainObject(value){if(!isObjectLike(value)||objectToString.call(value)!=objectTag||isHostObject(value)){return false;}var proto=getPrototype(value);if(proto===null){return true;}var Ctor=hasOwnProperty.call(proto,'constructor')&&proto.constructor;return typeof Ctor=='function'&&Ctor instanceof Ctor&&funcToString.call(Ctor)==objectCtorString;}/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */var isTypedArray=nodeIsTypedArray?baseUnary(nodeIsTypedArray):baseIsTypedArray;/**
 * Converts `value` to a plain object flattening inherited enumerable string
 * keyed properties of `value` to own properties of the plain object.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {Object} Returns the converted plain object.
 * @example
 *
 * function Foo() {
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.assign({ 'a': 1 }, new Foo);
 * // => { 'a': 1, 'b': 2 }
 *
 * _.assign({ 'a': 1 }, _.toPlainObject(new Foo));
 * // => { 'a': 1, 'b': 2, 'c': 3 }
 */function toPlainObject(value){return copyObject(value,keysIn(value));}/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */function keys(object){return isArrayLike(object)?arrayLikeKeys(object):baseKeys(object);}/**
 * Creates an array of the own and inherited enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keysIn(new Foo);
 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
 */function keysIn(object){return isArrayLike(object)?arrayLikeKeys(object,true):baseKeysIn(object);}/**
 * This method is like `_.assign` except that it recursively merges own and
 * inherited enumerable string keyed properties of source objects into the
 * destination object. Source properties that resolve to `undefined` are
 * skipped if a destination value exists. Array and plain object properties
 * are merged recursively. Other objects and value types are overridden by
 * assignment. Source objects are applied from left to right. Subsequent
 * sources overwrite property assignments of previous sources.
 *
 * **Note:** This method mutates `object`.
 *
 * @static
 * @memberOf _
 * @since 0.5.0
 * @category Object
 * @param {Object} object The destination object.
 * @param {...Object} [sources] The source objects.
 * @returns {Object} Returns `object`.
 * @example
 *
 * var object = {
 *   'a': [{ 'b': 2 }, { 'd': 4 }]
 * };
 *
 * var other = {
 *   'a': [{ 'c': 3 }, { 'e': 5 }]
 * };
 *
 * _.merge(object, other);
 * // => { 'a': [{ 'b': 2, 'c': 3 }, { 'd': 4, 'e': 5 }] }
 */var merge=createAssigner(function(object,source,srcIndex){baseMerge(object,source,srcIndex);});/**
 * This method returns a new empty array.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {Array} Returns the new empty array.
 * @example
 *
 * var arrays = _.times(2, _.stubArray);
 *
 * console.log(arrays);
 * // => [[], []]
 *
 * console.log(arrays[0] === arrays[1]);
 * // => false
 */function stubArray(){return[];}/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */function stubFalse(){return false;}module.exports=merge;}).call(this,typeof global!=="undefined"?global:typeof self!=="undefined"?self:typeof window!=="undefined"?window:{});},{}],346:[function(require,module,exports){module.exports={"default":require("core-js/library/fn/array/from"),__esModule:true};},{"core-js/library/fn/array/from":255}],347:[function(require,module,exports){module.exports={"default":require("core-js/library/fn/object/assign"),__esModule:true};},{"core-js/library/fn/object/assign":256}],348:[function(require,module,exports){module.exports={"default":require("core-js/library/fn/object/create"),__esModule:true};},{"core-js/library/fn/object/create":257}],349:[function(require,module,exports){module.exports={"default":require("core-js/library/fn/object/define-property"),__esModule:true};},{"core-js/library/fn/object/define-property":258}],350:[function(require,module,exports){module.exports={"default":require("core-js/library/fn/object/get-prototype-of"),__esModule:true};},{"core-js/library/fn/object/get-prototype-of":259}],351:[function(require,module,exports){module.exports={"default":require("core-js/library/fn/object/keys"),__esModule:true};},{"core-js/library/fn/object/keys":260}],352:[function(require,module,exports){module.exports={"default":require("core-js/library/fn/object/set-prototype-of"),__esModule:true};},{"core-js/library/fn/object/set-prototype-of":261}],353:[function(require,module,exports){module.exports={"default":require("core-js/library/fn/symbol"),__esModule:true};},{"core-js/library/fn/symbol":262}],354:[function(require,module,exports){module.exports={"default":require("core-js/library/fn/symbol/iterator"),__esModule:true};},{"core-js/library/fn/symbol/iterator":263}],355:[function(require,module,exports){"use strict";exports.__esModule=true;exports.default=function(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}};},{}],356:[function(require,module,exports){"use strict";exports.__esModule=true;var _defineProperty=require("../core-js/object/define-property");var _defineProperty2=_interopRequireDefault(_defineProperty);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}exports.default=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;(0,_defineProperty2.default)(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();},{"../core-js/object/define-property":349}],357:[function(require,module,exports){"use strict";exports.__esModule=true;var _assign=require("../core-js/object/assign");var _assign2=_interopRequireDefault(_assign);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}exports.default=_assign2.default||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};},{"../core-js/object/assign":347}],358:[function(require,module,exports){"use strict";exports.__esModule=true;var _setPrototypeOf=require("../core-js/object/set-prototype-of");var _setPrototypeOf2=_interopRequireDefault(_setPrototypeOf);var _create=require("../core-js/object/create");var _create2=_interopRequireDefault(_create);var _typeof2=require("../helpers/typeof");var _typeof3=_interopRequireDefault(_typeof2);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}exports.default=function(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+(typeof superClass==="undefined"?"undefined":(0,_typeof3.default)(superClass)));}subClass.prototype=(0,_create2.default)(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)_setPrototypeOf2.default?(0,_setPrototypeOf2.default)(subClass,superClass):subClass.__proto__=superClass;};},{"../core-js/object/create":348,"../core-js/object/set-prototype-of":352,"../helpers/typeof":363}],359:[function(require,module,exports){"use strict";exports.__esModule=true;exports.default=function(obj,keys){var target={};for(var i in obj){if(keys.indexOf(i)>=0)continue;if(!Object.prototype.hasOwnProperty.call(obj,i))continue;target[i]=obj[i];}return target;};},{}],360:[function(require,module,exports){"use strict";exports.__esModule=true;var _typeof2=require("../helpers/typeof");var _typeof3=_interopRequireDefault(_typeof2);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}exports.default=function(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&((typeof call==="undefined"?"undefined":(0,_typeof3.default)(call))==="object"||typeof call==="function")?call:self;};},{"../helpers/typeof":363}],361:[function(require,module,exports){"use strict";exports.__esModule=true;var _from=require("../core-js/array/from");var _from2=_interopRequireDefault(_from);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}exports.default=function(arr){return Array.isArray(arr)?arr:(0,_from2.default)(arr);};},{"../core-js/array/from":346}],362:[function(require,module,exports){"use strict";exports.__esModule=true;var _from=require("../core-js/array/from");var _from2=_interopRequireDefault(_from);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}exports.default=function(arr){if(Array.isArray(arr)){for(var i=0,arr2=Array(arr.length);i<arr.length;i++){arr2[i]=arr[i];}return arr2;}else{return(0,_from2.default)(arr);}};},{"../core-js/array/from":346}],363:[function(require,module,exports){"use strict";exports.__esModule=true;var _iterator=require("../core-js/symbol/iterator");var _iterator2=_interopRequireDefault(_iterator);var _symbol=require("../core-js/symbol");var _symbol2=_interopRequireDefault(_symbol);var _typeof=typeof _symbol2.default==="function"&&_typeof4(_iterator2.default)==="symbol"?function(obj){return typeof obj==="undefined"?"undefined":_typeof4(obj);}:function(obj){return obj&&typeof _symbol2.default==="function"&&obj.constructor===_symbol2.default&&obj!==_symbol2.default.prototype?"symbol":typeof obj==="undefined"?"undefined":_typeof4(obj);};function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}exports.default=typeof _symbol2.default==="function"&&_typeof(_iterator2.default)==="symbol"?function(obj){return typeof obj==="undefined"?"undefined":_typeof(obj);}:function(obj){return obj&&typeof _symbol2.default==="function"&&obj.constructor===_symbol2.default&&obj!==_symbol2.default.prototype?"symbol":typeof obj==="undefined"?"undefined":_typeof(obj);};},{"../core-js/symbol":353,"../core-js/symbol/iterator":354}]},{},[1]);

//# sourceMappingURL=bundle-compiled.js.map