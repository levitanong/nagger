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
var seq__27115_27129 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__27116_27130 = null;
var count__27117_27131 = (0);
var i__27118_27132 = (0);
while(true){
if((i__27118_27132 < count__27117_27131)){
var f_27133 = cljs.core._nth.call(null,chunk__27116_27130,i__27118_27132);
cljs.core.println.call(null,"  ",f_27133);

var G__27134 = seq__27115_27129;
var G__27135 = chunk__27116_27130;
var G__27136 = count__27117_27131;
var G__27137 = (i__27118_27132 + (1));
seq__27115_27129 = G__27134;
chunk__27116_27130 = G__27135;
count__27117_27131 = G__27136;
i__27118_27132 = G__27137;
continue;
} else {
var temp__4425__auto___27138 = cljs.core.seq.call(null,seq__27115_27129);
if(temp__4425__auto___27138){
var seq__27115_27139__$1 = temp__4425__auto___27138;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27115_27139__$1)){
var c__17293__auto___27140 = cljs.core.chunk_first.call(null,seq__27115_27139__$1);
var G__27141 = cljs.core.chunk_rest.call(null,seq__27115_27139__$1);
var G__27142 = c__17293__auto___27140;
var G__27143 = cljs.core.count.call(null,c__17293__auto___27140);
var G__27144 = (0);
seq__27115_27129 = G__27141;
chunk__27116_27130 = G__27142;
count__27117_27131 = G__27143;
i__27118_27132 = G__27144;
continue;
} else {
var f_27145 = cljs.core.first.call(null,seq__27115_27139__$1);
cljs.core.println.call(null,"  ",f_27145);

var G__27146 = cljs.core.next.call(null,seq__27115_27139__$1);
var G__27147 = null;
var G__27148 = (0);
var G__27149 = (0);
seq__27115_27129 = G__27146;
chunk__27116_27130 = G__27147;
count__27117_27131 = G__27148;
i__27118_27132 = G__27149;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_27150 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__16490__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__16490__auto__)){
return or__16490__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_27150);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_27150)))?cljs.core.second.call(null,arglists_27150):arglists_27150));
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
var seq__27119 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__27120 = null;
var count__27121 = (0);
var i__27122 = (0);
while(true){
if((i__27122 < count__27121)){
var vec__27123 = cljs.core._nth.call(null,chunk__27120,i__27122);
var name = cljs.core.nth.call(null,vec__27123,(0),null);
var map__27124 = cljs.core.nth.call(null,vec__27123,(1),null);
var map__27124__$1 = ((((!((map__27124 == null)))?((((map__27124.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27124.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27124):map__27124);
var doc = cljs.core.get.call(null,map__27124__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__27124__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__27151 = seq__27119;
var G__27152 = chunk__27120;
var G__27153 = count__27121;
var G__27154 = (i__27122 + (1));
seq__27119 = G__27151;
chunk__27120 = G__27152;
count__27121 = G__27153;
i__27122 = G__27154;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__27119);
if(temp__4425__auto__){
var seq__27119__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27119__$1)){
var c__17293__auto__ = cljs.core.chunk_first.call(null,seq__27119__$1);
var G__27155 = cljs.core.chunk_rest.call(null,seq__27119__$1);
var G__27156 = c__17293__auto__;
var G__27157 = cljs.core.count.call(null,c__17293__auto__);
var G__27158 = (0);
seq__27119 = G__27155;
chunk__27120 = G__27156;
count__27121 = G__27157;
i__27122 = G__27158;
continue;
} else {
var vec__27126 = cljs.core.first.call(null,seq__27119__$1);
var name = cljs.core.nth.call(null,vec__27126,(0),null);
var map__27127 = cljs.core.nth.call(null,vec__27126,(1),null);
var map__27127__$1 = ((((!((map__27127 == null)))?((((map__27127.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27127.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27127):map__27127);
var doc = cljs.core.get.call(null,map__27127__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__27127__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__27159 = cljs.core.next.call(null,seq__27119__$1);
var G__27160 = null;
var G__27161 = (0);
var G__27162 = (0);
seq__27119 = G__27159;
chunk__27120 = G__27160;
count__27121 = G__27161;
i__27122 = G__27162;
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

//# sourceMappingURL=repl.js.map?rel=1441995397880