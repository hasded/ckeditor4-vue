/*! For license information please see legacy.js.LICENSE.txt */
/*!*
* @license Copyright (c) 2003-2021, CKSource - Frederico Knabben. All rights reserved.
* For licensing, see LICENSE.md.
*/
!function(t,n){"object"==typeof exports&&"object"==typeof module?module.exports=n():"function"==typeof define&&define.amd?define([],n):"object"==typeof exports?exports.CKEditor=n():t.CKEditor=n()}(window,(function(){return function(t){var n={};function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}return e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:r})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var o in t)e.d(r,o,function(n){return t[n]}.bind(null,o));return r},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="",e(e.s=66)}([function(t,n,e){(function(n){var e=function(t){return t&&t.Math==Math&&t};t.exports=e("object"==typeof globalThis&&globalThis)||e("object"==typeof window&&window)||e("object"==typeof self&&self)||e("object"==typeof n&&n)||function(){return this}()||Function("return this")()}).call(this,e(69))},function(t,n,e){var r=e(0),o=e(47),i=e(3),c=e(49),u=e(45),a=e(44),f=o("wks"),s=r.Symbol,l=a?s:s&&s.withoutSetter||c;t.exports=function(t){return i(f,t)&&(u||"string"==typeof f[t])||(u&&i(s,t)?f[t]=s[t]:f[t]=l("Symbol."+t)),f[t]}},function(t,n){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,n,e){var r=e(48),o={}.hasOwnProperty;t.exports=Object.hasOwn||function(t,n){return o.call(r(t),n)}},function(t,n){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,n,e){var r=e(4);t.exports=function(t){if(!r(t))throw TypeError(String(t)+" is not an object");return t}},function(t,n,e){var r=e(0),o=function(t){return"function"==typeof t?t:void 0};t.exports=function(t,n){return arguments.length<2?o(r[t]):r[t]&&r[t][n]}},function(t,n,e){var r=e(0),o=e(15).f,i=e(11),c=e(10),u=e(29),a=e(74),f=e(36);t.exports=function(t,n){var e,s,l,p,v,d=t.target,h=t.global,y=t.stat;if(e=h?r:y?r[d]||u(d,{}):(r[d]||{}).prototype)for(s in n){if(p=n[s],l=t.noTargetGet?(v=o(e,s))&&v.value:e[s],!f(h?s:d+(y?".":"#")+s,t.forced)&&void 0!==l){if(typeof p==typeof l)continue;a(p,l)}(t.sham||l&&l.sham)&&i(p,"sham",!0),c(e,s,p,t)}}},function(t,n,e){var r=e(2);t.exports=!r((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},function(t,n,e){var r=e(8),o=e(50),i=e(5),c=e(42),u=Object.defineProperty;n.f=r?u:function(t,n,e){if(i(t),n=c(n),i(e),o)try{return u(t,n,e)}catch(t){}if("get"in e||"set"in e)throw TypeError("Accessors not supported");return"value"in e&&(t[n]=e.value),t}},function(t,n,e){var r=e(0),o=e(11),i=e(3),c=e(29),u=e(31),a=e(21),f=a.get,s=a.enforce,l=String(String).split("String");(t.exports=function(t,n,e,u){var a,f=!!u&&!!u.unsafe,p=!!u&&!!u.enumerable,v=!!u&&!!u.noTargetGet;"function"==typeof e&&("string"!=typeof n||i(e,"name")||o(e,"name",n),(a=s(e)).source||(a.source=l.join("string"==typeof n?n:""))),t!==r?(f?!v&&t[n]&&(p=!0):delete t[n],p?t[n]=e:o(t,n,e)):p?t[n]=e:c(n,e)})(Function.prototype,"toString",(function(){return"function"==typeof this&&f(this).source||u(this)}))},function(t,n,e){var r=e(8),o=e(9),i=e(16);t.exports=r?function(t,n,e){return o.f(t,n,i(1,e))}:function(t,n,e){return t[n]=e,t}},function(t,n){t.exports=function(t){if("function"!=typeof t)throw TypeError(String(t)+" is not a function");return t}},function(t,n){t.exports=!1},function(t,n){t.exports={}},function(t,n,e){var r=e(8),o=e(70),i=e(16),c=e(17),u=e(42),a=e(3),f=e(50),s=Object.getOwnPropertyDescriptor;n.f=r?s:function(t,n){if(t=c(t),n=u(n),f)try{return s(t,n)}catch(t){}if(a(t,n))return i(!o.f.call(t,n),t[n])}},function(t,n){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},function(t,n,e){var r=e(71),o=e(19);t.exports=function(t){return r(o(t))}},function(t,n){var e={}.toString;t.exports=function(t){return e.call(t).slice(8,-1)}},function(t,n){t.exports=function(t){if(null==t)throw TypeError("Can't call method on "+t);return t}},function(t,n,e){var r=e(6),o=e(44);t.exports=o?function(t){return"symbol"==typeof t}:function(t){var n=r("Symbol");return"function"==typeof n&&Object(t)instanceof n}},function(t,n,e){var r,o,i,c=e(73),u=e(0),a=e(4),f=e(11),s=e(3),l=e(28),p=e(32),v=e(33),d="Object already initialized",h=u.WeakMap;if(c||l.state){var y=l.state||(l.state=new h),g=y.get,m=y.has,x=y.set;r=function(t,n){if(m.call(y,t))throw new TypeError(d);return n.facade=t,x.call(y,t,n),n},o=function(t){return g.call(y,t)||{}},i=function(t){return m.call(y,t)}}else{var b=p("state");v[b]=!0,r=function(t,n){if(s(t,b))throw new TypeError(d);return n.facade=t,f(t,b,n),n},o=function(t){return s(t,b)?t[b]:{}},i=function(t){return s(t,b)}}t.exports={set:r,get:o,has:i,enforce:function(t){return i(t)?o(t):r(t,{})},getterFor:function(t){return function(n){var e;if(!a(n)||(e=o(n)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return e}}}},function(t,n,e){var r=e(5),o=e(79);t.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var t,n=!1,e={};try{(t=Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set).call(e,[]),n=e instanceof Array}catch(t){}return function(e,i){return r(e),o(i),n?t.call(e,i):e.__proto__=i,e}}():void 0)},function(t,n,e){var r,o=e(5),i=e(80),c=e(35),u=e(33),a=e(55),f=e(30),s=e(32),l=s("IE_PROTO"),p=function(){},v=function(t){return"<script>"+t+"</"+"script>"},d=function(t){t.write(v("")),t.close();var n=t.parentWindow.Object;return t=null,n},h=function(){try{r=new ActiveXObject("htmlfile")}catch(t){}h=document.domain&&r?d(r):function(){var t,n=f("iframe");if(n.style)return n.style.display="none",a.appendChild(n),n.src=String("javascript:"),(t=n.contentWindow.document).open(),t.write(v("document.F=Object")),t.close(),t.F}()||d(r);for(var t=c.length;t--;)delete h.prototype[c[t]];return h()};u[l]=!0,t.exports=Object.create||function(t,n){var e;return null!==t?(p.prototype=o(t),e=new p,p.prototype=null,e[l]=t):e=h(),void 0===n?e:i(e,n)}},function(t,n,e){var r=e(5),o=e(82),i=e(54),c=e(56),u=e(83),a=e(84),f=function(t,n){this.stopped=t,this.result=n};t.exports=function(t,n,e){var s,l,p,v,d,h,y,g=e&&e.that,m=!(!e||!e.AS_ENTRIES),x=!(!e||!e.IS_ITERATOR),b=!(!e||!e.INTERRUPTED),w=c(n,g,1+m+b),j=function(t){return s&&a(s),new f(!0,t)},O=function(t){return m?(r(t),b?w(t[0],t[1],j):w(t[0],t[1])):b?w(t,j):w(t)};if(x)s=t;else{if("function"!=typeof(l=u(t)))throw TypeError("Target is not iterable");if(o(l)){for(p=0,v=i(t.length);v>p;p++)if((d=O(t[p]))&&d instanceof f)return d;return new f(!1)}s=l.call(t)}for(h=s.next;!(y=h.call(s)).done;){try{d=O(y.value)}catch(t){throw a(s),t}if("object"==typeof d&&d&&d instanceof f)return d}return new f(!1)}},function(t,n,e){var r=e(20);t.exports=function(t){if(r(t))throw TypeError("Cannot convert a Symbol value to a string");return String(t)}},function(t,n,e){"use strict";var r=e(12),o=function(t){var n,e;this.promise=new t((function(t,r){if(void 0!==n||void 0!==e)throw TypeError("Bad Promise constructor");n=t,e=r})),this.resolve=r(n),this.reject=r(e)};t.exports.f=function(t){return new o(t)}},function(t,n,e){var r=e(6);t.exports=r("navigator","userAgent")||""},function(t,n,e){var r=e(0),o=e(29),i="__core-js_shared__",c=r[i]||o(i,{});t.exports=c},function(t,n,e){var r=e(0);t.exports=function(t,n){try{Object.defineProperty(r,t,{value:n,configurable:!0,writable:!0})}catch(e){r[t]=n}return n}},function(t,n,e){var r=e(0),o=e(4),i=r.document,c=o(i)&&o(i.createElement);t.exports=function(t){return c?i.createElement(t):{}}},function(t,n,e){var r=e(28),o=Function.toString;"function"!=typeof r.inspectSource&&(r.inspectSource=function(t){return o.call(t)}),t.exports=r.inspectSource},function(t,n,e){var r=e(47),o=e(49),i=r("keys");t.exports=function(t){return i[t]||(i[t]=o(t))}},function(t,n){t.exports={}},function(t,n){var e=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:e)(t)}},function(t,n){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},function(t,n,e){var r=e(2),o=/#|\.prototype\./,i=function(t,n){var e=u[c(t)];return e==f||e!=a&&("function"==typeof n?r(n):!!n)},c=i.normalize=function(t){return String(t).replace(o,".").toLowerCase()},u=i.data={},a=i.NATIVE="N",f=i.POLYFILL="P";t.exports=i},function(t,n,e){var r=e(3),o=e(48),i=e(32),c=e(78),u=i("IE_PROTO"),a=Object.prototype;t.exports=c?Object.getPrototypeOf:function(t){return t=o(t),r(t,u)?t[u]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?a:null}},function(t,n,e){var r={};r[e(1)("toStringTag")]="z",t.exports="[object z]"===String(r)},function(t,n,e){var r=e(9).f,o=e(3),i=e(1)("toStringTag");t.exports=function(t,n,e){t&&!o(t=e?t:t.prototype,i)&&r(t,i,{configurable:!0,value:n})}},function(t,n,e){var r=e(18),o=e(0);t.exports="process"==r(o.process)},function(t,n){t.exports=function(t){try{return{error:!1,value:t()}}catch(t){return{error:!0,value:t}}}},function(t,n,e){var r=e(43),o=e(20);t.exports=function(t){var n=r(t,"string");return o(n)?n:String(n)}},function(t,n,e){var r=e(4),o=e(20),i=e(72),c=e(1)("toPrimitive");t.exports=function(t,n){if(!r(t)||o(t))return t;var e,u=t[c];if(void 0!==u){if(void 0===n&&(n="default"),e=u.call(t,n),!r(e)||o(e))return e;throw TypeError("Can't convert object to primitive value")}return void 0===n&&(n="number"),i(t,n)}},function(t,n,e){var r=e(45);t.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},function(t,n,e){var r=e(46),o=e(2);t.exports=!!Object.getOwnPropertySymbols&&!o((function(){var t=Symbol();return!String(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&r&&r<41}))},function(t,n,e){var r,o,i=e(0),c=e(27),u=i.process,a=i.Deno,f=u&&u.versions||a&&a.version,s=f&&f.v8;s?o=(r=s.split("."))[0]<4?1:r[0]+r[1]:c&&(!(r=c.match(/Edge\/(\d+)/))||r[1]>=74)&&(r=c.match(/Chrome\/(\d+)/))&&(o=r[1]),t.exports=o&&+o},function(t,n,e){var r=e(13),o=e(28);(t.exports=function(t,n){return o[t]||(o[t]=void 0!==n?n:{})})("versions",[]).push({version:"3.16.0",mode:r?"pure":"global",copyright:"© 2021 Denis Pushkarev (zloirock.ru)"})},function(t,n,e){var r=e(19);t.exports=function(t){return Object(r(t))}},function(t,n){var e=0,r=Math.random();t.exports=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++e+r).toString(36)}},function(t,n,e){var r=e(8),o=e(2),i=e(30);t.exports=!r&&!o((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},function(t,n,e){var r=e(52),o=e(35).concat("length","prototype");n.f=Object.getOwnPropertyNames||function(t){return r(t,o)}},function(t,n,e){var r=e(3),o=e(17),i=e(53).indexOf,c=e(33);t.exports=function(t,n){var e,u=o(t),a=0,f=[];for(e in u)!r(c,e)&&r(u,e)&&f.push(e);for(;n.length>a;)r(u,e=n[a++])&&(~i(f,e)||f.push(e));return f}},function(t,n,e){var r=e(17),o=e(54),i=e(76),c=function(t){return function(n,e,c){var u,a=r(n),f=o(a.length),s=i(c,f);if(t&&e!=e){for(;f>s;)if((u=a[s++])!=u)return!0}else for(;f>s;s++)if((t||s in a)&&a[s]===e)return t||s||0;return!t&&-1}};t.exports={includes:c(!0),indexOf:c(!1)}},function(t,n,e){var r=e(34),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},function(t,n,e){var r=e(6);t.exports=r("document","documentElement")},function(t,n,e){var r=e(12);t.exports=function(t,n,e){if(r(t),void 0===n)return t;switch(e){case 0:return function(){return t.call(n)};case 1:return function(e){return t.call(n,e)};case 2:return function(e,r){return t.call(n,e,r)};case 3:return function(e,r,o){return t.call(n,e,r,o)}}return function(){return t.apply(n,arguments)}}},function(t,n,e){var r=e(38),o=e(18),i=e(1)("toStringTag"),c="Arguments"==o(function(){return arguments}());t.exports=r?o:function(t){var n,e,r;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(e=function(t,n){try{return t[n]}catch(t){}}(n=Object(t),i))?e:c?o(n):"Object"==(r=o(n))&&"function"==typeof n.callee?"Arguments":r}},function(t,n,e){var r=e(1),o=e(23),i=e(9),c=r("unscopables"),u=Array.prototype;null==u[c]&&i.f(u,c,{configurable:!0,value:o(null)}),t.exports=function(t){u[c][t]=!0}},function(t,n,e){"use strict";var r=e(7),o=e(86),i=e(37),c=e(22),u=e(39),a=e(11),f=e(10),s=e(1),l=e(13),p=e(14),v=e(60),d=v.IteratorPrototype,h=v.BUGGY_SAFARI_ITERATORS,y=s("iterator"),g="keys",m="values",x="entries",b=function(){return this};t.exports=function(t,n,e,s,v,w,j){o(e,n,s);var O,E,S,T=function(t){if(t===v&&N)return N;if(!h&&t in A)return A[t];switch(t){case g:case m:case x:return function(){return new e(this,t)}}return function(){return new e(this)}},I=n+" Iterator",P=!1,A=t.prototype,_=A[y]||A["@@iterator"]||v&&A[v],N=!h&&_||T(v),C="Array"==n&&A.entries||_;if(C&&(O=i(C.call(new t)),d!==Object.prototype&&O.next&&(l||i(O)===d||(c?c(O,d):"function"!=typeof O[y]&&a(O,y,b)),u(O,I,!0,!0),l&&(p[I]=b))),v==m&&_&&_.name!==m&&(P=!0,N=function(){return _.call(this)}),l&&!j||A[y]===N||a(A,y,N),p[n]=N,v)if(E={values:T(m),keys:w?N:T(g),entries:T(x)},j)for(S in E)(h||P||!(S in A))&&f(A,S,E[S]);else r({target:n,proto:!0,forced:h||P},E);return E}},function(t,n,e){"use strict";var r,o,i,c=e(2),u=e(37),a=e(11),f=e(3),s=e(1),l=e(13),p=s("iterator"),v=!1;[].keys&&("next"in(i=[].keys())?(o=u(u(i)))!==Object.prototype&&(r=o):v=!0);var d=null==r||c((function(){var t={};return r[p].call(t)!==t}));d&&(r={}),l&&!d||f(r,p)||a(r,p,(function(){return this})),t.exports={IteratorPrototype:r,BUGGY_SAFARI_ITERATORS:v}},function(t,n,e){var r=e(0);t.exports=r.Promise},function(t,n,e){var r=e(5),o=e(12),i=e(1)("species");t.exports=function(t,n){var e,c=r(t).constructor;return void 0===c||null==(e=r(c)[i])?n:o(e)}},function(t,n,e){var r,o,i,c,u=e(0),a=e(2),f=e(56),s=e(55),l=e(30),p=e(64),v=e(40),d=u.setImmediate,h=u.clearImmediate,y=u.process,g=u.MessageChannel,m=u.Dispatch,x=0,b={},w="onreadystatechange";try{r=u.location}catch(t){}var j=function(t){if(b.hasOwnProperty(t)){var n=b[t];delete b[t],n()}},O=function(t){return function(){j(t)}},E=function(t){j(t.data)},S=function(t){u.postMessage(String(t),r.protocol+"//"+r.host)};d&&h||(d=function(t){for(var n=[],e=arguments.length,r=1;e>r;)n.push(arguments[r++]);return b[++x]=function(){("function"==typeof t?t:Function(t)).apply(void 0,n)},o(x),x},h=function(t){delete b[t]},v?o=function(t){y.nextTick(O(t))}:m&&m.now?o=function(t){m.now(O(t))}:g&&!p?(c=(i=new g).port2,i.port1.onmessage=E,o=f(c.postMessage,c,1)):u.addEventListener&&"function"==typeof postMessage&&!u.importScripts&&r&&"file:"!==r.protocol&&!a(S)?(o=S,u.addEventListener("message",E,!1)):o=w in l("script")?function(t){s.appendChild(l("script")).onreadystatechange=function(){s.removeChild(this),j(t)}}:function(t){setTimeout(O(t),0)}),t.exports={set:d,clear:h}},function(t,n,e){var r=e(27);t.exports=/(?:iphone|ipod|ipad).*applewebkit/i.test(r)},function(t,n,e){var r=e(5),o=e(4),i=e(26);t.exports=function(t,n){if(r(t),o(n)&&n.constructor===t)return n;var e=i.f(t);return(0,e.resolve)(n),e.promise}},function(t,n,e){e(67),t.exports=e(109)},function(t,n,e){e(68),e(85),e(87),e(89),e(98),e(99),e(100),e(101);var r=e(103);t.exports=r.Promise},function(t,n,e){"use strict";var r=e(7),o=e(37),i=e(22),c=e(23),u=e(11),a=e(16),f=e(24),s=e(25),l=function(t,n){var e=this;if(!(e instanceof l))return new l(t,n);i&&(e=i(new Error(void 0),o(e))),void 0!==n&&u(e,"message",s(n));var r=[];return f(t,r.push,{that:r}),u(e,"errors",r),e};l.prototype=c(Error.prototype,{constructor:a(5,l),message:a(5,""),name:a(5,"AggregateError")}),r({global:!0},{AggregateError:l})},function(t,n){var e;e=function(){return this}();try{e=e||new Function("return this")()}catch(t){"object"==typeof window&&(e=window)}t.exports=e},function(t,n,e){"use strict";var r={}.propertyIsEnumerable,o=Object.getOwnPropertyDescriptor,i=o&&!r.call({1:2},1);n.f=i?function(t){var n=o(this,t);return!!n&&n.enumerable}:r},function(t,n,e){var r=e(2),o=e(18),i="".split;t.exports=r((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==o(t)?i.call(t,""):Object(t)}:Object},function(t,n,e){var r=e(4);t.exports=function(t,n){var e,o;if("string"===n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;if("function"==typeof(e=t.valueOf)&&!r(o=e.call(t)))return o;if("string"!==n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,n,e){var r=e(0),o=e(31),i=r.WeakMap;t.exports="function"==typeof i&&/native code/.test(o(i))},function(t,n,e){var r=e(3),o=e(75),i=e(15),c=e(9);t.exports=function(t,n){for(var e=o(n),u=c.f,a=i.f,f=0;f<e.length;f++){var s=e[f];r(t,s)||u(t,s,a(n,s))}}},function(t,n,e){var r=e(6),o=e(51),i=e(77),c=e(5);t.exports=r("Reflect","ownKeys")||function(t){var n=o.f(c(t)),e=i.f;return e?n.concat(e(t)):n}},function(t,n,e){var r=e(34),o=Math.max,i=Math.min;t.exports=function(t,n){var e=r(t);return e<0?o(e+n,0):i(e,n)}},function(t,n){n.f=Object.getOwnPropertySymbols},function(t,n,e){var r=e(2);t.exports=!r((function(){function t(){}return t.prototype.constructor=null,Object.getPrototypeOf(new t)!==t.prototype}))},function(t,n,e){var r=e(4);t.exports=function(t){if(!r(t)&&null!==t)throw TypeError("Can't set "+String(t)+" as a prototype");return t}},function(t,n,e){var r=e(8),o=e(9),i=e(5),c=e(81);t.exports=r?Object.defineProperties:function(t,n){i(t);for(var e,r=c(n),u=r.length,a=0;u>a;)o.f(t,e=r[a++],n[e]);return t}},function(t,n,e){var r=e(52),o=e(35);t.exports=Object.keys||function(t){return r(t,o)}},function(t,n,e){var r=e(1),o=e(14),i=r("iterator"),c=Array.prototype;t.exports=function(t){return void 0!==t&&(o.Array===t||c[i]===t)}},function(t,n,e){var r=e(57),o=e(14),i=e(1)("iterator");t.exports=function(t){if(null!=t)return t[i]||t["@@iterator"]||o[r(t)]}},function(t,n,e){var r=e(5);t.exports=function(t){var n=t.return;if(void 0!==n)return r(n.call(t)).value}},function(t,n,e){"use strict";var r=e(17),o=e(58),i=e(14),c=e(21),u=e(59),a="Array Iterator",f=c.set,s=c.getterFor(a);t.exports=u(Array,"Array",(function(t,n){f(this,{type:a,target:r(t),index:0,kind:n})}),(function(){var t=s(this),n=t.target,e=t.kind,r=t.index++;return!n||r>=n.length?(t.target=void 0,{value:void 0,done:!0}):"keys"==e?{value:r,done:!1}:"values"==e?{value:n[r],done:!1}:{value:[r,n[r]],done:!1}}),"values"),i.Arguments=i.Array,o("keys"),o("values"),o("entries")},function(t,n,e){"use strict";var r=e(60).IteratorPrototype,o=e(23),i=e(16),c=e(39),u=e(14),a=function(){return this};t.exports=function(t,n,e){var f=n+" Iterator";return t.prototype=o(r,{next:i(1,e)}),c(t,f,!1,!0),u[f]=a,t}},function(t,n,e){var r=e(38),o=e(10),i=e(88);r||o(Object.prototype,"toString",i,{unsafe:!0})},function(t,n,e){"use strict";var r=e(38),o=e(57);t.exports=r?{}.toString:function(){return"[object "+o(this)+"]"}},function(t,n,e){"use strict";var r,o,i,c,u=e(7),a=e(13),f=e(0),s=e(6),l=e(61),p=e(10),v=e(90),d=e(22),h=e(39),y=e(91),g=e(4),m=e(12),x=e(92),b=e(31),w=e(24),j=e(93),O=e(62),E=e(63).set,S=e(94),T=e(65),I=e(96),P=e(26),A=e(41),_=e(21),N=e(36),C=e(1),k=e(97),R=e(40),M=e(46),D=C("species"),F="Promise",$=_.get,L=_.set,U=_.getterFor(F),K=l&&l.prototype,G=l,z=K,B=f.TypeError,V=f.document,W=f.process,Y=P.f,X=Y,q=!!(V&&V.createEvent&&f.dispatchEvent),H="function"==typeof PromiseRejectionEvent,J="unhandledrejection",Q=!1,Z=N(F,(function(){var t=b(G),n=t!==String(G);if(!n&&66===M)return!0;if(a&&!z.finally)return!0;if(M>=51&&/native code/.test(t))return!1;var e=new G((function(t){t(1)})),r=function(t){t((function(){}),(function(){}))};return(e.constructor={})[D]=r,!(Q=e.then((function(){}))instanceof r)||!n&&k&&!H})),tt=Z||!j((function(t){G.all(t).catch((function(){}))})),nt=function(t){var n;return!(!g(t)||"function"!=typeof(n=t.then))&&n},et=function(t,n){if(!t.notified){t.notified=!0;var e=t.reactions;S((function(){for(var r=t.value,o=1==t.state,i=0;e.length>i;){var c,u,a,f=e[i++],s=o?f.ok:f.fail,l=f.resolve,p=f.reject,v=f.domain;try{s?(o||(2===t.rejection&&ct(t),t.rejection=1),!0===s?c=r:(v&&v.enter(),c=s(r),v&&(v.exit(),a=!0)),c===f.promise?p(B("Promise-chain cycle")):(u=nt(c))?u.call(c,l,p):l(c)):p(r)}catch(t){v&&!a&&v.exit(),p(t)}}t.reactions=[],t.notified=!1,n&&!t.rejection&&ot(t)}))}},rt=function(t,n,e){var r,o;q?((r=V.createEvent("Event")).promise=n,r.reason=e,r.initEvent(t,!1,!0),f.dispatchEvent(r)):r={promise:n,reason:e},!H&&(o=f["on"+t])?o(r):t===J&&I("Unhandled promise rejection",e)},ot=function(t){E.call(f,(function(){var n,e=t.facade,r=t.value;if(it(t)&&(n=A((function(){R?W.emit("unhandledRejection",r,e):rt(J,e,r)})),t.rejection=R||it(t)?2:1,n.error))throw n.value}))},it=function(t){return 1!==t.rejection&&!t.parent},ct=function(t){E.call(f,(function(){var n=t.facade;R?W.emit("rejectionHandled",n):rt("rejectionhandled",n,t.value)}))},ut=function(t,n,e){return function(r){t(n,r,e)}},at=function(t,n,e){t.done||(t.done=!0,e&&(t=e),t.value=n,t.state=2,et(t,!0))},ft=function(t,n,e){if(!t.done){t.done=!0,e&&(t=e);try{if(t.facade===n)throw B("Promise can't be resolved itself");var r=nt(n);r?S((function(){var e={done:!1};try{r.call(n,ut(ft,e,t),ut(at,e,t))}catch(n){at(e,n,t)}})):(t.value=n,t.state=1,et(t,!1))}catch(n){at({done:!1},n,t)}}};if(Z&&(z=(G=function(t){x(this,G,F),m(t),r.call(this);var n=$(this);try{t(ut(ft,n),ut(at,n))}catch(t){at(n,t)}}).prototype,(r=function(t){L(this,{type:F,done:!1,notified:!1,parent:!1,reactions:[],rejection:!1,state:0,value:void 0})}).prototype=v(z,{then:function(t,n){var e=U(this),r=Y(O(this,G));return r.ok="function"!=typeof t||t,r.fail="function"==typeof n&&n,r.domain=R?W.domain:void 0,e.parent=!0,e.reactions.push(r),0!=e.state&&et(e,!1),r.promise},catch:function(t){return this.then(void 0,t)}}),o=function(){var t=new r,n=$(t);this.promise=t,this.resolve=ut(ft,n),this.reject=ut(at,n)},P.f=Y=function(t){return t===G||t===i?new o(t):X(t)},!a&&"function"==typeof l&&K!==Object.prototype)){c=K.then,Q||(p(K,"then",(function(t,n){var e=this;return new G((function(t,n){c.call(e,t,n)})).then(t,n)}),{unsafe:!0}),p(K,"catch",z.catch,{unsafe:!0}));try{delete K.constructor}catch(t){}d&&d(K,z)}u({global:!0,wrap:!0,forced:Z},{Promise:G}),h(G,F,!1,!0),y(F),i=s(F),u({target:F,stat:!0,forced:Z},{reject:function(t){var n=Y(this);return n.reject.call(void 0,t),n.promise}}),u({target:F,stat:!0,forced:a||Z},{resolve:function(t){return T(a&&this===i?G:this,t)}}),u({target:F,stat:!0,forced:tt},{all:function(t){var n=this,e=Y(n),r=e.resolve,o=e.reject,i=A((function(){var e=m(n.resolve),i=[],c=0,u=1;w(t,(function(t){var a=c++,f=!1;i.push(void 0),u++,e.call(n,t).then((function(t){f||(f=!0,i[a]=t,--u||r(i))}),o)})),--u||r(i)}));return i.error&&o(i.value),e.promise},race:function(t){var n=this,e=Y(n),r=e.reject,o=A((function(){var o=m(n.resolve);w(t,(function(t){o.call(n,t).then(e.resolve,r)}))}));return o.error&&r(o.value),e.promise}})},function(t,n,e){var r=e(10);t.exports=function(t,n,e){for(var o in n)r(t,o,n[o],e);return t}},function(t,n,e){"use strict";var r=e(6),o=e(9),i=e(1),c=e(8),u=i("species");t.exports=function(t){var n=r(t),e=o.f;c&&n&&!n[u]&&e(n,u,{configurable:!0,get:function(){return this}})}},function(t,n){t.exports=function(t,n,e){if(!(t instanceof n))throw TypeError("Incorrect "+(e?e+" ":"")+"invocation");return t}},function(t,n,e){var r=e(1)("iterator"),o=!1;try{var i=0,c={next:function(){return{done:!!i++}},return:function(){o=!0}};c[r]=function(){return this},Array.from(c,(function(){throw 2}))}catch(t){}t.exports=function(t,n){if(!n&&!o)return!1;var e=!1;try{var i={};i[r]=function(){return{next:function(){return{done:e=!0}}}},t(i)}catch(t){}return e}},function(t,n,e){var r,o,i,c,u,a,f,s,l=e(0),p=e(15).f,v=e(63).set,d=e(64),h=e(95),y=e(40),g=l.MutationObserver||l.WebKitMutationObserver,m=l.document,x=l.process,b=l.Promise,w=p(l,"queueMicrotask"),j=w&&w.value;j||(r=function(){var t,n;for(y&&(t=x.domain)&&t.exit();o;){n=o.fn,o=o.next;try{n()}catch(t){throw o?c():i=void 0,t}}i=void 0,t&&t.enter()},d||y||h||!g||!m?b&&b.resolve?((f=b.resolve(void 0)).constructor=b,s=f.then,c=function(){s.call(f,r)}):c=y?function(){x.nextTick(r)}:function(){v.call(l,r)}:(u=!0,a=m.createTextNode(""),new g(r).observe(a,{characterData:!0}),c=function(){a.data=u=!u})),t.exports=j||function(t){var n={fn:t,next:void 0};i&&(i.next=n),o||(o=n,c()),i=n}},function(t,n,e){var r=e(27);t.exports=/web0s(?!.*chrome)/i.test(r)},function(t,n,e){var r=e(0);t.exports=function(t,n){var e=r.console;e&&e.error&&(1===arguments.length?e.error(t):e.error(t,n))}},function(t,n){t.exports="object"==typeof window},function(t,n,e){"use strict";var r=e(7),o=e(12),i=e(26),c=e(41),u=e(24);r({target:"Promise",stat:!0},{allSettled:function(t){var n=this,e=i.f(n),r=e.resolve,a=e.reject,f=c((function(){var e=o(n.resolve),i=[],c=0,a=1;u(t,(function(t){var o=c++,u=!1;i.push(void 0),a++,e.call(n,t).then((function(t){u||(u=!0,i[o]={status:"fulfilled",value:t},--a||r(i))}),(function(t){u||(u=!0,i[o]={status:"rejected",reason:t},--a||r(i))}))})),--a||r(i)}));return f.error&&a(f.value),e.promise}})},function(t,n,e){"use strict";var r=e(7),o=e(12),i=e(6),c=e(26),u=e(41),a=e(24),f="No one promise resolved";r({target:"Promise",stat:!0},{any:function(t){var n=this,e=c.f(n),r=e.resolve,s=e.reject,l=u((function(){var e=o(n.resolve),c=[],u=0,l=1,p=!1;a(t,(function(t){var o=u++,a=!1;c.push(void 0),l++,e.call(n,t).then((function(t){a||p||(p=!0,r(t))}),(function(t){a||p||(a=!0,c[o]=t,--l||s(new(i("AggregateError"))(c,f)))}))})),--l||s(new(i("AggregateError"))(c,f))}));return l.error&&s(l.value),e.promise}})},function(t,n,e){"use strict";var r=e(7),o=e(13),i=e(61),c=e(2),u=e(6),a=e(62),f=e(65),s=e(10);if(r({target:"Promise",proto:!0,real:!0,forced:!!i&&c((function(){i.prototype.finally.call({then:function(){}},(function(){}))}))},{finally:function(t){var n=a(this,u("Promise")),e="function"==typeof t;return this.then(e?function(e){return f(n,t()).then((function(){return e}))}:t,e?function(e){return f(n,t()).then((function(){throw e}))}:t)}}),!o&&"function"==typeof i){var l=u("Promise").prototype.finally;i.prototype.finally!==l&&s(i.prototype,"finally",l,{unsafe:!0})}},function(t,n,e){"use strict";var r=e(102).charAt,o=e(25),i=e(21),c=e(59),u="String Iterator",a=i.set,f=i.getterFor(u);c(String,"String",(function(t){a(this,{type:u,string:o(t),index:0})}),(function(){var t,n=f(this),e=n.string,o=n.index;return o>=e.length?{value:void 0,done:!0}:(t=r(e,o),n.index+=t.length,{value:t,done:!1})}))},function(t,n,e){var r=e(34),o=e(25),i=e(19),c=function(t){return function(n,e){var c,u,a=o(i(n)),f=r(e),s=a.length;return f<0||f>=s?t?"":void 0:(c=a.charCodeAt(f))<55296||c>56319||f+1===s||(u=a.charCodeAt(f+1))<56320||u>57343?t?a.charAt(f):c:t?a.slice(f,f+2):u-56320+(c-55296<<10)+65536}};t.exports={codeAt:c(!1),charAt:c(!0)}},function(t,n,e){var r=e(0);t.exports=r},function(t,n,e){"use strict";var r=e(7),o=e(53).includes,i=e(58);r({target:"Array",proto:!0},{includes:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}}),i("includes")},function(t,n,e){"use strict";var r=e(8),o=e(0),i=e(36),c=e(10),u=e(3),a=e(18),f=e(106),s=e(20),l=e(43),p=e(2),v=e(23),d=e(51).f,h=e(15).f,y=e(9).f,g=e(107).trim,m="Number",x=o.Number,b=x.prototype,w=a(v(b))==m,j=function(t){if(s(t))throw TypeError("Cannot convert a Symbol value to a number");var n,e,r,o,i,c,u,a,f=l(t,"number");if("string"==typeof f&&f.length>2)if(43===(n=(f=g(f)).charCodeAt(0))||45===n){if(88===(e=f.charCodeAt(2))||120===e)return NaN}else if(48===n){switch(f.charCodeAt(1)){case 66:case 98:r=2,o=49;break;case 79:case 111:r=8,o=55;break;default:return+f}for(c=(i=f.slice(2)).length,u=0;u<c;u++)if((a=i.charCodeAt(u))<48||a>o)return NaN;return parseInt(i,r)}return+f};if(i(m,!x(" 0o1")||!x("0b1")||x("+0x1"))){for(var O,E=function(t){var n=arguments.length<1?0:t,e=this;return e instanceof E&&(w?p((function(){b.valueOf.call(e)})):a(e)!=m)?f(new x(j(n)),e,E):j(n)},S=r?d(x):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),T=0;S.length>T;T++)u(x,O=S[T])&&!u(E,O)&&y(E,O,h(x,O));E.prototype=b,b.constructor=E,c(o,m,E)}},function(t,n,e){var r=e(4),o=e(22);t.exports=function(t,n,e){var i,c;return o&&"function"==typeof(i=n.constructor)&&i!==e&&r(c=i.prototype)&&c!==e.prototype&&o(t,c),t}},function(t,n,e){var r=e(19),o=e(25),i="["+e(108)+"]",c=RegExp("^"+i+i+"*"),u=RegExp(i+i+"*$"),a=function(t){return function(n){var e=o(r(n));return 1&t&&(e=e.replace(c,"")),2&t&&(e=e.replace(u,"")),e}};t.exports={start:a(1),end:a(2),trim:a(3)}},function(t,n){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},function(t,n,e){"use strict";e.r(n);var r;e(104),e(105);function o(t,n){t.onload=function(){this.onerror=this.onload=null,n(null,t)},t.onerror=function(){this.onerror=this.onload=null,n(new Error("Failed to load "+this.src),t)}}function i(t,n){t.onreadystatechange=function(){"complete"!=this.readyState&&"loaded"!=this.readyState||(this.onreadystatechange=null,n(null,t))}}function c(t,n){return"CKEDITOR"in window?Promise.resolve(CKEDITOR):"string"!=typeof t||t.length<1?Promise.reject(new TypeError("CKEditor URL must be a non-empty string.")):(r||(r=c.scriptLoader(t).then((function(t){return n&&n(t),t}))),r)}c.scriptLoader=function(t){return new Promise((function(n,e){!function(t,n,e){var r=document.head||document.getElementsByTagName("head")[0],c=document.createElement("script");"function"==typeof n&&(e=n,n={}),n=n||{},e=e||function(){},c.type=n.type||"text/javascript",c.charset=n.charset||"utf8",c.async=!("async"in n)||!!n.async,c.src=t,n.attrs&&function(t,n){for(var e in n)t.setAttribute(e,n[e])}(c,n.attrs),n.text&&(c.text=String(n.text)),("onload"in c?o:i)(c,e),c.onload||o(c,e),r.appendChild(c)}(t,(function(t){return r=void 0,t?e(t):window.CKEDITOR?void n(CKEDITOR):e(new Error("Script loaded from editorUrl doesn't provide CKEDITOR namespace."))}))}))};var u={name:"ckeditor",render:function(t){return t("div",{},[t(this.tagName)])},props:{value:{type:String,default:""},type:{type:String,default:"classic",validator:function(t){return["classic","inline"].includes(t)}},editorUrl:{type:String,default:"https://cdn.ckeditor.com/4.17.1/standard-all/ckeditor.js"},config:{type:Object,default:function(){}},tagName:{type:String,default:"textarea"},readOnly:{type:Boolean,default:null},throttle:{type:Number,default:80}},mounted:function(){var t=this;c(this.editorUrl,(function(n){t.$emit("namespaceloaded",n)})).then((function(){if(!t.$_destroyed){var n=t.prepareConfig(),e="inline"===t.type?"inline":"replace",r=t.$el.firstElementChild;CKEDITOR[e](r,n)}}))},beforeDestroy:function(){this.instance&&this.instance.destroy(),this.$_destroyed=!0},watch:{value:function(t){this.instance&&this.instance.getData()!==t&&this.instance.setData(t)},readOnly:function(t){this.instance&&this.instance.setReadOnly(t)}},methods:{prepareConfig:function(){var t=this,n=this.config||{};n.on=n.on||{},void 0===n.delayIfDetached&&(n.delayIfDetached=!0),null!==this.readOnly&&(n.readOnly=this.readOnly);var e=n.on.instanceReady;return n.on.instanceReady=function(n){t.instance=n.editor,t.$nextTick().then((function(){t.prepareComponentData(),e&&e(n)}))},n},prepareComponentData:function(){var t=this,n=this.value;this.instance.fire("lockSnapshot"),this.instance.setData(n,{callback:function(){t.$_setUpEditorEvents();var e=t.instance.getData();n!==e?(t.$once("input",(function(){t.$emit("ready",t.instance)})),t.$emit("input",e)):t.$emit("ready",t.instance),t.instance.fire("unlockSnapshot")}})},$_setUpEditorEvents:function(){var t=this,n=this.instance,e=function(t,n){var e,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return function(){clearTimeout(e);for(var o=arguments.length,i=new Array(o),c=0;c<o;c++)i[c]=arguments[c];e=setTimeout(t.bind.apply(t,[r].concat(i)),n)}}((function(e){var r=n.getData();t.value!==r&&t.$emit("input",r,e,n)}),this.throttle);n.on("change",e),n.on("focus",(function(e){t.$emit("focus",e,n)})),n.on("blur",(function(e){t.$emit("blur",e,n)}))}}},a={install:function(t){t.component("ckeditor",u)},component:u};n.default=a}]).default}));
//# sourceMappingURL=legacy.js.map