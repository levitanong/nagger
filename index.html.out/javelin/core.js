// Compiled by ClojureScript 1.7.122 {}
goog.provide('javelin.core');
goog.require('cljs.core');
goog.require('tailrecursion.priority_map');
javelin.core.Cell;

javelin.core.cell_QMARK_;

javelin.core.cell;

javelin.core.input_QMARK_;

javelin.core.lens_QMARK_;
javelin.core._STAR_tx_STAR_ = null;
javelin.core.last_rank = cljs.core.atom.call(null,(0));
/**
 * Like tree-seq but traversal is breadth-first instead of depth-first.
 */
javelin.core.bf_seq = (function javelin$core$bf_seq(branch_QMARK_,children,root){
var walk = (function javelin$core$bf_seq_$_walk(queue){
var temp__4425__auto__ = cljs.core.peek.call(null,queue);
if(cljs.core.truth_(temp__4425__auto__)){
var node = temp__4425__auto__;
return (new cljs.core.LazySeq(null,((function (node,temp__4425__auto__){
return (function (){
return cljs.core.cons.call(null,node,javelin$core$bf_seq_$_walk.call(null,cljs.core.into.call(null,cljs.core.pop.call(null,queue),(cljs.core.truth_(branch_QMARK_.call(null,node))?children.call(null,node):null))));
});})(node,temp__4425__auto__))
,null,null));
} else {
return null;
}
});
return walk.call(null,cljs.core.conj.call(null,cljs.core.PersistentQueue.EMPTY,root));
});
javelin.core.propagate_STAR_ = (function javelin$core$propagate_STAR_(pri_map){
while(true){
var temp__4425__auto__ = cljs.core.first.call(null,cljs.core.peek.call(null,pri_map));
if(cljs.core.truth_(temp__4425__auto__)){
var next = temp__4425__auto__;
var popq = cljs.core.pop.call(null,pri_map);
var old = next.prev;
var new$ = (function (){var temp__4423__auto__ = next.thunk;
if(cljs.core.truth_(temp__4423__auto__)){
var f = temp__4423__auto__;
return f.call(null);
} else {
return next.state;
}
})();
var diff_QMARK_ = cljs.core.not_EQ_.call(null,new$,old);
if(diff_QMARK_){
next.prev = new$;

cljs.core._notify_watches.call(null,next,old,new$);
} else {
}

var G__8891 = ((!(diff_QMARK_))?popq:cljs.core.reduce.call(null,((function (pri_map,popq,old,new$,diff_QMARK_,next,temp__4425__auto__){
return (function (p1__8889_SHARP_,p2__8890_SHARP_){
return cljs.core.assoc.call(null,p1__8889_SHARP_,p2__8890_SHARP_,p2__8890_SHARP_.rank);
});})(pri_map,popq,old,new$,diff_QMARK_,next,temp__4425__auto__))
,popq,next.sinks));
pri_map = G__8891;
continue;
} else {
return null;
}
break;
}
});
javelin.core.deref_STAR_ = (function javelin$core$deref_STAR_(x){
if(cljs.core.truth_(javelin.core.cell_QMARK_.call(null,x))){
return cljs.core.deref.call(null,x);
} else {
return x;
}
});
javelin.core.next_rank = (function javelin$core$next_rank(){
return cljs.core.swap_BANG_.call(null,javelin.core.last_rank,cljs.core.inc);
});
javelin.core.cell__GT_pm = (function javelin$core$cell__GT_pm(c){
return tailrecursion.priority_map.priority_map.call(null,c,c.rank);
});
javelin.core.add_sync_BANG_ = (function javelin$core$add_sync_BANG_(c){
return cljs.core.swap_BANG_.call(null,javelin.core._STAR_tx_STAR_,cljs.core.assoc,c,c.rank);
});
javelin.core.safe_nth = (function javelin$core$safe_nth(c,i){
try{return cljs.core.nth.call(null,c,i);
}catch (e8893){if((e8893 instanceof Error)){
var _ = e8893;
return null;
} else {
throw e8893;

}
}});
javelin.core.propagate_BANG_ = (function javelin$core$propagate_BANG_(c){
if(cljs.core.truth_(javelin.core._STAR_tx_STAR_)){
var G__8896 = c;
javelin.core.add_sync_BANG_.call(null,G__8896);

return G__8896;
} else {
var G__8897 = c;
javelin.core.propagate_STAR_.call(null,javelin.core.cell__GT_pm.call(null,G__8897));

return G__8897;
}
});
javelin.core.destroy_cell_BANG_ = (function javelin$core$destroy_cell_BANG_(var_args){
var args__6153__auto__ = [];
var len__6146__auto___8906 = arguments.length;
var i__6147__auto___8907 = (0);
while(true){
if((i__6147__auto___8907 < len__6146__auto___8906)){
args__6153__auto__.push((arguments[i__6147__auto___8907]));

var G__8908 = (i__6147__auto___8907 + (1));
i__6147__auto___8907 = G__8908;
continue;
} else {
}
break;
}

var argseq__6154__auto__ = ((((1) < args__6153__auto__.length))?(new cljs.core.IndexedSeq(args__6153__auto__.slice((1)),(0))):null);
return javelin.core.destroy_cell_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6154__auto__);
});

javelin.core.destroy_cell_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (this$,p__8900){
var vec__8901 = p__8900;
var keep_watches_QMARK_ = cljs.core.nth.call(null,vec__8901,(0),null);
var srcs = this$.sources;
this$.sources = cljs.core.PersistentVector.EMPTY;

this$.update = null;

this$.thunk = null;

if(cljs.core.truth_(keep_watches_QMARK_)){
} else {
this$.watches = cljs.core.PersistentArrayMap.EMPTY;
}

var seq__8902 = cljs.core.seq.call(null,srcs);
var chunk__8903 = null;
var count__8904 = (0);
var i__8905 = (0);
while(true){
if((i__8905 < count__8904)){
var src = cljs.core._nth.call(null,chunk__8903,i__8905);
if(cljs.core.truth_(javelin.core.cell_QMARK_.call(null,src))){
src.sinks = cljs.core.disj.call(null,src.sinks,this$);
} else {
}

var G__8909 = seq__8902;
var G__8910 = chunk__8903;
var G__8911 = count__8904;
var G__8912 = (i__8905 + (1));
seq__8902 = G__8909;
chunk__8903 = G__8910;
count__8904 = G__8911;
i__8905 = G__8912;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__8902);
if(temp__4425__auto__){
var seq__8902__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8902__$1)){
var c__5891__auto__ = cljs.core.chunk_first.call(null,seq__8902__$1);
var G__8913 = cljs.core.chunk_rest.call(null,seq__8902__$1);
var G__8914 = c__5891__auto__;
var G__8915 = cljs.core.count.call(null,c__5891__auto__);
var G__8916 = (0);
seq__8902 = G__8913;
chunk__8903 = G__8914;
count__8904 = G__8915;
i__8905 = G__8916;
continue;
} else {
var src = cljs.core.first.call(null,seq__8902__$1);
if(cljs.core.truth_(javelin.core.cell_QMARK_.call(null,src))){
src.sinks = cljs.core.disj.call(null,src.sinks,this$);
} else {
}

var G__8917 = cljs.core.next.call(null,seq__8902__$1);
var G__8918 = null;
var G__8919 = (0);
var G__8920 = (0);
seq__8902 = G__8917;
chunk__8903 = G__8918;
count__8904 = G__8919;
i__8905 = G__8920;
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

javelin.core.destroy_cell_BANG_.cljs$lang$applyTo = (function (seq8898){
var G__8899 = cljs.core.first.call(null,seq8898);
var seq8898__$1 = cljs.core.next.call(null,seq8898);
return javelin.core.destroy_cell_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__8899,seq8898__$1);
});
javelin.core.set_formula_BANG_ = (function javelin$core$set_formula_BANG_(var_args){
var args__6153__auto__ = [];
var len__6146__auto___8939 = arguments.length;
var i__6147__auto___8940 = (0);
while(true){
if((i__6147__auto___8940 < len__6146__auto___8939)){
args__6153__auto__.push((arguments[i__6147__auto___8940]));

var G__8941 = (i__6147__auto___8940 + (1));
i__6147__auto___8940 = G__8941;
continue;
} else {
}
break;
}

var argseq__6154__auto__ = ((((1) < args__6153__auto__.length))?(new cljs.core.IndexedSeq(args__6153__auto__.slice((1)),(0))):null);
return javelin.core.set_formula_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6154__auto__);
});

javelin.core.set_formula_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (this$,p__8925){
var vec__8926 = p__8925;
var f = cljs.core.nth.call(null,vec__8926,(0),null);
var sources = cljs.core.nth.call(null,vec__8926,(1),null);
javelin.core.destroy_cell_BANG_.call(null,this$,true);

if(cljs.core.truth_(f)){
this$.sources = cljs.core.conj.call(null,cljs.core.vec.call(null,sources),f);

var seq__8927_8942 = cljs.core.seq.call(null,this$.sources);
var chunk__8928_8943 = null;
var count__8929_8944 = (0);
var i__8930_8945 = (0);
while(true){
if((i__8930_8945 < count__8929_8944)){
var source_8946 = cljs.core._nth.call(null,chunk__8928_8943,i__8930_8945);
if(cljs.core.truth_(javelin.core.cell_QMARK_.call(null,source_8946))){
source_8946.sinks = cljs.core.conj.call(null,source_8946.sinks,this$);

if((source_8946.rank > this$.rank)){
var seq__8931_8947 = cljs.core.seq.call(null,javelin.core.bf_seq.call(null,cljs.core.identity,((function (seq__8927_8942,chunk__8928_8943,count__8929_8944,i__8930_8945,source_8946,vec__8926,f,sources){
return (function (p1__8921_SHARP_){
return p1__8921_SHARP_.sinks;
});})(seq__8927_8942,chunk__8928_8943,count__8929_8944,i__8930_8945,source_8946,vec__8926,f,sources))
,source_8946));
var chunk__8932_8948 = null;
var count__8933_8949 = (0);
var i__8934_8950 = (0);
while(true){
if((i__8934_8950 < count__8933_8949)){
var dep_8951 = cljs.core._nth.call(null,chunk__8932_8948,i__8934_8950);
dep_8951.rank = javelin.core.next_rank.call(null);

var G__8952 = seq__8931_8947;
var G__8953 = chunk__8932_8948;
var G__8954 = count__8933_8949;
var G__8955 = (i__8934_8950 + (1));
seq__8931_8947 = G__8952;
chunk__8932_8948 = G__8953;
count__8933_8949 = G__8954;
i__8934_8950 = G__8955;
continue;
} else {
var temp__4425__auto___8956 = cljs.core.seq.call(null,seq__8931_8947);
if(temp__4425__auto___8956){
var seq__8931_8957__$1 = temp__4425__auto___8956;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8931_8957__$1)){
var c__5891__auto___8958 = cljs.core.chunk_first.call(null,seq__8931_8957__$1);
var G__8959 = cljs.core.chunk_rest.call(null,seq__8931_8957__$1);
var G__8960 = c__5891__auto___8958;
var G__8961 = cljs.core.count.call(null,c__5891__auto___8958);
var G__8962 = (0);
seq__8931_8947 = G__8959;
chunk__8932_8948 = G__8960;
count__8933_8949 = G__8961;
i__8934_8950 = G__8962;
continue;
} else {
var dep_8963 = cljs.core.first.call(null,seq__8931_8957__$1);
dep_8963.rank = javelin.core.next_rank.call(null);

var G__8964 = cljs.core.next.call(null,seq__8931_8957__$1);
var G__8965 = null;
var G__8966 = (0);
var G__8967 = (0);
seq__8931_8947 = G__8964;
chunk__8932_8948 = G__8965;
count__8933_8949 = G__8966;
i__8934_8950 = G__8967;
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

var G__8968 = seq__8927_8942;
var G__8969 = chunk__8928_8943;
var G__8970 = count__8929_8944;
var G__8971 = (i__8930_8945 + (1));
seq__8927_8942 = G__8968;
chunk__8928_8943 = G__8969;
count__8929_8944 = G__8970;
i__8930_8945 = G__8971;
continue;
} else {
var temp__4425__auto___8972 = cljs.core.seq.call(null,seq__8927_8942);
if(temp__4425__auto___8972){
var seq__8927_8973__$1 = temp__4425__auto___8972;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8927_8973__$1)){
var c__5891__auto___8974 = cljs.core.chunk_first.call(null,seq__8927_8973__$1);
var G__8975 = cljs.core.chunk_rest.call(null,seq__8927_8973__$1);
var G__8976 = c__5891__auto___8974;
var G__8977 = cljs.core.count.call(null,c__5891__auto___8974);
var G__8978 = (0);
seq__8927_8942 = G__8975;
chunk__8928_8943 = G__8976;
count__8929_8944 = G__8977;
i__8930_8945 = G__8978;
continue;
} else {
var source_8979 = cljs.core.first.call(null,seq__8927_8973__$1);
if(cljs.core.truth_(javelin.core.cell_QMARK_.call(null,source_8979))){
source_8979.sinks = cljs.core.conj.call(null,source_8979.sinks,this$);

if((source_8979.rank > this$.rank)){
var seq__8935_8980 = cljs.core.seq.call(null,javelin.core.bf_seq.call(null,cljs.core.identity,((function (seq__8927_8942,chunk__8928_8943,count__8929_8944,i__8930_8945,source_8979,seq__8927_8973__$1,temp__4425__auto___8972,vec__8926,f,sources){
return (function (p1__8921_SHARP_){
return p1__8921_SHARP_.sinks;
});})(seq__8927_8942,chunk__8928_8943,count__8929_8944,i__8930_8945,source_8979,seq__8927_8973__$1,temp__4425__auto___8972,vec__8926,f,sources))
,source_8979));
var chunk__8936_8981 = null;
var count__8937_8982 = (0);
var i__8938_8983 = (0);
while(true){
if((i__8938_8983 < count__8937_8982)){
var dep_8984 = cljs.core._nth.call(null,chunk__8936_8981,i__8938_8983);
dep_8984.rank = javelin.core.next_rank.call(null);

var G__8985 = seq__8935_8980;
var G__8986 = chunk__8936_8981;
var G__8987 = count__8937_8982;
var G__8988 = (i__8938_8983 + (1));
seq__8935_8980 = G__8985;
chunk__8936_8981 = G__8986;
count__8937_8982 = G__8987;
i__8938_8983 = G__8988;
continue;
} else {
var temp__4425__auto___8989__$1 = cljs.core.seq.call(null,seq__8935_8980);
if(temp__4425__auto___8989__$1){
var seq__8935_8990__$1 = temp__4425__auto___8989__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8935_8990__$1)){
var c__5891__auto___8991 = cljs.core.chunk_first.call(null,seq__8935_8990__$1);
var G__8992 = cljs.core.chunk_rest.call(null,seq__8935_8990__$1);
var G__8993 = c__5891__auto___8991;
var G__8994 = cljs.core.count.call(null,c__5891__auto___8991);
var G__8995 = (0);
seq__8935_8980 = G__8992;
chunk__8936_8981 = G__8993;
count__8937_8982 = G__8994;
i__8938_8983 = G__8995;
continue;
} else {
var dep_8996 = cljs.core.first.call(null,seq__8935_8990__$1);
dep_8996.rank = javelin.core.next_rank.call(null);

var G__8997 = cljs.core.next.call(null,seq__8935_8990__$1);
var G__8998 = null;
var G__8999 = (0);
var G__9000 = (0);
seq__8935_8980 = G__8997;
chunk__8936_8981 = G__8998;
count__8937_8982 = G__8999;
i__8938_8983 = G__9000;
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

var G__9001 = cljs.core.next.call(null,seq__8927_8973__$1);
var G__9002 = null;
var G__9003 = (0);
var G__9004 = (0);
seq__8927_8942 = G__9001;
chunk__8928_8943 = G__9002;
count__8929_8944 = G__9003;
i__8930_8945 = G__9004;
continue;
}
} else {
}
}
break;
}

var compute_9005 = ((function (vec__8926,f,sources){
return (function (p1__8922_SHARP_){
return cljs.core.apply.call(null,javelin.core.deref_STAR_.call(null,cljs.core.peek.call(null,p1__8922_SHARP_)),cljs.core.map.call(null,javelin.core.deref_STAR_,cljs.core.pop.call(null,p1__8922_SHARP_)));
});})(vec__8926,f,sources))
;
this$.thunk = ((function (compute_9005,vec__8926,f,sources){
return (function (){
return this$.state = compute_9005.call(null,this$.sources);
});})(compute_9005,vec__8926,f,sources))
;
} else {
}

return javelin.core.propagate_BANG_.call(null,this$);
});

javelin.core.set_formula_BANG_.cljs$lang$maxFixedArity = (1);

javelin.core.set_formula_BANG_.cljs$lang$applyTo = (function (seq8923){
var G__8924 = cljs.core.first.call(null,seq8923);
var seq8923__$1 = cljs.core.next.call(null,seq8923);
return javelin.core.set_formula_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__8924,seq8923__$1);
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
return cljs.core.write_all.call(null,w,"#<Cell: ",cljs.core.pr_str.call(null,self__.state),">");
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
if(cljs.core.truth_(javelin.core.lens_QMARK_.call(null,this$__$1))){
this$__$1.update.call(null,x);
} else {
if(cljs.core.truth_(javelin.core.input_QMARK_.call(null,this$__$1))){
this$__$1.state = x;

javelin.core.propagate_BANG_.call(null,this$__$1);
} else {
throw (new Error("can't swap! or reset! formula cell"));

}
}

return this$__$1.state;
});

javelin.core.Cell.prototype.cljs$core$ISwap$_swap_BANG_$arity$2 = (function (this$,f){
var self__ = this;
var this$__$1 = this;
return cljs.core.reset_BANG_.call(null,this$__$1,f.call(null,this$__$1.state));
});

javelin.core.Cell.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (this$,f,a){
var self__ = this;
var this$__$1 = this;
return cljs.core.reset_BANG_.call(null,this$__$1,f.call(null,this$__$1.state,a));
});

javelin.core.Cell.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (this$,f,a,b){
var self__ = this;
var this$__$1 = this;
return cljs.core.reset_BANG_.call(null,this$__$1,f.call(null,this$__$1.state,a,b));
});

javelin.core.Cell.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (this$,f,a,b,xs){
var self__ = this;
var this$__$1 = this;
return cljs.core.reset_BANG_.call(null,this$__$1,cljs.core.apply.call(null,f,this$__$1.state,a,b,xs));
});

javelin.core.Cell.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,o,n){
var self__ = this;
var this$__$1 = this;
var seq__9006 = cljs.core.seq.call(null,self__.watches);
var chunk__9007 = null;
var count__9008 = (0);
var i__9009 = (0);
while(true){
if((i__9009 < count__9008)){
var vec__9010 = cljs.core._nth.call(null,chunk__9007,i__9009);
var key = cljs.core.nth.call(null,vec__9010,(0),null);
var f = cljs.core.nth.call(null,vec__9010,(1),null);
f.call(null,key,this$__$1,o,n);

var G__9012 = seq__9006;
var G__9013 = chunk__9007;
var G__9014 = count__9008;
var G__9015 = (i__9009 + (1));
seq__9006 = G__9012;
chunk__9007 = G__9013;
count__9008 = G__9014;
i__9009 = G__9015;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__9006);
if(temp__4425__auto__){
var seq__9006__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9006__$1)){
var c__5891__auto__ = cljs.core.chunk_first.call(null,seq__9006__$1);
var G__9016 = cljs.core.chunk_rest.call(null,seq__9006__$1);
var G__9017 = c__5891__auto__;
var G__9018 = cljs.core.count.call(null,c__5891__auto__);
var G__9019 = (0);
seq__9006 = G__9016;
chunk__9007 = G__9017;
count__9008 = G__9018;
i__9009 = G__9019;
continue;
} else {
var vec__9011 = cljs.core.first.call(null,seq__9006__$1);
var key = cljs.core.nth.call(null,vec__9011,(0),null);
var f = cljs.core.nth.call(null,vec__9011,(1),null);
f.call(null,key,this$__$1,o,n);

var G__9020 = cljs.core.next.call(null,seq__9006__$1);
var G__9021 = null;
var G__9022 = (0);
var G__9023 = (0);
seq__9006 = G__9020;
chunk__9007 = G__9021;
count__9008 = G__9022;
i__9009 = G__9023;
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
return this$__$1.watches = cljs.core.assoc.call(null,self__.watches,k,f);
});

javelin.core.Cell.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,k){
var self__ = this;
var this$__$1 = this;
return this$__$1.watches = cljs.core.dissoc.call(null,self__.watches,k);
});

javelin.core.Cell.getBasis = (function (){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta","meta",-1154898805,null),new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Symbol(null,"rank","rank",-66196975,null),new cljs.core.Symbol(null,"prev","prev",43462301,null),new cljs.core.Symbol(null,"sources","sources",1319365103,null),new cljs.core.Symbol(null,"sinks","sinks",-1243609492,null),new cljs.core.Symbol(null,"thunk","thunk",74255732,null),new cljs.core.Symbol(null,"watches","watches",1367433992,null),new cljs.core.Symbol(null,"update","update",-1608859373,null)], null);
});

javelin.core.Cell.cljs$lang$type = true;

javelin.core.Cell.cljs$lang$ctorStr = "javelin.core/Cell";

javelin.core.Cell.cljs$lang$ctorPrWriter = (function (this__5686__auto__,writer__5687__auto__,opt__5688__auto__){
return cljs.core._write.call(null,writer__5687__auto__,"javelin.core/Cell");
});

javelin.core.__GT_Cell = (function javelin$core$__GT_Cell(meta,state,rank,prev,sources,sinks,thunk,watches,update){
return (new javelin.core.Cell(meta,state,rank,prev,sources,sinks,thunk,watches,update));
});

javelin.core.cell_QMARK_ = (function javelin$core$cell_QMARK_(c){
if(cljs.core._EQ_.call(null,cljs.core.type.call(null,c),javelin.core.Cell)){
return c;
} else {
return null;
}
});
javelin.core.formula_QMARK_ = (function javelin$core$formula_QMARK_(c){
if(cljs.core.truth_((function (){var and__5076__auto__ = javelin.core.cell_QMARK_.call(null,c);
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
if(cljs.core.truth_((function (){var and__5076__auto__ = javelin.core.cell_QMARK_.call(null,c);
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
if(cljs.core.truth_((function (){var and__5076__auto__ = javelin.core.cell_QMARK_.call(null,c);
if(cljs.core.truth_(and__5076__auto__)){
return cljs.core.not.call(null,javelin.core.formula_QMARK_.call(null,c));
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

return javelin.core.set_formula_BANG_.call(null,c);
});
javelin.core.formula = (function javelin$core$formula(f){
return (function() { 
var G__9024__delegate = function (sources){
return javelin.core.set_formula_BANG_.call(null,javelin.core.cell.call(null,new cljs.core.Keyword("javelin.core","none","javelin.core/none",1150337088)),f,sources);
};
var G__9024 = function (var_args){
var sources = null;
if (arguments.length > 0) {
var G__9025__i = 0, G__9025__a = new Array(arguments.length -  0);
while (G__9025__i < G__9025__a.length) {G__9025__a[G__9025__i] = arguments[G__9025__i + 0]; ++G__9025__i;}
  sources = new cljs.core.IndexedSeq(G__9025__a,0);
} 
return G__9024__delegate.call(this,sources);};
G__9024.cljs$lang$maxFixedArity = 0;
G__9024.cljs$lang$applyTo = (function (arglist__9026){
var sources = cljs.core.seq(arglist__9026);
return G__9024__delegate(sources);
});
G__9024.cljs$core$IFn$_invoke$arity$variadic = G__9024__delegate;
return G__9024;
})()
;
});
javelin.core.lens = (function javelin$core$lens(c,f){
var c__$1 = javelin.core.formula.call(null,cljs.core.identity).call(null,c);
c__$1.update = f;

return c__$1;
});
javelin.core.cell = (function javelin$core$cell(var_args){
var args9027 = [];
var len__6146__auto___9035 = arguments.length;
var i__6147__auto___9036 = (0);
while(true){
if((i__6147__auto___9036 < len__6146__auto___9035)){
args9027.push((arguments[i__6147__auto___9036]));

var G__9037 = (i__6147__auto___9036 + (1));
i__6147__auto___9036 = G__9037;
continue;
} else {
}
break;
}

var G__9031 = args9027.length;
switch (G__9031) {
case 1:
return javelin.core.cell.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
var argseq__6165__auto__ = (new cljs.core.IndexedSeq(args9027.slice((1)),(0)));
return javelin.core.cell.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6165__auto__);

}
});

javelin.core.cell.cljs$core$IFn$_invoke$arity$1 = (function (x){
return javelin.core.set_formula_BANG_.call(null,(new javelin.core.Cell(null,x,javelin.core.next_rank.call(null),x,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentHashSet.EMPTY,null,cljs.core.PersistentArrayMap.EMPTY,null)));
});

javelin.core.cell.cljs$core$IFn$_invoke$arity$variadic = (function (x,p__9032){
var map__9033 = p__9032;
var map__9033__$1 = ((((!((map__9033 == null)))?((((map__9033.cljs$lang$protocol_mask$partition0$ & (64))) || (map__9033.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9033):map__9033);
var meta = cljs.core.get.call(null,map__9033__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
return javelin.core.set_formula_BANG_.call(null,(new javelin.core.Cell(meta,x,javelin.core.next_rank.call(null),x,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentHashSet.EMPTY,null,cljs.core.PersistentArrayMap.EMPTY,null)));
});

javelin.core.cell.cljs$lang$applyTo = (function (seq9028){
var G__9029 = cljs.core.first.call(null,seq9028);
var seq9028__$1 = cljs.core.next.call(null,seq9028);
return javelin.core.cell.cljs$core$IFn$_invoke$arity$variadic(G__9029,seq9028__$1);
});

javelin.core.cell.cljs$lang$maxFixedArity = (1);
javelin.core.lift = javelin.core.formula;
javelin.core.dosync_STAR_ = (function javelin$core$dosync_STAR_(thunk){
var bind = (function (p1__9039_SHARP_){
var _STAR_tx_STAR_9042 = javelin.core._STAR_tx_STAR_;
javelin.core._STAR_tx_STAR_ = cljs.core.atom.call(null,tailrecursion.priority_map.priority_map.call(null));

try{return p1__9039_SHARP_.call(null);
}finally {javelin.core._STAR_tx_STAR_ = _STAR_tx_STAR_9042;
}});
var prop = ((function (bind){
return (function (){
var tx = cljs.core.deref.call(null,javelin.core._STAR_tx_STAR_);
var _STAR_tx_STAR_9043 = javelin.core._STAR_tx_STAR_;
javelin.core._STAR_tx_STAR_ = null;

try{return javelin.core.propagate_STAR_.call(null,tx);
}finally {javelin.core._STAR_tx_STAR_ = _STAR_tx_STAR_9043;
}});})(bind))
;
if(cljs.core.truth_(javelin.core._STAR_tx_STAR_)){
return thunk.call(null);
} else {
return bind.call(null,((function (bind,prop){
return (function (){
thunk.call(null);

return prop.call(null);
});})(bind,prop))
);
}
});
javelin.core.alts_BANG_ = (function javelin$core$alts_BANG_(var_args){
var args__6153__auto__ = [];
var len__6146__auto___9050 = arguments.length;
var i__6147__auto___9051 = (0);
while(true){
if((i__6147__auto___9051 < len__6146__auto___9050)){
args__6153__auto__.push((arguments[i__6147__auto___9051]));

var G__9052 = (i__6147__auto___9051 + (1));
i__6147__auto___9051 = G__9052;
continue;
} else {
}
break;
}

var argseq__6154__auto__ = ((((0) < args__6153__auto__.length))?(new cljs.core.IndexedSeq(args__6153__auto__.slice((0)),(0))):null);
return javelin.core.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(argseq__6154__auto__);
});

javelin.core.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (cells){
var olds = cljs.core.atom.call(null,cljs.core.repeat.call(null,cljs.core.count.call(null,cells),new cljs.core.Keyword("javelin.core","none","javelin.core/none",1150337088)));
var tag_neq = ((function (olds){
return (function (p1__9044_SHARP_,p2__9045_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.not_EQ_.call(null,p1__9044_SHARP_,p2__9045_SHARP_),p2__9045_SHARP_],null));
});})(olds))
;
var diff = ((function (olds,tag_neq){
return (function (p1__9047_SHARP_,p2__9046_SHARP_){
return cljs.core.distinct.call(null,cljs.core.map.call(null,cljs.core.second,cljs.core.filter.call(null,cljs.core.first,cljs.core.map.call(null,tag_neq,p1__9047_SHARP_,p2__9046_SHARP_))));
});})(olds,tag_neq))
;
var proc = ((function (olds,tag_neq,diff){
return (function() { 
var G__9053__delegate = function (rest__9048_SHARP_){
var news = diff.call(null,cljs.core.deref.call(null,olds),rest__9048_SHARP_);
cljs.core.reset_BANG_.call(null,olds,rest__9048_SHARP_);

return news;
};
var G__9053 = function (var_args){
var rest__9048_SHARP_ = null;
if (arguments.length > 0) {
var G__9054__i = 0, G__9054__a = new Array(arguments.length -  0);
while (G__9054__i < G__9054__a.length) {G__9054__a[G__9054__i] = arguments[G__9054__i + 0]; ++G__9054__i;}
  rest__9048_SHARP_ = new cljs.core.IndexedSeq(G__9054__a,0);
} 
return G__9053__delegate.call(this,rest__9048_SHARP_);};
G__9053.cljs$lang$maxFixedArity = 0;
G__9053.cljs$lang$applyTo = (function (arglist__9055){
var rest__9048_SHARP_ = cljs.core.seq(arglist__9055);
return G__9053__delegate(rest__9048_SHARP_);
});
G__9053.cljs$core$IFn$_invoke$arity$variadic = G__9053__delegate;
return G__9053;
})()
;})(olds,tag_neq,diff))
;
return cljs.core.apply.call(null,javelin.core.formula.call(null,proc),cells);
});

javelin.core.alts_BANG_.cljs$lang$maxFixedArity = (0);

javelin.core.alts_BANG_.cljs$lang$applyTo = (function (seq9049){
return javelin.core.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9049));
});
javelin.core.cell_map = (function javelin$core$cell_map(f,c){
var cseq = javelin.core.formula.call(null,cljs.core.seq).call(null,c);
return cljs.core.map.call(null,((function (cseq){
return (function (p1__9056_SHARP_){
return javelin.core.formula.call(null,cljs.core.comp.call(null,f,javelin.core.safe_nth)).call(null,cseq,p1__9056_SHARP_);
});})(cseq))
,cljs.core.range.call(null,(0),cljs.core.count.call(null,cljs.core.deref.call(null,cseq))));
});
javelin.core.cell_doseq_STAR_ = (function javelin$core$cell_doseq_STAR_(items_seq,f){
var pool_size = javelin.core.cell.call(null,(0));
var cur_count = javelin.core.formula.call(null,cljs.core.count).call(null,items_seq);
var ith_item = ((function (pool_size,cur_count){
return (function (p1__9057_SHARP_){
return javelin.core.formula.call(null,javelin.core.safe_nth).call(null,items_seq,p1__9057_SHARP_);
});})(pool_size,cur_count))
;
return javelin.core.formula.call(null,((function (pool_size,cur_count,ith_item){
return (function (pool_size__$1,cur_count__$1,f__$1,ith_item__$1,reset_pool_size_BANG_){
if((pool_size__$1 < cur_count__$1)){
var seq__9062_9066 = cljs.core.seq.call(null,cljs.core.range.call(null,pool_size__$1,cur_count__$1));
var chunk__9063_9067 = null;
var count__9064_9068 = (0);
var i__9065_9069 = (0);
while(true){
if((i__9065_9069 < count__9064_9068)){
var i_9070 = cljs.core._nth.call(null,chunk__9063_9067,i__9065_9069);
f__$1.call(null,ith_item__$1.call(null,i_9070));

var G__9071 = seq__9062_9066;
var G__9072 = chunk__9063_9067;
var G__9073 = count__9064_9068;
var G__9074 = (i__9065_9069 + (1));
seq__9062_9066 = G__9071;
chunk__9063_9067 = G__9072;
count__9064_9068 = G__9073;
i__9065_9069 = G__9074;
continue;
} else {
var temp__4425__auto___9075 = cljs.core.seq.call(null,seq__9062_9066);
if(temp__4425__auto___9075){
var seq__9062_9076__$1 = temp__4425__auto___9075;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9062_9076__$1)){
var c__5891__auto___9077 = cljs.core.chunk_first.call(null,seq__9062_9076__$1);
var G__9078 = cljs.core.chunk_rest.call(null,seq__9062_9076__$1);
var G__9079 = c__5891__auto___9077;
var G__9080 = cljs.core.count.call(null,c__5891__auto___9077);
var G__9081 = (0);
seq__9062_9066 = G__9078;
chunk__9063_9067 = G__9079;
count__9064_9068 = G__9080;
i__9065_9069 = G__9081;
continue;
} else {
var i_9082 = cljs.core.first.call(null,seq__9062_9076__$1);
f__$1.call(null,ith_item__$1.call(null,i_9082));

var G__9083 = cljs.core.next.call(null,seq__9062_9076__$1);
var G__9084 = null;
var G__9085 = (0);
var G__9086 = (0);
seq__9062_9066 = G__9083;
chunk__9063_9067 = G__9084;
count__9064_9068 = G__9085;
i__9065_9069 = G__9086;
continue;
}
} else {
}
}
break;
}

return reset_pool_size_BANG_.call(null,cur_count__$1);
} else {
return null;
}
});})(pool_size,cur_count,ith_item))
).call(null,pool_size,cur_count,f,ith_item,cljs.core.partial.call(null,cljs.core.reset_BANG_,pool_size));
});

//# sourceMappingURL=core.js.map