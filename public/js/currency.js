/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/highcharts/highcharts.js":
/*!***********************************************!*\
  !*** ./node_modules/highcharts/highcharts.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/*
 Highcharts JS v8.0.4 (2020-03-10)

 (c) 2009-2018 Torstein Honsi

 License: www.highcharts.com/license
*/
(function(aa,S){ true&&module.exports?(S["default"]=S,module.exports=aa.document?S(aa):S): true?!(__WEBPACK_AMD_DEFINE_RESULT__ = (function(){return S(aa)}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):(undefined)})("undefined"!==typeof window?window:this,function(aa){function S(d,g,W,u){d.hasOwnProperty(g)||(d[g]=u.apply(null,W))}var r={};S(r,"parts/Globals.js",[],function(){var d="undefined"!==typeof aa?aa:"undefined"!==typeof window?window:
{},g=d.document,W=d.navigator&&d.navigator.userAgent||"",u=g&&g.createElementNS&&!!g.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect,r=/(edge|msie|trident)/i.test(W)&&!d.opera,M=-1!==W.indexOf("Firefox"),E=-1!==W.indexOf("Chrome"),A=M&&4>parseInt(W.split("Firefox/")[1],10);return{product:"Highcharts",version:"8.0.4",deg2rad:2*Math.PI/360,doc:g,hasBidiBug:A,hasTouch:!!d.TouchEvent,isMS:r,isWebKit:-1!==W.indexOf("AppleWebKit"),isFirefox:M,isChrome:E,isSafari:!E&&-1!==W.indexOf("Safari"),
isTouchDevice:/(Mobile|Android|Windows Phone)/.test(W),SVG_NS:"http://www.w3.org/2000/svg",chartCount:0,seriesTypes:{},symbolSizes:{},svg:u,win:d,marginNames:["plotTop","marginRight","marginBottom","plotLeft"],noop:function(){},charts:[],dateFormats:{}}});S(r,"parts/Utilities.js",[r["parts/Globals.js"]],function(d){function g(){var b,a=arguments,m={},f=function(b,a){"object"!==typeof b&&(b={});Y(a,function(m,c){!h(m,!0)||q(m)||N(m)?b[c]=a[c]:b[c]=f(b[c]||{},m)});return b};!0===a[0]&&(m=a[1],a=Array.prototype.slice.call(a,
2));var c=a.length;for(b=0;b<c;b++)m=f(m,a[b]);return m}function W(b,a,m){var f;t(a)?c(m)?b.setAttribute(a,m):b&&b.getAttribute&&((f=b.getAttribute(a))||"class"!==a||(f=b.getAttribute(a+"Name"))):Y(a,function(a,m){b.setAttribute(m,a)});return f}function u(){for(var b=arguments,a=b.length,m=0;m<a;m++){var f=b[m];if("undefined"!==typeof f&&null!==f)return f}}function r(b,a){if(!b)return a;var m=b.split(".").reverse();if(1===m.length)return a[b];for(b=m.pop();"undefined"!==typeof b&&"undefined"!==typeof a&&
null!==a;)a=a[b],b=m.pop();return a}d.timers=[];var M=d.charts,E=d.doc,A=d.win,G=d.error=function(b,a,m,f){var c=P(b),p=c?"Highcharts error #"+b+": www.highcharts.com/errors/"+b+"/":b.toString(),e=function(){if(a)throw Error(p);A.console&&console.log(p)};if("undefined"!==typeof f){var x="";c&&(p+="?");d.objectEach(f,function(b,a){x+="\n"+a+": "+b;c&&(p+=encodeURI(a)+"="+encodeURI(b))});p+=x}m?d.fireEvent(m,"displayError",{code:b,message:p,params:f},e):e()},J=function(){function b(b,a,m){this.options=
a;this.elem=b;this.prop=m}b.prototype.dSetter=function(){var b=this.paths[0],a=this.paths[1],m=[],f=this.now,c=b.length;if(1===f)m=this.toD;else if(c===a.length&&1>f)for(;c--;){var p=parseFloat(b[c]);m[c]=isNaN(p)||"A"===a[c-4]||"A"===a[c-5]?a[c]:f*parseFloat(""+(a[c]-p))+p}else m=a;this.elem.attr("d",m,null,!0)};b.prototype.update=function(){var b=this.elem,a=this.prop,m=this.now,f=this.options.step;if(this[a+"Setter"])this[a+"Setter"]();else b.attr?b.element&&b.attr(a,m,null,!0):b.style[a]=m+this.unit;
f&&f.call(b,m,this)};b.prototype.run=function(b,a,m){var f=this,c=f.options,p=function(b){return p.stopped?!1:f.step(b)},e=A.requestAnimationFrame||function(b){setTimeout(b,13)},x=function(){for(var b=0;b<d.timers.length;b++)d.timers[b]()||d.timers.splice(b--,1);d.timers.length&&e(x)};b!==a||this.elem["forceAnimate:"+this.prop]?(this.startTime=+new Date,this.start=b,this.end=a,this.unit=m,this.now=this.start,this.pos=0,p.elem=this.elem,p.prop=this.prop,p()&&1===d.timers.push(p)&&e(x)):(delete c.curAnim[this.prop],
c.complete&&0===Object.keys(c.curAnim).length&&c.complete.call(this.elem))};b.prototype.step=function(b){var a=+new Date,m=this.options,f=this.elem,c=m.complete,p=m.duration,e=m.curAnim;if(f.attr&&!f.element)b=!1;else if(b||a>=p+this.startTime){this.now=this.end;this.pos=1;this.update();var x=e[this.prop]=!0;Y(e,function(b){!0!==b&&(x=!1)});x&&c&&c.call(f);b=!1}else this.pos=m.easing((a-this.startTime)/p),this.now=this.start+(this.end-this.start)*this.pos,this.update(),b=!0;return b};b.prototype.initPath=
function(b,a,m){function f(b){for(C=b.length;C--;){var a="M"===b[C]||"L"===b[C];var m=/[a-zA-Z]/.test(b[C+3]);a&&m&&b.splice(C+1,0,b[C+1],b[C+2],b[C+1],b[C+2])}}function c(b,a){for(;b.length<v;){b[0]=a[v-b.length];var m=b.slice(0,T);[].splice.apply(b,[0,0].concat(m));k&&(m=b.slice(b.length-T),[].splice.apply(b,[b.length,0].concat(m)),C--)}b[0]="M"}function p(b,a){for(var m=(v-b.length)/T;0<m&&m--;)l=b.slice().splice(b.length/n-T,T*n),l[0]=a[v-T-m*T],F&&(l[T-6]=l[T-2],l[T-5]=l[T-1]),[].splice.apply(b,
[b.length/n,0].concat(l)),k&&m--}a=a||"";var e=b.startX,x=b.endX,F=-1<a.indexOf("C"),T=F?7:3,l,C;a=a.split(" ");m=m.slice();var k=b.isArea,n=k?2:1;F&&(f(a),f(m));if(e&&x){for(C=0;C<e.length;C++)if(e[C]===x[0]){var V=C;break}else if(e[0]===x[x.length-e.length+C]){V=C;var w=!0;break}else if(e[e.length-1]===x[x.length-e.length+C]){V=e.length-C;break}"undefined"===typeof V&&(a=[])}if(a.length&&P(V)){var v=m.length+V*n*T;w?(c(a,m),p(m,a)):(c(m,a),p(a,m))}return[a,m]};b.prototype.fillSetter=function(){d.Fx.prototype.strokeSetter.apply(this,
arguments)};b.prototype.strokeSetter=function(){this.elem.attr(this.prop,d.color(this.start).tweenTo(d.color(this.end),this.pos),null,!0)};return b}();d.Fx=J;d.merge=g;var y=d.pInt=function(b,a){return parseInt(b,a||10)},t=d.isString=function(b){return"string"===typeof b},D=d.isArray=function(b){b=Object.prototype.toString.call(b);return"[object Array]"===b||"[object Array Iterator]"===b},h=d.isObject=function(b,a){return!!b&&"object"===typeof b&&(!a||!D(b))},N=d.isDOMElement=function(b){return h(b)&&
"number"===typeof b.nodeType},q=d.isClass=function(b){var a=b&&b.constructor;return!(!h(b,!0)||N(b)||!a||!a.name||"Object"===a.name)},P=d.isNumber=function(b){return"number"===typeof b&&!isNaN(b)&&Infinity>b&&-Infinity<b},e=d.erase=function(b,a){for(var m=b.length;m--;)if(b[m]===a){b.splice(m,1);break}},c=d.defined=function(b){return"undefined"!==typeof b&&null!==b};d.attr=W;var k=d.splat=function(b){return D(b)?b:[b]},n=d.syncTimeout=function(b,a,m){if(0<a)return setTimeout(b,a,m);b.call(0,m);return-1},
f=d.clearTimeout=function(b){c(b)&&clearTimeout(b)},a=d.extend=function(b,a){var m;b||(b={});for(m in a)b[m]=a[m];return b};d.pick=u;var l=d.css=function(b,m){d.isMS&&!d.svg&&m&&"undefined"!==typeof m.opacity&&(m.filter="alpha(opacity="+100*m.opacity+")");a(b.style,m)},v=d.createElement=function(b,m,f,c,p){b=E.createElement(b);m&&a(b,m);p&&l(b,{padding:"0",border:"none",margin:"0"});f&&l(b,f);c&&c.appendChild(b);return b},z=d.extendClass=function(b,m){var f=function(){};f.prototype=new b;a(f.prototype,
m);return f},w=d.pad=function(b,a,m){return Array((a||2)+1-String(b).replace("-","").length).join(m||"0")+b},B=d.relativeLength=function(b,a,m){return/%$/.test(b)?a*parseFloat(b)/100+(m||0):parseFloat(b)},L=d.wrap=function(b,a,m){var f=b[a];b[a]=function(){var b=Array.prototype.slice.call(arguments),a=arguments,c=this;c.proceed=function(){f.apply(c,arguments.length?arguments:a)};b.unshift(f);b=m.apply(this,b);c.proceed=null;return b}},Q=d.format=function(b,a,m){var f="{",c=!1,p=[],e=/f$/,x=/\.([0-9])/,
F=d.defaultOptions.lang,C=m&&m.time||d.time;for(m=m&&m.numberFormatter||T;b;){var l=b.indexOf(f);if(-1===l)break;var k=b.slice(0,l);if(c){k=k.split(":");f=r(k.shift()||"",a);if(k.length&&"number"===typeof f)if(k=k.join(":"),e.test(k)){var n=parseInt((k.match(x)||["","-1"])[1],10);null!==f&&(f=m(f,n,F.decimalPoint,-1<k.indexOf(",")?F.thousandsSep:""))}else f=C.dateFormat(k,f);p.push(f)}else p.push(k);b=b.slice(l+1);f=(c=!c)?"}":"{"}p.push(b);return p.join("")},H=d.getMagnitude=function(b){return Math.pow(10,
Math.floor(Math.log(b)/Math.LN10))},K=d.normalizeTickInterval=function(b,a,m,f,c){var p=b;m=u(m,1);var e=b/m;a||(a=c?[1,1.2,1.5,2,2.5,3,4,5,6,8,10]:[1,2,2.5,5,10],!1===f&&(1===m?a=a.filter(function(b){return 0===b%1}):.1>=m&&(a=[1/m])));for(f=0;f<a.length&&!(p=a[f],c&&p*m>=b||!c&&e<=(a[f]+(a[f+1]||a[f]))/2);f++);return p=O(p*m,-Math.round(Math.log(.001)/Math.LN10))},p=d.stableSort=function(b,a){var m=b.length,f,c;for(c=0;c<m;c++)b[c].safeI=c;b.sort(function(b,m){f=a(b,m);return 0===f?b.safeI-m.safeI:
f});for(c=0;c<m;c++)delete b[c].safeI},b=d.arrayMin=function(b){for(var a=b.length,m=b[0];a--;)b[a]<m&&(m=b[a]);return m},C=d.arrayMax=function(b){for(var a=b.length,m=b[0];a--;)b[a]>m&&(m=b[a]);return m},x=d.destroyObjectProperties=function(b,a){Y(b,function(m,f){m&&m!==a&&m.destroy&&m.destroy();delete b[f]})},R=d.discardElement=function(b){var a=d.garbageBin;a||(a=v("div"));b&&a.appendChild(b);a.innerHTML=""},O=d.correctFloat=function(b,a){return parseFloat(b.toPrecision(a||14))},X=d.setAnimation=
function(b,a){a.renderer.globalAnimation=u(b,a.options.chart.animation,!0)},U=d.animObject=function(b){return h(b)?g(b):{duration:b?500:0}},m=d.timeUnits={millisecond:1,second:1E3,minute:6E4,hour:36E5,day:864E5,week:6048E5,month:24192E5,year:314496E5},T=d.numberFormat=function(b,a,m,f){b=+b||0;a=+a;var c=d.defaultOptions.lang,p=(b.toString().split(".")[1]||"").split("e")[0].length,e=b.toString().split("e");if(-1===a)a=Math.min(p,20);else if(!P(a))a=2;else if(a&&e[1]&&0>e[1]){var x=a+ +e[1];0<=x?(e[0]=
(+e[0]).toExponential(x).split("e")[0],a=x):(e[0]=e[0].split(".")[0]||0,b=20>a?(e[0]*Math.pow(10,e[1])).toFixed(a):0,e[1]=0)}var F=(Math.abs(e[1]?e[0]:b)+Math.pow(10,-Math.max(a,p)-1)).toFixed(a);p=String(y(F));x=3<p.length?p.length%3:0;m=u(m,c.decimalPoint);f=u(f,c.thousandsSep);b=(0>b?"-":"")+(x?p.substr(0,x)+f:"");b+=p.substr(x).replace(/(\d{3})(?=\d)/g,"$1"+f);a&&(b+=m+F.slice(-a));e[1]&&0!==+b&&(b+="e"+e[1]);return b};Math.easeInOutSine=function(b){return-.5*(Math.cos(Math.PI*b)-1)};var Z=d.getStyle=
function(b,a,m){if("width"===a)return a=Math.min(b.offsetWidth,b.scrollWidth),m=b.getBoundingClientRect&&b.getBoundingClientRect().width,m<a&&m>=a-1&&(a=Math.floor(m)),Math.max(0,a-d.getStyle(b,"padding-left")-d.getStyle(b,"padding-right"));if("height"===a)return Math.max(0,Math.min(b.offsetHeight,b.scrollHeight)-d.getStyle(b,"padding-top")-d.getStyle(b,"padding-bottom"));A.getComputedStyle||G(27,!0);if(b=A.getComputedStyle(b,void 0))b=b.getPropertyValue(a),u(m,"opacity"!==a)&&(b=y(b));return b},
ca=d.inArray=function(b,a,m){return a.indexOf(b,m)},F=d.find=Array.prototype.find?function(b,a){return b.find(a)}:function(b,a){var m,f=b.length;for(m=0;m<f;m++)if(a(b[m],m))return b[m]};d.keys=Object.keys;var V=d.offset=function(b){var a=E.documentElement;b=b.parentElement||b.parentNode?b.getBoundingClientRect():{top:0,left:0};return{top:b.top+(A.pageYOffset||a.scrollTop)-(a.clientTop||0),left:b.left+(A.pageXOffset||a.scrollLeft)-(a.clientLeft||0)}},ba=d.stop=function(b,a){for(var m=d.timers.length;m--;)d.timers[m].elem!==
b||a&&a!==d.timers[m].prop||(d.timers[m].stopped=!0)},Y=d.objectEach=function(b,a,m){for(var f in b)Object.hasOwnProperty.call(b,f)&&a.call(m||b[f],b[f],f,b)};Y({map:"map",each:"forEach",grep:"filter",reduce:"reduce",some:"some"},function(b,a){d[a]=function(a){return Array.prototype[b].apply(a,[].slice.call(arguments,1))}});var fa=d.addEvent=function(b,a,m,f){void 0===f&&(f={});var c=b.addEventListener||d.addEventListenerPolyfill;var p="function"===typeof b&&b.prototype?b.prototype.protoEvents=b.prototype.protoEvents||
{}:b.hcEvents=b.hcEvents||{};d.Point&&b instanceof d.Point&&b.series&&b.series.chart&&(b.series.chart.runTrackerClick=!0);c&&c.call(b,a,m,!1);p[a]||(p[a]=[]);p[a].push({fn:m,order:"number"===typeof f.order?f.order:Infinity});p[a].sort(function(b,a){return b.order-a.order});return function(){da(b,a,m)}},da=d.removeEvent=function(b,a,m){function f(a,m){var f=b.removeEventListener||d.removeEventListenerPolyfill;f&&f.call(b,a,m,!1)}function c(m){var c;if(b.nodeName){if(a){var p={};p[a]=!0}else p=m;Y(p,
function(b,a){if(m[a])for(c=m[a].length;c--;)f(a,m[a][c].fn)})}}var p;["protoEvents","hcEvents"].forEach(function(e,x){var F=(x=x?b:b.prototype)&&x[e];F&&(a?(p=F[a]||[],m?(F[a]=p.filter(function(b){return m!==b.fn}),f(a,m)):(c(F),F[a]=[])):(c(F),x[e]={}))})},ha=d.fireEvent=function(b,m,f,c){var p;f=f||{};if(E.createEvent&&(b.dispatchEvent||b.fireEvent)){var e=E.createEvent("Events");e.initEvent(m,!0,!0);a(e,f);b.dispatchEvent?b.dispatchEvent(e):b.fireEvent(m,e)}else f.target||a(f,{preventDefault:function(){f.defaultPrevented=
!0},target:b,type:m}),function(a,m){void 0===a&&(a=[]);void 0===m&&(m=[]);var c=0,e=0,x=a.length+m.length;for(p=0;p<x;p++)!1===(a[c]?m[e]?a[c].order<=m[e].order?a[c++]:m[e++]:a[c++]:m[e++]).fn.call(b,f)&&f.preventDefault()}(b.protoEvents&&b.protoEvents[m],b.hcEvents&&b.hcEvents[m]);c&&!f.defaultPrevented&&c.call(b,f)},ia=d.animate=function(b,a,m){var f,c="",p,e;if(!h(m)){var x=arguments;m={duration:x[2],easing:x[3],complete:x[4]}}P(m.duration)||(m.duration=400);m.easing="function"===typeof m.easing?
m.easing:Math[m.easing]||Math.easeInOutSine;m.curAnim=g(a);Y(a,function(x,F){ba(b,F);e=new J(b,m,F);p=null;"d"===F?(e.paths=e.initPath(b,b.d,a.d),e.toD=a.d,f=0,p=1):b.attr?f=b.attr(F):(f=parseFloat(Z(b,F))||0,"opacity"!==F&&(c="px"));p||(p=x);p&&p.match&&p.match("px")&&(p=p.replace(/px/g,""));e.run(f,p,c)})},ja=d.seriesType=function(b,a,m,f,c){var p=d.getOptions(),e=d.seriesTypes;p.plotOptions[b]=g(p.plotOptions[a],m);e[b]=z(e[a]||function(){},f);e[b].prototype.type=b;c&&(e[b].prototype.pointClass=
z(d.Point,c));return e[b]},ea=d.uniqueKey=function(){var b=Math.random().toString(36).substring(2,9),a=0;return function(){return"highcharts-"+b+"-"+a++}}(),ka=d.isFunction=function(b){return"function"===typeof b};A.jQuery&&(A.jQuery.fn.highcharts=function(){var b=[].slice.call(arguments);if(this[0])return b[0]?(new (d[t(b[0])?b.shift():"Chart"])(this[0],b[0],b[1]),this):M[W(this[0],"data-highcharts-chart")]});return{Fx:J,addEvent:fa,animate:ia,animObject:U,arrayMax:C,arrayMin:b,attr:W,clamp:function(b,
a,m){return b>a?b<m?b:m:a},clearTimeout:f,correctFloat:O,createElement:v,css:l,defined:c,destroyObjectProperties:x,discardElement:R,erase:e,error:G,extend:a,extendClass:z,find:F,fireEvent:ha,format:Q,getMagnitude:H,getNestedProperty:r,getStyle:Z,inArray:ca,isArray:D,isClass:q,isDOMElement:N,isFunction:ka,isNumber:P,isObject:h,isString:t,merge:g,normalizeTickInterval:K,numberFormat:T,objectEach:Y,offset:V,pad:w,pick:u,pInt:y,relativeLength:B,removeEvent:da,seriesType:ja,setAnimation:X,splat:k,stableSort:p,
stop:ba,syncTimeout:n,timeUnits:m,uniqueKey:ea,wrap:L}});S(r,"parts/Color.js",[r["parts/Globals.js"],r["parts/Utilities.js"]],function(d,g){var W=g.isNumber,u=g.merge,r=g.pInt;g=function(){function d(g){this.parsers=[{regex:/rgba\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]?(?:\.[0-9]+)?)\s*\)/,parse:function(d){return[r(d[1]),r(d[2]),r(d[3]),parseFloat(d[4],10)]}},{regex:/rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/,parse:function(d){return[r(d[1]),r(d[2]),
r(d[3]),1]}}];this.rgba=[];if(!(this instanceof d))return new d(g);this.init(g)}d.parse=function(g){return new d(g)};d.prototype.init=function(g){var A,G;if((this.input=g=d.names[g&&g.toLowerCase?g.toLowerCase():""]||g)&&g.stops)this.stops=g.stops.map(function(t){return new d(t[1])});else{if(g&&g.charAt&&"#"===g.charAt()){var u=g.length;g=parseInt(g.substr(1),16);7===u?A=[(g&16711680)>>16,(g&65280)>>8,g&255,1]:4===u&&(A=[(g&3840)>>4|(g&3840)>>8,(g&240)>>4|g&240,(g&15)<<4|g&15,1])}if(!A)for(G=this.parsers.length;G--&&
!A;){var y=this.parsers[G];(u=y.regex.exec(g))&&(A=y.parse(u))}}this.rgba=A||[]};d.prototype.get=function(d){var g=this.input,G=this.rgba;if("undefined"!==typeof this.stops){var E=u(g);E.stops=[].concat(E.stops);this.stops.forEach(function(g,t){E.stops[t]=[E.stops[t][0],g.get(d)]})}else E=G&&W(G[0])?"rgb"===d||!d&&1===G[3]?"rgb("+G[0]+","+G[1]+","+G[2]+")":"a"===d?G[3]:"rgba("+G.join(",")+")":g;return E};d.prototype.brighten=function(d){var g,u=this.rgba;if(this.stops)this.stops.forEach(function(g){g.brighten(d)});
else if(W(d)&&0!==d)for(g=0;3>g;g++)u[g]+=r(255*d),0>u[g]&&(u[g]=0),255<u[g]&&(u[g]=255);return this};d.prototype.setOpacity=function(d){this.rgba[3]=d;return this};d.prototype.tweenTo=function(d,g){var u=this.rgba,A=d.rgba;A.length&&u&&u.length?(d=1!==A[3]||1!==u[3],g=(d?"rgba(":"rgb(")+Math.round(A[0]+(u[0]-A[0])*(1-g))+","+Math.round(A[1]+(u[1]-A[1])*(1-g))+","+Math.round(A[2]+(u[2]-A[2])*(1-g))+(d?","+(A[3]+(u[3]-A[3])*(1-g)):"")+")"):g=d.input||"none";return g};d.names={white:"#ffffff",black:"#000000"};
return d}();d.Color=g;d.color=g.parse;return d.Color});S(r,"parts/SvgRenderer.js",[r["parts/Globals.js"],r["parts/Color.js"],r["parts/Utilities.js"]],function(d,g,r){var u=g.parse,I=r.addEvent,M=r.animate,E=r.animObject,A=r.attr,G=r.createElement,J=r.css,y=r.defined,t=r.destroyObjectProperties,D=r.erase,h=r.extend,N=r.inArray,q=r.isArray,P=r.isNumber,e=r.isObject,c=r.isString,k=r.merge,n=r.objectEach,f=r.pick,a=r.pInt,l=r.removeEvent,v=r.splat,z=r.stop,w=r.uniqueKey,B=d.charts,L=d.deg2rad,Q=d.doc,
H=d.hasTouch,K=d.isFirefox,p=d.isMS,b=d.isWebKit,C=d.noop,x=d.svg,R=d.SVG_NS,O=d.symbolSizes,X=d.win;var U=d.SVGElement=function(){return this};h(U.prototype,{opacity:1,SVG_NS:R,textProps:"direction fontSize fontWeight fontFamily fontStyle color lineHeight width textAlign textDecoration textOverflow textOutline cursor".split(" "),init:function(b,a){this.element="span"===a?G(a):Q.createElementNS(this.SVG_NS,a);this.renderer=b;d.fireEvent(this,"afterInit")},animate:function(b,a,c){var m=E(f(a,this.renderer.globalAnimation,
!0));f(Q.hidden,Q.msHidden,Q.webkitHidden,!1)&&(m.duration=0);0!==m.duration?(c&&(m.complete=c),M(this,b,m)):(this.attr(b,void 0,c),n(b,function(b,a){m.step&&m.step.call(this,b,{prop:a,pos:1})},this));return this},complexColor:function(b,a,f){var m=this.renderer,c,p,e,x,T,C,l,v,z,Z,O,R=[],B;d.fireEvent(this.renderer,"complexColor",{args:arguments},function(){b.radialGradient?p="radialGradient":b.linearGradient&&(p="linearGradient");p&&(e=b[p],T=m.gradients,l=b.stops,Z=f.radialReference,q(e)&&(b[p]=
e={x1:e[0],y1:e[1],x2:e[2],y2:e[3],gradientUnits:"userSpaceOnUse"}),"radialGradient"===p&&Z&&!y(e.gradientUnits)&&(x=e,e=k(e,m.getRadialAttr(Z,x),{gradientUnits:"userSpaceOnUse"})),n(e,function(b,a){"id"!==a&&R.push(a,b)}),n(l,function(b){R.push(b)}),R=R.join(","),T[R]?O=T[R].attr("id"):(e.id=O=w(),T[R]=C=m.createElement(p).attr(e).add(m.defs),C.radAttr=x,C.stops=[],l.forEach(function(b){0===b[1].indexOf("rgba")?(c=u(b[1]),v=c.get("rgb"),z=c.get("a")):(v=b[1],z=1);b=m.createElement("stop").attr({offset:b[0],
"stop-color":v,"stop-opacity":z}).add(C);C.stops.push(b)})),B="url("+m.url+"#"+O+")",f.setAttribute(a,B),f.gradient=R,b.toString=function(){return B})})},applyTextOutline:function(b){var a=this.element,m;-1!==b.indexOf("contrast")&&(b=b.replace(/contrast/g,this.renderer.getContrast(a.style.fill)));b=b.split(" ");var f=b[b.length-1];if((m=b[0])&&"none"!==m&&d.svg){this.fakeTS=!0;b=[].slice.call(a.getElementsByTagName("tspan"));this.ySetter=this.xSetter;m=m.replace(/(^[\d\.]+)(.*?)$/g,function(b,a,
m){return 2*a+m});this.removeTextOutline(b);var c=a.textContent?/^[\u0591-\u065F\u066A-\u07FF\uFB1D-\uFDFD\uFE70-\uFEFC]/.test(a.textContent):!1;var p=a.firstChild;b.forEach(function(b,e){0===e&&(b.setAttribute("x",a.getAttribute("x")),e=a.getAttribute("y"),b.setAttribute("y",e||0),null===e&&a.setAttribute("y",0));e=b.cloneNode(!0);A(c&&!K?b:e,{"class":"highcharts-text-outline",fill:f,stroke:f,"stroke-width":m,"stroke-linejoin":"round"});a.insertBefore(e,p)});c&&K&&b[0]&&(b=b[0].cloneNode(!0),b.textContent=
" ",a.insertBefore(b,p))}},removeTextOutline:function(b){for(var a=b.length,m;a--;)m=b[a],"highcharts-text-outline"===m.getAttribute("class")&&D(b,this.element.removeChild(m))},symbolCustomAttribs:"x y width height r start end innerR anchorX anchorY rounded".split(" "),attr:function(b,a,f,c){var m=this.element,p,e=this,x,C,l=this.symbolCustomAttribs;if("string"===typeof b&&"undefined"!==typeof a){var T=b;b={};b[T]=a}"string"===typeof b?e=(this[b+"Getter"]||this._defaultGetter).call(this,b,m):(n(b,
function(a,f){x=!1;c||z(this,f);this.symbolName&&-1!==N(f,l)&&(p||(this.symbolAttr(b),p=!0),x=!0);!this.rotation||"x"!==f&&"y"!==f||(this.doTransform=!0);x||(C=this[f+"Setter"]||this._defaultSetter,C.call(this,a,f,m),!this.styledMode&&this.shadows&&/^(width|height|visibility|x|y|d|transform|cx|cy|r)$/.test(f)&&this.updateShadows(f,a,C))},this),this.afterSetters());f&&f.call(this);return e},afterSetters:function(){this.doTransform&&(this.updateTransform(),this.doTransform=!1)},updateShadows:function(b,
a,f){for(var m=this.shadows,c=m.length;c--;)f.call(m[c],"height"===b?Math.max(a-(m[c].cutHeight||0),0):"d"===b?this.d:a,b,m[c])},addClass:function(b,a){var m=a?"":this.attr("class")||"";b=(b||"").split(/ /g).reduce(function(b,a){-1===m.indexOf(a)&&b.push(a);return b},m?[m]:[]).join(" ");b!==m&&this.attr("class",b);return this},hasClass:function(b){return-1!==(this.attr("class")||"").split(" ").indexOf(b)},removeClass:function(b){return this.attr("class",(this.attr("class")||"").replace(c(b)?new RegExp(" ?"+
b+" ?"):b,""))},symbolAttr:function(b){var a=this;"x y r start end width height innerR anchorX anchorY clockwise".split(" ").forEach(function(m){a[m]=f(b[m],a[m])});a.attr({d:a.renderer.symbols[a.symbolName](a.x,a.y,a.width,a.height,a)})},clip:function(b){return this.attr("clip-path",b?"url("+this.renderer.url+"#"+b.id+")":"none")},crisp:function(b,a){a=a||b.strokeWidth||0;var m=Math.round(a)%2/2;b.x=Math.floor(b.x||this.x||0)+m;b.y=Math.floor(b.y||this.y||0)+m;b.width=Math.floor((b.width||this.width||
0)-2*m);b.height=Math.floor((b.height||this.height||0)-2*m);y(b.strokeWidth)&&(b.strokeWidth=a);return b},css:function(b){var m=this.styles,f={},c=this.element,p="",e=!m,C=["textOutline","textOverflow","width"];b&&b.color&&(b.fill=b.color);m&&n(b,function(b,a){b!==m[a]&&(f[a]=b,e=!0)});if(e){m&&(b=h(m,f));if(b)if(null===b.width||"auto"===b.width)delete this.textWidth;else if("text"===c.nodeName.toLowerCase()&&b.width)var l=this.textWidth=a(b.width);this.styles=b;l&&!x&&this.renderer.forExport&&delete b.width;
if(c.namespaceURI===this.SVG_NS){var k=function(b,a){return"-"+a.toLowerCase()};n(b,function(b,a){-1===C.indexOf(a)&&(p+=a.replace(/([A-Z])/g,k)+":"+b+";")});p&&A(c,"style",p)}else J(c,b);this.added&&("text"===this.element.nodeName&&this.renderer.buildText(this),b&&b.textOutline&&this.applyTextOutline(b.textOutline))}return this},getStyle:function(b){return X.getComputedStyle(this.element||this,"").getPropertyValue(b)},strokeWidth:function(){if(!this.renderer.styledMode)return this["stroke-width"]||
0;var b=this.getStyle("stroke-width"),f=0;if(b.indexOf("px")===b.length-2)f=a(b);else if(""!==b){var c=Q.createElementNS(R,"rect");A(c,{width:b,"stroke-width":0});this.element.parentNode.appendChild(c);f=c.getBBox().width;c.parentNode.removeChild(c)}return f},on:function(b,a){var m,f,c=this.element,p;H&&"click"===b?(c.ontouchstart=function(b){m=b.touches[0].clientX;f=b.touches[0].clientY},c.ontouchend=function(b){m&&4<=Math.sqrt(Math.pow(m-b.changedTouches[0].clientX,2)+Math.pow(f-b.changedTouches[0].clientY,
2))||a.call(c,b);p=!0;b.preventDefault()},c.onclick=function(b){p||a.call(c,b)}):c["on"+b]=a;return this},setRadialReference:function(b){var a=this.renderer.gradients[this.element.gradient];this.element.radialReference=b;a&&a.radAttr&&a.animate(this.renderer.getRadialAttr(b,a.radAttr));return this},translate:function(b,a){return this.attr({translateX:b,translateY:a})},invert:function(b){this.inverted=b;this.updateTransform();return this},updateTransform:function(){var b=this.translateX||0,a=this.translateY||
0,c=this.scaleX,p=this.scaleY,e=this.inverted,x=this.rotation,C=this.matrix,l=this.element;e&&(b+=this.width,a+=this.height);b=["translate("+b+","+a+")"];y(C)&&b.push("matrix("+C.join(",")+")");e?b.push("rotate(90) scale(-1,1)"):x&&b.push("rotate("+x+" "+f(this.rotationOriginX,l.getAttribute("x"),0)+" "+f(this.rotationOriginY,l.getAttribute("y")||0)+")");(y(c)||y(p))&&b.push("scale("+f(c,1)+" "+f(p,1)+")");b.length&&l.setAttribute("transform",b.join(" "))},toFront:function(){var b=this.element;b.parentNode.appendChild(b);
return this},align:function(b,a,p){var m,e={};var x=this.renderer;var C=x.alignedObjects;var l,k;if(b){if(this.alignOptions=b,this.alignByTranslate=a,!p||c(p))this.alignTo=m=p||"renderer",D(C,this),C.push(this),p=null}else b=this.alignOptions,a=this.alignByTranslate,m=this.alignTo;p=f(p,x[m],x);m=b.align;x=b.verticalAlign;C=(p.x||0)+(b.x||0);var T=(p.y||0)+(b.y||0);"right"===m?l=1:"center"===m&&(l=2);l&&(C+=(p.width-(b.width||0))/l);e[a?"translateX":"x"]=Math.round(C);"bottom"===x?k=1:"middle"===
x&&(k=2);k&&(T+=(p.height-(b.height||0))/k);e[a?"translateY":"y"]=Math.round(T);this[this.placed?"animate":"attr"](e);this.placed=!0;this.alignAttr=e;return this},getBBox:function(b,a){var m,c=this.renderer,p=this.element,e=this.styles,x=this.textStr,C,l=c.cache,k=c.cacheKeys,T=p.namespaceURI===this.SVG_NS;a=f(a,this.rotation,0);var n=c.styledMode?p&&U.prototype.getStyle.call(p,"font-size"):e&&e.fontSize;if(y(x)){var v=x.toString();-1===v.indexOf("<")&&(v=v.replace(/[0-9]/g,"0"));v+=["",a,n,this.textWidth,
e&&e.textOverflow].join()}v&&!b&&(m=l[v]);if(!m){if(T||c.forExport){try{(C=this.fakeTS&&function(b){[].forEach.call(p.querySelectorAll(".highcharts-text-outline"),function(a){a.style.display=b})})&&C("none"),m=p.getBBox?h({},p.getBBox()):{width:p.offsetWidth,height:p.offsetHeight},C&&C("")}catch(ea){""}if(!m||0>m.width)m={width:0,height:0}}else m=this.htmlGetBBox();c.isSVG&&(b=m.width,c=m.height,T&&(m.height=c={"11px,17":14,"13px,20":16}[e&&e.fontSize+","+Math.round(c)]||c),a&&(e=a*L,m.width=Math.abs(c*
Math.sin(e))+Math.abs(b*Math.cos(e)),m.height=Math.abs(c*Math.cos(e))+Math.abs(b*Math.sin(e))));if(v&&0<m.height){for(;250<k.length;)delete l[k.shift()];l[v]||k.push(v);l[v]=m}}return m},show:function(b){return this.attr({visibility:b?"inherit":"visible"})},hide:function(b){b?this.attr({y:-9999}):this.attr({visibility:"hidden"});return this},fadeOut:function(b){var a=this;a.animate({opacity:0},{duration:b||150,complete:function(){a.attr({y:-9999})}})},add:function(b){var a=this.renderer,m=this.element;
b&&(this.parentGroup=b);this.parentInverted=b&&b.inverted;"undefined"!==typeof this.textStr&&a.buildText(this);this.added=!0;if(!b||b.handleZ||this.zIndex)var f=this.zIndexSetter();f||(b?b.element:a.box).appendChild(m);if(this.onAdd)this.onAdd();return this},safeRemoveChild:function(b){var a=b.parentNode;a&&a.removeChild(b)},destroy:function(){var b=this,a=b.element||{},f=b.renderer,c=f.isSVG&&"SPAN"===a.nodeName&&b.parentGroup,p=a.ownerSVGElement,e=b.clipPath;a.onclick=a.onmouseout=a.onmouseover=
a.onmousemove=a.point=null;z(b);e&&p&&([].forEach.call(p.querySelectorAll("[clip-path],[CLIP-PATH]"),function(b){-1<b.getAttribute("clip-path").indexOf(e.element.id)&&b.removeAttribute("clip-path")}),b.clipPath=e.destroy());if(b.stops){for(p=0;p<b.stops.length;p++)b.stops[p]=b.stops[p].destroy();b.stops=null}b.safeRemoveChild(a);for(f.styledMode||b.destroyShadows();c&&c.div&&0===c.div.childNodes.length;)a=c.parentGroup,b.safeRemoveChild(c.div),delete c.div,c=a;b.alignTo&&D(f.alignedObjects,b);n(b,
function(a,m){b[m]&&b[m].parentGroup===b&&b[m].destroy&&b[m].destroy();delete b[m]})},shadow:function(b,a,c){var m=[],p,e=this.element;if(!b)this.destroyShadows();else if(!this.shadows){var x=f(b.width,3);var C=(b.opacity||.15)/x;var l=this.parentInverted?"(-1,-1)":"("+f(b.offsetX,1)+", "+f(b.offsetY,1)+")";for(p=1;p<=x;p++){var k=e.cloneNode(0);var n=2*x+1-2*p;A(k,{stroke:b.color||"#000000","stroke-opacity":C*p,"stroke-width":n,transform:"translate"+l,fill:"none"});k.setAttribute("class",(k.getAttribute("class")||
"")+" highcharts-shadow");c&&(A(k,"height",Math.max(A(k,"height")-n,0)),k.cutHeight=n);a?a.element.appendChild(k):e.parentNode&&e.parentNode.insertBefore(k,e);m.push(k)}this.shadows=m}return this},destroyShadows:function(){(this.shadows||[]).forEach(function(b){this.safeRemoveChild(b)},this);this.shadows=void 0},xGetter:function(b){"circle"===this.element.nodeName&&("x"===b?b="cx":"y"===b&&(b="cy"));return this._defaultGetter(b)},_defaultGetter:function(b){b=f(this[b+"Value"],this[b],this.element?
this.element.getAttribute(b):null,0);/^[\-0-9\.]+$/.test(b)&&(b=parseFloat(b));return b},dSetter:function(b,a,f){b&&b.join&&(b=b.join(" "));/(NaN| {2}|^$)/.test(b)&&(b="M 0 0");this[a]!==b&&(f.setAttribute(a,b),this[a]=b)},dashstyleSetter:function(b){var f,c=this["stroke-width"];"inherit"===c&&(c=1);if(b=b&&b.toLowerCase()){b=b.replace("shortdashdotdot","3,1,1,1,1,1,").replace("shortdashdot","3,1,1,1").replace("shortdot","1,1,").replace("shortdash","3,1,").replace("longdash","8,3,").replace(/dot/g,
"1,3,").replace("dash","4,3,").replace(/,$/,"").split(",");for(f=b.length;f--;)b[f]=a(b[f])*c;b=b.join(",").replace(/NaN/g,"none");this.element.setAttribute("stroke-dasharray",b)}},alignSetter:function(b){var a={left:"start",center:"middle",right:"end"};a[b]&&(this.alignValue=b,this.element.setAttribute("text-anchor",a[b]))},opacitySetter:function(b,a,f){this[a]=b;f.setAttribute(a,b)},titleSetter:function(b){var a=this.element.getElementsByTagName("title")[0];a||(a=Q.createElementNS(this.SVG_NS,"title"),
this.element.appendChild(a));a.firstChild&&a.removeChild(a.firstChild);a.appendChild(Q.createTextNode(String(f(b,"")).replace(/<[^>]*>/g,"").replace(/&lt;/g,"<").replace(/&gt;/g,">")))},textSetter:function(b){b!==this.textStr&&(delete this.bBox,delete this.textPxLength,this.textStr=b,this.added&&this.renderer.buildText(this))},setTextPath:function(b,a){var f=this.element,c={textAnchor:"text-anchor"},m=!1,p=this.textPathWrapper,e=!p;a=k(!0,{enabled:!0,attributes:{dy:-5,startOffset:"50%",textAnchor:"middle"}},
a);var x=a.attributes;if(b&&a&&a.enabled){p&&null===p.element.parentNode?(e=!0,p=p.destroy()):p&&this.removeTextOutline.call(p.parentGroup,[].slice.call(f.getElementsByTagName("tspan")));this.options&&this.options.padding&&(x.dx=-this.options.padding);p||(this.textPathWrapper=p=this.renderer.createElement("textPath"),m=!0);var l=p.element;(a=b.element.getAttribute("id"))||b.element.setAttribute("id",a=w());if(e)for(b=f.getElementsByTagName("tspan");b.length;)b[0].setAttribute("y",0),P(x.dx)&&b[0].setAttribute("x",
-x.dx),l.appendChild(b[0]);m&&p.add({element:this.text?this.text.element:f});l.setAttributeNS("http://www.w3.org/1999/xlink","href",this.renderer.url+"#"+a);y(x.dy)&&(l.parentNode.setAttribute("dy",x.dy),delete x.dy);y(x.dx)&&(l.parentNode.setAttribute("dx",x.dx),delete x.dx);n(x,function(b,a){l.setAttribute(c[a]||a,b)});f.removeAttribute("transform");this.removeTextOutline.call(p,[].slice.call(f.getElementsByTagName("tspan")));this.text&&!this.renderer.styledMode&&this.attr({fill:"none","stroke-width":0});
this.applyTextOutline=this.updateTransform=C}else p&&(delete this.updateTransform,delete this.applyTextOutline,this.destroyTextPath(f,b),this.updateTransform(),this.options.rotation&&this.applyTextOutline(this.options.style.textOutline));return this},destroyTextPath:function(b,a){var f=b.getElementsByTagName("text")[0];if(f){if(f.removeAttribute("dx"),f.removeAttribute("dy"),a.element.setAttribute("id",""),f.getElementsByTagName("textPath").length){for(b=this.textPathWrapper.element.childNodes;b.length;)f.appendChild(b[0]);
f.removeChild(this.textPathWrapper.element)}}else if(b.getAttribute("dx")||b.getAttribute("dy"))b.removeAttribute("dx"),b.removeAttribute("dy");this.textPathWrapper=this.textPathWrapper.destroy()},fillSetter:function(b,a,f){"string"===typeof b?f.setAttribute(a,b):b&&this.complexColor(b,a,f)},visibilitySetter:function(b,a,f){"inherit"===b?f.removeAttribute(a):this[a]!==b&&f.setAttribute(a,b);this[a]=b},zIndexSetter:function(b,f){var c=this.renderer,m=this.parentGroup,p=(m||c).element||c.box,e=this.element,
x=!1;c=p===c.box;var C=this.added;var l;y(b)?(e.setAttribute("data-z-index",b),b=+b,this[f]===b&&(C=!1)):y(this[f])&&e.removeAttribute("data-z-index");this[f]=b;if(C){(b=this.zIndex)&&m&&(m.handleZ=!0);f=p.childNodes;for(l=f.length-1;0<=l&&!x;l--){m=f[l];C=m.getAttribute("data-z-index");var k=!y(C);if(m!==e)if(0>b&&k&&!c&&!l)p.insertBefore(e,f[l]),x=!0;else if(a(C)<=b||k&&(!y(b)||0<=b))p.insertBefore(e,f[l+1]||null),x=!0}x||(p.insertBefore(e,f[c?3:0]||null),x=!0)}return x},_defaultSetter:function(b,
a,f){f.setAttribute(a,b)}});U.prototype.yGetter=U.prototype.xGetter;U.prototype.translateXSetter=U.prototype.translateYSetter=U.prototype.rotationSetter=U.prototype.verticalAlignSetter=U.prototype.rotationOriginXSetter=U.prototype.rotationOriginYSetter=U.prototype.scaleXSetter=U.prototype.scaleYSetter=U.prototype.matrixSetter=function(b,a){this[a]=b;this.doTransform=!0};U.prototype["stroke-widthSetter"]=U.prototype.strokeSetter=function(b,a,f){this[a]=b;this.stroke&&this["stroke-width"]?(U.prototype.fillSetter.call(this,
this.stroke,"stroke",f),f.setAttribute("stroke-width",this["stroke-width"]),this.hasStroke=!0):"stroke-width"===a&&0===b&&this.hasStroke?(f.removeAttribute("stroke"),this.hasStroke=!1):this.renderer.styledMode&&this["stroke-width"]&&(f.setAttribute("stroke-width",this["stroke-width"]),this.hasStroke=!0)};g=d.SVGRenderer=function(){this.init.apply(this,arguments)};h(g.prototype,{Element:U,SVG_NS:R,init:function(a,f,c,p,e,x,C){var m=this.createElement("svg").attr({version:"1.1","class":"highcharts-root"});
C||m.css(this.getStyle(p));p=m.element;a.appendChild(p);A(a,"dir","ltr");-1===a.innerHTML.indexOf("xmlns")&&A(p,"xmlns",this.SVG_NS);this.isSVG=!0;this.box=p;this.boxWrapper=m;this.alignedObjects=[];this.url=(K||b)&&Q.getElementsByTagName("base").length?X.location.href.split("#")[0].replace(/<[^>]*>/g,"").replace(/([\('\)])/g,"\\$1").replace(/ /g,"%20"):"";this.createElement("desc").add().element.appendChild(Q.createTextNode("Created with Highcharts 8.0.4"));this.defs=this.createElement("defs").add();
this.allowHTML=x;this.forExport=e;this.styledMode=C;this.gradients={};this.cache={};this.cacheKeys=[];this.imgCount=0;this.setSize(f,c,!1);var l;K&&a.getBoundingClientRect&&(f=function(){J(a,{left:0,top:0});l=a.getBoundingClientRect();J(a,{left:Math.ceil(l.left)-l.left+"px",top:Math.ceil(l.top)-l.top+"px"})},f(),this.unSubPixelFix=I(X,"resize",f))},definition:function(b){function a(b,c){var p;v(b).forEach(function(b){var m=f.createElement(b.tagName),e={};n(b,function(b,a){"tagName"!==a&&"children"!==
a&&"textContent"!==a&&(e[a]=b)});m.attr(e);m.add(c||f.defs);b.textContent&&m.element.appendChild(Q.createTextNode(b.textContent));a(b.children||[],m);p=m});return p}var f=this;return a(b)},getStyle:function(b){return this.style=h({fontFamily:'"Lucida Grande", "Lucida Sans Unicode", Arial, Helvetica, sans-serif',fontSize:"12px"},b)},setStyle:function(b){this.boxWrapper.css(this.getStyle(b))},isHidden:function(){return!this.boxWrapper.getBBox().width},destroy:function(){var b=this.defs;this.box=null;
this.boxWrapper=this.boxWrapper.destroy();t(this.gradients||{});this.gradients=null;b&&(this.defs=b.destroy());this.unSubPixelFix&&this.unSubPixelFix();return this.alignedObjects=null},createElement:function(b){var a=new this.Element;a.init(this,b);return a},draw:C,getRadialAttr:function(b,a){return{cx:b[0]-b[2]/2+a.cx*b[2],cy:b[1]-b[2]/2+a.cy*b[2],r:a.r*b[2]}},truncate:function(b,a,f,c,p,e,x){var m=this,C=b.rotation,l,k=c?1:0,F=(f||c).length,n=F,v=[],w=function(b){a.firstChild&&a.removeChild(a.firstChild);
b&&a.appendChild(Q.createTextNode(b))},z=function(e,l){l=l||e;if("undefined"===typeof v[l])if(a.getSubStringLength)try{v[l]=p+a.getSubStringLength(0,c?l+1:l)}catch(la){""}else m.getSpanWidth&&(w(x(f||c,e)),v[l]=p+m.getSpanWidth(b,a));return v[l]},O;b.rotation=0;var T=z(a.textContent.length);if(O=p+T>e){for(;k<=F;)n=Math.ceil((k+F)/2),c&&(l=x(c,n)),T=z(n,l&&l.length-1),k===F?k=F+1:T>e?F=n-1:k=n;0===F?w(""):f&&F===f.length-1||w(l||x(f||c,n))}c&&c.splice(0,n);b.actualWidth=T;b.rotation=C;return O},escapes:{"&":"&amp;",
"<":"&lt;",">":"&gt;","'":"&#39;",'"':"&quot;"},buildText:function(b){var c=b.element,p=this,e=p.forExport,m=f(b.textStr,"").toString(),l=-1!==m.indexOf("<"),C=c.childNodes,k,v=A(c,"x"),w=b.styles,z=b.textWidth,O=w&&w.lineHeight,q=w&&w.textOutline,B=w&&"ellipsis"===w.textOverflow,d=w&&"nowrap"===w.whiteSpace,N=w&&w.fontSize,X,h=C.length;w=z&&!b.added&&this.box;var L=function(b){var f;p.styledMode||(f=/(px|em)$/.test(b&&b.style.fontSize)?b.style.fontSize:N||p.style.fontSize||12);return O?a(O):p.fontMetrics(f,
b.getAttribute("style")?b:c).h},t=function(b,a){n(p.escapes,function(f,c){a&&-1!==a.indexOf(f)||(b=b.toString().replace(new RegExp(f,"g"),c))});return b},U=function(b,a){var f=b.indexOf("<");b=b.substring(f,b.indexOf(">")-f);f=b.indexOf(a+"=");if(-1!==f&&(f=f+a.length+1,a=b.charAt(f),'"'===a||"'"===a))return b=b.substring(f+1),b.substring(0,b.indexOf(a))},P=/<br.*?>/g;var g=[m,B,d,O,q,N,z].join();if(g!==b.textCache){for(b.textCache=g;h--;)c.removeChild(C[h]);l||q||B||z||-1!==m.indexOf(" ")&&(!d||
P.test(m))?(w&&w.appendChild(c),l?(m=p.styledMode?m.replace(/<(b|strong)>/g,'<span class="highcharts-strong">').replace(/<(i|em)>/g,'<span class="highcharts-emphasized">'):m.replace(/<(b|strong)>/g,'<span style="font-weight:bold">').replace(/<(i|em)>/g,'<span style="font-style:italic">'),m=m.replace(/<a/g,"<span").replace(/<\/(b|strong|i|em|a)>/g,"</span>").split(P)):m=[m],m=m.filter(function(b){return""!==b}),m.forEach(function(a,f){var m=0,l=0;a=a.replace(/^\s+|\s+$/g,"").replace(/<span/g,"|||<span").replace(/<\/span>/g,
"</span>|||");var C=a.split("|||");C.forEach(function(a){if(""!==a||1===C.length){var n={},F=Q.createElementNS(p.SVG_NS,"tspan"),w,O;(w=U(a,"class"))&&A(F,"class",w);if(w=U(a,"style"))w=w.replace(/(;| |^)color([ :])/,"$1fill$2"),A(F,"style",w);(O=U(a,"href"))&&!e&&(A(F,"onclick",'location.href="'+O+'"'),A(F,"class","highcharts-anchor"),p.styledMode||J(F,{cursor:"pointer"}));a=t(a.replace(/<[a-zA-Z\/](.|\n)*?>/g,"")||" ");if(" "!==a){F.appendChild(Q.createTextNode(a));m?n.dx=0:f&&null!==v&&(n.x=v);
A(F,n);c.appendChild(F);!m&&X&&(!x&&e&&J(F,{display:"block"}),A(F,"dy",L(F)));if(z){var q=a.replace(/([^\^])-/g,"$1- ").split(" ");n=!d&&(1<C.length||f||1<q.length);O=0;var T=L(F);if(B)k=p.truncate(b,F,a,void 0,0,Math.max(0,z-parseInt(N||12,10)),function(b,a){return b.substring(0,a)+"\u2026"});else if(n)for(;q.length;)q.length&&!d&&0<O&&(F=Q.createElementNS(R,"tspan"),A(F,{dy:T,x:v}),w&&A(F,"style",w),F.appendChild(Q.createTextNode(q.join(" ").replace(/- /g,"-"))),c.appendChild(F)),p.truncate(b,F,
null,q,0===O?l:0,z,function(b,a){return q.slice(0,a).join(" ").replace(/- /g,"-")}),l=b.actualWidth,O++}m++}}});X=X||c.childNodes.length}),B&&k&&b.attr("title",t(b.textStr,["&lt;","&gt;"])),w&&w.removeChild(c),q&&b.applyTextOutline&&b.applyTextOutline(q)):c.appendChild(Q.createTextNode(t(m)))}},getContrast:function(b){b=u(b).rgba;b[0]*=1;b[1]*=1.2;b[2]*=.5;return 459<b[0]+b[1]+b[2]?"#000000":"#FFFFFF"},button:function(b,a,f,c,e,x,l,C,n,w){var m=this.label(b,a,f,n,null,null,w,null,"button"),F=0,v=
this.styledMode;m.attr(k({padding:8,r:2},e));if(!v){e=k({fill:"#f7f7f7",stroke:"#cccccc","stroke-width":1,style:{color:"#333333",cursor:"pointer",fontWeight:"normal"}},e);var z=e.style;delete e.style;x=k(e,{fill:"#e6e6e6"},x);var O=x.style;delete x.style;l=k(e,{fill:"#e6ebf5",style:{color:"#000000",fontWeight:"bold"}},l);var q=l.style;delete l.style;C=k(e,{style:{color:"#cccccc"}},C);var R=C.style;delete C.style}I(m.element,p?"mouseover":"mouseenter",function(){3!==F&&m.setState(1)});I(m.element,
p?"mouseout":"mouseleave",function(){3!==F&&m.setState(F)});m.setState=function(b){1!==b&&(m.state=F=b);m.removeClass(/highcharts-button-(normal|hover|pressed|disabled)/).addClass("highcharts-button-"+["normal","hover","pressed","disabled"][b||0]);v||m.attr([e,x,l,C][b||0]).css([z,O,q,R][b||0])};v||m.attr(e).css(h({cursor:"default"},z));return m.on("click",function(b){3!==F&&c.call(m,b)})},crispLine:function(b,a){b[1]===b[4]&&(b[1]=b[4]=Math.round(b[1])-a%2/2);b[2]===b[5]&&(b[2]=b[5]=Math.round(b[2])+
a%2/2);return b},path:function(b){var a=this.styledMode?{}:{fill:"none"};q(b)?a.d=b:e(b)&&h(a,b);return this.createElement("path").attr(a)},circle:function(b,a,f){b=e(b)?b:"undefined"===typeof b?{}:{x:b,y:a,r:f};a=this.createElement("circle");a.xSetter=a.ySetter=function(b,a,f){f.setAttribute("c"+a,b)};return a.attr(b)},arc:function(b,a,f,c,p,x){e(b)?(c=b,a=c.y,f=c.r,b=c.x):c={innerR:c,start:p,end:x};b=this.symbol("arc",b,a,f,f,c);b.r=f;return b},rect:function(b,a,f,c,p,x){p=e(b)?b.r:p;var m=this.createElement("rect");
b=e(b)?b:"undefined"===typeof b?{}:{x:b,y:a,width:Math.max(f,0),height:Math.max(c,0)};this.styledMode||("undefined"!==typeof x&&(b.strokeWidth=x,b=m.crisp(b)),b.fill="none");p&&(b.r=p);m.rSetter=function(b,a,f){m.r=b;A(f,{rx:b,ry:b})};m.rGetter=function(){return m.r};return m.attr(b)},setSize:function(b,a,c){var p=this.alignedObjects,e=p.length;this.width=b;this.height=a;for(this.boxWrapper.animate({width:b,height:a},{step:function(){this.attr({viewBox:"0 0 "+this.attr("width")+" "+this.attr("height")})},
duration:f(c,!0)?void 0:0});e--;)p[e].align()},g:function(b){var a=this.createElement("g");return b?a.attr({"class":"highcharts-"+b}):a},image:function(b,a,f,c,p,e){var x={preserveAspectRatio:"none"},m=function(b,a){b.setAttributeNS?b.setAttributeNS("http://www.w3.org/1999/xlink","href",a):b.setAttribute("hc-svg-href",a)},l=function(a){m(C.element,b);e.call(C,a)};1<arguments.length&&h(x,{x:a,y:f,width:c,height:p});var C=this.createElement("image").attr(x);e?(m(C.element,"data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="),
x=new X.Image,I(x,"load",l),x.src=b,x.complete&&l({})):m(C.element,b);return C},symbol:function(b,a,c,p,e,x){var m=this,l=/^url\((.*?)\)$/,C=l.test(b),k=!C&&(this.symbols[b]?b:"circle"),n=k&&this.symbols[k],F=y(a)&&n&&n.call(this.symbols,Math.round(a),Math.round(c),p,e,x);if(n){var w=this.path(F);m.styledMode||w.attr("fill","none");h(w,{symbolName:k,x:a,y:c,width:p,height:e});x&&h(w,x)}else if(C){var v=b.match(l)[1];w=this.image(v);w.imgwidth=f(O[v]&&O[v].width,x&&x.width);w.imgheight=f(O[v]&&O[v].height,
x&&x.height);var z=function(){w.attr({width:w.width,height:w.height})};["width","height"].forEach(function(b){w[b+"Setter"]=function(b,a){var f={},c=this["img"+a],p="width"===a?"translateX":"translateY";this[a]=b;y(c)&&(x&&"within"===x.backgroundSize&&this.width&&this.height&&(c=Math.round(c*Math.min(this.width/this.imgwidth,this.height/this.imgheight))),this.element&&this.element.setAttribute(a,c),this.alignByTranslate||(f[p]=((this[a]||0)-c)/2,this.attr(f)))}});y(a)&&w.attr({x:a,y:c});w.isImg=!0;
y(w.imgwidth)&&y(w.imgheight)?z():(w.attr({width:0,height:0}),G("img",{onload:function(){var b=B[m.chartIndex];0===this.width&&(J(this,{position:"absolute",top:"-999em"}),Q.body.appendChild(this));O[v]={width:this.width,height:this.height};w.imgwidth=this.width;w.imgheight=this.height;w.element&&z();this.parentNode&&this.parentNode.removeChild(this);m.imgCount--;if(!m.imgCount&&b&&!b.hasLoaded)b.onload()},src:v}),this.imgCount++)}return w},symbols:{circle:function(b,a,f,c){return this.arc(b+f/2,a+
c/2,f/2,c/2,{start:.5*Math.PI,end:2.5*Math.PI,open:!1})},square:function(b,a,f,c){return["M",b,a,"L",b+f,a,b+f,a+c,b,a+c,"Z"]},triangle:function(b,a,f,c){return["M",b+f/2,a,"L",b+f,a+c,b,a+c,"Z"]},"triangle-down":function(b,a,f,c){return["M",b,a,"L",b+f,a,b+f/2,a+c,"Z"]},diamond:function(b,a,f,c){return["M",b+f/2,a,"L",b+f,a+c/2,b+f/2,a+c,b,a+c/2,"Z"]},arc:function(b,a,c,p,e){var x=e.start,m=e.r||c,l=e.r||p||c,C=e.end-.001;c=e.innerR;p=f(e.open,.001>Math.abs(e.end-e.start-2*Math.PI));var k=Math.cos(x),
n=Math.sin(x),w=Math.cos(C);C=Math.sin(C);x=f(e.longArc,.001>e.end-x-Math.PI?0:1);m=["M",b+m*k,a+l*n,"A",m,l,0,x,f(e.clockwise,1),b+m*w,a+l*C];y(c)&&m.push(p?"M":"L",b+c*w,a+c*C,"A",c,c,0,x,y(e.clockwise)?1-e.clockwise:0,b+c*k,a+c*n);m.push(p?"":"Z");return m},callout:function(b,a,f,c,p){var e=Math.min(p&&p.r||0,f,c),x=e+6,l=p&&p.anchorX;p=p&&p.anchorY;var m=["M",b+e,a,"L",b+f-e,a,"C",b+f,a,b+f,a,b+f,a+e,"L",b+f,a+c-e,"C",b+f,a+c,b+f,a+c,b+f-e,a+c,"L",b+e,a+c,"C",b,a+c,b,a+c,b,a+c-e,"L",b,a+e,"C",
b,a,b,a,b+e,a];l&&l>f?p>a+x&&p<a+c-x?m.splice(13,3,"L",b+f,p-6,b+f+6,p,b+f,p+6,b+f,a+c-e):m.splice(13,3,"L",b+f,c/2,l,p,b+f,c/2,b+f,a+c-e):l&&0>l?p>a+x&&p<a+c-x?m.splice(33,3,"L",b,p+6,b-6,p,b,p-6,b,a+e):m.splice(33,3,"L",b,c/2,l,p,b,c/2,b,a+e):p&&p>c&&l>b+x&&l<b+f-x?m.splice(23,3,"L",l+6,a+c,l,a+c+6,l-6,a+c,b+e,a+c):p&&0>p&&l>b+x&&l<b+f-x&&m.splice(3,3,"L",l-6,a,l,a-6,l+6,a,f-e,a);return m}},clipRect:function(b,a,f,c){var p=w()+"-",e=this.createElement("clipPath").attr({id:p}).add(this.defs);b=this.rect(b,
a,f,c,0).add(e);b.id=p;b.clipPath=e;b.count=0;return b},text:function(b,a,f,c){var p={};if(c&&(this.allowHTML||!this.forExport))return this.html(b,a,f);p.x=Math.round(a||0);f&&(p.y=Math.round(f));y(b)&&(p.text=b);b=this.createElement("text").attr(p);c||(b.xSetter=function(b,a,f){var c=f.getElementsByTagName("tspan"),p=f.getAttribute(a),e;for(e=0;e<c.length;e++){var x=c[e];x.getAttribute(a)===p&&x.setAttribute(a,b)}f.setAttribute(a,b)});return b},fontMetrics:function(b,f){b=!this.styledMode&&/px/.test(b)||
!X.getComputedStyle?b||f&&f.style&&f.style.fontSize||this.style&&this.style.fontSize:f&&U.prototype.getStyle.call(f,"font-size");b=/px/.test(b)?a(b):12;f=24>b?b+3:Math.round(1.2*b);return{h:f,b:Math.round(.8*f),f:b}},rotCorr:function(b,a,f){var c=b;a&&f&&(c=Math.max(c*Math.cos(a*L),4));return{x:-b/3*Math.sin(a*L),y:c}},label:function(b,a,f,c,p,e,x,C,n){var m=this,w=m.styledMode,v=m.g("button"!==n&&"label"),F=v.text=m.text("",0,0,x).attr({zIndex:1}),z,O,q=0,R=3,B=0,d,N,X,V,L,t={},T,g,Q=/^url\((.*?)\)$/.test(c),
H=w||Q,K=function(){return w?z.strokeWidth()%2/2:(T?parseInt(T,10):0)%2/2};n&&v.addClass("highcharts-"+n);var ba=function(){var b=F.element.style,a={};O=("undefined"===typeof d||"undefined"===typeof N||L)&&y(F.textStr)&&F.getBBox();v.width=(d||O.width||0)+2*R+B;v.height=(N||O.height||0)+2*R;g=R+Math.min(m.fontMetrics(b&&b.fontSize,F).b,O?O.height:Infinity);H&&(z||(v.box=z=m.symbols[c]||Q?m.symbol(c):m.rect(),z.addClass(("button"===n?"":"highcharts-label-box")+(n?" highcharts-"+n+"-box":"")),z.add(v),
b=K(),a.x=b,a.y=(C?-g:0)+b),a.width=Math.round(v.width),a.height=Math.round(v.height),z.attr(h(a,t)),t={})};var u=function(){var b=B+R;var a=C?0:g;y(d)&&O&&("center"===L||"right"===L)&&(b+={center:.5,right:1}[L]*(d-O.width));if(b!==F.x||a!==F.y)F.attr("x",b),F.hasBoxWidthChanged&&(O=F.getBBox(!0),ba()),"undefined"!==typeof a&&F.attr("y",a);F.x=b;F.y=a};var Y=function(b,a){z?z.attr(b,a):t[b]=a};v.onAdd=function(){F.add(v);v.attr({text:b||0===b?b:"",x:a,y:f});z&&y(p)&&v.attr({anchorX:p,anchorY:e})};
v.widthSetter=function(b){d=P(b)?b:null};v.heightSetter=function(b){N=b};v["text-alignSetter"]=function(b){L=b};v.paddingSetter=function(b){y(b)&&b!==R&&(R=v.padding=b,u())};v.paddingLeftSetter=function(b){y(b)&&b!==B&&(B=b,u())};v.alignSetter=function(b){b={left:0,center:.5,right:1}[b];b!==q&&(q=b,O&&v.attr({x:X}))};v.textSetter=function(b){"undefined"!==typeof b&&F.attr({text:b});ba();u()};v["stroke-widthSetter"]=function(b,a){b&&(H=!0);T=this["stroke-width"]=b;Y(a,b)};w?v.rSetter=function(b,a){Y(a,
b)}:v.strokeSetter=v.fillSetter=v.rSetter=function(b,a){"r"!==a&&("fill"===a&&b&&(H=!0),v[a]=b);Y(a,b)};v.anchorXSetter=function(b,a){p=v.anchorX=b;Y(a,Math.round(b)-K()-X)};v.anchorYSetter=function(b,a){e=v.anchorY=b;Y(a,b-V)};v.xSetter=function(b){v.x=b;q&&(b-=q*((d||O.width)+2*R),v["forceAnimate:x"]=!0);X=Math.round(b);v.attr("translateX",X)};v.ySetter=function(b){V=v.y=Math.round(b);v.attr("translateY",V)};var D=v.css;x={css:function(b){if(b){var a={};b=k(b);v.textProps.forEach(function(f){"undefined"!==
typeof b[f]&&(a[f]=b[f],delete b[f])});F.css(a);"width"in a&&ba();"fontSize"in a&&(ba(),u())}return D.call(v,b)},getBBox:function(){return{width:O.width+2*R,height:O.height+2*R,x:O.x-R,y:O.y-R}},destroy:function(){l(v.element,"mouseenter");l(v.element,"mouseleave");F&&(F=F.destroy());z&&(z=z.destroy());U.prototype.destroy.call(v);v=m=ba=u=Y=null}};w||(x.shadow=function(b){b&&(ba(),z&&z.shadow(b));return v});return h(v,x)}});d.Renderer=g});S(r,"parts/Html.js",[r["parts/Globals.js"],r["parts/Utilities.js"]],
function(d,g){var r=g.attr,u=g.createElement,I=g.css,M=g.defined,E=g.extend,A=g.pick,G=g.pInt,J=d.isFirefox,y=d.isMS,t=d.isWebKit,D=d.SVGElement;g=d.SVGRenderer;var h=d.win;E(D.prototype,{htmlCss:function(d){var q="SPAN"===this.element.tagName&&d&&"width"in d,N=A(q&&d.width,void 0);if(q){delete d.width;this.textWidth=N;var e=!0}d&&"ellipsis"===d.textOverflow&&(d.whiteSpace="nowrap",d.overflow="hidden");this.styles=E(this.styles,d);I(this.element,d);e&&this.htmlUpdateTransform();return this},htmlGetBBox:function(){var d=
this.element;return{x:d.offsetLeft,y:d.offsetTop,width:d.offsetWidth,height:d.offsetHeight}},htmlUpdateTransform:function(){if(this.added){var d=this.renderer,q=this.element,h=this.translateX||0,e=this.translateY||0,c=this.x||0,k=this.y||0,n=this.textAlign||"left",f={left:0,center:.5,right:1}[n],a=this.styles,l=a&&a.whiteSpace;I(q,{marginLeft:h,marginTop:e});!d.styledMode&&this.shadows&&this.shadows.forEach(function(a){I(a,{marginLeft:h+1,marginTop:e+1})});this.inverted&&[].forEach.call(q.childNodes,
function(a){d.invertChild(a,q)});if("SPAN"===q.tagName){a=this.rotation;var v=this.textWidth&&G(this.textWidth),z=[a,n,q.innerHTML,this.textWidth,this.textAlign].join(),w;(w=v!==this.oldTextWidth)&&!(w=v>this.oldTextWidth)&&((w=this.textPxLength)||(I(q,{width:"",whiteSpace:l||"nowrap"}),w=q.offsetWidth),w=w>v);w&&(/[ \-]/.test(q.textContent||q.innerText)||"ellipsis"===q.style.textOverflow)?(I(q,{width:v+"px",display:"block",whiteSpace:l||"normal"}),this.oldTextWidth=v,this.hasBoxWidthChanged=!0):
this.hasBoxWidthChanged=!1;z!==this.cTT&&(l=d.fontMetrics(q.style.fontSize,q).b,!M(a)||a===(this.oldRotation||0)&&n===this.oldAlign||this.setSpanRotation(a,f,l),this.getSpanCorrection(!M(a)&&this.textPxLength||q.offsetWidth,l,f,a,n));I(q,{left:c+(this.xCorr||0)+"px",top:k+(this.yCorr||0)+"px"});this.cTT=z;this.oldRotation=a;this.oldAlign=n}}else this.alignOnAdd=!0},setSpanRotation:function(d,q,h){var e={},c=this.renderer.getTransformKey();e[c]=e.transform="rotate("+d+"deg)";e[c+(J?"Origin":"-origin")]=
e.transformOrigin=100*q+"% "+h+"px";I(this.element,e)},getSpanCorrection:function(d,q,h){this.xCorr=-d*h;this.yCorr=-q}});E(g.prototype,{getTransformKey:function(){return y&&!/Edge/.test(h.navigator.userAgent)?"-ms-transform":t?"-webkit-transform":J?"MozTransform":h.opera?"-o-transform":""},html:function(d,q,h){var e=this.createElement("span"),c=e.element,k=e.renderer,n=k.isSVG,f=function(a,f){["opacity","visibility"].forEach(function(c){a[c+"Setter"]=function(e,l,k){var v=a.div?a.div.style:f;D.prototype[c+
"Setter"].call(this,e,l,k);v&&(v[l]=e)}});a.addedSetters=!0};e.textSetter=function(a){a!==c.innerHTML&&(delete this.bBox,delete this.oldTextWidth);this.textStr=a;c.innerHTML=A(a,"");e.doTransform=!0};n&&f(e,e.element.style);e.xSetter=e.ySetter=e.alignSetter=e.rotationSetter=function(a,f){"align"===f&&(f="textAlign");e[f]=a;e.doTransform=!0};e.afterSetters=function(){this.doTransform&&(this.htmlUpdateTransform(),this.doTransform=!1)};e.attr({text:d,x:Math.round(q),y:Math.round(h)}).css({position:"absolute"});
k.styledMode||e.css({fontFamily:this.style.fontFamily,fontSize:this.style.fontSize});c.style.whiteSpace="nowrap";e.css=e.htmlCss;n&&(e.add=function(a){var l=k.box.parentNode,v=[];if(this.parentGroup=a){var n=a.div;if(!n){for(;a;)v.push(a),a=a.parentGroup;v.reverse().forEach(function(a){function c(f,c){a[c]=f;"translateX"===c?w.left=f+"px":w.top=f+"px";a.doTransform=!0}var k=r(a.element,"class");n=a.div=a.div||u("div",k?{className:k}:void 0,{position:"absolute",left:(a.translateX||0)+"px",top:(a.translateY||
0)+"px",display:a.display,opacity:a.opacity,pointerEvents:a.styles&&a.styles.pointerEvents},n||l);var w=n.style;E(a,{classSetter:function(a){return function(f){this.element.setAttribute("class",f);a.className=f}}(n),on:function(){v[0].div&&e.on.apply({element:v[0].div},arguments);return a},translateXSetter:c,translateYSetter:c});a.addedSetters||f(a)})}}else n=l;n.appendChild(c);e.added=!0;e.alignOnAdd&&e.htmlUpdateTransform();return e});return e}})});S(r,"parts/Tick.js",[r["parts/Globals.js"],r["parts/Utilities.js"]],
function(d,g){var r=g.clamp,u=g.correctFloat,I=g.defined,M=g.destroyObjectProperties,E=g.extend,A=g.isNumber,G=g.merge,J=g.objectEach,y=g.pick,t=d.fireEvent,D=d.deg2rad;g=function(){function h(d,q,h,e,c){this.isNewLabel=this.isNew=!0;this.axis=d;this.pos=q;this.type=h||"";this.parameters=c||{};this.tickmarkOffset=this.parameters.tickmarkOffset;this.options=this.parameters.options;h||e||this.addLabel()}h.prototype.addLabel=function(){var d=this,q=d.axis,h=q.options,e=q.chart,c=q.categories,k=q.names,
n=d.pos,f=y(d.options&&d.options.labels,h.labels),a=q.tickPositions,l=n===a[0],v=n===a[a.length-1];k=this.parameters.category||(c?y(c[n],k[n],n):n);var z=d.label;c=(!f.step||1===f.step)&&1===q.tickInterval;a=a.info;var w,B;if(q.isDatetimeAxis&&a){var L=e.time.resolveDTLFormat(h.dateTimeLabelFormats[!h.grid&&a.higherRanks[n]||a.unitName]);var t=L.main}d.isFirst=l;d.isLast=v;d.formatCtx={axis:q,chart:e,isFirst:l,isLast:v,dateTimeLabelFormat:t,tickPositionInfo:a,value:q.isLog?u(q.lin2log(k)):k,pos:n};
h=q.labelFormatter.call(d.formatCtx,this.formatCtx);if(B=L&&L.list)d.shortenLabel=function(){for(w=0;w<B.length;w++)if(z.attr({text:q.labelFormatter.call(E(d.formatCtx,{dateTimeLabelFormat:B[w]}))}),z.getBBox().width<q.getSlotWidth(d)-2*y(f.padding,5))return;z.attr({text:""})};c&&q._addedPlotLB&&q.isXAxis&&d.moveLabel(h,f);I(z)||d.movedLabel?z&&z.textStr!==h&&!c&&(!z.textWidth||f.style&&f.style.width||z.styles.width||z.css({width:null}),z.attr({text:h}),z.textPxLength=z.getBBox().width):(d.label=
z=d.createLabel({x:0,y:0},h,f),d.rotation=0)};h.prototype.createLabel=function(d,q,h){var e=this.axis,c=e.chart;if(d=I(q)&&h.enabled?c.renderer.text(q,d.x,d.y,h.useHTML).add(e.labelGroup):null)c.styledMode||d.css(G(h.style)),d.textPxLength=d.getBBox().width;return d};h.prototype.destroy=function(){M(this,this.axis)};h.prototype.getPosition=function(d,q,h,e){var c=this.axis,k=c.chart,n=e&&k.oldChartHeight||k.chartHeight;d={x:d?u(c.translate(q+h,null,null,e)+c.transB):c.left+c.offset+(c.opposite?(e&&
k.oldChartWidth||k.chartWidth)-c.right-c.left:0),y:d?n-c.bottom+c.offset-(c.opposite?c.height:0):u(n-c.translate(q+h,null,null,e)-c.transB)};d.y=r(d.y,-1E5,1E5);t(this,"afterGetPosition",{pos:d});return d};h.prototype.getLabelPosition=function(d,q,h,e,c,k,n,f){var a=this.axis,l=a.transA,v=a.isLinked&&a.linkedParent?a.linkedParent.reversed:a.reversed,z=a.staggerLines,w=a.tickRotCorr||{x:0,y:0},B=c.y,L=e||a.reserveSpaceDefault?0:-a.labelOffset*("center"===a.labelAlign?.5:1),N={};I(B)||(B=0===a.side?
h.rotation?-8:-h.getBBox().height:2===a.side?w.y+8:Math.cos(h.rotation*D)*(w.y-h.getBBox(!1,0).height/2));d=d+c.x+L+w.x-(k&&e?k*l*(v?-1:1):0);q=q+B-(k&&!e?k*l*(v?1:-1):0);z&&(h=n/(f||1)%z,a.opposite&&(h=z-h-1),q+=a.labelOffset/z*h);N.x=d;N.y=Math.round(q);t(this,"afterGetLabelPosition",{pos:N,tickmarkOffset:k,index:n});return N};h.prototype.getLabelSize=function(){return this.label?this.label.getBBox()[this.axis.horiz?"height":"width"]:0};h.prototype.getMarkPath=function(d,q,h,e,c,k){return k.crispLine(["M",
d,q,"L",d+(c?0:-h),q+(c?h:0)],e)};h.prototype.handleOverflow=function(d){var q=this.axis,h=q.options.labels,e=d.x,c=q.chart.chartWidth,k=q.chart.spacing,n=y(q.labelLeft,Math.min(q.pos,k[3]));k=y(q.labelRight,Math.max(q.isRadial?0:q.pos+q.len,c-k[1]));var f=this.label,a=this.rotation,l={left:0,center:.5,right:1}[q.labelAlign||f.attr("align")],v=f.getBBox().width,z=q.getSlotWidth(this),w=z,B=1,L,t={};if(a||"justify"!==y(h.overflow,"justify"))0>a&&e-l*v<n?L=Math.round(e/Math.cos(a*D)-n):0<a&&e+l*v>k&&
(L=Math.round((c-e)/Math.cos(a*D)));else if(c=e+(1-l)*v,e-l*v<n?w=d.x+w*(1-l)-n:c>k&&(w=k-d.x+w*l,B=-1),w=Math.min(z,w),w<z&&"center"===q.labelAlign&&(d.x+=B*(z-w-l*(z-Math.min(v,w)))),v>w||q.autoRotation&&(f.styles||{}).width)L=w;L&&(this.shortenLabel?this.shortenLabel():(t.width=Math.floor(L),(h.style||{}).textOverflow||(t.textOverflow="ellipsis"),f.css(t)))};h.prototype.moveLabel=function(d,q){var h=this,e=h.label,c=!1,k=h.axis,n=k.reversed,f=k.chart.inverted;e&&e.textStr===d?(h.movedLabel=e,c=
!0,delete h.label):J(k.ticks,function(a){c||a.isNew||a===h||!a.label||a.label.textStr!==d||(h.movedLabel=a.label,c=!0,a.labelPos=h.movedLabel.xy,delete a.label)});if(!c&&(h.labelPos||e)){var a=h.labelPos||e.xy;e=f?a.x:n?0:k.width+k.left;k=f?n?k.width+k.left:0:a.y;h.movedLabel=h.createLabel({x:e,y:k},d,q);h.movedLabel&&h.movedLabel.attr({opacity:0})}};h.prototype.render=function(h,q,t){var e=this.axis,c=e.horiz,k=this.pos,n=y(this.tickmarkOffset,e.tickmarkOffset);k=this.getPosition(c,k,n,q);n=k.x;
var f=k.y;e=c&&n===e.pos+e.len||!c&&f===e.pos?-1:1;t=y(t,1);this.isActive=!0;this.renderGridLine(q,t,e);this.renderMark(k,t,e);this.renderLabel(k,q,t,h);this.isNew=!1;d.fireEvent(this,"afterRender")};h.prototype.renderGridLine=function(d,q,h){var e=this.axis,c=e.options,k=this.gridLine,n={},f=this.pos,a=this.type,l=y(this.tickmarkOffset,e.tickmarkOffset),v=e.chart.renderer,z=a?a+"Grid":"grid",w=c[z+"LineWidth"],B=c[z+"LineColor"];c=c[z+"LineDashStyle"];k||(e.chart.styledMode||(n.stroke=B,n["stroke-width"]=
w,c&&(n.dashstyle=c)),a||(n.zIndex=1),d&&(q=0),this.gridLine=k=v.path().attr(n).addClass("highcharts-"+(a?a+"-":"")+"grid-line").add(e.gridGroup));if(k&&(h=e.getPlotLinePath({value:f+l,lineWidth:k.strokeWidth()*h,force:"pass",old:d})))k[d||this.isNew?"attr":"animate"]({d:h,opacity:q})};h.prototype.renderMark=function(d,q,h){var e=this.axis,c=e.options,k=e.chart.renderer,n=this.type,f=n?n+"Tick":"tick",a=e.tickSize(f),l=this.mark,v=!l,z=d.x;d=d.y;var w=y(c[f+"Width"],!n&&e.isXAxis?1:0);c=c[f+"Color"];
a&&(e.opposite&&(a[0]=-a[0]),v&&(this.mark=l=k.path().addClass("highcharts-"+(n?n+"-":"")+"tick").add(e.axisGroup),e.chart.styledMode||l.attr({stroke:c,"stroke-width":w})),l[v?"attr":"animate"]({d:this.getMarkPath(z,d,a[0],l.strokeWidth()*h,e.horiz,k),opacity:q}))};h.prototype.renderLabel=function(d,q,h,e){var c=this.axis,k=c.horiz,n=c.options,f=this.label,a=n.labels,l=a.step;c=y(this.tickmarkOffset,c.tickmarkOffset);var v=!0,z=d.x;d=d.y;f&&A(z)&&(f.xy=d=this.getLabelPosition(z,d,f,k,a,c,e,l),this.isFirst&&
!this.isLast&&!y(n.showFirstLabel,1)||this.isLast&&!this.isFirst&&!y(n.showLastLabel,1)?v=!1:!k||a.step||a.rotation||q||0===h||this.handleOverflow(d),l&&e%l&&(v=!1),v&&A(d.y)?(d.opacity=h,f[this.isNewLabel?"attr":"animate"](d),this.isNewLabel=!1):(f.attr("y",-9999),this.isNewLabel=!0))};h.prototype.replaceMovedLabel=function(){var d=this.label,q=this.axis,h=q.reversed,e=this.axis.chart.inverted;if(d&&!this.isNew){var c=e?d.xy.x:h?q.left:q.width+q.left;h=e?h?q.width+q.top:q.top:d.xy.y;d.animate({x:c,
y:h,opacity:0},void 0,d.destroy);delete this.label}q.isDirty=!0;this.label=this.movedLabel;delete this.movedLabel};return h}();d.Tick=g;return d.Tick});S(r,"parts/Time.js",[r["parts/Globals.js"],r["parts/Utilities.js"]],function(d,g){var r=g.defined,u=g.error,I=g.extend,M=g.isObject,E=g.merge,A=g.objectEach,G=g.pad,J=g.pick,y=g.splat,t=g.timeUnits,D=d.win;g=function(){function h(d){this.options={};this.variableTimezone=this.useUTC=!1;this.Date=D.Date;this.getTimezoneOffset=this.timezoneOffsetFunction();
this.update(d)}h.prototype.get=function(d,q){if(this.variableTimezone||this.timezoneOffset){var h=q.getTime(),e=h-this.getTimezoneOffset(q);q.setTime(e);d=q["getUTC"+d]();q.setTime(h);return d}return this.useUTC?q["getUTC"+d]():q["get"+d]()};h.prototype.set=function(d,q,h){if(this.variableTimezone||this.timezoneOffset){if("Milliseconds"===d||"Seconds"===d||"Minutes"===d)return q["setUTC"+d](h);var e=this.getTimezoneOffset(q);e=q.getTime()-e;q.setTime(e);q["setUTC"+d](h);d=this.getTimezoneOffset(q);
e=q.getTime()+d;return q.setTime(e)}return this.useUTC?q["setUTC"+d](h):q["set"+d](h)};h.prototype.update=function(d){var q=J(d&&d.useUTC,!0);this.options=d=E(!0,this.options||{},d);this.Date=d.Date||D.Date||Date;this.timezoneOffset=(this.useUTC=q)&&d.timezoneOffset;this.getTimezoneOffset=this.timezoneOffsetFunction();this.variableTimezone=!(q&&!d.getTimezoneOffset&&!d.timezone)};h.prototype.makeTime=function(h,q,t,e,c,k){if(this.useUTC){var n=this.Date.UTC.apply(0,arguments);var f=this.getTimezoneOffset(n);
n+=f;var a=this.getTimezoneOffset(n);f!==a?n+=a-f:f-36E5!==this.getTimezoneOffset(n-36E5)||d.isSafari||(n-=36E5)}else n=(new this.Date(h,q,J(t,1),J(e,0),J(c,0),J(k,0))).getTime();return n};h.prototype.timezoneOffsetFunction=function(){var d=this,q=this.options,h=D.moment;if(!this.useUTC)return function(e){return 6E4*(new Date(e.toString())).getTimezoneOffset()};if(q.timezone){if(h)return function(e){return 6E4*-h.tz(e,q.timezone).utcOffset()};u(25)}return this.useUTC&&q.getTimezoneOffset?function(e){return 6E4*
q.getTimezoneOffset(e.valueOf())}:function(){return 6E4*(d.timezoneOffset||0)}};h.prototype.dateFormat=function(h,q,t){var e;if(!r(q)||isNaN(q))return(null===(e=d.defaultOptions.lang)||void 0===e?void 0:e.invalidDate)||"";h=J(h,"%Y-%m-%d %H:%M:%S");var c=this;e=new this.Date(q);var k=this.get("Hours",e),n=this.get("Day",e),f=this.get("Date",e),a=this.get("Month",e),l=this.get("FullYear",e),v=d.defaultOptions.lang,z=null===v||void 0===v?void 0:v.weekdays,w=null===v||void 0===v?void 0:v.shortWeekdays;
e=I({a:w?w[n]:z[n].substr(0,3),A:z[n],d:G(f),e:G(f,2," "),w:n,b:v.shortMonths[a],B:v.months[a],m:G(a+1),o:a+1,y:l.toString().substr(2,2),Y:l,H:G(k),k:k,I:G(k%12||12),l:k%12||12,M:G(this.get("Minutes",e)),p:12>k?"AM":"PM",P:12>k?"am":"pm",S:G(e.getSeconds()),L:G(Math.floor(q%1E3),3)},d.dateFormats);A(e,function(a,f){for(;-1!==h.indexOf("%"+f);)h=h.replace("%"+f,"function"===typeof a?a.call(c,q):a)});return t?h.substr(0,1).toUpperCase()+h.substr(1):h};h.prototype.resolveDTLFormat=function(d){return M(d,
!0)?d:(d=y(d),{main:d[0],from:d[1],to:d[2]})};h.prototype.getTimeTicks=function(d,h,g,e){var c=this,k=[],n={};var f=new c.Date(h);var a=d.unitRange,l=d.count||1,v;e=J(e,1);if(r(h)){c.set("Milliseconds",f,a>=t.second?0:l*Math.floor(c.get("Milliseconds",f)/l));a>=t.second&&c.set("Seconds",f,a>=t.minute?0:l*Math.floor(c.get("Seconds",f)/l));a>=t.minute&&c.set("Minutes",f,a>=t.hour?0:l*Math.floor(c.get("Minutes",f)/l));a>=t.hour&&c.set("Hours",f,a>=t.day?0:l*Math.floor(c.get("Hours",f)/l));a>=t.day&&
c.set("Date",f,a>=t.month?1:Math.max(1,l*Math.floor(c.get("Date",f)/l)));if(a>=t.month){c.set("Month",f,a>=t.year?0:l*Math.floor(c.get("Month",f)/l));var z=c.get("FullYear",f)}a>=t.year&&c.set("FullYear",f,z-z%l);a===t.week&&(z=c.get("Day",f),c.set("Date",f,c.get("Date",f)-z+e+(z<e?-7:0)));z=c.get("FullYear",f);e=c.get("Month",f);var w=c.get("Date",f),q=c.get("Hours",f);h=f.getTime();c.variableTimezone&&(v=g-h>4*t.month||c.getTimezoneOffset(h)!==c.getTimezoneOffset(g));h=f.getTime();for(f=1;h<g;)k.push(h),
h=a===t.year?c.makeTime(z+f*l,0):a===t.month?c.makeTime(z,e+f*l):!v||a!==t.day&&a!==t.week?v&&a===t.hour&&1<l?c.makeTime(z,e,w,q+f*l):h+a*l:c.makeTime(z,e,w+f*l*(a===t.day?1:7)),f++;k.push(h);a<=t.hour&&1E4>k.length&&k.forEach(function(a){0===a%18E5&&"000000000"===c.dateFormat("%H%M%S%L",a)&&(n[a]="day")})}k.info=I(d,{higherRanks:n,totalRange:a*l});return k};h.defaultOptions={Date:void 0,getTimezoneOffset:void 0,timezone:void 0,timezoneOffset:0,useUTC:!0};return h}();d.Time=g;return d.Time});S(r,
"parts/Options.js",[r["parts/Globals.js"],r["parts/Time.js"],r["parts/Color.js"],r["parts/Utilities.js"]],function(d,g,r,u){r=r.parse;var I=u.merge;d.defaultOptions={colors:"#7cb5ec #434348 #90ed7d #f7a35c #8085e9 #f15c80 #e4d354 #2b908f #f45b5b #91e8e1".split(" "),symbols:["circle","diamond","square","triangle","triangle-down"],lang:{loading:"Loading...",months:"January February March April May June July August September October November December".split(" "),shortMonths:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),
weekdays:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),decimalPoint:".",numericSymbols:"kMGTPE".split(""),resetZoom:"Reset zoom",resetZoomTitle:"Reset zoom level 1:1",thousandsSep:" "},global:{},time:g.defaultOptions,chart:{styledMode:!1,borderRadius:0,colorCount:10,defaultSeriesType:"line",ignoreHiddenSeries:!0,spacing:[10,10,15,10],resetZoomButton:{theme:{zIndex:6},position:{align:"right",x:-10,y:10}},width:null,height:null,borderColor:"#335cad",backgroundColor:"#ffffff",
plotBorderColor:"#cccccc"},title:{text:"Chart title",align:"center",margin:15,widthAdjust:-44},subtitle:{text:"",align:"center",widthAdjust:-44},caption:{margin:15,text:"",align:"left",verticalAlign:"bottom"},plotOptions:{},labels:{style:{position:"absolute",color:"#333333"}},legend:{enabled:!0,align:"center",alignColumns:!0,layout:"horizontal",labelFormatter:function(){return this.name},borderColor:"#999999",borderRadius:0,navigation:{activeColor:"#003399",inactiveColor:"#cccccc"},itemStyle:{color:"#333333",
cursor:"pointer",fontSize:"12px",fontWeight:"bold",textOverflow:"ellipsis"},itemHoverStyle:{color:"#000000"},itemHiddenStyle:{color:"#cccccc"},shadow:!1,itemCheckboxStyle:{position:"absolute",width:"13px",height:"13px"},squareSymbol:!0,symbolPadding:5,verticalAlign:"bottom",x:0,y:0,title:{style:{fontWeight:"bold"}}},loading:{labelStyle:{fontWeight:"bold",position:"relative",top:"45%"},style:{position:"absolute",backgroundColor:"#ffffff",opacity:.5,textAlign:"center"}},tooltip:{enabled:!0,animation:d.svg,
borderRadius:3,dateTimeLabelFormats:{millisecond:"%A, %b %e, %H:%M:%S.%L",second:"%A, %b %e, %H:%M:%S",minute:"%A, %b %e, %H:%M",hour:"%A, %b %e, %H:%M",day:"%A, %b %e, %Y",week:"Week from %A, %b %e, %Y",month:"%B %Y",year:"%Y"},footerFormat:"",padding:8,snap:d.isTouchDevice?25:10,headerFormat:'<span style="font-size: 10px">{point.key}</span><br/>',pointFormat:'<span style="color:{point.color}">\u25cf</span> {series.name}: <b>{point.y}</b><br/>',backgroundColor:r("#f7f7f7").setOpacity(.85).get(),
borderWidth:1,shadow:!0,style:{color:"#333333",cursor:"default",fontSize:"12px",whiteSpace:"nowrap"}},credits:{enabled:!0,href:"https://www.highcharts.com?credits",position:{align:"right",x:-10,verticalAlign:"bottom",y:-5},style:{cursor:"pointer",color:"#999999",fontSize:"9px"},text:"Highcharts.com"}};d.setOptions=function(g){d.defaultOptions=I(!0,d.defaultOptions,g);(g.time||g.global)&&d.time.update(I(d.defaultOptions.global,d.defaultOptions.time,g.global,g.time));return d.defaultOptions};d.getOptions=
function(){return d.defaultOptions};d.defaultPlotOptions=d.defaultOptions.plotOptions;d.time=new g(I(d.defaultOptions.global,d.defaultOptions.time));d.dateFormat=function(g,u,A){return d.time.dateFormat(g,u,A)};""});S(r,"parts/Axis.js",[r["parts/Globals.js"],r["parts/Color.js"],r["parts/Tick.js"],r["parts/Utilities.js"]],function(d,g,r,u){var I=g.parse,M=u.addEvent,E=u.animObject,A=u.arrayMax,G=u.arrayMin,J=u.clamp,y=u.correctFloat,t=u.defined,D=u.destroyObjectProperties,h=u.error,N=u.extend,q=u.fireEvent,
P=u.format,e=u.getMagnitude,c=u.isArray,k=u.isFunction,n=u.isNumber,f=u.isString,a=u.merge,l=u.normalizeTickInterval,v=u.objectEach,z=u.pick,w=u.relativeLength,B=u.removeEvent,L=u.splat,Q=u.syncTimeout,H=d.defaultOptions,K=d.deg2rad;g=function(){this.init.apply(this,arguments)};N(g.prototype,{defaultOptions:{dateTimeLabelFormats:{millisecond:{main:"%H:%M:%S.%L",range:!1},second:{main:"%H:%M:%S",range:!1},minute:{main:"%H:%M",range:!1},hour:{main:"%H:%M",range:!1},day:{main:"%e. %b"},week:{main:"%e. %b"},
month:{main:"%b '%y"},year:{main:"%Y"}},endOnTick:!1,labels:{enabled:!0,indentation:10,x:0,style:{color:"#666666",cursor:"default",fontSize:"11px"}},maxPadding:.01,minorTickLength:2,minorTickPosition:"outside",minPadding:.01,showEmpty:!0,startOfWeek:1,startOnTick:!1,tickLength:10,tickPixelInterval:100,tickmarkPlacement:"between",tickPosition:"outside",title:{align:"middle",style:{color:"#666666"}},type:"linear",minorGridLineColor:"#f2f2f2",minorGridLineWidth:1,minorTickColor:"#999999",lineColor:"#ccd6eb",
lineWidth:1,gridLineColor:"#e6e6e6",tickColor:"#ccd6eb"},defaultYAxisOptions:{endOnTick:!0,maxPadding:.05,minPadding:.05,tickPixelInterval:72,showLastLabel:!0,labels:{x:-8},startOnTick:!0,title:{rotation:270,text:"Values"},stackLabels:{allowOverlap:!1,enabled:!1,crop:!0,overflow:"justify",formatter:function(){var a=this.axis.chart.numberFormatter;return a(this.total,-1)},style:{color:"#000000",fontSize:"11px",fontWeight:"bold",textOutline:"1px contrast"}},gridLineWidth:1,lineWidth:0},defaultLeftAxisOptions:{labels:{x:-15},
title:{rotation:270}},defaultRightAxisOptions:{labels:{x:15},title:{rotation:90}},defaultBottomAxisOptions:{labels:{autoRotation:[-45],x:0},margin:15,title:{rotation:0}},defaultTopAxisOptions:{labels:{autoRotation:[-45],x:0},margin:15,title:{rotation:0}},init:function(a,b){var f=b.isX,c=this;c.chart=a;c.horiz=a.inverted&&!c.isZAxis?!f:f;c.isXAxis=f;c.coll=c.coll||(f?"xAxis":"yAxis");q(this,"init",{userOptions:b});c.opposite=b.opposite;c.side=b.side||(c.horiz?c.opposite?0:2:c.opposite?1:3);c.setOptions(b);
var p=this.options,e=p.type;c.labelFormatter=p.labels.formatter||c.defaultLabelFormatter;c.userOptions=b;c.minPixelPadding=0;c.reversed=p.reversed;c.visible=!1!==p.visible;c.zoomEnabled=!1!==p.zoomEnabled;c.hasNames="category"===e||!0===p.categories;c.categories=p.categories||c.hasNames;c.names||(c.names=[],c.names.keys={});c.plotLinesAndBandsGroups={};c.isLog="logarithmic"===e;c.isDatetimeAxis="datetime"===e;c.positiveValuesOnly=c.isLog&&!c.allowNegativeLog;c.isLinked=t(p.linkedTo);c.ticks={};c.labelEdge=
[];c.minorTicks={};c.plotLinesAndBands=[];c.alternateBands={};c.len=0;c.minRange=c.userMinRange=p.minRange||p.maxZoom;c.range=p.range;c.offset=p.offset||0;c.stacks={};c.oldStacks={};c.stacksTouched=0;c.max=null;c.min=null;c.crosshair=z(p.crosshair,L(a.options.tooltip.crosshairs)[f?0:1],!1);b=c.options.events;-1===a.axes.indexOf(c)&&(f?a.axes.splice(a.xAxis.length,0,c):a.axes.push(c),a[c.coll].push(c));c.series=c.series||[];a.inverted&&!c.isZAxis&&f&&"undefined"===typeof c.reversed&&(c.reversed=!0);
v(b,function(b,a){k(b)&&M(c,a,b)});c.lin2log=p.linearToLogConverter||c.lin2log;c.isLog&&(c.val2lin=c.log2lin,c.lin2val=c.lin2log);q(this,"afterInit")},setOptions:function(c){this.options=a(this.defaultOptions,"yAxis"===this.coll&&this.defaultYAxisOptions,[this.defaultTopAxisOptions,this.defaultRightAxisOptions,this.defaultBottomAxisOptions,this.defaultLeftAxisOptions][this.side],a(H[this.coll],c));q(this,"afterSetOptions",{userOptions:c})},defaultLabelFormatter:function(){var a=this.axis,b=this.value,
c=a.chart.time,f=a.categories,e=this.dateTimeLabelFormat,l=H.lang,k=l.numericSymbols;l=l.numericSymbolMagnitude||1E3;var v=k&&k.length,m=a.options.labels.format;a=a.isLog?Math.abs(b):a.tickInterval;var n=this.chart,d=n.numberFormatter;if(m)var w=P(m,this,n);else if(f)w=b;else if(e)w=c.dateFormat(e,b);else if(v&&1E3<=a)for(;v--&&"undefined"===typeof w;)c=Math.pow(l,v+1),a>=c&&0===10*b%c&&null!==k[v]&&0!==b&&(w=d(b/c,-1)+k[v]);"undefined"===typeof w&&(w=1E4<=Math.abs(b)?d(b,-1):d(b,-1,void 0,""));return w},
getSeriesExtremes:function(){var a=this,b=a.chart,c;q(this,"getSeriesExtremes",null,function(){a.hasVisibleSeries=!1;a.dataMin=a.dataMax=a.threshold=null;a.softThreshold=!a.isXAxis;a.buildStacks&&a.buildStacks();a.series.forEach(function(f){if(f.visible||!b.options.chart.ignoreHiddenSeries){var e=f.options,p=e.threshold;a.hasVisibleSeries=!0;a.positiveValuesOnly&&0>=p&&(p=null);if(a.isXAxis){if(e=f.xData,e.length){c=f.getXExtremes(e);var x=c.min;var l=c.max;n(x)||x instanceof Date||(e=e.filter(n),
c=f.getXExtremes(e),x=c.min,l=c.max);e.length&&(a.dataMin=Math.min(z(a.dataMin,x),x),a.dataMax=Math.max(z(a.dataMax,l),l))}}else if(f.getExtremes(),l=f.dataMax,x=f.dataMin,t(x)&&t(l)&&(a.dataMin=Math.min(z(a.dataMin,x),x),a.dataMax=Math.max(z(a.dataMax,l),l)),t(p)&&(a.threshold=p),!e.softThreshold||a.positiveValuesOnly)a.softThreshold=!1}})});q(this,"afterGetSeriesExtremes")},translate:function(a,b,c,f,e,l){var p=this.linkedParent||this,x=1,m=0,C=f?p.oldTransA:p.transA;f=f?p.oldMin:p.min;var k=p.minPixelPadding;
e=(p.isOrdinal||p.isBroken||p.isLog&&e)&&p.lin2val;C||(C=p.transA);c&&(x*=-1,m=p.len);p.reversed&&(x*=-1,m-=x*(p.sector||p.len));b?(a=(a*x+m-k)/C+f,e&&(a=p.lin2val(a))):(e&&(a=p.val2lin(a)),a=n(f)?x*(a-f)*C+m+x*k+(n(l)?C*l:0):void 0);return a},toPixels:function(a,b){return this.translate(a,!1,!this.horiz,null,!0)+(b?0:this.pos)},toValue:function(a,b){return this.translate(a-(b?0:this.pos),!0,!this.horiz,null,!0)},getPlotLinePath:function(a){var b=this,c=b.chart,f=b.left,e=b.top,p=a.old,l=a.value,
k=a.translatedValue,m=a.lineWidth,v=a.force,d,w,F,h,B=p&&c.oldChartHeight||c.chartHeight,L=p&&c.oldChartWidth||c.chartWidth,t,g=b.transB,H=function(b,a,c){if("pass"!==v&&b<a||b>c)v?b=J(b,a,c):t=!0;return b};a={value:l,lineWidth:m,old:p,force:v,acrossPanes:a.acrossPanes,translatedValue:k};q(this,"getPlotLinePath",a,function(a){k=z(k,b.translate(l,null,null,p));k=J(k,-1E5,1E5);d=F=Math.round(k+g);w=h=Math.round(B-k-g);n(k)?b.horiz?(w=e,h=B-b.bottom,d=F=H(d,f,f+b.width)):(d=f,F=L-b.right,w=h=H(w,e,e+
b.height)):(t=!0,v=!1);a.path=t&&!v?null:c.renderer.crispLine(["M",d,w,"L",F,h],m||1)});return a.path},getLinearTickPositions:function(a,b,c){var f=y(Math.floor(b/a)*a);c=y(Math.ceil(c/a)*a);var e=[],p;y(f+a)===f&&(p=20);if(this.single)return[b];for(b=f;b<=c;){e.push(b);b=y(b+a,p);if(b===l)break;var l=b}return e},getMinorTickInterval:function(){var a=this.options;return!0===a.minorTicks?z(a.minorTickInterval,"auto"):!1===a.minorTicks?null:a.minorTickInterval},getMinorTickPositions:function(){var a=
this,b=a.options,c=a.tickPositions,f=a.minorTickInterval,e=[],l=a.pointRangePadding||0,k=a.min-l;l=a.max+l;var v=l-k;if(v&&v/f<a.len/3)if(a.isLog)this.paddedTicks.forEach(function(b,c,p){c&&e.push.apply(e,a.getLogTickPositions(f,p[c-1],p[c],!0))});else if(a.isDatetimeAxis&&"auto"===this.getMinorTickInterval())e=e.concat(a.getTimeTicks(a.normalizeTimeTickInterval(f),k,l,b.startOfWeek));else for(b=k+(c[0]-k)%f;b<=l&&b!==e[0];b+=f)e.push(b);0!==e.length&&a.trimTicks(e);return e},adjustForMinRange:function(){var a=
this.options,b=this.min,c=this.max,f,e,l,k,v;this.isXAxis&&"undefined"===typeof this.minRange&&!this.isLog&&(t(a.min)||t(a.max)?this.minRange=null:(this.series.forEach(function(b){k=b.xData;for(e=v=b.xIncrement?1:k.length-1;0<e;e--)if(l=k[e]-k[e-1],"undefined"===typeof f||l<f)f=l}),this.minRange=Math.min(5*f,this.dataMax-this.dataMin)));if(c-b<this.minRange){var m=this.dataMax-this.dataMin>=this.minRange;var n=this.minRange;var d=(n-c+b)/2;d=[b-d,z(a.min,b-d)];m&&(d[2]=this.isLog?this.log2lin(this.dataMin):
this.dataMin);b=A(d);c=[b+n,z(a.max,b+n)];m&&(c[2]=this.isLog?this.log2lin(this.dataMax):this.dataMax);c=G(c);c-b<n&&(d[0]=c-n,d[1]=z(a.min,c-n),b=A(d))}this.min=b;this.max=c},getClosest:function(){var a;this.categories?a=1:this.series.forEach(function(b){var c=b.closestPointRange,f=b.visible||!b.chart.options.chart.ignoreHiddenSeries;!b.noSharedTooltip&&t(c)&&f&&(a=t(a)?Math.min(a,c):c)});return a},nameToX:function(a){var b=c(this.categories),f=b?this.categories:this.names,e=a.options.x;a.series.requireSorting=
!1;t(e)||(e=!1===this.options.uniqueNames?a.series.autoIncrement():b?f.indexOf(a.name):z(f.keys[a.name],-1));if(-1===e){if(!b)var p=f.length}else p=e;"undefined"!==typeof p&&(this.names[p]=a.name,this.names.keys[a.name]=p);return p},updateNames:function(){var a=this,b=this.names;0<b.length&&(Object.keys(b.keys).forEach(function(a){delete b.keys[a]}),b.length=0,this.minRange=this.userMinRange,(this.series||[]).forEach(function(b){b.xIncrement=null;if(!b.points||b.isDirtyData)a.max=Math.max(a.max,b.xData.length-
1),b.processData(),b.generatePoints();b.data.forEach(function(c,f){if(c&&c.options&&"undefined"!==typeof c.name){var e=a.nameToX(c);"undefined"!==typeof e&&e!==c.x&&(c.x=e,b.xData[f]=e)}})}))},setAxisTranslation:function(a){var b=this,c=b.max-b.min,e=b.axisPointRange||0,p=0,l=0,k=b.linkedParent,v=!!b.categories,m=b.transA,d=b.isXAxis;if(d||v||e){var n=b.getClosest();k?(p=k.minPointOffset,l=k.pointRangePadding):b.series.forEach(function(a){var c=v?1:d?z(a.options.pointRange,n,0):b.axisPointRange||
0,x=a.options.pointPlacement;e=Math.max(e,c);if(!b.single||v)a=a.is("xrange")?!d:d,p=Math.max(p,a&&f(x)?0:c/2),l=Math.max(l,a&&"on"===x?0:c)});k=b.ordinalSlope&&n?b.ordinalSlope/n:1;b.minPointOffset=p*=k;b.pointRangePadding=l*=k;b.pointRange=Math.min(e,b.single&&v?1:c);d&&(b.closestPointRange=n)}a&&(b.oldTransA=m);b.translationSlope=b.transA=m=b.staticScale||b.len/(c+l||1);b.transB=b.horiz?b.left:b.bottom;b.minPixelPadding=m*p;q(this,"afterSetAxisTranslation")},minFromRange:function(){return this.max-
this.range},setTickInterval:function(a){var b=this,c=b.chart,f=b.options,p=b.isLog,k=b.isDatetimeAxis,v=b.isXAxis,d=b.isLinked,m=f.maxPadding,w=f.minPadding,B=f.tickInterval,L=f.tickPixelInterval,F=b.categories,V=n(b.threshold)?b.threshold:null,g=b.softThreshold;k||F||d||this.getTickAmount();var H=z(b.userMin,f.min);var K=z(b.userMax,f.max);if(d){b.linkedParent=c[b.coll][f.linkedTo];var Q=b.linkedParent.getExtremes();b.min=z(Q.min,Q.dataMin);b.max=z(Q.max,Q.dataMax);f.type!==b.linkedParent.options.type&&
h(11,1,c)}else{if(!g&&t(V))if(b.dataMin>=V)Q=V,w=0;else if(b.dataMax<=V){var u=V;m=0}b.min=z(H,Q,b.dataMin);b.max=z(K,u,b.dataMax)}p&&(b.positiveValuesOnly&&!a&&0>=Math.min(b.min,z(b.dataMin,b.min))&&h(10,1,c),b.min=y(b.log2lin(b.min),16),b.max=y(b.log2lin(b.max),16));b.range&&t(b.max)&&(b.userMin=b.min=H=Math.max(b.dataMin,b.minFromRange()),b.userMax=K=b.max,b.range=null);q(b,"foundExtremes");b.beforePadding&&b.beforePadding();b.adjustForMinRange();!(F||b.axisPointRange||b.usePercentage||d)&&t(b.min)&&
t(b.max)&&(c=b.max-b.min)&&(!t(H)&&w&&(b.min-=c*w),!t(K)&&m&&(b.max+=c*m));n(b.userMin)||(n(f.softMin)&&f.softMin<b.min&&(b.min=H=f.softMin),n(f.floor)&&(b.min=Math.max(b.min,f.floor)));n(b.userMax)||(n(f.softMax)&&f.softMax>b.max&&(b.max=K=f.softMax),n(f.ceiling)&&(b.max=Math.min(b.max,f.ceiling)));g&&t(b.dataMin)&&(V=V||0,!t(H)&&b.min<V&&b.dataMin>=V?b.min=b.options.minRange?Math.min(V,b.max-b.minRange):V:!t(K)&&b.max>V&&b.dataMax<=V&&(b.max=b.options.minRange?Math.max(V,b.min+b.minRange):V));b.tickInterval=
b.min===b.max||"undefined"===typeof b.min||"undefined"===typeof b.max?1:d&&!B&&L===b.linkedParent.options.tickPixelInterval?B=b.linkedParent.tickInterval:z(B,this.tickAmount?(b.max-b.min)/Math.max(this.tickAmount-1,1):void 0,F?1:(b.max-b.min)*L/Math.max(b.len,L));v&&!a&&b.series.forEach(function(a){a.processData(b.min!==b.oldMin||b.max!==b.oldMax)});b.setAxisTranslation(!0);b.beforeSetTickPositions&&b.beforeSetTickPositions();b.postProcessTickInterval&&(b.tickInterval=b.postProcessTickInterval(b.tickInterval));
b.pointRange&&!B&&(b.tickInterval=Math.max(b.pointRange,b.tickInterval));a=z(f.minTickInterval,b.isDatetimeAxis&&b.closestPointRange);!B&&b.tickInterval<a&&(b.tickInterval=a);k||p||B||(b.tickInterval=l(b.tickInterval,null,e(b.tickInterval),z(f.allowDecimals,!(.5<b.tickInterval&&5>b.tickInterval&&1E3<b.max&&9999>b.max)),!!this.tickAmount));this.tickAmount||(b.tickInterval=b.unsquish());this.setTickPositions()},setTickPositions:function(){var a=this.options,b=a.tickPositions;var c=this.getMinorTickInterval();
var f=a.tickPositioner,e=a.startOnTick,l=a.endOnTick;this.tickmarkOffset=this.categories&&"between"===a.tickmarkPlacement&&1===this.tickInterval?.5:0;this.minorTickInterval="auto"===c&&this.tickInterval?this.tickInterval/5:c;this.single=this.min===this.max&&t(this.min)&&!this.tickAmount&&(parseInt(this.min,10)===this.min||!1!==a.allowDecimals);this.tickPositions=c=b&&b.slice();!c&&(!this.ordinalPositions&&(this.max-this.min)/this.tickInterval>Math.max(2*this.len,200)?(c=[this.min,this.max],h(19,!1,
this.chart)):c=this.isDatetimeAxis?this.getTimeTicks(this.normalizeTimeTickInterval(this.tickInterval,a.units),this.min,this.max,a.startOfWeek,this.ordinalPositions,this.closestPointRange,!0):this.isLog?this.getLogTickPositions(this.tickInterval,this.min,this.max):this.getLinearTickPositions(this.tickInterval,this.min,this.max),c.length>this.len&&(c=[c[0],c.pop()],c[0]===c[1]&&(c.length=1)),this.tickPositions=c,f&&(f=f.apply(this,[this.min,this.max])))&&(this.tickPositions=c=f);this.paddedTicks=c.slice(0);
this.trimTicks(c,e,l);this.isLinked||(this.single&&2>c.length&&!this.categories&&!this.series.some(function(b){return b.is("heatmap")&&"between"===b.options.pointPlacement})&&(this.min-=.5,this.max+=.5),b||f||this.adjustTickAmount());q(this,"afterSetTickPositions")},trimTicks:function(a,b,c){var f=a[0],e=a[a.length-1],p=!this.isOrdinal&&this.minPointOffset||0;q(this,"trimTicks");if(!this.isLinked){if(b&&-Infinity!==f)this.min=f;else for(;this.min-p>a[0];)a.shift();if(c)this.max=e;else for(;this.max+
p<a[a.length-1];)a.pop();0===a.length&&t(f)&&!this.options.tickPositions&&a.push((e+f)/2)}},alignToOthers:function(){var a={},b,c=this.options;!1===this.chart.options.chart.alignTicks||!1===c.alignTicks||!1===c.startOnTick||!1===c.endOnTick||this.isLog||this.chart[this.coll].forEach(function(c){var f=c.options;f=[c.horiz?f.left:f.top,f.width,f.height,f.pane].join();c.series.length&&(a[f]?b=!0:a[f]=1)});return b},getTickAmount:function(){var a=this.options,b=a.tickAmount,c=a.tickPixelInterval;!t(a.tickInterval)&&
this.len<c&&!this.isRadial&&!this.isLog&&a.startOnTick&&a.endOnTick&&(b=2);!b&&this.alignToOthers()&&(b=Math.ceil(this.len/c)+1);4>b&&(this.finalTickAmt=b,b=5);this.tickAmount=b},adjustTickAmount:function(){var a=this.options,b=this.tickInterval,c=this.tickPositions,f=this.tickAmount,e=this.finalTickAmt,l=c&&c.length,k=z(this.threshold,this.softThreshold?0:null),v;if(this.hasData()){if(l<f){for(v=this.min;c.length<f;)c.length%2||v===k?c.push(y(c[c.length-1]+b)):c.unshift(y(c[0]-b));this.transA*=(l-
1)/(f-1);this.min=a.startOnTick?c[0]:Math.min(this.min,c[0]);this.max=a.endOnTick?c[c.length-1]:Math.max(this.max,c[c.length-1])}else l>f&&(this.tickInterval*=2,this.setTickPositions());if(t(e)){for(b=a=c.length;b--;)(3===e&&1===b%2||2>=e&&0<b&&b<a-1)&&c.splice(b,1);this.finalTickAmt=void 0}}},setScale:function(){var a=this.series.some(function(b){return b.isDirtyData||b.isDirty||b.xAxis&&b.xAxis.isDirty}),b;this.oldMin=this.min;this.oldMax=this.max;this.oldAxisLength=this.len;this.setAxisSize();
(b=this.len!==this.oldAxisLength)||a||this.isLinked||this.forceRedraw||this.userMin!==this.oldUserMin||this.userMax!==this.oldUserMax||this.alignToOthers()?(this.resetStacks&&this.resetStacks(),this.forceRedraw=!1,this.getSeriesExtremes(),this.setTickInterval(),this.oldUserMin=this.userMin,this.oldUserMax=this.userMax,this.isDirty||(this.isDirty=b||this.min!==this.oldMin||this.max!==this.oldMax)):this.cleanStacks&&this.cleanStacks();q(this,"afterSetScale")},setExtremes:function(a,b,c,f,e){var p=this,
l=p.chart;c=z(c,!0);p.series.forEach(function(b){delete b.kdTree});e=N(e,{min:a,max:b});q(p,"setExtremes",e,function(){p.userMin=a;p.userMax=b;p.eventArgs=e;c&&l.redraw(f)})},zoom:function(a,b){var c=this.dataMin,f=this.dataMax,e=this.options,p=Math.min(c,z(e.min,c)),l=Math.max(f,z(e.max,f));a={newMin:a,newMax:b};q(this,"zoom",a,function(b){var a=b.newMin,e=b.newMax;if(a!==this.min||e!==this.max)this.allowZoomOutside||(t(c)&&(a<p&&(a=p),a>l&&(a=l)),t(f)&&(e<p&&(e=p),e>l&&(e=l))),this.displayBtn="undefined"!==
typeof a||"undefined"!==typeof e,this.setExtremes(a,e,!1,void 0,{trigger:"zoom"});b.zoomed=!0});return a.zoomed},setAxisSize:function(){var a=this.chart,b=this.options,c=b.offsets||[0,0,0,0],f=this.horiz,e=this.width=Math.round(w(z(b.width,a.plotWidth-c[3]+c[1]),a.plotWidth)),l=this.height=Math.round(w(z(b.height,a.plotHeight-c[0]+c[2]),a.plotHeight)),k=this.top=Math.round(w(z(b.top,a.plotTop+c[0]),a.plotHeight,a.plotTop));b=this.left=Math.round(w(z(b.left,a.plotLeft+c[3]),a.plotWidth,a.plotLeft));
this.bottom=a.chartHeight-l-k;this.right=a.chartWidth-e-b;this.len=Math.max(f?e:l,0);this.pos=f?b:k},getExtremes:function(){var a=this.isLog;return{min:a?y(this.lin2log(this.min)):this.min,max:a?y(this.lin2log(this.max)):this.max,dataMin:this.dataMin,dataMax:this.dataMax,userMin:this.userMin,userMax:this.userMax}},getThreshold:function(a){var b=this.isLog,c=b?this.lin2log(this.min):this.min;b=b?this.lin2log(this.max):this.max;null===a||-Infinity===a?a=c:Infinity===a?a=b:c>a?a=c:b<a&&(a=b);return this.translate(a,
0,1,0,1)},autoLabelAlign:function(a){var b=(z(a,0)-90*this.side+720)%360;a={align:"center"};q(this,"autoLabelAlign",a,function(a){15<b&&165>b?a.align="right":195<b&&345>b&&(a.align="left")});return a.align},tickSize:function(a){var b=this.options,c=b[a+"Length"],f=z(b[a+"Width"],"tick"===a&&this.isXAxis&&!this.categories?1:0);if(f&&c){"inside"===b[a+"Position"]&&(c=-c);var e=[c,f]}a={tickSize:e};q(this,"afterTickSize",a);return a.tickSize},labelMetrics:function(){var a=this.tickPositions&&this.tickPositions[0]||
0;return this.chart.renderer.fontMetrics(this.options.labels.style&&this.options.labels.style.fontSize,this.ticks[a]&&this.ticks[a].label)},unsquish:function(){var a=this.options.labels,b=this.horiz,c=this.tickInterval,f=c,e=this.len/(((this.categories?1:0)+this.max-this.min)/c),l,k=a.rotation,v=this.labelMetrics(),m,d=Number.MAX_VALUE,n,w=this.max-this.min,F=function(b){var a=b/(e||1);a=1<a?Math.ceil(a):1;a*c>w&&Infinity!==b&&Infinity!==e&&w&&(a=Math.ceil(w/c));return y(a*c)};b?(n=!a.staggerLines&&
!a.step&&(t(k)?[k]:e<z(a.autoRotationLimit,80)&&a.autoRotation))&&n.forEach(function(b){if(b===k||b&&-90<=b&&90>=b){m=F(Math.abs(v.h/Math.sin(K*b)));var a=m+Math.abs(b/360);a<d&&(d=a,l=b,f=m)}}):a.step||(f=F(v.h));this.autoRotation=n;this.labelRotation=z(l,k);return f},getSlotWidth:function(a){var b=this.chart,c=this.horiz,f=this.options.labels,e=Math.max(this.tickPositions.length-(this.categories?0:1),1),l=b.margin[3];return a&&a.slotWidth||c&&2>(f.step||0)&&!f.rotation&&(this.staggerLines||1)*this.len/
e||!c&&(f.style&&parseInt(f.style.width,10)||l&&l-b.spacing[3]||.33*b.chartWidth)},renderUnsquish:function(){var a=this.chart,b=a.renderer,c=this.tickPositions,e=this.ticks,l=this.options.labels,k=l&&l.style||{},v=this.horiz,d=this.getSlotWidth(),m=Math.max(1,Math.round(d-2*(l.padding||5))),n={},w=this.labelMetrics(),h=l.style&&l.style.textOverflow,F=0;f(l.rotation)||(n.rotation=l.rotation||0);c.forEach(function(b){b=e[b];b.movedLabel&&b.replaceMovedLabel();b&&b.label&&b.label.textPxLength>F&&(F=
b.label.textPxLength)});this.maxLabelLength=F;if(this.autoRotation)F>m&&F>w.h?n.rotation=this.labelRotation:this.labelRotation=0;else if(d){var z=m;if(!h){var q="clip";for(m=c.length;!v&&m--;){var B=c[m];if(B=e[B].label)B.styles&&"ellipsis"===B.styles.textOverflow?B.css({textOverflow:"clip"}):B.textPxLength>d&&B.css({width:d+"px"}),B.getBBox().height>this.len/c.length-(w.h-w.f)&&(B.specificTextOverflow="ellipsis")}}}n.rotation&&(z=F>.5*a.chartHeight?.33*a.chartHeight:F,h||(q="ellipsis"));if(this.labelAlign=
l.align||this.autoLabelAlign(this.labelRotation))n.align=this.labelAlign;c.forEach(function(b){var a=(b=e[b])&&b.label,c=k.width,f={};a&&(a.attr(n),b.shortenLabel?b.shortenLabel():z&&!c&&"nowrap"!==k.whiteSpace&&(z<a.textPxLength||"SPAN"===a.element.tagName)?(f.width=z,h||(f.textOverflow=a.specificTextOverflow||q),a.css(f)):a.styles&&a.styles.width&&!f.width&&!c&&a.css({width:null}),delete a.specificTextOverflow,b.rotation=n.rotation)},this);this.tickRotCorr=b.rotCorr(w.b,this.labelRotation||0,0!==
this.side)},hasData:function(){return this.series.some(function(a){return a.hasData()})||this.options.showEmpty&&t(this.min)&&t(this.max)},addTitle:function(c){var b=this.chart.renderer,f=this.horiz,e=this.opposite,l=this.options.title,p,k=this.chart.styledMode;this.axisTitle||((p=l.textAlign)||(p=(f?{low:"left",middle:"center",high:"right"}:{low:e?"right":"left",middle:"center",high:e?"left":"right"})[l.align]),this.axisTitle=b.text(l.text,0,0,l.useHTML).attr({zIndex:7,rotation:l.rotation||0,align:p}).addClass("highcharts-axis-title"),
k||this.axisTitle.css(a(l.style)),this.axisTitle.add(this.axisGroup),this.axisTitle.isNew=!0);k||l.style.width||this.isRadial||this.axisTitle.css({width:this.len});this.axisTitle[c?"show":"hide"](c)},generateTick:function(a){var b=this.ticks;b[a]?b[a].addLabel():b[a]=new r(this,a)},getOffset:function(){var a=this,b=a.chart,c=b.renderer,f=a.options,e=a.tickPositions,l=a.ticks,k=a.horiz,d=a.side,m=b.inverted&&!a.isZAxis?[1,0,3,2][d]:d,n,w=0,h=0,F=f.title,B=f.labels,L=0,g=b.axisOffset;b=b.clipOffset;
var H=[-1,1,1,-1][d],K=f.className,Q=a.axisParent;var y=a.hasData();a.showAxis=n=y||z(f.showEmpty,!0);a.staggerLines=a.horiz&&B.staggerLines;a.axisGroup||(a.gridGroup=c.g("grid").attr({zIndex:f.gridZIndex||1}).addClass("highcharts-"+this.coll.toLowerCase()+"-grid "+(K||"")).add(Q),a.axisGroup=c.g("axis").attr({zIndex:f.zIndex||2}).addClass("highcharts-"+this.coll.toLowerCase()+" "+(K||"")).add(Q),a.labelGroup=c.g("axis-labels").attr({zIndex:B.zIndex||7}).addClass("highcharts-"+a.coll.toLowerCase()+
"-labels "+(K||"")).add(Q));y||a.isLinked?(e.forEach(function(b,c){a.generateTick(b,c)}),a.renderUnsquish(),a.reserveSpaceDefault=0===d||2===d||{1:"left",3:"right"}[d]===a.labelAlign,z(B.reserveSpace,"center"===a.labelAlign?!0:null,a.reserveSpaceDefault)&&e.forEach(function(b){L=Math.max(l[b].getLabelSize(),L)}),a.staggerLines&&(L*=a.staggerLines),a.labelOffset=L*(a.opposite?-1:1)):v(l,function(b,a){b.destroy();delete l[a]});if(F&&F.text&&!1!==F.enabled&&(a.addTitle(n),n&&!1!==F.reserveSpace)){a.titleOffset=
w=a.axisTitle.getBBox()[k?"height":"width"];var u=F.offset;h=t(u)?0:z(F.margin,k?5:10)}a.renderLine();a.offset=H*z(f.offset,g[d]?g[d]+(f.margin||0):0);a.tickRotCorr=a.tickRotCorr||{x:0,y:0};c=0===d?-a.labelMetrics().h:2===d?a.tickRotCorr.y:0;h=Math.abs(L)+h;L&&(h=h-c+H*(k?z(B.y,a.tickRotCorr.y+8*H):B.x));a.axisTitleMargin=z(u,h);a.getMaxLabelDimensions&&(a.maxLabelDimensions=a.getMaxLabelDimensions(l,e));k=this.tickSize("tick");g[d]=Math.max(g[d],a.axisTitleMargin+w+H*a.offset,h,e&&e.length&&k?k[0]+
H*a.offset:0);f=f.offset?0:2*Math.floor(a.axisLine.strokeWidth()/2);b[m]=Math.max(b[m],f);q(this,"afterGetOffset")},getLinePath:function(a){var b=this.chart,c=this.opposite,f=this.offset,e=this.horiz,l=this.left+(c?this.width:0)+f;f=b.chartHeight-this.bottom-(c?this.height:0)+f;c&&(a*=-1);return b.renderer.crispLine(["M",e?this.left:l,e?f:this.top,"L",e?b.chartWidth-this.right:l,e?f:b.chartHeight-this.bottom],a)},renderLine:function(){this.axisLine||(this.axisLine=this.chart.renderer.path().addClass("highcharts-axis-line").add(this.axisGroup),
this.chart.styledMode||this.axisLine.attr({stroke:this.options.lineColor,"stroke-width":this.options.lineWidth,zIndex:7}))},getTitlePosition:function(){var a=this.horiz,b=this.left,c=this.top,f=this.len,e=this.options.title,l=a?b:c,k=this.opposite,d=this.offset,m=e.x||0,v=e.y||0,n=this.axisTitle,w=this.chart.renderer.fontMetrics(e.style&&e.style.fontSize,n);n=Math.max(n.getBBox(null,0).height-w.h-1,0);f={low:l+(a?0:f),middle:l+f/2,high:l+(a?f:0)}[e.align];b=(a?c+this.height:b)+(a?1:-1)*(k?-1:1)*this.axisTitleMargin+
[-n,n,w.f,-n][this.side];a={x:a?f+m:b+(k?this.width:0)+d+m,y:a?b+v-(k?this.height:0)+d:f+v};q(this,"afterGetTitlePosition",{titlePosition:a});return a},renderMinorTick:function(a){var b=this.chart.hasRendered&&n(this.oldMin),c=this.minorTicks;c[a]||(c[a]=new r(this,a,"minor"));b&&c[a].isNew&&c[a].render(null,!0);c[a].render(null,!1,1)},renderTick:function(a,b){var c=this.isLinked,f=this.ticks,e=this.chart.hasRendered&&n(this.oldMin);if(!c||a>=this.min&&a<=this.max)f[a]||(f[a]=new r(this,a)),e&&f[a].isNew&&
f[a].render(b,!0,-1),f[a].render(b)},render:function(){var a=this,b=a.chart,c=a.options,f=a.isLog,e=a.isLinked,l=a.tickPositions,k=a.axisTitle,w=a.ticks,m=a.minorTicks,h=a.alternateBands,z=c.stackLabels,B=c.alternateGridColor,F=a.tickmarkOffset,L=a.axisLine,t=a.showAxis,g=E(b.renderer.globalAnimation),H,K;a.labelEdge.length=0;a.overlap=!1;[w,m,h].forEach(function(b){v(b,function(b){b.isActive=!1})});if(a.hasData()||e)a.minorTickInterval&&!a.categories&&a.getMinorTickPositions().forEach(function(b){a.renderMinorTick(b)}),
l.length&&(l.forEach(function(b,c){a.renderTick(b,c)}),F&&(0===a.min||a.single)&&(w[-1]||(w[-1]=new r(a,-1,null,!0)),w[-1].render(-1))),B&&l.forEach(function(c,e){K="undefined"!==typeof l[e+1]?l[e+1]+F:a.max-F;0===e%2&&c<a.max&&K<=a.max+(b.polar?-F:F)&&(h[c]||(h[c]=new d.PlotLineOrBand(a)),H=c+F,h[c].options={from:f?a.lin2log(H):H,to:f?a.lin2log(K):K,color:B},h[c].render(),h[c].isActive=!0)}),a._addedPlotLB||((c.plotLines||[]).concat(c.plotBands||[]).forEach(function(b){a.addPlotBandOrLine(b)}),a._addedPlotLB=
!0);[w,m,h].forEach(function(a){var c,f=[],e=g.duration;v(a,function(b,a){b.isActive||(b.render(a,!1,0),b.isActive=!1,f.push(a))});Q(function(){for(c=f.length;c--;)a[f[c]]&&!a[f[c]].isActive&&(a[f[c]].destroy(),delete a[f[c]])},a!==h&&b.hasRendered&&e?e:0)});L&&(L[L.isPlaced?"animate":"attr"]({d:this.getLinePath(L.strokeWidth())}),L.isPlaced=!0,L[t?"show":"hide"](t));k&&t&&(c=a.getTitlePosition(),n(c.y)?(k[k.isNew?"attr":"animate"](c),k.isNew=!1):(k.attr("y",-9999),k.isNew=!0));z&&z.enabled&&a.renderStackTotals();
a.isDirty=!1;q(this,"afterRender")},redraw:function(){this.visible&&(this.render(),this.plotLinesAndBands.forEach(function(a){a.render()}));this.series.forEach(function(a){a.isDirty=!0})},keepProps:"extKey hcEvents names series userMax userMin".split(" "),destroy:function(a){var b=this,c=b.stacks,f=b.plotLinesAndBands,e;q(this,"destroy",{keepEvents:a});a||B(b);v(c,function(b,a){D(b);c[a]=null});[b.ticks,b.minorTicks,b.alternateBands].forEach(function(b){D(b)});if(f)for(a=f.length;a--;)f[a].destroy();
"stackTotalGroup axisLine axisTitle axisGroup gridGroup labelGroup cross scrollbar".split(" ").forEach(function(a){b[a]&&(b[a]=b[a].destroy())});for(e in b.plotLinesAndBandsGroups)b.plotLinesAndBandsGroups[e]=b.plotLinesAndBandsGroups[e].destroy();v(b,function(a,c){-1===b.keepProps.indexOf(c)&&delete b[c]})},drawCrosshair:function(a,b){var c=this.crosshair,f=z(c.snap,!0),e,l=this.cross,k=this.chart;q(this,"drawCrosshair",{e:a,point:b});a||(a=this.cross&&this.cross.e);if(this.crosshair&&!1!==(t(b)||
!f)){f?t(b)&&(e=z("colorAxis"!==this.coll?b.crosshairPos:null,this.isXAxis?b.plotX:this.len-b.plotY)):e=a&&(this.horiz?a.chartX-this.pos:this.len-a.chartY+this.pos);if(t(e)){var d={value:b&&(this.isXAxis?b.x:z(b.stackY,b.y)),translatedValue:e};k.polar&&N(d,{isCrosshair:!0,chartX:a&&a.chartX,chartY:a&&a.chartY,point:b});d=this.getPlotLinePath(d)||null}if(!t(d)){this.hideCrosshair();return}f=this.categories&&!this.isRadial;l||(this.cross=l=k.renderer.path().addClass("highcharts-crosshair highcharts-crosshair-"+
(f?"category ":"thin ")+c.className).attr({zIndex:z(c.zIndex,2)}).add(),k.styledMode||(l.attr({stroke:c.color||(f?I("#ccd6eb").setOpacity(.25).get():"#cccccc"),"stroke-width":z(c.width,1)}).css({"pointer-events":"none"}),c.dashStyle&&l.attr({dashstyle:c.dashStyle})));l.show().attr({d:d});f&&!c.width&&l.attr({"stroke-width":this.transA});this.cross.e=a}else this.hideCrosshair();q(this,"afterDrawCrosshair",{e:a,point:b})},hideCrosshair:function(){this.cross&&this.cross.hide();q(this,"afterHideCrosshair")}});
return d.Axis=g});S(r,"parts/DateTimeAxis.js",[r["parts/Globals.js"],r["parts/Utilities.js"]],function(d,g){var r=g.getMagnitude,u=g.normalizeTickInterval,I=g.timeUnits;d=d.Axis;d.prototype.getTimeTicks=function(){return this.chart.time.getTimeTicks.apply(this.chart.time,arguments)};d.prototype.normalizeTimeTickInterval=function(d,g){var A=g||[["millisecond",[1,2,5,10,20,25,50,100,200,500]],["second",[1,2,5,10,15,30]],["minute",[1,2,5,10,15,30]],["hour",[1,2,3,4,6,8,12]],["day",[1,2]],["week",[1,
2]],["month",[1,2,3,4,6]],["year",null]];g=A[A.length-1];var G=I[g[0]],E=g[1],y;for(y=0;y<A.length&&!(g=A[y],G=I[g[0]],E=g[1],A[y+1]&&d<=(G*E[E.length-1]+I[A[y+1][0]])/2);y++);G===I.year&&d<5*G&&(E=[1,2,5]);d=u(d/G,E,"year"===g[0]?Math.max(r(d/G),1):1);return{unitRange:G,count:d,unitName:g[0]}}});S(r,"parts/LogarithmicAxis.js",[r["parts/Globals.js"],r["parts/Utilities.js"]],function(d,g){var r=g.getMagnitude,u=g.normalizeTickInterval,I=g.pick;d=d.Axis;d.prototype.getLogTickPositions=function(d,g,
A,G){var E=this.options,y=this.len,t=[];G||(this._minorAutoInterval=null);if(.5<=d)d=Math.round(d),t=this.getLinearTickPositions(d,g,A);else if(.08<=d){y=Math.floor(g);var D,h;for(E=.3<d?[1,2,4]:.15<d?[1,2,4,6,8]:[1,2,3,4,5,6,7,8,9];y<A+1&&!h;y++){var N=E.length;for(D=0;D<N&&!h;D++){var q=this.log2lin(this.lin2log(y)*E[D]);q>g&&(!G||P<=A)&&"undefined"!==typeof P&&t.push(P);P>A&&(h=!0);var P=q}}}else g=this.lin2log(g),A=this.lin2log(A),d=G?this.getMinorTickInterval():E.tickInterval,d=I("auto"===d?
null:d,this._minorAutoInterval,E.tickPixelInterval/(G?5:1)*(A-g)/((G?y/this.tickPositions.length:y)||1)),d=u(d,null,r(d)),t=this.getLinearTickPositions(d,g,A).map(this.log2lin),G||(this._minorAutoInterval=d/5);G||(this.tickInterval=d);return t};d.prototype.log2lin=function(d){return Math.log(d)/Math.LN10};d.prototype.lin2log=function(d){return Math.pow(10,d)}});S(r,"parts/PlotLineOrBand.js",[r["parts/Globals.js"],r["parts/Axis.js"],r["parts/Utilities.js"]],function(d,g,r){var u=r.arrayMax,I=r.arrayMin,
M=r.defined,E=r.destroyObjectProperties,A=r.erase,G=r.extend,J=r.merge,y=r.objectEach,t=r.pick,D=function(){function h(d,h){this.axis=d;h&&(this.options=h,this.id=h.id)}h.prototype.render=function(){d.fireEvent(this,"render");var h=this,q=h.axis,g=q.horiz,e=h.options,c=e.label,k=h.label,n=e.to,f=e.from,a=e.value,l=M(f)&&M(n),v=M(a),z=h.svgElem,w=!z,B=[],L=e.color,Q=t(e.zIndex,0),H=e.events;B={"class":"highcharts-plot-"+(l?"band ":"line ")+(e.className||"")};var K={},p=q.chart.renderer,b=l?"bands":
"lines";q.isLog&&(f=q.log2lin(f),n=q.log2lin(n),a=q.log2lin(a));q.chart.styledMode||(v?(B.stroke=L||"#999999",B["stroke-width"]=t(e.width,1),e.dashStyle&&(B.dashstyle=e.dashStyle)):l&&(B.fill=L||"#e6ebf5",e.borderWidth&&(B.stroke=e.borderColor,B["stroke-width"]=e.borderWidth)));K.zIndex=Q;b+="-"+Q;(L=q.plotLinesAndBandsGroups[b])||(q.plotLinesAndBandsGroups[b]=L=p.g("plot-"+b).attr(K).add());w&&(h.svgElem=z=p.path().attr(B).add(L));if(v)B=q.getPlotLinePath({value:a,lineWidth:z.strokeWidth(),acrossPanes:e.acrossPanes});
else if(l)B=q.getPlotBandPath(f,n,e);else return;(w||!z.d)&&B&&B.length?(z.attr({d:B}),H&&y(H,function(b,a){z.on(a,function(b){H[a].apply(h,[b])})})):z&&(B?(z.show(!0),z.animate({d:B})):z.d&&(z.hide(),k&&(h.label=k=k.destroy())));c&&(M(c.text)||M(c.formatter))&&B&&B.length&&0<q.width&&0<q.height&&!B.isFlat?(c=J({align:g&&l&&"center",x:g?!l&&4:10,verticalAlign:!g&&l&&"middle",y:g?l?16:10:l?6:-4,rotation:g&&!l&&90},c),this.renderLabel(c,B,l,Q)):k&&k.hide();return h};h.prototype.renderLabel=function(d,
h,g,e){var c=this.label,k=this.axis.chart.renderer;c||(c={align:d.textAlign||d.align,rotation:d.rotation,"class":"highcharts-plot-"+(g?"band":"line")+"-label "+(d.className||"")},c.zIndex=e,e=this.getLabelText(d),this.label=c=k.text(e,0,0,d.useHTML).attr(c).add(),this.axis.chart.styledMode||c.css(d.style));k=h.xBounds||[h[1],h[4],g?h[6]:h[1]];h=h.yBounds||[h[2],h[5],g?h[7]:h[2]];g=I(k);e=I(h);c.align(d,!1,{x:g,y:e,width:u(k)-g,height:u(h)-e});c.show(!0)};h.prototype.getLabelText=function(d){return M(d.formatter)?
d.formatter.call(this):d.text};h.prototype.destroy=function(){A(this.axis.plotLinesAndBands,this);delete this.axis;E(this)};return h}();G(g.prototype,{getPlotBandPath:function(d,g){var h=this.getPlotLinePath({value:g,force:!0,acrossPanes:this.options.acrossPanes}),t=this.getPlotLinePath({value:d,force:!0,acrossPanes:this.options.acrossPanes}),e=[],c=this.horiz,k=1;d=d<this.min&&g<this.min||d>this.max&&g>this.max;if(t&&h){if(d){var n=t.toString()===h.toString();k=0}for(d=0;d<t.length;d+=6)c&&h[d+1]===
t[d+1]?(h[d+1]+=k,h[d+4]+=k):c||h[d+2]!==t[d+2]||(h[d+2]+=k,h[d+5]+=k),e.push("M",t[d+1],t[d+2],"L",t[d+4],t[d+5],h[d+4],h[d+5],h[d+1],h[d+2],"z"),e.isFlat=n}return e},addPlotBand:function(d){return this.addPlotBandOrLine(d,"plotBands")},addPlotLine:function(d){return this.addPlotBandOrLine(d,"plotLines")},addPlotBandOrLine:function(d,g){var h=(new D(this,d)).render(),t=this.userOptions;if(h){if(g){var e=t[g]||[];e.push(d);t[g]=e}this.plotLinesAndBands.push(h)}return h},removePlotBandOrLine:function(d){for(var h=
this.plotLinesAndBands,q=this.options,g=this.userOptions,e=h.length;e--;)h[e].id===d&&h[e].destroy();[q.plotLines||[],g.plotLines||[],q.plotBands||[],g.plotBands||[]].forEach(function(c){for(e=c.length;e--;)c[e].id===d&&A(c,c[e])})},removePlotBand:function(d){this.removePlotBandOrLine(d)},removePlotLine:function(d){this.removePlotBandOrLine(d)}});d.PlotLineOrBand=D;return d.PlotLineOrBand});S(r,"parts/Tooltip.js",[r["parts/Globals.js"],r["parts/Utilities.js"]],function(d,g){var r=g.clamp,u=g.css,
I=g.defined,M=g.discardElement,E=g.extend,A=g.format,G=g.isNumber,J=g.isString,y=g.merge,t=g.pick,D=g.splat,h=g.syncTimeout,N=g.timeUnits;"";var q=d.doc,P=function(){function e(c,e){this.crosshairs=[];this.distance=0;this.isHidden=!0;this.isSticky=!1;this.now={};this.options={};this.outside=!1;this.chart=c;this.init(c,e)}e.prototype.applyFilter=function(){var c=this.chart;c.renderer.definition({tagName:"filter",id:"drop-shadow-"+c.index,opacity:.5,children:[{tagName:"feGaussianBlur","in":"SourceAlpha",
stdDeviation:1},{tagName:"feOffset",dx:1,dy:1},{tagName:"feComponentTransfer",children:[{tagName:"feFuncA",type:"linear",slope:.3}]},{tagName:"feMerge",children:[{tagName:"feMergeNode"},{tagName:"feMergeNode","in":"SourceGraphic"}]}]});c.renderer.definition({tagName:"style",textContent:".highcharts-tooltip-"+c.index+"{filter:url(#drop-shadow-"+c.index+")}"})};e.prototype.bodyFormatter=function(c){return c.map(function(c){var e=c.series.tooltipOptions;return(e[(c.point.formatPrefix||"point")+"Formatter"]||
c.point.tooltipFormatter).call(c.point,e[(c.point.formatPrefix||"point")+"Format"]||"")})};e.prototype.cleanSplit=function(c){this.chart.series.forEach(function(e){var d=e&&e.tt;d&&(!d.isActive||c?e.tt=d.destroy():d.isActive=!1)})};e.prototype.defaultFormatter=function(c){var e=this.points||D(this);var d=[c.tooltipFooterHeaderFormatter(e[0])];d=d.concat(c.bodyFormatter(e));d.push(c.tooltipFooterHeaderFormatter(e[0],!0));return d};e.prototype.destroy=function(){this.label&&(this.label=this.label.destroy());
this.split&&this.tt&&(this.cleanSplit(this.chart,!0),this.tt=this.tt.destroy());this.renderer&&(this.renderer=this.renderer.destroy(),M(this.container));g.clearTimeout(this.hideTimer);g.clearTimeout(this.tooltipTimeout)};e.prototype.getAnchor=function(c,e){var d=this.chart,f=d.pointer,a=d.inverted,l=d.plotTop,k=d.plotLeft,h=0,w=0,B,q;c=D(c);this.followPointer&&e?("undefined"===typeof e.chartX&&(e=f.normalize(e)),c=[e.chartX-k,e.chartY-l]):c[0].tooltipPos?c=c[0].tooltipPos:(c.forEach(function(c){B=
c.series.yAxis;q=c.series.xAxis;h+=c.plotX+(!a&&q?q.left-k:0);w+=(c.plotLow?(c.plotLow+c.plotHigh)/2:c.plotY)+(!a&&B?B.top-l:0)}),h/=c.length,w/=c.length,c=[a?d.plotWidth-w:h,this.shared&&!a&&1<c.length&&e?e.chartY-l:a?d.plotHeight-h:w]);return c.map(Math.round)};e.prototype.getDateFormat=function(c,e,d,f){var a=this.chart.time,l=a.dateFormat("%m-%d %H:%M:%S.%L",e),k={millisecond:15,second:12,minute:9,hour:6,day:3},n="millisecond";for(w in N){if(c===N.week&&+a.dateFormat("%w",e)===d&&"00:00:00.000"===
l.substr(6)){var w="week";break}if(N[w]>c){w=n;break}if(k[w]&&l.substr(k[w])!=="01-01 00:00:00.000".substr(k[w]))break;"week"!==w&&(n=w)}if(w)var h=a.resolveDTLFormat(f[w]).main;return h};e.prototype.getLabel=function(){var c,e=this,n=this.chart.renderer,f=this.chart.styledMode,a=this.options,l="tooltip"+(I(a.className)?" "+a.className:""),v=(null===(c=a.style)||void 0===c?void 0:c.pointerEvents)||(!this.followPointer&&a.stickOnContact?"auto":"none"),h;c=function(){e.inContact=!0};var w=function(){var a=
e.chart.hoverSeries;e.inContact=!1;if(a&&a.onMouseOut)a.onMouseOut()};if(!this.label){this.outside&&(this.container=h=d.doc.createElement("div"),h.className="highcharts-tooltip-container",u(h,{position:"absolute",top:"1px",pointerEvents:v,zIndex:3}),d.doc.body.appendChild(h),this.renderer=n=new d.Renderer(h,0,0,{},void 0,void 0,n.styledMode));this.split?this.label=n.g(l):(this.label=n.label("",0,0,a.shape||"callout",null,null,a.useHTML,null,l).attr({padding:a.padding,r:a.borderRadius}),f||this.label.attr({fill:a.backgroundColor,
"stroke-width":a.borderWidth}).css(a.style).css({pointerEvents:v}).shadow(a.shadow));f&&(this.applyFilter(),this.label.addClass("highcharts-tooltip-"+this.chart.index));if(e.outside&&!e.split){var B={x:this.label.xSetter,y:this.label.ySetter};this.label.xSetter=function(a,c){B[c].call(this.label,e.distance);h.style.left=a+"px"};this.label.ySetter=function(a,c){B[c].call(this.label,e.distance);h.style.top=a+"px"}}this.label.on("mouseenter",c).on("mouseleave",w).attr({zIndex:8}).add()}return this.label};
e.prototype.getPosition=function(c,e,d){var f=this.chart,a=this.distance,l={},k=f.inverted&&d.h||0,n,w=this.outside,h=w?q.documentElement.clientWidth-2*a:f.chartWidth,g=w?Math.max(q.body.scrollHeight,q.documentElement.scrollHeight,q.body.offsetHeight,q.documentElement.offsetHeight,q.documentElement.clientHeight):f.chartHeight,Q=f.pointer.getChartPosition(),H=f.containerScaling,K=function(b){return H?b*H.scaleX:b},p=function(b){return H?b*H.scaleY:b},b=function(b){var l="x"===b;return[b,l?h:g,l?c:
e].concat(w?[l?K(c):p(e),l?Q.left-a+K(d.plotX+f.plotLeft):Q.top-a+p(d.plotY+f.plotTop),0,l?h:g]:[l?c:e,l?d.plotX+f.plotLeft:d.plotY+f.plotTop,l?f.plotLeft:f.plotTop,l?f.plotLeft+f.plotWidth:f.plotTop+f.plotHeight])},C=b("y"),x=b("x"),R=!this.followPointer&&t(d.ttBelow,!f.inverted===!!d.negative),O=function(b,c,f,e,d,m,v){var n="y"===b?p(a):K(a),w=(f-e)/2,x=e<d-a,h=d+a+e<c,F=d-n-f+w;d=d+n-w;if(R&&h)l[b]=d;else if(!R&&x)l[b]=F;else if(x)l[b]=Math.min(v-e,0>F-k?F:F-k);else if(h)l[b]=Math.max(m,d+k+f>
c?d:d+k);else return!1},y=function(b,c,f,e,d){var k;d<a||d>c-a?k=!1:l[b]=d<f/2?1:d>c-e/2?c-e-2:d-f/2;return k},u=function(b){var a=C;C=x;x=a;n=b},m=function(){!1!==O.apply(0,C)?!1!==y.apply(0,x)||n||(u(!0),m()):n?l.x=l.y=0:(u(!0),m())};(f.inverted||1<this.len)&&u();m();return l};e.prototype.getXDateFormat=function(c,e,d){e=e.dateTimeLabelFormats;var f=d&&d.closestPointRange;return(f?this.getDateFormat(f,c.x,d.options.startOfWeek,e):e.day)||e.year};e.prototype.hide=function(c){var e=this;g.clearTimeout(this.hideTimer);
c=t(c,this.options.hideDelay,500);this.isHidden||(this.hideTimer=h(function(){e.getLabel()[c?"fadeOut":"hide"]();e.isHidden=!0},c))};e.prototype.init=function(c,e){this.chart=c;this.options=e;this.crosshairs=[];this.now={x:0,y:0};this.isHidden=!0;this.split=e.split&&!c.inverted&&!c.polar;this.shared=e.shared||this.split;this.outside=t(e.outside,!(!c.scrollablePixelsX&&!c.scrollablePixelsY))};e.prototype.isStickyOnContact=function(){return!(this.followPointer||!this.options.stickOnContact||!this.inContact)};
e.prototype.move=function(c,e,d,f){var a=this,l=a.now,k=!1!==a.options.animation&&!a.isHidden&&(1<Math.abs(c-l.x)||1<Math.abs(e-l.y)),n=a.followPointer||1<a.len;E(l,{x:k?(2*l.x+c)/3:c,y:k?(l.y+e)/2:e,anchorX:n?void 0:k?(2*l.anchorX+d)/3:d,anchorY:n?void 0:k?(l.anchorY+f)/2:f});a.getLabel().attr(l);a.drawTracker();k&&(g.clearTimeout(this.tooltipTimeout),this.tooltipTimeout=setTimeout(function(){a&&a.move(c,e,d,f)},32))};e.prototype.refresh=function(c,e){var k=this.chart,f=this.options,a=c,l={},v=[],
h=f.formatter||this.defaultFormatter;l=this.shared;var w=k.styledMode;if(f.enabled){g.clearTimeout(this.hideTimer);this.followPointer=D(a)[0].series.tooltipOptions.followPointer;var B=this.getAnchor(a,e);e=B[0];var q=B[1];!l||a.series&&a.series.noSharedTooltip?l=a.getLabelConfig():(k.pointer.applyInactiveState(a),a.forEach(function(a){a.setState("hover");v.push(a.getLabelConfig())}),l={x:a[0].category,y:a[0].y},l.points=v,a=a[0]);this.len=v.length;k=h.call(l,this);h=a.series;this.distance=t(h.tooltipOptions.distance,
16);!1===k?this.hide():(this.split?this.renderSplit(k,D(c)):(c=this.getLabel(),f.style.width&&!w||c.css({width:this.chart.spacingBox.width}),c.attr({text:k&&k.join?k.join(""):k}),c.removeClass(/highcharts-color-[\d]+/g).addClass("highcharts-color-"+t(a.colorIndex,h.colorIndex)),w||c.attr({stroke:f.borderColor||a.color||h.color||"#666666"}),this.updatePosition({plotX:e,plotY:q,negative:a.negative,ttBelow:a.ttBelow,h:B[2]||0})),this.isHidden&&this.label&&this.label.attr({opacity:1}).show(),this.isHidden=
!1);d.fireEvent(this,"refresh")}};e.prototype.renderSplit=function(c,e){function k(b,a,c,f,e){void 0===e&&(e=!0);c?(a=u?0:A,b=r(b-f/2,O.left,O.right-f)):(a-=m,b=e?b-f-C:b+C,b=r(b,e?b:O.left,O.right));return{x:b,y:a}}var f=this,a=f.chart,l=f.chart,v=l.plotHeight,h=l.plotLeft,w=l.plotTop,B=l.pointer,q=l.renderer,g=l.scrollablePixelsY,H=void 0===g?0:g;g=l.scrollingContainer;g=void 0===g?{scrollLeft:0,scrollTop:0}:g;var K=g.scrollLeft,p=g.scrollTop,b=l.styledMode,C=f.distance,x=f.options,R=f.options.positioner,
O={left:K,right:K+l.chartWidth,top:p,bottom:p+l.chartHeight},y=f.getLabel(),u=!(!a.xAxis[0]||!a.xAxis[0].opposite),m=w+p,D=0,A=v-H;J(c)&&(c=[!1,c]);c=c.slice(0,e.length+1).reduce(function(a,c,l){if(!1!==c&&""!==c){l=e[l-1]||{isHeader:!0,plotX:e[0].plotX,plotY:v,series:{}};var d=l.isHeader,n=d?f:l.series,F=n.tt,z=l.isHeader;var B=l.series;var g="highcharts-color-"+t(l.colorIndex,B.colorIndex,"none");F||(F={padding:x.padding,r:x.borderRadius},b||(F.fill=x.backgroundColor,F["stroke-width"]=x.borderWidth),
F=q.label("",0,0,x[z?"headerShape":"shape"]||"callout",void 0,void 0,x.useHTML).addClass((z?"highcharts-tooltip-header ":"")+"highcharts-tooltip-box "+g).attr(F).add(y));F.isActive=!0;F.attr({text:c});b||F.css(x.style).shadow(x.shadow).attr({stroke:x.borderColor||l.color||B.color||"#333333"});c=n.tt=F;z=c.getBBox();n=z.width+c.strokeWidth();d&&(D=z.height,A+=D,u&&(m-=D));B=l.plotX;B=void 0===B?0:B;g=l.plotY;g=void 0===g?0:g;var L=l.series;if(l.isHeader){B=h+B;var K=w+v/2}else F=L.xAxis,L=L.yAxis,
B=F.pos+r(B,-C,F.len+C),L.pos+g>=p+w&&L.pos+g<=p+w+v-H&&(K=L.pos+g);B=r(B,O.left-C,O.right+C);"number"===typeof K?(z=z.height+1,g=R?R.call(f,n,z,l):k(B,K,d,n),a.push({align:R?0:void 0,anchorX:B,anchorY:K,boxWidth:n,point:l,rank:t(g.rank,d?1:0),size:z,target:g.y,tt:c,x:g.x})):c.isActive=!1}return a},[]);!R&&c.some(function(b){return b.x<O.left})&&(c=c.map(function(b){var a=k(b.anchorX,b.anchorY,b.point.isHeader,b.boxWidth,!1);return E(b,{target:a.y,x:a.x})}));f.cleanSplit();d.distribute(c,A);c.forEach(function(b){var a=
b.pos;b.tt.attr({visibility:"undefined"===typeof a?"hidden":"inherit",x:b.x,y:a+m,anchorX:b.anchorX,anchorY:b.anchorY})});c=f.container;a=f.renderer;f.outside&&c&&a&&(l=y.getBBox(),a.setSize(l.width+l.x,l.height+l.y,!1),B=B.getChartPosition(),c.style.left=B.left+"px",c.style.top=B.top+"px")};e.prototype.drawTracker=function(){if(this.followPointer||!this.options.stickOnContact)this.tracker&&this.tracker.destroy();else{var c=this.chart,e=this.label,d=c.hoverPoint;if(e&&d){var f={x:0,y:0,width:0,height:0};
d=this.getAnchor(d);var a=e.getBBox();d[0]+=c.plotLeft-e.translateX;d[1]+=c.plotTop-e.translateY;f.x=Math.min(0,d[0]);f.y=Math.min(0,d[1]);f.width=0>d[0]?Math.max(Math.abs(d[0]),a.width-d[0]):Math.max(Math.abs(d[0]),a.width);f.height=0>d[1]?Math.max(Math.abs(d[1]),a.height-Math.abs(d[1])):Math.max(Math.abs(d[1]),a.height);this.tracker?this.tracker.attr(f):(this.tracker=e.renderer.rect(f).addClass("highcharts-tracker").add(e),c.styledMode||this.tracker.attr({fill:"rgba(0,0,0,0)"}))}}};e.prototype.styledModeFormat=
function(c){return c.replace('style="font-size: 10px"','class="highcharts-header"').replace(/style="color:{(point|series)\.color}"/g,'class="highcharts-color-{$1.colorIndex}"')};e.prototype.tooltipFooterHeaderFormatter=function(c,e){var k=e?"footer":"header",f=c.series,a=f.tooltipOptions,l=a.xDateFormat,v=f.xAxis,h=v&&"datetime"===v.options.type&&G(c.key),w=a[k+"Format"];e={isFooter:e,labelConfig:c};d.fireEvent(this,"headerFormatter",e,function(e){h&&!l&&(l=this.getXDateFormat(c,a,v));h&&l&&(c.point&&
c.point.tooltipDateKeys||["key"]).forEach(function(a){w=w.replace("{point."+a+"}","{point."+a+":"+l+"}")});f.chart.styledMode&&(w=this.styledModeFormat(w));e.text=A(w,{point:c,series:f},this.chart)});return e.text};e.prototype.update=function(c){this.destroy();y(!0,this.chart.options.tooltip.userOptions,c);this.init(this.chart,y(!0,this.options,c))};e.prototype.updatePosition=function(c){var e=this.chart,d=e.pointer,f=this.getLabel(),a=c.plotX+e.plotLeft,l=c.plotY+e.plotTop;d=d.getChartPosition();
c=(this.options.positioner||this.getPosition).call(this,f.width,f.height,c);if(this.outside){var v=(this.options.borderWidth||0)+2*this.distance;this.renderer.setSize(f.width+v,f.height+v,!1);if(e=e.containerScaling)u(this.container,{transform:"scale("+e.scaleX+", "+e.scaleY+")"}),a*=e.scaleX,l*=e.scaleY;a+=d.left-c.x;l+=d.top-c.y}this.move(Math.round(c.x),Math.round(c.y||0),a,l)};return e}();d.Tooltip=P;return d.Tooltip});S(r,"parts/Pointer.js",[r["parts/Globals.js"],r["parts/Utilities.js"],r["parts/Tooltip.js"],
r["parts/Color.js"]],function(d,g,r,u){var I=g.addEvent,M=g.attr,E=g.css,A=g.defined,G=g.extend,J=g.find,y=g.fireEvent,t=g.isNumber,D=g.isObject,h=g.objectEach,N=g.offset,q=g.pick,P=g.splat,e=u.parse,c=d.charts,k=d.noop;g=function(){function n(c,a){this.lastValidTouch={};this.pinchDown=[];this.runChartClick=!1;this.chart=c;this.hasDragged=!1;this.options=a;this.unbindContainerMouseLeave=function(){};this.init(c,a)}n.prototype.applyInactiveState=function(c){var a=[],f;(c||[]).forEach(function(c){f=
c.series;a.push(f);f.linkedParent&&a.push(f.linkedParent);f.linkedSeries&&(a=a.concat(f.linkedSeries));f.navigatorSeries&&a.push(f.navigatorSeries)});this.chart.series.forEach(function(c){-1===a.indexOf(c)?c.setState("inactive",!0):c.options.inactiveOtherPoints&&c.setAllPointsToState("inactive")})};n.prototype.destroy=function(){var c=this;"undefined"!==typeof c.unDocMouseMove&&c.unDocMouseMove();this.unbindContainerMouseLeave();d.chartCount||(d.unbindDocumentMouseUp&&(d.unbindDocumentMouseUp=d.unbindDocumentMouseUp()),
d.unbindDocumentTouchEnd&&(d.unbindDocumentTouchEnd=d.unbindDocumentTouchEnd()));clearInterval(c.tooltipTimeout);h(c,function(a,f){c[f]=null})};n.prototype.drag=function(c){var a=this.chart,f=a.options.chart,d=c.chartX,k=c.chartY,w=this.zoomHor,n=this.zoomVert,h=a.plotLeft,q=a.plotTop,g=a.plotWidth,t=a.plotHeight,p=this.selectionMarker,b=this.mouseDownX||0,C=this.mouseDownY||0,x=D(f.panning)?f.panning&&f.panning.enabled:f.panning,y=f.panKey&&c[f.panKey+"Key"];if(!p||!p.touch)if(d<h?d=h:d>h+g&&(d=
h+g),k<q?k=q:k>q+t&&(k=q+t),this.hasDragged=Math.sqrt(Math.pow(b-d,2)+Math.pow(C-k,2)),10<this.hasDragged){var O=a.isInsidePlot(b-h,C-q);a.hasCartesianSeries&&(this.zoomX||this.zoomY)&&O&&!y&&!p&&(this.selectionMarker=p=a.renderer.rect(h,q,w?1:g,n?1:t,0).attr({"class":"highcharts-selection-marker",zIndex:7}).add(),a.styledMode||p.attr({fill:f.selectionMarkerFill||e("#335cad").setOpacity(.25).get()}));p&&w&&(d-=b,p.attr({width:Math.abs(d),x:(0<d?0:d)+b}));p&&n&&(d=k-C,p.attr({height:Math.abs(d),y:(0<
d?0:d)+C}));O&&!p&&x&&a.pan(c,f.panning)}};n.prototype.dragStart=function(c){var a=this.chart;a.mouseIsDown=c.type;a.cancelClick=!1;a.mouseDownX=this.mouseDownX=c.chartX;a.mouseDownY=this.mouseDownY=c.chartY};n.prototype.drop=function(c){var a=this,f=this.chart,e=this.hasPinched;if(this.selectionMarker){var d={originalEvent:c,xAxis:[],yAxis:[]},k=this.selectionMarker,n=k.attr?k.attr("x"):k.x,h=k.attr?k.attr("y"):k.y,q=k.attr?k.attr("width"):k.width,g=k.attr?k.attr("height"):k.height,K;if(this.hasDragged||
e)f.axes.forEach(function(f){if(f.zoomEnabled&&A(f.min)&&(e||a[{xAxis:"zoomX",yAxis:"zoomY"}[f.coll]])){var b=f.horiz,l="touchend"===c.type?f.minPixelPadding:0,k=f.toValue((b?n:h)+l);b=f.toValue((b?n+q:h+g)-l);d[f.coll].push({axis:f,min:Math.min(k,b),max:Math.max(k,b)});K=!0}}),K&&y(f,"selection",d,function(a){f.zoom(G(a,e?{animation:!1}:null))});t(f.index)&&(this.selectionMarker=this.selectionMarker.destroy());e&&this.scaleGroups()}f&&t(f.index)&&(E(f.container,{cursor:f._cursor}),f.cancelClick=
10<this.hasDragged,f.mouseIsDown=this.hasDragged=this.hasPinched=!1,this.pinchDown=[])};n.prototype.findNearestKDPoint=function(c,a,e){var f=this.chart,d=f.hoverPoint;f=f.tooltip;if(d&&f&&f.isStickyOnContact())return d;var l;c.forEach(function(c){var f=!(c.noSharedTooltip&&a)&&0>c.options.findNearestPointBy.indexOf("y");c=c.searchPoint(e,f);if((f=D(c,!0))&&!(f=!D(l,!0))){f=l.distX-c.distX;var d=l.dist-c.dist,k=(c.series.group&&c.series.group.zIndex)-(l.series.group&&l.series.group.zIndex);f=0<(0!==
f&&a?f:0!==d?d:0!==k?k:l.series.index>c.series.index?-1:1)}f&&(l=c)});return l};n.prototype.getChartCoordinatesFromPoint=function(c,a){var f=c.series,e=f.xAxis;f=f.yAxis;var d=q(c.clientX,c.plotX),k=c.shapeArgs;if(e&&f)return a?{chartX:e.len+e.pos-d,chartY:f.len+f.pos-c.plotY}:{chartX:d+e.pos,chartY:c.plotY+f.pos};if(k&&k.x&&k.y)return{chartX:k.x,chartY:k.y}};n.prototype.getChartPosition=function(){return this.chartPosition||(this.chartPosition=N(this.chart.container))};n.prototype.getCoordinates=
function(c){var a={xAxis:[],yAxis:[]};this.chart.axes.forEach(function(f){a[f.isXAxis?"xAxis":"yAxis"].push({axis:f,value:f.toValue(c[f.horiz?"chartX":"chartY"])})});return a};n.prototype.getHoverData=function(c,a,e,d,k,n){var f,l=[];d=!(!d||!c);var v=a&&!a.stickyTracking,h={chartX:n?n.chartX:void 0,chartY:n?n.chartY:void 0,shared:k};y(this,"beforeGetHoverData",h);v=v?[a]:e.filter(function(a){return h.filter?h.filter(a):a.visible&&!(!k&&a.directTouch)&&q(a.options.enableMouseTracking,!0)&&a.stickyTracking});
a=(f=d||!n?c:this.findNearestKDPoint(v,k,n))&&f.series;f&&(k&&!a.noSharedTooltip?(v=e.filter(function(a){return h.filter?h.filter(a):a.visible&&!(!k&&a.directTouch)&&q(a.options.enableMouseTracking,!0)&&!a.noSharedTooltip}),v.forEach(function(a){var c=J(a.points,function(b){return b.x===f.x&&!b.isNull});D(c)&&(a.chart.isBoosting&&(c=a.getPoint(c)),l.push(c))})):l.push(f));h={hoverPoint:f};y(this,"afterGetHoverData",h);return{hoverPoint:h.hoverPoint,hoverSeries:a,hoverPoints:l}};n.prototype.getPointFromEvent=
function(c){c=c.target;for(var a;c&&!a;)a=c.point,c=c.parentNode;return a};n.prototype.onTrackerMouseOut=function(c){var a=this.chart.hoverSeries;c=c.relatedTarget||c.toElement;this.isDirectTouch=!1;if(!(!a||!c||a.stickyTracking||this.inClass(c,"highcharts-tooltip")||this.inClass(c,"highcharts-series-"+a.index)&&this.inClass(c,"highcharts-tracker")))a.onMouseOut()};n.prototype.inClass=function(c,a){for(var f;c;){if(f=M(c,"class")){if(-1!==f.indexOf(a))return!0;if(-1!==f.indexOf("highcharts-container"))return!1}c=
c.parentNode}};n.prototype.init=function(c,a){this.options=a;this.chart=c;this.runChartClick=a.chart.events&&!!a.chart.events.click;this.pinchDown=[];this.lastValidTouch={};r&&(c.tooltip=new r(c,a.tooltip),this.followTouchMove=q(a.tooltip.followTouchMove,!0));this.setDOMEvents()};n.prototype.normalize=function(c,a){var f=c.touches,e=f?f.length?f.item(0):f.changedTouches[0]:c;a||(a=this.getChartPosition());f=e.pageX-a.left;a=e.pageY-a.top;if(e=this.chart.containerScaling)f/=e.scaleX,a/=e.scaleY;return G(c,
{chartX:Math.round(f),chartY:Math.round(a)})};n.prototype.onContainerClick=function(c){var a=this.chart,f=a.hoverPoint,e=a.plotLeft,d=a.plotTop;c=this.normalize(c);a.cancelClick||(f&&this.inClass(c.target,"highcharts-tracker")?(y(f.series,"click",G(c,{point:f})),a.hoverPoint&&f.firePointEvent("click",c)):(G(c,this.getCoordinates(c)),a.isInsidePlot(c.chartX-e,c.chartY-d)&&y(a,"click",c)))};n.prototype.onContainerMouseDown=function(c){c=this.normalize(c);2!==c.button&&(this.zoomOption(c),c.preventDefault&&
c.preventDefault(),this.dragStart(c))};n.prototype.onContainerMouseLeave=function(f){var a=c[d.hoverChartIndex];a&&(f.relatedTarget||f.toElement)&&(a.pointer.reset(),a.pointer.chartPosition=void 0)};n.prototype.onContainerMouseMove=function(f){var a=this.chart;A(d.hoverChartIndex)&&c[d.hoverChartIndex]&&c[d.hoverChartIndex].mouseIsDown||(d.hoverChartIndex=a.index);f=this.normalize(f);f.preventDefault||(f.returnValue=!1);"mousedown"===a.mouseIsDown&&this.drag(f);a.openMenu||!this.inClass(f.target,
"highcharts-tracker")&&!a.isInsidePlot(f.chartX-a.plotLeft,f.chartY-a.plotTop)||this.runPointActions(f)};n.prototype.onDocumentTouchEnd=function(f){c[d.hoverChartIndex]&&c[d.hoverChartIndex].pointer.drop(f)};n.prototype.onContainerTouchMove=function(c){this.touch(c)};n.prototype.onContainerTouchStart=function(c){this.zoomOption(c);this.touch(c,!0)};n.prototype.onDocumentMouseMove=function(c){var a=this.chart,f=this.chartPosition,e=a.tooltip;c=this.normalize(c,f);!f||e&&e.isStickyOnContact()||a.isInsidePlot(c.chartX-
a.plotLeft,c.chartY-a.plotTop)||this.inClass(c.target,"highcharts-tracker")||this.reset()};n.prototype.onDocumentMouseUp=function(f){c[d.hoverChartIndex]&&c[d.hoverChartIndex].pointer.drop(f)};n.prototype.pinch=function(c){var a=this,f=a.chart,e=a.pinchDown,d=c.touches||[],n=d.length,h=a.lastValidTouch,g=a.hasZoom,t=a.selectionMarker,H={},K=1===n&&(a.inClass(c.target,"highcharts-tracker")&&f.runTrackerClick||a.runChartClick),p={};1<n&&(a.initiated=!0);g&&a.initiated&&!K&&c.preventDefault();[].map.call(d,
function(b){return a.normalize(b)});"touchstart"===c.type?([].forEach.call(d,function(b,a){e[a]={chartX:b.chartX,chartY:b.chartY}}),h.x=[e[0].chartX,e[1]&&e[1].chartX],h.y=[e[0].chartY,e[1]&&e[1].chartY],f.axes.forEach(function(b){if(b.zoomEnabled){var a=f.bounds[b.horiz?"h":"v"],c=b.minPixelPadding,e=b.toPixels(Math.min(q(b.options.min,b.dataMin),b.dataMin)),d=b.toPixels(Math.max(q(b.options.max,b.dataMax),b.dataMax)),l=Math.max(e,d);a.min=Math.min(b.pos,Math.min(e,d)-c);a.max=Math.max(b.pos+b.len,
l+c)}}),a.res=!0):a.followTouchMove&&1===n?this.runPointActions(a.normalize(c)):e.length&&(t||(a.selectionMarker=t=G({destroy:k,touch:!0},f.plotBox)),a.pinchTranslate(e,d,H,t,p,h),a.hasPinched=g,a.scaleGroups(H,p),a.res&&(a.res=!1,this.reset(!1,0)))};n.prototype.pinchTranslate=function(c,a,e,d,k,n){this.zoomHor&&this.pinchTranslateDirection(!0,c,a,e,d,k,n);this.zoomVert&&this.pinchTranslateDirection(!1,c,a,e,d,k,n)};n.prototype.pinchTranslateDirection=function(c,a,e,d,k,n,h,q){var f=this.chart,l=
c?"x":"y",v=c?"X":"Y",p="chart"+v,b=c?"width":"height",w=f["plot"+(c?"Left":"Top")],x,B,g=q||1,z=f.inverted,t=f.bounds[c?"h":"v"],m=1===a.length,L=a[0][p],y=e[0][p],u=!m&&a[1][p],F=!m&&e[1][p];e=function(){"number"===typeof F&&20<Math.abs(L-u)&&(g=q||Math.abs(y-F)/Math.abs(L-u));B=(w-y)/g+L;x=f["plot"+(c?"Width":"Height")]/g};e();a=B;if(a<t.min){a=t.min;var V=!0}else a+x>t.max&&(a=t.max-x,V=!0);V?(y-=.8*(y-h[l][0]),"number"===typeof F&&(F-=.8*(F-h[l][1])),e()):h[l]=[y,F];z||(n[l]=B-w,n[b]=x);n=z?
1/g:g;k[b]=x;k[l]=a;d[z?c?"scaleY":"scaleX":"scale"+v]=g;d["translate"+v]=n*w+(y-n*L)};n.prototype.reset=function(c,a){var f=this.chart,e=f.hoverSeries,d=f.hoverPoint,k=f.hoverPoints,n=f.tooltip,h=n&&n.shared?k:d;c&&h&&P(h).forEach(function(a){a.series.isCartesian&&"undefined"===typeof a.plotX&&(c=!1)});if(c)n&&h&&P(h).length&&(n.refresh(h),n.shared&&k?k.forEach(function(a){a.setState(a.state,!0);a.series.isCartesian&&(a.series.xAxis.crosshair&&a.series.xAxis.drawCrosshair(null,a),a.series.yAxis.crosshair&&
a.series.yAxis.drawCrosshair(null,a))}):d&&(d.setState(d.state,!0),f.axes.forEach(function(a){a.crosshair&&d.series[a.coll]===a&&a.drawCrosshair(null,d)})));else{if(d)d.onMouseOut();k&&k.forEach(function(a){a.setState()});if(e)e.onMouseOut();n&&n.hide(a);this.unDocMouseMove&&(this.unDocMouseMove=this.unDocMouseMove());f.axes.forEach(function(a){a.hideCrosshair()});this.hoverX=f.hoverPoints=f.hoverPoint=null}};n.prototype.runPointActions=function(f,a){var e=this.chart,k=e.tooltip&&e.tooltip.options.enabled?
e.tooltip:void 0,n=k?k.shared:!1,h=a||e.hoverPoint,g=h&&h.series||e.hoverSeries;g=this.getHoverData(h,g,e.series,(!f||"touchmove"!==f.type)&&(!!a||g&&g.directTouch&&this.isDirectTouch),n,f);h=g.hoverPoint;var t=g.hoverPoints;a=(g=g.hoverSeries)&&g.tooltipOptions.followPointer;n=n&&g&&!g.noSharedTooltip;if(h&&(h!==e.hoverPoint||k&&k.isHidden)){(e.hoverPoints||[]).forEach(function(a){-1===t.indexOf(a)&&a.setState()});if(e.hoverSeries!==g)g.onMouseOver();this.applyInactiveState(t);(t||[]).forEach(function(a){a.setState("hover")});
e.hoverPoint&&e.hoverPoint.firePointEvent("mouseOut");if(!h.series)return;h.firePointEvent("mouseOver");e.hoverPoints=t;e.hoverPoint=h;k&&k.refresh(n?t:h,f)}else a&&k&&!k.isHidden&&(h=k.getAnchor([{}],f),k.updatePosition({plotX:h[0],plotY:h[1]}));this.unDocMouseMove||(this.unDocMouseMove=I(e.container.ownerDocument,"mousemove",function(a){var f=c[d.hoverChartIndex];if(f)f.pointer.onDocumentMouseMove(a)}));e.axes.forEach(function(a){var c=q(a.crosshair.snap,!0),e=c?J(t,function(c){return c.series[a.coll]===
a}):void 0;e||!c?a.drawCrosshair(f,e):a.hideCrosshair()})};n.prototype.scaleGroups=function(c,a){var f=this.chart,e;f.series.forEach(function(d){e=c||d.getPlotBox();d.xAxis&&d.xAxis.zoomEnabled&&d.group&&(d.group.attr(e),d.markerGroup&&(d.markerGroup.attr(e),d.markerGroup.clip(a?f.clipRect:null)),d.dataLabelsGroup&&d.dataLabelsGroup.attr(e))});f.clipRect.attr(a||f.clipBox)};n.prototype.setDOMEvents=function(){var c=this,a=c.chart.container,e=a.ownerDocument;a.onmousedown=function(a){c.onContainerMouseDown(a)};
a.onmousemove=function(a){c.onContainerMouseMove(a)};a.onclick=function(a){c.onContainerClick(a)};this.unbindContainerMouseLeave=I(a,"mouseleave",c.onContainerMouseLeave);d.unbindDocumentMouseUp||(d.unbindDocumentMouseUp=I(e,"mouseup",c.onDocumentMouseUp));d.hasTouch&&(I(a,"touchstart",function(a){c.onContainerTouchStart(a)}),I(a,"touchmove",function(a){c.onContainerTouchMove(a)}),d.unbindDocumentTouchEnd||(d.unbindDocumentTouchEnd=I(e,"touchend",c.onDocumentTouchEnd)))};n.prototype.touch=function(c,
a){var f=this.chart,e;if(f.index!==d.hoverChartIndex)this.onContainerMouseLeave({relatedTarget:!0});d.hoverChartIndex=f.index;if(1===c.touches.length)if(c=this.normalize(c),(e=f.isInsidePlot(c.chartX-f.plotLeft,c.chartY-f.plotTop))&&!f.openMenu){a&&this.runPointActions(c);if("touchmove"===c.type){a=this.pinchDown;var k=a[0]?4<=Math.sqrt(Math.pow(a[0].chartX-c.chartX,2)+Math.pow(a[0].chartY-c.chartY,2)):!1}q(k,!0)&&this.pinch(c)}else a&&this.reset();else 2===c.touches.length&&this.pinch(c)};n.prototype.zoomOption=
function(c){var a=this.chart,f=a.options.chart,e=f.zoomType||"";a=a.inverted;/touch/.test(c.type)&&(e=q(f.pinchType,e));this.zoomX=c=/x/.test(e);this.zoomY=e=/y/.test(e);this.zoomHor=c&&!a||e&&a;this.zoomVert=e&&!a||c&&a;this.hasZoom=c||e};return n}();d.Pointer=g;return d.Pointer});S(r,"parts/MSPointer.js",[r["parts/Globals.js"],r["parts/Pointer.js"],r["parts/Utilities.js"]],function(d,g,r){function u(){var d=[];d.item=function(d){return this[d]};G(h,function(h){d.push({pageX:h.pageX,pageY:h.pageY,
target:h.target})});return d}function I(h,g,e,c){"touch"!==h.pointerType&&h.pointerType!==h.MSPOINTER_TYPE_TOUCH||!y[d.hoverChartIndex]||(c(h),c=y[d.hoverChartIndex].pointer,c[g]({type:e,target:h.currentTarget,preventDefault:D,touches:u()}))}var M=this&&this.__extends||function(){var d=function(h,e){d=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(c,e){c.__proto__=e}||function(c,e){for(var d in e)e.hasOwnProperty(d)&&(c[d]=e[d])};return d(h,e)};return function(h,e){function c(){this.constructor=
h}d(h,e);h.prototype=null===e?Object.create(e):(c.prototype=e.prototype,new c)}}(),E=r.addEvent,A=r.css,G=r.objectEach,J=r.removeEvent,y=d.charts,t=d.doc,D=d.noop,h={},N=!!d.win.PointerEvent;return function(d){function g(){return null!==d&&d.apply(this,arguments)||this}M(g,d);g.prototype.batchMSEvents=function(e){e(this.chart.container,N?"pointerdown":"MSPointerDown",this.onContainerPointerDown);e(this.chart.container,N?"pointermove":"MSPointerMove",this.onContainerPointerMove);e(t,N?"pointerup":
"MSPointerUp",this.onDocumentPointerUp)};g.prototype.destroy=function(){this.batchMSEvents(J);d.prototype.destroy.call(this)};g.prototype.init=function(e,c){d.prototype.init.call(this,e,c);this.hasZoom&&A(e.container,{"-ms-touch-action":"none","touch-action":"none"})};g.prototype.onContainerPointerDown=function(e){I(e,"onContainerTouchStart","touchstart",function(c){h[c.pointerId]={pageX:c.pageX,pageY:c.pageY,target:c.currentTarget}})};g.prototype.onContainerPointerMove=function(e){I(e,"onContainerTouchMove",
"touchmove",function(c){h[c.pointerId]={pageX:c.pageX,pageY:c.pageY};h[c.pointerId].target||(h[c.pointerId].target=c.currentTarget)})};g.prototype.onDocumentPointerUp=function(e){I(e,"onDocumentTouchEnd","touchend",function(c){delete h[c.pointerId]})};g.prototype.setDOMEvents=function(){d.prototype.setDOMEvents.call(this);(this.hasZoom||this.followTouchMove)&&this.batchMSEvents(E)};return g}(g)});S(r,"parts/Legend.js",[r["parts/Globals.js"],r["parts/Utilities.js"]],function(d,g){var r=g.addEvent,
u=g.css,I=g.defined,M=g.discardElement,E=g.find,A=g.fireEvent,G=g.format,J=g.isNumber,y=g.merge,t=g.pick,D=g.relativeLength,h=g.setAnimation,N=g.stableSort,q=g.syncTimeout;g=g.wrap;var P=d.isFirefox,e=d.marginNames,c=d.win,k=function(){function c(c,a){this.allItems=[];this.contentGroup=this.box=void 0;this.display=!1;this.group=void 0;this.offsetWidth=this.maxLegendWidth=this.maxItemWidth=this.legendWidth=this.legendHeight=this.lastLineHeight=this.lastItemY=this.itemY=this.itemX=this.itemMarginTop=
this.itemMarginBottom=this.itemHeight=this.initialItemY=0;this.options={};this.padding=0;this.pages=[];this.proximate=!1;this.scrollGroup=void 0;this.widthOption=this.totalItemWidth=this.titleHeight=this.symbolWidth=this.symbolHeight=0;this.chart=c;this.init(c,a)}c.prototype.init=function(c,a){this.chart=c;this.setOptions(a);a.enabled&&(this.render(),r(this.chart,"endResize",function(){this.legend.positionCheckboxes()}),this.proximate?this.unchartrender=r(this.chart,"render",function(){this.legend.proximatePositions();
this.legend.positionItems()}):this.unchartrender&&this.unchartrender())};c.prototype.setOptions=function(c){var a=t(c.padding,8);this.options=c;this.chart.styledMode||(this.itemStyle=c.itemStyle,this.itemHiddenStyle=y(this.itemStyle,c.itemHiddenStyle));this.itemMarginTop=c.itemMarginTop||0;this.itemMarginBottom=c.itemMarginBottom||0;this.padding=a;this.initialItemY=a-5;this.symbolWidth=t(c.symbolWidth,16);this.pages=[];this.proximate="proximate"===c.layout&&!this.chart.inverted;this.baseline=void 0};
c.prototype.update=function(c,a){var f=this.chart;this.setOptions(y(!0,this.options,c));this.destroy();f.isDirtyLegend=f.isDirtyBox=!0;t(a,!0)&&f.redraw();A(this,"afterUpdate")};c.prototype.colorizeItem=function(c,a){c.legendGroup[a?"removeClass":"addClass"]("highcharts-legend-item-hidden");if(!this.chart.styledMode){var f=this.options,e=c.legendItem,d=c.legendLine,k=c.legendSymbol,h=this.itemHiddenStyle.color;f=a?f.itemStyle.color:h;var n=a?c.color||h:h,g=c.options&&c.options.marker,q={fill:n};e&&
e.css({fill:f,color:f});d&&d.attr({stroke:n});k&&(g&&k.isMarker&&(q=c.pointAttribs(),a||(q.stroke=q.fill=h)),k.attr(q))}A(this,"afterColorizeItem",{item:c,visible:a})};c.prototype.positionItems=function(){this.allItems.forEach(this.positionItem,this);this.chart.isResizing||this.positionCheckboxes()};c.prototype.positionItem=function(c){var a=this.options,f=a.symbolPadding;a=!a.rtl;var e=c._legendItemPos,d=e[0];e=e[1];var k=c.checkbox;if((c=c.legendGroup)&&c.element)c[I(c.translateY)?"animate":"attr"]({translateX:a?
d:this.legendWidth-d-2*f-4,translateY:e});k&&(k.x=d,k.y=e)};c.prototype.destroyItem=function(c){var a=c.checkbox;["legendItem","legendLine","legendSymbol","legendGroup"].forEach(function(a){c[a]&&(c[a]=c[a].destroy())});a&&M(c.checkbox)};c.prototype.destroy=function(){function c(a){this[a]&&(this[a]=this[a].destroy())}this.getAllItems().forEach(function(a){["legendItem","legendGroup"].forEach(c,a)});"clipRect up down pager nav box title group".split(" ").forEach(c,this);this.display=null};c.prototype.positionCheckboxes=
function(){var c=this.group&&this.group.alignAttr,a=this.clipHeight||this.legendHeight,e=this.titleHeight;if(c){var d=c.translateY;this.allItems.forEach(function(f){var k=f.checkbox;if(k){var l=d+e+k.y+(this.scrollOffset||0)+3;u(k,{left:c.translateX+f.checkboxOffset+k.x-20+"px",top:l+"px",display:this.proximate||l>d-6&&l<d+a-6?"":"none"})}},this)}};c.prototype.renderTitle=function(){var c=this.options,a=this.padding,e=c.title,d=0;e.text&&(this.title||(this.title=this.chart.renderer.label(e.text,a-
3,a-4,null,null,null,c.useHTML,null,"legend-title").attr({zIndex:1}),this.chart.styledMode||this.title.css(e.style),this.title.add(this.group)),e.width||this.title.css({width:this.maxLegendWidth+"px"}),c=this.title.getBBox(),d=c.height,this.offsetWidth=c.width,this.contentGroup.attr({translateY:d}));this.titleHeight=d};c.prototype.setText=function(c){var a=this.options;c.legendItem.attr({text:a.labelFormat?G(a.labelFormat,c,this.chart):a.labelFormatter.call(c)})};c.prototype.renderItem=function(c){var a=
this.chart,e=a.renderer,f=this.options,d=this.symbolWidth,k=f.symbolPadding,h=this.itemStyle,n=this.itemHiddenStyle,g="horizontal"===f.layout?t(f.itemDistance,20):0,q=!f.rtl,K=c.legendItem,p=!c.series,b=!p&&c.series.drawLegendSymbol?c.series:c,C=b.options;C=this.createCheckboxForItem&&C&&C.showCheckbox;g=d+k+g+(C?20:0);var x=f.useHTML,R=c.options.className;K||(c.legendGroup=e.g("legend-item").addClass("highcharts-"+b.type+"-series highcharts-color-"+c.colorIndex+(R?" "+R:"")+(p?" highcharts-series-"+
c.index:"")).attr({zIndex:1}).add(this.scrollGroup),c.legendItem=K=e.text("",q?d+k:-k,this.baseline||0,x),a.styledMode||K.css(y(c.visible?h:n)),K.attr({align:q?"left":"right",zIndex:2}).add(c.legendGroup),this.baseline||(this.fontMetrics=e.fontMetrics(a.styledMode?12:h.fontSize,K),this.baseline=this.fontMetrics.f+3+this.itemMarginTop,K.attr("y",this.baseline)),this.symbolHeight=f.symbolHeight||this.fontMetrics.f,b.drawLegendSymbol(this,c),this.setItemEvents&&this.setItemEvents(c,K,x));C&&!c.checkbox&&
this.createCheckboxForItem&&this.createCheckboxForItem(c);this.colorizeItem(c,c.visible);!a.styledMode&&h.width||K.css({width:(f.itemWidth||this.widthOption||a.spacingBox.width)-g});this.setText(c);a=K.getBBox();c.itemWidth=c.checkboxOffset=f.itemWidth||c.legendItemWidth||a.width+g;this.maxItemWidth=Math.max(this.maxItemWidth,c.itemWidth);this.totalItemWidth+=c.itemWidth;this.itemHeight=c.itemHeight=Math.round(c.legendItemHeight||a.height||this.symbolHeight)};c.prototype.layoutItem=function(c){var a=
this.options,e=this.padding,f="horizontal"===a.layout,d=c.itemHeight,k=this.itemMarginBottom,h=this.itemMarginTop,n=f?t(a.itemDistance,20):0,g=this.maxLegendWidth;a=a.alignColumns&&this.totalItemWidth>g?this.maxItemWidth:c.itemWidth;f&&this.itemX-e+a>g&&(this.itemX=e,this.lastLineHeight&&(this.itemY+=h+this.lastLineHeight+k),this.lastLineHeight=0);this.lastItemY=h+this.itemY+k;this.lastLineHeight=Math.max(d,this.lastLineHeight);c._legendItemPos=[this.itemX,this.itemY];f?this.itemX+=a:(this.itemY+=
h+d+k,this.lastLineHeight=d);this.offsetWidth=this.widthOption||Math.max((f?this.itemX-e-(c.checkbox?0:n):a)+e,this.offsetWidth)};c.prototype.getAllItems=function(){var c=[];this.chart.series.forEach(function(a){var e=a&&a.options;a&&t(e.showInLegend,I(e.linkedTo)?!1:void 0,!0)&&(c=c.concat(a.legendItems||("point"===e.legendType?a.data:a)))});A(this,"afterGetAllItems",{allItems:c});return c};c.prototype.getAlignment=function(){var c=this.options;return this.proximate?c.align.charAt(0)+"tv":c.floating?
"":c.align.charAt(0)+c.verticalAlign.charAt(0)+c.layout.charAt(0)};c.prototype.adjustMargins=function(c,a){var f=this.chart,d=this.options,k=this.getAlignment();k&&[/(lth|ct|rth)/,/(rtv|rm|rbv)/,/(rbh|cb|lbh)/,/(lbv|lm|ltv)/].forEach(function(l,h){l.test(k)&&!I(c[h])&&(f[e[h]]=Math.max(f[e[h]],f.legend[(h+1)%2?"legendHeight":"legendWidth"]+[1,-1,-1,1][h]*d[h%2?"x":"y"]+t(d.margin,12)+a[h]+(f.titleOffset[h]||0)))})};c.prototype.proximatePositions=function(){var c=this.chart,a=[],e="left"===this.options.align;
this.allItems.forEach(function(f){var d=e;if(f.yAxis&&f.points){f.xAxis.options.reversed&&(d=!d);var k=E(d?f.points:f.points.slice(0).reverse(),function(a){return J(a.plotY)});d=this.itemMarginTop+f.legendItem.getBBox().height+this.itemMarginBottom;var l=f.yAxis.top-c.plotTop;f.visible?(k=k?k.plotY:f.yAxis.height,k+=l-.3*d):k=l+f.yAxis.height;a.push({target:k,size:d,item:f})}},this);d.distribute(a,c.plotHeight);a.forEach(function(a){a.item._legendItemPos[1]=c.plotTop-c.spacing[0]+a.pos})};c.prototype.render=
function(){var c=this.chart,a=c.renderer,e=this.group,d,k=this.box,h=this.options,n=this.padding;this.itemX=n;this.itemY=this.initialItemY;this.lastItemY=this.offsetWidth=0;this.widthOption=D(h.width,c.spacingBox.width-n);var g=c.spacingBox.width-2*n-h.x;-1<["rm","lm"].indexOf(this.getAlignment().substring(0,2))&&(g/=2);this.maxLegendWidth=this.widthOption||g;e||(this.group=e=a.g("legend").attr({zIndex:7}).add(),this.contentGroup=a.g().attr({zIndex:1}).add(e),this.scrollGroup=a.g().add(this.contentGroup));
this.renderTitle();g=this.getAllItems();N(g,function(a,c){return(a.options&&a.options.legendIndex||0)-(c.options&&c.options.legendIndex||0)});h.reversed&&g.reverse();this.allItems=g;this.display=d=!!g.length;this.itemHeight=this.totalItemWidth=this.maxItemWidth=this.lastLineHeight=0;g.forEach(this.renderItem,this);g.forEach(this.layoutItem,this);g=(this.widthOption||this.offsetWidth)+n;var q=this.lastItemY+this.lastLineHeight+this.titleHeight;q=this.handleOverflow(q);q+=n;k||(this.box=k=a.rect().addClass("highcharts-legend-box").attr({r:h.borderRadius}).add(e),
k.isNew=!0);c.styledMode||k.attr({stroke:h.borderColor,"stroke-width":h.borderWidth||0,fill:h.backgroundColor||"none"}).shadow(h.shadow);0<g&&0<q&&(k[k.isNew?"attr":"animate"](k.crisp.call({},{x:0,y:0,width:g,height:q},k.strokeWidth())),k.isNew=!1);k[d?"show":"hide"]();c.styledMode&&"none"===e.getStyle("display")&&(g=q=0);this.legendWidth=g;this.legendHeight=q;d&&(a=c.spacingBox,k=a.y,/(lth|ct|rth)/.test(this.getAlignment())&&0<c.titleOffset[0]?k+=c.titleOffset[0]:/(lbh|cb|rbh)/.test(this.getAlignment())&&
0<c.titleOffset[2]&&(k-=c.titleOffset[2]),k!==a.y&&(a=y(a,{y:k})),e.align(y(h,{width:g,height:q,verticalAlign:this.proximate?"top":h.verticalAlign}),!0,a));this.proximate||this.positionItems();A(this,"afterRender")};c.prototype.handleOverflow=function(c){var a=this,e=this.chart,f=e.renderer,d=this.options,k=d.y,h=this.padding;k=e.spacingBox.height+("top"===d.verticalAlign?-k:k)-h;var n=d.maxHeight,g,q=this.clipRect,y=d.navigation,p=t(y.animation,!0),b=y.arrowSize||12,C=this.nav,x=this.pages,R,O=this.allItems,
u=function(b){"number"===typeof b?q.attr({height:b}):q&&(a.clipRect=q.destroy(),a.contentGroup.clip());a.contentGroup.div&&(a.contentGroup.div.style.clip=b?"rect("+h+"px,9999px,"+(h+b)+"px,0)":"auto")},D=function(c){a[c]=f.circle(0,0,1.3*b).translate(b/2,b/2).add(C);e.styledMode||a[c].attr("fill","rgba(0,0,0,0.0001)");return a[c]};"horizontal"!==d.layout||"middle"===d.verticalAlign||d.floating||(k/=2);n&&(k=Math.min(k,n));x.length=0;c>k&&!1!==y.enabled?(this.clipHeight=g=Math.max(k-20-this.titleHeight-
h,0),this.currentPage=t(this.currentPage,1),this.fullHeight=c,O.forEach(function(b,a){var c=b._legendItemPos[1],e=Math.round(b.legendItem.getBBox().height),f=x.length;if(!f||c-x[f-1]>g&&(R||c)!==x[f-1])x.push(R||c),f++;b.pageIx=f-1;R&&(O[a-1].pageIx=f-1);a===O.length-1&&c+e-x[f-1]>g&&c!==R&&(x.push(c),b.pageIx=f);c!==R&&(R=c)}),q||(q=a.clipRect=f.clipRect(0,h,9999,0),a.contentGroup.clip(q)),u(g),C||(this.nav=C=f.g().attr({zIndex:1}).add(this.group),this.up=f.symbol("triangle",0,0,b,b).add(C),D("upTracker").on("click",
function(){a.scroll(-1,p)}),this.pager=f.text("",15,10).addClass("highcharts-legend-navigation"),e.styledMode||this.pager.css(y.style),this.pager.add(C),this.down=f.symbol("triangle-down",0,0,b,b).add(C),D("downTracker").on("click",function(){a.scroll(1,p)})),a.scroll(0),c=k):C&&(u(),this.nav=C.destroy(),this.scrollGroup.attr({translateY:1}),this.clipHeight=0);return c};c.prototype.scroll=function(c,a){var e=this,f=this.chart,k=this.pages,n=k.length,g=this.currentPage+c;c=this.clipHeight;var y=this.options.navigation,
u=this.pager,H=this.padding;g>n&&(g=n);0<g&&("undefined"!==typeof a&&h(a,f),this.nav.attr({translateX:H,translateY:c+this.padding+7+this.titleHeight,visibility:"visible"}),[this.up,this.upTracker].forEach(function(a){a.attr({"class":1===g?"highcharts-legend-nav-inactive":"highcharts-legend-nav-active"})}),u.attr({text:g+"/"+n}),[this.down,this.downTracker].forEach(function(a){a.attr({x:18+this.pager.getBBox().width,"class":g===n?"highcharts-legend-nav-inactive":"highcharts-legend-nav-active"})},this),
f.styledMode||(this.up.attr({fill:1===g?y.inactiveColor:y.activeColor}),this.upTracker.css({cursor:1===g?"default":"pointer"}),this.down.attr({fill:g===n?y.inactiveColor:y.activeColor}),this.downTracker.css({cursor:g===n?"default":"pointer"})),this.scrollOffset=-k[g-1]+this.initialItemY,this.scrollGroup.animate({translateY:this.scrollOffset}),this.currentPage=g,this.positionCheckboxes(),a=d.animObject(t(a,f.renderer.globalAnimation,!0)),q(function(){A(e,"afterScroll",{currentPage:g})},a.duration||
0))};return c}();(/Trident\/7\.0/.test(c.navigator&&c.navigator.userAgent)||P)&&g(k.prototype,"positionItem",function(c,e){var a=this,f=function(){e._legendItemPos&&c.call(a,e)};f();a.bubbleLegend||setTimeout(f)});d.Legend=k;return d.Legend});S(r,"parts/Chart.js",[r["parts/Globals.js"],r["parts/Legend.js"],r["parts/MSPointer.js"],r["parts/Pointer.js"],r["parts/Time.js"],r["parts/Utilities.js"]],function(d,g,r,u,I,M){var E=M.addEvent,A=M.animate,G=M.animObject,J=M.attr,y=M.createElement,t=M.css,D=
M.defined,h=M.discardElement,N=M.erase,q=M.error,P=M.extend,e=M.find,c=M.fireEvent,k=M.getStyle,n=M.isArray,f=M.isFunction,a=M.isNumber,l=M.isObject,v=M.isString,z=M.merge,w=M.numberFormat,B=M.objectEach,L=M.pick,Q=M.pInt,H=M.relativeLength,K=M.removeEvent,p=M.setAnimation,b=M.splat,C=M.syncTimeout,x=M.uniqueKey,R=d.doc,O=d.Axis,X=d.defaultOptions,U=d.charts,m=d.marginNames,T=d.seriesTypes,Z=d.win,ca=d.Chart=function(){this.getArgs.apply(this,arguments)};d.chart=function(b,a,c){return new ca(b,a,
c)};P(ca.prototype,{callbacks:[],getArgs:function(){var b=[].slice.call(arguments);if(v(b[0])||b[0].nodeName)this.renderTo=b.shift();this.init(b[0],b[1])},init:function(b,a){var e,k=b.series,h=b.plotOptions||{};c(this,"init",{args:arguments},function(){b.series=null;e=z(X,b);B(e.plotOptions,function(b,a){l(b)&&(b.tooltip=h[a]&&z(h[a].tooltip)||void 0)});e.tooltip.userOptions=b.chart&&b.chart.forExport&&b.tooltip.userOptions||b.tooltip;e.series=b.series=k;this.userOptions=b;var m=e.chart,n=m.events;
this.margin=[];this.spacing=[];this.bounds={h:{},v:{}};this.labelCollectors=[];this.callback=a;this.isResizing=0;this.options=e;this.axes=[];this.series=[];this.time=b.time&&Object.keys(b.time).length?new I(b.time):d.time;this.numberFormatter=m.numberFormatter||w;this.styledMode=m.styledMode;this.hasCartesianSeries=m.showAxes;var p=this;p.index=U.length;U.push(p);d.chartCount++;n&&B(n,function(b,a){f(b)&&E(p,a,b)});p.xAxis=[];p.yAxis=[];p.pointCount=p.colorCounter=p.symbolCounter=0;c(p,"afterInit");
p.firstRender()})},initSeries:function(b){var a=this.options.chart;a=b.type||a.type||a.defaultSeriesType;var c=T[a];c||q(17,!0,this,{missingModuleFor:a});a=new c;a.init(this,b);return a},setSeriesData:function(){this.getSeriesOrderByLinks().forEach(function(b){b.points||b.data||!b.enabledDataSorting||b.setData(b.options.data,!1)})},getSeriesOrderByLinks:function(){return this.series.concat().sort(function(b,a){return b.linkedSeries.length||a.linkedSeries.length?a.linkedSeries.length-b.linkedSeries.length:
0})},orderSeries:function(b){var a=this.series;for(b=b||0;b<a.length;b++)a[b]&&(a[b].index=b,a[b].name=a[b].getName())},isInsidePlot:function(b,a,e){var f=e?a:b;b=e?b:a;f={x:f,y:b,isInsidePlot:0<=f&&f<=this.plotWidth&&0<=b&&b<=this.plotHeight};c(this,"afterIsInsidePlot",f);return f.isInsidePlot},redraw:function(b){c(this,"beforeRedraw");var a=this.axes,e=this.series,f=this.pointer,d=this.legend,k=this.userOptions.legend,l=this.isDirtyLegend,h=this.hasCartesianSeries,m=this.isDirtyBox,n=this.renderer,
x=n.isHidden(),g=[];this.setResponsive&&this.setResponsive(!1);p(this.hasRendered?b:!1,this);x&&this.temporaryDisplay();this.layOutTitles();for(b=e.length;b--;){var w=e[b];if(w.options.stacking){var C=!0;if(w.isDirty){var v=!0;break}}}if(v)for(b=e.length;b--;)w=e[b],w.options.stacking&&(w.isDirty=!0);e.forEach(function(b){b.isDirty&&("point"===b.options.legendType?(b.updateTotals&&b.updateTotals(),l=!0):k&&(k.labelFormatter||k.labelFormat)&&(l=!0));b.isDirtyData&&c(b,"updatedData")});l&&d&&d.options.enabled&&
(d.render(),this.isDirtyLegend=!1);C&&this.getStacks();h&&a.forEach(function(b){b.updateNames();b.setScale()});this.getMargins();h&&(a.forEach(function(b){b.isDirty&&(m=!0)}),a.forEach(function(b){var a=b.min+","+b.max;b.extKey!==a&&(b.extKey=a,g.push(function(){c(b,"afterSetExtremes",P(b.eventArgs,b.getExtremes()));delete b.eventArgs}));(m||C)&&b.redraw()}));m&&this.drawChartBox();c(this,"predraw");e.forEach(function(b){(m||b.isDirty)&&b.visible&&b.redraw();b.isDirtyData=!1});f&&f.reset(!0);n.draw();
c(this,"redraw");c(this,"render");x&&this.temporaryDisplay(!0);g.forEach(function(b){b.call()})},get:function(b){function a(a){return a.id===b||a.options&&a.options.id===b}var c=this.series,f;var d=e(this.axes,a)||e(this.series,a);for(f=0;!d&&f<c.length;f++)d=e(c[f].points||[],a);return d},getAxes:function(){var a=this,e=this.options,f=e.xAxis=b(e.xAxis||{});e=e.yAxis=b(e.yAxis||{});c(this,"getAxes");f.forEach(function(b,a){b.index=a;b.isX=!0});e.forEach(function(b,a){b.index=a});f.concat(e).forEach(function(b){new O(a,
b)});c(this,"afterGetAxes")},getSelectedPoints:function(){var b=[];this.series.forEach(function(a){b=b.concat(a.getPointsCollection().filter(function(b){return L(b.selectedStaging,b.selected)}))});return b},getSelectedSeries:function(){return this.series.filter(function(b){return b.selected})},setTitle:function(b,a,c){this.applyDescription("title",b);this.applyDescription("subtitle",a);this.applyDescription("caption",void 0);this.layOutTitles(c)},applyDescription:function(b,a){var c=this,e="title"===
b?{color:"#333333",fontSize:this.options.isStock?"16px":"18px"}:{color:"#666666"};e=this.options[b]=z(!this.styledMode&&{style:e},this.options[b],a);var f=this[b];f&&a&&(this[b]=f=f.destroy());e&&!f&&(f=this.renderer.text(e.text,0,0,e.useHTML).attr({align:e.align,"class":"highcharts-"+b,zIndex:e.zIndex||4}).add(),f.update=function(a){c[{title:"setTitle",subtitle:"setSubtitle",caption:"setCaption"}[b]](a)},this.styledMode||f.css(e.style),this[b]=f)},layOutTitles:function(b){var a=[0,0,0],e=this.renderer,
f=this.spacingBox;["title","subtitle","caption"].forEach(function(b){var c=this[b],d=this.options[b],k=d.verticalAlign||"top";b="title"===b?-3:"top"===k?a[0]+2:0;if(c){if(!this.styledMode)var l=d.style.fontSize;l=e.fontMetrics(l,c).b;c.css({width:(d.width||f.width+(d.widthAdjust||0))+"px"});var h=Math.round(c.getBBox(d.useHTML).height);c.align(P({y:"bottom"===k?l:b+l,height:h},d),!1,"spacingBox");d.floating||("top"===k?a[0]=Math.ceil(a[0]+h):"bottom"===k&&(a[2]=Math.ceil(a[2]+h)))}},this);a[0]&&"top"===
(this.options.title.verticalAlign||"top")&&(a[0]+=this.options.title.margin);a[2]&&"bottom"===this.options.caption.verticalAlign&&(a[2]+=this.options.caption.margin);var d=!this.titleOffset||this.titleOffset.join(",")!==a.join(",");this.titleOffset=a;c(this,"afterLayOutTitles");!this.isDirtyBox&&d&&(this.isDirtyBox=this.isDirtyLegend=d,this.hasRendered&&L(b,!0)&&this.isDirtyBox&&this.redraw())},getChartSize:function(){var b=this.options.chart,a=b.width;b=b.height;var c=this.renderTo;D(a)||(this.containerWidth=
k(c,"width"));D(b)||(this.containerHeight=k(c,"height"));this.chartWidth=Math.max(0,a||this.containerWidth||600);this.chartHeight=Math.max(0,H(b,this.chartWidth)||(1<this.containerHeight?this.containerHeight:400))},temporaryDisplay:function(b){var a=this.renderTo;if(b)for(;a&&a.style;)a.hcOrigStyle&&(t(a,a.hcOrigStyle),delete a.hcOrigStyle),a.hcOrigDetached&&(R.body.removeChild(a),a.hcOrigDetached=!1),a=a.parentNode;else for(;a&&a.style;){R.body.contains(a)||a.parentNode||(a.hcOrigDetached=!0,R.body.appendChild(a));
if("none"===k(a,"display",!1)||a.hcOricDetached)a.hcOrigStyle={display:a.style.display,height:a.style.height,overflow:a.style.overflow},b={display:"block",overflow:"hidden"},a!==this.renderTo&&(b.height=0),t(a,b),a.offsetWidth||a.style.setProperty("display","block","important");a=a.parentNode;if(a===R.body)break}},setClassName:function(b){this.container.className="highcharts-container "+(b||"")},getContainer:function(){var b=this.options,e=b.chart;var f=this.renderTo;var k=x(),l,h;f||(this.renderTo=
f=e.renderTo);v(f)&&(this.renderTo=f=R.getElementById(f));f||q(13,!0,this);var m=Q(J(f,"data-highcharts-chart"));a(m)&&U[m]&&U[m].hasRendered&&U[m].destroy();J(f,"data-highcharts-chart",this.index);f.innerHTML="";e.skipClone||f.offsetWidth||this.temporaryDisplay();this.getChartSize();m=this.chartWidth;var n=this.chartHeight;t(f,{overflow:"hidden"});this.styledMode||(l=P({position:"relative",overflow:"hidden",width:m+"px",height:n+"px",textAlign:"left",lineHeight:"normal",zIndex:0,"-webkit-tap-highlight-color":"rgba(0,0,0,0)"},
e.style));this.container=f=y("div",{id:k},l,f);this._cursor=f.style.cursor;this.renderer=new (d[e.renderer]||d.Renderer)(f,m,n,null,e.forExport,b.exporting&&b.exporting.allowHTML,this.styledMode);p(void 0,this);this.setClassName(e.className);if(this.styledMode)for(h in b.defs)this.renderer.definition(b.defs[h]);else this.renderer.setStyle(e.style);this.renderer.chartIndex=this.index;c(this,"afterGetContainer")},getMargins:function(b){var a=this.spacing,e=this.margin,f=this.titleOffset;this.resetMargins();
f[0]&&!D(e[0])&&(this.plotTop=Math.max(this.plotTop,f[0]+a[0]));f[2]&&!D(e[2])&&(this.marginBottom=Math.max(this.marginBottom,f[2]+a[2]));this.legend&&this.legend.display&&this.legend.adjustMargins(e,a);c(this,"getMargins");b||this.getAxisMargins()},getAxisMargins:function(){var b=this,a=b.axisOffset=[0,0,0,0],c=b.colorAxis,e=b.margin,f=function(b){b.forEach(function(b){b.visible&&b.getOffset()})};b.hasCartesianSeries?f(b.axes):c&&c.length&&f(c);m.forEach(function(c,f){D(e[f])||(b[c]+=a[f])});b.setChartSize()},
reflow:function(b){var a=this,c=a.options.chart,e=a.renderTo,f=D(c.width)&&D(c.height),d=c.width||k(e,"width");c=c.height||k(e,"height");e=b?b.target:Z;if(!f&&!a.isPrinting&&d&&c&&(e===Z||e===R)){if(d!==a.containerWidth||c!==a.containerHeight)M.clearTimeout(a.reflowTimeout),a.reflowTimeout=C(function(){a.container&&a.setSize(void 0,void 0,!1)},b?100:0);a.containerWidth=d;a.containerHeight=c}},setReflow:function(b){var a=this;!1===b||this.unbindReflow?!1===b&&this.unbindReflow&&(this.unbindReflow=
this.unbindReflow()):(this.unbindReflow=E(Z,"resize",function(b){a.options&&a.reflow(b)}),E(this,"destroy",this.unbindReflow))},setSize:function(b,a,e){var f=this,d=f.renderer;f.isResizing+=1;p(e,f);e=d.globalAnimation;f.oldChartHeight=f.chartHeight;f.oldChartWidth=f.chartWidth;"undefined"!==typeof b&&(f.options.chart.width=b);"undefined"!==typeof a&&(f.options.chart.height=a);f.getChartSize();f.styledMode||(e?A:t)(f.container,{width:f.chartWidth+"px",height:f.chartHeight+"px"},e);f.setChartSize(!0);
d.setSize(f.chartWidth,f.chartHeight,e);f.axes.forEach(function(b){b.isDirty=!0;b.setScale()});f.isDirtyLegend=!0;f.isDirtyBox=!0;f.layOutTitles();f.getMargins();f.redraw(e);f.oldChartHeight=null;c(f,"resize");C(function(){f&&c(f,"endResize",null,function(){--f.isResizing})},G(e).duration||0)},setChartSize:function(b){var a=this.inverted,e=this.renderer,f=this.chartWidth,d=this.chartHeight,k=this.options.chart,l=this.spacing,h=this.clipOffset,m,n,p,x;this.plotLeft=m=Math.round(this.plotLeft);this.plotTop=
n=Math.round(this.plotTop);this.plotWidth=p=Math.max(0,Math.round(f-m-this.marginRight));this.plotHeight=x=Math.max(0,Math.round(d-n-this.marginBottom));this.plotSizeX=a?x:p;this.plotSizeY=a?p:x;this.plotBorderWidth=k.plotBorderWidth||0;this.spacingBox=e.spacingBox={x:l[3],y:l[0],width:f-l[3]-l[1],height:d-l[0]-l[2]};this.plotBox=e.plotBox={x:m,y:n,width:p,height:x};f=2*Math.floor(this.plotBorderWidth/2);a=Math.ceil(Math.max(f,h[3])/2);e=Math.ceil(Math.max(f,h[0])/2);this.clipBox={x:a,y:e,width:Math.floor(this.plotSizeX-
Math.max(f,h[1])/2-a),height:Math.max(0,Math.floor(this.plotSizeY-Math.max(f,h[2])/2-e))};b||this.axes.forEach(function(b){b.setAxisSize();b.setAxisTranslation()});c(this,"afterSetChartSize",{skipAxes:b})},resetMargins:function(){c(this,"resetMargins");var b=this,a=b.options.chart;["margin","spacing"].forEach(function(c){var e=a[c],f=l(e)?e:[e,e,e,e];["Top","Right","Bottom","Left"].forEach(function(e,d){b[c][d]=L(a[c+e],f[d])})});m.forEach(function(a,c){b[a]=L(b.margin[c],b.spacing[c])});b.axisOffset=
[0,0,0,0];b.clipOffset=[0,0,0,0]},drawChartBox:function(){var b=this.options.chart,a=this.renderer,e=this.chartWidth,f=this.chartHeight,d=this.chartBackground,k=this.plotBackground,l=this.plotBorder,h=this.styledMode,m=this.plotBGImage,n=b.backgroundColor,p=b.plotBackgroundColor,x=b.plotBackgroundImage,g,w=this.plotLeft,C=this.plotTop,v=this.plotWidth,q=this.plotHeight,t=this.plotBox,B=this.clipRect,z=this.clipBox,O="animate";d||(this.chartBackground=d=a.rect().addClass("highcharts-background").add(),
O="attr");if(h)var y=g=d.strokeWidth();else{y=b.borderWidth||0;g=y+(b.shadow?8:0);n={fill:n||"none"};if(y||d["stroke-width"])n.stroke=b.borderColor,n["stroke-width"]=y;d.attr(n).shadow(b.shadow)}d[O]({x:g/2,y:g/2,width:e-g-y%2,height:f-g-y%2,r:b.borderRadius});O="animate";k||(O="attr",this.plotBackground=k=a.rect().addClass("highcharts-plot-background").add());k[O](t);h||(k.attr({fill:p||"none"}).shadow(b.plotShadow),x&&(m?(x!==m.attr("href")&&m.attr("href",x),m.animate(t)):this.plotBGImage=a.image(x,
w,C,v,q).add()));B?B.animate({width:z.width,height:z.height}):this.clipRect=a.clipRect(z);O="animate";l||(O="attr",this.plotBorder=l=a.rect().addClass("highcharts-plot-border").attr({zIndex:1}).add());h||l.attr({stroke:b.plotBorderColor,"stroke-width":b.plotBorderWidth||0,fill:"none"});l[O](l.crisp({x:w,y:C,width:v,height:q},-l.strokeWidth()));this.isDirtyBox=!1;c(this,"afterDrawChartBox")},propFromSeries:function(){var b=this,a=b.options.chart,c,e=b.options.series,f,d;["inverted","angular","polar"].forEach(function(k){c=
T[a.type||a.defaultSeriesType];d=a[k]||c&&c.prototype[k];for(f=e&&e.length;!d&&f--;)(c=T[e[f].type])&&c.prototype[k]&&(d=!0);b[k]=d})},linkSeries:function(){var b=this,a=b.series;a.forEach(function(b){b.linkedSeries.length=0});a.forEach(function(a){var c=a.options.linkedTo;v(c)&&(c=":previous"===c?b.series[a.index-1]:b.get(c))&&c.linkedParent!==a&&(c.linkedSeries.push(a),a.linkedParent=c,c.enabledDataSorting&&a.setDataSortingOptions(),a.visible=L(a.options.visible,c.options.visible,a.visible))});
c(this,"afterLinkSeries")},renderSeries:function(){this.series.forEach(function(b){b.translate();b.render()})},renderLabels:function(){var b=this,a=b.options.labels;a.items&&a.items.forEach(function(c){var e=P(a.style,c.style),f=Q(e.left)+b.plotLeft,d=Q(e.top)+b.plotTop+12;delete e.left;delete e.top;b.renderer.text(c.html,f,d).attr({zIndex:2}).css(e).add()})},render:function(){var b=this.axes,a=this.colorAxis,c=this.renderer,e=this.options,f=0,d=function(b){b.forEach(function(b){b.visible&&b.render()})};
this.setTitle();this.legend=new g(this,e.legend);this.getStacks&&this.getStacks();this.getMargins(!0);this.setChartSize();e=this.plotWidth;b.some(function(b){if(b.horiz&&b.visible&&b.options.labels.enabled&&b.series.length)return f=21,!0});var k=this.plotHeight=Math.max(this.plotHeight-f,0);b.forEach(function(b){b.setScale()});this.getAxisMargins();var l=1.1<e/this.plotWidth;var h=1.05<k/this.plotHeight;if(l||h)b.forEach(function(b){(b.horiz&&l||!b.horiz&&h)&&b.setTickInterval(!0)}),this.getMargins();
this.drawChartBox();this.hasCartesianSeries?d(b):a&&a.length&&d(a);this.seriesGroup||(this.seriesGroup=c.g("series-group").attr({zIndex:3}).add());this.renderSeries();this.renderLabels();this.addCredits();this.setResponsive&&this.setResponsive();this.updateContainerScaling();this.hasRendered=!0},addCredits:function(b){var a=this;b=z(!0,this.options.credits,b);b.enabled&&!this.credits&&(this.credits=this.renderer.text(b.text+(this.mapCredits||""),0,0).addClass("highcharts-credits").on("click",function(){b.href&&
(Z.location.href=b.href)}).attr({align:b.position.align,zIndex:8}),a.styledMode||this.credits.css(b.style),this.credits.add().align(b.position),this.credits.update=function(b){a.credits=a.credits.destroy();a.addCredits(b)})},updateContainerScaling:function(){var b=this.container;if(b.offsetWidth&&b.offsetHeight&&b.getBoundingClientRect){var a=b.getBoundingClientRect(),c=a.width/b.offsetWidth;b=a.height/b.offsetHeight;1!==c||1!==b?this.containerScaling={scaleX:c,scaleY:b}:delete this.containerScaling}},
destroy:function(){var b=this,a=b.axes,e=b.series,f=b.container,k,l=f&&f.parentNode;c(b,"destroy");b.renderer.forExport?N(U,b):U[b.index]=void 0;d.chartCount--;b.renderTo.removeAttribute("data-highcharts-chart");K(b);for(k=a.length;k--;)a[k]=a[k].destroy();this.scroller&&this.scroller.destroy&&this.scroller.destroy();for(k=e.length;k--;)e[k]=e[k].destroy();"title subtitle chartBackground plotBackground plotBGImage plotBorder seriesGroup clipRect credits pointer rangeSelector legend resetZoomButton tooltip renderer".split(" ").forEach(function(a){var c=
b[a];c&&c.destroy&&(b[a]=c.destroy())});f&&(f.innerHTML="",K(f),l&&h(f));B(b,function(a,c){delete b[c]})},firstRender:function(){var b=this,a=b.options;if(!b.isReadyToRender||b.isReadyToRender()){b.getContainer();b.resetMargins();b.setChartSize();b.propFromSeries();b.getAxes();(n(a.series)?a.series:[]).forEach(function(a){b.initSeries(a)});b.linkSeries();b.setSeriesData();c(b,"beforeRender");u&&(b.pointer=d.hasTouch||!Z.PointerEvent&&!Z.MSPointerEvent?new u(b,a):new r(b,a));b.render();if(!b.renderer.imgCount&&
!b.hasLoaded)b.onload();b.temporaryDisplay(!0)}},onload:function(){this.callbacks.concat([this.callback]).forEach(function(b){b&&"undefined"!==typeof this.index&&b.apply(this,[this])},this);c(this,"load");c(this,"render");D(this.index)&&this.setReflow(this.options.chart.reflow);this.hasLoaded=!0}})});S(r,"parts/ScrollablePlotArea.js",[r["parts/Globals.js"],r["parts/Utilities.js"]],function(d,g){var r=g.addEvent,u=g.createElement,I=g.pick,M=g.stop;g=d.Chart;"";r(g,"afterSetChartSize",function(g){var u=
this.options.chart.scrollablePlotArea,r=u&&u.minWidth;u=u&&u.minHeight;if(!this.renderer.forExport){if(r){if(this.scrollablePixelsX=r=Math.max(0,r-this.chartWidth)){this.plotWidth+=r;this.inverted?(this.clipBox.height+=r,this.plotBox.height+=r):(this.clipBox.width+=r,this.plotBox.width+=r);var E={1:{name:"right",value:r}}}}else u&&(this.scrollablePixelsY=r=Math.max(0,u-this.chartHeight))&&(this.plotHeight+=r,this.inverted?(this.clipBox.width+=r,this.plotBox.width+=r):(this.clipBox.height+=r,this.plotBox.height+=
r),E={2:{name:"bottom",value:r}});E&&!g.skipAxes&&this.axes.forEach(function(g){E[g.side]?g.getPlotLinePath=function(){var t=E[g.side].name,y=this[t];this[t]=y-E[g.side].value;var h=d.Axis.prototype.getPlotLinePath.apply(this,arguments);this[t]=y;return h}:(g.setAxisSize(),g.setAxisTranslation())})}});r(g,"render",function(){this.scrollablePixelsX||this.scrollablePixelsY?(this.setUpScrolling&&this.setUpScrolling(),this.applyFixed()):this.fixedDiv&&this.applyFixed()});g.prototype.setUpScrolling=function(){var d=
this,g={WebkitOverflowScrolling:"touch",overflowX:"hidden",overflowY:"hidden"};this.scrollablePixelsX&&(g.overflowX="auto");this.scrollablePixelsY&&(g.overflowY="auto");this.scrollingContainer=u("div",{className:"highcharts-scrolling"},g,this.renderTo);r(this.scrollingContainer,"scroll",function(){d.pointer&&delete d.pointer.chartPosition});this.innerContainer=u("div",{className:"highcharts-inner-container"},null,this.scrollingContainer);this.innerContainer.appendChild(this.container);this.setUpScrolling=
null};g.prototype.moveFixedElements=function(){var d=this.container,g=this.fixedRenderer,u=".highcharts-contextbutton .highcharts-credits .highcharts-legend .highcharts-legend-checkbox .highcharts-navigator-series .highcharts-navigator-xaxis .highcharts-navigator-yaxis .highcharts-navigator .highcharts-reset-zoom .highcharts-scrollbar .highcharts-subtitle .highcharts-title".split(" "),r;this.scrollablePixelsX&&!this.inverted?r=".highcharts-yaxis":this.scrollablePixelsX&&this.inverted?r=".highcharts-xaxis":
this.scrollablePixelsY&&!this.inverted?r=".highcharts-xaxis":this.scrollablePixelsY&&this.inverted&&(r=".highcharts-yaxis");u.push(r,r+"-labels");u.forEach(function(y){[].forEach.call(d.querySelectorAll(y),function(d){(d.namespaceURI===g.SVG_NS?g.box:g.box.parentNode).appendChild(d);d.style.pointerEvents="auto"})})};g.prototype.applyFixed=function(){var g,A=!this.fixedDiv,G=this.options.chart.scrollablePlotArea;A?(this.fixedDiv=u("div",{className:"highcharts-fixed"},{position:"absolute",overflow:"hidden",
pointerEvents:"none",zIndex:2},null,!0),this.renderTo.insertBefore(this.fixedDiv,this.renderTo.firstChild),this.renderTo.style.overflow="visible",this.fixedRenderer=g=new d.Renderer(this.fixedDiv,this.chartWidth,this.chartHeight),this.scrollableMask=g.path().attr({fill:this.options.chart.backgroundColor||"#fff","fill-opacity":I(G.opacity,.85),zIndex:-1}).addClass("highcharts-scrollable-mask").add(),this.moveFixedElements(),r(this,"afterShowResetZoom",this.moveFixedElements),r(this,"afterLayOutTitles",
this.moveFixedElements)):this.fixedRenderer.setSize(this.chartWidth,this.chartHeight);g=this.chartWidth+(this.scrollablePixelsX||0);var J=this.chartHeight+(this.scrollablePixelsY||0);M(this.container);this.container.style.width=g+"px";this.container.style.height=J+"px";this.renderer.boxWrapper.attr({width:g,height:J,viewBox:[0,0,g,J].join(" ")});this.chartBackground.attr({width:g,height:J});this.scrollablePixelsY&&(this.scrollingContainer.style.height=this.chartHeight+"px");A&&(G.scrollPositionX&&
(this.scrollingContainer.scrollLeft=this.scrollablePixelsX*G.scrollPositionX),G.scrollPositionY&&(this.scrollingContainer.scrollTop=this.scrollablePixelsY*G.scrollPositionY));J=this.axisOffset;A=this.plotTop-J[0]-1;G=this.plotLeft-J[3]-1;g=this.plotTop+this.plotHeight+J[2]+1;J=this.plotLeft+this.plotWidth+J[1]+1;var y=this.plotLeft+this.plotWidth-(this.scrollablePixelsX||0),t=this.plotTop+this.plotHeight-(this.scrollablePixelsY||0);A=this.scrollablePixelsX?["M",0,A,"L",this.plotLeft-1,A,"L",this.plotLeft-
1,g,"L",0,g,"Z","M",y,A,"L",this.chartWidth,A,"L",this.chartWidth,g,"L",y,g,"Z"]:this.scrollablePixelsY?["M",G,0,"L",G,this.plotTop-1,"L",J,this.plotTop-1,"L",J,0,"Z","M",G,t,"L",G,this.chartHeight,"L",J,this.chartHeight,"L",J,t,"Z"]:["M",0,0];"adjustHeight"!==this.redrawTrigger&&this.scrollableMask.attr({d:A})}});S(r,"mixins/legend-symbol.js",[r["parts/Globals.js"],r["parts/Utilities.js"]],function(d,g){var r=g.merge,u=g.pick;d.LegendSymbolMixin={drawRectangle:function(d,g){var r=d.symbolHeight,
A=d.options.squareSymbol;g.legendSymbol=this.chart.renderer.rect(A?(d.symbolWidth-r)/2:0,d.baseline-r+1,A?r:d.symbolWidth,r,u(d.options.symbolRadius,r/2)).addClass("highcharts-point").attr({zIndex:3}).add(g.legendGroup)},drawLineMarker:function(d){var g=this.options,E=g.marker,A=d.symbolWidth,G=d.symbolHeight,J=G/2,y=this.chart.renderer,t=this.legendGroup;d=d.baseline-Math.round(.3*d.fontMetrics.b);var D={};this.chart.styledMode||(D={"stroke-width":g.lineWidth||0},g.dashStyle&&(D.dashstyle=g.dashStyle));
this.legendLine=y.path(["M",0,d,"L",A,d]).addClass("highcharts-graph").attr(D).add(t);E&&!1!==E.enabled&&A&&(g=Math.min(u(E.radius,J),J),0===this.symbol.indexOf("url")&&(E=r(E,{width:G,height:G}),g=0),this.legendSymbol=E=y.symbol(this.symbol,A/2-g,d-g,2*g,2*g,E).addClass("highcharts-point").add(t),E.isMarker=!0)}};return d.LegendSymbolMixin});S(r,"parts/Point.js",[r["parts/Globals.js"],r["parts/Utilities.js"]],function(d,g){"";var r=g.animObject,u=g.defined,I=g.erase,M=g.extend,E=g.format,A=g.getNestedProperty,
G=g.isArray,J=g.isNumber,y=g.isObject,t=g.syncTimeout,D=g.pick,h=g.removeEvent,N=g.uniqueKey,q=d.fireEvent;g=function(){function d(){this.colorIndex=this.category=void 0;this.formatPrefix="point";this.id=void 0;this.isNull=!1;this.percentage=this.options=this.name=void 0;this.selected=!1;this.total=this.series=void 0;this.visible=!0;this.x=void 0}d.prototype.animateBeforeDestroy=function(){var e=this,c={x:e.startXPos,opacity:0},d,h=e.getGraphicalProps();h.singular.forEach(function(f){d="dataLabel"===
f;e[f]=e[f].animate(d?{x:e[f].startXPos,y:e[f].startYPos,opacity:0}:c)});h.plural.forEach(function(c){e[c].forEach(function(a){a.element&&a.animate(M({x:e.startXPos},a.startYPos?{x:a.startXPos,y:a.startYPos}:{}))})})};d.prototype.applyOptions=function(e,c){var k=this.series,h=k.options.pointValKey||k.pointValKey;e=d.prototype.optionsToObject.call(this,e);M(this,e);this.options=this.options?M(this.options,e):e;e.group&&delete this.group;e.dataLabels&&delete this.dataLabels;h&&(this.y=d.prototype.getNestedProperty.call(this,
h));this.formatPrefix=(this.isNull=D(this.isValid&&!this.isValid(),null===this.x||!J(this.y)))?"null":"point";this.selected&&(this.state="select");"name"in this&&"undefined"===typeof c&&k.xAxis&&k.xAxis.hasNames&&(this.x=k.xAxis.nameToX(this));"undefined"===typeof this.x&&k&&(this.x="undefined"===typeof c?k.autoIncrement(this):c);return this};d.prototype.destroy=function(){function e(){if(c.graphic||c.dataLabel||c.dataLabels)h(c),c.destroyElements();for(l in c)c[l]=null}var c=this,d=c.series,n=d.chart;
d=d.options.dataSorting;var f=n.hoverPoints,a=r(c.series.chart.renderer.globalAnimation),l;c.legendItem&&n.legend.destroyItem(c);f&&(c.setState(),I(f,c),f.length||(n.hoverPoints=null));if(c===n.hoverPoint)c.onMouseOut();d&&d.enabled?(this.animateBeforeDestroy(),t(e,a.duration)):e();n.pointCount--};d.prototype.destroyElements=function(e){var c=this;e=c.getGraphicalProps(e);e.singular.forEach(function(e){c[e]=c[e].destroy()});e.plural.forEach(function(e){c[e].forEach(function(c){c.element&&c.destroy()});
delete c[e]})};d.prototype.firePointEvent=function(e,c,d){var k=this,f=this.series.options;(f.point.events[e]||k.options&&k.options.events&&k.options.events[e])&&k.importEvents();"click"===e&&f.allowPointSelect&&(d=function(a){k.select&&k.select(null,a.ctrlKey||a.metaKey||a.shiftKey)});q(k,e,c,d)};d.prototype.getClassName=function(){return"highcharts-point"+(this.selected?" highcharts-point-select":"")+(this.negative?" highcharts-negative":"")+(this.isNull?" highcharts-null-point":"")+("undefined"!==
typeof this.colorIndex?" highcharts-color-"+this.colorIndex:"")+(this.options.className?" "+this.options.className:"")+(this.zone&&this.zone.className?" "+this.zone.className.replace("highcharts-negative",""):"")};d.prototype.getGraphicalProps=function(e){var c=this,d=[],h,f={singular:[],plural:[]};e=e||{graphic:1,dataLabel:1};e.graphic&&d.push("graphic","shadowGroup");e.dataLabel&&d.push("dataLabel","dataLabelUpper","connector");for(h=d.length;h--;){var a=d[h];c[a]&&f.singular.push(a)}["dataLabel",
"connector"].forEach(function(a){var d=a+"s";e[a]&&c[d]&&f.plural.push(d)});return f};d.prototype.getLabelConfig=function(){return{x:this.category,y:this.y,color:this.color,colorIndex:this.colorIndex,key:this.name||this.category,series:this.series,point:this,percentage:this.percentage,total:this.total||this.stackTotal}};d.prototype.getNestedProperty=function(e){if(e)return 0===e.indexOf("custom.")?A(e,this.options):this[e]};d.prototype.getZone=function(){var e=this.series,c=e.zones;e=e.zoneAxis||
"y";var d=0,h;for(h=c[d];this[e]>=h.value;)h=c[++d];this.nonZonedColor||(this.nonZonedColor=this.color);this.color=h&&h.color&&!this.options.color?h.color:this.nonZonedColor;return h};d.prototype.hasNewShapeType=function(){return(this.graphic&&(this.graphic.symbolName||this.graphic.element.nodeName))!==this.shapeType};d.prototype.init=function(e,c,d){this.series=e;this.applyOptions(c,d);this.id=u(this.id)?this.id:N();this.resolveColor();e.chart.pointCount++;q(this,"afterInit");return this};d.prototype.optionsToObject=
function(e){var c={},k=this.series,h=k.options.keys,f=h||k.pointArrayMap||["y"],a=f.length,l=0,g=0;if(J(e)||null===e)c[f[0]]=e;else if(G(e))for(!h&&e.length>a&&(k=typeof e[0],"string"===k?c.name=e[0]:"number"===k&&(c.x=e[0]),l++);g<a;)h&&"undefined"===typeof e[l]||(0<f[g].indexOf(".")?d.prototype.setNestedProperty(c,e[l],f[g]):c[f[g]]=e[l]),l++,g++;else"object"===typeof e&&(c=e,e.dataLabels&&(k._hasPointLabels=!0),e.marker&&(k._hasPointMarkers=!0));return c};d.prototype.resolveColor=function(){var e=
this.series;var c=e.chart.options.chart.colorCount;var d=e.chart.styledMode;d||this.options.color||(this.color=e.color);e.options.colorByPoint?(d||(c=e.options.colors||e.chart.options.colors,this.color=this.color||c[e.colorCounter],c=c.length),d=e.colorCounter,e.colorCounter++,e.colorCounter===c&&(e.colorCounter=0)):d=e.colorIndex;this.colorIndex=D(this.colorIndex,d)};d.prototype.setNestedProperty=function(e,c,d){d.split(".").reduce(function(e,f,a,d){e[f]=d.length-1===a?c:y(e[f],!0)?e[f]:{};return e[f]},
e);return e};d.prototype.tooltipFormatter=function(e){var c=this.series,d=c.tooltipOptions,h=D(d.valueDecimals,""),f=d.valuePrefix||"",a=d.valueSuffix||"";c.chart.styledMode&&(e=c.chart.tooltip.styledModeFormat(e));(c.pointArrayMap||["y"]).forEach(function(c){c="{point."+c;if(f||a)e=e.replace(RegExp(c+"}","g"),f+c+"}"+a);e=e.replace(RegExp(c+"}","g"),c+":,."+h+"f}")});return E(e,{point:this,series:this.series},c.chart)};return d}();d.Point=g;return d.Point});S(r,"parts/Series.js",[r["parts/Globals.js"],
r["mixins/legend-symbol.js"],r["parts/Point.js"],r["parts/Utilities.js"]],function(d,g,r,u){"";var I=u.addEvent,M=u.animObject,E=u.arrayMax,A=u.arrayMin,G=u.clamp,J=u.correctFloat,y=u.defined,t=u.erase,D=u.error,h=u.extend,N=u.find,q=u.fireEvent,P=u.getNestedProperty,e=u.isArray,c=u.isFunction,k=u.isNumber,n=u.isString,f=u.merge,a=u.objectEach,l=u.pick,v=u.removeEvent,z=u.seriesType,w=u.splat,B=u.syncTimeout,L=d.defaultOptions,Q=d.defaultPlotOptions,H=d.seriesTypes,K=d.SVGElement,p=d.win;d.Series=
z("line",null,{lineWidth:2,allowPointSelect:!1,showCheckbox:!1,animation:{duration:1E3},events:{},marker:{enabledThreshold:2,lineColor:"#ffffff",lineWidth:0,radius:4,states:{normal:{animation:!0},hover:{animation:{duration:50},enabled:!0,radiusPlus:2,lineWidthPlus:1},select:{fillColor:"#cccccc",lineColor:"#000000",lineWidth:2}}},point:{events:{}},dataLabels:{align:"center",formatter:function(){var b=this.series.chart.numberFormatter;return"number"!==typeof this.y?"":b(this.y,-1)},padding:5,style:{fontSize:"11px",
fontWeight:"bold",color:"contrast",textOutline:"1px contrast"},verticalAlign:"bottom",x:0,y:0},cropThreshold:300,opacity:1,pointRange:0,softThreshold:!0,states:{normal:{animation:!0},hover:{animation:{duration:50},lineWidthPlus:1,marker:{},halo:{size:10,opacity:.25}},select:{animation:{duration:0}},inactive:{animation:{duration:50},opacity:.2}},stickyTracking:!0,turboThreshold:1E3,findNearestPointBy:"x"},{axisTypes:["xAxis","yAxis"],coll:"series",colorCounter:0,cropShoulder:1,directTouch:!1,eventsToUnbind:[],
isCartesian:!0,parallelArrays:["x","y"],pointClass:r,requireSorting:!0,sorted:!0,init:function(b,e){q(this,"init",{options:e});var f=this,d=b.series,k;this.eventOptions=this.eventOptions||{};f.chart=b;f.options=e=f.setOptions(e);f.linkedSeries=[];f.bindAxes();h(f,{name:e.name,state:"",visible:!1!==e.visible,selected:!0===e.selected});var p=e.events;a(p,function(b,a){c(b)&&f.eventOptions[a]!==b&&(c(f.eventOptions[a])&&v(f,a,f.eventOptions[a]),f.eventOptions[a]=b,I(f,a,b))});if(p&&p.click||e.point&&
e.point.events&&e.point.events.click||e.allowPointSelect)b.runTrackerClick=!0;f.getColor();f.getSymbol();f.parallelArrays.forEach(function(b){f[b+"Data"]||(f[b+"Data"]=[])});f.isCartesian&&(b.hasCartesianSeries=!0);d.length&&(k=d[d.length-1]);f._i=l(k&&k._i,-1)+1;b.orderSeries(this.insert(d));e.dataSorting&&e.dataSorting.enabled?f.setDataSortingOptions():f.points||f.data||f.setData(e.data,!1);q(this,"afterInit")},is:function(b){return H[b]&&this instanceof H[b]},insert:function(b){var a=this.options.index,
c;if(k(a)){for(c=b.length;c--;)if(a>=l(b[c].options.index,b[c]._i)){b.splice(c+1,0,this);break}-1===c&&b.unshift(this);c+=1}else b.push(this);return l(c,b.length-1)},bindAxes:function(){var b=this,a=b.options,c=b.chart,e;q(this,"bindAxes",null,function(){(b.axisTypes||[]).forEach(function(f){c[f].forEach(function(c){e=c.options;if(a[f]===e.index||"undefined"!==typeof a[f]&&a[f]===e.id||"undefined"===typeof a[f]&&0===e.index)b.insert(c.series),b[f]=c,c.isDirty=!0});b[f]||b.optionalAxis===f||D(18,!0,
c)})});q(this,"afterBindAxes")},updateParallelArrays:function(b,a){var c=b.series,e=arguments,f=k(a)?function(e){var f="y"===e&&c.toYData?c.toYData(b):b[e];c[e+"Data"][a]=f}:function(b){Array.prototype[a].apply(c[b+"Data"],Array.prototype.slice.call(e,2))};c.parallelArrays.forEach(f)},hasData:function(){return this.visible&&"undefined"!==typeof this.dataMax&&"undefined"!==typeof this.dataMin||this.visible&&this.yData&&0<this.yData.length},autoIncrement:function(){var b=this.options,a=this.xIncrement,
c,e=b.pointIntervalUnit,f=this.chart.time;a=l(a,b.pointStart,0);this.pointInterval=c=l(this.pointInterval,b.pointInterval,1);e&&(b=new f.Date(a),"day"===e?f.set("Date",b,f.get("Date",b)+c):"month"===e?f.set("Month",b,f.get("Month",b)+c):"year"===e&&f.set("FullYear",b,f.get("FullYear",b)+c),c=b.getTime()-a);this.xIncrement=a+c;return a},setDataSortingOptions:function(){var b=this.options;h(this,{requireSorting:!1,sorted:!1,enabledDataSorting:!0,allowDG:!1});y(b.pointRange)||(b.pointRange=1)},setOptions:function(b){var a=
this.chart,c=a.options,e=c.plotOptions,d=a.userOptions||{};b=f(b);a=a.styledMode;var k={plotOptions:e,userOptions:b};q(this,"setOptions",k);var h=k.plotOptions[this.type],m=d.plotOptions||{};this.userOptions=k.userOptions;d=f(h,e.series,d.plotOptions&&d.plotOptions[this.type],b);this.tooltipOptions=f(L.tooltip,L.plotOptions.series&&L.plotOptions.series.tooltip,L.plotOptions[this.type].tooltip,c.tooltip.userOptions,e.series&&e.series.tooltip,e[this.type].tooltip,b.tooltip);this.stickyTracking=l(b.stickyTracking,
m[this.type]&&m[this.type].stickyTracking,m.series&&m.series.stickyTracking,this.tooltipOptions.shared&&!this.noSharedTooltip?!0:d.stickyTracking);null===h.marker&&delete d.marker;this.zoneAxis=d.zoneAxis;c=this.zones=(d.zones||[]).slice();!d.negativeColor&&!d.negativeFillColor||d.zones||(e={value:d[this.zoneAxis+"Threshold"]||d.threshold||0,className:"highcharts-negative"},a||(e.color=d.negativeColor,e.fillColor=d.negativeFillColor),c.push(e));c.length&&y(c[c.length-1].value)&&c.push(a?{}:{color:this.color,
fillColor:this.fillColor});q(this,"afterSetOptions",{options:d});return d},getName:function(){return l(this.options.name,"Series "+(this.index+1))},getCyclic:function(b,a,c){var e=this.chart,f=this.userOptions,d=b+"Index",k=b+"Counter",h=c?c.length:l(e.options.chart[b+"Count"],e[b+"Count"]);if(!a){var p=l(f[d],f["_"+d]);y(p)||(e.series.length||(e[k]=0),f["_"+d]=p=e[k]%h,e[k]+=1);c&&(a=c[p])}"undefined"!==typeof p&&(this[d]=p);this[b]=a},getColor:function(){this.chart.styledMode?this.getCyclic("color"):
this.options.colorByPoint?this.options.color=null:this.getCyclic("color",this.options.color||Q[this.type].color,this.chart.options.colors)},getPointsCollection:function(){return(this.hasGroupedData?this.points:this.data)||[]},getSymbol:function(){this.getCyclic("symbol",this.options.marker.symbol,this.chart.options.symbols)},findPointIndex:function(b,a){var c=b.id,e=b.x,f=this.points,d,h=this.options.dataSorting;if(c)var l=this.chart.get(c);else if(this.linkedParent||this.enabledDataSorting){var p=
h&&h.matchByName?"name":"index";l=N(f,function(a){return!a.touched&&a[p]===b[p]});if(!l)return}if(l){var n=l&&l.index;"undefined"!==typeof n&&(d=!0)}"undefined"===typeof n&&k(e)&&(n=this.xData.indexOf(e,a));-1!==n&&"undefined"!==typeof n&&this.cropped&&(n=n>=this.cropStart?n-this.cropStart:n);!d&&f[n]&&f[n].touched&&(n=void 0);return n},drawLegendSymbol:g.drawLineMarker,updateData:function(b,a){var c=this.options,e=c.dataSorting,f=this.points,d=[],h,l,n,p=this.requireSorting,g=b.length===f.length,
w=!0;this.xIncrement=null;b.forEach(function(b,a){var l=y(b)&&this.pointClass.prototype.optionsToObject.call({series:this},b)||{};var m=l.x;if(l.id||k(m)){if(m=this.findPointIndex(l,n),-1===m||"undefined"===typeof m?d.push(b):f[m]&&b!==c.data[m]?(f[m].update(b,!1,null,!1),f[m].touched=!0,p&&(n=m+1)):f[m]&&(f[m].touched=!0),!g||a!==m||e&&e.enabled||this.hasDerivedData)h=!0}else d.push(b)},this);if(h)for(b=f.length;b--;)(l=f[b])&&!l.touched&&l.remove&&l.remove(!1,a);else!g||e&&e.enabled?w=!1:(b.forEach(function(b,
a){f[a].update&&b!==f[a].y&&f[a].update(b,!1,null,!1)}),d.length=0);f.forEach(function(b){b&&(b.touched=!1)});if(!w)return!1;d.forEach(function(b){this.addPoint(b,!1,null,null,!1)},this);null===this.xIncrement&&this.xData&&this.xData.length&&(this.xIncrement=E(this.xData),this.autoIncrement());return!0},setData:function(b,a,c,f){var d=this,h=d.points,p=h&&h.length||0,m,g=d.options,w=d.chart,x=g.dataSorting,q=null,v=d.xAxis;q=g.turboThreshold;var C=this.xData,t=this.yData,B=(m=d.pointArrayMap)&&m.length,
z=g.keys,y=0,L=1,u;b=b||[];m=b.length;a=l(a,!0);x&&x.enabled&&(b=this.sortData(b));!1!==f&&m&&p&&!d.cropped&&!d.hasGroupedData&&d.visible&&!d.isSeriesBoosting&&(u=this.updateData(b,c));if(!u){d.xIncrement=null;d.colorCounter=0;this.parallelArrays.forEach(function(b){d[b+"Data"].length=0});if(q&&m>q)if(q=d.getFirstValidPoint(b),k(q))for(c=0;c<m;c++)C[c]=this.autoIncrement(),t[c]=b[c];else if(e(q))if(B)for(c=0;c<m;c++)f=b[c],C[c]=f[0],t[c]=f.slice(1,B+1);else for(z&&(y=z.indexOf("x"),L=z.indexOf("y"),
y=0<=y?y:0,L=0<=L?L:1),c=0;c<m;c++)f=b[c],C[c]=f[y],t[c]=f[L];else D(12,!1,w);else for(c=0;c<m;c++)"undefined"!==typeof b[c]&&(f={series:d},d.pointClass.prototype.applyOptions.apply(f,[b[c]]),d.updateParallelArrays(f,c));t&&n(t[0])&&D(14,!0,w);d.data=[];d.options.data=d.userOptions.data=b;for(c=p;c--;)h[c]&&h[c].destroy&&h[c].destroy();v&&(v.minRange=v.userMinRange);d.isDirty=w.isDirtyBox=!0;d.isDirtyData=!!h;c=!1}"point"===g.legendType&&(this.processData(),this.generatePoints());a&&w.redraw(c)},
sortData:function(b){var a=this,c=a.options.dataSorting.sortKey||"y",e=function(b,a){return y(a)&&b.pointClass.prototype.optionsToObject.call({series:b},a)||{}};b.forEach(function(c,f){b[f]=e(a,c);b[f].index=f},this);b.concat().sort(function(b,a){b=P(c,b);a=P(c,a);return a<b?-1:a>b?1:0}).forEach(function(b,a){b.x=a},this);a.linkedSeries&&a.linkedSeries.forEach(function(a){var c=a.options,f=c.data;c.dataSorting&&c.dataSorting.enabled||!f||(f.forEach(function(c,d){f[d]=e(a,c);b[d]&&(f[d].x=b[d].x,f[d].index=
d)}),a.setData(f,!1))});return b},processData:function(b){var a=this.xData,c=this.yData,e=a.length;var f=0;var d=this.xAxis,k=this.options;var h=k.cropThreshold;var l=this.getExtremesFromAll||k.getExtremesFromAll,p=this.isCartesian;k=d&&d.val2lin;var n=d&&d.isLog,g=this.requireSorting;if(p&&!this.isDirty&&!d.isDirty&&!this.yAxis.isDirty&&!b)return!1;if(d){b=d.getExtremes();var w=b.min;var q=b.max}if(p&&this.sorted&&!l&&(!h||e>h||this.forceCrop))if(a[e-1]<w||a[0]>q)a=[],c=[];else if(this.yData&&(a[0]<
w||a[e-1]>q)){f=this.cropData(this.xData,this.yData,w,q);a=f.xData;c=f.yData;f=f.start;var v=!0}for(h=a.length||1;--h;)if(e=n?k(a[h])-k(a[h-1]):a[h]-a[h-1],0<e&&("undefined"===typeof t||e<t))var t=e;else 0>e&&g&&(D(15,!1,this.chart),g=!1);this.cropped=v;this.cropStart=f;this.processedXData=a;this.processedYData=c;this.closestPointRange=this.basePointRange=t},cropData:function(b,a,c,e,f){var d=b.length,k=0,h=d,p;f=l(f,this.cropShoulder);for(p=0;p<d;p++)if(b[p]>=c){k=Math.max(0,p-f);break}for(c=p;c<
d;c++)if(b[c]>e){h=c+f;break}return{xData:b.slice(k,h),yData:a.slice(k,h),start:k,end:h}},generatePoints:function(){var b=this.options,a=b.data,c=this.data,e,f=this.processedXData,d=this.processedYData,k=this.pointClass,l=f.length,p=this.cropStart||0,n=this.hasGroupedData;b=b.keys;var g=[],v;c||n||(c=[],c.length=a.length,c=this.data=c);b&&n&&(this.options.keys=!1);for(v=0;v<l;v++){var t=p+v;if(n){var B=(new k).init(this,[f[v]].concat(w(d[v])));B.dataGroup=this.groupMap[v];B.dataGroup.options&&(B.options=
B.dataGroup.options,h(B,B.dataGroup.options),delete B.dataLabels)}else(B=c[t])||"undefined"===typeof a[t]||(c[t]=B=(new k).init(this,a[t],f[v]));B&&(B.index=t,g[v]=B)}this.options.keys=b;if(c&&(l!==(e=c.length)||n))for(v=0;v<e;v++)v!==p||n||(v+=l),c[v]&&(c[v].destroyElements(),c[v].plotX=void 0);this.data=c;this.points=g;q(this,"afterGeneratePoints")},getXExtremes:function(b){return{min:A(b),max:E(b)}},getExtremes:function(b){var a=this.xAxis,c=this.yAxis,f=this.processedXData||this.xData,d=[],h=
0,l=0;var m=0;var p=this.requireSorting?this.cropShoulder:0,n=c?c.positiveValuesOnly:!1,g;b=b||this.stackedYData||this.processedYData||[];c=b.length;a&&(m=a.getExtremes(),l=m.min,m=m.max);for(g=0;g<c;g++){var w=f[g];var v=b[g];var t=(k(v)||e(v))&&(v.length||0<v||!n);w=this.getExtremesFromAll||this.options.getExtremesFromAll||this.cropped||!a||(f[g+p]||w)>=l&&(f[g-p]||w)<=m;if(t&&w)if(t=v.length)for(;t--;)k(v[t])&&(d[h++]=v[t]);else d[h++]=v}this.dataMin=A(d);this.dataMax=E(d);q(this,"afterGetExtremes")},
getFirstValidPoint:function(b){for(var a=null,c=b.length,e=0;null===a&&e<c;)a=b[e],e++;return a},translate:function(){this.processedXData||this.processData();this.generatePoints();var b=this.options,a=b.stacking,c=this.xAxis,f=c.categories,d=this.enabledDataSorting,h=this.yAxis,p=this.points,m=p.length,n=!!this.modifyValue,g,w=this.pointPlacementToXValue(),v=!!w,t=b.threshold,B=b.startFromThreshold?t:0,z,L=this.zoneAxis||"y",u=Number.MAX_VALUE;for(g=0;g<m;g++){var K=p[g],r=K.x,H=K.y,D=K.low,A=a&&
h.stacks[(this.negStacks&&H<(B?0:t)?"-":"")+this.stackKey];h.positiveValuesOnly&&null!==H&&0>=H&&(K.isNull=!0);K.plotX=z=J(G(c.translate(r,0,0,0,1,w,"flags"===this.type),-1E5,1E5));if(a&&this.visible&&A&&A[r]){var N=this.getStackIndicator(N,r,this.index);if(!K.isNull){var Q=A[r];var E=Q.points[N.key]}}e(E)&&(D=E[0],H=E[1],D===B&&N.key===A[r].base&&(D=l(k(t)&&t,h.min)),h.positiveValuesOnly&&0>=D&&(D=null),K.total=K.stackTotal=Q.total,K.percentage=Q.total&&K.y/Q.total*100,K.stackY=H,this.irregularWidths||
Q.setOffset(this.pointXOffset||0,this.barW||0));K.yBottom=y(D)?G(h.translate(D,0,1,0,1),-1E5,1E5):null;n&&(H=this.modifyValue(H,K));K.plotY="number"===typeof H&&Infinity!==H?G(h.translate(H,0,1,0,1),-1E5,1E5):void 0;K.isInside=this.isPointInside(K);K.clientX=v?J(c.translate(r,0,0,0,1,w)):z;K.negative=K[L]<(b[L+"Threshold"]||t||0);K.category=f&&"undefined"!==typeof f[K.x]?f[K.x]:K.x;if(!K.isNull&&!1!==K.visible){"undefined"!==typeof P&&(u=Math.min(u,Math.abs(z-P)));var P=z}K.zone=this.zones.length&&
K.getZone();!K.graphic&&this.group&&d&&(K.isNew=!0)}this.closestPointRangePx=u;q(this,"afterTranslate")},getValidPoints:function(b,a,c){var e=this.chart;return(b||this.points||[]).filter(function(b){return a&&!e.isInsidePlot(b.plotX,b.plotY,e.inverted)?!1:!1!==b.visible&&(c||!b.isNull)})},getClipBox:function(b,a){var c=this.options,e=this.chart,f=e.inverted,d=this.xAxis,k=d&&this.yAxis;b&&!1===c.clip&&k?b=f?{y:-e.chartWidth+k.len+k.pos,height:e.chartWidth,width:e.chartHeight,x:-e.chartHeight+d.len+
d.pos}:{y:-k.pos,height:e.chartHeight,width:e.chartWidth,x:-d.pos}:(b=this.clipBox||e.clipBox,a&&(b.width=e.plotSizeX,b.x=0));return a?{width:b.width,x:b.x}:b},setClip:function(b){var a=this.chart,c=this.options,e=a.renderer,f=a.inverted,d=this.clipBox,k=this.getClipBox(b),h=this.sharedClipKey||["_sharedClip",b&&b.duration,b&&b.easing,k.height,c.xAxis,c.yAxis].join(),l=a[h],p=a[h+"m"];b&&(k.width=0,f&&(k.x=a.plotHeight+(!1!==c.clip?0:a.plotTop)));l?a.hasLoaded||l.attr(k):(b&&(a[h+"m"]=p=e.clipRect(f?
a.plotSizeX+99:-99,f?-a.plotLeft:-a.plotTop,99,f?a.chartWidth:a.chartHeight)),a[h]=l=e.clipRect(k),l.count={length:0});b&&!l.count[this.index]&&(l.count[this.index]=!0,l.count.length+=1);if(!1!==c.clip||b)this.group.clip(b||d?l:a.clipRect),this.markerGroup.clip(p),this.sharedClipKey=h;b||(l.count[this.index]&&(delete l.count[this.index],--l.count.length),0===l.count.length&&h&&a[h]&&(d||(a[h]=a[h].destroy()),a[h+"m"]&&(a[h+"m"]=a[h+"m"].destroy())))},animate:function(b){var a=this.chart,c=M(this.options.animation);
if(!a.hasRendered)if(b)this.setClip(c);else{var e=this.sharedClipKey;b=a[e];var f=this.getClipBox(c,!0);b&&b.animate(f,c);a[e+"m"]&&a[e+"m"].animate({width:f.width+99,x:f.x-(a.inverted?0:99)},c)}},afterAnimate:function(){this.setClip();q(this,"afterAnimate");this.finishedAnimating=!0},drawPoints:function(){var b=this.points,a=this.chart,c,e,f=this.options.marker,d=this[this.specialGroup]||this.markerGroup,k=this.xAxis,h=l(f.enabled,!k||k.isRadial?!0:null,this.closestPointRangePx>=f.enabledThreshold*
f.radius);if(!1!==f.enabled||this._hasPointMarkers)for(c=0;c<b.length;c++){var p=b[c];var n=(e=p.graphic)?"animate":"attr";var g=p.marker||{};var w=!!p.marker;if((h&&"undefined"===typeof g.enabled||g.enabled)&&!p.isNull&&!1!==p.visible){var v=l(g.symbol,this.symbol);var q=this.markerAttribs(p,p.selected&&"select");this.enabledDataSorting&&(p.startXPos=k.reversed?-q.width:k.width);var t=!1!==p.isInside;e?e[t?"show":"hide"](t).animate(q):t&&(0<q.width||p.hasImage)&&(p.graphic=e=a.renderer.symbol(v,
q.x,q.y,q.width,q.height,w?g:f).add(d),this.enabledDataSorting&&a.hasRendered&&(e.attr({x:p.startXPos}),n="animate"));e&&"animate"===n&&e[t?"show":"hide"](t).animate(q);if(e&&!a.styledMode)e[n](this.pointAttribs(p,p.selected&&"select"));e&&e.addClass(p.getClassName(),!0)}else e&&(p.graphic=e.destroy())}},markerAttribs:function(b,a){var c=this.options.marker,e=b.marker||{},f=e.symbol||c.symbol,d=l(e.radius,c.radius);a&&(c=c.states[a],a=e.states&&e.states[a],d=l(a&&a.radius,c&&c.radius,d+(c&&c.radiusPlus||
0)));b.hasImage=f&&0===f.indexOf("url");b.hasImage&&(d=0);b={x:Math.floor(b.plotX)-d,y:b.plotY-d};d&&(b.width=b.height=2*d);return b},pointAttribs:function(b,a){var c=this.options.marker,e=b&&b.options,f=e&&e.marker||{},d=this.color,k=e&&e.color,h=b&&b.color;e=l(f.lineWidth,c.lineWidth);var p=b&&b.zone&&b.zone.color;b=1;d=k||p||h||d;k=f.fillColor||c.fillColor||d;d=f.lineColor||c.lineColor||d;a=a||"normal";c=c.states[a];a=f.states&&f.states[a]||{};e=l(a.lineWidth,c.lineWidth,e+l(a.lineWidthPlus,c.lineWidthPlus,
0));k=a.fillColor||c.fillColor||k;d=a.lineColor||c.lineColor||d;b=l(a.opacity,c.opacity,b);return{stroke:d,"stroke-width":e,fill:k,opacity:b}},destroy:function(b){var c=this,e=c.chart,f=/AppleWebKit\/533/.test(p.navigator.userAgent),d,k,h=c.data||[],l,n;q(c,"destroy");this.removeEvents(b);(c.axisTypes||[]).forEach(function(b){(n=c[b])&&n.series&&(t(n.series,c),n.isDirty=n.forceRedraw=!0)});c.legendItem&&c.chart.legend.destroyItem(c);for(k=h.length;k--;)(l=h[k])&&l.destroy&&l.destroy();c.points=null;
u.clearTimeout(c.animationTimeout);a(c,function(b,a){b instanceof K&&!b.survive&&(d=f&&"group"===a?"hide":"destroy",b[d]())});e.hoverSeries===c&&(e.hoverSeries=null);t(e.series,c);e.orderSeries();a(c,function(a,e){b&&"hcEvents"===e||delete c[e]})},getGraphPath:function(b,a,c){var e=this,f=e.options,d=f.step,k,h=[],l=[],p;b=b||e.points;(k=b.reversed)&&b.reverse();(d={right:1,center:2}[d]||d&&3)&&k&&(d=4-d);b=this.getValidPoints(b,!1,!(f.connectNulls&&!a&&!c));b.forEach(function(k,n){var m=k.plotX,
g=k.plotY,w=b[n-1];(k.leftCliff||w&&w.rightCliff)&&!c&&(p=!0);k.isNull&&!y(a)&&0<n?p=!f.connectNulls:k.isNull&&!a?p=!0:(0===n||p?n=["M",k.plotX,k.plotY]:e.getPointSpline?n=e.getPointSpline(b,k,n):d?(n=1===d?["L",w.plotX,g]:2===d?["L",(w.plotX+m)/2,w.plotY,"L",(w.plotX+m)/2,g]:["L",m,w.plotY],n.push("L",m,g)):n=["L",m,g],l.push(k.x),d&&(l.push(k.x),2===d&&l.push(k.x)),h.push.apply(h,n),p=!1)});h.xMap=l;return e.graphPath=h},drawGraph:function(){var b=this,a=this.options,c=(this.gappedPath||this.getGraphPath).call(this),
e=this.chart.styledMode,f=[["graph","highcharts-graph"]];e||f[0].push(a.lineColor||this.color||"#cccccc",a.dashStyle);f=b.getZonesGraphs(f);f.forEach(function(f,d){var k=f[0],h=b[k],l=h?"animate":"attr";h?(h.endX=b.preventGraphAnimation?null:c.xMap,h.animate({d:c})):c.length&&(b[k]=h=b.chart.renderer.path(c).addClass(f[1]).attr({zIndex:1}).add(b.group));h&&!e&&(k={stroke:f[2],"stroke-width":a.lineWidth,fill:b.fillGraph&&b.color||"none"},f[3]?k.dashstyle=f[3]:"square"!==a.linecap&&(k["stroke-linecap"]=
k["stroke-linejoin"]="round"),h[l](k).shadow(2>d&&a.shadow));h&&(h.startX=c.xMap,h.isArea=c.isArea)})},getZonesGraphs:function(a){this.zones.forEach(function(b,c){c=["zone-graph-"+c,"highcharts-graph highcharts-zone-graph-"+c+" "+(b.className||"")];this.chart.styledMode||c.push(b.color||this.color,b.dashStyle||this.options.dashStyle);a.push(c)},this);return a},applyZones:function(){var a=this,c=this.chart,e=c.renderer,f=this.zones,d,k,h=this.clips||[],p,n=this.graph,g=this.area,w=Math.max(c.chartWidth,
c.chartHeight),v=this[(this.zoneAxis||"y")+"Axis"],q=c.inverted,t,B,z,y=!1;if(f.length&&(n||g)&&v&&"undefined"!==typeof v.min){var K=v.reversed;var L=v.horiz;n&&!this.showLine&&n.hide();g&&g.hide();var u=v.getExtremes();f.forEach(function(b,f){d=K?L?c.plotWidth:0:L?0:v.toPixels(u.min)||0;d=G(l(k,d),0,w);k=G(Math.round(v.toPixels(l(b.value,u.max),!0)||0),0,w);y&&(d=k=v.toPixels(u.max));t=Math.abs(d-k);B=Math.min(d,k);z=Math.max(d,k);v.isXAxis?(p={x:q?z:B,y:0,width:t,height:w},L||(p.x=c.plotHeight-
p.x)):(p={x:0,y:q?z:B,width:w,height:t},L&&(p.y=c.plotWidth-p.y));q&&e.isVML&&(p=v.isXAxis?{x:0,y:K?B:z,height:p.width,width:c.chartWidth}:{x:p.y-c.plotLeft-c.spacingBox.x,y:0,width:p.height,height:c.chartHeight});h[f]?h[f].animate(p):h[f]=e.clipRect(p);n&&a["zone-graph-"+f].clip(h[f]);g&&a["zone-area-"+f].clip(h[f]);y=b.value>u.max;a.resetZones&&0===k&&(k=void 0)});this.clips=h}else a.visible&&(n&&n.show(!0),g&&g.show(!0))},invertGroups:function(a){function b(){["group","markerGroup"].forEach(function(b){c[b]&&
(e.renderer.isVML&&c[b].attr({width:c.yAxis.len,height:c.xAxis.len}),c[b].width=c.yAxis.len,c[b].height=c.xAxis.len,c[b].invert(c.isRadialSeries?!1:a))})}var c=this,e=c.chart;c.xAxis&&(c.eventsToUnbind.push(I(e,"resize",b)),b(),c.invertGroups=b)},plotGroup:function(a,c,e,f,d){var b=this[a],k=!b;k&&(this[a]=b=this.chart.renderer.g().attr({zIndex:f||.1}).add(d));b.addClass("highcharts-"+c+" highcharts-series-"+this.index+" highcharts-"+this.type+"-series "+(y(this.colorIndex)?"highcharts-color-"+this.colorIndex+
" ":"")+(this.options.className||"")+(b.hasClass("highcharts-tracker")?" highcharts-tracker":""),!0);b.attr({visibility:e})[k?"attr":"animate"](this.getPlotBox());return b},getPlotBox:function(){var a=this.chart,c=this.xAxis,e=this.yAxis;a.inverted&&(c=e,e=this.xAxis);return{translateX:c?c.left:a.plotLeft,translateY:e?e.top:a.plotTop,scaleX:1,scaleY:1}},removeEvents:function(a){a?this.eventsToUnbind.length&&(this.eventsToUnbind.forEach(function(a){a()}),this.eventsToUnbind.length=0):v(this)},render:function(){var a=
this,c=a.chart,e=a.options,f=!a.finishedAnimating&&c.renderer.isSVG&&M(e.animation).duration,d=a.visible?"inherit":"hidden",k=e.zIndex,h=a.hasRendered,l=c.seriesGroup,p=c.inverted;q(this,"render");var n=a.plotGroup("group","series",d,k,l);a.markerGroup=a.plotGroup("markerGroup","markers",d,k,l);f&&a.animate&&a.animate(!0);n.inverted=a.isCartesian||a.invertable?p:!1;a.drawGraph&&(a.drawGraph(),a.applyZones());a.visible&&a.drawPoints();a.drawDataLabels&&a.drawDataLabels();a.redrawPoints&&a.redrawPoints();
a.drawTracker&&!1!==a.options.enableMouseTracking&&a.drawTracker();a.invertGroups(p);!1===e.clip||a.sharedClipKey||h||n.clip(c.clipRect);f&&a.animate&&a.animate();h||(a.animationTimeout=B(function(){a.afterAnimate()},f||0));a.isDirty=!1;a.hasRendered=!0;q(a,"afterRender")},redraw:function(){var a=this.chart,c=this.isDirty||this.isDirtyData,e=this.group,f=this.xAxis,d=this.yAxis;e&&(a.inverted&&e.attr({width:a.plotWidth,height:a.plotHeight}),e.animate({translateX:l(f&&f.left,a.plotLeft),translateY:l(d&&
d.top,a.plotTop)}));this.translate();this.render();c&&delete this.kdTree},kdAxisArray:["clientX","plotY"],searchPoint:function(a,c){var b=this.xAxis,e=this.yAxis,f=this.chart.inverted;return this.searchKDTree({clientX:f?b.len-a.chartY+b.pos:a.chartX-b.pos,plotY:f?e.len-a.chartX+e.pos:a.chartY-e.pos},c,a)},buildKDTree:function(a){function b(a,e,f){var d;if(d=a&&a.length){var k=c.kdAxisArray[e%f];a.sort(function(a,b){return a[k]-b[k]});d=Math.floor(d/2);return{point:a[d],left:b(a.slice(0,d),e+1,f),
right:b(a.slice(d+1),e+1,f)}}}this.buildingKdTree=!0;var c=this,e=-1<c.options.findNearestPointBy.indexOf("y")?2:1;delete c.kdTree;B(function(){c.kdTree=b(c.getValidPoints(null,!c.directTouch),e,e);c.buildingKdTree=!1},c.options.kdNow||a&&"touchstart"===a.type?0:1)},searchKDTree:function(a,c,e){function b(a,c,e,l){var p=c.point,n=f.kdAxisArray[e%l],g=p;var m=y(a[d])&&y(p[d])?Math.pow(a[d]-p[d],2):null;var w=y(a[k])&&y(p[k])?Math.pow(a[k]-p[k],2):null;w=(m||0)+(w||0);p.dist=y(w)?Math.sqrt(w):Number.MAX_VALUE;
p.distX=y(m)?Math.sqrt(m):Number.MAX_VALUE;n=a[n]-p[n];w=0>n?"left":"right";m=0>n?"right":"left";c[w]&&(w=b(a,c[w],e+1,l),g=w[h]<g[h]?w:p);c[m]&&Math.sqrt(n*n)<g[h]&&(a=b(a,c[m],e+1,l),g=a[h]<g[h]?a:g);return g}var f=this,d=this.kdAxisArray[0],k=this.kdAxisArray[1],h=c?"distX":"dist";c=-1<f.options.findNearestPointBy.indexOf("y")?2:1;this.kdTree||this.buildingKdTree||this.buildKDTree(e);if(this.kdTree)return b(a,this.kdTree,c,c)},pointPlacementToXValue:function(){var a=this.options,c=a.pointRange,
e=this.xAxis;a=a.pointPlacement;"between"===a&&(a=e.reversed?-.5:.5);return k(a)?a*l(c,e.pointRange):0},isPointInside:function(a){return"undefined"!==typeof a.plotY&&"undefined"!==typeof a.plotX&&0<=a.plotY&&a.plotY<=this.yAxis.len&&0<=a.plotX&&a.plotX<=this.xAxis.len}});""});S(r,"parts/Stacking.js",[r["parts/Globals.js"],r["parts/Utilities.js"]],function(d,g){var r=g.correctFloat,u=g.defined,I=g.destroyObjectProperties,M=g.format,E=g.objectEach,A=g.pick;g=d.Axis;var G=d.Chart,J=d.Series;d.StackItem=
function(d,g,u,h,r){var q=d.chart.inverted;this.axis=d;this.isNegative=u;this.options=g=g||{};this.x=h;this.total=null;this.points={};this.stack=r;this.rightCliff=this.leftCliff=0;this.alignOptions={align:g.align||(q?u?"left":"right":"center"),verticalAlign:g.verticalAlign||(q?"middle":u?"bottom":"top"),y:g.y,x:g.x};this.textAlign=g.textAlign||(q?u?"right":"left":"center")};d.StackItem.prototype={destroy:function(){I(this,this.axis)},render:function(d){var g=this.axis.chart,y=this.options,h=y.format;
h=h?M(h,this,g):y.formatter.call(this);this.label?this.label.attr({text:h,visibility:"hidden"}):(this.label=g.renderer.label(h,null,null,y.shape,null,null,y.useHTML,!1,"stack-labels"),h={text:h,rotation:y.rotation,padding:A(y.padding,5),visibility:"hidden"},this.label.attr(h),g.styledMode||this.label.css(y.style),this.label.added||this.label.add(d));this.label.labelrank=g.plotHeight},setOffset:function(d,g,r,h,N){var q=this.axis,t=q.chart;h=q.translate(q.usePercentage?100:h?h:this.total,0,0,0,1);
r=q.translate(r?r:0);r=u(h)&&Math.abs(h-r);d=A(N,t.xAxis[0].translate(this.x))+d;q=u(h)&&this.getStackBox(t,this,d,h,g,r,q);g=this.label;r=this.isNegative;d="justify"===A(this.options.overflow,"justify");var e=this.textAlign;g&&q&&(N=g.getBBox(),h=g.padding,e="left"===e?t.inverted?-h:h:"right"===e?N.width:t.inverted&&"center"===e?N.width/2:t.inverted?r?N.width+h:-h:N.width/2,r=t.inverted?N.height/2:r?-h:N.height,this.alignOptions.x=A(this.options.x,0),this.alignOptions.y=A(this.options.y,0),q.x-=
e,q.y-=r,g.align(this.alignOptions,null,q),t.isInsidePlot(g.alignAttr.x+e-this.alignOptions.x,g.alignAttr.y+r-this.alignOptions.y)?g.show():(g.alignAttr.y=-9999,d=!1),d&&J.prototype.justifyDataLabel.call(this.axis,g,this.alignOptions,g.alignAttr,N,q),g.attr({x:g.alignAttr.x,y:g.alignAttr.y}),A(!d&&this.options.crop,!0)&&((t=t.isInsidePlot(g.x-h+g.width,g.y)&&t.isInsidePlot(g.x+h,g.y))||g.hide()))},getStackBox:function(d,g,r,h,u,q,A){var e=g.axis.reversed,c=d.inverted;d=A.height+A.pos-(c?d.plotLeft:
d.plotTop);g=g.isNegative&&!e||!g.isNegative&&e;return{x:c?g?h:h-q:r,y:c?d-r-u:g?d-h-q:d-h,width:c?q:u,height:c?u:q}}};G.prototype.getStacks=function(){var d=this,g=d.inverted;d.yAxis.forEach(function(d){d.stacks&&d.hasVisibleSeries&&(d.oldStacks=d.stacks)});d.series.forEach(function(t){var h=t.xAxis&&t.xAxis.options||{};!t.options.stacking||!0!==t.visible&&!1!==d.options.chart.ignoreHiddenSeries||(t.stackKey=[t.type,A(t.options.stack,""),g?h.top:h.left,g?h.height:h.width].join())})};g.prototype.buildStacks=
function(){var g=this.series,t=A(this.options.reversedStacks,!0),r=g.length,h;if(!this.isXAxis){this.usePercentage=!1;for(h=r;h--;){var u=g[t?h:r-h-1];u.setStackedPoints()}for(h=0;h<r;h++)g[h].modifyStacks();d.fireEvent(this,"afterBuildStacks")}};g.prototype.renderStackTotals=function(){var d=this.chart,g=d.renderer,r=this.stacks,h=this.stackTotalGroup;h||(this.stackTotalGroup=h=g.g("stack-labels").attr({visibility:"visible",zIndex:6}).add());h.translate(d.plotLeft,d.plotTop);E(r,function(d){E(d,
function(d){d.render(h)})})};g.prototype.resetStacks=function(){var d=this,g=d.stacks;d.isXAxis||E(g,function(g){E(g,function(h,t){h.touched<d.stacksTouched?(h.destroy(),delete g[t]):(h.total=null,h.cumulative=null)})})};g.prototype.cleanStacks=function(){if(!this.isXAxis){if(this.oldStacks)var d=this.stacks=this.oldStacks;E(d,function(d){E(d,function(d){d.cumulative=d.total})})}};J.prototype.setStackedPoints=function(){if(this.options.stacking&&(!0===this.visible||!1===this.chart.options.chart.ignoreHiddenSeries)){var g=
this.processedXData,t=this.processedYData,D=[],h=t.length,N=this.options,q=N.threshold,G=A(N.startFromThreshold&&q,0),e=N.stack;N=N.stacking;var c=this.stackKey,k="-"+c,n=this.negStacks,f=this.yAxis,a=f.stacks,l=f.oldStacks,v,z;f.stacksTouched+=1;for(z=0;z<h;z++){var w=g[z];var B=t[z];var L=this.getStackIndicator(L,w,this.index);var Q=L.key;var H=(v=n&&B<(G?0:q))?k:c;a[H]||(a[H]={});a[H][w]||(l[H]&&l[H][w]?(a[H][w]=l[H][w],a[H][w].total=null):a[H][w]=new d.StackItem(f,f.options.stackLabels,v,w,e));
H=a[H][w];null!==B?(H.points[Q]=H.points[this.index]=[A(H.cumulative,G)],u(H.cumulative)||(H.base=Q),H.touched=f.stacksTouched,0<L.index&&!1===this.singleStacks&&(H.points[Q][0]=H.points[this.index+","+w+",0"][0])):H.points[Q]=H.points[this.index]=null;"percent"===N?(v=v?c:k,n&&a[v]&&a[v][w]?(v=a[v][w],H.total=v.total=Math.max(v.total,H.total)+Math.abs(B)||0):H.total=r(H.total+(Math.abs(B)||0))):H.total=r(H.total+(B||0));H.cumulative=A(H.cumulative,G)+(B||0);null!==B&&(H.points[Q].push(H.cumulative),
D[z]=H.cumulative)}"percent"===N&&(f.usePercentage=!0);this.stackedYData=D;f.oldStacks={}}};J.prototype.modifyStacks=function(){var d=this,g=d.stackKey,r=d.yAxis.stacks,h=d.processedXData,u,q=d.options.stacking;d[q+"Stacker"]&&[g,"-"+g].forEach(function(g){for(var e=h.length,c,k;e--;)if(c=h[e],u=d.getStackIndicator(u,c,d.index,g),k=(c=r[g]&&r[g][c])&&c.points[u.key])d[q+"Stacker"](k,c,e)})};J.prototype.percentStacker=function(d,g,u){g=g.total?100/g.total:0;d[0]=r(d[0]*g);d[1]=r(d[1]*g);this.stackedYData[u]=
d[1]};J.prototype.getStackIndicator=function(d,g,r,h){!u(d)||d.x!==g||h&&d.key!==h?d={x:g,index:0,key:h}:d.index++;d.key=[r,g,d.index].join();return d}});S(r,"parts/Dynamics.js",[r["parts/Globals.js"],r["parts/Point.js"],r["parts/Time.js"],r["parts/Utilities.js"]],function(d,g,r,u){var I=u.addEvent,M=u.animate,E=u.createElement,A=u.css,G=u.defined,J=u.erase,y=u.error,t=u.extend,D=u.fireEvent,h=u.isArray,N=u.isNumber,q=u.isObject,P=u.isString,e=u.merge,c=u.objectEach,k=u.pick,n=u.relativeLength,f=
u.setAnimation,a=u.splat,l=d.Axis;u=d.Chart;var v=d.Series,z=d.seriesTypes;d.cleanRecursively=function(a,e){var f={};c(a,function(c,k){if(q(a[k],!0)&&!a.nodeType&&e[k])c=d.cleanRecursively(a[k],e[k]),Object.keys(c).length&&(f[k]=c);else if(q(a[k])||a[k]!==e[k])f[k]=a[k]});return f};t(u.prototype,{addSeries:function(a,c,e){var f,d=this;a&&(c=k(c,!0),D(d,"addSeries",{options:a},function(){f=d.initSeries(a);d.isDirtyLegend=!0;d.linkSeries();f.enabledDataSorting&&f.setData(a.data,!1);D(d,"afterAddSeries",
{series:f});c&&d.redraw(e)}));return f},addAxis:function(a,c,e,f){return this.createAxis(c?"xAxis":"yAxis",{axis:a,redraw:e,animation:f})},addColorAxis:function(a,c,e){return this.createAxis("colorAxis",{axis:a,redraw:c,animation:e})},createAxis:function(c,f){var h=this.options,g="colorAxis"===c,n=f.redraw,w=f.animation;f=e(f.axis,{index:this[c].length,isX:"xAxis"===c});var p=g?new d.ColorAxis(this,f):new l(this,f);h[c]=a(h[c]||{});h[c].push(f);g&&(this.isDirtyLegend=!0,this.axes.forEach(function(a){a.series=
[]}),this.series.forEach(function(a){a.bindAxes();a.isDirtyData=!0}));k(n,!0)&&this.redraw(w);return p},showLoading:function(a){var c=this,e=c.options,f=c.loadingDiv,d=e.loading,h=function(){f&&A(f,{left:c.plotLeft+"px",top:c.plotTop+"px",width:c.plotWidth+"px",height:c.plotHeight+"px"})};f||(c.loadingDiv=f=E("div",{className:"highcharts-loading highcharts-loading-hidden"},null,c.container),c.loadingSpan=E("span",{className:"highcharts-loading-inner"},null,f),I(c,"redraw",h));f.className="highcharts-loading";
c.loadingSpan.innerHTML=k(a,e.lang.loading,"");c.styledMode||(A(f,t(d.style,{zIndex:10})),A(c.loadingSpan,d.labelStyle),c.loadingShown||(A(f,{opacity:0,display:""}),M(f,{opacity:d.style.opacity||.5},{duration:d.showDuration||0})));c.loadingShown=!0;h()},hideLoading:function(){var a=this.options,c=this.loadingDiv;c&&(c.className="highcharts-loading highcharts-loading-hidden",this.styledMode||M(c,{opacity:0},{duration:a.loading.hideDuration||100,complete:function(){A(c,{display:"none"})}}));this.loadingShown=
!1},propsRequireDirtyBox:"backgroundColor borderColor borderWidth borderRadius plotBackgroundColor plotBackgroundImage plotBorderColor plotBorderWidth plotShadow shadow".split(" "),propsRequireReflow:"margin marginTop marginRight marginBottom marginLeft spacing spacingTop spacingRight spacingBottom spacingLeft".split(" "),propsRequireUpdateSeries:"chart.inverted chart.polar chart.ignoreHiddenSeries chart.type colors plotOptions time tooltip".split(" "),collectionsWithUpdate:["xAxis","yAxis","zAxis",
"series"],update:function(f,h,l,g){var v=this,w={credits:"addCredits",title:"setTitle",subtitle:"setSubtitle",caption:"setCaption"},p,b,q,t=f.isResponsiveOptions,z=[];D(v,"update",{options:f});t||v.setResponsive(!1,!0);f=d.cleanRecursively(f,v.options);e(!0,v.userOptions,f);if(p=f.chart){e(!0,v.options.chart,p);"className"in p&&v.setClassName(p.className);"reflow"in p&&v.setReflow(p.reflow);if("inverted"in p||"polar"in p||"type"in p){v.propFromSeries();var B=!0}"alignTicks"in p&&(B=!0);c(p,function(a,
c){-1!==v.propsRequireUpdateSeries.indexOf("chart."+c)&&(b=!0);-1!==v.propsRequireDirtyBox.indexOf(c)&&(v.isDirtyBox=!0);t||-1===v.propsRequireReflow.indexOf(c)||(q=!0)});!v.styledMode&&"style"in p&&v.renderer.setStyle(p.style)}!v.styledMode&&f.colors&&(this.options.colors=f.colors);f.plotOptions&&e(!0,this.options.plotOptions,f.plotOptions);f.time&&this.time===d.time&&(this.time=new r(f.time));c(f,function(a,c){if(v[c]&&"function"===typeof v[c].update)v[c].update(a,!1);else if("function"===typeof v[w[c]])v[w[c]](a);
"chart"!==c&&-1!==v.propsRequireUpdateSeries.indexOf(c)&&(b=!0)});this.collectionsWithUpdate.forEach(function(b){if(f[b]){if("series"===b){var c=[];v[b].forEach(function(a,b){a.options.isInternal||c.push(k(a.options.index,b))})}a(f[b]).forEach(function(a,e){(e=G(a.id)&&v.get(a.id)||v[b][c?c[e]:e])&&e.coll===b&&(e.update(a,!1),l&&(e.touched=!0));!e&&l&&v.collectionsWithInit[b]&&(v.collectionsWithInit[b][0].apply(v,[a].concat(v.collectionsWithInit[b][1]||[]).concat([!1])).touched=!0)});l&&v[b].forEach(function(a){a.touched||
a.options.isInternal?delete a.touched:z.push(a)})}});z.forEach(function(a){a.remove&&a.remove(!1)});B&&v.axes.forEach(function(a){a.update({},!1)});b&&v.getSeriesOrderByLinks().forEach(function(a){a.chart&&a.update({},!1)},this);f.loading&&e(!0,v.options.loading,f.loading);B=p&&p.width;p=p&&p.height;P(p)&&(p=n(p,B||v.chartWidth));q||N(B)&&B!==v.chartWidth||N(p)&&p!==v.chartHeight?v.setSize(B,p,g):k(h,!0)&&v.redraw(g);D(v,"afterUpdate",{options:f,redraw:h,animation:g})},setSubtitle:function(a,c){this.applyDescription("subtitle",
a);this.layOutTitles(c)},setCaption:function(a,c){this.applyDescription("caption",a);this.layOutTitles(c)}});u.prototype.collectionsWithInit={xAxis:[u.prototype.addAxis,[!0]],yAxis:[u.prototype.addAxis,[!1]],series:[u.prototype.addSeries]};t(g.prototype,{update:function(a,c,e,f){function d(){h.applyOptions(a);var f=b&&h.hasDummyGraphic;f=null===h.y?!f:f;b&&f&&(h.graphic=b.destroy(),delete h.hasDummyGraphic);q(a,!0)&&(b&&b.element&&a&&a.marker&&"undefined"!==typeof a.marker.symbol&&(h.graphic=b.destroy()),
a&&a.dataLabels&&h.dataLabel&&(h.dataLabel=h.dataLabel.destroy()),h.connector&&(h.connector=h.connector.destroy()));g=h.index;l.updateParallelArrays(h,g);v.data[g]=q(v.data[g],!0)||q(a,!0)?h.options:k(a,v.data[g]);l.isDirty=l.isDirtyData=!0;!l.fixedBox&&l.hasCartesianSeries&&(n.isDirtyBox=!0);"point"===v.legendType&&(n.isDirtyLegend=!0);c&&n.redraw(e)}var h=this,l=h.series,b=h.graphic,g,n=l.chart,v=l.options;c=k(c,!0);!1===f?d():h.firePointEvent("update",{options:a},d)},remove:function(a,c){this.series.removePoint(this.series.data.indexOf(this),
a,c)}});t(v.prototype,{addPoint:function(a,c,e,f,d){var h=this.options,l=this.data,b=this.chart,g=this.xAxis;g=g&&g.hasNames&&g.names;var n=h.data,v=this.xData,q;c=k(c,!0);var w={series:this};this.pointClass.prototype.applyOptions.apply(w,[a]);var t=w.x;var m=v.length;if(this.requireSorting&&t<v[m-1])for(q=!0;m&&v[m-1]>t;)m--;this.updateParallelArrays(w,"splice",m,0,0);this.updateParallelArrays(w,m);g&&w.name&&(g[t]=w.name);n.splice(m,0,a);q&&(this.data.splice(m,0,null),this.processData());"point"===
h.legendType&&this.generatePoints();e&&(l[0]&&l[0].remove?l[0].remove(!1):(l.shift(),this.updateParallelArrays(w,"shift"),n.shift()));!1!==d&&D(this,"addPoint",{point:w});this.isDirtyData=this.isDirty=!0;c&&b.redraw(f)},removePoint:function(a,c,e){var d=this,h=d.data,l=h[a],g=d.points,b=d.chart,n=function(){g&&g.length===h.length&&g.splice(a,1);h.splice(a,1);d.options.data.splice(a,1);d.updateParallelArrays(l||{series:d},"splice",a,1);l&&l.destroy();d.isDirty=!0;d.isDirtyData=!0;c&&b.redraw()};f(e,
b);c=k(c,!0);l?l.firePointEvent("remove",null,n):n()},remove:function(a,c,e,f){function d(){h.destroy(f);h.remove=null;l.isDirtyLegend=l.isDirtyBox=!0;l.linkSeries();k(a,!0)&&l.redraw(c)}var h=this,l=h.chart;!1!==e?D(h,"remove",null,d):d()},update:function(a,c){a=d.cleanRecursively(a,this.userOptions);D(this,"update",{options:a});var f=this,h=f.chart,l=f.userOptions,g=f.initialType||f.type,n=a.type||l.type||h.options.chart.type,b=!(this.hasDerivedData||a.dataGrouping||n&&n!==this.type||"undefined"!==
typeof a.pointStart||a.pointInterval||a.pointIntervalUnit||a.keys),v=z[g].prototype,q,w=["group","markerGroup","dataLabelsGroup","transformGroup"],r=["eventOptions","navigatorSeries","baseSeries"],B=f.finishedAnimating&&{animation:!1},u={};b&&(r.push("data","isDirtyData","points","processedXData","processedYData","xIncrement","_hasPointMarkers","_hasPointLabels","mapMap","mapData","minY","maxY","minX","maxX"),!1!==a.visible&&r.push("area","graph"),f.parallelArrays.forEach(function(a){r.push(a+"Data")}),
a.data&&(a.dataSorting&&t(f.options.dataSorting,a.dataSorting),this.setData(a.data,!1)));a=e(l,B,{index:"undefined"===typeof l.index?f.index:l.index,pointStart:k(l.pointStart,f.xData[0])},!b&&{data:f.options.data},a);b&&a.data&&(a.data=f.options.data);r=w.concat(r);r.forEach(function(a){r[a]=f[a];delete f[a]});f.remove(!1,null,!1,!0);for(q in v)f[q]=void 0;z[n||g]?t(f,z[n||g].prototype):y(17,!0,h,{missingModuleFor:n||g});r.forEach(function(a){f[a]=r[a]});f.init(h,a);if(b&&this.points){var m=f.options;
!1===m.visible?(u.graphic=1,u.dataLabel=1):f._hasPointLabels||(n=m.marker,v=m.dataLabels,n&&(!1===n.enabled||"symbol"in n)&&(u.graphic=1),v&&!1===v.enabled&&(u.dataLabel=1));this.points.forEach(function(a){a&&a.series&&(a.resolveColor(),Object.keys(u).length&&a.destroyElements(u),!1===m.showInLegend&&a.legendItem&&h.legend.destroyItem(a))},this)}a.zIndex!==l.zIndex&&w.forEach(function(b){f[b]&&f[b].attr({zIndex:a.zIndex})});f.initialType=g;h.linkSeries();D(this,"afterUpdate");k(c,!0)&&h.redraw(b?
void 0:!1)},setName:function(a){this.name=this.options.name=this.userOptions.name=a;this.chart.isDirtyLegend=!0}});t(l.prototype,{update:function(a,f){var d=this.chart,h=a&&a.events||{};a=e(this.userOptions,a);d.options[this.coll].indexOf&&(d.options[this.coll][d.options[this.coll].indexOf(this.userOptions)]=a);c(d.options[this.coll].events,function(a,c){"undefined"===typeof h[c]&&(h[c]=void 0)});this.destroy(!0);this.init(d,t(a,{events:h}));d.isDirtyBox=!0;k(f,!0)&&d.redraw()},remove:function(a){for(var c=
this.chart,e=this.coll,f=this.series,d=f.length;d--;)f[d]&&f[d].remove(!1);J(c.axes,this);J(c[e],this);h(c.options[e])?c.options[e].splice(this.options.index,1):delete c.options[e];c[e].forEach(function(a,c){a.options.index=a.userOptions.index=c});this.destroy();c.isDirtyBox=!0;k(a,!0)&&c.redraw()},setTitle:function(a,c){this.update({title:a},c)},setCategories:function(a,c){this.update({categories:a},c)}})});S(r,"parts/AreaSeries.js",[r["parts/Globals.js"],r["parts/Color.js"],r["mixins/legend-symbol.js"],
r["parts/Utilities.js"]],function(d,g,r,u){var I=g.parse,M=u.objectEach,E=u.pick;g=u.seriesType;var A=d.Series;g("area","line",{softThreshold:!1,threshold:0},{singleStacks:!1,getStackPoints:function(d){var g=[],r=[],t=this.xAxis,u=this.yAxis,h=u.stacks[this.stackKey],A={},q=this.index,G=u.series,e=G.length,c=E(u.options.reversedStacks,!0)?1:-1,k;d=d||this.points;if(this.options.stacking){for(k=0;k<d.length;k++)d[k].leftNull=d[k].rightNull=void 0,A[d[k].x]=d[k];M(h,function(c,a){null!==c.total&&r.push(a)});
r.sort(function(c,a){return c-a});var n=G.map(function(c){return c.visible});r.forEach(function(f,a){var d=0,v,z;if(A[f]&&!A[f].isNull)g.push(A[f]),[-1,1].forEach(function(d){var l=1===d?"rightNull":"leftNull",g=0,w=h[r[a+d]];if(w)for(k=q;0<=k&&k<e;)v=w.points[k],v||(k===q?A[f][l]=!0:n[k]&&(z=h[f].points[k])&&(g-=z[1]-z[0])),k+=c;A[f][1===d?"rightCliff":"leftCliff"]=g});else{for(k=q;0<=k&&k<e;){if(v=h[f].points[k]){d=v[1];break}k+=c}d=u.translate(d,0,1,0,1);g.push({isNull:!0,plotX:t.translate(f,0,
0,0,1),x:f,plotY:d,yBottom:d})}})}return g},getGraphPath:function(d){var g=A.prototype.getGraphPath,r=this.options,t=r.stacking,u=this.yAxis,h,N=[],q=[],G=this.index,e=u.stacks[this.stackKey],c=r.threshold,k=Math.round(u.getThreshold(r.threshold));r=E(r.connectNulls,"percent"===t);var n=function(f,h,l){var g=d[f];f=t&&e[g.x].points[G];var n=g[l+"Null"]||0;l=g[l+"Cliff"]||0;g=!0;if(l||n){var v=(n?f[0]:f[1])+l;var w=f[0]+l;g=!!n}else!t&&d[h]&&d[h].isNull&&(v=w=c);"undefined"!==typeof v&&(q.push({plotX:a,
plotY:null===v?k:u.getThreshold(v),isNull:g,isCliff:!0}),N.push({plotX:a,plotY:null===w?k:u.getThreshold(w),doCurve:!1}))};d=d||this.points;t&&(d=this.getStackPoints(d));for(h=0;h<d.length;h++){t||(d[h].leftCliff=d[h].rightCliff=d[h].leftNull=d[h].rightNull=void 0);var f=d[h].isNull;var a=E(d[h].rectPlotX,d[h].plotX);var l=E(d[h].yBottom,k);if(!f||r)r||n(h,h-1,"left"),f&&!t&&r||(q.push(d[h]),N.push({x:h,plotX:a,plotY:l})),r||n(h,h+1,"right")}h=g.call(this,q,!0,!0);N.reversed=!0;f=g.call(this,N,!0,
!0);f.length&&(f[0]="L");f=h.concat(f);g=g.call(this,q,!1,r);f.xMap=h.xMap;this.areaPath=f;return g},drawGraph:function(){this.areaPath=[];A.prototype.drawGraph.apply(this);var d=this,g=this.areaPath,r=this.options,t=[["area","highcharts-area",this.color,r.fillColor]];this.zones.forEach(function(g,h){t.push(["zone-area-"+h,"highcharts-area highcharts-zone-area-"+h+" "+g.className,g.color||d.color,g.fillColor||r.fillColor])});t.forEach(function(t){var h=t[0],u=d[h],q=u?"animate":"attr",y={};u?(u.endX=
d.preventGraphAnimation?null:g.xMap,u.animate({d:g})):(y.zIndex=0,u=d[h]=d.chart.renderer.path(g).addClass(t[1]).add(d.group),u.isArea=!0);d.chart.styledMode||(y.fill=E(t[3],I(t[2]).setOpacity(E(r.fillOpacity,.75)).get()));u[q](y);u.startX=g.xMap;u.shiftUnit=r.step?2:1})},drawLegendSymbol:r.drawRectangle});""});S(r,"parts/SplineSeries.js",[r["parts/Utilities.js"]],function(d){var g=d.pick;d=d.seriesType;d("spline","line",{},{getPointSpline:function(d,r,I){var u=r.plotX,E=r.plotY,A=d[I-1];I=d[I+1];
if(A&&!A.isNull&&!1!==A.doCurve&&!r.isCliff&&I&&!I.isNull&&!1!==I.doCurve&&!r.isCliff){d=A.plotY;var G=I.plotX;I=I.plotY;var J=0;var y=(1.5*u+A.plotX)/2.5;var t=(1.5*E+d)/2.5;G=(1.5*u+G)/2.5;var D=(1.5*E+I)/2.5;G!==y&&(J=(D-t)*(G-u)/(G-y)+E-D);t+=J;D+=J;t>d&&t>E?(t=Math.max(d,E),D=2*E-t):t<d&&t<E&&(t=Math.min(d,E),D=2*E-t);D>I&&D>E?(D=Math.max(I,E),t=2*E-D):D<I&&D<E&&(D=Math.min(I,E),t=2*E-D);r.rightContX=G;r.rightContY=D}r=["C",g(A.rightContX,A.plotX),g(A.rightContY,A.plotY),g(y,u),g(t,E),u,E];A.rightContX=
A.rightContY=null;return r}});""});S(r,"parts/AreaSplineSeries.js",[r["parts/Globals.js"],r["mixins/legend-symbol.js"],r["parts/Utilities.js"]],function(d,g,r){r=r.seriesType;var u=d.seriesTypes.area.prototype;r("areaspline","spline",d.defaultPlotOptions.area,{getStackPoints:u.getStackPoints,getGraphPath:u.getGraphPath,drawGraph:u.drawGraph,drawLegendSymbol:g.drawRectangle});""});S(r,"parts/ColumnSeries.js",[r["parts/Globals.js"],r["parts/Color.js"],r["mixins/legend-symbol.js"],r["parts/Utilities.js"]],
function(d,g,r,u){"";var I=g.parse,M=u.animObject,E=u.clamp,A=u.defined,G=u.extend,J=u.isNumber,y=u.merge,t=u.pick;g=u.seriesType;var D=d.Series;g("column","line",{borderRadius:0,crisp:!0,groupPadding:.2,marker:null,pointPadding:.1,minPointLength:0,cropThreshold:50,pointRange:null,states:{hover:{halo:!1,brightness:.1},select:{color:"#cccccc",borderColor:"#000000"}},dataLabels:{align:null,verticalAlign:null,y:null},softThreshold:!1,startFromThreshold:!0,stickyTracking:!1,tooltip:{distance:6},threshold:0,
borderColor:"#ffffff"},{cropShoulder:0,directTouch:!0,trackerGroups:["group","dataLabelsGroup"],negStacks:!0,init:function(){D.prototype.init.apply(this,arguments);var d=this,g=d.chart;g.hasRendered&&g.series.forEach(function(h){h.type===d.type&&(h.isDirty=!0)})},getColumnMetrics:function(){var d=this,g=d.options,q=d.xAxis,r=d.yAxis,e=q.options.reversedStacks;e=q.reversed&&!e||!q.reversed&&e;var c,k={},n=0;!1===g.grouping?n=1:d.chart.series.forEach(function(a){var e=a.yAxis,f=a.options;if(a.type===
d.type&&(a.visible||!d.chart.options.chart.ignoreHiddenSeries)&&r.len===e.len&&r.pos===e.pos){if(f.stacking){c=a.stackKey;"undefined"===typeof k[c]&&(k[c]=n++);var h=k[c]}else!1!==f.grouping&&(h=n++);a.columnIndex=h}});var f=Math.min(Math.abs(q.transA)*(q.ordinalSlope||g.pointRange||q.closestPointRange||q.tickInterval||1),q.len),a=f*g.groupPadding,l=(f-2*a)/(n||1);g=Math.min(g.maxPointWidth||q.len,t(g.pointWidth,l*(1-2*g.pointPadding)));d.columnMetrics={width:g,offset:(l-g)/2+(a+((d.columnIndex||
0)+(e?1:0))*l-f/2)*(e?-1:1)};return d.columnMetrics},crispCol:function(d,g,q,t){var e=this.chart,c=this.borderWidth,k=-(c%2?.5:0);c=c%2?.5:1;e.inverted&&e.renderer.isVML&&(c+=1);this.options.crisp&&(q=Math.round(d+q)+k,d=Math.round(d)+k,q-=d);t=Math.round(g+t)+c;k=.5>=Math.abs(g)&&.5<t;g=Math.round(g)+c;t-=g;k&&t&&(--g,t+=1);return{x:d,y:g,width:q,height:t}},translate:function(){var d=this,g=d.chart,q=d.options,r=d.dense=2>d.closestPointRange*d.xAxis.transA;r=d.borderWidth=t(q.borderWidth,r?0:1);
var e=d.xAxis,c=d.yAxis,k=q.threshold,n=d.translatedThreshold=c.getThreshold(k),f=t(q.minPointLength,5),a=d.getColumnMetrics(),l=a.width,v=d.barW=Math.max(l,1+2*r),z=d.pointXOffset=a.offset,w=d.dataMin,u=d.dataMax;g.inverted&&(n-=.5);q.pointPadding&&(v=Math.ceil(v));D.prototype.translate.apply(d);d.points.forEach(function(a){var h=t(a.yBottom,n),q=999+Math.abs(h),r=l,p=a.plotX;q=E(a.plotY,-q,c.len+q);var b=a.plotX+z,B=v,x=Math.min(q,h),y=Math.max(q,h)-x;if(f&&Math.abs(y)<f){y=f;var L=!c.reversed&&
!a.negative||c.reversed&&a.negative;a.y===k&&d.dataMax<=k&&c.min<k&&w!==u&&(L=!L);x=Math.abs(x-n)>f?h-f:n-(L?f:0)}A(a.options.pointWidth)&&(r=B=Math.ceil(a.options.pointWidth),b-=Math.round((r-l)/2));a.barX=b;a.pointWidth=r;a.tooltipPos=g.inverted?[c.len+c.pos-g.plotLeft-q,e.len+e.pos-g.plotTop-(p||0)-z-B/2,y]:[b+B/2,q+c.pos-g.plotTop,y];a.shapeType=d.pointClass.prototype.shapeType||"rect";a.shapeArgs=d.crispCol.apply(d,a.isNull?[b,n,B,0]:[b,x,B,y])})},getSymbol:d.noop,drawLegendSymbol:r.drawRectangle,
drawGraph:function(){this.group[this.dense?"addClass":"removeClass"]("highcharts-dense-data")},pointAttribs:function(d,g){var h=this.options,r=this.pointAttrToOptions||{};var e=r.stroke||"borderColor";var c=r["stroke-width"]||"borderWidth",k=d&&d.color||this.color,n=d&&d[e]||h[e]||this.color||k,f=d&&d[c]||h[c]||this[c]||0;r=d&&d.options.dashStyle||h.dashStyle;var a=t(d&&d.opacity,h.opacity,1);if(d&&this.zones.length){var l=d.getZone();k=d.options.color||l&&(l.color||d.nonZonedColor)||this.color;l&&
(n=l.borderColor||n,r=l.dashStyle||r,f=l.borderWidth||f)}g&&d&&(d=y(h.states[g],d.options.states&&d.options.states[g]||{}),g=d.brightness,k=d.color||"undefined"!==typeof g&&I(k).brighten(d.brightness).get()||k,n=d[e]||n,f=d[c]||f,r=d.dashStyle||r,a=t(d.opacity,a));e={fill:k,stroke:n,"stroke-width":f,opacity:a};r&&(e.dashstyle=r);return e},drawPoints:function(){var d=this,g=this.chart,q=d.options,t=g.renderer,e=q.animationLimit||250,c;d.points.forEach(function(k){var h=k.graphic,f=!!h,a=h&&g.pointCount<
e?"animate":"attr";if(J(k.plotY)&&null!==k.y){c=k.shapeArgs;h&&k.hasNewShapeType()&&(h=h.destroy());d.enabledDataSorting&&(k.startXPos=d.xAxis.reversed?-(c?c.width:0):d.xAxis.width);h||(k.graphic=h=t[k.shapeType](c).add(k.group||d.group))&&d.enabledDataSorting&&g.hasRendered&&g.pointCount<e&&(h.attr({x:k.startXPos}),f=!0,a="animate");if(h&&f)h[a](y(c));if(q.borderRadius)h[a]({r:q.borderRadius});g.styledMode||h[a](d.pointAttribs(k,k.selected&&"select")).shadow(!1!==k.allowShadow&&q.shadow,null,q.stacking&&
!q.borderRadius);h.addClass(k.getClassName(),!0)}else h&&(k.graphic=h.destroy())})},animate:function(d){var h=this,g=this.yAxis,t=h.options,e=this.chart.inverted,c={},k=e?"translateX":"translateY";if(d)c.scaleY=.001,d=E(g.toPixels(t.threshold),g.pos,g.pos+g.len),e?c.translateX=d-g.len:c.translateY=d,h.clipBox&&h.setClip(),h.group.attr(c);else{var n=h.group.attr(k);h.group.animate({scaleY:1},G(M(h.options.animation),{step:function(e,a){h.group&&(c[k]=n+a.pos*(g.pos-n),h.group.attr(c))}}))}},remove:function(){var d=
this,g=d.chart;g.hasRendered&&g.series.forEach(function(h){h.type===d.type&&(h.isDirty=!0)});D.prototype.remove.apply(d,arguments)}});""});S(r,"parts/BarSeries.js",[r["parts/Utilities.js"]],function(d){d=d.seriesType;d("bar","column",null,{inverted:!0});""});S(r,"parts/ScatterSeries.js",[r["parts/Globals.js"],r["parts/Utilities.js"]],function(d,g){var r=g.addEvent;g=g.seriesType;var u=d.Series;g("scatter","line",{lineWidth:0,findNearestPointBy:"xy",jitter:{x:0,y:0},marker:{enabled:!0},tooltip:{headerFormat:'<span style="color:{point.color}">\u25cf</span> <span style="font-size: 10px"> {series.name}</span><br/>',
pointFormat:"x: <b>{point.x}</b><br/>y: <b>{point.y}</b><br/>"}},{sorted:!1,requireSorting:!1,noSharedTooltip:!0,trackerGroups:["group","markerGroup","dataLabelsGroup"],takeOrdinalPosition:!1,drawGraph:function(){this.options.lineWidth&&u.prototype.drawGraph.call(this)},applyJitter:function(){var d=this,g=this.options.jitter,r=this.points.length;g&&this.points.forEach(function(u,E){["x","y"].forEach(function(A,y){var t="plot"+A.toUpperCase();if(g[A]&&!u.isNull){var D=d[A+"Axis"];var h=g[A]*D.transA;
if(D&&!D.isLog){var G=Math.max(0,u[t]-h);D=Math.min(D.len,u[t]+h);y=1E4*Math.sin(E+y*r);u[t]=G+(D-G)*(y-Math.floor(y));"x"===A&&(u.clientX=u.plotX)}}})})}});r(u,"afterTranslate",function(){this.applyJitter&&this.applyJitter()});""});S(r,"mixins/centered-series.js",[r["parts/Globals.js"],r["parts/Utilities.js"]],function(d,g){var r=g.isNumber,u=g.pick,I=g.relativeLength,M=d.deg2rad;d.CenteredSeriesMixin={getCenter:function(){var d=this.options,g=this.chart,r=2*(d.slicedOffset||0),J=g.plotWidth-2*r,
y=g.plotHeight-2*r,t=d.center,D=Math.min(J,y),h=d.size,N=d.innerSize||0;"string"===typeof h&&(h=parseFloat(h));"string"===typeof N&&(N=parseFloat(N));d=[u(t[0],"50%"),u(t[1],"50%"),u(h&&0>h?void 0:d.size,"100%"),u(N&&0>N?void 0:d.innerSize||0,"0%")];g.angular&&(d[3]=0);for(t=0;4>t;++t)h=d[t],g=2>t||2===t&&/%$/.test(h),d[t]=I(h,[J,y,D,d[2]][t])+(g?r:0);d[3]>d[2]&&(d[3]=d[2]);return d},getStartAndEndRadians:function(d,g){d=r(d)?d:0;g=r(g)&&g>d&&360>g-d?g:d+360;return{start:M*(d+-90),end:M*(g+-90)}}}});
S(r,"parts/PieSeries.js",[r["parts/Globals.js"],r["mixins/legend-symbol.js"],r["parts/Point.js"],r["parts/Utilities.js"]],function(d,g,r,u){var I=u.addEvent,M=u.clamp,E=u.defined,A=u.fireEvent,G=u.isNumber,J=u.merge,y=u.pick,t=u.relativeLength,D=u.seriesType,h=u.setAnimation;u=d.CenteredSeriesMixin;var N=u.getStartAndEndRadians,q=d.noop,P=d.Series;D("pie","line",{center:[null,null],clip:!1,colorByPoint:!0,dataLabels:{allowOverlap:!0,connectorPadding:5,connectorShape:"fixedOffset",crookDistance:"70%",
distance:30,enabled:!0,formatter:function(){return this.point.isNull?void 0:this.point.name},softConnector:!0,x:0},fillColor:void 0,ignoreHiddenPoint:!0,inactiveOtherPoints:!0,legendType:"point",marker:null,size:null,showInLegend:!1,slicedOffset:10,stickyTracking:!1,tooltip:{followPointer:!0},borderColor:"#ffffff",borderWidth:1,lineWidth:void 0,states:{hover:{brightness:.1}}},{isCartesian:!1,requireSorting:!1,directTouch:!0,noSharedTooltip:!0,trackerGroups:["group","dataLabelsGroup"],axisTypes:[],
pointAttribs:d.seriesTypes.column.prototype.pointAttribs,animate:function(e){var c=this,d=c.points,g=c.startAngleRad;e||d.forEach(function(e){var a=e.graphic,f=e.shapeArgs;a&&f&&(a.attr({r:y(e.startR,c.center&&c.center[3]/2),start:g,end:g}),a.animate({r:f.r,start:f.start,end:f.end},c.options.animation))})},hasData:function(){return!!this.processedXData.length},updateTotals:function(){var e,c=0,d=this.points,g=d.length,f=this.options.ignoreHiddenPoint;for(e=0;e<g;e++){var a=d[e];c+=f&&!a.visible?0:
a.isNull?0:a.y}this.total=c;for(e=0;e<g;e++)a=d[e],a.percentage=0<c&&(a.visible||!f)?a.y/c*100:0,a.total=c},generatePoints:function(){P.prototype.generatePoints.call(this);this.updateTotals()},getX:function(e,c,d){var k=this.center,f=this.radii?this.radii[d.index]:k[2]/2;e=Math.asin(M((e-k[1])/(f+d.labelDistance),-1,1));return k[0]+(c?-1:1)*Math.cos(e)*(f+d.labelDistance)+(0<d.labelDistance?(c?-1:1)*this.options.dataLabels.padding:0)},translate:function(e){this.generatePoints();var c=0,d=this.options,
g=d.slicedOffset,f=g+(d.borderWidth||0),a=N(d.startAngle,d.endAngle),h=this.startAngleRad=a.start;a=(this.endAngleRad=a.end)-h;var v=this.points,q=d.dataLabels.distance;d=d.ignoreHiddenPoint;var w,r=v.length;e||(this.center=e=this.getCenter());for(w=0;w<r;w++){var u=v[w];var D=h+c*a;if(!d||u.visible)c+=u.percentage/100;var H=h+c*a;u.shapeType="arc";u.shapeArgs={x:e[0],y:e[1],r:e[2]/2,innerR:e[3]/2,start:Math.round(1E3*D)/1E3,end:Math.round(1E3*H)/1E3};u.labelDistance=y(u.options.dataLabels&&u.options.dataLabels.distance,
q);u.labelDistance=t(u.labelDistance,u.shapeArgs.r);this.maxLabelDistance=Math.max(this.maxLabelDistance||0,u.labelDistance);H=(H+D)/2;H>1.5*Math.PI?H-=2*Math.PI:H<-Math.PI/2&&(H+=2*Math.PI);u.slicedTranslation={translateX:Math.round(Math.cos(H)*g),translateY:Math.round(Math.sin(H)*g)};var K=Math.cos(H)*e[2]/2;var p=Math.sin(H)*e[2]/2;u.tooltipPos=[e[0]+.7*K,e[1]+.7*p];u.half=H<-Math.PI/2||H>Math.PI/2?1:0;u.angle=H;D=Math.min(f,u.labelDistance/5);u.labelPosition={natural:{x:e[0]+K+Math.cos(H)*u.labelDistance,
y:e[1]+p+Math.sin(H)*u.labelDistance},"final":{},alignment:0>u.labelDistance?"center":u.half?"right":"left",connectorPosition:{breakAt:{x:e[0]+K+Math.cos(H)*D,y:e[1]+p+Math.sin(H)*D},touchingSliceAt:{x:e[0]+K,y:e[1]+p}}}}A(this,"afterTranslate")},drawEmpty:function(){var e=this.options;if(0===this.total){var c=this.center[0];var d=this.center[1];this.graph||(this.graph=this.chart.renderer.circle(c,d,0).addClass("highcharts-graph").add(this.group));this.graph.animate({"stroke-width":e.borderWidth,
cx:c,cy:d,r:this.center[2]/2,fill:e.fillColor||"none",stroke:e.color||"#cccccc"},this.options.animation)}else this.graph&&(this.graph=this.graph.destroy())},redrawPoints:function(){var e=this,c=e.chart,d=c.renderer,g,f,a,h,v=e.options.shadow;this.drawEmpty();!v||e.shadowGroup||c.styledMode||(e.shadowGroup=d.g("shadow").attr({zIndex:-1}).add(e.group));e.points.forEach(function(k){var l={};f=k.graphic;if(!k.isNull&&f){h=k.shapeArgs;g=k.getTranslate();if(!c.styledMode){var n=k.shadowGroup;v&&!n&&(n=
k.shadowGroup=d.g("shadow").add(e.shadowGroup));n&&n.attr(g);a=e.pointAttribs(k,k.selected&&"select")}k.delayedRendering?(f.setRadialReference(e.center).attr(h).attr(g),c.styledMode||f.attr(a).attr({"stroke-linejoin":"round"}).shadow(v,n),k.delayedRendering=!1):(f.setRadialReference(e.center),c.styledMode||J(!0,l,a),J(!0,l,h,g),f.animate(l));f.attr({visibility:k.visible?"inherit":"hidden"});f.addClass(k.getClassName())}else f&&(k.graphic=f.destroy())})},drawPoints:function(){var e=this.chart.renderer;
this.points.forEach(function(c){c.graphic&&c.hasNewShapeType()&&(c.graphic=c.graphic.destroy());c.graphic||(c.graphic=e[c.shapeType](c.shapeArgs).add(c.series.group),c.delayedRendering=!0)})},searchPoint:q,sortByAngle:function(e,c){e.sort(function(e,d){return"undefined"!==typeof e.angle&&(d.angle-e.angle)*c})},drawLegendSymbol:g.drawRectangle,getCenter:u.getCenter,getSymbol:q,drawGraph:null},{init:function(){r.prototype.init.apply(this,arguments);var e=this;e.name=y(e.name,"Slice");var c=function(c){e.slice("select"===
c.type)};I(e,"select",c);I(e,"unselect",c);return e},isValid:function(){return G(this.y)&&0<=this.y},setVisible:function(e,c){var d=this,g=d.series,f=g.chart,a=g.options.ignoreHiddenPoint;c=y(c,a);e!==d.visible&&(d.visible=d.options.visible=e="undefined"===typeof e?!d.visible:e,g.options.data[g.data.indexOf(d)]=d.options,["graphic","dataLabel","connector","shadowGroup"].forEach(function(a){if(d[a])d[a][e?"show":"hide"](!0)}),d.legendItem&&f.legend.colorizeItem(d,e),e||"hover"!==d.state||d.setState(""),
a&&(g.isDirty=!0),c&&f.redraw())},slice:function(e,c,d){var g=this.series;h(d,g.chart);y(c,!0);this.sliced=this.options.sliced=E(e)?e:!this.sliced;g.options.data[g.data.indexOf(this)]=this.options;this.graphic.animate(this.getTranslate());this.shadowGroup&&this.shadowGroup.animate(this.getTranslate())},getTranslate:function(){return this.sliced?this.slicedTranslation:{translateX:0,translateY:0}},haloPath:function(e){var c=this.shapeArgs;return this.sliced||!this.visible?[]:this.series.chart.renderer.symbols.arc(c.x,
c.y,c.r+e,c.r+e,{innerR:c.r-1,start:c.start,end:c.end})},connectorShapes:{fixedOffset:function(e,c,d){var g=c.breakAt;c=c.touchingSliceAt;return["M",e.x,e.y].concat(d.softConnector?["C",e.x+("left"===e.alignment?-5:5),e.y,2*g.x-c.x,2*g.y-c.y,g.x,g.y]:["L",g.x,g.y]).concat(["L",c.x,c.y])},straight:function(e,c){c=c.touchingSliceAt;return["M",e.x,e.y,"L",c.x,c.y]},crookedLine:function(e,c,d){c=c.touchingSliceAt;var g=this.series,f=g.center[0],a=g.chart.plotWidth,k=g.chart.plotLeft;g=e.alignment;var h=
this.shapeArgs.r;d=t(d.crookDistance,1);d="left"===g?f+h+(a+k-f-h)*(1-d):k+(f-h)*d;f=["L",d,e.y];if("left"===g?d>e.x||d<c.x:d<e.x||d>c.x)f=[];return["M",e.x,e.y].concat(f).concat(["L",c.x,c.y])}},getConnectorPath:function(){var e=this.labelPosition,c=this.series.options.dataLabels,d=c.connectorShape,g=this.connectorShapes;g[d]&&(d=g[d]);return d.call(this,{x:e.final.x,y:e.final.y,alignment:e.alignment},e.connectorPosition,c)}});""});S(r,"parts/DataLabels.js",[r["parts/Globals.js"],r["parts/Utilities.js"]],
function(d,g){var r=g.animObject,u=g.arrayMax,I=g.clamp,M=g.defined,E=g.extend,A=g.format,G=g.isArray,J=g.merge,y=g.objectEach,t=g.pick,D=g.relativeLength,h=g.splat,N=g.stableSort;g=d.noop;var q=d.Series,P=d.seriesTypes;d.distribute=function(e,c,g){function h(a,c){return a.target-c.target}var f,a=!0,k=e,v=[];var q=0;var w=k.reducedLen||c;for(f=e.length;f--;)q+=e[f].size;if(q>w){N(e,function(a,c){return(c.rank||0)-(a.rank||0)});for(q=f=0;q<=w;)q+=e[f].size,f++;v=e.splice(f-1,e.length)}N(e,h);for(e=
e.map(function(a){return{size:a.size,targets:[a.target],align:t(a.align,.5)}});a;){for(f=e.length;f--;)a=e[f],q=(Math.min.apply(0,a.targets)+Math.max.apply(0,a.targets))/2,a.pos=I(q-a.size*a.align,0,c-a.size);f=e.length;for(a=!1;f--;)0<f&&e[f-1].pos+e[f-1].size>e[f].pos&&(e[f-1].size+=e[f].size,e[f-1].targets=e[f-1].targets.concat(e[f].targets),e[f-1].align=.5,e[f-1].pos+e[f-1].size>c&&(e[f-1].pos=c-e[f-1].size),e.splice(f,1),a=!0)}k.push.apply(k,v);f=0;e.some(function(a){var e=0;if(a.targets.some(function(){k[f].pos=
a.pos+e;if("undefined"!==typeof g&&Math.abs(k[f].pos-k[f].target)>g)return k.slice(0,f+1).forEach(function(a){delete a.pos}),k.reducedLen=(k.reducedLen||c)-.1*c,k.reducedLen>.1*c&&d.distribute(k,c,g),!0;e+=k[f].size;f++}))return!0});N(k,h)};q.prototype.drawDataLabels=function(){function e(a,c){var b=c.filter;return b?(c=b.operator,a=a[b.property],b=b.value,">"===c&&a>b||"<"===c&&a<b||">="===c&&a>=b||"<="===c&&a<=b||"=="===c&&a==b||"==="===c&&a===b?!0:!1):!0}function c(a,c){var b=[],e;if(G(a)&&!G(c))b=
a.map(function(a){return J(a,c)});else if(G(c)&&!G(a))b=c.map(function(b){return J(a,b)});else if(G(a)||G(c))for(e=Math.max(a.length,c.length);e--;)b[e]=J(a[e],c[e]);else b=J(a,c);return b}var g=this,n=g.chart,f=g.options,a=f.dataLabels,l=g.points,v,q=g.hasRendered||0,w=r(f.animation).duration,u=Math.min(w,200),L=!n.renderer.forExport&&t(a.defer,0<u),D=n.renderer;a=c(c(n.options.plotOptions&&n.options.plotOptions.series&&n.options.plotOptions.series.dataLabels,n.options.plotOptions&&n.options.plotOptions[g.type]&&
n.options.plotOptions[g.type].dataLabels),a);d.fireEvent(this,"drawDataLabels");if(G(a)||a.enabled||g._hasPointLabels){var H=g.plotGroup("dataLabelsGroup","data-labels",L&&!q?"hidden":"inherit",a.zIndex||6);L&&(H.attr({opacity:+q}),q||setTimeout(function(){var a=g.dataLabelsGroup;a&&(g.visible&&H.show(!0),a[f.animation?"animate":"attr"]({opacity:1},{duration:u}))},w-u));l.forEach(function(d){v=h(c(a,d.dlOptions||d.options&&d.options.dataLabels));v.forEach(function(a,b){var c=a.enabled&&(!d.isNull||
d.dataLabelOnNull)&&e(d,a),h=d.dataLabels?d.dataLabels[b]:d.dataLabel,k=d.connectors?d.connectors[b]:d.connector,l=t(a.distance,d.labelDistance),p=!h;if(c){var v=d.getLabelConfig();var m=t(a[d.formatPrefix+"Format"],a.format);v=M(m)?A(m,v,n):(a[d.formatPrefix+"Formatter"]||a.formatter).call(v,a);m=a.style;var q=a.rotation;n.styledMode||(m.color=t(a.color,m.color,g.color,"#000000"),"contrast"===m.color?(d.contrastColor=D.getContrast(d.color||g.color),m.color=!M(l)&&a.inside||0>l||f.stacking?d.contrastColor:
"#000000"):delete d.contrastColor,f.cursor&&(m.cursor=f.cursor));var w={r:a.borderRadius||0,rotation:q,padding:a.padding,zIndex:1};n.styledMode||(w.fill=a.backgroundColor,w.stroke=a.borderColor,w["stroke-width"]=a.borderWidth);y(w,function(a,b){"undefined"===typeof a&&delete w[b]})}!h||c&&M(v)?c&&M(v)&&(h?w.text=v:(d.dataLabels=d.dataLabels||[],h=d.dataLabels[b]=q?D.text(v,0,-9999,a.useHTML).addClass("highcharts-data-label"):D.label(v,0,-9999,a.shape,null,null,a.useHTML,null,"data-label"),b||(d.dataLabel=
h),h.addClass(" highcharts-data-label-color-"+d.colorIndex+" "+(a.className||"")+(a.useHTML?" highcharts-tracker":""))),h.options=a,h.attr(w),n.styledMode||h.css(m).shadow(a.shadow),h.added||h.add(H),a.textPath&&!a.useHTML&&(h.setTextPath(d.getDataLabelPath&&d.getDataLabelPath(h)||d.graphic,a.textPath),d.dataLabelPath&&!a.textPath.enabled&&(d.dataLabelPath=d.dataLabelPath.destroy())),g.alignDataLabel(d,h,a,null,p)):(d.dataLabel=d.dataLabel&&d.dataLabel.destroy(),d.dataLabels&&(1===d.dataLabels.length?
delete d.dataLabels:delete d.dataLabels[b]),b||delete d.dataLabel,k&&(d.connector=d.connector.destroy(),d.connectors&&(1===d.connectors.length?delete d.connectors:delete d.connectors[b])))})})}d.fireEvent(this,"afterDrawDataLabels")};q.prototype.alignDataLabel=function(d,c,g,h,f){var a=this,e=this.chart,k=this.isCartesian&&e.inverted,n=this.enabledDataSorting,q=t(d.dlBox&&d.dlBox.centerX,d.plotX,-9999),r=t(d.plotY,-9999),u=c.getBBox(),y=g.rotation,A=g.align,K=e.isInsidePlot(q,Math.round(r),k),p="justify"===
t(g.overflow,n?"none":"justify"),b=this.visible&&!1!==d.visible&&(d.series.forceDL||n&&!p||K||g.inside&&h&&e.isInsidePlot(q,k?h.x+1:h.y+h.height-1,k));var C=function(b){n&&a.xAxis&&!p&&a.setDataLabelStartPos(d,c,f,K,b)};if(b){var x=e.renderer.fontMetrics(e.styledMode?void 0:g.style.fontSize,c).b;h=E({x:k?this.yAxis.len-r:q,y:Math.round(k?this.xAxis.len-q:r),width:0,height:0},h);E(g,{width:u.width,height:u.height});y?(p=!1,q=e.renderer.rotCorr(x,y),q={x:h.x+g.x+h.width/2+q.x,y:h.y+g.y+{top:0,middle:.5,
bottom:1}[g.verticalAlign]*h.height},C(q),c[f?"attr":"animate"](q).attr({align:A}),C=(y+720)%360,C=180<C&&360>C,"left"===A?q.y-=C?u.height:0:"center"===A?(q.x-=u.width/2,q.y-=u.height/2):"right"===A&&(q.x-=u.width,q.y-=C?0:u.height),c.placed=!0,c.alignAttr=q):(C(h),c.align(g,null,h),q=c.alignAttr);p&&0<=h.height?this.justifyDataLabel(c,g,q,u,h,f):t(g.crop,!0)&&(b=e.isInsidePlot(q.x,q.y)&&e.isInsidePlot(q.x+u.width,q.y+u.height));if(g.shape&&!y)c[f?"attr":"animate"]({anchorX:k?e.plotWidth-d.plotY:
d.plotX,anchorY:k?e.plotHeight-d.plotX:d.plotY})}f&&n&&(c.placed=!1);b||n&&!p||(c.hide(!0),c.placed=!1)};q.prototype.setDataLabelStartPos=function(d,c,g,h,f){var a=this.chart,e=a.inverted,k=this.xAxis,n=k.reversed,q=e?c.height/2:c.width/2;d=(d=d.pointWidth)?d/2:0;k=e?f.x:n?-q-d:k.width-q+d;f=e?n?this.yAxis.height-q+d:-q-d:f.y;c.startXPos=k;c.startYPos=f;h?"hidden"===c.visibility&&(c.show(),c.attr({opacity:0}).animate({opacity:1})):c.attr({opacity:1}).animate({opacity:0},void 0,c.hide);a.hasRendered&&
(g&&c.attr({x:c.startXPos,y:c.startYPos}),c.placed=!0)};q.prototype.justifyDataLabel=function(d,c,g,h,f,a){var e=this.chart,k=c.align,n=c.verticalAlign,q=d.box?0:d.padding||0;var r=g.x+q;if(0>r){"right"===k?(c.align="left",c.inside=!0):c.x=-r;var t=!0}r=g.x+h.width-q;r>e.plotWidth&&("left"===k?(c.align="right",c.inside=!0):c.x=e.plotWidth-r,t=!0);r=g.y+q;0>r&&("bottom"===n?(c.verticalAlign="top",c.inside=!0):c.y=-r,t=!0);r=g.y+h.height-q;r>e.plotHeight&&("top"===n?(c.verticalAlign="bottom",c.inside=
!0):c.y=e.plotHeight-r,t=!0);t&&(d.placed=!a,d.align(c,null,f));return t};P.pie&&(P.pie.prototype.dataLabelPositioners={radialDistributionY:function(d){return d.top+d.distributeBox.pos},radialDistributionX:function(d,c,g,h){return d.getX(g<c.top+2||g>c.bottom-2?h:g,c.half,c)},justify:function(d,c,g){return g[0]+(d.half?-1:1)*(c+d.labelDistance)},alignToPlotEdges:function(d,c,g,h){d=d.getBBox().width;return c?d+h:g-d-h},alignToConnectors:function(d,c,g,h){var e=0,a;d.forEach(function(c){a=c.dataLabel.getBBox().width;
a>e&&(e=a)});return c?e+h:g-e-h}},P.pie.prototype.drawDataLabels=function(){var e=this,c=e.data,g,h=e.chart,f=e.options.dataLabels||{},a=f.connectorPadding,l,v=h.plotWidth,r=h.plotHeight,w=h.plotLeft,y=Math.round(h.chartWidth/3),A,D=e.center,H=D[2]/2,K=D[1],p,b,C,x,G=[[],[]],E,N,I,m,P=[0,0,0,0],S=e.dataLabelPositioners,W;e.visible&&(f.enabled||e._hasPointLabels)&&(c.forEach(function(a){a.dataLabel&&a.visible&&a.dataLabel.shortened&&(a.dataLabel.attr({width:"auto"}).css({width:"auto",textOverflow:"clip"}),
a.dataLabel.shortened=!1)}),q.prototype.drawDataLabels.apply(e),c.forEach(function(a){a.dataLabel&&(a.visible?(G[a.half].push(a),a.dataLabel._pos=null,!M(f.style.width)&&!M(a.options.dataLabels&&a.options.dataLabels.style&&a.options.dataLabels.style.width)&&a.dataLabel.getBBox().width>y&&(a.dataLabel.css({width:.7*y}),a.dataLabel.shortened=!0)):(a.dataLabel=a.dataLabel.destroy(),a.dataLabels&&1===a.dataLabels.length&&delete a.dataLabels))}),G.forEach(function(c,k){var l=c.length,n=[],q;if(l){e.sortByAngle(c,
k-.5);if(0<e.maxLabelDistance){var u=Math.max(0,K-H-e.maxLabelDistance);var z=Math.min(K+H+e.maxLabelDistance,h.plotHeight);c.forEach(function(a){0<a.labelDistance&&a.dataLabel&&(a.top=Math.max(0,K-H-a.labelDistance),a.bottom=Math.min(K+H+a.labelDistance,h.plotHeight),q=a.dataLabel.getBBox().height||21,a.distributeBox={target:a.labelPosition.natural.y-a.top+q/2,size:q,rank:a.y},n.push(a.distributeBox))});u=z+q-u;d.distribute(n,u,u/5)}for(m=0;m<l;m++){g=c[m];C=g.labelPosition;p=g.dataLabel;I=!1===
g.visible?"hidden":"inherit";N=u=C.natural.y;n&&M(g.distributeBox)&&("undefined"===typeof g.distributeBox.pos?I="hidden":(x=g.distributeBox.size,N=S.radialDistributionY(g)));delete g.positionIndex;if(f.justify)E=S.justify(g,H,D);else switch(f.alignTo){case "connectors":E=S.alignToConnectors(c,k,v,w);break;case "plotEdges":E=S.alignToPlotEdges(p,k,v,w);break;default:E=S.radialDistributionX(e,g,N,u)}p._attr={visibility:I,align:C.alignment};W=g.options.dataLabels||{};p._pos={x:E+t(W.x,f.x)+({left:a,
right:-a}[C.alignment]||0),y:N+t(W.y,f.y)-10};C.final.x=E;C.final.y=N;t(f.crop,!0)&&(b=p.getBBox().width,u=null,E-b<a&&1===k?(u=Math.round(b-E+a),P[3]=Math.max(u,P[3])):E+b>v-a&&0===k&&(u=Math.round(E+b-v+a),P[1]=Math.max(u,P[1])),0>N-x/2?P[0]=Math.max(Math.round(-N+x/2),P[0]):N+x/2>r&&(P[2]=Math.max(Math.round(N+x/2-r),P[2])),p.sideOverflow=u)}}}),0===u(P)||this.verifyDataLabelOverflow(P))&&(this.placeDataLabels(),this.points.forEach(function(a){W=J(f,a.options.dataLabels);if(l=t(W.connectorWidth,
1)){var b;A=a.connector;if((p=a.dataLabel)&&p._pos&&a.visible&&0<a.labelDistance){I=p._attr.visibility;if(b=!A)a.connector=A=h.renderer.path().addClass("highcharts-data-label-connector  highcharts-color-"+a.colorIndex+(a.className?" "+a.className:"")).add(e.dataLabelsGroup),h.styledMode||A.attr({"stroke-width":l,stroke:W.connectorColor||a.color||"#666666"});A[b?"attr":"animate"]({d:a.getConnectorPath()});A.attr("visibility",I)}else A&&(a.connector=A.destroy())}}))},P.pie.prototype.placeDataLabels=
function(){this.points.forEach(function(d){var c=d.dataLabel,e;c&&d.visible&&((e=c._pos)?(c.sideOverflow&&(c._attr.width=Math.max(c.getBBox().width-c.sideOverflow,0),c.css({width:c._attr.width+"px",textOverflow:(this.options.dataLabels.style||{}).textOverflow||"ellipsis"}),c.shortened=!0),c.attr(c._attr),c[c.moved?"animate":"attr"](e),c.moved=!0):c&&c.attr({y:-9999}));delete d.distributeBox},this)},P.pie.prototype.alignDataLabel=g,P.pie.prototype.verifyDataLabelOverflow=function(d){var c=this.center,
e=this.options,g=e.center,f=e.minSize||80,a=null!==e.size;if(!a){if(null!==g[0])var h=Math.max(c[2]-Math.max(d[1],d[3]),f);else h=Math.max(c[2]-d[1]-d[3],f),c[0]+=(d[3]-d[1])/2;null!==g[1]?h=I(h,f,c[2]-Math.max(d[0],d[2])):(h=I(h,f,c[2]-d[0]-d[2]),c[1]+=(d[0]-d[2])/2);h<c[2]?(c[2]=h,c[3]=Math.min(D(e.innerSize||0,h),h),this.translate(c),this.drawDataLabels&&this.drawDataLabels()):a=!0}return a});P.column&&(P.column.prototype.alignDataLabel=function(d,c,g,h,f){var a=this.chart.inverted,e=d.series,
k=d.dlBox||d.shapeArgs,n=t(d.below,d.plotY>t(this.translatedThreshold,e.yAxis.len)),r=t(g.inside,!!this.options.stacking);k&&(h=J(k),0>h.y&&(h.height+=h.y,h.y=0),k=h.y+h.height-e.yAxis.len,0<k&&k<h.height&&(h.height-=k),a&&(h={x:e.yAxis.len-h.y-h.height,y:e.xAxis.len-h.x-h.width,width:h.height,height:h.width}),r||(a?(h.x+=n?0:h.width,h.width=0):(h.y+=n?h.height:0,h.height=0)));g.align=t(g.align,!a||r?"center":n?"right":"left");g.verticalAlign=t(g.verticalAlign,a||r?"middle":n?"top":"bottom");q.prototype.alignDataLabel.call(this,
d,c,g,h,f);g.inside&&d.contrastColor&&c.css({color:d.contrastColor})})});S(r,"modules/overlapping-datalabels.src.js",[r["parts/Globals.js"],r["parts/Utilities.js"]],function(d,g){var r=g.addEvent,u=g.fireEvent,I=g.isArray,M=g.objectEach,E=g.pick;d=d.Chart;r(d,"render",function(){var d=[];(this.labelCollectors||[]).forEach(function(g){d=d.concat(g())});(this.yAxis||[]).forEach(function(g){g.options.stackLabels&&!g.options.stackLabels.allowOverlap&&M(g.stacks,function(g){M(g,function(g){d.push(g.label)})})});
(this.series||[]).forEach(function(g){var r=g.options.dataLabels;g.visible&&(!1!==r.enabled||g._hasPointLabels)&&(g.nodes||g.points).forEach(function(g){g.visible&&(I(g.dataLabels)?g.dataLabels:g.dataLabel?[g.dataLabel]:[]).forEach(function(r){var t=r.options;r.labelrank=E(t.labelrank,g.labelrank,g.shapeArgs&&g.shapeArgs.height);t.allowOverlap||d.push(r)})})});this.hideOverlappingLabels(d)});d.prototype.hideOverlappingLabels=function(d){var g=this,r=d.length,y=g.renderer,t,A,h,E=!1;var q=function(c){var d=
c.box?0:c.padding||0;var e=0;if(c&&(!c.alignAttr||c.placed)){var f=c.alignAttr||{x:c.attr("x"),y:c.attr("y")};var a=c.parentGroup;c.width||(e=c.getBBox(),c.width=e.width,c.height=e.height,e=y.fontMetrics(null,c.element).h);return{x:f.x+(a.translateX||0)+d,y:f.y+(a.translateY||0)+d-e,width:c.width-2*d,height:c.height-2*d}}};for(A=0;A<r;A++)if(t=d[A])t.oldOpacity=t.opacity,t.newOpacity=1,t.absoluteBox=q(t);d.sort(function(c,d){return(d.labelrank||0)-(c.labelrank||0)});for(A=0;A<r;A++){var I=(q=d[A])&&
q.absoluteBox;for(t=A+1;t<r;++t){var e=(h=d[t])&&h.absoluteBox;!I||!e||q===h||0===q.newOpacity||0===h.newOpacity||e.x>I.x+I.width||e.x+e.width<I.x||e.y>I.y+I.height||e.y+e.height<I.y||((q.labelrank<h.labelrank?q:h).newOpacity=0)}}d.forEach(function(c){var d;if(c){var e=c.newOpacity;c.oldOpacity!==e&&(c.alignAttr&&c.placed?(e?c.show(!0):d=function(){c.hide(!0);c.placed=!1},E=!0,c.alignAttr.opacity=e,c[c.isOld?"animate":"attr"](c.alignAttr,null,d),u(g,"afterHideOverlappingLabel")):c.attr({opacity:e}));
c.isOld=!0}});E&&u(g,"afterHideAllOverlappingLabels")}});S(r,"parts/Interaction.js",[r["parts/Globals.js"],r["parts/Legend.js"],r["parts/Point.js"],r["parts/Utilities.js"]],function(d,g,r,u){var I=u.addEvent,M=u.createElement,E=u.css,A=u.defined,G=u.extend,J=u.fireEvent,y=u.isArray,t=u.isFunction,D=u.isObject,h=u.merge,N=u.objectEach,q=u.pick;u=d.Chart;var P=d.defaultOptions,e=d.defaultPlotOptions,c=d.hasTouch,k=d.Series,n=d.seriesTypes,f=d.svg;d=d.TrackerMixin={drawTrackerPoint:function(){var a=
this,d=a.chart,e=d.pointer,f=function(a){var c=e.getPointFromEvent(a);"undefined"!==typeof c&&(e.isDirectTouch=!0,c.onMouseOver(a))},g;a.points.forEach(function(a){g=y(a.dataLabels)?a.dataLabels:a.dataLabel?[a.dataLabel]:[];a.graphic&&(a.graphic.element.point=a);g.forEach(function(c){c.div?c.div.point=a:c.element.point=a})});a._hasTracking||(a.trackerGroups.forEach(function(g){if(a[g]){a[g].addClass("highcharts-tracker").on("mouseover",f).on("mouseout",function(a){e.onTrackerMouseOut(a)});if(c)a[g].on("touchstart",
f);!d.styledMode&&a.options.cursor&&a[g].css(E).css({cursor:a.options.cursor})}}),a._hasTracking=!0);J(this,"afterDrawTracker")},drawTrackerGraph:function(){var a=this,d=a.options,e=d.trackByArea,g=[].concat(e?a.areaPath:a.graphPath),h=g.length,k=a.chart,n=k.pointer,q=k.renderer,r=k.options.tooltip.snap,t=a.tracker,p,b=function(){if(k.hoverSeries!==a)a.onMouseOver()},u="rgba(192,192,192,"+(f?.0001:.002)+")";if(h&&!e)for(p=h+1;p--;)"M"===g[p]&&g.splice(p+1,0,g[p+1]-r,g[p+2],"L"),(p&&"M"===g[p]||p===
h)&&g.splice(p,0,"L",g[p-2]+r,g[p-1]);t?t.attr({d:g}):a.graph&&(a.tracker=q.path(g).attr({visibility:a.visible?"visible":"hidden",zIndex:2}).addClass(e?"highcharts-tracker-area":"highcharts-tracker-line").add(a.group),k.styledMode||a.tracker.attr({"stroke-linejoin":"round",stroke:u,fill:e?u:"none","stroke-width":a.graph.strokeWidth()+(e?0:2*r)}),[a.tracker,a.markerGroup].forEach(function(a){a.addClass("highcharts-tracker").on("mouseover",b).on("mouseout",function(a){n.onTrackerMouseOut(a)});d.cursor&&
!k.styledMode&&a.css({cursor:d.cursor});if(c)a.on("touchstart",b)}));J(this,"afterDrawTracker")}};n.column&&(n.column.prototype.drawTracker=d.drawTrackerPoint);n.pie&&(n.pie.prototype.drawTracker=d.drawTrackerPoint);n.scatter&&(n.scatter.prototype.drawTracker=d.drawTrackerPoint);G(g.prototype,{setItemEvents:function(a,c,d){var e=this,f=e.chart.renderer.boxWrapper,g=a instanceof r,k="highcharts-legend-"+(g?"point":"series")+"-active",l=e.chart.styledMode;(d?[c,a.legendSymbol]:[a.legendGroup]).forEach(function(d){if(d)d.on("mouseover",
function(){a.visible&&e.allItems.forEach(function(c){a!==c&&c.setState("inactive",!g)});a.setState("hover");a.visible&&f.addClass(k);l||c.css(e.options.itemHoverStyle)}).on("mouseout",function(){e.chart.styledMode||c.css(h(a.visible?e.itemStyle:e.itemHiddenStyle));e.allItems.forEach(function(c){a!==c&&c.setState("",!g)});f.removeClass(k);a.setState()}).on("click",function(c){var d=function(){a.setVisible&&a.setVisible();e.allItems.forEach(function(b){a!==b&&b.setState(a.visible?"inactive":"",!g)})};
f.removeClass(k);c={browserEvent:c};a.firePointEvent?a.firePointEvent("legendItemClick",c,d):J(a,"legendItemClick",c,d)})})},createCheckboxForItem:function(a){a.checkbox=M("input",{type:"checkbox",className:"highcharts-legend-checkbox",checked:a.selected,defaultChecked:a.selected},this.options.itemCheckboxStyle,this.chart.container);I(a.checkbox,"click",function(c){J(a.series||a,"checkboxClick",{checked:c.target.checked,item:a},function(){a.select()})})}});G(u.prototype,{showResetZoom:function(){function a(){c.zoomOut()}
var c=this,d=P.lang,e=c.options.chart.resetZoomButton,f=e.theme,g=f.states,h="chart"===e.relativeTo||"spaceBox"===e.relativeTo?null:"plotBox";J(this,"beforeShowResetZoom",null,function(){c.resetZoomButton=c.renderer.button(d.resetZoom,null,null,a,f,g&&g.hover).attr({align:e.position.align,title:d.resetZoomTitle}).addClass("highcharts-reset-zoom").add().align(e.position,!1,h)});J(this,"afterShowResetZoom")},zoomOut:function(){J(this,"selection",{resetSelection:!0},this.zoom)},zoom:function(a){var c=
this,d,e=c.pointer,f=!1,g=c.inverted?e.mouseDownX:e.mouseDownY;!a||a.resetSelection?(c.axes.forEach(function(a){d=a.zoom()}),e.initiated=!1):a.xAxis.concat(a.yAxis).forEach(function(a){var h=a.axis,k=c.inverted?h.left:h.top,l=c.inverted?k+h.width:k+h.height,b=h.isXAxis,n=!1;if(!b&&g>=k&&g<=l||b||!A(g))n=!0;e[b?"zoomX":"zoomY"]&&n&&(d=h.zoom(a.min,a.max),h.displayBtn&&(f=!0))});var h=c.resetZoomButton;f&&!h?c.showResetZoom():!f&&D(h)&&(c.resetZoomButton=h.destroy());d&&c.redraw(q(c.options.chart.animation,
a&&a.animation,100>c.pointCount))},pan:function(a,c){var d=this,e=d.hoverPoints,f=d.options.chart,g;c="object"===typeof c?c:{enabled:c,type:"x"};f&&f.panning&&(f.panning=c);var h=c.type;J(this,"pan",{originalEvent:a},function(){e&&e.forEach(function(a){a.setState()});var c=[1];"xy"===h?c=[1,0]:"y"===h&&(c=[0]);c.forEach(function(c){var e=d[c?"xAxis":"yAxis"][0],f=e.options,b=e.horiz,h=a[b?"chartX":"chartY"];b=b?"mouseDownX":"mouseDownY";var k=d[b],l=(e.pointRange||0)/2,n=e.reversed&&!d.inverted||
!e.reversed&&d.inverted?-1:1,q=e.getExtremes(),v=e.toValue(k-h,!0)+l*n;n=e.toValue(k+e.len-h,!0)-l*n;var m=n<v;k=m?n:v;v=m?v:n;n=Math.min(q.dataMin,l?q.min:e.toValue(e.toPixels(q.min)-e.minPixelPadding));l=Math.max(q.dataMax,l?q.max:e.toValue(e.toPixels(q.max)+e.minPixelPadding));if(!f.ordinal){c&&(f=n-k,0<f&&(v+=f,k=n),f=v-l,0<f&&(v=l,k-=f));if(e.series.length&&k!==q.min&&v!==q.max&&c||e.panningState&&k>=e.panningState.startMin&&v<=e.panningState.startMax)e.setExtremes(k,v,!1,!1,{trigger:"pan"}),
g=!0;d[b]=h}});g&&d.redraw(!1);E(d.container,{cursor:"move"})})}});G(r.prototype,{select:function(a,c){var d=this,e=d.series,f=e.chart;this.selectedStaging=a=q(a,!d.selected);d.firePointEvent(a?"select":"unselect",{accumulate:c},function(){d.selected=d.options.selected=a;e.options.data[e.data.indexOf(d)]=d.options;d.setState(a&&"select");c||f.getSelectedPoints().forEach(function(a){var c=a.series;a.selected&&a!==d&&(a.selected=a.options.selected=!1,c.options.data[c.data.indexOf(a)]=a.options,a.setState(f.hoverPoints&&
c.options.inactiveOtherPoints?"inactive":""),a.firePointEvent("unselect"))})});delete this.selectedStaging},onMouseOver:function(a){var c=this.series.chart,d=c.pointer;a=a?d.normalize(a):d.getChartCoordinatesFromPoint(this,c.inverted);d.runPointActions(a,this)},onMouseOut:function(){var a=this.series.chart;this.firePointEvent("mouseOut");this.series.options.inactiveOtherPoints||(a.hoverPoints||[]).forEach(function(a){a.setState()});a.hoverPoints=a.hoverPoint=null},importEvents:function(){if(!this.hasImportedEvents){var a=
this,c=h(a.series.options.point,a.options).events;a.events=c;N(c,function(c,d){t(c)&&I(a,d,c)});this.hasImportedEvents=!0}},setState:function(a,c){var d=this.series,f=this.state,g=d.options.states[a||"normal"]||{},h=e[d.type].marker&&d.options.marker,k=h&&!1===h.enabled,l=h&&h.states&&h.states[a||"normal"]||{},n=!1===l.enabled,r=d.stateMarkerGraphic,p=this.marker||{},b=d.chart,t=d.halo,u,y=h&&d.markerAttribs;a=a||"";if(!(a===this.state&&!c||this.selected&&"select"!==a||!1===g.enabled||a&&(n||k&&!1===
l.enabled)||a&&p.states&&p.states[a]&&!1===p.states[a].enabled)){this.state=a;y&&(u=d.markerAttribs(this,a));if(this.graphic){f&&this.graphic.removeClass("highcharts-point-"+f);a&&this.graphic.addClass("highcharts-point-"+a);if(!b.styledMode){var A=d.pointAttribs(this,a);var D=q(b.options.chart.animation,g.animation);d.options.inactiveOtherPoints&&((this.dataLabels||[]).forEach(function(a){a&&a.animate({opacity:A.opacity},D)}),this.connector&&this.connector.animate({opacity:A.opacity},D));this.graphic.animate(A,
D)}u&&this.graphic.animate(u,q(b.options.chart.animation,l.animation,h.animation));r&&r.hide()}else{if(a&&l){f=p.symbol||d.symbol;r&&r.currentSymbol!==f&&(r=r.destroy());if(u)if(r)r[c?"animate":"attr"]({x:u.x,y:u.y});else f&&(d.stateMarkerGraphic=r=b.renderer.symbol(f,u.x,u.y,u.width,u.height).add(d.markerGroup),r.currentSymbol=f);!b.styledMode&&r&&r.attr(d.pointAttribs(this,a))}r&&(r[a&&this.isInside?"show":"hide"](),r.element.point=this)}a=g.halo;g=(r=this.graphic||r)&&r.visibility||"inherit";a&&
a.size&&r&&"hidden"!==g&&!this.isCluster?(t||(d.halo=t=b.renderer.path().add(r.parentGroup)),t.show()[c?"animate":"attr"]({d:this.haloPath(a.size)}),t.attr({"class":"highcharts-halo highcharts-color-"+q(this.colorIndex,d.colorIndex)+(this.className?" "+this.className:""),visibility:g,zIndex:-1}),t.point=this,b.styledMode||t.attr(G({fill:this.color||d.color,"fill-opacity":a.opacity},a.attributes))):t&&t.point&&t.point.haloPath&&t.animate({d:t.point.haloPath(0)},null,t.hide);J(this,"afterSetState")}},
haloPath:function(a){return this.series.chart.renderer.symbols.circle(Math.floor(this.plotX)-a,this.plotY-a,2*a,2*a)}});G(k.prototype,{onMouseOver:function(){var a=this.chart,c=a.hoverSeries;if(c&&c!==this)c.onMouseOut();this.options.events.mouseOver&&J(this,"mouseOver");this.setState("hover");a.hoverSeries=this},onMouseOut:function(){var a=this.options,c=this.chart,d=c.tooltip,e=c.hoverPoint;c.hoverSeries=null;if(e)e.onMouseOut();this&&a.events.mouseOut&&J(this,"mouseOut");!d||this.stickyTracking||
d.shared&&!this.noSharedTooltip||d.hide();c.series.forEach(function(a){a.setState("",!0)})},setState:function(a,c){var d=this,e=d.options,f=d.graph,g=e.inactiveOtherPoints,h=e.states,k=e.lineWidth,l=e.opacity,n=q(h[a||"normal"]&&h[a||"normal"].animation,d.chart.options.chart.animation);e=0;a=a||"";if(d.state!==a&&([d.group,d.markerGroup,d.dataLabelsGroup].forEach(function(c){c&&(d.state&&c.removeClass("highcharts-series-"+d.state),a&&c.addClass("highcharts-series-"+a))}),d.state=a,!d.chart.styledMode)){if(h[a]&&
!1===h[a].enabled)return;a&&(k=h[a].lineWidth||k+(h[a].lineWidthPlus||0),l=q(h[a].opacity,l));if(f&&!f.dashstyle)for(h={"stroke-width":k},f.animate(h,n);d["zone-graph-"+e];)d["zone-graph-"+e].attr(h),e+=1;g||[d.group,d.markerGroup,d.dataLabelsGroup,d.labelBySeries].forEach(function(a){a&&a.animate({opacity:l},n)})}c&&g&&d.points&&d.setAllPointsToState(a)},setAllPointsToState:function(a){this.points.forEach(function(c){c.setState&&c.setState(a)})},setVisible:function(a,c){var d=this,e=d.chart,f=d.legendItem,
g=e.options.chart.ignoreHiddenSeries,h=d.visible;var k=(d.visible=a=d.options.visible=d.userOptions.visible="undefined"===typeof a?!h:a)?"show":"hide";["group","dataLabelsGroup","markerGroup","tracker","tt"].forEach(function(a){if(d[a])d[a][k]()});if(e.hoverSeries===d||(e.hoverPoint&&e.hoverPoint.series)===d)d.onMouseOut();f&&e.legend.colorizeItem(d,a);d.isDirty=!0;d.options.stacking&&e.series.forEach(function(a){a.options.stacking&&a.visible&&(a.isDirty=!0)});d.linkedSeries.forEach(function(c){c.setVisible(a,
!1)});g&&(e.isDirtyBox=!0);J(d,k);!1!==c&&e.redraw()},show:function(){this.setVisible(!0)},hide:function(){this.setVisible(!1)},select:function(a){this.selected=a=this.options.selected="undefined"===typeof a?!this.selected:a;this.checkbox&&(this.checkbox.checked=a);J(this,a?"select":"unselect")},drawTracker:d.drawTrackerGraph})});S(r,"parts/Responsive.js",[r["parts/Globals.js"],r["parts/Utilities.js"]],function(d,g){var r=g.find,u=g.isArray,I=g.isObject,M=g.merge,E=g.objectEach,A=g.pick,G=g.splat,
J=g.uniqueKey;d=d.Chart;d.prototype.setResponsive=function(d,g){var t=this.options.responsive,h=[],u=this.currentResponsive;!g&&t&&t.rules&&t.rules.forEach(function(d){"undefined"===typeof d._id&&(d._id=J());this.matchResponsiveRule(d,h)},this);g=M.apply(0,h.map(function(d){return r(t.rules,function(g){return g._id===d}).chartOptions}));g.isResponsiveOptions=!0;h=h.toString()||void 0;h!==(u&&u.ruleIds)&&(u&&this.update(u.undoOptions,d,!0),h?(u=this.currentOptions(g),u.isResponsiveOptions=!0,this.currentResponsive=
{ruleIds:h,mergedOptions:g,undoOptions:u},this.update(g,d,!0)):this.currentResponsive=void 0)};d.prototype.matchResponsiveRule=function(d,g){var r=d.condition;(r.callback||function(){return this.chartWidth<=A(r.maxWidth,Number.MAX_VALUE)&&this.chartHeight<=A(r.maxHeight,Number.MAX_VALUE)&&this.chartWidth>=A(r.minWidth,0)&&this.chartHeight>=A(r.minHeight,0)}).call(this)&&g.push(d._id)};d.prototype.currentOptions=function(d){function g(d,h,t,e){var c;E(d,function(d,n){if(!e&&-1<r.collectionsWithUpdate.indexOf(n))for(d=
G(d),t[n]=[],c=0;c<d.length;c++)h[n][c]&&(t[n][c]={},g(d[c],h[n][c],t[n][c],e+1));else I(d)?(t[n]=u(d)?[]:{},g(d,h[n]||{},t[n],e+1)):t[n]="undefined"===typeof h[n]?null:h[n]})}var r=this,h={};g(d,this.options,h,0);return h}});S(r,"masters/highcharts.src.js",[r["parts/Globals.js"]],function(d){return d});r["masters/highcharts.src.js"]._modules=r;return r["masters/highcharts.src.js"]});
//# sourceMappingURL=highcharts.js.map

/***/ }),

/***/ "./node_modules/highcharts/modules/data.js":
/*!*************************************************!*\
  !*** ./node_modules/highcharts/modules/data.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*
 Highcharts JS v8.0.4 (2020-03-10)

 Data module

 (c) 2012-2019 Torstein Honsi

 License: www.highcharts.com/license
*/
(function(b){ true&&module.exports?(b["default"]=b,module.exports=b): true?!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! highcharts */ "./node_modules/highcharts/highcharts.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(u){b(u);b.Highcharts=u;return b}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):undefined})(function(b){function u(z,b,u,H){z.hasOwnProperty(b)||(z[b]=H.apply(null,u))}b=b?b._modules:{};u(b,"mixins/ajax.js",[b["parts/Globals.js"],b["parts/Utilities.js"]],function(b,y){var z=y.merge,u=y.objectEach;b.ajax=function(b){var n=
z(!0,{url:!1,type:"get",dataType:"json",success:!1,error:!1,data:!1,headers:{}},b);b={json:"application/json",xml:"application/xml",text:"text/plain",octet:"application/octet-stream"};var r=new XMLHttpRequest;if(!n.url)return!1;r.open(n.type.toUpperCase(),n.url,!0);n.headers["Content-Type"]||r.setRequestHeader("Content-Type",b[n.dataType]||b.text);u(n.headers,function(b,n){r.setRequestHeader(n,b)});r.onreadystatechange=function(){if(4===r.readyState){if(200===r.status){var b=r.responseText;if("json"===
n.dataType)try{b=JSON.parse(b)}catch(E){n.error&&n.error(r,E);return}return n.success&&n.success(b)}n.error&&n.error(r,r.responseText)}};try{n.data=JSON.stringify(n.data)}catch(G){}r.send(n.data||!0)};b.getJSON=function(z,n){b.ajax({url:z,success:n,dataType:"json",headers:{"Content-Type":"text/plain"}})}});u(b,"modules/data.src.js",[b["parts/Globals.js"],b["parts/Utilities.js"]],function(b,y){var u=y.defined,z=y.extend,F=y.isNumber,n=y.objectEach,r=y.pick,G=y.splat;y=b.addEvent;var E=b.Chart,I=b.win.document,
C=b.merge,J=b.fireEvent,D=function(a,d,c){this.init(a,d,c)};z(D.prototype,{init:function(a,d,c){var e=a.decimalPoint;d&&(this.chartOptions=d);c&&(this.chart=c);"."!==e&&","!==e&&(e=void 0);this.options=a;this.columns=a.columns||this.rowsToColumns(a.rows)||[];this.firstRowAsNames=r(a.firstRowAsNames,this.firstRowAsNames,!0);this.decimalRegex=e&&new RegExp("^(-?[0-9]+)"+e+"([0-9]+)$");this.rawColumns=[];if(this.columns.length){this.dataFound();var g=!0}this.hasURLOption(a)&&(clearTimeout(this.liveDataTimeout),
g=!1);g||(g=this.fetchLiveData());g||(g=!!this.parseCSV().length);g||(g=!!this.parseTable().length);g||(g=this.parseGoogleSpreadsheet());!g&&a.afterComplete&&a.afterComplete()},hasURLOption:function(a){return!(!a||!(a.rowsURL||a.csvURL||a.columnsURL))},getColumnDistribution:function(){var a=this.chartOptions,d=this.options,c=[],e=function(a){return(b.seriesTypes[a||"line"].prototype.pointArrayMap||[0]).length},g=a&&a.chart&&a.chart.type,f=[],x=[],h=0;d=d&&d.seriesMapping||a&&a.series&&a.series.map(function(){return{x:0}})||
[];var k;(a&&a.series||[]).forEach(function(a){f.push(e(a.type||g))});d.forEach(function(a){c.push(a.x||0)});0===c.length&&c.push(0);d.forEach(function(d){var c=new A,t=f[h]||e(g),q=(a&&a.series||[])[h]||{},v=b.seriesTypes[q.type||g||"line"].prototype.pointArrayMap,B=v||["y"];(u(d.x)||q.isCartesian||!v)&&c.addColumnReader(d.x,"x");n(d,function(a,d){"x"!==d&&c.addColumnReader(a,d)});for(k=0;k<t;k++)c.hasReader(B[k])||c.addColumnReader(void 0,B[k]);x.push(c);h++});d=b.seriesTypes[g||"line"].prototype.pointArrayMap;
"undefined"===typeof d&&(d=["y"]);this.valueCount={global:e(g),xColumns:c,individual:f,seriesBuilders:x,globalPointArrayMap:d}},dataFound:function(){this.options.switchRowsAndColumns&&(this.columns=this.rowsToColumns(this.columns));this.getColumnDistribution();this.parseTypes();!1!==this.parsed()&&this.complete()},parseCSV:function(a){function d(a,d,c,e){function g(d){h=a[d];l=a[d-1];q=a[d+1]}function f(a){t.length<w+1&&t.push([a]);t[w][t[w].length-1]!==a&&t[w].push(a)}function b(){k>x||x>n?(++x,
p=""):(!isNaN(parseFloat(p))&&isFinite(p)?(p=parseFloat(p),f("number")):isNaN(Date.parse(p))?f("string"):(p=p.replace(/\//g,"-"),f("date")),v.length<w+1&&v.push([]),c||(v[w][d]=p),p="",++w,++x)}var m=0,h="",l="",q="",p="",x=0,w=0;if(a.trim().length&&"#"!==a.trim()[0]){for(;m<a.length;m++){g(m);if("#"===h){b();return}if('"'===h)for(g(++m);m<a.length&&('"'!==h||'"'===l||'"'===q);){if('"'!==h||'"'===h&&'"'!==l)p+=h;g(++m)}else e&&e[h]?e[h](h,p)&&b():h===B?b():p+=h}b()}}function c(a){var d=0,c=0,e=!1;
a.some(function(a,e){var g=!1,f="";if(13<e)return!0;for(var b=0;b<a.length;b++){e=a[b];var h=a[b+1];var k=a[b-1];if("#"===e)break;if('"'===e)if(g){if('"'!==k&&'"'!==h){for(;" "===h&&b<a.length;)h=a[++b];"undefined"!==typeof q[h]&&q[h]++;g=!1}}else g=!0;else"undefined"!==typeof q[e]?(f=f.trim(),isNaN(Date.parse(f))?!isNaN(f)&&isFinite(f)||q[e]++:q[e]++,f=""):f+=e;","===e&&c++;"."===e&&d++}});e=q[";"]>q[","]?";":",";f.decimalPoint||(f.decimalPoint=d>c?".":",",g.decimalRegex=new RegExp("^(-?[0-9]+)"+
f.decimalPoint+"([0-9]+)$"));return e}function e(a,d){var c=[],e=0,b=!1,h=[],k=[],m;if(!d||d>a.length)d=a.length;for(;e<d;e++)if("undefined"!==typeof a[e]&&a[e]&&a[e].length){var l=a[e].trim().replace(/\//g," ").replace(/\-/g," ").replace(/\./g," ").split(" ");c=["","",""];for(m=0;m<l.length;m++)m<c.length&&(l[m]=parseInt(l[m],10),l[m]&&(k[m]=!k[m]||k[m]<l[m]?l[m]:k[m],"undefined"!==typeof h[m]?h[m]!==l[m]&&(h[m]=!1):h[m]=l[m],31<l[m]?c[m]=100>l[m]?"YY":"YYYY":12<l[m]&&31>=l[m]?(c[m]="dd",b=!0):c[m].length||
(c[m]="mm")))}if(b){for(m=0;m<h.length;m++)!1!==h[m]?12<k[m]&&"YY"!==c[m]&&"YYYY"!==c[m]&&(c[m]="YY"):12<k[m]&&"mm"===c[m]&&(c[m]="dd");3===c.length&&"dd"===c[1]&&"dd"===c[2]&&(c[2]="YY");a=c.join("/");return(f.dateFormats||g.dateFormats)[a]?a:(J("deduceDateFailed"),"YYYY/mm/dd")}return"YYYY/mm/dd"}var g=this,f=a||this.options,b=f.csv;a="undefined"!==typeof f.startRow&&f.startRow?f.startRow:0;var h=f.endRow||Number.MAX_VALUE,k="undefined"!==typeof f.startColumn&&f.startColumn?f.startColumn:0,n=f.endColumn||
Number.MAX_VALUE,l=0,t=[],q={",":0,";":0,"\t":0};var v=this.columns=[];b&&f.beforeParse&&(b=f.beforeParse.call(this,b));if(b){b=b.replace(/\r\n/g,"\n").replace(/\r/g,"\n").split(f.lineDelimiter||"\n");if(!a||0>a)a=0;if(!h||h>=b.length)h=b.length-1;if(f.itemDelimiter)var B=f.itemDelimiter;else B=null,B=c(b);var w=0;for(l=a;l<=h;l++)"#"===b[l][0]?w++:d(b[l],l-a-w);f.columnTypes&&0!==f.columnTypes.length||!t.length||!t[0].length||"date"!==t[0][1]||f.dateFormat||(f.dateFormat=e(v[0]));this.dataFound()}return v},
parseTable:function(){var a=this.options,d=a.table,c=this.columns,e=a.startRow||0,g=a.endRow||Number.MAX_VALUE,f=a.startColumn||0,b=a.endColumn||Number.MAX_VALUE;d&&("string"===typeof d&&(d=I.getElementById(d)),[].forEach.call(d.getElementsByTagName("tr"),function(a,d){d>=e&&d<=g&&[].forEach.call(a.children,function(a,g){var h=c[g-f],k=1;if(("TD"===a.tagName||"TH"===a.tagName)&&g>=f&&g<=b)for(c[g-f]||(c[g-f]=[]),c[g-f][d-e]=a.innerHTML;d-e>=k&&void 0===h[d-e-k];)h[d-e-k]=null,k++})}),this.dataFound());
return c},fetchLiveData:function(){function a(k){function n(h,n,q){function l(){f&&c.liveDataURL===h&&(d.liveDataTimeout=setTimeout(a,x))}if(!h||0!==h.indexOf("http"))return h&&e.error&&e.error("Invalid URL"),!1;k&&(clearTimeout(d.liveDataTimeout),c.liveDataURL=h);b.ajax({url:h,dataType:q||"json",success:function(a){c&&c.series&&n(a);l()},error:function(a,d){3>++g&&l();return e.error&&e.error(d,a)}});return!0}n(h.csvURL,function(a){c.update({data:{csv:a}})},"text")||n(h.rowsURL,function(a){c.update({data:{rows:a}})})||
n(h.columnsURL,function(a){c.update({data:{columns:a}})})}var d=this,c=this.chart,e=this.options,g=0,f=e.enablePolling,x=1E3*(e.dataRefreshRate||2),h=C(e);if(!this.hasURLOption(e))return!1;1E3>x&&(x=1E3);delete e.csvURL;delete e.rowsURL;delete e.columnsURL;a(!0);return this.hasURLOption(e)},parseGoogleSpreadsheet:function(){function a(d){var g=["https://spreadsheets.google.com/feeds/cells",e,f,"public/values?alt=json"].join("/");b.ajax({url:g,dataType:"json",success:function(e){d(e);c.enablePolling&&
setTimeout(function(){a(d)},1E3*(c.dataRefreshRate||2))},error:function(a,d){return c.error&&c.error(d,a)}})}var d=this,c=this.options,e=c.googleSpreadsheetKey,g=this.chart,f=c.googleSpreadsheetWorksheet||1,x=c.startRow||0,h=c.endRow||Number.MAX_VALUE,k=c.startColumn||0,n=c.endColumn||Number.MAX_VALUE,l=1E3*(c.dataRefreshRate||2);4E3>l&&(l=4E3);e&&(delete c.googleSpreadsheetKey,a(function(a){var c=[];a=a.feed.entry;var e=(a||[]).length,f=0,b;if(!a||0===a.length)return!1;for(b=0;b<e;b++){var l=a[b];
f=Math.max(f,l.gs$cell.col)}for(b=0;b<f;b++)b>=k&&b<=n&&(c[b-k]=[]);for(b=0;b<e;b++){l=a[b];f=l.gs$cell.row-1;var t=l.gs$cell.col-1;if(t>=k&&t<=n&&f>=x&&f<=h){var p=l.gs$cell||l.content;l=null;p.numericValue?l=0<=p.$t.indexOf("/")||0<=p.$t.indexOf("-")?p.$t:0<p.$t.indexOf("%")?100*parseFloat(p.numericValue):parseFloat(p.numericValue):p.$t&&p.$t.length&&(l=p.$t);c[t-k][f-x]=l}}c.forEach(function(a){for(b=0;b<a.length;b++)"undefined"===typeof a[b]&&(a[b]=null)});g&&g.series?g.update({data:{columns:c}}):
(d.columns=c,d.dataFound())}));return!1},trim:function(a,d){"string"===typeof a&&(a=a.replace(/^\s+|\s+$/g,""),d&&/^[0-9\s]+$/.test(a)&&(a=a.replace(/\s/g,"")),this.decimalRegex&&(a=a.replace(this.decimalRegex,"$1.$2")));return a},parseTypes:function(){for(var a=this.columns,d=a.length;d--;)this.parseColumn(a[d],d)},parseColumn:function(a,d){var c=this.rawColumns,e=this.columns,g=a.length,b=this.firstRowAsNames,n=-1!==this.valueCount.xColumns.indexOf(d),h,k=[],r=this.chartOptions,l,t=(this.options.columnTypes||
[])[d];r=n&&(r&&r.xAxis&&"category"===G(r.xAxis)[0].type||"string"===t);for(c[d]||(c[d]=[]);g--;){var q=k[g]||a[g];var v=this.trim(q);var u=this.trim(q,!0);var w=parseFloat(u);"undefined"===typeof c[d][g]&&(c[d][g]=v);r||0===g&&b?a[g]=""+v:+u===w?(a[g]=w,31536E6<w&&"float"!==t?a.isDatetime=!0:a.isNumeric=!0,"undefined"!==typeof a[g+1]&&(l=w>a[g+1])):(v&&v.length&&(h=this.parseDate(q)),n&&F(h)&&"float"!==t?(k[g]=q,a[g]=h,a.isDatetime=!0,"undefined"!==typeof a[g+1]&&(q=h>a[g+1],q!==l&&"undefined"!==
typeof l&&(this.alternativeFormat?(this.dateFormat=this.alternativeFormat,g=a.length,this.alternativeFormat=this.dateFormats[this.dateFormat].alternative):a.unsorted=!0),l=q)):(a[g]=""===v?null:v,0!==g&&(a.isDatetime||a.isNumeric)&&(a.mixed=!0)))}n&&a.mixed&&(e[d]=c[d]);if(n&&l&&this.options.sort)for(d=0;d<e.length;d++)e[d].reverse(),b&&e[d].unshift(e[d].pop())},dateFormats:{"YYYY/mm/dd":{regex:/^([0-9]{4})[\-\/\.]([0-9]{1,2})[\-\/\.]([0-9]{1,2})$/,parser:function(a){return Date.UTC(+a[1],a[2]-1,
+a[3])}},"dd/mm/YYYY":{regex:/^([0-9]{1,2})[\-\/\.]([0-9]{1,2})[\-\/\.]([0-9]{4})$/,parser:function(a){return Date.UTC(+a[3],a[2]-1,+a[1])},alternative:"mm/dd/YYYY"},"mm/dd/YYYY":{regex:/^([0-9]{1,2})[\-\/\.]([0-9]{1,2})[\-\/\.]([0-9]{4})$/,parser:function(a){return Date.UTC(+a[3],a[1]-1,+a[2])}},"dd/mm/YY":{regex:/^([0-9]{1,2})[\-\/\.]([0-9]{1,2})[\-\/\.]([0-9]{2})$/,parser:function(a){var d=+a[3];d=d>(new Date).getFullYear()-2E3?d+1900:d+2E3;return Date.UTC(d,a[2]-1,+a[1])},alternative:"mm/dd/YY"},
"mm/dd/YY":{regex:/^([0-9]{1,2})[\-\/\.]([0-9]{1,2})[\-\/\.]([0-9]{2})$/,parser:function(a){return Date.UTC(+a[3]+2E3,a[1]-1,+a[2])}}},parseDate:function(a){var d=this.options.parseDate,c,e=this.options.dateFormat||this.dateFormat,b;if(d)var f=d(a);else if("string"===typeof a){if(e)(d=this.dateFormats[e])||(d=this.dateFormats["YYYY/mm/dd"]),(b=a.match(d.regex))&&(f=d.parser(b));else for(c in this.dateFormats)if(d=this.dateFormats[c],b=a.match(d.regex)){this.dateFormat=c;this.alternativeFormat=d.alternative;
f=d.parser(b);break}b||(b=Date.parse(a),"object"===typeof b&&null!==b&&b.getTime?f=b.getTime()-6E4*b.getTimezoneOffset():F(b)&&(f=b-6E4*(new Date(b)).getTimezoneOffset()))}return f},rowsToColumns:function(a){var d,c;if(a){var e=[];var b=a.length;for(d=0;d<b;d++){var f=a[d].length;for(c=0;c<f;c++)e[c]||(e[c]=[]),e[c][d]=a[d][c]}}return e},getData:function(){if(this.columns)return this.rowsToColumns(this.columns).slice(1)},parsed:function(){if(this.options.parsed)return this.options.parsed.call(this,
this.columns)},getFreeIndexes:function(a,d){var c,e=[],b=[];for(c=0;c<a;c+=1)e.push(!0);for(a=0;a<d.length;a+=1){var f=d[a].getReferencedColumnIndexes();for(c=0;c<f.length;c+=1)e[f[c]]=!1}for(c=0;c<e.length;c+=1)e[c]&&b.push(c);return b},complete:function(){var a=this.columns,d,c=this.options,b,g,f=[];if(c.complete||c.afterComplete){if(this.firstRowAsNames)for(b=0;b<a.length;b++)a[b].name=a[b].shift();var n=[];var h=this.getFreeIndexes(a.length,this.valueCount.seriesBuilders);for(b=0;b<this.valueCount.seriesBuilders.length;b++){var k=
this.valueCount.seriesBuilders[b];k.populateColumns(h)&&f.push(k)}for(;0<h.length;){k=new A;k.addColumnReader(0,"x");b=h.indexOf(0);-1!==b&&h.splice(b,1);for(b=0;b<this.valueCount.global;b++)k.addColumnReader(void 0,this.valueCount.globalPointArrayMap[b]);k.populateColumns(h)&&f.push(k)}0<f.length&&0<f[0].readers.length&&(k=a[f[0].readers[0].columnIndex],"undefined"!==typeof k&&(k.isDatetime?d="datetime":k.isNumeric||(d="category")));if("category"===d)for(b=0;b<f.length;b++)for(k=f[b],h=0;h<k.readers.length;h++)"x"===
k.readers[h].configName&&(k.readers[h].configName="name");for(b=0;b<f.length;b++){k=f[b];h=[];for(g=0;g<a[0].length;g++)h[g]=k.read(a,g);n[b]={data:h};k.name&&(n[b].name=k.name);"category"===d&&(n[b].turboThreshold=0)}a={series:n};d&&(a.xAxis={type:d},"category"===d&&(a.xAxis.uniqueNames=!1));c.complete&&c.complete(a);c.afterComplete&&c.afterComplete(a)}},update:function(a,b){var d=this.chart;a&&(a.afterComplete=function(a){a&&(a.xAxis&&d.xAxis[0]&&a.xAxis.type===d.xAxis[0].options.type&&delete a.xAxis,
d.update(a,b,!0))},C(!0,d.options.data,a),this.init(d.options.data))}});b.Data=D;b.data=function(a,b,c){return new D(a,b,c)};y(E,"init",function(a){var b=this,c=a.args[0]||{},e=a.args[1];c&&c.data&&!b.hasDataDef&&(b.hasDataDef=!0,b.data=new D(z(c.data,{afterComplete:function(a){var d;if(Object.hasOwnProperty.call(c,"series"))if("object"===typeof c.series)for(d=Math.max(c.series.length,a&&a.series?a.series.length:0);d--;){var g=c.series[d]||{};c.series[d]=C(g,a&&a.series?a.series[d]:{})}else delete c.series;
c=C(a,c);b.init(c,e)}}),c,b),a.preventDefault())});var A=function(){this.readers=[];this.pointIsArray=!0};A.prototype.populateColumns=function(a){var b=!0;this.readers.forEach(function(b){"undefined"===typeof b.columnIndex&&(b.columnIndex=a.shift())});this.readers.forEach(function(a){"undefined"===typeof a.columnIndex&&(b=!1)});return b};A.prototype.read=function(a,d){var c=this.pointIsArray,e=c?[]:{};this.readers.forEach(function(f){var g=a[f.columnIndex][d];c?e.push(g):0<f.configName.indexOf(".")?
b.Point.prototype.setNestedProperty(e,g,f.configName):e[f.configName]=g});if("undefined"===typeof this.name&&2<=this.readers.length){var g=this.getReferencedColumnIndexes();2<=g.length&&(g.shift(),g.sort(function(a,b){return a-b}),this.name=a[g.shift()].name)}return e};A.prototype.addColumnReader=function(a,b){this.readers.push({columnIndex:a,configName:b});"x"!==b&&"y"!==b&&"undefined"!==typeof b&&(this.pointIsArray=!1)};A.prototype.getReferencedColumnIndexes=function(){var a,b=[];for(a=0;a<this.readers.length;a+=
1){var c=this.readers[a];"undefined"!==typeof c.columnIndex&&b.push(c.columnIndex)}return b};A.prototype.hasReader=function(a){var b;for(b=0;b<this.readers.length;b+=1){var c=this.readers[b];if(c.configName===a)return!0}}});u(b,"masters/modules/data.src.js",[],function(){})});
//# sourceMappingURL=data.js.map

/***/ }),

/***/ "./node_modules/jquery/dist/jquery.js":
/*!********************************************!*\
  !*** ./node_modules/jquery/dist/jquery.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * jQuery JavaScript Library v3.4.1
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2019-05-01T21:04Z
 */
( function( global, factory ) {

	"use strict";

	if (  true && typeof module.exports === "object" ) {

		// For CommonJS and CommonJS-like environments where a proper `window`
		// is present, execute the factory and get jQuery.
		// For environments that do not have a `window` with a `document`
		// (such as Node.js), expose a factory as module.exports.
		// This accentuates the need for the creation of a real `window`.
		// e.g. var jQuery = require("jquery")(window);
		// See ticket #14549 for more info.
		module.exports = global.document ?
			factory( global, true ) :
			function( w ) {
				if ( !w.document ) {
					throw new Error( "jQuery requires a window with a document" );
				}
				return factory( w );
			};
	} else {
		factory( global );
	}

// Pass this if window is not defined yet
} )( typeof window !== "undefined" ? window : this, function( window, noGlobal ) {

// Edge <= 12 - 13+, Firefox <=18 - 45+, IE 10 - 11, Safari 5.1 - 9+, iOS 6 - 9.1
// throw exceptions when non-strict code (e.g., ASP.NET 4.5) accesses strict mode
// arguments.callee.caller (trac-13335). But as of jQuery 3.0 (2016), strict mode should be common
// enough that all such attempts are guarded in a try block.
"use strict";

var arr = [];

var document = window.document;

var getProto = Object.getPrototypeOf;

var slice = arr.slice;

var concat = arr.concat;

var push = arr.push;

var indexOf = arr.indexOf;

var class2type = {};

var toString = class2type.toString;

var hasOwn = class2type.hasOwnProperty;

var fnToString = hasOwn.toString;

var ObjectFunctionString = fnToString.call( Object );

var support = {};

var isFunction = function isFunction( obj ) {

      // Support: Chrome <=57, Firefox <=52
      // In some browsers, typeof returns "function" for HTML <object> elements
      // (i.e., `typeof document.createElement( "object" ) === "function"`).
      // We don't want to classify *any* DOM node as a function.
      return typeof obj === "function" && typeof obj.nodeType !== "number";
  };


var isWindow = function isWindow( obj ) {
		return obj != null && obj === obj.window;
	};




	var preservedScriptAttributes = {
		type: true,
		src: true,
		nonce: true,
		noModule: true
	};

	function DOMEval( code, node, doc ) {
		doc = doc || document;

		var i, val,
			script = doc.createElement( "script" );

		script.text = code;
		if ( node ) {
			for ( i in preservedScriptAttributes ) {

				// Support: Firefox 64+, Edge 18+
				// Some browsers don't support the "nonce" property on scripts.
				// On the other hand, just using `getAttribute` is not enough as
				// the `nonce` attribute is reset to an empty string whenever it
				// becomes browsing-context connected.
				// See https://github.com/whatwg/html/issues/2369
				// See https://html.spec.whatwg.org/#nonce-attributes
				// The `node.getAttribute` check was added for the sake of
				// `jQuery.globalEval` so that it can fake a nonce-containing node
				// via an object.
				val = node[ i ] || node.getAttribute && node.getAttribute( i );
				if ( val ) {
					script.setAttribute( i, val );
				}
			}
		}
		doc.head.appendChild( script ).parentNode.removeChild( script );
	}


function toType( obj ) {
	if ( obj == null ) {
		return obj + "";
	}

	// Support: Android <=2.3 only (functionish RegExp)
	return typeof obj === "object" || typeof obj === "function" ?
		class2type[ toString.call( obj ) ] || "object" :
		typeof obj;
}
/* global Symbol */
// Defining this global in .eslintrc.json would create a danger of using the global
// unguarded in another place, it seems safer to define global only for this module



var
	version = "3.4.1",

	// Define a local copy of jQuery
	jQuery = function( selector, context ) {

		// The jQuery object is actually just the init constructor 'enhanced'
		// Need init if jQuery is called (just allow error to be thrown if not included)
		return new jQuery.fn.init( selector, context );
	},

	// Support: Android <=4.0 only
	// Make sure we trim BOM and NBSP
	rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;

jQuery.fn = jQuery.prototype = {

	// The current version of jQuery being used
	jquery: version,

	constructor: jQuery,

	// The default length of a jQuery object is 0
	length: 0,

	toArray: function() {
		return slice.call( this );
	},

	// Get the Nth element in the matched element set OR
	// Get the whole matched element set as a clean array
	get: function( num ) {

		// Return all the elements in a clean array
		if ( num == null ) {
			return slice.call( this );
		}

		// Return just the one element from the set
		return num < 0 ? this[ num + this.length ] : this[ num ];
	},

	// Take an array of elements and push it onto the stack
	// (returning the new matched element set)
	pushStack: function( elems ) {

		// Build a new jQuery matched element set
		var ret = jQuery.merge( this.constructor(), elems );

		// Add the old object onto the stack (as a reference)
		ret.prevObject = this;

		// Return the newly-formed element set
		return ret;
	},

	// Execute a callback for every element in the matched set.
	each: function( callback ) {
		return jQuery.each( this, callback );
	},

	map: function( callback ) {
		return this.pushStack( jQuery.map( this, function( elem, i ) {
			return callback.call( elem, i, elem );
		} ) );
	},

	slice: function() {
		return this.pushStack( slice.apply( this, arguments ) );
	},

	first: function() {
		return this.eq( 0 );
	},

	last: function() {
		return this.eq( -1 );
	},

	eq: function( i ) {
		var len = this.length,
			j = +i + ( i < 0 ? len : 0 );
		return this.pushStack( j >= 0 && j < len ? [ this[ j ] ] : [] );
	},

	end: function() {
		return this.prevObject || this.constructor();
	},

	// For internal use only.
	// Behaves like an Array's method, not like a jQuery method.
	push: push,
	sort: arr.sort,
	splice: arr.splice
};

jQuery.extend = jQuery.fn.extend = function() {
	var options, name, src, copy, copyIsArray, clone,
		target = arguments[ 0 ] || {},
		i = 1,
		length = arguments.length,
		deep = false;

	// Handle a deep copy situation
	if ( typeof target === "boolean" ) {
		deep = target;

		// Skip the boolean and the target
		target = arguments[ i ] || {};
		i++;
	}

	// Handle case when target is a string or something (possible in deep copy)
	if ( typeof target !== "object" && !isFunction( target ) ) {
		target = {};
	}

	// Extend jQuery itself if only one argument is passed
	if ( i === length ) {
		target = this;
		i--;
	}

	for ( ; i < length; i++ ) {

		// Only deal with non-null/undefined values
		if ( ( options = arguments[ i ] ) != null ) {

			// Extend the base object
			for ( name in options ) {
				copy = options[ name ];

				// Prevent Object.prototype pollution
				// Prevent never-ending loop
				if ( name === "__proto__" || target === copy ) {
					continue;
				}

				// Recurse if we're merging plain objects or arrays
				if ( deep && copy && ( jQuery.isPlainObject( copy ) ||
					( copyIsArray = Array.isArray( copy ) ) ) ) {
					src = target[ name ];

					// Ensure proper type for the source value
					if ( copyIsArray && !Array.isArray( src ) ) {
						clone = [];
					} else if ( !copyIsArray && !jQuery.isPlainObject( src ) ) {
						clone = {};
					} else {
						clone = src;
					}
					copyIsArray = false;

					// Never move original objects, clone them
					target[ name ] = jQuery.extend( deep, clone, copy );

				// Don't bring in undefined values
				} else if ( copy !== undefined ) {
					target[ name ] = copy;
				}
			}
		}
	}

	// Return the modified object
	return target;
};

jQuery.extend( {

	// Unique for each copy of jQuery on the page
	expando: "jQuery" + ( version + Math.random() ).replace( /\D/g, "" ),

	// Assume jQuery is ready without the ready module
	isReady: true,

	error: function( msg ) {
		throw new Error( msg );
	},

	noop: function() {},

	isPlainObject: function( obj ) {
		var proto, Ctor;

		// Detect obvious negatives
		// Use toString instead of jQuery.type to catch host objects
		if ( !obj || toString.call( obj ) !== "[object Object]" ) {
			return false;
		}

		proto = getProto( obj );

		// Objects with no prototype (e.g., `Object.create( null )`) are plain
		if ( !proto ) {
			return true;
		}

		// Objects with prototype are plain iff they were constructed by a global Object function
		Ctor = hasOwn.call( proto, "constructor" ) && proto.constructor;
		return typeof Ctor === "function" && fnToString.call( Ctor ) === ObjectFunctionString;
	},

	isEmptyObject: function( obj ) {
		var name;

		for ( name in obj ) {
			return false;
		}
		return true;
	},

	// Evaluates a script in a global context
	globalEval: function( code, options ) {
		DOMEval( code, { nonce: options && options.nonce } );
	},

	each: function( obj, callback ) {
		var length, i = 0;

		if ( isArrayLike( obj ) ) {
			length = obj.length;
			for ( ; i < length; i++ ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		} else {
			for ( i in obj ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		}

		return obj;
	},

	// Support: Android <=4.0 only
	trim: function( text ) {
		return text == null ?
			"" :
			( text + "" ).replace( rtrim, "" );
	},

	// results is for internal usage only
	makeArray: function( arr, results ) {
		var ret = results || [];

		if ( arr != null ) {
			if ( isArrayLike( Object( arr ) ) ) {
				jQuery.merge( ret,
					typeof arr === "string" ?
					[ arr ] : arr
				);
			} else {
				push.call( ret, arr );
			}
		}

		return ret;
	},

	inArray: function( elem, arr, i ) {
		return arr == null ? -1 : indexOf.call( arr, elem, i );
	},

	// Support: Android <=4.0 only, PhantomJS 1 only
	// push.apply(_, arraylike) throws on ancient WebKit
	merge: function( first, second ) {
		var len = +second.length,
			j = 0,
			i = first.length;

		for ( ; j < len; j++ ) {
			first[ i++ ] = second[ j ];
		}

		first.length = i;

		return first;
	},

	grep: function( elems, callback, invert ) {
		var callbackInverse,
			matches = [],
			i = 0,
			length = elems.length,
			callbackExpect = !invert;

		// Go through the array, only saving the items
		// that pass the validator function
		for ( ; i < length; i++ ) {
			callbackInverse = !callback( elems[ i ], i );
			if ( callbackInverse !== callbackExpect ) {
				matches.push( elems[ i ] );
			}
		}

		return matches;
	},

	// arg is for internal usage only
	map: function( elems, callback, arg ) {
		var length, value,
			i = 0,
			ret = [];

		// Go through the array, translating each of the items to their new values
		if ( isArrayLike( elems ) ) {
			length = elems.length;
			for ( ; i < length; i++ ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}

		// Go through every key on the object,
		} else {
			for ( i in elems ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}
		}

		// Flatten any nested arrays
		return concat.apply( [], ret );
	},

	// A global GUID counter for objects
	guid: 1,

	// jQuery.support is not used in Core but other projects attach their
	// properties to it so it needs to exist.
	support: support
} );

if ( typeof Symbol === "function" ) {
	jQuery.fn[ Symbol.iterator ] = arr[ Symbol.iterator ];
}

// Populate the class2type map
jQuery.each( "Boolean Number String Function Array Date RegExp Object Error Symbol".split( " " ),
function( i, name ) {
	class2type[ "[object " + name + "]" ] = name.toLowerCase();
} );

function isArrayLike( obj ) {

	// Support: real iOS 8.2 only (not reproducible in simulator)
	// `in` check used to prevent JIT error (gh-2145)
	// hasOwn isn't used here due to false negatives
	// regarding Nodelist length in IE
	var length = !!obj && "length" in obj && obj.length,
		type = toType( obj );

	if ( isFunction( obj ) || isWindow( obj ) ) {
		return false;
	}

	return type === "array" || length === 0 ||
		typeof length === "number" && length > 0 && ( length - 1 ) in obj;
}
var Sizzle =
/*!
 * Sizzle CSS Selector Engine v2.3.4
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://js.foundation/
 *
 * Date: 2019-04-08
 */
(function( window ) {

var i,
	support,
	Expr,
	getText,
	isXML,
	tokenize,
	compile,
	select,
	outermostContext,
	sortInput,
	hasDuplicate,

	// Local document vars
	setDocument,
	document,
	docElem,
	documentIsHTML,
	rbuggyQSA,
	rbuggyMatches,
	matches,
	contains,

	// Instance-specific data
	expando = "sizzle" + 1 * new Date(),
	preferredDoc = window.document,
	dirruns = 0,
	done = 0,
	classCache = createCache(),
	tokenCache = createCache(),
	compilerCache = createCache(),
	nonnativeSelectorCache = createCache(),
	sortOrder = function( a, b ) {
		if ( a === b ) {
			hasDuplicate = true;
		}
		return 0;
	},

	// Instance methods
	hasOwn = ({}).hasOwnProperty,
	arr = [],
	pop = arr.pop,
	push_native = arr.push,
	push = arr.push,
	slice = arr.slice,
	// Use a stripped-down indexOf as it's faster than native
	// https://jsperf.com/thor-indexof-vs-for/5
	indexOf = function( list, elem ) {
		var i = 0,
			len = list.length;
		for ( ; i < len; i++ ) {
			if ( list[i] === elem ) {
				return i;
			}
		}
		return -1;
	},

	booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",

	// Regular expressions

	// http://www.w3.org/TR/css3-selectors/#whitespace
	whitespace = "[\\x20\\t\\r\\n\\f]",

	// http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
	identifier = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",

	// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
	attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace +
		// Operator (capture 2)
		"*([*^$|!~]?=)" + whitespace +
		// "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
		"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace +
		"*\\]",

	pseudos = ":(" + identifier + ")(?:\\((" +
		// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
		// 1. quoted (capture 3; capture 4 or capture 5)
		"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +
		// 2. simple (capture 6)
		"((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +
		// 3. anything else (capture 2)
		".*" +
		")\\)|)",

	// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
	rwhitespace = new RegExp( whitespace + "+", "g" ),
	rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g" ),

	rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
	rcombinators = new RegExp( "^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*" ),
	rdescend = new RegExp( whitespace + "|>" ),

	rpseudo = new RegExp( pseudos ),
	ridentifier = new RegExp( "^" + identifier + "$" ),

	matchExpr = {
		"ID": new RegExp( "^#(" + identifier + ")" ),
		"CLASS": new RegExp( "^\\.(" + identifier + ")" ),
		"TAG": new RegExp( "^(" + identifier + "|[*])" ),
		"ATTR": new RegExp( "^" + attributes ),
		"PSEUDO": new RegExp( "^" + pseudos ),
		"CHILD": new RegExp( "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace +
			"*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace +
			"*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
		"bool": new RegExp( "^(?:" + booleans + ")$", "i" ),
		// For use in libraries implementing .is()
		// We use this for POS matching in `select`
		"needsContext": new RegExp( "^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
			whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
	},

	rhtml = /HTML$/i,
	rinputs = /^(?:input|select|textarea|button)$/i,
	rheader = /^h\d$/i,

	rnative = /^[^{]+\{\s*\[native \w/,

	// Easily-parseable/retrievable ID or TAG or CLASS selectors
	rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

	rsibling = /[+~]/,

	// CSS escapes
	// http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
	runescape = new RegExp( "\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig" ),
	funescape = function( _, escaped, escapedWhitespace ) {
		var high = "0x" + escaped - 0x10000;
		// NaN means non-codepoint
		// Support: Firefox<24
		// Workaround erroneous numeric interpretation of +"0x"
		return high !== high || escapedWhitespace ?
			escaped :
			high < 0 ?
				// BMP codepoint
				String.fromCharCode( high + 0x10000 ) :
				// Supplemental Plane codepoint (surrogate pair)
				String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
	},

	// CSS string/identifier serialization
	// https://drafts.csswg.org/cssom/#common-serializing-idioms
	rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
	fcssescape = function( ch, asCodePoint ) {
		if ( asCodePoint ) {

			// U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
			if ( ch === "\0" ) {
				return "\uFFFD";
			}

			// Control characters and (dependent upon position) numbers get escaped as code points
			return ch.slice( 0, -1 ) + "\\" + ch.charCodeAt( ch.length - 1 ).toString( 16 ) + " ";
		}

		// Other potentially-special ASCII characters get backslash-escaped
		return "\\" + ch;
	},

	// Used for iframes
	// See setDocument()
	// Removing the function wrapper causes a "Permission Denied"
	// error in IE
	unloadHandler = function() {
		setDocument();
	},

	inDisabledFieldset = addCombinator(
		function( elem ) {
			return elem.disabled === true && elem.nodeName.toLowerCase() === "fieldset";
		},
		{ dir: "parentNode", next: "legend" }
	);

// Optimize for push.apply( _, NodeList )
try {
	push.apply(
		(arr = slice.call( preferredDoc.childNodes )),
		preferredDoc.childNodes
	);
	// Support: Android<4.0
	// Detect silently failing push.apply
	arr[ preferredDoc.childNodes.length ].nodeType;
} catch ( e ) {
	push = { apply: arr.length ?

		// Leverage slice if possible
		function( target, els ) {
			push_native.apply( target, slice.call(els) );
		} :

		// Support: IE<9
		// Otherwise append directly
		function( target, els ) {
			var j = target.length,
				i = 0;
			// Can't trust NodeList.length
			while ( (target[j++] = els[i++]) ) {}
			target.length = j - 1;
		}
	};
}

function Sizzle( selector, context, results, seed ) {
	var m, i, elem, nid, match, groups, newSelector,
		newContext = context && context.ownerDocument,

		// nodeType defaults to 9, since context defaults to document
		nodeType = context ? context.nodeType : 9;

	results = results || [];

	// Return early from calls with invalid selector or context
	if ( typeof selector !== "string" || !selector ||
		nodeType !== 1 && nodeType !== 9 && nodeType !== 11 ) {

		return results;
	}

	// Try to shortcut find operations (as opposed to filters) in HTML documents
	if ( !seed ) {

		if ( ( context ? context.ownerDocument || context : preferredDoc ) !== document ) {
			setDocument( context );
		}
		context = context || document;

		if ( documentIsHTML ) {

			// If the selector is sufficiently simple, try using a "get*By*" DOM method
			// (excepting DocumentFragment context, where the methods don't exist)
			if ( nodeType !== 11 && (match = rquickExpr.exec( selector )) ) {

				// ID selector
				if ( (m = match[1]) ) {

					// Document context
					if ( nodeType === 9 ) {
						if ( (elem = context.getElementById( m )) ) {

							// Support: IE, Opera, Webkit
							// TODO: identify versions
							// getElementById can match elements by name instead of ID
							if ( elem.id === m ) {
								results.push( elem );
								return results;
							}
						} else {
							return results;
						}

					// Element context
					} else {

						// Support: IE, Opera, Webkit
						// TODO: identify versions
						// getElementById can match elements by name instead of ID
						if ( newContext && (elem = newContext.getElementById( m )) &&
							contains( context, elem ) &&
							elem.id === m ) {

							results.push( elem );
							return results;
						}
					}

				// Type selector
				} else if ( match[2] ) {
					push.apply( results, context.getElementsByTagName( selector ) );
					return results;

				// Class selector
				} else if ( (m = match[3]) && support.getElementsByClassName &&
					context.getElementsByClassName ) {

					push.apply( results, context.getElementsByClassName( m ) );
					return results;
				}
			}

			// Take advantage of querySelectorAll
			if ( support.qsa &&
				!nonnativeSelectorCache[ selector + " " ] &&
				(!rbuggyQSA || !rbuggyQSA.test( selector )) &&

				// Support: IE 8 only
				// Exclude object elements
				(nodeType !== 1 || context.nodeName.toLowerCase() !== "object") ) {

				newSelector = selector;
				newContext = context;

				// qSA considers elements outside a scoping root when evaluating child or
				// descendant combinators, which is not what we want.
				// In such cases, we work around the behavior by prefixing every selector in the
				// list with an ID selector referencing the scope context.
				// Thanks to Andrew Dupont for this technique.
				if ( nodeType === 1 && rdescend.test( selector ) ) {

					// Capture the context ID, setting it first if necessary
					if ( (nid = context.getAttribute( "id" )) ) {
						nid = nid.replace( rcssescape, fcssescape );
					} else {
						context.setAttribute( "id", (nid = expando) );
					}

					// Prefix every selector in the list
					groups = tokenize( selector );
					i = groups.length;
					while ( i-- ) {
						groups[i] = "#" + nid + " " + toSelector( groups[i] );
					}
					newSelector = groups.join( "," );

					// Expand context for sibling selectors
					newContext = rsibling.test( selector ) && testContext( context.parentNode ) ||
						context;
				}

				try {
					push.apply( results,
						newContext.querySelectorAll( newSelector )
					);
					return results;
				} catch ( qsaError ) {
					nonnativeSelectorCache( selector, true );
				} finally {
					if ( nid === expando ) {
						context.removeAttribute( "id" );
					}
				}
			}
		}
	}

	// All others
	return select( selector.replace( rtrim, "$1" ), context, results, seed );
}

/**
 * Create key-value caches of limited size
 * @returns {function(string, object)} Returns the Object data after storing it on itself with
 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
 *	deleting the oldest entry
 */
function createCache() {
	var keys = [];

	function cache( key, value ) {
		// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
		if ( keys.push( key + " " ) > Expr.cacheLength ) {
			// Only keep the most recent entries
			delete cache[ keys.shift() ];
		}
		return (cache[ key + " " ] = value);
	}
	return cache;
}

/**
 * Mark a function for special use by Sizzle
 * @param {Function} fn The function to mark
 */
function markFunction( fn ) {
	fn[ expando ] = true;
	return fn;
}

/**
 * Support testing using an element
 * @param {Function} fn Passed the created element and returns a boolean result
 */
function assert( fn ) {
	var el = document.createElement("fieldset");

	try {
		return !!fn( el );
	} catch (e) {
		return false;
	} finally {
		// Remove from its parent by default
		if ( el.parentNode ) {
			el.parentNode.removeChild( el );
		}
		// release memory in IE
		el = null;
	}
}

/**
 * Adds the same handler for all of the specified attrs
 * @param {String} attrs Pipe-separated list of attributes
 * @param {Function} handler The method that will be applied
 */
function addHandle( attrs, handler ) {
	var arr = attrs.split("|"),
		i = arr.length;

	while ( i-- ) {
		Expr.attrHandle[ arr[i] ] = handler;
	}
}

/**
 * Checks document order of two siblings
 * @param {Element} a
 * @param {Element} b
 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
 */
function siblingCheck( a, b ) {
	var cur = b && a,
		diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
			a.sourceIndex - b.sourceIndex;

	// Use IE sourceIndex if available on both nodes
	if ( diff ) {
		return diff;
	}

	// Check if b follows a
	if ( cur ) {
		while ( (cur = cur.nextSibling) ) {
			if ( cur === b ) {
				return -1;
			}
		}
	}

	return a ? 1 : -1;
}

/**
 * Returns a function to use in pseudos for input types
 * @param {String} type
 */
function createInputPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return name === "input" && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for buttons
 * @param {String} type
 */
function createButtonPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return (name === "input" || name === "button") && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for :enabled/:disabled
 * @param {Boolean} disabled true for :disabled; false for :enabled
 */
function createDisabledPseudo( disabled ) {

	// Known :disabled false positives: fieldset[disabled] > legend:nth-of-type(n+2) :can-disable
	return function( elem ) {

		// Only certain elements can match :enabled or :disabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled
		if ( "form" in elem ) {

			// Check for inherited disabledness on relevant non-disabled elements:
			// * listed form-associated elements in a disabled fieldset
			//   https://html.spec.whatwg.org/multipage/forms.html#category-listed
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-fe-disabled
			// * option elements in a disabled optgroup
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-option-disabled
			// All such elements have a "form" property.
			if ( elem.parentNode && elem.disabled === false ) {

				// Option elements defer to a parent optgroup if present
				if ( "label" in elem ) {
					if ( "label" in elem.parentNode ) {
						return elem.parentNode.disabled === disabled;
					} else {
						return elem.disabled === disabled;
					}
				}

				// Support: IE 6 - 11
				// Use the isDisabled shortcut property to check for disabled fieldset ancestors
				return elem.isDisabled === disabled ||

					// Where there is no isDisabled, check manually
					/* jshint -W018 */
					elem.isDisabled !== !disabled &&
						inDisabledFieldset( elem ) === disabled;
			}

			return elem.disabled === disabled;

		// Try to winnow out elements that can't be disabled before trusting the disabled property.
		// Some victims get caught in our net (label, legend, menu, track), but it shouldn't
		// even exist on them, let alone have a boolean value.
		} else if ( "label" in elem ) {
			return elem.disabled === disabled;
		}

		// Remaining elements are neither :enabled nor :disabled
		return false;
	};
}

/**
 * Returns a function to use in pseudos for positionals
 * @param {Function} fn
 */
function createPositionalPseudo( fn ) {
	return markFunction(function( argument ) {
		argument = +argument;
		return markFunction(function( seed, matches ) {
			var j,
				matchIndexes = fn( [], seed.length, argument ),
				i = matchIndexes.length;

			// Match elements found at the specified indexes
			while ( i-- ) {
				if ( seed[ (j = matchIndexes[i]) ] ) {
					seed[j] = !(matches[j] = seed[j]);
				}
			}
		});
	});
}

/**
 * Checks a node for validity as a Sizzle context
 * @param {Element|Object=} context
 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
 */
function testContext( context ) {
	return context && typeof context.getElementsByTagName !== "undefined" && context;
}

// Expose support vars for convenience
support = Sizzle.support = {};

/**
 * Detects XML nodes
 * @param {Element|Object} elem An element or a document
 * @returns {Boolean} True iff elem is a non-HTML XML node
 */
isXML = Sizzle.isXML = function( elem ) {
	var namespace = elem.namespaceURI,
		docElem = (elem.ownerDocument || elem).documentElement;

	// Support: IE <=8
	// Assume HTML when documentElement doesn't yet exist, such as inside loading iframes
	// https://bugs.jquery.com/ticket/4833
	return !rhtml.test( namespace || docElem && docElem.nodeName || "HTML" );
};

/**
 * Sets document-related variables once based on the current document
 * @param {Element|Object} [doc] An element or document object to use to set the document
 * @returns {Object} Returns the current document
 */
setDocument = Sizzle.setDocument = function( node ) {
	var hasCompare, subWindow,
		doc = node ? node.ownerDocument || node : preferredDoc;

	// Return early if doc is invalid or already selected
	if ( doc === document || doc.nodeType !== 9 || !doc.documentElement ) {
		return document;
	}

	// Update global variables
	document = doc;
	docElem = document.documentElement;
	documentIsHTML = !isXML( document );

	// Support: IE 9-11, Edge
	// Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
	if ( preferredDoc !== document &&
		(subWindow = document.defaultView) && subWindow.top !== subWindow ) {

		// Support: IE 11, Edge
		if ( subWindow.addEventListener ) {
			subWindow.addEventListener( "unload", unloadHandler, false );

		// Support: IE 9 - 10 only
		} else if ( subWindow.attachEvent ) {
			subWindow.attachEvent( "onunload", unloadHandler );
		}
	}

	/* Attributes
	---------------------------------------------------------------------- */

	// Support: IE<8
	// Verify that getAttribute really returns attributes and not properties
	// (excepting IE8 booleans)
	support.attributes = assert(function( el ) {
		el.className = "i";
		return !el.getAttribute("className");
	});

	/* getElement(s)By*
	---------------------------------------------------------------------- */

	// Check if getElementsByTagName("*") returns only elements
	support.getElementsByTagName = assert(function( el ) {
		el.appendChild( document.createComment("") );
		return !el.getElementsByTagName("*").length;
	});

	// Support: IE<9
	support.getElementsByClassName = rnative.test( document.getElementsByClassName );

	// Support: IE<10
	// Check if getElementById returns elements by name
	// The broken getElementById methods don't pick up programmatically-set names,
	// so use a roundabout getElementsByName test
	support.getById = assert(function( el ) {
		docElem.appendChild( el ).id = expando;
		return !document.getElementsByName || !document.getElementsByName( expando ).length;
	});

	// ID filter and find
	if ( support.getById ) {
		Expr.filter["ID"] = function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				return elem.getAttribute("id") === attrId;
			};
		};
		Expr.find["ID"] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var elem = context.getElementById( id );
				return elem ? [ elem ] : [];
			}
		};
	} else {
		Expr.filter["ID"] =  function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				var node = typeof elem.getAttributeNode !== "undefined" &&
					elem.getAttributeNode("id");
				return node && node.value === attrId;
			};
		};

		// Support: IE 6 - 7 only
		// getElementById is not reliable as a find shortcut
		Expr.find["ID"] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var node, i, elems,
					elem = context.getElementById( id );

				if ( elem ) {

					// Verify the id attribute
					node = elem.getAttributeNode("id");
					if ( node && node.value === id ) {
						return [ elem ];
					}

					// Fall back on getElementsByName
					elems = context.getElementsByName( id );
					i = 0;
					while ( (elem = elems[i++]) ) {
						node = elem.getAttributeNode("id");
						if ( node && node.value === id ) {
							return [ elem ];
						}
					}
				}

				return [];
			}
		};
	}

	// Tag
	Expr.find["TAG"] = support.getElementsByTagName ?
		function( tag, context ) {
			if ( typeof context.getElementsByTagName !== "undefined" ) {
				return context.getElementsByTagName( tag );

			// DocumentFragment nodes don't have gEBTN
			} else if ( support.qsa ) {
				return context.querySelectorAll( tag );
			}
		} :

		function( tag, context ) {
			var elem,
				tmp = [],
				i = 0,
				// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
				results = context.getElementsByTagName( tag );

			// Filter out possible comments
			if ( tag === "*" ) {
				while ( (elem = results[i++]) ) {
					if ( elem.nodeType === 1 ) {
						tmp.push( elem );
					}
				}

				return tmp;
			}
			return results;
		};

	// Class
	Expr.find["CLASS"] = support.getElementsByClassName && function( className, context ) {
		if ( typeof context.getElementsByClassName !== "undefined" && documentIsHTML ) {
			return context.getElementsByClassName( className );
		}
	};

	/* QSA/matchesSelector
	---------------------------------------------------------------------- */

	// QSA and matchesSelector support

	// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
	rbuggyMatches = [];

	// qSa(:focus) reports false when true (Chrome 21)
	// We allow this because of a bug in IE8/9 that throws an error
	// whenever `document.activeElement` is accessed on an iframe
	// So, we allow :focus to pass through QSA all the time to avoid the IE error
	// See https://bugs.jquery.com/ticket/13378
	rbuggyQSA = [];

	if ( (support.qsa = rnative.test( document.querySelectorAll )) ) {
		// Build QSA regex
		// Regex strategy adopted from Diego Perini
		assert(function( el ) {
			// Select is set to empty string on purpose
			// This is to test IE's treatment of not explicitly
			// setting a boolean content attribute,
			// since its presence should be enough
			// https://bugs.jquery.com/ticket/12359
			docElem.appendChild( el ).innerHTML = "<a id='" + expando + "'></a>" +
				"<select id='" + expando + "-\r\\' msallowcapture=''>" +
				"<option selected=''></option></select>";

			// Support: IE8, Opera 11-12.16
			// Nothing should be selected when empty strings follow ^= or $= or *=
			// The test attribute must be unknown in Opera but "safe" for WinRT
			// https://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
			if ( el.querySelectorAll("[msallowcapture^='']").length ) {
				rbuggyQSA.push( "[*^$]=" + whitespace + "*(?:''|\"\")" );
			}

			// Support: IE8
			// Boolean attributes and "value" are not treated correctly
			if ( !el.querySelectorAll("[selected]").length ) {
				rbuggyQSA.push( "\\[" + whitespace + "*(?:value|" + booleans + ")" );
			}

			// Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
			if ( !el.querySelectorAll( "[id~=" + expando + "-]" ).length ) {
				rbuggyQSA.push("~=");
			}

			// Webkit/Opera - :checked should return selected option elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			// IE8 throws error here and will not see later tests
			if ( !el.querySelectorAll(":checked").length ) {
				rbuggyQSA.push(":checked");
			}

			// Support: Safari 8+, iOS 8+
			// https://bugs.webkit.org/show_bug.cgi?id=136851
			// In-page `selector#id sibling-combinator selector` fails
			if ( !el.querySelectorAll( "a#" + expando + "+*" ).length ) {
				rbuggyQSA.push(".#.+[+~]");
			}
		});

		assert(function( el ) {
			el.innerHTML = "<a href='' disabled='disabled'></a>" +
				"<select disabled='disabled'><option/></select>";

			// Support: Windows 8 Native Apps
			// The type and name attributes are restricted during .innerHTML assignment
			var input = document.createElement("input");
			input.setAttribute( "type", "hidden" );
			el.appendChild( input ).setAttribute( "name", "D" );

			// Support: IE8
			// Enforce case-sensitivity of name attribute
			if ( el.querySelectorAll("[name=d]").length ) {
				rbuggyQSA.push( "name" + whitespace + "*[*^$|!~]?=" );
			}

			// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
			// IE8 throws error here and will not see later tests
			if ( el.querySelectorAll(":enabled").length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Support: IE9-11+
			// IE's :disabled selector does not pick up the children of disabled fieldsets
			docElem.appendChild( el ).disabled = true;
			if ( el.querySelectorAll(":disabled").length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Opera 10-11 does not throw on post-comma invalid pseudos
			el.querySelectorAll("*,:x");
			rbuggyQSA.push(",.*:");
		});
	}

	if ( (support.matchesSelector = rnative.test( (matches = docElem.matches ||
		docElem.webkitMatchesSelector ||
		docElem.mozMatchesSelector ||
		docElem.oMatchesSelector ||
		docElem.msMatchesSelector) )) ) {

		assert(function( el ) {
			// Check to see if it's possible to do matchesSelector
			// on a disconnected node (IE 9)
			support.disconnectedMatch = matches.call( el, "*" );

			// This should fail with an exception
			// Gecko does not error, returns false instead
			matches.call( el, "[s!='']:x" );
			rbuggyMatches.push( "!=", pseudos );
		});
	}

	rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join("|") );
	rbuggyMatches = rbuggyMatches.length && new RegExp( rbuggyMatches.join("|") );

	/* Contains
	---------------------------------------------------------------------- */
	hasCompare = rnative.test( docElem.compareDocumentPosition );

	// Element contains another
	// Purposefully self-exclusive
	// As in, an element does not contain itself
	contains = hasCompare || rnative.test( docElem.contains ) ?
		function( a, b ) {
			var adown = a.nodeType === 9 ? a.documentElement : a,
				bup = b && b.parentNode;
			return a === bup || !!( bup && bup.nodeType === 1 && (
				adown.contains ?
					adown.contains( bup ) :
					a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
			));
		} :
		function( a, b ) {
			if ( b ) {
				while ( (b = b.parentNode) ) {
					if ( b === a ) {
						return true;
					}
				}
			}
			return false;
		};

	/* Sorting
	---------------------------------------------------------------------- */

	// Document order sorting
	sortOrder = hasCompare ?
	function( a, b ) {

		// Flag for duplicate removal
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		// Sort on method existence if only one input has compareDocumentPosition
		var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
		if ( compare ) {
			return compare;
		}

		// Calculate position if both inputs belong to the same document
		compare = ( a.ownerDocument || a ) === ( b.ownerDocument || b ) ?
			a.compareDocumentPosition( b ) :

			// Otherwise we know they are disconnected
			1;

		// Disconnected nodes
		if ( compare & 1 ||
			(!support.sortDetached && b.compareDocumentPosition( a ) === compare) ) {

			// Choose the first element that is related to our preferred document
			if ( a === document || a.ownerDocument === preferredDoc && contains(preferredDoc, a) ) {
				return -1;
			}
			if ( b === document || b.ownerDocument === preferredDoc && contains(preferredDoc, b) ) {
				return 1;
			}

			// Maintain original order
			return sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;
		}

		return compare & 4 ? -1 : 1;
	} :
	function( a, b ) {
		// Exit early if the nodes are identical
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		var cur,
			i = 0,
			aup = a.parentNode,
			bup = b.parentNode,
			ap = [ a ],
			bp = [ b ];

		// Parentless nodes are either documents or disconnected
		if ( !aup || !bup ) {
			return a === document ? -1 :
				b === document ? 1 :
				aup ? -1 :
				bup ? 1 :
				sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;

		// If the nodes are siblings, we can do a quick check
		} else if ( aup === bup ) {
			return siblingCheck( a, b );
		}

		// Otherwise we need full lists of their ancestors for comparison
		cur = a;
		while ( (cur = cur.parentNode) ) {
			ap.unshift( cur );
		}
		cur = b;
		while ( (cur = cur.parentNode) ) {
			bp.unshift( cur );
		}

		// Walk down the tree looking for a discrepancy
		while ( ap[i] === bp[i] ) {
			i++;
		}

		return i ?
			// Do a sibling check if the nodes have a common ancestor
			siblingCheck( ap[i], bp[i] ) :

			// Otherwise nodes in our document sort first
			ap[i] === preferredDoc ? -1 :
			bp[i] === preferredDoc ? 1 :
			0;
	};

	return document;
};

Sizzle.matches = function( expr, elements ) {
	return Sizzle( expr, null, null, elements );
};

Sizzle.matchesSelector = function( elem, expr ) {
	// Set document vars if needed
	if ( ( elem.ownerDocument || elem ) !== document ) {
		setDocument( elem );
	}

	if ( support.matchesSelector && documentIsHTML &&
		!nonnativeSelectorCache[ expr + " " ] &&
		( !rbuggyMatches || !rbuggyMatches.test( expr ) ) &&
		( !rbuggyQSA     || !rbuggyQSA.test( expr ) ) ) {

		try {
			var ret = matches.call( elem, expr );

			// IE 9's matchesSelector returns false on disconnected nodes
			if ( ret || support.disconnectedMatch ||
					// As well, disconnected nodes are said to be in a document
					// fragment in IE 9
					elem.document && elem.document.nodeType !== 11 ) {
				return ret;
			}
		} catch (e) {
			nonnativeSelectorCache( expr, true );
		}
	}

	return Sizzle( expr, document, null, [ elem ] ).length > 0;
};

Sizzle.contains = function( context, elem ) {
	// Set document vars if needed
	if ( ( context.ownerDocument || context ) !== document ) {
		setDocument( context );
	}
	return contains( context, elem );
};

Sizzle.attr = function( elem, name ) {
	// Set document vars if needed
	if ( ( elem.ownerDocument || elem ) !== document ) {
		setDocument( elem );
	}

	var fn = Expr.attrHandle[ name.toLowerCase() ],
		// Don't get fooled by Object.prototype properties (jQuery #13807)
		val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?
			fn( elem, name, !documentIsHTML ) :
			undefined;

	return val !== undefined ?
		val :
		support.attributes || !documentIsHTML ?
			elem.getAttribute( name ) :
			(val = elem.getAttributeNode(name)) && val.specified ?
				val.value :
				null;
};

Sizzle.escape = function( sel ) {
	return (sel + "").replace( rcssescape, fcssescape );
};

Sizzle.error = function( msg ) {
	throw new Error( "Syntax error, unrecognized expression: " + msg );
};

/**
 * Document sorting and removing duplicates
 * @param {ArrayLike} results
 */
Sizzle.uniqueSort = function( results ) {
	var elem,
		duplicates = [],
		j = 0,
		i = 0;

	// Unless we *know* we can detect duplicates, assume their presence
	hasDuplicate = !support.detectDuplicates;
	sortInput = !support.sortStable && results.slice( 0 );
	results.sort( sortOrder );

	if ( hasDuplicate ) {
		while ( (elem = results[i++]) ) {
			if ( elem === results[ i ] ) {
				j = duplicates.push( i );
			}
		}
		while ( j-- ) {
			results.splice( duplicates[ j ], 1 );
		}
	}

	// Clear input after sorting to release objects
	// See https://github.com/jquery/sizzle/pull/225
	sortInput = null;

	return results;
};

/**
 * Utility function for retrieving the text value of an array of DOM nodes
 * @param {Array|Element} elem
 */
getText = Sizzle.getText = function( elem ) {
	var node,
		ret = "",
		i = 0,
		nodeType = elem.nodeType;

	if ( !nodeType ) {
		// If no nodeType, this is expected to be an array
		while ( (node = elem[i++]) ) {
			// Do not traverse comment nodes
			ret += getText( node );
		}
	} else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {
		// Use textContent for elements
		// innerText usage removed for consistency of new lines (jQuery #11153)
		if ( typeof elem.textContent === "string" ) {
			return elem.textContent;
		} else {
			// Traverse its children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				ret += getText( elem );
			}
		}
	} else if ( nodeType === 3 || nodeType === 4 ) {
		return elem.nodeValue;
	}
	// Do not include comment or processing instruction nodes

	return ret;
};

Expr = Sizzle.selectors = {

	// Can be adjusted by the user
	cacheLength: 50,

	createPseudo: markFunction,

	match: matchExpr,

	attrHandle: {},

	find: {},

	relative: {
		">": { dir: "parentNode", first: true },
		" ": { dir: "parentNode" },
		"+": { dir: "previousSibling", first: true },
		"~": { dir: "previousSibling" }
	},

	preFilter: {
		"ATTR": function( match ) {
			match[1] = match[1].replace( runescape, funescape );

			// Move the given value to match[3] whether quoted or unquoted
			match[3] = ( match[3] || match[4] || match[5] || "" ).replace( runescape, funescape );

			if ( match[2] === "~=" ) {
				match[3] = " " + match[3] + " ";
			}

			return match.slice( 0, 4 );
		},

		"CHILD": function( match ) {
			/* matches from matchExpr["CHILD"]
				1 type (only|nth|...)
				2 what (child|of-type)
				3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
				4 xn-component of xn+y argument ([+-]?\d*n|)
				5 sign of xn-component
				6 x of xn-component
				7 sign of y-component
				8 y of y-component
			*/
			match[1] = match[1].toLowerCase();

			if ( match[1].slice( 0, 3 ) === "nth" ) {
				// nth-* requires argument
				if ( !match[3] ) {
					Sizzle.error( match[0] );
				}

				// numeric x and y parameters for Expr.filter.CHILD
				// remember that false/true cast respectively to 0/1
				match[4] = +( match[4] ? match[5] + (match[6] || 1) : 2 * ( match[3] === "even" || match[3] === "odd" ) );
				match[5] = +( ( match[7] + match[8] ) || match[3] === "odd" );

			// other types prohibit arguments
			} else if ( match[3] ) {
				Sizzle.error( match[0] );
			}

			return match;
		},

		"PSEUDO": function( match ) {
			var excess,
				unquoted = !match[6] && match[2];

			if ( matchExpr["CHILD"].test( match[0] ) ) {
				return null;
			}

			// Accept quoted arguments as-is
			if ( match[3] ) {
				match[2] = match[4] || match[5] || "";

			// Strip excess characters from unquoted arguments
			} else if ( unquoted && rpseudo.test( unquoted ) &&
				// Get excess from tokenize (recursively)
				(excess = tokenize( unquoted, true )) &&
				// advance to the next closing parenthesis
				(excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length) ) {

				// excess is a negative index
				match[0] = match[0].slice( 0, excess );
				match[2] = unquoted.slice( 0, excess );
			}

			// Return only captures needed by the pseudo filter method (type and argument)
			return match.slice( 0, 3 );
		}
	},

	filter: {

		"TAG": function( nodeNameSelector ) {
			var nodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
			return nodeNameSelector === "*" ?
				function() { return true; } :
				function( elem ) {
					return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
				};
		},

		"CLASS": function( className ) {
			var pattern = classCache[ className + " " ];

			return pattern ||
				(pattern = new RegExp( "(^|" + whitespace + ")" + className + "(" + whitespace + "|$)" )) &&
				classCache( className, function( elem ) {
					return pattern.test( typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "" );
				});
		},

		"ATTR": function( name, operator, check ) {
			return function( elem ) {
				var result = Sizzle.attr( elem, name );

				if ( result == null ) {
					return operator === "!=";
				}
				if ( !operator ) {
					return true;
				}

				result += "";

				return operator === "=" ? result === check :
					operator === "!=" ? result !== check :
					operator === "^=" ? check && result.indexOf( check ) === 0 :
					operator === "*=" ? check && result.indexOf( check ) > -1 :
					operator === "$=" ? check && result.slice( -check.length ) === check :
					operator === "~=" ? ( " " + result.replace( rwhitespace, " " ) + " " ).indexOf( check ) > -1 :
					operator === "|=" ? result === check || result.slice( 0, check.length + 1 ) === check + "-" :
					false;
			};
		},

		"CHILD": function( type, what, argument, first, last ) {
			var simple = type.slice( 0, 3 ) !== "nth",
				forward = type.slice( -4 ) !== "last",
				ofType = what === "of-type";

			return first === 1 && last === 0 ?

				// Shortcut for :nth-*(n)
				function( elem ) {
					return !!elem.parentNode;
				} :

				function( elem, context, xml ) {
					var cache, uniqueCache, outerCache, node, nodeIndex, start,
						dir = simple !== forward ? "nextSibling" : "previousSibling",
						parent = elem.parentNode,
						name = ofType && elem.nodeName.toLowerCase(),
						useCache = !xml && !ofType,
						diff = false;

					if ( parent ) {

						// :(first|last|only)-(child|of-type)
						if ( simple ) {
							while ( dir ) {
								node = elem;
								while ( (node = node[ dir ]) ) {
									if ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) {

										return false;
									}
								}
								// Reverse direction for :only-* (if we haven't yet done so)
								start = dir = type === "only" && !start && "nextSibling";
							}
							return true;
						}

						start = [ forward ? parent.firstChild : parent.lastChild ];

						// non-xml :nth-child(...) stores cache data on `parent`
						if ( forward && useCache ) {

							// Seek `elem` from a previously-cached index

							// ...in a gzip-friendly way
							node = parent;
							outerCache = node[ expando ] || (node[ expando ] = {});

							// Support: IE <9 only
							// Defend against cloned attroperties (jQuery gh-1709)
							uniqueCache = outerCache[ node.uniqueID ] ||
								(outerCache[ node.uniqueID ] = {});

							cache = uniqueCache[ type ] || [];
							nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
							diff = nodeIndex && cache[ 2 ];
							node = nodeIndex && parent.childNodes[ nodeIndex ];

							while ( (node = ++nodeIndex && node && node[ dir ] ||

								// Fallback to seeking `elem` from the start
								(diff = nodeIndex = 0) || start.pop()) ) {

								// When found, cache indexes on `parent` and break
								if ( node.nodeType === 1 && ++diff && node === elem ) {
									uniqueCache[ type ] = [ dirruns, nodeIndex, diff ];
									break;
								}
							}

						} else {
							// Use previously-cached element index if available
							if ( useCache ) {
								// ...in a gzip-friendly way
								node = elem;
								outerCache = node[ expando ] || (node[ expando ] = {});

								// Support: IE <9 only
								// Defend against cloned attroperties (jQuery gh-1709)
								uniqueCache = outerCache[ node.uniqueID ] ||
									(outerCache[ node.uniqueID ] = {});

								cache = uniqueCache[ type ] || [];
								nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
								diff = nodeIndex;
							}

							// xml :nth-child(...)
							// or :nth-last-child(...) or :nth(-last)?-of-type(...)
							if ( diff === false ) {
								// Use the same loop as above to seek `elem` from the start
								while ( (node = ++nodeIndex && node && node[ dir ] ||
									(diff = nodeIndex = 0) || start.pop()) ) {

									if ( ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) &&
										++diff ) {

										// Cache the index of each encountered element
										if ( useCache ) {
											outerCache = node[ expando ] || (node[ expando ] = {});

											// Support: IE <9 only
											// Defend against cloned attroperties (jQuery gh-1709)
											uniqueCache = outerCache[ node.uniqueID ] ||
												(outerCache[ node.uniqueID ] = {});

											uniqueCache[ type ] = [ dirruns, diff ];
										}

										if ( node === elem ) {
											break;
										}
									}
								}
							}
						}

						// Incorporate the offset, then check against cycle size
						diff -= last;
						return diff === first || ( diff % first === 0 && diff / first >= 0 );
					}
				};
		},

		"PSEUDO": function( pseudo, argument ) {
			// pseudo-class names are case-insensitive
			// http://www.w3.org/TR/selectors/#pseudo-classes
			// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
			// Remember that setFilters inherits from pseudos
			var args,
				fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
					Sizzle.error( "unsupported pseudo: " + pseudo );

			// The user may use createPseudo to indicate that
			// arguments are needed to create the filter function
			// just as Sizzle does
			if ( fn[ expando ] ) {
				return fn( argument );
			}

			// But maintain support for old signatures
			if ( fn.length > 1 ) {
				args = [ pseudo, pseudo, "", argument ];
				return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
					markFunction(function( seed, matches ) {
						var idx,
							matched = fn( seed, argument ),
							i = matched.length;
						while ( i-- ) {
							idx = indexOf( seed, matched[i] );
							seed[ idx ] = !( matches[ idx ] = matched[i] );
						}
					}) :
					function( elem ) {
						return fn( elem, 0, args );
					};
			}

			return fn;
		}
	},

	pseudos: {
		// Potentially complex pseudos
		"not": markFunction(function( selector ) {
			// Trim the selector passed to compile
			// to avoid treating leading and trailing
			// spaces as combinators
			var input = [],
				results = [],
				matcher = compile( selector.replace( rtrim, "$1" ) );

			return matcher[ expando ] ?
				markFunction(function( seed, matches, context, xml ) {
					var elem,
						unmatched = matcher( seed, null, xml, [] ),
						i = seed.length;

					// Match elements unmatched by `matcher`
					while ( i-- ) {
						if ( (elem = unmatched[i]) ) {
							seed[i] = !(matches[i] = elem);
						}
					}
				}) :
				function( elem, context, xml ) {
					input[0] = elem;
					matcher( input, null, xml, results );
					// Don't keep the element (issue #299)
					input[0] = null;
					return !results.pop();
				};
		}),

		"has": markFunction(function( selector ) {
			return function( elem ) {
				return Sizzle( selector, elem ).length > 0;
			};
		}),

		"contains": markFunction(function( text ) {
			text = text.replace( runescape, funescape );
			return function( elem ) {
				return ( elem.textContent || getText( elem ) ).indexOf( text ) > -1;
			};
		}),

		// "Whether an element is represented by a :lang() selector
		// is based solely on the element's language value
		// being equal to the identifier C,
		// or beginning with the identifier C immediately followed by "-".
		// The matching of C against the element's language value is performed case-insensitively.
		// The identifier C does not have to be a valid language name."
		// http://www.w3.org/TR/selectors/#lang-pseudo
		"lang": markFunction( function( lang ) {
			// lang value must be a valid identifier
			if ( !ridentifier.test(lang || "") ) {
				Sizzle.error( "unsupported lang: " + lang );
			}
			lang = lang.replace( runescape, funescape ).toLowerCase();
			return function( elem ) {
				var elemLang;
				do {
					if ( (elemLang = documentIsHTML ?
						elem.lang :
						elem.getAttribute("xml:lang") || elem.getAttribute("lang")) ) {

						elemLang = elemLang.toLowerCase();
						return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
					}
				} while ( (elem = elem.parentNode) && elem.nodeType === 1 );
				return false;
			};
		}),

		// Miscellaneous
		"target": function( elem ) {
			var hash = window.location && window.location.hash;
			return hash && hash.slice( 1 ) === elem.id;
		},

		"root": function( elem ) {
			return elem === docElem;
		},

		"focus": function( elem ) {
			return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
		},

		// Boolean properties
		"enabled": createDisabledPseudo( false ),
		"disabled": createDisabledPseudo( true ),

		"checked": function( elem ) {
			// In CSS3, :checked should return both checked and selected elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			var nodeName = elem.nodeName.toLowerCase();
			return (nodeName === "input" && !!elem.checked) || (nodeName === "option" && !!elem.selected);
		},

		"selected": function( elem ) {
			// Accessing this property makes selected-by-default
			// options in Safari work properly
			if ( elem.parentNode ) {
				elem.parentNode.selectedIndex;
			}

			return elem.selected === true;
		},

		// Contents
		"empty": function( elem ) {
			// http://www.w3.org/TR/selectors/#empty-pseudo
			// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
			//   but not by others (comment: 8; processing instruction: 7; etc.)
			// nodeType < 6 works because attributes (2) do not appear as children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				if ( elem.nodeType < 6 ) {
					return false;
				}
			}
			return true;
		},

		"parent": function( elem ) {
			return !Expr.pseudos["empty"]( elem );
		},

		// Element/input types
		"header": function( elem ) {
			return rheader.test( elem.nodeName );
		},

		"input": function( elem ) {
			return rinputs.test( elem.nodeName );
		},

		"button": function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return name === "input" && elem.type === "button" || name === "button";
		},

		"text": function( elem ) {
			var attr;
			return elem.nodeName.toLowerCase() === "input" &&
				elem.type === "text" &&

				// Support: IE<8
				// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
				( (attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text" );
		},

		// Position-in-collection
		"first": createPositionalPseudo(function() {
			return [ 0 ];
		}),

		"last": createPositionalPseudo(function( matchIndexes, length ) {
			return [ length - 1 ];
		}),

		"eq": createPositionalPseudo(function( matchIndexes, length, argument ) {
			return [ argument < 0 ? argument + length : argument ];
		}),

		"even": createPositionalPseudo(function( matchIndexes, length ) {
			var i = 0;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"odd": createPositionalPseudo(function( matchIndexes, length ) {
			var i = 1;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"lt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			var i = argument < 0 ?
				argument + length :
				argument > length ?
					length :
					argument;
			for ( ; --i >= 0; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"gt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; ++i < length; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		})
	}
};

Expr.pseudos["nth"] = Expr.pseudos["eq"];

// Add button/input type pseudos
for ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {
	Expr.pseudos[ i ] = createInputPseudo( i );
}
for ( i in { submit: true, reset: true } ) {
	Expr.pseudos[ i ] = createButtonPseudo( i );
}

// Easy API for creating new setFilters
function setFilters() {}
setFilters.prototype = Expr.filters = Expr.pseudos;
Expr.setFilters = new setFilters();

tokenize = Sizzle.tokenize = function( selector, parseOnly ) {
	var matched, match, tokens, type,
		soFar, groups, preFilters,
		cached = tokenCache[ selector + " " ];

	if ( cached ) {
		return parseOnly ? 0 : cached.slice( 0 );
	}

	soFar = selector;
	groups = [];
	preFilters = Expr.preFilter;

	while ( soFar ) {

		// Comma and first run
		if ( !matched || (match = rcomma.exec( soFar )) ) {
			if ( match ) {
				// Don't consume trailing commas as valid
				soFar = soFar.slice( match[0].length ) || soFar;
			}
			groups.push( (tokens = []) );
		}

		matched = false;

		// Combinators
		if ( (match = rcombinators.exec( soFar )) ) {
			matched = match.shift();
			tokens.push({
				value: matched,
				// Cast descendant combinators to space
				type: match[0].replace( rtrim, " " )
			});
			soFar = soFar.slice( matched.length );
		}

		// Filters
		for ( type in Expr.filter ) {
			if ( (match = matchExpr[ type ].exec( soFar )) && (!preFilters[ type ] ||
				(match = preFilters[ type ]( match ))) ) {
				matched = match.shift();
				tokens.push({
					value: matched,
					type: type,
					matches: match
				});
				soFar = soFar.slice( matched.length );
			}
		}

		if ( !matched ) {
			break;
		}
	}

	// Return the length of the invalid excess
	// if we're just parsing
	// Otherwise, throw an error or return tokens
	return parseOnly ?
		soFar.length :
		soFar ?
			Sizzle.error( selector ) :
			// Cache the tokens
			tokenCache( selector, groups ).slice( 0 );
};

function toSelector( tokens ) {
	var i = 0,
		len = tokens.length,
		selector = "";
	for ( ; i < len; i++ ) {
		selector += tokens[i].value;
	}
	return selector;
}

function addCombinator( matcher, combinator, base ) {
	var dir = combinator.dir,
		skip = combinator.next,
		key = skip || dir,
		checkNonElements = base && key === "parentNode",
		doneName = done++;

	return combinator.first ?
		// Check against closest ancestor/preceding element
		function( elem, context, xml ) {
			while ( (elem = elem[ dir ]) ) {
				if ( elem.nodeType === 1 || checkNonElements ) {
					return matcher( elem, context, xml );
				}
			}
			return false;
		} :

		// Check against all ancestor/preceding elements
		function( elem, context, xml ) {
			var oldCache, uniqueCache, outerCache,
				newCache = [ dirruns, doneName ];

			// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
			if ( xml ) {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						if ( matcher( elem, context, xml ) ) {
							return true;
						}
					}
				}
			} else {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						outerCache = elem[ expando ] || (elem[ expando ] = {});

						// Support: IE <9 only
						// Defend against cloned attroperties (jQuery gh-1709)
						uniqueCache = outerCache[ elem.uniqueID ] || (outerCache[ elem.uniqueID ] = {});

						if ( skip && skip === elem.nodeName.toLowerCase() ) {
							elem = elem[ dir ] || elem;
						} else if ( (oldCache = uniqueCache[ key ]) &&
							oldCache[ 0 ] === dirruns && oldCache[ 1 ] === doneName ) {

							// Assign to newCache so results back-propagate to previous elements
							return (newCache[ 2 ] = oldCache[ 2 ]);
						} else {
							// Reuse newcache so results back-propagate to previous elements
							uniqueCache[ key ] = newCache;

							// A match means we're done; a fail means we have to keep checking
							if ( (newCache[ 2 ] = matcher( elem, context, xml )) ) {
								return true;
							}
						}
					}
				}
			}
			return false;
		};
}

function elementMatcher( matchers ) {
	return matchers.length > 1 ?
		function( elem, context, xml ) {
			var i = matchers.length;
			while ( i-- ) {
				if ( !matchers[i]( elem, context, xml ) ) {
					return false;
				}
			}
			return true;
		} :
		matchers[0];
}

function multipleContexts( selector, contexts, results ) {
	var i = 0,
		len = contexts.length;
	for ( ; i < len; i++ ) {
		Sizzle( selector, contexts[i], results );
	}
	return results;
}

function condense( unmatched, map, filter, context, xml ) {
	var elem,
		newUnmatched = [],
		i = 0,
		len = unmatched.length,
		mapped = map != null;

	for ( ; i < len; i++ ) {
		if ( (elem = unmatched[i]) ) {
			if ( !filter || filter( elem, context, xml ) ) {
				newUnmatched.push( elem );
				if ( mapped ) {
					map.push( i );
				}
			}
		}
	}

	return newUnmatched;
}

function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
	if ( postFilter && !postFilter[ expando ] ) {
		postFilter = setMatcher( postFilter );
	}
	if ( postFinder && !postFinder[ expando ] ) {
		postFinder = setMatcher( postFinder, postSelector );
	}
	return markFunction(function( seed, results, context, xml ) {
		var temp, i, elem,
			preMap = [],
			postMap = [],
			preexisting = results.length,

			// Get initial elements from seed or context
			elems = seed || multipleContexts( selector || "*", context.nodeType ? [ context ] : context, [] ),

			// Prefilter to get matcher input, preserving a map for seed-results synchronization
			matcherIn = preFilter && ( seed || !selector ) ?
				condense( elems, preMap, preFilter, context, xml ) :
				elems,

			matcherOut = matcher ?
				// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
				postFinder || ( seed ? preFilter : preexisting || postFilter ) ?

					// ...intermediate processing is necessary
					[] :

					// ...otherwise use results directly
					results :
				matcherIn;

		// Find primary matches
		if ( matcher ) {
			matcher( matcherIn, matcherOut, context, xml );
		}

		// Apply postFilter
		if ( postFilter ) {
			temp = condense( matcherOut, postMap );
			postFilter( temp, [], context, xml );

			// Un-match failing elements by moving them back to matcherIn
			i = temp.length;
			while ( i-- ) {
				if ( (elem = temp[i]) ) {
					matcherOut[ postMap[i] ] = !(matcherIn[ postMap[i] ] = elem);
				}
			}
		}

		if ( seed ) {
			if ( postFinder || preFilter ) {
				if ( postFinder ) {
					// Get the final matcherOut by condensing this intermediate into postFinder contexts
					temp = [];
					i = matcherOut.length;
					while ( i-- ) {
						if ( (elem = matcherOut[i]) ) {
							// Restore matcherIn since elem is not yet a final match
							temp.push( (matcherIn[i] = elem) );
						}
					}
					postFinder( null, (matcherOut = []), temp, xml );
				}

				// Move matched elements from seed to results to keep them synchronized
				i = matcherOut.length;
				while ( i-- ) {
					if ( (elem = matcherOut[i]) &&
						(temp = postFinder ? indexOf( seed, elem ) : preMap[i]) > -1 ) {

						seed[temp] = !(results[temp] = elem);
					}
				}
			}

		// Add elements to results, through postFinder if defined
		} else {
			matcherOut = condense(
				matcherOut === results ?
					matcherOut.splice( preexisting, matcherOut.length ) :
					matcherOut
			);
			if ( postFinder ) {
				postFinder( null, results, matcherOut, xml );
			} else {
				push.apply( results, matcherOut );
			}
		}
	});
}

function matcherFromTokens( tokens ) {
	var checkContext, matcher, j,
		len = tokens.length,
		leadingRelative = Expr.relative[ tokens[0].type ],
		implicitRelative = leadingRelative || Expr.relative[" "],
		i = leadingRelative ? 1 : 0,

		// The foundational matcher ensures that elements are reachable from top-level context(s)
		matchContext = addCombinator( function( elem ) {
			return elem === checkContext;
		}, implicitRelative, true ),
		matchAnyContext = addCombinator( function( elem ) {
			return indexOf( checkContext, elem ) > -1;
		}, implicitRelative, true ),
		matchers = [ function( elem, context, xml ) {
			var ret = ( !leadingRelative && ( xml || context !== outermostContext ) ) || (
				(checkContext = context).nodeType ?
					matchContext( elem, context, xml ) :
					matchAnyContext( elem, context, xml ) );
			// Avoid hanging onto element (issue #299)
			checkContext = null;
			return ret;
		} ];

	for ( ; i < len; i++ ) {
		if ( (matcher = Expr.relative[ tokens[i].type ]) ) {
			matchers = [ addCombinator(elementMatcher( matchers ), matcher) ];
		} else {
			matcher = Expr.filter[ tokens[i].type ].apply( null, tokens[i].matches );

			// Return special upon seeing a positional matcher
			if ( matcher[ expando ] ) {
				// Find the next relative operator (if any) for proper handling
				j = ++i;
				for ( ; j < len; j++ ) {
					if ( Expr.relative[ tokens[j].type ] ) {
						break;
					}
				}
				return setMatcher(
					i > 1 && elementMatcher( matchers ),
					i > 1 && toSelector(
						// If the preceding token was a descendant combinator, insert an implicit any-element `*`
						tokens.slice( 0, i - 1 ).concat({ value: tokens[ i - 2 ].type === " " ? "*" : "" })
					).replace( rtrim, "$1" ),
					matcher,
					i < j && matcherFromTokens( tokens.slice( i, j ) ),
					j < len && matcherFromTokens( (tokens = tokens.slice( j )) ),
					j < len && toSelector( tokens )
				);
			}
			matchers.push( matcher );
		}
	}

	return elementMatcher( matchers );
}

function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
	var bySet = setMatchers.length > 0,
		byElement = elementMatchers.length > 0,
		superMatcher = function( seed, context, xml, results, outermost ) {
			var elem, j, matcher,
				matchedCount = 0,
				i = "0",
				unmatched = seed && [],
				setMatched = [],
				contextBackup = outermostContext,
				// We must always have either seed elements or outermost context
				elems = seed || byElement && Expr.find["TAG"]( "*", outermost ),
				// Use integer dirruns iff this is the outermost matcher
				dirrunsUnique = (dirruns += contextBackup == null ? 1 : Math.random() || 0.1),
				len = elems.length;

			if ( outermost ) {
				outermostContext = context === document || context || outermost;
			}

			// Add elements passing elementMatchers directly to results
			// Support: IE<9, Safari
			// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
			for ( ; i !== len && (elem = elems[i]) != null; i++ ) {
				if ( byElement && elem ) {
					j = 0;
					if ( !context && elem.ownerDocument !== document ) {
						setDocument( elem );
						xml = !documentIsHTML;
					}
					while ( (matcher = elementMatchers[j++]) ) {
						if ( matcher( elem, context || document, xml) ) {
							results.push( elem );
							break;
						}
					}
					if ( outermost ) {
						dirruns = dirrunsUnique;
					}
				}

				// Track unmatched elements for set filters
				if ( bySet ) {
					// They will have gone through all possible matchers
					if ( (elem = !matcher && elem) ) {
						matchedCount--;
					}

					// Lengthen the array for every element, matched or not
					if ( seed ) {
						unmatched.push( elem );
					}
				}
			}

			// `i` is now the count of elements visited above, and adding it to `matchedCount`
			// makes the latter nonnegative.
			matchedCount += i;

			// Apply set filters to unmatched elements
			// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
			// equals `i`), unless we didn't visit _any_ elements in the above loop because we have
			// no element matchers and no seed.
			// Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
			// case, which will result in a "00" `matchedCount` that differs from `i` but is also
			// numerically zero.
			if ( bySet && i !== matchedCount ) {
				j = 0;
				while ( (matcher = setMatchers[j++]) ) {
					matcher( unmatched, setMatched, context, xml );
				}

				if ( seed ) {
					// Reintegrate element matches to eliminate the need for sorting
					if ( matchedCount > 0 ) {
						while ( i-- ) {
							if ( !(unmatched[i] || setMatched[i]) ) {
								setMatched[i] = pop.call( results );
							}
						}
					}

					// Discard index placeholder values to get only actual matches
					setMatched = condense( setMatched );
				}

				// Add matches to results
				push.apply( results, setMatched );

				// Seedless set matches succeeding multiple successful matchers stipulate sorting
				if ( outermost && !seed && setMatched.length > 0 &&
					( matchedCount + setMatchers.length ) > 1 ) {

					Sizzle.uniqueSort( results );
				}
			}

			// Override manipulation of globals by nested matchers
			if ( outermost ) {
				dirruns = dirrunsUnique;
				outermostContext = contextBackup;
			}

			return unmatched;
		};

	return bySet ?
		markFunction( superMatcher ) :
		superMatcher;
}

compile = Sizzle.compile = function( selector, match /* Internal Use Only */ ) {
	var i,
		setMatchers = [],
		elementMatchers = [],
		cached = compilerCache[ selector + " " ];

	if ( !cached ) {
		// Generate a function of recursive functions that can be used to check each element
		if ( !match ) {
			match = tokenize( selector );
		}
		i = match.length;
		while ( i-- ) {
			cached = matcherFromTokens( match[i] );
			if ( cached[ expando ] ) {
				setMatchers.push( cached );
			} else {
				elementMatchers.push( cached );
			}
		}

		// Cache the compiled function
		cached = compilerCache( selector, matcherFromGroupMatchers( elementMatchers, setMatchers ) );

		// Save selector and tokenization
		cached.selector = selector;
	}
	return cached;
};

/**
 * A low-level selection function that works with Sizzle's compiled
 *  selector functions
 * @param {String|Function} selector A selector or a pre-compiled
 *  selector function built with Sizzle.compile
 * @param {Element} context
 * @param {Array} [results]
 * @param {Array} [seed] A set of elements to match against
 */
select = Sizzle.select = function( selector, context, results, seed ) {
	var i, tokens, token, type, find,
		compiled = typeof selector === "function" && selector,
		match = !seed && tokenize( (selector = compiled.selector || selector) );

	results = results || [];

	// Try to minimize operations if there is only one selector in the list and no seed
	// (the latter of which guarantees us context)
	if ( match.length === 1 ) {

		// Reduce context if the leading compound selector is an ID
		tokens = match[0] = match[0].slice( 0 );
		if ( tokens.length > 2 && (token = tokens[0]).type === "ID" &&
				context.nodeType === 9 && documentIsHTML && Expr.relative[ tokens[1].type ] ) {

			context = ( Expr.find["ID"]( token.matches[0].replace(runescape, funescape), context ) || [] )[0];
			if ( !context ) {
				return results;

			// Precompiled matchers will still verify ancestry, so step up a level
			} else if ( compiled ) {
				context = context.parentNode;
			}

			selector = selector.slice( tokens.shift().value.length );
		}

		// Fetch a seed set for right-to-left matching
		i = matchExpr["needsContext"].test( selector ) ? 0 : tokens.length;
		while ( i-- ) {
			token = tokens[i];

			// Abort if we hit a combinator
			if ( Expr.relative[ (type = token.type) ] ) {
				break;
			}
			if ( (find = Expr.find[ type ]) ) {
				// Search, expanding context for leading sibling combinators
				if ( (seed = find(
					token.matches[0].replace( runescape, funescape ),
					rsibling.test( tokens[0].type ) && testContext( context.parentNode ) || context
				)) ) {

					// If seed is empty or no tokens remain, we can return early
					tokens.splice( i, 1 );
					selector = seed.length && toSelector( tokens );
					if ( !selector ) {
						push.apply( results, seed );
						return results;
					}

					break;
				}
			}
		}
	}

	// Compile and execute a filtering function if one is not provided
	// Provide `match` to avoid retokenization if we modified the selector above
	( compiled || compile( selector, match ) )(
		seed,
		context,
		!documentIsHTML,
		results,
		!context || rsibling.test( selector ) && testContext( context.parentNode ) || context
	);
	return results;
};

// One-time assignments

// Sort stability
support.sortStable = expando.split("").sort( sortOrder ).join("") === expando;

// Support: Chrome 14-35+
// Always assume duplicates if they aren't passed to the comparison function
support.detectDuplicates = !!hasDuplicate;

// Initialize against the default document
setDocument();

// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
// Detached nodes confoundingly follow *each other*
support.sortDetached = assert(function( el ) {
	// Should return 1, but returns 4 (following)
	return el.compareDocumentPosition( document.createElement("fieldset") ) & 1;
});

// Support: IE<8
// Prevent attribute/property "interpolation"
// https://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
if ( !assert(function( el ) {
	el.innerHTML = "<a href='#'></a>";
	return el.firstChild.getAttribute("href") === "#" ;
}) ) {
	addHandle( "type|href|height|width", function( elem, name, isXML ) {
		if ( !isXML ) {
			return elem.getAttribute( name, name.toLowerCase() === "type" ? 1 : 2 );
		}
	});
}

// Support: IE<9
// Use defaultValue in place of getAttribute("value")
if ( !support.attributes || !assert(function( el ) {
	el.innerHTML = "<input/>";
	el.firstChild.setAttribute( "value", "" );
	return el.firstChild.getAttribute( "value" ) === "";
}) ) {
	addHandle( "value", function( elem, name, isXML ) {
		if ( !isXML && elem.nodeName.toLowerCase() === "input" ) {
			return elem.defaultValue;
		}
	});
}

// Support: IE<9
// Use getAttributeNode to fetch booleans when getAttribute lies
if ( !assert(function( el ) {
	return el.getAttribute("disabled") == null;
}) ) {
	addHandle( booleans, function( elem, name, isXML ) {
		var val;
		if ( !isXML ) {
			return elem[ name ] === true ? name.toLowerCase() :
					(val = elem.getAttributeNode( name )) && val.specified ?
					val.value :
				null;
		}
	});
}

return Sizzle;

})( window );



jQuery.find = Sizzle;
jQuery.expr = Sizzle.selectors;

// Deprecated
jQuery.expr[ ":" ] = jQuery.expr.pseudos;
jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
jQuery.text = Sizzle.getText;
jQuery.isXMLDoc = Sizzle.isXML;
jQuery.contains = Sizzle.contains;
jQuery.escapeSelector = Sizzle.escape;




var dir = function( elem, dir, until ) {
	var matched = [],
		truncate = until !== undefined;

	while ( ( elem = elem[ dir ] ) && elem.nodeType !== 9 ) {
		if ( elem.nodeType === 1 ) {
			if ( truncate && jQuery( elem ).is( until ) ) {
				break;
			}
			matched.push( elem );
		}
	}
	return matched;
};


var siblings = function( n, elem ) {
	var matched = [];

	for ( ; n; n = n.nextSibling ) {
		if ( n.nodeType === 1 && n !== elem ) {
			matched.push( n );
		}
	}

	return matched;
};


var rneedsContext = jQuery.expr.match.needsContext;



function nodeName( elem, name ) {

  return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();

};
var rsingleTag = ( /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i );



// Implement the identical functionality for filter and not
function winnow( elements, qualifier, not ) {
	if ( isFunction( qualifier ) ) {
		return jQuery.grep( elements, function( elem, i ) {
			return !!qualifier.call( elem, i, elem ) !== not;
		} );
	}

	// Single element
	if ( qualifier.nodeType ) {
		return jQuery.grep( elements, function( elem ) {
			return ( elem === qualifier ) !== not;
		} );
	}

	// Arraylike of elements (jQuery, arguments, Array)
	if ( typeof qualifier !== "string" ) {
		return jQuery.grep( elements, function( elem ) {
			return ( indexOf.call( qualifier, elem ) > -1 ) !== not;
		} );
	}

	// Filtered directly for both simple and complex selectors
	return jQuery.filter( qualifier, elements, not );
}

jQuery.filter = function( expr, elems, not ) {
	var elem = elems[ 0 ];

	if ( not ) {
		expr = ":not(" + expr + ")";
	}

	if ( elems.length === 1 && elem.nodeType === 1 ) {
		return jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [];
	}

	return jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {
		return elem.nodeType === 1;
	} ) );
};

jQuery.fn.extend( {
	find: function( selector ) {
		var i, ret,
			len = this.length,
			self = this;

		if ( typeof selector !== "string" ) {
			return this.pushStack( jQuery( selector ).filter( function() {
				for ( i = 0; i < len; i++ ) {
					if ( jQuery.contains( self[ i ], this ) ) {
						return true;
					}
				}
			} ) );
		}

		ret = this.pushStack( [] );

		for ( i = 0; i < len; i++ ) {
			jQuery.find( selector, self[ i ], ret );
		}

		return len > 1 ? jQuery.uniqueSort( ret ) : ret;
	},
	filter: function( selector ) {
		return this.pushStack( winnow( this, selector || [], false ) );
	},
	not: function( selector ) {
		return this.pushStack( winnow( this, selector || [], true ) );
	},
	is: function( selector ) {
		return !!winnow(
			this,

			// If this is a positional/relative selector, check membership in the returned set
			// so $("p:first").is("p:last") won't return true for a doc with two "p".
			typeof selector === "string" && rneedsContext.test( selector ) ?
				jQuery( selector ) :
				selector || [],
			false
		).length;
	}
} );


// Initialize a jQuery object


// A central reference to the root jQuery(document)
var rootjQuery,

	// A simple way to check for HTML strings
	// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
	// Strict HTML recognition (#11290: must start with <)
	// Shortcut simple #id case for speed
	rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,

	init = jQuery.fn.init = function( selector, context, root ) {
		var match, elem;

		// HANDLE: $(""), $(null), $(undefined), $(false)
		if ( !selector ) {
			return this;
		}

		// Method init() accepts an alternate rootjQuery
		// so migrate can support jQuery.sub (gh-2101)
		root = root || rootjQuery;

		// Handle HTML strings
		if ( typeof selector === "string" ) {
			if ( selector[ 0 ] === "<" &&
				selector[ selector.length - 1 ] === ">" &&
				selector.length >= 3 ) {

				// Assume that strings that start and end with <> are HTML and skip the regex check
				match = [ null, selector, null ];

			} else {
				match = rquickExpr.exec( selector );
			}

			// Match html or make sure no context is specified for #id
			if ( match && ( match[ 1 ] || !context ) ) {

				// HANDLE: $(html) -> $(array)
				if ( match[ 1 ] ) {
					context = context instanceof jQuery ? context[ 0 ] : context;

					// Option to run scripts is true for back-compat
					// Intentionally let the error be thrown if parseHTML is not present
					jQuery.merge( this, jQuery.parseHTML(
						match[ 1 ],
						context && context.nodeType ? context.ownerDocument || context : document,
						true
					) );

					// HANDLE: $(html, props)
					if ( rsingleTag.test( match[ 1 ] ) && jQuery.isPlainObject( context ) ) {
						for ( match in context ) {

							// Properties of context are called as methods if possible
							if ( isFunction( this[ match ] ) ) {
								this[ match ]( context[ match ] );

							// ...and otherwise set as attributes
							} else {
								this.attr( match, context[ match ] );
							}
						}
					}

					return this;

				// HANDLE: $(#id)
				} else {
					elem = document.getElementById( match[ 2 ] );

					if ( elem ) {

						// Inject the element directly into the jQuery object
						this[ 0 ] = elem;
						this.length = 1;
					}
					return this;
				}

			// HANDLE: $(expr, $(...))
			} else if ( !context || context.jquery ) {
				return ( context || root ).find( selector );

			// HANDLE: $(expr, context)
			// (which is just equivalent to: $(context).find(expr)
			} else {
				return this.constructor( context ).find( selector );
			}

		// HANDLE: $(DOMElement)
		} else if ( selector.nodeType ) {
			this[ 0 ] = selector;
			this.length = 1;
			return this;

		// HANDLE: $(function)
		// Shortcut for document ready
		} else if ( isFunction( selector ) ) {
			return root.ready !== undefined ?
				root.ready( selector ) :

				// Execute immediately if ready is not present
				selector( jQuery );
		}

		return jQuery.makeArray( selector, this );
	};

// Give the init function the jQuery prototype for later instantiation
init.prototype = jQuery.fn;

// Initialize central reference
rootjQuery = jQuery( document );


var rparentsprev = /^(?:parents|prev(?:Until|All))/,

	// Methods guaranteed to produce a unique set when starting from a unique set
	guaranteedUnique = {
		children: true,
		contents: true,
		next: true,
		prev: true
	};

jQuery.fn.extend( {
	has: function( target ) {
		var targets = jQuery( target, this ),
			l = targets.length;

		return this.filter( function() {
			var i = 0;
			for ( ; i < l; i++ ) {
				if ( jQuery.contains( this, targets[ i ] ) ) {
					return true;
				}
			}
		} );
	},

	closest: function( selectors, context ) {
		var cur,
			i = 0,
			l = this.length,
			matched = [],
			targets = typeof selectors !== "string" && jQuery( selectors );

		// Positional selectors never match, since there's no _selection_ context
		if ( !rneedsContext.test( selectors ) ) {
			for ( ; i < l; i++ ) {
				for ( cur = this[ i ]; cur && cur !== context; cur = cur.parentNode ) {

					// Always skip document fragments
					if ( cur.nodeType < 11 && ( targets ?
						targets.index( cur ) > -1 :

						// Don't pass non-elements to Sizzle
						cur.nodeType === 1 &&
							jQuery.find.matchesSelector( cur, selectors ) ) ) {

						matched.push( cur );
						break;
					}
				}
			}
		}

		return this.pushStack( matched.length > 1 ? jQuery.uniqueSort( matched ) : matched );
	},

	// Determine the position of an element within the set
	index: function( elem ) {

		// No argument, return index in parent
		if ( !elem ) {
			return ( this[ 0 ] && this[ 0 ].parentNode ) ? this.first().prevAll().length : -1;
		}

		// Index in selector
		if ( typeof elem === "string" ) {
			return indexOf.call( jQuery( elem ), this[ 0 ] );
		}

		// Locate the position of the desired element
		return indexOf.call( this,

			// If it receives a jQuery object, the first element is used
			elem.jquery ? elem[ 0 ] : elem
		);
	},

	add: function( selector, context ) {
		return this.pushStack(
			jQuery.uniqueSort(
				jQuery.merge( this.get(), jQuery( selector, context ) )
			)
		);
	},

	addBack: function( selector ) {
		return this.add( selector == null ?
			this.prevObject : this.prevObject.filter( selector )
		);
	}
} );

function sibling( cur, dir ) {
	while ( ( cur = cur[ dir ] ) && cur.nodeType !== 1 ) {}
	return cur;
}

jQuery.each( {
	parent: function( elem ) {
		var parent = elem.parentNode;
		return parent && parent.nodeType !== 11 ? parent : null;
	},
	parents: function( elem ) {
		return dir( elem, "parentNode" );
	},
	parentsUntil: function( elem, i, until ) {
		return dir( elem, "parentNode", until );
	},
	next: function( elem ) {
		return sibling( elem, "nextSibling" );
	},
	prev: function( elem ) {
		return sibling( elem, "previousSibling" );
	},
	nextAll: function( elem ) {
		return dir( elem, "nextSibling" );
	},
	prevAll: function( elem ) {
		return dir( elem, "previousSibling" );
	},
	nextUntil: function( elem, i, until ) {
		return dir( elem, "nextSibling", until );
	},
	prevUntil: function( elem, i, until ) {
		return dir( elem, "previousSibling", until );
	},
	siblings: function( elem ) {
		return siblings( ( elem.parentNode || {} ).firstChild, elem );
	},
	children: function( elem ) {
		return siblings( elem.firstChild );
	},
	contents: function( elem ) {
		if ( typeof elem.contentDocument !== "undefined" ) {
			return elem.contentDocument;
		}

		// Support: IE 9 - 11 only, iOS 7 only, Android Browser <=4.3 only
		// Treat the template element as a regular one in browsers that
		// don't support it.
		if ( nodeName( elem, "template" ) ) {
			elem = elem.content || elem;
		}

		return jQuery.merge( [], elem.childNodes );
	}
}, function( name, fn ) {
	jQuery.fn[ name ] = function( until, selector ) {
		var matched = jQuery.map( this, fn, until );

		if ( name.slice( -5 ) !== "Until" ) {
			selector = until;
		}

		if ( selector && typeof selector === "string" ) {
			matched = jQuery.filter( selector, matched );
		}

		if ( this.length > 1 ) {

			// Remove duplicates
			if ( !guaranteedUnique[ name ] ) {
				jQuery.uniqueSort( matched );
			}

			// Reverse order for parents* and prev-derivatives
			if ( rparentsprev.test( name ) ) {
				matched.reverse();
			}
		}

		return this.pushStack( matched );
	};
} );
var rnothtmlwhite = ( /[^\x20\t\r\n\f]+/g );



// Convert String-formatted options into Object-formatted ones
function createOptions( options ) {
	var object = {};
	jQuery.each( options.match( rnothtmlwhite ) || [], function( _, flag ) {
		object[ flag ] = true;
	} );
	return object;
}

/*
 * Create a callback list using the following parameters:
 *
 *	options: an optional list of space-separated options that will change how
 *			the callback list behaves or a more traditional option object
 *
 * By default a callback list will act like an event callback list and can be
 * "fired" multiple times.
 *
 * Possible options:
 *
 *	once:			will ensure the callback list can only be fired once (like a Deferred)
 *
 *	memory:			will keep track of previous values and will call any callback added
 *					after the list has been fired right away with the latest "memorized"
 *					values (like a Deferred)
 *
 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
 *
 *	stopOnFalse:	interrupt callings when a callback returns false
 *
 */
jQuery.Callbacks = function( options ) {

	// Convert options from String-formatted to Object-formatted if needed
	// (we check in cache first)
	options = typeof options === "string" ?
		createOptions( options ) :
		jQuery.extend( {}, options );

	var // Flag to know if list is currently firing
		firing,

		// Last fire value for non-forgettable lists
		memory,

		// Flag to know if list was already fired
		fired,

		// Flag to prevent firing
		locked,

		// Actual callback list
		list = [],

		// Queue of execution data for repeatable lists
		queue = [],

		// Index of currently firing callback (modified by add/remove as needed)
		firingIndex = -1,

		// Fire callbacks
		fire = function() {

			// Enforce single-firing
			locked = locked || options.once;

			// Execute callbacks for all pending executions,
			// respecting firingIndex overrides and runtime changes
			fired = firing = true;
			for ( ; queue.length; firingIndex = -1 ) {
				memory = queue.shift();
				while ( ++firingIndex < list.length ) {

					// Run callback and check for early termination
					if ( list[ firingIndex ].apply( memory[ 0 ], memory[ 1 ] ) === false &&
						options.stopOnFalse ) {

						// Jump to end and forget the data so .add doesn't re-fire
						firingIndex = list.length;
						memory = false;
					}
				}
			}

			// Forget the data if we're done with it
			if ( !options.memory ) {
				memory = false;
			}

			firing = false;

			// Clean up if we're done firing for good
			if ( locked ) {

				// Keep an empty list if we have data for future add calls
				if ( memory ) {
					list = [];

				// Otherwise, this object is spent
				} else {
					list = "";
				}
			}
		},

		// Actual Callbacks object
		self = {

			// Add a callback or a collection of callbacks to the list
			add: function() {
				if ( list ) {

					// If we have memory from a past run, we should fire after adding
					if ( memory && !firing ) {
						firingIndex = list.length - 1;
						queue.push( memory );
					}

					( function add( args ) {
						jQuery.each( args, function( _, arg ) {
							if ( isFunction( arg ) ) {
								if ( !options.unique || !self.has( arg ) ) {
									list.push( arg );
								}
							} else if ( arg && arg.length && toType( arg ) !== "string" ) {

								// Inspect recursively
								add( arg );
							}
						} );
					} )( arguments );

					if ( memory && !firing ) {
						fire();
					}
				}
				return this;
			},

			// Remove a callback from the list
			remove: function() {
				jQuery.each( arguments, function( _, arg ) {
					var index;
					while ( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {
						list.splice( index, 1 );

						// Handle firing indexes
						if ( index <= firingIndex ) {
							firingIndex--;
						}
					}
				} );
				return this;
			},

			// Check if a given callback is in the list.
			// If no argument is given, return whether or not list has callbacks attached.
			has: function( fn ) {
				return fn ?
					jQuery.inArray( fn, list ) > -1 :
					list.length > 0;
			},

			// Remove all callbacks from the list
			empty: function() {
				if ( list ) {
					list = [];
				}
				return this;
			},

			// Disable .fire and .add
			// Abort any current/pending executions
			// Clear all callbacks and values
			disable: function() {
				locked = queue = [];
				list = memory = "";
				return this;
			},
			disabled: function() {
				return !list;
			},

			// Disable .fire
			// Also disable .add unless we have memory (since it would have no effect)
			// Abort any pending executions
			lock: function() {
				locked = queue = [];
				if ( !memory && !firing ) {
					list = memory = "";
				}
				return this;
			},
			locked: function() {
				return !!locked;
			},

			// Call all callbacks with the given context and arguments
			fireWith: function( context, args ) {
				if ( !locked ) {
					args = args || [];
					args = [ context, args.slice ? args.slice() : args ];
					queue.push( args );
					if ( !firing ) {
						fire();
					}
				}
				return this;
			},

			// Call all the callbacks with the given arguments
			fire: function() {
				self.fireWith( this, arguments );
				return this;
			},

			// To know if the callbacks have already been called at least once
			fired: function() {
				return !!fired;
			}
		};

	return self;
};


function Identity( v ) {
	return v;
}
function Thrower( ex ) {
	throw ex;
}

function adoptValue( value, resolve, reject, noValue ) {
	var method;

	try {

		// Check for promise aspect first to privilege synchronous behavior
		if ( value && isFunction( ( method = value.promise ) ) ) {
			method.call( value ).done( resolve ).fail( reject );

		// Other thenables
		} else if ( value && isFunction( ( method = value.then ) ) ) {
			method.call( value, resolve, reject );

		// Other non-thenables
		} else {

			// Control `resolve` arguments by letting Array#slice cast boolean `noValue` to integer:
			// * false: [ value ].slice( 0 ) => resolve( value )
			// * true: [ value ].slice( 1 ) => resolve()
			resolve.apply( undefined, [ value ].slice( noValue ) );
		}

	// For Promises/A+, convert exceptions into rejections
	// Since jQuery.when doesn't unwrap thenables, we can skip the extra checks appearing in
	// Deferred#then to conditionally suppress rejection.
	} catch ( value ) {

		// Support: Android 4.0 only
		// Strict mode functions invoked without .call/.apply get global-object context
		reject.apply( undefined, [ value ] );
	}
}

jQuery.extend( {

	Deferred: function( func ) {
		var tuples = [

				// action, add listener, callbacks,
				// ... .then handlers, argument index, [final state]
				[ "notify", "progress", jQuery.Callbacks( "memory" ),
					jQuery.Callbacks( "memory" ), 2 ],
				[ "resolve", "done", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 0, "resolved" ],
				[ "reject", "fail", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 1, "rejected" ]
			],
			state = "pending",
			promise = {
				state: function() {
					return state;
				},
				always: function() {
					deferred.done( arguments ).fail( arguments );
					return this;
				},
				"catch": function( fn ) {
					return promise.then( null, fn );
				},

				// Keep pipe for back-compat
				pipe: function( /* fnDone, fnFail, fnProgress */ ) {
					var fns = arguments;

					return jQuery.Deferred( function( newDefer ) {
						jQuery.each( tuples, function( i, tuple ) {

							// Map tuples (progress, done, fail) to arguments (done, fail, progress)
							var fn = isFunction( fns[ tuple[ 4 ] ] ) && fns[ tuple[ 4 ] ];

							// deferred.progress(function() { bind to newDefer or newDefer.notify })
							// deferred.done(function() { bind to newDefer or newDefer.resolve })
							// deferred.fail(function() { bind to newDefer or newDefer.reject })
							deferred[ tuple[ 1 ] ]( function() {
								var returned = fn && fn.apply( this, arguments );
								if ( returned && isFunction( returned.promise ) ) {
									returned.promise()
										.progress( newDefer.notify )
										.done( newDefer.resolve )
										.fail( newDefer.reject );
								} else {
									newDefer[ tuple[ 0 ] + "With" ](
										this,
										fn ? [ returned ] : arguments
									);
								}
							} );
						} );
						fns = null;
					} ).promise();
				},
				then: function( onFulfilled, onRejected, onProgress ) {
					var maxDepth = 0;
					function resolve( depth, deferred, handler, special ) {
						return function() {
							var that = this,
								args = arguments,
								mightThrow = function() {
									var returned, then;

									// Support: Promises/A+ section 2.3.3.3.3
									// https://promisesaplus.com/#point-59
									// Ignore double-resolution attempts
									if ( depth < maxDepth ) {
										return;
									}

									returned = handler.apply( that, args );

									// Support: Promises/A+ section 2.3.1
									// https://promisesaplus.com/#point-48
									if ( returned === deferred.promise() ) {
										throw new TypeError( "Thenable self-resolution" );
									}

									// Support: Promises/A+ sections 2.3.3.1, 3.5
									// https://promisesaplus.com/#point-54
									// https://promisesaplus.com/#point-75
									// Retrieve `then` only once
									then = returned &&

										// Support: Promises/A+ section 2.3.4
										// https://promisesaplus.com/#point-64
										// Only check objects and functions for thenability
										( typeof returned === "object" ||
											typeof returned === "function" ) &&
										returned.then;

									// Handle a returned thenable
									if ( isFunction( then ) ) {

										// Special processors (notify) just wait for resolution
										if ( special ) {
											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special )
											);

										// Normal processors (resolve) also hook into progress
										} else {

											// ...and disregard older resolution values
											maxDepth++;

											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special ),
												resolve( maxDepth, deferred, Identity,
													deferred.notifyWith )
											);
										}

									// Handle all other returned values
									} else {

										// Only substitute handlers pass on context
										// and multiple values (non-spec behavior)
										if ( handler !== Identity ) {
											that = undefined;
											args = [ returned ];
										}

										// Process the value(s)
										// Default process is resolve
										( special || deferred.resolveWith )( that, args );
									}
								},

								// Only normal processors (resolve) catch and reject exceptions
								process = special ?
									mightThrow :
									function() {
										try {
											mightThrow();
										} catch ( e ) {

											if ( jQuery.Deferred.exceptionHook ) {
												jQuery.Deferred.exceptionHook( e,
													process.stackTrace );
											}

											// Support: Promises/A+ section 2.3.3.3.4.1
											// https://promisesaplus.com/#point-61
											// Ignore post-resolution exceptions
											if ( depth + 1 >= maxDepth ) {

												// Only substitute handlers pass on context
												// and multiple values (non-spec behavior)
												if ( handler !== Thrower ) {
													that = undefined;
													args = [ e ];
												}

												deferred.rejectWith( that, args );
											}
										}
									};

							// Support: Promises/A+ section 2.3.3.3.1
							// https://promisesaplus.com/#point-57
							// Re-resolve promises immediately to dodge false rejection from
							// subsequent errors
							if ( depth ) {
								process();
							} else {

								// Call an optional hook to record the stack, in case of exception
								// since it's otherwise lost when execution goes async
								if ( jQuery.Deferred.getStackHook ) {
									process.stackTrace = jQuery.Deferred.getStackHook();
								}
								window.setTimeout( process );
							}
						};
					}

					return jQuery.Deferred( function( newDefer ) {

						// progress_handlers.add( ... )
						tuples[ 0 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onProgress ) ?
									onProgress :
									Identity,
								newDefer.notifyWith
							)
						);

						// fulfilled_handlers.add( ... )
						tuples[ 1 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onFulfilled ) ?
									onFulfilled :
									Identity
							)
						);

						// rejected_handlers.add( ... )
						tuples[ 2 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onRejected ) ?
									onRejected :
									Thrower
							)
						);
					} ).promise();
				},

				// Get a promise for this deferred
				// If obj is provided, the promise aspect is added to the object
				promise: function( obj ) {
					return obj != null ? jQuery.extend( obj, promise ) : promise;
				}
			},
			deferred = {};

		// Add list-specific methods
		jQuery.each( tuples, function( i, tuple ) {
			var list = tuple[ 2 ],
				stateString = tuple[ 5 ];

			// promise.progress = list.add
			// promise.done = list.add
			// promise.fail = list.add
			promise[ tuple[ 1 ] ] = list.add;

			// Handle state
			if ( stateString ) {
				list.add(
					function() {

						// state = "resolved" (i.e., fulfilled)
						// state = "rejected"
						state = stateString;
					},

					// rejected_callbacks.disable
					// fulfilled_callbacks.disable
					tuples[ 3 - i ][ 2 ].disable,

					// rejected_handlers.disable
					// fulfilled_handlers.disable
					tuples[ 3 - i ][ 3 ].disable,

					// progress_callbacks.lock
					tuples[ 0 ][ 2 ].lock,

					// progress_handlers.lock
					tuples[ 0 ][ 3 ].lock
				);
			}

			// progress_handlers.fire
			// fulfilled_handlers.fire
			// rejected_handlers.fire
			list.add( tuple[ 3 ].fire );

			// deferred.notify = function() { deferred.notifyWith(...) }
			// deferred.resolve = function() { deferred.resolveWith(...) }
			// deferred.reject = function() { deferred.rejectWith(...) }
			deferred[ tuple[ 0 ] ] = function() {
				deferred[ tuple[ 0 ] + "With" ]( this === deferred ? undefined : this, arguments );
				return this;
			};

			// deferred.notifyWith = list.fireWith
			// deferred.resolveWith = list.fireWith
			// deferred.rejectWith = list.fireWith
			deferred[ tuple[ 0 ] + "With" ] = list.fireWith;
		} );

		// Make the deferred a promise
		promise.promise( deferred );

		// Call given func if any
		if ( func ) {
			func.call( deferred, deferred );
		}

		// All done!
		return deferred;
	},

	// Deferred helper
	when: function( singleValue ) {
		var

			// count of uncompleted subordinates
			remaining = arguments.length,

			// count of unprocessed arguments
			i = remaining,

			// subordinate fulfillment data
			resolveContexts = Array( i ),
			resolveValues = slice.call( arguments ),

			// the master Deferred
			master = jQuery.Deferred(),

			// subordinate callback factory
			updateFunc = function( i ) {
				return function( value ) {
					resolveContexts[ i ] = this;
					resolveValues[ i ] = arguments.length > 1 ? slice.call( arguments ) : value;
					if ( !( --remaining ) ) {
						master.resolveWith( resolveContexts, resolveValues );
					}
				};
			};

		// Single- and empty arguments are adopted like Promise.resolve
		if ( remaining <= 1 ) {
			adoptValue( singleValue, master.done( updateFunc( i ) ).resolve, master.reject,
				!remaining );

			// Use .then() to unwrap secondary thenables (cf. gh-3000)
			if ( master.state() === "pending" ||
				isFunction( resolveValues[ i ] && resolveValues[ i ].then ) ) {

				return master.then();
			}
		}

		// Multiple arguments are aggregated like Promise.all array elements
		while ( i-- ) {
			adoptValue( resolveValues[ i ], updateFunc( i ), master.reject );
		}

		return master.promise();
	}
} );


// These usually indicate a programmer mistake during development,
// warn about them ASAP rather than swallowing them by default.
var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;

jQuery.Deferred.exceptionHook = function( error, stack ) {

	// Support: IE 8 - 9 only
	// Console exists when dev tools are open, which can happen at any time
	if ( window.console && window.console.warn && error && rerrorNames.test( error.name ) ) {
		window.console.warn( "jQuery.Deferred exception: " + error.message, error.stack, stack );
	}
};




jQuery.readyException = function( error ) {
	window.setTimeout( function() {
		throw error;
	} );
};




// The deferred used on DOM ready
var readyList = jQuery.Deferred();

jQuery.fn.ready = function( fn ) {

	readyList
		.then( fn )

		// Wrap jQuery.readyException in a function so that the lookup
		// happens at the time of error handling instead of callback
		// registration.
		.catch( function( error ) {
			jQuery.readyException( error );
		} );

	return this;
};

jQuery.extend( {

	// Is the DOM ready to be used? Set to true once it occurs.
	isReady: false,

	// A counter to track how many items to wait for before
	// the ready event fires. See #6781
	readyWait: 1,

	// Handle when the DOM is ready
	ready: function( wait ) {

		// Abort if there are pending holds or we're already ready
		if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
			return;
		}

		// Remember that the DOM is ready
		jQuery.isReady = true;

		// If a normal DOM Ready event fired, decrement, and wait if need be
		if ( wait !== true && --jQuery.readyWait > 0 ) {
			return;
		}

		// If there are functions bound, to execute
		readyList.resolveWith( document, [ jQuery ] );
	}
} );

jQuery.ready.then = readyList.then;

// The ready event handler and self cleanup method
function completed() {
	document.removeEventListener( "DOMContentLoaded", completed );
	window.removeEventListener( "load", completed );
	jQuery.ready();
}

// Catch cases where $(document).ready() is called
// after the browser event has already occurred.
// Support: IE <=9 - 10 only
// Older IE sometimes signals "interactive" too soon
if ( document.readyState === "complete" ||
	( document.readyState !== "loading" && !document.documentElement.doScroll ) ) {

	// Handle it asynchronously to allow scripts the opportunity to delay ready
	window.setTimeout( jQuery.ready );

} else {

	// Use the handy event callback
	document.addEventListener( "DOMContentLoaded", completed );

	// A fallback to window.onload, that will always work
	window.addEventListener( "load", completed );
}




// Multifunctional method to get and set values of a collection
// The value/s can optionally be executed if it's a function
var access = function( elems, fn, key, value, chainable, emptyGet, raw ) {
	var i = 0,
		len = elems.length,
		bulk = key == null;

	// Sets many values
	if ( toType( key ) === "object" ) {
		chainable = true;
		for ( i in key ) {
			access( elems, fn, i, key[ i ], true, emptyGet, raw );
		}

	// Sets one value
	} else if ( value !== undefined ) {
		chainable = true;

		if ( !isFunction( value ) ) {
			raw = true;
		}

		if ( bulk ) {

			// Bulk operations run against the entire set
			if ( raw ) {
				fn.call( elems, value );
				fn = null;

			// ...except when executing function values
			} else {
				bulk = fn;
				fn = function( elem, key, value ) {
					return bulk.call( jQuery( elem ), value );
				};
			}
		}

		if ( fn ) {
			for ( ; i < len; i++ ) {
				fn(
					elems[ i ], key, raw ?
					value :
					value.call( elems[ i ], i, fn( elems[ i ], key ) )
				);
			}
		}
	}

	if ( chainable ) {
		return elems;
	}

	// Gets
	if ( bulk ) {
		return fn.call( elems );
	}

	return len ? fn( elems[ 0 ], key ) : emptyGet;
};


// Matches dashed string for camelizing
var rmsPrefix = /^-ms-/,
	rdashAlpha = /-([a-z])/g;

// Used by camelCase as callback to replace()
function fcamelCase( all, letter ) {
	return letter.toUpperCase();
}

// Convert dashed to camelCase; used by the css and data modules
// Support: IE <=9 - 11, Edge 12 - 15
// Microsoft forgot to hump their vendor prefix (#9572)
function camelCase( string ) {
	return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
}
var acceptData = function( owner ) {

	// Accepts only:
	//  - Node
	//    - Node.ELEMENT_NODE
	//    - Node.DOCUMENT_NODE
	//  - Object
	//    - Any
	return owner.nodeType === 1 || owner.nodeType === 9 || !( +owner.nodeType );
};




function Data() {
	this.expando = jQuery.expando + Data.uid++;
}

Data.uid = 1;

Data.prototype = {

	cache: function( owner ) {

		// Check if the owner object already has a cache
		var value = owner[ this.expando ];

		// If not, create one
		if ( !value ) {
			value = {};

			// We can accept data for non-element nodes in modern browsers,
			// but we should not, see #8335.
			// Always return an empty object.
			if ( acceptData( owner ) ) {

				// If it is a node unlikely to be stringify-ed or looped over
				// use plain assignment
				if ( owner.nodeType ) {
					owner[ this.expando ] = value;

				// Otherwise secure it in a non-enumerable property
				// configurable must be true to allow the property to be
				// deleted when data is removed
				} else {
					Object.defineProperty( owner, this.expando, {
						value: value,
						configurable: true
					} );
				}
			}
		}

		return value;
	},
	set: function( owner, data, value ) {
		var prop,
			cache = this.cache( owner );

		// Handle: [ owner, key, value ] args
		// Always use camelCase key (gh-2257)
		if ( typeof data === "string" ) {
			cache[ camelCase( data ) ] = value;

		// Handle: [ owner, { properties } ] args
		} else {

			// Copy the properties one-by-one to the cache object
			for ( prop in data ) {
				cache[ camelCase( prop ) ] = data[ prop ];
			}
		}
		return cache;
	},
	get: function( owner, key ) {
		return key === undefined ?
			this.cache( owner ) :

			// Always use camelCase key (gh-2257)
			owner[ this.expando ] && owner[ this.expando ][ camelCase( key ) ];
	},
	access: function( owner, key, value ) {

		// In cases where either:
		//
		//   1. No key was specified
		//   2. A string key was specified, but no value provided
		//
		// Take the "read" path and allow the get method to determine
		// which value to return, respectively either:
		//
		//   1. The entire cache object
		//   2. The data stored at the key
		//
		if ( key === undefined ||
				( ( key && typeof key === "string" ) && value === undefined ) ) {

			return this.get( owner, key );
		}

		// When the key is not a string, or both a key and value
		// are specified, set or extend (existing objects) with either:
		//
		//   1. An object of properties
		//   2. A key and value
		//
		this.set( owner, key, value );

		// Since the "set" path can have two possible entry points
		// return the expected data based on which path was taken[*]
		return value !== undefined ? value : key;
	},
	remove: function( owner, key ) {
		var i,
			cache = owner[ this.expando ];

		if ( cache === undefined ) {
			return;
		}

		if ( key !== undefined ) {

			// Support array or space separated string of keys
			if ( Array.isArray( key ) ) {

				// If key is an array of keys...
				// We always set camelCase keys, so remove that.
				key = key.map( camelCase );
			} else {
				key = camelCase( key );

				// If a key with the spaces exists, use it.
				// Otherwise, create an array by matching non-whitespace
				key = key in cache ?
					[ key ] :
					( key.match( rnothtmlwhite ) || [] );
			}

			i = key.length;

			while ( i-- ) {
				delete cache[ key[ i ] ];
			}
		}

		// Remove the expando if there's no more data
		if ( key === undefined || jQuery.isEmptyObject( cache ) ) {

			// Support: Chrome <=35 - 45
			// Webkit & Blink performance suffers when deleting properties
			// from DOM nodes, so set to undefined instead
			// https://bugs.chromium.org/p/chromium/issues/detail?id=378607 (bug restricted)
			if ( owner.nodeType ) {
				owner[ this.expando ] = undefined;
			} else {
				delete owner[ this.expando ];
			}
		}
	},
	hasData: function( owner ) {
		var cache = owner[ this.expando ];
		return cache !== undefined && !jQuery.isEmptyObject( cache );
	}
};
var dataPriv = new Data();

var dataUser = new Data();



//	Implementation Summary
//
//	1. Enforce API surface and semantic compatibility with 1.9.x branch
//	2. Improve the module's maintainability by reducing the storage
//		paths to a single mechanism.
//	3. Use the same single mechanism to support "private" and "user" data.
//	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
//	5. Avoid exposing implementation details on user objects (eg. expando properties)
//	6. Provide a clear path for implementation upgrade to WeakMap in 2014

var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
	rmultiDash = /[A-Z]/g;

function getData( data ) {
	if ( data === "true" ) {
		return true;
	}

	if ( data === "false" ) {
		return false;
	}

	if ( data === "null" ) {
		return null;
	}

	// Only convert to a number if it doesn't change the string
	if ( data === +data + "" ) {
		return +data;
	}

	if ( rbrace.test( data ) ) {
		return JSON.parse( data );
	}

	return data;
}

function dataAttr( elem, key, data ) {
	var name;

	// If nothing was found internally, try to fetch any
	// data from the HTML5 data-* attribute
	if ( data === undefined && elem.nodeType === 1 ) {
		name = "data-" + key.replace( rmultiDash, "-$&" ).toLowerCase();
		data = elem.getAttribute( name );

		if ( typeof data === "string" ) {
			try {
				data = getData( data );
			} catch ( e ) {}

			// Make sure we set the data so it isn't changed later
			dataUser.set( elem, key, data );
		} else {
			data = undefined;
		}
	}
	return data;
}

jQuery.extend( {
	hasData: function( elem ) {
		return dataUser.hasData( elem ) || dataPriv.hasData( elem );
	},

	data: function( elem, name, data ) {
		return dataUser.access( elem, name, data );
	},

	removeData: function( elem, name ) {
		dataUser.remove( elem, name );
	},

	// TODO: Now that all calls to _data and _removeData have been replaced
	// with direct calls to dataPriv methods, these can be deprecated.
	_data: function( elem, name, data ) {
		return dataPriv.access( elem, name, data );
	},

	_removeData: function( elem, name ) {
		dataPriv.remove( elem, name );
	}
} );

jQuery.fn.extend( {
	data: function( key, value ) {
		var i, name, data,
			elem = this[ 0 ],
			attrs = elem && elem.attributes;

		// Gets all values
		if ( key === undefined ) {
			if ( this.length ) {
				data = dataUser.get( elem );

				if ( elem.nodeType === 1 && !dataPriv.get( elem, "hasDataAttrs" ) ) {
					i = attrs.length;
					while ( i-- ) {

						// Support: IE 11 only
						// The attrs elements can be null (#14894)
						if ( attrs[ i ] ) {
							name = attrs[ i ].name;
							if ( name.indexOf( "data-" ) === 0 ) {
								name = camelCase( name.slice( 5 ) );
								dataAttr( elem, name, data[ name ] );
							}
						}
					}
					dataPriv.set( elem, "hasDataAttrs", true );
				}
			}

			return data;
		}

		// Sets multiple values
		if ( typeof key === "object" ) {
			return this.each( function() {
				dataUser.set( this, key );
			} );
		}

		return access( this, function( value ) {
			var data;

			// The calling jQuery object (element matches) is not empty
			// (and therefore has an element appears at this[ 0 ]) and the
			// `value` parameter was not undefined. An empty jQuery object
			// will result in `undefined` for elem = this[ 0 ] which will
			// throw an exception if an attempt to read a data cache is made.
			if ( elem && value === undefined ) {

				// Attempt to get data from the cache
				// The key will always be camelCased in Data
				data = dataUser.get( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// Attempt to "discover" the data in
				// HTML5 custom data-* attrs
				data = dataAttr( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// We tried really hard, but the data doesn't exist.
				return;
			}

			// Set the data...
			this.each( function() {

				// We always store the camelCased key
				dataUser.set( this, key, value );
			} );
		}, null, value, arguments.length > 1, null, true );
	},

	removeData: function( key ) {
		return this.each( function() {
			dataUser.remove( this, key );
		} );
	}
} );


jQuery.extend( {
	queue: function( elem, type, data ) {
		var queue;

		if ( elem ) {
			type = ( type || "fx" ) + "queue";
			queue = dataPriv.get( elem, type );

			// Speed up dequeue by getting out quickly if this is just a lookup
			if ( data ) {
				if ( !queue || Array.isArray( data ) ) {
					queue = dataPriv.access( elem, type, jQuery.makeArray( data ) );
				} else {
					queue.push( data );
				}
			}
			return queue || [];
		}
	},

	dequeue: function( elem, type ) {
		type = type || "fx";

		var queue = jQuery.queue( elem, type ),
			startLength = queue.length,
			fn = queue.shift(),
			hooks = jQuery._queueHooks( elem, type ),
			next = function() {
				jQuery.dequeue( elem, type );
			};

		// If the fx queue is dequeued, always remove the progress sentinel
		if ( fn === "inprogress" ) {
			fn = queue.shift();
			startLength--;
		}

		if ( fn ) {

			// Add a progress sentinel to prevent the fx queue from being
			// automatically dequeued
			if ( type === "fx" ) {
				queue.unshift( "inprogress" );
			}

			// Clear up the last queue stop function
			delete hooks.stop;
			fn.call( elem, next, hooks );
		}

		if ( !startLength && hooks ) {
			hooks.empty.fire();
		}
	},

	// Not public - generate a queueHooks object, or return the current one
	_queueHooks: function( elem, type ) {
		var key = type + "queueHooks";
		return dataPriv.get( elem, key ) || dataPriv.access( elem, key, {
			empty: jQuery.Callbacks( "once memory" ).add( function() {
				dataPriv.remove( elem, [ type + "queue", key ] );
			} )
		} );
	}
} );

jQuery.fn.extend( {
	queue: function( type, data ) {
		var setter = 2;

		if ( typeof type !== "string" ) {
			data = type;
			type = "fx";
			setter--;
		}

		if ( arguments.length < setter ) {
			return jQuery.queue( this[ 0 ], type );
		}

		return data === undefined ?
			this :
			this.each( function() {
				var queue = jQuery.queue( this, type, data );

				// Ensure a hooks for this queue
				jQuery._queueHooks( this, type );

				if ( type === "fx" && queue[ 0 ] !== "inprogress" ) {
					jQuery.dequeue( this, type );
				}
			} );
	},
	dequeue: function( type ) {
		return this.each( function() {
			jQuery.dequeue( this, type );
		} );
	},
	clearQueue: function( type ) {
		return this.queue( type || "fx", [] );
	},

	// Get a promise resolved when queues of a certain type
	// are emptied (fx is the type by default)
	promise: function( type, obj ) {
		var tmp,
			count = 1,
			defer = jQuery.Deferred(),
			elements = this,
			i = this.length,
			resolve = function() {
				if ( !( --count ) ) {
					defer.resolveWith( elements, [ elements ] );
				}
			};

		if ( typeof type !== "string" ) {
			obj = type;
			type = undefined;
		}
		type = type || "fx";

		while ( i-- ) {
			tmp = dataPriv.get( elements[ i ], type + "queueHooks" );
			if ( tmp && tmp.empty ) {
				count++;
				tmp.empty.add( resolve );
			}
		}
		resolve();
		return defer.promise( obj );
	}
} );
var pnum = ( /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/ ).source;

var rcssNum = new RegExp( "^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i" );


var cssExpand = [ "Top", "Right", "Bottom", "Left" ];

var documentElement = document.documentElement;



	var isAttached = function( elem ) {
			return jQuery.contains( elem.ownerDocument, elem );
		},
		composed = { composed: true };

	// Support: IE 9 - 11+, Edge 12 - 18+, iOS 10.0 - 10.2 only
	// Check attachment across shadow DOM boundaries when possible (gh-3504)
	// Support: iOS 10.0-10.2 only
	// Early iOS 10 versions support `attachShadow` but not `getRootNode`,
	// leading to errors. We need to check for `getRootNode`.
	if ( documentElement.getRootNode ) {
		isAttached = function( elem ) {
			return jQuery.contains( elem.ownerDocument, elem ) ||
				elem.getRootNode( composed ) === elem.ownerDocument;
		};
	}
var isHiddenWithinTree = function( elem, el ) {

		// isHiddenWithinTree might be called from jQuery#filter function;
		// in that case, element will be second argument
		elem = el || elem;

		// Inline style trumps all
		return elem.style.display === "none" ||
			elem.style.display === "" &&

			// Otherwise, check computed style
			// Support: Firefox <=43 - 45
			// Disconnected elements can have computed display: none, so first confirm that elem is
			// in the document.
			isAttached( elem ) &&

			jQuery.css( elem, "display" ) === "none";
	};

var swap = function( elem, options, callback, args ) {
	var ret, name,
		old = {};

	// Remember the old values, and insert the new ones
	for ( name in options ) {
		old[ name ] = elem.style[ name ];
		elem.style[ name ] = options[ name ];
	}

	ret = callback.apply( elem, args || [] );

	// Revert the old values
	for ( name in options ) {
		elem.style[ name ] = old[ name ];
	}

	return ret;
};




function adjustCSS( elem, prop, valueParts, tween ) {
	var adjusted, scale,
		maxIterations = 20,
		currentValue = tween ?
			function() {
				return tween.cur();
			} :
			function() {
				return jQuery.css( elem, prop, "" );
			},
		initial = currentValue(),
		unit = valueParts && valueParts[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),

		// Starting value computation is required for potential unit mismatches
		initialInUnit = elem.nodeType &&
			( jQuery.cssNumber[ prop ] || unit !== "px" && +initial ) &&
			rcssNum.exec( jQuery.css( elem, prop ) );

	if ( initialInUnit && initialInUnit[ 3 ] !== unit ) {

		// Support: Firefox <=54
		// Halve the iteration target value to prevent interference from CSS upper bounds (gh-2144)
		initial = initial / 2;

		// Trust units reported by jQuery.css
		unit = unit || initialInUnit[ 3 ];

		// Iteratively approximate from a nonzero starting point
		initialInUnit = +initial || 1;

		while ( maxIterations-- ) {

			// Evaluate and update our best guess (doubling guesses that zero out).
			// Finish if the scale equals or crosses 1 (making the old*new product non-positive).
			jQuery.style( elem, prop, initialInUnit + unit );
			if ( ( 1 - scale ) * ( 1 - ( scale = currentValue() / initial || 0.5 ) ) <= 0 ) {
				maxIterations = 0;
			}
			initialInUnit = initialInUnit / scale;

		}

		initialInUnit = initialInUnit * 2;
		jQuery.style( elem, prop, initialInUnit + unit );

		// Make sure we update the tween properties later on
		valueParts = valueParts || [];
	}

	if ( valueParts ) {
		initialInUnit = +initialInUnit || +initial || 0;

		// Apply relative offset (+=/-=) if specified
		adjusted = valueParts[ 1 ] ?
			initialInUnit + ( valueParts[ 1 ] + 1 ) * valueParts[ 2 ] :
			+valueParts[ 2 ];
		if ( tween ) {
			tween.unit = unit;
			tween.start = initialInUnit;
			tween.end = adjusted;
		}
	}
	return adjusted;
}


var defaultDisplayMap = {};

function getDefaultDisplay( elem ) {
	var temp,
		doc = elem.ownerDocument,
		nodeName = elem.nodeName,
		display = defaultDisplayMap[ nodeName ];

	if ( display ) {
		return display;
	}

	temp = doc.body.appendChild( doc.createElement( nodeName ) );
	display = jQuery.css( temp, "display" );

	temp.parentNode.removeChild( temp );

	if ( display === "none" ) {
		display = "block";
	}
	defaultDisplayMap[ nodeName ] = display;

	return display;
}

function showHide( elements, show ) {
	var display, elem,
		values = [],
		index = 0,
		length = elements.length;

	// Determine new display value for elements that need to change
	for ( ; index < length; index++ ) {
		elem = elements[ index ];
		if ( !elem.style ) {
			continue;
		}

		display = elem.style.display;
		if ( show ) {

			// Since we force visibility upon cascade-hidden elements, an immediate (and slow)
			// check is required in this first loop unless we have a nonempty display value (either
			// inline or about-to-be-restored)
			if ( display === "none" ) {
				values[ index ] = dataPriv.get( elem, "display" ) || null;
				if ( !values[ index ] ) {
					elem.style.display = "";
				}
			}
			if ( elem.style.display === "" && isHiddenWithinTree( elem ) ) {
				values[ index ] = getDefaultDisplay( elem );
			}
		} else {
			if ( display !== "none" ) {
				values[ index ] = "none";

				// Remember what we're overwriting
				dataPriv.set( elem, "display", display );
			}
		}
	}

	// Set the display of the elements in a second loop to avoid constant reflow
	for ( index = 0; index < length; index++ ) {
		if ( values[ index ] != null ) {
			elements[ index ].style.display = values[ index ];
		}
	}

	return elements;
}

jQuery.fn.extend( {
	show: function() {
		return showHide( this, true );
	},
	hide: function() {
		return showHide( this );
	},
	toggle: function( state ) {
		if ( typeof state === "boolean" ) {
			return state ? this.show() : this.hide();
		}

		return this.each( function() {
			if ( isHiddenWithinTree( this ) ) {
				jQuery( this ).show();
			} else {
				jQuery( this ).hide();
			}
		} );
	}
} );
var rcheckableType = ( /^(?:checkbox|radio)$/i );

var rtagName = ( /<([a-z][^\/\0>\x20\t\r\n\f]*)/i );

var rscriptType = ( /^$|^module$|\/(?:java|ecma)script/i );



// We have to close these tags to support XHTML (#13200)
var wrapMap = {

	// Support: IE <=9 only
	option: [ 1, "<select multiple='multiple'>", "</select>" ],

	// XHTML parsers do not magically insert elements in the
	// same way that tag soup parsers do. So we cannot shorten
	// this by omitting <tbody> or other required elements.
	thead: [ 1, "<table>", "</table>" ],
	col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
	tr: [ 2, "<table><tbody>", "</tbody></table>" ],
	td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],

	_default: [ 0, "", "" ]
};

// Support: IE <=9 only
wrapMap.optgroup = wrapMap.option;

wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
wrapMap.th = wrapMap.td;


function getAll( context, tag ) {

	// Support: IE <=9 - 11 only
	// Use typeof to avoid zero-argument method invocation on host objects (#15151)
	var ret;

	if ( typeof context.getElementsByTagName !== "undefined" ) {
		ret = context.getElementsByTagName( tag || "*" );

	} else if ( typeof context.querySelectorAll !== "undefined" ) {
		ret = context.querySelectorAll( tag || "*" );

	} else {
		ret = [];
	}

	if ( tag === undefined || tag && nodeName( context, tag ) ) {
		return jQuery.merge( [ context ], ret );
	}

	return ret;
}


// Mark scripts as having already been evaluated
function setGlobalEval( elems, refElements ) {
	var i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		dataPriv.set(
			elems[ i ],
			"globalEval",
			!refElements || dataPriv.get( refElements[ i ], "globalEval" )
		);
	}
}


var rhtml = /<|&#?\w+;/;

function buildFragment( elems, context, scripts, selection, ignored ) {
	var elem, tmp, tag, wrap, attached, j,
		fragment = context.createDocumentFragment(),
		nodes = [],
		i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		elem = elems[ i ];

		if ( elem || elem === 0 ) {

			// Add nodes directly
			if ( toType( elem ) === "object" ) {

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );

			// Convert non-html into a text node
			} else if ( !rhtml.test( elem ) ) {
				nodes.push( context.createTextNode( elem ) );

			// Convert html into DOM nodes
			} else {
				tmp = tmp || fragment.appendChild( context.createElement( "div" ) );

				// Deserialize a standard representation
				tag = ( rtagName.exec( elem ) || [ "", "" ] )[ 1 ].toLowerCase();
				wrap = wrapMap[ tag ] || wrapMap._default;
				tmp.innerHTML = wrap[ 1 ] + jQuery.htmlPrefilter( elem ) + wrap[ 2 ];

				// Descend through wrappers to the right content
				j = wrap[ 0 ];
				while ( j-- ) {
					tmp = tmp.lastChild;
				}

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, tmp.childNodes );

				// Remember the top-level container
				tmp = fragment.firstChild;

				// Ensure the created nodes are orphaned (#12392)
				tmp.textContent = "";
			}
		}
	}

	// Remove wrapper from fragment
	fragment.textContent = "";

	i = 0;
	while ( ( elem = nodes[ i++ ] ) ) {

		// Skip elements already in the context collection (trac-4087)
		if ( selection && jQuery.inArray( elem, selection ) > -1 ) {
			if ( ignored ) {
				ignored.push( elem );
			}
			continue;
		}

		attached = isAttached( elem );

		// Append to fragment
		tmp = getAll( fragment.appendChild( elem ), "script" );

		// Preserve script evaluation history
		if ( attached ) {
			setGlobalEval( tmp );
		}

		// Capture executables
		if ( scripts ) {
			j = 0;
			while ( ( elem = tmp[ j++ ] ) ) {
				if ( rscriptType.test( elem.type || "" ) ) {
					scripts.push( elem );
				}
			}
		}
	}

	return fragment;
}


( function() {
	var fragment = document.createDocumentFragment(),
		div = fragment.appendChild( document.createElement( "div" ) ),
		input = document.createElement( "input" );

	// Support: Android 4.0 - 4.3 only
	// Check state lost if the name is set (#11217)
	// Support: Windows Web Apps (WWA)
	// `name` and `type` must use .setAttribute for WWA (#14901)
	input.setAttribute( "type", "radio" );
	input.setAttribute( "checked", "checked" );
	input.setAttribute( "name", "t" );

	div.appendChild( input );

	// Support: Android <=4.1 only
	// Older WebKit doesn't clone checked state correctly in fragments
	support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;

	// Support: IE <=11 only
	// Make sure textarea (and checkbox) defaultValue is properly cloned
	div.innerHTML = "<textarea>x</textarea>";
	support.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;
} )();


var
	rkeyEvent = /^key/,
	rmouseEvent = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
	rtypenamespace = /^([^.]*)(?:\.(.+)|)/;

function returnTrue() {
	return true;
}

function returnFalse() {
	return false;
}

// Support: IE <=9 - 11+
// focus() and blur() are asynchronous, except when they are no-op.
// So expect focus to be synchronous when the element is already active,
// and blur to be synchronous when the element is not already active.
// (focus and blur are always synchronous in other supported browsers,
// this just defines when we can count on it).
function expectSync( elem, type ) {
	return ( elem === safeActiveElement() ) === ( type === "focus" );
}

// Support: IE <=9 only
// Accessing document.activeElement can throw unexpectedly
// https://bugs.jquery.com/ticket/13393
function safeActiveElement() {
	try {
		return document.activeElement;
	} catch ( err ) { }
}

function on( elem, types, selector, data, fn, one ) {
	var origFn, type;

	// Types can be a map of types/handlers
	if ( typeof types === "object" ) {

		// ( types-Object, selector, data )
		if ( typeof selector !== "string" ) {

			// ( types-Object, data )
			data = data || selector;
			selector = undefined;
		}
		for ( type in types ) {
			on( elem, type, selector, data, types[ type ], one );
		}
		return elem;
	}

	if ( data == null && fn == null ) {

		// ( types, fn )
		fn = selector;
		data = selector = undefined;
	} else if ( fn == null ) {
		if ( typeof selector === "string" ) {

			// ( types, selector, fn )
			fn = data;
			data = undefined;
		} else {

			// ( types, data, fn )
			fn = data;
			data = selector;
			selector = undefined;
		}
	}
	if ( fn === false ) {
		fn = returnFalse;
	} else if ( !fn ) {
		return elem;
	}

	if ( one === 1 ) {
		origFn = fn;
		fn = function( event ) {

			// Can use an empty set, since event contains the info
			jQuery().off( event );
			return origFn.apply( this, arguments );
		};

		// Use same guid so caller can remove using origFn
		fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
	}
	return elem.each( function() {
		jQuery.event.add( this, types, fn, data, selector );
	} );
}

/*
 * Helper functions for managing events -- not part of the public interface.
 * Props to Dean Edwards' addEvent library for many of the ideas.
 */
jQuery.event = {

	global: {},

	add: function( elem, types, handler, data, selector ) {

		var handleObjIn, eventHandle, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.get( elem );

		// Don't attach events to noData or text/comment nodes (but allow plain objects)
		if ( !elemData ) {
			return;
		}

		// Caller can pass in an object of custom data in lieu of the handler
		if ( handler.handler ) {
			handleObjIn = handler;
			handler = handleObjIn.handler;
			selector = handleObjIn.selector;
		}

		// Ensure that invalid selectors throw exceptions at attach time
		// Evaluate against documentElement in case elem is a non-element node (e.g., document)
		if ( selector ) {
			jQuery.find.matchesSelector( documentElement, selector );
		}

		// Make sure that the handler has a unique ID, used to find/remove it later
		if ( !handler.guid ) {
			handler.guid = jQuery.guid++;
		}

		// Init the element's event structure and main handler, if this is the first
		if ( !( events = elemData.events ) ) {
			events = elemData.events = {};
		}
		if ( !( eventHandle = elemData.handle ) ) {
			eventHandle = elemData.handle = function( e ) {

				// Discard the second event of a jQuery.event.trigger() and
				// when an event is called after a page has unloaded
				return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ?
					jQuery.event.dispatch.apply( elem, arguments ) : undefined;
			};
		}

		// Handle multiple events separated by a space
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// There *must* be a type, no attaching namespace-only handlers
			if ( !type ) {
				continue;
			}

			// If event changes its type, use the special event handlers for the changed type
			special = jQuery.event.special[ type ] || {};

			// If selector defined, determine special event api type, otherwise given type
			type = ( selector ? special.delegateType : special.bindType ) || type;

			// Update special based on newly reset type
			special = jQuery.event.special[ type ] || {};

			// handleObj is passed to all event handlers
			handleObj = jQuery.extend( {
				type: type,
				origType: origType,
				data: data,
				handler: handler,
				guid: handler.guid,
				selector: selector,
				needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
				namespace: namespaces.join( "." )
			}, handleObjIn );

			// Init the event handler queue if we're the first
			if ( !( handlers = events[ type ] ) ) {
				handlers = events[ type ] = [];
				handlers.delegateCount = 0;

				// Only use addEventListener if the special events handler returns false
				if ( !special.setup ||
					special.setup.call( elem, data, namespaces, eventHandle ) === false ) {

					if ( elem.addEventListener ) {
						elem.addEventListener( type, eventHandle );
					}
				}
			}

			if ( special.add ) {
				special.add.call( elem, handleObj );

				if ( !handleObj.handler.guid ) {
					handleObj.handler.guid = handler.guid;
				}
			}

			// Add to the element's handler list, delegates in front
			if ( selector ) {
				handlers.splice( handlers.delegateCount++, 0, handleObj );
			} else {
				handlers.push( handleObj );
			}

			// Keep track of which events have ever been used, for event optimization
			jQuery.event.global[ type ] = true;
		}

	},

	// Detach an event or set of events from an element
	remove: function( elem, types, handler, selector, mappedTypes ) {

		var j, origCount, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.hasData( elem ) && dataPriv.get( elem );

		if ( !elemData || !( events = elemData.events ) ) {
			return;
		}

		// Once for each type.namespace in types; type may be omitted
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// Unbind all events (on this namespace, if provided) for the element
			if ( !type ) {
				for ( type in events ) {
					jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
				}
				continue;
			}

			special = jQuery.event.special[ type ] || {};
			type = ( selector ? special.delegateType : special.bindType ) || type;
			handlers = events[ type ] || [];
			tmp = tmp[ 2 ] &&
				new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" );

			// Remove matching events
			origCount = j = handlers.length;
			while ( j-- ) {
				handleObj = handlers[ j ];

				if ( ( mappedTypes || origType === handleObj.origType ) &&
					( !handler || handler.guid === handleObj.guid ) &&
					( !tmp || tmp.test( handleObj.namespace ) ) &&
					( !selector || selector === handleObj.selector ||
						selector === "**" && handleObj.selector ) ) {
					handlers.splice( j, 1 );

					if ( handleObj.selector ) {
						handlers.delegateCount--;
					}
					if ( special.remove ) {
						special.remove.call( elem, handleObj );
					}
				}
			}

			// Remove generic event handler if we removed something and no more handlers exist
			// (avoids potential for endless recursion during removal of special event handlers)
			if ( origCount && !handlers.length ) {
				if ( !special.teardown ||
					special.teardown.call( elem, namespaces, elemData.handle ) === false ) {

					jQuery.removeEvent( elem, type, elemData.handle );
				}

				delete events[ type ];
			}
		}

		// Remove data and the expando if it's no longer used
		if ( jQuery.isEmptyObject( events ) ) {
			dataPriv.remove( elem, "handle events" );
		}
	},

	dispatch: function( nativeEvent ) {

		// Make a writable jQuery.Event from the native event object
		var event = jQuery.event.fix( nativeEvent );

		var i, j, ret, matched, handleObj, handlerQueue,
			args = new Array( arguments.length ),
			handlers = ( dataPriv.get( this, "events" ) || {} )[ event.type ] || [],
			special = jQuery.event.special[ event.type ] || {};

		// Use the fix-ed jQuery.Event rather than the (read-only) native event
		args[ 0 ] = event;

		for ( i = 1; i < arguments.length; i++ ) {
			args[ i ] = arguments[ i ];
		}

		event.delegateTarget = this;

		// Call the preDispatch hook for the mapped type, and let it bail if desired
		if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
			return;
		}

		// Determine handlers
		handlerQueue = jQuery.event.handlers.call( this, event, handlers );

		// Run delegates first; they may want to stop propagation beneath us
		i = 0;
		while ( ( matched = handlerQueue[ i++ ] ) && !event.isPropagationStopped() ) {
			event.currentTarget = matched.elem;

			j = 0;
			while ( ( handleObj = matched.handlers[ j++ ] ) &&
				!event.isImmediatePropagationStopped() ) {

				// If the event is namespaced, then each handler is only invoked if it is
				// specially universal or its namespaces are a superset of the event's.
				if ( !event.rnamespace || handleObj.namespace === false ||
					event.rnamespace.test( handleObj.namespace ) ) {

					event.handleObj = handleObj;
					event.data = handleObj.data;

					ret = ( ( jQuery.event.special[ handleObj.origType ] || {} ).handle ||
						handleObj.handler ).apply( matched.elem, args );

					if ( ret !== undefined ) {
						if ( ( event.result = ret ) === false ) {
							event.preventDefault();
							event.stopPropagation();
						}
					}
				}
			}
		}

		// Call the postDispatch hook for the mapped type
		if ( special.postDispatch ) {
			special.postDispatch.call( this, event );
		}

		return event.result;
	},

	handlers: function( event, handlers ) {
		var i, handleObj, sel, matchedHandlers, matchedSelectors,
			handlerQueue = [],
			delegateCount = handlers.delegateCount,
			cur = event.target;

		// Find delegate handlers
		if ( delegateCount &&

			// Support: IE <=9
			// Black-hole SVG <use> instance trees (trac-13180)
			cur.nodeType &&

			// Support: Firefox <=42
			// Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
			// https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
			// Support: IE 11 only
			// ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)
			!( event.type === "click" && event.button >= 1 ) ) {

			for ( ; cur !== this; cur = cur.parentNode || this ) {

				// Don't check non-elements (#13208)
				// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
				if ( cur.nodeType === 1 && !( event.type === "click" && cur.disabled === true ) ) {
					matchedHandlers = [];
					matchedSelectors = {};
					for ( i = 0; i < delegateCount; i++ ) {
						handleObj = handlers[ i ];

						// Don't conflict with Object.prototype properties (#13203)
						sel = handleObj.selector + " ";

						if ( matchedSelectors[ sel ] === undefined ) {
							matchedSelectors[ sel ] = handleObj.needsContext ?
								jQuery( sel, this ).index( cur ) > -1 :
								jQuery.find( sel, this, null, [ cur ] ).length;
						}
						if ( matchedSelectors[ sel ] ) {
							matchedHandlers.push( handleObj );
						}
					}
					if ( matchedHandlers.length ) {
						handlerQueue.push( { elem: cur, handlers: matchedHandlers } );
					}
				}
			}
		}

		// Add the remaining (directly-bound) handlers
		cur = this;
		if ( delegateCount < handlers.length ) {
			handlerQueue.push( { elem: cur, handlers: handlers.slice( delegateCount ) } );
		}

		return handlerQueue;
	},

	addProp: function( name, hook ) {
		Object.defineProperty( jQuery.Event.prototype, name, {
			enumerable: true,
			configurable: true,

			get: isFunction( hook ) ?
				function() {
					if ( this.originalEvent ) {
							return hook( this.originalEvent );
					}
				} :
				function() {
					if ( this.originalEvent ) {
							return this.originalEvent[ name ];
					}
				},

			set: function( value ) {
				Object.defineProperty( this, name, {
					enumerable: true,
					configurable: true,
					writable: true,
					value: value
				} );
			}
		} );
	},

	fix: function( originalEvent ) {
		return originalEvent[ jQuery.expando ] ?
			originalEvent :
			new jQuery.Event( originalEvent );
	},

	special: {
		load: {

			// Prevent triggered image.load events from bubbling to window.load
			noBubble: true
		},
		click: {

			// Utilize native event to ensure correct state for checkable inputs
			setup: function( data ) {

				// For mutual compressibility with _default, replace `this` access with a local var.
				// `|| data` is dead code meant only to preserve the variable through minification.
				var el = this || data;

				// Claim the first handler
				if ( rcheckableType.test( el.type ) &&
					el.click && nodeName( el, "input" ) ) {

					// dataPriv.set( el, "click", ... )
					leverageNative( el, "click", returnTrue );
				}

				// Return false to allow normal processing in the caller
				return false;
			},
			trigger: function( data ) {

				// For mutual compressibility with _default, replace `this` access with a local var.
				// `|| data` is dead code meant only to preserve the variable through minification.
				var el = this || data;

				// Force setup before triggering a click
				if ( rcheckableType.test( el.type ) &&
					el.click && nodeName( el, "input" ) ) {

					leverageNative( el, "click" );
				}

				// Return non-false to allow normal event-path propagation
				return true;
			},

			// For cross-browser consistency, suppress native .click() on links
			// Also prevent it if we're currently inside a leveraged native-event stack
			_default: function( event ) {
				var target = event.target;
				return rcheckableType.test( target.type ) &&
					target.click && nodeName( target, "input" ) &&
					dataPriv.get( target, "click" ) ||
					nodeName( target, "a" );
			}
		},

		beforeunload: {
			postDispatch: function( event ) {

				// Support: Firefox 20+
				// Firefox doesn't alert if the returnValue field is not set.
				if ( event.result !== undefined && event.originalEvent ) {
					event.originalEvent.returnValue = event.result;
				}
			}
		}
	}
};

// Ensure the presence of an event listener that handles manually-triggered
// synthetic events by interrupting progress until reinvoked in response to
// *native* events that it fires directly, ensuring that state changes have
// already occurred before other listeners are invoked.
function leverageNative( el, type, expectSync ) {

	// Missing expectSync indicates a trigger call, which must force setup through jQuery.event.add
	if ( !expectSync ) {
		if ( dataPriv.get( el, type ) === undefined ) {
			jQuery.event.add( el, type, returnTrue );
		}
		return;
	}

	// Register the controller as a special universal handler for all event namespaces
	dataPriv.set( el, type, false );
	jQuery.event.add( el, type, {
		namespace: false,
		handler: function( event ) {
			var notAsync, result,
				saved = dataPriv.get( this, type );

			if ( ( event.isTrigger & 1 ) && this[ type ] ) {

				// Interrupt processing of the outer synthetic .trigger()ed event
				// Saved data should be false in such cases, but might be a leftover capture object
				// from an async native handler (gh-4350)
				if ( !saved.length ) {

					// Store arguments for use when handling the inner native event
					// There will always be at least one argument (an event object), so this array
					// will not be confused with a leftover capture object.
					saved = slice.call( arguments );
					dataPriv.set( this, type, saved );

					// Trigger the native event and capture its result
					// Support: IE <=9 - 11+
					// focus() and blur() are asynchronous
					notAsync = expectSync( this, type );
					this[ type ]();
					result = dataPriv.get( this, type );
					if ( saved !== result || notAsync ) {
						dataPriv.set( this, type, false );
					} else {
						result = {};
					}
					if ( saved !== result ) {

						// Cancel the outer synthetic event
						event.stopImmediatePropagation();
						event.preventDefault();
						return result.value;
					}

				// If this is an inner synthetic event for an event with a bubbling surrogate
				// (focus or blur), assume that the surrogate already propagated from triggering the
				// native event and prevent that from happening again here.
				// This technically gets the ordering wrong w.r.t. to `.trigger()` (in which the
				// bubbling surrogate propagates *after* the non-bubbling base), but that seems
				// less bad than duplication.
				} else if ( ( jQuery.event.special[ type ] || {} ).delegateType ) {
					event.stopPropagation();
				}

			// If this is a native event triggered above, everything is now in order
			// Fire an inner synthetic event with the original arguments
			} else if ( saved.length ) {

				// ...and capture the result
				dataPriv.set( this, type, {
					value: jQuery.event.trigger(

						// Support: IE <=9 - 11+
						// Extend with the prototype to reset the above stopImmediatePropagation()
						jQuery.extend( saved[ 0 ], jQuery.Event.prototype ),
						saved.slice( 1 ),
						this
					)
				} );

				// Abort handling of the native event
				event.stopImmediatePropagation();
			}
		}
	} );
}

jQuery.removeEvent = function( elem, type, handle ) {

	// This "if" is needed for plain objects
	if ( elem.removeEventListener ) {
		elem.removeEventListener( type, handle );
	}
};

jQuery.Event = function( src, props ) {

	// Allow instantiation without the 'new' keyword
	if ( !( this instanceof jQuery.Event ) ) {
		return new jQuery.Event( src, props );
	}

	// Event object
	if ( src && src.type ) {
		this.originalEvent = src;
		this.type = src.type;

		// Events bubbling up the document may have been marked as prevented
		// by a handler lower down the tree; reflect the correct value.
		this.isDefaultPrevented = src.defaultPrevented ||
				src.defaultPrevented === undefined &&

				// Support: Android <=2.3 only
				src.returnValue === false ?
			returnTrue :
			returnFalse;

		// Create target properties
		// Support: Safari <=6 - 7 only
		// Target should not be a text node (#504, #13143)
		this.target = ( src.target && src.target.nodeType === 3 ) ?
			src.target.parentNode :
			src.target;

		this.currentTarget = src.currentTarget;
		this.relatedTarget = src.relatedTarget;

	// Event type
	} else {
		this.type = src;
	}

	// Put explicitly provided properties onto the event object
	if ( props ) {
		jQuery.extend( this, props );
	}

	// Create a timestamp if incoming event doesn't have one
	this.timeStamp = src && src.timeStamp || Date.now();

	// Mark it as fixed
	this[ jQuery.expando ] = true;
};

// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
// https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
jQuery.Event.prototype = {
	constructor: jQuery.Event,
	isDefaultPrevented: returnFalse,
	isPropagationStopped: returnFalse,
	isImmediatePropagationStopped: returnFalse,
	isSimulated: false,

	preventDefault: function() {
		var e = this.originalEvent;

		this.isDefaultPrevented = returnTrue;

		if ( e && !this.isSimulated ) {
			e.preventDefault();
		}
	},
	stopPropagation: function() {
		var e = this.originalEvent;

		this.isPropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopPropagation();
		}
	},
	stopImmediatePropagation: function() {
		var e = this.originalEvent;

		this.isImmediatePropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopImmediatePropagation();
		}

		this.stopPropagation();
	}
};

// Includes all common event props including KeyEvent and MouseEvent specific props
jQuery.each( {
	altKey: true,
	bubbles: true,
	cancelable: true,
	changedTouches: true,
	ctrlKey: true,
	detail: true,
	eventPhase: true,
	metaKey: true,
	pageX: true,
	pageY: true,
	shiftKey: true,
	view: true,
	"char": true,
	code: true,
	charCode: true,
	key: true,
	keyCode: true,
	button: true,
	buttons: true,
	clientX: true,
	clientY: true,
	offsetX: true,
	offsetY: true,
	pointerId: true,
	pointerType: true,
	screenX: true,
	screenY: true,
	targetTouches: true,
	toElement: true,
	touches: true,

	which: function( event ) {
		var button = event.button;

		// Add which for key events
		if ( event.which == null && rkeyEvent.test( event.type ) ) {
			return event.charCode != null ? event.charCode : event.keyCode;
		}

		// Add which for click: 1 === left; 2 === middle; 3 === right
		if ( !event.which && button !== undefined && rmouseEvent.test( event.type ) ) {
			if ( button & 1 ) {
				return 1;
			}

			if ( button & 2 ) {
				return 3;
			}

			if ( button & 4 ) {
				return 2;
			}

			return 0;
		}

		return event.which;
	}
}, jQuery.event.addProp );

jQuery.each( { focus: "focusin", blur: "focusout" }, function( type, delegateType ) {
	jQuery.event.special[ type ] = {

		// Utilize native event if possible so blur/focus sequence is correct
		setup: function() {

			// Claim the first handler
			// dataPriv.set( this, "focus", ... )
			// dataPriv.set( this, "blur", ... )
			leverageNative( this, type, expectSync );

			// Return false to allow normal processing in the caller
			return false;
		},
		trigger: function() {

			// Force setup before trigger
			leverageNative( this, type );

			// Return non-false to allow normal event-path propagation
			return true;
		},

		delegateType: delegateType
	};
} );

// Create mouseenter/leave events using mouseover/out and event-time checks
// so that event delegation works in jQuery.
// Do the same for pointerenter/pointerleave and pointerover/pointerout
//
// Support: Safari 7 only
// Safari sends mouseenter too often; see:
// https://bugs.chromium.org/p/chromium/issues/detail?id=470258
// for the description of the bug (it existed in older Chrome versions as well).
jQuery.each( {
	mouseenter: "mouseover",
	mouseleave: "mouseout",
	pointerenter: "pointerover",
	pointerleave: "pointerout"
}, function( orig, fix ) {
	jQuery.event.special[ orig ] = {
		delegateType: fix,
		bindType: fix,

		handle: function( event ) {
			var ret,
				target = this,
				related = event.relatedTarget,
				handleObj = event.handleObj;

			// For mouseenter/leave call the handler if related is outside the target.
			// NB: No relatedTarget if the mouse left/entered the browser window
			if ( !related || ( related !== target && !jQuery.contains( target, related ) ) ) {
				event.type = handleObj.origType;
				ret = handleObj.handler.apply( this, arguments );
				event.type = fix;
			}
			return ret;
		}
	};
} );

jQuery.fn.extend( {

	on: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn );
	},
	one: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn, 1 );
	},
	off: function( types, selector, fn ) {
		var handleObj, type;
		if ( types && types.preventDefault && types.handleObj ) {

			// ( event )  dispatched jQuery.Event
			handleObj = types.handleObj;
			jQuery( types.delegateTarget ).off(
				handleObj.namespace ?
					handleObj.origType + "." + handleObj.namespace :
					handleObj.origType,
				handleObj.selector,
				handleObj.handler
			);
			return this;
		}
		if ( typeof types === "object" ) {

			// ( types-object [, selector] )
			for ( type in types ) {
				this.off( type, selector, types[ type ] );
			}
			return this;
		}
		if ( selector === false || typeof selector === "function" ) {

			// ( types [, fn] )
			fn = selector;
			selector = undefined;
		}
		if ( fn === false ) {
			fn = returnFalse;
		}
		return this.each( function() {
			jQuery.event.remove( this, types, fn, selector );
		} );
	}
} );


var

	/* eslint-disable max-len */

	// See https://github.com/eslint/eslint/issues/3229
	rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,

	/* eslint-enable */

	// Support: IE <=10 - 11, Edge 12 - 13 only
	// In IE/Edge using regex groups here causes severe slowdowns.
	// See https://connect.microsoft.com/IE/feedback/details/1736512/
	rnoInnerhtml = /<script|<style|<link/i,

	// checked="checked" or checked
	rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
	rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

// Prefer a tbody over its parent table for containing new rows
function manipulationTarget( elem, content ) {
	if ( nodeName( elem, "table" ) &&
		nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ) {

		return jQuery( elem ).children( "tbody" )[ 0 ] || elem;
	}

	return elem;
}

// Replace/restore the type attribute of script elements for safe DOM manipulation
function disableScript( elem ) {
	elem.type = ( elem.getAttribute( "type" ) !== null ) + "/" + elem.type;
	return elem;
}
function restoreScript( elem ) {
	if ( ( elem.type || "" ).slice( 0, 5 ) === "true/" ) {
		elem.type = elem.type.slice( 5 );
	} else {
		elem.removeAttribute( "type" );
	}

	return elem;
}

function cloneCopyEvent( src, dest ) {
	var i, l, type, pdataOld, pdataCur, udataOld, udataCur, events;

	if ( dest.nodeType !== 1 ) {
		return;
	}

	// 1. Copy private data: events, handlers, etc.
	if ( dataPriv.hasData( src ) ) {
		pdataOld = dataPriv.access( src );
		pdataCur = dataPriv.set( dest, pdataOld );
		events = pdataOld.events;

		if ( events ) {
			delete pdataCur.handle;
			pdataCur.events = {};

			for ( type in events ) {
				for ( i = 0, l = events[ type ].length; i < l; i++ ) {
					jQuery.event.add( dest, type, events[ type ][ i ] );
				}
			}
		}
	}

	// 2. Copy user data
	if ( dataUser.hasData( src ) ) {
		udataOld = dataUser.access( src );
		udataCur = jQuery.extend( {}, udataOld );

		dataUser.set( dest, udataCur );
	}
}

// Fix IE bugs, see support tests
function fixInput( src, dest ) {
	var nodeName = dest.nodeName.toLowerCase();

	// Fails to persist the checked state of a cloned checkbox or radio button.
	if ( nodeName === "input" && rcheckableType.test( src.type ) ) {
		dest.checked = src.checked;

	// Fails to return the selected option to the default selected state when cloning options
	} else if ( nodeName === "input" || nodeName === "textarea" ) {
		dest.defaultValue = src.defaultValue;
	}
}

function domManip( collection, args, callback, ignored ) {

	// Flatten any nested arrays
	args = concat.apply( [], args );

	var fragment, first, scripts, hasScripts, node, doc,
		i = 0,
		l = collection.length,
		iNoClone = l - 1,
		value = args[ 0 ],
		valueIsFunction = isFunction( value );

	// We can't cloneNode fragments that contain checked, in WebKit
	if ( valueIsFunction ||
			( l > 1 && typeof value === "string" &&
				!support.checkClone && rchecked.test( value ) ) ) {
		return collection.each( function( index ) {
			var self = collection.eq( index );
			if ( valueIsFunction ) {
				args[ 0 ] = value.call( this, index, self.html() );
			}
			domManip( self, args, callback, ignored );
		} );
	}

	if ( l ) {
		fragment = buildFragment( args, collection[ 0 ].ownerDocument, false, collection, ignored );
		first = fragment.firstChild;

		if ( fragment.childNodes.length === 1 ) {
			fragment = first;
		}

		// Require either new content or an interest in ignored elements to invoke the callback
		if ( first || ignored ) {
			scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
			hasScripts = scripts.length;

			// Use the original fragment for the last item
			// instead of the first because it can end up
			// being emptied incorrectly in certain situations (#8070).
			for ( ; i < l; i++ ) {
				node = fragment;

				if ( i !== iNoClone ) {
					node = jQuery.clone( node, true, true );

					// Keep references to cloned scripts for later restoration
					if ( hasScripts ) {

						// Support: Android <=4.0 only, PhantomJS 1 only
						// push.apply(_, arraylike) throws on ancient WebKit
						jQuery.merge( scripts, getAll( node, "script" ) );
					}
				}

				callback.call( collection[ i ], node, i );
			}

			if ( hasScripts ) {
				doc = scripts[ scripts.length - 1 ].ownerDocument;

				// Reenable scripts
				jQuery.map( scripts, restoreScript );

				// Evaluate executable scripts on first document insertion
				for ( i = 0; i < hasScripts; i++ ) {
					node = scripts[ i ];
					if ( rscriptType.test( node.type || "" ) &&
						!dataPriv.access( node, "globalEval" ) &&
						jQuery.contains( doc, node ) ) {

						if ( node.src && ( node.type || "" ).toLowerCase()  !== "module" ) {

							// Optional AJAX dependency, but won't run scripts if not present
							if ( jQuery._evalUrl && !node.noModule ) {
								jQuery._evalUrl( node.src, {
									nonce: node.nonce || node.getAttribute( "nonce" )
								} );
							}
						} else {
							DOMEval( node.textContent.replace( rcleanScript, "" ), node, doc );
						}
					}
				}
			}
		}
	}

	return collection;
}

function remove( elem, selector, keepData ) {
	var node,
		nodes = selector ? jQuery.filter( selector, elem ) : elem,
		i = 0;

	for ( ; ( node = nodes[ i ] ) != null; i++ ) {
		if ( !keepData && node.nodeType === 1 ) {
			jQuery.cleanData( getAll( node ) );
		}

		if ( node.parentNode ) {
			if ( keepData && isAttached( node ) ) {
				setGlobalEval( getAll( node, "script" ) );
			}
			node.parentNode.removeChild( node );
		}
	}

	return elem;
}

jQuery.extend( {
	htmlPrefilter: function( html ) {
		return html.replace( rxhtmlTag, "<$1></$2>" );
	},

	clone: function( elem, dataAndEvents, deepDataAndEvents ) {
		var i, l, srcElements, destElements,
			clone = elem.cloneNode( true ),
			inPage = isAttached( elem );

		// Fix IE cloning issues
		if ( !support.noCloneChecked && ( elem.nodeType === 1 || elem.nodeType === 11 ) &&
				!jQuery.isXMLDoc( elem ) ) {

			// We eschew Sizzle here for performance reasons: https://jsperf.com/getall-vs-sizzle/2
			destElements = getAll( clone );
			srcElements = getAll( elem );

			for ( i = 0, l = srcElements.length; i < l; i++ ) {
				fixInput( srcElements[ i ], destElements[ i ] );
			}
		}

		// Copy the events from the original to the clone
		if ( dataAndEvents ) {
			if ( deepDataAndEvents ) {
				srcElements = srcElements || getAll( elem );
				destElements = destElements || getAll( clone );

				for ( i = 0, l = srcElements.length; i < l; i++ ) {
					cloneCopyEvent( srcElements[ i ], destElements[ i ] );
				}
			} else {
				cloneCopyEvent( elem, clone );
			}
		}

		// Preserve script evaluation history
		destElements = getAll( clone, "script" );
		if ( destElements.length > 0 ) {
			setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
		}

		// Return the cloned set
		return clone;
	},

	cleanData: function( elems ) {
		var data, elem, type,
			special = jQuery.event.special,
			i = 0;

		for ( ; ( elem = elems[ i ] ) !== undefined; i++ ) {
			if ( acceptData( elem ) ) {
				if ( ( data = elem[ dataPriv.expando ] ) ) {
					if ( data.events ) {
						for ( type in data.events ) {
							if ( special[ type ] ) {
								jQuery.event.remove( elem, type );

							// This is a shortcut to avoid jQuery.event.remove's overhead
							} else {
								jQuery.removeEvent( elem, type, data.handle );
							}
						}
					}

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataPriv.expando ] = undefined;
				}
				if ( elem[ dataUser.expando ] ) {

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataUser.expando ] = undefined;
				}
			}
		}
	}
} );

jQuery.fn.extend( {
	detach: function( selector ) {
		return remove( this, selector, true );
	},

	remove: function( selector ) {
		return remove( this, selector );
	},

	text: function( value ) {
		return access( this, function( value ) {
			return value === undefined ?
				jQuery.text( this ) :
				this.empty().each( function() {
					if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
						this.textContent = value;
					}
				} );
		}, null, value, arguments.length );
	},

	append: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.appendChild( elem );
			}
		} );
	},

	prepend: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.insertBefore( elem, target.firstChild );
			}
		} );
	},

	before: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this );
			}
		} );
	},

	after: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this.nextSibling );
			}
		} );
	},

	empty: function() {
		var elem,
			i = 0;

		for ( ; ( elem = this[ i ] ) != null; i++ ) {
			if ( elem.nodeType === 1 ) {

				// Prevent memory leaks
				jQuery.cleanData( getAll( elem, false ) );

				// Remove any remaining nodes
				elem.textContent = "";
			}
		}

		return this;
	},

	clone: function( dataAndEvents, deepDataAndEvents ) {
		dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
		deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

		return this.map( function() {
			return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
		} );
	},

	html: function( value ) {
		return access( this, function( value ) {
			var elem = this[ 0 ] || {},
				i = 0,
				l = this.length;

			if ( value === undefined && elem.nodeType === 1 ) {
				return elem.innerHTML;
			}

			// See if we can take a shortcut and just use innerHTML
			if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
				!wrapMap[ ( rtagName.exec( value ) || [ "", "" ] )[ 1 ].toLowerCase() ] ) {

				value = jQuery.htmlPrefilter( value );

				try {
					for ( ; i < l; i++ ) {
						elem = this[ i ] || {};

						// Remove element nodes and prevent memory leaks
						if ( elem.nodeType === 1 ) {
							jQuery.cleanData( getAll( elem, false ) );
							elem.innerHTML = value;
						}
					}

					elem = 0;

				// If using innerHTML throws an exception, use the fallback method
				} catch ( e ) {}
			}

			if ( elem ) {
				this.empty().append( value );
			}
		}, null, value, arguments.length );
	},

	replaceWith: function() {
		var ignored = [];

		// Make the changes, replacing each non-ignored context element with the new content
		return domManip( this, arguments, function( elem ) {
			var parent = this.parentNode;

			if ( jQuery.inArray( this, ignored ) < 0 ) {
				jQuery.cleanData( getAll( this ) );
				if ( parent ) {
					parent.replaceChild( elem, this );
				}
			}

		// Force callback invocation
		}, ignored );
	}
} );

jQuery.each( {
	appendTo: "append",
	prependTo: "prepend",
	insertBefore: "before",
	insertAfter: "after",
	replaceAll: "replaceWith"
}, function( name, original ) {
	jQuery.fn[ name ] = function( selector ) {
		var elems,
			ret = [],
			insert = jQuery( selector ),
			last = insert.length - 1,
			i = 0;

		for ( ; i <= last; i++ ) {
			elems = i === last ? this : this.clone( true );
			jQuery( insert[ i ] )[ original ]( elems );

			// Support: Android <=4.0 only, PhantomJS 1 only
			// .get() because push.apply(_, arraylike) throws on ancient WebKit
			push.apply( ret, elems.get() );
		}

		return this.pushStack( ret );
	};
} );
var rnumnonpx = new RegExp( "^(" + pnum + ")(?!px)[a-z%]+$", "i" );

var getStyles = function( elem ) {

		// Support: IE <=11 only, Firefox <=30 (#15098, #14150)
		// IE throws on elements created in popups
		// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
		var view = elem.ownerDocument.defaultView;

		if ( !view || !view.opener ) {
			view = window;
		}

		return view.getComputedStyle( elem );
	};

var rboxStyle = new RegExp( cssExpand.join( "|" ), "i" );



( function() {

	// Executing both pixelPosition & boxSizingReliable tests require only one layout
	// so they're executed at the same time to save the second computation.
	function computeStyleTests() {

		// This is a singleton, we need to execute it only once
		if ( !div ) {
			return;
		}

		container.style.cssText = "position:absolute;left:-11111px;width:60px;" +
			"margin-top:1px;padding:0;border:0";
		div.style.cssText =
			"position:relative;display:block;box-sizing:border-box;overflow:scroll;" +
			"margin:auto;border:1px;padding:1px;" +
			"width:60%;top:1%";
		documentElement.appendChild( container ).appendChild( div );

		var divStyle = window.getComputedStyle( div );
		pixelPositionVal = divStyle.top !== "1%";

		// Support: Android 4.0 - 4.3 only, Firefox <=3 - 44
		reliableMarginLeftVal = roundPixelMeasures( divStyle.marginLeft ) === 12;

		// Support: Android 4.0 - 4.3 only, Safari <=9.1 - 10.1, iOS <=7.0 - 9.3
		// Some styles come back with percentage values, even though they shouldn't
		div.style.right = "60%";
		pixelBoxStylesVal = roundPixelMeasures( divStyle.right ) === 36;

		// Support: IE 9 - 11 only
		// Detect misreporting of content dimensions for box-sizing:border-box elements
		boxSizingReliableVal = roundPixelMeasures( divStyle.width ) === 36;

		// Support: IE 9 only
		// Detect overflow:scroll screwiness (gh-3699)
		// Support: Chrome <=64
		// Don't get tricked when zoom affects offsetWidth (gh-4029)
		div.style.position = "absolute";
		scrollboxSizeVal = roundPixelMeasures( div.offsetWidth / 3 ) === 12;

		documentElement.removeChild( container );

		// Nullify the div so it wouldn't be stored in the memory and
		// it will also be a sign that checks already performed
		div = null;
	}

	function roundPixelMeasures( measure ) {
		return Math.round( parseFloat( measure ) );
	}

	var pixelPositionVal, boxSizingReliableVal, scrollboxSizeVal, pixelBoxStylesVal,
		reliableMarginLeftVal,
		container = document.createElement( "div" ),
		div = document.createElement( "div" );

	// Finish early in limited (non-browser) environments
	if ( !div.style ) {
		return;
	}

	// Support: IE <=9 - 11 only
	// Style of cloned element affects source element cloned (#8908)
	div.style.backgroundClip = "content-box";
	div.cloneNode( true ).style.backgroundClip = "";
	support.clearCloneStyle = div.style.backgroundClip === "content-box";

	jQuery.extend( support, {
		boxSizingReliable: function() {
			computeStyleTests();
			return boxSizingReliableVal;
		},
		pixelBoxStyles: function() {
			computeStyleTests();
			return pixelBoxStylesVal;
		},
		pixelPosition: function() {
			computeStyleTests();
			return pixelPositionVal;
		},
		reliableMarginLeft: function() {
			computeStyleTests();
			return reliableMarginLeftVal;
		},
		scrollboxSize: function() {
			computeStyleTests();
			return scrollboxSizeVal;
		}
	} );
} )();


function curCSS( elem, name, computed ) {
	var width, minWidth, maxWidth, ret,

		// Support: Firefox 51+
		// Retrieving style before computed somehow
		// fixes an issue with getting wrong values
		// on detached elements
		style = elem.style;

	computed = computed || getStyles( elem );

	// getPropertyValue is needed for:
	//   .css('filter') (IE 9 only, #12537)
	//   .css('--customProperty) (#3144)
	if ( computed ) {
		ret = computed.getPropertyValue( name ) || computed[ name ];

		if ( ret === "" && !isAttached( elem ) ) {
			ret = jQuery.style( elem, name );
		}

		// A tribute to the "awesome hack by Dean Edwards"
		// Android Browser returns percentage for some values,
		// but width seems to be reliably pixels.
		// This is against the CSSOM draft spec:
		// https://drafts.csswg.org/cssom/#resolved-values
		if ( !support.pixelBoxStyles() && rnumnonpx.test( ret ) && rboxStyle.test( name ) ) {

			// Remember the original values
			width = style.width;
			minWidth = style.minWidth;
			maxWidth = style.maxWidth;

			// Put in the new values to get a computed value out
			style.minWidth = style.maxWidth = style.width = ret;
			ret = computed.width;

			// Revert the changed values
			style.width = width;
			style.minWidth = minWidth;
			style.maxWidth = maxWidth;
		}
	}

	return ret !== undefined ?

		// Support: IE <=9 - 11 only
		// IE returns zIndex value as an integer.
		ret + "" :
		ret;
}


function addGetHookIf( conditionFn, hookFn ) {

	// Define the hook, we'll check on the first run if it's really needed.
	return {
		get: function() {
			if ( conditionFn() ) {

				// Hook not needed (or it's not possible to use it due
				// to missing dependency), remove it.
				delete this.get;
				return;
			}

			// Hook needed; redefine it so that the support test is not executed again.
			return ( this.get = hookFn ).apply( this, arguments );
		}
	};
}


var cssPrefixes = [ "Webkit", "Moz", "ms" ],
	emptyStyle = document.createElement( "div" ).style,
	vendorProps = {};

// Return a vendor-prefixed property or undefined
function vendorPropName( name ) {

	// Check for vendor prefixed names
	var capName = name[ 0 ].toUpperCase() + name.slice( 1 ),
		i = cssPrefixes.length;

	while ( i-- ) {
		name = cssPrefixes[ i ] + capName;
		if ( name in emptyStyle ) {
			return name;
		}
	}
}

// Return a potentially-mapped jQuery.cssProps or vendor prefixed property
function finalPropName( name ) {
	var final = jQuery.cssProps[ name ] || vendorProps[ name ];

	if ( final ) {
		return final;
	}
	if ( name in emptyStyle ) {
		return name;
	}
	return vendorProps[ name ] = vendorPropName( name ) || name;
}


var

	// Swappable if display is none or starts with table
	// except "table", "table-cell", or "table-caption"
	// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
	rdisplayswap = /^(none|table(?!-c[ea]).+)/,
	rcustomProp = /^--/,
	cssShow = { position: "absolute", visibility: "hidden", display: "block" },
	cssNormalTransform = {
		letterSpacing: "0",
		fontWeight: "400"
	};

function setPositiveNumber( elem, value, subtract ) {

	// Any relative (+/-) values have already been
	// normalized at this point
	var matches = rcssNum.exec( value );
	return matches ?

		// Guard against undefined "subtract", e.g., when used as in cssHooks
		Math.max( 0, matches[ 2 ] - ( subtract || 0 ) ) + ( matches[ 3 ] || "px" ) :
		value;
}

function boxModelAdjustment( elem, dimension, box, isBorderBox, styles, computedVal ) {
	var i = dimension === "width" ? 1 : 0,
		extra = 0,
		delta = 0;

	// Adjustment may not be necessary
	if ( box === ( isBorderBox ? "border" : "content" ) ) {
		return 0;
	}

	for ( ; i < 4; i += 2 ) {

		// Both box models exclude margin
		if ( box === "margin" ) {
			delta += jQuery.css( elem, box + cssExpand[ i ], true, styles );
		}

		// If we get here with a content-box, we're seeking "padding" or "border" or "margin"
		if ( !isBorderBox ) {

			// Add padding
			delta += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );

			// For "border" or "margin", add border
			if ( box !== "padding" ) {
				delta += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );

			// But still keep track of it otherwise
			} else {
				extra += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}

		// If we get here with a border-box (content + padding + border), we're seeking "content" or
		// "padding" or "margin"
		} else {

			// For "content", subtract padding
			if ( box === "content" ) {
				delta -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
			}

			// For "content" or "padding", subtract border
			if ( box !== "margin" ) {
				delta -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		}
	}

	// Account for positive content-box scroll gutter when requested by providing computedVal
	if ( !isBorderBox && computedVal >= 0 ) {

		// offsetWidth/offsetHeight is a rounded sum of content, padding, scroll gutter, and border
		// Assuming integer scroll gutter, subtract the rest and round down
		delta += Math.max( 0, Math.ceil(
			elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ] -
			computedVal -
			delta -
			extra -
			0.5

		// If offsetWidth/offsetHeight is unknown, then we can't determine content-box scroll gutter
		// Use an explicit zero to avoid NaN (gh-3964)
		) ) || 0;
	}

	return delta;
}

function getWidthOrHeight( elem, dimension, extra ) {

	// Start with computed style
	var styles = getStyles( elem ),

		// To avoid forcing a reflow, only fetch boxSizing if we need it (gh-4322).
		// Fake content-box until we know it's needed to know the true value.
		boxSizingNeeded = !support.boxSizingReliable() || extra,
		isBorderBox = boxSizingNeeded &&
			jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
		valueIsBorderBox = isBorderBox,

		val = curCSS( elem, dimension, styles ),
		offsetProp = "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 );

	// Support: Firefox <=54
	// Return a confounding non-pixel value or feign ignorance, as appropriate.
	if ( rnumnonpx.test( val ) ) {
		if ( !extra ) {
			return val;
		}
		val = "auto";
	}


	// Fall back to offsetWidth/offsetHeight when value is "auto"
	// This happens for inline elements with no explicit setting (gh-3571)
	// Support: Android <=4.1 - 4.3 only
	// Also use offsetWidth/offsetHeight for misreported inline dimensions (gh-3602)
	// Support: IE 9-11 only
	// Also use offsetWidth/offsetHeight for when box sizing is unreliable
	// We use getClientRects() to check for hidden/disconnected.
	// In those cases, the computed value can be trusted to be border-box
	if ( ( !support.boxSizingReliable() && isBorderBox ||
		val === "auto" ||
		!parseFloat( val ) && jQuery.css( elem, "display", false, styles ) === "inline" ) &&
		elem.getClientRects().length ) {

		isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box";

		// Where available, offsetWidth/offsetHeight approximate border box dimensions.
		// Where not available (e.g., SVG), assume unreliable box-sizing and interpret the
		// retrieved value as a content box dimension.
		valueIsBorderBox = offsetProp in elem;
		if ( valueIsBorderBox ) {
			val = elem[ offsetProp ];
		}
	}

	// Normalize "" and auto
	val = parseFloat( val ) || 0;

	// Adjust for the element's box model
	return ( val +
		boxModelAdjustment(
			elem,
			dimension,
			extra || ( isBorderBox ? "border" : "content" ),
			valueIsBorderBox,
			styles,

			// Provide the current computed size to request scroll gutter calculation (gh-3589)
			val
		)
	) + "px";
}

jQuery.extend( {

	// Add in style property hooks for overriding the default
	// behavior of getting and setting a style property
	cssHooks: {
		opacity: {
			get: function( elem, computed ) {
				if ( computed ) {

					// We should always get a number back from opacity
					var ret = curCSS( elem, "opacity" );
					return ret === "" ? "1" : ret;
				}
			}
		}
	},

	// Don't automatically add "px" to these possibly-unitless properties
	cssNumber: {
		"animationIterationCount": true,
		"columnCount": true,
		"fillOpacity": true,
		"flexGrow": true,
		"flexShrink": true,
		"fontWeight": true,
		"gridArea": true,
		"gridColumn": true,
		"gridColumnEnd": true,
		"gridColumnStart": true,
		"gridRow": true,
		"gridRowEnd": true,
		"gridRowStart": true,
		"lineHeight": true,
		"opacity": true,
		"order": true,
		"orphans": true,
		"widows": true,
		"zIndex": true,
		"zoom": true
	},

	// Add in properties whose names you wish to fix before
	// setting or getting the value
	cssProps: {},

	// Get and set the style property on a DOM Node
	style: function( elem, name, value, extra ) {

		// Don't set styles on text and comment nodes
		if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
			return;
		}

		// Make sure that we're working with the right name
		var ret, type, hooks,
			origName = camelCase( name ),
			isCustomProp = rcustomProp.test( name ),
			style = elem.style;

		// Make sure that we're working with the right name. We don't
		// want to query the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}

		// Gets hook for the prefixed version, then unprefixed version
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// Check if we're setting a value
		if ( value !== undefined ) {
			type = typeof value;

			// Convert "+=" or "-=" to relative numbers (#7345)
			if ( type === "string" && ( ret = rcssNum.exec( value ) ) && ret[ 1 ] ) {
				value = adjustCSS( elem, name, ret );

				// Fixes bug #9237
				type = "number";
			}

			// Make sure that null and NaN values aren't set (#7116)
			if ( value == null || value !== value ) {
				return;
			}

			// If a number was passed in, add the unit (except for certain CSS properties)
			// The isCustomProp check can be removed in jQuery 4.0 when we only auto-append
			// "px" to a few hardcoded values.
			if ( type === "number" && !isCustomProp ) {
				value += ret && ret[ 3 ] || ( jQuery.cssNumber[ origName ] ? "" : "px" );
			}

			// background-* props affect original clone's values
			if ( !support.clearCloneStyle && value === "" && name.indexOf( "background" ) === 0 ) {
				style[ name ] = "inherit";
			}

			// If a hook was provided, use that value, otherwise just set the specified value
			if ( !hooks || !( "set" in hooks ) ||
				( value = hooks.set( elem, value, extra ) ) !== undefined ) {

				if ( isCustomProp ) {
					style.setProperty( name, value );
				} else {
					style[ name ] = value;
				}
			}

		} else {

			// If a hook was provided get the non-computed value from there
			if ( hooks && "get" in hooks &&
				( ret = hooks.get( elem, false, extra ) ) !== undefined ) {

				return ret;
			}

			// Otherwise just get the value from the style object
			return style[ name ];
		}
	},

	css: function( elem, name, extra, styles ) {
		var val, num, hooks,
			origName = camelCase( name ),
			isCustomProp = rcustomProp.test( name );

		// Make sure that we're working with the right name. We don't
		// want to modify the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}

		// Try prefixed name followed by the unprefixed name
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// If a hook was provided get the computed value from there
		if ( hooks && "get" in hooks ) {
			val = hooks.get( elem, true, extra );
		}

		// Otherwise, if a way to get the computed value exists, use that
		if ( val === undefined ) {
			val = curCSS( elem, name, styles );
		}

		// Convert "normal" to computed value
		if ( val === "normal" && name in cssNormalTransform ) {
			val = cssNormalTransform[ name ];
		}

		// Make numeric if forced or a qualifier was provided and val looks numeric
		if ( extra === "" || extra ) {
			num = parseFloat( val );
			return extra === true || isFinite( num ) ? num || 0 : val;
		}

		return val;
	}
} );

jQuery.each( [ "height", "width" ], function( i, dimension ) {
	jQuery.cssHooks[ dimension ] = {
		get: function( elem, computed, extra ) {
			if ( computed ) {

				// Certain elements can have dimension info if we invisibly show them
				// but it must have a current display style that would benefit
				return rdisplayswap.test( jQuery.css( elem, "display" ) ) &&

					// Support: Safari 8+
					// Table columns in Safari have non-zero offsetWidth & zero
					// getBoundingClientRect().width unless display is changed.
					// Support: IE <=11 only
					// Running getBoundingClientRect on a disconnected node
					// in IE throws an error.
					( !elem.getClientRects().length || !elem.getBoundingClientRect().width ) ?
						swap( elem, cssShow, function() {
							return getWidthOrHeight( elem, dimension, extra );
						} ) :
						getWidthOrHeight( elem, dimension, extra );
			}
		},

		set: function( elem, value, extra ) {
			var matches,
				styles = getStyles( elem ),

				// Only read styles.position if the test has a chance to fail
				// to avoid forcing a reflow.
				scrollboxSizeBuggy = !support.scrollboxSize() &&
					styles.position === "absolute",

				// To avoid forcing a reflow, only fetch boxSizing if we need it (gh-3991)
				boxSizingNeeded = scrollboxSizeBuggy || extra,
				isBorderBox = boxSizingNeeded &&
					jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
				subtract = extra ?
					boxModelAdjustment(
						elem,
						dimension,
						extra,
						isBorderBox,
						styles
					) :
					0;

			// Account for unreliable border-box dimensions by comparing offset* to computed and
			// faking a content-box to get border and padding (gh-3699)
			if ( isBorderBox && scrollboxSizeBuggy ) {
				subtract -= Math.ceil(
					elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ] -
					parseFloat( styles[ dimension ] ) -
					boxModelAdjustment( elem, dimension, "border", false, styles ) -
					0.5
				);
			}

			// Convert to pixels if value adjustment is needed
			if ( subtract && ( matches = rcssNum.exec( value ) ) &&
				( matches[ 3 ] || "px" ) !== "px" ) {

				elem.style[ dimension ] = value;
				value = jQuery.css( elem, dimension );
			}

			return setPositiveNumber( elem, value, subtract );
		}
	};
} );

jQuery.cssHooks.marginLeft = addGetHookIf( support.reliableMarginLeft,
	function( elem, computed ) {
		if ( computed ) {
			return ( parseFloat( curCSS( elem, "marginLeft" ) ) ||
				elem.getBoundingClientRect().left -
					swap( elem, { marginLeft: 0 }, function() {
						return elem.getBoundingClientRect().left;
					} )
				) + "px";
		}
	}
);

// These hooks are used by animate to expand properties
jQuery.each( {
	margin: "",
	padding: "",
	border: "Width"
}, function( prefix, suffix ) {
	jQuery.cssHooks[ prefix + suffix ] = {
		expand: function( value ) {
			var i = 0,
				expanded = {},

				// Assumes a single number if not a string
				parts = typeof value === "string" ? value.split( " " ) : [ value ];

			for ( ; i < 4; i++ ) {
				expanded[ prefix + cssExpand[ i ] + suffix ] =
					parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
			}

			return expanded;
		}
	};

	if ( prefix !== "margin" ) {
		jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
	}
} );

jQuery.fn.extend( {
	css: function( name, value ) {
		return access( this, function( elem, name, value ) {
			var styles, len,
				map = {},
				i = 0;

			if ( Array.isArray( name ) ) {
				styles = getStyles( elem );
				len = name.length;

				for ( ; i < len; i++ ) {
					map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
				}

				return map;
			}

			return value !== undefined ?
				jQuery.style( elem, name, value ) :
				jQuery.css( elem, name );
		}, name, value, arguments.length > 1 );
	}
} );


function Tween( elem, options, prop, end, easing ) {
	return new Tween.prototype.init( elem, options, prop, end, easing );
}
jQuery.Tween = Tween;

Tween.prototype = {
	constructor: Tween,
	init: function( elem, options, prop, end, easing, unit ) {
		this.elem = elem;
		this.prop = prop;
		this.easing = easing || jQuery.easing._default;
		this.options = options;
		this.start = this.now = this.cur();
		this.end = end;
		this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
	},
	cur: function() {
		var hooks = Tween.propHooks[ this.prop ];

		return hooks && hooks.get ?
			hooks.get( this ) :
			Tween.propHooks._default.get( this );
	},
	run: function( percent ) {
		var eased,
			hooks = Tween.propHooks[ this.prop ];

		if ( this.options.duration ) {
			this.pos = eased = jQuery.easing[ this.easing ](
				percent, this.options.duration * percent, 0, 1, this.options.duration
			);
		} else {
			this.pos = eased = percent;
		}
		this.now = ( this.end - this.start ) * eased + this.start;

		if ( this.options.step ) {
			this.options.step.call( this.elem, this.now, this );
		}

		if ( hooks && hooks.set ) {
			hooks.set( this );
		} else {
			Tween.propHooks._default.set( this );
		}
		return this;
	}
};

Tween.prototype.init.prototype = Tween.prototype;

Tween.propHooks = {
	_default: {
		get: function( tween ) {
			var result;

			// Use a property on the element directly when it is not a DOM element,
			// or when there is no matching style property that exists.
			if ( tween.elem.nodeType !== 1 ||
				tween.elem[ tween.prop ] != null && tween.elem.style[ tween.prop ] == null ) {
				return tween.elem[ tween.prop ];
			}

			// Passing an empty string as a 3rd parameter to .css will automatically
			// attempt a parseFloat and fallback to a string if the parse fails.
			// Simple values such as "10px" are parsed to Float;
			// complex values such as "rotate(1rad)" are returned as-is.
			result = jQuery.css( tween.elem, tween.prop, "" );

			// Empty strings, null, undefined and "auto" are converted to 0.
			return !result || result === "auto" ? 0 : result;
		},
		set: function( tween ) {

			// Use step hook for back compat.
			// Use cssHook if its there.
			// Use .style if available and use plain properties where available.
			if ( jQuery.fx.step[ tween.prop ] ) {
				jQuery.fx.step[ tween.prop ]( tween );
			} else if ( tween.elem.nodeType === 1 && (
					jQuery.cssHooks[ tween.prop ] ||
					tween.elem.style[ finalPropName( tween.prop ) ] != null ) ) {
				jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
			} else {
				tween.elem[ tween.prop ] = tween.now;
			}
		}
	}
};

// Support: IE <=9 only
// Panic based approach to setting things on disconnected nodes
Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
	set: function( tween ) {
		if ( tween.elem.nodeType && tween.elem.parentNode ) {
			tween.elem[ tween.prop ] = tween.now;
		}
	}
};

jQuery.easing = {
	linear: function( p ) {
		return p;
	},
	swing: function( p ) {
		return 0.5 - Math.cos( p * Math.PI ) / 2;
	},
	_default: "swing"
};

jQuery.fx = Tween.prototype.init;

// Back compat <1.8 extension point
jQuery.fx.step = {};




var
	fxNow, inProgress,
	rfxtypes = /^(?:toggle|show|hide)$/,
	rrun = /queueHooks$/;

function schedule() {
	if ( inProgress ) {
		if ( document.hidden === false && window.requestAnimationFrame ) {
			window.requestAnimationFrame( schedule );
		} else {
			window.setTimeout( schedule, jQuery.fx.interval );
		}

		jQuery.fx.tick();
	}
}

// Animations created synchronously will run synchronously
function createFxNow() {
	window.setTimeout( function() {
		fxNow = undefined;
	} );
	return ( fxNow = Date.now() );
}

// Generate parameters to create a standard animation
function genFx( type, includeWidth ) {
	var which,
		i = 0,
		attrs = { height: type };

	// If we include width, step value is 1 to do all cssExpand values,
	// otherwise step value is 2 to skip over Left and Right
	includeWidth = includeWidth ? 1 : 0;
	for ( ; i < 4; i += 2 - includeWidth ) {
		which = cssExpand[ i ];
		attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
	}

	if ( includeWidth ) {
		attrs.opacity = attrs.width = type;
	}

	return attrs;
}

function createTween( value, prop, animation ) {
	var tween,
		collection = ( Animation.tweeners[ prop ] || [] ).concat( Animation.tweeners[ "*" ] ),
		index = 0,
		length = collection.length;
	for ( ; index < length; index++ ) {
		if ( ( tween = collection[ index ].call( animation, prop, value ) ) ) {

			// We're done with this property
			return tween;
		}
	}
}

function defaultPrefilter( elem, props, opts ) {
	var prop, value, toggle, hooks, oldfire, propTween, restoreDisplay, display,
		isBox = "width" in props || "height" in props,
		anim = this,
		orig = {},
		style = elem.style,
		hidden = elem.nodeType && isHiddenWithinTree( elem ),
		dataShow = dataPriv.get( elem, "fxshow" );

	// Queue-skipping animations hijack the fx hooks
	if ( !opts.queue ) {
		hooks = jQuery._queueHooks( elem, "fx" );
		if ( hooks.unqueued == null ) {
			hooks.unqueued = 0;
			oldfire = hooks.empty.fire;
			hooks.empty.fire = function() {
				if ( !hooks.unqueued ) {
					oldfire();
				}
			};
		}
		hooks.unqueued++;

		anim.always( function() {

			// Ensure the complete handler is called before this completes
			anim.always( function() {
				hooks.unqueued--;
				if ( !jQuery.queue( elem, "fx" ).length ) {
					hooks.empty.fire();
				}
			} );
		} );
	}

	// Detect show/hide animations
	for ( prop in props ) {
		value = props[ prop ];
		if ( rfxtypes.test( value ) ) {
			delete props[ prop ];
			toggle = toggle || value === "toggle";
			if ( value === ( hidden ? "hide" : "show" ) ) {

				// Pretend to be hidden if this is a "show" and
				// there is still data from a stopped show/hide
				if ( value === "show" && dataShow && dataShow[ prop ] !== undefined ) {
					hidden = true;

				// Ignore all other no-op show/hide data
				} else {
					continue;
				}
			}
			orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );
		}
	}

	// Bail out if this is a no-op like .hide().hide()
	propTween = !jQuery.isEmptyObject( props );
	if ( !propTween && jQuery.isEmptyObject( orig ) ) {
		return;
	}

	// Restrict "overflow" and "display" styles during box animations
	if ( isBox && elem.nodeType === 1 ) {

		// Support: IE <=9 - 11, Edge 12 - 15
		// Record all 3 overflow attributes because IE does not infer the shorthand
		// from identically-valued overflowX and overflowY and Edge just mirrors
		// the overflowX value there.
		opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];

		// Identify a display type, preferring old show/hide data over the CSS cascade
		restoreDisplay = dataShow && dataShow.display;
		if ( restoreDisplay == null ) {
			restoreDisplay = dataPriv.get( elem, "display" );
		}
		display = jQuery.css( elem, "display" );
		if ( display === "none" ) {
			if ( restoreDisplay ) {
				display = restoreDisplay;
			} else {

				// Get nonempty value(s) by temporarily forcing visibility
				showHide( [ elem ], true );
				restoreDisplay = elem.style.display || restoreDisplay;
				display = jQuery.css( elem, "display" );
				showHide( [ elem ] );
			}
		}

		// Animate inline elements as inline-block
		if ( display === "inline" || display === "inline-block" && restoreDisplay != null ) {
			if ( jQuery.css( elem, "float" ) === "none" ) {

				// Restore the original display value at the end of pure show/hide animations
				if ( !propTween ) {
					anim.done( function() {
						style.display = restoreDisplay;
					} );
					if ( restoreDisplay == null ) {
						display = style.display;
						restoreDisplay = display === "none" ? "" : display;
					}
				}
				style.display = "inline-block";
			}
		}
	}

	if ( opts.overflow ) {
		style.overflow = "hidden";
		anim.always( function() {
			style.overflow = opts.overflow[ 0 ];
			style.overflowX = opts.overflow[ 1 ];
			style.overflowY = opts.overflow[ 2 ];
		} );
	}

	// Implement show/hide animations
	propTween = false;
	for ( prop in orig ) {

		// General show/hide setup for this element animation
		if ( !propTween ) {
			if ( dataShow ) {
				if ( "hidden" in dataShow ) {
					hidden = dataShow.hidden;
				}
			} else {
				dataShow = dataPriv.access( elem, "fxshow", { display: restoreDisplay } );
			}

			// Store hidden/visible for toggle so `.stop().toggle()` "reverses"
			if ( toggle ) {
				dataShow.hidden = !hidden;
			}

			// Show elements before animating them
			if ( hidden ) {
				showHide( [ elem ], true );
			}

			/* eslint-disable no-loop-func */

			anim.done( function() {

			/* eslint-enable no-loop-func */

				// The final step of a "hide" animation is actually hiding the element
				if ( !hidden ) {
					showHide( [ elem ] );
				}
				dataPriv.remove( elem, "fxshow" );
				for ( prop in orig ) {
					jQuery.style( elem, prop, orig[ prop ] );
				}
			} );
		}

		// Per-property setup
		propTween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );
		if ( !( prop in dataShow ) ) {
			dataShow[ prop ] = propTween.start;
			if ( hidden ) {
				propTween.end = propTween.start;
				propTween.start = 0;
			}
		}
	}
}

function propFilter( props, specialEasing ) {
	var index, name, easing, value, hooks;

	// camelCase, specialEasing and expand cssHook pass
	for ( index in props ) {
		name = camelCase( index );
		easing = specialEasing[ name ];
		value = props[ index ];
		if ( Array.isArray( value ) ) {
			easing = value[ 1 ];
			value = props[ index ] = value[ 0 ];
		}

		if ( index !== name ) {
			props[ name ] = value;
			delete props[ index ];
		}

		hooks = jQuery.cssHooks[ name ];
		if ( hooks && "expand" in hooks ) {
			value = hooks.expand( value );
			delete props[ name ];

			// Not quite $.extend, this won't overwrite existing keys.
			// Reusing 'index' because we have the correct "name"
			for ( index in value ) {
				if ( !( index in props ) ) {
					props[ index ] = value[ index ];
					specialEasing[ index ] = easing;
				}
			}
		} else {
			specialEasing[ name ] = easing;
		}
	}
}

function Animation( elem, properties, options ) {
	var result,
		stopped,
		index = 0,
		length = Animation.prefilters.length,
		deferred = jQuery.Deferred().always( function() {

			// Don't match elem in the :animated selector
			delete tick.elem;
		} ),
		tick = function() {
			if ( stopped ) {
				return false;
			}
			var currentTime = fxNow || createFxNow(),
				remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),

				// Support: Android 2.3 only
				// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
				temp = remaining / animation.duration || 0,
				percent = 1 - temp,
				index = 0,
				length = animation.tweens.length;

			for ( ; index < length; index++ ) {
				animation.tweens[ index ].run( percent );
			}

			deferred.notifyWith( elem, [ animation, percent, remaining ] );

			// If there's more to do, yield
			if ( percent < 1 && length ) {
				return remaining;
			}

			// If this was an empty animation, synthesize a final progress notification
			if ( !length ) {
				deferred.notifyWith( elem, [ animation, 1, 0 ] );
			}

			// Resolve the animation and report its conclusion
			deferred.resolveWith( elem, [ animation ] );
			return false;
		},
		animation = deferred.promise( {
			elem: elem,
			props: jQuery.extend( {}, properties ),
			opts: jQuery.extend( true, {
				specialEasing: {},
				easing: jQuery.easing._default
			}, options ),
			originalProperties: properties,
			originalOptions: options,
			startTime: fxNow || createFxNow(),
			duration: options.duration,
			tweens: [],
			createTween: function( prop, end ) {
				var tween = jQuery.Tween( elem, animation.opts, prop, end,
						animation.opts.specialEasing[ prop ] || animation.opts.easing );
				animation.tweens.push( tween );
				return tween;
			},
			stop: function( gotoEnd ) {
				var index = 0,

					// If we are going to the end, we want to run all the tweens
					// otherwise we skip this part
					length = gotoEnd ? animation.tweens.length : 0;
				if ( stopped ) {
					return this;
				}
				stopped = true;
				for ( ; index < length; index++ ) {
					animation.tweens[ index ].run( 1 );
				}

				// Resolve when we played the last frame; otherwise, reject
				if ( gotoEnd ) {
					deferred.notifyWith( elem, [ animation, 1, 0 ] );
					deferred.resolveWith( elem, [ animation, gotoEnd ] );
				} else {
					deferred.rejectWith( elem, [ animation, gotoEnd ] );
				}
				return this;
			}
		} ),
		props = animation.props;

	propFilter( props, animation.opts.specialEasing );

	for ( ; index < length; index++ ) {
		result = Animation.prefilters[ index ].call( animation, elem, props, animation.opts );
		if ( result ) {
			if ( isFunction( result.stop ) ) {
				jQuery._queueHooks( animation.elem, animation.opts.queue ).stop =
					result.stop.bind( result );
			}
			return result;
		}
	}

	jQuery.map( props, createTween, animation );

	if ( isFunction( animation.opts.start ) ) {
		animation.opts.start.call( elem, animation );
	}

	// Attach callbacks from options
	animation
		.progress( animation.opts.progress )
		.done( animation.opts.done, animation.opts.complete )
		.fail( animation.opts.fail )
		.always( animation.opts.always );

	jQuery.fx.timer(
		jQuery.extend( tick, {
			elem: elem,
			anim: animation,
			queue: animation.opts.queue
		} )
	);

	return animation;
}

jQuery.Animation = jQuery.extend( Animation, {

	tweeners: {
		"*": [ function( prop, value ) {
			var tween = this.createTween( prop, value );
			adjustCSS( tween.elem, prop, rcssNum.exec( value ), tween );
			return tween;
		} ]
	},

	tweener: function( props, callback ) {
		if ( isFunction( props ) ) {
			callback = props;
			props = [ "*" ];
		} else {
			props = props.match( rnothtmlwhite );
		}

		var prop,
			index = 0,
			length = props.length;

		for ( ; index < length; index++ ) {
			prop = props[ index ];
			Animation.tweeners[ prop ] = Animation.tweeners[ prop ] || [];
			Animation.tweeners[ prop ].unshift( callback );
		}
	},

	prefilters: [ defaultPrefilter ],

	prefilter: function( callback, prepend ) {
		if ( prepend ) {
			Animation.prefilters.unshift( callback );
		} else {
			Animation.prefilters.push( callback );
		}
	}
} );

jQuery.speed = function( speed, easing, fn ) {
	var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
		complete: fn || !fn && easing ||
			isFunction( speed ) && speed,
		duration: speed,
		easing: fn && easing || easing && !isFunction( easing ) && easing
	};

	// Go to the end state if fx are off
	if ( jQuery.fx.off ) {
		opt.duration = 0;

	} else {
		if ( typeof opt.duration !== "number" ) {
			if ( opt.duration in jQuery.fx.speeds ) {
				opt.duration = jQuery.fx.speeds[ opt.duration ];

			} else {
				opt.duration = jQuery.fx.speeds._default;
			}
		}
	}

	// Normalize opt.queue - true/undefined/null -> "fx"
	if ( opt.queue == null || opt.queue === true ) {
		opt.queue = "fx";
	}

	// Queueing
	opt.old = opt.complete;

	opt.complete = function() {
		if ( isFunction( opt.old ) ) {
			opt.old.call( this );
		}

		if ( opt.queue ) {
			jQuery.dequeue( this, opt.queue );
		}
	};

	return opt;
};

jQuery.fn.extend( {
	fadeTo: function( speed, to, easing, callback ) {

		// Show any hidden elements after setting opacity to 0
		return this.filter( isHiddenWithinTree ).css( "opacity", 0 ).show()

			// Animate to the value specified
			.end().animate( { opacity: to }, speed, easing, callback );
	},
	animate: function( prop, speed, easing, callback ) {
		var empty = jQuery.isEmptyObject( prop ),
			optall = jQuery.speed( speed, easing, callback ),
			doAnimation = function() {

				// Operate on a copy of prop so per-property easing won't be lost
				var anim = Animation( this, jQuery.extend( {}, prop ), optall );

				// Empty animations, or finishing resolves immediately
				if ( empty || dataPriv.get( this, "finish" ) ) {
					anim.stop( true );
				}
			};
			doAnimation.finish = doAnimation;

		return empty || optall.queue === false ?
			this.each( doAnimation ) :
			this.queue( optall.queue, doAnimation );
	},
	stop: function( type, clearQueue, gotoEnd ) {
		var stopQueue = function( hooks ) {
			var stop = hooks.stop;
			delete hooks.stop;
			stop( gotoEnd );
		};

		if ( typeof type !== "string" ) {
			gotoEnd = clearQueue;
			clearQueue = type;
			type = undefined;
		}
		if ( clearQueue && type !== false ) {
			this.queue( type || "fx", [] );
		}

		return this.each( function() {
			var dequeue = true,
				index = type != null && type + "queueHooks",
				timers = jQuery.timers,
				data = dataPriv.get( this );

			if ( index ) {
				if ( data[ index ] && data[ index ].stop ) {
					stopQueue( data[ index ] );
				}
			} else {
				for ( index in data ) {
					if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
						stopQueue( data[ index ] );
					}
				}
			}

			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this &&
					( type == null || timers[ index ].queue === type ) ) {

					timers[ index ].anim.stop( gotoEnd );
					dequeue = false;
					timers.splice( index, 1 );
				}
			}

			// Start the next in the queue if the last step wasn't forced.
			// Timers currently will call their complete callbacks, which
			// will dequeue but only if they were gotoEnd.
			if ( dequeue || !gotoEnd ) {
				jQuery.dequeue( this, type );
			}
		} );
	},
	finish: function( type ) {
		if ( type !== false ) {
			type = type || "fx";
		}
		return this.each( function() {
			var index,
				data = dataPriv.get( this ),
				queue = data[ type + "queue" ],
				hooks = data[ type + "queueHooks" ],
				timers = jQuery.timers,
				length = queue ? queue.length : 0;

			// Enable finishing flag on private data
			data.finish = true;

			// Empty the queue first
			jQuery.queue( this, type, [] );

			if ( hooks && hooks.stop ) {
				hooks.stop.call( this, true );
			}

			// Look for any active animations, and finish them
			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
					timers[ index ].anim.stop( true );
					timers.splice( index, 1 );
				}
			}

			// Look for any animations in the old queue and finish them
			for ( index = 0; index < length; index++ ) {
				if ( queue[ index ] && queue[ index ].finish ) {
					queue[ index ].finish.call( this );
				}
			}

			// Turn off finishing flag
			delete data.finish;
		} );
	}
} );

jQuery.each( [ "toggle", "show", "hide" ], function( i, name ) {
	var cssFn = jQuery.fn[ name ];
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return speed == null || typeof speed === "boolean" ?
			cssFn.apply( this, arguments ) :
			this.animate( genFx( name, true ), speed, easing, callback );
	};
} );

// Generate shortcuts for custom animations
jQuery.each( {
	slideDown: genFx( "show" ),
	slideUp: genFx( "hide" ),
	slideToggle: genFx( "toggle" ),
	fadeIn: { opacity: "show" },
	fadeOut: { opacity: "hide" },
	fadeToggle: { opacity: "toggle" }
}, function( name, props ) {
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return this.animate( props, speed, easing, callback );
	};
} );

jQuery.timers = [];
jQuery.fx.tick = function() {
	var timer,
		i = 0,
		timers = jQuery.timers;

	fxNow = Date.now();

	for ( ; i < timers.length; i++ ) {
		timer = timers[ i ];

		// Run the timer and safely remove it when done (allowing for external removal)
		if ( !timer() && timers[ i ] === timer ) {
			timers.splice( i--, 1 );
		}
	}

	if ( !timers.length ) {
		jQuery.fx.stop();
	}
	fxNow = undefined;
};

jQuery.fx.timer = function( timer ) {
	jQuery.timers.push( timer );
	jQuery.fx.start();
};

jQuery.fx.interval = 13;
jQuery.fx.start = function() {
	if ( inProgress ) {
		return;
	}

	inProgress = true;
	schedule();
};

jQuery.fx.stop = function() {
	inProgress = null;
};

jQuery.fx.speeds = {
	slow: 600,
	fast: 200,

	// Default speed
	_default: 400
};


// Based off of the plugin by Clint Helfers, with permission.
// https://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
jQuery.fn.delay = function( time, type ) {
	time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
	type = type || "fx";

	return this.queue( type, function( next, hooks ) {
		var timeout = window.setTimeout( next, time );
		hooks.stop = function() {
			window.clearTimeout( timeout );
		};
	} );
};


( function() {
	var input = document.createElement( "input" ),
		select = document.createElement( "select" ),
		opt = select.appendChild( document.createElement( "option" ) );

	input.type = "checkbox";

	// Support: Android <=4.3 only
	// Default value for a checkbox should be "on"
	support.checkOn = input.value !== "";

	// Support: IE <=11 only
	// Must access selectedIndex to make default options select
	support.optSelected = opt.selected;

	// Support: IE <=11 only
	// An input loses its value after becoming a radio
	input = document.createElement( "input" );
	input.value = "t";
	input.type = "radio";
	support.radioValue = input.value === "t";
} )();


var boolHook,
	attrHandle = jQuery.expr.attrHandle;

jQuery.fn.extend( {
	attr: function( name, value ) {
		return access( this, jQuery.attr, name, value, arguments.length > 1 );
	},

	removeAttr: function( name ) {
		return this.each( function() {
			jQuery.removeAttr( this, name );
		} );
	}
} );

jQuery.extend( {
	attr: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set attributes on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		// Fallback to prop when attributes are not supported
		if ( typeof elem.getAttribute === "undefined" ) {
			return jQuery.prop( elem, name, value );
		}

		// Attribute hooks are determined by the lowercase version
		// Grab necessary hook if one is defined
		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
			hooks = jQuery.attrHooks[ name.toLowerCase() ] ||
				( jQuery.expr.match.bool.test( name ) ? boolHook : undefined );
		}

		if ( value !== undefined ) {
			if ( value === null ) {
				jQuery.removeAttr( elem, name );
				return;
			}

			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			elem.setAttribute( name, value + "" );
			return value;
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		ret = jQuery.find.attr( elem, name );

		// Non-existent attributes return null, we normalize to undefined
		return ret == null ? undefined : ret;
	},

	attrHooks: {
		type: {
			set: function( elem, value ) {
				if ( !support.radioValue && value === "radio" &&
					nodeName( elem, "input" ) ) {
					var val = elem.value;
					elem.setAttribute( "type", value );
					if ( val ) {
						elem.value = val;
					}
					return value;
				}
			}
		}
	},

	removeAttr: function( elem, value ) {
		var name,
			i = 0,

			// Attribute names can contain non-HTML whitespace characters
			// https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
			attrNames = value && value.match( rnothtmlwhite );

		if ( attrNames && elem.nodeType === 1 ) {
			while ( ( name = attrNames[ i++ ] ) ) {
				elem.removeAttribute( name );
			}
		}
	}
} );

// Hooks for boolean attributes
boolHook = {
	set: function( elem, value, name ) {
		if ( value === false ) {

			// Remove boolean attributes when set to false
			jQuery.removeAttr( elem, name );
		} else {
			elem.setAttribute( name, name );
		}
		return name;
	}
};

jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( i, name ) {
	var getter = attrHandle[ name ] || jQuery.find.attr;

	attrHandle[ name ] = function( elem, name, isXML ) {
		var ret, handle,
			lowercaseName = name.toLowerCase();

		if ( !isXML ) {

			// Avoid an infinite loop by temporarily removing this function from the getter
			handle = attrHandle[ lowercaseName ];
			attrHandle[ lowercaseName ] = ret;
			ret = getter( elem, name, isXML ) != null ?
				lowercaseName :
				null;
			attrHandle[ lowercaseName ] = handle;
		}
		return ret;
	};
} );




var rfocusable = /^(?:input|select|textarea|button)$/i,
	rclickable = /^(?:a|area)$/i;

jQuery.fn.extend( {
	prop: function( name, value ) {
		return access( this, jQuery.prop, name, value, arguments.length > 1 );
	},

	removeProp: function( name ) {
		return this.each( function() {
			delete this[ jQuery.propFix[ name ] || name ];
		} );
	}
} );

jQuery.extend( {
	prop: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set properties on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {

			// Fix name and attach hooks
			name = jQuery.propFix[ name ] || name;
			hooks = jQuery.propHooks[ name ];
		}

		if ( value !== undefined ) {
			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			return ( elem[ name ] = value );
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		return elem[ name ];
	},

	propHooks: {
		tabIndex: {
			get: function( elem ) {

				// Support: IE <=9 - 11 only
				// elem.tabIndex doesn't always return the
				// correct value when it hasn't been explicitly set
				// https://web.archive.org/web/20141116233347/http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
				// Use proper attribute retrieval(#12072)
				var tabindex = jQuery.find.attr( elem, "tabindex" );

				if ( tabindex ) {
					return parseInt( tabindex, 10 );
				}

				if (
					rfocusable.test( elem.nodeName ) ||
					rclickable.test( elem.nodeName ) &&
					elem.href
				) {
					return 0;
				}

				return -1;
			}
		}
	},

	propFix: {
		"for": "htmlFor",
		"class": "className"
	}
} );

// Support: IE <=11 only
// Accessing the selectedIndex property
// forces the browser to respect setting selected
// on the option
// The getter ensures a default option is selected
// when in an optgroup
// eslint rule "no-unused-expressions" is disabled for this code
// since it considers such accessions noop
if ( !support.optSelected ) {
	jQuery.propHooks.selected = {
		get: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent && parent.parentNode ) {
				parent.parentNode.selectedIndex;
			}
			return null;
		},
		set: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent ) {
				parent.selectedIndex;

				if ( parent.parentNode ) {
					parent.parentNode.selectedIndex;
				}
			}
		}
	};
}

jQuery.each( [
	"tabIndex",
	"readOnly",
	"maxLength",
	"cellSpacing",
	"cellPadding",
	"rowSpan",
	"colSpan",
	"useMap",
	"frameBorder",
	"contentEditable"
], function() {
	jQuery.propFix[ this.toLowerCase() ] = this;
} );




	// Strip and collapse whitespace according to HTML spec
	// https://infra.spec.whatwg.org/#strip-and-collapse-ascii-whitespace
	function stripAndCollapse( value ) {
		var tokens = value.match( rnothtmlwhite ) || [];
		return tokens.join( " " );
	}


function getClass( elem ) {
	return elem.getAttribute && elem.getAttribute( "class" ) || "";
}

function classesToArray( value ) {
	if ( Array.isArray( value ) ) {
		return value;
	}
	if ( typeof value === "string" ) {
		return value.match( rnothtmlwhite ) || [];
	}
	return [];
}

jQuery.fn.extend( {
	addClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).addClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		classes = classesToArray( value );

		if ( classes.length ) {
			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {
						if ( cur.indexOf( " " + clazz + " " ) < 0 ) {
							cur += clazz + " ";
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	removeClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).removeClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		if ( !arguments.length ) {
			return this.attr( "class", "" );
		}

		classes = classesToArray( value );

		if ( classes.length ) {
			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );

				// This expression is here for better compressibility (see addClass)
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {

						// Remove *all* instances
						while ( cur.indexOf( " " + clazz + " " ) > -1 ) {
							cur = cur.replace( " " + clazz + " ", " " );
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	toggleClass: function( value, stateVal ) {
		var type = typeof value,
			isValidValue = type === "string" || Array.isArray( value );

		if ( typeof stateVal === "boolean" && isValidValue ) {
			return stateVal ? this.addClass( value ) : this.removeClass( value );
		}

		if ( isFunction( value ) ) {
			return this.each( function( i ) {
				jQuery( this ).toggleClass(
					value.call( this, i, getClass( this ), stateVal ),
					stateVal
				);
			} );
		}

		return this.each( function() {
			var className, i, self, classNames;

			if ( isValidValue ) {

				// Toggle individual class names
				i = 0;
				self = jQuery( this );
				classNames = classesToArray( value );

				while ( ( className = classNames[ i++ ] ) ) {

					// Check each className given, space separated list
					if ( self.hasClass( className ) ) {
						self.removeClass( className );
					} else {
						self.addClass( className );
					}
				}

			// Toggle whole class name
			} else if ( value === undefined || type === "boolean" ) {
				className = getClass( this );
				if ( className ) {

					// Store className if set
					dataPriv.set( this, "__className__", className );
				}

				// If the element has a class name or if we're passed `false`,
				// then remove the whole classname (if there was one, the above saved it).
				// Otherwise bring back whatever was previously saved (if anything),
				// falling back to the empty string if nothing was stored.
				if ( this.setAttribute ) {
					this.setAttribute( "class",
						className || value === false ?
						"" :
						dataPriv.get( this, "__className__" ) || ""
					);
				}
			}
		} );
	},

	hasClass: function( selector ) {
		var className, elem,
			i = 0;

		className = " " + selector + " ";
		while ( ( elem = this[ i++ ] ) ) {
			if ( elem.nodeType === 1 &&
				( " " + stripAndCollapse( getClass( elem ) ) + " " ).indexOf( className ) > -1 ) {
					return true;
			}
		}

		return false;
	}
} );




var rreturn = /\r/g;

jQuery.fn.extend( {
	val: function( value ) {
		var hooks, ret, valueIsFunction,
			elem = this[ 0 ];

		if ( !arguments.length ) {
			if ( elem ) {
				hooks = jQuery.valHooks[ elem.type ] ||
					jQuery.valHooks[ elem.nodeName.toLowerCase() ];

				if ( hooks &&
					"get" in hooks &&
					( ret = hooks.get( elem, "value" ) ) !== undefined
				) {
					return ret;
				}

				ret = elem.value;

				// Handle most common string cases
				if ( typeof ret === "string" ) {
					return ret.replace( rreturn, "" );
				}

				// Handle cases where value is null/undef or number
				return ret == null ? "" : ret;
			}

			return;
		}

		valueIsFunction = isFunction( value );

		return this.each( function( i ) {
			var val;

			if ( this.nodeType !== 1 ) {
				return;
			}

			if ( valueIsFunction ) {
				val = value.call( this, i, jQuery( this ).val() );
			} else {
				val = value;
			}

			// Treat null/undefined as ""; convert numbers to string
			if ( val == null ) {
				val = "";

			} else if ( typeof val === "number" ) {
				val += "";

			} else if ( Array.isArray( val ) ) {
				val = jQuery.map( val, function( value ) {
					return value == null ? "" : value + "";
				} );
			}

			hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];

			// If set returns undefined, fall back to normal setting
			if ( !hooks || !( "set" in hooks ) || hooks.set( this, val, "value" ) === undefined ) {
				this.value = val;
			}
		} );
	}
} );

jQuery.extend( {
	valHooks: {
		option: {
			get: function( elem ) {

				var val = jQuery.find.attr( elem, "value" );
				return val != null ?
					val :

					// Support: IE <=10 - 11 only
					// option.text throws exceptions (#14686, #14858)
					// Strip and collapse whitespace
					// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
					stripAndCollapse( jQuery.text( elem ) );
			}
		},
		select: {
			get: function( elem ) {
				var value, option, i,
					options = elem.options,
					index = elem.selectedIndex,
					one = elem.type === "select-one",
					values = one ? null : [],
					max = one ? index + 1 : options.length;

				if ( index < 0 ) {
					i = max;

				} else {
					i = one ? index : 0;
				}

				// Loop through all the selected options
				for ( ; i < max; i++ ) {
					option = options[ i ];

					// Support: IE <=9 only
					// IE8-9 doesn't update selected after form reset (#2551)
					if ( ( option.selected || i === index ) &&

							// Don't return options that are disabled or in a disabled optgroup
							!option.disabled &&
							( !option.parentNode.disabled ||
								!nodeName( option.parentNode, "optgroup" ) ) ) {

						// Get the specific value for the option
						value = jQuery( option ).val();

						// We don't need an array for one selects
						if ( one ) {
							return value;
						}

						// Multi-Selects return an array
						values.push( value );
					}
				}

				return values;
			},

			set: function( elem, value ) {
				var optionSet, option,
					options = elem.options,
					values = jQuery.makeArray( value ),
					i = options.length;

				while ( i-- ) {
					option = options[ i ];

					/* eslint-disable no-cond-assign */

					if ( option.selected =
						jQuery.inArray( jQuery.valHooks.option.get( option ), values ) > -1
					) {
						optionSet = true;
					}

					/* eslint-enable no-cond-assign */
				}

				// Force browsers to behave consistently when non-matching value is set
				if ( !optionSet ) {
					elem.selectedIndex = -1;
				}
				return values;
			}
		}
	}
} );

// Radios and checkboxes getter/setter
jQuery.each( [ "radio", "checkbox" ], function() {
	jQuery.valHooks[ this ] = {
		set: function( elem, value ) {
			if ( Array.isArray( value ) ) {
				return ( elem.checked = jQuery.inArray( jQuery( elem ).val(), value ) > -1 );
			}
		}
	};
	if ( !support.checkOn ) {
		jQuery.valHooks[ this ].get = function( elem ) {
			return elem.getAttribute( "value" ) === null ? "on" : elem.value;
		};
	}
} );




// Return jQuery for attributes-only inclusion


support.focusin = "onfocusin" in window;


var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/,
	stopPropagationCallback = function( e ) {
		e.stopPropagation();
	};

jQuery.extend( jQuery.event, {

	trigger: function( event, data, elem, onlyHandlers ) {

		var i, cur, tmp, bubbleType, ontype, handle, special, lastElement,
			eventPath = [ elem || document ],
			type = hasOwn.call( event, "type" ) ? event.type : event,
			namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split( "." ) : [];

		cur = lastElement = tmp = elem = elem || document;

		// Don't do events on text and comment nodes
		if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
			return;
		}

		// focus/blur morphs to focusin/out; ensure we're not firing them right now
		if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
			return;
		}

		if ( type.indexOf( "." ) > -1 ) {

			// Namespaced trigger; create a regexp to match event type in handle()
			namespaces = type.split( "." );
			type = namespaces.shift();
			namespaces.sort();
		}
		ontype = type.indexOf( ":" ) < 0 && "on" + type;

		// Caller can pass in a jQuery.Event object, Object, or just an event type string
		event = event[ jQuery.expando ] ?
			event :
			new jQuery.Event( type, typeof event === "object" && event );

		// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
		event.isTrigger = onlyHandlers ? 2 : 3;
		event.namespace = namespaces.join( "." );
		event.rnamespace = event.namespace ?
			new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" ) :
			null;

		// Clean up the event in case it is being reused
		event.result = undefined;
		if ( !event.target ) {
			event.target = elem;
		}

		// Clone any incoming data and prepend the event, creating the handler arg list
		data = data == null ?
			[ event ] :
			jQuery.makeArray( data, [ event ] );

		// Allow special events to draw outside the lines
		special = jQuery.event.special[ type ] || {};
		if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
			return;
		}

		// Determine event propagation path in advance, per W3C events spec (#9951)
		// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
		if ( !onlyHandlers && !special.noBubble && !isWindow( elem ) ) {

			bubbleType = special.delegateType || type;
			if ( !rfocusMorph.test( bubbleType + type ) ) {
				cur = cur.parentNode;
			}
			for ( ; cur; cur = cur.parentNode ) {
				eventPath.push( cur );
				tmp = cur;
			}

			// Only add window if we got to document (e.g., not plain obj or detached DOM)
			if ( tmp === ( elem.ownerDocument || document ) ) {
				eventPath.push( tmp.defaultView || tmp.parentWindow || window );
			}
		}

		// Fire handlers on the event path
		i = 0;
		while ( ( cur = eventPath[ i++ ] ) && !event.isPropagationStopped() ) {
			lastElement = cur;
			event.type = i > 1 ?
				bubbleType :
				special.bindType || type;

			// jQuery handler
			handle = ( dataPriv.get( cur, "events" ) || {} )[ event.type ] &&
				dataPriv.get( cur, "handle" );
			if ( handle ) {
				handle.apply( cur, data );
			}

			// Native handler
			handle = ontype && cur[ ontype ];
			if ( handle && handle.apply && acceptData( cur ) ) {
				event.result = handle.apply( cur, data );
				if ( event.result === false ) {
					event.preventDefault();
				}
			}
		}
		event.type = type;

		// If nobody prevented the default action, do it now
		if ( !onlyHandlers && !event.isDefaultPrevented() ) {

			if ( ( !special._default ||
				special._default.apply( eventPath.pop(), data ) === false ) &&
				acceptData( elem ) ) {

				// Call a native DOM method on the target with the same name as the event.
				// Don't do default actions on window, that's where global variables be (#6170)
				if ( ontype && isFunction( elem[ type ] ) && !isWindow( elem ) ) {

					// Don't re-trigger an onFOO event when we call its FOO() method
					tmp = elem[ ontype ];

					if ( tmp ) {
						elem[ ontype ] = null;
					}

					// Prevent re-triggering of the same event, since we already bubbled it above
					jQuery.event.triggered = type;

					if ( event.isPropagationStopped() ) {
						lastElement.addEventListener( type, stopPropagationCallback );
					}

					elem[ type ]();

					if ( event.isPropagationStopped() ) {
						lastElement.removeEventListener( type, stopPropagationCallback );
					}

					jQuery.event.triggered = undefined;

					if ( tmp ) {
						elem[ ontype ] = tmp;
					}
				}
			}
		}

		return event.result;
	},

	// Piggyback on a donor event to simulate a different one
	// Used only for `focus(in | out)` events
	simulate: function( type, elem, event ) {
		var e = jQuery.extend(
			new jQuery.Event(),
			event,
			{
				type: type,
				isSimulated: true
			}
		);

		jQuery.event.trigger( e, null, elem );
	}

} );

jQuery.fn.extend( {

	trigger: function( type, data ) {
		return this.each( function() {
			jQuery.event.trigger( type, data, this );
		} );
	},
	triggerHandler: function( type, data ) {
		var elem = this[ 0 ];
		if ( elem ) {
			return jQuery.event.trigger( type, data, elem, true );
		}
	}
} );


// Support: Firefox <=44
// Firefox doesn't have focus(in | out) events
// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
//
// Support: Chrome <=48 - 49, Safari <=9.0 - 9.1
// focus(in | out) events fire after focus & blur events,
// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
// Related ticket - https://bugs.chromium.org/p/chromium/issues/detail?id=449857
if ( !support.focusin ) {
	jQuery.each( { focus: "focusin", blur: "focusout" }, function( orig, fix ) {

		// Attach a single capturing handler on the document while someone wants focusin/focusout
		var handler = function( event ) {
			jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ) );
		};

		jQuery.event.special[ fix ] = {
			setup: function() {
				var doc = this.ownerDocument || this,
					attaches = dataPriv.access( doc, fix );

				if ( !attaches ) {
					doc.addEventListener( orig, handler, true );
				}
				dataPriv.access( doc, fix, ( attaches || 0 ) + 1 );
			},
			teardown: function() {
				var doc = this.ownerDocument || this,
					attaches = dataPriv.access( doc, fix ) - 1;

				if ( !attaches ) {
					doc.removeEventListener( orig, handler, true );
					dataPriv.remove( doc, fix );

				} else {
					dataPriv.access( doc, fix, attaches );
				}
			}
		};
	} );
}
var location = window.location;

var nonce = Date.now();

var rquery = ( /\?/ );



// Cross-browser xml parsing
jQuery.parseXML = function( data ) {
	var xml;
	if ( !data || typeof data !== "string" ) {
		return null;
	}

	// Support: IE 9 - 11 only
	// IE throws on parseFromString with invalid input.
	try {
		xml = ( new window.DOMParser() ).parseFromString( data, "text/xml" );
	} catch ( e ) {
		xml = undefined;
	}

	if ( !xml || xml.getElementsByTagName( "parsererror" ).length ) {
		jQuery.error( "Invalid XML: " + data );
	}
	return xml;
};


var
	rbracket = /\[\]$/,
	rCRLF = /\r?\n/g,
	rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
	rsubmittable = /^(?:input|select|textarea|keygen)/i;

function buildParams( prefix, obj, traditional, add ) {
	var name;

	if ( Array.isArray( obj ) ) {

		// Serialize array item.
		jQuery.each( obj, function( i, v ) {
			if ( traditional || rbracket.test( prefix ) ) {

				// Treat each array item as a scalar.
				add( prefix, v );

			} else {

				// Item is non-scalar (array or object), encode its numeric index.
				buildParams(
					prefix + "[" + ( typeof v === "object" && v != null ? i : "" ) + "]",
					v,
					traditional,
					add
				);
			}
		} );

	} else if ( !traditional && toType( obj ) === "object" ) {

		// Serialize object item.
		for ( name in obj ) {
			buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
		}

	} else {

		// Serialize scalar item.
		add( prefix, obj );
	}
}

// Serialize an array of form elements or a set of
// key/values into a query string
jQuery.param = function( a, traditional ) {
	var prefix,
		s = [],
		add = function( key, valueOrFunction ) {

			// If value is a function, invoke it and use its return value
			var value = isFunction( valueOrFunction ) ?
				valueOrFunction() :
				valueOrFunction;

			s[ s.length ] = encodeURIComponent( key ) + "=" +
				encodeURIComponent( value == null ? "" : value );
		};

	if ( a == null ) {
		return "";
	}

	// If an array was passed in, assume that it is an array of form elements.
	if ( Array.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {

		// Serialize the form elements
		jQuery.each( a, function() {
			add( this.name, this.value );
		} );

	} else {

		// If traditional, encode the "old" way (the way 1.3.2 or older
		// did it), otherwise encode params recursively.
		for ( prefix in a ) {
			buildParams( prefix, a[ prefix ], traditional, add );
		}
	}

	// Return the resulting serialization
	return s.join( "&" );
};

jQuery.fn.extend( {
	serialize: function() {
		return jQuery.param( this.serializeArray() );
	},
	serializeArray: function() {
		return this.map( function() {

			// Can add propHook for "elements" to filter or add form elements
			var elements = jQuery.prop( this, "elements" );
			return elements ? jQuery.makeArray( elements ) : this;
		} )
		.filter( function() {
			var type = this.type;

			// Use .is( ":disabled" ) so that fieldset[disabled] works
			return this.name && !jQuery( this ).is( ":disabled" ) &&
				rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
				( this.checked || !rcheckableType.test( type ) );
		} )
		.map( function( i, elem ) {
			var val = jQuery( this ).val();

			if ( val == null ) {
				return null;
			}

			if ( Array.isArray( val ) ) {
				return jQuery.map( val, function( val ) {
					return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
				} );
			}

			return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
		} ).get();
	}
} );


var
	r20 = /%20/g,
	rhash = /#.*$/,
	rantiCache = /([?&])_=[^&]*/,
	rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,

	// #7653, #8125, #8152: local protocol detection
	rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
	rnoContent = /^(?:GET|HEAD)$/,
	rprotocol = /^\/\//,

	/* Prefilters
	 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
	 * 2) These are called:
	 *    - BEFORE asking for a transport
	 *    - AFTER param serialization (s.data is a string if s.processData is true)
	 * 3) key is the dataType
	 * 4) the catchall symbol "*" can be used
	 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
	 */
	prefilters = {},

	/* Transports bindings
	 * 1) key is the dataType
	 * 2) the catchall symbol "*" can be used
	 * 3) selection will start with transport dataType and THEN go to "*" if needed
	 */
	transports = {},

	// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
	allTypes = "*/".concat( "*" ),

	// Anchor tag for parsing the document origin
	originAnchor = document.createElement( "a" );
	originAnchor.href = location.href;

// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
function addToPrefiltersOrTransports( structure ) {

	// dataTypeExpression is optional and defaults to "*"
	return function( dataTypeExpression, func ) {

		if ( typeof dataTypeExpression !== "string" ) {
			func = dataTypeExpression;
			dataTypeExpression = "*";
		}

		var dataType,
			i = 0,
			dataTypes = dataTypeExpression.toLowerCase().match( rnothtmlwhite ) || [];

		if ( isFunction( func ) ) {

			// For each dataType in the dataTypeExpression
			while ( ( dataType = dataTypes[ i++ ] ) ) {

				// Prepend if requested
				if ( dataType[ 0 ] === "+" ) {
					dataType = dataType.slice( 1 ) || "*";
					( structure[ dataType ] = structure[ dataType ] || [] ).unshift( func );

				// Otherwise append
				} else {
					( structure[ dataType ] = structure[ dataType ] || [] ).push( func );
				}
			}
		}
	};
}

// Base inspection function for prefilters and transports
function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {

	var inspected = {},
		seekingTransport = ( structure === transports );

	function inspect( dataType ) {
		var selected;
		inspected[ dataType ] = true;
		jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
			var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
			if ( typeof dataTypeOrTransport === "string" &&
				!seekingTransport && !inspected[ dataTypeOrTransport ] ) {

				options.dataTypes.unshift( dataTypeOrTransport );
				inspect( dataTypeOrTransport );
				return false;
			} else if ( seekingTransport ) {
				return !( selected = dataTypeOrTransport );
			}
		} );
		return selected;
	}

	return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
}

// A special extend for ajax options
// that takes "flat" options (not to be deep extended)
// Fixes #9887
function ajaxExtend( target, src ) {
	var key, deep,
		flatOptions = jQuery.ajaxSettings.flatOptions || {};

	for ( key in src ) {
		if ( src[ key ] !== undefined ) {
			( flatOptions[ key ] ? target : ( deep || ( deep = {} ) ) )[ key ] = src[ key ];
		}
	}
	if ( deep ) {
		jQuery.extend( true, target, deep );
	}

	return target;
}

/* Handles responses to an ajax request:
 * - finds the right dataType (mediates between content-type and expected dataType)
 * - returns the corresponding response
 */
function ajaxHandleResponses( s, jqXHR, responses ) {

	var ct, type, finalDataType, firstDataType,
		contents = s.contents,
		dataTypes = s.dataTypes;

	// Remove auto dataType and get content-type in the process
	while ( dataTypes[ 0 ] === "*" ) {
		dataTypes.shift();
		if ( ct === undefined ) {
			ct = s.mimeType || jqXHR.getResponseHeader( "Content-Type" );
		}
	}

	// Check if we're dealing with a known content-type
	if ( ct ) {
		for ( type in contents ) {
			if ( contents[ type ] && contents[ type ].test( ct ) ) {
				dataTypes.unshift( type );
				break;
			}
		}
	}

	// Check to see if we have a response for the expected dataType
	if ( dataTypes[ 0 ] in responses ) {
		finalDataType = dataTypes[ 0 ];
	} else {

		// Try convertible dataTypes
		for ( type in responses ) {
			if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[ 0 ] ] ) {
				finalDataType = type;
				break;
			}
			if ( !firstDataType ) {
				firstDataType = type;
			}
		}

		// Or just use first one
		finalDataType = finalDataType || firstDataType;
	}

	// If we found a dataType
	// We add the dataType to the list if needed
	// and return the corresponding response
	if ( finalDataType ) {
		if ( finalDataType !== dataTypes[ 0 ] ) {
			dataTypes.unshift( finalDataType );
		}
		return responses[ finalDataType ];
	}
}

/* Chain conversions given the request and the original response
 * Also sets the responseXXX fields on the jqXHR instance
 */
function ajaxConvert( s, response, jqXHR, isSuccess ) {
	var conv2, current, conv, tmp, prev,
		converters = {},

		// Work with a copy of dataTypes in case we need to modify it for conversion
		dataTypes = s.dataTypes.slice();

	// Create converters map with lowercased keys
	if ( dataTypes[ 1 ] ) {
		for ( conv in s.converters ) {
			converters[ conv.toLowerCase() ] = s.converters[ conv ];
		}
	}

	current = dataTypes.shift();

	// Convert to each sequential dataType
	while ( current ) {

		if ( s.responseFields[ current ] ) {
			jqXHR[ s.responseFields[ current ] ] = response;
		}

		// Apply the dataFilter if provided
		if ( !prev && isSuccess && s.dataFilter ) {
			response = s.dataFilter( response, s.dataType );
		}

		prev = current;
		current = dataTypes.shift();

		if ( current ) {

			// There's only work to do if current dataType is non-auto
			if ( current === "*" ) {

				current = prev;

			// Convert response if prev dataType is non-auto and differs from current
			} else if ( prev !== "*" && prev !== current ) {

				// Seek a direct converter
				conv = converters[ prev + " " + current ] || converters[ "* " + current ];

				// If none found, seek a pair
				if ( !conv ) {
					for ( conv2 in converters ) {

						// If conv2 outputs current
						tmp = conv2.split( " " );
						if ( tmp[ 1 ] === current ) {

							// If prev can be converted to accepted input
							conv = converters[ prev + " " + tmp[ 0 ] ] ||
								converters[ "* " + tmp[ 0 ] ];
							if ( conv ) {

								// Condense equivalence converters
								if ( conv === true ) {
									conv = converters[ conv2 ];

								// Otherwise, insert the intermediate dataType
								} else if ( converters[ conv2 ] !== true ) {
									current = tmp[ 0 ];
									dataTypes.unshift( tmp[ 1 ] );
								}
								break;
							}
						}
					}
				}

				// Apply converter (if not an equivalence)
				if ( conv !== true ) {

					// Unless errors are allowed to bubble, catch and return them
					if ( conv && s.throws ) {
						response = conv( response );
					} else {
						try {
							response = conv( response );
						} catch ( e ) {
							return {
								state: "parsererror",
								error: conv ? e : "No conversion from " + prev + " to " + current
							};
						}
					}
				}
			}
		}
	}

	return { state: "success", data: response };
}

jQuery.extend( {

	// Counter for holding the number of active queries
	active: 0,

	// Last-Modified header cache for next request
	lastModified: {},
	etag: {},

	ajaxSettings: {
		url: location.href,
		type: "GET",
		isLocal: rlocalProtocol.test( location.protocol ),
		global: true,
		processData: true,
		async: true,
		contentType: "application/x-www-form-urlencoded; charset=UTF-8",

		/*
		timeout: 0,
		data: null,
		dataType: null,
		username: null,
		password: null,
		cache: null,
		throws: false,
		traditional: false,
		headers: {},
		*/

		accepts: {
			"*": allTypes,
			text: "text/plain",
			html: "text/html",
			xml: "application/xml, text/xml",
			json: "application/json, text/javascript"
		},

		contents: {
			xml: /\bxml\b/,
			html: /\bhtml/,
			json: /\bjson\b/
		},

		responseFields: {
			xml: "responseXML",
			text: "responseText",
			json: "responseJSON"
		},

		// Data converters
		// Keys separate source (or catchall "*") and destination types with a single space
		converters: {

			// Convert anything to text
			"* text": String,

			// Text to html (true = no transformation)
			"text html": true,

			// Evaluate text as a json expression
			"text json": JSON.parse,

			// Parse text as xml
			"text xml": jQuery.parseXML
		},

		// For options that shouldn't be deep extended:
		// you can add your own custom options here if
		// and when you create one that shouldn't be
		// deep extended (see ajaxExtend)
		flatOptions: {
			url: true,
			context: true
		}
	},

	// Creates a full fledged settings object into target
	// with both ajaxSettings and settings fields.
	// If target is omitted, writes into ajaxSettings.
	ajaxSetup: function( target, settings ) {
		return settings ?

			// Building a settings object
			ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :

			// Extending ajaxSettings
			ajaxExtend( jQuery.ajaxSettings, target );
	},

	ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
	ajaxTransport: addToPrefiltersOrTransports( transports ),

	// Main method
	ajax: function( url, options ) {

		// If url is an object, simulate pre-1.5 signature
		if ( typeof url === "object" ) {
			options = url;
			url = undefined;
		}

		// Force options to be an object
		options = options || {};

		var transport,

			// URL without anti-cache param
			cacheURL,

			// Response headers
			responseHeadersString,
			responseHeaders,

			// timeout handle
			timeoutTimer,

			// Url cleanup var
			urlAnchor,

			// Request state (becomes false upon send and true upon completion)
			completed,

			// To know if global events are to be dispatched
			fireGlobals,

			// Loop variable
			i,

			// uncached part of the url
			uncached,

			// Create the final options object
			s = jQuery.ajaxSetup( {}, options ),

			// Callbacks context
			callbackContext = s.context || s,

			// Context for global events is callbackContext if it is a DOM node or jQuery collection
			globalEventContext = s.context &&
				( callbackContext.nodeType || callbackContext.jquery ) ?
					jQuery( callbackContext ) :
					jQuery.event,

			// Deferreds
			deferred = jQuery.Deferred(),
			completeDeferred = jQuery.Callbacks( "once memory" ),

			// Status-dependent callbacks
			statusCode = s.statusCode || {},

			// Headers (they are sent all at once)
			requestHeaders = {},
			requestHeadersNames = {},

			// Default abort message
			strAbort = "canceled",

			// Fake xhr
			jqXHR = {
				readyState: 0,

				// Builds headers hashtable if needed
				getResponseHeader: function( key ) {
					var match;
					if ( completed ) {
						if ( !responseHeaders ) {
							responseHeaders = {};
							while ( ( match = rheaders.exec( responseHeadersString ) ) ) {
								responseHeaders[ match[ 1 ].toLowerCase() + " " ] =
									( responseHeaders[ match[ 1 ].toLowerCase() + " " ] || [] )
										.concat( match[ 2 ] );
							}
						}
						match = responseHeaders[ key.toLowerCase() + " " ];
					}
					return match == null ? null : match.join( ", " );
				},

				// Raw string
				getAllResponseHeaders: function() {
					return completed ? responseHeadersString : null;
				},

				// Caches the header
				setRequestHeader: function( name, value ) {
					if ( completed == null ) {
						name = requestHeadersNames[ name.toLowerCase() ] =
							requestHeadersNames[ name.toLowerCase() ] || name;
						requestHeaders[ name ] = value;
					}
					return this;
				},

				// Overrides response content-type header
				overrideMimeType: function( type ) {
					if ( completed == null ) {
						s.mimeType = type;
					}
					return this;
				},

				// Status-dependent callbacks
				statusCode: function( map ) {
					var code;
					if ( map ) {
						if ( completed ) {

							// Execute the appropriate callbacks
							jqXHR.always( map[ jqXHR.status ] );
						} else {

							// Lazy-add the new callbacks in a way that preserves old ones
							for ( code in map ) {
								statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
							}
						}
					}
					return this;
				},

				// Cancel the request
				abort: function( statusText ) {
					var finalText = statusText || strAbort;
					if ( transport ) {
						transport.abort( finalText );
					}
					done( 0, finalText );
					return this;
				}
			};

		// Attach deferreds
		deferred.promise( jqXHR );

		// Add protocol if not provided (prefilters might expect it)
		// Handle falsy url in the settings object (#10093: consistency with old signature)
		// We also use the url parameter if available
		s.url = ( ( url || s.url || location.href ) + "" )
			.replace( rprotocol, location.protocol + "//" );

		// Alias method option to type as per ticket #12004
		s.type = options.method || options.type || s.method || s.type;

		// Extract dataTypes list
		s.dataTypes = ( s.dataType || "*" ).toLowerCase().match( rnothtmlwhite ) || [ "" ];

		// A cross-domain request is in order when the origin doesn't match the current origin.
		if ( s.crossDomain == null ) {
			urlAnchor = document.createElement( "a" );

			// Support: IE <=8 - 11, Edge 12 - 15
			// IE throws exception on accessing the href property if url is malformed,
			// e.g. http://example.com:80x/
			try {
				urlAnchor.href = s.url;

				// Support: IE <=8 - 11 only
				// Anchor's host property isn't correctly set when s.url is relative
				urlAnchor.href = urlAnchor.href;
				s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !==
					urlAnchor.protocol + "//" + urlAnchor.host;
			} catch ( e ) {

				// If there is an error parsing the URL, assume it is crossDomain,
				// it can be rejected by the transport if it is invalid
				s.crossDomain = true;
			}
		}

		// Convert data if not already a string
		if ( s.data && s.processData && typeof s.data !== "string" ) {
			s.data = jQuery.param( s.data, s.traditional );
		}

		// Apply prefilters
		inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );

		// If request was aborted inside a prefilter, stop there
		if ( completed ) {
			return jqXHR;
		}

		// We can fire global events as of now if asked to
		// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
		fireGlobals = jQuery.event && s.global;

		// Watch for a new set of requests
		if ( fireGlobals && jQuery.active++ === 0 ) {
			jQuery.event.trigger( "ajaxStart" );
		}

		// Uppercase the type
		s.type = s.type.toUpperCase();

		// Determine if request has content
		s.hasContent = !rnoContent.test( s.type );

		// Save the URL in case we're toying with the If-Modified-Since
		// and/or If-None-Match header later on
		// Remove hash to simplify url manipulation
		cacheURL = s.url.replace( rhash, "" );

		// More options handling for requests with no content
		if ( !s.hasContent ) {

			// Remember the hash so we can put it back
			uncached = s.url.slice( cacheURL.length );

			// If data is available and should be processed, append data to url
			if ( s.data && ( s.processData || typeof s.data === "string" ) ) {
				cacheURL += ( rquery.test( cacheURL ) ? "&" : "?" ) + s.data;

				// #9682: remove data so that it's not used in an eventual retry
				delete s.data;
			}

			// Add or update anti-cache param if needed
			if ( s.cache === false ) {
				cacheURL = cacheURL.replace( rantiCache, "$1" );
				uncached = ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + ( nonce++ ) + uncached;
			}

			// Put hash and anti-cache on the URL that will be requested (gh-1732)
			s.url = cacheURL + uncached;

		// Change '%20' to '+' if this is encoded form body content (gh-2658)
		} else if ( s.data && s.processData &&
			( s.contentType || "" ).indexOf( "application/x-www-form-urlencoded" ) === 0 ) {
			s.data = s.data.replace( r20, "+" );
		}

		// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
		if ( s.ifModified ) {
			if ( jQuery.lastModified[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
			}
			if ( jQuery.etag[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
			}
		}

		// Set the correct header, if data is being sent
		if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
			jqXHR.setRequestHeader( "Content-Type", s.contentType );
		}

		// Set the Accepts header for the server, depending on the dataType
		jqXHR.setRequestHeader(
			"Accept",
			s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[ 0 ] ] ?
				s.accepts[ s.dataTypes[ 0 ] ] +
					( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
				s.accepts[ "*" ]
		);

		// Check for headers option
		for ( i in s.headers ) {
			jqXHR.setRequestHeader( i, s.headers[ i ] );
		}

		// Allow custom headers/mimetypes and early abort
		if ( s.beforeSend &&
			( s.beforeSend.call( callbackContext, jqXHR, s ) === false || completed ) ) {

			// Abort if not done already and return
			return jqXHR.abort();
		}

		// Aborting is no longer a cancellation
		strAbort = "abort";

		// Install callbacks on deferreds
		completeDeferred.add( s.complete );
		jqXHR.done( s.success );
		jqXHR.fail( s.error );

		// Get transport
		transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );

		// If no transport, we auto-abort
		if ( !transport ) {
			done( -1, "No Transport" );
		} else {
			jqXHR.readyState = 1;

			// Send global event
			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
			}

			// If request was aborted inside ajaxSend, stop there
			if ( completed ) {
				return jqXHR;
			}

			// Timeout
			if ( s.async && s.timeout > 0 ) {
				timeoutTimer = window.setTimeout( function() {
					jqXHR.abort( "timeout" );
				}, s.timeout );
			}

			try {
				completed = false;
				transport.send( requestHeaders, done );
			} catch ( e ) {

				// Rethrow post-completion exceptions
				if ( completed ) {
					throw e;
				}

				// Propagate others as results
				done( -1, e );
			}
		}

		// Callback for when everything is done
		function done( status, nativeStatusText, responses, headers ) {
			var isSuccess, success, error, response, modified,
				statusText = nativeStatusText;

			// Ignore repeat invocations
			if ( completed ) {
				return;
			}

			completed = true;

			// Clear timeout if it exists
			if ( timeoutTimer ) {
				window.clearTimeout( timeoutTimer );
			}

			// Dereference transport for early garbage collection
			// (no matter how long the jqXHR object will be used)
			transport = undefined;

			// Cache response headers
			responseHeadersString = headers || "";

			// Set readyState
			jqXHR.readyState = status > 0 ? 4 : 0;

			// Determine if successful
			isSuccess = status >= 200 && status < 300 || status === 304;

			// Get response data
			if ( responses ) {
				response = ajaxHandleResponses( s, jqXHR, responses );
			}

			// Convert no matter what (that way responseXXX fields are always set)
			response = ajaxConvert( s, response, jqXHR, isSuccess );

			// If successful, handle type chaining
			if ( isSuccess ) {

				// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
				if ( s.ifModified ) {
					modified = jqXHR.getResponseHeader( "Last-Modified" );
					if ( modified ) {
						jQuery.lastModified[ cacheURL ] = modified;
					}
					modified = jqXHR.getResponseHeader( "etag" );
					if ( modified ) {
						jQuery.etag[ cacheURL ] = modified;
					}
				}

				// if no content
				if ( status === 204 || s.type === "HEAD" ) {
					statusText = "nocontent";

				// if not modified
				} else if ( status === 304 ) {
					statusText = "notmodified";

				// If we have data, let's convert it
				} else {
					statusText = response.state;
					success = response.data;
					error = response.error;
					isSuccess = !error;
				}
			} else {

				// Extract error from statusText and normalize for non-aborts
				error = statusText;
				if ( status || !statusText ) {
					statusText = "error";
					if ( status < 0 ) {
						status = 0;
					}
				}
			}

			// Set data for the fake xhr object
			jqXHR.status = status;
			jqXHR.statusText = ( nativeStatusText || statusText ) + "";

			// Success/Error
			if ( isSuccess ) {
				deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
			} else {
				deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
			}

			// Status-dependent callbacks
			jqXHR.statusCode( statusCode );
			statusCode = undefined;

			if ( fireGlobals ) {
				globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
					[ jqXHR, s, isSuccess ? success : error ] );
			}

			// Complete
			completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );

			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );

				// Handle the global AJAX counter
				if ( !( --jQuery.active ) ) {
					jQuery.event.trigger( "ajaxStop" );
				}
			}
		}

		return jqXHR;
	},

	getJSON: function( url, data, callback ) {
		return jQuery.get( url, data, callback, "json" );
	},

	getScript: function( url, callback ) {
		return jQuery.get( url, undefined, callback, "script" );
	}
} );

jQuery.each( [ "get", "post" ], function( i, method ) {
	jQuery[ method ] = function( url, data, callback, type ) {

		// Shift arguments if data argument was omitted
		if ( isFunction( data ) ) {
			type = type || callback;
			callback = data;
			data = undefined;
		}

		// The url can be an options object (which then must have .url)
		return jQuery.ajax( jQuery.extend( {
			url: url,
			type: method,
			dataType: type,
			data: data,
			success: callback
		}, jQuery.isPlainObject( url ) && url ) );
	};
} );


jQuery._evalUrl = function( url, options ) {
	return jQuery.ajax( {
		url: url,

		// Make this explicit, since user can override this through ajaxSetup (#11264)
		type: "GET",
		dataType: "script",
		cache: true,
		async: false,
		global: false,

		// Only evaluate the response if it is successful (gh-4126)
		// dataFilter is not invoked for failure responses, so using it instead
		// of the default converter is kludgy but it works.
		converters: {
			"text script": function() {}
		},
		dataFilter: function( response ) {
			jQuery.globalEval( response, options );
		}
	} );
};


jQuery.fn.extend( {
	wrapAll: function( html ) {
		var wrap;

		if ( this[ 0 ] ) {
			if ( isFunction( html ) ) {
				html = html.call( this[ 0 ] );
			}

			// The elements to wrap the target around
			wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );

			if ( this[ 0 ].parentNode ) {
				wrap.insertBefore( this[ 0 ] );
			}

			wrap.map( function() {
				var elem = this;

				while ( elem.firstElementChild ) {
					elem = elem.firstElementChild;
				}

				return elem;
			} ).append( this );
		}

		return this;
	},

	wrapInner: function( html ) {
		if ( isFunction( html ) ) {
			return this.each( function( i ) {
				jQuery( this ).wrapInner( html.call( this, i ) );
			} );
		}

		return this.each( function() {
			var self = jQuery( this ),
				contents = self.contents();

			if ( contents.length ) {
				contents.wrapAll( html );

			} else {
				self.append( html );
			}
		} );
	},

	wrap: function( html ) {
		var htmlIsFunction = isFunction( html );

		return this.each( function( i ) {
			jQuery( this ).wrapAll( htmlIsFunction ? html.call( this, i ) : html );
		} );
	},

	unwrap: function( selector ) {
		this.parent( selector ).not( "body" ).each( function() {
			jQuery( this ).replaceWith( this.childNodes );
		} );
		return this;
	}
} );


jQuery.expr.pseudos.hidden = function( elem ) {
	return !jQuery.expr.pseudos.visible( elem );
};
jQuery.expr.pseudos.visible = function( elem ) {
	return !!( elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length );
};




jQuery.ajaxSettings.xhr = function() {
	try {
		return new window.XMLHttpRequest();
	} catch ( e ) {}
};

var xhrSuccessStatus = {

		// File protocol always yields status code 0, assume 200
		0: 200,

		// Support: IE <=9 only
		// #1450: sometimes IE returns 1223 when it should be 204
		1223: 204
	},
	xhrSupported = jQuery.ajaxSettings.xhr();

support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
support.ajax = xhrSupported = !!xhrSupported;

jQuery.ajaxTransport( function( options ) {
	var callback, errorCallback;

	// Cross domain only allowed if supported through XMLHttpRequest
	if ( support.cors || xhrSupported && !options.crossDomain ) {
		return {
			send: function( headers, complete ) {
				var i,
					xhr = options.xhr();

				xhr.open(
					options.type,
					options.url,
					options.async,
					options.username,
					options.password
				);

				// Apply custom fields if provided
				if ( options.xhrFields ) {
					for ( i in options.xhrFields ) {
						xhr[ i ] = options.xhrFields[ i ];
					}
				}

				// Override mime type if needed
				if ( options.mimeType && xhr.overrideMimeType ) {
					xhr.overrideMimeType( options.mimeType );
				}

				// X-Requested-With header
				// For cross-domain requests, seeing as conditions for a preflight are
				// akin to a jigsaw puzzle, we simply never set it to be sure.
				// (it can always be set on a per-request basis or even using ajaxSetup)
				// For same-domain requests, won't change header if already provided.
				if ( !options.crossDomain && !headers[ "X-Requested-With" ] ) {
					headers[ "X-Requested-With" ] = "XMLHttpRequest";
				}

				// Set headers
				for ( i in headers ) {
					xhr.setRequestHeader( i, headers[ i ] );
				}

				// Callback
				callback = function( type ) {
					return function() {
						if ( callback ) {
							callback = errorCallback = xhr.onload =
								xhr.onerror = xhr.onabort = xhr.ontimeout =
									xhr.onreadystatechange = null;

							if ( type === "abort" ) {
								xhr.abort();
							} else if ( type === "error" ) {

								// Support: IE <=9 only
								// On a manual native abort, IE9 throws
								// errors on any property access that is not readyState
								if ( typeof xhr.status !== "number" ) {
									complete( 0, "error" );
								} else {
									complete(

										// File: protocol always yields status 0; see #8605, #14207
										xhr.status,
										xhr.statusText
									);
								}
							} else {
								complete(
									xhrSuccessStatus[ xhr.status ] || xhr.status,
									xhr.statusText,

									// Support: IE <=9 only
									// IE9 has no XHR2 but throws on binary (trac-11426)
									// For XHR2 non-text, let the caller handle it (gh-2498)
									( xhr.responseType || "text" ) !== "text"  ||
									typeof xhr.responseText !== "string" ?
										{ binary: xhr.response } :
										{ text: xhr.responseText },
									xhr.getAllResponseHeaders()
								);
							}
						}
					};
				};

				// Listen to events
				xhr.onload = callback();
				errorCallback = xhr.onerror = xhr.ontimeout = callback( "error" );

				// Support: IE 9 only
				// Use onreadystatechange to replace onabort
				// to handle uncaught aborts
				if ( xhr.onabort !== undefined ) {
					xhr.onabort = errorCallback;
				} else {
					xhr.onreadystatechange = function() {

						// Check readyState before timeout as it changes
						if ( xhr.readyState === 4 ) {

							// Allow onerror to be called first,
							// but that will not handle a native abort
							// Also, save errorCallback to a variable
							// as xhr.onerror cannot be accessed
							window.setTimeout( function() {
								if ( callback ) {
									errorCallback();
								}
							} );
						}
					};
				}

				// Create the abort callback
				callback = callback( "abort" );

				try {

					// Do send the request (this may raise an exception)
					xhr.send( options.hasContent && options.data || null );
				} catch ( e ) {

					// #14683: Only rethrow if this hasn't been notified as an error yet
					if ( callback ) {
						throw e;
					}
				}
			},

			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




// Prevent auto-execution of scripts when no explicit dataType was provided (See gh-2432)
jQuery.ajaxPrefilter( function( s ) {
	if ( s.crossDomain ) {
		s.contents.script = false;
	}
} );

// Install script dataType
jQuery.ajaxSetup( {
	accepts: {
		script: "text/javascript, application/javascript, " +
			"application/ecmascript, application/x-ecmascript"
	},
	contents: {
		script: /\b(?:java|ecma)script\b/
	},
	converters: {
		"text script": function( text ) {
			jQuery.globalEval( text );
			return text;
		}
	}
} );

// Handle cache's special case and crossDomain
jQuery.ajaxPrefilter( "script", function( s ) {
	if ( s.cache === undefined ) {
		s.cache = false;
	}
	if ( s.crossDomain ) {
		s.type = "GET";
	}
} );

// Bind script tag hack transport
jQuery.ajaxTransport( "script", function( s ) {

	// This transport only deals with cross domain or forced-by-attrs requests
	if ( s.crossDomain || s.scriptAttrs ) {
		var script, callback;
		return {
			send: function( _, complete ) {
				script = jQuery( "<script>" )
					.attr( s.scriptAttrs || {} )
					.prop( { charset: s.scriptCharset, src: s.url } )
					.on( "load error", callback = function( evt ) {
						script.remove();
						callback = null;
						if ( evt ) {
							complete( evt.type === "error" ? 404 : 200, evt.type );
						}
					} );

				// Use native DOM manipulation to avoid our domManip AJAX trickery
				document.head.appendChild( script[ 0 ] );
			},
			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




var oldCallbacks = [],
	rjsonp = /(=)\?(?=&|$)|\?\?/;

// Default jsonp settings
jQuery.ajaxSetup( {
	jsonp: "callback",
	jsonpCallback: function() {
		var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce++ ) );
		this[ callback ] = true;
		return callback;
	}
} );

// Detect, normalize options and install callbacks for jsonp requests
jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {

	var callbackName, overwritten, responseContainer,
		jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
			"url" :
			typeof s.data === "string" &&
				( s.contentType || "" )
					.indexOf( "application/x-www-form-urlencoded" ) === 0 &&
				rjsonp.test( s.data ) && "data"
		);

	// Handle iff the expected data type is "jsonp" or we have a parameter to set
	if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {

		// Get callback name, remembering preexisting value associated with it
		callbackName = s.jsonpCallback = isFunction( s.jsonpCallback ) ?
			s.jsonpCallback() :
			s.jsonpCallback;

		// Insert callback into url or form data
		if ( jsonProp ) {
			s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
		} else if ( s.jsonp !== false ) {
			s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
		}

		// Use data converter to retrieve json after script execution
		s.converters[ "script json" ] = function() {
			if ( !responseContainer ) {
				jQuery.error( callbackName + " was not called" );
			}
			return responseContainer[ 0 ];
		};

		// Force json dataType
		s.dataTypes[ 0 ] = "json";

		// Install callback
		overwritten = window[ callbackName ];
		window[ callbackName ] = function() {
			responseContainer = arguments;
		};

		// Clean-up function (fires after converters)
		jqXHR.always( function() {

			// If previous value didn't exist - remove it
			if ( overwritten === undefined ) {
				jQuery( window ).removeProp( callbackName );

			// Otherwise restore preexisting value
			} else {
				window[ callbackName ] = overwritten;
			}

			// Save back as free
			if ( s[ callbackName ] ) {

				// Make sure that re-using the options doesn't screw things around
				s.jsonpCallback = originalSettings.jsonpCallback;

				// Save the callback name for future use
				oldCallbacks.push( callbackName );
			}

			// Call if it was a function and we have a response
			if ( responseContainer && isFunction( overwritten ) ) {
				overwritten( responseContainer[ 0 ] );
			}

			responseContainer = overwritten = undefined;
		} );

		// Delegate to script
		return "script";
	}
} );




// Support: Safari 8 only
// In Safari 8 documents created via document.implementation.createHTMLDocument
// collapse sibling forms: the second one becomes a child of the first one.
// Because of that, this security measure has to be disabled in Safari 8.
// https://bugs.webkit.org/show_bug.cgi?id=137337
support.createHTMLDocument = ( function() {
	var body = document.implementation.createHTMLDocument( "" ).body;
	body.innerHTML = "<form></form><form></form>";
	return body.childNodes.length === 2;
} )();


// Argument "data" should be string of html
// context (optional): If specified, the fragment will be created in this context,
// defaults to document
// keepScripts (optional): If true, will include scripts passed in the html string
jQuery.parseHTML = function( data, context, keepScripts ) {
	if ( typeof data !== "string" ) {
		return [];
	}
	if ( typeof context === "boolean" ) {
		keepScripts = context;
		context = false;
	}

	var base, parsed, scripts;

	if ( !context ) {

		// Stop scripts or inline event handlers from being executed immediately
		// by using document.implementation
		if ( support.createHTMLDocument ) {
			context = document.implementation.createHTMLDocument( "" );

			// Set the base href for the created document
			// so any parsed elements with URLs
			// are based on the document's URL (gh-2965)
			base = context.createElement( "base" );
			base.href = document.location.href;
			context.head.appendChild( base );
		} else {
			context = document;
		}
	}

	parsed = rsingleTag.exec( data );
	scripts = !keepScripts && [];

	// Single tag
	if ( parsed ) {
		return [ context.createElement( parsed[ 1 ] ) ];
	}

	parsed = buildFragment( [ data ], context, scripts );

	if ( scripts && scripts.length ) {
		jQuery( scripts ).remove();
	}

	return jQuery.merge( [], parsed.childNodes );
};


/**
 * Load a url into a page
 */
jQuery.fn.load = function( url, params, callback ) {
	var selector, type, response,
		self = this,
		off = url.indexOf( " " );

	if ( off > -1 ) {
		selector = stripAndCollapse( url.slice( off ) );
		url = url.slice( 0, off );
	}

	// If it's a function
	if ( isFunction( params ) ) {

		// We assume that it's the callback
		callback = params;
		params = undefined;

	// Otherwise, build a param string
	} else if ( params && typeof params === "object" ) {
		type = "POST";
	}

	// If we have elements to modify, make the request
	if ( self.length > 0 ) {
		jQuery.ajax( {
			url: url,

			// If "type" variable is undefined, then "GET" method will be used.
			// Make value of this field explicit since
			// user can override it through ajaxSetup method
			type: type || "GET",
			dataType: "html",
			data: params
		} ).done( function( responseText ) {

			// Save response for use in complete callback
			response = arguments;

			self.html( selector ?

				// If a selector was specified, locate the right elements in a dummy div
				// Exclude scripts to avoid IE 'Permission Denied' errors
				jQuery( "<div>" ).append( jQuery.parseHTML( responseText ) ).find( selector ) :

				// Otherwise use the full result
				responseText );

		// If the request succeeds, this function gets "data", "status", "jqXHR"
		// but they are ignored because response was set above.
		// If it fails, this function gets "jqXHR", "status", "error"
		} ).always( callback && function( jqXHR, status ) {
			self.each( function() {
				callback.apply( this, response || [ jqXHR.responseText, status, jqXHR ] );
			} );
		} );
	}

	return this;
};




// Attach a bunch of functions for handling common AJAX events
jQuery.each( [
	"ajaxStart",
	"ajaxStop",
	"ajaxComplete",
	"ajaxError",
	"ajaxSuccess",
	"ajaxSend"
], function( i, type ) {
	jQuery.fn[ type ] = function( fn ) {
		return this.on( type, fn );
	};
} );




jQuery.expr.pseudos.animated = function( elem ) {
	return jQuery.grep( jQuery.timers, function( fn ) {
		return elem === fn.elem;
	} ).length;
};




jQuery.offset = {
	setOffset: function( elem, options, i ) {
		var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
			position = jQuery.css( elem, "position" ),
			curElem = jQuery( elem ),
			props = {};

		// Set position first, in-case top/left are set even on static elem
		if ( position === "static" ) {
			elem.style.position = "relative";
		}

		curOffset = curElem.offset();
		curCSSTop = jQuery.css( elem, "top" );
		curCSSLeft = jQuery.css( elem, "left" );
		calculatePosition = ( position === "absolute" || position === "fixed" ) &&
			( curCSSTop + curCSSLeft ).indexOf( "auto" ) > -1;

		// Need to be able to calculate position if either
		// top or left is auto and position is either absolute or fixed
		if ( calculatePosition ) {
			curPosition = curElem.position();
			curTop = curPosition.top;
			curLeft = curPosition.left;

		} else {
			curTop = parseFloat( curCSSTop ) || 0;
			curLeft = parseFloat( curCSSLeft ) || 0;
		}

		if ( isFunction( options ) ) {

			// Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
			options = options.call( elem, i, jQuery.extend( {}, curOffset ) );
		}

		if ( options.top != null ) {
			props.top = ( options.top - curOffset.top ) + curTop;
		}
		if ( options.left != null ) {
			props.left = ( options.left - curOffset.left ) + curLeft;
		}

		if ( "using" in options ) {
			options.using.call( elem, props );

		} else {
			curElem.css( props );
		}
	}
};

jQuery.fn.extend( {

	// offset() relates an element's border box to the document origin
	offset: function( options ) {

		// Preserve chaining for setter
		if ( arguments.length ) {
			return options === undefined ?
				this :
				this.each( function( i ) {
					jQuery.offset.setOffset( this, options, i );
				} );
		}

		var rect, win,
			elem = this[ 0 ];

		if ( !elem ) {
			return;
		}

		// Return zeros for disconnected and hidden (display: none) elements (gh-2310)
		// Support: IE <=11 only
		// Running getBoundingClientRect on a
		// disconnected node in IE throws an error
		if ( !elem.getClientRects().length ) {
			return { top: 0, left: 0 };
		}

		// Get document-relative position by adding viewport scroll to viewport-relative gBCR
		rect = elem.getBoundingClientRect();
		win = elem.ownerDocument.defaultView;
		return {
			top: rect.top + win.pageYOffset,
			left: rect.left + win.pageXOffset
		};
	},

	// position() relates an element's margin box to its offset parent's padding box
	// This corresponds to the behavior of CSS absolute positioning
	position: function() {
		if ( !this[ 0 ] ) {
			return;
		}

		var offsetParent, offset, doc,
			elem = this[ 0 ],
			parentOffset = { top: 0, left: 0 };

		// position:fixed elements are offset from the viewport, which itself always has zero offset
		if ( jQuery.css( elem, "position" ) === "fixed" ) {

			// Assume position:fixed implies availability of getBoundingClientRect
			offset = elem.getBoundingClientRect();

		} else {
			offset = this.offset();

			// Account for the *real* offset parent, which can be the document or its root element
			// when a statically positioned element is identified
			doc = elem.ownerDocument;
			offsetParent = elem.offsetParent || doc.documentElement;
			while ( offsetParent &&
				( offsetParent === doc.body || offsetParent === doc.documentElement ) &&
				jQuery.css( offsetParent, "position" ) === "static" ) {

				offsetParent = offsetParent.parentNode;
			}
			if ( offsetParent && offsetParent !== elem && offsetParent.nodeType === 1 ) {

				// Incorporate borders into its offset, since they are outside its content origin
				parentOffset = jQuery( offsetParent ).offset();
				parentOffset.top += jQuery.css( offsetParent, "borderTopWidth", true );
				parentOffset.left += jQuery.css( offsetParent, "borderLeftWidth", true );
			}
		}

		// Subtract parent offsets and element margins
		return {
			top: offset.top - parentOffset.top - jQuery.css( elem, "marginTop", true ),
			left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true )
		};
	},

	// This method will return documentElement in the following cases:
	// 1) For the element inside the iframe without offsetParent, this method will return
	//    documentElement of the parent window
	// 2) For the hidden or detached element
	// 3) For body or html element, i.e. in case of the html node - it will return itself
	//
	// but those exceptions were never presented as a real life use-cases
	// and might be considered as more preferable results.
	//
	// This logic, however, is not guaranteed and can change at any point in the future
	offsetParent: function() {
		return this.map( function() {
			var offsetParent = this.offsetParent;

			while ( offsetParent && jQuery.css( offsetParent, "position" ) === "static" ) {
				offsetParent = offsetParent.offsetParent;
			}

			return offsetParent || documentElement;
		} );
	}
} );

// Create scrollLeft and scrollTop methods
jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
	var top = "pageYOffset" === prop;

	jQuery.fn[ method ] = function( val ) {
		return access( this, function( elem, method, val ) {

			// Coalesce documents and windows
			var win;
			if ( isWindow( elem ) ) {
				win = elem;
			} else if ( elem.nodeType === 9 ) {
				win = elem.defaultView;
			}

			if ( val === undefined ) {
				return win ? win[ prop ] : elem[ method ];
			}

			if ( win ) {
				win.scrollTo(
					!top ? val : win.pageXOffset,
					top ? val : win.pageYOffset
				);

			} else {
				elem[ method ] = val;
			}
		}, method, val, arguments.length );
	};
} );

// Support: Safari <=7 - 9.1, Chrome <=37 - 49
// Add the top/left cssHooks using jQuery.fn.position
// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
// Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
// getComputedStyle returns percent when specified for top/left/bottom/right;
// rather than make the css module depend on the offset module, just check for it here
jQuery.each( [ "top", "left" ], function( i, prop ) {
	jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
		function( elem, computed ) {
			if ( computed ) {
				computed = curCSS( elem, prop );

				// If curCSS returns percentage, fallback to offset
				return rnumnonpx.test( computed ) ?
					jQuery( elem ).position()[ prop ] + "px" :
					computed;
			}
		}
	);
} );


// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
	jQuery.each( { padding: "inner" + name, content: type, "": "outer" + name },
		function( defaultExtra, funcName ) {

		// Margin is only for outerHeight, outerWidth
		jQuery.fn[ funcName ] = function( margin, value ) {
			var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
				extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );

			return access( this, function( elem, type, value ) {
				var doc;

				if ( isWindow( elem ) ) {

					// $( window ).outerWidth/Height return w/h including scrollbars (gh-1729)
					return funcName.indexOf( "outer" ) === 0 ?
						elem[ "inner" + name ] :
						elem.document.documentElement[ "client" + name ];
				}

				// Get document width or height
				if ( elem.nodeType === 9 ) {
					doc = elem.documentElement;

					// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
					// whichever is greatest
					return Math.max(
						elem.body[ "scroll" + name ], doc[ "scroll" + name ],
						elem.body[ "offset" + name ], doc[ "offset" + name ],
						doc[ "client" + name ]
					);
				}

				return value === undefined ?

					// Get width or height on the element, requesting but not forcing parseFloat
					jQuery.css( elem, type, extra ) :

					// Set width or height on the element
					jQuery.style( elem, type, value, extra );
			}, type, chainable ? margin : undefined, chainable );
		};
	} );
} );


jQuery.each( ( "blur focus focusin focusout resize scroll click dblclick " +
	"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
	"change select submit keydown keypress keyup contextmenu" ).split( " " ),
	function( i, name ) {

	// Handle event binding
	jQuery.fn[ name ] = function( data, fn ) {
		return arguments.length > 0 ?
			this.on( name, null, data, fn ) :
			this.trigger( name );
	};
} );

jQuery.fn.extend( {
	hover: function( fnOver, fnOut ) {
		return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
	}
} );




jQuery.fn.extend( {

	bind: function( types, data, fn ) {
		return this.on( types, null, data, fn );
	},
	unbind: function( types, fn ) {
		return this.off( types, null, fn );
	},

	delegate: function( selector, types, data, fn ) {
		return this.on( types, selector, data, fn );
	},
	undelegate: function( selector, types, fn ) {

		// ( namespace ) or ( selector, types [, fn] )
		return arguments.length === 1 ?
			this.off( selector, "**" ) :
			this.off( types, selector || "**", fn );
	}
} );

// Bind a function to a context, optionally partially applying any
// arguments.
// jQuery.proxy is deprecated to promote standards (specifically Function#bind)
// However, it is not slated for removal any time soon
jQuery.proxy = function( fn, context ) {
	var tmp, args, proxy;

	if ( typeof context === "string" ) {
		tmp = fn[ context ];
		context = fn;
		fn = tmp;
	}

	// Quick check to determine if target is callable, in the spec
	// this throws a TypeError, but we will just return undefined.
	if ( !isFunction( fn ) ) {
		return undefined;
	}

	// Simulated bind
	args = slice.call( arguments, 2 );
	proxy = function() {
		return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
	};

	// Set the guid of unique handler to the same of original handler, so it can be removed
	proxy.guid = fn.guid = fn.guid || jQuery.guid++;

	return proxy;
};

jQuery.holdReady = function( hold ) {
	if ( hold ) {
		jQuery.readyWait++;
	} else {
		jQuery.ready( true );
	}
};
jQuery.isArray = Array.isArray;
jQuery.parseJSON = JSON.parse;
jQuery.nodeName = nodeName;
jQuery.isFunction = isFunction;
jQuery.isWindow = isWindow;
jQuery.camelCase = camelCase;
jQuery.type = toType;

jQuery.now = Date.now;

jQuery.isNumeric = function( obj ) {

	// As of jQuery 3.0, isNumeric is limited to
	// strings and numbers (primitives or objects)
	// that can be coerced to finite numbers (gh-2662)
	var type = jQuery.type( obj );
	return ( type === "number" || type === "string" ) &&

		// parseFloat NaNs numeric-cast false positives ("")
		// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
		// subtraction forces infinities to NaN
		!isNaN( obj - parseFloat( obj ) );
};




// Register as a named AMD module, since jQuery can be concatenated with other
// files that may use define, but not via a proper concatenation script that
// understands anonymous AMD modules. A named AMD is safest and most robust
// way to register. Lowercase jquery is used because AMD module names are
// derived from file names, and jQuery is normally delivered in a lowercase
// file name. Do this after creating the global so that if an AMD module wants
// to call noConflict to hide this version of jQuery, it will work.

// Note that for maximum portability, libraries that are not jQuery should
// declare themselves as anonymous modules, and avoid setting a global if an
// AMD loader is present. jQuery is a special case. For more information, see
// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

if ( true ) {
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function() {
		return jQuery;
	}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
}




var

	// Map over jQuery in case of overwrite
	_jQuery = window.jQuery,

	// Map over the $ in case of overwrite
	_$ = window.$;

jQuery.noConflict = function( deep ) {
	if ( window.$ === jQuery ) {
		window.$ = _$;
	}

	if ( deep && window.jQuery === jQuery ) {
		window.jQuery = _jQuery;
	}

	return jQuery;
};

// Expose jQuery and $ identifiers, even in AMD
// (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
// and CommonJS for browser emulators (#13566)
if ( !noGlobal ) {
	window.jQuery = window.$ = jQuery;
}




return jQuery;
} );


/***/ }),

/***/ "./resources/js/currency.js":
/*!**********************************!*\
  !*** ./resources/js/currency.js ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! highcharts */ "./node_modules/highcharts/highcharts.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(highcharts__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var highcharts_modules_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! highcharts/modules/data */ "./node_modules/highcharts/modules/data.js");
/* harmony import */ var highcharts_modules_data__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(highcharts_modules_data__WEBPACK_IMPORTED_MODULE_2__);



highcharts_modules_data__WEBPACK_IMPORTED_MODULE_2___default()(highcharts__WEBPACK_IMPORTED_MODULE_1___default.a);
var chart;
var currency_name = jquery__WEBPACK_IMPORTED_MODULE_0___default()('h1').attr("data-id");
var chart_created = false;

function convertTime(UNIX_timestamp) {
  var date = new Date(UNIX_timestamp).toLocaleDateString() + ' ' + new Date(UNIX_timestamp).toLocaleTimeString();
  return date;
}

function requestCurrencyData(days) {
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('div.time_buttons div[data-time="' + days + '"]').addClass('active');
  var settings = {
    headers: {
      'X-CSRF-TOKEN': jquery__WEBPACK_IMPORTED_MODULE_0___default()('meta[name="csrf-token"]').attr('content')
    },
    "url": "/chart/" + currency_name + "/" + days,
    "method": "GET"
  };
  jquery__WEBPACK_IMPORTED_MODULE_0___default.a.ajax(settings).done(function (response) {
    if (chart_created === false) {
      createCurrencyChart(response.prices);
      chart_created = true;
    } else {
      chart.series[0].setData(response.prices);
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('figure').removeClass('hidden');
    }
  });
}

function createCurrencyChart(data) {
  chart = highcharts__WEBPACK_IMPORTED_MODULE_1___default.a.chart('container', {
    chart: {
      zoomType: 'x',
      backgroundColor: null
    },
    title: {
      text: 'Price in EUR over time',
      style: {
        color: "#fff"
      }
    },
    subtitle: {
      text: document.ontouchstart === undefined ? 'Click and drag in the plot area to zoom in' : 'Pinch the chart to zoom in'
    },
    xAxis: {
      type: 'datetime',
      title: {
        style: {
          color: "#fff"
        }
      },
      labels: {
        style: {
          color: "#fff"
        }
      }
    },
    yAxis: {
      title: {
        text: 'Price (EUR)',
        style: {
          color: "#fff"
        }
      },
      labels: {
        style: {
          color: "#fff"
        }
      }
    },
    legend: {
      enabled: false
    },
    plotOptions: {
      area: {
        fillColor: {
          linearGradient: {
            x1: 0,
            y1: 0,
            x2: 0,
            y2: 1
          },
          stops: [[0, highcharts__WEBPACK_IMPORTED_MODULE_1___default.a.getOptions().colors[0]], [1, highcharts__WEBPACK_IMPORTED_MODULE_1___default.a.color(highcharts__WEBPACK_IMPORTED_MODULE_1___default.a.getOptions().colors[0]).setOpacity(0).get('rgba')]]
        },
        marker: {
          radius: 2
        },
        lineWidth: 1,
        states: {
          hover: {
            lineWidth: 1
          }
        },
        threshold: null
      }
    },
    credits: {
      enabled: false
    },
    series: [{
      name: 'Price',
      data: data
    }]
  });
}

function refreshChartData() {
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('div.time_buttons div').click(function (event) {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('div.time_buttons div').removeClass('active');
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(event.currentTarget).addClass('active');
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('figure').addClass('hidden');
    var days = jquery__WEBPACK_IMPORTED_MODULE_0___default()(event.currentTarget).attr("data-time");
    requestCurrencyData(days);
  });
}

requestCurrencyData(14);
refreshChartData();

/***/ }),

/***/ 1:
/*!****************************************!*\
  !*** multi ./resources/js/currency.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\wamp64\www\coin-gecko\resources\js\currency.js */"./resources/js/currency.js");


/***/ })

/******/ });