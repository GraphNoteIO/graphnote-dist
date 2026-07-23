import{$ as at,W as L,_ as $,aa as ot,ca as rt,da as it,m as K,p as Q,t as tt,u as et,x as nt}from"./chunk-VWTLSODI.js";import{Hb as I,Ib as x,Sb as T,T as h,Tb as X,U as M,Va as O,W as F,Wa as H,X as N,Y as l,a as p,b as g,bb as k,c as R,cb as q,db as J,fa as G,ga as B,gb as D,ka as _,nb as W,oa as C,qc as w,rc as Y,ua as j,xb as V,yb as Z,zb as y}from"./chunk-FUA2W6B6.js";var ut={capture:!0},pt=["focus","mousedown","mouseenter","touchstart"],U="mat-ripple-loader-uninitialized",z="mat-ripple-loader-class-name",st="mat-ripple-loader-centered",E="mat-ripple-loader-disabled",mt=(()=>{class r{_document=l(B);_animationsDisabled=L();_globalRippleOptions=l(ot,{optional:!0});_platform=l(et);_ngZone=l(_);_injector=l(G);_eventCleanups;_hosts=new Map;constructor(){let t=l(O).createRenderer(null,null);this._eventCleanups=this._ngZone.runOutsideAngular(()=>pt.map(e=>t.listen(this._document,e,this._onInteraction,ut)))}ngOnDestroy(){let t=this._hosts.keys();for(let e of t)this.destroyRipple(e);this._eventCleanups.forEach(e=>e())}configureRipple(t,e){t.setAttribute(U,this._globalRippleOptions?.namespace??""),(e.className||!t.hasAttribute(z))&&t.setAttribute(z,e.className||""),e.centered&&t.setAttribute(st,""),e.disabled&&t.setAttribute(E,"")}setDisabled(t,e){let n=this._hosts.get(t);n?(n.target.rippleDisabled=e,!e&&!n.hasSetUpEvents&&(n.hasSetUpEvents=!0,n.renderer.setupTriggerEvents(t))):e?t.setAttribute(E,""):t.removeAttribute(E)}_onInteraction=t=>{let e=tt(t);if(e instanceof HTMLElement){let n=e.closest(`[${U}="${this._globalRippleOptions?.namespace??""}"]`);n&&this._createRipple(n)}};_createRipple(t){if(!this._document||this._hosts.has(t))return;t.querySelector(".mat-ripple")?.remove();let e=this._document.createElement("span");e.classList.add("mat-ripple",t.getAttribute(z)),t.append(e);let n=this._globalRippleOptions,o=this._animationsDisabled?0:n?.animation?.enterDuration??$.enterDuration,i=this._animationsDisabled?0:n?.animation?.exitDuration??$.exitDuration,c={rippleDisabled:this._animationsDisabled||n?.disabled||t.hasAttribute(E),rippleConfig:{centered:t.hasAttribute(st),terminateOnPointerUp:n?.terminateOnPointerUp,animation:{enterDuration:o,exitDuration:i}}},s=new at(c,this._ngZone,e,this._platform,this._injector),m=!c.rippleDisabled;m&&s.setupTriggerEvents(t),this._hosts.set(t,{target:c,renderer:s,hasSetUpEvents:m}),t.removeAttribute(U)}destroyRipple(t){let e=this._hosts.get(t);e&&(e.renderer._removeTriggerEvents(),this._hosts.delete(t))}static \u0275fac=function(e){return new(e||r)};static \u0275prov=h({token:r,factory:r.\u0275fac,providedIn:"root"})}return r})();var ft=["mat-icon-button",""],gt=["*"],vt=new F("MAT_BUTTON_CONFIG");function ct(r){return r==null?void 0:Y(r)}var S=(()=>{class r{_elementRef=l(j);_ngZone=l(_);_animationsDisabled=L();_config=l(vt,{optional:!0});_focusMonitor=l(nt);_cleanupClick;_renderer=l(H);_rippleLoader=l(mt);_isAnchor;_isFab=!1;color;get disableRipple(){return this._disableRipple}set disableRipple(t){this._disableRipple=t,this._updateRippleDisabled()}_disableRipple=!1;get disabled(){return this._disabled}set disabled(t){this._disabled=t,this._updateRippleDisabled()}_disabled=!1;ariaDisabled;disabledInteractive;tabIndex;set _tabindex(t){this.tabIndex=t}constructor(){l(K).load(rt);let t=this._elementRef.nativeElement;this._isAnchor=t.tagName==="A",this.disabledInteractive=this._config?.disabledInteractive??!1,this.color=this._config?.color??null,this._rippleLoader?.configureRipple(t,{className:"mat-mdc-button-ripple"})}ngAfterViewInit(){this._focusMonitor.monitor(this._elementRef,!0),this._isAnchor&&this._setupAsAnchor()}ngOnDestroy(){this._cleanupClick?.(),this._focusMonitor.stopMonitoring(this._elementRef),this._rippleLoader?.destroyRipple(this._elementRef.nativeElement)}focus(t="program",e){t?this._focusMonitor.focusVia(this._elementRef.nativeElement,t,e):this._elementRef.nativeElement.focus(e)}_getAriaDisabled(){return this.ariaDisabled!=null?this.ariaDisabled:this._isAnchor?this.disabled||null:this.disabled&&this.disabledInteractive?!0:null}_getDisabledAttribute(){return this.disabledInteractive||!this.disabled?null:!0}_updateRippleDisabled(){this._rippleLoader?.setDisabled(this._elementRef.nativeElement,this.disableRipple||this.disabled)}_getTabIndex(){return this._isAnchor?this.disabled&&!this.disabledInteractive?-1:this.tabIndex:this.tabIndex}_setupAsAnchor(){this._cleanupClick=this._ngZone.runOutsideAngular(()=>this._renderer.listen(this._elementRef.nativeElement,"click",t=>{this.disabled&&(t.preventDefault(),t.stopImmediatePropagation())}))}static \u0275fac=function(e){return new(e||r)};static \u0275dir=J({type:r,hostAttrs:[1,"mat-mdc-button-base"],hostVars:13,hostBindings:function(e,n){e&2&&(W("disabled",n._getDisabledAttribute())("aria-disabled",n._getAriaDisabled())("tabindex",n._getTabIndex()),X(n.color?"mat-"+n.color:""),T("mat-mdc-button-disabled",n.disabled)("mat-mdc-button-disabled-interactive",n.disabledInteractive)("mat-unthemed",!n.color)("_mat-animation-noopable",n._animationsDisabled))},inputs:{color:"color",disableRipple:[2,"disableRipple","disableRipple",w],disabled:[2,"disabled","disabled",w],ariaDisabled:[2,"aria-disabled","ariaDisabled",w],disabledInteractive:[2,"disabledInteractive","disabledInteractive",w],tabIndex:[2,"tabIndex","tabIndex",ct],_tabindex:[2,"tabindex","_tabindex",ct]}})}return r})(),ht=(()=>{class r extends S{constructor(){super(),this._rippleLoader.configureRipple(this._elementRef.nativeElement,{centered:!0})}static \u0275fac=function(e){return new(e||r)};static \u0275cmp=k({type:r,selectors:[["button","mat-icon-button",""],["a","mat-icon-button",""],["button","matIconButton",""],["a","matIconButton",""]],hostAttrs:[1,"mdc-icon-button","mat-mdc-icon-button"],exportAs:["matButton","matAnchor"],features:[D],attrs:ft,ngContentSelectors:gt,decls:4,vars:0,consts:[[1,"mat-mdc-button-persistent-ripple","mdc-icon-button__ripple"],[1,"mat-focus-indicator"],[1,"mat-mdc-button-touch-target"]],template:function(e,n){e&1&&(I(),y(0,"span",0),x(1),y(2,"span",1)(3,"span",2))},styles:[`.mat-mdc-icon-button {
  -webkit-user-select: none;
  user-select: none;
  display: inline-block;
  position: relative;
  box-sizing: border-box;
  border: none;
  outline: none;
  background-color: transparent;
  fill: currentColor;
  text-decoration: none;
  cursor: pointer;
  z-index: 0;
  overflow: visible;
  border-radius: var(--mat-icon-button-container-shape, var(--mat-sys-corner-full, 50%));
  flex-shrink: 0;
  text-align: center;
  width: var(--mat-icon-button-state-layer-size, 40px);
  height: var(--mat-icon-button-state-layer-size, 40px);
  padding: calc(calc(var(--mat-icon-button-state-layer-size, 40px) - var(--mat-icon-button-icon-size, 24px)) / 2);
  font-size: var(--mat-icon-button-icon-size, 24px);
  color: var(--mat-icon-button-icon-color, var(--mat-sys-on-surface-variant));
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-icon-button .mat-mdc-button-ripple,
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple,
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: inherit;
}
.mat-mdc-icon-button .mat-mdc-button-ripple {
  overflow: hidden;
}
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before {
  content: "";
  opacity: 0;
}
.mat-mdc-icon-button .mdc-button__label,
.mat-mdc-icon-button .mat-icon {
  z-index: 1;
  position: relative;
}
.mat-mdc-icon-button .mat-focus-indicator {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: inherit;
}
.mat-mdc-icon-button:focus-visible > .mat-focus-indicator::before {
  content: "";
  border-radius: inherit;
}
.mat-mdc-icon-button .mat-ripple-element {
  background-color: var(--mat-icon-button-ripple-color, color-mix(in srgb, var(--mat-sys-on-surface-variant) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-icon-button-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-icon-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-icon-button-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-icon-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-icon-button-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-icon-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-icon-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-icon-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-icon-button-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-icon-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-icon-button-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-icon-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-icon-button-touch-target-size, 48px);
  display: var(--mat-icon-button-touch-target-display, block);
  left: 50%;
  width: var(--mat-icon-button-touch-target-size, 48px);
  transform: translate(-50%, -50%);
}
.mat-mdc-icon-button._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-mdc-icon-button[disabled], .mat-mdc-icon-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-icon-button-disabled-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-icon-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-icon-button img,
.mat-mdc-icon-button svg {
  width: var(--mat-icon-button-icon-size, 24px);
  height: var(--mat-icon-button-icon-size, 24px);
  vertical-align: baseline;
}
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple {
  border-radius: var(--mat-icon-button-container-shape, var(--mat-sys-corner-full, 50%));
}
.mat-mdc-icon-button[hidden] {
  display: none;
}
.mat-mdc-icon-button.mat-unthemed:not(.mdc-ripple-upgraded):focus::before, .mat-mdc-icon-button.mat-primary:not(.mdc-ripple-upgraded):focus::before, .mat-mdc-icon-button.mat-accent:not(.mdc-ripple-upgraded):focus::before, .mat-mdc-icon-button.mat-warn:not(.mdc-ripple-upgraded):focus::before {
  background: transparent;
  opacity: 1;
}
`,`@media (forced-colors: active) {
  .mat-mdc-button:not(.mdc-button--outlined),
  .mat-mdc-unelevated-button:not(.mdc-button--outlined),
  .mat-mdc-raised-button:not(.mdc-button--outlined),
  .mat-mdc-outlined-button:not(.mdc-button--outlined),
  .mat-mdc-button-base.mat-tonal-button,
  .mat-mdc-icon-button.mat-mdc-icon-button,
  .mat-mdc-outlined-button .mdc-button__ripple {
    outline: solid 1px;
  }
}
`],encapsulation:2,changeDetection:0})}return r})();var yt=["matButton",""],xt=[[["",8,"material-icons",3,"iconPositionEnd",""],["mat-icon",3,"iconPositionEnd",""],["","matButtonIcon","",3,"iconPositionEnd",""]],"*",[["","iconPositionEnd","",8,"material-icons"],["mat-icon","iconPositionEnd",""],["","matButtonIcon","","iconPositionEnd",""]]],wt=[".material-icons:not([iconPositionEnd]), mat-icon:not([iconPositionEnd]), [matButtonIcon]:not([iconPositionEnd])","*",".material-icons[iconPositionEnd], mat-icon[iconPositionEnd], [matButtonIcon][iconPositionEnd]"];var dt=new Map([["text",["mat-mdc-button"]],["filled",["mdc-button--unelevated","mat-mdc-unelevated-button"]],["elevated",["mdc-button--raised","mat-mdc-raised-button"]],["outlined",["mdc-button--outlined","mat-mdc-outlined-button"]],["tonal",["mat-tonal-button"]]]),qt=(()=>{class r extends S{get appearance(){return this._appearance}set appearance(t){this.setAppearance(t||this._config?.defaultAppearance||"text")}_appearance=null;constructor(){super();let t=_t(this._elementRef.nativeElement);t&&this.setAppearance(t)}setAppearance(t){if(t===this._appearance)return;let e=this._elementRef.nativeElement.classList,n=this._appearance?dt.get(this._appearance):null,o=dt.get(t);n&&e.remove(...n),e.add(...o),this._appearance=t}static \u0275fac=function(e){return new(e||r)};static \u0275cmp=k({type:r,selectors:[["button","matButton",""],["a","matButton",""],["button","mat-button",""],["button","mat-raised-button",""],["button","mat-flat-button",""],["button","mat-stroked-button",""],["a","mat-button",""],["a","mat-raised-button",""],["a","mat-flat-button",""],["a","mat-stroked-button",""]],hostAttrs:[1,"mdc-button"],inputs:{appearance:[0,"matButton","appearance"]},exportAs:["matButton","matAnchor"],features:[D],attrs:yt,ngContentSelectors:wt,decls:7,vars:4,consts:[[1,"mat-mdc-button-persistent-ripple"],[1,"mdc-button__label"],[1,"mat-focus-indicator"],[1,"mat-mdc-button-touch-target"]],template:function(e,n){e&1&&(I(xt),y(0,"span",0),x(1),V(2,"span",1),x(3,1),Z(),x(4,2),y(5,"span",2)(6,"span",3)),e&2&&T("mdc-button__ripple",!n._isFab)("mdc-fab__ripple",n._isFab)},styles:[`.mat-mdc-button-base {
  text-decoration: none;
}
.mat-mdc-button-base .mat-icon {
  min-height: fit-content;
  flex-shrink: 0;
}
@media (hover: none) {
  .mat-mdc-button-base:hover > span.mat-mdc-button-persistent-ripple::before {
    opacity: 0;
  }
}

.mdc-button {
  -webkit-user-select: none;
  user-select: none;
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  min-width: 64px;
  border: none;
  outline: none;
  line-height: inherit;
  -webkit-appearance: none;
  overflow: visible;
  vertical-align: middle;
  background: transparent;
  padding: 0 8px;
}
.mdc-button::-moz-focus-inner {
  padding: 0;
  border: 0;
}
.mdc-button:active {
  outline: none;
}
.mdc-button:hover {
  cursor: pointer;
}
.mdc-button:disabled {
  cursor: default;
  pointer-events: none;
}
.mdc-button[hidden] {
  display: none;
}
.mdc-button .mdc-button__label {
  position: relative;
}

.mat-mdc-button {
  padding: 0 var(--mat-button-text-horizontal-padding, 12px);
  height: var(--mat-button-text-container-height, 40px);
  font-family: var(--mat-button-text-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-text-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-text-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-text-label-text-transform);
  font-weight: var(--mat-button-text-label-text-weight, var(--mat-sys-label-large-weight));
}
.mat-mdc-button, .mat-mdc-button .mdc-button__ripple {
  border-radius: var(--mat-button-text-container-shape, var(--mat-sys-corner-full));
}
.mat-mdc-button:not(:disabled) {
  color: var(--mat-button-text-label-text-color, var(--mat-sys-primary));
}
.mat-mdc-button[disabled], .mat-mdc-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-text-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-button:has(.material-icons, mat-icon, [matButtonIcon]) {
  padding: 0 var(--mat-button-text-with-icon-horizontal-padding, 16px);
}
.mat-mdc-button > .mat-icon {
  margin-right: var(--mat-button-text-icon-spacing, 8px);
  margin-left: var(--mat-button-text-icon-offset, -4px);
}
[dir=rtl] .mat-mdc-button > .mat-icon {
  margin-right: var(--mat-button-text-icon-offset, -4px);
  margin-left: var(--mat-button-text-icon-spacing, 8px);
}
.mat-mdc-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-text-icon-offset, -4px);
  margin-left: var(--mat-button-text-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-text-icon-spacing, 8px);
  margin-left: var(--mat-button-text-icon-offset, -4px);
}
.mat-mdc-button .mat-ripple-element {
  background-color: var(--mat-button-text-ripple-color, color-mix(in srgb, var(--mat-sys-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-text-state-layer-color, var(--mat-sys-primary));
}
.mat-mdc-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-text-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-text-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-text-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-text-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-text-touch-target-size, 48px);
  display: var(--mat-button-text-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}

.mat-mdc-unelevated-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--mat-button-filled-container-height, 40px);
  font-family: var(--mat-button-filled-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-filled-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-filled-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-filled-label-text-transform);
  font-weight: var(--mat-button-filled-label-text-weight, var(--mat-sys-label-large-weight));
  padding: 0 var(--mat-button-filled-horizontal-padding, 24px);
}
.mat-mdc-unelevated-button > .mat-icon {
  margin-right: var(--mat-button-filled-icon-spacing, 8px);
  margin-left: var(--mat-button-filled-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-unelevated-button > .mat-icon {
  margin-right: var(--mat-button-filled-icon-offset, -8px);
  margin-left: var(--mat-button-filled-icon-spacing, 8px);
}
.mat-mdc-unelevated-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-filled-icon-offset, -8px);
  margin-left: var(--mat-button-filled-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-unelevated-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-filled-icon-spacing, 8px);
  margin-left: var(--mat-button-filled-icon-offset, -8px);
}
.mat-mdc-unelevated-button .mat-ripple-element {
  background-color: var(--mat-button-filled-ripple-color, color-mix(in srgb, var(--mat-sys-on-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-filled-state-layer-color, var(--mat-sys-on-primary));
}
.mat-mdc-unelevated-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-filled-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-unelevated-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-filled-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-unelevated-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-unelevated-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-unelevated-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-filled-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-unelevated-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-filled-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-unelevated-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-filled-touch-target-size, 48px);
  display: var(--mat-button-filled-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-unelevated-button:not(:disabled) {
  color: var(--mat-button-filled-label-text-color, var(--mat-sys-on-primary));
  background-color: var(--mat-button-filled-container-color, var(--mat-sys-primary));
}
.mat-mdc-unelevated-button, .mat-mdc-unelevated-button .mdc-button__ripple {
  border-radius: var(--mat-button-filled-container-shape, var(--mat-sys-corner-full));
}
.mat-mdc-unelevated-button[disabled], .mat-mdc-unelevated-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-filled-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  background-color: var(--mat-button-filled-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-unelevated-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-mdc-raised-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: var(--mat-button-protected-container-elevation-shadow, var(--mat-sys-level1));
  height: var(--mat-button-protected-container-height, 40px);
  font-family: var(--mat-button-protected-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-protected-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-protected-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-protected-label-text-transform);
  font-weight: var(--mat-button-protected-label-text-weight, var(--mat-sys-label-large-weight));
  padding: 0 var(--mat-button-protected-horizontal-padding, 24px);
}
.mat-mdc-raised-button > .mat-icon {
  margin-right: var(--mat-button-protected-icon-spacing, 8px);
  margin-left: var(--mat-button-protected-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-raised-button > .mat-icon {
  margin-right: var(--mat-button-protected-icon-offset, -8px);
  margin-left: var(--mat-button-protected-icon-spacing, 8px);
}
.mat-mdc-raised-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-protected-icon-offset, -8px);
  margin-left: var(--mat-button-protected-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-raised-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-protected-icon-spacing, 8px);
  margin-left: var(--mat-button-protected-icon-offset, -8px);
}
.mat-mdc-raised-button .mat-ripple-element {
  background-color: var(--mat-button-protected-ripple-color, color-mix(in srgb, var(--mat-sys-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-protected-state-layer-color, var(--mat-sys-primary));
}
.mat-mdc-raised-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-protected-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-raised-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-protected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-raised-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-raised-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-raised-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-protected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-raised-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-protected-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-raised-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-protected-touch-target-size, 48px);
  display: var(--mat-button-protected-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-raised-button:not(:disabled) {
  color: var(--mat-button-protected-label-text-color, var(--mat-sys-primary));
  background-color: var(--mat-button-protected-container-color, var(--mat-sys-surface));
}
.mat-mdc-raised-button, .mat-mdc-raised-button .mdc-button__ripple {
  border-radius: var(--mat-button-protected-container-shape, var(--mat-sys-corner-full));
}
@media (hover: hover) {
  .mat-mdc-raised-button:hover {
    box-shadow: var(--mat-button-protected-hover-container-elevation-shadow, var(--mat-sys-level2));
  }
}
.mat-mdc-raised-button:focus {
  box-shadow: var(--mat-button-protected-focus-container-elevation-shadow, var(--mat-sys-level1));
}
.mat-mdc-raised-button:active, .mat-mdc-raised-button:focus:active {
  box-shadow: var(--mat-button-protected-pressed-container-elevation-shadow, var(--mat-sys-level1));
}
.mat-mdc-raised-button[disabled], .mat-mdc-raised-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-protected-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  background-color: var(--mat-button-protected-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-raised-button[disabled].mat-mdc-button-disabled, .mat-mdc-raised-button.mat-mdc-button-disabled.mat-mdc-button-disabled {
  box-shadow: var(--mat-button-protected-disabled-container-elevation-shadow, var(--mat-sys-level0));
}
.mat-mdc-raised-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-mdc-outlined-button {
  border-style: solid;
  transition: border 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--mat-button-outlined-container-height, 40px);
  font-family: var(--mat-button-outlined-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-outlined-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-outlined-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-outlined-label-text-transform);
  font-weight: var(--mat-button-outlined-label-text-weight, var(--mat-sys-label-large-weight));
  border-radius: var(--mat-button-outlined-container-shape, var(--mat-sys-corner-full));
  border-width: var(--mat-button-outlined-outline-width, 1px);
  padding: 0 var(--mat-button-outlined-horizontal-padding, 24px);
}
.mat-mdc-outlined-button > .mat-icon {
  margin-right: var(--mat-button-outlined-icon-spacing, 8px);
  margin-left: var(--mat-button-outlined-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-outlined-button > .mat-icon {
  margin-right: var(--mat-button-outlined-icon-offset, -8px);
  margin-left: var(--mat-button-outlined-icon-spacing, 8px);
}
.mat-mdc-outlined-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-outlined-icon-offset, -8px);
  margin-left: var(--mat-button-outlined-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-outlined-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-outlined-icon-spacing, 8px);
  margin-left: var(--mat-button-outlined-icon-offset, -8px);
}
.mat-mdc-outlined-button .mat-ripple-element {
  background-color: var(--mat-button-outlined-ripple-color, color-mix(in srgb, var(--mat-sys-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-outlined-state-layer-color, var(--mat-sys-primary));
}
.mat-mdc-outlined-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-outlined-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-outlined-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-outlined-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-outlined-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-outlined-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-outlined-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-outlined-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-outlined-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-outlined-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-outlined-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-outlined-touch-target-size, 48px);
  display: var(--mat-button-outlined-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-outlined-button:not(:disabled) {
  color: var(--mat-button-outlined-label-text-color, var(--mat-sys-primary));
  border-color: var(--mat-button-outlined-outline-color, var(--mat-sys-outline));
}
.mat-mdc-outlined-button[disabled], .mat-mdc-outlined-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-outlined-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  border-color: var(--mat-button-outlined-disabled-outline-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-outlined-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-tonal-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--mat-button-tonal-container-height, 40px);
  font-family: var(--mat-button-tonal-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-tonal-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-tonal-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-tonal-label-text-transform);
  font-weight: var(--mat-button-tonal-label-text-weight, var(--mat-sys-label-large-weight));
  padding: 0 var(--mat-button-tonal-horizontal-padding, 24px);
}
.mat-tonal-button:not(:disabled) {
  color: var(--mat-button-tonal-label-text-color, var(--mat-sys-on-secondary-container));
  background-color: var(--mat-button-tonal-container-color, var(--mat-sys-secondary-container));
}
.mat-tonal-button, .mat-tonal-button .mdc-button__ripple {
  border-radius: var(--mat-button-tonal-container-shape, var(--mat-sys-corner-full));
}
.mat-tonal-button[disabled], .mat-tonal-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-tonal-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  background-color: var(--mat-button-tonal-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-tonal-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-tonal-button > .mat-icon {
  margin-right: var(--mat-button-tonal-icon-spacing, 8px);
  margin-left: var(--mat-button-tonal-icon-offset, -8px);
}
[dir=rtl] .mat-tonal-button > .mat-icon {
  margin-right: var(--mat-button-tonal-icon-offset, -8px);
  margin-left: var(--mat-button-tonal-icon-spacing, 8px);
}
.mat-tonal-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-tonal-icon-offset, -8px);
  margin-left: var(--mat-button-tonal-icon-spacing, 8px);
}
[dir=rtl] .mat-tonal-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-tonal-icon-spacing, 8px);
  margin-left: var(--mat-button-tonal-icon-offset, -8px);
}
.mat-tonal-button .mat-ripple-element {
  background-color: var(--mat-button-tonal-ripple-color, color-mix(in srgb, var(--mat-sys-on-secondary-container) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-tonal-state-layer-color, var(--mat-sys-on-secondary-container));
}
.mat-tonal-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-tonal-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-tonal-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-tonal-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-tonal-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-tonal-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-tonal-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-tonal-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-tonal-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-tonal-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-tonal-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-tonal-touch-target-size, 48px);
  display: var(--mat-button-tonal-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}

.mat-mdc-button,
.mat-mdc-unelevated-button,
.mat-mdc-raised-button,
.mat-mdc-outlined-button,
.mat-tonal-button {
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-button .mat-mdc-button-ripple,
.mat-mdc-button .mat-mdc-button-persistent-ripple,
.mat-mdc-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-unelevated-button .mat-mdc-button-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-raised-button .mat-mdc-button-ripple,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before,
.mat-tonal-button .mat-mdc-button-ripple,
.mat-tonal-button .mat-mdc-button-persistent-ripple,
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: inherit;
}
.mat-mdc-button .mat-mdc-button-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-ripple,
.mat-mdc-raised-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-tonal-button .mat-mdc-button-ripple {
  overflow: hidden;
}
.mat-mdc-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before,
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  content: "";
  opacity: 0;
}
.mat-mdc-button .mdc-button__label,
.mat-mdc-button .mat-icon,
.mat-mdc-unelevated-button .mdc-button__label,
.mat-mdc-unelevated-button .mat-icon,
.mat-mdc-raised-button .mdc-button__label,
.mat-mdc-raised-button .mat-icon,
.mat-mdc-outlined-button .mdc-button__label,
.mat-mdc-outlined-button .mat-icon,
.mat-tonal-button .mdc-button__label,
.mat-tonal-button .mat-icon {
  z-index: 1;
  position: relative;
}
.mat-mdc-button .mat-focus-indicator,
.mat-mdc-unelevated-button .mat-focus-indicator,
.mat-mdc-raised-button .mat-focus-indicator,
.mat-mdc-outlined-button .mat-focus-indicator,
.mat-tonal-button .mat-focus-indicator {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: inherit;
}
.mat-mdc-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-unelevated-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-raised-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-outlined-button:focus-visible > .mat-focus-indicator::before,
.mat-tonal-button:focus-visible > .mat-focus-indicator::before {
  content: "";
  border-radius: inherit;
}
.mat-mdc-button._mat-animation-noopable,
.mat-mdc-unelevated-button._mat-animation-noopable,
.mat-mdc-raised-button._mat-animation-noopable,
.mat-mdc-outlined-button._mat-animation-noopable,
.mat-tonal-button._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-mdc-button > .mat-icon,
.mat-mdc-unelevated-button > .mat-icon,
.mat-mdc-raised-button > .mat-icon,
.mat-mdc-outlined-button > .mat-icon,
.mat-tonal-button > .mat-icon {
  display: inline-block;
  position: relative;
  vertical-align: top;
  font-size: 1.125rem;
  height: 1.125rem;
  width: 1.125rem;
}

.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mdc-button__ripple {
  top: -1px;
  left: -1px;
  bottom: -1px;
  right: -1px;
}

.mat-mdc-unelevated-button .mat-focus-indicator::before,
.mat-tonal-button .mat-focus-indicator::before,
.mat-mdc-raised-button .mat-focus-indicator::before {
  margin: calc(calc(var(--mat-focus-indicator-border-width, 3px) + 2px) * -1);
}

.mat-mdc-outlined-button .mat-focus-indicator::before {
  margin: calc(calc(var(--mat-focus-indicator-border-width, 3px) + 3px) * -1);
}
`,`@media (forced-colors: active) {
  .mat-mdc-button:not(.mdc-button--outlined),
  .mat-mdc-unelevated-button:not(.mdc-button--outlined),
  .mat-mdc-raised-button:not(.mdc-button--outlined),
  .mat-mdc-outlined-button:not(.mdc-button--outlined),
  .mat-mdc-button-base.mat-tonal-button,
  .mat-mdc-icon-button.mat-mdc-icon-button,
  .mat-mdc-outlined-button .mdc-button__ripple {
    outline: solid 1px;
  }
}
`],encapsulation:2,changeDetection:0})}return r})();function _t(r){return r.hasAttribute("mat-raised-button")?"elevated":r.hasAttribute("mat-stroked-button")?"outlined":r.hasAttribute("mat-flat-button")?"filled":r.hasAttribute("mat-button")?"text":null}var Jt=(()=>{class r{static \u0275fac=function(e){return new(e||r)};static \u0275mod=q({type:r});static \u0275inj=M({imports:[it,Q]})}return r})();var A=class r{logs=C([]);showDialog=C(!1);debugLog(a,t){let e={timestamp:new Date,message:a,data:t};this.logs.update(n=>[e,...n]),console.log(`[DEBUG] ${a}`,t)}clearLogs(){this.logs.set([])}toggleDialog(){this.showDialog.update(a=>!a)}closeDialog(){this.showDialog.set(!1)}openDialog(){this.showDialog.set(!0)}static \u0275fac=function(t){return new(t||r)};static \u0275prov=h({token:r,factory:r.\u0275fac,providedIn:"root"})};var lt=class r{constructor(a){this.logger=a;this.config=this.getConfig(),this.logger.debugLog("Data service initialized",{environment:window.location.href.includes("localhost")?"localhost":"production",siteUrl:this.config.siteUrl,apiPath:this.config.apiPath,listName:this.config.listName}),this.readyPromise=this.loadAllData()}logger;config;requestDigest=null;digestExpirationTime=null;cache={};readyPromise;get ready(){return this.readyPromise}getConfig(){if(window.location.href.includes("localhost"))return this.logger.debugLog("Running in localhost development mode"),{siteUrl:"http://localhost:3000",apiPath:"",listName:"GraphNote",documentLibraryName:"GraphNoteDocuments"};let t={siteUrl:"https://collab.napma.nato.int/flep/mstd",apiPath:"/_api/web",listName:"GraphNote",documentLibraryName:"GraphNoteDocuments"},e=window.__graphnoteEnv;if(e&&e.siteUrl){let n={siteUrl:e.siteUrl,apiPath:e.apiPath??t.apiPath,listName:e.listName??t.listName,documentLibraryName:e.documentLibraryName??t.documentLibraryName};return this.logger.debugLog("Running in production SharePoint mode using __graphnoteEnv overrides",n),n}return this.logger.debugLog("Running in production SharePoint mode using hardcoded dev-site fallback (window.__graphnoteEnv was not set, or had no siteUrl)"),t}buildApiUrl(a){return`${this.config.siteUrl}${this.config.apiPath}${a}`}getHeaders(a){let t={Accept:"application/json;odata=verbose","Content-Type":"application/json;odata=verbose"};return a&&(t["X-RequestDigest"]=a),t}async getRequestDigest(a=!1){let t=Date.now();if(!a&&this.requestDigest&&this.digestExpirationTime&&t<this.digestExpirationTime)return this.logger.debugLog("Using cached request digest"),this.requestDigest;let e=`${this.config.siteUrl}/_api/contextinfo`;this.logger.debugLog("Requesting new digest from:",e);try{let n=await fetch(e,{method:"POST",headers:{Accept:"application/json;odata=verbose","Content-Type":"application/json;odata=verbose"},credentials:"include"});if(!n.ok){let i=await n.text();throw this.logger.debugLog("Failed to get digest",{status:n.status,statusText:n.statusText,responseBody:i}),new Error(`Failed to get request digest: ${n.status} ${n.statusText}`)}let o=await n.json();return this.requestDigest=o.d.GetContextWebInformation.FormDigestValue,this.digestExpirationTime=t+1500*1e3,this.logger.debugLog("Request digest obtained and cached successfully"),this.requestDigest}catch(n){throw this.logger.debugLog("Error getting request digest",n),n}}async executeWithDigestRetry(a,t){try{let e=await this.getRequestDigest();return await a(e)}catch(e){let n=e instanceof Error?e.message:String(e);if(n.includes("401")||n.includes("403")||n.includes("digest")){this.logger.debugLog(`${t} failed with potential digest error, retrying with fresh digest`);let i=await this.getRequestDigest(!0);return await a(i)}throw e}}async queryGraphNoteList(){let a=`/Lists/getbytitle('${this.config.listName}')/Items?$select=Id,Class,Gnid,Json`,t=this.buildApiUrl(a);this.logger.debugLog(`Fetching all GraphNote data from URL: ${t}`);try{let e=await fetch(t,{method:"GET",headers:this.getHeaders(),credentials:"include"});if(!e.ok){let o=await e.text();throw this.logger.debugLog("HTTP Error Details",{status:e.status,statusText:e.statusText,url:t,responseBody:o}),new Error(`SharePoint query failed: ${e.status} ${e.statusText}`)}let n=await e.json();return this.logger.debugLog("Raw JSON response from GraphNote",n),Array.isArray(n)?n:n.d&&n.d.results?n.d.results:n.d&&Array.isArray(n.d)?n.d:(this.logger.debugLog("Unexpected response format",n),[])}catch(e){throw this.logger.debugLog("Error querying ProjectAdmin list",{error:e,message:e instanceof Error?e.message:String(e),stack:e instanceof Error?e.stack:void 0,url:t}),e}}async loadAllListData(){let a=await this.queryGraphNoteList(),t={};for(let e of a){if(!e.Class){this.logger.debugLog("Skipping GraphNote row with no Class",e);continue}let n;try{n=e.Json?JSON.parse(e.Json):{}}catch(i){this.logger.debugLog(`Failed to parse Json for item ${e.Id} (Class: ${e.Class})`,i);continue}let o=g(p({},n),{Id:e.Id,Gnid:e.Gnid});t[e.Class]||(t[e.Class]=[]),t[e.Class].push(o)}return t}async loadSiteUsersData(){return this.getSiteUsers()}async loadCurrentUserData(){try{let a=await this.getCurrentUser();return[{Id:a.Id,Title:a.Title}]}catch(a){return this.logger.debugLog("Error loading current user - returning empty array",a),[]}}async loadAllData(){let[a,t,e]=await Promise.all([this.loadAllListData(),this.loadSiteUsersData(),this.loadCurrentUserData()]);a.siteUsers=t,a.currentUser=e,this.cache=a,this.logger.debugLog("GraphNote data loaded into cache",this.cache)}async refresh(){await this.loadAllData()}getItems(a){return this.cache[a]||[]}getCurrentUserFromCache(){return this.getItems("currentUser")[0]??null}getAllData(){return this.cache}async addItem(a,t){this.logger.debugLog(`Adding item of Class: ${a}`,t);let e=`/Lists/getbytitle('${this.config.listName}')/Items`,n=this.buildApiUrl(e),o=crypto.randomUUID(),i=async c=>{let s={__metadata:{type:`SP.Data.${this.config.listName}ListItem`},Class:a,Gnid:o,Json:JSON.stringify(t)};this.logger.debugLog("Request payload:",s);let m=await fetch(n,{method:"POST",headers:this.getHeaders(c),credentials:"include",body:JSON.stringify(s)});if(!m.ok){let u=await m.text();throw this.logger.debugLog("HTTP Error Details",{status:m.status,statusText:m.statusText,url:n,responseBody:u}),new Error(`SharePoint add failed: ${m.status} ${m.statusText} - ${u}`)}let d=await m.json();this.logger.debugLog(`Item added successfully (Class: ${a})`,d.d);let b=g(p({},t),{Gnid:o,Id:d.d.Id});return this.cache[a]||(this.cache[a]=[]),this.cache[a].push(b),b};return this.executeWithDigestRetry(i,"addItem")}async updateItem(a,t,e){this.logger.debugLog(`Updating item Id ${t} of Class: ${a}`,e);let n=`/Lists/getbytitle('${this.config.listName}')/Items(${t})`,o=this.buildApiUrl(n),i=async c=>{let s={__metadata:{type:`SP.Data.${this.config.listName}ListItem`},Class:a,Json:JSON.stringify(e)},m=await fetch(o,{method:"POST",headers:g(p({},this.getHeaders(c)),{"X-HTTP-Method":"MERGE","IF-MATCH":"*"}),credentials:"include",body:JSON.stringify(s)});if(!m.ok){let f=await m.text();throw this.logger.debugLog("HTTP Error Details",{status:m.status,statusText:m.statusText,url:o,responseBody:f}),new Error(`SharePoint update failed: ${m.status} ${m.statusText} - ${f}`)}this.logger.debugLog(`Item updated successfully (Class: ${a})`,{itemId:t});let d=this.cache[a]||[],b=d.findIndex(f=>f.Id===t),u=b>=0?d[b].Gnid:void 0,v=g(p({},e),{Id:t,Gnid:u});b>=0?d[b]=v:d.push(v),this.cache[a]=d};return this.executeWithDigestRetry(i,"updateItem")}async patchListItemFields(a,t){let e=`/Lists/getbytitle('${this.config.listName}')/Items(${a})`,n=this.buildApiUrl(e),o=async i=>{let c=p({__metadata:{type:`SP.Data.${this.config.listName}ListItem`}},t),s=await fetch(n,{method:"POST",headers:g(p({},this.getHeaders(i)),{"X-HTTP-Method":"MERGE","IF-MATCH":"*"}),credentials:"include",body:JSON.stringify(c)});if(!s.ok){let m=await s.text();throw this.logger.debugLog("HTTP Error Details",{status:s.status,statusText:s.statusText,url:n,responseBody:m}),new Error(`SharePoint field patch failed: ${s.status} ${s.statusText} - ${m}`)}};return this.executeWithDigestRetry(o,"patchListItemFields")}async promoteGuidToGnid(){let a=0,t=0,e=0;for(let n of Object.keys(this.cache))if(!(n==="siteUsers"||n==="currentUser"))for(let o of this.cache[n]){if(o.Gnid){this.logger.debugLog(`Skipping item ${o.Id} (Class: ${n}) - already has a Gnid`),t++;continue}let i=o.Guid;if(!i){this.logger.debugLog(`Skipping item ${o.Id} (Class: ${n}) - no Guid in Json blob`),t++;continue}try{await this.patchListItemFields(o.Id,{Gnid:i}),o.Gnid=i,a++}catch(c){this.logger.debugLog(`Failed to promote Guid -> Gnid for item ${o.Id} (Class: ${n})`,c),e++}}return this.logger.debugLog("Guid -> Gnid promotion complete",{updated:a,skipped:t,failed:e}),{updated:a,skipped:t,failed:e}}async migrateStatusToOpenAndRemoveGuid(){let a=0,t=0,e=0;for(let o of Object.keys(this.cache))if(!(o==="siteUsers"||o==="currentUser"))for(let i of this.cache[o]){let c=Object.prototype.hasOwnProperty.call(i,"Guid"),s=o==="Topic"&&Object.prototype.hasOwnProperty.call(i,"Status");if(!c&&!s){this.logger.debugLog(`Skipping item ${i.Id} (Class: ${o}) - already migrated`),t++;continue}let n=i,{Id:m,Gnid:d,Guid:b,Status:u}=n,v=R(n,["Id","Gnid","Guid","Status"]),f=p({},v);o==="Topic"&&(f.Open=u==="queued"||u==="open");try{await this.updateItem(o,i.Id,f),a++}catch(bt){this.logger.debugLog(`Failed to migrate item ${i.Id} (Class: ${o})`,bt),e++}}return this.logger.debugLog("Guid removal / Status -> Open migration complete",{updated:a,skipped:t,failed:e}),{updated:a,skipped:t,failed:e}}async uploadDocument(a,t){let n=`${new URL(this.config.siteUrl).pathname.replace(/\/$/,"")}/${this.config.documentLibraryName}`,o=`/GetFolderByServerRelativeUrl('${encodeURIComponent(n)}')/Files/add(url='${encodeURIComponent(a)}',overwrite=true)`,i=this.buildApiUrl(o);this.logger.debugLog(`Uploading document "${a}" to ${this.config.documentLibraryName}`,{url:i});let c=async s=>{let m=await t.arrayBuffer(),d=await fetch(i,{method:"POST",headers:{Accept:"application/json;odata=verbose","X-RequestDigest":s},credentials:"include",body:m});if(!d.ok){let u=await d.text();throw this.logger.debugLog("HTTP Error Details",{status:d.status,statusText:d.statusText,url:i,responseBody:u}),new Error(`SharePoint document upload failed: ${d.status} ${d.statusText} - ${u}`)}let b=await d.json();return this.logger.debugLog(`Document uploaded successfully: ${a}`,b.d),b.d.UniqueId};return this.executeWithDigestRetry(c,"uploadDocument")}async addDocument(a,t,e){let n=e.name.lastIndexOf("."),o=n>=0?e.name.slice(n+1).toLowerCase():"",i=o?`${crypto.randomUUID()}.${o}`:crypto.randomUUID(),c=await this.uploadDocument(i,e),s=Array.isArray(t.Docs)?t.Docs:[],m={FileName:i,OriginalName:e.name,SourceDocId:c},d=[...s,m],f=t,{Id:b,Gnid:u}=f,v=R(f,["Id","Gnid"]);return await this.updateItem(a,t.Id,g(p({},v),{Docs:d})),{fileName:i,originalName:e.name,sourceDocId:c}}getDocumentViewUrl(a,t){let e=`{${t.toUpperCase()}}`;return`${this.config.siteUrl}/_layouts/15/WopiFrame.aspx?sourcedoc=${encodeURIComponent(e)}&file=${encodeURIComponent(a)}&action=view`}getDocumentDesktopUrl(a,t){let e=`${this.config.siteUrl}/${this.config.documentLibraryName}/${a}`;return`${t}:ofe|u|${e}`}async deleteItem(a,t){this.logger.debugLog(`Deleting item Id ${t} of Class: ${a}`);let e=`/Lists/getbytitle('${this.config.listName}')/Items(${t})`,n=this.buildApiUrl(e),o=async i=>{let c=await fetch(n,{method:"POST",headers:g(p({},this.getHeaders(i)),{"X-HTTP-Method":"DELETE","IF-MATCH":"*"}),credentials:"include"});if(!c.ok){let s=await c.text();throw this.logger.debugLog("HTTP Error Details",{status:c.status,statusText:c.statusText,url:n,responseBody:s}),new Error(`SharePoint delete failed: ${c.status} ${c.statusText} - ${s}`)}this.logger.debugLog(`Item deleted successfully (Class: ${a})`,{itemId:t}),this.cache[a]&&(this.cache[a]=this.cache[a].filter(s=>s.Id!==t))};return this.executeWithDigestRetry(o,"deleteItem")}async deleteDocument(a){let e=`${new URL(this.config.siteUrl).pathname.replace(/\/$/,"")}/${this.config.documentLibraryName}`,n=`/GetFolderByServerRelativeUrl('${encodeURIComponent(e)}')/Files('${encodeURIComponent(a)}')`,o=this.buildApiUrl(n);this.logger.debugLog(`Deleting document "${a}" from ${this.config.documentLibraryName}`,{url:o});let i=async c=>{let s=await fetch(o,{method:"POST",headers:g(p({},this.getHeaders(c)),{"X-HTTP-Method":"DELETE","IF-MATCH":"*"}),credentials:"include"});if(!s.ok){let m=await s.text();throw this.logger.debugLog("HTTP Error Details",{status:s.status,statusText:s.statusText,url:o,responseBody:m}),new Error(`SharePoint document delete failed: ${s.status} ${s.statusText} - ${m}`)}this.logger.debugLog(`Document deleted successfully: ${a}`)};return this.executeWithDigestRetry(i,"deleteDocument")}async getCurrentUser(){this.logger.debugLog("Loading current user");let a=this.buildApiUrl("/currentuser");this.logger.debugLog(`Fetching current user from URL: ${a}`);try{let t=await fetch(a,{method:"GET",headers:this.getHeaders(),credentials:"include"});if(!t.ok)throw new Error(`Failed to load user: ${t.status}`);let e=await t.json();return this.logger.debugLog("Raw JSON response from currentuser",e),e.d}catch(t){throw this.logger.debugLog("Error loading user",t),t}}async getSiteUsers(){this.logger.debugLog("Loading site users");let a=this.buildApiUrl("/siteusers");this.logger.debugLog(`Fetching site users from URL: ${a}`);try{let t=await fetch(a,{method:"GET",headers:this.getHeaders(),credentials:"include"});if(!t.ok)return this.logger.debugLog(`Failed to load site users: ${t.status} - returning empty array`),[];let e=await t.json();return this.logger.debugLog("Raw JSON response from siteusers",e),e.d.results||[]}catch(t){return this.logger.debugLog("Error loading site users - returning empty array",t),[]}}static \u0275fac=function(t){return new(t||r)(N(A))};static \u0275prov=h({token:r,factory:r.\u0275fac,providedIn:"root"})};export{ht as a,qt as b,Jt as c,A as d,lt as e};
