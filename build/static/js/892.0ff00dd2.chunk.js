"use strict";(self.webpackChunkmds_react_test=self.webpackChunkmds_react_test||[]).push([[892],{7892:function(t,e,n){n.r(e),n.d(e,{mx_search:function(){return s}});var r=n(5671),i=n(3144),u=n(5953),o=n(4658),s=function(){function t(e){(0,r.Z)(this,t),(0,u.r)(this,e),this.mxClear=(0,u.c)(this,"mxClear",7),this.dataAttributes={},this.dense=!1,this.flat=!1,this.showClear=!0,this.componentWillRender=o.p}return(0,i.Z)(t,[{key:"onInput",value:function(t){this.value=t.target.value}},{key:"onClear",value:function(){this.inputEl.value="",this.inputEl.dispatchEvent(new window.Event("input",{bubbles:!0})),this.mxClear.emit(),"undefined"===typeof jest&&this.inputEl.focus()}},{key:"inputClass",get:function(){var t="w-full pl-56 pr-16 rounded-lg outline-none border focus:border-2";return t+=this.flat?" flat":" shadow-1",t+=this.dense?" h-36 py-8 text-4":" h-48 py-12"}},{key:"clearButtonClass",get:function(){var t="clear-button absolute right-8 inline-flex items-center justify-center w-24 h-24 cursor-pointer";return this.value||(t+=" hidden"),t}},{key:"render",value:function(){var t=this;return(0,u.h)(u.H,{class:"mx-search flex items-center text-3 relative"},(0,u.h)("input",Object.assign({ref:function(e){return t.inputEl=e},type:"search","aria-label":this.elAriaLabel||this.placeholder||"Search",name:this.name,placeholder:this.placeholder,value:this.value,class:this.inputClass},this.dataAttributes,{onInput:this.onInput.bind(this)})),(0,u.h)("i",{class:"absolute mds-search text-icon left-16 pointer-events-none"}),this.showClear&&(0,u.h)("button",{type:"button","aria-label":"Clear search",class:this.clearButtonClass,"data-testid":"clear-button",onClick:this.onClear.bind(this)},(0,u.h)("i",{class:"mds-x text-icon"})))}},{key:"element",get:function(){return(0,u.g)(this)}}]),t}()},4658:function(t,e,n){function r(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(t){var e=16*Math.random()|0;return("x"==t?e:3&e|8).toString(16)}))}function i(){var t=window.matchMedia("(prefers-reduced-motion: reduce)");return!t||t.matches}function u(t){return t.charAt(0).toUpperCase()+t.slice(1)}function o(t){return"object"===typeof t&&("getTime"in t&&!isNaN(t.getTime()))}function s(t){if(null!=t&&""!==t.trim()){var e=t.toLowerCase().includes("a"),n=t.toLowerCase().includes("p"),r=t.replace(/[^0-9]/g,"");if(!r.length||r.length>4)return null;var i=r.length<=2?Number(r):Number(r.slice(0,-2)),u=r.length<=2?0:Number(r.slice(-2));return 12===i&&e&&(i=0),i<12&&n&&(i+=12),i>23||u>59?null:{hours:i,minutes:u}}}function a(t){return t.changedTouches?t.changedTouches[0]:t.touches?t.touches[0]:t}function l(t){var e=t.getBoundingClientRect(),n=e.height,r=e.width,i=0,u=0;do{i+=t.offsetTop,u+=t.offsetLeft,t=t.offsetParent}while(t);return{top:i,left:u,width:r,height:n,bottom:i+n,right:u+r}}function c(t){return t===window?{top:0,right:window.innerWidth,bottom:window.innerHeight,left:0}:t.getBoundingClientRect()}function h(t){var e=t.getBoundingClientRect(),n=c(f(t));return e.top<n.top||(e.bottom>n.bottom||(e.left<n.left||e.left>n.right))}function f(t){return t instanceof HTMLElement?function(t){var e=window.getComputedStyle(t),n=/(auto|scroll)/;return["overflow","overflowX","overflowY"].find((function(t){return n.test(e[t])}))}(t)?t:f(t.parentNode):window}function d(){var t=this;Array.from(this.element.attributes).forEach((function(e){/^data-/.test(e.name)&&(t.element.removeAttribute(e.name),t.dataAttributes[e.name]=e.value)}))}n.d(e,{a:function(){return a},b:function(){return s},c:function(){return u},d:function(){return f},e:function(){return c},f:function(){return h},g:function(){return l},i:function(){return o},p:function(){return d},q:function(){return i},u:function(){return r}})}}]);
//# sourceMappingURL=892.0ff00dd2.chunk.js.map