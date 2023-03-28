/*! For license information please see bundle.js.LICENSE.txt */
(()=>{var t={791:(t,r,e)=>{"use strict";function n(t){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n(t)}function o(t,r,e){return(r=function(t){var r=function(t,r){if("object"!==n(t)||null===t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var o=e.call(t,"string");if("object"!==n(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===n(r)?r:String(r)}(r))in t?Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[r]=e,t}function i(t,r){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable}))),e.push.apply(e,n)}return e}function c(t){for(var r=1;r<arguments.length;r++){var e=null!=arguments[r]?arguments[r]:{};r%2?i(Object(e),!0).forEach((function(r){o(t,r,e[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):i(Object(e)).forEach((function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(e,r))}))}return t}function u(t){return"Minified Redux error #"+t+"; visit https://redux.js.org/Errors?code="+t+" for the full message or use the non-minified dev environment for full errors. "}e.r(r),e.d(r,{__DO_NOT_USE__ActionTypes:()=>p,applyMiddleware:()=>E,bindActionCreators:()=>v,combineReducers:()=>d,compose:()=>b,createStore:()=>y,legacy_createStore:()=>l});var f="function"==typeof Symbol&&Symbol.observable||"@@observable",a=function(){return Math.random().toString(36).substring(7).split("").join(".")},p={INIT:"@@redux/INIT"+a(),REPLACE:"@@redux/REPLACE"+a(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+a()}};function y(t,r,e){var n;if("function"==typeof r&&"function"==typeof e||"function"==typeof e&&"function"==typeof arguments[3])throw new Error(u(0));if("function"==typeof r&&void 0===e&&(e=r,r=void 0),void 0!==e){if("function"!=typeof e)throw new Error(u(1));return e(y)(t,r)}if("function"!=typeof t)throw new Error(u(2));var o=t,i=r,c=[],a=c,l=!1;function d(){a===c&&(a=c.slice())}function s(){if(l)throw new Error(u(3));return i}function v(t){if("function"!=typeof t)throw new Error(u(4));if(l)throw new Error(u(5));var r=!0;return d(),a.push(t),function(){if(r){if(l)throw new Error(u(6));r=!1,d();var e=a.indexOf(t);a.splice(e,1),c=null}}}function b(t){if(!function(t){if("object"!=typeof t||null===t)return!1;for(var r=t;null!==Object.getPrototypeOf(r);)r=Object.getPrototypeOf(r);return Object.getPrototypeOf(t)===r}(t))throw new Error(u(7));if(void 0===t.type)throw new Error(u(8));if(l)throw new Error(u(9));try{l=!0,i=o(i,t)}finally{l=!1}for(var r=c=a,e=0;e<r.length;e++)(0,r[e])();return t}return b({type:p.INIT}),(n={dispatch:b,subscribe:v,getState:s,replaceReducer:function(t){if("function"!=typeof t)throw new Error(u(10));o=t,b({type:p.REPLACE})}})[f]=function(){var t,r=v;return(t={subscribe:function(t){if("object"!=typeof t||null===t)throw new Error(u(11));function e(){t.next&&t.next(s())}return e(),{unsubscribe:r(e)}}})[f]=function(){return this},t},n}var l=y;function d(t){for(var r=Object.keys(t),e={},n=0;n<r.length;n++){var o=r[n];"function"==typeof t[o]&&(e[o]=t[o])}var i,c=Object.keys(e);try{!function(t){Object.keys(t).forEach((function(r){var e=t[r];if(void 0===e(void 0,{type:p.INIT}))throw new Error(u(12));if(void 0===e(void 0,{type:p.PROBE_UNKNOWN_ACTION()}))throw new Error(u(13))}))}(e)}catch(t){i=t}return function(t,r){if(void 0===t&&(t={}),i)throw i;for(var n=!1,o={},f=0;f<c.length;f++){var a=c[f],p=e[a],y=t[a],l=p(y,r);if(void 0===l)throw r&&r.type,new Error(u(14));o[a]=l,n=n||l!==y}return(n=n||c.length!==Object.keys(t).length)?o:t}}function s(t,r){return function(){return r(t.apply(this,arguments))}}function v(t,r){if("function"==typeof t)return s(t,r);if("object"!=typeof t||null===t)throw new Error(u(16));var e={};for(var n in t){var o=t[n];"function"==typeof o&&(e[n]=s(o,r))}return e}function b(){for(var t=arguments.length,r=new Array(t),e=0;e<t;e++)r[e]=arguments[e];return 0===r.length?function(t){return t}:1===r.length?r[0]:r.reduce((function(t,r){return function(){return t(r.apply(void 0,arguments))}}))}function E(){for(var t=arguments.length,r=new Array(t),e=0;e<t;e++)r[e]=arguments[e];return function(t){return function(){var e=t.apply(void 0,arguments),n=function(){throw new Error(u(15))},o={getState:e.getState,dispatch:function(){return n.apply(void 0,arguments)}},i=r.map((function(t){return t(o)}));return n=b.apply(void 0,i)(e.dispatch),c(c({},e),{},{dispatch:n})}}}},883:t=>{t.exports={INCREMENTO:"INCREMENTO",DECREMENTO:"DECREMENTO"}},518:(t,r,e)=>{const{INCREMENTO:n,DECREMENTO:o}=e(883);t.exports={incremento:()=>({type:n}),decremento:()=>({type:o})}},616:(t,r,e)=>{const{INCREMENTO:n,DECREMENTO:o}=e(883),i={contador:0};t.exports=function(t=i,r){return r.type===n?{...t,contador:t.contador+1}:r.type===o?{...t,contador:t.contador-1}:void 0}}},r={};function e(n){var o=r[n];if(void 0!==o)return o.exports;var i=r[n]={exports:{}};return t[n](i,i.exports,e),i.exports}e.d=(t,r)=>{for(var n in r)e.o(r,n)&&!e.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:r[n]})},e.o=(t,r)=>Object.prototype.hasOwnProperty.call(t,r),e.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},(()=>{const{createStore:t}=e(791),r=e(616),{incremento:n,decremento:o}=e(518),i=document.getElementById("incremento"),c=document.getElementById("decremento"),u=document.getElementById("incrementoImpar"),f=document.getElementById("incrementoAsync"),a=t(r),p=document.getElementById("valor");function y(){const t=a.getState().contador;p.innerHTML=t}y(),a.subscribe(y),i.addEventListener("click",(()=>{a.dispatch(n())})),c.addEventListener("click",(()=>{a.dispatch(o())})),u.addEventListener("click",(()=>{a.getState().contador%2!=0&&a.dispatch(n())})),f.addEventListener("click",setTimeout((()=>{a.dispatch(n())}),1e3))})()})();