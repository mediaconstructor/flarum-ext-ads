(()=>{var t={195:(t,e,r)=>{t.exports=r(236)},236:t=>{var e=function(t){"use strict";var e,r=Object.prototype,n=r.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",s=o.asyncIterator||"@@asyncIterator",i=o.toStringTag||"@@toStringTag";function c(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(t){c=function(t,e,r){return t[e]=r}}function u(t,e,r,n){var o=e&&e.prototype instanceof v?e:v,a=Object.create(o.prototype),s=new S(n||[]);return a._invoke=function(t,e,r){var n=d;return function(o,a){if(n===p)throw new Error("Generator is already running");if(n===f){if("throw"===o)throw a;return A()}for(r.method=o,r.arg=a;;){var s=r.delegate;if(s){var i=E(s,r);if(i){if(i===m)continue;return i}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===d)throw n=f,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=p;var c=l(t,e,r);if("normal"===c.type){if(n=r.done?f:h,c.arg===m)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n=f,r.method="throw",r.arg=c.arg)}}}(t,r,s),a}function l(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=u;var d="suspendedStart",h="suspendedYield",p="executing",f="completed",m={};function v(){}function g(){}function y(){}var b={};c(b,a,(function(){return this}));var w=Object.getPrototypeOf,_=w&&w(w(k([])));_&&_!==r&&n.call(_,a)&&(b=_);var x=y.prototype=v.prototype=Object.create(b);function L(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function j(t,e){function r(o,a,s,i){var c=l(t[o],t,a);if("throw"!==c.type){var u=c.arg,d=u.value;return d&&"object"==typeof d&&n.call(d,"__await")?e.resolve(d.__await).then((function(t){r("next",t,s,i)}),(function(t){r("throw",t,s,i)})):e.resolve(d).then((function(t){u.value=t,s(u)}),(function(t){return r("throw",t,s,i)}))}i(c.arg)}var o;this._invoke=function(t,n){function a(){return new e((function(e,o){r(t,n,e,o)}))}return o=o?o.then(a,a):a()}}function E(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator.return&&(r.method="return",r.arg=e,E(t,r),"throw"===r.method))return m;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return m}var o=l(n,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,m;var a=o.arg;return a?a.done?(r[t.resultName]=a.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,m):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,m)}function O(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function P(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function S(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(O,this),this.reset(!0)}function k(t){if(t){var r=t[a];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,s=function r(){for(;++o<t.length;)if(n.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return s.next=s}}return{next:A}}function A(){return{value:e,done:!0}}return g.prototype=y,c(x,"constructor",y),c(y,"constructor",g),g.displayName=c(y,i,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===g||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,y):(t.__proto__=y,c(t,i,"GeneratorFunction")),t.prototype=Object.create(x),t},t.awrap=function(t){return{__await:t}},L(j.prototype),c(j.prototype,s,(function(){return this})),t.AsyncIterator=j,t.async=function(e,r,n,o,a){void 0===a&&(a=Promise);var s=new j(u(e,r,n,o),a);return t.isGeneratorFunction(r)?s:s.next().then((function(t){return t.done?t.value:s.next()}))},L(x),c(x,i,"Generator"),c(x,a,(function(){return this})),c(x,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=k,S.prototype={constructor:S,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(P),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function o(n,o){return i.type="throw",i.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var s=this.tryEntries[a],i=s.completion;if("root"===s.tryLoc)return o("end");if(s.tryLoc<=this.prev){var c=n.call(s,"catchLoc"),u=n.call(s,"finallyLoc");if(c&&u){if(this.prev<s.catchLoc)return o(s.catchLoc,!0);if(this.prev<s.finallyLoc)return o(s.finallyLoc)}else if(c){if(this.prev<s.catchLoc)return o(s.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<s.finallyLoc)return o(s.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var s=a?a.completion:{};return s.type=t,s.arg=e,a?(this.method="next",this.next=a.finallyLoc,m):this.complete(s)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),m},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),P(r),m}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;P(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:k(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),m}},t}(t.exports);try{regeneratorRuntime=e}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=e:Function("r","regeneratorRuntime = r")(e)}}},e={};function r(n){var o=e[n];if(void 0!==o)return o.exports;var a=e[n]={exports:{}};return t[n](a,a.exports,r),a.exports}r.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return r.d(e,{a:e}),e},r.d=(t,e)=>{for(var n in e)r.o(e,n)&&!r.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},r.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),r.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})};var n={};(()=>{"use strict";r.r(n);const t=flarum.core.compat["admin/app"];var e=r.n(t);function o(){return o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},o.apply(this,arguments)}function a(t,e,r,n,o,a,s){try{var i=t[a](s),c=i.value}catch(t){return void r(t)}i.done?e(c):Promise.resolve(c).then(n,o)}function s(t,e){return s=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},s(t,e)}var i=r(195),c=r.n(i);const u=flarum.core.compat["admin/components/ExtensionPage"];var l=r.n(u);const d=flarum.core.compat["common/components/Button"];var h=r.n(d);const p=flarum.core.compat["common/components/Switch"];var f=r.n(p);const v=flarum.core.compat["admin/utils/saveSettings"];var g=r.n(v);const y=flarum.core.compat["common/utils/extractText"];var b=r.n(y),w=["header","sidebar","between_posts","footer","discussion_header","discussion_sidebar"],_=function(t,r){return e().translator.trans("mediaconstructor.ads.admin.settings."+t,r)},x=function(t){var r,n;function i(){for(var e,r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(e=t.call.apply(t,[this].concat(n))||this).state={enabledLocations:[],script_urls:[],code:{header:"",footer:"",sidebar:"",between_posts:"",discussion_header:"",discussion_sidebar:"","header.js":"","footer.js":"","sidebar.js":"","between_posts.js":"","discussion_header.js":"","discussion_sidebar.js":""},enableAdAfterPlaceholder:!1,betweenNPosts:0,pubId:"",isDirty:!1,loading:!1},e.loading=void 0,e}n=t,(r=i).prototype=Object.create(n.prototype),r.prototype.constructor=r,s(r,n);var u=i.prototype;return u.oninit=function(r){var n=this;t.prototype.oninit.call(this,r),this.state.enabledLocations=JSON.parse(e().data.settings["mediaconstructor-ads.enabled-ad-locations"]||"[]"),w.forEach((function(t){n.state.code[t]=e().data.settings["mediaconstructor-ads.ad-code."+t]||"",n.state.code[t+".js"]=e().data.settings["mediaconstructor-ads.ad-code."+t+".js"]||""})),this.state.pubId=e().data.settings["mediaconstructor-ads.ca-pub-id"]||"",this.state.betweenNPosts=parseInt(e().data.settings["mediaconstructor-ads.between-n-posts"]),this.state.enableAdAfterPlaceholder="1"===e().data.settings["mediaconstructor-ads.enable-ad-after-placeholder"],this.state.script_urls=JSON.parse(e().data.settings["mediaconstructor-ads.custom_ad_script_urls"]||"[]")},u.content=function(){var t=this;return m("div",{class:"container"},m("h1",null,("manager_headline",e().translator.trans("mediaconstructor.ads.admin.manager.manager_headline",undefined))),m("div",{class:"content"}),m("h1",null,_("settings_headline")),m("div",{class:"content"},m("p",{style:"margin-top: 24px; font-weight: bold; color: red; margin-bottom: 32px;"},_("admin_bypass_warning")),m("fieldset",{class:"Form-group"},m("label",null,_("pub_id"),m("input",{class:"FormControl",placeholder:"ca-pub-XXXXXXXXXX",type:"text",value:this.state.pubId,disabled:this.state.loading,oninput:function(e){t.state.isDirty=!0,t.state.pubId=e.currentTarget.value}}))),m("fieldset",{class:"Form-group"},m("label",null,_("script_urls")),this.state.script_urls.map((function(e,r){return m("input",{key:r,class:"FormControl",placeholder:"https://example.com/script.js",type:"text",value:e,disabled:t.state.loading,oninput:function(e){t.state.isDirty=!0,t.state.script_urls[r]=e.currentTarget.value}})})),m("p",null,_("script_deletion")),m(h(),{class:"Button",onclick:function(){t.state.script_urls.push("")}},_("add_script"))),m("fieldset",{class:"Form-group"},m("legend",null,_("enabled_locations")),w.map((function(r){return m(f(),{key:r,state:t.isLocationEnabled(r),onchange:function(e){var n=new Set(t.state.enabledLocations);e?n.add(r):n.delete(r),t.state.enabledLocations=Array.from(n),t.state.isDirty=!0},disabled:t.state.loading},e().translator.trans("mediaconstructor.ads.lib.locations."+r))}))),m("fieldset",{class:"Form-group"},m("label",null,_("between_posts_gap"),m("input",{class:"FormControl",type:"number",min:"1",max:"25",value:this.state.betweenNPosts,disabled:this.state.loading||!this.isLocationEnabled("between_posts"),oninput:function(e){var r=parseInt(e.currentTarget.value);t.state.isDirty=!0,t.state.betweenNPosts=r}})),m(f(),{state:this.state.enableAdAfterPlaceholder,onchange:function(e){t.state.isDirty=!0,t.state.enableAdAfterPlaceholder=e},loading:this.state.loading,disabled:this.state.loading||!this.isLocationEnabled("between_posts")},_("allow_after_placeholder"))),m("aside",{class:"mediaconstructor-ads-notice"},_("warning",{script:m("code",null,"<script>")})),m("fieldset",{class:"Form-group"},w.map((function(r){return m("fieldset",null,m("legend",null,e().translator.trans("mediaconstructor.ads.lib.locations."+r)),m("div",{class:"mediaconstructor-ads__code-boxes"},m("label",null,_("code_input"),m("textarea",{disabled:t.state.loading||!t.isLocationEnabled(r),class:"FormControl",value:t.isLocationEnabled(r)?t.state.code[r]:_("code_input_disabled"),oninput:function(e){t.state.isDirty=!0;var n=e.currentTarget.value;t.state.code[r]=n}})),m("label",null,_("js_input"),m("textarea",{disabled:t.state.loading||!t.isLocationEnabled(r),class:"FormControl",value:t.isLocationEnabled(r)?t.state.code[r+".js"]:_("js_input_disabled"),oninput:function(e){t.state.isDirty=!0;var n=e.currentTarget.value;t.state.code[r+".js"]=n}}))))}))),m("h1",null,_("settings")),m(h(),{onclick:this.customSaveSettings.bind(this),class:"Button Button--primary",disabled:!this.state.isDirty,loading:this.state.loading},this.getButtonText())))},u.isLocationEnabled=function(t){return this.state.enabledLocations.includes(t)},u.getButtonText=function(){return this.state.loading?b()(_("save_btn.saving")):this.state.isDirty?b()(_("save_btn.dirty")):b()(_("save_btn.saved"))},u.makeDirty=function(){this.state.isDirty=!0},u.customSaveSettings=function(){var t,r=(t=c().mark((function t(r){var n=this;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r.preventDefault(),e().alerts.clear(),this.state.loading=!0,!Object.keys(this.state.code).some((function(t){return!!n.state.code[t].includes("<script")}))||window.__mediaconstructorAds_bypassScriptCheck){t.next=8;break}return e().alerts.show({type:"error"},_("alert.code_has_script")),this.state.loading=!1,t.abrupt("return",!1);case 8:return t.next=10,g()(o({"mediaconstructor-ads.enabled-ad-locations":JSON.stringify(this.state.enabledLocations),"mediaconstructor-ads.ca-pub-id":this.state.pubId,"mediaconstructor-ads.custom-ad-script-urls":JSON.stringify(this.state.script_urls.filter((function(t){return t.length>0}))),"mediaconstructor-ads.between-n-posts":this.state.betweenNPosts,"mediaconstructor-ads.enable-ad-after-placeholder":this.state.enableAdAfterPlaceholder?1:0},Object.keys(this.state.code).reduce((function(t,e){var r;return o({},t,((r={})["mediaconstructor-ads.ad-code."+e]=n.state.code[e],r))}),{})));case 10:return this.onSettingsSaved(),t.abrupt("return",!0);case 12:case"end":return t.stop()}}),t,this)})),function(){var e=this,r=arguments;return new Promise((function(n,o){var s=t.apply(e,r);function i(t){a(s,n,o,i,c,"next",t)}function c(t){a(s,n,o,i,c,"throw",t)}i(void 0)}))});return function(t){return r.apply(this,arguments)}}(),u.onSettingsSaved=function(){this.state.loading=!1,this.state.isDirty=!1,e().alerts.show({type:"success"},e().translator.trans("core.admin.settings.saved_message"))},i}(l());e().initializers.add("mediaconstructor/ads",(function(){e().extensionData.for("mediaconstructor-ads").registerPage(x).registerPermission({icon:"fas fa-shield-alt",permission:"mediaconstructor-ads.bypass-ads",label:e().translator.trans("mediaconstructor.ads.admin.permissions.bypassAds"),allowGuest:!0},"view").registerPermission({icon:"fas fa-ad",permission:"mediaconstructor-ads.view-ads",label:e().translator.trans("mediaconstructor.ads.admin.permissions.viewAds"),allowGuest:!0},"view")}))})(),module.exports=n})();
//# sourceMappingURL=admin.js.map