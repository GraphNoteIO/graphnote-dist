import{a as Ia,b as Tt,c as Ta,d as Fa,e as Ft,f as Rt,g as Pt,h as Vt}from"./chunk-7TTBF7CU.js";import{d as la}from"./chunk-TJFWJRRG.js";import{a as Ja,b as en,c as tn}from"./chunk-JSTBZACW.js";import{A as ja,B as Ga,C as Ua,D as qa,E as _i,F as Bt,G as Ka,H as $a,I as Qa,J as gi,K as Xa,L as Wa,M as Za,a as ka,d as Ma,e as Pe,f as di,g as Aa,h as et,i as mi,j as Ea,k as At,l as Et,o as St,p as Sa,q as It,s as tt,v as hi,w as Ba,x as Ha,y as za,z as Ya}from"./chunk-52X7GI6P.js";import{a as Da,b as ht,c as De,d as xe,e as Lt,f as Nt}from"./chunk-AOIDIV26.js";import{$ as re,$a as L,$c as it,A as $i,Aa as yt,Ab as xt,Bb as J,Bc as ga,C as ri,Cb as na,Cc as le,Db as Xe,Ea as b,Eb as ra,Fa as fe,Fb as mt,Fc as fa,Ga as j,Ha as ea,I as Se,Ib as oa,J as Qi,Ja as ve,K as z,Ka as lt,Lc as va,Mb as kt,Mc as ba,Nb as sa,Nc as te,P as Qe,Pb as ca,Pc as li,Q as ne,Qa as f,Qc as ya,R as _e,Rb as N,Sa as x,Sb as T,T as R,Ta as k,Tb as Ie,Tc as Ca,U as Xi,Ua as ta,Uc as wa,V as s,Va as oe,Vc as je,Wa as se,Wc as xa,Xa as C,Ya as c,Yc as pt,Z as A,Za as l,Zc as Ra,_ as E,_a as y,_b as Mt,_c as Ot,a as P,aa as Ne,ab as B,ad as pi,b as pe,ba as $,bb as Be,bd as Pa,c as bt,ca as ge,cb as U,cc as be,cd as Va,d as ue,db as Z,dc as We,dd as ui,eb as u,ec as we,fa as g,fb as Ct,fc as Te,g as F,ga as me,gb as p,gc as Fe,gd as Oa,hb as ce,hc as Re,hd as ut,ib as Y,ic as si,id as La,ja as M,jb as He,kb as q,kc as Ze,kd as Na,l as $e,la as W,lb as w,lc as ci,ma as ct,mb as D,nc as Je,oa as V,ob as ia,oc as da,pa as Wi,pb as aa,qb as ze,qc as ma,ra as Zi,rb as Ye,rc as ha,sb as S,ta as d,tb as Q,u as Ee,ua as he,ub as h,v as Ki,va as oi,vb as I,wb as G,wc as pa,xa as Ce,xb as dt,xc as ua,yb as wt,yc as _a,z as ni,za as Ji,zb as Dt,zc as ee}from"./chunk-RLLIDE5Q.js";function Yn(n,r){n&1&&Be(0,"div",2)}var jn=new R("MAT_PROGRESS_BAR_DEFAULT_OPTIONS");var nn=(()=>{class n{_elementRef=s(V);_ngZone=s(me);_changeDetectorRef=s(N);_renderer=s(Ce);_cleanupTransitionEnd;constructor(){let e=ba(),t=s(jn,{optional:!0});this._isNoopAnimation=e==="di-disabled",e==="reduced-motion"&&this._elementRef.nativeElement.classList.add("mat-progress-bar-reduced-motion"),t&&(t.color&&(this.color=this._defaultColor=t.color),this.mode=t.mode||this.mode)}_isNoopAnimation;get color(){return this._color||this._defaultColor}set color(e){this._color=e}_color;_defaultColor="primary";get value(){return this._value}set value(e){this._value=an(e||0),this._changeDetectorRef.markForCheck()}_value=0;get bufferValue(){return this._bufferValue||0}set bufferValue(e){this._bufferValue=an(e||0),this._changeDetectorRef.markForCheck()}_bufferValue=0;animationEnd=new g;get mode(){return this._mode}set mode(e){this._mode=e,this._changeDetectorRef.markForCheck()}_mode="determinate";ngAfterViewInit(){this._ngZone.runOutsideAngular(()=>{this._cleanupTransitionEnd=this._renderer.listen(this._elementRef.nativeElement,"transitionend",this._transitionendHandler)})}ngOnDestroy(){this._cleanupTransitionEnd?.()}_getPrimaryBarTransform(){return`scaleX(${this._isIndeterminate()?1:this.value/100})`}_getBufferBarFlexBasis(){return`${this.mode==="buffer"?this.bufferValue:100}%`}_isIndeterminate(){return this.mode==="indeterminate"||this.mode==="query"}_transitionendHandler=e=>{this.animationEnd.observers.length===0||!e.target||!e.target.classList.contains("mdc-linear-progress__primary-bar")||(this.mode==="determinate"||this.mode==="buffer")&&this._ngZone.run(()=>this.animationEnd.next({value:this.value}))};static \u0275fac=function(t){return new(t||n)};static \u0275cmp=b({type:n,selectors:[["mat-progress-bar"]],hostAttrs:["role","progressbar","aria-valuemin","0","aria-valuemax","100","tabindex","-1",1,"mat-mdc-progress-bar","mdc-linear-progress"],hostVars:10,hostBindings:function(t,i){t&2&&(f("aria-valuenow",i._isIndeterminate()?null:i.value)("mode",i.mode),Q("mat-"+i.color),S("_mat-animation-noopable",i._isNoopAnimation)("mdc-linear-progress--animation-ready",!i._isNoopAnimation)("mdc-linear-progress--indeterminate",i._isIndeterminate()))},inputs:{color:"color",value:[2,"value","value",Ie],bufferValue:[2,"bufferValue","bufferValue",Ie],mode:"mode"},outputs:{animationEnd:"animationEnd"},exportAs:["matProgressBar"],decls:7,vars:5,consts:[["aria-hidden","true",1,"mdc-linear-progress__buffer"],[1,"mdc-linear-progress__buffer-bar"],[1,"mdc-linear-progress__buffer-dots"],["aria-hidden","true",1,"mdc-linear-progress__bar","mdc-linear-progress__primary-bar"],[1,"mdc-linear-progress__bar-inner"],["aria-hidden","true",1,"mdc-linear-progress__bar","mdc-linear-progress__secondary-bar"]],template:function(t,i){t&1&&(L(0,"div",0),Be(1,"div",1),x(2,Yn,1,0,"div",2),B(),L(3,"div",3),Be(4,"span",4),B(),L(5,"div",5),Be(6,"span",4),B()),t&2&&(d(),Ye("flex-basis",i._getBufferBarFlexBasis()),d(),k(i.mode==="buffer"?2:-1),d(),Ye("transform",i._getPrimaryBarTransform()))},styles:[`.mat-mdc-progress-bar {
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
`],encapsulation:2,changeDetection:0})}return n})();function an(n,r=0,e=100){return Math.max(r,Math.min(e,n))}var rn=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=fe({type:n});static \u0275inj=_e({imports:[Te]})}return n})();var Un=["mat-internal-form-field",""],qn=["*"],on=(()=>{class n{labelPosition="after";static \u0275fac=function(t){return new(t||n)};static \u0275cmp=b({type:n,selectors:[["div","mat-internal-form-field",""]],hostAttrs:[1,"mdc-form-field","mat-internal-form-field"],hostVars:2,hostBindings:function(t,i){t&2&&S("mdc-form-field--align-end",i.labelPosition==="before")},inputs:{labelPosition:"labelPosition"},attrs:Un,ngContentSelectors:qn,decls:1,vars:0,template:function(t,i){t&1&&(ce(),Y(0))},styles:[`.mat-internal-form-field {
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
`],encapsulation:2,changeDetection:0})}return n})();var Kn=["switch"],$n=["*"];function Qn(n,r){n&1&&(c(0,"span",11),re(),c(1,"svg",13),y(2,"path",14),l(),c(3,"svg",15),y(4,"path",16),l()())}var Xn=new R("mat-slide-toggle-default-options",{providedIn:"root",factory:()=>({disableToggleValue:!1,hideIcon:!1,disabledInteractive:!1})}),Ht=class{source;checked;constructor(r,e){this.source=r,this.checked=e}},fi=(()=>{class n{_elementRef=s(V);_focusMonitor=s(Je);_changeDetectorRef=s(N);defaults=s(Xn);_onChange=e=>{};_onTouched=()=>{};_validatorOnChange=()=>{};_uniqueId;_checked=!1;_createChangeEvent(e){return new Ht(this,e)}_labelId;get buttonId(){return`${this.id||this._uniqueId}-button`}_switchElement;focus(){this._switchElement.nativeElement.focus()}_noopAnimations=te();_focused=!1;name=null;id;labelPosition="after";ariaLabel=null;ariaLabelledby=null;ariaDescribedby;required=!1;color;disabled=!1;disableRipple=!1;tabIndex=0;get checked(){return this._checked}set checked(e){this._checked=e,this._changeDetectorRef.markForCheck()}hideIcon;disabledInteractive;change=new g;toggleChange=new g;get inputId(){return`${this.id||this._uniqueId}-input`}constructor(){s(be).load(je);let e=s(new kt("tabindex"),{optional:!0}),t=this.defaults;this.tabIndex=e==null?0:parseInt(e)||0,this.color=t.color||"accent",this.id=this._uniqueId=s(le).getId("mat-mdc-slide-toggle-"),this.hideIcon=t.hideIcon??!1,this.disabledInteractive=t.disabledInteractive??!1,this._labelId=this._uniqueId+"-label"}ngAfterContentInit(){this._focusMonitor.monitor(this._elementRef,!0).subscribe(e=>{e==="keyboard"||e==="program"?(this._focused=!0,this._changeDetectorRef.markForCheck()):e||Promise.resolve().then(()=>{this._focused=!1,this._onTouched(),this._changeDetectorRef.markForCheck()})})}ngOnChanges(e){e.required&&this._validatorOnChange()}ngOnDestroy(){this._focusMonitor.stopMonitoring(this._elementRef)}writeValue(e){this.checked=!!e}registerOnChange(e){this._onChange=e}registerOnTouched(e){this._onTouched=e}validate(e){return this.required&&e.value!==!0?{required:!0}:null}registerOnValidatorChange(e){this._validatorOnChange=e}setDisabledState(e){this.disabled=e,this._changeDetectorRef.markForCheck()}toggle(){this.checked=!this.checked,this._onChange(this.checked)}_emitChangeEvent(){this._onChange(this.checked),this.change.emit(this._createChangeEvent(this.checked))}_handleClick(){this.disabled||(this.toggleChange.emit(),this.defaults.disableToggleValue||(this.checked=!this.checked,this._onChange(this.checked),this.change.emit(new Ht(this,this.checked))))}_getAriaLabelledBy(){return this.ariaLabelledby?this.ariaLabelledby:this.ariaLabel?null:this._labelId}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=b({type:n,selectors:[["mat-slide-toggle"]],viewQuery:function(t,i){if(t&1&&q(Kn,5),t&2){let a;w(a=D())&&(i._switchElement=a.first)}},hostAttrs:[1,"mat-mdc-slide-toggle"],hostVars:13,hostBindings:function(t,i){t&2&&(Z("id",i.id),f("tabindex",null)("aria-label",null)("name",null)("aria-labelledby",null),Q(i.color?"mat-"+i.color:""),S("mat-mdc-slide-toggle-focused",i._focused)("mat-mdc-slide-toggle-checked",i.checked)("_mat-animation-noopable",i._noopAnimations))},inputs:{name:"name",id:"id",labelPosition:"labelPosition",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],ariaDescribedby:[0,"aria-describedby","ariaDescribedby"],required:[2,"required","required",T],color:"color",disabled:[2,"disabled","disabled",T],disableRipple:[2,"disableRipple","disableRipple",T],tabIndex:[2,"tabIndex","tabIndex",e=>e==null?0:Ie(e)],checked:[2,"checked","checked",T],hideIcon:[2,"hideIcon","hideIcon",T],disabledInteractive:[2,"disabledInteractive","disabledInteractive",T]},outputs:{change:"change",toggleChange:"toggleChange"},exportAs:["matSlideToggle"],features:[J([{provide:pt,useExisting:Qe(()=>n),multi:!0},{provide:Ot,useExisting:n,multi:!0}]),W],ngContentSelectors:$n,decls:14,vars:27,consts:[["switch",""],["mat-internal-form-field","",3,"labelPosition"],["role","switch","type","button",1,"mdc-switch",3,"click","tabIndex","disabled"],[1,"mat-mdc-slide-toggle-touch-target"],[1,"mdc-switch__track"],[1,"mdc-switch__handle-track"],[1,"mdc-switch__handle"],[1,"mdc-switch__shadow"],[1,"mdc-elevation-overlay"],[1,"mdc-switch__ripple"],["mat-ripple","",1,"mat-mdc-slide-toggle-ripple","mat-focus-indicator",3,"matRippleTrigger","matRippleDisabled","matRippleCentered"],[1,"mdc-switch__icons"],[1,"mdc-label",3,"click","for"],["viewBox","0 0 24 24","aria-hidden","true",1,"mdc-switch__icon","mdc-switch__icon--on"],["d","M19.69,5.23L8.96,15.96l-4.23-4.23L2.96,13.5l6,6L21.46,7L19.69,5.23z"],["viewBox","0 0 24 24","aria-hidden","true",1,"mdc-switch__icon","mdc-switch__icon--off"],["d","M20 13H4v-2h16v2z"]],template:function(t,i){if(t&1&&(ce(),c(0,"div",1)(1,"button",2,0),u("click",function(){return i._handleClick()}),y(3,"div",3)(4,"span",4),c(5,"span",5)(6,"span",6)(7,"span",7),y(8,"span",8),l(),c(9,"span",9),y(10,"span",10),l(),x(11,Qn,5,0,"span",11),l()()(),c(12,"label",12),u("click",function(o){return o.stopPropagation()}),Y(13),l()()),t&2){let a=ze(2);C("labelPosition",i.labelPosition),d(),S("mdc-switch--selected",i.checked)("mdc-switch--unselected",!i.checked)("mdc-switch--checked",i.checked)("mdc-switch--disabled",i.disabled)("mat-mdc-slide-toggle-disabled-interactive",i.disabledInteractive),C("tabIndex",i.disabled&&!i.disabledInteractive?-1:i.tabIndex)("disabled",i.disabled&&!i.disabledInteractive),f("id",i.buttonId)("name",i.name)("aria-label",i.ariaLabel)("aria-labelledby",i._getAriaLabelledBy())("aria-describedby",i.ariaDescribedby)("aria-required",i.required||null)("aria-checked",i.checked)("aria-disabled",i.disabled&&i.disabledInteractive?"true":null),d(9),C("matRippleTrigger",a)("matRippleDisabled",i.disableRipple||i.disabled)("matRippleCentered",!0),d(),k(i.hideIcon?-1:11),d(),C("for",i.buttonId),f("id",i._labelId)}},dependencies:[wa,on],styles:[`.mdc-switch {
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
`],encapsulation:2,changeDetection:0})}return n})(),sn=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=fe({type:n});static \u0275inj=_e({imports:[fi,Te]})}return n})();var vi=new R("MAT_DATE_LOCALE",{providedIn:"root",factory:()=>s(oa)}),at="Method not implemented",K=class{locale;_localeChanges=new F;localeChanges=this._localeChanges;setTime(r,e,t,i){throw new Error(at)}getHours(r){throw new Error(at)}getMinutes(r){throw new Error(at)}getSeconds(r){throw new Error(at)}parseTime(r,e){throw new Error(at)}addSeconds(r,e){throw new Error(at)}getValidDateOrNull(r){return this.isDateInstance(r)&&this.isValid(r)?r:null}deserialize(r){return r==null||this.isDateInstance(r)&&this.isValid(r)?r:this.invalid()}setLocale(r){this.locale=r,this._localeChanges.next()}compareDate(r,e){return this.getYear(r)-this.getYear(e)||this.getMonth(r)-this.getMonth(e)||this.getDate(r)-this.getDate(e)}compareTime(r,e){return this.getHours(r)-this.getHours(e)||this.getMinutes(r)-this.getMinutes(e)||this.getSeconds(r)-this.getSeconds(e)}sameDate(r,e){if(r&&e){let t=this.isValid(r),i=this.isValid(e);return t&&i?!this.compareDate(r,e):t==i}return r==e}sameTime(r,e){if(r&&e){let t=this.isValid(r),i=this.isValid(e);return t&&i?!this.compareTime(r,e):t==i}return r==e}clampDate(r,e,t){return e&&this.compareDate(r,e)<0?e:t&&this.compareDate(r,t)>0?t:r}},Ve=new R("mat-date-formats");var Zn=["tooltip"],Jn=20;var er=new R("mat-tooltip-scroll-strategy",{providedIn:"root",factory:()=>{let n=s($);return()=>At(n,{scrollThrottle:Jn})}}),tr=new R("mat-tooltip-default-options",{providedIn:"root",factory:()=>({showDelay:0,hideDelay:0,touchendHideDelay:1500})});var cn="tooltip-panel",ir={passive:!0},ar=8,nr=8,rr=24,or=200,ln=(()=>{class n{_elementRef=s(V);_ngZone=s(me);_platform=s(Ze);_ariaDescriber=s(fa);_focusMonitor=s(Je);_dir=s(we);_injector=s($);_viewContainerRef=s(yt);_mediaMatcher=s(ma);_document=s(ge);_renderer=s(Ce);_animationsDisabled=te();_defaultOptions=s(tr,{optional:!0});_overlayRef=null;_tooltipInstance=null;_overlayPanelClass;_portal;_position="below";_positionAtOrigin=!1;_disabled=!1;_tooltipClass;_viewInitialized=!1;_pointerExitEventsInitialized=!1;_tooltipComponent=sr;_viewportMargin=8;_currentPosition;_cssClassPrefix="mat-mdc";_ariaDescriptionPending=!1;_dirSubscribed=!1;get position(){return this._position}set position(e){e!==this._position&&(this._position=e,this._overlayRef&&(this._updatePosition(this._overlayRef),this._tooltipInstance?.show(0),this._overlayRef.updatePosition()))}get positionAtOrigin(){return this._positionAtOrigin}set positionAtOrigin(e){this._positionAtOrigin=li(e),this._detach(),this._overlayRef=null}get disabled(){return this._disabled}set disabled(e){let t=li(e);this._disabled!==t&&(this._disabled=t,t?this.hide(0):this._setupPointerEnterEventsIfNeeded(),this._syncAriaDescription(this.message))}get showDelay(){return this._showDelay}set showDelay(e){this._showDelay=ci(e)}_showDelay;get hideDelay(){return this._hideDelay}set hideDelay(e){this._hideDelay=ci(e),this._tooltipInstance&&(this._tooltipInstance._mouseLeaveHideDelay=this._hideDelay)}_hideDelay;touchGestures="auto";get message(){return this._message}set message(e){let t=this._message;this._message=e!=null?String(e).trim():"",!this._message&&this._isTooltipVisible()?this.hide(0):(this._setupPointerEnterEventsIfNeeded(),this._updateTooltipMessage()),this._syncAriaDescription(t)}_message="";get tooltipClass(){return this._tooltipClass}set tooltipClass(e){this._tooltipClass=e,this._tooltipInstance&&this._setTooltipClass(this._tooltipClass)}_eventCleanups=[];_touchstartTimeout=null;_destroyed=new F;_isDestroyed=!1;constructor(){let e=this._defaultOptions;e&&(this._showDelay=e.showDelay,this._hideDelay=e.hideDelay,e.position&&(this.position=e.position),e.positionAtOrigin&&(this.positionAtOrigin=e.positionAtOrigin),e.touchGestures&&(this.touchGestures=e.touchGestures),e.tooltipClass&&(this.tooltipClass=e.tooltipClass)),this._viewportMargin=ar}ngAfterViewInit(){this._viewInitialized=!0,this._setupPointerEnterEventsIfNeeded(),this._focusMonitor.monitor(this._elementRef).pipe(z(this._destroyed)).subscribe(e=>{e?e==="keyboard"&&this._ngZone.run(()=>this.show()):this._ngZone.run(()=>this.hide(0))})}ngOnDestroy(){let e=this._elementRef.nativeElement;this._touchstartTimeout&&clearTimeout(this._touchstartTimeout),this._overlayRef&&(this._overlayRef.dispose(),this._tooltipInstance=null),this._eventCleanups.forEach(t=>t()),this._eventCleanups.length=0,this._destroyed.next(),this._destroyed.complete(),this._isDestroyed=!0,this._ariaDescriber.removeDescription(e,this.message,"tooltip"),this._focusMonitor.stopMonitoring(e)}show(e=this.showDelay,t){if(this.disabled||!this.message||this._isTooltipVisible()){this._tooltipInstance?._cancelPendingAnimations();return}let i=this._createOverlay(t);this._detach(),this._portal=this._portal||new Pe(this._tooltipComponent,this._viewContainerRef);let a=this._tooltipInstance=i.attach(this._portal).instance;a._triggerElement=this._elementRef.nativeElement,a._mouseLeaveHideDelay=this._hideDelay,a.afterHidden().pipe(z(this._destroyed)).subscribe(()=>this._detach()),this._setTooltipClass(this._tooltipClass),this._updateTooltipMessage(),a.show(e)}hide(e=this.hideDelay){let t=this._tooltipInstance;t&&(t.isVisible()?t.hide(e):(t._cancelPendingAnimations(),this._detach()))}toggle(e){this._isTooltipVisible()?this.hide():this.show(void 0,e)}_isTooltipVisible(){return!!this._tooltipInstance&&this._tooltipInstance.isVisible()}_createOverlay(e){if(this._overlayRef){let o=this._overlayRef.getConfig().positionStrategy;if((!this.positionAtOrigin||!e)&&o._origin instanceof V)return this._overlayRef;this._detach()}let t=this._injector.get(ka).getAncestorScrollContainers(this._elementRef),i=`${this._cssClassPrefix}-${cn}`,a=St(this._injector,this.positionAtOrigin?e||this._elementRef:this._elementRef).withTransformOriginOn(`.${this._cssClassPrefix}-tooltip`).withFlexibleDimensions(!1).withViewportMargin(this._viewportMargin).withScrollableContainers(t).withPopoverLocation("global");return a.positionChanges.pipe(z(this._destroyed)).subscribe(o=>{this._updateCurrentPositionClass(o.connectionPair),this._tooltipInstance&&o.scrollableViewProperties.isOverlayClipped&&this._tooltipInstance.isVisible()&&this._ngZone.run(()=>this.hide(0))}),this._overlayRef=tt(this._injector,{direction:this._dir,positionStrategy:a,panelClass:this._overlayPanelClass?[...this._overlayPanelClass,i]:i,scrollStrategy:this._injector.get(er)(),disableAnimations:this._animationsDisabled,eventPredicate:this._overlayEventPredicate}),this._updatePosition(this._overlayRef),this._overlayRef.detachments().pipe(z(this._destroyed)).subscribe(()=>this._detach()),this._overlayRef.outsidePointerEvents().pipe(z(this._destroyed)).subscribe(()=>this._tooltipInstance?._handleBodyInteraction()),this._overlayRef.keydownEvents().pipe(z(this._destroyed)).subscribe(o=>{o.preventDefault(),o.stopPropagation(),this._ngZone.run(()=>this.hide(0))}),this._defaultOptions?.disableTooltipInteractivity&&this._overlayRef.addPanelClass(`${this._cssClassPrefix}-tooltip-panel-non-interactive`),this._dirSubscribed||(this._dirSubscribed=!0,this._dir.change.pipe(z(this._destroyed)).subscribe(()=>{this._overlayRef&&this._updatePosition(this._overlayRef)})),this._overlayRef}_detach(){this._overlayRef&&this._overlayRef.hasAttached()&&this._overlayRef.detach(),this._tooltipInstance=null}_updatePosition(e){let t=e.getConfig().positionStrategy,i=this._getOrigin(),a=this._getOverlayPosition();t.withPositions([this._addOffset(P(P({},i.main),a.main)),this._addOffset(P(P({},i.fallback),a.fallback))])}_addOffset(e){let t=nr,i=!this._dir||this._dir.value=="ltr";return e.originY==="top"?e.offsetY=-t:e.originY==="bottom"?e.offsetY=t:e.originX==="start"?e.offsetX=i?-t:t:e.originX==="end"&&(e.offsetX=i?t:-t),e}_getOrigin(){let e=!this._dir||this._dir.value=="ltr",t=this.position,i;t=="above"||t=="below"?i={originX:"center",originY:t=="above"?"top":"bottom"}:t=="before"||t=="left"&&e||t=="right"&&!e?i={originX:"start",originY:"center"}:(t=="after"||t=="right"&&e||t=="left"&&!e)&&(i={originX:"end",originY:"center"});let{x:a,y:o}=this._invertPosition(i.originX,i.originY);return{main:i,fallback:{originX:a,originY:o}}}_getOverlayPosition(){let e=!this._dir||this._dir.value=="ltr",t=this.position,i;t=="above"?i={overlayX:"center",overlayY:"bottom"}:t=="below"?i={overlayX:"center",overlayY:"top"}:t=="before"||t=="left"&&e||t=="right"&&!e?i={overlayX:"end",overlayY:"center"}:(t=="after"||t=="right"&&e||t=="left"&&!e)&&(i={overlayX:"start",overlayY:"center"});let{x:a,y:o}=this._invertPosition(i.overlayX,i.overlayY);return{main:i,fallback:{overlayX:a,overlayY:o}}}_updateTooltipMessage(){this._tooltipInstance&&(this._tooltipInstance.message=this.message,this._tooltipInstance._markForCheck(),he(()=>{this._tooltipInstance&&this._overlayRef.updatePosition()},{injector:this._injector}))}_setTooltipClass(e){this._tooltipInstance&&(this._tooltipInstance.tooltipClass=e instanceof Set?Array.from(e):e,this._tooltipInstance._markForCheck())}_invertPosition(e,t){return this.position==="above"||this.position==="below"?t==="top"?t="bottom":t==="bottom"&&(t="top"):e==="end"?e="start":e==="start"&&(e="end"),{x:e,y:t}}_updateCurrentPositionClass(e){let{overlayY:t,originX:i,originY:a}=e,o;if(t==="center"?this._dir&&this._dir.value==="rtl"?o=i==="end"?"left":"right":o=i==="start"?"left":"right":o=t==="bottom"&&a==="top"?"above":"below",o!==this._currentPosition){let m=this._overlayRef;if(m){let _=`${this._cssClassPrefix}-${cn}-`;m.removePanelClass(_+this._currentPosition),m.addPanelClass(_+o)}this._currentPosition=o}}_setupPointerEnterEventsIfNeeded(){this._disabled||!this.message||!this._viewInitialized||this._eventCleanups.length||(this._isTouchPlatform()?this.touchGestures!=="off"&&(this._disableNativeGesturesIfNecessary(),this._addListener("touchstart",e=>{let t=e.targetTouches?.[0],i=t?{x:t.clientX,y:t.clientY}:void 0;this._setupPointerExitEventsIfNeeded(),this._touchstartTimeout&&clearTimeout(this._touchstartTimeout);let a=500;this._touchstartTimeout=setTimeout(()=>{this._touchstartTimeout=null,this.show(void 0,i)},this._defaultOptions?.touchLongPressShowDelay??a)})):this._addListener("mouseenter",e=>{this._setupPointerExitEventsIfNeeded();let t;e.x!==void 0&&e.y!==void 0&&(t=e),this.show(void 0,t)}))}_setupPointerExitEventsIfNeeded(){if(!this._pointerExitEventsInitialized){if(this._pointerExitEventsInitialized=!0,!this._isTouchPlatform())this._addListener("mouseleave",e=>{let t=e.relatedTarget;(!t||!this._overlayRef?.overlayElement.contains(t))&&this.hide()}),this._addListener("wheel",e=>{if(this._isTooltipVisible()){let t=this._document.elementFromPoint(e.clientX,e.clientY),i=this._elementRef.nativeElement;t!==i&&!i.contains(t)&&this.hide()}});else if(this.touchGestures!=="off"){this._disableNativeGesturesIfNecessary();let e=()=>{this._touchstartTimeout&&clearTimeout(this._touchstartTimeout),this.hide(this._defaultOptions?.touchendHideDelay)};this._addListener("touchend",e),this._addListener("touchcancel",e)}}}_addListener(e,t){this._eventCleanups.push(this._renderer.listen(this._elementRef.nativeElement,e,t,ir))}_isTouchPlatform(){let e=this._defaultOptions?.detectHoverCapability;return typeof e=="function"?!e():this._platform.IOS||this._platform.ANDROID?!0:this._platform.isBrowser?!!e&&this._mediaMatcher.matchMedia("(any-hover: none)").matches:!1}_disableNativeGesturesIfNecessary(){let e=this.touchGestures;if(e!=="off"){let t=this._elementRef.nativeElement,i=t.style;(e==="on"||t.nodeName!=="INPUT"&&t.nodeName!=="TEXTAREA")&&(i.userSelect=i.msUserSelect=i.webkitUserSelect=i.MozUserSelect="none"),(e==="on"||!t.draggable)&&(i.webkitUserDrag="none"),i.touchAction="none",i.webkitTapHighlightColor="transparent"}}_syncAriaDescription(e){this._ariaDescriptionPending||(this._ariaDescriptionPending=!0,this._ariaDescriber.removeDescription(this._elementRef.nativeElement,e,"tooltip"),this._isDestroyed||he({write:()=>{this._ariaDescriptionPending=!1,this.message&&!this.disabled&&this._ariaDescriber.describe(this._elementRef.nativeElement,this.message,"tooltip")}},{injector:this._injector}))}_overlayEventPredicate=e=>e.type==="keydown"?this._isTooltipVisible()&&e.keyCode===27&&!ee(e):!0;static \u0275fac=function(t){return new(t||n)};static \u0275dir=j({type:n,selectors:[["","matTooltip",""]],hostAttrs:[1,"mat-mdc-tooltip-trigger"],hostVars:2,hostBindings:function(t,i){t&2&&S("mat-mdc-tooltip-disabled",i.disabled)},inputs:{position:[0,"matTooltipPosition","position"],positionAtOrigin:[0,"matTooltipPositionAtOrigin","positionAtOrigin"],disabled:[0,"matTooltipDisabled","disabled"],showDelay:[0,"matTooltipShowDelay","showDelay"],hideDelay:[0,"matTooltipHideDelay","hideDelay"],touchGestures:[0,"matTooltipTouchGestures","touchGestures"],message:[0,"matTooltip","message"],tooltipClass:[0,"matTooltipClass","tooltipClass"]},exportAs:["matTooltip"]})}return n})(),sr=(()=>{class n{_changeDetectorRef=s(N);_elementRef=s(V);_isMultiline=!1;message;tooltipClass;_showTimeoutId;_hideTimeoutId;_triggerElement;_mouseLeaveHideDelay;_animationsDisabled=te();_tooltip;_closeOnInteraction=!1;_isVisible=!1;_onHide=new F;_showAnimation="mat-mdc-tooltip-show";_hideAnimation="mat-mdc-tooltip-hide";constructor(){}show(e){this._hideTimeoutId!=null&&clearTimeout(this._hideTimeoutId),this._showTimeoutId=setTimeout(()=>{this._toggleVisibility(!0),this._showTimeoutId=void 0},e)}hide(e){this._showTimeoutId!=null&&clearTimeout(this._showTimeoutId),this._hideTimeoutId=setTimeout(()=>{this._toggleVisibility(!1),this._hideTimeoutId=void 0},e)}afterHidden(){return this._onHide}isVisible(){return this._isVisible}ngOnDestroy(){this._cancelPendingAnimations(),this._onHide.complete(),this._triggerElement=null}_handleBodyInteraction(){this._closeOnInteraction&&this.hide(0)}_markForCheck(){this._changeDetectorRef.markForCheck()}_handleMouseLeave({relatedTarget:e}){(!e||!this._triggerElement.contains(e))&&(this.isVisible()?this.hide(this._mouseLeaveHideDelay):this._finalizeAnimation(!1))}_onShow(){this._isMultiline=this._isTooltipMultiline(),this._markForCheck()}_isTooltipMultiline(){let e=this._elementRef.nativeElement.getBoundingClientRect();return e.height>rr&&e.width>=or}_handleAnimationEnd({animationName:e}){(e===this._showAnimation||e===this._hideAnimation)&&this._finalizeAnimation(e===this._showAnimation)}_cancelPendingAnimations(){this._showTimeoutId!=null&&clearTimeout(this._showTimeoutId),this._hideTimeoutId!=null&&clearTimeout(this._hideTimeoutId),this._showTimeoutId=this._hideTimeoutId=void 0}_finalizeAnimation(e){e?this._closeOnInteraction=!0:this.isVisible()||this._onHide.next()}_toggleVisibility(e){let t=this._tooltip.nativeElement,i=this._showAnimation,a=this._hideAnimation;if(t.classList.remove(e?a:i),t.classList.add(e?i:a),this._isVisible!==e&&(this._isVisible=e,this._changeDetectorRef.markForCheck()),e&&!this._animationsDisabled&&typeof getComputedStyle=="function"){let o=getComputedStyle(t);(o.getPropertyValue("animation-duration")==="0s"||o.getPropertyValue("animation-name")==="none")&&(this._animationsDisabled=!0)}e&&this._onShow(),this._animationsDisabled&&(t.classList.add("_mat-animation-noopable"),this._finalizeAnimation(e))}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=b({type:n,selectors:[["mat-tooltip-component"]],viewQuery:function(t,i){if(t&1&&q(Zn,7),t&2){let a;w(a=D())&&(i._tooltip=a.first)}},hostAttrs:["aria-hidden","true"],hostBindings:function(t,i){t&1&&u("mouseleave",function(o){return i._handleMouseLeave(o)})},decls:4,vars:5,consts:[["tooltip",""],[1,"mdc-tooltip","mat-mdc-tooltip",3,"animationend"],[1,"mat-mdc-tooltip-surface","mdc-tooltip__surface"]],template:function(t,i){t&1&&(L(0,"div",1,0),Ct("animationend",function(o){return i._handleAnimationEnd(o)}),L(2,"div",2),h(3),B()()),t&2&&(Q(i.tooltipClass),S("mdc-tooltip--multiline",i._isMultiline),d(3),I(i.message))},styles:[`.mat-mdc-tooltip {
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
`],encapsulation:2,changeDetection:0})}return n})();var cr=["mat-calendar-body",""];function lr(n,r){return this._trackRow(r)}var gn=(n,r)=>r.id;function dr(n,r){if(n&1&&(L(0,"tr",0)(1,"td",3),h(2),B()()),n&2){let e=p();d(),Ye("padding-top",e._cellPadding)("padding-bottom",e._cellPadding),f("colspan",e.numCols),d(),G(" ",e.label," ")}}function mr(n,r){if(n&1&&(L(0,"td",3),h(1),B()),n&2){let e=p(2);Ye("padding-top",e._cellPadding)("padding-bottom",e._cellPadding),f("colspan",e._firstRowOffset),d(),G(" ",e._firstRowOffset>=e.labelMinRequiredCells?e.label:""," ")}}function hr(n,r){if(n&1){let e=U();L(0,"td",6)(1,"button",7),Ct("click",function(i){let a=A(e).$implicit,o=p(2);return E(o._cellClicked(a,i))})("focus",function(i){let a=A(e).$implicit,o=p(2);return E(o._emitActiveDateChange(a,i))}),L(2,"span",8),h(3),B(),Be(4,"span",9),B()()}if(n&2){let e=r.$implicit,t=r.$index,i=p().$index,a=p();Ye("width",a._cellWidth)("padding-top",a._cellPadding)("padding-bottom",a._cellPadding),f("data-mat-row",i)("data-mat-col",t),d(),Q(e.cssClasses),S("mat-calendar-body-disabled",!e.enabled)("mat-calendar-body-active",a._isActiveCell(i,t))("mat-calendar-body-range-start",a._isRangeStart(e.compareValue))("mat-calendar-body-range-end",a._isRangeEnd(e.compareValue))("mat-calendar-body-in-range",a._isInRange(e.compareValue))("mat-calendar-body-comparison-bridge-start",a._isComparisonBridgeStart(e.compareValue,i,t))("mat-calendar-body-comparison-bridge-end",a._isComparisonBridgeEnd(e.compareValue,i,t))("mat-calendar-body-comparison-start",a._isComparisonStart(e.compareValue))("mat-calendar-body-comparison-end",a._isComparisonEnd(e.compareValue))("mat-calendar-body-in-comparison-range",a._isInComparisonRange(e.compareValue))("mat-calendar-body-preview-start",a._isPreviewStart(e.compareValue))("mat-calendar-body-preview-end",a._isPreviewEnd(e.compareValue))("mat-calendar-body-in-preview",a._isInPreview(e.compareValue)),Z("tabIndex",a._isActiveCell(i,t)?0:-1),f("aria-label",e.ariaLabel)("aria-disabled",!e.enabled||null)("aria-pressed",a._isSelected(e.compareValue))("aria-current",a.todayValue===e.compareValue?"date":null)("aria-describedby",a._getDescribedby(e.compareValue)),d(),S("mat-calendar-body-selected",a._isSelected(e.compareValue))("mat-calendar-body-comparison-identical",a._isComparisonIdentical(e.compareValue))("mat-calendar-body-today",a.todayValue===e.compareValue),d(),G(" ",e.displayValue," ")}}function pr(n,r){if(n&1&&(L(0,"tr",1),x(1,mr,2,6,"td",4),oe(2,hr,5,49,"td",5,gn),B()),n&2){let e=r.$implicit,t=r.$index,i=p();d(),k(t===0&&i._firstRowOffset?1:-1),d(),se(e)}}function ur(n,r){if(n&1&&(c(0,"th",2)(1,"span",6),h(2),l(),c(3,"span",3),h(4),l()()),n&2){let e=r.$implicit;d(2),I(e.long),d(2),I(e.narrow)}}var _r=["*"];function gr(n,r){}function fr(n,r){if(n&1){let e=U();c(0,"mat-month-view",4),xt("activeDateChange",function(i){A(e);let a=p();return Dt(a.activeDate,i)||(a.activeDate=i),E(i)}),u("_userSelection",function(i){A(e);let a=p();return E(a._dateSelected(i))})("dragStarted",function(i){A(e);let a=p();return E(a._dragStarted(i))})("dragEnded",function(i){A(e);let a=p();return E(a._dragEnded(i))}),l()}if(n&2){let e=p();wt("activeDate",e.activeDate),C("selected",e.selected)("dateFilter",e.dateFilter)("maxDate",e.maxDate)("minDate",e.minDate)("dateClass",e.dateClass)("comparisonStart",e.comparisonStart)("comparisonEnd",e.comparisonEnd)("startDateAccessibleName",e.startDateAccessibleName)("endDateAccessibleName",e.endDateAccessibleName)("activeDrag",e._activeDrag)}}function vr(n,r){if(n&1){let e=U();c(0,"mat-year-view",5),xt("activeDateChange",function(i){A(e);let a=p();return Dt(a.activeDate,i)||(a.activeDate=i),E(i)}),u("monthSelected",function(i){A(e);let a=p();return E(a._monthSelectedInYearView(i))})("selectedChange",function(i){A(e);let a=p();return E(a._goToDateInView(i,"month"))}),l()}if(n&2){let e=p();wt("activeDate",e.activeDate),C("selected",e.selected)("dateFilter",e.dateFilter)("maxDate",e.maxDate)("minDate",e.minDate)("dateClass",e.dateClass)}}function br(n,r){if(n&1){let e=U();c(0,"mat-multi-year-view",6),xt("activeDateChange",function(i){A(e);let a=p();return Dt(a.activeDate,i)||(a.activeDate=i),E(i)}),u("yearSelected",function(i){A(e);let a=p();return E(a._yearSelectedInMultiYearView(i))})("selectedChange",function(i){A(e);let a=p();return E(a._goToDateInView(i,"year"))}),l()}if(n&2){let e=p();wt("activeDate",e.activeDate),C("selected",e.selected)("dateFilter",e.dateFilter)("maxDate",e.maxDate)("minDate",e.minDate)("dateClass",e.dateClass)}}function yr(n,r){}var Cr=["button"],wr=[[["","matDatepickerToggleIcon",""]]],Dr=["[matDatepickerToggleIcon]"];function xr(n,r){n&1&&(re(),c(0,"svg",2),y(1,"path",3),l())}var ot=(()=>{class n{changes=new F;calendarLabel="Calendar";openCalendarLabel="Open calendar";closeCalendarLabel="Close calendar";prevMonthLabel="Previous month";nextMonthLabel="Next month";prevYearLabel="Previous year";nextYearLabel="Next year";prevMultiYearLabel="Previous 24 years";nextMultiYearLabel="Next 24 years";switchToMonthViewLabel="Choose date";switchToMultiYearViewLabel="Choose month and year";startDateLabel="Start date";endDateLabel="End date";comparisonDateLabel="Comparison range";formatYearRange(e,t){return`${e} \u2013 ${t}`}formatYearRangeLabel(e,t){return`${e} to ${t}`}static \u0275fac=function(t){return new(t||n)};static \u0275prov=ne({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),kr=0,gt=class{value;displayValue;ariaLabel;enabled;compareValue;rawValue;id=kr++;cssClasses;constructor(r,e,t,i,a,o=r,m){this.value=r,this.displayValue=e,this.ariaLabel=t,this.enabled=i,this.compareValue=o,this.rawValue=m,this.cssClasses=a instanceof Set?Array.from(a):a}},Mr={passive:!1,capture:!0},Yt={passive:!0,capture:!0},dn={passive:!0},rt=(()=>{class n{_elementRef=s(V);_ngZone=s(me);_platform=s(Ze);_intl=s(ot);_eventCleanups;_skipNextFocus=!1;_focusActiveCellAfterViewChecked=!1;label;rows;todayValue;startValue;endValue;labelMinRequiredCells;numCols=7;activeCell=0;ngAfterViewChecked(){this._focusActiveCellAfterViewChecked&&(this._focusActiveCell(),this._focusActiveCellAfterViewChecked=!1)}isRange=!1;cellAspectRatio=1;comparisonStart=null;comparisonEnd=null;previewStart=null;previewEnd=null;startDateAccessibleName=null;endDateAccessibleName=null;selectedValueChange=new g;previewChange=new g;activeDateChange=new g;dragStarted=new g;dragEnded=new g;_firstRowOffset;_cellPadding;_cellWidth;_startDateLabelId;_endDateLabelId;_comparisonStartDateLabelId;_comparisonEndDateLabelId;_didDragSinceMouseDown=!1;_injector=s($);comparisonDateAccessibleName=this._intl.comparisonDateLabel;_trackRow=e=>e;constructor(){let e=s(Ce),t=s(le);this._startDateLabelId=t.getId("mat-calendar-body-start-"),this._endDateLabelId=t.getId("mat-calendar-body-end-"),this._comparisonStartDateLabelId=t.getId("mat-calendar-body-comparison-start-"),this._comparisonEndDateLabelId=t.getId("mat-calendar-body-comparison-end-"),s(be).load(je),this._ngZone.runOutsideAngular(()=>{let i=this._elementRef.nativeElement,a=[e.listen(i,"touchmove",this._touchmoveHandler,Mr),e.listen(i,"mouseenter",this._enterHandler,Yt),e.listen(i,"focus",this._enterHandler,Yt),e.listen(i,"mouseleave",this._leaveHandler,Yt),e.listen(i,"blur",this._leaveHandler,Yt),e.listen(i,"mousedown",this._mousedownHandler,dn),e.listen(i,"touchstart",this._mousedownHandler,dn)];this._platform.isBrowser&&a.push(e.listen("window","mouseup",this._mouseupHandler),e.listen("window","touchend",this._touchendHandler)),this._eventCleanups=a})}_cellClicked(e,t){this._didDragSinceMouseDown||e.enabled&&this.selectedValueChange.emit({value:e.value,event:t})}_emitActiveDateChange(e,t){e.enabled&&this.activeDateChange.emit({value:e.value,event:t})}_isSelected(e){return this.startValue===e||this.endValue===e}ngOnChanges(e){let t=e.numCols,{rows:i,numCols:a}=this;(e.rows||t)&&(this._firstRowOffset=i&&i.length&&i[0].length?a-i[0].length:0),(e.cellAspectRatio||t||!this._cellPadding)&&(this._cellPadding=`${50*this.cellAspectRatio/a}%`),(t||!this._cellWidth)&&(this._cellWidth=`${100/a}%`)}ngOnDestroy(){this._eventCleanups.forEach(e=>e())}_isActiveCell(e,t){let i=e*this.numCols+t;return e&&(i-=this._firstRowOffset),i==this.activeCell}_focusActiveCell(e=!0){he(()=>{setTimeout(()=>{let t=this._elementRef.nativeElement.querySelector(".mat-calendar-body-active");t&&(e||(this._skipNextFocus=!0),t.focus())})},{injector:this._injector})}_scheduleFocusActiveCellAfterViewChecked(){this._focusActiveCellAfterViewChecked=!0}_isRangeStart(e){return Ci(e,this.startValue,this.endValue)}_isRangeEnd(e){return wi(e,this.startValue,this.endValue)}_isInRange(e){return Di(e,this.startValue,this.endValue,this.isRange)}_isComparisonStart(e){return Ci(e,this.comparisonStart,this.comparisonEnd)}_isComparisonBridgeStart(e,t,i){if(!this._isComparisonStart(e)||this._isRangeStart(e)||!this._isInRange(e))return!1;let a=this.rows[t][i-1];if(!a){let o=this.rows[t-1];a=o&&o[o.length-1]}return a&&!this._isRangeEnd(a.compareValue)}_isComparisonBridgeEnd(e,t,i){if(!this._isComparisonEnd(e)||this._isRangeEnd(e)||!this._isInRange(e))return!1;let a=this.rows[t][i+1];if(!a){let o=this.rows[t+1];a=o&&o[0]}return a&&!this._isRangeStart(a.compareValue)}_isComparisonEnd(e){return wi(e,this.comparisonStart,this.comparisonEnd)}_isInComparisonRange(e){return Di(e,this.comparisonStart,this.comparisonEnd,this.isRange)}_isComparisonIdentical(e){return this.comparisonStart===this.comparisonEnd&&e===this.comparisonStart}_isPreviewStart(e){return Ci(e,this.previewStart,this.previewEnd)}_isPreviewEnd(e){return wi(e,this.previewStart,this.previewEnd)}_isInPreview(e){return Di(e,this.previewStart,this.previewEnd,this.isRange)}_getDescribedby(e){if(!this.isRange)return null;if(this.startValue===e&&this.endValue===e)return`${this._startDateLabelId} ${this._endDateLabelId}`;if(this.startValue===e)return this._startDateLabelId;if(this.endValue===e)return this._endDateLabelId;if(this.comparisonStart!==null&&this.comparisonEnd!==null){if(e===this.comparisonStart&&e===this.comparisonEnd)return`${this._comparisonStartDateLabelId} ${this._comparisonEndDateLabelId}`;if(e===this.comparisonStart)return this._comparisonStartDateLabelId;if(e===this.comparisonEnd)return this._comparisonEndDateLabelId}return null}_enterHandler=e=>{if(this._skipNextFocus&&e.type==="focus"){this._skipNextFocus=!1;return}if(e.target&&this.isRange){let t=this._getCellFromElement(e.target);t&&this._ngZone.run(()=>this.previewChange.emit({value:t.enabled?t:null,event:e}))}};_touchmoveHandler=e=>{if(!this.isRange)return;let t=mn(e),i=t?this._getCellFromElement(t):null;t!==e.target&&(this._didDragSinceMouseDown=!0),yi(e.target)&&e.preventDefault(),this._ngZone.run(()=>this.previewChange.emit({value:i?.enabled?i:null,event:e}))};_leaveHandler=e=>{this.previewEnd!==null&&this.isRange&&(e.type!=="blur"&&(this._didDragSinceMouseDown=!0),e.target&&this._getCellFromElement(e.target)&&!(e.relatedTarget&&this._getCellFromElement(e.relatedTarget))&&this._ngZone.run(()=>this.previewChange.emit({value:null,event:e})))};_mousedownHandler=e=>{if(!this.isRange)return;this._didDragSinceMouseDown=!1;let t=e.target&&this._getCellFromElement(e.target);!t||!this._isInRange(t.compareValue)||this._ngZone.run(()=>{this.dragStarted.emit({value:t.rawValue,event:e})})};_mouseupHandler=e=>{if(!this.isRange)return;let t=yi(e.target);if(!t){this._ngZone.run(()=>{this.dragEnded.emit({value:null,event:e})});return}t.closest(".mat-calendar-body")===this._elementRef.nativeElement&&this._ngZone.run(()=>{let i=this._getCellFromElement(t);this.dragEnded.emit({value:i?.rawValue??null,event:e})})};_touchendHandler=e=>{let t=mn(e);t&&this._mouseupHandler({target:t})};_getCellFromElement(e){let t=yi(e);if(t){let i=t.getAttribute("data-mat-row"),a=t.getAttribute("data-mat-col");if(i&&a)return this.rows[parseInt(i)]?.[parseInt(a)]||null}return null}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=b({type:n,selectors:[["","mat-calendar-body",""]],hostAttrs:[1,"mat-calendar-body"],inputs:{label:"label",rows:"rows",todayValue:"todayValue",startValue:"startValue",endValue:"endValue",labelMinRequiredCells:"labelMinRequiredCells",numCols:"numCols",activeCell:"activeCell",isRange:"isRange",cellAspectRatio:"cellAspectRatio",comparisonStart:"comparisonStart",comparisonEnd:"comparisonEnd",previewStart:"previewStart",previewEnd:"previewEnd",startDateAccessibleName:"startDateAccessibleName",endDateAccessibleName:"endDateAccessibleName"},outputs:{selectedValueChange:"selectedValueChange",previewChange:"previewChange",activeDateChange:"activeDateChange",dragStarted:"dragStarted",dragEnded:"dragEnded"},exportAs:["matCalendarBody"],features:[W],attrs:cr,decls:11,vars:11,consts:[["aria-hidden","true"],["role","row"],[1,"mat-calendar-body-hidden-label",3,"id"],[1,"mat-calendar-body-label"],[1,"mat-calendar-body-label",3,"paddingTop","paddingBottom"],["role","gridcell",1,"mat-calendar-body-cell-container",3,"width","paddingTop","paddingBottom"],["role","gridcell",1,"mat-calendar-body-cell-container"],["type","button",1,"mat-calendar-body-cell",3,"click","focus","tabindex"],[1,"mat-calendar-body-cell-content","mat-focus-indicator"],["aria-hidden","true",1,"mat-calendar-body-cell-preview"]],template:function(t,i){t&1&&(x(0,dr,3,6,"tr",0),oe(1,pr,4,1,"tr",1,lr,!0),L(3,"span",2),h(4),B(),L(5,"span",2),h(6),B(),L(7,"span",2),h(8),B(),L(9,"span",2),h(10),B()),t&2&&(k(i._firstRowOffset<i.labelMinRequiredCells?0:-1),d(),se(i.rows),d(2),Z("id",i._startDateLabelId),d(),G(" ",i.startDateAccessibleName,`
`),d(),Z("id",i._endDateLabelId),d(),G(" ",i.endDateAccessibleName,`
`),d(),Z("id",i._comparisonStartDateLabelId),d(),dt(" ",i.comparisonDateAccessibleName," ",i.startDateAccessibleName,`
`),d(),Z("id",i._comparisonEndDateLabelId),d(),dt(" ",i.comparisonDateAccessibleName," ",i.endDateAccessibleName,`
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
`],encapsulation:2,changeDetection:0})}return n})();function bi(n){return n?.nodeName==="TD"}function yi(n){let r;return bi(n)?r=n:bi(n.parentNode)?r=n.parentNode:bi(n.parentNode?.parentNode)&&(r=n.parentNode.parentNode),r?.getAttribute("data-mat-row")!=null?r:null}function Ci(n,r,e){return e!==null&&r!==e&&n<e&&n===r}function wi(n,r,e){return r!==null&&r!==e&&n>=r&&n===e}function Di(n,r,e,t){return t&&r!==null&&e!==null&&r!==e&&n>=r&&n<=e}function mn(n){let r=n.changedTouches[0];return document.elementFromPoint(r.clientX,r.clientY)}var de=class{start;end;_disableStructuralEquivalency;constructor(r,e){this.start=r,this.end=e}},ft=(()=>{class n{selection;_adapter;_selectionChanged=new F;selectionChanged=this._selectionChanged;constructor(e,t){this.selection=e,this._adapter=t,this.selection=e}updateSelection(e,t){let i=this.selection;this.selection=e,this._selectionChanged.next({selection:e,source:t,oldValue:i})}ngOnDestroy(){this._selectionChanged.complete()}_isValidDateInstance(e){return this._adapter.isDateInstance(e)&&this._adapter.isValid(e)}static \u0275fac=function(t){Ji()};static \u0275prov=ne({token:n,factory:n.\u0275fac})}return n})(),Ar=(()=>{class n extends ft{constructor(e){super(null,e)}add(e){super.updateSelection(e,this)}isValid(){return this.selection!=null&&this._isValidDateInstance(this.selection)}isComplete(){return this.selection!=null}clone(){let e=new n(this._adapter);return e.updateSelection(this.selection,this),e}static \u0275fac=function(t){return new(t||n)(Xi(K))};static \u0275prov=ne({token:n,factory:n.\u0275fac})}return n})();var fn={provide:ft,useFactory:()=>s(ft,{optional:!0,skipSelf:!0})||new Ar(s(K))};var vn=new R("MAT_DATE_RANGE_SELECTION_STRATEGY");var xi=7,Er=0,hn=(()=>{class n{_changeDetectorRef=s(N);_dateFormats=s(Ve,{optional:!0});_dateAdapter=s(K,{optional:!0});_dir=s(we,{optional:!0});_rangeStrategy=s(vn,{optional:!0});_rerenderSubscription=ue.EMPTY;_selectionKeyPressed=!1;get activeDate(){return this._activeDate}set activeDate(e){let t=this._activeDate,i=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))||this._dateAdapter.today();this._activeDate=this._dateAdapter.clampDate(i,this.minDate,this.maxDate),this._hasSameMonthAndYear(t,this._activeDate)||this._init()}_activeDate;get selected(){return this._selected}set selected(e){e instanceof de?this._selected=e:this._selected=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e)),this._setRanges(this._selected)}_selected=null;get minDate(){return this._minDate}set minDate(e){this._minDate=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_minDate=null;get maxDate(){return this._maxDate}set maxDate(e){this._maxDate=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_maxDate=null;dateFilter;dateClass;comparisonStart=null;comparisonEnd=null;startDateAccessibleName=null;endDateAccessibleName=null;activeDrag=null;selectedChange=new g;_userSelection=new g;dragStarted=new g;dragEnded=new g;activeDateChange=new g;_matCalendarBody;_monthLabel=M("");_weeks=M([]);_firstWeekOffset=M(0);_rangeStart=M(null);_rangeEnd=M(null);_comparisonRangeStart=M(null);_comparisonRangeEnd=M(null);_previewStart=M(null);_previewEnd=M(null);_isRange=M(!1);_todayDate=M(null);_weekdays=M([]);constructor(){s(be).load(We),this._activeDate=this._dateAdapter.today()}ngAfterContentInit(){this._rerenderSubscription=this._dateAdapter.localeChanges.pipe(Se(null)).subscribe(()=>this._init())}ngOnChanges(e){let t=e.comparisonStart||e.comparisonEnd;t&&!t.firstChange&&this._setRanges(this.selected),e.activeDrag&&!this.activeDrag&&this._clearPreview()}ngOnDestroy(){this._rerenderSubscription.unsubscribe()}_dateSelected(e){let t=e.value,i=this._getDateFromDayOfMonth(t),a,o;this._selected instanceof de?(a=this._getDateInCurrentMonth(this._selected.start),o=this._getDateInCurrentMonth(this._selected.end)):a=o=this._getDateInCurrentMonth(this._selected),(a!==t||o!==t)&&this.selectedChange.emit(i),this._userSelection.emit({value:i,event:e.event}),this._clearPreview(),this._changeDetectorRef.markForCheck()}_updateActiveDate(e){let t=e.value,i=this._activeDate;this.activeDate=this._getDateFromDayOfMonth(t),this._dateAdapter.compareDate(i,this.activeDate)&&this.activeDateChange.emit(this._activeDate)}_handleCalendarBodyKeydown(e){let t=this._activeDate,i=this._isRtl();switch(e.keyCode){case 37:this.activeDate=this._dateAdapter.addCalendarDays(this._activeDate,i?1:-1);break;case 39:this.activeDate=this._dateAdapter.addCalendarDays(this._activeDate,i?-1:1);break;case 38:this.activeDate=this._dateAdapter.addCalendarDays(this._activeDate,-7);break;case 40:this.activeDate=this._dateAdapter.addCalendarDays(this._activeDate,7);break;case 36:this.activeDate=this._dateAdapter.addCalendarDays(this._activeDate,1-this._dateAdapter.getDate(this._activeDate));break;case 35:this.activeDate=this._dateAdapter.addCalendarDays(this._activeDate,this._dateAdapter.getNumDaysInMonth(this._activeDate)-this._dateAdapter.getDate(this._activeDate));break;case 33:this.activeDate=e.altKey?this._dateAdapter.addCalendarYears(this._activeDate,-1):this._dateAdapter.addCalendarMonths(this._activeDate,-1);break;case 34:this.activeDate=e.altKey?this._dateAdapter.addCalendarYears(this._activeDate,1):this._dateAdapter.addCalendarMonths(this._activeDate,1);break;case 13:case 32:this._selectionKeyPressed=!0,this._canSelect(this._activeDate)&&e.preventDefault();return;case 27:this._previewEnd()!=null&&!ee(e)&&(this._clearPreview(),this.activeDrag?this.dragEnded.emit({value:null,event:e}):(this.selectedChange.emit(null),this._userSelection.emit({value:null,event:e})),e.preventDefault(),e.stopPropagation());return;default:return}this._dateAdapter.compareDate(t,this.activeDate)&&(this.activeDateChange.emit(this.activeDate),this._focusActiveCellAfterViewChecked()),e.preventDefault()}_handleCalendarBodyKeyup(e){(e.keyCode===32||e.keyCode===13)&&(this._selectionKeyPressed&&this._canSelect(this._activeDate)&&this._dateSelected({value:this._dateAdapter.getDate(this._activeDate),event:e}),this._selectionKeyPressed=!1)}_init(){this._setRanges(this.selected),this._todayDate.set(this._getCellCompareValue(this._dateAdapter.today())),this._monthLabel.set(this._dateFormats.display.monthLabel?this._dateAdapter.format(this.activeDate,this._dateFormats.display.monthLabel):this._dateAdapter.getMonthNames("short")[this._dateAdapter.getMonth(this.activeDate)].toLocaleUpperCase());let e=this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate),this._dateAdapter.getMonth(this.activeDate),1);this._firstWeekOffset.set((xi+this._dateAdapter.getDayOfWeek(e)-this._dateAdapter.getFirstDayOfWeek())%xi),this._initWeekdays(),this._createWeekCells(),this._changeDetectorRef.markForCheck()}_focusActiveCell(e){this._matCalendarBody._focusActiveCell(e)}_focusActiveCellAfterViewChecked(){this._matCalendarBody._scheduleFocusActiveCellAfterViewChecked()}_previewChanged({event:e,value:t}){if(this._rangeStrategy){let i=t?t.rawValue:null,a=this._rangeStrategy.createPreview(i,this.selected,e);if(this._previewStart.set(this._getCellCompareValue(a.start)),this._previewEnd.set(this._getCellCompareValue(a.end)),this.activeDrag&&i){let o=this._rangeStrategy.createDrag?.(this.activeDrag.value,this.selected,i,e);o&&(this._previewStart.set(this._getCellCompareValue(o.start)),this._previewEnd.set(this._getCellCompareValue(o.end)))}}}_dragEnded(e){if(this.activeDrag)if(e.value){let t=this._rangeStrategy?.createDrag?.(this.activeDrag.value,this.selected,e.value,e.event);this.dragEnded.emit({value:t??null,event:e.event})}else this.dragEnded.emit({value:null,event:e.event})}_getDateFromDayOfMonth(e){return this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate),this._dateAdapter.getMonth(this.activeDate),e)}_initWeekdays(){let e=this._dateAdapter.getFirstDayOfWeek(),t=this._dateAdapter.getDayOfWeekNames("narrow"),a=this._dateAdapter.getDayOfWeekNames("long").map((o,m)=>({long:o,narrow:t[m],id:Er++}));this._weekdays.set(a.slice(e).concat(a.slice(0,e)))}_createWeekCells(){let e=this._dateAdapter.getNumDaysInMonth(this.activeDate),t=this._dateAdapter.getDateNames(),i=[[]];for(let a=0,o=this._firstWeekOffset();a<e;a++,o++){o==xi&&(i.push([]),o=0);let m=this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate),this._dateAdapter.getMonth(this.activeDate),a+1),_=this._shouldEnableDate(m),v=this._dateAdapter.format(m,this._dateFormats.display.dateA11yLabel),O=this.dateClass?this.dateClass(m,"month"):void 0;i[i.length-1].push(new gt(a+1,t[a],v,_,O,this._getCellCompareValue(m),m))}this._weeks.set(i)}_shouldEnableDate(e){return!!e&&(!this.minDate||this._dateAdapter.compareDate(e,this.minDate)>=0)&&(!this.maxDate||this._dateAdapter.compareDate(e,this.maxDate)<=0)&&(!this.dateFilter||this.dateFilter(e))}_getDateInCurrentMonth(e){return e&&this._hasSameMonthAndYear(e,this.activeDate)?this._dateAdapter.getDate(e):null}_hasSameMonthAndYear(e,t){return!!(e&&t&&this._dateAdapter.getMonth(e)==this._dateAdapter.getMonth(t)&&this._dateAdapter.getYear(e)==this._dateAdapter.getYear(t))}_getCellCompareValue(e){if(e){let t=this._dateAdapter.getYear(e),i=this._dateAdapter.getMonth(e),a=this._dateAdapter.getDate(e);return new Date(t,i,a).getTime()}return null}_isRtl(){return this._dir&&this._dir.value==="rtl"}_setRanges(e){e instanceof de?(this._rangeStart.set(this._getCellCompareValue(e.start)),this._rangeEnd.set(this._getCellCompareValue(e.end)),this._isRange.set(!0)):(this._rangeStart.set(this._getCellCompareValue(e)),this._rangeEnd.set(this._rangeStart()),this._isRange.set(!1)),this._comparisonRangeStart.set(this._getCellCompareValue(this.comparisonStart)),this._comparisonRangeEnd.set(this._getCellCompareValue(this.comparisonEnd))}_canSelect(e){return!this.dateFilter||this.dateFilter(e)}_clearPreview(){this._previewStart.set(null),this._previewEnd.set(null)}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=b({type:n,selectors:[["mat-month-view"]],viewQuery:function(t,i){if(t&1&&q(rt,5),t&2){let a;w(a=D())&&(i._matCalendarBody=a.first)}},inputs:{activeDate:"activeDate",selected:"selected",minDate:"minDate",maxDate:"maxDate",dateFilter:"dateFilter",dateClass:"dateClass",comparisonStart:"comparisonStart",comparisonEnd:"comparisonEnd",startDateAccessibleName:"startDateAccessibleName",endDateAccessibleName:"endDateAccessibleName",activeDrag:"activeDrag"},outputs:{selectedChange:"selectedChange",_userSelection:"_userSelection",dragStarted:"dragStarted",dragEnded:"dragEnded",activeDateChange:"activeDateChange"},exportAs:["matMonthView"],features:[W],decls:8,vars:14,consts:[["role","grid",1,"mat-calendar-table"],[1,"mat-calendar-table-header"],["scope","col"],["aria-hidden","true"],["colspan","7",1,"mat-calendar-table-header-divider"],["mat-calendar-body","",3,"selectedValueChange","activeDateChange","previewChange","dragStarted","dragEnded","keyup","keydown","label","rows","todayValue","startValue","endValue","comparisonStart","comparisonEnd","previewStart","previewEnd","isRange","labelMinRequiredCells","activeCell","startDateAccessibleName","endDateAccessibleName"],[1,"cdk-visually-hidden"]],template:function(t,i){t&1&&(c(0,"table",0)(1,"thead",1)(2,"tr"),oe(3,ur,5,2,"th",2,gn),l(),c(5,"tr",3),y(6,"th",4),l()(),c(7,"tbody",5),u("selectedValueChange",function(o){return i._dateSelected(o)})("activeDateChange",function(o){return i._updateActiveDate(o)})("previewChange",function(o){return i._previewChanged(o)})("dragStarted",function(o){return i.dragStarted.emit(o)})("dragEnded",function(o){return i._dragEnded(o)})("keyup",function(o){return i._handleCalendarBodyKeyup(o)})("keydown",function(o){return i._handleCalendarBodyKeydown(o)}),l()()),t&2&&(d(3),se(i._weekdays()),d(4),C("label",i._monthLabel())("rows",i._weeks())("todayValue",i._todayDate())("startValue",i._rangeStart())("endValue",i._rangeEnd())("comparisonStart",i._comparisonRangeStart())("comparisonEnd",i._comparisonRangeEnd())("previewStart",i._previewStart())("previewEnd",i._previewEnd())("isRange",i._isRange())("labelMinRequiredCells",3)("activeCell",i._dateAdapter.getDate(i.activeDate)-1)("startDateAccessibleName",i.startDateAccessibleName)("endDateAccessibleName",i.endDateAccessibleName))},dependencies:[rt],encapsulation:2,changeDetection:0})}return n})(),ie=24,ki=4,pn=(()=>{class n{_changeDetectorRef=s(N);_dateAdapter=s(K,{optional:!0});_dir=s(we,{optional:!0});_rerenderSubscription=ue.EMPTY;_selectionKeyPressed=!1;get activeDate(){return this._activeDate}set activeDate(e){let t=this._activeDate,i=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))||this._dateAdapter.today();this._activeDate=this._dateAdapter.clampDate(i,this.minDate,this.maxDate),bn(this._dateAdapter,t,this._activeDate,this.minDate,this.maxDate)||this._init()}_activeDate;get selected(){return this._selected}set selected(e){e instanceof de?this._selected=e:this._selected=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e)),this._setSelectedYear(e)}_selected=null;get minDate(){return this._minDate}set minDate(e){this._minDate=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_minDate=null;get maxDate(){return this._maxDate}set maxDate(e){this._maxDate=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_maxDate=null;dateFilter;dateClass;selectedChange=new g;yearSelected=new g;activeDateChange=new g;_matCalendarBody;_years=M([]);_todayYear=M(0);_selectedYear=M(null);constructor(){this._dateAdapter,this._activeDate=this._dateAdapter.today()}ngAfterContentInit(){this._rerenderSubscription=this._dateAdapter.localeChanges.pipe(Se(null)).subscribe(()=>this._init())}ngOnDestroy(){this._rerenderSubscription.unsubscribe()}_init(){this._todayYear.set(this._dateAdapter.getYear(this._dateAdapter.today()));let t=this._dateAdapter.getYear(this._activeDate)-_t(this._dateAdapter,this.activeDate,this.minDate,this.maxDate),i=[];for(let a=0,o=[];a<ie;a++)o.push(t+a),o.length==ki&&(i.push(o.map(m=>this._createCellForYear(m))),o=[]);this._years.set(i),this._changeDetectorRef.markForCheck()}_yearSelected(e){let t=e.value,i=this._dateAdapter.createDate(t,0,1),a=this._getDateFromYear(t);this.yearSelected.emit(i),this.selectedChange.emit(a)}_updateActiveDate(e){let t=e.value,i=this._activeDate;this.activeDate=this._getDateFromYear(t),this._dateAdapter.compareDate(i,this.activeDate)&&this.activeDateChange.emit(this.activeDate)}_handleCalendarBodyKeydown(e){let t=this._activeDate,i=this._isRtl();switch(e.keyCode){case 37:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,i?1:-1);break;case 39:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,i?-1:1);break;case 38:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,-ki);break;case 40:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,ki);break;case 36:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,-_t(this._dateAdapter,this.activeDate,this.minDate,this.maxDate));break;case 35:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,ie-_t(this._dateAdapter,this.activeDate,this.minDate,this.maxDate)-1);break;case 33:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,e.altKey?-ie*10:-ie);break;case 34:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,e.altKey?ie*10:ie);break;case 13:case 32:this._selectionKeyPressed=!0;break;default:return}this._dateAdapter.compareDate(t,this.activeDate)&&this.activeDateChange.emit(this.activeDate),this._focusActiveCellAfterViewChecked(),e.preventDefault()}_handleCalendarBodyKeyup(e){(e.keyCode===32||e.keyCode===13)&&(this._selectionKeyPressed&&this._yearSelected({value:this._dateAdapter.getYear(this._activeDate),event:e}),this._selectionKeyPressed=!1)}_getActiveCell(){return _t(this._dateAdapter,this.activeDate,this.minDate,this.maxDate)}_focusActiveCell(){this._matCalendarBody._focusActiveCell()}_focusActiveCellAfterViewChecked(){this._matCalendarBody._scheduleFocusActiveCellAfterViewChecked()}_getDateFromYear(e){let t=this._dateAdapter.getMonth(this.activeDate),i=this._dateAdapter.getNumDaysInMonth(this._dateAdapter.createDate(e,t,1));return this._dateAdapter.createDate(e,t,Math.min(this._dateAdapter.getDate(this.activeDate),i))}_createCellForYear(e){let t=this._dateAdapter.createDate(e,0,1),i=this._dateAdapter.getYearName(t),a=this.dateClass?this.dateClass(t,"multi-year"):void 0;return new gt(e,i,i,this._shouldEnableYear(e),a)}_shouldEnableYear(e){if(e==null||this.maxDate&&e>this._dateAdapter.getYear(this.maxDate)||this.minDate&&e<this._dateAdapter.getYear(this.minDate))return!1;if(!this.dateFilter)return!0;let t=this._dateAdapter.createDate(e,0,1);for(let i=t;this._dateAdapter.getYear(i)==e;i=this._dateAdapter.addCalendarDays(i,1))if(this.dateFilter(i))return!0;return!1}_isRtl(){return this._dir&&this._dir.value==="rtl"}_setSelectedYear(e){if(this._selectedYear.set(null),e instanceof de){let t=e.start||e.end;t&&this._selectedYear.set(this._dateAdapter.getYear(t))}else e&&this._selectedYear.set(this._dateAdapter.getYear(e))}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=b({type:n,selectors:[["mat-multi-year-view"]],viewQuery:function(t,i){if(t&1&&q(rt,5),t&2){let a;w(a=D())&&(i._matCalendarBody=a.first)}},inputs:{activeDate:"activeDate",selected:"selected",minDate:"minDate",maxDate:"maxDate",dateFilter:"dateFilter",dateClass:"dateClass"},outputs:{selectedChange:"selectedChange",yearSelected:"yearSelected",activeDateChange:"activeDateChange"},exportAs:["matMultiYearView"],decls:5,vars:7,consts:[["role","grid",1,"mat-calendar-table"],["aria-hidden","true",1,"mat-calendar-table-header"],["colspan","4",1,"mat-calendar-table-header-divider"],["mat-calendar-body","",3,"selectedValueChange","activeDateChange","keyup","keydown","rows","todayValue","startValue","endValue","numCols","cellAspectRatio","activeCell"]],template:function(t,i){t&1&&(c(0,"table",0)(1,"thead",1)(2,"tr"),y(3,"th",2),l()(),c(4,"tbody",3),u("selectedValueChange",function(o){return i._yearSelected(o)})("activeDateChange",function(o){return i._updateActiveDate(o)})("keyup",function(o){return i._handleCalendarBodyKeyup(o)})("keydown",function(o){return i._handleCalendarBodyKeydown(o)}),l()()),t&2&&(d(4),C("rows",i._years())("todayValue",i._todayYear())("startValue",i._selectedYear())("endValue",i._selectedYear())("numCols",4)("cellAspectRatio",4/7)("activeCell",i._getActiveCell()))},dependencies:[rt],encapsulation:2,changeDetection:0})}return n})();function bn(n,r,e,t,i){let a=n.getYear(r),o=n.getYear(e),m=yn(n,t,i);return Math.floor((a-m)/ie)===Math.floor((o-m)/ie)}function _t(n,r,e,t){let i=n.getYear(r);return Sr(i-yn(n,e,t),ie)}function yn(n,r,e){let t=0;return e?t=n.getYear(e)-ie+1:r&&(t=n.getYear(r)),t}function Sr(n,r){return(n%r+r)%r}var un=(()=>{class n{_changeDetectorRef=s(N);_dateFormats=s(Ve,{optional:!0});_dateAdapter=s(K,{optional:!0});_dir=s(we,{optional:!0});_rerenderSubscription=ue.EMPTY;_selectionKeyPressed=!1;get activeDate(){return this._activeDate}set activeDate(e){let t=this._activeDate,i=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))||this._dateAdapter.today();this._activeDate=this._dateAdapter.clampDate(i,this.minDate,this.maxDate),this._dateAdapter.getYear(t)!==this._dateAdapter.getYear(this._activeDate)&&this._init()}_activeDate;get selected(){return this._selected}set selected(e){e instanceof de?this._selected=e:this._selected=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e)),this._setSelectedMonth(e)}_selected=null;get minDate(){return this._minDate}set minDate(e){this._minDate=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_minDate=null;get maxDate(){return this._maxDate}set maxDate(e){this._maxDate=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_maxDate=null;dateFilter;dateClass;selectedChange=new g;monthSelected=new g;activeDateChange=new g;_matCalendarBody;_months=M([]);_yearLabel=M("");_todayMonth=M(null);_selectedMonth=M(null);constructor(){this._activeDate=this._dateAdapter.today()}ngAfterContentInit(){this._rerenderSubscription=this._dateAdapter.localeChanges.pipe(Se(null)).subscribe(()=>this._init())}ngOnDestroy(){this._rerenderSubscription.unsubscribe()}_monthSelected(e){let t=e.value,i=this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate),t,1);this.monthSelected.emit(i);let a=this._getDateFromMonth(t);this.selectedChange.emit(a)}_updateActiveDate(e){let t=e.value,i=this._activeDate;this.activeDate=this._getDateFromMonth(t),this._dateAdapter.compareDate(i,this.activeDate)&&this.activeDateChange.emit(this.activeDate)}_handleCalendarBodyKeydown(e){let t=this._activeDate,i=this._isRtl();switch(e.keyCode){case 37:this.activeDate=this._dateAdapter.addCalendarMonths(this._activeDate,i?1:-1);break;case 39:this.activeDate=this._dateAdapter.addCalendarMonths(this._activeDate,i?-1:1);break;case 38:this.activeDate=this._dateAdapter.addCalendarMonths(this._activeDate,-4);break;case 40:this.activeDate=this._dateAdapter.addCalendarMonths(this._activeDate,4);break;case 36:this.activeDate=this._dateAdapter.addCalendarMonths(this._activeDate,-this._dateAdapter.getMonth(this._activeDate));break;case 35:this.activeDate=this._dateAdapter.addCalendarMonths(this._activeDate,11-this._dateAdapter.getMonth(this._activeDate));break;case 33:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,e.altKey?-10:-1);break;case 34:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,e.altKey?10:1);break;case 13:case 32:this._selectionKeyPressed=!0;break;default:return}this._dateAdapter.compareDate(t,this.activeDate)&&(this.activeDateChange.emit(this.activeDate),this._focusActiveCellAfterViewChecked()),e.preventDefault()}_handleCalendarBodyKeyup(e){(e.keyCode===32||e.keyCode===13)&&(this._selectionKeyPressed&&this._monthSelected({value:this._dateAdapter.getMonth(this._activeDate),event:e}),this._selectionKeyPressed=!1)}_init(){this._setSelectedMonth(this.selected),this._todayMonth.set(this._getMonthInCurrentYear(this._dateAdapter.today())),this._yearLabel.set(this._dateAdapter.getYearName(this.activeDate));let e=this._dateAdapter.getMonthNames("short");this._months.set([[0,1,2,3],[4,5,6,7],[8,9,10,11]].map(t=>t.map(i=>this._createCellForMonth(i,e[i])))),this._changeDetectorRef.markForCheck()}_focusActiveCell(){this._matCalendarBody._focusActiveCell()}_focusActiveCellAfterViewChecked(){this._matCalendarBody._scheduleFocusActiveCellAfterViewChecked()}_getMonthInCurrentYear(e){return e&&this._dateAdapter.getYear(e)==this._dateAdapter.getYear(this.activeDate)?this._dateAdapter.getMonth(e):null}_getDateFromMonth(e){let t=this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate),e,1),i=this._dateAdapter.getNumDaysInMonth(t);return this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate),e,Math.min(this._dateAdapter.getDate(this.activeDate),i))}_createCellForMonth(e,t){let i=this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate),e,1),a=this._dateAdapter.format(i,this._dateFormats.display.monthYearA11yLabel),o=this.dateClass?this.dateClass(i,"year"):void 0;return new gt(e,t.toLocaleUpperCase(),a,this._shouldEnableMonth(e),o)}_shouldEnableMonth(e){let t=this._dateAdapter.getYear(this.activeDate);if(e==null||this._isYearAndMonthAfterMaxDate(t,e)||this._isYearAndMonthBeforeMinDate(t,e))return!1;if(!this.dateFilter)return!0;let i=this._dateAdapter.createDate(t,e,1);for(let a=i;this._dateAdapter.getMonth(a)==e;a=this._dateAdapter.addCalendarDays(a,1))if(this.dateFilter(a))return!0;return!1}_isYearAndMonthAfterMaxDate(e,t){if(this.maxDate){let i=this._dateAdapter.getYear(this.maxDate),a=this._dateAdapter.getMonth(this.maxDate);return e>i||e===i&&t>a}return!1}_isYearAndMonthBeforeMinDate(e,t){if(this.minDate){let i=this._dateAdapter.getYear(this.minDate),a=this._dateAdapter.getMonth(this.minDate);return e<i||e===i&&t<a}return!1}_isRtl(){return this._dir&&this._dir.value==="rtl"}_setSelectedMonth(e){e instanceof de?this._selectedMonth.set(this._getMonthInCurrentYear(e.start)||this._getMonthInCurrentYear(e.end)):this._selectedMonth.set(this._getMonthInCurrentYear(e))}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=b({type:n,selectors:[["mat-year-view"]],viewQuery:function(t,i){if(t&1&&q(rt,5),t&2){let a;w(a=D())&&(i._matCalendarBody=a.first)}},inputs:{activeDate:"activeDate",selected:"selected",minDate:"minDate",maxDate:"maxDate",dateFilter:"dateFilter",dateClass:"dateClass"},outputs:{selectedChange:"selectedChange",monthSelected:"monthSelected",activeDateChange:"activeDateChange"},exportAs:["matYearView"],decls:5,vars:9,consts:[["role","grid",1,"mat-calendar-table"],["aria-hidden","true",1,"mat-calendar-table-header"],["colspan","4",1,"mat-calendar-table-header-divider"],["mat-calendar-body","",3,"selectedValueChange","activeDateChange","keyup","keydown","label","rows","todayValue","startValue","endValue","labelMinRequiredCells","numCols","cellAspectRatio","activeCell"]],template:function(t,i){t&1&&(c(0,"table",0)(1,"thead",1)(2,"tr"),y(3,"th",2),l()(),c(4,"tbody",3),u("selectedValueChange",function(o){return i._monthSelected(o)})("activeDateChange",function(o){return i._updateActiveDate(o)})("keyup",function(o){return i._handleCalendarBodyKeyup(o)})("keydown",function(o){return i._handleCalendarBodyKeydown(o)}),l()()),t&2&&(d(4),C("label",i._yearLabel())("rows",i._months())("todayValue",i._todayMonth())("startValue",i._selectedMonth())("endValue",i._selectedMonth())("labelMinRequiredCells",2)("numCols",4)("cellAspectRatio",4/7)("activeCell",i._dateAdapter.getMonth(i.activeDate)))},dependencies:[rt],encapsulation:2,changeDetection:0})}return n})(),Cn=(()=>{class n{_intl=s(ot);calendar=s(Mi);_dateAdapter=s(K,{optional:!0});_dateFormats=s(Ve,{optional:!0});_periodButtonText;_periodButtonDescription;_periodButtonLabel;_prevButtonLabel;_nextButtonLabel;constructor(){s(be).load(We);let e=s(N);this._updateLabels(),this.calendar.stateChanges.subscribe(()=>{this._updateLabels(),e.markForCheck()})}get periodButtonText(){return this._periodButtonText}get periodButtonDescription(){return this._periodButtonDescription}get periodButtonLabel(){return this._periodButtonLabel}get prevButtonLabel(){return this._prevButtonLabel}get nextButtonLabel(){return this._nextButtonLabel}currentPeriodClicked(){this.calendar.currentView=this.calendar.currentView=="month"?"multi-year":"month"}previousClicked(){this.previousEnabled()&&(this.calendar.activeDate=this.calendar.currentView=="month"?this._dateAdapter.addCalendarMonths(this.calendar.activeDate,-1):this._dateAdapter.addCalendarYears(this.calendar.activeDate,this.calendar.currentView=="year"?-1:-ie))}nextClicked(){this.nextEnabled()&&(this.calendar.activeDate=this.calendar.currentView=="month"?this._dateAdapter.addCalendarMonths(this.calendar.activeDate,1):this._dateAdapter.addCalendarYears(this.calendar.activeDate,this.calendar.currentView=="year"?1:ie))}previousEnabled(){return this.calendar.minDate?!this.calendar.minDate||!this._isSameView(this.calendar.activeDate,this.calendar.minDate):!0}nextEnabled(){return!this.calendar.maxDate||!this._isSameView(this.calendar.activeDate,this.calendar.maxDate)}_updateLabels(){let e=this.calendar,t=this._intl,i=this._dateAdapter;e.currentView==="month"?(this._periodButtonText=i.format(e.activeDate,this._dateFormats.display.monthYearLabel).toLocaleUpperCase(),this._periodButtonDescription=i.format(e.activeDate,this._dateFormats.display.monthYearLabel).toLocaleUpperCase(),this._periodButtonLabel=t.switchToMultiYearViewLabel,this._prevButtonLabel=t.prevMonthLabel,this._nextButtonLabel=t.nextMonthLabel):e.currentView==="year"?(this._periodButtonText=i.getYearName(e.activeDate),this._periodButtonDescription=i.getYearName(e.activeDate),this._periodButtonLabel=t.switchToMonthViewLabel,this._prevButtonLabel=t.prevYearLabel,this._nextButtonLabel=t.nextYearLabel):(this._periodButtonText=t.formatYearRange(...this._formatMinAndMaxYearLabels()),this._periodButtonDescription=t.formatYearRangeLabel(...this._formatMinAndMaxYearLabels()),this._periodButtonLabel=t.switchToMonthViewLabel,this._prevButtonLabel=t.prevMultiYearLabel,this._nextButtonLabel=t.nextMultiYearLabel)}_isSameView(e,t){return this.calendar.currentView=="month"?this._dateAdapter.getYear(e)==this._dateAdapter.getYear(t)&&this._dateAdapter.getMonth(e)==this._dateAdapter.getMonth(t):this.calendar.currentView=="year"?this._dateAdapter.getYear(e)==this._dateAdapter.getYear(t):bn(this._dateAdapter,e,t,this.calendar.minDate,this.calendar.maxDate)}_formatMinAndMaxYearLabels(){let t=this._dateAdapter.getYear(this.calendar.activeDate)-_t(this._dateAdapter,this.calendar.activeDate,this.calendar.minDate,this.calendar.maxDate),i=t+ie-1,a=this._dateAdapter.getYearName(this._dateAdapter.createDate(t,0,1)),o=this._dateAdapter.getYearName(this._dateAdapter.createDate(i,0,1));return[a,o]}_periodButtonLabelId=s(le).getId("mat-calendar-period-label-");static \u0275fac=function(t){return new(t||n)};static \u0275cmp=b({type:n,selectors:[["mat-calendar-header"]],exportAs:["matCalendarHeader"],ngContentSelectors:_r,decls:17,vars:13,consts:[[1,"mat-calendar-header"],[1,"mat-calendar-controls"],["aria-live","polite",1,"cdk-visually-hidden",3,"id"],["matButton","","type","button",1,"mat-calendar-period-button",3,"click"],["aria-hidden","true"],["viewBox","0 0 10 5","focusable","false","aria-hidden","true",1,"mat-calendar-arrow"],["points","0,0 5,5 10,0"],[1,"mat-calendar-spacer"],["matIconButton","","type","button","disabledInteractive","",1,"mat-calendar-previous-button",3,"click","disabled","matTooltip"],["viewBox","0 0 24 24","focusable","false","aria-hidden","true"],["d","M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"],["matIconButton","","type","button","disabledInteractive","",1,"mat-calendar-next-button",3,"click","disabled","matTooltip"],["d","M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"]],template:function(t,i){t&1&&(ce(),c(0,"div",0)(1,"div",1)(2,"span",2),h(3),l(),c(4,"button",3),u("click",function(){return i.currentPeriodClicked()}),c(5,"span",4),h(6),l(),re(),c(7,"svg",5),y(8,"polygon",6),l()(),Ne(),y(9,"div",7),Y(10),c(11,"button",8),u("click",function(){return i.previousClicked()}),re(),c(12,"svg",9),y(13,"path",10),l()(),Ne(),c(14,"button",11),u("click",function(){return i.nextClicked()}),re(),c(15,"svg",9),y(16,"path",12),l()()()()),t&2&&(d(2),C("id",i._periodButtonLabelId),d(),I(i.periodButtonDescription),d(),f("aria-label",i.periodButtonLabel)("aria-describedby",i._periodButtonLabelId),d(2),I(i.periodButtonText),d(),S("mat-calendar-invert",i.calendar.currentView!=="month"),d(4),C("disabled",!i.previousEnabled())("matTooltip",i.prevButtonLabel),f("aria-label",i.prevButtonLabel),d(3),C("disabled",!i.nextEnabled())("matTooltip",i.nextButtonLabel),f("aria-label",i.nextButtonLabel))},dependencies:[De,ht,ln],encapsulation:2,changeDetection:0})}return n})(),Mi=(()=>{class n{_dateAdapter=s(K,{optional:!0});_dateFormats=s(Ve,{optional:!0});_changeDetectorRef=s(N);_elementRef=s(V);headerComponent;_calendarHeaderPortal;_intlChanges;_moveFocusOnNextTick=!1;get startAt(){return this._startAt}set startAt(e){this._startAt=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_startAt=null;startView="month";get selected(){return this._selected}set selected(e){e instanceof de?this._selected=e:this._selected=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_selected=null;get minDate(){return this._minDate}set minDate(e){this._minDate=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_minDate=null;get maxDate(){return this._maxDate}set maxDate(e){this._maxDate=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_maxDate=null;dateFilter;dateClass;comparisonStart=null;comparisonEnd=null;startDateAccessibleName=null;endDateAccessibleName=null;selectedChange=new g;yearSelected=new g;monthSelected=new g;viewChanged=new g(!0);_userSelection=new g;_userDragDrop=new g;monthView;yearView;multiYearView;get activeDate(){return this._clampedActiveDate}set activeDate(e){this._clampedActiveDate=this._dateAdapter.clampDate(e,this.minDate,this.maxDate),this.stateChanges.next(),this._changeDetectorRef.markForCheck()}_clampedActiveDate;get currentView(){return this._currentView}set currentView(e){let t=this._currentView!==e?e:null;this._currentView=e,this._moveFocusOnNextTick=!0,this._changeDetectorRef.markForCheck(),t&&(this.stateChanges.next(),this.viewChanged.emit(t))}_currentView;_activeDrag=null;stateChanges=new F;constructor(){this._intlChanges=s(ot).changes.subscribe(()=>{this._changeDetectorRef.markForCheck(),this.stateChanges.next()})}ngAfterContentInit(){this._calendarHeaderPortal=new Pe(this.headerComponent||Cn),this.activeDate=this.startAt||this._dateAdapter.today(),this._currentView=this.startView}ngAfterViewChecked(){this._moveFocusOnNextTick&&(this._moveFocusOnNextTick=!1,this.focusActiveCell())}ngOnDestroy(){this._intlChanges.unsubscribe(),this.stateChanges.complete()}ngOnChanges(e){let t=e.minDate&&!this._dateAdapter.sameDate(e.minDate.previousValue,e.minDate.currentValue)?e.minDate:void 0,i=e.maxDate&&!this._dateAdapter.sameDate(e.maxDate.previousValue,e.maxDate.currentValue)?e.maxDate:void 0,a=t||i||e.dateFilter;if(a&&!a.firstChange){let o=this._getCurrentViewComponent();o&&(this._elementRef.nativeElement.contains(si())&&(this._moveFocusOnNextTick=!0),this._changeDetectorRef.detectChanges(),o._init())}this.stateChanges.next()}focusActiveCell(){this._getCurrentViewComponent()?._focusActiveCell(!1)}updateTodaysDate(){this._getCurrentViewComponent()?._init()}_dateSelected(e){let t=e.value;(this.selected instanceof de||t&&!this._dateAdapter.sameDate(t,this.selected))&&this.selectedChange.emit(t),this._userSelection.emit(e)}_yearSelectedInMultiYearView(e){this.yearSelected.emit(e)}_monthSelectedInYearView(e){this.monthSelected.emit(e)}_goToDateInView(e,t){this.activeDate=e,this.currentView=t}_dragStarted(e){this._activeDrag=e}_dragEnded(e){this._activeDrag&&(e.value&&this._userDragDrop.emit(e),this._activeDrag=null)}_getCurrentViewComponent(){return this.monthView||this.yearView||this.multiYearView}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=b({type:n,selectors:[["mat-calendar"]],viewQuery:function(t,i){if(t&1&&q(hn,5)(un,5)(pn,5),t&2){let a;w(a=D())&&(i.monthView=a.first),w(a=D())&&(i.yearView=a.first),w(a=D())&&(i.multiYearView=a.first)}},hostAttrs:[1,"mat-calendar"],inputs:{headerComponent:"headerComponent",startAt:"startAt",startView:"startView",selected:"selected",minDate:"minDate",maxDate:"maxDate",dateFilter:"dateFilter",dateClass:"dateClass",comparisonStart:"comparisonStart",comparisonEnd:"comparisonEnd",startDateAccessibleName:"startDateAccessibleName",endDateAccessibleName:"endDateAccessibleName"},outputs:{selectedChange:"selectedChange",yearSelected:"yearSelected",monthSelected:"monthSelected",viewChanged:"viewChanged",_userSelection:"_userSelection",_userDragDrop:"_userDragDrop"},exportAs:["matCalendar"],features:[J([fn]),W],decls:5,vars:2,consts:[[3,"cdkPortalOutlet"],["cdkMonitorSubtreeFocus","","tabindex","-1",1,"mat-calendar-content"],[3,"activeDate","selected","dateFilter","maxDate","minDate","dateClass","comparisonStart","comparisonEnd","startDateAccessibleName","endDateAccessibleName","activeDrag"],[3,"activeDate","selected","dateFilter","maxDate","minDate","dateClass"],[3,"activeDateChange","_userSelection","dragStarted","dragEnded","activeDate","selected","dateFilter","maxDate","minDate","dateClass","comparisonStart","comparisonEnd","startDateAccessibleName","endDateAccessibleName","activeDrag"],[3,"activeDateChange","monthSelected","selectedChange","activeDate","selected","dateFilter","maxDate","minDate","dateClass"],[3,"activeDateChange","yearSelected","selectedChange","activeDate","selected","dateFilter","maxDate","minDate","dateClass"]],template:function(t,i){if(t&1&&(lt(0,gr,0,0,"ng-template",0),c(1,"div",1),x(2,fr,1,11,"mat-month-view",2)(3,vr,1,6,"mat-year-view",3)(4,br,1,6,"mat-multi-year-view",3),l()),t&2){let a;C("cdkPortalOutlet",i._calendarHeaderPortal),d(2),k((a=i.currentView)==="month"?2:a==="year"?3:a==="multi-year"?4:-1)}},dependencies:[et,da,hn,un,pn],styles:[`.mat-calendar {
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
`],encapsulation:2,changeDetection:0})}return n})(),Ir=new R("mat-datepicker-scroll-strategy",{providedIn:"root",factory:()=>{let n=s($);return()=>At(n)}}),wn=(()=>{class n{_elementRef=s(V);_animationsDisabled=te();_changeDetectorRef=s(N);_globalModel=s(ft);_dateAdapter=s(K);_ngZone=s(me);_rangeSelectionStrategy=s(vn,{optional:!0});_stateChanges;_model;_eventCleanups;_animationFallback;_calendar;color;datepicker;comparisonStart=null;comparisonEnd=null;startDateAccessibleName=null;endDateAccessibleName=null;_isAbove=!1;_animationDone=new F;_isAnimating=!1;_closeButtonText;_closeButtonFocused=!1;_actionsPortal=null;_dialogLabelId=null;constructor(){if(s(be).load(We),this._closeButtonText=s(ot).closeCalendarLabel,!this._animationsDisabled){let e=this._elementRef.nativeElement,t=s(Ce);this._eventCleanups=this._ngZone.runOutsideAngular(()=>[t.listen(e,"animationstart",this._handleAnimationEvent),t.listen(e,"animationend",this._handleAnimationEvent),t.listen(e,"animationcancel",this._handleAnimationEvent)])}}ngAfterViewInit(){this._stateChanges=this.datepicker.stateChanges.subscribe(()=>{this._changeDetectorRef.markForCheck()}),this._calendar.focusActiveCell()}ngOnDestroy(){clearTimeout(this._animationFallback),this._eventCleanups?.forEach(e=>e()),this._stateChanges?.unsubscribe(),this._animationDone.complete()}_handleUserSelection(e){let t=this._model.selection,i=e.value,a=t instanceof de;if(a&&this._rangeSelectionStrategy){let o=this._rangeSelectionStrategy.selectionFinished(i,t,e.event);this._model.updateSelection(o,this)}else i&&(a||!this._dateAdapter.sameDate(i,t))&&this._model.add(i);(!this._model||this._model.isComplete())&&!this._actionsPortal&&this.datepicker.close()}_handleUserDragDrop(e){this._model.updateSelection(e.value,this)}_startExitAnimation(){this._elementRef.nativeElement.classList.add("mat-datepicker-content-exit"),this._animationsDisabled?this._animationDone.next():(clearTimeout(this._animationFallback),this._animationFallback=setTimeout(()=>{this._isAnimating||this._animationDone.next()},200))}_handleAnimationEvent=e=>{let t=this._elementRef.nativeElement;e.target!==t||!e.animationName.startsWith("_mat-datepicker-content")||(clearTimeout(this._animationFallback),this._isAnimating=e.type==="animationstart",t.classList.toggle("mat-datepicker-content-animating",this._isAnimating),this._isAnimating||this._animationDone.next())};_getSelected(){return this._model.selection}_applyPendingSelection(){this._model!==this._globalModel&&this._globalModel.updateSelection(this._model.selection,this)}_assignActions(e,t){this._model=e?this._globalModel.clone():this._globalModel,this._actionsPortal=e,t&&this._changeDetectorRef.detectChanges()}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=b({type:n,selectors:[["mat-datepicker-content"]],viewQuery:function(t,i){if(t&1&&q(Mi,5),t&2){let a;w(a=D())&&(i._calendar=a.first)}},hostAttrs:[1,"mat-datepicker-content"],hostVars:6,hostBindings:function(t,i){t&2&&(Q(i.color?"mat-"+i.color:""),S("mat-datepicker-content-touch",i.datepicker.touchUi)("mat-datepicker-content-animations-enabled",!i._animationsDisabled))},inputs:{color:"color"},exportAs:["matDatepickerContent"],decls:5,vars:26,consts:[["cdkTrapFocus","","role","dialog",1,"mat-datepicker-content-container"],[3,"yearSelected","monthSelected","viewChanged","_userSelection","_userDragDrop","id","startAt","startView","minDate","maxDate","dateFilter","headerComponent","selected","dateClass","comparisonStart","comparisonEnd","startDateAccessibleName","endDateAccessibleName"],[3,"cdkPortalOutlet"],["type","button","matButton","elevated",1,"mat-datepicker-close-button",3,"focus","blur","click","color"]],template:function(t,i){t&1&&(c(0,"div",0)(1,"mat-calendar",1),u("yearSelected",function(o){return i.datepicker._selectYear(o)})("monthSelected",function(o){return i.datepicker._selectMonth(o)})("viewChanged",function(o){return i.datepicker._viewChanged(o)})("_userSelection",function(o){return i._handleUserSelection(o)})("_userDragDrop",function(o){return i._handleUserDragDrop(o)}),l(),lt(2,yr,0,0,"ng-template",2),c(3,"button",3),u("focus",function(){return i._closeButtonFocused=!0})("blur",function(){return i._closeButtonFocused=!1})("click",function(){return i.datepicker.close()}),h(4),l()()),t&2&&(S("mat-datepicker-content-container-with-custom-header",i.datepicker.calendarHeaderComponent)("mat-datepicker-content-container-with-actions",i._actionsPortal),f("aria-modal",!0)("aria-labelledby",i._dialogLabelId??void 0),d(),Q(i.datepicker.panelClass),C("id",i.datepicker.id)("startAt",i.datepicker.startAt)("startView",i.datepicker.startView)("minDate",i.datepicker._getMinDate())("maxDate",i.datepicker._getMaxDate())("dateFilter",i.datepicker._getDateFilter())("headerComponent",i.datepicker.calendarHeaderComponent)("selected",i._getSelected())("dateClass",i.datepicker.dateClass)("comparisonStart",i.comparisonStart)("comparisonEnd",i.comparisonEnd)("startDateAccessibleName",i.startDateAccessibleName)("endDateAccessibleName",i.endDateAccessibleName),d(),C("cdkPortalOutlet",i._actionsPortal),d(),S("cdk-visually-hidden",!i._closeButtonFocused),C("color",i.color||"primary"),d(),I(i._closeButtonText))},dependencies:[pa,Mi,et,De],styles:[`@keyframes _mat-datepicker-content-dropdown-enter {
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
`],encapsulation:2,changeDetection:0})}return n})(),_n=(()=>{class n{_injector=s($);_viewContainerRef=s(yt);_dateAdapter=s(K,{optional:!0});_dir=s(we,{optional:!0});_model=s(ft);_animationsDisabled=te();_scrollStrategy=s(Ir);_inputStateChanges=ue.EMPTY;_document=s(ge);calendarHeaderComponent;get startAt(){return this._startAt||(this.datepickerInput?this.datepickerInput.getStartValue():null)}set startAt(e){this._startAt=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_startAt=null;startView="month";get color(){return this._color||(this.datepickerInput?this.datepickerInput.getThemePalette():void 0)}set color(e){this._color=e}_color;touchUi=!1;get disabled(){return this._disabled===void 0&&this.datepickerInput?this.datepickerInput.disabled:!!this._disabled}set disabled(e){e!==this._disabled&&(this._disabled=e,this.stateChanges.next(void 0))}_disabled;xPosition="start";yPosition="below";restoreFocus=!0;yearSelected=new g;monthSelected=new g;viewChanged=new g(!0);dateClass;openedStream=new g;closedStream=new g;get panelClass(){return this._panelClass}set panelClass(e){this._panelClass=ya(e)}_panelClass;get opened(){return this._opened}set opened(e){e?this.open():this.close()}_opened=!1;id=s(le).getId("mat-datepicker-");_getMinDate(){return this.datepickerInput&&this.datepickerInput.min}_getMaxDate(){return this.datepickerInput&&this.datepickerInput.max}_getDateFilter(){return this.datepickerInput&&this.datepickerInput.dateFilter}_overlayRef=null;_componentRef=null;_focusedElementBeforeOpen=null;_backdropHarnessClass=`${this.id}-backdrop`;_actionsPortal=null;datepickerInput;stateChanges=new F;_changeDetectorRef=s(N);constructor(){this._dateAdapter,this._model.selectionChanged.subscribe(()=>{this._changeDetectorRef.markForCheck()})}ngOnChanges(e){let t=e.xPosition||e.yPosition;if(t&&!t.firstChange&&this._overlayRef){let i=this._overlayRef.getConfig().positionStrategy;i instanceof Sa&&(this._setConnectedPositions(i),this.opened&&this._overlayRef.updatePosition())}this.stateChanges.next(void 0)}ngOnDestroy(){this._destroyOverlay(),this.close(),this._inputStateChanges.unsubscribe(),this.stateChanges.complete()}select(e){this._model.add(e)}_selectYear(e){this.yearSelected.emit(e)}_selectMonth(e){this.monthSelected.emit(e)}_viewChanged(e){this.viewChanged.emit(e)}registerInput(e){return this.datepickerInput,this._inputStateChanges.unsubscribe(),this.datepickerInput=e,this._inputStateChanges=e.stateChanges.subscribe(()=>this.stateChanges.next(void 0)),this._model}registerActions(e){this._actionsPortal,this._actionsPortal=e,this._componentRef?.instance._assignActions(e,!0)}removeActions(e){e===this._actionsPortal&&(this._actionsPortal=null,this._componentRef?.instance._assignActions(null,!0))}open(){this._opened||this.disabled||this._componentRef?.instance._isAnimating||(this.datepickerInput,this._focusedElementBeforeOpen=si(),this._openOverlay(),this._opened=!0,this.openedStream.emit())}close(){if(!this._opened||this._componentRef?.instance._isAnimating)return;let e=this.restoreFocus&&this._focusedElementBeforeOpen&&typeof this._focusedElementBeforeOpen.focus=="function",t=()=>{this._opened&&(this._opened=!1,this.closedStream.emit())};if(this._componentRef){let{instance:i,location:a}=this._componentRef;i._animationDone.pipe($i(1)).subscribe(()=>{let o=this._document.activeElement;e&&(!o||o===this._document.activeElement||a.nativeElement.contains(o))&&this._focusedElementBeforeOpen.focus(),this._focusedElementBeforeOpen=null,this._destroyOverlay()}),i._startExitAnimation()}e?setTimeout(t):t()}_applyPendingSelection(){this._componentRef?.instance?._applyPendingSelection()}_forwardContentValues(e){e.datepicker=this,e.color=this.color,e._dialogLabelId=this.datepickerInput.getOverlayLabelId(),e._assignActions(this._actionsPortal,!1)}_openOverlay(){this._destroyOverlay();let e=this.touchUi,t=new Pe(wn,this._viewContainerRef),i=this._overlayRef=tt(this._injector,new Et({positionStrategy:e?this._getDialogStrategy():this._getDropdownStrategy(),hasBackdrop:!0,backdropClass:[e?"cdk-overlay-dark-backdrop":"mat-overlay-transparent-backdrop",this._backdropHarnessClass],direction:this._dir||"ltr",scrollStrategy:e?Ea(this._injector):this._scrollStrategy(),panelClass:`mat-datepicker-${e?"dialog":"popup"}`,disableAnimations:this._animationsDisabled}));this._getCloseStream(i).subscribe(a=>{a&&a.preventDefault(),this.close()}),i.keydownEvents().subscribe(a=>{let o=a.keyCode;(o===38||o===40||o===37||o===39||o===33||o===34)&&a.preventDefault()}),this._componentRef=i.attach(t),this._forwardContentValues(this._componentRef.instance),e||he(()=>{i.updatePosition()},{injector:this._injector})}_destroyOverlay(){this._overlayRef&&(this._overlayRef.dispose(),this._overlayRef=this._componentRef=null)}_getDialogStrategy(){return It(this._injector).centerHorizontally().centerVertically()}_getDropdownStrategy(){let e=St(this._injector,this.datepickerInput.getConnectedOverlayOrigin()).withTransformOriginOn(".mat-datepicker-content").withFlexibleDimensions(!1).withViewportMargin(8).withLockedPosition();return this._setConnectedPositions(e)}_setConnectedPositions(e){let t=this.xPosition==="end"?"end":"start",i=t==="start"?"end":"start",a=this.yPosition==="above"?"bottom":"top",o=a==="top"?"bottom":"top";return e.withPositions([{originX:t,originY:o,overlayX:t,overlayY:a},{originX:t,originY:a,overlayX:t,overlayY:o},{originX:i,originY:o,overlayX:i,overlayY:a},{originX:i,originY:a,overlayX:i,overlayY:o}])}_getCloseStream(e){let t=["ctrlKey","shiftKey","metaKey"];return Ee(e.backdropClick(),e.detachments(),e.keydownEvents().pipe(Ki(i=>i.keyCode===27&&!ee(i)||this.datepickerInput&&ee(i,"altKey")&&i.keyCode===38&&t.every(a=>!ee(i,a)))))}static \u0275fac=function(t){return new(t||n)};static \u0275dir=j({type:n,inputs:{calendarHeaderComponent:"calendarHeaderComponent",startAt:"startAt",startView:"startView",color:"color",touchUi:[2,"touchUi","touchUi",T],disabled:[2,"disabled","disabled",T],xPosition:"xPosition",yPosition:"yPosition",restoreFocus:[2,"restoreFocus","restoreFocus",T],dateClass:"dateClass",panelClass:"panelClass",opened:[2,"opened","opened",T]},outputs:{yearSelected:"yearSelected",monthSelected:"monthSelected",viewChanged:"viewChanged",openedStream:"opened",closedStream:"closed"},features:[W]})}return n})(),Dn=(()=>{class n extends _n{static \u0275fac=(()=>{let e;return function(i){return(e||(e=ct(n)))(i||n)}})();static \u0275cmp=b({type:n,selectors:[["mat-datepicker"]],exportAs:["matDatepicker"],features:[J([fn,{provide:_n,useExisting:n}]),ve],decls:0,vars:0,template:function(t,i){},encapsulation:2,changeDetection:0})}return n})(),nt=class{target;targetElement;value=null;constructor(r,e){this.target=r,this.targetElement=e,this.value=this.target.value}},Tr=(()=>{class n{_elementRef=s(V);_dateAdapter=s(K,{optional:!0});_dateFormats=s(Ve,{optional:!0});_isInitialized=!1;get value(){return this._model?this._getValueFromModel(this._model.selection):this._pendingValue}set value(e){this._assignValueProgrammatically(e,!0)}_model;get disabled(){return!!this._disabled||this._parentDisabled()}set disabled(e){let t=e,i=this._elementRef.nativeElement;this._disabled!==t&&(this._disabled=t,this.stateChanges.next(void 0)),t&&this._isInitialized&&i.blur&&i.blur()}_disabled;dateChange=new g;dateInput=new g;stateChanges=new F;_onTouched=()=>{};_validatorOnChange=()=>{};_cvaOnChange=()=>{};_valueChangesSubscription=ue.EMPTY;_localeSubscription=ue.EMPTY;_pendingValue=null;_parseValidator=()=>this._lastValueValid?null:{matDatepickerParse:{text:this._elementRef.nativeElement.value}};_filterValidator=e=>{let t=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e.value));return!t||this._matchesFilter(t)?null:{matDatepickerFilter:!0}};_minValidator=e=>{let t=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e.value)),i=this._getMinDate();return!i||!t||this._dateAdapter.compareDate(i,t)<=0?null:{matDatepickerMin:{min:i,actual:t}}};_maxValidator=e=>{let t=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e.value)),i=this._getMaxDate();return!i||!t||this._dateAdapter.compareDate(i,t)>=0?null:{matDatepickerMax:{max:i,actual:t}}};_getValidators(){return[this._parseValidator,this._minValidator,this._maxValidator,this._filterValidator]}_registerModel(e){this._model=e,this._valueChangesSubscription.unsubscribe(),this._pendingValue&&this._assignValue(this._pendingValue),this._valueChangesSubscription=this._model.selectionChanged.subscribe(t=>{if(this._shouldHandleChangeEvent(t)){let i=this._getValueFromModel(t.selection);this._lastValueValid=this._isValidValue(i),this._cvaOnChange(i),this._onTouched(),this._formatValue(i),this.dateInput.emit(new nt(this,this._elementRef.nativeElement)),this.dateChange.emit(new nt(this,this._elementRef.nativeElement))}})}_lastValueValid=!1;constructor(){this._localeSubscription=this._dateAdapter.localeChanges.subscribe(()=>{this._assignValueProgrammatically(this.value,!0)})}ngAfterViewInit(){this._isInitialized=!0}ngOnChanges(e){Fr(e,this._dateAdapter)&&this.stateChanges.next(void 0)}ngOnDestroy(){this._valueChangesSubscription.unsubscribe(),this._localeSubscription.unsubscribe(),this.stateChanges.complete()}registerOnValidatorChange(e){this._validatorOnChange=e}validate(e){return this._validator?this._validator(e):null}writeValue(e){this._assignValueProgrammatically(e,e!==this.value)}registerOnChange(e){this._cvaOnChange=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this.disabled=e}_onKeydown(e){let t=["ctrlKey","shiftKey","metaKey"];ee(e,"altKey")&&e.keyCode===40&&t.every(a=>!ee(e,a))&&!this._elementRef.nativeElement.readOnly&&(this._openPopup(),e.preventDefault())}_onInput(e){let t=e.target.value,i=this._lastValueValid,a=this._dateAdapter.parse(t,this._dateFormats.parse.dateInput);this._lastValueValid=this._isValidValue(a),a=this._dateAdapter.getValidDateOrNull(a);let o=!this._dateAdapter.sameDate(a,this.value);!a||o?this._cvaOnChange(a):(t&&!this.value&&this._cvaOnChange(a),i!==this._lastValueValid&&this._validatorOnChange()),o&&(this._assignValue(a),this.dateInput.emit(new nt(this,this._elementRef.nativeElement)))}_onChange(){this.dateChange.emit(new nt(this,this._elementRef.nativeElement))}_onBlur(){this.value&&this._formatValue(this.value),this._onTouched()}_formatValue(e){this._elementRef.nativeElement.value=e!=null?this._dateAdapter.format(e,this._dateFormats.display.dateInput):""}_assignValue(e){this._model?(this._assignValueToModel(e),this._pendingValue=null):this._pendingValue=e}_isValidValue(e){return!e||this._dateAdapter.isValid(e)}_parentDisabled(){return!1}_assignValueProgrammatically(e,t){e=this._dateAdapter.deserialize(e),this._lastValueValid=this._isValidValue(e),e=this._dateAdapter.getValidDateOrNull(e),this._assignValue(e),t&&this._formatValue(e)}_matchesFilter(e){let t=this._getDateFilter();return!t||t(e)}static \u0275fac=function(t){return new(t||n)};static \u0275dir=j({type:n,inputs:{value:"value",disabled:[2,"disabled","disabled",T]},outputs:{dateChange:"dateChange",dateInput:"dateInput"},features:[W]})}return n})();function Fr(n,r){let e=Object.keys(n);for(let t of e){let{previousValue:i,currentValue:a}=n[t];if(r.isDateInstance(i)&&r.isDateInstance(a)){if(!r.sameDate(i,a))return!0}else return!0}return!1}var Rr={provide:pt,useExisting:Qe(()=>Kt),multi:!0},Pr={provide:Ot,useExisting:Qe(()=>Kt),multi:!0},Kt=(()=>{class n extends Tr{_formField=s(Bt,{optional:!0});_closedSubscription=ue.EMPTY;_openedSubscription=ue.EMPTY;set matDatepicker(e){e&&(this._datepicker=e,this._ariaOwns.set(e.opened?e.id:null),this._closedSubscription=e.closedStream.subscribe(()=>{this._onTouched(),this._ariaOwns.set(null)}),this._openedSubscription=e.openedStream.subscribe(()=>{this._ariaOwns.set(e.id)}),this._registerModel(e.registerInput(this)))}_datepicker;_ariaOwns=M(null);get min(){return this._min}set min(e){let t=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e));this._dateAdapter.sameDate(t,this._min)||(this._min=t,this._validatorOnChange())}_min=null;get max(){return this._max}set max(e){let t=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e));this._dateAdapter.sameDate(t,this._max)||(this._max=t,this._validatorOnChange())}_max=null;get dateFilter(){return this._dateFilter}set dateFilter(e){let t=this._matchesFilter(this.value);this._dateFilter=e,this._matchesFilter(this.value)!==t&&this._validatorOnChange()}_dateFilter;_validator=null;constructor(){super(),this._validator=it.compose(super._getValidators())}getConnectedOverlayOrigin(){return this._formField?this._formField.getConnectedOverlayOrigin():this._elementRef}getOverlayLabelId(){return this._formField?this._formField.getLabelId():this._elementRef.nativeElement.getAttribute("aria-labelledby")}getThemePalette(){return this._formField?this._formField.color:void 0}getStartValue(){return this.value}ngOnDestroy(){super.ngOnDestroy(),this._closedSubscription.unsubscribe(),this._openedSubscription.unsubscribe()}_openPopup(){this._datepicker&&this._datepicker.open()}_getValueFromModel(e){return e}_assignValueToModel(e){this._model&&this._model.updateSelection(e,this)}_getMinDate(){return this._min}_getMaxDate(){return this._max}_getDateFilter(){return this._dateFilter}_shouldHandleChangeEvent(e){return e.source!==this}static \u0275fac=function(t){return new(t||n)};static \u0275dir=j({type:n,selectors:[["input","matDatepicker",""]],hostAttrs:[1,"mat-datepicker-input"],hostVars:6,hostBindings:function(t,i){t&1&&u("input",function(o){return i._onInput(o)})("change",function(){return i._onChange()})("blur",function(){return i._onBlur()})("keydown",function(o){return i._onKeydown(o)}),t&2&&(Z("disabled",i.disabled),f("aria-haspopup",i._datepicker?"dialog":null)("aria-owns",i._ariaOwns())("min",i.min?i._dateAdapter.toIso8601(i.min):null)("max",i.max?i._dateAdapter.toIso8601(i.max):null)("data-mat-calendar",i._datepicker?i._datepicker.id:null))},inputs:{matDatepicker:"matDatepicker",min:"min",max:"max",dateFilter:[0,"matDatepickerFilter","dateFilter"]},exportAs:["matDatepickerInput"],features:[J([Rr,Pr,{provide:Qa,useExisting:n}]),ve]})}return n})(),Vr=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275dir=j({type:n,selectors:[["","matDatepickerToggleIcon",""]]})}return n})(),Ii=(()=>{class n{_intl=s(ot);_changeDetectorRef=s(N);_stateChanges=ue.EMPTY;datepicker;tabIndex=null;ariaLabel;get disabled(){return this._disabled===void 0&&this.datepicker?this.datepicker.disabled:!!this._disabled}set disabled(e){this._disabled=e}_disabled;disableRipple=!1;_customIcon;_button;constructor(){let e=s(new kt("tabindex"),{optional:!0}),t=Number(e);this.tabIndex=t||t===0?t:null}ngOnChanges(e){e.datepicker&&this._watchStateChanges()}ngOnDestroy(){this._stateChanges.unsubscribe()}ngAfterContentInit(){this._watchStateChanges()}_open(e){this.datepicker&&!this.disabled&&(this.datepicker.open(),e.stopPropagation())}_watchStateChanges(){let e=this.datepicker?this.datepicker.stateChanges:$e(),t=this.datepicker&&this.datepicker.datepickerInput?this.datepicker.datepickerInput.stateChanges:$e(),i=this.datepicker?Ee(this.datepicker.openedStream,this.datepicker.closedStream):$e();this._stateChanges.unsubscribe(),this._stateChanges=Ee(this._intl.changes,e,t,i).subscribe(()=>this._changeDetectorRef.markForCheck())}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=b({type:n,selectors:[["mat-datepicker-toggle"]],contentQueries:function(t,i,a){if(t&1&&He(a,Vr,5),t&2){let o;w(o=D())&&(i._customIcon=o.first)}},viewQuery:function(t,i){if(t&1&&q(Cr,5),t&2){let a;w(a=D())&&(i._button=a.first)}},hostAttrs:[1,"mat-datepicker-toggle"],hostVars:8,hostBindings:function(t,i){t&1&&u("click",function(o){return i._open(o)}),t&2&&(f("tabindex",null)("data-mat-calendar",i.datepicker?i.datepicker.id:null),S("mat-datepicker-toggle-active",i.datepicker&&i.datepicker.opened)("mat-accent",i.datepicker&&i.datepicker.color==="accent")("mat-warn",i.datepicker&&i.datepicker.color==="warn"))},inputs:{datepicker:[0,"for","datepicker"],tabIndex:"tabIndex",ariaLabel:[0,"aria-label","ariaLabel"],disabled:[2,"disabled","disabled",T],disableRipple:"disableRipple"},exportAs:["matDatepickerToggle"],features:[W],ngContentSelectors:Dr,decls:4,vars:7,consts:[["button",""],["matIconButton","","type","button",3,"tabIndex","disabled","disableRipple"],["viewBox","0 0 24 24","width","24px","height","24px","fill","currentColor","focusable","false","aria-hidden","true",1,"mat-datepicker-toggle-default-icon"],["d","M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"]],template:function(t,i){t&1&&(ce(wr),c(0,"button",1,0),x(2,xr,2,0,":svg:svg",2),Y(3),l()),t&2&&(C("tabIndex",i.disabled?-1:i.tabIndex)("disabled",i.disabled)("disableRipple",i.disableRipple),f("aria-haspopup",i.datepicker?"dialog":null)("aria-label",i.ariaLabel||i._intl.openCalendarLabel)("aria-expanded",i.datepicker?i.datepicker.opened:null),d(2),k(i._customIcon?-1:2))},dependencies:[ht],styles:[`.mat-datepicker-toggle {
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
`],encapsulation:2,changeDetection:0})}return n})();var xn=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=fe({type:n});static \u0275inj=_e({providers:[ot],imports:[xe,hi,_a,mi,wn,Ii,Cn,Te,Ma]})}return n})();var Lr=/^\d{4}-\d{2}-\d{2}(?:T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|(?:(?:\+|-)\d{2}:\d{2}))?)?$/,Nr=/^(\d?\d)[:.](\d?\d)(?:[:.](\d?\d))?\s*(AM|PM)?$/i;function Ti(n,r){let e=Array(n);for(let t=0;t<n;t++)e[t]=r(t);return e}var Br=(()=>{class n extends K{_matDateLocale=s(vi,{optional:!0});constructor(){super();let e=s(vi,{optional:!0});e!==void 0&&(this._matDateLocale=e),super.setLocale(this._matDateLocale)}getYear(e){return e.getFullYear()}getMonth(e){return e.getMonth()}getDate(e){return e.getDate()}getDayOfWeek(e){return e.getDay()}getMonthNames(e){let t=new Intl.DateTimeFormat(this.locale,{month:e,timeZone:"utc"});return Ti(12,i=>this._format(t,new Date(2017,i,1)))}getDateNames(){let e=new Intl.DateTimeFormat(this.locale,{day:"numeric",timeZone:"utc"});return Ti(31,t=>this._format(e,new Date(2017,0,t+1)))}getDayOfWeekNames(e){let t=new Intl.DateTimeFormat(this.locale,{weekday:e,timeZone:"utc"});return Ti(7,i=>this._format(t,new Date(2017,0,i+1)))}getYearName(e){let t=new Intl.DateTimeFormat(this.locale,{year:"numeric",timeZone:"utc"});return this._format(t,e)}getFirstDayOfWeek(){if(typeof Intl<"u"&&Intl.Locale){let e=new Intl.Locale(this.locale),t=(e.getWeekInfo?.()||e.weekInfo)?.firstDay??0;return t===7?0:t}return 0}getNumDaysInMonth(e){return this.getDate(this._createDateWithOverflow(this.getYear(e),this.getMonth(e)+1,0))}clone(e){return new Date(e.getTime())}createDate(e,t,i){let a=this._createDateWithOverflow(e,t,i);return a.getMonth()!=t,a}today(){return new Date}parse(e,t){return typeof e=="number"?new Date(e):e?new Date(Date.parse(e)):null}format(e,t){if(!this.isValid(e))throw Error("NativeDateAdapter: Cannot format invalid date.");let i=new Intl.DateTimeFormat(this.locale,pe(P({},t),{timeZone:"utc"}));return this._format(i,e)}addCalendarYears(e,t){return this.addCalendarMonths(e,t*12)}addCalendarMonths(e,t){let i=this._createDateWithOverflow(this.getYear(e),this.getMonth(e)+t,this.getDate(e));return this.getMonth(i)!=((this.getMonth(e)+t)%12+12)%12&&(i=this._createDateWithOverflow(this.getYear(i),this.getMonth(i),0)),i}addCalendarDays(e,t){return this._createDateWithOverflow(this.getYear(e),this.getMonth(e),this.getDate(e)+t)}toIso8601(e){return[e.getUTCFullYear(),this._2digit(e.getUTCMonth()+1),this._2digit(e.getUTCDate())].join("-")}deserialize(e){if(typeof e=="string"){if(!e)return null;if(Lr.test(e)){let t=new Date(e);if(this.isValid(t))return t}}return super.deserialize(e)}isDateInstance(e){return e instanceof Date}isValid(e){return!isNaN(e.getTime())}invalid(){return new Date(NaN)}setTime(e,t,i,a){let o=this.clone(e);return o.setHours(t,i,a,0),o}getHours(e){return e.getHours()}getMinutes(e){return e.getMinutes()}getSeconds(e){return e.getSeconds()}parseTime(e,t){if(typeof e!="string")return e instanceof Date?new Date(e.getTime()):null;let i=e.trim();if(i.length===0)return null;let a=this._parseTimeString(i);if(a===null){let o=i.replace(/[^0-9:(AM|PM)]/gi,"").trim();o.length>0&&(a=this._parseTimeString(o))}return a||this.invalid()}addSeconds(e,t){return new Date(e.getTime()+t*1e3)}_createDateWithOverflow(e,t,i){let a=new Date;return a.setFullYear(e,t,i),a.setHours(0,0,0,0),a}_2digit(e){return("00"+e).slice(-2)}_format(e,t){let i=new Date;return i.setUTCFullYear(t.getFullYear(),t.getMonth(),t.getDate()),i.setUTCHours(t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds()),e.format(i)}_parseTimeString(e){let t=e.toUpperCase().match(Nr);if(t){let i=parseInt(t[1]),a=parseInt(t[2]),o=t[3]==null?void 0:parseInt(t[3]),m=t[4];if(i===12?i=m==="AM"?0:i:m==="PM"&&(i+=12),Fi(i,0,23)&&Fi(a,0,59)&&(o==null||Fi(o,0,59)))return this.setTime(this.today(),i,a,o||0)}return null}static \u0275fac=function(t){return new(t||n)};static \u0275prov=ne({token:n,factory:n.\u0275fac})}return n})();function Fi(n,r,e){return!isNaN(n)&&n>=r&&n<=e}var Hr={parse:{dateInput:null,timeInput:null},display:{dateInput:{year:"numeric",month:"numeric",day:"numeric"},timeInput:{hour:"numeric",minute:"numeric"},monthYearLabel:{year:"numeric",month:"short"},dateA11yLabel:{year:"numeric",month:"long",day:"numeric"},monthYearA11yLabel:{year:"numeric",month:"long"},timeOptionLabel:{hour:"numeric",minute:"numeric"}}};function kn(n=Hr){return[{provide:K,useClass:Br},{provide:Ve,useValue:n}]}var jr=["*",[["mat-chip-avatar"],["","matChipAvatar",""]],[["mat-chip-trailing-icon"],["","matChipRemove",""],["","matChipTrailingIcon",""]]],Gr=["*","mat-chip-avatar, [matChipAvatar]","mat-chip-trailing-icon,[matChipRemove],[matChipTrailingIcon]"];function Ur(n,r){n&1&&(c(0,"span",3),Y(1,1),l())}function qr(n,r){n&1&&(c(0,"span",6),Y(1,2),l())}var Kr=`.mdc-evolution-chip,
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
`,$r=[[["","matChipEdit",""]],[["mat-chip-avatar"],["","matChipAvatar",""]],[["","matChipEditInput",""]],"*",[["mat-chip-trailing-icon"],["","matChipRemove",""],["","matChipTrailingIcon",""]]],Qr=["[matChipEdit]","mat-chip-avatar, [matChipAvatar]","[matChipEditInput]","*","mat-chip-trailing-icon,[matChipRemove],[matChipTrailingIcon]"];function Xr(n,r){n&1&&y(0,"span",0)}function Wr(n,r){n&1&&(c(0,"span",1),Y(1),l())}function Zr(n,r){n&1&&(c(0,"span",3),Y(1,1),l())}function Jr(n,r){n&1&&Y(0,2)}function eo(n,r){n&1&&y(0,"span",7)}function to(n,r){if(n&1&&x(0,Jr,1,0)(1,eo,1,0,"span",7),n&2){let e=p();k(e.contentEditInput?0:1)}}function io(n,r){n&1&&Y(0,3)}function ao(n,r){n&1&&(c(0,"span",6),Y(1,4),l())}var Sn=["*"],no=`.mat-mdc-chip-set {
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
`,In=new R("mat-chips-default-options",{providedIn:"root",factory:()=>({separatorKeyCodes:[13]})}),Mn=new R("MatChipAvatar"),An=new R("MatChipTrailingIcon"),En=new R("MatChipEdit"),Pi=new R("MatChipRemove"),Li=new R("MatChip"),Tn=(()=>{class n{_elementRef=s(V);_parentChip=s(Li);_isPrimary=!0;_isLeading=!1;get disabled(){return this._disabled||this._parentChip?.disabled||!1}set disabled(e){this._disabled=e}_disabled=!1;tabIndex=-1;_allowFocusWhenDisabled=!1;_getDisabledAttribute(){return this.disabled&&!this._allowFocusWhenDisabled?"":null}constructor(){s(be).load(je),this._elementRef.nativeElement.nodeName==="BUTTON"&&this._elementRef.nativeElement.setAttribute("type","button")}focus(){this._elementRef.nativeElement.focus()}static \u0275fac=function(t){return new(t||n)};static \u0275dir=j({type:n,selectors:[["","matChipContent",""]],hostAttrs:[1,"mat-mdc-chip-action","mdc-evolution-chip__action","mdc-evolution-chip__action--presentational"],hostVars:8,hostBindings:function(t,i){t&2&&(f("disabled",i._getDisabledAttribute())("aria-disabled",i.disabled),S("mdc-evolution-chip__action--primary",i._isPrimary)("mdc-evolution-chip__action--secondary",!i._isPrimary)("mdc-evolution-chip__action--trailing",!i._isPrimary&&!i._isLeading))},inputs:{disabled:[2,"disabled","disabled",T],tabIndex:[2,"tabIndex","tabIndex",e=>e==null?-1:Ie(e)],_allowFocusWhenDisabled:"_allowFocusWhenDisabled"}})}return n})(),Ni=(()=>{class n extends Tn{_getTabindex(){return this.disabled&&!this._allowFocusWhenDisabled?null:this.tabIndex.toString()}_handleClick(e){!this.disabled&&this._isPrimary&&(e.preventDefault(),this._parentChip._handlePrimaryActionInteraction())}_handleKeydown(e){(e.keyCode===13||e.keyCode===32)&&!this.disabled&&this._isPrimary&&!this._parentChip._isEditing&&(e.preventDefault(),this._parentChip._handlePrimaryActionInteraction())}static \u0275fac=(()=>{let e;return function(i){return(e||(e=ct(n)))(i||n)}})();static \u0275dir=j({type:n,selectors:[["","matChipAction",""]],hostVars:3,hostBindings:function(t,i){t&1&&u("click",function(o){return i._handleClick(o)})("keydown",function(o){return i._handleKeydown(o)}),t&2&&(f("tabindex",i._getTabindex()),S("mdc-evolution-chip__action--presentational",!1))},features:[ve]})}return n})();var Fn=(()=>{class n extends Ni{_isPrimary=!1;_handleClick(e){this.disabled||(e.stopPropagation(),e.preventDefault(),this._parentChip.remove())}_handleKeydown(e){(e.keyCode===13||e.keyCode===32)&&!this.disabled&&(e.stopPropagation(),e.preventDefault(),this._parentChip.remove())}static \u0275fac=(()=>{let e;return function(i){return(e||(e=ct(n)))(i||n)}})();static \u0275dir=j({type:n,selectors:[["","matChipRemove",""]],hostAttrs:["role","button",1,"mat-mdc-chip-remove","mat-mdc-chip-trailing-icon","mat-focus-indicator","mdc-evolution-chip__icon","mdc-evolution-chip__icon--trailing"],hostVars:1,hostBindings:function(t,i){t&2&&f("aria-hidden",null)},features:[J([{provide:Pi,useExisting:n}]),ve]})}return n})(),Vi=(()=>{class n{_changeDetectorRef=s(N);_elementRef=s(V);_tagName=s(sa);_ngZone=s(me);_focusMonitor=s(Je);_globalRippleOptions=s(Ca,{optional:!0});_document=s(ge);_onFocus=new F;_onBlur=new F;_isBasicChip=!1;role=null;_hasFocusInternal=!1;_pendingFocus=!1;_actionChanges;_animationsDisabled=te();_allLeadingIcons;_allTrailingIcons;_allEditIcons;_allRemoveIcons;_hasFocus(){return this._hasFocusInternal}id=s(le).getId("mat-mdc-chip-");ariaLabel=null;ariaDescription=null;_chipListDisabled=!1;_hadFocusOnRemove=!1;_textElement;get value(){return this._value!==void 0?this._value:this._textElement.textContent.trim()}set value(e){this._value=e}_value;color;removable=!0;highlighted=!1;disableRipple=!1;get disabled(){return this._disabled||this._chipListDisabled}set disabled(e){this._disabled=e}_disabled=!1;removed=new g;destroyed=new g;basicChipAttrName="mat-basic-chip";leadingIcon;editIcon;trailingIcon;removeIcon;primaryAction;_rippleLoader=s(Da);_injector=s($);constructor(){let e=s(be);e.load(je),e.load(We),this._monitorFocus(),this._rippleLoader?.configureRipple(this._elementRef.nativeElement,{className:"mat-mdc-chip-ripple",disabled:this._isRippleDisabled()})}ngOnInit(){this._isBasicChip=this._elementRef.nativeElement.hasAttribute(this.basicChipAttrName)||this._tagName.toLowerCase()===this.basicChipAttrName}ngAfterViewInit(){this._textElement=this._elementRef.nativeElement.querySelector(".mat-mdc-chip-action-label"),this._pendingFocus&&(this._pendingFocus=!1,this.focus())}ngAfterContentInit(){this._actionChanges=Ee(this._allLeadingIcons.changes,this._allTrailingIcons.changes,this._allEditIcons.changes,this._allRemoveIcons.changes).subscribe(()=>this._changeDetectorRef.markForCheck())}ngDoCheck(){this._rippleLoader.setDisabled(this._elementRef.nativeElement,this._isRippleDisabled())}ngOnDestroy(){this._focusMonitor.stopMonitoring(this._elementRef),this._rippleLoader?.destroyRipple(this._elementRef.nativeElement),this._actionChanges?.unsubscribe(),this.destroyed.emit({chip:this}),this.destroyed.complete()}remove(){this.removable&&(this._hadFocusOnRemove=this._hasFocus(),this.removed.emit({chip:this}))}_isRippleDisabled(){return this.disabled||this.disableRipple||this._animationsDisabled||this._isBasicChip||!this._hasInteractiveActions()||!!this._globalRippleOptions?.disabled}_hasTrailingIcon(){return!!(this.trailingIcon||this.removeIcon)}_handleKeydown(e){(e.keyCode===8&&!e.repeat||e.keyCode===46)&&(e.preventDefault(),this.remove())}focus(){this.disabled||(this.primaryAction?this.primaryAction.focus():this._pendingFocus=!0)}_getSourceAction(e){return this._getActions().find(t=>{let i=t._elementRef.nativeElement;return i===e||i.contains(e)})}_getActions(){let e=[];return this.editIcon&&e.push(this.editIcon),this.primaryAction&&e.push(this.primaryAction),this.removeIcon&&e.push(this.removeIcon),e}_handlePrimaryActionInteraction(){}_hasInteractiveActions(){return this._getActions().length>0}_edit(e){}_monitorFocus(){this._focusMonitor.monitor(this._elementRef,!0).subscribe(e=>{let t=e!==null;t!==this._hasFocusInternal&&(this._hasFocusInternal=t,t?this._onFocus.next({chip:this}):(this._changeDetectorRef.markForCheck(),setTimeout(()=>this._ngZone.run(()=>this._onBlur.next({chip:this})))))})}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=b({type:n,selectors:[["mat-basic-chip"],["","mat-basic-chip",""],["mat-chip"],["","mat-chip",""]],contentQueries:function(t,i,a){if(t&1&&He(a,Mn,5)(a,En,5)(a,An,5)(a,Pi,5)(a,Mn,5)(a,An,5)(a,En,5)(a,Pi,5),t&2){let o;w(o=D())&&(i.leadingIcon=o.first),w(o=D())&&(i.editIcon=o.first),w(o=D())&&(i.trailingIcon=o.first),w(o=D())&&(i.removeIcon=o.first),w(o=D())&&(i._allLeadingIcons=o),w(o=D())&&(i._allTrailingIcons=o),w(o=D())&&(i._allEditIcons=o),w(o=D())&&(i._allRemoveIcons=o)}},viewQuery:function(t,i){if(t&1&&q(Ni,5),t&2){let a;w(a=D())&&(i.primaryAction=a.first)}},hostAttrs:[1,"mat-mdc-chip"],hostVars:31,hostBindings:function(t,i){t&1&&u("keydown",function(o){return i._handleKeydown(o)}),t&2&&(Z("id",i.id),f("role",i.role)("aria-label",i.ariaLabel),Q("mat-"+(i.color||"primary")),S("mdc-evolution-chip",!i._isBasicChip)("mdc-evolution-chip--disabled",i.disabled)("mdc-evolution-chip--with-trailing-action",i._hasTrailingIcon())("mdc-evolution-chip--with-primary-graphic",i.leadingIcon)("mdc-evolution-chip--with-primary-icon",i.leadingIcon)("mdc-evolution-chip--with-avatar",i.leadingIcon)("mat-mdc-chip-with-avatar",i.leadingIcon)("mat-mdc-chip-highlighted",i.highlighted)("mat-mdc-chip-disabled",i.disabled)("mat-mdc-basic-chip",i._isBasicChip)("mat-mdc-standard-chip",!i._isBasicChip)("mat-mdc-chip-with-trailing-icon",i._hasTrailingIcon())("_mat-animation-noopable",i._animationsDisabled))},inputs:{role:"role",id:"id",ariaLabel:[0,"aria-label","ariaLabel"],ariaDescription:[0,"aria-description","ariaDescription"],value:"value",color:"color",removable:[2,"removable","removable",T],highlighted:[2,"highlighted","highlighted",T],disableRipple:[2,"disableRipple","disableRipple",T],disabled:[2,"disabled","disabled",T]},outputs:{removed:"removed",destroyed:"destroyed"},exportAs:["matChip"],features:[J([{provide:Li,useExisting:n}])],ngContentSelectors:Gr,decls:8,vars:2,consts:[[1,"mat-mdc-chip-focus-overlay"],[1,"mdc-evolution-chip__cell","mdc-evolution-chip__cell--primary"],["matChipContent",""],[1,"mdc-evolution-chip__graphic","mat-mdc-chip-graphic"],[1,"mdc-evolution-chip__text-label","mat-mdc-chip-action-label"],[1,"mat-mdc-chip-primary-focus-indicator","mat-focus-indicator"],[1,"mdc-evolution-chip__cell","mdc-evolution-chip__cell--trailing"]],template:function(t,i){t&1&&(ce(jr),y(0,"span",0),c(1,"span",1)(2,"span",2),x(3,Ur,2,0,"span",3),c(4,"span",4),Y(5),y(6,"span",5),l()()(),x(7,qr,2,0,"span",6)),t&2&&(d(3),k(i.leadingIcon?3:-1),d(4),k(i._hasTrailingIcon()?7:-1))},dependencies:[Tn],styles:[`.mdc-evolution-chip,
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
`],encapsulation:2,changeDetection:0})}return n})();var Ri=(()=>{class n{_elementRef=s(V);_document=s(ge);constructor(){}initialize(e){this.getNativeElement().focus(),this.setValue(e)}getNativeElement(){return this._elementRef.nativeElement}setValue(e){this.getNativeElement().textContent=e,this._moveCursorToEndOfInput()}getValue(){return this.getNativeElement().textContent||""}_moveCursorToEndOfInput(){let e=this._document.createRange();e.selectNodeContents(this.getNativeElement()),e.collapse(!1);let t=window.getSelection();t.removeAllRanges(),t.addRange(e)}static \u0275fac=function(t){return new(t||n)};static \u0275dir=j({type:n,selectors:[["span","matChipEditInput",""]],hostAttrs:["role","textbox","tabindex","-1","contenteditable","true",1,"mat-chip-edit-input"]})}return n})(),Bi=(()=>{class n extends Vi{basicChipAttrName="mat-basic-chip-row";_renderer=s(Ce);_cleanupMousedown;_editStartPending=!1;editable=!1;edited=new g;defaultEditInput;contentEditInput;_alreadyFocused=!1;_isEditing=!1;constructor(){super(),this.role="row",this._onBlur.pipe(z(this.destroyed)).subscribe(()=>{this._isEditing&&!this._editStartPending&&this._onEditFinish(),this._alreadyFocused=!1})}ngAfterViewInit(){super.ngAfterViewInit(),this._cleanupMousedown=this._ngZone.runOutsideAngular(()=>this._renderer.listen(this._elementRef.nativeElement,"mousedown",()=>{this._alreadyFocused=this._hasFocus()}))}ngOnDestroy(){super.ngOnDestroy(),this._cleanupMousedown?.()}_hasLeadingActionIcon(){return!this._isEditing&&!!this.editIcon}_hasTrailingIcon(){return!this._isEditing&&super._hasTrailingIcon()}_handleFocus(){!this._isEditing&&!this.disabled&&this.focus()}_handleKeydown(e){e.keyCode===13&&!this.disabled?this._isEditing?(e.preventDefault(),this._onEditFinish()):this.editable&&this._startEditing(e):this._isEditing?e.stopPropagation():super._handleKeydown(e)}_handleClick(e){!this.disabled&&this.editable&&!this._isEditing&&this._alreadyFocused&&(e.preventDefault(),e.stopPropagation(),this._startEditing(e))}_handleDoubleclick(e){!this.disabled&&this.editable&&this._startEditing(e)}_edit(){this._changeDetectorRef.markForCheck(),this._startEditing()}_startEditing(e){if(!this.primaryAction||this.removeIcon&&e&&this._getSourceAction(e.target)===this.removeIcon)return;let t=this.value;this._isEditing=this._editStartPending=!0,he(()=>{this._getEditInput().initialize(t),setTimeout(()=>this._ngZone.run(()=>this._editStartPending=!1))},{injector:this._injector})}_onEditFinish(){this._isEditing=this._editStartPending=!1,this.edited.emit({chip:this,value:this._getEditInput().getValue()}),(this._document.activeElement===this._getEditInput().getNativeElement()||this._document.activeElement===this._document.body)&&this.primaryAction.focus()}_isRippleDisabled(){return super._isRippleDisabled()||this._isEditing}_getEditInput(){return this.contentEditInput||this.defaultEditInput}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=b({type:n,selectors:[["mat-chip-row"],["","mat-chip-row",""],["mat-basic-chip-row"],["","mat-basic-chip-row",""]],contentQueries:function(t,i,a){if(t&1&&He(a,Ri,5),t&2){let o;w(o=D())&&(i.contentEditInput=o.first)}},viewQuery:function(t,i){if(t&1&&q(Ri,5),t&2){let a;w(a=D())&&(i.defaultEditInput=a.first)}},hostAttrs:[1,"mat-mdc-chip","mat-mdc-chip-row","mdc-evolution-chip"],hostVars:29,hostBindings:function(t,i){t&1&&u("focus",function(){return i._handleFocus()})("click",function(o){return i._hasInteractiveActions()?i._handleClick(o):null})("dblclick",function(o){return i._handleDoubleclick(o)}),t&2&&(Z("id",i.id),f("tabindex",i.disabled?null:-1)("aria-label",null)("aria-description",null)("role",i.role),S("mat-mdc-chip-with-avatar",i.leadingIcon)("mat-mdc-chip-disabled",i.disabled)("mat-mdc-chip-editing",i._isEditing)("mat-mdc-chip-editable",i.editable)("mdc-evolution-chip--disabled",i.disabled)("mdc-evolution-chip--with-leading-action",i._hasLeadingActionIcon())("mdc-evolution-chip--with-trailing-action",i._hasTrailingIcon())("mdc-evolution-chip--with-primary-graphic",i.leadingIcon)("mdc-evolution-chip--with-primary-icon",i.leadingIcon)("mdc-evolution-chip--with-avatar",i.leadingIcon)("mat-mdc-chip-highlighted",i.highlighted)("mat-mdc-chip-with-trailing-icon",i._hasTrailingIcon()))},inputs:{editable:"editable"},outputs:{edited:"edited"},features:[J([{provide:Vi,useExisting:n},{provide:Li,useExisting:n}]),ve],ngContentSelectors:Qr,decls:9,vars:8,consts:[[1,"mat-mdc-chip-focus-overlay"],["role","gridcell",1,"mdc-evolution-chip__cell","mdc-evolution-chip__cell--leading"],["role","gridcell","matChipAction","",1,"mdc-evolution-chip__cell","mdc-evolution-chip__cell--primary",3,"disabled"],[1,"mdc-evolution-chip__graphic","mat-mdc-chip-graphic"],[1,"mdc-evolution-chip__text-label","mat-mdc-chip-action-label"],["aria-hidden","true",1,"mat-mdc-chip-primary-focus-indicator","mat-focus-indicator"],["role","gridcell",1,"mdc-evolution-chip__cell","mdc-evolution-chip__cell--trailing"],["matChipEditInput",""]],template:function(t,i){t&1&&(ce($r),x(0,Xr,1,0,"span",0),x(1,Wr,2,0,"span",1),c(2,"span",2),x(3,Zr,2,0,"span",3),c(4,"span",4),x(5,to,2,1)(6,io,1,0),y(7,"span",5),l()(),x(8,ao,2,0,"span",6)),t&2&&(k(i._isEditing?-1:0),d(),k(i._hasLeadingActionIcon()?1:-1),d(),C("disabled",i.disabled),f("aria-description",i.ariaDescription)("aria-label",i.ariaLabel),d(),k(i.leadingIcon?3:-1),d(2),k(i._isEditing?5:6),d(3),k(i._hasTrailingIcon()?8:-1))},dependencies:[Ni,Ri],styles:[Kr],encapsulation:2,changeDetection:0})}return n})(),ro=(()=>{class n{_elementRef=s(V);_changeDetectorRef=s(N);_dir=s(we,{optional:!0});_lastDestroyedFocusedChipIndex=null;_keyManager;_destroyed=new F;_defaultRole="presentation";get chipFocusChanges(){return this._getChipStream(e=>e._onFocus)}get chipDestroyedChanges(){return this._getChipStream(e=>e.destroyed)}get chipRemovedChanges(){return this._getChipStream(e=>e.removed)}get disabled(){return this._disabled}set disabled(e){this._disabled=e,this._syncChipsState()}_disabled=!1;get empty(){return!this._chips||this._chips.length===0}get role(){return this._explicitRole?this._explicitRole:this.empty?null:this._defaultRole}tabIndex=0;set role(e){this._explicitRole=e}_explicitRole=null;get focused(){return this._hasFocusedChip()}_chips;_chipActions=new Wi;constructor(){}ngAfterViewInit(){this._setUpFocusManagement(),this._trackChipSetChanges(),this._trackDestroyedFocusedChip()}ngOnDestroy(){this._keyManager?.destroy(),this._chipActions.destroy(),this._destroyed.next(),this._destroyed.complete()}_hasFocusedChip(){return this._chips&&this._chips.some(e=>e._hasFocus())}_syncChipsState(){this._chips?.forEach(e=>{e._chipListDisabled=this._disabled,e._changeDetectorRef.markForCheck()})}focus(){}_handleKeydown(e){this._originatesFromChip(e)&&this._keyManager.onKeydown(e)}_isValidIndex(e){return e>=0&&e<this._chips.length}_allowFocusEscape(){let e=this._elementRef.nativeElement.tabIndex;e!==-1&&(this._elementRef.nativeElement.tabIndex=-1,setTimeout(()=>this._elementRef.nativeElement.tabIndex=e))}_getChipStream(e){return this._chips.changes.pipe(Se(null),Qi(()=>Ee(...this._chips.map(e))))}_originatesFromChip(e){let t=e.target;for(;t&&t!==this._elementRef.nativeElement;){if(t.classList.contains("mat-mdc-chip"))return!0;t=t.parentElement}return!1}_setUpFocusManagement(){this._chips.changes.pipe(Se(this._chips)).subscribe(e=>{let t=[];e.forEach(i=>i._getActions().forEach(a=>t.push(a))),this._chipActions.reset(t),this._chipActions.notifyOnChanges()}),this._keyManager=new ga(this._chipActions).withVerticalOrientation().withHorizontalOrientation(this._dir?this._dir.value:"ltr").withHomeAndEnd().skipPredicate(e=>this._skipPredicate(e)),this.chipFocusChanges.pipe(z(this._destroyed)).subscribe(({chip:e})=>{let t=e._getSourceAction(document.activeElement);t&&this._keyManager.updateActiveItem(t)}),this._dir?.change.pipe(z(this._destroyed)).subscribe(e=>this._keyManager.withHorizontalOrientation(e))}_skipPredicate(e){return e.disabled}_trackChipSetChanges(){this._chips.changes.pipe(Se(null),z(this._destroyed)).subscribe(()=>{this.disabled&&Promise.resolve().then(()=>this._syncChipsState()),this._redirectDestroyedChipFocus()})}_trackDestroyedFocusedChip(){this.chipDestroyedChanges.pipe(z(this._destroyed)).subscribe(e=>{let i=this._chips.toArray().indexOf(e.chip),a=e.chip._hasFocus(),o=e.chip._hadFocusOnRemove&&this._keyManager.activeItem&&e.chip._getActions().includes(this._keyManager.activeItem),m=a||o;this._isValidIndex(i)&&m&&(this._lastDestroyedFocusedChipIndex=i)})}_redirectDestroyedChipFocus(){if(this._lastDestroyedFocusedChipIndex!=null){if(this._chips.length){let e=Math.min(this._lastDestroyedFocusedChipIndex,this._chips.length-1),t=this._chips.toArray()[e];t.disabled?this._chips.length===1?this.focus():this._keyManager.setPreviousItemActive():t.focus()}else this.focus();this._lastDestroyedFocusedChipIndex=null}}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=b({type:n,selectors:[["mat-chip-set"]],contentQueries:function(t,i,a){if(t&1&&He(a,Vi,5),t&2){let o;w(o=D())&&(i._chips=o)}},hostAttrs:[1,"mat-mdc-chip-set","mdc-evolution-chip-set"],hostVars:1,hostBindings:function(t,i){t&1&&u("keydown",function(o){return i._handleKeydown(o)}),t&2&&f("role",i.role)},inputs:{disabled:[2,"disabled","disabled",T],role:"role",tabIndex:[2,"tabIndex","tabIndex",e=>e==null?0:Ie(e)]},ngContentSelectors:Sn,decls:2,vars:0,consts:[["role","presentation",1,"mdc-evolution-chip-set__chips"]],template:function(t,i){t&1&&(ce(),L(0,"div",0),Y(1),B())},styles:[`.mat-mdc-chip-set {
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
`],encapsulation:2,changeDetection:0})}return n})();var Oi=class{source;value;constructor(r,e){this.source=r,this.value=e}},Rn=(()=>{class n extends ro{ngControl=s(pi,{optional:!0,self:!0});controlType="mat-chip-grid";_chipInput;_defaultRole="grid";_errorStateTracker;_uid=s(le).getId("mat-chip-grid-");_ariaDescribedbyIds=[];_onTouched=()=>{};_onChange=()=>{};get disabled(){return this.ngControl?!!this.ngControl.disabled:this._disabled}set disabled(e){this._disabled=e,this._syncChipsState(),this.stateChanges.next()}get id(){return this._chipInput?this._chipInput.id:this._uid}get empty(){return(!this._chipInput||this._chipInput.empty)&&(!this._chips||this._chips.length===0)}get placeholder(){return this._chipInput?this._chipInput.placeholder:this._placeholder}set placeholder(e){this._placeholder=e,this.stateChanges.next()}_placeholder="";get focused(){return this._chipInput?.focused||this._hasFocusedChip()}get required(){return this._required??this.ngControl?.control?.hasValidator(it.required)??!1}set required(e){this._required=e,this.stateChanges.next()}_required;get shouldLabelFloat(){return!this.empty||this.focused}get value(){return this._value}set value(e){this._value=e}_value=[];get errorStateMatcher(){return this._errorStateTracker.matcher}set errorStateMatcher(e){this._errorStateTracker.matcher=e}get chipBlurChanges(){return this._getChipStream(e=>e._onBlur)}change=new g;valueChange=new g;_chips=void 0;stateChanges=new F;get errorState(){return this._errorStateTracker.errorState}set errorState(e){this._errorStateTracker.errorState=e}constructor(){super();let e=s(ui,{optional:!0}),t=s(ut,{optional:!0}),i=s(gi);this.ngControl&&(this.ngControl.valueAccessor=this),this._errorStateTracker=new Xa(i,this.ngControl,t,e,this.stateChanges)}ngAfterContentInit(){this.chipBlurChanges.pipe(z(this._destroyed)).subscribe(()=>{this._blur(),this.stateChanges.next()}),Ee(this.chipFocusChanges,this._chips.changes).pipe(z(this._destroyed)).subscribe(()=>this.stateChanges.next())}ngDoCheck(){this.ngControl&&this.updateErrorState()}ngOnDestroy(){super.ngOnDestroy(),this.stateChanges.complete()}registerInput(e){this._chipInput=e,this._chipInput.setDescribedByIds(this._ariaDescribedbyIds),this._elementRef.nativeElement.removeAttribute("aria-describedby")}onContainerClick(e){!this.disabled&&!this._originatesFromChip(e)&&this.focus()}focus(){if(!(this.disabled||this._chipInput?.focused)){if(!this._chips.length||this._chips.first.disabled){if(!this._chipInput)return;Promise.resolve().then(()=>this._chipInput.focus())}else{let e=this._keyManager.activeItem;e?e.focus():this._keyManager.setFirstItemActive()}this.stateChanges.next()}}get describedByIds(){if(this._chipInput)return this._chipInput.describedByIds||[];let e=this._elementRef.nativeElement.getAttribute("aria-describedby");return e?e.split(" "):[]}setDescribedByIds(e){this._ariaDescribedbyIds=e,this._chipInput?this._chipInput.setDescribedByIds(e):e.length?this._elementRef.nativeElement.setAttribute("aria-describedby",e.join(" ")):this._elementRef.nativeElement.removeAttribute("aria-describedby")}writeValue(e){this._value=e}registerOnChange(e){this._onChange=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this.disabled=e,this.stateChanges.next()}updateErrorState(){this._errorStateTracker.updateErrorState()}_blur(){this.disabled||setTimeout(()=>{this.focused||(this._propagateChanges(),this._markAsTouched())})}_allowFocusEscape(){this._chipInput?.focused||super._allowFocusEscape()}_handleKeydown(e){let t=e.keyCode,i=this._keyManager.activeItem;if(t===9)this._chipInput?.focused&&ee(e,"shiftKey")&&this._chips.length&&!this._chips.last.disabled?(e.preventDefault(),i?this._keyManager.setActiveItem(i):this._focusLastChip()):super._allowFocusEscape();else if(!this._chipInput?.focused)if((t===38||t===40)&&i){let a=this._chipActions.filter(_=>_._isPrimary===i._isPrimary&&!this._skipPredicate(_)),o=a.indexOf(i),m=e.keyCode===38?-1:1;e.preventDefault(),o>-1&&this._isValidIndex(o+m)&&this._keyManager.setActiveItem(a[o+m])}else super._handleKeydown(e);this.stateChanges.next()}_focusLastChip(){this._chips.length&&this._chips.last.focus()}_propagateChanges(){let e=this._chips.length?this._chips.toArray().map(t=>t.value):[];this._value=e,this.change.emit(new Oi(this,e)),this.valueChange.emit(e),this._onChange(e),this._changeDetectorRef.markForCheck()}_markAsTouched(){this._onTouched(),this._changeDetectorRef.markForCheck(),this.stateChanges.next()}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=b({type:n,selectors:[["mat-chip-grid"]],contentQueries:function(t,i,a){if(t&1&&He(a,Bi,5),t&2){let o;w(o=D())&&(i._chips=o)}},hostAttrs:[1,"mat-mdc-chip-set","mat-mdc-chip-grid","mdc-evolution-chip-set"],hostVars:10,hostBindings:function(t,i){t&1&&u("focus",function(){return i.focus()})("blur",function(){return i._blur()}),t&2&&(f("role",i.role)("tabindex",i.disabled||i._chips&&i._chips.length===0?-1:i.tabIndex)("aria-disabled",i.disabled.toString())("aria-invalid",i.errorState),S("mat-mdc-chip-list-disabled",i.disabled)("mat-mdc-chip-list-invalid",i.errorState)("mat-mdc-chip-list-required",i.required))},inputs:{disabled:[2,"disabled","disabled",T],placeholder:"placeholder",required:[2,"required","required",T],value:"value",errorStateMatcher:"errorStateMatcher"},outputs:{change:"change",valueChange:"valueChange"},features:[J([{provide:_i,useExisting:n}]),ve],ngContentSelectors:Sn,decls:2,vars:0,consts:[["role","presentation",1,"mdc-evolution-chip-set__chips"]],template:function(t,i){t&1&&(ce(),L(0,"div",0),Y(1),B())},styles:[no],encapsulation:2,changeDetection:0})}return n})(),Pn=(()=>{class n{_elementRef=s(V);focused=!1;get chipGrid(){return this._chipGrid}set chipGrid(e){e&&(this._chipGrid=e,this._chipGrid.registerInput(this))}_chipGrid;addOnBlur=!1;separatorKeyCodes;chipEnd=new g;placeholder="";id=s(le).getId("mat-mdc-chip-list-input-");get disabled(){return this._disabled||this._chipGrid&&this._chipGrid.disabled}set disabled(e){this._disabled=e}_disabled=!1;readonly=!1;disabledInteractive;get empty(){return!this.inputElement.value}inputElement;constructor(){let e=s(In),t=s(Bt,{optional:!0});this.inputElement=this._elementRef.nativeElement,this.separatorKeyCodes=e.separatorKeyCodes,this.disabledInteractive=e.inputDisabledInteractive??!1,t&&this.inputElement.classList.add("mat-mdc-form-field-input-control")}ngOnChanges(){this._chipGrid.stateChanges.next()}ngOnDestroy(){this.chipEnd.complete()}_keydown(e){this.empty&&e.keyCode===8?(e.repeat||this._chipGrid._focusLastChip(),e.preventDefault()):this._emitChipEnd(e)}_blur(){this.addOnBlur&&this._emitChipEnd(),this.focused=!1,this._chipGrid.focused||this._chipGrid._blur(),this._chipGrid.stateChanges.next()}_focus(){this.focused=!0,this._chipGrid.stateChanges.next()}_emitChipEnd(e){(!e||this._isSeparatorKey(e)&&!e.repeat)&&(this.chipEnd.emit({input:this.inputElement,value:this.inputElement.value,chipInput:this}),e?.preventDefault())}_onInput(){this._chipGrid.stateChanges.next()}focus(){this.inputElement.focus()}clear(){this.inputElement.value=""}get describedByIds(){return this._elementRef.nativeElement.getAttribute("aria-describedby")?.split(" ")||[]}setDescribedByIds(e){let t=this._elementRef.nativeElement;e.length?t.setAttribute("aria-describedby",e.join(" ")):t.removeAttribute("aria-describedby")}_isSeparatorKey(e){if(!this.separatorKeyCodes)return!1;for(let t of this.separatorKeyCodes){let i,a;typeof t=="number"?(i=t,a=null):(i=t.keyCode,a=t.modifiers);let o=a?.length?ee(e,...a):!ee(e);if(i===e.keyCode&&o)return!0}return!1}_getReadonlyAttribute(){return this.readonly||this.disabled&&this.disabledInteractive?"true":null}static \u0275fac=function(t){return new(t||n)};static \u0275dir=j({type:n,selectors:[["input","matChipInputFor",""]],hostAttrs:[1,"mat-mdc-chip-input","mat-mdc-input-element","mdc-text-field__input","mat-input-element"],hostVars:8,hostBindings:function(t,i){t&1&&u("keydown",function(o){return i._keydown(o)})("blur",function(){return i._blur()})("focus",function(){return i._focus()})("input",function(){return i._onInput()}),t&2&&(Z("id",i.id),f("disabled",i.disabled&&!i.disabledInteractive?"":null)("placeholder",i.placeholder||null)("aria-invalid",i._chipGrid&&i._chipGrid.ngControl?i._chipGrid.ngControl.invalid:null)("aria-required",i._chipGrid&&i._chipGrid.required||null)("aria-disabled",i.disabled&&i.disabledInteractive?"true":null)("readonly",i._getReadonlyAttribute())("required",i._chipGrid&&i._chipGrid.required||null))},inputs:{chipGrid:[0,"matChipInputFor","chipGrid"],addOnBlur:[2,"matChipInputAddOnBlur","addOnBlur",T],separatorKeyCodes:[0,"matChipInputSeparatorKeyCodes","separatorKeyCodes"],placeholder:"placeholder",id:"id",disabled:[2,"disabled","disabled",T],readonly:[2,"readonly","readonly",T],disabledInteractive:[2,"matChipInputDisabledInteractive","disabledInteractive",T]},outputs:{chipEnd:"matChipInputTokenEnd"},exportAs:["matChipInput","matChipInputFor"],features:[W]})}return n})();var Vn=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=fe({type:n});static \u0275inj=_e({providers:[gi,{provide:In,useValue:{separatorKeyCodes:[13]}}],imports:[xa,Te]})}return n})();function so(n,r){if(n&1){let e=U();c(0,"div",1)(1,"button",2),u("click",function(){A(e);let i=p();return E(i.action())}),h(2),l()()}if(n&2){let e=p();d(2),G(" ",e.data.action," ")}}var co=["label"];function lo(n,r){}var mo=Math.pow(2,31)-1,Ue=class{_overlayRef;instance;containerInstance;_afterDismissed=new F;_afterOpened=new F;_onAction=new F;_durationTimeoutId;_dismissedByAction=!1;constructor(r,e){this._overlayRef=e,this.containerInstance=r,r._onExit.subscribe(()=>this._finishDismiss())}dismiss(){this._afterDismissed.closed||this.containerInstance.exit(),clearTimeout(this._durationTimeoutId)}dismissWithAction(){this._onAction.closed||(this._dismissedByAction=!0,this._onAction.next(),this._onAction.complete(),this.dismiss()),clearTimeout(this._durationTimeoutId)}closeWithAction(){this.dismissWithAction()}_dismissAfter(r){this._durationTimeoutId=setTimeout(()=>this.dismiss(),Math.min(r,mo))}_open(){this._afterOpened.closed||(this._afterOpened.next(),this._afterOpened.complete())}_finishDismiss(){this._overlayRef.dispose(),this._onAction.closed||this._onAction.complete(),this._afterDismissed.next({dismissedByAction:this._dismissedByAction}),this._afterDismissed.complete(),this._dismissedByAction=!1}afterDismissed(){return this._afterDismissed}afterOpened(){return this.containerInstance._onEnter}onAction(){return this._onAction}},$t=new R("MatSnackBarData"),st=class{politeness="polite";announcementMessage="";viewContainerRef;duration=0;panelClass;direction;data=null;horizontalPosition="center";verticalPosition="bottom"},ho=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275dir=j({type:n,selectors:[["","matSnackBarLabel",""]],hostAttrs:[1,"mat-mdc-snack-bar-label","mdc-snackbar__label"]})}return n})(),po=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275dir=j({type:n,selectors:[["","matSnackBarActions",""]],hostAttrs:[1,"mat-mdc-snack-bar-actions","mdc-snackbar__actions"]})}return n})(),uo=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275dir=j({type:n,selectors:[["","matSnackBarAction",""]],hostAttrs:[1,"mat-mdc-snack-bar-action","mdc-snackbar__action"]})}return n})(),_o=(()=>{class n{snackBarRef=s(Ue);data=s($t);constructor(){}action(){this.snackBarRef.dismissWithAction()}get hasAction(){return!!this.data.action}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=b({type:n,selectors:[["simple-snack-bar"]],hostAttrs:[1,"mat-mdc-simple-snack-bar"],exportAs:["matSnackBar"],decls:3,vars:2,consts:[["matSnackBarLabel",""],["matSnackBarActions",""],["matButton","","matSnackBarAction","",3,"click"]],template:function(t,i){t&1&&(c(0,"div",0),h(1),l(),x(2,so,3,1,"div",1)),t&2&&(d(),G(" ",i.data.message,`
`),d(),k(i.hasAction?2:-1))},dependencies:[De,ho,po,uo],styles:[`.mat-mdc-simple-snack-bar {
  display: flex;
}
.mat-mdc-simple-snack-bar .mat-mdc-snack-bar-label {
  max-height: 50vh;
  overflow: auto;
}
`],encapsulation:2,changeDetection:0})}return n})(),Hi="_mat-snack-bar-enter",zi="_mat-snack-bar-exit",go=(()=>{class n extends Aa{_ngZone=s(me);_elementRef=s(V);_changeDetectorRef=s(N);_platform=s(Ze);_animationsDisabled=te();snackBarConfig=s(st);_document=s(ge);_trackedModals=new Set;_enterFallback;_exitFallback;_injector=s($);_announceDelay=150;_announceTimeoutId;_destroyed=!1;_portalOutlet;_onAnnounce=new F;_onExit=new F;_onEnter=new F;_animationState="void";_live;_label;_role;_liveElementId=s(le).getId("mat-snack-bar-container-live-");constructor(){super();let e=this.snackBarConfig;e.politeness==="assertive"&&!e.announcementMessage?this._live="assertive":e.politeness==="off"?this._live="off":this._live="polite",this._platform.FIREFOX&&(this._live==="polite"&&(this._role="status"),this._live==="assertive"&&(this._role="alert"))}attachComponentPortal(e){this._assertNotAttached();let t=this._portalOutlet.attachComponentPortal(e);return this._afterPortalAttached(),t}attachTemplatePortal(e){this._assertNotAttached();let t=this._portalOutlet.attachTemplatePortal(e);return this._afterPortalAttached(),t}attachDomPortal=e=>{this._assertNotAttached();let t=this._portalOutlet.attachDomPortal(e);return this._afterPortalAttached(),t};onAnimationEnd(e){e===zi?this._completeExit():e===Hi&&(clearTimeout(this._enterFallback),this._ngZone.run(()=>{this._onEnter.next(),this._onEnter.complete()}))}enter(){this._destroyed||(this._animationState="visible",this._changeDetectorRef.markForCheck(),this._changeDetectorRef.detectChanges(),this._screenReaderAnnounce(),this._animationsDisabled?he(()=>{this._ngZone.run(()=>queueMicrotask(()=>this.onAnimationEnd(Hi)))},{injector:this._injector}):(clearTimeout(this._enterFallback),this._enterFallback=setTimeout(()=>{this._elementRef.nativeElement.classList.add("mat-snack-bar-fallback-visible"),this.onAnimationEnd(Hi)},200)))}exit(){return this._destroyed?$e(void 0):(this._ngZone.run(()=>{this._animationState="hidden",this._changeDetectorRef.markForCheck(),this._elementRef.nativeElement.setAttribute("mat-exit",""),clearTimeout(this._announceTimeoutId),this._animationsDisabled?he(()=>{this._ngZone.run(()=>queueMicrotask(()=>this.onAnimationEnd(zi)))},{injector:this._injector}):(clearTimeout(this._exitFallback),this._exitFallback=setTimeout(()=>this.onAnimationEnd(zi),200))}),this._onExit)}ngOnDestroy(){this._destroyed=!0,this._clearFromModals(),this._completeExit()}_completeExit(){clearTimeout(this._exitFallback),queueMicrotask(()=>{this._onExit.next(),this._onExit.complete()})}_afterPortalAttached(){let e=this._elementRef.nativeElement,t=this.snackBarConfig.panelClass;t&&(Array.isArray(t)?t.forEach(o=>e.classList.add(o)):e.classList.add(t)),this._exposeToModals();let i=this._label.nativeElement,a="mdc-snackbar__label";i.classList.toggle(a,!i.querySelector(`.${a}`))}_exposeToModals(){let e=this._liveElementId,t=this._document.querySelectorAll('body > .cdk-overlay-container [aria-modal="true"]');for(let i=0;i<t.length;i++){let a=t[i],o=a.getAttribute("aria-owns");this._trackedModals.add(a),o?o.indexOf(e)===-1&&a.setAttribute("aria-owns",o+" "+e):a.setAttribute("aria-owns",e)}}_clearFromModals(){this._trackedModals.forEach(e=>{let t=e.getAttribute("aria-owns");if(t){let i=t.replace(this._liveElementId,"").trim();i.length>0?e.setAttribute("aria-owns",i):e.removeAttribute("aria-owns")}}),this._trackedModals.clear()}_assertNotAttached(){this._portalOutlet.hasAttached()}_screenReaderAnnounce(){this._announceTimeoutId||this._ngZone.runOutsideAngular(()=>{this._announceTimeoutId=setTimeout(()=>{if(this._destroyed)return;let e=this._elementRef.nativeElement,t=e.querySelector("[aria-hidden]"),i=e.querySelector("[aria-live]");if(t&&i){let a=null;this._platform.isBrowser&&document.activeElement instanceof HTMLElement&&t.contains(document.activeElement)&&(a=document.activeElement),t.removeAttribute("aria-hidden"),i.appendChild(t),a?.focus(),this._onAnnounce.next(),this._onAnnounce.complete()}},this._announceDelay)})}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=b({type:n,selectors:[["mat-snack-bar-container"]],viewQuery:function(t,i){if(t&1&&q(et,7)(co,7),t&2){let a;w(a=D())&&(i._portalOutlet=a.first),w(a=D())&&(i._label=a.first)}},hostAttrs:[1,"mdc-snackbar","mat-mdc-snack-bar-container"],hostVars:6,hostBindings:function(t,i){t&1&&u("animationend",function(o){return i.onAnimationEnd(o.animationName)})("animationcancel",function(o){return i.onAnimationEnd(o.animationName)}),t&2&&S("mat-snack-bar-container-enter",i._animationState==="visible")("mat-snack-bar-container-exit",i._animationState==="hidden")("mat-snack-bar-container-animations-enabled",!i._animationsDisabled)},features:[ve],decls:6,vars:3,consts:[["label",""],[1,"mdc-snackbar__surface","mat-mdc-snackbar-surface"],[1,"mat-mdc-snack-bar-label"],["aria-hidden","true"],["cdkPortalOutlet",""]],template:function(t,i){t&1&&(c(0,"div",1)(1,"div",2,0)(3,"div",3),lt(4,lo,0,0,"ng-template",4),l(),y(5,"div"),l()()),t&2&&(d(5),f("aria-live",i._live)("role",i._role)("id",i._liveElementId))},dependencies:[et],styles:[`@keyframes _mat-snack-bar-enter {
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
`],encapsulation:2})}return n})(),fo=new R("mat-snack-bar-default-options",{providedIn:"root",factory:()=>new st}),On=(()=>{class n{_live=s(ua);_injector=s($);_breakpointObserver=s(ha);_parentSnackBar=s(n,{optional:!0,skipSelf:!0});_defaultConfig=s(fo);_animationsDisabled=te();_snackBarRefAtThisLevel=null;simpleSnackBarComponent=_o;snackBarContainerComponent=go;handsetCssClass="mat-mdc-snack-bar-handset";get _openedSnackBarRef(){let e=this._parentSnackBar;return e?e._openedSnackBarRef:this._snackBarRefAtThisLevel}set _openedSnackBarRef(e){this._parentSnackBar?this._parentSnackBar._openedSnackBarRef=e:this._snackBarRefAtThisLevel=e}constructor(){}openFromComponent(e,t){return this._attach(e,t)}openFromTemplate(e,t){return this._attach(e,t)}open(e,t="",i){let a=P(P({},this._defaultConfig),i);return a.data={message:e,action:t},a.announcementMessage===e&&(a.announcementMessage=void 0),this.openFromComponent(this.simpleSnackBarComponent,a)}dismiss(){this._openedSnackBarRef&&this._openedSnackBarRef.dismiss()}ngOnDestroy(){this._snackBarRefAtThisLevel&&this._snackBarRefAtThisLevel.dismiss()}_attachSnackBarContainer(e,t){let i=t&&t.viewContainerRef&&t.viewContainerRef.injector,a=$.create({parent:i||this._injector,providers:[{provide:st,useValue:t}]}),o=new Pe(this.snackBarContainerComponent,t.viewContainerRef,a),m=e.attach(o);return m.instance.snackBarConfig=t,m.instance}_attach(e,t){let i=P(P(P({},new st),this._defaultConfig),t),a=this._createOverlay(i),o=this._attachSnackBarContainer(a,i),m=new Ue(o,a);if(e instanceof oi){let _=new di(e,null,{$implicit:i.data,snackBarRef:m});m.instance=o.attachTemplatePortal(_)}else{let _=this._createInjector(i,m),v=new Pe(e,void 0,_),O=o.attachComponentPortal(v);m.instance=O.instance}return this._breakpointObserver.observe(va.HandsetPortrait).pipe(z(a.detachments())).subscribe(_=>{a.overlayElement.classList.toggle(this.handsetCssClass,_.matches)}),i.announcementMessage&&o._onAnnounce.subscribe(()=>{this._live.announce(i.announcementMessage,i.politeness)}),this._animateSnackBar(m,i),this._openedSnackBarRef=m,this._openedSnackBarRef}_animateSnackBar(e,t){e.afterDismissed().subscribe(()=>{this._openedSnackBarRef==e&&(this._openedSnackBarRef=null),t.announcementMessage&&this._live.clear()}),t.duration&&t.duration>0&&e.afterOpened().subscribe(()=>e._dismissAfter(t.duration)),this._openedSnackBarRef?(this._openedSnackBarRef.afterDismissed().subscribe(()=>{e.containerInstance.enter()}),this._openedSnackBarRef.dismiss()):e.containerInstance.enter()}_createOverlay(e){let t=new Et;t.direction=e.direction;let i=It(this._injector),a=e.direction==="rtl",o=e.horizontalPosition==="left"||e.horizontalPosition==="start"&&!a||e.horizontalPosition==="end"&&a,m=!o&&e.horizontalPosition!=="center";return o?i.left("0"):m?i.right("0"):i.centerHorizontally(),e.verticalPosition==="top"?i.top("0"):i.bottom("0"),t.positionStrategy=i,t.disableAnimations=this._animationsDisabled,tt(this._injector,t)}_createInjector(e,t){let i=e&&e.viewContainerRef&&e.viewContainerRef.injector;return $.create({parent:i||this._injector,providers:[{provide:Ue,useValue:t},{provide:$t,useValue:e.data}]})}static \u0275fac=function(t){return new(t||n)};static \u0275prov=ne({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var vo={info:"info",warning:"warning",error:"error"},Qt=class n{data=s($t);snackBarRef=s(Ue);icon=vo[this.data.severity];close(){this.snackBarRef.dismiss()}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=b({type:n,selectors:[["app-toast-message"]],decls:8,vars:4,consts:[[1,"toast-content"],[1,"toast-icon"],[1,"toast-message"],["type","button","aria-label","Dismiss",1,"toast-close",3,"click"]],template:function(e,t){e&1&&(c(0,"div",0)(1,"mat-icon",1),h(2),l(),c(3,"span",2),h(4),l(),c(5,"button",3),u("click",function(){return t.close()}),c(6,"mat-icon"),h(7,"close"),l()()()),e&2&&(Q("toast-"+t.data.severity),d(2),I(t.icon),d(2),I(t.data.message))},dependencies:[Re,Fe],styles:[".toast-content[_ngcontent-%COMP%]{display:flex;align-items:center;gap:10px;padding:10px 12px;border-radius:8px;color:#fff;min-width:260px;max-width:420px;box-shadow:0 4px 12px #0003}.toast-icon[_ngcontent-%COMP%]{flex:0 0 auto}.toast-message[_ngcontent-%COMP%]{flex:1 1 auto;font-size:14px;line-height:1.4;word-break:break-word}.toast-close[_ngcontent-%COMP%]{flex:0 0 auto;background:none;border:none;padding:4px;margin:-4px -4px -4px 0;cursor:pointer;display:flex;align-items:center;color:inherit;opacity:.85}.toast-close[_ngcontent-%COMP%]:hover{opacity:1}.toast-close[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:18px;width:18px;height:18px;line-height:18px}.toast-info[_ngcontent-%COMP%]{background-color:#1976d2}.toast-warning[_ngcontent-%COMP%]{background-color:#f57c00}.toast-error[_ngcontent-%COMP%]{background-color:#c62828}"]})};var bo=2500,Xt=class n{snackBar=s(On);info(r){this.show(r,"info")}warning(r){this.show(r,"warning")}error(r){this.show(r,"error")}show(r,e="info"){this.snackBar.openFromComponent(Qt,{data:{message:r,severity:e},duration:bo,horizontalPosition:"end",verticalPosition:"top",panelClass:["app-toast-panel",`app-toast-panel-${e}`]})}static \u0275fac=function(e){return new(e||n)};static \u0275prov=ne({token:n,factory:n.\u0275fac,providedIn:"root"})};var Ln={doc:{path:"M15.5,17H14L12,9.5L10,17H8.5L6.1,7H7.8L9.34,14.5L11.3,7H12.7L14.67,14.5L16.2,7H17.9M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3Z",color:"#2b579a"},docx:{path:"M15.5,17H14L12,9.5L10,17H8.5L6.1,7H7.8L9.34,14.5L11.3,7H12.7L14.67,14.5L16.2,7H17.9M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3Z",color:"#2b579a"},xlsx:{path:"M16.2,17H14.2L12,13.2L9.8,17H7.8L11,12L7.8,7H9.8L12,10.8L14.2,7H16.2L13,12M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3Z",color:"#217346"},xls:{path:"M16.2,17H14.2L12,13.2L9.8,17H7.8L11,12L7.8,7H9.8L12,10.8L14.2,7H16.2L13,12M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3Z",color:"#217346"},pdf:{path:"M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3M9.5 11.5C9.5 12.3 8.8 13 8 13H7V15H5.5V9H8C8.8 9 9.5 9.7 9.5 10.5V11.5M14.5 13.5C14.5 14.3 13.8 15 13 15H10.5V9H13C13.8 9 14.5 9.7 14.5 10.5V13.5M18.5 10.5H17V11.5H18.5V13H17V15H15.5V9H18.5V10.5M12 10.5H13V13.5H12V10.5M7 10.5H8V11.5H7V10.5Z",color:"#c62828"},ppt:{path:"M9.8,13.4H12.3C13.8,13.4 14.46,13.12 15.1,12.58C15.74,12.03 16,11.25 16,10.23C16,9.26 15.75,8.5 15.1,7.88C14.45,7.29 13.83,7 12.3,7H8V17H9.8V13.4M19,3A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5C3,3.89 3.9,3 5,3H19M9.8,12V8.4H12.1C12.76,8.4 13.27,8.65 13.6,9C13.93,9.35 14.1,9.72 14.1,10.24C14.1,10.8 13.92,11.19 13.6,11.5C13.28,11.81 12.9,12 12.22,12H9.8Z",color:"#d24726"},pptx:{path:"M9.8,13.4H12.3C13.8,13.4 14.46,13.12 15.1,12.58C15.74,12.03 16,11.25 16,10.23C16,9.26 15.75,8.5 15.1,7.88C14.45,7.29 13.83,7 12.3,7H8V17H9.8V13.4M19,3A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5C3,3.89 3.9,3 5,3H19M9.8,12V8.4H12.1C12.76,8.4 13.27,8.65 13.6,9C13.93,9.35 14.1,9.72 14.1,10.24C14.1,10.8 13.92,11.19 13.6,11.5C13.28,11.81 12.9,12 12.22,12H9.8Z",color:"#d24726"},mpp:{path:"M13,9H18.5L13,3.5V9M6,2H14L20,8V20A2,2 0 0,1 18,22H6C4.89,22 4,21.1 4,20V4C4,2.89 4.89,2 6,2M7,20H9V14H7V20M11,20H13V12H11V20M15,20H17V16H15V20Z",color:"#31855F"}};function Wt(n){return Ln[n]??null}var Gi=new Set(Object.keys(Ln));var Zt=class{bytes;view;sectorSize;miniSectorSize;headerRegionSize;miniStreamCutoff;firstDirSector;firstMiniFatSector;numMiniFatSectors;firstDifatSector;numFatSectors;difat;fat=[];miniFat=[];directory=[];miniStreamData=new Uint8Array(0);constructor(r){this.bytes=new Uint8Array(r),this.view=new DataView(r),this.parseHeader(),this.buildFat(),this.buildDirectory(),this.buildMiniFat(),this.buildMiniStream()}getAllEntries(){return this.directory.filter(r=>r.type!==0)}getRoot(){return this.directory[0]}getChildren(r){let e=[],t=i=>{if(i===-1)return;let a=this.directory[i];a&&(t(a.leftSibling),e.push(a),t(a.rightSibling))};return t(r.child),e}readStream(r){if(r.type!==2)throw new Error(`CFB directory entry "${r.name}" is not a stream`);return r.size===0?new Uint8Array(0):r.size<this.miniStreamCutoff?this.readFromMiniSectors(r.startSector,r.size):this.readFromRegularSectors(r.startSector,r.size)}parseHeader(){let r=[208,207,17,224,161,177,26,225];for(let i=0;i<8;i++)if(this.bytes[i]!==r[i])throw new Error("Not a valid .msg file: missing Compound File Binary signature");let e=this.view.getUint16(30,!0);this.sectorSize=1<<e;let t=this.view.getUint16(32,!0);this.miniSectorSize=1<<t,this.headerRegionSize=Math.max(512,this.sectorSize),this.numFatSectors=this.view.getUint32(44,!0),this.firstDirSector=this.view.getUint32(48,!0),this.miniStreamCutoff=this.view.getUint32(56,!0),this.firstMiniFatSector=this.view.getUint32(60,!0),this.numMiniFatSectors=this.view.getUint32(64,!0),this.firstDifatSector=this.view.getUint32(68,!0),this.difat=[];for(let i=0;i<109;i++)this.difat.push(this.view.getUint32(76+i*4,!0))}sectorOffset(r){return this.headerRegionSize+r*this.sectorSize}readSector(r){let e=this.sectorOffset(r);return this.bytes.slice(e,e+this.sectorSize)}buildFat(){let r=[];for(let i=0;i<109&&r.length<this.numFatSectors;i++){let a=this.difat[i];a!==4294967295&&r.push(a)}let e=this.firstDifatSector,t=this.sectorSize/4;for(;e!==4294967294&&e!==4294967295&&r.length<this.numFatSectors;){let i=this.readSector(e),a=new DataView(i.buffer,i.byteOffset,i.byteLength);for(let o=0;o<t-1&&r.length<this.numFatSectors;o++){let m=a.getUint32(o*4,!0);m!==4294967295&&r.push(m)}e=a.getUint32((t-1)*4,!0)}this.fat=[];for(let i of r){let a=this.readSector(i),o=new DataView(a.buffer,a.byteOffset,a.byteLength);for(let m=0;m<t;m++)this.fat.push(o.getUint32(m*4,!0))}}getChain(r,e){let t=[],i=r,a=0;for(;i!==4294967294&&i!==4294967295;)if(t.push(i),i=e[i],++a>2e6)throw new Error("Sector chain exceeded a sane length - file may be corrupt");return t}readFromRegularSectors(r,e){let t=this.getChain(r,this.fat),i=new Uint8Array(e),a=0;for(let o of t){let m=Math.min(this.sectorSize,e-a);if(m<=0)break;i.set(this.readSector(o).subarray(0,m),a),a+=m}return i}buildDirectory(){let r=this.getChain(this.firstDirSector,this.fat),e=this.sectorSize/128;this.directory=[];let t=0;for(let i of r){let a=this.readSector(i),o=new DataView(a.buffer,a.byteOffset,a.byteLength);for(let m=0;m<e;m++){let _=m*128,v=o.getUint16(_+64,!0),O="";if(v>2){let ai=a.subarray(_,_+v-2);O=new TextDecoder("utf-16le").decode(ai)}let Me=a[_+66],Le=o.getInt32(_+68,!0),Ae=o.getInt32(_+72,!0),ye=o.getInt32(_+76,!0),qe=o.getUint32(_+116,!0),vt=o.getUint32(_+120,!0),Ke=o.getUint32(_+124,!0)*4294967296+vt;this.directory.push({index:t,name:O,type:Me,leftSibling:Le,rightSibling:Ae,child:ye,startSector:qe,size:Ke}),t++}}}buildMiniFat(){if(this.miniFat=[],this.firstMiniFatSector===4294967294||this.numMiniFatSectors===0)return;let r=this.getChain(this.firstMiniFatSector,this.fat),e=this.sectorSize/4;for(let t of r){let i=this.readSector(t),a=new DataView(i.buffer,i.byteOffset,i.byteLength);for(let o=0;o<e;o++)this.miniFat.push(a.getUint32(o*4,!0))}}buildMiniStream(){let r=this.getRoot();if(!r||r.size===0){this.miniStreamData=new Uint8Array(0);return}this.miniStreamData=this.readFromRegularSectors(r.startSector,r.size)}readFromMiniSectors(r,e){let t=new Uint8Array(e),i=r,a=0,o=0;for(;i!==4294967294&&i!==4294967295&&a<e;){let m=i*this.miniSectorSize,_=Math.min(this.miniSectorSize,e-a);if(t.set(this.miniStreamData.subarray(m,m+_),a),a+=_,i=this.miniFat[i],++o>2e6)throw new Error("Mini sector chain exceeded a sane length - file may be corrupt")}return t}};var yo=55,Co=3098,wo=3103,Do=23809,xo=57,ko=3590,Mo=4096,Ao=3093,Eo=12289,So=12291,Io=14846,To=14087,Fo=14084,Ro=14081,Po=14085,Vo=3,Oo=64,Lo=31,No=30,Bo=258,Ho=32,zo=8,Yo=8,jo=1,Go=2,Uo={0:"NO_ATTACHMENT",1:"ATTACH_BY_VALUE",2:"ATTACH_BY_REFERENCE",3:"ATTACH_BY_REF_RESOLVE",4:"ATTACH_BY_REF_ONLY",5:"ATTACH_EMBEDDED_MSG",6:"ATTACH_OLE"},qo=/^__recip_version1\.0_#[0-9A-Fa-f]{8}$/,Ko=/^__attach_version1\.0_#[0-9A-Fa-f]{8}$/,Jt=class n{logger=s(Lt);async parse(r){try{let e=await r.arrayBuffer(),t=new Zt(e),i=t.getRoot(),a=t.getChildren(i),o=this.readString(t,a,yo)??"",m=this.cleanDisplayName(this.readString(t,a,Co)),_=this.readString(t,a,Do)??this.readString(t,a,wo)??"",v=this.normalizeBody(this.readString(t,a,Mo)??""),O=this.readPropertiesStream(t,a,Ho),Me=this.readSysTimeIso(O,xo)??this.readSysTimeIso(O,ko),Le=[],Ae=[];for(let H of a){if(H.type!==1||!qo.test(H.name))continue;let Ke=t.getChildren(H),ai=this.readPropertiesStream(t,Ke,zo),Ui=this.readLong(ai,Ao),qi={name:this.cleanDisplayName(this.readString(t,Ke,Eo)),email:this.readString(t,Ke,Io)??this.readString(t,Ke,So)??""};Ui===jo?Le.push(qi):Ui===Go&&Ae.push(qi)}let ye=this.readAttachments(t,a);ye.length>0&&this.logger.debugLog(`FileParserMsg: "${r.name}" has ${ye.length} attachment(s)`,ye.map(H=>({fileName:H.fileName,extension:H.extension,sizeBytes:H.bytes?H.bytes.length:null,attachMethod:H.attachMethod})));let qe=ye.filter(H=>H.bytes!==null).map(H=>({fileName:H.fileName,extension:H.extension,bytes:H.bytes})),vt={subject:o,from:{name:m,email:_},to:Le,cc:Ae,date:Me,body:v,attachments:qe};return this.logger.debugLog(`FileParserMsg: parsed "${r.name}"`,pe(P({},vt),{attachments:qe.map(H=>H.fileName)})),vt}catch(e){return this.logger.debugLog(`FileParserMsg: failed to parse "${r.name}"`,e),null}}readAttachments(r,e){let t=[];for(let i of e){if(i.type!==1||!Ko.test(i.name))continue;let a=r.getChildren(i),o=this.readPropertiesStream(r,a,Yo),m=this.readLong(o,Po),_=this.readString(r,a,To)??this.readString(r,a,Fo)??"(unnamed attachment)",v=this.readBinary(r,a,Ro);t.push({fileName:_,extension:this.extractExtension(_),bytes:v,attachMethod:m!==null?Uo[m]??`UNKNOWN(${m})`:"UNKNOWN"})}return t}extractExtension(r){let e=r.lastIndexOf(".");return e>=0?r.slice(e+1).toLowerCase():""}readBinary(r,e,t){let a=`__substg1.0_${t.toString(16).padStart(4,"0").toUpperCase()}${Bo.toString(16).padStart(4,"0").toUpperCase()}`,o=e.find(m=>m.type===2&&m.name===a);return o?r.readStream(o):null}cleanDisplayName(r){return r?r.replace(/\s*<[^>]*>\s*$/,"").trim():""}normalizeBody(r){let e=`\r
\r
 \r
\r
`,t=`\r
\r
`,i=r;for(;i.includes(e);)i=i.split(e).join(t);return i}readString(r,e,t){let i=t.toString(16).padStart(4,"0").toUpperCase(),a=`__substg1.0_${i}${Lo.toString(16).padStart(4,"0").toUpperCase()}`,o=e.find(v=>v.type===2&&v.name===a);if(o){let v=r.readStream(o);return new TextDecoder("utf-16le").decode(v).replace(/\u0000+$/,"")}let m=`__substg1.0_${i}${No.toString(16).padStart(4,"0").toUpperCase()}`,_=e.find(v=>v.type===2&&v.name===m);if(_){let v=r.readStream(_);return new TextDecoder("windows-1252").decode(v).replace(/\u0000+$/,"")}return null}readPropertiesStream(r,e,t){let i=new Map,a=e.find(v=>v.type===2&&v.name==="__properties_version1.0");if(!a)return i;let o=r.readStream(a),m=new DataView(o.buffer,o.byteOffset,o.byteLength),_=Math.floor((o.length-t)/16);for(let v=0;v<_;v++){let O=t+v*16,Me=m.getUint16(O,!0),Le=m.getUint16(O+2,!0),Ae=o.slice(O+8,O+16);i.set(Le,{propType:Me,value:Ae})}return i}readLong(r,e){let t=r.get(e);return!t||t.propType!==Vo?null:new DataView(t.value.buffer,t.value.byteOffset,t.value.byteLength).getInt32(0,!0)}readSysTimeIso(r,e){let t=r.get(e);if(!t||t.propType!==Oo)return null;let i=new DataView(t.value.buffer,t.value.byteOffset,t.value.byteLength),a=i.getUint32(0,!0),o=i.getUint32(4,!0),m=BigInt(o)<<32n|BigInt(a),v=Number((m-116444736000000000n)/10000n);return new Date(v).toISOString()}static \u0275fac=function(e){return new(e||n)};static \u0275prov=ne({token:n,factory:n.\u0275fac,providedIn:"root"})};var Qo=(n,r)=>r.FileName;function Xo(n,r){n&1&&(c(0,"div",2),h(1,"Nothing to show for this email."),l())}function Wo(n,r){if(n&1&&(c(0,"div",6)(1,"span",7),h(2,"To"),l(),c(3,"span",8),h(4),l()()),n&2){let e=p(2);d(4),I(e.formatRecipients(e.data.to))}}function Zo(n,r){if(n&1&&(c(0,"div",6)(1,"span",7),h(2,"Cc"),l(),c(3,"span",8),h(4),l()()),n&2){let e=p(2);d(4),I(e.formatRecipients(e.data.cc))}}function Jo(n,r){if(n&1&&(c(0,"div",6)(1,"span",7),h(2,"Date"),l(),c(3,"span",8),h(4),Xe(5,"date"),l()()),n&2){let e=p(2);d(4),I(mt(5,1,e.data.date,"dd MMM y, HH:mm"))}}function es(n,r){if(n&1){let e=U();c(0,"div",14),u("click",function(){let i=A(e).$implicit,a=p(3);return E(a.openDocument(i))}),re(),c(1,"svg",15),y(2,"path"),l(),Ne(),c(3,"span",16),h(4),l()()}if(n&2){let e,t,i=r.$implicit,a=p(3);d(2),f("d",(e=a.getFileTypeIcon(a.getDocExtension(i.FileName)))==null?null:e.path)("fill",(t=a.getFileTypeIcon(a.getDocExtension(i.FileName)))==null?null:t.color),d(2),I(i.OriginalName)}}function ts(n,r){if(n&1&&(c(0,"div",9)(1,"div",11),h(2,"Attachments"),l(),c(3,"div",12),oe(4,es,5,3,"div",13,Qo),l()()),n&2){let e=p(2);d(4),se(e.data.Docs)}}function is(n,r){if(n&1&&(c(0,"div",5)(1,"div",6)(2,"span",7),h(3,"From"),l(),c(4,"span",8),h(5),l()(),x(6,Wo,5,1,"div",6),x(7,Zo,5,1,"div",6),x(8,Jo,6,4,"div",6),l(),x(9,ts,6,0,"div",9),c(10,"div",10),h(11),l()),n&2){let e=p();d(5),dt("",e.data.from.name," <",e.data.from.email,">"),d(),k(e.data.to.length>0?6:-1),d(),k(e.data.cc.length>0?7:-1),d(),k(e.data.date?8:-1),d(),k(e.data.Docs&&e.data.Docs.length>0?9:-1),d(2),I(e.data.body)}}var ei=class n{data=s(Tt);dataService=s(Nt);formatRecipients(r){return r.map(e=>e.name||e.email).join("; ")}getDocExtension(r){let e=r.toLowerCase().split(".");return e.length>1?e[e.length-1]:""}getFileTypeIcon(r){return Wt(r)}openDocument(r){let e=this.dataService.getDocumentViewUrl(r.FileName,r.SourceDocId);window.open(e,"_blank","noopener,noreferrer")}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=b({type:n,selectors:[["app-email-dialog"]],decls:12,vars:2,consts:[["mat-dialog-title",""],[1,"email-dialog-content"],[1,"no-content"],["align","end"],["mat-button","","mat-dialog-close",""],[1,"email-meta"],[1,"email-meta-row"],[1,"email-meta-label"],[1,"email-meta-value"],[1,"email-docs"],[1,"email-body"],[1,"email-docs-label"],[1,"email-docs-list"],[1,"email-doc-chip"],[1,"email-doc-chip",3,"click"],["viewBox","0 0 24 24",1,"doc-type-icon"],[1,"email-doc-name"]],template:function(e,t){e&1&&(c(0,"h2",0)(1,"mat-icon"),h(2,"mail"),l(),h(3),l(),c(4,"mat-dialog-content",1),x(5,Xo,2,0,"div",2)(6,is,12,7),l(),c(7,"mat-dialog-actions",3)(8,"button",4)(9,"mat-icon"),h(10,"close"),l(),h(11," Close "),l()()),e&2&&(d(3),G(" ",t.data.subject||"(no subject)",`
`),d(2),k(!t.data.body&&t.data.to.length===0&&t.data.cc.length===0&&!t.data.date?5:6))},dependencies:[Vt,Fa,Ft,Pt,Rt,xe,De,Re,Fe,Mt],styles:["h2[mat-dialog-title][_ngcontent-%COMP%]{display:flex;align-items:center;gap:12px}mat-dialog-content[_ngcontent-%COMP%]{min-height:300px;max-height:60vh}.no-content[_ngcontent-%COMP%]{text-align:center;color:var(--mat-sys-on-surface-variant);padding:48px 16px;font-size:16px}.email-meta[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:1px;margin-bottom:8px}.email-meta-row[_ngcontent-%COMP%]{display:flex;gap:12px;padding:12px;background-color:var(--mat-sys-surface-container-low);font-size:13px;border-radius:4px}.email-meta-label[_ngcontent-%COMP%]{flex:0 0 40px;color:var(--mat-sys-primary);font-weight:600}.email-meta-value[_ngcontent-%COMP%]{color:var(--mat-sys-on-surface);word-break:break-word}.email-body[_ngcontent-%COMP%]{margin:8px 0 0;padding:12px;background-color:var(--mat-sys-surface-container);border-radius:4px;font-size:13px;line-height:1.5;color:var(--mat-sys-on-surface-variant);border-left:3px solid var(--mat-sys-primary);white-space:pre-wrap;word-break:break-word}.email-docs[_ngcontent-%COMP%]{margin-top:16px}.email-docs-label[_ngcontent-%COMP%]{font-size:12px;font-weight:600;color:var(--mat-sys-on-surface-variant);text-transform:uppercase;letter-spacing:.04em;margin-bottom:6px}.email-docs-list[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:4px}.email-doc-chip[_ngcontent-%COMP%]{display:flex;align-items:center;gap:8px;padding:8px 10px;border-radius:6px;background-color:var(--mat-sys-surface-container-low);border:1px solid var(--mat-sys-outline-variant, #d5d8dc);cursor:pointer;transition:background-color .15s ease,border-color .15s ease}.email-doc-chip[_ngcontent-%COMP%]:hover{background-color:var(--mat-sys-surface-container);border-color:var(--mat-sys-primary)}.email-doc-chip[_ngcontent-%COMP%]   .doc-type-icon[_ngcontent-%COMP%]{width:18px;height:18px;flex:0 0 auto}.email-doc-name[_ngcontent-%COMP%]{font-size:13px;color:var(--mat-sys-on-surface);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}mat-dialog-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{display:flex;align-items:center;gap:8px}"]})};var ti=class n{data=s(Tt);dialogRef=s(Ia);confirm(){this.dialogRef.close(!0)}cancel(){this.dialogRef.close(!1)}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=b({type:n,selectors:[["app-confirm-dialog"]],decls:16,vars:5,consts:[["mat-dialog-title",""],[1,"confirm-message"],["align","end"],["mat-button","",3,"click"],["mat-raised-button","","color","warn",3,"click"]],template:function(e,t){e&1&&(c(0,"h2",0)(1,"mat-icon"),h(2),l(),h(3),l(),c(4,"mat-dialog-content")(5,"p",1),h(6),l()(),c(7,"mat-dialog-actions",2)(8,"button",3),u("click",function(){return t.cancel()}),c(9,"mat-icon"),h(10,"close"),l(),h(11),l(),c(12,"button",4),u("click",function(){return t.confirm()}),c(13,"mat-icon"),h(14,"delete"),l(),h(15),l()()),e&2&&(d(2),I(t.data.icon||"warning"),d(),G(" ",t.data.title,`
`),d(3),I(t.data.message),d(5),G(" ",t.data.cancelText||"Cancel"," "),d(4),G(" ",t.data.confirmText||"Delete"," "))},dependencies:[Vt,Ft,Pt,Rt,xe,De,Re,Fe],styles:["h2[mat-dialog-title][_ngcontent-%COMP%]{display:flex;align-items:center;gap:12px}.confirm-message[_ngcontent-%COMP%]{margin:0;font-size:14px;color:var(--mat-sys-on-surface-variant)}mat-dialog-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{display:flex;align-items:center;gap:8px}"]})};var Bn=/(https?:\/\/[^\s<>"']+)/g,ii=class n{transform(r){if(!r)return"";let e="",t=0,i;for(Bn.lastIndex=0;(i=Bn.exec(r))!==null;){let a=i[0],o=i.index;e+=this.escapeHtml(r.slice(t,o)),e+=this.buildLink(a),t=o+a.length}return e+=this.escapeHtml(r.slice(t)),e}buildLink(r){let e=this.extractDomain(r),t=this.escapeHtml(r),i=this.escapeHtml(e);return`<a href="${t}" target="_blank" rel="noopener noreferrer">${i}</a>`}extractDomain(r){try{return new URL(r).hostname}catch{return r}}escapeHtml(r){return r.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}static \u0275fac=function(e){return new(e||n)};static \u0275pipe=ea({name:"linkify",type:n,pure:!0})};var as=["commentsList"],ns=()=>[],rs=(n,r)=>r.Id,zn=(n,r)=>r.Gnid,os=(n,r)=>r.FileName;function ss(n,r){n&1&&y(0,"mat-progress-bar",4)}function cs(n,r){if(n&1){let e=U();c(0,"button",36),u("click",function(){A(e);let i=p();return E(i.assignToMe())}),c(1,"mat-icon"),h(2,"person_add"),l()()}}function ls(n,r){if(n&1&&(c(0,"mat-option",25),h(1),l()),n&2){let e=r.$implicit;C("value",e.Id),d(),I(e.Title)}}function ds(n,r){if(n&1){let e=U();c(0,"mat-chip-row",37),u("removed",function(){let i=A(e).$implicit,a=p();return E(a.removeTag(i))}),h(1),c(2,"button",38)(3,"mat-icon"),h(4,"cancel"),l()()()}if(n&2){let e=r.$implicit;d(),G(" #",e," "),d(),f("aria-label","Remove #"+e)}}function ms(n,r){if(n&1){let e=U();c(0,"div",47),u("click",function(){let i=A(e).$implicit,a=p(3);return E(a.openEmailDialog(i))}),c(1,"mat-icon"),h(2,"mail"),l(),c(3,"span",48),h(4),Xe(5,"date"),l(),c(6,"span",49),h(7),l()()}if(n&2){let e=r.$implicit;d(4),I(mt(5,2,e.date,"dd MMM y")),d(3),I(e.subject)}}function hs(n,r){if(n&1){let e=U();c(0,"div",47),u("click",function(){let i=A(e).$implicit,a=p(3);return E(a.onDocumentClick(i))}),re(),c(1,"svg",50),y(2,"path"),l(),Ne(),c(3,"span",49),h(4),l()()}if(n&2){let e,t,i=r.$implicit,a=p(3);d(2),f("d",(e=a.getFileTypeIcon(a.getDocExtension(i.FileName)))==null?null:e.path)("fill",(t=a.getFileTypeIcon(a.getDocExtension(i.FileName)))==null?null:t.color),d(2),I(i.OriginalName)}}function ps(n,r){if(n&1&&(c(0,"div",45),oe(1,ms,8,5,"div",46,zn),oe(3,hs,5,3,"div",46,os),l()),n&2){let e=p().$implicit,t=p();d(),se(t.getEmailsForComment(e.Gnid)),d(2),se(e.Docs??na(0,ns))}}function us(n,r){if(n&1){let e=U();c(0,"div",39),u("dragover",function(i){let a=A(e).$implicit,o=p();return E(o.onCommentDragOver(i,a))})("dragleave",function(){let i=A(e).$implicit,a=p();return E(a.onCommentDragLeave(i))})("drop",function(i){let a=A(e).$implicit,o=p();return E(o.onCommentDrop(i,a))}),c(1,"div",40)(2,"span",41),h(3),l(),c(4,"button",42),u("click",function(){let i=A(e).$implicit,a=p();return E(a.deleteComment(i))}),c(5,"mat-icon"),h(6,"delete"),l()()(),y(7,"p",43),Xe(8,"linkify"),c(9,"span",44),h(10),Xe(11,"date"),l(),x(12,ps,5,1,"div",45),l()}if(n&2){let e=r.$implicit,t=p();S("drag-over",t.dragOverCommentGnid()===e.Gnid),d(3),I(e.Author),d(),C("disabled",t.isLoading()),d(3),C("innerHTML",ra(8,7,e.Text),Zi),d(3),I(mt(11,9,e.Timestamp,"dd MMM y, HH:mm")),d(2),k(t.getEmailsForComment(e.Gnid).length>0||e.Docs&&e.Docs.length>0?12:-1)}}function _s(n,r){n&1&&(c(0,"p",31),h(1,"No comments yet."),l())}var Hn=class n{logger=s(Lt);router=s(la);fb=s(La);dataService=s(Nt);fileParserMsg=s(Jt);dialog=s(Ta);toast=s(Xt);gnid;isLoading=M(!1);topic=M(null);comments=M([]);emails=M([]);dragOverCommentGnid=M(null);commentsListEl=ca("commentsList");siteUsers=M([]);tags=M([]);tagSeparatorKeys=[13,188];topicForm=this.fb.group({title:["",it.required],description:[""],open:[!0],owner:[null],closed:[null]});initialized=!1;async ngOnInit(){this.logger.debugLog("Topic component initialized",{gnid:this.gnid}),this.topicForm.get("title").valueChanges.pipe(ni(800),ri()).subscribe(()=>this.autoSaveTopic()),this.topicForm.get("description").valueChanges.pipe(ni(800),ri()).subscribe(()=>this.autoSaveTopic()),this.topicForm.get("open").valueChanges.subscribe(r=>{r===!1&&this.topicForm.get("closed").setValue(new Date,{emitEvent:!1}),this.autoSaveTopic()}),this.topicForm.get("owner").valueChanges.subscribe(()=>this.autoSaveTopic()),this.topicForm.get("closed").valueChanges.subscribe(()=>this.autoSaveTopic()),this.isLoading.set(!0);try{await this.dataService.ready,this.loadTopic(),this.loadComments(),this.loadEmails(),this.loadSiteUsers(),this.initialized=!0}finally{this.isLoading.set(!1)}}ngOnChanges(r){this.initialized&&r.gnid&&!r.gnid.firstChange&&(this.loadTopic(),this.loadComments(),this.loadEmails())}loadTopic(){let e=this.dataService.getItems("Topic").find(t=>t.Gnid===this.gnid)??null;this.topic.set(e),this.tags.set(e?.tags??[]),e?this.topicForm.setValue({title:e.Title??"",description:e.Description??"",open:e.Open??!1,owner:e.Owner?Number(e.Owner):null,closed:e.Closed?new Date(e.Closed):null},{emitEvent:!1}):this.topicForm.reset({title:"",description:"",open:!0,owner:null,closed:null},{emitEvent:!1})}loadSiteUsers(){let e=this.dataService.getItems("siteUsers").filter(t=>t.PrincipalType===1&&!!t.Email);this.siteUsers.set(e)}hasOwner(){return!!this.topicForm.get("owner")?.value}assignToMe(){let r=this.dataService.getCurrentUserFromCache()?.Id;r!=null&&this.topicForm.get("owner").setValue(r)}async autoSaveTopic(){let r=this.topic();if(!r||this.topicForm.invalid)return;let{title:e,description:t,open:i,owner:a,closed:o}=this.topicForm.getRawValue(),m=e??"",_=t??"",v=i??!0,O=o?o.getTime():null,ye=r,{Id:Me,Gnid:Le}=ye,Ae=bt(ye,["Id","Gnid"]);this.isLoading.set(!0);try{await this.dataService.updateItem("Topic",r.Id,pe(P({},Ae),{Title:m,Description:_,Open:v,Owner:a,Closed:O})),this.topic.set(pe(P({},r),{Title:m,Description:_,Open:v,Owner:a,Closed:O})),this.logger.debugLog("Topic details auto-saved",{gnid:this.gnid})}catch(qe){this.logger.debugLog("Failed to auto-save topic details",qe)}finally{this.isLoading.set(!1)}}addTag(r){let e=this.normalizeTag(r.value??"");e&&!this.tags().includes(e)&&(this.tags.update(t=>[...t,e]),this.saveTags()),r.chipInput.clear()}normalizeTag(r){return r.trim().replace(/^#+/,"").toLowerCase().replace(/\s+/g,"-")}removeTag(r){this.tags.update(e=>e.filter(t=>t!==r)),this.saveTags()}async saveTags(){let r=this.topic();if(!r)return;let o=r,{Id:e,Gnid:t}=o,i=bt(o,["Id","Gnid"]),a=this.tags();this.isLoading.set(!0);try{await this.dataService.updateItem("Topic",r.Id,pe(P({},i),{tags:a})),this.topic.set(pe(P({},r),{tags:a})),this.logger.debugLog("Topic tags saved",{gnid:this.gnid,tags:a})}catch(m){this.logger.debugLog("Failed to save topic tags",m),this.tags.set(r.tags??[])}finally{this.isLoading.set(!1)}}onCommentDragOver(r,e){r.preventDefault(),this.dragOverCommentGnid.set(e.Gnid)}onCommentDragLeave(r){this.dragOverCommentGnid()===r.Gnid&&this.dragOverCommentGnid.set(null)}async onCommentDrop(r,e){r.preventDefault(),this.dragOverCommentGnid.set(null);let t=r.dataTransfer?.files;if(!(!t||t.length===0))for(let i=0;i<t.length;i++){let a=t[i],o=this.comments().find(m=>m.Gnid===e.Gnid)??e;try{await this.handleDroppedFile(a,o)}catch(m){this.logger.debugLog("Unexpected error handling a dropped file - continuing with remaining files",{fileName:a.name,error:m})}}}async handleDroppedFile(r,e){let t=this.getFileExtension(r),i=this.resolveFileKind(r,t);if(i==="msg"){this.logger.debugLog("MSG file dropped on comment",{comment:e.Gnid,fileName:r.name});let o=await this.fileParserMsg.parse(r);o&&await this.saveEmail(e,o);return}if(Gi.has(i)){await this.saveDocument(e,r);return}let a=t?`.${t}`:r.name;this.logger.debugLog("Dropped file is not a supported file type - ignoring",{comment:e.Gnid,fileName:r.name,fileType:r.type}),this.toast.error(`File type ${a} not allowed`)}getFileExtension(r){let e=r.name.toLowerCase().split(".");return e.length>1?e[e.length-1]:""}getFileTypeIcon(r){return Wt(r)}getDocExtension(r){let e=r.toLowerCase().split(".");return e.length>1?e[e.length-1]:""}onDocumentClick(r){let e=this.getDocExtension(r.FileName);switch(e){case"xlsx":case"xls":case"doc":case"docx":case"pdf":case"ppt":case"pptx":{let t=this.dataService.getDocumentViewUrl(r.FileName,r.SourceDocId);window.open(t,"_blank","noopener,noreferrer");break}case"mpp":{let t=this.dataService.getDocumentDesktopUrl(r.FileName,"ms-project");this.logger.debugLog("Opening .mpp in desktop Microsoft Project",{fileName:r.FileName,originalName:r.OriginalName,uri:t}),window.location.href=t;break}default:this.logger.debugLog("Document clicked - no handler for this file type",{fileName:r.FileName,originalName:r.OriginalName,extension:e});break}}resolveFileKind(r,e){return e==="msg"||r.type==="application/vnd.ms-outlook"?"msg":e}async saveDocument(r,e){this.isLoading.set(!0);try{let{fileName:t,originalName:i,sourceDocId:a}=await this.dataService.addDocument("Comment",r,e);this.loadComments(),this.logger.debugLog("Document uploaded and linked to comment",{comment:r.Gnid,fileName:t,originalName:i,sourceDocId:a})}catch(t){this.logger.debugLog("Failed to upload document",t)}finally{this.isLoading.set(!1)}}async saveEmail(r,e){this.isLoading.set(!0);try{let t=e,{attachments:i}=t,a=bt(t,["attachments"]),o=await this.dataService.addItem("Email",P({Parent:r.Gnid},a));await this.saveEmailAttachments(o,i),this.loadEmails(),this.logger.debugLog("Email saved as child of comment",{comment:r.Gnid,subject:e.subject,attachmentCount:i.length})}catch(i){this.logger.debugLog("Failed to save parsed email",i)}finally{this.isLoading.set(!1)}}async saveEmailAttachments(r,e){let t=r;for(let i of e){if(!Gi.has(i.extension)){this.logger.debugLog("Skipping email attachment - unsupported file type",{fileName:i.fileName,extension:i.extension});continue}try{let a=new File([new Uint8Array(i.bytes)],i.fileName),o=await this.dataService.addDocument("Email",t,a),m=t.Docs??[];t=pe(P({},t),{Docs:[...m,{FileName:o.fileName,OriginalName:o.originalName,SourceDocId:o.sourceDocId}]})}catch(a){this.logger.debugLog("Failed to upload email attachment - continuing with remaining attachments",{fileName:i.fileName,error:a})}}}loadComments(){let e=this.dataService.getItems("Comment").filter(t=>t.Parent===this.gnid).sort((t,i)=>t.Timestamp-i.Timestamp);this.comments.set(e),this.scrollCommentsToBottom()}scrollCommentsToBottom(){setTimeout(()=>{let r=this.commentsListEl()?.nativeElement;r&&this.animateScrollTo(r,r.scrollHeight,250)})}animateScrollTo(r,e,t){let i=r.scrollTop,a=e-i;if(a===0)return;let o=performance.now(),m=_=>{let v=_-o,O=Math.min(v/t,1),Me=1-Math.pow(1-O,3);r.scrollTop=i+a*Me,O<1&&requestAnimationFrame(m)};requestAnimationFrame(m)}loadEmails(){this.emails.set(this.dataService.getItems("Email"))}getEmailsForComment=r=>this.emails().filter(e=>e.Parent===r).sort((e,t)=>this.toTime(e.date)-this.toTime(t.date));toTime(r){return r?new Date(r).getTime():0}openEmailDialog(r){this.dialog.open(ei,{width:"70vw",height:"80vh",maxWidth:"90vw",maxHeight:"90vh",data:r})}deleteComment(r){this.dialog.open(ti,{width:"360px",data:{title:"Delete Comment?",message:"This will permanently remove the comment. This cannot be undone.",confirmText:"Delete",cancelText:"Cancel",icon:"delete"}}).afterClosed().subscribe(t=>{t&&this.performDeleteComment(r)})}async performDeleteComment(r){this.isLoading.set(!0);try{await this.deleteDocumentsFor(r),await this.deleteChildrenOf(r.Gnid),await this.dataService.deleteItem("Comment",r.Id),this.loadComments(),this.loadEmails(),this.logger.debugLog("Comment, its children, and its documents deleted",{gnid:r.Gnid})}catch(e){this.logger.debugLog("Failed to delete comment",e)}finally{this.isLoading.set(!1)}}async deleteDocumentsFor(r){let e=Array.isArray(r?.Docs)?r.Docs:[];await Promise.all(e.map(async t=>{try{await this.dataService.deleteDocument(t.FileName)}catch(i){this.logger.debugLog("Failed to delete document file - continuing",{fileName:t.FileName,originalName:t.OriginalName,error:i})}}))}async deleteChildrenOf(r){let e=this.dataService.getAllData(),t=[];for(let[i,a]of Object.entries(e))for(let o of a)o?.Parent===r&&t.push(this.deleteDocumentsFor(o).then(()=>this.dataService.deleteItem(i,o.Id)));await Promise.all(t)}onCommentKeydown(r,e){r.key==="Enter"&&!r.shiftKey&&(r.preventDefault(),this.addComment(e))}async addComment(r){let e=r.value.trim();if(!(!e||this.isLoading())){this.isLoading.set(!0);try{let t=this.dataService.getCurrentUserFromCache()?.Title??"";await this.dataService.addItem("Comment",{Parent:this.gnid,Text:e,Author:t,Timestamp:Date.now()}),this.loadComments(),r.value="",this.logger.debugLog("Comment added",{parent:this.gnid})}catch(t){this.logger.debugLog("Failed to add comment",t)}finally{this.isLoading.set(!1)}}}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=b({type:n,selectors:[["app-topic"]],viewQuery:function(e,t){e&1&&ia(t.commentsListEl,as,5),e&2&&aa()},inputs:{gnid:"gnid"},features:[J([kn()]),W],decls:68,vars:12,consts:[["closedPicker",""],["tagChipGrid",""],["commentsList",""],["commentInput",""],["mode","indeterminate"],[1,"topic-container"],[1,"header-row"],[1,"page-title"],[1,"cards-grid"],[1,"details-column"],[1,"topic-detail-card"],[1,"topic-details-form",3,"formGroup"],["appearance","outline","subscriptSizing","dynamic",1,"detail-field"],["matInput","","type","text","formControlName","title"],["matInput","","rows","4","formControlName","description"],[1,"field-row"],[1,"detail-field","toggle-field"],["id","open-toggle-label",1,"toggle-label"],["formControlName","open","aria-labelledby","open-toggle-label"],["matInput","","formControlName","closed",3,"matDatepicker"],["matSuffix","",3,"for"],[1,"owner-row"],["type","button","mat-icon-button","","title","Assign to me","aria-label","Assign to me",1,"assign-me-btn"],["appearance","outline","subscriptSizing","dynamic",1,"detail-field","owner-field"],["formControlName","owner"],[3,"value"],["aria-label","Topic tags"],["placeholder","Add tag...",3,"matChipInputTokenEnd","matChipInputFor","matChipInputSeparatorKeyCodes","matChipInputAddOnBlur","disabled"],[1,"topic-detail-card","notes-card"],[1,"comments-list"],[1,"comment-bubble",3,"drag-over"],[1,"comments-empty"],["appearance","outline","subscriptSizing","dynamic",1,"add-comment-field"],["matInput","","rows","3","placeholder","Add comment ...",3,"keydown"],["mat-icon-button","","matSuffix","","type","button","aria-label","Send comment",3,"click","disabled"],[1,"comment-input-hint"],["type","button","mat-icon-button","","title","Assign to me","aria-label","Assign to me",1,"assign-me-btn",3,"click"],[3,"removed"],["matChipRemove",""],[1,"comment-bubble",3,"dragover","dragleave","drop"],[1,"comment-header"],[1,"comment-author"],["mat-icon-button","","aria-label","Delete comment",1,"comment-delete-btn",3,"click","disabled"],[1,"comment-text",3,"innerHTML"],[1,"comment-timestamp"],[1,"comment-emails"],[1,"comment-email-chip"],[1,"comment-email-chip",3,"click"],[1,"comment-email-date"],[1,"comment-email-subject"],["viewBox","0 0 24 24",1,"doc-type-icon"]],template:function(e,t){if(e&1){let i=U();x(0,ss,1,0,"mat-progress-bar",4),c(1,"div",5)(2,"div",6)(3,"h1",7),h(4),l()(),c(5,"div",8)(6,"div",9)(7,"mat-card",10)(8,"mat-toolbar")(9,"span"),h(10,"Details"),l()(),c(11,"mat-card-content")(12,"div",11)(13,"mat-form-field",12)(14,"mat-label"),h(15,"Title"),l(),y(16,"input",13),l(),c(17,"mat-form-field",12)(18,"mat-label"),h(19,"Description"),l(),y(20,"textarea",14),l(),c(21,"div",15)(22,"div",16)(23,"span",17),h(24,"Open"),l(),y(25,"mat-slide-toggle",18),l(),c(26,"mat-form-field",12)(27,"mat-label"),h(28,"Closed"),l(),y(29,"input",19)(30,"mat-datepicker-toggle",20)(31,"mat-datepicker",null,0),l()(),c(33,"div",21),x(34,cs,3,0,"button",22),c(35,"mat-form-field",23)(36,"mat-label"),h(37,"Owner"),l(),c(38,"mat-select",24),oe(39,ls,2,2,"mat-option",25,rs),l()()(),c(41,"mat-form-field",12)(42,"mat-label"),h(43,"Tags"),l(),c(44,"mat-chip-grid",26,1),oe(46,ds,5,2,"mat-chip-row",null,ta),l(),c(48,"input",27),u("matChipInputTokenEnd",function(o){return t.addTag(o)}),l()()()()()(),c(49,"mat-card",28)(50,"mat-toolbar")(51,"span"),h(52,"Notes"),l()(),c(53,"mat-card-content")(54,"div",29,2),oe(56,us,13,12,"div",30,zn,!1,_s,2,0,"p",31),l()(),c(59,"mat-card-footer")(60,"mat-form-field",32)(61,"textarea",33,3),u("keydown",function(o){A(i);let m=ze(62);return E(t.onCommentKeydown(o,m))}),l(),c(63,"button",34),u("click",function(){A(i);let o=ze(62);return E(t.addComment(o))}),c(64,"mat-icon"),h(65,"send"),l()()(),c(66,"span",35),h(67,"[Enter] to submit. [Shift]+[Enter] for new line."),l()()()()()}if(e&2){let i,a=ze(32),o=ze(45);k(t.isLoading()?0:-1),d(4),I((i=t.topic())==null?null:i.Title),d(8),C("formGroup",t.topicForm),d(17),C("matDatepicker",a),d(),C("for",a),d(4),k(t.hasOwner()?-1:34),d(5),se(t.siteUsers()),d(7),se(t.tags()),d(2),C("matChipInputFor",o)("matChipInputSeparatorKeyCodes",t.tagSeparatorKeys)("matChipInputAddOnBlur",!0)("disabled",t.isLoading()),d(8),se(t.comments()),d(7),C("disabled",t.isLoading())}},dependencies:[Ya,Ba,Ha,za,Ga,ja,Re,Fe,xe,ht,rn,nn,$a,Ka,Ua,qa,Za,Wa,tn,en,Ja,sn,fi,xn,Dn,Kt,Ii,Vn,Rn,Pn,Fn,Bi,Na,Ra,Pa,Va,ut,Oa,Mt,ii],styles:["[_nghost-%COMP%]{display:block;height:100%}.topic-container[_ngcontent-%COMP%]{height:100%;padding:20px;box-sizing:border-box;display:flex;flex-direction:column}.header-row[_ngcontent-%COMP%]{display:flex;align-items:center;gap:8px;margin-bottom:16px;flex:0 0 auto}.page-title[_ngcontent-%COMP%]{margin:0;font-size:24px;font-weight:500}.cards-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 1fr;gap:20px;margin-top:20px;flex:1 1 auto;min-height:0}.details-column[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:20px;min-height:0}.details-column[_ngcontent-%COMP%]   .topic-detail-card[_ngcontent-%COMP%]{flex:1 1 auto;min-height:0}.topic-detail-card[_ngcontent-%COMP%]{padding:0;border-radius:0;box-shadow:0 5px 5px -3px #0003,0 8px 10px 1px #00000024,0 3px 14px 2px #0000001f;min-height:300px;background:transparent;color:var(--text-primary);display:flex;flex-direction:column}.notes-card[_ngcontent-%COMP%]{min-height:0}.notes-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]{flex:1 1 auto;min-height:0;display:flex;flex-direction:column}mat-toolbar[_ngcontent-%COMP%]{min-height:56px;height:auto;padding:4px 16px;font-size:14px;font-weight:500;display:flex;align-items:center;gap:12px;background:color-mix(in srgb,var(--surface-0) 95%,black 5%);color:var(--text-primary);border-bottom:.5px solid var(--border);flex:0 0 auto}mat-card-content[_ngcontent-%COMP%]{padding:16px!important}.topic-details-form[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:16px}.field-row[_ngcontent-%COMP%]{display:flex;gap:16px}.field-row[_ngcontent-%COMP%]   .detail-field[_ngcontent-%COMP%]{flex:1 1 0;min-width:0}.field-row[_ngcontent-%COMP%]   .detail-field.toggle-field[_ngcontent-%COMP%]{flex:0 0 auto;width:auto}.detail-field[_ngcontent-%COMP%]{width:100%;--mdc-outlined-text-field-outline-color: var(--border);--mdc-outlined-text-field-hover-outline-color: var(--text-muted);--mdc-outlined-text-field-focus-outline-color: var(--text-accent);--mdc-outlined-text-field-label-text-color: var(--text-muted);--mdc-outlined-text-field-input-text-color: var(--text-primary)}.detail-field[_ngcontent-%COMP%]     .mat-mdc-text-field-wrapper.mdc-text-field--outlined{background-color:var(--surface-1)!important;border-radius:4px}.detail-field[_ngcontent-%COMP%]   mat-chip-grid[_ngcontent-%COMP%]{margin-bottom:4px}.comments-list[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:10px;flex:1 1 auto;min-height:0;overflow-y:auto}.comment-bubble[_ngcontent-%COMP%]{background-color:var(--surface-1);border:.5px solid var(--border);border-radius:12px;padding:10px 14px;max-width:85%;align-self:flex-start;box-shadow:0 1px 2px #00000014;transition:background-color .15s ease,border-color .15s ease}.comment-bubble.drag-over[_ngcontent-%COMP%]{background-color:var(--bg-accent);border-color:var(--text-accent);border-style:dashed}.comment-header[_ngcontent-%COMP%]{display:flex;align-items:flex-start;justify-content:space-between;gap:8px}.comment-author[_ngcontent-%COMP%]{display:block;font-size:12px;font-weight:600;color:var(--text-accent);margin-bottom:2px}.comment-delete-btn[_ngcontent-%COMP%]{flex:0 0 auto;width:28px;height:28px;padding:2px;line-height:24px;color:var(--text-muted);margin-top:-4px;margin-right:-6px}.comment-delete-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:18px;width:18px;height:18px;line-height:18px}.comment-delete-btn[_ngcontent-%COMP%]:hover{color:#c62828}.comment-text[_ngcontent-%COMP%]{margin:0;font-size:14px;line-height:1.4;color:var(--text-primary);white-space:pre-wrap;word-break:break-word}.comment-text[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:var(--text-secondary);text-decoration:underline;word-break:break-all}.comment-text[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color:var(--text-accent)}.comment-timestamp[_ngcontent-%COMP%]{display:block;margin-top:4px;font-size:11px;color:var(--text-muted);text-align:right}.comment-emails[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:4px;margin-top:8px;padding-top:8px;border-top:.5px solid var(--border)}.comment-email-chip[_ngcontent-%COMP%]{display:flex;align-items:center;gap:6px;padding:4px 6px;border-radius:6px;background-color:var(--surface-2);border:.5px solid var(--border);cursor:pointer;transition:background-color .15s ease,border-color .15s ease;max-width:100%;overflow:hidden}.comment-email-chip[_ngcontent-%COMP%]:hover{background-color:var(--bg-accent);border-color:var(--text-accent)}.comment-email-chip[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:16px;width:16px;height:16px;line-height:16px;color:var(--text-accent);flex:0 0 auto}.comment-email-chip[_ngcontent-%COMP%]   .doc-type-icon[_ngcontent-%COMP%]{width:16px;height:16px;flex:0 0 auto}.comment-email-date[_ngcontent-%COMP%]{font-size:12px;color:var(--text-muted);flex:0 0 auto;white-space:nowrap}.comment-email-subject[_ngcontent-%COMP%]{font-size:12px;color:var(--text-primary);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;flex:1 1 auto;min-width:0}.comments-empty[_ngcontent-%COMP%]{margin:0;font-size:14px;color:var(--text-muted);font-style:italic}mat-card-footer[_ngcontent-%COMP%]{display:block;padding:8px 12px;border-top:.5px solid var(--border);flex:0 0 auto}.add-comment-field[_ngcontent-%COMP%]{width:100%;--mdc-outlined-text-field-outline-color: var(--border);--mdc-outlined-text-field-hover-outline-color: var(--text-muted);--mdc-outlined-text-field-focus-outline-color: var(--text-accent);--mdc-outlined-text-field-input-text-color: var(--text-primary)}.add-comment-field[_ngcontent-%COMP%]     .mat-mdc-text-field-wrapper.mdc-text-field--outlined{background-color:var(--surface-1)!important;border-radius:4px}.comment-input-hint[_ngcontent-%COMP%]{display:block;margin-top:4px;font-size:11px;color:var(--text-muted)}.add-comment-field[_ngcontent-%COMP%]   .mat-mdc-form-field-infix[_ngcontent-%COMP%]{min-height:0;padding-top:8px;padding-bottom:8px}.add-comment-field[_ngcontent-%COMP%]   textarea.mat-mdc-input-element[_ngcontent-%COMP%]{resize:none;line-height:1.4}.add-comment-field[_ngcontent-%COMP%]   .mat-mdc-form-field-icon-suffix[_ngcontent-%COMP%]{align-self:flex-end;padding-bottom:4px}.add-comment-field[_ngcontent-%COMP%]   .mat-mdc-icon-button[_ngcontent-%COMP%]{width:32px;height:32px;padding:4px;color:var(--text-muted)}.add-comment-field[_ngcontent-%COMP%]   .mat-mdc-icon-button[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:20px;width:20px;height:20px;line-height:20px}.toggle-field[_ngcontent-%COMP%]{display:flex;align-items:center;gap:12px;height:56px}.toggle-label[_ngcontent-%COMP%]{font-size:14px;color:var(--text-primary)}.owner-row[_ngcontent-%COMP%]{display:flex;align-items:center;gap:8px}.owner-row[_ngcontent-%COMP%]   .detail-field.owner-field[_ngcontent-%COMP%]{flex:1 1 auto;width:auto;min-width:0}.assign-me-btn[_ngcontent-%COMP%]{flex:0 0 auto;color:var(--text-accent)}"]})};export{Hn as Topic};
