// Compiled by ClojureScript 1.7.122 {}
goog.provide('figwheel.connect');
goog.require('cljs.core');
goog.require('nagger.core');
goog.require('figwheel.client');
goog.require('figwheel.client.utils');
figwheel.client.start.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"build-id","build-id",1642831089),"dev",new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__20267__delegate = function (x){
if(cljs.core.truth_(nagger.core.on_js_reload)){
return cljs.core.apply.call(null,nagger.core.on_js_reload,x);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: :on-jsload hook 'nagger.core/on-js-reload' is missing");
}
};
var G__20267 = function (var_args){
var x = null;
if (arguments.length > 0) {
var G__20268__i = 0, G__20268__a = new Array(arguments.length -  0);
while (G__20268__i < G__20268__a.length) {G__20268__a[G__20268__i] = arguments[G__20268__i + 0]; ++G__20268__i;}
  x = new cljs.core.IndexedSeq(G__20268__a,0);
} 
return G__20267__delegate.call(this,x);};
G__20267.cljs$lang$maxFixedArity = 0;
G__20267.cljs$lang$applyTo = (function (arglist__20269){
var x = cljs.core.seq(arglist__20269);
return G__20267__delegate(x);
});
G__20267.cljs$core$IFn$_invoke$arity$variadic = G__20267__delegate;
return G__20267;
})()
,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws"], null));

//# sourceMappingURL=connect.js.map?rel=1442078508998