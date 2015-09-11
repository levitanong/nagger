// Compiled by ClojureScript 1.7.122 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(f){
if(typeof cljs.core.async.t_cljs$core$async28240 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28240 = (function (fn_handler,f,meta28241){
this.fn_handler = fn_handler;
this.f = f;
this.meta28241 = meta28241;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async28240.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28242,meta28241__$1){
var self__ = this;
var _28242__$1 = this;
return (new cljs.core.async.t_cljs$core$async28240(self__.fn_handler,self__.f,meta28241__$1));
});

cljs.core.async.t_cljs$core$async28240.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28242){
var self__ = this;
var _28242__$1 = this;
return self__.meta28241;
});

cljs.core.async.t_cljs$core$async28240.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async28240.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async28240.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async28240.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"fn-handler","fn-handler",648785851,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null)], null)))], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"meta28241","meta28241",659406416,null)], null);
});

cljs.core.async.t_cljs$core$async28240.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28240.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28240";

cljs.core.async.t_cljs$core$async28240.cljs$lang$ctorPrWriter = (function (this__17088__auto__,writer__17089__auto__,opt__17090__auto__){
return cljs.core._write.call(null,writer__17089__auto__,"cljs.core.async/t_cljs$core$async28240");
});

cljs.core.async.__GT_t_cljs$core$async28240 = (function cljs$core$async$fn_handler_$___GT_t_cljs$core$async28240(fn_handler__$1,f__$1,meta28241){
return (new cljs.core.async.t_cljs$core$async28240(fn_handler__$1,f__$1,meta28241));
});

}

return (new cljs.core.async.t_cljs$core$async28240(cljs$core$async$fn_handler,f,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args28245 = [];
var len__17548__auto___28248 = arguments.length;
var i__17549__auto___28249 = (0);
while(true){
if((i__17549__auto___28249 < len__17548__auto___28248)){
args28245.push((arguments[i__17549__auto___28249]));

var G__28250 = (i__17549__auto___28249 + (1));
i__17549__auto___28249 = G__28250;
continue;
} else {
}
break;
}

var G__28247 = args28245.length;
switch (G__28247) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28245.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null)))].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;
/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args28252 = [];
var len__17548__auto___28255 = arguments.length;
var i__17549__auto___28256 = (0);
while(true){
if((i__17549__auto___28256 < len__17548__auto___28255)){
args28252.push((arguments[i__17549__auto___28256]));

var G__28257 = (i__17549__auto___28256 + (1));
i__17549__auto___28256 = G__28257;
continue;
} else {
}
break;
}

var G__28254 = args28252.length;
switch (G__28254) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28252.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_28259 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_28259);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_28259,ret){
return (function (){
return fn1.call(null,val_28259);
});})(val_28259,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;
cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args28260 = [];
var len__17548__auto___28263 = arguments.length;
var i__17549__auto___28264 = (0);
while(true){
if((i__17549__auto___28264 < len__17548__auto___28263)){
args28260.push((arguments[i__17549__auto___28264]));

var G__28265 = (i__17549__auto___28264 + (1));
i__17549__auto___28264 = G__28265;
continue;
} else {
}
break;
}

var G__28262 = args28260.length;
switch (G__28262) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28260.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4423__auto__)){
var ret = temp__4423__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4423__auto__)){
var retb = temp__4423__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4423__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4423__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;
cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__17393__auto___28267 = n;
var x_28268 = (0);
while(true){
if((x_28268 < n__17393__auto___28267)){
(a[x_28268] = (0));

var G__28269 = (x_28268 + (1));
x_28268 = G__28269;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__28270 = (i + (1));
i = G__28270;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async28274 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28274 = (function (alt_flag,flag,meta28275){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta28275 = meta28275;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async28274.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_28276,meta28275__$1){
var self__ = this;
var _28276__$1 = this;
return (new cljs.core.async.t_cljs$core$async28274(self__.alt_flag,self__.flag,meta28275__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async28274.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_28276){
var self__ = this;
var _28276__$1 = this;
return self__.meta28275;
});})(flag))
;

cljs.core.async.t_cljs$core$async28274.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async28274.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async28274.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async28274.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta28275","meta28275",569365487,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async28274.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28274.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28274";

cljs.core.async.t_cljs$core$async28274.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__17088__auto__,writer__17089__auto__,opt__17090__auto__){
return cljs.core._write.call(null,writer__17089__auto__,"cljs.core.async/t_cljs$core$async28274");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async28274 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async28274(alt_flag__$1,flag__$1,meta28275){
return (new cljs.core.async.t_cljs$core$async28274(alt_flag__$1,flag__$1,meta28275));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async28274(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async28280 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28280 = (function (alt_handler,flag,cb,meta28281){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta28281 = meta28281;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async28280.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28282,meta28281__$1){
var self__ = this;
var _28282__$1 = this;
return (new cljs.core.async.t_cljs$core$async28280(self__.alt_handler,self__.flag,self__.cb,meta28281__$1));
});

cljs.core.async.t_cljs$core$async28280.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28282){
var self__ = this;
var _28282__$1 = this;
return self__.meta28281;
});

cljs.core.async.t_cljs$core$async28280.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async28280.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async28280.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async28280.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta28281","meta28281",1911651109,null)], null);
});

cljs.core.async.t_cljs$core$async28280.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28280.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28280";

cljs.core.async.t_cljs$core$async28280.cljs$lang$ctorPrWriter = (function (this__17088__auto__,writer__17089__auto__,opt__17090__auto__){
return cljs.core._write.call(null,writer__17089__auto__,"cljs.core.async/t_cljs$core$async28280");
});

cljs.core.async.__GT_t_cljs$core$async28280 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async28280(alt_handler__$1,flag__$1,cb__$1,meta28281){
return (new cljs.core.async.t_cljs$core$async28280(alt_handler__$1,flag__$1,cb__$1,meta28281));
});

}

return (new cljs.core.async.t_cljs$core$async28280(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__28283_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__28283_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__28284_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__28284_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__16490__auto__ = wport;
if(cljs.core.truth_(or__16490__auto__)){
return or__16490__auto__;
} else {
return port;
}
})()], null));
} else {
var G__28285 = (i + (1));
i = G__28285;
continue;
}
} else {
return null;
}
break;
}
})();
var or__16490__auto__ = ret;
if(cljs.core.truth_(or__16490__auto__)){
return or__16490__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4425__auto__ = (function (){var and__16478__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__16478__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__16478__auto__;
}
})();
if(cljs.core.truth_(temp__4425__auto__)){
var got = temp__4425__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__17555__auto__ = [];
var len__17548__auto___28291 = arguments.length;
var i__17549__auto___28292 = (0);
while(true){
if((i__17549__auto___28292 < len__17548__auto___28291)){
args__17555__auto__.push((arguments[i__17549__auto___28292]));

var G__28293 = (i__17549__auto___28292 + (1));
i__17549__auto___28292 = G__28293;
continue;
} else {
}
break;
}

var argseq__17556__auto__ = ((((1) < args__17555__auto__.length))?(new cljs.core.IndexedSeq(args__17555__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17556__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__28288){
var map__28289 = p__28288;
var map__28289__$1 = ((((!((map__28289 == null)))?((((map__28289.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28289.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28289):map__28289);
var opts = map__28289__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq28286){
var G__28287 = cljs.core.first.call(null,seq28286);
var seq28286__$1 = cljs.core.next.call(null,seq28286);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__28287,seq28286__$1);
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args28294 = [];
var len__17548__auto___28344 = arguments.length;
var i__17549__auto___28345 = (0);
while(true){
if((i__17549__auto___28345 < len__17548__auto___28344)){
args28294.push((arguments[i__17549__auto___28345]));

var G__28346 = (i__17549__auto___28345 + (1));
i__17549__auto___28345 = G__28346;
continue;
} else {
}
break;
}

var G__28296 = args28294.length;
switch (G__28296) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28294.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__20810__auto___28348 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20810__auto___28348){
return (function (){
var f__20811__auto__ = (function (){var switch__20745__auto__ = ((function (c__20810__auto___28348){
return (function (state_28320){
var state_val_28321 = (state_28320[(1)]);
if((state_val_28321 === (7))){
var inst_28316 = (state_28320[(2)]);
var state_28320__$1 = state_28320;
var statearr_28322_28349 = state_28320__$1;
(statearr_28322_28349[(2)] = inst_28316);

(statearr_28322_28349[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28321 === (1))){
var state_28320__$1 = state_28320;
var statearr_28323_28350 = state_28320__$1;
(statearr_28323_28350[(2)] = null);

(statearr_28323_28350[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28321 === (4))){
var inst_28299 = (state_28320[(7)]);
var inst_28299__$1 = (state_28320[(2)]);
var inst_28300 = (inst_28299__$1 == null);
var state_28320__$1 = (function (){var statearr_28324 = state_28320;
(statearr_28324[(7)] = inst_28299__$1);

return statearr_28324;
})();
if(cljs.core.truth_(inst_28300)){
var statearr_28325_28351 = state_28320__$1;
(statearr_28325_28351[(1)] = (5));

} else {
var statearr_28326_28352 = state_28320__$1;
(statearr_28326_28352[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28321 === (13))){
var state_28320__$1 = state_28320;
var statearr_28327_28353 = state_28320__$1;
(statearr_28327_28353[(2)] = null);

(statearr_28327_28353[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28321 === (6))){
var inst_28299 = (state_28320[(7)]);
var state_28320__$1 = state_28320;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28320__$1,(11),to,inst_28299);
} else {
if((state_val_28321 === (3))){
var inst_28318 = (state_28320[(2)]);
var state_28320__$1 = state_28320;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28320__$1,inst_28318);
} else {
if((state_val_28321 === (12))){
var state_28320__$1 = state_28320;
var statearr_28328_28354 = state_28320__$1;
(statearr_28328_28354[(2)] = null);

(statearr_28328_28354[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28321 === (2))){
var state_28320__$1 = state_28320;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28320__$1,(4),from);
} else {
if((state_val_28321 === (11))){
var inst_28309 = (state_28320[(2)]);
var state_28320__$1 = state_28320;
if(cljs.core.truth_(inst_28309)){
var statearr_28329_28355 = state_28320__$1;
(statearr_28329_28355[(1)] = (12));

} else {
var statearr_28330_28356 = state_28320__$1;
(statearr_28330_28356[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28321 === (9))){
var state_28320__$1 = state_28320;
var statearr_28331_28357 = state_28320__$1;
(statearr_28331_28357[(2)] = null);

(statearr_28331_28357[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28321 === (5))){
var state_28320__$1 = state_28320;
if(cljs.core.truth_(close_QMARK_)){
var statearr_28332_28358 = state_28320__$1;
(statearr_28332_28358[(1)] = (8));

} else {
var statearr_28333_28359 = state_28320__$1;
(statearr_28333_28359[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28321 === (14))){
var inst_28314 = (state_28320[(2)]);
var state_28320__$1 = state_28320;
var statearr_28334_28360 = state_28320__$1;
(statearr_28334_28360[(2)] = inst_28314);

(statearr_28334_28360[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28321 === (10))){
var inst_28306 = (state_28320[(2)]);
var state_28320__$1 = state_28320;
var statearr_28335_28361 = state_28320__$1;
(statearr_28335_28361[(2)] = inst_28306);

(statearr_28335_28361[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28321 === (8))){
var inst_28303 = cljs.core.async.close_BANG_.call(null,to);
var state_28320__$1 = state_28320;
var statearr_28336_28362 = state_28320__$1;
(statearr_28336_28362[(2)] = inst_28303);

(statearr_28336_28362[(1)] = (10));


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
});})(c__20810__auto___28348))
;
return ((function (switch__20745__auto__,c__20810__auto___28348){
return (function() {
var cljs$core$async$state_machine__20746__auto__ = null;
var cljs$core$async$state_machine__20746__auto____0 = (function (){
var statearr_28340 = [null,null,null,null,null,null,null,null];
(statearr_28340[(0)] = cljs$core$async$state_machine__20746__auto__);

(statearr_28340[(1)] = (1));

return statearr_28340;
});
var cljs$core$async$state_machine__20746__auto____1 = (function (state_28320){
while(true){
var ret_value__20747__auto__ = (function (){try{while(true){
var result__20748__auto__ = switch__20745__auto__.call(null,state_28320);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20748__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20748__auto__;
}
break;
}
}catch (e28341){if((e28341 instanceof Object)){
var ex__20749__auto__ = e28341;
var statearr_28342_28363 = state_28320;
(statearr_28342_28363[(5)] = ex__20749__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28320);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28341;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20747__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28364 = state_28320;
state_28320 = G__28364;
continue;
} else {
return ret_value__20747__auto__;
}
break;
}
});
cljs$core$async$state_machine__20746__auto__ = function(state_28320){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20746__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20746__auto____1.call(this,state_28320);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20746__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20746__auto____0;
cljs$core$async$state_machine__20746__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20746__auto____1;
return cljs$core$async$state_machine__20746__auto__;
})()
;})(switch__20745__auto__,c__20810__auto___28348))
})();
var state__20812__auto__ = (function (){var statearr_28343 = f__20811__auto__.call(null);
(statearr_28343[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20810__auto___28348);

return statearr_28343;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20812__auto__);
});})(c__20810__auto___28348))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))))].join('')));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__28548){
var vec__28549 = p__28548;
var v = cljs.core.nth.call(null,vec__28549,(0),null);
var p = cljs.core.nth.call(null,vec__28549,(1),null);
var job = vec__28549;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__20810__auto___28731 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20810__auto___28731,res,vec__28549,v,p,job,jobs,results){
return (function (){
var f__20811__auto__ = (function (){var switch__20745__auto__ = ((function (c__20810__auto___28731,res,vec__28549,v,p,job,jobs,results){
return (function (state_28554){
var state_val_28555 = (state_28554[(1)]);
if((state_val_28555 === (1))){
var state_28554__$1 = state_28554;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28554__$1,(2),res,v);
} else {
if((state_val_28555 === (2))){
var inst_28551 = (state_28554[(2)]);
var inst_28552 = cljs.core.async.close_BANG_.call(null,res);
var state_28554__$1 = (function (){var statearr_28556 = state_28554;
(statearr_28556[(7)] = inst_28551);

return statearr_28556;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28554__$1,inst_28552);
} else {
return null;
}
}
});})(c__20810__auto___28731,res,vec__28549,v,p,job,jobs,results))
;
return ((function (switch__20745__auto__,c__20810__auto___28731,res,vec__28549,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20746__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20746__auto____0 = (function (){
var statearr_28560 = [null,null,null,null,null,null,null,null];
(statearr_28560[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20746__auto__);

(statearr_28560[(1)] = (1));

return statearr_28560;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20746__auto____1 = (function (state_28554){
while(true){
var ret_value__20747__auto__ = (function (){try{while(true){
var result__20748__auto__ = switch__20745__auto__.call(null,state_28554);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20748__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20748__auto__;
}
break;
}
}catch (e28561){if((e28561 instanceof Object)){
var ex__20749__auto__ = e28561;
var statearr_28562_28732 = state_28554;
(statearr_28562_28732[(5)] = ex__20749__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28554);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28561;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20747__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28733 = state_28554;
state_28554 = G__28733;
continue;
} else {
return ret_value__20747__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20746__auto__ = function(state_28554){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20746__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20746__auto____1.call(this,state_28554);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20746__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20746__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20746__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20746__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20746__auto__;
})()
;})(switch__20745__auto__,c__20810__auto___28731,res,vec__28549,v,p,job,jobs,results))
})();
var state__20812__auto__ = (function (){var statearr_28563 = f__20811__auto__.call(null);
(statearr_28563[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20810__auto___28731);

return statearr_28563;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20812__auto__);
});})(c__20810__auto___28731,res,vec__28549,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__28564){
var vec__28565 = p__28564;
var v = cljs.core.nth.call(null,vec__28565,(0),null);
var p = cljs.core.nth.call(null,vec__28565,(1),null);
var job = vec__28565;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__17393__auto___28734 = n;
var __28735 = (0);
while(true){
if((__28735 < n__17393__auto___28734)){
var G__28566_28736 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__28566_28736) {
case "compute":
var c__20810__auto___28738 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__28735,c__20810__auto___28738,G__28566_28736,n__17393__auto___28734,jobs,results,process,async){
return (function (){
var f__20811__auto__ = (function (){var switch__20745__auto__ = ((function (__28735,c__20810__auto___28738,G__28566_28736,n__17393__auto___28734,jobs,results,process,async){
return (function (state_28579){
var state_val_28580 = (state_28579[(1)]);
if((state_val_28580 === (1))){
var state_28579__$1 = state_28579;
var statearr_28581_28739 = state_28579__$1;
(statearr_28581_28739[(2)] = null);

(statearr_28581_28739[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28580 === (2))){
var state_28579__$1 = state_28579;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28579__$1,(4),jobs);
} else {
if((state_val_28580 === (3))){
var inst_28577 = (state_28579[(2)]);
var state_28579__$1 = state_28579;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28579__$1,inst_28577);
} else {
if((state_val_28580 === (4))){
var inst_28569 = (state_28579[(2)]);
var inst_28570 = process.call(null,inst_28569);
var state_28579__$1 = state_28579;
if(cljs.core.truth_(inst_28570)){
var statearr_28582_28740 = state_28579__$1;
(statearr_28582_28740[(1)] = (5));

} else {
var statearr_28583_28741 = state_28579__$1;
(statearr_28583_28741[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28580 === (5))){
var state_28579__$1 = state_28579;
var statearr_28584_28742 = state_28579__$1;
(statearr_28584_28742[(2)] = null);

(statearr_28584_28742[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28580 === (6))){
var state_28579__$1 = state_28579;
var statearr_28585_28743 = state_28579__$1;
(statearr_28585_28743[(2)] = null);

(statearr_28585_28743[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28580 === (7))){
var inst_28575 = (state_28579[(2)]);
var state_28579__$1 = state_28579;
var statearr_28586_28744 = state_28579__$1;
(statearr_28586_28744[(2)] = inst_28575);

(statearr_28586_28744[(1)] = (3));


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
});})(__28735,c__20810__auto___28738,G__28566_28736,n__17393__auto___28734,jobs,results,process,async))
;
return ((function (__28735,switch__20745__auto__,c__20810__auto___28738,G__28566_28736,n__17393__auto___28734,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20746__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20746__auto____0 = (function (){
var statearr_28590 = [null,null,null,null,null,null,null];
(statearr_28590[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20746__auto__);

(statearr_28590[(1)] = (1));

return statearr_28590;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20746__auto____1 = (function (state_28579){
while(true){
var ret_value__20747__auto__ = (function (){try{while(true){
var result__20748__auto__ = switch__20745__auto__.call(null,state_28579);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20748__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20748__auto__;
}
break;
}
}catch (e28591){if((e28591 instanceof Object)){
var ex__20749__auto__ = e28591;
var statearr_28592_28745 = state_28579;
(statearr_28592_28745[(5)] = ex__20749__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28579);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28591;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20747__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28746 = state_28579;
state_28579 = G__28746;
continue;
} else {
return ret_value__20747__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20746__auto__ = function(state_28579){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20746__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20746__auto____1.call(this,state_28579);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20746__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20746__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20746__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20746__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20746__auto__;
})()
;})(__28735,switch__20745__auto__,c__20810__auto___28738,G__28566_28736,n__17393__auto___28734,jobs,results,process,async))
})();
var state__20812__auto__ = (function (){var statearr_28593 = f__20811__auto__.call(null);
(statearr_28593[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20810__auto___28738);

return statearr_28593;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20812__auto__);
});})(__28735,c__20810__auto___28738,G__28566_28736,n__17393__auto___28734,jobs,results,process,async))
);


break;
case "async":
var c__20810__auto___28747 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__28735,c__20810__auto___28747,G__28566_28736,n__17393__auto___28734,jobs,results,process,async){
return (function (){
var f__20811__auto__ = (function (){var switch__20745__auto__ = ((function (__28735,c__20810__auto___28747,G__28566_28736,n__17393__auto___28734,jobs,results,process,async){
return (function (state_28606){
var state_val_28607 = (state_28606[(1)]);
if((state_val_28607 === (1))){
var state_28606__$1 = state_28606;
var statearr_28608_28748 = state_28606__$1;
(statearr_28608_28748[(2)] = null);

(statearr_28608_28748[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28607 === (2))){
var state_28606__$1 = state_28606;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28606__$1,(4),jobs);
} else {
if((state_val_28607 === (3))){
var inst_28604 = (state_28606[(2)]);
var state_28606__$1 = state_28606;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28606__$1,inst_28604);
} else {
if((state_val_28607 === (4))){
var inst_28596 = (state_28606[(2)]);
var inst_28597 = async.call(null,inst_28596);
var state_28606__$1 = state_28606;
if(cljs.core.truth_(inst_28597)){
var statearr_28609_28749 = state_28606__$1;
(statearr_28609_28749[(1)] = (5));

} else {
var statearr_28610_28750 = state_28606__$1;
(statearr_28610_28750[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28607 === (5))){
var state_28606__$1 = state_28606;
var statearr_28611_28751 = state_28606__$1;
(statearr_28611_28751[(2)] = null);

(statearr_28611_28751[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28607 === (6))){
var state_28606__$1 = state_28606;
var statearr_28612_28752 = state_28606__$1;
(statearr_28612_28752[(2)] = null);

(statearr_28612_28752[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28607 === (7))){
var inst_28602 = (state_28606[(2)]);
var state_28606__$1 = state_28606;
var statearr_28613_28753 = state_28606__$1;
(statearr_28613_28753[(2)] = inst_28602);

(statearr_28613_28753[(1)] = (3));


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
});})(__28735,c__20810__auto___28747,G__28566_28736,n__17393__auto___28734,jobs,results,process,async))
;
return ((function (__28735,switch__20745__auto__,c__20810__auto___28747,G__28566_28736,n__17393__auto___28734,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20746__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20746__auto____0 = (function (){
var statearr_28617 = [null,null,null,null,null,null,null];
(statearr_28617[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20746__auto__);

(statearr_28617[(1)] = (1));

return statearr_28617;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20746__auto____1 = (function (state_28606){
while(true){
var ret_value__20747__auto__ = (function (){try{while(true){
var result__20748__auto__ = switch__20745__auto__.call(null,state_28606);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20748__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20748__auto__;
}
break;
}
}catch (e28618){if((e28618 instanceof Object)){
var ex__20749__auto__ = e28618;
var statearr_28619_28754 = state_28606;
(statearr_28619_28754[(5)] = ex__20749__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28606);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28618;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20747__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28755 = state_28606;
state_28606 = G__28755;
continue;
} else {
return ret_value__20747__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20746__auto__ = function(state_28606){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20746__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20746__auto____1.call(this,state_28606);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20746__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20746__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20746__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20746__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20746__auto__;
})()
;})(__28735,switch__20745__auto__,c__20810__auto___28747,G__28566_28736,n__17393__auto___28734,jobs,results,process,async))
})();
var state__20812__auto__ = (function (){var statearr_28620 = f__20811__auto__.call(null);
(statearr_28620[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20810__auto___28747);

return statearr_28620;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20812__auto__);
});})(__28735,c__20810__auto___28747,G__28566_28736,n__17393__auto___28734,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__28756 = (__28735 + (1));
__28735 = G__28756;
continue;
} else {
}
break;
}

var c__20810__auto___28757 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20810__auto___28757,jobs,results,process,async){
return (function (){
var f__20811__auto__ = (function (){var switch__20745__auto__ = ((function (c__20810__auto___28757,jobs,results,process,async){
return (function (state_28642){
var state_val_28643 = (state_28642[(1)]);
if((state_val_28643 === (1))){
var state_28642__$1 = state_28642;
var statearr_28644_28758 = state_28642__$1;
(statearr_28644_28758[(2)] = null);

(statearr_28644_28758[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28643 === (2))){
var state_28642__$1 = state_28642;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28642__$1,(4),from);
} else {
if((state_val_28643 === (3))){
var inst_28640 = (state_28642[(2)]);
var state_28642__$1 = state_28642;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28642__$1,inst_28640);
} else {
if((state_val_28643 === (4))){
var inst_28623 = (state_28642[(7)]);
var inst_28623__$1 = (state_28642[(2)]);
var inst_28624 = (inst_28623__$1 == null);
var state_28642__$1 = (function (){var statearr_28645 = state_28642;
(statearr_28645[(7)] = inst_28623__$1);

return statearr_28645;
})();
if(cljs.core.truth_(inst_28624)){
var statearr_28646_28759 = state_28642__$1;
(statearr_28646_28759[(1)] = (5));

} else {
var statearr_28647_28760 = state_28642__$1;
(statearr_28647_28760[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28643 === (5))){
var inst_28626 = cljs.core.async.close_BANG_.call(null,jobs);
var state_28642__$1 = state_28642;
var statearr_28648_28761 = state_28642__$1;
(statearr_28648_28761[(2)] = inst_28626);

(statearr_28648_28761[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28643 === (6))){
var inst_28628 = (state_28642[(8)]);
var inst_28623 = (state_28642[(7)]);
var inst_28628__$1 = cljs.core.async.chan.call(null,(1));
var inst_28629 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_28630 = [inst_28623,inst_28628__$1];
var inst_28631 = (new cljs.core.PersistentVector(null,2,(5),inst_28629,inst_28630,null));
var state_28642__$1 = (function (){var statearr_28649 = state_28642;
(statearr_28649[(8)] = inst_28628__$1);

return statearr_28649;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28642__$1,(8),jobs,inst_28631);
} else {
if((state_val_28643 === (7))){
var inst_28638 = (state_28642[(2)]);
var state_28642__$1 = state_28642;
var statearr_28650_28762 = state_28642__$1;
(statearr_28650_28762[(2)] = inst_28638);

(statearr_28650_28762[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28643 === (8))){
var inst_28628 = (state_28642[(8)]);
var inst_28633 = (state_28642[(2)]);
var state_28642__$1 = (function (){var statearr_28651 = state_28642;
(statearr_28651[(9)] = inst_28633);

return statearr_28651;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28642__$1,(9),results,inst_28628);
} else {
if((state_val_28643 === (9))){
var inst_28635 = (state_28642[(2)]);
var state_28642__$1 = (function (){var statearr_28652 = state_28642;
(statearr_28652[(10)] = inst_28635);

return statearr_28652;
})();
var statearr_28653_28763 = state_28642__$1;
(statearr_28653_28763[(2)] = null);

(statearr_28653_28763[(1)] = (2));


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
});})(c__20810__auto___28757,jobs,results,process,async))
;
return ((function (switch__20745__auto__,c__20810__auto___28757,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20746__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20746__auto____0 = (function (){
var statearr_28657 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28657[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20746__auto__);

(statearr_28657[(1)] = (1));

return statearr_28657;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20746__auto____1 = (function (state_28642){
while(true){
var ret_value__20747__auto__ = (function (){try{while(true){
var result__20748__auto__ = switch__20745__auto__.call(null,state_28642);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20748__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20748__auto__;
}
break;
}
}catch (e28658){if((e28658 instanceof Object)){
var ex__20749__auto__ = e28658;
var statearr_28659_28764 = state_28642;
(statearr_28659_28764[(5)] = ex__20749__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28642);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28658;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20747__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28765 = state_28642;
state_28642 = G__28765;
continue;
} else {
return ret_value__20747__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20746__auto__ = function(state_28642){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20746__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20746__auto____1.call(this,state_28642);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20746__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20746__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20746__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20746__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20746__auto__;
})()
;})(switch__20745__auto__,c__20810__auto___28757,jobs,results,process,async))
})();
var state__20812__auto__ = (function (){var statearr_28660 = f__20811__auto__.call(null);
(statearr_28660[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20810__auto___28757);

return statearr_28660;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20812__auto__);
});})(c__20810__auto___28757,jobs,results,process,async))
);


var c__20810__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20810__auto__,jobs,results,process,async){
return (function (){
var f__20811__auto__ = (function (){var switch__20745__auto__ = ((function (c__20810__auto__,jobs,results,process,async){
return (function (state_28698){
var state_val_28699 = (state_28698[(1)]);
if((state_val_28699 === (7))){
var inst_28694 = (state_28698[(2)]);
var state_28698__$1 = state_28698;
var statearr_28700_28766 = state_28698__$1;
(statearr_28700_28766[(2)] = inst_28694);

(statearr_28700_28766[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28699 === (20))){
var state_28698__$1 = state_28698;
var statearr_28701_28767 = state_28698__$1;
(statearr_28701_28767[(2)] = null);

(statearr_28701_28767[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28699 === (1))){
var state_28698__$1 = state_28698;
var statearr_28702_28768 = state_28698__$1;
(statearr_28702_28768[(2)] = null);

(statearr_28702_28768[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28699 === (4))){
var inst_28663 = (state_28698[(7)]);
var inst_28663__$1 = (state_28698[(2)]);
var inst_28664 = (inst_28663__$1 == null);
var state_28698__$1 = (function (){var statearr_28703 = state_28698;
(statearr_28703[(7)] = inst_28663__$1);

return statearr_28703;
})();
if(cljs.core.truth_(inst_28664)){
var statearr_28704_28769 = state_28698__$1;
(statearr_28704_28769[(1)] = (5));

} else {
var statearr_28705_28770 = state_28698__$1;
(statearr_28705_28770[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28699 === (15))){
var inst_28676 = (state_28698[(8)]);
var state_28698__$1 = state_28698;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28698__$1,(18),to,inst_28676);
} else {
if((state_val_28699 === (21))){
var inst_28689 = (state_28698[(2)]);
var state_28698__$1 = state_28698;
var statearr_28706_28771 = state_28698__$1;
(statearr_28706_28771[(2)] = inst_28689);

(statearr_28706_28771[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28699 === (13))){
var inst_28691 = (state_28698[(2)]);
var state_28698__$1 = (function (){var statearr_28707 = state_28698;
(statearr_28707[(9)] = inst_28691);

return statearr_28707;
})();
var statearr_28708_28772 = state_28698__$1;
(statearr_28708_28772[(2)] = null);

(statearr_28708_28772[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28699 === (6))){
var inst_28663 = (state_28698[(7)]);
var state_28698__$1 = state_28698;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28698__$1,(11),inst_28663);
} else {
if((state_val_28699 === (17))){
var inst_28684 = (state_28698[(2)]);
var state_28698__$1 = state_28698;
if(cljs.core.truth_(inst_28684)){
var statearr_28709_28773 = state_28698__$1;
(statearr_28709_28773[(1)] = (19));

} else {
var statearr_28710_28774 = state_28698__$1;
(statearr_28710_28774[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28699 === (3))){
var inst_28696 = (state_28698[(2)]);
var state_28698__$1 = state_28698;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28698__$1,inst_28696);
} else {
if((state_val_28699 === (12))){
var inst_28673 = (state_28698[(10)]);
var state_28698__$1 = state_28698;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28698__$1,(14),inst_28673);
} else {
if((state_val_28699 === (2))){
var state_28698__$1 = state_28698;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28698__$1,(4),results);
} else {
if((state_val_28699 === (19))){
var state_28698__$1 = state_28698;
var statearr_28711_28775 = state_28698__$1;
(statearr_28711_28775[(2)] = null);

(statearr_28711_28775[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28699 === (11))){
var inst_28673 = (state_28698[(2)]);
var state_28698__$1 = (function (){var statearr_28712 = state_28698;
(statearr_28712[(10)] = inst_28673);

return statearr_28712;
})();
var statearr_28713_28776 = state_28698__$1;
(statearr_28713_28776[(2)] = null);

(statearr_28713_28776[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28699 === (9))){
var state_28698__$1 = state_28698;
var statearr_28714_28777 = state_28698__$1;
(statearr_28714_28777[(2)] = null);

(statearr_28714_28777[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28699 === (5))){
var state_28698__$1 = state_28698;
if(cljs.core.truth_(close_QMARK_)){
var statearr_28715_28778 = state_28698__$1;
(statearr_28715_28778[(1)] = (8));

} else {
var statearr_28716_28779 = state_28698__$1;
(statearr_28716_28779[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28699 === (14))){
var inst_28678 = (state_28698[(11)]);
var inst_28676 = (state_28698[(8)]);
var inst_28676__$1 = (state_28698[(2)]);
var inst_28677 = (inst_28676__$1 == null);
var inst_28678__$1 = cljs.core.not.call(null,inst_28677);
var state_28698__$1 = (function (){var statearr_28717 = state_28698;
(statearr_28717[(11)] = inst_28678__$1);

(statearr_28717[(8)] = inst_28676__$1);

return statearr_28717;
})();
if(inst_28678__$1){
var statearr_28718_28780 = state_28698__$1;
(statearr_28718_28780[(1)] = (15));

} else {
var statearr_28719_28781 = state_28698__$1;
(statearr_28719_28781[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28699 === (16))){
var inst_28678 = (state_28698[(11)]);
var state_28698__$1 = state_28698;
var statearr_28720_28782 = state_28698__$1;
(statearr_28720_28782[(2)] = inst_28678);

(statearr_28720_28782[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28699 === (10))){
var inst_28670 = (state_28698[(2)]);
var state_28698__$1 = state_28698;
var statearr_28721_28783 = state_28698__$1;
(statearr_28721_28783[(2)] = inst_28670);

(statearr_28721_28783[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28699 === (18))){
var inst_28681 = (state_28698[(2)]);
var state_28698__$1 = state_28698;
var statearr_28722_28784 = state_28698__$1;
(statearr_28722_28784[(2)] = inst_28681);

(statearr_28722_28784[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28699 === (8))){
var inst_28667 = cljs.core.async.close_BANG_.call(null,to);
var state_28698__$1 = state_28698;
var statearr_28723_28785 = state_28698__$1;
(statearr_28723_28785[(2)] = inst_28667);

(statearr_28723_28785[(1)] = (10));


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
});})(c__20810__auto__,jobs,results,process,async))
;
return ((function (switch__20745__auto__,c__20810__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20746__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20746__auto____0 = (function (){
var statearr_28727 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28727[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20746__auto__);

(statearr_28727[(1)] = (1));

return statearr_28727;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20746__auto____1 = (function (state_28698){
while(true){
var ret_value__20747__auto__ = (function (){try{while(true){
var result__20748__auto__ = switch__20745__auto__.call(null,state_28698);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20748__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20748__auto__;
}
break;
}
}catch (e28728){if((e28728 instanceof Object)){
var ex__20749__auto__ = e28728;
var statearr_28729_28786 = state_28698;
(statearr_28729_28786[(5)] = ex__20749__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28698);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28728;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20747__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28787 = state_28698;
state_28698 = G__28787;
continue;
} else {
return ret_value__20747__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20746__auto__ = function(state_28698){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20746__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20746__auto____1.call(this,state_28698);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20746__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20746__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20746__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20746__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20746__auto__;
})()
;})(switch__20745__auto__,c__20810__auto__,jobs,results,process,async))
})();
var state__20812__auto__ = (function (){var statearr_28730 = f__20811__auto__.call(null);
(statearr_28730[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20810__auto__);

return statearr_28730;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20812__auto__);
});})(c__20810__auto__,jobs,results,process,async))
);

return c__20810__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args28788 = [];
var len__17548__auto___28791 = arguments.length;
var i__17549__auto___28792 = (0);
while(true){
if((i__17549__auto___28792 < len__17548__auto___28791)){
args28788.push((arguments[i__17549__auto___28792]));

var G__28793 = (i__17549__auto___28792 + (1));
i__17549__auto___28792 = G__28793;
continue;
} else {
}
break;
}

var G__28790 = args28788.length;
switch (G__28790) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28788.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args28795 = [];
var len__17548__auto___28798 = arguments.length;
var i__17549__auto___28799 = (0);
while(true){
if((i__17549__auto___28799 < len__17548__auto___28798)){
args28795.push((arguments[i__17549__auto___28799]));

var G__28800 = (i__17549__auto___28799 + (1));
i__17549__auto___28799 = G__28800;
continue;
} else {
}
break;
}

var G__28797 = args28795.length;
switch (G__28797) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28795.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;
/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args28802 = [];
var len__17548__auto___28855 = arguments.length;
var i__17549__auto___28856 = (0);
while(true){
if((i__17549__auto___28856 < len__17548__auto___28855)){
args28802.push((arguments[i__17549__auto___28856]));

var G__28857 = (i__17549__auto___28856 + (1));
i__17549__auto___28856 = G__28857;
continue;
} else {
}
break;
}

var G__28804 = args28802.length;
switch (G__28804) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28802.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__20810__auto___28859 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20810__auto___28859,tc,fc){
return (function (){
var f__20811__auto__ = (function (){var switch__20745__auto__ = ((function (c__20810__auto___28859,tc,fc){
return (function (state_28830){
var state_val_28831 = (state_28830[(1)]);
if((state_val_28831 === (7))){
var inst_28826 = (state_28830[(2)]);
var state_28830__$1 = state_28830;
var statearr_28832_28860 = state_28830__$1;
(statearr_28832_28860[(2)] = inst_28826);

(statearr_28832_28860[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28831 === (1))){
var state_28830__$1 = state_28830;
var statearr_28833_28861 = state_28830__$1;
(statearr_28833_28861[(2)] = null);

(statearr_28833_28861[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28831 === (4))){
var inst_28807 = (state_28830[(7)]);
var inst_28807__$1 = (state_28830[(2)]);
var inst_28808 = (inst_28807__$1 == null);
var state_28830__$1 = (function (){var statearr_28834 = state_28830;
(statearr_28834[(7)] = inst_28807__$1);

return statearr_28834;
})();
if(cljs.core.truth_(inst_28808)){
var statearr_28835_28862 = state_28830__$1;
(statearr_28835_28862[(1)] = (5));

} else {
var statearr_28836_28863 = state_28830__$1;
(statearr_28836_28863[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28831 === (13))){
var state_28830__$1 = state_28830;
var statearr_28837_28864 = state_28830__$1;
(statearr_28837_28864[(2)] = null);

(statearr_28837_28864[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28831 === (6))){
var inst_28807 = (state_28830[(7)]);
var inst_28813 = p.call(null,inst_28807);
var state_28830__$1 = state_28830;
if(cljs.core.truth_(inst_28813)){
var statearr_28838_28865 = state_28830__$1;
(statearr_28838_28865[(1)] = (9));

} else {
var statearr_28839_28866 = state_28830__$1;
(statearr_28839_28866[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28831 === (3))){
var inst_28828 = (state_28830[(2)]);
var state_28830__$1 = state_28830;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28830__$1,inst_28828);
} else {
if((state_val_28831 === (12))){
var state_28830__$1 = state_28830;
var statearr_28840_28867 = state_28830__$1;
(statearr_28840_28867[(2)] = null);

(statearr_28840_28867[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28831 === (2))){
var state_28830__$1 = state_28830;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28830__$1,(4),ch);
} else {
if((state_val_28831 === (11))){
var inst_28807 = (state_28830[(7)]);
var inst_28817 = (state_28830[(2)]);
var state_28830__$1 = state_28830;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28830__$1,(8),inst_28817,inst_28807);
} else {
if((state_val_28831 === (9))){
var state_28830__$1 = state_28830;
var statearr_28841_28868 = state_28830__$1;
(statearr_28841_28868[(2)] = tc);

(statearr_28841_28868[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28831 === (5))){
var inst_28810 = cljs.core.async.close_BANG_.call(null,tc);
var inst_28811 = cljs.core.async.close_BANG_.call(null,fc);
var state_28830__$1 = (function (){var statearr_28842 = state_28830;
(statearr_28842[(8)] = inst_28810);

return statearr_28842;
})();
var statearr_28843_28869 = state_28830__$1;
(statearr_28843_28869[(2)] = inst_28811);

(statearr_28843_28869[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28831 === (14))){
var inst_28824 = (state_28830[(2)]);
var state_28830__$1 = state_28830;
var statearr_28844_28870 = state_28830__$1;
(statearr_28844_28870[(2)] = inst_28824);

(statearr_28844_28870[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28831 === (10))){
var state_28830__$1 = state_28830;
var statearr_28845_28871 = state_28830__$1;
(statearr_28845_28871[(2)] = fc);

(statearr_28845_28871[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28831 === (8))){
var inst_28819 = (state_28830[(2)]);
var state_28830__$1 = state_28830;
if(cljs.core.truth_(inst_28819)){
var statearr_28846_28872 = state_28830__$1;
(statearr_28846_28872[(1)] = (12));

} else {
var statearr_28847_28873 = state_28830__$1;
(statearr_28847_28873[(1)] = (13));

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
});})(c__20810__auto___28859,tc,fc))
;
return ((function (switch__20745__auto__,c__20810__auto___28859,tc,fc){
return (function() {
var cljs$core$async$state_machine__20746__auto__ = null;
var cljs$core$async$state_machine__20746__auto____0 = (function (){
var statearr_28851 = [null,null,null,null,null,null,null,null,null];
(statearr_28851[(0)] = cljs$core$async$state_machine__20746__auto__);

(statearr_28851[(1)] = (1));

return statearr_28851;
});
var cljs$core$async$state_machine__20746__auto____1 = (function (state_28830){
while(true){
var ret_value__20747__auto__ = (function (){try{while(true){
var result__20748__auto__ = switch__20745__auto__.call(null,state_28830);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20748__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20748__auto__;
}
break;
}
}catch (e28852){if((e28852 instanceof Object)){
var ex__20749__auto__ = e28852;
var statearr_28853_28874 = state_28830;
(statearr_28853_28874[(5)] = ex__20749__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28830);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28852;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20747__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28875 = state_28830;
state_28830 = G__28875;
continue;
} else {
return ret_value__20747__auto__;
}
break;
}
});
cljs$core$async$state_machine__20746__auto__ = function(state_28830){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20746__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20746__auto____1.call(this,state_28830);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20746__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20746__auto____0;
cljs$core$async$state_machine__20746__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20746__auto____1;
return cljs$core$async$state_machine__20746__auto__;
})()
;})(switch__20745__auto__,c__20810__auto___28859,tc,fc))
})();
var state__20812__auto__ = (function (){var statearr_28854 = f__20811__auto__.call(null);
(statearr_28854[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20810__auto___28859);

return statearr_28854;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20812__auto__);
});})(c__20810__auto___28859,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;
/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__20810__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20810__auto__){
return (function (){
var f__20811__auto__ = (function (){var switch__20745__auto__ = ((function (c__20810__auto__){
return (function (state_28922){
var state_val_28923 = (state_28922[(1)]);
if((state_val_28923 === (1))){
var inst_28908 = init;
var state_28922__$1 = (function (){var statearr_28924 = state_28922;
(statearr_28924[(7)] = inst_28908);

return statearr_28924;
})();
var statearr_28925_28940 = state_28922__$1;
(statearr_28925_28940[(2)] = null);

(statearr_28925_28940[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28923 === (2))){
var state_28922__$1 = state_28922;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28922__$1,(4),ch);
} else {
if((state_val_28923 === (3))){
var inst_28920 = (state_28922[(2)]);
var state_28922__$1 = state_28922;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28922__$1,inst_28920);
} else {
if((state_val_28923 === (4))){
var inst_28911 = (state_28922[(8)]);
var inst_28911__$1 = (state_28922[(2)]);
var inst_28912 = (inst_28911__$1 == null);
var state_28922__$1 = (function (){var statearr_28926 = state_28922;
(statearr_28926[(8)] = inst_28911__$1);

return statearr_28926;
})();
if(cljs.core.truth_(inst_28912)){
var statearr_28927_28941 = state_28922__$1;
(statearr_28927_28941[(1)] = (5));

} else {
var statearr_28928_28942 = state_28922__$1;
(statearr_28928_28942[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28923 === (5))){
var inst_28908 = (state_28922[(7)]);
var state_28922__$1 = state_28922;
var statearr_28929_28943 = state_28922__$1;
(statearr_28929_28943[(2)] = inst_28908);

(statearr_28929_28943[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28923 === (6))){
var inst_28908 = (state_28922[(7)]);
var inst_28911 = (state_28922[(8)]);
var inst_28915 = f.call(null,inst_28908,inst_28911);
var inst_28908__$1 = inst_28915;
var state_28922__$1 = (function (){var statearr_28930 = state_28922;
(statearr_28930[(7)] = inst_28908__$1);

return statearr_28930;
})();
var statearr_28931_28944 = state_28922__$1;
(statearr_28931_28944[(2)] = null);

(statearr_28931_28944[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28923 === (7))){
var inst_28918 = (state_28922[(2)]);
var state_28922__$1 = state_28922;
var statearr_28932_28945 = state_28922__$1;
(statearr_28932_28945[(2)] = inst_28918);

(statearr_28932_28945[(1)] = (3));


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
});})(c__20810__auto__))
;
return ((function (switch__20745__auto__,c__20810__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__20746__auto__ = null;
var cljs$core$async$reduce_$_state_machine__20746__auto____0 = (function (){
var statearr_28936 = [null,null,null,null,null,null,null,null,null];
(statearr_28936[(0)] = cljs$core$async$reduce_$_state_machine__20746__auto__);

(statearr_28936[(1)] = (1));

return statearr_28936;
});
var cljs$core$async$reduce_$_state_machine__20746__auto____1 = (function (state_28922){
while(true){
var ret_value__20747__auto__ = (function (){try{while(true){
var result__20748__auto__ = switch__20745__auto__.call(null,state_28922);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20748__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20748__auto__;
}
break;
}
}catch (e28937){if((e28937 instanceof Object)){
var ex__20749__auto__ = e28937;
var statearr_28938_28946 = state_28922;
(statearr_28938_28946[(5)] = ex__20749__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28922);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28937;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20747__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28947 = state_28922;
state_28922 = G__28947;
continue;
} else {
return ret_value__20747__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__20746__auto__ = function(state_28922){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__20746__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__20746__auto____1.call(this,state_28922);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__20746__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__20746__auto____0;
cljs$core$async$reduce_$_state_machine__20746__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__20746__auto____1;
return cljs$core$async$reduce_$_state_machine__20746__auto__;
})()
;})(switch__20745__auto__,c__20810__auto__))
})();
var state__20812__auto__ = (function (){var statearr_28939 = f__20811__auto__.call(null);
(statearr_28939[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20810__auto__);

return statearr_28939;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20812__auto__);
});})(c__20810__auto__))
);

return c__20810__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args28948 = [];
var len__17548__auto___29000 = arguments.length;
var i__17549__auto___29001 = (0);
while(true){
if((i__17549__auto___29001 < len__17548__auto___29000)){
args28948.push((arguments[i__17549__auto___29001]));

var G__29002 = (i__17549__auto___29001 + (1));
i__17549__auto___29001 = G__29002;
continue;
} else {
}
break;
}

var G__28950 = args28948.length;
switch (G__28950) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28948.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__20810__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20810__auto__){
return (function (){
var f__20811__auto__ = (function (){var switch__20745__auto__ = ((function (c__20810__auto__){
return (function (state_28975){
var state_val_28976 = (state_28975[(1)]);
if((state_val_28976 === (7))){
var inst_28957 = (state_28975[(2)]);
var state_28975__$1 = state_28975;
var statearr_28977_29004 = state_28975__$1;
(statearr_28977_29004[(2)] = inst_28957);

(statearr_28977_29004[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28976 === (1))){
var inst_28951 = cljs.core.seq.call(null,coll);
var inst_28952 = inst_28951;
var state_28975__$1 = (function (){var statearr_28978 = state_28975;
(statearr_28978[(7)] = inst_28952);

return statearr_28978;
})();
var statearr_28979_29005 = state_28975__$1;
(statearr_28979_29005[(2)] = null);

(statearr_28979_29005[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28976 === (4))){
var inst_28952 = (state_28975[(7)]);
var inst_28955 = cljs.core.first.call(null,inst_28952);
var state_28975__$1 = state_28975;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28975__$1,(7),ch,inst_28955);
} else {
if((state_val_28976 === (13))){
var inst_28969 = (state_28975[(2)]);
var state_28975__$1 = state_28975;
var statearr_28980_29006 = state_28975__$1;
(statearr_28980_29006[(2)] = inst_28969);

(statearr_28980_29006[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28976 === (6))){
var inst_28960 = (state_28975[(2)]);
var state_28975__$1 = state_28975;
if(cljs.core.truth_(inst_28960)){
var statearr_28981_29007 = state_28975__$1;
(statearr_28981_29007[(1)] = (8));

} else {
var statearr_28982_29008 = state_28975__$1;
(statearr_28982_29008[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28976 === (3))){
var inst_28973 = (state_28975[(2)]);
var state_28975__$1 = state_28975;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28975__$1,inst_28973);
} else {
if((state_val_28976 === (12))){
var state_28975__$1 = state_28975;
var statearr_28983_29009 = state_28975__$1;
(statearr_28983_29009[(2)] = null);

(statearr_28983_29009[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28976 === (2))){
var inst_28952 = (state_28975[(7)]);
var state_28975__$1 = state_28975;
if(cljs.core.truth_(inst_28952)){
var statearr_28984_29010 = state_28975__$1;
(statearr_28984_29010[(1)] = (4));

} else {
var statearr_28985_29011 = state_28975__$1;
(statearr_28985_29011[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28976 === (11))){
var inst_28966 = cljs.core.async.close_BANG_.call(null,ch);
var state_28975__$1 = state_28975;
var statearr_28986_29012 = state_28975__$1;
(statearr_28986_29012[(2)] = inst_28966);

(statearr_28986_29012[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28976 === (9))){
var state_28975__$1 = state_28975;
if(cljs.core.truth_(close_QMARK_)){
var statearr_28987_29013 = state_28975__$1;
(statearr_28987_29013[(1)] = (11));

} else {
var statearr_28988_29014 = state_28975__$1;
(statearr_28988_29014[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28976 === (5))){
var inst_28952 = (state_28975[(7)]);
var state_28975__$1 = state_28975;
var statearr_28989_29015 = state_28975__$1;
(statearr_28989_29015[(2)] = inst_28952);

(statearr_28989_29015[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28976 === (10))){
var inst_28971 = (state_28975[(2)]);
var state_28975__$1 = state_28975;
var statearr_28990_29016 = state_28975__$1;
(statearr_28990_29016[(2)] = inst_28971);

(statearr_28990_29016[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28976 === (8))){
var inst_28952 = (state_28975[(7)]);
var inst_28962 = cljs.core.next.call(null,inst_28952);
var inst_28952__$1 = inst_28962;
var state_28975__$1 = (function (){var statearr_28991 = state_28975;
(statearr_28991[(7)] = inst_28952__$1);

return statearr_28991;
})();
var statearr_28992_29017 = state_28975__$1;
(statearr_28992_29017[(2)] = null);

(statearr_28992_29017[(1)] = (2));


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
});})(c__20810__auto__))
;
return ((function (switch__20745__auto__,c__20810__auto__){
return (function() {
var cljs$core$async$state_machine__20746__auto__ = null;
var cljs$core$async$state_machine__20746__auto____0 = (function (){
var statearr_28996 = [null,null,null,null,null,null,null,null];
(statearr_28996[(0)] = cljs$core$async$state_machine__20746__auto__);

(statearr_28996[(1)] = (1));

return statearr_28996;
});
var cljs$core$async$state_machine__20746__auto____1 = (function (state_28975){
while(true){
var ret_value__20747__auto__ = (function (){try{while(true){
var result__20748__auto__ = switch__20745__auto__.call(null,state_28975);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20748__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20748__auto__;
}
break;
}
}catch (e28997){if((e28997 instanceof Object)){
var ex__20749__auto__ = e28997;
var statearr_28998_29018 = state_28975;
(statearr_28998_29018[(5)] = ex__20749__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28975);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28997;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20747__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29019 = state_28975;
state_28975 = G__29019;
continue;
} else {
return ret_value__20747__auto__;
}
break;
}
});
cljs$core$async$state_machine__20746__auto__ = function(state_28975){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20746__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20746__auto____1.call(this,state_28975);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20746__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20746__auto____0;
cljs$core$async$state_machine__20746__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20746__auto____1;
return cljs$core$async$state_machine__20746__auto__;
})()
;})(switch__20745__auto__,c__20810__auto__))
})();
var state__20812__auto__ = (function (){var statearr_28999 = f__20811__auto__.call(null);
(statearr_28999[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20810__auto__);

return statearr_28999;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20812__auto__);
});})(c__20810__auto__))
);

return c__20810__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__17145__auto__ = (((_ == null))?null:_);
var m__17146__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__17145__auto__)]);
if(!((m__17146__auto__ == null))){
return m__17146__auto__.call(null,_);
} else {
var m__17146__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__17146__auto____$1 == null))){
return m__17146__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__17145__auto__ = (((m == null))?null:m);
var m__17146__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__17145__auto__)]);
if(!((m__17146__auto__ == null))){
return m__17146__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__17146__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__17146__auto____$1 == null))){
return m__17146__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__17145__auto__ = (((m == null))?null:m);
var m__17146__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__17145__auto__)]);
if(!((m__17146__auto__ == null))){
return m__17146__auto__.call(null,m,ch);
} else {
var m__17146__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__17146__auto____$1 == null))){
return m__17146__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__17145__auto__ = (((m == null))?null:m);
var m__17146__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__17145__auto__)]);
if(!((m__17146__auto__ == null))){
return m__17146__auto__.call(null,m);
} else {
var m__17146__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__17146__auto____$1 == null))){
return m__17146__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async29241 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29241 = (function (mult,ch,cs,meta29242){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta29242 = meta29242;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29241.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_29243,meta29242__$1){
var self__ = this;
var _29243__$1 = this;
return (new cljs.core.async.t_cljs$core$async29241(self__.mult,self__.ch,self__.cs,meta29242__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async29241.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_29243){
var self__ = this;
var _29243__$1 = this;
return self__.meta29242;
});})(cs))
;

cljs.core.async.t_cljs$core$async29241.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async29241.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async29241.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async29241.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async29241.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async29241.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async29241.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta29242","meta29242",1554491281,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async29241.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29241.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29241";

cljs.core.async.t_cljs$core$async29241.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__17088__auto__,writer__17089__auto__,opt__17090__auto__){
return cljs.core._write.call(null,writer__17089__auto__,"cljs.core.async/t_cljs$core$async29241");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async29241 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async29241(mult__$1,ch__$1,cs__$1,meta29242){
return (new cljs.core.async.t_cljs$core$async29241(mult__$1,ch__$1,cs__$1,meta29242));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async29241(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__20810__auto___29462 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20810__auto___29462,cs,m,dchan,dctr,done){
return (function (){
var f__20811__auto__ = (function (){var switch__20745__auto__ = ((function (c__20810__auto___29462,cs,m,dchan,dctr,done){
return (function (state_29374){
var state_val_29375 = (state_29374[(1)]);
if((state_val_29375 === (7))){
var inst_29370 = (state_29374[(2)]);
var state_29374__$1 = state_29374;
var statearr_29376_29463 = state_29374__$1;
(statearr_29376_29463[(2)] = inst_29370);

(statearr_29376_29463[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29375 === (20))){
var inst_29275 = (state_29374[(7)]);
var inst_29285 = cljs.core.first.call(null,inst_29275);
var inst_29286 = cljs.core.nth.call(null,inst_29285,(0),null);
var inst_29287 = cljs.core.nth.call(null,inst_29285,(1),null);
var state_29374__$1 = (function (){var statearr_29377 = state_29374;
(statearr_29377[(8)] = inst_29286);

return statearr_29377;
})();
if(cljs.core.truth_(inst_29287)){
var statearr_29378_29464 = state_29374__$1;
(statearr_29378_29464[(1)] = (22));

} else {
var statearr_29379_29465 = state_29374__$1;
(statearr_29379_29465[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29375 === (27))){
var inst_29246 = (state_29374[(9)]);
var inst_29315 = (state_29374[(10)]);
var inst_29317 = (state_29374[(11)]);
var inst_29322 = (state_29374[(12)]);
var inst_29322__$1 = cljs.core._nth.call(null,inst_29315,inst_29317);
var inst_29323 = cljs.core.async.put_BANG_.call(null,inst_29322__$1,inst_29246,done);
var state_29374__$1 = (function (){var statearr_29380 = state_29374;
(statearr_29380[(12)] = inst_29322__$1);

return statearr_29380;
})();
if(cljs.core.truth_(inst_29323)){
var statearr_29381_29466 = state_29374__$1;
(statearr_29381_29466[(1)] = (30));

} else {
var statearr_29382_29467 = state_29374__$1;
(statearr_29382_29467[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29375 === (1))){
var state_29374__$1 = state_29374;
var statearr_29383_29468 = state_29374__$1;
(statearr_29383_29468[(2)] = null);

(statearr_29383_29468[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29375 === (24))){
var inst_29275 = (state_29374[(7)]);
var inst_29292 = (state_29374[(2)]);
var inst_29293 = cljs.core.next.call(null,inst_29275);
var inst_29255 = inst_29293;
var inst_29256 = null;
var inst_29257 = (0);
var inst_29258 = (0);
var state_29374__$1 = (function (){var statearr_29384 = state_29374;
(statearr_29384[(13)] = inst_29258);

(statearr_29384[(14)] = inst_29257);

(statearr_29384[(15)] = inst_29256);

(statearr_29384[(16)] = inst_29255);

(statearr_29384[(17)] = inst_29292);

return statearr_29384;
})();
var statearr_29385_29469 = state_29374__$1;
(statearr_29385_29469[(2)] = null);

(statearr_29385_29469[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29375 === (39))){
var state_29374__$1 = state_29374;
var statearr_29389_29470 = state_29374__$1;
(statearr_29389_29470[(2)] = null);

(statearr_29389_29470[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29375 === (4))){
var inst_29246 = (state_29374[(9)]);
var inst_29246__$1 = (state_29374[(2)]);
var inst_29247 = (inst_29246__$1 == null);
var state_29374__$1 = (function (){var statearr_29390 = state_29374;
(statearr_29390[(9)] = inst_29246__$1);

return statearr_29390;
})();
if(cljs.core.truth_(inst_29247)){
var statearr_29391_29471 = state_29374__$1;
(statearr_29391_29471[(1)] = (5));

} else {
var statearr_29392_29472 = state_29374__$1;
(statearr_29392_29472[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29375 === (15))){
var inst_29258 = (state_29374[(13)]);
var inst_29257 = (state_29374[(14)]);
var inst_29256 = (state_29374[(15)]);
var inst_29255 = (state_29374[(16)]);
var inst_29271 = (state_29374[(2)]);
var inst_29272 = (inst_29258 + (1));
var tmp29386 = inst_29257;
var tmp29387 = inst_29256;
var tmp29388 = inst_29255;
var inst_29255__$1 = tmp29388;
var inst_29256__$1 = tmp29387;
var inst_29257__$1 = tmp29386;
var inst_29258__$1 = inst_29272;
var state_29374__$1 = (function (){var statearr_29393 = state_29374;
(statearr_29393[(13)] = inst_29258__$1);

(statearr_29393[(14)] = inst_29257__$1);

(statearr_29393[(15)] = inst_29256__$1);

(statearr_29393[(16)] = inst_29255__$1);

(statearr_29393[(18)] = inst_29271);

return statearr_29393;
})();
var statearr_29394_29473 = state_29374__$1;
(statearr_29394_29473[(2)] = null);

(statearr_29394_29473[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29375 === (21))){
var inst_29296 = (state_29374[(2)]);
var state_29374__$1 = state_29374;
var statearr_29398_29474 = state_29374__$1;
(statearr_29398_29474[(2)] = inst_29296);

(statearr_29398_29474[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29375 === (31))){
var inst_29322 = (state_29374[(12)]);
var inst_29326 = done.call(null,null);
var inst_29327 = cljs.core.async.untap_STAR_.call(null,m,inst_29322);
var state_29374__$1 = (function (){var statearr_29399 = state_29374;
(statearr_29399[(19)] = inst_29326);

return statearr_29399;
})();
var statearr_29400_29475 = state_29374__$1;
(statearr_29400_29475[(2)] = inst_29327);

(statearr_29400_29475[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29375 === (32))){
var inst_29314 = (state_29374[(20)]);
var inst_29315 = (state_29374[(10)]);
var inst_29316 = (state_29374[(21)]);
var inst_29317 = (state_29374[(11)]);
var inst_29329 = (state_29374[(2)]);
var inst_29330 = (inst_29317 + (1));
var tmp29395 = inst_29314;
var tmp29396 = inst_29315;
var tmp29397 = inst_29316;
var inst_29314__$1 = tmp29395;
var inst_29315__$1 = tmp29396;
var inst_29316__$1 = tmp29397;
var inst_29317__$1 = inst_29330;
var state_29374__$1 = (function (){var statearr_29401 = state_29374;
(statearr_29401[(20)] = inst_29314__$1);

(statearr_29401[(10)] = inst_29315__$1);

(statearr_29401[(22)] = inst_29329);

(statearr_29401[(21)] = inst_29316__$1);

(statearr_29401[(11)] = inst_29317__$1);

return statearr_29401;
})();
var statearr_29402_29476 = state_29374__$1;
(statearr_29402_29476[(2)] = null);

(statearr_29402_29476[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29375 === (40))){
var inst_29342 = (state_29374[(23)]);
var inst_29346 = done.call(null,null);
var inst_29347 = cljs.core.async.untap_STAR_.call(null,m,inst_29342);
var state_29374__$1 = (function (){var statearr_29403 = state_29374;
(statearr_29403[(24)] = inst_29346);

return statearr_29403;
})();
var statearr_29404_29477 = state_29374__$1;
(statearr_29404_29477[(2)] = inst_29347);

(statearr_29404_29477[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29375 === (33))){
var inst_29333 = (state_29374[(25)]);
var inst_29335 = cljs.core.chunked_seq_QMARK_.call(null,inst_29333);
var state_29374__$1 = state_29374;
if(inst_29335){
var statearr_29405_29478 = state_29374__$1;
(statearr_29405_29478[(1)] = (36));

} else {
var statearr_29406_29479 = state_29374__$1;
(statearr_29406_29479[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29375 === (13))){
var inst_29265 = (state_29374[(26)]);
var inst_29268 = cljs.core.async.close_BANG_.call(null,inst_29265);
var state_29374__$1 = state_29374;
var statearr_29407_29480 = state_29374__$1;
(statearr_29407_29480[(2)] = inst_29268);

(statearr_29407_29480[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29375 === (22))){
var inst_29286 = (state_29374[(8)]);
var inst_29289 = cljs.core.async.close_BANG_.call(null,inst_29286);
var state_29374__$1 = state_29374;
var statearr_29408_29481 = state_29374__$1;
(statearr_29408_29481[(2)] = inst_29289);

(statearr_29408_29481[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29375 === (36))){
var inst_29333 = (state_29374[(25)]);
var inst_29337 = cljs.core.chunk_first.call(null,inst_29333);
var inst_29338 = cljs.core.chunk_rest.call(null,inst_29333);
var inst_29339 = cljs.core.count.call(null,inst_29337);
var inst_29314 = inst_29338;
var inst_29315 = inst_29337;
var inst_29316 = inst_29339;
var inst_29317 = (0);
var state_29374__$1 = (function (){var statearr_29409 = state_29374;
(statearr_29409[(20)] = inst_29314);

(statearr_29409[(10)] = inst_29315);

(statearr_29409[(21)] = inst_29316);

(statearr_29409[(11)] = inst_29317);

return statearr_29409;
})();
var statearr_29410_29482 = state_29374__$1;
(statearr_29410_29482[(2)] = null);

(statearr_29410_29482[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29375 === (41))){
var inst_29333 = (state_29374[(25)]);
var inst_29349 = (state_29374[(2)]);
var inst_29350 = cljs.core.next.call(null,inst_29333);
var inst_29314 = inst_29350;
var inst_29315 = null;
var inst_29316 = (0);
var inst_29317 = (0);
var state_29374__$1 = (function (){var statearr_29411 = state_29374;
(statearr_29411[(20)] = inst_29314);

(statearr_29411[(10)] = inst_29315);

(statearr_29411[(21)] = inst_29316);

(statearr_29411[(27)] = inst_29349);

(statearr_29411[(11)] = inst_29317);

return statearr_29411;
})();
var statearr_29412_29483 = state_29374__$1;
(statearr_29412_29483[(2)] = null);

(statearr_29412_29483[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29375 === (43))){
var state_29374__$1 = state_29374;
var statearr_29413_29484 = state_29374__$1;
(statearr_29413_29484[(2)] = null);

(statearr_29413_29484[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29375 === (29))){
var inst_29358 = (state_29374[(2)]);
var state_29374__$1 = state_29374;
var statearr_29414_29485 = state_29374__$1;
(statearr_29414_29485[(2)] = inst_29358);

(statearr_29414_29485[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29375 === (44))){
var inst_29367 = (state_29374[(2)]);
var state_29374__$1 = (function (){var statearr_29415 = state_29374;
(statearr_29415[(28)] = inst_29367);

return statearr_29415;
})();
var statearr_29416_29486 = state_29374__$1;
(statearr_29416_29486[(2)] = null);

(statearr_29416_29486[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29375 === (6))){
var inst_29306 = (state_29374[(29)]);
var inst_29305 = cljs.core.deref.call(null,cs);
var inst_29306__$1 = cljs.core.keys.call(null,inst_29305);
var inst_29307 = cljs.core.count.call(null,inst_29306__$1);
var inst_29308 = cljs.core.reset_BANG_.call(null,dctr,inst_29307);
var inst_29313 = cljs.core.seq.call(null,inst_29306__$1);
var inst_29314 = inst_29313;
var inst_29315 = null;
var inst_29316 = (0);
var inst_29317 = (0);
var state_29374__$1 = (function (){var statearr_29417 = state_29374;
(statearr_29417[(20)] = inst_29314);

(statearr_29417[(29)] = inst_29306__$1);

(statearr_29417[(30)] = inst_29308);

(statearr_29417[(10)] = inst_29315);

(statearr_29417[(21)] = inst_29316);

(statearr_29417[(11)] = inst_29317);

return statearr_29417;
})();
var statearr_29418_29487 = state_29374__$1;
(statearr_29418_29487[(2)] = null);

(statearr_29418_29487[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29375 === (28))){
var inst_29333 = (state_29374[(25)]);
var inst_29314 = (state_29374[(20)]);
var inst_29333__$1 = cljs.core.seq.call(null,inst_29314);
var state_29374__$1 = (function (){var statearr_29419 = state_29374;
(statearr_29419[(25)] = inst_29333__$1);

return statearr_29419;
})();
if(inst_29333__$1){
var statearr_29420_29488 = state_29374__$1;
(statearr_29420_29488[(1)] = (33));

} else {
var statearr_29421_29489 = state_29374__$1;
(statearr_29421_29489[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29375 === (25))){
var inst_29316 = (state_29374[(21)]);
var inst_29317 = (state_29374[(11)]);
var inst_29319 = (inst_29317 < inst_29316);
var inst_29320 = inst_29319;
var state_29374__$1 = state_29374;
if(cljs.core.truth_(inst_29320)){
var statearr_29422_29490 = state_29374__$1;
(statearr_29422_29490[(1)] = (27));

} else {
var statearr_29423_29491 = state_29374__$1;
(statearr_29423_29491[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29375 === (34))){
var state_29374__$1 = state_29374;
var statearr_29424_29492 = state_29374__$1;
(statearr_29424_29492[(2)] = null);

(statearr_29424_29492[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29375 === (17))){
var state_29374__$1 = state_29374;
var statearr_29425_29493 = state_29374__$1;
(statearr_29425_29493[(2)] = null);

(statearr_29425_29493[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29375 === (3))){
var inst_29372 = (state_29374[(2)]);
var state_29374__$1 = state_29374;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29374__$1,inst_29372);
} else {
if((state_val_29375 === (12))){
var inst_29301 = (state_29374[(2)]);
var state_29374__$1 = state_29374;
var statearr_29426_29494 = state_29374__$1;
(statearr_29426_29494[(2)] = inst_29301);

(statearr_29426_29494[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29375 === (2))){
var state_29374__$1 = state_29374;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29374__$1,(4),ch);
} else {
if((state_val_29375 === (23))){
var state_29374__$1 = state_29374;
var statearr_29427_29495 = state_29374__$1;
(statearr_29427_29495[(2)] = null);

(statearr_29427_29495[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29375 === (35))){
var inst_29356 = (state_29374[(2)]);
var state_29374__$1 = state_29374;
var statearr_29428_29496 = state_29374__$1;
(statearr_29428_29496[(2)] = inst_29356);

(statearr_29428_29496[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29375 === (19))){
var inst_29275 = (state_29374[(7)]);
var inst_29279 = cljs.core.chunk_first.call(null,inst_29275);
var inst_29280 = cljs.core.chunk_rest.call(null,inst_29275);
var inst_29281 = cljs.core.count.call(null,inst_29279);
var inst_29255 = inst_29280;
var inst_29256 = inst_29279;
var inst_29257 = inst_29281;
var inst_29258 = (0);
var state_29374__$1 = (function (){var statearr_29429 = state_29374;
(statearr_29429[(13)] = inst_29258);

(statearr_29429[(14)] = inst_29257);

(statearr_29429[(15)] = inst_29256);

(statearr_29429[(16)] = inst_29255);

return statearr_29429;
})();
var statearr_29430_29497 = state_29374__$1;
(statearr_29430_29497[(2)] = null);

(statearr_29430_29497[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29375 === (11))){
var inst_29275 = (state_29374[(7)]);
var inst_29255 = (state_29374[(16)]);
var inst_29275__$1 = cljs.core.seq.call(null,inst_29255);
var state_29374__$1 = (function (){var statearr_29431 = state_29374;
(statearr_29431[(7)] = inst_29275__$1);

return statearr_29431;
})();
if(inst_29275__$1){
var statearr_29432_29498 = state_29374__$1;
(statearr_29432_29498[(1)] = (16));

} else {
var statearr_29433_29499 = state_29374__$1;
(statearr_29433_29499[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29375 === (9))){
var inst_29303 = (state_29374[(2)]);
var state_29374__$1 = state_29374;
var statearr_29434_29500 = state_29374__$1;
(statearr_29434_29500[(2)] = inst_29303);

(statearr_29434_29500[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29375 === (5))){
var inst_29253 = cljs.core.deref.call(null,cs);
var inst_29254 = cljs.core.seq.call(null,inst_29253);
var inst_29255 = inst_29254;
var inst_29256 = null;
var inst_29257 = (0);
var inst_29258 = (0);
var state_29374__$1 = (function (){var statearr_29435 = state_29374;
(statearr_29435[(13)] = inst_29258);

(statearr_29435[(14)] = inst_29257);

(statearr_29435[(15)] = inst_29256);

(statearr_29435[(16)] = inst_29255);

return statearr_29435;
})();
var statearr_29436_29501 = state_29374__$1;
(statearr_29436_29501[(2)] = null);

(statearr_29436_29501[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29375 === (14))){
var state_29374__$1 = state_29374;
var statearr_29437_29502 = state_29374__$1;
(statearr_29437_29502[(2)] = null);

(statearr_29437_29502[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29375 === (45))){
var inst_29364 = (state_29374[(2)]);
var state_29374__$1 = state_29374;
var statearr_29438_29503 = state_29374__$1;
(statearr_29438_29503[(2)] = inst_29364);

(statearr_29438_29503[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29375 === (26))){
var inst_29306 = (state_29374[(29)]);
var inst_29360 = (state_29374[(2)]);
var inst_29361 = cljs.core.seq.call(null,inst_29306);
var state_29374__$1 = (function (){var statearr_29439 = state_29374;
(statearr_29439[(31)] = inst_29360);

return statearr_29439;
})();
if(inst_29361){
var statearr_29440_29504 = state_29374__$1;
(statearr_29440_29504[(1)] = (42));

} else {
var statearr_29441_29505 = state_29374__$1;
(statearr_29441_29505[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29375 === (16))){
var inst_29275 = (state_29374[(7)]);
var inst_29277 = cljs.core.chunked_seq_QMARK_.call(null,inst_29275);
var state_29374__$1 = state_29374;
if(inst_29277){
var statearr_29442_29506 = state_29374__$1;
(statearr_29442_29506[(1)] = (19));

} else {
var statearr_29443_29507 = state_29374__$1;
(statearr_29443_29507[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29375 === (38))){
var inst_29353 = (state_29374[(2)]);
var state_29374__$1 = state_29374;
var statearr_29444_29508 = state_29374__$1;
(statearr_29444_29508[(2)] = inst_29353);

(statearr_29444_29508[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29375 === (30))){
var state_29374__$1 = state_29374;
var statearr_29445_29509 = state_29374__$1;
(statearr_29445_29509[(2)] = null);

(statearr_29445_29509[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29375 === (10))){
var inst_29258 = (state_29374[(13)]);
var inst_29256 = (state_29374[(15)]);
var inst_29264 = cljs.core._nth.call(null,inst_29256,inst_29258);
var inst_29265 = cljs.core.nth.call(null,inst_29264,(0),null);
var inst_29266 = cljs.core.nth.call(null,inst_29264,(1),null);
var state_29374__$1 = (function (){var statearr_29446 = state_29374;
(statearr_29446[(26)] = inst_29265);

return statearr_29446;
})();
if(cljs.core.truth_(inst_29266)){
var statearr_29447_29510 = state_29374__$1;
(statearr_29447_29510[(1)] = (13));

} else {
var statearr_29448_29511 = state_29374__$1;
(statearr_29448_29511[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29375 === (18))){
var inst_29299 = (state_29374[(2)]);
var state_29374__$1 = state_29374;
var statearr_29449_29512 = state_29374__$1;
(statearr_29449_29512[(2)] = inst_29299);

(statearr_29449_29512[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29375 === (42))){
var state_29374__$1 = state_29374;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29374__$1,(45),dchan);
} else {
if((state_val_29375 === (37))){
var inst_29333 = (state_29374[(25)]);
var inst_29246 = (state_29374[(9)]);
var inst_29342 = (state_29374[(23)]);
var inst_29342__$1 = cljs.core.first.call(null,inst_29333);
var inst_29343 = cljs.core.async.put_BANG_.call(null,inst_29342__$1,inst_29246,done);
var state_29374__$1 = (function (){var statearr_29450 = state_29374;
(statearr_29450[(23)] = inst_29342__$1);

return statearr_29450;
})();
if(cljs.core.truth_(inst_29343)){
var statearr_29451_29513 = state_29374__$1;
(statearr_29451_29513[(1)] = (39));

} else {
var statearr_29452_29514 = state_29374__$1;
(statearr_29452_29514[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29375 === (8))){
var inst_29258 = (state_29374[(13)]);
var inst_29257 = (state_29374[(14)]);
var inst_29260 = (inst_29258 < inst_29257);
var inst_29261 = inst_29260;
var state_29374__$1 = state_29374;
if(cljs.core.truth_(inst_29261)){
var statearr_29453_29515 = state_29374__$1;
(statearr_29453_29515[(1)] = (10));

} else {
var statearr_29454_29516 = state_29374__$1;
(statearr_29454_29516[(1)] = (11));

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
});})(c__20810__auto___29462,cs,m,dchan,dctr,done))
;
return ((function (switch__20745__auto__,c__20810__auto___29462,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__20746__auto__ = null;
var cljs$core$async$mult_$_state_machine__20746__auto____0 = (function (){
var statearr_29458 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29458[(0)] = cljs$core$async$mult_$_state_machine__20746__auto__);

(statearr_29458[(1)] = (1));

return statearr_29458;
});
var cljs$core$async$mult_$_state_machine__20746__auto____1 = (function (state_29374){
while(true){
var ret_value__20747__auto__ = (function (){try{while(true){
var result__20748__auto__ = switch__20745__auto__.call(null,state_29374);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20748__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20748__auto__;
}
break;
}
}catch (e29459){if((e29459 instanceof Object)){
var ex__20749__auto__ = e29459;
var statearr_29460_29517 = state_29374;
(statearr_29460_29517[(5)] = ex__20749__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29374);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29459;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20747__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29518 = state_29374;
state_29374 = G__29518;
continue;
} else {
return ret_value__20747__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__20746__auto__ = function(state_29374){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__20746__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__20746__auto____1.call(this,state_29374);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__20746__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__20746__auto____0;
cljs$core$async$mult_$_state_machine__20746__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__20746__auto____1;
return cljs$core$async$mult_$_state_machine__20746__auto__;
})()
;})(switch__20745__auto__,c__20810__auto___29462,cs,m,dchan,dctr,done))
})();
var state__20812__auto__ = (function (){var statearr_29461 = f__20811__auto__.call(null);
(statearr_29461[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20810__auto___29462);

return statearr_29461;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20812__auto__);
});})(c__20810__auto___29462,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args29519 = [];
var len__17548__auto___29522 = arguments.length;
var i__17549__auto___29523 = (0);
while(true){
if((i__17549__auto___29523 < len__17548__auto___29522)){
args29519.push((arguments[i__17549__auto___29523]));

var G__29524 = (i__17549__auto___29523 + (1));
i__17549__auto___29523 = G__29524;
continue;
} else {
}
break;
}

var G__29521 = args29519.length;
switch (G__29521) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29519.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;
/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__17145__auto__ = (((m == null))?null:m);
var m__17146__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__17145__auto__)]);
if(!((m__17146__auto__ == null))){
return m__17146__auto__.call(null,m,ch);
} else {
var m__17146__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__17146__auto____$1 == null))){
return m__17146__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__17145__auto__ = (((m == null))?null:m);
var m__17146__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__17145__auto__)]);
if(!((m__17146__auto__ == null))){
return m__17146__auto__.call(null,m,ch);
} else {
var m__17146__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__17146__auto____$1 == null))){
return m__17146__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__17145__auto__ = (((m == null))?null:m);
var m__17146__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__17145__auto__)]);
if(!((m__17146__auto__ == null))){
return m__17146__auto__.call(null,m);
} else {
var m__17146__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__17146__auto____$1 == null))){
return m__17146__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__17145__auto__ = (((m == null))?null:m);
var m__17146__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__17145__auto__)]);
if(!((m__17146__auto__ == null))){
return m__17146__auto__.call(null,m,state_map);
} else {
var m__17146__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__17146__auto____$1 == null))){
return m__17146__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__17145__auto__ = (((m == null))?null:m);
var m__17146__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__17145__auto__)]);
if(!((m__17146__auto__ == null))){
return m__17146__auto__.call(null,m,mode);
} else {
var m__17146__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__17146__auto____$1 == null))){
return m__17146__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__17555__auto__ = [];
var len__17548__auto___29536 = arguments.length;
var i__17549__auto___29537 = (0);
while(true){
if((i__17549__auto___29537 < len__17548__auto___29536)){
args__17555__auto__.push((arguments[i__17549__auto___29537]));

var G__29538 = (i__17549__auto___29537 + (1));
i__17549__auto___29537 = G__29538;
continue;
} else {
}
break;
}

var argseq__17556__auto__ = ((((3) < args__17555__auto__.length))?(new cljs.core.IndexedSeq(args__17555__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__17556__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__29530){
var map__29531 = p__29530;
var map__29531__$1 = ((((!((map__29531 == null)))?((((map__29531.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29531.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29531):map__29531);
var opts = map__29531__$1;
var statearr_29533_29539 = state;
(statearr_29533_29539[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts.call(null,((function (map__29531,map__29531__$1,opts){
return (function (val){
var statearr_29534_29540 = state;
(statearr_29534_29540[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__29531,map__29531__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_29535_29541 = state;
(statearr_29535_29541[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq29526){
var G__29527 = cljs.core.first.call(null,seq29526);
var seq29526__$1 = cljs.core.next.call(null,seq29526);
var G__29528 = cljs.core.first.call(null,seq29526__$1);
var seq29526__$2 = cljs.core.next.call(null,seq29526__$1);
var G__29529 = cljs.core.first.call(null,seq29526__$2);
var seq29526__$3 = cljs.core.next.call(null,seq29526__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__29527,G__29528,G__29529,seq29526__$3);
});
/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async29705 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29705 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta29706){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta29706 = meta29706;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29705.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_29707,meta29706__$1){
var self__ = this;
var _29707__$1 = this;
return (new cljs.core.async.t_cljs$core$async29705(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta29706__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29705.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_29707){
var self__ = this;
var _29707__$1 = this;
return self__.meta29706;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29705.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async29705.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29705.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async29705.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29705.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29705.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29705.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29705.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))))].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29705.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta29706","meta29706",1433100600,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29705.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29705.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29705";

cljs.core.async.t_cljs$core$async29705.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__17088__auto__,writer__17089__auto__,opt__17090__auto__){
return cljs.core._write.call(null,writer__17089__auto__,"cljs.core.async/t_cljs$core$async29705");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async29705 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async29705(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta29706){
return (new cljs.core.async.t_cljs$core$async29705(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta29706));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async29705(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__20810__auto___29868 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20810__auto___29868,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__20811__auto__ = (function (){var switch__20745__auto__ = ((function (c__20810__auto___29868,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_29805){
var state_val_29806 = (state_29805[(1)]);
if((state_val_29806 === (7))){
var inst_29723 = (state_29805[(2)]);
var state_29805__$1 = state_29805;
var statearr_29807_29869 = state_29805__$1;
(statearr_29807_29869[(2)] = inst_29723);

(statearr_29807_29869[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29806 === (20))){
var inst_29735 = (state_29805[(7)]);
var state_29805__$1 = state_29805;
var statearr_29808_29870 = state_29805__$1;
(statearr_29808_29870[(2)] = inst_29735);

(statearr_29808_29870[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29806 === (27))){
var state_29805__$1 = state_29805;
var statearr_29809_29871 = state_29805__$1;
(statearr_29809_29871[(2)] = null);

(statearr_29809_29871[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29806 === (1))){
var inst_29711 = (state_29805[(8)]);
var inst_29711__$1 = calc_state.call(null);
var inst_29713 = (inst_29711__$1 == null);
var inst_29714 = cljs.core.not.call(null,inst_29713);
var state_29805__$1 = (function (){var statearr_29810 = state_29805;
(statearr_29810[(8)] = inst_29711__$1);

return statearr_29810;
})();
if(inst_29714){
var statearr_29811_29872 = state_29805__$1;
(statearr_29811_29872[(1)] = (2));

} else {
var statearr_29812_29873 = state_29805__$1;
(statearr_29812_29873[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29806 === (24))){
var inst_29779 = (state_29805[(9)]);
var inst_29758 = (state_29805[(10)]);
var inst_29765 = (state_29805[(11)]);
var inst_29779__$1 = inst_29758.call(null,inst_29765);
var state_29805__$1 = (function (){var statearr_29813 = state_29805;
(statearr_29813[(9)] = inst_29779__$1);

return statearr_29813;
})();
if(cljs.core.truth_(inst_29779__$1)){
var statearr_29814_29874 = state_29805__$1;
(statearr_29814_29874[(1)] = (29));

} else {
var statearr_29815_29875 = state_29805__$1;
(statearr_29815_29875[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29806 === (4))){
var inst_29726 = (state_29805[(2)]);
var state_29805__$1 = state_29805;
if(cljs.core.truth_(inst_29726)){
var statearr_29816_29876 = state_29805__$1;
(statearr_29816_29876[(1)] = (8));

} else {
var statearr_29817_29877 = state_29805__$1;
(statearr_29817_29877[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29806 === (15))){
var inst_29752 = (state_29805[(2)]);
var state_29805__$1 = state_29805;
if(cljs.core.truth_(inst_29752)){
var statearr_29818_29878 = state_29805__$1;
(statearr_29818_29878[(1)] = (19));

} else {
var statearr_29819_29879 = state_29805__$1;
(statearr_29819_29879[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29806 === (21))){
var inst_29757 = (state_29805[(12)]);
var inst_29757__$1 = (state_29805[(2)]);
var inst_29758 = cljs.core.get.call(null,inst_29757__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_29759 = cljs.core.get.call(null,inst_29757__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_29760 = cljs.core.get.call(null,inst_29757__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_29805__$1 = (function (){var statearr_29820 = state_29805;
(statearr_29820[(13)] = inst_29759);

(statearr_29820[(12)] = inst_29757__$1);

(statearr_29820[(10)] = inst_29758);

return statearr_29820;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_29805__$1,(22),inst_29760);
} else {
if((state_val_29806 === (31))){
var inst_29787 = (state_29805[(2)]);
var state_29805__$1 = state_29805;
if(cljs.core.truth_(inst_29787)){
var statearr_29821_29880 = state_29805__$1;
(statearr_29821_29880[(1)] = (32));

} else {
var statearr_29822_29881 = state_29805__$1;
(statearr_29822_29881[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29806 === (32))){
var inst_29764 = (state_29805[(14)]);
var state_29805__$1 = state_29805;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29805__$1,(35),out,inst_29764);
} else {
if((state_val_29806 === (33))){
var inst_29757 = (state_29805[(12)]);
var inst_29735 = inst_29757;
var state_29805__$1 = (function (){var statearr_29823 = state_29805;
(statearr_29823[(7)] = inst_29735);

return statearr_29823;
})();
var statearr_29824_29882 = state_29805__$1;
(statearr_29824_29882[(2)] = null);

(statearr_29824_29882[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29806 === (13))){
var inst_29735 = (state_29805[(7)]);
var inst_29742 = inst_29735.cljs$lang$protocol_mask$partition0$;
var inst_29743 = (inst_29742 & (64));
var inst_29744 = inst_29735.cljs$core$ISeq$;
var inst_29745 = (inst_29743) || (inst_29744);
var state_29805__$1 = state_29805;
if(cljs.core.truth_(inst_29745)){
var statearr_29825_29883 = state_29805__$1;
(statearr_29825_29883[(1)] = (16));

} else {
var statearr_29826_29884 = state_29805__$1;
(statearr_29826_29884[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29806 === (22))){
var inst_29764 = (state_29805[(14)]);
var inst_29765 = (state_29805[(11)]);
var inst_29763 = (state_29805[(2)]);
var inst_29764__$1 = cljs.core.nth.call(null,inst_29763,(0),null);
var inst_29765__$1 = cljs.core.nth.call(null,inst_29763,(1),null);
var inst_29766 = (inst_29764__$1 == null);
var inst_29767 = cljs.core._EQ_.call(null,inst_29765__$1,change);
var inst_29768 = (inst_29766) || (inst_29767);
var state_29805__$1 = (function (){var statearr_29827 = state_29805;
(statearr_29827[(14)] = inst_29764__$1);

(statearr_29827[(11)] = inst_29765__$1);

return statearr_29827;
})();
if(cljs.core.truth_(inst_29768)){
var statearr_29828_29885 = state_29805__$1;
(statearr_29828_29885[(1)] = (23));

} else {
var statearr_29829_29886 = state_29805__$1;
(statearr_29829_29886[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29806 === (36))){
var inst_29757 = (state_29805[(12)]);
var inst_29735 = inst_29757;
var state_29805__$1 = (function (){var statearr_29830 = state_29805;
(statearr_29830[(7)] = inst_29735);

return statearr_29830;
})();
var statearr_29831_29887 = state_29805__$1;
(statearr_29831_29887[(2)] = null);

(statearr_29831_29887[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29806 === (29))){
var inst_29779 = (state_29805[(9)]);
var state_29805__$1 = state_29805;
var statearr_29832_29888 = state_29805__$1;
(statearr_29832_29888[(2)] = inst_29779);

(statearr_29832_29888[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29806 === (6))){
var state_29805__$1 = state_29805;
var statearr_29833_29889 = state_29805__$1;
(statearr_29833_29889[(2)] = false);

(statearr_29833_29889[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29806 === (28))){
var inst_29775 = (state_29805[(2)]);
var inst_29776 = calc_state.call(null);
var inst_29735 = inst_29776;
var state_29805__$1 = (function (){var statearr_29834 = state_29805;
(statearr_29834[(15)] = inst_29775);

(statearr_29834[(7)] = inst_29735);

return statearr_29834;
})();
var statearr_29835_29890 = state_29805__$1;
(statearr_29835_29890[(2)] = null);

(statearr_29835_29890[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29806 === (25))){
var inst_29801 = (state_29805[(2)]);
var state_29805__$1 = state_29805;
var statearr_29836_29891 = state_29805__$1;
(statearr_29836_29891[(2)] = inst_29801);

(statearr_29836_29891[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29806 === (34))){
var inst_29799 = (state_29805[(2)]);
var state_29805__$1 = state_29805;
var statearr_29837_29892 = state_29805__$1;
(statearr_29837_29892[(2)] = inst_29799);

(statearr_29837_29892[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29806 === (17))){
var state_29805__$1 = state_29805;
var statearr_29838_29893 = state_29805__$1;
(statearr_29838_29893[(2)] = false);

(statearr_29838_29893[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29806 === (3))){
var state_29805__$1 = state_29805;
var statearr_29839_29894 = state_29805__$1;
(statearr_29839_29894[(2)] = false);

(statearr_29839_29894[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29806 === (12))){
var inst_29803 = (state_29805[(2)]);
var state_29805__$1 = state_29805;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29805__$1,inst_29803);
} else {
if((state_val_29806 === (2))){
var inst_29711 = (state_29805[(8)]);
var inst_29716 = inst_29711.cljs$lang$protocol_mask$partition0$;
var inst_29717 = (inst_29716 & (64));
var inst_29718 = inst_29711.cljs$core$ISeq$;
var inst_29719 = (inst_29717) || (inst_29718);
var state_29805__$1 = state_29805;
if(cljs.core.truth_(inst_29719)){
var statearr_29840_29895 = state_29805__$1;
(statearr_29840_29895[(1)] = (5));

} else {
var statearr_29841_29896 = state_29805__$1;
(statearr_29841_29896[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29806 === (23))){
var inst_29764 = (state_29805[(14)]);
var inst_29770 = (inst_29764 == null);
var state_29805__$1 = state_29805;
if(cljs.core.truth_(inst_29770)){
var statearr_29842_29897 = state_29805__$1;
(statearr_29842_29897[(1)] = (26));

} else {
var statearr_29843_29898 = state_29805__$1;
(statearr_29843_29898[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29806 === (35))){
var inst_29790 = (state_29805[(2)]);
var state_29805__$1 = state_29805;
if(cljs.core.truth_(inst_29790)){
var statearr_29844_29899 = state_29805__$1;
(statearr_29844_29899[(1)] = (36));

} else {
var statearr_29845_29900 = state_29805__$1;
(statearr_29845_29900[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29806 === (19))){
var inst_29735 = (state_29805[(7)]);
var inst_29754 = cljs.core.apply.call(null,cljs.core.hash_map,inst_29735);
var state_29805__$1 = state_29805;
var statearr_29846_29901 = state_29805__$1;
(statearr_29846_29901[(2)] = inst_29754);

(statearr_29846_29901[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29806 === (11))){
var inst_29735 = (state_29805[(7)]);
var inst_29739 = (inst_29735 == null);
var inst_29740 = cljs.core.not.call(null,inst_29739);
var state_29805__$1 = state_29805;
if(inst_29740){
var statearr_29847_29902 = state_29805__$1;
(statearr_29847_29902[(1)] = (13));

} else {
var statearr_29848_29903 = state_29805__$1;
(statearr_29848_29903[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29806 === (9))){
var inst_29711 = (state_29805[(8)]);
var state_29805__$1 = state_29805;
var statearr_29849_29904 = state_29805__$1;
(statearr_29849_29904[(2)] = inst_29711);

(statearr_29849_29904[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29806 === (5))){
var state_29805__$1 = state_29805;
var statearr_29850_29905 = state_29805__$1;
(statearr_29850_29905[(2)] = true);

(statearr_29850_29905[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29806 === (14))){
var state_29805__$1 = state_29805;
var statearr_29851_29906 = state_29805__$1;
(statearr_29851_29906[(2)] = false);

(statearr_29851_29906[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29806 === (26))){
var inst_29765 = (state_29805[(11)]);
var inst_29772 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_29765);
var state_29805__$1 = state_29805;
var statearr_29852_29907 = state_29805__$1;
(statearr_29852_29907[(2)] = inst_29772);

(statearr_29852_29907[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29806 === (16))){
var state_29805__$1 = state_29805;
var statearr_29853_29908 = state_29805__$1;
(statearr_29853_29908[(2)] = true);

(statearr_29853_29908[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29806 === (38))){
var inst_29795 = (state_29805[(2)]);
var state_29805__$1 = state_29805;
var statearr_29854_29909 = state_29805__$1;
(statearr_29854_29909[(2)] = inst_29795);

(statearr_29854_29909[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29806 === (30))){
var inst_29759 = (state_29805[(13)]);
var inst_29758 = (state_29805[(10)]);
var inst_29765 = (state_29805[(11)]);
var inst_29782 = cljs.core.empty_QMARK_.call(null,inst_29758);
var inst_29783 = inst_29759.call(null,inst_29765);
var inst_29784 = cljs.core.not.call(null,inst_29783);
var inst_29785 = (inst_29782) && (inst_29784);
var state_29805__$1 = state_29805;
var statearr_29855_29910 = state_29805__$1;
(statearr_29855_29910[(2)] = inst_29785);

(statearr_29855_29910[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29806 === (10))){
var inst_29711 = (state_29805[(8)]);
var inst_29731 = (state_29805[(2)]);
var inst_29732 = cljs.core.get.call(null,inst_29731,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_29733 = cljs.core.get.call(null,inst_29731,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_29734 = cljs.core.get.call(null,inst_29731,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_29735 = inst_29711;
var state_29805__$1 = (function (){var statearr_29856 = state_29805;
(statearr_29856[(16)] = inst_29734);

(statearr_29856[(17)] = inst_29732);

(statearr_29856[(18)] = inst_29733);

(statearr_29856[(7)] = inst_29735);

return statearr_29856;
})();
var statearr_29857_29911 = state_29805__$1;
(statearr_29857_29911[(2)] = null);

(statearr_29857_29911[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29806 === (18))){
var inst_29749 = (state_29805[(2)]);
var state_29805__$1 = state_29805;
var statearr_29858_29912 = state_29805__$1;
(statearr_29858_29912[(2)] = inst_29749);

(statearr_29858_29912[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29806 === (37))){
var state_29805__$1 = state_29805;
var statearr_29859_29913 = state_29805__$1;
(statearr_29859_29913[(2)] = null);

(statearr_29859_29913[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29806 === (8))){
var inst_29711 = (state_29805[(8)]);
var inst_29728 = cljs.core.apply.call(null,cljs.core.hash_map,inst_29711);
var state_29805__$1 = state_29805;
var statearr_29860_29914 = state_29805__$1;
(statearr_29860_29914[(2)] = inst_29728);

(statearr_29860_29914[(1)] = (10));


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
});})(c__20810__auto___29868,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__20745__auto__,c__20810__auto___29868,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__20746__auto__ = null;
var cljs$core$async$mix_$_state_machine__20746__auto____0 = (function (){
var statearr_29864 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29864[(0)] = cljs$core$async$mix_$_state_machine__20746__auto__);

(statearr_29864[(1)] = (1));

return statearr_29864;
});
var cljs$core$async$mix_$_state_machine__20746__auto____1 = (function (state_29805){
while(true){
var ret_value__20747__auto__ = (function (){try{while(true){
var result__20748__auto__ = switch__20745__auto__.call(null,state_29805);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20748__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20748__auto__;
}
break;
}
}catch (e29865){if((e29865 instanceof Object)){
var ex__20749__auto__ = e29865;
var statearr_29866_29915 = state_29805;
(statearr_29866_29915[(5)] = ex__20749__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29805);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29865;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20747__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29916 = state_29805;
state_29805 = G__29916;
continue;
} else {
return ret_value__20747__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__20746__auto__ = function(state_29805){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__20746__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__20746__auto____1.call(this,state_29805);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__20746__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__20746__auto____0;
cljs$core$async$mix_$_state_machine__20746__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__20746__auto____1;
return cljs$core$async$mix_$_state_machine__20746__auto__;
})()
;})(switch__20745__auto__,c__20810__auto___29868,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__20812__auto__ = (function (){var statearr_29867 = f__20811__auto__.call(null);
(statearr_29867[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20810__auto___29868);

return statearr_29867;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20812__auto__);
});})(c__20810__auto___29868,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__17145__auto__ = (((p == null))?null:p);
var m__17146__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__17145__auto__)]);
if(!((m__17146__auto__ == null))){
return m__17146__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__17146__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__17146__auto____$1 == null))){
return m__17146__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__17145__auto__ = (((p == null))?null:p);
var m__17146__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__17145__auto__)]);
if(!((m__17146__auto__ == null))){
return m__17146__auto__.call(null,p,v,ch);
} else {
var m__17146__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__17146__auto____$1 == null))){
return m__17146__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args29917 = [];
var len__17548__auto___29920 = arguments.length;
var i__17549__auto___29921 = (0);
while(true){
if((i__17549__auto___29921 < len__17548__auto___29920)){
args29917.push((arguments[i__17549__auto___29921]));

var G__29922 = (i__17549__auto___29921 + (1));
i__17549__auto___29921 = G__29922;
continue;
} else {
}
break;
}

var G__29919 = args29917.length;
switch (G__29919) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29917.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__17145__auto__ = (((p == null))?null:p);
var m__17146__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__17145__auto__)]);
if(!((m__17146__auto__ == null))){
return m__17146__auto__.call(null,p);
} else {
var m__17146__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__17146__auto____$1 == null))){
return m__17146__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__17145__auto__ = (((p == null))?null:p);
var m__17146__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__17145__auto__)]);
if(!((m__17146__auto__ == null))){
return m__17146__auto__.call(null,p,v);
} else {
var m__17146__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__17146__auto____$1 == null))){
return m__17146__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;

/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args29925 = [];
var len__17548__auto___30050 = arguments.length;
var i__17549__auto___30051 = (0);
while(true){
if((i__17549__auto___30051 < len__17548__auto___30050)){
args29925.push((arguments[i__17549__auto___30051]));

var G__30052 = (i__17549__auto___30051 + (1));
i__17549__auto___30051 = G__30052;
continue;
} else {
}
break;
}

var G__29927 = args29925.length;
switch (G__29927) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29925.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__16490__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__16490__auto__)){
return or__16490__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__16490__auto__,mults){
return (function (p1__29924_SHARP_){
if(cljs.core.truth_(p1__29924_SHARP_.call(null,topic))){
return p1__29924_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__29924_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__16490__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async29928 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29928 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta29929){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta29929 = meta29929;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29928.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_29930,meta29929__$1){
var self__ = this;
var _29930__$1 = this;
return (new cljs.core.async.t_cljs$core$async29928(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta29929__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29928.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_29930){
var self__ = this;
var _29930__$1 = this;
return self__.meta29929;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29928.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async29928.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29928.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async29928.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29928.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4425__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4425__auto__)){
var m = temp__4425__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29928.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29928.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29928.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta29929","meta29929",-494833453,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29928.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29928.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29928";

cljs.core.async.t_cljs$core$async29928.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__17088__auto__,writer__17089__auto__,opt__17090__auto__){
return cljs.core._write.call(null,writer__17089__auto__,"cljs.core.async/t_cljs$core$async29928");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async29928 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async29928(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta29929){
return (new cljs.core.async.t_cljs$core$async29928(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta29929));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async29928(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__20810__auto___30054 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20810__auto___30054,mults,ensure_mult,p){
return (function (){
var f__20811__auto__ = (function (){var switch__20745__auto__ = ((function (c__20810__auto___30054,mults,ensure_mult,p){
return (function (state_30002){
var state_val_30003 = (state_30002[(1)]);
if((state_val_30003 === (7))){
var inst_29998 = (state_30002[(2)]);
var state_30002__$1 = state_30002;
var statearr_30004_30055 = state_30002__$1;
(statearr_30004_30055[(2)] = inst_29998);

(statearr_30004_30055[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30003 === (20))){
var state_30002__$1 = state_30002;
var statearr_30005_30056 = state_30002__$1;
(statearr_30005_30056[(2)] = null);

(statearr_30005_30056[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30003 === (1))){
var state_30002__$1 = state_30002;
var statearr_30006_30057 = state_30002__$1;
(statearr_30006_30057[(2)] = null);

(statearr_30006_30057[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30003 === (24))){
var inst_29981 = (state_30002[(7)]);
var inst_29990 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_29981);
var state_30002__$1 = state_30002;
var statearr_30007_30058 = state_30002__$1;
(statearr_30007_30058[(2)] = inst_29990);

(statearr_30007_30058[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30003 === (4))){
var inst_29933 = (state_30002[(8)]);
var inst_29933__$1 = (state_30002[(2)]);
var inst_29934 = (inst_29933__$1 == null);
var state_30002__$1 = (function (){var statearr_30008 = state_30002;
(statearr_30008[(8)] = inst_29933__$1);

return statearr_30008;
})();
if(cljs.core.truth_(inst_29934)){
var statearr_30009_30059 = state_30002__$1;
(statearr_30009_30059[(1)] = (5));

} else {
var statearr_30010_30060 = state_30002__$1;
(statearr_30010_30060[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30003 === (15))){
var inst_29975 = (state_30002[(2)]);
var state_30002__$1 = state_30002;
var statearr_30011_30061 = state_30002__$1;
(statearr_30011_30061[(2)] = inst_29975);

(statearr_30011_30061[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30003 === (21))){
var inst_29995 = (state_30002[(2)]);
var state_30002__$1 = (function (){var statearr_30012 = state_30002;
(statearr_30012[(9)] = inst_29995);

return statearr_30012;
})();
var statearr_30013_30062 = state_30002__$1;
(statearr_30013_30062[(2)] = null);

(statearr_30013_30062[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30003 === (13))){
var inst_29957 = (state_30002[(10)]);
var inst_29959 = cljs.core.chunked_seq_QMARK_.call(null,inst_29957);
var state_30002__$1 = state_30002;
if(inst_29959){
var statearr_30014_30063 = state_30002__$1;
(statearr_30014_30063[(1)] = (16));

} else {
var statearr_30015_30064 = state_30002__$1;
(statearr_30015_30064[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30003 === (22))){
var inst_29987 = (state_30002[(2)]);
var state_30002__$1 = state_30002;
if(cljs.core.truth_(inst_29987)){
var statearr_30016_30065 = state_30002__$1;
(statearr_30016_30065[(1)] = (23));

} else {
var statearr_30017_30066 = state_30002__$1;
(statearr_30017_30066[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30003 === (6))){
var inst_29981 = (state_30002[(7)]);
var inst_29933 = (state_30002[(8)]);
var inst_29983 = (state_30002[(11)]);
var inst_29981__$1 = topic_fn.call(null,inst_29933);
var inst_29982 = cljs.core.deref.call(null,mults);
var inst_29983__$1 = cljs.core.get.call(null,inst_29982,inst_29981__$1);
var state_30002__$1 = (function (){var statearr_30018 = state_30002;
(statearr_30018[(7)] = inst_29981__$1);

(statearr_30018[(11)] = inst_29983__$1);

return statearr_30018;
})();
if(cljs.core.truth_(inst_29983__$1)){
var statearr_30019_30067 = state_30002__$1;
(statearr_30019_30067[(1)] = (19));

} else {
var statearr_30020_30068 = state_30002__$1;
(statearr_30020_30068[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30003 === (25))){
var inst_29992 = (state_30002[(2)]);
var state_30002__$1 = state_30002;
var statearr_30021_30069 = state_30002__$1;
(statearr_30021_30069[(2)] = inst_29992);

(statearr_30021_30069[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30003 === (17))){
var inst_29957 = (state_30002[(10)]);
var inst_29966 = cljs.core.first.call(null,inst_29957);
var inst_29967 = cljs.core.async.muxch_STAR_.call(null,inst_29966);
var inst_29968 = cljs.core.async.close_BANG_.call(null,inst_29967);
var inst_29969 = cljs.core.next.call(null,inst_29957);
var inst_29943 = inst_29969;
var inst_29944 = null;
var inst_29945 = (0);
var inst_29946 = (0);
var state_30002__$1 = (function (){var statearr_30022 = state_30002;
(statearr_30022[(12)] = inst_29946);

(statearr_30022[(13)] = inst_29944);

(statearr_30022[(14)] = inst_29968);

(statearr_30022[(15)] = inst_29943);

(statearr_30022[(16)] = inst_29945);

return statearr_30022;
})();
var statearr_30023_30070 = state_30002__$1;
(statearr_30023_30070[(2)] = null);

(statearr_30023_30070[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30003 === (3))){
var inst_30000 = (state_30002[(2)]);
var state_30002__$1 = state_30002;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30002__$1,inst_30000);
} else {
if((state_val_30003 === (12))){
var inst_29977 = (state_30002[(2)]);
var state_30002__$1 = state_30002;
var statearr_30024_30071 = state_30002__$1;
(statearr_30024_30071[(2)] = inst_29977);

(statearr_30024_30071[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30003 === (2))){
var state_30002__$1 = state_30002;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30002__$1,(4),ch);
} else {
if((state_val_30003 === (23))){
var state_30002__$1 = state_30002;
var statearr_30025_30072 = state_30002__$1;
(statearr_30025_30072[(2)] = null);

(statearr_30025_30072[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30003 === (19))){
var inst_29933 = (state_30002[(8)]);
var inst_29983 = (state_30002[(11)]);
var inst_29985 = cljs.core.async.muxch_STAR_.call(null,inst_29983);
var state_30002__$1 = state_30002;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30002__$1,(22),inst_29985,inst_29933);
} else {
if((state_val_30003 === (11))){
var inst_29943 = (state_30002[(15)]);
var inst_29957 = (state_30002[(10)]);
var inst_29957__$1 = cljs.core.seq.call(null,inst_29943);
var state_30002__$1 = (function (){var statearr_30026 = state_30002;
(statearr_30026[(10)] = inst_29957__$1);

return statearr_30026;
})();
if(inst_29957__$1){
var statearr_30027_30073 = state_30002__$1;
(statearr_30027_30073[(1)] = (13));

} else {
var statearr_30028_30074 = state_30002__$1;
(statearr_30028_30074[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30003 === (9))){
var inst_29979 = (state_30002[(2)]);
var state_30002__$1 = state_30002;
var statearr_30029_30075 = state_30002__$1;
(statearr_30029_30075[(2)] = inst_29979);

(statearr_30029_30075[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30003 === (5))){
var inst_29940 = cljs.core.deref.call(null,mults);
var inst_29941 = cljs.core.vals.call(null,inst_29940);
var inst_29942 = cljs.core.seq.call(null,inst_29941);
var inst_29943 = inst_29942;
var inst_29944 = null;
var inst_29945 = (0);
var inst_29946 = (0);
var state_30002__$1 = (function (){var statearr_30030 = state_30002;
(statearr_30030[(12)] = inst_29946);

(statearr_30030[(13)] = inst_29944);

(statearr_30030[(15)] = inst_29943);

(statearr_30030[(16)] = inst_29945);

return statearr_30030;
})();
var statearr_30031_30076 = state_30002__$1;
(statearr_30031_30076[(2)] = null);

(statearr_30031_30076[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30003 === (14))){
var state_30002__$1 = state_30002;
var statearr_30035_30077 = state_30002__$1;
(statearr_30035_30077[(2)] = null);

(statearr_30035_30077[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30003 === (16))){
var inst_29957 = (state_30002[(10)]);
var inst_29961 = cljs.core.chunk_first.call(null,inst_29957);
var inst_29962 = cljs.core.chunk_rest.call(null,inst_29957);
var inst_29963 = cljs.core.count.call(null,inst_29961);
var inst_29943 = inst_29962;
var inst_29944 = inst_29961;
var inst_29945 = inst_29963;
var inst_29946 = (0);
var state_30002__$1 = (function (){var statearr_30036 = state_30002;
(statearr_30036[(12)] = inst_29946);

(statearr_30036[(13)] = inst_29944);

(statearr_30036[(15)] = inst_29943);

(statearr_30036[(16)] = inst_29945);

return statearr_30036;
})();
var statearr_30037_30078 = state_30002__$1;
(statearr_30037_30078[(2)] = null);

(statearr_30037_30078[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30003 === (10))){
var inst_29946 = (state_30002[(12)]);
var inst_29944 = (state_30002[(13)]);
var inst_29943 = (state_30002[(15)]);
var inst_29945 = (state_30002[(16)]);
var inst_29951 = cljs.core._nth.call(null,inst_29944,inst_29946);
var inst_29952 = cljs.core.async.muxch_STAR_.call(null,inst_29951);
var inst_29953 = cljs.core.async.close_BANG_.call(null,inst_29952);
var inst_29954 = (inst_29946 + (1));
var tmp30032 = inst_29944;
var tmp30033 = inst_29943;
var tmp30034 = inst_29945;
var inst_29943__$1 = tmp30033;
var inst_29944__$1 = tmp30032;
var inst_29945__$1 = tmp30034;
var inst_29946__$1 = inst_29954;
var state_30002__$1 = (function (){var statearr_30038 = state_30002;
(statearr_30038[(12)] = inst_29946__$1);

(statearr_30038[(17)] = inst_29953);

(statearr_30038[(13)] = inst_29944__$1);

(statearr_30038[(15)] = inst_29943__$1);

(statearr_30038[(16)] = inst_29945__$1);

return statearr_30038;
})();
var statearr_30039_30079 = state_30002__$1;
(statearr_30039_30079[(2)] = null);

(statearr_30039_30079[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30003 === (18))){
var inst_29972 = (state_30002[(2)]);
var state_30002__$1 = state_30002;
var statearr_30040_30080 = state_30002__$1;
(statearr_30040_30080[(2)] = inst_29972);

(statearr_30040_30080[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30003 === (8))){
var inst_29946 = (state_30002[(12)]);
var inst_29945 = (state_30002[(16)]);
var inst_29948 = (inst_29946 < inst_29945);
var inst_29949 = inst_29948;
var state_30002__$1 = state_30002;
if(cljs.core.truth_(inst_29949)){
var statearr_30041_30081 = state_30002__$1;
(statearr_30041_30081[(1)] = (10));

} else {
var statearr_30042_30082 = state_30002__$1;
(statearr_30042_30082[(1)] = (11));

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
});})(c__20810__auto___30054,mults,ensure_mult,p))
;
return ((function (switch__20745__auto__,c__20810__auto___30054,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__20746__auto__ = null;
var cljs$core$async$state_machine__20746__auto____0 = (function (){
var statearr_30046 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30046[(0)] = cljs$core$async$state_machine__20746__auto__);

(statearr_30046[(1)] = (1));

return statearr_30046;
});
var cljs$core$async$state_machine__20746__auto____1 = (function (state_30002){
while(true){
var ret_value__20747__auto__ = (function (){try{while(true){
var result__20748__auto__ = switch__20745__auto__.call(null,state_30002);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20748__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20748__auto__;
}
break;
}
}catch (e30047){if((e30047 instanceof Object)){
var ex__20749__auto__ = e30047;
var statearr_30048_30083 = state_30002;
(statearr_30048_30083[(5)] = ex__20749__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30002);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30047;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20747__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30084 = state_30002;
state_30002 = G__30084;
continue;
} else {
return ret_value__20747__auto__;
}
break;
}
});
cljs$core$async$state_machine__20746__auto__ = function(state_30002){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20746__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20746__auto____1.call(this,state_30002);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20746__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20746__auto____0;
cljs$core$async$state_machine__20746__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20746__auto____1;
return cljs$core$async$state_machine__20746__auto__;
})()
;})(switch__20745__auto__,c__20810__auto___30054,mults,ensure_mult,p))
})();
var state__20812__auto__ = (function (){var statearr_30049 = f__20811__auto__.call(null);
(statearr_30049[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20810__auto___30054);

return statearr_30049;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20812__auto__);
});})(c__20810__auto___30054,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;
/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args30085 = [];
var len__17548__auto___30088 = arguments.length;
var i__17549__auto___30089 = (0);
while(true){
if((i__17549__auto___30089 < len__17548__auto___30088)){
args30085.push((arguments[i__17549__auto___30089]));

var G__30090 = (i__17549__auto___30089 + (1));
i__17549__auto___30089 = G__30090;
continue;
} else {
}
break;
}

var G__30087 = args30085.length;
switch (G__30087) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30085.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;
/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args30092 = [];
var len__17548__auto___30095 = arguments.length;
var i__17549__auto___30096 = (0);
while(true){
if((i__17549__auto___30096 < len__17548__auto___30095)){
args30092.push((arguments[i__17549__auto___30096]));

var G__30097 = (i__17549__auto___30096 + (1));
i__17549__auto___30096 = G__30097;
continue;
} else {
}
break;
}

var G__30094 = args30092.length;
switch (G__30094) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30092.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;
/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args30099 = [];
var len__17548__auto___30170 = arguments.length;
var i__17549__auto___30171 = (0);
while(true){
if((i__17549__auto___30171 < len__17548__auto___30170)){
args30099.push((arguments[i__17549__auto___30171]));

var G__30172 = (i__17549__auto___30171 + (1));
i__17549__auto___30171 = G__30172;
continue;
} else {
}
break;
}

var G__30101 = args30099.length;
switch (G__30101) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30099.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__20810__auto___30174 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20810__auto___30174,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__20811__auto__ = (function (){var switch__20745__auto__ = ((function (c__20810__auto___30174,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_30140){
var state_val_30141 = (state_30140[(1)]);
if((state_val_30141 === (7))){
var state_30140__$1 = state_30140;
var statearr_30142_30175 = state_30140__$1;
(statearr_30142_30175[(2)] = null);

(statearr_30142_30175[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30141 === (1))){
var state_30140__$1 = state_30140;
var statearr_30143_30176 = state_30140__$1;
(statearr_30143_30176[(2)] = null);

(statearr_30143_30176[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30141 === (4))){
var inst_30104 = (state_30140[(7)]);
var inst_30106 = (inst_30104 < cnt);
var state_30140__$1 = state_30140;
if(cljs.core.truth_(inst_30106)){
var statearr_30144_30177 = state_30140__$1;
(statearr_30144_30177[(1)] = (6));

} else {
var statearr_30145_30178 = state_30140__$1;
(statearr_30145_30178[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30141 === (15))){
var inst_30136 = (state_30140[(2)]);
var state_30140__$1 = state_30140;
var statearr_30146_30179 = state_30140__$1;
(statearr_30146_30179[(2)] = inst_30136);

(statearr_30146_30179[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30141 === (13))){
var inst_30129 = cljs.core.async.close_BANG_.call(null,out);
var state_30140__$1 = state_30140;
var statearr_30147_30180 = state_30140__$1;
(statearr_30147_30180[(2)] = inst_30129);

(statearr_30147_30180[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30141 === (6))){
var state_30140__$1 = state_30140;
var statearr_30148_30181 = state_30140__$1;
(statearr_30148_30181[(2)] = null);

(statearr_30148_30181[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30141 === (3))){
var inst_30138 = (state_30140[(2)]);
var state_30140__$1 = state_30140;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30140__$1,inst_30138);
} else {
if((state_val_30141 === (12))){
var inst_30126 = (state_30140[(8)]);
var inst_30126__$1 = (state_30140[(2)]);
var inst_30127 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_30126__$1);
var state_30140__$1 = (function (){var statearr_30149 = state_30140;
(statearr_30149[(8)] = inst_30126__$1);

return statearr_30149;
})();
if(cljs.core.truth_(inst_30127)){
var statearr_30150_30182 = state_30140__$1;
(statearr_30150_30182[(1)] = (13));

} else {
var statearr_30151_30183 = state_30140__$1;
(statearr_30151_30183[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30141 === (2))){
var inst_30103 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_30104 = (0);
var state_30140__$1 = (function (){var statearr_30152 = state_30140;
(statearr_30152[(9)] = inst_30103);

(statearr_30152[(7)] = inst_30104);

return statearr_30152;
})();
var statearr_30153_30184 = state_30140__$1;
(statearr_30153_30184[(2)] = null);

(statearr_30153_30184[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30141 === (11))){
var inst_30104 = (state_30140[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_30140,(10),Object,null,(9));
var inst_30113 = chs__$1.call(null,inst_30104);
var inst_30114 = done.call(null,inst_30104);
var inst_30115 = cljs.core.async.take_BANG_.call(null,inst_30113,inst_30114);
var state_30140__$1 = state_30140;
var statearr_30154_30185 = state_30140__$1;
(statearr_30154_30185[(2)] = inst_30115);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30140__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30141 === (9))){
var inst_30104 = (state_30140[(7)]);
var inst_30117 = (state_30140[(2)]);
var inst_30118 = (inst_30104 + (1));
var inst_30104__$1 = inst_30118;
var state_30140__$1 = (function (){var statearr_30155 = state_30140;
(statearr_30155[(10)] = inst_30117);

(statearr_30155[(7)] = inst_30104__$1);

return statearr_30155;
})();
var statearr_30156_30186 = state_30140__$1;
(statearr_30156_30186[(2)] = null);

(statearr_30156_30186[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30141 === (5))){
var inst_30124 = (state_30140[(2)]);
var state_30140__$1 = (function (){var statearr_30157 = state_30140;
(statearr_30157[(11)] = inst_30124);

return statearr_30157;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30140__$1,(12),dchan);
} else {
if((state_val_30141 === (14))){
var inst_30126 = (state_30140[(8)]);
var inst_30131 = cljs.core.apply.call(null,f,inst_30126);
var state_30140__$1 = state_30140;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30140__$1,(16),out,inst_30131);
} else {
if((state_val_30141 === (16))){
var inst_30133 = (state_30140[(2)]);
var state_30140__$1 = (function (){var statearr_30158 = state_30140;
(statearr_30158[(12)] = inst_30133);

return statearr_30158;
})();
var statearr_30159_30187 = state_30140__$1;
(statearr_30159_30187[(2)] = null);

(statearr_30159_30187[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30141 === (10))){
var inst_30108 = (state_30140[(2)]);
var inst_30109 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_30140__$1 = (function (){var statearr_30160 = state_30140;
(statearr_30160[(13)] = inst_30108);

return statearr_30160;
})();
var statearr_30161_30188 = state_30140__$1;
(statearr_30161_30188[(2)] = inst_30109);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30140__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30141 === (8))){
var inst_30122 = (state_30140[(2)]);
var state_30140__$1 = state_30140;
var statearr_30162_30189 = state_30140__$1;
(statearr_30162_30189[(2)] = inst_30122);

(statearr_30162_30189[(1)] = (5));


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
});})(c__20810__auto___30174,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__20745__auto__,c__20810__auto___30174,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__20746__auto__ = null;
var cljs$core$async$state_machine__20746__auto____0 = (function (){
var statearr_30166 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30166[(0)] = cljs$core$async$state_machine__20746__auto__);

(statearr_30166[(1)] = (1));

return statearr_30166;
});
var cljs$core$async$state_machine__20746__auto____1 = (function (state_30140){
while(true){
var ret_value__20747__auto__ = (function (){try{while(true){
var result__20748__auto__ = switch__20745__auto__.call(null,state_30140);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20748__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20748__auto__;
}
break;
}
}catch (e30167){if((e30167 instanceof Object)){
var ex__20749__auto__ = e30167;
var statearr_30168_30190 = state_30140;
(statearr_30168_30190[(5)] = ex__20749__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30140);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30167;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20747__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30191 = state_30140;
state_30140 = G__30191;
continue;
} else {
return ret_value__20747__auto__;
}
break;
}
});
cljs$core$async$state_machine__20746__auto__ = function(state_30140){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20746__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20746__auto____1.call(this,state_30140);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20746__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20746__auto____0;
cljs$core$async$state_machine__20746__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20746__auto____1;
return cljs$core$async$state_machine__20746__auto__;
})()
;})(switch__20745__auto__,c__20810__auto___30174,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__20812__auto__ = (function (){var statearr_30169 = f__20811__auto__.call(null);
(statearr_30169[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20810__auto___30174);

return statearr_30169;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20812__auto__);
});})(c__20810__auto___30174,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;
/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args30193 = [];
var len__17548__auto___30249 = arguments.length;
var i__17549__auto___30250 = (0);
while(true){
if((i__17549__auto___30250 < len__17548__auto___30249)){
args30193.push((arguments[i__17549__auto___30250]));

var G__30251 = (i__17549__auto___30250 + (1));
i__17549__auto___30250 = G__30251;
continue;
} else {
}
break;
}

var G__30195 = args30193.length;
switch (G__30195) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30193.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20810__auto___30253 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20810__auto___30253,out){
return (function (){
var f__20811__auto__ = (function (){var switch__20745__auto__ = ((function (c__20810__auto___30253,out){
return (function (state_30225){
var state_val_30226 = (state_30225[(1)]);
if((state_val_30226 === (7))){
var inst_30204 = (state_30225[(7)]);
var inst_30205 = (state_30225[(8)]);
var inst_30204__$1 = (state_30225[(2)]);
var inst_30205__$1 = cljs.core.nth.call(null,inst_30204__$1,(0),null);
var inst_30206 = cljs.core.nth.call(null,inst_30204__$1,(1),null);
var inst_30207 = (inst_30205__$1 == null);
var state_30225__$1 = (function (){var statearr_30227 = state_30225;
(statearr_30227[(7)] = inst_30204__$1);

(statearr_30227[(8)] = inst_30205__$1);

(statearr_30227[(9)] = inst_30206);

return statearr_30227;
})();
if(cljs.core.truth_(inst_30207)){
var statearr_30228_30254 = state_30225__$1;
(statearr_30228_30254[(1)] = (8));

} else {
var statearr_30229_30255 = state_30225__$1;
(statearr_30229_30255[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30226 === (1))){
var inst_30196 = cljs.core.vec.call(null,chs);
var inst_30197 = inst_30196;
var state_30225__$1 = (function (){var statearr_30230 = state_30225;
(statearr_30230[(10)] = inst_30197);

return statearr_30230;
})();
var statearr_30231_30256 = state_30225__$1;
(statearr_30231_30256[(2)] = null);

(statearr_30231_30256[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30226 === (4))){
var inst_30197 = (state_30225[(10)]);
var state_30225__$1 = state_30225;
return cljs.core.async.ioc_alts_BANG_.call(null,state_30225__$1,(7),inst_30197);
} else {
if((state_val_30226 === (6))){
var inst_30221 = (state_30225[(2)]);
var state_30225__$1 = state_30225;
var statearr_30232_30257 = state_30225__$1;
(statearr_30232_30257[(2)] = inst_30221);

(statearr_30232_30257[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30226 === (3))){
var inst_30223 = (state_30225[(2)]);
var state_30225__$1 = state_30225;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30225__$1,inst_30223);
} else {
if((state_val_30226 === (2))){
var inst_30197 = (state_30225[(10)]);
var inst_30199 = cljs.core.count.call(null,inst_30197);
var inst_30200 = (inst_30199 > (0));
var state_30225__$1 = state_30225;
if(cljs.core.truth_(inst_30200)){
var statearr_30234_30258 = state_30225__$1;
(statearr_30234_30258[(1)] = (4));

} else {
var statearr_30235_30259 = state_30225__$1;
(statearr_30235_30259[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30226 === (11))){
var inst_30197 = (state_30225[(10)]);
var inst_30214 = (state_30225[(2)]);
var tmp30233 = inst_30197;
var inst_30197__$1 = tmp30233;
var state_30225__$1 = (function (){var statearr_30236 = state_30225;
(statearr_30236[(11)] = inst_30214);

(statearr_30236[(10)] = inst_30197__$1);

return statearr_30236;
})();
var statearr_30237_30260 = state_30225__$1;
(statearr_30237_30260[(2)] = null);

(statearr_30237_30260[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30226 === (9))){
var inst_30205 = (state_30225[(8)]);
var state_30225__$1 = state_30225;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30225__$1,(11),out,inst_30205);
} else {
if((state_val_30226 === (5))){
var inst_30219 = cljs.core.async.close_BANG_.call(null,out);
var state_30225__$1 = state_30225;
var statearr_30238_30261 = state_30225__$1;
(statearr_30238_30261[(2)] = inst_30219);

(statearr_30238_30261[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30226 === (10))){
var inst_30217 = (state_30225[(2)]);
var state_30225__$1 = state_30225;
var statearr_30239_30262 = state_30225__$1;
(statearr_30239_30262[(2)] = inst_30217);

(statearr_30239_30262[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30226 === (8))){
var inst_30204 = (state_30225[(7)]);
var inst_30197 = (state_30225[(10)]);
var inst_30205 = (state_30225[(8)]);
var inst_30206 = (state_30225[(9)]);
var inst_30209 = (function (){var cs = inst_30197;
var vec__30202 = inst_30204;
var v = inst_30205;
var c = inst_30206;
return ((function (cs,vec__30202,v,c,inst_30204,inst_30197,inst_30205,inst_30206,state_val_30226,c__20810__auto___30253,out){
return (function (p1__30192_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__30192_SHARP_);
});
;})(cs,vec__30202,v,c,inst_30204,inst_30197,inst_30205,inst_30206,state_val_30226,c__20810__auto___30253,out))
})();
var inst_30210 = cljs.core.filterv.call(null,inst_30209,inst_30197);
var inst_30197__$1 = inst_30210;
var state_30225__$1 = (function (){var statearr_30240 = state_30225;
(statearr_30240[(10)] = inst_30197__$1);

return statearr_30240;
})();
var statearr_30241_30263 = state_30225__$1;
(statearr_30241_30263[(2)] = null);

(statearr_30241_30263[(1)] = (2));


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
});})(c__20810__auto___30253,out))
;
return ((function (switch__20745__auto__,c__20810__auto___30253,out){
return (function() {
var cljs$core$async$state_machine__20746__auto__ = null;
var cljs$core$async$state_machine__20746__auto____0 = (function (){
var statearr_30245 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30245[(0)] = cljs$core$async$state_machine__20746__auto__);

(statearr_30245[(1)] = (1));

return statearr_30245;
});
var cljs$core$async$state_machine__20746__auto____1 = (function (state_30225){
while(true){
var ret_value__20747__auto__ = (function (){try{while(true){
var result__20748__auto__ = switch__20745__auto__.call(null,state_30225);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20748__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20748__auto__;
}
break;
}
}catch (e30246){if((e30246 instanceof Object)){
var ex__20749__auto__ = e30246;
var statearr_30247_30264 = state_30225;
(statearr_30247_30264[(5)] = ex__20749__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30225);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30246;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20747__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30265 = state_30225;
state_30225 = G__30265;
continue;
} else {
return ret_value__20747__auto__;
}
break;
}
});
cljs$core$async$state_machine__20746__auto__ = function(state_30225){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20746__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20746__auto____1.call(this,state_30225);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20746__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20746__auto____0;
cljs$core$async$state_machine__20746__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20746__auto____1;
return cljs$core$async$state_machine__20746__auto__;
})()
;})(switch__20745__auto__,c__20810__auto___30253,out))
})();
var state__20812__auto__ = (function (){var statearr_30248 = f__20811__auto__.call(null);
(statearr_30248[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20810__auto___30253);

return statearr_30248;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20812__auto__);
});})(c__20810__auto___30253,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args30266 = [];
var len__17548__auto___30315 = arguments.length;
var i__17549__auto___30316 = (0);
while(true){
if((i__17549__auto___30316 < len__17548__auto___30315)){
args30266.push((arguments[i__17549__auto___30316]));

var G__30317 = (i__17549__auto___30316 + (1));
i__17549__auto___30316 = G__30317;
continue;
} else {
}
break;
}

var G__30268 = args30266.length;
switch (G__30268) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30266.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20810__auto___30319 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20810__auto___30319,out){
return (function (){
var f__20811__auto__ = (function (){var switch__20745__auto__ = ((function (c__20810__auto___30319,out){
return (function (state_30292){
var state_val_30293 = (state_30292[(1)]);
if((state_val_30293 === (7))){
var inst_30274 = (state_30292[(7)]);
var inst_30274__$1 = (state_30292[(2)]);
var inst_30275 = (inst_30274__$1 == null);
var inst_30276 = cljs.core.not.call(null,inst_30275);
var state_30292__$1 = (function (){var statearr_30294 = state_30292;
(statearr_30294[(7)] = inst_30274__$1);

return statearr_30294;
})();
if(inst_30276){
var statearr_30295_30320 = state_30292__$1;
(statearr_30295_30320[(1)] = (8));

} else {
var statearr_30296_30321 = state_30292__$1;
(statearr_30296_30321[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30293 === (1))){
var inst_30269 = (0);
var state_30292__$1 = (function (){var statearr_30297 = state_30292;
(statearr_30297[(8)] = inst_30269);

return statearr_30297;
})();
var statearr_30298_30322 = state_30292__$1;
(statearr_30298_30322[(2)] = null);

(statearr_30298_30322[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30293 === (4))){
var state_30292__$1 = state_30292;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30292__$1,(7),ch);
} else {
if((state_val_30293 === (6))){
var inst_30287 = (state_30292[(2)]);
var state_30292__$1 = state_30292;
var statearr_30299_30323 = state_30292__$1;
(statearr_30299_30323[(2)] = inst_30287);

(statearr_30299_30323[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30293 === (3))){
var inst_30289 = (state_30292[(2)]);
var inst_30290 = cljs.core.async.close_BANG_.call(null,out);
var state_30292__$1 = (function (){var statearr_30300 = state_30292;
(statearr_30300[(9)] = inst_30289);

return statearr_30300;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30292__$1,inst_30290);
} else {
if((state_val_30293 === (2))){
var inst_30269 = (state_30292[(8)]);
var inst_30271 = (inst_30269 < n);
var state_30292__$1 = state_30292;
if(cljs.core.truth_(inst_30271)){
var statearr_30301_30324 = state_30292__$1;
(statearr_30301_30324[(1)] = (4));

} else {
var statearr_30302_30325 = state_30292__$1;
(statearr_30302_30325[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30293 === (11))){
var inst_30269 = (state_30292[(8)]);
var inst_30279 = (state_30292[(2)]);
var inst_30280 = (inst_30269 + (1));
var inst_30269__$1 = inst_30280;
var state_30292__$1 = (function (){var statearr_30303 = state_30292;
(statearr_30303[(10)] = inst_30279);

(statearr_30303[(8)] = inst_30269__$1);

return statearr_30303;
})();
var statearr_30304_30326 = state_30292__$1;
(statearr_30304_30326[(2)] = null);

(statearr_30304_30326[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30293 === (9))){
var state_30292__$1 = state_30292;
var statearr_30305_30327 = state_30292__$1;
(statearr_30305_30327[(2)] = null);

(statearr_30305_30327[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30293 === (5))){
var state_30292__$1 = state_30292;
var statearr_30306_30328 = state_30292__$1;
(statearr_30306_30328[(2)] = null);

(statearr_30306_30328[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30293 === (10))){
var inst_30284 = (state_30292[(2)]);
var state_30292__$1 = state_30292;
var statearr_30307_30329 = state_30292__$1;
(statearr_30307_30329[(2)] = inst_30284);

(statearr_30307_30329[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30293 === (8))){
var inst_30274 = (state_30292[(7)]);
var state_30292__$1 = state_30292;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30292__$1,(11),out,inst_30274);
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
});})(c__20810__auto___30319,out))
;
return ((function (switch__20745__auto__,c__20810__auto___30319,out){
return (function() {
var cljs$core$async$state_machine__20746__auto__ = null;
var cljs$core$async$state_machine__20746__auto____0 = (function (){
var statearr_30311 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30311[(0)] = cljs$core$async$state_machine__20746__auto__);

(statearr_30311[(1)] = (1));

return statearr_30311;
});
var cljs$core$async$state_machine__20746__auto____1 = (function (state_30292){
while(true){
var ret_value__20747__auto__ = (function (){try{while(true){
var result__20748__auto__ = switch__20745__auto__.call(null,state_30292);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20748__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20748__auto__;
}
break;
}
}catch (e30312){if((e30312 instanceof Object)){
var ex__20749__auto__ = e30312;
var statearr_30313_30330 = state_30292;
(statearr_30313_30330[(5)] = ex__20749__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30292);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30312;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20747__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30331 = state_30292;
state_30292 = G__30331;
continue;
} else {
return ret_value__20747__auto__;
}
break;
}
});
cljs$core$async$state_machine__20746__auto__ = function(state_30292){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20746__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20746__auto____1.call(this,state_30292);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20746__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20746__auto____0;
cljs$core$async$state_machine__20746__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20746__auto____1;
return cljs$core$async$state_machine__20746__auto__;
})()
;})(switch__20745__auto__,c__20810__auto___30319,out))
})();
var state__20812__auto__ = (function (){var statearr_30314 = f__20811__auto__.call(null);
(statearr_30314[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20810__auto___30319);

return statearr_30314;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20812__auto__);
});})(c__20810__auto___30319,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async30339 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30339 = (function (map_LT_,f,ch,meta30340){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta30340 = meta30340;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async30339.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30341,meta30340__$1){
var self__ = this;
var _30341__$1 = this;
return (new cljs.core.async.t_cljs$core$async30339(self__.map_LT_,self__.f,self__.ch,meta30340__$1));
});

cljs.core.async.t_cljs$core$async30339.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30341){
var self__ = this;
var _30341__$1 = this;
return self__.meta30340;
});

cljs.core.async.t_cljs$core$async30339.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async30339.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async30339.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async30339.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async30339.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async30342 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30342 = (function (map_LT_,f,ch,meta30340,_,fn1,meta30343){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta30340 = meta30340;
this._ = _;
this.fn1 = fn1;
this.meta30343 = meta30343;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async30342.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_30344,meta30343__$1){
var self__ = this;
var _30344__$1 = this;
return (new cljs.core.async.t_cljs$core$async30342(self__.map_LT_,self__.f,self__.ch,self__.meta30340,self__._,self__.fn1,meta30343__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async30342.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_30344){
var self__ = this;
var _30344__$1 = this;
return self__.meta30343;
});})(___$1))
;

cljs.core.async.t_cljs$core$async30342.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async30342.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async30342.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__30332_SHARP_){
return f1.call(null,(((p1__30332_SHARP_ == null))?null:self__.f.call(null,p1__30332_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async30342.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta30340","meta30340",-1976693178,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async30339","cljs.core.async/t_cljs$core$async30339",-1025093784,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta30343","meta30343",36646886,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async30342.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30342.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30342";

cljs.core.async.t_cljs$core$async30342.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__17088__auto__,writer__17089__auto__,opt__17090__auto__){
return cljs.core._write.call(null,writer__17089__auto__,"cljs.core.async/t_cljs$core$async30342");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async30342 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async30342(map_LT___$1,f__$1,ch__$1,meta30340__$1,___$2,fn1__$1,meta30343){
return (new cljs.core.async.t_cljs$core$async30342(map_LT___$1,f__$1,ch__$1,meta30340__$1,___$2,fn1__$1,meta30343));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async30342(self__.map_LT_,self__.f,self__.ch,self__.meta30340,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__16478__auto__ = ret;
if(cljs.core.truth_(and__16478__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__16478__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async30339.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async30339.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async30339.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta30340","meta30340",-1976693178,null)], null);
});

cljs.core.async.t_cljs$core$async30339.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30339.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30339";

cljs.core.async.t_cljs$core$async30339.cljs$lang$ctorPrWriter = (function (this__17088__auto__,writer__17089__auto__,opt__17090__auto__){
return cljs.core._write.call(null,writer__17089__auto__,"cljs.core.async/t_cljs$core$async30339");
});

cljs.core.async.__GT_t_cljs$core$async30339 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async30339(map_LT___$1,f__$1,ch__$1,meta30340){
return (new cljs.core.async.t_cljs$core$async30339(map_LT___$1,f__$1,ch__$1,meta30340));
});

}

return (new cljs.core.async.t_cljs$core$async30339(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async30348 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30348 = (function (map_GT_,f,ch,meta30349){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta30349 = meta30349;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async30348.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30350,meta30349__$1){
var self__ = this;
var _30350__$1 = this;
return (new cljs.core.async.t_cljs$core$async30348(self__.map_GT_,self__.f,self__.ch,meta30349__$1));
});

cljs.core.async.t_cljs$core$async30348.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30350){
var self__ = this;
var _30350__$1 = this;
return self__.meta30349;
});

cljs.core.async.t_cljs$core$async30348.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async30348.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async30348.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async30348.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async30348.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async30348.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async30348.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta30349","meta30349",78081717,null)], null);
});

cljs.core.async.t_cljs$core$async30348.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30348.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30348";

cljs.core.async.t_cljs$core$async30348.cljs$lang$ctorPrWriter = (function (this__17088__auto__,writer__17089__auto__,opt__17090__auto__){
return cljs.core._write.call(null,writer__17089__auto__,"cljs.core.async/t_cljs$core$async30348");
});

cljs.core.async.__GT_t_cljs$core$async30348 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async30348(map_GT___$1,f__$1,ch__$1,meta30349){
return (new cljs.core.async.t_cljs$core$async30348(map_GT___$1,f__$1,ch__$1,meta30349));
});

}

return (new cljs.core.async.t_cljs$core$async30348(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async30354 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30354 = (function (filter_GT_,p,ch,meta30355){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta30355 = meta30355;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async30354.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30356,meta30355__$1){
var self__ = this;
var _30356__$1 = this;
return (new cljs.core.async.t_cljs$core$async30354(self__.filter_GT_,self__.p,self__.ch,meta30355__$1));
});

cljs.core.async.t_cljs$core$async30354.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30356){
var self__ = this;
var _30356__$1 = this;
return self__.meta30355;
});

cljs.core.async.t_cljs$core$async30354.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async30354.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async30354.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async30354.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async30354.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async30354.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async30354.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async30354.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta30355","meta30355",2012759973,null)], null);
});

cljs.core.async.t_cljs$core$async30354.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30354.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30354";

cljs.core.async.t_cljs$core$async30354.cljs$lang$ctorPrWriter = (function (this__17088__auto__,writer__17089__auto__,opt__17090__auto__){
return cljs.core._write.call(null,writer__17089__auto__,"cljs.core.async/t_cljs$core$async30354");
});

cljs.core.async.__GT_t_cljs$core$async30354 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async30354(filter_GT___$1,p__$1,ch__$1,meta30355){
return (new cljs.core.async.t_cljs$core$async30354(filter_GT___$1,p__$1,ch__$1,meta30355));
});

}

return (new cljs.core.async.t_cljs$core$async30354(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args30357 = [];
var len__17548__auto___30401 = arguments.length;
var i__17549__auto___30402 = (0);
while(true){
if((i__17549__auto___30402 < len__17548__auto___30401)){
args30357.push((arguments[i__17549__auto___30402]));

var G__30403 = (i__17549__auto___30402 + (1));
i__17549__auto___30402 = G__30403;
continue;
} else {
}
break;
}

var G__30359 = args30357.length;
switch (G__30359) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30357.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20810__auto___30405 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20810__auto___30405,out){
return (function (){
var f__20811__auto__ = (function (){var switch__20745__auto__ = ((function (c__20810__auto___30405,out){
return (function (state_30380){
var state_val_30381 = (state_30380[(1)]);
if((state_val_30381 === (7))){
var inst_30376 = (state_30380[(2)]);
var state_30380__$1 = state_30380;
var statearr_30382_30406 = state_30380__$1;
(statearr_30382_30406[(2)] = inst_30376);

(statearr_30382_30406[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30381 === (1))){
var state_30380__$1 = state_30380;
var statearr_30383_30407 = state_30380__$1;
(statearr_30383_30407[(2)] = null);

(statearr_30383_30407[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30381 === (4))){
var inst_30362 = (state_30380[(7)]);
var inst_30362__$1 = (state_30380[(2)]);
var inst_30363 = (inst_30362__$1 == null);
var state_30380__$1 = (function (){var statearr_30384 = state_30380;
(statearr_30384[(7)] = inst_30362__$1);

return statearr_30384;
})();
if(cljs.core.truth_(inst_30363)){
var statearr_30385_30408 = state_30380__$1;
(statearr_30385_30408[(1)] = (5));

} else {
var statearr_30386_30409 = state_30380__$1;
(statearr_30386_30409[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30381 === (6))){
var inst_30362 = (state_30380[(7)]);
var inst_30367 = p.call(null,inst_30362);
var state_30380__$1 = state_30380;
if(cljs.core.truth_(inst_30367)){
var statearr_30387_30410 = state_30380__$1;
(statearr_30387_30410[(1)] = (8));

} else {
var statearr_30388_30411 = state_30380__$1;
(statearr_30388_30411[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30381 === (3))){
var inst_30378 = (state_30380[(2)]);
var state_30380__$1 = state_30380;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30380__$1,inst_30378);
} else {
if((state_val_30381 === (2))){
var state_30380__$1 = state_30380;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30380__$1,(4),ch);
} else {
if((state_val_30381 === (11))){
var inst_30370 = (state_30380[(2)]);
var state_30380__$1 = state_30380;
var statearr_30389_30412 = state_30380__$1;
(statearr_30389_30412[(2)] = inst_30370);

(statearr_30389_30412[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30381 === (9))){
var state_30380__$1 = state_30380;
var statearr_30390_30413 = state_30380__$1;
(statearr_30390_30413[(2)] = null);

(statearr_30390_30413[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30381 === (5))){
var inst_30365 = cljs.core.async.close_BANG_.call(null,out);
var state_30380__$1 = state_30380;
var statearr_30391_30414 = state_30380__$1;
(statearr_30391_30414[(2)] = inst_30365);

(statearr_30391_30414[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30381 === (10))){
var inst_30373 = (state_30380[(2)]);
var state_30380__$1 = (function (){var statearr_30392 = state_30380;
(statearr_30392[(8)] = inst_30373);

return statearr_30392;
})();
var statearr_30393_30415 = state_30380__$1;
(statearr_30393_30415[(2)] = null);

(statearr_30393_30415[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30381 === (8))){
var inst_30362 = (state_30380[(7)]);
var state_30380__$1 = state_30380;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30380__$1,(11),out,inst_30362);
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
});})(c__20810__auto___30405,out))
;
return ((function (switch__20745__auto__,c__20810__auto___30405,out){
return (function() {
var cljs$core$async$state_machine__20746__auto__ = null;
var cljs$core$async$state_machine__20746__auto____0 = (function (){
var statearr_30397 = [null,null,null,null,null,null,null,null,null];
(statearr_30397[(0)] = cljs$core$async$state_machine__20746__auto__);

(statearr_30397[(1)] = (1));

return statearr_30397;
});
var cljs$core$async$state_machine__20746__auto____1 = (function (state_30380){
while(true){
var ret_value__20747__auto__ = (function (){try{while(true){
var result__20748__auto__ = switch__20745__auto__.call(null,state_30380);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20748__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20748__auto__;
}
break;
}
}catch (e30398){if((e30398 instanceof Object)){
var ex__20749__auto__ = e30398;
var statearr_30399_30416 = state_30380;
(statearr_30399_30416[(5)] = ex__20749__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30380);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30398;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20747__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30417 = state_30380;
state_30380 = G__30417;
continue;
} else {
return ret_value__20747__auto__;
}
break;
}
});
cljs$core$async$state_machine__20746__auto__ = function(state_30380){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20746__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20746__auto____1.call(this,state_30380);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20746__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20746__auto____0;
cljs$core$async$state_machine__20746__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20746__auto____1;
return cljs$core$async$state_machine__20746__auto__;
})()
;})(switch__20745__auto__,c__20810__auto___30405,out))
})();
var state__20812__auto__ = (function (){var statearr_30400 = f__20811__auto__.call(null);
(statearr_30400[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20810__auto___30405);

return statearr_30400;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20812__auto__);
});})(c__20810__auto___30405,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args30418 = [];
var len__17548__auto___30421 = arguments.length;
var i__17549__auto___30422 = (0);
while(true){
if((i__17549__auto___30422 < len__17548__auto___30421)){
args30418.push((arguments[i__17549__auto___30422]));

var G__30423 = (i__17549__auto___30422 + (1));
i__17549__auto___30422 = G__30423;
continue;
} else {
}
break;
}

var G__30420 = args30418.length;
switch (G__30420) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30418.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;
cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__20810__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20810__auto__){
return (function (){
var f__20811__auto__ = (function (){var switch__20745__auto__ = ((function (c__20810__auto__){
return (function (state_30590){
var state_val_30591 = (state_30590[(1)]);
if((state_val_30591 === (7))){
var inst_30586 = (state_30590[(2)]);
var state_30590__$1 = state_30590;
var statearr_30592_30633 = state_30590__$1;
(statearr_30592_30633[(2)] = inst_30586);

(statearr_30592_30633[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30591 === (20))){
var inst_30556 = (state_30590[(7)]);
var inst_30567 = (state_30590[(2)]);
var inst_30568 = cljs.core.next.call(null,inst_30556);
var inst_30542 = inst_30568;
var inst_30543 = null;
var inst_30544 = (0);
var inst_30545 = (0);
var state_30590__$1 = (function (){var statearr_30593 = state_30590;
(statearr_30593[(8)] = inst_30567);

(statearr_30593[(9)] = inst_30544);

(statearr_30593[(10)] = inst_30542);

(statearr_30593[(11)] = inst_30545);

(statearr_30593[(12)] = inst_30543);

return statearr_30593;
})();
var statearr_30594_30634 = state_30590__$1;
(statearr_30594_30634[(2)] = null);

(statearr_30594_30634[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30591 === (1))){
var state_30590__$1 = state_30590;
var statearr_30595_30635 = state_30590__$1;
(statearr_30595_30635[(2)] = null);

(statearr_30595_30635[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30591 === (4))){
var inst_30531 = (state_30590[(13)]);
var inst_30531__$1 = (state_30590[(2)]);
var inst_30532 = (inst_30531__$1 == null);
var state_30590__$1 = (function (){var statearr_30596 = state_30590;
(statearr_30596[(13)] = inst_30531__$1);

return statearr_30596;
})();
if(cljs.core.truth_(inst_30532)){
var statearr_30597_30636 = state_30590__$1;
(statearr_30597_30636[(1)] = (5));

} else {
var statearr_30598_30637 = state_30590__$1;
(statearr_30598_30637[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30591 === (15))){
var state_30590__$1 = state_30590;
var statearr_30602_30638 = state_30590__$1;
(statearr_30602_30638[(2)] = null);

(statearr_30602_30638[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30591 === (21))){
var state_30590__$1 = state_30590;
var statearr_30603_30639 = state_30590__$1;
(statearr_30603_30639[(2)] = null);

(statearr_30603_30639[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30591 === (13))){
var inst_30544 = (state_30590[(9)]);
var inst_30542 = (state_30590[(10)]);
var inst_30545 = (state_30590[(11)]);
var inst_30543 = (state_30590[(12)]);
var inst_30552 = (state_30590[(2)]);
var inst_30553 = (inst_30545 + (1));
var tmp30599 = inst_30544;
var tmp30600 = inst_30542;
var tmp30601 = inst_30543;
var inst_30542__$1 = tmp30600;
var inst_30543__$1 = tmp30601;
var inst_30544__$1 = tmp30599;
var inst_30545__$1 = inst_30553;
var state_30590__$1 = (function (){var statearr_30604 = state_30590;
(statearr_30604[(9)] = inst_30544__$1);

(statearr_30604[(10)] = inst_30542__$1);

(statearr_30604[(11)] = inst_30545__$1);

(statearr_30604[(14)] = inst_30552);

(statearr_30604[(12)] = inst_30543__$1);

return statearr_30604;
})();
var statearr_30605_30640 = state_30590__$1;
(statearr_30605_30640[(2)] = null);

(statearr_30605_30640[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30591 === (22))){
var state_30590__$1 = state_30590;
var statearr_30606_30641 = state_30590__$1;
(statearr_30606_30641[(2)] = null);

(statearr_30606_30641[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30591 === (6))){
var inst_30531 = (state_30590[(13)]);
var inst_30540 = f.call(null,inst_30531);
var inst_30541 = cljs.core.seq.call(null,inst_30540);
var inst_30542 = inst_30541;
var inst_30543 = null;
var inst_30544 = (0);
var inst_30545 = (0);
var state_30590__$1 = (function (){var statearr_30607 = state_30590;
(statearr_30607[(9)] = inst_30544);

(statearr_30607[(10)] = inst_30542);

(statearr_30607[(11)] = inst_30545);

(statearr_30607[(12)] = inst_30543);

return statearr_30607;
})();
var statearr_30608_30642 = state_30590__$1;
(statearr_30608_30642[(2)] = null);

(statearr_30608_30642[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30591 === (17))){
var inst_30556 = (state_30590[(7)]);
var inst_30560 = cljs.core.chunk_first.call(null,inst_30556);
var inst_30561 = cljs.core.chunk_rest.call(null,inst_30556);
var inst_30562 = cljs.core.count.call(null,inst_30560);
var inst_30542 = inst_30561;
var inst_30543 = inst_30560;
var inst_30544 = inst_30562;
var inst_30545 = (0);
var state_30590__$1 = (function (){var statearr_30609 = state_30590;
(statearr_30609[(9)] = inst_30544);

(statearr_30609[(10)] = inst_30542);

(statearr_30609[(11)] = inst_30545);

(statearr_30609[(12)] = inst_30543);

return statearr_30609;
})();
var statearr_30610_30643 = state_30590__$1;
(statearr_30610_30643[(2)] = null);

(statearr_30610_30643[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30591 === (3))){
var inst_30588 = (state_30590[(2)]);
var state_30590__$1 = state_30590;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30590__$1,inst_30588);
} else {
if((state_val_30591 === (12))){
var inst_30576 = (state_30590[(2)]);
var state_30590__$1 = state_30590;
var statearr_30611_30644 = state_30590__$1;
(statearr_30611_30644[(2)] = inst_30576);

(statearr_30611_30644[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30591 === (2))){
var state_30590__$1 = state_30590;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30590__$1,(4),in$);
} else {
if((state_val_30591 === (23))){
var inst_30584 = (state_30590[(2)]);
var state_30590__$1 = state_30590;
var statearr_30612_30645 = state_30590__$1;
(statearr_30612_30645[(2)] = inst_30584);

(statearr_30612_30645[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30591 === (19))){
var inst_30571 = (state_30590[(2)]);
var state_30590__$1 = state_30590;
var statearr_30613_30646 = state_30590__$1;
(statearr_30613_30646[(2)] = inst_30571);

(statearr_30613_30646[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30591 === (11))){
var inst_30542 = (state_30590[(10)]);
var inst_30556 = (state_30590[(7)]);
var inst_30556__$1 = cljs.core.seq.call(null,inst_30542);
var state_30590__$1 = (function (){var statearr_30614 = state_30590;
(statearr_30614[(7)] = inst_30556__$1);

return statearr_30614;
})();
if(inst_30556__$1){
var statearr_30615_30647 = state_30590__$1;
(statearr_30615_30647[(1)] = (14));

} else {
var statearr_30616_30648 = state_30590__$1;
(statearr_30616_30648[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30591 === (9))){
var inst_30578 = (state_30590[(2)]);
var inst_30579 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_30590__$1 = (function (){var statearr_30617 = state_30590;
(statearr_30617[(15)] = inst_30578);

return statearr_30617;
})();
if(cljs.core.truth_(inst_30579)){
var statearr_30618_30649 = state_30590__$1;
(statearr_30618_30649[(1)] = (21));

} else {
var statearr_30619_30650 = state_30590__$1;
(statearr_30619_30650[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30591 === (5))){
var inst_30534 = cljs.core.async.close_BANG_.call(null,out);
var state_30590__$1 = state_30590;
var statearr_30620_30651 = state_30590__$1;
(statearr_30620_30651[(2)] = inst_30534);

(statearr_30620_30651[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30591 === (14))){
var inst_30556 = (state_30590[(7)]);
var inst_30558 = cljs.core.chunked_seq_QMARK_.call(null,inst_30556);
var state_30590__$1 = state_30590;
if(inst_30558){
var statearr_30621_30652 = state_30590__$1;
(statearr_30621_30652[(1)] = (17));

} else {
var statearr_30622_30653 = state_30590__$1;
(statearr_30622_30653[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30591 === (16))){
var inst_30574 = (state_30590[(2)]);
var state_30590__$1 = state_30590;
var statearr_30623_30654 = state_30590__$1;
(statearr_30623_30654[(2)] = inst_30574);

(statearr_30623_30654[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30591 === (10))){
var inst_30545 = (state_30590[(11)]);
var inst_30543 = (state_30590[(12)]);
var inst_30550 = cljs.core._nth.call(null,inst_30543,inst_30545);
var state_30590__$1 = state_30590;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30590__$1,(13),out,inst_30550);
} else {
if((state_val_30591 === (18))){
var inst_30556 = (state_30590[(7)]);
var inst_30565 = cljs.core.first.call(null,inst_30556);
var state_30590__$1 = state_30590;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30590__$1,(20),out,inst_30565);
} else {
if((state_val_30591 === (8))){
var inst_30544 = (state_30590[(9)]);
var inst_30545 = (state_30590[(11)]);
var inst_30547 = (inst_30545 < inst_30544);
var inst_30548 = inst_30547;
var state_30590__$1 = state_30590;
if(cljs.core.truth_(inst_30548)){
var statearr_30624_30655 = state_30590__$1;
(statearr_30624_30655[(1)] = (10));

} else {
var statearr_30625_30656 = state_30590__$1;
(statearr_30625_30656[(1)] = (11));

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
});})(c__20810__auto__))
;
return ((function (switch__20745__auto__,c__20810__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__20746__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__20746__auto____0 = (function (){
var statearr_30629 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30629[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__20746__auto__);

(statearr_30629[(1)] = (1));

return statearr_30629;
});
var cljs$core$async$mapcat_STAR__$_state_machine__20746__auto____1 = (function (state_30590){
while(true){
var ret_value__20747__auto__ = (function (){try{while(true){
var result__20748__auto__ = switch__20745__auto__.call(null,state_30590);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20748__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20748__auto__;
}
break;
}
}catch (e30630){if((e30630 instanceof Object)){
var ex__20749__auto__ = e30630;
var statearr_30631_30657 = state_30590;
(statearr_30631_30657[(5)] = ex__20749__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30590);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30630;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20747__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30658 = state_30590;
state_30590 = G__30658;
continue;
} else {
return ret_value__20747__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__20746__auto__ = function(state_30590){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__20746__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__20746__auto____1.call(this,state_30590);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__20746__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__20746__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__20746__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__20746__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__20746__auto__;
})()
;})(switch__20745__auto__,c__20810__auto__))
})();
var state__20812__auto__ = (function (){var statearr_30632 = f__20811__auto__.call(null);
(statearr_30632[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20810__auto__);

return statearr_30632;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20812__auto__);
});})(c__20810__auto__))
);

return c__20810__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args30659 = [];
var len__17548__auto___30662 = arguments.length;
var i__17549__auto___30663 = (0);
while(true){
if((i__17549__auto___30663 < len__17548__auto___30662)){
args30659.push((arguments[i__17549__auto___30663]));

var G__30664 = (i__17549__auto___30663 + (1));
i__17549__auto___30663 = G__30664;
continue;
} else {
}
break;
}

var G__30661 = args30659.length;
switch (G__30661) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30659.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args30666 = [];
var len__17548__auto___30669 = arguments.length;
var i__17549__auto___30670 = (0);
while(true){
if((i__17549__auto___30670 < len__17548__auto___30669)){
args30666.push((arguments[i__17549__auto___30670]));

var G__30671 = (i__17549__auto___30670 + (1));
i__17549__auto___30670 = G__30671;
continue;
} else {
}
break;
}

var G__30668 = args30666.length;
switch (G__30668) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30666.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args30673 = [];
var len__17548__auto___30724 = arguments.length;
var i__17549__auto___30725 = (0);
while(true){
if((i__17549__auto___30725 < len__17548__auto___30724)){
args30673.push((arguments[i__17549__auto___30725]));

var G__30726 = (i__17549__auto___30725 + (1));
i__17549__auto___30725 = G__30726;
continue;
} else {
}
break;
}

var G__30675 = args30673.length;
switch (G__30675) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30673.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20810__auto___30728 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20810__auto___30728,out){
return (function (){
var f__20811__auto__ = (function (){var switch__20745__auto__ = ((function (c__20810__auto___30728,out){
return (function (state_30699){
var state_val_30700 = (state_30699[(1)]);
if((state_val_30700 === (7))){
var inst_30694 = (state_30699[(2)]);
var state_30699__$1 = state_30699;
var statearr_30701_30729 = state_30699__$1;
(statearr_30701_30729[(2)] = inst_30694);

(statearr_30701_30729[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30700 === (1))){
var inst_30676 = null;
var state_30699__$1 = (function (){var statearr_30702 = state_30699;
(statearr_30702[(7)] = inst_30676);

return statearr_30702;
})();
var statearr_30703_30730 = state_30699__$1;
(statearr_30703_30730[(2)] = null);

(statearr_30703_30730[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30700 === (4))){
var inst_30679 = (state_30699[(8)]);
var inst_30679__$1 = (state_30699[(2)]);
var inst_30680 = (inst_30679__$1 == null);
var inst_30681 = cljs.core.not.call(null,inst_30680);
var state_30699__$1 = (function (){var statearr_30704 = state_30699;
(statearr_30704[(8)] = inst_30679__$1);

return statearr_30704;
})();
if(inst_30681){
var statearr_30705_30731 = state_30699__$1;
(statearr_30705_30731[(1)] = (5));

} else {
var statearr_30706_30732 = state_30699__$1;
(statearr_30706_30732[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30700 === (6))){
var state_30699__$1 = state_30699;
var statearr_30707_30733 = state_30699__$1;
(statearr_30707_30733[(2)] = null);

(statearr_30707_30733[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30700 === (3))){
var inst_30696 = (state_30699[(2)]);
var inst_30697 = cljs.core.async.close_BANG_.call(null,out);
var state_30699__$1 = (function (){var statearr_30708 = state_30699;
(statearr_30708[(9)] = inst_30696);

return statearr_30708;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30699__$1,inst_30697);
} else {
if((state_val_30700 === (2))){
var state_30699__$1 = state_30699;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30699__$1,(4),ch);
} else {
if((state_val_30700 === (11))){
var inst_30679 = (state_30699[(8)]);
var inst_30688 = (state_30699[(2)]);
var inst_30676 = inst_30679;
var state_30699__$1 = (function (){var statearr_30709 = state_30699;
(statearr_30709[(10)] = inst_30688);

(statearr_30709[(7)] = inst_30676);

return statearr_30709;
})();
var statearr_30710_30734 = state_30699__$1;
(statearr_30710_30734[(2)] = null);

(statearr_30710_30734[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30700 === (9))){
var inst_30679 = (state_30699[(8)]);
var state_30699__$1 = state_30699;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30699__$1,(11),out,inst_30679);
} else {
if((state_val_30700 === (5))){
var inst_30676 = (state_30699[(7)]);
var inst_30679 = (state_30699[(8)]);
var inst_30683 = cljs.core._EQ_.call(null,inst_30679,inst_30676);
var state_30699__$1 = state_30699;
if(inst_30683){
var statearr_30712_30735 = state_30699__$1;
(statearr_30712_30735[(1)] = (8));

} else {
var statearr_30713_30736 = state_30699__$1;
(statearr_30713_30736[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30700 === (10))){
var inst_30691 = (state_30699[(2)]);
var state_30699__$1 = state_30699;
var statearr_30714_30737 = state_30699__$1;
(statearr_30714_30737[(2)] = inst_30691);

(statearr_30714_30737[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30700 === (8))){
var inst_30676 = (state_30699[(7)]);
var tmp30711 = inst_30676;
var inst_30676__$1 = tmp30711;
var state_30699__$1 = (function (){var statearr_30715 = state_30699;
(statearr_30715[(7)] = inst_30676__$1);

return statearr_30715;
})();
var statearr_30716_30738 = state_30699__$1;
(statearr_30716_30738[(2)] = null);

(statearr_30716_30738[(1)] = (2));


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
});})(c__20810__auto___30728,out))
;
return ((function (switch__20745__auto__,c__20810__auto___30728,out){
return (function() {
var cljs$core$async$state_machine__20746__auto__ = null;
var cljs$core$async$state_machine__20746__auto____0 = (function (){
var statearr_30720 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30720[(0)] = cljs$core$async$state_machine__20746__auto__);

(statearr_30720[(1)] = (1));

return statearr_30720;
});
var cljs$core$async$state_machine__20746__auto____1 = (function (state_30699){
while(true){
var ret_value__20747__auto__ = (function (){try{while(true){
var result__20748__auto__ = switch__20745__auto__.call(null,state_30699);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20748__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20748__auto__;
}
break;
}
}catch (e30721){if((e30721 instanceof Object)){
var ex__20749__auto__ = e30721;
var statearr_30722_30739 = state_30699;
(statearr_30722_30739[(5)] = ex__20749__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30699);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30721;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20747__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30740 = state_30699;
state_30699 = G__30740;
continue;
} else {
return ret_value__20747__auto__;
}
break;
}
});
cljs$core$async$state_machine__20746__auto__ = function(state_30699){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20746__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20746__auto____1.call(this,state_30699);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20746__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20746__auto____0;
cljs$core$async$state_machine__20746__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20746__auto____1;
return cljs$core$async$state_machine__20746__auto__;
})()
;})(switch__20745__auto__,c__20810__auto___30728,out))
})();
var state__20812__auto__ = (function (){var statearr_30723 = f__20811__auto__.call(null);
(statearr_30723[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20810__auto___30728);

return statearr_30723;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20812__auto__);
});})(c__20810__auto___30728,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args30741 = [];
var len__17548__auto___30811 = arguments.length;
var i__17549__auto___30812 = (0);
while(true){
if((i__17549__auto___30812 < len__17548__auto___30811)){
args30741.push((arguments[i__17549__auto___30812]));

var G__30813 = (i__17549__auto___30812 + (1));
i__17549__auto___30812 = G__30813;
continue;
} else {
}
break;
}

var G__30743 = args30741.length;
switch (G__30743) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30741.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20810__auto___30815 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20810__auto___30815,out){
return (function (){
var f__20811__auto__ = (function (){var switch__20745__auto__ = ((function (c__20810__auto___30815,out){
return (function (state_30781){
var state_val_30782 = (state_30781[(1)]);
if((state_val_30782 === (7))){
var inst_30777 = (state_30781[(2)]);
var state_30781__$1 = state_30781;
var statearr_30783_30816 = state_30781__$1;
(statearr_30783_30816[(2)] = inst_30777);

(statearr_30783_30816[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30782 === (1))){
var inst_30744 = (new Array(n));
var inst_30745 = inst_30744;
var inst_30746 = (0);
var state_30781__$1 = (function (){var statearr_30784 = state_30781;
(statearr_30784[(7)] = inst_30746);

(statearr_30784[(8)] = inst_30745);

return statearr_30784;
})();
var statearr_30785_30817 = state_30781__$1;
(statearr_30785_30817[(2)] = null);

(statearr_30785_30817[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30782 === (4))){
var inst_30749 = (state_30781[(9)]);
var inst_30749__$1 = (state_30781[(2)]);
var inst_30750 = (inst_30749__$1 == null);
var inst_30751 = cljs.core.not.call(null,inst_30750);
var state_30781__$1 = (function (){var statearr_30786 = state_30781;
(statearr_30786[(9)] = inst_30749__$1);

return statearr_30786;
})();
if(inst_30751){
var statearr_30787_30818 = state_30781__$1;
(statearr_30787_30818[(1)] = (5));

} else {
var statearr_30788_30819 = state_30781__$1;
(statearr_30788_30819[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30782 === (15))){
var inst_30771 = (state_30781[(2)]);
var state_30781__$1 = state_30781;
var statearr_30789_30820 = state_30781__$1;
(statearr_30789_30820[(2)] = inst_30771);

(statearr_30789_30820[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30782 === (13))){
var state_30781__$1 = state_30781;
var statearr_30790_30821 = state_30781__$1;
(statearr_30790_30821[(2)] = null);

(statearr_30790_30821[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30782 === (6))){
var inst_30746 = (state_30781[(7)]);
var inst_30767 = (inst_30746 > (0));
var state_30781__$1 = state_30781;
if(cljs.core.truth_(inst_30767)){
var statearr_30791_30822 = state_30781__$1;
(statearr_30791_30822[(1)] = (12));

} else {
var statearr_30792_30823 = state_30781__$1;
(statearr_30792_30823[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30782 === (3))){
var inst_30779 = (state_30781[(2)]);
var state_30781__$1 = state_30781;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30781__$1,inst_30779);
} else {
if((state_val_30782 === (12))){
var inst_30745 = (state_30781[(8)]);
var inst_30769 = cljs.core.vec.call(null,inst_30745);
var state_30781__$1 = state_30781;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30781__$1,(15),out,inst_30769);
} else {
if((state_val_30782 === (2))){
var state_30781__$1 = state_30781;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30781__$1,(4),ch);
} else {
if((state_val_30782 === (11))){
var inst_30761 = (state_30781[(2)]);
var inst_30762 = (new Array(n));
var inst_30745 = inst_30762;
var inst_30746 = (0);
var state_30781__$1 = (function (){var statearr_30793 = state_30781;
(statearr_30793[(7)] = inst_30746);

(statearr_30793[(8)] = inst_30745);

(statearr_30793[(10)] = inst_30761);

return statearr_30793;
})();
var statearr_30794_30824 = state_30781__$1;
(statearr_30794_30824[(2)] = null);

(statearr_30794_30824[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30782 === (9))){
var inst_30745 = (state_30781[(8)]);
var inst_30759 = cljs.core.vec.call(null,inst_30745);
var state_30781__$1 = state_30781;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30781__$1,(11),out,inst_30759);
} else {
if((state_val_30782 === (5))){
var inst_30746 = (state_30781[(7)]);
var inst_30745 = (state_30781[(8)]);
var inst_30754 = (state_30781[(11)]);
var inst_30749 = (state_30781[(9)]);
var inst_30753 = (inst_30745[inst_30746] = inst_30749);
var inst_30754__$1 = (inst_30746 + (1));
var inst_30755 = (inst_30754__$1 < n);
var state_30781__$1 = (function (){var statearr_30795 = state_30781;
(statearr_30795[(12)] = inst_30753);

(statearr_30795[(11)] = inst_30754__$1);

return statearr_30795;
})();
if(cljs.core.truth_(inst_30755)){
var statearr_30796_30825 = state_30781__$1;
(statearr_30796_30825[(1)] = (8));

} else {
var statearr_30797_30826 = state_30781__$1;
(statearr_30797_30826[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30782 === (14))){
var inst_30774 = (state_30781[(2)]);
var inst_30775 = cljs.core.async.close_BANG_.call(null,out);
var state_30781__$1 = (function (){var statearr_30799 = state_30781;
(statearr_30799[(13)] = inst_30774);

return statearr_30799;
})();
var statearr_30800_30827 = state_30781__$1;
(statearr_30800_30827[(2)] = inst_30775);

(statearr_30800_30827[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30782 === (10))){
var inst_30765 = (state_30781[(2)]);
var state_30781__$1 = state_30781;
var statearr_30801_30828 = state_30781__$1;
(statearr_30801_30828[(2)] = inst_30765);

(statearr_30801_30828[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30782 === (8))){
var inst_30745 = (state_30781[(8)]);
var inst_30754 = (state_30781[(11)]);
var tmp30798 = inst_30745;
var inst_30745__$1 = tmp30798;
var inst_30746 = inst_30754;
var state_30781__$1 = (function (){var statearr_30802 = state_30781;
(statearr_30802[(7)] = inst_30746);

(statearr_30802[(8)] = inst_30745__$1);

return statearr_30802;
})();
var statearr_30803_30829 = state_30781__$1;
(statearr_30803_30829[(2)] = null);

(statearr_30803_30829[(1)] = (2));


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
});})(c__20810__auto___30815,out))
;
return ((function (switch__20745__auto__,c__20810__auto___30815,out){
return (function() {
var cljs$core$async$state_machine__20746__auto__ = null;
var cljs$core$async$state_machine__20746__auto____0 = (function (){
var statearr_30807 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30807[(0)] = cljs$core$async$state_machine__20746__auto__);

(statearr_30807[(1)] = (1));

return statearr_30807;
});
var cljs$core$async$state_machine__20746__auto____1 = (function (state_30781){
while(true){
var ret_value__20747__auto__ = (function (){try{while(true){
var result__20748__auto__ = switch__20745__auto__.call(null,state_30781);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20748__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20748__auto__;
}
break;
}
}catch (e30808){if((e30808 instanceof Object)){
var ex__20749__auto__ = e30808;
var statearr_30809_30830 = state_30781;
(statearr_30809_30830[(5)] = ex__20749__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30781);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30808;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20747__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30831 = state_30781;
state_30781 = G__30831;
continue;
} else {
return ret_value__20747__auto__;
}
break;
}
});
cljs$core$async$state_machine__20746__auto__ = function(state_30781){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20746__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20746__auto____1.call(this,state_30781);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20746__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20746__auto____0;
cljs$core$async$state_machine__20746__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20746__auto____1;
return cljs$core$async$state_machine__20746__auto__;
})()
;})(switch__20745__auto__,c__20810__auto___30815,out))
})();
var state__20812__auto__ = (function (){var statearr_30810 = f__20811__auto__.call(null);
(statearr_30810[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20810__auto___30815);

return statearr_30810;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20812__auto__);
});})(c__20810__auto___30815,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args30832 = [];
var len__17548__auto___30906 = arguments.length;
var i__17549__auto___30907 = (0);
while(true){
if((i__17549__auto___30907 < len__17548__auto___30906)){
args30832.push((arguments[i__17549__auto___30907]));

var G__30908 = (i__17549__auto___30907 + (1));
i__17549__auto___30907 = G__30908;
continue;
} else {
}
break;
}

var G__30834 = args30832.length;
switch (G__30834) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30832.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20810__auto___30910 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20810__auto___30910,out){
return (function (){
var f__20811__auto__ = (function (){var switch__20745__auto__ = ((function (c__20810__auto___30910,out){
return (function (state_30876){
var state_val_30877 = (state_30876[(1)]);
if((state_val_30877 === (7))){
var inst_30872 = (state_30876[(2)]);
var state_30876__$1 = state_30876;
var statearr_30878_30911 = state_30876__$1;
(statearr_30878_30911[(2)] = inst_30872);

(statearr_30878_30911[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30877 === (1))){
var inst_30835 = [];
var inst_30836 = inst_30835;
var inst_30837 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_30876__$1 = (function (){var statearr_30879 = state_30876;
(statearr_30879[(7)] = inst_30836);

(statearr_30879[(8)] = inst_30837);

return statearr_30879;
})();
var statearr_30880_30912 = state_30876__$1;
(statearr_30880_30912[(2)] = null);

(statearr_30880_30912[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30877 === (4))){
var inst_30840 = (state_30876[(9)]);
var inst_30840__$1 = (state_30876[(2)]);
var inst_30841 = (inst_30840__$1 == null);
var inst_30842 = cljs.core.not.call(null,inst_30841);
var state_30876__$1 = (function (){var statearr_30881 = state_30876;
(statearr_30881[(9)] = inst_30840__$1);

return statearr_30881;
})();
if(inst_30842){
var statearr_30882_30913 = state_30876__$1;
(statearr_30882_30913[(1)] = (5));

} else {
var statearr_30883_30914 = state_30876__$1;
(statearr_30883_30914[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30877 === (15))){
var inst_30866 = (state_30876[(2)]);
var state_30876__$1 = state_30876;
var statearr_30884_30915 = state_30876__$1;
(statearr_30884_30915[(2)] = inst_30866);

(statearr_30884_30915[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30877 === (13))){
var state_30876__$1 = state_30876;
var statearr_30885_30916 = state_30876__$1;
(statearr_30885_30916[(2)] = null);

(statearr_30885_30916[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30877 === (6))){
var inst_30836 = (state_30876[(7)]);
var inst_30861 = inst_30836.length;
var inst_30862 = (inst_30861 > (0));
var state_30876__$1 = state_30876;
if(cljs.core.truth_(inst_30862)){
var statearr_30886_30917 = state_30876__$1;
(statearr_30886_30917[(1)] = (12));

} else {
var statearr_30887_30918 = state_30876__$1;
(statearr_30887_30918[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30877 === (3))){
var inst_30874 = (state_30876[(2)]);
var state_30876__$1 = state_30876;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30876__$1,inst_30874);
} else {
if((state_val_30877 === (12))){
var inst_30836 = (state_30876[(7)]);
var inst_30864 = cljs.core.vec.call(null,inst_30836);
var state_30876__$1 = state_30876;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30876__$1,(15),out,inst_30864);
} else {
if((state_val_30877 === (2))){
var state_30876__$1 = state_30876;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30876__$1,(4),ch);
} else {
if((state_val_30877 === (11))){
var inst_30840 = (state_30876[(9)]);
var inst_30844 = (state_30876[(10)]);
var inst_30854 = (state_30876[(2)]);
var inst_30855 = [];
var inst_30856 = inst_30855.push(inst_30840);
var inst_30836 = inst_30855;
var inst_30837 = inst_30844;
var state_30876__$1 = (function (){var statearr_30888 = state_30876;
(statearr_30888[(7)] = inst_30836);

(statearr_30888[(8)] = inst_30837);

(statearr_30888[(11)] = inst_30856);

(statearr_30888[(12)] = inst_30854);

return statearr_30888;
})();
var statearr_30889_30919 = state_30876__$1;
(statearr_30889_30919[(2)] = null);

(statearr_30889_30919[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30877 === (9))){
var inst_30836 = (state_30876[(7)]);
var inst_30852 = cljs.core.vec.call(null,inst_30836);
var state_30876__$1 = state_30876;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30876__$1,(11),out,inst_30852);
} else {
if((state_val_30877 === (5))){
var inst_30837 = (state_30876[(8)]);
var inst_30840 = (state_30876[(9)]);
var inst_30844 = (state_30876[(10)]);
var inst_30844__$1 = f.call(null,inst_30840);
var inst_30845 = cljs.core._EQ_.call(null,inst_30844__$1,inst_30837);
var inst_30846 = cljs.core.keyword_identical_QMARK_.call(null,inst_30837,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_30847 = (inst_30845) || (inst_30846);
var state_30876__$1 = (function (){var statearr_30890 = state_30876;
(statearr_30890[(10)] = inst_30844__$1);

return statearr_30890;
})();
if(cljs.core.truth_(inst_30847)){
var statearr_30891_30920 = state_30876__$1;
(statearr_30891_30920[(1)] = (8));

} else {
var statearr_30892_30921 = state_30876__$1;
(statearr_30892_30921[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30877 === (14))){
var inst_30869 = (state_30876[(2)]);
var inst_30870 = cljs.core.async.close_BANG_.call(null,out);
var state_30876__$1 = (function (){var statearr_30894 = state_30876;
(statearr_30894[(13)] = inst_30869);

return statearr_30894;
})();
var statearr_30895_30922 = state_30876__$1;
(statearr_30895_30922[(2)] = inst_30870);

(statearr_30895_30922[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30877 === (10))){
var inst_30859 = (state_30876[(2)]);
var state_30876__$1 = state_30876;
var statearr_30896_30923 = state_30876__$1;
(statearr_30896_30923[(2)] = inst_30859);

(statearr_30896_30923[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30877 === (8))){
var inst_30836 = (state_30876[(7)]);
var inst_30840 = (state_30876[(9)]);
var inst_30844 = (state_30876[(10)]);
var inst_30849 = inst_30836.push(inst_30840);
var tmp30893 = inst_30836;
var inst_30836__$1 = tmp30893;
var inst_30837 = inst_30844;
var state_30876__$1 = (function (){var statearr_30897 = state_30876;
(statearr_30897[(7)] = inst_30836__$1);

(statearr_30897[(8)] = inst_30837);

(statearr_30897[(14)] = inst_30849);

return statearr_30897;
})();
var statearr_30898_30924 = state_30876__$1;
(statearr_30898_30924[(2)] = null);

(statearr_30898_30924[(1)] = (2));


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
});})(c__20810__auto___30910,out))
;
return ((function (switch__20745__auto__,c__20810__auto___30910,out){
return (function() {
var cljs$core$async$state_machine__20746__auto__ = null;
var cljs$core$async$state_machine__20746__auto____0 = (function (){
var statearr_30902 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30902[(0)] = cljs$core$async$state_machine__20746__auto__);

(statearr_30902[(1)] = (1));

return statearr_30902;
});
var cljs$core$async$state_machine__20746__auto____1 = (function (state_30876){
while(true){
var ret_value__20747__auto__ = (function (){try{while(true){
var result__20748__auto__ = switch__20745__auto__.call(null,state_30876);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20748__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20748__auto__;
}
break;
}
}catch (e30903){if((e30903 instanceof Object)){
var ex__20749__auto__ = e30903;
var statearr_30904_30925 = state_30876;
(statearr_30904_30925[(5)] = ex__20749__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30876);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30903;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20747__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30926 = state_30876;
state_30876 = G__30926;
continue;
} else {
return ret_value__20747__auto__;
}
break;
}
});
cljs$core$async$state_machine__20746__auto__ = function(state_30876){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20746__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20746__auto____1.call(this,state_30876);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20746__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20746__auto____0;
cljs$core$async$state_machine__20746__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20746__auto____1;
return cljs$core$async$state_machine__20746__auto__;
})()
;})(switch__20745__auto__,c__20810__auto___30910,out))
})();
var state__20812__auto__ = (function (){var statearr_30905 = f__20811__auto__.call(null);
(statearr_30905[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20810__auto___30910);

return statearr_30905;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20812__auto__);
});})(c__20810__auto___30910,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map?rel=1441995399185