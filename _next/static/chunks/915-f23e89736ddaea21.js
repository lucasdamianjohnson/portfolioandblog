(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[915],{63313:function(e,n,t){"use strict";var a=t(85893),o=t(11176),r=t.n(o);n.Z=function(){return(0,a.jsx)("button",{onClick:function(){document.body.scrollTop=0,document.documentElement.scrollTop=0},className:r()["default-back-to-top-button"],children:"Back To Top"})}},79463:function(e,n,t){"use strict";var a=t(85893),o=t(52097),r=t(58640),i=t.n(r);n.Z=function(e){return(0,a.jsx)("div",{className:"post"==(null===e||void 0===e?void 0:e.type)?i()["post-banner-image-container"]:i()["banner-image-container"],children:(0,a.jsx)(o.Z,{webP:e.webP,className:"post"==(null===e||void 0===e?void 0:e.type)?i()["post-banner-image"]:i()["banner-image"],src:e.src,data:e.data})})}},59393:function(e,n,t){"use strict";t.d(n,{Z:function(){return D}});var a=t(85893),o=t(84997),r=t(41346),i=t(7306),c=t(58079),l=t(9363),u=t.n(l),s=function(e){return(0,a.jsx)("span",{className:u()["yt-embed-container"],children:(0,a.jsx)("iframe",{className:u()["yt-iframe"],src:e.src,title:"YouTube video player",frameBorder:"0",allow:"accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})})},p=t(52097),d=t(41664);t(34155).env.SITE_PREFIX;var m=t(67294),g=t(9528),f=t.n(g),_=function(e){e.onClick&&e.onClick;var n=function(){var n=f()["default-button"];return e.className?n=e.className:(e.size||(n+=" ".concat(f().large)),"small"==e.size&&(n+=" ".concat(f().small)),"medium"==e.size&&(n+=" ".concat(f().medium)),"large"==e.size&&(n+=" ".concat(f().large))),e.center&&(n+=" ".concat(f()["center-button"])),n};return function(t){var o=function(){};if(e.nav&&e.navLink){var r=e.navLink;o=function(){e.fancy?setTimeout((function(){window.location.href=r}),300):window.location.href=r}}if(e.nav&&e.navLink&&!e.fancy)return(0,a.jsx)(d.default,{href:e.navLink,children:(0,a.jsx)("a",{tabIndex:0,className:n(),children:t})});if(e.fancy){var i=(0,m.useState)(f()["fancy-button"]),c=i[0],l=i[1],u=!1;return(0,a.jsx)("div",{className:f()["fancy-button-container"],children:(0,a.jsx)("div",{className:f()["fancy-button-center"],children:(0,a.jsxs)("button",{onAnimationIteration:function(){u&&(l("".concat(f()["fancy-button"])),u=!1)},onMouseEnter:function(){l("".concat(f()["fancy-button"]," ").concat(f().glow))},onMouseLeave:function(){u=!0},onClick:function(){e.nav&&o(),e.onClick&&e.onClick()},className:c,children:[(0,a.jsxs)("svg",{width:"200px",height:"50px",viewBox:"0 0 200 50",className:f()["fancy-button-svg"],children:[(0,a.jsx)("polyline",{points:"199,1 199,49 1,49 1,1 199,1"}),(0,a.jsx)("polyline",{points:"199,1 199,49 1,49 1,1 199,1"})]}),t]})})})}return(0,a.jsx)("button",{tabIndex:0,onClick:function(n){e.onClick&&e.onClick(n)},className:n(),children:t})}(e.children)},b=t(63135),y=t.n(b),v=t(62303),h=t.n(v),x=function(e){return(0,a.jsx)("span",{className:h()["google-slides-embed-container"],children:(0,a.jsx)("iframe",{className:h()["google-slides-iframe"],src:e.src,title:"Google Slides Presentation",frameBorder:"0",allowFullScreen:!0})})},w=t(41546),j=t.n(w),k=function(e){var n=function(){i(t(!0)),setTimeout((function(){e.onClose?e.onClose():i(t())}),800)};(0,m.useEffect)((function(){console.log(e.open),i(t())}),[e.open]);var t=function(n){var t=j()["image-popup-modal-container"];return n?t+=" ".concat(j().close):(e.open&&(t+=" ".concat(j().open)),e.open||(t+=" ".concat(j().hide)),t)},o=(0,m.useState)(t()),r=o[0],i=o[1];return window.addEventListener("keydown",(function(e){"Escape"==e.key&&n()})),(0,a.jsxs)("div",{className:r,children:[(0,a.jsx)("button",{className:j()["image-popup-modal-close-button"],onClick:n,children:"X"}),(0,a.jsx)("div",{className:j()["image-popup-modal-image-contianer"],children:(0,a.jsx)(p.Z,{className:j()["image-popup-modal-image"],src:e.src,size:"large"})})]})},N=t(93810),O=t.n(N);function S(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var C={popUpOpen:!1,currentImageSource:""},P=function(e){var n=(0,m.useState)(C),t=n[0],o=n[1];return(0,a.jsxs)("div",{className:function(){var n="";return e.className?n=e.className:(n=O()["default-image-gallery-container"],n+=" ".concat(O()["gallery-grid"])),n}(),children:[e.images.map((function(n,r){return(0,a.jsx)("div",{className:O()["default-image-gallery-image-container"],onClick:function(){if(e.popup){if(t.popUpOpen)return;o({popUpOpen:!0,currentImageSource:n.src})}},children:(0,a.jsx)(p.Z,{clickAble:!0,openInNewTabOnClick:!e.popup,src:n.src,type:e.imageType||n.type,size:"xsmall"})},r)})),t.popUpOpen&&e.popup&&(0,a.jsx)(k,{onClose:function(){o(function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},a=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),a.forEach((function(n){S(e,n,t[n])}))}return e}({},t,{popUpOpen:!1}))},open:t.popUpOpen,src:t.currentImageSource})]})},I=function(e){return(0,a.jsx)("span",{className:y()["google-drawing-default-container"],children:(0,a.jsx)("img",{className:y()["google-drawing-default"],src:e.src})})},T=function(e){try{var n=JSON.parse(e);return(0,a.jsx)(_,{navLink:n.link,nav:!0,center:n.center,children:n.text})}catch(t){return(0,a.jsx)(_,{children:e})}},E=function(e){return(0,a.jsx)(s,{src:e})},Z=function(e){return(0,a.jsx)(x,{src:e})},z=function(e,n){return(0,a.jsx)(p.Z,{src:"".concat(e),data:n})},L=function(e){return(0,a.jsx)(P,{images:e.images,popup:e.gallery.popup,imageSize:e.gallery.imageSize,imageType:e.gallery.imageType})};function G(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function U(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},a=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),a.forEach((function(n){G(e,n,t[n])}))}return e}function A(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var D=function(e){return(0,a.jsx)(o.D,{remarkPlugins:[r.Z],components:{table:function(e){return function(e){return(0,a.jsx)("div",{className:"".concat(y()["view-table-default-container"]),children:(0,a.jsx)("table",{className:"".concat(y()["view-table-default"]),children:e.children})})}(e)},img:function(e){return function(e){try{var n=JSON.parse(e.alt);if("single-image"==e.src){var t=n.image;if(t)return z(t.src,t)}return"image-gallery"==e.src&&n?L(n):"google-drawing"==e.src&&n.src?I(n):z(e.src)}catch(a){return z(e.src)}}(e)},a:function(e){return function(e){var n=e.href,t=e.children[0];return"YT"==t?E(n):"google-slides"==t?Z(n):"button"==n?T(t):(0,a.jsx)(d.default,{href:"".concat(n),children:(0,a.jsx)("a",{children:t})})}(e)},pre:function(e){return function(e){var n,t,o;return"language-RICHDATA"==(null===(t=null===e||void 0===e||null===(n=e.node)||void 0===n?void 0:n.children[0])||void 0===t||null===(o=t.properties)||void 0===o?void 0:o.className[0])?(0,a.jsx)("div",{children:e.children}):(0,a.jsx)("pre",{className:y()["default-code-block"],children:e.children})}(e)},code:function(e){var n=e.inline,t=e.className,o=e.children,r=A(e,["inline","className","children"]);if("language-RICHDATA"==t)return function(e){try{var n=JSON.parse(e);return n&&"image-gallery"==n.type&&n.data?L(n.data):(0,a.jsx)("pre",{children:e})}catch(t){return(0,a.jsxs)("span",{children:["Error for admin: JSON parse error when attempting to parse richdata from markdown file. $",t]})}}(String(o));var l=/language-(\w+)/.exec(t||"");return!n&&l?(0,a.jsx)(i.Z,U({style:c.Z,language:l[1],PreTag:"div"},r,{children:String(o).replace(/\n$/,"")})):(0,a.jsx)("code",U({className:t},r,{children:o}))}},children:e.content})}},11176:function(e){e.exports={"default-back-to-top-button":"back-to-top_default-back-to-top-button__TglGC"}},9528:function(e){e.exports={"default-button":"button_default-button__TxrXZ","center-button":"button_center-button__FJ6O_",small:"button_small__DneY7",medium:"button_medium__6cxRk",large:"button_large__1gnXk","fancy-button-container":"button_fancy-button-container__rL1e2","fancy-button-center":"button_fancy-button-center__zPH_C","fancy-button":"button_fancy-button__7uhEl",glow:"button_glow__PPusw",transformShadow:"button_transformShadow__FoEv_","fancy-button-svg":"button_fancy-button-svg__3sddK",transformStroke:"button_transformStroke__sQaIw"}},62303:function(e){e.exports={"google-slides-iframe":"google-sldies_google-slides-iframe__Gt1Kx","google-slides-embed-container":"google-sldies_google-slides-embed-container__I_lAI"}},9363:function(e){e.exports={"yt-iframe":"youtube_yt-iframe__YjgNI","yt-embed-container":"youtube_yt-embed-container__98QG3"}},58640:function(e){e.exports={"banner-image":"banner_banner-image__iRJ4a","banner-image-container":"banner_banner-image-container__9wkPw","post-banner-image":"banner_post-banner-image__cLZGG","post-banner-image-container":"banner_post-banner-image-container__hlC_Y"}},93810:function(e){e.exports={"default-image-gallery-container":"gallery_default-image-gallery-container__3BVua","default-image-gallery-image-container":"gallery_default-image-gallery-image-container__mv53_","gallery-grid":"gallery_gallery-grid__m4JGi"}},41546:function(e){e.exports={"image-popup-modal-container":"image-popup-modal_image-popup-modal-container__h2LQM","image-popup-modal-close-button":"image-popup-modal_image-popup-modal-close-button__giLFp","image-popup-modal-image-contianer":"image-popup-modal_image-popup-modal-image-contianer__eUBXc","image-popup-modal-image":"image-popup-modal_image-popup-modal-image__7aGhE",hide:"image-popup-modal_hide__Sj2Bq",close:"image-popup-modal_close__0TODm",fadeOut:"image-popup-modal_fadeOut___cUqI",open:"image-popup-modal_open__KwZ3r",fadeIn:"image-popup-modal_fadeIn__SGEXx",zoom:"image-popup-modal_zoom__F1FOh"}},63135:function(e){e.exports={"view-table-default-container":"view_view-table-default-container__wMgX1","view-table-default":"view_view-table-default__ko4bi","default-code-block":"view_default-code-block__HAOCo","google-drawing-default-container":"view_google-drawing-default-container__9UHHs","google-drawing-default":"view_google-drawing-default__DaN4e"}}}]);