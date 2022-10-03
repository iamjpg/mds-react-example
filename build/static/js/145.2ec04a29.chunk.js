"use strict";(self.webpackChunkmds_react_test=self.webpackChunkmds_react_test||[]).push([[145],{1145:function(t,e,n){n.r(e),n.d(e,{mx_button:function(){return l}});var i=n(5671),r=n(3144),o=n(5953),s=n(7659),u=n(4658),l=function(){function t(e){(0,i.Z)(this,t),(0,o.r)(this,e),this.dataAttributes={},this.btnType="contained",this.type="button",this.disabled=!1,this.xl=!1,this.full=!1,this.dropdown=!1,this.componentWillRender=u.p}return(0,r.Z)(t,[{key:"onClick",value:function(t){if(this.disabled)return t.stopPropagation(),void t.preventDefault();(0,s.r)(t,this.href?this.anchorElem:this.btnElem)}},{key:"buttonClass",get:function(){var t=this.btnType;return this.dropdown&&(t+=" dropdown"),t+=" flex items-center justify-center relative overflow-hidden cursor-pointer appearance-none disabled:pointer-events-none disabled:cursor-auto hover:no-underline",["contained","outlined"].includes(this.btnType)&&(t+=" w-full rounded-lg font-semibold uppercase","outlined"===this.btnType&&(t+=" border"),this.xl?t+=" min-h-48 px-32 text-3 tracking-1-5":t+=" min-h-36 px-16 text-4 tracking tracking-1-25"),"simple"===this.btnType&&(t+=" w-full min-h-36 px-16 border rounded-3xl text-4"),"text"===this.btnType&&(t+=" w-full min-h-36 px-8 py-10 text-4 rounded-lg",t+=this.dropdown?" font-normal":" font-semibold uppercase tracking-1-25"),t}},{key:"connectedCallback",value:function(){"action"===this.btnType&&(this.btnType="simple")}},{key:"render",value:function(){var t=this,e=(0,o.h)("div",{class:"flex justify-center items-center content-center relative overflow-hidden whitespace-nowrap"},this.icon&&(0,o.h)("i",{class:"mr-8 text-3 "+this.icon}),(0,o.h)("span",{class:"slot-content truncate"},(0,o.h)("slot",null)),this.dropdown&&"text"===this.btnType&&(0,o.h)("span",{class:"separator inline-block w-1 ml-4 -my-4 h-24"}),this.dropdown&&(0,o.h)("i",{"data-testid":"chevron",class:"mds-chevron-down text-icon "+("text"===this.btnType?"chevron-icon":"ml-4")}));return(0,o.h)(o.H,{class:"mx-button appearance-none"+(this.full?" flex":" inline-flex")},this.href?(0,o.h)("a",Object.assign({href:this.href,target:this.target,"aria-disabled":this.disabled?"true":null,class:this.buttonClass,ref:function(e){return t.anchorElem=e},onClick:this.onClick.bind(this)},this.dataAttributes),e):(0,o.h)("button",Object.assign({type:this.type,form:this.form,formaction:this.formaction,value:this.value,disabled:this.disabled,class:this.buttonClass,ref:function(e){return t.btnElem=e},onClick:this.onClick.bind(this),"aria-label":this.elAriaLabel},this.dataAttributes),e))}},{key:"element",get:function(){return(0,o.g)(this)}}]),t}()},7659:function(t,e,n){function i(t,e){var n=e.querySelector(".ripple");n&&n.remove();var i=document.createElement("span");i.classList.add("ripple"),e.prepend(i);var r=Math.max(e.clientWidth,e.clientHeight);i.style.width=i.style.height=r+"px";var o=e.getBoundingClientRect(),s=Math.max(t.clientX-o.left,0),u=Math.max(t.clientY-o.top,0);i.style.left=s-r/2+"px",i.style.top=u-r/2+"px",setTimeout((function(){i.remove()}),300)}n.d(e,{r:function(){return i}})},4658:function(t,e,n){function i(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(t){var e=16*Math.random()|0;return("x"==t?e:3&e|8).toString(16)}))}function r(){var t=window.matchMedia("(prefers-reduced-motion: reduce)");return!t||t.matches}function o(t){return t.charAt(0).toUpperCase()+t.slice(1)}function s(t){return"object"===typeof t&&("getTime"in t&&!isNaN(t.getTime()))}function u(t){if(null!=t&&""!==t.trim()){var e=t.toLowerCase().includes("a"),n=t.toLowerCase().includes("p"),i=t.replace(/[^0-9]/g,"");if(!i.length||i.length>4)return null;var r=i.length<=2?Number(i):Number(i.slice(0,-2)),o=i.length<=2?0:Number(i.slice(-2));return 12===r&&e&&(r=0),r<12&&n&&(r+=12),r>23||o>59?null:{hours:r,minutes:o}}}function l(t){return t.changedTouches?t.changedTouches[0]:t.touches?t.touches[0]:t}function a(t){var e=t.getBoundingClientRect(),n=e.height,i=e.width,r=0,o=0;do{r+=t.offsetTop,o+=t.offsetLeft,t=t.offsetParent}while(t);return{top:r,left:o,width:i,height:n,bottom:r+n,right:o+i}}function c(t){return t===window?{top:0,right:window.innerWidth,bottom:window.innerHeight,left:0}:t.getBoundingClientRect()}function h(t){var e=t.getBoundingClientRect(),n=c(d(t));return e.top<n.top||(e.bottom>n.bottom||(e.left<n.left||e.left>n.right))}function d(t){return t instanceof HTMLElement?function(t){var e=window.getComputedStyle(t),n=/(auto|scroll)/;return["overflow","overflowX","overflowY"].find((function(t){return n.test(e[t])}))}(t)?t:d(t.parentNode):window}function f(){var t=this;Array.from(this.element.attributes).forEach((function(e){/^data-/.test(e.name)&&(t.element.removeAttribute(e.name),t.dataAttributes[e.name]=e.value)}))}n.d(e,{a:function(){return l},b:function(){return u},c:function(){return o},d:function(){return d},e:function(){return c},f:function(){return h},g:function(){return a},i:function(){return s},p:function(){return f},q:function(){return r},u:function(){return i}})}}]);
//# sourceMappingURL=145.2ec04a29.chunk.js.map