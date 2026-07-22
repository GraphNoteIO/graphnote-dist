import{c as dt,d as ct,e as lt,f as mt,g as pt}from"./chunk-VLNFLBUM.js";import{A as Y,B as X,C as ut,D as gt,a as at,b as I,c as ot,d as ye,u as st,w as $,x as q,y as K,z as J}from"./chunk-JKA6C3IQ.js";import{$a as je,A as pe,Ab as Je,Ba as p,Bb as Ye,C as d,Cb as T,Da as g,Db as B,E as ue,Ea as D,F as ge,Fa as h,Ga as ve,Gb as Z,Ha as we,Hb as Ce,I as he,Ia as S,Ic as ee,J as Re,Ja as P,Jb as Xe,Jc as te,L,M as N,N as Ae,O as w,Oa as U,Pa as v,Qb as et,R as z,Ra as s,Rb as tt,S as j,Sa as x,T as Le,Vb as nt,W as l,X as fe,Ya as E,_ as Ne,_a as xe,ab as Ge,ca as u,da as ze,f as C,gc as rt,ha as F,hb as Q,ic as O,j as ce,l as Te,la as _e,m as k,na as _,o as Be,oa as b,ob as Ve,oc as it,p as Ie,pb as He,q as le,qa as G,qb as Ue,qc as y,ra as V,rb as Qe,rc as M,sa as H,sb as We,t as me,ta as i,tb as Ze,ua as a,ub as W,v as f,va as R,vb as $e,wb as qe,xb as Ke,z as Fe,za as be}from"./chunk-DCQWMIBK.js";var ne=class r{static \u0275fac=function(e){return new(e||r)};static \u0275cmp=u({type:r,selectors:[["app-release-notes"]],decls:17,vars:0,consts:[["mat-dialog-title",""],[1,"release-notes-content"],["align","end"],["mat-button","","mat-dialog-close",""]],template:function(e,t){e&1&&(i(0,"h2",0),s(1,"Release Notes"),a(),i(2,"mat-dialog-content",1)(3,"h3"),s(4,"beta-0.1"),a(),i(5,"ul")(6,"li"),s(7,"Initial release of Project Admin MSTD"),a(),i(8,"li"),s(9,"Create topics on the Work in Progress board with a title, description, status, and owner"),a(),i(10,"li"),s(11,"Drag and drop topics between Queued, In Progress, and Closed to update their status"),a(),i(12,"li"),s(13,"Add comments to a topic to track discussion over time"),a()()(),i(14,"mat-dialog-actions",2)(15,"button",3),s(16,"Close"),a()())},dependencies:[X,q,K,Y,J,M,y],styles:[".release-notes-content[_ngcontent-%COMP%]{max-height:60vh}.release-notes-content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin:0 0 8px;font-size:1rem;font-weight:600}.release-notes-content[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{margin:0 0 20px;padding-left:20px}.release-notes-content[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin-bottom:4px}"]})};var A=class r{router=d(W);dialog=d($);navigateTo(o){this.router.navigate([o])}openReleaseNotes(){this.dialog.open(ne,{width:"500px",maxHeight:"80vh"})}static \u0275fac=function(e){return new(e||r)};static \u0275cmp=u({type:r,selectors:[["app-home"]],decls:21,vars:0,consts:[[1,"banner"],[1,"banner-content"],[1,"banner-icon"],[1,"lock-icon"],[1,"subtitle"],["mat-raised-button","","color","primary",1,"release-notes-btn",3,"click"],[1,"banner-image"],[1,"content"],[1,"navigation-grid"],[1,"nav-card",3,"click"]],template:function(e,t){e&1&&(i(0,"div",0)(1,"div",1)(2,"div",2)(3,"mat-icon",3),s(4,"shield"),a()(),i(5,"h1"),s(6,"GraphNote"),a(),i(7,"p",4),s(8,"GraphNote ver. beta-0.1"),a(),i(9,"button",5),p("click",function(){return t.openReleaseNotes()}),s(10," Release Notes "),a()(),R(11,"div",6),a(),i(12,"div",7)(13,"h2"),s(14,"Navigate"),a(),i(15,"div",8)(16,"div",9),p("click",function(){return t.navigateTo("/topics")}),i(17,"mat-icon"),s(18,"assignment"),a(),i(19,"h3"),s(20,"Topics"),a()()()())},dependencies:[B,T,M,y],styles:[".banner[_ngcontent-%COMP%]{position:relative;display:flex;align-items:center;min-height:400px;padding:60px 80px;overflow:hidden;background-color:#fff}.banner-content[_ngcontent-%COMP%]{position:relative;z-index:2;max-width:600px}.banner-icon[_ngcontent-%COMP%]{margin-bottom:24px}.lock-icon[_ngcontent-%COMP%]{font-size:64px;width:64px;height:64px;color:var(--mat-sys-primary);border:3px solid var(--mat-sys-primary);border-radius:50%;padding:12px}.banner[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:2.5rem;font-weight:700;color:var(--mat-sys-on-surface);margin:0 0 12px;line-height:1.2}.subtitle[_ngcontent-%COMP%]{font-size:1.25rem;color:var(--mat-sys-on-surface-variant);margin:0 0 32px}.release-notes-btn[_ngcontent-%COMP%]{padding:12px 32px;font-size:1rem;border-radius:24px}.banner-image[_ngcontent-%COMP%]{position:absolute;right:0;top:0;bottom:0;width:70%;background-image:url(https://collab.napma.nato.int/flep/mstd/SiteAssets/GraphNote/images/banner.jpeg);background-size:cover;background-position:center;z-index:1;mask-image:linear-gradient(to right,transparent 0%,rgba(0,0,0,.3) 30%,rgba(0,0,0,.8) 60%,black 100%);-webkit-mask-image:linear-gradient(to right,transparent 0%,rgba(0,0,0,.3) 30%,rgba(0,0,0,.8) 60%,black 100%)}.content[_ngcontent-%COMP%]{padding:40px 80px;background-color:var(--mat-sys-surface)}.content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:1.75rem;font-weight:500;color:var(--mat-sys-on-surface);margin:0 0 32px}.navigation-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fill,minmax(200px,1fr));gap:24px}.nav-card[_ngcontent-%COMP%]{background:#fff;border:1px solid var(--mat-sys-outline-variant);border-radius:12px;padding:32px 24px;text-align:center;cursor:pointer;transition:all .3s ease;display:flex;flex-direction:column;align-items:center;gap:16px}.nav-card[_ngcontent-%COMP%]:hover{box-shadow:0 4px 12px #0000001a;border-color:var(--mat-sys-primary);transform:translateY(-2px)}.nav-card[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:48px;width:48px;height:48px;color:var(--mat-sys-on-surface-variant)}.nav-card[_ngcontent-%COMP%]:hover   mat-icon[_ngcontent-%COMP%]{color:var(--mat-sys-primary)}.nav-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:1rem;font-weight:500;color:var(--mat-sys-on-surface);margin:0}@media(max-width:768px){.banner[_ngcontent-%COMP%]{padding:40px 24px;min-height:300px}.banner-image[_ngcontent-%COMP%]{width:40%}.content[_ngcontent-%COMP%]{padding:24px}.navigation-grid[_ngcontent-%COMP%]{grid-template-columns:repeat(auto-fill,minmax(150px,1fr));gap:16px}}"]})};var ft=[{path:"",component:A,data:{breadcrumb:"Home"}},{path:"home",component:A,data:{breadcrumb:"Home"}},{path:"topics",loadComponent:()=>import("./chunk-HI3R6SUQ.js").then(r=>r.Topics),data:{breadcrumb:"Topics"},children:[{path:":gnid",loadComponent:()=>import("./chunk-L2GFSWN3.js").then(r=>r.Topic),data:{breadcrumb:"Topic"}}]},{path:"**",redirectTo:""}];var _t={providers:[Ae(),qe(ft,Ke())]};var oe=["*"],yt=["content"],Mt=[[["mat-drawer"]],[["mat-drawer-content"]],"*"],kt=["mat-drawer","mat-drawer-content","*"];function Dt(r,o){if(r&1){let e=be();i(0,"div",1),p("click",function(){ue(e);let n=g();return ge(n._onBackdropClicked())}),a()}if(r&2){let e=g();v("mat-drawer-shown",e._isShowingBackdrop())}}function St(r,o){r&1&&(i(0,"mat-drawer-content"),h(1,2),a())}var Pt=[[["mat-sidenav"]],[["mat-sidenav-content"]],"*"],Ot=["mat-sidenav","mat-sidenav-content","*"];function Et(r,o){if(r&1){let e=be();i(0,"div",1),p("click",function(){ue(e);let n=g();return ge(n._onBackdropClicked())}),a()}if(r&2){let e=g();v("mat-drawer-shown",e._isShowingBackdrop())}}function Tt(r,o){r&1&&(i(0,"mat-sidenav-content"),h(1,2),a())}var Bt=`.mat-drawer-container {
  position: relative;
  z-index: 1;
  color: var(--mat-sidenav-content-text-color, var(--mat-sys-on-background));
  background-color: var(--mat-sidenav-content-background-color, var(--mat-sys-background));
  box-sizing: border-box;
  display: block;
  overflow: hidden;
}
.mat-drawer-container[fullscreen] {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
}
.mat-drawer-container[fullscreen].mat-drawer-container-has-open {
  overflow: hidden;
}
.mat-drawer-container.mat-drawer-container-explicit-backdrop .mat-drawer-side {
  z-index: 3;
}
.mat-drawer-container.ng-animate-disabled .mat-drawer-backdrop,
.mat-drawer-container.ng-animate-disabled .mat-drawer-content, .ng-animate-disabled .mat-drawer-container .mat-drawer-backdrop,
.ng-animate-disabled .mat-drawer-container .mat-drawer-content {
  transition: none;
}

.mat-drawer-backdrop {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  display: block;
  z-index: 3;
  visibility: hidden;
}
.mat-drawer-backdrop.mat-drawer-shown {
  visibility: visible;
  background-color: var(--mat-sidenav-scrim-color, color-mix(in srgb, var(--mat-sys-neutral-variant20) 40%, transparent));
}
.mat-drawer-transition .mat-drawer-backdrop {
  transition-duration: 400ms;
  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
  transition-property: background-color, visibility;
}
@media (forced-colors: active) {
  .mat-drawer-backdrop {
    opacity: 0.5;
  }
}

.mat-drawer-content {
  position: relative;
  z-index: 1;
  display: block;
  height: 100%;
  overflow: auto;
}
.mat-drawer-content.mat-drawer-content-hidden {
  opacity: 0;
}
.mat-drawer-transition .mat-drawer-content {
  transition-duration: 400ms;
  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
  transition-property: transform, margin-left, margin-right;
}

.mat-drawer {
  position: relative;
  z-index: 4;
  color: var(--mat-sidenav-container-text-color, var(--mat-sys-on-surface-variant));
  box-shadow: var(--mat-sidenav-container-elevation-shadow, none);
  background-color: var(--mat-sidenav-container-background-color, var(--mat-sys-surface));
  border-top-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-bottom-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  width: var(--mat-sidenav-container-width, 360px);
  display: block;
  position: absolute;
  top: 0;
  bottom: 0;
  z-index: 3;
  outline: 0;
  box-sizing: border-box;
  overflow-y: auto;
  transform: translate3d(-100%, 0, 0);
}
@media (forced-colors: active) {
  .mat-drawer, [dir=rtl] .mat-drawer.mat-drawer-end {
    border-right: solid 1px currentColor;
  }
}
@media (forced-colors: active) {
  [dir=rtl] .mat-drawer, .mat-drawer.mat-drawer-end {
    border-left: solid 1px currentColor;
    border-right: none;
  }
}
.mat-drawer.mat-drawer-side {
  z-index: 2;
}
.mat-drawer.mat-drawer-end {
  right: 0;
  transform: translate3d(100%, 0, 0);
  border-top-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-bottom-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}
[dir=rtl] .mat-drawer {
  border-top-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-bottom-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  transform: translate3d(100%, 0, 0);
}
[dir=rtl] .mat-drawer.mat-drawer-end {
  border-top-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-bottom-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  left: 0;
  right: auto;
  transform: translate3d(-100%, 0, 0);
}
.mat-drawer-transition .mat-drawer {
  transition: transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1);
}
.mat-drawer:not(.mat-drawer-opened):not(.mat-drawer-animating) {
  visibility: hidden;
  box-shadow: none;
}
.mat-drawer:not(.mat-drawer-opened):not(.mat-drawer-animating) .mat-drawer-inner-container {
  display: none;
}
.mat-drawer.mat-drawer-opened.mat-drawer-opened {
  transform: none;
}

.mat-drawer-side {
  box-shadow: none;
  border-right-color: var(--mat-sidenav-container-divider-color, transparent);
  border-right-width: 1px;
  border-right-style: solid;
}
.mat-drawer-side.mat-drawer-end {
  border-left-color: var(--mat-sidenav-container-divider-color, transparent);
  border-left-width: 1px;
  border-left-style: solid;
  border-right: none;
}
[dir=rtl] .mat-drawer-side {
  border-left-color: var(--mat-sidenav-container-divider-color, transparent);
  border-left-width: 1px;
  border-left-style: solid;
  border-right: none;
}
[dir=rtl] .mat-drawer-side.mat-drawer-end {
  border-right-color: var(--mat-sidenav-container-divider-color, transparent);
  border-right-width: 1px;
  border-right-style: solid;
  border-left: none;
}

.mat-drawer-inner-container {
  width: 100%;
  height: 100%;
  overflow: auto;
}

.mat-sidenav-fixed {
  position: fixed;
}
`;var It=new pe("MAT_DRAWER_DEFAULT_AUTOSIZE",{providedIn:"root",factory:()=>!1}),Pe=new pe("MAT_DRAWER_CONTAINER"),ie=(()=>{class r extends I{_platform=d(Z);_changeDetectorRef=d(Q);_container=d(Se);constructor(){let e=d(j),t=d(at),n=d(N);super(e,t,n)}ngAfterContentInit(){this._container._contentMarginChanges.subscribe(()=>{this._changeDetectorRef.markForCheck()})}_shouldBeHidden(){if(this._platform.isBrowser)return!1;let{start:e,end:t}=this._container;return e!=null&&e.mode!=="over"&&e.opened||t!=null&&t.mode!=="over"&&t.opened}static \u0275fac=function(t){return new(t||r)};static \u0275cmp=u({type:r,selectors:[["mat-drawer-content"]],hostAttrs:[1,"mat-drawer-content"],hostVars:6,hostBindings:function(t,n){t&2&&(U("margin-left",n._container._contentMargins.left,"px")("margin-right",n._container._contentMargins.right,"px"),v("mat-drawer-content-hidden",n._shouldBeHidden()))},features:[E([{provide:I,useExisting:r}]),F],ngContentSelectors:oe,decls:1,vars:0,template:function(t,n){t&1&&(D(),h(0))},encapsulation:2,changeDetection:0})}return r})(),De=(()=>{class r{_elementRef=d(j);_focusTrapFactory=d(tt);_focusMonitor=d(Xe);_platform=d(Z);_ngZone=d(N);_renderer=d(Ne);_interactivityChecker=d(et);_doc=d(Re);_container=d(Pe,{optional:!0});_focusTrap=null;_elementFocusedBeforeDrawerWasOpened=null;_eventCleanups;_isAttached=!1;_anchor=null;get position(){return this._position}set position(e){e=e==="end"?"end":"start",e!==this._position&&(this._isAttached&&this._updatePositionInParent(e),this._position=e,this.onPositionChanged.emit())}_position="start";get mode(){return this._mode}set mode(e){this._mode=e,this._updateFocusTrapState(),this._modeChanged.next()}_mode="over";get disableClose(){return this._disableClose}set disableClose(e){this._disableClose=O(e)}_disableClose=!1;get autoFocus(){let e=this._autoFocus;return e??(this.mode==="side"?"dialog":"first-tabbable")}set autoFocus(e){(e==="true"||e==="false"||e==null)&&(e=O(e)),this._autoFocus=e}_autoFocus;get opened(){return this._opened()}set opened(e){this.toggle(O(e))}_opened=w(!1);_openedVia=null;_animationStarted=new C;_animationEnd=new C;openedChange=new L(!0);_openedStream=this.openedChange.pipe(k(e=>e),ce(()=>{}));openedStart=this._animationStarted.pipe(k(()=>this.opened),le(void 0));_closedStream=this.openedChange.pipe(k(e=>!e),ce(()=>{}));closedStart=this._animationStarted.pipe(k(()=>!this.opened),le(void 0));_destroyed=new C;onPositionChanged=new L;_content;_modeChanged=new C;_injector=d(he);_changeDetectorRef=d(Q);constructor(){this.openedChange.pipe(f(this._destroyed)).subscribe(e=>{e?(this._elementFocusedBeforeDrawerWasOpened=this._doc.activeElement,this._takeFocus()):this._isFocusWithinDrawer()&&this._restoreFocus(this._openedVia||"program")}),this._eventCleanups=this._ngZone.runOutsideAngular(()=>{let e=this._renderer,t=this._elementRef.nativeElement;return[e.listen(t,"keydown",n=>{n.keyCode===27&&!this.disableClose&&!nt(n)&&this._ngZone.run(()=>{this.close(),n.stopPropagation(),n.preventDefault()})}),e.listen(t,"transitionend",this._handleTransitionEvent),e.listen(t,"transitioncancel",this._handleTransitionEvent)]}),this._animationEnd.subscribe(()=>{this.openedChange.emit(this.opened)})}_forceFocus(e,t){this._interactivityChecker.isFocusable(e)||(e.tabIndex=-1,this._ngZone.runOutsideAngular(()=>{let n=()=>{c(),m(),e.removeAttribute("tabindex")},c=this._renderer.listen(e,"blur",n),m=this._renderer.listen(e,"mousedown",n)})),e.focus(t)}_focusByCssSelector(e,t){let n=this._elementRef.nativeElement.querySelector(e);n&&this._forceFocus(n,t)}_takeFocus(){if(!this._focusTrap)return;let e=this._elementRef.nativeElement;switch(this.autoFocus){case!1:case"dialog":return;case!0:case"first-tabbable":fe(()=>{!this._focusTrap.focusInitialElement()&&typeof e.focus=="function"&&e.focus()},{injector:this._injector});break;case"first-heading":this._focusByCssSelector('h1, h2, h3, h4, h5, h6, [role="heading"]');break;default:this._focusByCssSelector(this.autoFocus);break}}_restoreFocus(e){this.autoFocus!=="dialog"&&(this._elementFocusedBeforeDrawerWasOpened?this._focusMonitor.focusVia(this._elementFocusedBeforeDrawerWasOpened,e):this._elementRef.nativeElement.blur(),this._elementFocusedBeforeDrawerWasOpened=null)}_isFocusWithinDrawer(){let e=this._doc.activeElement;return!!e&&this._elementRef.nativeElement.contains(e)}ngAfterViewInit(){this._isAttached=!0,this._position==="end"&&this._updatePositionInParent("end"),this._platform.isBrowser&&(this._focusTrap=this._focusTrapFactory.create(this._elementRef.nativeElement),this._updateFocusTrapState())}ngOnDestroy(){this._eventCleanups.forEach(e=>e()),this._focusTrap?.destroy(),this._anchor?.remove(),this._anchor=null,this._animationStarted.complete(),this._animationEnd.complete(),this._modeChanged.complete(),this._destroyed.next(),this._destroyed.complete()}open(e){return this.toggle(!0,e)}close(){return this.toggle(!1)}_closeViaBackdropClick(){return this._setOpen(!1,!0,"mouse")}toggle(e=!this.opened,t){e&&t&&(this._openedVia=t);let n=this._setOpen(e,!e&&this._isFocusWithinDrawer(),this._openedVia||"program");return e||(this._openedVia=null),n}_setOpen(e,t,n){return e===this.opened?Promise.resolve(e?"open":"close"):(this._opened.set(e),this._container?._transitionsEnabled?(this._setIsAnimating(!0),setTimeout(()=>this._animationStarted.next())):setTimeout(()=>{this._animationStarted.next(),this._animationEnd.next()}),this._elementRef.nativeElement.classList.toggle("mat-drawer-opened",e),!e&&t&&this._restoreFocus(n),this._changeDetectorRef.markForCheck(),this._updateFocusTrapState(),new Promise(c=>{this.openedChange.pipe(Ie(1)).subscribe(m=>c(m?"open":"close"))}))}_setIsAnimating(e){this._elementRef.nativeElement.classList.toggle("mat-drawer-animating",e)}_getWidth(){return this._elementRef.nativeElement.offsetWidth||0}_updateFocusTrapState(){this._focusTrap&&(this._focusTrap.enabled=this.opened&&!!this._container?._isShowingBackdrop())}_updatePositionInParent(e){if(!this._platform.isBrowser)return;let t=this._elementRef.nativeElement,n=t.parentNode;e==="end"?(this._anchor||(this._anchor=this._doc.createComment("mat-drawer-anchor"),n.insertBefore(this._anchor,t)),n.appendChild(t)):this._anchor&&this._anchor.parentNode.insertBefore(t,this._anchor)}_handleTransitionEvent=e=>{let t=this._elementRef.nativeElement;e.target===t&&this._ngZone.run(()=>{e.type==="transitionend"&&this._setIsAnimating(!1),this._animationEnd.next(e)})};static \u0275fac=function(t){return new(t||r)};static \u0275cmp=u({type:r,selectors:[["mat-drawer"]],viewQuery:function(t,n){if(t&1&&we(yt,5),t&2){let c;S(c=P())&&(n._content=c.first)}},hostAttrs:[1,"mat-drawer"],hostVars:12,hostBindings:function(t,n){t&2&&(_e("align",null)("tabIndex",n.mode!=="side"?"-1":null),U("visibility",!n._container&&!n.opened?"hidden":null),v("mat-drawer-end",n.position==="end")("mat-drawer-over",n.mode==="over")("mat-drawer-push",n.mode==="push")("mat-drawer-side",n.mode==="side"))},inputs:{position:"position",mode:"mode",disableClose:"disableClose",autoFocus:"autoFocus",opened:"opened"},outputs:{openedChange:"openedChange",_openedStream:"opened",openedStart:"openedStart",_closedStream:"closed",closedStart:"closedStart",onPositionChanged:"positionChanged"},exportAs:["matDrawer"],ngContentSelectors:oe,decls:3,vars:0,consts:[["content",""],["cdkScrollable","",1,"mat-drawer-inner-container"]],template:function(t,n){t&1&&(D(),i(0,"div",1,0),h(2),a())},dependencies:[I],encapsulation:2,changeDetection:0})}return r})(),Se=(()=>{class r{_dir=d(Je,{optional:!0});_element=d(j);_ngZone=d(N);_changeDetectorRef=d(Q);_animationDisabled=rt();_transitionsEnabled=!1;_allDrawers;_drawers=new Le;_content;_userContent;get start(){return this._start}get end(){return this._end}get autosize(){return this._autosize}set autosize(e){this._autosize=O(e)}_autosize=d(It);get hasBackdrop(){return this._drawerHasBackdrop(this._start)||this._drawerHasBackdrop(this._end)}set hasBackdrop(e){this._backdropOverride=e==null?null:O(e)}_backdropOverride=null;backdropClick=new L;_start=null;_end=null;_left=null;_right=null;_destroyed=new C;_doCheckSubject=new C;_contentMargins={left:null,right:null};_contentMarginChanges=new C;get scrollable(){return this._userContent||this._content}_injector=d(he);constructor(){let e=d(Z),t=d(ot);this._dir?.change.pipe(f(this._destroyed)).subscribe(()=>{this._validateDrawers(),this.updateContentMargins()}),t.change().pipe(f(this._destroyed)).subscribe(()=>this.updateContentMargins()),!this._animationDisabled&&e.isBrowser&&this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{this._element.nativeElement.classList.add("mat-drawer-transition"),this._transitionsEnabled=!0},200)})}ngAfterContentInit(){this._allDrawers.changes.pipe(me(this._allDrawers),f(this._destroyed)).subscribe(e=>{this._drawers.reset(e.filter(t=>!t._container||t._container===this)),this._drawers.notifyOnChanges()}),this._drawers.changes.pipe(me(null)).subscribe(()=>{this._validateDrawers(),this._drawers.forEach(e=>{this._watchDrawerToggle(e),this._watchDrawerPosition(e),this._watchDrawerMode(e)}),(!this._drawers.length||this._isDrawerOpen(this._start)||this._isDrawerOpen(this._end))&&this.updateContentMargins(),this._changeDetectorRef.markForCheck()}),this._ngZone.runOutsideAngular(()=>{this._doCheckSubject.pipe(Be(10),f(this._destroyed)).subscribe(()=>this.updateContentMargins())})}ngOnDestroy(){this._contentMarginChanges.complete(),this._doCheckSubject.complete(),this._drawers.destroy(),this._destroyed.next(),this._destroyed.complete()}open(){this._drawers.forEach(e=>e.open())}close(){this._drawers.forEach(e=>e.close())}updateContentMargins(){let e=0,t=0;if(this._left&&this._left.opened){if(this._left.mode=="side")e+=this._left._getWidth();else if(this._left.mode=="push"){let n=this._left._getWidth();e+=n,t-=n}}if(this._right&&this._right.opened){if(this._right.mode=="side")t+=this._right._getWidth();else if(this._right.mode=="push"){let n=this._right._getWidth();t+=n,e-=n}}e=e||null,t=t||null,(e!==this._contentMargins.left||t!==this._contentMargins.right)&&(this._contentMargins={left:e,right:t},this._ngZone.run(()=>this._contentMarginChanges.next(this._contentMargins)))}ngDoCheck(){this._autosize&&this._isPushed()&&this._ngZone.runOutsideAngular(()=>this._doCheckSubject.next())}_watchDrawerToggle(e){e._animationStarted.pipe(f(this._drawers.changes)).subscribe(()=>{this.updateContentMargins(),this._changeDetectorRef.markForCheck()}),e.mode!=="side"&&e.openedChange.pipe(f(this._drawers.changes)).subscribe(()=>this._setContainerClass(e.opened))}_watchDrawerPosition(e){e.onPositionChanged.pipe(f(this._drawers.changes)).subscribe(()=>{fe({read:()=>this._validateDrawers()},{injector:this._injector})})}_watchDrawerMode(e){e._modeChanged.pipe(f(Te(this._drawers.changes,this._destroyed))).subscribe(()=>{this.updateContentMargins(),this._changeDetectorRef.markForCheck()})}_setContainerClass(e){let t=this._element.nativeElement.classList,n="mat-drawer-container-has-open";e?t.add(n):t.remove(n)}_validateDrawers(){this._start=this._end=null,this._drawers.forEach(e=>{e.position=="end"?(this._end!=null,this._end=e):(this._start!=null,this._start=e)}),this._right=this._left=null,this._dir&&this._dir.value==="rtl"?(this._left=this._end,this._right=this._start):(this._left=this._start,this._right=this._end)}_isPushed(){return this._isDrawerOpen(this._start)&&this._start.mode!="over"||this._isDrawerOpen(this._end)&&this._end.mode!="over"}_onBackdropClicked(){this.backdropClick.emit(),this._closeModalDrawersViaBackdrop()}_closeModalDrawersViaBackdrop(){[this._start,this._end].filter(e=>e&&!e.disableClose&&this._drawerHasBackdrop(e)).forEach(e=>e._closeViaBackdropClick())}_isShowingBackdrop(){return this._isDrawerOpen(this._start)&&this._drawerHasBackdrop(this._start)||this._isDrawerOpen(this._end)&&this._drawerHasBackdrop(this._end)}_isDrawerOpen(e){return e!=null&&e.opened}_drawerHasBackdrop(e){return this._backdropOverride==null?!!e&&e.mode!=="side":this._backdropOverride}static \u0275fac=function(t){return new(t||r)};static \u0275cmp=u({type:r,selectors:[["mat-drawer-container"]],contentQueries:function(t,n,c){if(t&1&&ve(c,ie,5)(c,De,5),t&2){let m;S(m=P())&&(n._content=m.first),S(m=P())&&(n._allDrawers=m)}},viewQuery:function(t,n){if(t&1&&we(ie,5),t&2){let c;S(c=P())&&(n._userContent=c.first)}},hostAttrs:[1,"mat-drawer-container"],hostVars:2,hostBindings:function(t,n){t&2&&v("mat-drawer-container-explicit-backdrop",n._backdropOverride)},inputs:{autosize:"autosize",hasBackdrop:"hasBackdrop"},outputs:{backdropClick:"backdropClick"},exportAs:["matDrawerContainer"],features:[E([{provide:Pe,useExisting:r}])],ngContentSelectors:kt,decls:4,vars:2,consts:[[1,"mat-drawer-backdrop",3,"mat-drawer-shown"],[1,"mat-drawer-backdrop",3,"click"]],template:function(t,n){t&1&&(D(Mt),_(0,Dt,1,2,"div",0),h(1),h(2,1),_(3,St,2,0,"mat-drawer-content")),t&2&&(b(n.hasBackdrop?0:-1),l(3),b(n._content?-1:3))},dependencies:[ie],styles:[`.mat-drawer-container {
  position: relative;
  z-index: 1;
  color: var(--mat-sidenav-content-text-color, var(--mat-sys-on-background));
  background-color: var(--mat-sidenav-content-background-color, var(--mat-sys-background));
  box-sizing: border-box;
  display: block;
  overflow: hidden;
}
.mat-drawer-container[fullscreen] {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
}
.mat-drawer-container[fullscreen].mat-drawer-container-has-open {
  overflow: hidden;
}
.mat-drawer-container.mat-drawer-container-explicit-backdrop .mat-drawer-side {
  z-index: 3;
}
.mat-drawer-container.ng-animate-disabled .mat-drawer-backdrop,
.mat-drawer-container.ng-animate-disabled .mat-drawer-content, .ng-animate-disabled .mat-drawer-container .mat-drawer-backdrop,
.ng-animate-disabled .mat-drawer-container .mat-drawer-content {
  transition: none;
}

.mat-drawer-backdrop {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  display: block;
  z-index: 3;
  visibility: hidden;
}
.mat-drawer-backdrop.mat-drawer-shown {
  visibility: visible;
  background-color: var(--mat-sidenav-scrim-color, color-mix(in srgb, var(--mat-sys-neutral-variant20) 40%, transparent));
}
.mat-drawer-transition .mat-drawer-backdrop {
  transition-duration: 400ms;
  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
  transition-property: background-color, visibility;
}
@media (forced-colors: active) {
  .mat-drawer-backdrop {
    opacity: 0.5;
  }
}

.mat-drawer-content {
  position: relative;
  z-index: 1;
  display: block;
  height: 100%;
  overflow: auto;
}
.mat-drawer-content.mat-drawer-content-hidden {
  opacity: 0;
}
.mat-drawer-transition .mat-drawer-content {
  transition-duration: 400ms;
  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
  transition-property: transform, margin-left, margin-right;
}

.mat-drawer {
  position: relative;
  z-index: 4;
  color: var(--mat-sidenav-container-text-color, var(--mat-sys-on-surface-variant));
  box-shadow: var(--mat-sidenav-container-elevation-shadow, none);
  background-color: var(--mat-sidenav-container-background-color, var(--mat-sys-surface));
  border-top-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-bottom-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  width: var(--mat-sidenav-container-width, 360px);
  display: block;
  position: absolute;
  top: 0;
  bottom: 0;
  z-index: 3;
  outline: 0;
  box-sizing: border-box;
  overflow-y: auto;
  transform: translate3d(-100%, 0, 0);
}
@media (forced-colors: active) {
  .mat-drawer, [dir=rtl] .mat-drawer.mat-drawer-end {
    border-right: solid 1px currentColor;
  }
}
@media (forced-colors: active) {
  [dir=rtl] .mat-drawer, .mat-drawer.mat-drawer-end {
    border-left: solid 1px currentColor;
    border-right: none;
  }
}
.mat-drawer.mat-drawer-side {
  z-index: 2;
}
.mat-drawer.mat-drawer-end {
  right: 0;
  transform: translate3d(100%, 0, 0);
  border-top-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-bottom-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}
[dir=rtl] .mat-drawer {
  border-top-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-bottom-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  transform: translate3d(100%, 0, 0);
}
[dir=rtl] .mat-drawer.mat-drawer-end {
  border-top-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-bottom-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  left: 0;
  right: auto;
  transform: translate3d(-100%, 0, 0);
}
.mat-drawer-transition .mat-drawer {
  transition: transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1);
}
.mat-drawer:not(.mat-drawer-opened):not(.mat-drawer-animating) {
  visibility: hidden;
  box-shadow: none;
}
.mat-drawer:not(.mat-drawer-opened):not(.mat-drawer-animating) .mat-drawer-inner-container {
  display: none;
}
.mat-drawer.mat-drawer-opened.mat-drawer-opened {
  transform: none;
}

.mat-drawer-side {
  box-shadow: none;
  border-right-color: var(--mat-sidenav-container-divider-color, transparent);
  border-right-width: 1px;
  border-right-style: solid;
}
.mat-drawer-side.mat-drawer-end {
  border-left-color: var(--mat-sidenav-container-divider-color, transparent);
  border-left-width: 1px;
  border-left-style: solid;
  border-right: none;
}
[dir=rtl] .mat-drawer-side {
  border-left-color: var(--mat-sidenav-container-divider-color, transparent);
  border-left-width: 1px;
  border-left-style: solid;
  border-right: none;
}
[dir=rtl] .mat-drawer-side.mat-drawer-end {
  border-right-color: var(--mat-sidenav-container-divider-color, transparent);
  border-right-width: 1px;
  border-right-style: solid;
  border-left: none;
}

.mat-drawer-inner-container {
  width: 100%;
  height: 100%;
  overflow: auto;
}

.mat-sidenav-fixed {
  position: fixed;
}
`],encapsulation:2,changeDetection:0})}return r})(),ae=(()=>{class r extends ie{static \u0275fac=(()=>{let e;return function(n){return(e||(e=z(r)))(n||r)}})();static \u0275cmp=u({type:r,selectors:[["mat-sidenav-content"]],hostAttrs:[1,"mat-drawer-content","mat-sidenav-content"],features:[E([{provide:I,useExisting:r}]),F],ngContentSelectors:oe,decls:1,vars:0,template:function(t,n){t&1&&(D(),h(0))},encapsulation:2,changeDetection:0})}return r})(),Oe=(()=>{class r extends De{get fixedInViewport(){return this._fixedInViewport}set fixedInViewport(e){this._fixedInViewport=O(e)}_fixedInViewport=!1;get fixedTopGap(){return this._fixedTopGap}set fixedTopGap(e){this._fixedTopGap=Ce(e)}_fixedTopGap=0;get fixedBottomGap(){return this._fixedBottomGap}set fixedBottomGap(e){this._fixedBottomGap=Ce(e)}_fixedBottomGap=0;static \u0275fac=(()=>{let e;return function(n){return(e||(e=z(r)))(n||r)}})();static \u0275cmp=u({type:r,selectors:[["mat-sidenav"]],hostAttrs:[1,"mat-drawer","mat-sidenav"],hostVars:16,hostBindings:function(t,n){t&2&&(_e("tabIndex",n.mode!=="side"?"-1":null)("align",null),U("top",n.fixedInViewport?n.fixedTopGap:null,"px")("bottom",n.fixedInViewport?n.fixedBottomGap:null,"px"),v("mat-drawer-end",n.position==="end")("mat-drawer-over",n.mode==="over")("mat-drawer-push",n.mode==="push")("mat-drawer-side",n.mode==="side")("mat-sidenav-fixed",n.fixedInViewport))},inputs:{fixedInViewport:"fixedInViewport",fixedTopGap:"fixedTopGap",fixedBottomGap:"fixedBottomGap"},exportAs:["matSidenav"],features:[E([{provide:De,useExisting:r}]),F],ngContentSelectors:oe,decls:3,vars:0,consts:[["content",""],["cdkScrollable","",1,"mat-drawer-inner-container"]],template:function(t,n){t&1&&(D(),i(0,"div",1,0),h(2),a())},dependencies:[I],encapsulation:2,changeDetection:0})}return r})(),bt=(()=>{class r extends Se{_allDrawers=void 0;_content=void 0;static \u0275fac=(()=>{let e;return function(n){return(e||(e=z(r)))(n||r)}})();static \u0275cmp=u({type:r,selectors:[["mat-sidenav-container"]],contentQueries:function(t,n,c){if(t&1&&ve(c,ae,5)(c,Oe,5),t&2){let m;S(m=P())&&(n._content=m.first),S(m=P())&&(n._allDrawers=m)}},hostAttrs:[1,"mat-drawer-container","mat-sidenav-container"],hostVars:2,hostBindings:function(t,n){t&2&&v("mat-drawer-container-explicit-backdrop",n._backdropOverride)},exportAs:["matSidenavContainer"],features:[E([{provide:Pe,useExisting:r},{provide:Se,useExisting:r}]),F],ngContentSelectors:Ot,decls:4,vars:2,consts:[[1,"mat-drawer-backdrop",3,"mat-drawer-shown"],[1,"mat-drawer-backdrop",3,"click"]],template:function(t,n){t&1&&(D(Pt),_(0,Et,1,2,"div",0),h(1),h(2,1),_(3,Tt,2,0,"mat-sidenav-content")),t&2&&(b(n.hasBackdrop?0:-1),l(3),b(n._content?-1:3))},dependencies:[ae],styles:[Bt],encapsulation:2,changeDetection:0})}return r})(),vt=(()=>{class r{static \u0275fac=function(t){return new(t||r)};static \u0275mod=ze({type:r});static \u0275inj=Fe({imports:[ye,Ye,ye]})}return r})();var Rt=(r,o)=>o.timestamp;function At(r,o){r&1&&(i(0,"p",1),s(1,"No debug logs yet"),a())}function Lt(r,o){if(r&1&&(i(0,"pre",9),s(1),xe(2,"json"),a()),r&2){let e=g().$implicit;l(),x(je(2,1,e.data))}}function Nt(r,o){if(r&1&&(i(0,"div",6)(1,"span",7),s(2),xe(3,"date"),a(),i(4,"span",8),s(5),a(),_(6,Lt,3,3,"pre",9),a()),r&2){let e=o.$implicit;l(2),x(Ge(3,3,e.timestamp,"HH:mm:ss.SSS")),l(3),x(e.message),l(),b(e.data?6:-1)}}function zt(r,o){if(r&1&&(i(0,"div",2),G(1,Nt,7,6,"div",6,Rt),a()),r&2){let e=g();l(),V(e.logger.logs())}}var se=class r{logger=d(ee);data=d(te);dialogRef=d(st);clearLogs(){this.logger.clearLogs()}async insertTestItem(){this.logger.debugLog("Inserting test item...");try{let o=await this.data.addItem("TestClass",{name:"Test Item",description:"Inserted from debug dialog",someNumber:42,someDate:new Date().toISOString()});this.logger.debugLog("Test item inserted successfully",o)}catch(o){this.logger.debugLog("Failed to insert test item",o)}}async promoteGuidToGnid(){this.logger.debugLog("Promoting Guid -> Gnid for all list items...");try{let o=await this.data.promoteGuidToGnid();this.logger.debugLog("Guid -> Gnid promotion finished",o)}catch(o){this.logger.debugLog("Guid -> Gnid promotion failed unexpectedly",o)}}close(){this.dialogRef.close()}static \u0275fac=function(e){return new(e||r)};static \u0275cmp=u({type:r,selectors:[["app-logger-dialog"]],decls:22,vars:1,consts:[["mat-dialog-title",""],[1,"no-logs"],[1,"log-entries"],["align","end"],["mat-button","",3,"click"],["mat-button","","mat-dialog-close",""],[1,"log-entry"],[1,"log-timestamp"],[1,"log-message"],[1,"log-data"]],template:function(e,t){e&1&&(i(0,"h2",0)(1,"mat-icon"),s(2,"code"),a(),s(3,` Debug Log
`),a(),i(4,"mat-dialog-content"),_(5,At,2,0,"p",1)(6,zt,3,0,"div",2),a(),i(7,"mat-dialog-actions",3)(8,"button",4),p("click",function(){return t.insertTestItem()}),i(9,"mat-icon"),s(10,"add"),a(),s(11," Insert Test Item "),a(),i(12,"button",4),p("click",function(){return t.promoteGuidToGnid()}),i(13,"mat-icon"),s(14,"sync_alt"),a(),s(15," Promote Guid \u2192 Gnid "),a(),i(16,"button",4),p("click",function(){return t.clearLogs()}),i(17,"mat-icon"),s(18,"delete"),a(),s(19," Clear Logs "),a(),i(20,"button",5),s(21,"Close"),a()()),e&2&&(l(5),b(t.logger.logs().length===0?5:6))},dependencies:[X,q,K,Y,J,M,y,B,T,Ve,He],styles:["h2[mat-dialog-title][_ngcontent-%COMP%]{display:flex;align-items:center;gap:12px}mat-dialog-content[_ngcontent-%COMP%]{min-height:300px;max-height:60vh}.no-logs[_ngcontent-%COMP%]{text-align:center;color:var(--mat-sys-on-surface-variant);padding:48px 16px;font-size:16px}.log-entries[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:1px}.log-entry[_ngcontent-%COMP%]{padding:12px;background-color:var(--mat-sys-surface-container-low);font-family:Courier New,Consolas,monospace;font-size:13px;border-radius:4px}.log-timestamp[_ngcontent-%COMP%]{color:var(--mat-sys-primary);margin-right:12px;font-weight:600}.log-message[_ngcontent-%COMP%]{color:var(--mat-sys-on-surface)}.log-data[_ngcontent-%COMP%]{margin:8px 0 0;padding:12px;background-color:var(--mat-sys-surface-container);border-radius:4px;overflow-x:auto;font-size:12px;color:var(--mat-sys-on-surface-variant);border-left:3px solid var(--mat-sys-primary)}mat-dialog-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{display:flex;align-items:center;gap:8px}"]})};var jt=(r,o)=>o.url;function Gt(r,o){if(r&1&&(i(0,"a",21),s(1),a(),i(2,"span",22),s(3,"\u203A"),a()),r&2){let e=g().$implicit;H("routerLink",e.url),l(),x(e.label)}}function Vt(r,o){if(r&1&&(i(0,"span",20),s(1),a()),r&2){let e=g().$implicit;l(),x(e.label)}}function Ht(r,o){if(r&1&&_(0,Gt,4,2)(1,Vt,2,1,"span",20),r&2){let e=o.$index,t=o.$count;b(e!==t-1?0:1)}}var Ut={name:"Loading\u2026",initials:""},Qt={name:"Unknown user",initials:"?"};function Wt(r){let o=r.trim().split(/\s+/).filter(Boolean);return o.length===0?"":(o.length===1?o:o.slice(-2)).map(t=>t.charAt(0).toUpperCase()).join("")}var Zt=4,de=class r{title=w("graphnote");breadcrumbs=w([]);searchQuery=w("");isLoggerOpen=w(!1);isSidebarOpen=w(!1);currentUser=w(Ut);router=d(W);activatedRoute=d(We);dialog=d($);logger=d(ee);data=d(te);ngOnInit(){this.updateBreadcrumbs(),this.router.events.pipe(k(o=>o instanceof Qe)).subscribe(()=>this.updateBreadcrumbs()),this.loadCurrentUser()}async loadCurrentUser(){await this.data.ready;let o=this.data.getCurrentUserFromCache();this.currentUser.set(o?{name:o.Title,initials:Wt(o.Title)}:Qt)}onNewTopic(){this.logger.debugLog("New topic clicked")}onSearchInput(o){this.searchQuery.set(o)}refreshBreadcrumbs(){this.updateBreadcrumbs()}toggleSidebar(){this.isSidebarOpen.update(o=>!o)}closeSidebar(){this.isSidebarOpen.set(!1)}toggleLoggerDialog(){if(this.isLoggerOpen())this.dialog.closeAll(),this.isLoggerOpen.set(!1);else{let o=this.dialog.open(se,{width:"70vw",height:"80vh",maxWidth:"90vw",maxHeight:"90vh",disableClose:!1,hasBackdrop:!0,backdropClass:"logger-dark-backdrop",panelClass:"logger-dialog-panel"});this.isLoggerOpen.set(!0),o.afterClosed().subscribe(()=>{this.isLoggerOpen.set(!1)})}}updateBreadcrumbs(){let o=this.createBreadcrumbs(this.activatedRoute.root);this.breadcrumbs.set(o.slice(-Zt))}createBreadcrumbs(o,e="",t=[]){let n=o.children;if(n.length===0)return t;for(let c of n){let m=c.snapshot.url.map(wt=>wt.path).join("/");m!==""&&(e+=`/${m}`);let Ee=c.snapshot.data.breadcrumb;return Ee&&t.push({label:Ee,url:e}),this.createBreadcrumbs(c,e,t)}return t}static \u0275fac=function(e){return new(e||r)};static \u0275cmp=u({type:r,selectors:[["app-root"]],decls:35,vars:6,consts:[[1,"app-shell"],["mode","over","aria-label","Main navigation",1,"app-sidenav",3,"openedChange","click","opened"],[1,"sidenav-user"],[1,"user-avatar"],[1,"user-name"],[1,"sidenav-nav"],["mat-list-item","","routerLink","/topics"],["matListItemIcon",""],["matListItemTitle",""],[1,"sidenav-spacer"],[1,"sidenav-footer"],["type","button","mat-icon-button","","aria-label","Toggle debug logger",1,"logger-toggle",3,"click"],[1,"app-content"],[1,"topbar"],["type","button","mat-icon-button","","aria-label","Toggle navigation menu",1,"sidebar-toggle",3,"click"],[1,"search-field"],[1,"search-icon"],["type","text","placeholder","Search topics, edges, annotations\u2026",1,"search-input",3,"input","value"],["type","button","mat-flat-button","",1,"new-topic-button",3,"click"],["aria-label","Breadcrumb",1,"breadcrumb"],[1,"current"],[3,"routerLink"],[1,"separator"]],template:function(e,t){e&1&&(i(0,"mat-sidenav-container",0)(1,"mat-sidenav",1),p("openedChange",function(c){return t.isSidebarOpen.set(c)})("click",function(){return t.closeSidebar()}),i(2,"div",2)(3,"span",3),s(4),a(),i(5,"span",4),s(6),a()(),i(7,"mat-nav-list",5)(8,"a",6)(9,"mat-icon",7),s(10,"topic"),a(),i(11,"span",8),s(12,"Topics"),a()()(),R(13,"div",9),i(14,"div",10)(15,"button",11),p("click",function(){return t.toggleLoggerDialog()}),i(16,"mat-icon"),s(17,"code"),a()()()(),i(18,"mat-sidenav-content",12)(19,"mat-toolbar",13)(20,"button",14),p("click",function(){return t.toggleSidebar()}),i(21,"mat-icon"),s(22,"menu"),a()(),i(23,"div",15)(24,"mat-icon",16),s(25,"search"),a(),i(26,"input",17),p("input",function(c){return t.onSearchInput(c.target.value)}),a()(),i(27,"button",18),p("click",function(){return t.onNewTopic()}),i(28,"mat-icon"),s(29,"add"),a(),s(30," New topic "),a()(),i(31,"nav",19),G(32,Ht,2,1,null,null,jt),a(),R(34,"router-outlet"),a()()),e&2&&(l(),H("opened",t.isSidebarOpen()),l(3),x(t.currentUser().initials),l(2),x(t.currentUser().name),l(9),v("active",t.isLoggerOpen()),l(11),H("value",t.searchQuery()),l(6),V(t.breadcrumbs()))},dependencies:[Ze,$e,M,y,it,B,T,gt,ut,vt,Oe,bt,ae,pt,mt,lt,ct,dt],styles:["[_nghost-%COMP%]{--surface-2: #ffffff;--surface-1: #f7f6f2;--surface-0: #f1efe8;--bg-accent: #e6f1fb;--text-primary: #1a1a18;--text-secondary: #5f5e5a;--text-muted: #888780;--text-accent: #0c447c;--border: rgba(0, 0, 0, .1);display:block;background:var(--surface-0);color:var(--text-primary);min-height:100vh}.app-shell[_ngcontent-%COMP%]{min-height:100vh;background:transparent}.app-content[_ngcontent-%COMP%]{background:transparent;color:var(--text-primary)}@media(prefers-color-scheme:dark){[_nghost-%COMP%]{--surface-2: #2c2c2a;--surface-1: #232321;--surface-0: #1a1a18;--bg-accent: #0c447c;--text-primary: #f1efe8;--text-secondary: #b4b2a9;--text-muted: #888780;--text-accent: #85b7eb;--border: rgba(255, 255, 255, .12)}}.topbar[_ngcontent-%COMP%]{background:transparent;color:var(--text-primary);gap:8px}.search-field[_ngcontent-%COMP%]{flex:1 1 auto;display:flex;align-items:center;gap:8px;height:36px;padding:0 10px;background:var(--surface-1);border:.5px solid var(--border);border-radius:4px}.search-icon[_ngcontent-%COMP%]{color:var(--text-muted);font-weight:400;flex-shrink:0}.search-input[_ngcontent-%COMP%]{flex:1 1 auto;min-width:0;border:none;outline:none;background:transparent;font-family:inherit;font-size:1rem;font-weight:400;line-height:normal;color:var(--text-primary)}.search-input[_ngcontent-%COMP%]::placeholder{color:var(--text-muted)}.new-topic-button[_ngcontent-%COMP%]{--mdc-filled-button-container-color: var(--text-accent);--mdc-filled-button-label-text-color: var(--surface-2);flex-shrink:0}.sidebar-toggle[_ngcontent-%COMP%], .logger-toggle[_ngcontent-%COMP%]{--mdc-icon-button-icon-color: var(--text-muted);flex-shrink:0}.logger-toggle.active[_ngcontent-%COMP%]{--mdc-icon-button-icon-color: var(--text-accent);background:var(--bg-accent);border-radius:50%}.app-sidenav[_ngcontent-%COMP%]{display:flex;flex-direction:column;width:260px;background:var(--surface-1);color:var(--text-primary);border-right:.5px solid var(--border)}.sidenav-user[_ngcontent-%COMP%]{display:flex;align-items:center;gap:12px;padding:20px 16px;border-bottom:.5px solid var(--border)}.user-avatar[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;flex-shrink:0;width:36px;height:36px;border-radius:50%;background:var(--text-accent);color:var(--surface-2);font-size:13px;font-weight:600}.user-name[_ngcontent-%COMP%]{font-size:14px;font-weight:500;color:var(--text-primary);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.sidenav-nav[_ngcontent-%COMP%]{padding-top:8px}.sidenav-nav[_ngcontent-%COMP%]   a.mdc-list-item[_ngcontent-%COMP%]{color:var(--text-primary)}.sidenav-nav[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{color:var(--text-muted)}.sidenav-spacer[_ngcontent-%COMP%]{flex:1 1 auto}.sidenav-footer[_ngcontent-%COMP%]{padding:12px 16px;border-top:.5px solid var(--border)}.breadcrumb[_ngcontent-%COMP%]{display:flex;align-items:center;gap:4px;padding:0 16px 12px;font-size:12px;color:var(--text-muted);background:transparent}.breadcrumb[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:var(--text-muted);text-decoration:none}.breadcrumb[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color:var(--text-accent);text-decoration:underline}.breadcrumb[_ngcontent-%COMP%]   .separator[_ngcontent-%COMP%]{color:var(--text-muted)}.breadcrumb[_ngcontent-%COMP%]   .current[_ngcontent-%COMP%]{color:var(--text-secondary);font-weight:500}.app-toast-panel[_ngcontent-%COMP%]   .mdc-snackbar__surface[_ngcontent-%COMP%]{background-color:transparent!important;box-shadow:none!important;padding:0!important}"]})};Ue(de,_t).catch(r=>console.error(r));
