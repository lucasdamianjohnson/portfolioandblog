(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[371],{3295:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/portfolio",function(){return n(25269)}])},8188:function(e,t,n){"use strict";n.d(t,{Z:function(){return c}});var r=n(85893),o=n(91418);var i=n(41664),a=n(9528),l=n.n(a),c=function(e){e.onClick&&e.onClick;var t=function(){var t=l()["default-button"];return e.className?t=e.className:(e.size||(t+=" ".concat(l().large)),"small"==e.size&&(t+=" ".concat(l().small)),"medium"==e.size&&(t+=" ".concat(l().medium)),"large"==e.size&&(t+=" ".concat(l().large))),e.center&&(t+=" ".concat(l()["center-button"])),t};return function(n){var a=function(){};if(e.nav&&e.navLink){var c=function(e){var t="";return""===o.O&&(t="/portfolioandblog"),"/"==e[0]?"".concat(t,"/").concat(e):e}(e.navLink);a=function(){e.fancy?setTimeout((function(){window.location.href=c}),300):window.location.href=c}}return e.nav&&e.navLink&&!e.fancy?(0,r.jsx)(i.default,{href:e.navLink,children:(0,r.jsx)("a",{tabIndex:0,className:t(),children:n})}):e.fancy?(0,r.jsx)("div",{className:l()["fancy-button-container"],children:(0,r.jsx)("div",{className:l()["fancy-button-center"],children:(0,r.jsxs)("button",{onClick:function(){e.nav&&a(),e.onClick&&e.onClick()},className:l()["fancy-button"],children:[(0,r.jsxs)("svg",{width:"200px",height:"50px",viewBox:"0 0 200 50",className:l()["fancy-button-svg"],children:[(0,r.jsx)("polyline",{points:"199,1 199,49 1,49 1,1 199,1"}),(0,r.jsx)("polyline",{points:"199,1 199,49 1,49 1,1 199,1"})]}),n]})})}):(0,r.jsx)("button",{tabIndex:0,onClick:function(t){e.onClick&&e.onClick(t)},className:t(),children:n})}(e.children)}},25181:function(e,t,n){"use strict";var r=n(85893),o=n(77613),i=n.n(o),a=n(41664),l=n(42210),c=n(52097);t.Z=function(e){var t={src:""};return e.banner&&(t=e.banner),(0,r.jsx)(a.default,{href:e.link,children:(0,r.jsx)("a",{className:i()["blog-card-link"],tabIndex:0,children:(0,r.jsxs)("div",{className:i()["blog-card"],children:[t&&(0,r.jsx)("div",{className:i()["blog-card-image-container"],children:(0,r.jsx)(c.Z,{webP:!0,thumb:!0,className:i()["blog-card-image"],src:t.src,data:t})}),(0,r.jsxs)("div",{className:i()["blog-card-content"],children:[(0,r.jsx)(l.Z,{className:i()["blog-card-title"],varient:"h3",children:e.title}),e.subTitleElement&&e.subTitleElement,e.date&&(0,r.jsx)("span",{className:i()["blog-card-date"],children:e.date}),(0,r.jsx)(l.Z,{className:i()["blog-card-description"],varient:"p",children:e.description})]})]})})})}},48418:function(e,t,n){"use strict";function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],r=!0,o=!1,i=void 0;try{for(var a,l=e[Symbol.iterator]();!(r=(a=l.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(c){o=!0,i=c}finally{try{r||null==l.return||l.return()}finally{if(o)throw i}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}t.default=void 0;var o,i=(o=n(67294))&&o.__esModule?o:{default:o},a=n(76273),l=n(90387),c=n(57190);var s={};function u(e,t,n,r){if(e&&a.isLocalURL(t)){e.prefetch(t,n,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;s[t+"%"+n+(o?"%"+o:"")]=!0}}var f=function(e){var t,n=!1!==e.prefetch,o=l.useRouter(),f=i.default.useMemo((function(){var t=r(a.resolveHref(o,e.href,!0),2),n=t[0],i=t[1];return{href:n,as:e.as?a.resolveHref(o,e.as):i||n}}),[o,e.href,e.as]),d=f.href,p=f.as,v=e.children,b=e.replace,m=e.shallow,h=e.scroll,_=e.locale;"string"===typeof v&&(v=i.default.createElement("a",null,v));var g=(t=i.default.Children.only(v))&&"object"===typeof t&&t.ref,x=r(c.useIntersection({rootMargin:"200px"}),2),y=x[0],j=x[1],k=i.default.useCallback((function(e){y(e),g&&("function"===typeof g?g(e):"object"===typeof g&&(g.current=e))}),[g,y]);i.default.useEffect((function(){var e=j&&n&&a.isLocalURL(d),t="undefined"!==typeof _?_:o&&o.locale,r=s[d+"%"+p+(t?"%"+t:"")];e&&!r&&u(o,d,p,{locale:t})}),[p,d,j,_,n,o]);var w={ref:k,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,n,r,o,i,l,c){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&a.isLocalURL(n))&&(e.preventDefault(),null==l&&r.indexOf("#")>=0&&(l=!1),t[o?"replace":"push"](n,r,{shallow:i,locale:c,scroll:l}))}(e,o,d,p,b,m,h,_)},onMouseEnter:function(e){t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),a.isLocalURL(d)&&u(o,d,p,{priority:!0})}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var N="undefined"!==typeof _?_:o&&o.locale,E=o&&o.isLocaleDomain&&a.getDomainLocale(p,N,o&&o.locales,o&&o.domainLocales);w.href=E||a.addBasePath(a.addLocale(p,N,o&&o.defaultLocale))}return i.default.cloneElement(t,w)};t.default=f},57190:function(e,t,n){"use strict";function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],r=!0,o=!1,i=void 0;try{for(var a,l=e[Symbol.iterator]();!(r=(a=l.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(c){o=!0,i=c}finally{try{r||null==l.return||l.return()}finally{if(o)throw i}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!a,c=o.useRef(),s=r(o.useState(!1),2),u=s[0],f=s[1],d=o.useCallback((function(e){c.current&&(c.current(),c.current=void 0),n||u||e&&e.tagName&&(c.current=function(e,t,n){var r=function(e){var t=e.rootMargin||"",n=l.get(t);if(n)return n;var r=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return l.set(t,n={id:t,observer:o,elements:r}),n}(n),o=r.id,i=r.observer,a=r.elements;return a.set(e,t),i.observe(e),function(){a.delete(e),i.unobserve(e),0===a.size&&(i.disconnect(),l.delete(o))}}(e,(function(e){return e&&f(e)}),{rootMargin:t}))}),[n,t,u]);return o.useEffect((function(){if(!a&&!u){var e=i.requestIdleCallback((function(){return f(!0)}));return function(){return i.cancelIdleCallback(e)}}}),[u]),[d,u]};var o=n(67294),i=n(9311),a="undefined"!==typeof IntersectionObserver;var l=new Map},25269:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return b},default:function(){return m}});var r=n(85893),o=n(8188),i=n(25181),a=n(97306),l=n(42210),c=n(19950),s=n.n(c),u=function(e){return(0,r.jsx)("div",{className:e.className?e.className:s()["default-group-container"],children:e.children})},f=n(61782),d=n(67294),p=n(57010),v=n.n(p);var b=!0,m=function(e){console.log(e);var t=function(e){try{return JSON.parse(e.banner)}catch(t){return}};return(0,r.jsx)(f.Z,{title:"Portfolio",currentPage:"portfolio",description:"Portfolio items.",children:(0,r.jsxs)(d.Fragment,{children:[(0,r.jsx)(l.Z,{varient:"h1",center:!0,children:"Portfolio"}),(0,r.jsxs)(u,{children:[(0,r.jsx)(l.Z,{varient:"h3",children:"Web Development"}),(0,r.jsx)(o.Z,{size:"small",navLink:"/portfolio/webdev",nav:!0,children:"View All"})]}),(0,r.jsx)("div",{className:v()["portfolio-item-list"],children:e.data.webdev.map((function(e,n){var o=[];e.tech&&(o=e.tech.split(","));var l=t(e);return(0,r.jsx)("div",{className:v()["portfolio-item"],children:(0,r.jsx)(i.Z,{banner:l,subTitleElement:(0,r.jsx)(a.Z,{tech:o,small:!0}),title:e.title,link:"/portfolio/items/webdev/".concat(e.id),description:e.description},e.id)},n)}))}),(0,r.jsxs)(u,{children:[(0,r.jsx)(l.Z,{varient:"h3",children:"Applications & Packages"}),(0,r.jsx)(o.Z,{size:"small",navLink:"/portfolio/apps",nav:!0,children:"View All"})]}),(0,r.jsx)("div",{className:v()["portfolio-item-list"],children:e.data.apps.map((function(e,n){var o=[];e.tech&&(o=e.tech.split(","));var l=t(e);return(0,r.jsx)("div",{className:v()["portfolio-item"],children:(0,r.jsx)(i.Z,{banner:l,subTitleElement:(0,r.jsx)(a.Z,{tech:o,small:!0}),title:e.title,link:"/portfolio/items/apps/".concat(e.id),description:e.description},e.id)},n)}))}),(0,r.jsxs)(u,{children:[(0,r.jsx)(l.Z,{varient:"h3",children:"Video Games"}),(0,r.jsx)(o.Z,{size:"small",navLink:"/portfolio/videogames",nav:!0,children:"View All"})]}),(0,r.jsx)("div",{className:v()["portfolio-item-list"],children:e.data.videogames.map((function(e,n){var o=[];e.tech&&(o=e.tech.split(","));var l=t(e);return(0,r.jsx)("div",{className:v()["portfolio-item"],children:(0,r.jsx)(i.Z,{banner:l,subTitleElement:(0,r.jsx)(a.Z,{tech:o,small:!0}),title:e.title,link:"/portfolio/items/videogames/".concat(e.id),description:e.description},e.id)},n)}))})]})})}},9528:function(e){e.exports={"default-button":"button_default-button__TxrXZ","center-button":"button_center-button__FJ6O_",small:"button_small__DneY7",medium:"button_medium__6cxRk",large:"button_large__1gnXk","fancy-button-container":"button_fancy-button-container__rL1e2","fancy-button-center":"button_fancy-button-center__zPH_C","fancy-button":"button_fancy-button__7uhEl","fancy-button-svg":"button_fancy-button-svg__3sddK",transformStroke:"button_transformStroke__sQaIw"}},77613:function(e){e.exports={"blog-card-link":"blog_blog-card-link__DNpTQ","blog-card-image-container":"blog_blog-card-image-container__t6hi6","blog-card-image":"blog_blog-card-image__ZD27l","blog-card":"blog_blog-card__MNkrW","blog-card-content":"blog_blog-card-content__p5SW0","blog-card-title":"blog_blog-card-title__759Rv","blog-card-description":"blog_blog-card-description__8Vbw9","blog-card-date":"blog_blog-card-date__HgYwY"}},19950:function(e){e.exports={"default-group-container":"group_default-group-container__s0gR6"}},57010:function(e){e.exports={"portfolio-item":"portfolio_portfolio-item__nI2w5","portfolio-item-list":"portfolio_portfolio-item-list__i1Z6X","portfolio-items":"portfolio_portfolio-items__zx1wD"}},9008:function(e,t,n){e.exports=n(5443)},41664:function(e,t,n){e.exports=n(48418)}},function(e){e.O(0,[506,370,774,888,179],(function(){return t=3295,e(e.s=t);var t}));var t=e.O();_N_E=t}]);