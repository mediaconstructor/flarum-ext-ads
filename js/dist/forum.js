module.exports=function(e){var o={};function t(n){if(o[n])return o[n].exports;var a=o[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,t),a.l=!0,a.exports}return t.m=e,t.c=o,t.d=function(e,o,n){t.o(e,o)||Object.defineProperty(e,o,{enumerable:!0,get:n})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,o){if(1&o&&(e=t(e)),8&o)return e;if(4&o&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(t.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&o&&"string"!=typeof e)for(var a in e)t.d(n,a,function(o){return e[o]}.bind(null,a));return n},t.n=function(e){var o=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(o,"a",o),o},t.o=function(e,o){return Object.prototype.hasOwnProperty.call(e,o)},t.p="",t(t.s=16)}([,function(e,o){e.exports=flarum.core.compat["forum/app"]},function(e,o){e.exports=flarum.core.compat["common/extend"]},,function(e,o){e.exports=flarum.core.compat["forum/components/DiscussionPage"]},function(e,o){e.exports=flarum.core.compat["forum/components/IndexPage"]},function(e,o){e.exports=flarum.core.compat["forum/components/DiscussionHero"]},function(e,o){e.exports=flarum.core.compat["forum/components/DiscussionListPane"]},function(e,o){e.exports=flarum.core.compat["forum/components/PostStream"]},function(e,o){e.exports=flarum.core.compat["common/components/LoadingIndicator"]},function(e,o){e.exports=flarum.core.compat["common/helpers/listItems"]},,,,,,function(e,o,t){"use strict";t.r(o);var n=t(1),a=t.n(n),r=t(2),s=t(4),c=t.n(s),i=t(6),u=t.n(i),d=t(7),p=t.n(d),l=t(8),f=t.n(l),h=t(9),v=t.n(h),y=t(10),g=t.n(y);var b=t(5),w=t.n(b);a.a.initializers.add("davwheat/ads",(function(){var e,o,t=JSON.parse(a.a.data["davwheat-ads.enabled-ad-locations"]);t.includes("header")&&(e=a.a.data["davwheat-ads.ad-code.header"],o=m.trust(e),Object(r.override)(w.a.prototype,"hero",(function(e){return[m("div",{class:"davwheat-ad davwheat-ad-header"},o),e()]})),Object(r.extend)(w.a.prototype,["oncreate","onupdate"],(function(e){try{(adsbygoogle=window.adsbygoogle||[]).push({})}catch(e){}return e}))),t.includes("discussion_header")&&function(){var e=a.a.data["davwheat-ads.ad-code.discussion_header"],o=m.trust(e);Object(r.override)(c.a.prototype,"view",(function(e){var t=this.discussion;return m("div",{className:"DiscussionPage"},m(p.a,{state:a.a.discussions}),m("div",{className:"DiscussionPage-discussion"},t?[u.a.component({discussion:t}),m("div",{className:"container"},m("nav",{className:"DiscussionPage-nav"},m("ul",null,g()(this.sidebarItems().toArray()))),m("div",{className:"DiscussionPage-stream"},m("div",{class:"davwheat-ad davwheat-ad-discussion-header"},o),f.a.component({discussion:t,stream:this.stream,onPositionChange:this.positionChanged.bind(this)})))]:m(v.a,null)))})),Object(r.extend)(c.a.prototype,["oncreate","onupdate"],(function(e){try{(adsbygoogle=window.adsbygoogle||[]).push({})}catch(e){}return e}))}(),t.includes("footer")&&function(){var e=a.a.data["davwheat-ads.ad-code.footer"],o=document.createElement("footer");o.className="davwheat-ad davwheat-ad-footer",document.querySelector(".App-content").append(o),o.innerHTML=e;var t=history.pushState;function n(){try{(adsbygoogle=window.adsbygoogle||[]).push({})}catch(e){}}history.pushState=function(){for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];t.apply(history,r),o.innerHTML=e,n()},n()}()}))}]);
//# sourceMappingURL=forum.js.map