import{a as Aa,b as Ta,c as Va}from"./chunk-6AC656T3.js";import{a as ei,b as mt,c as ca,d as da,e as ht,f as ut,g as ti,h as _t}from"./chunk-WYSHZURX.js";import{a as Ia,b as mi}from"./chunk-FYNGFHEH.js";import{d as Qn}from"./chunk-XKA4DVHO.js";import{a as Oa,b as Fa,c as Pa,d as Ra}from"./chunk-ORHXF2E2.js";import{A as Hi,B as Ca,C as wa,D as Da,E as xa,F as Ma,G as ka,I as ri,J as oi,K as Ui,L as si,M as li,N as ci,O as Sa,P as et,Q as Ea,R as di,S as pi,a as na,b as Je,c as xe,d as Me,e as aa,h as ra,i as je,j as At,k as oa,m as Ge,n as Tt,o as sa,p as Wt,q as Xt,t as Zt,u as la,v as Jt,x as pt}from"./chunk-HQIQ2UZ4.js";import{a as ft,b as vt}from"./chunk-I7TFH7FE.js";import{$ as x,$a as u,$b as Ze,$c as ia,A as xt,Ab as y,B as An,Ba as Fn,Bb as U,Bd as va,Ca as st,Cb as kt,Cd as ba,D as Mt,Db as Ht,Eb as Yt,Ec as Wn,Ed as ya,Fb as jt,Fc as Xn,Ga as k,Gb as Nn,Gc as Zn,Ha as ge,Hb as Z,Hc as re,Ia as F,Ib as Bn,Ja as Pn,Jb as St,Jc as qt,K as te,Kb as zn,Kc as ce,L as Bt,La as K,Lb as dt,M as P,Ma as Re,Mb as Hn,Na as Vi,Nb as Et,Nc as Jn,Ob as Li,Qb as Yn,R as ot,S as se,Sb as Gt,T as ue,Tc as ea,Ua as S,Ub as Ut,V as L,Vb as jn,Vc as oe,W as Tn,Wa as f,Wb as Gn,X as s,Xa as v,Xb as Un,Xc as zi,Ya as lt,Yc as ta,Za as H,Zb as z,_a as Y,_b as T,a as B,aa as M,ab as l,ad as $t,b as Se,ba as _e,bb as c,bd as Ve,c as Nt,ca as We,cb as E,cd as Kt,d as he,da as le,db as W,ea as Te,eb as ne,ed as Ot,fb as Rn,fc as Ni,fd as ii,g as O,gb as Ee,gc as Qt,gd as ni,ha as b,hb as V,hd as gt,ia as Ce,ib as q,id as Yi,jb as _,jd as ji,kb as zt,kc as fe,kd as ai,l as Ne,la as g,lb as h,lc as ze,ld as pa,mb as $,mc as De,md as Gi,na as ie,nb as N,nc as Ie,nd as ma,oa as Oe,ob as pe,oc as ve,p as En,pb as G,pc as be,pd as ha,qa as R,qb as C,qc as It,qd as Ft,ra as Xe,rb as w,rd as ua,sc as He,sd as _a,ta as On,tb as Vn,tc as Bi,td as ga,ub as Ln,v as Be,va as d,vb as ae,vc as Ye,w as In,wa as we,wb as ct,wc as qn,xa as Fe,xb as A,yb as X,yc as $n,yd as fa,za as Pe,zb as p,zc as Kn}from"./chunk-N6VKWKPO.js";var kr=["mat-internal-form-field",""],Sr=["*"],La=(()=>{class n{labelPosition="after";static \u0275fac=function(t){return new(t||n)};static \u0275cmp=k({type:n,selectors:[["div","mat-internal-form-field",""]],hostAttrs:[1,"mdc-form-field","mat-internal-form-field"],hostVars:2,hostBindings:function(t,i){t&2&&A("mdc-form-field--align-end",i.labelPosition==="before")},inputs:{labelPosition:"labelPosition"},attrs:kr,ngContentSelectors:Sr,decls:1,vars:0,template:function(t,i){t&1&&($(),N(0))},styles:[`.mat-internal-form-field {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  display: inline-flex;
  align-items: center;
  vertical-align: middle;
}
.mat-internal-form-field > label {
  margin-left: 0;
  margin-right: auto;
  padding-left: 4px;
  padding-right: 0;
  order: 0;
}
[dir=rtl] .mat-internal-form-field > label {
  margin-left: auto;
  margin-right: 0;
  padding-left: 0;
  padding-right: 4px;
}

.mdc-form-field--align-end > label {
  margin-left: auto;
  margin-right: 0;
  padding-left: 0;
  padding-right: 4px;
  order: -1;
}
[dir=rtl] .mdc-form-field--align-end .mdc-form-field--align-end label {
  margin-left: 0;
  margin-right: auto;
  padding-left: 4px;
  padding-right: 0;
}
`],encapsulation:2,changeDetection:0})}return n})();var Er=["switch"],Ir=["*"];function Ar(n,r){n&1&&(l(0,"span",11),_e(),l(1,"svg",13),E(2,"path",14),c(),l(3,"svg",15),E(4,"path",16),c()())}var Tr=new L("mat-slide-toggle-default-options",{providedIn:"root",factory:()=>({disableToggleValue:!1,hideIcon:!1,disabledInteractive:!1})}),hi=class{source;checked;constructor(r,e){this.source=r,this.checked=e}},Qi=(()=>{class n{_elementRef=s(R);_focusMonitor=s(Ye);_changeDetectorRef=s(z);defaults=s(Tr);_onChange=e=>{};_onTouched=()=>{};_validatorOnChange=()=>{};_uniqueId;_checked=!1;_createChangeEvent(e){return new hi(this,e)}_labelId;get buttonId(){return`${this.id||this._uniqueId}-button`}_switchElement;focus(){this._switchElement.nativeElement.focus()}_noopAnimations=oe();_focused=!1;name=null;id;labelPosition="after";ariaLabel=null;ariaLabelledby=null;ariaDescribedby;required=!1;color;disabled=!1;disableRipple=!1;tabIndex=0;get checked(){return this._checked}set checked(e){this._checked=e,this._changeDetectorRef.markForCheck()}hideIcon;disabledInteractive;change=new b;toggleChange=new b;get inputId(){return`${this.id||this._uniqueId}-input`}constructor(){s(fe).load(Ve);let e=s(new Ut("tabindex"),{optional:!0}),t=this.defaults;this.tabIndex=e==null?0:parseInt(e)||0,this.color=t.color||"accent",this.id=this._uniqueId=s(ce).getId("mat-mdc-slide-toggle-"),this.hideIcon=t.hideIcon??!1,this.disabledInteractive=t.disabledInteractive??!1,this._labelId=this._uniqueId+"-label"}ngAfterContentInit(){this._focusMonitor.monitor(this._elementRef,!0).subscribe(e=>{e==="keyboard"||e==="program"?(this._focused=!0,this._changeDetectorRef.markForCheck()):e||Promise.resolve().then(()=>{this._focused=!1,this._onTouched(),this._changeDetectorRef.markForCheck()})})}ngOnChanges(e){e.required&&this._validatorOnChange()}ngOnDestroy(){this._focusMonitor.stopMonitoring(this._elementRef)}writeValue(e){this.checked=!!e}registerOnChange(e){this._onChange=e}registerOnTouched(e){this._onTouched=e}validate(e){return this.required&&e.value!==!0?{required:!0}:null}registerOnValidatorChange(e){this._validatorOnChange=e}setDisabledState(e){this.disabled=e,this._changeDetectorRef.markForCheck()}toggle(){this.checked=!this.checked,this._onChange(this.checked)}_emitChangeEvent(){this._onChange(this.checked),this.change.emit(this._createChangeEvent(this.checked))}_handleClick(){this.disabled||(this.toggleChange.emit(),this.defaults.disableToggleValue||(this.checked=!this.checked,this._onChange(this.checked),this.change.emit(new hi(this,this.checked))))}_getAriaLabelledBy(){return this.ariaLabelledby?this.ariaLabelledby:this.ariaLabel?null:this._labelId}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=k({type:n,selectors:[["mat-slide-toggle"]],viewQuery:function(t,i){if(t&1&&G(Er,5),t&2){let a;C(a=w())&&(i._switchElement=a.first)}},hostAttrs:[1,"mat-mdc-slide-toggle"],hostVars:13,hostBindings:function(t,i){t&2&&(q("id",i.id),S("tabindex",null)("aria-label",null)("name",null)("aria-labelledby",null),X(i.color?"mat-"+i.color:""),A("mat-mdc-slide-toggle-focused",i._focused)("mat-mdc-slide-toggle-checked",i.checked)("_mat-animation-noopable",i._noopAnimations))},inputs:{name:"name",id:"id",labelPosition:"labelPosition",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],ariaDescribedby:[0,"aria-describedby","ariaDescribedby"],required:[2,"required","required",T],color:"color",disabled:[2,"disabled","disabled",T],disableRipple:[2,"disableRipple","disableRipple",T],tabIndex:[2,"tabIndex","tabIndex",e=>e==null?0:Ze(e)],checked:[2,"checked","checked",T],hideIcon:[2,"hideIcon","hideIcon",T],disabledInteractive:[2,"disabledInteractive","disabledInteractive",T]},outputs:{change:"change",toggleChange:"toggleChange"},exportAs:["matSlideToggle"],features:[Z([{provide:Ot,useExisting:ot(()=>n),multi:!0},{provide:ni,useExisting:n,multi:!0}]),ie],ngContentSelectors:Ir,decls:14,vars:27,consts:[["switch",""],["mat-internal-form-field","",3,"labelPosition"],["role","switch","type","button",1,"mdc-switch",3,"click","tabIndex","disabled"],[1,"mat-mdc-slide-toggle-touch-target"],[1,"mdc-switch__track"],[1,"mdc-switch__handle-track"],[1,"mdc-switch__handle"],[1,"mdc-switch__shadow"],[1,"mdc-elevation-overlay"],[1,"mdc-switch__ripple"],["mat-ripple","",1,"mat-mdc-slide-toggle-ripple","mat-focus-indicator",3,"matRippleTrigger","matRippleDisabled","matRippleCentered"],[1,"mdc-switch__icons"],[1,"mdc-label",3,"click","for"],["viewBox","0 0 24 24","aria-hidden","true",1,"mdc-switch__icon","mdc-switch__icon--on"],["d","M19.69,5.23L8.96,15.96l-4.23-4.23L2.96,13.5l6,6L21.46,7L19.69,5.23z"],["viewBox","0 0 24 24","aria-hidden","true",1,"mdc-switch__icon","mdc-switch__icon--off"],["d","M20 13H4v-2h16v2z"]],template:function(t,i){if(t&1&&($(),l(0,"div",1)(1,"button",2,0),_("click",function(){return i._handleClick()}),E(3,"div",3)(4,"span",4),l(5,"span",5)(6,"span",6)(7,"span",7),E(8,"span",8),c(),l(9,"span",9),E(10,"span",10),c(),f(11,Ar,5,0,"span",11),c()()(),l(12,"label",12),_("click",function(o){return o.stopPropagation()}),N(13),c()()),t&2){let a=ae(2);u("labelPosition",i.labelPosition),d(),A("mdc-switch--selected",i.checked)("mdc-switch--unselected",!i.checked)("mdc-switch--checked",i.checked)("mdc-switch--disabled",i.disabled)("mat-mdc-slide-toggle-disabled-interactive",i.disabledInteractive),u("tabIndex",i.disabled&&!i.disabledInteractive?-1:i.tabIndex)("disabled",i.disabled&&!i.disabledInteractive),S("id",i.buttonId)("name",i.name)("aria-label",i.ariaLabel)("aria-labelledby",i._getAriaLabelledBy())("aria-describedby",i.ariaDescribedby)("aria-required",i.required||null)("aria-checked",i.checked)("aria-disabled",i.disabled&&i.disabledInteractive?"true":null),d(9),u("matRippleTrigger",a)("matRippleDisabled",i.disableRipple||i.disabled)("matRippleCentered",!0),d(),v(i.hideIcon?-1:11),d(),u("for",i.buttonId),S("id",i._labelId)}},dependencies:[$t,La],styles:[`.mdc-switch {
  align-items: center;
  background: none;
  border: none;
  cursor: pointer;
  display: inline-flex;
  flex-shrink: 0;
  margin: 0;
  outline: none;
  overflow: visible;
  padding: 0;
  position: relative;
  width: var(--mat-slide-toggle-track-width, 52px);
}
.mdc-switch.mdc-switch--disabled {
  cursor: default;
  pointer-events: none;
}
.mdc-switch.mat-mdc-slide-toggle-disabled-interactive {
  pointer-events: auto;
}

.mdc-switch__track {
  overflow: hidden;
  position: relative;
  width: 100%;
  height: var(--mat-slide-toggle-track-height, 32px);
  border-radius: var(--mat-slide-toggle-track-shape, var(--mat-sys-corner-full));
}
.mdc-switch--disabled.mdc-switch .mdc-switch__track {
  opacity: var(--mat-slide-toggle-disabled-track-opacity, 0.12);
}
.mdc-switch__track::before, .mdc-switch__track::after {
  border: 1px solid transparent;
  border-radius: inherit;
  box-sizing: border-box;
  content: "";
  height: 100%;
  left: 0;
  position: absolute;
  width: 100%;
  border-width: var(--mat-slide-toggle-track-outline-width, 2px);
  border-color: var(--mat-slide-toggle-track-outline-color, var(--mat-sys-outline));
}
.mdc-switch--selected .mdc-switch__track::before, .mdc-switch--selected .mdc-switch__track::after {
  border-width: var(--mat-slide-toggle-selected-track-outline-width, 2px);
  border-color: var(--mat-slide-toggle-selected-track-outline-color, transparent);
}
.mdc-switch--disabled .mdc-switch__track::before, .mdc-switch--disabled .mdc-switch__track::after {
  border-width: var(--mat-slide-toggle-disabled-unselected-track-outline-width, 2px);
  border-color: var(--mat-slide-toggle-disabled-unselected-track-outline-color, var(--mat-sys-on-surface));
}
@media (forced-colors: active) {
  .mdc-switch__track {
    border-color: currentColor;
  }
}
.mdc-switch__track::before {
  transition: transform 75ms 0ms cubic-bezier(0, 0, 0.2, 1);
  transform: translateX(0);
  background: var(--mat-slide-toggle-unselected-track-color, var(--mat-sys-surface-variant));
}
.mdc-switch--selected .mdc-switch__track::before {
  transition: transform 75ms 0ms cubic-bezier(0.4, 0, 0.6, 1);
  transform: translateX(100%);
}
[dir=rtl] .mdc-switch--selected .mdc-switch--selected .mdc-switch__track::before {
  transform: translateX(-100%);
}
.mdc-switch--selected .mdc-switch__track::before {
  opacity: var(--mat-slide-toggle-hidden-track-opacity, 0);
  transition: var(--mat-slide-toggle-hidden-track-transition, opacity 75ms);
}
.mdc-switch--unselected .mdc-switch__track::before {
  opacity: var(--mat-slide-toggle-visible-track-opacity, 1);
  transition: var(--mat-slide-toggle-visible-track-transition, opacity 75ms);
}
.mdc-switch:enabled:hover:not(:focus):not(:active) .mdc-switch__track::before {
  background: var(--mat-slide-toggle-unselected-hover-track-color, var(--mat-sys-surface-variant));
}
.mdc-switch:enabled:focus:not(:active) .mdc-switch__track::before {
  background: var(--mat-slide-toggle-unselected-focus-track-color, var(--mat-sys-surface-variant));
}
.mdc-switch:enabled:active .mdc-switch__track::before {
  background: var(--mat-slide-toggle-unselected-pressed-track-color, var(--mat-sys-surface-variant));
}
.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:hover:not(:focus):not(:active) .mdc-switch__track::before, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:focus:not(:active) .mdc-switch__track::before, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:active .mdc-switch__track::before, .mdc-switch.mdc-switch--disabled .mdc-switch__track::before {
  background: var(--mat-slide-toggle-disabled-unselected-track-color, var(--mat-sys-surface-variant));
}
.mdc-switch__track::after {
  transform: translateX(-100%);
  background: var(--mat-slide-toggle-selected-track-color, var(--mat-sys-primary));
}
[dir=rtl] .mdc-switch__track::after {
  transform: translateX(100%);
}
.mdc-switch--selected .mdc-switch__track::after {
  transform: translateX(0);
}
.mdc-switch--selected .mdc-switch__track::after {
  opacity: var(--mat-slide-toggle-visible-track-opacity, 1);
  transition: var(--mat-slide-toggle-visible-track-transition, opacity 75ms);
}
.mdc-switch--unselected .mdc-switch__track::after {
  opacity: var(--mat-slide-toggle-hidden-track-opacity, 0);
  transition: var(--mat-slide-toggle-hidden-track-transition, opacity 75ms);
}
.mdc-switch:enabled:hover:not(:focus):not(:active) .mdc-switch__track::after {
  background: var(--mat-slide-toggle-selected-hover-track-color, var(--mat-sys-primary));
}
.mdc-switch:enabled:focus:not(:active) .mdc-switch__track::after {
  background: var(--mat-slide-toggle-selected-focus-track-color, var(--mat-sys-primary));
}
.mdc-switch:enabled:active .mdc-switch__track::after {
  background: var(--mat-slide-toggle-selected-pressed-track-color, var(--mat-sys-primary));
}
.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:hover:not(:focus):not(:active) .mdc-switch__track::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:focus:not(:active) .mdc-switch__track::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:active .mdc-switch__track::after, .mdc-switch.mdc-switch--disabled .mdc-switch__track::after {
  background: var(--mat-slide-toggle-disabled-selected-track-color, var(--mat-sys-on-surface));
}

.mdc-switch__handle-track {
  height: 100%;
  pointer-events: none;
  position: absolute;
  top: 0;
  transition: transform 75ms 0ms cubic-bezier(0.4, 0, 0.2, 1);
  left: 0;
  right: auto;
  transform: translateX(0);
  width: calc(100% - var(--mat-slide-toggle-handle-width));
}
[dir=rtl] .mdc-switch__handle-track {
  left: auto;
  right: 0;
}
.mdc-switch--selected .mdc-switch__handle-track {
  transform: translateX(100%);
}
[dir=rtl] .mdc-switch--selected .mdc-switch__handle-track {
  transform: translateX(-100%);
}

.mdc-switch__handle {
  display: flex;
  pointer-events: auto;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 0;
  right: auto;
  transition: width 75ms cubic-bezier(0.4, 0, 0.2, 1), height 75ms cubic-bezier(0.4, 0, 0.2, 1), margin 75ms cubic-bezier(0.4, 0, 0.2, 1);
  width: var(--mat-slide-toggle-handle-width);
  height: var(--mat-slide-toggle-handle-height);
  border-radius: var(--mat-slide-toggle-handle-shape, var(--mat-sys-corner-full));
}
[dir=rtl] .mdc-switch__handle {
  left: auto;
  right: 0;
}
.mat-mdc-slide-toggle .mdc-switch--unselected .mdc-switch__handle {
  width: var(--mat-slide-toggle-unselected-handle-size, 16px);
  height: var(--mat-slide-toggle-unselected-handle-size, 16px);
  margin: var(--mat-slide-toggle-unselected-handle-horizontal-margin, 0 8px);
}
.mat-mdc-slide-toggle .mdc-switch--unselected .mdc-switch__handle:has(.mdc-switch__icons) {
  margin: var(--mat-slide-toggle-unselected-with-icon-handle-horizontal-margin, 0 4px);
}
.mat-mdc-slide-toggle .mdc-switch--selected .mdc-switch__handle {
  width: var(--mat-slide-toggle-selected-handle-size, 24px);
  height: var(--mat-slide-toggle-selected-handle-size, 24px);
  margin: var(--mat-slide-toggle-selected-handle-horizontal-margin, 0 24px);
}
.mat-mdc-slide-toggle .mdc-switch--selected .mdc-switch__handle:has(.mdc-switch__icons) {
  margin: var(--mat-slide-toggle-selected-with-icon-handle-horizontal-margin, 0 24px);
}
.mat-mdc-slide-toggle .mdc-switch__handle:has(.mdc-switch__icons) {
  width: var(--mat-slide-toggle-with-icon-handle-size, 24px);
  height: var(--mat-slide-toggle-with-icon-handle-size, 24px);
}
.mat-mdc-slide-toggle .mdc-switch:active:not(.mdc-switch--disabled) .mdc-switch__handle {
  width: var(--mat-slide-toggle-pressed-handle-size, 28px);
  height: var(--mat-slide-toggle-pressed-handle-size, 28px);
}
.mat-mdc-slide-toggle .mdc-switch--selected:active:not(.mdc-switch--disabled) .mdc-switch__handle {
  margin: var(--mat-slide-toggle-selected-pressed-handle-horizontal-margin, 0 22px);
}
.mat-mdc-slide-toggle .mdc-switch--unselected:active:not(.mdc-switch--disabled) .mdc-switch__handle {
  margin: var(--mat-slide-toggle-unselected-pressed-handle-horizontal-margin, 0 2px);
}
.mdc-switch--disabled.mdc-switch--selected .mdc-switch__handle::after {
  opacity: var(--mat-slide-toggle-disabled-selected-handle-opacity, 1);
}
.mdc-switch--disabled.mdc-switch--unselected .mdc-switch__handle::after {
  opacity: var(--mat-slide-toggle-disabled-unselected-handle-opacity, 0.38);
}
.mdc-switch__handle::before, .mdc-switch__handle::after {
  border: 1px solid transparent;
  border-radius: inherit;
  box-sizing: border-box;
  content: "";
  width: 100%;
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  transition: background-color 75ms 0ms cubic-bezier(0.4, 0, 0.2, 1), border-color 75ms 0ms cubic-bezier(0.4, 0, 0.2, 1);
  z-index: -1;
}
@media (forced-colors: active) {
  .mdc-switch__handle::before, .mdc-switch__handle::after {
    border-color: currentColor;
  }
}
.mdc-switch--selected:enabled .mdc-switch__handle::after {
  background: var(--mat-slide-toggle-selected-handle-color, var(--mat-sys-on-primary));
}
.mdc-switch--selected:enabled:hover:not(:focus):not(:active) .mdc-switch__handle::after {
  background: var(--mat-slide-toggle-selected-hover-handle-color, var(--mat-sys-primary-container));
}
.mdc-switch--selected:enabled:focus:not(:active) .mdc-switch__handle::after {
  background: var(--mat-slide-toggle-selected-focus-handle-color, var(--mat-sys-primary-container));
}
.mdc-switch--selected:enabled:active .mdc-switch__handle::after {
  background: var(--mat-slide-toggle-selected-pressed-handle-color, var(--mat-sys-primary-container));
}
.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled.mdc-switch--selected:hover:not(:focus):not(:active) .mdc-switch__handle::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled.mdc-switch--selected:focus:not(:active) .mdc-switch__handle::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled.mdc-switch--selected:active .mdc-switch__handle::after, .mdc-switch--selected.mdc-switch--disabled .mdc-switch__handle::after {
  background: var(--mat-slide-toggle-disabled-selected-handle-color, var(--mat-sys-surface));
}
.mdc-switch--unselected:enabled .mdc-switch__handle::after {
  background: var(--mat-slide-toggle-unselected-handle-color, var(--mat-sys-outline));
}
.mdc-switch--unselected:enabled:hover:not(:focus):not(:active) .mdc-switch__handle::after {
  background: var(--mat-slide-toggle-unselected-hover-handle-color, var(--mat-sys-on-surface-variant));
}
.mdc-switch--unselected:enabled:focus:not(:active) .mdc-switch__handle::after {
  background: var(--mat-slide-toggle-unselected-focus-handle-color, var(--mat-sys-on-surface-variant));
}
.mdc-switch--unselected:enabled:active .mdc-switch__handle::after {
  background: var(--mat-slide-toggle-unselected-pressed-handle-color, var(--mat-sys-on-surface-variant));
}
.mdc-switch--unselected.mdc-switch--disabled .mdc-switch__handle::after {
  background: var(--mat-slide-toggle-disabled-unselected-handle-color, var(--mat-sys-on-surface));
}
.mdc-switch__handle::before {
  background: var(--mat-slide-toggle-handle-surface-color);
}

.mdc-switch__shadow {
  border-radius: inherit;
  bottom: 0;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
}
.mdc-switch:enabled .mdc-switch__shadow {
  box-shadow: var(--mat-slide-toggle-handle-elevation-shadow);
}
.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:hover:not(:focus):not(:active) .mdc-switch__shadow, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:focus:not(:active) .mdc-switch__shadow, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:active .mdc-switch__shadow, .mdc-switch.mdc-switch--disabled .mdc-switch__shadow {
  box-shadow: var(--mat-slide-toggle-disabled-handle-elevation-shadow);
}

.mdc-switch__ripple {
  left: 50%;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: -1;
  width: var(--mat-slide-toggle-state-layer-size, 40px);
  height: var(--mat-slide-toggle-state-layer-size, 40px);
}
.mdc-switch__ripple::after {
  content: "";
  opacity: 0;
}
.mdc-switch--disabled .mdc-switch__ripple::after {
  display: none;
}
.mat-mdc-slide-toggle-disabled-interactive .mdc-switch__ripple::after {
  display: block;
}
.mdc-switch:hover .mdc-switch__ripple::after {
  transition: 75ms opacity cubic-bezier(0, 0, 0.2, 1);
}
.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:enabled:focus .mdc-switch__ripple::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:enabled:active .mdc-switch__ripple::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:enabled:hover:not(:focus) .mdc-switch__ripple::after, .mdc-switch--unselected:enabled:hover:not(:focus) .mdc-switch__ripple::after {
  background: var(--mat-slide-toggle-unselected-hover-state-layer-color, var(--mat-sys-on-surface));
  opacity: var(--mat-slide-toggle-unselected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mdc-switch--unselected:enabled:focus .mdc-switch__ripple::after {
  background: var(--mat-slide-toggle-unselected-focus-state-layer-color, var(--mat-sys-on-surface));
  opacity: var(--mat-slide-toggle-unselected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mdc-switch--unselected:enabled:active .mdc-switch__ripple::after {
  background: var(--mat-slide-toggle-unselected-pressed-state-layer-color, var(--mat-sys-on-surface));
  opacity: var(--mat-slide-toggle-unselected-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
  transition: opacity 75ms linear;
}
.mdc-switch--selected:enabled:hover:not(:focus) .mdc-switch__ripple::after {
  background: var(--mat-slide-toggle-selected-hover-state-layer-color, var(--mat-sys-primary));
  opacity: var(--mat-slide-toggle-selected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mdc-switch--selected:enabled:focus .mdc-switch__ripple::after {
  background: var(--mat-slide-toggle-selected-focus-state-layer-color, var(--mat-sys-primary));
  opacity: var(--mat-slide-toggle-selected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mdc-switch--selected:enabled:active .mdc-switch__ripple::after {
  background: var(--mat-slide-toggle-selected-pressed-state-layer-color, var(--mat-sys-primary));
  opacity: var(--mat-slide-toggle-selected-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
  transition: opacity 75ms linear;
}

.mdc-switch__icons {
  position: relative;
  height: 100%;
  width: 100%;
  z-index: 1;
  transform: translateZ(0);
}
.mdc-switch--disabled.mdc-switch--unselected .mdc-switch__icons {
  opacity: var(--mat-slide-toggle-disabled-unselected-icon-opacity, 0.38);
}
.mdc-switch--disabled.mdc-switch--selected .mdc-switch__icons {
  opacity: var(--mat-slide-toggle-disabled-selected-icon-opacity, 0.38);
}

.mdc-switch__icon {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  opacity: 0;
  transition: opacity 30ms 0ms cubic-bezier(0.4, 0, 1, 1);
}
.mdc-switch--unselected .mdc-switch__icon {
  width: var(--mat-slide-toggle-unselected-icon-size, 16px);
  height: var(--mat-slide-toggle-unselected-icon-size, 16px);
  fill: var(--mat-slide-toggle-unselected-icon-color, var(--mat-sys-surface-variant));
}
.mdc-switch--unselected.mdc-switch--disabled .mdc-switch__icon {
  fill: var(--mat-slide-toggle-disabled-unselected-icon-color, var(--mat-sys-surface-variant));
}
.mdc-switch--selected .mdc-switch__icon {
  width: var(--mat-slide-toggle-selected-icon-size, 16px);
  height: var(--mat-slide-toggle-selected-icon-size, 16px);
  fill: var(--mat-slide-toggle-selected-icon-color, var(--mat-sys-on-primary-container));
}
.mdc-switch--selected.mdc-switch--disabled .mdc-switch__icon {
  fill: var(--mat-slide-toggle-disabled-selected-icon-color, var(--mat-sys-on-surface));
}

.mdc-switch--selected .mdc-switch__icon--on,
.mdc-switch--unselected .mdc-switch__icon--off {
  opacity: 1;
  transition: opacity 45ms 30ms cubic-bezier(0, 0, 0.2, 1);
}

.mat-mdc-slide-toggle {
  -webkit-user-select: none;
  user-select: none;
  display: inline-block;
  -webkit-tap-highlight-color: transparent;
  outline: 0;
}
.mat-mdc-slide-toggle .mat-mdc-slide-toggle-ripple,
.mat-mdc-slide-toggle .mdc-switch__ripple::after {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
}
.mat-mdc-slide-toggle .mat-mdc-slide-toggle-ripple:not(:empty),
.mat-mdc-slide-toggle .mdc-switch__ripple::after:not(:empty) {
  transform: translateZ(0);
}
.mat-mdc-slide-toggle.mat-mdc-slide-toggle-focused .mat-focus-indicator::before {
  content: "";
}
.mat-mdc-slide-toggle .mat-internal-form-field {
  color: var(--mat-slide-toggle-label-text-color, var(--mat-sys-on-surface));
  font-family: var(--mat-slide-toggle-label-text-font, var(--mat-sys-body-medium-font));
  line-height: var(--mat-slide-toggle-label-text-line-height, var(--mat-sys-body-medium-line-height));
  font-size: var(--mat-slide-toggle-label-text-size, var(--mat-sys-body-medium-size));
  letter-spacing: var(--mat-slide-toggle-label-text-tracking, var(--mat-sys-body-medium-tracking));
  font-weight: var(--mat-slide-toggle-label-text-weight, var(--mat-sys-body-medium-weight));
}
.mat-mdc-slide-toggle .mat-ripple-element {
  opacity: 0.12;
}
.mat-mdc-slide-toggle .mat-focus-indicator::before {
  border-radius: 50%;
}
.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__handle-track,
.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__icon,
.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__handle::before,
.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__handle::after,
.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__track::before,
.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__track::after {
  transition: none;
}
.mat-mdc-slide-toggle .mdc-switch:enabled + .mdc-label {
  cursor: pointer;
}
.mat-mdc-slide-toggle .mdc-switch--disabled + label {
  color: var(--mat-slide-toggle-disabled-label-text-color, var(--mat-sys-on-surface));
}
.mat-mdc-slide-toggle label:empty {
  display: none;
}

.mat-mdc-slide-toggle-touch-target {
  position: absolute;
  top: 50%;
  left: 50%;
  height: var(--mat-slide-toggle-touch-target-size, 48px);
  width: 100%;
  transform: translate(-50%, -50%);
  display: var(--mat-slide-toggle-touch-target-display, block);
}
[dir=rtl] .mat-mdc-slide-toggle-touch-target {
  left: auto;
  right: 50%;
  transform: translate(50%, -50%);
}
`],encapsulation:2,changeDetection:0})}return n})(),Na=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=ge({type:n});static \u0275inj=ue({imports:[Qi,Ie]})}return n})();var qi=new L("MAT_DATE_LOCALE",{providedIn:"root",factory:()=>s(Yn)}),bt="Method not implemented",ee=class{locale;_localeChanges=new O;localeChanges=this._localeChanges;setTime(r,e,t,i){throw new Error(bt)}getHours(r){throw new Error(bt)}getMinutes(r){throw new Error(bt)}getSeconds(r){throw new Error(bt)}parseTime(r,e){throw new Error(bt)}addSeconds(r,e){throw new Error(bt)}getValidDateOrNull(r){return this.isDateInstance(r)&&this.isValid(r)?r:null}deserialize(r){return r==null||this.isDateInstance(r)&&this.isValid(r)?r:this.invalid()}setLocale(r){this.locale=r,this._localeChanges.next()}compareDate(r,e){return this.getYear(r)-this.getYear(e)||this.getMonth(r)-this.getMonth(e)||this.getDate(r)-this.getDate(e)}compareTime(r,e){return this.getHours(r)-this.getHours(e)||this.getMinutes(r)-this.getMinutes(e)||this.getSeconds(r)-this.getSeconds(e)}sameDate(r,e){if(r&&e){let t=this.isValid(r),i=this.isValid(e);return t&&i?!this.compareDate(r,e):t==i}return r==e}sameTime(r,e){if(r&&e){let t=this.isValid(r),i=this.isValid(e);return t&&i?!this.compareTime(r,e):t==i}return r==e}clampDate(r,e,t){return e&&this.compareDate(r,e)<0?e:t&&this.compareDate(r,t)>0?t:r}},Ue=new L("mat-date-formats");var Fr=["tooltip"],Pr=20;var Rr=new L("mat-tooltip-scroll-strategy",{providedIn:"root",factory:()=>{let n=s(le);return()=>Wt(n,{scrollThrottle:Pr})}}),Vr=new L("mat-tooltip-default-options",{providedIn:"root",factory:()=>({showDelay:0,hideDelay:0,touchendHideDelay:1500})});var Ba="tooltip-panel",Lr={passive:!0},Nr=8,Br=8,zr=24,Hr=200,za=(()=>{class n{_elementRef=s(R);_ngZone=s(Ce);_platform=s(He);_ariaDescriber=s(Jn);_focusMonitor=s(Ye);_dir=s(De);_injector=s(le);_viewContainerRef=s(st);_mediaMatcher=s($n);_document=s(Te);_renderer=s(Pe);_animationsDisabled=oe();_defaultOptions=s(Vr,{optional:!0});_overlayRef=null;_tooltipInstance=null;_overlayPanelClass;_portal;_position="below";_positionAtOrigin=!1;_disabled=!1;_tooltipClass;_viewInitialized=!1;_pointerExitEventsInitialized=!1;_tooltipComponent=Yr;_viewportMargin=8;_currentPosition;_cssClassPrefix="mat-mdc";_ariaDescriptionPending=!1;_dirSubscribed=!1;get position(){return this._position}set position(e){e!==this._position&&(this._position=e,this._overlayRef&&(this._updatePosition(this._overlayRef),this._tooltipInstance?.show(0),this._overlayRef.updatePosition()))}get positionAtOrigin(){return this._positionAtOrigin}set positionAtOrigin(e){this._positionAtOrigin=zi(e),this._detach(),this._overlayRef=null}get disabled(){return this._disabled}set disabled(e){let t=zi(e);this._disabled!==t&&(this._disabled=t,t?this.hide(0):this._setupPointerEnterEventsIfNeeded(),this._syncAriaDescription(this.message))}get showDelay(){return this._showDelay}set showDelay(e){this._showDelay=Bi(e)}_showDelay;get hideDelay(){return this._hideDelay}set hideDelay(e){this._hideDelay=Bi(e),this._tooltipInstance&&(this._tooltipInstance._mouseLeaveHideDelay=this._hideDelay)}_hideDelay;touchGestures="auto";get message(){return this._message}set message(e){let t=this._message;this._message=e!=null?String(e).trim():"",!this._message&&this._isTooltipVisible()?this.hide(0):(this._setupPointerEnterEventsIfNeeded(),this._updateTooltipMessage()),this._syncAriaDescription(t)}_message="";get tooltipClass(){return this._tooltipClass}set tooltipClass(e){this._tooltipClass=e,this._tooltipInstance&&this._setTooltipClass(this._tooltipClass)}_eventCleanups=[];_touchstartTimeout=null;_destroyed=new O;_isDestroyed=!1;constructor(){let e=this._defaultOptions;e&&(this._showDelay=e.showDelay,this._hideDelay=e.hideDelay,e.position&&(this.position=e.position),e.positionAtOrigin&&(this.positionAtOrigin=e.positionAtOrigin),e.touchGestures&&(this.touchGestures=e.touchGestures),e.tooltipClass&&(this.tooltipClass=e.tooltipClass)),this._viewportMargin=Nr}ngAfterViewInit(){this._viewInitialized=!0,this._setupPointerEnterEventsIfNeeded(),this._focusMonitor.monitor(this._elementRef).pipe(P(this._destroyed)).subscribe(e=>{e?e==="keyboard"&&this._ngZone.run(()=>this.show()):this._ngZone.run(()=>this.hide(0))})}ngOnDestroy(){let e=this._elementRef.nativeElement;this._touchstartTimeout&&clearTimeout(this._touchstartTimeout),this._overlayRef&&(this._overlayRef.dispose(),this._tooltipInstance=null),this._eventCleanups.forEach(t=>t()),this._eventCleanups.length=0,this._destroyed.next(),this._destroyed.complete(),this._isDestroyed=!0,this._ariaDescriber.removeDescription(e,this.message,"tooltip"),this._focusMonitor.stopMonitoring(e)}show(e=this.showDelay,t){if(this.disabled||!this.message||this._isTooltipVisible()){this._tooltipInstance?._cancelPendingAnimations();return}let i=this._createOverlay(t);this._detach(),this._portal=this._portal||new je(this._tooltipComponent,this._viewContainerRef);let a=this._tooltipInstance=i.attach(this._portal).instance;a._triggerElement=this._elementRef.nativeElement,a._mouseLeaveHideDelay=this._hideDelay,a.afterHidden().pipe(P(this._destroyed)).subscribe(()=>this._detach()),this._setTooltipClass(this._tooltipClass),this._updateTooltipMessage(),a.show(e)}hide(e=this.hideDelay){let t=this._tooltipInstance;t&&(t.isVisible()?t.hide(e):(t._cancelPendingAnimations(),this._detach()))}toggle(e){this._isTooltipVisible()?this.hide():this.show(void 0,e)}_isTooltipVisible(){return!!this._tooltipInstance&&this._tooltipInstance.isVisible()}_createOverlay(e){if(this._overlayRef){let o=this._overlayRef.getConfig().positionStrategy;if((!this.positionAtOrigin||!e)&&o._origin instanceof R)return this._overlayRef;this._detach()}let t=this._injector.get(aa).getAncestorScrollContainers(this._elementRef),i=`${this._cssClassPrefix}-${Ba}`,a=Zt(this._injector,this.positionAtOrigin?e||this._elementRef:this._elementRef).withTransformOriginOn(`.${this._cssClassPrefix}-tooltip`).withFlexibleDimensions(!1).withViewportMargin(this._viewportMargin).withScrollableContainers(t).withPopoverLocation("global");return a.positionChanges.pipe(P(this._destroyed)).subscribe(o=>{this._updateCurrentPositionClass(o.connectionPair),this._tooltipInstance&&o.scrollableViewProperties.isOverlayClipped&&this._tooltipInstance.isVisible()&&this._ngZone.run(()=>this.hide(0))}),this._overlayRef=pt(this._injector,{direction:this._dir,positionStrategy:a,panelClass:this._overlayPanelClass?[...this._overlayPanelClass,i]:i,scrollStrategy:this._injector.get(Rr)(),disableAnimations:this._animationsDisabled,eventPredicate:this._overlayEventPredicate}),this._updatePosition(this._overlayRef),this._overlayRef.detachments().pipe(P(this._destroyed)).subscribe(()=>this._detach()),this._overlayRef.outsidePointerEvents().pipe(P(this._destroyed)).subscribe(()=>this._tooltipInstance?._handleBodyInteraction()),this._overlayRef.keydownEvents().pipe(P(this._destroyed)).subscribe(o=>{o.preventDefault(),o.stopPropagation(),this._ngZone.run(()=>this.hide(0))}),this._defaultOptions?.disableTooltipInteractivity&&this._overlayRef.addPanelClass(`${this._cssClassPrefix}-tooltip-panel-non-interactive`),this._dirSubscribed||(this._dirSubscribed=!0,this._dir.change.pipe(P(this._destroyed)).subscribe(()=>{this._overlayRef&&this._updatePosition(this._overlayRef)})),this._overlayRef}_detach(){this._overlayRef&&this._overlayRef.hasAttached()&&this._overlayRef.detach(),this._tooltipInstance=null}_updatePosition(e){let t=e.getConfig().positionStrategy,i=this._getOrigin(),a=this._getOverlayPosition();t.withPositions([this._addOffset(B(B({},i.main),a.main)),this._addOffset(B(B({},i.fallback),a.fallback))])}_addOffset(e){let t=Br,i=!this._dir||this._dir.value=="ltr";return e.originY==="top"?e.offsetY=-t:e.originY==="bottom"?e.offsetY=t:e.originX==="start"?e.offsetX=i?-t:t:e.originX==="end"&&(e.offsetX=i?t:-t),e}_getOrigin(){let e=!this._dir||this._dir.value=="ltr",t=this.position,i;t=="above"||t=="below"?i={originX:"center",originY:t=="above"?"top":"bottom"}:t=="before"||t=="left"&&e||t=="right"&&!e?i={originX:"start",originY:"center"}:(t=="after"||t=="right"&&e||t=="left"&&!e)&&(i={originX:"end",originY:"center"});let{x:a,y:o}=this._invertPosition(i.originX,i.originY);return{main:i,fallback:{originX:a,originY:o}}}_getOverlayPosition(){let e=!this._dir||this._dir.value=="ltr",t=this.position,i;t=="above"?i={overlayX:"center",overlayY:"bottom"}:t=="below"?i={overlayX:"center",overlayY:"top"}:t=="before"||t=="left"&&e||t=="right"&&!e?i={overlayX:"end",overlayY:"center"}:(t=="after"||t=="right"&&e||t=="left"&&!e)&&(i={overlayX:"start",overlayY:"center"});let{x:a,y:o}=this._invertPosition(i.overlayX,i.overlayY);return{main:i,fallback:{overlayX:a,overlayY:o}}}_updateTooltipMessage(){this._tooltipInstance&&(this._tooltipInstance.message=this.message,this._tooltipInstance._markForCheck(),we(()=>{this._tooltipInstance&&this._overlayRef.updatePosition()},{injector:this._injector}))}_setTooltipClass(e){this._tooltipInstance&&(this._tooltipInstance.tooltipClass=e instanceof Set?Array.from(e):e,this._tooltipInstance._markForCheck())}_invertPosition(e,t){return this.position==="above"||this.position==="below"?t==="top"?t="bottom":t==="bottom"&&(t="top"):e==="end"?e="start":e==="start"&&(e="end"),{x:e,y:t}}_updateCurrentPositionClass(e){let{overlayY:t,originX:i,originY:a}=e,o;if(t==="center"?this._dir&&this._dir.value==="rtl"?o=i==="end"?"left":"right":o=i==="start"?"left":"right":o=t==="bottom"&&a==="top"?"above":"below",o!==this._currentPosition){let m=this._overlayRef;if(m){let D=`${this._cssClassPrefix}-${Ba}-`;m.removePanelClass(D+this._currentPosition),m.addPanelClass(D+o)}this._currentPosition=o}}_setupPointerEnterEventsIfNeeded(){this._disabled||!this.message||!this._viewInitialized||this._eventCleanups.length||(this._isTouchPlatform()?this.touchGestures!=="off"&&(this._disableNativeGesturesIfNecessary(),this._addListener("touchstart",e=>{let t=e.targetTouches?.[0],i=t?{x:t.clientX,y:t.clientY}:void 0;this._setupPointerExitEventsIfNeeded(),this._touchstartTimeout&&clearTimeout(this._touchstartTimeout);let a=500;this._touchstartTimeout=setTimeout(()=>{this._touchstartTimeout=null,this.show(void 0,i)},this._defaultOptions?.touchLongPressShowDelay??a)})):this._addListener("mouseenter",e=>{this._setupPointerExitEventsIfNeeded();let t;e.x!==void 0&&e.y!==void 0&&(t=e),this.show(void 0,t)}))}_setupPointerExitEventsIfNeeded(){if(!this._pointerExitEventsInitialized){if(this._pointerExitEventsInitialized=!0,!this._isTouchPlatform())this._addListener("mouseleave",e=>{let t=e.relatedTarget;(!t||!this._overlayRef?.overlayElement.contains(t))&&this.hide()}),this._addListener("wheel",e=>{if(this._isTooltipVisible()){let t=this._document.elementFromPoint(e.clientX,e.clientY),i=this._elementRef.nativeElement;t!==i&&!i.contains(t)&&this.hide()}});else if(this.touchGestures!=="off"){this._disableNativeGesturesIfNecessary();let e=()=>{this._touchstartTimeout&&clearTimeout(this._touchstartTimeout),this.hide(this._defaultOptions?.touchendHideDelay)};this._addListener("touchend",e),this._addListener("touchcancel",e)}}}_addListener(e,t){this._eventCleanups.push(this._renderer.listen(this._elementRef.nativeElement,e,t,Lr))}_isTouchPlatform(){let e=this._defaultOptions?.detectHoverCapability;return typeof e=="function"?!e():this._platform.IOS||this._platform.ANDROID?!0:this._platform.isBrowser?!!e&&this._mediaMatcher.matchMedia("(any-hover: none)").matches:!1}_disableNativeGesturesIfNecessary(){let e=this.touchGestures;if(e!=="off"){let t=this._elementRef.nativeElement,i=t.style;(e==="on"||t.nodeName!=="INPUT"&&t.nodeName!=="TEXTAREA")&&(i.userSelect=i.msUserSelect=i.webkitUserSelect=i.MozUserSelect="none"),(e==="on"||!t.draggable)&&(i.webkitUserDrag="none"),i.touchAction="none",i.webkitTapHighlightColor="transparent"}}_syncAriaDescription(e){this._ariaDescriptionPending||(this._ariaDescriptionPending=!0,this._ariaDescriber.removeDescription(this._elementRef.nativeElement,e,"tooltip"),this._isDestroyed||we({write:()=>{this._ariaDescriptionPending=!1,this.message&&!this.disabled&&this._ariaDescriber.describe(this._elementRef.nativeElement,this.message,"tooltip")}},{injector:this._injector}))}_overlayEventPredicate=e=>e.type==="keydown"?this._isTooltipVisible()&&e.keyCode===27&&!re(e):!0;static \u0275fac=function(t){return new(t||n)};static \u0275dir=F({type:n,selectors:[["","matTooltip",""]],hostAttrs:[1,"mat-mdc-tooltip-trigger"],hostVars:2,hostBindings:function(t,i){t&2&&A("mat-mdc-tooltip-disabled",i.disabled)},inputs:{position:[0,"matTooltipPosition","position"],positionAtOrigin:[0,"matTooltipPositionAtOrigin","positionAtOrigin"],disabled:[0,"matTooltipDisabled","disabled"],showDelay:[0,"matTooltipShowDelay","showDelay"],hideDelay:[0,"matTooltipHideDelay","hideDelay"],touchGestures:[0,"matTooltipTouchGestures","touchGestures"],message:[0,"matTooltip","message"],tooltipClass:[0,"matTooltipClass","tooltipClass"]},exportAs:["matTooltip"]})}return n})(),Yr=(()=>{class n{_changeDetectorRef=s(z);_elementRef=s(R);_isMultiline=!1;message;tooltipClass;_showTimeoutId;_hideTimeoutId;_triggerElement;_mouseLeaveHideDelay;_animationsDisabled=oe();_tooltip;_closeOnInteraction=!1;_isVisible=!1;_onHide=new O;_showAnimation="mat-mdc-tooltip-show";_hideAnimation="mat-mdc-tooltip-hide";constructor(){}show(e){this._hideTimeoutId!=null&&clearTimeout(this._hideTimeoutId),this._showTimeoutId=setTimeout(()=>{this._toggleVisibility(!0),this._showTimeoutId=void 0},e)}hide(e){this._showTimeoutId!=null&&clearTimeout(this._showTimeoutId),this._hideTimeoutId=setTimeout(()=>{this._toggleVisibility(!1),this._hideTimeoutId=void 0},e)}afterHidden(){return this._onHide}isVisible(){return this._isVisible}ngOnDestroy(){this._cancelPendingAnimations(),this._onHide.complete(),this._triggerElement=null}_handleBodyInteraction(){this._closeOnInteraction&&this.hide(0)}_markForCheck(){this._changeDetectorRef.markForCheck()}_handleMouseLeave({relatedTarget:e}){(!e||!this._triggerElement.contains(e))&&(this.isVisible()?this.hide(this._mouseLeaveHideDelay):this._finalizeAnimation(!1))}_onShow(){this._isMultiline=this._isTooltipMultiline(),this._markForCheck()}_isTooltipMultiline(){let e=this._elementRef.nativeElement.getBoundingClientRect();return e.height>zr&&e.width>=Hr}_handleAnimationEnd({animationName:e}){(e===this._showAnimation||e===this._hideAnimation)&&this._finalizeAnimation(e===this._showAnimation)}_cancelPendingAnimations(){this._showTimeoutId!=null&&clearTimeout(this._showTimeoutId),this._hideTimeoutId!=null&&clearTimeout(this._hideTimeoutId),this._showTimeoutId=this._hideTimeoutId=void 0}_finalizeAnimation(e){e?this._closeOnInteraction=!0:this.isVisible()||this._onHide.next()}_toggleVisibility(e){let t=this._tooltip.nativeElement,i=this._showAnimation,a=this._hideAnimation;if(t.classList.remove(e?a:i),t.classList.add(e?i:a),this._isVisible!==e&&(this._isVisible=e,this._changeDetectorRef.markForCheck()),e&&!this._animationsDisabled&&typeof getComputedStyle=="function"){let o=getComputedStyle(t);(o.getPropertyValue("animation-duration")==="0s"||o.getPropertyValue("animation-name")==="none")&&(this._animationsDisabled=!0)}e&&this._onShow(),this._animationsDisabled&&(t.classList.add("_mat-animation-noopable"),this._finalizeAnimation(e))}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=k({type:n,selectors:[["mat-tooltip-component"]],viewQuery:function(t,i){if(t&1&&G(Fr,7),t&2){let a;C(a=w())&&(i._tooltip=a.first)}},hostAttrs:["aria-hidden","true"],hostBindings:function(t,i){t&1&&_("mouseleave",function(o){return i._handleMouseLeave(o)})},decls:4,vars:5,consts:[["tooltip",""],[1,"mdc-tooltip","mat-mdc-tooltip",3,"animationend"],[1,"mat-mdc-tooltip-surface","mdc-tooltip__surface"]],template:function(t,i){t&1&&(W(0,"div",1,0),zt("animationend",function(o){return i._handleAnimationEnd(o)}),W(2,"div",2),p(3),ne()()),t&2&&(X(i.tooltipClass),A("mdc-tooltip--multiline",i._isMultiline),d(3),y(i.message))},styles:[`.mat-mdc-tooltip {
  position: relative;
  transform: scale(0);
  display: inline-flex;
}
.mat-mdc-tooltip::before {
  content: "";
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -1;
  position: absolute;
}
.mat-mdc-tooltip-panel-below .mat-mdc-tooltip::before {
  top: -8px;
}
.mat-mdc-tooltip-panel-above .mat-mdc-tooltip::before {
  bottom: -8px;
}
.mat-mdc-tooltip-panel-right .mat-mdc-tooltip::before {
  left: -8px;
}
.mat-mdc-tooltip-panel-left .mat-mdc-tooltip::before {
  right: -8px;
}
.mat-mdc-tooltip._mat-animation-noopable {
  animation: none;
  transform: scale(1);
}

.mat-mdc-tooltip-surface {
  word-break: normal;
  overflow-wrap: anywhere;
  padding: 4px 8px;
  min-width: 40px;
  max-width: 200px;
  min-height: 24px;
  max-height: 40vh;
  box-sizing: border-box;
  overflow: hidden;
  text-align: center;
  will-change: transform, opacity;
  background-color: var(--mat-tooltip-container-color, var(--mat-sys-inverse-surface));
  color: var(--mat-tooltip-supporting-text-color, var(--mat-sys-inverse-on-surface));
  border-radius: var(--mat-tooltip-container-shape, var(--mat-sys-corner-extra-small));
  font-family: var(--mat-tooltip-supporting-text-font, var(--mat-sys-body-small-font));
  font-size: var(--mat-tooltip-supporting-text-size, var(--mat-sys-body-small-size));
  font-weight: var(--mat-tooltip-supporting-text-weight, var(--mat-sys-body-small-weight));
  line-height: var(--mat-tooltip-supporting-text-line-height, var(--mat-sys-body-small-line-height));
  letter-spacing: var(--mat-tooltip-supporting-text-tracking, var(--mat-sys-body-small-tracking));
}
.mat-mdc-tooltip-surface::before {
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  border: 1px solid transparent;
  border-radius: inherit;
  content: "";
  pointer-events: none;
}
.mdc-tooltip--multiline .mat-mdc-tooltip-surface {
  text-align: left;
}
[dir=rtl] .mdc-tooltip--multiline .mat-mdc-tooltip-surface {
  text-align: right;
}

.mat-mdc-tooltip-panel {
  line-height: normal;
}
.mat-mdc-tooltip-panel.mat-mdc-tooltip-panel-non-interactive {
  pointer-events: none;
}

@keyframes mat-mdc-tooltip-show {
  0% {
    opacity: 0;
    transform: scale(0.8);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes mat-mdc-tooltip-hide {
  0% {
    opacity: 1;
    transform: scale(1);
  }
  100% {
    opacity: 0;
    transform: scale(0.8);
  }
}
.mat-mdc-tooltip-show {
  animation: mat-mdc-tooltip-show 150ms cubic-bezier(0, 0, 0.2, 1) forwards;
}

.mat-mdc-tooltip-hide {
  animation: mat-mdc-tooltip-hide 75ms cubic-bezier(0.4, 0, 1, 1) forwards;
}
`],encapsulation:2,changeDetection:0})}return n})();var jr=["mat-calendar-body",""];function Gr(n,r){return this._trackRow(r)}var qa=(n,r)=>r.id;function Ur(n,r){if(n&1&&(W(0,"tr",0)(1,"td",3),p(2),ne()()),n&2){let e=h();d(),ct("padding-top",e._cellPadding)("padding-bottom",e._cellPadding),S("colspan",e.numCols),d(),U(" ",e.label," ")}}function Qr(n,r){if(n&1&&(W(0,"td",3),p(1),ne()),n&2){let e=h(2);ct("padding-top",e._cellPadding)("padding-bottom",e._cellPadding),S("colspan",e._firstRowOffset),d(),U(" ",e._firstRowOffset>=e.labelMinRequiredCells?e.label:""," ")}}function qr(n,r){if(n&1){let e=V();W(0,"td",6)(1,"button",7),zt("click",function(i){let a=x(e).$implicit,o=h(2);return M(o._cellClicked(a,i))})("focus",function(i){let a=x(e).$implicit,o=h(2);return M(o._emitActiveDateChange(a,i))}),W(2,"span",8),p(3),ne(),Rn(4,"span",9),ne()()}if(n&2){let e=r.$implicit,t=r.$index,i=h().$index,a=h();ct("width",a._cellWidth)("padding-top",a._cellPadding)("padding-bottom",a._cellPadding),S("data-mat-row",i)("data-mat-col",t),d(),X(e.cssClasses),A("mat-calendar-body-disabled",!e.enabled)("mat-calendar-body-active",a._isActiveCell(i,t))("mat-calendar-body-range-start",a._isRangeStart(e.compareValue))("mat-calendar-body-range-end",a._isRangeEnd(e.compareValue))("mat-calendar-body-in-range",a._isInRange(e.compareValue))("mat-calendar-body-comparison-bridge-start",a._isComparisonBridgeStart(e.compareValue,i,t))("mat-calendar-body-comparison-bridge-end",a._isComparisonBridgeEnd(e.compareValue,i,t))("mat-calendar-body-comparison-start",a._isComparisonStart(e.compareValue))("mat-calendar-body-comparison-end",a._isComparisonEnd(e.compareValue))("mat-calendar-body-in-comparison-range",a._isInComparisonRange(e.compareValue))("mat-calendar-body-preview-start",a._isPreviewStart(e.compareValue))("mat-calendar-body-preview-end",a._isPreviewEnd(e.compareValue))("mat-calendar-body-in-preview",a._isInPreview(e.compareValue)),q("tabIndex",a._isActiveCell(i,t)?0:-1),S("aria-label",e.ariaLabel)("aria-disabled",!e.enabled||null)("aria-pressed",a._isSelected(e.compareValue))("aria-current",a.todayValue===e.compareValue?"date":null)("aria-describedby",a._getDescribedby(e.compareValue)),d(),A("mat-calendar-body-selected",a._isSelected(e.compareValue))("mat-calendar-body-comparison-identical",a._isComparisonIdentical(e.compareValue))("mat-calendar-body-today",a.todayValue===e.compareValue),d(),U(" ",e.displayValue," ")}}function $r(n,r){if(n&1&&(W(0,"tr",1),f(1,Qr,2,6,"td",4),H(2,qr,5,49,"td",5,qa),ne()),n&2){let e=r.$implicit,t=r.$index,i=h();d(),v(t===0&&i._firstRowOffset?1:-1),d(),Y(e)}}function Kr(n,r){if(n&1&&(l(0,"th",2)(1,"span",6),p(2),c(),l(3,"span",3),p(4),c()()),n&2){let e=r.$implicit;d(2),y(e.long),d(2),y(e.narrow)}}var Wr=["*"];function Xr(n,r){}function Zr(n,r){if(n&1){let e=V();l(0,"mat-month-view",4),jt("activeDateChange",function(i){x(e);let a=h();return Yt(a.activeDate,i)||(a.activeDate=i),M(i)}),_("_userSelection",function(i){x(e);let a=h();return M(a._dateSelected(i))})("dragStarted",function(i){x(e);let a=h();return M(a._dragStarted(i))})("dragEnded",function(i){x(e);let a=h();return M(a._dragEnded(i))}),c()}if(n&2){let e=h();Ht("activeDate",e.activeDate),u("selected",e.selected)("dateFilter",e.dateFilter)("maxDate",e.maxDate)("minDate",e.minDate)("dateClass",e.dateClass)("comparisonStart",e.comparisonStart)("comparisonEnd",e.comparisonEnd)("startDateAccessibleName",e.startDateAccessibleName)("endDateAccessibleName",e.endDateAccessibleName)("activeDrag",e._activeDrag)}}function Jr(n,r){if(n&1){let e=V();l(0,"mat-year-view",5),jt("activeDateChange",function(i){x(e);let a=h();return Yt(a.activeDate,i)||(a.activeDate=i),M(i)}),_("monthSelected",function(i){x(e);let a=h();return M(a._monthSelectedInYearView(i))})("selectedChange",function(i){x(e);let a=h();return M(a._goToDateInView(i,"month"))}),c()}if(n&2){let e=h();Ht("activeDate",e.activeDate),u("selected",e.selected)("dateFilter",e.dateFilter)("maxDate",e.maxDate)("minDate",e.minDate)("dateClass",e.dateClass)}}function eo(n,r){if(n&1){let e=V();l(0,"mat-multi-year-view",6),jt("activeDateChange",function(i){x(e);let a=h();return Yt(a.activeDate,i)||(a.activeDate=i),M(i)}),_("yearSelected",function(i){x(e);let a=h();return M(a._yearSelectedInMultiYearView(i))})("selectedChange",function(i){x(e);let a=h();return M(a._goToDateInView(i,"year"))}),c()}if(n&2){let e=h();Ht("activeDate",e.activeDate),u("selected",e.selected)("dateFilter",e.dateFilter)("maxDate",e.maxDate)("minDate",e.minDate)("dateClass",e.dateClass)}}function to(n,r){}var io=["button"],no=[[["","matDatepickerToggleIcon",""]]],ao=["[matDatepickerToggleIcon]"];function ro(n,r){n&1&&(_e(),l(0,"svg",2),E(1,"path",3),c())}var wt=(()=>{class n{changes=new O;calendarLabel="Calendar";openCalendarLabel="Open calendar";closeCalendarLabel="Close calendar";prevMonthLabel="Previous month";nextMonthLabel="Next month";prevYearLabel="Previous year";nextYearLabel="Next year";prevMultiYearLabel="Previous 24 years";nextMultiYearLabel="Next 24 years";switchToMonthViewLabel="Choose date";switchToMultiYearViewLabel="Choose month and year";startDateLabel="Start date";endDateLabel="End date";comparisonDateLabel="Comparison range";formatYearRange(e,t){return`${e} \u2013 ${t}`}formatYearRangeLabel(e,t){return`${e} to ${t}`}static \u0275fac=function(t){return new(t||n)};static \u0275prov=se({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),oo=0,Rt=class{value;displayValue;ariaLabel;enabled;compareValue;rawValue;id=oo++;cssClasses;constructor(r,e,t,i,a,o=r,m){this.value=r,this.displayValue=e,this.ariaLabel=t,this.enabled=i,this.compareValue=o,this.rawValue=m,this.cssClasses=a instanceof Set?Array.from(a):a}},so={passive:!1,capture:!0},_i={passive:!0,capture:!0},Ha={passive:!0},Ct=(()=>{class n{_elementRef=s(R);_ngZone=s(Ce);_platform=s(He);_intl=s(wt);_eventCleanups;_skipNextFocus=!1;_focusActiveCellAfterViewChecked=!1;label;rows;todayValue;startValue;endValue;labelMinRequiredCells;numCols=7;activeCell=0;ngAfterViewChecked(){this._focusActiveCellAfterViewChecked&&(this._focusActiveCell(),this._focusActiveCellAfterViewChecked=!1)}isRange=!1;cellAspectRatio=1;comparisonStart=null;comparisonEnd=null;previewStart=null;previewEnd=null;startDateAccessibleName=null;endDateAccessibleName=null;selectedValueChange=new b;previewChange=new b;activeDateChange=new b;dragStarted=new b;dragEnded=new b;_firstRowOffset;_cellPadding;_cellWidth;_startDateLabelId;_endDateLabelId;_comparisonStartDateLabelId;_comparisonEndDateLabelId;_didDragSinceMouseDown=!1;_injector=s(le);comparisonDateAccessibleName=this._intl.comparisonDateLabel;_trackRow=e=>e;constructor(){let e=s(Pe),t=s(ce);this._startDateLabelId=t.getId("mat-calendar-body-start-"),this._endDateLabelId=t.getId("mat-calendar-body-end-"),this._comparisonStartDateLabelId=t.getId("mat-calendar-body-comparison-start-"),this._comparisonEndDateLabelId=t.getId("mat-calendar-body-comparison-end-"),s(fe).load(Ve),this._ngZone.runOutsideAngular(()=>{let i=this._elementRef.nativeElement,a=[e.listen(i,"touchmove",this._touchmoveHandler,so),e.listen(i,"mouseenter",this._enterHandler,_i),e.listen(i,"focus",this._enterHandler,_i),e.listen(i,"mouseleave",this._leaveHandler,_i),e.listen(i,"blur",this._leaveHandler,_i),e.listen(i,"mousedown",this._mousedownHandler,Ha),e.listen(i,"touchstart",this._mousedownHandler,Ha)];this._platform.isBrowser&&a.push(e.listen("window","mouseup",this._mouseupHandler),e.listen("window","touchend",this._touchendHandler)),this._eventCleanups=a})}_cellClicked(e,t){this._didDragSinceMouseDown||e.enabled&&this.selectedValueChange.emit({value:e.value,event:t})}_emitActiveDateChange(e,t){e.enabled&&this.activeDateChange.emit({value:e.value,event:t})}_isSelected(e){return this.startValue===e||this.endValue===e}ngOnChanges(e){let t=e.numCols,{rows:i,numCols:a}=this;(e.rows||t)&&(this._firstRowOffset=i&&i.length&&i[0].length?a-i[0].length:0),(e.cellAspectRatio||t||!this._cellPadding)&&(this._cellPadding=`${50*this.cellAspectRatio/a}%`),(t||!this._cellWidth)&&(this._cellWidth=`${100/a}%`)}ngOnDestroy(){this._eventCleanups.forEach(e=>e())}_isActiveCell(e,t){let i=e*this.numCols+t;return e&&(i-=this._firstRowOffset),i==this.activeCell}_focusActiveCell(e=!0){we(()=>{setTimeout(()=>{let t=this._elementRef.nativeElement.querySelector(".mat-calendar-body-active");t&&(e||(this._skipNextFocus=!0),t.focus())})},{injector:this._injector})}_scheduleFocusActiveCellAfterViewChecked(){this._focusActiveCellAfterViewChecked=!0}_isRangeStart(e){return Wi(e,this.startValue,this.endValue)}_isRangeEnd(e){return Xi(e,this.startValue,this.endValue)}_isInRange(e){return Zi(e,this.startValue,this.endValue,this.isRange)}_isComparisonStart(e){return Wi(e,this.comparisonStart,this.comparisonEnd)}_isComparisonBridgeStart(e,t,i){if(!this._isComparisonStart(e)||this._isRangeStart(e)||!this._isInRange(e))return!1;let a=this.rows[t][i-1];if(!a){let o=this.rows[t-1];a=o&&o[o.length-1]}return a&&!this._isRangeEnd(a.compareValue)}_isComparisonBridgeEnd(e,t,i){if(!this._isComparisonEnd(e)||this._isRangeEnd(e)||!this._isInRange(e))return!1;let a=this.rows[t][i+1];if(!a){let o=this.rows[t+1];a=o&&o[0]}return a&&!this._isRangeStart(a.compareValue)}_isComparisonEnd(e){return Xi(e,this.comparisonStart,this.comparisonEnd)}_isInComparisonRange(e){return Zi(e,this.comparisonStart,this.comparisonEnd,this.isRange)}_isComparisonIdentical(e){return this.comparisonStart===this.comparisonEnd&&e===this.comparisonStart}_isPreviewStart(e){return Wi(e,this.previewStart,this.previewEnd)}_isPreviewEnd(e){return Xi(e,this.previewStart,this.previewEnd)}_isInPreview(e){return Zi(e,this.previewStart,this.previewEnd,this.isRange)}_getDescribedby(e){if(!this.isRange)return null;if(this.startValue===e&&this.endValue===e)return`${this._startDateLabelId} ${this._endDateLabelId}`;if(this.startValue===e)return this._startDateLabelId;if(this.endValue===e)return this._endDateLabelId;if(this.comparisonStart!==null&&this.comparisonEnd!==null){if(e===this.comparisonStart&&e===this.comparisonEnd)return`${this._comparisonStartDateLabelId} ${this._comparisonEndDateLabelId}`;if(e===this.comparisonStart)return this._comparisonStartDateLabelId;if(e===this.comparisonEnd)return this._comparisonEndDateLabelId}return null}_enterHandler=e=>{if(this._skipNextFocus&&e.type==="focus"){this._skipNextFocus=!1;return}if(e.target&&this.isRange){let t=this._getCellFromElement(e.target);t&&this._ngZone.run(()=>this.previewChange.emit({value:t.enabled?t:null,event:e}))}};_touchmoveHandler=e=>{if(!this.isRange)return;let t=Ya(e),i=t?this._getCellFromElement(t):null;t!==e.target&&(this._didDragSinceMouseDown=!0),Ki(e.target)&&e.preventDefault(),this._ngZone.run(()=>this.previewChange.emit({value:i?.enabled?i:null,event:e}))};_leaveHandler=e=>{this.previewEnd!==null&&this.isRange&&(e.type!=="blur"&&(this._didDragSinceMouseDown=!0),e.target&&this._getCellFromElement(e.target)&&!(e.relatedTarget&&this._getCellFromElement(e.relatedTarget))&&this._ngZone.run(()=>this.previewChange.emit({value:null,event:e})))};_mousedownHandler=e=>{if(!this.isRange)return;this._didDragSinceMouseDown=!1;let t=e.target&&this._getCellFromElement(e.target);!t||!this._isInRange(t.compareValue)||this._ngZone.run(()=>{this.dragStarted.emit({value:t.rawValue,event:e})})};_mouseupHandler=e=>{if(!this.isRange)return;let t=Ki(e.target);if(!t){this._ngZone.run(()=>{this.dragEnded.emit({value:null,event:e})});return}t.closest(".mat-calendar-body")===this._elementRef.nativeElement&&this._ngZone.run(()=>{let i=this._getCellFromElement(t);this.dragEnded.emit({value:i?.rawValue??null,event:e})})};_touchendHandler=e=>{let t=Ya(e);t&&this._mouseupHandler({target:t})};_getCellFromElement(e){let t=Ki(e);if(t){let i=t.getAttribute("data-mat-row"),a=t.getAttribute("data-mat-col");if(i&&a)return this.rows[parseInt(i)]?.[parseInt(a)]||null}return null}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=k({type:n,selectors:[["","mat-calendar-body",""]],hostAttrs:[1,"mat-calendar-body"],inputs:{label:"label",rows:"rows",todayValue:"todayValue",startValue:"startValue",endValue:"endValue",labelMinRequiredCells:"labelMinRequiredCells",numCols:"numCols",activeCell:"activeCell",isRange:"isRange",cellAspectRatio:"cellAspectRatio",comparisonStart:"comparisonStart",comparisonEnd:"comparisonEnd",previewStart:"previewStart",previewEnd:"previewEnd",startDateAccessibleName:"startDateAccessibleName",endDateAccessibleName:"endDateAccessibleName"},outputs:{selectedValueChange:"selectedValueChange",previewChange:"previewChange",activeDateChange:"activeDateChange",dragStarted:"dragStarted",dragEnded:"dragEnded"},exportAs:["matCalendarBody"],features:[ie],attrs:jr,decls:11,vars:11,consts:[["aria-hidden","true"],["role","row"],[1,"mat-calendar-body-hidden-label",3,"id"],[1,"mat-calendar-body-label"],[1,"mat-calendar-body-label",3,"paddingTop","paddingBottom"],["role","gridcell",1,"mat-calendar-body-cell-container",3,"width","paddingTop","paddingBottom"],["role","gridcell",1,"mat-calendar-body-cell-container"],["type","button",1,"mat-calendar-body-cell",3,"click","focus","tabindex"],[1,"mat-calendar-body-cell-content","mat-focus-indicator"],["aria-hidden","true",1,"mat-calendar-body-cell-preview"]],template:function(t,i){t&1&&(f(0,Ur,3,6,"tr",0),H(1,$r,4,1,"tr",1,Gr,!0),W(3,"span",2),p(4),ne(),W(5,"span",2),p(6),ne(),W(7,"span",2),p(8),ne(),W(9,"span",2),p(10),ne()),t&2&&(v(i._firstRowOffset<i.labelMinRequiredCells?0:-1),d(),Y(i.rows),d(2),q("id",i._startDateLabelId),d(),U(" ",i.startDateAccessibleName,`
`),d(),q("id",i._endDateLabelId),d(),U(" ",i.endDateAccessibleName,`
`),d(),q("id",i._comparisonStartDateLabelId),d(),kt(" ",i.comparisonDateAccessibleName," ",i.startDateAccessibleName,`
`),d(),q("id",i._comparisonEndDateLabelId),d(),kt(" ",i.comparisonDateAccessibleName," ",i.endDateAccessibleName,`
`))},styles:[`.mat-calendar-body {
  min-width: 224px;
}

.mat-calendar-body-today:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical) {
  border-color: var(--mat-datepicker-calendar-date-today-outline-color, var(--mat-sys-primary));
}

.mat-calendar-body-label {
  height: 0;
  line-height: 0;
  text-align: start;
  padding-left: 4.7142857143%;
  padding-right: 4.7142857143%;
  font-size: var(--mat-datepicker-calendar-body-label-text-size, var(--mat-sys-title-small-size));
  font-weight: var(--mat-datepicker-calendar-body-label-text-weight, var(--mat-sys-title-small-weight));
  color: var(--mat-datepicker-calendar-body-label-text-color, var(--mat-sys-on-surface));
}

.mat-calendar-body-hidden-label {
  display: none;
}

.mat-calendar-body-cell-container {
  position: relative;
  height: 0;
  line-height: 0;
}

.mat-calendar-body-cell {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: none;
  text-align: center;
  outline: none;
  margin: 0;
  font-family: var(--mat-datepicker-calendar-text-font, var(--mat-sys-body-medium-font));
  font-size: var(--mat-datepicker-calendar-text-size, var(--mat-sys-body-medium-size));
  -webkit-user-select: none;
  user-select: none;
  cursor: pointer;
  outline: none;
  border: none;
  -webkit-tap-highlight-color: transparent;
}
.mat-calendar-body-cell::-moz-focus-inner {
  border: 0;
}

.mat-calendar-body-cell::before,
.mat-calendar-body-cell::after,
.mat-calendar-body-cell-preview {
  content: "";
  position: absolute;
  top: 5%;
  left: 0;
  z-index: 0;
  box-sizing: border-box;
  display: block;
  height: 90%;
  width: 100%;
}

.mat-calendar-body-range-start:not(.mat-calendar-body-in-comparison-range)::before,
.mat-calendar-body-range-start::after,
.mat-calendar-body-comparison-start:not(.mat-calendar-body-comparison-bridge-start)::before,
.mat-calendar-body-comparison-start::after,
.mat-calendar-body-preview-start .mat-calendar-body-cell-preview {
  left: 5%;
  width: 95%;
  border-top-left-radius: 999px;
  border-bottom-left-radius: 999px;
}
[dir=rtl] .mat-calendar-body-range-start:not(.mat-calendar-body-in-comparison-range)::before,
[dir=rtl] .mat-calendar-body-range-start::after,
[dir=rtl] .mat-calendar-body-comparison-start:not(.mat-calendar-body-comparison-bridge-start)::before,
[dir=rtl] .mat-calendar-body-comparison-start::after,
[dir=rtl] .mat-calendar-body-preview-start .mat-calendar-body-cell-preview {
  left: 0;
  border-radius: 0;
  border-top-right-radius: 999px;
  border-bottom-right-radius: 999px;
}

.mat-calendar-body-range-end:not(.mat-calendar-body-in-comparison-range)::before,
.mat-calendar-body-range-end::after,
.mat-calendar-body-comparison-end:not(.mat-calendar-body-comparison-bridge-end)::before,
.mat-calendar-body-comparison-end::after,
.mat-calendar-body-preview-end .mat-calendar-body-cell-preview {
  width: 95%;
  border-top-right-radius: 999px;
  border-bottom-right-radius: 999px;
}
[dir=rtl] .mat-calendar-body-range-end:not(.mat-calendar-body-in-comparison-range)::before,
[dir=rtl] .mat-calendar-body-range-end::after,
[dir=rtl] .mat-calendar-body-comparison-end:not(.mat-calendar-body-comparison-bridge-end)::before,
[dir=rtl] .mat-calendar-body-comparison-end::after,
[dir=rtl] .mat-calendar-body-preview-end .mat-calendar-body-cell-preview {
  left: 5%;
  border-radius: 0;
  border-top-left-radius: 999px;
  border-bottom-left-radius: 999px;
}

[dir=rtl] .mat-calendar-body-comparison-bridge-start.mat-calendar-body-range-end::after,
[dir=rtl] .mat-calendar-body-comparison-bridge-end.mat-calendar-body-range-start::after {
  width: 95%;
  border-top-right-radius: 999px;
  border-bottom-right-radius: 999px;
}

.mat-calendar-body-comparison-start.mat-calendar-body-range-end::after, [dir=rtl] .mat-calendar-body-comparison-start.mat-calendar-body-range-end::after,
.mat-calendar-body-comparison-end.mat-calendar-body-range-start::after,
[dir=rtl] .mat-calendar-body-comparison-end.mat-calendar-body-range-start::after {
  width: 90%;
}

.mat-calendar-body-in-preview {
  color: var(--mat-datepicker-calendar-date-preview-state-outline-color, var(--mat-sys-primary));
}
.mat-calendar-body-in-preview .mat-calendar-body-cell-preview {
  border-top: dashed 1px;
  border-bottom: dashed 1px;
}

.mat-calendar-body-preview-start .mat-calendar-body-cell-preview {
  border-left: dashed 1px;
}
[dir=rtl] .mat-calendar-body-preview-start .mat-calendar-body-cell-preview {
  border-left: 0;
  border-right: dashed 1px;
}

.mat-calendar-body-preview-end .mat-calendar-body-cell-preview {
  border-right: dashed 1px;
}
[dir=rtl] .mat-calendar-body-preview-end .mat-calendar-body-cell-preview {
  border-right: 0;
  border-left: dashed 1px;
}

.mat-calendar-body-disabled {
  cursor: default;
}
.mat-calendar-body-disabled > .mat-calendar-body-cell-content:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical) {
  color: var(--mat-datepicker-calendar-date-disabled-state-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-calendar-body-disabled > .mat-calendar-body-today:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical) {
  border-color: var(--mat-datepicker-calendar-date-today-disabled-state-outline-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
@media (forced-colors: active) {
  .mat-calendar-body-disabled {
    opacity: 0.5;
  }
}

.mat-calendar-body-cell-content {
  top: 5%;
  left: 5%;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  width: 90%;
  height: 90%;
  line-height: 1;
  border-width: 1px;
  border-style: solid;
  border-radius: 999px;
  color: var(--mat-datepicker-calendar-date-text-color, var(--mat-sys-on-surface));
  border-color: var(--mat-datepicker-calendar-date-outline-color, transparent);
}
.mat-calendar-body-cell-content.mat-focus-indicator {
  position: absolute;
}
@media (forced-colors: active) {
  .mat-calendar-body-cell-content {
    border: none;
  }
}

.cdk-keyboard-focused .mat-calendar-body-active > .mat-calendar-body-cell-content:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical), .cdk-program-focused .mat-calendar-body-active > .mat-calendar-body-cell-content:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical) {
  background-color: var(--mat-datepicker-calendar-date-focus-state-background-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-focus-state-layer-opacity) * 100%), transparent));
}

@media (hover: hover) {
  .mat-calendar-body-cell:not(.mat-calendar-body-disabled):hover > .mat-calendar-body-cell-content:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical) {
    background-color: var(--mat-datepicker-calendar-date-hover-state-background-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-hover-state-layer-opacity) * 100%), transparent));
  }
}
.mat-calendar-body-selected {
  background-color: var(--mat-datepicker-calendar-date-selected-state-background-color, var(--mat-sys-primary));
  color: var(--mat-datepicker-calendar-date-selected-state-text-color, var(--mat-sys-on-primary));
}
.mat-calendar-body-disabled > .mat-calendar-body-selected {
  background-color: var(--mat-datepicker-calendar-date-selected-disabled-state-background-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-calendar-body-selected.mat-calendar-body-today {
  box-shadow: inset 0 0 0 1px var(--mat-datepicker-calendar-date-today-selected-state-outline-color, var(--mat-sys-primary));
}

.mat-calendar-body-in-range::before {
  background: var(--mat-datepicker-calendar-date-in-range-state-background-color, var(--mat-sys-primary-container));
}

.mat-calendar-body-comparison-identical,
.mat-calendar-body-in-comparison-range::before {
  background: var(--mat-datepicker-calendar-date-in-comparison-range-state-background-color, var(--mat-sys-tertiary-container));
}

.mat-calendar-body-comparison-identical,
.mat-calendar-body-in-comparison-range::before {
  background: var(--mat-datepicker-calendar-date-in-comparison-range-state-background-color, var(--mat-sys-tertiary-container));
}

.mat-calendar-body-comparison-bridge-start::before,
[dir=rtl] .mat-calendar-body-comparison-bridge-end::before {
  background: linear-gradient(to right, var(--mat-datepicker-calendar-date-in-range-state-background-color, var(--mat-sys-primary-container)) 50%, var(--mat-datepicker-calendar-date-in-comparison-range-state-background-color, var(--mat-sys-tertiary-container)) 50%);
}

.mat-calendar-body-comparison-bridge-end::before,
[dir=rtl] .mat-calendar-body-comparison-bridge-start::before {
  background: linear-gradient(to left, var(--mat-datepicker-calendar-date-in-range-state-background-color, var(--mat-sys-primary-container)) 50%, var(--mat-datepicker-calendar-date-in-comparison-range-state-background-color, var(--mat-sys-tertiary-container)) 50%);
}

.mat-calendar-body-in-range > .mat-calendar-body-comparison-identical,
.mat-calendar-body-in-comparison-range.mat-calendar-body-in-range::after {
  background: var(--mat-datepicker-calendar-date-in-overlap-range-state-background-color, var(--mat-sys-secondary-container));
}

.mat-calendar-body-comparison-identical.mat-calendar-body-selected,
.mat-calendar-body-in-comparison-range > .mat-calendar-body-selected {
  background: var(--mat-datepicker-calendar-date-in-overlap-range-selected-state-background-color, var(--mat-sys-secondary));
}

@media (forced-colors: active) {
  .mat-datepicker-popup:not(:empty),
  .mat-calendar-body-cell:not(.mat-calendar-body-in-range) .mat-calendar-body-selected {
    outline: solid 1px;
  }
  .mat-calendar-body-today {
    outline: dotted 1px;
  }
  .mat-calendar-body-cell::before,
  .mat-calendar-body-cell::after,
  .mat-calendar-body-selected {
    background: none;
  }
  .mat-calendar-body-in-range::before,
  .mat-calendar-body-comparison-bridge-start::before,
  .mat-calendar-body-comparison-bridge-end::before {
    border-top: solid 1px;
    border-bottom: solid 1px;
  }
  .mat-calendar-body-range-start::before {
    border-left: solid 1px;
  }
  [dir=rtl] .mat-calendar-body-range-start::before {
    border-left: 0;
    border-right: solid 1px;
  }
  .mat-calendar-body-range-end::before {
    border-right: solid 1px;
  }
  [dir=rtl] .mat-calendar-body-range-end::before {
    border-right: 0;
    border-left: solid 1px;
  }
  .mat-calendar-body-in-comparison-range::before {
    border-top: dashed 1px;
    border-bottom: dashed 1px;
  }
  .mat-calendar-body-comparison-start::before {
    border-left: dashed 1px;
  }
  [dir=rtl] .mat-calendar-body-comparison-start::before {
    border-left: 0;
    border-right: dashed 1px;
  }
  .mat-calendar-body-comparison-end::before {
    border-right: dashed 1px;
  }
  [dir=rtl] .mat-calendar-body-comparison-end::before {
    border-right: 0;
    border-left: dashed 1px;
  }
}
`],encapsulation:2,changeDetection:0})}return n})();function $i(n){return n?.nodeName==="TD"}function Ki(n){let r;return $i(n)?r=n:$i(n.parentNode)?r=n.parentNode:$i(n.parentNode?.parentNode)&&(r=n.parentNode.parentNode),r?.getAttribute("data-mat-row")!=null?r:null}function Wi(n,r,e){return e!==null&&r!==e&&n<e&&n===r}function Xi(n,r,e){return r!==null&&r!==e&&n>=r&&n===e}function Zi(n,r,e,t){return t&&r!==null&&e!==null&&r!==e&&n>=r&&n<=e}function Ya(n){let r=n.changedTouches[0];return document.elementFromPoint(r.clientX,r.clientY)}var ye=class{start;end;_disableStructuralEquivalency;constructor(r,e){this.start=r,this.end=e}},Vt=(()=>{class n{selection;_adapter;_selectionChanged=new O;selectionChanged=this._selectionChanged;constructor(e,t){this.selection=e,this._adapter=t,this.selection=e}updateSelection(e,t){let i=this.selection;this.selection=e,this._selectionChanged.next({selection:e,source:t,oldValue:i})}ngOnDestroy(){this._selectionChanged.complete()}_isValidDateInstance(e){return this._adapter.isDateInstance(e)&&this._adapter.isValid(e)}static \u0275fac=function(t){Fn()};static \u0275prov=se({token:n,factory:n.\u0275fac})}return n})(),lo=(()=>{class n extends Vt{constructor(e){super(null,e)}add(e){super.updateSelection(e,this)}isValid(){return this.selection!=null&&this._isValidDateInstance(this.selection)}isComplete(){return this.selection!=null}clone(){let e=new n(this._adapter);return e.updateSelection(this.selection,this),e}static \u0275fac=function(t){return new(t||n)(Tn(ee))};static \u0275prov=se({token:n,factory:n.\u0275fac})}return n})();var $a={provide:Vt,useFactory:()=>s(Vt,{optional:!0,skipSelf:!0})||new lo(s(ee))};var Ka=new L("MAT_DATE_RANGE_SELECTION_STRATEGY");var Ji=7,co=0,ja=(()=>{class n{_changeDetectorRef=s(z);_dateFormats=s(Ue,{optional:!0});_dateAdapter=s(ee,{optional:!0});_dir=s(De,{optional:!0});_rangeStrategy=s(Ka,{optional:!0});_rerenderSubscription=he.EMPTY;_selectionKeyPressed=!1;get activeDate(){return this._activeDate}set activeDate(e){let t=this._activeDate,i=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))||this._dateAdapter.today();this._activeDate=this._dateAdapter.clampDate(i,this.minDate,this.maxDate),this._hasSameMonthAndYear(t,this._activeDate)||this._init()}_activeDate;get selected(){return this._selected}set selected(e){e instanceof ye?this._selected=e:this._selected=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e)),this._setRanges(this._selected)}_selected=null;get minDate(){return this._minDate}set minDate(e){this._minDate=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_minDate=null;get maxDate(){return this._maxDate}set maxDate(e){this._maxDate=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_maxDate=null;dateFilter;dateClass;comparisonStart=null;comparisonEnd=null;startDateAccessibleName=null;endDateAccessibleName=null;activeDrag=null;selectedChange=new b;_userSelection=new b;dragStarted=new b;dragEnded=new b;activeDateChange=new b;_matCalendarBody;_monthLabel=g("");_weeks=g([]);_firstWeekOffset=g(0);_rangeStart=g(null);_rangeEnd=g(null);_comparisonRangeStart=g(null);_comparisonRangeEnd=g(null);_previewStart=g(null);_previewEnd=g(null);_isRange=g(!1);_todayDate=g(null);_weekdays=g([]);constructor(){s(fe).load(ze),this._activeDate=this._dateAdapter.today()}ngAfterContentInit(){this._rerenderSubscription=this._dateAdapter.localeChanges.pipe(te(null)).subscribe(()=>this._init())}ngOnChanges(e){let t=e.comparisonStart||e.comparisonEnd;t&&!t.firstChange&&this._setRanges(this.selected),e.activeDrag&&!this.activeDrag&&this._clearPreview()}ngOnDestroy(){this._rerenderSubscription.unsubscribe()}_dateSelected(e){let t=e.value,i=this._getDateFromDayOfMonth(t),a,o;this._selected instanceof ye?(a=this._getDateInCurrentMonth(this._selected.start),o=this._getDateInCurrentMonth(this._selected.end)):a=o=this._getDateInCurrentMonth(this._selected),(a!==t||o!==t)&&this.selectedChange.emit(i),this._userSelection.emit({value:i,event:e.event}),this._clearPreview(),this._changeDetectorRef.markForCheck()}_updateActiveDate(e){let t=e.value,i=this._activeDate;this.activeDate=this._getDateFromDayOfMonth(t),this._dateAdapter.compareDate(i,this.activeDate)&&this.activeDateChange.emit(this._activeDate)}_handleCalendarBodyKeydown(e){let t=this._activeDate,i=this._isRtl();switch(e.keyCode){case 37:this.activeDate=this._dateAdapter.addCalendarDays(this._activeDate,i?1:-1);break;case 39:this.activeDate=this._dateAdapter.addCalendarDays(this._activeDate,i?-1:1);break;case 38:this.activeDate=this._dateAdapter.addCalendarDays(this._activeDate,-7);break;case 40:this.activeDate=this._dateAdapter.addCalendarDays(this._activeDate,7);break;case 36:this.activeDate=this._dateAdapter.addCalendarDays(this._activeDate,1-this._dateAdapter.getDate(this._activeDate));break;case 35:this.activeDate=this._dateAdapter.addCalendarDays(this._activeDate,this._dateAdapter.getNumDaysInMonth(this._activeDate)-this._dateAdapter.getDate(this._activeDate));break;case 33:this.activeDate=e.altKey?this._dateAdapter.addCalendarYears(this._activeDate,-1):this._dateAdapter.addCalendarMonths(this._activeDate,-1);break;case 34:this.activeDate=e.altKey?this._dateAdapter.addCalendarYears(this._activeDate,1):this._dateAdapter.addCalendarMonths(this._activeDate,1);break;case 13:case 32:this._selectionKeyPressed=!0,this._canSelect(this._activeDate)&&e.preventDefault();return;case 27:this._previewEnd()!=null&&!re(e)&&(this._clearPreview(),this.activeDrag?this.dragEnded.emit({value:null,event:e}):(this.selectedChange.emit(null),this._userSelection.emit({value:null,event:e})),e.preventDefault(),e.stopPropagation());return;default:return}this._dateAdapter.compareDate(t,this.activeDate)&&(this.activeDateChange.emit(this.activeDate),this._focusActiveCellAfterViewChecked()),e.preventDefault()}_handleCalendarBodyKeyup(e){(e.keyCode===32||e.keyCode===13)&&(this._selectionKeyPressed&&this._canSelect(this._activeDate)&&this._dateSelected({value:this._dateAdapter.getDate(this._activeDate),event:e}),this._selectionKeyPressed=!1)}_init(){this._setRanges(this.selected),this._todayDate.set(this._getCellCompareValue(this._dateAdapter.today())),this._monthLabel.set(this._dateFormats.display.monthLabel?this._dateAdapter.format(this.activeDate,this._dateFormats.display.monthLabel):this._dateAdapter.getMonthNames("short")[this._dateAdapter.getMonth(this.activeDate)].toLocaleUpperCase());let e=this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate),this._dateAdapter.getMonth(this.activeDate),1);this._firstWeekOffset.set((Ji+this._dateAdapter.getDayOfWeek(e)-this._dateAdapter.getFirstDayOfWeek())%Ji),this._initWeekdays(),this._createWeekCells(),this._changeDetectorRef.markForCheck()}_focusActiveCell(e){this._matCalendarBody._focusActiveCell(e)}_focusActiveCellAfterViewChecked(){this._matCalendarBody._scheduleFocusActiveCellAfterViewChecked()}_previewChanged({event:e,value:t}){if(this._rangeStrategy){let i=t?t.rawValue:null,a=this._rangeStrategy.createPreview(i,this.selected,e);if(this._previewStart.set(this._getCellCompareValue(a.start)),this._previewEnd.set(this._getCellCompareValue(a.end)),this.activeDrag&&i){let o=this._rangeStrategy.createDrag?.(this.activeDrag.value,this.selected,i,e);o&&(this._previewStart.set(this._getCellCompareValue(o.start)),this._previewEnd.set(this._getCellCompareValue(o.end)))}}}_dragEnded(e){if(this.activeDrag)if(e.value){let t=this._rangeStrategy?.createDrag?.(this.activeDrag.value,this.selected,e.value,e.event);this.dragEnded.emit({value:t??null,event:e.event})}else this.dragEnded.emit({value:null,event:e.event})}_getDateFromDayOfMonth(e){return this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate),this._dateAdapter.getMonth(this.activeDate),e)}_initWeekdays(){let e=this._dateAdapter.getFirstDayOfWeek(),t=this._dateAdapter.getDayOfWeekNames("narrow"),a=this._dateAdapter.getDayOfWeekNames("long").map((o,m)=>({long:o,narrow:t[m],id:co++}));this._weekdays.set(a.slice(e).concat(a.slice(0,e)))}_createWeekCells(){let e=this._dateAdapter.getNumDaysInMonth(this.activeDate),t=this._dateAdapter.getDateNames(),i=[[]];for(let a=0,o=this._firstWeekOffset();a<e;a++,o++){o==Ji&&(i.push([]),o=0);let m=this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate),this._dateAdapter.getMonth(this.activeDate),a+1),D=this._shouldEnableDate(m),I=this._dateAdapter.format(m,this._dateFormats.display.dateA11yLabel),j=this.dateClass?this.dateClass(m,"month"):void 0;i[i.length-1].push(new Rt(a+1,t[a],I,D,j,this._getCellCompareValue(m),m))}this._weeks.set(i)}_shouldEnableDate(e){return!!e&&(!this.minDate||this._dateAdapter.compareDate(e,this.minDate)>=0)&&(!this.maxDate||this._dateAdapter.compareDate(e,this.maxDate)<=0)&&(!this.dateFilter||this.dateFilter(e))}_getDateInCurrentMonth(e){return e&&this._hasSameMonthAndYear(e,this.activeDate)?this._dateAdapter.getDate(e):null}_hasSameMonthAndYear(e,t){return!!(e&&t&&this._dateAdapter.getMonth(e)==this._dateAdapter.getMonth(t)&&this._dateAdapter.getYear(e)==this._dateAdapter.getYear(t))}_getCellCompareValue(e){if(e){let t=this._dateAdapter.getYear(e),i=this._dateAdapter.getMonth(e),a=this._dateAdapter.getDate(e);return new Date(t,i,a).getTime()}return null}_isRtl(){return this._dir&&this._dir.value==="rtl"}_setRanges(e){e instanceof ye?(this._rangeStart.set(this._getCellCompareValue(e.start)),this._rangeEnd.set(this._getCellCompareValue(e.end)),this._isRange.set(!0)):(this._rangeStart.set(this._getCellCompareValue(e)),this._rangeEnd.set(this._rangeStart()),this._isRange.set(!1)),this._comparisonRangeStart.set(this._getCellCompareValue(this.comparisonStart)),this._comparisonRangeEnd.set(this._getCellCompareValue(this.comparisonEnd))}_canSelect(e){return!this.dateFilter||this.dateFilter(e)}_clearPreview(){this._previewStart.set(null),this._previewEnd.set(null)}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=k({type:n,selectors:[["mat-month-view"]],viewQuery:function(t,i){if(t&1&&G(Ct,5),t&2){let a;C(a=w())&&(i._matCalendarBody=a.first)}},inputs:{activeDate:"activeDate",selected:"selected",minDate:"minDate",maxDate:"maxDate",dateFilter:"dateFilter",dateClass:"dateClass",comparisonStart:"comparisonStart",comparisonEnd:"comparisonEnd",startDateAccessibleName:"startDateAccessibleName",endDateAccessibleName:"endDateAccessibleName",activeDrag:"activeDrag"},outputs:{selectedChange:"selectedChange",_userSelection:"_userSelection",dragStarted:"dragStarted",dragEnded:"dragEnded",activeDateChange:"activeDateChange"},exportAs:["matMonthView"],features:[ie],decls:8,vars:14,consts:[["role","grid",1,"mat-calendar-table"],[1,"mat-calendar-table-header"],["scope","col"],["aria-hidden","true"],["colspan","7",1,"mat-calendar-table-header-divider"],["mat-calendar-body","",3,"selectedValueChange","activeDateChange","previewChange","dragStarted","dragEnded","keyup","keydown","label","rows","todayValue","startValue","endValue","comparisonStart","comparisonEnd","previewStart","previewEnd","isRange","labelMinRequiredCells","activeCell","startDateAccessibleName","endDateAccessibleName"],[1,"cdk-visually-hidden"]],template:function(t,i){t&1&&(l(0,"table",0)(1,"thead",1)(2,"tr"),H(3,Kr,5,2,"th",2,qa),c(),l(5,"tr",3),E(6,"th",4),c()(),l(7,"tbody",5),_("selectedValueChange",function(o){return i._dateSelected(o)})("activeDateChange",function(o){return i._updateActiveDate(o)})("previewChange",function(o){return i._previewChanged(o)})("dragStarted",function(o){return i.dragStarted.emit(o)})("dragEnded",function(o){return i._dragEnded(o)})("keyup",function(o){return i._handleCalendarBodyKeyup(o)})("keydown",function(o){return i._handleCalendarBodyKeydown(o)}),c()()),t&2&&(d(3),Y(i._weekdays()),d(4),u("label",i._monthLabel())("rows",i._weeks())("todayValue",i._todayDate())("startValue",i._rangeStart())("endValue",i._rangeEnd())("comparisonStart",i._comparisonRangeStart())("comparisonEnd",i._comparisonRangeEnd())("previewStart",i._previewStart())("previewEnd",i._previewEnd())("isRange",i._isRange())("labelMinRequiredCells",3)("activeCell",i._dateAdapter.getDate(i.activeDate)-1)("startDateAccessibleName",i.startDateAccessibleName)("endDateAccessibleName",i.endDateAccessibleName))},dependencies:[Ct],encapsulation:2,changeDetection:0})}return n})(),me=24,en=4,Ga=(()=>{class n{_changeDetectorRef=s(z);_dateAdapter=s(ee,{optional:!0});_dir=s(De,{optional:!0});_rerenderSubscription=he.EMPTY;_selectionKeyPressed=!1;get activeDate(){return this._activeDate}set activeDate(e){let t=this._activeDate,i=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))||this._dateAdapter.today();this._activeDate=this._dateAdapter.clampDate(i,this.minDate,this.maxDate),Wa(this._dateAdapter,t,this._activeDate,this.minDate,this.maxDate)||this._init()}_activeDate;get selected(){return this._selected}set selected(e){e instanceof ye?this._selected=e:this._selected=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e)),this._setSelectedYear(e)}_selected=null;get minDate(){return this._minDate}set minDate(e){this._minDate=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_minDate=null;get maxDate(){return this._maxDate}set maxDate(e){this._maxDate=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_maxDate=null;dateFilter;dateClass;selectedChange=new b;yearSelected=new b;activeDateChange=new b;_matCalendarBody;_years=g([]);_todayYear=g(0);_selectedYear=g(null);constructor(){this._dateAdapter,this._activeDate=this._dateAdapter.today()}ngAfterContentInit(){this._rerenderSubscription=this._dateAdapter.localeChanges.pipe(te(null)).subscribe(()=>this._init())}ngOnDestroy(){this._rerenderSubscription.unsubscribe()}_init(){this._todayYear.set(this._dateAdapter.getYear(this._dateAdapter.today()));let t=this._dateAdapter.getYear(this._activeDate)-Pt(this._dateAdapter,this.activeDate,this.minDate,this.maxDate),i=[];for(let a=0,o=[];a<me;a++)o.push(t+a),o.length==en&&(i.push(o.map(m=>this._createCellForYear(m))),o=[]);this._years.set(i),this._changeDetectorRef.markForCheck()}_yearSelected(e){let t=e.value,i=this._dateAdapter.createDate(t,0,1),a=this._getDateFromYear(t);this.yearSelected.emit(i),this.selectedChange.emit(a)}_updateActiveDate(e){let t=e.value,i=this._activeDate;this.activeDate=this._getDateFromYear(t),this._dateAdapter.compareDate(i,this.activeDate)&&this.activeDateChange.emit(this.activeDate)}_handleCalendarBodyKeydown(e){let t=this._activeDate,i=this._isRtl();switch(e.keyCode){case 37:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,i?1:-1);break;case 39:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,i?-1:1);break;case 38:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,-en);break;case 40:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,en);break;case 36:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,-Pt(this._dateAdapter,this.activeDate,this.minDate,this.maxDate));break;case 35:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,me-Pt(this._dateAdapter,this.activeDate,this.minDate,this.maxDate)-1);break;case 33:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,e.altKey?-me*10:-me);break;case 34:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,e.altKey?me*10:me);break;case 13:case 32:this._selectionKeyPressed=!0;break;default:return}this._dateAdapter.compareDate(t,this.activeDate)&&this.activeDateChange.emit(this.activeDate),this._focusActiveCellAfterViewChecked(),e.preventDefault()}_handleCalendarBodyKeyup(e){(e.keyCode===32||e.keyCode===13)&&(this._selectionKeyPressed&&this._yearSelected({value:this._dateAdapter.getYear(this._activeDate),event:e}),this._selectionKeyPressed=!1)}_getActiveCell(){return Pt(this._dateAdapter,this.activeDate,this.minDate,this.maxDate)}_focusActiveCell(){this._matCalendarBody._focusActiveCell()}_focusActiveCellAfterViewChecked(){this._matCalendarBody._scheduleFocusActiveCellAfterViewChecked()}_getDateFromYear(e){let t=this._dateAdapter.getMonth(this.activeDate),i=this._dateAdapter.getNumDaysInMonth(this._dateAdapter.createDate(e,t,1));return this._dateAdapter.createDate(e,t,Math.min(this._dateAdapter.getDate(this.activeDate),i))}_createCellForYear(e){let t=this._dateAdapter.createDate(e,0,1),i=this._dateAdapter.getYearName(t),a=this.dateClass?this.dateClass(t,"multi-year"):void 0;return new Rt(e,i,i,this._shouldEnableYear(e),a)}_shouldEnableYear(e){if(e==null||this.maxDate&&e>this._dateAdapter.getYear(this.maxDate)||this.minDate&&e<this._dateAdapter.getYear(this.minDate))return!1;if(!this.dateFilter)return!0;let t=this._dateAdapter.createDate(e,0,1);for(let i=t;this._dateAdapter.getYear(i)==e;i=this._dateAdapter.addCalendarDays(i,1))if(this.dateFilter(i))return!0;return!1}_isRtl(){return this._dir&&this._dir.value==="rtl"}_setSelectedYear(e){if(this._selectedYear.set(null),e instanceof ye){let t=e.start||e.end;t&&this._selectedYear.set(this._dateAdapter.getYear(t))}else e&&this._selectedYear.set(this._dateAdapter.getYear(e))}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=k({type:n,selectors:[["mat-multi-year-view"]],viewQuery:function(t,i){if(t&1&&G(Ct,5),t&2){let a;C(a=w())&&(i._matCalendarBody=a.first)}},inputs:{activeDate:"activeDate",selected:"selected",minDate:"minDate",maxDate:"maxDate",dateFilter:"dateFilter",dateClass:"dateClass"},outputs:{selectedChange:"selectedChange",yearSelected:"yearSelected",activeDateChange:"activeDateChange"},exportAs:["matMultiYearView"],decls:5,vars:7,consts:[["role","grid",1,"mat-calendar-table"],["aria-hidden","true",1,"mat-calendar-table-header"],["colspan","4",1,"mat-calendar-table-header-divider"],["mat-calendar-body","",3,"selectedValueChange","activeDateChange","keyup","keydown","rows","todayValue","startValue","endValue","numCols","cellAspectRatio","activeCell"]],template:function(t,i){t&1&&(l(0,"table",0)(1,"thead",1)(2,"tr"),E(3,"th",2),c()(),l(4,"tbody",3),_("selectedValueChange",function(o){return i._yearSelected(o)})("activeDateChange",function(o){return i._updateActiveDate(o)})("keyup",function(o){return i._handleCalendarBodyKeyup(o)})("keydown",function(o){return i._handleCalendarBodyKeydown(o)}),c()()),t&2&&(d(4),u("rows",i._years())("todayValue",i._todayYear())("startValue",i._selectedYear())("endValue",i._selectedYear())("numCols",4)("cellAspectRatio",4/7)("activeCell",i._getActiveCell()))},dependencies:[Ct],encapsulation:2,changeDetection:0})}return n})();function Wa(n,r,e,t,i){let a=n.getYear(r),o=n.getYear(e),m=Xa(n,t,i);return Math.floor((a-m)/me)===Math.floor((o-m)/me)}function Pt(n,r,e,t){let i=n.getYear(r);return po(i-Xa(n,e,t),me)}function Xa(n,r,e){let t=0;return e?t=n.getYear(e)-me+1:r&&(t=n.getYear(r)),t}function po(n,r){return(n%r+r)%r}var Ua=(()=>{class n{_changeDetectorRef=s(z);_dateFormats=s(Ue,{optional:!0});_dateAdapter=s(ee,{optional:!0});_dir=s(De,{optional:!0});_rerenderSubscription=he.EMPTY;_selectionKeyPressed=!1;get activeDate(){return this._activeDate}set activeDate(e){let t=this._activeDate,i=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))||this._dateAdapter.today();this._activeDate=this._dateAdapter.clampDate(i,this.minDate,this.maxDate),this._dateAdapter.getYear(t)!==this._dateAdapter.getYear(this._activeDate)&&this._init()}_activeDate;get selected(){return this._selected}set selected(e){e instanceof ye?this._selected=e:this._selected=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e)),this._setSelectedMonth(e)}_selected=null;get minDate(){return this._minDate}set minDate(e){this._minDate=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_minDate=null;get maxDate(){return this._maxDate}set maxDate(e){this._maxDate=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_maxDate=null;dateFilter;dateClass;selectedChange=new b;monthSelected=new b;activeDateChange=new b;_matCalendarBody;_months=g([]);_yearLabel=g("");_todayMonth=g(null);_selectedMonth=g(null);constructor(){this._activeDate=this._dateAdapter.today()}ngAfterContentInit(){this._rerenderSubscription=this._dateAdapter.localeChanges.pipe(te(null)).subscribe(()=>this._init())}ngOnDestroy(){this._rerenderSubscription.unsubscribe()}_monthSelected(e){let t=e.value,i=this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate),t,1);this.monthSelected.emit(i);let a=this._getDateFromMonth(t);this.selectedChange.emit(a)}_updateActiveDate(e){let t=e.value,i=this._activeDate;this.activeDate=this._getDateFromMonth(t),this._dateAdapter.compareDate(i,this.activeDate)&&this.activeDateChange.emit(this.activeDate)}_handleCalendarBodyKeydown(e){let t=this._activeDate,i=this._isRtl();switch(e.keyCode){case 37:this.activeDate=this._dateAdapter.addCalendarMonths(this._activeDate,i?1:-1);break;case 39:this.activeDate=this._dateAdapter.addCalendarMonths(this._activeDate,i?-1:1);break;case 38:this.activeDate=this._dateAdapter.addCalendarMonths(this._activeDate,-4);break;case 40:this.activeDate=this._dateAdapter.addCalendarMonths(this._activeDate,4);break;case 36:this.activeDate=this._dateAdapter.addCalendarMonths(this._activeDate,-this._dateAdapter.getMonth(this._activeDate));break;case 35:this.activeDate=this._dateAdapter.addCalendarMonths(this._activeDate,11-this._dateAdapter.getMonth(this._activeDate));break;case 33:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,e.altKey?-10:-1);break;case 34:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,e.altKey?10:1);break;case 13:case 32:this._selectionKeyPressed=!0;break;default:return}this._dateAdapter.compareDate(t,this.activeDate)&&(this.activeDateChange.emit(this.activeDate),this._focusActiveCellAfterViewChecked()),e.preventDefault()}_handleCalendarBodyKeyup(e){(e.keyCode===32||e.keyCode===13)&&(this._selectionKeyPressed&&this._monthSelected({value:this._dateAdapter.getMonth(this._activeDate),event:e}),this._selectionKeyPressed=!1)}_init(){this._setSelectedMonth(this.selected),this._todayMonth.set(this._getMonthInCurrentYear(this._dateAdapter.today())),this._yearLabel.set(this._dateAdapter.getYearName(this.activeDate));let e=this._dateAdapter.getMonthNames("short");this._months.set([[0,1,2,3],[4,5,6,7],[8,9,10,11]].map(t=>t.map(i=>this._createCellForMonth(i,e[i])))),this._changeDetectorRef.markForCheck()}_focusActiveCell(){this._matCalendarBody._focusActiveCell()}_focusActiveCellAfterViewChecked(){this._matCalendarBody._scheduleFocusActiveCellAfterViewChecked()}_getMonthInCurrentYear(e){return e&&this._dateAdapter.getYear(e)==this._dateAdapter.getYear(this.activeDate)?this._dateAdapter.getMonth(e):null}_getDateFromMonth(e){let t=this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate),e,1),i=this._dateAdapter.getNumDaysInMonth(t);return this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate),e,Math.min(this._dateAdapter.getDate(this.activeDate),i))}_createCellForMonth(e,t){let i=this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate),e,1),a=this._dateAdapter.format(i,this._dateFormats.display.monthYearA11yLabel),o=this.dateClass?this.dateClass(i,"year"):void 0;return new Rt(e,t.toLocaleUpperCase(),a,this._shouldEnableMonth(e),o)}_shouldEnableMonth(e){let t=this._dateAdapter.getYear(this.activeDate);if(e==null||this._isYearAndMonthAfterMaxDate(t,e)||this._isYearAndMonthBeforeMinDate(t,e))return!1;if(!this.dateFilter)return!0;let i=this._dateAdapter.createDate(t,e,1);for(let a=i;this._dateAdapter.getMonth(a)==e;a=this._dateAdapter.addCalendarDays(a,1))if(this.dateFilter(a))return!0;return!1}_isYearAndMonthAfterMaxDate(e,t){if(this.maxDate){let i=this._dateAdapter.getYear(this.maxDate),a=this._dateAdapter.getMonth(this.maxDate);return e>i||e===i&&t>a}return!1}_isYearAndMonthBeforeMinDate(e,t){if(this.minDate){let i=this._dateAdapter.getYear(this.minDate),a=this._dateAdapter.getMonth(this.minDate);return e<i||e===i&&t<a}return!1}_isRtl(){return this._dir&&this._dir.value==="rtl"}_setSelectedMonth(e){e instanceof ye?this._selectedMonth.set(this._getMonthInCurrentYear(e.start)||this._getMonthInCurrentYear(e.end)):this._selectedMonth.set(this._getMonthInCurrentYear(e))}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=k({type:n,selectors:[["mat-year-view"]],viewQuery:function(t,i){if(t&1&&G(Ct,5),t&2){let a;C(a=w())&&(i._matCalendarBody=a.first)}},inputs:{activeDate:"activeDate",selected:"selected",minDate:"minDate",maxDate:"maxDate",dateFilter:"dateFilter",dateClass:"dateClass"},outputs:{selectedChange:"selectedChange",monthSelected:"monthSelected",activeDateChange:"activeDateChange"},exportAs:["matYearView"],decls:5,vars:9,consts:[["role","grid",1,"mat-calendar-table"],["aria-hidden","true",1,"mat-calendar-table-header"],["colspan","4",1,"mat-calendar-table-header-divider"],["mat-calendar-body","",3,"selectedValueChange","activeDateChange","keyup","keydown","label","rows","todayValue","startValue","endValue","labelMinRequiredCells","numCols","cellAspectRatio","activeCell"]],template:function(t,i){t&1&&(l(0,"table",0)(1,"thead",1)(2,"tr"),E(3,"th",2),c()(),l(4,"tbody",3),_("selectedValueChange",function(o){return i._monthSelected(o)})("activeDateChange",function(o){return i._updateActiveDate(o)})("keyup",function(o){return i._handleCalendarBodyKeyup(o)})("keydown",function(o){return i._handleCalendarBodyKeydown(o)}),c()()),t&2&&(d(4),u("label",i._yearLabel())("rows",i._months())("todayValue",i._todayMonth())("startValue",i._selectedMonth())("endValue",i._selectedMonth())("labelMinRequiredCells",2)("numCols",4)("cellAspectRatio",4/7)("activeCell",i._dateAdapter.getMonth(i.activeDate)))},dependencies:[Ct],encapsulation:2,changeDetection:0})}return n})(),Za=(()=>{class n{_intl=s(wt);calendar=s(tn);_dateAdapter=s(ee,{optional:!0});_dateFormats=s(Ue,{optional:!0});_periodButtonText;_periodButtonDescription;_periodButtonLabel;_prevButtonLabel;_nextButtonLabel;constructor(){s(fe).load(ze);let e=s(z);this._updateLabels(),this.calendar.stateChanges.subscribe(()=>{this._updateLabels(),e.markForCheck()})}get periodButtonText(){return this._periodButtonText}get periodButtonDescription(){return this._periodButtonDescription}get periodButtonLabel(){return this._periodButtonLabel}get prevButtonLabel(){return this._prevButtonLabel}get nextButtonLabel(){return this._nextButtonLabel}currentPeriodClicked(){this.calendar.currentView=this.calendar.currentView=="month"?"multi-year":"month"}previousClicked(){this.previousEnabled()&&(this.calendar.activeDate=this.calendar.currentView=="month"?this._dateAdapter.addCalendarMonths(this.calendar.activeDate,-1):this._dateAdapter.addCalendarYears(this.calendar.activeDate,this.calendar.currentView=="year"?-1:-me))}nextClicked(){this.nextEnabled()&&(this.calendar.activeDate=this.calendar.currentView=="month"?this._dateAdapter.addCalendarMonths(this.calendar.activeDate,1):this._dateAdapter.addCalendarYears(this.calendar.activeDate,this.calendar.currentView=="year"?1:me))}previousEnabled(){return this.calendar.minDate?!this.calendar.minDate||!this._isSameView(this.calendar.activeDate,this.calendar.minDate):!0}nextEnabled(){return!this.calendar.maxDate||!this._isSameView(this.calendar.activeDate,this.calendar.maxDate)}_updateLabels(){let e=this.calendar,t=this._intl,i=this._dateAdapter;e.currentView==="month"?(this._periodButtonText=i.format(e.activeDate,this._dateFormats.display.monthYearLabel).toLocaleUpperCase(),this._periodButtonDescription=i.format(e.activeDate,this._dateFormats.display.monthYearLabel).toLocaleUpperCase(),this._periodButtonLabel=t.switchToMultiYearViewLabel,this._prevButtonLabel=t.prevMonthLabel,this._nextButtonLabel=t.nextMonthLabel):e.currentView==="year"?(this._periodButtonText=i.getYearName(e.activeDate),this._periodButtonDescription=i.getYearName(e.activeDate),this._periodButtonLabel=t.switchToMonthViewLabel,this._prevButtonLabel=t.prevYearLabel,this._nextButtonLabel=t.nextYearLabel):(this._periodButtonText=t.formatYearRange(...this._formatMinAndMaxYearLabels()),this._periodButtonDescription=t.formatYearRangeLabel(...this._formatMinAndMaxYearLabels()),this._periodButtonLabel=t.switchToMonthViewLabel,this._prevButtonLabel=t.prevMultiYearLabel,this._nextButtonLabel=t.nextMultiYearLabel)}_isSameView(e,t){return this.calendar.currentView=="month"?this._dateAdapter.getYear(e)==this._dateAdapter.getYear(t)&&this._dateAdapter.getMonth(e)==this._dateAdapter.getMonth(t):this.calendar.currentView=="year"?this._dateAdapter.getYear(e)==this._dateAdapter.getYear(t):Wa(this._dateAdapter,e,t,this.calendar.minDate,this.calendar.maxDate)}_formatMinAndMaxYearLabels(){let t=this._dateAdapter.getYear(this.calendar.activeDate)-Pt(this._dateAdapter,this.calendar.activeDate,this.calendar.minDate,this.calendar.maxDate),i=t+me-1,a=this._dateAdapter.getYearName(this._dateAdapter.createDate(t,0,1)),o=this._dateAdapter.getYearName(this._dateAdapter.createDate(i,0,1));return[a,o]}_periodButtonLabelId=s(ce).getId("mat-calendar-period-label-");static \u0275fac=function(t){return new(t||n)};static \u0275cmp=k({type:n,selectors:[["mat-calendar-header"]],exportAs:["matCalendarHeader"],ngContentSelectors:Wr,decls:17,vars:13,consts:[[1,"mat-calendar-header"],[1,"mat-calendar-controls"],["aria-live","polite",1,"cdk-visually-hidden",3,"id"],["matButton","","type","button",1,"mat-calendar-period-button",3,"click"],["aria-hidden","true"],["viewBox","0 0 10 5","focusable","false","aria-hidden","true",1,"mat-calendar-arrow"],["points","0,0 5,5 10,0"],[1,"mat-calendar-spacer"],["matIconButton","","type","button","disabledInteractive","",1,"mat-calendar-previous-button",3,"click","disabled","matTooltip"],["viewBox","0 0 24 24","focusable","false","aria-hidden","true"],["d","M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"],["matIconButton","","type","button","disabledInteractive","",1,"mat-calendar-next-button",3,"click","disabled","matTooltip"],["d","M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"]],template:function(t,i){t&1&&($(),l(0,"div",0)(1,"div",1)(2,"span",2),p(3),c(),l(4,"button",3),_("click",function(){return i.currentPeriodClicked()}),l(5,"span",4),p(6),c(),_e(),l(7,"svg",5),E(8,"polygon",6),c()(),We(),E(9,"div",7),N(10),l(11,"button",8),_("click",function(){return i.previousClicked()}),_e(),l(12,"svg",9),E(13,"path",10),c()(),We(),l(14,"button",11),_("click",function(){return i.nextClicked()}),_e(),l(15,"svg",9),E(16,"path",12),c()()()()),t&2&&(d(2),u("id",i._periodButtonLabelId),d(),y(i.periodButtonDescription),d(),S("aria-label",i.periodButtonLabel)("aria-describedby",i._periodButtonLabelId),d(2),y(i.periodButtonText),d(),A("mat-calendar-invert",i.calendar.currentView!=="month"),d(4),u("disabled",!i.previousEnabled())("matTooltip",i.prevButtonLabel),S("aria-label",i.prevButtonLabel),d(3),u("disabled",!i.nextEnabled())("matTooltip",i.nextButtonLabel),S("aria-label",i.nextButtonLabel))},dependencies:[xe,Je,za],encapsulation:2,changeDetection:0})}return n})(),tn=(()=>{class n{_dateAdapter=s(ee,{optional:!0});_dateFormats=s(Ue,{optional:!0});_changeDetectorRef=s(z);_elementRef=s(R);headerComponent;_calendarHeaderPortal;_intlChanges;_moveFocusOnNextTick=!1;get startAt(){return this._startAt}set startAt(e){this._startAt=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_startAt=null;startView="month";get selected(){return this._selected}set selected(e){e instanceof ye?this._selected=e:this._selected=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_selected=null;get minDate(){return this._minDate}set minDate(e){this._minDate=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_minDate=null;get maxDate(){return this._maxDate}set maxDate(e){this._maxDate=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_maxDate=null;dateFilter;dateClass;comparisonStart=null;comparisonEnd=null;startDateAccessibleName=null;endDateAccessibleName=null;selectedChange=new b;yearSelected=new b;monthSelected=new b;viewChanged=new b(!0);_userSelection=new b;_userDragDrop=new b;monthView;yearView;multiYearView;get activeDate(){return this._clampedActiveDate}set activeDate(e){this._clampedActiveDate=this._dateAdapter.clampDate(e,this.minDate,this.maxDate),this.stateChanges.next(),this._changeDetectorRef.markForCheck()}_clampedActiveDate;get currentView(){return this._currentView}set currentView(e){let t=this._currentView!==e?e:null;this._currentView=e,this._moveFocusOnNextTick=!0,this._changeDetectorRef.markForCheck(),t&&(this.stateChanges.next(),this.viewChanged.emit(t))}_currentView;_activeDrag=null;stateChanges=new O;constructor(){this._intlChanges=s(wt).changes.subscribe(()=>{this._changeDetectorRef.markForCheck(),this.stateChanges.next()})}ngAfterContentInit(){this._calendarHeaderPortal=new je(this.headerComponent||Za),this.activeDate=this.startAt||this._dateAdapter.today(),this._currentView=this.startView}ngAfterViewChecked(){this._moveFocusOnNextTick&&(this._moveFocusOnNextTick=!1,this.focusActiveCell())}ngOnDestroy(){this._intlChanges.unsubscribe(),this.stateChanges.complete()}ngOnChanges(e){let t=e.minDate&&!this._dateAdapter.sameDate(e.minDate.previousValue,e.minDate.currentValue)?e.minDate:void 0,i=e.maxDate&&!this._dateAdapter.sameDate(e.maxDate.previousValue,e.maxDate.currentValue)?e.maxDate:void 0,a=t||i||e.dateFilter;if(a&&!a.firstChange){let o=this._getCurrentViewComponent();o&&(this._elementRef.nativeElement.contains(It())&&(this._moveFocusOnNextTick=!0),this._changeDetectorRef.detectChanges(),o._init())}this.stateChanges.next()}focusActiveCell(){this._getCurrentViewComponent()?._focusActiveCell(!1)}updateTodaysDate(){this._getCurrentViewComponent()?._init()}_dateSelected(e){let t=e.value;(this.selected instanceof ye||t&&!this._dateAdapter.sameDate(t,this.selected))&&this.selectedChange.emit(t),this._userSelection.emit(e)}_yearSelectedInMultiYearView(e){this.yearSelected.emit(e)}_monthSelectedInYearView(e){this.monthSelected.emit(e)}_goToDateInView(e,t){this.activeDate=e,this.currentView=t}_dragStarted(e){this._activeDrag=e}_dragEnded(e){this._activeDrag&&(e.value&&this._userDragDrop.emit(e),this._activeDrag=null)}_getCurrentViewComponent(){return this.monthView||this.yearView||this.multiYearView}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=k({type:n,selectors:[["mat-calendar"]],viewQuery:function(t,i){if(t&1&&G(ja,5)(Ua,5)(Ga,5),t&2){let a;C(a=w())&&(i.monthView=a.first),C(a=w())&&(i.yearView=a.first),C(a=w())&&(i.multiYearView=a.first)}},hostAttrs:[1,"mat-calendar"],inputs:{headerComponent:"headerComponent",startAt:"startAt",startView:"startView",selected:"selected",minDate:"minDate",maxDate:"maxDate",dateFilter:"dateFilter",dateClass:"dateClass",comparisonStart:"comparisonStart",comparisonEnd:"comparisonEnd",startDateAccessibleName:"startDateAccessibleName",endDateAccessibleName:"endDateAccessibleName"},outputs:{selectedChange:"selectedChange",yearSelected:"yearSelected",monthSelected:"monthSelected",viewChanged:"viewChanged",_userSelection:"_userSelection",_userDragDrop:"_userDragDrop"},exportAs:["matCalendar"],features:[Z([$a]),ie],decls:5,vars:2,consts:[[3,"cdkPortalOutlet"],["cdkMonitorSubtreeFocus","","tabindex","-1",1,"mat-calendar-content"],[3,"activeDate","selected","dateFilter","maxDate","minDate","dateClass","comparisonStart","comparisonEnd","startDateAccessibleName","endDateAccessibleName","activeDrag"],[3,"activeDate","selected","dateFilter","maxDate","minDate","dateClass"],[3,"activeDateChange","_userSelection","dragStarted","dragEnded","activeDate","selected","dateFilter","maxDate","minDate","dateClass","comparisonStart","comparisonEnd","startDateAccessibleName","endDateAccessibleName","activeDrag"],[3,"activeDateChange","monthSelected","selectedChange","activeDate","selected","dateFilter","maxDate","minDate","dateClass"],[3,"activeDateChange","yearSelected","selectedChange","activeDate","selected","dateFilter","maxDate","minDate","dateClass"]],template:function(t,i){if(t&1&&(Re(0,Xr,0,0,"ng-template",0),l(1,"div",1),f(2,Zr,1,11,"mat-month-view",2)(3,Jr,1,6,"mat-year-view",3)(4,eo,1,6,"mat-multi-year-view",3),c()),t&2){let a;u("cdkPortalOutlet",i._calendarHeaderPortal),d(2),v((a=i.currentView)==="month"?2:a==="year"?3:a==="multi-year"?4:-1)}},dependencies:[Ge,qn,ja,Ua,Ga],styles:[`.mat-calendar {
  display: block;
  line-height: normal;
  font-family: var(--mat-datepicker-calendar-text-font, var(--mat-sys-body-medium-font));
  font-size: var(--mat-datepicker-calendar-text-size, var(--mat-sys-body-medium-size));
}

.mat-calendar-header {
  padding: 8px 8px 0 8px;
}

.mat-calendar-content {
  padding: 0 8px 8px 8px;
  outline: none;
}

.mat-calendar-controls {
  display: flex;
  align-items: center;
  margin: 5% calc(4.7142857143% - 16px);
}

.mat-calendar-spacer {
  flex: 1 1 auto;
}

.mat-calendar-period-button {
  min-width: 0;
  margin: 0 8px;
  font-size: var(--mat-datepicker-calendar-period-button-text-size, var(--mat-sys-title-small-size));
  font-weight: var(--mat-datepicker-calendar-period-button-text-weight, var(--mat-sys-title-small-weight));
  --mat-button-text-label-text-color: var(--mat-datepicker-calendar-period-button-text-color, var(--mat-sys-on-surface-variant));
}

.mat-calendar-arrow {
  display: inline-block;
  width: 10px;
  height: 5px;
  margin: 0 0 0 5px;
  vertical-align: middle;
  fill: var(--mat-datepicker-calendar-period-button-icon-color, var(--mat-sys-on-surface-variant));
}
.mat-calendar-arrow.mat-calendar-invert {
  transform: rotate(180deg);
}
[dir=rtl] .mat-calendar-arrow {
  margin: 0 5px 0 0;
}
@media (forced-colors: active) {
  .mat-calendar-arrow {
    fill: CanvasText;
  }
}

.mat-datepicker-content .mat-calendar-previous-button:not(.mat-mdc-button-disabled),
.mat-datepicker-content .mat-calendar-next-button:not(.mat-mdc-button-disabled) {
  color: var(--mat-datepicker-calendar-navigation-button-icon-color, var(--mat-sys-on-surface-variant));
}
[dir=rtl] .mat-calendar-previous-button,
[dir=rtl] .mat-calendar-next-button {
  transform: rotate(180deg);
}

.mat-calendar-table {
  border-spacing: 0;
  border-collapse: collapse;
  width: 100%;
}

.mat-calendar-table-header th {
  text-align: center;
  padding: 0 0 8px 0;
  color: var(--mat-datepicker-calendar-header-text-color, var(--mat-sys-on-surface-variant));
  font-size: var(--mat-datepicker-calendar-header-text-size, var(--mat-sys-title-small-size));
  font-weight: var(--mat-datepicker-calendar-header-text-weight, var(--mat-sys-title-small-weight));
}

.mat-calendar-table-header-divider {
  position: relative;
  height: 1px;
}
.mat-calendar-table-header-divider::after {
  content: "";
  position: absolute;
  top: 0;
  left: -8px;
  right: -8px;
  height: 1px;
  background: var(--mat-datepicker-calendar-header-divider-color, transparent);
}

.mat-calendar-body-cell-content::before {
  margin: calc(calc(var(--mat-focus-indicator-border-width, 3px) + 3px) * -1);
}

.mat-calendar-body-cell:focus-visible .mat-focus-indicator::before {
  content: "";
}
`],encapsulation:2,changeDetection:0})}return n})(),mo=new L("mat-datepicker-scroll-strategy",{providedIn:"root",factory:()=>{let n=s(le);return()=>Wt(n)}}),Ja=(()=>{class n{_elementRef=s(R);_animationsDisabled=oe();_changeDetectorRef=s(z);_globalModel=s(Vt);_dateAdapter=s(ee);_ngZone=s(Ce);_rangeSelectionStrategy=s(Ka,{optional:!0});_stateChanges;_model;_eventCleanups;_animationFallback;_calendar;color;datepicker;comparisonStart=null;comparisonEnd=null;startDateAccessibleName=null;endDateAccessibleName=null;_isAbove=!1;_animationDone=new O;_isAnimating=!1;_closeButtonText;_closeButtonFocused=!1;_actionsPortal=null;_dialogLabelId=null;constructor(){if(s(fe).load(ze),this._closeButtonText=s(wt).closeCalendarLabel,!this._animationsDisabled){let e=this._elementRef.nativeElement,t=s(Pe);this._eventCleanups=this._ngZone.runOutsideAngular(()=>[t.listen(e,"animationstart",this._handleAnimationEvent),t.listen(e,"animationend",this._handleAnimationEvent),t.listen(e,"animationcancel",this._handleAnimationEvent)])}}ngAfterViewInit(){this._stateChanges=this.datepicker.stateChanges.subscribe(()=>{this._changeDetectorRef.markForCheck()}),this._calendar.focusActiveCell()}ngOnDestroy(){clearTimeout(this._animationFallback),this._eventCleanups?.forEach(e=>e()),this._stateChanges?.unsubscribe(),this._animationDone.complete()}_handleUserSelection(e){let t=this._model.selection,i=e.value,a=t instanceof ye;if(a&&this._rangeSelectionStrategy){let o=this._rangeSelectionStrategy.selectionFinished(i,t,e.event);this._model.updateSelection(o,this)}else i&&(a||!this._dateAdapter.sameDate(i,t))&&this._model.add(i);(!this._model||this._model.isComplete())&&!this._actionsPortal&&this.datepicker.close()}_handleUserDragDrop(e){this._model.updateSelection(e.value,this)}_startExitAnimation(){this._elementRef.nativeElement.classList.add("mat-datepicker-content-exit"),this._animationsDisabled?this._animationDone.next():(clearTimeout(this._animationFallback),this._animationFallback=setTimeout(()=>{this._isAnimating||this._animationDone.next()},200))}_handleAnimationEvent=e=>{let t=this._elementRef.nativeElement;e.target!==t||!e.animationName.startsWith("_mat-datepicker-content")||(clearTimeout(this._animationFallback),this._isAnimating=e.type==="animationstart",t.classList.toggle("mat-datepicker-content-animating",this._isAnimating),this._isAnimating||this._animationDone.next())};_getSelected(){return this._model.selection}_applyPendingSelection(){this._model!==this._globalModel&&this._globalModel.updateSelection(this._model.selection,this)}_assignActions(e,t){this._model=e?this._globalModel.clone():this._globalModel,this._actionsPortal=e,t&&this._changeDetectorRef.detectChanges()}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=k({type:n,selectors:[["mat-datepicker-content"]],viewQuery:function(t,i){if(t&1&&G(tn,5),t&2){let a;C(a=w())&&(i._calendar=a.first)}},hostAttrs:[1,"mat-datepicker-content"],hostVars:6,hostBindings:function(t,i){t&2&&(X(i.color?"mat-"+i.color:""),A("mat-datepicker-content-touch",i.datepicker.touchUi)("mat-datepicker-content-animations-enabled",!i._animationsDisabled))},inputs:{color:"color"},exportAs:["matDatepickerContent"],decls:5,vars:26,consts:[["cdkTrapFocus","","role","dialog",1,"mat-datepicker-content-container"],[3,"yearSelected","monthSelected","viewChanged","_userSelection","_userDragDrop","id","startAt","startView","minDate","maxDate","dateFilter","headerComponent","selected","dateClass","comparisonStart","comparisonEnd","startDateAccessibleName","endDateAccessibleName"],[3,"cdkPortalOutlet"],["type","button","matButton","elevated",1,"mat-datepicker-close-button",3,"focus","blur","click","color"]],template:function(t,i){t&1&&(l(0,"div",0)(1,"mat-calendar",1),_("yearSelected",function(o){return i.datepicker._selectYear(o)})("monthSelected",function(o){return i.datepicker._selectMonth(o)})("viewChanged",function(o){return i.datepicker._viewChanged(o)})("_userSelection",function(o){return i._handleUserSelection(o)})("_userDragDrop",function(o){return i._handleUserDragDrop(o)}),c(),Re(2,to,0,0,"ng-template",2),l(3,"button",3),_("focus",function(){return i._closeButtonFocused=!0})("blur",function(){return i._closeButtonFocused=!1})("click",function(){return i.datepicker.close()}),p(4),c()()),t&2&&(A("mat-datepicker-content-container-with-custom-header",i.datepicker.calendarHeaderComponent)("mat-datepicker-content-container-with-actions",i._actionsPortal),S("aria-modal",!0)("aria-labelledby",i._dialogLabelId??void 0),d(),X(i.datepicker.panelClass),u("id",i.datepicker.id)("startAt",i.datepicker.startAt)("startView",i.datepicker.startView)("minDate",i.datepicker._getMinDate())("maxDate",i.datepicker._getMaxDate())("dateFilter",i.datepicker._getDateFilter())("headerComponent",i.datepicker.calendarHeaderComponent)("selected",i._getSelected())("dateClass",i.datepicker.dateClass)("comparisonStart",i.comparisonStart)("comparisonEnd",i.comparisonEnd)("startDateAccessibleName",i.startDateAccessibleName)("endDateAccessibleName",i.endDateAccessibleName),d(),u("cdkPortalOutlet",i._actionsPortal),d(),A("cdk-visually-hidden",!i._closeButtonFocused),u("color",i.color||"primary"),d(),y(i._closeButtonText))},dependencies:[Wn,tn,Ge,xe],styles:[`@keyframes _mat-datepicker-content-dropdown-enter {
  from {
    opacity: 0;
    transform: scaleY(0.8);
  }
  to {
    opacity: 1;
    transform: none;
  }
}
@keyframes _mat-datepicker-content-dialog-enter {
  from {
    opacity: 0;
    transform: scale(0.8);
  }
  to {
    opacity: 1;
    transform: none;
  }
}
@keyframes _mat-datepicker-content-exit {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
.mat-datepicker-content {
  display: block;
  background-color: var(--mat-datepicker-calendar-container-background-color, var(--mat-sys-surface-container-high));
  color: var(--mat-datepicker-calendar-container-text-color, var(--mat-sys-on-surface));
  box-shadow: var(--mat-datepicker-calendar-container-elevation-shadow, 0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12));
  border-radius: var(--mat-datepicker-calendar-container-shape, var(--mat-sys-corner-large));
}
.mat-datepicker-content.mat-datepicker-content-animations-enabled {
  animation: _mat-datepicker-content-dropdown-enter 120ms cubic-bezier(0, 0, 0.2, 1);
}
.mat-datepicker-content .mat-calendar {
  width: 296px;
  height: 354px;
}
.mat-datepicker-content .mat-datepicker-content-container-with-custom-header .mat-calendar {
  height: auto;
}
.mat-datepicker-content .mat-datepicker-close-button {
  position: absolute;
  top: 100%;
  left: 0;
  margin-top: 8px;
}
.mat-datepicker-content-animating .mat-datepicker-content .mat-datepicker-close-button {
  display: none;
}

.mat-datepicker-content-container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.mat-datepicker-content-touch {
  display: block;
  max-height: 80vh;
  box-shadow: var(--mat-datepicker-calendar-container-touch-elevation-shadow, 0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12));
  border-radius: var(--mat-datepicker-calendar-container-touch-shape, var(--mat-sys-corner-extra-large));
  position: relative;
  overflow: visible;
  min-height: fit-content;
}
.mat-datepicker-content-touch.mat-datepicker-content-animations-enabled {
  animation: _mat-datepicker-content-dialog-enter 150ms cubic-bezier(0, 0, 0.2, 1);
}
.mat-datepicker-content-touch .mat-datepicker-content-container {
  min-height: 312px;
  max-height: 788px;
  min-width: 250px;
  max-width: 750px;
}
.mat-datepicker-content-touch .mat-calendar {
  width: 100%;
  height: auto;
}

.mat-datepicker-content-exit.mat-datepicker-content-animations-enabled {
  animation: _mat-datepicker-content-exit 100ms linear;
}

@media all and (orientation: landscape) {
  .mat-datepicker-content-touch .mat-datepicker-content-container {
    width: 64vh;
    height: 80vh;
  }
}
@media all and (orientation: portrait) {
  .mat-datepicker-content-touch .mat-datepicker-content-container {
    width: 80vw;
    height: 100vw;
  }
  .mat-datepicker-content-touch .mat-datepicker-content-container-with-actions {
    height: 115vw;
  }
}
`],encapsulation:2,changeDetection:0})}return n})(),Qa=(()=>{class n{_injector=s(le);_viewContainerRef=s(st);_dateAdapter=s(ee,{optional:!0});_dir=s(De,{optional:!0});_model=s(Vt);_animationsDisabled=oe();_scrollStrategy=s(mo);_inputStateChanges=he.EMPTY;_document=s(Te);calendarHeaderComponent;get startAt(){return this._startAt||(this.datepickerInput?this.datepickerInput.getStartValue():null)}set startAt(e){this._startAt=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_startAt=null;startView="month";get color(){return this._color||(this.datepickerInput?this.datepickerInput.getThemePalette():void 0)}set color(e){this._color=e}_color;touchUi=!1;get disabled(){return this._disabled===void 0&&this.datepickerInput?this.datepickerInput.disabled:!!this._disabled}set disabled(e){e!==this._disabled&&(this._disabled=e,this.stateChanges.next(void 0))}_disabled;xPosition="start";yPosition="below";restoreFocus=!0;yearSelected=new b;monthSelected=new b;viewChanged=new b(!0);dateClass;openedStream=new b;closedStream=new b;get panelClass(){return this._panelClass}set panelClass(e){this._panelClass=ta(e)}_panelClass;get opened(){return this._opened}set opened(e){e?this.open():this.close()}_opened=!1;id=s(ce).getId("mat-datepicker-");_getMinDate(){return this.datepickerInput&&this.datepickerInput.min}_getMaxDate(){return this.datepickerInput&&this.datepickerInput.max}_getDateFilter(){return this.datepickerInput&&this.datepickerInput.dateFilter}_overlayRef=null;_componentRef=null;_focusedElementBeforeOpen=null;_backdropHarnessClass=`${this.id}-backdrop`;_actionsPortal=null;datepickerInput;stateChanges=new O;_changeDetectorRef=s(z);constructor(){this._dateAdapter,this._model.selectionChanged.subscribe(()=>{this._changeDetectorRef.markForCheck()})}ngOnChanges(e){let t=e.xPosition||e.yPosition;if(t&&!t.firstChange&&this._overlayRef){let i=this._overlayRef.getConfig().positionStrategy;i instanceof la&&(this._setConnectedPositions(i),this.opened&&this._overlayRef.updatePosition())}this.stateChanges.next(void 0)}ngOnDestroy(){this._destroyOverlay(),this.close(),this._inputStateChanges.unsubscribe(),this.stateChanges.complete()}select(e){this._model.add(e)}_selectYear(e){this.yearSelected.emit(e)}_selectMonth(e){this.monthSelected.emit(e)}_viewChanged(e){this.viewChanged.emit(e)}registerInput(e){return this.datepickerInput,this._inputStateChanges.unsubscribe(),this.datepickerInput=e,this._inputStateChanges=e.stateChanges.subscribe(()=>this.stateChanges.next(void 0)),this._model}registerActions(e){this._actionsPortal,this._actionsPortal=e,this._componentRef?.instance._assignActions(e,!0)}removeActions(e){e===this._actionsPortal&&(this._actionsPortal=null,this._componentRef?.instance._assignActions(null,!0))}open(){this._opened||this.disabled||this._componentRef?.instance._isAnimating||(this.datepickerInput,this._focusedElementBeforeOpen=It(),this._openOverlay(),this._opened=!0,this.openedStream.emit())}close(){if(!this._opened||this._componentRef?.instance._isAnimating)return;let e=this.restoreFocus&&this._focusedElementBeforeOpen&&typeof this._focusedElementBeforeOpen.focus=="function",t=()=>{this._opened&&(this._opened=!1,this.closedStream.emit())};if(this._componentRef){let{instance:i,location:a}=this._componentRef;i._animationDone.pipe(An(1)).subscribe(()=>{let o=this._document.activeElement;e&&(!o||o===this._document.activeElement||a.nativeElement.contains(o))&&this._focusedElementBeforeOpen.focus(),this._focusedElementBeforeOpen=null,this._destroyOverlay()}),i._startExitAnimation()}e?setTimeout(t):t()}_applyPendingSelection(){this._componentRef?.instance?._applyPendingSelection()}_forwardContentValues(e){e.datepicker=this,e.color=this.color,e._dialogLabelId=this.datepickerInput.getOverlayLabelId(),e._assignActions(this._actionsPortal,!1)}_openOverlay(){this._destroyOverlay();let e=this.touchUi,t=new je(Ja,this._viewContainerRef),i=this._overlayRef=pt(this._injector,new Xt({positionStrategy:e?this._getDialogStrategy():this._getDropdownStrategy(),hasBackdrop:!0,backdropClass:[e?"cdk-overlay-dark-backdrop":"mat-overlay-transparent-backdrop",this._backdropHarnessClass],direction:this._dir||"ltr",scrollStrategy:e?sa(this._injector):this._scrollStrategy(),panelClass:`mat-datepicker-${e?"dialog":"popup"}`,disableAnimations:this._animationsDisabled}));this._getCloseStream(i).subscribe(a=>{a&&a.preventDefault(),this.close()}),i.keydownEvents().subscribe(a=>{let o=a.keyCode;(o===38||o===40||o===37||o===39||o===33||o===34)&&a.preventDefault()}),this._componentRef=i.attach(t),this._forwardContentValues(this._componentRef.instance),e||we(()=>{i.updatePosition()},{injector:this._injector})}_destroyOverlay(){this._overlayRef&&(this._overlayRef.dispose(),this._overlayRef=this._componentRef=null)}_getDialogStrategy(){return Jt(this._injector).centerHorizontally().centerVertically()}_getDropdownStrategy(){let e=Zt(this._injector,this.datepickerInput.getConnectedOverlayOrigin()).withTransformOriginOn(".mat-datepicker-content").withFlexibleDimensions(!1).withViewportMargin(8).withLockedPosition();return this._setConnectedPositions(e)}_setConnectedPositions(e){let t=this.xPosition==="end"?"end":"start",i=t==="start"?"end":"start",a=this.yPosition==="above"?"bottom":"top",o=a==="top"?"bottom":"top";return e.withPositions([{originX:t,originY:o,overlayX:t,overlayY:a},{originX:t,originY:a,overlayX:t,overlayY:o},{originX:i,originY:o,overlayX:i,overlayY:a},{originX:i,originY:a,overlayX:i,overlayY:o}])}_getCloseStream(e){let t=["ctrlKey","shiftKey","metaKey"];return Be(e.backdropClick(),e.detachments(),e.keydownEvents().pipe(In(i=>i.keyCode===27&&!re(i)||this.datepickerInput&&re(i,"altKey")&&i.keyCode===38&&t.every(a=>!re(i,a)))))}static \u0275fac=function(t){return new(t||n)};static \u0275dir=F({type:n,inputs:{calendarHeaderComponent:"calendarHeaderComponent",startAt:"startAt",startView:"startView",color:"color",touchUi:[2,"touchUi","touchUi",T],disabled:[2,"disabled","disabled",T],xPosition:"xPosition",yPosition:"yPosition",restoreFocus:[2,"restoreFocus","restoreFocus",T],dateClass:"dateClass",panelClass:"panelClass",opened:[2,"opened","opened",T]},outputs:{yearSelected:"yearSelected",monthSelected:"monthSelected",viewChanged:"viewChanged",openedStream:"opened",closedStream:"closed"},features:[ie]})}return n})(),er=(()=>{class n extends Qa{static \u0275fac=(()=>{let e;return function(i){return(e||(e=Oe(n)))(i||n)}})();static \u0275cmp=k({type:n,selectors:[["mat-datepicker"]],exportAs:["matDatepicker"],features:[Z([$a,{provide:Qa,useExisting:n}]),K],decls:0,vars:0,template:function(t,i){},encapsulation:2,changeDetection:0})}return n})(),yt=class{target;targetElement;value=null;constructor(r,e){this.target=r,this.targetElement=e,this.value=this.target.value}},ho=(()=>{class n{_elementRef=s(R);_dateAdapter=s(ee,{optional:!0});_dateFormats=s(Ue,{optional:!0});_isInitialized=!1;get value(){return this._model?this._getValueFromModel(this._model.selection):this._pendingValue}set value(e){this._assignValueProgrammatically(e,!0)}_model;get disabled(){return!!this._disabled||this._parentDisabled()}set disabled(e){let t=e,i=this._elementRef.nativeElement;this._disabled!==t&&(this._disabled=t,this.stateChanges.next(void 0)),t&&this._isInitialized&&i.blur&&i.blur()}_disabled;dateChange=new b;dateInput=new b;stateChanges=new O;_onTouched=()=>{};_validatorOnChange=()=>{};_cvaOnChange=()=>{};_valueChangesSubscription=he.EMPTY;_localeSubscription=he.EMPTY;_pendingValue=null;_parseValidator=()=>this._lastValueValid?null:{matDatepickerParse:{text:this._elementRef.nativeElement.value}};_filterValidator=e=>{let t=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e.value));return!t||this._matchesFilter(t)?null:{matDatepickerFilter:!0}};_minValidator=e=>{let t=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e.value)),i=this._getMinDate();return!i||!t||this._dateAdapter.compareDate(i,t)<=0?null:{matDatepickerMin:{min:i,actual:t}}};_maxValidator=e=>{let t=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e.value)),i=this._getMaxDate();return!i||!t||this._dateAdapter.compareDate(i,t)>=0?null:{matDatepickerMax:{max:i,actual:t}}};_getValidators(){return[this._parseValidator,this._minValidator,this._maxValidator,this._filterValidator]}_registerModel(e){this._model=e,this._valueChangesSubscription.unsubscribe(),this._pendingValue&&this._assignValue(this._pendingValue),this._valueChangesSubscription=this._model.selectionChanged.subscribe(t=>{if(this._shouldHandleChangeEvent(t)){let i=this._getValueFromModel(t.selection);this._lastValueValid=this._isValidValue(i),this._cvaOnChange(i),this._onTouched(),this._formatValue(i),this.dateInput.emit(new yt(this,this._elementRef.nativeElement)),this.dateChange.emit(new yt(this,this._elementRef.nativeElement))}})}_lastValueValid=!1;constructor(){this._localeSubscription=this._dateAdapter.localeChanges.subscribe(()=>{this._assignValueProgrammatically(this.value,!0)})}ngAfterViewInit(){this._isInitialized=!0}ngOnChanges(e){uo(e,this._dateAdapter)&&this.stateChanges.next(void 0)}ngOnDestroy(){this._valueChangesSubscription.unsubscribe(),this._localeSubscription.unsubscribe(),this.stateChanges.complete()}registerOnValidatorChange(e){this._validatorOnChange=e}validate(e){return this._validator?this._validator(e):null}writeValue(e){this._assignValueProgrammatically(e,e!==this.value)}registerOnChange(e){this._cvaOnChange=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this.disabled=e}_onKeydown(e){let t=["ctrlKey","shiftKey","metaKey"];re(e,"altKey")&&e.keyCode===40&&t.every(a=>!re(e,a))&&!this._elementRef.nativeElement.readOnly&&(this._openPopup(),e.preventDefault())}_onInput(e){let t=e.target.value,i=this._lastValueValid,a=this._dateAdapter.parse(t,this._dateFormats.parse.dateInput);this._lastValueValid=this._isValidValue(a),a=this._dateAdapter.getValidDateOrNull(a);let o=!this._dateAdapter.sameDate(a,this.value);!a||o?this._cvaOnChange(a):(t&&!this.value&&this._cvaOnChange(a),i!==this._lastValueValid&&this._validatorOnChange()),o&&(this._assignValue(a),this.dateInput.emit(new yt(this,this._elementRef.nativeElement)))}_onChange(){this.dateChange.emit(new yt(this,this._elementRef.nativeElement))}_onBlur(){this.value&&this._formatValue(this.value),this._onTouched()}_formatValue(e){this._elementRef.nativeElement.value=e!=null?this._dateAdapter.format(e,this._dateFormats.display.dateInput):""}_assignValue(e){this._model?(this._assignValueToModel(e),this._pendingValue=null):this._pendingValue=e}_isValidValue(e){return!e||this._dateAdapter.isValid(e)}_parentDisabled(){return!1}_assignValueProgrammatically(e,t){e=this._dateAdapter.deserialize(e),this._lastValueValid=this._isValidValue(e),e=this._dateAdapter.getValidDateOrNull(e),this._assignValue(e),t&&this._formatValue(e)}_matchesFilter(e){let t=this._getDateFilter();return!t||t(e)}static \u0275fac=function(t){return new(t||n)};static \u0275dir=F({type:n,inputs:{value:"value",disabled:[2,"disabled","disabled",T]},outputs:{dateChange:"dateChange",dateInput:"dateInput"},features:[ie]})}return n})();function uo(n,r){let e=Object.keys(n);for(let t of e){let{previousValue:i,currentValue:a}=n[t];if(r.isDateInstance(i)&&r.isDateInstance(a)){if(!r.sameDate(i,a))return!0}else return!0}return!1}var _o={provide:Ot,useExisting:ot(()=>yi),multi:!0},go={provide:ni,useExisting:ot(()=>yi),multi:!0},yi=(()=>{class n extends ho{_formField=s(si,{optional:!0});_closedSubscription=he.EMPTY;_openedSubscription=he.EMPTY;set matDatepicker(e){e&&(this._datepicker=e,this._ariaOwns.set(e.opened?e.id:null),this._closedSubscription=e.closedStream.subscribe(()=>{this._onTouched(),this._ariaOwns.set(null)}),this._openedSubscription=e.openedStream.subscribe(()=>{this._ariaOwns.set(e.id)}),this._registerModel(e.registerInput(this)))}_datepicker;_ariaOwns=g(null);get min(){return this._min}set min(e){let t=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e));this._dateAdapter.sameDate(t,this._min)||(this._min=t,this._validatorOnChange())}_min=null;get max(){return this._max}set max(e){let t=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e));this._dateAdapter.sameDate(t,this._max)||(this._max=t,this._validatorOnChange())}_max=null;get dateFilter(){return this._dateFilter}set dateFilter(e){let t=this._matchesFilter(this.value);this._dateFilter=e,this._matchesFilter(this.value)!==t&&this._validatorOnChange()}_dateFilter;_validator=null;constructor(){super(),this._validator=gt.compose(super._getValidators())}getConnectedOverlayOrigin(){return this._formField?this._formField.getConnectedOverlayOrigin():this._elementRef}getOverlayLabelId(){return this._formField?this._formField.getLabelId():this._elementRef.nativeElement.getAttribute("aria-labelledby")}getThemePalette(){return this._formField?this._formField.color:void 0}getStartValue(){return this.value}ngOnDestroy(){super.ngOnDestroy(),this._closedSubscription.unsubscribe(),this._openedSubscription.unsubscribe()}_openPopup(){this._datepicker&&this._datepicker.open()}_getValueFromModel(e){return e}_assignValueToModel(e){this._model&&this._model.updateSelection(e,this)}_getMinDate(){return this._min}_getMaxDate(){return this._max}_getDateFilter(){return this._dateFilter}_shouldHandleChangeEvent(e){return e.source!==this}static \u0275fac=function(t){return new(t||n)};static \u0275dir=F({type:n,selectors:[["input","matDatepicker",""]],hostAttrs:[1,"mat-datepicker-input"],hostVars:6,hostBindings:function(t,i){t&1&&_("input",function(o){return i._onInput(o)})("change",function(){return i._onChange()})("blur",function(){return i._onBlur()})("keydown",function(o){return i._onKeydown(o)}),t&2&&(q("disabled",i.disabled),S("aria-haspopup",i._datepicker?"dialog":null)("aria-owns",i._ariaOwns())("min",i.min?i._dateAdapter.toIso8601(i.min):null)("max",i.max?i._dateAdapter.toIso8601(i.max):null)("data-mat-calendar",i._datepicker?i._datepicker.id:null))},inputs:{matDatepicker:"matDatepicker",min:"min",max:"max",dateFilter:[0,"matDatepickerFilter","dateFilter"]},exportAs:["matDatepickerInput"],features:[Z([_o,go,{provide:Sa,useExisting:n}]),K]})}return n})(),fo=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275dir=F({type:n,selectors:[["","matDatepickerToggleIcon",""]]})}return n})(),on=(()=>{class n{_intl=s(wt);_changeDetectorRef=s(z);_stateChanges=he.EMPTY;datepicker;tabIndex=null;ariaLabel;get disabled(){return this._disabled===void 0&&this.datepicker?this.datepicker.disabled:!!this._disabled}set disabled(e){this._disabled=e}_disabled;disableRipple=!1;_customIcon;_button;constructor(){let e=s(new Ut("tabindex"),{optional:!0}),t=Number(e);this.tabIndex=t||t===0?t:null}ngOnChanges(e){e.datepicker&&this._watchStateChanges()}ngOnDestroy(){this._stateChanges.unsubscribe()}ngAfterContentInit(){this._watchStateChanges()}_open(e){this.datepicker&&!this.disabled&&(this.datepicker.open(),e.stopPropagation())}_watchStateChanges(){let e=this.datepicker?this.datepicker.stateChanges:Ne(),t=this.datepicker&&this.datepicker.datepickerInput?this.datepicker.datepickerInput.stateChanges:Ne(),i=this.datepicker?Be(this.datepicker.openedStream,this.datepicker.closedStream):Ne();this._stateChanges.unsubscribe(),this._stateChanges=Be(this._intl.changes,e,t,i).subscribe(()=>this._changeDetectorRef.markForCheck())}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=k({type:n,selectors:[["mat-datepicker-toggle"]],contentQueries:function(t,i,a){if(t&1&&pe(a,fo,5),t&2){let o;C(o=w())&&(i._customIcon=o.first)}},viewQuery:function(t,i){if(t&1&&G(io,5),t&2){let a;C(a=w())&&(i._button=a.first)}},hostAttrs:[1,"mat-datepicker-toggle"],hostVars:8,hostBindings:function(t,i){t&1&&_("click",function(o){return i._open(o)}),t&2&&(S("tabindex",null)("data-mat-calendar",i.datepicker?i.datepicker.id:null),A("mat-datepicker-toggle-active",i.datepicker&&i.datepicker.opened)("mat-accent",i.datepicker&&i.datepicker.color==="accent")("mat-warn",i.datepicker&&i.datepicker.color==="warn"))},inputs:{datepicker:[0,"for","datepicker"],tabIndex:"tabIndex",ariaLabel:[0,"aria-label","ariaLabel"],disabled:[2,"disabled","disabled",T],disableRipple:"disableRipple"},exportAs:["matDatepickerToggle"],features:[ie],ngContentSelectors:ao,decls:4,vars:7,consts:[["button",""],["matIconButton","","type","button",3,"tabIndex","disabled","disableRipple"],["viewBox","0 0 24 24","width","24px","height","24px","fill","currentColor","focusable","false","aria-hidden","true",1,"mat-datepicker-toggle-default-icon"],["d","M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"]],template:function(t,i){t&1&&($(no),l(0,"button",1,0),f(2,ro,2,0,":svg:svg",2),N(3),c()),t&2&&(u("tabIndex",i.disabled?-1:i.tabIndex)("disabled",i.disabled)("disableRipple",i.disableRipple),S("aria-haspopup",i.datepicker?"dialog":null)("aria-label",i.ariaLabel||i._intl.openCalendarLabel)("aria-expanded",i.datepicker?i.datepicker.opened:null),d(2),v(i._customIcon?-1:2))},dependencies:[Je],styles:[`.mat-datepicker-toggle {
  pointer-events: auto;
  color: var(--mat-datepicker-toggle-icon-color, var(--mat-sys-on-surface-variant));
}
.mat-datepicker-toggle button {
  color: inherit;
}

.mat-datepicker-toggle-active {
  color: var(--mat-datepicker-toggle-active-state-icon-color, var(--mat-sys-primary));
}

@media (forced-colors: active) {
  .mat-datepicker-toggle-default-icon {
    color: CanvasText;
  }
}
`],encapsulation:2,changeDetection:0})}return n})();var tr=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=ge({type:n});static \u0275inj=ue({providers:[wt],imports:[Me,Hi,Zn,Tt,Ja,on,Za,Ie,ra]})}return n})();var bo=/^\d{4}-\d{2}-\d{2}(?:T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|(?:(?:\+|-)\d{2}:\d{2}))?)?$/,yo=/^(\d?\d)[:.](\d?\d)(?:[:.](\d?\d))?\s*(AM|PM)?$/i;function sn(n,r){let e=Array(n);for(let t=0;t<n;t++)e[t]=r(t);return e}var Co=(()=>{class n extends ee{_matDateLocale=s(qi,{optional:!0});constructor(){super();let e=s(qi,{optional:!0});e!==void 0&&(this._matDateLocale=e),super.setLocale(this._matDateLocale)}getYear(e){return e.getFullYear()}getMonth(e){return e.getMonth()}getDate(e){return e.getDate()}getDayOfWeek(e){return e.getDay()}getMonthNames(e){let t=new Intl.DateTimeFormat(this.locale,{month:e,timeZone:"utc"});return sn(12,i=>this._format(t,new Date(2017,i,1)))}getDateNames(){let e=new Intl.DateTimeFormat(this.locale,{day:"numeric",timeZone:"utc"});return sn(31,t=>this._format(e,new Date(2017,0,t+1)))}getDayOfWeekNames(e){let t=new Intl.DateTimeFormat(this.locale,{weekday:e,timeZone:"utc"});return sn(7,i=>this._format(t,new Date(2017,0,i+1)))}getYearName(e){let t=new Intl.DateTimeFormat(this.locale,{year:"numeric",timeZone:"utc"});return this._format(t,e)}getFirstDayOfWeek(){if(typeof Intl<"u"&&Intl.Locale){let e=new Intl.Locale(this.locale),t=(e.getWeekInfo?.()||e.weekInfo)?.firstDay??0;return t===7?0:t}return 0}getNumDaysInMonth(e){return this.getDate(this._createDateWithOverflow(this.getYear(e),this.getMonth(e)+1,0))}clone(e){return new Date(e.getTime())}createDate(e,t,i){let a=this._createDateWithOverflow(e,t,i);return a.getMonth()!=t,a}today(){return new Date}parse(e,t){return typeof e=="number"?new Date(e):e?new Date(Date.parse(e)):null}format(e,t){if(!this.isValid(e))throw Error("NativeDateAdapter: Cannot format invalid date.");let i=new Intl.DateTimeFormat(this.locale,Se(B({},t),{timeZone:"utc"}));return this._format(i,e)}addCalendarYears(e,t){return this.addCalendarMonths(e,t*12)}addCalendarMonths(e,t){let i=this._createDateWithOverflow(this.getYear(e),this.getMonth(e)+t,this.getDate(e));return this.getMonth(i)!=((this.getMonth(e)+t)%12+12)%12&&(i=this._createDateWithOverflow(this.getYear(i),this.getMonth(i),0)),i}addCalendarDays(e,t){return this._createDateWithOverflow(this.getYear(e),this.getMonth(e),this.getDate(e)+t)}toIso8601(e){return[e.getUTCFullYear(),this._2digit(e.getUTCMonth()+1),this._2digit(e.getUTCDate())].join("-")}deserialize(e){if(typeof e=="string"){if(!e)return null;if(bo.test(e)){let t=new Date(e);if(this.isValid(t))return t}}return super.deserialize(e)}isDateInstance(e){return e instanceof Date}isValid(e){return!isNaN(e.getTime())}invalid(){return new Date(NaN)}setTime(e,t,i,a){let o=this.clone(e);return o.setHours(t,i,a,0),o}getHours(e){return e.getHours()}getMinutes(e){return e.getMinutes()}getSeconds(e){return e.getSeconds()}parseTime(e,t){if(typeof e!="string")return e instanceof Date?new Date(e.getTime()):null;let i=e.trim();if(i.length===0)return null;let a=this._parseTimeString(i);if(a===null){let o=i.replace(/[^0-9:(AM|PM)]/gi,"").trim();o.length>0&&(a=this._parseTimeString(o))}return a||this.invalid()}addSeconds(e,t){return new Date(e.getTime()+t*1e3)}_createDateWithOverflow(e,t,i){let a=new Date;return a.setFullYear(e,t,i),a.setHours(0,0,0,0),a}_2digit(e){return("00"+e).slice(-2)}_format(e,t){let i=new Date;return i.setUTCFullYear(t.getFullYear(),t.getMonth(),t.getDate()),i.setUTCHours(t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds()),e.format(i)}_parseTimeString(e){let t=e.toUpperCase().match(yo);if(t){let i=parseInt(t[1]),a=parseInt(t[2]),o=t[3]==null?void 0:parseInt(t[3]),m=t[4];if(i===12?i=m==="AM"?0:i:m==="PM"&&(i+=12),ln(i,0,23)&&ln(a,0,59)&&(o==null||ln(o,0,59)))return this.setTime(this.today(),i,a,o||0)}return null}static \u0275fac=function(t){return new(t||n)};static \u0275prov=se({token:n,factory:n.\u0275fac})}return n})();function ln(n,r,e){return!isNaN(n)&&n>=r&&n<=e}var wo={parse:{dateInput:null,timeInput:null},display:{dateInput:{year:"numeric",month:"numeric",day:"numeric"},timeInput:{hour:"numeric",minute:"numeric"},monthYearLabel:{year:"numeric",month:"short"},dateA11yLabel:{year:"numeric",month:"long",day:"numeric"},monthYearA11yLabel:{year:"numeric",month:"long"},timeOptionLabel:{hour:"numeric",minute:"numeric"}}};function ir(n=wo){return[{provide:ee,useClass:Co},{provide:Ue,useValue:n}]}var Mo=["*",[["mat-chip-avatar"],["","matChipAvatar",""]],[["mat-chip-trailing-icon"],["","matChipRemove",""],["","matChipTrailingIcon",""]]],ko=["*","mat-chip-avatar, [matChipAvatar]","mat-chip-trailing-icon,[matChipRemove],[matChipTrailingIcon]"];function So(n,r){n&1&&(l(0,"span",3),N(1,1),c())}function Eo(n,r){n&1&&(l(0,"span",6),N(1,2),c())}var Io=`.mdc-evolution-chip,
.mdc-evolution-chip__cell,
.mdc-evolution-chip__action {
  display: inline-flex;
  align-items: center;
}

.mdc-evolution-chip {
  position: relative;
  max-width: 100%;
}

.mdc-evolution-chip__cell,
.mdc-evolution-chip__action {
  height: 100%;
}

.mdc-evolution-chip__cell--primary {
  flex-basis: 100%;
  overflow-x: hidden;
}

.mdc-evolution-chip__cell--trailing {
  flex: 1 0 auto;
}

.mdc-evolution-chip__action {
  align-items: center;
  background: none;
  border: none;
  box-sizing: content-box;
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  outline: none;
  padding: 0;
  text-decoration: none;
  color: inherit;
}

.mdc-evolution-chip__action--presentational {
  cursor: auto;
}

.mdc-evolution-chip--disabled,
.mdc-evolution-chip__action:disabled {
  pointer-events: none;
}
@media (forced-colors: active) {
  .mdc-evolution-chip--disabled,
  .mdc-evolution-chip__action:disabled {
    forced-color-adjust: none;
  }
}

.mdc-evolution-chip__action--primary {
  font: inherit;
  letter-spacing: inherit;
  white-space: inherit;
  overflow-x: hidden;
}
.mat-mdc-standard-chip .mdc-evolution-chip__action--primary::before {
  border-width: var(--mat-chip-outline-width, 1px);
  border-radius: var(--mat-chip-container-shape-radius, 8px);
  box-sizing: border-box;
  content: "";
  height: 100%;
  left: 0;
  position: absolute;
  pointer-events: none;
  top: 0;
  width: 100%;
  z-index: 1;
  border-style: solid;
}
.mat-mdc-standard-chip .mdc-evolution-chip__action--primary {
  padding-left: 12px;
  padding-right: 12px;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 12px;
}
[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary {
  padding-left: 12px;
  padding-right: 0;
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__action--primary::before {
  border-color: var(--mat-chip-outline-color, var(--mat-sys-outline));
}
.mdc-evolution-chip__action--primary:not(.mdc-evolution-chip__action--presentational):not(.mdc-ripple-upgraded):focus::before {
  border-color: var(--mat-chip-focus-outline-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__action--primary::before {
  border-color: var(--mat-chip-disabled-outline-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-standard-chip.mdc-evolution-chip--selected .mdc-evolution-chip__action--primary::before {
  border-width: var(--mat-chip-flat-selected-outline-width, 0);
}
.mat-mdc-basic-chip .mdc-evolution-chip__action--primary {
  font: inherit;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 12px;
}
[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__action--primary {
  padding-left: 12px;
  padding-right: 0;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 12px;
  padding-right: 0;
}
[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 12px;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-leading-action.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 0;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 0;
}
[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 0;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 12px;
}
[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary {
  padding-left: 12px;
  padding-right: 0;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 0;
}
[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 0;
}

.mdc-evolution-chip__action--secondary {
  position: relative;
  overflow: visible;
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__action--secondary {
  color: var(--mat-chip-with-trailing-icon-trailing-icon-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__action--secondary {
  color: var(--mat-chip-with-trailing-icon-disabled-trailing-icon-color, var(--mat-sys-on-surface));
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--secondary {
  padding-left: 8px;
  padding-right: 8px;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--secondary {
  padding-left: 8px;
  padding-right: 8px;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--secondary {
  padding-left: 8px;
  padding-right: 8px;
}
[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--secondary {
  padding-left: 8px;
  padding-right: 8px;
}

.mdc-evolution-chip__text-label {
  -webkit-user-select: none;
  user-select: none;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.mat-mdc-standard-chip .mdc-evolution-chip__text-label {
  font-family: var(--mat-chip-label-text-font, var(--mat-sys-label-large-font));
  line-height: var(--mat-chip-label-text-line-height, var(--mat-sys-label-large-line-height));
  font-size: var(--mat-chip-label-text-size, var(--mat-sys-label-large-size));
  font-weight: var(--mat-chip-label-text-weight, var(--mat-sys-label-large-weight));
  letter-spacing: var(--mat-chip-label-text-tracking, var(--mat-sys-label-large-tracking));
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__text-label {
  color: var(--mat-chip-label-text-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-standard-chip.mdc-evolution-chip--selected:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__text-label {
  color: var(--mat-chip-selected-label-text-color, var(--mat-sys-on-secondary-container));
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__text-label, .mat-mdc-standard-chip.mdc-evolution-chip--selected.mdc-evolution-chip--disabled .mdc-evolution-chip__text-label {
  color: var(--mat-chip-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}

.mdc-evolution-chip__graphic {
  align-items: center;
  display: inline-flex;
  justify-content: center;
  overflow: hidden;
  pointer-events: none;
  position: relative;
  flex: 1 0 auto;
}
.mat-mdc-standard-chip .mdc-evolution-chip__graphic {
  width: var(--mat-chip-with-avatar-avatar-size, 24px);
  height: var(--mat-chip-with-avatar-avatar-size, 24px);
  font-size: var(--mat-chip-with-avatar-avatar-size, 24px);
}
.mdc-evolution-chip--selecting .mdc-evolution-chip__graphic {
  transition: width 150ms 0ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mdc-evolution-chip--selectable:not(.mdc-evolution-chip--selected):not(.mdc-evolution-chip--with-primary-icon) .mdc-evolution-chip__graphic {
  width: 0;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__graphic {
  padding-left: 6px;
  padding-right: 6px;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__graphic {
  padding-left: 4px;
  padding-right: 8px;
}
[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__graphic {
  padding-left: 8px;
  padding-right: 4px;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__graphic {
  padding-left: 6px;
  padding-right: 6px;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__graphic {
  padding-left: 4px;
  padding-right: 8px;
}
[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__graphic {
  padding-left: 8px;
  padding-right: 4px;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__graphic {
  padding-left: 0;
}

.mdc-evolution-chip__checkmark {
  position: absolute;
  opacity: 0;
  top: 50%;
  left: 50%;
  height: 20px;
  width: 20px;
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__checkmark {
  color: var(--mat-chip-with-icon-selected-icon-color, var(--mat-sys-on-secondary-container));
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__checkmark {
  color: var(--mat-chip-with-icon-disabled-icon-color, var(--mat-sys-on-surface));
}
.mdc-evolution-chip--selecting .mdc-evolution-chip__checkmark {
  transition: transform 150ms 0ms cubic-bezier(0.4, 0, 0.2, 1);
  transform: translate(-75%, -50%);
}
.mdc-evolution-chip--selected .mdc-evolution-chip__checkmark {
  transform: translate(-50%, -50%);
  opacity: 1;
}

.mdc-evolution-chip__checkmark-svg {
  display: block;
}

.mdc-evolution-chip__checkmark-path {
  stroke-width: 2px;
  stroke-dasharray: 29.7833385;
  stroke-dashoffset: 29.7833385;
  stroke: currentColor;
}
.mdc-evolution-chip--selecting .mdc-evolution-chip__checkmark-path {
  transition: stroke-dashoffset 150ms 45ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mdc-evolution-chip--selected .mdc-evolution-chip__checkmark-path {
  stroke-dashoffset: 0;
}
@media (forced-colors: active) {
  .mdc-evolution-chip__checkmark-path {
    stroke: CanvasText !important;
  }
}

.mat-mdc-standard-chip .mdc-evolution-chip__icon--trailing {
  height: 18px;
  width: 18px;
  font-size: 18px;
}
.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing.mat-mdc-chip-remove {
  opacity: calc(var(--mat-chip-trailing-action-opacity, 1) * var(--mat-chip-with-trailing-icon-disabled-trailing-icon-opacity, 0.38));
}
.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing.mat-mdc-chip-remove:focus {
  opacity: calc(var(--mat-chip-trailing-action-focus-opacity, 1) * var(--mat-chip-with-trailing-icon-disabled-trailing-icon-opacity, 0.38));
}

.mat-mdc-standard-chip {
  border-radius: var(--mat-chip-container-shape-radius, 8px);
  height: var(--mat-chip-container-height, 32px);
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) {
  background-color: var(--mat-chip-elevated-container-color, transparent);
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled {
  background-color: var(--mat-chip-elevated-disabled-container-color);
}
.mat-mdc-standard-chip.mdc-evolution-chip--selected:not(.mdc-evolution-chip--disabled) {
  background-color: var(--mat-chip-elevated-selected-container-color, var(--mat-sys-secondary-container));
}
.mat-mdc-standard-chip.mdc-evolution-chip--selected.mdc-evolution-chip--disabled {
  background-color: var(--mat-chip-flat-disabled-selected-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
@media (forced-colors: active) {
  .mat-mdc-standard-chip {
    outline: solid 1px;
  }
}

.mat-mdc-standard-chip .mdc-evolution-chip__icon--primary {
  border-radius: var(--mat-chip-with-avatar-avatar-shape-radius, 24px);
  width: var(--mat-chip-with-icon-icon-size, 18px);
  height: var(--mat-chip-with-icon-icon-size, 18px);
  font-size: var(--mat-chip-with-icon-icon-size, 18px);
}
.mdc-evolution-chip--selected .mdc-evolution-chip__icon--primary {
  opacity: 0;
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__icon--primary {
  color: var(--mat-chip-with-icon-icon-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--primary {
  color: var(--mat-chip-with-icon-disabled-icon-color, var(--mat-sys-on-surface));
}

.mat-mdc-chip-highlighted {
  --mat-chip-with-icon-icon-color: var(--mat-chip-with-icon-selected-icon-color, var(--mat-sys-on-secondary-container));
  --mat-chip-elevated-container-color: var(--mat-chip-elevated-selected-container-color, var(--mat-sys-secondary-container));
  --mat-chip-label-text-color: var(--mat-chip-selected-label-text-color, var(--mat-sys-on-secondary-container));
  --mat-chip-outline-width: var(--mat-chip-flat-selected-outline-width, 0);
}

.mat-mdc-chip-focus-overlay {
  background: var(--mat-chip-focus-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-chip-selected .mat-mdc-chip-focus-overlay, .mat-mdc-chip-highlighted .mat-mdc-chip-focus-overlay {
  background: var(--mat-chip-selected-focus-state-layer-color, var(--mat-sys-on-secondary-container));
}
.mat-mdc-chip:hover .mat-mdc-chip-focus-overlay {
  background: var(--mat-chip-hover-state-layer-color, var(--mat-sys-on-surface-variant));
  opacity: var(--mat-chip-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-chip-focus-overlay .mat-mdc-chip-selected:hover, .mat-mdc-chip-highlighted:hover .mat-mdc-chip-focus-overlay {
  background: var(--mat-chip-selected-hover-state-layer-color, var(--mat-sys-on-secondary-container));
  opacity: var(--mat-chip-selected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-chip.cdk-focused .mat-mdc-chip-focus-overlay {
  background: var(--mat-chip-focus-state-layer-color, var(--mat-sys-on-surface-variant));
  opacity: var(--mat-chip-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-chip-selected.cdk-focused .mat-mdc-chip-focus-overlay, .mat-mdc-chip-highlighted.cdk-focused .mat-mdc-chip-focus-overlay {
  background: var(--mat-chip-selected-focus-state-layer-color, var(--mat-sys-on-secondary-container));
  opacity: var(--mat-chip-selected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}

.mdc-evolution-chip--disabled:not(.mdc-evolution-chip--selected) .mat-mdc-chip-avatar {
  opacity: var(--mat-chip-with-avatar-disabled-avatar-opacity, 0.38);
}

.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing {
  opacity: var(--mat-chip-with-trailing-icon-disabled-trailing-icon-opacity, 0.38);
}

.mdc-evolution-chip--disabled.mdc-evolution-chip--selected .mdc-evolution-chip__checkmark {
  opacity: var(--mat-chip-with-icon-disabled-icon-opacity, 0.38);
}

.mat-mdc-standard-chip.mdc-evolution-chip--disabled {
  opacity: var(--mat-chip-disabled-container-opacity, 1);
}
.mat-mdc-standard-chip.mdc-evolution-chip--selected .mdc-evolution-chip__icon--trailing, .mat-mdc-standard-chip.mat-mdc-chip-highlighted .mdc-evolution-chip__icon--trailing {
  color: var(--mat-chip-selected-trailing-icon-color, var(--mat-sys-on-secondary-container));
}
.mat-mdc-standard-chip.mdc-evolution-chip--selected.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing, .mat-mdc-standard-chip.mat-mdc-chip-highlighted.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing {
  color: var(--mat-chip-selected-disabled-trailing-icon-color, var(--mat-sys-on-surface));
}

.mat-mdc-chip-edit, .mat-mdc-chip-remove {
  opacity: var(--mat-chip-trailing-action-opacity, 1);
}
.mat-mdc-chip-edit:focus, .mat-mdc-chip-remove:focus {
  opacity: var(--mat-chip-trailing-action-focus-opacity, 1);
}
.mat-mdc-chip-edit::after, .mat-mdc-chip-remove::after {
  background-color: var(--mat-chip-trailing-action-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-chip-edit:hover::after, .mat-mdc-chip-remove:hover::after {
  opacity: calc(var(--mat-chip-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity)) + var(--mat-chip-trailing-action-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity)));
}
.mat-mdc-chip-edit:focus::after, .mat-mdc-chip-remove:focus::after {
  opacity: calc(var(--mat-chip-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity)) + var(--mat-chip-trailing-action-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity)));
}

.mat-mdc-chip-selected .mat-mdc-chip-remove::after,
.mat-mdc-chip-highlighted .mat-mdc-chip-remove::after {
  background-color: var(--mat-chip-selected-trailing-action-state-layer-color, var(--mat-sys-on-secondary-container));
}

.mat-mdc-chip.cdk-focused .mat-mdc-chip-edit:focus::after, .mat-mdc-chip.cdk-focused .mat-mdc-chip-remove:focus::after {
  opacity: calc(var(--mat-chip-selected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity)) + var(--mat-chip-trailing-action-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity)));
}
.mat-mdc-chip.cdk-focused .mat-mdc-chip-edit:hover::after, .mat-mdc-chip.cdk-focused .mat-mdc-chip-remove:hover::after {
  opacity: calc(var(--mat-chip-selected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity)) + var(--mat-chip-trailing-action-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity)));
}

.mat-mdc-standard-chip {
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-standard-chip .mat-mdc-chip-graphic,
.mat-mdc-standard-chip .mat-mdc-chip-trailing-icon {
  box-sizing: content-box;
}
.mat-mdc-standard-chip._mat-animation-noopable,
.mat-mdc-standard-chip._mat-animation-noopable .mdc-evolution-chip__graphic,
.mat-mdc-standard-chip._mat-animation-noopable .mdc-evolution-chip__checkmark,
.mat-mdc-standard-chip._mat-animation-noopable .mdc-evolution-chip__checkmark-path {
  transition-duration: 1ms;
  animation-duration: 1ms;
}

.mat-mdc-chip-focus-overlay {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  opacity: 0;
  border-radius: inherit;
  transition: opacity 150ms linear;
}
._mat-animation-noopable .mat-mdc-chip-focus-overlay {
  transition: none;
}
.mat-mdc-basic-chip .mat-mdc-chip-focus-overlay {
  display: none;
}

.mat-mdc-chip .mat-ripple.mat-mdc-chip-ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: inherit;
}

.mat-mdc-chip-avatar {
  text-align: center;
  line-height: 1;
  color: var(--mat-chip-with-icon-icon-color, currentColor);
}

.mat-mdc-chip {
  position: relative;
  z-index: 0;
}

.mat-mdc-chip-action-label {
  text-align: left;
  z-index: 1;
}
[dir=rtl] .mat-mdc-chip-action-label {
  text-align: right;
}
.mat-mdc-chip.mdc-evolution-chip--with-trailing-action .mat-mdc-chip-action-label {
  position: relative;
}
.mat-mdc-chip-action-label .mat-mdc-chip-primary-focus-indicator {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  pointer-events: none;
}
.mat-mdc-chip-action-label .mat-focus-indicator::before {
  margin: calc(calc(var(--mat-focus-indicator-border-width, 3px) + 2px) * -1);
}

.mat-mdc-chip-edit::before, .mat-mdc-chip-remove::before {
  margin: calc(var(--mat-focus-indicator-border-width, 3px) * -1);
  left: 8px;
  right: 8px;
}
.mat-mdc-chip-edit::after, .mat-mdc-chip-remove::after {
  content: "";
  display: block;
  opacity: 0;
  position: absolute;
  top: -3px;
  bottom: -3px;
  left: 5px;
  right: 5px;
  border-radius: 50%;
  box-sizing: border-box;
  padding: 12px;
  margin: -12px;
  background-clip: content-box;
}
.mat-mdc-chip-edit .mat-icon, .mat-mdc-chip-remove .mat-icon {
  width: 18px;
  height: 18px;
  font-size: 18px;
  box-sizing: content-box;
}

.mat-chip-edit-input {
  cursor: text;
  display: inline-block;
  color: inherit;
  outline: 0;
}

@media (forced-colors: active) {
  .mat-mdc-chip-selected:not(.mat-mdc-chip-multiple) {
    outline-width: 3px;
  }
}

.mat-mdc-chip-action:focus-visible .mat-focus-indicator::before {
  content: "";
}

.mdc-evolution-chip__icon, .mat-mdc-chip-edit .mat-icon, .mat-mdc-chip-remove .mat-icon {
  min-height: fit-content;
}

img.mdc-evolution-chip__icon {
  min-height: 0;
}
`,Ao=[[["","matChipEdit",""]],[["mat-chip-avatar"],["","matChipAvatar",""]],[["","matChipEditInput",""]],"*",[["mat-chip-trailing-icon"],["","matChipRemove",""],["","matChipTrailingIcon",""]]],To=["[matChipEdit]","mat-chip-avatar, [matChipAvatar]","[matChipEditInput]","*","mat-chip-trailing-icon,[matChipRemove],[matChipTrailingIcon]"];function Oo(n,r){n&1&&E(0,"span",0)}function Fo(n,r){n&1&&(l(0,"span",1),N(1),c())}function Po(n,r){n&1&&(l(0,"span",3),N(1,1),c())}function Ro(n,r){n&1&&N(0,2)}function Vo(n,r){n&1&&E(0,"span",7)}function Lo(n,r){if(n&1&&f(0,Ro,1,0)(1,Vo,1,0,"span",7),n&2){let e=h();v(e.contentEditInput?0:1)}}function No(n,r){n&1&&N(0,3)}function Bo(n,r){n&1&&(l(0,"span",6),N(1,4),c())}var or=["*"],zo=`.mat-mdc-chip-set {
  display: flex;
}
.mat-mdc-chip-set:focus {
  outline: none;
}
.mat-mdc-chip-set .mdc-evolution-chip-set__chips {
  min-width: 100%;
  margin-left: -8px;
  margin-right: 0;
}
.mat-mdc-chip-set .mdc-evolution-chip {
  margin: 4px 0 4px 8px;
}
[dir=rtl] .mat-mdc-chip-set .mdc-evolution-chip-set__chips {
  margin-left: 0;
  margin-right: -8px;
}
[dir=rtl] .mat-mdc-chip-set .mdc-evolution-chip {
  margin-left: 0;
  margin-right: 8px;
}

.mdc-evolution-chip-set__chips {
  display: flex;
  flex-flow: wrap;
  min-width: 0;
}

.mat-mdc-chip-set-stacked {
  flex-direction: column;
  align-items: flex-start;
}
.mat-mdc-chip-set-stacked .mat-mdc-chip {
  width: 100%;
}
.mat-mdc-chip-set-stacked .mdc-evolution-chip__graphic {
  flex-grow: 0;
}
.mat-mdc-chip-set-stacked .mdc-evolution-chip__action--primary {
  flex-basis: 100%;
  justify-content: start;
}

input.mat-mdc-chip-input {
  flex: 1 0 150px;
  margin-left: 8px;
}
[dir=rtl] input.mat-mdc-chip-input {
  margin-left: 0;
  margin-right: 8px;
}
.mat-mdc-form-field:not(.mat-form-field-hide-placeholder) input.mat-mdc-chip-input::placeholder {
  opacity: 1;
}
.mat-mdc-form-field:not(.mat-form-field-hide-placeholder) input.mat-mdc-chip-input::-moz-placeholder {
  opacity: 1;
}
.mat-mdc-form-field:not(.mat-form-field-hide-placeholder) input.mat-mdc-chip-input::-webkit-input-placeholder {
  opacity: 1;
}
.mat-mdc-form-field:not(.mat-form-field-hide-placeholder) input.mat-mdc-chip-input:-ms-input-placeholder {
  opacity: 1;
}
.mat-mdc-chip-set + input.mat-mdc-chip-input {
  margin-left: 0;
  margin-right: 0;
}
`,sr=new L("mat-chips-default-options",{providedIn:"root",factory:()=>({separatorKeyCodes:[13]})}),nr=new L("MatChipAvatar"),ar=new L("MatChipTrailingIcon"),rr=new L("MatChipEdit"),dn=new L("MatChipRemove"),hn=new L("MatChip"),lr=(()=>{class n{_elementRef=s(R);_parentChip=s(hn);_isPrimary=!0;_isLeading=!1;get disabled(){return this._disabled||this._parentChip?.disabled||!1}set disabled(e){this._disabled=e}_disabled=!1;tabIndex=-1;_allowFocusWhenDisabled=!1;_getDisabledAttribute(){return this.disabled&&!this._allowFocusWhenDisabled?"":null}constructor(){s(fe).load(Ve),this._elementRef.nativeElement.nodeName==="BUTTON"&&this._elementRef.nativeElement.setAttribute("type","button")}focus(){this._elementRef.nativeElement.focus()}static \u0275fac=function(t){return new(t||n)};static \u0275dir=F({type:n,selectors:[["","matChipContent",""]],hostAttrs:[1,"mat-mdc-chip-action","mdc-evolution-chip__action","mdc-evolution-chip__action--presentational"],hostVars:8,hostBindings:function(t,i){t&2&&(S("disabled",i._getDisabledAttribute())("aria-disabled",i.disabled),A("mdc-evolution-chip__action--primary",i._isPrimary)("mdc-evolution-chip__action--secondary",!i._isPrimary)("mdc-evolution-chip__action--trailing",!i._isPrimary&&!i._isLeading))},inputs:{disabled:[2,"disabled","disabled",T],tabIndex:[2,"tabIndex","tabIndex",e=>e==null?-1:Ze(e)],_allowFocusWhenDisabled:"_allowFocusWhenDisabled"}})}return n})(),un=(()=>{class n extends lr{_getTabindex(){return this.disabled&&!this._allowFocusWhenDisabled?null:this.tabIndex.toString()}_handleClick(e){!this.disabled&&this._isPrimary&&(e.preventDefault(),this._parentChip._handlePrimaryActionInteraction())}_handleKeydown(e){(e.keyCode===13||e.keyCode===32)&&!this.disabled&&this._isPrimary&&!this._parentChip._isEditing&&(e.preventDefault(),this._parentChip._handlePrimaryActionInteraction())}static \u0275fac=(()=>{let e;return function(i){return(e||(e=Oe(n)))(i||n)}})();static \u0275dir=F({type:n,selectors:[["","matChipAction",""]],hostVars:3,hostBindings:function(t,i){t&1&&_("click",function(o){return i._handleClick(o)})("keydown",function(o){return i._handleKeydown(o)}),t&2&&(S("tabindex",i._getTabindex()),A("mdc-evolution-chip__action--presentational",!1))},features:[K]})}return n})();var cr=(()=>{class n extends un{_isPrimary=!1;_handleClick(e){this.disabled||(e.stopPropagation(),e.preventDefault(),this._parentChip.remove())}_handleKeydown(e){(e.keyCode===13||e.keyCode===32)&&!this.disabled&&(e.stopPropagation(),e.preventDefault(),this._parentChip.remove())}static \u0275fac=(()=>{let e;return function(i){return(e||(e=Oe(n)))(i||n)}})();static \u0275dir=F({type:n,selectors:[["","matChipRemove",""]],hostAttrs:["role","button",1,"mat-mdc-chip-remove","mat-mdc-chip-trailing-icon","mat-focus-indicator","mdc-evolution-chip__icon","mdc-evolution-chip__icon--trailing"],hostVars:1,hostBindings:function(t,i){t&2&&S("aria-hidden",null)},features:[Z([{provide:dn,useExisting:n}]),K]})}return n})(),pn=(()=>{class n{_changeDetectorRef=s(z);_elementRef=s(R);_tagName=s(jn);_ngZone=s(Ce);_focusMonitor=s(Ye);_globalRippleOptions=s(ia,{optional:!0});_document=s(Te);_onFocus=new O;_onBlur=new O;_isBasicChip=!1;role=null;_hasFocusInternal=!1;_pendingFocus=!1;_actionChanges;_animationsDisabled=oe();_allLeadingIcons;_allTrailingIcons;_allEditIcons;_allRemoveIcons;_hasFocus(){return this._hasFocusInternal}id=s(ce).getId("mat-mdc-chip-");ariaLabel=null;ariaDescription=null;_chipListDisabled=!1;_hadFocusOnRemove=!1;_textElement;get value(){return this._value!==void 0?this._value:this._textElement.textContent.trim()}set value(e){this._value=e}_value;color;removable=!0;highlighted=!1;disableRipple=!1;get disabled(){return this._disabled||this._chipListDisabled}set disabled(e){this._disabled=e}_disabled=!1;removed=new b;destroyed=new b;basicChipAttrName="mat-basic-chip";leadingIcon;editIcon;trailingIcon;removeIcon;primaryAction;_rippleLoader=s(na);_injector=s(le);constructor(){let e=s(fe);e.load(Ve),e.load(ze),this._monitorFocus(),this._rippleLoader?.configureRipple(this._elementRef.nativeElement,{className:"mat-mdc-chip-ripple",disabled:this._isRippleDisabled()})}ngOnInit(){this._isBasicChip=this._elementRef.nativeElement.hasAttribute(this.basicChipAttrName)||this._tagName.toLowerCase()===this.basicChipAttrName}ngAfterViewInit(){this._textElement=this._elementRef.nativeElement.querySelector(".mat-mdc-chip-action-label"),this._pendingFocus&&(this._pendingFocus=!1,this.focus())}ngAfterContentInit(){this._actionChanges=Be(this._allLeadingIcons.changes,this._allTrailingIcons.changes,this._allEditIcons.changes,this._allRemoveIcons.changes).subscribe(()=>this._changeDetectorRef.markForCheck())}ngDoCheck(){this._rippleLoader.setDisabled(this._elementRef.nativeElement,this._isRippleDisabled())}ngOnDestroy(){this._focusMonitor.stopMonitoring(this._elementRef),this._rippleLoader?.destroyRipple(this._elementRef.nativeElement),this._actionChanges?.unsubscribe(),this.destroyed.emit({chip:this}),this.destroyed.complete()}remove(){this.removable&&(this._hadFocusOnRemove=this._hasFocus(),this.removed.emit({chip:this}))}_isRippleDisabled(){return this.disabled||this.disableRipple||this._animationsDisabled||this._isBasicChip||!this._hasInteractiveActions()||!!this._globalRippleOptions?.disabled}_hasTrailingIcon(){return!!(this.trailingIcon||this.removeIcon)}_handleKeydown(e){(e.keyCode===8&&!e.repeat||e.keyCode===46)&&(e.preventDefault(),this.remove())}focus(){this.disabled||(this.primaryAction?this.primaryAction.focus():this._pendingFocus=!0)}_getSourceAction(e){return this._getActions().find(t=>{let i=t._elementRef.nativeElement;return i===e||i.contains(e)})}_getActions(){let e=[];return this.editIcon&&e.push(this.editIcon),this.primaryAction&&e.push(this.primaryAction),this.removeIcon&&e.push(this.removeIcon),e}_handlePrimaryActionInteraction(){}_hasInteractiveActions(){return this._getActions().length>0}_edit(e){}_monitorFocus(){this._focusMonitor.monitor(this._elementRef,!0).subscribe(e=>{let t=e!==null;t!==this._hasFocusInternal&&(this._hasFocusInternal=t,t?this._onFocus.next({chip:this}):(this._changeDetectorRef.markForCheck(),setTimeout(()=>this._ngZone.run(()=>this._onBlur.next({chip:this})))))})}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=k({type:n,selectors:[["mat-basic-chip"],["","mat-basic-chip",""],["mat-chip"],["","mat-chip",""]],contentQueries:function(t,i,a){if(t&1&&pe(a,nr,5)(a,rr,5)(a,ar,5)(a,dn,5)(a,nr,5)(a,ar,5)(a,rr,5)(a,dn,5),t&2){let o;C(o=w())&&(i.leadingIcon=o.first),C(o=w())&&(i.editIcon=o.first),C(o=w())&&(i.trailingIcon=o.first),C(o=w())&&(i.removeIcon=o.first),C(o=w())&&(i._allLeadingIcons=o),C(o=w())&&(i._allTrailingIcons=o),C(o=w())&&(i._allEditIcons=o),C(o=w())&&(i._allRemoveIcons=o)}},viewQuery:function(t,i){if(t&1&&G(un,5),t&2){let a;C(a=w())&&(i.primaryAction=a.first)}},hostAttrs:[1,"mat-mdc-chip"],hostVars:31,hostBindings:function(t,i){t&1&&_("keydown",function(o){return i._handleKeydown(o)}),t&2&&(q("id",i.id),S("role",i.role)("aria-label",i.ariaLabel),X("mat-"+(i.color||"primary")),A("mdc-evolution-chip",!i._isBasicChip)("mdc-evolution-chip--disabled",i.disabled)("mdc-evolution-chip--with-trailing-action",i._hasTrailingIcon())("mdc-evolution-chip--with-primary-graphic",i.leadingIcon)("mdc-evolution-chip--with-primary-icon",i.leadingIcon)("mdc-evolution-chip--with-avatar",i.leadingIcon)("mat-mdc-chip-with-avatar",i.leadingIcon)("mat-mdc-chip-highlighted",i.highlighted)("mat-mdc-chip-disabled",i.disabled)("mat-mdc-basic-chip",i._isBasicChip)("mat-mdc-standard-chip",!i._isBasicChip)("mat-mdc-chip-with-trailing-icon",i._hasTrailingIcon())("_mat-animation-noopable",i._animationsDisabled))},inputs:{role:"role",id:"id",ariaLabel:[0,"aria-label","ariaLabel"],ariaDescription:[0,"aria-description","ariaDescription"],value:"value",color:"color",removable:[2,"removable","removable",T],highlighted:[2,"highlighted","highlighted",T],disableRipple:[2,"disableRipple","disableRipple",T],disabled:[2,"disabled","disabled",T]},outputs:{removed:"removed",destroyed:"destroyed"},exportAs:["matChip"],features:[Z([{provide:hn,useExisting:n}])],ngContentSelectors:ko,decls:8,vars:2,consts:[[1,"mat-mdc-chip-focus-overlay"],[1,"mdc-evolution-chip__cell","mdc-evolution-chip__cell--primary"],["matChipContent",""],[1,"mdc-evolution-chip__graphic","mat-mdc-chip-graphic"],[1,"mdc-evolution-chip__text-label","mat-mdc-chip-action-label"],[1,"mat-mdc-chip-primary-focus-indicator","mat-focus-indicator"],[1,"mdc-evolution-chip__cell","mdc-evolution-chip__cell--trailing"]],template:function(t,i){t&1&&($(Mo),E(0,"span",0),l(1,"span",1)(2,"span",2),f(3,So,2,0,"span",3),l(4,"span",4),N(5),E(6,"span",5),c()()(),f(7,Eo,2,0,"span",6)),t&2&&(d(3),v(i.leadingIcon?3:-1),d(4),v(i._hasTrailingIcon()?7:-1))},dependencies:[lr],styles:[`.mdc-evolution-chip,
.mdc-evolution-chip__cell,
.mdc-evolution-chip__action {
  display: inline-flex;
  align-items: center;
}

.mdc-evolution-chip {
  position: relative;
  max-width: 100%;
}

.mdc-evolution-chip__cell,
.mdc-evolution-chip__action {
  height: 100%;
}

.mdc-evolution-chip__cell--primary {
  flex-basis: 100%;
  overflow-x: hidden;
}

.mdc-evolution-chip__cell--trailing {
  flex: 1 0 auto;
}

.mdc-evolution-chip__action {
  align-items: center;
  background: none;
  border: none;
  box-sizing: content-box;
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  outline: none;
  padding: 0;
  text-decoration: none;
  color: inherit;
}

.mdc-evolution-chip__action--presentational {
  cursor: auto;
}

.mdc-evolution-chip--disabled,
.mdc-evolution-chip__action:disabled {
  pointer-events: none;
}
@media (forced-colors: active) {
  .mdc-evolution-chip--disabled,
  .mdc-evolution-chip__action:disabled {
    forced-color-adjust: none;
  }
}

.mdc-evolution-chip__action--primary {
  font: inherit;
  letter-spacing: inherit;
  white-space: inherit;
  overflow-x: hidden;
}
.mat-mdc-standard-chip .mdc-evolution-chip__action--primary::before {
  border-width: var(--mat-chip-outline-width, 1px);
  border-radius: var(--mat-chip-container-shape-radius, 8px);
  box-sizing: border-box;
  content: "";
  height: 100%;
  left: 0;
  position: absolute;
  pointer-events: none;
  top: 0;
  width: 100%;
  z-index: 1;
  border-style: solid;
}
.mat-mdc-standard-chip .mdc-evolution-chip__action--primary {
  padding-left: 12px;
  padding-right: 12px;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 12px;
}
[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary {
  padding-left: 12px;
  padding-right: 0;
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__action--primary::before {
  border-color: var(--mat-chip-outline-color, var(--mat-sys-outline));
}
.mdc-evolution-chip__action--primary:not(.mdc-evolution-chip__action--presentational):not(.mdc-ripple-upgraded):focus::before {
  border-color: var(--mat-chip-focus-outline-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__action--primary::before {
  border-color: var(--mat-chip-disabled-outline-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-standard-chip.mdc-evolution-chip--selected .mdc-evolution-chip__action--primary::before {
  border-width: var(--mat-chip-flat-selected-outline-width, 0);
}
.mat-mdc-basic-chip .mdc-evolution-chip__action--primary {
  font: inherit;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 12px;
}
[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__action--primary {
  padding-left: 12px;
  padding-right: 0;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 12px;
  padding-right: 0;
}
[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 12px;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-leading-action.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 0;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 0;
}
[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 0;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 12px;
}
[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary {
  padding-left: 12px;
  padding-right: 0;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 0;
}
[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 0;
}

.mdc-evolution-chip__action--secondary {
  position: relative;
  overflow: visible;
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__action--secondary {
  color: var(--mat-chip-with-trailing-icon-trailing-icon-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__action--secondary {
  color: var(--mat-chip-with-trailing-icon-disabled-trailing-icon-color, var(--mat-sys-on-surface));
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--secondary {
  padding-left: 8px;
  padding-right: 8px;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--secondary {
  padding-left: 8px;
  padding-right: 8px;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--secondary {
  padding-left: 8px;
  padding-right: 8px;
}
[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--secondary {
  padding-left: 8px;
  padding-right: 8px;
}

.mdc-evolution-chip__text-label {
  -webkit-user-select: none;
  user-select: none;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.mat-mdc-standard-chip .mdc-evolution-chip__text-label {
  font-family: var(--mat-chip-label-text-font, var(--mat-sys-label-large-font));
  line-height: var(--mat-chip-label-text-line-height, var(--mat-sys-label-large-line-height));
  font-size: var(--mat-chip-label-text-size, var(--mat-sys-label-large-size));
  font-weight: var(--mat-chip-label-text-weight, var(--mat-sys-label-large-weight));
  letter-spacing: var(--mat-chip-label-text-tracking, var(--mat-sys-label-large-tracking));
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__text-label {
  color: var(--mat-chip-label-text-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-standard-chip.mdc-evolution-chip--selected:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__text-label {
  color: var(--mat-chip-selected-label-text-color, var(--mat-sys-on-secondary-container));
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__text-label, .mat-mdc-standard-chip.mdc-evolution-chip--selected.mdc-evolution-chip--disabled .mdc-evolution-chip__text-label {
  color: var(--mat-chip-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}

.mdc-evolution-chip__graphic {
  align-items: center;
  display: inline-flex;
  justify-content: center;
  overflow: hidden;
  pointer-events: none;
  position: relative;
  flex: 1 0 auto;
}
.mat-mdc-standard-chip .mdc-evolution-chip__graphic {
  width: var(--mat-chip-with-avatar-avatar-size, 24px);
  height: var(--mat-chip-with-avatar-avatar-size, 24px);
  font-size: var(--mat-chip-with-avatar-avatar-size, 24px);
}
.mdc-evolution-chip--selecting .mdc-evolution-chip__graphic {
  transition: width 150ms 0ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mdc-evolution-chip--selectable:not(.mdc-evolution-chip--selected):not(.mdc-evolution-chip--with-primary-icon) .mdc-evolution-chip__graphic {
  width: 0;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__graphic {
  padding-left: 6px;
  padding-right: 6px;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__graphic {
  padding-left: 4px;
  padding-right: 8px;
}
[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__graphic {
  padding-left: 8px;
  padding-right: 4px;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__graphic {
  padding-left: 6px;
  padding-right: 6px;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__graphic {
  padding-left: 4px;
  padding-right: 8px;
}
[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__graphic {
  padding-left: 8px;
  padding-right: 4px;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__graphic {
  padding-left: 0;
}

.mdc-evolution-chip__checkmark {
  position: absolute;
  opacity: 0;
  top: 50%;
  left: 50%;
  height: 20px;
  width: 20px;
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__checkmark {
  color: var(--mat-chip-with-icon-selected-icon-color, var(--mat-sys-on-secondary-container));
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__checkmark {
  color: var(--mat-chip-with-icon-disabled-icon-color, var(--mat-sys-on-surface));
}
.mdc-evolution-chip--selecting .mdc-evolution-chip__checkmark {
  transition: transform 150ms 0ms cubic-bezier(0.4, 0, 0.2, 1);
  transform: translate(-75%, -50%);
}
.mdc-evolution-chip--selected .mdc-evolution-chip__checkmark {
  transform: translate(-50%, -50%);
  opacity: 1;
}

.mdc-evolution-chip__checkmark-svg {
  display: block;
}

.mdc-evolution-chip__checkmark-path {
  stroke-width: 2px;
  stroke-dasharray: 29.7833385;
  stroke-dashoffset: 29.7833385;
  stroke: currentColor;
}
.mdc-evolution-chip--selecting .mdc-evolution-chip__checkmark-path {
  transition: stroke-dashoffset 150ms 45ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mdc-evolution-chip--selected .mdc-evolution-chip__checkmark-path {
  stroke-dashoffset: 0;
}
@media (forced-colors: active) {
  .mdc-evolution-chip__checkmark-path {
    stroke: CanvasText !important;
  }
}

.mat-mdc-standard-chip .mdc-evolution-chip__icon--trailing {
  height: 18px;
  width: 18px;
  font-size: 18px;
}
.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing.mat-mdc-chip-remove {
  opacity: calc(var(--mat-chip-trailing-action-opacity, 1) * var(--mat-chip-with-trailing-icon-disabled-trailing-icon-opacity, 0.38));
}
.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing.mat-mdc-chip-remove:focus {
  opacity: calc(var(--mat-chip-trailing-action-focus-opacity, 1) * var(--mat-chip-with-trailing-icon-disabled-trailing-icon-opacity, 0.38));
}

.mat-mdc-standard-chip {
  border-radius: var(--mat-chip-container-shape-radius, 8px);
  height: var(--mat-chip-container-height, 32px);
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) {
  background-color: var(--mat-chip-elevated-container-color, transparent);
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled {
  background-color: var(--mat-chip-elevated-disabled-container-color);
}
.mat-mdc-standard-chip.mdc-evolution-chip--selected:not(.mdc-evolution-chip--disabled) {
  background-color: var(--mat-chip-elevated-selected-container-color, var(--mat-sys-secondary-container));
}
.mat-mdc-standard-chip.mdc-evolution-chip--selected.mdc-evolution-chip--disabled {
  background-color: var(--mat-chip-flat-disabled-selected-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
@media (forced-colors: active) {
  .mat-mdc-standard-chip {
    outline: solid 1px;
  }
}

.mat-mdc-standard-chip .mdc-evolution-chip__icon--primary {
  border-radius: var(--mat-chip-with-avatar-avatar-shape-radius, 24px);
  width: var(--mat-chip-with-icon-icon-size, 18px);
  height: var(--mat-chip-with-icon-icon-size, 18px);
  font-size: var(--mat-chip-with-icon-icon-size, 18px);
}
.mdc-evolution-chip--selected .mdc-evolution-chip__icon--primary {
  opacity: 0;
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__icon--primary {
  color: var(--mat-chip-with-icon-icon-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--primary {
  color: var(--mat-chip-with-icon-disabled-icon-color, var(--mat-sys-on-surface));
}

.mat-mdc-chip-highlighted {
  --mat-chip-with-icon-icon-color: var(--mat-chip-with-icon-selected-icon-color, var(--mat-sys-on-secondary-container));
  --mat-chip-elevated-container-color: var(--mat-chip-elevated-selected-container-color, var(--mat-sys-secondary-container));
  --mat-chip-label-text-color: var(--mat-chip-selected-label-text-color, var(--mat-sys-on-secondary-container));
  --mat-chip-outline-width: var(--mat-chip-flat-selected-outline-width, 0);
}

.mat-mdc-chip-focus-overlay {
  background: var(--mat-chip-focus-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-chip-selected .mat-mdc-chip-focus-overlay, .mat-mdc-chip-highlighted .mat-mdc-chip-focus-overlay {
  background: var(--mat-chip-selected-focus-state-layer-color, var(--mat-sys-on-secondary-container));
}
.mat-mdc-chip:hover .mat-mdc-chip-focus-overlay {
  background: var(--mat-chip-hover-state-layer-color, var(--mat-sys-on-surface-variant));
  opacity: var(--mat-chip-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-chip-focus-overlay .mat-mdc-chip-selected:hover, .mat-mdc-chip-highlighted:hover .mat-mdc-chip-focus-overlay {
  background: var(--mat-chip-selected-hover-state-layer-color, var(--mat-sys-on-secondary-container));
  opacity: var(--mat-chip-selected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-chip.cdk-focused .mat-mdc-chip-focus-overlay {
  background: var(--mat-chip-focus-state-layer-color, var(--mat-sys-on-surface-variant));
  opacity: var(--mat-chip-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-chip-selected.cdk-focused .mat-mdc-chip-focus-overlay, .mat-mdc-chip-highlighted.cdk-focused .mat-mdc-chip-focus-overlay {
  background: var(--mat-chip-selected-focus-state-layer-color, var(--mat-sys-on-secondary-container));
  opacity: var(--mat-chip-selected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}

.mdc-evolution-chip--disabled:not(.mdc-evolution-chip--selected) .mat-mdc-chip-avatar {
  opacity: var(--mat-chip-with-avatar-disabled-avatar-opacity, 0.38);
}

.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing {
  opacity: var(--mat-chip-with-trailing-icon-disabled-trailing-icon-opacity, 0.38);
}

.mdc-evolution-chip--disabled.mdc-evolution-chip--selected .mdc-evolution-chip__checkmark {
  opacity: var(--mat-chip-with-icon-disabled-icon-opacity, 0.38);
}

.mat-mdc-standard-chip.mdc-evolution-chip--disabled {
  opacity: var(--mat-chip-disabled-container-opacity, 1);
}
.mat-mdc-standard-chip.mdc-evolution-chip--selected .mdc-evolution-chip__icon--trailing, .mat-mdc-standard-chip.mat-mdc-chip-highlighted .mdc-evolution-chip__icon--trailing {
  color: var(--mat-chip-selected-trailing-icon-color, var(--mat-sys-on-secondary-container));
}
.mat-mdc-standard-chip.mdc-evolution-chip--selected.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing, .mat-mdc-standard-chip.mat-mdc-chip-highlighted.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing {
  color: var(--mat-chip-selected-disabled-trailing-icon-color, var(--mat-sys-on-surface));
}

.mat-mdc-chip-edit, .mat-mdc-chip-remove {
  opacity: var(--mat-chip-trailing-action-opacity, 1);
}
.mat-mdc-chip-edit:focus, .mat-mdc-chip-remove:focus {
  opacity: var(--mat-chip-trailing-action-focus-opacity, 1);
}
.mat-mdc-chip-edit::after, .mat-mdc-chip-remove::after {
  background-color: var(--mat-chip-trailing-action-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-chip-edit:hover::after, .mat-mdc-chip-remove:hover::after {
  opacity: calc(var(--mat-chip-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity)) + var(--mat-chip-trailing-action-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity)));
}
.mat-mdc-chip-edit:focus::after, .mat-mdc-chip-remove:focus::after {
  opacity: calc(var(--mat-chip-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity)) + var(--mat-chip-trailing-action-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity)));
}

.mat-mdc-chip-selected .mat-mdc-chip-remove::after,
.mat-mdc-chip-highlighted .mat-mdc-chip-remove::after {
  background-color: var(--mat-chip-selected-trailing-action-state-layer-color, var(--mat-sys-on-secondary-container));
}

.mat-mdc-chip.cdk-focused .mat-mdc-chip-edit:focus::after, .mat-mdc-chip.cdk-focused .mat-mdc-chip-remove:focus::after {
  opacity: calc(var(--mat-chip-selected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity)) + var(--mat-chip-trailing-action-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity)));
}
.mat-mdc-chip.cdk-focused .mat-mdc-chip-edit:hover::after, .mat-mdc-chip.cdk-focused .mat-mdc-chip-remove:hover::after {
  opacity: calc(var(--mat-chip-selected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity)) + var(--mat-chip-trailing-action-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity)));
}

.mat-mdc-standard-chip {
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-standard-chip .mat-mdc-chip-graphic,
.mat-mdc-standard-chip .mat-mdc-chip-trailing-icon {
  box-sizing: content-box;
}
.mat-mdc-standard-chip._mat-animation-noopable,
.mat-mdc-standard-chip._mat-animation-noopable .mdc-evolution-chip__graphic,
.mat-mdc-standard-chip._mat-animation-noopable .mdc-evolution-chip__checkmark,
.mat-mdc-standard-chip._mat-animation-noopable .mdc-evolution-chip__checkmark-path {
  transition-duration: 1ms;
  animation-duration: 1ms;
}

.mat-mdc-chip-focus-overlay {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  opacity: 0;
  border-radius: inherit;
  transition: opacity 150ms linear;
}
._mat-animation-noopable .mat-mdc-chip-focus-overlay {
  transition: none;
}
.mat-mdc-basic-chip .mat-mdc-chip-focus-overlay {
  display: none;
}

.mat-mdc-chip .mat-ripple.mat-mdc-chip-ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: inherit;
}

.mat-mdc-chip-avatar {
  text-align: center;
  line-height: 1;
  color: var(--mat-chip-with-icon-icon-color, currentColor);
}

.mat-mdc-chip {
  position: relative;
  z-index: 0;
}

.mat-mdc-chip-action-label {
  text-align: left;
  z-index: 1;
}
[dir=rtl] .mat-mdc-chip-action-label {
  text-align: right;
}
.mat-mdc-chip.mdc-evolution-chip--with-trailing-action .mat-mdc-chip-action-label {
  position: relative;
}
.mat-mdc-chip-action-label .mat-mdc-chip-primary-focus-indicator {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  pointer-events: none;
}
.mat-mdc-chip-action-label .mat-focus-indicator::before {
  margin: calc(calc(var(--mat-focus-indicator-border-width, 3px) + 2px) * -1);
}

.mat-mdc-chip-edit::before, .mat-mdc-chip-remove::before {
  margin: calc(var(--mat-focus-indicator-border-width, 3px) * -1);
  left: 8px;
  right: 8px;
}
.mat-mdc-chip-edit::after, .mat-mdc-chip-remove::after {
  content: "";
  display: block;
  opacity: 0;
  position: absolute;
  top: -3px;
  bottom: -3px;
  left: 5px;
  right: 5px;
  border-radius: 50%;
  box-sizing: border-box;
  padding: 12px;
  margin: -12px;
  background-clip: content-box;
}
.mat-mdc-chip-edit .mat-icon, .mat-mdc-chip-remove .mat-icon {
  width: 18px;
  height: 18px;
  font-size: 18px;
  box-sizing: content-box;
}

.mat-chip-edit-input {
  cursor: text;
  display: inline-block;
  color: inherit;
  outline: 0;
}

@media (forced-colors: active) {
  .mat-mdc-chip-selected:not(.mat-mdc-chip-multiple) {
    outline-width: 3px;
  }
}

.mat-mdc-chip-action:focus-visible .mat-focus-indicator::before {
  content: "";
}

.mdc-evolution-chip__icon, .mat-mdc-chip-edit .mat-icon, .mat-mdc-chip-remove .mat-icon {
  min-height: fit-content;
}

img.mdc-evolution-chip__icon {
  min-height: 0;
}
`],encapsulation:2,changeDetection:0})}return n})();var cn=(()=>{class n{_elementRef=s(R);_document=s(Te);constructor(){}initialize(e){this.getNativeElement().focus(),this.setValue(e)}getNativeElement(){return this._elementRef.nativeElement}setValue(e){this.getNativeElement().textContent=e,this._moveCursorToEndOfInput()}getValue(){return this.getNativeElement().textContent||""}_moveCursorToEndOfInput(){let e=this._document.createRange();e.selectNodeContents(this.getNativeElement()),e.collapse(!1);let t=window.getSelection();t.removeAllRanges(),t.addRange(e)}static \u0275fac=function(t){return new(t||n)};static \u0275dir=F({type:n,selectors:[["span","matChipEditInput",""]],hostAttrs:["role","textbox","tabindex","-1","contenteditable","true",1,"mat-chip-edit-input"]})}return n})(),_n=(()=>{class n extends pn{basicChipAttrName="mat-basic-chip-row";_renderer=s(Pe);_cleanupMousedown;_editStartPending=!1;editable=!1;edited=new b;defaultEditInput;contentEditInput;_alreadyFocused=!1;_isEditing=!1;constructor(){super(),this.role="row",this._onBlur.pipe(P(this.destroyed)).subscribe(()=>{this._isEditing&&!this._editStartPending&&this._onEditFinish(),this._alreadyFocused=!1})}ngAfterViewInit(){super.ngAfterViewInit(),this._cleanupMousedown=this._ngZone.runOutsideAngular(()=>this._renderer.listen(this._elementRef.nativeElement,"mousedown",()=>{this._alreadyFocused=this._hasFocus()}))}ngOnDestroy(){super.ngOnDestroy(),this._cleanupMousedown?.()}_hasLeadingActionIcon(){return!this._isEditing&&!!this.editIcon}_hasTrailingIcon(){return!this._isEditing&&super._hasTrailingIcon()}_handleFocus(){!this._isEditing&&!this.disabled&&this.focus()}_handleKeydown(e){e.keyCode===13&&!this.disabled?this._isEditing?(e.preventDefault(),this._onEditFinish()):this.editable&&this._startEditing(e):this._isEditing?e.stopPropagation():super._handleKeydown(e)}_handleClick(e){!this.disabled&&this.editable&&!this._isEditing&&this._alreadyFocused&&(e.preventDefault(),e.stopPropagation(),this._startEditing(e))}_handleDoubleclick(e){!this.disabled&&this.editable&&this._startEditing(e)}_edit(){this._changeDetectorRef.markForCheck(),this._startEditing()}_startEditing(e){if(!this.primaryAction||this.removeIcon&&e&&this._getSourceAction(e.target)===this.removeIcon)return;let t=this.value;this._isEditing=this._editStartPending=!0,we(()=>{this._getEditInput().initialize(t),setTimeout(()=>this._ngZone.run(()=>this._editStartPending=!1))},{injector:this._injector})}_onEditFinish(){this._isEditing=this._editStartPending=!1,this.edited.emit({chip:this,value:this._getEditInput().getValue()}),(this._document.activeElement===this._getEditInput().getNativeElement()||this._document.activeElement===this._document.body)&&this.primaryAction.focus()}_isRippleDisabled(){return super._isRippleDisabled()||this._isEditing}_getEditInput(){return this.contentEditInput||this.defaultEditInput}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=k({type:n,selectors:[["mat-chip-row"],["","mat-chip-row",""],["mat-basic-chip-row"],["","mat-basic-chip-row",""]],contentQueries:function(t,i,a){if(t&1&&pe(a,cn,5),t&2){let o;C(o=w())&&(i.contentEditInput=o.first)}},viewQuery:function(t,i){if(t&1&&G(cn,5),t&2){let a;C(a=w())&&(i.defaultEditInput=a.first)}},hostAttrs:[1,"mat-mdc-chip","mat-mdc-chip-row","mdc-evolution-chip"],hostVars:29,hostBindings:function(t,i){t&1&&_("focus",function(){return i._handleFocus()})("click",function(o){return i._hasInteractiveActions()?i._handleClick(o):null})("dblclick",function(o){return i._handleDoubleclick(o)}),t&2&&(q("id",i.id),S("tabindex",i.disabled?null:-1)("aria-label",null)("aria-description",null)("role",i.role),A("mat-mdc-chip-with-avatar",i.leadingIcon)("mat-mdc-chip-disabled",i.disabled)("mat-mdc-chip-editing",i._isEditing)("mat-mdc-chip-editable",i.editable)("mdc-evolution-chip--disabled",i.disabled)("mdc-evolution-chip--with-leading-action",i._hasLeadingActionIcon())("mdc-evolution-chip--with-trailing-action",i._hasTrailingIcon())("mdc-evolution-chip--with-primary-graphic",i.leadingIcon)("mdc-evolution-chip--with-primary-icon",i.leadingIcon)("mdc-evolution-chip--with-avatar",i.leadingIcon)("mat-mdc-chip-highlighted",i.highlighted)("mat-mdc-chip-with-trailing-icon",i._hasTrailingIcon()))},inputs:{editable:"editable"},outputs:{edited:"edited"},features:[Z([{provide:pn,useExisting:n},{provide:hn,useExisting:n}]),K],ngContentSelectors:To,decls:9,vars:8,consts:[[1,"mat-mdc-chip-focus-overlay"],["role","gridcell",1,"mdc-evolution-chip__cell","mdc-evolution-chip__cell--leading"],["role","gridcell","matChipAction","",1,"mdc-evolution-chip__cell","mdc-evolution-chip__cell--primary",3,"disabled"],[1,"mdc-evolution-chip__graphic","mat-mdc-chip-graphic"],[1,"mdc-evolution-chip__text-label","mat-mdc-chip-action-label"],["aria-hidden","true",1,"mat-mdc-chip-primary-focus-indicator","mat-focus-indicator"],["role","gridcell",1,"mdc-evolution-chip__cell","mdc-evolution-chip__cell--trailing"],["matChipEditInput",""]],template:function(t,i){t&1&&($(Ao),f(0,Oo,1,0,"span",0),f(1,Fo,2,0,"span",1),l(2,"span",2),f(3,Po,2,0,"span",3),l(4,"span",4),f(5,Lo,2,1)(6,No,1,0),E(7,"span",5),c()(),f(8,Bo,2,0,"span",6)),t&2&&(v(i._isEditing?-1:0),d(),v(i._hasLeadingActionIcon()?1:-1),d(),u("disabled",i.disabled),S("aria-description",i.ariaDescription)("aria-label",i.ariaLabel),d(),v(i.leadingIcon?3:-1),d(2),v(i._isEditing?5:6),d(3),v(i._hasTrailingIcon()?8:-1))},dependencies:[un,cn],styles:[Io],encapsulation:2,changeDetection:0})}return n})(),Ho=(()=>{class n{_elementRef=s(R);_changeDetectorRef=s(z);_dir=s(De,{optional:!0});_lastDestroyedFocusedChipIndex=null;_keyManager;_destroyed=new O;_defaultRole="presentation";get chipFocusChanges(){return this._getChipStream(e=>e._onFocus)}get chipDestroyedChanges(){return this._getChipStream(e=>e.destroyed)}get chipRemovedChanges(){return this._getChipStream(e=>e.removed)}get disabled(){return this._disabled}set disabled(e){this._disabled=e,this._syncChipsState()}_disabled=!1;get empty(){return!this._chips||this._chips.length===0}get role(){return this._explicitRole?this._explicitRole:this.empty?null:this._defaultRole}tabIndex=0;set role(e){this._explicitRole=e}_explicitRole=null;get focused(){return this._hasFocusedChip()}_chips;_chipActions=new Xe;constructor(){}ngAfterViewInit(){this._setUpFocusManagement(),this._trackChipSetChanges(),this._trackDestroyedFocusedChip()}ngOnDestroy(){this._keyManager?.destroy(),this._chipActions.destroy(),this._destroyed.next(),this._destroyed.complete()}_hasFocusedChip(){return this._chips&&this._chips.some(e=>e._hasFocus())}_syncChipsState(){this._chips?.forEach(e=>{e._chipListDisabled=this._disabled,e._changeDetectorRef.markForCheck()})}focus(){}_handleKeydown(e){this._originatesFromChip(e)&&this._keyManager.onKeydown(e)}_isValidIndex(e){return e>=0&&e<this._chips.length}_allowFocusEscape(){let e=this._elementRef.nativeElement.tabIndex;e!==-1&&(this._elementRef.nativeElement.tabIndex=-1,setTimeout(()=>this._elementRef.nativeElement.tabIndex=e))}_getChipStream(e){return this._chips.changes.pipe(te(null),Bt(()=>Be(...this._chips.map(e))))}_originatesFromChip(e){let t=e.target;for(;t&&t!==this._elementRef.nativeElement;){if(t.classList.contains("mat-mdc-chip"))return!0;t=t.parentElement}return!1}_setUpFocusManagement(){this._chips.changes.pipe(te(this._chips)).subscribe(e=>{let t=[];e.forEach(i=>i._getActions().forEach(a=>t.push(a))),this._chipActions.reset(t),this._chipActions.notifyOnChanges()}),this._keyManager=new qt(this._chipActions).withVerticalOrientation().withHorizontalOrientation(this._dir?this._dir.value:"ltr").withHomeAndEnd().skipPredicate(e=>this._skipPredicate(e)),this.chipFocusChanges.pipe(P(this._destroyed)).subscribe(({chip:e})=>{let t=e._getSourceAction(document.activeElement);t&&this._keyManager.updateActiveItem(t)}),this._dir?.change.pipe(P(this._destroyed)).subscribe(e=>this._keyManager.withHorizontalOrientation(e))}_skipPredicate(e){return e.disabled}_trackChipSetChanges(){this._chips.changes.pipe(te(null),P(this._destroyed)).subscribe(()=>{this.disabled&&Promise.resolve().then(()=>this._syncChipsState()),this._redirectDestroyedChipFocus()})}_trackDestroyedFocusedChip(){this.chipDestroyedChanges.pipe(P(this._destroyed)).subscribe(e=>{let i=this._chips.toArray().indexOf(e.chip),a=e.chip._hasFocus(),o=e.chip._hadFocusOnRemove&&this._keyManager.activeItem&&e.chip._getActions().includes(this._keyManager.activeItem),m=a||o;this._isValidIndex(i)&&m&&(this._lastDestroyedFocusedChipIndex=i)})}_redirectDestroyedChipFocus(){if(this._lastDestroyedFocusedChipIndex!=null){if(this._chips.length){let e=Math.min(this._lastDestroyedFocusedChipIndex,this._chips.length-1),t=this._chips.toArray()[e];t.disabled?this._chips.length===1?this.focus():this._keyManager.setPreviousItemActive():t.focus()}else this.focus();this._lastDestroyedFocusedChipIndex=null}}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=k({type:n,selectors:[["mat-chip-set"]],contentQueries:function(t,i,a){if(t&1&&pe(a,pn,5),t&2){let o;C(o=w())&&(i._chips=o)}},hostAttrs:[1,"mat-mdc-chip-set","mdc-evolution-chip-set"],hostVars:1,hostBindings:function(t,i){t&1&&_("keydown",function(o){return i._handleKeydown(o)}),t&2&&S("role",i.role)},inputs:{disabled:[2,"disabled","disabled",T],role:"role",tabIndex:[2,"tabIndex","tabIndex",e=>e==null?0:Ze(e)]},ngContentSelectors:or,decls:2,vars:0,consts:[["role","presentation",1,"mdc-evolution-chip-set__chips"]],template:function(t,i){t&1&&($(),W(0,"div",0),N(1),ne())},styles:[`.mat-mdc-chip-set {
  display: flex;
}
.mat-mdc-chip-set:focus {
  outline: none;
}
.mat-mdc-chip-set .mdc-evolution-chip-set__chips {
  min-width: 100%;
  margin-left: -8px;
  margin-right: 0;
}
.mat-mdc-chip-set .mdc-evolution-chip {
  margin: 4px 0 4px 8px;
}
[dir=rtl] .mat-mdc-chip-set .mdc-evolution-chip-set__chips {
  margin-left: 0;
  margin-right: -8px;
}
[dir=rtl] .mat-mdc-chip-set .mdc-evolution-chip {
  margin-left: 0;
  margin-right: 8px;
}

.mdc-evolution-chip-set__chips {
  display: flex;
  flex-flow: wrap;
  min-width: 0;
}

.mat-mdc-chip-set-stacked {
  flex-direction: column;
  align-items: flex-start;
}
.mat-mdc-chip-set-stacked .mat-mdc-chip {
  width: 100%;
}
.mat-mdc-chip-set-stacked .mdc-evolution-chip__graphic {
  flex-grow: 0;
}
.mat-mdc-chip-set-stacked .mdc-evolution-chip__action--primary {
  flex-basis: 100%;
  justify-content: start;
}

input.mat-mdc-chip-input {
  flex: 1 0 150px;
  margin-left: 8px;
}
[dir=rtl] input.mat-mdc-chip-input {
  margin-left: 0;
  margin-right: 8px;
}
.mat-mdc-form-field:not(.mat-form-field-hide-placeholder) input.mat-mdc-chip-input::placeholder {
  opacity: 1;
}
.mat-mdc-form-field:not(.mat-form-field-hide-placeholder) input.mat-mdc-chip-input::-moz-placeholder {
  opacity: 1;
}
.mat-mdc-form-field:not(.mat-form-field-hide-placeholder) input.mat-mdc-chip-input::-webkit-input-placeholder {
  opacity: 1;
}
.mat-mdc-form-field:not(.mat-form-field-hide-placeholder) input.mat-mdc-chip-input:-ms-input-placeholder {
  opacity: 1;
}
.mat-mdc-chip-set + input.mat-mdc-chip-input {
  margin-left: 0;
  margin-right: 0;
}
`],encapsulation:2,changeDetection:0})}return n})();var mn=class{source;value;constructor(r,e){this.source=r,this.value=e}},dr=(()=>{class n extends Ho{ngControl=s(ji,{optional:!0,self:!0});controlType="mat-chip-grid";_chipInput;_defaultRole="grid";_errorStateTracker;_uid=s(ce).getId("mat-chip-grid-");_ariaDescribedbyIds=[];_onTouched=()=>{};_onChange=()=>{};get disabled(){return this.ngControl?!!this.ngControl.disabled:this._disabled}set disabled(e){this._disabled=e,this._syncChipsState(),this.stateChanges.next()}get id(){return this._chipInput?this._chipInput.id:this._uid}get empty(){return(!this._chipInput||this._chipInput.empty)&&(!this._chips||this._chips.length===0)}get placeholder(){return this._chipInput?this._chipInput.placeholder:this._placeholder}set placeholder(e){this._placeholder=e,this.stateChanges.next()}_placeholder="";get focused(){return this._chipInput?.focused||this._hasFocusedChip()}get required(){return this._required??this.ngControl?.control?.hasValidator(gt.required)??!1}set required(e){this._required=e,this.stateChanges.next()}_required;get shouldLabelFloat(){return!this.empty||this.focused}get value(){return this._value}set value(e){this._value=e}_value=[];get errorStateMatcher(){return this._errorStateTracker.matcher}set errorStateMatcher(e){this._errorStateTracker.matcher=e}get chipBlurChanges(){return this._getChipStream(e=>e._onBlur)}change=new b;valueChange=new b;_chips=void 0;stateChanges=new O;get errorState(){return this._errorStateTracker.errorState}set errorState(e){this._errorStateTracker.errorState=e}constructor(){super();let e=s(Gi,{optional:!0}),t=s(Ft,{optional:!0}),i=s(et);this.ngControl&&(this.ngControl.valueAccessor=this),this._errorStateTracker=new Ea(i,this.ngControl,t,e,this.stateChanges)}ngAfterContentInit(){this.chipBlurChanges.pipe(P(this._destroyed)).subscribe(()=>{this._blur(),this.stateChanges.next()}),Be(this.chipFocusChanges,this._chips.changes).pipe(P(this._destroyed)).subscribe(()=>this.stateChanges.next())}ngDoCheck(){this.ngControl&&this.updateErrorState()}ngOnDestroy(){super.ngOnDestroy(),this.stateChanges.complete()}registerInput(e){this._chipInput=e,this._chipInput.setDescribedByIds(this._ariaDescribedbyIds),this._elementRef.nativeElement.removeAttribute("aria-describedby")}onContainerClick(e){!this.disabled&&!this._originatesFromChip(e)&&this.focus()}focus(){if(!(this.disabled||this._chipInput?.focused)){if(!this._chips.length||this._chips.first.disabled){if(!this._chipInput)return;Promise.resolve().then(()=>this._chipInput.focus())}else{let e=this._keyManager.activeItem;e?e.focus():this._keyManager.setFirstItemActive()}this.stateChanges.next()}}get describedByIds(){if(this._chipInput)return this._chipInput.describedByIds||[];let e=this._elementRef.nativeElement.getAttribute("aria-describedby");return e?e.split(" "):[]}setDescribedByIds(e){this._ariaDescribedbyIds=e,this._chipInput?this._chipInput.setDescribedByIds(e):e.length?this._elementRef.nativeElement.setAttribute("aria-describedby",e.join(" ")):this._elementRef.nativeElement.removeAttribute("aria-describedby")}writeValue(e){this._value=e}registerOnChange(e){this._onChange=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this.disabled=e,this.stateChanges.next()}updateErrorState(){this._errorStateTracker.updateErrorState()}_blur(){this.disabled||setTimeout(()=>{this.focused||(this._propagateChanges(),this._markAsTouched())})}_allowFocusEscape(){this._chipInput?.focused||super._allowFocusEscape()}_handleKeydown(e){let t=e.keyCode,i=this._keyManager.activeItem;if(t===9)this._chipInput?.focused&&re(e,"shiftKey")&&this._chips.length&&!this._chips.last.disabled?(e.preventDefault(),i?this._keyManager.setActiveItem(i):this._focusLastChip()):super._allowFocusEscape();else if(!this._chipInput?.focused)if((t===38||t===40)&&i){let a=this._chipActions.filter(D=>D._isPrimary===i._isPrimary&&!this._skipPredicate(D)),o=a.indexOf(i),m=e.keyCode===38?-1:1;e.preventDefault(),o>-1&&this._isValidIndex(o+m)&&this._keyManager.setActiveItem(a[o+m])}else super._handleKeydown(e);this.stateChanges.next()}_focusLastChip(){this._chips.length&&this._chips.last.focus()}_propagateChanges(){let e=this._chips.length?this._chips.toArray().map(t=>t.value):[];this._value=e,this.change.emit(new mn(this,e)),this.valueChange.emit(e),this._onChange(e),this._changeDetectorRef.markForCheck()}_markAsTouched(){this._onTouched(),this._changeDetectorRef.markForCheck(),this.stateChanges.next()}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=k({type:n,selectors:[["mat-chip-grid"]],contentQueries:function(t,i,a){if(t&1&&pe(a,_n,5),t&2){let o;C(o=w())&&(i._chips=o)}},hostAttrs:[1,"mat-mdc-chip-set","mat-mdc-chip-grid","mdc-evolution-chip-set"],hostVars:10,hostBindings:function(t,i){t&1&&_("focus",function(){return i.focus()})("blur",function(){return i._blur()}),t&2&&(S("role",i.role)("tabindex",i.disabled||i._chips&&i._chips.length===0?-1:i.tabIndex)("aria-disabled",i.disabled.toString())("aria-invalid",i.errorState),A("mat-mdc-chip-list-disabled",i.disabled)("mat-mdc-chip-list-invalid",i.errorState)("mat-mdc-chip-list-required",i.required))},inputs:{disabled:[2,"disabled","disabled",T],placeholder:"placeholder",required:[2,"required","required",T],value:"value",errorStateMatcher:"errorStateMatcher"},outputs:{change:"change",valueChange:"valueChange"},features:[Z([{provide:Ui,useExisting:n}]),K],ngContentSelectors:or,decls:2,vars:0,consts:[["role","presentation",1,"mdc-evolution-chip-set__chips"]],template:function(t,i){t&1&&($(),W(0,"div",0),N(1),ne())},styles:[zo],encapsulation:2,changeDetection:0})}return n})(),pr=(()=>{class n{_elementRef=s(R);focused=!1;get chipGrid(){return this._chipGrid}set chipGrid(e){e&&(this._chipGrid=e,this._chipGrid.registerInput(this))}_chipGrid;addOnBlur=!1;separatorKeyCodes;chipEnd=new b;placeholder="";id=s(ce).getId("mat-mdc-chip-list-input-");get disabled(){return this._disabled||this._chipGrid&&this._chipGrid.disabled}set disabled(e){this._disabled=e}_disabled=!1;readonly=!1;disabledInteractive;get empty(){return!this.inputElement.value}inputElement;constructor(){let e=s(sr),t=s(si,{optional:!0});this.inputElement=this._elementRef.nativeElement,this.separatorKeyCodes=e.separatorKeyCodes,this.disabledInteractive=e.inputDisabledInteractive??!1,t&&this.inputElement.classList.add("mat-mdc-form-field-input-control")}ngOnChanges(){this._chipGrid.stateChanges.next()}ngOnDestroy(){this.chipEnd.complete()}_keydown(e){this.empty&&e.keyCode===8?(e.repeat||this._chipGrid._focusLastChip(),e.preventDefault()):this._emitChipEnd(e)}_blur(){this.addOnBlur&&this._emitChipEnd(),this.focused=!1,this._chipGrid.focused||this._chipGrid._blur(),this._chipGrid.stateChanges.next()}_focus(){this.focused=!0,this._chipGrid.stateChanges.next()}_emitChipEnd(e){(!e||this._isSeparatorKey(e)&&!e.repeat)&&(this.chipEnd.emit({input:this.inputElement,value:this.inputElement.value,chipInput:this}),e?.preventDefault())}_onInput(){this._chipGrid.stateChanges.next()}focus(){this.inputElement.focus()}clear(){this.inputElement.value=""}get describedByIds(){return this._elementRef.nativeElement.getAttribute("aria-describedby")?.split(" ")||[]}setDescribedByIds(e){let t=this._elementRef.nativeElement;e.length?t.setAttribute("aria-describedby",e.join(" ")):t.removeAttribute("aria-describedby")}_isSeparatorKey(e){if(!this.separatorKeyCodes)return!1;for(let t of this.separatorKeyCodes){let i,a;typeof t=="number"?(i=t,a=null):(i=t.keyCode,a=t.modifiers);let o=a?.length?re(e,...a):!re(e);if(i===e.keyCode&&o)return!0}return!1}_getReadonlyAttribute(){return this.readonly||this.disabled&&this.disabledInteractive?"true":null}static \u0275fac=function(t){return new(t||n)};static \u0275dir=F({type:n,selectors:[["input","matChipInputFor",""]],hostAttrs:[1,"mat-mdc-chip-input","mat-mdc-input-element","mdc-text-field__input","mat-input-element"],hostVars:8,hostBindings:function(t,i){t&1&&_("keydown",function(o){return i._keydown(o)})("blur",function(){return i._blur()})("focus",function(){return i._focus()})("input",function(){return i._onInput()}),t&2&&(q("id",i.id),S("disabled",i.disabled&&!i.disabledInteractive?"":null)("placeholder",i.placeholder||null)("aria-invalid",i._chipGrid&&i._chipGrid.ngControl?i._chipGrid.ngControl.invalid:null)("aria-required",i._chipGrid&&i._chipGrid.required||null)("aria-disabled",i.disabled&&i.disabledInteractive?"true":null)("readonly",i._getReadonlyAttribute())("required",i._chipGrid&&i._chipGrid.required||null))},inputs:{chipGrid:[0,"matChipInputFor","chipGrid"],addOnBlur:[2,"matChipInputAddOnBlur","addOnBlur",T],separatorKeyCodes:[0,"matChipInputSeparatorKeyCodes","separatorKeyCodes"],placeholder:"placeholder",id:"id",disabled:[2,"disabled","disabled",T],readonly:[2,"readonly","readonly",T],disabledInteractive:[2,"matChipInputDisabledInteractive","disabledInteractive",T]},outputs:{chipEnd:"matChipInputTokenEnd"},exportAs:["matChipInput","matChipInputFor"],features:[ie]})}return n})();var mr=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=ge({type:n});static \u0275inj=ue({providers:[et,{provide:sr,useValue:{separatorKeyCodes:[13]}}],imports:[Kt,Ie]})}return n})();function jo(n,r){if(n&1){let e=V();l(0,"div",1)(1,"button",2),_("click",function(){x(e);let i=h();return M(i.action())}),p(2),c()()}if(n&2){let e=h();d(2),U(" ",e.data.action," ")}}var Go=["label"];function Uo(n,r){}var Qo=Math.pow(2,31)-1,it=class{_overlayRef;instance;containerInstance;_afterDismissed=new O;_afterOpened=new O;_onAction=new O;_durationTimeoutId;_dismissedByAction=!1;constructor(r,e){this._overlayRef=e,this.containerInstance=r,r._onExit.subscribe(()=>this._finishDismiss())}dismiss(){this._afterDismissed.closed||this.containerInstance.exit(),clearTimeout(this._durationTimeoutId)}dismissWithAction(){this._onAction.closed||(this._dismissedByAction=!0,this._onAction.next(),this._onAction.complete(),this.dismiss()),clearTimeout(this._durationTimeoutId)}closeWithAction(){this.dismissWithAction()}_dismissAfter(r){this._durationTimeoutId=setTimeout(()=>this.dismiss(),Math.min(r,Qo))}_open(){this._afterOpened.closed||(this._afterOpened.next(),this._afterOpened.complete())}_finishDismiss(){this._overlayRef.dispose(),this._onAction.closed||this._onAction.complete(),this._afterDismissed.next({dismissedByAction:this._dismissedByAction}),this._afterDismissed.complete(),this._dismissedByAction=!1}afterDismissed(){return this._afterDismissed}afterOpened(){return this.containerInstance._onEnter}onAction(){return this._onAction}},Ci=new L("MatSnackBarData"),Dt=class{politeness="polite";announcementMessage="";viewContainerRef;duration=0;panelClass;direction;data=null;horizontalPosition="center";verticalPosition="bottom"},qo=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275dir=F({type:n,selectors:[["","matSnackBarLabel",""]],hostAttrs:[1,"mat-mdc-snack-bar-label","mdc-snackbar__label"]})}return n})(),$o=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275dir=F({type:n,selectors:[["","matSnackBarActions",""]],hostAttrs:[1,"mat-mdc-snack-bar-actions","mdc-snackbar__actions"]})}return n})(),Ko=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275dir=F({type:n,selectors:[["","matSnackBarAction",""]],hostAttrs:[1,"mat-mdc-snack-bar-action","mdc-snackbar__action"]})}return n})(),Wo=(()=>{class n{snackBarRef=s(it);data=s(Ci);constructor(){}action(){this.snackBarRef.dismissWithAction()}get hasAction(){return!!this.data.action}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=k({type:n,selectors:[["simple-snack-bar"]],hostAttrs:[1,"mat-mdc-simple-snack-bar"],exportAs:["matSnackBar"],decls:3,vars:2,consts:[["matSnackBarLabel",""],["matSnackBarActions",""],["matButton","","matSnackBarAction","",3,"click"]],template:function(t,i){t&1&&(l(0,"div",0),p(1),c(),f(2,jo,3,1,"div",1)),t&2&&(d(),U(" ",i.data.message,`
`),d(),v(i.hasAction?2:-1))},dependencies:[xe,qo,$o,Ko],styles:[`.mat-mdc-simple-snack-bar {
  display: flex;
}
.mat-mdc-simple-snack-bar .mat-mdc-snack-bar-label {
  max-height: 50vh;
  overflow: auto;
}
`],encapsulation:2,changeDetection:0})}return n})(),gn="_mat-snack-bar-enter",fn="_mat-snack-bar-exit",Xo=(()=>{class n extends oa{_ngZone=s(Ce);_elementRef=s(R);_changeDetectorRef=s(z);_platform=s(He);_animationsDisabled=oe();snackBarConfig=s(Dt);_document=s(Te);_trackedModals=new Set;_enterFallback;_exitFallback;_injector=s(le);_announceDelay=150;_announceTimeoutId;_destroyed=!1;_portalOutlet;_onAnnounce=new O;_onExit=new O;_onEnter=new O;_animationState="void";_live;_label;_role;_liveElementId=s(ce).getId("mat-snack-bar-container-live-");constructor(){super();let e=this.snackBarConfig;e.politeness==="assertive"&&!e.announcementMessage?this._live="assertive":e.politeness==="off"?this._live="off":this._live="polite",this._platform.FIREFOX&&(this._live==="polite"&&(this._role="status"),this._live==="assertive"&&(this._role="alert"))}attachComponentPortal(e){this._assertNotAttached();let t=this._portalOutlet.attachComponentPortal(e);return this._afterPortalAttached(),t}attachTemplatePortal(e){this._assertNotAttached();let t=this._portalOutlet.attachTemplatePortal(e);return this._afterPortalAttached(),t}attachDomPortal=e=>{this._assertNotAttached();let t=this._portalOutlet.attachDomPortal(e);return this._afterPortalAttached(),t};onAnimationEnd(e){e===fn?this._completeExit():e===gn&&(clearTimeout(this._enterFallback),this._ngZone.run(()=>{this._onEnter.next(),this._onEnter.complete()}))}enter(){this._destroyed||(this._animationState="visible",this._changeDetectorRef.markForCheck(),this._changeDetectorRef.detectChanges(),this._screenReaderAnnounce(),this._animationsDisabled?we(()=>{this._ngZone.run(()=>queueMicrotask(()=>this.onAnimationEnd(gn)))},{injector:this._injector}):(clearTimeout(this._enterFallback),this._enterFallback=setTimeout(()=>{this._elementRef.nativeElement.classList.add("mat-snack-bar-fallback-visible"),this.onAnimationEnd(gn)},200)))}exit(){return this._destroyed?Ne(void 0):(this._ngZone.run(()=>{this._animationState="hidden",this._changeDetectorRef.markForCheck(),this._elementRef.nativeElement.setAttribute("mat-exit",""),clearTimeout(this._announceTimeoutId),this._animationsDisabled?we(()=>{this._ngZone.run(()=>queueMicrotask(()=>this.onAnimationEnd(fn)))},{injector:this._injector}):(clearTimeout(this._exitFallback),this._exitFallback=setTimeout(()=>this.onAnimationEnd(fn),200))}),this._onExit)}ngOnDestroy(){this._destroyed=!0,this._clearFromModals(),this._completeExit()}_completeExit(){clearTimeout(this._exitFallback),queueMicrotask(()=>{this._onExit.next(),this._onExit.complete()})}_afterPortalAttached(){let e=this._elementRef.nativeElement,t=this.snackBarConfig.panelClass;t&&(Array.isArray(t)?t.forEach(o=>e.classList.add(o)):e.classList.add(t)),this._exposeToModals();let i=this._label.nativeElement,a="mdc-snackbar__label";i.classList.toggle(a,!i.querySelector(`.${a}`))}_exposeToModals(){let e=this._liveElementId,t=this._document.querySelectorAll('body > .cdk-overlay-container [aria-modal="true"]');for(let i=0;i<t.length;i++){let a=t[i],o=a.getAttribute("aria-owns");this._trackedModals.add(a),o?o.indexOf(e)===-1&&a.setAttribute("aria-owns",o+" "+e):a.setAttribute("aria-owns",e)}}_clearFromModals(){this._trackedModals.forEach(e=>{let t=e.getAttribute("aria-owns");if(t){let i=t.replace(this._liveElementId,"").trim();i.length>0?e.setAttribute("aria-owns",i):e.removeAttribute("aria-owns")}}),this._trackedModals.clear()}_assertNotAttached(){this._portalOutlet.hasAttached()}_screenReaderAnnounce(){this._announceTimeoutId||this._ngZone.runOutsideAngular(()=>{this._announceTimeoutId=setTimeout(()=>{if(this._destroyed)return;let e=this._elementRef.nativeElement,t=e.querySelector("[aria-hidden]"),i=e.querySelector("[aria-live]");if(t&&i){let a=null;this._platform.isBrowser&&document.activeElement instanceof HTMLElement&&t.contains(document.activeElement)&&(a=document.activeElement),t.removeAttribute("aria-hidden"),i.appendChild(t),a?.focus(),this._onAnnounce.next(),this._onAnnounce.complete()}},this._announceDelay)})}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=k({type:n,selectors:[["mat-snack-bar-container"]],viewQuery:function(t,i){if(t&1&&G(Ge,7)(Go,7),t&2){let a;C(a=w())&&(i._portalOutlet=a.first),C(a=w())&&(i._label=a.first)}},hostAttrs:[1,"mdc-snackbar","mat-mdc-snack-bar-container"],hostVars:6,hostBindings:function(t,i){t&1&&_("animationend",function(o){return i.onAnimationEnd(o.animationName)})("animationcancel",function(o){return i.onAnimationEnd(o.animationName)}),t&2&&A("mat-snack-bar-container-enter",i._animationState==="visible")("mat-snack-bar-container-exit",i._animationState==="hidden")("mat-snack-bar-container-animations-enabled",!i._animationsDisabled)},features:[K],decls:6,vars:3,consts:[["label",""],[1,"mdc-snackbar__surface","mat-mdc-snackbar-surface"],[1,"mat-mdc-snack-bar-label"],["aria-hidden","true"],["cdkPortalOutlet",""]],template:function(t,i){t&1&&(l(0,"div",1)(1,"div",2,0)(3,"div",3),Re(4,Uo,0,0,"ng-template",4),c(),E(5,"div"),c()()),t&2&&(d(5),S("aria-live",i._live)("role",i._role)("id",i._liveElementId))},dependencies:[Ge],styles:[`@keyframes _mat-snack-bar-enter {
  from {
    transform: scale(0.8);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
}
@keyframes _mat-snack-bar-exit {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
.mat-mdc-snack-bar-container {
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  margin: 8px;
}
.mat-mdc-snack-bar-handset .mat-mdc-snack-bar-container {
  width: 100vw;
}

.mat-snack-bar-container-animations-enabled {
  opacity: 0;
}
.mat-snack-bar-container-animations-enabled.mat-snack-bar-fallback-visible {
  opacity: 1;
}
.mat-snack-bar-container-animations-enabled.mat-snack-bar-container-enter {
  animation: _mat-snack-bar-enter 150ms cubic-bezier(0, 0, 0.2, 1) forwards;
}
.mat-snack-bar-container-animations-enabled.mat-snack-bar-container-exit {
  animation: _mat-snack-bar-exit 75ms cubic-bezier(0.4, 0, 1, 1) forwards;
}

.mat-mdc-snackbar-surface {
  box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12);
  display: flex;
  align-items: center;
  justify-content: flex-start;
  box-sizing: border-box;
  padding-left: 0;
  padding-right: 8px;
}
[dir=rtl] .mat-mdc-snackbar-surface {
  padding-right: 0;
  padding-left: 8px;
}
.mat-mdc-snack-bar-container .mat-mdc-snackbar-surface {
  min-width: 344px;
  max-width: 672px;
}
.mat-mdc-snack-bar-handset .mat-mdc-snackbar-surface {
  width: 100%;
  min-width: 0;
}
@media (forced-colors: active) {
  .mat-mdc-snackbar-surface {
    outline: solid 1px;
  }
}
.mat-mdc-snack-bar-container .mat-mdc-snackbar-surface {
  color: var(--mat-snack-bar-supporting-text-color, var(--mat-sys-inverse-on-surface));
  border-radius: var(--mat-snack-bar-container-shape, var(--mat-sys-corner-extra-small));
  background-color: var(--mat-snack-bar-container-color, var(--mat-sys-inverse-surface));
}

.mdc-snackbar__label {
  width: 100%;
  flex-grow: 1;
  box-sizing: border-box;
  margin: 0;
  padding: 14px 8px 14px 16px;
}
[dir=rtl] .mdc-snackbar__label {
  padding-left: 8px;
  padding-right: 16px;
}
.mat-mdc-snack-bar-container .mdc-snackbar__label {
  font-family: var(--mat-snack-bar-supporting-text-font, var(--mat-sys-body-medium-font));
  font-size: var(--mat-snack-bar-supporting-text-size, var(--mat-sys-body-medium-size));
  font-weight: var(--mat-snack-bar-supporting-text-weight, var(--mat-sys-body-medium-weight));
  line-height: var(--mat-snack-bar-supporting-text-line-height, var(--mat-sys-body-medium-line-height));
}

.mat-mdc-snack-bar-actions {
  display: flex;
  flex-shrink: 0;
  align-items: center;
  box-sizing: border-box;
}

.mat-mdc-snack-bar-handset,
.mat-mdc-snack-bar-container,
.mat-mdc-snack-bar-label {
  flex: 1 1 auto;
}

.mat-mdc-snack-bar-container .mat-mdc-button.mat-mdc-snack-bar-action:not(:disabled).mat-unthemed {
  color: var(--mat-snack-bar-button-color, var(--mat-sys-inverse-primary));
}
.mat-mdc-snack-bar-container .mat-mdc-button.mat-mdc-snack-bar-action:not(:disabled) {
  --mat-button-text-state-layer-color: currentColor;
  --mat-button-text-ripple-color: currentColor;
}
.mat-mdc-snack-bar-container .mat-mdc-button.mat-mdc-snack-bar-action:not(:disabled) .mat-ripple-element {
  opacity: 0.1;
}
`],encapsulation:2})}return n})(),Zo=new L("mat-snack-bar-default-options",{providedIn:"root",factory:()=>new Dt}),hr=(()=>{class n{_live=s(Xn);_injector=s(le);_breakpointObserver=s(Kn);_parentSnackBar=s(n,{optional:!0,skipSelf:!0});_defaultConfig=s(Zo);_animationsDisabled=oe();_snackBarRefAtThisLevel=null;simpleSnackBarComponent=Wo;snackBarContainerComponent=Xo;handsetCssClass="mat-mdc-snack-bar-handset";get _openedSnackBarRef(){let e=this._parentSnackBar;return e?e._openedSnackBarRef:this._snackBarRefAtThisLevel}set _openedSnackBarRef(e){this._parentSnackBar?this._parentSnackBar._openedSnackBarRef=e:this._snackBarRefAtThisLevel=e}constructor(){}openFromComponent(e,t){return this._attach(e,t)}openFromTemplate(e,t){return this._attach(e,t)}open(e,t="",i){let a=B(B({},this._defaultConfig),i);return a.data={message:e,action:t},a.announcementMessage===e&&(a.announcementMessage=void 0),this.openFromComponent(this.simpleSnackBarComponent,a)}dismiss(){this._openedSnackBarRef&&this._openedSnackBarRef.dismiss()}ngOnDestroy(){this._snackBarRefAtThisLevel&&this._snackBarRefAtThisLevel.dismiss()}_attachSnackBarContainer(e,t){let i=t&&t.viewContainerRef&&t.viewContainerRef.injector,a=le.create({parent:i||this._injector,providers:[{provide:Dt,useValue:t}]}),o=new je(this.snackBarContainerComponent,t.viewContainerRef,a),m=e.attach(o);return m.instance.snackBarConfig=t,m.instance}_attach(e,t){let i=B(B(B({},new Dt),this._defaultConfig),t),a=this._createOverlay(i),o=this._attachSnackBarContainer(a,i),m=new it(o,a);if(e instanceof Fe){let D=new At(e,null,{$implicit:i.data,snackBarRef:m});m.instance=o.attachTemplatePortal(D)}else{let D=this._createInjector(i,m),I=new je(e,void 0,D),j=o.attachComponentPortal(I);m.instance=j.instance}return this._breakpointObserver.observe(ea.HandsetPortrait).pipe(P(a.detachments())).subscribe(D=>{a.overlayElement.classList.toggle(this.handsetCssClass,D.matches)}),i.announcementMessage&&o._onAnnounce.subscribe(()=>{this._live.announce(i.announcementMessage,i.politeness)}),this._animateSnackBar(m,i),this._openedSnackBarRef=m,this._openedSnackBarRef}_animateSnackBar(e,t){e.afterDismissed().subscribe(()=>{this._openedSnackBarRef==e&&(this._openedSnackBarRef=null),t.announcementMessage&&this._live.clear()}),t.duration&&t.duration>0&&e.afterOpened().subscribe(()=>e._dismissAfter(t.duration)),this._openedSnackBarRef?(this._openedSnackBarRef.afterDismissed().subscribe(()=>{e.containerInstance.enter()}),this._openedSnackBarRef.dismiss()):e.containerInstance.enter()}_createOverlay(e){let t=new Xt;t.direction=e.direction;let i=Jt(this._injector),a=e.direction==="rtl",o=e.horizontalPosition==="left"||e.horizontalPosition==="start"&&!a||e.horizontalPosition==="end"&&a,m=!o&&e.horizontalPosition!=="center";return o?i.left("0"):m?i.right("0"):i.centerHorizontally(),e.verticalPosition==="top"?i.top("0"):i.bottom("0"),t.positionStrategy=i,t.disableAnimations=this._animationsDisabled,pt(this._injector,t)}_createInjector(e,t){let i=e&&e.viewContainerRef&&e.viewContainerRef.injector;return le.create({parent:i||this._injector,providers:[{provide:it,useValue:t},{provide:Ci,useValue:e.data}]})}static \u0275fac=function(t){return new(t||n)};static \u0275prov=se({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var Jo={info:"info",warning:"warning",error:"error"},wi=class n{data=s(Ci);snackBarRef=s(it);icon=Jo[this.data.severity];close(){this.snackBarRef.dismiss()}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=k({type:n,selectors:[["app-toast-message"]],decls:8,vars:4,consts:[[1,"toast-content"],[1,"toast-icon"],[1,"toast-message"],["type","button","aria-label","Dismiss",1,"toast-close",3,"click"]],template:function(e,t){e&1&&(l(0,"div",0)(1,"mat-icon",1),p(2),c(),l(3,"span",2),p(4),c(),l(5,"button",3),_("click",function(){return t.close()}),l(6,"mat-icon"),p(7,"close"),c()()()),e&2&&(X("toast-"+t.data.severity),d(2),y(t.icon),d(2),y(t.data.message))},dependencies:[be,ve],styles:[".toast-content[_ngcontent-%COMP%]{display:flex;align-items:center;gap:10px;padding:10px 12px;border-radius:8px;color:#fff;min-width:260px;max-width:420px;box-shadow:0 4px 12px #0003}.toast-icon[_ngcontent-%COMP%]{flex:0 0 auto}.toast-message[_ngcontent-%COMP%]{flex:1 1 auto;font-size:14px;line-height:1.4;word-break:break-word}.toast-close[_ngcontent-%COMP%]{flex:0 0 auto;background:none;border:none;padding:4px;margin:-4px -4px -4px 0;cursor:pointer;display:flex;align-items:center;color:inherit;opacity:.85}.toast-close[_ngcontent-%COMP%]:hover{opacity:1}.toast-close[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:18px;width:18px;height:18px;line-height:18px}.toast-info[_ngcontent-%COMP%]{background-color:#1976d2}.toast-warning[_ngcontent-%COMP%]{background-color:#f57c00}.toast-error[_ngcontent-%COMP%]{background-color:#c62828}"]})};var es=2500,Mi=class n{snackBar=s(hr);info(r){this.show(r,"info")}warning(r){this.show(r,"warning")}error(r){this.show(r,"error")}show(r,e="info"){this.snackBar.openFromComponent(wi,{data:{message:r,severity:e},duration:es,horizontalPosition:"end",verticalPosition:"top",panelClass:["app-toast-panel",`app-toast-panel-${e}`]})}static \u0275fac=function(e){return new(e||n)};static \u0275prov=se({token:n,factory:n.\u0275fac,providedIn:"root"})};var ur={doc:{path:"M15.5,17H14L12,9.5L10,17H8.5L6.1,7H7.8L9.34,14.5L11.3,7H12.7L14.67,14.5L16.2,7H17.9M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3Z",color:"#2b579a"},docx:{path:"M15.5,17H14L12,9.5L10,17H8.5L6.1,7H7.8L9.34,14.5L11.3,7H12.7L14.67,14.5L16.2,7H17.9M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3Z",color:"#2b579a"},xlsx:{path:"M16.2,17H14.2L12,13.2L9.8,17H7.8L11,12L7.8,7H9.8L12,10.8L14.2,7H16.2L13,12M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3Z",color:"#217346"},xls:{path:"M16.2,17H14.2L12,13.2L9.8,17H7.8L11,12L7.8,7H9.8L12,10.8L14.2,7H16.2L13,12M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3Z",color:"#217346"},pdf:{path:"M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3M9.5 11.5C9.5 12.3 8.8 13 8 13H7V15H5.5V9H8C8.8 9 9.5 9.7 9.5 10.5V11.5M14.5 13.5C14.5 14.3 13.8 15 13 15H10.5V9H13C13.8 9 14.5 9.7 14.5 10.5V13.5M18.5 10.5H17V11.5H18.5V13H17V15H15.5V9H18.5V10.5M12 10.5H13V13.5H12V10.5M7 10.5H8V11.5H7V10.5Z",color:"#c62828"},ppt:{path:"M9.8,13.4H12.3C13.8,13.4 14.46,13.12 15.1,12.58C15.74,12.03 16,11.25 16,10.23C16,9.26 15.75,8.5 15.1,7.88C14.45,7.29 13.83,7 12.3,7H8V17H9.8V13.4M19,3A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5C3,3.89 3.9,3 5,3H19M9.8,12V8.4H12.1C12.76,8.4 13.27,8.65 13.6,9C13.93,9.35 14.1,9.72 14.1,10.24C14.1,10.8 13.92,11.19 13.6,11.5C13.28,11.81 12.9,12 12.22,12H9.8Z",color:"#d24726"},pptx:{path:"M9.8,13.4H12.3C13.8,13.4 14.46,13.12 15.1,12.58C15.74,12.03 16,11.25 16,10.23C16,9.26 15.75,8.5 15.1,7.88C14.45,7.29 13.83,7 12.3,7H8V17H9.8V13.4M19,3A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5C3,3.89 3.9,3 5,3H19M9.8,12V8.4H12.1C12.76,8.4 13.27,8.65 13.6,9C13.93,9.35 14.1,9.72 14.1,10.24C14.1,10.8 13.92,11.19 13.6,11.5C13.28,11.81 12.9,12 12.22,12H9.8Z",color:"#d24726"},mpp:{path:"M13,9H18.5L13,3.5V9M6,2H14L20,8V20A2,2 0 0,1 18,22H6C4.89,22 4,21.1 4,20V4C4,2.89 4.89,2 6,2M7,20H9V14H7V20M11,20H13V12H11V20M15,20H17V16H15V20Z",color:"#31855F"}};function ki(n){return ur[n]??null}var vn=new Set(Object.keys(ur));var Si=class{bytes;view;sectorSize;miniSectorSize;headerRegionSize;miniStreamCutoff;firstDirSector;firstMiniFatSector;numMiniFatSectors;firstDifatSector;numFatSectors;difat;fat=[];miniFat=[];directory=[];miniStreamData=new Uint8Array(0);constructor(r){this.bytes=new Uint8Array(r),this.view=new DataView(r),this.parseHeader(),this.buildFat(),this.buildDirectory(),this.buildMiniFat(),this.buildMiniStream()}getAllEntries(){return this.directory.filter(r=>r.type!==0)}getRoot(){return this.directory[0]}getChildren(r){let e=[],t=i=>{if(i===-1)return;let a=this.directory[i];a&&(t(a.leftSibling),e.push(a),t(a.rightSibling))};return t(r.child),e}readStream(r){if(r.type!==2)throw new Error(`CFB directory entry "${r.name}" is not a stream`);return r.size===0?new Uint8Array(0):r.size<this.miniStreamCutoff?this.readFromMiniSectors(r.startSector,r.size):this.readFromRegularSectors(r.startSector,r.size)}parseHeader(){let r=[208,207,17,224,161,177,26,225];for(let i=0;i<8;i++)if(this.bytes[i]!==r[i])throw new Error("Not a valid .msg file: missing Compound File Binary signature");let e=this.view.getUint16(30,!0);this.sectorSize=1<<e;let t=this.view.getUint16(32,!0);this.miniSectorSize=1<<t,this.headerRegionSize=Math.max(512,this.sectorSize),this.numFatSectors=this.view.getUint32(44,!0),this.firstDirSector=this.view.getUint32(48,!0),this.miniStreamCutoff=this.view.getUint32(56,!0),this.firstMiniFatSector=this.view.getUint32(60,!0),this.numMiniFatSectors=this.view.getUint32(64,!0),this.firstDifatSector=this.view.getUint32(68,!0),this.difat=[];for(let i=0;i<109;i++)this.difat.push(this.view.getUint32(76+i*4,!0))}sectorOffset(r){return this.headerRegionSize+r*this.sectorSize}readSector(r){let e=this.sectorOffset(r);return this.bytes.slice(e,e+this.sectorSize)}buildFat(){let r=[];for(let i=0;i<109&&r.length<this.numFatSectors;i++){let a=this.difat[i];a!==4294967295&&r.push(a)}let e=this.firstDifatSector,t=this.sectorSize/4;for(;e!==4294967294&&e!==4294967295&&r.length<this.numFatSectors;){let i=this.readSector(e),a=new DataView(i.buffer,i.byteOffset,i.byteLength);for(let o=0;o<t-1&&r.length<this.numFatSectors;o++){let m=a.getUint32(o*4,!0);m!==4294967295&&r.push(m)}e=a.getUint32((t-1)*4,!0)}this.fat=[];for(let i of r){let a=this.readSector(i),o=new DataView(a.buffer,a.byteOffset,a.byteLength);for(let m=0;m<t;m++)this.fat.push(o.getUint32(m*4,!0))}}getChain(r,e){let t=[],i=r,a=0;for(;i!==4294967294&&i!==4294967295;)if(t.push(i),i=e[i],++a>2e6)throw new Error("Sector chain exceeded a sane length - file may be corrupt");return t}readFromRegularSectors(r,e){let t=this.getChain(r,this.fat),i=new Uint8Array(e),a=0;for(let o of t){let m=Math.min(this.sectorSize,e-a);if(m<=0)break;i.set(this.readSector(o).subarray(0,m),a),a+=m}return i}buildDirectory(){let r=this.getChain(this.firstDirSector,this.fat),e=this.sectorSize/128;this.directory=[];let t=0;for(let i of r){let a=this.readSector(i),o=new DataView(a.buffer,a.byteOffset,a.byteLength);for(let m=0;m<e;m++){let D=m*128,I=o.getUint16(D+64,!0),j="";if(I>2){let Ri=a.subarray(D,D+I-2);j=new TextDecoder("utf-16le").decode(Ri)}let ke=a[D+66],qe=o.getInt32(D+68,!0),$e=o.getInt32(D+72,!0),Le=o.getInt32(D+76,!0),Ke=o.getUint32(D+116,!0),at=o.getUint32(D+120,!0),rt=o.getUint32(D+124,!0)*4294967296+at;this.directory.push({index:t,name:j,type:ke,leftSibling:qe,rightSibling:$e,child:Le,startSector:Ke,size:rt}),t++}}}buildMiniFat(){if(this.miniFat=[],this.firstMiniFatSector===4294967294||this.numMiniFatSectors===0)return;let r=this.getChain(this.firstMiniFatSector,this.fat),e=this.sectorSize/4;for(let t of r){let i=this.readSector(t),a=new DataView(i.buffer,i.byteOffset,i.byteLength);for(let o=0;o<e;o++)this.miniFat.push(a.getUint32(o*4,!0))}}buildMiniStream(){let r=this.getRoot();if(!r||r.size===0){this.miniStreamData=new Uint8Array(0);return}this.miniStreamData=this.readFromRegularSectors(r.startSector,r.size)}readFromMiniSectors(r,e){let t=new Uint8Array(e),i=r,a=0,o=0;for(;i!==4294967294&&i!==4294967295&&a<e;){let m=i*this.miniSectorSize,D=Math.min(this.miniSectorSize,e-a);if(t.set(this.miniStreamData.subarray(m,m+D),a),a+=D,i=this.miniFat[i],++o>2e6)throw new Error("Mini sector chain exceeded a sane length - file may be corrupt")}return t}};var ts=55,is=3098,ns=3103,as=23809,rs=57,os=3590,ss=4096,ls=3093,cs=12289,ds=12291,ps=14846,ms=14087,hs=14084,us=14081,_s=14085,gs=3,fs=64,vs=31,bs=30,ys=258,Cs=32,ws=8,Ds=8,xs=1,Ms=2,ks={0:"NO_ATTACHMENT",1:"ATTACH_BY_VALUE",2:"ATTACH_BY_REFERENCE",3:"ATTACH_BY_REF_RESOLVE",4:"ATTACH_BY_REF_ONLY",5:"ATTACH_EMBEDDED_MSG",6:"ATTACH_OLE"},Ss=/^__recip_version1\.0_#[0-9A-Fa-f]{8}$/,Es=/^__attach_version1\.0_#[0-9A-Fa-f]{8}$/,Ei=class n{logger=s(ft);async parse(r){try{let e=await r.arrayBuffer(),t=new Si(e),i=t.getRoot(),a=t.getChildren(i),o=this.readString(t,a,ts)??"",m=this.cleanDisplayName(this.readString(t,a,is)),D=this.readString(t,a,as)??this.readString(t,a,ns)??"",I=this.normalizeBody(this.readString(t,a,ss)??""),j=this.readPropertiesStream(t,a,Cs),ke=this.readSysTimeIso(j,rs)??this.readSysTimeIso(j,os),qe=[],$e=[];for(let Q of a){if(Q.type!==1||!Ss.test(Q.name))continue;let rt=t.getChildren(Q),Ri=this.readPropertiesStream(t,rt,ws),kn=this.readLong(Ri,ls),Sn={name:this.cleanDisplayName(this.readString(t,rt,cs)),email:this.readString(t,rt,ps)??this.readString(t,rt,ds)??""};kn===xs?qe.push(Sn):kn===Ms&&$e.push(Sn)}let Le=this.readAttachments(t,a);Le.length>0&&this.logger.debugLog(`FileParserMsg: "${r.name}" has ${Le.length} attachment(s)`,Le.map(Q=>({fileName:Q.fileName,extension:Q.extension,sizeBytes:Q.bytes?Q.bytes.length:null,attachMethod:Q.attachMethod})));let Ke=Le.filter(Q=>Q.bytes!==null).map(Q=>({fileName:Q.fileName,extension:Q.extension,bytes:Q.bytes})),at={subject:o,from:{name:m,email:D},to:qe,cc:$e,date:ke,body:I,attachments:Ke};return this.logger.debugLog(`FileParserMsg: parsed "${r.name}"`,Se(B({},at),{attachments:Ke.map(Q=>Q.fileName)})),at}catch(e){return this.logger.debugLog(`FileParserMsg: failed to parse "${r.name}"`,e),null}}readAttachments(r,e){let t=[];for(let i of e){if(i.type!==1||!Es.test(i.name))continue;let a=r.getChildren(i),o=this.readPropertiesStream(r,a,Ds),m=this.readLong(o,_s),D=this.readString(r,a,ms)??this.readString(r,a,hs)??"(unnamed attachment)",I=this.readBinary(r,a,us);t.push({fileName:D,extension:this.extractExtension(D),bytes:I,attachMethod:m!==null?ks[m]??`UNKNOWN(${m})`:"UNKNOWN"})}return t}extractExtension(r){let e=r.lastIndexOf(".");return e>=0?r.slice(e+1).toLowerCase():""}readBinary(r,e,t){let a=`__substg1.0_${t.toString(16).padStart(4,"0").toUpperCase()}${ys.toString(16).padStart(4,"0").toUpperCase()}`,o=e.find(m=>m.type===2&&m.name===a);return o?r.readStream(o):null}cleanDisplayName(r){return r?r.replace(/\s*<[^>]*>\s*$/,"").trim():""}normalizeBody(r){let e=`\r
\r
 \r
\r
`,t=`\r
\r
`,i=r;for(;i.includes(e);)i=i.split(e).join(t);return i}readString(r,e,t){let i=t.toString(16).padStart(4,"0").toUpperCase(),a=`__substg1.0_${i}${vs.toString(16).padStart(4,"0").toUpperCase()}`,o=e.find(I=>I.type===2&&I.name===a);if(o){let I=r.readStream(o);return new TextDecoder("utf-16le").decode(I).replace(/\u0000+$/,"")}let m=`__substg1.0_${i}${bs.toString(16).padStart(4,"0").toUpperCase()}`,D=e.find(I=>I.type===2&&I.name===m);if(D){let I=r.readStream(D);return new TextDecoder("windows-1252").decode(I).replace(/\u0000+$/,"")}return null}readPropertiesStream(r,e,t){let i=new Map,a=e.find(I=>I.type===2&&I.name==="__properties_version1.0");if(!a)return i;let o=r.readStream(a),m=new DataView(o.buffer,o.byteOffset,o.byteLength),D=Math.floor((o.length-t)/16);for(let I=0;I<D;I++){let j=t+I*16,ke=m.getUint16(j,!0),qe=m.getUint16(j+2,!0),$e=o.slice(j+8,j+16);i.set(qe,{propType:ke,value:$e})}return i}readLong(r,e){let t=r.get(e);return!t||t.propType!==gs?null:new DataView(t.value.buffer,t.value.byteOffset,t.value.byteLength).getInt32(0,!0)}readSysTimeIso(r,e){let t=r.get(e);if(!t||t.propType!==fs)return null;let i=new DataView(t.value.buffer,t.value.byteOffset,t.value.byteLength),a=i.getUint32(0,!0),o=i.getUint32(4,!0),m=BigInt(o)<<32n|BigInt(a),I=Number((m-116444736000000000n)/10000n);return new Date(I).toISOString()}static \u0275fac=function(e){return new(e||n)};static \u0275prov=se({token:n,factory:n.\u0275fac,providedIn:"root"})};var Is=(n,r)=>r.FileName;function As(n,r){n&1&&(l(0,"div",2),p(1,"Nothing to show for this email."),c())}function Ts(n,r){if(n&1&&(l(0,"div",6)(1,"span",7),p(2,"To"),c(),l(3,"span",8),p(4),c()()),n&2){let e=h(2);d(4),y(e.formatRecipients(e.data.to))}}function Os(n,r){if(n&1&&(l(0,"div",6)(1,"span",7),p(2,"Cc"),c(),l(3,"span",8),p(4),c()()),n&2){let e=h(2);d(4),y(e.formatRecipients(e.data.cc))}}function Fs(n,r){if(n&1&&(l(0,"div",6)(1,"span",7),p(2,"Date"),c(),l(3,"span",8),p(4),dt(5,"date"),c()()),n&2){let e=h(2);d(4),y(Et(5,1,e.data.date,"dd MMM y, HH:mm"))}}function Ps(n,r){if(n&1){let e=V();l(0,"div",14),_("click",function(){let i=x(e).$implicit,a=h(3);return M(a.openDocument(i))}),_e(),l(1,"svg",15),E(2,"path"),c(),We(),l(3,"span",16),p(4),c()()}if(n&2){let e,t,i=r.$implicit,a=h(3);d(2),S("d",(e=a.getFileTypeIcon(a.getDocExtension(i.FileName)))==null?null:e.path)("fill",(t=a.getFileTypeIcon(a.getDocExtension(i.FileName)))==null?null:t.color),d(2),y(i.OriginalName)}}function Rs(n,r){if(n&1&&(l(0,"div",9)(1,"div",11),p(2,"Attachments"),c(),l(3,"div",12),H(4,Ps,5,3,"div",13,Is),c()()),n&2){let e=h(2);d(4),Y(e.data.Docs)}}function Vs(n,r){if(n&1&&(l(0,"div",5)(1,"div",6)(2,"span",7),p(3,"From"),c(),l(4,"span",8),p(5),c()(),f(6,Ts,5,1,"div",6),f(7,Os,5,1,"div",6),f(8,Fs,6,4,"div",6),c(),f(9,Rs,6,0,"div",9),l(10,"div",10),p(11),c()),n&2){let e=h();d(5),kt("",e.data.from.name," <",e.data.from.email,">"),d(),v(e.data.to.length>0?6:-1),d(),v(e.data.cc.length>0?7:-1),d(),v(e.data.date?8:-1),d(),v(e.data.Docs&&e.data.Docs.length>0?9:-1),d(2),y(e.data.body)}}var Ii=class n{data=s(mt);dataService=s(vt);formatRecipients(r){return r.map(e=>e.name||e.email).join("; ")}getDocExtension(r){let e=r.toLowerCase().split(".");return e.length>1?e[e.length-1]:""}getFileTypeIcon(r){return ki(r)}openDocument(r){let e=this.dataService.getDocumentViewUrl(r.FileName,r.SourceDocId);window.open(e,"_blank","noopener,noreferrer")}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=k({type:n,selectors:[["app-email-dialog"]],decls:12,vars:2,consts:[["mat-dialog-title",""],[1,"email-dialog-content"],[1,"no-content"],["align","end"],["mat-button","","mat-dialog-close",""],[1,"email-meta"],[1,"email-meta-row"],[1,"email-meta-label"],[1,"email-meta-value"],[1,"email-docs"],[1,"email-body"],[1,"email-docs-label"],[1,"email-docs-list"],[1,"email-doc-chip"],[1,"email-doc-chip",3,"click"],["viewBox","0 0 24 24",1,"doc-type-icon"],[1,"email-doc-name"]],template:function(e,t){e&1&&(l(0,"h2",0)(1,"mat-icon"),p(2,"mail"),c(),p(3),c(),l(4,"mat-dialog-content",1),f(5,As,2,0,"div",2)(6,Vs,12,7),c(),l(7,"mat-dialog-actions",3)(8,"button",4)(9,"mat-icon"),p(10,"close"),c(),p(11," Close "),c()()),e&2&&(d(3),U(" ",t.data.subject||"(no subject)",`
`),d(2),v(!t.data.body&&t.data.to.length===0&&t.data.cc.length===0&&!t.data.date?5:6))},dependencies:[_t,da,ht,ti,ut,Me,xe,be,ve,Qt],styles:["h2[mat-dialog-title][_ngcontent-%COMP%]{display:flex;align-items:center;gap:12px}mat-dialog-content[_ngcontent-%COMP%]{min-height:300px;max-height:60vh}.no-content[_ngcontent-%COMP%]{text-align:center;color:var(--mat-sys-on-surface-variant);padding:48px 16px;font-size:16px}.email-meta[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:1px;margin-bottom:8px}.email-meta-row[_ngcontent-%COMP%]{display:flex;gap:12px;padding:12px;background-color:var(--mat-sys-surface-container-low);font-size:13px;border-radius:4px}.email-meta-label[_ngcontent-%COMP%]{flex:0 0 40px;color:var(--mat-sys-primary);font-weight:600}.email-meta-value[_ngcontent-%COMP%]{color:var(--mat-sys-on-surface);word-break:break-word}.email-body[_ngcontent-%COMP%]{margin:8px 0 0;padding:12px;background-color:var(--mat-sys-surface-container);border-radius:4px;font-size:13px;line-height:1.5;color:var(--mat-sys-on-surface-variant);border-left:3px solid var(--mat-sys-primary);white-space:pre-wrap;word-break:break-word}.email-docs[_ngcontent-%COMP%]{margin-top:16px}.email-docs-label[_ngcontent-%COMP%]{font-size:12px;font-weight:600;color:var(--mat-sys-on-surface-variant);text-transform:uppercase;letter-spacing:.04em;margin-bottom:6px}.email-docs-list[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:4px}.email-doc-chip[_ngcontent-%COMP%]{display:flex;align-items:center;gap:8px;padding:8px 10px;border-radius:6px;background-color:var(--mat-sys-surface-container-low);border:1px solid var(--mat-sys-outline-variant, #d5d8dc);cursor:pointer;transition:background-color .15s ease,border-color .15s ease}.email-doc-chip[_ngcontent-%COMP%]:hover{background-color:var(--mat-sys-surface-container);border-color:var(--mat-sys-primary)}.email-doc-chip[_ngcontent-%COMP%]   .doc-type-icon[_ngcontent-%COMP%]{width:18px;height:18px;flex:0 0 auto}.email-doc-name[_ngcontent-%COMP%]{font-size:13px;color:var(--mat-sys-on-surface);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}mat-dialog-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{display:flex;align-items:center;gap:8px}"]})};var Ai=class n{data=s(mt);dialogRef=s(ei);confirm(){this.dialogRef.close(!0)}cancel(){this.dialogRef.close(!1)}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=k({type:n,selectors:[["app-confirm-dialog"]],decls:16,vars:5,consts:[["mat-dialog-title",""],[1,"confirm-message"],["align","end"],["mat-button","",3,"click"],["mat-raised-button","","color","warn",3,"click"]],template:function(e,t){e&1&&(l(0,"h2",0)(1,"mat-icon"),p(2),c(),p(3),c(),l(4,"mat-dialog-content")(5,"p",1),p(6),c()(),l(7,"mat-dialog-actions",2)(8,"button",3),_("click",function(){return t.cancel()}),l(9,"mat-icon"),p(10,"close"),c(),p(11),c(),l(12,"button",4),_("click",function(){return t.confirm()}),l(13,"mat-icon"),p(14,"delete"),c(),p(15),c()()),e&2&&(d(2),y(t.data.icon||"warning"),d(),U(" ",t.data.title,`
`),d(3),y(t.data.message),d(5),U(" ",t.data.cancelText||"Cancel"," "),d(4),U(" ",t.data.confirmText||"Delete"," "))},dependencies:[_t,ht,ti,ut,Me,xe,be,ve],styles:["h2[mat-dialog-title][_ngcontent-%COMP%]{display:flex;align-items:center;gap:12px}.confirm-message[_ngcontent-%COMP%]{margin:0;font-size:14px;color:var(--mat-sys-on-surface-variant)}mat-dialog-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{display:flex;align-items:center;gap:8px}"]})};var Ls=["*"];function Ns(n,r){n&1&&N(0)}var yn=(()=>{class n{_elementRef=s(R);constructor(){}focus(){this._elementRef.nativeElement.focus()}static \u0275fac=function(t){return new(t||n)};static \u0275dir=F({type:n,selectors:[["","cdkStepHeader",""]],hostAttrs:["role","tab"]})}return n})(),Cn=(()=>{class n{template=s(Fe);constructor(){}static \u0275fac=function(t){return new(t||n)};static \u0275dir=F({type:n,selectors:[["","cdkStepLabel",""]]})}return n})();var nt={NUMBER:"number",EDIT:"edit",DONE:"done",ERROR:"error"},Bs=new L("STEPPER_GLOBAL_OPTIONS"),Ti=(()=>{class n{_stepperOptions;_stepper=s(Lt);_displayDefaultIndicatorType;stepLabel;_childForms;content;stepControl;get interacted(){return this._interacted()}set interacted(e){this._interacted.set(e)}_interacted=g(!1);interactedStream=new b;label;errorMessage;ariaLabel;ariaLabelledby;get state(){return this._state()}set state(e){this._state.set(e)}_state=g(void 0);get editable(){return this._editable()}set editable(e){this._editable.set(e)}_editable=g(!0);optional=!1;get completed(){let e=this._completedOverride(),t=this._interacted();return e??(t&&(!this.stepControl||this.stepControl.valid))}set completed(e){this._completedOverride.set(e)}_completedOverride=g(null);index=g(-1);isSelected=Gt(()=>this._stepper.selectedIndex===this.index());indicatorType=Gt(()=>{let e=this.isSelected(),t=this.completed,i=this._state()??nt.NUMBER,a=this._editable();return this._showError()&&this.hasError&&!e?nt.ERROR:this._displayDefaultIndicatorType?!t||e?nt.NUMBER:a?nt.EDIT:nt.DONE:t&&!e?nt.DONE:t&&e?i:a&&e?nt.EDIT:i});isNavigable=Gt(()=>{let e=this.isSelected();return this.completed||e||!this._stepper.linear});get hasError(){let e=this._customError();return e??this._getDefaultError()}set hasError(e){this._customError.set(e)}_customError=g(null);_getDefaultError(){return this.interacted&&!!this.stepControl?.invalid}constructor(){let e=s(Bs,{optional:!0});this._stepperOptions=e||{},this._displayDefaultIndicatorType=this._stepperOptions.displayDefaultIndicatorType!==!1}select(){this._stepper.selected=this}reset(){this._interacted.set(!1),this._completedOverride()!=null&&this._completedOverride.set(!1),this._customError()!=null&&this._customError.set(!1),this.stepControl&&(this._childForms?.forEach(e=>e.resetForm?.()),this.stepControl.reset())}ngOnChanges(){this._stepper._stateChanged()}_markAsInteracted(){this._interacted()||(this._interacted.set(!0),this.interactedStream.emit(this))}_showError(){return this._stepperOptions.showError??this._customError()!=null}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=k({type:n,selectors:[["cdk-step"]],contentQueries:function(t,i,a){if(t&1&&pe(a,Cn,5)(a,Yi,5),t&2){let o;C(o=w())&&(i.stepLabel=o.first),C(o=w())&&(i._childForms=o)}},viewQuery:function(t,i){if(t&1&&G(Fe,7),t&2){let a;C(a=w())&&(i.content=a.first)}},inputs:{stepControl:"stepControl",label:"label",errorMessage:"errorMessage",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],state:"state",editable:[2,"editable","editable",T],optional:[2,"optional","optional",T],completed:[2,"completed","completed",T],hasError:[2,"hasError","hasError",T]},outputs:{interactedStream:"interacted"},exportAs:["cdkStep"],features:[ie],ngContentSelectors:Ls,decls:1,vars:0,template:function(t,i){t&1&&($(),Vi(0,Ns,1,0,"ng-template"))},encapsulation:2,changeDetection:0})}return n})(),Lt=(()=>{class n{_dir=s(De,{optional:!0});_changeDetectorRef=s(z);_elementRef=s(R);_destroyed=new O;_keyManager;_steps;steps=new Xe;_stepHeader;_sortedHeaders=new Xe;get linear(){return this._linear()}set linear(e){this._linear.set(e)}_linear=g(!1);get selectedIndex(){return this._selectedIndex()}set selectedIndex(e){this._steps?(this._isValidIndex(e),this.selectedIndex!==e&&(this.selected?._markAsInteracted(),!this._anyControlsInvalidOrPending(e)&&(e>=this.selectedIndex||this.steps.toArray()[e].editable)&&this._updateSelectedItemIndex(e))):this._selectedIndex.set(e)}_selectedIndex=g(0);get selected(){return this.steps?this.steps.toArray()[this.selectedIndex]:void 0}set selected(e){this.selectedIndex=e&&this.steps?this.steps.toArray().indexOf(e):-1}selectionChange=new b;selectedIndexChange=new b;_groupId=s(ce).getId("cdk-stepper-");get orientation(){return this._orientation}set orientation(e){this._orientation=e,this._keyManager&&this._keyManager.withVerticalOrientation(e==="vertical")}_orientation="horizontal";constructor(){}ngAfterContentInit(){this._steps.changes.pipe(te(this._steps),P(this._destroyed)).subscribe(e=>{this.steps.reset(e.filter(t=>t._stepper===this)),this.steps.forEach((t,i)=>t.index.set(i)),this.steps.notifyOnChanges()})}ngAfterViewInit(){if(this._stepHeader.changes.pipe(te(this._stepHeader),P(this._destroyed)).subscribe(e=>{this._sortedHeaders.reset(e.toArray().sort((t,i)=>t._elementRef.nativeElement.compareDocumentPosition(i._elementRef.nativeElement)&Node.DOCUMENT_POSITION_FOLLOWING?-1:1)),this._sortedHeaders.notifyOnChanges()}),this._keyManager=new qt(this._sortedHeaders).withWrap().withHomeAndEnd().withVerticalOrientation(this._orientation==="vertical"),this._keyManager.updateActiveItem(this.selectedIndex),(this._dir?this._dir.change:Ne()).pipe(te(this._layoutDirection()),P(this._destroyed)).subscribe(e=>this._keyManager?.withHorizontalOrientation(e)),this._keyManager.updateActiveItem(this.selectedIndex),this.steps.changes.subscribe(()=>{this.selected||this._selectedIndex.set(Math.max(this.selectedIndex-1,0))}),this._isValidIndex(this.selectedIndex)||this._selectedIndex.set(0),this.linear&&this.selectedIndex>0){let e=this.steps.toArray().slice(0,this._selectedIndex());for(let t of e)t._markAsInteracted()}}ngOnDestroy(){this._keyManager?.destroy(),this.steps.destroy(),this._sortedHeaders.destroy(),this._destroyed.next(),this._destroyed.complete()}next(){this.selectedIndex=Math.min(this._selectedIndex()+1,this.steps.length-1)}previous(){this.selectedIndex=Math.max(this._selectedIndex()-1,0)}reset(){this._updateSelectedItemIndex(0),this.steps.forEach(e=>e.reset()),this._stateChanged()}_getStepLabelId(e){return`${this._groupId}-label-${e}`}_getStepContentId(e){return`${this._groupId}-content-${e}`}_stateChanged(){this._changeDetectorRef.markForCheck()}_getAnimationDirection(e){let t=e-this._selectedIndex();return t<0?this._layoutDirection()==="rtl"?"next":"previous":t>0?this._layoutDirection()==="rtl"?"previous":"next":"current"}_getFocusIndex(){return this._keyManager?this._keyManager.activeItemIndex:this._selectedIndex()}_updateSelectedItemIndex(e){let t=this.steps.toArray(),i=this._selectedIndex();this.selectionChange.emit({selectedIndex:e,previouslySelectedIndex:i,selectedStep:t[e],previouslySelectedStep:t[i]}),this._keyManager&&(this._containsFocus()?this._keyManager.setActiveItem(e):this._keyManager.updateActiveItem(e)),this._selectedIndex.set(e),this.selectedIndexChange.emit(e),this._stateChanged()}_onKeydown(e){let t=re(e),i=e.keyCode,a=this._keyManager;a?.activeItemIndex!=null&&!t&&(i===32||i===13)?(this.selectedIndex=a.activeItemIndex,e.preventDefault()):a?.setFocusOrigin("keyboard").onKeydown(e)}_anyControlsInvalidOrPending(e){return this.linear&&e>=0?this.steps.toArray().slice(0,e).some(t=>{let i=t.stepControl;return(i?i.invalid||i.pending||!t.interacted:!t.completed)&&!t.optional&&!t._completedOverride()}):!1}_layoutDirection(){return this._dir&&this._dir.value==="rtl"?"rtl":"ltr"}_containsFocus(){let e=this._elementRef.nativeElement,t=It();return e===t||e.contains(t)}_isValidIndex(e){return e>-1&&(!this.steps||e<this.steps.length)}static \u0275fac=function(t){return new(t||n)};static \u0275dir=F({type:n,selectors:[["","cdkStepper",""]],contentQueries:function(t,i,a){if(t&1&&pe(a,Ti,5)(a,yn,5),t&2){let o;C(o=w())&&(i._steps=o),C(o=w())&&(i._stepHeader=o)}},inputs:{linear:[2,"linear","linear",T],selectedIndex:[2,"selectedIndex","selectedIndex",Ze],selected:"selected",orientation:"orientation"},outputs:{selectionChange:"selectionChange",selectedIndexChange:"selectedIndexChange"},exportAs:["cdkStepper"]})}return n})();var gr=(()=>{class n{_stepper=s(Lt);type="button";constructor(){}static \u0275fac=function(t){return new(t||n)};static \u0275dir=F({type:n,selectors:[["button","cdkStepperPrevious",""]],hostVars:1,hostBindings:function(t,i){t&1&&_("click",function(){return i._stepper.previous()}),t&2&&q("type",i.type)},inputs:{type:"type"}})}return n})(),fr=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=ge({type:n});static \u0275inj=ue({imports:[Ie]})}return n})();var zs=(n,r,e)=>({index:n,active:r,optional:e});function Hs(n,r){if(n&1&&Ee(0,2),n&2){let e=h();u("ngTemplateOutlet",e.iconOverrides[e.state])("ngTemplateOutletContext",zn(2,zs,e.index,e.active,e.optional))}}function Ys(n,r){if(n&1&&(l(0,"span",7),p(1),c()),n&2){let e=h(2);d(),y(e._getDefaultTextForState(e.state))}}function js(n,r){if(n&1&&(l(0,"span",8),p(1),c()),n&2){let e=h(3);d(),y(e._intl.completedLabel)}}function Gs(n,r){if(n&1&&(l(0,"span",8),p(1),c()),n&2){let e=h(3);d(),y(e._intl.editableLabel)}}function Us(n,r){if(n&1&&(f(0,js,2,1,"span",8)(1,Gs,2,1,"span",8),l(2,"mat-icon",7),p(3),c()),n&2){let e=h(2);v(e.state==="done"?0:e.state==="edit"?1:-1),d(3),y(e._getDefaultTextForState(e.state))}}function Qs(n,r){if(n&1&&f(0,Ys,2,1,"span",7)(1,Us,4,2),n&2){let e,t=h();v((e=t.state)==="number"?0:1)}}function qs(n,r){n&1&&(l(0,"div",4),Ee(1,9),c()),n&2&&(d(),u("ngTemplateOutlet",r.template))}function $s(n,r){if(n&1&&(l(0,"div",4),p(1),c()),n&2){let e=h();d(),y(e.label)}}function Ks(n,r){if(n&1&&(l(0,"div",5),p(1),c()),n&2){let e=h();d(),y(e._intl.optionalLabel)}}function Ws(n,r){if(n&1&&(l(0,"div",6),p(1),c()),n&2){let e=h();d(),y(e.errorMessage)}}var vr=["*"];function Xs(n,r){}function Zs(n,r){if(n&1&&(N(0),Re(1,Xs,0,0,"ng-template",0)),n&2){let e=h();d(),u("cdkPortalOutlet",e._portal)}}var Js=["animatedContainer"],br=n=>({steps:n}),yr=n=>({step:n});function el(n,r){n&1&&N(0)}function tl(n,r){if(n&1&&(l(0,"div",5),Ee(1,9)(2,6),c()),n&2){let e=h(2),t=ae(6);d(),u("ngTemplateOutlet",e.headerPrefix()),d(),u("ngTemplateOutlet",t)("ngTemplateOutletContext",St(3,br,e.steps))}}function il(n,r){if(n&1&&Ee(0,6),n&2){let e=h(2),t=ae(6);u("ngTemplateOutlet",t)("ngTemplateOutletContext",St(2,br,e.steps))}}function nl(n,r){if(n&1&&(l(0,"div",10,2),Ee(2,9),c()),n&2){let e=r.$implicit,t=r.$index,i=h(2);X("mat-horizontal-stepper-content-"+i._getAnimationDirection(t)),u("id",i._getStepContentId(t)),S("aria-labelledby",i._getStepLabelId(t))("inert",i.selectedIndex===t?null:""),d(2),u("ngTemplateOutlet",e.content)}}function al(n,r){if(n&1&&(l(0,"div",3),f(1,tl,3,5,"div",5)(2,il,1,4,"ng-container",6),l(3,"div",7),H(4,nl,3,6,"div",8,lt),c()()),n&2){let e=h();d(),v(e.headerPrefix()?1:2),d(3),Y(e.steps)}}function rl(n,r){if(n&1&&Ee(0,9),n&2){let e=h(2);u("ngTemplateOutlet",e.headerPrefix())}}function ol(n,r){if(n&1&&(l(0,"div",11),Ee(1,6),l(2,"div",12,2)(4,"div",13)(5,"div",14),Ee(6,9),c()()()()),n&2){let e=r.$implicit,t=r.$index,i=r.$index,a=r.$count,o=h(2),m=ae(4);d(),u("ngTemplateOutlet",m)("ngTemplateOutletContext",St(11,yr,e)),d(),A("mat-stepper-vertical-line",i!==a-1)("mat-vertical-content-container-active",o.selectedIndex===t),S("inert",o.selectedIndex===t?null:"")("aria-label",o.ariaLabel),d(2),u("id",o._getStepContentId(t)),S("aria-labelledby",o._getStepLabelId(t)),d(2),u("ngTemplateOutlet",e.content)}}function sl(n,r){if(n&1&&(l(0,"div",4),f(1,rl,1,1,"ng-container",9),H(2,ol,7,13,"div",11,lt),c()),n&2){let e=h();d(),v(e.headerPrefix()?1:-1),d(),Y(e.steps)}}function ll(n,r){if(n&1){let e=V();l(0,"mat-step-header",15),_("click",function(){let i=x(e).step;return M(i.select())})("keydown",function(i){x(e);let a=h();return M(a._onKeydown(i))}),c()}if(n&2){let e=r.step,t=h();A("mat-horizontal-stepper-header",t.orientation==="horizontal")("mat-vertical-stepper-header",t.orientation==="vertical"),u("tabIndex",t._getFocusIndex()===e.index()?0:-1)("id",t._getStepLabelId(e.index()))("index",e.index())("state",e.indicatorType())("label",e.stepLabel||e.label)("selected",e.isSelected())("active",e.isNavigable())("optional",e.optional)("errorMessage",e.errorMessage)("iconOverrides",t._iconOverrides)("disableRipple",t.disableRipple||!e.isNavigable())("color",e.color||t.color),S("role",t.orientation==="horizontal"?"tab":"button")("aria-posinset",t.orientation==="horizontal"?e.index()+1:null)("aria-setsize",t.orientation==="horizontal"?t.steps.length:null)("aria-selected",t.orientation==="horizontal"?e.isSelected():null)("aria-current",t.orientation==="vertical"&&e.isSelected()?"step":null)("aria-disabled",t.orientation==="vertical"&&e.isSelected()?"true":null)("aria-expanded",t.orientation==="vertical"?e.isSelected():null)("aria-controls",t._getStepContentId(e.index()))("aria-label",e.ariaLabel||null)("aria-labelledby",!e.ariaLabel&&e.ariaLabelledby?e.ariaLabelledby:null)("aria-disabled",e.isNavigable()?null:!0)}}function cl(n,r){n&1&&E(0,"div",17)}function dl(n,r){if(n&1&&(Ee(0,6),f(1,cl,1,0,"div",17)),n&2){let e=r.$implicit,t=r.$index,i=r.$count;h(2);let a=ae(4);u("ngTemplateOutlet",a)("ngTemplateOutletContext",St(3,yr,e)),d(),v(t!==i-1?1:-1)}}function pl(n,r){if(n&1&&(l(0,"div",16),H(1,dl,2,5,null,null,lt),c()),n&2){let e=r.steps,t=h();S("aria-label",t.ariaLabel),d(),Y(e)}}var wn=(()=>{class n extends Cn{static \u0275fac=(()=>{let e;return function(i){return(e||(e=Oe(n)))(i||n)}})();static \u0275dir=F({type:n,selectors:[["","matStepLabel",""]],features:[K]})}return n})(),ml=(()=>{class n{changes=new O;optionalLabel="Optional";completedLabel="Completed";editableLabel="Editable";static \u0275fac=function(t){return new(t||n)};static \u0275prov=se({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),Dn=(()=>{class n extends yn{_intl=s(ml);_focusMonitor=s(Ye);_intlSubscription;state;label;errorMessage;iconOverrides;index;selected=!1;active=!1;optional=!1;disableRipple=!1;color;constructor(){super();let e=s(fe);e.load(Ve),e.load(ze);let t=s(z);this._intlSubscription=this._intl.changes.subscribe(()=>t.markForCheck())}ngAfterViewInit(){this._focusMonitor.monitor(this._elementRef,!0)}ngOnDestroy(){this._intlSubscription.unsubscribe(),this._focusMonitor.stopMonitoring(this._elementRef)}focus(e,t){e?this._focusMonitor.focusVia(this._elementRef,e,t):this._elementRef.nativeElement.focus(t)}_stringLabel(){return this.label instanceof wn?null:this.label}_templateLabel(){return this.label instanceof wn?this.label:null}_getHostElement(){return this._elementRef.nativeElement}_getDefaultTextForState(e){return e=="number"?`${this.index+1}`:e=="edit"?"create":e=="error"?"warning":e}_hasEmptyLabel(){return!this._stringLabel()&&!this._templateLabel()&&!this._hasOptionalLabel()&&!this._hasErrorLabel()}_hasOptionalLabel(){return this.optional&&this.state!=="error"}_hasErrorLabel(){return this.state==="error"}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=k({type:n,selectors:[["mat-step-header"]],hostAttrs:["role","",1,"mat-step-header"],hostVars:4,hostBindings:function(t,i){t&2&&(X("mat-"+(i.color||"primary")),A("mat-step-header-empty-label",i._hasEmptyLabel()))},inputs:{state:"state",label:"label",errorMessage:"errorMessage",iconOverrides:"iconOverrides",index:"index",selected:"selected",active:"active",optional:"optional",disableRipple:"disableRipple",color:"color"},features:[K],decls:10,vars:17,consts:[["matRipple","",1,"mat-step-header-ripple","mat-focus-indicator",3,"matRippleTrigger","matRippleDisabled"],[1,"mat-step-icon-content"],[3,"ngTemplateOutlet","ngTemplateOutletContext"],[1,"mat-step-label"],[1,"mat-step-text-label"],[1,"mat-step-optional"],[1,"mat-step-sub-label-error"],["aria-hidden","true"],[1,"cdk-visually-hidden"],[3,"ngTemplateOutlet"]],template:function(t,i){if(t&1&&(E(0,"div",0),l(1,"div")(2,"div",1),f(3,Hs,1,6,"ng-container",2)(4,Qs,2,1),c()(),l(5,"div",3),f(6,qs,2,1,"div",4)(7,$s,2,1,"div",4),f(8,Ks,2,1,"div",5),f(9,Ws,2,1,"div",6),c()),t&2){let a;u("matRippleTrigger",i._getHostElement())("matRippleDisabled",i.disableRipple),d(),X(Nn("mat-step-icon-state-",i.state," mat-step-icon")),A("mat-step-icon-selected",i.selected),d(2),v(i.iconOverrides&&i.iconOverrides[i.state]?3:4),d(2),A("mat-step-label-active",i.active)("mat-step-label-selected",i.selected)("mat-step-label-error",i.state=="error"),d(),v((a=i._templateLabel())?6:i._stringLabel()?7:-1,a),d(2),v(i._hasOptionalLabel()?8:-1),d(),v(i._hasErrorLabel()?9:-1)}},dependencies:[$t,Ni,ve],styles:[`.mat-step-header {
  overflow: hidden;
  outline: none;
  cursor: pointer;
  position: relative;
  box-sizing: content-box;
  -webkit-tap-highlight-color: transparent;
}
.mat-step-header:focus-visible .mat-focus-indicator::before {
  content: "";
}
.mat-step-header:hover[aria-disabled=true] {
  cursor: default;
}
.mat-step-header:hover:not([aria-disabled]), .mat-step-header:hover[aria-disabled=false] {
  background-color: var(--mat-stepper-header-hover-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-hover-state-layer-opacity) * 100%), transparent));
  border-radius: var(--mat-stepper-header-hover-state-layer-shape, var(--mat-sys-corner-medium));
}
.mat-step-header.cdk-keyboard-focused, .mat-step-header.cdk-program-focused {
  background-color: var(--mat-stepper-header-focus-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-focus-state-layer-opacity) * 100%), transparent));
  border-radius: var(--mat-stepper-header-focus-state-layer-shape, var(--mat-sys-corner-medium));
}
@media (hover: none) {
  .mat-step-header:hover {
    background: none;
  }
}
@media (forced-colors: active) {
  .mat-step-header {
    outline: solid 1px;
  }
  .mat-step-header[aria-selected=true] .mat-step-label {
    text-decoration: underline;
  }
  .mat-step-header[aria-disabled=true] {
    outline-color: GrayText;
  }
  .mat-step-header[aria-disabled=true] .mat-step-label,
  .mat-step-header[aria-disabled=true] .mat-step-icon,
  .mat-step-header[aria-disabled=true] .mat-step-optional {
    color: GrayText;
  }
}

.mat-step-optional {
  font-size: 12px;
  color: var(--mat-stepper-header-optional-label-text-color, var(--mat-sys-on-surface-variant));
}

.mat-step-sub-label-error {
  font-size: 12px;
  font-weight: normal;
}

.mat-step-icon {
  border-radius: 50%;
  height: 24px;
  width: 24px;
  flex-shrink: 0;
  position: relative;
  color: var(--mat-stepper-header-icon-foreground-color, var(--mat-sys-surface));
  background-color: var(--mat-stepper-header-icon-background-color, var(--mat-sys-on-surface-variant));
}

.mat-step-icon-content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
}

.mat-step-icon .mat-icon {
  font-size: 16px;
  height: 16px;
  width: 16px;
}

.mat-step-icon-state-error {
  background-color: var(--mat-stepper-header-error-state-icon-background-color, transparent);
  color: var(--mat-stepper-header-error-state-icon-foreground-color, var(--mat-sys-error));
}
.mat-step-icon-state-error .mat-icon {
  font-size: 24px;
  height: 24px;
  width: 24px;
}

.mat-step-label {
  display: inline-block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  min-width: 50px;
  vertical-align: middle;
  font-family: var(--mat-stepper-header-label-text-font, var(--mat-sys-title-small-font));
  font-size: var(--mat-stepper-header-label-text-size, var(--mat-sys-title-small-size));
  font-weight: var(--mat-stepper-header-label-text-weight, var(--mat-sys-title-small-weight));
  color: var(--mat-stepper-header-label-text-color, var(--mat-sys-on-surface-variant));
}
.mat-step-label.mat-step-label-active {
  color: var(--mat-stepper-header-selected-state-label-text-color, var(--mat-sys-on-surface-variant));
}
.mat-step-label.mat-step-label-error {
  color: var(--mat-stepper-header-error-state-label-text-color, var(--mat-sys-error));
  font-size: var(--mat-stepper-header-error-state-label-text-size, var(--mat-sys-title-small-size));
}
.mat-step-label.mat-step-label-selected {
  font-size: var(--mat-stepper-header-selected-state-label-text-size, var(--mat-sys-title-small-size));
  font-weight: var(--mat-stepper-header-selected-state-label-text-weight, var(--mat-sys-title-small-weight));
}
.mat-step-header-empty-label .mat-step-label {
  min-width: 0;
}

.mat-step-text-label {
  text-overflow: ellipsis;
  overflow: hidden;
}

.mat-step-header .mat-step-header-ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
}

.mat-step-icon-selected {
  background-color: var(--mat-stepper-header-selected-state-icon-background-color, var(--mat-sys-primary));
  color: var(--mat-stepper-header-selected-state-icon-foreground-color, var(--mat-sys-on-primary));
}

.mat-step-icon-state-done {
  background-color: var(--mat-stepper-header-done-state-icon-background-color, var(--mat-sys-primary));
  color: var(--mat-stepper-header-done-state-icon-foreground-color, var(--mat-sys-on-primary));
}

.mat-step-icon-state-edit {
  background-color: var(--mat-stepper-header-edit-state-icon-background-color, var(--mat-sys-primary));
  color: var(--mat-stepper-header-edit-state-icon-foreground-color, var(--mat-sys-on-primary));
}
`],encapsulation:2,changeDetection:0})}return n})(),hl=(()=>{class n{templateRef=s(Fe);name;constructor(){}static \u0275fac=function(t){return new(t||n)};static \u0275dir=F({type:n,selectors:[["ng-template","matStepperIcon",""]],inputs:{name:[0,"matStepperIcon","name"]}})}return n})(),ul=(()=>{class n{_template=s(Fe);constructor(){}static \u0275fac=function(t){return new(t||n)};static \u0275dir=F({type:n,selectors:[["ng-template","matStepContent",""]]})}return n})(),xn=(()=>{class n extends Ti{_errorStateMatcher=s(et,{skipSelf:!0});_viewContainerRef=s(st);_isSelected=he.EMPTY;stepLabel=void 0;color;_lazyContent;_portal;ngAfterContentInit(){this._isSelected=this._stepper.steps.changes.pipe(Bt(()=>this._stepper.selectionChange.pipe(En(e=>e.selectedStep===this),te(this._stepper.selected===this)))).subscribe(e=>{e&&this._lazyContent&&!this._portal&&(this._portal=new At(this._lazyContent._template,this._viewContainerRef))})}ngOnDestroy(){this._isSelected.unsubscribe()}isErrorState(e,t){let i=this._errorStateMatcher.isErrorState(e,t),a=!!(e&&e.invalid&&this.interacted);return i||a}static \u0275fac=(()=>{let e;return function(i){return(e||(e=Oe(n)))(i||n)}})();static \u0275cmp=k({type:n,selectors:[["mat-step"]],contentQueries:function(t,i,a){if(t&1&&pe(a,wn,5)(a,ul,5),t&2){let o;C(o=w())&&(i.stepLabel=o.first),C(o=w())&&(i._lazyContent=o.first)}},hostAttrs:["hidden",""],inputs:{color:"color"},exportAs:["matStep"],features:[Z([{provide:et,useExisting:n},{provide:Ti,useExisting:n}]),K],ngContentSelectors:vr,decls:1,vars:0,consts:[[3,"cdkPortalOutlet"]],template:function(t,i){t&1&&($(),Re(0,Zs,2,1,"ng-template"))},dependencies:[Ge],encapsulation:2,changeDetection:0})}return n})(),Mn=(()=>{class n extends Lt{_ngZone=s(Ce);_renderer=s(Pe);_animationsDisabled=oe();_cleanupTransition;_isAnimating=g(!1);_stepHeader=void 0;_animatedContainers;_steps=void 0;steps=new Xe;_icons;animationDone=new b;disableRipple=!1;color;labelPosition="end";headerPosition="top";ariaLabel=null;headerPrefix=Gn(null);_iconOverrides={};get animationDuration(){return this._animationDuration}set animationDuration(e){this._animationDuration=/^\d+$/.test(e)?e+"ms":e}_animationDuration="";_isServer=!s(He).isBrowser;constructor(){super();let t=s(R).nativeElement.nodeName.toLowerCase();this.orientation=t==="mat-vertical-stepper"?"vertical":"horizontal"}ngAfterContentInit(){super.ngAfterContentInit(),this._icons.forEach(({name:e,templateRef:t})=>this._iconOverrides[e]=t),this.steps.changes.pipe(P(this._destroyed)).subscribe(()=>this._stateChanged()),this.selectedIndexChange.pipe(P(this._destroyed)).subscribe(()=>{let e=this._getAnimationDuration();e==="0ms"||e==="0s"?this._onAnimationDone():this._isAnimating.set(!0)}),this._ngZone.runOutsideAngular(()=>{this._animationsDisabled||setTimeout(()=>{this._elementRef.nativeElement.classList.add("mat-stepper-animations-enabled"),this._cleanupTransition=this._renderer.listen(this._elementRef.nativeElement,"transitionend",this._handleTransitionend)},200)})}ngAfterViewInit(){if(super.ngAfterViewInit(),typeof queueMicrotask=="function"){let e=!1;this._animatedContainers.changes.pipe(te(null),P(this._destroyed)).subscribe(()=>queueMicrotask(()=>{e||(e=!0,this.animationDone.emit()),this._stateChanged()}))}}ngOnDestroy(){super.ngOnDestroy(),this._cleanupTransition?.()}_getAnimationDuration(){return this._animationsDisabled?"0ms":this.animationDuration?this.animationDuration:this.orientation==="horizontal"?"500ms":"225ms"}_handleTransitionend=e=>{let t=e.target;if(!t)return;let i=this.orientation==="horizontal"&&e.propertyName==="transform"&&t.classList.contains("mat-horizontal-stepper-content-current"),a=this.orientation==="vertical"&&e.propertyName==="grid-template-rows"&&t.classList.contains("mat-vertical-content-container-active");(i||a)&&this._animatedContainers.find(m=>m.nativeElement===t)&&this._onAnimationDone()};_onAnimationDone(){this._isAnimating.set(!1),this.animationDone.emit()}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=k({type:n,selectors:[["mat-stepper"],["mat-vertical-stepper"],["mat-horizontal-stepper"],["","matStepper",""]],contentQueries:function(t,i,a){if(t&1&&pe(a,xn,5)(a,hl,5),t&2){let o;C(o=w())&&(i._steps=o),C(o=w())&&(i._icons=o)}},viewQuery:function(t,i){if(t&1&&G(Dn,5)(Js,5),t&2){let a;C(a=w())&&(i._stepHeader=a),C(a=w())&&(i._animatedContainers=a)}},hostVars:14,hostBindings:function(t,i){t&2&&(ct("--mat-stepper-animation-duration",i._getAnimationDuration()),A("mat-stepper-horizontal",i.orientation==="horizontal")("mat-stepper-vertical",i.orientation==="vertical")("mat-stepper-label-position-end",i.orientation==="horizontal"&&i.labelPosition=="end")("mat-stepper-label-position-bottom",i.orientation==="horizontal"&&i.labelPosition=="bottom")("mat-stepper-header-position-bottom",i.headerPosition==="bottom")("mat-stepper-animating",i._isAnimating()))},inputs:{disableRipple:"disableRipple",color:"color",labelPosition:"labelPosition",headerPosition:"headerPosition",ariaLabel:[0,"aria-label","ariaLabel"],headerPrefix:[1,"headerPrefix"],animationDuration:"animationDuration"},outputs:{animationDone:"animationDone"},exportAs:["matStepper","matVerticalStepper","matHorizontalStepper"],features:[Z([{provide:Lt,useExisting:n}]),K],ngContentSelectors:vr,decls:7,vars:2,consts:[["stepTemplate",""],["horizontalStepsTemplate",""],["animatedContainer",""],[1,"mat-horizontal-stepper-wrapper"],[1,"mat-vertical-stepper-wrapper"],[1,"mat-horizontal-stepper-header-wrapper"],[3,"ngTemplateOutlet","ngTemplateOutletContext"],[1,"mat-horizontal-content-container"],["role","tabpanel",1,"mat-horizontal-stepper-content",3,"id","class"],[3,"ngTemplateOutlet"],["role","tabpanel",1,"mat-horizontal-stepper-content",3,"id"],[1,"mat-step"],[1,"mat-vertical-content-container"],["role","region",1,"mat-vertical-stepper-content",3,"id"],[1,"mat-vertical-content"],[3,"click","keydown","tabIndex","id","index","state","label","selected","active","optional","errorMessage","iconOverrides","disableRipple","color"],["aria-orientation","horizontal","role","tablist",1,"mat-horizontal-stepper-header-container"],[1,"mat-stepper-horizontal-line"]],template:function(t,i){if(t&1&&($(),f(0,el,1,0),f(1,al,6,1,"div",3)(2,sl,4,1,"div",4),Re(3,ll,1,27,"ng-template",null,0,Li)(5,pl,3,1,"ng-template",null,1,Li)),t&2){let a;v(i._isServer?0:-1),d(),v((a=i.orientation)==="horizontal"?1:a==="vertical"?2:-1)}},dependencies:[Ni,Dn],styles:[`.mat-stepper-vertical,
.mat-stepper-horizontal {
  display: block;
  font-family: var(--mat-stepper-container-text-font, var(--mat-sys-body-medium-font));
  background: var(--mat-stepper-container-color, var(--mat-sys-surface));
}

.mat-horizontal-stepper-header-wrapper {
  align-items: center;
  display: flex;
}

.mat-horizontal-stepper-header-container {
  white-space: nowrap;
  display: flex;
  align-items: center;
  flex-grow: 1;
}
.mat-stepper-label-position-bottom .mat-horizontal-stepper-header-container {
  align-items: flex-start;
}
.mat-stepper-header-position-bottom .mat-horizontal-stepper-header-container {
  order: 1;
}

.mat-stepper-horizontal-line {
  border-top-width: 1px;
  border-top-style: solid;
  flex: auto;
  height: 0;
  margin: 0 -16px;
  min-width: 32px;
  border-top-color: var(--mat-stepper-line-color, var(--mat-sys-outline));
}
.mat-stepper-label-position-bottom .mat-stepper-horizontal-line {
  margin: 0;
  min-width: 0;
  position: relative;
  top: calc(calc((var(--mat-stepper-header-height, 72px) - 24px) / 2) + 12px);
}

.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::before, [dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::before, .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::after, [dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::after {
  border-top-width: 1px;
  border-top-style: solid;
  content: "";
  display: inline-block;
  height: 0;
  position: absolute;
  width: calc(50% - 20px);
}

.mat-horizontal-stepper-header {
  display: flex;
  overflow: hidden;
  align-items: center;
  padding: 0 24px;
  height: var(--mat-stepper-header-height, 72px);
}
.mat-horizontal-stepper-header .mat-step-icon {
  margin-right: 8px;
  flex: none;
}
[dir=rtl] .mat-horizontal-stepper-header .mat-step-icon {
  margin-right: 0;
  margin-left: 8px;
}
.mat-horizontal-stepper-header.mat-step-header-empty-label .mat-step-icon {
  margin: 0;
}
.mat-horizontal-stepper-header::before, .mat-horizontal-stepper-header::after {
  border-top-color: var(--mat-stepper-line-color, var(--mat-sys-outline));
}
.mat-stepper-label-position-bottom .mat-horizontal-stepper-header {
  padding: calc((var(--mat-stepper-header-height, 72px) - 24px) / 2) 24px;
}
.mat-stepper-label-position-bottom .mat-horizontal-stepper-header::before, .mat-stepper-label-position-bottom .mat-horizontal-stepper-header::after {
  top: calc(calc((var(--mat-stepper-header-height, 72px) - 24px) / 2) + 12px);
}
.mat-stepper-label-position-bottom .mat-horizontal-stepper-header {
  box-sizing: border-box;
  flex-direction: column;
  height: auto;
}
.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::after, [dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::after {
  right: 0;
}
.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::before, [dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::before {
  left: 0;
}
[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:last-child::before, [dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:first-child::after {
  display: none;
}
.mat-stepper-label-position-bottom .mat-horizontal-stepper-header .mat-step-icon {
  margin-right: 0;
  margin-left: 0;
}
.mat-stepper-label-position-bottom .mat-horizontal-stepper-header .mat-step-label {
  padding: 16px 0 0 0;
  text-align: center;
  width: 100%;
}

.mat-vertical-stepper-header {
  display: flex;
  align-items: center;
  height: 24px;
  padding: calc((var(--mat-stepper-header-height, 72px) - 24px) / 2) 24px;
}
.mat-vertical-stepper-header .mat-step-icon {
  margin-right: 12px;
}
[dir=rtl] .mat-vertical-stepper-header .mat-step-icon {
  margin-right: 0;
  margin-left: 12px;
}

.mat-horizontal-stepper-wrapper {
  display: flex;
  flex-direction: column;
}

.mat-horizontal-stepper-content {
  visibility: hidden;
  overflow: hidden;
  outline: 0;
  height: 0;
}
.mat-stepper-animations-enabled .mat-horizontal-stepper-content {
  transition: transform var(--mat-stepper-animation-duration, 0) cubic-bezier(0.35, 0, 0.25, 1);
}
.mat-horizontal-stepper-content.mat-horizontal-stepper-content-previous {
  transform: translate3d(-100%, 0, 0);
}
.mat-horizontal-stepper-content.mat-horizontal-stepper-content-next {
  transform: translate3d(100%, 0, 0);
}
.mat-horizontal-stepper-content.mat-horizontal-stepper-content-current {
  visibility: visible;
  transform: none;
  height: auto;
}
.mat-stepper-horizontal:not(.mat-stepper-animating) .mat-horizontal-stepper-content.mat-horizontal-stepper-content-current {
  overflow: visible;
}

.mat-horizontal-content-container {
  overflow: hidden;
  padding: 0 24px 24px 24px;
}
@media (forced-colors: active) {
  .mat-horizontal-content-container {
    outline: solid 1px;
  }
}
.mat-stepper-header-position-bottom .mat-horizontal-content-container {
  padding: 24px 24px 0 24px;
}

.mat-vertical-content-container {
  display: grid;
  grid-template-rows: 0fr;
  grid-template-columns: 100%;
  margin-left: 36px;
  border: 0;
  position: relative;
}
.mat-stepper-animations-enabled .mat-vertical-content-container {
  transition: grid-template-rows var(--mat-stepper-animation-duration, 0) cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-vertical-content-container.mat-vertical-content-container-active {
  grid-template-rows: 1fr;
}
.mat-step:last-child .mat-vertical-content-container {
  border: none;
}
@media (forced-colors: active) {
  .mat-vertical-content-container {
    outline: solid 1px;
  }
}
[dir=rtl] .mat-vertical-content-container {
  margin-left: 0;
  margin-right: 36px;
}
@supports not (grid-template-rows: 0fr) {
  .mat-vertical-content-container {
    height: 0;
  }
  .mat-vertical-content-container.mat-vertical-content-container-active {
    height: auto;
  }
}

.mat-stepper-vertical-line::before {
  content: "";
  position: absolute;
  left: 0;
  border-left-width: 1px;
  border-left-style: solid;
  border-left-color: var(--mat-stepper-line-color, var(--mat-sys-outline));
  top: calc(8px - calc((var(--mat-stepper-header-height, 72px) - 24px) / 2));
  bottom: calc(8px - calc((var(--mat-stepper-header-height, 72px) - 24px) / 2));
}
[dir=rtl] .mat-stepper-vertical-line::before {
  left: auto;
  right: 0;
}

.mat-vertical-stepper-content {
  overflow: hidden;
  outline: 0;
  visibility: hidden;
}
.mat-stepper-animations-enabled .mat-vertical-stepper-content {
  transition: visibility var(--mat-stepper-animation-duration, 0) linear;
}
.mat-vertical-content-container-active > .mat-vertical-stepper-content {
  visibility: visible;
}

.mat-vertical-content {
  padding: 0 24px 24px 24px;
}
`],encapsulation:2,changeDetection:0})}return n})();var Cr=(()=>{class n extends gr{static \u0275fac=(()=>{let e;return function(i){return(e||(e=Oe(n)))(i||n)}})();static \u0275dir=F({type:n,selectors:[["button","matStepperPrevious",""]],hostAttrs:[1,"mat-stepper-previous"],hostVars:1,hostBindings:function(t,i){t&2&&q("type",i.type)},features:[K]})}return n})(),wr=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=ge({type:n});static \u0275inj=ue({providers:[et],imports:[Tt,fr,be,Kt,Mn,Dn,Ie]})}return n})();var bl=(n,r)=>r.Gnid;function yl(n,r){if(n&1){let e=V();l(0,"div",6)(1,"mat-icon"),p(2,"link"),c(),l(3,"span",24),p(4),c(),l(5,"button",25),_("click",function(){x(e);let i=h();return M(i.clearSelectedTopic())}),l(6,"mat-icon"),p(7,"close"),c()()()}n&2&&(d(4),y(r.Title))}function Cl(n,r){if(n&1){let e=V();l(0,"button",32),_("mousedown",function(){let i=x(e).$implicit,a=h(3);return M(a.selectSearchResult(i))}),l(1,"span",33),p(2),c()()}if(n&2){let e=r.$implicit;d(2),y(e.Title)}}function wl(n,r){n&1&&(l(0,"p",31),p(1,"No matching topics."),c())}function Dl(n,r){if(n&1&&(l(0,"div",29),H(1,Cl,3,1,"button",30,bl,!1,wl,2,0,"p",31),c()),n&2){let e=h(2);d(),Y(e.searchResults())}}function xl(n,r){if(n&1){let e=V();l(0,"div",7)(1,"mat-form-field",26)(2,"mat-label"),p(3,"Search topics\u2026"),c(),l(4,"input",27),_("ngModelChange",function(i){x(e);let a=h();return M(a.onSearchInput(i))})("focus",function(){x(e);let i=h();return M(i.onSearchFocus())})("blur",function(){x(e);let i=h();return M(i.onSearchBlur())}),c(),l(5,"mat-icon",28),p(6,"search"),c()(),f(7,Dl,4,1,"div",29),c()}if(n&2){let e=h();d(4),u("ngModel",e.searchQuery()),d(3),v(e.showSearchResults()?7:-1)}}function Ml(n,r){if(n&1&&(l(0,"p",20),p(1),c()),n&2){let e=h();d(),y(e.errorMessage())}}var Oi=class n{dialogRef=s(ei);dialogData=s(mt);dataService=s(vt);logger=s(ft);topicTitle=this.dialogData.topicTitle;searchQuery=g("");searchResults=g([]);showSearchResults=g(!1);selectedTopic=g(null);searchInput$=new O;relation=g("");isSaving=g(!1);errorMessage=g(null);constructor(){this.searchInput$.pipe(xt(300),Mt()).subscribe(r=>this.runSearch(r))}onSearchInput(r){this.searchQuery.set(r),this.searchInput$.next(r)}runSearch(r){let e=r.trim();if(e.length<2){this.searchResults.set([]),this.showSearchResults.set(!1);return}let t=e.toLowerCase(),i=this.dataService.getItems("Topic").filter(a=>a.Gnid!==this.dialogData.topicGnid).filter(a=>a.Title?.toLowerCase().includes(t)||a.Description?.toLowerCase().includes(t));this.searchResults.set(i),this.showSearchResults.set(!0)}onSearchFocus(){this.searchResults().length>0&&this.showSearchResults.set(!0)}onSearchBlur(){setTimeout(()=>this.showSearchResults.set(!1),150)}selectSearchResult(r){this.selectedTopic.set(r),this.searchQuery.set(""),this.searchResults.set([]),this.showSearchResults.set(!1)}clearSelectedTopic(){this.selectedTopic.set(null)}cancel(){this.dialogRef.close()}async save(){let r=this.selectedTopic(),e=this.relation().trim();if(!(!r||!e||this.isSaving())){this.isSaving.set(!0),this.errorMessage.set(null);try{let t={ExitGnid:this.dialogData.topicGnid,Relation:e,EntryGnid:r.Gnid},i=await this.dataService.addItem("Edge",t);this.dialogRef.close(i)}catch(t){this.logger.debugLog("Failed to create Edge",t),this.errorMessage.set("Could not save the relation. Please try again.")}finally{this.isSaving.set(!1)}}}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=k({type:n,selectors:[["app-add-edge-dialog"]],decls:42,vars:14,consts:[["stepper",""],["mat-dialog-title",""],[1,"add-edge-content"],["linear","",1,"add-edge-stepper"],["label","Related Topic",3,"completed"],[1,"step-body"],[1,"selected-topic-chip"],[1,"search-field-wrapper"],[1,"step-actions"],["mat-button","","type","button",3,"click"],["mat-flat-button","","color","accent","type","button",1,"step-next-btn",3,"click","disabled"],["label","Relation",3,"completed"],["appearance","outline","subscriptSizing","dynamic",1,"relation-field"],["matInput","","type","text","placeholder",'e.g. "Supersedes" or "Approved by"',3,"ngModelChange","ngModel"],["mat-button","","type","button","matStepperPrevious",""],["label","Verify"],[1,"edge-preview"],[1,"preview-exit"],[1,"preview-relation"],[1,"preview-entry"],[1,"add-edge-error"],["mat-button","","type","button","matStepperPrevious","",3,"disabled"],["mat-button","","type","button",3,"click","disabled"],["mat-flat-button","","color","accent","type","button",1,"save-edge-btn",3,"click","disabled"],[1,"selected-topic-title"],["mat-icon-button","","type","button","aria-label","Clear selected topic",1,"clear-selected-btn",3,"click"],["appearance","outline","subscriptSizing","dynamic",1,"topic-search-field"],["matInput","","type","text","autocomplete","off",3,"ngModelChange","focus","blur","ngModel"],["matSuffix",""],[1,"search-results-dropdown"],["type","button",1,"search-result-row"],[1,"search-no-results"],["type","button",1,"search-result-row",3,"mousedown"],[1,"search-result-title"]],template:function(e,t){if(e&1){let i=V();l(0,"h2",1),p(1,"Add relation"),c(),l(2,"mat-dialog-content",2)(3,"mat-stepper",3,0)(5,"mat-step",4)(6,"div",5),f(7,yl,8,1,"div",6)(8,xl,8,2,"div",7),c(),l(9,"div",8)(10,"button",9),_("click",function(){return t.cancel()}),p(11,"Cancel"),c(),l(12,"button",10),_("click",function(){x(i);let o=ae(4);return M(o.next())}),p(13," Next "),c()()(),l(14,"mat-step",11)(15,"div",5)(16,"mat-form-field",12)(17,"mat-label"),p(18,"Relation"),c(),l(19,"input",13),_("ngModelChange",function(o){return t.relation.set(o)}),c()()(),l(20,"div",8)(21,"button",14),p(22,"Back"),c(),l(23,"button",10),_("click",function(){x(i);let o=ae(4);return M(o.next())}),p(24," Next "),c()()(),l(25,"mat-step",15)(26,"div",5)(27,"div",16)(28,"p",17),p(29),c(),l(30,"p",18),p(31),c(),l(32,"p",19),p(33),c()(),f(34,Ml,2,1,"p",20),c(),l(35,"div",8)(36,"button",21),p(37,"Back"),c(),l(38,"button",22),_("click",function(){return t.cancel()}),p(39,"Cancel"),c(),l(40,"button",23),_("click",function(){return t.save()}),p(41),c()()()()()}if(e&2){let i,a;d(5),u("completed",!!t.selectedTopic()),d(2),v((i=t.selectedTopic())?7:8,i),d(5),u("disabled",!t.selectedTopic()),d(2),u("completed",!!t.relation().trim()),d(5),u("ngModel",t.relation()),d(4),u("disabled",!t.relation().trim()),d(6),y(t.topicTitle),d(2),y(t.relation()),d(2),y((a=t.selectedTopic())==null?null:a.Title),d(),v(t.errorMessage()?34:-1),d(2),u("disabled",t.isSaving()),d(2),u("disabled",t.isSaving()),d(2),u("disabled",t.isSaving()),d(),U(" ",t.isSaving()?"Saving\u2026":"Save"," ")}},dependencies:[_t,ht,ut,wr,xn,Mn,Cr,ci,li,ri,oi,pi,di,Me,xe,Je,be,ve,_a,ii,ai,ma],styles:[".add-edge-content[_ngcontent-%COMP%]{width:440px;max-width:90vw;padding-top:4px!important}.add-edge-stepper[_ngcontent-%COMP%]{background:transparent}.step-body[_ngcontent-%COMP%]{min-height:120px;padding:16px 0 8px}.step-actions[_ngcontent-%COMP%]{display:flex;justify-content:flex-end;gap:8px;padding-bottom:8px}.search-field-wrapper[_ngcontent-%COMP%]{position:relative}.topic-search-field[_ngcontent-%COMP%]{width:100%;--mdc-outlined-text-field-outline-color: var(--border);--mdc-outlined-text-field-hover-outline-color: var(--text-muted);--mdc-outlined-text-field-focus-outline-color: var(--text-accent)}.topic-search-field[_ngcontent-%COMP%]     .mat-mdc-text-field-wrapper.mdc-text-field--outlined{background-color:var(--surface-1)!important;border-radius:4px}.search-results-dropdown[_ngcontent-%COMP%]{position:absolute;top:calc(100% + 4px);left:0;right:0;z-index:10;max-height:220px;overflow-y:auto;background:var(--surface-1);border:.5px solid var(--border);border-radius:4px;box-shadow:0 5px 5px -3px #0003,0 8px 10px 1px #00000024,0 3px 14px 2px #0000001f}.search-result-row[_ngcontent-%COMP%]{display:block;width:100%;text-align:left;padding:10px 12px;background:none;border:none;border-bottom:.5px solid var(--border);cursor:pointer;font:inherit;color:var(--text-primary)}.search-result-row[_ngcontent-%COMP%]:last-child{border-bottom:none}.search-result-row[_ngcontent-%COMP%]:hover{background:var(--bg-accent)}.search-result-title[_ngcontent-%COMP%]{font-size:14px}.search-no-results[_ngcontent-%COMP%]{margin:0;padding:10px 12px;font-size:13px;color:var(--text-muted);font-style:italic}.selected-topic-chip[_ngcontent-%COMP%]{display:flex;align-items:center;gap:8px;padding:8px 8px 8px 12px;background:var(--surface-1);border:.5px solid var(--border);border-radius:4px}.selected-topic-chip[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{color:var(--text-accent);flex:0 0 auto}.selected-topic-title[_ngcontent-%COMP%]{flex:1 1 auto;font-size:14px;color:var(--text-primary)}.clear-selected-btn[_ngcontent-%COMP%]{flex:0 0 auto;width:28px;height:28px;padding:2px;line-height:24px;color:var(--text-muted)}.clear-selected-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:18px;width:18px;height:18px;line-height:18px}.relation-field[_ngcontent-%COMP%]{width:100%;--mdc-outlined-text-field-outline-color: var(--border);--mdc-outlined-text-field-hover-outline-color: var(--text-muted);--mdc-outlined-text-field-focus-outline-color: var(--text-accent)}.relation-field[_ngcontent-%COMP%]     .mat-mdc-text-field-wrapper.mdc-text-field--outlined{background-color:var(--surface-1)!important;border-radius:4px}.edge-preview[_ngcontent-%COMP%]{padding:12px 16px;background:var(--surface-1);border:.5px solid var(--border);border-radius:4px}.preview-exit[_ngcontent-%COMP%], .preview-entry[_ngcontent-%COMP%]{margin:0;font-size:15px;color:var(--text-primary)}.preview-relation[_ngcontent-%COMP%]{margin:6px 0;font-size:13px;font-weight:600;color:var(--text-accent);text-transform:uppercase;letter-spacing:.04em}.add-edge-error[_ngcontent-%COMP%]{margin:12px 0 0;font-size:13px;color:#b3261e}"]})};var Dr=/(https?:\/\/[^\s<>"']+)/g,Fi=class n{transform(r){if(!r)return"";let e="",t=0,i;for(Dr.lastIndex=0;(i=Dr.exec(r))!==null;){let a=i[0],o=i.index;e+=this.escapeHtml(r.slice(t,o)),e+=this.buildLink(a),t=o+a.length}return e+=this.escapeHtml(r.slice(t)),e}buildLink(r){let e=this.extractDomain(r),t=this.escapeHtml(r),i=this.escapeHtml(e);return`<a href="${t}" target="_blank" rel="noopener noreferrer">${i}</a>`}extractDomain(r){try{return new URL(r).hostname}catch{return r}}escapeHtml(r){return r.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}static \u0275fac=function(e){return new(e||n)};static \u0275pipe=Pn({name:"linkify",type:n,pure:!0})};var kl=["commentsList"],Sl=()=>[],Pi=(n,r)=>r.Gnid,Mr=(n,r)=>r.value,El=(n,r)=>r.FileName;function Il(n,r){n&1&&E(0,"mat-progress-bar",4)}function Al(n,r){if(n&1&&(l(0,"mat-form-field",12)(1,"mat-label"),p(2,"Closed"),c(),E(3,"input",44)(4,"mat-datepicker-toggle",45)(5,"mat-datepicker",null,3),c()),n&2){let e=ae(6);d(3),u("matDatepicker",e),d(),u("for",e)}}function Tl(n,r){if(n&1&&(l(0,"mat-option",21),p(1),c()),n&2){let e=r.$implicit;u("value",e.Gnid),d(),y(e.Name)}}function Ol(n,r){if(n&1){let e=V();l(0,"button",46),_("click",function(){x(e);let i=h();return M(i.assignToMe())}),l(1,"mat-icon"),p(2,"person_add"),c()()}}function Fl(n,r){if(n&1&&(l(0,"mat-option",21),p(1),c()),n&2){let e=r.$implicit;u("value",e.value),d(),y(e.label)}}function Pl(n,r){if(n&1&&(l(0,"mat-optgroup",25),H(1,Fl,2,2,"mat-option",21,Mr),c()),n&2){let e=h();d(),Y(e.ownerUserOptions())}}function Rl(n,r){if(n&1&&(l(0,"mat-option",21),p(1),c()),n&2){let e=r.$implicit;u("value",e.value),d(),y(e.label)}}function Vl(n,r){if(n&1&&(l(0,"mat-optgroup",26),H(1,Rl,2,2,"mat-option",21,Mr),c()),n&2){let e=h();d(),Y(e.ownerRoleOptions())}}function Ll(n,r){if(n&1){let e=V();l(0,"mat-chip-row",47),_("removed",function(){let i=x(e).$implicit,a=h();return M(a.removeTag(i))})("click",function(i){let a=x(e).$implicit,o=h();return M(o.searchByTag(a,i))}),p(1),l(2,"button",48)(3,"mat-icon"),p(4,"cancel"),c()()()}if(n&2){let e=r.$implicit;u("title","Search topics tagged #"+e),d(),U(" #",e," "),d(),S("aria-label","Remove #"+e)}}function Nl(n,r){if(n&1){let e=V();l(0,"mat-list-item")(1,"span",49)(2,"span",50),p(3),c(),l(4,"a",51),_("click",function(i){let a=x(e).$implicit,o=h();return M(o.navigateToEdgeEntry(a,i))})("keydown.enter",function(i){let a=x(e).$implicit,o=h();return M(o.navigateToEdgeEntry(a,i))}),p(5),c()()()}if(n&2){let e=r.$implicit,t=h();d(3),y(e.Relation),d(2),U(" ",t.getEdgeEntryTitle(e)," ")}}function Bl(n,r){n&1&&(l(0,"p",35),p(1,"No relations yet."),c())}function zl(n,r){if(n&1){let e=V();l(0,"div",60),_("click",function(){let i=x(e).$implicit,a=h(3);return M(a.openEmailDialog(i))}),l(1,"mat-icon"),p(2,"mail"),c(),l(3,"span",61),p(4),dt(5,"date"),c(),l(6,"span",62),p(7),c()()}if(n&2){let e=r.$implicit;d(4),y(Et(5,2,e.date,"dd MMM y")),d(3),y(e.subject)}}function Hl(n,r){if(n&1){let e=V();l(0,"div",60),_("click",function(){let i=x(e).$implicit,a=h(3);return M(a.onDocumentClick(i))}),_e(),l(1,"svg",63),E(2,"path"),c(),We(),l(3,"span",62),p(4),c()()}if(n&2){let e,t,i=r.$implicit,a=h(3);d(2),S("d",(e=a.getFileTypeIcon(a.getDocExtension(i.FileName)))==null?null:e.path)("fill",(t=a.getFileTypeIcon(a.getDocExtension(i.FileName)))==null?null:t.color),d(2),y(i.OriginalName)}}function Yl(n,r){if(n&1&&(l(0,"div",58),H(1,zl,8,5,"div",59,Pi),H(3,Hl,5,3,"div",59,El),c()),n&2){let e=h().$implicit,t=h();d(),Y(t.getEmailsForComment(e.Gnid)),d(2),Y(e.Docs??Bn(0,Sl))}}function jl(n,r){if(n&1){let e=V();l(0,"div",52),_("dragover",function(i){let a=x(e).$implicit,o=h();return M(o.onCommentDragOver(i,a))})("dragleave",function(){let i=x(e).$implicit,a=h();return M(a.onCommentDragLeave(i))})("drop",function(i){let a=x(e).$implicit,o=h();return M(o.onCommentDrop(i,a))}),l(1,"div",53)(2,"span",54),p(3),c(),l(4,"button",55),_("click",function(){let i=x(e).$implicit,a=h();return M(a.deleteComment(i))}),l(5,"mat-icon"),p(6,"delete"),c()()(),E(7,"p",56),dt(8,"linkify"),l(9,"span",57),p(10),dt(11,"date"),c(),f(12,Yl,5,1,"div",58),c()}if(n&2){let e=r.$implicit,t=h();A("drag-over",t.dragOverCommentGnid()===e.Gnid),d(3),y(e.Author),d(),u("disabled",t.isLoading()),d(3),u("innerHTML",Hn(8,7,e.Text),On),d(3),y(Et(11,9,e.Timestamp,"dd MMM y, HH:mm")),d(2),v(t.getEmailsForComment(e.Gnid).length>0||e.Docs&&e.Docs.length>0?12:-1)}}function Gl(n,r){n&1&&(l(0,"p",39),p(1,"No notes yet."),c())}var xr=class n{logger=s(ft);router=s(Qn);fb=s(ua);dataService=s(vt);searchBridge=s(Va);fileParserMsg=s(Ei);dialog=s(ca);toast=s(Mi);gnid;isLoading=g(!1);topic=g(null);comments=g([]);emails=g([]);edges=g([]);dragOverCommentGnid=g(null);commentsListEl=Un("commentsList");siteUsers=g([]);organizations=g([]);roles=g([]);tags=g([]);tagSeparatorKeys=[13,188];topicForm=this.fb.group({title:["",gt.required],description:[""],open:[!0],organization:[null],owner:[null],closed:[null]});initialized=!1;async ngOnInit(){this.logger.debugLog("Topic component initialized",{gnid:this.gnid}),this.topicForm.get("title").valueChanges.pipe(xt(800),Mt()).subscribe(()=>this.autoSaveTopic()),this.topicForm.get("description").valueChanges.pipe(xt(800),Mt()).subscribe(()=>this.autoSaveTopic()),this.topicForm.get("open").valueChanges.subscribe(r=>{r===!1&&this.topicForm.get("closed").setValue(new Date,{emitEvent:!1}),this.autoSaveTopic()}),this.topicForm.get("organization").valueChanges.subscribe(r=>{this.syncOwnerAvailability(r),r||this.topicForm.get("owner").setValue(null,{emitEvent:!1}),this.autoSaveTopic()}),this.topicForm.get("owner").valueChanges.subscribe(()=>this.autoSaveTopic()),this.topicForm.get("closed").valueChanges.subscribe(()=>this.autoSaveTopic()),this.isLoading.set(!0);try{await this.dataService.ready,this.loadTopic(),this.loadComments(),this.loadEmails(),this.loadEdges(),this.loadSiteUsers(),this.loadOrganizations(),this.loadRoles(),this.initialized=!0}finally{this.isLoading.set(!1)}}ngOnChanges(r){this.initialized&&r.gnid&&!r.gnid.firstChange&&(this.loadTopic(),this.loadComments(),this.loadEmails(),this.loadEdges())}loadTopic(){let e=this.dataService.getItems("Topic").find(t=>t.Gnid===this.gnid)??null;this.topic.set(e),this.tags.set(e?.tags??[]),e?(this.topicForm.setValue({title:e.Title??"",description:e.Description??"",open:e.Open??!1,organization:e.Organization??null,owner:typeof e.Owner=="string"?e.Owner:null,closed:e.Closed?new Date(e.Closed):null},{emitEvent:!1}),this.syncOwnerAvailability(e.Organization??null)):(this.topicForm.reset({title:"",description:"",open:!0,organization:null,owner:null,closed:null},{emitEvent:!1}),this.syncOwnerAvailability(null))}loadSiteUsers(){let e=this.dataService.getItems("siteUsers").filter(t=>t.PrincipalType===1&&!!t.Email);this.siteUsers.set(e)}loadOrganizations(){this.organizations.set(this.dataService.getItems("Organization"))}loadRoles(){this.roles.set(this.dataService.getItems("Role"))}isOwnedByMe(){let r=this.dataService.getCurrentUserFromCache()?.Id;if(r==null)return!1;let e=Ia(this.topicForm.get("owner")?.value??null);return e?.kind==="user"&&e.userId===r}ownerUserOptions(){let r=this.selectedOrganization();return r?this.siteUsers().filter(e=>r.Members.includes(e.Id)).map(e=>({value:mi({kind:"user",userId:e.Id}),label:e.Title})):[]}ownerRoleOptions(){let r=this.selectedOrganization();if(!r)return[];let e=new Map(this.roles().map(t=>[t.Gnid,t]));return r.Roles.map(t=>e.get(t)).filter(t=>!!t).map(t=>({value:mi({kind:"role",roleGnid:t.Gnid}),label:t.Name}))}selectedOrganization(){let r=this.topicForm.get("organization")?.value;return r?this.organizations().find(e=>e.Gnid===r)??null:null}syncOwnerAvailability(r){let e=this.topicForm.get("owner");r?e.enable({emitEvent:!1}):e.disable({emitEvent:!1})}isTopicOpen(){return!!this.topicForm.get("open")?.value}assignToMe(){let r=this.dataService.getCurrentUserFromCache()?.Id;if(r==null){this.logger.debugLog("Assign to me skipped - no current user in cache"),this.toast.error("Could not determine the current user - try refreshing the page");return}let e=this.organizations().find(t=>t.Members.includes(r));if(!e){this.logger.debugLog("Assign to me skipped - current user is not a Member of any organization",{currentUserId:r}),this.toast.error("You are not a Member of any organization - add yourself to one under Settings first");return}this.topicForm.get("organization").setValue(e.Gnid,{emitEvent:!1}),this.syncOwnerAvailability(e.Gnid),this.topicForm.get("owner").setValue(mi({kind:"user",userId:r}))}async autoSaveTopic(){let r=this.topic();if(!r||this.topicForm.invalid)return;let{title:e,description:t,open:i,organization:a,owner:o,closed:m}=this.topicForm.getRawValue(),D=e??"",I=t??"",j=i??!0,ke=m?m.getTime():null,Ke=r,{Id:qe,Gnid:$e}=Ke,Le=Nt(Ke,["Id","Gnid"]);this.isLoading.set(!0);try{await this.dataService.updateItem("Topic",r.Id,Se(B({},Le),{Title:D,Description:I,Open:j,Organization:a,Owner:o,Closed:ke})),this.topic.set(Se(B({},r),{Title:D,Description:I,Open:j,Organization:a??void 0,Owner:o,Closed:ke})),this.logger.debugLog("Topic details auto-saved",{gnid:this.gnid})}catch(at){this.logger.debugLog("Failed to auto-save topic details",at)}finally{this.isLoading.set(!1)}}addTag(r){let e=this.normalizeTag(r.value??"");e&&!this.tags().includes(e)&&(this.tags.update(t=>[...t,e]),this.saveTags()),r.chipInput.clear()}normalizeTag(r){return r.trim().replace(/^#+/,"").toLowerCase().replace(/\s+/g,"-")}removeTag(r){this.tags.update(e=>e.filter(t=>t!==r)),this.saveTags()}searchByTag(r,e){e.stopPropagation(),this.searchBridge.requestTagSearch(r)}async saveTags(){let r=this.topic();if(!r)return;let o=r,{Id:e,Gnid:t}=o,i=Nt(o,["Id","Gnid"]),a=this.tags();this.isLoading.set(!0);try{await this.dataService.updateItem("Topic",r.Id,Se(B({},i),{tags:a})),this.topic.set(Se(B({},r),{tags:a})),this.logger.debugLog("Topic tags saved",{gnid:this.gnid,tags:a})}catch(m){this.logger.debugLog("Failed to save topic tags",m),this.tags.set(r.tags??[])}finally{this.isLoading.set(!1)}}onCommentDragOver(r,e){r.preventDefault(),this.dragOverCommentGnid.set(e.Gnid)}onCommentDragLeave(r){this.dragOverCommentGnid()===r.Gnid&&this.dragOverCommentGnid.set(null)}async onCommentDrop(r,e){r.preventDefault(),this.dragOverCommentGnid.set(null);let t=r.dataTransfer?.files;if(!(!t||t.length===0))for(let i=0;i<t.length;i++){let a=t[i],o=this.comments().find(m=>m.Gnid===e.Gnid)??e;try{await this.handleDroppedFile(a,o)}catch(m){this.logger.debugLog("Unexpected error handling a dropped file - continuing with remaining files",{fileName:a.name,error:m})}}}async handleDroppedFile(r,e){let t=this.getFileExtension(r),i=this.resolveFileKind(r,t);if(i==="msg"){this.logger.debugLog("MSG file dropped on comment",{comment:e.Gnid,fileName:r.name});let o=await this.fileParserMsg.parse(r);o&&await this.saveEmail(e,o);return}if(vn.has(i)){await this.saveDocument(e,r);return}let a=t?`.${t}`:r.name;this.logger.debugLog("Dropped file is not a supported file type - ignoring",{comment:e.Gnid,fileName:r.name,fileType:r.type}),this.toast.error(`File type ${a} not allowed`)}getFileExtension(r){let e=r.name.toLowerCase().split(".");return e.length>1?e[e.length-1]:""}getFileTypeIcon(r){return ki(r)}getDocExtension(r){let e=r.toLowerCase().split(".");return e.length>1?e[e.length-1]:""}onDocumentClick(r){let e=this.getDocExtension(r.FileName);switch(e){case"xlsx":case"xls":case"doc":case"docx":case"pdf":case"ppt":case"pptx":{let t=this.dataService.getDocumentViewUrl(r.FileName,r.SourceDocId);window.open(t,"_blank","noopener,noreferrer");break}case"mpp":{let t=this.dataService.getDocumentDesktopUrl(r.FileName,"ms-project");this.logger.debugLog("Opening .mpp in desktop Microsoft Project",{fileName:r.FileName,originalName:r.OriginalName,uri:t}),window.location.href=t;break}default:this.logger.debugLog("Document clicked - no handler for this file type",{fileName:r.FileName,originalName:r.OriginalName,extension:e});break}}resolveFileKind(r,e){return e==="msg"||r.type==="application/vnd.ms-outlook"?"msg":e}async saveDocument(r,e){this.isLoading.set(!0);try{let{fileName:t,originalName:i,sourceDocId:a}=await this.dataService.addDocument("Comment",r,e);this.loadComments(),this.logger.debugLog("Document uploaded and linked to comment",{comment:r.Gnid,fileName:t,originalName:i,sourceDocId:a})}catch(t){this.logger.debugLog("Failed to upload document",t)}finally{this.isLoading.set(!1)}}async saveEmail(r,e){this.isLoading.set(!0);try{let t=e,{attachments:i}=t,a=Nt(t,["attachments"]),o=await this.dataService.addItem("Email",B({Parent:r.Gnid},a));await this.saveEmailAttachments(o,i),this.loadEmails(),this.logger.debugLog("Email saved as child of comment",{comment:r.Gnid,subject:e.subject,attachmentCount:i.length})}catch(i){this.logger.debugLog("Failed to save parsed email",i)}finally{this.isLoading.set(!1)}}async saveEmailAttachments(r,e){let t=r;for(let i of e){if(!vn.has(i.extension)){this.logger.debugLog("Skipping email attachment - unsupported file type",{fileName:i.fileName,extension:i.extension});continue}try{let a=new File([new Uint8Array(i.bytes)],i.fileName),o=await this.dataService.addDocument("Email",t,a),m=t.Docs??[];t=Se(B({},t),{Docs:[...m,{FileName:o.fileName,OriginalName:o.originalName,SourceDocId:o.sourceDocId}]})}catch(a){this.logger.debugLog("Failed to upload email attachment - continuing with remaining attachments",{fileName:i.fileName,error:a})}}}loadComments(){let e=this.dataService.getItems("Comment").filter(t=>t.Parent===this.gnid).sort((t,i)=>t.Timestamp-i.Timestamp);this.comments.set(e),this.scrollCommentsToBottom()}scrollCommentsToBottom(){setTimeout(()=>{let r=this.commentsListEl()?.nativeElement;r&&this.animateScrollTo(r,r.scrollHeight,250)})}animateScrollTo(r,e,t){let i=r.scrollTop,a=e-i;if(a===0)return;let o=performance.now(),m=D=>{let I=D-o,j=Math.min(I/t,1),ke=1-Math.pow(1-j,3);r.scrollTop=i+a*ke,j<1&&requestAnimationFrame(m)};requestAnimationFrame(m)}loadEmails(){this.emails.set(this.dataService.getItems("Email"))}getEmailsForComment=r=>this.emails().filter(e=>e.Parent===r).sort((e,t)=>this.toTime(e.date)-this.toTime(t.date));toTime(r){return r?new Date(r).getTime():0}loadEdges(){let r=this.dataService.getItems("Edge");this.edges.set(r.filter(e=>e.ExitGnid===this.gnid))}getEdgeEntryTitle(r){let e=this.dataService.getAllData();for(let t of Object.values(e)){let i=t.find(a=>a?.Gnid===r.EntryGnid);if(i)return i.Title??i.Text??r.EntryGnid}return r.EntryGnid}navigateToEdgeEntry(r,e){e.stopPropagation(),this.router.navigate(["/topics",r.EntryGnid])}openAddEdgeDialog(){let r=this.topic();if(!r)return;this.dialog.open(Oi,{width:"480px",data:{topicGnid:this.gnid,topicTitle:r.Title}}).afterClosed().subscribe(t=>{t&&this.loadEdges()})}openEmailDialog(r){this.dialog.open(Ii,{width:"70vw",height:"80vh",maxWidth:"90vw",maxHeight:"90vh",data:r})}deleteComment(r){this.dialog.open(Ai,{width:"360px",data:{title:"Delete Comment?",message:"This will permanently remove the comment. This cannot be undone.",confirmText:"Delete",cancelText:"Cancel",icon:"delete"}}).afterClosed().subscribe(t=>{t&&this.performDeleteComment(r)})}async performDeleteComment(r){this.isLoading.set(!0);try{await this.deleteDocumentsFor(r),await this.deleteChildrenOf(r.Gnid),await this.dataService.deleteItem("Comment",r.Id),this.loadComments(),this.loadEmails(),this.logger.debugLog("Comment, its children, and its documents deleted",{gnid:r.Gnid})}catch(e){this.logger.debugLog("Failed to delete comment",e)}finally{this.isLoading.set(!1)}}async deleteDocumentsFor(r){let e=Array.isArray(r?.Docs)?r.Docs:[];await Promise.all(e.map(async t=>{try{await this.dataService.deleteDocument(t.FileName)}catch(i){this.logger.debugLog("Failed to delete document file - continuing",{fileName:t.FileName,originalName:t.OriginalName,error:i})}}))}async deleteChildrenOf(r){let e=this.dataService.getAllData(),t=[];for(let[i,a]of Object.entries(e))for(let o of a)o?.Parent===r&&t.push(this.deleteDocumentsFor(o).then(()=>this.dataService.deleteItem(i,o.Id)));await Promise.all(t)}onCommentKeydown(r,e){r.key==="Enter"&&!r.shiftKey&&(r.preventDefault(),this.addComment(e))}async addComment(r){let e=r.value.trim();if(!(!e||this.isLoading())){this.isLoading.set(!0);try{let t=this.dataService.getCurrentUserFromCache()?.Title??"";await this.dataService.addItem("Comment",{Parent:this.gnid,Text:e,Author:t,Timestamp:Date.now()}),this.loadComments(),r.value="",this.logger.debugLog("Comment added",{parent:this.gnid})}catch(t){this.logger.debugLog("Failed to add comment",t)}finally{this.isLoading.set(!1)}}}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=k({type:n,selectors:[["app-topic"]],viewQuery:function(e,t){e&1&&Vn(t.commentsListEl,kl,5),e&2&&Ln()},inputs:{gnid:"gnid"},features:[Z([ir()]),ie],decls:84,vars:16,consts:[["tagChipGrid",""],["commentsList",""],["commentInput",""],["closedPicker",""],["mode","indeterminate"],[1,"topic-container"],[1,"header-row"],[1,"page-title"],[1,"cards-grid"],[1,"details-column"],[1,"topic-detail-card"],[1,"topic-details-form",3,"formGroup"],["appearance","outline","subscriptSizing","dynamic",1,"detail-field"],["matInput","","type","text","formControlName","title"],["matInput","","rows","4","formControlName","description"],[1,"field-row"],[1,"detail-field","toggle-field"],["id","open-toggle-label",1,"toggle-label"],["formControlName","open","aria-labelledby","open-toggle-label"],[1,"org-owner-row"],["formControlName","organization"],[3,"value"],[1,"assign-me-slot"],["type","button","mat-icon-button","","title","Assign to me","aria-label","Assign to me",1,"assign-me-btn"],["formControlName","owner"],["label","People"],["label","Roles"],["aria-label","Topic tags"],[3,"title"],["placeholder","Add tag...",3,"matChipInputTokenEnd","matChipInputFor","matChipInputSeparatorKeyCodes","matChipInputAddOnBlur","disabled"],[1,"edges-section"],[1,"edges-header"],[1,"edges-title"],["type","button","mat-icon-button","","aria-label","Add relation",1,"add-edge-btn",3,"click"],[1,"edges-list"],[1,"edges-empty"],[1,"topic-detail-card","notes-card"],[1,"comments-list"],[1,"comment-bubble",3,"drag-over"],[1,"comments-empty"],["appearance","outline","subscriptSizing","dynamic",1,"add-comment-field"],["matInput","","rows","3","placeholder","Add note ...",3,"keydown"],["mat-icon-button","","matSuffix","","type","button","aria-label","Save note",3,"click","disabled"],[1,"comment-input-hint"],["matInput","","formControlName","closed",3,"matDatepicker"],["matSuffix","",3,"for"],["type","button","mat-icon-button","","title","Assign to me","aria-label","Assign to me",1,"assign-me-btn",3,"click"],[3,"removed","click","title"],["matChipRemove",""],["matListItemTitle",""],[1,"edge-relation"],["role","link","tabindex","0",1,"edge-entry-title",3,"click","keydown.enter"],[1,"comment-bubble",3,"dragover","dragleave","drop"],[1,"comment-header"],[1,"comment-author"],["mat-icon-button","","aria-label","Delete comment",1,"comment-delete-btn",3,"click","disabled"],[1,"comment-text",3,"innerHTML"],[1,"comment-timestamp"],[1,"comment-emails"],[1,"comment-email-chip"],[1,"comment-email-chip",3,"click"],[1,"comment-email-date"],[1,"comment-email-subject"],["viewBox","0 0 24 24",1,"doc-type-icon"]],template:function(e,t){if(e&1){let i=V();f(0,Il,1,0,"mat-progress-bar",4),l(1,"div",5)(2,"div",6)(3,"h1",7),p(4),c()(),l(5,"div",8)(6,"div",9)(7,"mat-card",10)(8,"mat-toolbar")(9,"span"),p(10,"Details"),c()(),l(11,"mat-card-content")(12,"div",11)(13,"mat-form-field",12)(14,"mat-label"),p(15,"Title"),c(),E(16,"input",13),c(),l(17,"mat-form-field",12)(18,"mat-label"),p(19,"Description"),c(),E(20,"textarea",14),c(),l(21,"div",15)(22,"div",16)(23,"span",17),p(24,"Open"),c(),E(25,"mat-slide-toggle",18),c(),f(26,Al,7,2,"mat-form-field",12),c(),l(27,"div",19)(28,"mat-form-field",12)(29,"mat-label"),p(30,"Organization"),c(),l(31,"mat-select",20)(32,"mat-option",21),p(33,"Clear assignment"),c(),H(34,Tl,2,2,"mat-option",21,Pi),c()(),l(36,"div",22),f(37,Ol,3,0,"button",23),c(),l(38,"mat-form-field",12)(39,"mat-label"),p(40,"Owner"),c(),l(41,"mat-select",24)(42,"mat-option",21),p(43,"Clear assignment"),c(),f(44,Pl,3,0,"mat-optgroup",25),f(45,Vl,3,0,"mat-optgroup",26),c()()(),l(46,"mat-form-field",12)(47,"mat-label"),p(48,"Tags"),c(),l(49,"mat-chip-grid",27,0),H(51,Ll,5,3,"mat-chip-row",28,lt),c(),l(53,"input",29),_("matChipInputTokenEnd",function(o){return t.addTag(o)}),c()()(),l(54,"div",30)(55,"div",31)(56,"span",32),p(57,"Edges"),c(),l(58,"button",33),_("click",function(){return t.openAddEdgeDialog()}),l(59,"mat-icon"),p(60,"add_link"),c()()(),l(61,"mat-list",34),H(62,Nl,6,2,"mat-list-item",null,Pi,!1,Bl,2,0,"p",35),c()()()()(),l(65,"mat-card",36)(66,"mat-toolbar")(67,"span"),p(68,"Notes"),c()(),l(69,"mat-card-content")(70,"div",37,1),H(72,jl,13,12,"div",38,Pi,!1,Gl,2,0,"p",39),c()(),l(75,"mat-card-footer")(76,"mat-form-field",40)(77,"textarea",41,2),_("keydown",function(o){x(i);let m=ae(78);return M(t.onCommentKeydown(o,m))}),c(),l(79,"button",42),_("click",function(){x(i);let o=ae(78);return M(t.addComment(o))}),l(80,"mat-icon"),p(81,"send"),c()()(),l(82,"span",43),p(83,"[Enter] to submit. [Shift]+[Enter] for new line."),c()()()()()}if(e&2){let i,a=ae(50);v(t.isLoading()?0:-1),d(4),y((i=t.topic())==null?null:i.Title),d(8),u("formGroup",t.topicForm),d(14),v(t.isTopicOpen()?-1:26),d(6),u("value",null),d(2),Y(t.organizations()),d(3),v(t.isOwnedByMe()?-1:37),d(5),u("value",null),d(2),v(t.ownerUserOptions().length>0?44:-1),d(),v(t.ownerRoleOptions().length>0?45:-1),d(6),Y(t.tags()),d(2),u("matChipInputFor",a)("matChipInputSeparatorKeyCodes",t.tagSeparatorKeys)("matChipInputAddOnBlur",!0)("disabled",t.isLoading()),d(9),Y(t.edges()),d(10),Y(t.comments()),d(7),u("disabled",t.isLoading())}},dependencies:[xa,Ca,wa,Da,ka,Ma,be,ve,Me,Je,Ta,Aa,ci,li,ri,oi,pi,di,Ra,Pa,Fa,Oa,Na,Qi,tr,er,yi,on,mr,dr,pr,cr,_n,ya,va,ba,fa,ga,ii,ai,pa,Ft,ha,Qt,Fi],styles:["[_nghost-%COMP%]{display:block;height:100%}.topic-container[_ngcontent-%COMP%]{height:100%;padding:20px;box-sizing:border-box;display:flex;flex-direction:column}.header-row[_ngcontent-%COMP%]{display:flex;align-items:center;gap:8px;margin-bottom:16px;flex:0 0 auto}.page-title[_ngcontent-%COMP%]{margin:0;font-size:24px;font-weight:500}.cards-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 1fr;gap:20px;margin-top:20px;flex:1 1 auto;min-height:0}.details-column[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:20px;min-height:0}.details-column[_ngcontent-%COMP%]   .topic-detail-card[_ngcontent-%COMP%]{flex:1 1 auto;min-height:0}.topic-detail-card[_ngcontent-%COMP%]{padding:0;border-radius:0;box-shadow:0 5px 5px -3px #0003,0 8px 10px 1px #00000024,0 3px 14px 2px #0000001f;min-height:300px;background:transparent;color:var(--text-primary);display:flex;flex-direction:column}.notes-card[_ngcontent-%COMP%]{min-height:0}.notes-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]{flex:1 1 auto;min-height:0;display:flex;flex-direction:column}mat-toolbar[_ngcontent-%COMP%]{min-height:56px;height:auto;padding:4px 16px;font-size:14px;font-weight:500;display:flex;align-items:center;gap:12px;background:color-mix(in srgb,var(--surface-0) 95%,black 5%);color:var(--text-primary);border-bottom:.5px solid var(--border);flex:0 0 auto}mat-card-content[_ngcontent-%COMP%]{padding:16px!important}.topic-details-form[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:16px}.field-row[_ngcontent-%COMP%]{display:flex;gap:16px}.field-row[_ngcontent-%COMP%]   .detail-field[_ngcontent-%COMP%]{flex:1 1 0;min-width:0}.field-row[_ngcontent-%COMP%]   .detail-field.toggle-field[_ngcontent-%COMP%]{flex:0 0 auto;width:auto}.detail-field[_ngcontent-%COMP%]{width:100%;--mdc-outlined-text-field-outline-color: var(--border);--mdc-outlined-text-field-hover-outline-color: var(--text-muted);--mdc-outlined-text-field-focus-outline-color: var(--text-accent);--mdc-outlined-text-field-label-text-color: var(--text-muted);--mdc-outlined-text-field-input-text-color: var(--text-primary)}.detail-field[_ngcontent-%COMP%]     .mat-mdc-text-field-wrapper.mdc-text-field--outlined{background-color:var(--surface-1)!important;border-radius:4px}.detail-field[_ngcontent-%COMP%]   mat-chip-grid[_ngcontent-%COMP%]{margin-bottom:4px}.detail-field[_ngcontent-%COMP%]   mat-chip-grid[_ngcontent-%COMP%]   mat-chip-row[_ngcontent-%COMP%]{cursor:pointer}.comments-list[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:10px;flex:1 1 auto;min-height:0;overflow-y:auto}.comment-bubble[_ngcontent-%COMP%]{background-color:var(--surface-1);border:.5px solid var(--border);border-radius:12px;padding:10px 14px;max-width:85%;align-self:flex-start;box-shadow:0 1px 2px #00000014;transition:background-color .15s ease,border-color .15s ease}.comment-bubble.drag-over[_ngcontent-%COMP%]{background-color:var(--bg-accent);border-color:var(--text-accent);border-style:dashed}.comment-header[_ngcontent-%COMP%]{display:flex;align-items:flex-start;justify-content:space-between;gap:8px}.comment-author[_ngcontent-%COMP%]{display:block;font-size:12px;font-weight:600;color:var(--text-accent);margin-bottom:2px}.comment-delete-btn[_ngcontent-%COMP%]{flex:0 0 auto;width:28px;height:28px;padding:2px;line-height:24px;color:var(--text-muted);margin-top:-4px;margin-right:-6px}.comment-delete-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:18px;width:18px;height:18px;line-height:18px}.comment-delete-btn[_ngcontent-%COMP%]:hover{color:#c62828}.comment-text[_ngcontent-%COMP%]{margin:0;font-size:14px;line-height:1.4;color:var(--text-primary);white-space:pre-wrap;word-break:break-word}.comment-text[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:var(--text-secondary);text-decoration:underline;word-break:break-all}.comment-text[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color:var(--text-accent)}.comment-timestamp[_ngcontent-%COMP%]{display:block;margin-top:4px;font-size:11px;color:var(--text-muted);text-align:right}.comment-emails[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:4px;margin-top:8px;padding-top:8px;border-top:.5px solid var(--border)}.comment-email-chip[_ngcontent-%COMP%]{display:flex;align-items:center;gap:6px;padding:4px 6px;border-radius:6px;background-color:var(--surface-2);border:.5px solid var(--border);cursor:pointer;transition:background-color .15s ease,border-color .15s ease;max-width:100%;overflow:hidden}.comment-email-chip[_ngcontent-%COMP%]:hover{background-color:var(--bg-accent);border-color:var(--text-accent)}.comment-email-chip[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:16px;width:16px;height:16px;line-height:16px;color:var(--text-accent);flex:0 0 auto}.comment-email-chip[_ngcontent-%COMP%]   .doc-type-icon[_ngcontent-%COMP%]{width:16px;height:16px;flex:0 0 auto}.comment-email-date[_ngcontent-%COMP%]{font-size:12px;color:var(--text-muted);flex:0 0 auto;white-space:nowrap}.comment-email-subject[_ngcontent-%COMP%]{font-size:12px;color:var(--text-primary);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;flex:1 1 auto;min-width:0}.comments-empty[_ngcontent-%COMP%]{margin:0;font-size:14px;color:var(--text-muted);font-style:italic}mat-card-footer[_ngcontent-%COMP%]{display:block;padding:8px 12px;border-top:.5px solid var(--border);flex:0 0 auto}.add-comment-field[_ngcontent-%COMP%]{width:100%;--mdc-outlined-text-field-outline-color: var(--border);--mdc-outlined-text-field-hover-outline-color: var(--text-muted);--mdc-outlined-text-field-focus-outline-color: var(--text-accent);--mdc-outlined-text-field-input-text-color: var(--text-primary)}.add-comment-field[_ngcontent-%COMP%]     .mat-mdc-text-field-wrapper.mdc-text-field--outlined{background-color:var(--surface-1)!important;border-radius:4px}.comment-input-hint[_ngcontent-%COMP%]{display:block;margin-top:4px;font-size:11px;color:var(--text-muted)}.add-comment-field[_ngcontent-%COMP%]   .mat-mdc-form-field-infix[_ngcontent-%COMP%]{min-height:0;padding-top:8px;padding-bottom:8px}.add-comment-field[_ngcontent-%COMP%]   textarea.mat-mdc-input-element[_ngcontent-%COMP%]{resize:none;line-height:1.4}.add-comment-field[_ngcontent-%COMP%]   .mat-mdc-form-field-icon-suffix[_ngcontent-%COMP%]{align-self:flex-end;padding-bottom:4px}.add-comment-field[_ngcontent-%COMP%]   .mat-mdc-icon-button[_ngcontent-%COMP%]{width:32px;height:32px;padding:4px;color:var(--text-muted)}.add-comment-field[_ngcontent-%COMP%]   .mat-mdc-icon-button[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:20px;width:20px;height:20px;line-height:20px}.toggle-field[_ngcontent-%COMP%]{display:flex;align-items:center;gap:12px;height:56px}.toggle-label[_ngcontent-%COMP%]{font-size:14px;color:var(--text-primary)}.org-owner-row[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 40px 1fr;gap:16px;align-items:center}.org-owner-row[_ngcontent-%COMP%]   .detail-field[_ngcontent-%COMP%]{min-width:0}.assign-me-slot[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center}.assign-me-btn[_ngcontent-%COMP%]{color:var(--text-accent)}.edges-section[_ngcontent-%COMP%]{margin-top:8px;padding-top:12px;border-top:.5px solid var(--border)}.edges-header[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between}.edges-title[_ngcontent-%COMP%]{font-size:12px;font-weight:600;color:var(--text-muted);text-transform:uppercase;letter-spacing:.04em}.add-edge-btn[_ngcontent-%COMP%]{flex:0 0 auto;color:var(--text-accent);width:32px;height:32px;padding:4px}.add-edge-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:18px;width:18px;height:18px;line-height:18px}.edges-list[_ngcontent-%COMP%]{padding:0!important}.edges-list[_ngcontent-%COMP%]   .mat-mdc-list-item[_ngcontent-%COMP%]{--mdc-list-list-item-container-color: transparent;--mdc-list-list-item-label-text-color: var(--text-primary);--mdc-list-list-item-one-line-container-height: 40px;padding:0!important}.edge-relation[_ngcontent-%COMP%]{font-weight:600;color:var(--text-accent)}.edge-entry-title[_ngcontent-%COMP%]{color:var(--text-primary);margin-left:4px;text-decoration:none;cursor:pointer}.edge-entry-title[_ngcontent-%COMP%]:hover, .edge-entry-title[_ngcontent-%COMP%]:focus-visible{color:var(--text-accent);text-decoration:underline}.edges-empty[_ngcontent-%COMP%]{margin:4px 0 0;font-size:14px;color:var(--text-muted);font-style:italic}"]})};export{xr as Topic};
