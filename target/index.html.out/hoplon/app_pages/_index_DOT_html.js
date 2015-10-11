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
var __GT_map = (function (p1__11920_SHARP_){
return cljs.core.zipmap(p1__11920_SHARP_,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(true));
});
var clmap = ((cljs.core.map_QMARK_(kvs))?kvs:__GT_map(((typeof kvs === 'string')?kvs.split(/\s+/):cljs.core.seq(kvs))));
var cl = elem.classList;
var seq__11921 = cljs.core.seq(clmap);
var chunk__11922 = null;
var count__11923 = (0);
var i__11924 = (0);
while(true){
if((i__11924 < count__11923)){
var vec__11925 = chunk__11922.cljs$core$IIndexed$_nth$arity$2(null,i__11924);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11925,(0),null);
var p_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11925,(1),null);
cl.toggle(cljs.core.name(c),cljs.core.boolean$(p_QMARK_));

var G__11927 = seq__11921;
var G__11928 = chunk__11922;
var G__11929 = count__11923;
var G__11930 = (i__11924 + (1));
seq__11921 = G__11927;
chunk__11922 = G__11928;
count__11923 = G__11929;
i__11924 = G__11930;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__11921);
if(temp__4425__auto__){
var seq__11921__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__11921__$1)){
var c__5891__auto__ = cljs.core.chunk_first(seq__11921__$1);
var G__11931 = cljs.core.chunk_rest(seq__11921__$1);
var G__11932 = c__5891__auto__;
var G__11933 = cljs.core.count(c__5891__auto__);
var G__11934 = (0);
seq__11921 = G__11931;
chunk__11922 = G__11932;
count__11923 = G__11933;
i__11924 = G__11934;
continue;
} else {
var vec__11926 = cljs.core.first(seq__11921__$1);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11926,(0),null);
var p_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11926,(1),null);
cl.toggle(cljs.core.name(c),cljs.core.boolean$(p_QMARK_));

var G__11935 = cljs.core.next(seq__11921__$1);
var G__11936 = null;
var G__11937 = (0);
var G__11938 = (0);
seq__11921 = G__11935;
chunk__11922 = G__11936;
count__11923 = G__11937;
i__11924 = G__11938;
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
var vec__11980 = hoplon.core.parse_args(args__8330__auto__);
var map__11981 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11980,(0),null);
var map__11981__$1 = ((((!((map__11981 == null)))?((((map__11981.cljs$lang$protocol_mask$partition0$ & (64))) || (map__11981.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11981):map__11981);
var percentage = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11981__$1,cljs.core.cst$kw$percentage);
var thickness = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11981__$1,cljs.core.cst$kw$thickness);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11980,(1),null);
var PI = Math.PI;
var p = javelin.core.formula(((function (PI,vec__11980,map__11981,map__11981__$1,percentage,thickness,_){
return (function (G__11983){
return Math.floor(((100) * G__11983));
});})(PI,vec__11980,map__11981,map__11981__$1,percentage,thickness,_))
).call(null,percentage);
var theta = javelin.core.formula(((function (PI,p,vec__11980,map__11981,map__11981__$1,percentage,thickness,_){
return (function (G__11985,G__11984){
return (((G__11984 * (2)) * G__11985) - (0.5 * G__11985));
});})(PI,p,vec__11980,map__11981,map__11981__$1,percentage,thickness,_))
).call(null,PI,percentage);
var init_x = (50);
var init_y = (50);
var radius = ((50) - (thickness / (2)));
var x = javelin.core.formula(((function (PI,p,theta,init_x,init_y,radius,vec__11980,map__11981,map__11981__$1,percentage,thickness,_){
return (function (G__11986,G__11988,G__11987){
return (G__11986 + (G__11987 * Math.cos(G__11988)));
});})(PI,p,theta,init_x,init_y,radius,vec__11980,map__11981,map__11981__$1,percentage,thickness,_))
).call(null,init_x,theta,radius);
var y = javelin.core.formula(((function (PI,p,theta,init_x,init_y,radius,x,vec__11980,map__11981,map__11981__$1,percentage,thickness,_){
return (function (G__11991,G__11990,G__11989){
return (G__11989 + (G__11990 * Math.sin(G__11991)));
});})(PI,p,theta,init_x,init_y,radius,x,vec__11980,map__11981,map__11981__$1,percentage,thickness,_))
).call(null,theta,radius,init_y);
var d_vec = javelin.core.formula(((function (PI,p,theta,init_x,init_y,radius,x,y,vec__11980,map__11981,map__11981__$1,percentage,thickness,_){
return (function (G__11997,G__11998,G__11992,G__11996,G__11995,G__11994,G__11993){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["M",G__11992,(G__11993 - G__11994)], null),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, ["A",G__11994,G__11994,(0),(cljs.core.truth_((G__11995 > (0.5 * G__11996)))?(1):(0)),(1),G__11997,G__11998], null)], null);
});})(PI,p,theta,init_x,init_y,radius,x,y,vec__11980,map__11981,map__11981__$1,percentage,thickness,_))
).call(null,x,y,init_x,PI,theta,radius,init_y);
var G__11999 = cljs.core.cst$kw$viewBox;
var G__12000 = "0 0 100 100";
var G__12001 = cljs.core.cst$kw$class;
var G__12002 = "polar-loader";
var G__12003 = (hoplon.svg.circle.cljs$core$IFn$_invoke$arity$8 ? hoplon.svg.circle.cljs$core$IFn$_invoke$arity$8(cljs.core.cst$kw$class,"loader-elem track",cljs.core.cst$kw$cx,init_x,cljs.core.cst$kw$cy,init_y,cljs.core.cst$kw$r,radius) : hoplon.svg.circle.call(null,cljs.core.cst$kw$class,"loader-elem track",cljs.core.cst$kw$cx,init_x,cljs.core.cst$kw$cy,init_y,cljs.core.cst$kw$r,radius));
var G__12004 = (function (){var G__12010 = cljs.core.cst$kw$class;
var G__12011 = "loader-elem progress";
var G__12012 = cljs.core.cst$kw$stroke_DASH_width;
var G__12013 = thickness;
var G__12014 = cljs.core.cst$kw$d;
var G__12015 = javelin.core.formula(((function (G__12010,G__12011,G__12012,G__12013,G__12014,G__11999,G__12000,G__12001,G__12002,G__12003,PI,p,theta,init_x,init_y,radius,x,y,d_vec,vec__11980,map__11981,map__11981__$1,percentage,thickness,_){
return (function (G__12018,G__12016,G__12017){
var G__12019 = " ";
var G__12020 = (G__12017.cljs$core$IFn$_invoke$arity$1 ? G__12017.cljs$core$IFn$_invoke$arity$1(G__12018) : G__12017.call(null,G__12018));
return (G__12016.cljs$core$IFn$_invoke$arity$2 ? G__12016.cljs$core$IFn$_invoke$arity$2(G__12019,G__12020) : G__12016.call(null,G__12019,G__12020));
});})(G__12010,G__12011,G__12012,G__12013,G__12014,G__11999,G__12000,G__12001,G__12002,G__12003,PI,p,theta,init_x,init_y,radius,x,y,d_vec,vec__11980,map__11981,map__11981__$1,percentage,thickness,_))
).call(null,d_vec,clojure.string.join,cljs.core.flatten);
return (hoplon.svg.path.cljs$core$IFn$_invoke$arity$6 ? hoplon.svg.path.cljs$core$IFn$_invoke$arity$6(G__12010,G__12011,G__12012,G__12013,G__12014,G__12015) : hoplon.svg.path.call(null,G__12010,G__12011,G__12012,G__12013,G__12014,G__12015));
})();
return (hoplon.svg.svg.cljs$core$IFn$_invoke$arity$6 ? hoplon.svg.svg.cljs$core$IFn$_invoke$arity$6(G__11999,G__12000,G__12001,G__12002,G__12003,G__12004) : hoplon.svg.svg.call(null,G__11999,G__12000,G__12001,G__12002,G__12003,G__12004));
};
var hoplon$app_pages$_index_DOT_html$polar_progress = function (var_args){
var args__8330__auto__ = null;
if (arguments.length > 0) {
var G__12021__i = 0, G__12021__a = new Array(arguments.length -  0);
while (G__12021__i < G__12021__a.length) {G__12021__a[G__12021__i] = arguments[G__12021__i + 0]; ++G__12021__i;}
  args__8330__auto__ = new cljs.core.IndexedSeq(G__12021__a,0);
} 
return hoplon$app_pages$_index_DOT_html$polar_progress__delegate.call(this,args__8330__auto__);};
hoplon$app_pages$_index_DOT_html$polar_progress.cljs$lang$maxFixedArity = 0;
hoplon$app_pages$_index_DOT_html$polar_progress.cljs$lang$applyTo = (function (arglist__12022){
var args__8330__auto__ = cljs.core.seq(arglist__12022);
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
var vec__12174 = hoplon.core.parse_args(args__8330__auto__);
var map__12175 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12174,(0),null);
var map__12175__$1 = ((((!((map__12175 == null)))?((((map__12175.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12175.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12175):map__12175);
var attrs = map__12175__$1;
var start_time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12175__$1,cljs.core.cst$kw$start_DASH_time);
var target_time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12175__$1,cljs.core.cst$kw$target_DASH_time);
var interval = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12175__$1,cljs.core.cst$kw$interval);
var on_time_up = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12175__$1,cljs.core.cst$kw$on_DASH_time_DASH_up);
var mode = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12175__$1,cljs.core.cst$kw$mode);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12174,(1),null);
var mode_names = javelin.core.formula(((function (vec__12174,map__12175,map__12175__$1,attrs,start_time,target_time,interval,on_time_up,mode,_){
return (function (G__12178,G__12177){
var G__12179 = ((function (vec__12174,map__12175,map__12175__$1,attrs,start_time,target_time,interval,on_time_up,mode,_){
return (function (p1__12023_SHARP_){
return cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(p1__12023_SHARP_);
});})(vec__12174,map__12175,map__12175__$1,attrs,start_time,target_time,interval,on_time_up,mode,_))
;
var G__12180 = G__12178;
return (G__12177.cljs$core$IFn$_invoke$arity$2 ? G__12177.cljs$core$IFn$_invoke$arity$2(G__12179,G__12180) : G__12177.call(null,G__12179,G__12180));
});})(vec__12174,map__12175,map__12175__$1,attrs,start_time,target_time,interval,on_time_up,mode,_))
).call(null,hoplon.app_pages._index_DOT_html.modes,cljs.core.mapv);
var messages = javelin.core.formula(((function (mode_names,vec__12174,map__12175,map__12175__$1,attrs,start_time,target_time,interval,on_time_up,mode,_){
return (function (G__12181){
return cljs.core.cst$kw$messages.cljs$core$IFn$_invoke$arity$1(G__12181);
});})(mode_names,vec__12174,map__12175,map__12175__$1,attrs,start_time,target_time,interval,on_time_up,mode,_))
).call(null,mode);
var mode_message = javelin.core.formula(((function (mode_names,messages,vec__12174,map__12175,map__12175__$1,attrs,start_time,target_time,interval,on_time_up,mode,_){
return (function (G__12184,G__12182,G__12183,G__12185){
var G__12187 = G__12183;
var G__12188 = (function (){var G__12189 = (G__12185.cljs$core$IFn$_invoke$arity$1 ? G__12185.cljs$core$IFn$_invoke$arity$1(G__12183) : G__12185.call(null,G__12183));
return (G__12184.cljs$core$IFn$_invoke$arity$1 ? G__12184.cljs$core$IFn$_invoke$arity$1(G__12189) : G__12184.call(null,G__12189));
})();
return (G__12182.cljs$core$IFn$_invoke$arity$2 ? G__12182.cljs$core$IFn$_invoke$arity$2(G__12187,G__12188) : G__12182.call(null,G__12187,G__12188));
});})(mode_names,messages,vec__12174,map__12175,map__12175__$1,attrs,start_time,target_time,interval,on_time_up,mode,_))
).call(null,cljs.core.rand_int,cljs.core.nth,messages,cljs.core.count);
var current_time = javelin.core.cell.cljs$core$IFn$_invoke$arity$1(Date.now());
var time_left = javelin.core.formula(((function (mode_names,messages,mode_message,current_time,vec__12174,map__12175,map__12175__$1,attrs,start_time,target_time,interval,on_time_up,mode,_){
return (function (G__12190,G__12191){
return (G__12190 - G__12191);
});})(mode_names,messages,mode_message,current_time,vec__12174,map__12175,map__12175__$1,attrs,start_time,target_time,interval,on_time_up,mode,_))
).call(null,target_time,current_time);
var seconds_left = javelin.core.formula(((function (mode_names,messages,mode_message,current_time,time_left,vec__12174,map__12175,map__12175__$1,attrs,start_time,target_time,interval,on_time_up,mode,_){
return (function (G__12192,G__12193){
return (G__12192.cljs$core$IFn$_invoke$arity$2 ? G__12192.cljs$core$IFn$_invoke$arity$2((1000),G__12193) : G__12192.call(null,(1000),G__12193));
});})(mode_names,messages,mode_message,current_time,time_left,vec__12174,map__12175,map__12175__$1,attrs,start_time,target_time,interval,on_time_up,mode,_))
).call(null,nagger.util.round,time_left);
var counter_obj = javelin.core.formula(((function (mode_names,messages,mode_message,current_time,time_left,seconds_left,vec__12174,map__12175,map__12175__$1,attrs,start_time,target_time,interval,on_time_up,mode,_){
return (function (G__12194,G__12195){
var G__12196 = (new Date(G__12195));
return (G__12194.cljs$core$IFn$_invoke$arity$1 ? G__12194.cljs$core$IFn$_invoke$arity$1(G__12196) : G__12194.call(null,G__12196));
});})(mode_names,messages,mode_message,current_time,time_left,seconds_left,vec__12174,map__12175,map__12175__$1,attrs,start_time,target_time,interval,on_time_up,mode,_))
).call(null,hoplon.app_pages._index_DOT_html.split_time_UTC,seconds_left);
var minutes = javelin.core.formula(((function (mode_names,messages,mode_message,current_time,time_left,seconds_left,counter_obj,vec__12174,map__12175,map__12175__$1,attrs,start_time,target_time,interval,on_time_up,mode,_){
return (function (G__12197){
return cljs.core.cst$kw$minutes.cljs$core$IFn$_invoke$arity$1(G__12197);
});})(mode_names,messages,mode_message,current_time,time_left,seconds_left,counter_obj,vec__12174,map__12175,map__12175__$1,attrs,start_time,target_time,interval,on_time_up,mode,_))
).call(null,counter_obj);
var seconds = javelin.core.formula(((function (mode_names,messages,mode_message,current_time,time_left,seconds_left,counter_obj,minutes,vec__12174,map__12175,map__12175__$1,attrs,start_time,target_time,interval,on_time_up,mode,_){
return (function (G__12198){
return cljs.core.cst$kw$seconds.cljs$core$IFn$_invoke$arity$1(G__12198);
});})(mode_names,messages,mode_message,current_time,time_left,seconds_left,counter_obj,minutes,vec__12174,map__12175,map__12175__$1,attrs,start_time,target_time,interval,on_time_up,mode,_))
).call(null,counter_obj);
var tick = ((function (mode_names,messages,mode_message,current_time,time_left,seconds_left,counter_obj,minutes,seconds,vec__12174,map__12175,map__12175__$1,attrs,start_time,target_time,interval,on_time_up,mode,_){
return (function hoplon$app_pages$_index_DOT_html$timer_$_tick(){
var G__12206 = ((function (mode_names,messages,mode_message,current_time,time_left,seconds_left,counter_obj,minutes,seconds,vec__12174,map__12175,map__12175__$1,attrs,start_time,target_time,interval,on_time_up,mode,_){
return (function (){
var G__12207_12324 = current_time;
var G__12208_12325 = Date.now();
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__12207_12324,G__12208_12325) : cljs.core.reset_BANG_.call(null,G__12207_12324,G__12208_12325));

if((((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(time_left) : cljs.core.deref.call(null,time_left)) <= (0))) && (cljs.core.some_QMARK_(on_time_up))){
hoplon.app_pages._index_DOT_html.beep.play();

(on_time_up.cljs$core$IFn$_invoke$arity$0 ? on_time_up.cljs$core$IFn$_invoke$arity$0() : on_time_up.call(null));

return hoplon$app_pages$_index_DOT_html$timer_$_tick();
} else {
return hoplon$app_pages$_index_DOT_html$timer_$_tick();
}
});})(mode_names,messages,mode_message,current_time,time_left,seconds_left,counter_obj,minutes,seconds,vec__12174,map__12175,map__12175__$1,attrs,start_time,target_time,interval,on_time_up,mode,_))
;
return requestAnimationFrame(G__12206);
});})(mode_names,messages,mode_message,current_time,time_left,seconds_left,counter_obj,minutes,seconds,vec__12174,map__12175,map__12175__$1,attrs,start_time,target_time,interval,on_time_up,mode,_))
;
var mode_name = javelin.core.formula(((function (mode_names,messages,mode_message,current_time,time_left,seconds_left,counter_obj,minutes,seconds,tick,vec__12174,map__12175,map__12175__$1,attrs,start_time,target_time,interval,on_time_up,mode,_){
return (function (G__12209){
return cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(G__12209);
});})(mode_names,messages,mode_message,current_time,time_left,seconds_left,counter_obj,minutes,seconds,tick,vec__12174,map__12175,map__12175__$1,attrs,start_time,target_time,interval,on_time_up,mode,_))
).call(null,mode);
tick();

var G__12226 = cljs.core.cst$kw$class;
var G__12227 = javelin.core.formula(((function (G__12226,mode_names,messages,mode_message,current_time,time_left,seconds_left,counter_obj,minutes,seconds,tick,mode_name,vec__12174,map__12175,map__12175__$1,attrs,start_time,target_time,interval,on_time_up,mode,_){
return (function (G__12231,G__12232,G__12235,G__12236,G__12237,G__12234,G__12233){
var G__12241 = ((function (G__12226,mode_names,messages,mode_message,current_time,time_left,seconds_left,counter_obj,minutes,seconds,tick,mode_name,vec__12174,map__12175,map__12175__$1,attrs,start_time,target_time,interval,on_time_up,mode,_){
return (function (accumulator,head){
var lc = (G__12232.cljs$core$IFn$_invoke$arity$1 ? G__12232.cljs$core$IFn$_invoke$arity$1(head) : G__12232.call(null,head));
var G__12244 = accumulator;
var G__12245 = (G__12234.cljs$core$IFn$_invoke$arity$1 ? G__12234.cljs$core$IFn$_invoke$arity$1(lc) : G__12234.call(null,lc));
var G__12246 = (G__12235.cljs$core$IFn$_invoke$arity$2 ? G__12235.cljs$core$IFn$_invoke$arity$2(G__12236,head) : G__12235.call(null,G__12236,head));
return (G__12233.cljs$core$IFn$_invoke$arity$3 ? G__12233.cljs$core$IFn$_invoke$arity$3(G__12244,G__12245,G__12246) : G__12233.call(null,G__12244,G__12245,G__12246));
});})(G__12226,mode_names,messages,mode_message,current_time,time_left,seconds_left,counter_obj,minutes,seconds,tick,mode_name,vec__12174,map__12175,map__12175__$1,attrs,start_time,target_time,interval,on_time_up,mode,_))
;
var G__12242 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$container,true], null);
var G__12243 = G__12237;
return (G__12231.cljs$core$IFn$_invoke$arity$3 ? G__12231.cljs$core$IFn$_invoke$arity$3(G__12241,G__12242,G__12243) : G__12231.call(null,G__12241,G__12242,G__12243));
});})(G__12226,mode_names,messages,mode_message,current_time,time_left,seconds_left,counter_obj,minutes,seconds,tick,mode_name,vec__12174,map__12175,map__12175__$1,attrs,start_time,target_time,interval,on_time_up,mode,_))
).call(null,cljs.core.reduce,clojure.string.lower_case,cljs.core._EQ_,mode_name,mode_names,cljs.core.keyword,cljs.core.assoc);
var G__12228 = (function (){var G__12247 = cljs.core.cst$kw$class;
var G__12248 = "message";
var G__12249 = document.createTextNode("Hi, Romina!");
return (hoplon.core.h3.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.h3.cljs$core$IFn$_invoke$arity$3(G__12247,G__12248,G__12249) : hoplon.core.h3.call(null,G__12247,G__12248,G__12249));
})();
var G__12229 = (function (){var G__12273 = cljs.core.cst$kw$class;
var G__12274 = "nagger";
var G__12275 = (function (){var G__12284 = cljs.core.cst$kw$class;
var G__12285 = "clock";
var G__12286 = (function (){var G__12290 = (function (){var t__8391__auto__ = document.createTextNode("");
javelin.core.formula(((function (t__8391__auto__,G__12284,G__12285,G__12273,G__12274,G__12226,G__12227,G__12228,mode_names,messages,mode_message,current_time,time_left,seconds_left,counter_obj,minutes,seconds,tick,mode_name,vec__12174,map__12175,map__12175__$1,attrs,start_time,target_time,interval,on_time_up,mode,_){
return (function (G__12292,G__12291){
return G__12291.nodeValue = [cljs.core.str(G__12292)].join('');
});})(t__8391__auto__,G__12284,G__12285,G__12273,G__12274,G__12226,G__12227,G__12228,mode_names,messages,mode_message,current_time,time_left,seconds_left,counter_obj,minutes,seconds,tick,mode_name,vec__12174,map__12175,map__12175__$1,attrs,start_time,target_time,interval,on_time_up,mode,_))
).call(null,mode_name,t__8391__auto__);

return t__8391__auto__;
})();
return (hoplon.core.h2.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.h2.cljs$core$IFn$_invoke$arity$1(G__12290) : hoplon.core.h2.call(null,G__12290));
})();
var G__12287 = (function (){var G__12296 = cljs.core.cst$kw$class;
var G__12297 = "timer";
var G__12298 = (function (){var t__8391__auto__ = document.createTextNode("");
javelin.core.formula(((function (t__8391__auto__,G__12296,G__12297,G__12284,G__12285,G__12286,G__12273,G__12274,G__12226,G__12227,G__12228,mode_names,messages,mode_message,current_time,time_left,seconds_left,counter_obj,minutes,seconds,tick,mode_name,vec__12174,map__12175,map__12175__$1,attrs,start_time,target_time,interval,on_time_up,mode,_){
return (function (G__12300,G__12301,G__12299){
return G__12299.nodeValue = [cljs.core.str(G__12300),cljs.core.str(" : "),cljs.core.str(G__12301)].join('');
});})(t__8391__auto__,G__12296,G__12297,G__12284,G__12285,G__12286,G__12273,G__12274,G__12226,G__12227,G__12228,mode_names,messages,mode_message,current_time,time_left,seconds_left,counter_obj,minutes,seconds,tick,mode_name,vec__12174,map__12175,map__12175__$1,attrs,start_time,target_time,interval,on_time_up,mode,_))
).call(null,minutes,seconds,t__8391__auto__);

return t__8391__auto__;
})();
return (hoplon.core.h1.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.h1.cljs$core$IFn$_invoke$arity$3(G__12296,G__12297,G__12298) : hoplon.core.h1.call(null,G__12296,G__12297,G__12298));
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$4 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$4(G__12284,G__12285,G__12286,G__12287) : hoplon.core.div.call(null,G__12284,G__12285,G__12286,G__12287));
})();
var G__12276 = hoplon.app_pages._index_DOT_html.polar_progress.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$percentage,javelin.core.formula(((function (G__12273,G__12274,G__12275,G__12226,G__12227,G__12228,mode_names,messages,mode_message,current_time,time_left,seconds_left,counter_obj,minutes,seconds,tick,mode_name,vec__12174,map__12175,map__12175__$1,attrs,start_time,target_time,interval,on_time_up,mode,_){
return (function (G__12304,G__12302,G__12303){
return ((G__12302 - G__12303) / (G__12304 - G__12303));
});})(G__12273,G__12274,G__12275,G__12226,G__12227,G__12228,mode_names,messages,mode_message,current_time,time_left,seconds_left,counter_obj,minutes,seconds,tick,mode_name,vec__12174,map__12175,map__12175__$1,attrs,start_time,target_time,interval,on_time_up,mode,_))
).call(null,target_time,current_time,start_time),cljs.core.cst$kw$thickness,(6)], 0));
var G__12277 = (function (){var G__12307 = cljs.core.cst$kw$class;
var G__12308 = javelin.core.formula(((function (G__12307,G__12273,G__12274,G__12275,G__12276,G__12226,G__12227,G__12228,mode_names,messages,mode_message,current_time,time_left,seconds_left,counter_obj,minutes,seconds,tick,mode_name,vec__12174,map__12175,map__12175__$1,attrs,start_time,target_time,interval,on_time_up,mode,_){
return (function (G__12309,G__12310){
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$wiper,true,cljs.core.cst$kw$work_DASH_wiper,true,cljs.core.cst$kw$active,(G__12309.cljs$core$IFn$_invoke$arity$2 ? G__12309.cljs$core$IFn$_invoke$arity$2(G__12310,"Work") : G__12309.call(null,G__12310,"Work"))], null);
});})(G__12307,G__12273,G__12274,G__12275,G__12276,G__12226,G__12227,G__12228,mode_names,messages,mode_message,current_time,time_left,seconds_left,counter_obj,minutes,seconds,tick,mode_name,vec__12174,map__12175,map__12175__$1,attrs,start_time,target_time,interval,on_time_up,mode,_))
).call(null,cljs.core._EQ_,mode_name);
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$2(G__12307,G__12308) : hoplon.core.div.call(null,G__12307,G__12308));
})();
var G__12278 = (function (){var G__12313 = cljs.core.cst$kw$class;
var G__12314 = javelin.core.formula(((function (G__12313,G__12273,G__12274,G__12275,G__12276,G__12277,G__12226,G__12227,G__12228,mode_names,messages,mode_message,current_time,time_left,seconds_left,counter_obj,minutes,seconds,tick,mode_name,vec__12174,map__12175,map__12175__$1,attrs,start_time,target_time,interval,on_time_up,mode,_){
return (function (G__12315,G__12316){
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$wiper,true,cljs.core.cst$kw$play_DASH_wiper,true,cljs.core.cst$kw$active,(G__12315.cljs$core$IFn$_invoke$arity$2 ? G__12315.cljs$core$IFn$_invoke$arity$2(G__12316,"Play") : G__12315.call(null,G__12316,"Play"))], null);
});})(G__12313,G__12273,G__12274,G__12275,G__12276,G__12277,G__12226,G__12227,G__12228,mode_names,messages,mode_message,current_time,time_left,seconds_left,counter_obj,minutes,seconds,tick,mode_name,vec__12174,map__12175,map__12175__$1,attrs,start_time,target_time,interval,on_time_up,mode,_))
).call(null,cljs.core._EQ_,mode_name);
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$2(G__12313,G__12314) : hoplon.core.div.call(null,G__12313,G__12314));
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$6 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$6(G__12273,G__12274,G__12275,G__12276,G__12277,G__12278) : hoplon.core.div.call(null,G__12273,G__12274,G__12275,G__12276,G__12277,G__12278));
})();
var G__12230 = (function (){var G__12319 = cljs.core.cst$kw$class;
var G__12320 = "message";
var G__12321 = (function (){var t__8391__auto__ = document.createTextNode("");
javelin.core.formula(((function (t__8391__auto__,G__12319,G__12320,G__12226,G__12227,G__12228,G__12229,mode_names,messages,mode_message,current_time,time_left,seconds_left,counter_obj,minutes,seconds,tick,mode_name,vec__12174,map__12175,map__12175__$1,attrs,start_time,target_time,interval,on_time_up,mode,_){
return (function (G__12323,G__12322){
return G__12322.nodeValue = G__12323;
});})(t__8391__auto__,G__12319,G__12320,G__12226,G__12227,G__12228,G__12229,mode_names,messages,mode_message,current_time,time_left,seconds_left,counter_obj,minutes,seconds,tick,mode_name,vec__12174,map__12175,map__12175__$1,attrs,start_time,target_time,interval,on_time_up,mode,_))
).call(null,mode_message,t__8391__auto__);

return t__8391__auto__;
})();
return (hoplon.core.h3.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.h3.cljs$core$IFn$_invoke$arity$3(G__12319,G__12320,G__12321) : hoplon.core.h3.call(null,G__12319,G__12320,G__12321));
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$5 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$5(G__12226,G__12227,G__12228,G__12229,G__12230) : hoplon.core.div.call(null,G__12226,G__12227,G__12228,G__12229,G__12230));
};
var hoplon$app_pages$_index_DOT_html$timer = function (var_args){
var args__8330__auto__ = null;
if (arguments.length > 0) {
var G__12326__i = 0, G__12326__a = new Array(arguments.length -  0);
while (G__12326__i < G__12326__a.length) {G__12326__a[G__12326__i] = arguments[G__12326__i + 0]; ++G__12326__i;}
  args__8330__auto__ = new cljs.core.IndexedSeq(G__12326__a,0);
} 
return hoplon$app_pages$_index_DOT_html$timer__delegate.call(this,args__8330__auto__);};
hoplon$app_pages$_index_DOT_html$timer.cljs$lang$maxFixedArity = 0;
hoplon$app_pages$_index_DOT_html$timer.cljs$lang$applyTo = (function (arglist__12327){
var args__8330__auto__ = cljs.core.seq(arglist__12327);
return hoplon$app_pages$_index_DOT_html$timer__delegate(args__8330__auto__);
});
hoplon$app_pages$_index_DOT_html$timer.cljs$core$IFn$_invoke$arity$variadic = hoplon$app_pages$_index_DOT_html$timer__delegate;
return hoplon$app_pages$_index_DOT_html$timer;
})()
;
hoplon.core.html.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(function (){var G__12329 = (hoplon.core.link.cljs$core$IFn$_invoke$arity$4 ? hoplon.core.link.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$kw$href,"assets/main.css",cljs.core.cst$kw$rel,"stylesheet") : hoplon.core.link.call(null,cljs.core.cst$kw$href,"assets/main.css",cljs.core.cst$kw$rel,"stylesheet"));
var G__12330 = (hoplon.core.link.cljs$core$IFn$_invoke$arity$4 ? hoplon.core.link.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$kw$href,"https://fonts.googleapis.com/css?family=Raleway:400,300,900",cljs.core.cst$kw$rel,"stylesheet") : hoplon.core.link.call(null,cljs.core.cst$kw$href,"https://fonts.googleapis.com/css?family=Raleway:400,300,900",cljs.core.cst$kw$rel,"stylesheet"));
return (hoplon.core.head.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.head.cljs$core$IFn$_invoke$arity$2(G__12329,G__12330) : hoplon.core.head.call(null,G__12329,G__12330));
})(),(function (){var G__12338 = (function (){var alert_open = javelin.core.cell.cljs$core$IFn$_invoke$arity$1(false);
var current_mode_index = javelin.core.cell.cljs$core$IFn$_invoke$arity$1((0));
var current_mode = javelin.core.formula(((function (alert_open,current_mode_index){
return (function (G__12339,G__12340,G__12341){
return (G__12339.cljs$core$IFn$_invoke$arity$2 ? G__12339.cljs$core$IFn$_invoke$arity$2(G__12340,G__12341) : G__12339.call(null,G__12340,G__12341));
});})(alert_open,current_mode_index))
).call(null,cljs.core.get,hoplon.app_pages._index_DOT_html.modes,current_mode_index);
var target_time = javelin.core.cell.cljs$core$IFn$_invoke$arity$1((cljs.core.cst$kw$duration.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(current_mode) : cljs.core.deref.call(null,current_mode))) + Date.now()));
var start_time = javelin.core.cell.cljs$core$IFn$_invoke$arity$1(Date.now());
var on_time_up = ((function (alert_open,current_mode_index,current_mode,target_time,start_time){
return (function (){
window.alert("Time's up!");

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(current_mode_index,((function (alert_open,current_mode_index,current_mode,target_time,start_time){
return (function (p1__12328_SHARP_){
if(cljs.core.contains_QMARK_(hoplon.app_pages._index_DOT_html.modes,(p1__12328_SHARP_ + (1)))){
return (p1__12328_SHARP_ + (1));
} else {
return (0);
}
});})(alert_open,current_mode_index,current_mode,target_time,start_time))
);

var G__12342_12346 = start_time;
var G__12343_12347 = Date.now();
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__12342_12346,G__12343_12347) : cljs.core.reset_BANG_.call(null,G__12342_12346,G__12343_12347));

var G__12344 = target_time;
var G__12345 = (cljs.core.cst$kw$duration.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(current_mode) : cljs.core.deref.call(null,current_mode))) + Date.now());
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__12344,G__12345) : cljs.core.reset_BANG_.call(null,G__12344,G__12345));
});})(alert_open,current_mode_index,current_mode,target_time,start_time))
;
return hoplon.app_pages._index_DOT_html.timer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$start_DASH_time,start_time,cljs.core.cst$kw$target_DASH_time,target_time,cljs.core.cst$kw$on_DASH_time_DASH_up,on_time_up,cljs.core.cst$kw$mode,current_mode], 0));
})();
return (hoplon.core.body.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.body.cljs$core$IFn$_invoke$arity$1(G__12338) : hoplon.core.body.call(null,G__12338));
})()], 0));
