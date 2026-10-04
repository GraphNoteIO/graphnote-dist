import{a as Cr,b as wr}from"./chunk-JUWNVTQJ.js";import{a as Bt,b as vt,c as er,d as Li,e as bt,f as yt,g as Ht,h as xt}from"./chunk-QLFL4KPL.js";import{a as xr,b as qi}from"./chunk-FYNGFHEH.js";import{d as La,f as Ai}from"./chunk-URBOGYZI.js";import{a as Sr,b as Ir,c as Tr}from"./chunk-2MFOMQCD.js";import{a as Dr,b as Mr,c as kr,d as Er}from"./chunk-O7RBZBHJ.js";import{A as Mn,B as hr,C as ur,D as gr,E as _r,F as fr,G as vr,I as zi,J as Gi,K as In,L as Yi,M as ji,N as Ui,O as br,P as Et,Q as yr,R as $i,S as Qi,a as qa,b as ot,c as Ve,d as Le,e as Ka,h as Wa,i as _t,j as ri,k as Xa,m as ft,n as oi,o as Za,p as Pi,q as Fi,t as Ri,u as Ja,v as Vi,x as Nt}from"./chunk-3RW7HNWU.js";import{a as Gt,b as Ct}from"./chunk-Z3T356JQ.js";import{$ as O,$a as Pt,$c as $a,A as Zt,Aa as at,Ab as z,B as Ca,Bb as fe,Bc as Ba,Bd as cr,Ca as Ea,Cb as m,Cc as Ha,D as Jt,Da as Ot,Db as A,Eb as te,Ed as dr,Fb as ei,Fd as pr,Gb as Ei,Ha as N,Hb as Si,Hc as za,Hd as mr,Ia as Ie,Ib as Ii,Ic as Ga,Ja as $,Jb as Ta,Jc as Ya,K as xe,Ka as Sa,Kb as se,Kc as me,L as xi,Lb as Aa,M as K,Ma as ge,Mb as ti,Mc as Oi,Na as rt,Nb as Oa,Nc as he,Oa as yn,Ob as Ft,Pb as Pa,Qb as ii,Qc as ja,R as mt,Rb as xn,S as ke,T as Ee,Tb as Fa,V as W,Va as F,Vb as He,W as wa,Wa as Ci,Wc as Ua,X as d,Xa as wi,Xb as Rt,Yb as Ra,Yc as ue,Za as E,Zb as Va,_a as S,_b as ni,_c as Dn,a as X,aa as P,ab as Q,ac as J,b as Ue,ba as oe,bb as q,bc as B,c as yi,ca as Ke,cb as C,cc as Mt,cd as Qa,d as Be,da as Se,db as s,dd as Vt,ea as tt,eb as c,ed as Qe,fa as Da,fb as H,fd as Lt,g as j,gb as _e,gd as tr,ha as R,hb as we,hd as kt,ia as $e,ib as Ia,ic as Cn,id as Ni,jb as We,jc as Ti,jd as Bi,kb as Y,kd as zt,l as dt,la as D,lb as de,ld as kn,mb as x,md as En,na as Ce,nb as Di,nc as Te,nd as Hi,oa as it,ob as u,oc as ut,od as ir,p as ya,pb as ne,pc as Re,pd as Sn,qa as U,qb as Z,qc as ze,qd as nr,ra as Dt,rb as De,rc as Ae,sb as ie,sc as Oe,sd as ar,ta as Ma,tb as V,tc as ai,td as si,ua as ka,ub as L,ud as rr,v as pt,vc as gt,vd as or,w as xa,wa as l,wb as Mi,wc as wn,wd as sr,xa as Fe,xb as ki,ya as nt,yb as pe,yc as Xe,zb as ht,zc as Na,zd as lr}from"./chunk-RQGOZP4P.js";var ns=["mat-internal-form-field",""],as=["*"],Ar=(()=>{class n{labelPosition="after";static \u0275fac=function(t){return new(t||n)};static \u0275cmp=N({type:n,selectors:[["div","mat-internal-form-field",""]],hostAttrs:[1,"mdc-form-field","mat-internal-form-field"],hostVars:2,hostBindings:function(t,i){t&2&&z("mdc-form-field--align-end",i.labelPosition==="before")},inputs:{labelPosition:"labelPosition"},attrs:ns,ngContentSelectors:as,decls:1,vars:0,template:function(t,i){t&1&&(ne(),Z(0))},styles:[`.mat-internal-form-field {
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
`],encapsulation:2,changeDetection:0})}return n})();var rs=["switch"],os=["*"];function ss(n,a){n&1&&(s(0,"span",11),oe(),s(1,"svg",13),H(2,"path",14),c(),s(3,"svg",15),H(4,"path",16),c()())}var ls=new W("mat-slide-toggle-default-options",{providedIn:"root",factory:()=>({disableToggleValue:!1,hideIcon:!1,disabledInteractive:!1})}),Ki=class{source;checked;constructor(a,e){this.source=a,this.checked=e}},Tn=(()=>{class n{_elementRef=d(U);_focusMonitor=d(Xe);_changeDetectorRef=d(J);defaults=d(ls);_onChange=e=>{};_onTouched=()=>{};_validatorOnChange=()=>{};_uniqueId;_checked=!1;_createChangeEvent(e){return new Ki(this,e)}_labelId;get buttonId(){return`${this.id||this._uniqueId}-button`}_switchElement;focus(){this._switchElement.nativeElement.focus()}_noopAnimations=ue();_focused=!1;name=null;id;labelPosition="after";ariaLabel=null;ariaLabelledby=null;ariaDescribedby;required=!1;color;disabled=!1;disableRipple=!1;tabIndex=0;get checked(){return this._checked}set checked(e){this._checked=e,this._changeDetectorRef.markForCheck()}hideIcon;disabledInteractive;change=new R;toggleChange=new R;get inputId(){return`${this.id||this._uniqueId}-input`}constructor(){d(Te).load(Qe);let e=d(new Rt("tabindex"),{optional:!0}),t=this.defaults;this.tabIndex=e==null?0:parseInt(e)||0,this.color=t.color||"accent",this.id=this._uniqueId=d(he).getId("mat-mdc-slide-toggle-"),this.hideIcon=t.hideIcon??!1,this.disabledInteractive=t.disabledInteractive??!1,this._labelId=this._uniqueId+"-label"}ngAfterContentInit(){this._focusMonitor.monitor(this._elementRef,!0).subscribe(e=>{e==="keyboard"||e==="program"?(this._focused=!0,this._changeDetectorRef.markForCheck()):e||Promise.resolve().then(()=>{this._focused=!1,this._onTouched(),this._changeDetectorRef.markForCheck()})})}ngOnChanges(e){e.required&&this._validatorOnChange()}ngOnDestroy(){this._focusMonitor.stopMonitoring(this._elementRef)}writeValue(e){this.checked=!!e}registerOnChange(e){this._onChange=e}registerOnTouched(e){this._onTouched=e}validate(e){return this.required&&e.value!==!0?{required:!0}:null}registerOnValidatorChange(e){this._validatorOnChange=e}setDisabledState(e){this.disabled=e,this._changeDetectorRef.markForCheck()}toggle(){this.checked=!this.checked,this._onChange(this.checked)}_emitChangeEvent(){this._onChange(this.checked),this.change.emit(this._createChangeEvent(this.checked))}_handleClick(){this.disabled||(this.toggleChange.emit(),this.defaults.disableToggleValue||(this.checked=!this.checked,this._onChange(this.checked),this.change.emit(new Ki(this,this.checked))))}_getAriaLabelledBy(){return this.ariaLabelledby?this.ariaLabelledby:this.ariaLabel?null:this._labelId}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=N({type:n,selectors:[["mat-slide-toggle"]],viewQuery:function(t,i){if(t&1&&ie(rs,5),t&2){let r;V(r=L())&&(i._switchElement=r.first)}},hostAttrs:[1,"mat-mdc-slide-toggle"],hostVars:13,hostBindings:function(t,i){t&2&&(de("id",i.id),F("tabindex",null)("aria-label",null)("name",null)("aria-labelledby",null),fe(i.color?"mat-"+i.color:""),z("mat-mdc-slide-toggle-focused",i._focused)("mat-mdc-slide-toggle-checked",i.checked)("_mat-animation-noopable",i._noopAnimations))},inputs:{name:"name",id:"id",labelPosition:"labelPosition",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],ariaDescribedby:[0,"aria-describedby","ariaDescribedby"],required:[2,"required","required",B],color:"color",disabled:[2,"disabled","disabled",B],disableRipple:[2,"disableRipple","disableRipple",B],tabIndex:[2,"tabIndex","tabIndex",e=>e==null?0:Mt(e)],checked:[2,"checked","checked",B],hideIcon:[2,"hideIcon","hideIcon",B],disabledInteractive:[2,"disabledInteractive","disabledInteractive",B]},outputs:{change:"change",toggleChange:"toggleChange"},exportAs:["matSlideToggle"],features:[se([{provide:kt,useExisting:mt(()=>n),multi:!0},{provide:Bi,useExisting:n,multi:!0}]),Ce],ngContentSelectors:os,decls:14,vars:27,consts:[["switch",""],["mat-internal-form-field","",3,"labelPosition"],["role","switch","type","button",1,"mdc-switch",3,"click","tabIndex","disabled"],[1,"mat-mdc-slide-toggle-touch-target"],[1,"mdc-switch__track"],[1,"mdc-switch__handle-track"],[1,"mdc-switch__handle"],[1,"mdc-switch__shadow"],[1,"mdc-elevation-overlay"],[1,"mdc-switch__ripple"],["mat-ripple","",1,"mat-mdc-slide-toggle-ripple","mat-focus-indicator",3,"matRippleTrigger","matRippleDisabled","matRippleCentered"],[1,"mdc-switch__icons"],[1,"mdc-label",3,"click","for"],["viewBox","0 0 24 24","aria-hidden","true",1,"mdc-switch__icon","mdc-switch__icon--on"],["d","M19.69,5.23L8.96,15.96l-4.23-4.23L2.96,13.5l6,6L21.46,7L19.69,5.23z"],["viewBox","0 0 24 24","aria-hidden","true",1,"mdc-switch__icon","mdc-switch__icon--off"],["d","M20 13H4v-2h16v2z"]],template:function(t,i){if(t&1&&(ne(),s(0,"div",1)(1,"button",2,0),x("click",function(){return i._handleClick()}),H(3,"div",3)(4,"span",4),s(5,"span",5)(6,"span",6)(7,"span",7),H(8,"span",8),c(),s(9,"span",9),H(10,"span",10),c(),E(11,ss,5,0,"span",11),c()()(),s(12,"label",12),x("click",function(o){return o.stopPropagation()}),Z(13),c()()),t&2){let r=pe(2);C("labelPosition",i.labelPosition),l(),z("mdc-switch--selected",i.checked)("mdc-switch--unselected",!i.checked)("mdc-switch--checked",i.checked)("mdc-switch--disabled",i.disabled)("mat-mdc-slide-toggle-disabled-interactive",i.disabledInteractive),C("tabIndex",i.disabled&&!i.disabledInteractive?-1:i.tabIndex)("disabled",i.disabled&&!i.disabledInteractive),F("id",i.buttonId)("name",i.name)("aria-label",i.ariaLabel)("aria-labelledby",i._getAriaLabelledBy())("aria-describedby",i.ariaDescribedby)("aria-required",i.required||null)("aria-checked",i.checked)("aria-disabled",i.disabled&&i.disabledInteractive?"true":null),l(9),C("matRippleTrigger",r)("matRippleDisabled",i.disableRipple||i.disabled)("matRippleCentered",!0),l(),S(i.hideIcon?-1:11),l(),C("for",i.buttonId),F("id",i._labelId)}},dependencies:[Vt,Ar],styles:[`.mdc-switch {
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
`],encapsulation:2,changeDetection:0})}return n})(),Or=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=Ie({type:n});static \u0275inj=Ee({imports:[Tn,ze]})}return n})();var An=new W("MAT_DATE_LOCALE",{providedIn:"root",factory:()=>d(Fa)}),Yt="Method not implemented",ve=class{locale;_localeChanges=new j;localeChanges=this._localeChanges;setTime(a,e,t,i){throw new Error(Yt)}getHours(a){throw new Error(Yt)}getMinutes(a){throw new Error(Yt)}getSeconds(a){throw new Error(Yt)}parseTime(a,e){throw new Error(Yt)}addSeconds(a,e){throw new Error(Yt)}getValidDateOrNull(a){return this.isDateInstance(a)&&this.isValid(a)?a:null}deserialize(a){return a==null||this.isDateInstance(a)&&this.isValid(a)?a:this.invalid()}setLocale(a){this.locale=a,this._localeChanges.next()}compareDate(a,e){return this.getYear(a)-this.getYear(e)||this.getMonth(a)-this.getMonth(e)||this.getDate(a)-this.getDate(e)}compareTime(a,e){return this.getHours(a)-this.getHours(e)||this.getMinutes(a)-this.getMinutes(e)||this.getSeconds(a)-this.getSeconds(e)}sameDate(a,e){if(a&&e){let t=this.isValid(a),i=this.isValid(e);return t&&i?!this.compareDate(a,e):t==i}return a==e}sameTime(a,e){if(a&&e){let t=this.isValid(a),i=this.isValid(e);return t&&i?!this.compareTime(a,e):t==i}return a==e}clampDate(a,e,t){return e&&this.compareDate(a,e)<0?e:t&&this.compareDate(a,t)>0?t:a}},wt=new W("mat-date-formats");var ds=["tooltip"],ps=20;var ms=new W("mat-tooltip-scroll-strategy",{providedIn:"root",factory:()=>{let n=d(Se);return()=>Pi(n,{scrollThrottle:ps})}}),hs=new W("mat-tooltip-default-options",{providedIn:"root",factory:()=>({showDelay:0,hideDelay:0,touchendHideDelay:1500})});var Pr="tooltip-panel",us={passive:!0},gs=8,_s=8,fs=24,vs=200,Fr=(()=>{class n{_elementRef=d(U);_ngZone=d($e);_platform=d(gt);_ariaDescriber=d(ja);_focusMonitor=d(Xe);_dir=d(Re);_injector=d(Se);_viewContainerRef=d(Ot);_mediaMatcher=d(Ba);_document=d(tt);_renderer=d(at);_animationsDisabled=ue();_defaultOptions=d(hs,{optional:!0});_overlayRef=null;_tooltipInstance=null;_overlayPanelClass;_portal;_position="below";_positionAtOrigin=!1;_disabled=!1;_tooltipClass;_viewInitialized=!1;_pointerExitEventsInitialized=!1;_tooltipComponent=bs;_viewportMargin=8;_currentPosition;_cssClassPrefix="mat-mdc";_ariaDescriptionPending=!1;_dirSubscribed=!1;get position(){return this._position}set position(e){e!==this._position&&(this._position=e,this._overlayRef&&(this._updatePosition(this._overlayRef),this._tooltipInstance?.show(0),this._overlayRef.updatePosition()))}get positionAtOrigin(){return this._positionAtOrigin}set positionAtOrigin(e){this._positionAtOrigin=Dn(e),this._detach(),this._overlayRef=null}get disabled(){return this._disabled}set disabled(e){let t=Dn(e);this._disabled!==t&&(this._disabled=t,t?this.hide(0):this._setupPointerEnterEventsIfNeeded(),this._syncAriaDescription(this.message))}get showDelay(){return this._showDelay}set showDelay(e){this._showDelay=wn(e)}_showDelay;get hideDelay(){return this._hideDelay}set hideDelay(e){this._hideDelay=wn(e),this._tooltipInstance&&(this._tooltipInstance._mouseLeaveHideDelay=this._hideDelay)}_hideDelay;touchGestures="auto";get message(){return this._message}set message(e){let t=this._message;this._message=e!=null?String(e).trim():"",!this._message&&this._isTooltipVisible()?this.hide(0):(this._setupPointerEnterEventsIfNeeded(),this._updateTooltipMessage()),this._syncAriaDescription(t)}_message="";get tooltipClass(){return this._tooltipClass}set tooltipClass(e){this._tooltipClass=e,this._tooltipInstance&&this._setTooltipClass(this._tooltipClass)}_eventCleanups=[];_touchstartTimeout=null;_destroyed=new j;_isDestroyed=!1;constructor(){let e=this._defaultOptions;e&&(this._showDelay=e.showDelay,this._hideDelay=e.hideDelay,e.position&&(this.position=e.position),e.positionAtOrigin&&(this.positionAtOrigin=e.positionAtOrigin),e.touchGestures&&(this.touchGestures=e.touchGestures),e.tooltipClass&&(this.tooltipClass=e.tooltipClass)),this._viewportMargin=gs}ngAfterViewInit(){this._viewInitialized=!0,this._setupPointerEnterEventsIfNeeded(),this._focusMonitor.monitor(this._elementRef).pipe(K(this._destroyed)).subscribe(e=>{e?e==="keyboard"&&this._ngZone.run(()=>this.show()):this._ngZone.run(()=>this.hide(0))})}ngOnDestroy(){let e=this._elementRef.nativeElement;this._touchstartTimeout&&clearTimeout(this._touchstartTimeout),this._overlayRef&&(this._overlayRef.dispose(),this._tooltipInstance=null),this._eventCleanups.forEach(t=>t()),this._eventCleanups.length=0,this._destroyed.next(),this._destroyed.complete(),this._isDestroyed=!0,this._ariaDescriber.removeDescription(e,this.message,"tooltip"),this._focusMonitor.stopMonitoring(e)}show(e=this.showDelay,t){if(this.disabled||!this.message||this._isTooltipVisible()){this._tooltipInstance?._cancelPendingAnimations();return}let i=this._createOverlay(t);this._detach(),this._portal=this._portal||new _t(this._tooltipComponent,this._viewContainerRef);let r=this._tooltipInstance=i.attach(this._portal).instance;r._triggerElement=this._elementRef.nativeElement,r._mouseLeaveHideDelay=this._hideDelay,r.afterHidden().pipe(K(this._destroyed)).subscribe(()=>this._detach()),this._setTooltipClass(this._tooltipClass),this._updateTooltipMessage(),r.show(e)}hide(e=this.hideDelay){let t=this._tooltipInstance;t&&(t.isVisible()?t.hide(e):(t._cancelPendingAnimations(),this._detach()))}toggle(e){this._isTooltipVisible()?this.hide():this.show(void 0,e)}_isTooltipVisible(){return!!this._tooltipInstance&&this._tooltipInstance.isVisible()}_createOverlay(e){if(this._overlayRef){let o=this._overlayRef.getConfig().positionStrategy;if((!this.positionAtOrigin||!e)&&o._origin instanceof U)return this._overlayRef;this._detach()}let t=this._injector.get(Ka).getAncestorScrollContainers(this._elementRef),i=`${this._cssClassPrefix}-${Pr}`,r=Ri(this._injector,this.positionAtOrigin?e||this._elementRef:this._elementRef).withTransformOriginOn(`.${this._cssClassPrefix}-tooltip`).withFlexibleDimensions(!1).withViewportMargin(this._viewportMargin).withScrollableContainers(t).withPopoverLocation("global");return r.positionChanges.pipe(K(this._destroyed)).subscribe(o=>{this._updateCurrentPositionClass(o.connectionPair),this._tooltipInstance&&o.scrollableViewProperties.isOverlayClipped&&this._tooltipInstance.isVisible()&&this._ngZone.run(()=>this.hide(0))}),this._overlayRef=Nt(this._injector,{direction:this._dir,positionStrategy:r,panelClass:this._overlayPanelClass?[...this._overlayPanelClass,i]:i,scrollStrategy:this._injector.get(ms)(),disableAnimations:this._animationsDisabled,eventPredicate:this._overlayEventPredicate}),this._updatePosition(this._overlayRef),this._overlayRef.detachments().pipe(K(this._destroyed)).subscribe(()=>this._detach()),this._overlayRef.outsidePointerEvents().pipe(K(this._destroyed)).subscribe(()=>this._tooltipInstance?._handleBodyInteraction()),this._overlayRef.keydownEvents().pipe(K(this._destroyed)).subscribe(o=>{o.preventDefault(),o.stopPropagation(),this._ngZone.run(()=>this.hide(0))}),this._defaultOptions?.disableTooltipInteractivity&&this._overlayRef.addPanelClass(`${this._cssClassPrefix}-tooltip-panel-non-interactive`),this._dirSubscribed||(this._dirSubscribed=!0,this._dir.change.pipe(K(this._destroyed)).subscribe(()=>{this._overlayRef&&this._updatePosition(this._overlayRef)})),this._overlayRef}_detach(){this._overlayRef&&this._overlayRef.hasAttached()&&this._overlayRef.detach(),this._tooltipInstance=null}_updatePosition(e){let t=e.getConfig().positionStrategy,i=this._getOrigin(),r=this._getOverlayPosition();t.withPositions([this._addOffset(X(X({},i.main),r.main)),this._addOffset(X(X({},i.fallback),r.fallback))])}_addOffset(e){let t=_s,i=!this._dir||this._dir.value=="ltr";return e.originY==="top"?e.offsetY=-t:e.originY==="bottom"?e.offsetY=t:e.originX==="start"?e.offsetX=i?-t:t:e.originX==="end"&&(e.offsetX=i?t:-t),e}_getOrigin(){let e=!this._dir||this._dir.value=="ltr",t=this.position,i;t=="above"||t=="below"?i={originX:"center",originY:t=="above"?"top":"bottom"}:t=="before"||t=="left"&&e||t=="right"&&!e?i={originX:"start",originY:"center"}:(t=="after"||t=="right"&&e||t=="left"&&!e)&&(i={originX:"end",originY:"center"});let{x:r,y:o}=this._invertPosition(i.originX,i.originY);return{main:i,fallback:{originX:r,originY:o}}}_getOverlayPosition(){let e=!this._dir||this._dir.value=="ltr",t=this.position,i;t=="above"?i={overlayX:"center",overlayY:"bottom"}:t=="below"?i={overlayX:"center",overlayY:"top"}:t=="before"||t=="left"&&e||t=="right"&&!e?i={overlayX:"end",overlayY:"center"}:(t=="after"||t=="right"&&e||t=="left"&&!e)&&(i={overlayX:"start",overlayY:"center"});let{x:r,y:o}=this._invertPosition(i.overlayX,i.overlayY);return{main:i,fallback:{overlayX:r,overlayY:o}}}_updateTooltipMessage(){this._tooltipInstance&&(this._tooltipInstance.message=this.message,this._tooltipInstance._markForCheck(),Fe(()=>{this._tooltipInstance&&this._overlayRef.updatePosition()},{injector:this._injector}))}_setTooltipClass(e){this._tooltipInstance&&(this._tooltipInstance.tooltipClass=e instanceof Set?Array.from(e):e,this._tooltipInstance._markForCheck())}_invertPosition(e,t){return this.position==="above"||this.position==="below"?t==="top"?t="bottom":t==="bottom"&&(t="top"):e==="end"?e="start":e==="start"&&(e="end"),{x:e,y:t}}_updateCurrentPositionClass(e){let{overlayY:t,originX:i,originY:r}=e,o;if(t==="center"?this._dir&&this._dir.value==="rtl"?o=i==="end"?"left":"right":o=i==="start"?"left":"right":o=t==="bottom"&&r==="top"?"above":"below",o!==this._currentPosition){let p=this._overlayRef;if(p){let g=`${this._cssClassPrefix}-${Pr}-`;p.removePanelClass(g+this._currentPosition),p.addPanelClass(g+o)}this._currentPosition=o}}_setupPointerEnterEventsIfNeeded(){this._disabled||!this.message||!this._viewInitialized||this._eventCleanups.length||(this._isTouchPlatform()?this.touchGestures!=="off"&&(this._disableNativeGesturesIfNecessary(),this._addListener("touchstart",e=>{let t=e.targetTouches?.[0],i=t?{x:t.clientX,y:t.clientY}:void 0;this._setupPointerExitEventsIfNeeded(),this._touchstartTimeout&&clearTimeout(this._touchstartTimeout);let r=500;this._touchstartTimeout=setTimeout(()=>{this._touchstartTimeout=null,this.show(void 0,i)},this._defaultOptions?.touchLongPressShowDelay??r)})):this._addListener("mouseenter",e=>{this._setupPointerExitEventsIfNeeded();let t;e.x!==void 0&&e.y!==void 0&&(t=e),this.show(void 0,t)}))}_setupPointerExitEventsIfNeeded(){if(!this._pointerExitEventsInitialized){if(this._pointerExitEventsInitialized=!0,!this._isTouchPlatform())this._addListener("mouseleave",e=>{let t=e.relatedTarget;(!t||!this._overlayRef?.overlayElement.contains(t))&&this.hide()}),this._addListener("wheel",e=>{if(this._isTooltipVisible()){let t=this._document.elementFromPoint(e.clientX,e.clientY),i=this._elementRef.nativeElement;t!==i&&!i.contains(t)&&this.hide()}});else if(this.touchGestures!=="off"){this._disableNativeGesturesIfNecessary();let e=()=>{this._touchstartTimeout&&clearTimeout(this._touchstartTimeout),this.hide(this._defaultOptions?.touchendHideDelay)};this._addListener("touchend",e),this._addListener("touchcancel",e)}}}_addListener(e,t){this._eventCleanups.push(this._renderer.listen(this._elementRef.nativeElement,e,t,us))}_isTouchPlatform(){let e=this._defaultOptions?.detectHoverCapability;return typeof e=="function"?!e():this._platform.IOS||this._platform.ANDROID?!0:this._platform.isBrowser?!!e&&this._mediaMatcher.matchMedia("(any-hover: none)").matches:!1}_disableNativeGesturesIfNecessary(){let e=this.touchGestures;if(e!=="off"){let t=this._elementRef.nativeElement,i=t.style;(e==="on"||t.nodeName!=="INPUT"&&t.nodeName!=="TEXTAREA")&&(i.userSelect=i.msUserSelect=i.webkitUserSelect=i.MozUserSelect="none"),(e==="on"||!t.draggable)&&(i.webkitUserDrag="none"),i.touchAction="none",i.webkitTapHighlightColor="transparent"}}_syncAriaDescription(e){this._ariaDescriptionPending||(this._ariaDescriptionPending=!0,this._ariaDescriber.removeDescription(this._elementRef.nativeElement,e,"tooltip"),this._isDestroyed||Fe({write:()=>{this._ariaDescriptionPending=!1,this.message&&!this.disabled&&this._ariaDescriber.describe(this._elementRef.nativeElement,this.message,"tooltip")}},{injector:this._injector}))}_overlayEventPredicate=e=>e.type==="keydown"?this._isTooltipVisible()&&e.keyCode===27&&!me(e):!0;static \u0275fac=function(t){return new(t||n)};static \u0275dir=$({type:n,selectors:[["","matTooltip",""]],hostAttrs:[1,"mat-mdc-tooltip-trigger"],hostVars:2,hostBindings:function(t,i){t&2&&z("mat-mdc-tooltip-disabled",i.disabled)},inputs:{position:[0,"matTooltipPosition","position"],positionAtOrigin:[0,"matTooltipPositionAtOrigin","positionAtOrigin"],disabled:[0,"matTooltipDisabled","disabled"],showDelay:[0,"matTooltipShowDelay","showDelay"],hideDelay:[0,"matTooltipHideDelay","hideDelay"],touchGestures:[0,"matTooltipTouchGestures","touchGestures"],message:[0,"matTooltip","message"],tooltipClass:[0,"matTooltipClass","tooltipClass"]},exportAs:["matTooltip"]})}return n})(),bs=(()=>{class n{_changeDetectorRef=d(J);_elementRef=d(U);_isMultiline=!1;message;tooltipClass;_showTimeoutId;_hideTimeoutId;_triggerElement;_mouseLeaveHideDelay;_animationsDisabled=ue();_tooltip;_closeOnInteraction=!1;_isVisible=!1;_onHide=new j;_showAnimation="mat-mdc-tooltip-show";_hideAnimation="mat-mdc-tooltip-hide";constructor(){}show(e){this._hideTimeoutId!=null&&clearTimeout(this._hideTimeoutId),this._showTimeoutId=setTimeout(()=>{this._toggleVisibility(!0),this._showTimeoutId=void 0},e)}hide(e){this._showTimeoutId!=null&&clearTimeout(this._showTimeoutId),this._hideTimeoutId=setTimeout(()=>{this._toggleVisibility(!1),this._hideTimeoutId=void 0},e)}afterHidden(){return this._onHide}isVisible(){return this._isVisible}ngOnDestroy(){this._cancelPendingAnimations(),this._onHide.complete(),this._triggerElement=null}_handleBodyInteraction(){this._closeOnInteraction&&this.hide(0)}_markForCheck(){this._changeDetectorRef.markForCheck()}_handleMouseLeave({relatedTarget:e}){(!e||!this._triggerElement.contains(e))&&(this.isVisible()?this.hide(this._mouseLeaveHideDelay):this._finalizeAnimation(!1))}_onShow(){this._isMultiline=this._isTooltipMultiline(),this._markForCheck()}_isTooltipMultiline(){let e=this._elementRef.nativeElement.getBoundingClientRect();return e.height>fs&&e.width>=vs}_handleAnimationEnd({animationName:e}){(e===this._showAnimation||e===this._hideAnimation)&&this._finalizeAnimation(e===this._showAnimation)}_cancelPendingAnimations(){this._showTimeoutId!=null&&clearTimeout(this._showTimeoutId),this._hideTimeoutId!=null&&clearTimeout(this._hideTimeoutId),this._showTimeoutId=this._hideTimeoutId=void 0}_finalizeAnimation(e){e?this._closeOnInteraction=!0:this.isVisible()||this._onHide.next()}_toggleVisibility(e){let t=this._tooltip.nativeElement,i=this._showAnimation,r=this._hideAnimation;if(t.classList.remove(e?r:i),t.classList.add(e?i:r),this._isVisible!==e&&(this._isVisible=e,this._changeDetectorRef.markForCheck()),e&&!this._animationsDisabled&&typeof getComputedStyle=="function"){let o=getComputedStyle(t);(o.getPropertyValue("animation-duration")==="0s"||o.getPropertyValue("animation-name")==="none")&&(this._animationsDisabled=!0)}e&&this._onShow(),this._animationsDisabled&&(t.classList.add("_mat-animation-noopable"),this._finalizeAnimation(e))}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=N({type:n,selectors:[["mat-tooltip-component"]],viewQuery:function(t,i){if(t&1&&ie(ds,7),t&2){let r;V(r=L())&&(i._tooltip=r.first)}},hostAttrs:["aria-hidden","true"],hostBindings:function(t,i){t&1&&x("mouseleave",function(o){return i._handleMouseLeave(o)})},decls:4,vars:5,consts:[["tooltip",""],[1,"mdc-tooltip","mat-mdc-tooltip",3,"animationend"],[1,"mat-mdc-tooltip-surface","mdc-tooltip__surface"]],template:function(t,i){t&1&&(_e(0,"div",1,0),Di("animationend",function(o){return i._handleAnimationEnd(o)}),_e(2,"div",2),m(3),we()()),t&2&&(fe(i.tooltipClass),z("mdc-tooltip--multiline",i._isMultiline),l(3),A(i.message))},styles:[`.mat-mdc-tooltip {
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
`],encapsulation:2,changeDetection:0})}return n})();var ys=["mat-calendar-body",""];function xs(n,a){return this._trackRow(a)}var zr=(n,a)=>a.id;function Cs(n,a){if(n&1&&(_e(0,"tr",0)(1,"td",3),m(2),we()()),n&2){let e=u();l(),ht("padding-top",e._cellPadding)("padding-bottom",e._cellPadding),F("colspan",e.numCols),l(),te(" ",e.label," ")}}function ws(n,a){if(n&1&&(_e(0,"td",3),m(1),we()),n&2){let e=u(2);ht("padding-top",e._cellPadding)("padding-bottom",e._cellPadding),F("colspan",e._firstRowOffset),l(),te(" ",e._firstRowOffset>=e.labelMinRequiredCells?e.label:""," ")}}function Ds(n,a){if(n&1){let e=Y();_e(0,"td",6)(1,"button",7),Di("click",function(i){let r=O(e).$implicit,o=u(2);return P(o._cellClicked(r,i))})("focus",function(i){let r=O(e).$implicit,o=u(2);return P(o._emitActiveDateChange(r,i))}),_e(2,"span",8),m(3),we(),Ia(4,"span",9),we()()}if(n&2){let e=a.$implicit,t=a.$index,i=u().$index,r=u();ht("width",r._cellWidth)("padding-top",r._cellPadding)("padding-bottom",r._cellPadding),F("data-mat-row",i)("data-mat-col",t),l(),fe(e.cssClasses),z("mat-calendar-body-disabled",!e.enabled)("mat-calendar-body-active",r._isActiveCell(i,t))("mat-calendar-body-range-start",r._isRangeStart(e.compareValue))("mat-calendar-body-range-end",r._isRangeEnd(e.compareValue))("mat-calendar-body-in-range",r._isInRange(e.compareValue))("mat-calendar-body-comparison-bridge-start",r._isComparisonBridgeStart(e.compareValue,i,t))("mat-calendar-body-comparison-bridge-end",r._isComparisonBridgeEnd(e.compareValue,i,t))("mat-calendar-body-comparison-start",r._isComparisonStart(e.compareValue))("mat-calendar-body-comparison-end",r._isComparisonEnd(e.compareValue))("mat-calendar-body-in-comparison-range",r._isInComparisonRange(e.compareValue))("mat-calendar-body-preview-start",r._isPreviewStart(e.compareValue))("mat-calendar-body-preview-end",r._isPreviewEnd(e.compareValue))("mat-calendar-body-in-preview",r._isInPreview(e.compareValue)),de("tabIndex",r._isActiveCell(i,t)?0:-1),F("aria-label",e.ariaLabel)("aria-disabled",!e.enabled||null)("aria-pressed",r._isSelected(e.compareValue))("aria-current",r.todayValue===e.compareValue?"date":null)("aria-describedby",r._getDescribedby(e.compareValue)),l(),z("mat-calendar-body-selected",r._isSelected(e.compareValue))("mat-calendar-body-comparison-identical",r._isComparisonIdentical(e.compareValue))("mat-calendar-body-today",r.todayValue===e.compareValue),l(),te(" ",e.displayValue," ")}}function Ms(n,a){if(n&1&&(_e(0,"tr",1),E(1,ws,2,6,"td",4),Q(2,Ds,5,49,"td",5,zr),we()),n&2){let e=a.$implicit,t=a.$index,i=u();l(),S(t===0&&i._firstRowOffset?1:-1),l(),q(e)}}function ks(n,a){if(n&1&&(s(0,"th",2)(1,"span",6),m(2),c(),s(3,"span",3),m(4),c()()),n&2){let e=a.$implicit;l(2),A(e.long),l(2),A(e.narrow)}}var Es=["*"];function Ss(n,a){}function Is(n,a){if(n&1){let e=Y();s(0,"mat-month-view",4),Ii("activeDateChange",function(i){O(e);let r=u();return Si(r.activeDate,i)||(r.activeDate=i),P(i)}),x("_userSelection",function(i){O(e);let r=u();return P(r._dateSelected(i))})("dragStarted",function(i){O(e);let r=u();return P(r._dragStarted(i))})("dragEnded",function(i){O(e);let r=u();return P(r._dragEnded(i))}),c()}if(n&2){let e=u();Ei("activeDate",e.activeDate),C("selected",e.selected)("dateFilter",e.dateFilter)("maxDate",e.maxDate)("minDate",e.minDate)("dateClass",e.dateClass)("comparisonStart",e.comparisonStart)("comparisonEnd",e.comparisonEnd)("startDateAccessibleName",e.startDateAccessibleName)("endDateAccessibleName",e.endDateAccessibleName)("activeDrag",e._activeDrag)}}function Ts(n,a){if(n&1){let e=Y();s(0,"mat-year-view",5),Ii("activeDateChange",function(i){O(e);let r=u();return Si(r.activeDate,i)||(r.activeDate=i),P(i)}),x("monthSelected",function(i){O(e);let r=u();return P(r._monthSelectedInYearView(i))})("selectedChange",function(i){O(e);let r=u();return P(r._goToDateInView(i,"month"))}),c()}if(n&2){let e=u();Ei("activeDate",e.activeDate),C("selected",e.selected)("dateFilter",e.dateFilter)("maxDate",e.maxDate)("minDate",e.minDate)("dateClass",e.dateClass)}}function As(n,a){if(n&1){let e=Y();s(0,"mat-multi-year-view",6),Ii("activeDateChange",function(i){O(e);let r=u();return Si(r.activeDate,i)||(r.activeDate=i),P(i)}),x("yearSelected",function(i){O(e);let r=u();return P(r._yearSelectedInMultiYearView(i))})("selectedChange",function(i){O(e);let r=u();return P(r._goToDateInView(i,"year"))}),c()}if(n&2){let e=u();Ei("activeDate",e.activeDate),C("selected",e.selected)("dateFilter",e.dateFilter)("maxDate",e.maxDate)("minDate",e.minDate)("dateClass",e.dateClass)}}function Os(n,a){}var Ps=["button"],Fs=[[["","matDatepickerToggleIcon",""]]],Rs=["[matDatepickerToggleIcon]"];function Vs(n,a){n&1&&(oe(),s(0,"svg",2),H(1,"path",3),c())}var qt=(()=>{class n{changes=new j;calendarLabel="Calendar";openCalendarLabel="Open calendar";closeCalendarLabel="Close calendar";prevMonthLabel="Previous month";nextMonthLabel="Next month";prevYearLabel="Previous year";nextYearLabel="Next year";prevMultiYearLabel="Previous 24 years";nextMultiYearLabel="Next 24 years";switchToMonthViewLabel="Choose date";switchToMultiYearViewLabel="Choose month and year";startDateLabel="Start date";endDateLabel="End date";comparisonDateLabel="Comparison range";formatYearRange(e,t){return`${e} \u2013 ${t}`}formatYearRangeLabel(e,t){return`${e} to ${t}`}static \u0275fac=function(t){return new(t||n)};static \u0275prov=ke({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),Ls=0,ci=class{value;displayValue;ariaLabel;enabled;compareValue;rawValue;id=Ls++;cssClasses;constructor(a,e,t,i,r,o=a,p){this.value=a,this.displayValue=e,this.ariaLabel=t,this.enabled=i,this.compareValue=o,this.rawValue=p,this.cssClasses=r instanceof Set?Array.from(r):r}},Ns={passive:!1,capture:!0},Xi={passive:!0,capture:!0},Rr={passive:!0},Ut=(()=>{class n{_elementRef=d(U);_ngZone=d($e);_platform=d(gt);_intl=d(qt);_eventCleanups;_skipNextFocus=!1;_focusActiveCellAfterViewChecked=!1;label;rows;todayValue;startValue;endValue;labelMinRequiredCells;numCols=7;activeCell=0;ngAfterViewChecked(){this._focusActiveCellAfterViewChecked&&(this._focusActiveCell(),this._focusActiveCellAfterViewChecked=!1)}isRange=!1;cellAspectRatio=1;comparisonStart=null;comparisonEnd=null;previewStart=null;previewEnd=null;startDateAccessibleName=null;endDateAccessibleName=null;selectedValueChange=new R;previewChange=new R;activeDateChange=new R;dragStarted=new R;dragEnded=new R;_firstRowOffset;_cellPadding;_cellWidth;_startDateLabelId;_endDateLabelId;_comparisonStartDateLabelId;_comparisonEndDateLabelId;_didDragSinceMouseDown=!1;_injector=d(Se);comparisonDateAccessibleName=this._intl.comparisonDateLabel;_trackRow=e=>e;constructor(){let e=d(at),t=d(he);this._startDateLabelId=t.getId("mat-calendar-body-start-"),this._endDateLabelId=t.getId("mat-calendar-body-end-"),this._comparisonStartDateLabelId=t.getId("mat-calendar-body-comparison-start-"),this._comparisonEndDateLabelId=t.getId("mat-calendar-body-comparison-end-"),d(Te).load(Qe),this._ngZone.runOutsideAngular(()=>{let i=this._elementRef.nativeElement,r=[e.listen(i,"touchmove",this._touchmoveHandler,Ns),e.listen(i,"mouseenter",this._enterHandler,Xi),e.listen(i,"focus",this._enterHandler,Xi),e.listen(i,"mouseleave",this._leaveHandler,Xi),e.listen(i,"blur",this._leaveHandler,Xi),e.listen(i,"mousedown",this._mousedownHandler,Rr),e.listen(i,"touchstart",this._mousedownHandler,Rr)];this._platform.isBrowser&&r.push(e.listen("window","mouseup",this._mouseupHandler),e.listen("window","touchend",this._touchendHandler)),this._eventCleanups=r})}_cellClicked(e,t){this._didDragSinceMouseDown||e.enabled&&this.selectedValueChange.emit({value:e.value,event:t})}_emitActiveDateChange(e,t){e.enabled&&this.activeDateChange.emit({value:e.value,event:t})}_isSelected(e){return this.startValue===e||this.endValue===e}ngOnChanges(e){let t=e.numCols,{rows:i,numCols:r}=this;(e.rows||t)&&(this._firstRowOffset=i&&i.length&&i[0].length?r-i[0].length:0),(e.cellAspectRatio||t||!this._cellPadding)&&(this._cellPadding=`${50*this.cellAspectRatio/r}%`),(t||!this._cellWidth)&&(this._cellWidth=`${100/r}%`)}ngOnDestroy(){this._eventCleanups.forEach(e=>e())}_isActiveCell(e,t){let i=e*this.numCols+t;return e&&(i-=this._firstRowOffset),i==this.activeCell}_focusActiveCell(e=!0){Fe(()=>{setTimeout(()=>{let t=this._elementRef.nativeElement.querySelector(".mat-calendar-body-active");t&&(e||(this._skipNextFocus=!0),t.focus())})},{injector:this._injector})}_scheduleFocusActiveCellAfterViewChecked(){this._focusActiveCellAfterViewChecked=!0}_isRangeStart(e){return Fn(e,this.startValue,this.endValue)}_isRangeEnd(e){return Rn(e,this.startValue,this.endValue)}_isInRange(e){return Vn(e,this.startValue,this.endValue,this.isRange)}_isComparisonStart(e){return Fn(e,this.comparisonStart,this.comparisonEnd)}_isComparisonBridgeStart(e,t,i){if(!this._isComparisonStart(e)||this._isRangeStart(e)||!this._isInRange(e))return!1;let r=this.rows[t][i-1];if(!r){let o=this.rows[t-1];r=o&&o[o.length-1]}return r&&!this._isRangeEnd(r.compareValue)}_isComparisonBridgeEnd(e,t,i){if(!this._isComparisonEnd(e)||this._isRangeEnd(e)||!this._isInRange(e))return!1;let r=this.rows[t][i+1];if(!r){let o=this.rows[t+1];r=o&&o[0]}return r&&!this._isRangeStart(r.compareValue)}_isComparisonEnd(e){return Rn(e,this.comparisonStart,this.comparisonEnd)}_isInComparisonRange(e){return Vn(e,this.comparisonStart,this.comparisonEnd,this.isRange)}_isComparisonIdentical(e){return this.comparisonStart===this.comparisonEnd&&e===this.comparisonStart}_isPreviewStart(e){return Fn(e,this.previewStart,this.previewEnd)}_isPreviewEnd(e){return Rn(e,this.previewStart,this.previewEnd)}_isInPreview(e){return Vn(e,this.previewStart,this.previewEnd,this.isRange)}_getDescribedby(e){if(!this.isRange)return null;if(this.startValue===e&&this.endValue===e)return`${this._startDateLabelId} ${this._endDateLabelId}`;if(this.startValue===e)return this._startDateLabelId;if(this.endValue===e)return this._endDateLabelId;if(this.comparisonStart!==null&&this.comparisonEnd!==null){if(e===this.comparisonStart&&e===this.comparisonEnd)return`${this._comparisonStartDateLabelId} ${this._comparisonEndDateLabelId}`;if(e===this.comparisonStart)return this._comparisonStartDateLabelId;if(e===this.comparisonEnd)return this._comparisonEndDateLabelId}return null}_enterHandler=e=>{if(this._skipNextFocus&&e.type==="focus"){this._skipNextFocus=!1;return}if(e.target&&this.isRange){let t=this._getCellFromElement(e.target);t&&this._ngZone.run(()=>this.previewChange.emit({value:t.enabled?t:null,event:e}))}};_touchmoveHandler=e=>{if(!this.isRange)return;let t=Vr(e),i=t?this._getCellFromElement(t):null;t!==e.target&&(this._didDragSinceMouseDown=!0),Pn(e.target)&&e.preventDefault(),this._ngZone.run(()=>this.previewChange.emit({value:i?.enabled?i:null,event:e}))};_leaveHandler=e=>{this.previewEnd!==null&&this.isRange&&(e.type!=="blur"&&(this._didDragSinceMouseDown=!0),e.target&&this._getCellFromElement(e.target)&&!(e.relatedTarget&&this._getCellFromElement(e.relatedTarget))&&this._ngZone.run(()=>this.previewChange.emit({value:null,event:e})))};_mousedownHandler=e=>{if(!this.isRange)return;this._didDragSinceMouseDown=!1;let t=e.target&&this._getCellFromElement(e.target);!t||!this._isInRange(t.compareValue)||this._ngZone.run(()=>{this.dragStarted.emit({value:t.rawValue,event:e})})};_mouseupHandler=e=>{if(!this.isRange)return;let t=Pn(e.target);if(!t){this._ngZone.run(()=>{this.dragEnded.emit({value:null,event:e})});return}t.closest(".mat-calendar-body")===this._elementRef.nativeElement&&this._ngZone.run(()=>{let i=this._getCellFromElement(t);this.dragEnded.emit({value:i?.rawValue??null,event:e})})};_touchendHandler=e=>{let t=Vr(e);t&&this._mouseupHandler({target:t})};_getCellFromElement(e){let t=Pn(e);if(t){let i=t.getAttribute("data-mat-row"),r=t.getAttribute("data-mat-col");if(i&&r)return this.rows[parseInt(i)]?.[parseInt(r)]||null}return null}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=N({type:n,selectors:[["","mat-calendar-body",""]],hostAttrs:[1,"mat-calendar-body"],inputs:{label:"label",rows:"rows",todayValue:"todayValue",startValue:"startValue",endValue:"endValue",labelMinRequiredCells:"labelMinRequiredCells",numCols:"numCols",activeCell:"activeCell",isRange:"isRange",cellAspectRatio:"cellAspectRatio",comparisonStart:"comparisonStart",comparisonEnd:"comparisonEnd",previewStart:"previewStart",previewEnd:"previewEnd",startDateAccessibleName:"startDateAccessibleName",endDateAccessibleName:"endDateAccessibleName"},outputs:{selectedValueChange:"selectedValueChange",previewChange:"previewChange",activeDateChange:"activeDateChange",dragStarted:"dragStarted",dragEnded:"dragEnded"},exportAs:["matCalendarBody"],features:[Ce],attrs:ys,decls:11,vars:11,consts:[["aria-hidden","true"],["role","row"],[1,"mat-calendar-body-hidden-label",3,"id"],[1,"mat-calendar-body-label"],[1,"mat-calendar-body-label",3,"paddingTop","paddingBottom"],["role","gridcell",1,"mat-calendar-body-cell-container",3,"width","paddingTop","paddingBottom"],["role","gridcell",1,"mat-calendar-body-cell-container"],["type","button",1,"mat-calendar-body-cell",3,"click","focus","tabindex"],[1,"mat-calendar-body-cell-content","mat-focus-indicator"],["aria-hidden","true",1,"mat-calendar-body-cell-preview"]],template:function(t,i){t&1&&(E(0,Cs,3,6,"tr",0),Q(1,Ms,4,1,"tr",1,xs,!0),_e(3,"span",2),m(4),we(),_e(5,"span",2),m(6),we(),_e(7,"span",2),m(8),we(),_e(9,"span",2),m(10),we()),t&2&&(S(i._firstRowOffset<i.labelMinRequiredCells?0:-1),l(),q(i.rows),l(2),de("id",i._startDateLabelId),l(),te(" ",i.startDateAccessibleName,`
`),l(),de("id",i._endDateLabelId),l(),te(" ",i.endDateAccessibleName,`
`),l(),de("id",i._comparisonStartDateLabelId),l(),ei(" ",i.comparisonDateAccessibleName," ",i.startDateAccessibleName,`
`),l(),de("id",i._comparisonEndDateLabelId),l(),ei(" ",i.comparisonDateAccessibleName," ",i.endDateAccessibleName,`
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
`],encapsulation:2,changeDetection:0})}return n})();function On(n){return n?.nodeName==="TD"}function Pn(n){let a;return On(n)?a=n:On(n.parentNode)?a=n.parentNode:On(n.parentNode?.parentNode)&&(a=n.parentNode.parentNode),a?.getAttribute("data-mat-row")!=null?a:null}function Fn(n,a,e){return e!==null&&a!==e&&n<e&&n===a}function Rn(n,a,e){return a!==null&&a!==e&&n>=a&&n===e}function Vn(n,a,e,t){return t&&a!==null&&e!==null&&a!==e&&n>=a&&n<=e}function Vr(n){let a=n.changedTouches[0];return document.elementFromPoint(a.clientX,a.clientY)}var Ge=class{start;end;_disableStructuralEquivalency;constructor(a,e){this.start=a,this.end=e}},di=(()=>{class n{selection;_adapter;_selectionChanged=new j;selectionChanged=this._selectionChanged;constructor(e,t){this.selection=e,this._adapter=t,this.selection=e}updateSelection(e,t){let i=this.selection;this.selection=e,this._selectionChanged.next({selection:e,source:t,oldValue:i})}ngOnDestroy(){this._selectionChanged.complete()}_isValidDateInstance(e){return this._adapter.isDateInstance(e)&&this._adapter.isValid(e)}static \u0275fac=function(t){Ea()};static \u0275prov=ke({token:n,factory:n.\u0275fac})}return n})(),Bs=(()=>{class n extends di{constructor(e){super(null,e)}add(e){super.updateSelection(e,this)}isValid(){return this.selection!=null&&this._isValidDateInstance(this.selection)}isComplete(){return this.selection!=null}clone(){let e=new n(this._adapter);return e.updateSelection(this.selection,this),e}static \u0275fac=function(t){return new(t||n)(wa(ve))};static \u0275prov=ke({token:n,factory:n.\u0275fac})}return n})();var Gr={provide:di,useFactory:()=>d(di,{optional:!0,skipSelf:!0})||new Bs(d(ve))};var Yr=new W("MAT_DATE_RANGE_SELECTION_STRATEGY");var Ln=7,Hs=0,Lr=(()=>{class n{_changeDetectorRef=d(J);_dateFormats=d(wt,{optional:!0});_dateAdapter=d(ve,{optional:!0});_dir=d(Re,{optional:!0});_rangeStrategy=d(Yr,{optional:!0});_rerenderSubscription=Be.EMPTY;_selectionKeyPressed=!1;get activeDate(){return this._activeDate}set activeDate(e){let t=this._activeDate,i=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))||this._dateAdapter.today();this._activeDate=this._dateAdapter.clampDate(i,this.minDate,this.maxDate),this._hasSameMonthAndYear(t,this._activeDate)||this._init()}_activeDate;get selected(){return this._selected}set selected(e){e instanceof Ge?this._selected=e:this._selected=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e)),this._setRanges(this._selected)}_selected=null;get minDate(){return this._minDate}set minDate(e){this._minDate=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_minDate=null;get maxDate(){return this._maxDate}set maxDate(e){this._maxDate=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_maxDate=null;dateFilter;dateClass;comparisonStart=null;comparisonEnd=null;startDateAccessibleName=null;endDateAccessibleName=null;activeDrag=null;selectedChange=new R;_userSelection=new R;dragStarted=new R;dragEnded=new R;activeDateChange=new R;_matCalendarBody;_monthLabel=D("");_weeks=D([]);_firstWeekOffset=D(0);_rangeStart=D(null);_rangeEnd=D(null);_comparisonRangeStart=D(null);_comparisonRangeEnd=D(null);_previewStart=D(null);_previewEnd=D(null);_isRange=D(!1);_todayDate=D(null);_weekdays=D([]);constructor(){d(Te).load(ut),this._activeDate=this._dateAdapter.today()}ngAfterContentInit(){this._rerenderSubscription=this._dateAdapter.localeChanges.pipe(xe(null)).subscribe(()=>this._init())}ngOnChanges(e){let t=e.comparisonStart||e.comparisonEnd;t&&!t.firstChange&&this._setRanges(this.selected),e.activeDrag&&!this.activeDrag&&this._clearPreview()}ngOnDestroy(){this._rerenderSubscription.unsubscribe()}_dateSelected(e){let t=e.value,i=this._getDateFromDayOfMonth(t),r,o;this._selected instanceof Ge?(r=this._getDateInCurrentMonth(this._selected.start),o=this._getDateInCurrentMonth(this._selected.end)):r=o=this._getDateInCurrentMonth(this._selected),(r!==t||o!==t)&&this.selectedChange.emit(i),this._userSelection.emit({value:i,event:e.event}),this._clearPreview(),this._changeDetectorRef.markForCheck()}_updateActiveDate(e){let t=e.value,i=this._activeDate;this.activeDate=this._getDateFromDayOfMonth(t),this._dateAdapter.compareDate(i,this.activeDate)&&this.activeDateChange.emit(this._activeDate)}_handleCalendarBodyKeydown(e){let t=this._activeDate,i=this._isRtl();switch(e.keyCode){case 37:this.activeDate=this._dateAdapter.addCalendarDays(this._activeDate,i?1:-1);break;case 39:this.activeDate=this._dateAdapter.addCalendarDays(this._activeDate,i?-1:1);break;case 38:this.activeDate=this._dateAdapter.addCalendarDays(this._activeDate,-7);break;case 40:this.activeDate=this._dateAdapter.addCalendarDays(this._activeDate,7);break;case 36:this.activeDate=this._dateAdapter.addCalendarDays(this._activeDate,1-this._dateAdapter.getDate(this._activeDate));break;case 35:this.activeDate=this._dateAdapter.addCalendarDays(this._activeDate,this._dateAdapter.getNumDaysInMonth(this._activeDate)-this._dateAdapter.getDate(this._activeDate));break;case 33:this.activeDate=e.altKey?this._dateAdapter.addCalendarYears(this._activeDate,-1):this._dateAdapter.addCalendarMonths(this._activeDate,-1);break;case 34:this.activeDate=e.altKey?this._dateAdapter.addCalendarYears(this._activeDate,1):this._dateAdapter.addCalendarMonths(this._activeDate,1);break;case 13:case 32:this._selectionKeyPressed=!0,this._canSelect(this._activeDate)&&e.preventDefault();return;case 27:this._previewEnd()!=null&&!me(e)&&(this._clearPreview(),this.activeDrag?this.dragEnded.emit({value:null,event:e}):(this.selectedChange.emit(null),this._userSelection.emit({value:null,event:e})),e.preventDefault(),e.stopPropagation());return;default:return}this._dateAdapter.compareDate(t,this.activeDate)&&(this.activeDateChange.emit(this.activeDate),this._focusActiveCellAfterViewChecked()),e.preventDefault()}_handleCalendarBodyKeyup(e){(e.keyCode===32||e.keyCode===13)&&(this._selectionKeyPressed&&this._canSelect(this._activeDate)&&this._dateSelected({value:this._dateAdapter.getDate(this._activeDate),event:e}),this._selectionKeyPressed=!1)}_init(){this._setRanges(this.selected),this._todayDate.set(this._getCellCompareValue(this._dateAdapter.today())),this._monthLabel.set(this._dateFormats.display.monthLabel?this._dateAdapter.format(this.activeDate,this._dateFormats.display.monthLabel):this._dateAdapter.getMonthNames("short")[this._dateAdapter.getMonth(this.activeDate)].toLocaleUpperCase());let e=this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate),this._dateAdapter.getMonth(this.activeDate),1);this._firstWeekOffset.set((Ln+this._dateAdapter.getDayOfWeek(e)-this._dateAdapter.getFirstDayOfWeek())%Ln),this._initWeekdays(),this._createWeekCells(),this._changeDetectorRef.markForCheck()}_focusActiveCell(e){this._matCalendarBody._focusActiveCell(e)}_focusActiveCellAfterViewChecked(){this._matCalendarBody._scheduleFocusActiveCellAfterViewChecked()}_previewChanged({event:e,value:t}){if(this._rangeStrategy){let i=t?t.rawValue:null,r=this._rangeStrategy.createPreview(i,this.selected,e);if(this._previewStart.set(this._getCellCompareValue(r.start)),this._previewEnd.set(this._getCellCompareValue(r.end)),this.activeDrag&&i){let o=this._rangeStrategy.createDrag?.(this.activeDrag.value,this.selected,i,e);o&&(this._previewStart.set(this._getCellCompareValue(o.start)),this._previewEnd.set(this._getCellCompareValue(o.end)))}}}_dragEnded(e){if(this.activeDrag)if(e.value){let t=this._rangeStrategy?.createDrag?.(this.activeDrag.value,this.selected,e.value,e.event);this.dragEnded.emit({value:t??null,event:e.event})}else this.dragEnded.emit({value:null,event:e.event})}_getDateFromDayOfMonth(e){return this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate),this._dateAdapter.getMonth(this.activeDate),e)}_initWeekdays(){let e=this._dateAdapter.getFirstDayOfWeek(),t=this._dateAdapter.getDayOfWeekNames("narrow"),r=this._dateAdapter.getDayOfWeekNames("long").map((o,p)=>({long:o,narrow:t[p],id:Hs++}));this._weekdays.set(r.slice(e).concat(r.slice(0,e)))}_createWeekCells(){let e=this._dateAdapter.getNumDaysInMonth(this.activeDate),t=this._dateAdapter.getDateNames(),i=[[]];for(let r=0,o=this._firstWeekOffset();r<e;r++,o++){o==Ln&&(i.push([]),o=0);let p=this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate),this._dateAdapter.getMonth(this.activeDate),r+1),g=this._shouldEnableDate(p),h=this._dateAdapter.format(p,this._dateFormats.display.dateA11yLabel),_=this.dateClass?this.dateClass(p,"month"):void 0;i[i.length-1].push(new ci(r+1,t[r],h,g,_,this._getCellCompareValue(p),p))}this._weeks.set(i)}_shouldEnableDate(e){return!!e&&(!this.minDate||this._dateAdapter.compareDate(e,this.minDate)>=0)&&(!this.maxDate||this._dateAdapter.compareDate(e,this.maxDate)<=0)&&(!this.dateFilter||this.dateFilter(e))}_getDateInCurrentMonth(e){return e&&this._hasSameMonthAndYear(e,this.activeDate)?this._dateAdapter.getDate(e):null}_hasSameMonthAndYear(e,t){return!!(e&&t&&this._dateAdapter.getMonth(e)==this._dateAdapter.getMonth(t)&&this._dateAdapter.getYear(e)==this._dateAdapter.getYear(t))}_getCellCompareValue(e){if(e){let t=this._dateAdapter.getYear(e),i=this._dateAdapter.getMonth(e),r=this._dateAdapter.getDate(e);return new Date(t,i,r).getTime()}return null}_isRtl(){return this._dir&&this._dir.value==="rtl"}_setRanges(e){e instanceof Ge?(this._rangeStart.set(this._getCellCompareValue(e.start)),this._rangeEnd.set(this._getCellCompareValue(e.end)),this._isRange.set(!0)):(this._rangeStart.set(this._getCellCompareValue(e)),this._rangeEnd.set(this._rangeStart()),this._isRange.set(!1)),this._comparisonRangeStart.set(this._getCellCompareValue(this.comparisonStart)),this._comparisonRangeEnd.set(this._getCellCompareValue(this.comparisonEnd))}_canSelect(e){return!this.dateFilter||this.dateFilter(e)}_clearPreview(){this._previewStart.set(null),this._previewEnd.set(null)}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=N({type:n,selectors:[["mat-month-view"]],viewQuery:function(t,i){if(t&1&&ie(Ut,5),t&2){let r;V(r=L())&&(i._matCalendarBody=r.first)}},inputs:{activeDate:"activeDate",selected:"selected",minDate:"minDate",maxDate:"maxDate",dateFilter:"dateFilter",dateClass:"dateClass",comparisonStart:"comparisonStart",comparisonEnd:"comparisonEnd",startDateAccessibleName:"startDateAccessibleName",endDateAccessibleName:"endDateAccessibleName",activeDrag:"activeDrag"},outputs:{selectedChange:"selectedChange",_userSelection:"_userSelection",dragStarted:"dragStarted",dragEnded:"dragEnded",activeDateChange:"activeDateChange"},exportAs:["matMonthView"],features:[Ce],decls:8,vars:14,consts:[["role","grid",1,"mat-calendar-table"],[1,"mat-calendar-table-header"],["scope","col"],["aria-hidden","true"],["colspan","7",1,"mat-calendar-table-header-divider"],["mat-calendar-body","",3,"selectedValueChange","activeDateChange","previewChange","dragStarted","dragEnded","keyup","keydown","label","rows","todayValue","startValue","endValue","comparisonStart","comparisonEnd","previewStart","previewEnd","isRange","labelMinRequiredCells","activeCell","startDateAccessibleName","endDateAccessibleName"],[1,"cdk-visually-hidden"]],template:function(t,i){t&1&&(s(0,"table",0)(1,"thead",1)(2,"tr"),Q(3,ks,5,2,"th",2,zr),c(),s(5,"tr",3),H(6,"th",4),c()(),s(7,"tbody",5),x("selectedValueChange",function(o){return i._dateSelected(o)})("activeDateChange",function(o){return i._updateActiveDate(o)})("previewChange",function(o){return i._previewChanged(o)})("dragStarted",function(o){return i.dragStarted.emit(o)})("dragEnded",function(o){return i._dragEnded(o)})("keyup",function(o){return i._handleCalendarBodyKeyup(o)})("keydown",function(o){return i._handleCalendarBodyKeydown(o)}),c()()),t&2&&(l(3),q(i._weekdays()),l(4),C("label",i._monthLabel())("rows",i._weeks())("todayValue",i._todayDate())("startValue",i._rangeStart())("endValue",i._rangeEnd())("comparisonStart",i._comparisonRangeStart())("comparisonEnd",i._comparisonRangeEnd())("previewStart",i._previewStart())("previewEnd",i._previewEnd())("isRange",i._isRange())("labelMinRequiredCells",3)("activeCell",i._dateAdapter.getDate(i.activeDate)-1)("startDateAccessibleName",i.startDateAccessibleName)("endDateAccessibleName",i.endDateAccessibleName))},dependencies:[Ut],encapsulation:2,changeDetection:0})}return n})(),Ne=24,Nn=4,Nr=(()=>{class n{_changeDetectorRef=d(J);_dateAdapter=d(ve,{optional:!0});_dir=d(Re,{optional:!0});_rerenderSubscription=Be.EMPTY;_selectionKeyPressed=!1;get activeDate(){return this._activeDate}set activeDate(e){let t=this._activeDate,i=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))||this._dateAdapter.today();this._activeDate=this._dateAdapter.clampDate(i,this.minDate,this.maxDate),jr(this._dateAdapter,t,this._activeDate,this.minDate,this.maxDate)||this._init()}_activeDate;get selected(){return this._selected}set selected(e){e instanceof Ge?this._selected=e:this._selected=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e)),this._setSelectedYear(e)}_selected=null;get minDate(){return this._minDate}set minDate(e){this._minDate=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_minDate=null;get maxDate(){return this._maxDate}set maxDate(e){this._maxDate=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_maxDate=null;dateFilter;dateClass;selectedChange=new R;yearSelected=new R;activeDateChange=new R;_matCalendarBody;_years=D([]);_todayYear=D(0);_selectedYear=D(null);constructor(){this._dateAdapter,this._activeDate=this._dateAdapter.today()}ngAfterContentInit(){this._rerenderSubscription=this._dateAdapter.localeChanges.pipe(xe(null)).subscribe(()=>this._init())}ngOnDestroy(){this._rerenderSubscription.unsubscribe()}_init(){this._todayYear.set(this._dateAdapter.getYear(this._dateAdapter.today()));let t=this._dateAdapter.getYear(this._activeDate)-li(this._dateAdapter,this.activeDate,this.minDate,this.maxDate),i=[];for(let r=0,o=[];r<Ne;r++)o.push(t+r),o.length==Nn&&(i.push(o.map(p=>this._createCellForYear(p))),o=[]);this._years.set(i),this._changeDetectorRef.markForCheck()}_yearSelected(e){let t=e.value,i=this._dateAdapter.createDate(t,0,1),r=this._getDateFromYear(t);this.yearSelected.emit(i),this.selectedChange.emit(r)}_updateActiveDate(e){let t=e.value,i=this._activeDate;this.activeDate=this._getDateFromYear(t),this._dateAdapter.compareDate(i,this.activeDate)&&this.activeDateChange.emit(this.activeDate)}_handleCalendarBodyKeydown(e){let t=this._activeDate,i=this._isRtl();switch(e.keyCode){case 37:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,i?1:-1);break;case 39:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,i?-1:1);break;case 38:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,-Nn);break;case 40:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,Nn);break;case 36:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,-li(this._dateAdapter,this.activeDate,this.minDate,this.maxDate));break;case 35:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,Ne-li(this._dateAdapter,this.activeDate,this.minDate,this.maxDate)-1);break;case 33:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,e.altKey?-Ne*10:-Ne);break;case 34:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,e.altKey?Ne*10:Ne);break;case 13:case 32:this._selectionKeyPressed=!0;break;default:return}this._dateAdapter.compareDate(t,this.activeDate)&&this.activeDateChange.emit(this.activeDate),this._focusActiveCellAfterViewChecked(),e.preventDefault()}_handleCalendarBodyKeyup(e){(e.keyCode===32||e.keyCode===13)&&(this._selectionKeyPressed&&this._yearSelected({value:this._dateAdapter.getYear(this._activeDate),event:e}),this._selectionKeyPressed=!1)}_getActiveCell(){return li(this._dateAdapter,this.activeDate,this.minDate,this.maxDate)}_focusActiveCell(){this._matCalendarBody._focusActiveCell()}_focusActiveCellAfterViewChecked(){this._matCalendarBody._scheduleFocusActiveCellAfterViewChecked()}_getDateFromYear(e){let t=this._dateAdapter.getMonth(this.activeDate),i=this._dateAdapter.getNumDaysInMonth(this._dateAdapter.createDate(e,t,1));return this._dateAdapter.createDate(e,t,Math.min(this._dateAdapter.getDate(this.activeDate),i))}_createCellForYear(e){let t=this._dateAdapter.createDate(e,0,1),i=this._dateAdapter.getYearName(t),r=this.dateClass?this.dateClass(t,"multi-year"):void 0;return new ci(e,i,i,this._shouldEnableYear(e),r)}_shouldEnableYear(e){if(e==null||this.maxDate&&e>this._dateAdapter.getYear(this.maxDate)||this.minDate&&e<this._dateAdapter.getYear(this.minDate))return!1;if(!this.dateFilter)return!0;let t=this._dateAdapter.createDate(e,0,1);for(let i=t;this._dateAdapter.getYear(i)==e;i=this._dateAdapter.addCalendarDays(i,1))if(this.dateFilter(i))return!0;return!1}_isRtl(){return this._dir&&this._dir.value==="rtl"}_setSelectedYear(e){if(this._selectedYear.set(null),e instanceof Ge){let t=e.start||e.end;t&&this._selectedYear.set(this._dateAdapter.getYear(t))}else e&&this._selectedYear.set(this._dateAdapter.getYear(e))}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=N({type:n,selectors:[["mat-multi-year-view"]],viewQuery:function(t,i){if(t&1&&ie(Ut,5),t&2){let r;V(r=L())&&(i._matCalendarBody=r.first)}},inputs:{activeDate:"activeDate",selected:"selected",minDate:"minDate",maxDate:"maxDate",dateFilter:"dateFilter",dateClass:"dateClass"},outputs:{selectedChange:"selectedChange",yearSelected:"yearSelected",activeDateChange:"activeDateChange"},exportAs:["matMultiYearView"],decls:5,vars:7,consts:[["role","grid",1,"mat-calendar-table"],["aria-hidden","true",1,"mat-calendar-table-header"],["colspan","4",1,"mat-calendar-table-header-divider"],["mat-calendar-body","",3,"selectedValueChange","activeDateChange","keyup","keydown","rows","todayValue","startValue","endValue","numCols","cellAspectRatio","activeCell"]],template:function(t,i){t&1&&(s(0,"table",0)(1,"thead",1)(2,"tr"),H(3,"th",2),c()(),s(4,"tbody",3),x("selectedValueChange",function(o){return i._yearSelected(o)})("activeDateChange",function(o){return i._updateActiveDate(o)})("keyup",function(o){return i._handleCalendarBodyKeyup(o)})("keydown",function(o){return i._handleCalendarBodyKeydown(o)}),c()()),t&2&&(l(4),C("rows",i._years())("todayValue",i._todayYear())("startValue",i._selectedYear())("endValue",i._selectedYear())("numCols",4)("cellAspectRatio",4/7)("activeCell",i._getActiveCell()))},dependencies:[Ut],encapsulation:2,changeDetection:0})}return n})();function jr(n,a,e,t,i){let r=n.getYear(a),o=n.getYear(e),p=Ur(n,t,i);return Math.floor((r-p)/Ne)===Math.floor((o-p)/Ne)}function li(n,a,e,t){let i=n.getYear(a);return zs(i-Ur(n,e,t),Ne)}function Ur(n,a,e){let t=0;return e?t=n.getYear(e)-Ne+1:a&&(t=n.getYear(a)),t}function zs(n,a){return(n%a+a)%a}var Br=(()=>{class n{_changeDetectorRef=d(J);_dateFormats=d(wt,{optional:!0});_dateAdapter=d(ve,{optional:!0});_dir=d(Re,{optional:!0});_rerenderSubscription=Be.EMPTY;_selectionKeyPressed=!1;get activeDate(){return this._activeDate}set activeDate(e){let t=this._activeDate,i=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))||this._dateAdapter.today();this._activeDate=this._dateAdapter.clampDate(i,this.minDate,this.maxDate),this._dateAdapter.getYear(t)!==this._dateAdapter.getYear(this._activeDate)&&this._init()}_activeDate;get selected(){return this._selected}set selected(e){e instanceof Ge?this._selected=e:this._selected=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e)),this._setSelectedMonth(e)}_selected=null;get minDate(){return this._minDate}set minDate(e){this._minDate=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_minDate=null;get maxDate(){return this._maxDate}set maxDate(e){this._maxDate=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_maxDate=null;dateFilter;dateClass;selectedChange=new R;monthSelected=new R;activeDateChange=new R;_matCalendarBody;_months=D([]);_yearLabel=D("");_todayMonth=D(null);_selectedMonth=D(null);constructor(){this._activeDate=this._dateAdapter.today()}ngAfterContentInit(){this._rerenderSubscription=this._dateAdapter.localeChanges.pipe(xe(null)).subscribe(()=>this._init())}ngOnDestroy(){this._rerenderSubscription.unsubscribe()}_monthSelected(e){let t=e.value,i=this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate),t,1);this.monthSelected.emit(i);let r=this._getDateFromMonth(t);this.selectedChange.emit(r)}_updateActiveDate(e){let t=e.value,i=this._activeDate;this.activeDate=this._getDateFromMonth(t),this._dateAdapter.compareDate(i,this.activeDate)&&this.activeDateChange.emit(this.activeDate)}_handleCalendarBodyKeydown(e){let t=this._activeDate,i=this._isRtl();switch(e.keyCode){case 37:this.activeDate=this._dateAdapter.addCalendarMonths(this._activeDate,i?1:-1);break;case 39:this.activeDate=this._dateAdapter.addCalendarMonths(this._activeDate,i?-1:1);break;case 38:this.activeDate=this._dateAdapter.addCalendarMonths(this._activeDate,-4);break;case 40:this.activeDate=this._dateAdapter.addCalendarMonths(this._activeDate,4);break;case 36:this.activeDate=this._dateAdapter.addCalendarMonths(this._activeDate,-this._dateAdapter.getMonth(this._activeDate));break;case 35:this.activeDate=this._dateAdapter.addCalendarMonths(this._activeDate,11-this._dateAdapter.getMonth(this._activeDate));break;case 33:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,e.altKey?-10:-1);break;case 34:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,e.altKey?10:1);break;case 13:case 32:this._selectionKeyPressed=!0;break;default:return}this._dateAdapter.compareDate(t,this.activeDate)&&(this.activeDateChange.emit(this.activeDate),this._focusActiveCellAfterViewChecked()),e.preventDefault()}_handleCalendarBodyKeyup(e){(e.keyCode===32||e.keyCode===13)&&(this._selectionKeyPressed&&this._monthSelected({value:this._dateAdapter.getMonth(this._activeDate),event:e}),this._selectionKeyPressed=!1)}_init(){this._setSelectedMonth(this.selected),this._todayMonth.set(this._getMonthInCurrentYear(this._dateAdapter.today())),this._yearLabel.set(this._dateAdapter.getYearName(this.activeDate));let e=this._dateAdapter.getMonthNames("short");this._months.set([[0,1,2,3],[4,5,6,7],[8,9,10,11]].map(t=>t.map(i=>this._createCellForMonth(i,e[i])))),this._changeDetectorRef.markForCheck()}_focusActiveCell(){this._matCalendarBody._focusActiveCell()}_focusActiveCellAfterViewChecked(){this._matCalendarBody._scheduleFocusActiveCellAfterViewChecked()}_getMonthInCurrentYear(e){return e&&this._dateAdapter.getYear(e)==this._dateAdapter.getYear(this.activeDate)?this._dateAdapter.getMonth(e):null}_getDateFromMonth(e){let t=this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate),e,1),i=this._dateAdapter.getNumDaysInMonth(t);return this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate),e,Math.min(this._dateAdapter.getDate(this.activeDate),i))}_createCellForMonth(e,t){let i=this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate),e,1),r=this._dateAdapter.format(i,this._dateFormats.display.monthYearA11yLabel),o=this.dateClass?this.dateClass(i,"year"):void 0;return new ci(e,t.toLocaleUpperCase(),r,this._shouldEnableMonth(e),o)}_shouldEnableMonth(e){let t=this._dateAdapter.getYear(this.activeDate);if(e==null||this._isYearAndMonthAfterMaxDate(t,e)||this._isYearAndMonthBeforeMinDate(t,e))return!1;if(!this.dateFilter)return!0;let i=this._dateAdapter.createDate(t,e,1);for(let r=i;this._dateAdapter.getMonth(r)==e;r=this._dateAdapter.addCalendarDays(r,1))if(this.dateFilter(r))return!0;return!1}_isYearAndMonthAfterMaxDate(e,t){if(this.maxDate){let i=this._dateAdapter.getYear(this.maxDate),r=this._dateAdapter.getMonth(this.maxDate);return e>i||e===i&&t>r}return!1}_isYearAndMonthBeforeMinDate(e,t){if(this.minDate){let i=this._dateAdapter.getYear(this.minDate),r=this._dateAdapter.getMonth(this.minDate);return e<i||e===i&&t<r}return!1}_isRtl(){return this._dir&&this._dir.value==="rtl"}_setSelectedMonth(e){e instanceof Ge?this._selectedMonth.set(this._getMonthInCurrentYear(e.start)||this._getMonthInCurrentYear(e.end)):this._selectedMonth.set(this._getMonthInCurrentYear(e))}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=N({type:n,selectors:[["mat-year-view"]],viewQuery:function(t,i){if(t&1&&ie(Ut,5),t&2){let r;V(r=L())&&(i._matCalendarBody=r.first)}},inputs:{activeDate:"activeDate",selected:"selected",minDate:"minDate",maxDate:"maxDate",dateFilter:"dateFilter",dateClass:"dateClass"},outputs:{selectedChange:"selectedChange",monthSelected:"monthSelected",activeDateChange:"activeDateChange"},exportAs:["matYearView"],decls:5,vars:9,consts:[["role","grid",1,"mat-calendar-table"],["aria-hidden","true",1,"mat-calendar-table-header"],["colspan","4",1,"mat-calendar-table-header-divider"],["mat-calendar-body","",3,"selectedValueChange","activeDateChange","keyup","keydown","label","rows","todayValue","startValue","endValue","labelMinRequiredCells","numCols","cellAspectRatio","activeCell"]],template:function(t,i){t&1&&(s(0,"table",0)(1,"thead",1)(2,"tr"),H(3,"th",2),c()(),s(4,"tbody",3),x("selectedValueChange",function(o){return i._monthSelected(o)})("activeDateChange",function(o){return i._updateActiveDate(o)})("keyup",function(o){return i._handleCalendarBodyKeyup(o)})("keydown",function(o){return i._handleCalendarBodyKeydown(o)}),c()()),t&2&&(l(4),C("label",i._yearLabel())("rows",i._months())("todayValue",i._todayMonth())("startValue",i._selectedMonth())("endValue",i._selectedMonth())("labelMinRequiredCells",2)("numCols",4)("cellAspectRatio",4/7)("activeCell",i._dateAdapter.getMonth(i.activeDate)))},dependencies:[Ut],encapsulation:2,changeDetection:0})}return n})(),$r=(()=>{class n{_intl=d(qt);calendar=d(Bn);_dateAdapter=d(ve,{optional:!0});_dateFormats=d(wt,{optional:!0});_periodButtonText;_periodButtonDescription;_periodButtonLabel;_prevButtonLabel;_nextButtonLabel;constructor(){d(Te).load(ut);let e=d(J);this._updateLabels(),this.calendar.stateChanges.subscribe(()=>{this._updateLabels(),e.markForCheck()})}get periodButtonText(){return this._periodButtonText}get periodButtonDescription(){return this._periodButtonDescription}get periodButtonLabel(){return this._periodButtonLabel}get prevButtonLabel(){return this._prevButtonLabel}get nextButtonLabel(){return this._nextButtonLabel}currentPeriodClicked(){this.calendar.currentView=this.calendar.currentView=="month"?"multi-year":"month"}previousClicked(){this.previousEnabled()&&(this.calendar.activeDate=this.calendar.currentView=="month"?this._dateAdapter.addCalendarMonths(this.calendar.activeDate,-1):this._dateAdapter.addCalendarYears(this.calendar.activeDate,this.calendar.currentView=="year"?-1:-Ne))}nextClicked(){this.nextEnabled()&&(this.calendar.activeDate=this.calendar.currentView=="month"?this._dateAdapter.addCalendarMonths(this.calendar.activeDate,1):this._dateAdapter.addCalendarYears(this.calendar.activeDate,this.calendar.currentView=="year"?1:Ne))}previousEnabled(){return this.calendar.minDate?!this.calendar.minDate||!this._isSameView(this.calendar.activeDate,this.calendar.minDate):!0}nextEnabled(){return!this.calendar.maxDate||!this._isSameView(this.calendar.activeDate,this.calendar.maxDate)}_updateLabels(){let e=this.calendar,t=this._intl,i=this._dateAdapter;e.currentView==="month"?(this._periodButtonText=i.format(e.activeDate,this._dateFormats.display.monthYearLabel).toLocaleUpperCase(),this._periodButtonDescription=i.format(e.activeDate,this._dateFormats.display.monthYearLabel).toLocaleUpperCase(),this._periodButtonLabel=t.switchToMultiYearViewLabel,this._prevButtonLabel=t.prevMonthLabel,this._nextButtonLabel=t.nextMonthLabel):e.currentView==="year"?(this._periodButtonText=i.getYearName(e.activeDate),this._periodButtonDescription=i.getYearName(e.activeDate),this._periodButtonLabel=t.switchToMonthViewLabel,this._prevButtonLabel=t.prevYearLabel,this._nextButtonLabel=t.nextYearLabel):(this._periodButtonText=t.formatYearRange(...this._formatMinAndMaxYearLabels()),this._periodButtonDescription=t.formatYearRangeLabel(...this._formatMinAndMaxYearLabels()),this._periodButtonLabel=t.switchToMonthViewLabel,this._prevButtonLabel=t.prevMultiYearLabel,this._nextButtonLabel=t.nextMultiYearLabel)}_isSameView(e,t){return this.calendar.currentView=="month"?this._dateAdapter.getYear(e)==this._dateAdapter.getYear(t)&&this._dateAdapter.getMonth(e)==this._dateAdapter.getMonth(t):this.calendar.currentView=="year"?this._dateAdapter.getYear(e)==this._dateAdapter.getYear(t):jr(this._dateAdapter,e,t,this.calendar.minDate,this.calendar.maxDate)}_formatMinAndMaxYearLabels(){let t=this._dateAdapter.getYear(this.calendar.activeDate)-li(this._dateAdapter,this.calendar.activeDate,this.calendar.minDate,this.calendar.maxDate),i=t+Ne-1,r=this._dateAdapter.getYearName(this._dateAdapter.createDate(t,0,1)),o=this._dateAdapter.getYearName(this._dateAdapter.createDate(i,0,1));return[r,o]}_periodButtonLabelId=d(he).getId("mat-calendar-period-label-");static \u0275fac=function(t){return new(t||n)};static \u0275cmp=N({type:n,selectors:[["mat-calendar-header"]],exportAs:["matCalendarHeader"],ngContentSelectors:Es,decls:17,vars:13,consts:[[1,"mat-calendar-header"],[1,"mat-calendar-controls"],["aria-live","polite",1,"cdk-visually-hidden",3,"id"],["matButton","","type","button",1,"mat-calendar-period-button",3,"click"],["aria-hidden","true"],["viewBox","0 0 10 5","focusable","false","aria-hidden","true",1,"mat-calendar-arrow"],["points","0,0 5,5 10,0"],[1,"mat-calendar-spacer"],["matIconButton","","type","button","disabledInteractive","",1,"mat-calendar-previous-button",3,"click","disabled","matTooltip"],["viewBox","0 0 24 24","focusable","false","aria-hidden","true"],["d","M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"],["matIconButton","","type","button","disabledInteractive","",1,"mat-calendar-next-button",3,"click","disabled","matTooltip"],["d","M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"]],template:function(t,i){t&1&&(ne(),s(0,"div",0)(1,"div",1)(2,"span",2),m(3),c(),s(4,"button",3),x("click",function(){return i.currentPeriodClicked()}),s(5,"span",4),m(6),c(),oe(),s(7,"svg",5),H(8,"polygon",6),c()(),Ke(),H(9,"div",7),Z(10),s(11,"button",8),x("click",function(){return i.previousClicked()}),oe(),s(12,"svg",9),H(13,"path",10),c()(),Ke(),s(14,"button",11),x("click",function(){return i.nextClicked()}),oe(),s(15,"svg",9),H(16,"path",12),c()()()()),t&2&&(l(2),C("id",i._periodButtonLabelId),l(),A(i.periodButtonDescription),l(),F("aria-label",i.periodButtonLabel)("aria-describedby",i._periodButtonLabelId),l(2),A(i.periodButtonText),l(),z("mat-calendar-invert",i.calendar.currentView!=="month"),l(4),C("disabled",!i.previousEnabled())("matTooltip",i.prevButtonLabel),F("aria-label",i.prevButtonLabel),l(3),C("disabled",!i.nextEnabled())("matTooltip",i.nextButtonLabel),F("aria-label",i.nextButtonLabel))},dependencies:[Ve,ot,Fr],encapsulation:2,changeDetection:0})}return n})(),Bn=(()=>{class n{_dateAdapter=d(ve,{optional:!0});_dateFormats=d(wt,{optional:!0});_changeDetectorRef=d(J);_elementRef=d(U);headerComponent;_calendarHeaderPortal;_intlChanges;_moveFocusOnNextTick=!1;get startAt(){return this._startAt}set startAt(e){this._startAt=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_startAt=null;startView="month";get selected(){return this._selected}set selected(e){e instanceof Ge?this._selected=e:this._selected=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_selected=null;get minDate(){return this._minDate}set minDate(e){this._minDate=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_minDate=null;get maxDate(){return this._maxDate}set maxDate(e){this._maxDate=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_maxDate=null;dateFilter;dateClass;comparisonStart=null;comparisonEnd=null;startDateAccessibleName=null;endDateAccessibleName=null;selectedChange=new R;yearSelected=new R;monthSelected=new R;viewChanged=new R(!0);_userSelection=new R;_userDragDrop=new R;monthView;yearView;multiYearView;get activeDate(){return this._clampedActiveDate}set activeDate(e){this._clampedActiveDate=this._dateAdapter.clampDate(e,this.minDate,this.maxDate),this.stateChanges.next(),this._changeDetectorRef.markForCheck()}_clampedActiveDate;get currentView(){return this._currentView}set currentView(e){let t=this._currentView!==e?e:null;this._currentView=e,this._moveFocusOnNextTick=!0,this._changeDetectorRef.markForCheck(),t&&(this.stateChanges.next(),this.viewChanged.emit(t))}_currentView;_activeDrag=null;stateChanges=new j;constructor(){this._intlChanges=d(qt).changes.subscribe(()=>{this._changeDetectorRef.markForCheck(),this.stateChanges.next()})}ngAfterContentInit(){this._calendarHeaderPortal=new _t(this.headerComponent||$r),this.activeDate=this.startAt||this._dateAdapter.today(),this._currentView=this.startView}ngAfterViewChecked(){this._moveFocusOnNextTick&&(this._moveFocusOnNextTick=!1,this.focusActiveCell())}ngOnDestroy(){this._intlChanges.unsubscribe(),this.stateChanges.complete()}ngOnChanges(e){let t=e.minDate&&!this._dateAdapter.sameDate(e.minDate.previousValue,e.minDate.currentValue)?e.minDate:void 0,i=e.maxDate&&!this._dateAdapter.sameDate(e.maxDate.previousValue,e.maxDate.currentValue)?e.maxDate:void 0,r=t||i||e.dateFilter;if(r&&!r.firstChange){let o=this._getCurrentViewComponent();o&&(this._elementRef.nativeElement.contains(ai())&&(this._moveFocusOnNextTick=!0),this._changeDetectorRef.detectChanges(),o._init())}this.stateChanges.next()}focusActiveCell(){this._getCurrentViewComponent()?._focusActiveCell(!1)}updateTodaysDate(){this._getCurrentViewComponent()?._init()}_dateSelected(e){let t=e.value;(this.selected instanceof Ge||t&&!this._dateAdapter.sameDate(t,this.selected))&&this.selectedChange.emit(t),this._userSelection.emit(e)}_yearSelectedInMultiYearView(e){this.yearSelected.emit(e)}_monthSelectedInYearView(e){this.monthSelected.emit(e)}_goToDateInView(e,t){this.activeDate=e,this.currentView=t}_dragStarted(e){this._activeDrag=e}_dragEnded(e){this._activeDrag&&(e.value&&this._userDragDrop.emit(e),this._activeDrag=null)}_getCurrentViewComponent(){return this.monthView||this.yearView||this.multiYearView}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=N({type:n,selectors:[["mat-calendar"]],viewQuery:function(t,i){if(t&1&&ie(Lr,5)(Br,5)(Nr,5),t&2){let r;V(r=L())&&(i.monthView=r.first),V(r=L())&&(i.yearView=r.first),V(r=L())&&(i.multiYearView=r.first)}},hostAttrs:[1,"mat-calendar"],inputs:{headerComponent:"headerComponent",startAt:"startAt",startView:"startView",selected:"selected",minDate:"minDate",maxDate:"maxDate",dateFilter:"dateFilter",dateClass:"dateClass",comparisonStart:"comparisonStart",comparisonEnd:"comparisonEnd",startDateAccessibleName:"startDateAccessibleName",endDateAccessibleName:"endDateAccessibleName"},outputs:{selectedChange:"selectedChange",yearSelected:"yearSelected",monthSelected:"monthSelected",viewChanged:"viewChanged",_userSelection:"_userSelection",_userDragDrop:"_userDragDrop"},exportAs:["matCalendar"],features:[se([Gr]),Ce],decls:5,vars:2,consts:[[3,"cdkPortalOutlet"],["cdkMonitorSubtreeFocus","","tabindex","-1",1,"mat-calendar-content"],[3,"activeDate","selected","dateFilter","maxDate","minDate","dateClass","comparisonStart","comparisonEnd","startDateAccessibleName","endDateAccessibleName","activeDrag"],[3,"activeDate","selected","dateFilter","maxDate","minDate","dateClass"],[3,"activeDateChange","_userSelection","dragStarted","dragEnded","activeDate","selected","dateFilter","maxDate","minDate","dateClass","comparisonStart","comparisonEnd","startDateAccessibleName","endDateAccessibleName","activeDrag"],[3,"activeDateChange","monthSelected","selectedChange","activeDate","selected","dateFilter","maxDate","minDate","dateClass"],[3,"activeDateChange","yearSelected","selectedChange","activeDate","selected","dateFilter","maxDate","minDate","dateClass"]],template:function(t,i){if(t&1&&(rt(0,Ss,0,0,"ng-template",0),s(1,"div",1),E(2,Is,1,11,"mat-month-view",2)(3,Ts,1,6,"mat-year-view",3)(4,As,1,6,"mat-multi-year-view",3),c()),t&2){let r;C("cdkPortalOutlet",i._calendarHeaderPortal),l(2),S((r=i.currentView)==="month"?2:r==="year"?3:r==="multi-year"?4:-1)}},dependencies:[ft,Na,Lr,Br,Nr],styles:[`.mat-calendar {
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
`],encapsulation:2,changeDetection:0})}return n})(),Gs=new W("mat-datepicker-scroll-strategy",{providedIn:"root",factory:()=>{let n=d(Se);return()=>Pi(n)}}),Qr=(()=>{class n{_elementRef=d(U);_animationsDisabled=ue();_changeDetectorRef=d(J);_globalModel=d(di);_dateAdapter=d(ve);_ngZone=d($e);_rangeSelectionStrategy=d(Yr,{optional:!0});_stateChanges;_model;_eventCleanups;_animationFallback;_calendar;color;datepicker;comparisonStart=null;comparisonEnd=null;startDateAccessibleName=null;endDateAccessibleName=null;_isAbove=!1;_animationDone=new j;_isAnimating=!1;_closeButtonText;_closeButtonFocused=!1;_actionsPortal=null;_dialogLabelId=null;constructor(){if(d(Te).load(ut),this._closeButtonText=d(qt).closeCalendarLabel,!this._animationsDisabled){let e=this._elementRef.nativeElement,t=d(at);this._eventCleanups=this._ngZone.runOutsideAngular(()=>[t.listen(e,"animationstart",this._handleAnimationEvent),t.listen(e,"animationend",this._handleAnimationEvent),t.listen(e,"animationcancel",this._handleAnimationEvent)])}}ngAfterViewInit(){this._stateChanges=this.datepicker.stateChanges.subscribe(()=>{this._changeDetectorRef.markForCheck()}),this._calendar.focusActiveCell()}ngOnDestroy(){clearTimeout(this._animationFallback),this._eventCleanups?.forEach(e=>e()),this._stateChanges?.unsubscribe(),this._animationDone.complete()}_handleUserSelection(e){let t=this._model.selection,i=e.value,r=t instanceof Ge;if(r&&this._rangeSelectionStrategy){let o=this._rangeSelectionStrategy.selectionFinished(i,t,e.event);this._model.updateSelection(o,this)}else i&&(r||!this._dateAdapter.sameDate(i,t))&&this._model.add(i);(!this._model||this._model.isComplete())&&!this._actionsPortal&&this.datepicker.close()}_handleUserDragDrop(e){this._model.updateSelection(e.value,this)}_startExitAnimation(){this._elementRef.nativeElement.classList.add("mat-datepicker-content-exit"),this._animationsDisabled?this._animationDone.next():(clearTimeout(this._animationFallback),this._animationFallback=setTimeout(()=>{this._isAnimating||this._animationDone.next()},200))}_handleAnimationEvent=e=>{let t=this._elementRef.nativeElement;e.target!==t||!e.animationName.startsWith("_mat-datepicker-content")||(clearTimeout(this._animationFallback),this._isAnimating=e.type==="animationstart",t.classList.toggle("mat-datepicker-content-animating",this._isAnimating),this._isAnimating||this._animationDone.next())};_getSelected(){return this._model.selection}_applyPendingSelection(){this._model!==this._globalModel&&this._globalModel.updateSelection(this._model.selection,this)}_assignActions(e,t){this._model=e?this._globalModel.clone():this._globalModel,this._actionsPortal=e,t&&this._changeDetectorRef.detectChanges()}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=N({type:n,selectors:[["mat-datepicker-content"]],viewQuery:function(t,i){if(t&1&&ie(Bn,5),t&2){let r;V(r=L())&&(i._calendar=r.first)}},hostAttrs:[1,"mat-datepicker-content"],hostVars:6,hostBindings:function(t,i){t&2&&(fe(i.color?"mat-"+i.color:""),z("mat-datepicker-content-touch",i.datepicker.touchUi)("mat-datepicker-content-animations-enabled",!i._animationsDisabled))},inputs:{color:"color"},exportAs:["matDatepickerContent"],decls:5,vars:26,consts:[["cdkTrapFocus","","role","dialog",1,"mat-datepicker-content-container"],[3,"yearSelected","monthSelected","viewChanged","_userSelection","_userDragDrop","id","startAt","startView","minDate","maxDate","dateFilter","headerComponent","selected","dateClass","comparisonStart","comparisonEnd","startDateAccessibleName","endDateAccessibleName"],[3,"cdkPortalOutlet"],["type","button","matButton","elevated",1,"mat-datepicker-close-button",3,"focus","blur","click","color"]],template:function(t,i){t&1&&(s(0,"div",0)(1,"mat-calendar",1),x("yearSelected",function(o){return i.datepicker._selectYear(o)})("monthSelected",function(o){return i.datepicker._selectMonth(o)})("viewChanged",function(o){return i.datepicker._viewChanged(o)})("_userSelection",function(o){return i._handleUserSelection(o)})("_userDragDrop",function(o){return i._handleUserDragDrop(o)}),c(),rt(2,Os,0,0,"ng-template",2),s(3,"button",3),x("focus",function(){return i._closeButtonFocused=!0})("blur",function(){return i._closeButtonFocused=!1})("click",function(){return i.datepicker.close()}),m(4),c()()),t&2&&(z("mat-datepicker-content-container-with-custom-header",i.datepicker.calendarHeaderComponent)("mat-datepicker-content-container-with-actions",i._actionsPortal),F("aria-modal",!0)("aria-labelledby",i._dialogLabelId??void 0),l(),fe(i.datepicker.panelClass),C("id",i.datepicker.id)("startAt",i.datepicker.startAt)("startView",i.datepicker.startView)("minDate",i.datepicker._getMinDate())("maxDate",i.datepicker._getMaxDate())("dateFilter",i.datepicker._getDateFilter())("headerComponent",i.datepicker.calendarHeaderComponent)("selected",i._getSelected())("dateClass",i.datepicker.dateClass)("comparisonStart",i.comparisonStart)("comparisonEnd",i.comparisonEnd)("startDateAccessibleName",i.startDateAccessibleName)("endDateAccessibleName",i.endDateAccessibleName),l(),C("cdkPortalOutlet",i._actionsPortal),l(),z("cdk-visually-hidden",!i._closeButtonFocused),C("color",i.color||"primary"),l(),A(i._closeButtonText))},dependencies:[za,Bn,ft,Ve],styles:[`@keyframes _mat-datepicker-content-dropdown-enter {
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
`],encapsulation:2,changeDetection:0})}return n})(),Hr=(()=>{class n{_injector=d(Se);_viewContainerRef=d(Ot);_dateAdapter=d(ve,{optional:!0});_dir=d(Re,{optional:!0});_model=d(di);_animationsDisabled=ue();_scrollStrategy=d(Gs);_inputStateChanges=Be.EMPTY;_document=d(tt);calendarHeaderComponent;get startAt(){return this._startAt||(this.datepickerInput?this.datepickerInput.getStartValue():null)}set startAt(e){this._startAt=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_startAt=null;startView="month";get color(){return this._color||(this.datepickerInput?this.datepickerInput.getThemePalette():void 0)}set color(e){this._color=e}_color;touchUi=!1;get disabled(){return this._disabled===void 0&&this.datepickerInput?this.datepickerInput.disabled:!!this._disabled}set disabled(e){e!==this._disabled&&(this._disabled=e,this.stateChanges.next(void 0))}_disabled;xPosition="start";yPosition="below";restoreFocus=!0;yearSelected=new R;monthSelected=new R;viewChanged=new R(!0);dateClass;openedStream=new R;closedStream=new R;get panelClass(){return this._panelClass}set panelClass(e){this._panelClass=$a(e)}_panelClass;get opened(){return this._opened}set opened(e){e?this.open():this.close()}_opened=!1;id=d(he).getId("mat-datepicker-");_getMinDate(){return this.datepickerInput&&this.datepickerInput.min}_getMaxDate(){return this.datepickerInput&&this.datepickerInput.max}_getDateFilter(){return this.datepickerInput&&this.datepickerInput.dateFilter}_overlayRef=null;_componentRef=null;_focusedElementBeforeOpen=null;_backdropHarnessClass=`${this.id}-backdrop`;_actionsPortal=null;datepickerInput;stateChanges=new j;_changeDetectorRef=d(J);constructor(){this._dateAdapter,this._model.selectionChanged.subscribe(()=>{this._changeDetectorRef.markForCheck()})}ngOnChanges(e){let t=e.xPosition||e.yPosition;if(t&&!t.firstChange&&this._overlayRef){let i=this._overlayRef.getConfig().positionStrategy;i instanceof Ja&&(this._setConnectedPositions(i),this.opened&&this._overlayRef.updatePosition())}this.stateChanges.next(void 0)}ngOnDestroy(){this._destroyOverlay(),this.close(),this._inputStateChanges.unsubscribe(),this.stateChanges.complete()}select(e){this._model.add(e)}_selectYear(e){this.yearSelected.emit(e)}_selectMonth(e){this.monthSelected.emit(e)}_viewChanged(e){this.viewChanged.emit(e)}registerInput(e){return this.datepickerInput,this._inputStateChanges.unsubscribe(),this.datepickerInput=e,this._inputStateChanges=e.stateChanges.subscribe(()=>this.stateChanges.next(void 0)),this._model}registerActions(e){this._actionsPortal,this._actionsPortal=e,this._componentRef?.instance._assignActions(e,!0)}removeActions(e){e===this._actionsPortal&&(this._actionsPortal=null,this._componentRef?.instance._assignActions(null,!0))}open(){this._opened||this.disabled||this._componentRef?.instance._isAnimating||(this.datepickerInput,this._focusedElementBeforeOpen=ai(),this._openOverlay(),this._opened=!0,this.openedStream.emit())}close(){if(!this._opened||this._componentRef?.instance._isAnimating)return;let e=this.restoreFocus&&this._focusedElementBeforeOpen&&typeof this._focusedElementBeforeOpen.focus=="function",t=()=>{this._opened&&(this._opened=!1,this.closedStream.emit())};if(this._componentRef){let{instance:i,location:r}=this._componentRef;i._animationDone.pipe(Ca(1)).subscribe(()=>{let o=this._document.activeElement;e&&(!o||o===this._document.activeElement||r.nativeElement.contains(o))&&this._focusedElementBeforeOpen.focus(),this._focusedElementBeforeOpen=null,this._destroyOverlay()}),i._startExitAnimation()}e?setTimeout(t):t()}_applyPendingSelection(){this._componentRef?.instance?._applyPendingSelection()}_forwardContentValues(e){e.datepicker=this,e.color=this.color,e._dialogLabelId=this.datepickerInput.getOverlayLabelId(),e._assignActions(this._actionsPortal,!1)}_openOverlay(){this._destroyOverlay();let e=this.touchUi,t=new _t(Qr,this._viewContainerRef),i=this._overlayRef=Nt(this._injector,new Fi({positionStrategy:e?this._getDialogStrategy():this._getDropdownStrategy(),hasBackdrop:!0,backdropClass:[e?"cdk-overlay-dark-backdrop":"mat-overlay-transparent-backdrop",this._backdropHarnessClass],direction:this._dir||"ltr",scrollStrategy:e?Za(this._injector):this._scrollStrategy(),panelClass:`mat-datepicker-${e?"dialog":"popup"}`,disableAnimations:this._animationsDisabled}));this._getCloseStream(i).subscribe(r=>{r&&r.preventDefault(),this.close()}),i.keydownEvents().subscribe(r=>{let o=r.keyCode;(o===38||o===40||o===37||o===39||o===33||o===34)&&r.preventDefault()}),this._componentRef=i.attach(t),this._forwardContentValues(this._componentRef.instance),e||Fe(()=>{i.updatePosition()},{injector:this._injector})}_destroyOverlay(){this._overlayRef&&(this._overlayRef.dispose(),this._overlayRef=this._componentRef=null)}_getDialogStrategy(){return Vi(this._injector).centerHorizontally().centerVertically()}_getDropdownStrategy(){let e=Ri(this._injector,this.datepickerInput.getConnectedOverlayOrigin()).withTransformOriginOn(".mat-datepicker-content").withFlexibleDimensions(!1).withViewportMargin(8).withLockedPosition();return this._setConnectedPositions(e)}_setConnectedPositions(e){let t=this.xPosition==="end"?"end":"start",i=t==="start"?"end":"start",r=this.yPosition==="above"?"bottom":"top",o=r==="top"?"bottom":"top";return e.withPositions([{originX:t,originY:o,overlayX:t,overlayY:r},{originX:t,originY:r,overlayX:t,overlayY:o},{originX:i,originY:o,overlayX:i,overlayY:r},{originX:i,originY:r,overlayX:i,overlayY:o}])}_getCloseStream(e){let t=["ctrlKey","shiftKey","metaKey"];return pt(e.backdropClick(),e.detachments(),e.keydownEvents().pipe(xa(i=>i.keyCode===27&&!me(i)||this.datepickerInput&&me(i,"altKey")&&i.keyCode===38&&t.every(r=>!me(i,r)))))}static \u0275fac=function(t){return new(t||n)};static \u0275dir=$({type:n,inputs:{calendarHeaderComponent:"calendarHeaderComponent",startAt:"startAt",startView:"startView",color:"color",touchUi:[2,"touchUi","touchUi",B],disabled:[2,"disabled","disabled",B],xPosition:"xPosition",yPosition:"yPosition",restoreFocus:[2,"restoreFocus","restoreFocus",B],dateClass:"dateClass",panelClass:"panelClass",opened:[2,"opened","opened",B]},outputs:{yearSelected:"yearSelected",monthSelected:"monthSelected",viewChanged:"viewChanged",openedStream:"opened",closedStream:"closed"},features:[Ce]})}return n})(),qr=(()=>{class n extends Hr{static \u0275fac=(()=>{let e;return function(i){return(e||(e=it(n)))(i||n)}})();static \u0275cmp=N({type:n,selectors:[["mat-datepicker"]],exportAs:["matDatepicker"],features:[se([Gr,{provide:Hr,useExisting:n}]),ge],decls:0,vars:0,template:function(t,i){},encapsulation:2,changeDetection:0})}return n})(),jt=class{target;targetElement;value=null;constructor(a,e){this.target=a,this.targetElement=e,this.value=this.target.value}},Ys=(()=>{class n{_elementRef=d(U);_dateAdapter=d(ve,{optional:!0});_dateFormats=d(wt,{optional:!0});_isInitialized=!1;get value(){return this._model?this._getValueFromModel(this._model.selection):this._pendingValue}set value(e){this._assignValueProgrammatically(e,!0)}_model;get disabled(){return!!this._disabled||this._parentDisabled()}set disabled(e){let t=e,i=this._elementRef.nativeElement;this._disabled!==t&&(this._disabled=t,this.stateChanges.next(void 0)),t&&this._isInitialized&&i.blur&&i.blur()}_disabled;dateChange=new R;dateInput=new R;stateChanges=new j;_onTouched=()=>{};_validatorOnChange=()=>{};_cvaOnChange=()=>{};_valueChangesSubscription=Be.EMPTY;_localeSubscription=Be.EMPTY;_pendingValue=null;_parseValidator=()=>this._lastValueValid?null:{matDatepickerParse:{text:this._elementRef.nativeElement.value}};_filterValidator=e=>{let t=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e.value));return!t||this._matchesFilter(t)?null:{matDatepickerFilter:!0}};_minValidator=e=>{let t=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e.value)),i=this._getMinDate();return!i||!t||this._dateAdapter.compareDate(i,t)<=0?null:{matDatepickerMin:{min:i,actual:t}}};_maxValidator=e=>{let t=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e.value)),i=this._getMaxDate();return!i||!t||this._dateAdapter.compareDate(i,t)>=0?null:{matDatepickerMax:{max:i,actual:t}}};_getValidators(){return[this._parseValidator,this._minValidator,this._maxValidator,this._filterValidator]}_registerModel(e){this._model=e,this._valueChangesSubscription.unsubscribe(),this._pendingValue&&this._assignValue(this._pendingValue),this._valueChangesSubscription=this._model.selectionChanged.subscribe(t=>{if(this._shouldHandleChangeEvent(t)){let i=this._getValueFromModel(t.selection);this._lastValueValid=this._isValidValue(i),this._cvaOnChange(i),this._onTouched(),this._formatValue(i),this.dateInput.emit(new jt(this,this._elementRef.nativeElement)),this.dateChange.emit(new jt(this,this._elementRef.nativeElement))}})}_lastValueValid=!1;constructor(){this._localeSubscription=this._dateAdapter.localeChanges.subscribe(()=>{this._assignValueProgrammatically(this.value,!0)})}ngAfterViewInit(){this._isInitialized=!0}ngOnChanges(e){js(e,this._dateAdapter)&&this.stateChanges.next(void 0)}ngOnDestroy(){this._valueChangesSubscription.unsubscribe(),this._localeSubscription.unsubscribe(),this.stateChanges.complete()}registerOnValidatorChange(e){this._validatorOnChange=e}validate(e){return this._validator?this._validator(e):null}writeValue(e){this._assignValueProgrammatically(e,e!==this.value)}registerOnChange(e){this._cvaOnChange=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this.disabled=e}_onKeydown(e){let t=["ctrlKey","shiftKey","metaKey"];me(e,"altKey")&&e.keyCode===40&&t.every(r=>!me(e,r))&&!this._elementRef.nativeElement.readOnly&&(this._openPopup(),e.preventDefault())}_onInput(e){let t=e.target.value,i=this._lastValueValid,r=this._dateAdapter.parse(t,this._dateFormats.parse.dateInput);this._lastValueValid=this._isValidValue(r),r=this._dateAdapter.getValidDateOrNull(r);let o=!this._dateAdapter.sameDate(r,this.value);!r||o?this._cvaOnChange(r):(t&&!this.value&&this._cvaOnChange(r),i!==this._lastValueValid&&this._validatorOnChange()),o&&(this._assignValue(r),this.dateInput.emit(new jt(this,this._elementRef.nativeElement)))}_onChange(){this.dateChange.emit(new jt(this,this._elementRef.nativeElement))}_onBlur(){this.value&&this._formatValue(this.value),this._onTouched()}_formatValue(e){this._elementRef.nativeElement.value=e!=null?this._dateAdapter.format(e,this._dateFormats.display.dateInput):""}_assignValue(e){this._model?(this._assignValueToModel(e),this._pendingValue=null):this._pendingValue=e}_isValidValue(e){return!e||this._dateAdapter.isValid(e)}_parentDisabled(){return!1}_assignValueProgrammatically(e,t){e=this._dateAdapter.deserialize(e),this._lastValueValid=this._isValidValue(e),e=this._dateAdapter.getValidDateOrNull(e),this._assignValue(e),t&&this._formatValue(e)}_matchesFilter(e){let t=this._getDateFilter();return!t||t(e)}static \u0275fac=function(t){return new(t||n)};static \u0275dir=$({type:n,inputs:{value:"value",disabled:[2,"disabled","disabled",B]},outputs:{dateChange:"dateChange",dateInput:"dateInput"},features:[Ce]})}return n})();function js(n,a){let e=Object.keys(n);for(let t of e){let{previousValue:i,currentValue:r}=n[t];if(a.isDateInstance(i)&&a.isDateInstance(r)){if(!a.sameDate(i,r))return!0}else return!0}return!1}var Us={provide:kt,useExisting:mt(()=>en),multi:!0},$s={provide:Bi,useExisting:mt(()=>en),multi:!0},en=(()=>{class n extends Ys{_formField=d(Yi,{optional:!0});_closedSubscription=Be.EMPTY;_openedSubscription=Be.EMPTY;set matDatepicker(e){e&&(this._datepicker=e,this._ariaOwns.set(e.opened?e.id:null),this._closedSubscription=e.closedStream.subscribe(()=>{this._onTouched(),this._ariaOwns.set(null)}),this._openedSubscription=e.openedStream.subscribe(()=>{this._ariaOwns.set(e.id)}),this._registerModel(e.registerInput(this)))}_datepicker;_ariaOwns=D(null);get min(){return this._min}set min(e){let t=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e));this._dateAdapter.sameDate(t,this._min)||(this._min=t,this._validatorOnChange())}_min=null;get max(){return this._max}set max(e){let t=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e));this._dateAdapter.sameDate(t,this._max)||(this._max=t,this._validatorOnChange())}_max=null;get dateFilter(){return this._dateFilter}set dateFilter(e){let t=this._matchesFilter(this.value);this._dateFilter=e,this._matchesFilter(this.value)!==t&&this._validatorOnChange()}_dateFilter;_validator=null;constructor(){super(),this._validator=zt.compose(super._getValidators())}getConnectedOverlayOrigin(){return this._formField?this._formField.getConnectedOverlayOrigin():this._elementRef}getOverlayLabelId(){return this._formField?this._formField.getLabelId():this._elementRef.nativeElement.getAttribute("aria-labelledby")}getThemePalette(){return this._formField?this._formField.color:void 0}getStartValue(){return this.value}ngOnDestroy(){super.ngOnDestroy(),this._closedSubscription.unsubscribe(),this._openedSubscription.unsubscribe()}_openPopup(){this._datepicker&&this._datepicker.open()}_getValueFromModel(e){return e}_assignValueToModel(e){this._model&&this._model.updateSelection(e,this)}_getMinDate(){return this._min}_getMaxDate(){return this._max}_getDateFilter(){return this._dateFilter}_shouldHandleChangeEvent(e){return e.source!==this}static \u0275fac=function(t){return new(t||n)};static \u0275dir=$({type:n,selectors:[["input","matDatepicker",""]],hostAttrs:[1,"mat-datepicker-input"],hostVars:6,hostBindings:function(t,i){t&1&&x("input",function(o){return i._onInput(o)})("change",function(){return i._onChange()})("blur",function(){return i._onBlur()})("keydown",function(o){return i._onKeydown(o)}),t&2&&(de("disabled",i.disabled),F("aria-haspopup",i._datepicker?"dialog":null)("aria-owns",i._ariaOwns())("min",i.min?i._dateAdapter.toIso8601(i.min):null)("max",i.max?i._dateAdapter.toIso8601(i.max):null)("data-mat-calendar",i._datepicker?i._datepicker.id:null))},inputs:{matDatepicker:"matDatepicker",min:"min",max:"max",dateFilter:[0,"matDatepickerFilter","dateFilter"]},exportAs:["matDatepickerInput"],features:[se([Us,$s,{provide:br,useExisting:n}]),ge]})}return n})(),Qs=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275dir=$({type:n,selectors:[["","matDatepickerToggleIcon",""]]})}return n})(),Yn=(()=>{class n{_intl=d(qt);_changeDetectorRef=d(J);_stateChanges=Be.EMPTY;datepicker;tabIndex=null;ariaLabel;get disabled(){return this._disabled===void 0&&this.datepicker?this.datepicker.disabled:!!this._disabled}set disabled(e){this._disabled=e}_disabled;disableRipple=!1;_customIcon;_button;constructor(){let e=d(new Rt("tabindex"),{optional:!0}),t=Number(e);this.tabIndex=t||t===0?t:null}ngOnChanges(e){e.datepicker&&this._watchStateChanges()}ngOnDestroy(){this._stateChanges.unsubscribe()}ngAfterContentInit(){this._watchStateChanges()}_open(e){this.datepicker&&!this.disabled&&(this.datepicker.open(),e.stopPropagation())}_watchStateChanges(){let e=this.datepicker?this.datepicker.stateChanges:dt(),t=this.datepicker&&this.datepicker.datepickerInput?this.datepicker.datepickerInput.stateChanges:dt(),i=this.datepicker?pt(this.datepicker.openedStream,this.datepicker.closedStream):dt();this._stateChanges.unsubscribe(),this._stateChanges=pt(this._intl.changes,e,t,i).subscribe(()=>this._changeDetectorRef.markForCheck())}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=N({type:n,selectors:[["mat-datepicker-toggle"]],contentQueries:function(t,i,r){if(t&1&&De(r,Qs,5),t&2){let o;V(o=L())&&(i._customIcon=o.first)}},viewQuery:function(t,i){if(t&1&&ie(Ps,5),t&2){let r;V(r=L())&&(i._button=r.first)}},hostAttrs:[1,"mat-datepicker-toggle"],hostVars:8,hostBindings:function(t,i){t&1&&x("click",function(o){return i._open(o)}),t&2&&(F("tabindex",null)("data-mat-calendar",i.datepicker?i.datepicker.id:null),z("mat-datepicker-toggle-active",i.datepicker&&i.datepicker.opened)("mat-accent",i.datepicker&&i.datepicker.color==="accent")("mat-warn",i.datepicker&&i.datepicker.color==="warn"))},inputs:{datepicker:[0,"for","datepicker"],tabIndex:"tabIndex",ariaLabel:[0,"aria-label","ariaLabel"],disabled:[2,"disabled","disabled",B],disableRipple:"disableRipple"},exportAs:["matDatepickerToggle"],features:[Ce],ngContentSelectors:Rs,decls:4,vars:7,consts:[["button",""],["matIconButton","","type","button",3,"tabIndex","disabled","disableRipple"],["viewBox","0 0 24 24","width","24px","height","24px","fill","currentColor","focusable","false","aria-hidden","true",1,"mat-datepicker-toggle-default-icon"],["d","M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"]],template:function(t,i){t&1&&(ne(Fs),s(0,"button",1,0),E(2,Vs,2,0,":svg:svg",2),Z(3),c()),t&2&&(C("tabIndex",i.disabled?-1:i.tabIndex)("disabled",i.disabled)("disableRipple",i.disableRipple),F("aria-haspopup",i.datepicker?"dialog":null)("aria-label",i.ariaLabel||i._intl.openCalendarLabel)("aria-expanded",i.datepicker?i.datepicker.opened:null),l(2),S(i._customIcon?-1:2))},dependencies:[ot],styles:[`.mat-datepicker-toggle {
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
`],encapsulation:2,changeDetection:0})}return n})();var Kr=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=Ie({type:n});static \u0275inj=Ee({providers:[qt],imports:[Le,Mn,Ya,oi,Qr,Yn,$r,ze,Wa]})}return n})();var Ks=/^\d{4}-\d{2}-\d{2}(?:T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|(?:(?:\+|-)\d{2}:\d{2}))?)?$/,Ws=/^(\d?\d)[:.](\d?\d)(?:[:.](\d?\d))?\s*(AM|PM)?$/i;function jn(n,a){let e=Array(n);for(let t=0;t<n;t++)e[t]=a(t);return e}var Xs=(()=>{class n extends ve{_matDateLocale=d(An,{optional:!0});constructor(){super();let e=d(An,{optional:!0});e!==void 0&&(this._matDateLocale=e),super.setLocale(this._matDateLocale)}getYear(e){return e.getFullYear()}getMonth(e){return e.getMonth()}getDate(e){return e.getDate()}getDayOfWeek(e){return e.getDay()}getMonthNames(e){let t=new Intl.DateTimeFormat(this.locale,{month:e,timeZone:"utc"});return jn(12,i=>this._format(t,new Date(2017,i,1)))}getDateNames(){let e=new Intl.DateTimeFormat(this.locale,{day:"numeric",timeZone:"utc"});return jn(31,t=>this._format(e,new Date(2017,0,t+1)))}getDayOfWeekNames(e){let t=new Intl.DateTimeFormat(this.locale,{weekday:e,timeZone:"utc"});return jn(7,i=>this._format(t,new Date(2017,0,i+1)))}getYearName(e){let t=new Intl.DateTimeFormat(this.locale,{year:"numeric",timeZone:"utc"});return this._format(t,e)}getFirstDayOfWeek(){if(typeof Intl<"u"&&Intl.Locale){let e=new Intl.Locale(this.locale),t=(e.getWeekInfo?.()||e.weekInfo)?.firstDay??0;return t===7?0:t}return 0}getNumDaysInMonth(e){return this.getDate(this._createDateWithOverflow(this.getYear(e),this.getMonth(e)+1,0))}clone(e){return new Date(e.getTime())}createDate(e,t,i){let r=this._createDateWithOverflow(e,t,i);return r.getMonth()!=t,r}today(){return new Date}parse(e,t){return typeof e=="number"?new Date(e):e?new Date(Date.parse(e)):null}format(e,t){if(!this.isValid(e))throw Error("NativeDateAdapter: Cannot format invalid date.");let i=new Intl.DateTimeFormat(this.locale,Ue(X({},t),{timeZone:"utc"}));return this._format(i,e)}addCalendarYears(e,t){return this.addCalendarMonths(e,t*12)}addCalendarMonths(e,t){let i=this._createDateWithOverflow(this.getYear(e),this.getMonth(e)+t,this.getDate(e));return this.getMonth(i)!=((this.getMonth(e)+t)%12+12)%12&&(i=this._createDateWithOverflow(this.getYear(i),this.getMonth(i),0)),i}addCalendarDays(e,t){return this._createDateWithOverflow(this.getYear(e),this.getMonth(e),this.getDate(e)+t)}toIso8601(e){return[e.getUTCFullYear(),this._2digit(e.getUTCMonth()+1),this._2digit(e.getUTCDate())].join("-")}deserialize(e){if(typeof e=="string"){if(!e)return null;if(Ks.test(e)){let t=new Date(e);if(this.isValid(t))return t}}return super.deserialize(e)}isDateInstance(e){return e instanceof Date}isValid(e){return!isNaN(e.getTime())}invalid(){return new Date(NaN)}setTime(e,t,i,r){let o=this.clone(e);return o.setHours(t,i,r,0),o}getHours(e){return e.getHours()}getMinutes(e){return e.getMinutes()}getSeconds(e){return e.getSeconds()}parseTime(e,t){if(typeof e!="string")return e instanceof Date?new Date(e.getTime()):null;let i=e.trim();if(i.length===0)return null;let r=this._parseTimeString(i);if(r===null){let o=i.replace(/[^0-9:(AM|PM)]/gi,"").trim();o.length>0&&(r=this._parseTimeString(o))}return r||this.invalid()}addSeconds(e,t){return new Date(e.getTime()+t*1e3)}_createDateWithOverflow(e,t,i){let r=new Date;return r.setFullYear(e,t,i),r.setHours(0,0,0,0),r}_2digit(e){return("00"+e).slice(-2)}_format(e,t){let i=new Date;return i.setUTCFullYear(t.getFullYear(),t.getMonth(),t.getDate()),i.setUTCHours(t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds()),e.format(i)}_parseTimeString(e){let t=e.toUpperCase().match(Ws);if(t){let i=parseInt(t[1]),r=parseInt(t[2]),o=t[3]==null?void 0:parseInt(t[3]),p=t[4];if(i===12?i=p==="AM"?0:i:p==="PM"&&(i+=12),Un(i,0,23)&&Un(r,0,59)&&(o==null||Un(o,0,59)))return this.setTime(this.today(),i,r,o||0)}return null}static \u0275fac=function(t){return new(t||n)};static \u0275prov=ke({token:n,factory:n.\u0275fac})}return n})();function Un(n,a,e){return!isNaN(n)&&n>=a&&n<=e}var Zs={parse:{dateInput:null,timeInput:null},display:{dateInput:{year:"numeric",month:"numeric",day:"numeric"},timeInput:{hour:"numeric",minute:"numeric"},monthYearLabel:{year:"numeric",month:"short"},dateA11yLabel:{year:"numeric",month:"long",day:"numeric"},monthYearA11yLabel:{year:"numeric",month:"long"},timeOptionLabel:{hour:"numeric",minute:"numeric"}}};function Wr(n=Zs){return[{provide:ve,useClass:Xs},{provide:wt,useValue:n}]}var tl=["*",[["mat-chip-avatar"],["","matChipAvatar",""]],[["mat-chip-trailing-icon"],["","matChipRemove",""],["","matChipTrailingIcon",""]]],il=["*","mat-chip-avatar, [matChipAvatar]","mat-chip-trailing-icon,[matChipRemove],[matChipTrailingIcon]"];function nl(n,a){n&1&&(s(0,"span",3),Z(1,1),c())}function al(n,a){n&1&&(s(0,"span",6),Z(1,2),c())}var rl=`.mdc-evolution-chip,
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
`,ol=[[["","matChipEdit",""]],[["mat-chip-avatar"],["","matChipAvatar",""]],[["","matChipEditInput",""]],"*",[["mat-chip-trailing-icon"],["","matChipRemove",""],["","matChipTrailingIcon",""]]],sl=["[matChipEdit]","mat-chip-avatar, [matChipAvatar]","[matChipEditInput]","*","mat-chip-trailing-icon,[matChipRemove],[matChipTrailingIcon]"];function ll(n,a){n&1&&H(0,"span",0)}function cl(n,a){n&1&&(s(0,"span",1),Z(1),c())}function dl(n,a){n&1&&(s(0,"span",3),Z(1,1),c())}function pl(n,a){n&1&&Z(0,2)}function ml(n,a){n&1&&H(0,"span",7)}function hl(n,a){if(n&1&&E(0,pl,1,0)(1,ml,1,0,"span",7),n&2){let e=u();S(e.contentEditInput?0:1)}}function ul(n,a){n&1&&Z(0,3)}function gl(n,a){n&1&&(s(0,"span",6),Z(1,4),c())}var eo=["*"],_l=`.mat-mdc-chip-set {
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
`,to=new W("mat-chips-default-options",{providedIn:"root",factory:()=>({separatorKeyCodes:[13]})}),Xr=new W("MatChipAvatar"),Zr=new W("MatChipTrailingIcon"),Jr=new W("MatChipEdit"),Qn=new W("MatChipRemove"),Wn=new W("MatChip"),io=(()=>{class n{_elementRef=d(U);_parentChip=d(Wn);_isPrimary=!0;_isLeading=!1;get disabled(){return this._disabled||this._parentChip?.disabled||!1}set disabled(e){this._disabled=e}_disabled=!1;tabIndex=-1;_allowFocusWhenDisabled=!1;_getDisabledAttribute(){return this.disabled&&!this._allowFocusWhenDisabled?"":null}constructor(){d(Te).load(Qe),this._elementRef.nativeElement.nodeName==="BUTTON"&&this._elementRef.nativeElement.setAttribute("type","button")}focus(){this._elementRef.nativeElement.focus()}static \u0275fac=function(t){return new(t||n)};static \u0275dir=$({type:n,selectors:[["","matChipContent",""]],hostAttrs:[1,"mat-mdc-chip-action","mdc-evolution-chip__action","mdc-evolution-chip__action--presentational"],hostVars:8,hostBindings:function(t,i){t&2&&(F("disabled",i._getDisabledAttribute())("aria-disabled",i.disabled),z("mdc-evolution-chip__action--primary",i._isPrimary)("mdc-evolution-chip__action--secondary",!i._isPrimary)("mdc-evolution-chip__action--trailing",!i._isPrimary&&!i._isLeading))},inputs:{disabled:[2,"disabled","disabled",B],tabIndex:[2,"tabIndex","tabIndex",e=>e==null?-1:Mt(e)],_allowFocusWhenDisabled:"_allowFocusWhenDisabled"}})}return n})(),Xn=(()=>{class n extends io{_getTabindex(){return this.disabled&&!this._allowFocusWhenDisabled?null:this.tabIndex.toString()}_handleClick(e){!this.disabled&&this._isPrimary&&(e.preventDefault(),this._parentChip._handlePrimaryActionInteraction())}_handleKeydown(e){(e.keyCode===13||e.keyCode===32)&&!this.disabled&&this._isPrimary&&!this._parentChip._isEditing&&(e.preventDefault(),this._parentChip._handlePrimaryActionInteraction())}static \u0275fac=(()=>{let e;return function(i){return(e||(e=it(n)))(i||n)}})();static \u0275dir=$({type:n,selectors:[["","matChipAction",""]],hostVars:3,hostBindings:function(t,i){t&1&&x("click",function(o){return i._handleClick(o)})("keydown",function(o){return i._handleKeydown(o)}),t&2&&(F("tabindex",i._getTabindex()),z("mdc-evolution-chip__action--presentational",!1))},features:[ge]})}return n})();var no=(()=>{class n extends Xn{_isPrimary=!1;_handleClick(e){this.disabled||(e.stopPropagation(),e.preventDefault(),this._parentChip.remove())}_handleKeydown(e){(e.keyCode===13||e.keyCode===32)&&!this.disabled&&(e.stopPropagation(),e.preventDefault(),this._parentChip.remove())}static \u0275fac=(()=>{let e;return function(i){return(e||(e=it(n)))(i||n)}})();static \u0275dir=$({type:n,selectors:[["","matChipRemove",""]],hostAttrs:["role","button",1,"mat-mdc-chip-remove","mat-mdc-chip-trailing-icon","mat-focus-indicator","mdc-evolution-chip__icon","mdc-evolution-chip__icon--trailing"],hostVars:1,hostBindings:function(t,i){t&2&&F("aria-hidden",null)},features:[se([{provide:Qn,useExisting:n}]),ge]})}return n})(),qn=(()=>{class n{_changeDetectorRef=d(J);_elementRef=d(U);_tagName=d(Ra);_ngZone=d($e);_focusMonitor=d(Xe);_globalRippleOptions=d(Qa,{optional:!0});_document=d(tt);_onFocus=new j;_onBlur=new j;_isBasicChip=!1;role=null;_hasFocusInternal=!1;_pendingFocus=!1;_actionChanges;_animationsDisabled=ue();_allLeadingIcons;_allTrailingIcons;_allEditIcons;_allRemoveIcons;_hasFocus(){return this._hasFocusInternal}id=d(he).getId("mat-mdc-chip-");ariaLabel=null;ariaDescription=null;_chipListDisabled=!1;_hadFocusOnRemove=!1;_textElement;get value(){return this._value!==void 0?this._value:this._textElement.textContent.trim()}set value(e){this._value=e}_value;color;removable=!0;highlighted=!1;disableRipple=!1;get disabled(){return this._disabled||this._chipListDisabled}set disabled(e){this._disabled=e}_disabled=!1;removed=new R;destroyed=new R;basicChipAttrName="mat-basic-chip";leadingIcon;editIcon;trailingIcon;removeIcon;primaryAction;_rippleLoader=d(qa);_injector=d(Se);constructor(){let e=d(Te);e.load(Qe),e.load(ut),this._monitorFocus(),this._rippleLoader?.configureRipple(this._elementRef.nativeElement,{className:"mat-mdc-chip-ripple",disabled:this._isRippleDisabled()})}ngOnInit(){this._isBasicChip=this._elementRef.nativeElement.hasAttribute(this.basicChipAttrName)||this._tagName.toLowerCase()===this.basicChipAttrName}ngAfterViewInit(){this._textElement=this._elementRef.nativeElement.querySelector(".mat-mdc-chip-action-label"),this._pendingFocus&&(this._pendingFocus=!1,this.focus())}ngAfterContentInit(){this._actionChanges=pt(this._allLeadingIcons.changes,this._allTrailingIcons.changes,this._allEditIcons.changes,this._allRemoveIcons.changes).subscribe(()=>this._changeDetectorRef.markForCheck())}ngDoCheck(){this._rippleLoader.setDisabled(this._elementRef.nativeElement,this._isRippleDisabled())}ngOnDestroy(){this._focusMonitor.stopMonitoring(this._elementRef),this._rippleLoader?.destroyRipple(this._elementRef.nativeElement),this._actionChanges?.unsubscribe(),this.destroyed.emit({chip:this}),this.destroyed.complete()}remove(){this.removable&&(this._hadFocusOnRemove=this._hasFocus(),this.removed.emit({chip:this}))}_isRippleDisabled(){return this.disabled||this.disableRipple||this._animationsDisabled||this._isBasicChip||!this._hasInteractiveActions()||!!this._globalRippleOptions?.disabled}_hasTrailingIcon(){return!!(this.trailingIcon||this.removeIcon)}_handleKeydown(e){(e.keyCode===8&&!e.repeat||e.keyCode===46)&&(e.preventDefault(),this.remove())}focus(){this.disabled||(this.primaryAction?this.primaryAction.focus():this._pendingFocus=!0)}_getSourceAction(e){return this._getActions().find(t=>{let i=t._elementRef.nativeElement;return i===e||i.contains(e)})}_getActions(){let e=[];return this.editIcon&&e.push(this.editIcon),this.primaryAction&&e.push(this.primaryAction),this.removeIcon&&e.push(this.removeIcon),e}_handlePrimaryActionInteraction(){}_hasInteractiveActions(){return this._getActions().length>0}_edit(e){}_monitorFocus(){this._focusMonitor.monitor(this._elementRef,!0).subscribe(e=>{let t=e!==null;t!==this._hasFocusInternal&&(this._hasFocusInternal=t,t?this._onFocus.next({chip:this}):(this._changeDetectorRef.markForCheck(),setTimeout(()=>this._ngZone.run(()=>this._onBlur.next({chip:this})))))})}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=N({type:n,selectors:[["mat-basic-chip"],["","mat-basic-chip",""],["mat-chip"],["","mat-chip",""]],contentQueries:function(t,i,r){if(t&1&&De(r,Xr,5)(r,Jr,5)(r,Zr,5)(r,Qn,5)(r,Xr,5)(r,Zr,5)(r,Jr,5)(r,Qn,5),t&2){let o;V(o=L())&&(i.leadingIcon=o.first),V(o=L())&&(i.editIcon=o.first),V(o=L())&&(i.trailingIcon=o.first),V(o=L())&&(i.removeIcon=o.first),V(o=L())&&(i._allLeadingIcons=o),V(o=L())&&(i._allTrailingIcons=o),V(o=L())&&(i._allEditIcons=o),V(o=L())&&(i._allRemoveIcons=o)}},viewQuery:function(t,i){if(t&1&&ie(Xn,5),t&2){let r;V(r=L())&&(i.primaryAction=r.first)}},hostAttrs:[1,"mat-mdc-chip"],hostVars:31,hostBindings:function(t,i){t&1&&x("keydown",function(o){return i._handleKeydown(o)}),t&2&&(de("id",i.id),F("role",i.role)("aria-label",i.ariaLabel),fe("mat-"+(i.color||"primary")),z("mdc-evolution-chip",!i._isBasicChip)("mdc-evolution-chip--disabled",i.disabled)("mdc-evolution-chip--with-trailing-action",i._hasTrailingIcon())("mdc-evolution-chip--with-primary-graphic",i.leadingIcon)("mdc-evolution-chip--with-primary-icon",i.leadingIcon)("mdc-evolution-chip--with-avatar",i.leadingIcon)("mat-mdc-chip-with-avatar",i.leadingIcon)("mat-mdc-chip-highlighted",i.highlighted)("mat-mdc-chip-disabled",i.disabled)("mat-mdc-basic-chip",i._isBasicChip)("mat-mdc-standard-chip",!i._isBasicChip)("mat-mdc-chip-with-trailing-icon",i._hasTrailingIcon())("_mat-animation-noopable",i._animationsDisabled))},inputs:{role:"role",id:"id",ariaLabel:[0,"aria-label","ariaLabel"],ariaDescription:[0,"aria-description","ariaDescription"],value:"value",color:"color",removable:[2,"removable","removable",B],highlighted:[2,"highlighted","highlighted",B],disableRipple:[2,"disableRipple","disableRipple",B],disabled:[2,"disabled","disabled",B]},outputs:{removed:"removed",destroyed:"destroyed"},exportAs:["matChip"],features:[se([{provide:Wn,useExisting:n}])],ngContentSelectors:il,decls:8,vars:2,consts:[[1,"mat-mdc-chip-focus-overlay"],[1,"mdc-evolution-chip__cell","mdc-evolution-chip__cell--primary"],["matChipContent",""],[1,"mdc-evolution-chip__graphic","mat-mdc-chip-graphic"],[1,"mdc-evolution-chip__text-label","mat-mdc-chip-action-label"],[1,"mat-mdc-chip-primary-focus-indicator","mat-focus-indicator"],[1,"mdc-evolution-chip__cell","mdc-evolution-chip__cell--trailing"]],template:function(t,i){t&1&&(ne(tl),H(0,"span",0),s(1,"span",1)(2,"span",2),E(3,nl,2,0,"span",3),s(4,"span",4),Z(5),H(6,"span",5),c()()(),E(7,al,2,0,"span",6)),t&2&&(l(3),S(i.leadingIcon?3:-1),l(4),S(i._hasTrailingIcon()?7:-1))},dependencies:[io],styles:[`.mdc-evolution-chip,
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
`],encapsulation:2,changeDetection:0})}return n})();var $n=(()=>{class n{_elementRef=d(U);_document=d(tt);constructor(){}initialize(e){this.getNativeElement().focus(),this.setValue(e)}getNativeElement(){return this._elementRef.nativeElement}setValue(e){this.getNativeElement().textContent=e,this._moveCursorToEndOfInput()}getValue(){return this.getNativeElement().textContent||""}_moveCursorToEndOfInput(){let e=this._document.createRange();e.selectNodeContents(this.getNativeElement()),e.collapse(!1);let t=window.getSelection();t.removeAllRanges(),t.addRange(e)}static \u0275fac=function(t){return new(t||n)};static \u0275dir=$({type:n,selectors:[["span","matChipEditInput",""]],hostAttrs:["role","textbox","tabindex","-1","contenteditable","true",1,"mat-chip-edit-input"]})}return n})(),Zn=(()=>{class n extends qn{basicChipAttrName="mat-basic-chip-row";_renderer=d(at);_cleanupMousedown;_editStartPending=!1;editable=!1;edited=new R;defaultEditInput;contentEditInput;_alreadyFocused=!1;_isEditing=!1;constructor(){super(),this.role="row",this._onBlur.pipe(K(this.destroyed)).subscribe(()=>{this._isEditing&&!this._editStartPending&&this._onEditFinish(),this._alreadyFocused=!1})}ngAfterViewInit(){super.ngAfterViewInit(),this._cleanupMousedown=this._ngZone.runOutsideAngular(()=>this._renderer.listen(this._elementRef.nativeElement,"mousedown",()=>{this._alreadyFocused=this._hasFocus()}))}ngOnDestroy(){super.ngOnDestroy(),this._cleanupMousedown?.()}_hasLeadingActionIcon(){return!this._isEditing&&!!this.editIcon}_hasTrailingIcon(){return!this._isEditing&&super._hasTrailingIcon()}_handleFocus(){!this._isEditing&&!this.disabled&&this.focus()}_handleKeydown(e){e.keyCode===13&&!this.disabled?this._isEditing?(e.preventDefault(),this._onEditFinish()):this.editable&&this._startEditing(e):this._isEditing?e.stopPropagation():super._handleKeydown(e)}_handleClick(e){!this.disabled&&this.editable&&!this._isEditing&&this._alreadyFocused&&(e.preventDefault(),e.stopPropagation(),this._startEditing(e))}_handleDoubleclick(e){!this.disabled&&this.editable&&this._startEditing(e)}_edit(){this._changeDetectorRef.markForCheck(),this._startEditing()}_startEditing(e){if(!this.primaryAction||this.removeIcon&&e&&this._getSourceAction(e.target)===this.removeIcon)return;let t=this.value;this._isEditing=this._editStartPending=!0,Fe(()=>{this._getEditInput().initialize(t),setTimeout(()=>this._ngZone.run(()=>this._editStartPending=!1))},{injector:this._injector})}_onEditFinish(){this._isEditing=this._editStartPending=!1,this.edited.emit({chip:this,value:this._getEditInput().getValue()}),(this._document.activeElement===this._getEditInput().getNativeElement()||this._document.activeElement===this._document.body)&&this.primaryAction.focus()}_isRippleDisabled(){return super._isRippleDisabled()||this._isEditing}_getEditInput(){return this.contentEditInput||this.defaultEditInput}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=N({type:n,selectors:[["mat-chip-row"],["","mat-chip-row",""],["mat-basic-chip-row"],["","mat-basic-chip-row",""]],contentQueries:function(t,i,r){if(t&1&&De(r,$n,5),t&2){let o;V(o=L())&&(i.contentEditInput=o.first)}},viewQuery:function(t,i){if(t&1&&ie($n,5),t&2){let r;V(r=L())&&(i.defaultEditInput=r.first)}},hostAttrs:[1,"mat-mdc-chip","mat-mdc-chip-row","mdc-evolution-chip"],hostVars:29,hostBindings:function(t,i){t&1&&x("focus",function(){return i._handleFocus()})("click",function(o){return i._hasInteractiveActions()?i._handleClick(o):null})("dblclick",function(o){return i._handleDoubleclick(o)}),t&2&&(de("id",i.id),F("tabindex",i.disabled?null:-1)("aria-label",null)("aria-description",null)("role",i.role),z("mat-mdc-chip-with-avatar",i.leadingIcon)("mat-mdc-chip-disabled",i.disabled)("mat-mdc-chip-editing",i._isEditing)("mat-mdc-chip-editable",i.editable)("mdc-evolution-chip--disabled",i.disabled)("mdc-evolution-chip--with-leading-action",i._hasLeadingActionIcon())("mdc-evolution-chip--with-trailing-action",i._hasTrailingIcon())("mdc-evolution-chip--with-primary-graphic",i.leadingIcon)("mdc-evolution-chip--with-primary-icon",i.leadingIcon)("mdc-evolution-chip--with-avatar",i.leadingIcon)("mat-mdc-chip-highlighted",i.highlighted)("mat-mdc-chip-with-trailing-icon",i._hasTrailingIcon()))},inputs:{editable:"editable"},outputs:{edited:"edited"},features:[se([{provide:qn,useExisting:n},{provide:Wn,useExisting:n}]),ge],ngContentSelectors:sl,decls:9,vars:8,consts:[[1,"mat-mdc-chip-focus-overlay"],["role","gridcell",1,"mdc-evolution-chip__cell","mdc-evolution-chip__cell--leading"],["role","gridcell","matChipAction","",1,"mdc-evolution-chip__cell","mdc-evolution-chip__cell--primary",3,"disabled"],[1,"mdc-evolution-chip__graphic","mat-mdc-chip-graphic"],[1,"mdc-evolution-chip__text-label","mat-mdc-chip-action-label"],["aria-hidden","true",1,"mat-mdc-chip-primary-focus-indicator","mat-focus-indicator"],["role","gridcell",1,"mdc-evolution-chip__cell","mdc-evolution-chip__cell--trailing"],["matChipEditInput",""]],template:function(t,i){t&1&&(ne(ol),E(0,ll,1,0,"span",0),E(1,cl,2,0,"span",1),s(2,"span",2),E(3,dl,2,0,"span",3),s(4,"span",4),E(5,hl,2,1)(6,ul,1,0),H(7,"span",5),c()(),E(8,gl,2,0,"span",6)),t&2&&(S(i._isEditing?-1:0),l(),S(i._hasLeadingActionIcon()?1:-1),l(),C("disabled",i.disabled),F("aria-description",i.ariaDescription)("aria-label",i.ariaLabel),l(),S(i.leadingIcon?3:-1),l(2),S(i._isEditing?5:6),l(3),S(i._hasTrailingIcon()?8:-1))},dependencies:[Xn,$n],styles:[rl],encapsulation:2,changeDetection:0})}return n})(),fl=(()=>{class n{_elementRef=d(U);_changeDetectorRef=d(J);_dir=d(Re,{optional:!0});_lastDestroyedFocusedChipIndex=null;_keyManager;_destroyed=new j;_defaultRole="presentation";get chipFocusChanges(){return this._getChipStream(e=>e._onFocus)}get chipDestroyedChanges(){return this._getChipStream(e=>e.destroyed)}get chipRemovedChanges(){return this._getChipStream(e=>e.removed)}get disabled(){return this._disabled}set disabled(e){this._disabled=e,this._syncChipsState()}_disabled=!1;get empty(){return!this._chips||this._chips.length===0}get role(){return this._explicitRole?this._explicitRole:this.empty?null:this._defaultRole}tabIndex=0;set role(e){this._explicitRole=e}_explicitRole=null;get focused(){return this._hasFocusedChip()}_chips;_chipActions=new Dt;constructor(){}ngAfterViewInit(){this._setUpFocusManagement(),this._trackChipSetChanges(),this._trackDestroyedFocusedChip()}ngOnDestroy(){this._keyManager?.destroy(),this._chipActions.destroy(),this._destroyed.next(),this._destroyed.complete()}_hasFocusedChip(){return this._chips&&this._chips.some(e=>e._hasFocus())}_syncChipsState(){this._chips?.forEach(e=>{e._chipListDisabled=this._disabled,e._changeDetectorRef.markForCheck()})}focus(){}_handleKeydown(e){this._originatesFromChip(e)&&this._keyManager.onKeydown(e)}_isValidIndex(e){return e>=0&&e<this._chips.length}_allowFocusEscape(){let e=this._elementRef.nativeElement.tabIndex;e!==-1&&(this._elementRef.nativeElement.tabIndex=-1,setTimeout(()=>this._elementRef.nativeElement.tabIndex=e))}_getChipStream(e){return this._chips.changes.pipe(xe(null),xi(()=>pt(...this._chips.map(e))))}_originatesFromChip(e){let t=e.target;for(;t&&t!==this._elementRef.nativeElement;){if(t.classList.contains("mat-mdc-chip"))return!0;t=t.parentElement}return!1}_setUpFocusManagement(){this._chips.changes.pipe(xe(this._chips)).subscribe(e=>{let t=[];e.forEach(i=>i._getActions().forEach(r=>t.push(r))),this._chipActions.reset(t),this._chipActions.notifyOnChanges()}),this._keyManager=new Oi(this._chipActions).withVerticalOrientation().withHorizontalOrientation(this._dir?this._dir.value:"ltr").withHomeAndEnd().skipPredicate(e=>this._skipPredicate(e)),this.chipFocusChanges.pipe(K(this._destroyed)).subscribe(({chip:e})=>{let t=e._getSourceAction(document.activeElement);t&&this._keyManager.updateActiveItem(t)}),this._dir?.change.pipe(K(this._destroyed)).subscribe(e=>this._keyManager.withHorizontalOrientation(e))}_skipPredicate(e){return e.disabled}_trackChipSetChanges(){this._chips.changes.pipe(xe(null),K(this._destroyed)).subscribe(()=>{this.disabled&&Promise.resolve().then(()=>this._syncChipsState()),this._redirectDestroyedChipFocus()})}_trackDestroyedFocusedChip(){this.chipDestroyedChanges.pipe(K(this._destroyed)).subscribe(e=>{let i=this._chips.toArray().indexOf(e.chip),r=e.chip._hasFocus(),o=e.chip._hadFocusOnRemove&&this._keyManager.activeItem&&e.chip._getActions().includes(this._keyManager.activeItem),p=r||o;this._isValidIndex(i)&&p&&(this._lastDestroyedFocusedChipIndex=i)})}_redirectDestroyedChipFocus(){if(this._lastDestroyedFocusedChipIndex!=null){if(this._chips.length){let e=Math.min(this._lastDestroyedFocusedChipIndex,this._chips.length-1),t=this._chips.toArray()[e];t.disabled?this._chips.length===1?this.focus():this._keyManager.setPreviousItemActive():t.focus()}else this.focus();this._lastDestroyedFocusedChipIndex=null}}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=N({type:n,selectors:[["mat-chip-set"]],contentQueries:function(t,i,r){if(t&1&&De(r,qn,5),t&2){let o;V(o=L())&&(i._chips=o)}},hostAttrs:[1,"mat-mdc-chip-set","mdc-evolution-chip-set"],hostVars:1,hostBindings:function(t,i){t&1&&x("keydown",function(o){return i._handleKeydown(o)}),t&2&&F("role",i.role)},inputs:{disabled:[2,"disabled","disabled",B],role:"role",tabIndex:[2,"tabIndex","tabIndex",e=>e==null?0:Mt(e)]},ngContentSelectors:eo,decls:2,vars:0,consts:[["role","presentation",1,"mdc-evolution-chip-set__chips"]],template:function(t,i){t&1&&(ne(),_e(0,"div",0),Z(1),we())},styles:[`.mat-mdc-chip-set {
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
`],encapsulation:2,changeDetection:0})}return n})();var Kn=class{source;value;constructor(a,e){this.source=a,this.value=e}},ao=(()=>{class n extends fl{ngControl=d(En,{optional:!0,self:!0});controlType="mat-chip-grid";_chipInput;_defaultRole="grid";_errorStateTracker;_uid=d(he).getId("mat-chip-grid-");_ariaDescribedbyIds=[];_onTouched=()=>{};_onChange=()=>{};get disabled(){return this.ngControl?!!this.ngControl.disabled:this._disabled}set disabled(e){this._disabled=e,this._syncChipsState(),this.stateChanges.next()}get id(){return this._chipInput?this._chipInput.id:this._uid}get empty(){return(!this._chipInput||this._chipInput.empty)&&(!this._chips||this._chips.length===0)}get placeholder(){return this._chipInput?this._chipInput.placeholder:this._placeholder}set placeholder(e){this._placeholder=e,this.stateChanges.next()}_placeholder="";get focused(){return this._chipInput?.focused||this._hasFocusedChip()}get required(){return this._required??this.ngControl?.control?.hasValidator(zt.required)??!1}set required(e){this._required=e,this.stateChanges.next()}_required;get shouldLabelFloat(){return!this.empty||this.focused}get value(){return this._value}set value(e){this._value=e}_value=[];get errorStateMatcher(){return this._errorStateTracker.matcher}set errorStateMatcher(e){this._errorStateTracker.matcher=e}get chipBlurChanges(){return this._getChipStream(e=>e._onBlur)}change=new R;valueChange=new R;_chips=void 0;stateChanges=new j;get errorState(){return this._errorStateTracker.errorState}set errorState(e){this._errorStateTracker.errorState=e}constructor(){super();let e=d(Sn,{optional:!0}),t=d(si,{optional:!0}),i=d(Et);this.ngControl&&(this.ngControl.valueAccessor=this),this._errorStateTracker=new yr(i,this.ngControl,t,e,this.stateChanges)}ngAfterContentInit(){this.chipBlurChanges.pipe(K(this._destroyed)).subscribe(()=>{this._blur(),this.stateChanges.next()}),pt(this.chipFocusChanges,this._chips.changes).pipe(K(this._destroyed)).subscribe(()=>this.stateChanges.next())}ngDoCheck(){this.ngControl&&this.updateErrorState()}ngOnDestroy(){super.ngOnDestroy(),this.stateChanges.complete()}registerInput(e){this._chipInput=e,this._chipInput.setDescribedByIds(this._ariaDescribedbyIds),this._elementRef.nativeElement.removeAttribute("aria-describedby")}onContainerClick(e){!this.disabled&&!this._originatesFromChip(e)&&this.focus()}focus(){if(!(this.disabled||this._chipInput?.focused)){if(!this._chips.length||this._chips.first.disabled){if(!this._chipInput)return;Promise.resolve().then(()=>this._chipInput.focus())}else{let e=this._keyManager.activeItem;e?e.focus():this._keyManager.setFirstItemActive()}this.stateChanges.next()}}get describedByIds(){if(this._chipInput)return this._chipInput.describedByIds||[];let e=this._elementRef.nativeElement.getAttribute("aria-describedby");return e?e.split(" "):[]}setDescribedByIds(e){this._ariaDescribedbyIds=e,this._chipInput?this._chipInput.setDescribedByIds(e):e.length?this._elementRef.nativeElement.setAttribute("aria-describedby",e.join(" ")):this._elementRef.nativeElement.removeAttribute("aria-describedby")}writeValue(e){this._value=e}registerOnChange(e){this._onChange=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this.disabled=e,this.stateChanges.next()}updateErrorState(){this._errorStateTracker.updateErrorState()}_blur(){this.disabled||setTimeout(()=>{this.focused||(this._propagateChanges(),this._markAsTouched())})}_allowFocusEscape(){this._chipInput?.focused||super._allowFocusEscape()}_handleKeydown(e){let t=e.keyCode,i=this._keyManager.activeItem;if(t===9)this._chipInput?.focused&&me(e,"shiftKey")&&this._chips.length&&!this._chips.last.disabled?(e.preventDefault(),i?this._keyManager.setActiveItem(i):this._focusLastChip()):super._allowFocusEscape();else if(!this._chipInput?.focused)if((t===38||t===40)&&i){let r=this._chipActions.filter(g=>g._isPrimary===i._isPrimary&&!this._skipPredicate(g)),o=r.indexOf(i),p=e.keyCode===38?-1:1;e.preventDefault(),o>-1&&this._isValidIndex(o+p)&&this._keyManager.setActiveItem(r[o+p])}else super._handleKeydown(e);this.stateChanges.next()}_focusLastChip(){this._chips.length&&this._chips.last.focus()}_propagateChanges(){let e=this._chips.length?this._chips.toArray().map(t=>t.value):[];this._value=e,this.change.emit(new Kn(this,e)),this.valueChange.emit(e),this._onChange(e),this._changeDetectorRef.markForCheck()}_markAsTouched(){this._onTouched(),this._changeDetectorRef.markForCheck(),this.stateChanges.next()}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=N({type:n,selectors:[["mat-chip-grid"]],contentQueries:function(t,i,r){if(t&1&&De(r,Zn,5),t&2){let o;V(o=L())&&(i._chips=o)}},hostAttrs:[1,"mat-mdc-chip-set","mat-mdc-chip-grid","mdc-evolution-chip-set"],hostVars:10,hostBindings:function(t,i){t&1&&x("focus",function(){return i.focus()})("blur",function(){return i._blur()}),t&2&&(F("role",i.role)("tabindex",i.disabled||i._chips&&i._chips.length===0?-1:i.tabIndex)("aria-disabled",i.disabled.toString())("aria-invalid",i.errorState),z("mat-mdc-chip-list-disabled",i.disabled)("mat-mdc-chip-list-invalid",i.errorState)("mat-mdc-chip-list-required",i.required))},inputs:{disabled:[2,"disabled","disabled",B],placeholder:"placeholder",required:[2,"required","required",B],value:"value",errorStateMatcher:"errorStateMatcher"},outputs:{change:"change",valueChange:"valueChange"},features:[se([{provide:In,useExisting:n}]),ge],ngContentSelectors:eo,decls:2,vars:0,consts:[["role","presentation",1,"mdc-evolution-chip-set__chips"]],template:function(t,i){t&1&&(ne(),_e(0,"div",0),Z(1),we())},styles:[_l],encapsulation:2,changeDetection:0})}return n})(),ro=(()=>{class n{_elementRef=d(U);focused=!1;get chipGrid(){return this._chipGrid}set chipGrid(e){e&&(this._chipGrid=e,this._chipGrid.registerInput(this))}_chipGrid;addOnBlur=!1;separatorKeyCodes;chipEnd=new R;placeholder="";id=d(he).getId("mat-mdc-chip-list-input-");get disabled(){return this._disabled||this._chipGrid&&this._chipGrid.disabled}set disabled(e){this._disabled=e}_disabled=!1;readonly=!1;disabledInteractive;get empty(){return!this.inputElement.value}inputElement;constructor(){let e=d(to),t=d(Yi,{optional:!0});this.inputElement=this._elementRef.nativeElement,this.separatorKeyCodes=e.separatorKeyCodes,this.disabledInteractive=e.inputDisabledInteractive??!1,t&&this.inputElement.classList.add("mat-mdc-form-field-input-control")}ngOnChanges(){this._chipGrid.stateChanges.next()}ngOnDestroy(){this.chipEnd.complete()}_keydown(e){this.empty&&e.keyCode===8?(e.repeat||this._chipGrid._focusLastChip(),e.preventDefault()):this._emitChipEnd(e)}_blur(){this.addOnBlur&&this._emitChipEnd(),this.focused=!1,this._chipGrid.focused||this._chipGrid._blur(),this._chipGrid.stateChanges.next()}_focus(){this.focused=!0,this._chipGrid.stateChanges.next()}_emitChipEnd(e){(!e||this._isSeparatorKey(e)&&!e.repeat)&&(this.chipEnd.emit({input:this.inputElement,value:this.inputElement.value,chipInput:this}),e?.preventDefault())}_onInput(){this._chipGrid.stateChanges.next()}focus(){this.inputElement.focus()}clear(){this.inputElement.value=""}get describedByIds(){return this._elementRef.nativeElement.getAttribute("aria-describedby")?.split(" ")||[]}setDescribedByIds(e){let t=this._elementRef.nativeElement;e.length?t.setAttribute("aria-describedby",e.join(" ")):t.removeAttribute("aria-describedby")}_isSeparatorKey(e){if(!this.separatorKeyCodes)return!1;for(let t of this.separatorKeyCodes){let i,r;typeof t=="number"?(i=t,r=null):(i=t.keyCode,r=t.modifiers);let o=r?.length?me(e,...r):!me(e);if(i===e.keyCode&&o)return!0}return!1}_getReadonlyAttribute(){return this.readonly||this.disabled&&this.disabledInteractive?"true":null}static \u0275fac=function(t){return new(t||n)};static \u0275dir=$({type:n,selectors:[["input","matChipInputFor",""]],hostAttrs:[1,"mat-mdc-chip-input","mat-mdc-input-element","mdc-text-field__input","mat-input-element"],hostVars:8,hostBindings:function(t,i){t&1&&x("keydown",function(o){return i._keydown(o)})("blur",function(){return i._blur()})("focus",function(){return i._focus()})("input",function(){return i._onInput()}),t&2&&(de("id",i.id),F("disabled",i.disabled&&!i.disabledInteractive?"":null)("placeholder",i.placeholder||null)("aria-invalid",i._chipGrid&&i._chipGrid.ngControl?i._chipGrid.ngControl.invalid:null)("aria-required",i._chipGrid&&i._chipGrid.required||null)("aria-disabled",i.disabled&&i.disabledInteractive?"true":null)("readonly",i._getReadonlyAttribute())("required",i._chipGrid&&i._chipGrid.required||null))},inputs:{chipGrid:[0,"matChipInputFor","chipGrid"],addOnBlur:[2,"matChipInputAddOnBlur","addOnBlur",B],separatorKeyCodes:[0,"matChipInputSeparatorKeyCodes","separatorKeyCodes"],placeholder:"placeholder",id:"id",disabled:[2,"disabled","disabled",B],readonly:[2,"readonly","readonly",B],disabledInteractive:[2,"matChipInputDisabledInteractive","disabledInteractive",B]},outputs:{chipEnd:"matChipInputTokenEnd"},exportAs:["matChipInput","matChipInputFor"],features:[Ce]})}return n})();var oo=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=Ie({type:n});static \u0275inj=Ee({providers:[Et,{provide:to,useValue:{separatorKeyCodes:[13]}}],imports:[Lt,ze]})}return n})();function bl(n,a){if(n&1){let e=Y();s(0,"div",1)(1,"button",2),x("click",function(){O(e);let i=u();return P(i.action())}),m(2),c()()}if(n&2){let e=u();l(2),te(" ",e.data.action," ")}}var yl=["label"];function xl(n,a){}var Cl=Math.pow(2,31)-1,St=class{_overlayRef;instance;containerInstance;_afterDismissed=new j;_afterOpened=new j;_onAction=new j;_durationTimeoutId;_dismissedByAction=!1;constructor(a,e){this._overlayRef=e,this.containerInstance=a,a._onExit.subscribe(()=>this._finishDismiss())}dismiss(){this._afterDismissed.closed||this.containerInstance.exit(),clearTimeout(this._durationTimeoutId)}dismissWithAction(){this._onAction.closed||(this._dismissedByAction=!0,this._onAction.next(),this._onAction.complete(),this.dismiss()),clearTimeout(this._durationTimeoutId)}closeWithAction(){this.dismissWithAction()}_dismissAfter(a){this._durationTimeoutId=setTimeout(()=>this.dismiss(),Math.min(a,Cl))}_open(){this._afterOpened.closed||(this._afterOpened.next(),this._afterOpened.complete())}_finishDismiss(){this._overlayRef.dispose(),this._onAction.closed||this._onAction.complete(),this._afterDismissed.next({dismissedByAction:this._dismissedByAction}),this._afterDismissed.complete(),this._dismissedByAction=!1}afterDismissed(){return this._afterDismissed}afterOpened(){return this.containerInstance._onEnter}onAction(){return this._onAction}},tn=new W("MatSnackBarData"),Kt=class{politeness="polite";announcementMessage="";viewContainerRef;duration=0;panelClass;direction;data=null;horizontalPosition="center";verticalPosition="bottom"},wl=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275dir=$({type:n,selectors:[["","matSnackBarLabel",""]],hostAttrs:[1,"mat-mdc-snack-bar-label","mdc-snackbar__label"]})}return n})(),Dl=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275dir=$({type:n,selectors:[["","matSnackBarActions",""]],hostAttrs:[1,"mat-mdc-snack-bar-actions","mdc-snackbar__actions"]})}return n})(),Ml=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275dir=$({type:n,selectors:[["","matSnackBarAction",""]],hostAttrs:[1,"mat-mdc-snack-bar-action","mdc-snackbar__action"]})}return n})(),kl=(()=>{class n{snackBarRef=d(St);data=d(tn);constructor(){}action(){this.snackBarRef.dismissWithAction()}get hasAction(){return!!this.data.action}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=N({type:n,selectors:[["simple-snack-bar"]],hostAttrs:[1,"mat-mdc-simple-snack-bar"],exportAs:["matSnackBar"],decls:3,vars:2,consts:[["matSnackBarLabel",""],["matSnackBarActions",""],["matButton","","matSnackBarAction","",3,"click"]],template:function(t,i){t&1&&(s(0,"div",0),m(1),c(),E(2,bl,3,1,"div",1)),t&2&&(l(),te(" ",i.data.message,`
`),l(),S(i.hasAction?2:-1))},dependencies:[Ve,wl,Dl,Ml],styles:[`.mat-mdc-simple-snack-bar {
  display: flex;
}
.mat-mdc-simple-snack-bar .mat-mdc-snack-bar-label {
  max-height: 50vh;
  overflow: auto;
}
`],encapsulation:2,changeDetection:0})}return n})(),Jn="_mat-snack-bar-enter",ea="_mat-snack-bar-exit",El=(()=>{class n extends Xa{_ngZone=d($e);_elementRef=d(U);_changeDetectorRef=d(J);_platform=d(gt);_animationsDisabled=ue();snackBarConfig=d(Kt);_document=d(tt);_trackedModals=new Set;_enterFallback;_exitFallback;_injector=d(Se);_announceDelay=150;_announceTimeoutId;_destroyed=!1;_portalOutlet;_onAnnounce=new j;_onExit=new j;_onEnter=new j;_animationState="void";_live;_label;_role;_liveElementId=d(he).getId("mat-snack-bar-container-live-");constructor(){super();let e=this.snackBarConfig;e.politeness==="assertive"&&!e.announcementMessage?this._live="assertive":e.politeness==="off"?this._live="off":this._live="polite",this._platform.FIREFOX&&(this._live==="polite"&&(this._role="status"),this._live==="assertive"&&(this._role="alert"))}attachComponentPortal(e){this._assertNotAttached();let t=this._portalOutlet.attachComponentPortal(e);return this._afterPortalAttached(),t}attachTemplatePortal(e){this._assertNotAttached();let t=this._portalOutlet.attachTemplatePortal(e);return this._afterPortalAttached(),t}attachDomPortal=e=>{this._assertNotAttached();let t=this._portalOutlet.attachDomPortal(e);return this._afterPortalAttached(),t};onAnimationEnd(e){e===ea?this._completeExit():e===Jn&&(clearTimeout(this._enterFallback),this._ngZone.run(()=>{this._onEnter.next(),this._onEnter.complete()}))}enter(){this._destroyed||(this._animationState="visible",this._changeDetectorRef.markForCheck(),this._changeDetectorRef.detectChanges(),this._screenReaderAnnounce(),this._animationsDisabled?Fe(()=>{this._ngZone.run(()=>queueMicrotask(()=>this.onAnimationEnd(Jn)))},{injector:this._injector}):(clearTimeout(this._enterFallback),this._enterFallback=setTimeout(()=>{this._elementRef.nativeElement.classList.add("mat-snack-bar-fallback-visible"),this.onAnimationEnd(Jn)},200)))}exit(){return this._destroyed?dt(void 0):(this._ngZone.run(()=>{this._animationState="hidden",this._changeDetectorRef.markForCheck(),this._elementRef.nativeElement.setAttribute("mat-exit",""),clearTimeout(this._announceTimeoutId),this._animationsDisabled?Fe(()=>{this._ngZone.run(()=>queueMicrotask(()=>this.onAnimationEnd(ea)))},{injector:this._injector}):(clearTimeout(this._exitFallback),this._exitFallback=setTimeout(()=>this.onAnimationEnd(ea),200))}),this._onExit)}ngOnDestroy(){this._destroyed=!0,this._clearFromModals(),this._completeExit()}_completeExit(){clearTimeout(this._exitFallback),queueMicrotask(()=>{this._onExit.next(),this._onExit.complete()})}_afterPortalAttached(){let e=this._elementRef.nativeElement,t=this.snackBarConfig.panelClass;t&&(Array.isArray(t)?t.forEach(o=>e.classList.add(o)):e.classList.add(t)),this._exposeToModals();let i=this._label.nativeElement,r="mdc-snackbar__label";i.classList.toggle(r,!i.querySelector(`.${r}`))}_exposeToModals(){let e=this._liveElementId,t=this._document.querySelectorAll('body > .cdk-overlay-container [aria-modal="true"]');for(let i=0;i<t.length;i++){let r=t[i],o=r.getAttribute("aria-owns");this._trackedModals.add(r),o?o.indexOf(e)===-1&&r.setAttribute("aria-owns",o+" "+e):r.setAttribute("aria-owns",e)}}_clearFromModals(){this._trackedModals.forEach(e=>{let t=e.getAttribute("aria-owns");if(t){let i=t.replace(this._liveElementId,"").trim();i.length>0?e.setAttribute("aria-owns",i):e.removeAttribute("aria-owns")}}),this._trackedModals.clear()}_assertNotAttached(){this._portalOutlet.hasAttached()}_screenReaderAnnounce(){this._announceTimeoutId||this._ngZone.runOutsideAngular(()=>{this._announceTimeoutId=setTimeout(()=>{if(this._destroyed)return;let e=this._elementRef.nativeElement,t=e.querySelector("[aria-hidden]"),i=e.querySelector("[aria-live]");if(t&&i){let r=null;this._platform.isBrowser&&document.activeElement instanceof HTMLElement&&t.contains(document.activeElement)&&(r=document.activeElement),t.removeAttribute("aria-hidden"),i.appendChild(t),r?.focus(),this._onAnnounce.next(),this._onAnnounce.complete()}},this._announceDelay)})}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=N({type:n,selectors:[["mat-snack-bar-container"]],viewQuery:function(t,i){if(t&1&&ie(ft,7)(yl,7),t&2){let r;V(r=L())&&(i._portalOutlet=r.first),V(r=L())&&(i._label=r.first)}},hostAttrs:[1,"mdc-snackbar","mat-mdc-snack-bar-container"],hostVars:6,hostBindings:function(t,i){t&1&&x("animationend",function(o){return i.onAnimationEnd(o.animationName)})("animationcancel",function(o){return i.onAnimationEnd(o.animationName)}),t&2&&z("mat-snack-bar-container-enter",i._animationState==="visible")("mat-snack-bar-container-exit",i._animationState==="hidden")("mat-snack-bar-container-animations-enabled",!i._animationsDisabled)},features:[ge],decls:6,vars:3,consts:[["label",""],[1,"mdc-snackbar__surface","mat-mdc-snackbar-surface"],[1,"mat-mdc-snack-bar-label"],["aria-hidden","true"],["cdkPortalOutlet",""]],template:function(t,i){t&1&&(s(0,"div",1)(1,"div",2,0)(3,"div",3),rt(4,xl,0,0,"ng-template",4),c(),H(5,"div"),c()()),t&2&&(l(5),F("aria-live",i._live)("role",i._role)("id",i._liveElementId))},dependencies:[ft],styles:[`@keyframes _mat-snack-bar-enter {
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
`],encapsulation:2})}return n})(),Sl=new W("mat-snack-bar-default-options",{providedIn:"root",factory:()=>new Kt}),so=(()=>{class n{_live=d(Ga);_injector=d(Se);_breakpointObserver=d(Ha);_parentSnackBar=d(n,{optional:!0,skipSelf:!0});_defaultConfig=d(Sl);_animationsDisabled=ue();_snackBarRefAtThisLevel=null;simpleSnackBarComponent=kl;snackBarContainerComponent=El;handsetCssClass="mat-mdc-snack-bar-handset";get _openedSnackBarRef(){let e=this._parentSnackBar;return e?e._openedSnackBarRef:this._snackBarRefAtThisLevel}set _openedSnackBarRef(e){this._parentSnackBar?this._parentSnackBar._openedSnackBarRef=e:this._snackBarRefAtThisLevel=e}constructor(){}openFromComponent(e,t){return this._attach(e,t)}openFromTemplate(e,t){return this._attach(e,t)}open(e,t="",i){let r=X(X({},this._defaultConfig),i);return r.data={message:e,action:t},r.announcementMessage===e&&(r.announcementMessage=void 0),this.openFromComponent(this.simpleSnackBarComponent,r)}dismiss(){this._openedSnackBarRef&&this._openedSnackBarRef.dismiss()}ngOnDestroy(){this._snackBarRefAtThisLevel&&this._snackBarRefAtThisLevel.dismiss()}_attachSnackBarContainer(e,t){let i=t&&t.viewContainerRef&&t.viewContainerRef.injector,r=Se.create({parent:i||this._injector,providers:[{provide:Kt,useValue:t}]}),o=new _t(this.snackBarContainerComponent,t.viewContainerRef,r),p=e.attach(o);return p.instance.snackBarConfig=t,p.instance}_attach(e,t){let i=X(X(X({},new Kt),this._defaultConfig),t),r=this._createOverlay(i),o=this._attachSnackBarContainer(r,i),p=new St(o,r);if(e instanceof nt){let g=new ri(e,null,{$implicit:i.data,snackBarRef:p});p.instance=o.attachTemplatePortal(g)}else{let g=this._createInjector(i,p),h=new _t(e,void 0,g),_=o.attachComponentPortal(h);p.instance=_.instance}return this._breakpointObserver.observe(Ua.HandsetPortrait).pipe(K(r.detachments())).subscribe(g=>{r.overlayElement.classList.toggle(this.handsetCssClass,g.matches)}),i.announcementMessage&&o._onAnnounce.subscribe(()=>{this._live.announce(i.announcementMessage,i.politeness)}),this._animateSnackBar(p,i),this._openedSnackBarRef=p,this._openedSnackBarRef}_animateSnackBar(e,t){e.afterDismissed().subscribe(()=>{this._openedSnackBarRef==e&&(this._openedSnackBarRef=null),t.announcementMessage&&this._live.clear()}),t.duration&&t.duration>0&&e.afterOpened().subscribe(()=>e._dismissAfter(t.duration)),this._openedSnackBarRef?(this._openedSnackBarRef.afterDismissed().subscribe(()=>{e.containerInstance.enter()}),this._openedSnackBarRef.dismiss()):e.containerInstance.enter()}_createOverlay(e){let t=new Fi;t.direction=e.direction;let i=Vi(this._injector),r=e.direction==="rtl",o=e.horizontalPosition==="left"||e.horizontalPosition==="start"&&!r||e.horizontalPosition==="end"&&r,p=!o&&e.horizontalPosition!=="center";return o?i.left("0"):p?i.right("0"):i.centerHorizontally(),e.verticalPosition==="top"?i.top("0"):i.bottom("0"),t.positionStrategy=i,t.disableAnimations=this._animationsDisabled,Nt(this._injector,t)}_createInjector(e,t){let i=e&&e.viewContainerRef&&e.viewContainerRef.injector;return Se.create({parent:i||this._injector,providers:[{provide:St,useValue:t},{provide:tn,useValue:e.data}]})}static \u0275fac=function(t){return new(t||n)};static \u0275prov=ke({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var Il={info:"info",warning:"warning",error:"error"},nn=class n{data=d(tn);snackBarRef=d(St);icon=Il[this.data.severity];close(){this.snackBarRef.dismiss()}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=N({type:n,selectors:[["app-toast-message"]],decls:8,vars:4,consts:[[1,"toast-content"],[1,"toast-icon"],[1,"toast-message"],["type","button","aria-label","Dismiss",1,"toast-close",3,"click"]],template:function(e,t){e&1&&(s(0,"div",0)(1,"mat-icon",1),m(2),c(),s(3,"span",2),m(4),c(),s(5,"button",3),x("click",function(){return t.close()}),s(6,"mat-icon"),m(7,"close"),c()()()),e&2&&(fe("toast-"+t.data.severity),l(2),A(t.icon),l(2),A(t.data.message))},dependencies:[Oe,Ae],styles:[".toast-content[_ngcontent-%COMP%]{display:flex;align-items:center;gap:10px;padding:10px 12px;border-radius:8px;color:#fff;min-width:260px;max-width:420px;box-shadow:0 4px 12px #0003}.toast-icon[_ngcontent-%COMP%]{flex:0 0 auto}.toast-message[_ngcontent-%COMP%]{flex:1 1 auto;font-size:14px;line-height:1.4;word-break:break-word}.toast-close[_ngcontent-%COMP%]{flex:0 0 auto;background:none;border:none;padding:4px;margin:-4px -4px -4px 0;cursor:pointer;display:flex;align-items:center;color:inherit;opacity:.85}.toast-close[_ngcontent-%COMP%]:hover{opacity:1}.toast-close[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:18px;width:18px;height:18px;line-height:18px}.toast-info[_ngcontent-%COMP%]{background-color:#1976d2}.toast-warning[_ngcontent-%COMP%]{background-color:#f57c00}.toast-error[_ngcontent-%COMP%]{background-color:#c62828}"]})};var Tl=2500,Wt=class n{snackBar=d(so);info(a){this.show(a,"info")}warning(a){this.show(a,"warning")}error(a){this.show(a,"error")}show(a,e="info"){this.snackBar.openFromComponent(nn,{data:{message:a,severity:e},duration:Tl,horizontalPosition:"end",verticalPosition:"top",panelClass:["app-toast-panel",`app-toast-panel-${e}`]})}static \u0275fac=function(e){return new(e||n)};static \u0275prov=ke({token:n,factory:n.\u0275fac,providedIn:"root"})};var lo={doc:{path:"M15.5,17H14L12,9.5L10,17H8.5L6.1,7H7.8L9.34,14.5L11.3,7H12.7L14.67,14.5L16.2,7H17.9M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3Z",color:"#2b579a"},docx:{path:"M15.5,17H14L12,9.5L10,17H8.5L6.1,7H7.8L9.34,14.5L11.3,7H12.7L14.67,14.5L16.2,7H17.9M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3Z",color:"#2b579a"},xlsx:{path:"M16.2,17H14.2L12,13.2L9.8,17H7.8L11,12L7.8,7H9.8L12,10.8L14.2,7H16.2L13,12M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3Z",color:"#217346"},xls:{path:"M16.2,17H14.2L12,13.2L9.8,17H7.8L11,12L7.8,7H9.8L12,10.8L14.2,7H16.2L13,12M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3Z",color:"#217346"},pdf:{path:"M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3M9.5 11.5C9.5 12.3 8.8 13 8 13H7V15H5.5V9H8C8.8 9 9.5 9.7 9.5 10.5V11.5M14.5 13.5C14.5 14.3 13.8 15 13 15H10.5V9H13C13.8 9 14.5 9.7 14.5 10.5V13.5M18.5 10.5H17V11.5H18.5V13H17V15H15.5V9H18.5V10.5M12 10.5H13V13.5H12V10.5M7 10.5H8V11.5H7V10.5Z",color:"#c62828"},ppt:{path:"M9.8,13.4H12.3C13.8,13.4 14.46,13.12 15.1,12.58C15.74,12.03 16,11.25 16,10.23C16,9.26 15.75,8.5 15.1,7.88C14.45,7.29 13.83,7 12.3,7H8V17H9.8V13.4M19,3A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5C3,3.89 3.9,3 5,3H19M9.8,12V8.4H12.1C12.76,8.4 13.27,8.65 13.6,9C13.93,9.35 14.1,9.72 14.1,10.24C14.1,10.8 13.92,11.19 13.6,11.5C13.28,11.81 12.9,12 12.22,12H9.8Z",color:"#d24726"},pptx:{path:"M9.8,13.4H12.3C13.8,13.4 14.46,13.12 15.1,12.58C15.74,12.03 16,11.25 16,10.23C16,9.26 15.75,8.5 15.1,7.88C14.45,7.29 13.83,7 12.3,7H8V17H9.8V13.4M19,3A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5C3,3.89 3.9,3 5,3H19M9.8,12V8.4H12.1C12.76,8.4 13.27,8.65 13.6,9C13.93,9.35 14.1,9.72 14.1,10.24C14.1,10.8 13.92,11.19 13.6,11.5C13.28,11.81 12.9,12 12.22,12H9.8Z",color:"#d24726"},mpp:{path:"M13,9H18.5L13,3.5V9M6,2H14L20,8V20A2,2 0 0,1 18,22H6C4.89,22 4,21.1 4,20V4C4,2.89 4.89,2 6,2M7,20H9V14H7V20M11,20H13V12H11V20M15,20H17V16H15V20Z",color:"#31855F"},jpg:{path:"M13,9H18.5L13,3.5V9M6,2H14L20,8V20A2,2 0 0,1 18,22H6C4.89,22 4,21.1 4,20V4C4,2.89 4.89,2 6,2M6,20H15L18,20V12L14,16L12,14L6,20M8,9A2,2 0 0,0 6,11A2,2 0 0,0 8,13A2,2 0 0,0 10,11A2,2 0 0,0 8,9Z",color:"#00897b"},jpeg:{path:"M13,9H18.5L13,3.5V9M6,2H14L20,8V20A2,2 0 0,1 18,22H6C4.89,22 4,21.1 4,20V4C4,2.89 4.89,2 6,2M6,20H15L18,20V12L14,16L12,14L6,20M8,9A2,2 0 0,0 6,11A2,2 0 0,0 8,13A2,2 0 0,0 10,11A2,2 0 0,0 8,9Z",color:"#00897b"},png:{path:"M13,9H18.5L13,3.5V9M6,2H14L20,8V20A2,2 0 0,1 18,22H6C4.89,22 4,21.1 4,20V4C4,2.89 4.89,2 6,2M6,20H15L18,20V12L14,16L12,14L6,20M8,9A2,2 0 0,0 6,11A2,2 0 0,0 8,13A2,2 0 0,0 10,11A2,2 0 0,0 8,9Z",color:"#00897b"},bmp:{path:"M13,9H18.5L13,3.5V9M6,2H14L20,8V20A2,2 0 0,1 18,22H6C4.89,22 4,21.1 4,20V4C4,2.89 4.89,2 6,2M6,20H15L18,20V12L14,16L12,14L6,20M8,9A2,2 0 0,0 6,11A2,2 0 0,0 8,13A2,2 0 0,0 10,11A2,2 0 0,0 8,9Z",color:"#00897b"},xml:{path:"M19 3H5C3.89 3 3 3.89 3 5V19C3 20.11 3.89 21 5 21H19C20.11 21 21 20.11 21 19V5C21 3.89 20.11 3 19 3M8 15H6.5L6 13L5.5 15H4L4.75 12L4 9H5.5L6 11L6.5 9H8L7.25 12L8 15M15.5 15H14V10.5H13V14H11.5V10.5H10.5V15H9V11C9 9.9 9.9 9 11 9H13.5C14.61 9 15.5 9.9 15.5 11V15M20 15H17V9H18.5V13.5H20V15Z",color:"#ef6c00"},json:{path:"M5,3H7V5H5V10A2,2 0 0,1 3,12A2,2 0 0,1 5,14V19H7V21H5C3.93,20.73 3,20.1 3,19V15A2,2 0 0,0 1,13H0V11H1A2,2 0 0,0 3,9V5A2,2 0 0,1 5,3M19,3A2,2 0 0,1 21,5V9A2,2 0 0,0 23,11H24V13H23A2,2 0 0,0 21,15V19A2,2 0 0,1 19,21H17V19H19V14A2,2 0 0,1 21,12A2,2 0 0,1 19,10V5H17V3H19M12,15A1,1 0 0,1 13,16A1,1 0 0,1 12,17A1,1 0 0,1 11,16A1,1 0 0,1 12,15M8,15A1,1 0 0,1 9,16A1,1 0 0,1 8,17A1,1 0 0,1 7,16A1,1 0 0,1 8,15M16,15A1,1 0 0,1 17,16A1,1 0 0,1 16,17A1,1 0 0,1 15,16A1,1 0 0,1 16,15Z",color:"#6d4c41"},reqif:{path:"M13,9H18.5L13,3.5V9M6,2H14L20,8V20A2,2 0 0,1 18,22H6C4.89,22 4,21.1 4,20V4C4,2.89 4.89,2 6,2M15,18V16H6V18H15M18,14V12H6V14H18Z",color:"#5e35b1"}};function an(n){return lo[n]??null}var ta=new Set(Object.keys(lo));var rn=class{bytes;view;sectorSize;miniSectorSize;headerRegionSize;miniStreamCutoff;firstDirSector;firstMiniFatSector;numMiniFatSectors;firstDifatSector;numFatSectors;difat;fat=[];miniFat=[];directory=[];miniStreamData=new Uint8Array(0);constructor(a){this.bytes=new Uint8Array(a),this.view=new DataView(a),this.parseHeader(),this.buildFat(),this.buildDirectory(),this.buildMiniFat(),this.buildMiniStream()}getAllEntries(){return this.directory.filter(a=>a.type!==0)}getRoot(){return this.directory[0]}getChildren(a){let e=[],t=i=>{if(i===-1)return;let r=this.directory[i];r&&(t(r.leftSibling),e.push(r),t(r.rightSibling))};return t(a.child),e}readStream(a){if(a.type!==2)throw new Error(`CFB directory entry "${a.name}" is not a stream`);return a.size===0?new Uint8Array(0):a.size<this.miniStreamCutoff?this.readFromMiniSectors(a.startSector,a.size):this.readFromRegularSectors(a.startSector,a.size)}parseHeader(){let a=[208,207,17,224,161,177,26,225];for(let i=0;i<8;i++)if(this.bytes[i]!==a[i])throw new Error("Not a valid .msg file: missing Compound File Binary signature");let e=this.view.getUint16(30,!0);this.sectorSize=1<<e;let t=this.view.getUint16(32,!0);this.miniSectorSize=1<<t,this.headerRegionSize=Math.max(512,this.sectorSize),this.numFatSectors=this.view.getUint32(44,!0),this.firstDirSector=this.view.getUint32(48,!0),this.miniStreamCutoff=this.view.getUint32(56,!0),this.firstMiniFatSector=this.view.getUint32(60,!0),this.numMiniFatSectors=this.view.getUint32(64,!0),this.firstDifatSector=this.view.getUint32(68,!0),this.difat=[];for(let i=0;i<109;i++)this.difat.push(this.view.getUint32(76+i*4,!0))}sectorOffset(a){return this.headerRegionSize+a*this.sectorSize}readSector(a){let e=this.sectorOffset(a);return this.bytes.slice(e,e+this.sectorSize)}buildFat(){let a=[];for(let i=0;i<109&&a.length<this.numFatSectors;i++){let r=this.difat[i];r!==4294967295&&a.push(r)}let e=this.firstDifatSector,t=this.sectorSize/4;for(;e!==4294967294&&e!==4294967295&&a.length<this.numFatSectors;){let i=this.readSector(e),r=new DataView(i.buffer,i.byteOffset,i.byteLength);for(let o=0;o<t-1&&a.length<this.numFatSectors;o++){let p=r.getUint32(o*4,!0);p!==4294967295&&a.push(p)}e=r.getUint32((t-1)*4,!0)}this.fat=[];for(let i of a){let r=this.readSector(i),o=new DataView(r.buffer,r.byteOffset,r.byteLength);for(let p=0;p<t;p++)this.fat.push(o.getUint32(p*4,!0))}}getChain(a,e){let t=[],i=a,r=0;for(;i!==4294967294&&i!==4294967295;)if(t.push(i),i=e[i],++r>2e6)throw new Error("Sector chain exceeded a sane length - file may be corrupt");return t}readFromRegularSectors(a,e){let t=this.getChain(a,this.fat),i=new Uint8Array(e),r=0;for(let o of t){let p=Math.min(this.sectorSize,e-r);if(p<=0)break;i.set(this.readSector(o).subarray(0,p),r),r+=p}return i}buildDirectory(){let a=this.getChain(this.firstDirSector,this.fat),e=this.sectorSize/128;this.directory=[];let t=0;for(let i of a){let r=this.readSector(i),o=new DataView(r.buffer,r.byteOffset,r.byteLength);for(let p=0;p<e;p++){let g=p*128,h=o.getUint16(g+64,!0),_="";if(h>2){let G=r.subarray(g,g+h-2);_=new TextDecoder("utf-16le").decode(G)}let M=r[g+66],w=o.getInt32(g+68,!0),v=o.getInt32(g+72,!0),I=o.getInt32(g+76,!0),y=o.getUint32(g+116,!0),f=o.getUint32(g+120,!0),k=o.getUint32(g+124,!0)*4294967296+f;this.directory.push({index:t,name:_,type:M,leftSibling:w,rightSibling:v,child:I,startSector:y,size:k}),t++}}}buildMiniFat(){if(this.miniFat=[],this.firstMiniFatSector===4294967294||this.numMiniFatSectors===0)return;let a=this.getChain(this.firstMiniFatSector,this.fat),e=this.sectorSize/4;for(let t of a){let i=this.readSector(t),r=new DataView(i.buffer,i.byteOffset,i.byteLength);for(let o=0;o<e;o++)this.miniFat.push(r.getUint32(o*4,!0))}}buildMiniStream(){let a=this.getRoot();if(!a||a.size===0){this.miniStreamData=new Uint8Array(0);return}this.miniStreamData=this.readFromRegularSectors(a.startSector,a.size)}readFromMiniSectors(a,e){let t=new Uint8Array(e),i=a,r=0,o=0;for(;i!==4294967294&&i!==4294967295&&r<e;){let p=i*this.miniSectorSize,g=Math.min(this.miniSectorSize,e-r);if(t.set(this.miniStreamData.subarray(p,p+g),r),r+=g,i=this.miniFat[i],++o>2e6)throw new Error("Mini sector chain exceeded a sane length - file may be corrupt")}return t}};var Al=55,Ol=3098,Pl=3103,Fl=23809,Rl=57,Vl=3590,Ll=4096,Nl=3093,Bl=12289,Hl=12291,zl=14846,Gl=14087,Yl=14084,jl=14081,Ul=14085,$l=3,Ql=64,ql=31,Kl=30,Wl=258,Xl=32,Zl=8,Jl=8,ec=1,tc=2,ic={0:"NO_ATTACHMENT",1:"ATTACH_BY_VALUE",2:"ATTACH_BY_REFERENCE",3:"ATTACH_BY_REF_RESOLVE",4:"ATTACH_BY_REF_ONLY",5:"ATTACH_EMBEDDED_MSG",6:"ATTACH_OLE"},nc=/^__recip_version1\.0_#[0-9A-Fa-f]{8}$/,ac=/^__attach_version1\.0_#[0-9A-Fa-f]{8}$/,on=class n{logger=d(Gt);async parse(a){try{let e=await a.arrayBuffer(),t=new rn(e),i=t.getRoot(),r=t.getChildren(i),o=this.readString(t,r,Al)??"",p=this.cleanDisplayName(this.readString(t,r,Ol)),g=this.readString(t,r,Fl)??this.readString(t,r,Pl)??"",h=this.normalizeBody(this.readString(t,r,Ll)??""),_=this.readPropertiesStream(t,r,Xl),M=this.readSysTimeIso(_,Rl)??this.readSysTimeIso(_,Vl),w=[],v=[];for(let b of r){if(b.type!==1||!nc.test(b.name))continue;let k=t.getChildren(b),G=this.readPropertiesStream(t,k,Zl),T=this.readLong(G,Nl),ee={name:this.cleanDisplayName(this.readString(t,k,Bl)),email:this.readString(t,k,zl)??this.readString(t,k,Hl)??""};T===ec?w.push(ee):T===tc&&v.push(ee)}let I=this.readAttachments(t,r);I.length>0&&this.logger.debugLog(`FileParserMsg: "${a.name}" has ${I.length} attachment(s)`,I.map(b=>({fileName:b.fileName,extension:b.extension,sizeBytes:b.bytes?b.bytes.length:null,attachMethod:b.attachMethod})));let y=I.filter(b=>b.bytes!==null).map(b=>({fileName:b.fileName,extension:b.extension,bytes:b.bytes})),f={subject:o,from:{name:p,email:g},to:w,cc:v,date:M,body:h,attachments:y};return this.logger.debugLog(`FileParserMsg: parsed "${a.name}"`,Ue(X({},f),{attachments:y.map(b=>b.fileName)})),f}catch(e){return this.logger.debugLog(`FileParserMsg: failed to parse "${a.name}"`,e),null}}readAttachments(a,e){let t=[];for(let i of e){if(i.type!==1||!ac.test(i.name))continue;let r=a.getChildren(i),o=this.readPropertiesStream(a,r,Jl),p=this.readLong(o,Ul),g=this.readString(a,r,Gl)??this.readString(a,r,Yl)??"(unnamed attachment)",h=this.readBinary(a,r,jl);t.push({fileName:g,extension:this.extractExtension(g),bytes:h,attachMethod:p!==null?ic[p]??`UNKNOWN(${p})`:"UNKNOWN"})}return t}extractExtension(a){let e=a.lastIndexOf(".");return e>=0?a.slice(e+1).toLowerCase():""}readBinary(a,e,t){let r=`__substg1.0_${t.toString(16).padStart(4,"0").toUpperCase()}${Wl.toString(16).padStart(4,"0").toUpperCase()}`,o=e.find(p=>p.type===2&&p.name===r);return o?a.readStream(o):null}cleanDisplayName(a){return a?a.replace(/\s*<[^>]*>\s*$/,"").trim():""}normalizeBody(a){let e=`\r
\r
 \r
\r
`,t=`\r
\r
`,i=a;for(;i.includes(e);)i=i.split(e).join(t);return i}readString(a,e,t){let i=t.toString(16).padStart(4,"0").toUpperCase(),r=`__substg1.0_${i}${ql.toString(16).padStart(4,"0").toUpperCase()}`,o=e.find(h=>h.type===2&&h.name===r);if(o){let h=a.readStream(o);return new TextDecoder("utf-16le").decode(h).replace(/\u0000+$/,"")}let p=`__substg1.0_${i}${Kl.toString(16).padStart(4,"0").toUpperCase()}`,g=e.find(h=>h.type===2&&h.name===p);if(g){let h=a.readStream(g);return new TextDecoder("windows-1252").decode(h).replace(/\u0000+$/,"")}return null}readPropertiesStream(a,e,t){let i=new Map,r=e.find(h=>h.type===2&&h.name==="__properties_version1.0");if(!r)return i;let o=a.readStream(r),p=new DataView(o.buffer,o.byteOffset,o.byteLength),g=Math.floor((o.length-t)/16);for(let h=0;h<g;h++){let _=t+h*16,M=p.getUint16(_,!0),w=p.getUint16(_+2,!0),v=o.slice(_+8,_+16);i.set(w,{propType:M,value:v})}return i}readLong(a,e){let t=a.get(e);return!t||t.propType!==$l?null:new DataView(t.value.buffer,t.value.byteOffset,t.value.byteLength).getInt32(0,!0)}readSysTimeIso(a,e){let t=a.get(e);if(!t||t.propType!==Ql)return null;let i=new DataView(t.value.buffer,t.value.byteOffset,t.value.byteLength),r=i.getUint32(0,!0),o=i.getUint32(4,!0),p=BigInt(o)<<32n|BigInt(r),h=Number((p-116444736000000000n)/10000n);return new Date(h).toISOString()}static \u0275fac=function(e){return new(e||n)};static \u0275prov=ke({token:n,factory:n.\u0275fac,providedIn:"root"})};var rc=(n,a)=>a.FileName;function oc(n,a){n&1&&(s(0,"div",2),m(1,"Nothing to show for this email."),c())}function sc(n,a){if(n&1&&(s(0,"div",6)(1,"span",7),m(2,"To"),c(),s(3,"span",8),m(4),c()()),n&2){let e=u(2);l(4),A(e.formatRecipients(e.data.to))}}function lc(n,a){if(n&1&&(s(0,"div",6)(1,"span",7),m(2,"Cc"),c(),s(3,"span",8),m(4),c()()),n&2){let e=u(2);l(4),A(e.formatRecipients(e.data.cc))}}function cc(n,a){if(n&1&&(s(0,"div",6)(1,"span",7),m(2,"Date"),c(),s(3,"span",8),m(4),Ft(5,"date"),c()()),n&2){let e=u(2);l(4),A(ii(5,1,e.data.date,"dd MMM y, HH:mm"))}}function dc(n,a){if(n&1){let e=Y();s(0,"div",14),x("click",function(){let i=O(e).$implicit,r=u(3);return P(r.openDocument(i))}),oe(),s(1,"svg",15),H(2,"path"),c(),Ke(),s(3,"span",16),m(4),c()()}if(n&2){let e,t,i=a.$implicit,r=u(3);l(2),F("d",(e=r.getFileTypeIcon(r.getDocExtension(i.FileName)))==null?null:e.path)("fill",(t=r.getFileTypeIcon(r.getDocExtension(i.FileName)))==null?null:t.color),l(2),A(i.OriginalName)}}function pc(n,a){if(n&1&&(s(0,"div",9)(1,"div",11),m(2,"Attachments"),c(),s(3,"div",12),Q(4,dc,5,3,"div",13,rc),c()()),n&2){let e=u(2);l(4),q(e.data.Docs)}}function mc(n,a){if(n&1&&(s(0,"div",5)(1,"div",6)(2,"span",7),m(3,"From"),c(),s(4,"span",8),m(5),c()(),E(6,sc,5,1,"div",6),E(7,lc,5,1,"div",6),E(8,cc,6,4,"div",6),c(),E(9,pc,6,0,"div",9),s(10,"div",10),m(11),c()),n&2){let e=u();l(5),ei("",e.data.from.name," <",e.data.from.email,">"),l(),S(e.data.to.length>0?6:-1),l(),S(e.data.cc.length>0?7:-1),l(),S(e.data.date?8:-1),l(),S(e.data.Docs&&e.data.Docs.length>0?9:-1),l(2),A(e.data.body)}}var sn=class n{data=d(vt);dataService=d(Ct);formatRecipients(a){return a.map(e=>e.name||e.email).join("; ")}getDocExtension(a){let e=a.toLowerCase().split(".");return e.length>1?e[e.length-1]:""}getFileTypeIcon(a){return an(a)}openDocument(a){let e=this.dataService.getDocumentViewUrl(a.FileName,a.SourceDocId);window.open(e,"_blank","noopener,noreferrer")}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=N({type:n,selectors:[["app-email-dialog"]],decls:12,vars:2,consts:[["mat-dialog-title",""],[1,"email-dialog-content"],[1,"no-content"],["align","end"],["mat-button","","mat-dialog-close",""],[1,"email-meta"],[1,"email-meta-row"],[1,"email-meta-label"],[1,"email-meta-value"],[1,"email-docs"],[1,"email-body"],[1,"email-docs-label"],[1,"email-docs-list"],[1,"email-doc-chip"],[1,"email-doc-chip",3,"click"],["viewBox","0 0 24 24",1,"doc-type-icon"],[1,"email-doc-name"]],template:function(e,t){e&1&&(s(0,"h2",0)(1,"mat-icon"),m(2,"mail"),c(),m(3),c(),s(4,"mat-dialog-content",1),E(5,oc,2,0,"div",2)(6,mc,12,7),c(),s(7,"mat-dialog-actions",3)(8,"button",4)(9,"mat-icon"),m(10,"close"),c(),m(11," Close "),c()()),e&2&&(l(3),te(" ",t.data.subject||"(no subject)",`
`),l(2),S(!t.data.body&&t.data.to.length===0&&t.data.cc.length===0&&!t.data.date?5:6))},dependencies:[xt,Li,bt,Ht,yt,Le,Ve,Oe,Ae,Ti],styles:["h2[mat-dialog-title][_ngcontent-%COMP%]{display:flex;align-items:center;gap:12px}mat-dialog-content[_ngcontent-%COMP%]{min-height:300px;max-height:60vh}.no-content[_ngcontent-%COMP%]{text-align:center;color:var(--mat-sys-on-surface-variant);padding:48px 16px;font-size:16px}.email-meta[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:1px;margin-bottom:8px}.email-meta-row[_ngcontent-%COMP%]{display:flex;gap:12px;padding:12px;background-color:var(--mat-sys-surface-container-low);font-size:13px;border-radius:4px}.email-meta-label[_ngcontent-%COMP%]{flex:0 0 40px;color:var(--mat-sys-primary);font-weight:600}.email-meta-value[_ngcontent-%COMP%]{color:var(--mat-sys-on-surface);word-break:break-word}.email-body[_ngcontent-%COMP%]{margin:8px 0 0;padding:12px;background-color:var(--mat-sys-surface-container);border-radius:4px;font-size:13px;line-height:1.5;color:var(--mat-sys-on-surface-variant);border-left:3px solid var(--mat-sys-primary);white-space:pre-wrap;word-break:break-word}.email-docs[_ngcontent-%COMP%]{margin-top:16px}.email-docs-label[_ngcontent-%COMP%]{font-size:12px;font-weight:600;color:var(--mat-sys-on-surface-variant);text-transform:uppercase;letter-spacing:.04em;margin-bottom:6px}.email-docs-list[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:4px}.email-doc-chip[_ngcontent-%COMP%]{display:flex;align-items:center;gap:8px;padding:8px 10px;border-radius:6px;background-color:var(--mat-sys-surface-container-low);border:1px solid var(--mat-sys-outline-variant, #d5d8dc);cursor:pointer;transition:background-color .15s ease,border-color .15s ease}.email-doc-chip[_ngcontent-%COMP%]:hover{background-color:var(--mat-sys-surface-container);border-color:var(--mat-sys-primary)}.email-doc-chip[_ngcontent-%COMP%]   .doc-type-icon[_ngcontent-%COMP%]{width:18px;height:18px;flex:0 0 auto}.email-doc-name[_ngcontent-%COMP%]{font-size:13px;color:var(--mat-sys-on-surface);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}mat-dialog-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{display:flex;align-items:center;gap:8px}"]})};var hi=class n{data=d(vt);dialogRef=d(Bt);confirm(){this.dialogRef.close(!0)}cancel(){this.dialogRef.close(!1)}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=N({type:n,selectors:[["app-confirm-dialog"]],decls:16,vars:5,consts:[["mat-dialog-title",""],[1,"confirm-message"],["align","end"],["mat-button","",3,"click"],["mat-raised-button","","color","warn",3,"click"]],template:function(e,t){e&1&&(s(0,"h2",0)(1,"mat-icon"),m(2),c(),m(3),c(),s(4,"mat-dialog-content")(5,"p",1),m(6),c()(),s(7,"mat-dialog-actions",2)(8,"button",3),x("click",function(){return t.cancel()}),s(9,"mat-icon"),m(10,"close"),c(),m(11),c(),s(12,"button",4),x("click",function(){return t.confirm()}),s(13,"mat-icon"),m(14,"delete"),c(),m(15),c()()),e&2&&(l(2),A(t.data.icon||"warning"),l(),te(" ",t.data.title,`
`),l(3),A(t.data.message),l(5),te(" ",t.data.cancelText||"Cancel"," "),l(4),te(" ",t.data.confirmText||"Delete"," "))},dependencies:[xt,bt,Ht,yt,Le,Ve,Oe,Ae],styles:["h2[mat-dialog-title][_ngcontent-%COMP%]{display:flex;align-items:center;gap:12px}.confirm-message[_ngcontent-%COMP%]{margin:0;font-size:14px;color:var(--mat-sys-on-surface-variant)}mat-dialog-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{display:flex;align-items:center;gap:8px}"]})};var hc=["*"];function uc(n,a){n&1&&Z(0)}var na=(()=>{class n{_elementRef=d(U);constructor(){}focus(){this._elementRef.nativeElement.focus()}static \u0275fac=function(t){return new(t||n)};static \u0275dir=$({type:n,selectors:[["","cdkStepHeader",""]],hostAttrs:["role","tab"]})}return n})(),aa=(()=>{class n{template=d(nt);constructor(){}static \u0275fac=function(t){return new(t||n)};static \u0275dir=$({type:n,selectors:[["","cdkStepLabel",""]]})}return n})();var It={NUMBER:"number",EDIT:"edit",DONE:"done",ERROR:"error"},gc=new W("STEPPER_GLOBAL_OPTIONS"),cn=(()=>{class n{_stepperOptions;_stepper=d(ui);_displayDefaultIndicatorType;stepLabel;_childForms;content;stepControl;get interacted(){return this._interacted()}set interacted(e){this._interacted.set(e)}_interacted=D(!1);interactedStream=new R;label;errorMessage;ariaLabel;ariaLabelledby;get state(){return this._state()}set state(e){this._state.set(e)}_state=D(void 0);get editable(){return this._editable()}set editable(e){this._editable.set(e)}_editable=D(!0);optional=!1;get completed(){let e=this._completedOverride(),t=this._interacted();return e??(t&&(!this.stepControl||this.stepControl.valid))}set completed(e){this._completedOverride.set(e)}_completedOverride=D(null);index=D(-1);isSelected=He(()=>this._stepper.selectedIndex===this.index());indicatorType=He(()=>{let e=this.isSelected(),t=this.completed,i=this._state()??It.NUMBER,r=this._editable();return this._showError()&&this.hasError&&!e?It.ERROR:this._displayDefaultIndicatorType?!t||e?It.NUMBER:r?It.EDIT:It.DONE:t&&!e?It.DONE:t&&e?i:r&&e?It.EDIT:i});isNavigable=He(()=>{let e=this.isSelected();return this.completed||e||!this._stepper.linear});get hasError(){let e=this._customError();return e??this._getDefaultError()}set hasError(e){this._customError.set(e)}_customError=D(null);_getDefaultError(){return this.interacted&&!!this.stepControl?.invalid}constructor(){let e=d(gc,{optional:!0});this._stepperOptions=e||{},this._displayDefaultIndicatorType=this._stepperOptions.displayDefaultIndicatorType!==!1}select(){this._stepper.selected=this}reset(){this._interacted.set(!1),this._completedOverride()!=null&&this._completedOverride.set(!1),this._customError()!=null&&this._customError.set(!1),this.stepControl&&(this._childForms?.forEach(e=>e.resetForm?.()),this.stepControl.reset())}ngOnChanges(){this._stepper._stateChanged()}_markAsInteracted(){this._interacted()||(this._interacted.set(!0),this.interactedStream.emit(this))}_showError(){return this._stepperOptions.showError??this._customError()!=null}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=N({type:n,selectors:[["cdk-step"]],contentQueries:function(t,i,r){if(t&1&&De(r,aa,5)(r,kn,5),t&2){let o;V(o=L())&&(i.stepLabel=o.first),V(o=L())&&(i._childForms=o)}},viewQuery:function(t,i){if(t&1&&ie(nt,7),t&2){let r;V(r=L())&&(i.content=r.first)}},inputs:{stepControl:"stepControl",label:"label",errorMessage:"errorMessage",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],state:"state",editable:[2,"editable","editable",B],optional:[2,"optional","optional",B],completed:[2,"completed","completed",B],hasError:[2,"hasError","hasError",B]},outputs:{interactedStream:"interacted"},exportAs:["cdkStep"],features:[Ce],ngContentSelectors:hc,decls:1,vars:0,template:function(t,i){t&1&&(ne(),yn(0,uc,1,0,"ng-template"))},encapsulation:2,changeDetection:0})}return n})(),ui=(()=>{class n{_dir=d(Re,{optional:!0});_changeDetectorRef=d(J);_elementRef=d(U);_destroyed=new j;_keyManager;_steps;steps=new Dt;_stepHeader;_sortedHeaders=new Dt;get linear(){return this._linear()}set linear(e){this._linear.set(e)}_linear=D(!1);get selectedIndex(){return this._selectedIndex()}set selectedIndex(e){this._steps?(this._isValidIndex(e),this.selectedIndex!==e&&(this.selected?._markAsInteracted(),!this._anyControlsInvalidOrPending(e)&&(e>=this.selectedIndex||this.steps.toArray()[e].editable)&&this._updateSelectedItemIndex(e))):this._selectedIndex.set(e)}_selectedIndex=D(0);get selected(){return this.steps?this.steps.toArray()[this.selectedIndex]:void 0}set selected(e){this.selectedIndex=e&&this.steps?this.steps.toArray().indexOf(e):-1}selectionChange=new R;selectedIndexChange=new R;_groupId=d(he).getId("cdk-stepper-");get orientation(){return this._orientation}set orientation(e){this._orientation=e,this._keyManager&&this._keyManager.withVerticalOrientation(e==="vertical")}_orientation="horizontal";constructor(){}ngAfterContentInit(){this._steps.changes.pipe(xe(this._steps),K(this._destroyed)).subscribe(e=>{this.steps.reset(e.filter(t=>t._stepper===this)),this.steps.forEach((t,i)=>t.index.set(i)),this.steps.notifyOnChanges()})}ngAfterViewInit(){if(this._stepHeader.changes.pipe(xe(this._stepHeader),K(this._destroyed)).subscribe(e=>{this._sortedHeaders.reset(e.toArray().sort((t,i)=>t._elementRef.nativeElement.compareDocumentPosition(i._elementRef.nativeElement)&Node.DOCUMENT_POSITION_FOLLOWING?-1:1)),this._sortedHeaders.notifyOnChanges()}),this._keyManager=new Oi(this._sortedHeaders).withWrap().withHomeAndEnd().withVerticalOrientation(this._orientation==="vertical"),this._keyManager.updateActiveItem(this.selectedIndex),(this._dir?this._dir.change:dt()).pipe(xe(this._layoutDirection()),K(this._destroyed)).subscribe(e=>this._keyManager?.withHorizontalOrientation(e)),this._keyManager.updateActiveItem(this.selectedIndex),this.steps.changes.subscribe(()=>{this.selected||this._selectedIndex.set(Math.max(this.selectedIndex-1,0))}),this._isValidIndex(this.selectedIndex)||this._selectedIndex.set(0),this.linear&&this.selectedIndex>0){let e=this.steps.toArray().slice(0,this._selectedIndex());for(let t of e)t._markAsInteracted()}}ngOnDestroy(){this._keyManager?.destroy(),this.steps.destroy(),this._sortedHeaders.destroy(),this._destroyed.next(),this._destroyed.complete()}next(){this.selectedIndex=Math.min(this._selectedIndex()+1,this.steps.length-1)}previous(){this.selectedIndex=Math.max(this._selectedIndex()-1,0)}reset(){this._updateSelectedItemIndex(0),this.steps.forEach(e=>e.reset()),this._stateChanged()}_getStepLabelId(e){return`${this._groupId}-label-${e}`}_getStepContentId(e){return`${this._groupId}-content-${e}`}_stateChanged(){this._changeDetectorRef.markForCheck()}_getAnimationDirection(e){let t=e-this._selectedIndex();return t<0?this._layoutDirection()==="rtl"?"next":"previous":t>0?this._layoutDirection()==="rtl"?"previous":"next":"current"}_getFocusIndex(){return this._keyManager?this._keyManager.activeItemIndex:this._selectedIndex()}_updateSelectedItemIndex(e){let t=this.steps.toArray(),i=this._selectedIndex();this.selectionChange.emit({selectedIndex:e,previouslySelectedIndex:i,selectedStep:t[e],previouslySelectedStep:t[i]}),this._keyManager&&(this._containsFocus()?this._keyManager.setActiveItem(e):this._keyManager.updateActiveItem(e)),this._selectedIndex.set(e),this.selectedIndexChange.emit(e),this._stateChanged()}_onKeydown(e){let t=me(e),i=e.keyCode,r=this._keyManager;r?.activeItemIndex!=null&&!t&&(i===32||i===13)?(this.selectedIndex=r.activeItemIndex,e.preventDefault()):r?.setFocusOrigin("keyboard").onKeydown(e)}_anyControlsInvalidOrPending(e){return this.linear&&e>=0?this.steps.toArray().slice(0,e).some(t=>{let i=t.stepControl;return(i?i.invalid||i.pending||!t.interacted:!t.completed)&&!t.optional&&!t._completedOverride()}):!1}_layoutDirection(){return this._dir&&this._dir.value==="rtl"?"rtl":"ltr"}_containsFocus(){let e=this._elementRef.nativeElement,t=ai();return e===t||e.contains(t)}_isValidIndex(e){return e>-1&&(!this.steps||e<this.steps.length)}static \u0275fac=function(t){return new(t||n)};static \u0275dir=$({type:n,selectors:[["","cdkStepper",""]],contentQueries:function(t,i,r){if(t&1&&De(r,cn,5)(r,na,5),t&2){let o;V(o=L())&&(i._steps=o),V(o=L())&&(i._stepHeader=o)}},inputs:{linear:[2,"linear","linear",B],selectedIndex:[2,"selectedIndex","selectedIndex",Mt],selected:"selected",orientation:"orientation"},outputs:{selectionChange:"selectionChange",selectedIndexChange:"selectedIndexChange"},exportAs:["cdkStepper"]})}return n})();var co=(()=>{class n{_stepper=d(ui);type="button";constructor(){}static \u0275fac=function(t){return new(t||n)};static \u0275dir=$({type:n,selectors:[["button","cdkStepperPrevious",""]],hostVars:1,hostBindings:function(t,i){t&1&&x("click",function(){return i._stepper.previous()}),t&2&&de("type",i.type)},inputs:{type:"type"}})}return n})(),po=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=Ie({type:n});static \u0275inj=Ee({imports:[ze]})}return n})();var _c=(n,a,e)=>({index:n,active:a,optional:e});function fc(n,a){if(n&1&&We(0,2),n&2){let e=u();C("ngTemplateOutlet",e.iconOverrides[e.state])("ngTemplateOutletContext",Oa(2,_c,e.index,e.active,e.optional))}}function vc(n,a){if(n&1&&(s(0,"span",7),m(1),c()),n&2){let e=u(2);l(),A(e._getDefaultTextForState(e.state))}}function bc(n,a){if(n&1&&(s(0,"span",8),m(1),c()),n&2){let e=u(3);l(),A(e._intl.completedLabel)}}function yc(n,a){if(n&1&&(s(0,"span",8),m(1),c()),n&2){let e=u(3);l(),A(e._intl.editableLabel)}}function xc(n,a){if(n&1&&(E(0,bc,2,1,"span",8)(1,yc,2,1,"span",8),s(2,"mat-icon",7),m(3),c()),n&2){let e=u(2);S(e.state==="done"?0:e.state==="edit"?1:-1),l(3),A(e._getDefaultTextForState(e.state))}}function Cc(n,a){if(n&1&&E(0,vc,2,1,"span",7)(1,xc,4,2),n&2){let e,t=u();S((e=t.state)==="number"?0:1)}}function wc(n,a){n&1&&(s(0,"div",4),We(1,9),c()),n&2&&(l(),C("ngTemplateOutlet",a.template))}function Dc(n,a){if(n&1&&(s(0,"div",4),m(1),c()),n&2){let e=u();l(),A(e.label)}}function Mc(n,a){if(n&1&&(s(0,"div",5),m(1),c()),n&2){let e=u();l(),A(e._intl.optionalLabel)}}function kc(n,a){if(n&1&&(s(0,"div",6),m(1),c()),n&2){let e=u();l(),A(e.errorMessage)}}var mo=["*"];function Ec(n,a){}function Sc(n,a){if(n&1&&(Z(0),rt(1,Ec,0,0,"ng-template",0)),n&2){let e=u();l(),C("cdkPortalOutlet",e._portal)}}var Ic=["animatedContainer"],ho=n=>({steps:n}),uo=n=>({step:n});function Tc(n,a){n&1&&Z(0)}function Ac(n,a){if(n&1&&(s(0,"div",5),We(1,9)(2,6),c()),n&2){let e=u(2),t=pe(6);l(),C("ngTemplateOutlet",e.headerPrefix()),l(),C("ngTemplateOutlet",t)("ngTemplateOutletContext",ti(3,ho,e.steps))}}function Oc(n,a){if(n&1&&We(0,6),n&2){let e=u(2),t=pe(6);C("ngTemplateOutlet",t)("ngTemplateOutletContext",ti(2,ho,e.steps))}}function Pc(n,a){if(n&1&&(s(0,"div",10,2),We(2,9),c()),n&2){let e=a.$implicit,t=a.$index,i=u(2);fe("mat-horizontal-stepper-content-"+i._getAnimationDirection(t)),C("id",i._getStepContentId(t)),F("aria-labelledby",i._getStepLabelId(t))("inert",i.selectedIndex===t?null:""),l(2),C("ngTemplateOutlet",e.content)}}function Fc(n,a){if(n&1&&(s(0,"div",3),E(1,Ac,3,5,"div",5)(2,Oc,1,4,"ng-container",6),s(3,"div",7),Q(4,Pc,3,6,"div",8,Pt),c()()),n&2){let e=u();l(),S(e.headerPrefix()?1:2),l(3),q(e.steps)}}function Rc(n,a){if(n&1&&We(0,9),n&2){let e=u(2);C("ngTemplateOutlet",e.headerPrefix())}}function Vc(n,a){if(n&1&&(s(0,"div",11),We(1,6),s(2,"div",12,2)(4,"div",13)(5,"div",14),We(6,9),c()()()()),n&2){let e=a.$implicit,t=a.$index,i=a.$index,r=a.$count,o=u(2),p=pe(4);l(),C("ngTemplateOutlet",p)("ngTemplateOutletContext",ti(11,uo,e)),l(),z("mat-stepper-vertical-line",i!==r-1)("mat-vertical-content-container-active",o.selectedIndex===t),F("inert",o.selectedIndex===t?null:"")("aria-label",o.ariaLabel),l(2),C("id",o._getStepContentId(t)),F("aria-labelledby",o._getStepLabelId(t)),l(2),C("ngTemplateOutlet",e.content)}}function Lc(n,a){if(n&1&&(s(0,"div",4),E(1,Rc,1,1,"ng-container",9),Q(2,Vc,7,13,"div",11,Pt),c()),n&2){let e=u();l(),S(e.headerPrefix()?1:-1),l(),q(e.steps)}}function Nc(n,a){if(n&1){let e=Y();s(0,"mat-step-header",15),x("click",function(){let i=O(e).step;return P(i.select())})("keydown",function(i){O(e);let r=u();return P(r._onKeydown(i))}),c()}if(n&2){let e=a.step,t=u();z("mat-horizontal-stepper-header",t.orientation==="horizontal")("mat-vertical-stepper-header",t.orientation==="vertical"),C("tabIndex",t._getFocusIndex()===e.index()?0:-1)("id",t._getStepLabelId(e.index()))("index",e.index())("state",e.indicatorType())("label",e.stepLabel||e.label)("selected",e.isSelected())("active",e.isNavigable())("optional",e.optional)("errorMessage",e.errorMessage)("iconOverrides",t._iconOverrides)("disableRipple",t.disableRipple||!e.isNavigable())("color",e.color||t.color),F("role",t.orientation==="horizontal"?"tab":"button")("aria-posinset",t.orientation==="horizontal"?e.index()+1:null)("aria-setsize",t.orientation==="horizontal"?t.steps.length:null)("aria-selected",t.orientation==="horizontal"?e.isSelected():null)("aria-current",t.orientation==="vertical"&&e.isSelected()?"step":null)("aria-disabled",t.orientation==="vertical"&&e.isSelected()?"true":null)("aria-expanded",t.orientation==="vertical"?e.isSelected():null)("aria-controls",t._getStepContentId(e.index()))("aria-label",e.ariaLabel||null)("aria-labelledby",!e.ariaLabel&&e.ariaLabelledby?e.ariaLabelledby:null)("aria-disabled",e.isNavigable()?null:!0)}}function Bc(n,a){n&1&&H(0,"div",17)}function Hc(n,a){if(n&1&&(We(0,6),E(1,Bc,1,0,"div",17)),n&2){let e=a.$implicit,t=a.$index,i=a.$count;u(2);let r=pe(4);C("ngTemplateOutlet",r)("ngTemplateOutletContext",ti(3,uo,e)),l(),S(t!==i-1?1:-1)}}function zc(n,a){if(n&1&&(s(0,"div",16),Q(1,Hc,2,5,null,null,Pt),c()),n&2){let e=a.steps,t=u();F("aria-label",t.ariaLabel),l(),q(e)}}var ra=(()=>{class n extends aa{static \u0275fac=(()=>{let e;return function(i){return(e||(e=it(n)))(i||n)}})();static \u0275dir=$({type:n,selectors:[["","matStepLabel",""]],features:[ge]})}return n})(),Gc=(()=>{class n{changes=new j;optionalLabel="Optional";completedLabel="Completed";editableLabel="Editable";static \u0275fac=function(t){return new(t||n)};static \u0275prov=ke({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),oa=(()=>{class n extends na{_intl=d(Gc);_focusMonitor=d(Xe);_intlSubscription;state;label;errorMessage;iconOverrides;index;selected=!1;active=!1;optional=!1;disableRipple=!1;color;constructor(){super();let e=d(Te);e.load(Qe),e.load(ut);let t=d(J);this._intlSubscription=this._intl.changes.subscribe(()=>t.markForCheck())}ngAfterViewInit(){this._focusMonitor.monitor(this._elementRef,!0)}ngOnDestroy(){this._intlSubscription.unsubscribe(),this._focusMonitor.stopMonitoring(this._elementRef)}focus(e,t){e?this._focusMonitor.focusVia(this._elementRef,e,t):this._elementRef.nativeElement.focus(t)}_stringLabel(){return this.label instanceof ra?null:this.label}_templateLabel(){return this.label instanceof ra?this.label:null}_getHostElement(){return this._elementRef.nativeElement}_getDefaultTextForState(e){return e=="number"?`${this.index+1}`:e=="edit"?"create":e=="error"?"warning":e}_hasEmptyLabel(){return!this._stringLabel()&&!this._templateLabel()&&!this._hasOptionalLabel()&&!this._hasErrorLabel()}_hasOptionalLabel(){return this.optional&&this.state!=="error"}_hasErrorLabel(){return this.state==="error"}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=N({type:n,selectors:[["mat-step-header"]],hostAttrs:["role","",1,"mat-step-header"],hostVars:4,hostBindings:function(t,i){t&2&&(fe("mat-"+(i.color||"primary")),z("mat-step-header-empty-label",i._hasEmptyLabel()))},inputs:{state:"state",label:"label",errorMessage:"errorMessage",iconOverrides:"iconOverrides",index:"index",selected:"selected",active:"active",optional:"optional",disableRipple:"disableRipple",color:"color"},features:[ge],decls:10,vars:17,consts:[["matRipple","",1,"mat-step-header-ripple","mat-focus-indicator",3,"matRippleTrigger","matRippleDisabled"],[1,"mat-step-icon-content"],[3,"ngTemplateOutlet","ngTemplateOutletContext"],[1,"mat-step-label"],[1,"mat-step-text-label"],[1,"mat-step-optional"],[1,"mat-step-sub-label-error"],["aria-hidden","true"],[1,"cdk-visually-hidden"],[3,"ngTemplateOutlet"]],template:function(t,i){if(t&1&&(H(0,"div",0),s(1,"div")(2,"div",1),E(3,fc,1,6,"ng-container",2)(4,Cc,2,1),c()(),s(5,"div",3),E(6,wc,2,1,"div",4)(7,Dc,2,1,"div",4),E(8,Mc,2,1,"div",5),E(9,kc,2,1,"div",6),c()),t&2){let r;C("matRippleTrigger",i._getHostElement())("matRippleDisabled",i.disableRipple),l(),fe(Ta("mat-step-icon-state-",i.state," mat-step-icon")),z("mat-step-icon-selected",i.selected),l(2),S(i.iconOverrides&&i.iconOverrides[i.state]?3:4),l(2),z("mat-step-label-active",i.active)("mat-step-label-selected",i.selected)("mat-step-label-error",i.state=="error"),l(),S((r=i._templateLabel())?6:i._stringLabel()?7:-1,r),l(2),S(i._hasOptionalLabel()?8:-1),l(),S(i._hasErrorLabel()?9:-1)}},dependencies:[Vt,Cn,Ae],styles:[`.mat-step-header {
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
`],encapsulation:2,changeDetection:0})}return n})(),Yc=(()=>{class n{templateRef=d(nt);name;constructor(){}static \u0275fac=function(t){return new(t||n)};static \u0275dir=$({type:n,selectors:[["ng-template","matStepperIcon",""]],inputs:{name:[0,"matStepperIcon","name"]}})}return n})(),jc=(()=>{class n{_template=d(nt);constructor(){}static \u0275fac=function(t){return new(t||n)};static \u0275dir=$({type:n,selectors:[["ng-template","matStepContent",""]]})}return n})(),sa=(()=>{class n extends cn{_errorStateMatcher=d(Et,{skipSelf:!0});_viewContainerRef=d(Ot);_isSelected=Be.EMPTY;stepLabel=void 0;color;_lazyContent;_portal;ngAfterContentInit(){this._isSelected=this._stepper.steps.changes.pipe(xi(()=>this._stepper.selectionChange.pipe(ya(e=>e.selectedStep===this),xe(this._stepper.selected===this)))).subscribe(e=>{e&&this._lazyContent&&!this._portal&&(this._portal=new ri(this._lazyContent._template,this._viewContainerRef))})}ngOnDestroy(){this._isSelected.unsubscribe()}isErrorState(e,t){let i=this._errorStateMatcher.isErrorState(e,t),r=!!(e&&e.invalid&&this.interacted);return i||r}static \u0275fac=(()=>{let e;return function(i){return(e||(e=it(n)))(i||n)}})();static \u0275cmp=N({type:n,selectors:[["mat-step"]],contentQueries:function(t,i,r){if(t&1&&De(r,ra,5)(r,jc,5),t&2){let o;V(o=L())&&(i.stepLabel=o.first),V(o=L())&&(i._lazyContent=o.first)}},hostAttrs:["hidden",""],inputs:{color:"color"},exportAs:["matStep"],features:[se([{provide:Et,useExisting:n},{provide:cn,useExisting:n}]),ge],ngContentSelectors:mo,decls:1,vars:0,consts:[[3,"cdkPortalOutlet"]],template:function(t,i){t&1&&(ne(),rt(0,Sc,2,1,"ng-template"))},dependencies:[ft],encapsulation:2,changeDetection:0})}return n})(),la=(()=>{class n extends ui{_ngZone=d($e);_renderer=d(at);_animationsDisabled=ue();_cleanupTransition;_isAnimating=D(!1);_stepHeader=void 0;_animatedContainers;_steps=void 0;steps=new Dt;_icons;animationDone=new R;disableRipple=!1;color;labelPosition="end";headerPosition="top";ariaLabel=null;headerPrefix=Va(null);_iconOverrides={};get animationDuration(){return this._animationDuration}set animationDuration(e){this._animationDuration=/^\d+$/.test(e)?e+"ms":e}_animationDuration="";_isServer=!d(gt).isBrowser;constructor(){super();let t=d(U).nativeElement.nodeName.toLowerCase();this.orientation=t==="mat-vertical-stepper"?"vertical":"horizontal"}ngAfterContentInit(){super.ngAfterContentInit(),this._icons.forEach(({name:e,templateRef:t})=>this._iconOverrides[e]=t),this.steps.changes.pipe(K(this._destroyed)).subscribe(()=>this._stateChanged()),this.selectedIndexChange.pipe(K(this._destroyed)).subscribe(()=>{let e=this._getAnimationDuration();e==="0ms"||e==="0s"?this._onAnimationDone():this._isAnimating.set(!0)}),this._ngZone.runOutsideAngular(()=>{this._animationsDisabled||setTimeout(()=>{this._elementRef.nativeElement.classList.add("mat-stepper-animations-enabled"),this._cleanupTransition=this._renderer.listen(this._elementRef.nativeElement,"transitionend",this._handleTransitionend)},200)})}ngAfterViewInit(){if(super.ngAfterViewInit(),typeof queueMicrotask=="function"){let e=!1;this._animatedContainers.changes.pipe(xe(null),K(this._destroyed)).subscribe(()=>queueMicrotask(()=>{e||(e=!0,this.animationDone.emit()),this._stateChanged()}))}}ngOnDestroy(){super.ngOnDestroy(),this._cleanupTransition?.()}_getAnimationDuration(){return this._animationsDisabled?"0ms":this.animationDuration?this.animationDuration:this.orientation==="horizontal"?"500ms":"225ms"}_handleTransitionend=e=>{let t=e.target;if(!t)return;let i=this.orientation==="horizontal"&&e.propertyName==="transform"&&t.classList.contains("mat-horizontal-stepper-content-current"),r=this.orientation==="vertical"&&e.propertyName==="grid-template-rows"&&t.classList.contains("mat-vertical-content-container-active");(i||r)&&this._animatedContainers.find(p=>p.nativeElement===t)&&this._onAnimationDone()};_onAnimationDone(){this._isAnimating.set(!1),this.animationDone.emit()}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=N({type:n,selectors:[["mat-stepper"],["mat-vertical-stepper"],["mat-horizontal-stepper"],["","matStepper",""]],contentQueries:function(t,i,r){if(t&1&&De(r,sa,5)(r,Yc,5),t&2){let o;V(o=L())&&(i._steps=o),V(o=L())&&(i._icons=o)}},viewQuery:function(t,i){if(t&1&&ie(oa,5)(Ic,5),t&2){let r;V(r=L())&&(i._stepHeader=r),V(r=L())&&(i._animatedContainers=r)}},hostVars:14,hostBindings:function(t,i){t&2&&(ht("--mat-stepper-animation-duration",i._getAnimationDuration()),z("mat-stepper-horizontal",i.orientation==="horizontal")("mat-stepper-vertical",i.orientation==="vertical")("mat-stepper-label-position-end",i.orientation==="horizontal"&&i.labelPosition=="end")("mat-stepper-label-position-bottom",i.orientation==="horizontal"&&i.labelPosition=="bottom")("mat-stepper-header-position-bottom",i.headerPosition==="bottom")("mat-stepper-animating",i._isAnimating()))},inputs:{disableRipple:"disableRipple",color:"color",labelPosition:"labelPosition",headerPosition:"headerPosition",ariaLabel:[0,"aria-label","ariaLabel"],headerPrefix:[1,"headerPrefix"],animationDuration:"animationDuration"},outputs:{animationDone:"animationDone"},exportAs:["matStepper","matVerticalStepper","matHorizontalStepper"],features:[se([{provide:ui,useExisting:n}]),ge],ngContentSelectors:mo,decls:7,vars:2,consts:[["stepTemplate",""],["horizontalStepsTemplate",""],["animatedContainer",""],[1,"mat-horizontal-stepper-wrapper"],[1,"mat-vertical-stepper-wrapper"],[1,"mat-horizontal-stepper-header-wrapper"],[3,"ngTemplateOutlet","ngTemplateOutletContext"],[1,"mat-horizontal-content-container"],["role","tabpanel",1,"mat-horizontal-stepper-content",3,"id","class"],[3,"ngTemplateOutlet"],["role","tabpanel",1,"mat-horizontal-stepper-content",3,"id"],[1,"mat-step"],[1,"mat-vertical-content-container"],["role","region",1,"mat-vertical-stepper-content",3,"id"],[1,"mat-vertical-content"],[3,"click","keydown","tabIndex","id","index","state","label","selected","active","optional","errorMessage","iconOverrides","disableRipple","color"],["aria-orientation","horizontal","role","tablist",1,"mat-horizontal-stepper-header-container"],[1,"mat-stepper-horizontal-line"]],template:function(t,i){if(t&1&&(ne(),E(0,Tc,1,0),E(1,Fc,6,1,"div",3)(2,Lc,4,1,"div",4),rt(3,Nc,1,27,"ng-template",null,0,xn)(5,zc,3,1,"ng-template",null,1,xn)),t&2){let r;S(i._isServer?0:-1),l(),S((r=i.orientation)==="horizontal"?1:r==="vertical"?2:-1)}},dependencies:[Cn,oa],styles:[`.mat-stepper-vertical,
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
`],encapsulation:2,changeDetection:0})}return n})();var go=(()=>{class n extends co{static \u0275fac=(()=>{let e;return function(i){return(e||(e=it(n)))(i||n)}})();static \u0275dir=$({type:n,selectors:[["button","matStepperPrevious",""]],hostAttrs:[1,"mat-stepper-previous"],hostVars:1,hostBindings:function(t,i){t&2&&de("type",i.type)},features:[ge]})}return n})(),_o=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=Ie({type:n});static \u0275inj=Ee({providers:[Et],imports:[oi,po,Oe,Lt,la,oa,ze]})}return n})();var $c=["button"],Qc=["*"];function qc(n,a){if(n&1&&(s(0,"div",2),H(1,"mat-pseudo-checkbox",6),c()),n&2){let e=u();l(),C("disabled",e.disabled)}}var fo=new W("MAT_BUTTON_TOGGLE_DEFAULT_OPTIONS",{providedIn:"root",factory:()=>({hideSingleSelectionIndicator:!1,hideMultipleSelectionIndicator:!1,disabledInteractive:!1})}),vo=new W("MatButtonToggleGroup"),Kc={provide:kt,useExisting:mt(()=>ca),multi:!0},dn=class{source;value;constructor(a,e){this.source=a,this.value=e}},ca=(()=>{class n{_changeDetector=d(J);_dir=d(Re,{optional:!0});_multiple=!1;_disabled=!1;_disabledInteractive=!1;_selectionModel;_rawValue;_controlValueAccessorChangeFn=()=>{};_onTouched=()=>{};_buttonToggles;appearance;get name(){return this._name}set name(e){this._name=e,this._markButtonsForCheck()}_name=d(he).getId("mat-button-toggle-group-");vertical=!1;get value(){let e=this._selectionModel?this._selectionModel.selected:[];return this.multiple?e.map(t=>t.value):e[0]?e[0].value:void 0}set value(e){this._setSelectionByValue(e),this.valueChange.emit(this.value)}valueChange=new R;get selected(){let e=this._selectionModel?this._selectionModel.selected:[];return this.multiple?e:e[0]||null}get multiple(){return this._multiple}set multiple(e){this._multiple=e,this._markButtonsForCheck()}get disabled(){return this._disabled}set disabled(e){this._disabled=e,this._markButtonsForCheck()}get disabledInteractive(){return this._disabledInteractive}set disabledInteractive(e){this._disabledInteractive=e,this._markButtonsForCheck()}get dir(){return this._dir&&this._dir.value==="rtl"?"rtl":"ltr"}change=new R;get hideSingleSelectionIndicator(){return this._hideSingleSelectionIndicator}set hideSingleSelectionIndicator(e){this._hideSingleSelectionIndicator=e,this._markButtonsForCheck()}_hideSingleSelectionIndicator;get hideMultipleSelectionIndicator(){return this._hideMultipleSelectionIndicator}set hideMultipleSelectionIndicator(e){this._hideMultipleSelectionIndicator=e,this._markButtonsForCheck()}_hideMultipleSelectionIndicator;constructor(){let e=d(fo,{optional:!0});this.appearance=e&&e.appearance?e.appearance:"standard",this._hideSingleSelectionIndicator=e?.hideSingleSelectionIndicator??!1,this._hideMultipleSelectionIndicator=e?.hideMultipleSelectionIndicator??!1}ngOnInit(){this._selectionModel=new tr(this.multiple,void 0,!1)}ngAfterContentInit(){this._selectionModel.select(...this._buttonToggles.filter(e=>e.checked)),this.multiple||this._initializeTabIndex()}writeValue(e){this.value=e,this._changeDetector.markForCheck()}registerOnChange(e){this._controlValueAccessorChangeFn=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this.disabled=e}_keydown(e){if(this.multiple||this.disabled||me(e))return;let i=e.target.id,r=this._buttonToggles.toArray().findIndex(p=>p.buttonId===i),o=null;switch(e.keyCode){case 32:case 13:o=this._buttonToggles.get(r)||null;break;case 38:o=this._getNextButton(r,-1);break;case 37:o=this._getNextButton(r,this.dir==="ltr"?-1:1);break;case 40:o=this._getNextButton(r,1);break;case 39:o=this._getNextButton(r,this.dir==="ltr"?1:-1);break;default:return}o&&(e.preventDefault(),o._onButtonClick(),o.focus())}_emitChangeEvent(e){let t=new dn(e,this.value);this._rawValue=t.value,this._controlValueAccessorChangeFn(t.value),this.change.emit(t)}_syncButtonToggle(e,t,i=!1,r=!1){!this.multiple&&this.selected&&!e.checked&&(this.selected.checked=!1),this._selectionModel?t?this._selectionModel.select(e):this._selectionModel.deselect(e):r=!0,r?Promise.resolve().then(()=>this._updateModelValue(e,i)):this._updateModelValue(e,i)}_isSelected(e){return this._selectionModel&&this._selectionModel.isSelected(e)}_isPrechecked(e){return typeof this._rawValue>"u"?!1:this.multiple&&Array.isArray(this._rawValue)?this._rawValue.some(t=>e.value!=null&&t===e.value):e.value===this._rawValue}_initializeTabIndex(){if(this._buttonToggles.forEach(e=>{e.tabIndex=-1}),this.selected)this.selected.tabIndex=0;else for(let e=0;e<this._buttonToggles.length;e++){let t=this._buttonToggles.get(e);if(!t.disabled){t.tabIndex=0;break}}}_getNextButton(e,t){let i=this._buttonToggles;for(let r=1;r<=i.length;r++){let o=(e+t*r+i.length)%i.length,p=i.get(o);if(p&&!p.disabled)return p}return null}_setSelectionByValue(e){if(this._rawValue=e,!this._buttonToggles)return;let t=this._buttonToggles.toArray();if(this.multiple&&e?(Array.isArray(e),this._clearSelection(),e.forEach(i=>this._selectValue(i,t))):(this._clearSelection(),this._selectValue(e,t)),!this.multiple&&t.every(i=>i.tabIndex===-1)){for(let i of t)if(!i.disabled){i.tabIndex=0;break}}}_clearSelection(){this._selectionModel.clear(),this._buttonToggles.forEach(e=>{e.checked=!1,this.multiple||(e.tabIndex=-1)})}_selectValue(e,t){for(let i of t)if(i.value===e){i.checked=!0,this._selectionModel.select(i),this.multiple||(i.tabIndex=0);break}}_updateModelValue(e,t){t&&this._emitChangeEvent(e),this.valueChange.emit(this.value)}_markButtonsForCheck(){this._buttonToggles?.forEach(e=>e._markForCheck())}static \u0275fac=function(t){return new(t||n)};static \u0275dir=$({type:n,selectors:[["mat-button-toggle-group"]],contentQueries:function(t,i,r){if(t&1&&De(r,pn,5),t&2){let o;V(o=L())&&(i._buttonToggles=o)}},hostAttrs:[1,"mat-button-toggle-group"],hostVars:6,hostBindings:function(t,i){t&1&&x("keydown",function(o){return i._keydown(o)}),t&2&&(F("role",i.multiple?"group":"radiogroup")("aria-disabled",i.disabled),z("mat-button-toggle-vertical",i.vertical)("mat-button-toggle-group-appearance-standard",i.appearance==="standard"))},inputs:{appearance:"appearance",name:"name",vertical:[2,"vertical","vertical",B],value:"value",multiple:[2,"multiple","multiple",B],disabled:[2,"disabled","disabled",B],disabledInteractive:[2,"disabledInteractive","disabledInteractive",B],hideSingleSelectionIndicator:[2,"hideSingleSelectionIndicator","hideSingleSelectionIndicator",B],hideMultipleSelectionIndicator:[2,"hideMultipleSelectionIndicator","hideMultipleSelectionIndicator",B]},outputs:{valueChange:"valueChange",change:"change"},exportAs:["matButtonToggleGroup"],features:[se([Kc,{provide:vo,useExisting:n}])]})}return n})(),pn=(()=>{class n{_changeDetectorRef=d(J);_elementRef=d(U);_focusMonitor=d(Xe);_idGenerator=d(he);_animationDisabled=ue();_checked=!1;ariaLabel;ariaLabelledby=null;_buttonElement;buttonToggleGroup;get buttonId(){return`${this.id}-button`}id;name;value;get tabIndex(){return this._tabIndex()}set tabIndex(e){this._tabIndex.set(e)}_tabIndex;disableRipple=!1;get appearance(){return this.buttonToggleGroup?this.buttonToggleGroup.appearance:this._appearance}set appearance(e){this._appearance=e}_appearance;get checked(){return this.buttonToggleGroup?this.buttonToggleGroup._isSelected(this):this._checked}set checked(e){e!==this._checked&&(this._checked=e,this.buttonToggleGroup&&this.buttonToggleGroup._syncButtonToggle(this,this._checked),this._changeDetectorRef.markForCheck())}get disabled(){return this._disabled||this.buttonToggleGroup&&this.buttonToggleGroup.disabled}set disabled(e){this._disabled=e}_disabled=!1;get disabledInteractive(){return this._disabledInteractive||this.buttonToggleGroup!==null&&this.buttonToggleGroup.disabledInteractive}set disabledInteractive(e){this._disabledInteractive=e}_disabledInteractive;change=new R;constructor(){d(Te).load(Qe);let e=d(vo,{optional:!0}),t=d(new Rt("tabindex"),{optional:!0})||"",i=d(fo,{optional:!0});this._tabIndex=D(parseInt(t)||0),this.buttonToggleGroup=e,this._appearance=i&&i.appearance?i.appearance:"standard",this._disabledInteractive=i?.disabledInteractive??!1}ngOnInit(){let e=this.buttonToggleGroup;this.id=this.id||this._idGenerator.getId("mat-button-toggle-"),e&&(e._isPrechecked(this)?this.checked=!0:e._isSelected(this)!==this._checked&&e._syncButtonToggle(this,this._checked))}ngAfterViewInit(){this._animationDisabled||this._elementRef.nativeElement.classList.add("mat-button-toggle-animations-enabled"),this._focusMonitor.monitor(this._elementRef,!0)}ngOnDestroy(){let e=this.buttonToggleGroup;this._focusMonitor.stopMonitoring(this._elementRef),e&&e._isSelected(this)&&e._syncButtonToggle(this,!1,!1,!0)}focus(e){this._buttonElement.nativeElement.focus(e)}_onButtonClick(){if(this.disabled)return;let e=this.isSingleSelector()?!0:!this._checked;if(e!==this._checked&&(this._checked=e,this.buttonToggleGroup&&(this.buttonToggleGroup._syncButtonToggle(this,this._checked,!0),this.buttonToggleGroup._onTouched())),this.isSingleSelector()){let t=this.buttonToggleGroup._buttonToggles.find(i=>i.tabIndex===0);t&&(t.tabIndex=-1),this.tabIndex=0}this.change.emit(new dn(this,this.value))}_markForCheck(){this._changeDetectorRef.markForCheck()}_getButtonName(){return this.isSingleSelector()?this.buttonToggleGroup.name:this.name||null}isSingleSelector(){return this.buttonToggleGroup&&!this.buttonToggleGroup.multiple}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=N({type:n,selectors:[["mat-button-toggle"]],viewQuery:function(t,i){if(t&1&&ie($c,5),t&2){let r;V(r=L())&&(i._buttonElement=r.first)}},hostAttrs:["role","presentation",1,"mat-button-toggle"],hostVars:14,hostBindings:function(t,i){t&1&&x("focus",function(){return i.focus()}),t&2&&(F("aria-label",null)("aria-labelledby",null)("id",i.id)("name",null),z("mat-button-toggle-standalone",!i.buttonToggleGroup)("mat-button-toggle-checked",i.checked)("mat-button-toggle-disabled",i.disabled)("mat-button-toggle-disabled-interactive",i.disabledInteractive)("mat-button-toggle-appearance-standard",i.appearance==="standard"))},inputs:{ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],id:"id",name:"name",value:"value",tabIndex:"tabIndex",disableRipple:[2,"disableRipple","disableRipple",B],appearance:"appearance",checked:[2,"checked","checked",B],disabled:[2,"disabled","disabled",B],disabledInteractive:[2,"disabledInteractive","disabledInteractive",B]},outputs:{change:"change"},exportAs:["matButtonToggle"],ngContentSelectors:Qc,decls:7,vars:13,consts:[["button",""],["type","button",1,"mat-button-toggle-button","mat-focus-indicator",3,"click","id","disabled"],[1,"mat-button-toggle-checkbox-wrapper"],[1,"mat-button-toggle-label-content"],[1,"mat-button-toggle-focus-overlay"],["matRipple","",1,"mat-button-toggle-ripple",3,"matRippleTrigger","matRippleDisabled"],["state","checked","aria-hidden","true","appearance","minimal",3,"disabled"]],template:function(t,i){if(t&1&&(ne(),s(0,"button",1,0),x("click",function(){return i._onButtonClick()}),E(2,qc,2,1,"div",2),s(3,"span",3),Z(4),c()(),H(5,"span",4)(6,"span",5)),t&2){let r=pe(1);C("id",i.buttonId)("disabled",i.disabled&&!i.disabledInteractive||null),F("role",i.isSingleSelector()?"radio":"button")("tabindex",i.disabled&&!i.disabledInteractive?-1:i.tabIndex)("aria-pressed",i.isSingleSelector()?null:i.checked)("aria-checked",i.isSingleSelector()?i.checked:null)("name",i._getButtonName())("aria-label",i.ariaLabel)("aria-labelledby",i.ariaLabelledby)("aria-disabled",i.disabled&&i.disabledInteractive?"true":null),l(2),S(i.buttonToggleGroup&&(!i.buttonToggleGroup.multiple&&!i.buttonToggleGroup.hideSingleSelectionIndicator||i.buttonToggleGroup.multiple&&!i.buttonToggleGroup.hideMultipleSelectionIndicator)?2:-1),l(4),C("matRippleTrigger",r)("matRippleDisabled",i.disableRipple||i.disabled)}},dependencies:[Vt,lr],styles:[`.mat-button-toggle-standalone,
.mat-button-toggle-group {
  position: relative;
  display: inline-flex;
  flex-direction: row;
  white-space: nowrap;
  overflow: hidden;
  -webkit-tap-highlight-color: transparent;
  border-radius: var(--mat-button-toggle-legacy-shape);
  transform: translateZ(0);
}
.mat-button-toggle-standalone:not([class*=mat-elevation-z]),
.mat-button-toggle-group:not([class*=mat-elevation-z]) {
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
}
@media (forced-colors: active) {
  .mat-button-toggle-standalone,
  .mat-button-toggle-group {
    outline: solid 1px;
  }
}

.mat-button-toggle-standalone.mat-button-toggle-appearance-standard,
.mat-button-toggle-group-appearance-standard {
  border-radius: var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large));
  border: solid 1px var(--mat-button-toggle-divider-color, var(--mat-sys-outline));
}
.mat-button-toggle-standalone.mat-button-toggle-appearance-standard .mat-pseudo-checkbox,
.mat-button-toggle-group-appearance-standard .mat-pseudo-checkbox {
  --mat-pseudo-checkbox-minimal-selected-checkmark-color: var(--mat-button-toggle-selected-state-text-color, var(--mat-sys-on-secondary-container));
}
.mat-button-toggle-standalone.mat-button-toggle-appearance-standard:not([class*=mat-elevation-z]),
.mat-button-toggle-group-appearance-standard:not([class*=mat-elevation-z]) {
  box-shadow: none;
}
@media (forced-colors: active) {
  .mat-button-toggle-standalone.mat-button-toggle-appearance-standard,
  .mat-button-toggle-group-appearance-standard {
    outline: 0;
  }
}

.mat-button-toggle-vertical {
  flex-direction: column;
}
.mat-button-toggle-vertical .mat-button-toggle-label-content {
  display: block;
}

.mat-button-toggle {
  white-space: nowrap;
  position: relative;
  color: var(--mat-button-toggle-legacy-text-color);
  font-family: var(--mat-button-toggle-legacy-label-text-font);
  font-size: var(--mat-button-toggle-legacy-label-text-size);
  line-height: var(--mat-button-toggle-legacy-label-text-line-height);
  font-weight: var(--mat-button-toggle-legacy-label-text-weight);
  letter-spacing: var(--mat-button-toggle-legacy-label-text-tracking);
  --mat-pseudo-checkbox-minimal-selected-checkmark-color: var(--mat-button-toggle-legacy-selected-state-text-color);
}
.mat-button-toggle.cdk-keyboard-focused .mat-button-toggle-focus-overlay {
  opacity: var(--mat-button-toggle-legacy-focus-state-layer-opacity);
}
.mat-button-toggle .mat-icon svg {
  vertical-align: top;
}

.mat-button-toggle-checkbox-wrapper {
  display: inline-block;
  justify-content: flex-start;
  align-items: center;
  width: 0;
  height: 18px;
  line-height: 18px;
  overflow: hidden;
  box-sizing: border-box;
  position: absolute;
  top: 50%;
  left: 16px;
  transform: translate3d(0, -50%, 0);
}
[dir=rtl] .mat-button-toggle-checkbox-wrapper {
  left: auto;
  right: 16px;
}
.mat-button-toggle-appearance-standard .mat-button-toggle-checkbox-wrapper {
  left: 12px;
}
[dir=rtl] .mat-button-toggle-appearance-standard .mat-button-toggle-checkbox-wrapper {
  left: auto;
  right: 12px;
}
.mat-button-toggle-checked .mat-button-toggle-checkbox-wrapper {
  width: 18px;
}
.mat-button-toggle-animations-enabled .mat-button-toggle-checkbox-wrapper {
  transition: width 150ms 45ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-button-toggle-vertical .mat-button-toggle-checkbox-wrapper {
  transition: none;
}

.mat-button-toggle-checked {
  color: var(--mat-button-toggle-legacy-selected-state-text-color);
  background-color: var(--mat-button-toggle-legacy-selected-state-background-color);
}

.mat-button-toggle-disabled {
  pointer-events: none;
  color: var(--mat-button-toggle-legacy-disabled-state-text-color);
  background-color: var(--mat-button-toggle-legacy-disabled-state-background-color);
  --mat-pseudo-checkbox-minimal-disabled-selected-checkmark-color: var(--mat-button-toggle-legacy-disabled-state-text-color);
}
.mat-button-toggle-disabled.mat-button-toggle-checked {
  background-color: var(--mat-button-toggle-legacy-disabled-selected-state-background-color);
}

.mat-button-toggle-disabled-interactive {
  pointer-events: auto;
}

.mat-button-toggle-appearance-standard {
  color: var(--mat-button-toggle-text-color, var(--mat-sys-on-surface));
  background-color: var(--mat-button-toggle-background-color, transparent);
  font-family: var(--mat-button-toggle-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-toggle-label-text-size, var(--mat-sys-label-large-size));
  line-height: var(--mat-button-toggle-label-text-line-height, var(--mat-sys-label-large-line-height));
  font-weight: var(--mat-button-toggle-label-text-weight, var(--mat-sys-label-large-weight));
  letter-spacing: var(--mat-button-toggle-label-text-tracking, var(--mat-sys-label-large-tracking));
}
.mat-button-toggle-group-appearance-standard .mat-button-toggle-appearance-standard + .mat-button-toggle-appearance-standard {
  border-left: solid 1px var(--mat-button-toggle-divider-color, var(--mat-sys-outline));
}
[dir=rtl] .mat-button-toggle-group-appearance-standard .mat-button-toggle-appearance-standard + .mat-button-toggle-appearance-standard {
  border-left: none;
  border-right: solid 1px var(--mat-button-toggle-divider-color, var(--mat-sys-outline));
}
.mat-button-toggle-group-appearance-standard.mat-button-toggle-vertical .mat-button-toggle-appearance-standard + .mat-button-toggle-appearance-standard {
  border-left: none;
  border-right: none;
  border-top: solid 1px var(--mat-button-toggle-divider-color, var(--mat-sys-outline));
}
.mat-button-toggle-appearance-standard.mat-button-toggle-checked {
  color: var(--mat-button-toggle-selected-state-text-color, var(--mat-sys-on-secondary-container));
  background-color: var(--mat-button-toggle-selected-state-background-color, var(--mat-sys-secondary-container));
}
.mat-button-toggle-appearance-standard.mat-button-toggle-disabled {
  color: var(--mat-button-toggle-disabled-state-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  background-color: var(--mat-button-toggle-disabled-state-background-color, transparent);
}
.mat-button-toggle-appearance-standard.mat-button-toggle-disabled .mat-pseudo-checkbox {
  --mat-pseudo-checkbox-minimal-disabled-selected-checkmark-color: var(--mat-button-toggle-disabled-selected-state-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-button-toggle-appearance-standard.mat-button-toggle-disabled.mat-button-toggle-checked {
  color: var(--mat-button-toggle-disabled-selected-state-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  background-color: var(--mat-button-toggle-disabled-selected-state-background-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-button-toggle-appearance-standard .mat-button-toggle-focus-overlay {
  background-color: var(--mat-button-toggle-state-layer-color, var(--mat-sys-on-surface));
}
.mat-button-toggle-appearance-standard:hover .mat-button-toggle-focus-overlay {
  opacity: var(--mat-button-toggle-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-button-toggle-appearance-standard.cdk-keyboard-focused .mat-button-toggle-focus-overlay {
  opacity: var(--mat-button-toggle-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
@media (hover: none) {
  .mat-button-toggle-appearance-standard:hover .mat-button-toggle-focus-overlay {
    display: none;
  }
}

.mat-button-toggle-label-content {
  -webkit-user-select: none;
  user-select: none;
  display: inline-block;
  padding: 0 16px;
  line-height: var(--mat-button-toggle-legacy-height);
  position: relative;
}
.mat-button-toggle-appearance-standard .mat-button-toggle-label-content {
  padding: 0 12px;
  line-height: var(--mat-button-toggle-height, 40px);
}

.mat-button-toggle-label-content > * {
  vertical-align: middle;
}

.mat-button-toggle-focus-overlay {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: inherit;
  pointer-events: none;
  opacity: 0;
  background-color: var(--mat-button-toggle-legacy-state-layer-color);
}

@media (forced-colors: active) {
  .mat-button-toggle-checked .mat-button-toggle-focus-overlay {
    border-bottom: solid 500px;
    opacity: 0.5;
    height: 0;
  }
  .mat-button-toggle-checked:hover .mat-button-toggle-focus-overlay {
    opacity: 0.6;
  }
  .mat-button-toggle-checked.mat-button-toggle-appearance-standard .mat-button-toggle-focus-overlay {
    border-bottom: solid 500px;
  }
}
.mat-button-toggle .mat-button-toggle-ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
}

.mat-button-toggle-button {
  border: 0;
  background: none;
  color: inherit;
  padding: 0;
  margin: 0;
  font: inherit;
  outline: none;
  width: 100%;
  cursor: pointer;
}
.mat-button-toggle-animations-enabled .mat-button-toggle-button {
  transition: padding 150ms 45ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-button-toggle-vertical .mat-button-toggle-button {
  transition: none;
}
.mat-button-toggle-disabled .mat-button-toggle-button {
  cursor: default;
}
.mat-button-toggle-button::-moz-focus-inner {
  border: 0;
}
.mat-button-toggle-checked .mat-button-toggle-button:has(.mat-button-toggle-checkbox-wrapper) {
  padding-left: 30px;
}
[dir=rtl] .mat-button-toggle-checked .mat-button-toggle-button:has(.mat-button-toggle-checkbox-wrapper) {
  padding-left: 0;
  padding-right: 30px;
}

.mat-button-toggle-standalone.mat-button-toggle-appearance-standard {
  --mat-focus-indicator-border-radius: var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large));
}

.mat-button-toggle-group-appearance-standard:not(.mat-button-toggle-vertical) .mat-button-toggle:last-of-type .mat-button-toggle-button::before {
  border-top-right-radius: var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large));
  border-bottom-right-radius: var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large));
}
.mat-button-toggle-group-appearance-standard:not(.mat-button-toggle-vertical) .mat-button-toggle:first-of-type .mat-button-toggle-button::before {
  border-top-left-radius: var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large));
  border-bottom-left-radius: var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large));
}

.mat-button-toggle-group-appearance-standard.mat-button-toggle-vertical .mat-button-toggle:last-of-type .mat-button-toggle-button::before {
  border-bottom-right-radius: var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large));
  border-bottom-left-radius: var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large));
}
.mat-button-toggle-group-appearance-standard.mat-button-toggle-vertical .mat-button-toggle:first-of-type .mat-button-toggle-button::before {
  border-top-right-radius: var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large));
  border-top-left-radius: var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large));
}
`],encapsulation:2,changeDetection:0})}return n})(),bo=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=Ie({type:n});static \u0275inj=Ee({imports:[Lt,pn,ze]})}return n})();var ed=(n,a)=>a.Gnid;function td(n,a){if(n&1){let e=Y();s(0,"div",29)(1,"mat-icon"),m(2,"link"),c(),s(3,"span",31),m(4),c(),s(5,"button",32),x("click",function(){O(e);let i=u(2);return P(i.clearSelectedTopic())}),s(6,"mat-icon"),m(7,"close"),c()()()}n&2&&(l(4),A(a.Title))}function id(n,a){if(n&1){let e=Y();s(0,"button",39),x("mousedown",function(){let i=O(e).$implicit,r=u(4);return P(r.selectSearchResult(i))}),s(1,"span",40),m(2),c()()}if(n&2){let e=a.$implicit;l(2),A(e.Title)}}function nd(n,a){n&1&&(s(0,"p",38),m(1,"No matching topics."),c())}function ad(n,a){if(n&1&&(s(0,"div",36),Q(1,id,3,1,"button",37,ed,!1,nd,2,0,"p",38),c()),n&2){let e=u(3);l(),q(e.searchResults())}}function rd(n,a){if(n&1){let e=Y();s(0,"div",30)(1,"mat-form-field",33)(2,"mat-label"),m(3,"Search topics\u2026"),c(),s(4,"input",34),x("ngModelChange",function(i){O(e);let r=u(2);return P(r.onSearchInput(i))})("focus",function(){O(e);let i=u(2);return P(i.onSearchFocus())})("blur",function(){O(e);let i=u(2);return P(i.onSearchBlur())}),c(),s(5,"mat-icon",35),m(6,"search"),c()(),E(7,ad,4,1,"div",36),c()}if(n&2){let e=u(2);l(4),C("ngModel",e.searchQuery()),l(3),S(e.showSearchResults()?7:-1)}}function od(n,a){if(n&1&&E(0,td,8,1,"div",29)(1,rd,8,2,"div",30),n&2){let e,t=u();S((e=t.selectedTopic())?0:1,e)}}function sd(n,a){if(n&1){let e=Y();s(0,"div",9)(1,"mat-form-field",41)(2,"mat-label"),m(3,"Title"),c(),s(4,"input",42),x("ngModelChange",function(i){O(e);let r=u();return P(r.externalTitle.set(i))}),c()(),s(5,"mat-form-field",41)(6,"mat-label"),m(7,"URL"),c(),s(8,"input",43),x("ngModelChange",function(i){O(e);let r=u();return P(r.externalUrl.set(i))}),c()()()}if(n&2){let e=u();l(4),C("ngModel",e.externalTitle()),l(4),C("ngModel",e.externalUrl())}}function ld(n,a){if(n&1){let e=Y();s(0,"button",44),x("click",function(){O(e);let i=u();return P(i.toggleInverted())}),s(1,"mat-icon"),m(2,"swap_vert"),c()()}if(n&2){let e=u();C("disabled",e.isSaving()),F("aria-pressed",e.isInverted())}}function cd(n,a){if(n&1&&(s(0,"p",24),m(1),c()),n&2){let e=u();l(),A(e.externalUrl().trim())}}function dd(n,a){if(n&1&&(s(0,"p",25),m(1),c()),n&2){let e=u();l(),A(e.errorMessage())}}var mn=class n{dialogRef=d(Bt);dialogData=d(vt);dataService=d(Ct);logger=d(Gt);topicTitle=this.dialogData.topicTitle;relatedKind=D("topic");searchQuery=D("");searchResults=D([]);showSearchResults=D(!1);selectedTopic=D(null);searchInput$=new j;externalTitle=D("");externalUrl=D("");step1Complete=He(()=>this.relatedKind()==="topic"?!!this.selectedTopic():this.externalTitle().trim().length>0&&this.isValidHttpUrl(this.externalUrl().trim()));entryPreviewTitle=He(()=>this.relatedKind()==="topic"?this.selectedTopic()?.Title??"":this.externalTitle().trim());relation=D("");inverted=D(!1);isInverted=He(()=>this.inverted()&&this.relatedKind()==="topic");previewExitTitle=He(()=>this.isInverted()?this.entryPreviewTitle():this.topicTitle);previewEntryTitle=He(()=>this.isInverted()?this.topicTitle:this.entryPreviewTitle());isSaving=D(!1);errorMessage=D(null);constructor(){this.searchInput$.pipe(Zt(300),Jt()).subscribe(a=>this.runSearch(a))}onSearchInput(a){this.searchQuery.set(a),this.searchInput$.next(a)}runSearch(a){let e=a.trim();if(e.length<2){this.searchResults.set([]),this.showSearchResults.set(!1);return}let t=e.toLowerCase(),i=this.dataService.getItems("Topic").filter(r=>r.Gnid!==this.dialogData.topicGnid).filter(r=>r.Title?.toLowerCase().includes(t)||r.Description?.toLowerCase().includes(t));this.searchResults.set(i),this.showSearchResults.set(!0)}onSearchFocus(){this.searchResults().length>0&&this.showSearchResults.set(!0)}onSearchBlur(){setTimeout(()=>this.showSearchResults.set(!1),150)}selectSearchResult(a){this.selectedTopic.set(a),this.searchQuery.set(""),this.searchResults.set([]),this.showSearchResults.set(!1)}clearSelectedTopic(){this.selectedTopic.set(null)}isValidHttpUrl(a){if(!a)return!1;try{let e=new URL(a);return e.protocol==="http:"||e.protocol==="https:"}catch{return!1}}toggleInverted(){this.inverted.update(a=>!a)}cancel(){this.dialogRef.close()}buildEntryFields(){return this.relatedKind()==="topic"?{EntryGnid:this.selectedTopic().Gnid}:{EntryTitle:this.externalTitle().trim(),EntryUrl:this.externalUrl().trim()}}async save(){let a=this.relation().trim();if(!(!this.step1Complete()||!a||this.isSaving())){this.isSaving.set(!0),this.errorMessage.set(null);try{let e=this.isInverted()?{ExitGnid:this.selectedTopic().Gnid,Relation:a,EntryGnid:this.dialogData.topicGnid}:X({ExitGnid:this.dialogData.topicGnid,Relation:a},this.buildEntryFields()),t=await this.dataService.addItem("Edge",e);this.dialogRef.close(t)}catch(e){this.logger.debugLog("Failed to create Edge",e),this.errorMessage.set("Could not save the relation. Please try again.")}finally{this.isSaving.set(!1)}}}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=N({type:n,selectors:[["app-add-edge-dialog"]],decls:50,vars:17,consts:[["stepper",""],["mat-dialog-title",""],[1,"add-edge-content"],["linear","",1,"add-edge-stepper"],["label","Related item",3,"completed"],[1,"step-body"],[1,"related-kind-toggle",3,"change","value"],["value","topic"],["value","external"],[1,"external-resource-fields"],[1,"step-actions"],["mat-button","","type","button",3,"click"],["mat-flat-button","","color","accent","type","button",1,"step-next-btn",3,"click","disabled"],["label","Relation",3,"completed"],["appearance","outline","subscriptSizing","dynamic",1,"relation-field"],["matInput","","type","text","placeholder",'e.g. "Supersedes" or "Approved by"',3,"ngModelChange","ngModel"],["mat-button","","type","button","matStepperPrevious",""],["label","Verify"],[1,"edge-preview"],[1,"preview-exit"],[1,"preview-relation-row"],["mat-icon-button","","type","button","title","Invert relation","aria-label","Invert relation",1,"invert-edge-btn",3,"disabled"],[1,"preview-relation"],[1,"preview-entry"],[1,"preview-entry-url"],[1,"add-edge-error"],["mat-button","","type","button","matStepperPrevious","",3,"disabled"],["mat-button","","type","button",3,"click","disabled"],["mat-flat-button","","color","accent","type","button",1,"save-edge-btn",3,"click","disabled"],[1,"selected-topic-chip"],[1,"search-field-wrapper"],[1,"selected-topic-title"],["mat-icon-button","","type","button","aria-label","Clear selected topic",1,"clear-selected-btn",3,"click"],["appearance","outline","subscriptSizing","dynamic",1,"topic-search-field"],["matInput","","type","text","autocomplete","off",3,"ngModelChange","focus","blur","ngModel"],["matSuffix",""],[1,"search-results-dropdown"],["type","button",1,"search-result-row"],[1,"search-no-results"],["type","button",1,"search-result-row",3,"mousedown"],[1,"search-result-title"],["appearance","outline","subscriptSizing","dynamic",1,"external-field"],["matInput","","type","text","autocomplete","off",3,"ngModelChange","ngModel"],["matInput","","type","url","autocomplete","off","placeholder","https://\u2026",3,"ngModelChange","ngModel"],["mat-icon-button","","type","button","title","Invert relation","aria-label","Invert relation",1,"invert-edge-btn",3,"click","disabled"]],template:function(e,t){if(e&1){let i=Y();s(0,"h2",1),m(1,"Add relation"),c(),s(2,"mat-dialog-content",2)(3,"mat-stepper",3,0)(5,"mat-step",4)(6,"div",5)(7,"mat-button-toggle-group",6),x("change",function(o){return t.relatedKind.set(o.value)}),s(8,"mat-button-toggle",7),m(9,"Existing topic"),c(),s(10,"mat-button-toggle",8),m(11,"External resource"),c()(),E(12,od,2,1)(13,sd,9,2,"div",9),c(),s(14,"div",10)(15,"button",11),x("click",function(){return t.cancel()}),m(16,"Cancel"),c(),s(17,"button",12),x("click",function(){O(i);let o=pe(4);return P(o.next())}),m(18," Next "),c()()(),s(19,"mat-step",13)(20,"div",5)(21,"mat-form-field",14)(22,"mat-label"),m(23,"Relation"),c(),s(24,"input",15),x("ngModelChange",function(o){return t.relation.set(o)}),c()()(),s(25,"div",10)(26,"button",16),m(27,"Back"),c(),s(28,"button",12),x("click",function(){O(i);let o=pe(4);return P(o.next())}),m(29," Next "),c()()(),s(30,"mat-step",17)(31,"div",5)(32,"div",18)(33,"p",19),m(34),c(),s(35,"div",20),E(36,ld,3,2,"button",21),s(37,"p",22),m(38),c()(),s(39,"p",23),m(40),c(),E(41,cd,2,1,"p",24),c(),E(42,dd,2,1,"p",25),c(),s(43,"div",10)(44,"button",26),m(45,"Back"),c(),s(46,"button",27),x("click",function(){return t.cancel()}),m(47,"Cancel"),c(),s(48,"button",28),x("click",function(){return t.save()}),m(49),c()()()()()}e&2&&(l(5),C("completed",t.step1Complete()),l(2),C("value",t.relatedKind()),l(5),S(t.relatedKind()==="topic"?12:13),l(5),C("disabled",!t.step1Complete()),l(2),C("completed",!!t.relation().trim()),l(5),C("ngModel",t.relation()),l(4),C("disabled",!t.relation().trim()),l(6),A(t.previewExitTitle()),l(2),S(t.relatedKind()==="topic"?36:-1),l(2),A(t.relation()),l(2),A(t.previewEntryTitle()),l(),S(t.relatedKind()==="external"&&t.externalUrl().trim()?41:-1),l(),S(t.errorMessage()?42:-1),l(2),C("disabled",t.isSaving()),l(2),C("disabled",t.isSaving()),l(2),C("disabled",t.isSaving()),l(),te(" ",t.isSaving()?"Saving\u2026":"Save"," "))},dependencies:[xt,bt,yt,_o,sa,la,go,bo,ca,pn,Ui,ji,zi,Gi,Qi,$i,Le,Ve,ot,Oe,Ae,or,Ni,Hi,nr],styles:[".add-edge-content[_ngcontent-%COMP%]{width:440px;max-width:90vw;padding-top:4px!important}.add-edge-stepper[_ngcontent-%COMP%]{background:transparent}.step-body[_ngcontent-%COMP%]{min-height:120px;padding:16px 0 8px}.related-kind-toggle[_ngcontent-%COMP%]{display:flex;margin-bottom:16px}.external-resource-fields[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:12px}.external-field[_ngcontent-%COMP%]{width:100%;--mdc-outlined-text-field-outline-color: var(--border);--mdc-outlined-text-field-hover-outline-color: var(--text-muted);--mdc-outlined-text-field-focus-outline-color: var(--text-accent)}.external-field[_ngcontent-%COMP%]     .mat-mdc-text-field-wrapper.mdc-text-field--outlined{background-color:var(--surface-1)!important;border-radius:4px}.step-actions[_ngcontent-%COMP%]{display:flex;justify-content:flex-end;gap:8px;padding-bottom:8px}.search-field-wrapper[_ngcontent-%COMP%]{position:relative}.topic-search-field[_ngcontent-%COMP%]{width:100%;--mdc-outlined-text-field-outline-color: var(--border);--mdc-outlined-text-field-hover-outline-color: var(--text-muted);--mdc-outlined-text-field-focus-outline-color: var(--text-accent)}.topic-search-field[_ngcontent-%COMP%]     .mat-mdc-text-field-wrapper.mdc-text-field--outlined{background-color:var(--surface-1)!important;border-radius:4px}.search-results-dropdown[_ngcontent-%COMP%]{position:absolute;top:calc(100% + 4px);left:0;right:0;z-index:10;max-height:220px;overflow-y:auto;background:var(--surface-1);border:.5px solid var(--border);border-radius:4px;box-shadow:0 5px 5px -3px #0003,0 8px 10px 1px #00000024,0 3px 14px 2px #0000001f}.search-result-row[_ngcontent-%COMP%]{display:block;width:100%;text-align:left;padding:10px 12px;background:none;border:none;border-bottom:.5px solid var(--border);cursor:pointer;font:inherit;color:var(--text-primary)}.search-result-row[_ngcontent-%COMP%]:last-child{border-bottom:none}.search-result-row[_ngcontent-%COMP%]:hover{background:var(--bg-accent)}.search-result-title[_ngcontent-%COMP%]{font-size:14px}.search-no-results[_ngcontent-%COMP%]{margin:0;padding:10px 12px;font-size:13px;color:var(--text-muted);font-style:italic}.selected-topic-chip[_ngcontent-%COMP%]{display:flex;align-items:center;gap:8px;padding:8px 8px 8px 12px;background:var(--surface-1);border:.5px solid var(--border);border-radius:4px}.selected-topic-chip[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{color:var(--text-accent);flex:0 0 auto}.selected-topic-title[_ngcontent-%COMP%]{flex:1 1 auto;font-size:14px;color:var(--text-primary)}.clear-selected-btn[_ngcontent-%COMP%]{flex:0 0 auto;width:28px;height:28px;padding:2px;line-height:24px;color:var(--text-muted)}.clear-selected-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:18px;width:18px;height:18px;line-height:18px}.relation-field[_ngcontent-%COMP%]{width:100%;--mdc-outlined-text-field-outline-color: var(--border);--mdc-outlined-text-field-hover-outline-color: var(--text-muted);--mdc-outlined-text-field-focus-outline-color: var(--text-accent)}.relation-field[_ngcontent-%COMP%]     .mat-mdc-text-field-wrapper.mdc-text-field--outlined{background-color:var(--surface-1)!important;border-radius:4px}.edge-preview[_ngcontent-%COMP%]{padding:12px 16px;background:var(--surface-1);border:.5px solid var(--border);border-radius:4px}.preview-exit[_ngcontent-%COMP%], .preview-entry[_ngcontent-%COMP%]{margin:0;font-size:15px;color:var(--text-primary)}.preview-relation-row[_ngcontent-%COMP%]{display:flex;align-items:center;gap:4px;margin:6px 0}.invert-edge-btn[_ngcontent-%COMP%]{flex:0 0 auto;width:28px;height:28px;padding:2px;margin-left:-5px;line-height:24px;color:var(--text-accent)}.invert-edge-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:18px;width:18px;height:18px;line-height:18px}.preview-relation[_ngcontent-%COMP%]{margin:0;font-size:13px;font-weight:600;color:var(--text-accent);text-transform:uppercase;letter-spacing:.04em}.preview-entry-url[_ngcontent-%COMP%]{margin:2px 0 0;font-size:12px;color:var(--text-muted);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.add-edge-error[_ngcontent-%COMP%]{margin:12px 0 0;font-size:13px;color:#b3261e}"]})};function yo(n){let a=+this._x.call(null,n),e=+this._y.call(null,n);return xo(this.cover(a,e),a,e,n)}function xo(n,a,e,t){if(isNaN(a)||isNaN(e))return n;var i,r=n._root,o={data:t},p=n._x0,g=n._y0,h=n._x1,_=n._y1,M,w,v,I,y,f,b,k;if(!r)return n._root=o,n;for(;r.length;)if((y=a>=(M=(p+h)/2))?p=M:h=M,(f=e>=(w=(g+_)/2))?g=w:_=w,i=r,!(r=r[b=f<<1|y]))return i[b]=o,n;if(v=+n._x.call(null,r.data),I=+n._y.call(null,r.data),a===v&&e===I)return o.next=r,i?i[b]=o:n._root=o,n;do i=i?i[b]=new Array(4):n._root=new Array(4),(y=a>=(M=(p+h)/2))?p=M:h=M,(f=e>=(w=(g+_)/2))?g=w:_=w;while((b=f<<1|y)===(k=(I>=w)<<1|v>=M));return i[k]=r,i[b]=o,n}function Co(n){var a,e,t=n.length,i,r,o=new Array(t),p=new Array(t),g=1/0,h=1/0,_=-1/0,M=-1/0;for(e=0;e<t;++e)isNaN(i=+this._x.call(null,a=n[e]))||isNaN(r=+this._y.call(null,a))||(o[e]=i,p[e]=r,i<g&&(g=i),i>_&&(_=i),r<h&&(h=r),r>M&&(M=r));if(g>_||h>M)return this;for(this.cover(g,h).cover(_,M),e=0;e<t;++e)xo(this,o[e],p[e],n[e]);return this}function wo(n,a){if(isNaN(n=+n)||isNaN(a=+a))return this;var e=this._x0,t=this._y0,i=this._x1,r=this._y1;if(isNaN(e))i=(e=Math.floor(n))+1,r=(t=Math.floor(a))+1;else{for(var o=i-e||1,p=this._root,g,h;e>n||n>=i||t>a||a>=r;)switch(h=(a<t)<<1|n<e,g=new Array(4),g[h]=p,p=g,o*=2,h){case 0:i=e+o,r=t+o;break;case 1:e=i-o,r=t+o;break;case 2:i=e+o,t=r-o;break;case 3:e=i-o,t=r-o;break}this._root&&this._root.length&&(this._root=p)}return this._x0=e,this._y0=t,this._x1=i,this._y1=r,this}function Do(){var n=[];return this.visit(function(a){if(!a.length)do n.push(a.data);while(a=a.next)}),n}function Mo(n){return arguments.length?this.cover(+n[0][0],+n[0][1]).cover(+n[1][0],+n[1][1]):isNaN(this._x0)?void 0:[[this._x0,this._y0],[this._x1,this._y1]]}function ce(n,a,e,t,i){this.node=n,this.x0=a,this.y0=e,this.x1=t,this.y1=i}function ko(n,a,e){var t,i=this._x0,r=this._y0,o,p,g,h,_=this._x1,M=this._y1,w=[],v=this._root,I,y;for(v&&w.push(new ce(v,i,r,_,M)),e==null?e=1/0:(i=n-e,r=a-e,_=n+e,M=a+e,e*=e);I=w.pop();)if(!(!(v=I.node)||(o=I.x0)>_||(p=I.y0)>M||(g=I.x1)<i||(h=I.y1)<r))if(v.length){var f=(o+g)/2,b=(p+h)/2;w.push(new ce(v[3],f,b,g,h),new ce(v[2],o,b,f,h),new ce(v[1],f,p,g,b),new ce(v[0],o,p,f,b)),(y=(a>=b)<<1|n>=f)&&(I=w[w.length-1],w[w.length-1]=w[w.length-1-y],w[w.length-1-y]=I)}else{var k=n-+this._x.call(null,v.data),G=a-+this._y.call(null,v.data),T=k*k+G*G;if(T<e){var ee=Math.sqrt(e=T);i=n-ee,r=a-ee,_=n+ee,M=a+ee,t=v.data}}return t}function Eo(n){if(isNaN(_=+this._x.call(null,n))||isNaN(M=+this._y.call(null,n)))return this;var a,e=this._root,t,i,r,o=this._x0,p=this._y0,g=this._x1,h=this._y1,_,M,w,v,I,y,f,b;if(!e)return this;if(e.length)for(;;){if((I=_>=(w=(o+g)/2))?o=w:g=w,(y=M>=(v=(p+h)/2))?p=v:h=v,a=e,!(e=e[f=y<<1|I]))return this;if(!e.length)break;(a[f+1&3]||a[f+2&3]||a[f+3&3])&&(t=a,b=f)}for(;e.data!==n;)if(i=e,!(e=e.next))return this;return(r=e.next)&&delete e.next,i?(r?i.next=r:delete i.next,this):a?(r?a[f]=r:delete a[f],(e=a[0]||a[1]||a[2]||a[3])&&e===(a[3]||a[2]||a[1]||a[0])&&!e.length&&(t?t[b]=e:this._root=e),this):(this._root=r,this)}function So(n){for(var a=0,e=n.length;a<e;++a)this.remove(n[a]);return this}function Io(){return this._root}function To(){var n=0;return this.visit(function(a){if(!a.length)do++n;while(a=a.next)}),n}function Ao(n){var a=[],e,t=this._root,i,r,o,p,g;for(t&&a.push(new ce(t,this._x0,this._y0,this._x1,this._y1));e=a.pop();)if(!n(t=e.node,r=e.x0,o=e.y0,p=e.x1,g=e.y1)&&t.length){var h=(r+p)/2,_=(o+g)/2;(i=t[3])&&a.push(new ce(i,h,_,p,g)),(i=t[2])&&a.push(new ce(i,r,_,h,g)),(i=t[1])&&a.push(new ce(i,h,o,p,_)),(i=t[0])&&a.push(new ce(i,r,o,h,_))}return this}function Oo(n){var a=[],e=[],t;for(this._root&&a.push(new ce(this._root,this._x0,this._y0,this._x1,this._y1));t=a.pop();){var i=t.node;if(i.length){var r,o=t.x0,p=t.y0,g=t.x1,h=t.y1,_=(o+g)/2,M=(p+h)/2;(r=i[0])&&a.push(new ce(r,o,p,_,M)),(r=i[1])&&a.push(new ce(r,_,p,g,M)),(r=i[2])&&a.push(new ce(r,o,M,_,h)),(r=i[3])&&a.push(new ce(r,_,M,g,h))}e.push(t)}for(;t=e.pop();)n(t.node,t.x0,t.y0,t.x1,t.y1);return this}function Po(n){return n[0]}function Fo(n){return arguments.length?(this._x=n,this):this._x}function Ro(n){return n[1]}function Vo(n){return arguments.length?(this._y=n,this):this._y}function Tt(n,a,e){var t=new da(a??Po,e??Ro,NaN,NaN,NaN,NaN);return n==null?t:t.addAll(n)}function da(n,a,e,t,i,r){this._x=n,this._y=a,this._x0=e,this._y0=t,this._x1=i,this._y1=r,this._root=void 0}function Lo(n){for(var a={data:n.data},e=a;n=n.next;)e=e.next={data:n.data};return a}var Me=Tt.prototype=da.prototype;Me.copy=function(){var n=new da(this._x,this._y,this._x0,this._y0,this._x1,this._y1),a=this._root,e,t;if(!a)return n;if(!a.length)return n._root=Lo(a),n;for(e=[{source:a,target:n._root=new Array(4)}];a=e.pop();)for(var i=0;i<4;++i)(t=a.source[i])&&(t.length?e.push({source:t,target:a.target[i]=new Array(4)}):a.target[i]=Lo(t));return n};Me.add=yo;Me.addAll=Co;Me.cover=wo;Me.data=Do;Me.extent=Mo;Me.find=ko;Me.remove=Eo;Me.removeAll=So;Me.root=Io;Me.size=To;Me.visit=Ao;Me.visitAfter=Oo;Me.x=Fo;Me.y=Vo;function Je(n){return function(){return n}}function qe(n){return(n()-.5)*1e-6}function pd(n){return n.x+n.vx}function md(n){return n.y+n.vy}function pa(n){var a,e,t,i=1,r=1;typeof n!="function"&&(n=Je(n==null?1:+n));function o(){for(var h,_=a.length,M,w,v,I,y,f,b=0;b<r;++b)for(M=Tt(a,pd,md).visitAfter(p),h=0;h<_;++h)w=a[h],y=e[w.index],f=y*y,v=w.x+w.vx,I=w.y+w.vy,M.visit(k);function k(G,T,ee,ye,Pe){var ae=G.data,je=G.r,re=y+je;if(ae){if(ae.index>w.index){var lt=v-ae.x-ae.vx,ct=I-ae.y-ae.vy,et=lt*lt+ct*ct;et<re*re&&(lt===0&&(lt=qe(t),et+=lt*lt),ct===0&&(ct=qe(t),et+=ct*ct),et=(re-(et=Math.sqrt(et)))/et*i,w.vx+=(lt*=et)*(re=(je*=je)/(f+je)),w.vy+=(ct*=et)*re,ae.vx-=lt*(re=1-re),ae.vy-=ct*re)}return}return T>v+re||ye<v-re||ee>I+re||Pe<I-re}}function p(h){if(h.data)return h.r=e[h.data.index];for(var _=h.r=0;_<4;++_)h[_]&&h[_].r>h.r&&(h.r=h[_].r)}function g(){if(a){var h,_=a.length,M;for(e=new Array(_),h=0;h<_;++h)M=a[h],e[M.index]=+n(M,h,a)}}return o.initialize=function(h,_){a=h,t=_,g()},o.iterations=function(h){return arguments.length?(r=+h,o):r},o.strength=function(h){return arguments.length?(i=+h,o):i},o.radius=function(h){return arguments.length?(n=typeof h=="function"?h:Je(+h),g(),o):n},o}function hd(n){return n.index}function No(n,a){var e=n.get(a);if(!e)throw new Error("node not found: "+a);return e}function ma(n){var a=hd,e=M,t,i=Je(30),r,o,p,g,h,_=1;n==null&&(n=[]);function M(f){return 1/Math.min(p[f.source.index],p[f.target.index])}function w(f){for(var b=0,k=n.length;b<_;++b)for(var G=0,T,ee,ye,Pe,ae,je,re;G<k;++G)T=n[G],ee=T.source,ye=T.target,Pe=ye.x+ye.vx-ee.x-ee.vx||qe(h),ae=ye.y+ye.vy-ee.y-ee.vy||qe(h),je=Math.sqrt(Pe*Pe+ae*ae),je=(je-r[G])/je*f*t[G],Pe*=je,ae*=je,ye.vx-=Pe*(re=g[G]),ye.vy-=ae*re,ee.vx+=Pe*(re=1-re),ee.vy+=ae*re}function v(){if(o){var f,b=o.length,k=n.length,G=new Map(o.map((ee,ye)=>[a(ee,ye,o),ee])),T;for(f=0,p=new Array(b);f<k;++f)T=n[f],T.index=f,typeof T.source!="object"&&(T.source=No(G,T.source)),typeof T.target!="object"&&(T.target=No(G,T.target)),p[T.source.index]=(p[T.source.index]||0)+1,p[T.target.index]=(p[T.target.index]||0)+1;for(f=0,g=new Array(k);f<k;++f)T=n[f],g[f]=p[T.source.index]/(p[T.source.index]+p[T.target.index]);t=new Array(k),I(),r=new Array(k),y()}}function I(){if(o)for(var f=0,b=n.length;f<b;++f)t[f]=+e(n[f],f,n)}function y(){if(o)for(var f=0,b=n.length;f<b;++f)r[f]=+i(n[f],f,n)}return w.initialize=function(f,b){o=f,h=b,v()},w.links=function(f){return arguments.length?(n=f,v(),w):n},w.id=function(f){return arguments.length?(a=f,w):a},w.iterations=function(f){return arguments.length?(_=+f,w):_},w.strength=function(f){return arguments.length?(e=typeof f=="function"?f:Je(+f),I(),w):e},w.distance=function(f){return arguments.length?(i=typeof f=="function"?f:Je(+f),y(),w):i},w}var ud={value:()=>{}};function Ho(){for(var n=0,a=arguments.length,e={},t;n<a;++n){if(!(t=arguments[n]+"")||t in e||/[\s.]/.test(t))throw new Error("illegal type: "+t);e[t]=[]}return new hn(e)}function hn(n){this._=n}function gd(n,a){return n.trim().split(/^|\s+/).map(function(e){var t="",i=e.indexOf(".");if(i>=0&&(t=e.slice(i+1),e=e.slice(0,i)),e&&!a.hasOwnProperty(e))throw new Error("unknown type: "+e);return{type:e,name:t}})}hn.prototype=Ho.prototype={constructor:hn,on:function(n,a){var e=this._,t=gd(n+"",e),i,r=-1,o=t.length;if(arguments.length<2){for(;++r<o;)if((i=(n=t[r]).type)&&(i=_d(e[i],n.name)))return i;return}if(a!=null&&typeof a!="function")throw new Error("invalid callback: "+a);for(;++r<o;)if(i=(n=t[r]).type)e[i]=Bo(e[i],n.name,a);else if(a==null)for(i in e)e[i]=Bo(e[i],n.name,null);return this},copy:function(){var n={},a=this._;for(var e in a)n[e]=a[e].slice();return new hn(n)},call:function(n,a){if((i=arguments.length-2)>0)for(var e=new Array(i),t=0,i,r;t<i;++t)e[t]=arguments[t+2];if(!this._.hasOwnProperty(n))throw new Error("unknown type: "+n);for(r=this._[n],t=0,i=r.length;t<i;++t)r[t].value.apply(a,e)},apply:function(n,a,e){if(!this._.hasOwnProperty(n))throw new Error("unknown type: "+n);for(var t=this._[n],i=0,r=t.length;i<r;++i)t[i].value.apply(a,e)}};function _d(n,a){for(var e=0,t=n.length,i;e<t;++e)if((i=n[e]).name===a)return i.value}function Bo(n,a,e){for(var t=0,i=n.length;t<i;++t)if(n[t].name===a){n[t]=ud,n=n.slice(0,t).concat(n.slice(t+1));break}return e!=null&&n.push({name:a,value:e}),n}var ha=Ho;var Xt=0,_i=0,gi=0,Go=1e3,un,fi,gn=0,At=0,_n=0,vi=typeof performance=="object"&&performance.now?performance:Date,Yo=typeof window=="object"&&window.requestAnimationFrame?window.requestAnimationFrame.bind(window):function(n){setTimeout(n,17)};function _a(){return At||(Yo(fd),At=vi.now()+_n)}function fd(){At=0}function ua(){this._call=this._time=this._next=null}ua.prototype=fn.prototype={constructor:ua,restart:function(n,a,e){if(typeof n!="function")throw new TypeError("callback is not a function");e=(e==null?_a():+e)+(a==null?0:+a),!this._next&&fi!==this&&(fi?fi._next=this:un=this,fi=this),this._call=n,this._time=e,ga()},stop:function(){this._call&&(this._call=null,this._time=1/0,ga())}};function fn(n,a,e){var t=new ua;return t.restart(n,a,e),t}function jo(){_a(),++Xt;for(var n=un,a;n;)(a=At-n._time)>=0&&n._call.call(void 0,a),n=n._next;--Xt}function zo(){At=(gn=vi.now())+_n,Xt=_i=0;try{jo()}finally{Xt=0,bd(),At=0}}function vd(){var n=vi.now(),a=n-gn;a>Go&&(_n-=a,gn=n)}function bd(){for(var n,a=un,e,t=1/0;a;)a._call?(t>a._time&&(t=a._time),n=a,a=a._next):(e=a._next,a._next=null,a=n?n._next=e:un=e);fi=n,ga(t)}function ga(n){if(!Xt){_i&&(_i=clearTimeout(_i));var a=n-At;a>24?(n<1/0&&(_i=setTimeout(zo,n-vi.now()-_n)),gi&&(gi=clearInterval(gi))):(gi||(gn=vi.now(),gi=setInterval(vd,Go)),Xt=1,Yo(zo))}}function Uo(){let n=1;return()=>(n=(1664525*n+1013904223)%4294967296)/4294967296}function $o(n){return n.x}function Qo(n){return n.y}var yd=10,xd=Math.PI*(3-Math.sqrt(5));function fa(n){var a,e=1,t=.001,i=1-Math.pow(t,1/300),r=0,o=.6,p=new Map,g=fn(M),h=ha("tick","end"),_=Uo();n==null&&(n=[]);function M(){w(),h.call("tick",a),e<t&&(g.stop(),h.call("end",a))}function w(y){var f,b=n.length,k;y===void 0&&(y=1);for(var G=0;G<y;++G)for(e+=(r-e)*i,p.forEach(function(T){T(e)}),f=0;f<b;++f)k=n[f],k.fx==null?k.x+=k.vx*=o:(k.x=k.fx,k.vx=0),k.fy==null?k.y+=k.vy*=o:(k.y=k.fy,k.vy=0);return a}function v(){for(var y=0,f=n.length,b;y<f;++y){if(b=n[y],b.index=y,b.fx!=null&&(b.x=b.fx),b.fy!=null&&(b.y=b.fy),isNaN(b.x)||isNaN(b.y)){var k=yd*Math.sqrt(.5+y),G=y*xd;b.x=k*Math.cos(G),b.y=k*Math.sin(G)}(isNaN(b.vx)||isNaN(b.vy))&&(b.vx=b.vy=0)}}function I(y){return y.initialize&&y.initialize(n,_),y}return v(),a={tick:w,restart:function(){return g.restart(M),a},stop:function(){return g.stop(),a},nodes:function(y){return arguments.length?(n=y,v(),p.forEach(I),a):n},alpha:function(y){return arguments.length?(e=+y,a):e},alphaMin:function(y){return arguments.length?(t=+y,a):t},alphaDecay:function(y){return arguments.length?(i=+y,a):+i},alphaTarget:function(y){return arguments.length?(r=+y,a):r},velocityDecay:function(y){return arguments.length?(o=1-y,a):1-o},randomSource:function(y){return arguments.length?(_=y,p.forEach(I),a):_},force:function(y,f){return arguments.length>1?(f==null?p.delete(y):p.set(y,I(f)),a):p.get(y)},find:function(y,f,b){var k=0,G=n.length,T,ee,ye,Pe,ae;for(b==null?b=1/0:b*=b,k=0;k<G;++k)Pe=n[k],T=y-Pe.x,ee=f-Pe.y,ye=T*T+ee*ee,ye<b&&(ae=Pe,b=ye);return ae},on:function(y,f){return arguments.length>1?(h.on(y,f),a):h.on(y)}}}function va(){var n,a,e,t,i=Je(-30),r,o=1,p=1/0,g=.81;function h(v){var I,y=n.length,f=Tt(n,$o,Qo).visitAfter(M);for(t=v,I=0;I<y;++I)a=n[I],f.visit(w)}function _(){if(n){var v,I=n.length,y;for(r=new Array(I),v=0;v<I;++v)y=n[v],r[y.index]=+i(y,v,n)}}function M(v){var I=0,y,f,b=0,k,G,T;if(v.length){for(k=G=T=0;T<4;++T)(y=v[T])&&(f=Math.abs(y.value))&&(I+=y.value,b+=f,k+=f*y.x,G+=f*y.y);v.x=k/b,v.y=G/b}else{y=v,y.x=y.data.x,y.y=y.data.y;do I+=r[y.data.index];while(y=y.next)}v.value=I}function w(v,I,y,f){if(!v.value)return!0;var b=v.x-a.x,k=v.y-a.y,G=f-I,T=b*b+k*k;if(G*G/g<T)return T<p&&(b===0&&(b=qe(e),T+=b*b),k===0&&(k=qe(e),T+=k*k),T<o&&(T=Math.sqrt(o*T)),a.vx+=b*v.value*t/T,a.vy+=k*v.value*t/T),!0;if(v.length||T>=p)return;(v.data!==a||v.next)&&(b===0&&(b=qe(e),T+=b*b),k===0&&(k=qe(e),T+=k*k),T<o&&(T=Math.sqrt(o*T)));do v.data!==a&&(G=r[v.data.index]*t/T,a.vx+=b*G,a.vy+=k*G);while(v=v.next)}return h.initialize=function(v,I){n=v,e=I,_()},h.strength=function(v){return arguments.length?(i=typeof v=="function"?v:Je(+v),_(),h):i},h.distanceMin=function(v){return arguments.length?(o=v*v,h):Math.sqrt(o)},h.distanceMax=function(v){return arguments.length?(p=v*v,h):Math.sqrt(p)},h.theta=function(v){return arguments.length?(g=v*v,h):Math.sqrt(g)},h}var Cd=["frame"],wd=["actions"],ba=(n,a)=>a.id;function Dd(n,a){if(n&1&&(oe(),s(0,"path",8),wi("graph-leave"),Ci("graph-enter"),c()),n&2){let e=a.$implicit;F("d",e.path)}}function Md(n,a){if(n&1){let e=Y();oe(),s(0,"g",16),wi("graph-leave"),Ci("graph-enter"),x("click",function(){let i=O(e).$implicit,r=u();return P(r.onNodeClick(i))})("keydown.enter",function(){let i=O(e).$implicit,r=u();return P(r.onNodeClick(i))}),s(1,"title"),m(2),c(),H(3,"circle"),s(4,"text",17),m(5),c()()}if(n&2){let e=a.$implicit;z("is-center",e.kind==="center")("is-external",e.kind==="external")("is-clickable",e.kind==="topic"),F("role",e.kind==="topic"?"button":null)("tabindex",e.kind==="topic"?0:null)("aria-label",e.kind==="topic"?"Centre graph on "+e.title:null)("transform","translate("+e.x+","+e.y+")"),l(2),A(e.title),l(),F("r",e.r),l(),F("y",e.r+15),l(),A(e.label)}}function kd(n,a){if(n&1&&(oe(),s(0,"text",10),wi("graph-leave"),Ci("graph-enter"),m(1),c()),n&2){let e=a.$implicit;F("x",e.labelX)("y",e.labelY),l(),A(e.relation)}}function Ed(n,a){n&1&&(s(0,"p",11),m(1,"No relations yet."),c())}function Sd(n,a){if(n&1){let e=Y();s(0,"button",18),x("click",function(){O(e);let i=u();return P(i.goToCenterTopic())}),s(1,"span",19),m(2),c()()}if(n&2){let e=u();C("title","Go to "+e.centerTitle()),l(2),te("Go to ",e.centerTitle())}}var qo=14,Id=9,Ko=3,Td=44,Wo=32,Xo=90,Ad=30,Od=40,Pd=240,Zo=.14,vn=class n{data=d(vt);dataService=d(Ct);toast=d(Wt);router=d(Ai);dialogRef=d(Bt);frame=ni.required("frame");actionsEl=ni.required("actions",{read:U});frameHeight=D(null);nodeViews=D([]);linkViews=D([]);isEmpty=D(!1);centerTitle=D("");centerGnid=D("");isHome=He(()=>this.centerGnid()===this.data.topicGnid);nodes=[];links=[];loops=[];centerNode;simulation=null;resizeObserver=null;pane=null;width=0;height=0;linkDistance=0;constructor(){this.buildGraph(this.data.topicGnid,this.data.topicTitle),Fe(()=>{let a=this.frame().nativeElement;this.pane=a.closest(".cdk-overlay-pane"),this.resizeObserver=new ResizeObserver(e=>{for(let t of e)t.target===a?this.layout(t.contentRect.width,t.contentRect.height):this.fitToDialog()}),this.pane&&this.resizeObserver.observe(this.pane),this.resizeObserver.observe(a)}),d(Da).onDestroy(()=>{this.resizeObserver?.disconnect(),this.simulation?.stop()})}buildGraph(a,e){let t=this.dataService.getItems("Edge"),i=new Map(this.nodes.map(_=>[_.id,_])),r=new Map,o=[],p=[],g=(_,M,w)=>{let v=r.get(_);return v||(v=i.get(_)??{id:_,title:M,kind:w},v.title=M,v.kind=w,r.set(_,v)),v},h=g(a,e,"center");for(let _ of t)if(_.ExitGnid===a){if(_.EntryUrl){let M=g("url:"+_.EntryUrl,_.EntryTitle||_.EntryUrl,"external");o.push({id:_.Gnid,relation:_.Relation,source:h,target:M,bend:0})}else if(_.EntryGnid===a)p.push({id:_.Gnid,relation:_.Relation,index:p.length});else if(_.EntryGnid){let M=g(_.EntryGnid,this.resolveTitle(_.EntryGnid),"topic");o.push({id:_.Gnid,relation:_.Relation,source:h,target:M,bend:0})}}else if(_.EntryGnid===a){let M=g(_.ExitGnid,this.resolveTitle(_.ExitGnid),"topic");o.push({id:_.Gnid,relation:_.Relation,source:M,target:h,bend:0})}this.centerNode=h,this.nodes=[...r.values()],this.links=o,this.loops=p,this.assignBends(),this.centerTitle.set(e),this.centerGnid.set(a),this.isEmpty.set(o.length===0&&p.length===0)}onNodeClick(a){a.kind==="external"?this.toast.error("Cannot center on external edges"):a.kind==="topic"&&this.recenter(a.id,a.title)}goHome(){this.isHome()||this.recenter(this.data.topicGnid,this.data.topicTitle)}goToCenterTopic(){let a=this.centerGnid();this.dialogRef.afterClosed().subscribe(()=>{this.router.navigate(["/topics",a])}),this.dialogRef.close()}recenter(a,e){if(!this.simulation)return;let t=this.centerNode;this.buildGraph(a,e);let i=this.centerNode;t.fx=null,t.fy=null,i.x??=t.x??this.width/2,i.y??=t.y??this.height/2,i.fx=i.x,i.fy=i.y;let r=this.nodes.filter(o=>o.x===void 0);r.forEach((o,p)=>{let g=2*Math.PI*p/r.length-Math.PI/2;o.x=(i.x??0)+12*Math.cos(g),o.y=(i.y??0)+12*Math.sin(g)}),this.simulation.nodes(this.nodes),this.simulation.force("link",this.linkForce()),this.simulation.alpha(1).restart(),this.render()}easeCenter(){let a=this.centerNode,e=this.width/2,t=this.height/2,i=a.fx??e,r=a.fy??t,o=Math.abs(e-i)<.5&&Math.abs(t-r)<.5;a.fx=o?e:i+(e-i)*Zo,a.fy=o?t:r+(t-r)*Zo}resolveTitle(a){let e=this.dataService.getItems("Topic").find(t=>t.Gnid===a);if(e?.Title)return e.Title;for(let t of Object.values(this.dataService.getAllData())){let i=t.find(r=>r?.Gnid===a);if(i)return i.Title??i.Text??a}return a}assignBends(){let a=new Map;for(let e of this.links){let t=e.source===this.centerNode?e.target:e.source,i=a.get(t.id)??[];i.push(e),a.set(t.id,i)}for(let e of a.values())e.forEach((t,i)=>{let r=(i-(e.length-1)/2)*Td;t.bend=t.source===this.centerNode?r:-r})}fitToDialog(){if(!this.pane)return;let a=this.frame().nativeElement,e=this.actionsEl().nativeElement,t=a.offsetTop,i=e.offsetTop+e.offsetHeight-(a.offsetTop+a.offsetHeight),r=this.pane.getBoundingClientRect().height-t-i;this.frameHeight.set(Math.max(Pd,Math.floor(r)))}layout(a,e){if(a<=0||e<=0)return;if(this.width=a,this.height=e,this.linkDistance=Math.max(120,Math.min(260,Math.min(a,e)*.32)),this.simulation){this.simulation.force("link",this.linkForce()),this.simulation.alpha(.5).restart();return}let t=a/2,i=e/2;this.centerNode.fx=t,this.centerNode.fy=i;let r=this.nodes.filter(o=>o!==this.centerNode);r.forEach((o,p)=>{let g=2*Math.PI*p/r.length-Math.PI/2;o.x=t+this.linkDistance*Math.cos(g),o.y=i+this.linkDistance*Math.sin(g)}),this.simulation=fa(this.nodes).force("link",this.linkForce()).force("charge",va().strength(-600)).force("collide",pa(60)).on("tick",()=>{this.easeCenter(),this.render()}),this.render()}linkForce(){return ma(this.links).distance(this.linkDistance).strength(.6)}render(){for(let a of this.nodes){if(a===this.centerNode){a.x=a.fx??this.width/2,a.y=a.fy??this.height/2;continue}a.x=this.clamp(a.x??0,Xo,this.width-Xo),a.y=this.clamp(a.y??0,Ad,this.height-Od)}this.nodeViews.set(this.nodes.map(a=>({id:a.id,kind:a.kind,x:a.x??0,y:a.y??0,r:this.radius(a),label:this.truncate(a.title),title:a.title}))),this.linkViews.set([...this.links.map(a=>this.linkView(a)),...this.loops.map(a=>this.loopView(a))])}linkView(a){let e=a.source.x??0,t=a.source.y??0,i=a.target.x??0,r=a.target.y??0,o=i-e,p=r-t,g=Math.hypot(o,p)||1,h=-p/g,_=o/g,M=(e+i)/2,w=(t+r)/2,v=M+h*a.bend*2,I=w+_*a.bend*2,y=this.towards(e,t,v,I,this.radius(a.source)),f=this.towards(i,r,v,I,this.radius(a.target)+Ko);return{id:a.id,relation:a.relation,path:`M${y.x},${y.y}Q${v},${I} ${f.x},${f.y}`,labelX:M+h*a.bend,labelY:w+_*a.bend}}loopView(a){let e=this.centerNode.x??0,t=this.centerNode.y??0,i=60+a.index*30,r=30+a.index*12,o=t-qo;return{id:a.id,relation:a.relation,path:`M${e-6},${o+1}C${e-r},${o-i} ${e+r},${o-i} ${e+6},${o-Ko}`,labelX:e,labelY:o-i*.75}}towards(a,e,t,i,r){let o=t-a,p=i-e,g=Math.hypot(o,p)||1;return{x:a+o/g*r,y:e+p/g*r}}radius(a){return a.kind==="center"?qo:Id}truncate(a){return a.length>Wo?a.slice(0,Wo-1).trimEnd()+"\u2026":a}clamp(a,e,t){return Math.max(e,Math.min(t,a))}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=N({type:n,selectors:[["app-traverse-graph-dialog"]],viewQuery:function(e,t){e&1&&Mi(t.frame,Cd,5)(t.actionsEl,wd,5,U),e&2&&ki(2)},decls:24,vars:6,consts:[["frame",""],["actions",""],["mat-dialog-title",""],[1,"graph-content"],[1,"graph-frame"],["role","img",1,"graph-svg"],["id","traverse-graph-arrow","viewBox","0 0 8 8","refX","7","refY","4","markerWidth","8","markerHeight","8","markerUnits","userSpaceOnUse","orient","auto"],["d","M0,0L8,4L0,8Z",1,"graph-arrow"],["marker-end","url(#traverse-graph-arrow)",1,"graph-link"],[1,"graph-node",3,"is-center","is-external","is-clickable"],[1,"graph-relation"],[1,"graph-empty"],["align","end"],["mat-icon-button","","type","button","title","Back to selected topic","aria-label","Back to selected topic",1,"graph-home-btn",3,"click","disabled"],["mat-button","","type","button",1,"graph-goto-btn",3,"title"],["mat-button","","type","button","mat-dialog-close",""],[1,"graph-node",3,"click","keydown.enter"],[1,"graph-node-label"],["mat-button","","type","button",1,"graph-goto-btn",3,"click","title"],[1,"graph-goto-label"]],template:function(e,t){e&1&&(s(0,"h2",2),m(1,"Traverse graph"),c(),s(2,"mat-dialog-content",3)(3,"div",4,0),oe(),s(5,"svg",5)(6,"defs")(7,"marker",6),H(8,"path",7),c()(),Q(9,Dd,1,1,":svg:path",8,ba),Q(11,Md,6,14,":svg:g",9,ba),Q(13,kd,2,3,":svg:text",10,ba),c(),E(15,Ed,2,0,"p",11),c()(),Ke(),s(16,"mat-dialog-actions",12,1)(18,"button",13),x("click",function(){return t.goHome()}),s(19,"mat-icon"),m(20,"home"),c()(),E(21,Sd,3,2,"button",14),s(22,"button",15),m(23,"Close"),c()()),e&2&&(l(3),ht("height",t.frameHeight(),"px"),l(2),F("aria-label","Graph of relations for "+t.centerTitle()),l(4),q(t.linkViews()),l(2),q(t.nodeViews()),l(2),q(t.linkViews()),l(2),S(t.isEmpty()?15:-1),l(3),C("disabled",t.isHome()),l(3),S(t.isHome()?-1:21))},dependencies:[xt,Li,bt,Ht,yt,Le,Ve,ot,Oe,Ae],styles:[".graph-content[_ngcontent-%COMP%]{flex:0 0 auto;max-height:none;overflow:hidden}.graph-frame[_ngcontent-%COMP%]{--graph-bg: var(--surface-0);position:relative;box-sizing:border-box;min-height:240px;background:var(--graph-bg);border:.5px solid var(--border);border-radius:8px;overflow:hidden}.graph-svg[_ngcontent-%COMP%]{position:absolute;inset:0;display:block;width:100%;height:100%}.graph-link[_ngcontent-%COMP%]{fill:none;stroke:var(--text-muted);stroke-width:1.5}.graph-arrow[_ngcontent-%COMP%]{fill:var(--text-muted)}.graph-node[_ngcontent-%COMP%]   circle[_ngcontent-%COMP%]{fill:var(--surface-1);stroke:var(--text-secondary);stroke-width:1.5;transition:r .3s ease,fill .3s ease,stroke .3s ease}.graph-node.is-clickable[_ngcontent-%COMP%], .graph-node.is-external[_ngcontent-%COMP%]{cursor:pointer;outline:none}.graph-node.is-clickable[_ngcontent-%COMP%]   .graph-node-label[_ngcontent-%COMP%], .graph-node.is-external[_ngcontent-%COMP%]   .graph-node-label[_ngcontent-%COMP%]{pointer-events:auto;cursor:pointer;-webkit-user-select:none;user-select:none}.graph-node.is-clickable[_ngcontent-%COMP%]:hover   circle[_ngcontent-%COMP%], .graph-node.is-clickable[_ngcontent-%COMP%]:focus-visible   circle[_ngcontent-%COMP%]{stroke:var(--text-accent);stroke-width:2.5}.graph-node.is-clickable[_ngcontent-%COMP%]:hover   .graph-node-label[_ngcontent-%COMP%], .graph-node.is-clickable[_ngcontent-%COMP%]:focus-visible   .graph-node-label[_ngcontent-%COMP%]{fill:var(--text-accent)}.graph-node.is-center[_ngcontent-%COMP%]   circle[_ngcontent-%COMP%]{fill:var(--text-accent);stroke:var(--text-accent)}.graph-node.is-external[_ngcontent-%COMP%]   circle[_ngcontent-%COMP%]{fill:var(--graph-bg);stroke-dasharray:3 2}.graph-node-label[_ngcontent-%COMP%], .graph-relation[_ngcontent-%COMP%]{font-size:12px;text-anchor:middle;paint-order:stroke;stroke:var(--graph-bg);stroke-width:4px;stroke-linejoin:round;pointer-events:none}.graph-node-label[_ngcontent-%COMP%]{fill:var(--text-primary)}.graph-node.is-center[_ngcontent-%COMP%]   .graph-node-label[_ngcontent-%COMP%]{font-weight:600}.graph-relation[_ngcontent-%COMP%]{fill:var(--text-accent);font-weight:600;dominant-baseline:middle}.graph-empty[_ngcontent-%COMP%]{position:absolute;left:0;right:0;bottom:16px;margin:0;text-align:center;font-size:12px;color:var(--text-muted)}.graph-enter[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_graph-fade-in .4s ease-out}.graph-leave[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_graph-fade-out .25s ease-in forwards;pointer-events:none}@keyframes _ngcontent-%COMP%_graph-fade-in{0%{opacity:0}to{opacity:1}}@keyframes _ngcontent-%COMP%_graph-fade-out{0%{opacity:1}to{opacity:0}}.graph-goto-label[_ngcontent-%COMP%]{display:inline-block;max-width:40vw;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;vertical-align:bottom}"]})};var Jo=/(https?:\/\/[^\s<>"']+)/g,bn=class n{transform(a){if(!a)return"";let e="",t=0,i;for(Jo.lastIndex=0;(i=Jo.exec(a))!==null;){let r=i[0],o=i.index;e+=this.escapeHtml(a.slice(t,o)),e+=this.buildLink(r),t=o+r.length}return e+=this.escapeHtml(a.slice(t)),e}buildLink(a){let e=this.extractDomain(a),t=this.escapeHtml(a),i=this.escapeHtml(e);return`<a href="${t}" target="_blank" rel="noopener noreferrer">${i}</a>`}extractDomain(a){try{return new URL(a).hostname}catch{return a}}escapeHtml(a){return a.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}static \u0275fac=function(e){return new(e||n)};static \u0275pipe=Sa({name:"linkify",type:n,pure:!0})};var Fd=["commentsList"],Rd=()=>[],bi=(n,a)=>a.Gnid,ts=(n,a)=>a.value,is=(n,a)=>a.FileName;function Vd(n,a){n&1&&H(0,"mat-progress-bar",4)}function Ld(n,a){if(n&1&&(s(0,"mat-form-field",12)(1,"mat-label"),m(2,"Closed"),c(),H(3,"input",48)(4,"mat-datepicker-toggle",49)(5,"mat-datepicker",null,3),c()),n&2){let e=pe(6);l(3),C("matDatepicker",e),l(),C("for",e)}}function Nd(n,a){if(n&1&&(s(0,"mat-option",21),m(1),c()),n&2){let e=a.$implicit;C("value",e.Gnid),l(),A(e.Name)}}function Bd(n,a){if(n&1){let e=Y();s(0,"button",50),x("click",function(){O(e);let i=u();return P(i.assignToMe())}),s(1,"mat-icon"),m(2,"person_add"),c()()}}function Hd(n,a){if(n&1&&(s(0,"mat-option",21),m(1),c()),n&2){let e=a.$implicit;C("value",e.value),l(),A(e.label)}}function zd(n,a){if(n&1&&(s(0,"mat-optgroup",25),Q(1,Hd,2,2,"mat-option",21,ts),c()),n&2){let e=u();l(),q(e.ownerUserOptions())}}function Gd(n,a){if(n&1&&(s(0,"mat-option",21),m(1),c()),n&2){let e=a.$implicit;C("value",e.value),l(),A(e.label)}}function Yd(n,a){if(n&1&&(s(0,"mat-optgroup",26),Q(1,Gd,2,2,"mat-option",21,ts),c()),n&2){let e=u();l(),q(e.ownerRoleOptions())}}function jd(n,a){if(n&1){let e=Y();s(0,"mat-chip-row",51),x("removed",function(){let i=O(e).$implicit,r=u();return P(r.removeTag(i))})("click",function(i){let r=O(e).$implicit,o=u();return P(o.selectTagInSidebar(r,i))}),m(1),s(2,"button",52)(3,"mat-icon"),m(4,"cancel"),c()()()}if(n&2){let e=a.$implicit;C("title","Show #"+e+" in the sidebar"),l(),te(" #",e," "),l(),F("aria-label","Remove #"+e)}}function Ud(n,a){if(n&1&&(s(0,"a",60),x("click",function(t){return t.stopPropagation()}),m(1),c()),n&2){let e=u().$implicit,t=u();C("href",t.getEdgeEntryUrl(e),ka),l(),te(" ",t.getEdgeEntryTitle(e)," ")}}function $d(n,a){if(n&1){let e=Y();s(0,"a",61),x("click",function(i){O(e);let r=u().$implicit,o=u();return P(o.navigateToEdgeEntry(r,i))})("keydown.enter",function(i){O(e);let r=u().$implicit,o=u();return P(o.navigateToEdgeEntry(r,i))}),m(1),c()}if(n&2){let e=u().$implicit,t=u();l(),te(" ",t.getEdgeEntryTitle(e)," ")}}function Qd(n,a){if(n&1){let e=Y();s(0,"mat-list-item")(1,"span",53)(2,"span",54)(3,"span",55),m(4),c(),s(5,"span",56),m(6),c(),E(7,Ud,2,2,"a",57)(8,$d,2,1,"a",58),s(9,"button",59),x("click",function(i){let r=O(e).$implicit,o=u();return P(o.deleteEdge(r,i))}),s(10,"mat-icon"),m(11,"delete"),c()()()()()}if(n&2){let e,t,i=a.$implicit,r=u();l(3),C("title",((e=r.topic())==null?null:e.Title)??""),l(),A((t=r.topic())==null?null:t.Title),l(2),A(i.Relation),l(),S(r.isExternalResourceEdge(i)?7:8),l(2),C("disabled",r.isLoading())}}function qd(n,a){n&1&&(s(0,"p",39),m(1,"No relations yet."),c())}function Kd(n,a){if(n&1){let e=Y();s(0,"mat-list-item")(1,"span",53)(2,"span",54)(3,"a",62),x("click",function(i){let r=O(e).$implicit,o=u();return P(o.navigateToEdgeExit(r,i))})("keydown.enter",function(i){let r=O(e).$implicit,o=u();return P(o.navigateToEdgeExit(r,i))}),m(4),c(),s(5,"span",56),m(6),c(),s(7,"span",55),m(8),c(),s(9,"button",59),x("click",function(i){let r=O(e).$implicit,o=u();return P(o.deleteEdge(r,i))}),s(10,"mat-icon"),m(11,"delete"),c()()()()()}if(n&2){let e,t,i=a.$implicit,r=u();l(4),te(" ",r.getEdgeExitTitle(i)," "),l(2),A(i.Relation),l(),C("title",((e=r.topic())==null?null:e.Title)??""),l(),A((t=r.topic())==null?null:t.Title),l(),C("disabled",r.isLoading())}}function Wd(n,a){n&1&&(s(0,"p",39),m(1,"No incoming relations yet."),c())}function Xd(n,a){if(n&1){let e=Y();s(0,"div",76),x("click",function(){let i=O(e).$implicit,r=u(5);return P(r.onDocumentClick(i))}),oe(),s(1,"svg",77),H(2,"path"),c(),Ke(),s(3,"span",73),m(4),c()()}if(n&2){let e,t,i=a.$implicit,r=u(5);l(2),F("d",(e=r.getFileTypeIcon(r.getDocExtension(i.FileName)))==null?null:e.path)("fill",(t=r.getFileTypeIcon(r.getDocExtension(i.FileName)))==null?null:t.color),l(2),A(i.OriginalName)}}function Zd(n,a){if(n&1&&(s(0,"div",74),Q(1,Xd,5,3,"div",75,is),c()),n&2){let e=u().$implicit;l(),q(e.Docs)}}function Jd(n,a){if(n&1){let e=Y();s(0,"div",71),x("click",function(){let i=O(e).$implicit,r=u(3);return P(r.openEmailDialog(i))}),s(1,"mat-icon"),m(2,"mail"),c(),s(3,"span",72),m(4),Ft(5,"date"),c(),s(6,"span",73),m(7),c()(),E(8,Zd,3,0,"div",74)}if(n&2){let e=a.$implicit;l(4),A(ii(5,3,e.date,"dd MMM y")),l(3),A(e.subject),l(),S(e.Docs&&e.Docs.length>0?8:-1)}}function ep(n,a){if(n&1){let e=Y();s(0,"div",71),x("click",function(){let i=O(e).$implicit,r=u(3);return P(r.onDocumentClick(i))}),oe(),s(1,"svg",77),H(2,"path"),c(),Ke(),s(3,"span",73),m(4),c()()}if(n&2){let e,t,i=a.$implicit,r=u(3);l(2),F("d",(e=r.getFileTypeIcon(r.getDocExtension(i.FileName)))==null?null:e.path)("fill",(t=r.getFileTypeIcon(r.getDocExtension(i.FileName)))==null?null:t.color),l(2),A(i.OriginalName)}}function tp(n,a){if(n&1&&(s(0,"div",69),Q(1,Jd,9,6,null,null,bi),Q(3,ep,5,3,"div",70,is),c()),n&2){let e=u().$implicit,t=u();l(),q(t.getEmailsForComment(e.Gnid)),l(2),q(e.Docs??Aa(0,Rd))}}function ip(n,a){if(n&1){let e=Y();s(0,"div",63),x("dragover",function(i){let r=O(e).$implicit,o=u();return P(o.onCommentDragOver(i,r))})("dragleave",function(){let i=O(e).$implicit,r=u();return P(r.onCommentDragLeave(i))})("drop",function(i){let r=O(e).$implicit,o=u();return P(o.onCommentDrop(i,r))}),s(1,"div",64)(2,"span",65),m(3),c(),s(4,"button",66),x("click",function(){let i=O(e).$implicit,r=u();return P(r.deleteComment(i))}),s(5,"mat-icon"),m(6,"delete"),c()()(),H(7,"p",67),Ft(8,"linkify"),s(9,"span",68),m(10),Ft(11,"date"),c(),E(12,tp,5,1,"div",69),c()}if(n&2){let e=a.$implicit,t=u();z("drag-over",t.dragOverCommentGnid()===e.Gnid),l(3),A(e.Author),l(),C("disabled",t.isLoading()),l(3),C("innerHTML",Pa(8,7,e.Text),Ma),l(3),A(ii(11,9,e.Timestamp,"dd MMM y, HH:mm")),l(2),S(t.getEmailsForComment(e.Gnid).length>0||e.Docs&&e.Docs.length>0?12:-1)}}function np(n,a){n&1&&(s(0,"p",43),m(1,"No notes yet."),c())}var es=class n{logger=d(Gt);router=d(Ai);route=d(La);fb=d(rr);dataService=d(Ct);fileParserMsg=d(on);dialog=d(er);toast=d(Wt);gnid;isLoading=D(!1);topic=D(null);comments=D([]);emails=D([]);edges=D([]);incomingEdges=D([]);dragOverCommentGnid=D(null);commentsListEl=ni("commentsList");siteUsers=D([]);organizations=D([]);roles=D([]);tags=D([]);tagSeparatorKeys=[13,188];topicForm=this.fb.group({title:["",zt.required],description:[""],open:[!0],organization:[null],owner:[null],closed:[null]});initialized=!1;async ngOnInit(){this.logger.debugLog("Topic component initialized",{gnid:this.gnid}),this.topicForm.get("title").valueChanges.pipe(Zt(800),Jt()).subscribe(()=>this.autoSaveTopic()),this.topicForm.get("description").valueChanges.pipe(Zt(800),Jt()).subscribe(()=>this.autoSaveTopic()),this.topicForm.get("open").valueChanges.subscribe(a=>{a===!1&&this.topicForm.get("closed").setValue(new Date,{emitEvent:!1}),this.autoSaveTopic()}),this.topicForm.get("organization").valueChanges.subscribe(a=>{this.syncOwnerAvailability(a),a||this.topicForm.get("owner").setValue(null,{emitEvent:!1}),this.autoSaveTopic()}),this.topicForm.get("owner").valueChanges.subscribe(()=>this.autoSaveTopic()),this.topicForm.get("closed").valueChanges.subscribe(()=>this.autoSaveTopic()),this.isLoading.set(!0);try{await this.dataService.ready,this.loadTopic(),this.loadComments(),this.loadEmails(),this.loadEdges(),this.loadSiteUsers(),this.loadOrganizations(),this.loadRoles(),this.initialized=!0}finally{this.isLoading.set(!1)}}ngOnChanges(a){this.initialized&&a.gnid&&!a.gnid.firstChange&&(this.loadTopic(),this.loadComments(),this.loadEmails(),this.loadEdges())}loadTopic(){let e=this.dataService.getItems("Topic").find(t=>t.Gnid===this.gnid)??null;this.topic.set(e),this.tags.set(e?.tags??[]),e?(this.topicForm.setValue({title:e.Title??"",description:e.Description??"",open:e.Open??!1,organization:e.Organization??null,owner:typeof e.Owner=="string"?e.Owner:null,closed:e.Closed?new Date(e.Closed):null},{emitEvent:!1}),this.syncOwnerAvailability(e.Organization??null)):(this.topicForm.reset({title:"",description:"",open:!0,organization:null,owner:null,closed:null},{emitEvent:!1}),this.syncOwnerAvailability(null))}loadSiteUsers(){let e=this.dataService.getItems("siteUsers").filter(t=>t.PrincipalType===1&&!!t.Email);this.siteUsers.set(e)}loadOrganizations(){let a=this.dataService.getItems("Organization");this.organizations.set(a.map(e=>Ue(X({},e),{Members:e.Members??[],Roles:e.Roles??[]})))}loadRoles(){this.roles.set(this.dataService.getItems("Role"))}isOwnedByMe(){let a=this.dataService.getCurrentUserFromCache()?.Id;if(a==null)return!1;let e=xr(this.topicForm.get("owner")?.value??null);return e?.kind==="user"&&e.userId===a}ownerUserOptions(){let a=this.selectedOrganization();return a?this.siteUsers().filter(e=>a.Members.includes(e.Id)).map(e=>({value:qi({kind:"user",userId:e.Id}),label:e.Title})):[]}ownerRoleOptions(){let a=this.selectedOrganization();if(!a)return[];let e=new Map(this.roles().map(t=>[t.Gnid,t]));return a.Roles.map(t=>e.get(t)).filter(t=>!!t).map(t=>({value:qi({kind:"role",roleGnid:t.Gnid}),label:t.Name}))}selectedOrganization(){let a=this.topicForm.get("organization")?.value;return a?this.organizations().find(e=>e.Gnid===a)??null:null}syncOwnerAvailability(a){let e=this.topicForm.get("owner");a?e.enable({emitEvent:!1}):e.disable({emitEvent:!1})}isTopicOpen(){return!!this.topicForm.get("open")?.value}assignToMe(){let a=this.dataService.getCurrentUserFromCache()?.Id;if(a==null){this.logger.debugLog("Assign to me skipped - no current user in cache"),this.toast.error("Could not determine the current user - try refreshing the page");return}let e=this.organizations().find(t=>t.Members.includes(a));if(!e){this.logger.debugLog("Assign to me skipped - current user is not a Member of any organization",{currentUserId:a}),this.toast.error("You are not a Member of any organization - add yourself to one under Settings first");return}this.topicForm.get("organization").setValue(e.Gnid,{emitEvent:!1}),this.syncOwnerAvailability(e.Gnid),this.topicForm.get("owner").setValue(qi({kind:"user",userId:a}))}async autoSaveTopic(){let a=this.topic();if(!a||this.topicForm.invalid)return;let{title:e,description:t,open:i,organization:r,owner:o,closed:p}=this.topicForm.getRawValue(),g=e??"",h=t??"",_=i??!0,M=p?p.getTime():null,y=a,{Id:w,Gnid:v}=y,I=yi(y,["Id","Gnid"]);this.isLoading.set(!0);try{await this.dataService.updateItem("Topic",a.Id,Ue(X({},I),{Title:g,Description:h,Open:_,Organization:r,Owner:o,Closed:M})),this.topic.set(Ue(X({},a),{Title:g,Description:h,Open:_,Organization:r??void 0,Owner:o,Closed:M})),this.logger.debugLog("Topic details auto-saved",{gnid:this.gnid})}catch(f){this.logger.debugLog("Failed to auto-save topic details",f)}finally{this.isLoading.set(!1)}}addTag(a){let e=this.normalizeTag(a.value??"");e&&!this.tags().includes(e)&&(this.tags.update(t=>[...t,e]),this.saveTags()),a.chipInput.clear()}normalizeTag(a){return a.trim().replace(/^#+/,"").toLowerCase().replace(/\s+/g,"-")}removeTag(a){this.tags.update(e=>e.filter(t=>t!==a)),this.saveTags()}selectTagInSidebar(a,e){e.stopPropagation(),this.router.navigate([],{relativeTo:this.route,queryParams:{tag:a},queryParamsHandling:"merge"})}async saveTags(){let a=this.topic();if(!a)return;let o=a,{Id:e,Gnid:t}=o,i=yi(o,["Id","Gnid"]),r=this.tags();this.isLoading.set(!0);try{await this.dataService.updateItem("Topic",a.Id,Ue(X({},i),{tags:r})),this.topic.set(Ue(X({},a),{tags:r})),this.logger.debugLog("Topic tags saved",{gnid:this.gnid,tags:r})}catch(p){this.logger.debugLog("Failed to save topic tags",p),this.tags.set(a.tags??[])}finally{this.isLoading.set(!1)}}onCommentDragOver(a,e){a.preventDefault(),this.dragOverCommentGnid.set(e.Gnid)}onCommentDragLeave(a){this.dragOverCommentGnid()===a.Gnid&&this.dragOverCommentGnid.set(null)}async onCommentDrop(a,e){a.preventDefault(),this.dragOverCommentGnid.set(null);let t=a.dataTransfer?.files;if(!(!t||t.length===0))for(let i=0;i<t.length;i++){let r=t[i],o=this.comments().find(p=>p.Gnid===e.Gnid)??e;try{await this.handleDroppedFile(r,o)}catch(p){this.logger.debugLog("Unexpected error handling a dropped file - continuing with remaining files",{fileName:r.name,error:p})}}}async handleDroppedFile(a,e){let t=this.getFileExtension(a),i=this.resolveFileKind(a,t);if(i==="msg"){this.logger.debugLog("MSG file dropped on comment",{comment:e.Gnid,fileName:a.name});let o=await this.fileParserMsg.parse(a);o&&await this.saveEmail(e,o);return}if(ta.has(i)){await this.saveDocument(e,a);return}let r=t?`.${t}`:a.name;this.logger.debugLog("Dropped file is not a supported file type - ignoring",{comment:e.Gnid,fileName:a.name,fileType:a.type}),this.toast.error(`File type ${r} not allowed`)}getFileExtension(a){let e=a.name.toLowerCase().split(".");return e.length>1?e[e.length-1]:""}getFileTypeIcon(a){return an(a)}getDocExtension(a){let e=a.toLowerCase().split(".");return e.length>1?e[e.length-1]:""}onDocumentClick(a){let e=this.getDocExtension(a.FileName);switch(e){case"xlsx":case"xls":case"doc":case"docx":case"pdf":case"ppt":case"pptx":{let t=this.dataService.getDocumentViewUrl(a.FileName,a.SourceDocId);window.open(t,"_blank","noopener,noreferrer");break}case"jpg":case"jpeg":case"png":case"bmp":case"xml":case"json":case"reqif":{let t=this.dataService.getDocumentDirectUrl(a.FileName);window.open(t,"_blank","noopener,noreferrer");break}case"mpp":{let t=this.dataService.getDocumentDesktopUrl(a.FileName,"ms-project");this.logger.debugLog("Opening .mpp in desktop Microsoft Project",{fileName:a.FileName,originalName:a.OriginalName,uri:t}),window.location.href=t;break}default:this.logger.debugLog("Document clicked - no handler for this file type",{fileName:a.FileName,originalName:a.OriginalName,extension:e});break}}resolveFileKind(a,e){return e==="msg"||a.type==="application/vnd.ms-outlook"?"msg":e}async saveDocument(a,e){this.isLoading.set(!0);try{let{fileName:t,originalName:i,sourceDocId:r}=await this.dataService.addDocument("Comment",a,e);this.loadComments(),this.logger.debugLog("Document uploaded and linked to comment",{comment:a.Gnid,fileName:t,originalName:i,sourceDocId:r})}catch(t){this.logger.debugLog("Failed to upload document",t)}finally{this.isLoading.set(!1)}}async saveEmail(a,e){this.isLoading.set(!0);try{let t=e,{attachments:i}=t,r=yi(t,["attachments"]),o=await this.dataService.addItem("Email",X({Parent:a.Gnid},r));await this.saveEmailAttachments(o,i),this.loadEmails(),this.logger.debugLog("Email saved as child of comment",{comment:a.Gnid,subject:e.subject,attachmentCount:i.length})}catch(i){this.logger.debugLog("Failed to save parsed email",i)}finally{this.isLoading.set(!1)}}async saveEmailAttachments(a,e){let t=a;for(let i of e){if(!ta.has(i.extension)){this.logger.debugLog("Skipping email attachment - unsupported file type",{fileName:i.fileName,extension:i.extension});continue}try{let r=new File([new Uint8Array(i.bytes)],i.fileName),o=await this.dataService.addDocument("Email",t,r),p=t.Docs??[];t=Ue(X({},t),{Docs:[...p,{FileName:o.fileName,OriginalName:o.originalName,SourceDocId:o.sourceDocId}]})}catch(r){this.logger.debugLog("Failed to upload email attachment - continuing with remaining attachments",{fileName:i.fileName,error:r})}}}loadComments(){let e=this.dataService.getItems("Comment").filter(t=>t.Parent===this.gnid).sort((t,i)=>t.Timestamp-i.Timestamp);this.comments.set(e),this.scrollCommentsToBottom()}scrollCommentsToBottom(){setTimeout(()=>{let a=this.commentsListEl()?.nativeElement;a&&this.animateScrollTo(a,a.scrollHeight,250)})}animateScrollTo(a,e,t){let i=a.scrollTop,r=e-i;if(r===0)return;let o=performance.now(),p=g=>{let h=g-o,_=Math.min(h/t,1),M=1-Math.pow(1-_,3);a.scrollTop=i+r*M,_<1&&requestAnimationFrame(p)};requestAnimationFrame(p)}loadEmails(){this.emails.set(this.dataService.getItems("Email"))}getEmailsForComment=a=>this.emails().filter(e=>e.Parent===a).sort((e,t)=>this.toTime(e.date)-this.toTime(t.date));toTime(a){return a?new Date(a).getTime():0}loadEdges(){let a=this.dataService.getItems("Edge");this.edges.set(a.filter(e=>e.ExitGnid===this.gnid)),this.incomingEdges.set(a.filter(e=>e.EntryGnid===this.gnid))}getEdgeEntryTitle(a){if(a.EntryTitle)return a.EntryTitle;let e=this.dataService.getAllData();for(let t of Object.values(e)){let i=t.find(r=>r?.Gnid===a.EntryGnid);if(i)return i.Title??i.Text??a.EntryGnid}return a.EntryGnid??""}isExternalResourceEdge(a){return!!a.EntryUrl}getEdgeEntryUrl(a){return a.EntryUrl??null}navigateToEdgeEntry(a,e){e.stopPropagation(),!(this.isExternalResourceEdge(a)||!a.EntryGnid)&&this.router.navigate(["/topics",a.EntryGnid])}getEdgeExitTitle(a){return this.dataService.getItems("Topic").find(t=>t.Gnid===a.ExitGnid)?.Title??a.ExitGnid??""}navigateToEdgeExit(a,e){e.stopPropagation(),a.ExitGnid&&this.router.navigate(["/topics",a.ExitGnid])}deleteEdge(a,e){e.stopPropagation(),this.dialog.open(hi,{width:"360px",data:{title:"Delete Relation?",message:"This will permanently remove the relation. This cannot be undone.",confirmText:"Delete",cancelText:"Cancel",icon:"delete"}}).afterClosed().subscribe(i=>{i&&this.performDeleteEdge(a)})}async performDeleteEdge(a){this.isLoading.set(!0);try{await this.dataService.deleteItem("Edge",a.Id),this.loadEdges(),this.logger.debugLog("Edge deleted",{gnid:a.Gnid})}catch(e){this.logger.debugLog("Failed to delete edge",e),this.toast.error("Could not delete the relation. Please try again.")}finally{this.isLoading.set(!1)}}openAddEdgeDialog(){let a=this.topic();if(!a)return;this.dialog.open(mn,{width:"480px",data:{topicGnid:this.gnid,topicTitle:a.Title}}).afterClosed().subscribe(t=>{t&&this.loadEdges()})}openTraverseGraphDialog(){let a=this.topic();a&&this.dialog.open(vn,{width:"70vw",height:"90vh",maxWidth:"90vw",maxHeight:"95vh",panelClass:"topic-dialog-panel",data:{topicGnid:this.gnid,topicTitle:a.Title}})}openEmailDialog(a){this.dialog.open(sn,{width:"70vw",height:"80vh",maxWidth:"90vw",maxHeight:"90vh",data:a})}deleteComment(a){this.dialog.open(hi,{width:"360px",data:{title:"Delete Comment?",message:"This will permanently remove the comment. This cannot be undone.",confirmText:"Delete",cancelText:"Cancel",icon:"delete"}}).afterClosed().subscribe(t=>{t&&this.performDeleteComment(a)})}async performDeleteComment(a){this.isLoading.set(!0);try{await this.deleteDocumentsFor(a),await this.deleteChildrenOf(a.Gnid),await this.dataService.deleteItem("Comment",a.Id),this.loadComments(),this.loadEmails(),this.logger.debugLog("Comment, its children, and its documents deleted",{gnid:a.Gnid})}catch(e){this.logger.debugLog("Failed to delete comment",e)}finally{this.isLoading.set(!1)}}async deleteDocumentsFor(a){let e=Array.isArray(a?.Docs)?a.Docs:[];await Promise.all(e.map(async t=>{try{await this.dataService.deleteDocument(t.FileName)}catch(i){this.logger.debugLog("Failed to delete document file - continuing",{fileName:t.FileName,originalName:t.OriginalName,error:i})}}))}async deleteChildrenOf(a){let e=this.dataService.getAllData(),t=[];for(let[i,r]of Object.entries(e))for(let o of r)o?.Parent===a&&t.push(this.deleteDocumentsFor(o).then(()=>this.dataService.deleteItem(i,o.Id)));await Promise.all(t)}onCommentKeydown(a,e){a.key==="Enter"&&!a.shiftKey&&(a.preventDefault(),this.addComment(e))}async addComment(a){let e=a.value.trim();if(!(!e||this.isLoading())){this.isLoading.set(!0);try{let t=this.dataService.getCurrentUserFromCache()?.Title??"";await this.dataService.addItem("Comment",{Parent:this.gnid,Text:e,Author:t,Timestamp:Date.now()}),this.loadComments(),a.value="",this.logger.debugLog("Comment added",{parent:this.gnid})}catch(t){this.logger.debugLog("Failed to add comment",t)}finally{this.isLoading.set(!1)}}}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=N({type:n,selectors:[["app-topic"]],viewQuery:function(e,t){e&1&&Mi(t.commentsListEl,Fd,5),e&2&&ki()},inputs:{gnid:"gnid"},features:[se([Wr()]),Ce],decls:93,vars:18,consts:[["tagChipGrid",""],["commentsList",""],["commentInput",""],["closedPicker",""],["mode","indeterminate"],[1,"topic-container"],[1,"header-row"],[1,"page-title"],[1,"cards-grid"],[1,"details-column"],[1,"topic-detail-card"],[1,"topic-details-form",3,"formGroup"],["appearance","outline","subscriptSizing","dynamic",1,"detail-field"],["matInput","","type","text","formControlName","title"],["matInput","","rows","4","formControlName","description"],[1,"field-row"],[1,"detail-field","toggle-field"],["id","open-toggle-label",1,"toggle-label"],["formControlName","open","aria-labelledby","open-toggle-label"],[1,"org-owner-row"],["formControlName","organization"],[3,"value"],[1,"assign-me-slot"],["type","button","mat-icon-button","","title","Assign to me","aria-label","Assign to me",1,"assign-me-btn"],["formControlName","owner"],["label","People"],["label","Roles"],["aria-label","Topic tags"],[3,"title"],["placeholder","Add tag...",3,"matChipInputTokenEnd","matChipInputFor","matChipInputSeparatorKeyCodes","matChipInputAddOnBlur","disabled"],[1,"edges-section"],[1,"edges-header"],[1,"edges-title"],[1,"edges-header-actions"],["type","button","mat-icon-button","","aria-label","Traverse graph",1,"add-edge-btn",3,"click"],["type","button","mat-icon-button","","aria-label","Add relation",1,"add-edge-btn",3,"click"],["mat-stretch-tabs","false","mat-align-tabs","start",1,"edges-tabs"],[3,"label"],[1,"edges-list"],[1,"edges-empty"],[1,"topic-detail-card","notes-card"],[1,"comments-list"],[1,"comment-bubble",3,"drag-over"],[1,"comments-empty"],["appearance","outline","subscriptSizing","dynamic",1,"add-comment-field"],["matInput","","rows","3","placeholder","Add note ...",3,"keydown"],["mat-icon-button","","matSuffix","","type","button","aria-label","Save note",3,"click","disabled"],[1,"comment-input-hint"],["matInput","","formControlName","closed",3,"matDatepicker"],["matSuffix","",3,"for"],["type","button","mat-icon-button","","title","Assign to me","aria-label","Assign to me",1,"assign-me-btn",3,"click"],[3,"removed","click","title"],["matChipRemove",""],["matListItemTitle",""],[1,"edge-row"],[1,"edge-self-title",3,"title"],[1,"edge-relation"],["target","_blank","rel","noopener noreferrer",1,"edge-entry-title",3,"href"],["role","link","tabindex","0",1,"edge-entry-title"],["mat-icon-button","","type","button","aria-label","Delete relation",1,"edge-delete-btn",3,"click","disabled"],["target","_blank","rel","noopener noreferrer",1,"edge-entry-title",3,"click","href"],["role","link","tabindex","0",1,"edge-entry-title",3,"click","keydown.enter"],["role","link","tabindex","0",1,"edge-exit-title",3,"click","keydown.enter"],[1,"comment-bubble",3,"dragover","dragleave","drop"],[1,"comment-header"],[1,"comment-author"],["mat-icon-button","","aria-label","Delete comment",1,"comment-delete-btn",3,"click","disabled"],[1,"comment-text",3,"innerHTML"],[1,"comment-timestamp"],[1,"comment-emails"],[1,"comment-email-chip"],[1,"comment-email-chip",3,"click"],[1,"comment-email-date"],[1,"comment-email-subject"],[1,"comment-email-attachments"],[1,"comment-email-chip","comment-email-attachment-chip"],[1,"comment-email-chip","comment-email-attachment-chip",3,"click"],["viewBox","0 0 24 24",1,"doc-type-icon"]],template:function(e,t){if(e&1){let i=Y();E(0,Vd,1,0,"mat-progress-bar",4),s(1,"div",5)(2,"div",6)(3,"h1",7),m(4),c()(),s(5,"div",8)(6,"div",9)(7,"mat-card",10)(8,"mat-toolbar")(9,"span"),m(10,"Details"),c()(),s(11,"mat-card-content")(12,"div",11)(13,"mat-form-field",12)(14,"mat-label"),m(15,"Title"),c(),H(16,"input",13),c(),s(17,"mat-form-field",12)(18,"mat-label"),m(19,"Description"),c(),H(20,"textarea",14),c(),s(21,"div",15)(22,"div",16)(23,"span",17),m(24,"Open"),c(),H(25,"mat-slide-toggle",18),c(),E(26,Ld,7,2,"mat-form-field",12),c(),s(27,"div",19)(28,"mat-form-field",12)(29,"mat-label"),m(30,"Organization"),c(),s(31,"mat-select",20),Q(32,Nd,2,2,"mat-option",21,bi),c()(),s(34,"div",22),E(35,Bd,3,0,"button",23),c(),s(36,"mat-form-field",12)(37,"mat-label"),m(38,"Owner"),c(),s(39,"mat-select",24)(40,"mat-option",21),m(41,"Clear assignment"),c(),E(42,zd,3,0,"mat-optgroup",25),E(43,Yd,3,0,"mat-optgroup",26),c()()(),s(44,"mat-form-field",12)(45,"mat-label"),m(46,"Tags"),c(),s(47,"mat-chip-grid",27,0),Q(49,jd,5,3,"mat-chip-row",28,Pt),c(),s(51,"input",29),x("matChipInputTokenEnd",function(o){return t.addTag(o)}),c()()(),s(52,"div",30)(53,"div",31)(54,"span",32),m(55,"Edges"),c(),s(56,"div",33)(57,"button",34),x("click",function(){return t.openTraverseGraphDialog()}),s(58,"mat-icon"),m(59,"hub"),c()(),s(60,"button",35),x("click",function(){return t.openAddEdgeDialog()}),s(61,"mat-icon"),m(62,"add_link"),c()()()(),s(63,"mat-tab-group",36)(64,"mat-tab",37)(65,"mat-list",38),Q(66,Qd,12,5,"mat-list-item",null,bi,!1,qd,2,0,"p",39),c()(),s(69,"mat-tab",37)(70,"mat-list",38),Q(71,Kd,12,5,"mat-list-item",null,bi,!1,Wd,2,0,"p",39),c()()()()()()(),s(74,"mat-card",40)(75,"mat-toolbar")(76,"span"),m(77,"Notes"),c()(),s(78,"mat-card-content")(79,"div",41,1),Q(81,ip,13,12,"div",42,bi,!1,np,2,0,"p",43),c()(),s(84,"mat-card-footer")(85,"mat-form-field",44)(86,"textarea",45,2),x("keydown",function(o){O(i);let p=pe(87);return P(t.onCommentKeydown(o,p))}),c(),s(88,"button",46),x("click",function(){O(i);let o=pe(87);return P(t.addComment(o))}),s(89,"mat-icon"),m(90,"send"),c()()(),s(91,"span",47),m(92,"[Enter] to submit. [Shift]+[Enter] for new line."),c()()()()()}if(e&2){let i,r=pe(48);S(t.isLoading()?0:-1),l(4),A((i=t.topic())==null?null:i.Title),l(8),C("formGroup",t.topicForm),l(14),S(t.isTopicOpen()?-1:26),l(6),q(t.organizations()),l(3),S(t.isOwnedByMe()?-1:35),l(5),C("value",null),l(2),S(t.ownerUserOptions().length>0?42:-1),l(),S(t.ownerRoleOptions().length>0?43:-1),l(6),q(t.tags()),l(2),C("matChipInputFor",r)("matChipInputSeparatorKeyCodes",t.tagSeparatorKeys)("matChipInputAddOnBlur",!0)("disabled",t.isLoading()),l(13),C("label","Edges ("+t.edges().length+")"),l(2),q(t.edges()),l(3),C("label","Incoming Edges ("+t.incomingEdges().length+")"),l(2),q(t.incomingEdges()),l(10),q(t.comments()),l(7),C("disabled",t.isLoading())}},dependencies:[_r,hr,ur,gr,vr,fr,Oe,Ae,Le,ot,wr,Cr,Ui,ji,zi,Gi,Qi,$i,Er,kr,Mr,Dr,Or,Tn,Kr,qr,en,Yn,oo,ao,ro,no,Zn,mr,dr,pr,cr,Tr,Sr,Ir,sr,Ni,Hi,ir,si,ar,Ti,bn],styles:["[_nghost-%COMP%]{display:block;height:100%}.topic-container[_ngcontent-%COMP%]{height:100%;padding:20px;box-sizing:border-box;display:flex;flex-direction:column}.header-row[_ngcontent-%COMP%]{display:flex;align-items:center;gap:8px;margin-bottom:16px;flex:0 0 auto}.page-title[_ngcontent-%COMP%]{margin:0;font-size:24px;font-weight:500}.cards-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 1fr;gap:20px;margin-top:20px;flex:1 1 auto;min-height:0}.details-column[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:20px;min-height:0}.details-column[_ngcontent-%COMP%]   .topic-detail-card[_ngcontent-%COMP%]{flex:1 1 auto;min-height:0}.details-column[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]{flex:1 1 auto;min-height:0;display:flex;flex-direction:column;overflow-y:auto}.topic-detail-card[_ngcontent-%COMP%]{padding:0;border-radius:0;box-shadow:0 5px 5px -3px #0003,0 8px 10px 1px #00000024,0 3px 14px 2px #0000001f;min-height:300px;background:transparent;color:var(--text-primary);display:flex;flex-direction:column}.notes-card[_ngcontent-%COMP%]{min-height:0}.notes-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]{flex:1 1 auto;min-height:0;display:flex;flex-direction:column}mat-toolbar[_ngcontent-%COMP%]{min-height:56px;height:auto;padding:4px 16px;font-size:14px;font-weight:500;display:flex;align-items:center;gap:12px;background:color-mix(in srgb,var(--surface-0) 95%,black 5%);color:var(--text-primary);border-bottom:.5px solid var(--border);flex:0 0 auto}mat-card-content[_ngcontent-%COMP%]{padding:16px!important}.topic-details-form[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:16px;flex:0 0 auto}.field-row[_ngcontent-%COMP%]{display:flex;gap:16px}.field-row[_ngcontent-%COMP%]   .detail-field[_ngcontent-%COMP%]{flex:1 1 0;min-width:0}.field-row[_ngcontent-%COMP%]   .detail-field.toggle-field[_ngcontent-%COMP%]{flex:0 0 auto;width:auto}.detail-field[_ngcontent-%COMP%]{width:100%;--mdc-outlined-text-field-outline-color: var(--border);--mdc-outlined-text-field-hover-outline-color: var(--text-muted);--mdc-outlined-text-field-focus-outline-color: var(--text-accent);--mdc-outlined-text-field-label-text-color: var(--text-muted);--mdc-outlined-text-field-input-text-color: var(--text-primary)}.detail-field[_ngcontent-%COMP%]     .mat-mdc-text-field-wrapper.mdc-text-field--outlined{background-color:var(--surface-1)!important;border-radius:4px}.detail-field[_ngcontent-%COMP%]   mat-chip-grid[_ngcontent-%COMP%]{margin-bottom:4px}.detail-field[_ngcontent-%COMP%]   mat-chip-grid[_ngcontent-%COMP%]   mat-chip-row[_ngcontent-%COMP%]{cursor:pointer}.comments-list[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:10px;flex:1 1 auto;min-height:0;overflow-y:auto}.comment-bubble[_ngcontent-%COMP%]{background-color:var(--surface-1);border:.5px solid var(--border);border-radius:12px;padding:10px 14px;max-width:85%;align-self:flex-start;box-shadow:0 1px 2px #00000014;transition:background-color .15s ease,border-color .15s ease}.comment-bubble.drag-over[_ngcontent-%COMP%]{background-color:var(--bg-accent);border-color:var(--text-accent);border-style:dashed}.comment-header[_ngcontent-%COMP%]{display:flex;align-items:flex-start;justify-content:space-between;gap:8px}.comment-author[_ngcontent-%COMP%]{display:block;font-size:12px;font-weight:600;color:var(--text-accent);margin-bottom:2px}.comment-delete-btn[_ngcontent-%COMP%], .edge-delete-btn[_ngcontent-%COMP%]{flex:0 0 auto;width:28px;height:28px;padding:2px;line-height:24px;color:var(--text-muted);margin-top:-4px;margin-right:-6px}.comment-delete-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%], .edge-delete-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:18px;width:18px;height:18px;line-height:18px}.comment-delete-btn[_ngcontent-%COMP%]:hover, .edge-delete-btn[_ngcontent-%COMP%]:hover{color:#c62828}.comment-text[_ngcontent-%COMP%]{margin:0;font-size:14px;line-height:1.4;color:var(--text-primary);white-space:pre-wrap;word-break:break-word}.comment-text[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:var(--text-secondary);text-decoration:underline;word-break:break-all}.comment-text[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color:var(--text-accent)}.comment-timestamp[_ngcontent-%COMP%]{display:block;margin-top:4px;font-size:11px;color:var(--text-muted);text-align:right}.comment-emails[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:4px;margin-top:8px;padding-top:8px;border-top:.5px solid var(--border)}.comment-email-chip[_ngcontent-%COMP%]{display:flex;align-items:center;gap:6px;padding:4px 6px;border-radius:6px;background-color:var(--surface-2);border:.5px solid var(--border);cursor:pointer;transition:background-color .15s ease,border-color .15s ease;max-width:100%;overflow:hidden}.comment-email-chip[_ngcontent-%COMP%]:hover{background-color:var(--bg-accent);border-color:var(--text-accent)}.comment-email-chip[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:16px;width:16px;height:16px;line-height:16px;color:var(--text-accent);flex:0 0 auto}.comment-email-chip[_ngcontent-%COMP%]   .doc-type-icon[_ngcontent-%COMP%]{width:16px;height:16px;flex:0 0 auto}.comment-email-attachments[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:4px;margin-top:2px;margin-left:22px}.comment-email-chip.comment-email-attachment-chip[_ngcontent-%COMP%]{padding:3px 6px;background-color:var(--surface-1);border-color:transparent}.comment-email-chip.comment-email-attachment-chip[_ngcontent-%COMP%]:hover{background-color:var(--bg-accent);border-color:var(--text-accent)}.comment-email-attachment-chip[_ngcontent-%COMP%]   .comment-email-subject[_ngcontent-%COMP%]{font-size:11px;color:var(--text-secondary)}.comment-email-date[_ngcontent-%COMP%]{font-size:12px;color:var(--text-muted);flex:0 0 auto;white-space:nowrap}.comment-email-subject[_ngcontent-%COMP%]{font-size:12px;color:var(--text-primary);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;flex:1 1 auto;min-width:0}.comments-empty[_ngcontent-%COMP%]{margin:0;font-size:14px;color:var(--text-muted);font-style:italic}mat-card-footer[_ngcontent-%COMP%]{display:block;padding:8px 12px;border-top:.5px solid var(--border);flex:0 0 auto}.add-comment-field[_ngcontent-%COMP%]{width:100%;--mdc-outlined-text-field-outline-color: var(--border);--mdc-outlined-text-field-hover-outline-color: var(--text-muted);--mdc-outlined-text-field-focus-outline-color: var(--text-accent);--mdc-outlined-text-field-input-text-color: var(--text-primary)}.add-comment-field[_ngcontent-%COMP%]     .mat-mdc-text-field-wrapper.mdc-text-field--outlined{background-color:var(--surface-1)!important;border-radius:4px}.comment-input-hint[_ngcontent-%COMP%]{display:block;margin-top:4px;font-size:11px;color:var(--text-muted)}.add-comment-field[_ngcontent-%COMP%]   .mat-mdc-form-field-infix[_ngcontent-%COMP%]{min-height:0;padding-top:8px;padding-bottom:8px}.add-comment-field[_ngcontent-%COMP%]   textarea.mat-mdc-input-element[_ngcontent-%COMP%]{resize:none;line-height:1.4}.add-comment-field[_ngcontent-%COMP%]   .mat-mdc-form-field-icon-suffix[_ngcontent-%COMP%]{align-self:flex-end;padding-bottom:4px}.add-comment-field[_ngcontent-%COMP%]   .mat-mdc-icon-button[_ngcontent-%COMP%]{width:32px;height:32px;padding:4px;color:var(--text-muted)}.add-comment-field[_ngcontent-%COMP%]   .mat-mdc-icon-button[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:20px;width:20px;height:20px;line-height:20px}.toggle-field[_ngcontent-%COMP%]{display:flex;align-items:center;gap:12px;height:56px}.toggle-label[_ngcontent-%COMP%]{font-size:14px;color:var(--text-primary)}.org-owner-row[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 40px 1fr;gap:16px;align-items:center}.org-owner-row[_ngcontent-%COMP%]   .detail-field[_ngcontent-%COMP%]{min-width:0}.assign-me-slot[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center}.assign-me-btn[_ngcontent-%COMP%]{color:var(--text-accent)}.edges-section[_ngcontent-%COMP%]{margin-top:8px;padding-top:12px;border-top:.5px solid var(--border);flex:1 1 auto;min-height:160px;display:flex;flex-direction:column}.edges-header[_ngcontent-%COMP%]{flex:0 0 auto;display:flex;align-items:center;justify-content:space-between}.edges-title[_ngcontent-%COMP%]{font-size:12px;font-weight:600;color:var(--text-muted);text-transform:uppercase;letter-spacing:.04em}.edges-header-actions[_ngcontent-%COMP%]{flex:0 0 auto;display:flex;align-items:center;gap:4px}.add-edge-btn[_ngcontent-%COMP%]{flex:0 0 auto;color:var(--text-accent);width:32px;height:32px;padding:4px}.add-edge-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:18px;width:18px;height:18px;line-height:18px}.edges-tabs[_ngcontent-%COMP%]{margin-top:4px;flex:1 1 auto;min-height:0}.edges-tabs[_ngcontent-%COMP%]     .mat-mdc-tab-body-wrapper{flex:1 1 auto;min-height:0}.edges-list[_ngcontent-%COMP%]{padding:0!important}.edges-list[_ngcontent-%COMP%]   .mat-mdc-list-item[_ngcontent-%COMP%]{--mdc-list-list-item-container-color: transparent;--mdc-list-list-item-label-text-color: var(--text-primary);--mdc-list-list-item-one-line-container-height: 40px;padding:0!important}.edge-row[_ngcontent-%COMP%]{display:flex;align-items:baseline;gap:4px;min-width:0}.edge-self-title[_ngcontent-%COMP%]{flex:0 1000 auto;min-width:4ch;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;color:var(--text-primary)}.edge-relation[_ngcontent-%COMP%]{flex:0 0 auto;white-space:nowrap;font-weight:600;color:var(--text-accent)}.edge-entry-title[_ngcontent-%COMP%], .edge-exit-title[_ngcontent-%COMP%]{flex:0 1 auto;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.edge-entry-title[_ngcontent-%COMP%]{color:var(--text-primary);text-decoration:none;cursor:pointer}.edge-entry-title[_ngcontent-%COMP%]:hover, .edge-entry-title[_ngcontent-%COMP%]:focus-visible{color:var(--text-accent);text-decoration:underline}.edge-exit-title[_ngcontent-%COMP%]{color:var(--text-primary);text-decoration:none;cursor:pointer}.edge-exit-title[_ngcontent-%COMP%]:hover, .edge-exit-title[_ngcontent-%COMP%]:focus-visible{color:var(--text-accent);text-decoration:underline}.edge-delete-btn[_ngcontent-%COMP%]{align-self:center;margin:0 0 0 auto}.edges-empty[_ngcontent-%COMP%]{margin:4px 0 0;font-size:14px;color:var(--text-muted);font-style:italic}"]})};export{es as Topic};
