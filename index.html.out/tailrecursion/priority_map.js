// Compiled by ClojureScript 1.7.122 {:static-fns true, :optimize-constants true}
goog.provide('tailrecursion.priority_map');
goog.require('cljs.core');
goog.require('cljs.core');
goog.require('cljs.reader');

/**
* @constructor
 * @implements {cljs.core.IReversible}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.IEmptyableCollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISorted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IStack}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
tailrecursion.priority_map.PersistentPriorityMap = (function (priority__GT_set_of_items,item__GT_priority,meta,__hash){
this.priority__GT_set_of_items = priority__GT_set_of_items;
this.item__GT_priority = item__GT_priority;
this.meta = meta;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2565220111;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this$,item){
var self__ = this;
var this$__$1 = this;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(self__.item__GT_priority,item);
});

tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,item,not_found){
var self__ = this;
var coll__$1 = this;
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.item__GT_priority,item,not_found);
});

tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
var self__ = this;
var coll__$1 = this;
var pr_pair = ((function (coll__$1){
return (function (keyval){
return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,""," ","",opts,keyval);
});})(coll__$1))
;
return cljs.core.pr_sequential_writer(writer,pr_pair,"#tailrecursion.priority-map {",", ","}",opts,coll__$1);
});

tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.meta;
});

tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.count(self__.item__GT_priority);
});

tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IStack$_peek$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if((cljs.core.count(self__.item__GT_priority) === (0))){
return null;
} else {
var f = cljs.core.first(self__.priority__GT_set_of_items);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(cljs.core.val(f)),cljs.core.key(f)], null);
}
});

tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IStack$_pop$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if((cljs.core.count(self__.item__GT_priority) === (0))){
throw (new Error("Can't pop empty priority map"));
} else {
var f = cljs.core.first(self__.priority__GT_set_of_items);
var item_set = cljs.core.val(f);
var item = cljs.core.first(item_set);
var priority = cljs.core.key(f);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(item_set),(1))){
return (new tailrecursion.priority_map.PersistentPriorityMap(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.priority__GT_set_of_items,priority),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.item__GT_priority,item),self__.meta,null));
} else {
return (new tailrecursion.priority_map.PersistentPriorityMap(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.priority__GT_set_of_items,priority,cljs.core.disj.cljs$core$IFn$_invoke$arity$2(item_set,item)),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.item__GT_priority,item),self__.meta,null));
}
}
});

tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core.seq((function (){var iter__5860__auto__ = ((function (coll__$1){
return (function tailrecursion$priority_map$iter__13154(s__13155){
return (new cljs.core.LazySeq(null,((function (coll__$1){
return (function (){
var s__13155__$1 = s__13155;
while(true){
var temp__4425__auto__ = cljs.core.seq(s__13155__$1);
if(temp__4425__auto__){
var xs__4977__auto__ = temp__4425__auto__;
var vec__13164 = cljs.core.first(xs__4977__auto__);
var priority = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13164,(0),null);
var item_set = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13164,(1),null);
var iterys__5856__auto__ = ((function (s__13155__$1,vec__13164,priority,item_set,xs__4977__auto__,temp__4425__auto__,coll__$1){
return (function tailrecursion$priority_map$iter__13154_$_iter__13156(s__13157){
return (new cljs.core.LazySeq(null,((function (s__13155__$1,vec__13164,priority,item_set,xs__4977__auto__,temp__4425__auto__,coll__$1){
return (function (){
var s__13157__$1 = s__13157;
while(true){
var temp__4425__auto____$1 = cljs.core.seq(s__13157__$1);
if(temp__4425__auto____$1){
var s__13157__$2 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__13157__$2)){
var c__5858__auto__ = cljs.core.chunk_first(s__13157__$2);
var size__5859__auto__ = cljs.core.count(c__5858__auto__);
var b__13159 = cljs.core.chunk_buffer(size__5859__auto__);
if((function (){var i__13158 = (0);
while(true){
if((i__13158 < size__5859__auto__)){
var item = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__5858__auto__,i__13158);
cljs.core.chunk_append(b__13159,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,priority], null));

var G__13193 = (i__13158 + (1));
i__13158 = G__13193;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13159),tailrecursion$priority_map$iter__13154_$_iter__13156(cljs.core.chunk_rest(s__13157__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13159),null);
}
} else {
var item = cljs.core.first(s__13157__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,priority], null),tailrecursion$priority_map$iter__13154_$_iter__13156(cljs.core.rest(s__13157__$2)));
}
} else {
return null;
}
break;
}
});})(s__13155__$1,vec__13164,priority,item_set,xs__4977__auto__,temp__4425__auto__,coll__$1))
,null,null));
});})(s__13155__$1,vec__13164,priority,item_set,xs__4977__auto__,temp__4425__auto__,coll__$1))
;
var fs__5857__auto__ = cljs.core.seq(iterys__5856__auto__(item_set));
if(fs__5857__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5857__auto__,tailrecursion$priority_map$iter__13154(cljs.core.rest(s__13155__$1)));
} else {
var G__13194 = cljs.core.rest(s__13155__$1);
s__13155__$1 = G__13194;
continue;
}
} else {
return null;
}
break;
}
});})(coll__$1))
,null,null));
});})(coll__$1))
;
return iter__5860__auto__(cljs.core.rseq(self__.priority__GT_set_of_items));
})());
});

tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var h__5523__auto__ = self__.__hash;
if(!((h__5523__auto__ == null))){
return h__5523__auto__;
} else {
var h__5523__auto____$1 = cljs.core.hash_imap(this$__$1);
self__.__hash = h__5523__auto____$1;

return h__5523__auto____$1;
}
});

tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var self__ = this;
var this$__$1 = this;
return cljs.core._equiv(self__.item__GT_priority,other);
});

tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.with_meta(tailrecursion.priority_map.PersistentPriorityMap.EMPTY,self__.meta);
});

tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this$,item){
var self__ = this;
var this$__$1 = this;
var priority = (self__.item__GT_priority.cljs$core$IFn$_invoke$arity$2 ? self__.item__GT_priority.cljs$core$IFn$_invoke$arity$2(item,cljs.core.cst$kw$tailrecursion$priority_DASH_map_SLASH_not_DASH_found) : self__.item__GT_priority.call(null,item,cljs.core.cst$kw$tailrecursion$priority_DASH_map_SLASH_not_DASH_found));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(priority,cljs.core.cst$kw$tailrecursion$priority_DASH_map_SLASH_not_DASH_found)){
return this$__$1;
} else {
var item_set = (self__.priority__GT_set_of_items.cljs$core$IFn$_invoke$arity$1 ? self__.priority__GT_set_of_items.cljs$core$IFn$_invoke$arity$1(priority) : self__.priority__GT_set_of_items.call(null,priority));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(item_set),(1))){
return (new tailrecursion.priority_map.PersistentPriorityMap(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.priority__GT_set_of_items,priority),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.item__GT_priority,item),self__.meta,null));
} else {
return (new tailrecursion.priority_map.PersistentPriorityMap(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.priority__GT_set_of_items,priority,cljs.core.disj.cljs$core$IFn$_invoke$arity$2(item_set,item)),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.item__GT_priority,item),self__.meta,null));
}
}
});

tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this$,item,priority){
var self__ = this;
var this$__$1 = this;
var temp__4423__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.item__GT_priority,item,null);
if(cljs.core.truth_(temp__4423__auto__)){
var current_priority = temp__4423__auto__;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current_priority,priority)){
return this$__$1;
} else {
var item_set = cljs.core.get.cljs$core$IFn$_invoke$arity$2(self__.priority__GT_set_of_items,current_priority);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(item_set),(1))){
return (new tailrecursion.priority_map.PersistentPriorityMap(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.priority__GT_set_of_items,current_priority),priority,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.priority__GT_set_of_items,priority,cljs.core.PersistentHashSet.EMPTY),item)),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.item__GT_priority,item,priority),self__.meta,null));
} else {
return (new tailrecursion.priority_map.PersistentPriorityMap(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(self__.priority__GT_set_of_items,current_priority,cljs.core.disj.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(self__.priority__GT_set_of_items,current_priority),item),cljs.core.array_seq([priority,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.priority__GT_set_of_items,priority,cljs.core.PersistentHashSet.EMPTY),item)], 0)),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.item__GT_priority,item,priority),self__.meta,null));
}
}
} else {
return (new tailrecursion.priority_map.PersistentPriorityMap(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.priority__GT_set_of_items,priority,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.priority__GT_set_of_items,priority,cljs.core.PersistentHashSet.EMPTY),item)),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.item__GT_priority,item,priority),self__.meta,null));
}
});

tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this$,item){
var self__ = this;
var this$__$1 = this;
return cljs.core.contains_QMARK_(self__.item__GT_priority,item);
});

tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.seq((function (){var iter__5860__auto__ = ((function (this$__$1){
return (function tailrecursion$priority_map$iter__13167(s__13168){
return (new cljs.core.LazySeq(null,((function (this$__$1){
return (function (){
var s__13168__$1 = s__13168;
while(true){
var temp__4425__auto__ = cljs.core.seq(s__13168__$1);
if(temp__4425__auto__){
var xs__4977__auto__ = temp__4425__auto__;
var vec__13177 = cljs.core.first(xs__4977__auto__);
var priority = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13177,(0),null);
var item_set = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13177,(1),null);
var iterys__5856__auto__ = ((function (s__13168__$1,vec__13177,priority,item_set,xs__4977__auto__,temp__4425__auto__,this$__$1){
return (function tailrecursion$priority_map$iter__13167_$_iter__13169(s__13170){
return (new cljs.core.LazySeq(null,((function (s__13168__$1,vec__13177,priority,item_set,xs__4977__auto__,temp__4425__auto__,this$__$1){
return (function (){
var s__13170__$1 = s__13170;
while(true){
var temp__4425__auto____$1 = cljs.core.seq(s__13170__$1);
if(temp__4425__auto____$1){
var s__13170__$2 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__13170__$2)){
var c__5858__auto__ = cljs.core.chunk_first(s__13170__$2);
var size__5859__auto__ = cljs.core.count(c__5858__auto__);
var b__13172 = cljs.core.chunk_buffer(size__5859__auto__);
if((function (){var i__13171 = (0);
while(true){
if((i__13171 < size__5859__auto__)){
var item = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__5858__auto__,i__13171);
cljs.core.chunk_append(b__13172,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,priority], null));

var G__13195 = (i__13171 + (1));
i__13171 = G__13195;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13172),tailrecursion$priority_map$iter__13167_$_iter__13169(cljs.core.chunk_rest(s__13170__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13172),null);
}
} else {
var item = cljs.core.first(s__13170__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,priority], null),tailrecursion$priority_map$iter__13167_$_iter__13169(cljs.core.rest(s__13170__$2)));
}
} else {
return null;
}
break;
}
});})(s__13168__$1,vec__13177,priority,item_set,xs__4977__auto__,temp__4425__auto__,this$__$1))
,null,null));
});})(s__13168__$1,vec__13177,priority,item_set,xs__4977__auto__,temp__4425__auto__,this$__$1))
;
var fs__5857__auto__ = cljs.core.seq(iterys__5856__auto__(item_set));
if(fs__5857__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5857__auto__,tailrecursion$priority_map$iter__13167(cljs.core.rest(s__13168__$1)));
} else {
var G__13196 = cljs.core.rest(s__13168__$1);
s__13168__$1 = G__13196;
continue;
}
} else {
return null;
}
break;
}
});})(this$__$1))
,null,null));
});})(this$__$1))
;
return iter__5860__auto__(self__.priority__GT_set_of_items);
})());
});

tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this$,meta__$1){
var self__ = this;
var this$__$1 = this;
return (new tailrecursion.priority_map.PersistentPriorityMap(self__.priority__GT_set_of_items,self__.item__GT_priority,meta__$1,self__.__hash));
});

tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this$,entry){
var self__ = this;
var this$__$1 = this;
if(cljs.core.vector_QMARK_(entry)){
return cljs.core._assoc(this$__$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this$__$1,entry);
}
});

tailrecursion.priority_map.PersistentPriorityMap.prototype.call = (function() {
var G__13197 = null;
var G__13197__2 = (function (self__,item){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return this$.cljs$core$ILookup$_lookup$arity$2(null,item);
});
var G__13197__3 = (function (self__,item,not_found){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return this$.cljs$core$ILookup$_lookup$arity$3(null,item,not_found);
});
G__13197 = function(self__,item,not_found){
switch(arguments.length){
case 2:
return G__13197__2.call(this,self__,item);
case 3:
return G__13197__3.call(this,self__,item,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__13197.cljs$core$IFn$_invoke$arity$2 = G__13197__2;
G__13197.cljs$core$IFn$_invoke$arity$3 = G__13197__3;
return G__13197;
})()
;

tailrecursion.priority_map.PersistentPriorityMap.prototype.apply = (function (self__,args13153){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args13153)));
});

tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IFn$_invoke$arity$1 = (function (item){
var self__ = this;
var this$ = this;
return this$.cljs$core$ILookup$_lookup$arity$2(null,item);
});

tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IFn$_invoke$arity$2 = (function (item,not_found){
var self__ = this;
var this$ = this;
return this$.cljs$core$ILookup$_lookup$arity$3(null,item,not_found);
});

tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$ISorted$_sorted_seq$arity$2 = (function (this$,ascending_QMARK_){
var self__ = this;
var this$__$1 = this;
return (cljs.core.truth_(ascending_QMARK_)?cljs.core.seq:cljs.core.rseq).call(null,this$__$1);
});

tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$ISorted$_sorted_seq_from$arity$3 = (function (this$,k,ascending_QMARK_){
var self__ = this;
var this$__$1 = this;
var sets = (cljs.core.truth_(ascending_QMARK_)?cljs.core.subseq.cljs$core$IFn$_invoke$arity$3(self__.priority__GT_set_of_items,cljs.core._GT__EQ_,k):cljs.core.rsubseq.cljs$core$IFn$_invoke$arity$3(self__.priority__GT_set_of_items,cljs.core._LT__EQ_,k));
return cljs.core.seq((function (){var iter__5860__auto__ = ((function (sets,this$__$1){
return (function tailrecursion$priority_map$iter__13180(s__13181){
return (new cljs.core.LazySeq(null,((function (sets,this$__$1){
return (function (){
var s__13181__$1 = s__13181;
while(true){
var temp__4425__auto__ = cljs.core.seq(s__13181__$1);
if(temp__4425__auto__){
var xs__4977__auto__ = temp__4425__auto__;
var vec__13190 = cljs.core.first(xs__4977__auto__);
var priority = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13190,(0),null);
var item_set = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13190,(1),null);
var iterys__5856__auto__ = ((function (s__13181__$1,vec__13190,priority,item_set,xs__4977__auto__,temp__4425__auto__,sets,this$__$1){
return (function tailrecursion$priority_map$iter__13180_$_iter__13182(s__13183){
return (new cljs.core.LazySeq(null,((function (s__13181__$1,vec__13190,priority,item_set,xs__4977__auto__,temp__4425__auto__,sets,this$__$1){
return (function (){
var s__13183__$1 = s__13183;
while(true){
var temp__4425__auto____$1 = cljs.core.seq(s__13183__$1);
if(temp__4425__auto____$1){
var s__13183__$2 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__13183__$2)){
var c__5858__auto__ = cljs.core.chunk_first(s__13183__$2);
var size__5859__auto__ = cljs.core.count(c__5858__auto__);
var b__13185 = cljs.core.chunk_buffer(size__5859__auto__);
if((function (){var i__13184 = (0);
while(true){
if((i__13184 < size__5859__auto__)){
var item = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__5858__auto__,i__13184);
cljs.core.chunk_append(b__13185,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,priority], null));

var G__13198 = (i__13184 + (1));
i__13184 = G__13198;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13185),tailrecursion$priority_map$iter__13180_$_iter__13182(cljs.core.chunk_rest(s__13183__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13185),null);
}
} else {
var item = cljs.core.first(s__13183__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,priority], null),tailrecursion$priority_map$iter__13180_$_iter__13182(cljs.core.rest(s__13183__$2)));
}
} else {
return null;
}
break;
}
});})(s__13181__$1,vec__13190,priority,item_set,xs__4977__auto__,temp__4425__auto__,sets,this$__$1))
,null,null));
});})(s__13181__$1,vec__13190,priority,item_set,xs__4977__auto__,temp__4425__auto__,sets,this$__$1))
;
var fs__5857__auto__ = cljs.core.seq(iterys__5856__auto__(item_set));
if(fs__5857__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5857__auto__,tailrecursion$priority_map$iter__13180(cljs.core.rest(s__13181__$1)));
} else {
var G__13199 = cljs.core.rest(s__13181__$1);
s__13181__$1 = G__13199;
continue;
}
} else {
return null;
}
break;
}
});})(sets,this$__$1))
,null,null));
});})(sets,this$__$1))
;
return iter__5860__auto__(sets);
})());
});

tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$ISorted$_entry_key$arity$2 = (function (this$,entry){
var self__ = this;
var this$__$1 = this;
return cljs.core.val(entry);
});

tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$ISorted$_comparator$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.compare;
});

tailrecursion.priority_map.PersistentPriorityMap.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$priority_DASH__GT_set_DASH_of_DASH_items,cljs.core.cst$sym$item_DASH__GT_priority,cljs.core.cst$sym$meta,cljs.core.with_meta(cljs.core.cst$sym$__hash,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$mutable,true], null))], null);
});

tailrecursion.priority_map.PersistentPriorityMap.cljs$lang$type = true;

tailrecursion.priority_map.PersistentPriorityMap.cljs$lang$ctorStr = "tailrecursion.priority-map/PersistentPriorityMap";

tailrecursion.priority_map.PersistentPriorityMap.cljs$lang$ctorPrWriter = (function (this__5686__auto__,writer__5687__auto__,opt__5688__auto__){
return cljs.core._write(writer__5687__auto__,"tailrecursion.priority-map/PersistentPriorityMap");
});

tailrecursion.priority_map.__GT_PersistentPriorityMap = (function tailrecursion$priority_map$__GT_PersistentPriorityMap(priority__GT_set_of_items,item__GT_priority,meta,__hash){
return (new tailrecursion.priority_map.PersistentPriorityMap(priority__GT_set_of_items,item__GT_priority,meta,__hash));
});

tailrecursion.priority_map.PersistentPriorityMap.EMPTY = (new tailrecursion.priority_map.PersistentPriorityMap(cljs.core.sorted_map(),cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,null));
tailrecursion.priority_map.pm_empty_by = (function tailrecursion$priority_map$pm_empty_by(comparator){
return (new tailrecursion.priority_map.PersistentPriorityMap(cljs.core.sorted_map_by(comparator),cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,null));
});
tailrecursion.priority_map.read_priority_map = (function tailrecursion$priority_map$read_priority_map(elems){
if(cljs.core.map_QMARK_(elems)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(tailrecursion.priority_map.PersistentPriorityMap.EMPTY,elems);
} else {
return cljs.reader.reader_error.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.array_seq(["Priority map literal expects a map for its elements."], 0));
}
});
cljs.reader.register_tag_parser_BANG_("tailrecursion.priority-map",tailrecursion.priority_map.read_priority_map);
/**
 * keyval => key val
 *   Returns a new priority map with supplied mappings.
 */
tailrecursion.priority_map.priority_map = (function tailrecursion$priority_map$priority_map(var_args){
var args__6153__auto__ = [];
var len__6146__auto___13201 = arguments.length;
var i__6147__auto___13202 = (0);
while(true){
if((i__6147__auto___13202 < len__6146__auto___13201)){
args__6153__auto__.push((arguments[i__6147__auto___13202]));

var G__13203 = (i__6147__auto___13202 + (1));
i__6147__auto___13202 = G__13203;
continue;
} else {
}
break;
}

var argseq__6154__auto__ = ((((0) < args__6153__auto__.length))?(new cljs.core.IndexedSeq(args__6153__auto__.slice((0)),(0))):null);
return tailrecursion.priority_map.priority_map.cljs$core$IFn$_invoke$arity$variadic(argseq__6154__auto__);
});

tailrecursion.priority_map.priority_map.cljs$core$IFn$_invoke$arity$variadic = (function (keyvals){
var in$ = cljs.core.seq(keyvals);
var out = tailrecursion.priority_map.PersistentPriorityMap.EMPTY;
while(true){
if(in$){
var G__13204 = cljs.core.nnext(in$);
var G__13205 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(out,cljs.core.first(in$),cljs.core.second(in$));
in$ = G__13204;
out = G__13205;
continue;
} else {
return out;
}
break;
}
});

tailrecursion.priority_map.priority_map.cljs$lang$maxFixedArity = (0);

tailrecursion.priority_map.priority_map.cljs$lang$applyTo = (function (seq13200){
return tailrecursion.priority_map.priority_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq13200));
});
/**
 * keyval => key val
 *   Returns a new priority map with supplied
 *   mappings, using the supplied comparator.
 */
tailrecursion.priority_map.priority_map_by = (function tailrecursion$priority_map$priority_map_by(var_args){
var args__6153__auto__ = [];
var len__6146__auto___13208 = arguments.length;
var i__6147__auto___13209 = (0);
while(true){
if((i__6147__auto___13209 < len__6146__auto___13208)){
args__6153__auto__.push((arguments[i__6147__auto___13209]));

var G__13210 = (i__6147__auto___13209 + (1));
i__6147__auto___13209 = G__13210;
continue;
} else {
}
break;
}

var argseq__6154__auto__ = ((((1) < args__6153__auto__.length))?(new cljs.core.IndexedSeq(args__6153__auto__.slice((1)),(0))):null);
return tailrecursion.priority_map.priority_map_by.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6154__auto__);
});

tailrecursion.priority_map.priority_map_by.cljs$core$IFn$_invoke$arity$variadic = (function (comparator,keyvals){
var in$ = cljs.core.seq(keyvals);
var out = tailrecursion.priority_map.pm_empty_by(comparator);
while(true){
if(in$){
var G__13211 = cljs.core.nnext(in$);
var G__13212 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(out,cljs.core.first(in$),cljs.core.second(in$));
in$ = G__13211;
out = G__13212;
continue;
} else {
return out;
}
break;
}
});

tailrecursion.priority_map.priority_map_by.cljs$lang$maxFixedArity = (1);

tailrecursion.priority_map.priority_map_by.cljs$lang$applyTo = (function (seq13206){
var G__13207 = cljs.core.first(seq13206);
var seq13206__$1 = cljs.core.next(seq13206);
return tailrecursion.priority_map.priority_map_by.cljs$core$IFn$_invoke$arity$variadic(G__13207,seq13206__$1);
});
