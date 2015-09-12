// Compiled by ClojureScript 1.7.122 {}
goog.provide('nagger.core');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('om.dom');
goog.require('nagger.util');
goog.require('goog.string.format');
goog.require('clojure.string');
goog.require('om.core');
cljs.core.enable_console_print_BANG_.call(null);
cljs.core.println.call(null,"Edits to this text should show up in your developer console.");
nagger.core.dur_dict = (function nagger$core$dur_dict(mode){
var dict = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"work","work",385770312),(((52) * (60)) * (1000)),new cljs.core.Keyword(null,"play","play",-580418022),(((17) * (60)) * (1000))], null);
return cljs.core.get.call(null,dict,mode);
});
nagger.core.messages = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"work","work",385770312),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, ["You're not on reddit, are you?","Facebook is distracting, isn't it?","Cup noodles are bad.","Remember, sweets make you sleepy.","Concentrate.","Don't let this message disturb you.","Have an apple.","You only have at most less than an hour before you can take a break!"], null),new cljs.core.Keyword(null,"play","play",-580418022),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Are you resting?","Take a walk!","I wish I were with you.","Don't think about work!","Think about me instead.","You better not be working!"], null)], null);
nagger.core.sample_message = (function nagger$core$sample_message(mode){
var mode_messages = cljs.core.get.call(null,nagger.core.messages,mode);
return cljs.core.nth.call(null,mode_messages,cljs.core.rand_int.call(null,cljs.core.count.call(null,mode_messages)));
});
if(typeof nagger.core.app_state !== 'undefined'){
} else {
nagger.core.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"target-time","target-time",302557789),(Date.now() + nagger.core.dur_dict.call(null,new cljs.core.Keyword(null,"work","work",385770312))),new cljs.core.Keyword(null,"current-time","current-time",-1609407134),Date.now(),new cljs.core.Keyword(null,"mode","mode",654403691),new cljs.core.Keyword(null,"work","work",385770312),new cljs.core.Keyword(null,"current-message","current-message",893209772),nagger.core.sample_message.call(null,new cljs.core.Keyword(null,"work","work",385770312)),new cljs.core.Keyword(null,"message-interval","message-interval",632722956),(((3) * (60)) * (1000)),new cljs.core.Keyword(null,"last-message-sent","last-message-sent",-34733925),Date.now()], null));
}
nagger.core.split_time_UTC = (function nagger$core$split_time_UTC(time){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"hours","hours",58380855),nagger.util.pad_two.call(null,time.getUTCHours()),new cljs.core.Keyword(null,"minutes","minutes",1319166394),nagger.util.pad_two.call(null,time.getUTCMinutes()),new cljs.core.Keyword(null,"seconds","seconds",-445266194),nagger.util.pad_two.call(null,time.getUTCSeconds())], null);
});
nagger.core.polar_loader = (function nagger$core$polar_loader(p__20417,owner){
var map__20423 = p__20417;
var map__20423__$1 = ((((!((map__20423 == null)))?((((map__20423.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20423.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20423):map__20423);
var percentage = cljs.core.get.call(null,map__20423__$1,new cljs.core.Keyword(null,"percentage","percentage",-1610213650));
var progress_thickness = cljs.core.get.call(null,map__20423__$1,new cljs.core.Keyword(null,"progress-thickness","progress-thickness",1667814017));
if(typeof nagger.core.t_nagger$core20425 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
nagger.core.t_nagger$core20425 = (function (polar_loader,p__20417,owner,map__20423,percentage,progress_thickness,meta20426){
this.polar_loader = polar_loader;
this.p__20417 = p__20417;
this.owner = owner;
this.map__20423 = map__20423;
this.percentage = percentage;
this.progress_thickness = progress_thickness;
this.meta20426 = meta20426;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
nagger.core.t_nagger$core20425.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__20423,map__20423__$1,percentage,progress_thickness){
return (function (_20427,meta20426__$1){
var self__ = this;
var _20427__$1 = this;
return (new nagger.core.t_nagger$core20425(self__.polar_loader,self__.p__20417,self__.owner,self__.map__20423,self__.percentage,self__.progress_thickness,meta20426__$1));
});})(map__20423,map__20423__$1,percentage,progress_thickness))
;

nagger.core.t_nagger$core20425.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__20423,map__20423__$1,percentage,progress_thickness){
return (function (_20427){
var self__ = this;
var _20427__$1 = this;
return self__.meta20426;
});})(map__20423,map__20423__$1,percentage,progress_thickness))
;

nagger.core.t_nagger$core20425.prototype.om$core$IRender$ = true;

nagger.core.t_nagger$core20425.prototype.om$core$IRender$render$arity$1 = ((function (map__20423,map__20423__$1,percentage,progress_thickness){
return (function (this$){
var self__ = this;
var this$__$1 = this;
var PI = Math.PI;
var theta = (((self__.percentage * (2)) * PI) - (0.5 * PI));
var init_x = (50);
var init_y = (50);
var radius = ((50) - (self__.progress_thickness / (2)));
var x = (init_x + (radius * Math.cos(theta)));
var y = (init_y + (radius * Math.sin(theta)));
var d_vec = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["M",init_x,(init_y - radius)], null),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, ["A",radius,radius,(0),(((theta > (0.5 * PI)))?(1):(0)),(1),x,y], null)], null);
return React.DOM.svg({"className": "polar-loader", "viewBox": "0 0 100 100"},React.DOM.circle({"className": "loader-elem track", "cx": init_x, "cy": init_y, "r": radius}),(((self__.percentage <= (1)))?React.DOM.path({"className": "loader-elem progress", "strokeWidth": self__.progress_thickness, "d": clojure.string.join.call(null," ",cljs.core.flatten.call(null,d_vec))}):null));
});})(map__20423,map__20423__$1,percentage,progress_thickness))
;

nagger.core.t_nagger$core20425.getBasis = ((function (map__20423,map__20423__$1,percentage,progress_thickness){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"polar-loader","polar-loader",-764530353,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"percentage","percentage",30317877,null),new cljs.core.Symbol(null,"progress-thickness","progress-thickness",-986621752,null)], null)], null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"p__20417","p__20417",-772470758,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"map__20423","map__20423",-1613681459,null),new cljs.core.Symbol(null,"percentage","percentage",30317877,null),new cljs.core.Symbol(null,"progress-thickness","progress-thickness",-986621752,null),new cljs.core.Symbol(null,"meta20426","meta20426",-1553826775,null)], null);
});})(map__20423,map__20423__$1,percentage,progress_thickness))
;

nagger.core.t_nagger$core20425.cljs$lang$type = true;

nagger.core.t_nagger$core20425.cljs$lang$ctorStr = "nagger.core/t_nagger$core20425";

nagger.core.t_nagger$core20425.cljs$lang$ctorPrWriter = ((function (map__20423,map__20423__$1,percentage,progress_thickness){
return (function (this__17088__auto__,writer__17089__auto__,opt__17090__auto__){
return cljs.core._write.call(null,writer__17089__auto__,"nagger.core/t_nagger$core20425");
});})(map__20423,map__20423__$1,percentage,progress_thickness))
;

nagger.core.__GT_t_nagger$core20425 = ((function (map__20423,map__20423__$1,percentage,progress_thickness){
return (function nagger$core$polar_loader_$___GT_t_nagger$core20425(polar_loader__$1,p__20417__$1,owner__$1,map__20423__$2,percentage__$1,progress_thickness__$1,meta20426){
return (new nagger.core.t_nagger$core20425(polar_loader__$1,p__20417__$1,owner__$1,map__20423__$2,percentage__$1,progress_thickness__$1,meta20426));
});})(map__20423,map__20423__$1,percentage,progress_thickness))
;

}

return (new nagger.core.t_nagger$core20425(nagger$core$polar_loader,p__20417,owner,map__20423__$1,percentage,progress_thickness,cljs.core.PersistentArrayMap.EMPTY));
});
if(typeof nagger.core.interval !== 'undefined'){
} else {
nagger.core.interval = setInterval((function (){
var cursor = om.core.root_cursor.call(null,nagger.core.app_state);
var target_time = new cljs.core.Keyword(null,"target-time","target-time",302557789).cljs$core$IFn$_invoke$arity$1(cursor);
var current_time = new cljs.core.Keyword(null,"current-time","current-time",-1609407134).cljs$core$IFn$_invoke$arity$1(cursor);
var last_message_sent = new cljs.core.Keyword(null,"last-message-sent","last-message-sent",-34733925).cljs$core$IFn$_invoke$arity$1(cursor);
var message_interval = new cljs.core.Keyword(null,"message-interval","message-interval",632722956).cljs$core$IFn$_invoke$arity$1(cursor);
var mode = new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1(cursor);
om.core.update_BANG_.call(null,cursor,new cljs.core.Keyword(null,"current-time","current-time",-1609407134),Date.now());

if(((current_time - last_message_sent) >= message_interval)){
om.core.transact_BANG_.call(null,cursor,new cljs.core.Keyword(null,"current-message","current-message",893209772),((function (cursor,target_time,current_time,last_message_sent,message_interval,mode){
return (function (){
return nagger.core.sample_message.call(null,mode);
});})(cursor,target_time,current_time,last_message_sent,message_interval,mode))
);

om.core.update_BANG_.call(null,cursor,new cljs.core.Keyword(null,"last-message-sent","last-message-sent",-34733925),current_time);
} else {
}

if((target_time <= current_time)){
om.core.transact_BANG_.call(null,cursor,new cljs.core.Keyword(null,"current-message","current-message",893209772),((function (cursor,target_time,current_time,last_message_sent,message_interval,mode){
return (function (){
return nagger.core.sample_message.call(null,((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"work","work",385770312)))?new cljs.core.Keyword(null,"play","play",-580418022):new cljs.core.Keyword(null,"work","work",385770312)));
});})(cursor,target_time,current_time,last_message_sent,message_interval,mode))
);

om.core.update_BANG_.call(null,cursor,new cljs.core.Keyword(null,"last-message-sent","last-message-sent",-34733925),current_time);

om.core.update_BANG_.call(null,cursor,new cljs.core.Keyword(null,"mode","mode",654403691),((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"work","work",385770312)))?new cljs.core.Keyword(null,"play","play",-580418022):new cljs.core.Keyword(null,"work","work",385770312)));

om.core.transact_BANG_.call(null,cursor,new cljs.core.Keyword(null,"target-time","target-time",302557789),((function (cursor,target_time,current_time,last_message_sent,message_interval,mode){
return (function (p1__20428_SHARP_){
return (p1__20428_SHARP_ + nagger.core.dur_dict.call(null,((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"work","work",385770312)))?new cljs.core.Keyword(null,"play","play",-580418022):new cljs.core.Keyword(null,"work","work",385770312))));
});})(cursor,target_time,current_time,last_message_sent,message_interval,mode))
);

return window.alert([cljs.core.str(cljs.core.get.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"play","play",-580418022),"Play",new cljs.core.Keyword(null,"work","work",385770312),"Work"], null),mode)),cljs.core.str("time!")].join(''));
} else {
return null;
}
}),(16));
}
nagger.core.countdown = (function nagger$core$countdown(cursor,owner){
if(typeof nagger.core.t_nagger$core20434 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
nagger.core.t_nagger$core20434 = (function (countdown,cursor,owner,meta20435){
this.countdown = countdown;
this.cursor = cursor;
this.owner = owner;
this.meta20435 = meta20435;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
nagger.core.t_nagger$core20434.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20436,meta20435__$1){
var self__ = this;
var _20436__$1 = this;
return (new nagger.core.t_nagger$core20434(self__.countdown,self__.cursor,self__.owner,meta20435__$1));
});

nagger.core.t_nagger$core20434.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20436){
var self__ = this;
var _20436__$1 = this;
return self__.meta20435;
});

nagger.core.t_nagger$core20434.prototype.om$core$IRender$ = true;

nagger.core.t_nagger$core20434.prototype.om$core$IRender$render$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var target_time = new cljs.core.Keyword(null,"target-time","target-time",302557789).cljs$core$IFn$_invoke$arity$1(self__.cursor);
var current_time = new cljs.core.Keyword(null,"current-time","current-time",-1609407134).cljs$core$IFn$_invoke$arity$1(self__.cursor);
var current_count = nagger.util.second_round.call(null,(target_time - current_time));
var map__20437 = nagger.core.split_time_UTC.call(null,(new Date(current_count)));
var map__20437__$1 = ((((!((map__20437 == null)))?((((map__20437.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20437.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20437):map__20437);
var _ = cljs.core.get.call(null,map__20437__$1,new cljs.core.Keyword(null,"_","_",1453416199));
var minutes = cljs.core.get.call(null,map__20437__$1,new cljs.core.Keyword(null,"minutes","minutes",1319166394));
var seconds = cljs.core.get.call(null,map__20437__$1,new cljs.core.Keyword(null,"seconds","seconds",-445266194));
return React.DOM.div({"className": "timer"},minutes,":",seconds);
});

nagger.core.t_nagger$core20434.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"countdown","countdown",171717531,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta20435","meta20435",1019823617,null)], null);
});

nagger.core.t_nagger$core20434.cljs$lang$type = true;

nagger.core.t_nagger$core20434.cljs$lang$ctorStr = "nagger.core/t_nagger$core20434";

nagger.core.t_nagger$core20434.cljs$lang$ctorPrWriter = (function (this__17088__auto__,writer__17089__auto__,opt__17090__auto__){
return cljs.core._write.call(null,writer__17089__auto__,"nagger.core/t_nagger$core20434");
});

nagger.core.__GT_t_nagger$core20434 = (function nagger$core$countdown_$___GT_t_nagger$core20434(countdown__$1,cursor__$1,owner__$1,meta20435){
return (new nagger.core.t_nagger$core20434(countdown__$1,cursor__$1,owner__$1,meta20435));
});

}

return (new nagger.core.t_nagger$core20434(nagger$core$countdown,cursor,owner,cljs.core.PersistentArrayMap.EMPTY));
});
om.core.root.call(null,(function (data,owner){
if(typeof nagger.core.t_nagger$core20439 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
nagger.core.t_nagger$core20439 = (function (data,owner,meta20440){
this.data = data;
this.owner = owner;
this.meta20440 = meta20440;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
nagger.core.t_nagger$core20439.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20441,meta20440__$1){
var self__ = this;
var _20441__$1 = this;
return (new nagger.core.t_nagger$core20439(self__.data,self__.owner,meta20440__$1));
});

nagger.core.t_nagger$core20439.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20441){
var self__ = this;
var _20441__$1 = this;
return self__.meta20440;
});

nagger.core.t_nagger$core20439.prototype.om$core$IRender$ = true;

nagger.core.t_nagger$core20439.prototype.om$core$IRender$render$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var mode = new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1(self__.data);
var labels = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"work","work",385770312),"Work",new cljs.core.Keyword(null,"play","play",-580418022),"Play"], null);
var percentage = ((1) - ((new cljs.core.Keyword(null,"target-time","target-time",302557789).cljs$core$IFn$_invoke$arity$1(self__.data) - new cljs.core.Keyword(null,"current-time","current-time",-1609407134).cljs$core$IFn$_invoke$arity$1(self__.data)) / nagger.core.dur_dict.call(null,new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1(self__.data))));
return React.DOM.div({"className": clojure.string.join.call(null," ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["container",cljs.core.get.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"play","play",-580418022),"play",new cljs.core.Keyword(null,"work","work",385770312),"work"], null),new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1(self__.data))], null))},React.DOM.h3({"className": "message"},"Happy birthday, Romina!"),React.DOM.div({"className": "nagger"},React.DOM.div({"className": "clock-container"},React.DOM.div({"className": "clock"},React.DOM.h2(null,cljs.core.get.call(null,labels,mode)),React.DOM.h1(null,om.core.build.call(null,nagger.core.countdown,self__.data))),om.core.build.call(null,nagger.core.polar_loader,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"percentage","percentage",-1610213650),percentage,new cljs.core.Keyword(null,"progress-thickness","progress-thickness",1667814017),(6)], null)),React.DOM.div({"className": clojure.string.join.call(null," ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["wiper","play-wiper",((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1(self__.data),new cljs.core.Keyword(null,"play","play",-580418022)))?"active":null)], null))}),React.DOM.div({"className": clojure.string.join.call(null," ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["wiper","work-wiper",((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1(self__.data),new cljs.core.Keyword(null,"work","work",385770312)))?"active":null)], null))}))),React.DOM.h3({"className": "message"},new cljs.core.Keyword(null,"current-message","current-message",893209772).cljs$core$IFn$_invoke$arity$1(self__.data)));
});

nagger.core.t_nagger$core20439.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta20440","meta20440",971000844,null)], null);
});

nagger.core.t_nagger$core20439.cljs$lang$type = true;

nagger.core.t_nagger$core20439.cljs$lang$ctorStr = "nagger.core/t_nagger$core20439";

nagger.core.t_nagger$core20439.cljs$lang$ctorPrWriter = (function (this__17088__auto__,writer__17089__auto__,opt__17090__auto__){
return cljs.core._write.call(null,writer__17089__auto__,"nagger.core/t_nagger$core20439");
});

nagger.core.__GT_t_nagger$core20439 = (function nagger$core$__GT_t_nagger$core20439(data__$1,owner__$1,meta20440){
return (new nagger.core.t_nagger$core20439(data__$1,owner__$1,meta20440));
});

}

return (new nagger.core.t_nagger$core20439(data,owner,cljs.core.PersistentArrayMap.EMPTY));
}),nagger.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("app")], null));
nagger.core.on_js_reload = (function nagger$core$on_js_reload(){
return null;
});

//# sourceMappingURL=core.js.map?rel=1442078523856