"use strict";(self.webpackChunk_discoverholyrood_web_app=self.webpackChunk_discoverholyrood_web_app||[]).push([[121],{"./node_modules/react-player/lazy/players/Facebook.js":(__unused_webpack_module,exports,__webpack_require__)=>{function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function _typeof(obj){return typeof obj}:function _typeof(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _react=function _interopRequireWildcard(obj){if(obj&&obj.__esModule)return obj;if(null===obj||"object"!==_typeof(obj)&&"function"!=typeof obj)return{default:obj};var cache=_getRequireWildcardCache();if(cache&&cache.has(obj))return cache.get(obj);var newObj={},hasPropertyDescriptor=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var key in obj)if(Object.prototype.hasOwnProperty.call(obj,key)){var desc=hasPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):null;desc&&(desc.get||desc.set)?Object.defineProperty(newObj,key,desc):newObj[key]=obj[key]}newObj.default=obj,cache&&cache.set(obj,newObj);return newObj}(__webpack_require__("./node_modules/react/index.js")),_utils=__webpack_require__("./node_modules/react-player/lazy/utils.js"),_patterns=__webpack_require__("./node_modules/react-player/lazy/patterns.js");function _getRequireWildcardCache(){if("function"!=typeof WeakMap)return null;var cache=new WeakMap;return _getRequireWildcardCache=function _getRequireWildcardCache(){return cache},cache}function _extends(){return _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}function _setPrototypeOf(o,p){return _setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(o,p){return o.__proto__=p,o},_setPrototypeOf(o,p)}function _createSuper(Derived){var hasNativeReflectConstruct=function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function _createSuperInternal(){var result,Super=_getPrototypeOf(Derived);if(hasNativeReflectConstruct){var NewTarget=_getPrototypeOf(this).constructor;result=Reflect.construct(Super,arguments,NewTarget)}else result=Super.apply(this,arguments);return function _possibleConstructorReturn(self,call){if(call&&("object"===_typeof(call)||"function"==typeof call))return call;return _assertThisInitialized(self)}(this,result)}}function _assertThisInitialized(self){if(void 0===self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return self}function _getPrototypeOf(o){return _getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o)},_getPrototypeOf(o)}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}var SDK_URL="https://connect.facebook.net/en_US/sdk.js",Facebook=function(_Component){!function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function");subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:!0,configurable:!0}}),superClass&&_setPrototypeOf(subClass,superClass)}(Facebook,_Component);var _super=_createSuper(Facebook);function Facebook(){var _this;!function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,Facebook);for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++)args[_key]=arguments[_key];return _defineProperty(_assertThisInitialized(_this=_super.call.apply(_super,[this].concat(args))),"callPlayer",_utils.callPlayer),_defineProperty(_assertThisInitialized(_this),"playerID",_this.props.config.playerId||"".concat("facebook-player-").concat((0,_utils.randomString)())),_defineProperty(_assertThisInitialized(_this),"mute",(function(){_this.callPlayer("mute")})),_defineProperty(_assertThisInitialized(_this),"unmute",(function(){_this.callPlayer("unmute")})),_this}return function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Constructor}(Facebook,[{key:"componentDidMount",value:function componentDidMount(){this.props.onMount&&this.props.onMount(this)}},{key:"load",value:function load(url,isReady){var _this2=this;isReady?(0,_utils.getSDK)(SDK_URL,"FB","fbAsyncInit").then((function(FB){return FB.XFBML.parse()})):(0,_utils.getSDK)(SDK_URL,"FB","fbAsyncInit").then((function(FB){FB.init({appId:_this2.props.config.appId,xfbml:!0,version:_this2.props.config.version}),FB.Event.subscribe("xfbml.render",(function(msg){_this2.props.onLoaded()})),FB.Event.subscribe("xfbml.ready",(function(msg){"video"===msg.type&&msg.id===_this2.playerID&&(_this2.player=msg.instance,_this2.player.subscribe("startedPlaying",_this2.props.onPlay),_this2.player.subscribe("paused",_this2.props.onPause),_this2.player.subscribe("finishedPlaying",_this2.props.onEnded),_this2.player.subscribe("startedBuffering",_this2.props.onBuffer),_this2.player.subscribe("finishedBuffering",_this2.props.onBufferEnd),_this2.player.subscribe("error",_this2.props.onError),_this2.props.muted?_this2.callPlayer("mute"):_this2.callPlayer("unmute"),_this2.props.onReady(),document.getElementById(_this2.playerID).querySelector("iframe").style.visibility="visible")}))}))}},{key:"play",value:function play(){this.callPlayer("play")}},{key:"pause",value:function pause(){this.callPlayer("pause")}},{key:"stop",value:function stop(){}},{key:"seekTo",value:function seekTo(seconds){this.callPlayer("seek",seconds)}},{key:"setVolume",value:function setVolume(fraction){this.callPlayer("setVolume",fraction)}},{key:"getDuration",value:function getDuration(){return this.callPlayer("getDuration")}},{key:"getCurrentTime",value:function getCurrentTime(){return this.callPlayer("getCurrentPosition")}},{key:"getSecondsLoaded",value:function getSecondsLoaded(){return null}},{key:"render",value:function render(){var attributes=this.props.config.attributes;return _react.default.createElement("div",_extends({style:{width:"100%",height:"100%"},id:this.playerID,className:"fb-video","data-href":this.props.url,"data-autoplay":this.props.playing?"true":"false","data-allowfullscreen":"true","data-controls":this.props.controls?"true":"false"},attributes))}}]),Facebook}(_react.Component);exports.default=Facebook,_defineProperty(Facebook,"displayName","Facebook"),_defineProperty(Facebook,"canPlay",_patterns.canPlay.facebook),_defineProperty(Facebook,"loopOnEnded",!0)}}]);