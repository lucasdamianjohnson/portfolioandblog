(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[371],{3295:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/portfolio",function(){return t(353)}])},2210:function(e,n,t){"use strict";var r=t(5893),a=t(2208),i=t.n(a);n.Z=function(e){return function(n,t){var a=function(n){var t=e.className;if(!t)switch(n){case"p":t=i()["default-paragraph"];break;case"h1":t=i()["default-h1-title"];break;case"h2":t=i()["default-h2-title"];break;case"h3":t||(t=i()["default-h3-title"]);break;case"h4":t=i()["default-h4-title"];break;case"h5":t=i()["default-h5-title"];break;case"h6":t=i()["default-h6-title"]}return e.center&&(t="".concat(t," ").concat(i()["default-text-center"])),t}(n);switch(n){case"p":return(0,r.jsx)("p",{className:a,children:t});case"h1":return(0,r.jsx)("h1",{className:a,children:t});case"h2":return(0,r.jsx)("h2",{className:a,children:t});case"h3":return(0,r.jsx)("h3",{className:a,children:t});case"h4":return(0,r.jsx)("h4",{className:a,children:t});case"h5":return(0,r.jsx)("h5",{className:a,children:t});case"h6":return(0,r.jsx)("h6",{className:a,children:t});default:return(0,r.jsx)("pre",{className:a,children:t})}}(e.varient,e.children)}},1983:function(e,n,t){"use strict";t.d(n,{Z:function(){return y}});var r=t(5893),a=t(9008),i=t(1664),o=t(7294),l=t(6714),c=t.n(l),s=t(1849),u=t.n(s);var f=function(e){return(0,r.jsx)("div",{className:u()["nav-mobile-menu-button-container"],children:(0,r.jsxs)("svg",{onClick:function(n){e.onClick(n)},className:u()["nav-mobile-menu-button"],viewBox:"0 0 100 80",width:"40",height:"40",children:[(0,r.jsx)("rect",{width:"100",height:"20"}),(0,r.jsx)("rect",{y:"30",width:"100",height:"20"}),(0,r.jsx)("rect",{y:"60",width:"100",height:"20"})]})})};var d=function(e){var n=function(){s(window.innerWidth)},t=1e3;t=window.innerWidth;var a=(0,o.useState)(t),l=a[0],s=a[1],u=(0,o.useState)(!1),d=u[0],h=u[1];(0,o.useEffect)((function(){return window.addEventListener("resize",n),function(){window.removeEventListener("resize",n)}}),[]);var v=l<=768,m=function(n){var t=c()["main-header-link-conatiner"];return n==e.currentPage&&(t+=" "+c().active),t};return(0,r.jsxs)(o.Fragment,{children:[(0,r.jsxs)("div",{className:c()["main-header-nav-container"],children:[(0,r.jsxs)("nav",{className:c()["main-header-nav"],children:[(0,r.jsx)("span",{className:c()["main-header-title"],children:"Luke Johnson"}),!v&&(0,r.jsx)("div",{className:c()["main-header-links"],children:e.pages.map((function(e){return(0,r.jsx)(i.default,{href:e.link,children:(0,r.jsx)("a",{tabIndex:0,className:c()["main-header-link"],children:(0,r.jsx)("div",{className:m(e.id),children:e.name})})},e.name)}))})]}),(0,r.jsx)(f,{onClick:function(){h(!d)}})]}),v&&(0,r.jsx)("div",{className:function(){var e=c()["main-header-mobile-links"];return d&&(e+=" ".concat(c()["is-visible"])),e}(),children:e.pages.map((function(e){return(0,r.jsx)(i.default,{href:e.link,children:(0,r.jsx)("a",{className:c()["main-header-link"],children:(0,r.jsx)("div",{className:m(e.id),children:e.name})})},e.name)}))})]})},h=t(5103),v=t.n(h),m=function(e){return(0,r.jsx)("header",{className:v()["main-header"],children:(0,r.jsx)(d,{pages:[{id:"home",link:"/",name:"Home"},{id:"portfolio",link:"/portfolio",name:"Portfolio"},{id:"blog",link:"/blog",name:"Blog"},{id:"about",link:"/about",name:"About"}],currentPage:e.currentPage})})},p=t(2210),_=t(6798),b=t.n(_),x=function(e){return(0,r.jsx)("footer",{className:b()["main-footer"],children:(0,r.jsx)("div",{className:b()["main-footer-content"],children:(0,r.jsx)(p.Z,{varient:"p",center:!0,children:"lukejohson.media"})})})},y=function(e){return(0,r.jsxs)(o.Fragment,{children:[(0,r.jsxs)(a.default,{children:[(0,r.jsx)("title",{children:e.title}),(0,r.jsx)("meta",{name:"description",content:e.description})]}),(0,r.jsx)(m,{currentPage:e.currentPage}),e.children,(0,r.jsx)(x,{})]})}},8418:function(e,n,t){"use strict";function r(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=[],r=!0,a=!1,i=void 0;try{for(var o,l=e[Symbol.iterator]();!(r=(o=l.next()).done)&&(t.push(o.value),!n||t.length!==n);r=!0);}catch(c){a=!0,i=c}finally{try{r||null==l.return||l.return()}finally{if(a)throw i}}return t}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}n.default=void 0;var a,i=(a=t(7294))&&a.__esModule?a:{default:a},o=t(6273),l=t(387),c=t(7190);var s={};function u(e,n,t,r){if(e&&o.isLocalURL(n)){e.prefetch(n,t,r).catch((function(e){0}));var a=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;s[n+"%"+t+(a?"%"+a:"")]=!0}}var f=function(e){var n,t=!1!==e.prefetch,a=l.useRouter(),f=i.default.useMemo((function(){var n=r(o.resolveHref(a,e.href,!0),2),t=n[0],i=n[1];return{href:t,as:e.as?o.resolveHref(a,e.as):i||t}}),[a,e.href,e.as]),d=f.href,h=f.as,v=e.children,m=e.replace,p=e.shallow,_=e.scroll,b=e.locale;"string"===typeof v&&(v=i.default.createElement("a",null,v));var x=(n=i.default.Children.only(v))&&"object"===typeof n&&n.ref,y=r(c.useIntersection({rootMargin:"200px"}),2),g=y[0],j=y[1],k=i.default.useCallback((function(e){g(e),x&&("function"===typeof x?x(e):"object"===typeof x&&(x.current=e))}),[x,g]);i.default.useEffect((function(){var e=j&&t&&o.isLocalURL(d),n="undefined"!==typeof b?b:a&&a.locale,r=s[d+"%"+h+(n?"%"+n:"")];e&&!r&&u(a,d,h,{locale:n})}),[h,d,j,b,t,a]);var w={ref:k,onClick:function(e){n.props&&"function"===typeof n.props.onClick&&n.props.onClick(e),e.defaultPrevented||function(e,n,t,r,a,i,l,c){("A"!==e.currentTarget.nodeName||!function(e){var n=e.currentTarget.target;return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&o.isLocalURL(t))&&(e.preventDefault(),null==l&&r.indexOf("#")>=0&&(l=!1),n[a?"replace":"push"](t,r,{shallow:i,locale:c,scroll:l}))}(e,a,d,h,m,p,_,b)},onMouseEnter:function(e){n.props&&"function"===typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),o.isLocalURL(d)&&u(a,d,h,{priority:!0})}};if(e.passHref||"a"===n.type&&!("href"in n.props)){var N="undefined"!==typeof b?b:a&&a.locale,E=a&&a.isLocaleDomain&&o.getDomainLocale(h,N,a&&a.locales,a&&a.domainLocales);w.href=E||o.addBasePath(o.addLocale(h,N,a&&a.defaultLocale))}return i.default.cloneElement(n,w)};n.default=f},7190:function(e,n,t){"use strict";function r(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=[],r=!0,a=!1,i=void 0;try{for(var o,l=e[Symbol.iterator]();!(r=(o=l.next()).done)&&(t.push(o.value),!n||t.length!==n);r=!0);}catch(c){a=!0,i=c}finally{try{r||null==l.return||l.return()}finally{if(a)throw i}}return t}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}Object.defineProperty(n,"__esModule",{value:!0}),n.useIntersection=function(e){var n=e.rootMargin,t=e.disabled||!o,c=a.useRef(),s=r(a.useState(!1),2),u=s[0],f=s[1],d=a.useCallback((function(e){c.current&&(c.current(),c.current=void 0),t||u||e&&e.tagName&&(c.current=function(e,n,t){var r=function(e){var n=e.rootMargin||"",t=l.get(n);if(t)return t;var r=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var n=r.get(e.target),t=e.isIntersecting||e.intersectionRatio>0;n&&t&&n(t)}))}),e);return l.set(n,t={id:n,observer:a,elements:r}),t}(t),a=r.id,i=r.observer,o=r.elements;return o.set(e,n),i.observe(e),function(){o.delete(e),i.unobserve(e),0===o.size&&(i.disconnect(),l.delete(a))}}(e,(function(e){return e&&f(e)}),{rootMargin:n}))}),[t,n,u]);return a.useEffect((function(){if(!o&&!u){var e=i.requestIdleCallback((function(){return f(!0)}));return function(){return i.cancelIdleCallback(e)}}}),[u]),[d,u]};var a=t(7294),i=t(9311),o="undefined"!==typeof IntersectionObserver;var l=new Map},353:function(e,n,t){"use strict";t.r(n);var r=t(5893),a=t(1983);n.default=function(e){return(0,r.jsx)(a.Z,{title:"Portfolio",currentPage:"portfolio",description:"Portfolio items.",children:(0,r.jsx)("div",{})})}},6714:function(e){e.exports={"main-header-nav":"nav_main-header-nav__QbsNZ","main-header-nav-container":"nav_main-header-nav-container__f3aWf","main-header-link-conatiner":"nav_main-header-link-conatiner__Vc8ao","main-header-mobile-links":"nav_main-header-mobile-links__XXYJI","is-visible":"nav_is-visible__XtdfX","main-header-title":"nav_main-header-title__gVKJ_","main-header-links":"nav_main-header-links__zrQ1v",active:"nav_active__oTtOr"}},1849:function(e){e.exports={"nav-mobile-menu-button":"nav-mobile-menu-button_nav-mobile-menu-button__4EHmH","nav-mobile-menu-button-container":"nav-mobile-menu-button_nav-mobile-menu-button-container__5drSF"}},2208:function(e){e.exports={"default-paragraph":"typeographery_default-paragraph__1INoN","default-h1-title":"typeographery_default-h1-title__Ejl24","default-h2-title":"typeographery_default-h2-title__jG_A4","default-h3-title":"typeographery_default-h3-title__DZnVN","default-h4-title":"typeographery_default-h4-title__zwfGC","default-h5-title":"typeographery_default-h5-title__cMswS","default-h6-title":"typeographery_default-h6-title__OPlQB","default-text-center":"typeographery_default-text-center__2eLto"}},6798:function(e){e.exports={"main-footer":"footer_main-footer__8GXj7","main-footer-content":"footer_main-footer-content__sCsP0"}},5103:function(){},9008:function(e,n,t){e.exports=t(5443)},1664:function(e,n,t){e.exports=t(8418)}},function(e){e.O(0,[774,888,179],(function(){return n=3295,e(e.s=n);var n}));var n=e.O();_N_E=n}]);