(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5301:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(5075)}])},2210:function(e,t,n){"use strict";var r=n(5893),a=n(2208),i=n.n(a);t.Z=function(e){return function(t,n){var a=function(t){var n=e.className;if(!n)switch(t){case"p":n=i()["default-paragraph"];break;case"h1":n=i()["default-h1-title"];break;case"h2":n=i()["default-h2-title"];break;case"h3":n||(n=i()["default-h3-title"]);break;case"h4":n=i()["default-h4-title"];break;case"h5":n=i()["default-h5-title"];break;case"h6":n=i()["default-h6-title"]}return e.center&&(n="".concat(n," ").concat(i()["default-text-center"])),n}(t);switch(t){case"p":return(0,r.jsx)("p",{className:a,children:n});case"h1":return(0,r.jsx)("h1",{className:a,children:n});case"h2":return(0,r.jsx)("h2",{className:a,children:n});case"h3":return(0,r.jsx)("h3",{className:a,children:n});case"h4":return(0,r.jsx)("h4",{className:a,children:n});case"h5":return(0,r.jsx)("h5",{className:a,children:n});case"h6":return(0,r.jsx)("h6",{className:a,children:n});default:return(0,r.jsx)("pre",{className:a,children:n})}}(e.varient,e.children)}},7224:function(e,t,n){"use strict";n.d(t,{Z:function(){return p}});var r=n(5893),a=n(9008),i=n(1664),o=n(5103),l=n.n(o),c=function(e){var t=function(t){var n=l()["main-header-link-conatiner"];return t==e.currentPage&&(n+=" "+l().active),n};return(0,r.jsx)("header",{className:l()["main-header"],children:(0,r.jsx)("nav",{className:l()["main-header-nav"],children:[{id:"home",link:"/",name:"Home"},{id:"portfolio",link:"/portfolio",name:"Portfolio"},{id:"blog",link:"/blog",name:"Blog"},{id:"about",link:"/about",name:"About"}].map((function(e){return(0,r.jsx)(i.default,{href:e.link,children:(0,r.jsx)("a",{className:l()["main-header-link"],children:(0,r.jsx)("div",{className:t(e.id),children:e.name})})},e.name)}))})})},u=n(2210),s=n(6798),f=n.n(s),d=function(e){return(0,r.jsx)("footer",{className:f()["main-footer"],children:(0,r.jsx)("div",{className:f()["main-footer-content"],children:(0,r.jsx)(u.Z,{varient:"p",center:!0,children:"lukejohson.media"})})})},h=n(7294),p=function(e){return(0,r.jsxs)(h.Fragment,{children:[(0,r.jsxs)(a.default,{children:[(0,r.jsx)("title",{children:e.title}),(0,r.jsx)("meta",{name:"description",content:e.description})]}),(0,r.jsx)(c,{currentPage:e.currentPage}),e.children,(0,r.jsx)(d,{})]})}},8418:function(e,t,n){"use strict";function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],r=!0,a=!1,i=void 0;try{for(var o,l=e[Symbol.iterator]();!(r=(o=l.next()).done)&&(n.push(o.value),!t||n.length!==t);r=!0);}catch(c){a=!0,i=c}finally{try{r||null==l.return||l.return()}finally{if(a)throw i}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}t.default=void 0;var a,i=(a=n(7294))&&a.__esModule?a:{default:a},o=n(6273),l=n(387),c=n(7190);var u={};function s(e,t,n,r){if(e&&o.isLocalURL(t)){e.prefetch(t,n,r).catch((function(e){0}));var a=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;u[t+"%"+n+(a?"%"+a:"")]=!0}}var f=function(e){var t,n=!1!==e.prefetch,a=l.useRouter(),f=i.default.useMemo((function(){var t=r(o.resolveHref(a,e.href,!0),2),n=t[0],i=t[1];return{href:n,as:e.as?o.resolveHref(a,e.as):i||n}}),[a,e.href,e.as]),d=f.href,h=f.as,p=e.children,m=e.replace,v=e.shallow,_=e.scroll,y=e.locale;"string"===typeof p&&(p=i.default.createElement("a",null,p));var g=(t=i.default.Children.only(p))&&"object"===typeof t&&t.ref,x=r(c.useIntersection({rootMargin:"200px"}),2),b=x[0],j=x[1],k=i.default.useCallback((function(e){b(e),g&&("function"===typeof g?g(e):"object"===typeof g&&(g.current=e))}),[g,b]);i.default.useEffect((function(){var e=j&&n&&o.isLocalURL(d),t="undefined"!==typeof y?y:a&&a.locale,r=u[d+"%"+h+(t?"%"+t:"")];e&&!r&&s(a,d,h,{locale:t})}),[h,d,j,y,n,a]);var N={ref:k,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,n,r,a,i,l,c){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&o.isLocalURL(n))&&(e.preventDefault(),null==l&&r.indexOf("#")>=0&&(l=!1),t[a?"replace":"push"](n,r,{shallow:i,locale:c,scroll:l}))}(e,a,d,h,m,v,_,y)},onMouseEnter:function(e){t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),o.isLocalURL(d)&&s(a,d,h,{priority:!0})}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var w="undefined"!==typeof y?y:a&&a.locale,E=a&&a.isLocaleDomain&&o.getDomainLocale(h,w,a&&a.locales,a&&a.domainLocales);N.href=E||o.addBasePath(o.addLocale(h,w,a&&a.defaultLocale))}return i.default.cloneElement(t,N)};t.default=f},7190:function(e,t,n){"use strict";function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],r=!0,a=!1,i=void 0;try{for(var o,l=e[Symbol.iterator]();!(r=(o=l.next()).done)&&(n.push(o.value),!t||n.length!==t);r=!0);}catch(c){a=!0,i=c}finally{try{r||null==l.return||l.return()}finally{if(a)throw i}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!o,c=a.useRef(),u=r(a.useState(!1),2),s=u[0],f=u[1],d=a.useCallback((function(e){c.current&&(c.current(),c.current=void 0),n||s||e&&e.tagName&&(c.current=function(e,t,n){var r=function(e){var t=e.rootMargin||"",n=l.get(t);if(n)return n;var r=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return l.set(t,n={id:t,observer:a,elements:r}),n}(n),a=r.id,i=r.observer,o=r.elements;return o.set(e,t),i.observe(e),function(){o.delete(e),i.unobserve(e),0===o.size&&(i.disconnect(),l.delete(a))}}(e,(function(e){return e&&f(e)}),{rootMargin:t}))}),[n,t,s]);return a.useEffect((function(){if(!o&&!s){var e=i.requestIdleCallback((function(){return f(!0)}));return function(){return i.cancelIdleCallback(e)}}}),[s]),[d,s]};var a=n(7294),i=n(9311),o="undefined"!==typeof IntersectionObserver;var l=new Map},5075:function(e,t,n){"use strict";n.r(t);var r=n(5893),a=(n(7294),n(7224)),i=n(4258),o=n.n(i),l=n(7944),c=n.n(l),u=n(2210);function s(e){return(0,r.jsx)(a.Z,{title:"Home",currentPage:"home",description:"The home page.",children:(0,r.jsxs)("div",{children:[(0,r.jsx)("img",{className:c()["main-banner"],src:o(),alt:"A 3d rendering of many transparent block with pixel art."}),(0,r.jsx)(u.Z,{varient:"h1",center:!0,children:"Welcome"}),(0,r.jsx)(u.Z,{varient:"p",center:!0,children:"Hello my name is Luke and welcome to my portfolio site."})]})})}s.getInitialProps=function(){return{title:"lukejohnson.media"}},t.default=s},2208:function(e){e.exports={"default-paragraph":"typeographery_default-paragraph__1INoN","default-h1-title":"typeographery_default-h1-title__Ejl24","default-h2-title":"typeographery_default-h2-title__jG_A4","default-h3-title":"typeographery_default-h3-title__DZnVN","default-h4-title":"typeographery_default-h4-title__zwfGC","default-h5-title":"typeographery_default-h5-title__cMswS","default-h6-title":"typeographery_default-h6-title__OPlQB","default-text-center":"typeographery_default-text-center__2eLto"}},6798:function(e){e.exports={"main-footer":"footer_main-footer__8GXj7","main-footer-content":"footer_main-footer-content__sCsP0"}},5103:function(e){e.exports={"main-header":"header_main-header__d3slc","main-header-nav":"header_main-header-nav__hX3KJ","main-header-link":"header_main-header-link__3AKGw","main-header-link-conatiner":"header_main-header-link-conatiner__5pPqa",active:"header_active___KHn6"}},7944:function(e){e.exports={"main-banner":"homepage_main-banner__j43lg"}},9008:function(e,t,n){e.exports=n(5443)},1664:function(e,t,n){e.exports=n(8418)},4258:function(e){e.exports="/portfolioandblog/_next/static/images/voxel-2d69fcbf423e91bddafac6b7249f420c.png"}},function(e){e.O(0,[774,888,179],(function(){return t=5301,e(e.s=t);var t}));var t=e.O();_N_E=t}]);