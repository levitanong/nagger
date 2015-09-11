// Compiled by ClojureScript 1.7.122 {}
goog.provide('figwheel.client.heads_up');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('figwheel.client.socket');
goog.require('cljs.core.async');
goog.require('goog.string');
figwheel.client.heads_up.clear;

figwheel.client.heads_up.cljs_logo_svg;
figwheel.client.heads_up.node = (function figwheel$client$heads_up$node(var_args){
var args__17555__auto__ = [];
var len__17548__auto___26867 = arguments.length;
var i__17549__auto___26868 = (0);
while(true){
if((i__17549__auto___26868 < len__17548__auto___26867)){
args__17555__auto__.push((arguments[i__17549__auto___26868]));

var G__26869 = (i__17549__auto___26868 + (1));
i__17549__auto___26868 = G__26869;
continue;
} else {
}
break;
}

var argseq__17556__auto__ = ((((2) < args__17555__auto__.length))?(new cljs.core.IndexedSeq(args__17555__auto__.slice((2)),(0))):null);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__17556__auto__);
});

figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic = (function (t,attrs,children){
var e = document.createElement(cljs.core.name.call(null,t));
var seq__26859_26870 = cljs.core.seq.call(null,cljs.core.keys.call(null,attrs));
var chunk__26860_26871 = null;
var count__26861_26872 = (0);
var i__26862_26873 = (0);
while(true){
if((i__26862_26873 < count__26861_26872)){
var k_26874 = cljs.core._nth.call(null,chunk__26860_26871,i__26862_26873);
e.setAttribute(cljs.core.name.call(null,k_26874),cljs.core.get.call(null,attrs,k_26874));

var G__26875 = seq__26859_26870;
var G__26876 = chunk__26860_26871;
var G__26877 = count__26861_26872;
var G__26878 = (i__26862_26873 + (1));
seq__26859_26870 = G__26875;
chunk__26860_26871 = G__26876;
count__26861_26872 = G__26877;
i__26862_26873 = G__26878;
continue;
} else {
var temp__4425__auto___26879 = cljs.core.seq.call(null,seq__26859_26870);
if(temp__4425__auto___26879){
var seq__26859_26880__$1 = temp__4425__auto___26879;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26859_26880__$1)){
var c__17293__auto___26881 = cljs.core.chunk_first.call(null,seq__26859_26880__$1);
var G__26882 = cljs.core.chunk_rest.call(null,seq__26859_26880__$1);
var G__26883 = c__17293__auto___26881;
var G__26884 = cljs.core.count.call(null,c__17293__auto___26881);
var G__26885 = (0);
seq__26859_26870 = G__26882;
chunk__26860_26871 = G__26883;
count__26861_26872 = G__26884;
i__26862_26873 = G__26885;
continue;
} else {
var k_26886 = cljs.core.first.call(null,seq__26859_26880__$1);
e.setAttribute(cljs.core.name.call(null,k_26886),cljs.core.get.call(null,attrs,k_26886));

var G__26887 = cljs.core.next.call(null,seq__26859_26880__$1);
var G__26888 = null;
var G__26889 = (0);
var G__26890 = (0);
seq__26859_26870 = G__26887;
chunk__26860_26871 = G__26888;
count__26861_26872 = G__26889;
i__26862_26873 = G__26890;
continue;
}
} else {
}
}
break;
}

var seq__26863_26891 = cljs.core.seq.call(null,children);
var chunk__26864_26892 = null;
var count__26865_26893 = (0);
var i__26866_26894 = (0);
while(true){
if((i__26866_26894 < count__26865_26893)){
var ch_26895 = cljs.core._nth.call(null,chunk__26864_26892,i__26866_26894);
e.appendChild(ch_26895);

var G__26896 = seq__26863_26891;
var G__26897 = chunk__26864_26892;
var G__26898 = count__26865_26893;
var G__26899 = (i__26866_26894 + (1));
seq__26863_26891 = G__26896;
chunk__26864_26892 = G__26897;
count__26865_26893 = G__26898;
i__26866_26894 = G__26899;
continue;
} else {
var temp__4425__auto___26900 = cljs.core.seq.call(null,seq__26863_26891);
if(temp__4425__auto___26900){
var seq__26863_26901__$1 = temp__4425__auto___26900;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26863_26901__$1)){
var c__17293__auto___26902 = cljs.core.chunk_first.call(null,seq__26863_26901__$1);
var G__26903 = cljs.core.chunk_rest.call(null,seq__26863_26901__$1);
var G__26904 = c__17293__auto___26902;
var G__26905 = cljs.core.count.call(null,c__17293__auto___26902);
var G__26906 = (0);
seq__26863_26891 = G__26903;
chunk__26864_26892 = G__26904;
count__26865_26893 = G__26905;
i__26866_26894 = G__26906;
continue;
} else {
var ch_26907 = cljs.core.first.call(null,seq__26863_26901__$1);
e.appendChild(ch_26907);

var G__26908 = cljs.core.next.call(null,seq__26863_26901__$1);
var G__26909 = null;
var G__26910 = (0);
var G__26911 = (0);
seq__26863_26891 = G__26908;
chunk__26864_26892 = G__26909;
count__26865_26893 = G__26910;
i__26866_26894 = G__26911;
continue;
}
} else {
}
}
break;
}

return e;
});

figwheel.client.heads_up.node.cljs$lang$maxFixedArity = (2);

figwheel.client.heads_up.node.cljs$lang$applyTo = (function (seq26856){
var G__26857 = cljs.core.first.call(null,seq26856);
var seq26856__$1 = cljs.core.next.call(null,seq26856);
var G__26858 = cljs.core.first.call(null,seq26856__$1);
var seq26856__$2 = cljs.core.next.call(null,seq26856__$1);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic(G__26857,G__26858,seq26856__$2);
});
if(typeof figwheel.client.heads_up.heads_up_event_dispatch !== 'undefined'){
} else {
figwheel.client.heads_up.heads_up_event_dispatch = (function (){var method_table__17403__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__17404__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__17405__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__17406__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__17407__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.heads-up","heads-up-event-dispatch"),((function (method_table__17403__auto__,prefer_table__17404__auto__,method_cache__17405__auto__,cached_hierarchy__17406__auto__,hierarchy__17407__auto__){
return (function (dataset){
return dataset.figwheelEvent;
});})(method_table__17403__auto__,prefer_table__17404__auto__,method_cache__17405__auto__,cached_hierarchy__17406__auto__,hierarchy__17407__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__17407__auto__,method_table__17403__auto__,prefer_table__17404__auto__,method_cache__17405__auto__,cached_hierarchy__17406__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_){
return cljs.core.PersistentArrayMap.EMPTY;
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"file-selected",(function (dataset){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"file-selected",new cljs.core.Keyword(null,"file-name","file-name",-1654217259),dataset.fileName,new cljs.core.Keyword(null,"file-line","file-line",-1228823138),dataset.fileLine], null));
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"close-heads-up",(function (dataset){
return figwheel.client.heads_up.clear.call(null);
}));
figwheel.client.heads_up.ancestor_nodes = (function figwheel$client$heads_up$ancestor_nodes(el){
return cljs.core.iterate.call(null,(function (e){
return e.parentNode;
}),el);
});
figwheel.client.heads_up.get_dataset = (function figwheel$client$heads_up$get_dataset(el){
return cljs.core.first.call(null,cljs.core.keep.call(null,(function (x){
if(cljs.core.truth_(x.dataset.figwheelEvent)){
return x.dataset;
} else {
return null;
}
}),cljs.core.take.call(null,(4),figwheel.client.heads_up.ancestor_nodes.call(null,el))));
});
figwheel.client.heads_up.heads_up_onclick_handler = (function figwheel$client$heads_up$heads_up_onclick_handler(event){
var dataset = figwheel.client.heads_up.get_dataset.call(null,event.target);
event.preventDefault();

if(cljs.core.truth_(dataset)){
return figwheel.client.heads_up.heads_up_event_dispatch.call(null,dataset);
} else {
return null;
}
});
figwheel.client.heads_up.ensure_container = (function figwheel$client$heads_up$ensure_container(){
var cont_id = "figwheel-heads-up-container";
var content_id = "figwheel-heads-up-content-area";
if(cljs.core.not.call(null,document.querySelector([cljs.core.str("#"),cljs.core.str(cont_id)].join('')))){
var el_26912 = figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cont_id,new cljs.core.Keyword(null,"style","style",-496642736),[cljs.core.str("-webkit-transition: all 0.2s ease-in-out;"),cljs.core.str("-moz-transition: all 0.2s ease-in-out;"),cljs.core.str("-o-transition: all 0.2s ease-in-out;"),cljs.core.str("transition: all 0.2s ease-in-out;"),cljs.core.str("font-size: 13px;"),cljs.core.str("border-top: 1px solid #f5f5f5;"),cljs.core.str("box-shadow: 0px 0px 1px #aaaaaa;"),cljs.core.str("line-height: 18px;"),cljs.core.str("color: #333;"),cljs.core.str("font-family: monospace;"),cljs.core.str("padding: 0px 10px 0px 70px;"),cljs.core.str("position: fixed;"),cljs.core.str("bottom: 0px;"),cljs.core.str("left: 0px;"),cljs.core.str("height: 0px;"),cljs.core.str("opacity: 0.0;"),cljs.core.str("box-sizing: border-box;"),cljs.core.str("z-index: 10000;")].join('')], null));
el_26912.onclick = figwheel.client.heads_up.heads_up_onclick_handler;

el_26912.innerHTML = figwheel.client.heads_up.cljs_logo_svg;

el_26912.appendChild(figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),content_id], null)));

document.body.appendChild(el_26912);
} else {
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"container-el","container-el",109664205),document.getElementById(cont_id),new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187),document.getElementById(content_id)], null);
});
figwheel.client.heads_up.set_style_BANG_ = (function figwheel$client$heads_up$set_style_BANG_(p__26913,st_map){
var map__26918 = p__26913;
var map__26918__$1 = ((((!((map__26918 == null)))?((((map__26918.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26918.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26918):map__26918);
var container_el = cljs.core.get.call(null,map__26918__$1,new cljs.core.Keyword(null,"container-el","container-el",109664205));
return cljs.core.mapv.call(null,((function (map__26918,map__26918__$1,container_el){
return (function (p__26920){
var vec__26921 = p__26920;
var k = cljs.core.nth.call(null,vec__26921,(0),null);
var v = cljs.core.nth.call(null,vec__26921,(1),null);
return (container_el.style[cljs.core.name.call(null,k)] = v);
});})(map__26918,map__26918__$1,container_el))
,st_map);
});
figwheel.client.heads_up.set_content_BANG_ = (function figwheel$client$heads_up$set_content_BANG_(p__26922,dom_str){
var map__26925 = p__26922;
var map__26925__$1 = ((((!((map__26925 == null)))?((((map__26925.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26925.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26925):map__26925);
var c = map__26925__$1;
var content_area_el = cljs.core.get.call(null,map__26925__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML = dom_str;
});
figwheel.client.heads_up.get_content = (function figwheel$client$heads_up$get_content(p__26927){
var map__26930 = p__26927;
var map__26930__$1 = ((((!((map__26930 == null)))?((((map__26930.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26930.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26930):map__26930);
var content_area_el = cljs.core.get.call(null,map__26930__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML;
});
figwheel.client.heads_up.close_link = (function figwheel$client$heads_up$close_link(){
return [cljs.core.str("<a style=\""),cljs.core.str("float: right;"),cljs.core.str("font-size: 18px;"),cljs.core.str("text-decoration: none;"),cljs.core.str("text-align: right;"),cljs.core.str("width: 30px;"),cljs.core.str("height: 30px;"),cljs.core.str("color: rgba(84,84,84, 0.5);"),cljs.core.str("\" href=\"#\"  data-figwheel-event=\"close-heads-up\">"),cljs.core.str("x"),cljs.core.str("</a>")].join('');
});
figwheel.client.heads_up.display_heads_up = (function figwheel$client$heads_up$display_heads_up(style,msg){
var c__20810__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20810__auto__){
return (function (){
var f__20811__auto__ = (function (){var switch__20745__auto__ = ((function (c__20810__auto__){
return (function (state_26973){
var state_val_26974 = (state_26973[(1)]);
if((state_val_26974 === (1))){
var inst_26958 = (state_26973[(7)]);
var inst_26958__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_26959 = [new cljs.core.Keyword(null,"paddingTop","paddingTop",-1088692345),new cljs.core.Keyword(null,"paddingBottom","paddingBottom",-916694489),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_26960 = ["10px","10px","100%","68px","1.0"];
var inst_26961 = cljs.core.PersistentHashMap.fromArrays(inst_26959,inst_26960);
var inst_26962 = cljs.core.merge.call(null,inst_26961,style);
var inst_26963 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_26958__$1,inst_26962);
var inst_26964 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_26958__$1,msg);
var inst_26965 = cljs.core.async.timeout.call(null,(300));
var state_26973__$1 = (function (){var statearr_26975 = state_26973;
(statearr_26975[(7)] = inst_26958__$1);

(statearr_26975[(8)] = inst_26964);

(statearr_26975[(9)] = inst_26963);

return statearr_26975;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26973__$1,(2),inst_26965);
} else {
if((state_val_26974 === (2))){
var inst_26958 = (state_26973[(7)]);
var inst_26967 = (state_26973[(2)]);
var inst_26968 = [new cljs.core.Keyword(null,"height","height",1025178622)];
var inst_26969 = ["auto"];
var inst_26970 = cljs.core.PersistentHashMap.fromArrays(inst_26968,inst_26969);
var inst_26971 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_26958,inst_26970);
var state_26973__$1 = (function (){var statearr_26976 = state_26973;
(statearr_26976[(10)] = inst_26967);

return statearr_26976;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26973__$1,inst_26971);
} else {
return null;
}
}
});})(c__20810__auto__))
;
return ((function (switch__20745__auto__,c__20810__auto__){
return (function() {
var figwheel$client$heads_up$display_heads_up_$_state_machine__20746__auto__ = null;
var figwheel$client$heads_up$display_heads_up_$_state_machine__20746__auto____0 = (function (){
var statearr_26980 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26980[(0)] = figwheel$client$heads_up$display_heads_up_$_state_machine__20746__auto__);

(statearr_26980[(1)] = (1));

return statearr_26980;
});
var figwheel$client$heads_up$display_heads_up_$_state_machine__20746__auto____1 = (function (state_26973){
while(true){
var ret_value__20747__auto__ = (function (){try{while(true){
var result__20748__auto__ = switch__20745__auto__.call(null,state_26973);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20748__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20748__auto__;
}
break;
}
}catch (e26981){if((e26981 instanceof Object)){
var ex__20749__auto__ = e26981;
var statearr_26982_26984 = state_26973;
(statearr_26982_26984[(5)] = ex__20749__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26973);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26981;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20747__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26985 = state_26973;
state_26973 = G__26985;
continue;
} else {
return ret_value__20747__auto__;
}
break;
}
});
figwheel$client$heads_up$display_heads_up_$_state_machine__20746__auto__ = function(state_26973){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$display_heads_up_$_state_machine__20746__auto____0.call(this);
case 1:
return figwheel$client$heads_up$display_heads_up_$_state_machine__20746__auto____1.call(this,state_26973);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$display_heads_up_$_state_machine__20746__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$display_heads_up_$_state_machine__20746__auto____0;
figwheel$client$heads_up$display_heads_up_$_state_machine__20746__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$display_heads_up_$_state_machine__20746__auto____1;
return figwheel$client$heads_up$display_heads_up_$_state_machine__20746__auto__;
})()
;})(switch__20745__auto__,c__20810__auto__))
})();
var state__20812__auto__ = (function (){var statearr_26983 = f__20811__auto__.call(null);
(statearr_26983[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20810__auto__);

return statearr_26983;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20812__auto__);
});})(c__20810__auto__))
);

return c__20810__auto__;
});
figwheel.client.heads_up.heading = (function figwheel$client$heads_up$heading(s){
return [cljs.core.str("<div style=\""),cljs.core.str("font-size: 26px;"),cljs.core.str("line-height: 26px;"),cljs.core.str("margin-bottom: 2px;"),cljs.core.str("padding-top: 1px;"),cljs.core.str("\">"),cljs.core.str(s),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.file_and_line_number = (function figwheel$client$heads_up$file_and_line_number(msg){
if(cljs.core.truth_(cljs.core.re_matches.call(null,/.*at\sline.*/,msg))){
return cljs.core.take.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,msg," ")));
} else {
return null;
}
});
figwheel.client.heads_up.file_selector_div = (function figwheel$client$heads_up$file_selector_div(file_name,line_number,msg){
return [cljs.core.str("<div data-figwheel-event=\"file-selected\" data-file-name=\""),cljs.core.str(file_name),cljs.core.str("\" data-file-line=\""),cljs.core.str(line_number),cljs.core.str("\">"),cljs.core.str(msg),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.format_line = (function figwheel$client$heads_up$format_line(msg){
var msg__$1 = goog.string.htmlEscape(msg);
var temp__4423__auto__ = figwheel.client.heads_up.file_and_line_number.call(null,msg__$1);
if(cljs.core.truth_(temp__4423__auto__)){
var vec__26987 = temp__4423__auto__;
var f = cljs.core.nth.call(null,vec__26987,(0),null);
var ln = cljs.core.nth.call(null,vec__26987,(1),null);
return figwheel.client.heads_up.file_selector_div.call(null,f,ln,msg__$1);
} else {
return [cljs.core.str("<div>"),cljs.core.str(msg__$1),cljs.core.str("</div>")].join('');
}
});
figwheel.client.heads_up.display_error = (function figwheel$client$heads_up$display_error(formatted_messages,cause){
var vec__26990 = (cljs.core.truth_(cause)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause)], null):cljs.core.first.call(null,cljs.core.keep.call(null,figwheel.client.heads_up.file_and_line_number,formatted_messages)));
var file_name = cljs.core.nth.call(null,vec__26990,(0),null);
var file_line = cljs.core.nth.call(null,vec__26990,(1),null);
var file_column = cljs.core.nth.call(null,vec__26990,(2),null);
var msg = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (vec__26990,file_name,file_line,file_column){
return (function (p1__26988_SHARP_){
return [cljs.core.str("<div>"),cljs.core.str(goog.string.htmlEscape(p1__26988_SHARP_)),cljs.core.str("</div>")].join('');
});})(vec__26990,file_name,file_line,file_column))
,formatted_messages));
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 161, 161, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,"Compile Error")),cljs.core.str(figwheel.client.heads_up.file_selector_div.call(null,file_name,(function (){var or__16490__auto__ = file_line;
if(cljs.core.truth_(or__16490__auto__)){
return or__16490__auto__;
} else {
var and__16478__auto__ = cause;
if(cljs.core.truth_(and__16478__auto__)){
return new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause);
} else {
return and__16478__auto__;
}
}
})(),[cljs.core.str(msg),cljs.core.str((cljs.core.truth_(cause)?[cljs.core.str("Error on file "),cljs.core.str(goog.string.htmlEscape(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause))),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''):""))].join('')))].join(''));
});
figwheel.client.heads_up.display_system_warning = (function figwheel$client$heads_up$display_system_warning(header,msg){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 220, 110, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,header)),cljs.core.str(figwheel.client.heads_up.format_line.call(null,msg))].join(''));
});
figwheel.client.heads_up.display_warning = (function figwheel$client$heads_up$display_warning(msg){
return figwheel.client.heads_up.display_system_warning.call(null,"Compile Warning",msg);
});
figwheel.client.heads_up.append_message = (function figwheel$client$heads_up$append_message(message){
var map__26993 = figwheel.client.heads_up.ensure_container.call(null);
var map__26993__$1 = ((((!((map__26993 == null)))?((((map__26993.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26993.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26993):map__26993);
var content_area_el = cljs.core.get.call(null,map__26993__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
var el = document.createElement("div");
el.innerHTML = figwheel.client.heads_up.format_line.call(null,message);

return content_area_el.appendChild(el);
});
figwheel.client.heads_up.clear = (function figwheel$client$heads_up$clear(){
var c__20810__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20810__auto__){
return (function (){
var f__20811__auto__ = (function (){var switch__20745__auto__ = ((function (c__20810__auto__){
return (function (state_27041){
var state_val_27042 = (state_27041[(1)]);
if((state_val_27042 === (1))){
var inst_27024 = (state_27041[(7)]);
var inst_27024__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_27025 = [new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_27026 = ["0.0"];
var inst_27027 = cljs.core.PersistentHashMap.fromArrays(inst_27025,inst_27026);
var inst_27028 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_27024__$1,inst_27027);
var inst_27029 = cljs.core.async.timeout.call(null,(300));
var state_27041__$1 = (function (){var statearr_27043 = state_27041;
(statearr_27043[(8)] = inst_27028);

(statearr_27043[(7)] = inst_27024__$1);

return statearr_27043;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27041__$1,(2),inst_27029);
} else {
if((state_val_27042 === (2))){
var inst_27024 = (state_27041[(7)]);
var inst_27031 = (state_27041[(2)]);
var inst_27032 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491)];
var inst_27033 = ["auto","0px","0px","0px 10px 0px 70px","0px","transparent"];
var inst_27034 = cljs.core.PersistentHashMap.fromArrays(inst_27032,inst_27033);
var inst_27035 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_27024,inst_27034);
var inst_27036 = cljs.core.async.timeout.call(null,(200));
var state_27041__$1 = (function (){var statearr_27044 = state_27041;
(statearr_27044[(9)] = inst_27035);

(statearr_27044[(10)] = inst_27031);

return statearr_27044;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27041__$1,(3),inst_27036);
} else {
if((state_val_27042 === (3))){
var inst_27024 = (state_27041[(7)]);
var inst_27038 = (state_27041[(2)]);
var inst_27039 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_27024,"");
var state_27041__$1 = (function (){var statearr_27045 = state_27041;
(statearr_27045[(11)] = inst_27038);

return statearr_27045;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27041__$1,inst_27039);
} else {
return null;
}
}
}
});})(c__20810__auto__))
;
return ((function (switch__20745__auto__,c__20810__auto__){
return (function() {
var figwheel$client$heads_up$clear_$_state_machine__20746__auto__ = null;
var figwheel$client$heads_up$clear_$_state_machine__20746__auto____0 = (function (){
var statearr_27049 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27049[(0)] = figwheel$client$heads_up$clear_$_state_machine__20746__auto__);

(statearr_27049[(1)] = (1));

return statearr_27049;
});
var figwheel$client$heads_up$clear_$_state_machine__20746__auto____1 = (function (state_27041){
while(true){
var ret_value__20747__auto__ = (function (){try{while(true){
var result__20748__auto__ = switch__20745__auto__.call(null,state_27041);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20748__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20748__auto__;
}
break;
}
}catch (e27050){if((e27050 instanceof Object)){
var ex__20749__auto__ = e27050;
var statearr_27051_27053 = state_27041;
(statearr_27051_27053[(5)] = ex__20749__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27041);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27050;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20747__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27054 = state_27041;
state_27041 = G__27054;
continue;
} else {
return ret_value__20747__auto__;
}
break;
}
});
figwheel$client$heads_up$clear_$_state_machine__20746__auto__ = function(state_27041){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$clear_$_state_machine__20746__auto____0.call(this);
case 1:
return figwheel$client$heads_up$clear_$_state_machine__20746__auto____1.call(this,state_27041);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$clear_$_state_machine__20746__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$clear_$_state_machine__20746__auto____0;
figwheel$client$heads_up$clear_$_state_machine__20746__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$clear_$_state_machine__20746__auto____1;
return figwheel$client$heads_up$clear_$_state_machine__20746__auto__;
})()
;})(switch__20745__auto__,c__20810__auto__))
})();
var state__20812__auto__ = (function (){var statearr_27052 = f__20811__auto__.call(null);
(statearr_27052[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20810__auto__);

return statearr_27052;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20812__auto__);
});})(c__20810__auto__))
);

return c__20810__auto__;
});
figwheel.client.heads_up.display_loaded_start = (function figwheel$client$heads_up$display_loaded_start(){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(211,234,172,1.0)",new cljs.core.Keyword(null,"width","width",-384071477),"68px",new cljs.core.Keyword(null,"height","height",1025178622),"68px",new cljs.core.Keyword(null,"paddingLeft","paddingLeft",262720813),"0px",new cljs.core.Keyword(null,"paddingRight","paddingRight",-1642313463),"0px",new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),"35px"], null),"");
});
figwheel.client.heads_up.flash_loaded = (function figwheel$client$heads_up$flash_loaded(){
var c__20810__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20810__auto__){
return (function (){
var f__20811__auto__ = (function (){var switch__20745__auto__ = ((function (c__20810__auto__){
return (function (state_27086){
var state_val_27087 = (state_27086[(1)]);
if((state_val_27087 === (1))){
var inst_27076 = figwheel.client.heads_up.display_loaded_start.call(null);
var state_27086__$1 = state_27086;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27086__$1,(2),inst_27076);
} else {
if((state_val_27087 === (2))){
var inst_27078 = (state_27086[(2)]);
var inst_27079 = cljs.core.async.timeout.call(null,(400));
var state_27086__$1 = (function (){var statearr_27088 = state_27086;
(statearr_27088[(7)] = inst_27078);

return statearr_27088;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27086__$1,(3),inst_27079);
} else {
if((state_val_27087 === (3))){
var inst_27081 = (state_27086[(2)]);
var inst_27082 = figwheel.client.heads_up.clear.call(null);
var state_27086__$1 = (function (){var statearr_27089 = state_27086;
(statearr_27089[(8)] = inst_27081);

return statearr_27089;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27086__$1,(4),inst_27082);
} else {
if((state_val_27087 === (4))){
var inst_27084 = (state_27086[(2)]);
var state_27086__$1 = state_27086;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27086__$1,inst_27084);
} else {
return null;
}
}
}
}
});})(c__20810__auto__))
;
return ((function (switch__20745__auto__,c__20810__auto__){
return (function() {
var figwheel$client$heads_up$flash_loaded_$_state_machine__20746__auto__ = null;
var figwheel$client$heads_up$flash_loaded_$_state_machine__20746__auto____0 = (function (){
var statearr_27093 = [null,null,null,null,null,null,null,null,null];
(statearr_27093[(0)] = figwheel$client$heads_up$flash_loaded_$_state_machine__20746__auto__);

(statearr_27093[(1)] = (1));

return statearr_27093;
});
var figwheel$client$heads_up$flash_loaded_$_state_machine__20746__auto____1 = (function (state_27086){
while(true){
var ret_value__20747__auto__ = (function (){try{while(true){
var result__20748__auto__ = switch__20745__auto__.call(null,state_27086);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20748__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20748__auto__;
}
break;
}
}catch (e27094){if((e27094 instanceof Object)){
var ex__20749__auto__ = e27094;
var statearr_27095_27097 = state_27086;
(statearr_27095_27097[(5)] = ex__20749__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27086);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27094;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20747__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27098 = state_27086;
state_27086 = G__27098;
continue;
} else {
return ret_value__20747__auto__;
}
break;
}
});
figwheel$client$heads_up$flash_loaded_$_state_machine__20746__auto__ = function(state_27086){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$flash_loaded_$_state_machine__20746__auto____0.call(this);
case 1:
return figwheel$client$heads_up$flash_loaded_$_state_machine__20746__auto____1.call(this,state_27086);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$flash_loaded_$_state_machine__20746__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$flash_loaded_$_state_machine__20746__auto____0;
figwheel$client$heads_up$flash_loaded_$_state_machine__20746__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$flash_loaded_$_state_machine__20746__auto____1;
return figwheel$client$heads_up$flash_loaded_$_state_machine__20746__auto__;
})()
;})(switch__20745__auto__,c__20810__auto__))
})();
var state__20812__auto__ = (function (){var statearr_27096 = f__20811__auto__.call(null);
(statearr_27096[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20810__auto__);

return statearr_27096;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20812__auto__);
});})(c__20810__auto__))
);

return c__20810__auto__;
});
figwheel.client.heads_up.cljs_logo_svg = "<?xml version='1.0' encoding='utf-8'?>\n<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\n<svg width='49px' height='49px' style='position:absolute; top:9px; left: 10px;' version='1.1'\n  xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px'\n  viewBox='0 0 428 428' enable-background='new 0 0 428 428' xml:space='preserve'>\n<circle fill='#fff' cx='213' cy='214' r='213' />\n<g>\n<path fill='#96CA4B' d='M122,266.6c-12.7,0-22.3-3.7-28.9-11.1c-6.6-7.4-9.9-18-9.9-31.8c0-14.1,3.4-24.9,10.3-32.5\n  s16.8-11.4,29.9-11.4c8.8,0,16.8,1.6,23.8,4.9l-5.4,14.3c-7.5-2.9-13.7-4.4-18.6-4.4c-14.5,0-21.7,9.6-21.7,28.8\n  c0,9.4,1.8,16.4,5.4,21.2c3.6,4.7,8.9,7.1,15.9,7.1c7.9,0,15.4-2,22.5-5.9v15.5c-3.2,1.9-6.6,3.2-10.2,4\n  C131.5,266.2,127.1,266.6,122,266.6z'/>\n<path fill='#96CA4B' d='M194.4,265.1h-17.8V147.3h17.8V265.1z'/>\n<path fill='#5F7FBF' d='M222.9,302.3c-5.3,0-9.8-0.6-13.3-1.9v-14.1c3.4,0.9,6.9,1.4,10.5,1.4c7.6,0,11.4-4.3,11.4-12.9v-93.5h17.8\n  v94.7c0,8.6-2.3,15.2-6.8,19.6C237.9,300.1,231.4,302.3,222.9,302.3z M230.4,159.2c0-3.2,0.9-5.6,2.6-7.3c1.7-1.7,4.2-2.6,7.5-2.6\n  c3.1,0,5.6,0.9,7.3,2.6c1.7,1.7,2.6,4.2,2.6,7.3c0,3-0.9,5.4-2.6,7.2c-1.7,1.7-4.2,2.6-7.3,2.6c-3.2,0-5.7-0.9-7.5-2.6\n  C231.2,164.6,230.4,162.2,230.4,159.2z'/>\n<path fill='#5F7FBF' d='M342.5,241.3c0,8.2-3,14.4-8.9,18.8c-6,4.4-14.5,6.5-25.6,6.5c-11.2,0-20.1-1.7-26.9-5.1v-15.4\n  c9.8,4.5,19,6.8,27.5,6.8c10.9,0,16.4-3.3,16.4-9.9c0-2.1-0.6-3.9-1.8-5.3c-1.2-1.4-3.2-2.9-6-4.4c-2.8-1.5-6.6-3.2-11.6-5.1\n  c-9.6-3.7-16.2-7.5-19.6-11.2c-3.4-3.7-5.1-8.6-5.1-14.5c0-7.2,2.9-12.7,8.7-16.7c5.8-4,13.6-5.9,23.6-5.9c9.8,0,19.1,2,27.9,6\n  l-5.8,13.4c-9-3.7-16.6-5.6-22.8-5.6c-9.4,0-14.1,2.7-14.1,8c0,2.6,1.2,4.8,3.7,6.7c2.4,1.8,7.8,4.3,16,7.5\n  c6.9,2.7,11.9,5.1,15.1,7.3c3.1,2.2,5.4,4.8,7,7.7C341.7,233.7,342.5,237.2,342.5,241.3z'/>\n</g>\n<path fill='#96CA4B' stroke='#96CA4B' stroke-width='6' stroke-miterlimit='10' d='M197,392.7c-91.2-8.1-163-85-163-178.3\n  S105.8,44.3,197,36.2V16.1c-102.3,8.2-183,94-183,198.4s80.7,190.2,183,198.4V392.7z'/>\n<path fill='#5F7FBF' stroke='#5F7FBF' stroke-width='6' stroke-miterlimit='10' d='M229,16.1v20.1c91.2,8.1,163,85,163,178.3\n  s-71.8,170.2-163,178.3v20.1c102.3-8.2,183-94,183-198.4S331.3,24.3,229,16.1z'/>\n</svg>";

//# sourceMappingURL=heads_up.js.map?rel=1441995397849