import{$ as y,A as rt,Aa as Zn,Ab as le,B as ot,Ba as Kn,Bb as mt,C as On,Ca as Yn,D as it,Da as B,G as Ln,Ga as we,H as st,Ha as Xn,I as Nn,Ia as dt,J as Pn,Ja as Jn,Jb as er,K as at,L as ct,La as Ce,M as D,Ma as jt,Na as lt,Nb as tr,O as f,P as x,Qb as nr,R as b,Rb as X,S as m,Sa as j,Sb as rr,T as u,Ta as R,Tb as or,Ua as ee,V as kn,Va as $t,W as Le,X as Bn,Xa as ft,_ as Y,a as C,ab as zt,b as G,bb as Be,c as Ut,ca as Ne,d as Tn,da as M,ea as de,f as ye,g as Q,h as An,ha as Pe,ia as Un,l as W,lb as qn,m as In,ma as U,mb as Qn,na as jn,nb as Te,oa as ke,p as F,pa as $n,q as Sn,qa as ve,qb as $,ra as zn,rb as I,s as Mn,sa as _e,ta as ut,u as Fn,ua as De,ub as Ae,va as Ee,vb as se,w as nt,wa as Hn,xa as Vn,y as xn,ya as Gn,z as Rn,za as Wn}from"./chunk-TNWOLYK6.js";var ir=null;function te(){return ir}function Ht(n){ir??=n}var Ue=class{},ht=(()=>{class n{historyGo(e){throw new Error("")}static \u0275fac=function(t){return new(t||n)};static \u0275prov=f({token:n,factory:()=>u(sr),providedIn:"platform"})}return n})();var sr=(()=>{class n extends ht{_location;_history;_doc=u(y);constructor(){super(),this._location=window.location,this._history=window.history}getBaseHrefFromDOM(){return te().getBaseHref(this._doc)}onPopState(e){let t=te().getGlobalEventTarget(this._doc,"window");return t.addEventListener("popstate",e,!1),()=>t.removeEventListener("popstate",e)}onHashChange(e){let t=te().getGlobalEventTarget(this._doc,"window");return t.addEventListener("hashchange",e,!1),()=>t.removeEventListener("hashchange",e)}get href(){return this._location.href}get protocol(){return this._location.protocol}get hostname(){return this._location.hostname}get port(){return this._location.port}get pathname(){return this._location.pathname}get search(){return this._location.search}get hash(){return this._location.hash}set pathname(e){this._location.pathname=e}pushState(e,t,o){this._history.pushState(e,t,o)}replaceState(e,t,o){this._history.replaceState(e,t,o)}forward(){this._history.forward()}back(){this._history.back()}historyGo(e=0){this._history.go(e)}getState(){return this._history.state}static \u0275fac=function(t){return new(t||n)};static \u0275prov=f({token:n,factory:()=>new n,providedIn:"platform"})}return n})();function ur(n,r){return n?r?n.endsWith("/")?r.startsWith("/")?n+r.slice(1):n+r:r.startsWith("/")?n+r:`${n}/${r}`:n:r}function ar(n){let r=n.search(/#|\?|$/);return n[r-1]==="/"?n.slice(0,r-1)+n.slice(r):n}function ae(n){return n&&n[0]!=="?"?`?${n}`:n}var pt=(()=>{class n{historyGo(e){throw new Error("")}static \u0275fac=function(t){return new(t||n)};static \u0275prov=f({token:n,factory:()=>u(So),providedIn:"root"})}return n})(),Io=new b(""),So=(()=>{class n extends pt{_platformLocation;_baseHref;_removeListenerFns=[];constructor(e,t){super(),this._platformLocation=e,this._baseHref=t??this._platformLocation.getBaseHrefFromDOM()??u(y).location?.origin??""}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(e){this._removeListenerFns.push(this._platformLocation.onPopState(e),this._platformLocation.onHashChange(e))}getBaseHref(){return this._baseHref}prepareExternalUrl(e){return ur(this._baseHref,e)}path(e=!1){let t=this._platformLocation.pathname+ae(this._platformLocation.search),o=this._platformLocation.hash;return o&&e?`${t}${o}`:t}pushState(e,t,o,i){let s=this.prepareExternalUrl(o+ae(i));this._platformLocation.pushState(e,t,s)}replaceState(e,t,o,i){let s=this.prepareExternalUrl(o+ae(i));this._platformLocation.replaceState(e,t,s)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(e=0){this._platformLocation.historyGo?.(e)}static \u0275fac=function(t){return new(t||n)(m(ht),m(Io,8))};static \u0275prov=f({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var dr=(()=>{class n{_subject=new Q;_basePath;_locationStrategy;_urlChangeListeners=[];_urlChangeSubscription=null;constructor(e){this._locationStrategy=e;let t=this._locationStrategy.getBaseHref();this._basePath=xo(ar(cr(t))),this._locationStrategy.onPopState(o=>{this._subject.next({url:this.path(!0),pop:!0,state:o.state,type:o.type})})}ngOnDestroy(){this._urlChangeSubscription?.unsubscribe(),this._urlChangeListeners=[]}path(e=!1){return this.normalize(this._locationStrategy.path(e))}getState(){return this._locationStrategy.getState()}isCurrentPathEqualTo(e,t=""){return this.path()==this.normalize(e+ae(t))}normalize(e){return n.stripTrailingSlash(Fo(this._basePath,cr(e)))}prepareExternalUrl(e){return e&&e[0]!=="/"&&(e="/"+e),this._locationStrategy.prepareExternalUrl(e)}go(e,t="",o=null){this._locationStrategy.pushState(o,"",e,t),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+ae(t)),o)}replaceState(e,t="",o=null){this._locationStrategy.replaceState(o,"",e,t),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+ae(t)),o)}forward(){this._locationStrategy.forward()}back(){this._locationStrategy.back()}historyGo(e=0){this._locationStrategy.historyGo?.(e)}onUrlChange(e){return this._urlChangeListeners.push(e),this._urlChangeSubscription??=this.subscribe(t=>{this._notifyUrlChangeListeners(t.url,t.state)}),()=>{let t=this._urlChangeListeners.indexOf(e);this._urlChangeListeners.splice(t,1),this._urlChangeListeners.length===0&&(this._urlChangeSubscription?.unsubscribe(),this._urlChangeSubscription=null)}}_notifyUrlChangeListeners(e="",t){this._urlChangeListeners.forEach(o=>o(e,t))}subscribe(e,t,o){return this._subject.subscribe({next:e,error:t??void 0,complete:o??void 0})}static normalizeQueryParams=ae;static joinWithSlash=ur;static stripTrailingSlash=ar;static \u0275fac=function(t){return new(t||n)(m(pt))};static \u0275prov=f({token:n,factory:()=>Mo(),providedIn:"root"})}return n})();function Mo(){return new dr(m(pt))}function Fo(n,r){if(!n||!r.startsWith(n))return r;let e=r.substring(n.length);return e===""||["/",";","?","#"].includes(e[0])?e:r}function cr(n){return n.replace(/\/index\.html$/,"")}function xo(n){if(new RegExp("^(https?:)?//").test(n)){let[,e]=n.split(/\/\/[^\/]+/);return e}return n}var O=(function(n){return n[n.Format=0]="Format",n[n.Standalone=1]="Standalone",n})(O||{}),v=(function(n){return n[n.Narrow=0]="Narrow",n[n.Abbreviated=1]="Abbreviated",n[n.Wide=2]="Wide",n[n.Short=3]="Short",n})(v||{}),P=(function(n){return n[n.Short=0]="Short",n[n.Medium=1]="Medium",n[n.Long=2]="Long",n[n.Full=3]="Full",n})(P||{}),re={Decimal:0,Group:1,List:2,PercentSign:3,PlusSign:4,MinusSign:5,Exponential:6,SuperscriptingExponent:7,PerMille:8,Infinity:9,NaN:10,TimeSeparator:11,CurrencyDecimal:12,CurrencyGroup:13};function mr(n){return $(n)[I.LocaleId]}function hr(n,r,e){let t=$(n),o=[t[I.DayPeriodsFormat],t[I.DayPeriodsStandalone]],i=z(o,r);return z(i,e)}function pr(n,r,e){let t=$(n),o=[t[I.DaysFormat],t[I.DaysStandalone]],i=z(o,r);return z(i,e)}function gr(n,r,e){let t=$(n),o=[t[I.MonthsFormat],t[I.MonthsStandalone]],i=z(o,r);return z(i,e)}function br(n,r){let t=$(n)[I.Eras];return z(t,r)}function je(n,r){let e=$(n);return z(e[I.DateFormat],r)}function $e(n,r){let e=$(n);return z(e[I.TimeFormat],r)}function ze(n,r){let t=$(n)[I.DateTimeFormat];return z(t,r)}function He(n,r){let e=$(n),t=e[I.NumberSymbols][r];if(typeof t>"u"){if(r===re.CurrencyDecimal)return e[I.NumberSymbols][re.Decimal];if(r===re.CurrencyGroup)return e[I.NumberSymbols][re.Group]}return t}function yr(n){if(!n[I.ExtraData])throw new D(2303,!1)}function vr(n){let r=$(n);return yr(r),(r[I.ExtraData][2]||[]).map(t=>typeof t=="string"?Vt(t):[Vt(t[0]),Vt(t[1])])}function _r(n,r,e){let t=$(n);yr(t);let o=[t[I.ExtraData][0],t[I.ExtraData][1]],i=z(o,r)||[];return z(i,e)||[]}function z(n,r){for(let e=r;e>-1;e--)if(typeof n[e]<"u")return n[e];throw new D(2304,!1)}function Vt(n){let[r,e]=n.split(":");return{hours:+r,minutes:+e}}var Oo=/^(\d{4,})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/,gt={},Lo=/((?:[^BEGHLMOSWYZabcdhmswyz']+)|(?:'(?:[^']|'')*')|(?:G{1,5}|y{1,4}|Y{1,4}|M{1,5}|L{1,5}|w{1,2}|W{1}|d{1,2}|E{1,6}|c{1,6}|a{1,5}|b{1,5}|B{1,5}|h{1,2}|H{1,2}|m{1,2}|s{1,2}|S{1,3}|z{1,4}|Z{1,5}|O{1,4}))([\s\S]*)/,No=256;function Dr(n,r,e,t){let o=Go(n);Po(r),r=ne(e,r)||r;let s=[],a;for(;r;)if(a=Lo.exec(r),a){s=s.concat(a.slice(1));let l=s.pop();if(!l)break;r=l}else{s.push(r);break}let c=o.getTimezoneOffset();t&&(c=wr(t,c),o=Vo(o,t));let d="";return s.forEach(l=>{let h=zo(l);d+=h?h(o,e,c):l==="''"?"'":l.replace(/(^'|'$)/g,"").replace(/''/g,"'")}),d}function Po(n){if(n.length>No)throw new D(2300,!1)}function Dt(n,r,e){let t=new Date(0);return t.setFullYear(n,r,e),t.setHours(0,0,0),t}function ne(n,r){let e=mr(n);if(gt[e]??={},gt[e][r])return gt[e][r];let t="";switch(r){case"shortDate":t=je(n,P.Short);break;case"mediumDate":t=je(n,P.Medium);break;case"longDate":t=je(n,P.Long);break;case"fullDate":t=je(n,P.Full);break;case"shortTime":t=$e(n,P.Short);break;case"mediumTime":t=$e(n,P.Medium);break;case"longTime":t=$e(n,P.Long);break;case"fullTime":t=$e(n,P.Full);break;case"short":let o=ne(n,"shortTime"),i=ne(n,"shortDate");t=bt(ze(n,P.Short),[o,i]);break;case"medium":let s=ne(n,"mediumTime"),a=ne(n,"mediumDate");t=bt(ze(n,P.Medium),[s,a]);break;case"long":let c=ne(n,"longTime"),d=ne(n,"longDate");t=bt(ze(n,P.Long),[c,d]);break;case"full":let l=ne(n,"fullTime"),h=ne(n,"fullDate");t=bt(ze(n,P.Full),[l,h]);break}return t&&(gt[e][r]=t),t}function bt(n,r){return r&&(n=n.replace(/\{([^}]+)}/g,function(e,t){return r!=null&&t in r?r[t]:e})),n}function Z(n,r,e="-",t,o){let i="";(n<0||o&&n<=0)&&(o?n=-n+1:(n=-n,i=e));let s=String(n);for(;s.length<r;)s="0"+s;return t&&(s=s.slice(s.length-r)),i+s}function ko(n,r){return Z(n,3).substring(0,r)}function T(n,r,e=0,t=!1,o=!1){return function(i,s){let a=Bo(n,i);if((e>0||a>-e)&&(a+=e),n===3)a===0&&e===-12&&(a=12);else if(n===6)return ko(a,r);let c=He(s,re.MinusSign);return Z(a,r,c,t,o)}}function Bo(n,r){switch(n){case 0:return r.getFullYear();case 1:return r.getMonth();case 2:return r.getDate();case 3:return r.getHours();case 4:return r.getMinutes();case 5:return r.getSeconds();case 6:return r.getMilliseconds();case 7:return r.getDay();default:throw new D(2301,!1)}}function w(n,r,e=O.Format,t=!1){return function(o,i){return Uo(o,i,n,r,e,t)}}function Uo(n,r,e,t,o,i){switch(e){case 2:return gr(r,o,t)[n.getMonth()];case 1:return pr(r,o,t)[n.getDay()];case 0:let s=n.getHours(),a=n.getMinutes();if(i){let d=vr(r),l=_r(r,o,t),h=d.findIndex(g=>{if(Array.isArray(g)){let[A,k]=g,L=s>=A.hours&&a>=A.minutes,p=s<k.hours||s===k.hours&&a<k.minutes;if(A.hours<k.hours){if(L&&p)return!0}else if(L||p)return!0}else if(g.hours===s&&g.minutes===a)return!0;return!1});if(h!==-1)return l[h]}return hr(r,o,t)[s<12?0:1];case 3:return br(r,t)[n.getFullYear()<=0?0:1];default:let c=e;throw new D(2302,!1)}}function yt(n){return function(r,e,t){let o=-1*t,i=He(e,re.MinusSign),s=o>0?Math.floor(o/60):Math.ceil(o/60);switch(n){case 0:return(o>=0?"+":"")+Z(s,2,i)+Z(Math.abs(o%60),2,i);case 1:return"GMT"+(o>=0?"+":"")+Z(s,1,i);case 2:return"GMT"+(o>=0?"+":"")+Z(s,2,i)+":"+Z(Math.abs(o%60),2,i);case 3:return t===0?"Z":(o>=0?"+":"")+Z(s,2,i)+":"+Z(Math.abs(o%60),2,i);default:throw new D(2310,!1)}}}var jo=0,_t=4;function $o(n){let r=Dt(n,jo,1).getDay();return Dt(n,0,1+(r<=_t?_t:_t+7)-r)}function Er(n){let r=n.getDay(),e=r===0?-3:_t-r;return Dt(n.getFullYear(),n.getMonth(),n.getDate()+e)}function Gt(n,r=!1){return function(e,t){let o;if(r){let i=new Date(e.getFullYear(),e.getMonth(),1).getDay()-1,s=e.getDate();o=1+Math.floor((s+i)/7)}else{let i=Er(e),s=$o(i.getFullYear()),a=i.getTime()-s.getTime();o=1+Math.round(a/6048e5)}return Z(o,n,He(t,re.MinusSign))}}function vt(n,r=!1){return function(e,t){let i=Er(e).getFullYear();return Z(i,n,He(t,re.MinusSign),r)}}var Wt={};function zo(n){if(Wt[n])return Wt[n];let r;switch(n){case"G":case"GG":case"GGG":r=w(3,v.Abbreviated);break;case"GGGG":r=w(3,v.Wide);break;case"GGGGG":r=w(3,v.Narrow);break;case"y":r=T(0,1,0,!1,!0);break;case"yy":r=T(0,2,0,!0,!0);break;case"yyy":r=T(0,3,0,!1,!0);break;case"yyyy":r=T(0,4,0,!1,!0);break;case"Y":r=vt(1);break;case"YY":r=vt(2,!0);break;case"YYY":r=vt(3);break;case"YYYY":r=vt(4);break;case"M":case"L":r=T(1,1,1);break;case"MM":case"LL":r=T(1,2,1);break;case"MMM":r=w(2,v.Abbreviated);break;case"MMMM":r=w(2,v.Wide);break;case"MMMMM":r=w(2,v.Narrow);break;case"LLL":r=w(2,v.Abbreviated,O.Standalone);break;case"LLLL":r=w(2,v.Wide,O.Standalone);break;case"LLLLL":r=w(2,v.Narrow,O.Standalone);break;case"w":r=Gt(1);break;case"ww":r=Gt(2);break;case"W":r=Gt(1,!0);break;case"d":r=T(2,1);break;case"dd":r=T(2,2);break;case"c":case"cc":r=T(7,1);break;case"ccc":r=w(1,v.Abbreviated,O.Standalone);break;case"cccc":r=w(1,v.Wide,O.Standalone);break;case"ccccc":r=w(1,v.Narrow,O.Standalone);break;case"cccccc":r=w(1,v.Short,O.Standalone);break;case"E":case"EE":case"EEE":r=w(1,v.Abbreviated);break;case"EEEE":r=w(1,v.Wide);break;case"EEEEE":r=w(1,v.Narrow);break;case"EEEEEE":r=w(1,v.Short);break;case"a":case"aa":case"aaa":r=w(0,v.Abbreviated);break;case"aaaa":r=w(0,v.Wide);break;case"aaaaa":r=w(0,v.Narrow);break;case"b":case"bb":case"bbb":r=w(0,v.Abbreviated,O.Standalone,!0);break;case"bbbb":r=w(0,v.Wide,O.Standalone,!0);break;case"bbbbb":r=w(0,v.Narrow,O.Standalone,!0);break;case"B":case"BB":case"BBB":r=w(0,v.Abbreviated,O.Format,!0);break;case"BBBB":r=w(0,v.Wide,O.Format,!0);break;case"BBBBB":r=w(0,v.Narrow,O.Format,!0);break;case"h":r=T(3,1,-12);break;case"hh":r=T(3,2,-12);break;case"H":r=T(3,1);break;case"HH":r=T(3,2);break;case"m":r=T(4,1);break;case"mm":r=T(4,2);break;case"s":r=T(5,1);break;case"ss":r=T(5,2);break;case"S":r=T(6,1);break;case"SS":r=T(6,2);break;case"SSS":r=T(6,3);break;case"Z":case"ZZ":case"ZZZ":r=yt(0);break;case"ZZZZZ":r=yt(3);break;case"O":case"OO":case"OOO":case"z":case"zz":case"zzz":r=yt(1);break;case"OOOO":case"ZZZZ":case"zzzz":r=yt(2);break;default:return null}return Wt[n]=r,r}function wr(n,r){n=n.replace(/:/g,"");let e=Date.parse("Jan 01, 1970 00:00:00 "+n)/6e4;return isNaN(e)?r:e}function Ho(n,r){return n=new Date(n.getTime()),n.setMinutes(n.getMinutes()+r),n}function Vo(n,r,e){let o=n.getTimezoneOffset(),i=wr(r,o);return Ho(n,-1*(i-o))}function Go(n){if(lr(n))return n;if(typeof n=="number"&&!isNaN(n))return new Date(n);if(typeof n=="string"){if(n=n.trim(),/^(\d{4}(-\d{1,2}(-\d{1,2})?)?)$/.test(n)){let[o,i=1,s=1]=n.split("-").map(a=>+a);return Dt(o,i-1,s)}let e=parseFloat(n);if(!isNaN(n-e))return new Date(e);let t;if(t=n.match(Oo))return Wo(t)}let r=new Date(n);if(!lr(r))throw new D(2311,!1);return r}function Wo(n){let r=new Date(0),e=0,t=0,o=n[8]?r.setUTCFullYear:r.setFullYear,i=n[8]?r.setUTCHours:r.setHours;n[9]&&(e=Number(n[9]+n[10]),t=Number(n[9]+n[11])),o.call(r,Number(n[1]),Number(n[2])-1,Number(n[3]));let s=Number(n[4]||0)-e,a=Number(n[5]||0)-t,c=Number(n[6]||0),d=Math.floor(parseFloat("0."+(n[7]||0))*1e3);return i.call(r,s,a,c,d),r}function lr(n){return n instanceof Date&&!isNaN(n.valueOf())}function Zo(n,r){return new D(2100,!1)}var Ko="mediumDate",Cr=new b(""),Tr=new b(""),Yo=(()=>{class n{locale;defaultTimezone;defaultOptions;constructor(e,t,o){this.locale=e,this.defaultTimezone=t,this.defaultOptions=o}transform(e,t,o,i){if(e==null||e===""||e!==e)return null;try{let s=t??this.defaultOptions?.dateFormat??Ko,a=o??this.defaultOptions?.timezone??this.defaultTimezone??void 0;return Dr(e,s,i||this.locale,a)}catch(s){throw Zo(n,s.message)}}static \u0275fac=function(t){return new(t||n)(lt(er,16),lt(Cr,24),lt(Tr,24))};static \u0275pipe=$t({name:"date",type:n,pure:!0})}return n})();var Xo=(()=>{class n{transform(e){return JSON.stringify(e,null,2)}static \u0275fac=function(t){return new(t||n)};static \u0275pipe=$t({name:"json",type:n,pure:!1})}return n})();function Et(n,r){r=encodeURIComponent(r);for(let e of n.split(";")){let t=e.indexOf("="),[o,i]=t==-1?[e,""]:[e.slice(0,t),e.slice(t+1)];if(o.trim()===r)return decodeURIComponent(i)}return null}var fe=class{};var Zt="browser";function Ar(n){return n===Zt}var Ve=class{_doc;constructor(r){this._doc=r}manager},wt=(()=>{class n extends Ve{constructor(e){super(e)}supports(e){return!0}addEventListener(e,t,o,i){return e.addEventListener(t,o,i),()=>this.removeEventListener(e,t,o,i)}removeEventListener(e,t,o,i){return e.removeEventListener(t,o,i)}static \u0275fac=function(t){return new(t||n)(m(y))};static \u0275prov=f({token:n,factory:n.\u0275fac})}return n})(),At=new b(""),Jt=(()=>{class n{_zone;_plugins;_eventNameToPlugin=new Map;constructor(e,t){this._zone=t,e.forEach(s=>{s.manager=this});let o=e.filter(s=>!(s instanceof wt));this._plugins=o.slice().reverse();let i=e.find(s=>s instanceof wt);i&&this._plugins.push(i)}addEventListener(e,t,o,i){return this._findPluginFor(t).addEventListener(e,t,o,i)}getZone(){return this._zone}_findPluginFor(e){let t=this._eventNameToPlugin.get(e);if(t)return t;if(t=this._plugins.find(i=>i.supports(e)),!t)throw new D(5101,!1);return this._eventNameToPlugin.set(e,t),t}static \u0275fac=function(t){return new(t||n)(m(At),m(M))};static \u0275prov=f({token:n,factory:n.\u0275fac})}return n})(),Kt="ng-app-id";function Ir(n){for(let r of n)r.remove()}function Sr(n,r){let e=r.createElement("style");return e.textContent=n,e}function Qo(n,r,e,t){let o=n.head?.querySelectorAll(`style[${Kt}="${r}"],link[${Kt}="${r}"]`);if(o)for(let i of o)i.removeAttribute(Kt),i instanceof HTMLLinkElement?t.set(i.href.slice(i.href.lastIndexOf("/")+1),{usage:0,elements:[i]}):i.textContent&&e.set(i.textContent,{usage:0,elements:[i]})}function Xt(n,r){let e=r.createElement("link");return e.setAttribute("rel","stylesheet"),e.setAttribute("href",n),e}var qt=(()=>{class n{doc;appId;nonce;inline=new Map;external=new Map;hosts=new Set;constructor(e,t,o,i={}){this.doc=e,this.appId=t,this.nonce=o,Qo(e,t,this.inline,this.external),this.hosts.add(e.head)}addStyles(e,t){for(let o of e)this.addUsage(o,this.inline,Sr);t?.forEach(o=>this.addUsage(o,this.external,Xt))}removeStyles(e,t){for(let o of e)this.removeUsage(o,this.inline);t?.forEach(o=>this.removeUsage(o,this.external))}addUsage(e,t,o){let i=t.get(e);i?i.usage++:t.set(e,{usage:1,elements:[...this.hosts].map(s=>this.addElement(s,o(e,this.doc)))})}removeUsage(e,t){let o=t.get(e);o&&(o.usage--,o.usage<=0&&(Ir(o.elements),t.delete(e)))}ngOnDestroy(){for(let[,{elements:e}]of[...this.inline,...this.external])Ir(e);this.hosts.clear()}addHost(e){this.hosts.add(e);for(let[t,{elements:o}]of this.inline)o.push(this.addElement(e,Sr(t,this.doc)));for(let[t,{elements:o}]of this.external)o.push(this.addElement(e,Xt(t,this.doc)))}removeHost(e){this.hosts.delete(e)}addElement(e,t){return this.nonce&&t.setAttribute("nonce",this.nonce),e.appendChild(t)}static \u0275fac=function(t){return new(t||n)(m(y),m(ke),m(_e,8),m(ve))};static \u0275prov=f({token:n,factory:n.\u0275fac})}return n})(),Yt={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/",math:"http://www.w3.org/1998/Math/MathML"},Qt=/%COMP%/g;var Fr="%COMP%",ei=`_nghost-${Fr}`,ti=`_ngcontent-${Fr}`,ni=!0,ri=new b("",{factory:()=>ni});function oi(n){return ti.replace(Qt,n)}function ii(n){return ei.replace(Qt,n)}function xr(n,r){return r.map(e=>e.replace(Qt,n))}var en=(()=>{class n{eventManager;sharedStylesHost;appId;removeStylesOnCompDestroy;doc;ngZone;nonce;tracingService;rendererByCompId=new Map;defaultRenderer;constructor(e,t,o,i,s,a,c=null,d=null){this.eventManager=e,this.sharedStylesHost=t,this.appId=o,this.removeStylesOnCompDestroy=i,this.doc=s,this.ngZone=a,this.nonce=c,this.tracingService=d,this.defaultRenderer=new Ge(e,s,a,this.tracingService)}createRenderer(e,t){if(!e||!t)return this.defaultRenderer;let o=this.getOrCreateRenderer(e,t);return o instanceof Tt?o.applyToHost(e):o instanceof We&&o.applyStyles(),o}getOrCreateRenderer(e,t){let o=this.rendererByCompId,i=o.get(t.id);if(!i){let s=this.doc,a=this.ngZone,c=this.eventManager,d=this.sharedStylesHost,l=this.removeStylesOnCompDestroy,h=this.tracingService;switch(t.encapsulation){case ut.Emulated:i=new Tt(c,d,t,this.appId,l,s,a,h);break;case ut.ShadowDom:return new Ct(c,e,t,s,a,this.nonce,h,d);case ut.ExperimentalIsolatedShadowDom:return new Ct(c,e,t,s,a,this.nonce,h);default:i=new We(c,d,t,l,s,a,h);break}o.set(t.id,i)}return i}ngOnDestroy(){this.rendererByCompId.clear()}componentReplaced(e){this.rendererByCompId.delete(e)}static \u0275fac=function(t){return new(t||n)(m(Jt),m(qt),m(ke),m(ri),m(y),m(M),m(_e),m(dt,8))};static \u0275prov=f({token:n,factory:n.\u0275fac})}return n})(),Ge=class{eventManager;doc;ngZone;tracingService;data=Object.create(null);throwOnSyntheticProps=!0;constructor(r,e,t,o){this.eventManager=r,this.doc=e,this.ngZone=t,this.tracingService=o}destroy(){}destroyNode=null;createElement(r,e){return e?this.doc.createElementNS(Yt[e]||e,r):this.doc.createElement(r)}createComment(r){return this.doc.createComment(r)}createText(r){return this.doc.createTextNode(r)}appendChild(r,e){(Mr(r)?r.content:r).appendChild(e)}insertBefore(r,e,t){r&&(Mr(r)?r.content:r).insertBefore(e,t)}removeChild(r,e){e.remove()}selectRootElement(r,e){let t=typeof r=="string"?this.doc.querySelector(r):r;if(!t)throw new D(-5104,!1);return e||(t.textContent=""),t}parentNode(r){return r.parentNode}nextSibling(r){return r.nextSibling}setAttribute(r,e,t,o){if(o){e=o+":"+e;let i=Yt[o];i?r.setAttributeNS(i,e,t):r.setAttribute(e,t)}else r.setAttribute(e,t)}removeAttribute(r,e,t){if(t){let o=Yt[t];o?r.removeAttributeNS(o,e):r.removeAttribute(`${t}:${e}`)}else r.removeAttribute(e)}addClass(r,e){r.classList.add(e)}removeClass(r,e){r.classList.remove(e)}setStyle(r,e,t,o){o&(we.DashCase|we.Important)?r.style.setProperty(e,t,o&we.Important?"important":""):r.style[e]=t}removeStyle(r,e,t){t&we.DashCase?r.style.removeProperty(e):r.style[e]=""}setProperty(r,e,t){r!=null&&(r[e]=t)}setValue(r,e){r.nodeValue=e}listen(r,e,t,o){if(typeof r=="string"&&(r=te().getGlobalEventTarget(this.doc,r),!r))throw new D(5102,!1);let i=this.decoratePreventDefault(t);return this.tracingService?.wrapEventListener&&(i=this.tracingService.wrapEventListener(r,e,i)),this.eventManager.addEventListener(r,e,i,o)}decoratePreventDefault(r){return e=>{if(e==="__ngUnwrap__")return r;r(e)===!1&&e.preventDefault()}}};function Mr(n){return n.tagName==="TEMPLATE"&&n.content!==void 0}var Ct=class extends Ge{hostEl;sharedStylesHost;shadowRoot;constructor(r,e,t,o,i,s,a,c){super(r,o,i,a),this.hostEl=e,this.sharedStylesHost=c,this.shadowRoot=e.attachShadow({mode:"open"}),this.sharedStylesHost&&this.sharedStylesHost.addHost(this.shadowRoot);let d=t.styles;d=xr(t.id,d);for(let h of d){let g=document.createElement("style");s&&g.setAttribute("nonce",s),g.textContent=h,this.shadowRoot.appendChild(g)}let l=t.getExternalStyles?.();if(l)for(let h of l){let g=Xt(h,o);s&&g.setAttribute("nonce",s),this.shadowRoot.appendChild(g)}}nodeOrShadowRoot(r){return r===this.hostEl?this.shadowRoot:r}appendChild(r,e){return super.appendChild(this.nodeOrShadowRoot(r),e)}insertBefore(r,e,t){return super.insertBefore(this.nodeOrShadowRoot(r),e,t)}removeChild(r,e){return super.removeChild(null,e)}parentNode(r){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(r)))}destroy(){this.sharedStylesHost&&this.sharedStylesHost.removeHost(this.shadowRoot)}},We=class extends Ge{sharedStylesHost;removeStylesOnCompDestroy;styles;styleUrls;constructor(r,e,t,o,i,s,a,c){super(r,i,s,a),this.sharedStylesHost=e,this.removeStylesOnCompDestroy=o;let d=t.styles;this.styles=c?xr(c,d):d,this.styleUrls=t.getExternalStyles?.(c)}applyStyles(){this.sharedStylesHost.addStyles(this.styles,this.styleUrls)}destroy(){this.removeStylesOnCompDestroy&&Xn.size===0&&this.sharedStylesHost.removeStyles(this.styles,this.styleUrls)}},Tt=class extends We{contentAttr;hostAttr;constructor(r,e,t,o,i,s,a,c){let d=o+"-"+t.id;super(r,e,t,i,s,a,c,d),this.contentAttr=oi(d),this.hostAttr=ii(d)}applyToHost(r){this.applyStyles(),this.setAttribute(r,this.hostAttr,"")}createElement(r,e){let t=super.createElement(r,e);return super.setAttribute(t,this.contentAttr,""),t}};var It=class n extends Ue{supportsDOMEvents=!0;static makeCurrent(){Ht(new n)}onAndCancel(r,e,t,o){return r.addEventListener(e,t,o),()=>{r.removeEventListener(e,t,o)}}dispatchEvent(r,e){r.dispatchEvent(e)}remove(r){r.remove()}createElement(r,e){return e=e||this.getDefaultDocument(),e.createElement(r)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(r){return r.nodeType===Node.ELEMENT_NODE}isShadowRoot(r){return r instanceof DocumentFragment}getGlobalEventTarget(r,e){return e==="window"?window:e==="document"?r:e==="body"?r.body:null}getBaseHref(r){let e=ai();return e==null?null:ci(e)}resetBaseElement(){Ze=null}getUserAgent(){return window.navigator.userAgent}getCookie(r){return Et(document.cookie,r)}},Ze=null;function ai(){return Ze=Ze||document.head.querySelector("base"),Ze?Ze.getAttribute("href"):null}function ci(n){return new URL(n,document.baseURI).pathname}var ui=(()=>{class n{build(){return new XMLHttpRequest}static \u0275fac=function(t){return new(t||n)};static \u0275prov=f({token:n,factory:n.\u0275fac})}return n})(),Rr=["alt","control","meta","shift"],di={"\b":"Backspace","	":"Tab","\x7F":"Delete","\x1B":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},li={alt:n=>n.altKey,control:n=>n.ctrlKey,meta:n=>n.metaKey,shift:n=>n.shiftKey},Or=(()=>{class n extends Ve{constructor(e){super(e)}supports(e){return n.parseEventName(e)!=null}addEventListener(e,t,o,i){let s=n.parseEventName(t),a=n.eventCallback(s.fullKey,o,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>te().onAndCancel(e,s.domEventName,a,i))}static parseEventName(e){let t=e.toLowerCase().split("."),o=t.shift();if(t.length===0||!(o==="keydown"||o==="keyup"))return null;let i=n._normalizeKey(t.pop()),s="",a=t.indexOf("code");if(a>-1&&(t.splice(a,1),s="code."),Rr.forEach(d=>{let l=t.indexOf(d);l>-1&&(t.splice(l,1),s+=d+".")}),s+=i,t.length!=0||i.length===0)return null;let c={};return c.domEventName=o,c.fullKey=s,c}static matchEventFullKeyCode(e,t){let o=di[e.key]||e.key,i="";return t.indexOf("code.")>-1&&(o=e.code,i="code."),o==null||!o?!1:(o=o.toLowerCase(),o===" "?o="space":o==="."&&(o="dot"),Rr.forEach(s=>{if(s!==o){let a=li[s];a(e)&&(i+=s+".")}}),i+=o,i===t)}static eventCallback(e,t,o){return i=>{n.matchEventFullKeyCode(i,e)&&o.runGuarded(()=>t(i))}}static _normalizeKey(e){return e==="esc"?"escape":e}static \u0275fac=function(t){return new(t||n)(m(y))};static \u0275prov=f({token:n,factory:n.\u0275fac})}return n})();async function fi(n,r,e){let t=C({rootComponent:n},mi(r,e));return nr(t)}function mi(n,r){return{platformRef:r?.platformRef,appProviders:[...yi,...n?.providers??[]],platformProviders:bi}}function hi(){It.makeCurrent()}function pi(){return new de}function gi(){return jn(document),document}var bi=[{provide:ve,useValue:Zt},{provide:$n,useValue:hi,multi:!0},{provide:y,useFactory:gi}];var yi=[{provide:kn,useValue:"root"},{provide:de,useFactory:pi},{provide:At,useClass:wt,multi:!0},{provide:At,useClass:Or,multi:!0},en,qt,Jt,{provide:Ce,useExisting:en},{provide:fe,useClass:ui},[]];var ce=class n{headers;normalizedNames=new Map;lazyInit;lazyUpdate=null;constructor(r){r?typeof r=="string"?this.lazyInit=()=>{this.headers=new Map,r.split(`
`).forEach(e=>{let t=e.indexOf(":");if(t>0){let o=e.slice(0,t),i=e.slice(t+1).trim();this.addHeaderEntry(o,i)}})}:typeof Headers<"u"&&r instanceof Headers?(this.headers=new Map,r.forEach((e,t)=>{this.addHeaderEntry(t,e)})):this.lazyInit=()=>{this.headers=new Map,Object.entries(r).forEach(([e,t])=>{this.setHeaderEntries(e,t)})}:this.headers=new Map}has(r){return this.init(),this.headers.has(r.toLowerCase())}get(r){this.init();let e=this.headers.get(r.toLowerCase());return e&&e.length>0?e[0]:null}keys(){return this.init(),Array.from(this.normalizedNames.values())}getAll(r){return this.init(),this.headers.get(r.toLowerCase())||null}append(r,e){return this.clone({name:r,value:e,op:"a"})}set(r,e){return this.clone({name:r,value:e,op:"s"})}delete(r,e){return this.clone({name:r,value:e,op:"d"})}maybeSetNormalizedName(r,e){this.normalizedNames.has(e)||this.normalizedNames.set(e,r)}init(){this.lazyInit&&(this.lazyInit instanceof n?this.copyFrom(this.lazyInit):this.lazyInit(),this.lazyInit=null,this.lazyUpdate&&(this.lazyUpdate.forEach(r=>this.applyUpdate(r)),this.lazyUpdate=null))}copyFrom(r){r.init(),Array.from(r.headers.keys()).forEach(e=>{this.headers.set(e,r.headers.get(e)),this.normalizedNames.set(e,r.normalizedNames.get(e))})}clone(r){let e=new n;return e.lazyInit=this.lazyInit&&this.lazyInit instanceof n?this.lazyInit:this,e.lazyUpdate=(this.lazyUpdate||[]).concat([r]),e}applyUpdate(r){let e=r.name.toLowerCase();switch(r.op){case"a":case"s":let t=r.value;if(typeof t=="string"&&(t=[t]),t.length===0)return;this.maybeSetNormalizedName(r.name,e);let o=(r.op==="a"?this.headers.get(e):void 0)||[];o.push(...t),this.headers.set(e,o);break;case"d":let i=r.value;if(!i)this.headers.delete(e),this.normalizedNames.delete(e);else{let s=this.headers.get(e);if(!s)return;s=s.filter(a=>i.indexOf(a)===-1),s.length===0?(this.headers.delete(e),this.normalizedNames.delete(e)):this.headers.set(e,s)}break}}addHeaderEntry(r,e){let t=r.toLowerCase();this.maybeSetNormalizedName(r,t),this.headers.has(t)?this.headers.get(t).push(e):this.headers.set(t,[e])}setHeaderEntries(r,e){let t=(Array.isArray(e)?e:[e]).map(i=>i.toString()),o=r.toLowerCase();this.headers.set(o,t),this.maybeSetNormalizedName(r,o)}forEach(r){this.init(),Array.from(this.normalizedNames.keys()).forEach(e=>r(this.normalizedNames.get(e),this.headers.get(e)))}};var nn=class{map=new Map;set(r,e){return this.map.set(r,e),this}get(r){return this.map.has(r)||this.map.set(r,r.defaultValue()),this.map.get(r)}delete(r){return this.map.delete(r),this}has(r){return this.map.has(r)}keys(){return this.map.keys()}},rn=class{encodeKey(r){return Lr(r)}encodeValue(r){return Lr(r)}decodeKey(r){return decodeURIComponent(r)}decodeValue(r){return decodeURIComponent(r)}};function _i(n,r){let e=new Map;return n.length>0&&n.replace(/^\?/,"").split("&").forEach(o=>{let i=o.indexOf("="),[s,a]=i==-1?[r.decodeKey(o),""]:[r.decodeKey(o.slice(0,i)),r.decodeValue(o.slice(i+1))],c=e.get(s)||[];c.push(a),e.set(s,c)}),e}var Di=/%(\d[a-f0-9])/gi,Ei={40:"@","3A":":",24:"$","2C":",","3B":";","3D":"=","3F":"?","2F":"/"};function Lr(n){return encodeURIComponent(n).replace(Di,(r,e)=>Ei[e]??r)}function St(n){return`${n}`}var oe=class n{map;encoder;updates=null;cloneFrom=null;constructor(r={}){if(this.encoder=r.encoder||new rn,r.fromString){if(r.fromObject)throw new D(2805,!1);this.map=_i(r.fromString,this.encoder)}else r.fromObject?(this.map=new Map,Object.keys(r.fromObject).forEach(e=>{let t=r.fromObject[e],o=Array.isArray(t)?t.map(St):[St(t)];this.map.set(e,o)})):this.map=null}has(r){return this.init(),this.map.has(r)}get(r){this.init();let e=this.map.get(r);return e?e[0]:null}getAll(r){return this.init(),this.map.get(r)||null}keys(){return this.init(),Array.from(this.map.keys())}append(r,e){return this.clone({param:r,value:e,op:"a"})}appendAll(r){let e=[];return Object.keys(r).forEach(t=>{let o=r[t];Array.isArray(o)?o.forEach(i=>{e.push({param:t,value:i,op:"a"})}):e.push({param:t,value:o,op:"a"})}),this.clone(e)}set(r,e){return this.clone({param:r,value:e,op:"s"})}delete(r,e){return this.clone({param:r,value:e,op:"d"})}toString(){return this.init(),this.keys().map(r=>{let e=this.encoder.encodeKey(r);return this.map.get(r).map(t=>e+"="+this.encoder.encodeValue(t)).join("&")}).filter(r=>r!=="").join("&")}clone(r){let e=new n({encoder:this.encoder});return e.cloneFrom=this.cloneFrom||this,e.updates=(this.updates||[]).concat(r),e}init(){this.map===null&&(this.map=new Map),this.cloneFrom!==null&&(this.cloneFrom.init(),this.cloneFrom.keys().forEach(r=>this.map.set(r,this.cloneFrom.map.get(r))),this.updates.forEach(r=>{switch(r.op){case"a":case"s":let e=(r.op==="a"?this.map.get(r.param):void 0)||[];e.push(St(r.value)),this.map.set(r.param,e);break;case"d":if(r.value!==void 0){let t=this.map.get(r.param)||[],o=t.indexOf(St(r.value));o!==-1&&t.splice(o,1),t.length>0?this.map.set(r.param,t):this.map.delete(r.param)}else{this.map.delete(r.param);break}}}),this.cloneFrom=this.updates=null)}};function wi(n){switch(n){case"DELETE":case"GET":case"HEAD":case"OPTIONS":case"JSONP":return!1;default:return!0}}function Nr(n){return typeof ArrayBuffer<"u"&&n instanceof ArrayBuffer}function Pr(n){return typeof Blob<"u"&&n instanceof Blob}function kr(n){return typeof FormData<"u"&&n instanceof FormData}function Ci(n){return typeof URLSearchParams<"u"&&n instanceof URLSearchParams}var Br="Content-Type",Ur="Accept",jr="text/plain",$r="application/json",Ti=`${$r}, ${jr}, */*`,Ie=class n{url;body=null;headers;context;reportProgress=!1;withCredentials=!1;credentials;keepalive=!1;cache;priority;mode;redirect;referrer;integrity;referrerPolicy;responseType="json";method;params;urlWithParams;transferCache;timeout;constructor(r,e,t,o){this.url=e,this.method=r.toUpperCase();let i;if(wi(this.method)||o?(this.body=t!==void 0?t:null,i=o):i=t,i){if(this.reportProgress=!!i.reportProgress,this.withCredentials=!!i.withCredentials,this.keepalive=!!i.keepalive,i.responseType&&(this.responseType=i.responseType),i.headers&&(this.headers=i.headers),i.context&&(this.context=i.context),i.params&&(this.params=i.params),i.priority&&(this.priority=i.priority),i.cache&&(this.cache=i.cache),i.credentials&&(this.credentials=i.credentials),typeof i.timeout=="number"){if(i.timeout<1||!Number.isInteger(i.timeout))throw new D(2822,"");this.timeout=i.timeout}i.mode&&(this.mode=i.mode),i.redirect&&(this.redirect=i.redirect),i.integrity&&(this.integrity=i.integrity),i.referrer!==void 0&&(this.referrer=i.referrer),i.referrerPolicy&&(this.referrerPolicy=i.referrerPolicy),this.transferCache=i.transferCache}if(this.headers??=new ce,this.context??=new nn,!this.params)this.params=new oe,this.urlWithParams=e;else{let s=this.params.toString();if(s.length===0)this.urlWithParams=e;else{let a=e.indexOf("?"),c=a===-1?"?":a<e.length-1?"&":"";this.urlWithParams=e+c+s}}}serializeBody(){return this.body===null?null:typeof this.body=="string"||Nr(this.body)||Pr(this.body)||kr(this.body)||Ci(this.body)?this.body:this.body instanceof oe?this.body.toString():typeof this.body=="object"||typeof this.body=="boolean"||Array.isArray(this.body)?JSON.stringify(this.body):this.body.toString()}detectContentTypeHeader(){return this.body===null||kr(this.body)?null:Pr(this.body)?this.body.type||null:Nr(this.body)?null:typeof this.body=="string"?jr:this.body instanceof oe?"application/x-www-form-urlencoded;charset=UTF-8":typeof this.body=="object"||typeof this.body=="number"||typeof this.body=="boolean"?$r:null}clone(r={}){let e=r.method||this.method,t=r.url||this.url,o=r.responseType||this.responseType,i=r.keepalive??this.keepalive,s=r.priority||this.priority,a=r.cache||this.cache,c=r.mode||this.mode,d=r.redirect||this.redirect,l=r.credentials||this.credentials,h=r.referrer??this.referrer,g=r.integrity||this.integrity,A=r.referrerPolicy||this.referrerPolicy,k=r.transferCache??this.transferCache,L=r.timeout??this.timeout,p=r.body!==void 0?r.body:this.body,_=r.withCredentials??this.withCredentials,N=r.reportProgress??this.reportProgress,q=r.headers||this.headers,S=r.params||this.params,Re=r.context??this.context;return r.setHeaders!==void 0&&(q=Object.keys(r.setHeaders).reduce((Oe,ue)=>Oe.set(ue,r.setHeaders[ue]),q)),r.setParams&&(S=Object.keys(r.setParams).reduce((Oe,ue)=>Oe.set(ue,r.setParams[ue]),S)),new n(e,t,p,{params:S,headers:q,context:Re,reportProgress:N,responseType:o,withCredentials:_,transferCache:k,keepalive:i,cache:a,priority:s,timeout:L,mode:c,redirect:d,credentials:l,referrer:h,integrity:g,referrerPolicy:A})}},me=(function(n){return n[n.Sent=0]="Sent",n[n.UploadProgress=1]="UploadProgress",n[n.ResponseHeader=2]="ResponseHeader",n[n.DownloadProgress=3]="DownloadProgress",n[n.Response=4]="Response",n[n.User=5]="User",n})(me||{}),Ke=class{headers;status;statusText;url;ok;type;redirected;responseType;constructor(r,e=200,t="OK"){this.headers=r.headers||new ce,this.status=r.status!==void 0?r.status:e,this.statusText=r.statusText||t,this.url=r.url||null,this.redirected=r.redirected,this.responseType=r.responseType,this.ok=this.status>=200&&this.status<300}},on=class n extends Ke{constructor(r={}){super(r)}type=me.ResponseHeader;clone(r={}){return new n({headers:r.headers||this.headers,status:r.status!==void 0?r.status:this.status,statusText:r.statusText||this.statusText,url:r.url||this.url||void 0})}},Ye=class n extends Ke{body;constructor(r={}){super(r),this.body=r.body!==void 0?r.body:null}type=me.Response;clone(r={}){return new n({body:r.body!==void 0?r.body:this.body,headers:r.headers||this.headers,status:r.status!==void 0?r.status:this.status,statusText:r.statusText||this.statusText,url:r.url||this.url||void 0,redirected:r.redirected??this.redirected,responseType:r.responseType??this.responseType})}},Se=class extends Ke{name="HttpErrorResponse";message;error;ok=!1;constructor(r){super(r,0,"Unknown Error"),this.status>=200&&this.status<300?this.message=`Http failure during parsing for ${r.url||"(unknown url)"}`:this.message=`Http failure response for ${r.url||"(unknown url)"}: ${r.status} ${r.statusText}`,this.error=r.error||null}},Ai=200,Ii=204;var Si=/^\)\]\}',?\n/;var Mi=(()=>{class n{xhrFactory;tracingService=u(dt,{optional:!0});constructor(e){this.xhrFactory=e}maybePropagateTrace(e){return this.tracingService?.propagate?this.tracingService.propagate(e):e}handle(e){if(e.method==="JSONP")throw new D(-2800,!1);let t=this.xhrFactory;return W(null).pipe(Pn(()=>new ye(i=>{let s=t.build();if(s.open(e.method,e.urlWithParams),e.withCredentials&&(s.withCredentials=!0),e.headers.forEach((p,_)=>s.setRequestHeader(p,_.join(","))),e.headers.has(Ur)||s.setRequestHeader(Ur,Ti),!e.headers.has(Br)){let p=e.detectContentTypeHeader();p!==null&&s.setRequestHeader(Br,p)}if(e.timeout&&(s.timeout=e.timeout),e.responseType){let p=e.responseType.toLowerCase();s.responseType=p!=="json"?p:"text"}let a=e.serializeBody(),c=null,d=()=>{if(c!==null)return c;let p=s.statusText||"OK",_=new ce(s.getAllResponseHeaders()),N=s.responseURL||e.url;return c=new on({headers:_,status:s.status,statusText:p,url:N}),c},l=this.maybePropagateTrace(()=>{let{headers:p,status:_,statusText:N,url:q}=d(),S=null;_!==Ii&&(S=typeof s.response>"u"?s.responseText:s.response),_===0&&(_=S?Ai:0);let Re=_>=200&&_<300;if(e.responseType==="json"&&typeof S=="string"){let Oe=S;S=S.replace(Si,"");try{S=S!==""?JSON.parse(S):null}catch(ue){S=Oe,Re&&(Re=!1,S={error:ue,text:S})}}Re?(i.next(new Ye({body:S,headers:p,status:_,statusText:N,url:q||void 0})),i.complete()):i.error(new Se({error:S,headers:p,status:_,statusText:N,url:q||void 0}))}),h=this.maybePropagateTrace(p=>{let{url:_}=d(),N=new Se({error:p,status:s.status||0,statusText:s.statusText||"Unknown Error",url:_||void 0});i.error(N)}),g=h;e.timeout&&(g=this.maybePropagateTrace(p=>{let{url:_}=d(),N=new Se({error:new DOMException("Request timed out","TimeoutError"),status:s.status||0,statusText:s.statusText||"Request timeout",url:_||void 0});i.error(N)}));let A=!1,k=this.maybePropagateTrace(p=>{A||(i.next(d()),A=!0);let _={type:me.DownloadProgress,loaded:p.loaded};p.lengthComputable&&(_.total=p.total),e.responseType==="text"&&s.responseText&&(_.partialText=s.responseText),i.next(_)}),L=this.maybePropagateTrace(p=>{let _={type:me.UploadProgress,loaded:p.loaded};p.lengthComputable&&(_.total=p.total),i.next(_)});return s.addEventListener("load",l),s.addEventListener("error",h),s.addEventListener("timeout",g),s.addEventListener("abort",h),e.reportProgress&&(s.addEventListener("progress",k),a!==null&&s.upload&&s.upload.addEventListener("progress",L)),s.send(a),i.next({type:me.Sent}),()=>{s.removeEventListener("error",h),s.removeEventListener("abort",h),s.removeEventListener("load",l),s.removeEventListener("timeout",g),e.reportProgress&&(s.removeEventListener("progress",k),a!==null&&s.upload&&s.upload.removeEventListener("progress",L)),s.readyState!==s.DONE&&s.abort()}})))}static \u0275fac=function(t){return new(t||n)(m(fe))};static \u0275prov=f({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function Fi(n,r){return r(n)}function xi(n,r,e){return(t,o)=>Bn(e,()=>r(t,i=>n(i,o)))}var Ri=new b("",{factory:()=>[]}),zr=new b(""),Oi=new b("",{factory:()=>!0});var Li=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275prov=f({token:n,factory:function(t){let o=null;return t?o=new(t||n):o=m(Mi),o},providedIn:"root"})}return n})();var Ni=(()=>{class n{backend;injector;chain=null;pendingTasks=u(Un);contributeToStability=u(Oi);constructor(e,t){this.backend=e,this.injector=t}handle(e){if(this.chain===null){let t=Array.from(new Set([...this.injector.get(Ri),...this.injector.get(zr,[])]));this.chain=t.reduceRight((o,i)=>xi(o,i,this.injector),Fi)}if(this.contributeToStability){let t=this.pendingTasks.add();return this.chain(e,o=>this.backend.handle(o)).pipe(it(t))}else return this.chain(e,t=>this.backend.handle(t))}static \u0275fac=function(t){return new(t||n)(m(Li),m(Le))};static \u0275prov=f({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),Pi=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275prov=f({token:n,factory:function(t){let o=null;return t?o=new(t||n):o=m(Ni),o},providedIn:"root"})}return n})();function tn(n,r){return{body:r,headers:n.headers,context:n.context,observe:n.observe,params:n.params,reportProgress:n.reportProgress,responseType:n.responseType,withCredentials:n.withCredentials,credentials:n.credentials,transferCache:n.transferCache,timeout:n.timeout,keepalive:n.keepalive,priority:n.priority,cache:n.cache,mode:n.mode,redirect:n.redirect,integrity:n.integrity,referrer:n.referrer,referrerPolicy:n.referrerPolicy}}var sn=(()=>{class n{handler;constructor(e){this.handler=e}request(e,t,o={}){let i;if(e instanceof Ie)i=e;else{let c;o.headers instanceof ce?c=o.headers:c=new ce(o.headers);let d;o.params&&(o.params instanceof oe?d=o.params:d=new oe({fromObject:o.params})),i=new Ie(e,t,o.body!==void 0?o.body:null,{headers:c,context:o.context,params:d,reportProgress:o.reportProgress,responseType:o.responseType||"json",withCredentials:o.withCredentials,transferCache:o.transferCache,keepalive:o.keepalive,priority:o.priority,cache:o.cache,mode:o.mode,redirect:o.redirect,credentials:o.credentials,referrer:o.referrer,referrerPolicy:o.referrerPolicy,integrity:o.integrity,timeout:o.timeout})}let s=W(i).pipe(Rn(c=>this.handler.handle(c)));if(e instanceof Ie||o.observe==="events")return s;let a=s.pipe(nt(c=>c instanceof Ye));switch(o.observe||"body"){case"body":switch(i.responseType){case"arraybuffer":return a.pipe(F(c=>{if(c.body!==null&&!(c.body instanceof ArrayBuffer))throw new D(2806,!1);return c.body}));case"blob":return a.pipe(F(c=>{if(c.body!==null&&!(c.body instanceof Blob))throw new D(2807,!1);return c.body}));case"text":return a.pipe(F(c=>{if(c.body!==null&&typeof c.body!="string")throw new D(2808,!1);return c.body}));default:return a.pipe(F(c=>c.body))}case"response":return a;default:throw new D(2809,!1)}}delete(e,t={}){return this.request("DELETE",e,t)}get(e,t={}){return this.request("GET",e,t)}head(e,t={}){return this.request("HEAD",e,t)}jsonp(e,t){return this.request("JSONP",e,{params:new oe().append(t,"JSONP_CALLBACK"),observe:"body",responseType:"json"})}options(e,t={}){return this.request("OPTIONS",e,t)}patch(e,t,o={}){return this.request("PATCH",e,tn(o,t))}post(e,t,o={}){return this.request("POST",e,tn(o,t))}put(e,t,o={}){return this.request("PUT",e,tn(o,t))}static \u0275fac=function(t){return new(t||n)(m(Pi))};static \u0275prov=f({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var bu=(()=>{class n{_doc;constructor(e){this._doc=e}getTitle(){return this._doc.title}setTitle(e){this._doc.title=e||""}static \u0275fac=function(t){return new(t||n)(m(y))};static \u0275prov=f({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var an=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275prov=f({token:n,factory:function(t){let o=null;return t?o=new(t||n):o=m(Bi),o},providedIn:"root"})}return n})(),Bi=(()=>{class n extends an{_doc;constructor(e){super(),this._doc=e}sanitize(e,t){if(t==null)return null;switch(e){case B.NONE:return t;case B.HTML:return Ee(t,"HTML")?De(t):Yn(this._doc,String(t)).toString();case B.STYLE:return Ee(t,"Style")?De(t):t;case B.SCRIPT:if(Ee(t,"Script"))return De(t);throw new D(5200,!1);case B.URL:return Ee(t,"URL")?De(t):Kn(String(t));case B.RESOURCE_URL:if(Ee(t,"ResourceURL"))return De(t);throw new D(5201,!1);default:throw new D(5202,!1)}}bypassSecurityTrustHtml(e){return Hn(e)}bypassSecurityTrustStyle(e){return Vn(e)}bypassSecurityTrustScript(e){return Gn(e)}bypassSecurityTrustUrl(e){return Wn(e)}bypassSecurityTrustResourceUrl(e){return Zn(e)}static \u0275fac=function(t){return new(t||n)(m(y))};static \u0275prov=f({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var Mt=new WeakMap,he=(()=>{class n{_appRef;_injector=u(Y);_environmentInjector=u(Le);load(e){let t=this._appRef=this._appRef||this._injector.get(zt),o=Mt.get(t);o||(o={loaders:new Set,refs:[]},Mt.set(t,o),t.onDestroy(()=>{Mt.get(t)?.refs.forEach(i=>i.destroy()),Mt.delete(t)})),o.loaders.has(e)||(o.loaders.add(e),o.refs.push(or(e,{environmentInjector:this._environmentInjector})))}static \u0275fac=function(t){return new(t||n)};static \u0275prov=f({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var Hr=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275cmp=j({type:n,selectors:[["ng-component"]],exportAs:["cdkVisuallyHidden"],decls:0,vars:0,template:function(t,o){},styles:[`.cdk-visually-hidden {
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
  white-space: nowrap;
  outline: 0;
  -webkit-appearance: none;
  -moz-appearance: none;
  left: 0;
}
[dir=rtl] .cdk-visually-hidden {
  left: auto;
  right: 0;
}
`],encapsulation:2,changeDetection:0})}return n})(),Ft;function ji(){if(Ft===void 0&&(Ft=null,typeof window<"u")){let n=window;n.trustedTypes!==void 0&&(Ft=n.trustedTypes.createPolicy("angular#components",{createHTML:r=>r}))}return Ft}function Me(n){return ji()?.createHTML(n)||n}function Vr(n){return Error(`Unable to find icon with the name "${n}"`)}function $i(){return Error("Could not find HttpClient for use with Angular Material icons. Please add provideHttpClient() to your providers.")}function Gr(n){return Error(`The URL provided to MatIconRegistry was not trusted as a resource URL via Angular's DomSanitizer. Attempted URL was "${n}".`)}function Wr(n){return Error(`The literal provided to MatIconRegistry was not trusted as safe HTML by Angular's DomSanitizer. Attempted literal was "${n}".`)}var ie=class{url;svgText;options;svgElement=null;constructor(r,e,t){this.url=r,this.svgText=e,this.options=t}},Kr=(()=>{class n{_httpClient;_sanitizer;_errorHandler;_document;_svgIconConfigs=new Map;_iconSetConfigs=new Map;_cachedIconsByUrl=new Map;_inProgressUrlFetches=new Map;_fontCssClassesByAlias=new Map;_resolvers=[];_defaultFontSetClass=["material-icons","mat-ligature-font"];constructor(e,t,o,i){this._httpClient=e,this._sanitizer=t,this._errorHandler=i,this._document=o}addSvgIcon(e,t,o){return this.addSvgIconInNamespace("",e,t,o)}addSvgIconLiteral(e,t,o){return this.addSvgIconLiteralInNamespace("",e,t,o)}addSvgIconInNamespace(e,t,o,i){return this._addSvgIconConfig(e,t,new ie(o,null,i))}addSvgIconResolver(e){return this._resolvers.push(e),this}addSvgIconLiteralInNamespace(e,t,o,i){let s=this._sanitizer.sanitize(B.HTML,o);if(!s)throw Wr(o);let a=Me(s);return this._addSvgIconConfig(e,t,new ie("",a,i))}addSvgIconSet(e,t){return this.addSvgIconSetInNamespace("",e,t)}addSvgIconSetLiteral(e,t){return this.addSvgIconSetLiteralInNamespace("",e,t)}addSvgIconSetInNamespace(e,t,o){return this._addSvgIconSetConfig(e,new ie(t,null,o))}addSvgIconSetLiteralInNamespace(e,t,o){let i=this._sanitizer.sanitize(B.HTML,t);if(!i)throw Wr(t);let s=Me(i);return this._addSvgIconSetConfig(e,new ie("",s,o))}registerFontClassAlias(e,t=e){return this._fontCssClassesByAlias.set(e,t),this}classNameForFontAlias(e){return this._fontCssClassesByAlias.get(e)||e}setDefaultFontSetClass(...e){return this._defaultFontSetClass=e,this}getDefaultFontSetClass(){return this._defaultFontSetClass}getSvgIconFromUrl(e){let t=this._sanitizer.sanitize(B.RESOURCE_URL,e);if(!t)throw Gr(e);let o=this._cachedIconsByUrl.get(t);return o?W(xt(o)):this._loadSvgIconFromConfig(new ie(e,null)).pipe(ct(i=>this._cachedIconsByUrl.set(t,i)),F(i=>xt(i)))}getNamedSvgIcon(e,t=""){let o=Zr(t,e),i=this._svgIconConfigs.get(o);if(i)return this._getSvgFromConfig(i);if(i=this._getIconConfigFromResolvers(t,e),i)return this._svgIconConfigs.set(o,i),this._getSvgFromConfig(i);let s=this._iconSetConfigs.get(t);return s?this._getSvgFromIconSetConfigs(e,s):In(Vr(o))}ngOnDestroy(){this._resolvers=[],this._svgIconConfigs.clear(),this._iconSetConfigs.clear(),this._cachedIconsByUrl.clear()}_getSvgFromConfig(e){return e.svgText?W(xt(this._svgElementFromConfig(e))):this._loadSvgIconFromConfig(e).pipe(F(t=>xt(t)))}_getSvgFromIconSetConfigs(e,t){let o=this._extractIconWithNameFromAnySet(e,t);if(o)return W(o);let i=t.filter(s=>!s.svgText).map(s=>this._loadSvgIconSetFromConfig(s).pipe(xn(a=>{let d=`Loading icon set URL: ${this._sanitizer.sanitize(B.RESOURCE_URL,s.url)} failed: ${a.message}`;return this._errorHandler.handleError(new Error(d)),W(null)})));return Fn(i).pipe(F(()=>{let s=this._extractIconWithNameFromAnySet(e,t);if(!s)throw Vr(e);return s}))}_extractIconWithNameFromAnySet(e,t){for(let o=t.length-1;o>=0;o--){let i=t[o];if(i.svgText&&i.svgText.toString().indexOf(e)>-1){let s=this._svgElementFromConfig(i),a=this._extractSvgIconFromSet(s,e,i.options);if(a)return a}}return null}_loadSvgIconFromConfig(e){return this._fetchIcon(e).pipe(ct(t=>e.svgText=t),F(()=>this._svgElementFromConfig(e)))}_loadSvgIconSetFromConfig(e){return e.svgText?W(null):this._fetchIcon(e).pipe(ct(t=>e.svgText=t))}_extractSvgIconFromSet(e,t,o){let i=e.querySelector(`[id="${t}"]`);if(!i)return null;let s=i.cloneNode(!0);if(s.removeAttribute("id"),s.nodeName.toLowerCase()==="svg")return this._setSvgAttributes(s,o);if(s.nodeName.toLowerCase()==="symbol")return this._setSvgAttributes(this._toSvgElement(s),o);let a=this._svgElementFromString(Me("<svg></svg>"));return a.appendChild(s),this._setSvgAttributes(a,o)}_svgElementFromString(e){let t=this._document.createElement("DIV");t.innerHTML=e;let o=t.querySelector("svg");if(!o)throw Error("<svg> tag not found");return o}_toSvgElement(e){let t=this._svgElementFromString(Me("<svg></svg>")),o=e.attributes;for(let i=0;i<o.length;i++){let{name:s,value:a}=o[i];s!=="id"&&t.setAttribute(s,a)}for(let i=0;i<e.childNodes.length;i++)e.childNodes[i].nodeType===this._document.ELEMENT_NODE&&t.appendChild(e.childNodes[i].cloneNode(!0));return t}_setSvgAttributes(e,t){return e.setAttribute("fit",""),e.setAttribute("height","100%"),e.setAttribute("width","100%"),e.setAttribute("preserveAspectRatio","xMidYMid meet"),e.setAttribute("focusable","false"),t&&t.viewBox&&e.setAttribute("viewBox",t.viewBox),e}_fetchIcon(e){let{url:t,options:o}=e,i=o?.withCredentials??!1;if(!this._httpClient)throw $i();if(t==null)throw Error(`Cannot fetch icon from URL "${t}".`);let s=this._sanitizer.sanitize(B.RESOURCE_URL,t);if(!s)throw Gr(t);let a=this._inProgressUrlFetches.get(s);if(a)return a;let c=this._httpClient.get(s,{responseType:"text",withCredentials:i}).pipe(F(d=>Me(d)),it(()=>this._inProgressUrlFetches.delete(s)),Ln());return this._inProgressUrlFetches.set(s,c),c}_addSvgIconConfig(e,t,o){return this._svgIconConfigs.set(Zr(e,t),o),this}_addSvgIconSetConfig(e,t){let o=this._iconSetConfigs.get(e);return o?o.push(t):this._iconSetConfigs.set(e,[t]),this}_svgElementFromConfig(e){if(!e.svgElement){let t=this._svgElementFromString(e.svgText);this._setSvgAttributes(t,e.options),e.svgElement=t}return e.svgElement}_getIconConfigFromResolvers(e,t){for(let o=0;o<this._resolvers.length;o++){let i=this._resolvers[o](t,e);if(i)return zi(i)?new ie(i.url,null,i.options):new ie(i,null)}}static \u0275fac=function(t){return new(t||n)(m(sn,8),m(an),m(y,8),m(de))};static \u0275prov=f({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function xt(n){return n.cloneNode(!0)}function Zr(n,r){return n+":"+r}function zi(n){return!!(n.url&&n.options)}var Hi=new b("cdk-dir-doc",{providedIn:"root",factory:()=>u(y)}),Vi=/^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Adlm|Arab|Hebr|Nkoo|Rohg|Thaa))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i;function Gi(n){let r=n?.toLowerCase()||"";return r==="auto"&&typeof navigator<"u"&&navigator?.language?Vi.test(navigator.language)?"rtl":"ltr":r==="rtl"?"rtl":"ltr"}var Lu=(()=>{class n{get value(){return this.valueSignal()}valueSignal=Pe("ltr");change=new Ne;constructor(){let e=u(Hi,{optional:!0});if(e){let t=e.body?e.body.dir:null,o=e.documentElement?e.documentElement.dir:null;this.valueSignal.set(Gi(t||o||"ltr"))}}ngOnDestroy(){this.change.complete()}static \u0275fac=function(t){return new(t||n)};static \u0275prov=f({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var Fe=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=R({type:n});static \u0275inj=x({})}return n})();var Wi=["*"],Zi=new b("MAT_ICON_DEFAULT_OPTIONS"),Ki=new b("mat-icon-location",{providedIn:"root",factory:()=>{let n=u(y),r=n?n.location:null;return{getPathname:()=>r?r.pathname+r.search:""}}}),Yr=["clip-path","color-profile","src","cursor","fill","filter","marker","marker-start","marker-mid","marker-end","mask","stroke"],Yi=Yr.map(n=>`[${n}]`).join(", "),Xi=/^url\(['"]?#(.*?)['"]?\)$/,Ku=(()=>{class n{_elementRef=u(U);_iconRegistry=u(Kr);_location=u(Ki);_errorHandler=u(de);_defaultColor;get color(){return this._color||this._defaultColor}set color(e){this._color=e}_color;inline=!1;get svgIcon(){return this._svgIcon}set svgIcon(e){e!==this._svgIcon&&(e?this._updateSvgIcon(e):this._svgIcon&&this._clearSvgElement(),this._svgIcon=e)}_svgIcon;get fontSet(){return this._fontSet}set fontSet(e){let t=this._cleanupFontValue(e);t!==this._fontSet&&(this._fontSet=t,this._updateFontIconClasses())}_fontSet;get fontIcon(){return this._fontIcon}set fontIcon(e){let t=this._cleanupFontValue(e);t!==this._fontIcon&&(this._fontIcon=t,this._updateFontIconClasses())}_fontIcon;_previousFontSetClass=[];_previousFontIconClass;_svgName=null;_svgNamespace=null;_previousPath;_elementsWithExternalReferences;_currentIconFetch=Tn.EMPTY;constructor(){let e=u(new tr("aria-hidden"),{optional:!0}),t=u(Zi,{optional:!0});t&&(t.color&&(this.color=this._defaultColor=t.color),t.fontSet&&(this.fontSet=t.fontSet)),e||this._elementRef.nativeElement.setAttribute("aria-hidden","true")}_splitIconName(e){if(!e)return["",""];let t=e.split(":");switch(t.length){case 1:return["",t[0]];case 2:return t;default:throw Error(`Invalid icon name: "${e}"`)}}ngOnInit(){this._updateFontIconClasses()}ngAfterViewChecked(){let e=this._elementsWithExternalReferences;if(e&&e.size){let t=this._location.getPathname();t!==this._previousPath&&(this._previousPath=t,this._prependPathToReferences(t))}}ngOnDestroy(){this._currentIconFetch.unsubscribe(),this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear()}_usingFontIcon(){return!this.svgIcon}_setSvgElement(e){this._clearSvgElement();let t=this._location.getPathname();this._previousPath=t,this._cacheChildrenWithExternalReferences(e),this._prependPathToReferences(t),this._elementRef.nativeElement.appendChild(e)}_clearSvgElement(){let e=this._elementRef.nativeElement,t=e.childNodes.length;for(this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear();t--;){let o=e.childNodes[t];(o.nodeType!==1||o.nodeName.toLowerCase()==="svg")&&o.remove()}}_updateFontIconClasses(){if(!this._usingFontIcon())return;let e=this._elementRef.nativeElement,t=(this.fontSet?this._iconRegistry.classNameForFontAlias(this.fontSet).split(/ +/):this._iconRegistry.getDefaultFontSetClass()).filter(o=>o.length>0);this._previousFontSetClass.forEach(o=>e.classList.remove(o)),t.forEach(o=>e.classList.add(o)),this._previousFontSetClass=t,this.fontIcon!==this._previousFontIconClass&&!t.includes("mat-ligature-font")&&(this._previousFontIconClass&&e.classList.remove(this._previousFontIconClass),this.fontIcon&&e.classList.add(this.fontIcon),this._previousFontIconClass=this.fontIcon)}_cleanupFontValue(e){return typeof e=="string"?e.trim().split(" ")[0]:e}_prependPathToReferences(e){let t=this._elementsWithExternalReferences;t&&t.forEach((o,i)=>{o.forEach(s=>{i.setAttribute(s.name,`url('${e}#${s.value}')`)})})}_cacheChildrenWithExternalReferences(e){let t=e.querySelectorAll(Yi),o=this._elementsWithExternalReferences=this._elementsWithExternalReferences||new Map;for(let i=0;i<t.length;i++)Yr.forEach(s=>{let a=t[i],c=a.getAttribute(s),d=c?c.match(Xi):null;if(d){let l=o.get(a);l||(l=[],o.set(a,l)),l.push({name:s,value:d[1]})}})}_updateSvgIcon(e){if(this._svgNamespace=null,this._svgName=null,this._currentIconFetch.unsubscribe(),e){let[t,o]=this._splitIconName(e);t&&(this._svgNamespace=t),o&&(this._svgName=o),this._currentIconFetch=this._iconRegistry.getNamedSvgIcon(o,t).pipe(ot(1)).subscribe(i=>this._setSvgElement(i),i=>{let s=`Error retrieving icon ${t}:${o}! ${i.message}`;this._errorHandler.handleError(new Error(s))})}}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=j({type:n,selectors:[["mat-icon"]],hostAttrs:["role","img",1,"mat-icon","notranslate"],hostVars:10,hostBindings:function(t,o){t&2&&(Be("data-mat-icon-type",o._usingFontIcon()?"font":"svg")("data-mat-icon-name",o._svgName||o.fontIcon)("data-mat-icon-namespace",o._svgNamespace||o.fontSet)("fontIcon",o._usingFontIcon()?o.fontIcon:null),mt(o.color?"mat-"+o.color:""),le("mat-icon-inline",o.inline)("mat-icon-no-color",o.color!=="primary"&&o.color!=="accent"&&o.color!=="warn"))},inputs:{color:"color",inline:[2,"inline","inline",X],svgIcon:"svgIcon",fontSet:"fontSet",fontIcon:"fontIcon"},exportAs:["matIcon"],ngContentSelectors:Wi,decls:1,vars:0,template:function(t,o){t&1&&(Ae(),se(0))},styles:[`mat-icon, mat-icon.mat-primary, mat-icon.mat-accent, mat-icon.mat-warn {
  color: var(--mat-icon-color, inherit);
}

.mat-icon {
  -webkit-user-select: none;
  user-select: none;
  background-repeat: no-repeat;
  display: inline-block;
  fill: currentColor;
  height: 24px;
  width: 24px;
  overflow: hidden;
}
.mat-icon.mat-icon-inline {
  font-size: inherit;
  height: inherit;
  line-height: inherit;
  width: inherit;
}
.mat-icon.mat-ligature-font[fontIcon]::before {
  content: attr(fontIcon);
}

[dir=rtl] .mat-icon-rtl-mirror {
  transform: scale(-1, 1);
}

.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon,
.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon {
  display: block;
}
.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button .mat-icon,
.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button .mat-icon {
  margin: auto;
}
`],encapsulation:2,changeDetection:0})}return n})(),Yu=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=R({type:n});static \u0275inj=x({imports:[Fe]})}return n})();function Xe(n){return n.buttons===0||n.detail===0}function Je(n){let r=n.touches&&n.touches[0]||n.changedTouches&&n.changedTouches[0];return!!r&&r.identifier===-1&&(r.radiusX==null||r.radiusX===1)&&(r.radiusY==null||r.radiusY===1)}var cn;function Xr(){if(cn==null){let n=typeof document<"u"?document.head:null;cn=!!(n&&(n.createShadowRoot||n.attachShadow))}return cn}function un(n){if(Xr()){let r=n.getRootNode?n.getRootNode():null;if(typeof ShadowRoot<"u"&&ShadowRoot&&r instanceof ShadowRoot)return r}return null}function Ji(){let n=typeof document<"u"&&document?document.activeElement:null;for(;n&&n.shadowRoot;){let r=n.shadowRoot.activeElement;if(r===n)break;n=r}return n}function K(n){return n.composedPath?n.composedPath()[0]:n.target}var dn;try{dn=typeof Intl<"u"&&Intl.v8BreakIterator}catch{dn=!1}var H=(()=>{class n{_platformId=u(ve);isBrowser=this._platformId?Ar(this._platformId):typeof document=="object"&&!!document;EDGE=this.isBrowser&&/(edge)/i.test(navigator.userAgent);TRIDENT=this.isBrowser&&/(msie|trident)/i.test(navigator.userAgent);BLINK=this.isBrowser&&!!(window.chrome||dn)&&typeof CSS<"u"&&!this.EDGE&&!this.TRIDENT;WEBKIT=this.isBrowser&&/AppleWebKit/i.test(navigator.userAgent)&&!this.BLINK&&!this.EDGE&&!this.TRIDENT;IOS=this.isBrowser&&/iPad|iPhone|iPod/.test(navigator.userAgent)&&!("MSStream"in window);FIREFOX=this.isBrowser&&/(firefox|minefield)/i.test(navigator.userAgent);ANDROID=this.isBrowser&&/android/i.test(navigator.userAgent)&&!this.TRIDENT;SAFARI=this.isBrowser&&/safari/i.test(navigator.userAgent)&&this.WEBKIT;constructor(){}static \u0275fac=function(t){return new(t||n)};static \u0275prov=f({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var qe;function Jr(){if(qe==null&&typeof window<"u")try{window.addEventListener("test",null,Object.defineProperty({},"passive",{get:()=>qe=!0}))}finally{qe=qe||!1}return qe}function xe(n){return Jr()?n:!!n.capture}function ln(n,r=0){return qr(n)?Number(n):arguments.length===2?r:0}function qr(n){return!isNaN(parseFloat(n))&&!isNaN(Number(n))}function J(n){return n instanceof U?n.nativeElement:n}var Qr=new b("cdk-input-modality-detector-options"),eo={ignoreKeys:[18,17,224,91,16]},to=650,fn={passive:!0,capture:!0},no=(()=>{class n{_platform=u(H);_listenerCleanups;modalityDetected;modalityChanged;get mostRecentModality(){return this._modality.value}_mostRecentTarget=null;_modality=new An(null);_options;_lastTouchMs=0;_onKeydown=e=>{this._options?.ignoreKeys?.some(t=>t===e.keyCode)||(this._modality.next("keyboard"),this._mostRecentTarget=K(e))};_onMousedown=e=>{Date.now()-this._lastTouchMs<to||(this._modality.next(Xe(e)?"keyboard":"mouse"),this._mostRecentTarget=K(e))};_onTouchstart=e=>{if(Je(e)){this._modality.next("keyboard");return}this._lastTouchMs=Date.now(),this._modality.next("touch"),this._mostRecentTarget=K(e)};constructor(){let e=u(M),t=u(y),o=u(Qr,{optional:!0});if(this._options=C(C({},eo),o),this.modalityDetected=this._modality.pipe(st(1)),this.modalityChanged=this.modalityDetected.pipe(On()),this._platform.isBrowser){let i=u(Ce).createRenderer(null,null);this._listenerCleanups=e.runOutsideAngular(()=>[i.listen(t,"keydown",this._onKeydown,fn),i.listen(t,"mousedown",this._onMousedown,fn),i.listen(t,"touchstart",this._onTouchstart,fn)])}}ngOnDestroy(){this._modality.complete(),this._listenerCleanups?.forEach(e=>e())}static \u0275fac=function(t){return new(t||n)};static \u0275prov=f({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),Qe=(function(n){return n[n.IMMEDIATE=0]="IMMEDIATE",n[n.EVENTUAL=1]="EVENTUAL",n})(Qe||{}),ro=new b("cdk-focus-monitor-default-options"),Rt=xe({passive:!0,capture:!0}),mn=(()=>{class n{_ngZone=u(M);_platform=u(H);_inputModalityDetector=u(no);_origin=null;_lastFocusOrigin=null;_windowFocused=!1;_windowFocusTimeoutId;_originTimeoutId;_originFromTouchInteraction=!1;_elementInfo=new Map;_monitoredElementCount=0;_rootNodeFocusListenerCount=new Map;_detectionMode;_windowFocusListener=()=>{this._windowFocused=!0,this._windowFocusTimeoutId=setTimeout(()=>this._windowFocused=!1)};_document=u(y);_stopInputModalityDetector=new Q;constructor(){let e=u(ro,{optional:!0});this._detectionMode=e?.detectionMode||Qe.IMMEDIATE}_rootNodeFocusAndBlurListener=e=>{let t=K(e);for(let o=t;o;o=o.parentElement)e.type==="focus"?this._onFocus(e,o):this._onBlur(e,o)};monitor(e,t=!1){let o=J(e);if(!this._platform.isBrowser||o.nodeType!==1)return W();let i=un(o)||this._document,s=this._elementInfo.get(o);if(s)return t&&(s.checkChildren=!0),s.subject;let a={checkChildren:t,subject:new Q,rootNode:i};return this._elementInfo.set(o,a),this._registerGlobalListeners(a),a.subject}stopMonitoring(e){let t=J(e),o=this._elementInfo.get(t);o&&(o.subject.complete(),this._setClasses(t),this._elementInfo.delete(t),this._removeGlobalListeners(o))}focusVia(e,t,o){let i=J(e),s=this._document.activeElement;i===s?this._getClosestElementsInfo(i).forEach(([a,c])=>this._originChanged(a,t,c)):(this._setOrigin(t),typeof i.focus=="function"&&i.focus(o))}ngOnDestroy(){this._elementInfo.forEach((e,t)=>this.stopMonitoring(t))}_getWindow(){return this._document.defaultView||window}_getFocusOrigin(e){return this._origin?this._originFromTouchInteraction?this._shouldBeAttributedToTouch(e)?"touch":"program":this._origin:this._windowFocused&&this._lastFocusOrigin?this._lastFocusOrigin:e&&this._isLastInteractionFromInputLabel(e)?"mouse":"program"}_shouldBeAttributedToTouch(e){return this._detectionMode===Qe.EVENTUAL||!!e?.contains(this._inputModalityDetector._mostRecentTarget)}_setClasses(e,t){e.classList.toggle("cdk-focused",!!t),e.classList.toggle("cdk-touch-focused",t==="touch"),e.classList.toggle("cdk-keyboard-focused",t==="keyboard"),e.classList.toggle("cdk-mouse-focused",t==="mouse"),e.classList.toggle("cdk-program-focused",t==="program")}_setOrigin(e,t=!1){this._ngZone.runOutsideAngular(()=>{if(this._origin=e,this._originFromTouchInteraction=e==="touch"&&t,this._detectionMode===Qe.IMMEDIATE){clearTimeout(this._originTimeoutId);let o=this._originFromTouchInteraction?to:1;this._originTimeoutId=setTimeout(()=>this._origin=null,o)}})}_onFocus(e,t){let o=this._elementInfo.get(t),i=K(e);!o||!o.checkChildren&&t!==i||this._originChanged(t,this._getFocusOrigin(i),o)}_onBlur(e,t){let o=this._elementInfo.get(t);!o||o.checkChildren&&e.relatedTarget instanceof Node&&t.contains(e.relatedTarget)||(this._setClasses(t),this._emitOrigin(o,null))}_emitOrigin(e,t){e.subject.observers.length&&this._ngZone.run(()=>e.subject.next(t))}_registerGlobalListeners(e){if(!this._platform.isBrowser)return;let t=e.rootNode,o=this._rootNodeFocusListenerCount.get(t)||0;o||this._ngZone.runOutsideAngular(()=>{t.addEventListener("focus",this._rootNodeFocusAndBlurListener,Rt),t.addEventListener("blur",this._rootNodeFocusAndBlurListener,Rt)}),this._rootNodeFocusListenerCount.set(t,o+1),++this._monitoredElementCount===1&&(this._ngZone.runOutsideAngular(()=>{this._getWindow().addEventListener("focus",this._windowFocusListener)}),this._inputModalityDetector.modalityDetected.pipe(at(this._stopInputModalityDetector)).subscribe(i=>{this._setOrigin(i,!0)}))}_removeGlobalListeners(e){let t=e.rootNode;if(this._rootNodeFocusListenerCount.has(t)){let o=this._rootNodeFocusListenerCount.get(t);o>1?this._rootNodeFocusListenerCount.set(t,o-1):(t.removeEventListener("focus",this._rootNodeFocusAndBlurListener,Rt),t.removeEventListener("blur",this._rootNodeFocusAndBlurListener,Rt),this._rootNodeFocusListenerCount.delete(t))}--this._monitoredElementCount||(this._getWindow().removeEventListener("focus",this._windowFocusListener),this._stopInputModalityDetector.next(),clearTimeout(this._windowFocusTimeoutId),clearTimeout(this._originTimeoutId))}_originChanged(e,t,o){this._setClasses(e,t),this._emitOrigin(o,t),this._lastFocusOrigin=t}_getClosestElementsInfo(e){let t=[];return this._elementInfo.forEach((o,i)=>{(i===e||o.checkChildren&&i.contains(e))&&t.push([i,o])}),t}_isLastInteractionFromInputLabel(e){let{_mostRecentTarget:t,mostRecentModality:o}=this._inputModalityDetector;if(o!=="mouse"||!t||t===e||e.nodeName!=="INPUT"&&e.nodeName!=="TEXTAREA"||e.disabled)return!1;let i=e.labels;if(i){for(let s=0;s<i.length;s++)if(i[s].contains(t))return!0}return!1}static \u0275fac=function(t){return new(t||n)};static \u0275prov=f({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function hn(n){return Array.isArray(n)?n:[n]}var oo=new Set,pe,Ot=(()=>{class n{_platform=u(H);_nonce=u(_e,{optional:!0});_matchMedia;constructor(){this._matchMedia=this._platform.isBrowser&&window.matchMedia?window.matchMedia.bind(window):Qi}matchMedia(e){return(this._platform.WEBKIT||this._platform.BLINK)&&qi(e,this._nonce),this._matchMedia(e)}static \u0275fac=function(t){return new(t||n)};static \u0275prov=f({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function qi(n,r){if(!oo.has(n))try{pe||(pe=document.createElement("style"),r&&pe.setAttribute("nonce",r),pe.setAttribute("type","text/css"),document.head.appendChild(pe)),pe.sheet&&(pe.sheet.insertRule(`@media ${n} {body{ }}`,0),oo.add(n))}catch(e){console.error(e)}}function Qi(n){return{matches:n==="all"||n==="",media:n,addListener:()=>{},removeListener:()=>{}}}var pn=(()=>{class n{_mediaMatcher=u(Ot);_zone=u(M);_queries=new Map;_destroySubject=new Q;constructor(){}ngOnDestroy(){this._destroySubject.next(),this._destroySubject.complete()}isMatched(e){return io(hn(e)).some(o=>this._registerQuery(o).mql.matches)}observe(e){let o=io(hn(e)).map(s=>this._registerQuery(s).observable),i=Sn(o);return i=Mn(i.pipe(ot(1)),i.pipe(st(1),rt(0))),i.pipe(F(s=>{let a={matches:!1,breakpoints:{}};return s.forEach(({matches:c,query:d})=>{a.matches=a.matches||c,a.breakpoints[d]=c}),a}))}_registerQuery(e){if(this._queries.has(e))return this._queries.get(e);let t=this._mediaMatcher.matchMedia(e),i={observable:new ye(s=>{let a=c=>this._zone.run(()=>s.next(c));return t.addListener(a),()=>{t.removeListener(a)}}).pipe(Nn(t),F(({matches:s})=>({query:e,matches:s})),at(this._destroySubject)),mql:t};return this._queries.set(e,i),i}static \u0275fac=function(t){return new(t||n)};static \u0275prov=f({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function io(n){return n.map(r=>r.split(",")).reduce((r,e)=>r.concat(e)).map(r=>r.trim())}function es(n){if(n.type==="characterData"&&n.target instanceof Comment)return!0;if(n.type==="childList"){for(let r=0;r<n.addedNodes.length;r++)if(!(n.addedNodes[r]instanceof Comment))return!1;for(let r=0;r<n.removedNodes.length;r++)if(!(n.removedNodes[r]instanceof Comment))return!1;return!0}return!1}var so=(()=>{class n{create(e){return typeof MutationObserver>"u"?null:new MutationObserver(e)}static \u0275fac=function(t){return new(t||n)};static \u0275prov=f({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),ao=(()=>{class n{_mutationObserverFactory=u(so);_observedElements=new Map;_ngZone=u(M);constructor(){}ngOnDestroy(){this._observedElements.forEach((e,t)=>this._cleanupObserver(t))}observe(e){let t=J(e);return new ye(o=>{let s=this._observeElement(t).pipe(F(a=>a.filter(c=>!es(c))),nt(a=>!!a.length)).subscribe(a=>{this._ngZone.run(()=>{o.next(a)})});return()=>{s.unsubscribe(),this._unobserveElement(t)}})}_observeElement(e){return this._ngZone.runOutsideAngular(()=>{if(this._observedElements.has(e))this._observedElements.get(e).count++;else{let t=new Q,o=this._mutationObserverFactory.create(i=>t.next(i));o&&o.observe(e,{characterData:!0,childList:!0,subtree:!0}),this._observedElements.set(e,{observer:o,stream:t,count:1})}return this._observedElements.get(e).stream})}_unobserveElement(e){this._observedElements.has(e)&&(this._observedElements.get(e).count--,this._observedElements.get(e).count||this._cleanupObserver(e))}_cleanupObserver(e){if(this._observedElements.has(e)){let{observer:t,stream:o}=this._observedElements.get(e);t&&t.disconnect(),o.complete(),this._observedElements.delete(e)}}static \u0275fac=function(t){return new(t||n)};static \u0275prov=f({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),$d=(()=>{class n{_contentObserver=u(ao);_elementRef=u(U);event=new Ne;get disabled(){return this._disabled}set disabled(e){this._disabled=e,this._disabled?this._unsubscribe():this._subscribe()}_disabled=!1;get debounce(){return this._debounce}set debounce(e){this._debounce=ln(e),this._subscribe()}_debounce;_currentSubscription=null;constructor(){}ngAfterContentInit(){!this._currentSubscription&&!this.disabled&&this._subscribe()}ngOnDestroy(){this._unsubscribe()}_subscribe(){this._unsubscribe();let e=this._contentObserver.observe(this._elementRef);this._currentSubscription=(this.debounce?e.pipe(rt(this.debounce)):e).subscribe(this.event)}_unsubscribe(){this._currentSubscription?.unsubscribe()}static \u0275fac=function(t){return new(t||n)};static \u0275dir=ee({type:n,selectors:[["","cdkObserveContent",""]],inputs:{disabled:[2,"cdkObserveContentDisabled","disabled",X],debounce:"debounce"},outputs:{event:"cdkObserveContent"},exportAs:["cdkObserveContent"]})}return n})(),co=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=R({type:n});static \u0275inj=x({providers:[so]})}return n})();var ts=(()=>{class n{_platform=u(H);constructor(){}isDisabled(e){return e.hasAttribute("disabled")}isVisible(e){return rs(e)&&getComputedStyle(e).visibility==="visible"}isTabbable(e){if(!this._platform.isBrowser)return!1;let t=ns(ls(e));if(t&&(uo(t)===-1||!this.isVisible(t)))return!1;let o=e.nodeName.toLowerCase(),i=uo(e);return e.hasAttribute("contenteditable")?i!==-1:o==="iframe"||o==="object"||this._platform.WEBKIT&&this._platform.IOS&&!us(e)?!1:o==="audio"?e.hasAttribute("controls")?i!==-1:!1:o==="video"?i===-1?!1:i!==null?!0:this._platform.FIREFOX||e.hasAttribute("controls"):e.tabIndex>=0}isFocusable(e,t){return ds(e)&&!this.isDisabled(e)&&(t?.ignoreVisibility||this.isVisible(e))}static \u0275fac=function(t){return new(t||n)};static \u0275prov=f({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function ns(n){try{return n.frameElement}catch{return null}}function rs(n){return!!(n.offsetWidth||n.offsetHeight||typeof n.getClientRects=="function"&&n.getClientRects().length)}function os(n){let r=n.nodeName.toLowerCase();return r==="input"||r==="select"||r==="button"||r==="textarea"}function is(n){return as(n)&&n.type=="hidden"}function ss(n){return cs(n)&&n.hasAttribute("href")}function as(n){return n.nodeName.toLowerCase()=="input"}function cs(n){return n.nodeName.toLowerCase()=="a"}function mo(n){if(!n.hasAttribute("tabindex")||n.tabIndex===void 0)return!1;let r=n.getAttribute("tabindex");return!!(r&&!isNaN(parseInt(r,10)))}function uo(n){if(!mo(n))return null;let r=parseInt(n.getAttribute("tabindex")||"",10);return isNaN(r)?-1:r}function us(n){let r=n.nodeName.toLowerCase(),e=r==="input"&&n.type;return e==="text"||e==="password"||r==="select"||r==="textarea"}function ds(n){return is(n)?!1:os(n)||ss(n)||n.hasAttribute("contenteditable")||mo(n)}function ls(n){return n.ownerDocument&&n.ownerDocument.defaultView||window}var bn=class{_element;_checker;_ngZone;_document;_injector;_startAnchor=null;_endAnchor=null;_hasAttached=!1;startAnchorListener=()=>this.focusLastTabbableElement();endAnchorListener=()=>this.focusFirstTabbableElement();get enabled(){return this._enabled}set enabled(r){this._enabled=r,this._startAnchor&&this._endAnchor&&(this._toggleAnchorTabIndex(r,this._startAnchor),this._toggleAnchorTabIndex(r,this._endAnchor))}_enabled=!0;constructor(r,e,t,o,i=!1,s){this._element=r,this._checker=e,this._ngZone=t,this._document=o,this._injector=s,i||this.attachAnchors()}destroy(){let r=this._startAnchor,e=this._endAnchor;r&&(r.removeEventListener("focus",this.startAnchorListener),r.remove()),e&&(e.removeEventListener("focus",this.endAnchorListener),e.remove()),this._startAnchor=this._endAnchor=null,this._hasAttached=!1}attachAnchors(){return this._hasAttached?!0:(this._ngZone.runOutsideAngular(()=>{this._startAnchor||(this._startAnchor=this._createAnchor(),this._startAnchor.addEventListener("focus",this.startAnchorListener)),this._endAnchor||(this._endAnchor=this._createAnchor(),this._endAnchor.addEventListener("focus",this.endAnchorListener))}),this._element.parentNode&&(this._element.parentNode.insertBefore(this._startAnchor,this._element),this._element.parentNode.insertBefore(this._endAnchor,this._element.nextSibling),this._hasAttached=!0),this._hasAttached)}focusInitialElementWhenReady(r){return new Promise(e=>{this._executeOnStable(()=>e(this.focusInitialElement(r)))})}focusFirstTabbableElementWhenReady(r){return new Promise(e=>{this._executeOnStable(()=>e(this.focusFirstTabbableElement(r)))})}focusLastTabbableElementWhenReady(r){return new Promise(e=>{this._executeOnStable(()=>e(this.focusLastTabbableElement(r)))})}_getRegionBoundary(r){let e=this._element.querySelectorAll(`[cdk-focus-region-${r}], [cdkFocusRegion${r}], [cdk-focus-${r}]`);return r=="start"?e.length?e[0]:this._getFirstTabbableElement(this._element):e.length?e[e.length-1]:this._getLastTabbableElement(this._element)}focusInitialElement(r){let e=this._element.querySelector("[cdk-focus-initial], [cdkFocusInitial]");if(e){if(!this._checker.isFocusable(e)){let t=this._getFirstTabbableElement(e);return t?.focus(r),!!t}return e.focus(r),!0}return this.focusFirstTabbableElement(r)}focusFirstTabbableElement(r){let e=this._getRegionBoundary("start");return e&&e.focus(r),!!e}focusLastTabbableElement(r){let e=this._getRegionBoundary("end");return e&&e.focus(r),!!e}hasAttached(){return this._hasAttached}_getFirstTabbableElement(r){if(this._checker.isFocusable(r)&&this._checker.isTabbable(r))return r;let e=r.children;for(let t=0;t<e.length;t++){let o=e[t].nodeType===this._document.ELEMENT_NODE?this._getFirstTabbableElement(e[t]):null;if(o)return o}return null}_getLastTabbableElement(r){if(this._checker.isFocusable(r)&&this._checker.isTabbable(r))return r;let e=r.children;for(let t=e.length-1;t>=0;t--){let o=e[t].nodeType===this._document.ELEMENT_NODE?this._getLastTabbableElement(e[t]):null;if(o)return o}return null}_createAnchor(){let r=this._document.createElement("div");return this._toggleAnchorTabIndex(this._enabled,r),r.classList.add("cdk-visually-hidden"),r.classList.add("cdk-focus-trap-anchor"),r.setAttribute("aria-hidden","true"),r}_toggleAnchorTabIndex(r,e){r?e.setAttribute("tabindex","0"):e.removeAttribute("tabindex")}toggleAnchors(r){this._startAnchor&&this._endAnchor&&(this._toggleAnchorTabIndex(r,this._startAnchor),this._toggleAnchorTabIndex(r,this._endAnchor))}_executeOnStable(r){this._injector?Jn(r,{injector:this._injector}):setTimeout(r)}},el=(()=>{class n{_checker=u(ts);_ngZone=u(M);_document=u(y);_injector=u(Y);constructor(){u(he).load(Hr)}create(e,t=!1){return new bn(e,this._checker,this._ngZone,this._document,t,this._injector)}static \u0275fac=function(t){return new(t||n)};static \u0275prov=f({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var ge=(function(n){return n[n.NONE=0]="NONE",n[n.BLACK_ON_WHITE=1]="BLACK_ON_WHITE",n[n.WHITE_ON_BLACK=2]="WHITE_ON_BLACK",n})(ge||{}),lo="cdk-high-contrast-black-on-white",fo="cdk-high-contrast-white-on-black",gn="cdk-high-contrast-active",fs=(()=>{class n{_platform=u(H);_hasCheckedHighContrastMode=!1;_document=u(y);_breakpointSubscription;constructor(){this._breakpointSubscription=u(pn).observe("(forced-colors: active)").subscribe(()=>{this._hasCheckedHighContrastMode&&(this._hasCheckedHighContrastMode=!1,this._applyBodyHighContrastModeCssClasses())})}getHighContrastMode(){if(!this._platform.isBrowser)return ge.NONE;let e=this._document.createElement("div");e.style.backgroundColor="rgb(1,2,3)",e.style.position="absolute",this._document.body.appendChild(e);let t=this._document.defaultView||window,o=t&&t.getComputedStyle?t.getComputedStyle(e):null,i=(o&&o.backgroundColor||"").replace(/ /g,"");switch(e.remove(),i){case"rgb(0,0,0)":case"rgb(45,50,54)":case"rgb(32,32,32)":return ge.WHITE_ON_BLACK;case"rgb(255,255,255)":case"rgb(255,250,239)":return ge.BLACK_ON_WHITE}return ge.NONE}ngOnDestroy(){this._breakpointSubscription.unsubscribe()}_applyBodyHighContrastModeCssClasses(){if(!this._hasCheckedHighContrastMode&&this._platform.isBrowser&&this._document.body){let e=this._document.body.classList;e.remove(gn,lo,fo),this._hasCheckedHighContrastMode=!0;let t=this.getHighContrastMode();t===ge.BLACK_ON_WHITE?e.add(gn,lo):t===ge.WHITE_ON_BLACK&&e.add(gn,fo)}}static \u0275fac=function(t){return new(t||n)};static \u0275prov=f({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),tl=(()=>{class n{constructor(){u(fs)._applyBodyHighContrastModeCssClasses()}static \u0275fac=function(t){return new(t||n)};static \u0275mod=R({type:n});static \u0275inj=x({imports:[co]})}return n})();function rl(n,...r){return r.length?r.some(e=>n[e]):n.altKey||n.shiftKey||n.ctrlKey||n.metaKey}var yn={},vn=class n{_appId=u(ke);static _infix=`a${Math.floor(Math.random()*1e5).toString()}`;getId(r,e=!1){return this._appId!=="ng"&&(r+=this._appId),yn.hasOwnProperty(r)||(yn[r]=0),`${r}${e?n._infix+"-":""}${yn[r]++}`}static \u0275fac=function(e){return new(e||n)};static \u0275prov=f({token:n,factory:n.\u0275fac,providedIn:"root"})};var et=(function(n){return n[n.NORMAL=0]="NORMAL",n[n.NEGATED=1]="NEGATED",n[n.INVERTED=2]="INVERTED",n})(et||{}),Lt,be;function ml(){if(be==null){if(typeof document!="object"||!document||typeof Element!="function"||!Element)return be=!1,be;if(document.documentElement?.style&&"scrollBehavior"in document.documentElement.style)be=!0;else{let n=Element.prototype.scrollTo;n?be=!/\{\s*\[native code\]\s*\}/.test(n.toString()):be=!1}}return be}function hl(){if(typeof document!="object"||!document)return et.NORMAL;if(Lt==null){let n=document.createElement("div"),r=n.style;n.dir="rtl",r.width="1px",r.overflow="auto",r.visibility="hidden",r.pointerEvents="none",r.position="absolute";let e=document.createElement("div"),t=e.style;t.width="2px",t.height="1px",n.appendChild(e),document.body.appendChild(n),Lt=et.NORMAL,n.scrollLeft===0&&(n.scrollLeft=1,Lt=n.scrollLeft===0?et.NEGATED:et.INVERTED),n.remove()}return Lt}function gl(){return typeof __karma__<"u"&&!!__karma__||typeof jasmine<"u"&&!!jasmine||typeof jest<"u"&&!!jest||typeof Mocha<"u"&&!!Mocha}var ms=new b("MATERIAL_ANIMATIONS"),ho=null;function hs(){return u(ms,{optional:!0})?.animationsDisabled||u(zn,{optional:!0})==="NoopAnimations"?"di-disabled":(ho??=u(Ot).matchMedia("(prefers-reduced-motion)").matches,ho?"reduced-motion":"enabled")}function Nt(){return hs()!=="enabled"}function Il(n){return n==null?"":typeof n=="string"?n:`${n}px`}function Ml(n){return n!=null&&`${n}`!="false"}var V=(function(n){return n[n.FADING_IN=0]="FADING_IN",n[n.VISIBLE=1]="VISIBLE",n[n.FADING_OUT=2]="FADING_OUT",n[n.HIDDEN=3]="HIDDEN",n})(V||{}),_n=class{_renderer;element;config;_animationForciblyDisabledThroughCss;state=V.HIDDEN;constructor(r,e,t,o=!1){this._renderer=r,this.element=e,this.config=t,this._animationForciblyDisabledThroughCss=o}fadeOut(){this._renderer.fadeOutRipple(this)}},po=xe({passive:!0,capture:!0}),Dn=class{_events=new Map;addHandler(r,e,t,o){let i=this._events.get(e);if(i){let s=i.get(t);s?s.add(o):i.set(t,new Set([o]))}else this._events.set(e,new Map([[t,new Set([o])]])),r.runOutsideAngular(()=>{document.addEventListener(e,this._delegateEventHandler,po)})}removeHandler(r,e,t){let o=this._events.get(r);if(!o)return;let i=o.get(e);i&&(i.delete(t),i.size===0&&o.delete(e),o.size===0&&(this._events.delete(r),document.removeEventListener(r,this._delegateEventHandler,po)))}_delegateEventHandler=r=>{let e=K(r);e&&this._events.get(r.type)?.forEach((t,o)=>{(o===e||o.contains(e))&&t.forEach(i=>i.handleEvent(r))})}},tt={enterDuration:225,exitDuration:150},ps=800,go=xe({passive:!0,capture:!0}),bo=["mousedown","touchstart"],yo=["mouseup","mouseleave","touchend","touchcancel"],gs=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275cmp=j({type:n,selectors:[["ng-component"]],hostAttrs:["mat-ripple-style-loader",""],decls:0,vars:0,template:function(t,o){},styles:[`.mat-ripple {
  overflow: hidden;
  position: relative;
}
.mat-ripple:not(:empty) {
  transform: translateZ(0);
}

.mat-ripple.mat-ripple-unbounded {
  overflow: visible;
}

.mat-ripple-element {
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
  transition: opacity, transform 0ms cubic-bezier(0, 0, 0.2, 1);
  transform: scale3d(0, 0, 0);
  background-color: var(--mat-ripple-color, color-mix(in srgb, var(--mat-sys-on-surface) 10%, transparent));
}
@media (forced-colors: active) {
  .mat-ripple-element {
    display: none;
  }
}
.cdk-drag-preview .mat-ripple-element, .cdk-drag-placeholder .mat-ripple-element {
  display: none;
}
`],encapsulation:2,changeDetection:0})}return n})(),Pt=class n{_target;_ngZone;_platform;_containerElement;_triggerElement=null;_isPointerDown=!1;_activeRipples=new Map;_mostRecentTransientRipple=null;_lastTouchStartEvent;_pointerUpEventsRegistered=!1;_containerRect=null;static _eventManager=new Dn;constructor(r,e,t,o,i){this._target=r,this._ngZone=e,this._platform=o,o.isBrowser&&(this._containerElement=J(t)),i&&i.get(he).load(gs)}fadeInRipple(r,e,t={}){let o=this._containerRect=this._containerRect||this._containerElement.getBoundingClientRect(),i=C(C({},tt),t.animation);t.centered&&(r=o.left+o.width/2,e=o.top+o.height/2);let s=t.radius||bs(r,e,o),a=r-o.left,c=e-o.top,d=i.enterDuration,l=document.createElement("div");l.classList.add("mat-ripple-element"),l.style.left=`${a-s}px`,l.style.top=`${c-s}px`,l.style.height=`${s*2}px`,l.style.width=`${s*2}px`,t.color!=null&&(l.style.backgroundColor=t.color),l.style.transitionDuration=`${d}ms`,this._containerElement.appendChild(l);let h=window.getComputedStyle(l),g=h.transitionProperty,A=h.transitionDuration,k=g==="none"||A==="0s"||A==="0s, 0s"||o.width===0&&o.height===0,L=new _n(this,l,t,k);l.style.transform="scale3d(1, 1, 1)",L.state=V.FADING_IN,t.persistent||(this._mostRecentTransientRipple=L);let p=null;return!k&&(d||i.exitDuration)&&this._ngZone.runOutsideAngular(()=>{let _=()=>{p&&(p.fallbackTimer=null),clearTimeout(q),this._finishRippleTransition(L)},N=()=>this._destroyRipple(L),q=setTimeout(N,d+100);l.addEventListener("transitionend",_),l.addEventListener("transitioncancel",N),p={onTransitionEnd:_,onTransitionCancel:N,fallbackTimer:q}}),this._activeRipples.set(L,p),(k||!d)&&this._finishRippleTransition(L),L}fadeOutRipple(r){if(r.state===V.FADING_OUT||r.state===V.HIDDEN)return;let e=r.element,t=C(C({},tt),r.config.animation);e.style.transitionDuration=`${t.exitDuration}ms`,e.style.opacity="0",r.state=V.FADING_OUT,(r._animationForciblyDisabledThroughCss||!t.exitDuration)&&this._finishRippleTransition(r)}fadeOutAll(){this._getActiveRipples().forEach(r=>r.fadeOut())}fadeOutAllNonPersistent(){this._getActiveRipples().forEach(r=>{r.config.persistent||r.fadeOut()})}setupTriggerEvents(r){let e=J(r);!this._platform.isBrowser||!e||e===this._triggerElement||(this._removeTriggerEvents(),this._triggerElement=e,bo.forEach(t=>{n._eventManager.addHandler(this._ngZone,t,e,this)}))}handleEvent(r){r.type==="mousedown"?this._onMousedown(r):r.type==="touchstart"?this._onTouchStart(r):this._onPointerUp(),this._pointerUpEventsRegistered||(this._ngZone.runOutsideAngular(()=>{yo.forEach(e=>{this._triggerElement.addEventListener(e,this,go)})}),this._pointerUpEventsRegistered=!0)}_finishRippleTransition(r){r.state===V.FADING_IN?this._startFadeOutTransition(r):r.state===V.FADING_OUT&&this._destroyRipple(r)}_startFadeOutTransition(r){let e=r===this._mostRecentTransientRipple,{persistent:t}=r.config;r.state=V.VISIBLE,!t&&(!e||!this._isPointerDown)&&r.fadeOut()}_destroyRipple(r){let e=this._activeRipples.get(r)??null;this._activeRipples.delete(r),this._activeRipples.size||(this._containerRect=null),r===this._mostRecentTransientRipple&&(this._mostRecentTransientRipple=null),r.state=V.HIDDEN,e!==null&&(r.element.removeEventListener("transitionend",e.onTransitionEnd),r.element.removeEventListener("transitioncancel",e.onTransitionCancel),e.fallbackTimer!==null&&clearTimeout(e.fallbackTimer)),r.element.remove()}_onMousedown(r){let e=Xe(r),t=this._lastTouchStartEvent&&Date.now()<this._lastTouchStartEvent+ps;!this._target.rippleDisabled&&!e&&!t&&(this._isPointerDown=!0,this.fadeInRipple(r.clientX,r.clientY,this._target.rippleConfig))}_onTouchStart(r){if(!this._target.rippleDisabled&&!Je(r)){this._lastTouchStartEvent=Date.now(),this._isPointerDown=!0;let e=r.changedTouches;if(e)for(let t=0;t<e.length;t++)this.fadeInRipple(e[t].clientX,e[t].clientY,this._target.rippleConfig)}}_onPointerUp(){this._isPointerDown&&(this._isPointerDown=!1,this._getActiveRipples().forEach(r=>{let e=r.state===V.VISIBLE||r.config.terminateOnPointerUp&&r.state===V.FADING_IN;!r.config.persistent&&e&&r.fadeOut()}))}_getActiveRipples(){return Array.from(this._activeRipples.keys())}_removeTriggerEvents(){let r=this._triggerElement;r&&(bo.forEach(e=>n._eventManager.removeHandler(e,r,this)),this._pointerUpEventsRegistered&&(yo.forEach(e=>r.removeEventListener(e,this,go)),this._pointerUpEventsRegistered=!1))}};function bs(n,r,e){let t=Math.max(Math.abs(n-e.left),Math.abs(n-e.right)),o=Math.max(Math.abs(r-e.top),Math.abs(r-e.bottom));return Math.sqrt(t*t+o*o)}var vo=new b("mat-ripple-global-options");var ys={capture:!0},vs=["focus","mousedown","mouseenter","touchstart"],En="mat-ripple-loader-uninitialized",wn="mat-ripple-loader-class-name",_o="mat-ripple-loader-centered",kt="mat-ripple-loader-disabled",Do=(()=>{class n{_document=u(y);_animationsDisabled=Nt();_globalRippleOptions=u(vo,{optional:!0});_platform=u(H);_ngZone=u(M);_injector=u(Y);_eventCleanups;_hosts=new Map;constructor(){let e=u(Ce).createRenderer(null,null);this._eventCleanups=this._ngZone.runOutsideAngular(()=>vs.map(t=>e.listen(this._document,t,this._onInteraction,ys)))}ngOnDestroy(){let e=this._hosts.keys();for(let t of e)this.destroyRipple(t);this._eventCleanups.forEach(t=>t())}configureRipple(e,t){e.setAttribute(En,this._globalRippleOptions?.namespace??""),(t.className||!e.hasAttribute(wn))&&e.setAttribute(wn,t.className||""),t.centered&&e.setAttribute(_o,""),t.disabled&&e.setAttribute(kt,"")}setDisabled(e,t){let o=this._hosts.get(e);o?(o.target.rippleDisabled=t,!t&&!o.hasSetUpEvents&&(o.hasSetUpEvents=!0,o.renderer.setupTriggerEvents(e))):t?e.setAttribute(kt,""):e.removeAttribute(kt)}_onInteraction=e=>{let t=K(e);if(t instanceof HTMLElement){let o=t.closest(`[${En}="${this._globalRippleOptions?.namespace??""}"]`);o&&this._createRipple(o)}};_createRipple(e){if(!this._document||this._hosts.has(e))return;e.querySelector(".mat-ripple")?.remove();let t=this._document.createElement("span");t.classList.add("mat-ripple",e.getAttribute(wn)),e.append(t);let o=this._globalRippleOptions,i=this._animationsDisabled?0:o?.animation?.enterDuration??tt.enterDuration,s=this._animationsDisabled?0:o?.animation?.exitDuration??tt.exitDuration,a={rippleDisabled:this._animationsDisabled||o?.disabled||e.hasAttribute(kt),rippleConfig:{centered:e.hasAttribute(_o),terminateOnPointerUp:o?.terminateOnPointerUp,animation:{enterDuration:i,exitDuration:s}}},c=new Pt(a,this._ngZone,t,this._platform,this._injector),d=!a.rippleDisabled;d&&c.setupTriggerEvents(e),this._hosts.set(e,{target:a,renderer:c,hasSetUpEvents:d}),e.removeAttribute(En)}destroyRipple(e){let t=this._hosts.get(e);t&&(t.renderer._removeTriggerEvents(),this._hosts.delete(e))}static \u0275fac=function(t){return new(t||n)};static \u0275prov=f({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var Eo=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275cmp=j({type:n,selectors:[["structural-styles"]],decls:0,vars:0,template:function(t,o){},styles:[`.mat-focus-indicator {
  position: relative;
}
.mat-focus-indicator::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  box-sizing: border-box;
  pointer-events: none;
  display: var(--mat-focus-indicator-display, none);
  border-width: var(--mat-focus-indicator-border-width, 3px);
  border-style: var(--mat-focus-indicator-border-style, solid);
  border-color: var(--mat-focus-indicator-border-color, transparent);
  border-radius: var(--mat-focus-indicator-border-radius, 4px);
}
.mat-focus-indicator:focus-visible::before {
  content: "";
}

@media (forced-colors: active) {
  html {
    --mat-focus-indicator-display: block;
  }
}
`],encapsulation:2,changeDetection:0})}return n})();var _s=["mat-icon-button",""],Ds=["*"],Es=new b("MAT_BUTTON_CONFIG");function wo(n){return n==null?void 0:rr(n)}var Cn=(()=>{class n{_elementRef=u(U);_ngZone=u(M);_animationsDisabled=Nt();_config=u(Es,{optional:!0});_focusMonitor=u(mn);_cleanupClick;_renderer=u(jt);_rippleLoader=u(Do);_isAnchor;_isFab=!1;color;get disableRipple(){return this._disableRipple}set disableRipple(e){this._disableRipple=e,this._updateRippleDisabled()}_disableRipple=!1;get disabled(){return this._disabled}set disabled(e){this._disabled=e,this._updateRippleDisabled()}_disabled=!1;ariaDisabled;disabledInteractive;tabIndex;set _tabindex(e){this.tabIndex=e}constructor(){u(he).load(Eo);let e=this._elementRef.nativeElement;this._isAnchor=e.tagName==="A",this.disabledInteractive=this._config?.disabledInteractive??!1,this.color=this._config?.color??null,this._rippleLoader?.configureRipple(e,{className:"mat-mdc-button-ripple"})}ngAfterViewInit(){this._focusMonitor.monitor(this._elementRef,!0),this._isAnchor&&this._setupAsAnchor()}ngOnDestroy(){this._cleanupClick?.(),this._focusMonitor.stopMonitoring(this._elementRef),this._rippleLoader?.destroyRipple(this._elementRef.nativeElement)}focus(e="program",t){e?this._focusMonitor.focusVia(this._elementRef.nativeElement,e,t):this._elementRef.nativeElement.focus(t)}_getAriaDisabled(){return this.ariaDisabled!=null?this.ariaDisabled:this._isAnchor?this.disabled||null:this.disabled&&this.disabledInteractive?!0:null}_getDisabledAttribute(){return this.disabledInteractive||!this.disabled?null:!0}_updateRippleDisabled(){this._rippleLoader?.setDisabled(this._elementRef.nativeElement,this.disableRipple||this.disabled)}_getTabIndex(){return this._isAnchor?this.disabled&&!this.disabledInteractive?-1:this.tabIndex:this.tabIndex}_setupAsAnchor(){this._cleanupClick=this._ngZone.runOutsideAngular(()=>this._renderer.listen(this._elementRef.nativeElement,"click",e=>{this.disabled&&(e.preventDefault(),e.stopImmediatePropagation())}))}static \u0275fac=function(t){return new(t||n)};static \u0275dir=ee({type:n,hostAttrs:[1,"mat-mdc-button-base"],hostVars:13,hostBindings:function(t,o){t&2&&(Be("disabled",o._getDisabledAttribute())("aria-disabled",o._getAriaDisabled())("tabindex",o._getTabIndex()),mt(o.color?"mat-"+o.color:""),le("mat-mdc-button-disabled",o.disabled)("mat-mdc-button-disabled-interactive",o.disabledInteractive)("mat-unthemed",!o.color)("_mat-animation-noopable",o._animationsDisabled))},inputs:{color:"color",disableRipple:[2,"disableRipple","disableRipple",X],disabled:[2,"disabled","disabled",X],ariaDisabled:[2,"aria-disabled","ariaDisabled",X],disabledInteractive:[2,"disabledInteractive","disabledInteractive",X],tabIndex:[2,"tabIndex","tabIndex",wo],_tabindex:[2,"tabindex","_tabindex",wo]}})}return n})(),ws=(()=>{class n extends Cn{constructor(){super(),this._rippleLoader.configureRipple(this._elementRef.nativeElement,{centered:!0})}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=j({type:n,selectors:[["button","mat-icon-button",""],["a","mat-icon-button",""],["button","matIconButton",""],["a","matIconButton",""]],hostAttrs:[1,"mdc-icon-button","mat-mdc-icon-button"],exportAs:["matButton","matAnchor"],features:[ft],attrs:_s,ngContentSelectors:Ds,decls:4,vars:0,consts:[[1,"mat-mdc-button-persistent-ripple","mdc-icon-button__ripple"],[1,"mat-focus-indicator"],[1,"mat-mdc-button-touch-target"]],template:function(t,o){t&1&&(Ae(),Te(0,"span",0),se(1),Te(2,"span",1)(3,"span",2))},styles:[`.mat-mdc-icon-button {
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
`],encapsulation:2,changeDetection:0})}return n})();var Co=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=R({type:n});static \u0275inj=x({imports:[Fe]})}return n})();var Cs=["matButton",""],Ts=[[["",8,"material-icons",3,"iconPositionEnd",""],["mat-icon",3,"iconPositionEnd",""],["","matButtonIcon","",3,"iconPositionEnd",""]],"*",[["","iconPositionEnd","",8,"material-icons"],["mat-icon","iconPositionEnd",""],["","matButtonIcon","","iconPositionEnd",""]]],As=[".material-icons:not([iconPositionEnd]), mat-icon:not([iconPositionEnd]), [matButtonIcon]:not([iconPositionEnd])","*",".material-icons[iconPositionEnd], mat-icon[iconPositionEnd], [matButtonIcon][iconPositionEnd]"];var To=new Map([["text",["mat-mdc-button"]],["filled",["mdc-button--unelevated","mat-mdc-unelevated-button"]],["elevated",["mdc-button--raised","mat-mdc-raised-button"]],["outlined",["mdc-button--outlined","mat-mdc-outlined-button"]],["tonal",["mat-tonal-button"]]]),pf=(()=>{class n extends Cn{get appearance(){return this._appearance}set appearance(e){this.setAppearance(e||this._config?.defaultAppearance||"text")}_appearance=null;constructor(){super();let e=Is(this._elementRef.nativeElement);e&&this.setAppearance(e)}setAppearance(e){if(e===this._appearance)return;let t=this._elementRef.nativeElement.classList,o=this._appearance?To.get(this._appearance):null,i=To.get(e);o&&t.remove(...o),t.add(...i),this._appearance=e}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=j({type:n,selectors:[["button","matButton",""],["a","matButton",""],["button","mat-button",""],["button","mat-raised-button",""],["button","mat-flat-button",""],["button","mat-stroked-button",""],["a","mat-button",""],["a","mat-raised-button",""],["a","mat-flat-button",""],["a","mat-stroked-button",""]],hostAttrs:[1,"mdc-button"],inputs:{appearance:[0,"matButton","appearance"]},exportAs:["matButton","matAnchor"],features:[ft],attrs:Cs,ngContentSelectors:As,decls:7,vars:4,consts:[[1,"mat-mdc-button-persistent-ripple"],[1,"mdc-button__label"],[1,"mat-focus-indicator"],[1,"mat-mdc-button-touch-target"]],template:function(t,o){t&1&&(Ae(Ts),Te(0,"span",0),se(1),qn(2,"span",1),se(3,1),Qn(),se(4,2),Te(5,"span",2)(6,"span",3)),t&2&&le("mdc-button__ripple",!o._isFab)("mdc-fab__ripple",o._isFab)},styles:[`.mat-mdc-button-base {
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
`],encapsulation:2,changeDetection:0})}return n})();function Is(n){return n.hasAttribute("mat-raised-button")?"elevated":n.hasAttribute("mat-stroked-button")?"outlined":n.hasAttribute("mat-flat-button")?"filled":n.hasAttribute("mat-button")?"text":null}var gf=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=R({type:n});static \u0275inj=x({imports:[Co,Fe]})}return n})();var Bt=class n{logs=Pe([]);showDialog=Pe(!1);debugLog(r,e){let t={timestamp:new Date,message:r,data:e};this.logs.update(o=>[t,...o]),console.log(`[DEBUG] ${r}`,e)}clearLogs(){this.logs.set([])}toggleDialog(){this.showDialog.update(r=>!r)}closeDialog(){this.showDialog.set(!1)}openDialog(){this.showDialog.set(!0)}static \u0275fac=function(e){return new(e||n)};static \u0275prov=f({token:n,factory:n.\u0275fac,providedIn:"root"})};var Ao=class n{constructor(r){this.logger=r;this.config=this.getConfig(),this.logger.debugLog("Data service initialized",{environment:window.location.href.includes("localhost")?"localhost":"production",siteUrl:this.config.siteUrl,apiPath:this.config.apiPath,listName:this.config.listName}),this.readyPromise=this.loadAllData()}logger;config;requestDigest=null;digestExpirationTime=null;cache={};readyPromise;get ready(){return this.readyPromise}getConfig(){return window.location.href.includes("localhost")?(this.logger.debugLog("Running in localhost development mode"),{siteUrl:"http://localhost:3000",apiPath:"",listName:"ProjectAdmin",documentLibraryName:"ProjectAdminDocuments"}):(this.logger.debugLog("Running in production SharePoint mode"),{siteUrl:"https://collab.napma.nato.int/flep/mstd",apiPath:"/_api/web",listName:"ProjectAdmin",documentLibraryName:"ProjectAdminDocuments"})}buildApiUrl(r){return`${this.config.siteUrl}${this.config.apiPath}${r}`}getHeaders(r){let e={Accept:"application/json;odata=verbose","Content-Type":"application/json;odata=verbose"};return r&&(e["X-RequestDigest"]=r),e}async getRequestDigest(r=!1){let e=Date.now();if(!r&&this.requestDigest&&this.digestExpirationTime&&e<this.digestExpirationTime)return this.logger.debugLog("Using cached request digest"),this.requestDigest;let t=`${this.config.siteUrl}/_api/contextinfo`;this.logger.debugLog("Requesting new digest from:",t);try{let o=await fetch(t,{method:"POST",headers:{Accept:"application/json;odata=verbose","Content-Type":"application/json;odata=verbose"},credentials:"include"});if(!o.ok){let s=await o.text();throw this.logger.debugLog("Failed to get digest",{status:o.status,statusText:o.statusText,responseBody:s}),new Error(`Failed to get request digest: ${o.status} ${o.statusText}`)}let i=await o.json();return this.requestDigest=i.d.GetContextWebInformation.FormDigestValue,this.digestExpirationTime=e+1500*1e3,this.logger.debugLog("Request digest obtained and cached successfully"),this.requestDigest}catch(o){throw this.logger.debugLog("Error getting request digest",o),o}}async executeWithDigestRetry(r,e){try{let t=await this.getRequestDigest();return await r(t)}catch(t){let o=t instanceof Error?t.message:String(t);if(o.includes("401")||o.includes("403")||o.includes("digest")){this.logger.debugLog(`${e} failed with potential digest error, retrying with fresh digest`);let s=await this.getRequestDigest(!0);return await r(s)}throw t}}async queryProjectAdminList(){let r=`/Lists/getbytitle('${this.config.listName}')/Items?$select=Id,Class,Json`,e=this.buildApiUrl(r);this.logger.debugLog(`Fetching all ProjectAdmin data from URL: ${e}`);try{let t=await fetch(e,{method:"GET",headers:this.getHeaders(),credentials:"include"});if(!t.ok){let i=await t.text();throw this.logger.debugLog("HTTP Error Details",{status:t.status,statusText:t.statusText,url:e,responseBody:i}),new Error(`SharePoint query failed: ${t.status} ${t.statusText}`)}let o=await t.json();return this.logger.debugLog("Raw JSON response from ProjectAdmin",o),Array.isArray(o)?o:o.d&&o.d.results?o.d.results:o.d&&Array.isArray(o.d)?o.d:(this.logger.debugLog("Unexpected response format",o),[])}catch(t){throw this.logger.debugLog("Error querying ProjectAdmin list",{error:t,message:t instanceof Error?t.message:String(t),stack:t instanceof Error?t.stack:void 0,url:e}),t}}async loadAllListData(){let r=await this.queryProjectAdminList(),e={};for(let t of r){if(!t.Class){this.logger.debugLog("Skipping ProjectAdmin row with no Class",t);continue}let o;try{o=t.Json?JSON.parse(t.Json):{}}catch(s){this.logger.debugLog(`Failed to parse Json for item ${t.Id} (Class: ${t.Class})`,s);continue}let i=G(C({},o),{Id:t.Id});e[t.Class]||(e[t.Class]=[]),e[t.Class].push(i)}return e}async loadSiteUsersData(){return this.getSiteUsers()}async loadCurrentUserData(){try{let r=await this.getCurrentUser();return[{Id:r.Id,Title:r.Title}]}catch(r){return this.logger.debugLog("Error loading current user - returning empty array",r),[]}}async loadAllData(){let[r,e,t]=await Promise.all([this.loadAllListData(),this.loadSiteUsersData(),this.loadCurrentUserData()]);r.siteUsers=e,r.currentUser=t,this.cache=r,this.logger.debugLog("ProjectAdmin data loaded into cache",this.cache)}async refresh(){await this.loadAllData()}getItems(r){return this.cache[r]||[]}getCurrentUserFromCache(){return this.getItems("currentUser")[0]??null}getAllData(){return this.cache}async addItem(r,e){this.logger.debugLog(`Adding item of Class: ${r}`,e);let t=`/Lists/getbytitle('${this.config.listName}')/Items`,o=this.buildApiUrl(t),i=G(C({},e),{Guid:crypto.randomUUID()}),s=async a=>{let c={__metadata:{type:`SP.Data.${this.config.listName}ListItem`},Class:r,Json:JSON.stringify(i)};this.logger.debugLog("Request payload:",c);let d=await fetch(o,{method:"POST",headers:this.getHeaders(a),credentials:"include",body:JSON.stringify(c)});if(!d.ok){let g=await d.text();throw this.logger.debugLog("HTTP Error Details",{status:d.status,statusText:d.statusText,url:o,responseBody:g}),new Error(`SharePoint add failed: ${d.status} ${d.statusText} - ${g}`)}let l=await d.json();this.logger.debugLog(`Item added successfully (Class: ${r})`,l.d);let h=G(C({},i),{Id:l.d.Id});return this.cache[r]||(this.cache[r]=[]),this.cache[r].push(h),h};return this.executeWithDigestRetry(s,"addItem")}async updateItem(r,e,t){this.logger.debugLog(`Updating item Id ${e} of Class: ${r}`,t);let o=`/Lists/getbytitle('${this.config.listName}')/Items(${e})`,i=this.buildApiUrl(o),s=async a=>{let c={__metadata:{type:`SP.Data.${this.config.listName}ListItem`},Class:r,Json:JSON.stringify(t)},d=await fetch(i,{method:"POST",headers:G(C({},this.getHeaders(a)),{"X-HTTP-Method":"MERGE","IF-MATCH":"*"}),credentials:"include",body:JSON.stringify(c)});if(!d.ok){let A=await d.text();throw this.logger.debugLog("HTTP Error Details",{status:d.status,statusText:d.statusText,url:i,responseBody:A}),new Error(`SharePoint update failed: ${d.status} ${d.statusText} - ${A}`)}this.logger.debugLog(`Item updated successfully (Class: ${r})`,{itemId:e});let l=G(C({},t),{Id:e}),h=this.cache[r]||[],g=h.findIndex(A=>A.Id===e);g>=0?h[g]=l:h.push(l),this.cache[r]=h};return this.executeWithDigestRetry(s,"updateItem")}async uploadDocument(r,e){let o=`${new URL(this.config.siteUrl).pathname.replace(/\/$/,"")}/${this.config.documentLibraryName}`,i=`/GetFolderByServerRelativeUrl('${encodeURIComponent(o)}')/Files/add(url='${encodeURIComponent(r)}',overwrite=true)`,s=this.buildApiUrl(i);this.logger.debugLog(`Uploading document "${r}" to ${this.config.documentLibraryName}`,{url:s});let a=async c=>{let d=await e.arrayBuffer(),l=await fetch(s,{method:"POST",headers:{Accept:"application/json;odata=verbose","X-RequestDigest":c},credentials:"include",body:d});if(!l.ok){let g=await l.text();throw this.logger.debugLog("HTTP Error Details",{status:l.status,statusText:l.statusText,url:s,responseBody:g}),new Error(`SharePoint document upload failed: ${l.status} ${l.statusText} - ${g}`)}let h=await l.json();return this.logger.debugLog(`Document uploaded successfully: ${r}`,h.d),h.d.UniqueId};return this.executeWithDigestRetry(a,"uploadDocument")}async addDocument(r,e,t){let o=t.name.lastIndexOf("."),i=o>=0?t.name.slice(o+1).toLowerCase():"",s=i?`${crypto.randomUUID()}.${i}`:crypto.randomUUID(),a=await this.uploadDocument(s,t),c=Array.isArray(e.Docs)?e.Docs:[],d={FileName:s,OriginalName:t.name,SourceDocId:a},l=[...c,d],A=e,{Id:h}=A,g=Ut(A,["Id"]);return await this.updateItem(r,e.Id,G(C({},g),{Docs:l})),{fileName:s,originalName:t.name,sourceDocId:a}}getDocumentViewUrl(r,e){let t=`{${e.toUpperCase()}}`;return`${this.config.siteUrl}/_layouts/15/WopiFrame.aspx?sourcedoc=${encodeURIComponent(t)}&file=${encodeURIComponent(r)}&action=view`}getDocumentDesktopUrl(r,e){let t=`${this.config.siteUrl}/${this.config.documentLibraryName}/${r}`;return`${e}:ofe|u|${t}`}async deleteItem(r,e){this.logger.debugLog(`Deleting item Id ${e} of Class: ${r}`);let t=`/Lists/getbytitle('${this.config.listName}')/Items(${e})`,o=this.buildApiUrl(t),i=async s=>{let a=await fetch(o,{method:"POST",headers:G(C({},this.getHeaders(s)),{"X-HTTP-Method":"DELETE","IF-MATCH":"*"}),credentials:"include"});if(!a.ok){let c=await a.text();throw this.logger.debugLog("HTTP Error Details",{status:a.status,statusText:a.statusText,url:o,responseBody:c}),new Error(`SharePoint delete failed: ${a.status} ${a.statusText} - ${c}`)}this.logger.debugLog(`Item deleted successfully (Class: ${r})`,{itemId:e}),this.cache[r]&&(this.cache[r]=this.cache[r].filter(c=>c.Id!==e))};return this.executeWithDigestRetry(i,"deleteItem")}async deleteDocument(r){let t=`${new URL(this.config.siteUrl).pathname.replace(/\/$/,"")}/${this.config.documentLibraryName}`,o=`/GetFolderByServerRelativeUrl('${encodeURIComponent(t)}')/Files('${encodeURIComponent(r)}')`,i=this.buildApiUrl(o);this.logger.debugLog(`Deleting document "${r}" from ${this.config.documentLibraryName}`,{url:i});let s=async a=>{let c=await fetch(i,{method:"POST",headers:G(C({},this.getHeaders(a)),{"X-HTTP-Method":"DELETE","IF-MATCH":"*"}),credentials:"include"});if(!c.ok){let d=await c.text();throw this.logger.debugLog("HTTP Error Details",{status:c.status,statusText:c.statusText,url:i,responseBody:d}),new Error(`SharePoint document delete failed: ${c.status} ${c.statusText} - ${d}`)}this.logger.debugLog(`Document deleted successfully: ${r}`)};return this.executeWithDigestRetry(s,"deleteDocument")}async getCurrentUser(){this.logger.debugLog("Loading current user");let r=this.buildApiUrl("/currentuser");this.logger.debugLog(`Fetching current user from URL: ${r}`);try{let e=await fetch(r,{method:"GET",headers:this.getHeaders(),credentials:"include"});if(!e.ok)throw new Error(`Failed to load user: ${e.status}`);return(await e.json()).d}catch(e){throw this.logger.debugLog("Error loading user",e),e}}async getSiteUsers(){this.logger.debugLog("Loading site users");let r=this.buildApiUrl("/siteusers");this.logger.debugLog(`Fetching site users from URL: ${r}`);try{let e=await fetch(r,{method:"GET",headers:this.getHeaders(),credentials:"include"});if(!e.ok)return this.logger.debugLog(`Failed to load site users: ${e.status} - returning empty array`),[];let t=await e.json();return this.logger.debugLog("Raw JSON response from siteusers",t),t.d.results||[]}catch(e){return this.logger.debugLog("Error loading site users - returning empty array",e),[]}}static \u0275fac=function(e){return new(e||n)(m(Bt))};static \u0275prov=f({token:n,factory:n.\u0275fac,providedIn:"root"})};export{pt as a,dr as b,Yo as c,Xo as d,fi as e,bu as f,he as g,Lu as h,Fe as i,Ku as j,Yu as k,Ji as l,K as m,H as n,ln as o,J as p,mn as q,hn as r,$d as s,co as t,ts as u,el as v,tl as w,rl as x,vn as y,et as z,ml as A,hl as B,gl as C,Nt as D,Il as E,Ml as F,Pt as G,vo as H,Eo as I,ws as J,Co as K,pf as L,gf as M,Bt as N,Ao as O};
