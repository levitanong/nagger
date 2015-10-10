// Compiled by ClojureScript 1.7.122 {:static-fns true, :optimize-constants true}
goog.provide('javelin.core');
goog.require('cljs.core');
goog.require('tailrecursion.priority_map');
javelin.core.Cell;

javelin.core.cell_QMARK_;

javelin.core.cell;

javelin.core.input_QMARK_;

javelin.core.lens_QMARK_;
javelin.core._STAR_tx_STAR_ = null;
javelin.core.last_rank = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0)) : cljs.core.atom.call(null,(0)));
/**
 * Like tree-seq but traversal is breadth-first instead of depth-first.
 */
javelin.core.bf_seq = (function javelin$core$bf_seq(branch_QMARK_,children,root){
var walk = (function javelin$core$bf_seq_$_walk(queue){
var temp__4425__auto__ = cljs.core.peek(queue);
if(cljs.core.truth_(temp__4425__auto__)){
var node = temp__4425__auto__;
return (new cljs.core.LazySeq(null,((function (node,temp__4425__auto__){
return (function (){
return cljs.core.cons(node,javelin$core$bf_seq_$_walk(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.pop(queue),(cljs.core.truth_((branch_QMARK_.cljs$core$IFn$_invoke$arity$1 ? branch_QMARK_.cljs$core$IFn$_invoke$arity$1(node) : branch_QMARK_.call(null,node)))?(children.cljs$core$IFn$_invoke$arity$1 ? children.cljs$core$IFn$_invoke$arity$1(node) : children.call(null,node)):null))));
});})(node,temp__4425__auto__))
,null,null));
} else {
return null;
}
});
return walk(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentQueue.EMPTY,root));
});
javelin.core.propagate_STAR_ = (function javelin$core$propagate_STAR_(pri_map){
while(true){
var temp__4425__auto__ = cljs.core.first(cljs.core.peek(pri_map));
if(cljs.core.truth_(temp__4425__auto__)){
var next = temp__4425__auto__;
var popq = cljs.core.pop(pri_map);
var old = next.prev;
var new$ = (function (){var temp__4423__auto__ = next.thunk;
if(cljs.core.truth_(temp__4423__auto__)){
var f = temp__4423__auto__;
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
} else {
return next.state;
}
})();
var diff_QMARK_ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new$,old);
if(diff_QMARK_){
next.prev = new$;

cljs.core._notify_watches(next,old,new$);
} else {
}

var G__12918 = ((!(diff_QMARK_))?popq:cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (pri_map,popq,old,new$,diff_QMARK_,next,temp__4425__auto__){
return (function (p1__12916_SHARP_,p2__12917_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__12916_SHARP_,p2__12917_SHARP_,p2__12917_SHARP_.rank);
});})(pri_map,popq,old,new$,diff_QMARK_,next,temp__4425__auto__))
,popq,next.sinks));
pri_map = G__12918;
continue;
} else {
return null;
}
break;
}
});
javelin.core.deref_STAR_ = (function javelin$core$deref_STAR_(x){
if(cljs.core.truth_((javelin.core.cell_QMARK_.cljs$core$IFn$_invoke$arity$1 ? javelin.core.cell_QMARK_.cljs$core$IFn$_invoke$arity$1(x) : javelin.core.cell_QMARK_.call(null,x)))){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(x) : cljs.core.deref.call(null,x));
} else {
return x;
}
});
javelin.core.next_rank = (function javelin$core$next_rank(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(javelin.core.last_rank,cljs.core.inc);
});
javelin.core.cell__GT_pm = (function javelin$core$cell__GT_pm(c){
return tailrecursion.priority_map.priority_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([c,c.rank], 0));
});
javelin.core.add_sync_BANG_ = (function javelin$core$add_sync_BANG_(c){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(javelin.core._STAR_tx_STAR_,cljs.core.assoc,c,c.rank);
});
javelin.core.safe_nth = (function javelin$core$safe_nth(c,i){
try{return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(c,i);
}catch (e12920){if((e12920 instanceof Error)){
var _ = e12920;
return null;
} else {
throw e12920;

}
}});
javelin.core.propagate_BANG_ = (function javelin$core$propagate_BANG_(c){
if(cljs.core.truth_(javelin.core._STAR_tx_STAR_)){
var G__12923 = c;
javelin.core.add_sync_BANG_(G__12923);

return G__12923;
} else {
var G__12924 = c;
javelin.core.propagate_STAR_(javelin.core.cell__GT_pm(G__12924));

return G__12924;
}
});
javelin.core.destroy_cell_BANG_ = (function javelin$core$destroy_cell_BANG_(var_args){
var args__6153__auto__ = [];
var len__6146__auto___12933 = arguments.length;
var i__6147__auto___12934 = (0);
while(true){
if((i__6147__auto___12934 < len__6146__auto___12933)){
args__6153__auto__.push((arguments[i__6147__auto___12934]));

var G__12935 = (i__6147__auto___12934 + (1));
i__6147__auto___12934 = G__12935;
continue;
} else {
}
break;
}

var argseq__6154__auto__ = ((((1) < args__6153__auto__.length))?(new cljs.core.IndexedSeq(args__6153__auto__.slice((1)),(0))):null);
return javelin.core.destroy_cell_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6154__auto__);
});

javelin.core.destroy_cell_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (this$,p__12927){
var vec__12928 = p__12927;
var keep_watches_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12928,(0),null);
var srcs = this$.sources;
this$.sources = cljs.core.PersistentVector.EMPTY;

this$.update = null;

this$.thunk = null;

if(cljs.core.truth_(keep_watches_QMARK_)){
} else {
this$.watches = cljs.core.PersistentArrayMap.EMPTY;
}

var seq__12929 = cljs.core.seq(srcs);
var chunk__12930 = null;
var count__12931 = (0);
var i__12932 = (0);
while(true){
if((i__12932 < count__12931)){
var src = chunk__12930.cljs$core$IIndexed$_nth$arity$2(null,i__12932);
if(cljs.core.truth_((javelin.core.cell_QMARK_.cljs$core$IFn$_invoke$arity$1 ? javelin.core.cell_QMARK_.cljs$core$IFn$_invoke$arity$1(src) : javelin.core.cell_QMARK_.call(null,src)))){
src.sinks = cljs.core.disj.cljs$core$IFn$_invoke$arity$2(src.sinks,this$);
} else {
}

var G__12936 = seq__12929;
var G__12937 = chunk__12930;
var G__12938 = count__12931;
var G__12939 = (i__12932 + (1));
seq__12929 = G__12936;
chunk__12930 = G__12937;
count__12931 = G__12938;
i__12932 = G__12939;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__12929);
if(temp__4425__auto__){
var seq__12929__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__12929__$1)){
var c__5891__auto__ = cljs.core.chunk_first(seq__12929__$1);
var G__12940 = cljs.core.chunk_rest(seq__12929__$1);
var G__12941 = c__5891__auto__;
var G__12942 = cljs.core.count(c__5891__auto__);
var G__12943 = (0);
seq__12929 = G__12940;
chunk__12930 = G__12941;
count__12931 = G__12942;
i__12932 = G__12943;
continue;
} else {
var src = cljs.core.first(seq__12929__$1);
if(cljs.core.truth_((javelin.core.cell_QMARK_.cljs$core$IFn$_invoke$arity$1 ? javelin.core.cell_QMARK_.cljs$core$IFn$_invoke$arity$1(src) : javelin.core.cell_QMARK_.call(null,src)))){
src.sinks = cljs.core.disj.cljs$core$IFn$_invoke$arity$2(src.sinks,this$);
} else {
}

var G__12944 = cljs.core.next(seq__12929__$1);
var G__12945 = null;
var G__12946 = (0);
var G__12947 = (0);
seq__12929 = G__12944;
chunk__12930 = G__12945;
count__12931 = G__12946;
i__12932 = G__12947;
continue;
}
} else {
return null;
}
}
break;
}
});

javelin.core.destroy_cell_BANG_.cljs$lang$maxFixedArity = (1);

javelin.core.destroy_cell_BANG_.cljs$lang$applyTo = (function (seq12925){
var G__12926 = cljs.core.first(seq12925);
var seq12925__$1 = cljs.core.next(seq12925);
return javelin.core.destroy_cell_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__12926,seq12925__$1);
});
javelin.core.set_formula_BANG_ = (function javelin$core$set_formula_BANG_(var_args){
var args__6153__auto__ = [];
var len__6146__auto___12966 = arguments.length;
var i__6147__auto___12967 = (0);
while(true){
if((i__6147__auto___12967 < len__6146__auto___12966)){
args__6153__auto__.push((arguments[i__6147__auto___12967]));

var G__12968 = (i__6147__auto___12967 + (1));
i__6147__auto___12967 = G__12968;
continue;
} else {
}
break;
}

var argseq__6154__auto__ = ((((1) < args__6153__auto__.length))?(new cljs.core.IndexedSeq(args__6153__auto__.slice((1)),(0))):null);
return javelin.core.set_formula_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6154__auto__);
});

javelin.core.set_formula_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (this$,p__12952){
var vec__12953 = p__12952;
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12953,(0),null);
var sources = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12953,(1),null);
javelin.core.destroy_cell_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.array_seq([true], 0));

if(cljs.core.truth_(f)){
this$.sources = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(sources),f);

var seq__12954_12969 = cljs.core.seq(this$.sources);
var chunk__12955_12970 = null;
var count__12956_12971 = (0);
var i__12957_12972 = (0);
while(true){
if((i__12957_12972 < count__12956_12971)){
var source_12973 = chunk__12955_12970.cljs$core$IIndexed$_nth$arity$2(null,i__12957_12972);
if(cljs.core.truth_((javelin.core.cell_QMARK_.cljs$core$IFn$_invoke$arity$1 ? javelin.core.cell_QMARK_.cljs$core$IFn$_invoke$arity$1(source_12973) : javelin.core.cell_QMARK_.call(null,source_12973)))){
source_12973.sinks = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(source_12973.sinks,this$);

if((source_12973.rank > this$.rank)){
var seq__12958_12974 = cljs.core.seq(javelin.core.bf_seq(cljs.core.identity,((function (seq__12954_12969,chunk__12955_12970,count__12956_12971,i__12957_12972,source_12973,vec__12953,f,sources){
return (function (p1__12948_SHARP_){
return p1__12948_SHARP_.sinks;
});})(seq__12954_12969,chunk__12955_12970,count__12956_12971,i__12957_12972,source_12973,vec__12953,f,sources))
,source_12973));
var chunk__12959_12975 = null;
var count__12960_12976 = (0);
var i__12961_12977 = (0);
while(true){
if((i__12961_12977 < count__12960_12976)){
var dep_12978 = chunk__12959_12975.cljs$core$IIndexed$_nth$arity$2(null,i__12961_12977);
dep_12978.rank = javelin.core.next_rank();

var G__12979 = seq__12958_12974;
var G__12980 = chunk__12959_12975;
var G__12981 = count__12960_12976;
var G__12982 = (i__12961_12977 + (1));
seq__12958_12974 = G__12979;
chunk__12959_12975 = G__12980;
count__12960_12976 = G__12981;
i__12961_12977 = G__12982;
continue;
} else {
var temp__4425__auto___12983 = cljs.core.seq(seq__12958_12974);
if(temp__4425__auto___12983){
var seq__12958_12984__$1 = temp__4425__auto___12983;
if(cljs.core.chunked_seq_QMARK_(seq__12958_12984__$1)){
var c__5891__auto___12985 = cljs.core.chunk_first(seq__12958_12984__$1);
var G__12986 = cljs.core.chunk_rest(seq__12958_12984__$1);
var G__12987 = c__5891__auto___12985;
var G__12988 = cljs.core.count(c__5891__auto___12985);
var G__12989 = (0);
seq__12958_12974 = G__12986;
chunk__12959_12975 = G__12987;
count__12960_12976 = G__12988;
i__12961_12977 = G__12989;
continue;
} else {
var dep_12990 = cljs.core.first(seq__12958_12984__$1);
dep_12990.rank = javelin.core.next_rank();

var G__12991 = cljs.core.next(seq__12958_12984__$1);
var G__12992 = null;
var G__12993 = (0);
var G__12994 = (0);
seq__12958_12974 = G__12991;
chunk__12959_12975 = G__12992;
count__12960_12976 = G__12993;
i__12961_12977 = G__12994;
continue;
}
} else {
}
}
break;
}
} else {
}
} else {
}

var G__12995 = seq__12954_12969;
var G__12996 = chunk__12955_12970;
var G__12997 = count__12956_12971;
var G__12998 = (i__12957_12972 + (1));
seq__12954_12969 = G__12995;
chunk__12955_12970 = G__12996;
count__12956_12971 = G__12997;
i__12957_12972 = G__12998;
continue;
} else {
var temp__4425__auto___12999 = cljs.core.seq(seq__12954_12969);
if(temp__4425__auto___12999){
var seq__12954_13000__$1 = temp__4425__auto___12999;
if(cljs.core.chunked_seq_QMARK_(seq__12954_13000__$1)){
var c__5891__auto___13001 = cljs.core.chunk_first(seq__12954_13000__$1);
var G__13002 = cljs.core.chunk_rest(seq__12954_13000__$1);
var G__13003 = c__5891__auto___13001;
var G__13004 = cljs.core.count(c__5891__auto___13001);
var G__13005 = (0);
seq__12954_12969 = G__13002;
chunk__12955_12970 = G__13003;
count__12956_12971 = G__13004;
i__12957_12972 = G__13005;
continue;
} else {
var source_13006 = cljs.core.first(seq__12954_13000__$1);
if(cljs.core.truth_((javelin.core.cell_QMARK_.cljs$core$IFn$_invoke$arity$1 ? javelin.core.cell_QMARK_.cljs$core$IFn$_invoke$arity$1(source_13006) : javelin.core.cell_QMARK_.call(null,source_13006)))){
source_13006.sinks = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(source_13006.sinks,this$);

if((source_13006.rank > this$.rank)){
var seq__12962_13007 = cljs.core.seq(javelin.core.bf_seq(cljs.core.identity,((function (seq__12954_12969,chunk__12955_12970,count__12956_12971,i__12957_12972,source_13006,seq__12954_13000__$1,temp__4425__auto___12999,vec__12953,f,sources){
return (function (p1__12948_SHARP_){
return p1__12948_SHARP_.sinks;
});})(seq__12954_12969,chunk__12955_12970,count__12956_12971,i__12957_12972,source_13006,seq__12954_13000__$1,temp__4425__auto___12999,vec__12953,f,sources))
,source_13006));
var chunk__12963_13008 = null;
var count__12964_13009 = (0);
var i__12965_13010 = (0);
while(true){
if((i__12965_13010 < count__12964_13009)){
var dep_13011 = chunk__12963_13008.cljs$core$IIndexed$_nth$arity$2(null,i__12965_13010);
dep_13011.rank = javelin.core.next_rank();

var G__13012 = seq__12962_13007;
var G__13013 = chunk__12963_13008;
var G__13014 = count__12964_13009;
var G__13015 = (i__12965_13010 + (1));
seq__12962_13007 = G__13012;
chunk__12963_13008 = G__13013;
count__12964_13009 = G__13014;
i__12965_13010 = G__13015;
continue;
} else {
var temp__4425__auto___13016__$1 = cljs.core.seq(seq__12962_13007);
if(temp__4425__auto___13016__$1){
var seq__12962_13017__$1 = temp__4425__auto___13016__$1;
if(cljs.core.chunked_seq_QMARK_(seq__12962_13017__$1)){
var c__5891__auto___13018 = cljs.core.chunk_first(seq__12962_13017__$1);
var G__13019 = cljs.core.chunk_rest(seq__12962_13017__$1);
var G__13020 = c__5891__auto___13018;
var G__13021 = cljs.core.count(c__5891__auto___13018);
var G__13022 = (0);
seq__12962_13007 = G__13019;
chunk__12963_13008 = G__13020;
count__12964_13009 = G__13021;
i__12965_13010 = G__13022;
continue;
} else {
var dep_13023 = cljs.core.first(seq__12962_13017__$1);
dep_13023.rank = javelin.core.next_rank();

var G__13024 = cljs.core.next(seq__12962_13017__$1);
var G__13025 = null;
var G__13026 = (0);
var G__13027 = (0);
seq__12962_13007 = G__13024;
chunk__12963_13008 = G__13025;
count__12964_13009 = G__13026;
i__12965_13010 = G__13027;
continue;
}
} else {
}
}
break;
}
} else {
}
} else {
}

var G__13028 = cljs.core.next(seq__12954_13000__$1);
var G__13029 = null;
var G__13030 = (0);
var G__13031 = (0);
seq__12954_12969 = G__13028;
chunk__12955_12970 = G__13029;
count__12956_12971 = G__13030;
i__12957_12972 = G__13031;
continue;
}
} else {
}
}
break;
}

var compute_13032 = ((function (vec__12953,f,sources){
return (function (p1__12949_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(javelin.core.deref_STAR_(cljs.core.peek(p1__12949_SHARP_)),cljs.core.map.cljs$core$IFn$_invoke$arity$2(javelin.core.deref_STAR_,cljs.core.pop(p1__12949_SHARP_)));
});})(vec__12953,f,sources))
;
this$.thunk = ((function (compute_13032,vec__12953,f,sources){
return (function (){
return this$.state = compute_13032(this$.sources);
});})(compute_13032,vec__12953,f,sources))
;
} else {
}

return javelin.core.propagate_BANG_(this$);
});

javelin.core.set_formula_BANG_.cljs$lang$maxFixedArity = (1);

javelin.core.set_formula_BANG_.cljs$lang$applyTo = (function (seq12950){
var G__12951 = cljs.core.first(seq12950);
var seq12950__$1 = cljs.core.next(seq12950);
return javelin.core.set_formula_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__12951,seq12950__$1);
});

/**
* @constructor
 * @implements {cljs.core.IWatchable}
 * @implements {cljs.core.IReset}
 * @implements {cljs.core.ISwap}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IWithMeta}
*/
javelin.core.Cell = (function (meta,state,rank,prev,sources,sinks,thunk,watches,update){
this.meta = meta;
this.state = state;
this.rank = rank;
this.prev = prev;
this.sources = sources;
this.sinks = sinks;
this.thunk = thunk;
this.watches = watches;
this.update = update;
this.cljs$lang$protocol_mask$partition0$ = 2147909632;
this.cljs$lang$protocol_mask$partition1$ = 98306;
})
javelin.core.Cell.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,w,_){
var self__ = this;
var this$__$1 = this;
return cljs.core.write_all.cljs$core$IFn$_invoke$arity$variadic(w,cljs.core.array_seq(["#<Cell: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([self__.state], 0)),">"], 0));
});

javelin.core.Cell.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this$,meta__$1){
var self__ = this;
var this$__$1 = this;
return (new javelin.core.Cell(meta__$1,self__.state,self__.rank,self__.prev,self__.sources,self__.sinks,self__.thunk,self__.watches,self__.update));
});

javelin.core.Cell.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.meta;
});

javelin.core.Cell.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return this$__$1.state;
});

javelin.core.Cell.prototype.cljs$core$IReset$_reset_BANG_$arity$2 = (function (this$,x){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_((javelin.core.lens_QMARK_.cljs$core$IFn$_invoke$arity$1 ? javelin.core.lens_QMARK_.cljs$core$IFn$_invoke$arity$1(this$__$1) : javelin.core.lens_QMARK_.call(null,this$__$1)))){
this$__$1.update.call(null,x);
} else {
if(cljs.core.truth_((javelin.core.input_QMARK_.cljs$core$IFn$_invoke$arity$1 ? javelin.core.input_QMARK_.cljs$core$IFn$_invoke$arity$1(this$__$1) : javelin.core.input_QMARK_.call(null,this$__$1)))){
this$__$1.state = x;

javelin.core.propagate_BANG_(this$__$1);
} else {
throw (new Error("can't swap! or reset! formula cell"));

}
}

return this$__$1.state;
});

javelin.core.Cell.prototype.cljs$core$ISwap$_swap_BANG_$arity$2 = (function (this$,f){
var self__ = this;
var this$__$1 = this;
var G__13034 = this$__$1;
var G__13035 = (function (){var G__13036 = this$__$1.state;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__13036) : f.call(null,G__13036));
})();
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__13034,G__13035) : cljs.core.reset_BANG_.call(null,G__13034,G__13035));
});

javelin.core.Cell.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (this$,f,a){
var self__ = this;
var this$__$1 = this;
var G__13039 = this$__$1;
var G__13040 = (function (){var G__13041 = this$__$1.state;
var G__13042 = a;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__13041,G__13042) : f.call(null,G__13041,G__13042));
})();
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__13039,G__13040) : cljs.core.reset_BANG_.call(null,G__13039,G__13040));
});

javelin.core.Cell.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (this$,f,a,b){
var self__ = this;
var this$__$1 = this;
var G__13046 = this$__$1;
var G__13047 = (function (){var G__13048 = this$__$1.state;
var G__13049 = a;
var G__13050 = b;
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__13048,G__13049,G__13050) : f.call(null,G__13048,G__13049,G__13050));
})();
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__13046,G__13047) : cljs.core.reset_BANG_.call(null,G__13046,G__13047));
});

javelin.core.Cell.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (this$,f,a,b,xs){
var self__ = this;
var this$__$1 = this;
var G__13051 = this$__$1;
var G__13052 = cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f,this$__$1.state,a,b,xs);
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__13051,G__13052) : cljs.core.reset_BANG_.call(null,G__13051,G__13052));
});

javelin.core.Cell.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,o,n){
var self__ = this;
var this$__$1 = this;
var seq__13053 = cljs.core.seq(self__.watches);
var chunk__13054 = null;
var count__13055 = (0);
var i__13056 = (0);
while(true){
if((i__13056 < count__13055)){
var vec__13057 = chunk__13054.cljs$core$IIndexed$_nth$arity$2(null,i__13056);
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13057,(0),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13057,(1),null);
(f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(key,this$__$1,o,n) : f.call(null,key,this$__$1,o,n));

var G__13059 = seq__13053;
var G__13060 = chunk__13054;
var G__13061 = count__13055;
var G__13062 = (i__13056 + (1));
seq__13053 = G__13059;
chunk__13054 = G__13060;
count__13055 = G__13061;
i__13056 = G__13062;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__13053);
if(temp__4425__auto__){
var seq__13053__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13053__$1)){
var c__5891__auto__ = cljs.core.chunk_first(seq__13053__$1);
var G__13063 = cljs.core.chunk_rest(seq__13053__$1);
var G__13064 = c__5891__auto__;
var G__13065 = cljs.core.count(c__5891__auto__);
var G__13066 = (0);
seq__13053 = G__13063;
chunk__13054 = G__13064;
count__13055 = G__13065;
i__13056 = G__13066;
continue;
} else {
var vec__13058 = cljs.core.first(seq__13053__$1);
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13058,(0),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13058,(1),null);
(f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(key,this$__$1,o,n) : f.call(null,key,this$__$1,o,n));

var G__13067 = cljs.core.next(seq__13053__$1);
var G__13068 = null;
var G__13069 = (0);
var G__13070 = (0);
seq__13053 = G__13067;
chunk__13054 = G__13068;
count__13055 = G__13069;
i__13056 = G__13070;
continue;
}
} else {
return null;
}
}
break;
}
});

javelin.core.Cell.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,k,f){
var self__ = this;
var this$__$1 = this;
return this$__$1.watches = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.watches,k,f);
});

javelin.core.Cell.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,k){
var self__ = this;
var this$__$1 = this;
return this$__$1.watches = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.watches,k);
});

javelin.core.Cell.getBasis = (function (){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$meta,cljs.core.cst$sym$state,cljs.core.cst$sym$rank,cljs.core.cst$sym$prev,cljs.core.cst$sym$sources,cljs.core.cst$sym$sinks,cljs.core.cst$sym$thunk,cljs.core.cst$sym$watches,cljs.core.cst$sym$update], null);
});

javelin.core.Cell.cljs$lang$type = true;

javelin.core.Cell.cljs$lang$ctorStr = "javelin.core/Cell";

javelin.core.Cell.cljs$lang$ctorPrWriter = (function (this__5686__auto__,writer__5687__auto__,opt__5688__auto__){
return cljs.core._write(writer__5687__auto__,"javelin.core/Cell");
});

javelin.core.__GT_Cell = (function javelin$core$__GT_Cell(meta,state,rank,prev,sources,sinks,thunk,watches,update){
return (new javelin.core.Cell(meta,state,rank,prev,sources,sinks,thunk,watches,update));
});

javelin.core.cell_QMARK_ = (function javelin$core$cell_QMARK_(c){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.type(c),javelin.core.Cell)){
return c;
} else {
return null;
}
});
javelin.core.formula_QMARK_ = (function javelin$core$formula_QMARK_(c){
if(cljs.core.truth_((function (){var and__5076__auto__ = javelin.core.cell_QMARK_(c);
if(cljs.core.truth_(and__5076__auto__)){
return c.thunk;
} else {
return and__5076__auto__;
}
})())){
return c;
} else {
return null;
}
});
javelin.core.lens_QMARK_ = (function javelin$core$lens_QMARK_(c){
if(cljs.core.truth_((function (){var and__5076__auto__ = javelin.core.cell_QMARK_(c);
if(cljs.core.truth_(and__5076__auto__)){
return c.update;
} else {
return and__5076__auto__;
}
})())){
return c;
} else {
return null;
}
});
javelin.core.input_QMARK_ = (function javelin$core$input_QMARK_(c){
if(cljs.core.truth_((function (){var and__5076__auto__ = javelin.core.cell_QMARK_(c);
if(cljs.core.truth_(and__5076__auto__)){
return cljs.core.not(javelin.core.formula_QMARK_(c));
} else {
return and__5076__auto__;
}
})())){
return c;
} else {
return null;
}
});
javelin.core.set_cell_BANG_ = (function javelin$core$set_cell_BANG_(c,x){
c.state = x;

return javelin.core.set_formula_BANG_(c);
});
javelin.core.formula = (function javelin$core$formula(f){
return (function() { 
var G__13071__delegate = function (sources){
return javelin.core.set_formula_BANG_.cljs$core$IFn$_invoke$arity$variadic((javelin.core.cell.cljs$core$IFn$_invoke$arity$1 ? javelin.core.cell.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$javelin$core_SLASH_none) : javelin.core.cell.call(null,cljs.core.cst$kw$javelin$core_SLASH_none)),cljs.core.array_seq([f,sources], 0));
};
var G__13071 = function (var_args){
var sources = null;
if (arguments.length > 0) {
var G__13072__i = 0, G__13072__a = new Array(arguments.length -  0);
while (G__13072__i < G__13072__a.length) {G__13072__a[G__13072__i] = arguments[G__13072__i + 0]; ++G__13072__i;}
  sources = new cljs.core.IndexedSeq(G__13072__a,0);
} 
return G__13071__delegate.call(this,sources);};
G__13071.cljs$lang$maxFixedArity = 0;
G__13071.cljs$lang$applyTo = (function (arglist__13073){
var sources = cljs.core.seq(arglist__13073);
return G__13071__delegate(sources);
});
G__13071.cljs$core$IFn$_invoke$arity$variadic = G__13071__delegate;
return G__13071;
})()
;
});
javelin.core.lens = (function javelin$core$lens(c,f){
var c__$1 = javelin.core.formula(cljs.core.identity).call(null,c);
c__$1.update = f;

return c__$1;
});
javelin.core.cell = (function javelin$core$cell(var_args){
var args13074 = [];
var len__6146__auto___13082 = arguments.length;
var i__6147__auto___13083 = (0);
while(true){
if((i__6147__auto___13083 < len__6146__auto___13082)){
args13074.push((arguments[i__6147__auto___13083]));

var G__13084 = (i__6147__auto___13083 + (1));
i__6147__auto___13083 = G__13084;
continue;
} else {
}
break;
}

var G__13078 = args13074.length;
switch (G__13078) {
case 1:
return javelin.core.cell.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
var argseq__6165__auto__ = (new cljs.core.IndexedSeq(args13074.slice((1)),(0)));
return javelin.core.cell.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6165__auto__);

}
});

javelin.core.cell.cljs$core$IFn$_invoke$arity$1 = (function (x){
return javelin.core.set_formula_BANG_((new javelin.core.Cell(null,x,javelin.core.next_rank(),x,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentHashSet.EMPTY,null,cljs.core.PersistentArrayMap.EMPTY,null)));
});

javelin.core.cell.cljs$core$IFn$_invoke$arity$variadic = (function (x,p__13079){
var map__13080 = p__13079;
var map__13080__$1 = ((((!((map__13080 == null)))?((((map__13080.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13080.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13080):map__13080);
var meta = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13080__$1,cljs.core.cst$kw$meta);
return javelin.core.set_formula_BANG_((new javelin.core.Cell(meta,x,javelin.core.next_rank(),x,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentHashSet.EMPTY,null,cljs.core.PersistentArrayMap.EMPTY,null)));
});

javelin.core.cell.cljs$lang$applyTo = (function (seq13075){
var G__13076 = cljs.core.first(seq13075);
var seq13075__$1 = cljs.core.next(seq13075);
return javelin.core.cell.cljs$core$IFn$_invoke$arity$variadic(G__13076,seq13075__$1);
});

javelin.core.cell.cljs$lang$maxFixedArity = (1);
javelin.core.lift = javelin.core.formula;
javelin.core.dosync_STAR_ = (function javelin$core$dosync_STAR_(thunk){
var bind = (function (p1__13086_SHARP_){
var _STAR_tx_STAR_13090 = javelin.core._STAR_tx_STAR_;
javelin.core._STAR_tx_STAR_ = (function (){var G__13091 = tailrecursion.priority_map.priority_map();
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__13091) : cljs.core.atom.call(null,G__13091));
})();

try{return (p1__13086_SHARP_.cljs$core$IFn$_invoke$arity$0 ? p1__13086_SHARP_.cljs$core$IFn$_invoke$arity$0() : p1__13086_SHARP_.call(null));
}finally {javelin.core._STAR_tx_STAR_ = _STAR_tx_STAR_13090;
}});
var prop = ((function (bind){
return (function (){
var tx = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(javelin.core._STAR_tx_STAR_) : cljs.core.deref.call(null,javelin.core._STAR_tx_STAR_));
var _STAR_tx_STAR_13092 = javelin.core._STAR_tx_STAR_;
javelin.core._STAR_tx_STAR_ = null;

try{return javelin.core.propagate_STAR_(tx);
}finally {javelin.core._STAR_tx_STAR_ = _STAR_tx_STAR_13092;
}});})(bind))
;
if(cljs.core.truth_(javelin.core._STAR_tx_STAR_)){
return (thunk.cljs$core$IFn$_invoke$arity$0 ? thunk.cljs$core$IFn$_invoke$arity$0() : thunk.call(null));
} else {
return bind(((function (bind,prop){
return (function (){
(thunk.cljs$core$IFn$_invoke$arity$0 ? thunk.cljs$core$IFn$_invoke$arity$0() : thunk.call(null));

return prop();
});})(bind,prop))
);
}
});
javelin.core.alts_BANG_ = (function javelin$core$alts_BANG_(var_args){
var args__6153__auto__ = [];
var len__6146__auto___13100 = arguments.length;
var i__6147__auto___13101 = (0);
while(true){
if((i__6147__auto___13101 < len__6146__auto___13100)){
args__6153__auto__.push((arguments[i__6147__auto___13101]));

var G__13102 = (i__6147__auto___13101 + (1));
i__6147__auto___13101 = G__13102;
continue;
} else {
}
break;
}

var argseq__6154__auto__ = ((((0) < args__6153__auto__.length))?(new cljs.core.IndexedSeq(args__6153__auto__.slice((0)),(0))):null);
return javelin.core.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(argseq__6154__auto__);
});

javelin.core.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (cells){
var olds = (function (){var G__13099 = cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cells),cljs.core.cst$kw$javelin$core_SLASH_none);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__13099) : cljs.core.atom.call(null,G__13099));
})();
var tag_neq = ((function (olds){
return (function (p1__13093_SHARP_,p2__13094_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(p1__13093_SHARP_,p2__13094_SHARP_),p2__13094_SHARP_],null));
});})(olds))
;
var diff = ((function (olds,tag_neq){
return (function (p1__13096_SHARP_,p2__13095_SHARP_){
return cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.map.cljs$core$IFn$_invoke$arity$3(tag_neq,p1__13096_SHARP_,p2__13095_SHARP_))));
});})(olds,tag_neq))
;
var proc = ((function (olds,tag_neq,diff){
return (function() { 
var G__13103__delegate = function (rest__13097_SHARP_){
var news = diff((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(olds) : cljs.core.deref.call(null,olds)),rest__13097_SHARP_);
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(olds,rest__13097_SHARP_) : cljs.core.reset_BANG_.call(null,olds,rest__13097_SHARP_));

return news;
};
var G__13103 = function (var_args){
var rest__13097_SHARP_ = null;
if (arguments.length > 0) {
var G__13104__i = 0, G__13104__a = new Array(arguments.length -  0);
while (G__13104__i < G__13104__a.length) {G__13104__a[G__13104__i] = arguments[G__13104__i + 0]; ++G__13104__i;}
  rest__13097_SHARP_ = new cljs.core.IndexedSeq(G__13104__a,0);
} 
return G__13103__delegate.call(this,rest__13097_SHARP_);};
G__13103.cljs$lang$maxFixedArity = 0;
G__13103.cljs$lang$applyTo = (function (arglist__13105){
var rest__13097_SHARP_ = cljs.core.seq(arglist__13105);
return G__13103__delegate(rest__13097_SHARP_);
});
G__13103.cljs$core$IFn$_invoke$arity$variadic = G__13103__delegate;
return G__13103;
})()
;})(olds,tag_neq,diff))
;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(javelin.core.formula(proc),cells);
});

javelin.core.alts_BANG_.cljs$lang$maxFixedArity = (0);

javelin.core.alts_BANG_.cljs$lang$applyTo = (function (seq13098){
return javelin.core.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq13098));
});
javelin.core.cell_map = (function javelin$core$cell_map(f,c){
var cseq = javelin.core.formula(cljs.core.seq).call(null,c);
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (cseq){
return (function (p1__13106_SHARP_){
return javelin.core.formula(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(f,javelin.core.safe_nth)).call(null,cseq,p1__13106_SHARP_);
});})(cseq))
,cljs.core.range.cljs$core$IFn$_invoke$arity$2((0),cljs.core.count((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cseq) : cljs.core.deref.call(null,cseq)))));
});
javelin.core.cell_doseq_STAR_ = (function javelin$core$cell_doseq_STAR_(items_seq,f){
var pool_size = javelin.core.cell.cljs$core$IFn$_invoke$arity$1((0));
var cur_count = javelin.core.formula(cljs.core.count).call(null,items_seq);
var ith_item = ((function (pool_size,cur_count){
return (function (p1__13107_SHARP_){
return javelin.core.formula(javelin.core.safe_nth).call(null,items_seq,p1__13107_SHARP_);
});})(pool_size,cur_count))
;
return javelin.core.formula(((function (pool_size,cur_count,ith_item){
return (function (pool_size__$1,cur_count__$1,f__$1,ith_item__$1,reset_pool_size_BANG_){
if((pool_size__$1 < cur_count__$1)){
var seq__13114_13120 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$2(pool_size__$1,cur_count__$1));
var chunk__13115_13121 = null;
var count__13116_13122 = (0);
var i__13117_13123 = (0);
while(true){
if((i__13117_13123 < count__13116_13122)){
var i_13124 = chunk__13115_13121.cljs$core$IIndexed$_nth$arity$2(null,i__13117_13123);
var G__13118_13125 = (ith_item__$1.cljs$core$IFn$_invoke$arity$1 ? ith_item__$1.cljs$core$IFn$_invoke$arity$1(i_13124) : ith_item__$1.call(null,i_13124));
(f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(G__13118_13125) : f__$1.call(null,G__13118_13125));

var G__13126 = seq__13114_13120;
var G__13127 = chunk__13115_13121;
var G__13128 = count__13116_13122;
var G__13129 = (i__13117_13123 + (1));
seq__13114_13120 = G__13126;
chunk__13115_13121 = G__13127;
count__13116_13122 = G__13128;
i__13117_13123 = G__13129;
continue;
} else {
var temp__4425__auto___13130 = cljs.core.seq(seq__13114_13120);
if(temp__4425__auto___13130){
var seq__13114_13131__$1 = temp__4425__auto___13130;
if(cljs.core.chunked_seq_QMARK_(seq__13114_13131__$1)){
var c__5891__auto___13132 = cljs.core.chunk_first(seq__13114_13131__$1);
var G__13133 = cljs.core.chunk_rest(seq__13114_13131__$1);
var G__13134 = c__5891__auto___13132;
var G__13135 = cljs.core.count(c__5891__auto___13132);
var G__13136 = (0);
seq__13114_13120 = G__13133;
chunk__13115_13121 = G__13134;
count__13116_13122 = G__13135;
i__13117_13123 = G__13136;
continue;
} else {
var i_13137 = cljs.core.first(seq__13114_13131__$1);
var G__13119_13138 = (ith_item__$1.cljs$core$IFn$_invoke$arity$1 ? ith_item__$1.cljs$core$IFn$_invoke$arity$1(i_13137) : ith_item__$1.call(null,i_13137));
(f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(G__13119_13138) : f__$1.call(null,G__13119_13138));

var G__13139 = cljs.core.next(seq__13114_13131__$1);
var G__13140 = null;
var G__13141 = (0);
var G__13142 = (0);
seq__13114_13120 = G__13139;
chunk__13115_13121 = G__13140;
count__13116_13122 = G__13141;
i__13117_13123 = G__13142;
continue;
}
} else {
}
}
break;
}

return (reset_pool_size_BANG_.cljs$core$IFn$_invoke$arity$1 ? reset_pool_size_BANG_.cljs$core$IFn$_invoke$arity$1(cur_count__$1) : reset_pool_size_BANG_.call(null,cur_count__$1));
} else {
return null;
}
});})(pool_size,cur_count,ith_item))
).call(null,pool_size,cur_count,f,ith_item,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.reset_BANG_,pool_size));
});
