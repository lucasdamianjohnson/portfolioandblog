(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[195],{15423:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog",function(){return t(78010)}])},25181:function(e,n,t){"use strict";var r=t(85893),a=t(77613),o=t.n(a),i=t(41664),c=t(42210),l=t(76813);n.Z=function(e){var n={src:""};return e.banner&&(n=e.banner),(0,r.jsx)(i.default,{href:e.link,children:(0,r.jsx)("a",{className:o()["blog-card-link"],tabIndex:0,children:(0,r.jsxs)("div",{className:o()["blog-card"],children:[n&&(0,r.jsx)("div",{className:o()["blog-card-image-container"],children:(0,r.jsx)(l.Z,{className:o()["blog-card-image"],src:n.src,data:n})}),(0,r.jsxs)("div",{className:o()["blog-card-content"],children:[(0,r.jsx)(c.Z,{className:o()["blog-card-title"],varient:"h3",children:e.title}),e.subTitleElement&&e.subTitleElement,e.date&&(0,r.jsx)("span",{className:o()["blog-card-date"],children:e.date}),(0,r.jsx)(c.Z,{className:o()["blog-card-description"],varient:"p",children:e.description})]})]})})})}},76813:function(e,n,t){"use strict";t.d(n,{Z:function(){return c}});var r=t(85893),a=t(34155).env.SITE_PREFIX||"",o=t(47629),i=t.n(o),c=function(e){var n,t,o,c,l,u,s,d=a;""===a&&(d="/portfolioandblog");return(0,r.jsx)("img",{src:"".concat(d).concat(e.src),className:function(){var n,t,r="";return e.className?r=e.className:(null===e||void 0===e||null===(n=e.data)||void 0===n?void 0:n.class)&&(r=null===e||void 0===e?void 0:e.data.class),(null===(t=e.data)||void 0===t?void 0:t.center)&&(r+=" ".concat(i()["center-image"])),r}(),alt:null===(n=e.data)||void 0===n?void 0:n.alt,width:null===(t=e.data)||void 0===t?void 0:t.width,height:null===(o=e.data)||void 0===o?void 0:o.height,style:{minHeight:null===(c=e.data)||void 0===c?void 0:c.minHeight,maxHeight:null===(l=e.data)||void 0===l?void 0:l.maxHeight,minWidth:null===(u=e.data)||void 0===u?void 0:u.minWidth,maxWidth:null===(s=e.data)||void 0===s?void 0:s.maxWidth}})}},40415:function(e,n,t){"use strict";t.d(n,{Z:function(){return l}});var r=t(85893),a=t(9008),o=t(48145),i=t(30936),c=t(67294),l=function(e){return(0,r.jsxs)(c.Fragment,{children:[(0,r.jsxs)(a.default,{children:[(0,r.jsx)("title",{children:e.title}),(0,r.jsx)("meta",{name:"description",content:e.description})]}),(0,r.jsx)(o.h,{currentPage:e.currentPage}),(0,r.jsx)("main",{id:"main",children:e.children}),(0,r.jsx)(i.$,{})]})}},48418:function(e,n,t){"use strict";function r(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=[],r=!0,a=!1,o=void 0;try{for(var i,c=e[Symbol.iterator]();!(r=(i=c.next()).done)&&(t.push(i.value),!n||t.length!==n);r=!0);}catch(l){a=!0,o=l}finally{try{r||null==c.return||c.return()}finally{if(a)throw o}}return t}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}n.default=void 0;var a,o=(a=t(67294))&&a.__esModule?a:{default:a},i=t(76273),c=t(90387),l=t(57190);var u={};function s(e,n,t,r){if(e&&i.isLocalURL(n)){e.prefetch(n,t,r).catch((function(e){0}));var a=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;u[n+"%"+t+(a?"%"+a:"")]=!0}}var d=function(e){var n,t=!1!==e.prefetch,a=c.useRouter(),d=o.default.useMemo((function(){var n=r(i.resolveHref(a,e.href,!0),2),t=n[0],o=n[1];return{href:t,as:e.as?i.resolveHref(a,e.as):o||t}}),[a,e.href,e.as]),f=d.href,v=d.as,g=e.children,h=e.replace,p=e.shallow,b=e.scroll,m=e.locale;"string"===typeof g&&(g=o.default.createElement("a",null,g));var _=(n=o.default.Children.only(g))&&"object"===typeof n&&n.ref,y=r(l.useIntersection({rootMargin:"200px"}),2),x=y[0],j=y[1],N=o.default.useCallback((function(e){x(e),_&&("function"===typeof _?_(e):"object"===typeof _&&(_.current=e))}),[_,x]);o.default.useEffect((function(){var e=j&&t&&i.isLocalURL(f),n="undefined"!==typeof m?m:a&&a.locale,r=u[f+"%"+v+(n?"%"+n:"")];e&&!r&&s(a,f,v,{locale:n})}),[v,f,j,m,t,a]);var w={ref:N,onClick:function(e){n.props&&"function"===typeof n.props.onClick&&n.props.onClick(e),e.defaultPrevented||function(e,n,t,r,a,o,c,l){("A"!==e.currentTarget.nodeName||!function(e){var n=e.currentTarget.target;return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&i.isLocalURL(t))&&(e.preventDefault(),null==c&&r.indexOf("#")>=0&&(c=!1),n[a?"replace":"push"](t,r,{shallow:o,locale:l,scroll:c}))}(e,a,f,v,h,p,b,m)},onMouseEnter:function(e){n.props&&"function"===typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),i.isLocalURL(f)&&s(a,f,v,{priority:!0})}};if(e.passHref||"a"===n.type&&!("href"in n.props)){var E="undefined"!==typeof m?m:a&&a.locale,k=a&&a.isLocaleDomain&&i.getDomainLocale(v,E,a&&a.locales,a&&a.domainLocales);w.href=k||i.addBasePath(i.addLocale(v,E,a&&a.defaultLocale))}return o.default.cloneElement(n,w)};n.default=d},57190:function(e,n,t){"use strict";function r(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=[],r=!0,a=!1,o=void 0;try{for(var i,c=e[Symbol.iterator]();!(r=(i=c.next()).done)&&(t.push(i.value),!n||t.length!==n);r=!0);}catch(l){a=!0,o=l}finally{try{r||null==c.return||c.return()}finally{if(a)throw o}}return t}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}Object.defineProperty(n,"__esModule",{value:!0}),n.useIntersection=function(e){var n=e.rootMargin,t=e.disabled||!i,l=a.useRef(),u=r(a.useState(!1),2),s=u[0],d=u[1],f=a.useCallback((function(e){l.current&&(l.current(),l.current=void 0),t||s||e&&e.tagName&&(l.current=function(e,n,t){var r=function(e){var n=e.rootMargin||"",t=c.get(n);if(t)return t;var r=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var n=r.get(e.target),t=e.isIntersecting||e.intersectionRatio>0;n&&t&&n(t)}))}),e);return c.set(n,t={id:n,observer:a,elements:r}),t}(t),a=r.id,o=r.observer,i=r.elements;return i.set(e,n),o.observe(e),function(){i.delete(e),o.unobserve(e),0===i.size&&(o.disconnect(),c.delete(a))}}(e,(function(e){return e&&d(e)}),{rootMargin:n}))}),[t,n,s]);return a.useEffect((function(){if(!i&&!s){var e=o.requestIdleCallback((function(){return d(!0)}));return function(){return o.cancelIdleCallback(e)}}}),[s]),[f,s]};var a=t(67294),o=t(9311),i="undefined"!==typeof IntersectionObserver;var c=new Map},78010:function(e,n,t){"use strict";t.r(n),t.d(n,{__N_SSG:function(){return i}});var r=t(85893),a=t(25181),o=t(40415);var i=!0;n.default=function(e){return(0,r.jsx)(o.Z,{title:"Blog",currentPage:"blog",description:"The blog",children:(0,r.jsx)("div",{className:"content-grid-2",children:e.posts.map((function(e){var n=function(e){try{return JSON.parse(e.banner)}catch(n){return}}(e);return(0,r.jsx)("div",{children:(0,r.jsx)(a.Z,{banner:n,date:e.date,title:e.title,link:"/blog/posts/".concat(e.id),description:e.description})},e.id)}))})})}},77613:function(e){e.exports={"blog-card-link":"blog_blog-card-link__DNpTQ","blog-card-image-container":"blog_blog-card-image-container__t6hi6","blog-card-image":"blog_blog-card-image__ZD27l","blog-card":"blog_blog-card__MNkrW","blog-card-content":"blog_blog-card-content__p5SW0","blog-card-title":"blog_blog-card-title__759Rv","blog-card-description":"blog_blog-card-description__8Vbw9","blog-card-date":"blog_blog-card-date__HgYwY"}},47629:function(e){e.exports={"center-image":"image_center-image__WDPLi"}},9008:function(e,n,t){e.exports=t(5443)},41664:function(e,n,t){e.exports=t(48418)}},function(e){e.O(0,[506,774,888,179],(function(){return n=15423,e(e.s=n);var n}));var n=e.O();_N_E=n}]);