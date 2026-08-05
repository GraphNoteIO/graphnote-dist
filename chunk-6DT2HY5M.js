import{a as ln,b as kt,c as dn,d as cn,e as Mt,f as At,g as St,h as Et}from"./chunk-3UAGUT6W.js";import{d as Ua}from"./chunk-2XQD2ZEV.js";import{a as Vn,b as Pn,c as Fn}from"./chunk-KG3BJIG2.js";import{A as Cn,B as wn,C as xn,D as kn,F as Mn,G as An,H as Sn,I as En,L as In,M as Tn,a as an,d as nn,e as be,f as ia,g as rn,h as He,i as ra,j as on,k as Dt,l as Ct,o as wt,p as sn,q as xt,s as Ye,v as oa,w as bn,x as vn,y as yn,z as Dn}from"./chunk-HNXW327K.js";import{a as tt,b as ne,c as me,d as Pt,e as Ft}from"./chunk-A2KWNKXI.js";import{$ as Q,$a as N,$c as hn,A as Ta,Aa as mt,Ab as ue,Bb as Ha,Cb as Le,Cc as Qa,Db as Ya,Ea as b,Eb as Je,Fa as he,Ga as J,Ha as Ra,Hb as za,I as ct,Ic as Za,Ja as We,Jc as Ja,K as re,Ka as Qe,Kc as ae,Lb as gt,Mc as na,Nb as ja,Nc as en,P as Ke,Pb as R,Q as X,Qa as k,Qb as j,R as pe,Rb as et,Rc as tn,Sa as A,Sc as yt,T as L,Ta as S,U as Va,Ua as ee,V as s,Va as te,Vc as It,Wa as v,Wc as mn,Xa as l,Xc as Tt,Ya as d,Yb as ft,Yc as Vt,Z as C,Za as x,_ as w,_a as P,_c as pn,a as I,aa as De,ab as xe,ac as Se,b as ye,ba as q,bb as Y,bc as bt,c as Jt,ca as Ce,cb as de,cc as Ee,cd as un,d as ie,db as _,dc as Ne,dd as _n,eb as pt,ec as _e,ed as sa,fa as g,fb as h,fc as ge,fd as gn,g as T,ga as se,gb as ke,gc as ta,hb as Me,hd as fn,ib as La,ic as Be,ja as y,jb as U,jc as aa,kb as F,l as Oe,la as Z,lb as O,lc as vt,ma as Pa,mc as Ga,nb as Na,oa as H,ob as Ba,oc as $a,pb as Re,pc as Xa,qb as Ae,ra as Fa,rb as M,sb as K,ta as c,tb as p,u as dt,ua as le,ub as D,uc as qa,v as Ia,va as ea,vb as z,vc as Ka,wb as Ze,wc as Wa,xa as we,xb as ht,xc as ce,yb as ut,za as Oa,zb as _t,zc as fe}from"./chunk-AAET5HQH.js";function ci(r,i){r&1&&xe(0,"div",2)}var mi=new L("MAT_PROGRESS_BAR_DEFAULT_OPTIONS");var Rn=(()=>{class r{_elementRef=s(H);_ngZone=s(se);_changeDetectorRef=s(R);_renderer=s(we);_cleanupTransitionEnd;constructor(){let e=Ja(),t=s(mi,{optional:!0});this._isNoopAnimation=e==="di-disabled",e==="reduced-motion"&&this._elementRef.nativeElement.classList.add("mat-progress-bar-reduced-motion"),t&&(t.color&&(this.color=this._defaultColor=t.color),this.mode=t.mode||this.mode)}_isNoopAnimation;get color(){return this._color||this._defaultColor}set color(e){this._color=e}_color;_defaultColor="primary";get value(){return this._value}set value(e){this._value=On(e||0),this._changeDetectorRef.markForCheck()}_value=0;get bufferValue(){return this._bufferValue||0}set bufferValue(e){this._bufferValue=On(e||0),this._changeDetectorRef.markForCheck()}_bufferValue=0;animationEnd=new g;get mode(){return this._mode}set mode(e){this._mode=e,this._changeDetectorRef.markForCheck()}_mode="determinate";ngAfterViewInit(){this._ngZone.runOutsideAngular(()=>{this._cleanupTransitionEnd=this._renderer.listen(this._elementRef.nativeElement,"transitionend",this._transitionendHandler)})}ngOnDestroy(){this._cleanupTransitionEnd?.()}_getPrimaryBarTransform(){return`scaleX(${this._isIndeterminate()?1:this.value/100})`}_getBufferBarFlexBasis(){return`${this.mode==="buffer"?this.bufferValue:100}%`}_isIndeterminate(){return this.mode==="indeterminate"||this.mode==="query"}_transitionendHandler=e=>{this.animationEnd.observers.length===0||!e.target||!e.target.classList.contains("mdc-linear-progress__primary-bar")||(this.mode==="determinate"||this.mode==="buffer")&&this._ngZone.run(()=>this.animationEnd.next({value:this.value}))};static \u0275fac=function(t){return new(t||r)};static \u0275cmp=b({type:r,selectors:[["mat-progress-bar"]],hostAttrs:["role","progressbar","aria-valuemin","0","aria-valuemax","100","tabindex","-1",1,"mat-mdc-progress-bar","mdc-linear-progress"],hostVars:10,hostBindings:function(t,a){t&2&&(k("aria-valuenow",a._isIndeterminate()?null:a.value)("mode",a.mode),K("mat-"+a.color),M("_mat-animation-noopable",a._isNoopAnimation)("mdc-linear-progress--animation-ready",!a._isNoopAnimation)("mdc-linear-progress--indeterminate",a._isIndeterminate()))},inputs:{color:"color",value:[2,"value","value",et],bufferValue:[2,"bufferValue","bufferValue",et],mode:"mode"},outputs:{animationEnd:"animationEnd"},exportAs:["matProgressBar"],decls:7,vars:5,consts:[["aria-hidden","true",1,"mdc-linear-progress__buffer"],[1,"mdc-linear-progress__buffer-bar"],[1,"mdc-linear-progress__buffer-dots"],["aria-hidden","true",1,"mdc-linear-progress__bar","mdc-linear-progress__primary-bar"],[1,"mdc-linear-progress__bar-inner"],["aria-hidden","true",1,"mdc-linear-progress__bar","mdc-linear-progress__secondary-bar"]],template:function(t,a){t&1&&(P(0,"div",0),xe(1,"div",1),A(2,ci,1,0,"div",2),N(),P(3,"div",3),xe(4,"span",4),N(),P(5,"div",5),xe(6,"span",4),N()),t&2&&(c(),Ae("flex-basis",a._getBufferBarFlexBasis()),c(),S(a.mode==="buffer"?2:-1),c(),Ae("transform",a._getPrimaryBarTransform()))},styles:[`.mat-mdc-progress-bar {
  --mat-progress-bar-animation-multiplier: 1;
  display: block;
  text-align: start;
}
.mat-mdc-progress-bar[mode=query] {
  transform: scaleX(-1);
}
.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__buffer-dots,
.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__primary-bar,
.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__secondary-bar,
.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__bar-inner.mdc-linear-progress__bar-inner {
  animation: none;
}
.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__primary-bar,
.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__buffer-bar {
  transition: transform 1ms;
}

.mat-progress-bar-reduced-motion {
  --mat-progress-bar-animation-multiplier: 2;
}

.mdc-linear-progress {
  position: relative;
  width: 100%;
  transform: translateZ(0);
  outline: 1px solid transparent;
  overflow-x: hidden;
  transition: opacity 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1);
  height: max(var(--mat-progress-bar-track-height, 4px), var(--mat-progress-bar-active-indicator-height, 4px));
}
@media (forced-colors: active) {
  .mdc-linear-progress {
    outline-color: CanvasText;
  }
}

.mdc-linear-progress__bar {
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto 0;
  width: 100%;
  animation: none;
  transform-origin: top left;
  transition: transform 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1);
  height: var(--mat-progress-bar-active-indicator-height, 4px);
}
.mdc-linear-progress--indeterminate .mdc-linear-progress__bar {
  transition: none;
}
[dir=rtl] .mdc-linear-progress__bar {
  right: 0;
  transform-origin: center right;
}

.mdc-linear-progress__bar-inner {
  display: inline-block;
  position: absolute;
  width: 100%;
  animation: none;
  border-top-style: solid;
  border-color: var(--mat-progress-bar-active-indicator-color, var(--mat-sys-primary));
  border-top-width: var(--mat-progress-bar-active-indicator-height, 4px);
}

.mdc-linear-progress__buffer {
  display: flex;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto 0;
  width: 100%;
  overflow: hidden;
  height: var(--mat-progress-bar-track-height, 4px);
  border-radius: var(--mat-progress-bar-track-shape, var(--mat-sys-corner-none));
}

.mdc-linear-progress__buffer-dots {
  background-image: radial-gradient(circle, var(--mat-progress-bar-track-color, var(--mat-sys-surface-variant)) calc(var(--mat-progress-bar-track-height, 4px) / 2), transparent 0);
  background-repeat: repeat-x;
  background-size: calc(calc(var(--mat-progress-bar-track-height, 4px) / 2) * 5);
  background-position: left;
  flex: auto;
  transform: rotate(180deg);
  animation: mdc-linear-progress-buffering calc(250ms * var(--mat-progress-bar-animation-multiplier)) infinite linear;
}
@media (forced-colors: active) {
  .mdc-linear-progress__buffer-dots {
    background-color: ButtonBorder;
  }
}
[dir=rtl] .mdc-linear-progress__buffer-dots {
  animation: mdc-linear-progress-buffering-reverse calc(250ms * var(--mat-progress-bar-animation-multiplier)) infinite linear;
  transform: rotate(0);
}

.mdc-linear-progress__buffer-bar {
  flex: 0 1 100%;
  transition: flex-basis 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1);
  background-color: var(--mat-progress-bar-track-color, var(--mat-sys-surface-variant));
}

.mdc-linear-progress__primary-bar {
  transform: scaleX(0);
}
.mdc-linear-progress--indeterminate .mdc-linear-progress__primary-bar {
  left: -145.166611%;
}
.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar {
  animation: mdc-linear-progress-primary-indeterminate-translate calc(2s * var(--mat-progress-bar-animation-multiplier)) infinite linear;
}
.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar > .mdc-linear-progress__bar-inner {
  animation: mdc-linear-progress-primary-indeterminate-scale calc(2s * var(--mat-progress-bar-animation-multiplier)) infinite linear;
}
[dir=rtl] .mdc-linear-progress.mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar {
  animation-name: mdc-linear-progress-primary-indeterminate-translate-reverse;
}
[dir=rtl] .mdc-linear-progress.mdc-linear-progress--indeterminate .mdc-linear-progress__primary-bar {
  right: -145.166611%;
  left: auto;
}

.mdc-linear-progress__secondary-bar {
  display: none;
}
.mdc-linear-progress--indeterminate .mdc-linear-progress__secondary-bar {
  left: -54.888891%;
  display: block;
}
.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar {
  animation: mdc-linear-progress-secondary-indeterminate-translate calc(2s * var(--mat-progress-bar-animation-multiplier)) infinite linear;
}
.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar > .mdc-linear-progress__bar-inner {
  animation: mdc-linear-progress-secondary-indeterminate-scale calc(2s * var(--mat-progress-bar-animation-multiplier)) infinite linear;
}
[dir=rtl] .mdc-linear-progress.mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar {
  animation-name: mdc-linear-progress-secondary-indeterminate-translate-reverse;
}
[dir=rtl] .mdc-linear-progress.mdc-linear-progress--indeterminate .mdc-linear-progress__secondary-bar {
  right: -54.888891%;
  left: auto;
}

@keyframes mdc-linear-progress-buffering {
  from {
    transform: rotate(180deg) translateX(calc(var(--mat-progress-bar-track-height, 4px) * -2.5));
  }
}
@keyframes mdc-linear-progress-primary-indeterminate-translate {
  0% {
    transform: translateX(0);
  }
  20% {
    animation-timing-function: cubic-bezier(0.5, 0, 0.701732, 0.495819);
    transform: translateX(0);
  }
  59.15% {
    animation-timing-function: cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);
    transform: translateX(83.67142%);
  }
  100% {
    transform: translateX(200.611057%);
  }
}
@keyframes mdc-linear-progress-primary-indeterminate-scale {
  0% {
    transform: scaleX(0.08);
  }
  36.65% {
    animation-timing-function: cubic-bezier(0.334731, 0.12482, 0.785844, 1);
    transform: scaleX(0.08);
  }
  69.15% {
    animation-timing-function: cubic-bezier(0.06, 0.11, 0.6, 1);
    transform: scaleX(0.661479);
  }
  100% {
    transform: scaleX(0.08);
  }
}
@keyframes mdc-linear-progress-secondary-indeterminate-translate {
  0% {
    animation-timing-function: cubic-bezier(0.15, 0, 0.515058, 0.409685);
    transform: translateX(0);
  }
  25% {
    animation-timing-function: cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);
    transform: translateX(37.651913%);
  }
  48.35% {
    animation-timing-function: cubic-bezier(0.4, 0.627035, 0.6, 0.902026);
    transform: translateX(84.386165%);
  }
  100% {
    transform: translateX(160.277782%);
  }
}
@keyframes mdc-linear-progress-secondary-indeterminate-scale {
  0% {
    animation-timing-function: cubic-bezier(0.205028, 0.057051, 0.57661, 0.453971);
    transform: scaleX(0.08);
  }
  19.15% {
    animation-timing-function: cubic-bezier(0.152313, 0.196432, 0.648374, 1.004315);
    transform: scaleX(0.457104);
  }
  44.15% {
    animation-timing-function: cubic-bezier(0.257759, -0.003163, 0.211762, 1.38179);
    transform: scaleX(0.72796);
  }
  100% {
    transform: scaleX(0.08);
  }
}
@keyframes mdc-linear-progress-primary-indeterminate-translate-reverse {
  0% {
    transform: translateX(0);
  }
  20% {
    animation-timing-function: cubic-bezier(0.5, 0, 0.701732, 0.495819);
    transform: translateX(0);
  }
  59.15% {
    animation-timing-function: cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);
    transform: translateX(-83.67142%);
  }
  100% {
    transform: translateX(-200.611057%);
  }
}
@keyframes mdc-linear-progress-secondary-indeterminate-translate-reverse {
  0% {
    animation-timing-function: cubic-bezier(0.15, 0, 0.515058, 0.409685);
    transform: translateX(0);
  }
  25% {
    animation-timing-function: cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);
    transform: translateX(-37.651913%);
  }
  48.35% {
    animation-timing-function: cubic-bezier(0.4, 0.627035, 0.6, 0.902026);
    transform: translateX(-84.386165%);
  }
  100% {
    transform: translateX(-160.277782%);
  }
}
@keyframes mdc-linear-progress-buffering-reverse {
  from {
    transform: translateX(-10px);
  }
}
`],encapsulation:2,changeDetection:0})}return r})();function On(r,i=0,e=100){return Math.max(i,Math.min(e,r))}var Ln=(()=>{class r{static \u0275fac=function(t){return new(t||r)};static \u0275mod=he({type:r});static \u0275inj=pe({imports:[Ne]})}return r})();var hi=["mat-internal-form-field",""],ui=["*"],Nn=(()=>{class r{labelPosition="after";static \u0275fac=function(t){return new(t||r)};static \u0275cmp=b({type:r,selectors:[["div","mat-internal-form-field",""]],hostAttrs:[1,"mdc-form-field","mat-internal-form-field"],hostVars:2,hostBindings:function(t,a){t&2&&M("mdc-form-field--align-end",a.labelPosition==="before")},inputs:{labelPosition:"labelPosition"},attrs:hi,ngContentSelectors:ui,decls:1,vars:0,template:function(t,a){t&1&&(ke(),Me(0))},styles:[`.mat-internal-form-field {
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
`],encapsulation:2,changeDetection:0})}return r})();var _i=["switch"],gi=["*"];function fi(r,i){r&1&&(l(0,"span",11),Q(),l(1,"svg",13),x(2,"path",14),d(),l(3,"svg",15),x(4,"path",16),d()())}var bi=new L("mat-slide-toggle-default-options",{providedIn:"root",factory:()=>({disableToggleValue:!1,hideIcon:!1,disabledInteractive:!1})}),Ot=class{source;checked;constructor(i,e){this.source=i,this.checked=e}},la=(()=>{class r{_elementRef=s(H);_focusMonitor=s(vt);_changeDetectorRef=s(R);defaults=s(bi);_onChange=e=>{};_onTouched=()=>{};_validatorOnChange=()=>{};_uniqueId;_checked=!1;_createChangeEvent(e){return new Ot(this,e)}_labelId;get buttonId(){return`${this.id||this._uniqueId}-button`}_switchElement;focus(){this._switchElement.nativeElement.focus()}_noopAnimations=ae();_focused=!1;name=null;id;labelPosition="after";ariaLabel=null;ariaLabelledby=null;ariaDescribedby;required=!1;color;disabled=!1;disableRipple=!1;tabIndex=0;get checked(){return this._checked}set checked(e){this._checked=e,this._changeDetectorRef.markForCheck()}hideIcon;disabledInteractive;change=new g;toggleChange=new g;get inputId(){return`${this.id||this._uniqueId}-input`}constructor(){s(Se).load(yt);let e=s(new gt("tabindex"),{optional:!0}),t=this.defaults;this.tabIndex=e==null?0:parseInt(e)||0,this.color=t.color||"accent",this.id=this._uniqueId=s(fe).getId("mat-mdc-slide-toggle-"),this.hideIcon=t.hideIcon??!1,this.disabledInteractive=t.disabledInteractive??!1,this._labelId=this._uniqueId+"-label"}ngAfterContentInit(){this._focusMonitor.monitor(this._elementRef,!0).subscribe(e=>{e==="keyboard"||e==="program"?(this._focused=!0,this._changeDetectorRef.markForCheck()):e||Promise.resolve().then(()=>{this._focused=!1,this._onTouched(),this._changeDetectorRef.markForCheck()})})}ngOnChanges(e){e.required&&this._validatorOnChange()}ngOnDestroy(){this._focusMonitor.stopMonitoring(this._elementRef)}writeValue(e){this.checked=!!e}registerOnChange(e){this._onChange=e}registerOnTouched(e){this._onTouched=e}validate(e){return this.required&&e.value!==!0?{required:!0}:null}registerOnValidatorChange(e){this._validatorOnChange=e}setDisabledState(e){this.disabled=e,this._changeDetectorRef.markForCheck()}toggle(){this.checked=!this.checked,this._onChange(this.checked)}_emitChangeEvent(){this._onChange(this.checked),this.change.emit(this._createChangeEvent(this.checked))}_handleClick(){this.disabled||(this.toggleChange.emit(),this.defaults.disableToggleValue||(this.checked=!this.checked,this._onChange(this.checked),this.change.emit(new Ot(this,this.checked))))}_getAriaLabelledBy(){return this.ariaLabelledby?this.ariaLabelledby:this.ariaLabel?null:this._labelId}static \u0275fac=function(t){return new(t||r)};static \u0275cmp=b({type:r,selectors:[["mat-slide-toggle"]],viewQuery:function(t,a){if(t&1&&U(_i,5),t&2){let n;F(n=O())&&(a._switchElement=n.first)}},hostAttrs:[1,"mat-mdc-slide-toggle"],hostVars:13,hostBindings:function(t,a){t&2&&(de("id",a.id),k("tabindex",null)("aria-label",null)("name",null)("aria-labelledby",null),K(a.color?"mat-"+a.color:""),M("mat-mdc-slide-toggle-focused",a._focused)("mat-mdc-slide-toggle-checked",a.checked)("_mat-animation-noopable",a._noopAnimations))},inputs:{name:"name",id:"id",labelPosition:"labelPosition",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],ariaDescribedby:[0,"aria-describedby","ariaDescribedby"],required:[2,"required","required",j],color:"color",disabled:[2,"disabled","disabled",j],disableRipple:[2,"disableRipple","disableRipple",j],tabIndex:[2,"tabIndex","tabIndex",e=>e==null?0:et(e)],checked:[2,"checked","checked",j],hideIcon:[2,"hideIcon","hideIcon",j],disabledInteractive:[2,"disabledInteractive","disabledInteractive",j]},outputs:{change:"change",toggleChange:"toggleChange"},exportAs:["matSlideToggle"],features:[ue([{provide:It,useExisting:Ke(()=>r),multi:!0},{provide:Tt,useExisting:r,multi:!0}]),Z],ngContentSelectors:gi,decls:14,vars:27,consts:[["switch",""],["mat-internal-form-field","",3,"labelPosition"],["role","switch","type","button",1,"mdc-switch",3,"click","tabIndex","disabled"],[1,"mat-mdc-slide-toggle-touch-target"],[1,"mdc-switch__track"],[1,"mdc-switch__handle-track"],[1,"mdc-switch__handle"],[1,"mdc-switch__shadow"],[1,"mdc-elevation-overlay"],[1,"mdc-switch__ripple"],["mat-ripple","",1,"mat-mdc-slide-toggle-ripple","mat-focus-indicator",3,"matRippleTrigger","matRippleDisabled","matRippleCentered"],[1,"mdc-switch__icons"],[1,"mdc-label",3,"click","for"],["viewBox","0 0 24 24","aria-hidden","true",1,"mdc-switch__icon","mdc-switch__icon--on"],["d","M19.69,5.23L8.96,15.96l-4.23-4.23L2.96,13.5l6,6L21.46,7L19.69,5.23z"],["viewBox","0 0 24 24","aria-hidden","true",1,"mdc-switch__icon","mdc-switch__icon--off"],["d","M20 13H4v-2h16v2z"]],template:function(t,a){if(t&1&&(ke(),l(0,"div",1)(1,"button",2,0),_("click",function(){return a._handleClick()}),x(3,"div",3)(4,"span",4),l(5,"span",5)(6,"span",6)(7,"span",7),x(8,"span",8),d(),l(9,"span",9),x(10,"span",10),d(),A(11,fi,5,0,"span",11),d()()(),l(12,"label",12),_("click",function(o){return o.stopPropagation()}),Me(13),d()()),t&2){let n=Re(2);v("labelPosition",a.labelPosition),c(),M("mdc-switch--selected",a.checked)("mdc-switch--unselected",!a.checked)("mdc-switch--checked",a.checked)("mdc-switch--disabled",a.disabled)("mat-mdc-slide-toggle-disabled-interactive",a.disabledInteractive),v("tabIndex",a.disabled&&!a.disabledInteractive?-1:a.tabIndex)("disabled",a.disabled&&!a.disabledInteractive),k("id",a.buttonId)("name",a.name)("aria-label",a.ariaLabel)("aria-labelledby",a._getAriaLabelledBy())("aria-describedby",a.ariaDescribedby)("aria-required",a.required||null)("aria-checked",a.checked)("aria-disabled",a.disabled&&a.disabledInteractive?"true":null),c(9),v("matRippleTrigger",n)("matRippleDisabled",a.disableRipple||a.disabled)("matRippleCentered",!0),c(),S(a.hideIcon?-1:11),c(),v("for",a.buttonId),k("id",a._labelId)}},dependencies:[tn,Nn],styles:[`.mdc-switch {
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
`],encapsulation:2,changeDetection:0})}return r})(),Bn=(()=>{class r{static \u0275fac=function(t){return new(t||r)};static \u0275mod=he({type:r});static \u0275inj=pe({imports:[la,Ne]})}return r})();var da=new L("MAT_DATE_LOCALE",{providedIn:"root",factory:()=>s(za)}),ze="Method not implemented",B=class{locale;_localeChanges=new T;localeChanges=this._localeChanges;setTime(i,e,t,a){throw new Error(ze)}getHours(i){throw new Error(ze)}getMinutes(i){throw new Error(ze)}getSeconds(i){throw new Error(ze)}parseTime(i,e){throw new Error(ze)}addSeconds(i,e){throw new Error(ze)}getValidDateOrNull(i){return this.isDateInstance(i)&&this.isValid(i)?i:null}deserialize(i){return i==null||this.isDateInstance(i)&&this.isValid(i)?i:this.invalid()}setLocale(i){this.locale=i,this._localeChanges.next()}compareDate(i,e){return this.getYear(i)-this.getYear(e)||this.getMonth(i)-this.getMonth(e)||this.getDate(i)-this.getDate(e)}compareTime(i,e){return this.getHours(i)-this.getHours(e)||this.getMinutes(i)-this.getMinutes(e)||this.getSeconds(i)-this.getSeconds(e)}sameDate(i,e){if(i&&e){let t=this.isValid(i),a=this.isValid(e);return t&&a?!this.compareDate(i,e):t==a}return i==e}sameTime(i,e){if(i&&e){let t=this.isValid(i),a=this.isValid(e);return t&&a?!this.compareTime(i,e):t==a}return i==e}clampDate(i,e,t){return e&&this.compareDate(i,e)<0?e:t&&this.compareDate(i,t)>0?t:i}},ve=new L("mat-date-formats");var yi=["tooltip"],Di=20;var Ci=new L("mat-tooltip-scroll-strategy",{providedIn:"root",factory:()=>{let r=s(q);return()=>Dt(r,{scrollThrottle:Di})}}),wi=new L("mat-tooltip-default-options",{providedIn:"root",factory:()=>({showDelay:0,hideDelay:0,touchendHideDelay:1500})});var Hn="tooltip-panel",xi={passive:!0},ki=8,Mi=8,Ai=24,Si=200,Yn=(()=>{class r{_elementRef=s(H);_ngZone=s(se);_platform=s(Be);_ariaDescriber=s(Qa);_focusMonitor=s(vt);_dir=s(Ee);_injector=s(q);_viewContainerRef=s(mt);_mediaMatcher=s($a);_document=s(Ce);_renderer=s(we);_animationsDisabled=ae();_defaultOptions=s(wi,{optional:!0});_overlayRef=null;_tooltipInstance=null;_overlayPanelClass;_portal;_position="below";_positionAtOrigin=!1;_disabled=!1;_tooltipClass;_viewInitialized=!1;_pointerExitEventsInitialized=!1;_tooltipComponent=Ei;_viewportMargin=8;_currentPosition;_cssClassPrefix="mat-mdc";_ariaDescriptionPending=!1;_dirSubscribed=!1;get position(){return this._position}set position(e){e!==this._position&&(this._position=e,this._overlayRef&&(this._updatePosition(this._overlayRef),this._tooltipInstance?.show(0),this._overlayRef.updatePosition()))}get positionAtOrigin(){return this._positionAtOrigin}set positionAtOrigin(e){this._positionAtOrigin=na(e),this._detach(),this._overlayRef=null}get disabled(){return this._disabled}set disabled(e){let t=na(e);this._disabled!==t&&(this._disabled=t,t?this.hide(0):this._setupPointerEnterEventsIfNeeded(),this._syncAriaDescription(this.message))}get showDelay(){return this._showDelay}set showDelay(e){this._showDelay=aa(e)}_showDelay;get hideDelay(){return this._hideDelay}set hideDelay(e){this._hideDelay=aa(e),this._tooltipInstance&&(this._tooltipInstance._mouseLeaveHideDelay=this._hideDelay)}_hideDelay;touchGestures="auto";get message(){return this._message}set message(e){let t=this._message;this._message=e!=null?String(e).trim():"",!this._message&&this._isTooltipVisible()?this.hide(0):(this._setupPointerEnterEventsIfNeeded(),this._updateTooltipMessage()),this._syncAriaDescription(t)}_message="";get tooltipClass(){return this._tooltipClass}set tooltipClass(e){this._tooltipClass=e,this._tooltipInstance&&this._setTooltipClass(this._tooltipClass)}_eventCleanups=[];_touchstartTimeout=null;_destroyed=new T;_isDestroyed=!1;constructor(){let e=this._defaultOptions;e&&(this._showDelay=e.showDelay,this._hideDelay=e.hideDelay,e.position&&(this.position=e.position),e.positionAtOrigin&&(this.positionAtOrigin=e.positionAtOrigin),e.touchGestures&&(this.touchGestures=e.touchGestures),e.tooltipClass&&(this.tooltipClass=e.tooltipClass)),this._viewportMargin=ki}ngAfterViewInit(){this._viewInitialized=!0,this._setupPointerEnterEventsIfNeeded(),this._focusMonitor.monitor(this._elementRef).pipe(re(this._destroyed)).subscribe(e=>{e?e==="keyboard"&&this._ngZone.run(()=>this.show()):this._ngZone.run(()=>this.hide(0))})}ngOnDestroy(){let e=this._elementRef.nativeElement;this._touchstartTimeout&&clearTimeout(this._touchstartTimeout),this._overlayRef&&(this._overlayRef.dispose(),this._tooltipInstance=null),this._eventCleanups.forEach(t=>t()),this._eventCleanups.length=0,this._destroyed.next(),this._destroyed.complete(),this._isDestroyed=!0,this._ariaDescriber.removeDescription(e,this.message,"tooltip"),this._focusMonitor.stopMonitoring(e)}show(e=this.showDelay,t){if(this.disabled||!this.message||this._isTooltipVisible()){this._tooltipInstance?._cancelPendingAnimations();return}let a=this._createOverlay(t);this._detach(),this._portal=this._portal||new be(this._tooltipComponent,this._viewContainerRef);let n=this._tooltipInstance=a.attach(this._portal).instance;n._triggerElement=this._elementRef.nativeElement,n._mouseLeaveHideDelay=this._hideDelay,n.afterHidden().pipe(re(this._destroyed)).subscribe(()=>this._detach()),this._setTooltipClass(this._tooltipClass),this._updateTooltipMessage(),n.show(e)}hide(e=this.hideDelay){let t=this._tooltipInstance;t&&(t.isVisible()?t.hide(e):(t._cancelPendingAnimations(),this._detach()))}toggle(e){this._isTooltipVisible()?this.hide():this.show(void 0,e)}_isTooltipVisible(){return!!this._tooltipInstance&&this._tooltipInstance.isVisible()}_createOverlay(e){if(this._overlayRef){let o=this._overlayRef.getConfig().positionStrategy;if((!this.positionAtOrigin||!e)&&o._origin instanceof H)return this._overlayRef;this._detach()}let t=this._injector.get(an).getAncestorScrollContainers(this._elementRef),a=`${this._cssClassPrefix}-${Hn}`,n=wt(this._injector,this.positionAtOrigin?e||this._elementRef:this._elementRef).withTransformOriginOn(`.${this._cssClassPrefix}-tooltip`).withFlexibleDimensions(!1).withViewportMargin(this._viewportMargin).withScrollableContainers(t).withPopoverLocation("global");return n.positionChanges.pipe(re(this._destroyed)).subscribe(o=>{this._updateCurrentPositionClass(o.connectionPair),this._tooltipInstance&&o.scrollableViewProperties.isOverlayClipped&&this._tooltipInstance.isVisible()&&this._ngZone.run(()=>this.hide(0))}),this._overlayRef=Ye(this._injector,{direction:this._dir,positionStrategy:n,panelClass:this._overlayPanelClass?[...this._overlayPanelClass,a]:a,scrollStrategy:this._injector.get(Ci)(),disableAnimations:this._animationsDisabled,eventPredicate:this._overlayEventPredicate}),this._updatePosition(this._overlayRef),this._overlayRef.detachments().pipe(re(this._destroyed)).subscribe(()=>this._detach()),this._overlayRef.outsidePointerEvents().pipe(re(this._destroyed)).subscribe(()=>this._tooltipInstance?._handleBodyInteraction()),this._overlayRef.keydownEvents().pipe(re(this._destroyed)).subscribe(o=>{o.preventDefault(),o.stopPropagation(),this._ngZone.run(()=>this.hide(0))}),this._defaultOptions?.disableTooltipInteractivity&&this._overlayRef.addPanelClass(`${this._cssClassPrefix}-tooltip-panel-non-interactive`),this._dirSubscribed||(this._dirSubscribed=!0,this._dir.change.pipe(re(this._destroyed)).subscribe(()=>{this._overlayRef&&this._updatePosition(this._overlayRef)})),this._overlayRef}_detach(){this._overlayRef&&this._overlayRef.hasAttached()&&this._overlayRef.detach(),this._tooltipInstance=null}_updatePosition(e){let t=e.getConfig().positionStrategy,a=this._getOrigin(),n=this._getOverlayPosition();t.withPositions([this._addOffset(I(I({},a.main),n.main)),this._addOffset(I(I({},a.fallback),n.fallback))])}_addOffset(e){let t=Mi,a=!this._dir||this._dir.value=="ltr";return e.originY==="top"?e.offsetY=-t:e.originY==="bottom"?e.offsetY=t:e.originX==="start"?e.offsetX=a?-t:t:e.originX==="end"&&(e.offsetX=a?t:-t),e}_getOrigin(){let e=!this._dir||this._dir.value=="ltr",t=this.position,a;t=="above"||t=="below"?a={originX:"center",originY:t=="above"?"top":"bottom"}:t=="before"||t=="left"&&e||t=="right"&&!e?a={originX:"start",originY:"center"}:(t=="after"||t=="right"&&e||t=="left"&&!e)&&(a={originX:"end",originY:"center"});let{x:n,y:o}=this._invertPosition(a.originX,a.originY);return{main:a,fallback:{originX:n,originY:o}}}_getOverlayPosition(){let e=!this._dir||this._dir.value=="ltr",t=this.position,a;t=="above"?a={overlayX:"center",overlayY:"bottom"}:t=="below"?a={overlayX:"center",overlayY:"top"}:t=="before"||t=="left"&&e||t=="right"&&!e?a={overlayX:"end",overlayY:"center"}:(t=="after"||t=="right"&&e||t=="left"&&!e)&&(a={overlayX:"start",overlayY:"center"});let{x:n,y:o}=this._invertPosition(a.overlayX,a.overlayY);return{main:a,fallback:{overlayX:n,overlayY:o}}}_updateTooltipMessage(){this._tooltipInstance&&(this._tooltipInstance.message=this.message,this._tooltipInstance._markForCheck(),le(()=>{this._tooltipInstance&&this._overlayRef.updatePosition()},{injector:this._injector}))}_setTooltipClass(e){this._tooltipInstance&&(this._tooltipInstance.tooltipClass=e instanceof Set?Array.from(e):e,this._tooltipInstance._markForCheck())}_invertPosition(e,t){return this.position==="above"||this.position==="below"?t==="top"?t="bottom":t==="bottom"&&(t="top"):e==="end"?e="start":e==="start"&&(e="end"),{x:e,y:t}}_updateCurrentPositionClass(e){let{overlayY:t,originX:a,originY:n}=e,o;if(t==="center"?this._dir&&this._dir.value==="rtl"?o=a==="end"?"left":"right":o=a==="start"?"left":"right":o=t==="bottom"&&n==="top"?"above":"below",o!==this._currentPosition){let m=this._overlayRef;if(m){let u=`${this._cssClassPrefix}-${Hn}-`;m.removePanelClass(u+this._currentPosition),m.addPanelClass(u+o)}this._currentPosition=o}}_setupPointerEnterEventsIfNeeded(){this._disabled||!this.message||!this._viewInitialized||this._eventCleanups.length||(this._isTouchPlatform()?this.touchGestures!=="off"&&(this._disableNativeGesturesIfNecessary(),this._addListener("touchstart",e=>{let t=e.targetTouches?.[0],a=t?{x:t.clientX,y:t.clientY}:void 0;this._setupPointerExitEventsIfNeeded(),this._touchstartTimeout&&clearTimeout(this._touchstartTimeout);let n=500;this._touchstartTimeout=setTimeout(()=>{this._touchstartTimeout=null,this.show(void 0,a)},this._defaultOptions?.touchLongPressShowDelay??n)})):this._addListener("mouseenter",e=>{this._setupPointerExitEventsIfNeeded();let t;e.x!==void 0&&e.y!==void 0&&(t=e),this.show(void 0,t)}))}_setupPointerExitEventsIfNeeded(){if(!this._pointerExitEventsInitialized){if(this._pointerExitEventsInitialized=!0,!this._isTouchPlatform())this._addListener("mouseleave",e=>{let t=e.relatedTarget;(!t||!this._overlayRef?.overlayElement.contains(t))&&this.hide()}),this._addListener("wheel",e=>{if(this._isTooltipVisible()){let t=this._document.elementFromPoint(e.clientX,e.clientY),a=this._elementRef.nativeElement;t!==a&&!a.contains(t)&&this.hide()}});else if(this.touchGestures!=="off"){this._disableNativeGesturesIfNecessary();let e=()=>{this._touchstartTimeout&&clearTimeout(this._touchstartTimeout),this.hide(this._defaultOptions?.touchendHideDelay)};this._addListener("touchend",e),this._addListener("touchcancel",e)}}}_addListener(e,t){this._eventCleanups.push(this._renderer.listen(this._elementRef.nativeElement,e,t,xi))}_isTouchPlatform(){let e=this._defaultOptions?.detectHoverCapability;return typeof e=="function"?!e():this._platform.IOS||this._platform.ANDROID?!0:this._platform.isBrowser?!!e&&this._mediaMatcher.matchMedia("(any-hover: none)").matches:!1}_disableNativeGesturesIfNecessary(){let e=this.touchGestures;if(e!=="off"){let t=this._elementRef.nativeElement,a=t.style;(e==="on"||t.nodeName!=="INPUT"&&t.nodeName!=="TEXTAREA")&&(a.userSelect=a.msUserSelect=a.webkitUserSelect=a.MozUserSelect="none"),(e==="on"||!t.draggable)&&(a.webkitUserDrag="none"),a.touchAction="none",a.webkitTapHighlightColor="transparent"}}_syncAriaDescription(e){this._ariaDescriptionPending||(this._ariaDescriptionPending=!0,this._ariaDescriber.removeDescription(this._elementRef.nativeElement,e,"tooltip"),this._isDestroyed||le({write:()=>{this._ariaDescriptionPending=!1,this.message&&!this.disabled&&this._ariaDescriber.describe(this._elementRef.nativeElement,this.message,"tooltip")}},{injector:this._injector}))}_overlayEventPredicate=e=>e.type==="keydown"?this._isTooltipVisible()&&e.keyCode===27&&!ce(e):!0;static \u0275fac=function(t){return new(t||r)};static \u0275dir=J({type:r,selectors:[["","matTooltip",""]],hostAttrs:[1,"mat-mdc-tooltip-trigger"],hostVars:2,hostBindings:function(t,a){t&2&&M("mat-mdc-tooltip-disabled",a.disabled)},inputs:{position:[0,"matTooltipPosition","position"],positionAtOrigin:[0,"matTooltipPositionAtOrigin","positionAtOrigin"],disabled:[0,"matTooltipDisabled","disabled"],showDelay:[0,"matTooltipShowDelay","showDelay"],hideDelay:[0,"matTooltipHideDelay","hideDelay"],touchGestures:[0,"matTooltipTouchGestures","touchGestures"],message:[0,"matTooltip","message"],tooltipClass:[0,"matTooltipClass","tooltipClass"]},exportAs:["matTooltip"]})}return r})(),Ei=(()=>{class r{_changeDetectorRef=s(R);_elementRef=s(H);_isMultiline=!1;message;tooltipClass;_showTimeoutId;_hideTimeoutId;_triggerElement;_mouseLeaveHideDelay;_animationsDisabled=ae();_tooltip;_closeOnInteraction=!1;_isVisible=!1;_onHide=new T;_showAnimation="mat-mdc-tooltip-show";_hideAnimation="mat-mdc-tooltip-hide";constructor(){}show(e){this._hideTimeoutId!=null&&clearTimeout(this._hideTimeoutId),this._showTimeoutId=setTimeout(()=>{this._toggleVisibility(!0),this._showTimeoutId=void 0},e)}hide(e){this._showTimeoutId!=null&&clearTimeout(this._showTimeoutId),this._hideTimeoutId=setTimeout(()=>{this._toggleVisibility(!1),this._hideTimeoutId=void 0},e)}afterHidden(){return this._onHide}isVisible(){return this._isVisible}ngOnDestroy(){this._cancelPendingAnimations(),this._onHide.complete(),this._triggerElement=null}_handleBodyInteraction(){this._closeOnInteraction&&this.hide(0)}_markForCheck(){this._changeDetectorRef.markForCheck()}_handleMouseLeave({relatedTarget:e}){(!e||!this._triggerElement.contains(e))&&(this.isVisible()?this.hide(this._mouseLeaveHideDelay):this._finalizeAnimation(!1))}_onShow(){this._isMultiline=this._isTooltipMultiline(),this._markForCheck()}_isTooltipMultiline(){let e=this._elementRef.nativeElement.getBoundingClientRect();return e.height>Ai&&e.width>=Si}_handleAnimationEnd({animationName:e}){(e===this._showAnimation||e===this._hideAnimation)&&this._finalizeAnimation(e===this._showAnimation)}_cancelPendingAnimations(){this._showTimeoutId!=null&&clearTimeout(this._showTimeoutId),this._hideTimeoutId!=null&&clearTimeout(this._hideTimeoutId),this._showTimeoutId=this._hideTimeoutId=void 0}_finalizeAnimation(e){e?this._closeOnInteraction=!0:this.isVisible()||this._onHide.next()}_toggleVisibility(e){let t=this._tooltip.nativeElement,a=this._showAnimation,n=this._hideAnimation;if(t.classList.remove(e?n:a),t.classList.add(e?a:n),this._isVisible!==e&&(this._isVisible=e,this._changeDetectorRef.markForCheck()),e&&!this._animationsDisabled&&typeof getComputedStyle=="function"){let o=getComputedStyle(t);(o.getPropertyValue("animation-duration")==="0s"||o.getPropertyValue("animation-name")==="none")&&(this._animationsDisabled=!0)}e&&this._onShow(),this._animationsDisabled&&(t.classList.add("_mat-animation-noopable"),this._finalizeAnimation(e))}static \u0275fac=function(t){return new(t||r)};static \u0275cmp=b({type:r,selectors:[["mat-tooltip-component"]],viewQuery:function(t,a){if(t&1&&U(yi,7),t&2){let n;F(n=O())&&(a._tooltip=n.first)}},hostAttrs:["aria-hidden","true"],hostBindings:function(t,a){t&1&&_("mouseleave",function(o){return a._handleMouseLeave(o)})},decls:4,vars:5,consts:[["tooltip",""],[1,"mdc-tooltip","mat-mdc-tooltip",3,"animationend"],[1,"mat-mdc-tooltip-surface","mdc-tooltip__surface"]],template:function(t,a){t&1&&(P(0,"div",1,0),pt("animationend",function(o){return a._handleAnimationEnd(o)}),P(2,"div",2),p(3),N()()),t&2&&(K(a.tooltipClass),M("mdc-tooltip--multiline",a._isMultiline),c(3),D(a.message))},styles:[`.mat-mdc-tooltip {
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
`],encapsulation:2,changeDetection:0})}return r})();var Ii=["mat-calendar-body",""];function Ti(r,i){return this._trackRow(i)}var qn=(r,i)=>i.id;function Vi(r,i){if(r&1&&(P(0,"tr",0)(1,"td",3),p(2),N()()),r&2){let e=h();c(),Ae("padding-top",e._cellPadding)("padding-bottom",e._cellPadding),k("colspan",e.numCols),c(),z(" ",e.label," ")}}function Pi(r,i){if(r&1&&(P(0,"td",3),p(1),N()),r&2){let e=h(2);Ae("padding-top",e._cellPadding)("padding-bottom",e._cellPadding),k("colspan",e._firstRowOffset),c(),z(" ",e._firstRowOffset>=e.labelMinRequiredCells?e.label:""," ")}}function Fi(r,i){if(r&1){let e=Y();P(0,"td",6)(1,"button",7),pt("click",function(a){let n=C(e).$implicit,o=h(2);return w(o._cellClicked(n,a))})("focus",function(a){let n=C(e).$implicit,o=h(2);return w(o._emitActiveDateChange(n,a))}),P(2,"span",8),p(3),N(),xe(4,"span",9),N()()}if(r&2){let e=i.$implicit,t=i.$index,a=h().$index,n=h();Ae("width",n._cellWidth)("padding-top",n._cellPadding)("padding-bottom",n._cellPadding),k("data-mat-row",a)("data-mat-col",t),c(),K(e.cssClasses),M("mat-calendar-body-disabled",!e.enabled)("mat-calendar-body-active",n._isActiveCell(a,t))("mat-calendar-body-range-start",n._isRangeStart(e.compareValue))("mat-calendar-body-range-end",n._isRangeEnd(e.compareValue))("mat-calendar-body-in-range",n._isInRange(e.compareValue))("mat-calendar-body-comparison-bridge-start",n._isComparisonBridgeStart(e.compareValue,a,t))("mat-calendar-body-comparison-bridge-end",n._isComparisonBridgeEnd(e.compareValue,a,t))("mat-calendar-body-comparison-start",n._isComparisonStart(e.compareValue))("mat-calendar-body-comparison-end",n._isComparisonEnd(e.compareValue))("mat-calendar-body-in-comparison-range",n._isInComparisonRange(e.compareValue))("mat-calendar-body-preview-start",n._isPreviewStart(e.compareValue))("mat-calendar-body-preview-end",n._isPreviewEnd(e.compareValue))("mat-calendar-body-in-preview",n._isInPreview(e.compareValue)),de("tabIndex",n._isActiveCell(a,t)?0:-1),k("aria-label",e.ariaLabel)("aria-disabled",!e.enabled||null)("aria-pressed",n._isSelected(e.compareValue))("aria-current",n.todayValue===e.compareValue?"date":null)("aria-describedby",n._getDescribedby(e.compareValue)),c(),M("mat-calendar-body-selected",n._isSelected(e.compareValue))("mat-calendar-body-comparison-identical",n._isComparisonIdentical(e.compareValue))("mat-calendar-body-today",n.todayValue===e.compareValue),c(),z(" ",e.displayValue," ")}}function Oi(r,i){if(r&1&&(P(0,"tr",1),A(1,Pi,2,6,"td",4),ee(2,Fi,5,49,"td",5,qn),N()),r&2){let e=i.$implicit,t=i.$index,a=h();c(),S(t===0&&a._firstRowOffset?1:-1),c(),te(e)}}function Ri(r,i){if(r&1&&(l(0,"th",2)(1,"span",6),p(2),d(),l(3,"span",3),p(4),d()()),r&2){let e=i.$implicit;c(2),D(e.long),c(2),D(e.narrow)}}var Li=["*"];function Ni(r,i){}function Bi(r,i){if(r&1){let e=Y();l(0,"mat-month-view",4),_t("activeDateChange",function(a){C(e);let n=h();return ut(n.activeDate,a)||(n.activeDate=a),w(a)}),_("_userSelection",function(a){C(e);let n=h();return w(n._dateSelected(a))})("dragStarted",function(a){C(e);let n=h();return w(n._dragStarted(a))})("dragEnded",function(a){C(e);let n=h();return w(n._dragEnded(a))}),d()}if(r&2){let e=h();ht("activeDate",e.activeDate),v("selected",e.selected)("dateFilter",e.dateFilter)("maxDate",e.maxDate)("minDate",e.minDate)("dateClass",e.dateClass)("comparisonStart",e.comparisonStart)("comparisonEnd",e.comparisonEnd)("startDateAccessibleName",e.startDateAccessibleName)("endDateAccessibleName",e.endDateAccessibleName)("activeDrag",e._activeDrag)}}function Hi(r,i){if(r&1){let e=Y();l(0,"mat-year-view",5),_t("activeDateChange",function(a){C(e);let n=h();return ut(n.activeDate,a)||(n.activeDate=a),w(a)}),_("monthSelected",function(a){C(e);let n=h();return w(n._monthSelectedInYearView(a))})("selectedChange",function(a){C(e);let n=h();return w(n._goToDateInView(a,"month"))}),d()}if(r&2){let e=h();ht("activeDate",e.activeDate),v("selected",e.selected)("dateFilter",e.dateFilter)("maxDate",e.maxDate)("minDate",e.minDate)("dateClass",e.dateClass)}}function Yi(r,i){if(r&1){let e=Y();l(0,"mat-multi-year-view",6),_t("activeDateChange",function(a){C(e);let n=h();return ut(n.activeDate,a)||(n.activeDate=a),w(a)}),_("yearSelected",function(a){C(e);let n=h();return w(n._yearSelectedInMultiYearView(a))})("selectedChange",function(a){C(e);let n=h();return w(n._goToDateInView(a,"year"))}),d()}if(r&2){let e=h();ht("activeDate",e.activeDate),v("selected",e.selected)("dateFilter",e.dateFilter)("maxDate",e.maxDate)("minDate",e.minDate)("dateClass",e.dateClass)}}function zi(r,i){}var ji=["button"],Ui=[[["","matDatepickerToggleIcon",""]]],Gi=["[matDatepickerToggleIcon]"];function $i(r,i){r&1&&(Q(),l(0,"svg",2),x(1,"path",3),d())}var Xe=(()=>{class r{changes=new T;calendarLabel="Calendar";openCalendarLabel="Open calendar";closeCalendarLabel="Close calendar";prevMonthLabel="Previous month";nextMonthLabel="Next month";prevYearLabel="Previous year";nextYearLabel="Next year";prevMultiYearLabel="Previous 24 years";nextMultiYearLabel="Next 24 years";switchToMonthViewLabel="Choose date";switchToMultiYearViewLabel="Choose month and year";startDateLabel="Start date";endDateLabel="End date";comparisonDateLabel="Comparison range";formatYearRange(e,t){return`${e} \u2013 ${t}`}formatYearRangeLabel(e,t){return`${e} to ${t}`}static \u0275fac=function(t){return new(t||r)};static \u0275prov=X({token:r,factory:r.\u0275fac,providedIn:"root"})}return r})(),Xi=0,it=class{value;displayValue;ariaLabel;enabled;compareValue;rawValue;id=Xi++;cssClasses;constructor(i,e,t,a,n,o=i,m){this.value=i,this.displayValue=e,this.ariaLabel=t,this.enabled=a,this.compareValue=o,this.rawValue=m,this.cssClasses=n instanceof Set?Array.from(n):n}},qi={passive:!1,capture:!0},Lt={passive:!0,capture:!0},zn={passive:!0},$e=(()=>{class r{_elementRef=s(H);_ngZone=s(se);_platform=s(Be);_intl=s(Xe);_eventCleanups;_skipNextFocus=!1;_focusActiveCellAfterViewChecked=!1;label;rows;todayValue;startValue;endValue;labelMinRequiredCells;numCols=7;activeCell=0;ngAfterViewChecked(){this._focusActiveCellAfterViewChecked&&(this._focusActiveCell(),this._focusActiveCellAfterViewChecked=!1)}isRange=!1;cellAspectRatio=1;comparisonStart=null;comparisonEnd=null;previewStart=null;previewEnd=null;startDateAccessibleName=null;endDateAccessibleName=null;selectedValueChange=new g;previewChange=new g;activeDateChange=new g;dragStarted=new g;dragEnded=new g;_firstRowOffset;_cellPadding;_cellWidth;_startDateLabelId;_endDateLabelId;_comparisonStartDateLabelId;_comparisonEndDateLabelId;_didDragSinceMouseDown=!1;_injector=s(q);comparisonDateAccessibleName=this._intl.comparisonDateLabel;_trackRow=e=>e;constructor(){let e=s(we),t=s(fe);this._startDateLabelId=t.getId("mat-calendar-body-start-"),this._endDateLabelId=t.getId("mat-calendar-body-end-"),this._comparisonStartDateLabelId=t.getId("mat-calendar-body-comparison-start-"),this._comparisonEndDateLabelId=t.getId("mat-calendar-body-comparison-end-"),s(Se).load(yt),this._ngZone.runOutsideAngular(()=>{let a=this._elementRef.nativeElement,n=[e.listen(a,"touchmove",this._touchmoveHandler,qi),e.listen(a,"mouseenter",this._enterHandler,Lt),e.listen(a,"focus",this._enterHandler,Lt),e.listen(a,"mouseleave",this._leaveHandler,Lt),e.listen(a,"blur",this._leaveHandler,Lt),e.listen(a,"mousedown",this._mousedownHandler,zn),e.listen(a,"touchstart",this._mousedownHandler,zn)];this._platform.isBrowser&&n.push(e.listen("window","mouseup",this._mouseupHandler),e.listen("window","touchend",this._touchendHandler)),this._eventCleanups=n})}_cellClicked(e,t){this._didDragSinceMouseDown||e.enabled&&this.selectedValueChange.emit({value:e.value,event:t})}_emitActiveDateChange(e,t){e.enabled&&this.activeDateChange.emit({value:e.value,event:t})}_isSelected(e){return this.startValue===e||this.endValue===e}ngOnChanges(e){let t=e.numCols,{rows:a,numCols:n}=this;(e.rows||t)&&(this._firstRowOffset=a&&a.length&&a[0].length?n-a[0].length:0),(e.cellAspectRatio||t||!this._cellPadding)&&(this._cellPadding=`${50*this.cellAspectRatio/n}%`),(t||!this._cellWidth)&&(this._cellWidth=`${100/n}%`)}ngOnDestroy(){this._eventCleanups.forEach(e=>e())}_isActiveCell(e,t){let a=e*this.numCols+t;return e&&(a-=this._firstRowOffset),a==this.activeCell}_focusActiveCell(e=!0){le(()=>{setTimeout(()=>{let t=this._elementRef.nativeElement.querySelector(".mat-calendar-body-active");t&&(e||(this._skipNextFocus=!0),t.focus())})},{injector:this._injector})}_scheduleFocusActiveCellAfterViewChecked(){this._focusActiveCellAfterViewChecked=!0}_isRangeStart(e){return pa(e,this.startValue,this.endValue)}_isRangeEnd(e){return ha(e,this.startValue,this.endValue)}_isInRange(e){return ua(e,this.startValue,this.endValue,this.isRange)}_isComparisonStart(e){return pa(e,this.comparisonStart,this.comparisonEnd)}_isComparisonBridgeStart(e,t,a){if(!this._isComparisonStart(e)||this._isRangeStart(e)||!this._isInRange(e))return!1;let n=this.rows[t][a-1];if(!n){let o=this.rows[t-1];n=o&&o[o.length-1]}return n&&!this._isRangeEnd(n.compareValue)}_isComparisonBridgeEnd(e,t,a){if(!this._isComparisonEnd(e)||this._isRangeEnd(e)||!this._isInRange(e))return!1;let n=this.rows[t][a+1];if(!n){let o=this.rows[t+1];n=o&&o[0]}return n&&!this._isRangeStart(n.compareValue)}_isComparisonEnd(e){return ha(e,this.comparisonStart,this.comparisonEnd)}_isInComparisonRange(e){return ua(e,this.comparisonStart,this.comparisonEnd,this.isRange)}_isComparisonIdentical(e){return this.comparisonStart===this.comparisonEnd&&e===this.comparisonStart}_isPreviewStart(e){return pa(e,this.previewStart,this.previewEnd)}_isPreviewEnd(e){return ha(e,this.previewStart,this.previewEnd)}_isInPreview(e){return ua(e,this.previewStart,this.previewEnd,this.isRange)}_getDescribedby(e){if(!this.isRange)return null;if(this.startValue===e&&this.endValue===e)return`${this._startDateLabelId} ${this._endDateLabelId}`;if(this.startValue===e)return this._startDateLabelId;if(this.endValue===e)return this._endDateLabelId;if(this.comparisonStart!==null&&this.comparisonEnd!==null){if(e===this.comparisonStart&&e===this.comparisonEnd)return`${this._comparisonStartDateLabelId} ${this._comparisonEndDateLabelId}`;if(e===this.comparisonStart)return this._comparisonStartDateLabelId;if(e===this.comparisonEnd)return this._comparisonEndDateLabelId}return null}_enterHandler=e=>{if(this._skipNextFocus&&e.type==="focus"){this._skipNextFocus=!1;return}if(e.target&&this.isRange){let t=this._getCellFromElement(e.target);t&&this._ngZone.run(()=>this.previewChange.emit({value:t.enabled?t:null,event:e}))}};_touchmoveHandler=e=>{if(!this.isRange)return;let t=jn(e),a=t?this._getCellFromElement(t):null;t!==e.target&&(this._didDragSinceMouseDown=!0),ma(e.target)&&e.preventDefault(),this._ngZone.run(()=>this.previewChange.emit({value:a?.enabled?a:null,event:e}))};_leaveHandler=e=>{this.previewEnd!==null&&this.isRange&&(e.type!=="blur"&&(this._didDragSinceMouseDown=!0),e.target&&this._getCellFromElement(e.target)&&!(e.relatedTarget&&this._getCellFromElement(e.relatedTarget))&&this._ngZone.run(()=>this.previewChange.emit({value:null,event:e})))};_mousedownHandler=e=>{if(!this.isRange)return;this._didDragSinceMouseDown=!1;let t=e.target&&this._getCellFromElement(e.target);!t||!this._isInRange(t.compareValue)||this._ngZone.run(()=>{this.dragStarted.emit({value:t.rawValue,event:e})})};_mouseupHandler=e=>{if(!this.isRange)return;let t=ma(e.target);if(!t){this._ngZone.run(()=>{this.dragEnded.emit({value:null,event:e})});return}t.closest(".mat-calendar-body")===this._elementRef.nativeElement&&this._ngZone.run(()=>{let a=this._getCellFromElement(t);this.dragEnded.emit({value:a?.rawValue??null,event:e})})};_touchendHandler=e=>{let t=jn(e);t&&this._mouseupHandler({target:t})};_getCellFromElement(e){let t=ma(e);if(t){let a=t.getAttribute("data-mat-row"),n=t.getAttribute("data-mat-col");if(a&&n)return this.rows[parseInt(a)]?.[parseInt(n)]||null}return null}static \u0275fac=function(t){return new(t||r)};static \u0275cmp=b({type:r,selectors:[["","mat-calendar-body",""]],hostAttrs:[1,"mat-calendar-body"],inputs:{label:"label",rows:"rows",todayValue:"todayValue",startValue:"startValue",endValue:"endValue",labelMinRequiredCells:"labelMinRequiredCells",numCols:"numCols",activeCell:"activeCell",isRange:"isRange",cellAspectRatio:"cellAspectRatio",comparisonStart:"comparisonStart",comparisonEnd:"comparisonEnd",previewStart:"previewStart",previewEnd:"previewEnd",startDateAccessibleName:"startDateAccessibleName",endDateAccessibleName:"endDateAccessibleName"},outputs:{selectedValueChange:"selectedValueChange",previewChange:"previewChange",activeDateChange:"activeDateChange",dragStarted:"dragStarted",dragEnded:"dragEnded"},exportAs:["matCalendarBody"],features:[Z],attrs:Ii,decls:11,vars:11,consts:[["aria-hidden","true"],["role","row"],[1,"mat-calendar-body-hidden-label",3,"id"],[1,"mat-calendar-body-label"],[1,"mat-calendar-body-label",3,"paddingTop","paddingBottom"],["role","gridcell",1,"mat-calendar-body-cell-container",3,"width","paddingTop","paddingBottom"],["role","gridcell",1,"mat-calendar-body-cell-container"],["type","button",1,"mat-calendar-body-cell",3,"click","focus","tabindex"],[1,"mat-calendar-body-cell-content","mat-focus-indicator"],["aria-hidden","true",1,"mat-calendar-body-cell-preview"]],template:function(t,a){t&1&&(A(0,Vi,3,6,"tr",0),ee(1,Oi,4,1,"tr",1,Ti,!0),P(3,"span",2),p(4),N(),P(5,"span",2),p(6),N(),P(7,"span",2),p(8),N(),P(9,"span",2),p(10),N()),t&2&&(S(a._firstRowOffset<a.labelMinRequiredCells?0:-1),c(),te(a.rows),c(2),de("id",a._startDateLabelId),c(),z(" ",a.startDateAccessibleName,`
`),c(),de("id",a._endDateLabelId),c(),z(" ",a.endDateAccessibleName,`
`),c(),de("id",a._comparisonStartDateLabelId),c(),Ze(" ",a.comparisonDateAccessibleName," ",a.startDateAccessibleName,`
`),c(),de("id",a._comparisonEndDateLabelId),c(),Ze(" ",a.comparisonDateAccessibleName," ",a.endDateAccessibleName,`
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
`],encapsulation:2,changeDetection:0})}return r})();function ca(r){return r?.nodeName==="TD"}function ma(r){let i;return ca(r)?i=r:ca(r.parentNode)?i=r.parentNode:ca(r.parentNode?.parentNode)&&(i=r.parentNode.parentNode),i?.getAttribute("data-mat-row")!=null?i:null}function pa(r,i,e){return e!==null&&i!==e&&r<e&&r===i}function ha(r,i,e){return i!==null&&i!==e&&r>=i&&r===e}function ua(r,i,e,t){return t&&i!==null&&e!==null&&i!==e&&r>=i&&r<=e}function jn(r){let i=r.changedTouches[0];return document.elementFromPoint(i.clientX,i.clientY)}var W=class{start;end;_disableStructuralEquivalency;constructor(i,e){this.start=i,this.end=e}},rt=(()=>{class r{selection;_adapter;_selectionChanged=new T;selectionChanged=this._selectionChanged;constructor(e,t){this.selection=e,this._adapter=t,this.selection=e}updateSelection(e,t){let a=this.selection;this.selection=e,this._selectionChanged.next({selection:e,source:t,oldValue:a})}ngOnDestroy(){this._selectionChanged.complete()}_isValidDateInstance(e){return this._adapter.isDateInstance(e)&&this._adapter.isValid(e)}static \u0275fac=function(t){Oa()};static \u0275prov=X({token:r,factory:r.\u0275fac})}return r})(),Ki=(()=>{class r extends rt{constructor(e){super(null,e)}add(e){super.updateSelection(e,this)}isValid(){return this.selection!=null&&this._isValidDateInstance(this.selection)}isComplete(){return this.selection!=null}clone(){let e=new r(this._adapter);return e.updateSelection(this.selection,this),e}static \u0275fac=function(t){return new(t||r)(Va(B))};static \u0275prov=X({token:r,factory:r.\u0275fac})}return r})();var Kn={provide:rt,useFactory:()=>s(rt,{optional:!0,skipSelf:!0})||new Ki(s(B))};var Wn=new L("MAT_DATE_RANGE_SELECTION_STRATEGY");var _a=7,Wi=0,Un=(()=>{class r{_changeDetectorRef=s(R);_dateFormats=s(ve,{optional:!0});_dateAdapter=s(B,{optional:!0});_dir=s(Ee,{optional:!0});_rangeStrategy=s(Wn,{optional:!0});_rerenderSubscription=ie.EMPTY;_selectionKeyPressed=!1;get activeDate(){return this._activeDate}set activeDate(e){let t=this._activeDate,a=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))||this._dateAdapter.today();this._activeDate=this._dateAdapter.clampDate(a,this.minDate,this.maxDate),this._hasSameMonthAndYear(t,this._activeDate)||this._init()}_activeDate;get selected(){return this._selected}set selected(e){e instanceof W?this._selected=e:this._selected=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e)),this._setRanges(this._selected)}_selected=null;get minDate(){return this._minDate}set minDate(e){this._minDate=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_minDate=null;get maxDate(){return this._maxDate}set maxDate(e){this._maxDate=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_maxDate=null;dateFilter;dateClass;comparisonStart=null;comparisonEnd=null;startDateAccessibleName=null;endDateAccessibleName=null;activeDrag=null;selectedChange=new g;_userSelection=new g;dragStarted=new g;dragEnded=new g;activeDateChange=new g;_matCalendarBody;_monthLabel=y("");_weeks=y([]);_firstWeekOffset=y(0);_rangeStart=y(null);_rangeEnd=y(null);_comparisonRangeStart=y(null);_comparisonRangeEnd=y(null);_previewStart=y(null);_previewEnd=y(null);_isRange=y(!1);_todayDate=y(null);_weekdays=y([]);constructor(){s(Se).load(bt),this._activeDate=this._dateAdapter.today()}ngAfterContentInit(){this._rerenderSubscription=this._dateAdapter.localeChanges.pipe(ct(null)).subscribe(()=>this._init())}ngOnChanges(e){let t=e.comparisonStart||e.comparisonEnd;t&&!t.firstChange&&this._setRanges(this.selected),e.activeDrag&&!this.activeDrag&&this._clearPreview()}ngOnDestroy(){this._rerenderSubscription.unsubscribe()}_dateSelected(e){let t=e.value,a=this._getDateFromDayOfMonth(t),n,o;this._selected instanceof W?(n=this._getDateInCurrentMonth(this._selected.start),o=this._getDateInCurrentMonth(this._selected.end)):n=o=this._getDateInCurrentMonth(this._selected),(n!==t||o!==t)&&this.selectedChange.emit(a),this._userSelection.emit({value:a,event:e.event}),this._clearPreview(),this._changeDetectorRef.markForCheck()}_updateActiveDate(e){let t=e.value,a=this._activeDate;this.activeDate=this._getDateFromDayOfMonth(t),this._dateAdapter.compareDate(a,this.activeDate)&&this.activeDateChange.emit(this._activeDate)}_handleCalendarBodyKeydown(e){let t=this._activeDate,a=this._isRtl();switch(e.keyCode){case 37:this.activeDate=this._dateAdapter.addCalendarDays(this._activeDate,a?1:-1);break;case 39:this.activeDate=this._dateAdapter.addCalendarDays(this._activeDate,a?-1:1);break;case 38:this.activeDate=this._dateAdapter.addCalendarDays(this._activeDate,-7);break;case 40:this.activeDate=this._dateAdapter.addCalendarDays(this._activeDate,7);break;case 36:this.activeDate=this._dateAdapter.addCalendarDays(this._activeDate,1-this._dateAdapter.getDate(this._activeDate));break;case 35:this.activeDate=this._dateAdapter.addCalendarDays(this._activeDate,this._dateAdapter.getNumDaysInMonth(this._activeDate)-this._dateAdapter.getDate(this._activeDate));break;case 33:this.activeDate=e.altKey?this._dateAdapter.addCalendarYears(this._activeDate,-1):this._dateAdapter.addCalendarMonths(this._activeDate,-1);break;case 34:this.activeDate=e.altKey?this._dateAdapter.addCalendarYears(this._activeDate,1):this._dateAdapter.addCalendarMonths(this._activeDate,1);break;case 13:case 32:this._selectionKeyPressed=!0,this._canSelect(this._activeDate)&&e.preventDefault();return;case 27:this._previewEnd()!=null&&!ce(e)&&(this._clearPreview(),this.activeDrag?this.dragEnded.emit({value:null,event:e}):(this.selectedChange.emit(null),this._userSelection.emit({value:null,event:e})),e.preventDefault(),e.stopPropagation());return;default:return}this._dateAdapter.compareDate(t,this.activeDate)&&(this.activeDateChange.emit(this.activeDate),this._focusActiveCellAfterViewChecked()),e.preventDefault()}_handleCalendarBodyKeyup(e){(e.keyCode===32||e.keyCode===13)&&(this._selectionKeyPressed&&this._canSelect(this._activeDate)&&this._dateSelected({value:this._dateAdapter.getDate(this._activeDate),event:e}),this._selectionKeyPressed=!1)}_init(){this._setRanges(this.selected),this._todayDate.set(this._getCellCompareValue(this._dateAdapter.today())),this._monthLabel.set(this._dateFormats.display.monthLabel?this._dateAdapter.format(this.activeDate,this._dateFormats.display.monthLabel):this._dateAdapter.getMonthNames("short")[this._dateAdapter.getMonth(this.activeDate)].toLocaleUpperCase());let e=this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate),this._dateAdapter.getMonth(this.activeDate),1);this._firstWeekOffset.set((_a+this._dateAdapter.getDayOfWeek(e)-this._dateAdapter.getFirstDayOfWeek())%_a),this._initWeekdays(),this._createWeekCells(),this._changeDetectorRef.markForCheck()}_focusActiveCell(e){this._matCalendarBody._focusActiveCell(e)}_focusActiveCellAfterViewChecked(){this._matCalendarBody._scheduleFocusActiveCellAfterViewChecked()}_previewChanged({event:e,value:t}){if(this._rangeStrategy){let a=t?t.rawValue:null,n=this._rangeStrategy.createPreview(a,this.selected,e);if(this._previewStart.set(this._getCellCompareValue(n.start)),this._previewEnd.set(this._getCellCompareValue(n.end)),this.activeDrag&&a){let o=this._rangeStrategy.createDrag?.(this.activeDrag.value,this.selected,a,e);o&&(this._previewStart.set(this._getCellCompareValue(o.start)),this._previewEnd.set(this._getCellCompareValue(o.end)))}}}_dragEnded(e){if(this.activeDrag)if(e.value){let t=this._rangeStrategy?.createDrag?.(this.activeDrag.value,this.selected,e.value,e.event);this.dragEnded.emit({value:t??null,event:e.event})}else this.dragEnded.emit({value:null,event:e.event})}_getDateFromDayOfMonth(e){return this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate),this._dateAdapter.getMonth(this.activeDate),e)}_initWeekdays(){let e=this._dateAdapter.getFirstDayOfWeek(),t=this._dateAdapter.getDayOfWeekNames("narrow"),n=this._dateAdapter.getDayOfWeekNames("long").map((o,m)=>({long:o,narrow:t[m],id:Wi++}));this._weekdays.set(n.slice(e).concat(n.slice(0,e)))}_createWeekCells(){let e=this._dateAdapter.getNumDaysInMonth(this.activeDate),t=this._dateAdapter.getDateNames(),a=[[]];for(let n=0,o=this._firstWeekOffset();n<e;n++,o++){o==_a&&(a.push([]),o=0);let m=this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate),this._dateAdapter.getMonth(this.activeDate),n+1),u=this._shouldEnableDate(m),f=this._dateAdapter.format(m,this._dateFormats.display.dateA11yLabel),E=this.dateClass?this.dateClass(m,"month"):void 0;a[a.length-1].push(new it(n+1,t[n],f,u,E,this._getCellCompareValue(m),m))}this._weeks.set(a)}_shouldEnableDate(e){return!!e&&(!this.minDate||this._dateAdapter.compareDate(e,this.minDate)>=0)&&(!this.maxDate||this._dateAdapter.compareDate(e,this.maxDate)<=0)&&(!this.dateFilter||this.dateFilter(e))}_getDateInCurrentMonth(e){return e&&this._hasSameMonthAndYear(e,this.activeDate)?this._dateAdapter.getDate(e):null}_hasSameMonthAndYear(e,t){return!!(e&&t&&this._dateAdapter.getMonth(e)==this._dateAdapter.getMonth(t)&&this._dateAdapter.getYear(e)==this._dateAdapter.getYear(t))}_getCellCompareValue(e){if(e){let t=this._dateAdapter.getYear(e),a=this._dateAdapter.getMonth(e),n=this._dateAdapter.getDate(e);return new Date(t,a,n).getTime()}return null}_isRtl(){return this._dir&&this._dir.value==="rtl"}_setRanges(e){e instanceof W?(this._rangeStart.set(this._getCellCompareValue(e.start)),this._rangeEnd.set(this._getCellCompareValue(e.end)),this._isRange.set(!0)):(this._rangeStart.set(this._getCellCompareValue(e)),this._rangeEnd.set(this._rangeStart()),this._isRange.set(!1)),this._comparisonRangeStart.set(this._getCellCompareValue(this.comparisonStart)),this._comparisonRangeEnd.set(this._getCellCompareValue(this.comparisonEnd))}_canSelect(e){return!this.dateFilter||this.dateFilter(e)}_clearPreview(){this._previewStart.set(null),this._previewEnd.set(null)}static \u0275fac=function(t){return new(t||r)};static \u0275cmp=b({type:r,selectors:[["mat-month-view"]],viewQuery:function(t,a){if(t&1&&U($e,5),t&2){let n;F(n=O())&&(a._matCalendarBody=n.first)}},inputs:{activeDate:"activeDate",selected:"selected",minDate:"minDate",maxDate:"maxDate",dateFilter:"dateFilter",dateClass:"dateClass",comparisonStart:"comparisonStart",comparisonEnd:"comparisonEnd",startDateAccessibleName:"startDateAccessibleName",endDateAccessibleName:"endDateAccessibleName",activeDrag:"activeDrag"},outputs:{selectedChange:"selectedChange",_userSelection:"_userSelection",dragStarted:"dragStarted",dragEnded:"dragEnded",activeDateChange:"activeDateChange"},exportAs:["matMonthView"],features:[Z],decls:8,vars:14,consts:[["role","grid",1,"mat-calendar-table"],[1,"mat-calendar-table-header"],["scope","col"],["aria-hidden","true"],["colspan","7",1,"mat-calendar-table-header-divider"],["mat-calendar-body","",3,"selectedValueChange","activeDateChange","previewChange","dragStarted","dragEnded","keyup","keydown","label","rows","todayValue","startValue","endValue","comparisonStart","comparisonEnd","previewStart","previewEnd","isRange","labelMinRequiredCells","activeCell","startDateAccessibleName","endDateAccessibleName"],[1,"cdk-visually-hidden"]],template:function(t,a){t&1&&(l(0,"table",0)(1,"thead",1)(2,"tr"),ee(3,Ri,5,2,"th",2,qn),d(),l(5,"tr",3),x(6,"th",4),d()(),l(7,"tbody",5),_("selectedValueChange",function(o){return a._dateSelected(o)})("activeDateChange",function(o){return a._updateActiveDate(o)})("previewChange",function(o){return a._previewChanged(o)})("dragStarted",function(o){return a.dragStarted.emit(o)})("dragEnded",function(o){return a._dragEnded(o)})("keyup",function(o){return a._handleCalendarBodyKeyup(o)})("keydown",function(o){return a._handleCalendarBodyKeydown(o)}),d()()),t&2&&(c(3),te(a._weekdays()),c(4),v("label",a._monthLabel())("rows",a._weeks())("todayValue",a._todayDate())("startValue",a._rangeStart())("endValue",a._rangeEnd())("comparisonStart",a._comparisonRangeStart())("comparisonEnd",a._comparisonRangeEnd())("previewStart",a._previewStart())("previewEnd",a._previewEnd())("isRange",a._isRange())("labelMinRequiredCells",3)("activeCell",a._dateAdapter.getDate(a.activeDate)-1)("startDateAccessibleName",a.startDateAccessibleName)("endDateAccessibleName",a.endDateAccessibleName))},dependencies:[$e],encapsulation:2,changeDetection:0})}return r})(),$=24,ga=4,Gn=(()=>{class r{_changeDetectorRef=s(R);_dateAdapter=s(B,{optional:!0});_dir=s(Ee,{optional:!0});_rerenderSubscription=ie.EMPTY;_selectionKeyPressed=!1;get activeDate(){return this._activeDate}set activeDate(e){let t=this._activeDate,a=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))||this._dateAdapter.today();this._activeDate=this._dateAdapter.clampDate(a,this.minDate,this.maxDate),Qn(this._dateAdapter,t,this._activeDate,this.minDate,this.maxDate)||this._init()}_activeDate;get selected(){return this._selected}set selected(e){e instanceof W?this._selected=e:this._selected=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e)),this._setSelectedYear(e)}_selected=null;get minDate(){return this._minDate}set minDate(e){this._minDate=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_minDate=null;get maxDate(){return this._maxDate}set maxDate(e){this._maxDate=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_maxDate=null;dateFilter;dateClass;selectedChange=new g;yearSelected=new g;activeDateChange=new g;_matCalendarBody;_years=y([]);_todayYear=y(0);_selectedYear=y(null);constructor(){this._dateAdapter,this._activeDate=this._dateAdapter.today()}ngAfterContentInit(){this._rerenderSubscription=this._dateAdapter.localeChanges.pipe(ct(null)).subscribe(()=>this._init())}ngOnDestroy(){this._rerenderSubscription.unsubscribe()}_init(){this._todayYear.set(this._dateAdapter.getYear(this._dateAdapter.today()));let t=this._dateAdapter.getYear(this._activeDate)-at(this._dateAdapter,this.activeDate,this.minDate,this.maxDate),a=[];for(let n=0,o=[];n<$;n++)o.push(t+n),o.length==ga&&(a.push(o.map(m=>this._createCellForYear(m))),o=[]);this._years.set(a),this._changeDetectorRef.markForCheck()}_yearSelected(e){let t=e.value,a=this._dateAdapter.createDate(t,0,1),n=this._getDateFromYear(t);this.yearSelected.emit(a),this.selectedChange.emit(n)}_updateActiveDate(e){let t=e.value,a=this._activeDate;this.activeDate=this._getDateFromYear(t),this._dateAdapter.compareDate(a,this.activeDate)&&this.activeDateChange.emit(this.activeDate)}_handleCalendarBodyKeydown(e){let t=this._activeDate,a=this._isRtl();switch(e.keyCode){case 37:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,a?1:-1);break;case 39:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,a?-1:1);break;case 38:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,-ga);break;case 40:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,ga);break;case 36:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,-at(this._dateAdapter,this.activeDate,this.minDate,this.maxDate));break;case 35:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,$-at(this._dateAdapter,this.activeDate,this.minDate,this.maxDate)-1);break;case 33:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,e.altKey?-$*10:-$);break;case 34:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,e.altKey?$*10:$);break;case 13:case 32:this._selectionKeyPressed=!0;break;default:return}this._dateAdapter.compareDate(t,this.activeDate)&&this.activeDateChange.emit(this.activeDate),this._focusActiveCellAfterViewChecked(),e.preventDefault()}_handleCalendarBodyKeyup(e){(e.keyCode===32||e.keyCode===13)&&(this._selectionKeyPressed&&this._yearSelected({value:this._dateAdapter.getYear(this._activeDate),event:e}),this._selectionKeyPressed=!1)}_getActiveCell(){return at(this._dateAdapter,this.activeDate,this.minDate,this.maxDate)}_focusActiveCell(){this._matCalendarBody._focusActiveCell()}_focusActiveCellAfterViewChecked(){this._matCalendarBody._scheduleFocusActiveCellAfterViewChecked()}_getDateFromYear(e){let t=this._dateAdapter.getMonth(this.activeDate),a=this._dateAdapter.getNumDaysInMonth(this._dateAdapter.createDate(e,t,1));return this._dateAdapter.createDate(e,t,Math.min(this._dateAdapter.getDate(this.activeDate),a))}_createCellForYear(e){let t=this._dateAdapter.createDate(e,0,1),a=this._dateAdapter.getYearName(t),n=this.dateClass?this.dateClass(t,"multi-year"):void 0;return new it(e,a,a,this._shouldEnableYear(e),n)}_shouldEnableYear(e){if(e==null||this.maxDate&&e>this._dateAdapter.getYear(this.maxDate)||this.minDate&&e<this._dateAdapter.getYear(this.minDate))return!1;if(!this.dateFilter)return!0;let t=this._dateAdapter.createDate(e,0,1);for(let a=t;this._dateAdapter.getYear(a)==e;a=this._dateAdapter.addCalendarDays(a,1))if(this.dateFilter(a))return!0;return!1}_isRtl(){return this._dir&&this._dir.value==="rtl"}_setSelectedYear(e){if(this._selectedYear.set(null),e instanceof W){let t=e.start||e.end;t&&this._selectedYear.set(this._dateAdapter.getYear(t))}else e&&this._selectedYear.set(this._dateAdapter.getYear(e))}static \u0275fac=function(t){return new(t||r)};static \u0275cmp=b({type:r,selectors:[["mat-multi-year-view"]],viewQuery:function(t,a){if(t&1&&U($e,5),t&2){let n;F(n=O())&&(a._matCalendarBody=n.first)}},inputs:{activeDate:"activeDate",selected:"selected",minDate:"minDate",maxDate:"maxDate",dateFilter:"dateFilter",dateClass:"dateClass"},outputs:{selectedChange:"selectedChange",yearSelected:"yearSelected",activeDateChange:"activeDateChange"},exportAs:["matMultiYearView"],decls:5,vars:7,consts:[["role","grid",1,"mat-calendar-table"],["aria-hidden","true",1,"mat-calendar-table-header"],["colspan","4",1,"mat-calendar-table-header-divider"],["mat-calendar-body","",3,"selectedValueChange","activeDateChange","keyup","keydown","rows","todayValue","startValue","endValue","numCols","cellAspectRatio","activeCell"]],template:function(t,a){t&1&&(l(0,"table",0)(1,"thead",1)(2,"tr"),x(3,"th",2),d()(),l(4,"tbody",3),_("selectedValueChange",function(o){return a._yearSelected(o)})("activeDateChange",function(o){return a._updateActiveDate(o)})("keyup",function(o){return a._handleCalendarBodyKeyup(o)})("keydown",function(o){return a._handleCalendarBodyKeydown(o)}),d()()),t&2&&(c(4),v("rows",a._years())("todayValue",a._todayYear())("startValue",a._selectedYear())("endValue",a._selectedYear())("numCols",4)("cellAspectRatio",4/7)("activeCell",a._getActiveCell()))},dependencies:[$e],encapsulation:2,changeDetection:0})}return r})();function Qn(r,i,e,t,a){let n=r.getYear(i),o=r.getYear(e),m=Zn(r,t,a);return Math.floor((n-m)/$)===Math.floor((o-m)/$)}function at(r,i,e,t){let a=r.getYear(i);return Qi(a-Zn(r,e,t),$)}function Zn(r,i,e){let t=0;return e?t=r.getYear(e)-$+1:i&&(t=r.getYear(i)),t}function Qi(r,i){return(r%i+i)%i}var $n=(()=>{class r{_changeDetectorRef=s(R);_dateFormats=s(ve,{optional:!0});_dateAdapter=s(B,{optional:!0});_dir=s(Ee,{optional:!0});_rerenderSubscription=ie.EMPTY;_selectionKeyPressed=!1;get activeDate(){return this._activeDate}set activeDate(e){let t=this._activeDate,a=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))||this._dateAdapter.today();this._activeDate=this._dateAdapter.clampDate(a,this.minDate,this.maxDate),this._dateAdapter.getYear(t)!==this._dateAdapter.getYear(this._activeDate)&&this._init()}_activeDate;get selected(){return this._selected}set selected(e){e instanceof W?this._selected=e:this._selected=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e)),this._setSelectedMonth(e)}_selected=null;get minDate(){return this._minDate}set minDate(e){this._minDate=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_minDate=null;get maxDate(){return this._maxDate}set maxDate(e){this._maxDate=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_maxDate=null;dateFilter;dateClass;selectedChange=new g;monthSelected=new g;activeDateChange=new g;_matCalendarBody;_months=y([]);_yearLabel=y("");_todayMonth=y(null);_selectedMonth=y(null);constructor(){this._activeDate=this._dateAdapter.today()}ngAfterContentInit(){this._rerenderSubscription=this._dateAdapter.localeChanges.pipe(ct(null)).subscribe(()=>this._init())}ngOnDestroy(){this._rerenderSubscription.unsubscribe()}_monthSelected(e){let t=e.value,a=this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate),t,1);this.monthSelected.emit(a);let n=this._getDateFromMonth(t);this.selectedChange.emit(n)}_updateActiveDate(e){let t=e.value,a=this._activeDate;this.activeDate=this._getDateFromMonth(t),this._dateAdapter.compareDate(a,this.activeDate)&&this.activeDateChange.emit(this.activeDate)}_handleCalendarBodyKeydown(e){let t=this._activeDate,a=this._isRtl();switch(e.keyCode){case 37:this.activeDate=this._dateAdapter.addCalendarMonths(this._activeDate,a?1:-1);break;case 39:this.activeDate=this._dateAdapter.addCalendarMonths(this._activeDate,a?-1:1);break;case 38:this.activeDate=this._dateAdapter.addCalendarMonths(this._activeDate,-4);break;case 40:this.activeDate=this._dateAdapter.addCalendarMonths(this._activeDate,4);break;case 36:this.activeDate=this._dateAdapter.addCalendarMonths(this._activeDate,-this._dateAdapter.getMonth(this._activeDate));break;case 35:this.activeDate=this._dateAdapter.addCalendarMonths(this._activeDate,11-this._dateAdapter.getMonth(this._activeDate));break;case 33:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,e.altKey?-10:-1);break;case 34:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,e.altKey?10:1);break;case 13:case 32:this._selectionKeyPressed=!0;break;default:return}this._dateAdapter.compareDate(t,this.activeDate)&&(this.activeDateChange.emit(this.activeDate),this._focusActiveCellAfterViewChecked()),e.preventDefault()}_handleCalendarBodyKeyup(e){(e.keyCode===32||e.keyCode===13)&&(this._selectionKeyPressed&&this._monthSelected({value:this._dateAdapter.getMonth(this._activeDate),event:e}),this._selectionKeyPressed=!1)}_init(){this._setSelectedMonth(this.selected),this._todayMonth.set(this._getMonthInCurrentYear(this._dateAdapter.today())),this._yearLabel.set(this._dateAdapter.getYearName(this.activeDate));let e=this._dateAdapter.getMonthNames("short");this._months.set([[0,1,2,3],[4,5,6,7],[8,9,10,11]].map(t=>t.map(a=>this._createCellForMonth(a,e[a])))),this._changeDetectorRef.markForCheck()}_focusActiveCell(){this._matCalendarBody._focusActiveCell()}_focusActiveCellAfterViewChecked(){this._matCalendarBody._scheduleFocusActiveCellAfterViewChecked()}_getMonthInCurrentYear(e){return e&&this._dateAdapter.getYear(e)==this._dateAdapter.getYear(this.activeDate)?this._dateAdapter.getMonth(e):null}_getDateFromMonth(e){let t=this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate),e,1),a=this._dateAdapter.getNumDaysInMonth(t);return this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate),e,Math.min(this._dateAdapter.getDate(this.activeDate),a))}_createCellForMonth(e,t){let a=this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate),e,1),n=this._dateAdapter.format(a,this._dateFormats.display.monthYearA11yLabel),o=this.dateClass?this.dateClass(a,"year"):void 0;return new it(e,t.toLocaleUpperCase(),n,this._shouldEnableMonth(e),o)}_shouldEnableMonth(e){let t=this._dateAdapter.getYear(this.activeDate);if(e==null||this._isYearAndMonthAfterMaxDate(t,e)||this._isYearAndMonthBeforeMinDate(t,e))return!1;if(!this.dateFilter)return!0;let a=this._dateAdapter.createDate(t,e,1);for(let n=a;this._dateAdapter.getMonth(n)==e;n=this._dateAdapter.addCalendarDays(n,1))if(this.dateFilter(n))return!0;return!1}_isYearAndMonthAfterMaxDate(e,t){if(this.maxDate){let a=this._dateAdapter.getYear(this.maxDate),n=this._dateAdapter.getMonth(this.maxDate);return e>a||e===a&&t>n}return!1}_isYearAndMonthBeforeMinDate(e,t){if(this.minDate){let a=this._dateAdapter.getYear(this.minDate),n=this._dateAdapter.getMonth(this.minDate);return e<a||e===a&&t<n}return!1}_isRtl(){return this._dir&&this._dir.value==="rtl"}_setSelectedMonth(e){e instanceof W?this._selectedMonth.set(this._getMonthInCurrentYear(e.start)||this._getMonthInCurrentYear(e.end)):this._selectedMonth.set(this._getMonthInCurrentYear(e))}static \u0275fac=function(t){return new(t||r)};static \u0275cmp=b({type:r,selectors:[["mat-year-view"]],viewQuery:function(t,a){if(t&1&&U($e,5),t&2){let n;F(n=O())&&(a._matCalendarBody=n.first)}},inputs:{activeDate:"activeDate",selected:"selected",minDate:"minDate",maxDate:"maxDate",dateFilter:"dateFilter",dateClass:"dateClass"},outputs:{selectedChange:"selectedChange",monthSelected:"monthSelected",activeDateChange:"activeDateChange"},exportAs:["matYearView"],decls:5,vars:9,consts:[["role","grid",1,"mat-calendar-table"],["aria-hidden","true",1,"mat-calendar-table-header"],["colspan","4",1,"mat-calendar-table-header-divider"],["mat-calendar-body","",3,"selectedValueChange","activeDateChange","keyup","keydown","label","rows","todayValue","startValue","endValue","labelMinRequiredCells","numCols","cellAspectRatio","activeCell"]],template:function(t,a){t&1&&(l(0,"table",0)(1,"thead",1)(2,"tr"),x(3,"th",2),d()(),l(4,"tbody",3),_("selectedValueChange",function(o){return a._monthSelected(o)})("activeDateChange",function(o){return a._updateActiveDate(o)})("keyup",function(o){return a._handleCalendarBodyKeyup(o)})("keydown",function(o){return a._handleCalendarBodyKeydown(o)}),d()()),t&2&&(c(4),v("label",a._yearLabel())("rows",a._months())("todayValue",a._todayMonth())("startValue",a._selectedMonth())("endValue",a._selectedMonth())("labelMinRequiredCells",2)("numCols",4)("cellAspectRatio",4/7)("activeCell",a._dateAdapter.getMonth(a.activeDate)))},dependencies:[$e],encapsulation:2,changeDetection:0})}return r})(),Jn=(()=>{class r{_intl=s(Xe);calendar=s(fa);_dateAdapter=s(B,{optional:!0});_dateFormats=s(ve,{optional:!0});_periodButtonText;_periodButtonDescription;_periodButtonLabel;_prevButtonLabel;_nextButtonLabel;constructor(){s(Se).load(bt);let e=s(R);this._updateLabels(),this.calendar.stateChanges.subscribe(()=>{this._updateLabels(),e.markForCheck()})}get periodButtonText(){return this._periodButtonText}get periodButtonDescription(){return this._periodButtonDescription}get periodButtonLabel(){return this._periodButtonLabel}get prevButtonLabel(){return this._prevButtonLabel}get nextButtonLabel(){return this._nextButtonLabel}currentPeriodClicked(){this.calendar.currentView=this.calendar.currentView=="month"?"multi-year":"month"}previousClicked(){this.previousEnabled()&&(this.calendar.activeDate=this.calendar.currentView=="month"?this._dateAdapter.addCalendarMonths(this.calendar.activeDate,-1):this._dateAdapter.addCalendarYears(this.calendar.activeDate,this.calendar.currentView=="year"?-1:-$))}nextClicked(){this.nextEnabled()&&(this.calendar.activeDate=this.calendar.currentView=="month"?this._dateAdapter.addCalendarMonths(this.calendar.activeDate,1):this._dateAdapter.addCalendarYears(this.calendar.activeDate,this.calendar.currentView=="year"?1:$))}previousEnabled(){return this.calendar.minDate?!this.calendar.minDate||!this._isSameView(this.calendar.activeDate,this.calendar.minDate):!0}nextEnabled(){return!this.calendar.maxDate||!this._isSameView(this.calendar.activeDate,this.calendar.maxDate)}_updateLabels(){let e=this.calendar,t=this._intl,a=this._dateAdapter;e.currentView==="month"?(this._periodButtonText=a.format(e.activeDate,this._dateFormats.display.monthYearLabel).toLocaleUpperCase(),this._periodButtonDescription=a.format(e.activeDate,this._dateFormats.display.monthYearLabel).toLocaleUpperCase(),this._periodButtonLabel=t.switchToMultiYearViewLabel,this._prevButtonLabel=t.prevMonthLabel,this._nextButtonLabel=t.nextMonthLabel):e.currentView==="year"?(this._periodButtonText=a.getYearName(e.activeDate),this._periodButtonDescription=a.getYearName(e.activeDate),this._periodButtonLabel=t.switchToMonthViewLabel,this._prevButtonLabel=t.prevYearLabel,this._nextButtonLabel=t.nextYearLabel):(this._periodButtonText=t.formatYearRange(...this._formatMinAndMaxYearLabels()),this._periodButtonDescription=t.formatYearRangeLabel(...this._formatMinAndMaxYearLabels()),this._periodButtonLabel=t.switchToMonthViewLabel,this._prevButtonLabel=t.prevMultiYearLabel,this._nextButtonLabel=t.nextMultiYearLabel)}_isSameView(e,t){return this.calendar.currentView=="month"?this._dateAdapter.getYear(e)==this._dateAdapter.getYear(t)&&this._dateAdapter.getMonth(e)==this._dateAdapter.getMonth(t):this.calendar.currentView=="year"?this._dateAdapter.getYear(e)==this._dateAdapter.getYear(t):Qn(this._dateAdapter,e,t,this.calendar.minDate,this.calendar.maxDate)}_formatMinAndMaxYearLabels(){let t=this._dateAdapter.getYear(this.calendar.activeDate)-at(this._dateAdapter,this.calendar.activeDate,this.calendar.minDate,this.calendar.maxDate),a=t+$-1,n=this._dateAdapter.getYearName(this._dateAdapter.createDate(t,0,1)),o=this._dateAdapter.getYearName(this._dateAdapter.createDate(a,0,1));return[n,o]}_periodButtonLabelId=s(fe).getId("mat-calendar-period-label-");static \u0275fac=function(t){return new(t||r)};static \u0275cmp=b({type:r,selectors:[["mat-calendar-header"]],exportAs:["matCalendarHeader"],ngContentSelectors:Li,decls:17,vars:13,consts:[[1,"mat-calendar-header"],[1,"mat-calendar-controls"],["aria-live","polite",1,"cdk-visually-hidden",3,"id"],["matButton","","type","button",1,"mat-calendar-period-button",3,"click"],["aria-hidden","true"],["viewBox","0 0 10 5","focusable","false","aria-hidden","true",1,"mat-calendar-arrow"],["points","0,0 5,5 10,0"],[1,"mat-calendar-spacer"],["matIconButton","","type","button","disabledInteractive","",1,"mat-calendar-previous-button",3,"click","disabled","matTooltip"],["viewBox","0 0 24 24","focusable","false","aria-hidden","true"],["d","M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"],["matIconButton","","type","button","disabledInteractive","",1,"mat-calendar-next-button",3,"click","disabled","matTooltip"],["d","M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"]],template:function(t,a){t&1&&(ke(),l(0,"div",0)(1,"div",1)(2,"span",2),p(3),d(),l(4,"button",3),_("click",function(){return a.currentPeriodClicked()}),l(5,"span",4),p(6),d(),Q(),l(7,"svg",5),x(8,"polygon",6),d()(),De(),x(9,"div",7),Me(10),l(11,"button",8),_("click",function(){return a.previousClicked()}),Q(),l(12,"svg",9),x(13,"path",10),d()(),De(),l(14,"button",11),_("click",function(){return a.nextClicked()}),Q(),l(15,"svg",9),x(16,"path",12),d()()()()),t&2&&(c(2),v("id",a._periodButtonLabelId),c(),D(a.periodButtonDescription),c(),k("aria-label",a.periodButtonLabel)("aria-describedby",a._periodButtonLabelId),c(2),D(a.periodButtonText),c(),M("mat-calendar-invert",a.calendar.currentView!=="month"),c(4),v("disabled",!a.previousEnabled())("matTooltip",a.prevButtonLabel),k("aria-label",a.prevButtonLabel),c(3),v("disabled",!a.nextEnabled())("matTooltip",a.nextButtonLabel),k("aria-label",a.nextButtonLabel))},dependencies:[ne,tt,Yn],encapsulation:2,changeDetection:0})}return r})(),fa=(()=>{class r{_dateAdapter=s(B,{optional:!0});_dateFormats=s(ve,{optional:!0});_changeDetectorRef=s(R);_elementRef=s(H);headerComponent;_calendarHeaderPortal;_intlChanges;_moveFocusOnNextTick=!1;get startAt(){return this._startAt}set startAt(e){this._startAt=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_startAt=null;startView="month";get selected(){return this._selected}set selected(e){e instanceof W?this._selected=e:this._selected=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_selected=null;get minDate(){return this._minDate}set minDate(e){this._minDate=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_minDate=null;get maxDate(){return this._maxDate}set maxDate(e){this._maxDate=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_maxDate=null;dateFilter;dateClass;comparisonStart=null;comparisonEnd=null;startDateAccessibleName=null;endDateAccessibleName=null;selectedChange=new g;yearSelected=new g;monthSelected=new g;viewChanged=new g(!0);_userSelection=new g;_userDragDrop=new g;monthView;yearView;multiYearView;get activeDate(){return this._clampedActiveDate}set activeDate(e){this._clampedActiveDate=this._dateAdapter.clampDate(e,this.minDate,this.maxDate),this.stateChanges.next(),this._changeDetectorRef.markForCheck()}_clampedActiveDate;get currentView(){return this._currentView}set currentView(e){let t=this._currentView!==e?e:null;this._currentView=e,this._moveFocusOnNextTick=!0,this._changeDetectorRef.markForCheck(),t&&(this.stateChanges.next(),this.viewChanged.emit(t))}_currentView;_activeDrag=null;stateChanges=new T;constructor(){this._intlChanges=s(Xe).changes.subscribe(()=>{this._changeDetectorRef.markForCheck(),this.stateChanges.next()})}ngAfterContentInit(){this._calendarHeaderPortal=new be(this.headerComponent||Jn),this.activeDate=this.startAt||this._dateAdapter.today(),this._currentView=this.startView}ngAfterViewChecked(){this._moveFocusOnNextTick&&(this._moveFocusOnNextTick=!1,this.focusActiveCell())}ngOnDestroy(){this._intlChanges.unsubscribe(),this.stateChanges.complete()}ngOnChanges(e){let t=e.minDate&&!this._dateAdapter.sameDate(e.minDate.previousValue,e.minDate.currentValue)?e.minDate:void 0,a=e.maxDate&&!this._dateAdapter.sameDate(e.maxDate.previousValue,e.maxDate.currentValue)?e.maxDate:void 0,n=t||a||e.dateFilter;if(n&&!n.firstChange){let o=this._getCurrentViewComponent();o&&(this._elementRef.nativeElement.contains(ta())&&(this._moveFocusOnNextTick=!0),this._changeDetectorRef.detectChanges(),o._init())}this.stateChanges.next()}focusActiveCell(){this._getCurrentViewComponent()?._focusActiveCell(!1)}updateTodaysDate(){this._getCurrentViewComponent()?._init()}_dateSelected(e){let t=e.value;(this.selected instanceof W||t&&!this._dateAdapter.sameDate(t,this.selected))&&this.selectedChange.emit(t),this._userSelection.emit(e)}_yearSelectedInMultiYearView(e){this.yearSelected.emit(e)}_monthSelectedInYearView(e){this.monthSelected.emit(e)}_goToDateInView(e,t){this.activeDate=e,this.currentView=t}_dragStarted(e){this._activeDrag=e}_dragEnded(e){this._activeDrag&&(e.value&&this._userDragDrop.emit(e),this._activeDrag=null)}_getCurrentViewComponent(){return this.monthView||this.yearView||this.multiYearView}static \u0275fac=function(t){return new(t||r)};static \u0275cmp=b({type:r,selectors:[["mat-calendar"]],viewQuery:function(t,a){if(t&1&&U(Un,5)($n,5)(Gn,5),t&2){let n;F(n=O())&&(a.monthView=n.first),F(n=O())&&(a.yearView=n.first),F(n=O())&&(a.multiYearView=n.first)}},hostAttrs:[1,"mat-calendar"],inputs:{headerComponent:"headerComponent",startAt:"startAt",startView:"startView",selected:"selected",minDate:"minDate",maxDate:"maxDate",dateFilter:"dateFilter",dateClass:"dateClass",comparisonStart:"comparisonStart",comparisonEnd:"comparisonEnd",startDateAccessibleName:"startDateAccessibleName",endDateAccessibleName:"endDateAccessibleName"},outputs:{selectedChange:"selectedChange",yearSelected:"yearSelected",monthSelected:"monthSelected",viewChanged:"viewChanged",_userSelection:"_userSelection",_userDragDrop:"_userDragDrop"},exportAs:["matCalendar"],features:[ue([Kn]),Z],decls:5,vars:2,consts:[[3,"cdkPortalOutlet"],["cdkMonitorSubtreeFocus","","tabindex","-1",1,"mat-calendar-content"],[3,"activeDate","selected","dateFilter","maxDate","minDate","dateClass","comparisonStart","comparisonEnd","startDateAccessibleName","endDateAccessibleName","activeDrag"],[3,"activeDate","selected","dateFilter","maxDate","minDate","dateClass"],[3,"activeDateChange","_userSelection","dragStarted","dragEnded","activeDate","selected","dateFilter","maxDate","minDate","dateClass","comparisonStart","comparisonEnd","startDateAccessibleName","endDateAccessibleName","activeDrag"],[3,"activeDateChange","monthSelected","selectedChange","activeDate","selected","dateFilter","maxDate","minDate","dateClass"],[3,"activeDateChange","yearSelected","selectedChange","activeDate","selected","dateFilter","maxDate","minDate","dateClass"]],template:function(t,a){if(t&1&&(Qe(0,Ni,0,0,"ng-template",0),l(1,"div",1),A(2,Bi,1,11,"mat-month-view",2)(3,Hi,1,6,"mat-year-view",3)(4,Yi,1,6,"mat-multi-year-view",3),d()),t&2){let n;v("cdkPortalOutlet",a._calendarHeaderPortal),c(2),S((n=a.currentView)==="month"?2:n==="year"?3:n==="multi-year"?4:-1)}},dependencies:[He,Ga,Un,$n,Gn],styles:[`.mat-calendar {
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
`],encapsulation:2,changeDetection:0})}return r})(),Zi=new L("mat-datepicker-scroll-strategy",{providedIn:"root",factory:()=>{let r=s(q);return()=>Dt(r)}}),ei=(()=>{class r{_elementRef=s(H);_animationsDisabled=ae();_changeDetectorRef=s(R);_globalModel=s(rt);_dateAdapter=s(B);_ngZone=s(se);_rangeSelectionStrategy=s(Wn,{optional:!0});_stateChanges;_model;_eventCleanups;_animationFallback;_calendar;color;datepicker;comparisonStart=null;comparisonEnd=null;startDateAccessibleName=null;endDateAccessibleName=null;_isAbove=!1;_animationDone=new T;_isAnimating=!1;_closeButtonText;_closeButtonFocused=!1;_actionsPortal=null;_dialogLabelId=null;constructor(){if(s(Se).load(bt),this._closeButtonText=s(Xe).closeCalendarLabel,!this._animationsDisabled){let e=this._elementRef.nativeElement,t=s(we);this._eventCleanups=this._ngZone.runOutsideAngular(()=>[t.listen(e,"animationstart",this._handleAnimationEvent),t.listen(e,"animationend",this._handleAnimationEvent),t.listen(e,"animationcancel",this._handleAnimationEvent)])}}ngAfterViewInit(){this._stateChanges=this.datepicker.stateChanges.subscribe(()=>{this._changeDetectorRef.markForCheck()}),this._calendar.focusActiveCell()}ngOnDestroy(){clearTimeout(this._animationFallback),this._eventCleanups?.forEach(e=>e()),this._stateChanges?.unsubscribe(),this._animationDone.complete()}_handleUserSelection(e){let t=this._model.selection,a=e.value,n=t instanceof W;if(n&&this._rangeSelectionStrategy){let o=this._rangeSelectionStrategy.selectionFinished(a,t,e.event);this._model.updateSelection(o,this)}else a&&(n||!this._dateAdapter.sameDate(a,t))&&this._model.add(a);(!this._model||this._model.isComplete())&&!this._actionsPortal&&this.datepicker.close()}_handleUserDragDrop(e){this._model.updateSelection(e.value,this)}_startExitAnimation(){this._elementRef.nativeElement.classList.add("mat-datepicker-content-exit"),this._animationsDisabled?this._animationDone.next():(clearTimeout(this._animationFallback),this._animationFallback=setTimeout(()=>{this._isAnimating||this._animationDone.next()},200))}_handleAnimationEvent=e=>{let t=this._elementRef.nativeElement;e.target!==t||!e.animationName.startsWith("_mat-datepicker-content")||(clearTimeout(this._animationFallback),this._isAnimating=e.type==="animationstart",t.classList.toggle("mat-datepicker-content-animating",this._isAnimating),this._isAnimating||this._animationDone.next())};_getSelected(){return this._model.selection}_applyPendingSelection(){this._model!==this._globalModel&&this._globalModel.updateSelection(this._model.selection,this)}_assignActions(e,t){this._model=e?this._globalModel.clone():this._globalModel,this._actionsPortal=e,t&&this._changeDetectorRef.detectChanges()}static \u0275fac=function(t){return new(t||r)};static \u0275cmp=b({type:r,selectors:[["mat-datepicker-content"]],viewQuery:function(t,a){if(t&1&&U(fa,5),t&2){let n;F(n=O())&&(a._calendar=n.first)}},hostAttrs:[1,"mat-datepicker-content"],hostVars:6,hostBindings:function(t,a){t&2&&(K(a.color?"mat-"+a.color:""),M("mat-datepicker-content-touch",a.datepicker.touchUi)("mat-datepicker-content-animations-enabled",!a._animationsDisabled))},inputs:{color:"color"},exportAs:["matDatepickerContent"],decls:5,vars:26,consts:[["cdkTrapFocus","","role","dialog",1,"mat-datepicker-content-container"],[3,"yearSelected","monthSelected","viewChanged","_userSelection","_userDragDrop","id","startAt","startView","minDate","maxDate","dateFilter","headerComponent","selected","dateClass","comparisonStart","comparisonEnd","startDateAccessibleName","endDateAccessibleName"],[3,"cdkPortalOutlet"],["type","button","matButton","elevated",1,"mat-datepicker-close-button",3,"focus","blur","click","color"]],template:function(t,a){t&1&&(l(0,"div",0)(1,"mat-calendar",1),_("yearSelected",function(o){return a.datepicker._selectYear(o)})("monthSelected",function(o){return a.datepicker._selectMonth(o)})("viewChanged",function(o){return a.datepicker._viewChanged(o)})("_userSelection",function(o){return a._handleUserSelection(o)})("_userDragDrop",function(o){return a._handleUserDragDrop(o)}),d(),Qe(2,zi,0,0,"ng-template",2),l(3,"button",3),_("focus",function(){return a._closeButtonFocused=!0})("blur",function(){return a._closeButtonFocused=!1})("click",function(){return a.datepicker.close()}),p(4),d()()),t&2&&(M("mat-datepicker-content-container-with-custom-header",a.datepicker.calendarHeaderComponent)("mat-datepicker-content-container-with-actions",a._actionsPortal),k("aria-modal",!0)("aria-labelledby",a._dialogLabelId??void 0),c(),K(a.datepicker.panelClass),v("id",a.datepicker.id)("startAt",a.datepicker.startAt)("startView",a.datepicker.startView)("minDate",a.datepicker._getMinDate())("maxDate",a.datepicker._getMaxDate())("dateFilter",a.datepicker._getDateFilter())("headerComponent",a.datepicker.calendarHeaderComponent)("selected",a._getSelected())("dateClass",a.datepicker.dateClass)("comparisonStart",a.comparisonStart)("comparisonEnd",a.comparisonEnd)("startDateAccessibleName",a.startDateAccessibleName)("endDateAccessibleName",a.endDateAccessibleName),c(),v("cdkPortalOutlet",a._actionsPortal),c(),M("cdk-visually-hidden",!a._closeButtonFocused),v("color",a.color||"primary"),c(),D(a._closeButtonText))},dependencies:[qa,fa,He,ne],styles:[`@keyframes _mat-datepicker-content-dropdown-enter {
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
`],encapsulation:2,changeDetection:0})}return r})(),Xn=(()=>{class r{_injector=s(q);_viewContainerRef=s(mt);_dateAdapter=s(B,{optional:!0});_dir=s(Ee,{optional:!0});_model=s(rt);_animationsDisabled=ae();_scrollStrategy=s(Zi);_inputStateChanges=ie.EMPTY;_document=s(Ce);calendarHeaderComponent;get startAt(){return this._startAt||(this.datepickerInput?this.datepickerInput.getStartValue():null)}set startAt(e){this._startAt=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_startAt=null;startView="month";get color(){return this._color||(this.datepickerInput?this.datepickerInput.getThemePalette():void 0)}set color(e){this._color=e}_color;touchUi=!1;get disabled(){return this._disabled===void 0&&this.datepickerInput?this.datepickerInput.disabled:!!this._disabled}set disabled(e){e!==this._disabled&&(this._disabled=e,this.stateChanges.next(void 0))}_disabled;xPosition="start";yPosition="below";restoreFocus=!0;yearSelected=new g;monthSelected=new g;viewChanged=new g(!0);dateClass;openedStream=new g;closedStream=new g;get panelClass(){return this._panelClass}set panelClass(e){this._panelClass=en(e)}_panelClass;get opened(){return this._opened}set opened(e){e?this.open():this.close()}_opened=!1;id=s(fe).getId("mat-datepicker-");_getMinDate(){return this.datepickerInput&&this.datepickerInput.min}_getMaxDate(){return this.datepickerInput&&this.datepickerInput.max}_getDateFilter(){return this.datepickerInput&&this.datepickerInput.dateFilter}_overlayRef=null;_componentRef=null;_focusedElementBeforeOpen=null;_backdropHarnessClass=`${this.id}-backdrop`;_actionsPortal=null;datepickerInput;stateChanges=new T;_changeDetectorRef=s(R);constructor(){this._dateAdapter,this._model.selectionChanged.subscribe(()=>{this._changeDetectorRef.markForCheck()})}ngOnChanges(e){let t=e.xPosition||e.yPosition;if(t&&!t.firstChange&&this._overlayRef){let a=this._overlayRef.getConfig().positionStrategy;a instanceof sn&&(this._setConnectedPositions(a),this.opened&&this._overlayRef.updatePosition())}this.stateChanges.next(void 0)}ngOnDestroy(){this._destroyOverlay(),this.close(),this._inputStateChanges.unsubscribe(),this.stateChanges.complete()}select(e){this._model.add(e)}_selectYear(e){this.yearSelected.emit(e)}_selectMonth(e){this.monthSelected.emit(e)}_viewChanged(e){this.viewChanged.emit(e)}registerInput(e){return this.datepickerInput,this._inputStateChanges.unsubscribe(),this.datepickerInput=e,this._inputStateChanges=e.stateChanges.subscribe(()=>this.stateChanges.next(void 0)),this._model}registerActions(e){this._actionsPortal,this._actionsPortal=e,this._componentRef?.instance._assignActions(e,!0)}removeActions(e){e===this._actionsPortal&&(this._actionsPortal=null,this._componentRef?.instance._assignActions(null,!0))}open(){this._opened||this.disabled||this._componentRef?.instance._isAnimating||(this.datepickerInput,this._focusedElementBeforeOpen=ta(),this._openOverlay(),this._opened=!0,this.openedStream.emit())}close(){if(!this._opened||this._componentRef?.instance._isAnimating)return;let e=this.restoreFocus&&this._focusedElementBeforeOpen&&typeof this._focusedElementBeforeOpen.focus=="function",t=()=>{this._opened&&(this._opened=!1,this.closedStream.emit())};if(this._componentRef){let{instance:a,location:n}=this._componentRef;a._animationDone.pipe(Ta(1)).subscribe(()=>{let o=this._document.activeElement;e&&(!o||o===this._document.activeElement||n.nativeElement.contains(o))&&this._focusedElementBeforeOpen.focus(),this._focusedElementBeforeOpen=null,this._destroyOverlay()}),a._startExitAnimation()}e?setTimeout(t):t()}_applyPendingSelection(){this._componentRef?.instance?._applyPendingSelection()}_forwardContentValues(e){e.datepicker=this,e.color=this.color,e._dialogLabelId=this.datepickerInput.getOverlayLabelId(),e._assignActions(this._actionsPortal,!1)}_openOverlay(){this._destroyOverlay();let e=this.touchUi,t=new be(ei,this._viewContainerRef),a=this._overlayRef=Ye(this._injector,new Ct({positionStrategy:e?this._getDialogStrategy():this._getDropdownStrategy(),hasBackdrop:!0,backdropClass:[e?"cdk-overlay-dark-backdrop":"mat-overlay-transparent-backdrop",this._backdropHarnessClass],direction:this._dir||"ltr",scrollStrategy:e?on(this._injector):this._scrollStrategy(),panelClass:`mat-datepicker-${e?"dialog":"popup"}`,disableAnimations:this._animationsDisabled}));this._getCloseStream(a).subscribe(n=>{n&&n.preventDefault(),this.close()}),a.keydownEvents().subscribe(n=>{let o=n.keyCode;(o===38||o===40||o===37||o===39||o===33||o===34)&&n.preventDefault()}),this._componentRef=a.attach(t),this._forwardContentValues(this._componentRef.instance),e||le(()=>{a.updatePosition()},{injector:this._injector})}_destroyOverlay(){this._overlayRef&&(this._overlayRef.dispose(),this._overlayRef=this._componentRef=null)}_getDialogStrategy(){return xt(this._injector).centerHorizontally().centerVertically()}_getDropdownStrategy(){let e=wt(this._injector,this.datepickerInput.getConnectedOverlayOrigin()).withTransformOriginOn(".mat-datepicker-content").withFlexibleDimensions(!1).withViewportMargin(8).withLockedPosition();return this._setConnectedPositions(e)}_setConnectedPositions(e){let t=this.xPosition==="end"?"end":"start",a=t==="start"?"end":"start",n=this.yPosition==="above"?"bottom":"top",o=n==="top"?"bottom":"top";return e.withPositions([{originX:t,originY:o,overlayX:t,overlayY:n},{originX:t,originY:n,overlayX:t,overlayY:o},{originX:a,originY:o,overlayX:a,overlayY:n},{originX:a,originY:n,overlayX:a,overlayY:o}])}_getCloseStream(e){let t=["ctrlKey","shiftKey","metaKey"];return dt(e.backdropClick(),e.detachments(),e.keydownEvents().pipe(Ia(a=>a.keyCode===27&&!ce(a)||this.datepickerInput&&ce(a,"altKey")&&a.keyCode===38&&t.every(n=>!ce(a,n)))))}static \u0275fac=function(t){return new(t||r)};static \u0275dir=J({type:r,inputs:{calendarHeaderComponent:"calendarHeaderComponent",startAt:"startAt",startView:"startView",color:"color",touchUi:[2,"touchUi","touchUi",j],disabled:[2,"disabled","disabled",j],xPosition:"xPosition",yPosition:"yPosition",restoreFocus:[2,"restoreFocus","restoreFocus",j],dateClass:"dateClass",panelClass:"panelClass",opened:[2,"opened","opened",j]},outputs:{yearSelected:"yearSelected",monthSelected:"monthSelected",viewChanged:"viewChanged",openedStream:"opened",closedStream:"closed"},features:[Z]})}return r})(),ti=(()=>{class r extends Xn{static \u0275fac=(()=>{let e;return function(a){return(e||(e=Pa(r)))(a||r)}})();static \u0275cmp=b({type:r,selectors:[["mat-datepicker"]],exportAs:["matDatepicker"],features:[ue([Kn,{provide:Xn,useExisting:r}]),We],decls:0,vars:0,template:function(t,a){},encapsulation:2,changeDetection:0})}return r})(),je=class{target;targetElement;value=null;constructor(i,e){this.target=i,this.targetElement=e,this.value=this.target.value}},Ji=(()=>{class r{_elementRef=s(H);_dateAdapter=s(B,{optional:!0});_dateFormats=s(ve,{optional:!0});_isInitialized=!1;get value(){return this._model?this._getValueFromModel(this._model.selection):this._pendingValue}set value(e){this._assignValueProgrammatically(e,!0)}_model;get disabled(){return!!this._disabled||this._parentDisabled()}set disabled(e){let t=e,a=this._elementRef.nativeElement;this._disabled!==t&&(this._disabled=t,this.stateChanges.next(void 0)),t&&this._isInitialized&&a.blur&&a.blur()}_disabled;dateChange=new g;dateInput=new g;stateChanges=new T;_onTouched=()=>{};_validatorOnChange=()=>{};_cvaOnChange=()=>{};_valueChangesSubscription=ie.EMPTY;_localeSubscription=ie.EMPTY;_pendingValue=null;_parseValidator=()=>this._lastValueValid?null:{matDatepickerParse:{text:this._elementRef.nativeElement.value}};_filterValidator=e=>{let t=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e.value));return!t||this._matchesFilter(t)?null:{matDatepickerFilter:!0}};_minValidator=e=>{let t=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e.value)),a=this._getMinDate();return!a||!t||this._dateAdapter.compareDate(a,t)<=0?null:{matDatepickerMin:{min:a,actual:t}}};_maxValidator=e=>{let t=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e.value)),a=this._getMaxDate();return!a||!t||this._dateAdapter.compareDate(a,t)>=0?null:{matDatepickerMax:{max:a,actual:t}}};_getValidators(){return[this._parseValidator,this._minValidator,this._maxValidator,this._filterValidator]}_registerModel(e){this._model=e,this._valueChangesSubscription.unsubscribe(),this._pendingValue&&this._assignValue(this._pendingValue),this._valueChangesSubscription=this._model.selectionChanged.subscribe(t=>{if(this._shouldHandleChangeEvent(t)){let a=this._getValueFromModel(t.selection);this._lastValueValid=this._isValidValue(a),this._cvaOnChange(a),this._onTouched(),this._formatValue(a),this.dateInput.emit(new je(this,this._elementRef.nativeElement)),this.dateChange.emit(new je(this,this._elementRef.nativeElement))}})}_lastValueValid=!1;constructor(){this._localeSubscription=this._dateAdapter.localeChanges.subscribe(()=>{this._assignValueProgrammatically(this.value,!0)})}ngAfterViewInit(){this._isInitialized=!0}ngOnChanges(e){er(e,this._dateAdapter)&&this.stateChanges.next(void 0)}ngOnDestroy(){this._valueChangesSubscription.unsubscribe(),this._localeSubscription.unsubscribe(),this.stateChanges.complete()}registerOnValidatorChange(e){this._validatorOnChange=e}validate(e){return this._validator?this._validator(e):null}writeValue(e){this._assignValueProgrammatically(e,e!==this.value)}registerOnChange(e){this._cvaOnChange=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this.disabled=e}_onKeydown(e){let t=["ctrlKey","shiftKey","metaKey"];ce(e,"altKey")&&e.keyCode===40&&t.every(n=>!ce(e,n))&&!this._elementRef.nativeElement.readOnly&&(this._openPopup(),e.preventDefault())}_onInput(e){let t=e.target.value,a=this._lastValueValid,n=this._dateAdapter.parse(t,this._dateFormats.parse.dateInput);this._lastValueValid=this._isValidValue(n),n=this._dateAdapter.getValidDateOrNull(n);let o=!this._dateAdapter.sameDate(n,this.value);!n||o?this._cvaOnChange(n):(t&&!this.value&&this._cvaOnChange(n),a!==this._lastValueValid&&this._validatorOnChange()),o&&(this._assignValue(n),this.dateInput.emit(new je(this,this._elementRef.nativeElement)))}_onChange(){this.dateChange.emit(new je(this,this._elementRef.nativeElement))}_onBlur(){this.value&&this._formatValue(this.value),this._onTouched()}_formatValue(e){this._elementRef.nativeElement.value=e!=null?this._dateAdapter.format(e,this._dateFormats.display.dateInput):""}_assignValue(e){this._model?(this._assignValueToModel(e),this._pendingValue=null):this._pendingValue=e}_isValidValue(e){return!e||this._dateAdapter.isValid(e)}_parentDisabled(){return!1}_assignValueProgrammatically(e,t){e=this._dateAdapter.deserialize(e),this._lastValueValid=this._isValidValue(e),e=this._dateAdapter.getValidDateOrNull(e),this._assignValue(e),t&&this._formatValue(e)}_matchesFilter(e){let t=this._getDateFilter();return!t||t(e)}static \u0275fac=function(t){return new(t||r)};static \u0275dir=J({type:r,inputs:{value:"value",disabled:[2,"disabled","disabled",j]},outputs:{dateChange:"dateChange",dateInput:"dateInput"},features:[Z]})}return r})();function er(r,i){let e=Object.keys(r);for(let t of e){let{previousValue:a,currentValue:n}=r[t];if(i.isDateInstance(a)&&i.isDateInstance(n)){if(!i.sameDate(a,n))return!0}else return!0}return!1}var tr={provide:It,useExisting:Ke(()=>zt),multi:!0},ar={provide:Tt,useExisting:Ke(()=>zt),multi:!0},zt=(()=>{class r extends Ji{_formField=s(Mn,{optional:!0});_closedSubscription=ie.EMPTY;_openedSubscription=ie.EMPTY;set matDatepicker(e){e&&(this._datepicker=e,this._ariaOwns.set(e.opened?e.id:null),this._closedSubscription=e.closedStream.subscribe(()=>{this._onTouched(),this._ariaOwns.set(null)}),this._openedSubscription=e.openedStream.subscribe(()=>{this._ariaOwns.set(e.id)}),this._registerModel(e.registerInput(this)))}_datepicker;_ariaOwns=y(null);get min(){return this._min}set min(e){let t=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e));this._dateAdapter.sameDate(t,this._min)||(this._min=t,this._validatorOnChange())}_min=null;get max(){return this._max}set max(e){let t=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e));this._dateAdapter.sameDate(t,this._max)||(this._max=t,this._validatorOnChange())}_max=null;get dateFilter(){return this._dateFilter}set dateFilter(e){let t=this._matchesFilter(this.value);this._dateFilter=e,this._matchesFilter(this.value)!==t&&this._validatorOnChange()}_dateFilter;_validator=null;constructor(){super(),this._validator=Vt.compose(super._getValidators())}getConnectedOverlayOrigin(){return this._formField?this._formField.getConnectedOverlayOrigin():this._elementRef}getOverlayLabelId(){return this._formField?this._formField.getLabelId():this._elementRef.nativeElement.getAttribute("aria-labelledby")}getThemePalette(){return this._formField?this._formField.color:void 0}getStartValue(){return this.value}ngOnDestroy(){super.ngOnDestroy(),this._closedSubscription.unsubscribe(),this._openedSubscription.unsubscribe()}_openPopup(){this._datepicker&&this._datepicker.open()}_getValueFromModel(e){return e}_assignValueToModel(e){this._model&&this._model.updateSelection(e,this)}_getMinDate(){return this._min}_getMaxDate(){return this._max}_getDateFilter(){return this._dateFilter}_shouldHandleChangeEvent(e){return e.source!==this}static \u0275fac=function(t){return new(t||r)};static \u0275dir=J({type:r,selectors:[["input","matDatepicker",""]],hostAttrs:[1,"mat-datepicker-input"],hostVars:6,hostBindings:function(t,a){t&1&&_("input",function(o){return a._onInput(o)})("change",function(){return a._onChange()})("blur",function(){return a._onBlur()})("keydown",function(o){return a._onKeydown(o)}),t&2&&(de("disabled",a.disabled),k("aria-haspopup",a._datepicker?"dialog":null)("aria-owns",a._ariaOwns())("min",a.min?a._dateAdapter.toIso8601(a.min):null)("max",a.max?a._dateAdapter.toIso8601(a.max):null)("data-mat-calendar",a._datepicker?a._datepicker.id:null))},inputs:{matDatepicker:"matDatepicker",min:"min",max:"max",dateFilter:[0,"matDatepickerFilter","dateFilter"]},exportAs:["matDatepickerInput"],features:[ue([tr,ar,{provide:En,useExisting:r}]),We]})}return r})(),nr=(()=>{class r{static \u0275fac=function(t){return new(t||r)};static \u0275dir=J({type:r,selectors:[["","matDatepickerToggleIcon",""]]})}return r})(),ya=(()=>{class r{_intl=s(Xe);_changeDetectorRef=s(R);_stateChanges=ie.EMPTY;datepicker;tabIndex=null;ariaLabel;get disabled(){return this._disabled===void 0&&this.datepicker?this.datepicker.disabled:!!this._disabled}set disabled(e){this._disabled=e}_disabled;disableRipple=!1;_customIcon;_button;constructor(){let e=s(new gt("tabindex"),{optional:!0}),t=Number(e);this.tabIndex=t||t===0?t:null}ngOnChanges(e){e.datepicker&&this._watchStateChanges()}ngOnDestroy(){this._stateChanges.unsubscribe()}ngAfterContentInit(){this._watchStateChanges()}_open(e){this.datepicker&&!this.disabled&&(this.datepicker.open(),e.stopPropagation())}_watchStateChanges(){let e=this.datepicker?this.datepicker.stateChanges:Oe(),t=this.datepicker&&this.datepicker.datepickerInput?this.datepicker.datepickerInput.stateChanges:Oe(),a=this.datepicker?dt(this.datepicker.openedStream,this.datepicker.closedStream):Oe();this._stateChanges.unsubscribe(),this._stateChanges=dt(this._intl.changes,e,t,a).subscribe(()=>this._changeDetectorRef.markForCheck())}static \u0275fac=function(t){return new(t||r)};static \u0275cmp=b({type:r,selectors:[["mat-datepicker-toggle"]],contentQueries:function(t,a,n){if(t&1&&La(n,nr,5),t&2){let o;F(o=O())&&(a._customIcon=o.first)}},viewQuery:function(t,a){if(t&1&&U(ji,5),t&2){let n;F(n=O())&&(a._button=n.first)}},hostAttrs:[1,"mat-datepicker-toggle"],hostVars:8,hostBindings:function(t,a){t&1&&_("click",function(o){return a._open(o)}),t&2&&(k("tabindex",null)("data-mat-calendar",a.datepicker?a.datepicker.id:null),M("mat-datepicker-toggle-active",a.datepicker&&a.datepicker.opened)("mat-accent",a.datepicker&&a.datepicker.color==="accent")("mat-warn",a.datepicker&&a.datepicker.color==="warn"))},inputs:{datepicker:[0,"for","datepicker"],tabIndex:"tabIndex",ariaLabel:[0,"aria-label","ariaLabel"],disabled:[2,"disabled","disabled",j],disableRipple:"disableRipple"},exportAs:["matDatepickerToggle"],features:[Z],ngContentSelectors:Gi,decls:4,vars:7,consts:[["button",""],["matIconButton","","type","button",3,"tabIndex","disabled","disableRipple"],["viewBox","0 0 24 24","width","24px","height","24px","fill","currentColor","focusable","false","aria-hidden","true",1,"mat-datepicker-toggle-default-icon"],["d","M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"]],template:function(t,a){t&1&&(ke(Ui),l(0,"button",1,0),A(2,$i,2,0,":svg:svg",2),Me(3),d()),t&2&&(v("tabIndex",a.disabled?-1:a.tabIndex)("disabled",a.disabled)("disableRipple",a.disableRipple),k("aria-haspopup",a.datepicker?"dialog":null)("aria-label",a.ariaLabel||a._intl.openCalendarLabel)("aria-expanded",a.datepicker?a.datepicker.opened:null),c(2),S(a._customIcon?-1:2))},dependencies:[tt],styles:[`.mat-datepicker-toggle {
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
`],encapsulation:2,changeDetection:0})}return r})();var ai=(()=>{class r{static \u0275fac=function(t){return new(t||r)};static \u0275mod=he({type:r});static \u0275inj=pe({providers:[Xe],imports:[me,oa,Wa,ra,ei,ya,Jn,Ne,nn]})}return r})();var rr=/^\d{4}-\d{2}-\d{2}(?:T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|(?:(?:\+|-)\d{2}:\d{2}))?)?$/,or=/^(\d?\d)[:.](\d?\d)(?:[:.](\d?\d))?\s*(AM|PM)?$/i;function Da(r,i){let e=Array(r);for(let t=0;t<r;t++)e[t]=i(t);return e}var sr=(()=>{class r extends B{_matDateLocale=s(da,{optional:!0});constructor(){super();let e=s(da,{optional:!0});e!==void 0&&(this._matDateLocale=e),super.setLocale(this._matDateLocale)}getYear(e){return e.getFullYear()}getMonth(e){return e.getMonth()}getDate(e){return e.getDate()}getDayOfWeek(e){return e.getDay()}getMonthNames(e){let t=new Intl.DateTimeFormat(this.locale,{month:e,timeZone:"utc"});return Da(12,a=>this._format(t,new Date(2017,a,1)))}getDateNames(){let e=new Intl.DateTimeFormat(this.locale,{day:"numeric",timeZone:"utc"});return Da(31,t=>this._format(e,new Date(2017,0,t+1)))}getDayOfWeekNames(e){let t=new Intl.DateTimeFormat(this.locale,{weekday:e,timeZone:"utc"});return Da(7,a=>this._format(t,new Date(2017,0,a+1)))}getYearName(e){let t=new Intl.DateTimeFormat(this.locale,{year:"numeric",timeZone:"utc"});return this._format(t,e)}getFirstDayOfWeek(){if(typeof Intl<"u"&&Intl.Locale){let e=new Intl.Locale(this.locale),t=(e.getWeekInfo?.()||e.weekInfo)?.firstDay??0;return t===7?0:t}return 0}getNumDaysInMonth(e){return this.getDate(this._createDateWithOverflow(this.getYear(e),this.getMonth(e)+1,0))}clone(e){return new Date(e.getTime())}createDate(e,t,a){let n=this._createDateWithOverflow(e,t,a);return n.getMonth()!=t,n}today(){return new Date}parse(e,t){return typeof e=="number"?new Date(e):e?new Date(Date.parse(e)):null}format(e,t){if(!this.isValid(e))throw Error("NativeDateAdapter: Cannot format invalid date.");let a=new Intl.DateTimeFormat(this.locale,ye(I({},t),{timeZone:"utc"}));return this._format(a,e)}addCalendarYears(e,t){return this.addCalendarMonths(e,t*12)}addCalendarMonths(e,t){let a=this._createDateWithOverflow(this.getYear(e),this.getMonth(e)+t,this.getDate(e));return this.getMonth(a)!=((this.getMonth(e)+t)%12+12)%12&&(a=this._createDateWithOverflow(this.getYear(a),this.getMonth(a),0)),a}addCalendarDays(e,t){return this._createDateWithOverflow(this.getYear(e),this.getMonth(e),this.getDate(e)+t)}toIso8601(e){return[e.getUTCFullYear(),this._2digit(e.getUTCMonth()+1),this._2digit(e.getUTCDate())].join("-")}deserialize(e){if(typeof e=="string"){if(!e)return null;if(rr.test(e)){let t=new Date(e);if(this.isValid(t))return t}}return super.deserialize(e)}isDateInstance(e){return e instanceof Date}isValid(e){return!isNaN(e.getTime())}invalid(){return new Date(NaN)}setTime(e,t,a,n){let o=this.clone(e);return o.setHours(t,a,n,0),o}getHours(e){return e.getHours()}getMinutes(e){return e.getMinutes()}getSeconds(e){return e.getSeconds()}parseTime(e,t){if(typeof e!="string")return e instanceof Date?new Date(e.getTime()):null;let a=e.trim();if(a.length===0)return null;let n=this._parseTimeString(a);if(n===null){let o=a.replace(/[^0-9:(AM|PM)]/gi,"").trim();o.length>0&&(n=this._parseTimeString(o))}return n||this.invalid()}addSeconds(e,t){return new Date(e.getTime()+t*1e3)}_createDateWithOverflow(e,t,a){let n=new Date;return n.setFullYear(e,t,a),n.setHours(0,0,0,0),n}_2digit(e){return("00"+e).slice(-2)}_format(e,t){let a=new Date;return a.setUTCFullYear(t.getFullYear(),t.getMonth(),t.getDate()),a.setUTCHours(t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds()),e.format(a)}_parseTimeString(e){let t=e.toUpperCase().match(or);if(t){let a=parseInt(t[1]),n=parseInt(t[2]),o=t[3]==null?void 0:parseInt(t[3]),m=t[4];if(a===12?a=m==="AM"?0:a:m==="PM"&&(a+=12),Ca(a,0,23)&&Ca(n,0,59)&&(o==null||Ca(o,0,59)))return this.setTime(this.today(),a,n,o||0)}return null}static \u0275fac=function(t){return new(t||r)};static \u0275prov=X({token:r,factory:r.\u0275fac})}return r})();function Ca(r,i,e){return!isNaN(r)&&r>=i&&r<=e}var lr={parse:{dateInput:null,timeInput:null},display:{dateInput:{year:"numeric",month:"numeric",day:"numeric"},timeInput:{hour:"numeric",minute:"numeric"},monthYearLabel:{year:"numeric",month:"short"},dateA11yLabel:{year:"numeric",month:"long",day:"numeric"},monthYearA11yLabel:{year:"numeric",month:"long"},timeOptionLabel:{hour:"numeric",minute:"numeric"}}};function ni(r=lr){return[{provide:B,useClass:sr},{provide:ve,useValue:r}]}function dr(r,i){if(r&1){let e=Y();l(0,"div",1)(1,"button",2),_("click",function(){C(e);let a=h();return w(a.action())}),p(2),d()()}if(r&2){let e=h();c(2),z(" ",e.data.action," ")}}var cr=["label"];function mr(r,i){}var pr=Math.pow(2,31)-1,Ie=class{_overlayRef;instance;containerInstance;_afterDismissed=new T;_afterOpened=new T;_onAction=new T;_durationTimeoutId;_dismissedByAction=!1;constructor(i,e){this._overlayRef=e,this.containerInstance=i,i._onExit.subscribe(()=>this._finishDismiss())}dismiss(){this._afterDismissed.closed||this.containerInstance.exit(),clearTimeout(this._durationTimeoutId)}dismissWithAction(){this._onAction.closed||(this._dismissedByAction=!0,this._onAction.next(),this._onAction.complete(),this.dismiss()),clearTimeout(this._durationTimeoutId)}closeWithAction(){this.dismissWithAction()}_dismissAfter(i){this._durationTimeoutId=setTimeout(()=>this.dismiss(),Math.min(i,pr))}_open(){this._afterOpened.closed||(this._afterOpened.next(),this._afterOpened.complete())}_finishDismiss(){this._overlayRef.dispose(),this._onAction.closed||this._onAction.complete(),this._afterDismissed.next({dismissedByAction:this._dismissedByAction}),this._afterDismissed.complete(),this._dismissedByAction=!1}afterDismissed(){return this._afterDismissed}afterOpened(){return this.containerInstance._onEnter}onAction(){return this._onAction}},jt=new L("MatSnackBarData"),qe=class{politeness="polite";announcementMessage="";viewContainerRef;duration=0;panelClass;direction;data=null;horizontalPosition="center";verticalPosition="bottom"},hr=(()=>{class r{static \u0275fac=function(t){return new(t||r)};static \u0275dir=J({type:r,selectors:[["","matSnackBarLabel",""]],hostAttrs:[1,"mat-mdc-snack-bar-label","mdc-snackbar__label"]})}return r})(),ur=(()=>{class r{static \u0275fac=function(t){return new(t||r)};static \u0275dir=J({type:r,selectors:[["","matSnackBarActions",""]],hostAttrs:[1,"mat-mdc-snack-bar-actions","mdc-snackbar__actions"]})}return r})(),_r=(()=>{class r{static \u0275fac=function(t){return new(t||r)};static \u0275dir=J({type:r,selectors:[["","matSnackBarAction",""]],hostAttrs:[1,"mat-mdc-snack-bar-action","mdc-snackbar__action"]})}return r})(),gr=(()=>{class r{snackBarRef=s(Ie);data=s(jt);constructor(){}action(){this.snackBarRef.dismissWithAction()}get hasAction(){return!!this.data.action}static \u0275fac=function(t){return new(t||r)};static \u0275cmp=b({type:r,selectors:[["simple-snack-bar"]],hostAttrs:[1,"mat-mdc-simple-snack-bar"],exportAs:["matSnackBar"],decls:3,vars:2,consts:[["matSnackBarLabel",""],["matSnackBarActions",""],["matButton","","matSnackBarAction","",3,"click"]],template:function(t,a){t&1&&(l(0,"div",0),p(1),d(),A(2,dr,3,1,"div",1)),t&2&&(c(),z(" ",a.data.message,`
`),c(),S(a.hasAction?2:-1))},dependencies:[ne,hr,ur,_r],styles:[`.mat-mdc-simple-snack-bar {
  display: flex;
}
.mat-mdc-simple-snack-bar .mat-mdc-snack-bar-label {
  max-height: 50vh;
  overflow: auto;
}
`],encapsulation:2,changeDetection:0})}return r})(),wa="_mat-snack-bar-enter",xa="_mat-snack-bar-exit",fr=(()=>{class r extends rn{_ngZone=s(se);_elementRef=s(H);_changeDetectorRef=s(R);_platform=s(Be);_animationsDisabled=ae();snackBarConfig=s(qe);_document=s(Ce);_trackedModals=new Set;_enterFallback;_exitFallback;_injector=s(q);_announceDelay=150;_announceTimeoutId;_destroyed=!1;_portalOutlet;_onAnnounce=new T;_onExit=new T;_onEnter=new T;_animationState="void";_live;_label;_role;_liveElementId=s(fe).getId("mat-snack-bar-container-live-");constructor(){super();let e=this.snackBarConfig;e.politeness==="assertive"&&!e.announcementMessage?this._live="assertive":e.politeness==="off"?this._live="off":this._live="polite",this._platform.FIREFOX&&(this._live==="polite"&&(this._role="status"),this._live==="assertive"&&(this._role="alert"))}attachComponentPortal(e){this._assertNotAttached();let t=this._portalOutlet.attachComponentPortal(e);return this._afterPortalAttached(),t}attachTemplatePortal(e){this._assertNotAttached();let t=this._portalOutlet.attachTemplatePortal(e);return this._afterPortalAttached(),t}attachDomPortal=e=>{this._assertNotAttached();let t=this._portalOutlet.attachDomPortal(e);return this._afterPortalAttached(),t};onAnimationEnd(e){e===xa?this._completeExit():e===wa&&(clearTimeout(this._enterFallback),this._ngZone.run(()=>{this._onEnter.next(),this._onEnter.complete()}))}enter(){this._destroyed||(this._animationState="visible",this._changeDetectorRef.markForCheck(),this._changeDetectorRef.detectChanges(),this._screenReaderAnnounce(),this._animationsDisabled?le(()=>{this._ngZone.run(()=>queueMicrotask(()=>this.onAnimationEnd(wa)))},{injector:this._injector}):(clearTimeout(this._enterFallback),this._enterFallback=setTimeout(()=>{this._elementRef.nativeElement.classList.add("mat-snack-bar-fallback-visible"),this.onAnimationEnd(wa)},200)))}exit(){return this._destroyed?Oe(void 0):(this._ngZone.run(()=>{this._animationState="hidden",this._changeDetectorRef.markForCheck(),this._elementRef.nativeElement.setAttribute("mat-exit",""),clearTimeout(this._announceTimeoutId),this._animationsDisabled?le(()=>{this._ngZone.run(()=>queueMicrotask(()=>this.onAnimationEnd(xa)))},{injector:this._injector}):(clearTimeout(this._exitFallback),this._exitFallback=setTimeout(()=>this.onAnimationEnd(xa),200))}),this._onExit)}ngOnDestroy(){this._destroyed=!0,this._clearFromModals(),this._completeExit()}_completeExit(){clearTimeout(this._exitFallback),queueMicrotask(()=>{this._onExit.next(),this._onExit.complete()})}_afterPortalAttached(){let e=this._elementRef.nativeElement,t=this.snackBarConfig.panelClass;t&&(Array.isArray(t)?t.forEach(o=>e.classList.add(o)):e.classList.add(t)),this._exposeToModals();let a=this._label.nativeElement,n="mdc-snackbar__label";a.classList.toggle(n,!a.querySelector(`.${n}`))}_exposeToModals(){let e=this._liveElementId,t=this._document.querySelectorAll('body > .cdk-overlay-container [aria-modal="true"]');for(let a=0;a<t.length;a++){let n=t[a],o=n.getAttribute("aria-owns");this._trackedModals.add(n),o?o.indexOf(e)===-1&&n.setAttribute("aria-owns",o+" "+e):n.setAttribute("aria-owns",e)}}_clearFromModals(){this._trackedModals.forEach(e=>{let t=e.getAttribute("aria-owns");if(t){let a=t.replace(this._liveElementId,"").trim();a.length>0?e.setAttribute("aria-owns",a):e.removeAttribute("aria-owns")}}),this._trackedModals.clear()}_assertNotAttached(){this._portalOutlet.hasAttached()}_screenReaderAnnounce(){this._announceTimeoutId||this._ngZone.runOutsideAngular(()=>{this._announceTimeoutId=setTimeout(()=>{if(this._destroyed)return;let e=this._elementRef.nativeElement,t=e.querySelector("[aria-hidden]"),a=e.querySelector("[aria-live]");if(t&&a){let n=null;this._platform.isBrowser&&document.activeElement instanceof HTMLElement&&t.contains(document.activeElement)&&(n=document.activeElement),t.removeAttribute("aria-hidden"),a.appendChild(t),n?.focus(),this._onAnnounce.next(),this._onAnnounce.complete()}},this._announceDelay)})}static \u0275fac=function(t){return new(t||r)};static \u0275cmp=b({type:r,selectors:[["mat-snack-bar-container"]],viewQuery:function(t,a){if(t&1&&U(He,7)(cr,7),t&2){let n;F(n=O())&&(a._portalOutlet=n.first),F(n=O())&&(a._label=n.first)}},hostAttrs:[1,"mdc-snackbar","mat-mdc-snack-bar-container"],hostVars:6,hostBindings:function(t,a){t&1&&_("animationend",function(o){return a.onAnimationEnd(o.animationName)})("animationcancel",function(o){return a.onAnimationEnd(o.animationName)}),t&2&&M("mat-snack-bar-container-enter",a._animationState==="visible")("mat-snack-bar-container-exit",a._animationState==="hidden")("mat-snack-bar-container-animations-enabled",!a._animationsDisabled)},features:[We],decls:6,vars:3,consts:[["label",""],[1,"mdc-snackbar__surface","mat-mdc-snackbar-surface"],[1,"mat-mdc-snack-bar-label"],["aria-hidden","true"],["cdkPortalOutlet",""]],template:function(t,a){t&1&&(l(0,"div",1)(1,"div",2,0)(3,"div",3),Qe(4,mr,0,0,"ng-template",4),d(),x(5,"div"),d()()),t&2&&(c(5),k("aria-live",a._live)("role",a._role)("id",a._liveElementId))},dependencies:[He],styles:[`@keyframes _mat-snack-bar-enter {
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
`],encapsulation:2})}return r})(),br=new L("mat-snack-bar-default-options",{providedIn:"root",factory:()=>new qe}),ii=(()=>{class r{_live=s(Ka);_injector=s(q);_breakpointObserver=s(Xa);_parentSnackBar=s(r,{optional:!0,skipSelf:!0});_defaultConfig=s(br);_animationsDisabled=ae();_snackBarRefAtThisLevel=null;simpleSnackBarComponent=gr;snackBarContainerComponent=fr;handsetCssClass="mat-mdc-snack-bar-handset";get _openedSnackBarRef(){let e=this._parentSnackBar;return e?e._openedSnackBarRef:this._snackBarRefAtThisLevel}set _openedSnackBarRef(e){this._parentSnackBar?this._parentSnackBar._openedSnackBarRef=e:this._snackBarRefAtThisLevel=e}constructor(){}openFromComponent(e,t){return this._attach(e,t)}openFromTemplate(e,t){return this._attach(e,t)}open(e,t="",a){let n=I(I({},this._defaultConfig),a);return n.data={message:e,action:t},n.announcementMessage===e&&(n.announcementMessage=void 0),this.openFromComponent(this.simpleSnackBarComponent,n)}dismiss(){this._openedSnackBarRef&&this._openedSnackBarRef.dismiss()}ngOnDestroy(){this._snackBarRefAtThisLevel&&this._snackBarRefAtThisLevel.dismiss()}_attachSnackBarContainer(e,t){let a=t&&t.viewContainerRef&&t.viewContainerRef.injector,n=q.create({parent:a||this._injector,providers:[{provide:qe,useValue:t}]}),o=new be(this.snackBarContainerComponent,t.viewContainerRef,n),m=e.attach(o);return m.instance.snackBarConfig=t,m.instance}_attach(e,t){let a=I(I(I({},new qe),this._defaultConfig),t),n=this._createOverlay(a),o=this._attachSnackBarContainer(n,a),m=new Ie(o,n);if(e instanceof ea){let u=new ia(e,null,{$implicit:a.data,snackBarRef:m});m.instance=o.attachTemplatePortal(u)}else{let u=this._createInjector(a,m),f=new be(e,void 0,u),E=o.attachComponentPortal(f);m.instance=E.instance}return this._breakpointObserver.observe(Za.HandsetPortrait).pipe(re(n.detachments())).subscribe(u=>{n.overlayElement.classList.toggle(this.handsetCssClass,u.matches)}),a.announcementMessage&&o._onAnnounce.subscribe(()=>{this._live.announce(a.announcementMessage,a.politeness)}),this._animateSnackBar(m,a),this._openedSnackBarRef=m,this._openedSnackBarRef}_animateSnackBar(e,t){e.afterDismissed().subscribe(()=>{this._openedSnackBarRef==e&&(this._openedSnackBarRef=null),t.announcementMessage&&this._live.clear()}),t.duration&&t.duration>0&&e.afterOpened().subscribe(()=>e._dismissAfter(t.duration)),this._openedSnackBarRef?(this._openedSnackBarRef.afterDismissed().subscribe(()=>{e.containerInstance.enter()}),this._openedSnackBarRef.dismiss()):e.containerInstance.enter()}_createOverlay(e){let t=new Ct;t.direction=e.direction;let a=xt(this._injector),n=e.direction==="rtl",o=e.horizontalPosition==="left"||e.horizontalPosition==="start"&&!n||e.horizontalPosition==="end"&&n,m=!o&&e.horizontalPosition!=="center";return o?a.left("0"):m?a.right("0"):a.centerHorizontally(),e.verticalPosition==="top"?a.top("0"):a.bottom("0"),t.positionStrategy=a,t.disableAnimations=this._animationsDisabled,Ye(this._injector,t)}_createInjector(e,t){let a=e&&e.viewContainerRef&&e.viewContainerRef.injector;return q.create({parent:a||this._injector,providers:[{provide:Ie,useValue:t},{provide:jt,useValue:e.data}]})}static \u0275fac=function(t){return new(t||r)};static \u0275prov=X({token:r,factory:r.\u0275fac,providedIn:"root"})}return r})();var vr={info:"info",warning:"warning",error:"error"},Ut=class r{data=s(jt);snackBarRef=s(Ie);icon=vr[this.data.severity];close(){this.snackBarRef.dismiss()}static \u0275fac=function(e){return new(e||r)};static \u0275cmp=b({type:r,selectors:[["app-toast-message"]],decls:8,vars:4,consts:[[1,"toast-content"],[1,"toast-icon"],[1,"toast-message"],["type","button","aria-label","Dismiss",1,"toast-close",3,"click"]],template:function(e,t){e&1&&(l(0,"div",0)(1,"mat-icon",1),p(2),d(),l(3,"span",2),p(4),d(),l(5,"button",3),_("click",function(){return t.close()}),l(6,"mat-icon"),p(7,"close"),d()()()),e&2&&(K("toast-"+t.data.severity),c(2),D(t.icon),c(2),D(t.data.message))},dependencies:[ge,_e],styles:[".toast-content[_ngcontent-%COMP%]{display:flex;align-items:center;gap:10px;padding:10px 12px;border-radius:8px;color:#fff;min-width:260px;max-width:420px;box-shadow:0 4px 12px #0003}.toast-icon[_ngcontent-%COMP%]{flex:0 0 auto}.toast-message[_ngcontent-%COMP%]{flex:1 1 auto;font-size:14px;line-height:1.4;word-break:break-word}.toast-close[_ngcontent-%COMP%]{flex:0 0 auto;background:none;border:none;padding:4px;margin:-4px -4px -4px 0;cursor:pointer;display:flex;align-items:center;color:inherit;opacity:.85}.toast-close[_ngcontent-%COMP%]:hover{opacity:1}.toast-close[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:18px;width:18px;height:18px;line-height:18px}.toast-info[_ngcontent-%COMP%]{background-color:#1976d2}.toast-warning[_ngcontent-%COMP%]{background-color:#f57c00}.toast-error[_ngcontent-%COMP%]{background-color:#c62828}"]})};var yr=2500,Gt=class r{snackBar=s(ii);info(i){this.show(i,"info")}warning(i){this.show(i,"warning")}error(i){this.show(i,"error")}show(i,e="info"){this.snackBar.openFromComponent(Ut,{data:{message:i,severity:e},duration:yr,horizontalPosition:"end",verticalPosition:"top",panelClass:["app-toast-panel",`app-toast-panel-${e}`]})}static \u0275fac=function(e){return new(e||r)};static \u0275prov=X({token:r,factory:r.\u0275fac,providedIn:"root"})};var ri={doc:{path:"M15.5,17H14L12,9.5L10,17H8.5L6.1,7H7.8L9.34,14.5L11.3,7H12.7L14.67,14.5L16.2,7H17.9M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3Z",color:"#2b579a"},docx:{path:"M15.5,17H14L12,9.5L10,17H8.5L6.1,7H7.8L9.34,14.5L11.3,7H12.7L14.67,14.5L16.2,7H17.9M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3Z",color:"#2b579a"},xlsx:{path:"M16.2,17H14.2L12,13.2L9.8,17H7.8L11,12L7.8,7H9.8L12,10.8L14.2,7H16.2L13,12M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3Z",color:"#217346"},xls:{path:"M16.2,17H14.2L12,13.2L9.8,17H7.8L11,12L7.8,7H9.8L12,10.8L14.2,7H16.2L13,12M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3Z",color:"#217346"},pdf:{path:"M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3M9.5 11.5C9.5 12.3 8.8 13 8 13H7V15H5.5V9H8C8.8 9 9.5 9.7 9.5 10.5V11.5M14.5 13.5C14.5 14.3 13.8 15 13 15H10.5V9H13C13.8 9 14.5 9.7 14.5 10.5V13.5M18.5 10.5H17V11.5H18.5V13H17V15H15.5V9H18.5V10.5M12 10.5H13V13.5H12V10.5M7 10.5H8V11.5H7V10.5Z",color:"#c62828"},ppt:{path:"M9.8,13.4H12.3C13.8,13.4 14.46,13.12 15.1,12.58C15.74,12.03 16,11.25 16,10.23C16,9.26 15.75,8.5 15.1,7.88C14.45,7.29 13.83,7 12.3,7H8V17H9.8V13.4M19,3A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5C3,3.89 3.9,3 5,3H19M9.8,12V8.4H12.1C12.76,8.4 13.27,8.65 13.6,9C13.93,9.35 14.1,9.72 14.1,10.24C14.1,10.8 13.92,11.19 13.6,11.5C13.28,11.81 12.9,12 12.22,12H9.8Z",color:"#d24726"},pptx:{path:"M9.8,13.4H12.3C13.8,13.4 14.46,13.12 15.1,12.58C15.74,12.03 16,11.25 16,10.23C16,9.26 15.75,8.5 15.1,7.88C14.45,7.29 13.83,7 12.3,7H8V17H9.8V13.4M19,3A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5C3,3.89 3.9,3 5,3H19M9.8,12V8.4H12.1C12.76,8.4 13.27,8.65 13.6,9C13.93,9.35 14.1,9.72 14.1,10.24C14.1,10.8 13.92,11.19 13.6,11.5C13.28,11.81 12.9,12 12.22,12H9.8Z",color:"#d24726"},mpp:{path:"M13,9H18.5L13,3.5V9M6,2H14L20,8V20A2,2 0 0,1 18,22H6C4.89,22 4,21.1 4,20V4C4,2.89 4.89,2 6,2M7,20H9V14H7V20M11,20H13V12H11V20M15,20H17V16H15V20Z",color:"#31855F"}};function $t(r){return ri[r]??null}var Aa=new Set(Object.keys(ri));var Xt=class{bytes;view;sectorSize;miniSectorSize;headerRegionSize;miniStreamCutoff;firstDirSector;firstMiniFatSector;numMiniFatSectors;firstDifatSector;numFatSectors;difat;fat=[];miniFat=[];directory=[];miniStreamData=new Uint8Array(0);constructor(i){this.bytes=new Uint8Array(i),this.view=new DataView(i),this.parseHeader(),this.buildFat(),this.buildDirectory(),this.buildMiniFat(),this.buildMiniStream()}getAllEntries(){return this.directory.filter(i=>i.type!==0)}getRoot(){return this.directory[0]}getChildren(i){let e=[],t=a=>{if(a===-1)return;let n=this.directory[a];n&&(t(n.leftSibling),e.push(n),t(n.rightSibling))};return t(i.child),e}readStream(i){if(i.type!==2)throw new Error(`CFB directory entry "${i.name}" is not a stream`);return i.size===0?new Uint8Array(0):i.size<this.miniStreamCutoff?this.readFromMiniSectors(i.startSector,i.size):this.readFromRegularSectors(i.startSector,i.size)}parseHeader(){let i=[208,207,17,224,161,177,26,225];for(let a=0;a<8;a++)if(this.bytes[a]!==i[a])throw new Error("Not a valid .msg file: missing Compound File Binary signature");let e=this.view.getUint16(30,!0);this.sectorSize=1<<e;let t=this.view.getUint16(32,!0);this.miniSectorSize=1<<t,this.headerRegionSize=Math.max(512,this.sectorSize),this.numFatSectors=this.view.getUint32(44,!0),this.firstDirSector=this.view.getUint32(48,!0),this.miniStreamCutoff=this.view.getUint32(56,!0),this.firstMiniFatSector=this.view.getUint32(60,!0),this.numMiniFatSectors=this.view.getUint32(64,!0),this.firstDifatSector=this.view.getUint32(68,!0),this.difat=[];for(let a=0;a<109;a++)this.difat.push(this.view.getUint32(76+a*4,!0))}sectorOffset(i){return this.headerRegionSize+i*this.sectorSize}readSector(i){let e=this.sectorOffset(i);return this.bytes.slice(e,e+this.sectorSize)}buildFat(){let i=[];for(let a=0;a<109&&i.length<this.numFatSectors;a++){let n=this.difat[a];n!==4294967295&&i.push(n)}let e=this.firstDifatSector,t=this.sectorSize/4;for(;e!==4294967294&&e!==4294967295&&i.length<this.numFatSectors;){let a=this.readSector(e),n=new DataView(a.buffer,a.byteOffset,a.byteLength);for(let o=0;o<t-1&&i.length<this.numFatSectors;o++){let m=n.getUint32(o*4,!0);m!==4294967295&&i.push(m)}e=n.getUint32((t-1)*4,!0)}this.fat=[];for(let a of i){let n=this.readSector(a),o=new DataView(n.buffer,n.byteOffset,n.byteLength);for(let m=0;m<t;m++)this.fat.push(o.getUint32(m*4,!0))}}getChain(i,e){let t=[],a=i,n=0;for(;a!==4294967294&&a!==4294967295;)if(t.push(a),a=e[a],++n>2e6)throw new Error("Sector chain exceeded a sane length - file may be corrupt");return t}readFromRegularSectors(i,e){let t=this.getChain(i,this.fat),a=new Uint8Array(e),n=0;for(let o of t){let m=Math.min(this.sectorSize,e-n);if(m<=0)break;a.set(this.readSector(o).subarray(0,m),n),n+=m}return a}buildDirectory(){let i=this.getChain(this.firstDirSector,this.fat),e=this.sectorSize/128;this.directory=[];let t=0;for(let a of i){let n=this.readSector(a),o=new DataView(n.buffer,n.byteOffset,n.byteLength);for(let m=0;m<e;m++){let u=m*128,f=o.getUint16(u+64,!0),E="";if(f>2){let Zt=n.subarray(u,u+f-2);E=new TextDecoder("utf-16le").decode(Zt)}let oe=n[u+66],Te=o.getInt32(u+68,!0),Ve=o.getInt32(u+72,!0),Pe=o.getInt32(u+76,!0),st=o.getUint32(u+116,!0),lt=o.getUint32(u+120,!0),Fe=o.getUint32(u+124,!0)*4294967296+lt;this.directory.push({index:t,name:E,type:oe,leftSibling:Te,rightSibling:Ve,child:Pe,startSector:st,size:Fe}),t++}}}buildMiniFat(){if(this.miniFat=[],this.firstMiniFatSector===4294967294||this.numMiniFatSectors===0)return;let i=this.getChain(this.firstMiniFatSector,this.fat),e=this.sectorSize/4;for(let t of i){let a=this.readSector(t),n=new DataView(a.buffer,a.byteOffset,a.byteLength);for(let o=0;o<e;o++)this.miniFat.push(n.getUint32(o*4,!0))}}buildMiniStream(){let i=this.getRoot();if(!i||i.size===0){this.miniStreamData=new Uint8Array(0);return}this.miniStreamData=this.readFromRegularSectors(i.startSector,i.size)}readFromMiniSectors(i,e){let t=new Uint8Array(e),a=i,n=0,o=0;for(;a!==4294967294&&a!==4294967295&&n<e;){let m=a*this.miniSectorSize,u=Math.min(this.miniSectorSize,e-n);if(t.set(this.miniStreamData.subarray(m,m+u),n),n+=u,a=this.miniFat[a],++o>2e6)throw new Error("Mini sector chain exceeded a sane length - file may be corrupt")}return t}};var Dr=55,Cr=3098,wr=3103,xr=23809,kr=57,Mr=3590,Ar=4096,Sr=3093,Er=12289,Ir=12291,Tr=14846,Vr=14087,Pr=14084,Fr=14081,Or=14085,Rr=3,Lr=64,Nr=31,Br=30,Hr=258,Yr=32,zr=8,jr=8,Ur=1,Gr=2,$r={0:"NO_ATTACHMENT",1:"ATTACH_BY_VALUE",2:"ATTACH_BY_REFERENCE",3:"ATTACH_BY_REF_RESOLVE",4:"ATTACH_BY_REF_ONLY",5:"ATTACH_EMBEDDED_MSG",6:"ATTACH_OLE"},Xr=/^__recip_version1\.0_#[0-9A-Fa-f]{8}$/,qr=/^__attach_version1\.0_#[0-9A-Fa-f]{8}$/,qt=class r{logger=s(Pt);async parse(i){try{let e=await i.arrayBuffer(),t=new Xt(e),a=t.getRoot(),n=t.getChildren(a),o=this.readString(t,n,Dr)??"",m=this.cleanDisplayName(this.readString(t,n,Cr)),u=this.readString(t,n,xr)??this.readString(t,n,wr)??"",f=this.normalizeBody(this.readString(t,n,Ar)??""),E=this.readPropertiesStream(t,n,Yr),oe=this.readSysTimeIso(E,kr)??this.readSysTimeIso(E,Mr),Te=[],Ve=[];for(let V of n){if(V.type!==1||!Xr.test(V.name))continue;let Fe=t.getChildren(V),Zt=this.readPropertiesStream(t,Fe,zr),Sa=this.readLong(Zt,Sr),Ea={name:this.cleanDisplayName(this.readString(t,Fe,Er)),email:this.readString(t,Fe,Tr)??this.readString(t,Fe,Ir)??""};Sa===Ur?Te.push(Ea):Sa===Gr&&Ve.push(Ea)}let Pe=this.readAttachments(t,n);Pe.length>0&&this.logger.debugLog(`FileParserMsg: "${i.name}" has ${Pe.length} attachment(s)`,Pe.map(V=>({fileName:V.fileName,extension:V.extension,sizeBytes:V.bytes?V.bytes.length:null,attachMethod:V.attachMethod})));let st=Pe.filter(V=>V.bytes!==null).map(V=>({fileName:V.fileName,extension:V.extension,bytes:V.bytes})),lt={subject:o,from:{name:m,email:u},to:Te,cc:Ve,date:oe,body:f,attachments:st};return this.logger.debugLog(`FileParserMsg: parsed "${i.name}"`,ye(I({},lt),{attachments:st.map(V=>V.fileName)})),lt}catch(e){return this.logger.debugLog(`FileParserMsg: failed to parse "${i.name}"`,e),null}}readAttachments(i,e){let t=[];for(let a of e){if(a.type!==1||!qr.test(a.name))continue;let n=i.getChildren(a),o=this.readPropertiesStream(i,n,jr),m=this.readLong(o,Or),u=this.readString(i,n,Vr)??this.readString(i,n,Pr)??"(unnamed attachment)",f=this.readBinary(i,n,Fr);t.push({fileName:u,extension:this.extractExtension(u),bytes:f,attachMethod:m!==null?$r[m]??`UNKNOWN(${m})`:"UNKNOWN"})}return t}extractExtension(i){let e=i.lastIndexOf(".");return e>=0?i.slice(e+1).toLowerCase():""}readBinary(i,e,t){let n=`__substg1.0_${t.toString(16).padStart(4,"0").toUpperCase()}${Hr.toString(16).padStart(4,"0").toUpperCase()}`,o=e.find(m=>m.type===2&&m.name===n);return o?i.readStream(o):null}cleanDisplayName(i){return i?i.replace(/\s*<[^>]*>\s*$/,"").trim():""}normalizeBody(i){let e=`\r
\r
 \r
\r
`,t=`\r
\r
`,a=i;for(;a.includes(e);)a=a.split(e).join(t);return a}readString(i,e,t){let a=t.toString(16).padStart(4,"0").toUpperCase(),n=`__substg1.0_${a}${Nr.toString(16).padStart(4,"0").toUpperCase()}`,o=e.find(f=>f.type===2&&f.name===n);if(o){let f=i.readStream(o);return new TextDecoder("utf-16le").decode(f).replace(/\u0000+$/,"")}let m=`__substg1.0_${a}${Br.toString(16).padStart(4,"0").toUpperCase()}`,u=e.find(f=>f.type===2&&f.name===m);if(u){let f=i.readStream(u);return new TextDecoder("windows-1252").decode(f).replace(/\u0000+$/,"")}return null}readPropertiesStream(i,e,t){let a=new Map,n=e.find(f=>f.type===2&&f.name==="__properties_version1.0");if(!n)return a;let o=i.readStream(n),m=new DataView(o.buffer,o.byteOffset,o.byteLength),u=Math.floor((o.length-t)/16);for(let f=0;f<u;f++){let E=t+f*16,oe=m.getUint16(E,!0),Te=m.getUint16(E+2,!0),Ve=o.slice(E+8,E+16);a.set(Te,{propType:oe,value:Ve})}return a}readLong(i,e){let t=i.get(e);return!t||t.propType!==Rr?null:new DataView(t.value.buffer,t.value.byteOffset,t.value.byteLength).getInt32(0,!0)}readSysTimeIso(i,e){let t=i.get(e);if(!t||t.propType!==Lr)return null;let a=new DataView(t.value.buffer,t.value.byteOffset,t.value.byteLength),n=a.getUint32(0,!0),o=a.getUint32(4,!0),m=BigInt(o)<<32n|BigInt(n),f=Number((m-116444736000000000n)/10000n);return new Date(f).toISOString()}static \u0275fac=function(e){return new(e||r)};static \u0275prov=X({token:r,factory:r.\u0275fac,providedIn:"root"})};var Wr=(r,i)=>i.FileName;function Qr(r,i){r&1&&(l(0,"div",2),p(1,"Nothing to show for this email."),d())}function Zr(r,i){if(r&1&&(l(0,"div",6)(1,"span",7),p(2,"To"),d(),l(3,"span",8),p(4),d()()),r&2){let e=h(2);c(4),D(e.formatRecipients(e.data.to))}}function Jr(r,i){if(r&1&&(l(0,"div",6)(1,"span",7),p(2,"Cc"),d(),l(3,"span",8),p(4),d()()),r&2){let e=h(2);c(4),D(e.formatRecipients(e.data.cc))}}function eo(r,i){if(r&1&&(l(0,"div",6)(1,"span",7),p(2,"Date"),d(),l(3,"span",8),p(4),Le(5,"date"),d()()),r&2){let e=h(2);c(4),D(Je(5,1,e.data.date,"dd MMM y, HH:mm"))}}function to(r,i){if(r&1){let e=Y();l(0,"div",14),_("click",function(){let a=C(e).$implicit,n=h(3);return w(n.openDocument(a))}),Q(),l(1,"svg",15),x(2,"path"),d(),De(),l(3,"span",16),p(4),d()()}if(r&2){let e,t,a=i.$implicit,n=h(3);c(2),k("d",(e=n.getFileTypeIcon(n.getDocExtension(a.FileName)))==null?null:e.path)("fill",(t=n.getFileTypeIcon(n.getDocExtension(a.FileName)))==null?null:t.color),c(2),D(a.OriginalName)}}function ao(r,i){if(r&1&&(l(0,"div",9)(1,"div",11),p(2,"Attachments"),d(),l(3,"div",12),ee(4,to,5,3,"div",13,Wr),d()()),r&2){let e=h(2);c(4),te(e.data.Docs)}}function no(r,i){if(r&1&&(l(0,"div",5)(1,"div",6)(2,"span",7),p(3,"From"),d(),l(4,"span",8),p(5),d()(),A(6,Zr,5,1,"div",6),A(7,Jr,5,1,"div",6),A(8,eo,6,4,"div",6),d(),A(9,ao,6,0,"div",9),l(10,"div",10),p(11),d()),r&2){let e=h();c(5),Ze("",e.data.from.name," <",e.data.from.email,">"),c(),S(e.data.to.length>0?6:-1),c(),S(e.data.cc.length>0?7:-1),c(),S(e.data.date?8:-1),c(),S(e.data.Docs&&e.data.Docs.length>0?9:-1),c(2),D(e.data.body)}}var Kt=class r{data=s(kt);dataService=s(Ft);formatRecipients(i){return i.map(e=>e.name||e.email).join("; ")}getDocExtension(i){let e=i.toLowerCase().split(".");return e.length>1?e[e.length-1]:""}getFileTypeIcon(i){return $t(i)}openDocument(i){let e=this.dataService.getDocumentViewUrl(i.FileName,i.SourceDocId);window.open(e,"_blank","noopener,noreferrer")}static \u0275fac=function(e){return new(e||r)};static \u0275cmp=b({type:r,selectors:[["app-email-dialog"]],decls:12,vars:2,consts:[["mat-dialog-title",""],[1,"email-dialog-content"],[1,"no-content"],["align","end"],["mat-button","","mat-dialog-close",""],[1,"email-meta"],[1,"email-meta-row"],[1,"email-meta-label"],[1,"email-meta-value"],[1,"email-docs"],[1,"email-body"],[1,"email-docs-label"],[1,"email-docs-list"],[1,"email-doc-chip"],[1,"email-doc-chip",3,"click"],["viewBox","0 0 24 24",1,"doc-type-icon"],[1,"email-doc-name"]],template:function(e,t){e&1&&(l(0,"h2",0)(1,"mat-icon"),p(2,"mail"),d(),p(3),d(),l(4,"mat-dialog-content",1),A(5,Qr,2,0,"div",2)(6,no,12,7),d(),l(7,"mat-dialog-actions",3)(8,"button",4)(9,"mat-icon"),p(10,"close"),d(),p(11," Close "),d()()),e&2&&(c(3),z(" ",t.data.subject||"(no subject)",`
`),c(2),S(!t.data.body&&t.data.to.length===0&&t.data.cc.length===0&&!t.data.date?5:6))},dependencies:[Et,cn,Mt,St,At,me,ne,ge,_e,ft],styles:["h2[mat-dialog-title][_ngcontent-%COMP%]{display:flex;align-items:center;gap:12px}mat-dialog-content[_ngcontent-%COMP%]{min-height:300px;max-height:60vh}.no-content[_ngcontent-%COMP%]{text-align:center;color:var(--mat-sys-on-surface-variant);padding:48px 16px;font-size:16px}.email-meta[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:1px;margin-bottom:8px}.email-meta-row[_ngcontent-%COMP%]{display:flex;gap:12px;padding:12px;background-color:var(--mat-sys-surface-container-low);font-size:13px;border-radius:4px}.email-meta-label[_ngcontent-%COMP%]{flex:0 0 40px;color:var(--mat-sys-primary);font-weight:600}.email-meta-value[_ngcontent-%COMP%]{color:var(--mat-sys-on-surface);word-break:break-word}.email-body[_ngcontent-%COMP%]{margin:8px 0 0;padding:12px;background-color:var(--mat-sys-surface-container);border-radius:4px;font-size:13px;line-height:1.5;color:var(--mat-sys-on-surface-variant);border-left:3px solid var(--mat-sys-primary);white-space:pre-wrap;word-break:break-word}.email-docs[_ngcontent-%COMP%]{margin-top:16px}.email-docs-label[_ngcontent-%COMP%]{font-size:12px;font-weight:600;color:var(--mat-sys-on-surface-variant);text-transform:uppercase;letter-spacing:.04em;margin-bottom:6px}.email-docs-list[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:4px}.email-doc-chip[_ngcontent-%COMP%]{display:flex;align-items:center;gap:8px;padding:8px 10px;border-radius:6px;background-color:var(--mat-sys-surface-container-low);border:1px solid var(--mat-sys-outline-variant, #d5d8dc);cursor:pointer;transition:background-color .15s ease,border-color .15s ease}.email-doc-chip[_ngcontent-%COMP%]:hover{background-color:var(--mat-sys-surface-container);border-color:var(--mat-sys-primary)}.email-doc-chip[_ngcontent-%COMP%]   .doc-type-icon[_ngcontent-%COMP%]{width:18px;height:18px;flex:0 0 auto}.email-doc-name[_ngcontent-%COMP%]{font-size:13px;color:var(--mat-sys-on-surface);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}mat-dialog-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{display:flex;align-items:center;gap:8px}"]})};var Wt=class r{data=s(kt);dialogRef=s(ln);confirm(){this.dialogRef.close(!0)}cancel(){this.dialogRef.close(!1)}static \u0275fac=function(e){return new(e||r)};static \u0275cmp=b({type:r,selectors:[["app-confirm-dialog"]],decls:16,vars:5,consts:[["mat-dialog-title",""],[1,"confirm-message"],["align","end"],["mat-button","",3,"click"],["mat-raised-button","","color","warn",3,"click"]],template:function(e,t){e&1&&(l(0,"h2",0)(1,"mat-icon"),p(2),d(),p(3),d(),l(4,"mat-dialog-content")(5,"p",1),p(6),d()(),l(7,"mat-dialog-actions",2)(8,"button",3),_("click",function(){return t.cancel()}),l(9,"mat-icon"),p(10,"close"),d(),p(11),d(),l(12,"button",4),_("click",function(){return t.confirm()}),l(13,"mat-icon"),p(14,"delete"),d(),p(15),d()()),e&2&&(c(2),D(t.data.icon||"warning"),c(),z(" ",t.data.title,`
`),c(3),D(t.data.message),c(5),z(" ",t.data.cancelText||"Cancel"," "),c(4),z(" ",t.data.confirmText||"Delete"," "))},dependencies:[Et,Mt,St,At,me,ne,ge,_e],styles:["h2[mat-dialog-title][_ngcontent-%COMP%]{display:flex;align-items:center;gap:12px}.confirm-message[_ngcontent-%COMP%]{margin:0;font-size:14px;color:var(--mat-sys-on-surface-variant)}mat-dialog-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{display:flex;align-items:center;gap:8px}"]})};var si=/(https?:\/\/[^\s<>"']+)/g,Qt=class r{transform(i){if(!i)return"";let e="",t=0,a;for(si.lastIndex=0;(a=si.exec(i))!==null;){let n=a[0],o=a.index;e+=this.escapeHtml(i.slice(t,o)),e+=this.buildLink(n),t=o+n.length}return e+=this.escapeHtml(i.slice(t)),e}buildLink(i){let e=this.extractDomain(i),t=this.escapeHtml(i),a=this.escapeHtml(e);return`<a href="${t}" target="_blank" rel="noopener noreferrer">${a}</a>`}extractDomain(i){try{return new URL(i).hostname}catch{return i}}escapeHtml(i){return i.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}static \u0275fac=function(e){return new(e||r)};static \u0275pipe=Ra({name:"linkify",type:r,pure:!0})};var io=["commentsList"],ro=()=>[],oo=(r,i)=>i.Id,di=(r,i)=>i.Gnid,so=(r,i)=>i.FileName;function lo(r,i){r&1&&x(0,"mat-progress-bar",3)}function co(r,i){if(r&1){let e=Y();l(0,"button",36),_("click",function(){C(e);let a=h();return w(a.assignToMe())}),l(1,"mat-icon"),p(2,"person_add"),d()()}}function mo(r,i){if(r&1&&(l(0,"mat-option",24),p(1),d()),r&2){let e=i.$implicit;v("value",e.Id),c(),D(e.Title)}}function po(r,i){if(r&1){let e=Y();l(0,"div",45),_("click",function(){let a=C(e).$implicit,n=h(3);return w(n.openEmailDialog(a))}),l(1,"mat-icon"),p(2,"mail"),d(),l(3,"span",46),p(4),Le(5,"date"),d(),l(6,"span",47),p(7),d()()}if(r&2){let e=i.$implicit;c(4),D(Je(5,2,e.date,"dd MMM y")),c(3),D(e.subject)}}function ho(r,i){if(r&1){let e=Y();l(0,"div",45),_("click",function(){let a=C(e).$implicit,n=h(3);return w(n.onDocumentClick(a))}),Q(),l(1,"svg",48),x(2,"path"),d(),De(),l(3,"span",47),p(4),d()()}if(r&2){let e,t,a=i.$implicit,n=h(3);c(2),k("d",(e=n.getFileTypeIcon(n.getDocExtension(a.FileName)))==null?null:e.path)("fill",(t=n.getFileTypeIcon(n.getDocExtension(a.FileName)))==null?null:t.color),c(2),D(a.OriginalName)}}function uo(r,i){if(r&1&&(l(0,"div",43),ee(1,po,8,5,"div",44,di),ee(3,ho,5,3,"div",44,so),d()),r&2){let e=h().$implicit,t=h();c(),te(t.getEmailsForComment(e.Gnid)),c(2),te(e.Docs??Ha(0,ro))}}function _o(r,i){if(r&1){let e=Y();l(0,"div",37),_("dragover",function(a){let n=C(e).$implicit,o=h();return w(o.onCommentDragOver(a,n))})("dragleave",function(){let a=C(e).$implicit,n=h();return w(n.onCommentDragLeave(a))})("drop",function(a){let n=C(e).$implicit,o=h();return w(o.onCommentDrop(a,n))}),l(1,"div",38)(2,"span",39),p(3),d(),l(4,"button",40),_("click",function(){let a=C(e).$implicit,n=h();return w(n.deleteComment(a))}),l(5,"mat-icon"),p(6,"delete"),d()()(),x(7,"p",41),Le(8,"linkify"),l(9,"span",42),p(10),Le(11,"date"),d(),A(12,uo,5,1,"div",43),d()}if(r&2){let e=i.$implicit,t=h();M("drag-over",t.dragOverCommentGnid()===e.Gnid),c(3),D(e.Author),c(),v("disabled",t.isLoading()),c(3),v("innerHTML",Ya(8,7,e.Text),Fa),c(3),D(Je(11,9,e.Timestamp,"dd MMM y, HH:mm")),c(2),S(t.getEmailsForComment(e.Gnid).length>0||e.Docs&&e.Docs.length>0?12:-1)}}function go(r,i){r&1&&(l(0,"p",31),p(1,"No comments yet."),d())}var li=class r{logger=s(Pt);router=s(Ua);fb=s(gn);dataService=s(Ft);fileParserMsg=s(qt);dialog=s(dn);toast=s(Gt);gnid;isLoading=y(!1);topic=y(null);comments=y([]);emails=y([]);dragOverCommentGnid=y(null);commentsListEl=ja("commentsList");siteUsers=y([]);topicForm=this.fb.group({title:["",Vt.required],description:[""],open:[!0],owner:[null],closed:[null]});initialized=!1;async ngOnInit(){this.logger.debugLog("Topic component initialized",{gnid:this.gnid}),this.topicForm.get("open").valueChanges.subscribe(i=>{i===!1&&this.topicForm.get("closed").setValue(new Date,{emitEvent:!1})}),this.isLoading.set(!0);try{await this.dataService.ready,this.loadTopic(),this.loadComments(),this.loadEmails(),this.loadSiteUsers(),this.initialized=!0}finally{this.isLoading.set(!1)}}ngOnChanges(i){this.initialized&&i.gnid&&!i.gnid.firstChange&&(this.loadTopic(),this.loadComments(),this.loadEmails())}loadTopic(){let e=this.dataService.getItems("Topic").find(t=>t.Gnid===this.gnid)??null;this.topic.set(e),e?this.topicForm.setValue({title:e.Title??"",description:e.Description??"",open:e.Open??!1,owner:e.Owner?Number(e.Owner):null,closed:e.Closed?new Date(e.Closed):null},{emitEvent:!1}):this.topicForm.reset({title:"",description:"",open:!0,owner:null,closed:null},{emitEvent:!1})}loadSiteUsers(){let e=this.dataService.getItems("siteUsers").filter(t=>t.PrincipalType===1&&!!t.Email);this.siteUsers.set(e)}hasOwner(){return!!this.topicForm.get("owner")?.value}assignToMe(){let i=this.dataService.getCurrentUserFromCache()?.Id;i!=null&&this.topicForm.get("owner").setValue(i)}async saveTopic(){let i=this.topic();if(!i||this.topicForm.invalid)return;let{title:e,description:t,open:a,owner:n,closed:o}=this.topicForm.getRawValue(),E=i,{Id:m,Gnid:u}=E,f=Jt(E,["Id","Gnid"]);this.isLoading.set(!0);try{await this.dataService.updateItem("Topic",i.Id,ye(I({},f),{Title:e,Description:t,Open:a,Owner:n,Closed:o?o.getTime():null})),this.loadTopic(),this.logger.debugLog("Topic details saved",{gnid:this.gnid})}catch(oe){this.logger.debugLog("Failed to save topic details",oe)}finally{this.isLoading.set(!1)}}onCommentDragOver(i,e){i.preventDefault(),this.dragOverCommentGnid.set(e.Gnid)}onCommentDragLeave(i){this.dragOverCommentGnid()===i.Gnid&&this.dragOverCommentGnid.set(null)}async onCommentDrop(i,e){i.preventDefault(),this.dragOverCommentGnid.set(null);let t=i.dataTransfer?.files;if(!(!t||t.length===0))for(let a=0;a<t.length;a++){let n=t[a],o=this.comments().find(m=>m.Gnid===e.Gnid)??e;try{await this.handleDroppedFile(n,o)}catch(m){this.logger.debugLog("Unexpected error handling a dropped file - continuing with remaining files",{fileName:n.name,error:m})}}}async handleDroppedFile(i,e){let t=this.getFileExtension(i),a=this.resolveFileKind(i,t);if(a==="msg"){this.logger.debugLog("MSG file dropped on comment",{comment:e.Gnid,fileName:i.name});let o=await this.fileParserMsg.parse(i);o&&await this.saveEmail(e,o);return}if(Aa.has(a)){await this.saveDocument(e,i);return}let n=t?`.${t}`:i.name;this.logger.debugLog("Dropped file is not a supported file type - ignoring",{comment:e.Gnid,fileName:i.name,fileType:i.type}),this.toast.error(`File type ${n} not allowed`)}getFileExtension(i){let e=i.name.toLowerCase().split(".");return e.length>1?e[e.length-1]:""}getFileTypeIcon(i){return $t(i)}getDocExtension(i){let e=i.toLowerCase().split(".");return e.length>1?e[e.length-1]:""}onDocumentClick(i){let e=this.getDocExtension(i.FileName);switch(e){case"xlsx":case"xls":case"doc":case"docx":case"pdf":case"ppt":case"pptx":{let t=this.dataService.getDocumentViewUrl(i.FileName,i.SourceDocId);window.open(t,"_blank","noopener,noreferrer");break}case"mpp":{let t=this.dataService.getDocumentDesktopUrl(i.FileName,"ms-project");this.logger.debugLog("Opening .mpp in desktop Microsoft Project",{fileName:i.FileName,originalName:i.OriginalName,uri:t}),window.location.href=t;break}default:this.logger.debugLog("Document clicked - no handler for this file type",{fileName:i.FileName,originalName:i.OriginalName,extension:e});break}}resolveFileKind(i,e){return e==="msg"||i.type==="application/vnd.ms-outlook"?"msg":e}async saveDocument(i,e){this.isLoading.set(!0);try{let{fileName:t,originalName:a,sourceDocId:n}=await this.dataService.addDocument("Comment",i,e);this.loadComments(),this.logger.debugLog("Document uploaded and linked to comment",{comment:i.Gnid,fileName:t,originalName:a,sourceDocId:n})}catch(t){this.logger.debugLog("Failed to upload document",t)}finally{this.isLoading.set(!1)}}async saveEmail(i,e){this.isLoading.set(!0);try{let t=e,{attachments:a}=t,n=Jt(t,["attachments"]),o=await this.dataService.addItem("Email",I({Parent:i.Gnid},n));await this.saveEmailAttachments(o,a),this.loadEmails(),this.logger.debugLog("Email saved as child of comment",{comment:i.Gnid,subject:e.subject,attachmentCount:a.length})}catch(a){this.logger.debugLog("Failed to save parsed email",a)}finally{this.isLoading.set(!1)}}async saveEmailAttachments(i,e){let t=i;for(let a of e){if(!Aa.has(a.extension)){this.logger.debugLog("Skipping email attachment - unsupported file type",{fileName:a.fileName,extension:a.extension});continue}try{let n=new File([new Uint8Array(a.bytes)],a.fileName),o=await this.dataService.addDocument("Email",t,n),m=t.Docs??[];t=ye(I({},t),{Docs:[...m,{FileName:o.fileName,OriginalName:o.originalName,SourceDocId:o.sourceDocId}]})}catch(n){this.logger.debugLog("Failed to upload email attachment - continuing with remaining attachments",{fileName:a.fileName,error:n})}}}loadComments(){let e=this.dataService.getItems("Comment").filter(t=>t.Parent===this.gnid).sort((t,a)=>t.Timestamp-a.Timestamp);this.comments.set(e),this.scrollCommentsToBottom()}scrollCommentsToBottom(){setTimeout(()=>{let i=this.commentsListEl()?.nativeElement;i&&this.animateScrollTo(i,i.scrollHeight,250)})}animateScrollTo(i,e,t){let a=i.scrollTop,n=e-a;if(n===0)return;let o=performance.now(),m=u=>{let f=u-o,E=Math.min(f/t,1),oe=1-Math.pow(1-E,3);i.scrollTop=a+n*oe,E<1&&requestAnimationFrame(m)};requestAnimationFrame(m)}loadEmails(){this.emails.set(this.dataService.getItems("Email"))}getEmailsForComment=i=>this.emails().filter(e=>e.Parent===i).sort((e,t)=>this.toTime(e.date)-this.toTime(t.date));toTime(i){return i?new Date(i).getTime():0}openEmailDialog(i){this.dialog.open(Kt,{width:"70vw",height:"80vh",maxWidth:"90vw",maxHeight:"90vh",data:i})}deleteComment(i){this.dialog.open(Wt,{width:"360px",data:{title:"Delete Comment?",message:"This will permanently remove the comment. This cannot be undone.",confirmText:"Delete",cancelText:"Cancel",icon:"delete"}}).afterClosed().subscribe(t=>{t&&this.performDeleteComment(i)})}async performDeleteComment(i){this.isLoading.set(!0);try{await this.deleteDocumentsFor(i),await this.deleteChildrenOf(i.Gnid),await this.dataService.deleteItem("Comment",i.Id),this.loadComments(),this.loadEmails(),this.logger.debugLog("Comment, its children, and its documents deleted",{gnid:i.Gnid})}catch(e){this.logger.debugLog("Failed to delete comment",e)}finally{this.isLoading.set(!1)}}async deleteDocumentsFor(i){let e=Array.isArray(i?.Docs)?i.Docs:[];await Promise.all(e.map(async t=>{try{await this.dataService.deleteDocument(t.FileName)}catch(a){this.logger.debugLog("Failed to delete document file - continuing",{fileName:t.FileName,originalName:t.OriginalName,error:a})}}))}async deleteChildrenOf(i){let e=this.dataService.getAllData(),t=[];for(let[a,n]of Object.entries(e))for(let o of n)o?.Parent===i&&t.push(this.deleteDocumentsFor(o).then(()=>this.dataService.deleteItem(a,o.Id)));await Promise.all(t)}onCommentKeydown(i,e){i.key==="Enter"&&!i.shiftKey&&(i.preventDefault(),this.addComment(e))}async addComment(i){let e=i.value.trim();if(!(!e||this.isLoading())){this.isLoading.set(!0);try{let t=this.dataService.getCurrentUserFromCache()?.Title??"";await this.dataService.addItem("Comment",{Parent:this.gnid,Text:e,Author:t,Timestamp:Date.now()}),this.loadComments(),i.value="",this.logger.debugLog("Comment added",{parent:this.gnid})}catch(t){this.logger.debugLog("Failed to add comment",t)}finally{this.isLoading.set(!1)}}}static \u0275fac=function(e){return new(e||r)};static \u0275cmp=b({type:r,selectors:[["app-topic"]],viewQuery:function(e,t){e&1&&Na(t.commentsListEl,io,5),e&2&&Ba()},inputs:{gnid:"gnid"},features:[ue([ni()]),Z],decls:70,vars:9,consts:[["closedPicker",""],["commentsList",""],["commentInput",""],["mode","indeterminate"],[1,"topic-container"],[1,"header-row"],[1,"page-title"],[1,"cards-grid"],[1,"details-column"],[1,"topic-detail-card"],[1,"topic-details-form",3,"ngSubmit","formGroup"],["appearance","outline","subscriptSizing","dynamic",1,"detail-field"],["matInput","","type","text","formControlName","title"],["matInput","","rows","4","formControlName","description"],[1,"field-row"],[1,"detail-field","toggle-field"],["id","open-toggle-label",1,"toggle-label"],["formControlName","open","aria-labelledby","open-toggle-label"],["matInput","","formControlName","closed",3,"matDatepicker"],["matSuffix","",3,"for"],[1,"owner-row"],["type","button","mat-icon-button","","title","Assign to me","aria-label","Assign to me",1,"assign-me-btn"],["appearance","outline","subscriptSizing","dynamic",1,"detail-field","owner-field"],["formControlName","owner"],[3,"value"],[1,"form-actions"],["mat-raised-button","","color","primary","type","submit",3,"disabled"],[1,"edges-empty"],[1,"topic-detail-card","notes-card"],[1,"comments-list"],[1,"comment-bubble",3,"drag-over"],[1,"comments-empty"],["appearance","outline","subscriptSizing","dynamic",1,"add-comment-field"],["matInput","","rows","3","placeholder","Add comment ...",3,"keydown"],["mat-icon-button","","matSuffix","","type","button","aria-label","Send comment",3,"click","disabled"],[1,"comment-input-hint"],["type","button","mat-icon-button","","title","Assign to me","aria-label","Assign to me",1,"assign-me-btn",3,"click"],[1,"comment-bubble",3,"dragover","dragleave","drop"],[1,"comment-header"],[1,"comment-author"],["mat-icon-button","","aria-label","Delete comment",1,"comment-delete-btn",3,"click","disabled"],[1,"comment-text",3,"innerHTML"],[1,"comment-timestamp"],[1,"comment-emails"],[1,"comment-email-chip"],[1,"comment-email-chip",3,"click"],[1,"comment-email-date"],[1,"comment-email-subject"],["viewBox","0 0 24 24",1,"doc-type-icon"]],template:function(e,t){if(e&1){let a=Y();A(0,lo,1,0,"mat-progress-bar",3),l(1,"div",4)(2,"div",5)(3,"h1",6),p(4),d()(),l(5,"div",7)(6,"div",8)(7,"mat-card",9)(8,"mat-toolbar")(9,"span"),p(10,"Details"),d()(),l(11,"mat-card-content")(12,"form",10),_("ngSubmit",function(){return t.saveTopic()}),l(13,"mat-form-field",11)(14,"mat-label"),p(15,"Title"),d(),x(16,"input",12),d(),l(17,"mat-form-field",11)(18,"mat-label"),p(19,"Description"),d(),x(20,"textarea",13),d(),l(21,"div",14)(22,"div",15)(23,"span",16),p(24,"Open"),d(),x(25,"mat-slide-toggle",17),d(),l(26,"mat-form-field",11)(27,"mat-label"),p(28,"Closed"),d(),x(29,"input",18)(30,"mat-datepicker-toggle",19)(31,"mat-datepicker",null,0),d()(),l(33,"div",20),A(34,co,3,0,"button",21),l(35,"mat-form-field",22)(36,"mat-label"),p(37,"Owner"),d(),l(38,"mat-select",23),ee(39,mo,2,2,"mat-option",24,oo),d()()(),l(41,"div",25)(42,"button",26),p(43," Save "),d()()()()(),l(44,"mat-card",9)(45,"mat-toolbar")(46,"span"),p(47,"Edges"),d()(),l(48,"mat-card-content")(49,"p",27),p(50,"No edges yet."),d()()()(),l(51,"mat-card",28)(52,"mat-toolbar")(53,"span"),p(54,"Notes"),d()(),l(55,"mat-card-content")(56,"div",29,1),ee(58,_o,13,12,"div",30,di,!1,go,2,0,"p",31),d()(),l(61,"mat-card-footer")(62,"mat-form-field",32)(63,"textarea",33,2),_("keydown",function(o){C(a);let m=Re(64);return w(t.onCommentKeydown(o,m))}),d(),l(65,"button",34),_("click",function(){C(a);let o=Re(64);return w(t.addComment(o))}),l(66,"mat-icon"),p(67,"send"),d()()(),l(68,"span",35),p(69,"[Enter] to submit. [Shift]+[Enter] for new line."),d()()()()()}if(e&2){let a,n=Re(32);S(t.isLoading()?0:-1),c(4),D((a=t.topic())==null?null:a.Title),c(8),v("formGroup",t.topicForm),c(17),v("matDatepicker",n),c(),v("for",n),c(4),S(t.hasOwner()?-1:34),c(5),te(t.siteUsers()),c(3),v("disabled",t.topicForm.invalid||t.isLoading()),c(16),te(t.comments()),c(7),v("disabled",t.isLoading())}},dependencies:[Dn,bn,vn,yn,wn,Cn,ge,_e,me,ne,tt,Ln,Rn,Sn,An,xn,kn,Tn,In,Fn,Pn,Vn,Bn,la,ai,ti,zt,ya,fn,un,mn,pn,hn,sa,_n,ft,Qt],styles:["[_nghost-%COMP%]{display:block;height:100%}.topic-container[_ngcontent-%COMP%]{height:100%;padding:20px;box-sizing:border-box;display:flex;flex-direction:column}.header-row[_ngcontent-%COMP%]{display:flex;align-items:center;gap:8px;margin-bottom:16px;flex:0 0 auto}.page-title[_ngcontent-%COMP%]{margin:0;font-size:24px;font-weight:500}.cards-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 1fr;gap:20px;margin-top:20px;flex:1 1 auto;min-height:0}.details-column[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:20px;min-height:0}.topic-detail-card[_ngcontent-%COMP%]{padding:0;border-radius:0;box-shadow:0 5px 5px -3px #0003,0 8px 10px 1px #00000024,0 3px 14px 2px #0000001f;min-height:300px;background:transparent;color:var(--text-primary);display:flex;flex-direction:column}.notes-card[_ngcontent-%COMP%]{min-height:0}.notes-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]{flex:1 1 auto;min-height:0;display:flex;flex-direction:column}mat-toolbar[_ngcontent-%COMP%]{min-height:56px;height:auto;padding:4px 16px;font-size:14px;font-weight:500;display:flex;align-items:center;gap:12px;background:color-mix(in srgb,var(--surface-0) 95%,black 5%);color:var(--text-primary);border-bottom:.5px solid var(--border);flex:0 0 auto}mat-card-content[_ngcontent-%COMP%]{padding:16px!important}.edges-empty[_ngcontent-%COMP%]{margin:0;font-size:14px;color:var(--text-muted);font-style:italic}.topic-details-form[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:16px}.field-row[_ngcontent-%COMP%]{display:flex;gap:16px}.field-row[_ngcontent-%COMP%]   .detail-field[_ngcontent-%COMP%]{flex:1 1 0;min-width:0}.field-row[_ngcontent-%COMP%]   .detail-field.toggle-field[_ngcontent-%COMP%]{flex:0 0 auto;width:auto}.detail-field[_ngcontent-%COMP%]{width:100%;--mdc-outlined-text-field-outline-color: var(--border);--mdc-outlined-text-field-hover-outline-color: var(--text-muted);--mdc-outlined-text-field-focus-outline-color: var(--text-accent);--mdc-outlined-text-field-label-text-color: var(--text-muted);--mdc-outlined-text-field-input-text-color: var(--text-primary)}.detail-field[_ngcontent-%COMP%]     .mat-mdc-text-field-wrapper.mdc-text-field--outlined{background-color:var(--surface-1)!important;border-radius:4px}.form-actions[_ngcontent-%COMP%]{display:flex;justify-content:flex-end}.comments-list[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:10px;flex:1 1 auto;min-height:0;overflow-y:auto}.comment-bubble[_ngcontent-%COMP%]{background-color:var(--surface-1);border:.5px solid var(--border);border-radius:12px;padding:10px 14px;max-width:85%;align-self:flex-start;box-shadow:0 1px 2px #00000014;transition:background-color .15s ease,border-color .15s ease}.comment-bubble.drag-over[_ngcontent-%COMP%]{background-color:var(--bg-accent);border-color:var(--text-accent);border-style:dashed}.comment-header[_ngcontent-%COMP%]{display:flex;align-items:flex-start;justify-content:space-between;gap:8px}.comment-author[_ngcontent-%COMP%]{display:block;font-size:12px;font-weight:600;color:var(--text-accent);margin-bottom:2px}.comment-delete-btn[_ngcontent-%COMP%]{flex:0 0 auto;width:28px;height:28px;padding:2px;line-height:24px;color:var(--text-muted);margin-top:-4px;margin-right:-6px}.comment-delete-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:18px;width:18px;height:18px;line-height:18px}.comment-delete-btn[_ngcontent-%COMP%]:hover{color:#c62828}.comment-text[_ngcontent-%COMP%]{margin:0;font-size:14px;line-height:1.4;color:var(--text-primary);white-space:pre-wrap;word-break:break-word}.comment-text[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:var(--text-secondary);text-decoration:underline;word-break:break-all}.comment-text[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color:var(--text-accent)}.comment-timestamp[_ngcontent-%COMP%]{display:block;margin-top:4px;font-size:11px;color:var(--text-muted);text-align:right}.comment-emails[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:4px;margin-top:8px;padding-top:8px;border-top:.5px solid var(--border)}.comment-email-chip[_ngcontent-%COMP%]{display:flex;align-items:center;gap:6px;padding:4px 6px;border-radius:6px;background-color:var(--surface-2);border:.5px solid var(--border);cursor:pointer;transition:background-color .15s ease,border-color .15s ease;max-width:100%;overflow:hidden}.comment-email-chip[_ngcontent-%COMP%]:hover{background-color:var(--bg-accent);border-color:var(--text-accent)}.comment-email-chip[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:16px;width:16px;height:16px;line-height:16px;color:var(--text-accent);flex:0 0 auto}.comment-email-chip[_ngcontent-%COMP%]   .doc-type-icon[_ngcontent-%COMP%]{width:16px;height:16px;flex:0 0 auto}.comment-email-date[_ngcontent-%COMP%]{font-size:12px;color:var(--text-muted);flex:0 0 auto;white-space:nowrap}.comment-email-subject[_ngcontent-%COMP%]{font-size:12px;color:var(--text-primary);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;flex:1 1 auto;min-width:0}.comments-empty[_ngcontent-%COMP%]{margin:0;font-size:14px;color:var(--text-muted);font-style:italic}mat-card-footer[_ngcontent-%COMP%]{display:block;padding:8px 12px;border-top:.5px solid var(--border);flex:0 0 auto}.add-comment-field[_ngcontent-%COMP%]{width:100%;--mdc-outlined-text-field-outline-color: var(--border);--mdc-outlined-text-field-hover-outline-color: var(--text-muted);--mdc-outlined-text-field-focus-outline-color: var(--text-accent);--mdc-outlined-text-field-input-text-color: var(--text-primary)}.add-comment-field[_ngcontent-%COMP%]     .mat-mdc-text-field-wrapper.mdc-text-field--outlined{background-color:var(--surface-1)!important;border-radius:4px}.comment-input-hint[_ngcontent-%COMP%]{display:block;margin-top:4px;font-size:11px;color:var(--text-muted)}.add-comment-field[_ngcontent-%COMP%]   .mat-mdc-form-field-infix[_ngcontent-%COMP%]{min-height:0;padding-top:8px;padding-bottom:8px}.add-comment-field[_ngcontent-%COMP%]   textarea.mat-mdc-input-element[_ngcontent-%COMP%]{resize:none;line-height:1.4}.add-comment-field[_ngcontent-%COMP%]   .mat-mdc-form-field-icon-suffix[_ngcontent-%COMP%]{align-self:flex-end;padding-bottom:4px}.add-comment-field[_ngcontent-%COMP%]   .mat-mdc-icon-button[_ngcontent-%COMP%]{width:32px;height:32px;padding:4px;color:var(--text-muted)}.add-comment-field[_ngcontent-%COMP%]   .mat-mdc-icon-button[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:20px;width:20px;height:20px;line-height:20px}.toggle-field[_ngcontent-%COMP%]{display:flex;align-items:center;gap:12px;height:56px}.toggle-label[_ngcontent-%COMP%]{font-size:14px;color:var(--text-primary)}.owner-row[_ngcontent-%COMP%]{display:flex;align-items:center;gap:8px}.owner-row[_ngcontent-%COMP%]   .detail-field.owner-field[_ngcontent-%COMP%]{flex:1 1 auto;width:auto;min-width:0}.assign-me-btn[_ngcontent-%COMP%]{flex:0 0 auto;color:var(--text-accent)}"]})};export{li as Topic};
