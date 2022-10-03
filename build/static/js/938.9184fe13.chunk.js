"use strict";(self.webpackChunkmds_react_test=self.webpackChunkmds_react_test||[]).push([[938],{3379:function(e,t,n){n.d(t,{M:function(){return o},m:function(){return a}});var s=n(3144),i=n(5671),r={sm:"640px",md:"768px",lg:"1024px",xl:"1280px","2xl":"1536px"},o=(0,s.Z)((function e(){(0,i.Z)(this,e),this.sm=!1,this.md=!1,this.lg=!1,this.xl=!1,this["2xl"]=!1})),a=new(function(){function e(){(0,i.Z)(this,e),this.componentRefs=[],this.minWidths=new o,this.listeners=new Map}return(0,s.Z)(e,[{key:"subscribeComponent",value:function(e){0===this.componentRefs.length&&this.addListeners(),this.componentRefs.push(e),e.minWidths=Object.assign({},this.minWidths)}},{key:"addListeners",value:function(){var e=this;Object.keys(r).forEach((function(t){var n=window.matchMedia("(min-width: ".concat(r[t],")")),s=function(n){e.minWidths[t]=n.matches,e.componentRefs.forEach((function(t){t.minWidths=Object.assign({},e.minWidths)}))};s(n),n.addListener(s),e.listeners.set(n,s)}))}},{key:"unsubscribeComponent",value:function(e){this.componentRefs=this.componentRefs.filter((function(t){return t!==e})),0===this.componentRefs.length&&this.removeListeners()}},{key:"removeListeners",value:function(){this.listeners.forEach((function(e,t){t.removeListener(e)}))}}]),e}())},938:function(e,t,n){n.r(t),n.d(t,{mx_table:function(){return u}});var s=n(4165),i=n(5861),r=n(2982),o=n(5671),a=n(3144),l=n(5953),h=n(3379),c=n(4658),u=function(){function e(t){(0,o.Z)(this,e),(0,l.r)(this,t),this.mxSortChange=(0,l.c)(this,"mxSortChange",7),this.mxRowCheck=(0,l.c)(this,"mxRowCheck",7),this.mxCheckAll=(0,l.c)(this,"mxCheckAll",7),this.mxVisibleRowsChange=(0,l.c)(this,"mxVisibleRowsChange",7),this.mxRowMove=(0,l.c)(this,"mxRowMove",7),this.hasDefaultSlot=!1,this.hasSearch=!1,this.hasFilter=!1,this.hasFooter=!1,this.showOperationsBar=!1,this.autoWidth=!1,this.checkable=!1,this.checkOnRowClick=!1,this.columns=[],this.disableNextPage=!1,this.disablePagination=!1,this.draggableRows=!1,this.groupBy=null,this.hoverable=!0,this.mobileSearchOnTop=!1,this.mutateOnDrag=!0,this.operationsBarClass="",this.page=1,this.paginate=!0,this.progressAppearDelay=0,this.progressValue=null,this.rows=[],this.rowsPerPage=10,this.serverPaginate=!1,this.showCheckAll=!0,this.showProgressBar=!1,this.sortAscending=!0,this.minWidths=new h.M,this.checkedRowIds=[],this.exposedMobileColumnIndex=0,this.hasActionsColumnFromSlot=!1}return(0,a.Z)(e,[{key:"onMxCheck",value:function(e){var t=e.detail,n=t.rowId,s=t.checked;!s&&this.checkedRowIds.includes(n)?this.checkedRowIds=this.checkedRowIds.filter((function(e){return e!==n})):s&&!this.checkedRowIds.includes(n)&&(this.checkedRowIds=[].concat((0,r.Z)(this.checkedRowIds),[n])),this.mxRowCheck.emit(this.checkedRowIds)}},{key:"onMxRowDragStart",value:function(){var e=(0,i.Z)((0,s.Z)().mark((function e(t){var n=this;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.dragRowEl=t.target.closest("mx-table-row"),e.next=3,this.dragRowEl.getHeight();case 3:this.dragRowElHeight=e.sent,this.dragRowElSiblings=Array.from(this.dragRowEl.parentNode.children).filter((function(e){return"MX-TABLE-ROW"===e.tagName})),this.dragRowElIndex=this.dragRowElSiblings.indexOf(this.dragRowEl),this.dragOverRowElIndex=this.dragRowElIndex,this.dragMoveHandler=this.onDragMove.bind(this),this.dragRowElSiblings.forEach(function(){var e=(0,i.Z)((0,s.Z)().mark((function e(i){return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.detail.isKeyboard||i!==n.dragRowEl){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,i.getChildren();case 4:e.sent.forEach((function(e){e.classList.add("transition-transform","pointer-events-none")}));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),t.detail.isKeyboard||(document.addEventListener("touchmove",this.dragMoveHandler),document.addEventListener("mousemove",this.dragMoveHandler));case 10:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"onDragKeyDown",value:function(){var e=(0,i.Z)((0,s.Z)().mark((function e(t){var n,i,r,o,a;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i=t.detail,["ArrowUp","ArrowLeft"].includes(i)&&(n=-1),["ArrowDown","ArrowRight"].includes(i)&&(n=1),n){e.next=5;break}return e.abrupt("return");case 5:if(-1!==n||0!==this.dragOverRowElIndex){e.next=7;break}return e.abrupt("return");case 7:if(1!==n||this.dragOverRowElIndex!==this.dragRowElSiblings.length-1){e.next=9;break}return e.abrupt("return");case 9:this.dragOverRowElIndex+=n,r=0,o=this.dragOverRowElIndex;case 12:if(o===this.dragRowElIndex){e.next=23;break}return a=this.dragOverRowElIndex>this.dragRowElIndex?1:-1,e.t0=r,e.next=17,this.dragRowElSiblings[o].getHeight();case 17:e.t1=e.sent,e.t2=a,r=e.t0+=e.t1*e.t2,o-=a,e.next=12;break;case 23:this.dragRowEl.translateRow(0,r),this.dragOverRowEl=this.dragRowElSiblings[this.dragOverRowElIndex],this.onDragMove();case 26:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"onMxRowDragEnd",value:function(){var e=(0,i.Z)((0,s.Z)().mark((function e(t){var n=this;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(document.removeEventListener("mousemove",this.dragMoveHandler),document.removeEventListener("touchmove",this.dragMoveHandler),t.detail.isCancel||this.dragOverRowElIndex===this.dragRowElIndex||(this.rows&&this.mutateOnDrag&&this.reorderRowsArray(),t.detail.isKeyboard&&requestAnimationFrame((function(){Array.from(n.dragRowEl.parentNode.children).filter((function(e){return"MX-TABLE-ROW"===e.tagName}))[n.dragOverRowElIndex].focusDragHandle()}))),requestAnimationFrame((function(){n.dragRowElSiblings.forEach(function(){var e=(0,i.Z)((0,s.Z)().mark((function e(t){return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getChildren();case 2:e.sent.forEach((function(e){e.classList.remove("transition-transform","pointer-events-none"),e.style.transform=""}));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())})),document.body.style.cursor="",!this.rows||!this.mutateOnDrag){e.next=8;break}return e.next=8,new Promise(requestAnimationFrame);case 8:this.mxRowMove.emit({rowId:this.dragRowEl.rowId,parentRowId:(this.dragRowEl.parentElement.closest("mx-table-row")||{}).rowId,oldIndex:null==this.dragRowEl.rowIndex?this.dragRowElIndex:this.dragRowEl.rowIndex,newIndex:null==this.dragOverRowEl.rowIndex?this.dragOverRowElIndex:this.dragOverRowEl.rowIndex}),this.dragRowElIndex=null;case 10:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"onVisibleRowsChange",value:function(){this.getTableRows().forEach((function(e){return e.collapse(!0)})),this.mxVisibleRowsChange.emit(this.visibleRows)}},{key:"onPageChange",value:function(){this.element.getBoundingClientRect().top<0&&this.element.scrollIntoView()}},{key:"resetPage",value:function(){this.serverPaginate||(this.page=1)}},{key:"getCheckedRowIds",value:function(){var e=(0,i.Z)((0,s.Z)().mark((function e(){return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",this.checkedRowIds);case 1:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"setCheckedRowIds",value:function(){var e=(0,i.Z)((0,s.Z)().mark((function e(){var t,n=arguments;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=n.length>0&&void 0!==n[0]?n[0]:[],this.checkedRowIds=t;case 2:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"checkAll",value:function(){var e=(0,i.Z)((0,s.Z)().mark((function e(){return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.getRowId?this.checkedRowIds=this.rows.map(this.getRowId).map((function(e){return e.toString()})):this.checkedRowIds=this.getTableRows().map((function(e){return e.rowId}));case 1:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"checkNone",value:function(){var e=(0,i.Z)((0,s.Z)().mark((function e(){return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.checkedRowIds=[];case 1:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getTableRows",value:function(){return Array.from(this.element.querySelectorAll("mx-table-row"))}},{key:"onCheckAllClick",value:function(e){e.preventDefault(),e.stopPropagation();var t=0===this.checkedRowIds.length;t?this.checkAll():this.checkNone(),this.mxRowCheck.emit(this.checkedRowIds),this.mxCheckAll.emit(t)}},{key:"onDragMove",value:function(e){var t=this;requestAnimationFrame((function(){null!=t.dragRowEl&&t.dragRowElSiblings.forEach(function(){var n=(0,i.Z)((0,s.Z)().mark((function n(i,r){var o,a,l,h,u,d,g;return(0,s.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.getChildren();case 2:if(o=n.sent,a=(0,c.g)(o[0]),l=a.top,h=(0,c.g)(o[o.length-1]),u=h.bottom,e&&(d=(0,c.a)(e),(g=d.pageY)>=l&&g<=u&&(t.dragOverRowEl=i,t.dragOverRowElIndex=r)),i!==t.dragRowEl){n.next=8;break}return n.abrupt("return");case 8:r<=t.dragOverRowElIndex&&r>t.dragRowElIndex?o.forEach((function(e){return e.style.transform="translateY(-".concat(t.dragRowElHeight,"px)")})):r>=t.dragOverRowElIndex&&r<t.dragRowElIndex?o.forEach((function(e){return e.style.transform="translateY(".concat(t.dragRowElHeight,"px)")})):o.forEach((function(e){return e.style.transform=""}));case 9:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}())}))}},{key:"reorderRowsArray",value:function(){var e=(0,i.Z)((0,s.Z)().mark((function e(){var t,n,i,o,a,l=this;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=[],null!=this.dragRowEl.rowIndex&&t.push(this.dragRowEl.rowIndex),e.t0=t.push,e.t1=t,e.t2=r.Z,e.next=7,this.dragRowEl.getNestedRowIndexes();case 7:if(e.t3=e.sent,e.t4=(0,e.t2)(e.t3),e.t0.apply.call(e.t0,e.t1,e.t4),!t.length){e.next=24;break}if(n=this.groupedRows.slice(),t.reverse(),null!=(i=this.dragOverRowEl.rowIndex)){e.next=21;break}return e.next=17,this.dragOverRowEl.getNestedRowIndexes();case 17:o=e.sent,a=t[0]<o[0],i=a?o[o.length-1]:o[0],a&&t.reverse();case 21:t.map((function(e){return l.groupedRows[e]})).forEach((function(e){n.splice(n.indexOf(e),1)[0],n.splice(i,0,e)})),this.rows=n;case 24:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"setCellProps",value:function(){var e=this;this.getTableRows().forEach((function(t){if(!t.subheader){var n=t.querySelectorAll("mx-table-cell"),s=0;n.forEach((function(t){var n;(t.columnIndex=s,t.isExposedMobileColumn=s===e.exposedMobileColumnIndex,e.cols[s])?(t.heading=e.cols[s].heading,(n=t.classList).add.apply(n,(0,r.Z)(e.getAlignClasses(e.cols[s]))),e.cols[s].cellClass&&t.classList.add(e.cols[s].cellClass)):console.error("Column definition not found for column index ".concat(s,". Check that all rows have the same number of columns."));s===e.cols.length-1?s=0:s++}))}}))}},{key:"getRowGroup",value:function(e){return null==e[this.groupBy]?null:e[this.groupBy]}},{key:"setRowsChecked",value:function(){var e=this;this.getTableRows().forEach((function(t){return t.checked=e.checkedRowIds.includes(t.rowId)}))}},{key:"connectedCallback",value:function(){h.m.subscribeComponent(this)}},{key:"componentWillLoad",value:function(){this.hasDefaultSlot=Array.from(this.element.children).some((function(e){return!e.getAttribute("slot")}))}},{key:"componentWillRender",value:function(){this.hasFilter=!!this.element.querySelector('[slot="filter"]'),this.hasSearch=!!this.element.querySelector('[slot="search"]'),this.hasFooter=!!this.element.querySelector('[slot="footer"]'),this.showOperationsBar=!!this.getMultiRowActions||this.hasFilter||this.hasSearch,this.hasActionsColumnFromSlot=this.hasDefaultSlot&&this.getTableRows().some((function(e){return e.actions&&e.actions.length})),requestAnimationFrame(this.setCellProps.bind(this))}},{key:"componentDidRender",value:function(){this.actionMenu&&!this.actionMenu.anchorEl&&(this.actionMenu.anchorEl=this.actionMenuButton),this.checkable&&this.setRowsChecked(),this.setLastRowClass()}},{key:"componentDidLoad",value:function(){this.onVisibleRowsChange(),this.columns.length?this.columns.length!==this.cols.length&&console.warn('The number of columns in the "columns" prop does not match the number of columns in the table.'):console.warn('No "columns" prop was provided.')}},{key:"disconnectedCallback",value:function(){h.m.unsubscribeComponent(this)}},{key:"cols",get:function(){var e=this.columns;if(!e.length&&this.rows.length&&!this.hasDefaultSlot)return Object.keys(this.rows[0]).map((function(e){return{property:e,heading:(0,c.c)(e),sortable:!0}}));if(this.hasDefaultSlot){var t=this.getTableRows().filter((function(e){return!e.subheader}));if(t.length){var n=t[0].querySelectorAll("mx-table-cell").length;n!==e.length&&(e=e.concat(new Array(n).fill({})).slice(0,n))}}return e.map((function(e){return Object.assign(Object.assign({},e),{sortable:!1!==e.sortable})}))}},{key:"exposedMobileColumn",get:function(){return this.cols[this.exposedMobileColumnIndex]||{}}},{key:"uniqueGroups",get:function(){var e=this;if(!this.groupBy||!this.rows.length)return[];var t=this.rows.map((function(t){return e.getRowGroup(t)}));return(0,r.Z)(new Set(t))}},{key:"groupedRows",get:function(){var e=this;if(!this.groupBy)return this.rows;var t=[];return this.uniqueGroups.forEach((function(n){var s=e.rows.filter((function(t){return null==t[e.groupBy]&&null===n||t[e.groupBy]===n}));t.push.apply(t,(0,r.Z)(s))})),t}},{key:"visibleRows",get:function(){if(this.serverPaginate||!this.paginate&&!this.sortBy)return this.groupedRows;var e=(this.page-1)*this.rowsPerPage,t=this.groupedRows.slice();return this.sortBy&&this.sortRows(t),t=t.slice(e,e+this.rowsPerPage)}},{key:"visibleGroups",get:function(){var e=this;return(0,r.Z)(new Set(this.visibleRows.map((function(t){return e.getRowGroup(t)}))))}},{key:"allRowsChecked",get:function(){return 0!==this.checkedRowIds.length&&(this.rows&&this.rows.length?this.rows.length===this.checkedRowIds.length:!!this.hasDefaultSlot&&this.getTableRows().length===this.checkedRowIds.length)}},{key:"someRowsChecked",get:function(){return 0!==this.checkedRowIds.length&&(this.rows&&this.rows.length?this.checkedRowIds.length<this.rows.length:!!this.hasDefaultSlot&&this.checkedRowIds.length<this.getTableRows().length)}},{key:"multiRowActions",get:function(){return this.getMultiRowActions?this.getMultiRowActions(this.checkedRowIds):[]}},{key:"hasActionsColumn",get:function(){return!!this.getRowActions||this.hasActionsColumnFromSlot}},{key:"operationsBarStyle",get:function(){return this.minWidths.sm?{gridTemplateColumns:"auto 1fr auto"}:this.checkable&&this.showCheckAll?{gridTemplateColumns:"minmax(0, max-content) 1fr"}:{gridTemplateColumns:"1fr"}}},{key:"searchStyle",get:function(){return this.minWidths.sm?{minWidth:"240px",gridColumnStart:"-1"}:this.checkable&&this.showCheckAll&&!this.mobileSearchOnTop?{width:"100%",gridColumnStart:"2"}:{width:"100%",gridColumnStart:"1",gridColumnEnd:"-1"}}},{key:"checkAllClass",get:function(){var e="col-start-1 flex items-center min-h-36 space-x-16";return this.mobileSearchOnTop&&this.hasSearch&&(e+=" row-start-2 sm:row-start-auto"),e}},{key:"filterClass",get:function(){var e="flex items-center overflow-hidden flex-wrap row-start-2 sm:row-start-auto sm:col-span-1 ";return e+=this.mobileSearchOnTop&&this.checkable&&this.showCheckAll?"col-start-2":"col-span-full"}},{key:"gridStyle",get:function(){if(!this.minWidths.sm)return{display:"flex",flexDirection:"column"};var e=this.autoWidth?"inline-grid":"grid",t=this.cols.length+(this.hasActionsColumn?1:0);return{display:e,gridTemplateColumns:"repeat(".concat(t,", minmax(0, auto))")}}},{key:"emptyStateClass",get:function(){var e="empty-state";return(this.rows.length>0||this.getTableRows().length>0)&&(e+=" hidden"),e}},{key:"navigableColumnIndexes",get:function(){return this.cols.map((function(e,t){return e.isActionColumn?null:t})).filter((function(e){return null!==e}))}},{key:"isPreviousColumnDisabled",get:function(){return this.navigableColumnIndexes[0]===this.exposedMobileColumnIndex}},{key:"isNextColumnDisabled",get:function(){return this.navigableColumnIndexes[this.navigableColumnIndexes.length-1]===this.exposedMobileColumnIndex}},{key:"sortRows",value:function(e){var t=this,n=this.cols.find((function(e){return e.property===t.sortBy}));if(n){var s=n.sortCompare;s||(s=function(e,s){var i=t.getCellSortableValue(e,n),r=t.getCellSortableValue(s,n);return"number"===typeof i&&"number"===typeof r?i-r:i.localeCompare(r)}),e.sort(s),this.sortAscending||e.reverse()}}},{key:"getCellSortableValue",value:function(e,t){if(t.getValue)return t.getValue(e);var n=e[t.property];return["date","dateTime"].includes(t.type)||(0,c.i)(n)?-new Date(n).getTime():"boolean"===t.type?n?1:0:n}},{key:"getCellValue",value:function(e,t,n){if(t.getValue)return t.getValue(e,n);var s=e[t.property];return"date"===t.type||(0,c.i)(s)?new Date(s).toLocaleDateString():"dateTime"===t.type||(0,c.i)(s)?new Date(s).toLocaleString():"boolean"===t.type?s?"Yes":"":s}},{key:"getHeaderClass",value:function(e,t){if(!e)return"";var n="flex items-center subtitle2 py-18 "+this.getAlignClasses(e).join(" ");n+=this.minWidths.sm?" px-16":" flex-1";var s=this.showCheckAll&&!this.showOperationsBar;return this.minWidths.sm&&0===t&&(n+=" space-x-16"),!this.minWidths.sm&&t===this.exposedMobileColumnIndex&&this.checkable&&s&&(n+=" px-16"),!this.draggableRows&&e.sortable&&e.property&&(n+=" group cursor-pointer"),e.headerClass&&(n+=e.headerClass),n}},{key:"getHeaderArrowClass",value:function(e){var t="inline-flex items-center ml-8 transform scale-75";return e.property!==this.sortBy?t+=" opacity-30 sm:opacity-0 sm:group-hover:opacity-30 rotate-180":this.sortAscending&&(t+=" rotate-180"),t}},{key:"getAlignClasses",value:function(e){var t=[];e.isActionColumn||t.push("justify-start");var n,s=e.align||("number"===e.type?"right":"left");return"right"===s?n="justify-end":"center"===s&&(n="justify-center"),n&&!e.isActionColumn&&(n="sm:"+n),n&&t.push(n),t}},{key:"getRowJsx",value:function(e,t){var n=this;return(0,l.h)("mx-table-row",{"row-id":this.getRowId?this.getRowId(e):null,"row-index":t,actions:this.getRowActions?this.getRowActions(e):void 0},this.cols.map((function(s){return(0,l.h)("mx-table-cell",null,(0,l.h)("span",{innerHTML:n.getCellValue(e,s,t)}))})))}},{key:"onHeaderClick",value:function(e){!this.draggableRows&&e&&e.sortable&&e.property&&(this.sortBy!==e.property?(this.sortBy=e.property,this.sortAscending=!0):this.sortAscending?this.sortAscending=!1:(this.sortBy=null,this.sortAscending=!0),this.mxSortChange.emit({sortBy:this.sortBy,sortAscending:this.sortAscending}))}},{key:"changeExposedColumnIndex",value:function(){var e=(0,i.Z)((0,s.Z)().mark((function e(t){var n;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!this.isPreviousColumnDisabled||-1!==t){e.next=2;break}return e.abrupt("return");case 2:if(!this.isNextColumnDisabled||1!==t){e.next=4;break}return e.abrupt("return");case 4:return n=this.navigableColumnIndexes.indexOf(this.exposedMobileColumnIndex),this.exposedMobileColumnIndex=this.navigableColumnIndexes[n+t],e.next=8,new Promise(requestAnimationFrame);case 8:this.element.querySelectorAll("mx-table-row").forEach(l.f);case 10:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"onMxPageChange",value:function(e){this.serverPaginate||(this.page=e.detail.page,this.rowsPerPage=e.detail.rowsPerPage)}},{key:"setLastRowClass",value:function(){if(!this.paginate&&!this.hasFooter){var e=this.getTableRows().filter((function(e){return"true"!==e.getAttribute("aria-hidden")}));e.forEach((function(t,n){var s=n===e.length-1?"add":"remove";t.classList[s]("last-row")}))}}},{key:"render",value:function(){var e,t=this,n=this.checkable&&this.showCheckAll&&(0,l.h)("mx-checkbox",{checked:this.allRowsChecked,class:this.showOperationsBar?"ml-24":"pr-4",indeterminate:this.someRowsChecked,onClick:this.onCheckAllClick.bind(this),"label-name":"Select all rows","data-testid":"check-all-checkbox","hide-label":!0});this.checkable&&this.multiRowActions.length&&(e=1===this.multiRowActions.length?(0,l.h)("mx-button",Object.assign({"data-testid":"multi-action-button","btn-type":"outlined"},this.multiRowActions[0],{class:"whitespace-nowrap"+(this.checkedRowIds.length?"":" invisible"),"aria-hidden":0===this.checkedRowIds.length?"true":null}),this.multiRowActions[0].value):(0,l.h)("span",{class:this.checkedRowIds.length?null:"invisible","aria-hidden":0===this.checkedRowIds.length?"true":null},(0,l.h)("mx-button",{ref:function(e){return t.actionMenuButton=e},"btn-type":"text",dropdown:!0},(0,l.h)("span",{class:"h-full flex items-center px-2"},(0,l.h)("i",{class:"mds-gear text-icon"}),(0,l.h)("span",{class:"sr-only"},"Action Menu"))),(0,l.h)("mx-menu",{"data-testid":"multi-action-menu",ref:function(e){return t.actionMenu=e},onMxClose:function(e){return e.stopPropagation()}},this.multiRowActions.map((function(e){return(0,l.h)("mx-menu-item",Object.assign({},e),e.value)})))));var s=(0,l.h)("div",{class:["grid gap-x-16 gap-y-12 pb-12",this.operationsBarClass].join(" "),style:this.operationsBarStyle},this.checkable&&this.showCheckAll&&(0,l.h)("div",{class:this.checkAllClass,"data-testid":"check-all-grid-item"},n,e),this.hasFilter&&(0,l.h)("div",{class:this.filterClass,"data-testid":"filter-grid-item"},(0,l.h)("slot",{name:"filter"})),this.hasSearch&&(0,l.h)("div",{class:"justify-self-end",style:this.searchStyle,"data-testid":"search-grid-item"},(0,l.h)("slot",{name:"search"}))),i=[];return this.hasDefaultSlot||this.groupBy||!this.groupedRows.length?!this.hasDefaultSlot&&this.groupBy&&(i=this.visibleGroups.map((function(e){var n=t.getGroupByHeading?t.getGroupByHeading(e):e;return(0,l.h)("mx-table-row",{subheader:!0,key:e},(0,l.h)("mx-table-cell",null,n),t.visibleRows.filter((function(n){return t.getRowGroup(n)===e})).map((function(e){var n=t.groupedRows.indexOf(e);return t.getRowJsx(e,n)})))}))):i=this.visibleRows.map((function(e){var n=t.rows.indexOf(e);return t.getRowJsx(e,n)})),(0,l.h)(l.H,{class:"mx-table block text-4"+(this.hoverable?" hoverable":"")},this.showOperationsBar&&s,(0,l.h)("div",{"data-testid":"grid",role:"grid",class:"table-grid relative",style:this.gridStyle},(0,l.h)("div",{class:"header-row",role:"row"},this.minWidths.sm?this.cols.map((function(e,s){return(0,l.h)("div",{id:"column-header-".concat(s),role:"columnheader",class:t.getHeaderClass(e,s),onClick:t.onHeaderClick.bind(t,e)},0===s&&t.minWidths.sm&&!t.showOperationsBar&&n,(0,l.h)("div",{class:"inline-flex items-center overflow-hidden whitespace-nowrap select-none"},e.heading&&(0,l.h)("span",{class:"truncate flex-shrink",innerHTML:e.heading}),!e.heading&&(0,l.h)("span",{class:"sr-only"},e.isActionColumn?"Action":e.property),!t.draggableRows&&e.sortable&&e.property&&(0,l.h)("div",{class:t.getHeaderArrowClass(e),"data-testid":"arrow"},(0,l.h)("i",{class:"mds-arrow-triangle-down text-icon"}))))})):(0,l.h)("div",{class:"flex items-stretch"},!this.showOperationsBar&&n,(0,l.h)("div",{id:"column-header-".concat(this.exposedMobileColumnIndex),role:"columnheader",class:this.getHeaderClass(this.exposedMobileColumn,this.exposedMobileColumnIndex),onClick:this.onHeaderClick.bind(this,this.exposedMobileColumn)},(0,l.h)("div",{class:"inline-flex items-center overflow-hidden whitespace-nowrap select-none"},(0,l.h)("span",{class:"truncate flex-shrink",innerHTML:this.exposedMobileColumn.heading}),!this.draggableRows&&this.exposedMobileColumn.sortable&&this.exposedMobileColumn.property&&(0,l.h)("div",{class:this.getHeaderArrowClass(this.exposedMobileColumn),"data-testid":"arrow"},(0,l.h)("i",{class:"mds-arrow-triangle-down text-icon"})))),this.columns.length>=2&&(0,l.h)("div",{class:"flex items-center"},(0,l.h)("mx-icon-button",{"data-testid":"previous-column-button",chevronLeft:!0,disabled:this.isPreviousColumnDisabled,onClick:this.changeExposedColumnIndex.bind(this,-1)}),(0,l.h)("mx-icon-button",{"data-testid":"next-column-button",chevronRight:!0,disabled:this.isNextColumnDisabled,onClick:this.changeExposedColumnIndex.bind(this,1)}))),this.minWidths.sm&&this.hasActionsColumn&&(0,l.h)("div",null)),this.showProgressBar&&(0,l.h)("div",null,(0,l.h)("div",{class:"block h-0 col-span-full"},(0,l.h)("mx-linear-progress",{class:"transform -translate-y-1/2",value:this.progressValue,"appear-delay":this.progressAppearDelay}))),(0,l.h)("slot",null),!this.hasDefaultSlot&&(0,l.h)("div",null,i),(0,l.h)("div",{"data-testid":"empty-state",class:this.emptyStateClass},(0,l.h)("div",{class:"col-span-full p-16 text-4"},(0,l.h)("slot",{name:"empty-state"},(0,l.h)("span",null,"No results found.")))),this.hasFooter&&(0,l.h)("div",{"data-testid":"table-footer",class:"table-footer"},(0,l.h)("div",{class:"col-span-full px-24 py-16 text-4"},(0,l.h)("slot",{name:"footer"}))),this.paginate&&(0,l.h)("div",{class:"pagination-row"},(0,l.h)("mx-pagination",{page:this.page,"rows-per-page":this.rowsPerPage,rowsPerPageOptions:this.rowsPerPageOptions,"total-rows":this.serverPaginate?this.totalRows:this.rows.length,class:"col-span-full p-0 rounded-b-2xl",onMxPageChange:this.onMxPageChange.bind(this),disabled:this.disablePagination,disableNextPage:this.disableNextPage}))))}},{key:"element",get:function(){return(0,l.g)(this)}}],[{key:"watchers",get:function(){return{sortBy:["onVisibleRowsChange","resetPage"],sortAscending:["onVisibleRowsChange","resetPage"],page:["onVisibleRowsChange","onPageChange"],rowsPerPage:["onVisibleRowsChange","resetPage"],rows:["onVisibleRowsChange","resetPage"]}}}]),e}()},4658:function(e,t,n){function s(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(e){var t=16*Math.random()|0;return("x"==e?t:3&t|8).toString(16)}))}function i(){var e=window.matchMedia("(prefers-reduced-motion: reduce)");return!e||e.matches}function r(e){return e.charAt(0).toUpperCase()+e.slice(1)}function o(e){return"object"===typeof e&&("getTime"in e&&!isNaN(e.getTime()))}function a(e){if(null!=e&&""!==e.trim()){var t=e.toLowerCase().includes("a"),n=e.toLowerCase().includes("p"),s=e.replace(/[^0-9]/g,"");if(!s.length||s.length>4)return null;var i=s.length<=2?Number(s):Number(s.slice(0,-2)),r=s.length<=2?0:Number(s.slice(-2));return 12===i&&t&&(i=0),i<12&&n&&(i+=12),i>23||r>59?null:{hours:i,minutes:r}}}function l(e){return e.changedTouches?e.changedTouches[0]:e.touches?e.touches[0]:e}function h(e){var t=e.getBoundingClientRect(),n=t.height,s=t.width,i=0,r=0;do{i+=e.offsetTop,r+=e.offsetLeft,e=e.offsetParent}while(e);return{top:i,left:r,width:s,height:n,bottom:i+n,right:r+s}}function c(e){return e===window?{top:0,right:window.innerWidth,bottom:window.innerHeight,left:0}:e.getBoundingClientRect()}function u(e){var t=e.getBoundingClientRect(),n=c(d(e));return t.top<n.top||(t.bottom>n.bottom||(t.left<n.left||t.left>n.right))}function d(e){return e instanceof HTMLElement?function(e){var t=window.getComputedStyle(e),n=/(auto|scroll)/;return["overflow","overflowX","overflowY"].find((function(e){return n.test(t[e])}))}(e)?e:d(e.parentNode):window}function g(){var e=this;Array.from(this.element.attributes).forEach((function(t){/^data-/.test(t.name)&&(e.element.removeAttribute(t.name),e.dataAttributes[t.name]=t.value)}))}n.d(t,{a:function(){return l},b:function(){return a},c:function(){return r},d:function(){return d},e:function(){return c},f:function(){return u},g:function(){return h},i:function(){return o},p:function(){return g},q:function(){return i},u:function(){return s}})}}]);
//# sourceMappingURL=938.9184fe13.chunk.js.map