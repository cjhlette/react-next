/**
 * react 가 ie9 이상 지원함 ie7,8 은 웹서버에서 미지원 페이지로 돌려야함.
 */
import includes from 'core-js/library/fn/string/virtual/includes';
import repeat from 'core-js/library/fn/string/virtual/repeat';
import assign from 'core-js/library/fn/object/assign';
import map from "core-js/fn/map";
import set from "core-js/fn/set";
import array from "core-js/es7/array";

//console.log('Load your polyfills');

String.prototype.includes = includes;
String.prototype.repeat = repeat;
Object.assign = assign;

var inBrowser = typeof window !== 'undefined';

var UA = inBrowser && window.navigator.userAgent.toLowerCase();
var isIE = UA && /msie|trident/.test(UA);
var isIE9 = UA && UA.indexOf('msie 9.0') > 0;
var isIE10 = UA && UA.indexOf('msie 10.0') > 0;
if(isIE9 || isIE10){
  // window.location.href = '/static/browserNotSupport.html';
}
