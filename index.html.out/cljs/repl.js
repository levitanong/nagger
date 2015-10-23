// Compiled by ClojureScript 1.7.122 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4425__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4425__auto__)){
var ns = temp__4425__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__8335_8349 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__8336_8350 = null;
var count__8337_8351 = (0);
var i__8338_8352 = (0);
while(true){
if((i__8338_8352 < count__8337_8351)){
var f_8353 = cljs.core._nth.call(null,chunk__8336_8350,i__8338_8352);
cljs.core.println.call(null,"  ",f_8353);

var G__8354 = seq__8335_8349;
var G__8355 = chunk__8336_8350;
var G__8356 = count__8337_8351;
var G__8357 = (i__8338_8352 + (1));
seq__8335_8349 = G__8354;
chunk__8336_8350 = G__8355;
count__8337_8351 = G__8356;
i__8338_8352 = G__8357;
continue;
} else {
var temp__4425__auto___8358 = cljs.core.seq.call(null,seq__8335_8349);
if(temp__4425__auto___8358){
var seq__8335_8359__$1 = temp__4425__auto___8358;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8335_8359__$1)){
var c__5891__auto___8360 = cljs.core.chunk_first.call(null,seq__8335_8359__$1);
var G__8361 = cljs.core.chunk_rest.call(null,seq__8335_8359__$1);
var G__8362 = c__5891__auto___8360;
var G__8363 = cljs.core.count.call(null,c__5891__auto___8360);
var G__8364 = (0);
seq__8335_8349 = G__8361;
chunk__8336_8350 = G__8362;
count__8337_8351 = G__8363;
i__8338_8352 = G__8364;
continue;
} else {
var f_8365 = cljs.core.first.call(null,seq__8335_8359__$1);
cljs.core.println.call(null,"  ",f_8365);

var G__8366 = cljs.core.next.call(null,seq__8335_8359__$1);
var G__8367 = null;
var G__8368 = (0);
var G__8369 = (0);
seq__8335_8349 = G__8366;
chunk__8336_8350 = G__8367;
count__8337_8351 = G__8368;
i__8338_8352 = G__8369;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_8370 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__5088__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5088__auto__)){
return or__5088__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_8370);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_8370)))?cljs.core.second.call(null,arglists_8370):arglists_8370));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__8339 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__8340 = null;
var count__8341 = (0);
var i__8342 = (0);
while(true){
if((i__8342 < count__8341)){
var vec__8343 = cljs.core._nth.call(null,chunk__8340,i__8342);
var name = cljs.core.nth.call(null,vec__8343,(0),null);
var map__8344 = cljs.core.nth.call(null,vec__8343,(1),null);
var map__8344__$1 = ((((!((map__8344 == null)))?((((map__8344.cljs$lang$protocol_mask$partition0$ & (64))) || (map__8344.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8344):map__8344);
var doc = cljs.core.get.call(null,map__8344__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__8344__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__8371 = seq__8339;
var G__8372 = chunk__8340;
var G__8373 = count__8341;
var G__8374 = (i__8342 + (1));
seq__8339 = G__8371;
chunk__8340 = G__8372;
count__8341 = G__8373;
i__8342 = G__8374;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__8339);
if(temp__4425__auto__){
var seq__8339__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8339__$1)){
var c__5891__auto__ = cljs.core.chunk_first.call(null,seq__8339__$1);
var G__8375 = cljs.core.chunk_rest.call(null,seq__8339__$1);
var G__8376 = c__5891__auto__;
var G__8377 = cljs.core.count.call(null,c__5891__auto__);
var G__8378 = (0);
seq__8339 = G__8375;
chunk__8340 = G__8376;
count__8341 = G__8377;
i__8342 = G__8378;
continue;
} else {
var vec__8346 = cljs.core.first.call(null,seq__8339__$1);
var name = cljs.core.nth.call(null,vec__8346,(0),null);
var map__8347 = cljs.core.nth.call(null,vec__8346,(1),null);
var map__8347__$1 = ((((!((map__8347 == null)))?((((map__8347.cljs$lang$protocol_mask$partition0$ & (64))) || (map__8347.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8347):map__8347);
var doc = cljs.core.get.call(null,map__8347__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__8347__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__8379 = cljs.core.next.call(null,seq__8339__$1);
var G__8380 = null;
var G__8381 = (0);
var G__8382 = (0);
seq__8339 = G__8379;
chunk__8340 = G__8380;
count__8341 = G__8381;
i__8342 = G__8382;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map