// Compiled by ClojureScript 1.7.122 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.Uri');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
figwheel.client.file_reloading.queued_file_reload;
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__16490__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__16490__auto__){
return or__16490__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return (goog.dependencies_.nameToPath[ns]);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return (goog.dependencies_.written[figwheel.client.file_reloading.name__GT_path.call(null,ns)]);
});
figwheel.client.file_reloading.fix_node_request_url = (function figwheel$client$file_reloading$fix_node_request_url(url){

if(cljs.core.truth_(goog.string.startsWith(url,"../"))){
return clojure.string.replace.call(null,url,"../","");
} else {
return [cljs.core.str("goog/"),cljs.core.str(url)].join('');
}
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__16490__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__16490__auto__)){
return or__16490__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__27167_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__27167_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([name], true));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([parent_ns], true));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__27172 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__27173 = null;
var count__27174 = (0);
var i__27175 = (0);
while(true){
if((i__27175 < count__27174)){
var n = cljs.core._nth.call(null,chunk__27173,i__27175);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__27176 = seq__27172;
var G__27177 = chunk__27173;
var G__27178 = count__27174;
var G__27179 = (i__27175 + (1));
seq__27172 = G__27176;
chunk__27173 = G__27177;
count__27174 = G__27178;
i__27175 = G__27179;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__27172);
if(temp__4425__auto__){
var seq__27172__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27172__$1)){
var c__17293__auto__ = cljs.core.chunk_first.call(null,seq__27172__$1);
var G__27180 = cljs.core.chunk_rest.call(null,seq__27172__$1);
var G__27181 = c__17293__auto__;
var G__27182 = cljs.core.count.call(null,c__17293__auto__);
var G__27183 = (0);
seq__27172 = G__27180;
chunk__27173 = G__27181;
count__27174 = G__27182;
i__27175 = G__27183;
continue;
} else {
var n = cljs.core.first.call(null,seq__27172__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__27184 = cljs.core.next.call(null,seq__27172__$1);
var G__27185 = null;
var G__27186 = (0);
var G__27187 = (0);
seq__27172 = G__27184;
chunk__27173 = G__27185;
count__27174 = G__27186;
i__27175 = G__27187;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__27226_27233 = cljs.core.seq.call(null,deps);
var chunk__27227_27234 = null;
var count__27228_27235 = (0);
var i__27229_27236 = (0);
while(true){
if((i__27229_27236 < count__27228_27235)){
var dep_27237 = cljs.core._nth.call(null,chunk__27227_27234,i__27229_27236);
topo_sort_helper_STAR_.call(null,dep_27237,(depth + (1)),state);

var G__27238 = seq__27226_27233;
var G__27239 = chunk__27227_27234;
var G__27240 = count__27228_27235;
var G__27241 = (i__27229_27236 + (1));
seq__27226_27233 = G__27238;
chunk__27227_27234 = G__27239;
count__27228_27235 = G__27240;
i__27229_27236 = G__27241;
continue;
} else {
var temp__4425__auto___27242 = cljs.core.seq.call(null,seq__27226_27233);
if(temp__4425__auto___27242){
var seq__27226_27243__$1 = temp__4425__auto___27242;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27226_27243__$1)){
var c__17293__auto___27244 = cljs.core.chunk_first.call(null,seq__27226_27243__$1);
var G__27245 = cljs.core.chunk_rest.call(null,seq__27226_27243__$1);
var G__27246 = c__17293__auto___27244;
var G__27247 = cljs.core.count.call(null,c__17293__auto___27244);
var G__27248 = (0);
seq__27226_27233 = G__27245;
chunk__27227_27234 = G__27246;
count__27228_27235 = G__27247;
i__27229_27236 = G__27248;
continue;
} else {
var dep_27249 = cljs.core.first.call(null,seq__27226_27243__$1);
topo_sort_helper_STAR_.call(null,dep_27249,(depth + (1)),state);

var G__27250 = cljs.core.next.call(null,seq__27226_27243__$1);
var G__27251 = null;
var G__27252 = (0);
var G__27253 = (0);
seq__27226_27233 = G__27250;
chunk__27227_27234 = G__27251;
count__27228_27235 = G__27252;
i__27229_27236 = G__27253;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__27230){
var vec__27232 = p__27230;
var x = cljs.core.nth.call(null,vec__27232,(0),null);
var xs = cljs.core.nthnext.call(null,vec__27232,(1));
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__27232,x,xs,get_deps__$1){
return (function (p1__27188_SHARP_){
return clojure.set.difference.call(null,p1__27188_SHARP_,x);
});})(vec__27232,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str(goog.basePath),cljs.core.str(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str(goog.basePath),cljs.core.str(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__27266 = cljs.core.seq.call(null,provides);
var chunk__27267 = null;
var count__27268 = (0);
var i__27269 = (0);
while(true){
if((i__27269 < count__27268)){
var prov = cljs.core._nth.call(null,chunk__27267,i__27269);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__27270_27278 = cljs.core.seq.call(null,requires);
var chunk__27271_27279 = null;
var count__27272_27280 = (0);
var i__27273_27281 = (0);
while(true){
if((i__27273_27281 < count__27272_27280)){
var req_27282 = cljs.core._nth.call(null,chunk__27271_27279,i__27273_27281);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_27282,prov);

var G__27283 = seq__27270_27278;
var G__27284 = chunk__27271_27279;
var G__27285 = count__27272_27280;
var G__27286 = (i__27273_27281 + (1));
seq__27270_27278 = G__27283;
chunk__27271_27279 = G__27284;
count__27272_27280 = G__27285;
i__27273_27281 = G__27286;
continue;
} else {
var temp__4425__auto___27287 = cljs.core.seq.call(null,seq__27270_27278);
if(temp__4425__auto___27287){
var seq__27270_27288__$1 = temp__4425__auto___27287;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27270_27288__$1)){
var c__17293__auto___27289 = cljs.core.chunk_first.call(null,seq__27270_27288__$1);
var G__27290 = cljs.core.chunk_rest.call(null,seq__27270_27288__$1);
var G__27291 = c__17293__auto___27289;
var G__27292 = cljs.core.count.call(null,c__17293__auto___27289);
var G__27293 = (0);
seq__27270_27278 = G__27290;
chunk__27271_27279 = G__27291;
count__27272_27280 = G__27292;
i__27273_27281 = G__27293;
continue;
} else {
var req_27294 = cljs.core.first.call(null,seq__27270_27288__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_27294,prov);

var G__27295 = cljs.core.next.call(null,seq__27270_27288__$1);
var G__27296 = null;
var G__27297 = (0);
var G__27298 = (0);
seq__27270_27278 = G__27295;
chunk__27271_27279 = G__27296;
count__27272_27280 = G__27297;
i__27273_27281 = G__27298;
continue;
}
} else {
}
}
break;
}

var G__27299 = seq__27266;
var G__27300 = chunk__27267;
var G__27301 = count__27268;
var G__27302 = (i__27269 + (1));
seq__27266 = G__27299;
chunk__27267 = G__27300;
count__27268 = G__27301;
i__27269 = G__27302;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__27266);
if(temp__4425__auto__){
var seq__27266__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27266__$1)){
var c__17293__auto__ = cljs.core.chunk_first.call(null,seq__27266__$1);
var G__27303 = cljs.core.chunk_rest.call(null,seq__27266__$1);
var G__27304 = c__17293__auto__;
var G__27305 = cljs.core.count.call(null,c__17293__auto__);
var G__27306 = (0);
seq__27266 = G__27303;
chunk__27267 = G__27304;
count__27268 = G__27305;
i__27269 = G__27306;
continue;
} else {
var prov = cljs.core.first.call(null,seq__27266__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__27274_27307 = cljs.core.seq.call(null,requires);
var chunk__27275_27308 = null;
var count__27276_27309 = (0);
var i__27277_27310 = (0);
while(true){
if((i__27277_27310 < count__27276_27309)){
var req_27311 = cljs.core._nth.call(null,chunk__27275_27308,i__27277_27310);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_27311,prov);

var G__27312 = seq__27274_27307;
var G__27313 = chunk__27275_27308;
var G__27314 = count__27276_27309;
var G__27315 = (i__27277_27310 + (1));
seq__27274_27307 = G__27312;
chunk__27275_27308 = G__27313;
count__27276_27309 = G__27314;
i__27277_27310 = G__27315;
continue;
} else {
var temp__4425__auto___27316__$1 = cljs.core.seq.call(null,seq__27274_27307);
if(temp__4425__auto___27316__$1){
var seq__27274_27317__$1 = temp__4425__auto___27316__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27274_27317__$1)){
var c__17293__auto___27318 = cljs.core.chunk_first.call(null,seq__27274_27317__$1);
var G__27319 = cljs.core.chunk_rest.call(null,seq__27274_27317__$1);
var G__27320 = c__17293__auto___27318;
var G__27321 = cljs.core.count.call(null,c__17293__auto___27318);
var G__27322 = (0);
seq__27274_27307 = G__27319;
chunk__27275_27308 = G__27320;
count__27276_27309 = G__27321;
i__27277_27310 = G__27322;
continue;
} else {
var req_27323 = cljs.core.first.call(null,seq__27274_27317__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_27323,prov);

var G__27324 = cljs.core.next.call(null,seq__27274_27317__$1);
var G__27325 = null;
var G__27326 = (0);
var G__27327 = (0);
seq__27274_27307 = G__27324;
chunk__27275_27308 = G__27325;
count__27276_27309 = G__27326;
i__27277_27310 = G__27327;
continue;
}
} else {
}
}
break;
}

var G__27328 = cljs.core.next.call(null,seq__27266__$1);
var G__27329 = null;
var G__27330 = (0);
var G__27331 = (0);
seq__27266 = G__27328;
chunk__27267 = G__27329;
count__27268 = G__27330;
i__27269 = G__27331;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel$client$file_reloading$figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__27336_27340 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__27337_27341 = null;
var count__27338_27342 = (0);
var i__27339_27343 = (0);
while(true){
if((i__27339_27343 < count__27338_27342)){
var ns_27344 = cljs.core._nth.call(null,chunk__27337_27341,i__27339_27343);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_27344);

var G__27345 = seq__27336_27340;
var G__27346 = chunk__27337_27341;
var G__27347 = count__27338_27342;
var G__27348 = (i__27339_27343 + (1));
seq__27336_27340 = G__27345;
chunk__27337_27341 = G__27346;
count__27338_27342 = G__27347;
i__27339_27343 = G__27348;
continue;
} else {
var temp__4425__auto___27349 = cljs.core.seq.call(null,seq__27336_27340);
if(temp__4425__auto___27349){
var seq__27336_27350__$1 = temp__4425__auto___27349;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27336_27350__$1)){
var c__17293__auto___27351 = cljs.core.chunk_first.call(null,seq__27336_27350__$1);
var G__27352 = cljs.core.chunk_rest.call(null,seq__27336_27350__$1);
var G__27353 = c__17293__auto___27351;
var G__27354 = cljs.core.count.call(null,c__17293__auto___27351);
var G__27355 = (0);
seq__27336_27340 = G__27352;
chunk__27337_27341 = G__27353;
count__27338_27342 = G__27354;
i__27339_27343 = G__27355;
continue;
} else {
var ns_27356 = cljs.core.first.call(null,seq__27336_27350__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_27356);

var G__27357 = cljs.core.next.call(null,seq__27336_27350__$1);
var G__27358 = null;
var G__27359 = (0);
var G__27360 = (0);
seq__27336_27340 = G__27357;
chunk__27337_27341 = G__27358;
count__27338_27342 = G__27359;
i__27339_27343 = G__27360;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__16490__auto__ = goog.require__;
if(cljs.core.truth_(or__16490__auto__)){
return or__16490__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__27361__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__27361 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27362__i = 0, G__27362__a = new Array(arguments.length -  0);
while (G__27362__i < G__27362__a.length) {G__27362__a[G__27362__i] = arguments[G__27362__i + 0]; ++G__27362__i;}
  args = new cljs.core.IndexedSeq(G__27362__a,0);
} 
return G__27361__delegate.call(this,args);};
G__27361.cljs$lang$maxFixedArity = 0;
G__27361.cljs$lang$applyTo = (function (arglist__27363){
var args = cljs.core.seq(arglist__27363);
return G__27361__delegate(args);
});
G__27361.cljs$core$IFn$_invoke$arity$variadic = G__27361__delegate;
return G__27361;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
;
}
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__27364 = cljs.core._EQ_;
var expr__27365 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__27364.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__27365))){
return ((function (pred__27364,expr__27365){
return (function (request_url,callback){

var root = clojure.string.join.call(null,"/",cljs.core.reverse.call(null,cljs.core.drop.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,__dirname,"/")))));
var path = [cljs.core.str(root),cljs.core.str("/"),cljs.core.str(figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))].join('');
(require.cache[path] = null);

return callback.call(null,(function (){try{return require(path);
}catch (e27367){if((e27367 instanceof Error)){
var e = e27367;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e27367;

}
}})());
});
;})(pred__27364,expr__27365))
} else {
if(cljs.core.truth_(pred__27364.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__27365))){
return ((function (pred__27364,expr__27365){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred,pred__27364,expr__27365){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__27364,expr__27365))
);

return deferred.addErrback(((function (deferred,pred__27364,expr__27365){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__27364,expr__27365))
);
});
;})(pred__27364,expr__27365))
} else {
return ((function (pred__27364,expr__27365){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__27364,expr__27365))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__27368,callback){
var map__27371 = p__27368;
var map__27371__$1 = ((((!((map__27371 == null)))?((((map__27371.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27371.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27371):map__27371);
var file_msg = map__27371__$1;
var request_url = cljs.core.get.call(null,map__27371__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__27371,map__27371__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__27371,map__27371__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__20810__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20810__auto__){
return (function (){
var f__20811__auto__ = (function (){var switch__20745__auto__ = ((function (c__20810__auto__){
return (function (state_27395){
var state_val_27396 = (state_27395[(1)]);
if((state_val_27396 === (7))){
var inst_27391 = (state_27395[(2)]);
var state_27395__$1 = state_27395;
var statearr_27397_27417 = state_27395__$1;
(statearr_27397_27417[(2)] = inst_27391);

(statearr_27397_27417[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27396 === (1))){
var state_27395__$1 = state_27395;
var statearr_27398_27418 = state_27395__$1;
(statearr_27398_27418[(2)] = null);

(statearr_27398_27418[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27396 === (4))){
var inst_27375 = (state_27395[(7)]);
var inst_27375__$1 = (state_27395[(2)]);
var state_27395__$1 = (function (){var statearr_27399 = state_27395;
(statearr_27399[(7)] = inst_27375__$1);

return statearr_27399;
})();
if(cljs.core.truth_(inst_27375__$1)){
var statearr_27400_27419 = state_27395__$1;
(statearr_27400_27419[(1)] = (5));

} else {
var statearr_27401_27420 = state_27395__$1;
(statearr_27401_27420[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27396 === (6))){
var state_27395__$1 = state_27395;
var statearr_27402_27421 = state_27395__$1;
(statearr_27402_27421[(2)] = null);

(statearr_27402_27421[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27396 === (3))){
var inst_27393 = (state_27395[(2)]);
var state_27395__$1 = state_27395;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27395__$1,inst_27393);
} else {
if((state_val_27396 === (2))){
var state_27395__$1 = state_27395;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27395__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_27396 === (11))){
var inst_27387 = (state_27395[(2)]);
var state_27395__$1 = (function (){var statearr_27403 = state_27395;
(statearr_27403[(8)] = inst_27387);

return statearr_27403;
})();
var statearr_27404_27422 = state_27395__$1;
(statearr_27404_27422[(2)] = null);

(statearr_27404_27422[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27396 === (9))){
var inst_27381 = (state_27395[(9)]);
var inst_27379 = (state_27395[(10)]);
var inst_27383 = inst_27381.call(null,inst_27379);
var state_27395__$1 = state_27395;
var statearr_27405_27423 = state_27395__$1;
(statearr_27405_27423[(2)] = inst_27383);

(statearr_27405_27423[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27396 === (5))){
var inst_27375 = (state_27395[(7)]);
var inst_27377 = figwheel.client.file_reloading.blocking_load.call(null,inst_27375);
var state_27395__$1 = state_27395;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27395__$1,(8),inst_27377);
} else {
if((state_val_27396 === (10))){
var inst_27379 = (state_27395[(10)]);
var inst_27385 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_27379);
var state_27395__$1 = state_27395;
var statearr_27406_27424 = state_27395__$1;
(statearr_27406_27424[(2)] = inst_27385);

(statearr_27406_27424[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27396 === (8))){
var inst_27381 = (state_27395[(9)]);
var inst_27375 = (state_27395[(7)]);
var inst_27379 = (state_27395[(2)]);
var inst_27380 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_27381__$1 = cljs.core.get.call(null,inst_27380,inst_27375);
var state_27395__$1 = (function (){var statearr_27407 = state_27395;
(statearr_27407[(9)] = inst_27381__$1);

(statearr_27407[(10)] = inst_27379);

return statearr_27407;
})();
if(cljs.core.truth_(inst_27381__$1)){
var statearr_27408_27425 = state_27395__$1;
(statearr_27408_27425[(1)] = (9));

} else {
var statearr_27409_27426 = state_27395__$1;
(statearr_27409_27426[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__20810__auto__))
;
return ((function (switch__20745__auto__,c__20810__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__20746__auto__ = null;
var figwheel$client$file_reloading$state_machine__20746__auto____0 = (function (){
var statearr_27413 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27413[(0)] = figwheel$client$file_reloading$state_machine__20746__auto__);

(statearr_27413[(1)] = (1));

return statearr_27413;
});
var figwheel$client$file_reloading$state_machine__20746__auto____1 = (function (state_27395){
while(true){
var ret_value__20747__auto__ = (function (){try{while(true){
var result__20748__auto__ = switch__20745__auto__.call(null,state_27395);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20748__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20748__auto__;
}
break;
}
}catch (e27414){if((e27414 instanceof Object)){
var ex__20749__auto__ = e27414;
var statearr_27415_27427 = state_27395;
(statearr_27415_27427[(5)] = ex__20749__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27395);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27414;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20747__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27428 = state_27395;
state_27395 = G__27428;
continue;
} else {
return ret_value__20747__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__20746__auto__ = function(state_27395){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__20746__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__20746__auto____1.call(this,state_27395);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__20746__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__20746__auto____0;
figwheel$client$file_reloading$state_machine__20746__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__20746__auto____1;
return figwheel$client$file_reloading$state_machine__20746__auto__;
})()
;})(switch__20745__auto__,c__20810__auto__))
})();
var state__20812__auto__ = (function (){var statearr_27416 = f__20811__auto__.call(null);
(statearr_27416[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20810__auto__);

return statearr_27416;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20812__auto__);
});})(c__20810__auto__))
);

return c__20810__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__27429,callback){
var map__27432 = p__27429;
var map__27432__$1 = ((((!((map__27432 == null)))?((((map__27432.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27432.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27432):map__27432);
var file_msg = map__27432__$1;
var namespace = cljs.core.get.call(null,map__27432__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__27432,map__27432__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__27432,map__27432__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__27434){
var map__27437 = p__27434;
var map__27437__$1 = ((((!((map__27437 == null)))?((((map__27437.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27437.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27437):map__27437);
var file_msg = map__27437__$1;
var namespace = cljs.core.get.call(null,map__27437__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__16478__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__16478__auto__){
var or__16490__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__16490__auto__)){
return or__16490__auto__;
} else {
var or__16490__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__16490__auto____$1)){
return or__16490__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__16478__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__27439,callback){
var map__27442 = p__27439;
var map__27442__$1 = ((((!((map__27442 == null)))?((((map__27442.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27442.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27442):map__27442);
var file_msg = map__27442__$1;
var request_url = cljs.core.get.call(null,map__27442__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__27442__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__20810__auto___27530 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20810__auto___27530,out){
return (function (){
var f__20811__auto__ = (function (){var switch__20745__auto__ = ((function (c__20810__auto___27530,out){
return (function (state_27512){
var state_val_27513 = (state_27512[(1)]);
if((state_val_27513 === (1))){
var inst_27490 = cljs.core.nth.call(null,files,(0),null);
var inst_27491 = cljs.core.nthnext.call(null,files,(1));
var inst_27492 = files;
var state_27512__$1 = (function (){var statearr_27514 = state_27512;
(statearr_27514[(7)] = inst_27492);

(statearr_27514[(8)] = inst_27491);

(statearr_27514[(9)] = inst_27490);

return statearr_27514;
})();
var statearr_27515_27531 = state_27512__$1;
(statearr_27515_27531[(2)] = null);

(statearr_27515_27531[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27513 === (2))){
var inst_27492 = (state_27512[(7)]);
var inst_27495 = (state_27512[(10)]);
var inst_27495__$1 = cljs.core.nth.call(null,inst_27492,(0),null);
var inst_27496 = cljs.core.nthnext.call(null,inst_27492,(1));
var inst_27497 = (inst_27495__$1 == null);
var inst_27498 = cljs.core.not.call(null,inst_27497);
var state_27512__$1 = (function (){var statearr_27516 = state_27512;
(statearr_27516[(11)] = inst_27496);

(statearr_27516[(10)] = inst_27495__$1);

return statearr_27516;
})();
if(inst_27498){
var statearr_27517_27532 = state_27512__$1;
(statearr_27517_27532[(1)] = (4));

} else {
var statearr_27518_27533 = state_27512__$1;
(statearr_27518_27533[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27513 === (3))){
var inst_27510 = (state_27512[(2)]);
var state_27512__$1 = state_27512;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27512__$1,inst_27510);
} else {
if((state_val_27513 === (4))){
var inst_27495 = (state_27512[(10)]);
var inst_27500 = figwheel.client.file_reloading.reload_js_file.call(null,inst_27495);
var state_27512__$1 = state_27512;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27512__$1,(7),inst_27500);
} else {
if((state_val_27513 === (5))){
var inst_27506 = cljs.core.async.close_BANG_.call(null,out);
var state_27512__$1 = state_27512;
var statearr_27519_27534 = state_27512__$1;
(statearr_27519_27534[(2)] = inst_27506);

(statearr_27519_27534[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27513 === (6))){
var inst_27508 = (state_27512[(2)]);
var state_27512__$1 = state_27512;
var statearr_27520_27535 = state_27512__$1;
(statearr_27520_27535[(2)] = inst_27508);

(statearr_27520_27535[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27513 === (7))){
var inst_27496 = (state_27512[(11)]);
var inst_27502 = (state_27512[(2)]);
var inst_27503 = cljs.core.async.put_BANG_.call(null,out,inst_27502);
var inst_27492 = inst_27496;
var state_27512__$1 = (function (){var statearr_27521 = state_27512;
(statearr_27521[(12)] = inst_27503);

(statearr_27521[(7)] = inst_27492);

return statearr_27521;
})();
var statearr_27522_27536 = state_27512__$1;
(statearr_27522_27536[(2)] = null);

(statearr_27522_27536[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__20810__auto___27530,out))
;
return ((function (switch__20745__auto__,c__20810__auto___27530,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__20746__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__20746__auto____0 = (function (){
var statearr_27526 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27526[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__20746__auto__);

(statearr_27526[(1)] = (1));

return statearr_27526;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__20746__auto____1 = (function (state_27512){
while(true){
var ret_value__20747__auto__ = (function (){try{while(true){
var result__20748__auto__ = switch__20745__auto__.call(null,state_27512);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20748__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20748__auto__;
}
break;
}
}catch (e27527){if((e27527 instanceof Object)){
var ex__20749__auto__ = e27527;
var statearr_27528_27537 = state_27512;
(statearr_27528_27537[(5)] = ex__20749__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27512);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27527;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20747__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27538 = state_27512;
state_27512 = G__27538;
continue;
} else {
return ret_value__20747__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__20746__auto__ = function(state_27512){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__20746__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__20746__auto____1.call(this,state_27512);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__20746__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__20746__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__20746__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__20746__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__20746__auto__;
})()
;})(switch__20745__auto__,c__20810__auto___27530,out))
})();
var state__20812__auto__ = (function (){var statearr_27529 = f__20811__auto__.call(null);
(statearr_27529[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20810__auto___27530);

return statearr_27529;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20812__auto__);
});})(c__20810__auto___27530,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__27539,opts){
var map__27543 = p__27539;
var map__27543__$1 = ((((!((map__27543 == null)))?((((map__27543.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27543.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27543):map__27543);
var eval_body__$1 = cljs.core.get.call(null,map__27543__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__27543__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__16478__auto__ = eval_body__$1;
if(cljs.core.truth_(and__16478__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__16478__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e27545){var e = e27545;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["figwheel.connect",null], null), null),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4423__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__27546_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__27546_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4423__auto__)){
var file_msg = temp__4423__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__27551){
var vec__27552 = p__27551;
var k = cljs.core.nth.call(null,vec__27552,(0),null);
var v = cljs.core.nth.call(null,vec__27552,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__27553){
var vec__27554 = p__27553;
var k = cljs.core.nth.call(null,vec__27554,(0),null);
var v = cljs.core.nth.call(null,vec__27554,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__27558,p__27559){
var map__27806 = p__27558;
var map__27806__$1 = ((((!((map__27806 == null)))?((((map__27806.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27806.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27806):map__27806);
var opts = map__27806__$1;
var before_jsload = cljs.core.get.call(null,map__27806__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__27806__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__27806__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__27807 = p__27559;
var map__27807__$1 = ((((!((map__27807 == null)))?((((map__27807.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27807.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27807):map__27807);
var msg = map__27807__$1;
var files = cljs.core.get.call(null,map__27807__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__27807__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__27807__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__20810__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20810__auto__,map__27806,map__27806__$1,opts,before_jsload,on_jsload,reload_dependents,map__27807,map__27807__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__20811__auto__ = (function (){var switch__20745__auto__ = ((function (c__20810__auto__,map__27806,map__27806__$1,opts,before_jsload,on_jsload,reload_dependents,map__27807,map__27807__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_27960){
var state_val_27961 = (state_27960[(1)]);
if((state_val_27961 === (7))){
var inst_27823 = (state_27960[(7)]);
var inst_27824 = (state_27960[(8)]);
var inst_27821 = (state_27960[(9)]);
var inst_27822 = (state_27960[(10)]);
var inst_27829 = cljs.core._nth.call(null,inst_27822,inst_27824);
var inst_27830 = figwheel.client.file_reloading.eval_body.call(null,inst_27829,opts);
var inst_27831 = (inst_27824 + (1));
var tmp27962 = inst_27823;
var tmp27963 = inst_27821;
var tmp27964 = inst_27822;
var inst_27821__$1 = tmp27963;
var inst_27822__$1 = tmp27964;
var inst_27823__$1 = tmp27962;
var inst_27824__$1 = inst_27831;
var state_27960__$1 = (function (){var statearr_27965 = state_27960;
(statearr_27965[(11)] = inst_27830);

(statearr_27965[(7)] = inst_27823__$1);

(statearr_27965[(8)] = inst_27824__$1);

(statearr_27965[(9)] = inst_27821__$1);

(statearr_27965[(10)] = inst_27822__$1);

return statearr_27965;
})();
var statearr_27966_28052 = state_27960__$1;
(statearr_27966_28052[(2)] = null);

(statearr_27966_28052[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27961 === (20))){
var inst_27864 = (state_27960[(12)]);
var inst_27872 = figwheel.client.file_reloading.sort_files.call(null,inst_27864);
var state_27960__$1 = state_27960;
var statearr_27967_28053 = state_27960__$1;
(statearr_27967_28053[(2)] = inst_27872);

(statearr_27967_28053[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27961 === (27))){
var state_27960__$1 = state_27960;
var statearr_27968_28054 = state_27960__$1;
(statearr_27968_28054[(2)] = null);

(statearr_27968_28054[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27961 === (1))){
var inst_27813 = (state_27960[(13)]);
var inst_27810 = before_jsload.call(null,files);
var inst_27811 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_27812 = (function (){return ((function (inst_27813,inst_27810,inst_27811,state_val_27961,c__20810__auto__,map__27806,map__27806__$1,opts,before_jsload,on_jsload,reload_dependents,map__27807,map__27807__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__27555_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__27555_SHARP_);
});
;})(inst_27813,inst_27810,inst_27811,state_val_27961,c__20810__auto__,map__27806,map__27806__$1,opts,before_jsload,on_jsload,reload_dependents,map__27807,map__27807__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27813__$1 = cljs.core.filter.call(null,inst_27812,files);
var inst_27814 = cljs.core.not_empty.call(null,inst_27813__$1);
var state_27960__$1 = (function (){var statearr_27969 = state_27960;
(statearr_27969[(14)] = inst_27811);

(statearr_27969[(13)] = inst_27813__$1);

(statearr_27969[(15)] = inst_27810);

return statearr_27969;
})();
if(cljs.core.truth_(inst_27814)){
var statearr_27970_28055 = state_27960__$1;
(statearr_27970_28055[(1)] = (2));

} else {
var statearr_27971_28056 = state_27960__$1;
(statearr_27971_28056[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27961 === (24))){
var state_27960__$1 = state_27960;
var statearr_27972_28057 = state_27960__$1;
(statearr_27972_28057[(2)] = null);

(statearr_27972_28057[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27961 === (39))){
var inst_27914 = (state_27960[(16)]);
var state_27960__$1 = state_27960;
var statearr_27973_28058 = state_27960__$1;
(statearr_27973_28058[(2)] = inst_27914);

(statearr_27973_28058[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27961 === (46))){
var inst_27955 = (state_27960[(2)]);
var state_27960__$1 = state_27960;
var statearr_27974_28059 = state_27960__$1;
(statearr_27974_28059[(2)] = inst_27955);

(statearr_27974_28059[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27961 === (4))){
var inst_27858 = (state_27960[(2)]);
var inst_27859 = cljs.core.List.EMPTY;
var inst_27860 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_27859);
var inst_27861 = (function (){return ((function (inst_27858,inst_27859,inst_27860,state_val_27961,c__20810__auto__,map__27806,map__27806__$1,opts,before_jsload,on_jsload,reload_dependents,map__27807,map__27807__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__27556_SHARP_){
var and__16478__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__27556_SHARP_);
if(cljs.core.truth_(and__16478__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__27556_SHARP_));
} else {
return and__16478__auto__;
}
});
;})(inst_27858,inst_27859,inst_27860,state_val_27961,c__20810__auto__,map__27806,map__27806__$1,opts,before_jsload,on_jsload,reload_dependents,map__27807,map__27807__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27862 = cljs.core.filter.call(null,inst_27861,files);
var inst_27863 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_27864 = cljs.core.concat.call(null,inst_27862,inst_27863);
var state_27960__$1 = (function (){var statearr_27975 = state_27960;
(statearr_27975[(17)] = inst_27860);

(statearr_27975[(12)] = inst_27864);

(statearr_27975[(18)] = inst_27858);

return statearr_27975;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_27976_28060 = state_27960__$1;
(statearr_27976_28060[(1)] = (16));

} else {
var statearr_27977_28061 = state_27960__$1;
(statearr_27977_28061[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27961 === (15))){
var inst_27848 = (state_27960[(2)]);
var state_27960__$1 = state_27960;
var statearr_27978_28062 = state_27960__$1;
(statearr_27978_28062[(2)] = inst_27848);

(statearr_27978_28062[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27961 === (21))){
var inst_27874 = (state_27960[(19)]);
var inst_27874__$1 = (state_27960[(2)]);
var inst_27875 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_27874__$1);
var state_27960__$1 = (function (){var statearr_27979 = state_27960;
(statearr_27979[(19)] = inst_27874__$1);

return statearr_27979;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27960__$1,(22),inst_27875);
} else {
if((state_val_27961 === (31))){
var inst_27958 = (state_27960[(2)]);
var state_27960__$1 = state_27960;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27960__$1,inst_27958);
} else {
if((state_val_27961 === (32))){
var inst_27914 = (state_27960[(16)]);
var inst_27919 = inst_27914.cljs$lang$protocol_mask$partition0$;
var inst_27920 = (inst_27919 & (64));
var inst_27921 = inst_27914.cljs$core$ISeq$;
var inst_27922 = (inst_27920) || (inst_27921);
var state_27960__$1 = state_27960;
if(cljs.core.truth_(inst_27922)){
var statearr_27980_28063 = state_27960__$1;
(statearr_27980_28063[(1)] = (35));

} else {
var statearr_27981_28064 = state_27960__$1;
(statearr_27981_28064[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27961 === (40))){
var inst_27935 = (state_27960[(20)]);
var inst_27934 = (state_27960[(2)]);
var inst_27935__$1 = cljs.core.get.call(null,inst_27934,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_27936 = cljs.core.get.call(null,inst_27934,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_27937 = cljs.core.not_empty.call(null,inst_27935__$1);
var state_27960__$1 = (function (){var statearr_27982 = state_27960;
(statearr_27982[(20)] = inst_27935__$1);

(statearr_27982[(21)] = inst_27936);

return statearr_27982;
})();
if(cljs.core.truth_(inst_27937)){
var statearr_27983_28065 = state_27960__$1;
(statearr_27983_28065[(1)] = (41));

} else {
var statearr_27984_28066 = state_27960__$1;
(statearr_27984_28066[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27961 === (33))){
var state_27960__$1 = state_27960;
var statearr_27985_28067 = state_27960__$1;
(statearr_27985_28067[(2)] = false);

(statearr_27985_28067[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27961 === (13))){
var inst_27834 = (state_27960[(22)]);
var inst_27838 = cljs.core.chunk_first.call(null,inst_27834);
var inst_27839 = cljs.core.chunk_rest.call(null,inst_27834);
var inst_27840 = cljs.core.count.call(null,inst_27838);
var inst_27821 = inst_27839;
var inst_27822 = inst_27838;
var inst_27823 = inst_27840;
var inst_27824 = (0);
var state_27960__$1 = (function (){var statearr_27986 = state_27960;
(statearr_27986[(7)] = inst_27823);

(statearr_27986[(8)] = inst_27824);

(statearr_27986[(9)] = inst_27821);

(statearr_27986[(10)] = inst_27822);

return statearr_27986;
})();
var statearr_27987_28068 = state_27960__$1;
(statearr_27987_28068[(2)] = null);

(statearr_27987_28068[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27961 === (22))){
var inst_27882 = (state_27960[(23)]);
var inst_27874 = (state_27960[(19)]);
var inst_27877 = (state_27960[(24)]);
var inst_27878 = (state_27960[(25)]);
var inst_27877__$1 = (state_27960[(2)]);
var inst_27878__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_27877__$1);
var inst_27879 = (function (){var all_files = inst_27874;
var res_SINGLEQUOTE_ = inst_27877__$1;
var res = inst_27878__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_27882,inst_27874,inst_27877,inst_27878,inst_27877__$1,inst_27878__$1,state_val_27961,c__20810__auto__,map__27806,map__27806__$1,opts,before_jsload,on_jsload,reload_dependents,map__27807,map__27807__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__27557_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__27557_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_27882,inst_27874,inst_27877,inst_27878,inst_27877__$1,inst_27878__$1,state_val_27961,c__20810__auto__,map__27806,map__27806__$1,opts,before_jsload,on_jsload,reload_dependents,map__27807,map__27807__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27880 = cljs.core.filter.call(null,inst_27879,inst_27877__$1);
var inst_27881 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_27882__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_27881);
var inst_27883 = cljs.core.not_empty.call(null,inst_27882__$1);
var state_27960__$1 = (function (){var statearr_27988 = state_27960;
(statearr_27988[(23)] = inst_27882__$1);

(statearr_27988[(26)] = inst_27880);

(statearr_27988[(24)] = inst_27877__$1);

(statearr_27988[(25)] = inst_27878__$1);

return statearr_27988;
})();
if(cljs.core.truth_(inst_27883)){
var statearr_27989_28069 = state_27960__$1;
(statearr_27989_28069[(1)] = (23));

} else {
var statearr_27990_28070 = state_27960__$1;
(statearr_27990_28070[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27961 === (36))){
var state_27960__$1 = state_27960;
var statearr_27991_28071 = state_27960__$1;
(statearr_27991_28071[(2)] = false);

(statearr_27991_28071[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27961 === (41))){
var inst_27935 = (state_27960[(20)]);
var inst_27939 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_27940 = cljs.core.map.call(null,inst_27939,inst_27935);
var inst_27941 = cljs.core.pr_str.call(null,inst_27940);
var inst_27942 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_27941)].join('');
var inst_27943 = figwheel.client.utils.log.call(null,inst_27942);
var state_27960__$1 = state_27960;
var statearr_27992_28072 = state_27960__$1;
(statearr_27992_28072[(2)] = inst_27943);

(statearr_27992_28072[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27961 === (43))){
var inst_27936 = (state_27960[(21)]);
var inst_27946 = (state_27960[(2)]);
var inst_27947 = cljs.core.not_empty.call(null,inst_27936);
var state_27960__$1 = (function (){var statearr_27993 = state_27960;
(statearr_27993[(27)] = inst_27946);

return statearr_27993;
})();
if(cljs.core.truth_(inst_27947)){
var statearr_27994_28073 = state_27960__$1;
(statearr_27994_28073[(1)] = (44));

} else {
var statearr_27995_28074 = state_27960__$1;
(statearr_27995_28074[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27961 === (29))){
var inst_27882 = (state_27960[(23)]);
var inst_27874 = (state_27960[(19)]);
var inst_27914 = (state_27960[(16)]);
var inst_27880 = (state_27960[(26)]);
var inst_27877 = (state_27960[(24)]);
var inst_27878 = (state_27960[(25)]);
var inst_27910 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_27913 = (function (){var all_files = inst_27874;
var res_SINGLEQUOTE_ = inst_27877;
var res = inst_27878;
var files_not_loaded = inst_27880;
var dependencies_that_loaded = inst_27882;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27882,inst_27874,inst_27914,inst_27880,inst_27877,inst_27878,inst_27910,state_val_27961,c__20810__auto__,map__27806,map__27806__$1,opts,before_jsload,on_jsload,reload_dependents,map__27807,map__27807__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__27912){
var map__27996 = p__27912;
var map__27996__$1 = ((((!((map__27996 == null)))?((((map__27996.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27996.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27996):map__27996);
var namespace = cljs.core.get.call(null,map__27996__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27882,inst_27874,inst_27914,inst_27880,inst_27877,inst_27878,inst_27910,state_val_27961,c__20810__auto__,map__27806,map__27806__$1,opts,before_jsload,on_jsload,reload_dependents,map__27807,map__27807__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27914__$1 = cljs.core.group_by.call(null,inst_27913,inst_27880);
var inst_27916 = (inst_27914__$1 == null);
var inst_27917 = cljs.core.not.call(null,inst_27916);
var state_27960__$1 = (function (){var statearr_27998 = state_27960;
(statearr_27998[(28)] = inst_27910);

(statearr_27998[(16)] = inst_27914__$1);

return statearr_27998;
})();
if(inst_27917){
var statearr_27999_28075 = state_27960__$1;
(statearr_27999_28075[(1)] = (32));

} else {
var statearr_28000_28076 = state_27960__$1;
(statearr_28000_28076[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27961 === (44))){
var inst_27936 = (state_27960[(21)]);
var inst_27949 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_27936);
var inst_27950 = cljs.core.pr_str.call(null,inst_27949);
var inst_27951 = [cljs.core.str("not required: "),cljs.core.str(inst_27950)].join('');
var inst_27952 = figwheel.client.utils.log.call(null,inst_27951);
var state_27960__$1 = state_27960;
var statearr_28001_28077 = state_27960__$1;
(statearr_28001_28077[(2)] = inst_27952);

(statearr_28001_28077[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27961 === (6))){
var inst_27855 = (state_27960[(2)]);
var state_27960__$1 = state_27960;
var statearr_28002_28078 = state_27960__$1;
(statearr_28002_28078[(2)] = inst_27855);

(statearr_28002_28078[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27961 === (28))){
var inst_27880 = (state_27960[(26)]);
var inst_27907 = (state_27960[(2)]);
var inst_27908 = cljs.core.not_empty.call(null,inst_27880);
var state_27960__$1 = (function (){var statearr_28003 = state_27960;
(statearr_28003[(29)] = inst_27907);

return statearr_28003;
})();
if(cljs.core.truth_(inst_27908)){
var statearr_28004_28079 = state_27960__$1;
(statearr_28004_28079[(1)] = (29));

} else {
var statearr_28005_28080 = state_27960__$1;
(statearr_28005_28080[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27961 === (25))){
var inst_27878 = (state_27960[(25)]);
var inst_27894 = (state_27960[(2)]);
var inst_27895 = cljs.core.not_empty.call(null,inst_27878);
var state_27960__$1 = (function (){var statearr_28006 = state_27960;
(statearr_28006[(30)] = inst_27894);

return statearr_28006;
})();
if(cljs.core.truth_(inst_27895)){
var statearr_28007_28081 = state_27960__$1;
(statearr_28007_28081[(1)] = (26));

} else {
var statearr_28008_28082 = state_27960__$1;
(statearr_28008_28082[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27961 === (34))){
var inst_27929 = (state_27960[(2)]);
var state_27960__$1 = state_27960;
if(cljs.core.truth_(inst_27929)){
var statearr_28009_28083 = state_27960__$1;
(statearr_28009_28083[(1)] = (38));

} else {
var statearr_28010_28084 = state_27960__$1;
(statearr_28010_28084[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27961 === (17))){
var state_27960__$1 = state_27960;
var statearr_28011_28085 = state_27960__$1;
(statearr_28011_28085[(2)] = recompile_dependents);

(statearr_28011_28085[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27961 === (3))){
var state_27960__$1 = state_27960;
var statearr_28012_28086 = state_27960__$1;
(statearr_28012_28086[(2)] = null);

(statearr_28012_28086[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27961 === (12))){
var inst_27851 = (state_27960[(2)]);
var state_27960__$1 = state_27960;
var statearr_28013_28087 = state_27960__$1;
(statearr_28013_28087[(2)] = inst_27851);

(statearr_28013_28087[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27961 === (2))){
var inst_27813 = (state_27960[(13)]);
var inst_27820 = cljs.core.seq.call(null,inst_27813);
var inst_27821 = inst_27820;
var inst_27822 = null;
var inst_27823 = (0);
var inst_27824 = (0);
var state_27960__$1 = (function (){var statearr_28014 = state_27960;
(statearr_28014[(7)] = inst_27823);

(statearr_28014[(8)] = inst_27824);

(statearr_28014[(9)] = inst_27821);

(statearr_28014[(10)] = inst_27822);

return statearr_28014;
})();
var statearr_28015_28088 = state_27960__$1;
(statearr_28015_28088[(2)] = null);

(statearr_28015_28088[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27961 === (23))){
var inst_27882 = (state_27960[(23)]);
var inst_27874 = (state_27960[(19)]);
var inst_27880 = (state_27960[(26)]);
var inst_27877 = (state_27960[(24)]);
var inst_27878 = (state_27960[(25)]);
var inst_27885 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_27887 = (function (){var all_files = inst_27874;
var res_SINGLEQUOTE_ = inst_27877;
var res = inst_27878;
var files_not_loaded = inst_27880;
var dependencies_that_loaded = inst_27882;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27882,inst_27874,inst_27880,inst_27877,inst_27878,inst_27885,state_val_27961,c__20810__auto__,map__27806,map__27806__$1,opts,before_jsload,on_jsload,reload_dependents,map__27807,map__27807__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__27886){
var map__28016 = p__27886;
var map__28016__$1 = ((((!((map__28016 == null)))?((((map__28016.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28016.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28016):map__28016);
var request_url = cljs.core.get.call(null,map__28016__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27882,inst_27874,inst_27880,inst_27877,inst_27878,inst_27885,state_val_27961,c__20810__auto__,map__27806,map__27806__$1,opts,before_jsload,on_jsload,reload_dependents,map__27807,map__27807__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27888 = cljs.core.reverse.call(null,inst_27882);
var inst_27889 = cljs.core.map.call(null,inst_27887,inst_27888);
var inst_27890 = cljs.core.pr_str.call(null,inst_27889);
var inst_27891 = figwheel.client.utils.log.call(null,inst_27890);
var state_27960__$1 = (function (){var statearr_28018 = state_27960;
(statearr_28018[(31)] = inst_27885);

return statearr_28018;
})();
var statearr_28019_28089 = state_27960__$1;
(statearr_28019_28089[(2)] = inst_27891);

(statearr_28019_28089[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27961 === (35))){
var state_27960__$1 = state_27960;
var statearr_28020_28090 = state_27960__$1;
(statearr_28020_28090[(2)] = true);

(statearr_28020_28090[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27961 === (19))){
var inst_27864 = (state_27960[(12)]);
var inst_27870 = figwheel.client.file_reloading.expand_files.call(null,inst_27864);
var state_27960__$1 = state_27960;
var statearr_28021_28091 = state_27960__$1;
(statearr_28021_28091[(2)] = inst_27870);

(statearr_28021_28091[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27961 === (11))){
var state_27960__$1 = state_27960;
var statearr_28022_28092 = state_27960__$1;
(statearr_28022_28092[(2)] = null);

(statearr_28022_28092[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27961 === (9))){
var inst_27853 = (state_27960[(2)]);
var state_27960__$1 = state_27960;
var statearr_28023_28093 = state_27960__$1;
(statearr_28023_28093[(2)] = inst_27853);

(statearr_28023_28093[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27961 === (5))){
var inst_27823 = (state_27960[(7)]);
var inst_27824 = (state_27960[(8)]);
var inst_27826 = (inst_27824 < inst_27823);
var inst_27827 = inst_27826;
var state_27960__$1 = state_27960;
if(cljs.core.truth_(inst_27827)){
var statearr_28024_28094 = state_27960__$1;
(statearr_28024_28094[(1)] = (7));

} else {
var statearr_28025_28095 = state_27960__$1;
(statearr_28025_28095[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27961 === (14))){
var inst_27834 = (state_27960[(22)]);
var inst_27843 = cljs.core.first.call(null,inst_27834);
var inst_27844 = figwheel.client.file_reloading.eval_body.call(null,inst_27843,opts);
var inst_27845 = cljs.core.next.call(null,inst_27834);
var inst_27821 = inst_27845;
var inst_27822 = null;
var inst_27823 = (0);
var inst_27824 = (0);
var state_27960__$1 = (function (){var statearr_28026 = state_27960;
(statearr_28026[(32)] = inst_27844);

(statearr_28026[(7)] = inst_27823);

(statearr_28026[(8)] = inst_27824);

(statearr_28026[(9)] = inst_27821);

(statearr_28026[(10)] = inst_27822);

return statearr_28026;
})();
var statearr_28027_28096 = state_27960__$1;
(statearr_28027_28096[(2)] = null);

(statearr_28027_28096[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27961 === (45))){
var state_27960__$1 = state_27960;
var statearr_28028_28097 = state_27960__$1;
(statearr_28028_28097[(2)] = null);

(statearr_28028_28097[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27961 === (26))){
var inst_27882 = (state_27960[(23)]);
var inst_27874 = (state_27960[(19)]);
var inst_27880 = (state_27960[(26)]);
var inst_27877 = (state_27960[(24)]);
var inst_27878 = (state_27960[(25)]);
var inst_27897 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_27899 = (function (){var all_files = inst_27874;
var res_SINGLEQUOTE_ = inst_27877;
var res = inst_27878;
var files_not_loaded = inst_27880;
var dependencies_that_loaded = inst_27882;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27882,inst_27874,inst_27880,inst_27877,inst_27878,inst_27897,state_val_27961,c__20810__auto__,map__27806,map__27806__$1,opts,before_jsload,on_jsload,reload_dependents,map__27807,map__27807__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__27898){
var map__28029 = p__27898;
var map__28029__$1 = ((((!((map__28029 == null)))?((((map__28029.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28029.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28029):map__28029);
var namespace = cljs.core.get.call(null,map__28029__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__28029__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27882,inst_27874,inst_27880,inst_27877,inst_27878,inst_27897,state_val_27961,c__20810__auto__,map__27806,map__27806__$1,opts,before_jsload,on_jsload,reload_dependents,map__27807,map__27807__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27900 = cljs.core.map.call(null,inst_27899,inst_27878);
var inst_27901 = cljs.core.pr_str.call(null,inst_27900);
var inst_27902 = figwheel.client.utils.log.call(null,inst_27901);
var inst_27903 = (function (){var all_files = inst_27874;
var res_SINGLEQUOTE_ = inst_27877;
var res = inst_27878;
var files_not_loaded = inst_27880;
var dependencies_that_loaded = inst_27882;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27882,inst_27874,inst_27880,inst_27877,inst_27878,inst_27897,inst_27899,inst_27900,inst_27901,inst_27902,state_val_27961,c__20810__auto__,map__27806,map__27806__$1,opts,before_jsload,on_jsload,reload_dependents,map__27807,map__27807__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27882,inst_27874,inst_27880,inst_27877,inst_27878,inst_27897,inst_27899,inst_27900,inst_27901,inst_27902,state_val_27961,c__20810__auto__,map__27806,map__27806__$1,opts,before_jsload,on_jsload,reload_dependents,map__27807,map__27807__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27904 = setTimeout(inst_27903,(10));
var state_27960__$1 = (function (){var statearr_28031 = state_27960;
(statearr_28031[(33)] = inst_27897);

(statearr_28031[(34)] = inst_27902);

return statearr_28031;
})();
var statearr_28032_28098 = state_27960__$1;
(statearr_28032_28098[(2)] = inst_27904);

(statearr_28032_28098[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27961 === (16))){
var state_27960__$1 = state_27960;
var statearr_28033_28099 = state_27960__$1;
(statearr_28033_28099[(2)] = reload_dependents);

(statearr_28033_28099[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27961 === (38))){
var inst_27914 = (state_27960[(16)]);
var inst_27931 = cljs.core.apply.call(null,cljs.core.hash_map,inst_27914);
var state_27960__$1 = state_27960;
var statearr_28034_28100 = state_27960__$1;
(statearr_28034_28100[(2)] = inst_27931);

(statearr_28034_28100[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27961 === (30))){
var state_27960__$1 = state_27960;
var statearr_28035_28101 = state_27960__$1;
(statearr_28035_28101[(2)] = null);

(statearr_28035_28101[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27961 === (10))){
var inst_27834 = (state_27960[(22)]);
var inst_27836 = cljs.core.chunked_seq_QMARK_.call(null,inst_27834);
var state_27960__$1 = state_27960;
if(inst_27836){
var statearr_28036_28102 = state_27960__$1;
(statearr_28036_28102[(1)] = (13));

} else {
var statearr_28037_28103 = state_27960__$1;
(statearr_28037_28103[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27961 === (18))){
var inst_27868 = (state_27960[(2)]);
var state_27960__$1 = state_27960;
if(cljs.core.truth_(inst_27868)){
var statearr_28038_28104 = state_27960__$1;
(statearr_28038_28104[(1)] = (19));

} else {
var statearr_28039_28105 = state_27960__$1;
(statearr_28039_28105[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27961 === (42))){
var state_27960__$1 = state_27960;
var statearr_28040_28106 = state_27960__$1;
(statearr_28040_28106[(2)] = null);

(statearr_28040_28106[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27961 === (37))){
var inst_27926 = (state_27960[(2)]);
var state_27960__$1 = state_27960;
var statearr_28041_28107 = state_27960__$1;
(statearr_28041_28107[(2)] = inst_27926);

(statearr_28041_28107[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27961 === (8))){
var inst_27834 = (state_27960[(22)]);
var inst_27821 = (state_27960[(9)]);
var inst_27834__$1 = cljs.core.seq.call(null,inst_27821);
var state_27960__$1 = (function (){var statearr_28042 = state_27960;
(statearr_28042[(22)] = inst_27834__$1);

return statearr_28042;
})();
if(inst_27834__$1){
var statearr_28043_28108 = state_27960__$1;
(statearr_28043_28108[(1)] = (10));

} else {
var statearr_28044_28109 = state_27960__$1;
(statearr_28044_28109[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__20810__auto__,map__27806,map__27806__$1,opts,before_jsload,on_jsload,reload_dependents,map__27807,map__27807__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__20745__auto__,c__20810__auto__,map__27806,map__27806__$1,opts,before_jsload,on_jsload,reload_dependents,map__27807,map__27807__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__20746__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__20746__auto____0 = (function (){
var statearr_28048 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28048[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__20746__auto__);

(statearr_28048[(1)] = (1));

return statearr_28048;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__20746__auto____1 = (function (state_27960){
while(true){
var ret_value__20747__auto__ = (function (){try{while(true){
var result__20748__auto__ = switch__20745__auto__.call(null,state_27960);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20748__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20748__auto__;
}
break;
}
}catch (e28049){if((e28049 instanceof Object)){
var ex__20749__auto__ = e28049;
var statearr_28050_28110 = state_27960;
(statearr_28050_28110[(5)] = ex__20749__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27960);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28049;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20747__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28111 = state_27960;
state_27960 = G__28111;
continue;
} else {
return ret_value__20747__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__20746__auto__ = function(state_27960){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__20746__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__20746__auto____1.call(this,state_27960);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__20746__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__20746__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__20746__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__20746__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__20746__auto__;
})()
;})(switch__20745__auto__,c__20810__auto__,map__27806,map__27806__$1,opts,before_jsload,on_jsload,reload_dependents,map__27807,map__27807__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__20812__auto__ = (function (){var statearr_28051 = f__20811__auto__.call(null);
(statearr_28051[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20810__auto__);

return statearr_28051;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20812__auto__);
});})(c__20810__auto__,map__27806,map__27806__$1,opts,before_jsload,on_jsload,reload_dependents,map__27807,map__27807__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__20810__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__28114,link){
var map__28117 = p__28114;
var map__28117__$1 = ((((!((map__28117 == null)))?((((map__28117.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28117.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28117):map__28117);
var file = cljs.core.get.call(null,map__28117__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = link.href;
if(cljs.core.truth_(temp__4425__auto__)){
var link_href = temp__4425__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4425__auto__,map__28117,map__28117__$1,file){
return (function (p1__28112_SHARP_,p2__28113_SHARP_){
if(cljs.core._EQ_.call(null,p1__28112_SHARP_,p2__28113_SHARP_)){
return p1__28112_SHARP_;
} else {
return false;
}
});})(link_href,temp__4425__auto__,map__28117,map__28117__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4425__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__28123){
var map__28124 = p__28123;
var map__28124__$1 = ((((!((map__28124 == null)))?((((map__28124.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28124.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28124):map__28124);
var match_length = cljs.core.get.call(null,map__28124__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__28124__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__28119_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__28119_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4425__auto__)){
var res = temp__4425__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(var_args){
var args28126 = [];
var len__17548__auto___28129 = arguments.length;
var i__17549__auto___28130 = (0);
while(true){
if((i__17549__auto___28130 < len__17548__auto___28129)){
args28126.push((arguments[i__17549__auto___28130]));

var G__28131 = (i__17549__auto___28130 + (1));
i__17549__auto___28130 = G__28131;
continue;
} else {
}
break;
}

var G__28128 = args28126.length;
switch (G__28128) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28126.length)].join('')));

}
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;
figwheel.client.file_reloading.distictify = (function figwheel$client$file_reloading$distictify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__28133_SHARP_,p2__28134_SHARP_){
return cljs.core.assoc.call(null,p1__28133_SHARP_,cljs.core.get.call(null,p2__28134_SHARP_,key),p2__28134_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__28135){
var map__28138 = p__28135;
var map__28138__$1 = ((((!((map__28138 == null)))?((((map__28138.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28138.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28138):map__28138);
var f_data = map__28138__$1;
var file = cljs.core.get.call(null,map__28138__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4425__auto__)){
var link = temp__4425__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__28140,files_msg){
var map__28147 = p__28140;
var map__28147__$1 = ((((!((map__28147 == null)))?((((map__28147.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28147.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28147):map__28147);
var opts = map__28147__$1;
var on_cssload = cljs.core.get.call(null,map__28147__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__28149_28153 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__28150_28154 = null;
var count__28151_28155 = (0);
var i__28152_28156 = (0);
while(true){
if((i__28152_28156 < count__28151_28155)){
var f_28157 = cljs.core._nth.call(null,chunk__28150_28154,i__28152_28156);
figwheel.client.file_reloading.reload_css_file.call(null,f_28157);

var G__28158 = seq__28149_28153;
var G__28159 = chunk__28150_28154;
var G__28160 = count__28151_28155;
var G__28161 = (i__28152_28156 + (1));
seq__28149_28153 = G__28158;
chunk__28150_28154 = G__28159;
count__28151_28155 = G__28160;
i__28152_28156 = G__28161;
continue;
} else {
var temp__4425__auto___28162 = cljs.core.seq.call(null,seq__28149_28153);
if(temp__4425__auto___28162){
var seq__28149_28163__$1 = temp__4425__auto___28162;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28149_28163__$1)){
var c__17293__auto___28164 = cljs.core.chunk_first.call(null,seq__28149_28163__$1);
var G__28165 = cljs.core.chunk_rest.call(null,seq__28149_28163__$1);
var G__28166 = c__17293__auto___28164;
var G__28167 = cljs.core.count.call(null,c__17293__auto___28164);
var G__28168 = (0);
seq__28149_28153 = G__28165;
chunk__28150_28154 = G__28166;
count__28151_28155 = G__28167;
i__28152_28156 = G__28168;
continue;
} else {
var f_28169 = cljs.core.first.call(null,seq__28149_28163__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_28169);

var G__28170 = cljs.core.next.call(null,seq__28149_28163__$1);
var G__28171 = null;
var G__28172 = (0);
var G__28173 = (0);
seq__28149_28153 = G__28170;
chunk__28150_28154 = G__28171;
count__28151_28155 = G__28172;
i__28152_28156 = G__28173;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__28147,map__28147__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__28147,map__28147__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1441995398183