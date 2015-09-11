// Compiled by ClojureScript 1.7.122 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),args], null));

return args;
});
figwheel.client.console_print = (function figwheel$client$console_print(args){
console.log.apply(console,cljs.core.into_array.call(null,args));

return args;
});
figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__26068__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__26068 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26069__i = 0, G__26069__a = new Array(arguments.length -  0);
while (G__26069__i < G__26069__a.length) {G__26069__a[G__26069__i] = arguments[G__26069__i + 0]; ++G__26069__i;}
  args = new cljs.core.IndexedSeq(G__26069__a,0);
} 
return G__26068__delegate.call(this,args);};
G__26068.cljs$lang$maxFixedArity = 0;
G__26068.cljs$lang$applyTo = (function (arglist__26070){
var args = cljs.core.seq(arglist__26070);
return G__26068__delegate(args);
});
G__26068.cljs$core$IFn$_invoke$arity$variadic = G__26068__delegate;
return G__26068;
})()
;
});
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__26071){
var map__26074 = p__26071;
var map__26074__$1 = ((((!((map__26074 == null)))?((((map__26074.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26074.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26074):map__26074);
var message = cljs.core.get.call(null,map__26074__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__26074__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__16490__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__16490__auto__)){
return or__16490__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__16478__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__16478__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__16478__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__20810__auto___26204 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20810__auto___26204,ch){
return (function (){
var f__20811__auto__ = (function (){var switch__20745__auto__ = ((function (c__20810__auto___26204,ch){
return (function (state_26178){
var state_val_26179 = (state_26178[(1)]);
if((state_val_26179 === (7))){
var inst_26174 = (state_26178[(2)]);
var state_26178__$1 = state_26178;
var statearr_26180_26205 = state_26178__$1;
(statearr_26180_26205[(2)] = inst_26174);

(statearr_26180_26205[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26179 === (1))){
var state_26178__$1 = state_26178;
var statearr_26181_26206 = state_26178__$1;
(statearr_26181_26206[(2)] = null);

(statearr_26181_26206[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26179 === (4))){
var inst_26142 = (state_26178[(7)]);
var inst_26142__$1 = (state_26178[(2)]);
var state_26178__$1 = (function (){var statearr_26182 = state_26178;
(statearr_26182[(7)] = inst_26142__$1);

return statearr_26182;
})();
if(cljs.core.truth_(inst_26142__$1)){
var statearr_26183_26207 = state_26178__$1;
(statearr_26183_26207[(1)] = (5));

} else {
var statearr_26184_26208 = state_26178__$1;
(statearr_26184_26208[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26179 === (13))){
var state_26178__$1 = state_26178;
var statearr_26185_26209 = state_26178__$1;
(statearr_26185_26209[(2)] = null);

(statearr_26185_26209[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26179 === (6))){
var state_26178__$1 = state_26178;
var statearr_26186_26210 = state_26178__$1;
(statearr_26186_26210[(2)] = null);

(statearr_26186_26210[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26179 === (3))){
var inst_26176 = (state_26178[(2)]);
var state_26178__$1 = state_26178;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26178__$1,inst_26176);
} else {
if((state_val_26179 === (12))){
var inst_26149 = (state_26178[(8)]);
var inst_26162 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_26149);
var inst_26163 = cljs.core.first.call(null,inst_26162);
var inst_26164 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_26163);
var inst_26165 = console.warn("Figwheel: Not loading code with warnings - ",inst_26164);
var state_26178__$1 = state_26178;
var statearr_26187_26211 = state_26178__$1;
(statearr_26187_26211[(2)] = inst_26165);

(statearr_26187_26211[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26179 === (2))){
var state_26178__$1 = state_26178;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26178__$1,(4),ch);
} else {
if((state_val_26179 === (11))){
var inst_26158 = (state_26178[(2)]);
var state_26178__$1 = state_26178;
var statearr_26188_26212 = state_26178__$1;
(statearr_26188_26212[(2)] = inst_26158);

(statearr_26188_26212[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26179 === (9))){
var inst_26148 = (state_26178[(9)]);
var inst_26160 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_26148,opts);
var state_26178__$1 = state_26178;
if(cljs.core.truth_(inst_26160)){
var statearr_26189_26213 = state_26178__$1;
(statearr_26189_26213[(1)] = (12));

} else {
var statearr_26190_26214 = state_26178__$1;
(statearr_26190_26214[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26179 === (5))){
var inst_26142 = (state_26178[(7)]);
var inst_26148 = (state_26178[(9)]);
var inst_26144 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_26145 = (new cljs.core.PersistentArrayMap(null,2,inst_26144,null));
var inst_26146 = (new cljs.core.PersistentHashSet(null,inst_26145,null));
var inst_26147 = figwheel.client.focus_msgs.call(null,inst_26146,inst_26142);
var inst_26148__$1 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_26147);
var inst_26149 = cljs.core.first.call(null,inst_26147);
var inst_26150 = figwheel.client.reload_file_state_QMARK_.call(null,inst_26148__$1,opts);
var state_26178__$1 = (function (){var statearr_26191 = state_26178;
(statearr_26191[(8)] = inst_26149);

(statearr_26191[(9)] = inst_26148__$1);

return statearr_26191;
})();
if(cljs.core.truth_(inst_26150)){
var statearr_26192_26215 = state_26178__$1;
(statearr_26192_26215[(1)] = (8));

} else {
var statearr_26193_26216 = state_26178__$1;
(statearr_26193_26216[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26179 === (14))){
var inst_26168 = (state_26178[(2)]);
var state_26178__$1 = state_26178;
var statearr_26194_26217 = state_26178__$1;
(statearr_26194_26217[(2)] = inst_26168);

(statearr_26194_26217[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26179 === (10))){
var inst_26170 = (state_26178[(2)]);
var state_26178__$1 = (function (){var statearr_26195 = state_26178;
(statearr_26195[(10)] = inst_26170);

return statearr_26195;
})();
var statearr_26196_26218 = state_26178__$1;
(statearr_26196_26218[(2)] = null);

(statearr_26196_26218[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26179 === (8))){
var inst_26149 = (state_26178[(8)]);
var inst_26152 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_26153 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_26149);
var inst_26154 = cljs.core.async.timeout.call(null,(1000));
var inst_26155 = [inst_26153,inst_26154];
var inst_26156 = (new cljs.core.PersistentVector(null,2,(5),inst_26152,inst_26155,null));
var state_26178__$1 = state_26178;
return cljs.core.async.ioc_alts_BANG_.call(null,state_26178__$1,(11),inst_26156);
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
});})(c__20810__auto___26204,ch))
;
return ((function (switch__20745__auto__,c__20810__auto___26204,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__20746__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__20746__auto____0 = (function (){
var statearr_26200 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26200[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__20746__auto__);

(statearr_26200[(1)] = (1));

return statearr_26200;
});
var figwheel$client$file_reloader_plugin_$_state_machine__20746__auto____1 = (function (state_26178){
while(true){
var ret_value__20747__auto__ = (function (){try{while(true){
var result__20748__auto__ = switch__20745__auto__.call(null,state_26178);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20748__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20748__auto__;
}
break;
}
}catch (e26201){if((e26201 instanceof Object)){
var ex__20749__auto__ = e26201;
var statearr_26202_26219 = state_26178;
(statearr_26202_26219[(5)] = ex__20749__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26178);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26201;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20747__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26220 = state_26178;
state_26178 = G__26220;
continue;
} else {
return ret_value__20747__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__20746__auto__ = function(state_26178){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__20746__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__20746__auto____1.call(this,state_26178);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__20746__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__20746__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__20746__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__20746__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__20746__auto__;
})()
;})(switch__20745__auto__,c__20810__auto___26204,ch))
})();
var state__20812__auto__ = (function (){var statearr_26203 = f__20811__auto__.call(null);
(statearr_26203[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20810__auto___26204);

return statearr_26203;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20812__auto__);
});})(c__20810__auto___26204,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__26221_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__26221_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
var base_path_26228 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_26228){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var _STAR_print_fn_STAR_26226 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_26227 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_26226,_STAR_print_newline_STAR_26227,base_path_26228){
return (function() { 
var G__26229__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__26229 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26230__i = 0, G__26230__a = new Array(arguments.length -  0);
while (G__26230__i < G__26230__a.length) {G__26230__a[G__26230__i] = arguments[G__26230__i + 0]; ++G__26230__i;}
  args = new cljs.core.IndexedSeq(G__26230__a,0);
} 
return G__26229__delegate.call(this,args);};
G__26229.cljs$lang$maxFixedArity = 0;
G__26229.cljs$lang$applyTo = (function (arglist__26231){
var args = cljs.core.seq(arglist__26231);
return G__26229__delegate(args);
});
G__26229.cljs$core$IFn$_invoke$arity$variadic = G__26229__delegate;
return G__26229;
})()
;})(_STAR_print_fn_STAR_26226,_STAR_print_newline_STAR_26227,base_path_26228))
;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str(figwheel.client.utils.eval_helper.call(null,code,opts))].join('')], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_26227;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_26226;
}}catch (e26225){if((e26225 instanceof Error)){
var e = e26225;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_26228], null));
} else {
var e = e26225;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_26228))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = {};
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__26232){
var map__26239 = p__26232;
var map__26239__$1 = ((((!((map__26239 == null)))?((((map__26239.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26239.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26239):map__26239);
var opts = map__26239__$1;
var build_id = cljs.core.get.call(null,map__26239__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__26239,map__26239__$1,opts,build_id){
return (function (p__26241){
var vec__26242 = p__26241;
var map__26243 = cljs.core.nth.call(null,vec__26242,(0),null);
var map__26243__$1 = ((((!((map__26243 == null)))?((((map__26243.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26243.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26243):map__26243);
var msg = map__26243__$1;
var msg_name = cljs.core.get.call(null,map__26243__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__26242,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__26242,map__26243,map__26243__$1,msg,msg_name,_,map__26239,map__26239__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__26242,map__26243,map__26243__$1,msg,msg_name,_,map__26239,map__26239__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__26239,map__26239__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__26249){
var vec__26250 = p__26249;
var map__26251 = cljs.core.nth.call(null,vec__26250,(0),null);
var map__26251__$1 = ((((!((map__26251 == null)))?((((map__26251.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26251.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26251):map__26251);
var msg = map__26251__$1;
var msg_name = cljs.core.get.call(null,map__26251__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__26250,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__26253){
var map__26263 = p__26253;
var map__26263__$1 = ((((!((map__26263 == null)))?((((map__26263.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26263.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26263):map__26263);
var on_compile_warning = cljs.core.get.call(null,map__26263__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__26263__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__26263,map__26263__$1,on_compile_warning,on_compile_fail){
return (function (p__26265){
var vec__26266 = p__26265;
var map__26267 = cljs.core.nth.call(null,vec__26266,(0),null);
var map__26267__$1 = ((((!((map__26267 == null)))?((((map__26267.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26267.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26267):map__26267);
var msg = map__26267__$1;
var msg_name = cljs.core.get.call(null,map__26267__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__26266,(1));
var pred__26269 = cljs.core._EQ_;
var expr__26270 = msg_name;
if(cljs.core.truth_(pred__26269.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__26270))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__26269.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__26270))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__26263,map__26263__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__20810__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20810__auto__,msg_hist,msg_names,msg){
return (function (){
var f__20811__auto__ = (function (){var switch__20745__auto__ = ((function (c__20810__auto__,msg_hist,msg_names,msg){
return (function (state_26471){
var state_val_26472 = (state_26471[(1)]);
if((state_val_26472 === (7))){
var inst_26405 = (state_26471[(2)]);
var state_26471__$1 = state_26471;
var statearr_26473_26514 = state_26471__$1;
(statearr_26473_26514[(2)] = inst_26405);

(statearr_26473_26514[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26472 === (20))){
var inst_26433 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_26471__$1 = state_26471;
if(cljs.core.truth_(inst_26433)){
var statearr_26474_26515 = state_26471__$1;
(statearr_26474_26515[(1)] = (22));

} else {
var statearr_26475_26516 = state_26471__$1;
(statearr_26475_26516[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26472 === (27))){
var inst_26445 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_26446 = figwheel.client.heads_up.display_warning.call(null,inst_26445);
var state_26471__$1 = state_26471;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26471__$1,(30),inst_26446);
} else {
if((state_val_26472 === (1))){
var inst_26393 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_26471__$1 = state_26471;
if(cljs.core.truth_(inst_26393)){
var statearr_26476_26517 = state_26471__$1;
(statearr_26476_26517[(1)] = (2));

} else {
var statearr_26477_26518 = state_26471__$1;
(statearr_26477_26518[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26472 === (24))){
var inst_26461 = (state_26471[(2)]);
var state_26471__$1 = state_26471;
var statearr_26478_26519 = state_26471__$1;
(statearr_26478_26519[(2)] = inst_26461);

(statearr_26478_26519[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26472 === (4))){
var inst_26469 = (state_26471[(2)]);
var state_26471__$1 = state_26471;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26471__$1,inst_26469);
} else {
if((state_val_26472 === (15))){
var inst_26421 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_26422 = figwheel.client.format_messages.call(null,inst_26421);
var inst_26423 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_26424 = figwheel.client.heads_up.display_error.call(null,inst_26422,inst_26423);
var state_26471__$1 = state_26471;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26471__$1,(18),inst_26424);
} else {
if((state_val_26472 === (21))){
var inst_26463 = (state_26471[(2)]);
var state_26471__$1 = state_26471;
var statearr_26479_26520 = state_26471__$1;
(statearr_26479_26520[(2)] = inst_26463);

(statearr_26479_26520[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26472 === (31))){
var inst_26452 = figwheel.client.heads_up.flash_loaded.call(null);
var state_26471__$1 = state_26471;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26471__$1,(34),inst_26452);
} else {
if((state_val_26472 === (32))){
var state_26471__$1 = state_26471;
var statearr_26480_26521 = state_26471__$1;
(statearr_26480_26521[(2)] = null);

(statearr_26480_26521[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26472 === (33))){
var inst_26457 = (state_26471[(2)]);
var state_26471__$1 = state_26471;
var statearr_26481_26522 = state_26471__$1;
(statearr_26481_26522[(2)] = inst_26457);

(statearr_26481_26522[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26472 === (13))){
var inst_26411 = (state_26471[(2)]);
var inst_26412 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_26413 = figwheel.client.format_messages.call(null,inst_26412);
var inst_26414 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_26415 = figwheel.client.heads_up.display_error.call(null,inst_26413,inst_26414);
var state_26471__$1 = (function (){var statearr_26482 = state_26471;
(statearr_26482[(7)] = inst_26411);

return statearr_26482;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26471__$1,(14),inst_26415);
} else {
if((state_val_26472 === (22))){
var inst_26435 = figwheel.client.heads_up.clear.call(null);
var state_26471__$1 = state_26471;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26471__$1,(25),inst_26435);
} else {
if((state_val_26472 === (29))){
var inst_26459 = (state_26471[(2)]);
var state_26471__$1 = state_26471;
var statearr_26483_26523 = state_26471__$1;
(statearr_26483_26523[(2)] = inst_26459);

(statearr_26483_26523[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26472 === (6))){
var inst_26401 = figwheel.client.heads_up.clear.call(null);
var state_26471__$1 = state_26471;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26471__$1,(9),inst_26401);
} else {
if((state_val_26472 === (28))){
var inst_26450 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_26471__$1 = state_26471;
if(cljs.core.truth_(inst_26450)){
var statearr_26484_26524 = state_26471__$1;
(statearr_26484_26524[(1)] = (31));

} else {
var statearr_26485_26525 = state_26471__$1;
(statearr_26485_26525[(1)] = (32));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26472 === (25))){
var inst_26437 = (state_26471[(2)]);
var inst_26438 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_26439 = figwheel.client.heads_up.display_warning.call(null,inst_26438);
var state_26471__$1 = (function (){var statearr_26486 = state_26471;
(statearr_26486[(8)] = inst_26437);

return statearr_26486;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26471__$1,(26),inst_26439);
} else {
if((state_val_26472 === (34))){
var inst_26454 = (state_26471[(2)]);
var state_26471__$1 = state_26471;
var statearr_26487_26526 = state_26471__$1;
(statearr_26487_26526[(2)] = inst_26454);

(statearr_26487_26526[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26472 === (17))){
var inst_26465 = (state_26471[(2)]);
var state_26471__$1 = state_26471;
var statearr_26488_26527 = state_26471__$1;
(statearr_26488_26527[(2)] = inst_26465);

(statearr_26488_26527[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26472 === (3))){
var inst_26407 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_26471__$1 = state_26471;
if(cljs.core.truth_(inst_26407)){
var statearr_26489_26528 = state_26471__$1;
(statearr_26489_26528[(1)] = (10));

} else {
var statearr_26490_26529 = state_26471__$1;
(statearr_26490_26529[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26472 === (12))){
var inst_26467 = (state_26471[(2)]);
var state_26471__$1 = state_26471;
var statearr_26491_26530 = state_26471__$1;
(statearr_26491_26530[(2)] = inst_26467);

(statearr_26491_26530[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26472 === (2))){
var inst_26395 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_26471__$1 = state_26471;
if(cljs.core.truth_(inst_26395)){
var statearr_26492_26531 = state_26471__$1;
(statearr_26492_26531[(1)] = (5));

} else {
var statearr_26493_26532 = state_26471__$1;
(statearr_26493_26532[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26472 === (23))){
var inst_26443 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_26471__$1 = state_26471;
if(cljs.core.truth_(inst_26443)){
var statearr_26494_26533 = state_26471__$1;
(statearr_26494_26533[(1)] = (27));

} else {
var statearr_26495_26534 = state_26471__$1;
(statearr_26495_26534[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26472 === (19))){
var inst_26430 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_26431 = figwheel.client.heads_up.append_message.call(null,inst_26430);
var state_26471__$1 = state_26471;
var statearr_26496_26535 = state_26471__$1;
(statearr_26496_26535[(2)] = inst_26431);

(statearr_26496_26535[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26472 === (11))){
var inst_26419 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_26471__$1 = state_26471;
if(cljs.core.truth_(inst_26419)){
var statearr_26497_26536 = state_26471__$1;
(statearr_26497_26536[(1)] = (15));

} else {
var statearr_26498_26537 = state_26471__$1;
(statearr_26498_26537[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26472 === (9))){
var inst_26403 = (state_26471[(2)]);
var state_26471__$1 = state_26471;
var statearr_26499_26538 = state_26471__$1;
(statearr_26499_26538[(2)] = inst_26403);

(statearr_26499_26538[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26472 === (5))){
var inst_26397 = figwheel.client.heads_up.flash_loaded.call(null);
var state_26471__$1 = state_26471;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26471__$1,(8),inst_26397);
} else {
if((state_val_26472 === (14))){
var inst_26417 = (state_26471[(2)]);
var state_26471__$1 = state_26471;
var statearr_26500_26539 = state_26471__$1;
(statearr_26500_26539[(2)] = inst_26417);

(statearr_26500_26539[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26472 === (26))){
var inst_26441 = (state_26471[(2)]);
var state_26471__$1 = state_26471;
var statearr_26501_26540 = state_26471__$1;
(statearr_26501_26540[(2)] = inst_26441);

(statearr_26501_26540[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26472 === (16))){
var inst_26428 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_26471__$1 = state_26471;
if(cljs.core.truth_(inst_26428)){
var statearr_26502_26541 = state_26471__$1;
(statearr_26502_26541[(1)] = (19));

} else {
var statearr_26503_26542 = state_26471__$1;
(statearr_26503_26542[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26472 === (30))){
var inst_26448 = (state_26471[(2)]);
var state_26471__$1 = state_26471;
var statearr_26504_26543 = state_26471__$1;
(statearr_26504_26543[(2)] = inst_26448);

(statearr_26504_26543[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26472 === (10))){
var inst_26409 = figwheel.client.heads_up.clear.call(null);
var state_26471__$1 = state_26471;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26471__$1,(13),inst_26409);
} else {
if((state_val_26472 === (18))){
var inst_26426 = (state_26471[(2)]);
var state_26471__$1 = state_26471;
var statearr_26505_26544 = state_26471__$1;
(statearr_26505_26544[(2)] = inst_26426);

(statearr_26505_26544[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26472 === (8))){
var inst_26399 = (state_26471[(2)]);
var state_26471__$1 = state_26471;
var statearr_26506_26545 = state_26471__$1;
(statearr_26506_26545[(2)] = inst_26399);

(statearr_26506_26545[(1)] = (7));


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
});})(c__20810__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__20745__auto__,c__20810__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20746__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20746__auto____0 = (function (){
var statearr_26510 = [null,null,null,null,null,null,null,null,null];
(statearr_26510[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20746__auto__);

(statearr_26510[(1)] = (1));

return statearr_26510;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20746__auto____1 = (function (state_26471){
while(true){
var ret_value__20747__auto__ = (function (){try{while(true){
var result__20748__auto__ = switch__20745__auto__.call(null,state_26471);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20748__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20748__auto__;
}
break;
}
}catch (e26511){if((e26511 instanceof Object)){
var ex__20749__auto__ = e26511;
var statearr_26512_26546 = state_26471;
(statearr_26512_26546[(5)] = ex__20749__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26471);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26511;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20747__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26547 = state_26471;
state_26471 = G__26547;
continue;
} else {
return ret_value__20747__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20746__auto__ = function(state_26471){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20746__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20746__auto____1.call(this,state_26471);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20746__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20746__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20746__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20746__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20746__auto__;
})()
;})(switch__20745__auto__,c__20810__auto__,msg_hist,msg_names,msg))
})();
var state__20812__auto__ = (function (){var statearr_26513 = f__20811__auto__.call(null);
(statearr_26513[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20810__auto__);

return statearr_26513;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20812__auto__);
});})(c__20810__auto__,msg_hist,msg_names,msg))
);

return c__20810__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__20810__auto___26610 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20810__auto___26610,ch){
return (function (){
var f__20811__auto__ = (function (){var switch__20745__auto__ = ((function (c__20810__auto___26610,ch){
return (function (state_26593){
var state_val_26594 = (state_26593[(1)]);
if((state_val_26594 === (1))){
var state_26593__$1 = state_26593;
var statearr_26595_26611 = state_26593__$1;
(statearr_26595_26611[(2)] = null);

(statearr_26595_26611[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26594 === (2))){
var state_26593__$1 = state_26593;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26593__$1,(4),ch);
} else {
if((state_val_26594 === (3))){
var inst_26591 = (state_26593[(2)]);
var state_26593__$1 = state_26593;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26593__$1,inst_26591);
} else {
if((state_val_26594 === (4))){
var inst_26581 = (state_26593[(7)]);
var inst_26581__$1 = (state_26593[(2)]);
var state_26593__$1 = (function (){var statearr_26596 = state_26593;
(statearr_26596[(7)] = inst_26581__$1);

return statearr_26596;
})();
if(cljs.core.truth_(inst_26581__$1)){
var statearr_26597_26612 = state_26593__$1;
(statearr_26597_26612[(1)] = (5));

} else {
var statearr_26598_26613 = state_26593__$1;
(statearr_26598_26613[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26594 === (5))){
var inst_26581 = (state_26593[(7)]);
var inst_26583 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_26581);
var state_26593__$1 = state_26593;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26593__$1,(8),inst_26583);
} else {
if((state_val_26594 === (6))){
var state_26593__$1 = state_26593;
var statearr_26599_26614 = state_26593__$1;
(statearr_26599_26614[(2)] = null);

(statearr_26599_26614[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26594 === (7))){
var inst_26589 = (state_26593[(2)]);
var state_26593__$1 = state_26593;
var statearr_26600_26615 = state_26593__$1;
(statearr_26600_26615[(2)] = inst_26589);

(statearr_26600_26615[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26594 === (8))){
var inst_26585 = (state_26593[(2)]);
var state_26593__$1 = (function (){var statearr_26601 = state_26593;
(statearr_26601[(8)] = inst_26585);

return statearr_26601;
})();
var statearr_26602_26616 = state_26593__$1;
(statearr_26602_26616[(2)] = null);

(statearr_26602_26616[(1)] = (2));


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
});})(c__20810__auto___26610,ch))
;
return ((function (switch__20745__auto__,c__20810__auto___26610,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__20746__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__20746__auto____0 = (function (){
var statearr_26606 = [null,null,null,null,null,null,null,null,null];
(statearr_26606[(0)] = figwheel$client$heads_up_plugin_$_state_machine__20746__auto__);

(statearr_26606[(1)] = (1));

return statearr_26606;
});
var figwheel$client$heads_up_plugin_$_state_machine__20746__auto____1 = (function (state_26593){
while(true){
var ret_value__20747__auto__ = (function (){try{while(true){
var result__20748__auto__ = switch__20745__auto__.call(null,state_26593);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20748__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20748__auto__;
}
break;
}
}catch (e26607){if((e26607 instanceof Object)){
var ex__20749__auto__ = e26607;
var statearr_26608_26617 = state_26593;
(statearr_26608_26617[(5)] = ex__20749__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26593);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26607;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20747__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26618 = state_26593;
state_26593 = G__26618;
continue;
} else {
return ret_value__20747__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__20746__auto__ = function(state_26593){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__20746__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__20746__auto____1.call(this,state_26593);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__20746__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__20746__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__20746__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__20746__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__20746__auto__;
})()
;})(switch__20745__auto__,c__20810__auto___26610,ch))
})();
var state__20812__auto__ = (function (){var statearr_26609 = f__20811__auto__.call(null);
(statearr_26609[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20810__auto___26610);

return statearr_26609;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20812__auto__);
});})(c__20810__auto___26610,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__20810__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20810__auto__){
return (function (){
var f__20811__auto__ = (function (){var switch__20745__auto__ = ((function (c__20810__auto__){
return (function (state_26639){
var state_val_26640 = (state_26639[(1)]);
if((state_val_26640 === (1))){
var inst_26634 = cljs.core.async.timeout.call(null,(3000));
var state_26639__$1 = state_26639;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26639__$1,(2),inst_26634);
} else {
if((state_val_26640 === (2))){
var inst_26636 = (state_26639[(2)]);
var inst_26637 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_26639__$1 = (function (){var statearr_26641 = state_26639;
(statearr_26641[(7)] = inst_26636);

return statearr_26641;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26639__$1,inst_26637);
} else {
return null;
}
}
});})(c__20810__auto__))
;
return ((function (switch__20745__auto__,c__20810__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__20746__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__20746__auto____0 = (function (){
var statearr_26645 = [null,null,null,null,null,null,null,null];
(statearr_26645[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__20746__auto__);

(statearr_26645[(1)] = (1));

return statearr_26645;
});
var figwheel$client$enforce_project_plugin_$_state_machine__20746__auto____1 = (function (state_26639){
while(true){
var ret_value__20747__auto__ = (function (){try{while(true){
var result__20748__auto__ = switch__20745__auto__.call(null,state_26639);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20748__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20748__auto__;
}
break;
}
}catch (e26646){if((e26646 instanceof Object)){
var ex__20749__auto__ = e26646;
var statearr_26647_26649 = state_26639;
(statearr_26647_26649[(5)] = ex__20749__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26639);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26646;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20747__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26650 = state_26639;
state_26639 = G__26650;
continue;
} else {
return ret_value__20747__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__20746__auto__ = function(state_26639){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__20746__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__20746__auto____1.call(this,state_26639);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__20746__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__20746__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__20746__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__20746__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__20746__auto__;
})()
;})(switch__20745__auto__,c__20810__auto__))
})();
var state__20812__auto__ = (function (){var statearr_26648 = f__20811__auto__.call(null);
(statearr_26648[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20810__auto__);

return statearr_26648;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20812__auto__);
});})(c__20810__auto__))
);

return c__20810__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__26651){
var map__26658 = p__26651;
var map__26658__$1 = ((((!((map__26658 == null)))?((((map__26658.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26658.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26658):map__26658);
var ed = map__26658__$1;
var formatted_exception = cljs.core.get.call(null,map__26658__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__26658__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__26658__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__26660_26664 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__26661_26665 = null;
var count__26662_26666 = (0);
var i__26663_26667 = (0);
while(true){
if((i__26663_26667 < count__26662_26666)){
var msg_26668 = cljs.core._nth.call(null,chunk__26661_26665,i__26663_26667);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_26668);

var G__26669 = seq__26660_26664;
var G__26670 = chunk__26661_26665;
var G__26671 = count__26662_26666;
var G__26672 = (i__26663_26667 + (1));
seq__26660_26664 = G__26669;
chunk__26661_26665 = G__26670;
count__26662_26666 = G__26671;
i__26663_26667 = G__26672;
continue;
} else {
var temp__4425__auto___26673 = cljs.core.seq.call(null,seq__26660_26664);
if(temp__4425__auto___26673){
var seq__26660_26674__$1 = temp__4425__auto___26673;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26660_26674__$1)){
var c__17293__auto___26675 = cljs.core.chunk_first.call(null,seq__26660_26674__$1);
var G__26676 = cljs.core.chunk_rest.call(null,seq__26660_26674__$1);
var G__26677 = c__17293__auto___26675;
var G__26678 = cljs.core.count.call(null,c__17293__auto___26675);
var G__26679 = (0);
seq__26660_26664 = G__26676;
chunk__26661_26665 = G__26677;
count__26662_26666 = G__26678;
i__26663_26667 = G__26679;
continue;
} else {
var msg_26680 = cljs.core.first.call(null,seq__26660_26674__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_26680);

var G__26681 = cljs.core.next.call(null,seq__26660_26674__$1);
var G__26682 = null;
var G__26683 = (0);
var G__26684 = (0);
seq__26660_26664 = G__26681;
chunk__26661_26665 = G__26682;
count__26662_26666 = G__26683;
i__26663_26667 = G__26684;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on file "),cljs.core.str(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__26685){
var map__26688 = p__26685;
var map__26688__$1 = ((((!((map__26688 == null)))?((((map__26688.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26688.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26688):map__26688);
var w = map__26688__$1;
var message = cljs.core.get.call(null,map__26688__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(message)].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[figwheel.client.default_on_compile_warning,figwheel.client.default_on_jsload,true,figwheel.client.default_on_compile_fail,false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__16478__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__16478__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__16478__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__26696 = cljs.core.seq.call(null,plugins);
var chunk__26697 = null;
var count__26698 = (0);
var i__26699 = (0);
while(true){
if((i__26699 < count__26698)){
var vec__26700 = cljs.core._nth.call(null,chunk__26697,i__26699);
var k = cljs.core.nth.call(null,vec__26700,(0),null);
var plugin = cljs.core.nth.call(null,vec__26700,(1),null);
if(cljs.core.truth_(plugin)){
var pl_26702 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__26696,chunk__26697,count__26698,i__26699,pl_26702,vec__26700,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_26702.call(null,msg_hist);
});})(seq__26696,chunk__26697,count__26698,i__26699,pl_26702,vec__26700,k,plugin))
);
} else {
}

var G__26703 = seq__26696;
var G__26704 = chunk__26697;
var G__26705 = count__26698;
var G__26706 = (i__26699 + (1));
seq__26696 = G__26703;
chunk__26697 = G__26704;
count__26698 = G__26705;
i__26699 = G__26706;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__26696);
if(temp__4425__auto__){
var seq__26696__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26696__$1)){
var c__17293__auto__ = cljs.core.chunk_first.call(null,seq__26696__$1);
var G__26707 = cljs.core.chunk_rest.call(null,seq__26696__$1);
var G__26708 = c__17293__auto__;
var G__26709 = cljs.core.count.call(null,c__17293__auto__);
var G__26710 = (0);
seq__26696 = G__26707;
chunk__26697 = G__26708;
count__26698 = G__26709;
i__26699 = G__26710;
continue;
} else {
var vec__26701 = cljs.core.first.call(null,seq__26696__$1);
var k = cljs.core.nth.call(null,vec__26701,(0),null);
var plugin = cljs.core.nth.call(null,vec__26701,(1),null);
if(cljs.core.truth_(plugin)){
var pl_26711 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__26696,chunk__26697,count__26698,i__26699,pl_26711,vec__26701,k,plugin,seq__26696__$1,temp__4425__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_26711.call(null,msg_hist);
});})(seq__26696,chunk__26697,count__26698,i__26699,pl_26711,vec__26701,k,plugin,seq__26696__$1,temp__4425__auto__))
);
} else {
}

var G__26712 = cljs.core.next.call(null,seq__26696__$1);
var G__26713 = null;
var G__26714 = (0);
var G__26715 = (0);
seq__26696 = G__26712;
chunk__26697 = G__26713;
count__26698 = G__26714;
i__26699 = G__26715;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var args26716 = [];
var len__17548__auto___26719 = arguments.length;
var i__17549__auto___26720 = (0);
while(true){
if((i__17549__auto___26720 < len__17548__auto___26719)){
args26716.push((arguments[i__17549__auto___26720]));

var G__26721 = (i__17549__auto___26720 + (1));
i__17549__auto___26720 = G__26721;
continue;
} else {
}
break;
}

var G__26718 = args26716.length;
switch (G__26718) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26716.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

return figwheel.client.socket.open.call(null,system_options);
}));
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;
figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__17555__auto__ = [];
var len__17548__auto___26727 = arguments.length;
var i__17549__auto___26728 = (0);
while(true){
if((i__17549__auto___26728 < len__17548__auto___26727)){
args__17555__auto__.push((arguments[i__17549__auto___26728]));

var G__26729 = (i__17549__auto___26728 + (1));
i__17549__auto___26728 = G__26729;
continue;
} else {
}
break;
}

var argseq__17556__auto__ = ((((0) < args__17555__auto__.length))?(new cljs.core.IndexedSeq(args__17555__auto__.slice((0)),(0))):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__17556__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__26724){
var map__26725 = p__26724;
var map__26725__$1 = ((((!((map__26725 == null)))?((((map__26725.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26725.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26725):map__26725);
var opts = map__26725__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq26723){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26723));
});

//# sourceMappingURL=client.js.map?rel=1441995397520