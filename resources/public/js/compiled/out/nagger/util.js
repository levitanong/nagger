// Compiled by ClojureScript 1.7.122 {}
goog.provide('nagger.util');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.string.format');
nagger.util.pad_two = (function nagger$util$pad_two(n){
return goog.string.format("%02d",n);
});
nagger.util.second_round = (function nagger$util$second_round(n){
return ((1000) * Math.ceil((n / (1000))));
});

//# sourceMappingURL=util.js.map?rel=1441995395672