// Compiled by ClojureScript 1.7.122 {}
goog.provide('adzerk.boot_reload.reload');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('goog.Uri');
goog.require('goog.async.DeferredList');
goog.require('goog.net.jsloader');
adzerk.boot_reload.reload.page_uri = (new goog.Uri(window.location.href));
adzerk.boot_reload.reload.ends_with_QMARK_ = (function adzerk$boot_reload$reload$ends_with_QMARK_(s,pat){
return cljs.core._EQ_.call(null,pat,cljs.core.subs.call(null,s,(cljs.core.count.call(null,s) - cljs.core.count.call(null,pat))));
});
adzerk.boot_reload.reload.reload_page_BANG_ = (function adzerk$boot_reload$reload$reload_page_BANG_(){
return window.location.reload();
});
adzerk.boot_reload.reload.normalize_href_or_uri = (function adzerk$boot_reload$reload$normalize_href_or_uri(href_or_uri){
var uri = (new goog.Uri(href_or_uri));
return adzerk.boot_reload.reload.page_uri.resolve(uri).getPath();
});
adzerk.boot_reload.reload.changed_href_QMARK_ = (function adzerk$boot_reload$reload$changed_href_QMARK_(href_or_uri,changed){
if(cljs.core.truth_(href_or_uri)){
var path = adzerk.boot_reload.reload.normalize_href_or_uri.call(null,href_or_uri);
if(cljs.core.truth_(cljs.core.not_empty.call(null,cljs.core.filter.call(null,((function (path){
return (function (p1__8134_SHARP_){
return adzerk.boot_reload.reload.ends_with_QMARK_.call(null,adzerk.boot_reload.reload.normalize_href_or_uri.call(null,p1__8134_SHARP_),path);
});})(path))
,changed)))){
return goog.Uri.parse(path);
} else {
return null;
}
} else {
return null;
}
});
adzerk.boot_reload.reload.reload_css = (function adzerk$boot_reload$reload$reload_css(changed){
var sheets = document.styleSheets;
var seq__8139 = cljs.core.seq.call(null,cljs.core.range.call(null,(0),sheets.length));
var chunk__8140 = null;
var count__8141 = (0);
var i__8142 = (0);
while(true){
if((i__8142 < count__8141)){
var s = cljs.core._nth.call(null,chunk__8140,i__8142);
var temp__4425__auto___8143 = (sheets[s]);
if(cljs.core.truth_(temp__4425__auto___8143)){
var sheet_8144 = temp__4425__auto___8143;
var temp__4425__auto___8145__$1 = adzerk.boot_reload.reload.changed_href_QMARK_.call(null,sheet_8144.href,changed);
if(cljs.core.truth_(temp__4425__auto___8145__$1)){
var href_uri_8146 = temp__4425__auto___8145__$1;
sheet_8144.ownerNode.href = href_uri_8146.makeUnique().toString();
} else {
}
} else {
}

var G__8147 = seq__8139;
var G__8148 = chunk__8140;
var G__8149 = count__8141;
var G__8150 = (i__8142 + (1));
seq__8139 = G__8147;
chunk__8140 = G__8148;
count__8141 = G__8149;
i__8142 = G__8150;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__8139);
if(temp__4425__auto__){
var seq__8139__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8139__$1)){
var c__5891__auto__ = cljs.core.chunk_first.call(null,seq__8139__$1);
var G__8151 = cljs.core.chunk_rest.call(null,seq__8139__$1);
var G__8152 = c__5891__auto__;
var G__8153 = cljs.core.count.call(null,c__5891__auto__);
var G__8154 = (0);
seq__8139 = G__8151;
chunk__8140 = G__8152;
count__8141 = G__8153;
i__8142 = G__8154;
continue;
} else {
var s = cljs.core.first.call(null,seq__8139__$1);
var temp__4425__auto___8155__$1 = (sheets[s]);
if(cljs.core.truth_(temp__4425__auto___8155__$1)){
var sheet_8156 = temp__4425__auto___8155__$1;
var temp__4425__auto___8157__$2 = adzerk.boot_reload.reload.changed_href_QMARK_.call(null,sheet_8156.href,changed);
if(cljs.core.truth_(temp__4425__auto___8157__$2)){
var href_uri_8158 = temp__4425__auto___8157__$2;
sheet_8156.ownerNode.href = href_uri_8158.makeUnique().toString();
} else {
}
} else {
}

var G__8159 = cljs.core.next.call(null,seq__8139__$1);
var G__8160 = null;
var G__8161 = (0);
var G__8162 = (0);
seq__8139 = G__8159;
chunk__8140 = G__8160;
count__8141 = G__8161;
i__8142 = G__8162;
continue;
}
} else {
return null;
}
}
break;
}
});
adzerk.boot_reload.reload.reload_img = (function adzerk$boot_reload$reload$reload_img(changed){
var images = document.images;
var seq__8167 = cljs.core.seq.call(null,cljs.core.range.call(null,(0),images.length));
var chunk__8168 = null;
var count__8169 = (0);
var i__8170 = (0);
while(true){
if((i__8170 < count__8169)){
var s = cljs.core._nth.call(null,chunk__8168,i__8170);
var temp__4425__auto___8171 = (images[s]);
if(cljs.core.truth_(temp__4425__auto___8171)){
var image_8172 = temp__4425__auto___8171;
var temp__4425__auto___8173__$1 = adzerk.boot_reload.reload.changed_href_QMARK_.call(null,image_8172.src,changed);
if(cljs.core.truth_(temp__4425__auto___8173__$1)){
var href_uri_8174 = temp__4425__auto___8173__$1;
image_8172.src = href_uri_8174.makeUnique().toString();
} else {
}
} else {
}

var G__8175 = seq__8167;
var G__8176 = chunk__8168;
var G__8177 = count__8169;
var G__8178 = (i__8170 + (1));
seq__8167 = G__8175;
chunk__8168 = G__8176;
count__8169 = G__8177;
i__8170 = G__8178;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__8167);
if(temp__4425__auto__){
var seq__8167__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8167__$1)){
var c__5891__auto__ = cljs.core.chunk_first.call(null,seq__8167__$1);
var G__8179 = cljs.core.chunk_rest.call(null,seq__8167__$1);
var G__8180 = c__5891__auto__;
var G__8181 = cljs.core.count.call(null,c__5891__auto__);
var G__8182 = (0);
seq__8167 = G__8179;
chunk__8168 = G__8180;
count__8169 = G__8181;
i__8170 = G__8182;
continue;
} else {
var s = cljs.core.first.call(null,seq__8167__$1);
var temp__4425__auto___8183__$1 = (images[s]);
if(cljs.core.truth_(temp__4425__auto___8183__$1)){
var image_8184 = temp__4425__auto___8183__$1;
var temp__4425__auto___8185__$2 = adzerk.boot_reload.reload.changed_href_QMARK_.call(null,image_8184.src,changed);
if(cljs.core.truth_(temp__4425__auto___8185__$2)){
var href_uri_8186 = temp__4425__auto___8185__$2;
image_8184.src = href_uri_8186.makeUnique().toString();
} else {
}
} else {
}

var G__8187 = cljs.core.next.call(null,seq__8167__$1);
var G__8188 = null;
var G__8189 = (0);
var G__8190 = (0);
seq__8167 = G__8187;
chunk__8168 = G__8188;
count__8169 = G__8189;
i__8170 = G__8190;
continue;
}
} else {
return null;
}
}
break;
}
});
adzerk.boot_reload.reload.reload_js = (function adzerk$boot_reload$reload$reload_js(changed,p__8193){
var map__8196 = p__8193;
var map__8196__$1 = ((((!((map__8196 == null)))?((((map__8196.cljs$lang$protocol_mask$partition0$ & (64))) || (map__8196.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8196):map__8196);
var on_jsload = cljs.core.get.call(null,map__8196__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),cljs.core.identity);
var js_files = cljs.core.filter.call(null,((function (map__8196,map__8196__$1,on_jsload){
return (function (p1__8191_SHARP_){
return adzerk.boot_reload.reload.ends_with_QMARK_.call(null,p1__8191_SHARP_,".js");
});})(map__8196,map__8196__$1,on_jsload))
,changed);
if(cljs.core.seq.call(null,js_files)){
goog.async.DeferredList.gatherResults(cljs.core.clj__GT_js.call(null,cljs.core.map.call(null,((function (js_files,map__8196,map__8196__$1,on_jsload){
return (function (p1__8192_SHARP_){
return goog.net.jsloader.load(goog.Uri.parse(p1__8192_SHARP_).makeUnique());
});})(js_files,map__8196,map__8196__$1,on_jsload))
,js_files))).addCallbacks(((function (js_files,map__8196,map__8196__$1,on_jsload){
return (function() { 
var G__8198__delegate = function (_){
return on_jsload.call(null);
};
var G__8198 = function (var_args){
var _ = null;
if (arguments.length > 0) {
var G__8199__i = 0, G__8199__a = new Array(arguments.length -  0);
while (G__8199__i < G__8199__a.length) {G__8199__a[G__8199__i] = arguments[G__8199__i + 0]; ++G__8199__i;}
  _ = new cljs.core.IndexedSeq(G__8199__a,0);
} 
return G__8198__delegate.call(this,_);};
G__8198.cljs$lang$maxFixedArity = 0;
G__8198.cljs$lang$applyTo = (function (arglist__8200){
var _ = cljs.core.seq(arglist__8200);
return G__8198__delegate(_);
});
G__8198.cljs$core$IFn$_invoke$arity$variadic = G__8198__delegate;
return G__8198;
})()
;})(js_files,map__8196,map__8196__$1,on_jsload))
,((function (js_files,map__8196,map__8196__$1,on_jsload){
return (function (e){
return console.error("Load failed:",e.message);
});})(js_files,map__8196,map__8196__$1,on_jsload))
);

if(cljs.core.truth_((window["jQuery"]))){
return jQuery(document).trigger("page-load");
} else {
return null;
}
} else {
return null;
}
});
adzerk.boot_reload.reload.reload_html = (function adzerk$boot_reload$reload$reload_html(changed){
var page_path = adzerk.boot_reload.reload.page_uri.getPath();
var html_path = (cljs.core.truth_(adzerk.boot_reload.reload.ends_with_QMARK_.call(null,page_path,"/"))?[cljs.core.str(page_path),cljs.core.str("index.html")].join(''):page_path);
if(cljs.core.truth_(adzerk.boot_reload.reload.changed_href_QMARK_.call(null,html_path,changed))){
return adzerk.boot_reload.reload.reload_page_BANG_.call(null);
} else {
return null;
}
});
adzerk.boot_reload.reload.group_log = (function adzerk$boot_reload$reload$group_log(title,things_to_log){
console.groupCollapsed(title);

var seq__8205_8209 = cljs.core.seq.call(null,things_to_log);
var chunk__8206_8210 = null;
var count__8207_8211 = (0);
var i__8208_8212 = (0);
while(true){
if((i__8208_8212 < count__8207_8211)){
var t_8213 = cljs.core._nth.call(null,chunk__8206_8210,i__8208_8212);
console.log(t_8213);

var G__8214 = seq__8205_8209;
var G__8215 = chunk__8206_8210;
var G__8216 = count__8207_8211;
var G__8217 = (i__8208_8212 + (1));
seq__8205_8209 = G__8214;
chunk__8206_8210 = G__8215;
count__8207_8211 = G__8216;
i__8208_8212 = G__8217;
continue;
} else {
var temp__4425__auto___8218 = cljs.core.seq.call(null,seq__8205_8209);
if(temp__4425__auto___8218){
var seq__8205_8219__$1 = temp__4425__auto___8218;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8205_8219__$1)){
var c__5891__auto___8220 = cljs.core.chunk_first.call(null,seq__8205_8219__$1);
var G__8221 = cljs.core.chunk_rest.call(null,seq__8205_8219__$1);
var G__8222 = c__5891__auto___8220;
var G__8223 = cljs.core.count.call(null,c__5891__auto___8220);
var G__8224 = (0);
seq__8205_8209 = G__8221;
chunk__8206_8210 = G__8222;
count__8207_8211 = G__8223;
i__8208_8212 = G__8224;
continue;
} else {
var t_8225 = cljs.core.first.call(null,seq__8205_8219__$1);
console.log(t_8225);

var G__8226 = cljs.core.next.call(null,seq__8205_8219__$1);
var G__8227 = null;
var G__8228 = (0);
var G__8229 = (0);
seq__8205_8209 = G__8226;
chunk__8206_8210 = G__8227;
count__8207_8211 = G__8228;
i__8208_8212 = G__8229;
continue;
}
} else {
}
}
break;
}

return console.groupEnd();
});
adzerk.boot_reload.reload.reload = (function adzerk$boot_reload$reload$reload(changed,opts){
adzerk.boot_reload.reload.group_log.call(null,"Reload",changed);

var G__8231 = changed;
adzerk.boot_reload.reload.reload_js.call(null,G__8231,opts);

adzerk.boot_reload.reload.reload_html.call(null,G__8231);

adzerk.boot_reload.reload.reload_css.call(null,G__8231);

adzerk.boot_reload.reload.reload_img.call(null,G__8231);

return G__8231;
});

//# sourceMappingURL=reload.js.map