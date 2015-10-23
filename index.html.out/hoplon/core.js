// Compiled by ClojureScript 1.7.122 {}
goog.provide('hoplon.core');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('cljsjs.jquery');
goog.require('clojure.set');
goog.require('javelin.core');
goog.require('cljs.reader');
goog.require('clojure.string');
hoplon.core.do_BANG_;

hoplon.core.on_BANG_;

hoplon.core.$text;

hoplon.core.add_children_BANG_;
cljs.core.enable_console_print_BANG_.call(null);
/**
 * Is the application running in a prerendering container (eg. PhantomJS via
 *   the prerender task)?
 */
hoplon.core.prerendering_QMARK_ = (new goog.Uri(window.location.href)).getParameterValue("prerendering");
hoplon.core.static_elements = cljs.core.reduce.call(null,(function (p1__8541_SHARP_,p2__8542_SHARP_){
return cljs.core.assoc.call(null,p1__8541_SHARP_,p2__8542_SHARP_.getAttribute("static-id"),p2__8542_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,jQuery("[static-id]").get());
hoplon.core.do_watch = (function hoplon$core$do_watch(var_args){
var args8543 = [];
var len__6146__auto___8546 = arguments.length;
var i__6147__auto___8547 = (0);
while(true){
if((i__6147__auto___8547 < len__6146__auto___8546)){
args8543.push((arguments[i__6147__auto___8547]));

var G__8548 = (i__6147__auto___8547 + (1));
i__6147__auto___8547 = G__8548;
continue;
} else {
}
break;
}

var G__8545 = args8543.length;
switch (G__8545) {
case 2:
return hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8543.length)].join('')));

}
});

hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$2 = (function (atom,f){
return hoplon.core.do_watch.call(null,atom,null,f);
});

hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$3 = (function (atom,init,f){
var k = cljs.core.gensym.call(null);
f.call(null,init,cljs.core.deref.call(null,atom));

cljs.core.add_watch.call(null,atom,k,((function (k){
return (function (_,___$1,old,new$){
return f.call(null,old,new$);
});})(k))
);

return k;
});

hoplon.core.do_watch.cljs$lang$maxFixedArity = 3;
hoplon.core.bust_cache = (function hoplon$core$bust_cache(path){
var vec__8552 = cljs.core.reverse.call(null,clojure.string.split.call(null,path,/\//));
var f = cljs.core.nth.call(null,vec__8552,(0),null);
var more = cljs.core.nthnext.call(null,vec__8552,(1));
var vec__8553 = clojure.string.split.call(null,f,/\./,(2));
var f1 = cljs.core.nth.call(null,vec__8553,(0),null);
var f2 = cljs.core.nth.call(null,vec__8553,(1),null);
return clojure.string.join.call(null,"/",cljs.core.reverse.call(null,cljs.core.conj.call(null,more,clojure.string.join.call(null,".",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str(f1),cljs.core.str("."),cljs.core.str("0c41cf28feac437ca8a55acfddedb43c")].join(''),f2], null)))));
});
hoplon.core.child_vec = (function hoplon$core$child_vec(this$){
var x = this$.childNodes;
var l = x.length;
var i = (0);
var ret = cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);
while(true){
var or__5088__auto__ = (function (){var and__5076__auto__ = cljs.core._EQ_.call(null,i,l);
if(and__5076__auto__){
return cljs.core.persistent_BANG_.call(null,ret);
} else {
return and__5076__auto__;
}
})();
if(cljs.core.truth_(or__5088__auto__)){
return or__5088__auto__;
} else {
var G__8554 = (i + (1));
var G__8555 = cljs.core.conj_BANG_.call(null,ret,x.item(i));
i = G__8554;
ret = G__8555;
continue;
}
break;
}
});
hoplon.core.__GT_node = (function hoplon$core$__GT_node(x){
if(typeof x === 'string'){
return hoplon.core.$text.call(null,x);
} else {
if(typeof x === 'number'){
return hoplon.core.$text.call(null,[cljs.core.str(x)].join(''));
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
var new$__$1 = cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,new$));
var new_QMARK_ = cljs.core.set.call(null,new$__$1);
var G__8566 = new$__$1;
var vec__8568 = G__8566;
var x = cljs.core.nth.call(null,vec__8568,(0),null);
var xs = cljs.core.nthnext.call(null,vec__8568,(1));
var G__8567 = hoplon.core.child_vec.call(null,this$);
var vec__8569 = G__8567;
var k = cljs.core.nth.call(null,vec__8569,(0),null);
var ks = cljs.core.nthnext.call(null,vec__8569,(1));
var kids = vec__8569;
var G__8566__$1 = G__8566;
var G__8567__$1 = G__8567;
while(true){
var vec__8570 = G__8566__$1;
var x__$1 = cljs.core.nth.call(null,vec__8570,(0),null);
var xs__$1 = cljs.core.nthnext.call(null,vec__8570,(1));
var vec__8571 = G__8567__$1;
var k__$1 = cljs.core.nth.call(null,vec__8571,(0),null);
var ks__$1 = cljs.core.nthnext.call(null,vec__8571,(1));
var kids__$1 = vec__8571;
if(cljs.core.truth_((function (){var or__5088__auto__ = x__$1;
if(cljs.core.truth_(or__5088__auto__)){
return or__5088__auto__;
} else {
return k__$1;
}
})())){
var G__8572 = xs__$1;
var G__8573 = ((cljs.core._EQ_.call(null,x__$1,k__$1))?ks__$1:((cljs.core.not.call(null,k__$1))?(function (){var ks__$2 = ks__$1;
hoplon.core.appendChild.call(this$,hoplon.core.__GT_node.call(null,x__$1));

return ks__$2;
})():((cljs.core.not.call(null,x__$1))?(function (){var ks__$2 = ks__$1;
if(cljs.core.truth_(new_QMARK_.call(null,k__$1))){
} else {
hoplon.core.removeChild.call(this$,hoplon.core.__GT_node.call(null,k__$1));
}

return ks__$2;
})():(function (){var kids__$2 = kids__$1;
hoplon.core.insertBefore.call(this$,hoplon.core.__GT_node.call(null,x__$1),hoplon.core.__GT_node.call(null,k__$1));

return kids__$2;
})()
)));
G__8566__$1 = G__8572;
G__8567__$1 = G__8573;
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
var kids_8574 = cljs.core.atom.call(null,hoplon.core.child_vec.call(null,this$__$1));
this$__$1.hoplonKids = kids_8574;

hoplon.core.do_watch.call(null,kids_8574,cljs.core.partial.call(null,hoplon.core.merge_kids,this$__$1));
}

return this$__$1;
});
hoplon.core.set_appendChild_BANG_ = (function hoplon$core$set_appendChild_BANG_(this$,kidfn){
return this$.appendChild = (function (x){
var this$__$1 = this;
var x__$1 = x;
hoplon.core.ensure_kids_BANG_.call(null,this$__$1);

var kids_8577 = kidfn.call(null,this$__$1);
var i_8578 = cljs.core.count.call(null,cljs.core.deref.call(null,kids_8577));
if(cljs.core.truth_(javelin.core.cell_QMARK_.call(null,x__$1))){
hoplon.core.do_watch.call(null,x__$1,((function (kids_8577,i_8578,x__$1,this$__$1){
return (function (p1__8576_SHARP_,p2__8575_SHARP_){
return cljs.core.swap_BANG_.call(null,kids_8577,cljs.core.assoc,i_8578,p2__8575_SHARP_);
});})(kids_8577,i_8578,x__$1,this$__$1))
);
} else {
cljs.core.swap_BANG_.call(null,kids_8577,cljs.core.assoc,i_8578,x__$1);
}

return x__$1;
});
});
hoplon.core.set_removeChild_BANG_ = (function hoplon$core$set_removeChild_BANG_(this$,kidfn){
return this$.removeChild = (function (x){
var this$__$1 = this;
var x__$1 = x;
hoplon.core.ensure_kids_BANG_.call(null,this$__$1);

cljs.core.swap_BANG_.call(null,kidfn.call(null,this$__$1),((function (x__$1,this$__$1){
return (function (p1__8579_SHARP_){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.remove.call(null,cljs.core.partial.call(null,cljs.core._EQ_,x__$1),p1__8579_SHARP_));
});})(x__$1,this$__$1))
);

return x__$1;
});
});
hoplon.core.set_insertBefore_BANG_ = (function hoplon$core$set_insertBefore_BANG_(this$,kidfn){
return this$.insertBefore = (function (x,y){
var this$__$1 = this;
var x__$1 = x;
hoplon.core.ensure_kids_BANG_.call(null,this$__$1);

cljs.core.swap_BANG_.call(null,kidfn.call(null,this$__$1),((function (x__$1,this$__$1){
return (function (p1__8580_SHARP_){
return cljs.core.vec.call(null,cljs.core.mapcat.call(null,((function (x__$1,this$__$1){
return (function (z){
if(cljs.core._EQ_.call(null,z,y)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x__$1,z], null);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [z], null);
}
});})(x__$1,this$__$1))
,p1__8580_SHARP_));
});})(x__$1,this$__$1))
);

return x__$1;
});
});
hoplon.core.set_replaceChild_BANG_ = (function hoplon$core$set_replaceChild_BANG_(this$,kidfn){
return this$.replaceChild = (function (x,y){
var this$__$1 = this;
var y__$1 = y;
hoplon.core.ensure_kids_BANG_.call(null,this$__$1);

cljs.core.swap_BANG_.call(null,kidfn.call(null,this$__$1),((function (y__$1,this$__$1){
return (function (p1__8581_SHARP_){
return cljs.core.mapv.call(null,((function (y__$1,this$__$1){
return (function (z){
if(cljs.core._EQ_.call(null,z,y__$1)){
return x;
} else {
return z;
}
});})(y__$1,this$__$1))
,p1__8581_SHARP_);
});})(y__$1,this$__$1))
);

return y__$1;
});
});
hoplon.core.set_setAttribute_BANG_ = (function hoplon$core$set_setAttribute_BANG_(this$,attrfn){
return this$.setAttribute = (function (k,v){
var this$__$1 = this;
var _ = undefined;
var kk_8582 = cljs.core.keyword.call(null,k);
var attr_8583 = attrfn.call(null,this$__$1);
var has_QMARK__8584 = (function (){var and__5076__auto__ = attr_8583;
if(cljs.core.truth_(and__5076__auto__)){
return cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,attr_8583),kk_8582);
} else {
return and__5076__auto__;
}
})();
if(cljs.core.truth_(has_QMARK__8584)){
cljs.core.swap_BANG_.call(null,attr_8583,cljs.core.assoc,kk_8582,v);
} else {
hoplon.core.setAttribute.call(this$__$1,k,v);
}

return _;
});
});
hoplon.core.set_appendChild_BANG_.call(null,Element.prototype,(function (p1__8585_SHARP_){
return p1__8585_SHARP_.hoplonKids;
}));
hoplon.core.set_removeChild_BANG_.call(null,Element.prototype,(function (p1__8586_SHARP_){
return p1__8586_SHARP_.hoplonKids;
}));
hoplon.core.set_insertBefore_BANG_.call(null,Element.prototype,(function (p1__8587_SHARP_){
return p1__8587_SHARP_.hoplonKids;
}));
hoplon.core.set_replaceChild_BANG_.call(null,Element.prototype,(function (p1__8588_SHARP_){
return p1__8588_SHARP_.hoplonKids;
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
return m__5744__auto__.call(null,this$,k,v);
} else {
var m__5744__auto____$1 = (hoplon.core._set_attribute_BANG_["_"]);
if(!((m__5744__auto____$1 == null))){
return m__5744__auto____$1.call(null,this$,k,v);
} else {
throw cljs.core.missing_protocol.call(null,"ICustomElement.-set-attribute!",this$);
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
return m__5744__auto__.call(null,this$,child);
} else {
var m__5744__auto____$1 = (hoplon.core._append_child_BANG_["_"]);
if(!((m__5744__auto____$1 == null))){
return m__5744__auto____$1.call(null,this$,child);
} else {
throw cljs.core.missing_protocol.call(null,"ICustomElement.-append-child!",this$);
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
return m__5744__auto__.call(null,this$,child);
} else {
var m__5744__auto____$1 = (hoplon.core._remove_child_BANG_["_"]);
if(!((m__5744__auto____$1 == null))){
return m__5744__auto____$1.call(null,this$,child);
} else {
throw cljs.core.missing_protocol.call(null,"ICustomElement.-remove-child!",this$);
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
return m__5744__auto__.call(null,this$,new$,existing);
} else {
var m__5744__auto____$1 = (hoplon.core._replace_child_BANG_["_"]);
if(!((m__5744__auto____$1 == null))){
return m__5744__auto____$1.call(null,this$,new$,existing);
} else {
throw cljs.core.missing_protocol.call(null,"ICustomElement.-replace-child!",this$);
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
return m__5744__auto__.call(null,this$,new$,existing);
} else {
var m__5744__auto____$1 = (hoplon.core._insert_before_BANG_["_"]);
if(!((m__5744__auto____$1 == null))){
return m__5744__auto____$1.call(null,this$,new$,existing);
} else {
throw cljs.core.missing_protocol.call(null,"ICustomElement.-insert-before!",this$);
}
}
}
});

hoplon.core.append_child_BANG_ = (function hoplon$core$append_child_BANG_(this$,child){
return hoplon.core._append_child_BANG_.call(null,this$,child);
});
hoplon.core.set_attribute_BANG_ = (function hoplon$core$set_attribute_BANG_(this$,k,v){
return hoplon.core._set_attribute_BANG_.call(null,this$,k,v);
});
hoplon.core.remove_child_BANG_ = (function hoplon$core$remove_child_BANG_(this$,child){
return hoplon.core._remove_child_BANG_.call(null,this$,child);
});
hoplon.core.replace_child_BANG_ = (function hoplon$core$replace_child_BANG_(this$,new$,existing){
return hoplon.core._replace_child_BANG_.call(null,this$,new$,existing);
});
hoplon.core.insert_before_BANG_ = (function hoplon$core$insert_before_BANG_(this$,new$,existing){
return hoplon.core._insert_before_BANG_.call(null,this$,new$,existing);
});
hoplon.core.is_ie8 = cljs.core.not.call(null,(window["Node"]));
hoplon.core.node_QMARK_ = ((cljs.core.not.call(null,hoplon.core.is_ie8))?(function (p1__8589_SHARP_){
return (p1__8589_SHARP_ instanceof Node);
}):(function (p1__8590_SHARP_){
try{return p1__8590_SHARP_.nodeType;
}catch (e8591){if((e8591 instanceof Error)){
var _ = e8591;
return null;
} else {
throw e8591;

}
}}));
hoplon.core.vector_QMARK__STAR_ = ((cljs.core.not.call(null,hoplon.core.is_ie8))?cljs.core.vector_QMARK_:(function (p1__8592_SHARP_){
try{return cljs.core.vector_QMARK_.call(null,p1__8592_SHARP_);
}catch (e8593){if((e8593 instanceof Error)){
var _ = e8593;
return null;
} else {
throw e8593;

}
}}));
hoplon.core.seq_QMARK__STAR_ = ((cljs.core.not.call(null,hoplon.core.is_ie8))?cljs.core.seq_QMARK_:(function (p1__8594_SHARP_){
try{return cljs.core.seq_QMARK_.call(null,p1__8594_SHARP_);
}catch (e8595){if((e8595 instanceof Error)){
var _ = e8595;
return null;
} else {
throw e8595;

}
}}));
hoplon.core.safe_nth = (function hoplon$core$safe_nth(var_args){
var args8596 = [];
var len__6146__auto___8600 = arguments.length;
var i__6147__auto___8601 = (0);
while(true){
if((i__6147__auto___8601 < len__6146__auto___8600)){
args8596.push((arguments[i__6147__auto___8601]));

var G__8602 = (i__6147__auto___8601 + (1));
i__6147__auto___8601 = G__8602;
continue;
} else {
}
break;
}

var G__8598 = args8596.length;
switch (G__8598) {
case 2:
return hoplon.core.safe_nth.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return hoplon.core.safe_nth.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8596.length)].join('')));

}
});

hoplon.core.safe_nth.cljs$core$IFn$_invoke$arity$2 = (function (coll,index){
return hoplon.core.safe_nth.call(null,coll,index,null);
});

hoplon.core.safe_nth.cljs$core$IFn$_invoke$arity$3 = (function (coll,index,not_found){
try{return cljs.core.nth.call(null,coll,index,not_found);
}catch (e8599){if((e8599 instanceof Error)){
var _ = e8599;
return not_found;
} else {
throw e8599;

}
}});

hoplon.core.safe_nth.cljs$lang$maxFixedArity = 3;
hoplon.core.timeout = (function hoplon$core$timeout(var_args){
var args8604 = [];
var len__6146__auto___8607 = arguments.length;
var i__6147__auto___8608 = (0);
while(true){
if((i__6147__auto___8608 < len__6146__auto___8607)){
args8604.push((arguments[i__6147__auto___8608]));

var G__8609 = (i__6147__auto___8608 + (1));
i__6147__auto___8608 = G__8609;
continue;
} else {
}
break;
}

var G__8606 = args8604.length;
switch (G__8606) {
case 1:
return hoplon.core.timeout.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return hoplon.core.timeout.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8604.length)].join('')));

}
});

hoplon.core.timeout.cljs$core$IFn$_invoke$arity$1 = (function (f){
return hoplon.core.timeout.call(null,f,(0));
});

hoplon.core.timeout.cljs$core$IFn$_invoke$arity$2 = (function (f,t){
return window.setTimeout(f,t);
});

hoplon.core.timeout.cljs$lang$maxFixedArity = 2;
hoplon.core.when_dom = (function hoplon$core$when_dom(this$,f){
if(!((this$ instanceof Element))){
return f.call(null);
} else {
return hoplon.core.timeout.call(null,(function hoplon$core$when_dom_$_doit(){
if(cljs.core.truth_(document.documentElement.contains(this$))){
return f.call(null);
} else {
return hoplon.core.timeout.call(null,hoplon$core$when_dom_$_doit,(20));
}
}));
}
});
hoplon.core.parse_args = (function hoplon$core$parse_args(args){
var attr = cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
var kids = cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);
var G__8619 = args;
var vec__8620 = G__8619;
var arg = cljs.core.nth.call(null,vec__8620,(0),null);
var args__$1 = cljs.core.nthnext.call(null,vec__8620,(1));
var attr__$1 = attr;
var kids__$1 = kids;
var G__8619__$1 = G__8619;
while(true){
var attr__$2 = attr__$1;
var kids__$2 = kids__$1;
var vec__8621 = G__8619__$1;
var arg__$1 = cljs.core.nth.call(null,vec__8621,(0),null);
var args__$2 = cljs.core.nthnext.call(null,vec__8621,(1));
if(cljs.core.not.call(null,arg__$1)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.persistent_BANG_.call(null,attr__$2),cljs.core.persistent_BANG_.call(null,kids__$2)], null);
} else {
if(cljs.core.map_QMARK_.call(null,arg__$1)){
var G__8622 = cljs.core.reduce_kv.call(null,((function (attr__$1,kids__$1,G__8619__$1,attr__$2,kids__$2,vec__8621,arg__$1,args__$2,attr,kids,G__8619,vec__8620,arg,args__$1){
return (function (p1__8611_SHARP_,p2__8612_SHARP_,p3__8613_SHARP_){
return cljs.core.assoc_BANG_.call(null,p1__8611_SHARP_,p2__8612_SHARP_,p3__8613_SHARP_);
});})(attr__$1,kids__$1,G__8619__$1,attr__$2,kids__$2,vec__8621,arg__$1,args__$2,attr,kids,G__8619,vec__8620,arg,args__$1))
,attr__$2,arg__$1);
var G__8623 = kids__$2;
var G__8624 = args__$2;
attr__$1 = G__8622;
kids__$1 = G__8623;
G__8619__$1 = G__8624;
continue;
} else {
if((arg__$1 instanceof cljs.core.Keyword)){
var G__8625 = cljs.core.assoc_BANG_.call(null,attr__$2,arg__$1,cljs.core.first.call(null,args__$2));
var G__8626 = kids__$2;
var G__8627 = cljs.core.rest.call(null,args__$2);
attr__$1 = G__8625;
kids__$1 = G__8626;
G__8619__$1 = G__8627;
continue;
} else {
if(cljs.core.truth_(hoplon.core.seq_QMARK__STAR_.call(null,arg__$1))){
var G__8628 = attr__$2;
var G__8629 = cljs.core.reduce.call(null,cljs.core.conj_BANG_,kids__$2,cljs.core.flatten.call(null,arg__$1));
var G__8630 = args__$2;
attr__$1 = G__8628;
kids__$1 = G__8629;
G__8619__$1 = G__8630;
continue;
} else {
if(cljs.core.truth_(hoplon.core.vector_QMARK__STAR_.call(null,arg__$1))){
var G__8631 = attr__$2;
var G__8632 = cljs.core.reduce.call(null,cljs.core.conj_BANG_,kids__$2,cljs.core.flatten.call(null,arg__$1));
var G__8633 = args__$2;
attr__$1 = G__8631;
kids__$1 = G__8632;
G__8619__$1 = G__8633;
continue;
} else {
var G__8634 = attr__$2;
var G__8635 = cljs.core.conj_BANG_.call(null,kids__$2,arg__$1);
var G__8636 = args__$2;
attr__$1 = G__8634;
kids__$1 = G__8635;
G__8619__$1 = G__8636;
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
cljs.core.reduce_kv.call(null,((function (this$__$1){
return (function (this$__$2,k,v){
var this$__$3 = this$__$2;
if(cljs.core.truth_(javelin.core.cell_QMARK_.call(null,v))){
hoplon.core.do_watch.call(null,v,((function (this$__$3,this$__$1){
return (function (p1__8638_SHARP_,p2__8637_SHARP_){
return hoplon.core.do_BANG_.call(null,this$__$3,k,p2__8637_SHARP_);
});})(this$__$3,this$__$1))
);
} else {
if(cljs.core.fn_QMARK_.call(null,v)){
hoplon.core.on_BANG_.call(null,this$__$3,k,v);
} else {
hoplon.core.do_BANG_.call(null,this$__$3,k,v);

}
}

return this$__$3;
});})(this$__$1))
,this$__$1,attr);

return this$__$1;
});
hoplon.core.add_children_BANG_ = (function hoplon$core$add_children_BANG_(this$,p__8640){
var vec__8646 = p__8640;
var child_cell = cljs.core.nth.call(null,vec__8646,(0),null);
var _ = cljs.core.nthnext.call(null,vec__8646,(1));
var kids = vec__8646;
var this$__$1 = this$;
var node_8651 = ((function (this$__$1,vec__8646,child_cell,_,kids){
return (function (p1__8639_SHARP_){
if(typeof p1__8639_SHARP_ === 'string'){
return hoplon.core.$text.call(null,p1__8639_SHARP_);
} else {
if(typeof p1__8639_SHARP_ === 'number'){
return hoplon.core.$text.call(null,[cljs.core.str(p1__8639_SHARP_)].join(''));
} else {
return p1__8639_SHARP_;

}
}
});})(this$__$1,vec__8646,child_cell,_,kids))
;
var seq__8647_8652 = cljs.core.seq.call(null,cljs.core.flatten.call(null,kids));
var chunk__8648_8653 = null;
var count__8649_8654 = (0);
var i__8650_8655 = (0);
while(true){
if((i__8650_8655 < count__8649_8654)){
var x_8656 = cljs.core._nth.call(null,chunk__8648_8653,i__8650_8655);
var temp__4425__auto___8657 = node_8651.call(null,x_8656);
if(cljs.core.truth_(temp__4425__auto___8657)){
var x_8658__$1 = temp__4425__auto___8657;
hoplon.core.append_child_BANG_.call(null,this$__$1,x_8658__$1);
} else {
}

var G__8659 = seq__8647_8652;
var G__8660 = chunk__8648_8653;
var G__8661 = count__8649_8654;
var G__8662 = (i__8650_8655 + (1));
seq__8647_8652 = G__8659;
chunk__8648_8653 = G__8660;
count__8649_8654 = G__8661;
i__8650_8655 = G__8662;
continue;
} else {
var temp__4425__auto___8663 = cljs.core.seq.call(null,seq__8647_8652);
if(temp__4425__auto___8663){
var seq__8647_8664__$1 = temp__4425__auto___8663;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8647_8664__$1)){
var c__5891__auto___8665 = cljs.core.chunk_first.call(null,seq__8647_8664__$1);
var G__8666 = cljs.core.chunk_rest.call(null,seq__8647_8664__$1);
var G__8667 = c__5891__auto___8665;
var G__8668 = cljs.core.count.call(null,c__5891__auto___8665);
var G__8669 = (0);
seq__8647_8652 = G__8666;
chunk__8648_8653 = G__8667;
count__8649_8654 = G__8668;
i__8650_8655 = G__8669;
continue;
} else {
var x_8670 = cljs.core.first.call(null,seq__8647_8664__$1);
var temp__4425__auto___8671__$1 = node_8651.call(null,x_8670);
if(cljs.core.truth_(temp__4425__auto___8671__$1)){
var x_8672__$1 = temp__4425__auto___8671__$1;
hoplon.core.append_child_BANG_.call(null,this$__$1,x_8672__$1);
} else {
}

var G__8673 = cljs.core.next.call(null,seq__8647_8664__$1);
var G__8674 = null;
var G__8675 = (0);
var G__8676 = (0);
seq__8647_8652 = G__8673;
chunk__8648_8653 = G__8674;
count__8649_8654 = G__8675;
i__8650_8655 = G__8676;
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
return cljs.core.write_all.call(null,writer,"#<Element: ",this$__$1.tagName,">");
});

Element.prototype.cljs$core$IFn$ = true;

Element.prototype.call = (function() { 
var G__8683__delegate = function (self__,args){
var self____$1 = this;
var this$ = self____$1;
var vec__8678 = hoplon.core.parse_args.call(null,args);
var attr = cljs.core.nth.call(null,vec__8678,(0),null);
var kids = cljs.core.nth.call(null,vec__8678,(1),null);
var G__8679 = this$;
hoplon.core.add_attributes_BANG_.call(null,G__8679,attr);

hoplon.core.add_children_BANG_.call(null,G__8679,kids);

return G__8679;
};
var G__8683 = function (self__,var_args){
var args = null;
if (arguments.length > 1) {
var G__8684__i = 0, G__8684__a = new Array(arguments.length -  1);
while (G__8684__i < G__8684__a.length) {G__8684__a[G__8684__i] = arguments[G__8684__i + 1]; ++G__8684__i;}
  args = new cljs.core.IndexedSeq(G__8684__a,0);
} 
return G__8683__delegate.call(this,self__,args);};
G__8683.cljs$lang$maxFixedArity = 1;
G__8683.cljs$lang$applyTo = (function (arglist__8685){
var self__ = cljs.core.first(arglist__8685);
var args = cljs.core.rest(arglist__8685);
return G__8683__delegate(self__,args);
});
G__8683.cljs$core$IFn$_invoke$arity$variadic = G__8683__delegate;
return G__8683;
})()
;

Element.prototype.apply = (function (self__,args8677){
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args8677)));
});

Element.prototype.cljs$core$IFn$_invoke$arity$2 = (function() { 
var G__8686__delegate = function (args){
var this$ = this;
var vec__8680 = hoplon.core.parse_args.call(null,args);
var attr = cljs.core.nth.call(null,vec__8680,(0),null);
var kids = cljs.core.nth.call(null,vec__8680,(1),null);
var G__8681 = this$;
hoplon.core.add_attributes_BANG_.call(null,G__8681,attr);

hoplon.core.add_children_BANG_.call(null,G__8681,kids);

return G__8681;
};
var G__8686 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8687__i = 0, G__8687__a = new Array(arguments.length -  0);
while (G__8687__i < G__8687__a.length) {G__8687__a[G__8687__i] = arguments[G__8687__i + 0]; ++G__8687__i;}
  args = new cljs.core.IndexedSeq(G__8687__a,0);
} 
return G__8686__delegate.call(this,args);};
G__8686.cljs$lang$maxFixedArity = 0;
G__8686.cljs$lang$applyTo = (function (arglist__8688){
var args = cljs.core.seq(arglist__8688);
return G__8686__delegate(args);
});
G__8686.cljs$core$IFn$_invoke$arity$variadic = G__8686__delegate;
return G__8686;
})()
;

Element.prototype.hoplon$core$ICustomElement$ = true;

Element.prototype.hoplon$core$ICustomElement$_set_attribute_BANG_$arity$3 = (function (this$,k,v){
var this$__$1 = this;
var _ = null;
var k_8689__$1 = cljs.core.name.call(null,k);
var e_8690 = jQuery(this$__$1);
if(cljs.core._EQ_.call(null,false,v)){
e_8690.removeAttr(k_8689__$1);
} else {
e_8690.attr(k_8689__$1,((cljs.core._EQ_.call(null,true,v))?k_8689__$1:v));
}

return _;
});

Element.prototype.hoplon$core$ICustomElement$_append_child_BANG_$arity$2 = (function (this$,child){
var this$__$1 = this;
if(cljs.core.not.call(null,hoplon.core.is_ie8)){
return this$__$1.appendChild(child);
} else {
try{return this$__$1.appendChild(child);
}catch (e8682){if((e8682 instanceof Error)){
var _ = e8682;
return null;
} else {
throw e8682;

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
var G__8693__delegate = function (args){
var vec__8692 = hoplon.core.parse_args.call(null,args);
var attrs = cljs.core.nth.call(null,vec__8692,(0),null);
var kids = cljs.core.nth.call(null,vec__8692,(1),null);
var elem = hoplon.core.ensure_kids_BANG_.call(null,(document.getElementsByTagName(tag)[(0)]));
hoplon.core.add_attributes_BANG_.call(null,elem,attrs);

if(cljs.core.not.call(null,new cljs.core.Keyword(null,"static","static",1214358571).cljs$core$IFn$_invoke$arity$1(attrs))){
return cljs.core.reset_BANG_.call(null,elem.hoplonKids,cljs.core.vec.call(null,kids));
} else {
return null;
}
};
var G__8693 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8694__i = 0, G__8694__a = new Array(arguments.length -  0);
while (G__8694__i < G__8694__a.length) {G__8694__a[G__8694__i] = arguments[G__8694__i + 0]; ++G__8694__i;}
  args = new cljs.core.IndexedSeq(G__8694__a,0);
} 
return G__8693__delegate.call(this,args);};
G__8693.cljs$lang$maxFixedArity = 0;
G__8693.cljs$lang$applyTo = (function (arglist__8695){
var args = cljs.core.seq(arglist__8695);
return G__8693__delegate(args);
});
G__8693.cljs$core$IFn$_invoke$arity$variadic = G__8693__delegate;
return G__8693;
})()
;
});
hoplon.core.make_elem_ctor = (function hoplon$core$make_elem_ctor(tag){
return (function() { 
var G__8696__delegate = function (args){
return cljs.core.apply.call(null,hoplon.core.ensure_kids_BANG_.call(null,document.createElement(tag)),args);
};
var G__8696 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8697__i = 0, G__8697__a = new Array(arguments.length -  0);
while (G__8697__i < G__8697__a.length) {G__8697__a[G__8697__i] = arguments[G__8697__i + 0]; ++G__8697__i;}
  args = new cljs.core.IndexedSeq(G__8697__a,0);
} 
return G__8696__delegate.call(this,args);};
G__8696.cljs$lang$maxFixedArity = 0;
G__8696.cljs$lang$applyTo = (function (arglist__8698){
var args = cljs.core.seq(arglist__8698);
return G__8696__delegate(args);
});
G__8696.cljs$core$IFn$_invoke$arity$variadic = G__8696__delegate;
return G__8696;
})()
;
});
hoplon.core.html = (function hoplon$core$html(var_args){
var args__6153__auto__ = [];
var len__6146__auto___8701 = arguments.length;
var i__6147__auto___8702 = (0);
while(true){
if((i__6147__auto___8702 < len__6146__auto___8701)){
args__6153__auto__.push((arguments[i__6147__auto___8702]));

var G__8703 = (i__6147__auto___8702 + (1));
i__6147__auto___8702 = G__8703;
continue;
} else {
}
break;
}

var argseq__6154__auto__ = ((((0) < args__6153__auto__.length))?(new cljs.core.IndexedSeq(args__6153__auto__.slice((0)),(0))):null);
return hoplon.core.html.cljs$core$IFn$_invoke$arity$variadic(argseq__6154__auto__);
});

hoplon.core.html.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var vec__8700 = hoplon.core.parse_args.call(null,args);
var attrs = cljs.core.nth.call(null,vec__8700,(0),null);
var _ = cljs.core.nth.call(null,vec__8700,(1),null);
return hoplon.core.add_attributes_BANG_.call(null,(document.getElementsByTagName("html")[(0)]),attrs);
});

hoplon.core.html.cljs$lang$maxFixedArity = (0);

hoplon.core.html.cljs$lang$applyTo = (function (seq8699){
return hoplon.core.html.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8699));
});
hoplon.core.body = hoplon.core.make_singleton_ctor.call(null,"body");
hoplon.core.head = hoplon.core.make_singleton_ctor.call(null,"head");
hoplon.core.a = hoplon.core.make_elem_ctor.call(null,"a");
hoplon.core.abbr = hoplon.core.make_elem_ctor.call(null,"abbr");
hoplon.core.acronym = hoplon.core.make_elem_ctor.call(null,"acronym");
hoplon.core.address = hoplon.core.make_elem_ctor.call(null,"address");
hoplon.core.applet = hoplon.core.make_elem_ctor.call(null,"applet");
hoplon.core.area = hoplon.core.make_elem_ctor.call(null,"area");
hoplon.core.article = hoplon.core.make_elem_ctor.call(null,"article");
hoplon.core.aside = hoplon.core.make_elem_ctor.call(null,"aside");
hoplon.core.audio = hoplon.core.make_elem_ctor.call(null,"audio");
hoplon.core.b = hoplon.core.make_elem_ctor.call(null,"b");
hoplon.core.base = hoplon.core.make_elem_ctor.call(null,"base");
hoplon.core.basefont = hoplon.core.make_elem_ctor.call(null,"basefont");
hoplon.core.bdi = hoplon.core.make_elem_ctor.call(null,"bdi");
hoplon.core.bdo = hoplon.core.make_elem_ctor.call(null,"bdo");
hoplon.core.big = hoplon.core.make_elem_ctor.call(null,"big");
hoplon.core.blockquote = hoplon.core.make_elem_ctor.call(null,"blockquote");
hoplon.core.br = hoplon.core.make_elem_ctor.call(null,"br");
hoplon.core.button = hoplon.core.make_elem_ctor.call(null,"button");
hoplon.core.canvas = hoplon.core.make_elem_ctor.call(null,"canvas");
hoplon.core.caption = hoplon.core.make_elem_ctor.call(null,"caption");
hoplon.core.center = hoplon.core.make_elem_ctor.call(null,"center");
hoplon.core.cite = hoplon.core.make_elem_ctor.call(null,"cite");
hoplon.core.code = hoplon.core.make_elem_ctor.call(null,"code");
hoplon.core.col = hoplon.core.make_elem_ctor.call(null,"col");
hoplon.core.colgroup = hoplon.core.make_elem_ctor.call(null,"colgroup");
hoplon.core.command = hoplon.core.make_elem_ctor.call(null,"command");
hoplon.core.data = hoplon.core.make_elem_ctor.call(null,"data");
hoplon.core.datalist = hoplon.core.make_elem_ctor.call(null,"datalist");
hoplon.core.dd = hoplon.core.make_elem_ctor.call(null,"dd");
hoplon.core.del = hoplon.core.make_elem_ctor.call(null,"del");
hoplon.core.details = hoplon.core.make_elem_ctor.call(null,"details");
hoplon.core.dfn = hoplon.core.make_elem_ctor.call(null,"dfn");
hoplon.core.dir = hoplon.core.make_elem_ctor.call(null,"dir");
hoplon.core.div = hoplon.core.make_elem_ctor.call(null,"div");
hoplon.core.dl = hoplon.core.make_elem_ctor.call(null,"dl");
hoplon.core.dt = hoplon.core.make_elem_ctor.call(null,"dt");
hoplon.core.em = hoplon.core.make_elem_ctor.call(null,"em");
hoplon.core.embed = hoplon.core.make_elem_ctor.call(null,"embed");
hoplon.core.eventsource = hoplon.core.make_elem_ctor.call(null,"eventsource");
hoplon.core.fieldset = hoplon.core.make_elem_ctor.call(null,"fieldset");
hoplon.core.figcaption = hoplon.core.make_elem_ctor.call(null,"figcaption");
hoplon.core.figure = hoplon.core.make_elem_ctor.call(null,"figure");
hoplon.core.font = hoplon.core.make_elem_ctor.call(null,"font");
hoplon.core.footer = hoplon.core.make_elem_ctor.call(null,"footer");
hoplon.core.form = hoplon.core.make_elem_ctor.call(null,"form");
hoplon.core.frame = hoplon.core.make_elem_ctor.call(null,"frame");
hoplon.core.frameset = hoplon.core.make_elem_ctor.call(null,"frameset");
hoplon.core.h1 = hoplon.core.make_elem_ctor.call(null,"h1");
hoplon.core.h2 = hoplon.core.make_elem_ctor.call(null,"h2");
hoplon.core.h3 = hoplon.core.make_elem_ctor.call(null,"h3");
hoplon.core.h4 = hoplon.core.make_elem_ctor.call(null,"h4");
hoplon.core.h5 = hoplon.core.make_elem_ctor.call(null,"h5");
hoplon.core.h6 = hoplon.core.make_elem_ctor.call(null,"h6");
hoplon.core.header = hoplon.core.make_elem_ctor.call(null,"header");
hoplon.core.hgroup = hoplon.core.make_elem_ctor.call(null,"hgroup");
hoplon.core.hr = hoplon.core.make_elem_ctor.call(null,"hr");
hoplon.core.i = hoplon.core.make_elem_ctor.call(null,"i");
hoplon.core.iframe = hoplon.core.make_elem_ctor.call(null,"iframe");
hoplon.core.img = hoplon.core.make_elem_ctor.call(null,"img");
hoplon.core.input = hoplon.core.make_elem_ctor.call(null,"input");
hoplon.core.ins = hoplon.core.make_elem_ctor.call(null,"ins");
hoplon.core.isindex = hoplon.core.make_elem_ctor.call(null,"isindex");
hoplon.core.kbd = hoplon.core.make_elem_ctor.call(null,"kbd");
hoplon.core.keygen = hoplon.core.make_elem_ctor.call(null,"keygen");
hoplon.core.label = hoplon.core.make_elem_ctor.call(null,"label");
hoplon.core.legend = hoplon.core.make_elem_ctor.call(null,"legend");
hoplon.core.li = hoplon.core.make_elem_ctor.call(null,"li");
hoplon.core.link = hoplon.core.make_elem_ctor.call(null,"link");
hoplon.core.html_map = hoplon.core.make_elem_ctor.call(null,"map");
hoplon.core.main = hoplon.core.make_elem_ctor.call(null,"main");
hoplon.core.mark = hoplon.core.make_elem_ctor.call(null,"mark");
hoplon.core.menu = hoplon.core.make_elem_ctor.call(null,"menu");
hoplon.core.html_meta = hoplon.core.make_elem_ctor.call(null,"meta");
hoplon.core.meter = hoplon.core.make_elem_ctor.call(null,"meter");
hoplon.core.nav = hoplon.core.make_elem_ctor.call(null,"nav");
hoplon.core.noframes = hoplon.core.make_elem_ctor.call(null,"noframes");
hoplon.core.noscript = hoplon.core.make_elem_ctor.call(null,"noscript");
hoplon.core.object = hoplon.core.make_elem_ctor.call(null,"object");
hoplon.core.ol = hoplon.core.make_elem_ctor.call(null,"ol");
hoplon.core.optgroup = hoplon.core.make_elem_ctor.call(null,"optgroup");
hoplon.core.option = hoplon.core.make_elem_ctor.call(null,"option");
hoplon.core.output = hoplon.core.make_elem_ctor.call(null,"output");
hoplon.core.p = hoplon.core.make_elem_ctor.call(null,"p");
hoplon.core.param = hoplon.core.make_elem_ctor.call(null,"param");
hoplon.core.pre = hoplon.core.make_elem_ctor.call(null,"pre");
hoplon.core.progress = hoplon.core.make_elem_ctor.call(null,"progress");
hoplon.core.q = hoplon.core.make_elem_ctor.call(null,"q");
hoplon.core.rp = hoplon.core.make_elem_ctor.call(null,"rp");
hoplon.core.rt = hoplon.core.make_elem_ctor.call(null,"rt");
hoplon.core.ruby = hoplon.core.make_elem_ctor.call(null,"ruby");
hoplon.core.s = hoplon.core.make_elem_ctor.call(null,"s");
hoplon.core.samp = hoplon.core.make_elem_ctor.call(null,"samp");
hoplon.core.script = hoplon.core.make_elem_ctor.call(null,"script");
hoplon.core.section = hoplon.core.make_elem_ctor.call(null,"section");
hoplon.core.select = hoplon.core.make_elem_ctor.call(null,"select");
hoplon.core.small = hoplon.core.make_elem_ctor.call(null,"small");
hoplon.core.source = hoplon.core.make_elem_ctor.call(null,"source");
hoplon.core.span = hoplon.core.make_elem_ctor.call(null,"span");
hoplon.core.strike = hoplon.core.make_elem_ctor.call(null,"strike");
hoplon.core.strong = hoplon.core.make_elem_ctor.call(null,"strong");
hoplon.core.style = hoplon.core.make_elem_ctor.call(null,"style");
hoplon.core.sub = hoplon.core.make_elem_ctor.call(null,"sub");
hoplon.core.summary = hoplon.core.make_elem_ctor.call(null,"summary");
hoplon.core.sup = hoplon.core.make_elem_ctor.call(null,"sup");
hoplon.core.table = hoplon.core.make_elem_ctor.call(null,"table");
hoplon.core.tbody = hoplon.core.make_elem_ctor.call(null,"tbody");
hoplon.core.td = hoplon.core.make_elem_ctor.call(null,"td");
hoplon.core.textarea = hoplon.core.make_elem_ctor.call(null,"textarea");
hoplon.core.tfoot = hoplon.core.make_elem_ctor.call(null,"tfoot");
hoplon.core.th = hoplon.core.make_elem_ctor.call(null,"th");
hoplon.core.thead = hoplon.core.make_elem_ctor.call(null,"thead");
hoplon.core.html_time = hoplon.core.make_elem_ctor.call(null,"time");
hoplon.core.title = hoplon.core.make_elem_ctor.call(null,"title");
hoplon.core.tr = hoplon.core.make_elem_ctor.call(null,"tr");
hoplon.core.track = hoplon.core.make_elem_ctor.call(null,"track");
hoplon.core.tt = hoplon.core.make_elem_ctor.call(null,"tt");
hoplon.core.u = hoplon.core.make_elem_ctor.call(null,"u");
hoplon.core.ul = hoplon.core.make_elem_ctor.call(null,"ul");
hoplon.core.html_var = hoplon.core.make_elem_ctor.call(null,"var");
hoplon.core.video = hoplon.core.make_elem_ctor.call(null,"video");
hoplon.core.wbr = hoplon.core.make_elem_ctor.call(null,"wbr");
hoplon.core.spliced = cljs.core.vector;
hoplon.core.$text = (function hoplon$core$$text(p1__8704_SHARP_){
return document.createTextNode(p1__8704_SHARP_);
});
hoplon.core.$comment = (function hoplon$core$$comment(p1__8705_SHARP_){
return document.createComment(p1__8705_SHARP_);
});
hoplon.core._LT__BANG___ = hoplon.core.$comment;
hoplon.core.___GT_ = new cljs.core.Keyword("hoplon.core","-->","hoplon.core/-->",1031510657);
hoplon.core.add_initfn_BANG_ = (function hoplon$core$add_initfn_BANG_(f){
return jQuery(f);
});
hoplon.core.page_load = (function hoplon$core$page_load(){
return jQuery(document).trigger("page-load");
});
hoplon.core.on_page_load = (function hoplon$core$on_page_load(f){
return jQuery(document).on("page-load",f);
});
hoplon.core.add_initfn_BANG_.call(null,(function (){
return jQuery("body").on("submit",(function (p1__8706_SHARP_){
var e = jQuery(p1__8706_SHARP_.target);
if(cljs.core.truth_((function (){var or__5088__auto__ = e.attr("action");
if(cljs.core.truth_(or__5088__auto__)){
return or__5088__auto__;
} else {
return e.attr("method");
}
})())){
return null;
} else {
return p1__8706_SHARP_.preventDefault();
}
}));
}));
hoplon.core.text_val_BANG_ = (function hoplon$core$text_val_BANG_(var_args){
var args8707 = [];
var len__6146__auto___8710 = arguments.length;
var i__6147__auto___8711 = (0);
while(true){
if((i__6147__auto___8711 < len__6146__auto___8710)){
args8707.push((arguments[i__6147__auto___8711]));

var G__8712 = (i__6147__auto___8711 + (1));
i__6147__auto___8711 = G__8712;
continue;
} else {
}
break;
}

var G__8709 = args8707.length;
switch (G__8709) {
case 1:
return hoplon.core.text_val_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return hoplon.core.text_val_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8707.length)].join('')));

}
});

hoplon.core.text_val_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (e){
return e.val();
});

hoplon.core.text_val_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (e,v){
var v__$1 = [cljs.core.str(v)].join('');
if(cljs.core.not_EQ_.call(null,v__$1,hoplon.core.text_val_BANG_.call(null,e))){
return e.val(v__$1);
} else {
return null;
}
});

hoplon.core.text_val_BANG_.cljs$lang$maxFixedArity = 2;
hoplon.core.check_val_BANG_ = (function hoplon$core$check_val_BANG_(var_args){
var args8714 = [];
var len__6146__auto___8717 = arguments.length;
var i__6147__auto___8718 = (0);
while(true){
if((i__6147__auto___8718 < len__6146__auto___8717)){
args8714.push((arguments[i__6147__auto___8718]));

var G__8719 = (i__6147__auto___8718 + (1));
i__6147__auto___8718 = G__8719;
continue;
} else {
}
break;
}

var G__8716 = args8714.length;
switch (G__8716) {
case 1:
return hoplon.core.check_val_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return hoplon.core.check_val_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8714.length)].join('')));

}
});

hoplon.core.check_val_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (e){
return e.is(":checked");
});

hoplon.core.check_val_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (e,v){
return e.prop("checked",cljs.core.boolean$.call(null,v));
});

hoplon.core.check_val_BANG_.cljs$lang$maxFixedArity = 2;
if(typeof hoplon.core.do_BANG_ !== 'undefined'){
} else {
hoplon.core.do_BANG_ = (function (){var method_table__6001__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__6002__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__6003__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__6004__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__6005__auto__ = cljs.core.get.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword("hoplon.core","default","hoplon.core/default",-778824365)], null),new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"hoplon.core","do!"),((function (method_table__6001__auto__,prefer_table__6002__auto__,method_cache__6003__auto__,cached_hierarchy__6004__auto__,hierarchy__6005__auto__){
return (function (elem,key,val){
return key;
});})(method_table__6001__auto__,prefer_table__6002__auto__,method_cache__6003__auto__,cached_hierarchy__6004__auto__,hierarchy__6005__auto__))
,new cljs.core.Keyword("hoplon.core","default","hoplon.core/default",-778824365),hierarchy__6005__auto__,method_table__6001__auto__,prefer_table__6002__auto__,method_cache__6003__auto__,cached_hierarchy__6004__auto__));
})();
}
cljs.core._add_method.call(null,hoplon.core.do_BANG_,new cljs.core.Keyword("hoplon.core","default","hoplon.core/default",-778824365),(function (elem,key,val){
return hoplon.core.do_BANG_.call(null,elem,new cljs.core.Keyword(null,"attr","attr",-604132353),cljs.core.PersistentArrayMap.fromArray([key,val], true, false));
}));
cljs.core._add_method.call(null,hoplon.core.do_BANG_,new cljs.core.Keyword(null,"value","value",305978217),(function() { 
var G__8721__delegate = function (elem,_,args){
var e = jQuery(elem);
return cljs.core.apply.call(null,((cljs.core._EQ_.call(null,"checkbox",e.attr("type")))?hoplon.core.check_val_BANG_:hoplon.core.text_val_BANG_),e,args);
};
var G__8721 = function (elem,_,var_args){
var args = null;
if (arguments.length > 2) {
var G__8722__i = 0, G__8722__a = new Array(arguments.length -  2);
while (G__8722__i < G__8722__a.length) {G__8722__a[G__8722__i] = arguments[G__8722__i + 2]; ++G__8722__i;}
  args = new cljs.core.IndexedSeq(G__8722__a,0);
} 
return G__8721__delegate.call(this,elem,_,args);};
G__8721.cljs$lang$maxFixedArity = 2;
G__8721.cljs$lang$applyTo = (function (arglist__8723){
var elem = cljs.core.first(arglist__8723);
arglist__8723 = cljs.core.next(arglist__8723);
var _ = cljs.core.first(arglist__8723);
var args = cljs.core.rest(arglist__8723);
return G__8721__delegate(elem,_,args);
});
G__8721.cljs$core$IFn$_invoke$arity$variadic = G__8721__delegate;
return G__8721;
})()
);
cljs.core._add_method.call(null,hoplon.core.do_BANG_,new cljs.core.Keyword(null,"attr","attr",-604132353),(function (elem,_,kvs){
var e = jQuery(elem);
var seq__8724 = cljs.core.seq.call(null,kvs);
var chunk__8725 = null;
var count__8726 = (0);
var i__8727 = (0);
while(true){
if((i__8727 < count__8726)){
var vec__8728 = cljs.core._nth.call(null,chunk__8725,i__8727);
var k = cljs.core.nth.call(null,vec__8728,(0),null);
var v = cljs.core.nth.call(null,vec__8728,(1),null);
var k_8730__$1 = cljs.core.name.call(null,k);
if(cljs.core._EQ_.call(null,false,v)){
e.removeAttr(k_8730__$1);
} else {
e.attr(k_8730__$1,((cljs.core._EQ_.call(null,true,v))?k_8730__$1:v));
}

var G__8731 = seq__8724;
var G__8732 = chunk__8725;
var G__8733 = count__8726;
var G__8734 = (i__8727 + (1));
seq__8724 = G__8731;
chunk__8725 = G__8732;
count__8726 = G__8733;
i__8727 = G__8734;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__8724);
if(temp__4425__auto__){
var seq__8724__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8724__$1)){
var c__5891__auto__ = cljs.core.chunk_first.call(null,seq__8724__$1);
var G__8735 = cljs.core.chunk_rest.call(null,seq__8724__$1);
var G__8736 = c__5891__auto__;
var G__8737 = cljs.core.count.call(null,c__5891__auto__);
var G__8738 = (0);
seq__8724 = G__8735;
chunk__8725 = G__8736;
count__8726 = G__8737;
i__8727 = G__8738;
continue;
} else {
var vec__8729 = cljs.core.first.call(null,seq__8724__$1);
var k = cljs.core.nth.call(null,vec__8729,(0),null);
var v = cljs.core.nth.call(null,vec__8729,(1),null);
var k_8739__$1 = cljs.core.name.call(null,k);
if(cljs.core._EQ_.call(null,false,v)){
e.removeAttr(k_8739__$1);
} else {
e.attr(k_8739__$1,((cljs.core._EQ_.call(null,true,v))?k_8739__$1:v));
}

var G__8740 = cljs.core.next.call(null,seq__8724__$1);
var G__8741 = null;
var G__8742 = (0);
var G__8743 = (0);
seq__8724 = G__8740;
chunk__8725 = G__8741;
count__8726 = G__8742;
i__8727 = G__8743;
continue;
}
} else {
return null;
}
}
break;
}
}));
cljs.core._add_method.call(null,hoplon.core.do_BANG_,new cljs.core.Keyword(null,"class","class",-2030961996),(function (elem,_,kvs){
var elem__$1 = jQuery(elem);
var __GT_map = ((function (elem__$1){
return (function (p1__8744_SHARP_){
return cljs.core.zipmap.call(null,p1__8744_SHARP_,cljs.core.repeat.call(null,true));
});})(elem__$1))
;
var clmap = ((cljs.core.map_QMARK_.call(null,kvs))?kvs:__GT_map.call(null,((typeof kvs === 'string')?kvs.split(/\s+/):cljs.core.seq.call(null,kvs))));
var seq__8745 = cljs.core.seq.call(null,clmap);
var chunk__8746 = null;
var count__8747 = (0);
var i__8748 = (0);
while(true){
if((i__8748 < count__8747)){
var vec__8749 = cljs.core._nth.call(null,chunk__8746,i__8748);
var c = cljs.core.nth.call(null,vec__8749,(0),null);
var p_QMARK_ = cljs.core.nth.call(null,vec__8749,(1),null);
elem__$1.toggleClass(cljs.core.name.call(null,c),cljs.core.boolean$.call(null,p_QMARK_));

var G__8751 = seq__8745;
var G__8752 = chunk__8746;
var G__8753 = count__8747;
var G__8754 = (i__8748 + (1));
seq__8745 = G__8751;
chunk__8746 = G__8752;
count__8747 = G__8753;
i__8748 = G__8754;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__8745);
if(temp__4425__auto__){
var seq__8745__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8745__$1)){
var c__5891__auto__ = cljs.core.chunk_first.call(null,seq__8745__$1);
var G__8755 = cljs.core.chunk_rest.call(null,seq__8745__$1);
var G__8756 = c__5891__auto__;
var G__8757 = cljs.core.count.call(null,c__5891__auto__);
var G__8758 = (0);
seq__8745 = G__8755;
chunk__8746 = G__8756;
count__8747 = G__8757;
i__8748 = G__8758;
continue;
} else {
var vec__8750 = cljs.core.first.call(null,seq__8745__$1);
var c = cljs.core.nth.call(null,vec__8750,(0),null);
var p_QMARK_ = cljs.core.nth.call(null,vec__8750,(1),null);
elem__$1.toggleClass(cljs.core.name.call(null,c),cljs.core.boolean$.call(null,p_QMARK_));

var G__8759 = cljs.core.next.call(null,seq__8745__$1);
var G__8760 = null;
var G__8761 = (0);
var G__8762 = (0);
seq__8745 = G__8759;
chunk__8746 = G__8760;
count__8747 = G__8761;
i__8748 = G__8762;
continue;
}
} else {
return null;
}
}
break;
}
}));
cljs.core._add_method.call(null,hoplon.core.do_BANG_,new cljs.core.Keyword(null,"css","css",1135045163),(function (elem,_,kvs){
var e = jQuery(elem);
var seq__8763 = cljs.core.seq.call(null,kvs);
var chunk__8764 = null;
var count__8765 = (0);
var i__8766 = (0);
while(true){
if((i__8766 < count__8765)){
var vec__8767 = cljs.core._nth.call(null,chunk__8764,i__8766);
var k = cljs.core.nth.call(null,vec__8767,(0),null);
var v = cljs.core.nth.call(null,vec__8767,(1),null);
e.css(cljs.core.name.call(null,k),[cljs.core.str(v)].join(''));

var G__8769 = seq__8763;
var G__8770 = chunk__8764;
var G__8771 = count__8765;
var G__8772 = (i__8766 + (1));
seq__8763 = G__8769;
chunk__8764 = G__8770;
count__8765 = G__8771;
i__8766 = G__8772;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__8763);
if(temp__4425__auto__){
var seq__8763__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8763__$1)){
var c__5891__auto__ = cljs.core.chunk_first.call(null,seq__8763__$1);
var G__8773 = cljs.core.chunk_rest.call(null,seq__8763__$1);
var G__8774 = c__5891__auto__;
var G__8775 = cljs.core.count.call(null,c__5891__auto__);
var G__8776 = (0);
seq__8763 = G__8773;
chunk__8764 = G__8774;
count__8765 = G__8775;
i__8766 = G__8776;
continue;
} else {
var vec__8768 = cljs.core.first.call(null,seq__8763__$1);
var k = cljs.core.nth.call(null,vec__8768,(0),null);
var v = cljs.core.nth.call(null,vec__8768,(1),null);
e.css(cljs.core.name.call(null,k),[cljs.core.str(v)].join(''));

var G__8777 = cljs.core.next.call(null,seq__8763__$1);
var G__8778 = null;
var G__8779 = (0);
var G__8780 = (0);
seq__8763 = G__8777;
chunk__8764 = G__8778;
count__8765 = G__8779;
i__8766 = G__8780;
continue;
}
} else {
return null;
}
}
break;
}
}));
cljs.core._add_method.call(null,hoplon.core.do_BANG_,new cljs.core.Keyword(null,"toggle","toggle",1291842030),(function (elem,_,v){
return jQuery(elem).toggle(cljs.core.boolean$.call(null,v));
}));
cljs.core._add_method.call(null,hoplon.core.do_BANG_,new cljs.core.Keyword(null,"slide-toggle","slide-toggle",968641513),(function (elem,_,v){
if(cljs.core.truth_(v)){
return jQuery(elem).hide().slideDown("fast");
} else {
return jQuery(elem).slideUp("fast");
}
}));
cljs.core._add_method.call(null,hoplon.core.do_BANG_,new cljs.core.Keyword(null,"fade-toggle","fade-toggle",-1468421852),(function (elem,_,v){
if(cljs.core.truth_(v)){
return jQuery(elem).hide().fadeIn("fast");
} else {
return jQuery(elem).fadeOut("fast");
}
}));
cljs.core._add_method.call(null,hoplon.core.do_BANG_,new cljs.core.Keyword(null,"focus","focus",234677911),(function (elem,_,v){
return setTimeout((function (){
if(cljs.core.truth_(v)){
return jQuery(elem).focus();
} else {
return jQuery(elem).focusout();
}
}),(0));
}));
cljs.core._add_method.call(null,hoplon.core.do_BANG_,new cljs.core.Keyword(null,"select","select",1147833503),(function (elem,_,___$1){
return jQuery(elem).select();
}));
cljs.core._add_method.call(null,hoplon.core.do_BANG_,new cljs.core.Keyword(null,"focus-select","focus-select",1107982934),(function (elem,_,v){
if(cljs.core.truth_(v)){
hoplon.core.do_BANG_.call(null,elem,new cljs.core.Keyword(null,"focus","focus",234677911),v);

return hoplon.core.do_BANG_.call(null,elem,new cljs.core.Keyword(null,"select","select",1147833503),v);
} else {
return null;
}
}));
cljs.core._add_method.call(null,hoplon.core.do_BANG_,new cljs.core.Keyword(null,"text","text",-1790561697),(function (elem,_,v){
return jQuery(elem).text([cljs.core.str(v)].join(''));
}));
cljs.core._add_method.call(null,hoplon.core.do_BANG_,new cljs.core.Keyword(null,"html","html",-998796897),(function (elem,_,v){
return jQuery(elem).html(v);
}));
cljs.core._add_method.call(null,hoplon.core.do_BANG_,new cljs.core.Keyword(null,"scroll-to","scroll-to",-34957602),(function (elem,_,v){
if(cljs.core.truth_(v)){
var body = jQuery("body,html");
var elem__$1 = jQuery(elem);
return body.animate(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"scrollTop","scrollTop",-1143661921),elem__$1.offset().top], null)));
} else {
return null;
}
}));
if(typeof hoplon.core.on_BANG_ !== 'undefined'){
} else {
hoplon.core.on_BANG_ = (function (){var method_table__6001__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__6002__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__6003__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__6004__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__6005__auto__ = cljs.core.get.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword("hoplon.core","default","hoplon.core/default",-778824365)], null),new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"hoplon.core","on!"),((function (method_table__6001__auto__,prefer_table__6002__auto__,method_cache__6003__auto__,cached_hierarchy__6004__auto__,hierarchy__6005__auto__){
return (function (elem,event,callback){
return event;
});})(method_table__6001__auto__,prefer_table__6002__auto__,method_cache__6003__auto__,cached_hierarchy__6004__auto__,hierarchy__6005__auto__))
,new cljs.core.Keyword("hoplon.core","default","hoplon.core/default",-778824365),hierarchy__6005__auto__,method_table__6001__auto__,prefer_table__6002__auto__,method_cache__6003__auto__,cached_hierarchy__6004__auto__));
})();
}
jQuery.Event.prototype.cljs$core$IDeref$ = true;

jQuery.Event.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var this$__$1 = this;
return jQuery(this$__$1.target).val();
});
cljs.core._add_method.call(null,hoplon.core.on_BANG_,new cljs.core.Keyword("hoplon.core","default","hoplon.core/default",-778824365),(function (elem,event,callback){
return hoplon.core.when_dom.call(null,elem,(function (){
return jQuery(elem).on(cljs.core.name.call(null,event),callback);
}));
}));
hoplon.core.loop_tpl_STAR_ = (function hoplon$core$loop_tpl_STAR_(items,tpl){
var on_deck = cljs.core.atom.call(null,cljs.core.List.EMPTY);
var items_seq = javelin.core.formula.call(null,((function (on_deck){
return (function (G__8792,G__8793){
return G__8792.call(null,G__8793);
});})(on_deck))
).call(null,cljs.core.seq,items);
var ith_item = ((function (on_deck,items_seq){
return (function (p1__8781_SHARP_){
return javelin.core.formula.call(null,((function (on_deck,items_seq){
return (function (G__8795,G__8796,G__8794){
return G__8794.call(null,G__8795,G__8796);
});})(on_deck,items_seq))
).call(null,items_seq,p1__8781_SHARP_,hoplon.core.safe_nth);
});})(on_deck,items_seq))
;
var shift_BANG_ = ((function (on_deck,items_seq,ith_item){
return (function (p1__8782_SHARP_){
var x = cljs.core.first.call(null,cljs.core.deref.call(null,p1__8782_SHARP_));
cljs.core.swap_BANG_.call(null,p1__8782_SHARP_,cljs.core.rest);

return x;
});})(on_deck,items_seq,ith_item))
;
var current = javelin.core.cell.call(null,cljs.core.PersistentVector.EMPTY);
hoplon.core.do_watch.call(null,items_seq,((function (current,on_deck,items_seq,ith_item,shift_BANG_){
return (function (old_items,new_items){
var old = cljs.core.count.call(null,old_items);
var new$ = cljs.core.count.call(null,new_items);
var diff = (new$ - old);
if((diff > (0))){
var seq__8797 = cljs.core.seq.call(null,cljs.core.range.call(null,old,new$));
var chunk__8798 = null;
var count__8799 = (0);
var i__8800 = (0);
while(true){
if((i__8800 < count__8799)){
var i = cljs.core._nth.call(null,chunk__8798,i__8800);
var e_8801 = (function (){var or__5088__auto__ = shift_BANG_.call(null,on_deck);
if(cljs.core.truth_(or__5088__auto__)){
return or__5088__auto__;
} else {
return tpl.call(null,ith_item.call(null,i));
}
})();
cljs.core.swap_BANG_.call(null,current,cljs.core.conj,e_8801);

var G__8802 = seq__8797;
var G__8803 = chunk__8798;
var G__8804 = count__8799;
var G__8805 = (i__8800 + (1));
seq__8797 = G__8802;
chunk__8798 = G__8803;
count__8799 = G__8804;
i__8800 = G__8805;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__8797);
if(temp__4425__auto__){
var seq__8797__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8797__$1)){
var c__5891__auto__ = cljs.core.chunk_first.call(null,seq__8797__$1);
var G__8806 = cljs.core.chunk_rest.call(null,seq__8797__$1);
var G__8807 = c__5891__auto__;
var G__8808 = cljs.core.count.call(null,c__5891__auto__);
var G__8809 = (0);
seq__8797 = G__8806;
chunk__8798 = G__8807;
count__8799 = G__8808;
i__8800 = G__8809;
continue;
} else {
var i = cljs.core.first.call(null,seq__8797__$1);
var e_8810 = (function (){var or__5088__auto__ = shift_BANG_.call(null,on_deck);
if(cljs.core.truth_(or__5088__auto__)){
return or__5088__auto__;
} else {
return tpl.call(null,ith_item.call(null,i));
}
})();
cljs.core.swap_BANG_.call(null,current,cljs.core.conj,e_8810);

var G__8811 = cljs.core.next.call(null,seq__8797__$1);
var G__8812 = null;
var G__8813 = (0);
var G__8814 = (0);
seq__8797 = G__8811;
chunk__8798 = G__8812;
count__8799 = G__8813;
i__8800 = G__8814;
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
var e_8815 = cljs.core.peek.call(null,cljs.core.deref.call(null,current));
cljs.core.swap_BANG_.call(null,current,cljs.core.pop);

cljs.core.swap_BANG_.call(null,on_deck,cljs.core.conj,e_8815);

var G__8816 = (_ + (1));
_ = G__8816;
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
var len__6146__auto___8823 = arguments.length;
var i__6147__auto___8824 = (0);
while(true){
if((i__6147__auto___8824 < len__6146__auto___8823)){
args__6153__auto__.push((arguments[i__6147__auto___8824]));

var G__8825 = (i__6147__auto___8824 + (1));
i__6147__auto___8824 = G__8825;
continue;
} else {
}
break;
}

var argseq__6154__auto__ = ((((0) < args__6153__auto__.length))?(new cljs.core.IndexedSeq(args__6153__auto__.slice((0)),(0))):null);
return hoplon.core.route_cell.cljs$core$IFn$_invoke$arity$variadic(argseq__6154__auto__);
});

hoplon.core.route_cell.cljs$core$IFn$_invoke$arity$variadic = (function (p__8818){
var vec__8819 = p__8818;
var default$ = cljs.core.nth.call(null,vec__8819,(0),null);
var c = javelin.core.cell.call(null,window.location.hash);
var _ = javelin.core.formula.call(null,((function (c,vec__8819,default$){
return (function (G__8820,G__8822,G__8821){
var or__5088__auto__ = (function (){var and__5076__auto__ = G__8820.call(null,G__8821);
if(cljs.core.truth_(and__5076__auto__)){
return G__8821;
} else {
return and__5076__auto__;
}
})();
if(cljs.core.truth_(or__5088__auto__)){
return or__5088__auto__;
} else {
return G__8822;
}
});})(c,vec__8819,default$))
).call(null,cljs.core.seq,default$,c);
jQuery(window).on("hashchange",((function (_,c,vec__8819,default$){
return (function (){
return cljs.core.reset_BANG_.call(null,c,window.location.hash);
});})(_,c,vec__8819,default$))
);

return _;
});

hoplon.core.route_cell.cljs$lang$maxFixedArity = (0);

hoplon.core.route_cell.cljs$lang$applyTo = (function (seq8817){
return hoplon.core.route_cell.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8817));
});

//# sourceMappingURL=core.js.map