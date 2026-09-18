import{a as Pt}from"./chunk-JNBE2KBT.js";import{a as Dt}from"./chunk-EQNL3PCM.js";import{a as Et,b as Tt,c as At}from"./chunk-7C5VQVCK.js";import{a as ht,c as Y,d as X,e as ee,f as te,g as ne,h as re}from"./chunk-YLDVUJHT.js";import"./chunk-FYNGFHEH.js";import{a as ke}from"./chunk-5LCQAPWB.js";import{a as Je,b as Ye,c as Xe,d as et,e as tt,f as K,g as nt,h as rt,i as it}from"./chunk-RMJQNJDE.js";import{b as Bt,c as Rt,d as It}from"./chunk-MWJZTKJ2.js";import{F as Ct,G as Mt,M as St,N as Ot,b as pt,c as j,d as M,e as ut,f as V,g as gt,h as Me}from"./chunk-YBAMXKYI.js";import{a as kt,b as ie}from"./chunk-V6JJVCUI.js";import{$ as T,$a as I,A as U,Aa as Ne,Ab as s,B as Re,Bb as b,Bd as bt,C as ge,Cb as Ue,D as Ie,Dc as dt,Dd as xt,Ec as ct,Ed as wt,Fd as yt,Ha as f,Ia as je,Ib as z,Ic as lt,K as he,M as C,Ma as G,Mb as ye,Nb as Qe,Ob as He,T as Ae,Tb as We,V as fe,Va as be,Wc as mt,X as d,Xa as u,Ya as g,Yb as $e,Yc as E,_a as R,_b as q,aa as B,ab as A,bb as a,cb as o,da as _e,db as S,ea as Fe,g as y,ha as Q,hc as Ze,ia as H,ib as F,ic as qe,jc as Ke,ka as ze,kb as h,la as _,mb as p,nb as O,nc as at,oa as W,ob as x,oc as ot,p as ue,pb as xe,pc as L,qa as $,qb as we,qc as N,ra as Le,rb as D,sb as P,tc as J,ub as Ve,uc as Ce,v as Be,vb as Ge,vd as ft,w as k,wa as c,wc as st,wd as _t,xa as ve,xb as Z,yb as w,zd as vt}from"./chunk-GKFGOCHX.js";var ae=class n{static \u0275fac=function(e){return new(e||n)};static \u0275cmp=f({type:n,selectors:[["app-release-notes"]],decls:17,vars:0,consts:[["mat-dialog-title",""],[1,"release-notes-content"],["align","end"],["mat-button","","mat-dialog-close",""]],template:function(e,t){e&1&&(a(0,"h2",0),s(1,"Release Notes"),o(),a(2,"mat-dialog-content",1)(3,"h3"),s(4,"beta-0.1"),o(),a(5,"ul")(6,"li"),s(7,"Initial release of Project Admin MSTD"),o(),a(8,"li"),s(9,"Create topics on the Work in Progress board with a title, description, status, and owner"),o(),a(10,"li"),s(11,"Drag and drop topics between Queued, In Progress, and Closed to update their status"),o(),a(12,"li"),s(13,"Add comments to a topic to track discussion over time"),o()()(),a(14,"mat-dialog-actions",2)(15,"button",3),s(16,"Close"),o()())},dependencies:[re,X,ee,ne,te,M,j],styles:[".release-notes-content[_ngcontent-%COMP%]{max-height:60vh}.release-notes-content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin:0 0 8px;font-size:1rem;font-weight:600}.release-notes-content[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{margin:0 0 20px;padding-left:20px}.release-notes-content[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin-bottom:4px}"]})};var se=class n{router=d(K);dialog=d(Y);navigateTo(i){this.router.navigate([i])}openReleaseNotes(){this.dialog.open(ae,{width:"500px",maxHeight:"80vh"})}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=f({type:n,selectors:[["app-home"]],decls:21,vars:0,consts:[[1,"banner"],[1,"banner-content"],[1,"banner-icon"],[1,"lock-icon"],[1,"subtitle"],["mat-raised-button","","color","primary",1,"release-notes-btn",3,"click"],[1,"banner-image"],[1,"content"],[1,"navigation-grid"],[1,"nav-card",3,"click"]],template:function(e,t){e&1&&(a(0,"div",0)(1,"div",1)(2,"div",2)(3,"mat-icon",3),s(4,"shield"),o()(),a(5,"h1"),s(6,"GraphNote"),o(),a(7,"p",4),s(8,"GraphNote ver. beta-0.1"),o(),a(9,"button",5),h("click",function(){return t.openReleaseNotes()}),s(10," Release Notes "),o()(),S(11,"div",6),o(),a(12,"div",7)(13,"h2"),s(14,"Navigate"),o(),a(15,"div",8)(16,"div",9),h("click",function(){return t.navigateTo("/topics")}),a(17,"mat-icon"),s(18,"assignment"),o(),a(19,"h3"),s(20,"Topics"),o()()()())},dependencies:[N,L,M,j],styles:[".banner[_ngcontent-%COMP%]{position:relative;display:flex;align-items:center;min-height:400px;padding:60px 80px;overflow:hidden;background-color:#fff}.banner-content[_ngcontent-%COMP%]{position:relative;z-index:2;max-width:600px}.banner-icon[_ngcontent-%COMP%]{margin-bottom:24px}.lock-icon[_ngcontent-%COMP%]{font-size:64px;width:64px;height:64px;color:var(--mat-sys-primary);border:3px solid var(--mat-sys-primary);border-radius:50%;padding:12px}.banner[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:2.5rem;font-weight:700;color:var(--mat-sys-on-surface);margin:0 0 12px;line-height:1.2}.subtitle[_ngcontent-%COMP%]{font-size:1.25rem;color:var(--mat-sys-on-surface-variant);margin:0 0 32px}.release-notes-btn[_ngcontent-%COMP%]{padding:12px 32px;font-size:1rem;border-radius:24px}.banner-image[_ngcontent-%COMP%]{position:absolute;right:0;top:0;bottom:0;width:70%;background-image:url(https://collab.napma.nato.int/flep/mstd/SiteAssets/GraphNote/images/banner.jpeg);background-size:cover;background-position:center;z-index:1;mask-image:linear-gradient(to right,transparent 0%,rgba(0,0,0,.3) 30%,rgba(0,0,0,.8) 60%,black 100%);-webkit-mask-image:linear-gradient(to right,transparent 0%,rgba(0,0,0,.3) 30%,rgba(0,0,0,.8) 60%,black 100%)}.content[_ngcontent-%COMP%]{padding:40px 80px;background-color:var(--mat-sys-surface)}.content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:1.75rem;font-weight:500;color:var(--mat-sys-on-surface);margin:0 0 32px}.navigation-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fill,minmax(200px,1fr));gap:24px}.nav-card[_ngcontent-%COMP%]{background:#fff;border:1px solid var(--mat-sys-outline-variant);border-radius:12px;padding:32px 24px;text-align:center;cursor:pointer;transition:all .3s ease;display:flex;flex-direction:column;align-items:center;gap:16px}.nav-card[_ngcontent-%COMP%]:hover{box-shadow:0 4px 12px #0000001a;border-color:var(--mat-sys-primary);transform:translateY(-2px)}.nav-card[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:48px;width:48px;height:48px;color:var(--mat-sys-on-surface-variant)}.nav-card[_ngcontent-%COMP%]:hover   mat-icon[_ngcontent-%COMP%]{color:var(--mat-sys-primary)}.nav-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:1rem;font-weight:500;color:var(--mat-sys-on-surface);margin:0}@media(max-width:768px){.banner[_ngcontent-%COMP%]{padding:40px 24px;min-height:300px}.banner-image[_ngcontent-%COMP%]{width:40%}.content[_ngcontent-%COMP%]{padding:24px}.navigation-grid[_ngcontent-%COMP%]{grid-template-columns:repeat(auto-fill,minmax(150px,1fr));gap:16px}}"]})};var zt=[{path:"",component:Pt,data:{breadcrumb:"Work in progress"}},{path:"home",component:se,data:{breadcrumb:"Home"}},{path:"topics",loadComponent:()=>import("./chunk-ZGQ7PQFB.js").then(n=>n.Topics),data:{breadcrumb:"Topics"},children:[{path:":gnid",loadComponent:()=>import("./chunk-7TJS3Z6H.js").then(n=>n.Topic),data:{breadcrumb:"Topic"}}]},{path:"wip",loadComponent:()=>import("./chunk-TLZGQVTE.js").then(n=>n.Wip),data:{breadcrumb:"Work in progress"}},{path:"settings",loadComponent:()=>import("./chunk-5YB24S2E.js").then(n=>n.Settings),data:{breadcrumb:"Settings"},children:[{path:"organization",loadComponent:()=>import("./chunk-TYG3ENOV.js").then(n=>n.SettingsOrganization),data:{breadcrumb:"Organization"}}]},{path:"**",redirectTo:"topics"}];var Lt={providers:[ze(),rt(zt,it())]};var le=["*"],Wt=["content"],$t=[[["mat-drawer"]],[["mat-drawer-content"]],"*"],Zt=["mat-drawer","mat-drawer-content","*"];function qt(n,i){if(n&1){let e=F();a(0,"div",1),h("click",function(){T(e);let r=p();return B(r._onBackdropClicked())}),o()}if(n&2){let e=p();w("mat-drawer-shown",e._isShowingBackdrop())}}function Kt(n,i){n&1&&(a(0,"mat-drawer-content"),x(1,2),o())}var Jt=[[["mat-sidenav"]],[["mat-sidenav-content"]],"*"],Yt=["mat-sidenav","mat-sidenav-content","*"];function Xt(n,i){if(n&1){let e=F();a(0,"div",1),h("click",function(){T(e);let r=p();return B(r._onBackdropClicked())}),o()}if(n&2){let e=p();w("mat-drawer-shown",e._isShowingBackdrop())}}function en(n,i){n&1&&(a(0,"mat-sidenav-content"),x(1,2),o())}var tn=`.mat-drawer-container {
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
`;var nn=new fe("MAT_DRAWER_DEFAULT_AUTOSIZE",{providedIn:"root",factory:()=>!1}),Ee=new fe("MAT_DRAWER_CONTAINER"),de=(()=>{class n extends V{_platform=d(J);_changeDetectorRef=d(q);_container=d(Pe);constructor(){let e=d($),t=d(ut),r=d(H);super(e,t,r)}ngAfterContentInit(){this._container._contentMarginChanges.subscribe(()=>{this._changeDetectorRef.markForCheck()})}_shouldBeHidden(){if(this._platform.isBrowser)return!1;let{start:e,end:t}=this._container;return e!=null&&e.mode!=="over"&&e.opened||t!=null&&t.mode!=="over"&&t.opened}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=f({type:n,selectors:[["mat-drawer-content"]],hostAttrs:[1,"mat-drawer-content"],hostVars:6,hostBindings:function(t,r){t&2&&(Z("margin-left",r._container._contentMargins.left,"px")("margin-right",r._container._contentMargins.right,"px"),w("mat-drawer-content-hidden",r._shouldBeHidden()))},features:[z([{provide:V,useExisting:n}]),G],ngContentSelectors:le,decls:1,vars:0,template:function(t,r){t&1&&(O(),x(0))},encapsulation:2,changeDetection:0})}return n})(),De=(()=>{class n{_elementRef=d($);_focusTrapFactory=d(ct);_focusMonitor=d(st);_platform=d(J);_ngZone=d(H);_renderer=d(Ne);_interactivityChecker=d(dt);_doc=d(Fe);_container=d(Ee,{optional:!0});_focusTrap=null;_elementFocusedBeforeDrawerWasOpened=null;_eventCleanups;_isAttached=!1;_anchor=null;get position(){return this._position}set position(e){e=e==="end"?"end":"start",e!==this._position&&(this._isAttached&&this._updatePositionInParent(e),this._position=e,this.onPositionChanged.emit())}_position="start";get mode(){return this._mode}set mode(e){this._mode=e,this._updateFocusTrapState(),this._modeChanged.next()}_mode="over";get disableClose(){return this._disableClose}set disableClose(e){this._disableClose=E(e)}_disableClose=!1;get autoFocus(){let e=this._autoFocus;return e??(this.mode==="side"?"dialog":"first-tabbable")}set autoFocus(e){(e==="true"||e==="false"||e==null)&&(e=E(e)),this._autoFocus=e}_autoFocus;get opened(){return this._opened()}set opened(e){this.toggle(E(e))}_opened=_(!1);_openedVia=null;_animationStarted=new y;_animationEnd=new y;openedChange=new Q(!0);_openedStream=this.openedChange.pipe(k(e=>e),ue(()=>{}));openedStart=this._animationStarted.pipe(k(()=>this.opened),ge(void 0));_closedStream=this.openedChange.pipe(k(e=>!e),ue(()=>{}));closedStart=this._animationStarted.pipe(k(()=>!this.opened),ge(void 0));_destroyed=new y;onPositionChanged=new Q;_content;_modeChanged=new y;_injector=d(_e);_changeDetectorRef=d(q);constructor(){this.openedChange.pipe(C(this._destroyed)).subscribe(e=>{e?(this._elementFocusedBeforeDrawerWasOpened=this._doc.activeElement,this._takeFocus()):this._isFocusWithinDrawer()&&this._restoreFocus(this._openedVia||"program")}),this._eventCleanups=this._ngZone.runOutsideAngular(()=>{let e=this._renderer,t=this._elementRef.nativeElement;return[e.listen(t,"keydown",r=>{r.keyCode===27&&!this.disableClose&&!lt(r)&&this._ngZone.run(()=>{this.close(),r.stopPropagation(),r.preventDefault()})}),e.listen(t,"transitionend",this._handleTransitionEvent),e.listen(t,"transitioncancel",this._handleTransitionEvent)]}),this._animationEnd.subscribe(()=>{this.openedChange.emit(this.opened)})}_forceFocus(e,t){this._interactivityChecker.isFocusable(e)||(e.tabIndex=-1,this._ngZone.runOutsideAngular(()=>{let r=()=>{l(),m(),e.removeAttribute("tabindex")},l=this._renderer.listen(e,"blur",r),m=this._renderer.listen(e,"mousedown",r)})),e.focus(t)}_focusByCssSelector(e,t){let r=this._elementRef.nativeElement.querySelector(e);r&&this._forceFocus(r,t)}_takeFocus(){if(!this._focusTrap)return;let e=this._elementRef.nativeElement;switch(this.autoFocus){case!1:case"dialog":return;case!0:case"first-tabbable":ve(()=>{!this._focusTrap.focusInitialElement()&&typeof e.focus=="function"&&e.focus()},{injector:this._injector});break;case"first-heading":this._focusByCssSelector('h1, h2, h3, h4, h5, h6, [role="heading"]');break;default:this._focusByCssSelector(this.autoFocus);break}}_restoreFocus(e){this.autoFocus!=="dialog"&&(this._elementFocusedBeforeDrawerWasOpened?this._focusMonitor.focusVia(this._elementFocusedBeforeDrawerWasOpened,e):this._elementRef.nativeElement.blur(),this._elementFocusedBeforeDrawerWasOpened=null)}_isFocusWithinDrawer(){let e=this._doc.activeElement;return!!e&&this._elementRef.nativeElement.contains(e)}ngAfterViewInit(){this._isAttached=!0,this._position==="end"&&this._updatePositionInParent("end"),this._platform.isBrowser&&(this._focusTrap=this._focusTrapFactory.create(this._elementRef.nativeElement),this._updateFocusTrapState())}ngOnDestroy(){this._eventCleanups.forEach(e=>e()),this._focusTrap?.destroy(),this._anchor?.remove(),this._anchor=null,this._animationStarted.complete(),this._animationEnd.complete(),this._modeChanged.complete(),this._destroyed.next(),this._destroyed.complete()}open(e){return this.toggle(!0,e)}close(){return this.toggle(!1)}_closeViaBackdropClick(){return this._setOpen(!1,!0,"mouse")}toggle(e=!this.opened,t){e&&t&&(this._openedVia=t);let r=this._setOpen(e,!e&&this._isFocusWithinDrawer(),this._openedVia||"program");return e||(this._openedVia=null),r}_setOpen(e,t,r){return e===this.opened?Promise.resolve(e?"open":"close"):(this._opened.set(e),this._container?._transitionsEnabled?(this._setIsAnimating(!0),setTimeout(()=>this._animationStarted.next())):setTimeout(()=>{this._animationStarted.next(),this._animationEnd.next()}),this._elementRef.nativeElement.classList.toggle("mat-drawer-opened",e),!e&&t&&this._restoreFocus(r),this._changeDetectorRef.markForCheck(),this._updateFocusTrapState(),new Promise(l=>{this.openedChange.pipe(Re(1)).subscribe(m=>l(m?"open":"close"))}))}_setIsAnimating(e){this._elementRef.nativeElement.classList.toggle("mat-drawer-animating",e)}_getWidth(){return this._elementRef.nativeElement.offsetWidth||0}_updateFocusTrapState(){this._focusTrap&&(this._focusTrap.enabled=this.opened&&!!this._container?._isShowingBackdrop())}_updatePositionInParent(e){if(!this._platform.isBrowser)return;let t=this._elementRef.nativeElement,r=t.parentNode;e==="end"?(this._anchor||(this._anchor=this._doc.createComment("mat-drawer-anchor"),r.insertBefore(this._anchor,t)),r.appendChild(t)):this._anchor&&this._anchor.parentNode.insertBefore(t,this._anchor)}_handleTransitionEvent=e=>{let t=this._elementRef.nativeElement;e.target===t&&this._ngZone.run(()=>{e.type==="transitionend"&&this._setIsAnimating(!1),this._animationEnd.next(e)})};static \u0275fac=function(t){return new(t||n)};static \u0275cmp=f({type:n,selectors:[["mat-drawer"]],viewQuery:function(t,r){if(t&1&&we(Wt,5),t&2){let l;D(l=P())&&(r._content=l.first)}},hostAttrs:[1,"mat-drawer"],hostVars:12,hostBindings:function(t,r){t&2&&(be("align",null)("tabIndex",r.mode!=="side"?"-1":null),Z("visibility",!r._container&&!r.opened?"hidden":null),w("mat-drawer-end",r.position==="end")("mat-drawer-over",r.mode==="over")("mat-drawer-push",r.mode==="push")("mat-drawer-side",r.mode==="side"))},inputs:{position:"position",mode:"mode",disableClose:"disableClose",autoFocus:"autoFocus",opened:"opened"},outputs:{openedChange:"openedChange",_openedStream:"opened",openedStart:"openedStart",_closedStream:"closed",closedStart:"closedStart",onPositionChanged:"positionChanged"},exportAs:["matDrawer"],ngContentSelectors:le,decls:3,vars:0,consts:[["content",""],["cdkScrollable","",1,"mat-drawer-inner-container"]],template:function(t,r){t&1&&(O(),a(0,"div",1,0),x(2),o())},dependencies:[V],encapsulation:2,changeDetection:0})}return n})(),Pe=(()=>{class n{_dir=d(at,{optional:!0});_element=d($);_ngZone=d(H);_changeDetectorRef=d(q);_animationDisabled=mt();_transitionsEnabled=!1;_allDrawers;_drawers=new Le;_content;_userContent;get start(){return this._start}get end(){return this._end}get autosize(){return this._autosize}set autosize(e){this._autosize=E(e)}_autosize=d(nn);get hasBackdrop(){return this._drawerHasBackdrop(this._start)||this._drawerHasBackdrop(this._end)}set hasBackdrop(e){this._backdropOverride=e==null?null:E(e)}_backdropOverride=null;backdropClick=new Q;_start=null;_end=null;_left=null;_right=null;_destroyed=new y;_doCheckSubject=new y;_contentMargins={left:null,right:null};_contentMarginChanges=new y;get scrollable(){return this._userContent||this._content}_injector=d(_e);constructor(){let e=d(J),t=d(gt);this._dir?.change.pipe(C(this._destroyed)).subscribe(()=>{this._validateDrawers(),this.updateContentMargins()}),t.change().pipe(C(this._destroyed)).subscribe(()=>this.updateContentMargins()),!this._animationDisabled&&e.isBrowser&&this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{this._element.nativeElement.classList.add("mat-drawer-transition"),this._transitionsEnabled=!0},200)})}ngAfterContentInit(){this._allDrawers.changes.pipe(he(this._allDrawers),C(this._destroyed)).subscribe(e=>{this._drawers.reset(e.filter(t=>!t._container||t._container===this)),this._drawers.notifyOnChanges()}),this._drawers.changes.pipe(he(null)).subscribe(()=>{this._validateDrawers(),this._drawers.forEach(e=>{this._watchDrawerToggle(e),this._watchDrawerPosition(e),this._watchDrawerMode(e)}),(!this._drawers.length||this._isDrawerOpen(this._start)||this._isDrawerOpen(this._end))&&this.updateContentMargins(),this._changeDetectorRef.markForCheck()}),this._ngZone.runOutsideAngular(()=>{this._doCheckSubject.pipe(U(10),C(this._destroyed)).subscribe(()=>this.updateContentMargins())})}ngOnDestroy(){this._contentMarginChanges.complete(),this._doCheckSubject.complete(),this._drawers.destroy(),this._destroyed.next(),this._destroyed.complete()}open(){this._drawers.forEach(e=>e.open())}close(){this._drawers.forEach(e=>e.close())}updateContentMargins(){let e=0,t=0;if(this._left&&this._left.opened){if(this._left.mode=="side")e+=this._left._getWidth();else if(this._left.mode=="push"){let r=this._left._getWidth();e+=r,t-=r}}if(this._right&&this._right.opened){if(this._right.mode=="side")t+=this._right._getWidth();else if(this._right.mode=="push"){let r=this._right._getWidth();t+=r,e-=r}}e=e||null,t=t||null,(e!==this._contentMargins.left||t!==this._contentMargins.right)&&(this._contentMargins={left:e,right:t},this._ngZone.run(()=>this._contentMarginChanges.next(this._contentMargins)))}ngDoCheck(){this._autosize&&this._isPushed()&&this._ngZone.runOutsideAngular(()=>this._doCheckSubject.next())}_watchDrawerToggle(e){e._animationStarted.pipe(C(this._drawers.changes)).subscribe(()=>{this.updateContentMargins(),this._changeDetectorRef.markForCheck()}),e.mode!=="side"&&e.openedChange.pipe(C(this._drawers.changes)).subscribe(()=>this._setContainerClass(e.opened))}_watchDrawerPosition(e){e.onPositionChanged.pipe(C(this._drawers.changes)).subscribe(()=>{ve({read:()=>this._validateDrawers()},{injector:this._injector})})}_watchDrawerMode(e){e._modeChanged.pipe(C(Be(this._drawers.changes,this._destroyed))).subscribe(()=>{this.updateContentMargins(),this._changeDetectorRef.markForCheck()})}_setContainerClass(e){let t=this._element.nativeElement.classList,r="mat-drawer-container-has-open";e?t.add(r):t.remove(r)}_validateDrawers(){this._start=this._end=null,this._drawers.forEach(e=>{e.position=="end"?(this._end!=null,this._end=e):(this._start!=null,this._start=e)}),this._right=this._left=null,this._dir&&this._dir.value==="rtl"?(this._left=this._end,this._right=this._start):(this._left=this._start,this._right=this._end)}_isPushed(){return this._isDrawerOpen(this._start)&&this._start.mode!="over"||this._isDrawerOpen(this._end)&&this._end.mode!="over"}_onBackdropClicked(){this.backdropClick.emit(),this._closeModalDrawersViaBackdrop()}_closeModalDrawersViaBackdrop(){[this._start,this._end].filter(e=>e&&!e.disableClose&&this._drawerHasBackdrop(e)).forEach(e=>e._closeViaBackdropClick())}_isShowingBackdrop(){return this._isDrawerOpen(this._start)&&this._drawerHasBackdrop(this._start)||this._isDrawerOpen(this._end)&&this._drawerHasBackdrop(this._end)}_isDrawerOpen(e){return e!=null&&e.opened}_drawerHasBackdrop(e){return this._backdropOverride==null?!!e&&e.mode!=="side":this._backdropOverride}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=f({type:n,selectors:[["mat-drawer-container"]],contentQueries:function(t,r,l){if(t&1&&xe(l,de,5)(l,De,5),t&2){let m;D(m=P())&&(r._content=m.first),D(m=P())&&(r._allDrawers=m)}},viewQuery:function(t,r){if(t&1&&we(de,5),t&2){let l;D(l=P())&&(r._userContent=l.first)}},hostAttrs:[1,"mat-drawer-container"],hostVars:2,hostBindings:function(t,r){t&2&&w("mat-drawer-container-explicit-backdrop",r._backdropOverride)},inputs:{autosize:"autosize",hasBackdrop:"hasBackdrop"},outputs:{backdropClick:"backdropClick"},exportAs:["matDrawerContainer"],features:[z([{provide:Ee,useExisting:n}])],ngContentSelectors:Zt,decls:4,vars:2,consts:[[1,"mat-drawer-backdrop",3,"mat-drawer-shown"],[1,"mat-drawer-backdrop",3,"click"]],template:function(t,r){t&1&&(O($t),u(0,qt,1,2,"div",0),x(1),x(2,1),u(3,Kt,2,0,"mat-drawer-content")),t&2&&(g(r.hasBackdrop?0:-1),c(3),g(r._content?-1:3))},dependencies:[de],styles:[`.mat-drawer-container {
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
`],encapsulation:2,changeDetection:0})}return n})(),ce=(()=>{class n extends de{static \u0275fac=(()=>{let e;return function(r){return(e||(e=W(n)))(r||n)}})();static \u0275cmp=f({type:n,selectors:[["mat-sidenav-content"]],hostAttrs:[1,"mat-drawer-content","mat-sidenav-content"],features:[z([{provide:V,useExisting:n}]),G],ngContentSelectors:le,decls:1,vars:0,template:function(t,r){t&1&&(O(),x(0))},encapsulation:2,changeDetection:0})}return n})(),Te=(()=>{class n extends De{get fixedInViewport(){return this._fixedInViewport}set fixedInViewport(e){this._fixedInViewport=E(e)}_fixedInViewport=!1;get fixedTopGap(){return this._fixedTopGap}set fixedTopGap(e){this._fixedTopGap=Ce(e)}_fixedTopGap=0;get fixedBottomGap(){return this._fixedBottomGap}set fixedBottomGap(e){this._fixedBottomGap=Ce(e)}_fixedBottomGap=0;static \u0275fac=(()=>{let e;return function(r){return(e||(e=W(n)))(r||n)}})();static \u0275cmp=f({type:n,selectors:[["mat-sidenav"]],hostAttrs:[1,"mat-drawer","mat-sidenav"],hostVars:16,hostBindings:function(t,r){t&2&&(be("tabIndex",r.mode!=="side"?"-1":null)("align",null),Z("top",r.fixedInViewport?r.fixedTopGap:null,"px")("bottom",r.fixedInViewport?r.fixedBottomGap:null,"px"),w("mat-drawer-end",r.position==="end")("mat-drawer-over",r.mode==="over")("mat-drawer-push",r.mode==="push")("mat-drawer-side",r.mode==="side")("mat-sidenav-fixed",r.fixedInViewport))},inputs:{fixedInViewport:"fixedInViewport",fixedTopGap:"fixedTopGap",fixedBottomGap:"fixedBottomGap"},exportAs:["matSidenav"],features:[z([{provide:De,useExisting:n}]),G],ngContentSelectors:le,decls:3,vars:0,consts:[["content",""],["cdkScrollable","",1,"mat-drawer-inner-container"]],template:function(t,r){t&1&&(O(),a(0,"div",1,0),x(2),o())},dependencies:[V],encapsulation:2,changeDetection:0})}return n})(),Nt=(()=>{class n extends Pe{_allDrawers=void 0;_content=void 0;static \u0275fac=(()=>{let e;return function(r){return(e||(e=W(n)))(r||n)}})();static \u0275cmp=f({type:n,selectors:[["mat-sidenav-container"]],contentQueries:function(t,r,l){if(t&1&&xe(l,ce,5)(l,Te,5),t&2){let m;D(m=P())&&(r._content=m.first),D(m=P())&&(r._allDrawers=m)}},hostAttrs:[1,"mat-drawer-container","mat-sidenav-container"],hostVars:2,hostBindings:function(t,r){t&2&&w("mat-drawer-container-explicit-backdrop",r._backdropOverride)},exportAs:["matSidenavContainer"],features:[z([{provide:Ee,useExisting:n},{provide:Pe,useExisting:n}]),G],ngContentSelectors:Yt,decls:4,vars:2,consts:[[1,"mat-drawer-backdrop",3,"mat-drawer-shown"],[1,"mat-drawer-backdrop",3,"click"]],template:function(t,r){t&1&&(O(Jt),u(0,Xt,1,2,"div",0),x(1),x(2,1),u(3,en,2,0,"mat-sidenav-content")),t&2&&(g(r.hasBackdrop?0:-1),c(3),g(r._content?-1:3))},dependencies:[ce],styles:[tn],encapsulation:2,changeDetection:0})}return n})(),jt=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=je({type:n});static \u0275inj=Ae({imports:[Me,ot,Me]})}return n})();var an=(n,i)=>i.timestamp;function on(n,i){n&1&&(a(0,"p",1),s(1,"No debug logs yet"),o())}function sn(n,i){if(n&1&&(a(0,"pre",9),s(1),ye(2,"json"),o()),n&2){let e=p().$implicit;c(),b(Qe(2,1,e.data))}}function dn(n,i){if(n&1&&(a(0,"div",6)(1,"span",7),s(2),ye(3,"date"),o(),a(4,"span",8),s(5),o(),u(6,sn,3,3,"pre",9),o()),n&2){let e=i.$implicit;c(2),b(He(3,3,e.timestamp,"HH:mm:ss.SSS")),c(3),b(e.message),c(),g(e.data?6:-1)}}function cn(n,i){if(n&1&&(a(0,"div",2),R(1,dn,7,6,"div",6,an),o()),n&2){let e=p();c(),I(e.logger.logs())}}var me=class n{logger=d(kt);data=d(ie);dialogRef=d(ht);clearLogs(){this.logger.clearLogs()}async migrateStatusToOpenAndRemoveGuid(){this.logger.debugLog("Migrating Status -> Open and removing Guid for all list items...");try{let i=await this.data.migrateStatusToOpenAndRemoveGuid();this.logger.debugLog("Status -> Open / Guid removal migration finished",i)}catch(i){this.logger.debugLog("Status -> Open / Guid removal migration failed unexpectedly",i)}}async migrateTopicOwnerAndBackfillOrganization(){this.logger.debugLog("Backfilling Topic Organization from Owner and tagging Owner...");try{let i=await this.data.migrateTopicOwnerAndBackfillOrganization();this.logger.debugLog("Topic Owner tagging / Organization backfill migration finished",i)}catch(i){this.logger.debugLog("Topic Owner tagging / Organization backfill migration failed unexpectedly",i)}}close(){this.dialogRef.close()}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=f({type:n,selectors:[["app-logger-dialog"]],decls:14,vars:1,consts:[["mat-dialog-title",""],[1,"no-logs"],[1,"log-entries"],["align","end"],["mat-button","",3,"click"],["mat-button","","mat-dialog-close",""],[1,"log-entry"],[1,"log-timestamp"],[1,"log-message"],[1,"log-data"]],template:function(e,t){e&1&&(a(0,"h2",0)(1,"mat-icon"),s(2,"code"),o(),s(3,` Debug Log
`),o(),a(4,"mat-dialog-content"),u(5,on,2,0,"p",1)(6,cn,3,0,"div",2),o(),a(7,"mat-dialog-actions",3)(8,"button",4),h("click",function(){return t.clearLogs()}),a(9,"mat-icon"),s(10,"delete"),o(),s(11," Clear Logs "),o(),a(12,"button",5),s(13,"Close"),o()()),e&2&&(c(5),g(t.logger.logs().length===0?5:6))},dependencies:[re,X,ee,ne,te,M,j,N,L,Ze,qe],styles:["h2[mat-dialog-title][_ngcontent-%COMP%]{display:flex;align-items:center;gap:12px}mat-dialog-content[_ngcontent-%COMP%]{min-height:300px;max-height:60vh}.no-logs[_ngcontent-%COMP%]{text-align:center;color:var(--mat-sys-on-surface-variant);padding:48px 16px;font-size:16px}.log-entries[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:1px}.log-entry[_ngcontent-%COMP%]{padding:12px;background-color:var(--mat-sys-surface-container-low);font-family:Courier New,Consolas,monospace;font-size:13px;border-radius:4px}.log-timestamp[_ngcontent-%COMP%]{color:var(--mat-sys-primary);margin-right:12px;font-weight:600}.log-message[_ngcontent-%COMP%]{color:var(--mat-sys-on-surface)}.log-data[_ngcontent-%COMP%]{margin:8px 0 0;padding:12px;background-color:var(--mat-sys-surface-container);border-radius:4px;overflow-x:auto;font-size:12px;color:var(--mat-sys-on-surface-variant);border-left:3px solid var(--mat-sys-primary)}mat-dialog-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{display:flex;align-items:center;gap:8px}"]})};var ln=["searchInputEl"],mn=(n,i)=>i.url,Gt=(n,i)=>i.Gnid;function pn(n,i){if(n&1&&(a(0,"mat-option",32),s(1),o()),n&2){let e=i.$implicit;A("value",e.Gnid),c(),b(e.Name)}}function un(n,i){if(n&1){let e=F();a(0,"mat-form-field",30),h("click",function(r){return r.stopPropagation()}),a(1,"mat-select",31),h("selectionChange",function(r){T(e);let l=p();return B(l.activeOrganization.selectedGnid.set(r.value))}),R(2,pn,2,2,"mat-option",32,Gt),o()()}if(n&2){let e=p();c(),A("value",e.activeOrganization.selectedGnid()),c(),I(e.userOrganizations())}}function gn(n,i){n&1&&(a(0,"span",39),s(1,"Unassigned"),o())}function hn(n,i){if(n&1&&(a(0,"span",41),s(1),o()),n&2){let e=p().$implicit;c(),b(e.Description)}}function fn(n,i){if(n&1){let e=F();a(0,"button",35),h("mousedown",function(){let r=T(e).$implicit,l=p(3);return B(l.selectSearchResult(r))}),a(1,"div",36)(2,"span",37),s(3),o(),a(4,"div",38),u(5,gn,2,0,"span",39),a(6,"span",40),s(7),o()()(),u(8,hn,2,1,"span",41),o()}if(n&2){let e=i.$implicit,t=p(3);c(3),b(e.Title),c(2),g(t.isUnassigned(e)?5:-1),c(),w("status-pill-open",e.Open)("status-pill-closed",!e.Open),c(),Ue(" ",e.Open?"Open":"Closed"," "),c(),g(e.Description?8:-1)}}function _n(n,i){if(n&1&&R(0,fn,9,8,"button",34,Gt),n&2){let e=p(2);I(e.searchResults())}}function vn(n,i){n&1&&(a(0,"p",33),s(1,"No topics found."),o())}function bn(n,i){if(n&1&&(a(0,"div",26),u(1,_n,2,0)(2,vn,2,0,"p",33),o()),n&2){let e=p();c(),g(e.searchResults().length>0?1:2)}}function xn(n,i){n&1&&S(0,"mat-progress-bar",27)}function wn(n,i){if(n&1&&(a(0,"a",43),s(1),o(),a(2,"span",44),s(3,"\u203A"),o()),n&2){let e=p().$implicit;A("routerLink",e.url),c(),b(e.label)}}function yn(n,i){if(n&1&&(a(0,"span",42),s(1),o()),n&2){let e=p().$implicit;c(),b(e.label)}}function Cn(n,i){if(n&1&&u(0,wn,4,2)(1,yn,2,1,"span",42),n&2){let e=i.$index,t=i.$count;g(e!==t-1?0:1)}}function Mn(n,i){n&1&&(a(0,"div",29),S(1,"router-outlet"),o())}var kn={name:"Loading\u2026",initials:""},Sn={name:"Unknown user",initials:"?"};function On(n){let i=n.trim().split(/\s+/).filter(Boolean);return i.length===0?"":(i.length===1?i:i.slice(-2)).map(t=>t.charAt(0).toUpperCase()).join("")}var Dn=4,Vt=2,Pn=300,pe=class n{title=_("graphnote");breadcrumbs=_([]);searchQuery=_("");searchResults=_([]);showSearchResults=_(!1);isLoggerOpen=_(!1);isSidebarOpen=_(!1);isLoading=_(!0);searchInput$=new y;currentUser=_(kn);currentUserId=_(null);organizations=_([]);userOrganizations=We(()=>{let i=this.currentUserId();return i===null?[]:this.organizations().filter(e=>e.Members.includes(i))});router=d(K);activatedRoute=d(et);dialog=d(Y);data=d(ie);searchBridge=d(At);activeOrganization=d(Dt);searchInputEl=$e("searchInputEl");constructor(){this.searchInput$.pipe(U(Pn),Ie(),ke()).subscribe(i=>this.runSearch(i)),this.searchBridge.tagSearchRequested$.pipe(ke()).subscribe(i=>this.applyTagSearch(i))}ngOnInit(){this.updateBreadcrumbs(),this.router.events.pipe(k(i=>i instanceof Je)).subscribe(()=>this.updateBreadcrumbs()),this.router.events.subscribe(i=>{i instanceof Xe?console.error("[Router] NavigationError",{url:i.url,error:i.error}):i instanceof Ye?console.warn("[Router] NavigationCancel",{url:i.url,reason:i.reason,code:i.code}):console.log("[Router]",i.constructor.name,i)}),this.loadCurrentUser()}async loadCurrentUser(){await this.data.ready;let i=this.data.getCurrentUserFromCache();if(this.currentUser.set(i?{name:i.Title,initials:On(i.Title)}:Sn),this.currentUserId.set(i?.Id??null),this.organizations.set(this.data.getItems("Organization")),this.activeOrganization.selectedGnid()===null){let e=this.userOrganizations()[0];e&&this.activeOrganization.selectedGnid.set(e.Gnid)}this.isLoading.set(!1)}onSearchInput(i){this.searchQuery.set(i),this.searchInput$.next(i)}runSearch(i){let e=i.trim();if(e.length<Vt){this.searchResults.set([]),this.showSearchResults.set(!1);return}if(e.startsWith("#")){this.runTagSearch(e.slice(1));return}let t=e.toLowerCase(),r=v=>v.Title.toLowerCase().includes(t)||(v.Description??"").toLowerCase().includes(t),l=new Set(this.data.getItems("Comment").filter(v=>v.Text?.toLowerCase().includes(t)).map(v=>v.Parent)),m=this.data.getItems("Topic").filter(v=>r(v)||l.has(v.Gnid));this.searchResults.set(m),this.showSearchResults.set(!0)}runTagSearch(i){let e=i.trim().toLowerCase();if(!e){this.searchResults.set([]),this.showSearchResults.set(!1);return}let t=this.data.getItems("Topic").filter(r=>(r.tags??[]).some(l=>l.toLowerCase()===e));this.searchResults.set(t),this.showSearchResults.set(!0)}applyTagSearch(i){this.searchQuery.set("");let e=`#${i}`;this.searchQuery.set(e),this.runSearch(e),this.searchInputEl()?.nativeElement.focus()}onSearchFocus(){this.searchQuery().trim().length>=Vt&&this.showSearchResults.set(!0)}onSearchBlur(){setTimeout(()=>this.showSearchResults.set(!1),150)}selectSearchResult(i){this.searchQuery.set(""),this.searchResults.set([]),this.showSearchResults.set(!1),this.router.navigate(["/topics",i.Gnid])}isUnassigned(i){return i.Owner===void 0||i.Owner===null||i.Owner===""}refreshBreadcrumbs(){this.updateBreadcrumbs()}toggleSidebar(){this.isSidebarOpen.update(i=>!i)}closeSidebar(){this.isSidebarOpen.set(!1)}toggleLoggerDialog(){if(this.isLoggerOpen())this.dialog.closeAll(),this.isLoggerOpen.set(!1);else{let i=this.dialog.open(me,{width:"70vw",height:"80vh",maxWidth:"90vw",maxHeight:"90vh",disableClose:!1,hasBackdrop:!0,backdropClass:"logger-dark-backdrop",panelClass:"logger-dialog-panel"});this.isLoggerOpen.set(!0),i.afterClosed().subscribe(()=>{this.isLoggerOpen.set(!1)})}}updateBreadcrumbs(){let i=this.createBreadcrumbs(this.activatedRoute.root);this.breadcrumbs.set(i.slice(-Dn))}createBreadcrumbs(i,e="",t=[]){let r=i.children;if(r.length===0)return t;for(let l of r){let m=l.snapshot.url.map(Ut=>Ut.path).join("/");m!==""&&(e+=`/${m}`);let v=l.snapshot.data.breadcrumb;return v&&t.push({label:v,url:e}),this.createBreadcrumbs(l,e,t)}return t}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=f({type:n,selectors:[["app-root"]],viewQuery:function(e,t){e&1&&Ve(t.searchInputEl,ln,5),e&2&&Ge()},decls:51,vars:10,consts:[["searchInputEl",""],[1,"app-shell"],["mode","over","aria-label","Main navigation",1,"app-sidenav",3,"openedChange","click","opened"],[1,"sidenav-user"],[1,"user-avatar"],[1,"user-info"],[1,"user-name"],["appearance","outline","subscriptSizing","dynamic",1,"org-select-field"],[1,"sidenav-nav"],["mat-list-item","","routerLink","/wip"],["matListItemIcon",""],["matListItemTitle",""],["mat-list-item","","routerLink","/topics"],[1,"sidenav-divider"],["mat-list-item","","routerLink","/settings"],[1,"sidenav-spacer"],[1,"sidenav-footer"],["type","button","mat-icon-button","","aria-label","Toggle debug logger",1,"logger-toggle",3,"click"],[1,"app-content"],[1,"topbar"],["type","button","mat-icon-button","","routerLink","/","aria-label","Go to home",1,"home-button"],["type","button","mat-icon-button","","aria-label","Toggle navigation menu",1,"sidebar-toggle",3,"click"],[1,"search-container"],[1,"search-field"],[1,"search-icon"],["type","text","placeholder","Search topics, notes, #tags \u2026",1,"search-input",3,"input","focus","blur","value"],[1,"search-results"],["mode","indeterminate",1,"loading-bar"],["aria-label","Breadcrumb",1,"breadcrumb"],[1,"route-content"],["appearance","outline","subscriptSizing","dynamic",1,"org-select-field",3,"click"],["aria-label","Active organization",3,"selectionChange","value"],[3,"value"],[1,"search-results-empty"],["type","button",1,"search-result-row"],["type","button",1,"search-result-row",3,"mousedown"],[1,"search-result-row-header"],[1,"search-result-title"],[1,"search-result-pills"],[1,"status-pill","status-pill-unassigned"],[1,"status-pill"],[1,"search-result-description"],[1,"current"],[3,"routerLink"],[1,"separator"]],template:function(e,t){e&1&&(a(0,"mat-sidenav-container",1)(1,"mat-sidenav",2),h("openedChange",function(l){return t.isSidebarOpen.set(l)})("click",function(){return t.closeSidebar()}),a(2,"div",3)(3,"span",4),s(4),o(),a(5,"div",5)(6,"span",6),s(7),o(),u(8,un,4,1,"mat-form-field",7),o()(),a(9,"mat-nav-list",8)(10,"a",9)(11,"mat-icon",10),s(12,"pending_actions"),o(),a(13,"span",11),s(14,"Work in progress"),o()(),a(15,"a",12)(16,"mat-icon",10),s(17,"topic"),o(),a(18,"span",11),s(19,"Topics"),o()(),S(20,"mat-divider",13),a(21,"a",14)(22,"mat-icon",10),s(23,"settings"),o(),a(24,"span",11),s(25,"Settings"),o()()(),S(26,"div",15),a(27,"div",16)(28,"button",17),h("click",function(){return t.toggleLoggerDialog()}),a(29,"mat-icon"),s(30,"code"),o()()()(),a(31,"mat-sidenav-content",18)(32,"mat-toolbar",19)(33,"button",20)(34,"mat-icon"),s(35,"home"),o()(),a(36,"button",21),h("click",function(){return t.toggleSidebar()}),a(37,"mat-icon"),s(38,"menu"),o()(),a(39,"div",22)(40,"div",23)(41,"mat-icon",24),s(42,"search"),o(),a(43,"input",25,0),h("input",function(l){return t.onSearchInput(l.target.value)})("focus",function(){return t.onSearchFocus()})("blur",function(){return t.onSearchBlur()}),o()(),u(45,bn,3,1,"div",26),o()(),u(46,xn,1,0,"mat-progress-bar",27),a(47,"nav",28),R(48,Cn,2,1,null,null,mn),o(),u(50,Mn,2,0,"div",29),o()()),e&2&&(c(),A("opened",t.isSidebarOpen()),c(3),b(t.currentUser().initials),c(3),b(t.currentUser().name),c(),g(t.userOrganizations().length>0?8:-1),c(20),w("active",t.isLoggerOpen()),c(15),A("value",t.searchQuery()),c(2),g(t.showSearchResults()?45:-1),c(),g(t.isLoading()?46:-1),c(2),I(t.breadcrumbs()),c(2),g(t.isLoading()?-1:50))},dependencies:[tt,nt,M,pt,N,L,Mt,Ct,jt,Te,Nt,ce,yt,wt,xt,bt,ft,vt,_t,Tt,Et,Ot,St,It,Rt,Bt],styles:["[_nghost-%COMP%]{--surface-2: #ffffff;--surface-1: #f7f6f2;--surface-0: #f1efe8;--bg-accent: #e6f1fb;--text-primary: #1a1a18;--text-secondary: #5f5e5a;--text-muted: #888780;--text-accent: #0c447c;--border: rgba(0, 0, 0, .1);--mat-sys-primary: var(--text-accent);--mat-sys-on-primary: var(--surface-2);--mat-sys-primary-container: var(--bg-accent);--mat-sys-on-primary-container: var(--text-accent);--mat-sys-secondary: var(--text-secondary);--mat-sys-on-secondary: var(--surface-2);--mat-sys-secondary-container: var(--surface-1);--mat-sys-on-secondary-container: var(--text-primary);--mat-sys-tertiary: var(--text-accent);--mat-sys-on-tertiary: var(--surface-2);--mat-sys-tertiary-container: var(--bg-accent);--mat-sys-on-tertiary-container: var(--text-accent);--mat-sys-background: var(--surface-0);--mat-sys-on-background: var(--text-primary);--mat-sys-surface: var(--surface-2);--mat-sys-on-surface: var(--text-primary);--mat-sys-surface-variant: var(--surface-1);--mat-sys-on-surface-variant: var(--text-secondary);--mat-sys-surface-container: var(--surface-1);--mat-sys-surface-container-low: var(--surface-1);--mat-sys-surface-container-high: var(--surface-1);--mat-sys-surface-container-highest: var(--surface-1);--mat-sys-surface-container-lowest: var(--surface-2);--mat-sys-surface-bright: var(--surface-2);--mat-sys-surface-dim: var(--surface-0);--mat-sys-surface-tint: var(--text-accent);--mat-sys-outline: var(--text-muted);--mat-sys-outline-variant: var(--border);--mat-sys-inverse-surface: var(--text-primary);--mat-sys-inverse-on-surface: var(--surface-2);--mat-sys-inverse-primary: var(--text-accent);display:block;background:var(--surface-0);color:var(--text-primary);min-height:100vh}.app-shell[_ngcontent-%COMP%]{height:100vh;background:transparent}.app-content[_ngcontent-%COMP%]{display:flex;flex-direction:column;height:100%;background:transparent;color:var(--text-primary)}.route-content[_ngcontent-%COMP%]{flex:1 1 auto;min-height:0;display:flex;flex-direction:column}.route-content[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{flex:1 1 auto;min-height:0}.topbar[_ngcontent-%COMP%]{background:transparent;color:var(--text-primary);gap:8px;flex:0 0 auto}.search-field[_ngcontent-%COMP%]{display:flex;align-items:center;gap:8px;height:36px;padding:0 10px;background:var(--surface-1);border:.5px solid var(--border);border-radius:4px}.search-container[_ngcontent-%COMP%]{position:relative;flex:1 1 auto;min-width:0}.search-results[_ngcontent-%COMP%]{position:absolute;top:calc(100% + 4px);left:0;right:0;z-index:10;max-height:320px;overflow-y:auto;background:var(--surface-2);border:.5px solid var(--border);border-radius:4px;box-shadow:0 5px 5px -3px #0003,0 8px 10px 1px #00000024,0 3px 14px 2px #0000001f}.search-result-row[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:flex-start;gap:2px;width:100%;padding:8px 12px;border:none;background:transparent;cursor:pointer;font-family:inherit;text-align:left}.search-result-row[_ngcontent-%COMP%]:hover{background:var(--surface-1)}.search-result-row-header[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;gap:8px;width:100%}.search-result-title[_ngcontent-%COMP%]{font-size:14px;color:var(--text-primary);overflow:hidden;text-overflow:ellipsis;white-space:nowrap;min-width:0}.search-result-pills[_ngcontent-%COMP%]{flex:0 0 auto;display:flex;align-items:center;gap:4px}.status-pill[_ngcontent-%COMP%]{flex:0 0 auto;font-size:10px;font-weight:600;text-transform:uppercase;letter-spacing:.02em;padding:2px 8px;border-radius:999px}.status-pill-open[_ngcontent-%COMP%]{background:var(--bg-accent);color:var(--text-accent)}.status-pill-closed[_ngcontent-%COMP%]{background:var(--surface-1);color:var(--text-muted)}.status-pill-unassigned[_ngcontent-%COMP%]{background:transparent;color:var(--text-muted);border:.5px solid var(--border)}.search-result-description[_ngcontent-%COMP%]{font-size:12px;color:var(--text-muted);overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:100%}.search-results-empty[_ngcontent-%COMP%]{margin:0;padding:8px 12px;font-size:13px;color:var(--text-muted);font-style:italic}.search-icon[_ngcontent-%COMP%]{color:var(--text-muted);font-weight:400;flex-shrink:0}.search-input[_ngcontent-%COMP%]{flex:1 1 auto;min-width:0;border:none;outline:none;background:transparent;font-family:inherit;font-size:1rem;font-weight:400;line-height:normal;color:var(--text-primary)}.search-input[_ngcontent-%COMP%]::placeholder{color:var(--text-muted)}.home-button[_ngcontent-%COMP%], .sidebar-toggle[_ngcontent-%COMP%], .logger-toggle[_ngcontent-%COMP%]{--mdc-icon-button-icon-color: var(--text-muted);flex-shrink:0}.logger-toggle.active[_ngcontent-%COMP%]{--mdc-icon-button-icon-color: var(--text-accent);background:var(--bg-accent);border-radius:50%}.app-sidenav[_ngcontent-%COMP%]{display:flex;flex-direction:column;width:260px;background:var(--surface-1);color:var(--text-primary);border-right:.5px solid var(--border)}.sidenav-user[_ngcontent-%COMP%]{display:flex;align-items:flex-start;gap:12px;padding:20px 16px;border-bottom:.5px solid var(--border)}.user-avatar[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;flex-shrink:0;width:36px;height:36px;border-radius:50%;background:var(--text-accent);color:var(--surface-2);font-size:13px;font-weight:600}.user-info[_ngcontent-%COMP%]{display:flex;flex-direction:column;min-width:0}.user-name[_ngcontent-%COMP%]{font-size:14px;font-weight:500;color:var(--text-primary);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.org-select-field[_ngcontent-%COMP%]{width:100%;margin-top:6px;font-size:12px;--mdc-outlined-text-field-outline-color: var(--border);--mdc-outlined-text-field-hover-outline-color: var(--text-muted);--mdc-outlined-text-field-focus-outline-color: var(--text-accent);--mdc-outlined-text-field-label-text-color: var(--text-muted);--mdc-outlined-text-field-input-text-color: var(--text-secondary)}.org-select-field[_ngcontent-%COMP%]     .mat-mdc-text-field-wrapper.mdc-text-field--outlined{background-color:var(--surface-2)!important;border-radius:4px}.org-select-field[_ngcontent-%COMP%]     .mat-mdc-form-field-infix{padding-top:4px!important;padding-bottom:4px!important;min-height:0!important}.sidenav-nav[_ngcontent-%COMP%]{padding-top:8px}.sidenav-nav[_ngcontent-%COMP%]   a.mdc-list-item[_ngcontent-%COMP%]{color:var(--text-primary)}.sidenav-nav[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{color:var(--text-muted)}.sidenav-divider[_ngcontent-%COMP%]{--mat-divider-color: var(--border);margin:6px 0}.sidenav-spacer[_ngcontent-%COMP%]{flex:1 1 auto}.sidenav-footer[_ngcontent-%COMP%]{padding:12px 16px;border-top:.5px solid var(--border)}.loading-bar[_ngcontent-%COMP%]{flex:0 0 auto;height:3px;--mdc-linear-progress-active-indicator-color: var(--text-accent);--mdc-linear-progress-track-color: var(--bg-accent)}.breadcrumb[_ngcontent-%COMP%]{display:flex;align-items:center;gap:4px;padding:0 16px 12px;font-size:12px;color:var(--text-muted);background:transparent;flex:0 0 auto}.breadcrumb[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:var(--text-muted);text-decoration:none}.breadcrumb[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color:var(--text-accent);text-decoration:underline}.breadcrumb[_ngcontent-%COMP%]   .separator[_ngcontent-%COMP%]{color:var(--text-muted)}.breadcrumb[_ngcontent-%COMP%]   .current[_ngcontent-%COMP%]{color:var(--text-secondary);font-weight:500}.app-toast-panel[_ngcontent-%COMP%]   .mdc-snackbar__surface[_ngcontent-%COMP%]{background-color:transparent!important;box-shadow:none!important;padding:0!important}"]})};Ke(pe,Lt).catch(n=>console.error(n));
