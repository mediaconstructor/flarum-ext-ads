module.exports=function(t){var e={};function n(a){if(e[a])return e[a].exports;var o=e[a]={i:a,l:!1,exports:{}};return t[a].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,a){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(a,o,function(e){return t[e]}.bind(null,o));return a},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=9)}([function(t,e){t.exports=flarum.core.compat["admin/app"]},,function(t,e){t.exports=flarum.core.compat["common/utils/extractText"]},,,function(t,e){t.exports=flarum.core.compat["admin/components/ExtensionPage"]},function(t,e){t.exports=flarum.core.compat["common/components/Button"]},function(t,e){t.exports=flarum.core.compat["common/components/Switch"]},function(t,e){t.exports=flarum.core.compat["admin/utils/saveSettings"]},function(t,e,n){"use strict";n.r(e);var a=n(0),o=n.n(a);function r(){return(r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t}).apply(this,arguments)}function s(t,e){return(s=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var i=n(5),c=n.n(i),d=n(6),u=n.n(d),l=n(7),f=n.n(l),p=n(8),b=n.n(p),v=n(2),h=n.n(v),g=["header","discussion_sidebar","between_posts","footer"],y=function(t,e){return o.a.translator.trans("davwheat.ads.admin.settings."+t,e)},_=function(t){var e,n;function a(){for(var e,n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))||this).state={enabledLocations:[],code:{header:"",footer:"",discussion_sidebar:"",between_posts:""},isDirty:!1,loading:!1},e.loading=void 0,e}n=t,(e=a).prototype=Object.create(n.prototype),e.prototype.constructor=e,s(e,n);var i=a.prototype;return i.oninit=function(e){var n=this;t.prototype.oninit.call(this,e),this.state.enabledLocations=JSON.parse(o.a.data.settings["davwheat-ads.enabled-ad-locations"]),Object.keys(this.state.code).forEach((function(t){n.state.code[t]=o.a.data.settings["davwheat-ads.ad-code."+t]}))},i.content=function(){var t=this;return m("div",{class:"content"},m("fieldset",{class:"Form-group"},m("legend",null,y("enabled_locations")),g.map((function(e){return m(f.a,{key:e,state:t.isLocationEnabled(e),onchange:function(n){var a=new Set(t.state.enabledLocations);n?a.add(e):a.delete(e),t.state.enabledLocations=Array.from(a),t.state.isDirty=!0},disabled:t.state.loading},o.a.translator.trans("davwheat.ads.lib.locations."+e))}))),m("fieldset",{class:"Form-group"},g.map((function(e){return m("label",null,y("code_input",{for:o.a.translator.trans("davwheat.ads.lib.locations."+e)}),m("textarea",{disabled:t.state.loading||!t.isLocationEnabled(e),class:"FormControl",value:t.isLocationEnabled(e)?t.state.code[e]:y("code_input_disabled"),oninput:function(n){t.state.isDirty=!0;var a=n.currentTarget.value;t.state.code[e]=a}}))}))),m(u.a,{onclick:this.saveSettings.bind(this),class:"Button Button--primary",disabled:!this.state.isDirty,loading:this.state.loading},this.getButtonText()))},i.isLocationEnabled=function(t){return this.state.enabledLocations.includes(t)},i.getButtonText=function(){return this.state.loading?h()(y("save_btn.saving")):this.state.isDirty?h()(y("save_btn.dirty")):h()(y("save_btn.saved"))},i.makeDirty=function(){this.state.isDirty=!0},i.saveSettings=function(t){var e=this;return t.preventDefault(),o.a.alerts.clear(),this.state.loading=!0,b()(r({"davwheat-ads.enabled-ad-locations":JSON.stringify(this.state.enabledLocations)},Object.keys(this.state.code).reduce((function(t,n){var a;return r({},t,((a={})["davwheat-ads.ad-code."+n]=e.state.code[n],a))}),{}))).then(this.onSettingsSaved.bind(this))},i.onSettingsSaved=function(){this.state.loading=!1,this.state.isDirty=!1,o.a.alerts.show({type:"success"},o.a.translator.trans("core.admin.settings.saved_message"))},a}(c.a);o.a.initializers.add("davwheat/ads",(function(){o.a.extensionData.for("davwheat-ads").registerPage(_)}))}]);
//# sourceMappingURL=admin.js.map