!function(t){var e={};function n(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(o,r,function(e){return t[e]}.bind(null,r));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){"use strict";var o,r=n(1),u=(o=r)&&o.__esModule?o:{default:o};$(document).ready(function(){$(".link").hover(function(t){var e="hsl("+Math.floor(360*Math.random())+", 100%, 70%)";$(this).css({color:e}),console.log(this)},function(){$(this).removeAttr("style")});var t=(0,u.default)("https://www.goodreads.com/review/list.xml?key=UlcDZNPWmjXE6iqtr7M7VQ&id=9875935&shelf=currently-reading",{inputFormat:"xml"});fetch(t).then(function(t){return t.json()}).then(function(t){var e=t.query.results.GoodreadsResponse.books.book;e.length?e.forEach(function(t){$("<a>",{text:t.title,href:t.link,style:"padding-right: 1%;"}).appendTo(".books")}):$("<a>",{text:e.title,href:e.link,style:"padding-right: 1%;"}).appendTo(".books")})})},function(t,e,n){var o,r;void 0===(r="function"==typeof(o=function(){return function(t,e){if(e=e||{},"string"!=typeof t)throw new Error("An URL was expected");return"https://query.yahooapis.com/v1/public/yql?"+function(t){var e=[];for(var n in t)t.hasOwnProperty(n)&&e.push(encodeURIComponent(n)+"="+encodeURIComponent(t[n]));return e.join("&")}(function(t,e){var n=e.inputFormat||"json",o=e.outputFormat||"json",r={q:"SELECT * FROM "+n+' WHERE url="'+t+'"',format:o,jsonCompat:"new"};return e.callback&&(r.callback=e.callback),!1===e.jsonCompat&&delete r.jsonCompat,r}(t,e))}})?o.call(e,n,e,t):o)||(t.exports=r)}]);