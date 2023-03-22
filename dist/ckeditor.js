/*! For license information please see ckeditor.js.LICENSE.txt */
/*!*
 * @license Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md.
 */
!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.CKEditor=e():t.CKEditor=e()}(window,(function(){return function(t){var e={};function n(i){if(e[i])return e[i].exports;var r=e[i]={i:i,l:!1,exports:{}};return t[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(i,r,function(e){return t[e]}.bind(null,r));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){t.exports=n(1)},function(t,e,n){"use strict";function i(t,e){t.onload=function(){this.onerror=this.onload=null,e(null,t)},t.onerror=function(){this.onerror=this.onload=null,e(new Error("Failed to load "+this.src),t)}}function r(t,e){t.onreadystatechange=function(){"complete"!=this.readyState&&"loaded"!=this.readyState||(this.onreadystatechange=null,e(null,t))}}var o;function a(t,e){return"CKEDITOR"in window?Promise.resolve(CKEDITOR):"string"!=typeof t||t.length<1?Promise.reject(new TypeError("CKEditor URL must be a non-empty string.")):(o||(o=a.scriptLoader(t).then((function(t){return e&&e(t),t}))),o)}n.r(e),a.scriptLoader=function(t){return new Promise((function(e,n){!function(t,e,n){var o=document.head||document.getElementsByTagName("head")[0],a=document.createElement("script");"function"==typeof e&&(n=e,e={}),e=e||{},n=n||function(){},a.type=e.type||"text/javascript",a.charset=e.charset||"utf8",a.async=!("async"in e)||!!e.async,a.src=t,e.attrs&&function(t,e){for(var n in e)t.setAttribute(n,e[n])}(a,e.attrs),e.text&&(a.text=String(e.text)),("onload"in a?i:r)(a,n),a.onload||i(a,n),o.appendChild(a)}(t,(function(t){return o=void 0,t?n(t):window.CKEDITOR?void e(CKEDITOR):n(new Error("Script loaded from editorUrl doesn't provide CKEDITOR namespace."))}))}))};var s={name:"ckeditor",render(t){return t("div",{},[t(this.tagName)])},props:{value:{type:String,default:""},type:{type:String,default:"classic",validator:t=>["classic","inline"].includes(t)},editorUrl:{type:String,default:"https://cdn.ckeditor.com/4.21.0/standard-all/ckeditor.js"},config:{type:Object,default:()=>{}},tagName:{type:String,default:"textarea"},readOnly:{type:Boolean,default:null},throttle:{type:Number,default:80}},mounted(){a(this.editorUrl,(t=>{this.$emit("namespaceloaded",t)})).then((()=>{if(this.$_destroyed)return;const t=this.prepareConfig(),e="inline"===this.type?"inline":"replace",n=this.$el.firstElementChild;CKEDITOR[e](n,t)}))},beforeDestroy(){this.instance&&this.instance.destroy(),this.$_destroyed=!0},watch:{value(t){this.instance&&this.instance.getData()!==t&&this.instance.setData(t)},readOnly(t){this.instance&&this.instance.setReadOnly(t)}},methods:{prepareConfig(){const t=this.config||{};t.on=t.on||{},void 0===t.delayIfDetached&&(t.delayIfDetached=!0),null!==this.readOnly&&(t.readOnly=this.readOnly);const e=t.on.instanceReady;return t.on.instanceReady=t=>{this.instance=t.editor,this.$nextTick().then((()=>{this.prepareComponentData(),e&&e(t)}))},t},prepareComponentData(){const t=this.value;this.instance.fire("lockSnapshot"),this.instance.setData(t,{callback:()=>{this.$_setUpEditorEvents();const e=this.instance.getData();t!==e?(this.$once("input",(()=>{this.$emit("ready",this.instance)})),this.$emit("input",e)):this.$emit("ready",this.instance),this.instance.fire("unlockSnapshot")}})},$_setUpEditorEvents(){const t=this.instance,e=function(t,e){var n,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return function(){clearTimeout(n);for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];n=setTimeout(t.bind.apply(t,[i].concat(o)),e)}}((e=>{const n=t.getData();this.value!==n&&this.$emit("input",n,e,t)}),this.throttle);t.on("change",e),t.on("focus",(e=>{this.$emit("focus",e,t)})),t.on("blur",(e=>{this.$emit("blur",e,t)}))}}};const c={install(t){t.component("ckeditor",s)},component:s};e.default=c}]).default}));
//# sourceMappingURL=ckeditor.js.map