"use strict";(self.webpackChunkmds_react_test=self.webpackChunkmds_react_test||[]).push([[321],{9321:function(e,t,u){u.r(t),u.d(t,{mx_chip_group:function(){return a}});var n=u(5671),i=u(3144),l=u(5953),a=function(){function e(t){(0,n.Z)(this,e),(0,l.r)(this,t),this.mxInput=(0,l.c)(this,"mxInput",7)}return(0,i.Z)(e,[{key:"onValueChange",value:function(){this.updateChildChips()}},{key:"connectedCallback",value:function(){this.updateChildChips()}},{key:"onChipClick",value:function(e){var t=e.target.closest("mx-chip");t&&!t.disabled&&(this.toggleValue(t.value),this.mxInput.emit(this.value))}},{key:"toggleValue",value:function(e){this.value!==e?this.value=e:this.value=null}},{key:"updateChildChips",value:function(){var e=this;this.element.querySelectorAll("mx-chip").forEach((function(t){t.choice=!0,t.clickable=!0,t.selected=t.value===e.value}))}},{key:"render",value:function(){return(0,l.h)(l.H,{class:"inline-flex",role:"radiogroup"},(0,l.h)("slot",null))}},{key:"element",get:function(){return(0,l.g)(this)}}],[{key:"watchers",get:function(){return{value:["onValueChange"]}}}]),e}()}}]);
//# sourceMappingURL=321.074459e9.chunk.js.map