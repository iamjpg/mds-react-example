"use strict";(self.webpackChunkmds_react_test=self.webpackChunkmds_react_test||[]).push([[191],{9958:function(t,e,n){n.d(e,{l:function(){return a},u:function(){return u}});var i="",r="",o=!1,s="data-lock-body-scroll";function a(t){if(t&&t.setAttribute(s,""),!o){i=document.body.style.overflow||"",r=document.body.style.paddingRight||"";var e=window.innerWidth-document.documentElement.clientWidth,n=parseInt(window.getComputedStyle(document.body).getPropertyValue("padding-right"),10);document.body.style.paddingRight="".concat(n+e,"px"),document.body.style.overflow="hidden",o=!0}}function u(t){o&&(t&&t.removeAttribute(s),document.querySelector("[".concat(s,"]"))||(document.body.style.paddingRight=r,document.body.style.overflow=i,o=!1))}},2191:function(t,e,n){n.r(e),n.d(e,{mx_dialog:function(){return d}});var i=n(4165),r=n(5861),o=n(5671),s=n(3144),a=n(5953),u=n(9958),c=n(1859),l=n(8341),h=n(4658),d=function(){function t(e){(0,o.Z)(this,t),(0,a.r)(this,e),this.mxClose=(0,a.c)(this,"mxClose",7),this.isSimple=!0,this.hasButtons=!1,this.hasHeading=!1,this.uuid=(0,h.u)(),this.isOpen=!1,this.isVisible=!1}return(0,s.Z)(t,[{key:"onIsOpenChange",value:function(){this.isOpen?this.showDialog():this.closeDialog()}},{key:"onKeyDown",value:function(t){var e=this;if(this.isVisible){var n=function(){return!document.activeElement||!e.focusElements.includes(document.activeElement)};"Tab"===t.key?(this.getFocusElements(),t.shiftKey&&document.activeElement===this.firstFocusElement?(this.lastFocusElement.focus(),t.preventDefault()):(n()||document.activeElement===this.lastFocusElement)&&(this.firstFocusElement&&this.firstFocusElement.focus(),t.preventDefault())):"Enter"===t.key?(this.getFocusElements(),n()&&(t.preventDefault(),this.firstFocusElement&&this.firstFocusElement.focus(),this.closeDialog(!0))):"Escape"===t.key&&(this.closeDialog(),t.preventDefault())}}},{key:"alert",value:function(){var t=(0,r.Z)((0,i.Z)().mark((function t(e){var n,r,o,s,a,u=arguments;return(0,i.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=u.length>1&&void 0!==u[1]?u[1]:{},r=n.confirmLabel,o=void 0===r?"Okay":r,s=n.cancelLabel,a=n.heading,t.abrupt("return",this.open(e,{heading:a,confirmLabel:o,cancelLabel:s}));case 2:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}()},{key:"confirm",value:function(){var t=(0,r.Z)((0,i.Z)().mark((function t(e){var n,r,o,s,a,u,c=arguments;return(0,i.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=c.length>1&&void 0!==c[1]?c[1]:{},r=n.confirmLabel,o=void 0===r?"Okay":r,s=n.cancelLabel,a=void 0===s?"Cancel":s,u=n.heading,t.abrupt("return",this.open(e,{heading:u,confirmLabel:o,cancelLabel:a}));case 2:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}()},{key:"componentWillRender",value:function(){this.hasHeading=!!this.heading||!!this.element.querySelector('[slot="heading"]'),this.hasButtons=!!this.confirmLabel||!!this.cancelLabel||!!this.element.querySelector('[slot="buttons"]'),this.isSimple=!this.element.innerText}},{key:"componentDidLoad",value:function(){this.isOpen&&this.showDialog()}},{key:"disconnectedCallback",value:function(){(0,u.u)(this.element)}},{key:"open",value:function(){var t=(0,r.Z)((0,i.Z)().mark((function t(e){var n,r,o,s,a=this,u=arguments;return(0,i.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=u.length>1&&void 0!==u[1]?u[1]:{},r=n.cancelLabel,o=n.confirmLabel,s=n.heading,this.heading=s,this.message=e,this.cancelLabel=r,this.confirmLabel=o,this.showDialog(),t.abrupt("return",new Promise((function(t){a.deferredResolve=t})));case 7:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}()},{key:"showDialog",value:function(){var t=(0,r.Z)((0,i.Z)().mark((function t(){return(0,i.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!this.isVisible){t.next=2;break}return t.abrupt("return");case 2:return this.ancestorFocusedElement=document.activeElement,(0,c.m)(this.element),(0,u.l)(this.element),this.isVisible=!0,t.next=8,new Promise((function(t){return requestAnimationFrame(t)}));case 8:return t.next=10,Promise.all([(0,l.f)(this.backdrop),(0,l.d)(this.modal)]);case 10:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"closeDialog",value:function(){var t=(0,r.Z)((0,i.Z)().mark((function t(){var e,n=arguments;return(0,i.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e=n.length>0&&void 0!==n[0]&&n[0],this.isVisible){t.next=3;break}return t.abrupt("return");case 3:return t.next=5,Promise.all([(0,l.b)(this.backdrop),(0,l.b)(this.modal)]);case 5:this.isVisible=!1,(0,u.u)(this.element),this.ancestorFocusedElement&&this.ancestorFocusedElement.focus(),this.deferredResolve&&this.deferredResolve(e),this.mxClose.emit();case 10:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"getFocusElements",value:function(){this.focusElements=Array.from(this.element.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])')).filter((function(t){return!!t.offsetParent})),this.focusElements.length&&(this.firstFocusElement=this.focusElements[0],this.lastFocusElement=this.focusElements[this.focusElements.length-1])}},{key:"hostClass",get:function(){var t="mx-dialog fixed inset-0 flex items-center justify-center";return this.isVisible||(t+=" hidden"),t}},{key:"modalClassNames",get:function(){var t="modal w-320 m-16 flex flex-col rounded-lg shadow-4 relative overflow-hidden";return this.isSimple&&(t+=" w-320"),this.modalClass&&(t+=" "+this.modalClass),t}},{key:"render",value:function(){var t=this;return(0,a.h)(a.H,{class:this.hostClass},(0,a.h)("div",{ref:function(e){return t.backdrop=e},class:"bg-dialog-backdrop absolute inset-0 z-0"}),(0,a.h)("div",{ref:function(e){return t.modal=e},role:"alertdialog","aria-labelledby":this.heading?this.uuid+"-dialog-heading":null,"aria-describedby":this.message?this.uuid+"-dialog-message":null,"aria-modal":"true","data-testid":"modal",class:this.modalClassNames},(0,a.h)("div",{class:"p-24 text-4 flex-grow overflow-auto",tabindex:"0","data-testid":"modal-content"},this.hasHeading&&(0,a.h)("h1",{id:this.uuid+"-dialog-heading",class:"text-h6 emphasis my-0 pb-16","data-testid":"heading"},this.heading,(0,a.h)("slot",{name:"heading"})),this.message&&(0,a.h)("p",{id:this.uuid+"-dialog-message",class:"my-0"},this.message),(0,a.h)("slot",null)),this.hasButtons&&(0,a.h)("div",{class:"flex flex-wrap items-center justify-end p-4","data-testid":"button-tray"},this.confirmLabel&&(0,a.h)("mx-button",{class:"m-4 order-2",btnType:"text",onClick:function(){return t.closeDialog(!0)}},this.confirmLabel),this.cancelLabel&&(0,a.h)("mx-button",{class:"m-4 order-1",btnType:"text",onClick:function(){return t.closeDialog()}},this.cancelLabel),(0,a.h)("slot",{name:"buttons"}))))}},{key:"element",get:function(){return(0,a.g)(this)}}],[{key:"watchers",get:function(){return{isOpen:["onIsOpenChange"]}}}]),t}()},1859:function(t,e,n){function i(t){(function(){var t=document.querySelector(".mds.portal");t||((t=document.createElement("div")).classList.add("mds","portal"),t.style.position="relative",t.style.zIndex="9999",document.body.appendChild(t));return t})().appendChild(t)}n.d(e,{m:function(){return i}})},8341:function(t,e,n){n.d(e,{D:function(){return i},a:function(){return g},b:function(){return d},c:function(){return b},d:function(){return f},e:function(){return y},f:function(){return h},g:function(){return m},h:function(){return p},s:function(){return v}});var i,r=n(4165),o=n(5861),s=n(4658);!function(t){t.top="top",t.right="right",t.bottom="bottom",t.left="left"}(i||(i={}));var a={property:"opacity",startValue:"0",endValue:"1",timing:"cubic-bezier(0.4, 0, 0.2, 1)"},u={property:"opacity",startValue:"1",endValue:"0",timing:"ease"},c={property:"transform",startValue:"scale(0.8)",endValue:"scale(1)",timing:"cubic-bezier(0.4, 0, 0.2, 1)"},l=function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=[0,0,0],r=100;[i.top,i.left].includes(t)&&(r*=-1);var o=0;[i.top,i.bottom].includes(t)&&(o=1),n[o]=r;var s=n.map((function(t){return 0===t?t:t+"%"})).join(", ");return{property:"transform",startValue:"translate3d(".concat(e?s:"0, 0, 0",")"),endValue:"translate3d(".concat(e?"0, 0, 0":s,")"),timing:"cubic-bezier(0.4, 0, 0.2, 1)"}},h=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:180;return x(t,[a],e)},d=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:150;return x(t,[u],e)},f=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:150,n=arguments.length>2?arguments[2]:void 0;return x(t,[a,c],e,n)},m=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:250,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:i.right;return x(t,[l(n),a],e)},p=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:200,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:i.right;return x(t,[l(n,!1),u],e)},g=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:250,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:i.top;return x(t,[l(n)],e)},v=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:200,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:i.top;return x(t,[l(n,!1)],e)},b=function(){var t=(0,o.Z)((0,r.Z)().mark((function t(e){var n,i,o,s=arguments;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=s.length>1&&void 0!==s[1]?s[1]:150,i=s.length>2&&void 0!==s[2]?s[2]:"0",o={property:"max-height",startValue:e.scrollHeight+"px",endValue:i,timing:"cubic-bezier(0.4, 0, 0.2, 1)"},t.abrupt("return",x(e,[o],n));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),y=function(){var t=(0,o.Z)((0,r.Z)().mark((function t(e){var n,i,o,s,a=arguments;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=a.length>1&&void 0!==a[1]?a[1]:150,i=e.style.maxHeight||"0",e.style.maxHeight="",o=e.scrollHeight,s={property:"max-height",startValue:i,endValue:o+"px",timing:"cubic-bezier(0.4, 0, 0.2, 1)"},t.next=7,x(e,[s],n);case 7:e.style.maxHeight="";case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();function x(t,e,n,i){return new Promise(function(){var a=(0,o.Z)((0,r.Z)().mark((function o(a){return(0,r.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(!(0,s.q)()&&"undefined"===typeof jest){r.next=2;break}return r.abrupt("return",a());case 2:return e.forEach((function(e){w(t,e.property,e.startValue)})),i&&(t.style.transformOrigin=i),r.next=6,new Promise(requestAnimationFrame);case 6:return t.style.transition=e.map((function(t){return"".concat(t.property," ").concat(n,"ms ").concat(t.timing)})).join(", "),r.next=9,new Promise(requestAnimationFrame);case 9:if(t){r.next=11;break}return r.abrupt("return");case 11:requestAnimationFrame((function(){e.forEach((function(e){w(t,e.property,e.endValue)}))})),setTimeout(a,n);case 13:case"end":return r.stop()}}),o)})));return function(t){return a.apply(this,arguments)}}())}function w(t,e,n){if(t)if("transform"!==e)t.style[e]=n;else{var i=t.style.transform.match(/\w*\((-?((\d+)|(\d*\.\d+))\w*,\s*)*(-?(\d+)|(\d*\.\d+))\w*\)/gi)||[],r=/^(\w*)\(/.exec(n)[1];(i=i.filter((function(t){return!t.startsWith(r)}))).push(n),t.style.transform=i.join(" ")}}},4658:function(t,e,n){function i(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(t){var e=16*Math.random()|0;return("x"==t?e:3&e|8).toString(16)}))}function r(){var t=window.matchMedia("(prefers-reduced-motion: reduce)");return!t||t.matches}function o(t){return t.charAt(0).toUpperCase()+t.slice(1)}function s(t){return"object"===typeof t&&("getTime"in t&&!isNaN(t.getTime()))}function a(t){if(null!=t&&""!==t.trim()){var e=t.toLowerCase().includes("a"),n=t.toLowerCase().includes("p"),i=t.replace(/[^0-9]/g,"");if(!i.length||i.length>4)return null;var r=i.length<=2?Number(i):Number(i.slice(0,-2)),o=i.length<=2?0:Number(i.slice(-2));return 12===r&&e&&(r=0),r<12&&n&&(r+=12),r>23||o>59?null:{hours:r,minutes:o}}}function u(t){return t.changedTouches?t.changedTouches[0]:t.touches?t.touches[0]:t}function c(t){var e=t.getBoundingClientRect(),n=e.height,i=e.width,r=0,o=0;do{r+=t.offsetTop,o+=t.offsetLeft,t=t.offsetParent}while(t);return{top:r,left:o,width:i,height:n,bottom:r+n,right:o+i}}function l(t){return t===window?{top:0,right:window.innerWidth,bottom:window.innerHeight,left:0}:t.getBoundingClientRect()}function h(t){var e=t.getBoundingClientRect(),n=l(d(t));return e.top<n.top||(e.bottom>n.bottom||(e.left<n.left||e.left>n.right))}function d(t){return t instanceof HTMLElement?function(t){var e=window.getComputedStyle(t),n=/(auto|scroll)/;return["overflow","overflowX","overflowY"].find((function(t){return n.test(e[t])}))}(t)?t:d(t.parentNode):window}function f(){var t=this;Array.from(this.element.attributes).forEach((function(e){/^data-/.test(e.name)&&(t.element.removeAttribute(e.name),t.dataAttributes[e.name]=e.value)}))}n.d(e,{a:function(){return u},b:function(){return a},c:function(){return o},d:function(){return d},e:function(){return l},f:function(){return h},g:function(){return c},i:function(){return s},p:function(){return f},q:function(){return r},u:function(){return i}})}}]);
//# sourceMappingURL=191.ac4e39dd.chunk.js.map