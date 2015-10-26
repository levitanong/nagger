// Compiled by ClojureScript 1.7.122 {:static-fns true, :optimize-constants true}
goog.provide('hoplon.svg');
goog.require('cljs.core');
goog.require('hoplon.core');
hoplon.svg.make_svg_ctor = (function hoplon$svg$make_svg_ctor(tag){
var xmlns = "http://www.w3.org/2000/svg";
return ((function (xmlns){
return (function() { 
var G__13215__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hoplon.core.ensure_kids_BANG_(document.createElementNS(xmlns,tag)),args);
};
var G__13215 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__13216__i = 0, G__13216__a = new Array(arguments.length -  0);
while (G__13216__i < G__13216__a.length) {G__13216__a[G__13216__i] = arguments[G__13216__i + 0]; ++G__13216__i;}
  args = new cljs.core.IndexedSeq(G__13216__a,0);
} 
return G__13215__delegate.call(this,args);};
G__13215.cljs$lang$maxFixedArity = 0;
G__13215.cljs$lang$applyTo = (function (arglist__13217){
var args = cljs.core.seq(arglist__13217);
return G__13215__delegate(args);
});
G__13215.cljs$core$IFn$_invoke$arity$variadic = G__13215__delegate;
return G__13215;
})()
;
;})(xmlns))
});
hoplon.svg.a = hoplon.svg.make_svg_ctor("svg:a");
hoplon.svg.altGlyph = hoplon.svg.make_svg_ctor("svg:altGlyph");
hoplon.svg.altGlyphDef = hoplon.svg.make_svg_ctor("svg:altGlyphDef");
hoplon.svg.altGlyphItem = hoplon.svg.make_svg_ctor("svg:altGlyphItem");
hoplon.svg.animate = hoplon.svg.make_svg_ctor("svg:animate");
hoplon.svg.animateColor = hoplon.svg.make_svg_ctor("svg:animateColor");
hoplon.svg.animateMotion = hoplon.svg.make_svg_ctor("svg:animateMotion");
hoplon.svg.animateTransform = hoplon.svg.make_svg_ctor("svg:animateTransform");
hoplon.svg.circle = hoplon.svg.make_svg_ctor("svg:circle");
hoplon.svg.clipPath = hoplon.svg.make_svg_ctor("svg:clipPath");
hoplon.svg.color_profile = hoplon.svg.make_svg_ctor("svg:color-profile");
hoplon.svg.cursor = hoplon.svg.make_svg_ctor("svg:cursor");
hoplon.svg.defs = hoplon.svg.make_svg_ctor("svg:defs");
hoplon.svg.desc = hoplon.svg.make_svg_ctor("svg:desc");
hoplon.svg.ellipse = hoplon.svg.make_svg_ctor("svg:ellipse");
hoplon.svg.feBlend = hoplon.svg.make_svg_ctor("svg:feBlend");
hoplon.svg.feColorMatrix = hoplon.svg.make_svg_ctor("svg:feColorMatrix");
hoplon.svg.feComponentTransfer = hoplon.svg.make_svg_ctor("svg:feComponentTransfer");
hoplon.svg.feComposite = hoplon.svg.make_svg_ctor("svg:feComposite");
hoplon.svg.feConvolveMatrix = hoplon.svg.make_svg_ctor("svg:feConvolveMatrix");
hoplon.svg.feDiffuseLighting = hoplon.svg.make_svg_ctor("svg:feDiffuseLighting");
hoplon.svg.feDisplacementMap = hoplon.svg.make_svg_ctor("svg:feDisplacementMap");
hoplon.svg.feDistantLight = hoplon.svg.make_svg_ctor("svg:feDistantLight");
hoplon.svg.feFlood = hoplon.svg.make_svg_ctor("svg:feFlood");
hoplon.svg.feFuncA = hoplon.svg.make_svg_ctor("svg:feFuncA");
hoplon.svg.feFuncB = hoplon.svg.make_svg_ctor("svg:feFuncB");
hoplon.svg.feFuncG = hoplon.svg.make_svg_ctor("svg:feFuncG");
hoplon.svg.feFuncR = hoplon.svg.make_svg_ctor("svg:feFuncR");
hoplon.svg.feGaussianBlur = hoplon.svg.make_svg_ctor("svg:feGaussianBlur");
hoplon.svg.feImage = hoplon.svg.make_svg_ctor("svg:feImage");
hoplon.svg.feMerge = hoplon.svg.make_svg_ctor("svg:feMerge");
hoplon.svg.feMergeNode = hoplon.svg.make_svg_ctor("svg:feMergeNode");
hoplon.svg.feMorphology = hoplon.svg.make_svg_ctor("svg:feMorphology");
hoplon.svg.feOffset = hoplon.svg.make_svg_ctor("svg:feOffset");
hoplon.svg.fePointLight = hoplon.svg.make_svg_ctor("svg:fePointLight");
hoplon.svg.feSpecularLighting = hoplon.svg.make_svg_ctor("svg:feSpecularLighting");
hoplon.svg.feSpotLight = hoplon.svg.make_svg_ctor("svg:feSpotLight");
hoplon.svg.feTile = hoplon.svg.make_svg_ctor("svg:feTile");
hoplon.svg.feTurbulence = hoplon.svg.make_svg_ctor("svg:feTurbulence");
hoplon.svg.filter = hoplon.svg.make_svg_ctor("svg:filter");
hoplon.svg.font = hoplon.svg.make_svg_ctor("svg:font");
hoplon.svg.font_face = hoplon.svg.make_svg_ctor("svg:font-face");
hoplon.svg.font_face_format = hoplon.svg.make_svg_ctor("svg:font-face-format");
hoplon.svg.font_face_name = hoplon.svg.make_svg_ctor("svg:font-face-name");
hoplon.svg.font_face_src = hoplon.svg.make_svg_ctor("svg:font-face-src");
hoplon.svg.font_face_uri = hoplon.svg.make_svg_ctor("svg:font-face-uri");
hoplon.svg.foreignObject = hoplon.svg.make_svg_ctor("svg:foreignObject");
hoplon.svg.g = hoplon.svg.make_svg_ctor("svg:g");
hoplon.svg.glyph = hoplon.svg.make_svg_ctor("svg:glyph");
hoplon.svg.glyphRef = hoplon.svg.make_svg_ctor("svg:glyphRef");
hoplon.svg.hkern = hoplon.svg.make_svg_ctor("svg:hkern");
hoplon.svg.image = hoplon.svg.make_svg_ctor("svg:image");
hoplon.svg.line = hoplon.svg.make_svg_ctor("svg:line");
hoplon.svg.linearGradient = hoplon.svg.make_svg_ctor("svg:linearGradient");
hoplon.svg.marker = hoplon.svg.make_svg_ctor("svg:marker");
hoplon.svg.mask = hoplon.svg.make_svg_ctor("svg:mask");
hoplon.svg.metadata = hoplon.svg.make_svg_ctor("svg:metadata");
hoplon.svg.missing_glyph = hoplon.svg.make_svg_ctor("svg:missing-glyph");
hoplon.svg.mpath = hoplon.svg.make_svg_ctor("svg:mpath");
hoplon.svg.path = hoplon.svg.make_svg_ctor("svg:path");
hoplon.svg.pattern = hoplon.svg.make_svg_ctor("svg:pattern");
hoplon.svg.polygon = hoplon.svg.make_svg_ctor("svg:polygon");
hoplon.svg.polyline = hoplon.svg.make_svg_ctor("svg:polyline");
hoplon.svg.radialGradient = hoplon.svg.make_svg_ctor("svg:radialGradient");
hoplon.svg.rect = hoplon.svg.make_svg_ctor("svg:rect");
hoplon.svg.script = hoplon.svg.make_svg_ctor("svg:script");
hoplon.svg.set = hoplon.svg.make_svg_ctor("svg:set");
hoplon.svg.stop = hoplon.svg.make_svg_ctor("svg:stop");
hoplon.svg.style = hoplon.svg.make_svg_ctor("svg:style");
hoplon.svg.svg = hoplon.svg.make_svg_ctor("svg:svg");
hoplon.svg.switch$ = hoplon.svg.make_svg_ctor("svg:switch");
hoplon.svg.symbol = hoplon.svg.make_svg_ctor("svg:symbol");
hoplon.svg.text = hoplon.svg.make_svg_ctor("svg:text");
hoplon.svg.textPath = hoplon.svg.make_svg_ctor("svg:textPath");
hoplon.svg.title = hoplon.svg.make_svg_ctor("svg:title");
hoplon.svg.tref = hoplon.svg.make_svg_ctor("svg:tref");
hoplon.svg.tspan = hoplon.svg.make_svg_ctor("svg:tspan");
hoplon.svg.use = hoplon.svg.make_svg_ctor("svg:use");
hoplon.svg.view = hoplon.svg.make_svg_ctor("svg:view");
hoplon.svg.vkern = hoplon.svg.make_svg_ctor("svg:vkern");
