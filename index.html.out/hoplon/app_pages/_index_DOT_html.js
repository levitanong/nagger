// Compiled by ClojureScript 1.7.122 {:static-fns true, :optimize-constants true}
goog.provide('hoplon.app_pages._index_DOT_html');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('hoplon.svg');
goog.require('nagger.util');
goog.require('javelin.core');
goog.require('hoplon.core');
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$viewBox,(function (elem,_,value){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,value)){
return elem.removeAttribute("viewBox");
} else {
return elem.setAttribute("viewBox",value);
}
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$class,(function (elem,_,kvs){
var __GT_map = (function (p1__11924_SHARP_){
return cljs.core.zipmap(p1__11924_SHARP_,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(true));
});
var clmap = ((cljs.core.map_QMARK_(kvs))?kvs:__GT_map(((typeof kvs === 'string')?kvs.split(/\s+/):cljs.core.seq(kvs))));
var cl = elem.classList;
var seq__11925 = cljs.core.seq(clmap);
var chunk__11926 = null;
var count__11927 = (0);
var i__11928 = (0);
while(true){
if((i__11928 < count__11927)){
var vec__11929 = chunk__11926.cljs$core$IIndexed$_nth$arity$2(null,i__11928);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11929,(0),null);
var p_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11929,(1),null);
cl.toggle(cljs.core.name(c),cljs.core.boolean$(p_QMARK_));

var G__11931 = seq__11925;
var G__11932 = chunk__11926;
var G__11933 = count__11927;
var G__11934 = (i__11928 + (1));
seq__11925 = G__11931;
chunk__11926 = G__11932;
count__11927 = G__11933;
i__11928 = G__11934;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__11925);
if(temp__4425__auto__){
var seq__11925__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__11925__$1)){
var c__5891__auto__ = cljs.core.chunk_first(seq__11925__$1);
var G__11935 = cljs.core.chunk_rest(seq__11925__$1);
var G__11936 = c__5891__auto__;
var G__11937 = cljs.core.count(c__5891__auto__);
var G__11938 = (0);
seq__11925 = G__11935;
chunk__11926 = G__11936;
count__11927 = G__11937;
i__11928 = G__11938;
continue;
} else {
var vec__11930 = cljs.core.first(seq__11925__$1);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11930,(0),null);
var p_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11930,(1),null);
cl.toggle(cljs.core.name(c),cljs.core.boolean$(p_QMARK_));

var G__11939 = cljs.core.next(seq__11925__$1);
var G__11940 = null;
var G__11941 = (0);
var G__11942 = (0);
seq__11925 = G__11939;
chunk__11926 = G__11940;
count__11927 = G__11941;
i__11928 = G__11942;
continue;
}
} else {
return null;
}
}
break;
}
}));
if(typeof hoplon.app_pages._index_DOT_html.beep !== 'undefined'){
} else {
hoplon.app_pages._index_DOT_html.beep = (new Audio("beep.mp3"));
}
hoplon.app_pages._index_DOT_html.split_time_UTC = (function hoplon$app_pages$_index_DOT_html$split_time_UTC(time){
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$hours,nagger.util.pad((2),time.getUTCHours()),cljs.core.cst$kw$minutes,nagger.util.pad((2),time.getUTCMinutes()),cljs.core.cst$kw$seconds,nagger.util.pad((2),time.getUTCSeconds())], null);
});
hoplon.app_pages._index_DOT_html.modes = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$name,"Work",cljs.core.cst$kw$duration,(((52) * (60)) * (1000)),cljs.core.cst$kw$messages,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, ["You're not on reddit, are you?","Facebook is distracting, isn't it?","Work, slave!","Remember, sweets make you sleepy.","Concentrate.","Don't let this message disturb you.","Have an apple.","You only have at most less than an hour before you can take a break!"], null)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$name,"Play",cljs.core.cst$kw$duration,(((17) * (60)) * (1000)),cljs.core.cst$kw$messages,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Are you resting?","Take a walk!","I wish I were with you.","Don't think about work!","Think about me instead.","You better not be working!"], null)], null)], null);
/**
 * A donut-shaped progress bar
 * @param {...*} var_args
 */
hoplon.app_pages._index_DOT_html.polar_progress = (function() { 
var hoplon$app_pages$_index_DOT_html$polar_progress__delegate = function (args__8330__auto__){
var vec__11984 = hoplon.core.parse_args(args__8330__auto__);
var map__11985 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11984,(0),null);
var map__11985__$1 = ((((!((map__11985 == null)))?((((map__11985.cljs$lang$protocol_mask$partition0$ & (64))) || (map__11985.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11985):map__11985);
var percentage = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11985__$1,cljs.core.cst$kw$percentage);
var thickness = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11985__$1,cljs.core.cst$kw$thickness);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11984,(1),null);
var PI = Math.PI;
var p = javelin.core.formula(((function (PI,vec__11984,map__11985,map__11985__$1,percentage,thickness,_){
return (function (G__11987){
return Math.floor(((100) * G__11987));
});})(PI,vec__11984,map__11985,map__11985__$1,percentage,thickness,_))
).call(null,percentage);
var theta = javelin.core.formula(((function (PI,p,vec__11984,map__11985,map__11985__$1,percentage,thickness,_){
return (function (G__11989,G__11988){
return (((G__11988 * (2)) * G__11989) - (0.5 * G__11989));
});})(PI,p,vec__11984,map__11985,map__11985__$1,percentage,thickness,_))
).call(null,PI,percentage);
var init_x = (50);
var init_y = (50);
var radius = ((50) - (thickness / (2)));
var x = javelin.core.formula(((function (PI,p,theta,init_x,init_y,radius,vec__11984,map__11985,map__11985__$1,percentage,thickness,_){
return (function (G__11990,G__11992,G__11991){
return (G__11990 + (G__11991 * Math.cos(G__11992)));
});})(PI,p,theta,init_x,init_y,radius,vec__11984,map__11985,map__11985__$1,percentage,thickness,_))
).call(null,init_x,theta,radius);
var y = javelin.core.formula(((function (PI,p,theta,init_x,init_y,radius,x,vec__11984,map__11985,map__11985__$1,percentage,thickness,_){
return (function (G__11995,G__11994,G__11993){
return (G__11993 + (G__11994 * Math.sin(G__11995)));
});})(PI,p,theta,init_x,init_y,radius,x,vec__11984,map__11985,map__11985__$1,percentage,thickness,_))
).call(null,theta,radius,init_y);
var d_vec = javelin.core.formula(((function (PI,p,theta,init_x,init_y,radius,x,y,vec__11984,map__11985,map__11985__$1,percentage,thickness,_){
return (function (G__12001,G__12002,G__11996,G__12000,G__11999,G__11998,G__11997){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["M",G__11996,(G__11997 - G__11998)], null),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, ["A",G__11998,G__11998,(0),(cljs.core.truth_((G__11999 > (0.5 * G__12000)))?(1):(0)),(1),G__12001,G__12002], null)], null);
});})(PI,p,theta,init_x,init_y,radius,x,y,vec__11984,map__11985,map__11985__$1,percentage,thickness,_))
).call(null,x,y,init_x,PI,theta,radius,init_y);
var G__12003 = cljs.core.cst$kw$viewBox;
var G__12004 = "0 0 100 100";
var G__12005 = cljs.core.cst$kw$class;
var G__12006 = "polar-loader";
var G__12007 = (hoplon.svg.circle.cljs$core$IFn$_invoke$arity$8 ? hoplon.svg.circle.cljs$core$IFn$_invoke$arity$8(cljs.core.cst$kw$class,"loader-elem track",cljs.core.cst$kw$cx,init_x,cljs.core.cst$kw$cy,init_y,cljs.core.cst$kw$r,radius) : hoplon.svg.circle.call(null,cljs.core.cst$kw$class,"loader-elem track",cljs.core.cst$kw$cx,init_x,cljs.core.cst$kw$cy,init_y,cljs.core.cst$kw$r,radius));
var G__12008 = (function (){var G__12014 = cljs.core.cst$kw$class;
var G__12015 = "loader-elem progress";
var G__12016 = cljs.core.cst$kw$stroke_DASH_width;
var G__12017 = thickness;
var G__12018 = cljs.core.cst$kw$d;
var G__12019 = javelin.core.formula(((function (G__12014,G__12015,G__12016,G__12017,G__12018,G__12003,G__12004,G__12005,G__12006,G__12007,PI,p,theta,init_x,init_y,radius,x,y,d_vec,vec__11984,map__11985,map__11985__$1,percentage,thickness,_){
return (function (G__12022,G__12020,G__12021){
var G__12023 = " ";
var G__12024 = (G__12021.cljs$core$IFn$_invoke$arity$1 ? G__12021.cljs$core$IFn$_invoke$arity$1(G__12022) : G__12021.call(null,G__12022));
return (G__12020.cljs$core$IFn$_invoke$arity$2 ? G__12020.cljs$core$IFn$_invoke$arity$2(G__12023,G__12024) : G__12020.call(null,G__12023,G__12024));
});})(G__12014,G__12015,G__12016,G__12017,G__12018,G__12003,G__12004,G__12005,G__12006,G__12007,PI,p,theta,init_x,init_y,radius,x,y,d_vec,vec__11984,map__11985,map__11985__$1,percentage,thickness,_))
).call(null,d_vec,clojure.string.join,cljs.core.flatten);
return (hoplon.svg.path.cljs$core$IFn$_invoke$arity$6 ? hoplon.svg.path.cljs$core$IFn$_invoke$arity$6(G__12014,G__12015,G__12016,G__12017,G__12018,G__12019) : hoplon.svg.path.call(null,G__12014,G__12015,G__12016,G__12017,G__12018,G__12019));
})();
return (hoplon.svg.svg.cljs$core$IFn$_invoke$arity$6 ? hoplon.svg.svg.cljs$core$IFn$_invoke$arity$6(G__12003,G__12004,G__12005,G__12006,G__12007,G__12008) : hoplon.svg.svg.call(null,G__12003,G__12004,G__12005,G__12006,G__12007,G__12008));
};
var hoplon$app_pages$_index_DOT_html$polar_progress = function (var_args){
var args__8330__auto__ = null;
if (arguments.length > 0) {
var G__12025__i = 0, G__12025__a = new Array(arguments.length -  0);
while (G__12025__i < G__12025__a.length) {G__12025__a[G__12025__i] = arguments[G__12025__i + 0]; ++G__12025__i;}
  args__8330__auto__ = new cljs.core.IndexedSeq(G__12025__a,0);
} 
return hoplon$app_pages$_index_DOT_html$polar_progress__delegate.call(this,args__8330__auto__);};
hoplon$app_pages$_index_DOT_html$polar_progress.cljs$lang$maxFixedArity = 0;
hoplon$app_pages$_index_DOT_html$polar_progress.cljs$lang$applyTo = (function (arglist__12026){
var args__8330__auto__ = cljs.core.seq(arglist__12026);
return hoplon$app_pages$_index_DOT_html$polar_progress__delegate(args__8330__auto__);
});
hoplon$app_pages$_index_DOT_html$polar_progress.cljs$core$IFn$_invoke$arity$variadic = hoplon$app_pages$_index_DOT_html$polar_progress__delegate;
return hoplon$app_pages$_index_DOT_html$polar_progress;
})()
;
/**
 * Timer that counts down to target-time
 * @param {...*} var_args
 */
hoplon.app_pages._index_DOT_html.timer = (function() { 
var hoplon$app_pages$_index_DOT_html$timer__delegate = function (args__8330__auto__){
var vec__12180 = hoplon.core.parse_args(args__8330__auto__);
var map__12181 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12180,(0),null);
var map__12181__$1 = ((((!((map__12181 == null)))?((((map__12181.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12181.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12181):map__12181);
var attrs = map__12181__$1;
var start_time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12181__$1,cljs.core.cst$kw$start_DASH_time);
var target_time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12181__$1,cljs.core.cst$kw$target_DASH_time);
var interval = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12181__$1,cljs.core.cst$kw$interval);
var on_time_up = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12181__$1,cljs.core.cst$kw$on_DASH_time_DASH_up);
var mode = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12181__$1,cljs.core.cst$kw$mode);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12180,(1),null);
var mode_names = javelin.core.formula(((function (vec__12180,map__12181,map__12181__$1,attrs,start_time,target_time,interval,on_time_up,mode,_){
return (function (G__12184,G__12183){
var G__12185 = ((function (vec__12180,map__12181,map__12181__$1,attrs,start_time,target_time,interval,on_time_up,mode,_){
return (function (p1__12027_SHARP_){
return cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(p1__12027_SHARP_);
});})(vec__12180,map__12181,map__12181__$1,attrs,start_time,target_time,interval,on_time_up,mode,_))
;
var G__12186 = G__12184;
return (G__12183.cljs$core$IFn$_invoke$arity$2 ? G__12183.cljs$core$IFn$_invoke$arity$2(G__12185,G__12186) : G__12183.call(null,G__12185,G__12186));
});})(vec__12180,map__12181,map__12181__$1,attrs,start_time,target_time,interval,on_time_up,mode,_))
).call(null,hoplon.app_pages._index_DOT_html.modes,cljs.core.mapv);
var messages = javelin.core.formula(((function (mode_names,vec__12180,map__12181,map__12181__$1,attrs,start_time,target_time,interval,on_time_up,mode,_){
return (function (G__12187){
return cljs.core.cst$kw$messages.cljs$core$IFn$_invoke$arity$1(G__12187);
});})(mode_names,vec__12180,map__12181,map__12181__$1,attrs,start_time,target_time,interval,on_time_up,mode,_))
).call(null,mode);
var mode_message = javelin.core.formula(((function (mode_names,messages,vec__12180,map__12181,map__12181__$1,attrs,start_time,target_time,interval,on_time_up,mode,_){
return (function (G__12190,G__12188,G__12189,G__12191){
var G__12193 = G__12189;
var G__12194 = (function (){var G__12195 = (G__12191.cljs$core$IFn$_invoke$arity$1 ? G__12191.cljs$core$IFn$_invoke$arity$1(G__12189) : G__12191.call(null,G__12189));
return (G__12190.cljs$core$IFn$_invoke$arity$1 ? G__12190.cljs$core$IFn$_invoke$arity$1(G__12195) : G__12190.call(null,G__12195));
})();
return (G__12188.cljs$core$IFn$_invoke$arity$2 ? G__12188.cljs$core$IFn$_invoke$arity$2(G__12193,G__12194) : G__12188.call(null,G__12193,G__12194));
});})(mode_names,messages,vec__12180,map__12181,map__12181__$1,attrs,start_time,target_time,interval,on_time_up,mode,_))
).call(null,cljs.core.rand_int,cljs.core.nth,messages,cljs.core.count);
var current_time = javelin.core.cell.cljs$core$IFn$_invoke$arity$1(Date.now());
var time_left = javelin.core.formula(((function (mode_names,messages,mode_message,current_time,vec__12180,map__12181,map__12181__$1,attrs,start_time,target_time,interval,on_time_up,mode,_){
return (function (G__12196,G__12197){
return (G__12196 - G__12197);
});})(mode_names,messages,mode_message,current_time,vec__12180,map__12181,map__12181__$1,attrs,start_time,target_time,interval,on_time_up,mode,_))
).call(null,target_time,current_time);
var seconds_left = javelin.core.formula(((function (mode_names,messages,mode_message,current_time,time_left,vec__12180,map__12181,map__12181__$1,attrs,start_time,target_time,interval,on_time_up,mode,_){
return (function (G__12198,G__12199){
return (G__12198.cljs$core$IFn$_invoke$arity$2 ? G__12198.cljs$core$IFn$_invoke$arity$2((1000),G__12199) : G__12198.call(null,(1000),G__12199));
});})(mode_names,messages,mode_message,current_time,time_left,vec__12180,map__12181,map__12181__$1,attrs,start_time,target_time,interval,on_time_up,mode,_))
).call(null,nagger.util.round,time_left);
var counter_obj = javelin.core.formula(((function (mode_names,messages,mode_message,current_time,time_left,seconds_left,vec__12180,map__12181,map__12181__$1,attrs,start_time,target_time,interval,on_time_up,mode,_){
return (function (G__12200,G__12201){
var G__12202 = (new Date(G__12201));
return (G__12200.cljs$core$IFn$_invoke$arity$1 ? G__12200.cljs$core$IFn$_invoke$arity$1(G__12202) : G__12200.call(null,G__12202));
});})(mode_names,messages,mode_message,current_time,time_left,seconds_left,vec__12180,map__12181,map__12181__$1,attrs,start_time,target_time,interval,on_time_up,mode,_))
).call(null,hoplon.app_pages._index_DOT_html.split_time_UTC,seconds_left);
var minutes = javelin.core.formula(((function (mode_names,messages,mode_message,current_time,time_left,seconds_left,counter_obj,vec__12180,map__12181,map__12181__$1,attrs,start_time,target_time,interval,on_time_up,mode,_){
return (function (G__12203){
return cljs.core.cst$kw$minutes.cljs$core$IFn$_invoke$arity$1(G__12203);
});})(mode_names,messages,mode_message,current_time,time_left,seconds_left,counter_obj,vec__12180,map__12181,map__12181__$1,attrs,start_time,target_time,interval,on_time_up,mode,_))
).call(null,counter_obj);
var seconds = javelin.core.formula(((function (mode_names,messages,mode_message,current_time,time_left,seconds_left,counter_obj,minutes,vec__12180,map__12181,map__12181__$1,attrs,start_time,target_time,interval,on_time_up,mode,_){
return (function (G__12204){
return cljs.core.cst$kw$seconds.cljs$core$IFn$_invoke$arity$1(G__12204);
});})(mode_names,messages,mode_message,current_time,time_left,seconds_left,counter_obj,minutes,vec__12180,map__12181,map__12181__$1,attrs,start_time,target_time,interval,on_time_up,mode,_))
).call(null,counter_obj);
var tick = ((function (mode_names,messages,mode_message,current_time,time_left,seconds_left,counter_obj,minutes,seconds,vec__12180,map__12181,map__12181__$1,attrs,start_time,target_time,interval,on_time_up,mode,_){
return (function hoplon$app_pages$_index_DOT_html$timer_$_tick(){
var G__12213 = ((function (mode_names,messages,mode_message,current_time,time_left,seconds_left,counter_obj,minutes,seconds,vec__12180,map__12181,map__12181__$1,attrs,start_time,target_time,interval,on_time_up,mode,_){
return (function (){
var G__12215_12332 = current_time;
var G__12216_12333 = Date.now();
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__12215_12332,G__12216_12333) : cljs.core.reset_BANG_.call(null,G__12215_12332,G__12216_12333));

if((((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(time_left) : cljs.core.deref.call(null,time_left)) <= (0))) && (cljs.core.some_QMARK_(on_time_up))){
hoplon.app_pages._index_DOT_html.beep.play();

(on_time_up.cljs$core$IFn$_invoke$arity$0 ? on_time_up.cljs$core$IFn$_invoke$arity$0() : on_time_up.call(null));

return hoplon$app_pages$_index_DOT_html$timer_$_tick();
} else {
return null;
}
});})(mode_names,messages,mode_message,current_time,time_left,seconds_left,counter_obj,minutes,seconds,vec__12180,map__12181,map__12181__$1,attrs,start_time,target_time,interval,on_time_up,mode,_))
;
var G__12214 = (16);
return setInterval(G__12213,G__12214);
});})(mode_names,messages,mode_message,current_time,time_left,seconds_left,counter_obj,minutes,seconds,vec__12180,map__12181,map__12181__$1,attrs,start_time,target_time,interval,on_time_up,mode,_))
;
var mode_name = javelin.core.formula(((function (mode_names,messages,mode_message,current_time,time_left,seconds_left,counter_obj,minutes,seconds,tick,vec__12180,map__12181,map__12181__$1,attrs,start_time,target_time,interval,on_time_up,mode,_){
return (function (G__12217){
return cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(G__12217);
});})(mode_names,messages,mode_message,current_time,time_left,seconds_left,counter_obj,minutes,seconds,tick,vec__12180,map__12181,map__12181__$1,attrs,start_time,target_time,interval,on_time_up,mode,_))
).call(null,mode);
tick();

var G__12234 = cljs.core.cst$kw$class;
var G__12235 = javelin.core.formula(((function (G__12234,mode_names,messages,mode_message,current_time,time_left,seconds_left,counter_obj,minutes,seconds,tick,mode_name,vec__12180,map__12181,map__12181__$1,attrs,start_time,target_time,interval,on_time_up,mode,_){
return (function (G__12239,G__12240,G__12243,G__12244,G__12245,G__12242,G__12241){
var G__12249 = ((function (G__12234,mode_names,messages,mode_message,current_time,time_left,seconds_left,counter_obj,minutes,seconds,tick,mode_name,vec__12180,map__12181,map__12181__$1,attrs,start_time,target_time,interval,on_time_up,mode,_){
return (function (accumulator,head){
var lc = (G__12240.cljs$core$IFn$_invoke$arity$1 ? G__12240.cljs$core$IFn$_invoke$arity$1(head) : G__12240.call(null,head));
var G__12252 = accumulator;
var G__12253 = (G__12242.cljs$core$IFn$_invoke$arity$1 ? G__12242.cljs$core$IFn$_invoke$arity$1(lc) : G__12242.call(null,lc));
var G__12254 = (G__12243.cljs$core$IFn$_invoke$arity$2 ? G__12243.cljs$core$IFn$_invoke$arity$2(G__12244,head) : G__12243.call(null,G__12244,head));
return (G__12241.cljs$core$IFn$_invoke$arity$3 ? G__12241.cljs$core$IFn$_invoke$arity$3(G__12252,G__12253,G__12254) : G__12241.call(null,G__12252,G__12253,G__12254));
});})(G__12234,mode_names,messages,mode_message,current_time,time_left,seconds_left,counter_obj,minutes,seconds,tick,mode_name,vec__12180,map__12181,map__12181__$1,attrs,start_time,target_time,interval,on_time_up,mode,_))
;
var G__12250 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$container,true], null);
var G__12251 = G__12245;
return (G__12239.cljs$core$IFn$_invoke$arity$3 ? G__12239.cljs$core$IFn$_invoke$arity$3(G__12249,G__12250,G__12251) : G__12239.call(null,G__12249,G__12250,G__12251));
});})(G__12234,mode_names,messages,mode_message,current_time,time_left,seconds_left,counter_obj,minutes,seconds,tick,mode_name,vec__12180,map__12181,map__12181__$1,attrs,start_time,target_time,interval,on_time_up,mode,_))
).call(null,cljs.core.reduce,clojure.string.lower_case,cljs.core._EQ_,mode_name,mode_names,cljs.core.keyword,cljs.core.assoc);
var G__12236 = (function (){var G__12255 = cljs.core.cst$kw$class;
var G__12256 = "message";
var G__12257 = document.createTextNode("Hi, Romina!");
return (hoplon.core.h3.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.h3.cljs$core$IFn$_invoke$arity$3(G__12255,G__12256,G__12257) : hoplon.core.h3.call(null,G__12255,G__12256,G__12257));
})();
var G__12237 = (function (){var G__12281 = cljs.core.cst$kw$class;
var G__12282 = "nagger";
var G__12283 = (function (){var G__12292 = cljs.core.cst$kw$class;
var G__12293 = "clock";
var G__12294 = (function (){var G__12298 = (function (){var t__8391__auto__ = document.createTextNode("");
javelin.core.formula(((function (t__8391__auto__,G__12292,G__12293,G__12281,G__12282,G__12234,G__12235,G__12236,mode_names,messages,mode_message,current_time,time_left,seconds_left,counter_obj,minutes,seconds,tick,mode_name,vec__12180,map__12181,map__12181__$1,attrs,start_time,target_time,interval,on_time_up,mode,_){
return (function (G__12300,G__12299){
return G__12299.nodeValue = [cljs.core.str(G__12300)].join('');
});})(t__8391__auto__,G__12292,G__12293,G__12281,G__12282,G__12234,G__12235,G__12236,mode_names,messages,mode_message,current_time,time_left,seconds_left,counter_obj,minutes,seconds,tick,mode_name,vec__12180,map__12181,map__12181__$1,attrs,start_time,target_time,interval,on_time_up,mode,_))
).call(null,mode_name,t__8391__auto__);

return t__8391__auto__;
})();
return (hoplon.core.h2.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.h2.cljs$core$IFn$_invoke$arity$1(G__12298) : hoplon.core.h2.call(null,G__12298));
})();
var G__12295 = (function (){var G__12304 = cljs.core.cst$kw$class;
var G__12305 = "timer";
var G__12306 = (function (){var t__8391__auto__ = document.createTextNode("");
javelin.core.formula(((function (t__8391__auto__,G__12304,G__12305,G__12292,G__12293,G__12294,G__12281,G__12282,G__12234,G__12235,G__12236,mode_names,messages,mode_message,current_time,time_left,seconds_left,counter_obj,minutes,seconds,tick,mode_name,vec__12180,map__12181,map__12181__$1,attrs,start_time,target_time,interval,on_time_up,mode,_){
return (function (G__12308,G__12309,G__12307){
return G__12307.nodeValue = [cljs.core.str(G__12308),cljs.core.str(" : "),cljs.core.str(G__12309)].join('');
});})(t__8391__auto__,G__12304,G__12305,G__12292,G__12293,G__12294,G__12281,G__12282,G__12234,G__12235,G__12236,mode_names,messages,mode_message,current_time,time_left,seconds_left,counter_obj,minutes,seconds,tick,mode_name,vec__12180,map__12181,map__12181__$1,attrs,start_time,target_time,interval,on_time_up,mode,_))
).call(null,minutes,seconds,t__8391__auto__);

return t__8391__auto__;
})();
return (hoplon.core.h1.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.h1.cljs$core$IFn$_invoke$arity$3(G__12304,G__12305,G__12306) : hoplon.core.h1.call(null,G__12304,G__12305,G__12306));
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$4 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$4(G__12292,G__12293,G__12294,G__12295) : hoplon.core.div.call(null,G__12292,G__12293,G__12294,G__12295));
})();
var G__12284 = hoplon.app_pages._index_DOT_html.polar_progress.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$percentage,javelin.core.formula(((function (G__12281,G__12282,G__12283,G__12234,G__12235,G__12236,mode_names,messages,mode_message,current_time,time_left,seconds_left,counter_obj,minutes,seconds,tick,mode_name,vec__12180,map__12181,map__12181__$1,attrs,start_time,target_time,interval,on_time_up,mode,_){
return (function (G__12312,G__12310,G__12311){
return ((G__12310 - G__12311) / (G__12312 - G__12311));
});})(G__12281,G__12282,G__12283,G__12234,G__12235,G__12236,mode_names,messages,mode_message,current_time,time_left,seconds_left,counter_obj,minutes,seconds,tick,mode_name,vec__12180,map__12181,map__12181__$1,attrs,start_time,target_time,interval,on_time_up,mode,_))
).call(null,target_time,current_time,start_time),cljs.core.cst$kw$thickness,(6)], 0));
var G__12285 = (function (){var G__12315 = cljs.core.cst$kw$class;
var G__12316 = javelin.core.formula(((function (G__12315,G__12281,G__12282,G__12283,G__12284,G__12234,G__12235,G__12236,mode_names,messages,mode_message,current_time,time_left,seconds_left,counter_obj,minutes,seconds,tick,mode_name,vec__12180,map__12181,map__12181__$1,attrs,start_time,target_time,interval,on_time_up,mode,_){
return (function (G__12317,G__12318){
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$wiper,true,cljs.core.cst$kw$work_DASH_wiper,true,cljs.core.cst$kw$active,(G__12317.cljs$core$IFn$_invoke$arity$2 ? G__12317.cljs$core$IFn$_invoke$arity$2(G__12318,"Work") : G__12317.call(null,G__12318,"Work"))], null);
});})(G__12315,G__12281,G__12282,G__12283,G__12284,G__12234,G__12235,G__12236,mode_names,messages,mode_message,current_time,time_left,seconds_left,counter_obj,minutes,seconds,tick,mode_name,vec__12180,map__12181,map__12181__$1,attrs,start_time,target_time,interval,on_time_up,mode,_))
).call(null,cljs.core._EQ_,mode_name);
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$2(G__12315,G__12316) : hoplon.core.div.call(null,G__12315,G__12316));
})();
var G__12286 = (function (){var G__12321 = cljs.core.cst$kw$class;
var G__12322 = javelin.core.formula(((function (G__12321,G__12281,G__12282,G__12283,G__12284,G__12285,G__12234,G__12235,G__12236,mode_names,messages,mode_message,current_time,time_left,seconds_left,counter_obj,minutes,seconds,tick,mode_name,vec__12180,map__12181,map__12181__$1,attrs,start_time,target_time,interval,on_time_up,mode,_){
return (function (G__12323,G__12324){
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$wiper,true,cljs.core.cst$kw$play_DASH_wiper,true,cljs.core.cst$kw$active,(G__12323.cljs$core$IFn$_invoke$arity$2 ? G__12323.cljs$core$IFn$_invoke$arity$2(G__12324,"Play") : G__12323.call(null,G__12324,"Play"))], null);
});})(G__12321,G__12281,G__12282,G__12283,G__12284,G__12285,G__12234,G__12235,G__12236,mode_names,messages,mode_message,current_time,time_left,seconds_left,counter_obj,minutes,seconds,tick,mode_name,vec__12180,map__12181,map__12181__$1,attrs,start_time,target_time,interval,on_time_up,mode,_))
).call(null,cljs.core._EQ_,mode_name);
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$2(G__12321,G__12322) : hoplon.core.div.call(null,G__12321,G__12322));
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$6 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$6(G__12281,G__12282,G__12283,G__12284,G__12285,G__12286) : hoplon.core.div.call(null,G__12281,G__12282,G__12283,G__12284,G__12285,G__12286));
})();
var G__12238 = (function (){var G__12327 = cljs.core.cst$kw$class;
var G__12328 = "message";
var G__12329 = (function (){var t__8391__auto__ = document.createTextNode("");
javelin.core.formula(((function (t__8391__auto__,G__12327,G__12328,G__12234,G__12235,G__12236,G__12237,mode_names,messages,mode_message,current_time,time_left,seconds_left,counter_obj,minutes,seconds,tick,mode_name,vec__12180,map__12181,map__12181__$1,attrs,start_time,target_time,interval,on_time_up,mode,_){
return (function (G__12331,G__12330){
return G__12330.nodeValue = G__12331;
});})(t__8391__auto__,G__12327,G__12328,G__12234,G__12235,G__12236,G__12237,mode_names,messages,mode_message,current_time,time_left,seconds_left,counter_obj,minutes,seconds,tick,mode_name,vec__12180,map__12181,map__12181__$1,attrs,start_time,target_time,interval,on_time_up,mode,_))
).call(null,mode_message,t__8391__auto__);

return t__8391__auto__;
})();
return (hoplon.core.h3.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.h3.cljs$core$IFn$_invoke$arity$3(G__12327,G__12328,G__12329) : hoplon.core.h3.call(null,G__12327,G__12328,G__12329));
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$5 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$5(G__12234,G__12235,G__12236,G__12237,G__12238) : hoplon.core.div.call(null,G__12234,G__12235,G__12236,G__12237,G__12238));
};
var hoplon$app_pages$_index_DOT_html$timer = function (var_args){
var args__8330__auto__ = null;
if (arguments.length > 0) {
var G__12334__i = 0, G__12334__a = new Array(arguments.length -  0);
while (G__12334__i < G__12334__a.length) {G__12334__a[G__12334__i] = arguments[G__12334__i + 0]; ++G__12334__i;}
  args__8330__auto__ = new cljs.core.IndexedSeq(G__12334__a,0);
} 
return hoplon$app_pages$_index_DOT_html$timer__delegate.call(this,args__8330__auto__);};
hoplon$app_pages$_index_DOT_html$timer.cljs$lang$maxFixedArity = 0;
hoplon$app_pages$_index_DOT_html$timer.cljs$lang$applyTo = (function (arglist__12335){
var args__8330__auto__ = cljs.core.seq(arglist__12335);
return hoplon$app_pages$_index_DOT_html$timer__delegate(args__8330__auto__);
});
hoplon$app_pages$_index_DOT_html$timer.cljs$core$IFn$_invoke$arity$variadic = hoplon$app_pages$_index_DOT_html$timer__delegate;
return hoplon$app_pages$_index_DOT_html$timer;
})()
;
hoplon.core.html.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(function (){var G__12337 = (hoplon.core.link.cljs$core$IFn$_invoke$arity$4 ? hoplon.core.link.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$kw$href,"assets/main.css",cljs.core.cst$kw$rel,"stylesheet") : hoplon.core.link.call(null,cljs.core.cst$kw$href,"assets/main.css",cljs.core.cst$kw$rel,"stylesheet"));
var G__12338 = (hoplon.core.link.cljs$core$IFn$_invoke$arity$4 ? hoplon.core.link.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$kw$href,"https://fonts.googleapis.com/css?family=Raleway:400,300,900",cljs.core.cst$kw$rel,"stylesheet") : hoplon.core.link.call(null,cljs.core.cst$kw$href,"https://fonts.googleapis.com/css?family=Raleway:400,300,900",cljs.core.cst$kw$rel,"stylesheet"));
return (hoplon.core.head.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.head.cljs$core$IFn$_invoke$arity$2(G__12337,G__12338) : hoplon.core.head.call(null,G__12337,G__12338));
})(),(function (){var G__12346 = (function (){var alert_open = javelin.core.cell.cljs$core$IFn$_invoke$arity$1(false);
var current_mode_index = javelin.core.cell.cljs$core$IFn$_invoke$arity$1((0));
var current_mode = javelin.core.formula(((function (alert_open,current_mode_index){
return (function (G__12347,G__12348,G__12349){
return (G__12347.cljs$core$IFn$_invoke$arity$2 ? G__12347.cljs$core$IFn$_invoke$arity$2(G__12348,G__12349) : G__12347.call(null,G__12348,G__12349));
});})(alert_open,current_mode_index))
).call(null,cljs.core.get,hoplon.app_pages._index_DOT_html.modes,current_mode_index);
var target_time = javelin.core.cell.cljs$core$IFn$_invoke$arity$1((cljs.core.cst$kw$duration.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(current_mode) : cljs.core.deref.call(null,current_mode))) + Date.now()));
var start_time = javelin.core.cell.cljs$core$IFn$_invoke$arity$1(Date.now());
var on_time_up = ((function (alert_open,current_mode_index,current_mode,target_time,start_time){
return (function (){
alert("Time's up!");

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(current_mode_index,((function (alert_open,current_mode_index,current_mode,target_time,start_time){
return (function (p1__12336_SHARP_){
if(cljs.core.contains_QMARK_(hoplon.app_pages._index_DOT_html.modes,(p1__12336_SHARP_ + (1)))){
return (p1__12336_SHARP_ + (1));
} else {
return (0);
}
});})(alert_open,current_mode_index,current_mode,target_time,start_time))
);

var G__12350_12354 = start_time;
var G__12351_12355 = Date.now();
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__12350_12354,G__12351_12355) : cljs.core.reset_BANG_.call(null,G__12350_12354,G__12351_12355));

var G__12352 = target_time;
var G__12353 = (cljs.core.cst$kw$duration.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(current_mode) : cljs.core.deref.call(null,current_mode))) + Date.now());
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__12352,G__12353) : cljs.core.reset_BANG_.call(null,G__12352,G__12353));
});})(alert_open,current_mode_index,current_mode,target_time,start_time))
;
return hoplon.app_pages._index_DOT_html.timer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$start_DASH_time,start_time,cljs.core.cst$kw$target_DASH_time,target_time,cljs.core.cst$kw$on_DASH_time_DASH_up,on_time_up,cljs.core.cst$kw$mode,current_mode], 0));
})();
return (hoplon.core.body.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.body.cljs$core$IFn$_invoke$arity$1(G__12346) : hoplon.core.body.call(null,G__12346));
})()], 0));
