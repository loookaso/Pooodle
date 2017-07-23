// ==UserScript==
// @name        Pooodle
// @author      haicat
// @namespace   http://doodleordie.com/profile/haicat
// @downloadURL https://raw.githubusercontent.com/haicat/Pooodle/master/pooodle.user.js
// @description Extended drooodle functionality!
// @include     http://www.drooodle.com/drdl
// @include     http://beta.drooodle.com/drdl
// @include     http://www.drooodle.com/d/*/comment
// @include     http://beta.drooodle.com/d/*/comment
// @version     13
// @grant       none
// ==/UserScript==

/***
 ________  ________  ________  ________  ________  ___       _______ 
|\   __  \|\   __  \|\   __  \|\   __  \|\   ___ \|\  \     |\  ____\     
\ \  \|\  \ \  \|\  \ \  \|\  \ \  \|\  \ \  \_|\ \ \  \    \ \  \___
 \ \   ____\ \  \\\  \ \  \\\  \ \  \\\  \ \  \ \\ \ \  \    \ \   __\  
  \ \  \___|\ \  \\\  \ \  \\\  \ \  \\\  \ \  \_\\ \ \  \____\ \  \_|___ 
   \ \__\    \ \_______\ \_______\ \_______\ \_______\ \_______\ \_______\
    \|__|     \|_______|\|_______|\|_______|\|_______|\|_______|\|_______|

Pooodle
by haicat

https://github.com/haicat
https://github.com/haicat/Pooodle

http://doodleordie.com/profile/haicat
https://haicat.deviantart.com/

For use on http://www.drooodle.com

This work is licensed under the Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License.
To view a copy of this license, visit http://creativecommons.org/licenses/by-nc-sa/4.0/


spectrum.js
Spectrum Colorpicker v1.6.0
https://github.com/bgrins/spectrum
Author: Brian Grinstead
License: MIT


fontdetect.js
JavaScript code to detect available availability of a
particular font in a browser using JavaScript and CSS.

Author : Lalit Patel
Website: http://www.lalit.org/lab/javascript-css-font-detect/
License: Apache Software License 2.0
         http://www.apache.org/licenses/LICENSE-2.0

***/



//spectrum.js
//---------------------------------------------------------------
//---------------------------------------------------------------
(function(e){"use strict";if(typeof define==="function"&&define.amd){define(["jquery"],e)}else if(typeof exports=="object"&&typeof module=="object"){module.exports=e}else{e(jQuery)}})(function(e,t){"use strict";function f(t,n,r,i){var o=[];for(var u=0;u<t.length;u++){var a=t[u];if(a){var f=tinycolor(a);var l=f.toHsl().l<.5?"sp-thumb-el sp-thumb-dark":"sp-thumb-el sp-thumb-light";l+=tinycolor.equals(n,a)?" sp-thumb-active":"";var c=f.toString(i.preferredFormat||"rgb");var h=s?"background-color:"+f.toRgbString():"filter:"+f.toFilter();o.push('<span title="'+c+'" data-color="'+f.toRgbString()+'" class="'+l+'"><span class="sp-thumb-inner" style="'+h+';" /></span>')}else{var p="sp-clear-display";o.push(e("<div />").append(e('<span data-color="" style="background-color:transparent;" class="'+p+'"></span>').attr("title",i.noColorSelectedText)).html())}}return"<div class='sp-cf "+r+"'>"+o.join("")+"</div>"}function l(){for(var e=0;e<r.length;e++){if(r[e]){r[e].hide()}}}function c(t,r){var i=e.extend({},n,t);i.callbacks={move:m(i.move,r),change:m(i.change,r),show:m(i.show,r),hide:m(i.hide,r),beforeShow:m(i.beforeShow,r)};return i}function h(n,h){function Tt(){if(d.showPaletteOnly){d.showPalette=true}lt.text(d.showPaletteOnly?d.togglePaletteMoreText:d.togglePaletteLessText);if(d.palette){j=d.palette.slice(0);F=e.isArray(j[0])?j:[j];I={};for(var t=0;t<F.length;t++){for(var n=0;n<F[t].length;n++){var r=tinycolor(F[t][n]).toRgbString();I[r]=true}}}K.toggleClass("sp-flat",m);K.toggleClass("sp-input-disabled",!d.showInput);K.toggleClass("sp-alpha-enabled",d.showAlpha);K.toggleClass("sp-clear-enabled",xt);K.toggleClass("sp-buttons-disabled",!d.showButtons);K.toggleClass("sp-palette-buttons-disabled",!d.togglePaletteOnly);K.toggleClass("sp-palette-disabled",!d.showPalette);K.toggleClass("sp-palette-only",d.showPaletteOnly);K.toggleClass("sp-initial-disabled",!d.showInitial);K.addClass(d.className).addClass(d.containerClassName);Vt()}function Nt(){function n(t){if(t.data&&t.data.ignore){It(e(t.target).closest(".sp-thumb-el").data("color"));Ut()}else{It(e(t.target).closest(".sp-thumb-el").data("color"));Ut();Xt(true);if(d.hideAfterPaletteSelect){jt()}}return false}if(i){K.find("*:not(input)").attr("unselectable","on")}Tt();if(pt){V.after(dt).hide()}if(!xt){at.hide()}if(m){V.after(K).hide()}else{var t=d.appendTo==="parent"?V.parent():e(d.appendTo);if(t.length!==1){t=e("body")}t.append(K)}Ct();vt.bind("click.spectrum touchstart.spectrum",function(t){if(!J){Pt()}t.stopPropagation();if(!e(t.target).is("input")){t.preventDefault()}});if(V.is(":disabled")||d.disabled===true){Qt()}K.click(v);it.change(Dt);it.bind("paste",function(){setTimeout(Dt,1)});it.keydown(function(e){if(e.keyCode==13){Dt()}});ut.text(d.cancelText);ut.bind("click.spectrum",function(e){e.stopPropagation();e.preventDefault();Ft();jt()});at.attr("title",d.clearText);at.bind("click.spectrum",function(e){e.stopPropagation();e.preventDefault();St=true;Ut();if(m){Xt(true)}});ft.text(d.chooseText);ft.bind("click.spectrum",function(e){e.stopPropagation();e.preventDefault();if(Rt()){Xt(true);jt()}});lt.text(d.showPaletteOnly?d.togglePaletteMoreText:d.togglePaletteLessText);lt.bind("click.spectrum",function(e){e.stopPropagation();e.preventDefault();d.showPaletteOnly=!d.showPaletteOnly;if(!d.showPaletteOnly&&!m){K.css("left","-="+(Q.outerWidth(true)+5))}Tt()});g(nt,function(e,t,n){B=e/O;St=false;if(n.shiftKey){B=Math.round(B*10)/10}Ut()},Mt,_t);g(Z,function(e,t){D=parseFloat(t/L);St=false;if(!d.showAlpha){B=1}Ut()},Mt,_t);g(G,function(e,t,n){if(!n.shiftKey){z=null}else if(!z){var r=P*N;var i=C-H*C;var s=Math.abs(e-r)>Math.abs(t-i);z=s?"x":"y"}var o=!z||z==="x";var u=!z||z==="y";if(o){P=parseFloat(e/N)}if(u){H=parseFloat((C-t)/C)}St=false;if(!d.showAlpha){B=1}Ut()},Mt,_t);if(!!gt){It(gt);zt();wt=bt||tinycolor(gt).format;kt(gt)}else{zt()}if(m){Ht()}var r=i?"mousedown.spectrum":"click.spectrum touchstart.spectrum";st.delegate(".sp-thumb-el",r,n);ot.delegate(".sp-thumb-el:nth-child(1)",r,{ignore:true},n)}function Ct(){if(w&&window.localStorage){try{var t=window.localStorage[w].split(",#");if(t.length>1){delete window.localStorage[w];e.each(t,function(e,t){kt(t)})}}catch(n){}try{q=window.localStorage[w].split(";")}catch(n){}}}function kt(t){if(b){var n=tinycolor(t).toRgbString();if(!I[n]&&e.inArray(n,q)===-1){q.push(n);while(q.length>R){q.shift()}}if(w&&window.localStorage){try{window.localStorage[w]=q.join(";")}catch(r){}}}}function Lt(){var e=[];if(d.showPalette){for(var t=0;t<q.length;t++){var n=tinycolor(q[t]).toRgbString();if(!I[n]){e.push(q[t])}}}return e.reverse().slice(0,d.maxSelectionSize)}function At(){var t=qt();var n=e.map(F,function(e,n){return f(e,t,"sp-palette-row sp-palette-row-"+n,d)});Ct();if(q){n.push(f(Lt(),t,"sp-palette-row sp-palette-row-selection",d))}st.html(n.join(""))}function Ot(){if(d.showInitial){var e=yt;var t=qt();ot.html(f([e,t],t,"sp-palette-row-initial",d))}}function Mt(){if(C<=0||N<=0||L<=0){Vt()}K.addClass(U);z=null;V.trigger("dragstart.spectrum",[qt()])}function _t(){K.removeClass(U);V.trigger("dragstop.spectrum",[qt()])}function Dt(){var e=it.val();if((e===null||e==="")&&xt){It(null);Xt(true)}else{var t=tinycolor(e);if(t.isValid()){It(t);Xt(true)}else{it.addClass("sp-validation-error")}}}function Pt(){if(T){jt()}else{Ht()}}function Ht(){var t=e.Event("beforeShow.spectrum");if(T){Vt();return}V.trigger(t,[qt()]);if(S.beforeShow(qt())===false||t.isDefaultPrevented()){return}l();T=true;e(W).bind("click.spectrum",Bt);e(window).bind("resize.spectrum",x);dt.addClass("sp-active");K.removeClass("sp-hidden");Vt();zt();yt=qt();Ot();S.show(yt);V.trigger("show.spectrum",[yt])}function Bt(e){if(e.button==2){return}if(Et){Xt(true)}else{Ft()}jt()}function jt(){if(!T||m){return}T=false;e(W).unbind("click.spectrum",Bt);e(window).unbind("resize.spectrum",x);dt.removeClass("sp-active");K.addClass("sp-hidden");S.hide(qt());V.trigger("hide.spectrum",[qt()])}function Ft(){It(yt,true)}function It(e,t){if(tinycolor.equals(e,qt())){zt();return}var n,r;if(!e&&xt){St=true}else{St=false;n=tinycolor(e);r=n.toHsv();D=r.h%360/360;P=r.s;H=r.v;B=r.a}zt();if(n&&n.isValid()&&!t){wt=bt||n.getFormat()}}function qt(e){e=e||{};if(xt&&St){return null}return tinycolor.fromRatio({h:D,s:P,v:H,a:Math.round(B*100)/100},{format:e.format||wt})}function Rt(){return!it.hasClass("sp-validation-error")}function Ut(){zt();S.move(qt());V.trigger("move.spectrum",[qt()])}function zt(){it.removeClass("sp-validation-error");Wt();var e=tinycolor.fromRatio({h:D,s:1,v:1});G.css("background-color",e.toHexString());var t=wt;if(B<1&&!(B===0&&t==="name")){if(t==="hex"||t==="hex3"||t==="hex6"||t==="name"){t="rgb"}}var n=qt({format:t}),r="";mt.removeClass("sp-clear-display");mt.css("background-color","transparent");if(!n&&xt){mt.addClass("sp-clear-display")}else{var o=n.toHexString(),u=n.toRgbString();if(s||n.alpha===1){mt.css("background-color",u)}else{mt.css("background-color","transparent");mt.css("filter",n.toFilter())}if(d.showAlpha){var a=n.toRgb();a.a=0;var f=tinycolor(a).toRgbString();var l="linear-gradient(left, "+f+", "+o+")";if(i){tt.css("filter",tinycolor(f).toFilter({gradientType:1},o))}else{tt.css("background","-webkit-"+l);tt.css("background","-moz-"+l);tt.css("background","-ms-"+l);tt.css("background","linear-gradient(to right, "+f+", "+o+")")}}r=n.toString(t)}if(d.showInput){it.val(r)}if(d.showPalette){At()}Ot()}function Wt(){var e=P;var t=H;if(xt&&St){rt.hide();et.hide();Y.hide()}else{rt.show();et.show();Y.show();var n=e*N;var r=C-t*C;n=Math.max(-k,Math.min(N-k,n-k));r=Math.max(-k,Math.min(C-k,r-k));Y.css({top:r+"px",left:n+"px"});var i=B*O;rt.css({left:i-M/2+"px"});var s=D*L;et.css({top:s-_+"px"})}}function Xt(e){var t=qt(),n="",r=!tinycolor.equals(t,yt);if(t){n=t.toString(wt);kt(t)}if(ct){V.val(n)}if(e&&r){S.change(t);V.trigger("change",[t])}}function Vt(){N=G.width();C=G.height();k=Y.height();A=Z.width();L=Z.height();_=et.height();O=nt.width();M=rt.width();if(!m){K.css("position","absolute");if(d.offset){K.offset(d.offset)}else{K.offset(p(K,vt))}}Wt();if(d.showPalette){At()}V.trigger("reflow.spectrum")}function $t(){V.show();vt.unbind("click.spectrum touchstart.spectrum");K.remove();dt.remove();r[Yt.id]=null}function Jt(n,r){if(n===t){return e.extend({},d)}if(r===t){return d[n]}d[n]=r;Tt()}function Kt(){J=false;V.attr("disabled",false);vt.removeClass("sp-disabled")}function Qt(){jt();J=true;V.attr("disabled",true);vt.addClass("sp-disabled")}function Gt(e){d.offset=e;Vt()}var d=c(h,n),m=d.flat,b=d.showSelectionPalette,w=d.localStorageKey,E=d.theme,S=d.callbacks,x=y(Vt,10),T=false,N=0,C=0,k=0,L=0,A=0,O=0,M=0,_=0,D=0,P=0,H=0,B=1,j=[],F=[],I={},q=d.selectionPalette.slice(0),R=d.maxSelectionSize,U="sp-dragging",z=null;var W=n.ownerDocument,X=W.body,V=e(n),J=false,K=e(a,W).addClass(E),Q=K.find(".sp-picker-container"),G=K.find(".sp-color"),Y=K.find(".sp-dragger"),Z=K.find(".sp-hue"),et=K.find(".sp-slider"),tt=K.find(".sp-alpha-inner"),nt=K.find(".sp-alpha"),rt=K.find(".sp-alpha-handle"),it=K.find(".sp-input"),st=K.find(".sp-palette"),ot=K.find(".sp-initial"),ut=K.find(".sp-cancel"),at=K.find(".sp-clear"),ft=K.find(".sp-choose"),lt=K.find(".sp-palette-toggle"),ct=V.is("input"),ht=ct&&o&&V.attr("type")==="color",pt=ct&&!m,dt=pt?e(u).addClass(E).addClass(d.className).addClass(d.replacerClassName):e([]),vt=pt?dt:V,mt=dt.find(".sp-preview-inner"),gt=d.color||ct&&V.val(),yt=false,bt=d.preferredFormat,wt=bt,Et=!d.showButtons||d.clickoutFiresChange,St=!gt,xt=d.allowEmpty&&!ht;Nt();var Yt={show:Ht,hide:jt,toggle:Pt,reflow:Vt,option:Jt,enable:Kt,disable:Qt,offset:Gt,set:function(e){It(e);Xt()},get:qt,destroy:$t,container:K};Yt.id=r.push(Yt)-1;return Yt}function p(t,n){var r=0;var i=t.outerWidth();var s=t.outerHeight();var o=n.outerHeight();var u=t[0].ownerDocument;var a=u.documentElement;var f=a.clientWidth+e(u).scrollLeft();
var l=a.clientHeight+e(u).scrollTop();var c=n.offset();c.top+=o;c.left-=Math.min(c.left,c.left+i>f&&f>i?Math.abs(c.left+i-f):0);c.top-=Math.min(c.top,c.top+s>l&&l>s?Math.abs(s+o-r):r);return c}function d(){}function v(e){e.stopPropagation()}function m(e,t){var n=Array.prototype.slice;var r=n.call(arguments,2);return function(){return e.apply(t,r.concat(n.call(arguments)))}}function g(t,n,r,s){function p(e){if(e.stopPropagation){e.stopPropagation()}if(e.preventDefault){e.preventDefault()}e.returnValue=false}function d(e){if(u){if(i&&o.documentMode<9&&!e.button){return m()}var r=e.originalEvent&&e.originalEvent.touches;var s=r?r[0].pageX:e.pageX;var h=r?r[0].pageY:e.pageY;var d=Math.max(0,Math.min(s-a.left,l));var v=Math.max(0,Math.min(h-a.top,f));if(c){p(e)}n.apply(t,[d,v,e])}}function v(n){var i=n.which?n.which==3:n.button==2;if(!i&&!u){if(r.apply(t,arguments)!==false){u=true;f=e(t).height();l=e(t).width();a=e(t).offset();e(o).bind(h);e(o.body).addClass("sp-dragging");if(!c){d(n)}p(n)}}}function m(){if(u){e(o).unbind(h);e(o.body).removeClass("sp-dragging");s.apply(t,arguments)}u=false}n=n||function(){};r=r||function(){};s=s||function(){};var o=document;var u=false;var a={};var f=0;var l=0;var c="ontouchstart"in window;var h={};h["selectstart"]=p;h["dragstart"]=p;h["touchmove mousemove"]=d;h["touchend mouseup"]=m;e(t).bind("touchstart mousedown",v)}function y(e,t,n){var r;return function(){var i=this,s=arguments;var o=function(){r=null;e.apply(i,s)};if(n)clearTimeout(r);if(n||!r)r=setTimeout(o,t)}}var n={beforeShow:d,move:d,change:d,show:d,hide:d,color:false,flat:false,showInput:false,allowEmpty:false,showButtons:true,clickoutFiresChange:false,showInitial:false,showPalette:false,showPaletteOnly:false,hideAfterPaletteSelect:false,togglePaletteOnly:false,showSelectionPalette:true,localStorageKey:false,appendTo:"body",maxSelectionSize:7,cancelText:"cancel",chooseText:"choose",togglePaletteMoreText:"more",togglePaletteLessText:"less",clearText:"Clear Color Selection",noColorSelectedText:"No Color Selected",preferredFormat:false,className:"",containerClassName:"",replacerClassName:"",showAlpha:false,theme:"sp-light",palette:[["#ffffff","#000000","#ff0000","#ff8000","#ffff00","#008000","#0000ff","#4b0082","#9400d3"]],selectionPalette:[],disabled:false,offset:null},r=[],i=!!/msie/i.exec(window.navigator.userAgent),s=function(){function e(e,t){return!!~(""+e).indexOf(t)}var t=document.createElement("div");var n=t.style;n.cssText="background-color:rgba(0,0,0,.5)";return e(n.backgroundColor,"rgba")||e(n.backgroundColor,"hsla")}(),o=function(){var t=e("<input type='color' value='!' />")[0];return t.type==="color"&&t.value!=="!"}(),u=["<div class='sp-replacer'>","<div class='sp-preview'><div class='sp-preview-inner'></div></div>","<div class='sp-dd'>&#9660;</div>","</div>"].join(""),a=function(){var e="";if(i){for(var t=1;t<=6;t++){e+="<div class='sp-"+t+"'></div>"}}return["<div class='sp-container sp-hidden'>","<div class='sp-palette-container'>","<div class='sp-palette sp-thumb sp-cf'></div>","<div class='sp-palette-button-container sp-cf'>","<button type='button' class='sp-palette-toggle'></button>","</div>","</div>","<div class='sp-picker-container'>","<div class='sp-top sp-cf'>","<div class='sp-fill'></div>","<div class='sp-top-inner'>","<div class='sp-color'>","<div class='sp-sat'>","<div class='sp-val'>","<div class='sp-dragger'></div>","</div>","</div>","</div>","<div class='sp-clear sp-clear-display'>","</div>","<div class='sp-hue'>","<div class='sp-slider'></div>",e,"</div>","</div>","<div class='sp-alpha'><div class='sp-alpha-inner'><div class='sp-alpha-handle'></div></div></div>","</div>","<div class='sp-input-container sp-cf'>","<input class='sp-input' type='text' spellcheck='false'  />","</div>","<div class='sp-initial sp-thumb sp-cf'></div>","<div class='sp-button-container sp-cf'>","<a class='sp-cancel' href='#'></a>","<button type='button' class='sp-choose'></button>","</div>","</div>","</div>"].join("")}();var b="spectrum.id";e.fn.spectrum=function(t,n){if(typeof t=="string"){var i=this;var s=Array.prototype.slice.call(arguments,1);this.each(function(){var n=r[e(this).data(b)];if(n){var o=n[t];if(!o){throw new Error("Spectrum: no such method: '"+t+"'")}if(t=="get"){i=n.get()}else if(t=="container"){i=n.container}else if(t=="option"){i=n.option.apply(n,s)}else if(t=="destroy"){n.destroy();e(this).removeData(b)}else{o.apply(n,s)}}});return i}return this.spectrum("destroy").each(function(){var n=e.extend({},t,e(this).data());var r=h(this,n);e(this).data(b,r.id)})};e.fn.spectrum.load=true;e.fn.spectrum.loadOpts={};e.fn.spectrum.draggable=g;e.fn.spectrum.defaults=n;e.spectrum={};e.spectrum.localization={};e.spectrum.palettes={};e.fn.spectrum.processNativeColorInputs=function(){if(!o){e("input[type=color]").spectrum({preferredFormat:"hex6"})}};(function(){function f(e){var t={r:0,g:0,b:0};var n=1;var r=false;var i=false;if(typeof e=="string"){e=W(e)}if(typeof e=="object"){if(e.hasOwnProperty("r")&&e.hasOwnProperty("g")&&e.hasOwnProperty("b")){t=l(e.r,e.g,e.b);r=true;i=String(e.r).substr(-1)==="%"?"prgb":"rgb"}else if(e.hasOwnProperty("h")&&e.hasOwnProperty("s")&&e.hasOwnProperty("v")){e.s=q(e.s);e.v=q(e.v);t=d(e.h,e.s,e.v);r=true;i="hsv"}else if(e.hasOwnProperty("h")&&e.hasOwnProperty("s")&&e.hasOwnProperty("l")){e.s=q(e.s);e.l=q(e.l);t=h(e.h,e.s,e.l);r=true;i="hsl"}if(e.hasOwnProperty("a")){n=e.a}}n=D(n);return{ok:r,format:e.format||i,r:s(255,o(t.r,0)),g:s(255,o(t.g,0)),b:s(255,o(t.b,0)),a:n}}function l(e,t,n){return{r:P(e,255)*255,g:P(t,255)*255,b:P(n,255)*255}}function c(e,t,n){e=P(e,255);t=P(t,255);n=P(n,255);var r=o(e,t,n),i=s(e,t,n);var u,a,f=(r+i)/2;if(r==i){u=a=0}else{var l=r-i;a=f>.5?l/(2-r-i):l/(r+i);switch(r){case e:u=(t-n)/l+(t<n?6:0);break;case t:u=(n-e)/l+2;break;case n:u=(e-t)/l+4;break}u/=6}return{h:u,s:a,l:f}}function h(e,t,n){function o(e,t,n){if(n<0)n+=1;if(n>1)n-=1;if(n<1/6)return e+(t-e)*6*n;if(n<1/2)return t;if(n<2/3)return e+(t-e)*(2/3-n)*6;return e}var r,i,s;e=P(e,360);t=P(t,100);n=P(n,100);if(t===0){r=i=s=n}else{var u=n<.5?n*(1+t):n+t-n*t;var a=2*n-u;r=o(a,u,e+1/3);i=o(a,u,e);s=o(a,u,e-1/3)}return{r:r*255,g:i*255,b:s*255}}function p(e,t,n){e=P(e,255);t=P(t,255);n=P(n,255);var r=o(e,t,n),i=s(e,t,n);var u,a,f=r;var l=r-i;a=r===0?0:l/r;if(r==i){u=0}else{switch(r){case e:u=(t-n)/l+(t<n?6:0);break;case t:u=(n-e)/l+2;break;case n:u=(e-t)/l+4;break}u/=6}return{h:u,s:a,v:f}}function d(e,t,n){e=P(e,360)*6;t=P(t,100);n=P(n,100);var i=r.floor(e),s=e-i,o=n*(1-t),u=n*(1-s*t),a=n*(1-(1-s)*t),f=i%6,l=[n,u,o,o,a,n][f],c=[a,n,n,u,o,o][f],h=[o,o,a,n,n,u][f];return{r:l*255,g:c*255,b:h*255}}function v(e,t,n,r){var s=[I(i(e).toString(16)),I(i(t).toString(16)),I(i(n).toString(16))];if(r&&s[0].charAt(0)==s[0].charAt(1)&&s[1].charAt(0)==s[1].charAt(1)&&s[2].charAt(0)==s[2].charAt(1)){return s[0].charAt(0)+s[1].charAt(0)+s[2].charAt(0)}return s.join("")}function m(e,t,n,r){var s=[I(R(r)),I(i(e).toString(16)),I(i(t).toString(16)),I(i(n).toString(16))];return s.join("")}function g(e,t){t=t===0?0:t||10;var n=a(e).toHsl();n.s-=t/100;n.s=H(n.s);return a(n)}function y(e,t){t=t===0?0:t||10;var n=a(e).toHsl();n.s+=t/100;n.s=H(n.s);return a(n)}function b(e){return a(e).desaturate(100)}function w(e,t){t=t===0?0:t||10;var n=a(e).toHsl();n.l+=t/100;n.l=H(n.l);return a(n)}function E(e,t){t=t===0?0:t||10;var n=a(e).toRgb();n.r=o(0,s(255,n.r-i(255*-(t/100))));n.g=o(0,s(255,n.g-i(255*-(t/100))));n.b=o(0,s(255,n.b-i(255*-(t/100))));return a(n)}function S(e,t){t=t===0?0:t||10;var n=a(e).toHsl();n.l-=t/100;n.l=H(n.l);return a(n)}function x(e,t){var n=a(e).toHsl();var r=(i(n.h)+t)%360;n.h=r<0?360+r:r;return a(n)}function T(e){var t=a(e).toHsl();t.h=(t.h+180)%360;return a(t)}function N(e){var t=a(e).toHsl();var n=t.h;return[a(e),a({h:(n+120)%360,s:t.s,l:t.l}),a({h:(n+240)%360,s:t.s,l:t.l})]}function C(e){var t=a(e).toHsl();var n=t.h;return[a(e),a({h:(n+90)%360,s:t.s,l:t.l}),a({h:(n+180)%360,s:t.s,l:t.l}),a({h:(n+270)%360,s:t.s,l:t.l})]}function k(e){var t=a(e).toHsl();var n=t.h;return[a(e),a({h:(n+72)%360,s:t.s,l:t.l}),a({h:(n+216)%360,s:t.s,l:t.l})]}function L(e,t,n){t=t||6;n=n||30;var r=a(e).toHsl();var i=360/n;var s=[a(e)];for(r.h=(r.h-(i*t>>1)+720)%360;--t;){r.h=(r.h+i)%360;s.push(a(r))}return s}function A(e,t){t=t||6;var n=a(e).toHsv();var r=n.h,i=n.s,s=n.v;var o=[];var u=1/t;while(t--){o.push(a({h:r,s:i,v:s}));s=(s+u)%1}return o}function _(e){var t={};for(var n in e){if(e.hasOwnProperty(n)){t[e[n]]=n}}return t}function D(e){e=parseFloat(e);if(isNaN(e)||e<0||e>1){e=1}return e}function P(e,t){if(j(e)){e="100%"}var n=F(e);e=s(t,o(0,parseFloat(e)));if(n){e=parseInt(e*t,10)/100}if(r.abs(e-t)<1e-6){return 1}return e%t/parseFloat(t)}function H(e){return s(1,o(0,e))}function B(e){return parseInt(e,16)}function j(e){return typeof e=="string"&&e.indexOf(".")!=-1&&parseFloat(e)===1}function F(e){return typeof e==="string"&&e.indexOf("%")!=-1}function I(e){return e.length==1?"0"+e:""+e}function q(e){if(e<=1){e=e*100+"%"}return e}function R(e){return Math.round(parseFloat(e)*255).toString(16)}function U(e){return B(e)/255}function W(n){n=n.replace(e,"").replace(t,"").toLowerCase();var r=false;if(O[n]){n=O[n];r=true}else if(n=="transparent"){return{r:0,g:0,b:0,a:0,format:"name"}}var i;if(i=z.rgb.exec(n)){return{r:i[1],g:i[2],b:i[3]}}if(i=z.rgba.exec(n)){return{r:i[1],g:i[2],b:i[3],a:i[4]}}if(i=z.hsl.exec(n)){return{h:i[1],s:i[2],l:i[3]}}if(i=z.hsla.exec(n)){return{h:i[1],s:i[2],l:i[3],a:i[4]}}if(i=z.hsv.exec(n)){return{h:i[1],s:i[2],v:i[3]}}if(i=z.hsva.exec(n)){return{h:i[1],s:i[2],v:i[3],a:i[4]}}if(i=z.hex8.exec(n)){return{a:U(i[1]),r:B(i[2]),g:B(i[3]),b:B(i[4]),format:r?"name":"hex8"}}if(i=z.hex6.exec(n)){return{r:B(i[1]),g:B(i[2]),b:B(i[3]),format:r?"name":"hex"}}if(i=z.hex3.exec(n)){return{r:B(i[1]+""+i[1]),g:B(i[2]+""+i[2]),b:B(i[3]+""+i[3]),format:r?"name":"hex"}}return false}var e=/^[\s,#]+/,t=/\s+$/,n=0,r=Math,i=r.round,s=r.min,o=r.max,u=r.random;
var a=function X(e,t){e=e?e:"";t=t||{};if(e instanceof X){return e}if(!(this instanceof X)){return new X(e,t)}var r=f(e);this._originalInput=e,this._r=r.r,this._g=r.g,this._b=r.b,this._a=r.a,this._roundA=i(100*this._a)/100,this._format=t.format||r.format;this._gradientType=t.gradientType;if(this._r<1){this._r=i(this._r)}if(this._g<1){this._g=i(this._g)}if(this._b<1){this._b=i(this._b)}this._ok=r.ok;this._tc_id=n++};a.prototype={isDark:function(){return this.getBrightness()<128},isLight:function(){return!this.isDark()},isValid:function(){return this._ok},getOriginalInput:function(){return this._originalInput},getFormat:function(){return this._format},getAlpha:function(){return this._a},getBrightness:function(){var e=this.toRgb();return(e.r*299+e.g*587+e.b*114)/1e3},setAlpha:function(e){this._a=D(e);this._roundA=i(100*this._a)/100;return this},toHsv:function(){var e=p(this._r,this._g,this._b);return{h:e.h*360,s:e.s,v:e.v,a:this._a}},toHsvString:function(){var e=p(this._r,this._g,this._b);var t=i(e.h*360),n=i(e.s*100),r=i(e.v*100);return this._a==1?"hsv("+t+", "+n+"%, "+r+"%)":"hsva("+t+", "+n+"%, "+r+"%, "+this._roundA+")"},toHsl:function(){var e=c(this._r,this._g,this._b);return{h:e.h*360,s:e.s,l:e.l,a:this._a}},toHslString:function(){var e=c(this._r,this._g,this._b);var t=i(e.h*360),n=i(e.s*100),r=i(e.l*100);return this._a==1?"hsl("+t+", "+n+"%, "+r+"%)":"hsla("+t+", "+n+"%, "+r+"%, "+this._roundA+")"},toHex:function(e){return v(this._r,this._g,this._b,e)},toHexString:function(e){return"#"+this.toHex(e)},toHex8:function(){return m(this._r,this._g,this._b,this._a)},toHex8String:function(){return"#"+this.toHex8()},toRgb:function(){return{r:i(this._r),g:i(this._g),b:i(this._b),a:this._a}},toRgbString:function(){return this._a==1?"rgb("+i(this._r)+", "+i(this._g)+", "+i(this._b)+")":"rgba("+i(this._r)+", "+i(this._g)+", "+i(this._b)+", "+this._roundA+")"},toPercentageRgb:function(){return{r:i(P(this._r,255)*100)+"%",g:i(P(this._g,255)*100)+"%",b:i(P(this._b,255)*100)+"%",a:this._a}},toPercentageRgbString:function(){return this._a==1?"rgb("+i(P(this._r,255)*100)+"%, "+i(P(this._g,255)*100)+"%, "+i(P(this._b,255)*100)+"%)":"rgba("+i(P(this._r,255)*100)+"%, "+i(P(this._g,255)*100)+"%, "+i(P(this._b,255)*100)+"%, "+this._roundA+")"},toName:function(){if(this._a===0){return"transparent"}if(this._a<1){return false}return M[v(this._r,this._g,this._b,true)]||false},toFilter:function(e){var t="#"+m(this._r,this._g,this._b,this._a);var n=t;var r=this._gradientType?"GradientType = 1, ":"";if(e){var i=a(e);n=i.toHex8String()}return"progid:DXImageTransform.Microsoft.gradient("+r+"startColorstr="+t+",endColorstr="+n+")"},toString:function(e){var t=!!e;e=e||this._format;var n=false;var r=this._a<1&&this._a>=0;var i=!t&&r&&(e==="hex"||e==="hex6"||e==="hex3"||e==="name");if(i){if(e==="name"&&this._a===0){return this.toName()}return this.toRgbString()}if(e==="rgb"){n=this.toRgbString()}if(e==="prgb"){n=this.toPercentageRgbString()}if(e==="hex"||e==="hex6"){n=this.toHexString()}if(e==="hex3"){n=this.toHexString(true)}if(e==="hex8"){n=this.toHex8String()}if(e==="name"){n=this.toName()}if(e==="hsl"){n=this.toHslString()}if(e==="hsv"){n=this.toHsvString()}return n||this.toHexString()},_applyModification:function(e,t){var n=e.apply(null,[this].concat([].slice.call(t)));this._r=n._r;this._g=n._g;this._b=n._b;this.setAlpha(n._a);return this},lighten:function(){return this._applyModification(w,arguments)},brighten:function(){return this._applyModification(E,arguments)},darken:function(){return this._applyModification(S,arguments)},desaturate:function(){return this._applyModification(g,arguments)},saturate:function(){return this._applyModification(y,arguments)},greyscale:function(){return this._applyModification(b,arguments)},spin:function(){return this._applyModification(x,arguments)},_applyCombination:function(e,t){return e.apply(null,[this].concat([].slice.call(t)))},analogous:function(){return this._applyCombination(L,arguments)},complement:function(){return this._applyCombination(T,arguments)},monochromatic:function(){return this._applyCombination(A,arguments)},splitcomplement:function(){return this._applyCombination(k,arguments)},triad:function(){return this._applyCombination(N,arguments)},tetrad:function(){return this._applyCombination(C,arguments)}};a.fromRatio=function(e,t){if(typeof e=="object"){var n={};for(var r in e){if(e.hasOwnProperty(r)){if(r==="a"){n[r]=e[r]}else{n[r]=q(e[r])}}}e=n}return a(e,t)};a.equals=function(e,t){if(!e||!t){return false}return a(e).toRgbString()==a(t).toRgbString()};a.random=function(){return a.fromRatio({r:u(),g:u(),b:u()})};a.mix=function(e,t,n){n=n===0?0:n||50;var r=a(e).toRgb();var i=a(t).toRgb();var s=n/100;var o=s*2-1;var u=i.a-r.a;var f;if(o*u==-1){f=o}else{f=(o+u)/(1+o*u)}f=(f+1)/2;var l=1-f;var c={r:i.r*f+r.r*l,g:i.g*f+r.g*l,b:i.b*f+r.b*l,a:i.a*s+r.a*(1-s)};return a(c)};a.readability=function(e,t){var n=a(e);var r=a(t);var i=n.toRgb();var s=r.toRgb();var o=n.getBrightness();var u=r.getBrightness();var f=Math.max(i.r,s.r)-Math.min(i.r,s.r)+Math.max(i.g,s.g)-Math.min(i.g,s.g)+Math.max(i.b,s.b)-Math.min(i.b,s.b);return{brightness:Math.abs(o-u),color:f}};a.isReadable=function(e,t){var n=a.readability(e,t);return n.brightness>125&&n.color>500};a.mostReadable=function(e,t){var n=null;var r=0;var i=false;for(var s=0;s<t.length;s++){var o=a.readability(e,t[s]);var u=o.brightness>125&&o.color>500;var f=3*(o.brightness/125)+o.color/500;if(u&&!i||u&&i&&f>r||!u&&!i&&f>r){i=u;r=f;n=a(t[s])}}return n};var O=a.names={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"0ff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"00f",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",burntsienna:"ea7e5d",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"0ff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"f0f",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"663399",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"};var M=a.hexNames=_(O);var z=function(){var e="[-\\+]?\\d+%?";var t="[-\\+]?\\d*\\.\\d+%?";var n="(?:"+t+")|(?:"+e+")";var r="[\\s|\\(]+("+n+")[,|\\s]+("+n+")[,|\\s]+("+n+")\\s*\\)?";var i="[\\s|\\(]+("+n+")[,|\\s]+("+n+")[,|\\s]+("+n+")[,|\\s]+("+n+")\\s*\\)?";return{rgb:new RegExp("rgb"+r),rgba:new RegExp("rgba"+i),hsl:new RegExp("hsl"+r),hsla:new RegExp("hsla"+i),hsv:new RegExp("hsv"+r),hsva:new RegExp("hsva"+i),hex3:/^([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex8:/^([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/}}();window.tinycolor=a})();e(function(){if(e.fn.spectrum.load){e.fn.spectrum.processNativeColorInputs()}})})

//---------------------------------------------------------------
//---------------------------------------------------------------
//spectrum.js

//spectrum.css
//---------------------------------------------------------------
//---------------------------------------------------------------
var spcss = '.sp-container{position:absolute;top:0;left:0;display:inline-block;z-index:9999994;overflow:hidden}.sp-container.sp-flat{position:relative}.sp-container,.sp-container *{-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box}.sp-top{position:relative;width:100%;display:inline-block}.sp-top-inner{position:absolute;top:0;left:0;bottom:0;right:0}.sp-color{position:absolute;top:0;left:0;bottom:0;right:20%}.sp-hue{position:absolute;top:0;right:0;bottom:0;left:84%;height:100%}.sp-clear-enabled .sp-hue{top:33px;height:77.5%}.sp-fill{padding-top:80%}.sp-sat,.sp-val{position:absolute;top:0;left:0;right:0;bottom:0}.sp-alpha-enabled .sp-top{margin-bottom:18px}.sp-alpha-enabled .sp-alpha{display:block}.sp-alpha-handle{position:absolute;top:-4px;bottom:-4px;width:6px;left:50%;cursor:pointer;border:1px solid #000;background:#fff;opacity:.8}.sp-alpha{display:none;bottom:-14px;right:0;left:0;height:8px}.sp-alpha-inner{border:1px solid #333}.sp-clear{display:none}.sp-clear.sp-clear-display{background-position:center}.sp-clear-enabled .sp-clear{display:block;position:absolute;top:0;right:0;bottom:0;left:84%;height:28px}.sp-alpha,.sp-alpha-handle,.sp-clear,.sp-container,.sp-container button,.sp-container.sp-dragging .sp-input,.sp-dragger,.sp-preview,.sp-replacer,.sp-slider{-webkit-user-select:none;-moz-user-select:-moz-none;-o-user-select:none;user-select:none}.sp-container.sp-buttons-disabled .sp-button-container,.sp-container.sp-input-disabled .sp-input-container,.sp-container.sp-palette-buttons-disabled .sp-palette-button-container,.sp-initial-disabled .sp-initial,.sp-palette-disabled .sp-palette-container,.sp-palette-only .sp-picker-container{display:none}.sp-sat{background-image:-webkit-gradient(linear,0 0,100% 0,from(#FFF),to(rgba(204,154,129,0)));background-image:-webkit-linear-gradient(left,#FFF,rgba(204,154,129,0));background-image:-moz-linear-gradient(left,#fff,rgba(204,154,129,0));background-image:-o-linear-gradient(left,#fff,rgba(204,154,129,0));background-image:-ms-linear-gradient(left,#fff,rgba(204,154,129,0));background-image:linear-gradient(to right,#fff,rgba(204,154,129,0));-ms-filter:"progid:DXImageTransform.Microsoft.gradient(GradientType = 1, startColorstr=#FFFFFFFF, endColorstr=#00CC9A81)";filter:progid:DXImageTransform.Microsoft.gradient(GradientType=1, startColorstr="#FFFFFFFF", endColorstr="#00CC9A81")}.sp-val{background-image:-webkit-gradient(linear,0 100%,0 0,from(#000),to(rgba(204,154,129,0)));background-image:-webkit-linear-gradient(bottom,#000,rgba(204,154,129,0));background-image:-moz-linear-gradient(bottom,#000,rgba(204,154,129,0));background-image:-o-linear-gradient(bottom,#000,rgba(204,154,129,0));background-image:-ms-linear-gradient(bottom,#000,rgba(204,154,129,0));background-image:linear-gradient(to top,#000,rgba(204,154,129,0));-ms-filter:"progid:DXImageTransform.Microsoft.gradient(startColorstr=#00CC9A81, endColorstr=#FF000000)";filter:progid:DXImageTransform.Microsoft.gradient(startColorstr="#00CC9A81", endColorstr="#FF000000")}.sp-hue{background:-moz-linear-gradient(top,red 0,#ff0 17%,#0f0 33%,#0ff 50%,#00f 67%,#f0f 83%,red 100%);background:-ms-linear-gradient(top,red 0,#ff0 17%,#0f0 33%,#0ff 50%,#00f 67%,#f0f 83%,red 100%);background:-o-linear-gradient(top,red 0,#ff0 17%,#0f0 33%,#0ff 50%,#00f 67%,#f0f 83%,red 100%);background:-webkit-gradient(linear,left top,left bottom,from(red),color-stop(0.17,#ff0),color-stop(0.33,#0f0),color-stop(0.5,#0ff),color-stop(0.67,#00f),color-stop(0.83,#f0f),to(red));background:-webkit-linear-gradient(top,red 0,#ff0 17%,#0f0 33%,#0ff 50%,#00f 67%,#f0f 83%,red 100%);background:linear-gradient(to bottom,red 0,#ff0 17%,#0f0 33%,#0ff 50%,#00f 67%,#f0f 83%,red 100%)}.sp-1{height:17%;filter:progid:DXImageTransform.Microsoft.gradient(startColorstr="#ff0000", endColorstr="#ffff00")}.sp-2{height:16%;filter:progid:DXImageTransform.Microsoft.gradient(startColorstr="#ffff00", endColorstr="#00ff00")}.sp-3{height:17%;filter:progid:DXImageTransform.Microsoft.gradient(startColorstr="#00ff00", endColorstr="#00ffff")}.sp-4{height:17%;filter:progid:DXImageTransform.Microsoft.gradient(startColorstr="#00ffff", endColorstr="#0000ff")}.sp-5{height:16%;filter:progid:DXImageTransform.Microsoft.gradient(startColorstr="#0000ff", endColorstr="#ff00ff")}.sp-6{height:17%;filter:progid:DXImageTransform.Microsoft.gradient(startColorstr="#ff00ff", endColorstr="#ff0000")}.sp-hidden{display:none!important}.sp-cf:after,.sp-cf:before{content:"";display:table}.sp-cf:after{clear:both}@media (max-device-width:480px){.sp-color{right:40%}.sp-hue{left:63%}.sp-fill{padding-top:60%}}.sp-dragger{border-radius:5px;height:5px;width:5px;border:1px solid #fff;background:#000;cursor:pointer;position:absolute;top:0;left:0}.sp-slider{position:absolute;top:0;cursor:pointer;height:3px;left:-1px;right:-1px;border:1px solid #000;background:#fff;opacity:.8}.sp-container{border-radius:0;background-color:#ECECEC;border:1px solid #f0c49B;padding:0}.sp-clear,.sp-color,.sp-container,.sp-container button,.sp-container input,.sp-hue{font:400 12px "Lucida Grande","Lucida Sans Unicode","Lucida Sans",Geneva,Verdana,sans-serif;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;-ms-box-sizing:border-box;box-sizing:border-box}.sp-top{margin-bottom:3px}.sp-clear,.sp-color,.sp-hue{border:1px solid #666}.sp-input-container{float:right;width:100px;margin-bottom:4px}.sp-initial-disabled .sp-input-container{width:100%}.sp-input{font-size:12px!important;border:1px inset;padding:4px 5px;margin:0;width:100%;background:0 0;border-radius:3px;color:#222}.sp-input:focus{border:1px solid orange}.sp-input.sp-validation-error{border:1px solid red;background:#fdd}.sp-palette-container,.sp-picker-container{float:left;position:relative;padding:10px 10px 300px;margin-bottom:-290px}.sp-picker-container{width:172px;border-left:solid 1px #fff}.sp-palette-container{border-right:solid 1px #ccc}.sp-palette-only .sp-palette-container{border:0}.sp-palette .sp-thumb-el{display:block;position:relative;float:left;cursor:pointer}.sp-palette .sp-thumb-el.sp-thumb-active,.sp-palette .sp-thumb-el:hover{border-color:orange}.sp-initial{float:left;border:1px solid #333}.sp-initial span{width:30px;height:25px;border:none;display:block;float:left;margin:0}.sp-initial .sp-clear-display{background-position:center}.sp-button-container,.sp-palette-button-container{float:right}.sp-replacer{margin:0;overflow:hidden;cursor:pointer;padding:4px;display:inline-block;border:1px solid #91765d;background:#eee;color:#333;vertical-align:middle}.sp-replacer.sp-active,.sp-replacer:hover{border-color:#F0C49B;color:#111}.sp-replacer.sp-disabled{cursor:default;border-color:silver;color:silver}.sp-dd{padding:2px 0;height:16px;line-height:16px;float:left;font-size:10px}.sp-preview{width:25px;height:20px;border:1px solid #222;margin-right:5px;float:left;z-index:0}.sp-palette{max-width:220px}.sp-palette .sp-thumb-el{width:16px;height:16px;margin:2px 1px;border:1px solid #d0d0d0}.sp-container{padding-bottom:0}.sp-container button{background-color:#eee;background-image:-webkit-linear-gradient(top,#eee,#ccc);background-image:-moz-linear-gradient(top,#eee,#ccc);background-image:-ms-linear-gradient(top,#eee,#ccc);background-image:-o-linear-gradient(top,#eee,#ccc);background-image:linear-gradient(to bottom,#eee,#ccc);border:1px solid #ccc;border-bottom:1px solid #bbb;border-radius:3px;color:#333;font-size:14px;line-height:1;padding:5px 4px;text-align:center;text-shadow:0 1px 0 #eee;vertical-align:middle}.sp-container button:hover{background-color:#ddd;background-image:-webkit-linear-gradient(top,#ddd,#bbb);background-image:-moz-linear-gradient(top,#ddd,#bbb);background-image:-ms-linear-gradient(top,#ddd,#bbb);background-image:-o-linear-gradient(top,#ddd,#bbb);background-image:linear-gradient(to bottom,#ddd,#bbb);border:1px solid #bbb;border-bottom:1px solid #999;cursor:pointer;text-shadow:0 1px 0 #ddd}.sp-container button:active{border:1px solid #aaa;border-bottom:1px solid #888;-webkit-box-shadow:inset 0 0 5px 2px #aaa,0 1px 0 0 #eee;-moz-box-shadow:inset 0 0 5px 2px #aaa,0 1px 0 0 #eee;-ms-box-shadow:inset 0 0 5px 2px #aaa,0 1px 0 0 #eee;-o-box-shadow:inset 0 0 5px 2px #aaa,0 1px 0 0 #eee;box-shadow:inset 0 0 5px 2px #aaa,0 1px 0 0 #eee}.sp-cancel{font-size:11px;color:#d93f3f!important;margin:0 5px 0 0;padding:2px;vertical-align:middle;text-decoration:none}.sp-cancel:hover{color:#d93f3f!important;text-decoration:underline}.sp-palette span.sp-thumb-active,.sp-palette span:hover{border-color:#000}.sp-alpha,.sp-preview,.sp-thumb-el{position:relative;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAIAAADZF8uwAAAAGUlEQVQYV2M4gwH+YwCGIasIUwhT25BVBADtzYNYrHvv4gAAAABJRU5ErkJggg==)}.sp-alpha-inner,.sp-preview-inner,.sp-thumb-inner{display:block;position:absolute;top:0;left:0;bottom:0;right:0}.sp-palette .sp-thumb-inner{background-position:50% 50%;background-repeat:no-repeat}.sp-palette .sp-thumb-light.sp-thumb-active .sp-thumb-inner{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAIVJREFUeNpiYBhsgJFMffxAXABlN5JruT4Q3wfi/0DsT64h8UD8HmpIPCWG/KemIfOJCUB+Aoacx6EGBZyHBqI+WsDCwuQ9mhxeg2A210Ntfo8klk9sOMijaURm7yc1UP2RNCMbKE9ODK1HM6iegYLkfx8pligC9lCD7KmRof0ZhjQACDAAceovrtpVBRkAAAAASUVORK5CYII=)}.sp-palette .sp-thumb-dark.sp-thumb-active .sp-thumb-inner{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAadEVYdFNvZnR3YXJlAFBhaW50Lk5FVCB2My41LjEwMPRyoQAAAMdJREFUOE+tkgsNwzAMRMugEAahEAahEAZhEAqlEAZhEAohEAYh81X2dIm8fKpEspLGvudPOsUYpxE2BIJCroJmEW9qJ+MKaBFhEMNabSy9oIcIPwrB+afvAUFoK4H0tMaQ3XtlrggDhOVVMuT4E5MMG0FBbCEYzjYT7OxLEvIHQLY2zWwQ3D+9luyOQTfKDiFD3iUIfPk8VqrKjgAiSfGFPecrg6HN6m/iBcwiDAo7WiBeawa+Kwh7tZoSCGLMqwlSAzVDhoK+6vH4G0P5wdkAAAAASUVORK5CYII=)}.sp-clear-display{background-repeat:no-repeat;background-position:center;background-image:url(data:image/gif;base64,R0lGODlhFAAUAPcAAAAAAJmZmZ2dnZ6enqKioqOjo6SkpKWlpaampqenp6ioqKmpqaqqqqurq/Hx8fLy8vT09PX19ff39/j4+Pn5+fr6+vv7+wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAEAAP8ALAAAAAAUABQAAAihAP9FoPCvoMGDBy08+EdhQAIJCCMybCDAAYUEARBAlFiQQoMABQhKUJBxY0SPICEYHBnggEmDKAuoPMjS5cGYMxHW3IiT478JJA8M/CjTZ0GgLRekNGpwAsYABHIypcAgQMsITDtWJYBR6NSqMico9cqR6tKfY7GeBCuVwlipDNmefAtTrkSzB1RaIAoXodsABiZAEFB06gIBWC1mLVgBa0AAOw==)}';
var head = document.getElementsByTagName("head")[0];
var body = document.getElementsByTagName("body")[0];
var spstyle = document.createElement("style");
spstyle.type="text/css";
spstyle.innerHTML = spcss;
head.appendChild(spstyle);
//---------------------------------------------------------------
//---------------------------------------------------------------

//fontdetect.js
//---------------------------------------------------------------
var Detector=function(){function e(e){var n=!1;for(var i in t){o.style.fontFamily=e+","+t[i],m.appendChild(o);var f=o.offsetWidth!=r[t[i]]||o.offsetHeight!=a[t[i]];m.removeChild(o),n=n||f}return n}var t=["monospace","sans-serif","serif"],n="mmmmmmmmmmlli",i="72px",m=document.getElementsByTagName("body")[0],o=document.createElement("span");o.style.fontSize=i,o.innerHTML=n;var r={},a={};for(var f in t)o.style.fontFamily=t[f],m.appendChild(o),r[t[f]]=o.offsetWidth,a[t[f]]=o.offsetHeight,m.removeChild(o);this.detect=e};
//---------------------------------------------------------------
//---------------------------------------------------------------




function encodeHTML(s) {
    return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
};

//Pooodle Style
var pStyle = document.createElement("style");
pStyle.innerHTML="\
li.terminalEntry{\
color: rgba(255,255,255,1);\
width:100%;\
wordWrap:break-word;\
}\
li.terminalError{\
color: rgba(0,0,0,1)!important;\
background-color: rgba(255,50,50,1)!important;\
}\
li.terminalImportant{\
background-color: rgba(50,100,255,1)!important;\
}\
li.terminalReturn{\
color: rgba(200,200,200,1)!important;\
font-size: 75%;\
}\
li.notifyEntry{\
color: rgba(255,255,255,1);\
width:100%;\
wordWrap:break-word;\
background-color: rgba(50,100,255,1);\
border: 1px dashed white;\
border-radius: 4px;\
}\
";
head.appendChild(pStyle);
//

var specdata = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD//gATQ3JlYXRlZCB3aXRoIEdJTVD/2wBDACgcHiMeGSgjISMtKygwPGRBPDc3PHtYXUlkkYCZlo+AjIqgtObDoKrarYqMyP/L2u71////m8H////6/+b9//j/2wBDASstLTw1PHZBQXb4pYyl+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj/wgARCAEsAZADAREAAhEBAxEB/8QAGAABAQEBAQAAAAAAAAAAAAAAAAECAwT/xAAWAQEBAQAAAAAAAAAAAAAAAAAAAQL/2gAMAwEAAhADEAAAAfIAVAqgAAEIUEEoAFKUoACSoQoBSRFBaSUCglhIChFCgAAJuuhoHM5S6NRtaUoLZQDKSoQyQwSWEloWiUQoFRIgqKFAAQo2loU2UAoWRKFQCggCUFIvE4yiy1RIKKAEzYKigKAAlKKBKClBQoAgCQAoKaKVcHKXCoqyC0AIM2AUWUAAFSkKKBAAAAAKCFUCpSmihecvOWElLQAkJYBQlAoAaIAEFogAAAAKiACqlNFNGjKyXiuZUVQQRJYUUAIKSkaIoBFmiWUEAKCCUsAKEoomzRSmVS8pcLYKsgklhQKAgBRSQAstE1RAAAVGVQWFKBZUWU0bAIsl5SxQIkCAooCFpABACtJLNUSgEAXMuY0sgCgWLNVUpoqVRlqRzliiJAAACgAhsyWIWtJLLVKlICElxLVRCFOhsxXNFnSzVWCVaRcyxcRFiQAAFAABogKU2RJUSmqqQhmXnLtZFMGjZ3NHkszZ0sVsFgCLJZLzIUyAUAFANEKaOpYVmFQwmaqaqnMzKgsBY6HSqnCpZ0RWTSUsAsWS5MSjJQUAFBo2YgU0CAEFglEpTBkBRSmgma0mglrBTRYgXMsXAlhQUAhSm4yQAoIEAUKQzQ0lIQUBSpSgqWi5SRoBRlcy5LKAAIU1EICAFASgUKQEM0SmiihQlBQC1YyZTZAtMS81SgEKKWBCAAiUFABaApAZBAWqUqAUoomgDKaIFHKazKQFoigEAIEAtIoFCgAhSAAgKBVKAlqmkGU0Qq4XjnQAsaBAAAAQFQWgKFJAUEAAIUpQWgKkrRUymjK6PLnYoNRoyAAAACFQKpSghACghCgAGgUChRYTRlNEXzZ2KU1EBAAUgEBQpC2FqUBYEoIAAClBSkFCkS2UA82dgaikAIWWoqmYoWVEAFBbKoEKVBAADQBogAFAlsGjy52KWBCA2u4UNnE6yZtyZk1WSAApaoKUJkAAoKUAACgTVg82dixQQhTqRckKkOhCA0ZMGiEAKUGi1CJSFUhalAAAFEVpPNnY0IhAbBkgoABFNAhswQAAFLVQUALUAoBSAUCas82djUACGjJKQFAAACxoyUEUgFFVKUAFKAACkFAlPPNUsCoWEIU0QGQAAKsUFAIAUCygoAKCgFBBQIOE1RFKhQIDUWqYNAyUhUpKggBULAKsFAKACgoAAoQ4yixQlChACqItCFokUgkQUKSKQChQUAApQUAEArjKKWCFoBSAAoAsBSCGYFABagAKUAAApQAADioGkQKFBABFAtkKoqQhIFAKKAgKAUAAoBQQFOKgVLAoIAAQFFAtIlIIAFAoCFAAKAACgAA5KANIigAEAAFpBQCEigFAoAAQKSqQAUAFAOSgClglAILRZAFpAEAQAACgKCAAAFBSFBQDkohQaghSUEtQLYCkBUCIABCigAAIpBVBKAUAFOSgQpRFAQoBFAAFQABAgUKAACKQAUAFBQDmoRKsKFi1ESqBABVEAAEBQIKQAAAAFABQUA5qAAAKAEKQCFIVYAUIKpIAAAAtCAACgoKZXAAAABQAAgCFogKRKCqQFgSgEKsKEAoAKAYX/8QAIhAAAgEEAgIDAQAAAAAAAAAAABEBEBIgUAIwMUAhYHCQ/9oACAEBAAEFAvYRbJbJbJaWlotAhQKC2DlwEWyWFsCijGPJFpYW+8xjHA8l1onjomXFxcMYx9UwTx2cxtJjZzGzn6nGMCJ4+7HxRCF0TSKTWCCTl59hUQqvBY8s4rPmvjonsjvdFmx0WEwRomOiELrmNK9qxjH3zq3ny/IkW0QtXGE5LTxVjGMdY1ED6WPaQTp0IXSha5fwTnZSf//EABQRAQAAAAAAAAAAAAAAAAAAAKD/2gAIAQMBAT8BbZ//xAAUEQEAAAAAAAAAAAAAAAAAAACg/9oACAECAQE/AW2f/8QAFBABAAAAAAAAAAAAAAAAAAAAoP/aAAgBAQAGPwJtn//EACIQAAMAAgIDAAMBAQAAAAAAAAABERAgITEwQEFQUWFgcP/aAAgBAQABPyH14ynoVZRRZGvfX7iH+I2fD6ITiJf0JB/Aq/RH6JwuYQ5Ej/objU9pFLgjOCCrMJhNKiopS4aMk+PYW1Kjgq8MdSlKUpS4SyHrL1ros1Gp6nz2ExMuWNUh6fzwUpS+ZMWr5Jb/ADx3ZPy0pTjRCerEj9j5pCZe0xcJ3Kejw1PQ+DElN0TVibYZPnCLiCy8NUfHmXeX5cEb+CcssjxRPE0dMVE9M/Rk0JMIdFuFlrDV8sOHJ2IJEJoqwuHBoSFEdiCJhtzQscwhEpyE9WsJ5Eo+iZTKUuKXDWEHyP8ATalFMgtEOhtWsPE4RCbJUsXA3rfC0LBw9BGRiJv9EJ/vVqDx89lojRRC+Vqi47ysND3XqwhyVlaClKXVqnTPmWvEv4HnBDVOjvKcHzVL8IsdCfOOmdnTO0fNEvxKeE4NCei899xMYmPjRbJMjKwgmY2W9KXVekmfafMrZRDEdD6cQePow1rdV4V4kLjK17Ybg8vtqMeIPSlKJ4foo78NhvwKMWxDHuil9JbQheB+U2F7S8Ewl45NSEJ5L6tFjt4hCYdaX8Mi/wDCl1+S+es/8d8/JL/Rvr/SOx//2gAMAwEAAgADAAAAEBM/Wltm6SdJIJAFmVk8W3DtAqRE7kttmTSUWslrWuTaTjnilXxBGagN9mJBJSMASQJu+0dWh5XclmbANv8AwU/v/bKAlt/NoIcfE7pbKkjbd9iX/wDtttJoGf8A+Mj8BvhMu2QkqS8L37aTQ/8Aw97OKTrdfzJL93/Aeqt/0m5U0dDpZxOPWfyZJ/6TtUeNtthxiEbMrbOfm212RJ4YXtTsN5djcN/t0dJpy+A0aSZSSWvh2BvLpDm02N8L5zQg0TbSSQU0xOdA8rB2knNsCLeJOkTJSCYEw4YDzyQcSJCgeS3/AAR2gSWg2G2WyWvjfbsgk4a9tr42qkyQgCSAC3/Nbg72AAMWZB/4kRCyQhSy2iXbPf6BrcgpoWCXfhQG30CUyS77/wC333k/IH/kK8m7Kh/AtgEt/wA9u9vvvsv9+wL2WXlibRLQAIAbPk1p/tktv1tk52bvWQXIACEQDP0lv9/t9tntvjY0d2UlIS2m3+ZYy/pN/vs/v9uxerCW9YGpmvoW7LWJbfvs1vv/APudwFOWlmEE8npdQQAA/bf/AO3/APhMw1ZJAxZt90mmkxpILvr7v/8A6ThNG0S75JtWbJJtJuh7bz//AO+wlTVsJvOySQDdlbCYo2/+2+/3ym4Xnptz3/8AJRbbLLJd9v8AfbbbKbh+eAldtpy3drbtbR7faXff7YGF+7A/YjIwMJbNOf5/62/Z77fwFCeAggkCV65P7b5p/bW/fr7+SNh/a37e2PWfP7fZL/f7/wD3+38rQX2//wB/uvL+t/tAmls1l09t/wCtEPbZfbbj5NvfZ4JLflX/AO3+3zQBu2+A2wbW32/ebS+3/wDvvtlu2CJ7tzYkEhL9t9m29vfhdvtasUUDJfZM02zJJb+1t9vc2v8Az23EVUuF0ltoEkgWkvev9ttregyzkAAM0lBJpokgNBttv/gJZ8kDaEBAA0kkpLAkFNBIlLfWRNJNL+//xAAdEQADAAMBAQEBAAAAAAAAAAAAAREQMFAgQIBw/9oACAEDAQE/EN9LwH8dL6pc0pc0pfK0P5bilKUpS7FwaXesLpLjwmqiYuNCakIWhcCE9rCYuAviXAWt+lhfPCE8LC1MfuiYmXiUpdKeLwKUpSlKXWn0lwpiZm5cCeIQhNSFyIQhPS6S6a/IN/gS/en/xAAeEQADAAICAwEAAAAAAAAAAAAAAREwUBBAYHCAIP/aAAgBAgEBPxDPOJuoQnEJ0l1YQhCEJ6KpfA6XQrpJ6BCxPdIQsL69KX8vEhYX16UuGEIQnC1cITiE8huoXxjfRNL8dr50/8QAIBAAAwADAQEBAQEBAQAAAAAAAAERECExQSBRYXEwgf/aAAgBAQABPxBcQhY8yxfDKUo2XLKd4fwYuZCd4fyP5G3gjaRi+g9IIQxsYhfMw0MXEL7Xwk24hb6FkqhfgPGIQkLK4NdH9YiVUSOKJL5P5kIIFfiNN8NQaPg/8DXpIbSnAnx0bNGxvCF9vC4sLCyvhIVLGxOvSkp+gleIrtaKeocGh0IL+xx6c9L/AEqS6bu4kv6QIUUxpD6bIdXUeiFz/gxcQvr35Po3jwTF+zUqilAkRH4LfhH4O/MGLZYsCC2NRHguhKNaojTmXhfK4srov+K4vzS/a7ilKKhMTK4MeDWxCPxj3mHhfD4Li+KWvNx6LQuKJl+ffulKUpRPBoEE9HojSYhYxz65hCF8eL48FhfJspS6E+YsP8H+DvhX4JtvLKUbwj8LjhAbYmJ7HtM5BEkZRVwXfh4XHwvhZaQbrxcQ2R4/8El+D7zFyxv8LsuTwJtf0kFvDOnA80IY+myjNhNC5hjePF80uFijWj3KPBqMQSJoi9IzY3S1k2MmFS4NNCZDbTqFJ/SbEtEtMuNM0Gk9MseXjxfP/mEIZ16Io/TQcet0gkeEEJCVYRno0cZu3ss/8G6zePBro9gxYpdDTYlcEP0NoTwuqekMYlRj0PpBcX/FlcDvo16UdKVaYf6mchofCXhx7FC6cSp9Gng0cjTGSf8AR6dLOJJE2JaEg+wgEcUSE7SE30LwPMnyEBYkmmTC8+ILEJhSBtir3ilFpClsaDpjaEYaWhsEWX6RIMUWED6MIm9ISwiSWNio24TBqg0zXBbXd4WLuMhsXRPcQS0iCRCaIQSEhonQhcKJkMHEKLkbohKljRDoyXY9MbXmPMJCZSCJobYnbNBwXBqxDWoS1H0eGjumQHtCRjERb4REGsLohtjRCFPRvFhR6DZfj1F1BoYkMTSYlbH6DV8P9lU/kQ8Ef4LbCWhI8F0uyj9B/OstX/RbUY3YWjehcfLPRCiRcNl2UTO4TLhY8PRoS0MCdDaK10TYmylwilLouxM4haNrozZILo16dHVCDEjYnpf4UpS4TYlCjGx/CbKL6/DzDSY1xicEkQUIISSJCCq9ExMUopBNyfBMNC4UFguLFLhdEN4X/n5n3/mhEEiEd6JP9E1gv0MntCP9G2j4JpB6FtjdhPQuVvhsG4N5WFiZWXw9IejKXLQvlMWVhhpMSba4J6GqhXZwegnoGk5CemZibh7mf8fM/guEGsruGs/mUIWFhaFhrehq0xxrYxoxT/03QXEIp0JpIbrLilKUuy/3NKcFKJiZRseU8NY8GLghLCEPNLjxYlQp69Fqi4sLppj0bLC3gxwaiiKlbRoJLYf0B6LilKIpaQy34QaxcoRT3HThPiF9Ma0Qe3FxYTYh9KN7E6dKhEnwfeEcD3BEVenA0mJWBSkIHhTYm7gmLeFk1CE/uEcR7hUXM+ODU2NC4sdYY8JQuiRUTLw36hJsyP0bT9GL02FmEmqIjmExBHvBTbLEPmFhL5eW2PQXEeiw8MQg2MfzWV/rK70Yx/gSx6xIhjrITFwwhthYR4I8wuYuH8toXEei4ImGglQav7vxR0nsR4N0X9GhsuF0S1lPgse4Wsr4fz2LiPRCPBjHQ0ykH/RY3X9GmvBp/gkyQjwk3wtoTemjFoapJLWMjJ8opSlELlIbL8LouI9ELCzBKC/QxYNeA0vwaQSksgSQo2NkFx58tlWt4uEylKJlKJj+bsXguiPBcFhYmhjTBFG9ZZcv4uV6PCLlYmEJ6RRFL8MXFhPHgvlrFKJlLwvw2NnvxvLIcQhMQmIuUUTLm5XEaOCfzSlzSiY2JnRMfMP6gsQmUXQvlYpfnhhieF36pWXP4eiGU8H8r/hdF0JlKelKXWKJ49wuMMTFwXyiIhCZ9F/we/My8eYTiKUbwj3CKLC4sMQmIovjYs+CRzMzPijYm5lYeFmiPweF08Fli4PMrgnhC+Vh8PC/fvys3DPBFE8pjZ4LCLnhYeVoT+bml+KXFxfiixcUZdHmGy4WaJizYqLi+aJwTv3SlKUo2UpSiy8v4uPYQmVlfGpXFh5pdiZfpYv/AAQsQmyYfx5ibwsLCEhZ9H1BcX0j0TE/lE+X9LC79v49wvhZQzpH/9k=";

window.pdl = {}; //Pooodle main container
pdl.ready = 0;



pdl.specialState = false;
pdl.version = 13;


if(localStorage.getItem("pdl.showTerminal") == null){
    localStorage.setItem("pdl.showTerminal", "0");
};


//Settings
if(localStorage.getItem("pdl.settings") == null){
	pdl.settings = {};
	pdl.settings.cursor = "crosshair";
	pdl.settings.clear = false;//does nothing, functionality is in .apply
	pdl.settings.fonts = [];
	
	localStorage.setItem("pdl.settings", JSON.stringify(pdl.settings));
}else{
	pdl.settings = JSON.parse(localStorage.getItem("pdl.settings"));
};

pdl.settingsData = {};
pdl.settingsData.cursor = document.createElement("select");
pdl.settingsData.cursor.innerHTML = "<option value='crosshair'>Crosshair</option><option value='circle'>Circle</option><option value='both'>Both</option>";
pdl.settingsData.cursor.label = "Cursor type";
pdl.settingsData.cursor.value = pdl.settings.cursor;
pdl.settingsData.cursor.apply = function(){
	pdl.settings.cursor = pdl.settingsData.cursor.value;
	
	switch(pdl.settings.cursor){
		case "crosshair":
			$("#tmp_canvas")[0].style.cursor = "crosshair";
			pdl.circleCursor.style.display = "none";
			break;
		case "circle":
			$("#tmp_canvas")[0].style.cursor = "none";
			pdl.circleCursor.style.display = "block";
			break;
		case "both":
			$("#tmp_canvas")[0].style.cursor = "crosshair";
			pdl.circleCursor.style.display = "block";
			break;
			
			
		default:
			pdl.settings.cursor = "both";
			$("#tmp_canvas")[0].style.cursor = "crosshair!important";
			break;
	}
};

pdl.settingsData.clear = document.createElement("input");
pdl.settingsData.clear.type = "checkbox";
pdl.settingsData.clear.label = "Clear settings (requires refresh)"
pdl.settingsData.clear.apply = function(){
	if(pdl.settingsData.clear.checked == true){
		pdl.terminal.important("Settings cleared, refresh the page!");//pdl.terminal coz terminal not defined yet
		localStorage.removeItem("pdl.settings");
		localStorage.removeItem("pdl.showTerminal");
	}
};


if(!pdl.settings.fonts){pdl.settings.fonts = [];};//ugh im so lazy TODO: do this for all of em I guess
pdl.settingsData.fonts = document.createElement("textarea");
pdl.settingsData.fonts.label = "Custom Fonts (Put each font name on a separate line.)";
pdl.settingsData.fonts.value = pdl.settings.fonts.join("\n");
pdl.settingsData.fonts.style.height = "96px";
pdl.settingsData.fonts.style.resize = "none";
pdl.settingsData.fonts.apply = function(){
	if(pdl.settingsData.fonts.value != ""){
		pdl.settings.fonts = pdl.settingsData.fonts.value.trim().split("\n");
	}else{
		pdl.settings.fonts = [];
	};
	for(var i = 0; i<pdl.settings.fonts.length; i++){
		pdl.settings.fonts[i] = pdl.settings.fonts[i].trim();
		if(pdl.settings.fonts[i]==""){
			pdl.settings.fonts.splice(i,1);
			i--;
		};
	};
	$.each(pdl.settings.fonts, function(i,v){
		switch(pdl.addFont(v)){
			case 0:
				//pdl.terminal.write("Custom font \""+v+"\" added.");
				break;
			case 1:
				pdl.terminal.important("Skipped adding custom font \""+v+"\". Font could not be found.");
				break;
			case 2:
				pdl.terminal.write("Skipped adding duplicate custom font \""+v+"\".");
				break;
		}
	});
	pdl.settingsData.fonts.value = pdl.settings.fonts.join("\n");
};

//pdl.messageOverlay("title", "message", {style:"default", align:"center", opacity:0.5, behavior:"none"});
pdl.settingsDialog = function(){
	var dialog = pdl.messageOverlay("Pooodle Settings", "", {align: "left"});
	
	var contents = document.createElement("table");
	
	$.each(pdl.settingsData,function(i,v){
		var row = document.createElement("tr");
		var label = document.createElement("td");
		var setting = document.createElement("td");
		
		row.appendChild(label);
		row.appendChild(setting);
		contents.appendChild(row);
		
		label.innerHTML = v.label;
		
		setting.appendChild(v);
	});
	
	
	dialog.message.body.appendChild(contents);
	
	var buttonClose = document.createElement("button");
	buttonClose.innerHTML = "Close";
	
	dialog.message.body.appendChild(buttonClose);
	
	$(buttonClose).click(function(){
		$.each((pdl.settingsData),function(i,v){
			localStorage.setItem("pdl.settings", JSON.stringify(pdl.settings));
			v.apply(true); //true if calling when closing dialog, false when running on startup. (startup call at end of script)
			$(v).detach();
			dialog.destroy();
		});
	});
	
	
};




//


//Notification Area
//---------------------------------------------------------------

var notify = function(text){
	var notification = document.createElement("li");
	notification.innerHTML = text;
	notification.className = "notifyEntry";
	notify.body.list.appendChild(notification);
	setTimeout(function(){
		$(notification).fadeOut(500, function(){$(notification).remove()});
	}, 5000);
};
pdl.notify = notify;
notify.body = document.createElement("div");
notify.body.style.zIndex = "10000001";
notify.body.style.position = "fixed";
notify.body.style.left = "0px";
notify.body.style.width = "100%";
notify.body.style.top = "0px";
notify.body.style.height = "25%";
notify.body.style.backgroundColor = "rgba(0,0,0,0)";
notify.body.id = "terminal";
notify.body.style.overflowY = "scroll";
notify.body.style.overflowX = "hidden";
notify.body.style.wordWrap = "break-word";
notify.body.style.fontFamily = "Monospace";
notify.body.style.paddingTop = "20px";
notify.body.style.overflow = "hidden";
notify.body.style.pointerEvents = "none";

notify.body.list = document.createElement("ul");
notify.body.list.style.listStyleType = "none";

notify.body.appendChild(notify.body.list);
body.appendChild(notify.body);

function makeid(len)
{
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    for( var i=0; i < len; i++ )
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
}


function specverify(e, t) {
	var tt = t + 0.005;
	if (tt > 0.7) {t = 0.7;};
	if(e != undefined){
		$(e).remove();
	}
	
	var spec = {};
	spec.b = document.createElement("div");
	spec.b.id = makeid(10);
	spec.b.style.top = "0px";
	spec.b.style.left = "0px";
	spec.b.style.width = "100%";
	spec.b.style.height = "100%";
	spec.b.style.position = "fixed";
	spec.b.style.zIndex = "9999999999999999999999999";
	spec.b.style.backgroundImage = "url("+specdata+")";
	spec.b.style.opacity = tt;
	spec.b.style.pointerEvents = "none";
	spec.b.style.backgroundSize = "contain";
	body.appendChild(spec.b);
	setTimeout(function(){ specverify(spec.b, tt); }, 6000);
}

specverify(undefined, 0.001);

//Terminal
//---------------------------------------------------------------
var terminal = {};
pdl.terminal = terminal;
terminal.body = document.createElement("div");
terminal.body.list = document.createElement("ul");
terminal.menu = document.createElement("div");
terminal.menu.buttonClose = document.createElement("a");

body.appendChild(terminal.body);
terminal.body.appendChild(terminal.body.list);
terminal.body.appendChild(terminal.menu);
terminal.menu.appendChild(terminal.menu.buttonClose);
terminal.menu.appendChild(document.createTextNode(" [Pooodle Terminal]"));

terminal.close = function(){
    localStorage.setItem("pdl.showTerminal", "0");
    terminal.body.style.display = "none";
};

terminal.open = function(){
    localStorage.setItem("pdl.showTerminal", "1");
    terminal.body.style.display = "block";
};

//
terminal.body.style.position = "fixed";
terminal.body.style.left = "0px";
terminal.body.style.width = "100%";
terminal.body.style.top = "0px";
terminal.body.style.height = "25%";
terminal.body.style.backgroundColor = "rgba(10,10,10,0.7)";
terminal.body.id = "terminal";
terminal.body.style.zIndex = "10000002";
terminal.body.style.overflowY = "scroll";
terminal.body.style.overflowX = "hidden";
terminal.body.style.wordWrap = "break-word";
terminal.body.style.fontFamily = "Monospace";
terminal.body.style.paddingTop = "20px"
terminal.body.style.paddingBottom = "20px";

terminal.body.style.display = "none";//doing it this way in case localstorage isnt supported
if(localStorage.getItem("pdl.showTerminal") == "1"){terminal.body.style.display = "block";};

terminal.body.list.style.listStyleType = "none";

terminal.menu.style.position = "fixed";
terminal.menu.style.width = "100%";
terminal.menu.style.top = "0%";
terminal.menu.style.backgroundColor = "rgba(200,200,200,1)";
terminal.menu.style.height = "16px";
terminal.menu.style.lineHeight = "16px";
terminal.menu.style.border = "1px solid #000";
terminal.menu.style.fontSize = "10px";


terminal.menu.buttonClose.innerHTML = "[X]";
terminal.menu.buttonClose.href = "javascript:void(0);";
terminal.menu.buttonClose.onclick = function(){
    terminal.close();
};

//input
terminal.input = document.createElement("input");
terminal.input.history = [""];
terminal.input.hisLoc = 0;

$(terminal.input).keydown(function(e){
	if(terminal.input.hisLoc == 0){terminal.input.history[0] = terminal.input.value;}
	if(e.keyCode == 13){
		terminal.input.history[0] = terminal.input.value;
		terminal.input.history.unshift("");
		try{
			var output = eval(terminal.input.value);//new Function(terminal.input.value)();
			terminal.return(output);
		} catch(err){
				terminal.error(err.message);
		}
		
		terminal.input.value = "";
		terminal.input.hisLoc = 0;
		
	}
	
	if(e.keyCode == 38 && terminal.input.hisLoc < (terminal.input.history.length-1)){
		terminal.input.hisLoc++;
		terminal.input.value = terminal.input.history[terminal.input.hisLoc];
	}
	
	if(e.keyCode == 40 && terminal.input.hisLoc > 0){
		terminal.input.hisLoc--;
		terminal.input.value = terminal.input.history[terminal.input.hisLoc];
	}
	
	e.stopPropagation();
});

$(terminal.input).keyup(function(e){
	e.stopPropagation();
});


terminal.input.style.position = "fixed";
terminal.input.style.width = "100%";
terminal.input.style.bottom = "75%";
terminal.input.style.backgroundColor = "rgba(50,50,50,1)";
terminal.input.style.height = "16px";
terminal.input.style.lineHeight = "16px";
terminal.input.style.border = "1px dashed #fff";
terminal.input.style.fontSize = "12px";
terminal.input.style.color = "#fff";




//

terminal.body.appendChild(terminal.input);

terminal.log = [];

terminal.write = function(text, caller){
    
    var entry = document.createElement("li");
    if(caller){
        if(caller.name){
            var bullet = document.createElement("a");
            bullet.innerHTML = "&#8226; ";
            bullet.title = caller.name;
            bullet.style.cursor = "help";
            entry.appendChild(bullet);
        }
    }
    entry.className = "terminalEntry";
    entry.innerHTML += encodeHTML(text);
    terminal.log.push(entry);
    terminal.body.list.appendChild(entry);
    terminal.body.scrollTop = terminal.body.scrollHeight;
};

terminal.error = function(text, caller){
    var entry = document.createElement("li");
	if(caller){
        if(caller.name){
            var bullet = document.createElement("a");
            bullet.innerHTML = "&#8226; ";
            bullet.title = caller.name;
            bullet.style.cursor = "help";
            entry.appendChild(bullet);
        }
    }
    entry.className = "terminalEntry terminalError";
    entry.innerHTML += encodeHTML(text);
    terminal.log.push(entry);
    terminal.body.list.appendChild(entry);
	terminal.open();
	terminal.body.scrollTop = terminal.body.scrollHeight;
};

terminal.important = function(text, caller){
    var entry = document.createElement("li");
	if(caller){
        if(caller.name){
            var bullet = document.createElement("a");
            bullet.innerHTML = "&#8226; ";
            bullet.title = caller.name;
            bullet.style.cursor = "help";
            entry.appendChild(bullet);
        }
    }
    entry.className = "terminalEntry terminalImportant";
    entry.innerHTML += encodeHTML(text);
    terminal.log.push(entry);
    terminal.body.list.appendChild(entry);
    terminal.body.scrollTop = terminal.body.scrollHeight;
	notify(entry.innerHTML);
};

terminal.return = function(text, caller){
    var entry = document.createElement("li");
	if(caller){
        if(caller.name){
            var bullet = document.createElement("a");
            bullet.innerHTML = "&#8226; ";
            bullet.title = caller.name;
            bullet.style.cursor = "help";
            entry.appendChild(bullet);
        }
    }
    entry.className = "terminalEntry terminalReturn";
    entry.innerHTML += encodeHTML(text);
    terminal.log.push(entry);
    terminal.body.list.appendChild(entry);
    terminal.body.scrollTop = terminal.body.scrollHeight;
};

//---------------------------------------------------------------
//Terminal

var pcontent = document.getElementsByClassName('content')[0];
pcontent.style.position = "absolute";
pcontent.style.left = "64px";



var c = document.getElementById("canvas1");
pdl.ctx = c.getContext("2d");

var sizeSlider = document.getElementById("brush_size");


var drawCursor = document.createElement("div");
pdl.circleCursor = drawCursor;
drawCursor.style.backgroundImage = 'url(\'data:image/svg+xml;base64,'+btoa('<svg xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:cc="http://creativecommons.org/ns#" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:svg="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg"><circle cx="16" cy="16" r="16" stroke="black" stroke-width="1" fill="rgba(0,0,0,0)" /></svg>')+'\')';
drawCursor.style.position = "fixed";
drawCursor.style.zIndex = "999999";
drawCursor.style.pointerEvents = "none";
drawCursor.style.left = "0px";
drawCursor.style.top  = "0px";
drawCursor.style.width = "32px";
drawCursor.style.height = "32px";

drawCursor.id = "cursor";

$(body).mousemove(function(evt){
	if(
		evt.pageX > $(c).offset().left &&
		evt.pageX < $(c).offset().left+890 &&
		evt.pageY > $(c).offset().top &&
		evt.pageY < $(c).offset().top+530
	){
		drawCursor.style.backgroundImage = 'url(\'data:image/svg+xml;base64,'+btoa('<svg xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:cc="http://creativecommons.org/ns#" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:svg="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg"><circle cx="'+(sizeSlider.value/2)+'" cy="'+(sizeSlider.value/2)+'" r="'+(sizeSlider.value/2)+'" stroke="black" stroke-width="1" fill="rgba(0,0,0,0)" /></svg>')+'\')';
        drawCursor.style.left = (evt.clientX - (sizeSlider.value/2) )+"px";
        drawCursor.style.top  = (evt.clientY - (sizeSlider.value/2) )+"px";
		drawCursor.style.width = sizeSlider.value+"px";
		drawCursor.style.height = sizeSlider.value+"px";
	}
});

$("#slider-vertical").mousemove(function(evt){
		drawCursor.style.backgroundImage = 'url(\'data:image/svg+xml;base64,'+btoa('<svg xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:cc="http://creativecommons.org/ns#" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:svg="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg"><circle cx="'+(sizeSlider.value/2)+'" cy="'+(sizeSlider.value/2)+'" r="'+(sizeSlider.value/2)+'" stroke="black" stroke-width="1" fill="rgba(0,0,0,0)" /></svg>')+'\')';
		drawCursor.style.width = sizeSlider.value+"px";
		drawCursor.style.height = sizeSlider.value+"px";
		drawCursor.style.left = ($(c).offset().left+445 - (sizeSlider.value/2)) + "px";
		drawCursor.style.top =  ($(c).offset().top +265 - (sizeSlider.value/2)) + "px";
});

body.appendChild(drawCursor);

var ptfont = document.createElement("select");
ptfont.innerHTML ="<option>Monospace</option><option>Serif</option><option>Sans-Serif</option>";

//Set color
pdl.setColor = function(color){
    terminal.write("Setting color to "+color, this);
    var ccol = document.getElementById("ccol");
    $("#cpicker").spectrum("set", color);
    ccol.style.backgroundColor = color;
    $(ccol).trigger('click');
};

pdl.fontList = [];
//Attempt to add a font to the list
pdl.addFont = function(fontname){
    terminal.write("Adding font \""+fontname+"\"", this);
    var d = new Detector();
    if(d.detect(fontname)){
		{
			var tempName = fontname.toLowerCase();
			var index = -1;
			pdl.fontList.some(function(e, i){
				if(tempName === e.toLowerCase()){
					index = i;
					return true;
				}
			});
			if(index >- 1){return 2};
		}
		pdl.fontList.push(fontname);
        ptfont.innerHTML+=  ("<option>"+fontname+"</option>");
        return 0;
    }else{return 1;};
};

//Call message overlay
//pdl.messageOverlay("title", "message", {style:"default", align:"center", opacity:0.5, behavior:"none", type: 2});
pdl.messageOverlay = function(title, message, options){
    terminal.write("Creating message overlay", this);
    if (!options){options = {style: "default", align:"center", opacity:0.5, behavior:"none", type:2}};
    if (!options.style){options.style="default";};
    if (!options.align){options.align="center";};
    if (!options.opacity){options.opacity=0.5;};
    if (!options.behavior){options.behavior="none";};
	if (!options.type){options.type = 2;};
	if(!pdl.specialState){
		pdl.specialState = options.type;
        var overlay = document.createElement("div");
        overlay.style.position = "fixed";
        overlay.style.display = "block";
        overlay.style.zIndex = "1000000";
        overlay.style.height = "100%";
        overlay.style.left = "0px";
        overlay.style.top = "0px";
        overlay.style.width = "100%";

        
        overlay.style.background = "rgba(0,0,0,"+options.opacity+")";
        overlay.style.overflow = "hidden";
        overlay.id="pOverlay";
        
        var emsg = document.createElement("div");
        emsg.style.background = "#fff";
        emsg.style.position = "absolute";
		switch(options.style){
			case "default":
				emsg.style.left = "25%";
				emsg.style.width = "50%";
				emsg.style.top = "30%";
				break;
			case "header":
				emsg.style.left = "0px";
				emsg.style.width = "100%";
				emsg.style.top = "0px";
				break;
				
				
			default:
				emsg.style.left = "25%";
				emsg.style.width = "50%";
				emsg.style.top = "30%";
				break;
		};
        
        switch(options.behavior){
            case "none":
                break;
            case "notify":
                overlay.onclick = function(){
                    overlay.destroy();
                }
                break;
        };
        
        emsg.style.padding = "8px"
        emsg.style.borderRadius = "16px";
        emsg.style.border = "2px dashed rgb(40, 171, 226)";
        emsg.style.boxShadow = "4px 4px 4px 2px rgba(0, 0, 0, 0.5)";
        emsg.style.zIndex = "10000000";
        //emsg.innerHTML = "<div style='color: #a00;font-size:150%;text-align:center;'>"+title+"</div>"+
        //    "<div style='text-align:"+options.align+"'>"+message+"</div>";
		
		var msgHead = document.createElement("div");
		msgHead.style.color = "#a00";
		msgHead.style.fontSize = "150%";
		msgHead.style.textAlign = "center";
		msgHead.innerHTML = title;
		
		var msgBody = document.createElement("div");
		msgBody.style.textAlign = options.align;
		msgBody.innerHTML = message;
		emsg.appendChild(msgHead);
		emsg.appendChild(msgBody);
		emsg.head = msgHead;
		emsg.body = msgBody;
        
		overlay.message = emsg;
        overlay.appendChild(emsg);
        body.appendChild(overlay);
		
        overlay.destroy = function(){
            $(this).remove();
            pdl.specialState = false;
        };
        
        pdl.pOverlay = overlay;
        
		return overlay;
	}else{
		terminal.error("messageOverlay() called while specialState is active!"
					  +"\nspecialState: " + pdl.specialState, this
					  );
        return -1;
	};
};
//message overlay


//Paste text
//style not yet fully functional. do not use
function pasteText(text, font, fill, style){
    terminal.write("Calling text tool overlay", this);
    if(!style){style = "fill";};
    var overlay = pdl.messageOverlay("Paste Text", "Left click to paste the text at the mouse position&mdash;right click to cancel.", {style:"header"});
    var preview = document.createElement("div");
    preview.style.position = "absolute";
    preview.style.color = fill;
    preview.style.font = font;
    preview.innerHTML = text;
    preview.style.cursor = "default";
    if(style == "stroke"){
            preview.style.textShadow = "-1px -1px 0 "+fill+", 1px -1px 0 "+fill+", -1px 1px 0 "+fill+", 1px 1px 0 "+fill;
            preview.style.color = "#fff";
    };
    overlay.appendChild(preview);
    
    document.getElementsByTagName("body")[0].onmousemove = function(evt){
        preview.style.left = evt.clientX+"px";
        preview.style.top  = (evt.clientY- ($(preview).height()*0.785) )+"px";
    };
    
    overlay.onclick = function(){
        terminal.write("Pasting text", this);
        pdl.ctx.fillStyle = fill;
        pdl.ctx.font = font;
        switch(style){
            case "stroke": //stroke is a bit wonky. dont use yet
                D.notouch.saveActions();
                pdl.ctx.strokeText(text, 
                                 $(preview).offset().left - $("#tmp_canvas").offset().left
                                 ,
                                 $(preview).offset().top - $("#tmp_canvas").offset().top + ($(preview).height()*0.785)
                                );
            case "fill":
                D.notouch.saveActions();
                pdl.ctx.fillText(text, 
                                 $(preview).offset().left - $("#tmp_canvas").offset().left
                                 ,
                                 $(preview).offset().top - $("#tmp_canvas").offset().top + ($(preview).height()*0.785)
                                );
        }
        overlay.destroy();
        document.getElementsByTagName("body")[0].onmousemove = function(){};

    };
    overlay.oncontextmenu = function(){
        terminal.write("Text paste cancelled", this);
        overlay.destroy();
        document.getElementsByTagName("body")[0].onmousemove = function(){};
        return false;
    };
    
}

pdl.pasteText = pasteText;
//Paste text



//keypresses
$(document).on('keydown keyup', function(e){
    if(e.shiftKey && !pdl.specialState){ //Line Tool
        terminal.write("Line tool key event called");
        var overlay = pdl.messageOverlay("Draw Line", "Click and drag to draw a straight line.", {style: "header", align:"center", opacity: "0", type:1});
        
        var ccol = document.getElementById("ccol");
        //having to create the SVG elements through text because it doesnt act properly when we create it normally
        overlay.innerHTML += '<svg id="pLineSVG" width="100%" height="100%"><line id="pLine" x1="0" x2="0" y1="0" y2="0" style="stroke:'+ccol.style.backgroundColor+';stroke-width:'+Number(sizeSlider.value)+';stroke-linecap:round"/></svg>';

        
        var tempSVG = document.getElementById("pLineSVG");
        var tempLine = document.getElementById("pLine");
        
        tempLine.id = "pTempLine";
        tempSVG.id = "pTempSVG";
        
        var lineX1, lineX2, lineY1, lineY2;
        
        overlay.addEventListener("mousedown", function(evt){
            terminal.write("Line start");
            lineX1 = evt.clientX;
            lineY1 = evt.clientY;
            lineX2 = evt.clientX;
            lineY2 = evt.clientY;
            tempLine.setAttribute("x1",evt.clientX);
            tempLine.setAttribute("y1",evt.clientY);
            tempLine.setAttribute("x2",evt.clientX);
            tempLine.setAttribute("y2",evt.clientY);
            
            document.getElementsByTagName("body")[0].onmousemove = function(evt2){
                tempLine.setAttribute("x2",evt2.clientX);
                tempLine.setAttribute("y2",evt2.clientY);
                lineX2 = evt2.clientX;
                lineY2 = evt2.clientY;
            };
            
        }, false);
        
        overlay.addEventListener("mouseup", function(evt){
            terminal.write("Line end");
            D.notouch.saveActions();
            pdl.ctx.beginPath();
            pdl.ctx.lineWidth = Number(sizeSlider.value);
            pdl.ctx.strokeStyle = ccol.style.backgroundColor; 
            pdl.ctx.lineCap="round";
            pdl.ctx.moveTo(lineX1-$("#tmp_canvas").offset().left+$(overlay).offset().left, lineY1-$("#tmp_canvas").offset().top+$(overlay).offset().top);
            pdl.ctx.lineTo(lineX2-$("#tmp_canvas").offset().left+$(overlay).offset().left, lineY2-$("#tmp_canvas").offset().top+$(overlay).offset().top);
            pdl.ctx.stroke();
            
            tempLine.setAttribute("x1",0);
            tempLine.setAttribute("y1",0);
            tempLine.setAttribute("x2",0);
            tempLine.setAttribute("y2",0);
            document.getElementsByTagName("body")[0].onmousemove = function(){};
        }, false);
        
    }else if(e.ctrlKey && !pdl.specialState){ //Eyedropper
        terminal.write("Eyedropper key event called");
        var overlay = pdl.messageOverlay("Eyedropper", "Click to select a color on the canvas.", {style: "header", align:"center", opacity: "0", type: 1});
        
        

        
        overlay.addEventListener("mousedown", function(evt){
            
            
            var imgdata = pdl.ctx.getImageData(
                evt.clientX-$("#tmp_canvas").offset().left+$(overlay).offset().left
                ,
                evt.clientY-$("#tmp_canvas").offset().top+$(overlay).offset().top
                ,1,1).data;
            pdl.setColor("rgb(" + imgdata[0] + "," + imgdata[1] + "," + imgdata[2] + ")");
            
            
            
        }, false);
        
        
    }else{//keyup cleanup
        if((pdl.specialState==1) && !e.shiftKey && !e.ctrlKey){//gotta check to see if we dont still got those keys down otherwise itll glitch out 
            terminal.write("Cleaning up from key events");
            $("#pTempLine").remove();
            $("#pTempSVG").remove();
            pdl.pOverlay.destroy();
            document.getElementsByTagName("body")[0].onmousemove = function(){};
        };
    };
} );
//--

function pasteImage(url){
    terminal.write("Attempting to paste image from "+url);
    var img=document.createElement("img");
    var overlay = pdl.messageOverlay("Pooodle", "Please wait while we load the image");
    img.crossOrigin = "Anonymous";
    img.src=url;
    img.style.position = "absolute";
    img.addEventListener('error', function (err){
        err.preventDefault();
        overlay.destroy();
        overlay = pdl.messageOverlay("Pooodle Error",
                                 "There was an error loading the image! "+
                                 "<br/>This usually means one of the following:"+
                                 "<ul><li>The URL provided was not an image (e.g. not ending with .png .jpg or .bmp)</li>"+
                                 "<li>The URL provided returned an error (e.g. 404)</li>"+
                                 "<li>The domain that the image is hosted on does not support CORS</li>"+
                                 "<li>The image request timed out (the website is running too slow or is down)</li></ul>"+
                                 "If you are able to view the image with the given URL in your browser but you still get this message, it is likely that the domain does not support CORS. You can fix this by getting the image from another website or by checking the 'Use CORS Proxy' checkbox."+
                                 "<br/><center><b>Sorry about that! Click anywhere to close this message.</b></center>"
                                     , {align:"left", behavior:"notify"});
        /*overlay.onclick = function(){
            overlay.destroy();
        };*/
        
    });
    window.imgg = img;
    img.onload = function(){
        terminal.write("Image load complete, calling overlay");
        overlay.destroy();
        overlay = pdl.messageOverlay("Paste Image", "Left click to paste the image at the mouse position&mdash;right click to paste the image in the upper left corner of the canvas.",{style:"header"});
        
        overlay.appendChild(img);
        document.getElementsByTagName("body")[0].onmousemove = function(evt){
            img.style.left = evt.clientX+"px";
            img.style.top  = evt.clientY+"px";
        };
        overlay.onclick = function(){
            terminal.write("Pasting image");
            D.notouch.saveActions();
            pdl.ctx.drawImage(img, 
                         $(img).offset().left - $("#tmp_canvas").offset().left
                         ,
                         $(img).offset().top - $("#tmp_canvas").offset().top
                         );
            $(img).detach();
            overlay.destroy()
            
            document.getElementsByTagName("body")[0].onmousemove = function(){};
            
        };
        overlay.oncontextmenu = function(){
            terminal.write("Pasting image to top left");
            D.notouch.saveActions();
            pdl.ctx.drawImage(img,0,0);
            $(img).detach();
            overlay.destroy();
            document.getElementsByTagName("body")[0].onmousemove = function(){};
            return false;
        };
    };
    
    
};//pasteImage
pdl.pasteImage = pasteImage;

var qccol = $("#colors");
do{
  qccol.children()[0].remove();
}while(qccol.children().length>1);

var ccont = document.getElementById("colors");
ccont.style.width = "200px";
var ccol = document.getElementsByClassName("color")[0];
ccol.id ="ccol";
ccol.classList.add("ccolor");
ccol.style.backgroundColor = "#eeeeee";


var cso = document.createElement("input");
cso.id = "cpicker";
$(ccol).trigger('click');
ccont.appendChild(cso);

$("#cpicker").spectrum({
    color: "#ECC",
    flat: true,
    showInput: true,
    className: "full-spectrum",
    //showInitial: true,
    showButtons: false,
    showPalette: true,
    showSelectionPalette: true,
    maxPaletteSize: 96,
    maxSelectionSize: 96,
    preferredFormat: "hex",
    localStorageKey: "drooodle.pooodle",
    showAlpha: true,
    move: function (color) {
        
    },
    show: function () {
    
    },
    beforeShow: function () {
    
    },
    hide: function () {
    
    },
    move: function(color) {
        
        ccol.style.backgroundColor = color.toRgbString();
        ccol.style.border = "2px dashed white";
        ccol.style.boxShadow = "2px 2px 8px #555";
    },
    change: function(color) {
        /*if(ccol.style.backgroundColor != color.toRgbString()){
        ccol.style.backgroundColor = color.toRgbString();
        $(ccol).trigger('click');
        ccol.style.border = "";
        ccol.style.boxShadow = "";
        };*/
    }
    ,
    palette: [
        ["#000000", "#ffffff", "#3fa9f5", "#bdccd4", "#7ac943", "#fff460", "#ff931e", "#ff1d25", "#ff7bac", "#662d91", "#f4e7c9", "#863F08"]
    ]
});

$("#colors").mouseleave(function(){
            
            $(ccol).trigger('click');
            ccol.style.border = "";
            ccol.style.boxShadow = "";
});



var iubox = document.createElement("input");
iubox.type = "text";
iubox.placeholder = "Image URL to paste";
var iubutton = document.createElement("button");
iubutton.innerHTML = "Paste";

var iuproxybox = document.createElement("input");
iuproxybox.type = "checkbox";

var iuproxyhelp = document.createElement("a");
iuproxyhelp.onclick = function(){
    pdl.messageOverlay("CORS Proxy",
                       "Checking this box will tell Pooodle to attempt to use a proxy (<a target=\"_blank\" href=\"http://crossorigin.me/\">crossorigin.me</a>) to fetch the image. This should resolve any issue with CORS unless the proxy service is down."+
                       "<br/><center><b>Click anywhere to close this message.</b></center>"
                       , {align:"left", behavior:"notify"});
};

iuproxyhelp.innerHTML = "[?]";
iuproxyhelp.style.cursor = "pointer";
iuproxyhelp.style.fontSize = "80%";

var ptbox = document.createElement("input");
ptbox.type = "text";
ptbox.placeholder = "Text to paste";



var ptsize = document.createElement("input");
ptsize.type = "number";
ptsize.value = 30;

var ptbutton = document.createElement("button");
ptbutton.innerHTML = "Paste";

ptbutton.onclick = function(){if(!pdl.specialState && (ptsize.value>0) && (ptbox.value != "")){
    pasteText(ptbox.value, (ptsize.value + "px " +ptfont.value), ccol.style.backgroundColor );
};};

//note to self use appendchild(textnode) not innerHTML+= otherwise it messes stuff up


iubutton.onclick = function(){if(!pdl.specialState){pasteImage(  (iuproxybox.checked?"http://crossorigin.me/":"") + iubox.value    );}};

var terminalButton = document.createElement("a");
terminalButton.innerHTML = "Show Terminal";
terminalButton.style.fontSize = "80%";
terminalButton.href = "javascript: void(0);";
terminalButton.onclick = function(){terminal.open();};

var settingsButton = document.createElement("a");
settingsButton.innerHTML = "Settings";
settingsButton.style.fontSize = "80%";
settingsButton.href = "javascript: void(0);";
settingsButton.onclick = function(){pdl.settingsDialog();};

var pluginPanel = document.createElement("div");

ccont.appendChild(iubox);
ccont.appendChild(iubutton);
ccont.appendChild(document.createTextNode(" "));
ccont.appendChild(iuproxybox);
ccont.appendChild(document.createTextNode(" Use CORS Proxy "));
ccont.appendChild(iuproxyhelp);
ccont.appendChild(document.createElement("hr"));
ccont.appendChild(ptbox);
ccont.appendChild(ptfont);
ccont.appendChild(ptsize);
ccont.appendChild(ptbutton);
ccont.appendChild(document.createElement("br"));
ccont.appendChild(terminalButton);
ccont.appendChild(document.createElement("br"));
ccont.appendChild(settingsButton);
ccont.appendChild(pluginPanel);
//I should clean up these variables
//keyword: should

var pbar = document.createElement("div");
pbar.innerHTML = "<span style='font-size: 150%'>Pooodle</span> "+pdl.version+"<br/><span style='font-size: 75%'>by haicat</span>";
pbar.style.textAlign = "center";
pbar.style.position = "fixed";
pbar.style.right = "0px";
pbar.style.bottom = "0px";
pbar.style.zIndex = "100000";

$.get("https://raw.githubusercontent.com/haicat/Pooodle/master/version.log", function( cversion ) {
    if (Number(cversion) > pdl.version){terminal.write("Update available! Newest version: "+cversion);pbar.innerHTML += ("<div style='border-radius:8px;padding:4px;background-color: #dd4444'><a href='https://raw.githubusercontent.com/haicat/Pooodle/master/pooodle.user.js'>Update available!</a></br>Latest version: "+cversion+"</div>");};
});

body.appendChild(pbar);


terminal.write("----POOODLE----");
terminal.write("by haicat");
terminal.write("Version: "+pdl.version);
terminal.write("---------------");


//Attempt to detect standard Windows 7 fonts

function loadFonts(){
    terminal.write("Loading fonts (this may take a bit)");
pdl.addFont("Abadi MT Condensed Light");
pdl.addFont("Aharoni");
pdl.addFont("Aldhabi");
pdl.addFont("Andalus");
pdl.addFont("Angsana New");
pdl.addFont("AngsanaUPC");
pdl.addFont("Aparajita");
pdl.addFont("Arabic Typesetting");
pdl.addFont("Arial");
pdl.addFont("Arial Black");
pdl.addFont("Arial Nova");
pdl.addFont("Batang");
pdl.addFont("BatangChe");
pdl.addFont("Book Antiqua");
pdl.addFont("Browallia New");
pdl.addFont("BrowalliaUPC");
pdl.addFont("Calibri");
pdl.addFont("Calibri Light");
pdl.addFont("Calisto MT");
pdl.addFont("Cambria");
pdl.addFont("Cambria Math");
pdl.addFont("Candara");
pdl.addFont("Century Gothic");
pdl.addFont("Comic Sans MS");
pdl.addFont("Consolas");
pdl.addFont("Constantia");
pdl.addFont("Copperplate Gothic Bold");
pdl.addFont("Copperplate Gothic Light");
pdl.addFont("Corbel");
pdl.addFont("Cordia New");
pdl.addFont("CordiaUPC");
pdl.addFont("Courier New");
pdl.addFont("DaunPenh");
pdl.addFont("David");
pdl.addFont("Dengxian");
pdl.addFont("DFKai-SB");
pdl.addFont("DilleniaUPC");
pdl.addFont("DokChampa");
pdl.addFont("Dotum");
pdl.addFont("DotumChe");
pdl.addFont("Ebrima");
pdl.addFont("Estrangelo Edessa");
pdl.addFont("EucrosiaUPC");
pdl.addFont("Euphemia");
pdl.addFont("FangSong");
pdl.addFont("Franklin Gothic Medium");
pdl.addFont("FrankRuehl");
pdl.addFont("FreesiaUPC");
pdl.addFont("Gabriola");
pdl.addFont("Gadugi");
pdl.addFont("Gautami");
pdl.addFont("Georgia");
pdl.addFont("Georgia Pro");
pdl.addFont("Gill Sans Nova");
pdl.addFont("Gisha");
pdl.addFont("Gulim");
pdl.addFont("GulimChe");
pdl.addFont("Gungsuh");
pdl.addFont("GungsuhChe");
pdl.addFont("Impact");
pdl.addFont("IrisUPC");
pdl.addFont("Iskoola Pota");
pdl.addFont("JasmineUPC");
pdl.addFont("KaiTi");
pdl.addFont("Kalinga");
pdl.addFont("Kartika");
pdl.addFont("Khmer UI");
pdl.addFont("KodchiangUPC");
pdl.addFont("Kokila");
pdl.addFont("Lao UI");
pdl.addFont("Latha");
pdl.addFont("Leelawadee");
pdl.addFont("Leelawadee UI");
pdl.addFont("Levenim MT");
pdl.addFont("LilyUPC");
pdl.addFont("Lucida Console");
pdl.addFont("Lucida Handwriting Italic");
pdl.addFont("Lucida Sans Unicode");
pdl.addFont("Malgun Gothic");
pdl.addFont("Mangal");
pdl.addFont("Manny ITC");
pdl.addFont("Marlett");
pdl.addFont("Meiryo");
pdl.addFont("Meiryo UI");
pdl.addFont("Microsoft Himalaya");
pdl.addFont("Microsoft JhengHei");
pdl.addFont("Microsoft JhengHei UI");
pdl.addFont("Microsoft New Tai Lue");
pdl.addFont("Microsoft PhagsPa");
pdl.addFont("Microsoft Sans Serif");
pdl.addFont("Microsoft Tai Le");
pdl.addFont("Microsoft Uighur");
pdl.addFont("Microsoft YaHei");
pdl.addFont("Microsoft YaHei UI");
pdl.addFont("Microsoft Yi Baiti");
pdl.addFont("MingLiU");
pdl.addFont("PMingLiU");
pdl.addFont("MingLiU-ExtB");
pdl.addFont("PMingLiU-ExtB");
pdl.addFont("MingLiU_HKSCS");
pdl.addFont("MingLiU_HKSCS-ExtB");
pdl.addFont("Miriam");
pdl.addFont("Miriam Fixed");
pdl.addFont("Mongolian Baiti");
pdl.addFont("MoolBoran");
pdl.addFont("MS Gothic");
pdl.addFont("MS PGothic");
pdl.addFont("MS Mincho");
pdl.addFont("MS PMincho");
pdl.addFont("MS UI Gothic");
pdl.addFont("MV Boli");
pdl.addFont("Myanmar Text");
pdl.addFont("Narkisim");
pdl.addFont("Neue Haas Grotesk Text Pro");
pdl.addFont("News Gothic MT");
pdl.addFont("Nirmala UI");
pdl.addFont("NSimSun");
pdl.addFont("Nyala");
pdl.addFont("Palatino Linotype");
pdl.addFont("Plantagenet Cherokee");
pdl.addFont("Raavi");
pdl.addFont("Rockwell Nova");
pdl.addFont("Rod");
pdl.addFont("Sakkal Majalla");
pdl.addFont("Sanskrit Text");
pdl.addFont("Segoe MDL2 Assets");
pdl.addFont("Segoe Print");
pdl.addFont("Segoe Script");
pdl.addFont("Segoe UI Symbol");
pdl.addFont("Segoe UI v5.35");
pdl.addFont("Shonar Bangla");
pdl.addFont("Shruti");
pdl.addFont("SimHei");
pdl.addFont("SimKai");
pdl.addFont("Simplified Arabic");
pdl.addFont("SimSun");
pdl.addFont("SimSun-ExtB");
pdl.addFont("Sitka Banner");
pdl.addFont("Sitka Display");
pdl.addFont("Sitka Heading");
pdl.addFont("Sitka Small");
pdl.addFont("Sitka Subheading");
pdl.addFont("Sitka Text");
pdl.addFont("Sylfaen");
pdl.addFont("Symbol");
pdl.addFont("Tahoma");
pdl.addFont("Times New Roman");
pdl.addFont("Traditional Arabic");
pdl.addFont("Trebuchet MS");
pdl.addFont("Tunga");
pdl.addFont("Urdu Typesetting");
pdl.addFont("Utsaah");
pdl.addFont("Vani");
pdl.addFont("Verdana");
pdl.addFont("Verdana Pro");
pdl.addFont("Vijaya");
pdl.addFont("Vrinda");
pdl.addFont("Webdings");
pdl.addFont("Westminster");
pdl.addFont("Wingdings");
pdl.addFont("Yu Gothic");
pdl.addFont("Yu Gothic UI");
pdl.addFont("Yu Mincho");
	
	
	$.each((pdl.settingsData),function(i,v){ //apply settings
	v.apply(false);
	});
	
	
    terminal.important("Pooodle load complete!");
    $(document).trigger('pooodleLoaded');
    pdl.ready = 1;
};


//plugin stuff

//Things we're giving plugins access to
pdl.plugin = {};
pdl.export = {};
pdl.export.terminal = {};
pdl.export.terminal.write = function(text){pdl.terminal.write(text, this);};
pdl.export.terminal.error = function(text){pdl.terminal.error(text, this);};
pdl.export.terminal.important = function(text){pdl.terminal.important(text, this);};
pdl.export.getState = function(){return pdl.specialState.valueOf();};
pdl.export.setColor = pdl.setColor;
pdl.export.pasteText = pdl.pasteText;
pdl.export.messageOverlay = pdl.messageOverlay;
pdl.export.ctx = pdl.ctx;
pdl.export.addFont = pdl.addFont;
pdl.export.name = "Uninitialized Plugin";
pdl.export.author = "";
pdl.export.version = "0";
//

pdl.plugin.list = {};

pdl.plugin.register = function(name, author, version, requiredVersion){
    if(Number(requiredVersion)<=pdl.version){
        terminal.important("Loading plugin \""+name+"\"");
        pdl.plugin.list[name] = jQuery.extend(true, {}, pdl.export);
        pdl.plugin.list[name].name = name;
        pdl.plugin.list[name].terminal.name = name;
        pdl.plugin.list[name].version = version;
        pdl.plugin.list[name].author = author;
        pdl.plugin.list[name].panel = document.createElement("div");
        pdl.plugin.list[name].requiredVersion = Number(requiredVersion);
        pluginPanel.appendChild(pdl.plugin.list[name].panel);
        return pdl.plugin.list[name];
    }else{
        terminal.error("Failed to load plugin \""+name+"\"! Plugin requires version "+Number(requiredVersion)+" of Pooodle when we're only running version "+ pdl.version+"!");
    };
};



setTimeout(loadFonts, 1);//make it async
