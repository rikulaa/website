!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n(n.s=0)}([function(e,t,n){n(1),e.exports=n(2)},function(e,t){console.log("hello");var n=["theme-dark","theme-light"];document.getElementById("theme-switch").addEventListener("click",(function(e){var t=document.body.className.match(/theme-[a-zA-Z]+/)[0]||null;o(t===n[0]?n[1]:n[0])}));var o=function(e){var t=document.body.className.match(/theme-[a-zA-Z]+/)[0]||null;document.body.classList.add(e),document.getElementById("".concat(e,"-icon")).classList.remove("hidden"),t&&t!==e&&(document.body.classList.remove(t),document.getElementById("".concat(t,"-icon")).classList.add("hidden")),localStorage.setItem("theme",e)};!function(e){if(window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches)o(n[0]);else if(window.matchMedia&&window.matchMedia("(prefers-color-scheme: light)").matches)o(n[1]);else{var t=localStorage.getItem("theme");if(t)o(t);else{var r=(new Date).getHours();o(r>9||r<19?n[1]:n[0])}}}()},function(e,t){}]);