module.exports=function(_){var e={};function a(r){if(e[r])return e[r].exports;var t=e[r]={i:r,l:!1,exports:{}};return _[r].call(t.exports,t,t.exports,a),t.l=!0,t.exports}return a.m=_,a.c=e,a.d=function(_,e,r){a.o(_,e)||Object.defineProperty(_,e,{enumerable:!0,get:r})},a.r=function(_){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(_,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(_,"__esModule",{value:!0})},a.t=function(_,e){if(1&e&&(_=a(_)),8&e)return _;if(4&e&&"object"==typeof _&&_&&_.__esModule)return _;var r=Object.create(null);if(a.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:_}),2&e&&"string"!=typeof _)for(var t in _)a.d(r,t,function(e){return _[e]}.bind(null,t));return r},a.n=function(_){var e=_&&_.__esModule?function(){return _.default}:function(){return _};return a.d(e,"a",e),e},a.o=function(_,e){return Object.prototype.hasOwnProperty.call(_,e)},a.p="",a(a.s=25)}([function(_,e){_.exports=flarum.core.compat["forum/app"]},,function(_,e){_.exports=flarum.core.compat["common/extend"]},function(_,e,a){"use strict";function r(){var _=0;try{_++,(adsbygoogle=window.adsbygoogle||[]).push({})}catch(e){_<10&&setTimeout(r,1e3)}}a.d(e,"a",(function(){return r}))},function(_,e){_.exports=flarum.core.compat["forum/components/DiscussionPage"]},function(_,e){_.exports=flarum.core.compat["forum/components/IndexPage"]},function(_,e){_.exports=flarum.core.compat["forum/components/PostStream"]},,,,,function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return InsertBetweenPostsAds}));var flarum_forum_app__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(flarum_forum_app__WEBPACK_IMPORTED_MODULE_0__),flarum_common_extend__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(2),flarum_common_extend__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(flarum_common_extend__WEBPACK_IMPORTED_MODULE_1__),_RefreshAds__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(3),flarum_forum_components_PostStream__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(6),flarum_forum_components_PostStream__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(flarum_forum_components_PostStream__WEBPACK_IMPORTED_MODULE_3__);function InsertBetweenPostsAds(){var AdCode=flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default.a.data["davwheat-ads.ad-code.between_posts"],Script=flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default.a.data["davwheat-ads.ad-code.between_posts.js"],Html=m.trust(AdCode);Object(flarum_common_extend__WEBPACK_IMPORTED_MODULE_1__.override)(flarum_forum_components_PostStream__WEBPACK_IMPORTED_MODULE_3___default.a.prototype,"view",(function(_){var e=_().children,a=e.reduce((function(_,a,r){var t=[].concat(_,[a]);return r+1<e.length&&r%(parseInt(flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default.a.data["davwheat-ads.between-n-posts"])||15)==0&&t.push(m("aside",{key:"davwheat-ad-"+r,class:"PostStream-item"},m("div",{class:"davwheat-ad davwheat-ad-between-posts"},Html))),t}),[]);return"1"===flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default.a.data["davwheat-ads.enable-ad-after-placeholder"]&&a.push(m("aside",{key:"davwheat-ad-after-placeholder",class:"PostStream-item"},m("div",{class:"davwheat-ad davwheat-ad-between-posts davwheat-ad-between-posts--after-placeholder"},Html))),m("div",{className:"PostStream"},a)})),Object(flarum_common_extend__WEBPACK_IMPORTED_MODULE_1__.extend)(flarum_forum_components_PostStream__WEBPACK_IMPORTED_MODULE_3___default.a.prototype,["onupdate","oncreate"],(function(originalReturnVal){return Object(_RefreshAds__WEBPACK_IMPORTED_MODULE_2__.a)(),eval(Script),originalReturnVal}))}},function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return InsertDiscussionPageHeaderAd}));var flarum_forum_app__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(flarum_forum_app__WEBPACK_IMPORTED_MODULE_0__),flarum_common_extend__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(2),flarum_common_extend__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(flarum_common_extend__WEBPACK_IMPORTED_MODULE_1__),flarum_forum_components_DiscussionPage__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(4),flarum_forum_components_DiscussionPage__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(flarum_forum_components_DiscussionPage__WEBPACK_IMPORTED_MODULE_2__),flarum_forum_components_DiscussionHero__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(13),flarum_forum_components_DiscussionHero__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(flarum_forum_components_DiscussionHero__WEBPACK_IMPORTED_MODULE_3__),flarum_forum_components_DiscussionListPane__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(14),flarum_forum_components_DiscussionListPane__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(flarum_forum_components_DiscussionListPane__WEBPACK_IMPORTED_MODULE_4__),flarum_forum_components_PostStream__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(6),flarum_forum_components_PostStream__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(flarum_forum_components_PostStream__WEBPACK_IMPORTED_MODULE_5__),flarum_common_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(15),flarum_common_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_6___default=__webpack_require__.n(flarum_common_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_6__),flarum_common_helpers_listItems__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(16),flarum_common_helpers_listItems__WEBPACK_IMPORTED_MODULE_7___default=__webpack_require__.n(flarum_common_helpers_listItems__WEBPACK_IMPORTED_MODULE_7__),_RefreshAds__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(3);function InsertDiscussionPageHeaderAd(){var AdCode=flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default.a.data["davwheat-ads.ad-code.discussion_header"],Script=flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default.a.data["davwheat-ads.ad-code.discussion_header.js"],Html=m.trust(AdCode);Object(flarum_common_extend__WEBPACK_IMPORTED_MODULE_1__.override)(flarum_forum_components_DiscussionPage__WEBPACK_IMPORTED_MODULE_2___default.a.prototype,"view",(function(_){var e=this.discussion;return m("div",{className:"DiscussionPage"},m(flarum_forum_components_DiscussionListPane__WEBPACK_IMPORTED_MODULE_4___default.a,{state:flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default.a.discussions}),m("div",{className:"DiscussionPage-discussion"},e?[flarum_forum_components_DiscussionHero__WEBPACK_IMPORTED_MODULE_3___default.a.component({discussion:e}),m("div",{className:"container"},m("nav",{className:"DiscussionPage-nav"},m("ul",null,flarum_common_helpers_listItems__WEBPACK_IMPORTED_MODULE_7___default()(this.sidebarItems().toArray()))),m("div",{className:"DiscussionPage-stream"},m("div",{class:"davwheat-ad davwheat-ad-discussion-header",align:"center"},Html),flarum_forum_components_PostStream__WEBPACK_IMPORTED_MODULE_5___default.a.component({discussion:e,stream:this.stream,onPositionChange:this.positionChanged.bind(this)})))]:m(flarum_common_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_6___default.a,null)))})),Object(flarum_common_extend__WEBPACK_IMPORTED_MODULE_1__.extend)(flarum_forum_components_DiscussionPage__WEBPACK_IMPORTED_MODULE_2___default.a.prototype,["oncreate","onupdate"],(function(returned){return Object(_RefreshAds__WEBPACK_IMPORTED_MODULE_8__.a)(),eval(Script),returned}))}},function(_,e){_.exports=flarum.core.compat["forum/components/DiscussionHero"]},function(_,e){_.exports=flarum.core.compat["forum/components/DiscussionListPane"]},function(_,e){_.exports=flarum.core.compat["common/components/LoadingIndicator"]},function(_,e){_.exports=flarum.core.compat["common/helpers/listItems"]},function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return InsertDiscussionSidebarAd}));var flarum_forum_app__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(flarum_forum_app__WEBPACK_IMPORTED_MODULE_0__),flarum_common_extend__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(2),flarum_common_extend__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(flarum_common_extend__WEBPACK_IMPORTED_MODULE_1__),_RefreshAds__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(3),flarum_forum_components_DiscussionPage__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(4),flarum_forum_components_DiscussionPage__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(flarum_forum_components_DiscussionPage__WEBPACK_IMPORTED_MODULE_3__);function InsertDiscussionSidebarAd(){var root=document.querySelector(":root"),AdCode=flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default.a.data["davwheat-ads.ad-code.discussion_sidebar"],Script=flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default.a.data["davwheat-ads.ad-code.discussion_sidebar.js"],Html=m.trust(AdCode);root.style.setProperty("--davwheat-ads--discussion-sidebar-position","36px"),Object(flarum_common_extend__WEBPACK_IMPORTED_MODULE_1__.extend)(flarum_forum_components_DiscussionPage__WEBPACK_IMPORTED_MODULE_3___default.a.prototype,"sidebarItems",(function(_){return["desktop-hd","desktop","tablet"].includes(getComputedStyle(root).getPropertyValue("--flarum-screen"))&&_.add("davwheat-ads",m("div",{class:"davwheat-ad davwheat-ad-discussion-sidebar"},Html),1e3),_})),Object(flarum_common_extend__WEBPACK_IMPORTED_MODULE_1__.extend)(flarum_forum_components_DiscussionPage__WEBPACK_IMPORTED_MODULE_3___default.a.prototype,["oncreate","onupdate"],(function(returned){return Object(_RefreshAds__WEBPACK_IMPORTED_MODULE_2__.a)(),eval(Script),returned}))}},function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return InsertFooterAd}));var flarum_forum_app__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(flarum_forum_app__WEBPACK_IMPORTED_MODULE_0__),_RefreshAds__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(3);function InsertFooterAd(){var AdCode=flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default.a.data["davwheat-ads.ad-code.footer"],Script=flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default.a.data["davwheat-ads.ad-code.footer.js"],footer=document.createElement("footer");footer.className="davwheat-ad davwheat-ad-footer",footer.setAttribute("align","center"),document.querySelector(".App-content").append(footer),footer.innerHTML=AdCode;var pushState=history.pushState;history.pushState=function(){for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++)args[_key]=arguments[_key];pushState.apply(history,args),footer.innerHTML=AdCode,Object(_RefreshAds__WEBPACK_IMPORTED_MODULE_1__.a)(),eval(Script)},Object(_RefreshAds__WEBPACK_IMPORTED_MODULE_1__.a)()}},function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return InsertHeaderAd}));var flarum_forum_app__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(flarum_forum_app__WEBPACK_IMPORTED_MODULE_0__),flarum_common_extend__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(2),flarum_common_extend__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(flarum_common_extend__WEBPACK_IMPORTED_MODULE_1__),flarum_forum_components_IndexPage__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(5),flarum_forum_components_IndexPage__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(flarum_forum_components_IndexPage__WEBPACK_IMPORTED_MODULE_2__),_RefreshAds__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(3);function InsertHeaderAd(){var AdCode=flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default.a.data["davwheat-ads.ad-code.header"],Script=flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default.a.data["davwheat-ads.ad-code.header.js"],Html=m.trust(AdCode);Object(flarum_common_extend__WEBPACK_IMPORTED_MODULE_1__.override)(flarum_forum_components_IndexPage__WEBPACK_IMPORTED_MODULE_2___default.a.prototype,"hero",(function(_){return[_(),m("div",{align:"center",class:"davwheat-ad davwheat-ad-header"},Html)]})),Object(flarum_common_extend__WEBPACK_IMPORTED_MODULE_1__.extend)(flarum_forum_components_IndexPage__WEBPACK_IMPORTED_MODULE_2___default.a.prototype,["oncreate","onupdate"],(function(returned){return Object(_RefreshAds__WEBPACK_IMPORTED_MODULE_3__.a)(),eval(Script),returned}))}},function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return InsertSidebarAd}));var flarum_forum_app__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(flarum_forum_app__WEBPACK_IMPORTED_MODULE_0__),flarum_common_extend__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(2),flarum_common_extend__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(flarum_common_extend__WEBPACK_IMPORTED_MODULE_1__),flarum_forum_components_IndexPage__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(5),flarum_forum_components_IndexPage__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(flarum_forum_components_IndexPage__WEBPACK_IMPORTED_MODULE_2__),_RefreshAds__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(3);function InsertSidebarAd(){var root=document.querySelector(":root"),AdCode=flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default.a.data["davwheat-ads.ad-code.sidebar"],Script=flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default.a.data["davwheat-ads.ad-code.sidebar.js"],Html=m.trust(AdCode);Object(flarum_common_extend__WEBPACK_IMPORTED_MODULE_1__.extend)(flarum_forum_components_IndexPage__WEBPACK_IMPORTED_MODULE_2___default.a.prototype,"sidebarItems",(function(_){return["desktop-hd","desktop","tablet"].includes(getComputedStyle(root).getPropertyValue("--flarum-screen"))&&_.add("davwheat-ads",m("div",{class:"davwheat-ad davwheat-ad-sidebar"},Html),-1e3),_})),Object(flarum_common_extend__WEBPACK_IMPORTED_MODULE_1__.extend)(flarum_forum_components_IndexPage__WEBPACK_IMPORTED_MODULE_2___default.a.prototype,["oncreate","onupdate"],(function(returned){return Object(_RefreshAds__WEBPACK_IMPORTED_MODULE_3__.a)(),eval(Script),returned}))}},,,,,function(_,e,a){"use strict";a.r(e);var r=a(0),t=a.n(r),o=a(11),n=a(12),u=a(17),s=a(18),m=a(19),d=a(20);t.a.initializers.add("davwheat/ads",(function(){var _=JSON.parse(t.a.data["davwheat-ads.enabled-ad-locations"]);_.includes("header")&&Object(m.a)(),_.includes("discussion_header")&&Object(n.a)(),_.includes("footer")&&Object(s.a)(),_.includes("between_posts")&&Object(o.a)(),_.includes("sidebar")&&Object(d.a)(),_.includes("discussion_sidebar")&&Object(u.a)()}))}]);
//# sourceMappingURL=forum.js.map