// Compiled by ClojureScript 1.7.122 {}
goog.provide('hoplon.svg');
goog.require('cljs.core');
goog.require('hoplon.core');
hoplon.svg.make_svg_ctor = (function hoplon$svg$make_svg_ctor(tag){
var xmlns = "http://www.w3.org/2000/svg";
return ((function (xmlns){
return (function() { 
var G__9136__delegate = function (args){
return cljs.core.apply.call(null,hoplon.core.ensure_kids_BANG_.call(null,document.createElementNS(xmlns,tag)),args);
};
var G__9136 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9137__i = 0, G__9137__a = new Array(arguments.length -  0);
while (G__9137__i < G__9137__a.length) {G__9137__a[G__9137__i] = arguments[G__9137__i + 0]; ++G__9137__i;}
  args = new cljs.core.IndexedSeq(G__9137__a,0);
} 
return G__9136__delegate.call(this,args);};
G__9136.cljs$lang$maxFixedArity = 0;
G__9136.cljs$lang$applyTo = (function (arglist__9138){
var args = cljs.core.seq(arglist__9138);
return G__9136__delegate(args);
});
G__9136.cljs$core$IFn$_invoke$arity$variadic = G__9136__delegate;
return G__9136;
})()
;
;})(xmlns))
});
hoplon.svg.a = hoplon.svg.make_svg_ctor.call(null,"svg:a");
hoplon.svg.altGlyph = hoplon.svg.make_svg_ctor.call(null,"svg:altGlyph");
hoplon.svg.altGlyphDef = hoplon.svg.make_svg_ctor.call(null,"svg:altGlyphDef");
hoplon.svg.altGlyphItem = hoplon.svg.make_svg_ctor.call(null,"svg:altGlyphItem");
hoplon.svg.animate = hoplon.svg.make_svg_ctor.call(null,"svg:animate");
hoplon.svg.animateColor = hoplon.svg.make_svg_ctor.call(null,"svg:animateColor");
hoplon.svg.animateMotion = hoplon.svg.make_svg_ctor.call(null,"svg:animateMotion");
hoplon.svg.animateTransform = hoplon.svg.make_svg_ctor.call(null,"svg:animateTransform");
hoplon.svg.circle = hoplon.svg.make_svg_ctor.call(null,"svg:circle");
hoplon.svg.clipPath = hoplon.svg.make_svg_ctor.call(null,"svg:clipPath");
hoplon.svg.color_profile = hoplon.svg.make_svg_ctor.call(null,"svg:color-profile");
hoplon.svg.cursor = hoplon.svg.make_svg_ctor.call(null,"svg:cursor");
hoplon.svg.defs = hoplon.svg.make_svg_ctor.call(null,"svg:defs");
hoplon.svg.desc = hoplon.svg.make_svg_ctor.call(null,"svg:desc");
hoplon.svg.ellipse = hoplon.svg.make_svg_ctor.call(null,"svg:ellipse");
hoplon.svg.feBlend = hoplon.svg.make_svg_ctor.call(null,"svg:feBlend");
hoplon.svg.feColorMatrix = hoplon.svg.make_svg_ctor.call(null,"svg:feColorMatrix");
hoplon.svg.feComponentTransfer = hoplon.svg.make_svg_ctor.call(null,"svg:feComponentTransfer");
hoplon.svg.feComposite = hoplon.svg.make_svg_ctor.call(null,"svg:feComposite");
hoplon.svg.feConvolveMatrix = hoplon.svg.make_svg_ctor.call(null,"svg:feConvolveMatrix");
hoplon.svg.feDiffuseLighting = hoplon.svg.make_svg_ctor.call(null,"svg:feDiffuseLighting");
hoplon.svg.feDisplacementMap = hoplon.svg.make_svg_ctor.call(null,"svg:feDisplacementMap");
hoplon.svg.feDistantLight = hoplon.svg.make_svg_ctor.call(null,"svg:feDistantLight");
hoplon.svg.feFlood = hoplon.svg.make_svg_ctor.call(null,"svg:feFlood");
hoplon.svg.feFuncA = hoplon.svg.make_svg_ctor.call(null,"svg:feFuncA");
hoplon.svg.feFuncB = hoplon.svg.make_svg_ctor.call(null,"svg:feFuncB");
hoplon.svg.feFuncG = hoplon.svg.make_svg_ctor.call(null,"svg:feFuncG");
hoplon.svg.feFuncR = hoplon.svg.make_svg_ctor.call(null,"svg:feFuncR");
hoplon.svg.feGaussianBlur = hoplon.svg.make_svg_ctor.call(null,"svg:feGaussianBlur");
hoplon.svg.feImage = hoplon.svg.make_svg_ctor.call(null,"svg:feImage");
hoplon.svg.feMerge = hoplon.svg.make_svg_ctor.call(null,"svg:feMerge");
hoplon.svg.feMergeNode = hoplon.svg.make_svg_ctor.call(null,"svg:feMergeNode");
hoplon.svg.feMorphology = hoplon.svg.make_svg_ctor.call(null,"svg:feMorphology");
hoplon.svg.feOffset = hoplon.svg.make_svg_ctor.call(null,"svg:feOffset");
hoplon.svg.fePointLight = hoplon.svg.make_svg_ctor.call(null,"svg:fePointLight");
hoplon.svg.feSpecularLighting = hoplon.svg.make_svg_ctor.call(null,"svg:feSpecularLighting");
hoplon.svg.feSpotLight = hoplon.svg.make_svg_ctor.call(null,"svg:feSpotLight");
hoplon.svg.feTile = hoplon.svg.make_svg_ctor.call(null,"svg:feTile");
hoplon.svg.feTurbulence = hoplon.svg.make_svg_ctor.call(null,"svg:feTurbulence");
hoplon.svg.filter = hoplon.svg.make_svg_ctor.call(null,"svg:filter");
hoplon.svg.font = hoplon.svg.make_svg_ctor.call(null,"svg:font");
hoplon.svg.font_face = hoplon.svg.make_svg_ctor.call(null,"svg:font-face");
hoplon.svg.font_face_format = hoplon.svg.make_svg_ctor.call(null,"svg:font-face-format");
hoplon.svg.font_face_name = hoplon.svg.make_svg_ctor.call(null,"svg:font-face-name");
hoplon.svg.font_face_src = hoplon.svg.make_svg_ctor.call(null,"svg:font-face-src");
hoplon.svg.font_face_uri = hoplon.svg.make_svg_ctor.call(null,"svg:font-face-uri");
hoplon.svg.foreignObject = hoplon.svg.make_svg_ctor.call(null,"svg:foreignObject");
hoplon.svg.g = hoplon.svg.make_svg_ctor.call(null,"svg:g");
hoplon.svg.glyph = hoplon.svg.make_svg_ctor.call(null,"svg:glyph");
hoplon.svg.glyphRef = hoplon.svg.make_svg_ctor.call(null,"svg:glyphRef");
hoplon.svg.hkern = hoplon.svg.make_svg_ctor.call(null,"svg:hkern");
hoplon.svg.image = hoplon.svg.make_svg_ctor.call(null,"svg:image");
hoplon.svg.line = hoplon.svg.make_svg_ctor.call(null,"svg:line");
hoplon.svg.linearGradient = hoplon.svg.make_svg_ctor.call(null,"svg:linearGradient");
hoplon.svg.marker = hoplon.svg.make_svg_ctor.call(null,"svg:marker");
hoplon.svg.mask = hoplon.svg.make_svg_ctor.call(null,"svg:mask");
hoplon.svg.metadata = hoplon.svg.make_svg_ctor.call(null,"svg:metadata");
hoplon.svg.missing_glyph = hoplon.svg.make_svg_ctor.call(null,"svg:missing-glyph");
hoplon.svg.mpath = hoplon.svg.make_svg_ctor.call(null,"svg:mpath");
hoplon.svg.path = hoplon.svg.make_svg_ctor.call(null,"svg:path");
hoplon.svg.pattern = hoplon.svg.make_svg_ctor.call(null,"svg:pattern");
hoplon.svg.polygon = hoplon.svg.make_svg_ctor.call(null,"svg:polygon");
hoplon.svg.polyline = hoplon.svg.make_svg_ctor.call(null,"svg:polyline");
hoplon.svg.radialGradient = hoplon.svg.make_svg_ctor.call(null,"svg:radialGradient");
hoplon.svg.rect = hoplon.svg.make_svg_ctor.call(null,"svg:rect");
hoplon.svg.script = hoplon.svg.make_svg_ctor.call(null,"svg:script");
hoplon.svg.set = hoplon.svg.make_svg_ctor.call(null,"svg:set");
hoplon.svg.stop = hoplon.svg.make_svg_ctor.call(null,"svg:stop");
hoplon.svg.style = hoplon.svg.make_svg_ctor.call(null,"svg:style");
hoplon.svg.svg = hoplon.svg.make_svg_ctor.call(null,"svg:svg");
hoplon.svg.switch$ = hoplon.svg.make_svg_ctor.call(null,"svg:switch");
hoplon.svg.symbol = hoplon.svg.make_svg_ctor.call(null,"svg:symbol");
hoplon.svg.text = hoplon.svg.make_svg_ctor.call(null,"svg:text");
hoplon.svg.textPath = hoplon.svg.make_svg_ctor.call(null,"svg:textPath");
hoplon.svg.title = hoplon.svg.make_svg_ctor.call(null,"svg:title");
hoplon.svg.tref = hoplon.svg.make_svg_ctor.call(null,"svg:tref");
hoplon.svg.tspan = hoplon.svg.make_svg_ctor.call(null,"svg:tspan");
hoplon.svg.use = hoplon.svg.make_svg_ctor.call(null,"svg:use");
hoplon.svg.view = hoplon.svg.make_svg_ctor.call(null,"svg:view");
hoplon.svg.vkern = hoplon.svg.make_svg_ctor.call(null,"svg:vkern");

//# sourceMappingURL=svg.js.map