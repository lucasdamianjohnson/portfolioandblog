(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[530],{81253:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/portfolio/videogames",function(){return t(38947)}])},25181:function(e,r,t){"use strict";var n=t(85893),o=t(77613),a=t.n(o),i=t(41664),c=t(42210),l=t(52097);r.Z=function(e){var r={src:""};return e.banner&&(r=e.banner),(0,n.jsx)(i.default,{href:e.link,children:(0,n.jsx)("a",{className:a()["blog-card-link"],tabIndex:0,children:(0,n.jsxs)("div",{className:a()["blog-card"],children:[r&&(0,n.jsx)("div",{className:a()["blog-card-image-container"],children:(0,n.jsx)(l.Z,{webP:!0,thumb:!0,className:a()["blog-card-image"],src:r.src,data:r})}),(0,n.jsxs)("div",{className:a()["blog-card-content"],children:[(0,n.jsx)(c.Z,{className:a()["blog-card-title"],varient:"h3",children:e.title}),e.subTitleElement&&e.subTitleElement,e.date&&(0,n.jsx)("span",{className:a()["blog-card-date"],children:e.date}),(0,n.jsx)(c.Z,{className:a()["blog-card-description"],varient:"p",children:e.description})]})]})})})}},48418:function(e,r,t){"use strict";function n(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var t=[],n=!0,o=!1,a=void 0;try{for(var i,c=e[Symbol.iterator]();!(n=(i=c.next()).done)&&(t.push(i.value),!r||t.length!==r);n=!0);}catch(l){o=!0,a=l}finally{try{n||null==c.return||c.return()}finally{if(o)throw a}}return t}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}r.default=void 0;var o,a=(o=t(67294))&&o.__esModule?o:{default:o},i=t(76273),c=t(90387),l=t(57190);var s={};function u(e,r,t,n){if(e&&i.isLocalURL(r)){e.prefetch(r,t,n).catch((function(e){0}));var o=n&&"undefined"!==typeof n.locale?n.locale:e&&e.locale;s[r+"%"+t+(o?"%"+o:"")]=!0}}var f=function(e){var r,t=!1!==e.prefetch,o=c.useRouter(),f=a.default.useMemo((function(){var r=n(i.resolveHref(o,e.href,!0),2),t=r[0],a=r[1];return{href:t,as:e.as?i.resolveHref(o,e.as):a||t}}),[o,e.href,e.as]),d=f.href,p=f.as,v=e.children,b=e.replace,g=e.shallow,h=e.scroll,m=e.locale;"string"===typeof v&&(v=a.default.createElement("a",null,v));var _=(r=a.default.Children.only(v))&&"object"===typeof r&&r.ref,y=n(l.useIntersection({rootMargin:"200px"}),2),x=y[0],w=y[1],E=a.default.useCallback((function(e){x(e),_&&("function"===typeof _?_(e):"object"===typeof _&&(_.current=e))}),[_,x]);a.default.useEffect((function(){var e=w&&t&&i.isLocalURL(d),r="undefined"!==typeof m?m:o&&o.locale,n=s[d+"%"+p+(r?"%"+r:"")];e&&!n&&u(o,d,p,{locale:r})}),[p,d,w,m,t,o]);var N={ref:E,onClick:function(e){r.props&&"function"===typeof r.props.onClick&&r.props.onClick(e),e.defaultPrevented||function(e,r,t,n,o,a,c,l){("A"!==e.currentTarget.nodeName||!function(e){var r=e.currentTarget.target;return r&&"_self"!==r||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&i.isLocalURL(t))&&(e.preventDefault(),null==c&&n.indexOf("#")>=0&&(c=!1),r[o?"replace":"push"](t,n,{shallow:a,locale:l,scroll:c}))}(e,o,d,p,b,g,h,m)},onMouseEnter:function(e){r.props&&"function"===typeof r.props.onMouseEnter&&r.props.onMouseEnter(e),i.isLocalURL(d)&&u(o,d,p,{priority:!0})}};if(e.passHref||"a"===r.type&&!("href"in r.props)){var j="undefined"!==typeof m?m:o&&o.locale,k=o&&o.isLocaleDomain&&i.getDomainLocale(p,j,o&&o.locales,o&&o.domainLocales);N.href=k||i.addBasePath(i.addLocale(p,j,o&&o.defaultLocale))}return a.default.cloneElement(r,N)};r.default=f},57190:function(e,r,t){"use strict";function n(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var t=[],n=!0,o=!1,a=void 0;try{for(var i,c=e[Symbol.iterator]();!(n=(i=c.next()).done)&&(t.push(i.value),!r||t.length!==r);n=!0);}catch(l){o=!0,a=l}finally{try{n||null==c.return||c.return()}finally{if(o)throw a}}return t}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}Object.defineProperty(r,"__esModule",{value:!0}),r.useIntersection=function(e){var r=e.rootMargin,t=e.disabled||!i,l=o.useRef(),s=n(o.useState(!1),2),u=s[0],f=s[1],d=o.useCallback((function(e){l.current&&(l.current(),l.current=void 0),t||u||e&&e.tagName&&(l.current=function(e,r,t){var n=function(e){var r=e.rootMargin||"",t=c.get(r);if(t)return t;var n=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var r=n.get(e.target),t=e.isIntersecting||e.intersectionRatio>0;r&&t&&r(t)}))}),e);return c.set(r,t={id:r,observer:o,elements:n}),t}(t),o=n.id,a=n.observer,i=n.elements;return i.set(e,r),a.observe(e),function(){i.delete(e),a.unobserve(e),0===i.size&&(a.disconnect(),c.delete(o))}}(e,(function(e){return e&&f(e)}),{rootMargin:r}))}),[t,r,u]);return o.useEffect((function(){if(!i&&!u){var e=a.requestIdleCallback((function(){return f(!0)}));return function(){return a.cancelIdleCallback(e)}}}),[u]),[d,u]};var o=t(67294),a=t(9311),i="undefined"!==typeof IntersectionObserver;var c=new Map},38947:function(e,r,t){"use strict";t.r(r),t.d(r,{__N_SSG:function(){return s}});var n=t(85893),o=t(25181),a=t(97306),i=t(42210),c=t(61782),l=t(67294);var s=!0;r.default=function(e){return(0,n.jsx)(c.Z,{title:"Portfolio | Video Games",currentPage:"portfolio",description:"Luke Johnson video games portfolio.",breadCrumbs:[{href:"/portfolio",name:"Portfolio"},{href:"/portfolio/videogames",name:"Video Games",active:!0}],children:(0,n.jsxs)(l.Fragment,{children:[(0,n.jsx)(i.Z,{varient:"h1",center:!0,children:"Video Games"}),(0,n.jsx)("div",{className:"content-grid-2",children:e.items.map((function(e){var r=[];e.tech&&(r=e.tech.split(","));var t=function(e){try{return JSON.parse(e.banner)}catch(r){return}}(e);return(0,n.jsx)("div",{children:(0,n.jsx)(o.Z,{banner:t,title:e.title,subTitleElement:(0,n.jsx)(a.Z,{tech:r,small:!0}),link:"/portfolio/items/videogames/".concat(e.id),description:e.description})},e.id)}))})]})})}},77613:function(e){e.exports={"blog-card-link":"blog_blog-card-link__DNpTQ","blog-card-image-container":"blog_blog-card-image-container__t6hi6","blog-card-image":"blog_blog-card-image__ZD27l","blog-card":"blog_blog-card__MNkrW","blog-card-content":"blog_blog-card-content__p5SW0","blog-card-title":"blog_blog-card-title__759Rv","blog-card-description":"blog_blog-card-description__8Vbw9","blog-card-date":"blog_blog-card-date__HgYwY"}},9008:function(e,r,t){e.exports=t(5443)},41664:function(e,r,t){e.exports=t(48418)}},function(e){e.O(0,[506,370,774,888,179],(function(){return r=81253,e(e.s=r);var r}));var r=e.O();_N_E=r}]);