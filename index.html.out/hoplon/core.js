// Compiled by ClojureScript 1.7.122 {:static-fns true, :optimize-constants true}
goog.provide('hoplon.core');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('clojure.set');
goog.require('javelin.core');
goog.require('cljs.reader');
goog.require('clojure.string');
hoplon.core.do_BANG_;

hoplon.core.on_BANG_;

hoplon.core.$text;

hoplon.core.add_children_BANG_;
cljs.core.enable_console_print_BANG_();
/**
 * Is the application running in a prerendering container (eg. PhantomJS via
 *   the prerender task)?
 */
hoplon.core.prerendering_QMARK_ = (new goog.Uri(window.location.href)).getParameterValue("prerendering");
hoplon.core.static_elements = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__12403_SHARP_,p2__12404_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__12403_SHARP_,p2__12404_SHARP_.getAttribute("static-id"),p2__12404_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,jQuery("[static-id]").get());
hoplon.core.do_watch = (function hoplon$core$do_watch(var_args){
var args12405 = [];
var len__6146__auto___12410 = arguments.length;
var i__6147__auto___12411 = (0);
while(true){
if((i__6147__auto___12411 < len__6146__auto___12410)){
args12405.push((arguments[i__6147__auto___12411]));

var G__12412 = (i__6147__auto___12411 + (1));
i__6147__auto___12411 = G__12412;
continue;
} else {
}
break;
}

var G__12407 = args12405.length;
switch (G__12407) {
case 2:
return hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12405.length)].join('')));

}
});

hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$2 = (function (atom,f){
return hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$3(atom,null,f);
});

hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$3 = (function (atom,init,f){
var k = cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
var G__12408_12414 = init;
var G__12409_12415 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(atom) : cljs.core.deref.call(null,atom));
(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__12408_12414,G__12409_12415) : f.call(null,G__12408_12414,G__12409_12415));

cljs.core.add_watch(atom,k,((function (k){
return (function (_,___$1,old,new$){
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(old,new$) : f.call(null,old,new$));
});})(k))
);

return k;
});

hoplon.core.do_watch.cljs$lang$maxFixedArity = 3;
hoplon.core.bust_cache = (function hoplon$core$bust_cache(path){
var vec__12418 = cljs.core.reverse(clojure.string.split.cljs$core$IFn$_invoke$arity$2(path,/\//));
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12418,(0),null);
var more = cljs.core.nthnext(vec__12418,(1));
var vec__12419 = clojure.string.split.cljs$core$IFn$_invoke$arity$3(f,/\./,(2));
var f1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12419,(0),null);
var f2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12419,(1),null);
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("/",cljs.core.reverse(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(more,clojure.string.join.cljs$core$IFn$_invoke$arity$2(".",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str(f1),cljs.core.str("."),cljs.core.str("49e111762b3641cd82eda94c5dcf07f2")].join(''),f2], null)))));
});
hoplon.core.child_vec = (function hoplon$core$child_vec(this$){
var x = this$.childNodes;
var l = x.length;
var i = (0);
var ret = cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
while(true){
var or__5088__auto__ = (function (){var and__5076__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,l);
if(and__5076__auto__){
return cljs.core.persistent_BANG_(ret);
} else {
return and__5076__auto__;
}
})();
if(cljs.core.truth_(or__5088__auto__)){
return or__5088__auto__;
} else {
var G__12420 = (i + (1));
var G__12421 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(ret,x.item(i));
i = G__12420;
ret = G__12421;
continue;
}
break;
}
});
hoplon.core.__GT_node = (function hoplon$core$__GT_node(x){
if(typeof x === 'string'){
return (hoplon.core.$text.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.$text.cljs$core$IFn$_invoke$arity$1(x) : hoplon.core.$text.call(null,x));
} else {
if(typeof x === 'number'){
var G__12423 = [cljs.core.str(x)].join('');
return (hoplon.core.$text.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.$text.cljs$core$IFn$_invoke$arity$1(G__12423) : hoplon.core.$text.call(null,G__12423));
} else {
return x;

}
}
});
hoplon.core.removeChild = Element.prototype.removeChild;
hoplon.core.appendChild = Element.prototype.appendChild;
hoplon.core.insertBefore = Element.prototype.insertBefore;
hoplon.core.replaceChild = Element.prototype.replaceChild;
hoplon.core.setAttribute = Element.prototype.setAttribute;
hoplon.core.merge_kids = (function hoplon$core$merge_kids(this$,old,new$){
var new$__$1 = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.flatten(new$));
var new_QMARK_ = cljs.core.set(new$__$1);
var G__12434 = new$__$1;
var vec__12436 = G__12434;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12436,(0),null);
var xs = cljs.core.nthnext(vec__12436,(1));
var G__12435 = hoplon.core.child_vec(this$);
var vec__12437 = G__12435;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12437,(0),null);
var ks = cljs.core.nthnext(vec__12437,(1));
var kids = vec__12437;
var G__12434__$1 = G__12434;
var G__12435__$1 = G__12435;
while(true){
var vec__12438 = G__12434__$1;
var x__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12438,(0),null);
var xs__$1 = cljs.core.nthnext(vec__12438,(1));
var vec__12439 = G__12435__$1;
var k__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12439,(0),null);
var ks__$1 = cljs.core.nthnext(vec__12439,(1));
var kids__$1 = vec__12439;
if(cljs.core.truth_((function (){var or__5088__auto__ = x__$1;
if(cljs.core.truth_(or__5088__auto__)){
return or__5088__auto__;
} else {
return k__$1;
}
})())){
var G__12440 = xs__$1;
var G__12441 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x__$1,k__$1))?ks__$1:((cljs.core.not(k__$1))?(function (){var ks__$2 = ks__$1;
hoplon.core.appendChild.call(this$,hoplon.core.__GT_node(x__$1));

return ks__$2;
})():((cljs.core.not(x__$1))?(function (){var ks__$2 = ks__$1;
if(cljs.core.truth_((new_QMARK_.cljs$core$IFn$_invoke$arity$1 ? new_QMARK_.cljs$core$IFn$_invoke$arity$1(k__$1) : new_QMARK_.call(null,k__$1)))){
} else {
hoplon.core.removeChild.call(this$,hoplon.core.__GT_node(k__$1));
}

return ks__$2;
})():(function (){var kids__$2 = kids__$1;
hoplon.core.insertBefore.call(this$,hoplon.core.__GT_node(x__$1),hoplon.core.__GT_node(k__$1));

return kids__$2;
})()
)));
G__12434__$1 = G__12440;
G__12435__$1 = G__12441;
continue;
} else {
return null;
}
break;
}
});
hoplon.core.ensure_kids_BANG_ = (function hoplon$core$ensure_kids_BANG_(this$){
var this$__$1 = this$;
if(cljs.core.truth_(this$__$1.hoplonKids)){
} else {
var kids_12444 = (function (){var G__12443 = hoplon.core.child_vec(this$__$1);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__12443) : cljs.core.atom.call(null,G__12443));
})();
this$__$1.hoplonKids = kids_12444;

hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$2(kids_12444,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(hoplon.core.merge_kids,this$__$1));
}

return this$__$1;
});
hoplon.core.set_appendChild_BANG_ = (function hoplon$core$set_appendChild_BANG_(this$,kidfn){
return this$.appendChild = (function (x){
var this$__$1 = this;
var x__$1 = x;
hoplon.core.ensure_kids_BANG_(this$__$1);

var kids_12447 = (kidfn.cljs$core$IFn$_invoke$arity$1 ? kidfn.cljs$core$IFn$_invoke$arity$1(this$__$1) : kidfn.call(null,this$__$1));
var i_12448 = cljs.core.count((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(kids_12447) : cljs.core.deref.call(null,kids_12447)));
if(cljs.core.truth_(javelin.core.cell_QMARK_(x__$1))){
hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$2(x__$1,((function (kids_12447,i_12448,x__$1,this$__$1){
return (function (p1__12446_SHARP_,p2__12445_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(kids_12447,cljs.core.assoc,i_12448,p2__12445_SHARP_);
});})(kids_12447,i_12448,x__$1,this$__$1))
);
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(kids_12447,cljs.core.assoc,i_12448,x__$1);
}

return x__$1;
});
});
hoplon.core.set_removeChild_BANG_ = (function hoplon$core$set_removeChild_BANG_(this$,kidfn){
return this$.removeChild = (function (x){
var this$__$1 = this;
var x__$1 = x;
hoplon.core.ensure_kids_BANG_(this$__$1);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2((kidfn.cljs$core$IFn$_invoke$arity$1 ? kidfn.cljs$core$IFn$_invoke$arity$1(this$__$1) : kidfn.call(null,this$__$1)),((function (x__$1,this$__$1){
return (function (p1__12449_SHARP_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,x__$1),p1__12449_SHARP_));
});})(x__$1,this$__$1))
);

return x__$1;
});
});
hoplon.core.set_insertBefore_BANG_ = (function hoplon$core$set_insertBefore_BANG_(this$,kidfn){
return this$.insertBefore = (function (x,y){
var this$__$1 = this;
var x__$1 = x;
hoplon.core.ensure_kids_BANG_(this$__$1);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2((kidfn.cljs$core$IFn$_invoke$arity$1 ? kidfn.cljs$core$IFn$_invoke$arity$1(this$__$1) : kidfn.call(null,this$__$1)),((function (x__$1,this$__$1){
return (function (p1__12450_SHARP_){
return cljs.core.vec(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (x__$1,this$__$1){
return (function (z){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(z,y)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x__$1,z], null);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [z], null);
}
});})(x__$1,this$__$1))
,cljs.core.array_seq([p1__12450_SHARP_], 0)));
});})(x__$1,this$__$1))
);

return x__$1;
});
});
hoplon.core.set_replaceChild_BANG_ = (function hoplon$core$set_replaceChild_BANG_(this$,kidfn){
return this$.replaceChild = (function (x,y){
var this$__$1 = this;
var y__$1 = y;
hoplon.core.ensure_kids_BANG_(this$__$1);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2((kidfn.cljs$core$IFn$_invoke$arity$1 ? kidfn.cljs$core$IFn$_invoke$arity$1(this$__$1) : kidfn.call(null,this$__$1)),((function (y__$1,this$__$1){
return (function (p1__12451_SHARP_){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (y__$1,this$__$1){
return (function (z){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(z,y__$1)){
return x;
} else {
return z;
}
});})(y__$1,this$__$1))
,p1__12451_SHARP_);
});})(y__$1,this$__$1))
);

return y__$1;
});
});
hoplon.core.set_setAttribute_BANG_ = (function hoplon$core$set_setAttribute_BANG_(this$,attrfn){
return this$.setAttribute = (function (k,v){
var this$__$1 = this;
var _ = undefined;
var kk_12452 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k);
var attr_12453 = (attrfn.cljs$core$IFn$_invoke$arity$1 ? attrfn.cljs$core$IFn$_invoke$arity$1(this$__$1) : attrfn.call(null,this$__$1));
var has_QMARK__12454 = (function (){var and__5076__auto__ = attr_12453;
if(cljs.core.truth_(and__5076__auto__)){
return cljs.core.contains_QMARK_((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(attr_12453) : cljs.core.deref.call(null,attr_12453)),kk_12452);
} else {
return and__5076__auto__;
}
})();
if(cljs.core.truth_(has_QMARK__12454)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(attr_12453,cljs.core.assoc,kk_12452,v);
} else {
hoplon.core.setAttribute.call(this$__$1,k,v);
}

return _;
});
});
hoplon.core.set_appendChild_BANG_(Element.prototype,(function (p1__12455_SHARP_){
return p1__12455_SHARP_.hoplonKids;
}));
hoplon.core.set_removeChild_BANG_(Element.prototype,(function (p1__12456_SHARP_){
return p1__12456_SHARP_.hoplonKids;
}));
hoplon.core.set_insertBefore_BANG_(Element.prototype,(function (p1__12457_SHARP_){
return p1__12457_SHARP_.hoplonKids;
}));
hoplon.core.set_replaceChild_BANG_(Element.prototype,(function (p1__12458_SHARP_){
return p1__12458_SHARP_.hoplonKids;
}));

/**
 * @interface
 */
hoplon.core.ICustomElement = function(){};

hoplon.core._set_attribute_BANG_ = (function hoplon$core$_set_attribute_BANG_(this$,k,v){
if((!((this$ == null))) && (!((this$.hoplon$core$ICustomElement$_set_attribute_BANG_$arity$3 == null)))){
return this$.hoplon$core$ICustomElement$_set_attribute_BANG_$arity$3(this$,k,v);
} else {
var x__5743__auto__ = (((this$ == null))?null:this$);
var m__5744__auto__ = (hoplon.core._set_attribute_BANG_[goog.typeOf(x__5743__auto__)]);
if(!((m__5744__auto__ == null))){
return (m__5744__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5744__auto__.cljs$core$IFn$_invoke$arity$3(this$,k,v) : m__5744__auto__.call(null,this$,k,v));
} else {
var m__5744__auto____$1 = (hoplon.core._set_attribute_BANG_["_"]);
if(!((m__5744__auto____$1 == null))){
return (m__5744__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__5744__auto____$1.cljs$core$IFn$_invoke$arity$3(this$,k,v) : m__5744__auto____$1.call(null,this$,k,v));
} else {
throw cljs.core.missing_protocol("ICustomElement.-set-attribute!",this$);
}
}
}
});

hoplon.core._append_child_BANG_ = (function hoplon$core$_append_child_BANG_(this$,child){
if((!((this$ == null))) && (!((this$.hoplon$core$ICustomElement$_append_child_BANG_$arity$2 == null)))){
return this$.hoplon$core$ICustomElement$_append_child_BANG_$arity$2(this$,child);
} else {
var x__5743__auto__ = (((this$ == null))?null:this$);
var m__5744__auto__ = (hoplon.core._append_child_BANG_[goog.typeOf(x__5743__auto__)]);
if(!((m__5744__auto__ == null))){
return (m__5744__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5744__auto__.cljs$core$IFn$_invoke$arity$2(this$,child) : m__5744__auto__.call(null,this$,child));
} else {
var m__5744__auto____$1 = (hoplon.core._append_child_BANG_["_"]);
if(!((m__5744__auto____$1 == null))){
return (m__5744__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__5744__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,child) : m__5744__auto____$1.call(null,this$,child));
} else {
throw cljs.core.missing_protocol("ICustomElement.-append-child!",this$);
}
}
}
});

hoplon.core._remove_child_BANG_ = (function hoplon$core$_remove_child_BANG_(this$,child){
if((!((this$ == null))) && (!((this$.hoplon$core$ICustomElement$_remove_child_BANG_$arity$2 == null)))){
return this$.hoplon$core$ICustomElement$_remove_child_BANG_$arity$2(this$,child);
} else {
var x__5743__auto__ = (((this$ == null))?null:this$);
var m__5744__auto__ = (hoplon.core._remove_child_BANG_[goog.typeOf(x__5743__auto__)]);
if(!((m__5744__auto__ == null))){
return (m__5744__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5744__auto__.cljs$core$IFn$_invoke$arity$2(this$,child) : m__5744__auto__.call(null,this$,child));
} else {
var m__5744__auto____$1 = (hoplon.core._remove_child_BANG_["_"]);
if(!((m__5744__auto____$1 == null))){
return (m__5744__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__5744__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,child) : m__5744__auto____$1.call(null,this$,child));
} else {
throw cljs.core.missing_protocol("ICustomElement.-remove-child!",this$);
}
}
}
});

hoplon.core._replace_child_BANG_ = (function hoplon$core$_replace_child_BANG_(this$,new$,existing){
if((!((this$ == null))) && (!((this$.hoplon$core$ICustomElement$_replace_child_BANG_$arity$3 == null)))){
return this$.hoplon$core$ICustomElement$_replace_child_BANG_$arity$3(this$,new$,existing);
} else {
var x__5743__auto__ = (((this$ == null))?null:this$);
var m__5744__auto__ = (hoplon.core._replace_child_BANG_[goog.typeOf(x__5743__auto__)]);
if(!((m__5744__auto__ == null))){
return (m__5744__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5744__auto__.cljs$core$IFn$_invoke$arity$3(this$,new$,existing) : m__5744__auto__.call(null,this$,new$,existing));
} else {
var m__5744__auto____$1 = (hoplon.core._replace_child_BANG_["_"]);
if(!((m__5744__auto____$1 == null))){
return (m__5744__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__5744__auto____$1.cljs$core$IFn$_invoke$arity$3(this$,new$,existing) : m__5744__auto____$1.call(null,this$,new$,existing));
} else {
throw cljs.core.missing_protocol("ICustomElement.-replace-child!",this$);
}
}
}
});

hoplon.core._insert_before_BANG_ = (function hoplon$core$_insert_before_BANG_(this$,new$,existing){
if((!((this$ == null))) && (!((this$.hoplon$core$ICustomElement$_insert_before_BANG_$arity$3 == null)))){
return this$.hoplon$core$ICustomElement$_insert_before_BANG_$arity$3(this$,new$,existing);
} else {
var x__5743__auto__ = (((this$ == null))?null:this$);
var m__5744__auto__ = (hoplon.core._insert_before_BANG_[goog.typeOf(x__5743__auto__)]);
if(!((m__5744__auto__ == null))){
return (m__5744__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5744__auto__.cljs$core$IFn$_invoke$arity$3(this$,new$,existing) : m__5744__auto__.call(null,this$,new$,existing));
} else {
var m__5744__auto____$1 = (hoplon.core._insert_before_BANG_["_"]);
if(!((m__5744__auto____$1 == null))){
return (m__5744__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__5744__auto____$1.cljs$core$IFn$_invoke$arity$3(this$,new$,existing) : m__5744__auto____$1.call(null,this$,new$,existing));
} else {
throw cljs.core.missing_protocol("ICustomElement.-insert-before!",this$);
}
}
}
});

hoplon.core.append_child_BANG_ = (function hoplon$core$append_child_BANG_(this$,child){
return hoplon.core._append_child_BANG_(this$,child);
});
hoplon.core.set_attribute_BANG_ = (function hoplon$core$set_attribute_BANG_(this$,k,v){
return hoplon.core._set_attribute_BANG_(this$,k,v);
});
hoplon.core.remove_child_BANG_ = (function hoplon$core$remove_child_BANG_(this$,child){
return hoplon.core._remove_child_BANG_(this$,child);
});
hoplon.core.replace_child_BANG_ = (function hoplon$core$replace_child_BANG_(this$,new$,existing){
return hoplon.core._replace_child_BANG_(this$,new$,existing);
});
hoplon.core.insert_before_BANG_ = (function hoplon$core$insert_before_BANG_(this$,new$,existing){
return hoplon.core._insert_before_BANG_(this$,new$,existing);
});
hoplon.core.is_ie8 = cljs.core.not((window["Node"]));
hoplon.core.node_QMARK_ = ((cljs.core.not(hoplon.core.is_ie8))?(function (p1__12459_SHARP_){
return (p1__12459_SHARP_ instanceof Node);
}):(function (p1__12460_SHARP_){
try{return p1__12460_SHARP_.nodeType;
}catch (e12461){if((e12461 instanceof Error)){
var _ = e12461;
return null;
} else {
throw e12461;

}
}}));
hoplon.core.vector_QMARK__STAR_ = ((cljs.core.not(hoplon.core.is_ie8))?cljs.core.vector_QMARK_:(function (p1__12462_SHARP_){
try{return cljs.core.vector_QMARK_(p1__12462_SHARP_);
}catch (e12463){if((e12463 instanceof Error)){
var _ = e12463;
return null;
} else {
throw e12463;

}
}}));
hoplon.core.seq_QMARK__STAR_ = ((cljs.core.not(hoplon.core.is_ie8))?cljs.core.seq_QMARK_:(function (p1__12464_SHARP_){
try{return cljs.core.seq_QMARK_(p1__12464_SHARP_);
}catch (e12465){if((e12465 instanceof Error)){
var _ = e12465;
return null;
} else {
throw e12465;

}
}}));
hoplon.core.safe_nth = (function hoplon$core$safe_nth(var_args){
var args12466 = [];
var len__6146__auto___12470 = arguments.length;
var i__6147__auto___12471 = (0);
while(true){
if((i__6147__auto___12471 < len__6146__auto___12470)){
args12466.push((arguments[i__6147__auto___12471]));

var G__12472 = (i__6147__auto___12471 + (1));
i__6147__auto___12471 = G__12472;
continue;
} else {
}
break;
}

var G__12468 = args12466.length;
switch (G__12468) {
case 2:
return hoplon.core.safe_nth.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return hoplon.core.safe_nth.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12466.length)].join('')));

}
});

hoplon.core.safe_nth.cljs$core$IFn$_invoke$arity$2 = (function (coll,index){
return hoplon.core.safe_nth.cljs$core$IFn$_invoke$arity$3(coll,index,null);
});

hoplon.core.safe_nth.cljs$core$IFn$_invoke$arity$3 = (function (coll,index,not_found){
try{return cljs.core.nth.cljs$core$IFn$_invoke$arity$3(coll,index,not_found);
}catch (e12469){if((e12469 instanceof Error)){
var _ = e12469;
return not_found;
} else {
throw e12469;

}
}});

hoplon.core.safe_nth.cljs$lang$maxFixedArity = 3;
hoplon.core.timeout = (function hoplon$core$timeout(var_args){
var args12474 = [];
var len__6146__auto___12477 = arguments.length;
var i__6147__auto___12478 = (0);
while(true){
if((i__6147__auto___12478 < len__6146__auto___12477)){
args12474.push((arguments[i__6147__auto___12478]));

var G__12479 = (i__6147__auto___12478 + (1));
i__6147__auto___12478 = G__12479;
continue;
} else {
}
break;
}

var G__12476 = args12474.length;
switch (G__12476) {
case 1:
return hoplon.core.timeout.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return hoplon.core.timeout.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12474.length)].join('')));

}
});

hoplon.core.timeout.cljs$core$IFn$_invoke$arity$1 = (function (f){
return hoplon.core.timeout.cljs$core$IFn$_invoke$arity$2(f,(0));
});

hoplon.core.timeout.cljs$core$IFn$_invoke$arity$2 = (function (f,t){
return window.setTimeout(f,t);
});

hoplon.core.timeout.cljs$lang$maxFixedArity = 2;
hoplon.core.when_dom = (function hoplon$core$when_dom(this$,f){
if(!((this$ instanceof Element))){
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
} else {
return hoplon.core.timeout.cljs$core$IFn$_invoke$arity$1((function hoplon$core$when_dom_$_doit(){
if(cljs.core.truth_(document.documentElement.contains(this$))){
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
} else {
return hoplon.core.timeout.cljs$core$IFn$_invoke$arity$2(hoplon$core$when_dom_$_doit,(20));
}
}));
}
});
hoplon.core.parse_args = (function hoplon$core$parse_args(args){
var attr = cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);
var kids = cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
var G__12489 = args;
var vec__12490 = G__12489;
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12490,(0),null);
var args__$1 = cljs.core.nthnext(vec__12490,(1));
var attr__$1 = attr;
var kids__$1 = kids;
var G__12489__$1 = G__12489;
while(true){
var attr__$2 = attr__$1;
var kids__$2 = kids__$1;
var vec__12491 = G__12489__$1;
var arg__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12491,(0),null);
var args__$2 = cljs.core.nthnext(vec__12491,(1));
if(cljs.core.not(arg__$1)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.persistent_BANG_(attr__$2),cljs.core.persistent_BANG_(kids__$2)], null);
} else {
if(cljs.core.map_QMARK_(arg__$1)){
var G__12492 = cljs.core.reduce_kv(((function (attr__$1,kids__$1,G__12489__$1,attr__$2,kids__$2,vec__12491,arg__$1,args__$2,attr,kids,G__12489,vec__12490,arg,args__$1){
return (function (p1__12481_SHARP_,p2__12482_SHARP_,p3__12483_SHARP_){
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(p1__12481_SHARP_,p2__12482_SHARP_,p3__12483_SHARP_);
});})(attr__$1,kids__$1,G__12489__$1,attr__$2,kids__$2,vec__12491,arg__$1,args__$2,attr,kids,G__12489,vec__12490,arg,args__$1))
,attr__$2,arg__$1);
var G__12493 = kids__$2;
var G__12494 = args__$2;
attr__$1 = G__12492;
kids__$1 = G__12493;
G__12489__$1 = G__12494;
continue;
} else {
if((arg__$1 instanceof cljs.core.Keyword)){
var G__12495 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(attr__$2,arg__$1,cljs.core.first(args__$2));
var G__12496 = kids__$2;
var G__12497 = cljs.core.rest(args__$2);
attr__$1 = G__12495;
kids__$1 = G__12496;
G__12489__$1 = G__12497;
continue;
} else {
if(cljs.core.truth_((hoplon.core.seq_QMARK__STAR_.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.seq_QMARK__STAR_.cljs$core$IFn$_invoke$arity$1(arg__$1) : hoplon.core.seq_QMARK__STAR_.call(null,arg__$1)))){
var G__12498 = attr__$2;
var G__12499 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj_BANG_,kids__$2,cljs.core.flatten(arg__$1));
var G__12500 = args__$2;
attr__$1 = G__12498;
kids__$1 = G__12499;
G__12489__$1 = G__12500;
continue;
} else {
if(cljs.core.truth_((hoplon.core.vector_QMARK__STAR_.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.vector_QMARK__STAR_.cljs$core$IFn$_invoke$arity$1(arg__$1) : hoplon.core.vector_QMARK__STAR_.call(null,arg__$1)))){
var G__12501 = attr__$2;
var G__12502 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj_BANG_,kids__$2,cljs.core.flatten(arg__$1));
var G__12503 = args__$2;
attr__$1 = G__12501;
kids__$1 = G__12502;
G__12489__$1 = G__12503;
continue;
} else {
var G__12504 = attr__$2;
var G__12505 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(kids__$2,arg__$1);
var G__12506 = args__$2;
attr__$1 = G__12504;
kids__$1 = G__12505;
G__12489__$1 = G__12506;
continue;

}
}
}
}
}
break;
}
});
hoplon.core.add_attributes_BANG_ = (function hoplon$core$add_attributes_BANG_(this$,attr){
var this$__$1 = this$;
cljs.core.reduce_kv(((function (this$__$1){
return (function (this$__$2,k,v){
var this$__$3 = this$__$2;
if(cljs.core.truth_(javelin.core.cell_QMARK_(v))){
hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$2(v,((function (this$__$3,this$__$1){
return (function (p1__12508_SHARP_,p2__12507_SHARP_){
return (hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3(this$__$3,k,p2__12507_SHARP_) : hoplon.core.do_BANG_.call(null,this$__$3,k,p2__12507_SHARP_));
});})(this$__$3,this$__$1))
);
} else {
if(cljs.core.fn_QMARK_(v)){
(hoplon.core.on_BANG_.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.on_BANG_.cljs$core$IFn$_invoke$arity$3(this$__$3,k,v) : hoplon.core.on_BANG_.call(null,this$__$3,k,v));
} else {
(hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3(this$__$3,k,v) : hoplon.core.do_BANG_.call(null,this$__$3,k,v));

}
}

return this$__$3;
});})(this$__$1))
,this$__$1,attr);

return this$__$1;
});
hoplon.core.add_children_BANG_ = (function hoplon$core$add_children_BANG_(this$,p__12510){
var vec__12517 = p__12510;
var child_cell = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12517,(0),null);
var _ = cljs.core.nthnext(vec__12517,(1));
var kids = vec__12517;
var this$__$1 = this$;
var node_12523 = ((function (this$__$1,vec__12517,child_cell,_,kids){
return (function (p1__12509_SHARP_){
if(typeof p1__12509_SHARP_ === 'string'){
return (hoplon.core.$text.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.$text.cljs$core$IFn$_invoke$arity$1(p1__12509_SHARP_) : hoplon.core.$text.call(null,p1__12509_SHARP_));
} else {
if(typeof p1__12509_SHARP_ === 'number'){
var G__12518 = [cljs.core.str(p1__12509_SHARP_)].join('');
return (hoplon.core.$text.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.$text.cljs$core$IFn$_invoke$arity$1(G__12518) : hoplon.core.$text.call(null,G__12518));
} else {
return p1__12509_SHARP_;

}
}
});})(this$__$1,vec__12517,child_cell,_,kids))
;
var seq__12519_12524 = cljs.core.seq(cljs.core.flatten(kids));
var chunk__12520_12525 = null;
var count__12521_12526 = (0);
var i__12522_12527 = (0);
while(true){
if((i__12522_12527 < count__12521_12526)){
var x_12528 = chunk__12520_12525.cljs$core$IIndexed$_nth$arity$2(null,i__12522_12527);
var temp__4425__auto___12529 = node_12523(x_12528);
if(cljs.core.truth_(temp__4425__auto___12529)){
var x_12530__$1 = temp__4425__auto___12529;
hoplon.core.append_child_BANG_(this$__$1,x_12530__$1);
} else {
}

var G__12531 = seq__12519_12524;
var G__12532 = chunk__12520_12525;
var G__12533 = count__12521_12526;
var G__12534 = (i__12522_12527 + (1));
seq__12519_12524 = G__12531;
chunk__12520_12525 = G__12532;
count__12521_12526 = G__12533;
i__12522_12527 = G__12534;
continue;
} else {
var temp__4425__auto___12535 = cljs.core.seq(seq__12519_12524);
if(temp__4425__auto___12535){
var seq__12519_12536__$1 = temp__4425__auto___12535;
if(cljs.core.chunked_seq_QMARK_(seq__12519_12536__$1)){
var c__5891__auto___12537 = cljs.core.chunk_first(seq__12519_12536__$1);
var G__12538 = cljs.core.chunk_rest(seq__12519_12536__$1);
var G__12539 = c__5891__auto___12537;
var G__12540 = cljs.core.count(c__5891__auto___12537);
var G__12541 = (0);
seq__12519_12524 = G__12538;
chunk__12520_12525 = G__12539;
count__12521_12526 = G__12540;
i__12522_12527 = G__12541;
continue;
} else {
var x_12542 = cljs.core.first(seq__12519_12536__$1);
var temp__4425__auto___12543__$1 = node_12523(x_12542);
if(cljs.core.truth_(temp__4425__auto___12543__$1)){
var x_12544__$1 = temp__4425__auto___12543__$1;
hoplon.core.append_child_BANG_(this$__$1,x_12544__$1);
} else {
}

var G__12545 = cljs.core.next(seq__12519_12536__$1);
var G__12546 = null;
var G__12547 = (0);
var G__12548 = (0);
seq__12519_12524 = G__12545;
chunk__12520_12525 = G__12546;
count__12521_12526 = G__12547;
i__12522_12527 = G__12548;
continue;
}
} else {
}
}
break;
}

return this$__$1;
});
Element.prototype.cljs$core$IPrintWithWriter$ = true;

Element.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){
var this$__$1 = this;
return cljs.core.write_all.cljs$core$IFn$_invoke$arity$variadic(writer,cljs.core.array_seq(["#<Element: ",this$__$1.tagName,">"], 0));
});

Element.prototype.cljs$core$IFn$ = true;

Element.prototype.call = (function() { 
var G__12555__delegate = function (self__,args){
var self____$1 = this;
var this$ = self____$1;
var vec__12550 = hoplon.core.parse_args(args);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12550,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12550,(1),null);
var G__12551 = this$;
hoplon.core.add_attributes_BANG_(G__12551,attr);

hoplon.core.add_children_BANG_(G__12551,kids);

return G__12551;
};
var G__12555 = function (self__,var_args){
var args = null;
if (arguments.length > 1) {
var G__12556__i = 0, G__12556__a = new Array(arguments.length -  1);
while (G__12556__i < G__12556__a.length) {G__12556__a[G__12556__i] = arguments[G__12556__i + 1]; ++G__12556__i;}
  args = new cljs.core.IndexedSeq(G__12556__a,0);
} 
return G__12555__delegate.call(this,self__,args);};
G__12555.cljs$lang$maxFixedArity = 1;
G__12555.cljs$lang$applyTo = (function (arglist__12557){
var self__ = cljs.core.first(arglist__12557);
var args = cljs.core.rest(arglist__12557);
return G__12555__delegate(self__,args);
});
G__12555.cljs$core$IFn$_invoke$arity$variadic = G__12555__delegate;
return G__12555;
})()
;

Element.prototype.apply = (function (self__,args12549){
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args12549)));
});

Element.prototype.cljs$core$IFn$_invoke$arity$2 = (function() { 
var G__12558__delegate = function (args){
var this$ = this;
var vec__12552 = hoplon.core.parse_args(args);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12552,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12552,(1),null);
var G__12553 = this$;
hoplon.core.add_attributes_BANG_(G__12553,attr);

hoplon.core.add_children_BANG_(G__12553,kids);

return G__12553;
};
var G__12558 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__12559__i = 0, G__12559__a = new Array(arguments.length -  0);
while (G__12559__i < G__12559__a.length) {G__12559__a[G__12559__i] = arguments[G__12559__i + 0]; ++G__12559__i;}
  args = new cljs.core.IndexedSeq(G__12559__a,0);
} 
return G__12558__delegate.call(this,args);};
G__12558.cljs$lang$maxFixedArity = 0;
G__12558.cljs$lang$applyTo = (function (arglist__12560){
var args = cljs.core.seq(arglist__12560);
return G__12558__delegate(args);
});
G__12558.cljs$core$IFn$_invoke$arity$variadic = G__12558__delegate;
return G__12558;
})()
;

Element.prototype.hoplon$core$ICustomElement$ = true;

Element.prototype.hoplon$core$ICustomElement$_set_attribute_BANG_$arity$3 = (function (this$,k,v){
var this$__$1 = this;
var _ = null;
var k_12561__$1 = cljs.core.name(k);
var e_12562 = jQuery(this$__$1);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,v)){
e_12562.removeAttr(k_12561__$1);
} else {
e_12562.attr(k_12561__$1,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(true,v))?k_12561__$1:v));
}

return _;
});

Element.prototype.hoplon$core$ICustomElement$_append_child_BANG_$arity$2 = (function (this$,child){
var this$__$1 = this;
if(cljs.core.not(hoplon.core.is_ie8)){
return this$__$1.appendChild(child);
} else {
try{return this$__$1.appendChild(child);
}catch (e12554){if((e12554 instanceof Error)){
var _ = e12554;
return null;
} else {
throw e12554;

}
}}
});

Element.prototype.hoplon$core$ICustomElement$_remove_child_BANG_$arity$2 = (function (this$,child){
var this$__$1 = this;
return this$__$1.removeChild(child);
});

Element.prototype.hoplon$core$ICustomElement$_replace_child_BANG_$arity$3 = (function (this$,new$,existing){
var this$__$1 = this;
return this$__$1.replaceChild(new$,existing);
});

Element.prototype.hoplon$core$ICustomElement$_insert_before_BANG_$arity$3 = (function (this$,new$,existing){
var this$__$1 = this;
return this$__$1.insertBefore(new$,existing);
});
hoplon.core.make_singleton_ctor = (function hoplon$core$make_singleton_ctor(tag){
return (function() { 
var G__12569__delegate = function (args){
var vec__12566 = hoplon.core.parse_args(args);
var attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12566,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12566,(1),null);
var elem = hoplon.core.ensure_kids_BANG_((document.getElementsByTagName(tag)[(0)]));
hoplon.core.add_attributes_BANG_(elem,attrs);

if(cljs.core.not(cljs.core.cst$kw$static.cljs$core$IFn$_invoke$arity$1(attrs))){
var G__12567 = elem.hoplonKids;
var G__12568 = cljs.core.vec(kids);
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__12567,G__12568) : cljs.core.reset_BANG_.call(null,G__12567,G__12568));
} else {
return null;
}
};
var G__12569 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__12570__i = 0, G__12570__a = new Array(arguments.length -  0);
while (G__12570__i < G__12570__a.length) {G__12570__a[G__12570__i] = arguments[G__12570__i + 0]; ++G__12570__i;}
  args = new cljs.core.IndexedSeq(G__12570__a,0);
} 
return G__12569__delegate.call(this,args);};
G__12569.cljs$lang$maxFixedArity = 0;
G__12569.cljs$lang$applyTo = (function (arglist__12571){
var args = cljs.core.seq(arglist__12571);
return G__12569__delegate(args);
});
G__12569.cljs$core$IFn$_invoke$arity$variadic = G__12569__delegate;
return G__12569;
})()
;
});
hoplon.core.make_elem_ctor = (function hoplon$core$make_elem_ctor(tag){
return (function() { 
var G__12572__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hoplon.core.ensure_kids_BANG_(document.createElement(tag)),args);
};
var G__12572 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__12573__i = 0, G__12573__a = new Array(arguments.length -  0);
while (G__12573__i < G__12573__a.length) {G__12573__a[G__12573__i] = arguments[G__12573__i + 0]; ++G__12573__i;}
  args = new cljs.core.IndexedSeq(G__12573__a,0);
} 
return G__12572__delegate.call(this,args);};
G__12572.cljs$lang$maxFixedArity = 0;
G__12572.cljs$lang$applyTo = (function (arglist__12574){
var args = cljs.core.seq(arglist__12574);
return G__12572__delegate(args);
});
G__12572.cljs$core$IFn$_invoke$arity$variadic = G__12572__delegate;
return G__12572;
})()
;
});
hoplon.core.html = (function hoplon$core$html(var_args){
var args__6153__auto__ = [];
var len__6146__auto___12577 = arguments.length;
var i__6147__auto___12578 = (0);
while(true){
if((i__6147__auto___12578 < len__6146__auto___12577)){
args__6153__auto__.push((arguments[i__6147__auto___12578]));

var G__12579 = (i__6147__auto___12578 + (1));
i__6147__auto___12578 = G__12579;
continue;
} else {
}
break;
}

var argseq__6154__auto__ = ((((0) < args__6153__auto__.length))?(new cljs.core.IndexedSeq(args__6153__auto__.slice((0)),(0))):null);
return hoplon.core.html.cljs$core$IFn$_invoke$arity$variadic(argseq__6154__auto__);
});

hoplon.core.html.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var vec__12576 = hoplon.core.parse_args(args);
var attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12576,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12576,(1),null);
return hoplon.core.add_attributes_BANG_((document.getElementsByTagName("html")[(0)]),attrs);
});

hoplon.core.html.cljs$lang$maxFixedArity = (0);

hoplon.core.html.cljs$lang$applyTo = (function (seq12575){
return hoplon.core.html.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq12575));
});
hoplon.core.body = hoplon.core.make_singleton_ctor("body");
hoplon.core.head = hoplon.core.make_singleton_ctor("head");
hoplon.core.a = hoplon.core.make_elem_ctor("a");
hoplon.core.abbr = hoplon.core.make_elem_ctor("abbr");
hoplon.core.acronym = hoplon.core.make_elem_ctor("acronym");
hoplon.core.address = hoplon.core.make_elem_ctor("address");
hoplon.core.applet = hoplon.core.make_elem_ctor("applet");
hoplon.core.area = hoplon.core.make_elem_ctor("area");
hoplon.core.article = hoplon.core.make_elem_ctor("article");
hoplon.core.aside = hoplon.core.make_elem_ctor("aside");
hoplon.core.audio = hoplon.core.make_elem_ctor("audio");
hoplon.core.b = hoplon.core.make_elem_ctor("b");
hoplon.core.base = hoplon.core.make_elem_ctor("base");
hoplon.core.basefont = hoplon.core.make_elem_ctor("basefont");
hoplon.core.bdi = hoplon.core.make_elem_ctor("bdi");
hoplon.core.bdo = hoplon.core.make_elem_ctor("bdo");
hoplon.core.big = hoplon.core.make_elem_ctor("big");
hoplon.core.blockquote = hoplon.core.make_elem_ctor("blockquote");
hoplon.core.br = hoplon.core.make_elem_ctor("br");
hoplon.core.button = hoplon.core.make_elem_ctor("button");
hoplon.core.canvas = hoplon.core.make_elem_ctor("canvas");
hoplon.core.caption = hoplon.core.make_elem_ctor("caption");
hoplon.core.center = hoplon.core.make_elem_ctor("center");
hoplon.core.cite = hoplon.core.make_elem_ctor("cite");
hoplon.core.code = hoplon.core.make_elem_ctor("code");
hoplon.core.col = hoplon.core.make_elem_ctor("col");
hoplon.core.colgroup = hoplon.core.make_elem_ctor("colgroup");
hoplon.core.command = hoplon.core.make_elem_ctor("command");
hoplon.core.data = hoplon.core.make_elem_ctor("data");
hoplon.core.datalist = hoplon.core.make_elem_ctor("datalist");
hoplon.core.dd = hoplon.core.make_elem_ctor("dd");
hoplon.core.del = hoplon.core.make_elem_ctor("del");
hoplon.core.details = hoplon.core.make_elem_ctor("details");
hoplon.core.dfn = hoplon.core.make_elem_ctor("dfn");
hoplon.core.dir = hoplon.core.make_elem_ctor("dir");
hoplon.core.div = hoplon.core.make_elem_ctor("div");
hoplon.core.dl = hoplon.core.make_elem_ctor("dl");
hoplon.core.dt = hoplon.core.make_elem_ctor("dt");
hoplon.core.em = hoplon.core.make_elem_ctor("em");
hoplon.core.embed = hoplon.core.make_elem_ctor("embed");
hoplon.core.eventsource = hoplon.core.make_elem_ctor("eventsource");
hoplon.core.fieldset = hoplon.core.make_elem_ctor("fieldset");
hoplon.core.figcaption = hoplon.core.make_elem_ctor("figcaption");
hoplon.core.figure = hoplon.core.make_elem_ctor("figure");
hoplon.core.font = hoplon.core.make_elem_ctor("font");
hoplon.core.footer = hoplon.core.make_elem_ctor("footer");
hoplon.core.form = hoplon.core.make_elem_ctor("form");
hoplon.core.frame = hoplon.core.make_elem_ctor("frame");
hoplon.core.frameset = hoplon.core.make_elem_ctor("frameset");
hoplon.core.h1 = hoplon.core.make_elem_ctor("h1");
hoplon.core.h2 = hoplon.core.make_elem_ctor("h2");
hoplon.core.h3 = hoplon.core.make_elem_ctor("h3");
hoplon.core.h4 = hoplon.core.make_elem_ctor("h4");
hoplon.core.h5 = hoplon.core.make_elem_ctor("h5");
hoplon.core.h6 = hoplon.core.make_elem_ctor("h6");
hoplon.core.header = hoplon.core.make_elem_ctor("header");
hoplon.core.hgroup = hoplon.core.make_elem_ctor("hgroup");
hoplon.core.hr = hoplon.core.make_elem_ctor("hr");
hoplon.core.i = hoplon.core.make_elem_ctor("i");
hoplon.core.iframe = hoplon.core.make_elem_ctor("iframe");
hoplon.core.img = hoplon.core.make_elem_ctor("img");
hoplon.core.input = hoplon.core.make_elem_ctor("input");
hoplon.core.ins = hoplon.core.make_elem_ctor("ins");
hoplon.core.isindex = hoplon.core.make_elem_ctor("isindex");
hoplon.core.kbd = hoplon.core.make_elem_ctor("kbd");
hoplon.core.keygen = hoplon.core.make_elem_ctor("keygen");
hoplon.core.label = hoplon.core.make_elem_ctor("label");
hoplon.core.legend = hoplon.core.make_elem_ctor("legend");
hoplon.core.li = hoplon.core.make_elem_ctor("li");
hoplon.core.link = hoplon.core.make_elem_ctor("link");
hoplon.core.html_map = hoplon.core.make_elem_ctor("map");
hoplon.core.main = hoplon.core.make_elem_ctor("main");
hoplon.core.mark = hoplon.core.make_elem_ctor("mark");
hoplon.core.menu = hoplon.core.make_elem_ctor("menu");
hoplon.core.html_meta = hoplon.core.make_elem_ctor("meta");
hoplon.core.meter = hoplon.core.make_elem_ctor("meter");
hoplon.core.nav = hoplon.core.make_elem_ctor("nav");
hoplon.core.noframes = hoplon.core.make_elem_ctor("noframes");
hoplon.core.noscript = hoplon.core.make_elem_ctor("noscript");
hoplon.core.object = hoplon.core.make_elem_ctor("object");
hoplon.core.ol = hoplon.core.make_elem_ctor("ol");
hoplon.core.optgroup = hoplon.core.make_elem_ctor("optgroup");
hoplon.core.option = hoplon.core.make_elem_ctor("option");
hoplon.core.output = hoplon.core.make_elem_ctor("output");
hoplon.core.p = hoplon.core.make_elem_ctor("p");
hoplon.core.param = hoplon.core.make_elem_ctor("param");
hoplon.core.pre = hoplon.core.make_elem_ctor("pre");
hoplon.core.progress = hoplon.core.make_elem_ctor("progress");
hoplon.core.q = hoplon.core.make_elem_ctor("q");
hoplon.core.rp = hoplon.core.make_elem_ctor("rp");
hoplon.core.rt = hoplon.core.make_elem_ctor("rt");
hoplon.core.ruby = hoplon.core.make_elem_ctor("ruby");
hoplon.core.s = hoplon.core.make_elem_ctor("s");
hoplon.core.samp = hoplon.core.make_elem_ctor("samp");
hoplon.core.script = hoplon.core.make_elem_ctor("script");
hoplon.core.section = hoplon.core.make_elem_ctor("section");
hoplon.core.select = hoplon.core.make_elem_ctor("select");
hoplon.core.small = hoplon.core.make_elem_ctor("small");
hoplon.core.source = hoplon.core.make_elem_ctor("source");
hoplon.core.span = hoplon.core.make_elem_ctor("span");
hoplon.core.strike = hoplon.core.make_elem_ctor("strike");
hoplon.core.strong = hoplon.core.make_elem_ctor("strong");
hoplon.core.style = hoplon.core.make_elem_ctor("style");
hoplon.core.sub = hoplon.core.make_elem_ctor("sub");
hoplon.core.summary = hoplon.core.make_elem_ctor("summary");
hoplon.core.sup = hoplon.core.make_elem_ctor("sup");
hoplon.core.table = hoplon.core.make_elem_ctor("table");
hoplon.core.tbody = hoplon.core.make_elem_ctor("tbody");
hoplon.core.td = hoplon.core.make_elem_ctor("td");
hoplon.core.textarea = hoplon.core.make_elem_ctor("textarea");
hoplon.core.tfoot = hoplon.core.make_elem_ctor("tfoot");
hoplon.core.th = hoplon.core.make_elem_ctor("th");
hoplon.core.thead = hoplon.core.make_elem_ctor("thead");
hoplon.core.html_time = hoplon.core.make_elem_ctor("time");
hoplon.core.title = hoplon.core.make_elem_ctor("title");
hoplon.core.tr = hoplon.core.make_elem_ctor("tr");
hoplon.core.track = hoplon.core.make_elem_ctor("track");
hoplon.core.tt = hoplon.core.make_elem_ctor("tt");
hoplon.core.u = hoplon.core.make_elem_ctor("u");
hoplon.core.ul = hoplon.core.make_elem_ctor("ul");
hoplon.core.html_var = hoplon.core.make_elem_ctor("var");
hoplon.core.video = hoplon.core.make_elem_ctor("video");
hoplon.core.wbr = hoplon.core.make_elem_ctor("wbr");
hoplon.core.spliced = cljs.core.vector;
hoplon.core.$text = (function hoplon$core$$text(p1__12580_SHARP_){
return document.createTextNode(p1__12580_SHARP_);
});
hoplon.core.$comment = (function hoplon$core$$comment(p1__12581_SHARP_){
return document.createComment(p1__12581_SHARP_);
});
hoplon.core._LT__BANG___ = hoplon.core.$comment;
hoplon.core.___GT_ = cljs.core.cst$kw$hoplon$core_SLASH__DASH__DASH__GT_;
hoplon.core.add_initfn_BANG_ = (function hoplon$core$add_initfn_BANG_(f){
return jQuery(f);
});
hoplon.core.page_load = (function hoplon$core$page_load(){
return jQuery(document).trigger("page-load");
});
hoplon.core.on_page_load = (function hoplon$core$on_page_load(f){
return jQuery(document).on("page-load",f);
});
hoplon.core.add_initfn_BANG_((function (){
return jQuery("body").on("submit",(function (p1__12582_SHARP_){
var e = (function (){var G__12583 = p1__12582_SHARP_.target;
return jQuery(G__12583);
})();
if(cljs.core.truth_((function (){var or__5088__auto__ = e.attr("action");
if(cljs.core.truth_(or__5088__auto__)){
return or__5088__auto__;
} else {
return e.attr("method");
}
})())){
return null;
} else {
return p1__12582_SHARP_.preventDefault();
}
}));
}));
hoplon.core.text_val_BANG_ = (function hoplon$core$text_val_BANG_(var_args){
var args12584 = [];
var len__6146__auto___12587 = arguments.length;
var i__6147__auto___12588 = (0);
while(true){
if((i__6147__auto___12588 < len__6146__auto___12587)){
args12584.push((arguments[i__6147__auto___12588]));

var G__12589 = (i__6147__auto___12588 + (1));
i__6147__auto___12588 = G__12589;
continue;
} else {
}
break;
}

var G__12586 = args12584.length;
switch (G__12586) {
case 1:
return hoplon.core.text_val_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return hoplon.core.text_val_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12584.length)].join('')));

}
});

hoplon.core.text_val_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (e){
return e.val();
});

hoplon.core.text_val_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (e,v){
var v__$1 = [cljs.core.str(v)].join('');
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(v__$1,hoplon.core.text_val_BANG_.cljs$core$IFn$_invoke$arity$1(e))){
return e.val(v__$1);
} else {
return null;
}
});

hoplon.core.text_val_BANG_.cljs$lang$maxFixedArity = 2;
hoplon.core.check_val_BANG_ = (function hoplon$core$check_val_BANG_(var_args){
var args12591 = [];
var len__6146__auto___12594 = arguments.length;
var i__6147__auto___12595 = (0);
while(true){
if((i__6147__auto___12595 < len__6146__auto___12594)){
args12591.push((arguments[i__6147__auto___12595]));

var G__12596 = (i__6147__auto___12595 + (1));
i__6147__auto___12595 = G__12596;
continue;
} else {
}
break;
}

var G__12593 = args12591.length;
switch (G__12593) {
case 1:
return hoplon.core.check_val_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return hoplon.core.check_val_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12591.length)].join('')));

}
});

hoplon.core.check_val_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (e){
return e.is(":checked");
});

hoplon.core.check_val_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (e,v){
return e.prop("checked",cljs.core.boolean$(v));
});

hoplon.core.check_val_BANG_.cljs$lang$maxFixedArity = 2;
if(typeof hoplon.core.do_BANG_ !== 'undefined'){
} else {
hoplon.core.do_BANG_ = (function (){var method_table__6001__auto__ = (function (){var G__12598 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__12598) : cljs.core.atom.call(null,G__12598));
})();
var prefer_table__6002__auto__ = (function (){var G__12599 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__12599) : cljs.core.atom.call(null,G__12599));
})();
var method_cache__6003__auto__ = (function (){var G__12600 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__12600) : cljs.core.atom.call(null,G__12600));
})();
var cached_hierarchy__6004__auto__ = (function (){var G__12601 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__12601) : cljs.core.atom.call(null,G__12601));
})();
var hierarchy__6005__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$default,cljs.core.cst$kw$hoplon$core_SLASH_default], null),cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("hoplon.core","do!"),((function (method_table__6001__auto__,prefer_table__6002__auto__,method_cache__6003__auto__,cached_hierarchy__6004__auto__,hierarchy__6005__auto__){
return (function (elem,key,val){
return key;
});})(method_table__6001__auto__,prefer_table__6002__auto__,method_cache__6003__auto__,cached_hierarchy__6004__auto__,hierarchy__6005__auto__))
,cljs.core.cst$kw$hoplon$core_SLASH_default,hierarchy__6005__auto__,method_table__6001__auto__,prefer_table__6002__auto__,method_cache__6003__auto__,cached_hierarchy__6004__auto__));
})();
}
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$hoplon$core_SLASH_default,(function (elem,key,val){
var G__12602 = elem;
var G__12603 = cljs.core.cst$kw$attr;
var G__12604 = cljs.core.PersistentArrayMap.fromArray([key,val], true, false);
return (hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3(G__12602,G__12603,G__12604) : hoplon.core.do_BANG_.call(null,G__12602,G__12603,G__12604));
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$value,(function() { 
var G__12605__delegate = function (elem,_,args){
var e = jQuery(elem);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("checkbox",e.attr("type")))?hoplon.core.check_val_BANG_:hoplon.core.text_val_BANG_),e,args);
};
var G__12605 = function (elem,_,var_args){
var args = null;
if (arguments.length > 2) {
var G__12606__i = 0, G__12606__a = new Array(arguments.length -  2);
while (G__12606__i < G__12606__a.length) {G__12606__a[G__12606__i] = arguments[G__12606__i + 2]; ++G__12606__i;}
  args = new cljs.core.IndexedSeq(G__12606__a,0);
} 
return G__12605__delegate.call(this,elem,_,args);};
G__12605.cljs$lang$maxFixedArity = 2;
G__12605.cljs$lang$applyTo = (function (arglist__12607){
var elem = cljs.core.first(arglist__12607);
arglist__12607 = cljs.core.next(arglist__12607);
var _ = cljs.core.first(arglist__12607);
var args = cljs.core.rest(arglist__12607);
return G__12605__delegate(elem,_,args);
});
G__12605.cljs$core$IFn$_invoke$arity$variadic = G__12605__delegate;
return G__12605;
})()
);
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$attr,(function (elem,_,kvs){
var e = jQuery(elem);
var seq__12608 = cljs.core.seq(kvs);
var chunk__12609 = null;
var count__12610 = (0);
var i__12611 = (0);
while(true){
if((i__12611 < count__12610)){
var vec__12612 = chunk__12609.cljs$core$IIndexed$_nth$arity$2(null,i__12611);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12612,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12612,(1),null);
var k_12614__$1 = cljs.core.name(k);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,v)){
e.removeAttr(k_12614__$1);
} else {
e.attr(k_12614__$1,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(true,v))?k_12614__$1:v));
}

var G__12615 = seq__12608;
var G__12616 = chunk__12609;
var G__12617 = count__12610;
var G__12618 = (i__12611 + (1));
seq__12608 = G__12615;
chunk__12609 = G__12616;
count__12610 = G__12617;
i__12611 = G__12618;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__12608);
if(temp__4425__auto__){
var seq__12608__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__12608__$1)){
var c__5891__auto__ = cljs.core.chunk_first(seq__12608__$1);
var G__12619 = cljs.core.chunk_rest(seq__12608__$1);
var G__12620 = c__5891__auto__;
var G__12621 = cljs.core.count(c__5891__auto__);
var G__12622 = (0);
seq__12608 = G__12619;
chunk__12609 = G__12620;
count__12610 = G__12621;
i__12611 = G__12622;
continue;
} else {
var vec__12613 = cljs.core.first(seq__12608__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12613,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12613,(1),null);
var k_12623__$1 = cljs.core.name(k);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,v)){
e.removeAttr(k_12623__$1);
} else {
e.attr(k_12623__$1,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(true,v))?k_12623__$1:v));
}

var G__12624 = cljs.core.next(seq__12608__$1);
var G__12625 = null;
var G__12626 = (0);
var G__12627 = (0);
seq__12608 = G__12624;
chunk__12609 = G__12625;
count__12610 = G__12626;
i__12611 = G__12627;
continue;
}
} else {
return null;
}
}
break;
}
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$class,(function (elem,_,kvs){
var elem__$1 = jQuery(elem);
var __GT_map = ((function (elem__$1){
return (function (p1__12628_SHARP_){
return cljs.core.zipmap(p1__12628_SHARP_,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(true));
});})(elem__$1))
;
var clmap = ((cljs.core.map_QMARK_(kvs))?kvs:__GT_map(((typeof kvs === 'string')?kvs.split(/\s+/):cljs.core.seq(kvs))));
var seq__12629 = cljs.core.seq(clmap);
var chunk__12630 = null;
var count__12631 = (0);
var i__12632 = (0);
while(true){
if((i__12632 < count__12631)){
var vec__12633 = chunk__12630.cljs$core$IIndexed$_nth$arity$2(null,i__12632);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12633,(0),null);
var p_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12633,(1),null);
elem__$1.toggleClass(cljs.core.name(c),cljs.core.boolean$(p_QMARK_));

var G__12635 = seq__12629;
var G__12636 = chunk__12630;
var G__12637 = count__12631;
var G__12638 = (i__12632 + (1));
seq__12629 = G__12635;
chunk__12630 = G__12636;
count__12631 = G__12637;
i__12632 = G__12638;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__12629);
if(temp__4425__auto__){
var seq__12629__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__12629__$1)){
var c__5891__auto__ = cljs.core.chunk_first(seq__12629__$1);
var G__12639 = cljs.core.chunk_rest(seq__12629__$1);
var G__12640 = c__5891__auto__;
var G__12641 = cljs.core.count(c__5891__auto__);
var G__12642 = (0);
seq__12629 = G__12639;
chunk__12630 = G__12640;
count__12631 = G__12641;
i__12632 = G__12642;
continue;
} else {
var vec__12634 = cljs.core.first(seq__12629__$1);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12634,(0),null);
var p_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12634,(1),null);
elem__$1.toggleClass(cljs.core.name(c),cljs.core.boolean$(p_QMARK_));

var G__12643 = cljs.core.next(seq__12629__$1);
var G__12644 = null;
var G__12645 = (0);
var G__12646 = (0);
seq__12629 = G__12643;
chunk__12630 = G__12644;
count__12631 = G__12645;
i__12632 = G__12646;
continue;
}
} else {
return null;
}
}
break;
}
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$css,(function (elem,_,kvs){
var e = jQuery(elem);
var seq__12647 = cljs.core.seq(kvs);
var chunk__12648 = null;
var count__12649 = (0);
var i__12650 = (0);
while(true){
if((i__12650 < count__12649)){
var vec__12651 = chunk__12648.cljs$core$IIndexed$_nth$arity$2(null,i__12650);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12651,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12651,(1),null);
e.css(cljs.core.name(k),[cljs.core.str(v)].join(''));

var G__12653 = seq__12647;
var G__12654 = chunk__12648;
var G__12655 = count__12649;
var G__12656 = (i__12650 + (1));
seq__12647 = G__12653;
chunk__12648 = G__12654;
count__12649 = G__12655;
i__12650 = G__12656;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__12647);
if(temp__4425__auto__){
var seq__12647__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__12647__$1)){
var c__5891__auto__ = cljs.core.chunk_first(seq__12647__$1);
var G__12657 = cljs.core.chunk_rest(seq__12647__$1);
var G__12658 = c__5891__auto__;
var G__12659 = cljs.core.count(c__5891__auto__);
var G__12660 = (0);
seq__12647 = G__12657;
chunk__12648 = G__12658;
count__12649 = G__12659;
i__12650 = G__12660;
continue;
} else {
var vec__12652 = cljs.core.first(seq__12647__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12652,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12652,(1),null);
e.css(cljs.core.name(k),[cljs.core.str(v)].join(''));

var G__12661 = cljs.core.next(seq__12647__$1);
var G__12662 = null;
var G__12663 = (0);
var G__12664 = (0);
seq__12647 = G__12661;
chunk__12648 = G__12662;
count__12649 = G__12663;
i__12650 = G__12664;
continue;
}
} else {
return null;
}
}
break;
}
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$toggle,(function (elem,_,v){
return jQuery(elem).toggle(cljs.core.boolean$(v));
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$slide_DASH_toggle,(function (elem,_,v){
if(cljs.core.truth_(v)){
return jQuery(elem).hide().slideDown("fast");
} else {
return jQuery(elem).slideUp("fast");
}
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$fade_DASH_toggle,(function (elem,_,v){
if(cljs.core.truth_(v)){
return jQuery(elem).hide().fadeIn("fast");
} else {
return jQuery(elem).fadeOut("fast");
}
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$focus,(function (elem,_,v){
var G__12665 = (function (){
if(cljs.core.truth_(v)){
return jQuery(elem).focus();
} else {
return jQuery(elem).focusout();
}
});
var G__12666 = (0);
return setTimeout(G__12665,G__12666);
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$select,(function (elem,_,___$1){
return jQuery(elem).select();
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$focus_DASH_select,(function (elem,_,v){
if(cljs.core.truth_(v)){
(hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3(elem,cljs.core.cst$kw$focus,v) : hoplon.core.do_BANG_.call(null,elem,cljs.core.cst$kw$focus,v));

return (hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3(elem,cljs.core.cst$kw$select,v) : hoplon.core.do_BANG_.call(null,elem,cljs.core.cst$kw$select,v));
} else {
return null;
}
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$text,(function (elem,_,v){
return jQuery(elem).text([cljs.core.str(v)].join(''));
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$html,(function (elem,_,v){
return jQuery(elem).html(v);
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$scroll_DASH_to,(function (elem,_,v){
if(cljs.core.truth_(v)){
var body = jQuery("body,html");
var elem__$1 = jQuery(elem);
return body.animate(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$scrollTop,elem__$1.offset().top], null)));
} else {
return null;
}
}));
if(typeof hoplon.core.on_BANG_ !== 'undefined'){
} else {
hoplon.core.on_BANG_ = (function (){var method_table__6001__auto__ = (function (){var G__12667 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__12667) : cljs.core.atom.call(null,G__12667));
})();
var prefer_table__6002__auto__ = (function (){var G__12668 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__12668) : cljs.core.atom.call(null,G__12668));
})();
var method_cache__6003__auto__ = (function (){var G__12669 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__12669) : cljs.core.atom.call(null,G__12669));
})();
var cached_hierarchy__6004__auto__ = (function (){var G__12670 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__12670) : cljs.core.atom.call(null,G__12670));
})();
var hierarchy__6005__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$default,cljs.core.cst$kw$hoplon$core_SLASH_default], null),cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("hoplon.core","on!"),((function (method_table__6001__auto__,prefer_table__6002__auto__,method_cache__6003__auto__,cached_hierarchy__6004__auto__,hierarchy__6005__auto__){
return (function (elem,event,callback){
return event;
});})(method_table__6001__auto__,prefer_table__6002__auto__,method_cache__6003__auto__,cached_hierarchy__6004__auto__,hierarchy__6005__auto__))
,cljs.core.cst$kw$hoplon$core_SLASH_default,hierarchy__6005__auto__,method_table__6001__auto__,prefer_table__6002__auto__,method_cache__6003__auto__,cached_hierarchy__6004__auto__));
})();
}
jQuery.Event.prototype.cljs$core$IDeref$ = true;

jQuery.Event.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var this$__$1 = this;
return (function (){var G__12671 = this$__$1.target;
return jQuery(G__12671);
})().val();
});
hoplon.core.on_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$hoplon$core_SLASH_default,(function (elem,event,callback){
return hoplon.core.when_dom(elem,(function (){
return jQuery(elem).on(cljs.core.name(event),callback);
}));
}));
hoplon.core.loop_tpl_STAR_ = (function hoplon$core$loop_tpl_STAR_(items,tpl){
var on_deck = (function (){var G__12686 = cljs.core.List.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__12686) : cljs.core.atom.call(null,G__12686));
})();
var items_seq = javelin.core.formula(((function (on_deck){
return (function (G__12687,G__12688){
return (G__12687.cljs$core$IFn$_invoke$arity$1 ? G__12687.cljs$core$IFn$_invoke$arity$1(G__12688) : G__12687.call(null,G__12688));
});})(on_deck))
).call(null,cljs.core.seq,items);
var ith_item = ((function (on_deck,items_seq){
return (function (p1__12672_SHARP_){
return javelin.core.formula(((function (on_deck,items_seq){
return (function (G__12690,G__12691,G__12689){
return (G__12689.cljs$core$IFn$_invoke$arity$2 ? G__12689.cljs$core$IFn$_invoke$arity$2(G__12690,G__12691) : G__12689.call(null,G__12690,G__12691));
});})(on_deck,items_seq))
).call(null,items_seq,p1__12672_SHARP_,hoplon.core.safe_nth);
});})(on_deck,items_seq))
;
var shift_BANG_ = ((function (on_deck,items_seq,ith_item){
return (function (p1__12673_SHARP_){
var x = cljs.core.first((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(p1__12673_SHARP_) : cljs.core.deref.call(null,p1__12673_SHARP_)));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(p1__12673_SHARP_,cljs.core.rest);

return x;
});})(on_deck,items_seq,ith_item))
;
var current = javelin.core.cell.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$2(items_seq,((function (current,on_deck,items_seq,ith_item,shift_BANG_){
return (function (old_items,new_items){
var old = cljs.core.count(old_items);
var new$ = cljs.core.count(new_items);
var diff = (new$ - old);
if((diff > (0))){
var seq__12692 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$2(old,new$));
var chunk__12693 = null;
var count__12694 = (0);
var i__12695 = (0);
while(true){
if((i__12695 < count__12694)){
var i = chunk__12693.cljs$core$IIndexed$_nth$arity$2(null,i__12695);
var e_12698 = (function (){var or__5088__auto__ = shift_BANG_(on_deck);
if(cljs.core.truth_(or__5088__auto__)){
return or__5088__auto__;
} else {
var G__12696 = ith_item(i);
return (tpl.cljs$core$IFn$_invoke$arity$1 ? tpl.cljs$core$IFn$_invoke$arity$1(G__12696) : tpl.call(null,G__12696));
}
})();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(current,cljs.core.conj,e_12698);

var G__12699 = seq__12692;
var G__12700 = chunk__12693;
var G__12701 = count__12694;
var G__12702 = (i__12695 + (1));
seq__12692 = G__12699;
chunk__12693 = G__12700;
count__12694 = G__12701;
i__12695 = G__12702;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__12692);
if(temp__4425__auto__){
var seq__12692__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__12692__$1)){
var c__5891__auto__ = cljs.core.chunk_first(seq__12692__$1);
var G__12703 = cljs.core.chunk_rest(seq__12692__$1);
var G__12704 = c__5891__auto__;
var G__12705 = cljs.core.count(c__5891__auto__);
var G__12706 = (0);
seq__12692 = G__12703;
chunk__12693 = G__12704;
count__12694 = G__12705;
i__12695 = G__12706;
continue;
} else {
var i = cljs.core.first(seq__12692__$1);
var e_12707 = (function (){var or__5088__auto__ = shift_BANG_(on_deck);
if(cljs.core.truth_(or__5088__auto__)){
return or__5088__auto__;
} else {
var G__12697 = ith_item(i);
return (tpl.cljs$core$IFn$_invoke$arity$1 ? tpl.cljs$core$IFn$_invoke$arity$1(G__12697) : tpl.call(null,G__12697));
}
})();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(current,cljs.core.conj,e_12707);

var G__12708 = cljs.core.next(seq__12692__$1);
var G__12709 = null;
var G__12710 = (0);
var G__12711 = (0);
seq__12692 = G__12708;
chunk__12693 = G__12709;
count__12694 = G__12710;
i__12695 = G__12711;
continue;
}
} else {
return null;
}
}
break;
}
} else {
if((diff < (0))){
var n__5991__auto__ = (- diff);
var _ = (0);
while(true){
if((_ < n__5991__auto__)){
var e_12712 = cljs.core.peek((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(current) : cljs.core.deref.call(null,current)));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(current,cljs.core.pop);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(on_deck,cljs.core.conj,e_12712);

var G__12713 = (_ + (1));
_ = G__12713;
continue;
} else {
return null;
}
break;
}
} else {
return null;
}
}
});})(current,on_deck,items_seq,ith_item,shift_BANG_))
);

return current;
});
hoplon.core.route_cell = (function hoplon$core$route_cell(var_args){
var args__6153__auto__ = [];
var len__6146__auto___12722 = arguments.length;
var i__6147__auto___12723 = (0);
while(true){
if((i__6147__auto___12723 < len__6146__auto___12722)){
args__6153__auto__.push((arguments[i__6147__auto___12723]));

var G__12724 = (i__6147__auto___12723 + (1));
i__6147__auto___12723 = G__12724;
continue;
} else {
}
break;
}

var argseq__6154__auto__ = ((((0) < args__6153__auto__.length))?(new cljs.core.IndexedSeq(args__6153__auto__.slice((0)),(0))):null);
return hoplon.core.route_cell.cljs$core$IFn$_invoke$arity$variadic(argseq__6154__auto__);
});

hoplon.core.route_cell.cljs$core$IFn$_invoke$arity$variadic = (function (p__12715){
var vec__12716 = p__12715;
var default$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12716,(0),null);
var c = javelin.core.cell.cljs$core$IFn$_invoke$arity$1(window.location.hash);
var _ = javelin.core.formula(((function (c,vec__12716,default$){
return (function (G__12717,G__12719,G__12718){
var or__5088__auto__ = (function (){var and__5076__auto__ = (G__12717.cljs$core$IFn$_invoke$arity$1 ? G__12717.cljs$core$IFn$_invoke$arity$1(G__12718) : G__12717.call(null,G__12718));
if(cljs.core.truth_(and__5076__auto__)){
return G__12718;
} else {
return and__5076__auto__;
}
})();
if(cljs.core.truth_(or__5088__auto__)){
return or__5088__auto__;
} else {
return G__12719;
}
});})(c,vec__12716,default$))
).call(null,cljs.core.seq,default$,c);
jQuery(window).on("hashchange",((function (_,c,vec__12716,default$){
return (function (){
var G__12720 = c;
var G__12721 = window.location.hash;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__12720,G__12721) : cljs.core.reset_BANG_.call(null,G__12720,G__12721));
});})(_,c,vec__12716,default$))
);

return _;
});

hoplon.core.route_cell.cljs$lang$maxFixedArity = (0);

hoplon.core.route_cell.cljs$lang$applyTo = (function (seq12714){
return hoplon.core.route_cell.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq12714));
});
