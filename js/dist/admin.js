module.exports=function(t){var e={};function r(n){if(e[n])return e[n].exports;var a=e[n]={i:n,l:!1,exports:{}};return t[n].call(a.exports,a,a.exports,r),a.l=!0,a.exports}return r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)r.d(n,a,function(e){return t[e]}.bind(null,a));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=24)}([,function(t,e){t.exports=flarum.core.compat["admin/app"]},,,,,,function(t,e){t.exports=flarum.core.compat["common/utils/extractText"]},function(t,e,r){t.exports=r(23)},function(t,e){t.exports=flarum.core.compat["common/components/Button"]},function(t,e){t.exports=flarum.core.compat["common/components/Switch"]},,,,,,,,,,,function(t,e){t.exports=flarum.core.compat["admin/components/ExtensionPage"]},function(t,e){t.exports=flarum.core.compat["admin/utils/saveSettings"]},function(t,e,r){var n=function(t){"use strict";var e=Object.prototype,r=e.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},a=n.iterator||"@@iterator",o=n.asyncIterator||"@@asyncIterator",i=n.toStringTag||"@@toStringTag";function s(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(t){s=function(t,e,r){return t[e]=r}}function c(t,e,r,n){var a=e&&e.prototype instanceof d?e:d,o=Object.create(a.prototype),i=new L(n||[]);return o._invoke=function(t,e,r){var n="suspendedStart";return function(a,o){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===a)throw o;return E()}for(r.method=a,r.arg=o;;){var i=r.delegate;if(i){var s=w(i,r);if(s){if(s===l)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var c=u(t,e,r);if("normal"===c.type){if(n=r.done?"completed":"suspendedYield",c.arg===l)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n="completed",r.method="throw",r.arg=c.arg)}}}(t,r,i),o}function u(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=c;var l={};function d(){}function h(){}function f(){}var p={};s(p,a,(function(){return this}));var v=Object.getPrototypeOf,m=v&&v(v(j([])));m&&m!==e&&r.call(m,a)&&(p=m);var y=f.prototype=d.prototype=Object.create(p);function g(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function b(t,e){var n;this._invoke=function(a,o){function i(){return new e((function(n,i){!function n(a,o,i,s){var c=u(t[a],t,o);if("throw"!==c.type){var l=c.arg,d=l.value;return d&&"object"==typeof d&&r.call(d,"__await")?e.resolve(d.__await).then((function(t){n("next",t,i,s)}),(function(t){n("throw",t,i,s)})):e.resolve(d).then((function(t){l.value=t,i(l)}),(function(t){return n("throw",t,i,s)}))}s(c.arg)}(a,o,n,i)}))}return n=n?n.then(i,i):i()}}function w(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,w(t,e),"throw"===e.method))return l;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return l}var n=u(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,l;var a=n.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,l):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,l)}function _(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function x(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function L(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(_,this),this.reset(!0)}function j(t){if(t){var e=t[a];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:E}}function E(){return{value:void 0,done:!0}}return h.prototype=f,s(y,"constructor",f),s(f,"constructor",h),h.displayName=s(f,i,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===h||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,f):(t.__proto__=f,s(t,i,"GeneratorFunction")),t.prototype=Object.create(y),t},t.awrap=function(t){return{__await:t}},g(b.prototype),s(b.prototype,o,(function(){return this})),t.AsyncIterator=b,t.async=function(e,r,n,a,o){void 0===o&&(o=Promise);var i=new b(c(e,r,n,a),o);return t.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},g(y),s(y,i,"Generator"),s(y,a,(function(){return this})),s(y,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=j,L.prototype={constructor:L,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(x),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return i.type="throw",i.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],i=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var s=r.call(o,"catchLoc"),c=r.call(o,"finallyLoc");if(s&&c){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(s){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n];if(a.tryLoc<=this.prev&&r.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,l):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),l},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),x(r),l}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var a=n.arg;x(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:j(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),l}},t}(t.exports);try{regeneratorRuntime=n}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=n:Function("r","regeneratorRuntime = r")(n)}},function(t,e,r){"use strict";r.r(e);var n=r(1),a=r.n(n);function o(){return(o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t}).apply(this,arguments)}function i(t,e,r,n,a,o,i){try{var s=t[o](i),c=s.value}catch(t){return void r(t)}s.done?e(c):Promise.resolve(c).then(n,a)}function s(t,e){return(s=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var c=r(8),u=r.n(c),l=r(21),d=r.n(l),h=r(9),f=r.n(h),p=r(10),v=r.n(p),y=r(22),g=r.n(y),b=r(7),w=r.n(b),_=["header","sidebar","between_posts","footer","discussion_header","discussion_sidebar"],x=function(t,e){return a.a.translator.trans("davwheat.ads.admin.settings."+t,e)},L=function(t){var e,r;function n(){for(var e,r=arguments.length,n=new Array(r),a=0;a<r;a++)n[a]=arguments[a];return(e=t.call.apply(t,[this].concat(n))||this).state={enabledLocations:[],script_urls:[],code:{header:"",footer:"",sidebar:"",between_posts:"",discussion_header:"",discussion_sidebar:"","header.js":"","footer.js":"","sidebar.js":"","between_posts.js":"","discussion_header.js":"","discussion_sidebar.js":""},enableAdAfterPlaceholder:!1,betweenNPosts:0,pubId:"",isDirty:!1,loading:!1},e.loading=void 0,e}r=t,(e=n).prototype=Object.create(r.prototype),e.prototype.constructor=e,s(e,r);var c=n.prototype;return c.oninit=function(e){var r=this;t.prototype.oninit.call(this,e),this.state.enabledLocations=JSON.parse(a.a.data.settings["davwheat-ads.enabled-ad-locations"]||"[]"),_.forEach((function(t){r.state.code[t]=a.a.data.settings["davwheat-ads.ad-code."+t]||"",r.state.code[t+".js"]=a.a.data.settings["davwheat-ads.ad-code."+t+".js"]||""})),this.state.pubId=a.a.data.settings["davwheat-ads.ca-pub-id"]||"",this.state.betweenNPosts=parseInt(a.a.data.settings["davwheat-ads.between-n-posts"]),this.state.enableAdAfterPlaceholder="1"===a.a.data.settings["davwheat-ads.enable-ad-after-placeholder"],this.state.script_urls=JSON.parse(a.a.data.settings["davwheat-ads.custom_ad_script_urls"]||"[]")},c.content=function(){var t=this;return m("div",{class:"content"},m("fieldset",{class:"Form-group"},m("label",null,x("pub_id"),m("input",{class:"FormControl",placeholder:"ca-pub-XXXXXXXXXX",type:"text",value:this.state.pubId,disabled:this.state.loading,oninput:function(e){t.state.isDirty=!0,t.state.pubId=e.currentTarget.value}}))),m("fieldset",{class:"Form-group"},m("label",null,x("script_urls")),this.state.script_urls.map((function(e,r){return m("input",{key:r,class:"FormControl",placeholder:"https://example.com/script.js",type:"text",value:e,disabled:t.state.loading,oninput:function(e){t.state.isDirty=!0,t.state.script_urls[r]=e.currentTarget.value}})})),m("p",null,x("script_deletion")),m(f.a,{class:"Button",onclick:function(){t.state.script_urls.push("")}},x("add_script"))),m("fieldset",{class:"Form-group"},m("legend",null,x("enabled_locations")),_.map((function(e){return m(v.a,{key:e,state:t.isLocationEnabled(e),onchange:function(r){var n=new Set(t.state.enabledLocations);r?n.add(e):n.delete(e),t.state.enabledLocations=Array.from(n),t.state.isDirty=!0},disabled:t.state.loading},a.a.translator.trans("davwheat.ads.lib.locations."+e))}))),m("fieldset",{class:"Form-group"},m("label",null,x("between_posts_gap"),m("input",{class:"FormControl",type:"number",min:"1",max:"25",value:this.state.betweenNPosts,disabled:this.state.loading||!this.isLocationEnabled("between_posts"),oninput:function(e){var r=parseInt(e.currentTarget.value);t.state.isDirty=!0,t.state.betweenNPosts=r}})),m(v.a,{state:this.state.enableAdAfterPlaceholder,onchange:function(e){t.state.isDirty=!0,t.state.enableAdAfterPlaceholder=e},loading:this.state.loading,disabled:this.state.loading||!this.isLocationEnabled("between_posts")},x("allow_after_placeholder"))),m("aside",{class:"davwheat-ads-notice"},x("warning",{script:m("code",null,"<script>")})),m("fieldset",{class:"Form-group"},_.map((function(e){return m("fieldset",null,m("legend",null,a.a.translator.trans("davwheat.ads.lib.locations."+e)),m("div",{class:"davwheat-ads__code-boxes"},m("label",null,x("code_input"),m("textarea",{disabled:t.state.loading||!t.isLocationEnabled(e),class:"FormControl",value:t.isLocationEnabled(e)?t.state.code[e]:x("code_input_disabled"),oninput:function(r){t.state.isDirty=!0;var n=r.currentTarget.value;t.state.code[e]=n}})),m("label",null,x("js_input"),m("textarea",{disabled:t.state.loading||!t.isLocationEnabled(e),class:"FormControl",value:t.isLocationEnabled(e)?t.state.code[e+".js"]:x("js_input_disabled"),oninput:function(r){t.state.isDirty=!0;var n=r.currentTarget.value;t.state.code[e+".js"]=n}}))))}))),m(f.a,{onclick:this.saveSettings.bind(this),class:"Button Button--primary",disabled:!this.state.isDirty,loading:this.state.loading},this.getButtonText()))},c.isLocationEnabled=function(t){return this.state.enabledLocations.includes(t)},c.getButtonText=function(){return this.state.loading?w()(x("save_btn.saving")):this.state.isDirty?w()(x("save_btn.dirty")):w()(x("save_btn.saved"))},c.makeDirty=function(){this.state.isDirty=!0},c.saveSettings=function(){var t,e=(t=u.a.mark((function t(e){var r=this;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.preventDefault(),a.a.alerts.clear(),this.state.loading=!0,!Object.keys(this.state.code).some((function(t){return!!r.state.code[t].includes("<script")}))){t.next=8;break}return a.a.alerts.show({type:"error"},x("alert.code_has_script")),this.state.loading=!1,t.abrupt("return",!1);case 8:return t.next=10,g()(o({"davwheat-ads.enabled-ad-locations":JSON.stringify(this.state.enabledLocations),"davwheat-ads.ca-pub-id":this.state.pubId,"davwheat-ads.custom-ad-script-urls":JSON.stringify(this.state.script_urls.filter((function(t){return t.length>0}))),"davwheat-ads.between-n-posts":this.state.betweenNPosts,"davwheat-ads.enable-ad-after-placeholder":this.state.enableAdAfterPlaceholder?1:0},Object.keys(this.state.code).reduce((function(t,e){var n;return o({},t,((n={})["davwheat-ads.ad-code."+e]=r.state.code[e],n))}),{})));case 10:return this.onSettingsSaved(),t.abrupt("return",!0);case 12:case"end":return t.stop()}}),t,this)})),function(){var e=this,r=arguments;return new Promise((function(n,a){var o=t.apply(e,r);function s(t){i(o,n,a,s,c,"next",t)}function c(t){i(o,n,a,s,c,"throw",t)}s(void 0)}))});return function(t){return e.apply(this,arguments)}}(),c.onSettingsSaved=function(){this.state.loading=!1,this.state.isDirty=!1,a.a.alerts.show({type:"success"},a.a.translator.trans("core.admin.settings.saved_message"))},n}(d.a);a.a.initializers.add("davwheat/ads",(function(){a.a.extensionData.for("davwheat-ads").registerPage(L)}))}]);
//# sourceMappingURL=admin.js.map