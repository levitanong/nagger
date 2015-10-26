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

var G__12926 = ((!(diff_QMARK_))?popq:cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (pri_map,popq,old,new$,diff_QMARK_,next,temp__4425__auto__){
return (function (p1__12924_SHARP_,p2__12925_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__12924_SHARP_,p2__12925_SHARP_,p2__12925_SHARP_.rank);
});})(pri_map,popq,old,new$,diff_QMARK_,next,temp__4425__auto__))
,popq,next.sinks));
pri_map = G__12926;
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
}catch (e12928){if((e12928 instanceof Error)){
var _ = e12928;
return null;
} else {
throw e12928;

}
}});
javelin.core.propagate_BANG_ = (function javelin$core$propagate_BANG_(c){
if(cljs.core.truth_(javelin.core._STAR_tx_STAR_)){
var G__12931 = c;
javelin.core.add_sync_BANG_(G__12931);

return G__12931;
} else {
var G__12932 = c;
javelin.core.propagate_STAR_(javelin.core.cell__GT_pm(G__12932));

return G__12932;
}
});
javelin.core.destroy_cell_BANG_ = (function javelin$core$destroy_cell_BANG_(var_args){
var args__6153__auto__ = [];
var len__6146__auto___12941 = arguments.length;
var i__6147__auto___12942 = (0);
while(true){
if((i__6147__auto___12942 < len__6146__auto___12941)){
args__6153__auto__.push((arguments[i__6147__auto___12942]));

var G__12943 = (i__6147__auto___12942 + (1));
i__6147__auto___12942 = G__12943;
continue;
} else {
}
break;
}

var argseq__6154__auto__ = ((((1) < args__6153__auto__.length))?(new cljs.core.IndexedSeq(args__6153__auto__.slice((1)),(0))):null);
return javelin.core.destroy_cell_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6154__auto__);
});

javelin.core.destroy_cell_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (this$,p__12935){
var vec__12936 = p__12935;
var keep_watches_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12936,(0),null);
var srcs = this$.sources;
this$.sources = cljs.core.PersistentVector.EMPTY;

this$.update = null;

this$.thunk = null;

if(cljs.core.truth_(keep_watches_QMARK_)){
} else {
this$.watches = cljs.core.PersistentArrayMap.EMPTY;
}

var seq__12937 = cljs.core.seq(srcs);
var chunk__12938 = null;
var count__12939 = (0);
var i__12940 = (0);
while(true){
if((i__12940 < count__12939)){
var src = chunk__12938.cljs$core$IIndexed$_nth$arity$2(null,i__12940);
if(cljs.core.truth_((javelin.core.cell_QMARK_.cljs$core$IFn$_invoke$arity$1 ? javelin.core.cell_QMARK_.cljs$core$IFn$_invoke$arity$1(src) : javelin.core.cell_QMARK_.call(null,src)))){
src.sinks = cljs.core.disj.cljs$core$IFn$_invoke$arity$2(src.sinks,this$);
} else {
}

var G__12944 = seq__12937;
var G__12945 = chunk__12938;
var G__12946 = count__12939;
var G__12947 = (i__12940 + (1));
seq__12937 = G__12944;
chunk__12938 = G__12945;
count__12939 = G__12946;
i__12940 = G__12947;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__12937);
if(temp__4425__auto__){
var seq__12937__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__12937__$1)){
var c__5891__auto__ = cljs.core.chunk_first(seq__12937__$1);
var G__12948 = cljs.core.chunk_rest(seq__12937__$1);
var G__12949 = c__5891__auto__;
var G__12950 = cljs.core.count(c__5891__auto__);
var G__12951 = (0);
seq__12937 = G__12948;
chunk__12938 = G__12949;
count__12939 = G__12950;
i__12940 = G__12951;
continue;
} else {
var src = cljs.core.first(seq__12937__$1);
if(cljs.core.truth_((javelin.core.cell_QMARK_.cljs$core$IFn$_invoke$arity$1 ? javelin.core.cell_QMARK_.cljs$core$IFn$_invoke$arity$1(src) : javelin.core.cell_QMARK_.call(null,src)))){
src.sinks = cljs.core.disj.cljs$core$IFn$_invoke$arity$2(src.sinks,this$);
} else {
}

var G__12952 = cljs.core.next(seq__12937__$1);
var G__12953 = null;
var G__12954 = (0);
var G__12955 = (0);
seq__12937 = G__12952;
chunk__12938 = G__12953;
count__12939 = G__12954;
i__12940 = G__12955;
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

javelin.core.destroy_cell_BANG_.cljs$lang$applyTo = (function (seq12933){
var G__12934 = cljs.core.first(seq12933);
var seq12933__$1 = cljs.core.next(seq12933);
return javelin.core.destroy_cell_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__12934,seq12933__$1);
});
javelin.core.set_formula_BANG_ = (function javelin$core$set_formula_BANG_(var_args){
var args__6153__auto__ = [];
var len__6146__auto___12974 = arguments.length;
var i__6147__auto___12975 = (0);
while(true){
if((i__6147__auto___12975 < len__6146__auto___12974)){
args__6153__auto__.push((arguments[i__6147__auto___12975]));

var G__12976 = (i__6147__auto___12975 + (1));
i__6147__auto___12975 = G__12976;
continue;
} else {
}
break;
}

var argseq__6154__auto__ = ((((1) < args__6153__auto__.length))?(new cljs.core.IndexedSeq(args__6153__auto__.slice((1)),(0))):null);
return javelin.core.set_formula_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6154__auto__);
});

javelin.core.set_formula_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (this$,p__12960){
var vec__12961 = p__12960;
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12961,(0),null);
var sources = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12961,(1),null);
javelin.core.destroy_cell_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.array_seq([true], 0));

if(cljs.core.truth_(f)){
this$.sources = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(sources),f);

var seq__12962_12977 = cljs.core.seq(this$.sources);
var chunk__12963_12978 = null;
var count__12964_12979 = (0);
var i__12965_12980 = (0);
while(true){
if((i__12965_12980 < count__12964_12979)){
var source_12981 = chunk__12963_12978.cljs$core$IIndexed$_nth$arity$2(null,i__12965_12980);
if(cljs.core.truth_((javelin.core.cell_QMARK_.cljs$core$IFn$_invoke$arity$1 ? javelin.core.cell_QMARK_.cljs$core$IFn$_invoke$arity$1(source_12981) : javelin.core.cell_QMARK_.call(null,source_12981)))){
source_12981.sinks = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(source_12981.sinks,this$);

if((source_12981.rank > this$.rank)){
var seq__12966_12982 = cljs.core.seq(javelin.core.bf_seq(cljs.core.identity,((function (seq__12962_12977,chunk__12963_12978,count__12964_12979,i__12965_12980,source_12981,vec__12961,f,sources){
return (function (p1__12956_SHARP_){
return p1__12956_SHARP_.sinks;
});})(seq__12962_12977,chunk__12963_12978,count__12964_12979,i__12965_12980,source_12981,vec__12961,f,sources))
,source_12981));
var chunk__12967_12983 = null;
var count__12968_12984 = (0);
var i__12969_12985 = (0);
while(true){
if((i__12969_12985 < count__12968_12984)){
var dep_12986 = chunk__12967_12983.cljs$core$IIndexed$_nth$arity$2(null,i__12969_12985);
dep_12986.rank = javelin.core.next_rank();

var G__12987 = seq__12966_12982;
var G__12988 = chunk__12967_12983;
var G__12989 = count__12968_12984;
var G__12990 = (i__12969_12985 + (1));
seq__12966_12982 = G__12987;
chunk__12967_12983 = G__12988;
count__12968_12984 = G__12989;
i__12969_12985 = G__12990;
continue;
} else {
var temp__4425__auto___12991 = cljs.core.seq(seq__12966_12982);
if(temp__4425__auto___12991){
var seq__12966_12992__$1 = temp__4425__auto___12991;
if(cljs.core.chunked_seq_QMARK_(seq__12966_12992__$1)){
var c__5891__auto___12993 = cljs.core.chunk_first(seq__12966_12992__$1);
var G__12994 = cljs.core.chunk_rest(seq__12966_12992__$1);
var G__12995 = c__5891__auto___12993;
var G__12996 = cljs.core.count(c__5891__auto___12993);
var G__12997 = (0);
seq__12966_12982 = G__12994;
chunk__12967_12983 = G__12995;
count__12968_12984 = G__12996;
i__12969_12985 = G__12997;
continue;
} else {
var dep_12998 = cljs.core.first(seq__12966_12992__$1);
dep_12998.rank = javelin.core.next_rank();

var G__12999 = cljs.core.next(seq__12966_12992__$1);
var G__13000 = null;
var G__13001 = (0);
var G__13002 = (0);
seq__12966_12982 = G__12999;
chunk__12967_12983 = G__13000;
count__12968_12984 = G__13001;
i__12969_12985 = G__13002;
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

var G__13003 = seq__12962_12977;
var G__13004 = chunk__12963_12978;
var G__13005 = count__12964_12979;
var G__13006 = (i__12965_12980 + (1));
seq__12962_12977 = G__13003;
chunk__12963_12978 = G__13004;
count__12964_12979 = G__13005;
i__12965_12980 = G__13006;
continue;
} else {
var temp__4425__auto___13007 = cljs.core.seq(seq__12962_12977);
if(temp__4425__auto___13007){
var seq__12962_13008__$1 = temp__4425__auto___13007;
if(cljs.core.chunked_seq_QMARK_(seq__12962_13008__$1)){
var c__5891__auto___13009 = cljs.core.chunk_first(seq__12962_13008__$1);
var G__13010 = cljs.core.chunk_rest(seq__12962_13008__$1);
var G__13011 = c__5891__auto___13009;
var G__13012 = cljs.core.count(c__5891__auto___13009);
var G__13013 = (0);
seq__12962_12977 = G__13010;
chunk__12963_12978 = G__13011;
count__12964_12979 = G__13012;
i__12965_12980 = G__13013;
continue;
} else {
var source_13014 = cljs.core.first(seq__12962_13008__$1);
if(cljs.core.truth_((javelin.core.cell_QMARK_.cljs$core$IFn$_invoke$arity$1 ? javelin.core.cell_QMARK_.cljs$core$IFn$_invoke$arity$1(source_13014) : javelin.core.cell_QMARK_.call(null,source_13014)))){
source_13014.sinks = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(source_13014.sinks,this$);

if((source_13014.rank > this$.rank)){
var seq__12970_13015 = cljs.core.seq(javelin.core.bf_seq(cljs.core.identity,((function (seq__12962_12977,chunk__12963_12978,count__12964_12979,i__12965_12980,source_13014,seq__12962_13008__$1,temp__4425__auto___13007,vec__12961,f,sources){
return (function (p1__12956_SHARP_){
return p1__12956_SHARP_.sinks;
});})(seq__12962_12977,chunk__12963_12978,count__12964_12979,i__12965_12980,source_13014,seq__12962_13008__$1,temp__4425__auto___13007,vec__12961,f,sources))
,source_13014));
var chunk__12971_13016 = null;
var count__12972_13017 = (0);
var i__12973_13018 = (0);
while(true){
if((i__12973_13018 < count__12972_13017)){
var dep_13019 = chunk__12971_13016.cljs$core$IIndexed$_nth$arity$2(null,i__12973_13018);
dep_13019.rank = javelin.core.next_rank();

var G__13020 = seq__12970_13015;
var G__13021 = chunk__12971_13016;
var G__13022 = count__12972_13017;
var G__13023 = (i__12973_13018 + (1));
seq__12970_13015 = G__13020;
chunk__12971_13016 = G__13021;
count__12972_13017 = G__13022;
i__12973_13018 = G__13023;
continue;
} else {
var temp__4425__auto___13024__$1 = cljs.core.seq(seq__12970_13015);
if(temp__4425__auto___13024__$1){
var seq__12970_13025__$1 = temp__4425__auto___13024__$1;
if(cljs.core.chunked_seq_QMARK_(seq__12970_13025__$1)){
var c__5891__auto___13026 = cljs.core.chunk_first(seq__12970_13025__$1);
var G__13027 = cljs.core.chunk_rest(seq__12970_13025__$1);
var G__13028 = c__5891__auto___13026;
var G__13029 = cljs.core.count(c__5891__auto___13026);
var G__13030 = (0);
seq__12970_13015 = G__13027;
chunk__12971_13016 = G__13028;
count__12972_13017 = G__13029;
i__12973_13018 = G__13030;
continue;
} else {
var dep_13031 = cljs.core.first(seq__12970_13025__$1);
dep_13031.rank = javelin.core.next_rank();

var G__13032 = cljs.core.next(seq__12970_13025__$1);
var G__13033 = null;
var G__13034 = (0);
var G__13035 = (0);
seq__12970_13015 = G__13032;
chunk__12971_13016 = G__13033;
count__12972_13017 = G__13034;
i__12973_13018 = G__13035;
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

var G__13036 = cljs.core.next(seq__12962_13008__$1);
var G__13037 = null;
var G__13038 = (0);
var G__13039 = (0);
seq__12962_12977 = G__13036;
chunk__12963_12978 = G__13037;
count__12964_12979 = G__13038;
i__12965_12980 = G__13039;
continue;
}
} else {
}
}
break;
}

var compute_13040 = ((function (vec__12961,f,sources){
return (function (p1__12957_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(javelin.core.deref_STAR_(cljs.core.peek(p1__12957_SHARP_)),cljs.core.map.cljs$core$IFn$_invoke$arity$2(javelin.core.deref_STAR_,cljs.core.pop(p1__12957_SHARP_)));
});})(vec__12961,f,sources))
;
this$.thunk = ((function (compute_13040,vec__12961,f,sources){
return (function (){
return this$.state = compute_13040(this$.sources);
});})(compute_13040,vec__12961,f,sources))
;
} else {
}

return javelin.core.propagate_BANG_(this$);
});

javelin.core.set_formula_BANG_.cljs$lang$maxFixedArity = (1);

javelin.core.set_formula_BANG_.cljs$lang$applyTo = (function (seq12958){
var G__12959 = cljs.core.first(seq12958);
var seq12958__$1 = cljs.core.next(seq12958);
return javelin.core.set_formula_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__12959,seq12958__$1);
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
var G__13042 = this$__$1;
var G__13043 = (function (){var G__13044 = this$__$1.state;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__13044) : f.call(null,G__13044));
})();
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__13042,G__13043) : cljs.core.reset_BANG_.call(null,G__13042,G__13043));
});

javelin.core.Cell.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (this$,f,a){
var self__ = this;
var this$__$1 = this;
var G__13047 = this$__$1;
var G__13048 = (function (){var G__13049 = this$__$1.state;
var G__13050 = a;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__13049,G__13050) : f.call(null,G__13049,G__13050));
})();
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__13047,G__13048) : cljs.core.reset_BANG_.call(null,G__13047,G__13048));
});

javelin.core.Cell.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (this$,f,a,b){
var self__ = this;
var this$__$1 = this;
var G__13054 = this$__$1;
var G__13055 = (function (){var G__13056 = this$__$1.state;
var G__13057 = a;
var G__13058 = b;
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__13056,G__13057,G__13058) : f.call(null,G__13056,G__13057,G__13058));
})();
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__13054,G__13055) : cljs.core.reset_BANG_.call(null,G__13054,G__13055));
});

javelin.core.Cell.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (this$,f,a,b,xs){
var self__ = this;
var this$__$1 = this;
var G__13059 = this$__$1;
var G__13060 = cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f,this$__$1.state,a,b,xs);
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__13059,G__13060) : cljs.core.reset_BANG_.call(null,G__13059,G__13060));
});

javelin.core.Cell.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,o,n){
var self__ = this;
var this$__$1 = this;
var seq__13061 = cljs.core.seq(self__.watches);
var chunk__13062 = null;
var count__13063 = (0);
var i__13064 = (0);
while(true){
if((i__13064 < count__13063)){
var vec__13065 = chunk__13062.cljs$core$IIndexed$_nth$arity$2(null,i__13064);
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13065,(0),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13065,(1),null);
(f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(key,this$__$1,o,n) : f.call(null,key,this$__$1,o,n));

var G__13067 = seq__13061;
var G__13068 = chunk__13062;
var G__13069 = count__13063;
var G__13070 = (i__13064 + (1));
seq__13061 = G__13067;
chunk__13062 = G__13068;
count__13063 = G__13069;
i__13064 = G__13070;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__13061);
if(temp__4425__auto__){
var seq__13061__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13061__$1)){
var c__5891__auto__ = cljs.core.chunk_first(seq__13061__$1);
var G__13071 = cljs.core.chunk_rest(seq__13061__$1);
var G__13072 = c__5891__auto__;
var G__13073 = cljs.core.count(c__5891__auto__);
var G__13074 = (0);
seq__13061 = G__13071;
chunk__13062 = G__13072;
count__13063 = G__13073;
i__13064 = G__13074;
continue;
} else {
var vec__13066 = cljs.core.first(seq__13061__$1);
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13066,(0),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13066,(1),null);
(f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(key,this$__$1,o,n) : f.call(null,key,this$__$1,o,n));

var G__13075 = cljs.core.next(seq__13061__$1);
var G__13076 = null;
var G__13077 = (0);
var G__13078 = (0);
seq__13061 = G__13075;
chunk__13062 = G__13076;
count__13063 = G__13077;
i__13064 = G__13078;
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
var G__13079__delegate = function (sources){
return javelin.core.set_formula_BANG_.cljs$core$IFn$_invoke$arity$variadic((javelin.core.cell.cljs$core$IFn$_invoke$arity$1 ? javelin.core.cell.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$javelin$core_SLASH_none) : javelin.core.cell.call(null,cljs.core.cst$kw$javelin$core_SLASH_none)),cljs.core.array_seq([f,sources], 0));
};
var G__13079 = function (var_args){
var sources = null;
if (arguments.length > 0) {
var G__13080__i = 0, G__13080__a = new Array(arguments.length -  0);
while (G__13080__i < G__13080__a.length) {G__13080__a[G__13080__i] = arguments[G__13080__i + 0]; ++G__13080__i;}
  sources = new cljs.core.IndexedSeq(G__13080__a,0);
} 
return G__13079__delegate.call(this,sources);};
G__13079.cljs$lang$maxFixedArity = 0;
G__13079.cljs$lang$applyTo = (function (arglist__13081){
var sources = cljs.core.seq(arglist__13081);
return G__13079__delegate(sources);
});
G__13079.cljs$core$IFn$_invoke$arity$variadic = G__13079__delegate;
return G__13079;
})()
;
});
javelin.core.lens = (function javelin$core$lens(c,f){
var c__$1 = javelin.core.formula(cljs.core.identity).call(null,c);
c__$1.update = f;

return c__$1;
});
javelin.core.cell = (function javelin$core$cell(var_args){
var args13082 = [];
var len__6146__auto___13090 = arguments.length;
var i__6147__auto___13091 = (0);
while(true){
if((i__6147__auto___13091 < len__6146__auto___13090)){
args13082.push((arguments[i__6147__auto___13091]));

var G__13092 = (i__6147__auto___13091 + (1));
i__6147__auto___13091 = G__13092;
continue;
} else {
}
break;
}

var G__13086 = args13082.length;
switch (G__13086) {
case 1:
return javelin.core.cell.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
var argseq__6165__auto__ = (new cljs.core.IndexedSeq(args13082.slice((1)),(0)));
return javelin.core.cell.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6165__auto__);

}
});

javelin.core.cell.cljs$core$IFn$_invoke$arity$1 = (function (x){
return javelin.core.set_formula_BANG_((new javelin.core.Cell(null,x,javelin.core.next_rank(),x,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentHashSet.EMPTY,null,cljs.core.PersistentArrayMap.EMPTY,null)));
});

javelin.core.cell.cljs$core$IFn$_invoke$arity$variadic = (function (x,p__13087){
var map__13088 = p__13087;
var map__13088__$1 = ((((!((map__13088 == null)))?((((map__13088.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13088.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13088):map__13088);
var meta = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13088__$1,cljs.core.cst$kw$meta);
return javelin.core.set_formula_BANG_((new javelin.core.Cell(meta,x,javelin.core.next_rank(),x,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentHashSet.EMPTY,null,cljs.core.PersistentArrayMap.EMPTY,null)));
});

javelin.core.cell.cljs$lang$applyTo = (function (seq13083){
var G__13084 = cljs.core.first(seq13083);
var seq13083__$1 = cljs.core.next(seq13083);
return javelin.core.cell.cljs$core$IFn$_invoke$arity$variadic(G__13084,seq13083__$1);
});

javelin.core.cell.cljs$lang$maxFixedArity = (1);
javelin.core.lift = javelin.core.formula;
javelin.core.dosync_STAR_ = (function javelin$core$dosync_STAR_(thunk){
var bind = (function (p1__13094_SHARP_){
var _STAR_tx_STAR_13098 = javelin.core._STAR_tx_STAR_;
javelin.core._STAR_tx_STAR_ = (function (){var G__13099 = tailrecursion.priority_map.priority_map();
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__13099) : cljs.core.atom.call(null,G__13099));
})();

try{return (p1__13094_SHARP_.cljs$core$IFn$_invoke$arity$0 ? p1__13094_SHARP_.cljs$core$IFn$_invoke$arity$0() : p1__13094_SHARP_.call(null));
}finally {javelin.core._STAR_tx_STAR_ = _STAR_tx_STAR_13098;
}});
var prop = ((function (bind){
return (function (){
var tx = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(javelin.core._STAR_tx_STAR_) : cljs.core.deref.call(null,javelin.core._STAR_tx_STAR_));
var _STAR_tx_STAR_13100 = javelin.core._STAR_tx_STAR_;
javelin.core._STAR_tx_STAR_ = null;

try{return javelin.core.propagate_STAR_(tx);
}finally {javelin.core._STAR_tx_STAR_ = _STAR_tx_STAR_13100;
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
var len__6146__auto___13108 = arguments.length;
var i__6147__auto___13109 = (0);
while(true){
if((i__6147__auto___13109 < len__6146__auto___13108)){
args__6153__auto__.push((arguments[i__6147__auto___13109]));

var G__13110 = (i__6147__auto___13109 + (1));
i__6147__auto___13109 = G__13110;
continue;
} else {
}
break;
}

var argseq__6154__auto__ = ((((0) < args__6153__auto__.length))?(new cljs.core.IndexedSeq(args__6153__auto__.slice((0)),(0))):null);
return javelin.core.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(argseq__6154__auto__);
});

javelin.core.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (cells){
var olds = (function (){var G__13107 = cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cells),cljs.core.cst$kw$javelin$core_SLASH_none);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__13107) : cljs.core.atom.call(null,G__13107));
})();
var tag_neq = ((function (olds){
return (function (p1__13101_SHARP_,p2__13102_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(p1__13101_SHARP_,p2__13102_SHARP_),p2__13102_SHARP_],null));
});})(olds))
;
var diff = ((function (olds,tag_neq){
return (function (p1__13104_SHARP_,p2__13103_SHARP_){
return cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.map.cljs$core$IFn$_invoke$arity$3(tag_neq,p1__13104_SHARP_,p2__13103_SHARP_))));
});})(olds,tag_neq))
;
var proc = ((function (olds,tag_neq,diff){
return (function() { 
var G__13111__delegate = function (rest__13105_SHARP_){
var news = diff((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(olds) : cljs.core.deref.call(null,olds)),rest__13105_SHARP_);
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(olds,rest__13105_SHARP_) : cljs.core.reset_BANG_.call(null,olds,rest__13105_SHARP_));

return news;
};
var G__13111 = function (var_args){
var rest__13105_SHARP_ = null;
if (arguments.length > 0) {
var G__13112__i = 0, G__13112__a = new Array(arguments.length -  0);
while (G__13112__i < G__13112__a.length) {G__13112__a[G__13112__i] = arguments[G__13112__i + 0]; ++G__13112__i;}
  rest__13105_SHARP_ = new cljs.core.IndexedSeq(G__13112__a,0);
} 
return G__13111__delegate.call(this,rest__13105_SHARP_);};
G__13111.cljs$lang$maxFixedArity = 0;
G__13111.cljs$lang$applyTo = (function (arglist__13113){
var rest__13105_SHARP_ = cljs.core.seq(arglist__13113);
return G__13111__delegate(rest__13105_SHARP_);
});
G__13111.cljs$core$IFn$_invoke$arity$variadic = G__13111__delegate;
return G__13111;
})()
;})(olds,tag_neq,diff))
;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(javelin.core.formula(proc),cells);
});

javelin.core.alts_BANG_.cljs$lang$maxFixedArity = (0);

javelin.core.alts_BANG_.cljs$lang$applyTo = (function (seq13106){
return javelin.core.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq13106));
});
javelin.core.cell_map = (function javelin$core$cell_map(f,c){
var cseq = javelin.core.formula(cljs.core.seq).call(null,c);
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (cseq){
return (function (p1__13114_SHARP_){
return javelin.core.formula(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(f,javelin.core.safe_nth)).call(null,cseq,p1__13114_SHARP_);
});})(cseq))
,cljs.core.range.cljs$core$IFn$_invoke$arity$2((0),cljs.core.count((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cseq) : cljs.core.deref.call(null,cseq)))));
});
javelin.core.cell_doseq_STAR_ = (function javelin$core$cell_doseq_STAR_(items_seq,f){
var pool_size = javelin.core.cell.cljs$core$IFn$_invoke$arity$1((0));
var cur_count = javelin.core.formula(cljs.core.count).call(null,items_seq);
var ith_item = ((function (pool_size,cur_count){
return (function (p1__13115_SHARP_){
return javelin.core.formula(javelin.core.safe_nth).call(null,items_seq,p1__13115_SHARP_);
});})(pool_size,cur_count))
;
return javelin.core.formula(((function (pool_size,cur_count,ith_item){
return (function (pool_size__$1,cur_count__$1,f__$1,ith_item__$1,reset_pool_size_BANG_){
if((pool_size__$1 < cur_count__$1)){
var seq__13122_13128 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$2(pool_size__$1,cur_count__$1));
var chunk__13123_13129 = null;
var count__13124_13130 = (0);
var i__13125_13131 = (0);
while(true){
if((i__13125_13131 < count__13124_13130)){
var i_13132 = chunk__13123_13129.cljs$core$IIndexed$_nth$arity$2(null,i__13125_13131);
var G__13126_13133 = (ith_item__$1.cljs$core$IFn$_invoke$arity$1 ? ith_item__$1.cljs$core$IFn$_invoke$arity$1(i_13132) : ith_item__$1.call(null,i_13132));
(f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(G__13126_13133) : f__$1.call(null,G__13126_13133));

var G__13134 = seq__13122_13128;
var G__13135 = chunk__13123_13129;
var G__13136 = count__13124_13130;
var G__13137 = (i__13125_13131 + (1));
seq__13122_13128 = G__13134;
chunk__13123_13129 = G__13135;
count__13124_13130 = G__13136;
i__13125_13131 = G__13137;
continue;
} else {
var temp__4425__auto___13138 = cljs.core.seq(seq__13122_13128);
if(temp__4425__auto___13138){
var seq__13122_13139__$1 = temp__4425__auto___13138;
if(cljs.core.chunked_seq_QMARK_(seq__13122_13139__$1)){
var c__5891__auto___13140 = cljs.core.chunk_first(seq__13122_13139__$1);
var G__13141 = cljs.core.chunk_rest(seq__13122_13139__$1);
var G__13142 = c__5891__auto___13140;
var G__13143 = cljs.core.count(c__5891__auto___13140);
var G__13144 = (0);
seq__13122_13128 = G__13141;
chunk__13123_13129 = G__13142;
count__13124_13130 = G__13143;
i__13125_13131 = G__13144;
continue;
} else {
var i_13145 = cljs.core.first(seq__13122_13139__$1);
var G__13127_13146 = (ith_item__$1.cljs$core$IFn$_invoke$arity$1 ? ith_item__$1.cljs$core$IFn$_invoke$arity$1(i_13145) : ith_item__$1.call(null,i_13145));
(f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(G__13127_13146) : f__$1.call(null,G__13127_13146));

var G__13147 = cljs.core.next(seq__13122_13139__$1);
var G__13148 = null;
var G__13149 = (0);
var G__13150 = (0);
seq__13122_13128 = G__13147;
chunk__13123_13129 = G__13148;
count__13124_13130 = G__13149;
i__13125_13131 = G__13150;
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
