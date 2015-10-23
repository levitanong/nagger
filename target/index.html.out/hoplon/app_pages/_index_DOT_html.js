// Compiled by ClojureScript 1.7.122 {}
goog.provide('hoplon.app_pages._index_DOT_html');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('hoplon.svg');
goog.require('nagger.util');
goog.require('javelin.core');
goog.require('hoplon.core');
cljs.core._add_method.call(null,hoplon.core.do_BANG_,new cljs.core.Keyword(null,"viewBox","viewBox",-469489477),(function (elem,_,value){
if(cljs.core._EQ_.call(null,false,value)){
return elem.removeAttribute("viewBox");
} else {
return elem.setAttribute("viewBox",value);
}
}));
cljs.core._add_method.call(null,hoplon.core.do_BANG_,new cljs.core.Keyword(null,"class","class",-2030961996),(function (elem,_,kvs){
var __GT_map = (function (p1__9774_SHARP_){
return cljs.core.zipmap.call(null,p1__9774_SHARP_,cljs.core.repeat.call(null,true));
});
var clmap = ((cljs.core.map_QMARK_.call(null,kvs))?kvs:__GT_map.call(null,((typeof kvs === 'string')?kvs.split(/\s+/):cljs.core.seq.call(null,kvs))));
var cl = elem.classList;
var seq__9775 = cljs.core.seq.call(null,clmap);
var chunk__9776 = null;
var count__9777 = (0);
var i__9778 = (0);
while(true){
if((i__9778 < count__9777)){
var vec__9779 = cljs.core._nth.call(null,chunk__9776,i__9778);
var c = cljs.core.nth.call(null,vec__9779,(0),null);
var p_QMARK_ = cljs.core.nth.call(null,vec__9779,(1),null);
cl.toggle(cljs.core.name.call(null,c),cljs.core.boolean$.call(null,p_QMARK_));

var G__9781 = seq__9775;
var G__9782 = chunk__9776;
var G__9783 = count__9777;
var G__9784 = (i__9778 + (1));
seq__9775 = G__9781;
chunk__9776 = G__9782;
count__9777 = G__9783;
i__9778 = G__9784;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__9775);
if(temp__4425__auto__){
var seq__9775__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9775__$1)){
var c__5891__auto__ = cljs.core.chunk_first.call(null,seq__9775__$1);
var G__9785 = cljs.core.chunk_rest.call(null,seq__9775__$1);
var G__9786 = c__5891__auto__;
var G__9787 = cljs.core.count.call(null,c__5891__auto__);
var G__9788 = (0);
seq__9775 = G__9785;
chunk__9776 = G__9786;
count__9777 = G__9787;
i__9778 = G__9788;
continue;
} else {
var vec__9780 = cljs.core.first.call(null,seq__9775__$1);
var c = cljs.core.nth.call(null,vec__9780,(0),null);
var p_QMARK_ = cljs.core.nth.call(null,vec__9780,(1),null);
cl.toggle(cljs.core.name.call(null,c),cljs.core.boolean$.call(null,p_QMARK_));

var G__9789 = cljs.core.next.call(null,seq__9775__$1);
var G__9790 = null;
var G__9791 = (0);
var G__9792 = (0);
seq__9775 = G__9789;
chunk__9776 = G__9790;
count__9777 = G__9791;
i__9778 = G__9792;
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
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"hours","hours",58380855),nagger.util.pad.call(null,(2),time.getUTCHours()),new cljs.core.Keyword(null,"minutes","minutes",1319166394),nagger.util.pad.call(null,(2),time.getUTCMinutes()),new cljs.core.Keyword(null,"seconds","seconds",-445266194),nagger.util.pad.call(null,(2),time.getUTCSeconds())], null);
});
hoplon.app_pages._index_DOT_html.modes = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"Work",new cljs.core.Keyword(null,"duration","duration",1444101068),(((52) * (60)) * (1000)),new cljs.core.Keyword(null,"messages","messages",345434482),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, ["You're not on reddit, are you?","Facebook is distracting, isn't it?","Work, slave!","Remember, sweets make you sleepy.","Concentrate.","Don't let this message disturb you.","Have an apple.","You only have at most less than an hour before you can take a break!"], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"Play",new cljs.core.Keyword(null,"duration","duration",1444101068),(((17) * (60)) * (1000)),new cljs.core.Keyword(null,"messages","messages",345434482),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Are you resting?","Take a walk!","I wish I were with you.","Don't think about work!","Think about me instead.","You better not be working!"], null)], null)], null);
/**
 * A donut-shaped progress bar
 * @param {...*} var_args
 */
hoplon.app_pages._index_DOT_html.polar_progress = (function() { 
var hoplon$app_pages$_index_DOT_html$polar_progress__delegate = function (args__6703__auto__){
var vec__9815 = hoplon.core.parse_args.call(null,args__6703__auto__);
var map__9816 = cljs.core.nth.call(null,vec__9815,(0),null);
var map__9816__$1 = ((((!((map__9816 == null)))?((((map__9816.cljs$lang$protocol_mask$partition0$ & (64))) || (map__9816.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9816):map__9816);
var percentage = cljs.core.get.call(null,map__9816__$1,new cljs.core.Keyword(null,"percentage","percentage",-1610213650));
var thickness = cljs.core.get.call(null,map__9816__$1,new cljs.core.Keyword(null,"thickness","thickness",-940175454));
var _ = cljs.core.nth.call(null,vec__9815,(1),null);
var PI = Math.PI;
var p = javelin.core.formula.call(null,((function (PI,vec__9815,map__9816,map__9816__$1,percentage,thickness,_){
return (function (G__9818){
return Math.floor(((100) * G__9818));
});})(PI,vec__9815,map__9816,map__9816__$1,percentage,thickness,_))
).call(null,percentage);
var theta = javelin.core.formula.call(null,((function (PI,p,vec__9815,map__9816,map__9816__$1,percentage,thickness,_){
return (function (G__9820,G__9819){
return (((G__9819 * (2)) * G__9820) - (0.5 * G__9820));
});})(PI,p,vec__9815,map__9816,map__9816__$1,percentage,thickness,_))
).call(null,PI,percentage);
var init_x = (50);
var init_y = (50);
var radius = ((50) - (thickness / (2)));
var x = javelin.core.formula.call(null,((function (PI,p,theta,init_x,init_y,radius,vec__9815,map__9816,map__9816__$1,percentage,thickness,_){
return (function (G__9821,G__9823,G__9822){
return (G__9821 + (G__9822 * Math.cos(G__9823)));
});})(PI,p,theta,init_x,init_y,radius,vec__9815,map__9816,map__9816__$1,percentage,thickness,_))
).call(null,init_x,theta,radius);
var y = javelin.core.formula.call(null,((function (PI,p,theta,init_x,init_y,radius,x,vec__9815,map__9816,map__9816__$1,percentage,thickness,_){
return (function (G__9826,G__9825,G__9824){
return (G__9824 + (G__9825 * Math.sin(G__9826)));
});})(PI,p,theta,init_x,init_y,radius,x,vec__9815,map__9816,map__9816__$1,percentage,thickness,_))
).call(null,theta,radius,init_y);
var d_vec = javelin.core.formula.call(null,((function (PI,p,theta,init_x,init_y,radius,x,y,vec__9815,map__9816,map__9816__$1,percentage,thickness,_){
return (function (G__9832,G__9833,G__9827,G__9831,G__9830,G__9829,G__9828){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["M",G__9827,(G__9828 - G__9829)], null),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, ["A",G__9829,G__9829,(0),(cljs.core.truth_((G__9830 > (0.5 * G__9831)))?(1):(0)),(1),G__9832,G__9833], null)], null);
});})(PI,p,theta,init_x,init_y,radius,x,y,vec__9815,map__9816,map__9816__$1,percentage,thickness,_))
).call(null,x,y,init_x,PI,theta,radius,init_y);
return hoplon.svg.svg.call(null,new cljs.core.Keyword(null,"viewBox","viewBox",-469489477),"0 0 100 100",new cljs.core.Keyword(null,"class","class",-2030961996),"polar-loader",hoplon.svg.circle.call(null,new cljs.core.Keyword(null,"class","class",-2030961996),"loader-elem track",new cljs.core.Keyword(null,"cx","cx",1272694324),init_x,new cljs.core.Keyword(null,"cy","cy",755331060),init_y,new cljs.core.Keyword(null,"r","r",-471384190),radius),hoplon.svg.path.call(null,new cljs.core.Keyword(null,"class","class",-2030961996),"loader-elem progress",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),thickness,new cljs.core.Keyword(null,"d","d",1972142424),javelin.core.formula.call(null,((function (PI,p,theta,init_x,init_y,radius,x,y,d_vec,vec__9815,map__9816,map__9816__$1,percentage,thickness,_){
return (function (G__9836,G__9834,G__9835){
return G__9834.call(null," ",G__9835.call(null,G__9836));
});})(PI,p,theta,init_x,init_y,radius,x,y,d_vec,vec__9815,map__9816,map__9816__$1,percentage,thickness,_))
).call(null,d_vec,clojure.string.join,cljs.core.flatten)));
};
var hoplon$app_pages$_index_DOT_html$polar_progress = function (var_args){
var args__6703__auto__ = null;
if (arguments.length > 0) {
var G__9837__i = 0, G__9837__a = new Array(arguments.length -  0);
while (G__9837__i < G__9837__a.length) {G__9837__a[G__9837__i] = arguments[G__9837__i + 0]; ++G__9837__i;}
  args__6703__auto__ = new cljs.core.IndexedSeq(G__9837__a,0);
} 
return hoplon$app_pages$_index_DOT_html$polar_progress__delegate.call(this,args__6703__auto__);};
hoplon$app_pages$_index_DOT_html$polar_progress.cljs$lang$maxFixedArity = 0;
hoplon$app_pages$_index_DOT_html$polar_progress.cljs$lang$applyTo = (function (arglist__9838){
var args__6703__auto__ = cljs.core.seq(arglist__9838);
return hoplon$app_pages$_index_DOT_html$polar_progress__delegate(args__6703__auto__);
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
var hoplon$app_pages$_index_DOT_html$timer__delegate = function (args__6703__auto__){
var vec__9880 = hoplon.core.parse_args.call(null,args__6703__auto__);
var map__9881 = cljs.core.nth.call(null,vec__9880,(0),null);
var map__9881__$1 = ((((!((map__9881 == null)))?((((map__9881.cljs$lang$protocol_mask$partition0$ & (64))) || (map__9881.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9881):map__9881);
var attrs = map__9881__$1;
var start_time = cljs.core.get.call(null,map__9881__$1,new cljs.core.Keyword(null,"start-time","start-time",814801386));
var target_time = cljs.core.get.call(null,map__9881__$1,new cljs.core.Keyword(null,"target-time","target-time",302557789));
var interval = cljs.core.get.call(null,map__9881__$1,new cljs.core.Keyword(null,"interval","interval",1708495417));
var on_time_up = cljs.core.get.call(null,map__9881__$1,new cljs.core.Keyword(null,"on-time-up","on-time-up",472542531));
var mode = cljs.core.get.call(null,map__9881__$1,new cljs.core.Keyword(null,"mode","mode",654403691));
var _ = cljs.core.nth.call(null,vec__9880,(1),null);
var mode_names = javelin.core.formula.call(null,((function (vec__9880,map__9881,map__9881__$1,attrs,start_time,target_time,interval,on_time_up,mode,_){
return (function (G__9884,G__9883){
return G__9883.call(null,((function (vec__9880,map__9881,map__9881__$1,attrs,start_time,target_time,interval,on_time_up,mode,_){
return (function (p1__9839_SHARP_){
return new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(p1__9839_SHARP_);
});})(vec__9880,map__9881,map__9881__$1,attrs,start_time,target_time,interval,on_time_up,mode,_))
,G__9884);
});})(vec__9880,map__9881,map__9881__$1,attrs,start_time,target_time,interval,on_time_up,mode,_))
).call(null,hoplon.app_pages._index_DOT_html.modes,cljs.core.mapv);
var messages = javelin.core.formula.call(null,((function (mode_names,vec__9880,map__9881,map__9881__$1,attrs,start_time,target_time,interval,on_time_up,mode,_){
return (function (G__9885){
return new cljs.core.Keyword(null,"messages","messages",345434482).cljs$core$IFn$_invoke$arity$1(G__9885);
});})(mode_names,vec__9880,map__9881,map__9881__$1,attrs,start_time,target_time,interval,on_time_up,mode,_))
).call(null,mode);
var mode_message = javelin.core.formula.call(null,((function (mode_names,messages,vec__9880,map__9881,map__9881__$1,attrs,start_time,target_time,interval,on_time_up,mode,_){
return (function (G__9888,G__9886,G__9887,G__9889){
return G__9886.call(null,G__9887,G__9888.call(null,G__9889.call(null,G__9887)));
});})(mode_names,messages,vec__9880,map__9881,map__9881__$1,attrs,start_time,target_time,interval,on_time_up,mode,_))
).call(null,cljs.core.rand_int,cljs.core.nth,messages,cljs.core.count);
var current_time = javelin.core.cell.call(null,Date.now());
var time_left = javelin.core.formula.call(null,((function (mode_names,messages,mode_message,current_time,vec__9880,map__9881,map__9881__$1,attrs,start_time,target_time,interval,on_time_up,mode,_){
return (function (G__9890,G__9891){
return (G__9890 - G__9891);
});})(mode_names,messages,mode_message,current_time,vec__9880,map__9881,map__9881__$1,attrs,start_time,target_time,interval,on_time_up,mode,_))
).call(null,target_time,current_time);
var seconds_left = javelin.core.formula.call(null,((function (mode_names,messages,mode_message,current_time,time_left,vec__9880,map__9881,map__9881__$1,attrs,start_time,target_time,interval,on_time_up,mode,_){
return (function (G__9892,G__9893){
return G__9892.call(null,(1000),G__9893);
});})(mode_names,messages,mode_message,current_time,time_left,vec__9880,map__9881,map__9881__$1,attrs,start_time,target_time,interval,on_time_up,mode,_))
).call(null,nagger.util.round,time_left);
var counter_obj = javelin.core.formula.call(null,((function (mode_names,messages,mode_message,current_time,time_left,seconds_left,vec__9880,map__9881,map__9881__$1,attrs,start_time,target_time,interval,on_time_up,mode,_){
return (function (G__9894,G__9895){
return G__9894.call(null,(new Date(G__9895)));
});})(mode_names,messages,mode_message,current_time,time_left,seconds_left,vec__9880,map__9881,map__9881__$1,attrs,start_time,target_time,interval,on_time_up,mode,_))
).call(null,hoplon.app_pages._index_DOT_html.split_time_UTC,seconds_left);
var minutes = javelin.core.formula.call(null,((function (mode_names,messages,mode_message,current_time,time_left,seconds_left,counter_obj,vec__9880,map__9881,map__9881__$1,attrs,start_time,target_time,interval,on_time_up,mode,_){
return (function (G__9896){
return new cljs.core.Keyword(null,"minutes","minutes",1319166394).cljs$core$IFn$_invoke$arity$1(G__9896);
});})(mode_names,messages,mode_message,current_time,time_left,seconds_left,counter_obj,vec__9880,map__9881,map__9881__$1,attrs,start_time,target_time,interval,on_time_up,mode,_))
).call(null,counter_obj);
var seconds = javelin.core.formula.call(null,((function (mode_names,messages,mode_message,current_time,time_left,seconds_left,counter_obj,minutes,vec__9880,map__9881,map__9881__$1,attrs,start_time,target_time,interval,on_time_up,mode,_){
return (function (G__9897){
return new cljs.core.Keyword(null,"seconds","seconds",-445266194).cljs$core$IFn$_invoke$arity$1(G__9897);
});})(mode_names,messages,mode_message,current_time,time_left,seconds_left,counter_obj,minutes,vec__9880,map__9881,map__9881__$1,attrs,start_time,target_time,interval,on_time_up,mode,_))
).call(null,counter_obj);
var tick = ((function (mode_names,messages,mode_message,current_time,time_left,seconds_left,counter_obj,minutes,seconds,vec__9880,map__9881,map__9881__$1,attrs,start_time,target_time,interval,on_time_up,mode,_){
return (function hoplon$app_pages$_index_DOT_html$timer_$_tick(){
return setInterval(((function (mode_names,messages,mode_message,current_time,time_left,seconds_left,counter_obj,minutes,seconds,vec__9880,map__9881,map__9881__$1,attrs,start_time,target_time,interval,on_time_up,mode,_){
return (function (){
cljs.core.reset_BANG_.call(null,current_time,Date.now());

if(((cljs.core.deref.call(null,time_left) <= (0))) && (cljs.core.some_QMARK_.call(null,on_time_up))){
hoplon.app_pages._index_DOT_html.beep.play();

on_time_up.call(null);

return hoplon$app_pages$_index_DOT_html$timer_$_tick.call(null);
} else {
return null;
}
});})(mode_names,messages,mode_message,current_time,time_left,seconds_left,counter_obj,minutes,seconds,vec__9880,map__9881,map__9881__$1,attrs,start_time,target_time,interval,on_time_up,mode,_))
,(16));
});})(mode_names,messages,mode_message,current_time,time_left,seconds_left,counter_obj,minutes,seconds,vec__9880,map__9881,map__9881__$1,attrs,start_time,target_time,interval,on_time_up,mode,_))
;
var mode_name = javelin.core.formula.call(null,((function (mode_names,messages,mode_message,current_time,time_left,seconds_left,counter_obj,minutes,seconds,tick,vec__9880,map__9881,map__9881__$1,attrs,start_time,target_time,interval,on_time_up,mode,_){
return (function (G__9898){
return new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(G__9898);
});})(mode_names,messages,mode_message,current_time,time_left,seconds_left,counter_obj,minutes,seconds,tick,vec__9880,map__9881,map__9881__$1,attrs,start_time,target_time,interval,on_time_up,mode,_))
).call(null,mode);
tick.call(null);

return hoplon.core.div.call(null,new cljs.core.Keyword(null,"class","class",-2030961996),javelin.core.formula.call(null,((function (mode_names,messages,mode_message,current_time,time_left,seconds_left,counter_obj,minutes,seconds,tick,mode_name,vec__9880,map__9881,map__9881__$1,attrs,start_time,target_time,interval,on_time_up,mode,_){
return (function (G__9899,G__9900,G__9903,G__9904,G__9905,G__9902,G__9901){
return G__9899.call(null,((function (mode_names,messages,mode_message,current_time,time_left,seconds_left,counter_obj,minutes,seconds,tick,mode_name,vec__9880,map__9881,map__9881__$1,attrs,start_time,target_time,interval,on_time_up,mode,_){
return (function (accumulator,head){
var lc = G__9900.call(null,head);
return G__9901.call(null,accumulator,G__9902.call(null,lc),G__9903.call(null,G__9904,head));
});})(mode_names,messages,mode_message,current_time,time_left,seconds_left,counter_obj,minutes,seconds,tick,mode_name,vec__9880,map__9881,map__9881__$1,attrs,start_time,target_time,interval,on_time_up,mode,_))
,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"container","container",-1736937707),true], null),G__9905);
});})(mode_names,messages,mode_message,current_time,time_left,seconds_left,counter_obj,minutes,seconds,tick,mode_name,vec__9880,map__9881,map__9881__$1,attrs,start_time,target_time,interval,on_time_up,mode,_))
).call(null,cljs.core.reduce,clojure.string.lower_case,cljs.core._EQ_,mode_name,mode_names,cljs.core.keyword,cljs.core.assoc),hoplon.core.h3.call(null,new cljs.core.Keyword(null,"class","class",-2030961996),"message",document.createTextNode("Hi, Romina!")),hoplon.core.div.call(null,new cljs.core.Keyword(null,"class","class",-2030961996),"nagger",hoplon.core.div.call(null,new cljs.core.Keyword(null,"class","class",-2030961996),"clock",hoplon.core.h2.call(null,(function (){var t__6764__auto__ = document.createTextNode("");
javelin.core.formula.call(null,((function (t__6764__auto__,mode_names,messages,mode_message,current_time,time_left,seconds_left,counter_obj,minutes,seconds,tick,mode_name,vec__9880,map__9881,map__9881__$1,attrs,start_time,target_time,interval,on_time_up,mode,_){
return (function (G__9907,G__9906){
return G__9906.nodeValue = [cljs.core.str(G__9907)].join('');
});})(t__6764__auto__,mode_names,messages,mode_message,current_time,time_left,seconds_left,counter_obj,minutes,seconds,tick,mode_name,vec__9880,map__9881,map__9881__$1,attrs,start_time,target_time,interval,on_time_up,mode,_))
).call(null,mode_name,t__6764__auto__);

return t__6764__auto__;
})()),hoplon.core.h1.call(null,new cljs.core.Keyword(null,"class","class",-2030961996),"timer",(function (){var t__6764__auto__ = document.createTextNode("");
javelin.core.formula.call(null,((function (t__6764__auto__,mode_names,messages,mode_message,current_time,time_left,seconds_left,counter_obj,minutes,seconds,tick,mode_name,vec__9880,map__9881,map__9881__$1,attrs,start_time,target_time,interval,on_time_up,mode,_){
return (function (G__9909,G__9908,G__9910){
return G__9908.nodeValue = [cljs.core.str(G__9909),cljs.core.str(" : "),cljs.core.str(G__9910)].join('');
});})(t__6764__auto__,mode_names,messages,mode_message,current_time,time_left,seconds_left,counter_obj,minutes,seconds,tick,mode_name,vec__9880,map__9881,map__9881__$1,attrs,start_time,target_time,interval,on_time_up,mode,_))
).call(null,minutes,t__6764__auto__,seconds);

return t__6764__auto__;
})())),hoplon.app_pages._index_DOT_html.polar_progress.call(null,new cljs.core.Keyword(null,"percentage","percentage",-1610213650),javelin.core.formula.call(null,((function (mode_names,messages,mode_message,current_time,time_left,seconds_left,counter_obj,minutes,seconds,tick,mode_name,vec__9880,map__9881,map__9881__$1,attrs,start_time,target_time,interval,on_time_up,mode,_){
return (function (G__9913,G__9911,G__9912){
return ((G__9911 - G__9912) / (G__9913 - G__9912));
});})(mode_names,messages,mode_message,current_time,time_left,seconds_left,counter_obj,minutes,seconds,tick,mode_name,vec__9880,map__9881,map__9881__$1,attrs,start_time,target_time,interval,on_time_up,mode,_))
).call(null,target_time,current_time,start_time),new cljs.core.Keyword(null,"thickness","thickness",-940175454),(6)),hoplon.core.div.call(null,new cljs.core.Keyword(null,"class","class",-2030961996),javelin.core.formula.call(null,((function (mode_names,messages,mode_message,current_time,time_left,seconds_left,counter_obj,minutes,seconds,tick,mode_name,vec__9880,map__9881,map__9881__$1,attrs,start_time,target_time,interval,on_time_up,mode,_){
return (function (G__9914,G__9915){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"wiper","wiper",-1556581125),true,new cljs.core.Keyword(null,"work-wiper","work-wiper",-1471424596),true,new cljs.core.Keyword(null,"active","active",1895962068),G__9914.call(null,G__9915,"Work")], null);
});})(mode_names,messages,mode_message,current_time,time_left,seconds_left,counter_obj,minutes,seconds,tick,mode_name,vec__9880,map__9881,map__9881__$1,attrs,start_time,target_time,interval,on_time_up,mode,_))
).call(null,cljs.core._EQ_,mode_name)),hoplon.core.div.call(null,new cljs.core.Keyword(null,"class","class",-2030961996),javelin.core.formula.call(null,((function (mode_names,messages,mode_message,current_time,time_left,seconds_left,counter_obj,minutes,seconds,tick,mode_name,vec__9880,map__9881,map__9881__$1,attrs,start_time,target_time,interval,on_time_up,mode,_){
return (function (G__9916,G__9917){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"wiper","wiper",-1556581125),true,new cljs.core.Keyword(null,"play-wiper","play-wiper",-673956125),true,new cljs.core.Keyword(null,"active","active",1895962068),G__9916.call(null,G__9917,"Play")], null);
});})(mode_names,messages,mode_message,current_time,time_left,seconds_left,counter_obj,minutes,seconds,tick,mode_name,vec__9880,map__9881,map__9881__$1,attrs,start_time,target_time,interval,on_time_up,mode,_))
).call(null,cljs.core._EQ_,mode_name))),hoplon.core.h3.call(null,new cljs.core.Keyword(null,"class","class",-2030961996),"message",(function (){var t__6764__auto__ = document.createTextNode("");
javelin.core.formula.call(null,((function (t__6764__auto__,mode_names,messages,mode_message,current_time,time_left,seconds_left,counter_obj,minutes,seconds,tick,mode_name,vec__9880,map__9881,map__9881__$1,attrs,start_time,target_time,interval,on_time_up,mode,_){
return (function (G__9919,G__9918){
return G__9918.nodeValue = G__9919;
});})(t__6764__auto__,mode_names,messages,mode_message,current_time,time_left,seconds_left,counter_obj,minutes,seconds,tick,mode_name,vec__9880,map__9881,map__9881__$1,attrs,start_time,target_time,interval,on_time_up,mode,_))
).call(null,mode_message,t__6764__auto__);

return t__6764__auto__;
})()));
};
var hoplon$app_pages$_index_DOT_html$timer = function (var_args){
var args__6703__auto__ = null;
if (arguments.length > 0) {
var G__9920__i = 0, G__9920__a = new Array(arguments.length -  0);
while (G__9920__i < G__9920__a.length) {G__9920__a[G__9920__i] = arguments[G__9920__i + 0]; ++G__9920__i;}
  args__6703__auto__ = new cljs.core.IndexedSeq(G__9920__a,0);
} 
return hoplon$app_pages$_index_DOT_html$timer__delegate.call(this,args__6703__auto__);};
hoplon$app_pages$_index_DOT_html$timer.cljs$lang$maxFixedArity = 0;
hoplon$app_pages$_index_DOT_html$timer.cljs$lang$applyTo = (function (arglist__9921){
var args__6703__auto__ = cljs.core.seq(arglist__9921);
return hoplon$app_pages$_index_DOT_html$timer__delegate(args__6703__auto__);
});
hoplon$app_pages$_index_DOT_html$timer.cljs$core$IFn$_invoke$arity$variadic = hoplon$app_pages$_index_DOT_html$timer__delegate;
return hoplon$app_pages$_index_DOT_html$timer;
})()
;
hoplon.core.html.call(null,hoplon.core.head.call(null,hoplon.core.link.call(null,new cljs.core.Keyword(null,"href","href",-793805698),"assets/main.css",new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"),hoplon.core.link.call(null,new cljs.core.Keyword(null,"href","href",-793805698),"https://fonts.googleapis.com/css?family=Raleway:400,300,900",new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet")),hoplon.core.body.call(null,(function (){var alert_open = javelin.core.cell.call(null,false);
var current_mode_index = javelin.core.cell.call(null,(0));
var current_mode = javelin.core.formula.call(null,((function (alert_open,current_mode_index){
return (function (G__9923,G__9924,G__9925){
return G__9923.call(null,G__9924,G__9925);
});})(alert_open,current_mode_index))
).call(null,cljs.core.get,hoplon.app_pages._index_DOT_html.modes,current_mode_index);
var target_time = javelin.core.cell.call(null,(new cljs.core.Keyword(null,"duration","duration",1444101068).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,current_mode)) + Date.now()));
var start_time = javelin.core.cell.call(null,Date.now());
var on_time_up = ((function (alert_open,current_mode_index,current_mode,target_time,start_time){
return (function (){
alert("Time's up!");

cljs.core.swap_BANG_.call(null,current_mode_index,((function (alert_open,current_mode_index,current_mode,target_time,start_time){
return (function (p1__9922_SHARP_){
if(cljs.core.contains_QMARK_.call(null,hoplon.app_pages._index_DOT_html.modes,(p1__9922_SHARP_ + (1)))){
return (p1__9922_SHARP_ + (1));
} else {
return (0);
}
});})(alert_open,current_mode_index,current_mode,target_time,start_time))
);

cljs.core.reset_BANG_.call(null,start_time,Date.now());

return cljs.core.reset_BANG_.call(null,target_time,(new cljs.core.Keyword(null,"duration","duration",1444101068).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,current_mode)) + Date.now()));
});})(alert_open,current_mode_index,current_mode,target_time,start_time))
;
return hoplon.app_pages._index_DOT_html.timer.call(null,new cljs.core.Keyword(null,"start-time","start-time",814801386),start_time,new cljs.core.Keyword(null,"target-time","target-time",302557789),target_time,new cljs.core.Keyword(null,"on-time-up","on-time-up",472542531),on_time_up,new cljs.core.Keyword(null,"mode","mode",654403691),current_mode);
})()));

//# sourceMappingURL=_index_DOT_html.js.map