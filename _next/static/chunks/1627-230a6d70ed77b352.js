"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1627],{58816:function(t,e,n){n.d(e,{Z:function(){return r}});function r(t){return function(){return t}}},220:function(t,e,n){n.d(e,{Z:function(){return s}});var r=n(58816);function i(t){return(t()-.5)*1e-6}function a(t){return t.index}function o(t,e){var n=t.get(e);if(!n)throw Error("node not found: "+e);return n}function s(t){var e,n,s,l,u,c,f=a,h=function(t){return 1/Math.min(l[t.source.index],l[t.target.index])},d=(0,r.Z)(30),p=1;function g(r){for(var a=0,o=t.length;a<p;++a)for(var s,l,f,h,d,g,m,v=0;v<o;++v)l=(s=t[v]).source,g=((g=Math.sqrt((h=(f=s.target).x+f.vx-l.x-l.vx||i(c))*h+(d=f.y+f.vy-l.y-l.vy||i(c))*d))-n[v])/g*r*e[v],h*=g,d*=g,f.vx-=h*(m=u[v]),f.vy-=d*m,l.vx+=h*(m=1-m),l.vy+=d*m}function m(){if(s){var r,i,a=s.length,c=t.length,h=new Map(s.map((t,e)=>[f(t,e,s),t]));for(r=0,l=Array(a);r<c;++r)(i=t[r]).index=r,"object"!=typeof i.source&&(i.source=o(h,i.source)),"object"!=typeof i.target&&(i.target=o(h,i.target)),l[i.source.index]=(l[i.source.index]||0)+1,l[i.target.index]=(l[i.target.index]||0)+1;for(r=0,u=Array(c);r<c;++r)i=t[r],u[r]=l[i.source.index]/(l[i.source.index]+l[i.target.index]);e=Array(c),v(),n=Array(c),y()}}function v(){if(s)for(var n=0,r=t.length;n<r;++n)e[n]=+h(t[n],n,t)}function y(){if(s)for(var e=0,r=t.length;e<r;++e)n[e]=+d(t[e],e,t)}return null==t&&(t=[]),g.initialize=function(t,e){s=t,c=e,m()},g.links=function(e){return arguments.length?(t=e,m(),g):t},g.id=function(t){return arguments.length?(f=t,g):f},g.iterations=function(t){return arguments.length?(p=+t,g):p},g.strength=function(t){return arguments.length?(h="function"==typeof t?t:(0,r.Z)(+t),v(),g):h},g.distance=function(t){return arguments.length?(d="function"==typeof t?t:(0,r.Z)(+t),y(),g):d},g}},65623:function(t,e,n){n.d(e,{Z:function(){return i}});var r=n(58816);function i(t,e,n){var i,a,o,s=(0,r.Z)(.1);function l(t){for(var r=0,s=i.length;r<s;++r){var l=i[r],u=l.x-e||1e-6,c=l.y-n||1e-6,f=Math.sqrt(u*u+c*c),h=(o[r]-f)*a[r]*t/f;l.vx+=u*h,l.vy+=c*h}}function u(){if(i){var e,n=i.length;for(e=0,a=Array(n),o=Array(n);e<n;++e)o[e]=+t(i[e],e,i),a[e]=isNaN(o[e])?0:+s(i[e],e,i)}}return"function"!=typeof t&&(t=(0,r.Z)(+t)),null==e&&(e=0),null==n&&(n=0),l.initialize=function(t){i=t,u()},l.strength=function(t){return arguments.length?(s="function"==typeof t?t:(0,r.Z)(+t),u(),l):s},l.radius=function(e){return arguments.length?(t="function"==typeof e?e:(0,r.Z)(+e),u(),l):t},l.x=function(t){return arguments.length?(e=+t,l):e},l.y=function(t){return arguments.length?(n=+t,l):n},l}},75156:function(t,e,n){n.d(e,{Z:function(){return E}});var r={value:()=>{}};function i(){for(var t,e=0,n=arguments.length,r={};e<n;++e){if(!(t=arguments[e]+"")||t in r||/[\s.]/.test(t))throw Error("illegal type: "+t);r[t]=[]}return new a(r)}function a(t){this._=t}function o(t,e,n){for(var i=0,a=t.length;i<a;++i)if(t[i].name===e){t[i]=r,t=t.slice(0,i).concat(t.slice(i+1));break}return null!=n&&t.push({name:e,value:n}),t}a.prototype=i.prototype={constructor:a,on:function(t,e){var n,r=this._,i=(t+"").trim().split(/^|\s+/).map(function(t){var e="",n=t.indexOf(".");if(n>=0&&(e=t.slice(n+1),t=t.slice(0,n)),t&&!r.hasOwnProperty(t))throw Error("unknown type: "+t);return{type:t,name:e}}),a=-1,s=i.length;if(arguments.length<2){for(;++a<s;)if((n=(t=i[a]).type)&&(n=function(t,e){for(var n,r=0,i=t.length;r<i;++r)if((n=t[r]).name===e)return n.value}(r[n],t.name)))return n;return}if(null!=e&&"function"!=typeof e)throw Error("invalid callback: "+e);for(;++a<s;)if(n=(t=i[a]).type)r[n]=o(r[n],t.name,e);else if(null==e)for(n in r)r[n]=o(r[n],t.name,null);return this},copy:function(){var t={},e=this._;for(var n in e)t[n]=e[n].slice();return new a(t)},call:function(t,e){if((n=arguments.length-2)>0)for(var n,r,i=Array(n),a=0;a<n;++a)i[a]=arguments[a+2];if(!this._.hasOwnProperty(t))throw Error("unknown type: "+t);for(r=this._[t],a=0,n=r.length;a<n;++a)r[a].value.apply(e,i)},apply:function(t,e,n){if(!this._.hasOwnProperty(t))throw Error("unknown type: "+t);for(var r=this._[t],i=0,a=r.length;i<a;++i)r[i].value.apply(e,n)}};var s,l,u=0,c=0,f=0,h=0,d=0,p=0,g="object"==typeof performance&&performance.now?performance:Date,m="object"==typeof window&&window.requestAnimationFrame?window.requestAnimationFrame.bind(window):function(t){setTimeout(t,17)};function v(){return d||(m(y),d=g.now()+p)}function y(){d=0}function w(){this._call=this._time=this._next=null}function b(t,e,n){var r=new w;return r.restart(t,e,n),r}function x(){d=(h=g.now())+p,u=c=0;try{!function(){v(),++u;for(var t,e=s;e;)(t=d-e._time)>=0&&e._call.call(void 0,t),e=e._next;--u}()}finally{u=0,function(){for(var t,e,n=s,r=1/0;n;)n._call?(r>n._time&&(r=n._time),t=n,n=n._next):(e=n._next,n._next=null,n=t?t._next=e:s=e);l=t,M(r)}(),d=0}}function S(){var t=g.now(),e=t-h;e>1e3&&(p-=e,h=t)}function M(t){!u&&(c&&(c=clearTimeout(c)),t-d>24?(t<1/0&&(c=setTimeout(x,t-g.now()-p)),f&&(f=clearInterval(f))):(f||(h=g.now(),f=setInterval(S,1e3)),u=1,m(x)))}w.prototype=b.prototype={constructor:w,restart:function(t,e,n){if("function"!=typeof t)throw TypeError("callback is not a function");n=(null==n?v():+n)+(null==e?0:+e),this._next||l===this||(l?l._next=this:s=this,l=this),this._call=t,this._time=n,M()},stop:function(){this._call&&(this._call=null,this._time=1/0,M())}};var _=Math.PI*(3-Math.sqrt(5));function E(t){let e;var n,r=1,a=.001,o=1-Math.pow(.001,1/300),s=0,l=.6,u=new Map,c=b(d),f=i("tick","end"),h=(e=1,()=>(e=(1664525*e+1013904223)%4294967296)/4294967296);function d(){p(),f.call("tick",n),r<a&&(c.stop(),f.call("end",n))}function p(e){var i,a,c=t.length;void 0===e&&(e=1);for(var f=0;f<e;++f)for(r+=(s-r)*o,u.forEach(function(t){t(r)}),i=0;i<c;++i)null==(a=t[i]).fx?a.x+=a.vx*=l:(a.x=a.fx,a.vx=0),null==a.fy?a.y+=a.vy*=l:(a.y=a.fy,a.vy=0);return n}function g(){for(var e,n=0,r=t.length;n<r;++n){if((e=t[n]).index=n,null!=e.fx&&(e.x=e.fx),null!=e.fy&&(e.y=e.fy),isNaN(e.x)||isNaN(e.y)){var i=10*Math.sqrt(.5+n),a=n*_;e.x=i*Math.cos(a),e.y=i*Math.sin(a)}(isNaN(e.vx)||isNaN(e.vy))&&(e.vx=e.vy=0)}}function m(e){return e.initialize&&e.initialize(t,h),e}return null==t&&(t=[]),g(),n={tick:p,restart:function(){return c.restart(d),n},stop:function(){return c.stop(),n},nodes:function(e){return arguments.length?(t=e,g(),u.forEach(m),n):t},alpha:function(t){return arguments.length?(r=+t,n):r},alphaMin:function(t){return arguments.length?(a=+t,n):a},alphaDecay:function(t){return arguments.length?(o=+t,n):+o},alphaTarget:function(t){return arguments.length?(s=+t,n):s},velocityDecay:function(t){return arguments.length?(l=1-t,n):1-l},randomSource:function(t){return arguments.length?(h=t,u.forEach(m),n):h},force:function(t,e){return arguments.length>1?(null==e?u.delete(t):u.set(t,m(e)),n):u.get(t)},find:function(e,n,r){var i,a,o,s,l,u=0,c=t.length;for(null==r?r=1/0:r*=r,u=0;u<c;++u)(o=(i=e-(s=t[u]).x)*i+(a=n-s.y)*a)<r&&(l=s,r=o);return l},on:function(t,e){return arguments.length>1?(f.on(t,e),n):f.on(t)}}}},12929:function(t,e,n){n.d(e,{Z:function(){return function t(){var e,n=(function(){var t,e,n,r,i,a,o=to,s=to,l=function t(e,n){var r,i,a=typeof n;return null==n||"boolean"===a?J(n):("number"===a?te:"string"===a?(i=B(n))?(n=i,Q):function(t,e){var n,r,i,a,o,s=tn.lastIndex=tr.lastIndex=0,l=-1,u=[],c=[];for(t+="",e+="";(i=tn.exec(t))&&(a=tr.exec(e));)(o=a.index)>s&&(o=e.slice(s,o),u[l]?u[l]+=o:u[++l]=o),(i=i[0])===(a=a[0])?u[l]?u[l]+=a:u[++l]=a:(u[++l]=null,c.push({i:l,x:te(i,a)})),s=tr.lastIndex;return s<e.length&&(o=e.slice(s),u[l]?u[l]+=o:u[++l]=o),u.length<2?c[0]?(n=c[0].x,function(t){return n(t)+""}):(r=e,function(){return r}):(e=c.length,function(t){for(var n,r=0;r<e;++r)u[(n=c[r]).i]=n.x(t);return u.join("")})}:n instanceof B?Q:n instanceof Date?function(t,e){var n=new Date;return t=+t,e=+e,function(r){return n.setTime(t*(1-r)+e*r),n}}:!ArrayBuffer.isView(r=n)||r instanceof DataView?Array.isArray(n)?function(e,n){var r,i=n?n.length:0,a=e?Math.min(i,e.length):0,o=Array(a),s=Array(i);for(r=0;r<a;++r)o[r]=t(e[r],n[r]);for(;r<i;++r)s[r]=n[r];return function(t){for(r=0;r<a;++r)s[r]=o[r](t);return s}}:"function"!=typeof n.valueOf&&"function"!=typeof n.toString||isNaN(n)?function(e,n){var r,i={},a={};for(r in(null===e||"object"!=typeof e)&&(e={}),(null===n||"object"!=typeof n)&&(n={}),n)r in e?i[r]=t(e[r],n[r]):a[r]=n[r];return function(t){for(r in i)a[r]=i[r](t);return a}}:te:function(t,e){e||(e=[]);var n,r=t?Math.min(e.length,t.length):0,i=e.slice();return function(a){for(n=0;n<r;++n)i[n]=t[n]*(1-a)+e[n]*a;return i}})(e,n)},u=ts;function c(){var t,e,n,l=Math.min(o.length,s.length);return u!==ts&&(t=o[0],e=o[l-1],t>e&&(n=t,t=e,e=n),u=function(n){return Math.max(t,Math.min(e,n))}),r=l>2?tc:tu,i=a=null,f}function f(e){return null==e||isNaN(e=+e)?n:(i||(i=r(o.map(t),s,l)))(t(u(e)))}return f.invert=function(n){return u(e((a||(a=r(s,o.map(t),te)))(n)))},f.domain=function(t){return arguments.length?(o=Array.from(t,ta),c()):o.slice()},f.range=function(t){return arguments.length?(s=Array.from(t),c()):s.slice()},f.rangeRound=function(t){return s=Array.from(t),l=ti,c()},f.clamp=function(t){return arguments.length?(u=!!t||ts,c()):u!==ts},f.interpolate=function(t){return arguments.length?(l=t,c()):l},f.unknown=function(t){return arguments.length?(n=t,f):n},function(n,r){return t=n,e=r,c()}})()(ts,ts);return n.copy=function(){return t().domain(n.domain()).range(n.range()).interpolate(n.interpolate()).clamp(n.clamp()).unknown(n.unknown())},tf.apply(n,arguments),e=n.domain,n.ticks=function(t){var n=e();return function(t,e,n){if(e=+e,t=+t,!((n=+n)>0))return[];if(t===e)return[t];let r=e<t,[i,a,s]=r?o(e,t,n):o(t,e,n);if(!(a>=i))return[];let l=a-i+1,u=Array(l);if(r){if(s<0)for(let t=0;t<l;++t)u[t]=-((a-t)/s);else for(let t=0;t<l;++t)u[t]=(a-t)*s}else if(s<0)for(let t=0;t<l;++t)u[t]=-((i+t)/s);else for(let t=0;t<l;++t)u[t]=(i+t)*s;return u}(n[0],n[n.length-1],null==t?10:t)},n.tickFormat=function(t,n){var r=e();return function(t,e,n,r){var i,a,o=function(t,e,n){e=+e,t=+t,n=+n;let r=e<t,i=r?s(e,t,n):s(t,e,n);return(r?-1:1)*(i<0?-(1/i):i)}(t,e,n);switch((r=td(null==r?",f":r)).type){case"s":var l=Math.max(Math.abs(t),Math.abs(e));return null!=r.precision||isNaN(a=Math.max(0,3*Math.max(-8,Math.min(8,Math.floor(tm(l)/3)))-tm(Math.abs(o))))||(r.precision=a),b(r,l);case"":case"e":case"g":case"p":case"r":null!=r.precision||isNaN(a=Math.max(0,tm(Math.abs(Math.max(Math.abs(t),Math.abs(e)))-(i=Math.abs(i=o)))-tm(i))+1)||(r.precision=a-("e"===r.type));break;case"f":case"%":null!=r.precision||isNaN(a=Math.max(0,-tm(Math.abs(o))))||(r.precision=a-("%"===r.type)*2)}return w(r)}(r[0],r[r.length-1],null==t?10:t,n)},n.nice=function(t){null==t&&(t=10);var r,i,a=e(),o=0,l=a.length-1,u=a[o],c=a[l],f=10;for(c<u&&(i=u,u=c,c=i,i=o,o=l,l=i);f-- >0;){if((i=s(u,c,t))===r)return a[o]=u,a[l]=c,e(a);if(i>0)u=Math.floor(u/i)*i,c=Math.ceil(c/i)*i;else if(i<0)u=Math.ceil(u*i)/i,c=Math.floor(c*i)/i;else break;r=i}return n},n}}});let r=Math.sqrt(50),i=Math.sqrt(10),a=Math.sqrt(2);function o(t,e,n){let s,l,u;let c=(e-t)/Math.max(0,n),f=Math.floor(Math.log10(c)),h=c/Math.pow(10,f),d=h>=r?10:h>=i?5:h>=a?2:1;return(f<0?(s=Math.round(t*(u=Math.pow(10,-f)/d)),l=Math.round(e*u),s/u<t&&++s,l/u>e&&--l,u=-u):(s=Math.round(t/(u=Math.pow(10,f)*d)),l=Math.round(e/u),s*u<t&&++s,l*u>e&&--l),l<s&&.5<=n&&n<2)?o(t,e,2*n):[s,l,u]}function s(t,e,n){return o(t=+t,e=+e,n=+n)[2]}function l(t,e){return null==t||null==e?NaN:t<e?-1:t>e?1:t>=e?0:NaN}function u(t,e){return null==t||null==e?NaN:e<t?-1:e>t?1:e>=t?0:NaN}function c(t){let e,n,r;function i(t,r,i=0,a=t.length){if(i<a){if(0!==e(r,r))return a;do{let e=i+a>>>1;0>n(t[e],r)?i=e+1:a=e}while(i<a)}return i}return 2!==t.length?(e=l,n=(e,n)=>l(t(e),n),r=(e,n)=>t(e)-n):(e=t===l||t===u?t:f,n=t,r=t),{left:i,center:function(t,e,n=0,a=t.length){let o=i(t,e,n,a-1);return o>n&&r(t[o-1],e)>-r(t[o],e)?o-1:o},right:function(t,r,i=0,a=t.length){if(i<a){if(0!==e(r,r))return a;do{let e=i+a>>>1;0>=n(t[e],r)?i=e+1:a=e}while(i<a)}return i}}}function f(){return 0}let h=c(l),d=h.right;function p(t,e,n){t.prototype=e.prototype=n,n.constructor=t}function g(t,e){var n=Object.create(t.prototype);for(var r in e)n[r]=e[r];return n}function m(){}h.left,c(function(t){return null===t?NaN:+t}).center;var v,y,w,b,x="\\s*([+-]?\\d+)\\s*",S="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",M="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",_=/^#([0-9a-f]{3,8})$/,E=RegExp(`^rgb\\(${x},${x},${x}\\)$`),A=RegExp(`^rgb\\(${M},${M},${M}\\)$`),N=RegExp(`^rgba\\(${x},${x},${x},${S}\\)$`),z=RegExp(`^rgba\\(${M},${M},${M},${S}\\)$`),k=RegExp(`^hsl\\(${S},${M},${M}\\)$`),L=RegExp(`^hsla\\(${S},${M},${M},${S}\\)$`),U={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};function O(){return this.rgb().formatHex()}function $(){return this.rgb().formatRgb()}function B(t){var e,n;return t=(t+"").trim().toLowerCase(),(e=_.exec(t))?(n=e[1].length,e=parseInt(e[1],16),6===n?C(e):3===n?new T(e>>8&15|e>>4&240,e>>4&15|240&e,(15&e)<<4|15&e,1):8===n?D(e>>24&255,e>>16&255,e>>8&255,(255&e)/255):4===n?D(e>>12&15|e>>8&240,e>>8&15|e>>4&240,e>>4&15|240&e,((15&e)<<4|15&e)/255):null):(e=E.exec(t))?new T(e[1],e[2],e[3],1):(e=A.exec(t))?new T(255*e[1]/100,255*e[2]/100,255*e[3]/100,1):(e=N.exec(t))?D(e[1],e[2],e[3],e[4]):(e=z.exec(t))?D(255*e[1]/100,255*e[2]/100,255*e[3]/100,e[4]):(e=k.exec(t))?F(e[1],e[2]/100,e[3]/100,1):(e=L.exec(t))?F(e[1],e[2]/100,e[3]/100,e[4]):U.hasOwnProperty(t)?C(U[t]):"transparent"===t?new T(NaN,NaN,NaN,0):null}function C(t){return new T(t>>16&255,t>>8&255,255&t,1)}function D(t,e,n,r){return r<=0&&(t=e=n=NaN),new T(t,e,n,r)}function P(t,e,n,r){var i;return 1==arguments.length?((i=t)instanceof m||(i=B(i)),i)?new T((i=i.rgb()).r,i.g,i.b,i.opacity):new T:new T(t,e,n,null==r?1:r)}function T(t,e,n,r){this.r=+t,this.g=+e,this.b=+n,this.opacity=+r}function j(){return`#${q(this.r)}${q(this.g)}${q(this.b)}`}function R(){let t=H(this.opacity);return`${1===t?"rgb(":"rgba("}${I(this.r)}, ${I(this.g)}, ${I(this.b)}${1===t?")":`, ${t})`}`}function H(t){return isNaN(t)?1:Math.max(0,Math.min(1,t))}function I(t){return Math.max(0,Math.min(255,Math.round(t)||0))}function q(t){return((t=I(t))<16?"0":"")+t.toString(16)}function F(t,e,n,r){return r<=0?t=e=n=NaN:n<=0||n>=1?t=e=NaN:e<=0&&(t=NaN),new W(t,e,n,r)}function Z(t){if(t instanceof W)return new W(t.h,t.s,t.l,t.opacity);if(t instanceof m||(t=B(t)),!t)return new W;if(t instanceof W)return t;var e=(t=t.rgb()).r/255,n=t.g/255,r=t.b/255,i=Math.min(e,n,r),a=Math.max(e,n,r),o=NaN,s=a-i,l=(a+i)/2;return s?(o=e===a?(n-r)/s+(n<r)*6:n===a?(r-e)/s+2:(e-n)/s+4,s/=l<.5?a+i:2-a-i,o*=60):s=l>0&&l<1?0:o,new W(o,s,l,t.opacity)}function W(t,e,n,r){this.h=+t,this.s=+e,this.l=+n,this.opacity=+r}function G(t){return(t=(t||0)%360)<0?t+360:t}function V(t){return Math.max(0,Math.min(1,t||0))}function Y(t,e,n){return(t<60?e+(n-e)*t/60:t<180?n:t<240?e+(n-e)*(240-t)/60:e)*255}function X(t,e,n,r,i){var a=t*t,o=a*t;return((1-3*t+3*a-o)*e+(4-6*a+3*o)*n+(1+3*t+3*a-3*o)*r+o*i)/6}p(m,B,{copy(t){return Object.assign(new this.constructor,this,t)},displayable(){return this.rgb().displayable()},hex:O,formatHex:O,formatHex8:function(){return this.rgb().formatHex8()},formatHsl:function(){return Z(this).formatHsl()},formatRgb:$,toString:$}),p(T,P,g(m,{brighter(t){return t=null==t?1.4285714285714286:Math.pow(1.4285714285714286,t),new T(this.r*t,this.g*t,this.b*t,this.opacity)},darker(t){return t=null==t?.7:Math.pow(.7,t),new T(this.r*t,this.g*t,this.b*t,this.opacity)},rgb(){return this},clamp(){return new T(I(this.r),I(this.g),I(this.b),H(this.opacity))},displayable(){return -.5<=this.r&&this.r<255.5&&-.5<=this.g&&this.g<255.5&&-.5<=this.b&&this.b<255.5&&0<=this.opacity&&this.opacity<=1},hex:j,formatHex:j,formatHex8:function(){return`#${q(this.r)}${q(this.g)}${q(this.b)}${q((isNaN(this.opacity)?1:this.opacity)*255)}`},formatRgb:R,toString:R})),p(W,function(t,e,n,r){return 1==arguments.length?Z(t):new W(t,e,n,null==r?1:r)},g(m,{brighter(t){return t=null==t?1.4285714285714286:Math.pow(1.4285714285714286,t),new W(this.h,this.s,this.l*t,this.opacity)},darker(t){return t=null==t?.7:Math.pow(.7,t),new W(this.h,this.s,this.l*t,this.opacity)},rgb(){var t=this.h%360+(this.h<0)*360,e=isNaN(t)||isNaN(this.s)?0:this.s,n=this.l,r=n+(n<.5?n:1-n)*e,i=2*n-r;return new T(Y(t>=240?t-240:t+120,i,r),Y(t,i,r),Y(t<120?t+240:t-120,i,r),this.opacity)},clamp(){return new W(G(this.h),V(this.s),V(this.l),H(this.opacity))},displayable(){return(0<=this.s&&this.s<=1||isNaN(this.s))&&0<=this.l&&this.l<=1&&0<=this.opacity&&this.opacity<=1},formatHsl(){let t=H(this.opacity);return`${1===t?"hsl(":"hsla("}${G(this.h)}, ${100*V(this.s)}%, ${100*V(this.l)}%${1===t?")":`, ${t})`}`}}));var J=t=>()=>t;function K(t,e){var n=e-t;return n?function(e){return t+e*n}:J(isNaN(t)?e:t)}var Q=function t(e){var n,r=1==(n=+(n=e))?K:function(t,e){var r,i,a;return e-t?(r=t,i=e,r=Math.pow(r,a=n),i=Math.pow(i,a)-r,a=1/a,function(t){return Math.pow(r+t*i,a)}):J(isNaN(t)?e:t)};function i(t,e){var n=r((t=P(t)).r,(e=P(e)).r),i=r(t.g,e.g),a=r(t.b,e.b),o=K(t.opacity,e.opacity);return function(e){return t.r=n(e),t.g=i(e),t.b=a(e),t.opacity=o(e),t+""}}return i.gamma=t,i}(1);function tt(t){return function(e){var n,r,i=e.length,a=Array(i),o=Array(i),s=Array(i);for(n=0;n<i;++n)r=P(e[n]),a[n]=r.r||0,o[n]=r.g||0,s[n]=r.b||0;return a=t(a),o=t(o),s=t(s),r.opacity=1,function(t){return r.r=a(t),r.g=o(t),r.b=s(t),r+""}}}function te(t,e){return t=+t,e=+e,function(n){return t*(1-n)+e*n}}tt(function(t){var e=t.length-1;return function(n){var r=n<=0?n=0:n>=1?(n=1,e-1):Math.floor(n*e),i=t[r],a=t[r+1],o=r>0?t[r-1]:2*i-a,s=r<e-1?t[r+2]:2*a-i;return X((n-r/e)*e,o,i,a,s)}}),tt(function(t){var e=t.length;return function(n){var r=Math.floor(((n%=1)<0?++n:n)*e),i=t[(r+e-1)%e],a=t[r%e],o=t[(r+1)%e],s=t[(r+2)%e];return X((n-r/e)*e,i,a,o,s)}});var tn=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,tr=RegExp(tn.source,"g");function ti(t,e){return t=+t,e=+e,function(n){return Math.round(t*(1-n)+e*n)}}function ta(t){return+t}var to=[0,1];function ts(t){return t}function tl(t,e){var n;return(e-=t=+t)?function(n){return(n-t)/e}:(n=isNaN(e)?NaN:.5,function(){return n})}function tu(t,e,n){var r=t[0],i=t[1],a=e[0],o=e[1];return i<r?(r=tl(i,r),a=n(o,a)):(r=tl(r,i),a=n(a,o)),function(t){return a(r(t))}}function tc(t,e,n){var r=Math.min(t.length,e.length)-1,i=Array(r),a=Array(r),o=-1;for(t[r]<t[0]&&(t=t.slice().reverse(),e=e.slice().reverse());++o<r;)i[o]=tl(t[o],t[o+1]),a[o]=n(e[o],e[o+1]);return function(e){var n=d(t,e,1,r)-1;return a[n](i[n](e))}}function tf(t,e){switch(arguments.length){case 0:break;case 1:this.range(t);break;default:this.range(e).domain(t)}return this}var th=/^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;function td(t){var e;if(!(e=th.exec(t)))throw Error("invalid format: "+t);return new tp({fill:e[1],align:e[2],sign:e[3],symbol:e[4],zero:e[5],width:e[6],comma:e[7],precision:e[8]&&e[8].slice(1),trim:e[9],type:e[10]})}function tp(t){this.fill=void 0===t.fill?" ":t.fill+"",this.align=void 0===t.align?">":t.align+"",this.sign=void 0===t.sign?"-":t.sign+"",this.symbol=void 0===t.symbol?"":t.symbol+"",this.zero=!!t.zero,this.width=void 0===t.width?void 0:+t.width,this.comma=!!t.comma,this.precision=void 0===t.precision?void 0:+t.precision,this.trim=!!t.trim,this.type=void 0===t.type?"":t.type+""}function tg(t,e){if((n=(t=e?t.toExponential(e-1):t.toExponential()).indexOf("e"))<0)return null;var n,r=t.slice(0,n);return[r.length>1?r[0]+r.slice(2):r,+t.slice(n+1)]}function tm(t){return(t=tg(Math.abs(t)))?t[1]:NaN}function tv(t,e){var n=tg(t,e);if(!n)return t+"";var r=n[0],i=n[1];return i<0?"0."+Array(-i).join("0")+r:r.length>i+1?r.slice(0,i+1)+"."+r.slice(i+1):r+Array(i-r.length+2).join("0")}td.prototype=tp.prototype,tp.prototype.toString=function(){return this.fill+this.align+this.sign+this.symbol+(this.zero?"0":"")+(void 0===this.width?"":Math.max(1,0|this.width))+(this.comma?",":"")+(void 0===this.precision?"":"."+Math.max(0,0|this.precision))+(this.trim?"~":"")+this.type};var ty={"%":(t,e)=>(100*t).toFixed(e),b:t=>Math.round(t).toString(2),c:t=>t+"",d:function(t){return Math.abs(t=Math.round(t))>=1e21?t.toLocaleString("en").replace(/,/g,""):t.toString(10)},e:(t,e)=>t.toExponential(e),f:(t,e)=>t.toFixed(e),g:(t,e)=>t.toPrecision(e),o:t=>Math.round(t).toString(8),p:(t,e)=>tv(100*t,e),r:tv,s:function(t,e){var n=tg(t,e);if(!n)return t+"";var r=n[0],i=n[1],a=i-(v=3*Math.max(-8,Math.min(8,Math.floor(i/3))))+1,o=r.length;return a===o?r:a>o?r+Array(a-o+1).join("0"):a>0?r.slice(0,a)+"."+r.slice(a):"0."+Array(1-a).join("0")+tg(t,Math.max(0,e+a-1))[0]},X:t=>Math.round(t).toString(16).toUpperCase(),x:t=>Math.round(t).toString(16)};function tw(t){return t}var tb=Array.prototype.map,tx=["y","z","a","f","p","n","\xb5","m","","k","M","G","T","P","E","Z","Y"];w=(y=function(t){var e,n,r,i=void 0===t.grouping||void 0===t.thousands?tw:(e=tb.call(t.grouping,Number),n=t.thousands+"",function(t,r){for(var i=t.length,a=[],o=0,s=e[0],l=0;i>0&&s>0&&(l+s+1>r&&(s=Math.max(1,r-l)),a.push(t.substring(i-=s,i+s)),!((l+=s+1)>r));)s=e[o=(o+1)%e.length];return a.reverse().join(n)}),a=void 0===t.currency?"":t.currency[0]+"",o=void 0===t.currency?"":t.currency[1]+"",s=void 0===t.decimal?".":t.decimal+"",l=void 0===t.numerals?tw:(r=tb.call(t.numerals,String),function(t){return t.replace(/[0-9]/g,function(t){return r[+t]})}),u=void 0===t.percent?"%":t.percent+"",c=void 0===t.minus?"−":t.minus+"",f=void 0===t.nan?"NaN":t.nan+"";function h(t){var e=(t=td(t)).fill,n=t.align,r=t.sign,h=t.symbol,d=t.zero,p=t.width,g=t.comma,m=t.precision,y=t.trim,w=t.type;"n"===w?(g=!0,w="g"):ty[w]||(void 0===m&&(m=12),y=!0,w="g"),(d||"0"===e&&"="===n)&&(d=!0,e="0",n="=");var b="$"===h?a:"#"===h&&/[boxX]/.test(w)?"0"+w.toLowerCase():"",x="$"===h?o:/[%p]/.test(w)?u:"",S=ty[w],M=/[defgprs%]/.test(w);function _(t){var a,o,u,h=b,_=x;if("c"===w)_=S(t)+_,t="";else{var E=(t=+t)<0||1/t<0;if(t=isNaN(t)?f:S(Math.abs(t),m),y&&(t=function(t){t:for(var e,n=t.length,r=1,i=-1;r<n;++r)switch(t[r]){case".":i=e=r;break;case"0":0===i&&(i=r),e=r;break;default:if(!+t[r])break t;i>0&&(i=0)}return i>0?t.slice(0,i)+t.slice(e+1):t}(t)),E&&0==+t&&"+"!==r&&(E=!1),h=(E?"("===r?r:c:"-"===r||"("===r?"":r)+h,_=("s"===w?tx[8+v/3]:"")+_+(E&&"("===r?")":""),M){for(a=-1,o=t.length;++a<o;)if(48>(u=t.charCodeAt(a))||u>57){_=(46===u?s+t.slice(a+1):t.slice(a))+_,t=t.slice(0,a);break}}}g&&!d&&(t=i(t,1/0));var A=h.length+t.length+_.length,N=A<p?Array(p-A+1).join(e):"";switch(g&&d&&(t=i(N+t,N.length?p-_.length:1/0),N=""),n){case"<":t=h+t+_+N;break;case"=":t=h+N+t+_;break;case"^":t=N.slice(0,A=N.length>>1)+h+t+_+N.slice(A);break;default:t=N+h+t+_}return l(t)}return m=void 0===m?6:/[gprs]/.test(w)?Math.max(1,Math.min(21,m)):Math.max(0,Math.min(20,m)),_.toString=function(){return t+""},_}return{format:h,formatPrefix:function(t,e){var n=h(((t=td(t)).type="f",t)),r=3*Math.max(-8,Math.min(8,Math.floor(tm(e)/3))),i=Math.pow(10,-r),a=tx[8+r/3];return function(t){return n(i*t)+a}}}}({thousands:",",grouping:[3],currency:["$",""]})).format,b=y.formatPrefix},93683:function(t,e,n){n.d(e,{i:function(){return r}});let r=parseInt(n(79290).UZH.replace(/\D+/g,""))},59638:function(t,e,n){n.d(e,{Y:function(){return i}});var r=n(79290);class i extends r.jyz{constructor(t){super({type:"LineMaterial",uniforms:r.rDY.clone(r.rDY.merge([r.rBU.common,r.rBU.fog,{worldUnits:{value:1},linewidth:{value:1},resolution:{value:new r.FM8(1,1)},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}}])),vertexShader:`
				#include <common>
				#include <fog_pars_vertex>
				#include <logdepthbuf_pars_vertex>
				#include <clipping_planes_pars_vertex>

				uniform float linewidth;
				uniform vec2 resolution;

				attribute vec3 instanceStart;
				attribute vec3 instanceEnd;

				#ifdef USE_COLOR
					#ifdef USE_LINE_COLOR_ALPHA
						varying vec4 vLineColor;
						attribute vec4 instanceColorStart;
						attribute vec4 instanceColorEnd;
					#else
						varying vec3 vLineColor;
						attribute vec3 instanceColorStart;
						attribute vec3 instanceColorEnd;
					#endif
				#endif

				#ifdef WORLD_UNITS

					varying vec4 worldPos;
					varying vec3 worldStart;
					varying vec3 worldEnd;

					#ifdef USE_DASH

						varying vec2 vUv;

					#endif

				#else

					varying vec2 vUv;

				#endif

				#ifdef USE_DASH

					uniform float dashScale;
					attribute float instanceDistanceStart;
					attribute float instanceDistanceEnd;
					varying float vLineDistance;

				#endif

				void trimSegment( const in vec4 start, inout vec4 end ) {

					// trim end segment so it terminates between the camera plane and the near plane

					// conservative estimate of the near plane
					float a = projectionMatrix[ 2 ][ 2 ]; // 3nd entry in 3th column
					float b = projectionMatrix[ 3 ][ 2 ]; // 3nd entry in 4th column
					float nearEstimate = - 0.5 * b / a;

					float alpha = ( nearEstimate - start.z ) / ( end.z - start.z );

					end.xyz = mix( start.xyz, end.xyz, alpha );

				}

				void main() {

					#ifdef USE_COLOR

						vLineColor = ( position.y < 0.5 ) ? instanceColorStart : instanceColorEnd;

					#endif

					#ifdef USE_DASH

						vLineDistance = ( position.y < 0.5 ) ? dashScale * instanceDistanceStart : dashScale * instanceDistanceEnd;
						vUv = uv;

					#endif

					float aspect = resolution.x / resolution.y;

					// camera space
					vec4 start = modelViewMatrix * vec4( instanceStart, 1.0 );
					vec4 end = modelViewMatrix * vec4( instanceEnd, 1.0 );

					#ifdef WORLD_UNITS

						worldStart = start.xyz;
						worldEnd = end.xyz;

					#else

						vUv = uv;

					#endif

					// special case for perspective projection, and segments that terminate either in, or behind, the camera plane
					// clearly the gpu firmware has a way of addressing this issue when projecting into ndc space
					// but we need to perform ndc-space calculations in the shader, so we must address this issue directly
					// perhaps there is a more elegant solution -- WestLangley

					bool perspective = ( projectionMatrix[ 2 ][ 3 ] == - 1.0 ); // 4th entry in the 3rd column

					if ( perspective ) {

						if ( start.z < 0.0 && end.z >= 0.0 ) {

							trimSegment( start, end );

						} else if ( end.z < 0.0 && start.z >= 0.0 ) {

							trimSegment( end, start );

						}

					}

					// clip space
					vec4 clipStart = projectionMatrix * start;
					vec4 clipEnd = projectionMatrix * end;

					// ndc space
					vec3 ndcStart = clipStart.xyz / clipStart.w;
					vec3 ndcEnd = clipEnd.xyz / clipEnd.w;

					// direction
					vec2 dir = ndcEnd.xy - ndcStart.xy;

					// account for clip-space aspect ratio
					dir.x *= aspect;
					dir = normalize( dir );

					#ifdef WORLD_UNITS

						// get the offset direction as perpendicular to the view vector
						vec3 worldDir = normalize( end.xyz - start.xyz );
						vec3 offset;
						if ( position.y < 0.5 ) {

							offset = normalize( cross( start.xyz, worldDir ) );

						} else {

							offset = normalize( cross( end.xyz, worldDir ) );

						}

						// sign flip
						if ( position.x < 0.0 ) offset *= - 1.0;

						float forwardOffset = dot( worldDir, vec3( 0.0, 0.0, 1.0 ) );

						// don't extend the line if we're rendering dashes because we
						// won't be rendering the endcaps
						#ifndef USE_DASH

							// extend the line bounds to encompass  endcaps
							start.xyz += - worldDir * linewidth * 0.5;
							end.xyz += worldDir * linewidth * 0.5;

							// shift the position of the quad so it hugs the forward edge of the line
							offset.xy -= dir * forwardOffset;
							offset.z += 0.5;

						#endif

						// endcaps
						if ( position.y > 1.0 || position.y < 0.0 ) {

							offset.xy += dir * 2.0 * forwardOffset;

						}

						// adjust for linewidth
						offset *= linewidth * 0.5;

						// set the world position
						worldPos = ( position.y < 0.5 ) ? start : end;
						worldPos.xyz += offset;

						// project the worldpos
						vec4 clip = projectionMatrix * worldPos;

						// shift the depth of the projected points so the line
						// segments overlap neatly
						vec3 clipPose = ( position.y < 0.5 ) ? ndcStart : ndcEnd;
						clip.z = clipPose.z * clip.w;

					#else

						vec2 offset = vec2( dir.y, - dir.x );
						// undo aspect ratio adjustment
						dir.x /= aspect;
						offset.x /= aspect;

						// sign flip
						if ( position.x < 0.0 ) offset *= - 1.0;

						// endcaps
						if ( position.y < 0.0 ) {

							offset += - dir;

						} else if ( position.y > 1.0 ) {

							offset += dir;

						}

						// adjust for linewidth
						offset *= linewidth;

						// adjust for clip-space to screen-space conversion // maybe resolution should be based on viewport ...
						offset /= resolution.y;

						// select end
						vec4 clip = ( position.y < 0.5 ) ? clipStart : clipEnd;

						// back to clip space
						offset *= clip.w;

						clip.xy += offset;

					#endif

					gl_Position = clip;

					vec4 mvPosition = ( position.y < 0.5 ) ? start : end; // this is an approximation

					#include <logdepthbuf_vertex>
					#include <clipping_planes_vertex>
					#include <fog_vertex>

				}
			`,fragmentShader:`
				uniform vec3 diffuse;
				uniform float opacity;
				uniform float linewidth;

				#ifdef USE_DASH

					uniform float dashOffset;
					uniform float dashSize;
					uniform float gapSize;

				#endif

				varying float vLineDistance;

				#ifdef WORLD_UNITS

					varying vec4 worldPos;
					varying vec3 worldStart;
					varying vec3 worldEnd;

					#ifdef USE_DASH

						varying vec2 vUv;

					#endif

				#else

					varying vec2 vUv;

				#endif

				#include <common>
				#include <fog_pars_fragment>
				#include <logdepthbuf_pars_fragment>
				#include <clipping_planes_pars_fragment>

				#ifdef USE_COLOR
					#ifdef USE_LINE_COLOR_ALPHA
						varying vec4 vLineColor;
					#else
						varying vec3 vLineColor;
					#endif
				#endif

				vec2 closestLineToLine(vec3 p1, vec3 p2, vec3 p3, vec3 p4) {

					float mua;
					float mub;

					vec3 p13 = p1 - p3;
					vec3 p43 = p4 - p3;

					vec3 p21 = p2 - p1;

					float d1343 = dot( p13, p43 );
					float d4321 = dot( p43, p21 );
					float d1321 = dot( p13, p21 );
					float d4343 = dot( p43, p43 );
					float d2121 = dot( p21, p21 );

					float denom = d2121 * d4343 - d4321 * d4321;

					float numer = d1343 * d4321 - d1321 * d4343;

					mua = numer / denom;
					mua = clamp( mua, 0.0, 1.0 );
					mub = ( d1343 + d4321 * ( mua ) ) / d4343;
					mub = clamp( mub, 0.0, 1.0 );

					return vec2( mua, mub );

				}

				void main() {

					#include <clipping_planes_fragment>

					#ifdef USE_DASH

						if ( vUv.y < - 1.0 || vUv.y > 1.0 ) discard; // discard endcaps

						if ( mod( vLineDistance + dashOffset, dashSize + gapSize ) > dashSize ) discard; // todo - FIX

					#endif

					float alpha = opacity;

					#ifdef WORLD_UNITS

						// Find the closest points on the view ray and the line segment
						vec3 rayEnd = normalize( worldPos.xyz ) * 1e5;
						vec3 lineDir = worldEnd - worldStart;
						vec2 params = closestLineToLine( worldStart, worldEnd, vec3( 0.0, 0.0, 0.0 ), rayEnd );

						vec3 p1 = worldStart + lineDir * params.x;
						vec3 p2 = rayEnd * params.y;
						vec3 delta = p1 - p2;
						float len = length( delta );
						float norm = len / linewidth;

						#ifndef USE_DASH

							#ifdef USE_ALPHA_TO_COVERAGE

								float dnorm = fwidth( norm );
								alpha = 1.0 - smoothstep( 0.5 - dnorm, 0.5 + dnorm, norm );

							#else

								if ( norm > 0.5 ) {

									discard;

								}

							#endif

						#endif

					#else

						#ifdef USE_ALPHA_TO_COVERAGE

							// artifacts appear on some hardware if a derivative is taken within a conditional
							float a = vUv.x;
							float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
							float len2 = a * a + b * b;
							float dlen = fwidth( len2 );

							if ( abs( vUv.y ) > 1.0 ) {

								alpha = 1.0 - smoothstep( 1.0 - dlen, 1.0 + dlen, len2 );

							}

						#else

							if ( abs( vUv.y ) > 1.0 ) {

								float a = vUv.x;
								float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
								float len2 = a * a + b * b;

								if ( len2 > 1.0 ) discard;

							}

						#endif

					#endif

					vec4 diffuseColor = vec4( diffuse, alpha );
					#ifdef USE_COLOR
						#ifdef USE_LINE_COLOR_ALPHA
							diffuseColor *= vLineColor;
						#else
							diffuseColor.rgb *= vLineColor;
						#endif
					#endif

					#include <logdepthbuf_fragment>

					gl_FragColor = diffuseColor;

					#include <tonemapping_fragment>
					#include <${parseInt(r.UZH.replace(/\D+/g,""))>=154?"colorspace_fragment":"encodings_fragment"}>
					#include <fog_fragment>
					#include <premultiplied_alpha_fragment>

				}
			`,clipping:!0}),this.isLineMaterial=!0,this.onBeforeCompile=function(){this.transparent?this.defines.USE_LINE_COLOR_ALPHA="1":delete this.defines.USE_LINE_COLOR_ALPHA},Object.defineProperties(this,{color:{enumerable:!0,get:function(){return this.uniforms.diffuse.value},set:function(t){this.uniforms.diffuse.value=t}},worldUnits:{enumerable:!0,get:function(){return"WORLD_UNITS"in this.defines},set:function(t){!0===t?this.defines.WORLD_UNITS="":delete this.defines.WORLD_UNITS}},linewidth:{enumerable:!0,get:function(){return this.uniforms.linewidth.value},set:function(t){this.uniforms.linewidth.value=t}},dashed:{enumerable:!0,get:function(){return"USE_DASH"in this.defines},set(t){!!t!="USE_DASH"in this.defines&&(this.needsUpdate=!0),!0===t?this.defines.USE_DASH="":delete this.defines.USE_DASH}},dashScale:{enumerable:!0,get:function(){return this.uniforms.dashScale.value},set:function(t){this.uniforms.dashScale.value=t}},dashSize:{enumerable:!0,get:function(){return this.uniforms.dashSize.value},set:function(t){this.uniforms.dashSize.value=t}},dashOffset:{enumerable:!0,get:function(){return this.uniforms.dashOffset.value},set:function(t){this.uniforms.dashOffset.value=t}},gapSize:{enumerable:!0,get:function(){return this.uniforms.gapSize.value},set:function(t){this.uniforms.gapSize.value=t}},opacity:{enumerable:!0,get:function(){return this.uniforms.opacity.value},set:function(t){this.uniforms.opacity.value=t}},resolution:{enumerable:!0,get:function(){return this.uniforms.resolution.value},set:function(t){this.uniforms.resolution.value.copy(t)}},alphaToCoverage:{enumerable:!0,get:function(){return"USE_ALPHA_TO_COVERAGE"in this.defines},set:function(t){!!t!="USE_ALPHA_TO_COVERAGE"in this.defines&&(this.needsUpdate=!0),!0===t?(this.defines.USE_ALPHA_TO_COVERAGE="",this.extensions.derivatives=!0):(delete this.defines.USE_ALPHA_TO_COVERAGE,this.extensions.derivatives=!1)}}}),this.setValues(t)}}},34316:function(t,e,n){let r,i;n.d(e,{w:function(){return M}});var a=n(79290),o=n(35888),s=n(59638);let l=n(93683).i>=125?"uv1":"uv2",u=new a.Ltg,c=new a.Pa4,f=new a.Pa4,h=new a.Ltg,d=new a.Ltg,p=new a.Ltg,g=new a.Pa4,m=new a.yGw,v=new a.Zzh,y=new a.Pa4,w=new a.ZzF,b=new a.aLr,x=new a.Ltg;function S(t,e,n){return x.set(0,0,-e,1).applyMatrix4(t.projectionMatrix),x.multiplyScalar(1/x.w),x.x=i/n.width,x.y=i/n.height,x.applyMatrix4(t.projectionMatrixInverse),x.multiplyScalar(1/x.w),Math.abs(Math.max(x.x,x.y))}class M extends a.Kj0{constructor(t=new o.z,e=new s.Y({color:16777215*Math.random()})){super(t,e),this.isLineSegments2=!0,this.type="LineSegments2"}computeLineDistances(){let t=this.geometry,e=t.attributes.instanceStart,n=t.attributes.instanceEnd,r=new Float32Array(2*e.count);for(let t=0,i=0,a=e.count;t<a;t++,i+=2)c.fromBufferAttribute(e,t),f.fromBufferAttribute(n,t),r[i]=0===i?0:r[i-1],r[i+1]=r[i]+c.distanceTo(f);let i=new a.$TI(r,2,1);return t.setAttribute("instanceDistanceStart",new a.kB5(i,1,0)),t.setAttribute("instanceDistanceEnd",new a.kB5(i,1,1)),this}raycast(t,e){let n,o;let s=this.material.worldUnits,u=t.camera;null!==u||s||console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.');let c=void 0!==t.params.Line2&&t.params.Line2.threshold||0;r=t.ray;let f=this.matrixWorld,x=this.geometry,M=this.material;if(i=M.linewidth+c,null===x.boundingSphere&&x.computeBoundingSphere(),b.copy(x.boundingSphere).applyMatrix4(f),s)n=.5*i;else{let t=Math.max(u.near,b.distanceToPoint(r.origin));n=S(u,t,M.resolution)}if(b.radius+=n,!1!==r.intersectsSphere(b)){if(null===x.boundingBox&&x.computeBoundingBox(),w.copy(x.boundingBox).applyMatrix4(f),s)o=.5*i;else{let t=Math.max(u.near,w.distanceToPoint(r.origin));o=S(u,t,M.resolution)}w.expandByScalar(o),!1!==r.intersectsBox(w)&&(s?function(t,e){let n=t.matrixWorld,o=t.geometry,s=o.attributes.instanceStart,u=o.attributes.instanceEnd,c=Math.min(o.instanceCount,s.count);for(let o=0;o<c;o++){v.start.fromBufferAttribute(s,o),v.end.fromBufferAttribute(u,o),v.applyMatrix4(n);let c=new a.Pa4,f=new a.Pa4;r.distanceSqToSegment(v.start,v.end,f,c),f.distanceTo(c)<.5*i&&e.push({point:f,pointOnLine:c,distance:r.origin.distanceTo(f),object:t,face:null,faceIndex:o,uv:null,[l]:null})}}(this,e):function(t,e,n){let o=e.projectionMatrix,s=t.material.resolution,u=t.matrixWorld,c=t.geometry,f=c.attributes.instanceStart,w=c.attributes.instanceEnd,b=Math.min(c.instanceCount,f.count),x=-e.near;r.at(1,p),p.w=1,p.applyMatrix4(e.matrixWorldInverse),p.applyMatrix4(o),p.multiplyScalar(1/p.w),p.x*=s.x/2,p.y*=s.y/2,p.z=0,g.copy(p),m.multiplyMatrices(e.matrixWorldInverse,u);for(let e=0;e<b;e++){if(h.fromBufferAttribute(f,e),d.fromBufferAttribute(w,e),h.w=1,d.w=1,h.applyMatrix4(m),d.applyMatrix4(m),h.z>x&&d.z>x)continue;if(h.z>x){let t=h.z-d.z,e=(h.z-x)/t;h.lerp(d,e)}else if(d.z>x){let t=d.z-h.z,e=(d.z-x)/t;d.lerp(h,e)}h.applyMatrix4(o),d.applyMatrix4(o),h.multiplyScalar(1/h.w),d.multiplyScalar(1/d.w),h.x*=s.x/2,h.y*=s.y/2,d.x*=s.x/2,d.y*=s.y/2,v.start.copy(h),v.start.z=0,v.end.copy(d),v.end.z=0;let c=v.closestPointToPointParameter(g,!0);v.at(c,y);let p=a.M8C.lerp(h.z,d.z,c),b=p>=-1&&p<=1,S=g.distanceTo(y)<.5*i;if(b&&S){v.start.fromBufferAttribute(f,e),v.end.fromBufferAttribute(w,e),v.start.applyMatrix4(u),v.end.applyMatrix4(u);let i=new a.Pa4,o=new a.Pa4;r.distanceSqToSegment(v.start,v.end,o,i),n.push({point:o,pointOnLine:i,distance:r.origin.distanceTo(o),object:t,face:null,faceIndex:e,uv:null,[l]:null})}}}(this,u,e))}}onBeforeRender(t){let e=this.material.uniforms;e&&e.resolution&&(t.getViewport(u),this.material.uniforms.resolution.value.set(u.z,u.w))}}},35888:function(t,e,n){n.d(e,{z:function(){return o}});var r=n(79290);let i=new r.ZzF,a=new r.Pa4;class o extends r.L5s{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry",this.setIndex([0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5]),this.setAttribute("position",new r.a$l([-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],3)),this.setAttribute("uv",new r.a$l([-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],2))}applyMatrix4(t){let e=this.attributes.instanceStart,n=this.attributes.instanceEnd;return void 0!==e&&(e.applyMatrix4(t),n.applyMatrix4(t),e.needsUpdate=!0),null!==this.boundingBox&&this.computeBoundingBox(),null!==this.boundingSphere&&this.computeBoundingSphere(),this}setPositions(t){let e;t instanceof Float32Array?e=t:Array.isArray(t)&&(e=new Float32Array(t));let n=new r.$TI(e,6,1);return this.setAttribute("instanceStart",new r.kB5(n,3,0)),this.setAttribute("instanceEnd",new r.kB5(n,3,3)),this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(t,e=3){let n;t instanceof Float32Array?n=t:Array.isArray(t)&&(n=new Float32Array(t));let i=new r.$TI(n,2*e,1);return this.setAttribute("instanceColorStart",new r.kB5(i,e,0)),this.setAttribute("instanceColorEnd",new r.kB5(i,e,e)),this}fromWireframeGeometry(t){return this.setPositions(t.attributes.position.array),this}fromEdgesGeometry(t){return this.setPositions(t.attributes.position.array),this}fromMesh(t){return this.fromWireframeGeometry(new r.Uk6(t.geometry)),this}fromLineSegments(t){let e=t.geometry;return this.setPositions(e.attributes.position.array),this}computeBoundingBox(){null===this.boundingBox&&(this.boundingBox=new r.ZzF);let t=this.attributes.instanceStart,e=this.attributes.instanceEnd;void 0!==t&&void 0!==e&&(this.boundingBox.setFromBufferAttribute(t),i.setFromBufferAttribute(e),this.boundingBox.union(i))}computeBoundingSphere(){null===this.boundingSphere&&(this.boundingSphere=new r.aLr),null===this.boundingBox&&this.computeBoundingBox();let t=this.attributes.instanceStart,e=this.attributes.instanceEnd;if(void 0!==t&&void 0!==e){let n=this.boundingSphere.center;this.boundingBox.getCenter(n);let r=0;for(let i=0,o=t.count;i<o;i++)a.fromBufferAttribute(t,i),r=Math.max(r,n.distanceToSquared(a)),a.fromBufferAttribute(e,i),r=Math.max(r,n.distanceToSquared(a));this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}applyMatrix(t){return console.warn("THREE.LineSegmentsGeometry: applyMatrix() has been renamed to applyMatrix4()."),this.applyMatrix4(t)}}}}]);