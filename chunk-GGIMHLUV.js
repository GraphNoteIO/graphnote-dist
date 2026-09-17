import{b as Re,c as Pe,d as Le}from"./chunk-ORHXF2E2.js";import{B as ge,C as fe,E as ve,F as ye,G as xe,H as Te,I as Ie,M as we,N as Me,R as De,S as Se,b as Kt,c as Yt,d as Xt,f as Jt,g as te,j as ee,l as ne,m as ut}from"./chunk-HQIQ2UZ4.js";import{a as Ce,b as ke}from"./chunk-I7TFH7FE.js";import{$ as g,$a as p,$b as nt,A as St,Ab as B,Ac as Wt,Bb as ct,Bd as pe,Ca as Ot,Cd as ue,Dd as he,Ed as _e,Ga as P,Ha as Ft,Hb as j,Hc as $t,Ia as L,J as Rt,Jc as Ut,K as U,Kc as qt,L as Pt,La as N,M as A,Ma as lt,Na as At,Sb as D,T as Lt,Ta as zt,Ua as T,V as O,Vc as at,Wa as H,X as d,Xa as G,Ya as dt,Za as I,Zb as et,_a as w,_b as y,a as rt,aa as f,ab as o,ad as pt,bb as s,bd as Zt,c as kt,cb as E,d as R,da as ot,f as Tt,fd as ae,g as W,ha as x,hb as M,hd as ht,ia as z,j as It,jb as u,kc as Ht,kd as ie,l as wt,la as C,lb as b,ld as re,mb as Y,mc as mt,na as Et,nb as X,nc as Gt,oa as q,ob as J,oc as Vt,od as oe,pb as V,pc as Qt,pd as se,qa as F,qb as h,qd as le,ra as Bt,rb as _,rd as de,sc as bt,td as ce,u as Mt,v as $,va as c,vb as Q,w as Dt,wa as Z,wb as Nt,wc as jt,xa as K,xb as v,yb as tt,yd as me,za as st,zb as m,zd as be}from"./chunk-N6VKWKPO.js";var yt=["*"];function Ue(a,r){a&1&&X(0)}var qe=["tabListContainer"],Ze=["tabList"],Ke=["tabListInner"],Ye=["nextPaginator"],Xe=["previousPaginator"],Je=["content"];function tn(a,r){}var en=["tabBodyWrapper"],nn=["tabHeader"];function an(a,r){}function rn(a,r){if(a&1&&lt(0,an,0,0,"ng-template",12),a&2){let t=b().$implicit;p("cdkPortalOutlet",t.templateLabel)}}function on(a,r){if(a&1&&m(0),a&2){let t=b().$implicit;B(t.textLabel)}}function sn(a,r){if(a&1){let t=M();o(0,"div",7,2),u("click",function(){let n=g(t),i=n.$implicit,l=n.$index,k=b(),S=Q(1);return f(k._handleClick(i,S,l))})("cdkFocusChange",function(n){let i=g(t).$index,l=b();return f(l._tabFocusChanged(n,i))}),E(2,"span",8)(3,"div",9),o(4,"span",10)(5,"span",11),H(6,rn,1,1,null,12)(7,on,1,1),s()()()}if(a&2){let t=r.$implicit,e=r.$index,n=Q(1),i=b();tt(t.labelClass),v("mdc-tab--active",i.selectedIndex===e),p("id",i._getTabLabelId(t,e))("disabled",t.disabled)("fitInkBarToContent",i.fitInkBarToContent),T("tabIndex",i._getTabIndex(e))("aria-posinset",e+1)("aria-setsize",i._tabs.length)("aria-controls",i._getTabContentId(e))("aria-selected",i.selectedIndex===e)("aria-label",t.ariaLabel||null)("aria-labelledby",!t.ariaLabel&&t.ariaLabelledby?t.ariaLabelledby:null),c(3),p("matRippleTrigger",n)("matRippleDisabled",t.disabled||i.disableRipple),c(3),G(t.templateLabel?6:7)}}function ln(a,r){a&1&&X(0)}function dn(a,r){if(a&1){let t=M();o(0,"mat-tab-body",13),u("_onCentered",function(){g(t);let n=b();return f(n._removeTabBodyWrapperHeight())})("_onCentering",function(n){g(t);let i=b();return f(i._setTabBodyWrapperHeight(n))})("_beforeCentering",function(n){g(t);let i=b();return f(i._bodyCentered(n))}),s()}if(a&2){let t=r.$implicit,e=r.$index,n=b();tt(t.bodyClass),p("id",n._getTabContentId(e))("content",t.content)("position",t.position)("animationDuration",n.animationDuration)("preserveContent",n.preserveContent),T("tabindex",n.contentTabIndex!=null&&n.selectedIndex===e?n.contentTabIndex:null)("aria-labelledby",n._getTabLabelId(t,e))("aria-hidden",n.selectedIndex!==e)}}var cn=new O("MatTabContent"),mn=(()=>{class a{template=d(K);constructor(){}static \u0275fac=function(e){return new(e||a)};static \u0275dir=L({type:a,selectors:[["","matTabContent",""]],features:[j([{provide:cn,useExisting:a}])]})}return a})(),bn=new O("MatTabLabel"),Fe=new O("MAT_TAB"),pn=(()=>{class a extends ne{_closestTab=d(Fe,{optional:!0});static \u0275fac=(()=>{let t;return function(n){return(t||(t=q(a)))(n||a)}})();static \u0275dir=L({type:a,selectors:[["","mat-tab-label",""],["","matTabLabel",""]],features:[j([{provide:bn,useExisting:a}]),N]})}return a})(),Ae=new O("MAT_TAB_GROUP"),xt=(()=>{class a{_viewContainerRef=d(Ot);_closestTabGroup=d(Ae,{optional:!0});disabled=!1;get templateLabel(){return this._templateLabel}set templateLabel(t){this._setTemplateLabelInput(t)}_templateLabel;_explicitContent=void 0;_implicitContent;textLabel="";ariaLabel;ariaLabelledby;labelClass;bodyClass;id=null;_contentPortal=null;get content(){return this._contentPortal}_stateChanges=new W;position=null;origin=null;isActive=!1;constructor(){d(Ht).load(Zt)}ngOnChanges(t){(t.hasOwnProperty("textLabel")||t.hasOwnProperty("disabled"))&&this._stateChanges.next()}ngOnDestroy(){this._stateChanges.complete()}ngOnInit(){this._contentPortal=new ee(this._explicitContent||this._implicitContent,this._viewContainerRef)}_setTemplateLabelInput(t){t&&t._closestTab===this&&(this._templateLabel=t)}static \u0275fac=function(e){return new(e||a)};static \u0275cmp=P({type:a,selectors:[["mat-tab"]],contentQueries:function(e,n,i){if(e&1&&J(i,pn,5)(i,mn,7,K),e&2){let l;h(l=_())&&(n.templateLabel=l.first),h(l=_())&&(n._explicitContent=l.first)}},viewQuery:function(e,n){if(e&1&&V(K,7),e&2){let i;h(i=_())&&(n._implicitContent=i.first)}},hostAttrs:["hidden",""],hostVars:1,hostBindings:function(e,n){e&2&&T("id",null)},inputs:{disabled:[2,"disabled","disabled",y],textLabel:[0,"label","textLabel"],ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],labelClass:"labelClass",bodyClass:"bodyClass",id:"id"},exportAs:["matTab"],features:[j([{provide:Fe,useExisting:a}]),Et],ngContentSelectors:yt,decls:1,vars:0,template:function(e,n){e&1&&(Y(),At(0,Ue,1,0,"ng-template"))},encapsulation:2})}return a})(),_t="mdc-tab-indicator--active",Ee="mdc-tab-indicator--no-transition",gt=class{_items;_currentItem;constructor(r){this._items=r}hide(){this._items.forEach(r=>r.deactivateInkBar()),this._currentItem=void 0}alignToElement(r){let t=this._items.find(n=>n.elementRef.nativeElement===r),e=this._currentItem;if(t!==e&&(e?.deactivateInkBar(),t)){let n=e?.elementRef.nativeElement.getBoundingClientRect?.();t.activateInkBar(n),this._currentItem=t}}},un=(()=>{class a{_elementRef=d(F);_inkBarElement=null;_inkBarContentElement=null;_fitToContent=!1;get fitInkBarToContent(){return this._fitToContent}set fitInkBarToContent(t){this._fitToContent!==t&&(this._fitToContent=t,this._inkBarElement&&this._appendInkBarElement())}activateInkBar(t){let e=this._elementRef.nativeElement;if(!t||!e.getBoundingClientRect||!this._inkBarContentElement){e.classList.add(_t);return}let n=e.getBoundingClientRect(),i=t.width/n.width,l=t.left-n.left;e.classList.add(Ee),this._inkBarContentElement.style.setProperty("transform",`translateX(${l}px) scaleX(${i})`),e.getBoundingClientRect(),e.classList.remove(Ee),e.classList.add(_t),this._inkBarContentElement.style.setProperty("transform","")}deactivateInkBar(){this._elementRef.nativeElement.classList.remove(_t)}ngOnInit(){this._createInkBarElement()}ngOnDestroy(){this._inkBarElement?.remove(),this._inkBarElement=this._inkBarContentElement=null}_createInkBarElement(){let t=this._elementRef.nativeElement.ownerDocument||document,e=this._inkBarElement=t.createElement("span"),n=this._inkBarContentElement=t.createElement("span");e.className="mdc-tab-indicator",n.className="mdc-tab-indicator__content mdc-tab-indicator__content--underline",e.appendChild(this._inkBarContentElement),this._appendInkBarElement()}_appendInkBarElement(){this._inkBarElement;let t=this._fitToContent?this._elementRef.nativeElement.querySelector(".mdc-tab__content"):this._elementRef.nativeElement;t.appendChild(this._inkBarElement)}static \u0275fac=function(e){return new(e||a)};static \u0275dir=L({type:a,inputs:{fitInkBarToContent:[2,"fitInkBarToContent","fitInkBarToContent",y]}})}return a})();var ze=(()=>{class a extends un{elementRef=d(F);disabled=!1;focus(){this.elementRef.nativeElement.focus()}getOffsetLeft(){return this.elementRef.nativeElement.offsetLeft}getOffsetWidth(){return this.elementRef.nativeElement.offsetWidth}static \u0275fac=(()=>{let t;return function(n){return(t||(t=q(a)))(n||a)}})();static \u0275dir=L({type:a,selectors:[["","matTabLabelWrapper",""]],hostVars:3,hostBindings:function(e,n){e&2&&(T("aria-disabled",!!n.disabled),v("mat-mdc-tab-disabled",n.disabled))},inputs:{disabled:[2,"disabled","disabled",y]},features:[N]})}return a})(),Be={passive:!0},hn=650,_n=100,gn=(()=>{class a{_elementRef=d(F);_changeDetectorRef=d(et);_viewportRuler=d(te);_dir=d(mt,{optional:!0});_ngZone=d(z);_platform=d(bt);_sharedResizeObserver=d(Te);_injector=d(ot);_renderer=d(st);_animationsDisabled=at();_eventCleanups;_scrollDistance=0;_selectedIndexChanged=!1;_destroyed=new W;_showPaginationControls=!1;_disableScrollAfter=!0;_disableScrollBefore=!0;_tabLabelCount;_scrollDistanceChanged=!1;_keyManager;_currentTextContent;_stopScrolling=new W;disablePagination=!1;get selectedIndex(){return this._selectedIndex}set selectedIndex(t){let e=isNaN(t)?0:t;this._selectedIndex!=e&&(this._selectedIndexChanged=!0,this._selectedIndex=e,this._keyManager&&this._keyManager.updateActiveItem(e))}_selectedIndex=0;selectFocusedIndex=new x;indexFocused=new x;constructor(){this._eventCleanups=this._ngZone.runOutsideAngular(()=>[this._renderer.listen(this._elementRef.nativeElement,"mouseleave",()=>this._stopInterval())])}ngAfterViewInit(){this._eventCleanups.push(this._renderer.listen(this._previousPaginator.nativeElement,"touchstart",()=>this._handlePaginatorPress("before"),Be),this._renderer.listen(this._nextPaginator.nativeElement,"touchstart",()=>this._handlePaginatorPress("after"),Be))}ngAfterContentInit(){let t=this._dir?this._dir.change:wt("ltr"),e=this._sharedResizeObserver.observe(this._elementRef.nativeElement).pipe(St(32),A(this._destroyed)),n=this._viewportRuler.change(150).pipe(A(this._destroyed)),i=()=>{this.updatePagination(),this._alignInkBarToSelectedTab()};this._keyManager=new Ut(this._items).withHorizontalOrientation(this._getLayoutDirection()).withHomeAndEnd().withWrap().skipPredicate(()=>!1),this._keyManager.updateActiveItem(Math.max(this._selectedIndex,0)),Z(i,{injector:this._injector}),$(t,n,e,this._items.changes,this._itemsResized()).pipe(A(this._destroyed)).subscribe(()=>{this._ngZone.run(()=>{Promise.resolve().then(()=>{this._scrollDistance=Math.max(0,Math.min(this._getMaxScrollDistance(),this._scrollDistance)),i()})}),this._keyManager?.withHorizontalOrientation(this._getLayoutDirection())}),this._keyManager.change.subscribe(l=>{this.indexFocused.emit(l),this._setTabFocus(l)})}_itemsResized(){return typeof ResizeObserver!="function"?It:this._items.changes.pipe(U(this._items),Pt(t=>new Tt(e=>this._ngZone.runOutsideAngular(()=>{let n=new ResizeObserver(i=>e.next(i));return t.forEach(i=>n.observe(i.elementRef.nativeElement)),()=>{n.disconnect()}}))),Rt(1),Dt(t=>t.some(e=>e.contentRect.width>0&&e.contentRect.height>0)))}ngAfterContentChecked(){this._tabLabelCount!=this._items.length&&(this.updatePagination(),this._tabLabelCount=this._items.length,this._changeDetectorRef.markForCheck()),this._selectedIndexChanged&&(this._scrollToLabel(this._selectedIndex),this._checkScrollingControls(),this._alignInkBarToSelectedTab(),this._selectedIndexChanged=!1,this._changeDetectorRef.markForCheck()),this._scrollDistanceChanged&&(this._updateTabScrollPosition(),this._scrollDistanceChanged=!1,this._changeDetectorRef.markForCheck())}ngOnDestroy(){this._eventCleanups.forEach(t=>t()),this._keyManager?.destroy(),this._destroyed.next(),this._destroyed.complete(),this._stopScrolling.complete()}_handleKeydown(t){if(!$t(t))switch(t.keyCode){case 13:case 32:if(this.focusIndex!==this.selectedIndex){let e=this._items.get(this.focusIndex);e&&!e.disabled&&(this.selectFocusedIndex.emit(this.focusIndex),this._itemSelected(t))}break;default:this._keyManager?.onKeydown(t)}}_onContentChanges(){let t=this._elementRef.nativeElement.textContent;t!==this._currentTextContent&&(this._currentTextContent=t||"",this._ngZone.run(()=>{this.updatePagination(),this._alignInkBarToSelectedTab(),this._changeDetectorRef.markForCheck()}))}updatePagination(){this._checkPaginationEnabled(),this._checkScrollingControls(),this._updateTabScrollPosition()}get focusIndex(){return this._keyManager?this._keyManager.activeItemIndex:0}set focusIndex(t){!this._isValidIndex(t)||this.focusIndex===t||!this._keyManager||this._keyManager.setActiveItem(t)}_isValidIndex(t){return this._items?!!this._items.toArray()[t]:!0}_setTabFocus(t){if(this._showPaginationControls&&this._scrollToLabel(t),this._items&&this._items.length){this._items.toArray()[t].focus();let e=this._tabListContainer.nativeElement;this._getLayoutDirection()=="ltr"?e.scrollLeft=0:e.scrollLeft=e.scrollWidth-e.offsetWidth}}_getLayoutDirection(){return this._dir&&this._dir.value==="rtl"?"rtl":"ltr"}_updateTabScrollPosition(){if(this.disablePagination)return;let t=this.scrollDistance,e=this._getLayoutDirection()==="ltr"?-t:t;this._tabList.nativeElement.style.transform=`translateX(${Math.round(e)}px)`,(this._platform.TRIDENT||this._platform.EDGE)&&(this._tabListContainer.nativeElement.scrollLeft=0)}get scrollDistance(){return this._scrollDistance}set scrollDistance(t){this._scrollTo(t)}_scrollHeader(t){let e=this._tabListContainer.nativeElement.offsetWidth,n=(t=="before"?-1:1)*e/3;return this._scrollTo(this._scrollDistance+n)}_handlePaginatorClick(t){this._stopInterval(),this._scrollHeader(t)}_scrollToLabel(t){if(this.disablePagination)return;let e=this._items?this._items.toArray()[t]:null;if(!e)return;let n=this._tabListContainer.nativeElement.offsetWidth,{offsetLeft:i,offsetWidth:l}=e.elementRef.nativeElement,k,S;this._getLayoutDirection()=="ltr"?(k=i,S=k+l):(S=this._tabListInner.nativeElement.offsetWidth-i,k=S-l);let it=this.scrollDistance,Ct=this.scrollDistance+n;k<it?this.scrollDistance-=it-k:S>Ct&&(this.scrollDistance+=Math.min(S-Ct,k-it))}_checkPaginationEnabled(){if(this.disablePagination)this._showPaginationControls=!1;else{let t=this._tabListInner.nativeElement.scrollWidth,e=this._elementRef.nativeElement.offsetWidth,n=t-e>=5;n||(this.scrollDistance=0),n!==this._showPaginationControls&&(this._showPaginationControls=n,this._changeDetectorRef.markForCheck())}}_checkScrollingControls(){this.disablePagination?this._disableScrollAfter=this._disableScrollBefore=!0:(this._disableScrollBefore=this.scrollDistance==0,this._disableScrollAfter=this.scrollDistance==this._getMaxScrollDistance(),this._changeDetectorRef.markForCheck())}_getMaxScrollDistance(){let t=this._tabListInner.nativeElement.scrollWidth,e=this._tabListContainer.nativeElement.offsetWidth;return t-e||0}_alignInkBarToSelectedTab(){let t=this._items&&this._items.length?this._items.toArray()[this.selectedIndex]:null,e=t?t.elementRef.nativeElement:null;e?this._inkBar.alignToElement(e):this._inkBar.hide()}_stopInterval(){this._stopScrolling.next()}_handlePaginatorPress(t,e){e&&e.button!=null&&e.button!==0||(this._stopInterval(),Mt(hn,_n).pipe(A($(this._stopScrolling,this._destroyed))).subscribe(()=>{let{maxScrollDistance:n,distance:i}=this._scrollHeader(t);(i===0||i>=n)&&this._stopInterval()}))}_scrollTo(t){if(this.disablePagination)return{maxScrollDistance:0,distance:0};let e=this._getMaxScrollDistance();return this._scrollDistance=Math.max(0,Math.min(e,t)),this._scrollDistanceChanged=!0,this._checkScrollingControls(),{maxScrollDistance:e,distance:this._scrollDistance}}static \u0275fac=function(e){return new(e||a)};static \u0275dir=L({type:a,inputs:{disablePagination:[2,"disablePagination","disablePagination",y],selectedIndex:[2,"selectedIndex","selectedIndex",nt]},outputs:{selectFocusedIndex:"selectFocusedIndex",indexFocused:"indexFocused"}})}return a})(),fn=(()=>{class a extends gn{_items;_tabListContainer;_tabList;_tabListInner;_nextPaginator;_previousPaginator;_inkBar;ariaLabel;ariaLabelledby;disableRipple=!1;ngAfterContentInit(){this._inkBar=new gt(this._items),super.ngAfterContentInit()}_itemSelected(t){t.preventDefault()}static \u0275fac=(()=>{let t;return function(n){return(t||(t=q(a)))(n||a)}})();static \u0275cmp=P({type:a,selectors:[["mat-tab-header"]],contentQueries:function(e,n,i){if(e&1&&J(i,ze,4),e&2){let l;h(l=_())&&(n._items=l)}},viewQuery:function(e,n){if(e&1&&V(qe,7)(Ze,7)(Ke,7)(Ye,5)(Xe,5),e&2){let i;h(i=_())&&(n._tabListContainer=i.first),h(i=_())&&(n._tabList=i.first),h(i=_())&&(n._tabListInner=i.first),h(i=_())&&(n._nextPaginator=i.first),h(i=_())&&(n._previousPaginator=i.first)}},hostAttrs:[1,"mat-mdc-tab-header"],hostVars:4,hostBindings:function(e,n){e&2&&v("mat-mdc-tab-header-pagination-controls-enabled",n._showPaginationControls)("mat-mdc-tab-header-rtl",n._getLayoutDirection()=="rtl")},inputs:{ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],disableRipple:[2,"disableRipple","disableRipple",y]},features:[N],ngContentSelectors:yt,decls:13,vars:10,consts:[["previousPaginator",""],["tabListContainer",""],["tabList",""],["tabListInner",""],["nextPaginator",""],["mat-ripple","",1,"mat-mdc-tab-header-pagination","mat-mdc-tab-header-pagination-before",3,"click","mousedown","touchend","matRippleDisabled"],[1,"mat-mdc-tab-header-pagination-chevron"],[1,"mat-mdc-tab-label-container",3,"keydown"],["role","tablist",1,"mat-mdc-tab-list",3,"cdkObserveContent"],[1,"mat-mdc-tab-labels"],["mat-ripple","",1,"mat-mdc-tab-header-pagination","mat-mdc-tab-header-pagination-after",3,"mousedown","click","touchend","matRippleDisabled"]],template:function(e,n){e&1&&(Y(),o(0,"div",5,0),u("click",function(){return n._handlePaginatorClick("before")})("mousedown",function(l){return n._handlePaginatorPress("before",l)})("touchend",function(){return n._stopInterval()}),E(2,"div",6),s(),o(3,"div",7,1),u("keydown",function(l){return n._handleKeydown(l)}),o(5,"div",8,2),u("cdkObserveContent",function(){return n._onContentChanges()}),o(7,"div",9,3),X(9),s()()(),o(10,"div",10,4),u("mousedown",function(l){return n._handlePaginatorPress("after",l)})("click",function(){return n._handlePaginatorClick("after")})("touchend",function(){return n._stopInterval()}),E(12,"div",6),s()),e&2&&(v("mat-mdc-tab-header-pagination-disabled",n._disableScrollBefore),p("matRippleDisabled",n._disableScrollBefore||n.disableRipple),c(3),v("_mat-animation-noopable",n._animationsDisabled),c(2),T("aria-label",n.ariaLabel||null)("aria-labelledby",n.ariaLabelledby||null),c(5),v("mat-mdc-tab-header-pagination-disabled",n._disableScrollAfter),p("matRippleDisabled",n._disableScrollAfter||n.disableRipple))},dependencies:[pt,Wt],styles:[`.mat-mdc-tab-header {
  display: flex;
  overflow: hidden;
  position: relative;
  flex-shrink: 0;
}

.mdc-tab-indicator .mdc-tab-indicator__content {
  transition-duration: var(--mat-tab-animation-duration, 250ms);
}

.mat-mdc-tab-header-pagination {
  -webkit-user-select: none;
  user-select: none;
  position: relative;
  display: none;
  justify-content: center;
  align-items: center;
  min-width: 32px;
  cursor: pointer;
  z-index: 2;
  -webkit-tap-highlight-color: transparent;
  touch-action: none;
  box-sizing: content-box;
  outline: 0;
}
.mat-mdc-tab-header-pagination::-moz-focus-inner {
  border: 0;
}
.mat-mdc-tab-header-pagination .mat-ripple-element {
  opacity: 0.12;
  background-color: var(--mat-tab-inactive-ripple-color, var(--mat-sys-on-surface));
}
.mat-mdc-tab-header-pagination-controls-enabled .mat-mdc-tab-header-pagination {
  display: flex;
}

.mat-mdc-tab-header-pagination-before,
.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-after {
  padding-left: 4px;
}
.mat-mdc-tab-header-pagination-before .mat-mdc-tab-header-pagination-chevron,
.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-after .mat-mdc-tab-header-pagination-chevron {
  transform: rotate(-135deg);
}

.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-before,
.mat-mdc-tab-header-pagination-after {
  padding-right: 4px;
}
.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-before .mat-mdc-tab-header-pagination-chevron,
.mat-mdc-tab-header-pagination-after .mat-mdc-tab-header-pagination-chevron {
  transform: rotate(45deg);
}

.mat-mdc-tab-header-pagination-chevron {
  border-style: solid;
  border-width: 2px 2px 0 0;
  height: 8px;
  width: 8px;
  border-color: var(--mat-tab-pagination-icon-color, var(--mat-sys-on-surface));
}

.mat-mdc-tab-header-pagination-disabled {
  box-shadow: none;
  cursor: default;
  pointer-events: none;
}
.mat-mdc-tab-header-pagination-disabled .mat-mdc-tab-header-pagination-chevron {
  opacity: 0.4;
}

.mat-mdc-tab-list {
  flex-grow: 1;
  position: relative;
  transition: transform 500ms cubic-bezier(0.35, 0, 0.25, 1);
}
._mat-animation-noopable .mat-mdc-tab-list {
  transition: none;
}

.mat-mdc-tab-label-container {
  display: flex;
  flex-grow: 1;
  overflow: hidden;
  z-index: 1;
  border-bottom-style: solid;
  border-bottom-width: var(--mat-tab-divider-height, 1px);
  border-bottom-color: var(--mat-tab-divider-color, var(--mat-sys-surface-variant));
}
.mat-mdc-tab-group-inverted-header .mat-mdc-tab-label-container {
  border-bottom: none;
  border-top-style: solid;
  border-top-width: var(--mat-tab-divider-height, 1px);
  border-top-color: var(--mat-tab-divider-color, var(--mat-sys-surface-variant));
}

.mat-mdc-tab-labels {
  display: flex;
  flex: 1 0 auto;
}
[mat-align-tabs=center] > .mat-mdc-tab-header .mat-mdc-tab-labels {
  justify-content: center;
}
[mat-align-tabs=end] > .mat-mdc-tab-header .mat-mdc-tab-labels {
  justify-content: flex-end;
}
.cdk-drop-list .mat-mdc-tab-labels, .mat-mdc-tab-labels.cdk-drop-list {
  min-height: var(--mat-tab-container-height, 48px);
}

.mat-mdc-tab::before {
  margin: 5px;
}
@media (forced-colors: active) {
  .mat-mdc-tab[aria-disabled=true] {
    color: GrayText;
  }
}
`],encapsulation:2})}return a})(),vn=new O("MAT_TABS_CONFIG"),Oe=(()=>{class a extends ut{_host=d(ft);_ngZone=d(z);_centeringSub=R.EMPTY;_leavingSub=R.EMPTY;constructor(){super()}ngOnInit(){super.ngOnInit(),this._centeringSub=this._host._beforeCentering.pipe(U(this._host._isCenterPosition())).subscribe(t=>{this._host._content&&t&&!this.hasAttached()&&this._ngZone.run(()=>{Promise.resolve().then(),this.attach(this._host._content)})}),this._leavingSub=this._host._afterLeavingCenter.subscribe(()=>{this._host.preserveContent||this._ngZone.run(()=>this.detach())})}ngOnDestroy(){super.ngOnDestroy(),this._centeringSub.unsubscribe(),this._leavingSub.unsubscribe()}static \u0275fac=function(e){return new(e||a)};static \u0275dir=L({type:a,selectors:[["","matTabBodyHost",""]],features:[N]})}return a})(),ft=(()=>{class a{_elementRef=d(F);_dir=d(mt,{optional:!0});_ngZone=d(z);_injector=d(ot);_renderer=d(st);_diAnimationsDisabled=at();_eventCleanups;_initialized=!1;_fallbackTimer;_positionIndex;_dirChangeSubscription=R.EMPTY;_position;_previousPosition;_onCentering=new x;_beforeCentering=new x;_afterLeavingCenter=new x;_onCentered=new x(!0);_portalHost;_contentElement;_content;animationDuration="500ms";preserveContent=!1;set position(t){this._positionIndex=t,this._computePositionAnimationState()}constructor(){if(this._dir){let t=d(et);this._dirChangeSubscription=this._dir.change.subscribe(e=>{this._computePositionAnimationState(e),t.markForCheck()})}}ngOnInit(){this._bindTransitionEvents(),this._position==="center"&&(this._setActiveClass(!0),Z(()=>this._onCentering.emit(this._elementRef.nativeElement.clientHeight),{injector:this._injector})),this._initialized=!0}ngOnDestroy(){clearTimeout(this._fallbackTimer),this._eventCleanups?.forEach(t=>t()),this._dirChangeSubscription.unsubscribe()}_bindTransitionEvents(){this._ngZone.runOutsideAngular(()=>{let t=this._elementRef.nativeElement,e=n=>{n.target===this._contentElement?.nativeElement&&(this._elementRef.nativeElement.classList.remove("mat-tab-body-animating"),n.type==="transitionend"&&this._transitionDone())};this._eventCleanups=[this._renderer.listen(t,"transitionstart",n=>{n.target===this._contentElement?.nativeElement&&(this._elementRef.nativeElement.classList.add("mat-tab-body-animating"),this._transitionStarted())}),this._renderer.listen(t,"transitionend",e),this._renderer.listen(t,"transitioncancel",e)]})}_transitionStarted(){clearTimeout(this._fallbackTimer);let t=this._position==="center";this._beforeCentering.emit(t),t&&this._onCentering.emit(this._elementRef.nativeElement.clientHeight)}_transitionDone(){this._position==="center"?this._onCentered.emit():this._previousPosition==="center"&&this._afterLeavingCenter.emit()}_setActiveClass(t){this._elementRef.nativeElement.classList.toggle("mat-mdc-tab-body-active",t)}_getLayoutDirection(){return this._dir&&this._dir.value==="rtl"?"rtl":"ltr"}_isCenterPosition(){return this._positionIndex===0}_computePositionAnimationState(t=this._getLayoutDirection()){this._previousPosition=this._position,this._positionIndex<0?this._position=t=="ltr"?"left":"right":this._positionIndex>0?this._position=t=="ltr"?"right":"left":this._position="center",this._animationsDisabled()?this._simulateTransitionEvents():this._initialized&&(this._position==="center"||this._previousPosition==="center")&&(clearTimeout(this._fallbackTimer),this._fallbackTimer=this._ngZone.runOutsideAngular(()=>setTimeout(()=>this._simulateTransitionEvents(),100)))}_simulateTransitionEvents(){this._transitionStarted(),Z(()=>this._transitionDone(),{injector:this._injector})}_animationsDisabled(){return this._diAnimationsDisabled||this.animationDuration==="0ms"||this.animationDuration==="0s"}static \u0275fac=function(e){return new(e||a)};static \u0275cmp=P({type:a,selectors:[["mat-tab-body"]],viewQuery:function(e,n){if(e&1&&V(Oe,5)(Je,5),e&2){let i;h(i=_())&&(n._portalHost=i.first),h(i=_())&&(n._contentElement=i.first)}},hostAttrs:[1,"mat-mdc-tab-body"],hostVars:1,hostBindings:function(e,n){e&2&&T("inert",n._position==="center"?null:"")},inputs:{_content:[0,"content","_content"],animationDuration:"animationDuration",preserveContent:"preserveContent",position:"position"},outputs:{_onCentering:"_onCentering",_beforeCentering:"_beforeCentering",_onCentered:"_onCentered"},decls:3,vars:6,consts:[["content",""],["cdkScrollable","",1,"mat-mdc-tab-body-content"],["matTabBodyHost",""]],template:function(e,n){e&1&&(o(0,"div",1,0),lt(2,tn,0,0,"ng-template",2),s()),e&2&&v("mat-tab-body-content-left",n._position==="left")("mat-tab-body-content-right",n._position==="right")("mat-tab-body-content-can-animate",n._position==="center"||n._previousPosition==="center")},dependencies:[Oe,Jt],styles:[`.mat-mdc-tab-body {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  display: block;
  overflow: hidden;
  outline: 0;
  flex-basis: 100%;
}
.mat-mdc-tab-body.mat-mdc-tab-body-active {
  position: relative;
  overflow-x: hidden;
  overflow-y: auto;
  z-index: 1;
  flex-grow: 1;
}
.mat-mdc-tab-group.mat-mdc-tab-group-dynamic-height .mat-mdc-tab-body.mat-mdc-tab-body-active {
  overflow-y: hidden;
}

.mat-mdc-tab-body-content {
  height: 100%;
  overflow: auto;
  transform: none;
  visibility: hidden;
}
.mat-tab-body-animating > .mat-mdc-tab-body-content, .mat-mdc-tab-body-active > .mat-mdc-tab-body-content {
  visibility: visible;
}
.mat-tab-body-animating > .mat-mdc-tab-body-content {
  min-height: 1px;
}
.mat-mdc-tab-group-dynamic-height .mat-mdc-tab-body-content {
  overflow: hidden;
}

.mat-tab-body-content-can-animate {
  transition: transform var(--mat-tab-animation-duration) 1ms cubic-bezier(0.35, 0, 0.25, 1);
}
.mat-mdc-tab-body-wrapper._mat-animation-noopable .mat-tab-body-content-can-animate {
  transition: none;
}

.mat-tab-body-content-left {
  transform: translate3d(-100%, 0, 0);
}

.mat-tab-body-content-right {
  transform: translate3d(100%, 0, 0);
}
`],encapsulation:2})}return a})(),Ne=(()=>{class a{_elementRef=d(F);_changeDetectorRef=d(et);_ngZone=d(z);_tabsSubscription=R.EMPTY;_tabLabelSubscription=R.EMPTY;_tabBodySubscription=R.EMPTY;_diAnimationsDisabled=at();_allTabs;_tabBodies;_tabBodyWrapper;_tabHeader;_tabs=new Bt;_indexToSelect=0;_lastFocusedTabIndex=null;_tabBodyWrapperHeight=0;color;get fitInkBarToContent(){return this._fitInkBarToContent}set fitInkBarToContent(t){this._fitInkBarToContent=t,this._changeDetectorRef.markForCheck()}_fitInkBarToContent=!1;stretchTabs=!0;alignTabs=null;dynamicHeight=!1;get selectedIndex(){return this._selectedIndex}set selectedIndex(t){this._indexToSelect=isNaN(t)?null:t}_selectedIndex=null;headerPosition="above";get animationDuration(){return this._animationDuration}set animationDuration(t){let e=t+"";this._animationDuration=/^\d+$/.test(e)?t+"ms":e}_animationDuration;get contentTabIndex(){return this._contentTabIndex}set contentTabIndex(t){this._contentTabIndex=isNaN(t)?null:t}_contentTabIndex=null;disablePagination=!1;disableRipple=!1;preserveContent=!1;get backgroundColor(){return this._backgroundColor}set backgroundColor(t){let e=this._elementRef.nativeElement.classList;e.remove("mat-tabs-with-background",`mat-background-${this.backgroundColor}`),t&&e.add("mat-tabs-with-background",`mat-background-${t}`),this._backgroundColor=t}_backgroundColor;ariaLabel;ariaLabelledby;selectedIndexChange=new x;focusChange=new x;animationDone=new x;selectedTabChange=new x(!0);_groupId;_isServer=!d(bt).isBrowser;constructor(){let t=d(vn,{optional:!0});this._groupId=d(qt).getId("mat-tab-group-"),this.animationDuration=t&&t.animationDuration?t.animationDuration:"500ms",this.disablePagination=t&&t.disablePagination!=null?t.disablePagination:!1,this.dynamicHeight=t&&t.dynamicHeight!=null?t.dynamicHeight:!1,t?.contentTabIndex!=null&&(this.contentTabIndex=t.contentTabIndex),this.preserveContent=!!t?.preserveContent,this.fitInkBarToContent=t&&t.fitInkBarToContent!=null?t.fitInkBarToContent:!1,this.stretchTabs=t&&t.stretchTabs!=null?t.stretchTabs:!0,this.alignTabs=t&&t.alignTabs!=null?t.alignTabs:null}ngAfterContentChecked(){let t=this._indexToSelect=this._clampTabIndex(this._indexToSelect);if(this._selectedIndex!=t){let e=this._selectedIndex==null;if(!e){this.selectedTabChange.emit(this._createChangeEvent(t));let n=this._tabBodyWrapper.nativeElement;n.style.minHeight=n.clientHeight+"px"}Promise.resolve().then(()=>{this._tabs.forEach((n,i)=>n.isActive=i===t),e||(this.selectedIndexChange.emit(t),this._tabBodyWrapper.nativeElement.style.minHeight="")})}this._tabs.forEach((e,n)=>{e.position=n-t,this._selectedIndex!=null&&e.position==0&&!e.origin&&(e.origin=t-this._selectedIndex)}),this._selectedIndex!==t&&(this._selectedIndex=t,this._lastFocusedTabIndex=null,this._changeDetectorRef.markForCheck())}ngAfterContentInit(){this._subscribeToAllTabChanges(),this._subscribeToTabLabels(),this._tabsSubscription=this._tabs.changes.subscribe(()=>{let t=this._clampTabIndex(this._indexToSelect);if(t===this._selectedIndex){let e=this._tabs.toArray(),n;for(let i=0;i<e.length;i++)if(e[i].isActive){this._indexToSelect=this._selectedIndex=i,this._lastFocusedTabIndex=null,n=e[i];break}!n&&e[t]&&Promise.resolve().then(()=>{e[t].isActive=!0,this.selectedTabChange.emit(this._createChangeEvent(t))})}this._changeDetectorRef.markForCheck()})}ngAfterViewInit(){this._tabBodySubscription=this._tabBodies.changes.subscribe(()=>this._bodyCentered(!0))}_subscribeToAllTabChanges(){this._allTabs.changes.pipe(U(this._allTabs)).subscribe(t=>{this._tabs.reset(t.filter(e=>e._closestTabGroup===this||!e._closestTabGroup)),this._tabs.notifyOnChanges()})}ngOnDestroy(){this._tabs.destroy(),this._tabsSubscription.unsubscribe(),this._tabLabelSubscription.unsubscribe(),this._tabBodySubscription.unsubscribe()}realignInkBar(){this._tabHeader&&this._tabHeader._alignInkBarToSelectedTab()}updatePagination(){this._tabHeader&&this._tabHeader.updatePagination()}focusTab(t){let e=this._tabHeader;e&&(e.focusIndex=t)}_focusChanged(t){this._lastFocusedTabIndex=t,this.focusChange.emit(this._createChangeEvent(t))}_createChangeEvent(t){let e=new vt;return e.index=t,this._tabs&&this._tabs.length&&(e.tab=this._tabs.toArray()[t]),e}_subscribeToTabLabels(){this._tabLabelSubscription&&this._tabLabelSubscription.unsubscribe(),this._tabLabelSubscription=$(...this._tabs.map(t=>t._stateChanges)).subscribe(()=>this._changeDetectorRef.markForCheck())}_clampTabIndex(t){return Math.min(this._tabs.length-1,Math.max(t||0,0))}_getTabLabelId(t,e){return t.id||`${this._groupId}-label-${e}`}_getTabContentId(t){return`${this._groupId}-content-${t}`}_setTabBodyWrapperHeight(t){if(!this.dynamicHeight||!this._tabBodyWrapperHeight){this._tabBodyWrapperHeight=t;return}let e=this._tabBodyWrapper.nativeElement;e.style.height=this._tabBodyWrapperHeight+"px",this._tabBodyWrapper.nativeElement.offsetHeight&&(e.style.height=t+"px")}_removeTabBodyWrapperHeight(){let t=this._tabBodyWrapper.nativeElement;this._tabBodyWrapperHeight=t.clientHeight,t.style.height="",this._ngZone.run(()=>this.animationDone.emit())}_handleClick(t,e,n){e.focusIndex=n,t.disabled||(this.selectedIndex=n)}_getTabIndex(t){let e=this._lastFocusedTabIndex??this.selectedIndex;return t===e?0:-1}_tabFocusChanged(t,e){t&&t!=="mouse"&&t!=="touch"&&(this._tabHeader.focusIndex=e)}_bodyCentered(t){t&&this._tabBodies?.forEach((e,n)=>e._setActiveClass(n===this._selectedIndex))}_animationsDisabled(){return this._diAnimationsDisabled||this.animationDuration==="0"||this.animationDuration==="0ms"}static \u0275fac=function(e){return new(e||a)};static \u0275cmp=P({type:a,selectors:[["mat-tab-group"]],contentQueries:function(e,n,i){if(e&1&&J(i,xt,5),e&2){let l;h(l=_())&&(n._allTabs=l)}},viewQuery:function(e,n){if(e&1&&V(en,5)(nn,5)(ft,5),e&2){let i;h(i=_())&&(n._tabBodyWrapper=i.first),h(i=_())&&(n._tabHeader=i.first),h(i=_())&&(n._tabBodies=i)}},hostAttrs:[1,"mat-mdc-tab-group"],hostVars:11,hostBindings:function(e,n){e&2&&(T("mat-align-tabs",n.alignTabs),tt("mat-"+(n.color||"primary")),Nt("--mat-tab-animation-duration",n.animationDuration),v("mat-mdc-tab-group-dynamic-height",n.dynamicHeight)("mat-mdc-tab-group-inverted-header",n.headerPosition==="below")("mat-mdc-tab-group-stretch-tabs",n.stretchTabs))},inputs:{color:"color",fitInkBarToContent:[2,"fitInkBarToContent","fitInkBarToContent",y],stretchTabs:[2,"mat-stretch-tabs","stretchTabs",y],alignTabs:[0,"mat-align-tabs","alignTabs"],dynamicHeight:[2,"dynamicHeight","dynamicHeight",y],selectedIndex:[2,"selectedIndex","selectedIndex",nt],headerPosition:"headerPosition",animationDuration:"animationDuration",contentTabIndex:[2,"contentTabIndex","contentTabIndex",nt],disablePagination:[2,"disablePagination","disablePagination",y],disableRipple:[2,"disableRipple","disableRipple",y],preserveContent:[2,"preserveContent","preserveContent",y],backgroundColor:"backgroundColor",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"]},outputs:{selectedIndexChange:"selectedIndexChange",focusChange:"focusChange",animationDone:"animationDone",selectedTabChange:"selectedTabChange"},exportAs:["matTabGroup"],features:[j([{provide:Ae,useExisting:a}])],ngContentSelectors:yt,decls:9,vars:8,consts:[["tabHeader",""],["tabBodyWrapper",""],["tabNode",""],[3,"indexFocused","selectFocusedIndex","selectedIndex","disableRipple","disablePagination","aria-label","aria-labelledby"],["role","tab","matTabLabelWrapper","","cdkMonitorElementFocus","",1,"mdc-tab","mat-mdc-tab","mat-focus-indicator",3,"id","mdc-tab--active","class","disabled","fitInkBarToContent"],[1,"mat-mdc-tab-body-wrapper"],["role","tabpanel",3,"id","class","content","position","animationDuration","preserveContent"],["role","tab","matTabLabelWrapper","","cdkMonitorElementFocus","",1,"mdc-tab","mat-mdc-tab","mat-focus-indicator",3,"click","cdkFocusChange","id","disabled","fitInkBarToContent"],[1,"mdc-tab__ripple"],["mat-ripple","",1,"mat-mdc-tab-ripple",3,"matRippleTrigger","matRippleDisabled"],[1,"mdc-tab__content"],[1,"mdc-tab__text-label"],[3,"cdkPortalOutlet"],["role","tabpanel",3,"_onCentered","_onCentering","_beforeCentering","id","content","position","animationDuration","preserveContent"]],template:function(e,n){e&1&&(Y(),o(0,"mat-tab-header",3,0),u("indexFocused",function(l){return n._focusChanged(l)})("selectFocusedIndex",function(l){return n.selectedIndex=l}),I(2,sn,8,17,"div",4,dt),s(),H(4,ln,1,0),o(5,"div",5,1),I(7,dn,1,10,"mat-tab-body",6,dt),s()),e&2&&(p("selectedIndex",n.selectedIndex||0)("disableRipple",n.disableRipple)("disablePagination",n.disablePagination),zt("aria-label",n.ariaLabel)("aria-labelledby",n.ariaLabelledby),c(2),w(n._tabs),c(2),G(n._isServer?4:-1),c(),v("_mat-animation-noopable",n._animationsDisabled()),c(2),w(n._tabs))},dependencies:[fn,ze,jt,pt,ut,ft],styles:[`.mdc-tab {
  min-width: 90px;
  padding: 0 24px;
  display: flex;
  flex: 1 0 auto;
  justify-content: center;
  box-sizing: border-box;
  border: none;
  outline: none;
  text-align: center;
  white-space: nowrap;
  cursor: pointer;
  z-index: 1;
  touch-action: manipulation;
}

.mdc-tab__content {
  display: flex;
  align-items: center;
  justify-content: center;
  height: inherit;
  pointer-events: none;
}

.mdc-tab__text-label {
  transition: 150ms color linear;
  display: inline-block;
  line-height: 1;
  z-index: 2;
}

.mdc-tab--active .mdc-tab__text-label {
  transition-delay: 100ms;
}

._mat-animation-noopable .mdc-tab__text-label {
  transition: none;
}

.mdc-tab-indicator {
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  justify-content: center;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1;
}

.mdc-tab-indicator__content {
  transition: var(--mat-tab-animation-duration, 250ms) transform cubic-bezier(0.4, 0, 0.2, 1);
  transform-origin: left;
  opacity: 0;
}

.mdc-tab-indicator__content--underline {
  align-self: flex-end;
  box-sizing: border-box;
  width: 100%;
  border-top-style: solid;
}

.mdc-tab-indicator--active .mdc-tab-indicator__content {
  opacity: 1;
}

._mat-animation-noopable .mdc-tab-indicator__content, .mdc-tab-indicator--no-transition .mdc-tab-indicator__content {
  transition: none;
}

.mat-mdc-tab-ripple.mat-mdc-tab-ripple {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  pointer-events: none;
}

.mat-mdc-tab {
  -webkit-tap-highlight-color: transparent;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-decoration: none;
  background: none;
  height: var(--mat-tab-container-height, 48px);
  font-family: var(--mat-tab-label-text-font, var(--mat-sys-title-small-font));
  font-size: var(--mat-tab-label-text-size, var(--mat-sys-title-small-size));
  letter-spacing: var(--mat-tab-label-text-tracking, var(--mat-sys-title-small-tracking));
  line-height: var(--mat-tab-label-text-line-height, var(--mat-sys-title-small-line-height));
  font-weight: var(--mat-tab-label-text-weight, var(--mat-sys-title-small-weight));
}
.mat-mdc-tab.mdc-tab {
  flex-grow: 0;
}
.mat-mdc-tab .mdc-tab-indicator__content--underline {
  border-color: var(--mat-tab-active-indicator-color, var(--mat-sys-primary));
  border-top-width: var(--mat-tab-active-indicator-height, 2px);
  border-radius: var(--mat-tab-active-indicator-shape, 0);
}
.mat-mdc-tab:hover .mdc-tab__text-label {
  color: var(--mat-tab-inactive-hover-label-text-color, var(--mat-sys-on-surface));
}
.mat-mdc-tab:focus .mdc-tab__text-label {
  color: var(--mat-tab-inactive-focus-label-text-color, var(--mat-sys-on-surface));
}
.mat-mdc-tab.mdc-tab--active .mdc-tab__text-label {
  color: var(--mat-tab-active-label-text-color, var(--mat-sys-on-surface));
}
.mat-mdc-tab.mdc-tab--active .mdc-tab__ripple::before,
.mat-mdc-tab.mdc-tab--active .mat-ripple-element {
  background-color: var(--mat-tab-active-ripple-color, var(--mat-sys-on-surface));
}
.mat-mdc-tab.mdc-tab--active:hover .mdc-tab__text-label {
  color: var(--mat-tab-active-hover-label-text-color, var(--mat-sys-on-surface));
}
.mat-mdc-tab.mdc-tab--active:hover .mdc-tab-indicator__content--underline {
  border-color: var(--mat-tab-active-hover-indicator-color, var(--mat-sys-primary));
}
.mat-mdc-tab.mdc-tab--active:focus .mdc-tab__text-label {
  color: var(--mat-tab-active-focus-label-text-color, var(--mat-sys-on-surface));
}
.mat-mdc-tab.mdc-tab--active:focus .mdc-tab-indicator__content--underline {
  border-color: var(--mat-tab-active-focus-indicator-color, var(--mat-sys-primary));
}
.mat-mdc-tab.mat-mdc-tab-disabled {
  opacity: 0.4;
  pointer-events: none;
}
.mat-mdc-tab.mat-mdc-tab-disabled .mdc-tab__content {
  pointer-events: none;
}
.mat-mdc-tab.mat-mdc-tab-disabled .mdc-tab__ripple::before,
.mat-mdc-tab.mat-mdc-tab-disabled .mat-ripple-element {
  background-color: var(--mat-tab-disabled-ripple-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-tab .mdc-tab__ripple::before {
  content: "";
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0;
  pointer-events: none;
  background-color: var(--mat-tab-inactive-ripple-color, var(--mat-sys-on-surface));
}
.mat-mdc-tab .mdc-tab__text-label {
  color: var(--mat-tab-inactive-label-text-color, var(--mat-sys-on-surface));
  display: inline-flex;
  align-items: center;
}
.mat-mdc-tab .mdc-tab__content {
  position: relative;
  pointer-events: auto;
}
.mat-mdc-tab:hover .mdc-tab__ripple::before {
  opacity: 0.04;
}
.mat-mdc-tab.cdk-program-focused .mdc-tab__ripple::before, .mat-mdc-tab.cdk-keyboard-focused .mdc-tab__ripple::before {
  opacity: 0.12;
}
.mat-mdc-tab .mat-ripple-element {
  opacity: 0.12;
  background-color: var(--mat-tab-inactive-ripple-color, var(--mat-sys-on-surface));
}
.mat-mdc-tab-group.mat-mdc-tab-group-stretch-tabs > .mat-mdc-tab-header .mat-mdc-tab {
  flex-grow: 1;
}

.mat-mdc-tab-group {
  display: flex;
  flex-direction: column;
  max-width: 100%;
}
.mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header, .mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header-pagination {
  background-color: var(--mat-tab-background-color);
}
.mat-mdc-tab-group.mat-tabs-with-background.mat-primary > .mat-mdc-tab-header .mat-mdc-tab .mdc-tab__text-label {
  color: var(--mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-tabs-with-background.mat-primary > .mat-mdc-tab-header .mdc-tab-indicator__content--underline {
  border-color: var(--mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-tabs-with-background:not(.mat-primary) > .mat-mdc-tab-header .mat-mdc-tab:not(.mdc-tab--active) .mdc-tab__text-label {
  color: var(--mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-tabs-with-background:not(.mat-primary) > .mat-mdc-tab-header .mat-mdc-tab:not(.mdc-tab--active) .mdc-tab-indicator__content--underline {
  border-color: var(--mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header .mat-mdc-tab-header-pagination-chevron,
.mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header .mat-focus-indicator::before, .mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mat-mdc-tab-header-pagination-chevron,
.mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mat-focus-indicator::before {
  border-color: var(--mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header .mat-ripple-element, .mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header .mdc-tab__ripple::before, .mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mat-ripple-element, .mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mdc-tab__ripple::before {
  background-color: var(--mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header .mat-mdc-tab-header-pagination-chevron, .mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mat-mdc-tab-header-pagination-chevron {
  color: var(--mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-mdc-tab-group-inverted-header {
  flex-direction: column-reverse;
}
.mat-mdc-tab-group.mat-mdc-tab-group-inverted-header .mdc-tab-indicator__content--underline {
  align-self: flex-start;
}

.mat-mdc-tab-body-wrapper {
  position: relative;
  overflow: hidden;
  display: flex;
  transition: height 500ms cubic-bezier(0.35, 0, 0.25, 1);
}
.mat-mdc-tab-body-wrapper._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
`],encapsulation:2})}return a})(),vt=class{index;tab};var He=(()=>{class a{static \u0275fac=function(e){return new(e||a)};static \u0275mod=Ft({type:a});static \u0275inj=Lt({imports:[Gt]})}return a})();var Qe=(a,r)=>r.Gnid,Ge=(a,r)=>r.Id;function xn(a,r){if(a&1&&(o(0,"mat-option",8),m(1),s()),a&2){let t=r.$implicit;p("value",t.Gnid),c(),B(t.Name)}}function Cn(a,r){a&1&&(o(0,"mat-option",9),m(1,"No organizations yet"),s()),a&2&&p("value",null)}function kn(a,r){if(a&1){let t=M();o(0,"a",28),u("click",function(){let n=g(t).$implicit,i=b(2);return f(i.selectedMemberId.set(n.Id))}),o(1,"span",29),m(2),s()()}if(a&2){let t=r.$implicit,e=b(2);v("selected",t.Id===e.selectedMemberId()),c(2),B(t.Title)}}function Tn(a,r){a&1&&(o(0,"p",18),m(1,"No members yet."),s())}function In(a,r){if(a&1){let t=M();o(0,"a",28),u("click",function(){let n=g(t).$implicit,i=b(2);return f(i.selectedAvailableId.set(n.Id))}),o(1,"span",29),m(2),s()()}if(a&2){let t=r.$implicit,e=b(2);v("selected",t.Id===e.selectedAvailableId()),c(2),B(t.Title)}}function wn(a,r){a&1&&(o(0,"p",18),m(1,"No available site users."),s())}function Mn(a,r){if(a&1){let t=M();o(0,"mat-list-item",27)(1,"span",29),m(2),s(),o(3,"button",30),u("click",function(){let n=g(t).$implicit,i=b(2);return f(i.removeRole(n))}),o(4,"mat-icon"),m(5,"delete"),s()()()}if(a&2){let t=r.$implicit;c(2),B(t.Name)}}function Dn(a,r){a&1&&(o(0,"p",18),m(1,"No roles yet."),s())}function Sn(a,r){if(a&1){let t=M();o(0,"mat-tab-group",10)(1,"mat-tab",12)(2,"div",13)(3,"mat-card",14)(4,"mat-toolbar")(5,"span"),m(6),s()(),o(7,"mat-card-content")(8,"div",15)(9,"mat-nav-list",16),I(10,kn,3,3,"a",17,Ge,!1,Tn,2,0,"p",18),s()()()(),o(13,"div",19)(14,"button",20),u("click",function(){g(t);let n=b();return f(n.addMember())}),o(15,"mat-icon"),m(16,"chevron_left"),s()(),o(17,"button",21),u("click",function(){g(t);let n=b();return f(n.removeMember())}),o(18,"mat-icon"),m(19,"chevron_right"),s()()(),o(20,"mat-card",14)(21,"mat-toolbar")(22,"span"),m(23,"Site Users"),s()(),o(24,"mat-card-content")(25,"mat-form-field",22)(26,"input",23,0),u("keyup",function(){g(t);let n=Q(27),i=b();return f(i.onSiteUserFilterInput(n.value))}),s()(),o(28,"div",15)(29,"mat-nav-list",16),I(30,In,3,3,"a",17,Ge,!1,wn,2,0,"p",18),s()()()()()(),o(33,"mat-tab",24)(34,"div",25)(35,"form",2),u("ngSubmit",function(){g(t);let n=b();return f(n.createRole())}),o(36,"mat-form-field",3)(37,"mat-label"),m(38,"Name"),s(),E(39,"input",4),s(),o(40,"button",5)(41,"mat-icon"),m(42,"add"),s(),m(43," New role "),s()(),o(44,"mat-card",26)(45,"mat-toolbar")(46,"span"),m(47),s()(),o(48,"mat-card-content")(49,"div",15)(50,"mat-list",16),I(51,Mn,6,1,"mat-list-item",27,Qe,!1,Dn,2,0,"p",18),s()()()()()()()}if(a&2){let t=r,e=b();c(6),ct("Members of ",t.Name),c(4),w(e.membersList()),c(4),p("disabled",e.selectedAvailableId()===null),c(3),p("disabled",e.selectedMemberId()===null),c(13),w(e.availableSiteUsersList()),c(5),p("formGroup",e.rolesForm),c(5),p("disabled",e.rolesForm.invalid||e.isSavingRole()),c(7),ct("Roles of ",t.Name),c(4),w(e.orgRoles())}}function Rn(a,r){a&1&&(o(0,"p",11),m(1,"Select or create an organization to manage its members."),s())}var Ve=class a{fb=d(de);data=d(ke);logger=d(Ce);isSaving=C(!1);isSavingRole=C(!1);form=this.fb.group({name:["",ht.required]});rolesForm=this.fb.group({name:["",ht.required]});organizations=C([]);allSiteUsers=C([]);allRoles=C([]);selectedOrgGnid=C(null);selectedMemberId=C(null);selectedAvailableId=C(null);siteUserFilterTerm=C("");siteUserFilterDebounce;selectedOrg=D(()=>this.organizations().find(r=>r.Gnid===this.selectedOrgGnid())??null);assignableSiteUsers=D(()=>this.allSiteUsers().filter(r=>r.PrincipalType===1&&!!r.Email));memberIds=D(()=>this.selectedOrg()?.Members??[]);membersList=D(()=>this.assignableSiteUsers().filter(r=>this.memberIds().includes(r.Id)));availableSiteUsersList=D(()=>{let r=this.siteUserFilterTerm().trim().toLowerCase(),t=this.assignableSiteUsers().filter(e=>!this.memberIds().includes(e.Id));return r?t.filter(e=>e.Title.toLowerCase().includes(r)):t});orgRoles=D(()=>{let r=this.selectedOrg()?.Roles??[],t=new Map(this.allRoles().map(e=>[e.Gnid,e]));return r.map(e=>t.get(e)).filter(e=>!!e)});constructor(){this.data.ready.then(()=>this.refreshFromCache())}refreshFromCache(){this.organizations.set([...this.data.getItems("Organization")]),this.allSiteUsers.set([...this.data.getItems("siteUsers")]),this.allRoles.set([...this.data.getItems("Role")]),this.selectedOrgGnid()===null&&this.organizations().length>0&&this.selectedOrgGnid.set(this.organizations()[0].Gnid)}async createOrganization(){if(this.form.invalid||this.isSaving())return;let r=this.form.getRawValue().name.trim();if(r){this.isSaving.set(!0);try{let t=await this.data.addItem("Organization",{Name:r,Members:[],Roles:[]});this.refreshFromCache(),this.selectedOrgGnid.set(t.Gnid),this.selectedMemberId.set(null),this.selectedAvailableId.set(null),this.form.reset({name:""}),this.logger.debugLog("Organization created",t)}catch(t){this.logger.debugLog("Failed to create organization",t)}finally{this.isSaving.set(!1)}}}async addMember(){let r=this.selectedOrg(),t=this.selectedAvailableId();!r||t===null||(await this.saveOrganization(r,{Members:[...r.Members,t]}),this.selectedAvailableId.set(null))}async removeMember(){let r=this.selectedOrg(),t=this.selectedMemberId();!r||t===null||(await this.saveOrganization(r,{Members:r.Members.filter(e=>e!==t)}),this.selectedMemberId.set(null))}onSiteUserFilterInput(r){clearTimeout(this.siteUserFilterDebounce),this.siteUserFilterDebounce=setTimeout(()=>{this.siteUserFilterTerm.set(r)},250)}async createRole(){let r=this.selectedOrg();if(!r||this.rolesForm.invalid||this.isSavingRole())return;let t=this.rolesForm.getRawValue().name.trim();if(t){this.isSavingRole.set(!0);try{let e=await this.data.addItem("Role",{Name:t});await this.saveOrganization(r,{Roles:[...r.Roles??[],e.Gnid]}),this.rolesForm.reset({name:""}),this.logger.debugLog("Role created",{gnid:e.Gnid,name:t,organization:r.Gnid})}catch(e){this.logger.debugLog("Failed to create role",e)}finally{this.isSavingRole.set(!1)}}}async removeRole(r){let t=this.selectedOrg();if(t)try{await this.saveOrganization(t,{Roles:(t.Roles??[]).filter(e=>e!==r.Gnid)}),await this.data.deleteItem("Role",r.Id),this.refreshFromCache(),this.logger.debugLog("Role deleted",{gnid:r.Gnid,organization:t.Gnid})}catch(e){this.logger.debugLog("Failed to delete role",e)}}async saveOrganization(r,t){let l=r,{Id:e,Gnid:n}=l,i=kt(l,["Id","Gnid"]);try{await this.data.updateItem("Organization",r.Id,rt(rt({},i),t)),this.refreshFromCache(),this.logger.debugLog("Organization updated",{gnid:r.Gnid,patch:t})}catch(k){this.logger.debugLog("Failed to update organization",k)}}static \u0275fac=function(t){return new(t||a)};static \u0275cmp=P({type:a,selectors:[["app-settings-organization"]],decls:19,vars:5,consts:[["siteUserFilter",""],[1,"org-container"],[1,"org-form",3,"ngSubmit","formGroup"],["appearance","outline","subscriptSizing","dynamic",1,"org-name-field"],["matInput","","type","text","formControlName","name"],["mat-flat-button","","type","submit",1,"new-org-button",3,"disabled"],["appearance","outline","subscriptSizing","dynamic",1,"org-select-field"],[3,"selectionChange","value"],[3,"value"],["disabled","",3,"value"],[1,"org-tabs"],[1,"org-empty"],["label","Members"],[1,"members-grid"],[1,"members-card"],[1,"user-list-scroll"],[1,"user-list"],["mat-list-item","",1,"user-row",3,"selected"],[1,"user-list-empty"],[1,"transfer-buttons"],["mat-icon-button","","aria-label","Add to members",1,"transfer-btn",3,"click","disabled"],["mat-icon-button","","aria-label","Remove from members",1,"transfer-btn",3,"click","disabled"],["appearance","outline","subscriptSizing","dynamic",1,"site-user-filter-field"],["matInput","","type","text","placeholder","Filter list ...",3,"keyup"],["label","Roles"],[1,"roles-panel"],[1,"members-card","roles-card"],[1,"user-row","role-row"],["mat-list-item","",1,"user-row",3,"click"],["matListItemTitle","",1,"user-name"],["mat-icon-button","","matListItemMeta","","aria-label","Delete role",1,"role-delete-btn",3,"click"]],template:function(t,e){if(t&1&&(o(0,"div",1)(1,"form",2),u("ngSubmit",function(){return e.createOrganization()}),o(2,"mat-form-field",3)(3,"mat-label"),m(4,"Name"),s(),E(5,"input",4),s(),o(6,"button",5)(7,"mat-icon"),m(8,"add"),s(),m(9," New organization "),s()(),o(10,"mat-form-field",6)(11,"mat-label"),m(12,"Organization"),s(),o(13,"mat-select",7),u("selectionChange",function(i){return e.selectedOrgGnid.set(i.value)}),I(14,xn,2,2,"mat-option",8,Qe,!1,Cn,2,1,"mat-option",9),s()(),H(17,Sn,54,9,"mat-tab-group",10)(18,Rn,2,0,"p",11),s()),t&2){let n;c(),p("formGroup",e.form),c(5),p("disabled",e.form.invalid||e.isSaving()),c(7),p("value",e.selectedOrgGnid()),c(),w(e.organizations()),c(3),G((n=e.selectedOrg())?17:18,n)}},dependencies:[ce,oe,ae,ie,re,le,se,Me,we,Ie,Se,De,Le,Pe,Re,Xt,Yt,Kt,Qt,Vt,ve,ge,fe,xe,ye,_e,pe,he,ue,me,be,He,xt,Ne],styles:["[_nghost-%COMP%]{display:block;height:100%}.org-container[_ngcontent-%COMP%]{height:100%;padding:20px;box-sizing:border-box;display:flex;flex-direction:column}.org-form[_ngcontent-%COMP%]{display:flex;align-items:center;gap:12px;margin-bottom:16px;flex:0 0 auto}.org-name-field[_ngcontent-%COMP%]{flex:1 1 auto;min-width:0;--mdc-outlined-text-field-outline-color: var(--border);--mdc-outlined-text-field-hover-outline-color: var(--text-muted);--mdc-outlined-text-field-focus-outline-color: var(--text-accent);--mdc-outlined-text-field-label-text-color: var(--text-muted);--mdc-outlined-text-field-input-text-color: var(--text-primary)}.org-name-field[_ngcontent-%COMP%]     .mat-mdc-text-field-wrapper.mdc-text-field--outlined{background-color:var(--surface-1)!important;border-radius:4px}.new-org-button[_ngcontent-%COMP%]{--mdc-filled-button-container-color: var(--text-accent);--mdc-filled-button-label-text-color: var(--surface-2);flex:0 0 auto;display:flex;align-items:center;gap:6px}.org-select-field[_ngcontent-%COMP%]{width:320px;margin-bottom:20px;flex:0 0 auto;--mdc-outlined-text-field-outline-color: var(--border);--mdc-outlined-text-field-hover-outline-color: var(--text-muted);--mdc-outlined-text-field-focus-outline-color: var(--text-accent);--mdc-outlined-text-field-label-text-color: var(--text-muted);--mdc-outlined-text-field-input-text-color: var(--text-primary)}.org-select-field[_ngcontent-%COMP%]     .mat-mdc-text-field-wrapper.mdc-text-field--outlined{background-color:var(--surface-1)!important;border-radius:4px}.org-empty[_ngcontent-%COMP%]{margin:0;font-size:14px;color:var(--text-muted);font-style:italic}mat-tab-group.org-tabs[_ngcontent-%COMP%]{display:flex!important;flex-direction:column!important;flex:1 1 auto;min-height:0}mat-tab-group.org-tabs[_ngcontent-%COMP%]     .mat-mdc-tab-body-wrapper{position:relative!important;flex:1 1 auto!important;min-height:0!important}mat-tab-group.org-tabs[_ngcontent-%COMP%]     .mat-mdc-tab-body{position:absolute!important;inset:0!important;height:auto!important}mat-tab-group.org-tabs[_ngcontent-%COMP%]     .mat-mdc-tab-body-content{position:absolute!important;inset:0!important;height:auto!important;overflow:hidden!important}.members-grid[_ngcontent-%COMP%]{display:flex;align-items:stretch;gap:16px;height:100%;min-height:0;box-sizing:border-box;padding:16px}.members-card[_ngcontent-%COMP%]{flex:1 1 0;min-width:0;min-height:0;padding:0;border-radius:0;box-shadow:0 5px 5px -3px #0003,0 8px 10px 1px #00000024,0 3px 14px 2px #0000001f;background:transparent;color:var(--text-primary);display:flex;flex-direction:column;overflow:hidden}.members-card[_ngcontent-%COMP%]   mat-toolbar[_ngcontent-%COMP%]{min-height:56px;height:auto;padding:4px 16px;font-size:14px;font-weight:500;display:flex;align-items:center;background:color-mix(in srgb,var(--surface-0) 95%,black 5%);color:var(--text-primary);border-bottom:.5px solid var(--border);flex:0 0 auto}.members-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]{padding:8px!important;flex:1 1 auto!important;min-height:0!important;overflow:hidden!important;display:flex!important;flex-direction:column!important}.user-list-scroll[_ngcontent-%COMP%]{flex:1 1 auto;min-height:0;overflow-y:auto}.roles-panel[_ngcontent-%COMP%]{display:flex;flex-direction:column;height:100%;min-height:0;box-sizing:border-box;padding:16px}.role-row[_ngcontent-%COMP%]{--mdc-list-list-item-label-text-color: var(--text-primary)}.user-row.role-row[_ngcontent-%COMP%]{cursor:default}.role-delete-btn[_ngcontent-%COMP%]{--mdc-icon-button-icon-color: var(--text-muted)}.site-user-filter-field[_ngcontent-%COMP%]{width:100%;flex:0 0 auto;margin-bottom:8px;--mdc-outlined-text-field-outline-color: var(--border);--mdc-outlined-text-field-hover-outline-color: var(--text-muted);--mdc-outlined-text-field-focus-outline-color: var(--text-accent);--mdc-outlined-text-field-label-text-color: var(--text-muted);--mdc-outlined-text-field-input-text-color: var(--text-primary)}.site-user-filter-field[_ngcontent-%COMP%]     .mat-mdc-text-field-wrapper.mdc-text-field--outlined{background-color:var(--surface-1)!important;border-radius:4px}.transfer-buttons[_ngcontent-%COMP%]{flex:0 0 auto;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px}.transfer-btn[_ngcontent-%COMP%]{--mdc-icon-button-icon-color: var(--text-accent);--mdc-icon-button-disabled-icon-color: var(--text-muted)}.user-list[_ngcontent-%COMP%]{padding:0}.user-row[_ngcontent-%COMP%]{--mdc-list-list-item-label-text-color: var(--text-primary);--mdc-list-list-item-hover-state-layer-color: var(--surface-1);cursor:pointer}.user-row.selected[_ngcontent-%COMP%]{background:var(--bg-accent);--mdc-list-list-item-label-text-color: var(--text-accent)}.user-list-empty[_ngcontent-%COMP%]{margin:0;padding:8px 16px;font-size:14px;color:var(--text-muted);font-style:italic}"]})};export{Ve as SettingsOrganization};
