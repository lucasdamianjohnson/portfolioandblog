(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[103],{80486:function(a,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog/posts/[id]",function(){return t(74591)}])},52097:function(a,e,t){"use strict";t.d(e,{Z:function(){return l}});var n=t(85893),r=t(47629),i=t.n(r),c=t(67294),s=function(a){var e=a.split(".");return 1===e.length||""===e[0]&&2===e.length?"":e.pop()},l=function(a){var e=function(){var e,t,n="";return a.containerClassName&&(n=a.containerClassName),"post"!=(null===(e=a.data)||void 0===e?void 0:e.type)&&"post"!=a.type||(n+=" ".concat(i()["post-image-container"])),(null===(t=a.data)||void 0===t?void 0:t.size)&&(n+=" ".concat(function(){var e,t,n="";switch(a.size&&(n=a.size),(null===(e=a.data)||void 0===e?void 0:e.size)&&(n=null===(t=a.data)||void 0===t?void 0:t.size),n){case"xsmall":return i().xsmall;case"small":return i().small;case"medium":return i().medium;case"large":return i().large}}())),n},t=function(){var e,t,n,r="";return a.className?r=a.className:(null===a||void 0===a||null===(e=a.data)||void 0===e?void 0:e.class)&&(r=null===a||void 0===a?void 0:a.data.class),"post"!=(null===(t=a.data)||void 0===t?void 0:t.type)&&"post"!=a.type||(r+=" ".concat(i()["post-image"])),a.clickAble&&(r+=" ".concat(i()["clickable-image"])),((null===(n=a.data)||void 0===n?void 0:n.center)||a.center)&&(r+=" ".concat(i()["center-image"])),r},r=function(){var e;return a.alt?a.alt:(null===(e=a.data)||void 0===e?void 0:e.alt)?a.data.alt:"No alt provided."},l=function(e){var t=e;if(a.thumb){var n=s(e);n&&(t=e.replace(".".concat(n),"-thumb.".concat(n)))}return t},u=function(){var e,t="";return a.src&&(t=l(a.src)),(null===(e=a.data)||void 0===e?void 0:e.src)&&(t=l(a.data.src)),"".concat("").concat(t)};return function(t){var r;return"post"==(null===(r=a.data)||void 0===r?void 0:r.type)?(0,n.jsx)("span",{className:e(),children:t}):(0,n.jsx)(c.Fragment,{children:t})}(function(e){var t;if(a.webP||(null===(t=a.data)||void 0===t?void 0:t.webP)){var r=u(),i=s(r),l=r;i&&(l=u().replace(i,"webp"));var o="image/jpeg";return".png"==i&&(o="image/png"),(0,n.jsxs)("picture",{children:[(0,n.jsx)("source",{type:"image/webp",srcSet:l}),(0,n.jsx)("source",{type:o,srcSet:r}),e]})}return(0,n.jsx)(c.Fragment,{children:e})}(function(){var e,i,c,s,l,o,d=function(){};return a.openInNewTabOnClick&&(d=function(){window.open(u(),"_blank")}),(0,n.jsx)("img",{tabIndex:0,onClick:function(){d()},src:u(),className:t(),alt:r(),width:null===(e=a.data)||void 0===e?void 0:e.width,height:null===(i=a.data)||void 0===i?void 0:i.height,style:{minHeight:null===(c=a.data)||void 0===c?void 0:c.minHeight,maxHeight:null===(s=a.data)||void 0===s?void 0:s.maxHeight,minWidth:null===(l=a.data)||void 0===l?void 0:l.minWidth,maxWidth:null===(o=a.data)||void 0===o?void 0:o.maxWidth}})}()))}},61782:function(a,e,t){"use strict";t.d(e,{Z:function(){return m}});var n=t(85893),r=t(9008),i=t(48145),c=t(30936),s=t(67294),l=t(41664),u=t(77202),o=t.n(u),d=function(a){var e=function(){var e=o()["breadcrumb-default-crumb"];return a.crumbClass&&(e=a.crumbClass),e},t=function(){var e=o()["breadcrumb-default-crumb-active"];return a.activeCrumbClass&&(e=a.activeCrumbClass),e},r=function(){var e=o()["breadcrumb-default-crumb-slash"];return a.slashClass&&(e=a.slashClass),e};return(0,n.jsx)("div",{className:function(){var e=o()["breadcrumb-default-container"];return a.containerClass&&(e=a.containerClass),e}(),children:a.links.map((function(a,i){return a.active?(0,n.jsx)("span",{className:t(),children:a.name},i):(0,n.jsx)(l.default,{href:a.href,children:(0,n.jsxs)("a",{className:e(),children:[a.name,(0,n.jsx)("span",{className:r(),children:"/"})]})},i)}))})},m=function(a){return(0,n.jsxs)(s.Fragment,{children:[(0,n.jsxs)(r.default,{children:[(0,n.jsx)("title",{children:a.title}),(0,n.jsx)("meta",{name:"description",content:a.description})]}),(0,n.jsx)(i.h,{currentPage:a.currentPage}),(0,n.jsx)("main",{id:"main",children:(0,n.jsxs)(s.Fragment,{children:[a.breadCrumbs&&(0,n.jsx)(d,{links:a.breadCrumbs}),a.children]})}),(0,n.jsx)(c.$,{})]})}},74591:function(a,e,t){"use strict";t.r(e),t.d(e,{__N_SSG:function(){return m},default:function(){return b}});var n=t(85893),r=t(63313),i=t(79463),c=t(8211),s=t(42210),l=t(61782),u=t(60730),o=t.n(u),d=function(a){var e=a.postData,t=function(){try{return JSON.parse(e.banner)}catch(a){return null}}();return(0,n.jsx)(l.Z,{currentPage:"blog",title:e.title,description:e.description,breadCrumbs:a.breadCrumbs,children:(0,n.jsxs)("article",{className:o()["blog-post-container"],children:[t&&(0,n.jsx)(i.Z,{webP:!0,src:t.src,data:t,type:"post"}),(0,n.jsx)(s.Z,{varient:"h2",children:e.title}),(0,n.jsx)(c.Z,{content:a.content}),(0,n.jsx)(r.Z,{})]})})};t(67294);var m=!0,b=function(a){return(0,n.jsx)(d,{postData:a.data,content:a.content,breadCrumbs:[{href:"/blog",name:"Blog"},{href:"",name:a.data.title,active:!0}]})}},77202:function(a){a.exports={"breadcrumb-default-container":"breadcrumbs_breadcrumb-default-container__xaQd_","breadcrumb-default-crumb-active":"breadcrumbs_breadcrumb-default-crumb-active__BfdKG","breadcrumb-default-crumb":"breadcrumbs_breadcrumb-default-crumb__EhQMQ","breadcrumb-default-crumb-slash":"breadcrumbs_breadcrumb-default-crumb-slash__MEqpp"}},47629:function(a){a.exports={"center-image":"image_center-image__WDPLi",xsmall:"image_xsmall__dtVAC",small:"image_small__PTfh1",medium:"image_medium__T0Hby",large:"image_large__Q_qRy","post-image-container":"image_post-image-container__OvFG4","post-image":"image_post-image__oepzz","clickable-image":"image_clickable-image__mMJLL"}},60730:function(a){a.exports={"blog-post-container":"posts_blog-post-container__Gov9e","blog-post-banner":"posts_blog-post-banner__Ik_d_"}}},function(a){a.O(0,[890,506,313,774,888,179],(function(){return e=80486,a(a.s=e);var e}));var e=a.O();_N_E=e}]);