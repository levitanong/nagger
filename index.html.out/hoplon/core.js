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
hoplon.core.static_elements = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__12395_SHARP_,p2__12396_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__12395_SHARP_,p2__12396_SHARP_.getAttribute("static-id"),p2__12396_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,jQuery("[static-id]").get());
hoplon.core.do_watch = (function hoplon$core$do_watch(var_args){
var args12397 = [];
var len__6146__auto___12402 = arguments.length;
var i__6147__auto___12403 = (0);
while(true){
if((i__6147__auto___12403 < len__6146__auto___12402)){
args12397.push((arguments[i__6147__auto___12403]));

var G__12404 = (i__6147__auto___12403 + (1));
i__6147__auto___12403 = G__12404;
continue;
} else {
}
break;
}

var G__12399 = args12397.length;
switch (G__12399) {
case 2:
return hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12397.length)].join('')));

}
});

hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$2 = (function (atom,f){
return hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$3(atom,null,f);
});

hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$3 = (function (atom,init,f){
var k = cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
var G__12400_12406 = init;
var G__12401_12407 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(atom) : cljs.core.deref.call(null,atom));
(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__12400_12406,G__12401_12407) : f.call(null,G__12400_12406,G__12401_12407));

cljs.core.add_watch(atom,k,((function (k){
return (function (_,___$1,old,new$){
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(old,new$) : f.call(null,old,new$));
});})(k))
);

return k;
});

hoplon.core.do_watch.cljs$lang$maxFixedArity = 3;
hoplon.core.bust_cache = (function hoplon$core$bust_cache(path){
var vec__12410 = cljs.core.reverse(clojure.string.split.cljs$core$IFn$_invoke$arity$2(path,/\//));
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12410,(0),null);
var more = cljs.core.nthnext(vec__12410,(1));
var vec__12411 = clojure.string.split.cljs$core$IFn$_invoke$arity$3(f,/\./,(2));
var f1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12411,(0),null);
var f2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12411,(1),null);
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("/",cljs.core.reverse(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(more,clojure.string.join.cljs$core$IFn$_invoke$arity$2(".",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str(f1),cljs.core.str("."),cljs.core.str("f354e6b1bcfd4fc3b481710ebf81db42")].join(''),f2], null)))));
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
var G__12412 = (i + (1));
var G__12413 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(ret,x.item(i));
i = G__12412;
ret = G__12413;
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
var G__12415 = [cljs.core.str(x)].join('');
return (hoplon.core.$text.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.$text.cljs$core$IFn$_invoke$arity$1(G__12415) : hoplon.core.$text.call(null,G__12415));
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
var G__12426 = new$__$1;
var vec__12428 = G__12426;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12428,(0),null);
var xs = cljs.core.nthnext(vec__12428,(1));
var G__12427 = hoplon.core.child_vec(this$);
var vec__12429 = G__12427;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12429,(0),null);
var ks = cljs.core.nthnext(vec__12429,(1));
var kids = vec__12429;
var G__12426__$1 = G__12426;
var G__12427__$1 = G__12427;
while(true){
var vec__12430 = G__12426__$1;
var x__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12430,(0),null);
var xs__$1 = cljs.core.nthnext(vec__12430,(1));
var vec__12431 = G__12427__$1;
var k__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12431,(0),null);
var ks__$1 = cljs.core.nthnext(vec__12431,(1));
var kids__$1 = vec__12431;
if(cljs.core.truth_((function (){var or__5088__auto__ = x__$1;
if(cljs.core.truth_(or__5088__auto__)){
return or__5088__auto__;
} else {
return k__$1;
}
})())){
var G__12432 = xs__$1;
var G__12433 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x__$1,k__$1))?ks__$1:((cljs.core.not(k__$1))?(function (){var ks__$2 = ks__$1;
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
G__12426__$1 = G__12432;
G__12427__$1 = G__12433;
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
var kids_12436 = (function (){var G__12435 = hoplon.core.child_vec(this$__$1);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__12435) : cljs.core.atom.call(null,G__12435));
})();
this$__$1.hoplonKids = kids_12436;

hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$2(kids_12436,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(hoplon.core.merge_kids,this$__$1));
}

return this$__$1;
});
hoplon.core.set_appendChild_BANG_ = (function hoplon$core$set_appendChild_BANG_(this$,kidfn){
return this$.appendChild = (function (x){
var this$__$1 = this;
var x__$1 = x;
hoplon.core.ensure_kids_BANG_(this$__$1);

var kids_12439 = (kidfn.cljs$core$IFn$_invoke$arity$1 ? kidfn.cljs$core$IFn$_invoke$arity$1(this$__$1) : kidfn.call(null,this$__$1));
var i_12440 = cljs.core.count((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(kids_12439) : cljs.core.deref.call(null,kids_12439)));
if(cljs.core.truth_(javelin.core.cell_QMARK_(x__$1))){
hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$2(x__$1,((function (kids_12439,i_12440,x__$1,this$__$1){
return (function (p1__12438_SHARP_,p2__12437_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(kids_12439,cljs.core.assoc,i_12440,p2__12437_SHARP_);
});})(kids_12439,i_12440,x__$1,this$__$1))
);
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(kids_12439,cljs.core.assoc,i_12440,x__$1);
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
return (function (p1__12441_SHARP_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,x__$1),p1__12441_SHARP_));
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
return (function (p1__12442_SHARP_){
return cljs.core.vec(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (x__$1,this$__$1){
return (function (z){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(z,y)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x__$1,z], null);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [z], null);
}
});})(x__$1,this$__$1))
,cljs.core.array_seq([p1__12442_SHARP_], 0)));
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
return (function (p1__12443_SHARP_){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (y__$1,this$__$1){
return (function (z){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(z,y__$1)){
return x;
} else {
return z;
}
});})(y__$1,this$__$1))
,p1__12443_SHARP_);
});})(y__$1,this$__$1))
);

return y__$1;
});
});
hoplon.core.set_setAttribute_BANG_ = (function hoplon$core$set_setAttribute_BANG_(this$,attrfn){
return this$.setAttribute = (function (k,v){
var this$__$1 = this;
var _ = undefined;
var kk_12444 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k);
var attr_12445 = (attrfn.cljs$core$IFn$_invoke$arity$1 ? attrfn.cljs$core$IFn$_invoke$arity$1(this$__$1) : attrfn.call(null,this$__$1));
var has_QMARK__12446 = (function (){var and__5076__auto__ = attr_12445;
if(cljs.core.truth_(and__5076__auto__)){
return cljs.core.contains_QMARK_((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(attr_12445) : cljs.core.deref.call(null,attr_12445)),kk_12444);
} else {
return and__5076__auto__;
}
})();
if(cljs.core.truth_(has_QMARK__12446)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(attr_12445,cljs.core.assoc,kk_12444,v);
} else {
hoplon.core.setAttribute.call(this$__$1,k,v);
}

return _;
});
});
hoplon.core.set_appendChild_BANG_(Element.prototype,(function (p1__12447_SHARP_){
return p1__12447_SHARP_.hoplonKids;
}));
hoplon.core.set_removeChild_BANG_(Element.prototype,(function (p1__12448_SHARP_){
return p1__12448_SHARP_.hoplonKids;
}));
hoplon.core.set_insertBefore_BANG_(Element.prototype,(function (p1__12449_SHARP_){
return p1__12449_SHARP_.hoplonKids;
}));
hoplon.core.set_replaceChild_BANG_(Element.prototype,(function (p1__12450_SHARP_){
return p1__12450_SHARP_.hoplonKids;
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
hoplon.core.node_QMARK_ = ((cljs.core.not(hoplon.core.is_ie8))?(function (p1__12451_SHARP_){
return (p1__12451_SHARP_ instanceof Node);
}):(function (p1__12452_SHARP_){
try{return p1__12452_SHARP_.nodeType;
}catch (e12453){if((e12453 instanceof Error)){
var _ = e12453;
return null;
} else {
throw e12453;

}
}}));
hoplon.core.vector_QMARK__STAR_ = ((cljs.core.not(hoplon.core.is_ie8))?cljs.core.vector_QMARK_:(function (p1__12454_SHARP_){
try{return cljs.core.vector_QMARK_(p1__12454_SHARP_);
}catch (e12455){if((e12455 instanceof Error)){
var _ = e12455;
return null;
} else {
throw e12455;

}
}}));
hoplon.core.seq_QMARK__STAR_ = ((cljs.core.not(hoplon.core.is_ie8))?cljs.core.seq_QMARK_:(function (p1__12456_SHARP_){
try{return cljs.core.seq_QMARK_(p1__12456_SHARP_);
}catch (e12457){if((e12457 instanceof Error)){
var _ = e12457;
return null;
} else {
throw e12457;

}
}}));
hoplon.core.safe_nth = (function hoplon$core$safe_nth(var_args){
var args12458 = [];
var len__6146__auto___12462 = arguments.length;
var i__6147__auto___12463 = (0);
while(true){
if((i__6147__auto___12463 < len__6146__auto___12462)){
args12458.push((arguments[i__6147__auto___12463]));

var G__12464 = (i__6147__auto___12463 + (1));
i__6147__auto___12463 = G__12464;
continue;
} else {
}
break;
}

var G__12460 = args12458.length;
switch (G__12460) {
case 2:
return hoplon.core.safe_nth.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return hoplon.core.safe_nth.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12458.length)].join('')));

}
});

hoplon.core.safe_nth.cljs$core$IFn$_invoke$arity$2 = (function (coll,index){
return hoplon.core.safe_nth.cljs$core$IFn$_invoke$arity$3(coll,index,null);
});

hoplon.core.safe_nth.cljs$core$IFn$_invoke$arity$3 = (function (coll,index,not_found){
try{return cljs.core.nth.cljs$core$IFn$_invoke$arity$3(coll,index,not_found);
}catch (e12461){if((e12461 instanceof Error)){
var _ = e12461;
return not_found;
} else {
throw e12461;

}
}});

hoplon.core.safe_nth.cljs$lang$maxFixedArity = 3;
hoplon.core.timeout = (function hoplon$core$timeout(var_args){
var args12466 = [];
var len__6146__auto___12469 = arguments.length;
var i__6147__auto___12470 = (0);
while(true){
if((i__6147__auto___12470 < len__6146__auto___12469)){
args12466.push((arguments[i__6147__auto___12470]));

var G__12471 = (i__6147__auto___12470 + (1));
i__6147__auto___12470 = G__12471;
continue;
} else {
}
break;
}

var G__12468 = args12466.length;
switch (G__12468) {
case 1:
return hoplon.core.timeout.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return hoplon.core.timeout.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12466.length)].join('')));

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
var G__12481 = args;
var vec__12482 = G__12481;
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12482,(0),null);
var args__$1 = cljs.core.nthnext(vec__12482,(1));
var attr__$1 = attr;
var kids__$1 = kids;
var G__12481__$1 = G__12481;
while(true){
var attr__$2 = attr__$1;
var kids__$2 = kids__$1;
var vec__12483 = G__12481__$1;
var arg__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12483,(0),null);
var args__$2 = cljs.core.nthnext(vec__12483,(1));
if(cljs.core.not(arg__$1)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.persistent_BANG_(attr__$2),cljs.core.persistent_BANG_(kids__$2)], null);
} else {
if(cljs.core.map_QMARK_(arg__$1)){
var G__12484 = cljs.core.reduce_kv(((function (attr__$1,kids__$1,G__12481__$1,attr__$2,kids__$2,vec__12483,arg__$1,args__$2,attr,kids,G__12481,vec__12482,arg,args__$1){
return (function (p1__12473_SHARP_,p2__12474_SHARP_,p3__12475_SHARP_){
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(p1__12473_SHARP_,p2__12474_SHARP_,p3__12475_SHARP_);
});})(attr__$1,kids__$1,G__12481__$1,attr__$2,kids__$2,vec__12483,arg__$1,args__$2,attr,kids,G__12481,vec__12482,arg,args__$1))
,attr__$2,arg__$1);
var G__12485 = kids__$2;
var G__12486 = args__$2;
attr__$1 = G__12484;
kids__$1 = G__12485;
G__12481__$1 = G__12486;
continue;
} else {
if((arg__$1 instanceof cljs.core.Keyword)){
var G__12487 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(attr__$2,arg__$1,cljs.core.first(args__$2));
var G__12488 = kids__$2;
var G__12489 = cljs.core.rest(args__$2);
attr__$1 = G__12487;
kids__$1 = G__12488;
G__12481__$1 = G__12489;
continue;
} else {
if(cljs.core.truth_((hoplon.core.seq_QMARK__STAR_.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.seq_QMARK__STAR_.cljs$core$IFn$_invoke$arity$1(arg__$1) : hoplon.core.seq_QMARK__STAR_.call(null,arg__$1)))){
var G__12490 = attr__$2;
var G__12491 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj_BANG_,kids__$2,cljs.core.flatten(arg__$1));
var G__12492 = args__$2;
attr__$1 = G__12490;
kids__$1 = G__12491;
G__12481__$1 = G__12492;
continue;
} else {
if(cljs.core.truth_((hoplon.core.vector_QMARK__STAR_.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.vector_QMARK__STAR_.cljs$core$IFn$_invoke$arity$1(arg__$1) : hoplon.core.vector_QMARK__STAR_.call(null,arg__$1)))){
var G__12493 = attr__$2;
var G__12494 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj_BANG_,kids__$2,cljs.core.flatten(arg__$1));
var G__12495 = args__$2;
attr__$1 = G__12493;
kids__$1 = G__12494;
G__12481__$1 = G__12495;
continue;
} else {
var G__12496 = attr__$2;
var G__12497 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(kids__$2,arg__$1);
var G__12498 = args__$2;
attr__$1 = G__12496;
kids__$1 = G__12497;
G__12481__$1 = G__12498;
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
return (function (p1__12500_SHARP_,p2__12499_SHARP_){
return (hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3(this$__$3,k,p2__12499_SHARP_) : hoplon.core.do_BANG_.call(null,this$__$3,k,p2__12499_SHARP_));
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
hoplon.core.add_children_BANG_ = (function hoplon$core$add_children_BANG_(this$,p__12502){
var vec__12509 = p__12502;
var child_cell = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12509,(0),null);
var _ = cljs.core.nthnext(vec__12509,(1));
var kids = vec__12509;
var this$__$1 = this$;
var node_12515 = ((function (this$__$1,vec__12509,child_cell,_,kids){
return (function (p1__12501_SHARP_){
if(typeof p1__12501_SHARP_ === 'string'){
return (hoplon.core.$text.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.$text.cljs$core$IFn$_invoke$arity$1(p1__12501_SHARP_) : hoplon.core.$text.call(null,p1__12501_SHARP_));
} else {
if(typeof p1__12501_SHARP_ === 'number'){
var G__12510 = [cljs.core.str(p1__12501_SHARP_)].join('');
return (hoplon.core.$text.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.$text.cljs$core$IFn$_invoke$arity$1(G__12510) : hoplon.core.$text.call(null,G__12510));
} else {
return p1__12501_SHARP_;

}
}
});})(this$__$1,vec__12509,child_cell,_,kids))
;
var seq__12511_12516 = cljs.core.seq(cljs.core.flatten(kids));
var chunk__12512_12517 = null;
var count__12513_12518 = (0);
var i__12514_12519 = (0);
while(true){
if((i__12514_12519 < count__12513_12518)){
var x_12520 = chunk__12512_12517.cljs$core$IIndexed$_nth$arity$2(null,i__12514_12519);
var temp__4425__auto___12521 = node_12515(x_12520);
if(cljs.core.truth_(temp__4425__auto___12521)){
var x_12522__$1 = temp__4425__auto___12521;
hoplon.core.append_child_BANG_(this$__$1,x_12522__$1);
} else {
}

var G__12523 = seq__12511_12516;
var G__12524 = chunk__12512_12517;
var G__12525 = count__12513_12518;
var G__12526 = (i__12514_12519 + (1));
seq__12511_12516 = G__12523;
chunk__12512_12517 = G__12524;
count__12513_12518 = G__12525;
i__12514_12519 = G__12526;
continue;
} else {
var temp__4425__auto___12527 = cljs.core.seq(seq__12511_12516);
if(temp__4425__auto___12527){
var seq__12511_12528__$1 = temp__4425__auto___12527;
if(cljs.core.chunked_seq_QMARK_(seq__12511_12528__$1)){
var c__5891__auto___12529 = cljs.core.chunk_first(seq__12511_12528__$1);
var G__12530 = cljs.core.chunk_rest(seq__12511_12528__$1);
var G__12531 = c__5891__auto___12529;
var G__12532 = cljs.core.count(c__5891__auto___12529);
var G__12533 = (0);
seq__12511_12516 = G__12530;
chunk__12512_12517 = G__12531;
count__12513_12518 = G__12532;
i__12514_12519 = G__12533;
continue;
} else {
var x_12534 = cljs.core.first(seq__12511_12528__$1);
var temp__4425__auto___12535__$1 = node_12515(x_12534);
if(cljs.core.truth_(temp__4425__auto___12535__$1)){
var x_12536__$1 = temp__4425__auto___12535__$1;
hoplon.core.append_child_BANG_(this$__$1,x_12536__$1);
} else {
}

var G__12537 = cljs.core.next(seq__12511_12528__$1);
var G__12538 = null;
var G__12539 = (0);
var G__12540 = (0);
seq__12511_12516 = G__12537;
chunk__12512_12517 = G__12538;
count__12513_12518 = G__12539;
i__12514_12519 = G__12540;
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
var G__12547__delegate = function (self__,args){
var self____$1 = this;
var this$ = self____$1;
var vec__12542 = hoplon.core.parse_args(args);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12542,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12542,(1),null);
var G__12543 = this$;
hoplon.core.add_attributes_BANG_(G__12543,attr);

hoplon.core.add_children_BANG_(G__12543,kids);

return G__12543;
};
var G__12547 = function (self__,var_args){
var args = null;
if (arguments.length > 1) {
var G__12548__i = 0, G__12548__a = new Array(arguments.length -  1);
while (G__12548__i < G__12548__a.length) {G__12548__a[G__12548__i] = arguments[G__12548__i + 1]; ++G__12548__i;}
  args = new cljs.core.IndexedSeq(G__12548__a,0);
} 
return G__12547__delegate.call(this,self__,args);};
G__12547.cljs$lang$maxFixedArity = 1;
G__12547.cljs$lang$applyTo = (function (arglist__12549){
var self__ = cljs.core.first(arglist__12549);
var args = cljs.core.rest(arglist__12549);
return G__12547__delegate(self__,args);
});
G__12547.cljs$core$IFn$_invoke$arity$variadic = G__12547__delegate;
return G__12547;
})()
;

Element.prototype.apply = (function (self__,args12541){
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args12541)));
});

Element.prototype.cljs$core$IFn$_invoke$arity$2 = (function() { 
var G__12550__delegate = function (args){
var this$ = this;
var vec__12544 = hoplon.core.parse_args(args);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12544,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12544,(1),null);
var G__12545 = this$;
hoplon.core.add_attributes_BANG_(G__12545,attr);

hoplon.core.add_children_BANG_(G__12545,kids);

return G__12545;
};
var G__12550 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__12551__i = 0, G__12551__a = new Array(arguments.length -  0);
while (G__12551__i < G__12551__a.length) {G__12551__a[G__12551__i] = arguments[G__12551__i + 0]; ++G__12551__i;}
  args = new cljs.core.IndexedSeq(G__12551__a,0);
} 
return G__12550__delegate.call(this,args);};
G__12550.cljs$lang$maxFixedArity = 0;
G__12550.cljs$lang$applyTo = (function (arglist__12552){
var args = cljs.core.seq(arglist__12552);
return G__12550__delegate(args);
});
G__12550.cljs$core$IFn$_invoke$arity$variadic = G__12550__delegate;
return G__12550;
})()
;

Element.prototype.hoplon$core$ICustomElement$ = true;

Element.prototype.hoplon$core$ICustomElement$_set_attribute_BANG_$arity$3 = (function (this$,k,v){
var this$__$1 = this;
var _ = null;
var k_12553__$1 = cljs.core.name(k);
var e_12554 = jQuery(this$__$1);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,v)){
e_12554.removeAttr(k_12553__$1);
} else {
e_12554.attr(k_12553__$1,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(true,v))?k_12553__$1:v));
}

return _;
});

Element.prototype.hoplon$core$ICustomElement$_append_child_BANG_$arity$2 = (function (this$,child){
var this$__$1 = this;
if(cljs.core.not(hoplon.core.is_ie8)){
return this$__$1.appendChild(child);
} else {
try{return this$__$1.appendChild(child);
}catch (e12546){if((e12546 instanceof Error)){
var _ = e12546;
return null;
} else {
throw e12546;

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
var G__12561__delegate = function (args){
var vec__12558 = hoplon.core.parse_args(args);
var attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12558,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12558,(1),null);
var elem = hoplon.core.ensure_kids_BANG_((document.getElementsByTagName(tag)[(0)]));
hoplon.core.add_attributes_BANG_(elem,attrs);

if(cljs.core.not(cljs.core.cst$kw$static.cljs$core$IFn$_invoke$arity$1(attrs))){
var G__12559 = elem.hoplonKids;
var G__12560 = cljs.core.vec(kids);
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__12559,G__12560) : cljs.core.reset_BANG_.call(null,G__12559,G__12560));
} else {
return null;
}
};
var G__12561 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__12562__i = 0, G__12562__a = new Array(arguments.length -  0);
while (G__12562__i < G__12562__a.length) {G__12562__a[G__12562__i] = arguments[G__12562__i + 0]; ++G__12562__i;}
  args = new cljs.core.IndexedSeq(G__12562__a,0);
} 
return G__12561__delegate.call(this,args);};
G__12561.cljs$lang$maxFixedArity = 0;
G__12561.cljs$lang$applyTo = (function (arglist__12563){
var args = cljs.core.seq(arglist__12563);
return G__12561__delegate(args);
});
G__12561.cljs$core$IFn$_invoke$arity$variadic = G__12561__delegate;
return G__12561;
})()
;
});
hoplon.core.make_elem_ctor = (function hoplon$core$make_elem_ctor(tag){
return (function() { 
var G__12564__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hoplon.core.ensure_kids_BANG_(document.createElement(tag)),args);
};
var G__12564 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__12565__i = 0, G__12565__a = new Array(arguments.length -  0);
while (G__12565__i < G__12565__a.length) {G__12565__a[G__12565__i] = arguments[G__12565__i + 0]; ++G__12565__i;}
  args = new cljs.core.IndexedSeq(G__12565__a,0);
} 
return G__12564__delegate.call(this,args);};
G__12564.cljs$lang$maxFixedArity = 0;
G__12564.cljs$lang$applyTo = (function (arglist__12566){
var args = cljs.core.seq(arglist__12566);
return G__12564__delegate(args);
});
G__12564.cljs$core$IFn$_invoke$arity$variadic = G__12564__delegate;
return G__12564;
})()
;
});
hoplon.core.html = (function hoplon$core$html(var_args){
var args__6153__auto__ = [];
var len__6146__auto___12569 = arguments.length;
var i__6147__auto___12570 = (0);
while(true){
if((i__6147__auto___12570 < len__6146__auto___12569)){
args__6153__auto__.push((arguments[i__6147__auto___12570]));

var G__12571 = (i__6147__auto___12570 + (1));
i__6147__auto___12570 = G__12571;
continue;
} else {
}
break;
}

var argseq__6154__auto__ = ((((0) < args__6153__auto__.length))?(new cljs.core.IndexedSeq(args__6153__auto__.slice((0)),(0))):null);
return hoplon.core.html.cljs$core$IFn$_invoke$arity$variadic(argseq__6154__auto__);
});

hoplon.core.html.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var vec__12568 = hoplon.core.parse_args(args);
var attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12568,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12568,(1),null);
return hoplon.core.add_attributes_BANG_((document.getElementsByTagName("html")[(0)]),attrs);
});

hoplon.core.html.cljs$lang$maxFixedArity = (0);

hoplon.core.html.cljs$lang$applyTo = (function (seq12567){
return hoplon.core.html.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq12567));
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
hoplon.core.$text = (function hoplon$core$$text(p1__12572_SHARP_){
return document.createTextNode(p1__12572_SHARP_);
});
hoplon.core.$comment = (function hoplon$core$$comment(p1__12573_SHARP_){
return document.createComment(p1__12573_SHARP_);
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
return jQuery("body").on("submit",(function (p1__12574_SHARP_){
var e = (function (){var G__12575 = p1__12574_SHARP_.target;
return jQuery(G__12575);
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
return p1__12574_SHARP_.preventDefault();
}
}));
}));
hoplon.core.text_val_BANG_ = (function hoplon$core$text_val_BANG_(var_args){
var args12576 = [];
var len__6146__auto___12579 = arguments.length;
var i__6147__auto___12580 = (0);
while(true){
if((i__6147__auto___12580 < len__6146__auto___12579)){
args12576.push((arguments[i__6147__auto___12580]));

var G__12581 = (i__6147__auto___12580 + (1));
i__6147__auto___12580 = G__12581;
continue;
} else {
}
break;
}

var G__12578 = args12576.length;
switch (G__12578) {
case 1:
return hoplon.core.text_val_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return hoplon.core.text_val_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12576.length)].join('')));

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
var args12583 = [];
var len__6146__auto___12586 = arguments.length;
var i__6147__auto___12587 = (0);
while(true){
if((i__6147__auto___12587 < len__6146__auto___12586)){
args12583.push((arguments[i__6147__auto___12587]));

var G__12588 = (i__6147__auto___12587 + (1));
i__6147__auto___12587 = G__12588;
continue;
} else {
}
break;
}

var G__12585 = args12583.length;
switch (G__12585) {
case 1:
return hoplon.core.check_val_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return hoplon.core.check_val_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12583.length)].join('')));

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
hoplon.core.do_BANG_ = (function (){var method_table__6001__auto__ = (function (){var G__12590 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__12590) : cljs.core.atom.call(null,G__12590));
})();
var prefer_table__6002__auto__ = (function (){var G__12591 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__12591) : cljs.core.atom.call(null,G__12591));
})();
var method_cache__6003__auto__ = (function (){var G__12592 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__12592) : cljs.core.atom.call(null,G__12592));
})();
var cached_hierarchy__6004__auto__ = (function (){var G__12593 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__12593) : cljs.core.atom.call(null,G__12593));
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
var G__12594 = elem;
var G__12595 = cljs.core.cst$kw$attr;
var G__12596 = cljs.core.PersistentArrayMap.fromArray([key,val], true, false);
return (hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3(G__12594,G__12595,G__12596) : hoplon.core.do_BANG_.call(null,G__12594,G__12595,G__12596));
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$value,(function() { 
var G__12597__delegate = function (elem,_,args){
var e = jQuery(elem);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("checkbox",e.attr("type")))?hoplon.core.check_val_BANG_:hoplon.core.text_val_BANG_),e,args);
};
var G__12597 = function (elem,_,var_args){
var args = null;
if (arguments.length > 2) {
var G__12598__i = 0, G__12598__a = new Array(arguments.length -  2);
while (G__12598__i < G__12598__a.length) {G__12598__a[G__12598__i] = arguments[G__12598__i + 2]; ++G__12598__i;}
  args = new cljs.core.IndexedSeq(G__12598__a,0);
} 
return G__12597__delegate.call(this,elem,_,args);};
G__12597.cljs$lang$maxFixedArity = 2;
G__12597.cljs$lang$applyTo = (function (arglist__12599){
var elem = cljs.core.first(arglist__12599);
arglist__12599 = cljs.core.next(arglist__12599);
var _ = cljs.core.first(arglist__12599);
var args = cljs.core.rest(arglist__12599);
return G__12597__delegate(elem,_,args);
});
G__12597.cljs$core$IFn$_invoke$arity$variadic = G__12597__delegate;
return G__12597;
})()
);
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$attr,(function (elem,_,kvs){
var e = jQuery(elem);
var seq__12600 = cljs.core.seq(kvs);
var chunk__12601 = null;
var count__12602 = (0);
var i__12603 = (0);
while(true){
if((i__12603 < count__12602)){
var vec__12604 = chunk__12601.cljs$core$IIndexed$_nth$arity$2(null,i__12603);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12604,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12604,(1),null);
var k_12606__$1 = cljs.core.name(k);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,v)){
e.removeAttr(k_12606__$1);
} else {
e.attr(k_12606__$1,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(true,v))?k_12606__$1:v));
}

var G__12607 = seq__12600;
var G__12608 = chunk__12601;
var G__12609 = count__12602;
var G__12610 = (i__12603 + (1));
seq__12600 = G__12607;
chunk__12601 = G__12608;
count__12602 = G__12609;
i__12603 = G__12610;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__12600);
if(temp__4425__auto__){
var seq__12600__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__12600__$1)){
var c__5891__auto__ = cljs.core.chunk_first(seq__12600__$1);
var G__12611 = cljs.core.chunk_rest(seq__12600__$1);
var G__12612 = c__5891__auto__;
var G__12613 = cljs.core.count(c__5891__auto__);
var G__12614 = (0);
seq__12600 = G__12611;
chunk__12601 = G__12612;
count__12602 = G__12613;
i__12603 = G__12614;
continue;
} else {
var vec__12605 = cljs.core.first(seq__12600__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12605,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12605,(1),null);
var k_12615__$1 = cljs.core.name(k);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,v)){
e.removeAttr(k_12615__$1);
} else {
e.attr(k_12615__$1,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(true,v))?k_12615__$1:v));
}

var G__12616 = cljs.core.next(seq__12600__$1);
var G__12617 = null;
var G__12618 = (0);
var G__12619 = (0);
seq__12600 = G__12616;
chunk__12601 = G__12617;
count__12602 = G__12618;
i__12603 = G__12619;
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
return (function (p1__12620_SHARP_){
return cljs.core.zipmap(p1__12620_SHARP_,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(true));
});})(elem__$1))
;
var clmap = ((cljs.core.map_QMARK_(kvs))?kvs:__GT_map(((typeof kvs === 'string')?kvs.split(/\s+/):cljs.core.seq(kvs))));
var seq__12621 = cljs.core.seq(clmap);
var chunk__12622 = null;
var count__12623 = (0);
var i__12624 = (0);
while(true){
if((i__12624 < count__12623)){
var vec__12625 = chunk__12622.cljs$core$IIndexed$_nth$arity$2(null,i__12624);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12625,(0),null);
var p_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12625,(1),null);
elem__$1.toggleClass(cljs.core.name(c),cljs.core.boolean$(p_QMARK_));

var G__12627 = seq__12621;
var G__12628 = chunk__12622;
var G__12629 = count__12623;
var G__12630 = (i__12624 + (1));
seq__12621 = G__12627;
chunk__12622 = G__12628;
count__12623 = G__12629;
i__12624 = G__12630;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__12621);
if(temp__4425__auto__){
var seq__12621__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__12621__$1)){
var c__5891__auto__ = cljs.core.chunk_first(seq__12621__$1);
var G__12631 = cljs.core.chunk_rest(seq__12621__$1);
var G__12632 = c__5891__auto__;
var G__12633 = cljs.core.count(c__5891__auto__);
var G__12634 = (0);
seq__12621 = G__12631;
chunk__12622 = G__12632;
count__12623 = G__12633;
i__12624 = G__12634;
continue;
} else {
var vec__12626 = cljs.core.first(seq__12621__$1);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12626,(0),null);
var p_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12626,(1),null);
elem__$1.toggleClass(cljs.core.name(c),cljs.core.boolean$(p_QMARK_));

var G__12635 = cljs.core.next(seq__12621__$1);
var G__12636 = null;
var G__12637 = (0);
var G__12638 = (0);
seq__12621 = G__12635;
chunk__12622 = G__12636;
count__12623 = G__12637;
i__12624 = G__12638;
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
var seq__12639 = cljs.core.seq(kvs);
var chunk__12640 = null;
var count__12641 = (0);
var i__12642 = (0);
while(true){
if((i__12642 < count__12641)){
var vec__12643 = chunk__12640.cljs$core$IIndexed$_nth$arity$2(null,i__12642);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12643,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12643,(1),null);
e.css(cljs.core.name(k),[cljs.core.str(v)].join(''));

var G__12645 = seq__12639;
var G__12646 = chunk__12640;
var G__12647 = count__12641;
var G__12648 = (i__12642 + (1));
seq__12639 = G__12645;
chunk__12640 = G__12646;
count__12641 = G__12647;
i__12642 = G__12648;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__12639);
if(temp__4425__auto__){
var seq__12639__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__12639__$1)){
var c__5891__auto__ = cljs.core.chunk_first(seq__12639__$1);
var G__12649 = cljs.core.chunk_rest(seq__12639__$1);
var G__12650 = c__5891__auto__;
var G__12651 = cljs.core.count(c__5891__auto__);
var G__12652 = (0);
seq__12639 = G__12649;
chunk__12640 = G__12650;
count__12641 = G__12651;
i__12642 = G__12652;
continue;
} else {
var vec__12644 = cljs.core.first(seq__12639__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12644,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12644,(1),null);
e.css(cljs.core.name(k),[cljs.core.str(v)].join(''));

var G__12653 = cljs.core.next(seq__12639__$1);
var G__12654 = null;
var G__12655 = (0);
var G__12656 = (0);
seq__12639 = G__12653;
chunk__12640 = G__12654;
count__12641 = G__12655;
i__12642 = G__12656;
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
var G__12657 = (function (){
if(cljs.core.truth_(v)){
return jQuery(elem).focus();
} else {
return jQuery(elem).focusout();
}
});
var G__12658 = (0);
return setTimeout(G__12657,G__12658);
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
hoplon.core.on_BANG_ = (function (){var method_table__6001__auto__ = (function (){var G__12659 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__12659) : cljs.core.atom.call(null,G__12659));
})();
var prefer_table__6002__auto__ = (function (){var G__12660 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__12660) : cljs.core.atom.call(null,G__12660));
})();
var method_cache__6003__auto__ = (function (){var G__12661 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__12661) : cljs.core.atom.call(null,G__12661));
})();
var cached_hierarchy__6004__auto__ = (function (){var G__12662 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__12662) : cljs.core.atom.call(null,G__12662));
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
return (function (){var G__12663 = this$__$1.target;
return jQuery(G__12663);
})().val();
});
hoplon.core.on_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$hoplon$core_SLASH_default,(function (elem,event,callback){
return hoplon.core.when_dom(elem,(function (){
return jQuery(elem).on(cljs.core.name(event),callback);
}));
}));
hoplon.core.loop_tpl_STAR_ = (function hoplon$core$loop_tpl_STAR_(items,tpl){
var on_deck = (function (){var G__12678 = cljs.core.List.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__12678) : cljs.core.atom.call(null,G__12678));
})();
var items_seq = javelin.core.formula(((function (on_deck){
return (function (G__12679,G__12680){
return (G__12679.cljs$core$IFn$_invoke$arity$1 ? G__12679.cljs$core$IFn$_invoke$arity$1(G__12680) : G__12679.call(null,G__12680));
});})(on_deck))
).call(null,cljs.core.seq,items);
var ith_item = ((function (on_deck,items_seq){
return (function (p1__12664_SHARP_){
return javelin.core.formula(((function (on_deck,items_seq){
return (function (G__12683,G__12682,G__12681){
return (G__12681.cljs$core$IFn$_invoke$arity$2 ? G__12681.cljs$core$IFn$_invoke$arity$2(G__12682,G__12683) : G__12681.call(null,G__12682,G__12683));
});})(on_deck,items_seq))
).call(null,p1__12664_SHARP_,items_seq,hoplon.core.safe_nth);
});})(on_deck,items_seq))
;
var shift_BANG_ = ((function (on_deck,items_seq,ith_item){
return (function (p1__12665_SHARP_){
var x = cljs.core.first((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(p1__12665_SHARP_) : cljs.core.deref.call(null,p1__12665_SHARP_)));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(p1__12665_SHARP_,cljs.core.rest);

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
var seq__12684 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$2(old,new$));
var chunk__12685 = null;
var count__12686 = (0);
var i__12687 = (0);
while(true){
if((i__12687 < count__12686)){
var i = chunk__12685.cljs$core$IIndexed$_nth$arity$2(null,i__12687);
var e_12690 = (function (){var or__5088__auto__ = shift_BANG_(on_deck);
if(cljs.core.truth_(or__5088__auto__)){
return or__5088__auto__;
} else {
var G__12688 = ith_item(i);
return (tpl.cljs$core$IFn$_invoke$arity$1 ? tpl.cljs$core$IFn$_invoke$arity$1(G__12688) : tpl.call(null,G__12688));
}
})();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(current,cljs.core.conj,e_12690);

var G__12691 = seq__12684;
var G__12692 = chunk__12685;
var G__12693 = count__12686;
var G__12694 = (i__12687 + (1));
seq__12684 = G__12691;
chunk__12685 = G__12692;
count__12686 = G__12693;
i__12687 = G__12694;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__12684);
if(temp__4425__auto__){
var seq__12684__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__12684__$1)){
var c__5891__auto__ = cljs.core.chunk_first(seq__12684__$1);
var G__12695 = cljs.core.chunk_rest(seq__12684__$1);
var G__12696 = c__5891__auto__;
var G__12697 = cljs.core.count(c__5891__auto__);
var G__12698 = (0);
seq__12684 = G__12695;
chunk__12685 = G__12696;
count__12686 = G__12697;
i__12687 = G__12698;
continue;
} else {
var i = cljs.core.first(seq__12684__$1);
var e_12699 = (function (){var or__5088__auto__ = shift_BANG_(on_deck);
if(cljs.core.truth_(or__5088__auto__)){
return or__5088__auto__;
} else {
var G__12689 = ith_item(i);
return (tpl.cljs$core$IFn$_invoke$arity$1 ? tpl.cljs$core$IFn$_invoke$arity$1(G__12689) : tpl.call(null,G__12689));
}
})();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(current,cljs.core.conj,e_12699);

var G__12700 = cljs.core.next(seq__12684__$1);
var G__12701 = null;
var G__12702 = (0);
var G__12703 = (0);
seq__12684 = G__12700;
chunk__12685 = G__12701;
count__12686 = G__12702;
i__12687 = G__12703;
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
var e_12704 = cljs.core.peek((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(current) : cljs.core.deref.call(null,current)));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(current,cljs.core.pop);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(on_deck,cljs.core.conj,e_12704);

var G__12705 = (_ + (1));
_ = G__12705;
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
var len__6146__auto___12714 = arguments.length;
var i__6147__auto___12715 = (0);
while(true){
if((i__6147__auto___12715 < len__6146__auto___12714)){
args__6153__auto__.push((arguments[i__6147__auto___12715]));

var G__12716 = (i__6147__auto___12715 + (1));
i__6147__auto___12715 = G__12716;
continue;
} else {
}
break;
}

var argseq__6154__auto__ = ((((0) < args__6153__auto__.length))?(new cljs.core.IndexedSeq(args__6153__auto__.slice((0)),(0))):null);
return hoplon.core.route_cell.cljs$core$IFn$_invoke$arity$variadic(argseq__6154__auto__);
});

hoplon.core.route_cell.cljs$core$IFn$_invoke$arity$variadic = (function (p__12707){
var vec__12708 = p__12707;
var default$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12708,(0),null);
var c = javelin.core.cell.cljs$core$IFn$_invoke$arity$1(window.location.hash);
var _ = javelin.core.formula(((function (c,vec__12708,default$){
return (function (G__12709,G__12711,G__12710){
var or__5088__auto__ = (function (){var and__5076__auto__ = (G__12709.cljs$core$IFn$_invoke$arity$1 ? G__12709.cljs$core$IFn$_invoke$arity$1(G__12710) : G__12709.call(null,G__12710));
if(cljs.core.truth_(and__5076__auto__)){
return G__12710;
} else {
return and__5076__auto__;
}
})();
if(cljs.core.truth_(or__5088__auto__)){
return or__5088__auto__;
} else {
return G__12711;
}
});})(c,vec__12708,default$))
).call(null,cljs.core.seq,default$,c);
jQuery(window).on("hashchange",((function (_,c,vec__12708,default$){
return (function (){
var G__12712 = c;
var G__12713 = window.location.hash;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__12712,G__12713) : cljs.core.reset_BANG_.call(null,G__12712,G__12713));
});})(_,c,vec__12708,default$))
);

return _;
});

hoplon.core.route_cell.cljs$lang$maxFixedArity = (0);

hoplon.core.route_cell.cljs$lang$applyTo = (function (seq12706){
return hoplon.core.route_cell.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq12706));
});
