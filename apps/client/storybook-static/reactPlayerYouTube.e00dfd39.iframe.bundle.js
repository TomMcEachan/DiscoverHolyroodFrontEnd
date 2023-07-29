"use strict";(self.webpackChunk_discoverholyrood_web_app=self.webpackChunk_discoverholyrood_web_app||[]).push([[439],{"./node_modules/react-player/lazy/players/YouTube.js":(__unused_webpack_module,exports,__webpack_require__)=>{var console=__webpack_require__("./node_modules/console-browserify/index.js");function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function _typeof(obj){return typeof obj}:function _typeof(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _react=function _interopRequireWildcard(obj){if(obj&&obj.__esModule)return obj;if(null===obj||"object"!==_typeof(obj)&&"function"!=typeof obj)return{default:obj};var cache=_getRequireWildcardCache();if(cache&&cache.has(obj))return cache.get(obj);var newObj={},hasPropertyDescriptor=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var key in obj)if(Object.prototype.hasOwnProperty.call(obj,key)){var desc=hasPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):null;desc&&(desc.get||desc.set)?Object.defineProperty(newObj,key,desc):newObj[key]=obj[key]}newObj.default=obj,cache&&cache.set(obj,newObj);return newObj}(__webpack_require__("./node_modules/react/index.js")),_utils=__webpack_require__("./node_modules/react-player/lazy/utils.js"),_patterns=__webpack_require__("./node_modules/react-player/lazy/patterns.js");function _getRequireWildcardCache(){if("function"!=typeof WeakMap)return null;var cache=new WeakMap;return _getRequireWildcardCache=function _getRequireWildcardCache(){return cache},cache}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(arr)))return;var _arr=[],_n=!0,_d=!1,_e=void 0;try{for(var _s,_i=arr[Symbol.iterator]();!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}function _setPrototypeOf(o,p){return _setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(o,p){return o.__proto__=p,o},_setPrototypeOf(o,p)}function _createSuper(Derived){var hasNativeReflectConstruct=function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function _createSuperInternal(){var result,Super=_getPrototypeOf(Derived);if(hasNativeReflectConstruct){var NewTarget=_getPrototypeOf(this).constructor;result=Reflect.construct(Super,arguments,NewTarget)}else result=Super.apply(this,arguments);return function _possibleConstructorReturn(self,call){if(call&&("object"===_typeof(call)||"function"==typeof call))return call;return _assertThisInitialized(self)}(this,result)}}function _assertThisInitialized(self){if(void 0===self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return self}function _getPrototypeOf(o){return _getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o)},_getPrototypeOf(o)}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}var MATCH_PLAYLIST=/[?&](?:list|channel)=([a-zA-Z0-9_-]+)/,MATCH_USER_UPLOADS=/user\/([a-zA-Z0-9_-]+)\/?/,MATCH_NOCOOKIE=/youtube-nocookie\.com/,YouTube=function(_Component){!function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function");subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:!0,configurable:!0}}),superClass&&_setPrototypeOf(subClass,superClass)}(YouTube,_Component);var _super=_createSuper(YouTube);function YouTube(){var _this;!function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,YouTube);for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++)args[_key]=arguments[_key];return _defineProperty(_assertThisInitialized(_this=_super.call.apply(_super,[this].concat(args))),"callPlayer",_utils.callPlayer),_defineProperty(_assertThisInitialized(_this),"parsePlaylist",(function(url){return url instanceof Array?{listType:"playlist",playlist:url.map(_this.getID).join(",")}:MATCH_PLAYLIST.test(url)?{listType:"playlist",list:_slicedToArray(url.match(MATCH_PLAYLIST),2)[1].replace(/^UC/,"UU")}:MATCH_USER_UPLOADS.test(url)?{listType:"user_uploads",list:_slicedToArray(url.match(MATCH_USER_UPLOADS),2)[1]}:{}})),_defineProperty(_assertThisInitialized(_this),"onStateChange",(function(event){var data=event.data,_this$props=_this.props,onPlay=_this$props.onPlay,onPause=_this$props.onPause,onBuffer=_this$props.onBuffer,onBufferEnd=_this$props.onBufferEnd,onEnded=_this$props.onEnded,onReady=_this$props.onReady,loop=_this$props.loop,_this$props$config=_this$props.config,playerVars=_this$props$config.playerVars,onUnstarted=_this$props$config.onUnstarted,_window$SDK_GLOBAL$Pl=window.YT.PlayerState,UNSTARTED=_window$SDK_GLOBAL$Pl.UNSTARTED,PLAYING=_window$SDK_GLOBAL$Pl.PLAYING,PAUSED=_window$SDK_GLOBAL$Pl.PAUSED,BUFFERING=_window$SDK_GLOBAL$Pl.BUFFERING,ENDED=_window$SDK_GLOBAL$Pl.ENDED,CUED=_window$SDK_GLOBAL$Pl.CUED;if(data===UNSTARTED&&onUnstarted(),data===PLAYING&&(onPlay(),onBufferEnd()),data===PAUSED&&onPause(),data===BUFFERING&&onBuffer(),data===ENDED){var isPlaylist=!!_this.callPlayer("getPlaylist");loop&&!isPlaylist&&(playerVars.start?_this.seekTo(playerVars.start):_this.play()),onEnded()}data===CUED&&onReady()})),_defineProperty(_assertThisInitialized(_this),"mute",(function(){_this.callPlayer("mute")})),_defineProperty(_assertThisInitialized(_this),"unmute",(function(){_this.callPlayer("unMute")})),_defineProperty(_assertThisInitialized(_this),"ref",(function(container){_this.container=container})),_this}return function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Constructor}(YouTube,[{key:"componentDidMount",value:function componentDidMount(){this.props.onMount&&this.props.onMount(this)}},{key:"getID",value:function getID(url){return!url||url instanceof Array||MATCH_PLAYLIST.test(url)?null:url.match(_patterns.MATCH_URL_YOUTUBE)[1]}},{key:"load",value:function load(url,isReady){var _this2=this,_this$props2=this.props,playing=_this$props2.playing,muted=_this$props2.muted,playsinline=_this$props2.playsinline,controls=_this$props2.controls,loop=_this$props2.loop,config=_this$props2.config,_onError=_this$props2.onError,playerVars=config.playerVars,embedOptions=config.embedOptions,id=this.getID(url);if(isReady)return MATCH_PLAYLIST.test(url)||MATCH_USER_UPLOADS.test(url)||url instanceof Array?void this.player.loadPlaylist(this.parsePlaylist(url)):void this.player.cueVideoById({videoId:id,startSeconds:(0,_utils.parseStartTime)(url)||playerVars.start,endSeconds:(0,_utils.parseEndTime)(url)||playerVars.end});(0,_utils.getSDK)("https://www.youtube.com/iframe_api","YT","onYouTubeIframeAPIReady",(function(YT){return YT.loaded})).then((function(YT){_this2.container&&(_this2.player=new YT.Player(_this2.container,_objectSpread({width:"100%",height:"100%",videoId:id,playerVars:_objectSpread(_objectSpread({autoplay:playing?1:0,mute:muted?1:0,controls:controls?1:0,start:(0,_utils.parseStartTime)(url),end:(0,_utils.parseEndTime)(url),origin:window.location.origin,playsinline:playsinline?1:0},_this2.parsePlaylist(url)),playerVars),events:{onReady:function onReady(){loop&&_this2.player.setLoop(!0),_this2.props.onReady()},onPlaybackRateChange:function onPlaybackRateChange(event){return _this2.props.onPlaybackRateChange(event.data)},onStateChange:_this2.onStateChange,onError:function onError(event){return _onError(event.data)}},host:MATCH_NOCOOKIE.test(url)?"https://www.youtube-nocookie.com":void 0},embedOptions)))}),_onError),embedOptions.events&&console.warn("Using `embedOptions.events` will likely break things. Use ReactPlayer’s callback props instead, eg onReady, onPlay, onPause")}},{key:"play",value:function play(){this.callPlayer("playVideo")}},{key:"pause",value:function pause(){this.callPlayer("pauseVideo")}},{key:"stop",value:function stop(){document.body.contains(this.callPlayer("getIframe"))&&this.callPlayer("stopVideo")}},{key:"seekTo",value:function seekTo(amount){this.callPlayer("seekTo",amount),this.props.playing||this.pause()}},{key:"setVolume",value:function setVolume(fraction){this.callPlayer("setVolume",100*fraction)}},{key:"setPlaybackRate",value:function setPlaybackRate(rate){this.callPlayer("setPlaybackRate",rate)}},{key:"setLoop",value:function setLoop(loop){this.callPlayer("setLoop",loop)}},{key:"getDuration",value:function getDuration(){return this.callPlayer("getDuration")}},{key:"getCurrentTime",value:function getCurrentTime(){return this.callPlayer("getCurrentTime")}},{key:"getSecondsLoaded",value:function getSecondsLoaded(){return this.callPlayer("getVideoLoadedFraction")*this.getDuration()}},{key:"render",value:function render(){var style={width:"100%",height:"100%",display:this.props.display};return _react.default.createElement("div",{style},_react.default.createElement("div",{ref:this.ref}))}}]),YouTube}(_react.Component);exports.default=YouTube,_defineProperty(YouTube,"displayName","YouTube"),_defineProperty(YouTube,"canPlay",_patterns.canPlay.youtube)}}]);