// Compiled by ClojureScript 1.7.122 {}
goog.provide('nagger.util');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.string.format');
/**
 * pad v with 0s up to n digits
 */
nagger.util.pad = (function nagger$util$pad(n,v){
return goog.string.format([cljs.core.str("%0"),cljs.core.str(n),cljs.core.str("d")].join(''),v);
});
/**
 * Round v to place n
 */
nagger.util.round = (function nagger$util$round(n,v){
return (n * Math.ceil((v / n)));
});

//# sourceMappingURL=util.js.map