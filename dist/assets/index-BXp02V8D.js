(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const c of a)if(c.type==="childList")for(const u of c.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function n(a){const c={};return a.integrity&&(c.integrity=a.integrity),a.referrerPolicy&&(c.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?c.credentials="include":a.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(a){if(a.ep)return;a.ep=!0;const c=n(a);fetch(a.href,c)}})();function s_(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var Mu={exports:{}},Ro={},Eu={exports:{}},pt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Pp;function o_(){if(Pp)return pt;Pp=1;var s=Symbol.for("react.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),c=Symbol.for("react.provider"),u=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),x=Symbol.iterator;function y(F){return F===null||typeof F!="object"?null:(F=x&&F[x]||F["@@iterator"],typeof F=="function"?F:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E=Object.assign,T={};function g(F,ie,De){this.props=F,this.context=ie,this.refs=T,this.updater=De||S}g.prototype.isReactComponent={},g.prototype.setState=function(F,ie){if(typeof F!="object"&&typeof F!="function"&&F!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,F,ie,"setState")},g.prototype.forceUpdate=function(F){this.updater.enqueueForceUpdate(this,F,"forceUpdate")};function v(){}v.prototype=g.prototype;function D(F,ie,De){this.props=F,this.context=ie,this.refs=T,this.updater=De||S}var N=D.prototype=new v;N.constructor=D,E(N,g.prototype),N.isPureReactComponent=!0;var A=Array.isArray,j=Object.prototype.hasOwnProperty,k={current:null},U={key:!0,ref:!0,__self:!0,__source:!0};function B(F,ie,De){var Z,ue={},Se=null,ve=null;if(ie!=null)for(Z in ie.ref!==void 0&&(ve=ie.ref),ie.key!==void 0&&(Se=""+ie.key),ie)j.call(ie,Z)&&!U.hasOwnProperty(Z)&&(ue[Z]=ie[Z]);var Ae=arguments.length-2;if(Ae===1)ue.children=De;else if(1<Ae){for(var Le=Array(Ae),Ke=0;Ke<Ae;Ke++)Le[Ke]=arguments[Ke+2];ue.children=Le}if(F&&F.defaultProps)for(Z in Ae=F.defaultProps,Ae)ue[Z]===void 0&&(ue[Z]=Ae[Z]);return{$$typeof:s,type:F,key:Se,ref:ve,props:ue,_owner:k.current}}function P(F,ie){return{$$typeof:s,type:F.type,key:ie,ref:F.ref,props:F.props,_owner:F._owner}}function C(F){return typeof F=="object"&&F!==null&&F.$$typeof===s}function z(F){var ie={"=":"=0",":":"=2"};return"$"+F.replace(/[=:]/g,function(De){return ie[De]})}var oe=/\/+/g;function J(F,ie){return typeof F=="object"&&F!==null&&F.key!=null?z(""+F.key):ie.toString(36)}function de(F,ie,De,Z,ue){var Se=typeof F;(Se==="undefined"||Se==="boolean")&&(F=null);var ve=!1;if(F===null)ve=!0;else switch(Se){case"string":case"number":ve=!0;break;case"object":switch(F.$$typeof){case s:case e:ve=!0}}if(ve)return ve=F,ue=ue(ve),F=Z===""?"."+J(ve,0):Z,A(ue)?(De="",F!=null&&(De=F.replace(oe,"$&/")+"/"),de(ue,ie,De,"",function(Ke){return Ke})):ue!=null&&(C(ue)&&(ue=P(ue,De+(!ue.key||ve&&ve.key===ue.key?"":(""+ue.key).replace(oe,"$&/")+"/")+F)),ie.push(ue)),1;if(ve=0,Z=Z===""?".":Z+":",A(F))for(var Ae=0;Ae<F.length;Ae++){Se=F[Ae];var Le=Z+J(Se,Ae);ve+=de(Se,ie,De,Le,ue)}else if(Le=y(F),typeof Le=="function")for(F=Le.call(F),Ae=0;!(Se=F.next()).done;)Se=Se.value,Le=Z+J(Se,Ae++),ve+=de(Se,ie,De,Le,ue);else if(Se==="object")throw ie=String(F),Error("Objects are not valid as a React child (found: "+(ie==="[object Object]"?"object with keys {"+Object.keys(F).join(", ")+"}":ie)+"). If you meant to render a collection of children, use an array instead.");return ve}function he(F,ie,De){if(F==null)return F;var Z=[],ue=0;return de(F,Z,"","",function(Se){return ie.call(De,Se,ue++)}),Z}function ae(F){if(F._status===-1){var ie=F._result;ie=ie(),ie.then(function(De){(F._status===0||F._status===-1)&&(F._status=1,F._result=De)},function(De){(F._status===0||F._status===-1)&&(F._status=2,F._result=De)}),F._status===-1&&(F._status=0,F._result=ie)}if(F._status===1)return F._result.default;throw F._result}var ce={current:null},H={transition:null},le={ReactCurrentDispatcher:ce,ReactCurrentBatchConfig:H,ReactCurrentOwner:k};function re(){throw Error("act(...) is not supported in production builds of React.")}return pt.Children={map:he,forEach:function(F,ie,De){he(F,function(){ie.apply(this,arguments)},De)},count:function(F){var ie=0;return he(F,function(){ie++}),ie},toArray:function(F){return he(F,function(ie){return ie})||[]},only:function(F){if(!C(F))throw Error("React.Children.only expected to receive a single React element child.");return F}},pt.Component=g,pt.Fragment=n,pt.Profiler=a,pt.PureComponent=D,pt.StrictMode=r,pt.Suspense=p,pt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=le,pt.act=re,pt.cloneElement=function(F,ie,De){if(F==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+F+".");var Z=E({},F.props),ue=F.key,Se=F.ref,ve=F._owner;if(ie!=null){if(ie.ref!==void 0&&(Se=ie.ref,ve=k.current),ie.key!==void 0&&(ue=""+ie.key),F.type&&F.type.defaultProps)var Ae=F.type.defaultProps;for(Le in ie)j.call(ie,Le)&&!U.hasOwnProperty(Le)&&(Z[Le]=ie[Le]===void 0&&Ae!==void 0?Ae[Le]:ie[Le])}var Le=arguments.length-2;if(Le===1)Z.children=De;else if(1<Le){Ae=Array(Le);for(var Ke=0;Ke<Le;Ke++)Ae[Ke]=arguments[Ke+2];Z.children=Ae}return{$$typeof:s,type:F.type,key:ue,ref:Se,props:Z,_owner:ve}},pt.createContext=function(F){return F={$$typeof:u,_currentValue:F,_currentValue2:F,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},F.Provider={$$typeof:c,_context:F},F.Consumer=F},pt.createElement=B,pt.createFactory=function(F){var ie=B.bind(null,F);return ie.type=F,ie},pt.createRef=function(){return{current:null}},pt.forwardRef=function(F){return{$$typeof:f,render:F}},pt.isValidElement=C,pt.lazy=function(F){return{$$typeof:_,_payload:{_status:-1,_result:F},_init:ae}},pt.memo=function(F,ie){return{$$typeof:m,type:F,compare:ie===void 0?null:ie}},pt.startTransition=function(F){var ie=H.transition;H.transition={};try{F()}finally{H.transition=ie}},pt.unstable_act=re,pt.useCallback=function(F,ie){return ce.current.useCallback(F,ie)},pt.useContext=function(F){return ce.current.useContext(F)},pt.useDebugValue=function(){},pt.useDeferredValue=function(F){return ce.current.useDeferredValue(F)},pt.useEffect=function(F,ie){return ce.current.useEffect(F,ie)},pt.useId=function(){return ce.current.useId()},pt.useImperativeHandle=function(F,ie,De){return ce.current.useImperativeHandle(F,ie,De)},pt.useInsertionEffect=function(F,ie){return ce.current.useInsertionEffect(F,ie)},pt.useLayoutEffect=function(F,ie){return ce.current.useLayoutEffect(F,ie)},pt.useMemo=function(F,ie){return ce.current.useMemo(F,ie)},pt.useReducer=function(F,ie,De){return ce.current.useReducer(F,ie,De)},pt.useRef=function(F){return ce.current.useRef(F)},pt.useState=function(F){return ce.current.useState(F)},pt.useSyncExternalStore=function(F,ie,De){return ce.current.useSyncExternalStore(F,ie,De)},pt.useTransition=function(){return ce.current.useTransition()},pt.version="18.3.1",pt}var Dp;function qd(){return Dp||(Dp=1,Eu.exports=o_()),Eu.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Np;function a_(){if(Np)return Ro;Np=1;var s=qd(),e=Symbol.for("react.element"),n=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,a=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function u(f,p,m){var _,x={},y=null,S=null;m!==void 0&&(y=""+m),p.key!==void 0&&(y=""+p.key),p.ref!==void 0&&(S=p.ref);for(_ in p)r.call(p,_)&&!c.hasOwnProperty(_)&&(x[_]=p[_]);if(f&&f.defaultProps)for(_ in p=f.defaultProps,p)x[_]===void 0&&(x[_]=p[_]);return{$$typeof:e,type:f,key:y,ref:S,props:x,_owner:a.current}}return Ro.Fragment=n,Ro.jsx=u,Ro.jsxs=u,Ro}var Lp;function l_(){return Lp||(Lp=1,Mu.exports=a_()),Mu.exports}var R=l_(),Ct=qd();const c_=s_(Ct);var Ka={},Tu={exports:{}},Rn={},wu={exports:{}},Au={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ip;function u_(){return Ip||(Ip=1,(function(s){function e(H,le){var re=H.length;H.push(le);e:for(;0<re;){var F=re-1>>>1,ie=H[F];if(0<a(ie,le))H[F]=le,H[re]=ie,re=F;else break e}}function n(H){return H.length===0?null:H[0]}function r(H){if(H.length===0)return null;var le=H[0],re=H.pop();if(re!==le){H[0]=re;e:for(var F=0,ie=H.length,De=ie>>>1;F<De;){var Z=2*(F+1)-1,ue=H[Z],Se=Z+1,ve=H[Se];if(0>a(ue,re))Se<ie&&0>a(ve,ue)?(H[F]=ve,H[Se]=re,F=Se):(H[F]=ue,H[Z]=re,F=Z);else if(Se<ie&&0>a(ve,re))H[F]=ve,H[Se]=re,F=Se;else break e}}return le}function a(H,le){var re=H.sortIndex-le.sortIndex;return re!==0?re:H.id-le.id}if(typeof performance=="object"&&typeof performance.now=="function"){var c=performance;s.unstable_now=function(){return c.now()}}else{var u=Date,f=u.now();s.unstable_now=function(){return u.now()-f}}var p=[],m=[],_=1,x=null,y=3,S=!1,E=!1,T=!1,g=typeof setTimeout=="function"?setTimeout:null,v=typeof clearTimeout=="function"?clearTimeout:null,D=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function N(H){for(var le=n(m);le!==null;){if(le.callback===null)r(m);else if(le.startTime<=H)r(m),le.sortIndex=le.expirationTime,e(p,le);else break;le=n(m)}}function A(H){if(T=!1,N(H),!E)if(n(p)!==null)E=!0,ae(j);else{var le=n(m);le!==null&&ce(A,le.startTime-H)}}function j(H,le){E=!1,T&&(T=!1,v(B),B=-1),S=!0;var re=y;try{for(N(le),x=n(p);x!==null&&(!(x.expirationTime>le)||H&&!z());){var F=x.callback;if(typeof F=="function"){x.callback=null,y=x.priorityLevel;var ie=F(x.expirationTime<=le);le=s.unstable_now(),typeof ie=="function"?x.callback=ie:x===n(p)&&r(p),N(le)}else r(p);x=n(p)}if(x!==null)var De=!0;else{var Z=n(m);Z!==null&&ce(A,Z.startTime-le),De=!1}return De}finally{x=null,y=re,S=!1}}var k=!1,U=null,B=-1,P=5,C=-1;function z(){return!(s.unstable_now()-C<P)}function oe(){if(U!==null){var H=s.unstable_now();C=H;var le=!0;try{le=U(!0,H)}finally{le?J():(k=!1,U=null)}}else k=!1}var J;if(typeof D=="function")J=function(){D(oe)};else if(typeof MessageChannel<"u"){var de=new MessageChannel,he=de.port2;de.port1.onmessage=oe,J=function(){he.postMessage(null)}}else J=function(){g(oe,0)};function ae(H){U=H,k||(k=!0,J())}function ce(H,le){B=g(function(){H(s.unstable_now())},le)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(H){H.callback=null},s.unstable_continueExecution=function(){E||S||(E=!0,ae(j))},s.unstable_forceFrameRate=function(H){0>H||125<H?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):P=0<H?Math.floor(1e3/H):5},s.unstable_getCurrentPriorityLevel=function(){return y},s.unstable_getFirstCallbackNode=function(){return n(p)},s.unstable_next=function(H){switch(y){case 1:case 2:case 3:var le=3;break;default:le=y}var re=y;y=le;try{return H()}finally{y=re}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(H,le){switch(H){case 1:case 2:case 3:case 4:case 5:break;default:H=3}var re=y;y=H;try{return le()}finally{y=re}},s.unstable_scheduleCallback=function(H,le,re){var F=s.unstable_now();switch(typeof re=="object"&&re!==null?(re=re.delay,re=typeof re=="number"&&0<re?F+re:F):re=F,H){case 1:var ie=-1;break;case 2:ie=250;break;case 5:ie=1073741823;break;case 4:ie=1e4;break;default:ie=5e3}return ie=re+ie,H={id:_++,callback:le,priorityLevel:H,startTime:re,expirationTime:ie,sortIndex:-1},re>F?(H.sortIndex=re,e(m,H),n(p)===null&&H===n(m)&&(T?(v(B),B=-1):T=!0,ce(A,re-F))):(H.sortIndex=ie,e(p,H),E||S||(E=!0,ae(j))),H},s.unstable_shouldYield=z,s.unstable_wrapCallback=function(H){var le=y;return function(){var re=y;y=le;try{return H.apply(this,arguments)}finally{y=re}}}})(Au)),Au}var Up;function d_(){return Up||(Up=1,wu.exports=u_()),wu.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var kp;function f_(){if(kp)return Rn;kp=1;var s=qd(),e=d_();function n(t){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+t,o=1;o<arguments.length;o++)i+="&args[]="+encodeURIComponent(arguments[o]);return"Minified React error #"+t+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,a={};function c(t,i){u(t,i),u(t+"Capture",i)}function u(t,i){for(a[t]=i,t=0;t<i.length;t++)r.add(i[t])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),p=Object.prototype.hasOwnProperty,m=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,_={},x={};function y(t){return p.call(x,t)?!0:p.call(_,t)?!1:m.test(t)?x[t]=!0:(_[t]=!0,!1)}function S(t,i,o,l){if(o!==null&&o.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return l?!1:o!==null?!o.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function E(t,i,o,l){if(i===null||typeof i>"u"||S(t,i,o,l))return!0;if(l)return!1;if(o!==null)switch(o.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function T(t,i,o,l,d,h,M){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=l,this.attributeNamespace=d,this.mustUseProperty=o,this.propertyName=t,this.type=i,this.sanitizeURL=h,this.removeEmptyString=M}var g={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){g[t]=new T(t,0,!1,t,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var i=t[0];g[i]=new T(i,1,!1,t[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(t){g[t]=new T(t,2,!1,t.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){g[t]=new T(t,2,!1,t,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){g[t]=new T(t,3,!1,t.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(t){g[t]=new T(t,3,!0,t,null,!1,!1)}),["capture","download"].forEach(function(t){g[t]=new T(t,4,!1,t,null,!1,!1)}),["cols","rows","size","span"].forEach(function(t){g[t]=new T(t,6,!1,t,null,!1,!1)}),["rowSpan","start"].forEach(function(t){g[t]=new T(t,5,!1,t.toLowerCase(),null,!1,!1)});var v=/[\-:]([a-z])/g;function D(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var i=t.replace(v,D);g[i]=new T(i,1,!1,t,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var i=t.replace(v,D);g[i]=new T(i,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(t){var i=t.replace(v,D);g[i]=new T(i,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(t){g[t]=new T(t,1,!1,t.toLowerCase(),null,!1,!1)}),g.xlinkHref=new T("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(t){g[t]=new T(t,1,!1,t.toLowerCase(),null,!0,!0)});function N(t,i,o,l){var d=g.hasOwnProperty(i)?g[i]:null;(d!==null?d.type!==0:l||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(E(i,o,d,l)&&(o=null),l||d===null?y(i)&&(o===null?t.removeAttribute(i):t.setAttribute(i,""+o)):d.mustUseProperty?t[d.propertyName]=o===null?d.type===3?!1:"":o:(i=d.attributeName,l=d.attributeNamespace,o===null?t.removeAttribute(i):(d=d.type,o=d===3||d===4&&o===!0?"":""+o,l?t.setAttributeNS(l,i,o):t.setAttribute(i,o))))}var A=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,j=Symbol.for("react.element"),k=Symbol.for("react.portal"),U=Symbol.for("react.fragment"),B=Symbol.for("react.strict_mode"),P=Symbol.for("react.profiler"),C=Symbol.for("react.provider"),z=Symbol.for("react.context"),oe=Symbol.for("react.forward_ref"),J=Symbol.for("react.suspense"),de=Symbol.for("react.suspense_list"),he=Symbol.for("react.memo"),ae=Symbol.for("react.lazy"),ce=Symbol.for("react.offscreen"),H=Symbol.iterator;function le(t){return t===null||typeof t!="object"?null:(t=H&&t[H]||t["@@iterator"],typeof t=="function"?t:null)}var re=Object.assign,F;function ie(t){if(F===void 0)try{throw Error()}catch(o){var i=o.stack.trim().match(/\n( *(at )?)/);F=i&&i[1]||""}return`
`+F+t}var De=!1;function Z(t,i){if(!t||De)return"";De=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(ee){var l=ee}Reflect.construct(t,[],i)}else{try{i.call()}catch(ee){l=ee}t.call(i.prototype)}else{try{throw Error()}catch(ee){l=ee}t()}}catch(ee){if(ee&&l&&typeof ee.stack=="string"){for(var d=ee.stack.split(`
`),h=l.stack.split(`
`),M=d.length-1,I=h.length-1;1<=M&&0<=I&&d[M]!==h[I];)I--;for(;1<=M&&0<=I;M--,I--)if(d[M]!==h[I]){if(M!==1||I!==1)do if(M--,I--,0>I||d[M]!==h[I]){var O=`
`+d[M].replace(" at new "," at ");return t.displayName&&O.includes("<anonymous>")&&(O=O.replace("<anonymous>",t.displayName)),O}while(1<=M&&0<=I);break}}}finally{De=!1,Error.prepareStackTrace=o}return(t=t?t.displayName||t.name:"")?ie(t):""}function ue(t){switch(t.tag){case 5:return ie(t.type);case 16:return ie("Lazy");case 13:return ie("Suspense");case 19:return ie("SuspenseList");case 0:case 2:case 15:return t=Z(t.type,!1),t;case 11:return t=Z(t.type.render,!1),t;case 1:return t=Z(t.type,!0),t;default:return""}}function Se(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case U:return"Fragment";case k:return"Portal";case P:return"Profiler";case B:return"StrictMode";case J:return"Suspense";case de:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case z:return(t.displayName||"Context")+".Consumer";case C:return(t._context.displayName||"Context")+".Provider";case oe:var i=t.render;return t=t.displayName,t||(t=i.displayName||i.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case he:return i=t.displayName||null,i!==null?i:Se(t.type)||"Memo";case ae:i=t._payload,t=t._init;try{return Se(t(i))}catch{}}return null}function ve(t){var i=t.type;switch(t.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=i.render,t=t.displayName||t.name||"",i.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Se(i);case 8:return i===B?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function Ae(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Le(t){var i=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Ke(t){var i=Le(t)?"checked":"value",o=Object.getOwnPropertyDescriptor(t.constructor.prototype,i),l=""+t[i];if(!t.hasOwnProperty(i)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var d=o.get,h=o.set;return Object.defineProperty(t,i,{configurable:!0,get:function(){return d.call(this)},set:function(M){l=""+M,h.call(this,M)}}),Object.defineProperty(t,i,{enumerable:o.enumerable}),{getValue:function(){return l},setValue:function(M){l=""+M},stopTracking:function(){t._valueTracker=null,delete t[i]}}}}function wt(t){t._valueTracker||(t._valueTracker=Ke(t))}function dt(t){if(!t)return!1;var i=t._valueTracker;if(!i)return!0;var o=i.getValue(),l="";return t&&(l=Le(t)?t.checked?"true":"false":t.value),t=l,t!==o?(i.setValue(t),!0):!1}function qe(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function V(t,i){var o=i.checked;return re({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:o??t._wrapperState.initialChecked})}function Bt(t,i){var o=i.defaultValue==null?"":i.defaultValue,l=i.checked!=null?i.checked:i.defaultChecked;o=Ae(i.value!=null?i.value:o),t._wrapperState={initialChecked:l,initialValue:o,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function rt(t,i){i=i.checked,i!=null&&N(t,"checked",i,!1)}function at(t,i){rt(t,i);var o=Ae(i.value),l=i.type;if(o!=null)l==="number"?(o===0&&t.value===""||t.value!=o)&&(t.value=""+o):t.value!==""+o&&(t.value=""+o);else if(l==="submit"||l==="reset"){t.removeAttribute("value");return}i.hasOwnProperty("value")?Et(t,i.type,o):i.hasOwnProperty("defaultValue")&&Et(t,i.type,Ae(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(t.defaultChecked=!!i.defaultChecked)}function $e(t,i,o){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var l=i.type;if(!(l!=="submit"&&l!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+t._wrapperState.initialValue,o||i===t.value||(t.value=i),t.defaultValue=i}o=t.name,o!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,o!==""&&(t.name=o)}function Et(t,i,o){(i!=="number"||qe(t.ownerDocument)!==t)&&(o==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+o&&(t.defaultValue=""+o))}var ze=Array.isArray;function L(t,i,o,l){if(t=t.options,i){i={};for(var d=0;d<o.length;d++)i["$"+o[d]]=!0;for(o=0;o<t.length;o++)d=i.hasOwnProperty("$"+t[o].value),t[o].selected!==d&&(t[o].selected=d),d&&l&&(t[o].defaultSelected=!0)}else{for(o=""+Ae(o),i=null,d=0;d<t.length;d++){if(t[d].value===o){t[d].selected=!0,l&&(t[d].defaultSelected=!0);return}i!==null||t[d].disabled||(i=t[d])}i!==null&&(i.selected=!0)}}function w(t,i){if(i.dangerouslySetInnerHTML!=null)throw Error(n(91));return re({},i,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Q(t,i){var o=i.value;if(o==null){if(o=i.children,i=i.defaultValue,o!=null){if(i!=null)throw Error(n(92));if(ze(o)){if(1<o.length)throw Error(n(93));o=o[0]}i=o}i==null&&(i=""),o=i}t._wrapperState={initialValue:Ae(o)}}function me(t,i){var o=Ae(i.value),l=Ae(i.defaultValue);o!=null&&(o=""+o,o!==t.value&&(t.value=o),i.defaultValue==null&&t.defaultValue!==o&&(t.defaultValue=o)),l!=null&&(t.defaultValue=""+l)}function _e(t){var i=t.textContent;i===t._wrapperState.initialValue&&i!==""&&i!==null&&(t.value=i)}function fe(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ge(t,i){return t==null||t==="http://www.w3.org/1999/xhtml"?fe(i):t==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Ce,Ue=(function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,o,l,d){MSApp.execUnsafeLocalFunction(function(){return t(i,o,l,d)})}:t})(function(t,i){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=i;else{for(Ce=Ce||document.createElement("div"),Ce.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=Ce.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;i.firstChild;)t.appendChild(i.firstChild)}});function ft(t,i){if(i){var o=t.firstChild;if(o&&o===t.lastChild&&o.nodeType===3){o.nodeValue=i;return}}t.textContent=i}var Me={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Fe=["Webkit","ms","Moz","O"];Object.keys(Me).forEach(function(t){Fe.forEach(function(i){i=i+t.charAt(0).toUpperCase()+t.substring(1),Me[i]=Me[t]})});function Je(t,i,o){return i==null||typeof i=="boolean"||i===""?"":o||typeof i!="number"||i===0||Me.hasOwnProperty(t)&&Me[t]?(""+i).trim():i+"px"}function et(t,i){t=t.style;for(var o in i)if(i.hasOwnProperty(o)){var l=o.indexOf("--")===0,d=Je(o,i[o],l);o==="float"&&(o="cssFloat"),l?t.setProperty(o,d):t[o]=d}}var Oe=re({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ht(t,i){if(i){if(Oe[t]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(n(137,t));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(n(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(n(61))}if(i.style!=null&&typeof i.style!="object")throw Error(n(62))}}function st(t,i){if(t.indexOf("-")===-1)return typeof i.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var At=null;function W(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var be=null,se=null,pe=null;function Ne(t){if(t=po(t)){if(typeof be!="function")throw Error(n(280));var i=t.stateNode;i&&(i=da(i),be(t.stateNode,t.type,i))}}function Pe(t){se?pe?pe.push(t):pe=[t]:se=t}function ot(){if(se){var t=se,i=pe;if(pe=se=null,Ne(t),i)for(t=0;t<i.length;t++)Ne(i[t])}}function It(t,i){return t(i)}function qt(){}var _t=!1;function Mn(t,i,o){if(_t)return t(i,o);_t=!0;try{return It(t,i,o)}finally{_t=!1,(se!==null||pe!==null)&&(qt(),ot())}}function mn(t,i){var o=t.stateNode;if(o===null)return null;var l=da(o);if(l===null)return null;o=l[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(t=t.type,l=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!l;break e;default:t=!1}if(t)return null;if(o&&typeof o!="function")throw Error(n(231,i,typeof o));return o}var Qr=!1;if(f)try{var ji={};Object.defineProperty(ji,"passive",{get:function(){Qr=!0}}),window.addEventListener("test",ji,ji),window.removeEventListener("test",ji,ji)}catch{Qr=!1}function Mi(t,i,o,l,d,h,M,I,O){var ee=Array.prototype.slice.call(arguments,3);try{i.apply(o,ee)}catch(xe){this.onError(xe)}}var Ei=!1,Er=null,Tr=!1,Xi=null,jo={onError:function(t){Ei=!0,Er=t}};function Jr(t,i,o,l,d,h,M,I,O){Ei=!1,Er=null,Mi.apply(jo,arguments)}function Xo(t,i,o,l,d,h,M,I,O){if(Jr.apply(this,arguments),Ei){if(Ei){var ee=Er;Ei=!1,Er=null}else throw Error(n(198));Tr||(Tr=!0,Xi=ee)}}function pi(t){var i=t,o=t;if(t.alternate)for(;i.return;)i=i.return;else{t=i;do i=t,(i.flags&4098)!==0&&(o=i.return),t=i.return;while(t)}return i.tag===3?o:null}function Yo(t){if(t.tag===13){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function qo(t){if(pi(t)!==t)throw Error(n(188))}function Wl(t){var i=t.alternate;if(!i){if(i=pi(t),i===null)throw Error(n(188));return i!==t?null:t}for(var o=t,l=i;;){var d=o.return;if(d===null)break;var h=d.alternate;if(h===null){if(l=d.return,l!==null){o=l;continue}break}if(d.child===h.child){for(h=d.child;h;){if(h===o)return qo(d),t;if(h===l)return qo(d),i;h=h.sibling}throw Error(n(188))}if(o.return!==l.return)o=d,l=h;else{for(var M=!1,I=d.child;I;){if(I===o){M=!0,o=d,l=h;break}if(I===l){M=!0,l=d,o=h;break}I=I.sibling}if(!M){for(I=h.child;I;){if(I===o){M=!0,o=h,l=d;break}if(I===l){M=!0,l=h,o=d;break}I=I.sibling}if(!M)throw Error(n(189))}}if(o.alternate!==l)throw Error(n(190))}if(o.tag!==3)throw Error(n(188));return o.stateNode.current===o?t:i}function b(t){return t=Wl(t),t!==null?X(t):null}function X(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var i=X(t);if(i!==null)return i;t=t.sibling}return null}var te=e.unstable_scheduleCallback,ne=e.unstable_cancelCallback,Y=e.unstable_shouldYield,we=e.unstable_requestPaint,Ee=e.unstable_now,We=e.unstable_getCurrentPriorityLevel,He=e.unstable_ImmediatePriority,tt=e.unstable_UserBlockingPriority,it=e.unstable_NormalPriority,je=e.unstable_LowPriority,gt=e.unstable_IdlePriority,Tt=null,mt=null;function an(t){if(mt&&typeof mt.onCommitFiberRoot=="function")try{mt.onCommitFiberRoot(Tt,t,void 0,(t.current.flags&128)===128)}catch{}}var lt=Math.clz32?Math.clz32:St,Ye=Math.log,ei=Math.LN2;function St(t){return t>>>=0,t===0?32:31-(Ye(t)/ei|0)|0}var ln=64,ti=4194304;function $t(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function mi(t,i){var o=t.pendingLanes;if(o===0)return 0;var l=0,d=t.suspendedLanes,h=t.pingedLanes,M=o&268435455;if(M!==0){var I=M&~d;I!==0?l=$t(I):(h&=M,h!==0&&(l=$t(h)))}else M=o&~d,M!==0?l=$t(M):h!==0&&(l=$t(h));if(l===0)return 0;if(i!==0&&i!==l&&(i&d)===0&&(d=l&-l,h=i&-i,d>=h||d===16&&(h&4194240)!==0))return i;if((l&4)!==0&&(l|=o&16),i=t.entangledLanes,i!==0)for(t=t.entanglements,i&=l;0<i;)o=31-lt(i),d=1<<o,l|=t[o],i&=~d;return l}function Nt(t,i){switch(t){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Hn(t,i){for(var o=t.suspendedLanes,l=t.pingedLanes,d=t.expirationTimes,h=t.pendingLanes;0<h;){var M=31-lt(h),I=1<<M,O=d[M];O===-1?((I&o)===0||(I&l)!==0)&&(d[M]=Nt(I,i)):O<=i&&(t.expiredLanes|=I),h&=~I}}function Ti(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function gn(){var t=ln;return ln<<=1,(ln&4194240)===0&&(ln=64),t}function Vn(t){for(var i=[],o=0;31>o;o++)i.push(t);return i}function En(t,i,o){t.pendingLanes|=i,i!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,i=31-lt(i),t[i]=o}function $o(t,i){var o=t.pendingLanes&~i;t.pendingLanes=i,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=i,t.mutableReadLanes&=i,t.entangledLanes&=i,i=t.entanglements;var l=t.eventTimes;for(t=t.expirationTimes;0<o;){var d=31-lt(o),h=1<<d;i[d]=0,l[d]=-1,t[d]=-1,o&=~h}}function jl(t,i){var o=t.entangledLanes|=i;for(t=t.entanglements;o;){var l=31-lt(o),d=1<<l;d&i|t[l]&i&&(t[l]|=i),o&=~d}}var Pt=0;function lf(t){return t&=-t,1<t?4<t?(t&268435455)!==0?16:536870912:4:1}var cf,Xl,uf,df,ff,Yl=!1,Ko=[],Yi=null,qi=null,$i=null,Zs=new Map,Qs=new Map,Ki=[],Cg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function hf(t,i){switch(t){case"focusin":case"focusout":Yi=null;break;case"dragenter":case"dragleave":qi=null;break;case"mouseover":case"mouseout":$i=null;break;case"pointerover":case"pointerout":Zs.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":Qs.delete(i.pointerId)}}function Js(t,i,o,l,d,h){return t===null||t.nativeEvent!==h?(t={blockedOn:i,domEventName:o,eventSystemFlags:l,nativeEvent:h,targetContainers:[d]},i!==null&&(i=po(i),i!==null&&Xl(i)),t):(t.eventSystemFlags|=l,i=t.targetContainers,d!==null&&i.indexOf(d)===-1&&i.push(d),t)}function bg(t,i,o,l,d){switch(i){case"focusin":return Yi=Js(Yi,t,i,o,l,d),!0;case"dragenter":return qi=Js(qi,t,i,o,l,d),!0;case"mouseover":return $i=Js($i,t,i,o,l,d),!0;case"pointerover":var h=d.pointerId;return Zs.set(h,Js(Zs.get(h)||null,t,i,o,l,d)),!0;case"gotpointercapture":return h=d.pointerId,Qs.set(h,Js(Qs.get(h)||null,t,i,o,l,d)),!0}return!1}function pf(t){var i=wr(t.target);if(i!==null){var o=pi(i);if(o!==null){if(i=o.tag,i===13){if(i=Yo(o),i!==null){t.blockedOn=i,ff(t.priority,function(){uf(o)});return}}else if(i===3&&o.stateNode.current.memoizedState.isDehydrated){t.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Zo(t){if(t.blockedOn!==null)return!1;for(var i=t.targetContainers;0<i.length;){var o=$l(t.domEventName,t.eventSystemFlags,i[0],t.nativeEvent);if(o===null){o=t.nativeEvent;var l=new o.constructor(o.type,o);At=l,o.target.dispatchEvent(l),At=null}else return i=po(o),i!==null&&Xl(i),t.blockedOn=o,!1;i.shift()}return!0}function mf(t,i,o){Zo(t)&&o.delete(i)}function Rg(){Yl=!1,Yi!==null&&Zo(Yi)&&(Yi=null),qi!==null&&Zo(qi)&&(qi=null),$i!==null&&Zo($i)&&($i=null),Zs.forEach(mf),Qs.forEach(mf)}function eo(t,i){t.blockedOn===i&&(t.blockedOn=null,Yl||(Yl=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Rg)))}function to(t){function i(d){return eo(d,t)}if(0<Ko.length){eo(Ko[0],t);for(var o=1;o<Ko.length;o++){var l=Ko[o];l.blockedOn===t&&(l.blockedOn=null)}}for(Yi!==null&&eo(Yi,t),qi!==null&&eo(qi,t),$i!==null&&eo($i,t),Zs.forEach(i),Qs.forEach(i),o=0;o<Ki.length;o++)l=Ki[o],l.blockedOn===t&&(l.blockedOn=null);for(;0<Ki.length&&(o=Ki[0],o.blockedOn===null);)pf(o),o.blockedOn===null&&Ki.shift()}var es=A.ReactCurrentBatchConfig,Qo=!0;function Pg(t,i,o,l){var d=Pt,h=es.transition;es.transition=null;try{Pt=1,ql(t,i,o,l)}finally{Pt=d,es.transition=h}}function Dg(t,i,o,l){var d=Pt,h=es.transition;es.transition=null;try{Pt=4,ql(t,i,o,l)}finally{Pt=d,es.transition=h}}function ql(t,i,o,l){if(Qo){var d=$l(t,i,o,l);if(d===null)fc(t,i,l,Jo,o),hf(t,l);else if(bg(d,t,i,o,l))l.stopPropagation();else if(hf(t,l),i&4&&-1<Cg.indexOf(t)){for(;d!==null;){var h=po(d);if(h!==null&&cf(h),h=$l(t,i,o,l),h===null&&fc(t,i,l,Jo,o),h===d)break;d=h}d!==null&&l.stopPropagation()}else fc(t,i,l,null,o)}}var Jo=null;function $l(t,i,o,l){if(Jo=null,t=W(l),t=wr(t),t!==null)if(i=pi(t),i===null)t=null;else if(o=i.tag,o===13){if(t=Yo(i),t!==null)return t;t=null}else if(o===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;t=null}else i!==t&&(t=null);return Jo=t,null}function gf(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(We()){case He:return 1;case tt:return 4;case it:case je:return 16;case gt:return 536870912;default:return 16}default:return 16}}var Zi=null,Kl=null,ea=null;function vf(){if(ea)return ea;var t,i=Kl,o=i.length,l,d="value"in Zi?Zi.value:Zi.textContent,h=d.length;for(t=0;t<o&&i[t]===d[t];t++);var M=o-t;for(l=1;l<=M&&i[o-l]===d[h-l];l++);return ea=d.slice(t,1<l?1-l:void 0)}function ta(t){var i=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&i===13&&(t=13)):t=i,t===10&&(t=13),32<=t||t===13?t:0}function na(){return!0}function _f(){return!1}function In(t){function i(o,l,d,h,M){this._reactName=o,this._targetInst=d,this.type=l,this.nativeEvent=h,this.target=M,this.currentTarget=null;for(var I in t)t.hasOwnProperty(I)&&(o=t[I],this[I]=o?o(h):h[I]);return this.isDefaultPrevented=(h.defaultPrevented!=null?h.defaultPrevented:h.returnValue===!1)?na:_f,this.isPropagationStopped=_f,this}return re(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=na)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=na)},persist:function(){},isPersistent:na}),i}var ts={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Zl=In(ts),no=re({},ts,{view:0,detail:0}),Ng=In(no),Ql,Jl,io,ia=re({},no,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:tc,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==io&&(io&&t.type==="mousemove"?(Ql=t.screenX-io.screenX,Jl=t.screenY-io.screenY):Jl=Ql=0,io=t),Ql)},movementY:function(t){return"movementY"in t?t.movementY:Jl}}),xf=In(ia),Lg=re({},ia,{dataTransfer:0}),Ig=In(Lg),Ug=re({},no,{relatedTarget:0}),ec=In(Ug),kg=re({},ts,{animationName:0,elapsedTime:0,pseudoElement:0}),Fg=In(kg),Og=re({},ts,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),zg=In(Og),Bg=re({},ts,{data:0}),yf=In(Bg),Hg={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Vg={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Gg={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Wg(t){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(t):(t=Gg[t])?!!i[t]:!1}function tc(){return Wg}var jg=re({},no,{key:function(t){if(t.key){var i=Hg[t.key]||t.key;if(i!=="Unidentified")return i}return t.type==="keypress"?(t=ta(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Vg[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:tc,charCode:function(t){return t.type==="keypress"?ta(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?ta(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Xg=In(jg),Yg=re({},ia,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Sf=In(Yg),qg=re({},no,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:tc}),$g=In(qg),Kg=re({},ts,{propertyName:0,elapsedTime:0,pseudoElement:0}),Zg=In(Kg),Qg=re({},ia,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Jg=In(Qg),ev=[9,13,27,32],nc=f&&"CompositionEvent"in window,ro=null;f&&"documentMode"in document&&(ro=document.documentMode);var tv=f&&"TextEvent"in window&&!ro,Mf=f&&(!nc||ro&&8<ro&&11>=ro),Ef=" ",Tf=!1;function wf(t,i){switch(t){case"keyup":return ev.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Af(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ns=!1;function nv(t,i){switch(t){case"compositionend":return Af(i);case"keypress":return i.which!==32?null:(Tf=!0,Ef);case"textInput":return t=i.data,t===Ef&&Tf?null:t;default:return null}}function iv(t,i){if(ns)return t==="compositionend"||!nc&&wf(t,i)?(t=vf(),ea=Kl=Zi=null,ns=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Mf&&i.locale!=="ko"?null:i.data;default:return null}}var rv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Cf(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i==="input"?!!rv[t.type]:i==="textarea"}function bf(t,i,o,l){Pe(l),i=la(i,"onChange"),0<i.length&&(o=new Zl("onChange","change",null,o,l),t.push({event:o,listeners:i}))}var so=null,oo=null;function sv(t){Xf(t,0)}function ra(t){var i=as(t);if(dt(i))return t}function ov(t,i){if(t==="change")return i}var Rf=!1;if(f){var ic;if(f){var rc="oninput"in document;if(!rc){var Pf=document.createElement("div");Pf.setAttribute("oninput","return;"),rc=typeof Pf.oninput=="function"}ic=rc}else ic=!1;Rf=ic&&(!document.documentMode||9<document.documentMode)}function Df(){so&&(so.detachEvent("onpropertychange",Nf),oo=so=null)}function Nf(t){if(t.propertyName==="value"&&ra(oo)){var i=[];bf(i,oo,t,W(t)),Mn(sv,i)}}function av(t,i,o){t==="focusin"?(Df(),so=i,oo=o,so.attachEvent("onpropertychange",Nf)):t==="focusout"&&Df()}function lv(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return ra(oo)}function cv(t,i){if(t==="click")return ra(i)}function uv(t,i){if(t==="input"||t==="change")return ra(i)}function dv(t,i){return t===i&&(t!==0||1/t===1/i)||t!==t&&i!==i}var ni=typeof Object.is=="function"?Object.is:dv;function ao(t,i){if(ni(t,i))return!0;if(typeof t!="object"||t===null||typeof i!="object"||i===null)return!1;var o=Object.keys(t),l=Object.keys(i);if(o.length!==l.length)return!1;for(l=0;l<o.length;l++){var d=o[l];if(!p.call(i,d)||!ni(t[d],i[d]))return!1}return!0}function Lf(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function If(t,i){var o=Lf(t);t=0;for(var l;o;){if(o.nodeType===3){if(l=t+o.textContent.length,t<=i&&l>=i)return{node:o,offset:i-t};t=l}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=Lf(o)}}function Uf(t,i){return t&&i?t===i?!0:t&&t.nodeType===3?!1:i&&i.nodeType===3?Uf(t,i.parentNode):"contains"in t?t.contains(i):t.compareDocumentPosition?!!(t.compareDocumentPosition(i)&16):!1:!1}function kf(){for(var t=window,i=qe();i instanceof t.HTMLIFrameElement;){try{var o=typeof i.contentWindow.location.href=="string"}catch{o=!1}if(o)t=i.contentWindow;else break;i=qe(t.document)}return i}function sc(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i&&(i==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||i==="textarea"||t.contentEditable==="true")}function fv(t){var i=kf(),o=t.focusedElem,l=t.selectionRange;if(i!==o&&o&&o.ownerDocument&&Uf(o.ownerDocument.documentElement,o)){if(l!==null&&sc(o)){if(i=l.start,t=l.end,t===void 0&&(t=i),"selectionStart"in o)o.selectionStart=i,o.selectionEnd=Math.min(t,o.value.length);else if(t=(i=o.ownerDocument||document)&&i.defaultView||window,t.getSelection){t=t.getSelection();var d=o.textContent.length,h=Math.min(l.start,d);l=l.end===void 0?h:Math.min(l.end,d),!t.extend&&h>l&&(d=l,l=h,h=d),d=If(o,h);var M=If(o,l);d&&M&&(t.rangeCount!==1||t.anchorNode!==d.node||t.anchorOffset!==d.offset||t.focusNode!==M.node||t.focusOffset!==M.offset)&&(i=i.createRange(),i.setStart(d.node,d.offset),t.removeAllRanges(),h>l?(t.addRange(i),t.extend(M.node,M.offset)):(i.setEnd(M.node,M.offset),t.addRange(i)))}}for(i=[],t=o;t=t.parentNode;)t.nodeType===1&&i.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<i.length;o++)t=i[o],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var hv=f&&"documentMode"in document&&11>=document.documentMode,is=null,oc=null,lo=null,ac=!1;function Ff(t,i,o){var l=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;ac||is==null||is!==qe(l)||(l=is,"selectionStart"in l&&sc(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),lo&&ao(lo,l)||(lo=l,l=la(oc,"onSelect"),0<l.length&&(i=new Zl("onSelect","select",null,i,o),t.push({event:i,listeners:l}),i.target=is)))}function sa(t,i){var o={};return o[t.toLowerCase()]=i.toLowerCase(),o["Webkit"+t]="webkit"+i,o["Moz"+t]="moz"+i,o}var rs={animationend:sa("Animation","AnimationEnd"),animationiteration:sa("Animation","AnimationIteration"),animationstart:sa("Animation","AnimationStart"),transitionend:sa("Transition","TransitionEnd")},lc={},Of={};f&&(Of=document.createElement("div").style,"AnimationEvent"in window||(delete rs.animationend.animation,delete rs.animationiteration.animation,delete rs.animationstart.animation),"TransitionEvent"in window||delete rs.transitionend.transition);function oa(t){if(lc[t])return lc[t];if(!rs[t])return t;var i=rs[t],o;for(o in i)if(i.hasOwnProperty(o)&&o in Of)return lc[t]=i[o];return t}var zf=oa("animationend"),Bf=oa("animationiteration"),Hf=oa("animationstart"),Vf=oa("transitionend"),Gf=new Map,Wf="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Qi(t,i){Gf.set(t,i),c(i,[t])}for(var cc=0;cc<Wf.length;cc++){var uc=Wf[cc],pv=uc.toLowerCase(),mv=uc[0].toUpperCase()+uc.slice(1);Qi(pv,"on"+mv)}Qi(zf,"onAnimationEnd"),Qi(Bf,"onAnimationIteration"),Qi(Hf,"onAnimationStart"),Qi("dblclick","onDoubleClick"),Qi("focusin","onFocus"),Qi("focusout","onBlur"),Qi(Vf,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),c("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),c("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),c("onBeforeInput",["compositionend","keypress","textInput","paste"]),c("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),c("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),c("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var co="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),gv=new Set("cancel close invalid load scroll toggle".split(" ").concat(co));function jf(t,i,o){var l=t.type||"unknown-event";t.currentTarget=o,Xo(l,i,void 0,t),t.currentTarget=null}function Xf(t,i){i=(i&4)!==0;for(var o=0;o<t.length;o++){var l=t[o],d=l.event;l=l.listeners;e:{var h=void 0;if(i)for(var M=l.length-1;0<=M;M--){var I=l[M],O=I.instance,ee=I.currentTarget;if(I=I.listener,O!==h&&d.isPropagationStopped())break e;jf(d,I,ee),h=O}else for(M=0;M<l.length;M++){if(I=l[M],O=I.instance,ee=I.currentTarget,I=I.listener,O!==h&&d.isPropagationStopped())break e;jf(d,I,ee),h=O}}}if(Tr)throw t=Xi,Tr=!1,Xi=null,t}function Ut(t,i){var o=i[_c];o===void 0&&(o=i[_c]=new Set);var l=t+"__bubble";o.has(l)||(Yf(i,t,2,!1),o.add(l))}function dc(t,i,o){var l=0;i&&(l|=4),Yf(o,t,l,i)}var aa="_reactListening"+Math.random().toString(36).slice(2);function uo(t){if(!t[aa]){t[aa]=!0,r.forEach(function(o){o!=="selectionchange"&&(gv.has(o)||dc(o,!1,t),dc(o,!0,t))});var i=t.nodeType===9?t:t.ownerDocument;i===null||i[aa]||(i[aa]=!0,dc("selectionchange",!1,i))}}function Yf(t,i,o,l){switch(gf(i)){case 1:var d=Pg;break;case 4:d=Dg;break;default:d=ql}o=d.bind(null,i,o,t),d=void 0,!Qr||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(d=!0),l?d!==void 0?t.addEventListener(i,o,{capture:!0,passive:d}):t.addEventListener(i,o,!0):d!==void 0?t.addEventListener(i,o,{passive:d}):t.addEventListener(i,o,!1)}function fc(t,i,o,l,d){var h=l;if((i&1)===0&&(i&2)===0&&l!==null)e:for(;;){if(l===null)return;var M=l.tag;if(M===3||M===4){var I=l.stateNode.containerInfo;if(I===d||I.nodeType===8&&I.parentNode===d)break;if(M===4)for(M=l.return;M!==null;){var O=M.tag;if((O===3||O===4)&&(O=M.stateNode.containerInfo,O===d||O.nodeType===8&&O.parentNode===d))return;M=M.return}for(;I!==null;){if(M=wr(I),M===null)return;if(O=M.tag,O===5||O===6){l=h=M;continue e}I=I.parentNode}}l=l.return}Mn(function(){var ee=h,xe=W(o),ye=[];e:{var ge=Gf.get(t);if(ge!==void 0){var Ie=Zl,Be=t;switch(t){case"keypress":if(ta(o)===0)break e;case"keydown":case"keyup":Ie=Xg;break;case"focusin":Be="focus",Ie=ec;break;case"focusout":Be="blur",Ie=ec;break;case"beforeblur":case"afterblur":Ie=ec;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Ie=xf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Ie=Ig;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Ie=$g;break;case zf:case Bf:case Hf:Ie=Fg;break;case Vf:Ie=Zg;break;case"scroll":Ie=Ng;break;case"wheel":Ie=Jg;break;case"copy":case"cut":case"paste":Ie=zg;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Ie=Sf}var Ve=(i&4)!==0,Gt=!Ve&&t==="scroll",$=Ve?ge!==null?ge+"Capture":null:ge;Ve=[];for(var G=ee,K;G!==null;){K=G;var Te=K.stateNode;if(K.tag===5&&Te!==null&&(K=Te,$!==null&&(Te=mn(G,$),Te!=null&&Ve.push(fo(G,Te,K)))),Gt)break;G=G.return}0<Ve.length&&(ge=new Ie(ge,Be,null,o,xe),ye.push({event:ge,listeners:Ve}))}}if((i&7)===0){e:{if(ge=t==="mouseover"||t==="pointerover",Ie=t==="mouseout"||t==="pointerout",ge&&o!==At&&(Be=o.relatedTarget||o.fromElement)&&(wr(Be)||Be[wi]))break e;if((Ie||ge)&&(ge=xe.window===xe?xe:(ge=xe.ownerDocument)?ge.defaultView||ge.parentWindow:window,Ie?(Be=o.relatedTarget||o.toElement,Ie=ee,Be=Be?wr(Be):null,Be!==null&&(Gt=pi(Be),Be!==Gt||Be.tag!==5&&Be.tag!==6)&&(Be=null)):(Ie=null,Be=ee),Ie!==Be)){if(Ve=xf,Te="onMouseLeave",$="onMouseEnter",G="mouse",(t==="pointerout"||t==="pointerover")&&(Ve=Sf,Te="onPointerLeave",$="onPointerEnter",G="pointer"),Gt=Ie==null?ge:as(Ie),K=Be==null?ge:as(Be),ge=new Ve(Te,G+"leave",Ie,o,xe),ge.target=Gt,ge.relatedTarget=K,Te=null,wr(xe)===ee&&(Ve=new Ve($,G+"enter",Be,o,xe),Ve.target=K,Ve.relatedTarget=Gt,Te=Ve),Gt=Te,Ie&&Be)t:{for(Ve=Ie,$=Be,G=0,K=Ve;K;K=ss(K))G++;for(K=0,Te=$;Te;Te=ss(Te))K++;for(;0<G-K;)Ve=ss(Ve),G--;for(;0<K-G;)$=ss($),K--;for(;G--;){if(Ve===$||$!==null&&Ve===$.alternate)break t;Ve=ss(Ve),$=ss($)}Ve=null}else Ve=null;Ie!==null&&qf(ye,ge,Ie,Ve,!1),Be!==null&&Gt!==null&&qf(ye,Gt,Be,Ve,!0)}}e:{if(ge=ee?as(ee):window,Ie=ge.nodeName&&ge.nodeName.toLowerCase(),Ie==="select"||Ie==="input"&&ge.type==="file")var Xe=ov;else if(Cf(ge))if(Rf)Xe=uv;else{Xe=lv;var Ze=av}else(Ie=ge.nodeName)&&Ie.toLowerCase()==="input"&&(ge.type==="checkbox"||ge.type==="radio")&&(Xe=cv);if(Xe&&(Xe=Xe(t,ee))){bf(ye,Xe,o,xe);break e}Ze&&Ze(t,ge,ee),t==="focusout"&&(Ze=ge._wrapperState)&&Ze.controlled&&ge.type==="number"&&Et(ge,"number",ge.value)}switch(Ze=ee?as(ee):window,t){case"focusin":(Cf(Ze)||Ze.contentEditable==="true")&&(is=Ze,oc=ee,lo=null);break;case"focusout":lo=oc=is=null;break;case"mousedown":ac=!0;break;case"contextmenu":case"mouseup":case"dragend":ac=!1,Ff(ye,o,xe);break;case"selectionchange":if(hv)break;case"keydown":case"keyup":Ff(ye,o,xe)}var Qe;if(nc)e:{switch(t){case"compositionstart":var nt="onCompositionStart";break e;case"compositionend":nt="onCompositionEnd";break e;case"compositionupdate":nt="onCompositionUpdate";break e}nt=void 0}else ns?wf(t,o)&&(nt="onCompositionEnd"):t==="keydown"&&o.keyCode===229&&(nt="onCompositionStart");nt&&(Mf&&o.locale!=="ko"&&(ns||nt!=="onCompositionStart"?nt==="onCompositionEnd"&&ns&&(Qe=vf()):(Zi=xe,Kl="value"in Zi?Zi.value:Zi.textContent,ns=!0)),Ze=la(ee,nt),0<Ze.length&&(nt=new yf(nt,t,null,o,xe),ye.push({event:nt,listeners:Ze}),Qe?nt.data=Qe:(Qe=Af(o),Qe!==null&&(nt.data=Qe)))),(Qe=tv?nv(t,o):iv(t,o))&&(ee=la(ee,"onBeforeInput"),0<ee.length&&(xe=new yf("onBeforeInput","beforeinput",null,o,xe),ye.push({event:xe,listeners:ee}),xe.data=Qe))}Xf(ye,i)})}function fo(t,i,o){return{instance:t,listener:i,currentTarget:o}}function la(t,i){for(var o=i+"Capture",l=[];t!==null;){var d=t,h=d.stateNode;d.tag===5&&h!==null&&(d=h,h=mn(t,o),h!=null&&l.unshift(fo(t,h,d)),h=mn(t,i),h!=null&&l.push(fo(t,h,d))),t=t.return}return l}function ss(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function qf(t,i,o,l,d){for(var h=i._reactName,M=[];o!==null&&o!==l;){var I=o,O=I.alternate,ee=I.stateNode;if(O!==null&&O===l)break;I.tag===5&&ee!==null&&(I=ee,d?(O=mn(o,h),O!=null&&M.unshift(fo(o,O,I))):d||(O=mn(o,h),O!=null&&M.push(fo(o,O,I)))),o=o.return}M.length!==0&&t.push({event:i,listeners:M})}var vv=/\r\n?/g,_v=/\u0000|\uFFFD/g;function $f(t){return(typeof t=="string"?t:""+t).replace(vv,`
`).replace(_v,"")}function ca(t,i,o){if(i=$f(i),$f(t)!==i&&o)throw Error(n(425))}function ua(){}var hc=null,pc=null;function mc(t,i){return t==="textarea"||t==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var gc=typeof setTimeout=="function"?setTimeout:void 0,xv=typeof clearTimeout=="function"?clearTimeout:void 0,Kf=typeof Promise=="function"?Promise:void 0,yv=typeof queueMicrotask=="function"?queueMicrotask:typeof Kf<"u"?function(t){return Kf.resolve(null).then(t).catch(Sv)}:gc;function Sv(t){setTimeout(function(){throw t})}function vc(t,i){var o=i,l=0;do{var d=o.nextSibling;if(t.removeChild(o),d&&d.nodeType===8)if(o=d.data,o==="/$"){if(l===0){t.removeChild(d),to(i);return}l--}else o!=="$"&&o!=="$?"&&o!=="$!"||l++;o=d}while(o);to(i)}function Ji(t){for(;t!=null;t=t.nextSibling){var i=t.nodeType;if(i===1||i===3)break;if(i===8){if(i=t.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return t}function Zf(t){t=t.previousSibling;for(var i=0;t;){if(t.nodeType===8){var o=t.data;if(o==="$"||o==="$!"||o==="$?"){if(i===0)return t;i--}else o==="/$"&&i++}t=t.previousSibling}return null}var os=Math.random().toString(36).slice(2),gi="__reactFiber$"+os,ho="__reactProps$"+os,wi="__reactContainer$"+os,_c="__reactEvents$"+os,Mv="__reactListeners$"+os,Ev="__reactHandles$"+os;function wr(t){var i=t[gi];if(i)return i;for(var o=t.parentNode;o;){if(i=o[wi]||o[gi]){if(o=i.alternate,i.child!==null||o!==null&&o.child!==null)for(t=Zf(t);t!==null;){if(o=t[gi])return o;t=Zf(t)}return i}t=o,o=t.parentNode}return null}function po(t){return t=t[gi]||t[wi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function as(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(n(33))}function da(t){return t[ho]||null}var xc=[],ls=-1;function er(t){return{current:t}}function kt(t){0>ls||(t.current=xc[ls],xc[ls]=null,ls--)}function Lt(t,i){ls++,xc[ls]=t.current,t.current=i}var tr={},cn=er(tr),Tn=er(!1),Ar=tr;function cs(t,i){var o=t.type.contextTypes;if(!o)return tr;var l=t.stateNode;if(l&&l.__reactInternalMemoizedUnmaskedChildContext===i)return l.__reactInternalMemoizedMaskedChildContext;var d={},h;for(h in o)d[h]=i[h];return l&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=d),d}function wn(t){return t=t.childContextTypes,t!=null}function fa(){kt(Tn),kt(cn)}function Qf(t,i,o){if(cn.current!==tr)throw Error(n(168));Lt(cn,i),Lt(Tn,o)}function Jf(t,i,o){var l=t.stateNode;if(i=i.childContextTypes,typeof l.getChildContext!="function")return o;l=l.getChildContext();for(var d in l)if(!(d in i))throw Error(n(108,ve(t)||"Unknown",d));return re({},o,l)}function ha(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||tr,Ar=cn.current,Lt(cn,t),Lt(Tn,Tn.current),!0}function eh(t,i,o){var l=t.stateNode;if(!l)throw Error(n(169));o?(t=Jf(t,i,Ar),l.__reactInternalMemoizedMergedChildContext=t,kt(Tn),kt(cn),Lt(cn,t)):kt(Tn),Lt(Tn,o)}var Ai=null,pa=!1,yc=!1;function th(t){Ai===null?Ai=[t]:Ai.push(t)}function Tv(t){pa=!0,th(t)}function nr(){if(!yc&&Ai!==null){yc=!0;var t=0,i=Pt;try{var o=Ai;for(Pt=1;t<o.length;t++){var l=o[t];do l=l(!0);while(l!==null)}Ai=null,pa=!1}catch(d){throw Ai!==null&&(Ai=Ai.slice(t+1)),te(He,nr),d}finally{Pt=i,yc=!1}}return null}var us=[],ds=0,ma=null,ga=0,Gn=[],Wn=0,Cr=null,Ci=1,bi="";function br(t,i){us[ds++]=ga,us[ds++]=ma,ma=t,ga=i}function nh(t,i,o){Gn[Wn++]=Ci,Gn[Wn++]=bi,Gn[Wn++]=Cr,Cr=t;var l=Ci;t=bi;var d=32-lt(l)-1;l&=~(1<<d),o+=1;var h=32-lt(i)+d;if(30<h){var M=d-d%5;h=(l&(1<<M)-1).toString(32),l>>=M,d-=M,Ci=1<<32-lt(i)+d|o<<d|l,bi=h+t}else Ci=1<<h|o<<d|l,bi=t}function Sc(t){t.return!==null&&(br(t,1),nh(t,1,0))}function Mc(t){for(;t===ma;)ma=us[--ds],us[ds]=null,ga=us[--ds],us[ds]=null;for(;t===Cr;)Cr=Gn[--Wn],Gn[Wn]=null,bi=Gn[--Wn],Gn[Wn]=null,Ci=Gn[--Wn],Gn[Wn]=null}var Un=null,kn=null,Ft=!1,ii=null;function ih(t,i){var o=qn(5,null,null,0);o.elementType="DELETED",o.stateNode=i,o.return=t,i=t.deletions,i===null?(t.deletions=[o],t.flags|=16):i.push(o)}function rh(t,i){switch(t.tag){case 5:var o=t.type;return i=i.nodeType!==1||o.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(t.stateNode=i,Un=t,kn=Ji(i.firstChild),!0):!1;case 6:return i=t.pendingProps===""||i.nodeType!==3?null:i,i!==null?(t.stateNode=i,Un=t,kn=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(o=Cr!==null?{id:Ci,overflow:bi}:null,t.memoizedState={dehydrated:i,treeContext:o,retryLane:1073741824},o=qn(18,null,null,0),o.stateNode=i,o.return=t,t.child=o,Un=t,kn=null,!0):!1;default:return!1}}function Ec(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Tc(t){if(Ft){var i=kn;if(i){var o=i;if(!rh(t,i)){if(Ec(t))throw Error(n(418));i=Ji(o.nextSibling);var l=Un;i&&rh(t,i)?ih(l,o):(t.flags=t.flags&-4097|2,Ft=!1,Un=t)}}else{if(Ec(t))throw Error(n(418));t.flags=t.flags&-4097|2,Ft=!1,Un=t}}}function sh(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Un=t}function va(t){if(t!==Un)return!1;if(!Ft)return sh(t),Ft=!0,!1;var i;if((i=t.tag!==3)&&!(i=t.tag!==5)&&(i=t.type,i=i!=="head"&&i!=="body"&&!mc(t.type,t.memoizedProps)),i&&(i=kn)){if(Ec(t))throw oh(),Error(n(418));for(;i;)ih(t,i),i=Ji(i.nextSibling)}if(sh(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(n(317));e:{for(t=t.nextSibling,i=0;t;){if(t.nodeType===8){var o=t.data;if(o==="/$"){if(i===0){kn=Ji(t.nextSibling);break e}i--}else o!=="$"&&o!=="$!"&&o!=="$?"||i++}t=t.nextSibling}kn=null}}else kn=Un?Ji(t.stateNode.nextSibling):null;return!0}function oh(){for(var t=kn;t;)t=Ji(t.nextSibling)}function fs(){kn=Un=null,Ft=!1}function wc(t){ii===null?ii=[t]:ii.push(t)}var wv=A.ReactCurrentBatchConfig;function mo(t,i,o){if(t=o.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(o._owner){if(o=o._owner,o){if(o.tag!==1)throw Error(n(309));var l=o.stateNode}if(!l)throw Error(n(147,t));var d=l,h=""+t;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===h?i.ref:(i=function(M){var I=d.refs;M===null?delete I[h]:I[h]=M},i._stringRef=h,i)}if(typeof t!="string")throw Error(n(284));if(!o._owner)throw Error(n(290,t))}return t}function _a(t,i){throw t=Object.prototype.toString.call(i),Error(n(31,t==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":t))}function ah(t){var i=t._init;return i(t._payload)}function lh(t){function i($,G){if(t){var K=$.deletions;K===null?($.deletions=[G],$.flags|=16):K.push(G)}}function o($,G){if(!t)return null;for(;G!==null;)i($,G),G=G.sibling;return null}function l($,G){for($=new Map;G!==null;)G.key!==null?$.set(G.key,G):$.set(G.index,G),G=G.sibling;return $}function d($,G){return $=ur($,G),$.index=0,$.sibling=null,$}function h($,G,K){return $.index=K,t?(K=$.alternate,K!==null?(K=K.index,K<G?($.flags|=2,G):K):($.flags|=2,G)):($.flags|=1048576,G)}function M($){return t&&$.alternate===null&&($.flags|=2),$}function I($,G,K,Te){return G===null||G.tag!==6?(G=gu(K,$.mode,Te),G.return=$,G):(G=d(G,K),G.return=$,G)}function O($,G,K,Te){var Xe=K.type;return Xe===U?xe($,G,K.props.children,Te,K.key):G!==null&&(G.elementType===Xe||typeof Xe=="object"&&Xe!==null&&Xe.$$typeof===ae&&ah(Xe)===G.type)?(Te=d(G,K.props),Te.ref=mo($,G,K),Te.return=$,Te):(Te=Va(K.type,K.key,K.props,null,$.mode,Te),Te.ref=mo($,G,K),Te.return=$,Te)}function ee($,G,K,Te){return G===null||G.tag!==4||G.stateNode.containerInfo!==K.containerInfo||G.stateNode.implementation!==K.implementation?(G=vu(K,$.mode,Te),G.return=$,G):(G=d(G,K.children||[]),G.return=$,G)}function xe($,G,K,Te,Xe){return G===null||G.tag!==7?(G=kr(K,$.mode,Te,Xe),G.return=$,G):(G=d(G,K),G.return=$,G)}function ye($,G,K){if(typeof G=="string"&&G!==""||typeof G=="number")return G=gu(""+G,$.mode,K),G.return=$,G;if(typeof G=="object"&&G!==null){switch(G.$$typeof){case j:return K=Va(G.type,G.key,G.props,null,$.mode,K),K.ref=mo($,null,G),K.return=$,K;case k:return G=vu(G,$.mode,K),G.return=$,G;case ae:var Te=G._init;return ye($,Te(G._payload),K)}if(ze(G)||le(G))return G=kr(G,$.mode,K,null),G.return=$,G;_a($,G)}return null}function ge($,G,K,Te){var Xe=G!==null?G.key:null;if(typeof K=="string"&&K!==""||typeof K=="number")return Xe!==null?null:I($,G,""+K,Te);if(typeof K=="object"&&K!==null){switch(K.$$typeof){case j:return K.key===Xe?O($,G,K,Te):null;case k:return K.key===Xe?ee($,G,K,Te):null;case ae:return Xe=K._init,ge($,G,Xe(K._payload),Te)}if(ze(K)||le(K))return Xe!==null?null:xe($,G,K,Te,null);_a($,K)}return null}function Ie($,G,K,Te,Xe){if(typeof Te=="string"&&Te!==""||typeof Te=="number")return $=$.get(K)||null,I(G,$,""+Te,Xe);if(typeof Te=="object"&&Te!==null){switch(Te.$$typeof){case j:return $=$.get(Te.key===null?K:Te.key)||null,O(G,$,Te,Xe);case k:return $=$.get(Te.key===null?K:Te.key)||null,ee(G,$,Te,Xe);case ae:var Ze=Te._init;return Ie($,G,K,Ze(Te._payload),Xe)}if(ze(Te)||le(Te))return $=$.get(K)||null,xe(G,$,Te,Xe,null);_a(G,Te)}return null}function Be($,G,K,Te){for(var Xe=null,Ze=null,Qe=G,nt=G=0,nn=null;Qe!==null&&nt<K.length;nt++){Qe.index>nt?(nn=Qe,Qe=null):nn=Qe.sibling;var Mt=ge($,Qe,K[nt],Te);if(Mt===null){Qe===null&&(Qe=nn);break}t&&Qe&&Mt.alternate===null&&i($,Qe),G=h(Mt,G,nt),Ze===null?Xe=Mt:Ze.sibling=Mt,Ze=Mt,Qe=nn}if(nt===K.length)return o($,Qe),Ft&&br($,nt),Xe;if(Qe===null){for(;nt<K.length;nt++)Qe=ye($,K[nt],Te),Qe!==null&&(G=h(Qe,G,nt),Ze===null?Xe=Qe:Ze.sibling=Qe,Ze=Qe);return Ft&&br($,nt),Xe}for(Qe=l($,Qe);nt<K.length;nt++)nn=Ie(Qe,$,nt,K[nt],Te),nn!==null&&(t&&nn.alternate!==null&&Qe.delete(nn.key===null?nt:nn.key),G=h(nn,G,nt),Ze===null?Xe=nn:Ze.sibling=nn,Ze=nn);return t&&Qe.forEach(function(dr){return i($,dr)}),Ft&&br($,nt),Xe}function Ve($,G,K,Te){var Xe=le(K);if(typeof Xe!="function")throw Error(n(150));if(K=Xe.call(K),K==null)throw Error(n(151));for(var Ze=Xe=null,Qe=G,nt=G=0,nn=null,Mt=K.next();Qe!==null&&!Mt.done;nt++,Mt=K.next()){Qe.index>nt?(nn=Qe,Qe=null):nn=Qe.sibling;var dr=ge($,Qe,Mt.value,Te);if(dr===null){Qe===null&&(Qe=nn);break}t&&Qe&&dr.alternate===null&&i($,Qe),G=h(dr,G,nt),Ze===null?Xe=dr:Ze.sibling=dr,Ze=dr,Qe=nn}if(Mt.done)return o($,Qe),Ft&&br($,nt),Xe;if(Qe===null){for(;!Mt.done;nt++,Mt=K.next())Mt=ye($,Mt.value,Te),Mt!==null&&(G=h(Mt,G,nt),Ze===null?Xe=Mt:Ze.sibling=Mt,Ze=Mt);return Ft&&br($,nt),Xe}for(Qe=l($,Qe);!Mt.done;nt++,Mt=K.next())Mt=Ie(Qe,$,nt,Mt.value,Te),Mt!==null&&(t&&Mt.alternate!==null&&Qe.delete(Mt.key===null?nt:Mt.key),G=h(Mt,G,nt),Ze===null?Xe=Mt:Ze.sibling=Mt,Ze=Mt);return t&&Qe.forEach(function(r_){return i($,r_)}),Ft&&br($,nt),Xe}function Gt($,G,K,Te){if(typeof K=="object"&&K!==null&&K.type===U&&K.key===null&&(K=K.props.children),typeof K=="object"&&K!==null){switch(K.$$typeof){case j:e:{for(var Xe=K.key,Ze=G;Ze!==null;){if(Ze.key===Xe){if(Xe=K.type,Xe===U){if(Ze.tag===7){o($,Ze.sibling),G=d(Ze,K.props.children),G.return=$,$=G;break e}}else if(Ze.elementType===Xe||typeof Xe=="object"&&Xe!==null&&Xe.$$typeof===ae&&ah(Xe)===Ze.type){o($,Ze.sibling),G=d(Ze,K.props),G.ref=mo($,Ze,K),G.return=$,$=G;break e}o($,Ze);break}else i($,Ze);Ze=Ze.sibling}K.type===U?(G=kr(K.props.children,$.mode,Te,K.key),G.return=$,$=G):(Te=Va(K.type,K.key,K.props,null,$.mode,Te),Te.ref=mo($,G,K),Te.return=$,$=Te)}return M($);case k:e:{for(Ze=K.key;G!==null;){if(G.key===Ze)if(G.tag===4&&G.stateNode.containerInfo===K.containerInfo&&G.stateNode.implementation===K.implementation){o($,G.sibling),G=d(G,K.children||[]),G.return=$,$=G;break e}else{o($,G);break}else i($,G);G=G.sibling}G=vu(K,$.mode,Te),G.return=$,$=G}return M($);case ae:return Ze=K._init,Gt($,G,Ze(K._payload),Te)}if(ze(K))return Be($,G,K,Te);if(le(K))return Ve($,G,K,Te);_a($,K)}return typeof K=="string"&&K!==""||typeof K=="number"?(K=""+K,G!==null&&G.tag===6?(o($,G.sibling),G=d(G,K),G.return=$,$=G):(o($,G),G=gu(K,$.mode,Te),G.return=$,$=G),M($)):o($,G)}return Gt}var hs=lh(!0),ch=lh(!1),xa=er(null),ya=null,ps=null,Ac=null;function Cc(){Ac=ps=ya=null}function bc(t){var i=xa.current;kt(xa),t._currentValue=i}function Rc(t,i,o){for(;t!==null;){var l=t.alternate;if((t.childLanes&i)!==i?(t.childLanes|=i,l!==null&&(l.childLanes|=i)):l!==null&&(l.childLanes&i)!==i&&(l.childLanes|=i),t===o)break;t=t.return}}function ms(t,i){ya=t,Ac=ps=null,t=t.dependencies,t!==null&&t.firstContext!==null&&((t.lanes&i)!==0&&(An=!0),t.firstContext=null)}function jn(t){var i=t._currentValue;if(Ac!==t)if(t={context:t,memoizedValue:i,next:null},ps===null){if(ya===null)throw Error(n(308));ps=t,ya.dependencies={lanes:0,firstContext:t}}else ps=ps.next=t;return i}var Rr=null;function Pc(t){Rr===null?Rr=[t]:Rr.push(t)}function uh(t,i,o,l){var d=i.interleaved;return d===null?(o.next=o,Pc(i)):(o.next=d.next,d.next=o),i.interleaved=o,Ri(t,l)}function Ri(t,i){t.lanes|=i;var o=t.alternate;for(o!==null&&(o.lanes|=i),o=t,t=t.return;t!==null;)t.childLanes|=i,o=t.alternate,o!==null&&(o.childLanes|=i),o=t,t=t.return;return o.tag===3?o.stateNode:null}var ir=!1;function Dc(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function dh(t,i){t=t.updateQueue,i.updateQueue===t&&(i.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Pi(t,i){return{eventTime:t,lane:i,tag:0,payload:null,callback:null,next:null}}function rr(t,i,o){var l=t.updateQueue;if(l===null)return null;if(l=l.shared,(xt&2)!==0){var d=l.pending;return d===null?i.next=i:(i.next=d.next,d.next=i),l.pending=i,Ri(t,o)}return d=l.interleaved,d===null?(i.next=i,Pc(l)):(i.next=d.next,d.next=i),l.interleaved=i,Ri(t,o)}function Sa(t,i,o){if(i=i.updateQueue,i!==null&&(i=i.shared,(o&4194240)!==0)){var l=i.lanes;l&=t.pendingLanes,o|=l,i.lanes=o,jl(t,o)}}function fh(t,i){var o=t.updateQueue,l=t.alternate;if(l!==null&&(l=l.updateQueue,o===l)){var d=null,h=null;if(o=o.firstBaseUpdate,o!==null){do{var M={eventTime:o.eventTime,lane:o.lane,tag:o.tag,payload:o.payload,callback:o.callback,next:null};h===null?d=h=M:h=h.next=M,o=o.next}while(o!==null);h===null?d=h=i:h=h.next=i}else d=h=i;o={baseState:l.baseState,firstBaseUpdate:d,lastBaseUpdate:h,shared:l.shared,effects:l.effects},t.updateQueue=o;return}t=o.lastBaseUpdate,t===null?o.firstBaseUpdate=i:t.next=i,o.lastBaseUpdate=i}function Ma(t,i,o,l){var d=t.updateQueue;ir=!1;var h=d.firstBaseUpdate,M=d.lastBaseUpdate,I=d.shared.pending;if(I!==null){d.shared.pending=null;var O=I,ee=O.next;O.next=null,M===null?h=ee:M.next=ee,M=O;var xe=t.alternate;xe!==null&&(xe=xe.updateQueue,I=xe.lastBaseUpdate,I!==M&&(I===null?xe.firstBaseUpdate=ee:I.next=ee,xe.lastBaseUpdate=O))}if(h!==null){var ye=d.baseState;M=0,xe=ee=O=null,I=h;do{var ge=I.lane,Ie=I.eventTime;if((l&ge)===ge){xe!==null&&(xe=xe.next={eventTime:Ie,lane:0,tag:I.tag,payload:I.payload,callback:I.callback,next:null});e:{var Be=t,Ve=I;switch(ge=i,Ie=o,Ve.tag){case 1:if(Be=Ve.payload,typeof Be=="function"){ye=Be.call(Ie,ye,ge);break e}ye=Be;break e;case 3:Be.flags=Be.flags&-65537|128;case 0:if(Be=Ve.payload,ge=typeof Be=="function"?Be.call(Ie,ye,ge):Be,ge==null)break e;ye=re({},ye,ge);break e;case 2:ir=!0}}I.callback!==null&&I.lane!==0&&(t.flags|=64,ge=d.effects,ge===null?d.effects=[I]:ge.push(I))}else Ie={eventTime:Ie,lane:ge,tag:I.tag,payload:I.payload,callback:I.callback,next:null},xe===null?(ee=xe=Ie,O=ye):xe=xe.next=Ie,M|=ge;if(I=I.next,I===null){if(I=d.shared.pending,I===null)break;ge=I,I=ge.next,ge.next=null,d.lastBaseUpdate=ge,d.shared.pending=null}}while(!0);if(xe===null&&(O=ye),d.baseState=O,d.firstBaseUpdate=ee,d.lastBaseUpdate=xe,i=d.shared.interleaved,i!==null){d=i;do M|=d.lane,d=d.next;while(d!==i)}else h===null&&(d.shared.lanes=0);Nr|=M,t.lanes=M,t.memoizedState=ye}}function hh(t,i,o){if(t=i.effects,i.effects=null,t!==null)for(i=0;i<t.length;i++){var l=t[i],d=l.callback;if(d!==null){if(l.callback=null,l=o,typeof d!="function")throw Error(n(191,d));d.call(l)}}}var go={},vi=er(go),vo=er(go),_o=er(go);function Pr(t){if(t===go)throw Error(n(174));return t}function Nc(t,i){switch(Lt(_o,i),Lt(vo,t),Lt(vi,go),t=i.nodeType,t){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:Ge(null,"");break;default:t=t===8?i.parentNode:i,i=t.namespaceURI||null,t=t.tagName,i=Ge(i,t)}kt(vi),Lt(vi,i)}function gs(){kt(vi),kt(vo),kt(_o)}function ph(t){Pr(_o.current);var i=Pr(vi.current),o=Ge(i,t.type);i!==o&&(Lt(vo,t),Lt(vi,o))}function Lc(t){vo.current===t&&(kt(vi),kt(vo))}var Ot=er(0);function Ea(t){for(var i=t;i!==null;){if(i.tag===13){var o=i.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||o.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var Ic=[];function Uc(){for(var t=0;t<Ic.length;t++)Ic[t]._workInProgressVersionPrimary=null;Ic.length=0}var Ta=A.ReactCurrentDispatcher,kc=A.ReactCurrentBatchConfig,Dr=0,zt=null,Kt=null,en=null,wa=!1,xo=!1,yo=0,Av=0;function un(){throw Error(n(321))}function Fc(t,i){if(i===null)return!1;for(var o=0;o<i.length&&o<t.length;o++)if(!ni(t[o],i[o]))return!1;return!0}function Oc(t,i,o,l,d,h){if(Dr=h,zt=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,Ta.current=t===null||t.memoizedState===null?Pv:Dv,t=o(l,d),xo){h=0;do{if(xo=!1,yo=0,25<=h)throw Error(n(301));h+=1,en=Kt=null,i.updateQueue=null,Ta.current=Nv,t=o(l,d)}while(xo)}if(Ta.current=ba,i=Kt!==null&&Kt.next!==null,Dr=0,en=Kt=zt=null,wa=!1,i)throw Error(n(300));return t}function zc(){var t=yo!==0;return yo=0,t}function _i(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return en===null?zt.memoizedState=en=t:en=en.next=t,en}function Xn(){if(Kt===null){var t=zt.alternate;t=t!==null?t.memoizedState:null}else t=Kt.next;var i=en===null?zt.memoizedState:en.next;if(i!==null)en=i,Kt=t;else{if(t===null)throw Error(n(310));Kt=t,t={memoizedState:Kt.memoizedState,baseState:Kt.baseState,baseQueue:Kt.baseQueue,queue:Kt.queue,next:null},en===null?zt.memoizedState=en=t:en=en.next=t}return en}function So(t,i){return typeof i=="function"?i(t):i}function Bc(t){var i=Xn(),o=i.queue;if(o===null)throw Error(n(311));o.lastRenderedReducer=t;var l=Kt,d=l.baseQueue,h=o.pending;if(h!==null){if(d!==null){var M=d.next;d.next=h.next,h.next=M}l.baseQueue=d=h,o.pending=null}if(d!==null){h=d.next,l=l.baseState;var I=M=null,O=null,ee=h;do{var xe=ee.lane;if((Dr&xe)===xe)O!==null&&(O=O.next={lane:0,action:ee.action,hasEagerState:ee.hasEagerState,eagerState:ee.eagerState,next:null}),l=ee.hasEagerState?ee.eagerState:t(l,ee.action);else{var ye={lane:xe,action:ee.action,hasEagerState:ee.hasEagerState,eagerState:ee.eagerState,next:null};O===null?(I=O=ye,M=l):O=O.next=ye,zt.lanes|=xe,Nr|=xe}ee=ee.next}while(ee!==null&&ee!==h);O===null?M=l:O.next=I,ni(l,i.memoizedState)||(An=!0),i.memoizedState=l,i.baseState=M,i.baseQueue=O,o.lastRenderedState=l}if(t=o.interleaved,t!==null){d=t;do h=d.lane,zt.lanes|=h,Nr|=h,d=d.next;while(d!==t)}else d===null&&(o.lanes=0);return[i.memoizedState,o.dispatch]}function Hc(t){var i=Xn(),o=i.queue;if(o===null)throw Error(n(311));o.lastRenderedReducer=t;var l=o.dispatch,d=o.pending,h=i.memoizedState;if(d!==null){o.pending=null;var M=d=d.next;do h=t(h,M.action),M=M.next;while(M!==d);ni(h,i.memoizedState)||(An=!0),i.memoizedState=h,i.baseQueue===null&&(i.baseState=h),o.lastRenderedState=h}return[h,l]}function mh(){}function gh(t,i){var o=zt,l=Xn(),d=i(),h=!ni(l.memoizedState,d);if(h&&(l.memoizedState=d,An=!0),l=l.queue,Vc(xh.bind(null,o,l,t),[t]),l.getSnapshot!==i||h||en!==null&&en.memoizedState.tag&1){if(o.flags|=2048,Mo(9,_h.bind(null,o,l,d,i),void 0,null),tn===null)throw Error(n(349));(Dr&30)!==0||vh(o,i,d)}return d}function vh(t,i,o){t.flags|=16384,t={getSnapshot:i,value:o},i=zt.updateQueue,i===null?(i={lastEffect:null,stores:null},zt.updateQueue=i,i.stores=[t]):(o=i.stores,o===null?i.stores=[t]:o.push(t))}function _h(t,i,o,l){i.value=o,i.getSnapshot=l,yh(i)&&Sh(t)}function xh(t,i,o){return o(function(){yh(i)&&Sh(t)})}function yh(t){var i=t.getSnapshot;t=t.value;try{var o=i();return!ni(t,o)}catch{return!0}}function Sh(t){var i=Ri(t,1);i!==null&&ai(i,t,1,-1)}function Mh(t){var i=_i();return typeof t=="function"&&(t=t()),i.memoizedState=i.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:So,lastRenderedState:t},i.queue=t,t=t.dispatch=Rv.bind(null,zt,t),[i.memoizedState,t]}function Mo(t,i,o,l){return t={tag:t,create:i,destroy:o,deps:l,next:null},i=zt.updateQueue,i===null?(i={lastEffect:null,stores:null},zt.updateQueue=i,i.lastEffect=t.next=t):(o=i.lastEffect,o===null?i.lastEffect=t.next=t:(l=o.next,o.next=t,t.next=l,i.lastEffect=t)),t}function Eh(){return Xn().memoizedState}function Aa(t,i,o,l){var d=_i();zt.flags|=t,d.memoizedState=Mo(1|i,o,void 0,l===void 0?null:l)}function Ca(t,i,o,l){var d=Xn();l=l===void 0?null:l;var h=void 0;if(Kt!==null){var M=Kt.memoizedState;if(h=M.destroy,l!==null&&Fc(l,M.deps)){d.memoizedState=Mo(i,o,h,l);return}}zt.flags|=t,d.memoizedState=Mo(1|i,o,h,l)}function Th(t,i){return Aa(8390656,8,t,i)}function Vc(t,i){return Ca(2048,8,t,i)}function wh(t,i){return Ca(4,2,t,i)}function Ah(t,i){return Ca(4,4,t,i)}function Ch(t,i){if(typeof i=="function")return t=t(),i(t),function(){i(null)};if(i!=null)return t=t(),i.current=t,function(){i.current=null}}function bh(t,i,o){return o=o!=null?o.concat([t]):null,Ca(4,4,Ch.bind(null,i,t),o)}function Gc(){}function Rh(t,i){var o=Xn();i=i===void 0?null:i;var l=o.memoizedState;return l!==null&&i!==null&&Fc(i,l[1])?l[0]:(o.memoizedState=[t,i],t)}function Ph(t,i){var o=Xn();i=i===void 0?null:i;var l=o.memoizedState;return l!==null&&i!==null&&Fc(i,l[1])?l[0]:(t=t(),o.memoizedState=[t,i],t)}function Dh(t,i,o){return(Dr&21)===0?(t.baseState&&(t.baseState=!1,An=!0),t.memoizedState=o):(ni(o,i)||(o=gn(),zt.lanes|=o,Nr|=o,t.baseState=!0),i)}function Cv(t,i){var o=Pt;Pt=o!==0&&4>o?o:4,t(!0);var l=kc.transition;kc.transition={};try{t(!1),i()}finally{Pt=o,kc.transition=l}}function Nh(){return Xn().memoizedState}function bv(t,i,o){var l=lr(t);if(o={lane:l,action:o,hasEagerState:!1,eagerState:null,next:null},Lh(t))Ih(i,o);else if(o=uh(t,i,o,l),o!==null){var d=_n();ai(o,t,l,d),Uh(o,i,l)}}function Rv(t,i,o){var l=lr(t),d={lane:l,action:o,hasEagerState:!1,eagerState:null,next:null};if(Lh(t))Ih(i,d);else{var h=t.alternate;if(t.lanes===0&&(h===null||h.lanes===0)&&(h=i.lastRenderedReducer,h!==null))try{var M=i.lastRenderedState,I=h(M,o);if(d.hasEagerState=!0,d.eagerState=I,ni(I,M)){var O=i.interleaved;O===null?(d.next=d,Pc(i)):(d.next=O.next,O.next=d),i.interleaved=d;return}}catch{}finally{}o=uh(t,i,d,l),o!==null&&(d=_n(),ai(o,t,l,d),Uh(o,i,l))}}function Lh(t){var i=t.alternate;return t===zt||i!==null&&i===zt}function Ih(t,i){xo=wa=!0;var o=t.pending;o===null?i.next=i:(i.next=o.next,o.next=i),t.pending=i}function Uh(t,i,o){if((o&4194240)!==0){var l=i.lanes;l&=t.pendingLanes,o|=l,i.lanes=o,jl(t,o)}}var ba={readContext:jn,useCallback:un,useContext:un,useEffect:un,useImperativeHandle:un,useInsertionEffect:un,useLayoutEffect:un,useMemo:un,useReducer:un,useRef:un,useState:un,useDebugValue:un,useDeferredValue:un,useTransition:un,useMutableSource:un,useSyncExternalStore:un,useId:un,unstable_isNewReconciler:!1},Pv={readContext:jn,useCallback:function(t,i){return _i().memoizedState=[t,i===void 0?null:i],t},useContext:jn,useEffect:Th,useImperativeHandle:function(t,i,o){return o=o!=null?o.concat([t]):null,Aa(4194308,4,Ch.bind(null,i,t),o)},useLayoutEffect:function(t,i){return Aa(4194308,4,t,i)},useInsertionEffect:function(t,i){return Aa(4,2,t,i)},useMemo:function(t,i){var o=_i();return i=i===void 0?null:i,t=t(),o.memoizedState=[t,i],t},useReducer:function(t,i,o){var l=_i();return i=o!==void 0?o(i):i,l.memoizedState=l.baseState=i,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:i},l.queue=t,t=t.dispatch=bv.bind(null,zt,t),[l.memoizedState,t]},useRef:function(t){var i=_i();return t={current:t},i.memoizedState=t},useState:Mh,useDebugValue:Gc,useDeferredValue:function(t){return _i().memoizedState=t},useTransition:function(){var t=Mh(!1),i=t[0];return t=Cv.bind(null,t[1]),_i().memoizedState=t,[i,t]},useMutableSource:function(){},useSyncExternalStore:function(t,i,o){var l=zt,d=_i();if(Ft){if(o===void 0)throw Error(n(407));o=o()}else{if(o=i(),tn===null)throw Error(n(349));(Dr&30)!==0||vh(l,i,o)}d.memoizedState=o;var h={value:o,getSnapshot:i};return d.queue=h,Th(xh.bind(null,l,h,t),[t]),l.flags|=2048,Mo(9,_h.bind(null,l,h,o,i),void 0,null),o},useId:function(){var t=_i(),i=tn.identifierPrefix;if(Ft){var o=bi,l=Ci;o=(l&~(1<<32-lt(l)-1)).toString(32)+o,i=":"+i+"R"+o,o=yo++,0<o&&(i+="H"+o.toString(32)),i+=":"}else o=Av++,i=":"+i+"r"+o.toString(32)+":";return t.memoizedState=i},unstable_isNewReconciler:!1},Dv={readContext:jn,useCallback:Rh,useContext:jn,useEffect:Vc,useImperativeHandle:bh,useInsertionEffect:wh,useLayoutEffect:Ah,useMemo:Ph,useReducer:Bc,useRef:Eh,useState:function(){return Bc(So)},useDebugValue:Gc,useDeferredValue:function(t){var i=Xn();return Dh(i,Kt.memoizedState,t)},useTransition:function(){var t=Bc(So)[0],i=Xn().memoizedState;return[t,i]},useMutableSource:mh,useSyncExternalStore:gh,useId:Nh,unstable_isNewReconciler:!1},Nv={readContext:jn,useCallback:Rh,useContext:jn,useEffect:Vc,useImperativeHandle:bh,useInsertionEffect:wh,useLayoutEffect:Ah,useMemo:Ph,useReducer:Hc,useRef:Eh,useState:function(){return Hc(So)},useDebugValue:Gc,useDeferredValue:function(t){var i=Xn();return Kt===null?i.memoizedState=t:Dh(i,Kt.memoizedState,t)},useTransition:function(){var t=Hc(So)[0],i=Xn().memoizedState;return[t,i]},useMutableSource:mh,useSyncExternalStore:gh,useId:Nh,unstable_isNewReconciler:!1};function ri(t,i){if(t&&t.defaultProps){i=re({},i),t=t.defaultProps;for(var o in t)i[o]===void 0&&(i[o]=t[o]);return i}return i}function Wc(t,i,o,l){i=t.memoizedState,o=o(l,i),o=o==null?i:re({},i,o),t.memoizedState=o,t.lanes===0&&(t.updateQueue.baseState=o)}var Ra={isMounted:function(t){return(t=t._reactInternals)?pi(t)===t:!1},enqueueSetState:function(t,i,o){t=t._reactInternals;var l=_n(),d=lr(t),h=Pi(l,d);h.payload=i,o!=null&&(h.callback=o),i=rr(t,h,d),i!==null&&(ai(i,t,d,l),Sa(i,t,d))},enqueueReplaceState:function(t,i,o){t=t._reactInternals;var l=_n(),d=lr(t),h=Pi(l,d);h.tag=1,h.payload=i,o!=null&&(h.callback=o),i=rr(t,h,d),i!==null&&(ai(i,t,d,l),Sa(i,t,d))},enqueueForceUpdate:function(t,i){t=t._reactInternals;var o=_n(),l=lr(t),d=Pi(o,l);d.tag=2,i!=null&&(d.callback=i),i=rr(t,d,l),i!==null&&(ai(i,t,l,o),Sa(i,t,l))}};function kh(t,i,o,l,d,h,M){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(l,h,M):i.prototype&&i.prototype.isPureReactComponent?!ao(o,l)||!ao(d,h):!0}function Fh(t,i,o){var l=!1,d=tr,h=i.contextType;return typeof h=="object"&&h!==null?h=jn(h):(d=wn(i)?Ar:cn.current,l=i.contextTypes,h=(l=l!=null)?cs(t,d):tr),i=new i(o,h),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Ra,t.stateNode=i,i._reactInternals=t,l&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=d,t.__reactInternalMemoizedMaskedChildContext=h),i}function Oh(t,i,o,l){t=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(o,l),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(o,l),i.state!==t&&Ra.enqueueReplaceState(i,i.state,null)}function jc(t,i,o,l){var d=t.stateNode;d.props=o,d.state=t.memoizedState,d.refs={},Dc(t);var h=i.contextType;typeof h=="object"&&h!==null?d.context=jn(h):(h=wn(i)?Ar:cn.current,d.context=cs(t,h)),d.state=t.memoizedState,h=i.getDerivedStateFromProps,typeof h=="function"&&(Wc(t,i,h,o),d.state=t.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(i=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),i!==d.state&&Ra.enqueueReplaceState(d,d.state,null),Ma(t,o,d,l),d.state=t.memoizedState),typeof d.componentDidMount=="function"&&(t.flags|=4194308)}function vs(t,i){try{var o="",l=i;do o+=ue(l),l=l.return;while(l);var d=o}catch(h){d=`
Error generating stack: `+h.message+`
`+h.stack}return{value:t,source:i,stack:d,digest:null}}function Xc(t,i,o){return{value:t,source:null,stack:o??null,digest:i??null}}function Yc(t,i){try{console.error(i.value)}catch(o){setTimeout(function(){throw o})}}var Lv=typeof WeakMap=="function"?WeakMap:Map;function zh(t,i,o){o=Pi(-1,o),o.tag=3,o.payload={element:null};var l=i.value;return o.callback=function(){ka||(ka=!0,lu=l),Yc(t,i)},o}function Bh(t,i,o){o=Pi(-1,o),o.tag=3;var l=t.type.getDerivedStateFromError;if(typeof l=="function"){var d=i.value;o.payload=function(){return l(d)},o.callback=function(){Yc(t,i)}}var h=t.stateNode;return h!==null&&typeof h.componentDidCatch=="function"&&(o.callback=function(){Yc(t,i),typeof l!="function"&&(or===null?or=new Set([this]):or.add(this));var M=i.stack;this.componentDidCatch(i.value,{componentStack:M!==null?M:""})}),o}function Hh(t,i,o){var l=t.pingCache;if(l===null){l=t.pingCache=new Lv;var d=new Set;l.set(i,d)}else d=l.get(i),d===void 0&&(d=new Set,l.set(i,d));d.has(o)||(d.add(o),t=Yv.bind(null,t,i,o),i.then(t,t))}function Vh(t){do{var i;if((i=t.tag===13)&&(i=t.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return t;t=t.return}while(t!==null);return null}function Gh(t,i,o,l,d){return(t.mode&1)===0?(t===i?t.flags|=65536:(t.flags|=128,o.flags|=131072,o.flags&=-52805,o.tag===1&&(o.alternate===null?o.tag=17:(i=Pi(-1,1),i.tag=2,rr(o,i,1))),o.lanes|=1),t):(t.flags|=65536,t.lanes=d,t)}var Iv=A.ReactCurrentOwner,An=!1;function vn(t,i,o,l){i.child=t===null?ch(i,null,o,l):hs(i,t.child,o,l)}function Wh(t,i,o,l,d){o=o.render;var h=i.ref;return ms(i,d),l=Oc(t,i,o,l,h,d),o=zc(),t!==null&&!An?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~d,Di(t,i,d)):(Ft&&o&&Sc(i),i.flags|=1,vn(t,i,l,d),i.child)}function jh(t,i,o,l,d){if(t===null){var h=o.type;return typeof h=="function"&&!mu(h)&&h.defaultProps===void 0&&o.compare===null&&o.defaultProps===void 0?(i.tag=15,i.type=h,Xh(t,i,h,l,d)):(t=Va(o.type,null,l,i,i.mode,d),t.ref=i.ref,t.return=i,i.child=t)}if(h=t.child,(t.lanes&d)===0){var M=h.memoizedProps;if(o=o.compare,o=o!==null?o:ao,o(M,l)&&t.ref===i.ref)return Di(t,i,d)}return i.flags|=1,t=ur(h,l),t.ref=i.ref,t.return=i,i.child=t}function Xh(t,i,o,l,d){if(t!==null){var h=t.memoizedProps;if(ao(h,l)&&t.ref===i.ref)if(An=!1,i.pendingProps=l=h,(t.lanes&d)!==0)(t.flags&131072)!==0&&(An=!0);else return i.lanes=t.lanes,Di(t,i,d)}return qc(t,i,o,l,d)}function Yh(t,i,o){var l=i.pendingProps,d=l.children,h=t!==null?t.memoizedState:null;if(l.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},Lt(xs,Fn),Fn|=o;else{if((o&1073741824)===0)return t=h!==null?h.baseLanes|o:o,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:t,cachePool:null,transitions:null},i.updateQueue=null,Lt(xs,Fn),Fn|=t,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},l=h!==null?h.baseLanes:o,Lt(xs,Fn),Fn|=l}else h!==null?(l=h.baseLanes|o,i.memoizedState=null):l=o,Lt(xs,Fn),Fn|=l;return vn(t,i,d,o),i.child}function qh(t,i){var o=i.ref;(t===null&&o!==null||t!==null&&t.ref!==o)&&(i.flags|=512,i.flags|=2097152)}function qc(t,i,o,l,d){var h=wn(o)?Ar:cn.current;return h=cs(i,h),ms(i,d),o=Oc(t,i,o,l,h,d),l=zc(),t!==null&&!An?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~d,Di(t,i,d)):(Ft&&l&&Sc(i),i.flags|=1,vn(t,i,o,d),i.child)}function $h(t,i,o,l,d){if(wn(o)){var h=!0;ha(i)}else h=!1;if(ms(i,d),i.stateNode===null)Da(t,i),Fh(i,o,l),jc(i,o,l,d),l=!0;else if(t===null){var M=i.stateNode,I=i.memoizedProps;M.props=I;var O=M.context,ee=o.contextType;typeof ee=="object"&&ee!==null?ee=jn(ee):(ee=wn(o)?Ar:cn.current,ee=cs(i,ee));var xe=o.getDerivedStateFromProps,ye=typeof xe=="function"||typeof M.getSnapshotBeforeUpdate=="function";ye||typeof M.UNSAFE_componentWillReceiveProps!="function"&&typeof M.componentWillReceiveProps!="function"||(I!==l||O!==ee)&&Oh(i,M,l,ee),ir=!1;var ge=i.memoizedState;M.state=ge,Ma(i,l,M,d),O=i.memoizedState,I!==l||ge!==O||Tn.current||ir?(typeof xe=="function"&&(Wc(i,o,xe,l),O=i.memoizedState),(I=ir||kh(i,o,I,l,ge,O,ee))?(ye||typeof M.UNSAFE_componentWillMount!="function"&&typeof M.componentWillMount!="function"||(typeof M.componentWillMount=="function"&&M.componentWillMount(),typeof M.UNSAFE_componentWillMount=="function"&&M.UNSAFE_componentWillMount()),typeof M.componentDidMount=="function"&&(i.flags|=4194308)):(typeof M.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=l,i.memoizedState=O),M.props=l,M.state=O,M.context=ee,l=I):(typeof M.componentDidMount=="function"&&(i.flags|=4194308),l=!1)}else{M=i.stateNode,dh(t,i),I=i.memoizedProps,ee=i.type===i.elementType?I:ri(i.type,I),M.props=ee,ye=i.pendingProps,ge=M.context,O=o.contextType,typeof O=="object"&&O!==null?O=jn(O):(O=wn(o)?Ar:cn.current,O=cs(i,O));var Ie=o.getDerivedStateFromProps;(xe=typeof Ie=="function"||typeof M.getSnapshotBeforeUpdate=="function")||typeof M.UNSAFE_componentWillReceiveProps!="function"&&typeof M.componentWillReceiveProps!="function"||(I!==ye||ge!==O)&&Oh(i,M,l,O),ir=!1,ge=i.memoizedState,M.state=ge,Ma(i,l,M,d);var Be=i.memoizedState;I!==ye||ge!==Be||Tn.current||ir?(typeof Ie=="function"&&(Wc(i,o,Ie,l),Be=i.memoizedState),(ee=ir||kh(i,o,ee,l,ge,Be,O)||!1)?(xe||typeof M.UNSAFE_componentWillUpdate!="function"&&typeof M.componentWillUpdate!="function"||(typeof M.componentWillUpdate=="function"&&M.componentWillUpdate(l,Be,O),typeof M.UNSAFE_componentWillUpdate=="function"&&M.UNSAFE_componentWillUpdate(l,Be,O)),typeof M.componentDidUpdate=="function"&&(i.flags|=4),typeof M.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof M.componentDidUpdate!="function"||I===t.memoizedProps&&ge===t.memoizedState||(i.flags|=4),typeof M.getSnapshotBeforeUpdate!="function"||I===t.memoizedProps&&ge===t.memoizedState||(i.flags|=1024),i.memoizedProps=l,i.memoizedState=Be),M.props=l,M.state=Be,M.context=O,l=ee):(typeof M.componentDidUpdate!="function"||I===t.memoizedProps&&ge===t.memoizedState||(i.flags|=4),typeof M.getSnapshotBeforeUpdate!="function"||I===t.memoizedProps&&ge===t.memoizedState||(i.flags|=1024),l=!1)}return $c(t,i,o,l,h,d)}function $c(t,i,o,l,d,h){qh(t,i);var M=(i.flags&128)!==0;if(!l&&!M)return d&&eh(i,o,!1),Di(t,i,h);l=i.stateNode,Iv.current=i;var I=M&&typeof o.getDerivedStateFromError!="function"?null:l.render();return i.flags|=1,t!==null&&M?(i.child=hs(i,t.child,null,h),i.child=hs(i,null,I,h)):vn(t,i,I,h),i.memoizedState=l.state,d&&eh(i,o,!0),i.child}function Kh(t){var i=t.stateNode;i.pendingContext?Qf(t,i.pendingContext,i.pendingContext!==i.context):i.context&&Qf(t,i.context,!1),Nc(t,i.containerInfo)}function Zh(t,i,o,l,d){return fs(),wc(d),i.flags|=256,vn(t,i,o,l),i.child}var Kc={dehydrated:null,treeContext:null,retryLane:0};function Zc(t){return{baseLanes:t,cachePool:null,transitions:null}}function Qh(t,i,o){var l=i.pendingProps,d=Ot.current,h=!1,M=(i.flags&128)!==0,I;if((I=M)||(I=t!==null&&t.memoizedState===null?!1:(d&2)!==0),I?(h=!0,i.flags&=-129):(t===null||t.memoizedState!==null)&&(d|=1),Lt(Ot,d&1),t===null)return Tc(i),t=i.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?((i.mode&1)===0?i.lanes=1:t.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(M=l.children,t=l.fallback,h?(l=i.mode,h=i.child,M={mode:"hidden",children:M},(l&1)===0&&h!==null?(h.childLanes=0,h.pendingProps=M):h=Ga(M,l,0,null),t=kr(t,l,o,null),h.return=i,t.return=i,h.sibling=t,i.child=h,i.child.memoizedState=Zc(o),i.memoizedState=Kc,t):Qc(i,M));if(d=t.memoizedState,d!==null&&(I=d.dehydrated,I!==null))return Uv(t,i,M,l,I,d,o);if(h){h=l.fallback,M=i.mode,d=t.child,I=d.sibling;var O={mode:"hidden",children:l.children};return(M&1)===0&&i.child!==d?(l=i.child,l.childLanes=0,l.pendingProps=O,i.deletions=null):(l=ur(d,O),l.subtreeFlags=d.subtreeFlags&14680064),I!==null?h=ur(I,h):(h=kr(h,M,o,null),h.flags|=2),h.return=i,l.return=i,l.sibling=h,i.child=l,l=h,h=i.child,M=t.child.memoizedState,M=M===null?Zc(o):{baseLanes:M.baseLanes|o,cachePool:null,transitions:M.transitions},h.memoizedState=M,h.childLanes=t.childLanes&~o,i.memoizedState=Kc,l}return h=t.child,t=h.sibling,l=ur(h,{mode:"visible",children:l.children}),(i.mode&1)===0&&(l.lanes=o),l.return=i,l.sibling=null,t!==null&&(o=i.deletions,o===null?(i.deletions=[t],i.flags|=16):o.push(t)),i.child=l,i.memoizedState=null,l}function Qc(t,i){return i=Ga({mode:"visible",children:i},t.mode,0,null),i.return=t,t.child=i}function Pa(t,i,o,l){return l!==null&&wc(l),hs(i,t.child,null,o),t=Qc(i,i.pendingProps.children),t.flags|=2,i.memoizedState=null,t}function Uv(t,i,o,l,d,h,M){if(o)return i.flags&256?(i.flags&=-257,l=Xc(Error(n(422))),Pa(t,i,M,l)):i.memoizedState!==null?(i.child=t.child,i.flags|=128,null):(h=l.fallback,d=i.mode,l=Ga({mode:"visible",children:l.children},d,0,null),h=kr(h,d,M,null),h.flags|=2,l.return=i,h.return=i,l.sibling=h,i.child=l,(i.mode&1)!==0&&hs(i,t.child,null,M),i.child.memoizedState=Zc(M),i.memoizedState=Kc,h);if((i.mode&1)===0)return Pa(t,i,M,null);if(d.data==="$!"){if(l=d.nextSibling&&d.nextSibling.dataset,l)var I=l.dgst;return l=I,h=Error(n(419)),l=Xc(h,l,void 0),Pa(t,i,M,l)}if(I=(M&t.childLanes)!==0,An||I){if(l=tn,l!==null){switch(M&-M){case 4:d=2;break;case 16:d=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:d=32;break;case 536870912:d=268435456;break;default:d=0}d=(d&(l.suspendedLanes|M))!==0?0:d,d!==0&&d!==h.retryLane&&(h.retryLane=d,Ri(t,d),ai(l,t,d,-1))}return pu(),l=Xc(Error(n(421))),Pa(t,i,M,l)}return d.data==="$?"?(i.flags|=128,i.child=t.child,i=qv.bind(null,t),d._reactRetry=i,null):(t=h.treeContext,kn=Ji(d.nextSibling),Un=i,Ft=!0,ii=null,t!==null&&(Gn[Wn++]=Ci,Gn[Wn++]=bi,Gn[Wn++]=Cr,Ci=t.id,bi=t.overflow,Cr=i),i=Qc(i,l.children),i.flags|=4096,i)}function Jh(t,i,o){t.lanes|=i;var l=t.alternate;l!==null&&(l.lanes|=i),Rc(t.return,i,o)}function Jc(t,i,o,l,d){var h=t.memoizedState;h===null?t.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:l,tail:o,tailMode:d}:(h.isBackwards=i,h.rendering=null,h.renderingStartTime=0,h.last=l,h.tail=o,h.tailMode=d)}function ep(t,i,o){var l=i.pendingProps,d=l.revealOrder,h=l.tail;if(vn(t,i,l.children,o),l=Ot.current,(l&2)!==0)l=l&1|2,i.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=i.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Jh(t,o,i);else if(t.tag===19)Jh(t,o,i);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===i)break e;for(;t.sibling===null;){if(t.return===null||t.return===i)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}l&=1}if(Lt(Ot,l),(i.mode&1)===0)i.memoizedState=null;else switch(d){case"forwards":for(o=i.child,d=null;o!==null;)t=o.alternate,t!==null&&Ea(t)===null&&(d=o),o=o.sibling;o=d,o===null?(d=i.child,i.child=null):(d=o.sibling,o.sibling=null),Jc(i,!1,d,o,h);break;case"backwards":for(o=null,d=i.child,i.child=null;d!==null;){if(t=d.alternate,t!==null&&Ea(t)===null){i.child=d;break}t=d.sibling,d.sibling=o,o=d,d=t}Jc(i,!0,o,null,h);break;case"together":Jc(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function Da(t,i){(i.mode&1)===0&&t!==null&&(t.alternate=null,i.alternate=null,i.flags|=2)}function Di(t,i,o){if(t!==null&&(i.dependencies=t.dependencies),Nr|=i.lanes,(o&i.childLanes)===0)return null;if(t!==null&&i.child!==t.child)throw Error(n(153));if(i.child!==null){for(t=i.child,o=ur(t,t.pendingProps),i.child=o,o.return=i;t.sibling!==null;)t=t.sibling,o=o.sibling=ur(t,t.pendingProps),o.return=i;o.sibling=null}return i.child}function kv(t,i,o){switch(i.tag){case 3:Kh(i),fs();break;case 5:ph(i);break;case 1:wn(i.type)&&ha(i);break;case 4:Nc(i,i.stateNode.containerInfo);break;case 10:var l=i.type._context,d=i.memoizedProps.value;Lt(xa,l._currentValue),l._currentValue=d;break;case 13:if(l=i.memoizedState,l!==null)return l.dehydrated!==null?(Lt(Ot,Ot.current&1),i.flags|=128,null):(o&i.child.childLanes)!==0?Qh(t,i,o):(Lt(Ot,Ot.current&1),t=Di(t,i,o),t!==null?t.sibling:null);Lt(Ot,Ot.current&1);break;case 19:if(l=(o&i.childLanes)!==0,(t.flags&128)!==0){if(l)return ep(t,i,o);i.flags|=128}if(d=i.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),Lt(Ot,Ot.current),l)break;return null;case 22:case 23:return i.lanes=0,Yh(t,i,o)}return Di(t,i,o)}var tp,eu,np,ip;tp=function(t,i){for(var o=i.child;o!==null;){if(o.tag===5||o.tag===6)t.appendChild(o.stateNode);else if(o.tag!==4&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===i)break;for(;o.sibling===null;){if(o.return===null||o.return===i)return;o=o.return}o.sibling.return=o.return,o=o.sibling}},eu=function(){},np=function(t,i,o,l){var d=t.memoizedProps;if(d!==l){t=i.stateNode,Pr(vi.current);var h=null;switch(o){case"input":d=V(t,d),l=V(t,l),h=[];break;case"select":d=re({},d,{value:void 0}),l=re({},l,{value:void 0}),h=[];break;case"textarea":d=w(t,d),l=w(t,l),h=[];break;default:typeof d.onClick!="function"&&typeof l.onClick=="function"&&(t.onclick=ua)}ht(o,l);var M;o=null;for(ee in d)if(!l.hasOwnProperty(ee)&&d.hasOwnProperty(ee)&&d[ee]!=null)if(ee==="style"){var I=d[ee];for(M in I)I.hasOwnProperty(M)&&(o||(o={}),o[M]="")}else ee!=="dangerouslySetInnerHTML"&&ee!=="children"&&ee!=="suppressContentEditableWarning"&&ee!=="suppressHydrationWarning"&&ee!=="autoFocus"&&(a.hasOwnProperty(ee)?h||(h=[]):(h=h||[]).push(ee,null));for(ee in l){var O=l[ee];if(I=d!=null?d[ee]:void 0,l.hasOwnProperty(ee)&&O!==I&&(O!=null||I!=null))if(ee==="style")if(I){for(M in I)!I.hasOwnProperty(M)||O&&O.hasOwnProperty(M)||(o||(o={}),o[M]="");for(M in O)O.hasOwnProperty(M)&&I[M]!==O[M]&&(o||(o={}),o[M]=O[M])}else o||(h||(h=[]),h.push(ee,o)),o=O;else ee==="dangerouslySetInnerHTML"?(O=O?O.__html:void 0,I=I?I.__html:void 0,O!=null&&I!==O&&(h=h||[]).push(ee,O)):ee==="children"?typeof O!="string"&&typeof O!="number"||(h=h||[]).push(ee,""+O):ee!=="suppressContentEditableWarning"&&ee!=="suppressHydrationWarning"&&(a.hasOwnProperty(ee)?(O!=null&&ee==="onScroll"&&Ut("scroll",t),h||I===O||(h=[])):(h=h||[]).push(ee,O))}o&&(h=h||[]).push("style",o);var ee=h;(i.updateQueue=ee)&&(i.flags|=4)}},ip=function(t,i,o,l){o!==l&&(i.flags|=4)};function Eo(t,i){if(!Ft)switch(t.tailMode){case"hidden":i=t.tail;for(var o=null;i!==null;)i.alternate!==null&&(o=i),i=i.sibling;o===null?t.tail=null:o.sibling=null;break;case"collapsed":o=t.tail;for(var l=null;o!==null;)o.alternate!==null&&(l=o),o=o.sibling;l===null?i||t.tail===null?t.tail=null:t.tail.sibling=null:l.sibling=null}}function dn(t){var i=t.alternate!==null&&t.alternate.child===t.child,o=0,l=0;if(i)for(var d=t.child;d!==null;)o|=d.lanes|d.childLanes,l|=d.subtreeFlags&14680064,l|=d.flags&14680064,d.return=t,d=d.sibling;else for(d=t.child;d!==null;)o|=d.lanes|d.childLanes,l|=d.subtreeFlags,l|=d.flags,d.return=t,d=d.sibling;return t.subtreeFlags|=l,t.childLanes=o,i}function Fv(t,i,o){var l=i.pendingProps;switch(Mc(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return dn(i),null;case 1:return wn(i.type)&&fa(),dn(i),null;case 3:return l=i.stateNode,gs(),kt(Tn),kt(cn),Uc(),l.pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),(t===null||t.child===null)&&(va(i)?i.flags|=4:t===null||t.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,ii!==null&&(du(ii),ii=null))),eu(t,i),dn(i),null;case 5:Lc(i);var d=Pr(_o.current);if(o=i.type,t!==null&&i.stateNode!=null)np(t,i,o,l,d),t.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!l){if(i.stateNode===null)throw Error(n(166));return dn(i),null}if(t=Pr(vi.current),va(i)){l=i.stateNode,o=i.type;var h=i.memoizedProps;switch(l[gi]=i,l[ho]=h,t=(i.mode&1)!==0,o){case"dialog":Ut("cancel",l),Ut("close",l);break;case"iframe":case"object":case"embed":Ut("load",l);break;case"video":case"audio":for(d=0;d<co.length;d++)Ut(co[d],l);break;case"source":Ut("error",l);break;case"img":case"image":case"link":Ut("error",l),Ut("load",l);break;case"details":Ut("toggle",l);break;case"input":Bt(l,h),Ut("invalid",l);break;case"select":l._wrapperState={wasMultiple:!!h.multiple},Ut("invalid",l);break;case"textarea":Q(l,h),Ut("invalid",l)}ht(o,h),d=null;for(var M in h)if(h.hasOwnProperty(M)){var I=h[M];M==="children"?typeof I=="string"?l.textContent!==I&&(h.suppressHydrationWarning!==!0&&ca(l.textContent,I,t),d=["children",I]):typeof I=="number"&&l.textContent!==""+I&&(h.suppressHydrationWarning!==!0&&ca(l.textContent,I,t),d=["children",""+I]):a.hasOwnProperty(M)&&I!=null&&M==="onScroll"&&Ut("scroll",l)}switch(o){case"input":wt(l),$e(l,h,!0);break;case"textarea":wt(l),_e(l);break;case"select":case"option":break;default:typeof h.onClick=="function"&&(l.onclick=ua)}l=d,i.updateQueue=l,l!==null&&(i.flags|=4)}else{M=d.nodeType===9?d:d.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=fe(o)),t==="http://www.w3.org/1999/xhtml"?o==="script"?(t=M.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof l.is=="string"?t=M.createElement(o,{is:l.is}):(t=M.createElement(o),o==="select"&&(M=t,l.multiple?M.multiple=!0:l.size&&(M.size=l.size))):t=M.createElementNS(t,o),t[gi]=i,t[ho]=l,tp(t,i,!1,!1),i.stateNode=t;e:{switch(M=st(o,l),o){case"dialog":Ut("cancel",t),Ut("close",t),d=l;break;case"iframe":case"object":case"embed":Ut("load",t),d=l;break;case"video":case"audio":for(d=0;d<co.length;d++)Ut(co[d],t);d=l;break;case"source":Ut("error",t),d=l;break;case"img":case"image":case"link":Ut("error",t),Ut("load",t),d=l;break;case"details":Ut("toggle",t),d=l;break;case"input":Bt(t,l),d=V(t,l),Ut("invalid",t);break;case"option":d=l;break;case"select":t._wrapperState={wasMultiple:!!l.multiple},d=re({},l,{value:void 0}),Ut("invalid",t);break;case"textarea":Q(t,l),d=w(t,l),Ut("invalid",t);break;default:d=l}ht(o,d),I=d;for(h in I)if(I.hasOwnProperty(h)){var O=I[h];h==="style"?et(t,O):h==="dangerouslySetInnerHTML"?(O=O?O.__html:void 0,O!=null&&Ue(t,O)):h==="children"?typeof O=="string"?(o!=="textarea"||O!=="")&&ft(t,O):typeof O=="number"&&ft(t,""+O):h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&h!=="autoFocus"&&(a.hasOwnProperty(h)?O!=null&&h==="onScroll"&&Ut("scroll",t):O!=null&&N(t,h,O,M))}switch(o){case"input":wt(t),$e(t,l,!1);break;case"textarea":wt(t),_e(t);break;case"option":l.value!=null&&t.setAttribute("value",""+Ae(l.value));break;case"select":t.multiple=!!l.multiple,h=l.value,h!=null?L(t,!!l.multiple,h,!1):l.defaultValue!=null&&L(t,!!l.multiple,l.defaultValue,!0);break;default:typeof d.onClick=="function"&&(t.onclick=ua)}switch(o){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}}l&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return dn(i),null;case 6:if(t&&i.stateNode!=null)ip(t,i,t.memoizedProps,l);else{if(typeof l!="string"&&i.stateNode===null)throw Error(n(166));if(o=Pr(_o.current),Pr(vi.current),va(i)){if(l=i.stateNode,o=i.memoizedProps,l[gi]=i,(h=l.nodeValue!==o)&&(t=Un,t!==null))switch(t.tag){case 3:ca(l.nodeValue,o,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&ca(l.nodeValue,o,(t.mode&1)!==0)}h&&(i.flags|=4)}else l=(o.nodeType===9?o:o.ownerDocument).createTextNode(l),l[gi]=i,i.stateNode=l}return dn(i),null;case 13:if(kt(Ot),l=i.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Ft&&kn!==null&&(i.mode&1)!==0&&(i.flags&128)===0)oh(),fs(),i.flags|=98560,h=!1;else if(h=va(i),l!==null&&l.dehydrated!==null){if(t===null){if(!h)throw Error(n(318));if(h=i.memoizedState,h=h!==null?h.dehydrated:null,!h)throw Error(n(317));h[gi]=i}else fs(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;dn(i),h=!1}else ii!==null&&(du(ii),ii=null),h=!0;if(!h)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=o,i):(l=l!==null,l!==(t!==null&&t.memoizedState!==null)&&l&&(i.child.flags|=8192,(i.mode&1)!==0&&(t===null||(Ot.current&1)!==0?Zt===0&&(Zt=3):pu())),i.updateQueue!==null&&(i.flags|=4),dn(i),null);case 4:return gs(),eu(t,i),t===null&&uo(i.stateNode.containerInfo),dn(i),null;case 10:return bc(i.type._context),dn(i),null;case 17:return wn(i.type)&&fa(),dn(i),null;case 19:if(kt(Ot),h=i.memoizedState,h===null)return dn(i),null;if(l=(i.flags&128)!==0,M=h.rendering,M===null)if(l)Eo(h,!1);else{if(Zt!==0||t!==null&&(t.flags&128)!==0)for(t=i.child;t!==null;){if(M=Ea(t),M!==null){for(i.flags|=128,Eo(h,!1),l=M.updateQueue,l!==null&&(i.updateQueue=l,i.flags|=4),i.subtreeFlags=0,l=o,o=i.child;o!==null;)h=o,t=l,h.flags&=14680066,M=h.alternate,M===null?(h.childLanes=0,h.lanes=t,h.child=null,h.subtreeFlags=0,h.memoizedProps=null,h.memoizedState=null,h.updateQueue=null,h.dependencies=null,h.stateNode=null):(h.childLanes=M.childLanes,h.lanes=M.lanes,h.child=M.child,h.subtreeFlags=0,h.deletions=null,h.memoizedProps=M.memoizedProps,h.memoizedState=M.memoizedState,h.updateQueue=M.updateQueue,h.type=M.type,t=M.dependencies,h.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),o=o.sibling;return Lt(Ot,Ot.current&1|2),i.child}t=t.sibling}h.tail!==null&&Ee()>ys&&(i.flags|=128,l=!0,Eo(h,!1),i.lanes=4194304)}else{if(!l)if(t=Ea(M),t!==null){if(i.flags|=128,l=!0,o=t.updateQueue,o!==null&&(i.updateQueue=o,i.flags|=4),Eo(h,!0),h.tail===null&&h.tailMode==="hidden"&&!M.alternate&&!Ft)return dn(i),null}else 2*Ee()-h.renderingStartTime>ys&&o!==1073741824&&(i.flags|=128,l=!0,Eo(h,!1),i.lanes=4194304);h.isBackwards?(M.sibling=i.child,i.child=M):(o=h.last,o!==null?o.sibling=M:i.child=M,h.last=M)}return h.tail!==null?(i=h.tail,h.rendering=i,h.tail=i.sibling,h.renderingStartTime=Ee(),i.sibling=null,o=Ot.current,Lt(Ot,l?o&1|2:o&1),i):(dn(i),null);case 22:case 23:return hu(),l=i.memoizedState!==null,t!==null&&t.memoizedState!==null!==l&&(i.flags|=8192),l&&(i.mode&1)!==0?(Fn&1073741824)!==0&&(dn(i),i.subtreeFlags&6&&(i.flags|=8192)):dn(i),null;case 24:return null;case 25:return null}throw Error(n(156,i.tag))}function Ov(t,i){switch(Mc(i),i.tag){case 1:return wn(i.type)&&fa(),t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 3:return gs(),kt(Tn),kt(cn),Uc(),t=i.flags,(t&65536)!==0&&(t&128)===0?(i.flags=t&-65537|128,i):null;case 5:return Lc(i),null;case 13:if(kt(Ot),t=i.memoizedState,t!==null&&t.dehydrated!==null){if(i.alternate===null)throw Error(n(340));fs()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 19:return kt(Ot),null;case 4:return gs(),null;case 10:return bc(i.type._context),null;case 22:case 23:return hu(),null;case 24:return null;default:return null}}var Na=!1,fn=!1,zv=typeof WeakSet=="function"?WeakSet:Set,ke=null;function _s(t,i){var o=t.ref;if(o!==null)if(typeof o=="function")try{o(null)}catch(l){Ht(t,i,l)}else o.current=null}function tu(t,i,o){try{o()}catch(l){Ht(t,i,l)}}var rp=!1;function Bv(t,i){if(hc=Qo,t=kf(),sc(t)){if("selectionStart"in t)var o={start:t.selectionStart,end:t.selectionEnd};else e:{o=(o=t.ownerDocument)&&o.defaultView||window;var l=o.getSelection&&o.getSelection();if(l&&l.rangeCount!==0){o=l.anchorNode;var d=l.anchorOffset,h=l.focusNode;l=l.focusOffset;try{o.nodeType,h.nodeType}catch{o=null;break e}var M=0,I=-1,O=-1,ee=0,xe=0,ye=t,ge=null;t:for(;;){for(var Ie;ye!==o||d!==0&&ye.nodeType!==3||(I=M+d),ye!==h||l!==0&&ye.nodeType!==3||(O=M+l),ye.nodeType===3&&(M+=ye.nodeValue.length),(Ie=ye.firstChild)!==null;)ge=ye,ye=Ie;for(;;){if(ye===t)break t;if(ge===o&&++ee===d&&(I=M),ge===h&&++xe===l&&(O=M),(Ie=ye.nextSibling)!==null)break;ye=ge,ge=ye.parentNode}ye=Ie}o=I===-1||O===-1?null:{start:I,end:O}}else o=null}o=o||{start:0,end:0}}else o=null;for(pc={focusedElem:t,selectionRange:o},Qo=!1,ke=i;ke!==null;)if(i=ke,t=i.child,(i.subtreeFlags&1028)!==0&&t!==null)t.return=i,ke=t;else for(;ke!==null;){i=ke;try{var Be=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(Be!==null){var Ve=Be.memoizedProps,Gt=Be.memoizedState,$=i.stateNode,G=$.getSnapshotBeforeUpdate(i.elementType===i.type?Ve:ri(i.type,Ve),Gt);$.__reactInternalSnapshotBeforeUpdate=G}break;case 3:var K=i.stateNode.containerInfo;K.nodeType===1?K.textContent="":K.nodeType===9&&K.documentElement&&K.removeChild(K.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(n(163))}}catch(Te){Ht(i,i.return,Te)}if(t=i.sibling,t!==null){t.return=i.return,ke=t;break}ke=i.return}return Be=rp,rp=!1,Be}function To(t,i,o){var l=i.updateQueue;if(l=l!==null?l.lastEffect:null,l!==null){var d=l=l.next;do{if((d.tag&t)===t){var h=d.destroy;d.destroy=void 0,h!==void 0&&tu(i,o,h)}d=d.next}while(d!==l)}}function La(t,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var o=i=i.next;do{if((o.tag&t)===t){var l=o.create;o.destroy=l()}o=o.next}while(o!==i)}}function nu(t){var i=t.ref;if(i!==null){var o=t.stateNode;switch(t.tag){case 5:t=o;break;default:t=o}typeof i=="function"?i(t):i.current=t}}function sp(t){var i=t.alternate;i!==null&&(t.alternate=null,sp(i)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(i=t.stateNode,i!==null&&(delete i[gi],delete i[ho],delete i[_c],delete i[Mv],delete i[Ev])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function op(t){return t.tag===5||t.tag===3||t.tag===4}function ap(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||op(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function iu(t,i,o){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?o.nodeType===8?o.parentNode.insertBefore(t,i):o.insertBefore(t,i):(o.nodeType===8?(i=o.parentNode,i.insertBefore(t,o)):(i=o,i.appendChild(t)),o=o._reactRootContainer,o!=null||i.onclick!==null||(i.onclick=ua));else if(l!==4&&(t=t.child,t!==null))for(iu(t,i,o),t=t.sibling;t!==null;)iu(t,i,o),t=t.sibling}function ru(t,i,o){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?o.insertBefore(t,i):o.appendChild(t);else if(l!==4&&(t=t.child,t!==null))for(ru(t,i,o),t=t.sibling;t!==null;)ru(t,i,o),t=t.sibling}var sn=null,si=!1;function sr(t,i,o){for(o=o.child;o!==null;)lp(t,i,o),o=o.sibling}function lp(t,i,o){if(mt&&typeof mt.onCommitFiberUnmount=="function")try{mt.onCommitFiberUnmount(Tt,o)}catch{}switch(o.tag){case 5:fn||_s(o,i);case 6:var l=sn,d=si;sn=null,sr(t,i,o),sn=l,si=d,sn!==null&&(si?(t=sn,o=o.stateNode,t.nodeType===8?t.parentNode.removeChild(o):t.removeChild(o)):sn.removeChild(o.stateNode));break;case 18:sn!==null&&(si?(t=sn,o=o.stateNode,t.nodeType===8?vc(t.parentNode,o):t.nodeType===1&&vc(t,o),to(t)):vc(sn,o.stateNode));break;case 4:l=sn,d=si,sn=o.stateNode.containerInfo,si=!0,sr(t,i,o),sn=l,si=d;break;case 0:case 11:case 14:case 15:if(!fn&&(l=o.updateQueue,l!==null&&(l=l.lastEffect,l!==null))){d=l=l.next;do{var h=d,M=h.destroy;h=h.tag,M!==void 0&&((h&2)!==0||(h&4)!==0)&&tu(o,i,M),d=d.next}while(d!==l)}sr(t,i,o);break;case 1:if(!fn&&(_s(o,i),l=o.stateNode,typeof l.componentWillUnmount=="function"))try{l.props=o.memoizedProps,l.state=o.memoizedState,l.componentWillUnmount()}catch(I){Ht(o,i,I)}sr(t,i,o);break;case 21:sr(t,i,o);break;case 22:o.mode&1?(fn=(l=fn)||o.memoizedState!==null,sr(t,i,o),fn=l):sr(t,i,o);break;default:sr(t,i,o)}}function cp(t){var i=t.updateQueue;if(i!==null){t.updateQueue=null;var o=t.stateNode;o===null&&(o=t.stateNode=new zv),i.forEach(function(l){var d=$v.bind(null,t,l);o.has(l)||(o.add(l),l.then(d,d))})}}function oi(t,i){var o=i.deletions;if(o!==null)for(var l=0;l<o.length;l++){var d=o[l];try{var h=t,M=i,I=M;e:for(;I!==null;){switch(I.tag){case 5:sn=I.stateNode,si=!1;break e;case 3:sn=I.stateNode.containerInfo,si=!0;break e;case 4:sn=I.stateNode.containerInfo,si=!0;break e}I=I.return}if(sn===null)throw Error(n(160));lp(h,M,d),sn=null,si=!1;var O=d.alternate;O!==null&&(O.return=null),d.return=null}catch(ee){Ht(d,i,ee)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)up(i,t),i=i.sibling}function up(t,i){var o=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(oi(i,t),xi(t),l&4){try{To(3,t,t.return),La(3,t)}catch(Ve){Ht(t,t.return,Ve)}try{To(5,t,t.return)}catch(Ve){Ht(t,t.return,Ve)}}break;case 1:oi(i,t),xi(t),l&512&&o!==null&&_s(o,o.return);break;case 5:if(oi(i,t),xi(t),l&512&&o!==null&&_s(o,o.return),t.flags&32){var d=t.stateNode;try{ft(d,"")}catch(Ve){Ht(t,t.return,Ve)}}if(l&4&&(d=t.stateNode,d!=null)){var h=t.memoizedProps,M=o!==null?o.memoizedProps:h,I=t.type,O=t.updateQueue;if(t.updateQueue=null,O!==null)try{I==="input"&&h.type==="radio"&&h.name!=null&&rt(d,h),st(I,M);var ee=st(I,h);for(M=0;M<O.length;M+=2){var xe=O[M],ye=O[M+1];xe==="style"?et(d,ye):xe==="dangerouslySetInnerHTML"?Ue(d,ye):xe==="children"?ft(d,ye):N(d,xe,ye,ee)}switch(I){case"input":at(d,h);break;case"textarea":me(d,h);break;case"select":var ge=d._wrapperState.wasMultiple;d._wrapperState.wasMultiple=!!h.multiple;var Ie=h.value;Ie!=null?L(d,!!h.multiple,Ie,!1):ge!==!!h.multiple&&(h.defaultValue!=null?L(d,!!h.multiple,h.defaultValue,!0):L(d,!!h.multiple,h.multiple?[]:"",!1))}d[ho]=h}catch(Ve){Ht(t,t.return,Ve)}}break;case 6:if(oi(i,t),xi(t),l&4){if(t.stateNode===null)throw Error(n(162));d=t.stateNode,h=t.memoizedProps;try{d.nodeValue=h}catch(Ve){Ht(t,t.return,Ve)}}break;case 3:if(oi(i,t),xi(t),l&4&&o!==null&&o.memoizedState.isDehydrated)try{to(i.containerInfo)}catch(Ve){Ht(t,t.return,Ve)}break;case 4:oi(i,t),xi(t);break;case 13:oi(i,t),xi(t),d=t.child,d.flags&8192&&(h=d.memoizedState!==null,d.stateNode.isHidden=h,!h||d.alternate!==null&&d.alternate.memoizedState!==null||(au=Ee())),l&4&&cp(t);break;case 22:if(xe=o!==null&&o.memoizedState!==null,t.mode&1?(fn=(ee=fn)||xe,oi(i,t),fn=ee):oi(i,t),xi(t),l&8192){if(ee=t.memoizedState!==null,(t.stateNode.isHidden=ee)&&!xe&&(t.mode&1)!==0)for(ke=t,xe=t.child;xe!==null;){for(ye=ke=xe;ke!==null;){switch(ge=ke,Ie=ge.child,ge.tag){case 0:case 11:case 14:case 15:To(4,ge,ge.return);break;case 1:_s(ge,ge.return);var Be=ge.stateNode;if(typeof Be.componentWillUnmount=="function"){l=ge,o=ge.return;try{i=l,Be.props=i.memoizedProps,Be.state=i.memoizedState,Be.componentWillUnmount()}catch(Ve){Ht(l,o,Ve)}}break;case 5:_s(ge,ge.return);break;case 22:if(ge.memoizedState!==null){hp(ye);continue}}Ie!==null?(Ie.return=ge,ke=Ie):hp(ye)}xe=xe.sibling}e:for(xe=null,ye=t;;){if(ye.tag===5){if(xe===null){xe=ye;try{d=ye.stateNode,ee?(h=d.style,typeof h.setProperty=="function"?h.setProperty("display","none","important"):h.display="none"):(I=ye.stateNode,O=ye.memoizedProps.style,M=O!=null&&O.hasOwnProperty("display")?O.display:null,I.style.display=Je("display",M))}catch(Ve){Ht(t,t.return,Ve)}}}else if(ye.tag===6){if(xe===null)try{ye.stateNode.nodeValue=ee?"":ye.memoizedProps}catch(Ve){Ht(t,t.return,Ve)}}else if((ye.tag!==22&&ye.tag!==23||ye.memoizedState===null||ye===t)&&ye.child!==null){ye.child.return=ye,ye=ye.child;continue}if(ye===t)break e;for(;ye.sibling===null;){if(ye.return===null||ye.return===t)break e;xe===ye&&(xe=null),ye=ye.return}xe===ye&&(xe=null),ye.sibling.return=ye.return,ye=ye.sibling}}break;case 19:oi(i,t),xi(t),l&4&&cp(t);break;case 21:break;default:oi(i,t),xi(t)}}function xi(t){var i=t.flags;if(i&2){try{e:{for(var o=t.return;o!==null;){if(op(o)){var l=o;break e}o=o.return}throw Error(n(160))}switch(l.tag){case 5:var d=l.stateNode;l.flags&32&&(ft(d,""),l.flags&=-33);var h=ap(t);ru(t,h,d);break;case 3:case 4:var M=l.stateNode.containerInfo,I=ap(t);iu(t,I,M);break;default:throw Error(n(161))}}catch(O){Ht(t,t.return,O)}t.flags&=-3}i&4096&&(t.flags&=-4097)}function Hv(t,i,o){ke=t,dp(t)}function dp(t,i,o){for(var l=(t.mode&1)!==0;ke!==null;){var d=ke,h=d.child;if(d.tag===22&&l){var M=d.memoizedState!==null||Na;if(!M){var I=d.alternate,O=I!==null&&I.memoizedState!==null||fn;I=Na;var ee=fn;if(Na=M,(fn=O)&&!ee)for(ke=d;ke!==null;)M=ke,O=M.child,M.tag===22&&M.memoizedState!==null?pp(d):O!==null?(O.return=M,ke=O):pp(d);for(;h!==null;)ke=h,dp(h),h=h.sibling;ke=d,Na=I,fn=ee}fp(t)}else(d.subtreeFlags&8772)!==0&&h!==null?(h.return=d,ke=h):fp(t)}}function fp(t){for(;ke!==null;){var i=ke;if((i.flags&8772)!==0){var o=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:fn||La(5,i);break;case 1:var l=i.stateNode;if(i.flags&4&&!fn)if(o===null)l.componentDidMount();else{var d=i.elementType===i.type?o.memoizedProps:ri(i.type,o.memoizedProps);l.componentDidUpdate(d,o.memoizedState,l.__reactInternalSnapshotBeforeUpdate)}var h=i.updateQueue;h!==null&&hh(i,h,l);break;case 3:var M=i.updateQueue;if(M!==null){if(o=null,i.child!==null)switch(i.child.tag){case 5:o=i.child.stateNode;break;case 1:o=i.child.stateNode}hh(i,M,o)}break;case 5:var I=i.stateNode;if(o===null&&i.flags&4){o=I;var O=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":O.autoFocus&&o.focus();break;case"img":O.src&&(o.src=O.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var ee=i.alternate;if(ee!==null){var xe=ee.memoizedState;if(xe!==null){var ye=xe.dehydrated;ye!==null&&to(ye)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(n(163))}fn||i.flags&512&&nu(i)}catch(ge){Ht(i,i.return,ge)}}if(i===t){ke=null;break}if(o=i.sibling,o!==null){o.return=i.return,ke=o;break}ke=i.return}}function hp(t){for(;ke!==null;){var i=ke;if(i===t){ke=null;break}var o=i.sibling;if(o!==null){o.return=i.return,ke=o;break}ke=i.return}}function pp(t){for(;ke!==null;){var i=ke;try{switch(i.tag){case 0:case 11:case 15:var o=i.return;try{La(4,i)}catch(O){Ht(i,o,O)}break;case 1:var l=i.stateNode;if(typeof l.componentDidMount=="function"){var d=i.return;try{l.componentDidMount()}catch(O){Ht(i,d,O)}}var h=i.return;try{nu(i)}catch(O){Ht(i,h,O)}break;case 5:var M=i.return;try{nu(i)}catch(O){Ht(i,M,O)}}}catch(O){Ht(i,i.return,O)}if(i===t){ke=null;break}var I=i.sibling;if(I!==null){I.return=i.return,ke=I;break}ke=i.return}}var Vv=Math.ceil,Ia=A.ReactCurrentDispatcher,su=A.ReactCurrentOwner,Yn=A.ReactCurrentBatchConfig,xt=0,tn=null,jt=null,on=0,Fn=0,xs=er(0),Zt=0,wo=null,Nr=0,Ua=0,ou=0,Ao=null,Cn=null,au=0,ys=1/0,Ni=null,ka=!1,lu=null,or=null,Fa=!1,ar=null,Oa=0,Co=0,cu=null,za=-1,Ba=0;function _n(){return(xt&6)!==0?Ee():za!==-1?za:za=Ee()}function lr(t){return(t.mode&1)===0?1:(xt&2)!==0&&on!==0?on&-on:wv.transition!==null?(Ba===0&&(Ba=gn()),Ba):(t=Pt,t!==0||(t=window.event,t=t===void 0?16:gf(t.type)),t)}function ai(t,i,o,l){if(50<Co)throw Co=0,cu=null,Error(n(185));En(t,o,l),((xt&2)===0||t!==tn)&&(t===tn&&((xt&2)===0&&(Ua|=o),Zt===4&&cr(t,on)),bn(t,l),o===1&&xt===0&&(i.mode&1)===0&&(ys=Ee()+500,pa&&nr()))}function bn(t,i){var o=t.callbackNode;Hn(t,i);var l=mi(t,t===tn?on:0);if(l===0)o!==null&&ne(o),t.callbackNode=null,t.callbackPriority=0;else if(i=l&-l,t.callbackPriority!==i){if(o!=null&&ne(o),i===1)t.tag===0?Tv(gp.bind(null,t)):th(gp.bind(null,t)),yv(function(){(xt&6)===0&&nr()}),o=null;else{switch(lf(l)){case 1:o=He;break;case 4:o=tt;break;case 16:o=it;break;case 536870912:o=gt;break;default:o=it}o=Tp(o,mp.bind(null,t))}t.callbackPriority=i,t.callbackNode=o}}function mp(t,i){if(za=-1,Ba=0,(xt&6)!==0)throw Error(n(327));var o=t.callbackNode;if(Ss()&&t.callbackNode!==o)return null;var l=mi(t,t===tn?on:0);if(l===0)return null;if((l&30)!==0||(l&t.expiredLanes)!==0||i)i=Ha(t,l);else{i=l;var d=xt;xt|=2;var h=_p();(tn!==t||on!==i)&&(Ni=null,ys=Ee()+500,Ir(t,i));do try{jv();break}catch(I){vp(t,I)}while(!0);Cc(),Ia.current=h,xt=d,jt!==null?i=0:(tn=null,on=0,i=Zt)}if(i!==0){if(i===2&&(d=Ti(t),d!==0&&(l=d,i=uu(t,d))),i===1)throw o=wo,Ir(t,0),cr(t,l),bn(t,Ee()),o;if(i===6)cr(t,l);else{if(d=t.current.alternate,(l&30)===0&&!Gv(d)&&(i=Ha(t,l),i===2&&(h=Ti(t),h!==0&&(l=h,i=uu(t,h))),i===1))throw o=wo,Ir(t,0),cr(t,l),bn(t,Ee()),o;switch(t.finishedWork=d,t.finishedLanes=l,i){case 0:case 1:throw Error(n(345));case 2:Ur(t,Cn,Ni);break;case 3:if(cr(t,l),(l&130023424)===l&&(i=au+500-Ee(),10<i)){if(mi(t,0)!==0)break;if(d=t.suspendedLanes,(d&l)!==l){_n(),t.pingedLanes|=t.suspendedLanes&d;break}t.timeoutHandle=gc(Ur.bind(null,t,Cn,Ni),i);break}Ur(t,Cn,Ni);break;case 4:if(cr(t,l),(l&4194240)===l)break;for(i=t.eventTimes,d=-1;0<l;){var M=31-lt(l);h=1<<M,M=i[M],M>d&&(d=M),l&=~h}if(l=d,l=Ee()-l,l=(120>l?120:480>l?480:1080>l?1080:1920>l?1920:3e3>l?3e3:4320>l?4320:1960*Vv(l/1960))-l,10<l){t.timeoutHandle=gc(Ur.bind(null,t,Cn,Ni),l);break}Ur(t,Cn,Ni);break;case 5:Ur(t,Cn,Ni);break;default:throw Error(n(329))}}}return bn(t,Ee()),t.callbackNode===o?mp.bind(null,t):null}function uu(t,i){var o=Ao;return t.current.memoizedState.isDehydrated&&(Ir(t,i).flags|=256),t=Ha(t,i),t!==2&&(i=Cn,Cn=o,i!==null&&du(i)),t}function du(t){Cn===null?Cn=t:Cn.push.apply(Cn,t)}function Gv(t){for(var i=t;;){if(i.flags&16384){var o=i.updateQueue;if(o!==null&&(o=o.stores,o!==null))for(var l=0;l<o.length;l++){var d=o[l],h=d.getSnapshot;d=d.value;try{if(!ni(h(),d))return!1}catch{return!1}}}if(o=i.child,i.subtreeFlags&16384&&o!==null)o.return=i,i=o;else{if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function cr(t,i){for(i&=~ou,i&=~Ua,t.suspendedLanes|=i,t.pingedLanes&=~i,t=t.expirationTimes;0<i;){var o=31-lt(i),l=1<<o;t[o]=-1,i&=~l}}function gp(t){if((xt&6)!==0)throw Error(n(327));Ss();var i=mi(t,0);if((i&1)===0)return bn(t,Ee()),null;var o=Ha(t,i);if(t.tag!==0&&o===2){var l=Ti(t);l!==0&&(i=l,o=uu(t,l))}if(o===1)throw o=wo,Ir(t,0),cr(t,i),bn(t,Ee()),o;if(o===6)throw Error(n(345));return t.finishedWork=t.current.alternate,t.finishedLanes=i,Ur(t,Cn,Ni),bn(t,Ee()),null}function fu(t,i){var o=xt;xt|=1;try{return t(i)}finally{xt=o,xt===0&&(ys=Ee()+500,pa&&nr())}}function Lr(t){ar!==null&&ar.tag===0&&(xt&6)===0&&Ss();var i=xt;xt|=1;var o=Yn.transition,l=Pt;try{if(Yn.transition=null,Pt=1,t)return t()}finally{Pt=l,Yn.transition=o,xt=i,(xt&6)===0&&nr()}}function hu(){Fn=xs.current,kt(xs)}function Ir(t,i){t.finishedWork=null,t.finishedLanes=0;var o=t.timeoutHandle;if(o!==-1&&(t.timeoutHandle=-1,xv(o)),jt!==null)for(o=jt.return;o!==null;){var l=o;switch(Mc(l),l.tag){case 1:l=l.type.childContextTypes,l!=null&&fa();break;case 3:gs(),kt(Tn),kt(cn),Uc();break;case 5:Lc(l);break;case 4:gs();break;case 13:kt(Ot);break;case 19:kt(Ot);break;case 10:bc(l.type._context);break;case 22:case 23:hu()}o=o.return}if(tn=t,jt=t=ur(t.current,null),on=Fn=i,Zt=0,wo=null,ou=Ua=Nr=0,Cn=Ao=null,Rr!==null){for(i=0;i<Rr.length;i++)if(o=Rr[i],l=o.interleaved,l!==null){o.interleaved=null;var d=l.next,h=o.pending;if(h!==null){var M=h.next;h.next=d,l.next=M}o.pending=l}Rr=null}return t}function vp(t,i){do{var o=jt;try{if(Cc(),Ta.current=ba,wa){for(var l=zt.memoizedState;l!==null;){var d=l.queue;d!==null&&(d.pending=null),l=l.next}wa=!1}if(Dr=0,en=Kt=zt=null,xo=!1,yo=0,su.current=null,o===null||o.return===null){Zt=1,wo=i,jt=null;break}e:{var h=t,M=o.return,I=o,O=i;if(i=on,I.flags|=32768,O!==null&&typeof O=="object"&&typeof O.then=="function"){var ee=O,xe=I,ye=xe.tag;if((xe.mode&1)===0&&(ye===0||ye===11||ye===15)){var ge=xe.alternate;ge?(xe.updateQueue=ge.updateQueue,xe.memoizedState=ge.memoizedState,xe.lanes=ge.lanes):(xe.updateQueue=null,xe.memoizedState=null)}var Ie=Vh(M);if(Ie!==null){Ie.flags&=-257,Gh(Ie,M,I,h,i),Ie.mode&1&&Hh(h,ee,i),i=Ie,O=ee;var Be=i.updateQueue;if(Be===null){var Ve=new Set;Ve.add(O),i.updateQueue=Ve}else Be.add(O);break e}else{if((i&1)===0){Hh(h,ee,i),pu();break e}O=Error(n(426))}}else if(Ft&&I.mode&1){var Gt=Vh(M);if(Gt!==null){(Gt.flags&65536)===0&&(Gt.flags|=256),Gh(Gt,M,I,h,i),wc(vs(O,I));break e}}h=O=vs(O,I),Zt!==4&&(Zt=2),Ao===null?Ao=[h]:Ao.push(h),h=M;do{switch(h.tag){case 3:h.flags|=65536,i&=-i,h.lanes|=i;var $=zh(h,O,i);fh(h,$);break e;case 1:I=O;var G=h.type,K=h.stateNode;if((h.flags&128)===0&&(typeof G.getDerivedStateFromError=="function"||K!==null&&typeof K.componentDidCatch=="function"&&(or===null||!or.has(K)))){h.flags|=65536,i&=-i,h.lanes|=i;var Te=Bh(h,I,i);fh(h,Te);break e}}h=h.return}while(h!==null)}yp(o)}catch(Xe){i=Xe,jt===o&&o!==null&&(jt=o=o.return);continue}break}while(!0)}function _p(){var t=Ia.current;return Ia.current=ba,t===null?ba:t}function pu(){(Zt===0||Zt===3||Zt===2)&&(Zt=4),tn===null||(Nr&268435455)===0&&(Ua&268435455)===0||cr(tn,on)}function Ha(t,i){var o=xt;xt|=2;var l=_p();(tn!==t||on!==i)&&(Ni=null,Ir(t,i));do try{Wv();break}catch(d){vp(t,d)}while(!0);if(Cc(),xt=o,Ia.current=l,jt!==null)throw Error(n(261));return tn=null,on=0,Zt}function Wv(){for(;jt!==null;)xp(jt)}function jv(){for(;jt!==null&&!Y();)xp(jt)}function xp(t){var i=Ep(t.alternate,t,Fn);t.memoizedProps=t.pendingProps,i===null?yp(t):jt=i,su.current=null}function yp(t){var i=t;do{var o=i.alternate;if(t=i.return,(i.flags&32768)===0){if(o=Fv(o,i,Fn),o!==null){jt=o;return}}else{if(o=Ov(o,i),o!==null){o.flags&=32767,jt=o;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Zt=6,jt=null;return}}if(i=i.sibling,i!==null){jt=i;return}jt=i=t}while(i!==null);Zt===0&&(Zt=5)}function Ur(t,i,o){var l=Pt,d=Yn.transition;try{Yn.transition=null,Pt=1,Xv(t,i,o,l)}finally{Yn.transition=d,Pt=l}return null}function Xv(t,i,o,l){do Ss();while(ar!==null);if((xt&6)!==0)throw Error(n(327));o=t.finishedWork;var d=t.finishedLanes;if(o===null)return null;if(t.finishedWork=null,t.finishedLanes=0,o===t.current)throw Error(n(177));t.callbackNode=null,t.callbackPriority=0;var h=o.lanes|o.childLanes;if($o(t,h),t===tn&&(jt=tn=null,on=0),(o.subtreeFlags&2064)===0&&(o.flags&2064)===0||Fa||(Fa=!0,Tp(it,function(){return Ss(),null})),h=(o.flags&15990)!==0,(o.subtreeFlags&15990)!==0||h){h=Yn.transition,Yn.transition=null;var M=Pt;Pt=1;var I=xt;xt|=4,su.current=null,Bv(t,o),up(o,t),fv(pc),Qo=!!hc,pc=hc=null,t.current=o,Hv(o),we(),xt=I,Pt=M,Yn.transition=h}else t.current=o;if(Fa&&(Fa=!1,ar=t,Oa=d),h=t.pendingLanes,h===0&&(or=null),an(o.stateNode),bn(t,Ee()),i!==null)for(l=t.onRecoverableError,o=0;o<i.length;o++)d=i[o],l(d.value,{componentStack:d.stack,digest:d.digest});if(ka)throw ka=!1,t=lu,lu=null,t;return(Oa&1)!==0&&t.tag!==0&&Ss(),h=t.pendingLanes,(h&1)!==0?t===cu?Co++:(Co=0,cu=t):Co=0,nr(),null}function Ss(){if(ar!==null){var t=lf(Oa),i=Yn.transition,o=Pt;try{if(Yn.transition=null,Pt=16>t?16:t,ar===null)var l=!1;else{if(t=ar,ar=null,Oa=0,(xt&6)!==0)throw Error(n(331));var d=xt;for(xt|=4,ke=t.current;ke!==null;){var h=ke,M=h.child;if((ke.flags&16)!==0){var I=h.deletions;if(I!==null){for(var O=0;O<I.length;O++){var ee=I[O];for(ke=ee;ke!==null;){var xe=ke;switch(xe.tag){case 0:case 11:case 15:To(8,xe,h)}var ye=xe.child;if(ye!==null)ye.return=xe,ke=ye;else for(;ke!==null;){xe=ke;var ge=xe.sibling,Ie=xe.return;if(sp(xe),xe===ee){ke=null;break}if(ge!==null){ge.return=Ie,ke=ge;break}ke=Ie}}}var Be=h.alternate;if(Be!==null){var Ve=Be.child;if(Ve!==null){Be.child=null;do{var Gt=Ve.sibling;Ve.sibling=null,Ve=Gt}while(Ve!==null)}}ke=h}}if((h.subtreeFlags&2064)!==0&&M!==null)M.return=h,ke=M;else e:for(;ke!==null;){if(h=ke,(h.flags&2048)!==0)switch(h.tag){case 0:case 11:case 15:To(9,h,h.return)}var $=h.sibling;if($!==null){$.return=h.return,ke=$;break e}ke=h.return}}var G=t.current;for(ke=G;ke!==null;){M=ke;var K=M.child;if((M.subtreeFlags&2064)!==0&&K!==null)K.return=M,ke=K;else e:for(M=G;ke!==null;){if(I=ke,(I.flags&2048)!==0)try{switch(I.tag){case 0:case 11:case 15:La(9,I)}}catch(Xe){Ht(I,I.return,Xe)}if(I===M){ke=null;break e}var Te=I.sibling;if(Te!==null){Te.return=I.return,ke=Te;break e}ke=I.return}}if(xt=d,nr(),mt&&typeof mt.onPostCommitFiberRoot=="function")try{mt.onPostCommitFiberRoot(Tt,t)}catch{}l=!0}return l}finally{Pt=o,Yn.transition=i}}return!1}function Sp(t,i,o){i=vs(o,i),i=zh(t,i,1),t=rr(t,i,1),i=_n(),t!==null&&(En(t,1,i),bn(t,i))}function Ht(t,i,o){if(t.tag===3)Sp(t,t,o);else for(;i!==null;){if(i.tag===3){Sp(i,t,o);break}else if(i.tag===1){var l=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(or===null||!or.has(l))){t=vs(o,t),t=Bh(i,t,1),i=rr(i,t,1),t=_n(),i!==null&&(En(i,1,t),bn(i,t));break}}i=i.return}}function Yv(t,i,o){var l=t.pingCache;l!==null&&l.delete(i),i=_n(),t.pingedLanes|=t.suspendedLanes&o,tn===t&&(on&o)===o&&(Zt===4||Zt===3&&(on&130023424)===on&&500>Ee()-au?Ir(t,0):ou|=o),bn(t,i)}function Mp(t,i){i===0&&((t.mode&1)===0?i=1:(i=ti,ti<<=1,(ti&130023424)===0&&(ti=4194304)));var o=_n();t=Ri(t,i),t!==null&&(En(t,i,o),bn(t,o))}function qv(t){var i=t.memoizedState,o=0;i!==null&&(o=i.retryLane),Mp(t,o)}function $v(t,i){var o=0;switch(t.tag){case 13:var l=t.stateNode,d=t.memoizedState;d!==null&&(o=d.retryLane);break;case 19:l=t.stateNode;break;default:throw Error(n(314))}l!==null&&l.delete(i),Mp(t,o)}var Ep;Ep=function(t,i,o){if(t!==null)if(t.memoizedProps!==i.pendingProps||Tn.current)An=!0;else{if((t.lanes&o)===0&&(i.flags&128)===0)return An=!1,kv(t,i,o);An=(t.flags&131072)!==0}else An=!1,Ft&&(i.flags&1048576)!==0&&nh(i,ga,i.index);switch(i.lanes=0,i.tag){case 2:var l=i.type;Da(t,i),t=i.pendingProps;var d=cs(i,cn.current);ms(i,o),d=Oc(null,i,l,t,d,o);var h=zc();return i.flags|=1,typeof d=="object"&&d!==null&&typeof d.render=="function"&&d.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,wn(l)?(h=!0,ha(i)):h=!1,i.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,Dc(i),d.updater=Ra,i.stateNode=d,d._reactInternals=i,jc(i,l,t,o),i=$c(null,i,l,!0,h,o)):(i.tag=0,Ft&&h&&Sc(i),vn(null,i,d,o),i=i.child),i;case 16:l=i.elementType;e:{switch(Da(t,i),t=i.pendingProps,d=l._init,l=d(l._payload),i.type=l,d=i.tag=Zv(l),t=ri(l,t),d){case 0:i=qc(null,i,l,t,o);break e;case 1:i=$h(null,i,l,t,o);break e;case 11:i=Wh(null,i,l,t,o);break e;case 14:i=jh(null,i,l,ri(l.type,t),o);break e}throw Error(n(306,l,""))}return i;case 0:return l=i.type,d=i.pendingProps,d=i.elementType===l?d:ri(l,d),qc(t,i,l,d,o);case 1:return l=i.type,d=i.pendingProps,d=i.elementType===l?d:ri(l,d),$h(t,i,l,d,o);case 3:e:{if(Kh(i),t===null)throw Error(n(387));l=i.pendingProps,h=i.memoizedState,d=h.element,dh(t,i),Ma(i,l,null,o);var M=i.memoizedState;if(l=M.element,h.isDehydrated)if(h={element:l,isDehydrated:!1,cache:M.cache,pendingSuspenseBoundaries:M.pendingSuspenseBoundaries,transitions:M.transitions},i.updateQueue.baseState=h,i.memoizedState=h,i.flags&256){d=vs(Error(n(423)),i),i=Zh(t,i,l,o,d);break e}else if(l!==d){d=vs(Error(n(424)),i),i=Zh(t,i,l,o,d);break e}else for(kn=Ji(i.stateNode.containerInfo.firstChild),Un=i,Ft=!0,ii=null,o=ch(i,null,l,o),i.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling;else{if(fs(),l===d){i=Di(t,i,o);break e}vn(t,i,l,o)}i=i.child}return i;case 5:return ph(i),t===null&&Tc(i),l=i.type,d=i.pendingProps,h=t!==null?t.memoizedProps:null,M=d.children,mc(l,d)?M=null:h!==null&&mc(l,h)&&(i.flags|=32),qh(t,i),vn(t,i,M,o),i.child;case 6:return t===null&&Tc(i),null;case 13:return Qh(t,i,o);case 4:return Nc(i,i.stateNode.containerInfo),l=i.pendingProps,t===null?i.child=hs(i,null,l,o):vn(t,i,l,o),i.child;case 11:return l=i.type,d=i.pendingProps,d=i.elementType===l?d:ri(l,d),Wh(t,i,l,d,o);case 7:return vn(t,i,i.pendingProps,o),i.child;case 8:return vn(t,i,i.pendingProps.children,o),i.child;case 12:return vn(t,i,i.pendingProps.children,o),i.child;case 10:e:{if(l=i.type._context,d=i.pendingProps,h=i.memoizedProps,M=d.value,Lt(xa,l._currentValue),l._currentValue=M,h!==null)if(ni(h.value,M)){if(h.children===d.children&&!Tn.current){i=Di(t,i,o);break e}}else for(h=i.child,h!==null&&(h.return=i);h!==null;){var I=h.dependencies;if(I!==null){M=h.child;for(var O=I.firstContext;O!==null;){if(O.context===l){if(h.tag===1){O=Pi(-1,o&-o),O.tag=2;var ee=h.updateQueue;if(ee!==null){ee=ee.shared;var xe=ee.pending;xe===null?O.next=O:(O.next=xe.next,xe.next=O),ee.pending=O}}h.lanes|=o,O=h.alternate,O!==null&&(O.lanes|=o),Rc(h.return,o,i),I.lanes|=o;break}O=O.next}}else if(h.tag===10)M=h.type===i.type?null:h.child;else if(h.tag===18){if(M=h.return,M===null)throw Error(n(341));M.lanes|=o,I=M.alternate,I!==null&&(I.lanes|=o),Rc(M,o,i),M=h.sibling}else M=h.child;if(M!==null)M.return=h;else for(M=h;M!==null;){if(M===i){M=null;break}if(h=M.sibling,h!==null){h.return=M.return,M=h;break}M=M.return}h=M}vn(t,i,d.children,o),i=i.child}return i;case 9:return d=i.type,l=i.pendingProps.children,ms(i,o),d=jn(d),l=l(d),i.flags|=1,vn(t,i,l,o),i.child;case 14:return l=i.type,d=ri(l,i.pendingProps),d=ri(l.type,d),jh(t,i,l,d,o);case 15:return Xh(t,i,i.type,i.pendingProps,o);case 17:return l=i.type,d=i.pendingProps,d=i.elementType===l?d:ri(l,d),Da(t,i),i.tag=1,wn(l)?(t=!0,ha(i)):t=!1,ms(i,o),Fh(i,l,d),jc(i,l,d,o),$c(null,i,l,!0,t,o);case 19:return ep(t,i,o);case 22:return Yh(t,i,o)}throw Error(n(156,i.tag))};function Tp(t,i){return te(t,i)}function Kv(t,i,o,l){this.tag=t,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function qn(t,i,o,l){return new Kv(t,i,o,l)}function mu(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Zv(t){if(typeof t=="function")return mu(t)?1:0;if(t!=null){if(t=t.$$typeof,t===oe)return 11;if(t===he)return 14}return 2}function ur(t,i){var o=t.alternate;return o===null?(o=qn(t.tag,i,t.key,t.mode),o.elementType=t.elementType,o.type=t.type,o.stateNode=t.stateNode,o.alternate=t,t.alternate=o):(o.pendingProps=i,o.type=t.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=t.flags&14680064,o.childLanes=t.childLanes,o.lanes=t.lanes,o.child=t.child,o.memoizedProps=t.memoizedProps,o.memoizedState=t.memoizedState,o.updateQueue=t.updateQueue,i=t.dependencies,o.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},o.sibling=t.sibling,o.index=t.index,o.ref=t.ref,o}function Va(t,i,o,l,d,h){var M=2;if(l=t,typeof t=="function")mu(t)&&(M=1);else if(typeof t=="string")M=5;else e:switch(t){case U:return kr(o.children,d,h,i);case B:M=8,d|=8;break;case P:return t=qn(12,o,i,d|2),t.elementType=P,t.lanes=h,t;case J:return t=qn(13,o,i,d),t.elementType=J,t.lanes=h,t;case de:return t=qn(19,o,i,d),t.elementType=de,t.lanes=h,t;case ce:return Ga(o,d,h,i);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case C:M=10;break e;case z:M=9;break e;case oe:M=11;break e;case he:M=14;break e;case ae:M=16,l=null;break e}throw Error(n(130,t==null?t:typeof t,""))}return i=qn(M,o,i,d),i.elementType=t,i.type=l,i.lanes=h,i}function kr(t,i,o,l){return t=qn(7,t,l,i),t.lanes=o,t}function Ga(t,i,o,l){return t=qn(22,t,l,i),t.elementType=ce,t.lanes=o,t.stateNode={isHidden:!1},t}function gu(t,i,o){return t=qn(6,t,null,i),t.lanes=o,t}function vu(t,i,o){return i=qn(4,t.children!==null?t.children:[],t.key,i),i.lanes=o,i.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},i}function Qv(t,i,o,l,d){this.tag=i,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Vn(0),this.expirationTimes=Vn(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Vn(0),this.identifierPrefix=l,this.onRecoverableError=d,this.mutableSourceEagerHydrationData=null}function _u(t,i,o,l,d,h,M,I,O){return t=new Qv(t,i,o,I,O),i===1?(i=1,h===!0&&(i|=8)):i=0,h=qn(3,null,null,i),t.current=h,h.stateNode=t,h.memoizedState={element:l,isDehydrated:o,cache:null,transitions:null,pendingSuspenseBoundaries:null},Dc(h),t}function Jv(t,i,o){var l=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:k,key:l==null?null:""+l,children:t,containerInfo:i,implementation:o}}function wp(t){if(!t)return tr;t=t._reactInternals;e:{if(pi(t)!==t||t.tag!==1)throw Error(n(170));var i=t;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(wn(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(n(171))}if(t.tag===1){var o=t.type;if(wn(o))return Jf(t,o,i)}return i}function Ap(t,i,o,l,d,h,M,I,O){return t=_u(o,l,!0,t,d,h,M,I,O),t.context=wp(null),o=t.current,l=_n(),d=lr(o),h=Pi(l,d),h.callback=i??null,rr(o,h,d),t.current.lanes=d,En(t,d,l),bn(t,l),t}function Wa(t,i,o,l){var d=i.current,h=_n(),M=lr(d);return o=wp(o),i.context===null?i.context=o:i.pendingContext=o,i=Pi(h,M),i.payload={element:t},l=l===void 0?null:l,l!==null&&(i.callback=l),t=rr(d,i,M),t!==null&&(ai(t,d,M,h),Sa(t,d,M)),M}function ja(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Cp(t,i){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var o=t.retryLane;t.retryLane=o!==0&&o<i?o:i}}function xu(t,i){Cp(t,i),(t=t.alternate)&&Cp(t,i)}function e_(){return null}var bp=typeof reportError=="function"?reportError:function(t){console.error(t)};function yu(t){this._internalRoot=t}Xa.prototype.render=yu.prototype.render=function(t){var i=this._internalRoot;if(i===null)throw Error(n(409));Wa(t,i,null,null)},Xa.prototype.unmount=yu.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var i=t.containerInfo;Lr(function(){Wa(null,t,null,null)}),i[wi]=null}};function Xa(t){this._internalRoot=t}Xa.prototype.unstable_scheduleHydration=function(t){if(t){var i=df();t={blockedOn:null,target:t,priority:i};for(var o=0;o<Ki.length&&i!==0&&i<Ki[o].priority;o++);Ki.splice(o,0,t),o===0&&pf(t)}};function Su(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Ya(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Rp(){}function t_(t,i,o,l,d){if(d){if(typeof l=="function"){var h=l;l=function(){var ee=ja(M);h.call(ee)}}var M=Ap(i,l,t,0,null,!1,!1,"",Rp);return t._reactRootContainer=M,t[wi]=M.current,uo(t.nodeType===8?t.parentNode:t),Lr(),M}for(;d=t.lastChild;)t.removeChild(d);if(typeof l=="function"){var I=l;l=function(){var ee=ja(O);I.call(ee)}}var O=_u(t,0,!1,null,null,!1,!1,"",Rp);return t._reactRootContainer=O,t[wi]=O.current,uo(t.nodeType===8?t.parentNode:t),Lr(function(){Wa(i,O,o,l)}),O}function qa(t,i,o,l,d){var h=o._reactRootContainer;if(h){var M=h;if(typeof d=="function"){var I=d;d=function(){var O=ja(M);I.call(O)}}Wa(i,M,t,d)}else M=t_(o,i,t,d,l);return ja(M)}cf=function(t){switch(t.tag){case 3:var i=t.stateNode;if(i.current.memoizedState.isDehydrated){var o=$t(i.pendingLanes);o!==0&&(jl(i,o|1),bn(i,Ee()),(xt&6)===0&&(ys=Ee()+500,nr()))}break;case 13:Lr(function(){var l=Ri(t,1);if(l!==null){var d=_n();ai(l,t,1,d)}}),xu(t,1)}},Xl=function(t){if(t.tag===13){var i=Ri(t,134217728);if(i!==null){var o=_n();ai(i,t,134217728,o)}xu(t,134217728)}},uf=function(t){if(t.tag===13){var i=lr(t),o=Ri(t,i);if(o!==null){var l=_n();ai(o,t,i,l)}xu(t,i)}},df=function(){return Pt},ff=function(t,i){var o=Pt;try{return Pt=t,i()}finally{Pt=o}},be=function(t,i,o){switch(i){case"input":if(at(t,o),i=o.name,o.type==="radio"&&i!=null){for(o=t;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<o.length;i++){var l=o[i];if(l!==t&&l.form===t.form){var d=da(l);if(!d)throw Error(n(90));dt(l),at(l,d)}}}break;case"textarea":me(t,o);break;case"select":i=o.value,i!=null&&L(t,!!o.multiple,i,!1)}},It=fu,qt=Lr;var n_={usingClientEntryPoint:!1,Events:[po,as,da,Pe,ot,fu]},bo={findFiberByHostInstance:wr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},i_={bundleType:bo.bundleType,version:bo.version,rendererPackageName:bo.rendererPackageName,rendererConfig:bo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:A.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=b(t),t===null?null:t.stateNode},findFiberByHostInstance:bo.findFiberByHostInstance||e_,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var $a=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!$a.isDisabled&&$a.supportsFiber)try{Tt=$a.inject(i_),mt=$a}catch{}}return Rn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=n_,Rn.createPortal=function(t,i){var o=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Su(i))throw Error(n(200));return Jv(t,i,null,o)},Rn.createRoot=function(t,i){if(!Su(t))throw Error(n(299));var o=!1,l="",d=bp;return i!=null&&(i.unstable_strictMode===!0&&(o=!0),i.identifierPrefix!==void 0&&(l=i.identifierPrefix),i.onRecoverableError!==void 0&&(d=i.onRecoverableError)),i=_u(t,1,!1,null,null,o,!1,l,d),t[wi]=i.current,uo(t.nodeType===8?t.parentNode:t),new yu(i)},Rn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var i=t._reactInternals;if(i===void 0)throw typeof t.render=="function"?Error(n(188)):(t=Object.keys(t).join(","),Error(n(268,t)));return t=b(i),t=t===null?null:t.stateNode,t},Rn.flushSync=function(t){return Lr(t)},Rn.hydrate=function(t,i,o){if(!Ya(i))throw Error(n(200));return qa(null,t,i,!0,o)},Rn.hydrateRoot=function(t,i,o){if(!Su(t))throw Error(n(405));var l=o!=null&&o.hydratedSources||null,d=!1,h="",M=bp;if(o!=null&&(o.unstable_strictMode===!0&&(d=!0),o.identifierPrefix!==void 0&&(h=o.identifierPrefix),o.onRecoverableError!==void 0&&(M=o.onRecoverableError)),i=Ap(i,null,t,1,o??null,d,!1,h,M),t[wi]=i.current,uo(t),l)for(t=0;t<l.length;t++)o=l[t],d=o._getVersion,d=d(o._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[o,d]:i.mutableSourceEagerHydrationData.push(o,d);return new Xa(i)},Rn.render=function(t,i,o){if(!Ya(i))throw Error(n(200));return qa(null,t,i,!1,o)},Rn.unmountComponentAtNode=function(t){if(!Ya(t))throw Error(n(40));return t._reactRootContainer?(Lr(function(){qa(null,null,t,!1,function(){t._reactRootContainer=null,t[wi]=null})}),!0):!1},Rn.unstable_batchedUpdates=fu,Rn.unstable_renderSubtreeIntoContainer=function(t,i,o,l){if(!Ya(o))throw Error(n(200));if(t==null||t._reactInternals===void 0)throw Error(n(38));return qa(t,i,o,!1,l)},Rn.version="18.3.1-next-f1338f8080-20240426",Rn}var Fp;function h_(){if(Fp)return Tu.exports;Fp=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),Tu.exports=f_(),Tu.exports}var Op;function p_(){if(Op)return Ka;Op=1;var s=h_();return Ka.createRoot=s.createRoot,Ka.hydrateRoot=s.hydrateRoot,Ka}var m_=p_();/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g_=s=>s.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),$m=(...s)=>s.filter((e,n,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===n).join(" ").trim();/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var v_={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const __=Ct.forwardRef(({color:s="currentColor",size:e=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:a="",children:c,iconNode:u,...f},p)=>Ct.createElement("svg",{ref:p,...v_,width:e,height:e,stroke:s,strokeWidth:r?Number(n)*24/Number(e):n,className:$m("lucide",a),...f},[...u.map(([m,_])=>Ct.createElement(m,_)),...Array.isArray(c)?c:[c]]));/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bn=(s,e)=>{const n=Ct.forwardRef(({className:r,...a},c)=>Ct.createElement(__,{ref:c,iconNode:e,className:$m(`lucide-${g_(s)}`,r),...a}));return n.displayName=`${s}`,n};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x_=Bn("ArrowUpRight",[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y_=Bn("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S_=Bn("Copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M_=Bn("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E_=Bn("ExternalLink",[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zp=Bn("Github",[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T_=Bn("Linkedin",[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w_=Bn("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A_=Bn("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C_=Bn("Moon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b_=Bn("Send",[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R_=Bn("Sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P_=Bn("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),vt={name:"Dushmin Maleesha",role:"Full-Stack Developer",tagline:"Engineering resilient, high-precision web applications, distributed backends, and interactive 3D experiences with clean architecture.",location:"Colombo, Sri Lanka",timezone:"Asia/Colombo",utcOffset:"UTC+05:30",availableForWork:!0,availabilityText:"Available for work & select roles",coreStack:["React","Node.js","Python","PostgreSQL"],links:{github:"https://github.com/dushminmaleesha",githubHandle:"@dushminmaleesha",linkedin:"https://linkedin.com/in/dushminmaleesha",linkedinHandle:"/in/dushminmaleesha",email:"dushmin@example.com",resumeUrl:"/resume.pdf"},about:{photoUrl:"",lead:"I’m Dushmin Maleesha, a full-stack developer focused on turning complex systems into fast, tactile, and maintainable software.",paragraphs:["My engineering approach bridges deep backend data integrity with modern, high-frame-rate frontend craft. From relational data modeling in PostgreSQL and asynchronous API design in Node.js & Python, to interactive React interfaces and WebGL/3D visualizations, I build with precision across the entire stack.","I believe memorable software feels effortless—not because the underlying domain is simple, but because every boundary, query, and interaction was engineered with intention."],quickFacts:[{id:"FACT_01",label:"// EXPERIENCE",value:"3+ Years",description:"Architecting full-stack web platforms, distributed APIs, and production database systems."},{id:"FACT_02",label:"// CORE_FOCUS",value:"End-to-End",description:"Full lifecycle ownership from PostgreSQL schemas and Python/Node microservices to React UI."},{id:"FACT_03",label:"// BASE_NODE",value:"Colombo, LK",description:"Collaborating with remote engineering teams globally across overlap timezones (UTC+5:30)."}]},skills:[{id:"02.1",category:"Frontend",meta:"// UI, 3D & STATE",items:[{name:"React",role:"Core UI",isCore:!0},{name:"TypeScript",role:"Type Safety",isCore:!1},{name:"Next.js",role:"SSR / App Router",isCore:!1},{name:"Tailwind CSS",role:"Design Systems",isCore:!1},{name:"Three.js / WebGL",role:"3D Graphics",isCore:!1},{name:"TanStack Query / Redux",role:"Async State",isCore:!1},{name:"HTML5 & Modern CSS",role:"A11y / Layout",isCore:!1}]},{id:"02.2",category:"Backend",meta:"// APIS & DATA STORAGE",items:[{name:"Node.js",role:"Core Runtime",isCore:!0},{name:"Python",role:"Core Services",isCore:!0},{name:"PostgreSQL",role:"Core Database",isCore:!0},{name:"FastAPI / Django",role:"Python APIs",isCore:!1},{name:"Express / NestJS",role:"Node Frameworks",isCore:!1},{name:"Redis",role:"Caching & Queues",isCore:!1},{name:"REST, GraphQL & WebSockets",role:"Protocols",isCore:!1}]},{id:"02.3",category:"Tools",meta:"// INFRASTRUCTURE & QA",items:[{name:"Docker & Compose",role:"Containers",isCore:!1},{name:"Git & GitHub Actions",role:"CI/CD Pipelines",isCore:!1},{name:"Linux / Bash",role:"Systems",isCore:!1},{name:"AWS / Cloudflare",role:"Cloud Edge",isCore:!1},{name:"Prisma / SQLAlchemy",role:"ORM & Migrations",isCore:!1},{name:"Vitest / Pytest",role:"Automated Testing",isCore:!1},{name:"OpenTelemetry",role:"Observability",isCore:!1}]}],projects:[{index:"01",category:"// DISTRIBUTED TELEMETRY",title:"PulseGrid — Real-Time API Observability Engine",description:"High-throughput monitoring and anomaly detection platform ingesting 15k+ webhook events per minute with time-series rollups in PostgreSQL and live 3D topology streams.",archHighlight:"Cut p95 query latency by 64% via partitioned PostgreSQL tables and Redis write-behind buffers.",tags:["React","Node.js","PostgreSQL","Redis","Three.js"],liveUrl:"https://example.com",githubUrl:"https://github.com/dushminmaleesha"},{index:"02",category:"// AI & DATA PIPELINE",title:"VectorLedger — Semantic Document & SQL Studio",description:"Hybrid search workspace pairing Python ingestion workers and pgvector embeddings with a keyboard-first React query workbench for technical repositories.",archHighlight:"Asynchronous FastAPI worker pool achieving sub-80ms hybrid BM25 + vector similarity retrieval.",tags:["Python","FastAPI","React","PostgreSQL","pgvector"],liveUrl:"https://example.com",githubUrl:"https://github.com/dushminmaleesha"},{index:"03",category:"// WORKFLOW ORCHESTRATION",title:"ChronosFlow — Distributed DAG & Job Scheduler",description:"Fault-tolerant task runner for engineering teams supporting cron triggers, visual dependency graphs, exponential backoff retries, and live terminal log streaming.",archHighlight:"Zero duplicate executions during node failover using PostgreSQL advisory locks.",tags:["Node.js","TypeScript","React","PostgreSQL","Docker"],liveUrl:"https://example.com",githubUrl:"https://github.com/dushminmaleesha"},{index:"04",category:"// FINTECH INFRASTRUCTURE",title:"KinetixPay — Double-Entry Ledger & Billing API",description:"Multi-currency accounting microservice and merchant portal enforcing strict ACID transaction guarantees, webhook cryptographic signing, and immutable audit logs.",archHighlight:"100% mutation path test coverage using Pytest and isolated PostgreSQL test containers.",tags:["Python","React","Node.js","PostgreSQL","Stripe API"],liveUrl:"https://example.com",githubUrl:"https://github.com/dushminmaleesha"}],timeline:[{period:"2024 — PRESENT",badge:"CURRENT",isCurrent:!0,role:"Full-Stack Software Engineer",organization:"AetherLabs Systems · Hybrid",summary:"Architecting customer-facing analytics applications and distributed backend services across React, Node.js, Python, and PostgreSQL.",highlights:["Designed and shipped a multi-tenant reporting engine in PostgreSQL & Node.js serving 40k+ daily active users with sub-120ms response times.","Built reusable, accessible React component primitives and 3D data visualizations that accelerated feature delivery by 30%.","Automated CI/CD pipelines with GitHub Actions and Docker for zero-downtime deployments."]},{period:"2022 — 2024",badge:"EXPERIENCE",isCurrent:!1,role:"Software Developer (Full-Stack)",organization:"Vertex Digital Studio · Remote",summary:"Developed custom web platforms, asynchronous data pipelines, and REST/GraphQL APIs for fintech and logistics clients.",highlights:["Migrated legacy monolithic endpoints into modular Python (FastAPI) and Node.js services backed by PostgreSQL.","Engineered real-time order telemetry dashboards in React with WebSocket synchronization and optimistic UI state."]},{period:"2019 — 2023",badge:"EDUCATION",isCurrent:!1,role:"B.Sc. (Hons) in Computer Science & Software Engineering",organization:"University / Institute of Technology",summary:"Focused on Distributed Systems, Relational Database Internals, Computer Graphics, Algorithms & Data Structures, and Software Architecture.",highlights:[]}]};/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const $d="170",D_=0,Bp=1,N_=2,Km=1,L_=2,Oi=3,Sr=0,Nn=1,zi=2,xr=0,Os=1,Hp=2,Vp=3,Gp=4,I_=5,jr=100,U_=101,k_=102,F_=103,O_=104,z_=200,B_=201,H_=202,V_=203,sd=204,od=205,G_=206,W_=207,j_=208,X_=209,Y_=210,q_=211,$_=212,K_=213,Z_=214,ad=0,ld=1,cd=2,Hs=3,ud=4,dd=5,fd=6,hd=7,Zm=0,Q_=1,J_=2,yr=0,ex=1,tx=2,nx=3,ix=4,rx=5,sx=6,ox=7,Qm=300,Vs=301,Gs=302,pd=303,md=304,zl=306,gd=1e3,Yr=1001,vd=1002,fi=1003,ax=1004,Za=1005,Si=1006,Cu=1007,qr=1008,Gi=1009,Jm=1010,eg=1011,zo=1012,Kd=1013,$r=1014,Bi=1015,Bo=1016,Zd=1017,Qd=1018,Ws=1020,tg=35902,ng=1021,ig=1022,di=1023,rg=1024,sg=1025,zs=1026,js=1027,og=1028,Jd=1029,ag=1030,ef=1031,tf=1033,wl=33776,Al=33777,Cl=33778,bl=33779,_d=35840,xd=35841,yd=35842,Sd=35843,Md=36196,Ed=37492,Td=37496,wd=37808,Ad=37809,Cd=37810,bd=37811,Rd=37812,Pd=37813,Dd=37814,Nd=37815,Ld=37816,Id=37817,Ud=37818,kd=37819,Fd=37820,Od=37821,Rl=36492,zd=36494,Bd=36495,lg=36283,Hd=36284,Vd=36285,Gd=36286,lx=3200,cx=3201,ux=0,dx=1,_r="",Kn="srgb",Ys="srgb-linear",Bl="linear",Dt="srgb",Ms=7680,Wp=519,fx=512,hx=513,px=514,cg=515,mx=516,gx=517,vx=518,_x=519,jp=35044,Xp="300 es",Hi=2e3,Il=2001;class qs{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(n)===-1&&r[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const r=this._listeners;return r[e]!==void 0&&r[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const a=this._listeners[e];if(a!==void 0){const c=a.indexOf(n);c!==-1&&a.splice(c,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const r=this._listeners[e.type];if(r!==void 0){e.target=this;const a=r.slice(0);for(let c=0,u=a.length;c<u;c++)a[c].call(this,e);e.target=null}}}const hn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Pl=Math.PI/180,Wd=180/Math.PI;function Ho(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(hn[s&255]+hn[s>>8&255]+hn[s>>16&255]+hn[s>>24&255]+"-"+hn[e&255]+hn[e>>8&255]+"-"+hn[e>>16&15|64]+hn[e>>24&255]+"-"+hn[n&63|128]+hn[n>>8&255]+"-"+hn[n>>16&255]+hn[n>>24&255]+hn[r&255]+hn[r>>8&255]+hn[r>>16&255]+hn[r>>24&255]).toLowerCase()}function Dn(s,e,n){return Math.max(e,Math.min(n,s))}function xx(s,e){return(s%e+e)%e}function bu(s,e,n){return(1-n)*s+n*e}function Po(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Pn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class Rt{constructor(e=0,n=0){Rt.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,r=this.y,a=e.elements;return this.x=a[0]*n+a[3]*r+a[6],this.y=a[1]*n+a[4]*r+a[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(n,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(Dn(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y;return n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const r=Math.cos(n),a=Math.sin(n),c=this.x-e.x,u=this.y-e.y;return this.x=c*r-u*a+e.x,this.y=c*a+u*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ct{constructor(e,n,r,a,c,u,f,p,m){ct.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,r,a,c,u,f,p,m)}set(e,n,r,a,c,u,f,p,m){const _=this.elements;return _[0]=e,_[1]=a,_[2]=f,_[3]=n,_[4]=c,_[5]=p,_[6]=r,_[7]=u,_[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],this}extractBasis(e,n,r){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,a=n.elements,c=this.elements,u=r[0],f=r[3],p=r[6],m=r[1],_=r[4],x=r[7],y=r[2],S=r[5],E=r[8],T=a[0],g=a[3],v=a[6],D=a[1],N=a[4],A=a[7],j=a[2],k=a[5],U=a[8];return c[0]=u*T+f*D+p*j,c[3]=u*g+f*N+p*k,c[6]=u*v+f*A+p*U,c[1]=m*T+_*D+x*j,c[4]=m*g+_*N+x*k,c[7]=m*v+_*A+x*U,c[2]=y*T+S*D+E*j,c[5]=y*g+S*N+E*k,c[8]=y*v+S*A+E*U,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[1],a=e[2],c=e[3],u=e[4],f=e[5],p=e[6],m=e[7],_=e[8];return n*u*_-n*f*m-r*c*_+r*f*p+a*c*m-a*u*p}invert(){const e=this.elements,n=e[0],r=e[1],a=e[2],c=e[3],u=e[4],f=e[5],p=e[6],m=e[7],_=e[8],x=_*u-f*m,y=f*p-_*c,S=m*c-u*p,E=n*x+r*y+a*S;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const T=1/E;return e[0]=x*T,e[1]=(a*m-_*r)*T,e[2]=(f*r-a*u)*T,e[3]=y*T,e[4]=(_*n-a*p)*T,e[5]=(a*c-f*n)*T,e[6]=S*T,e[7]=(r*p-m*n)*T,e[8]=(u*n-r*c)*T,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,r,a,c,u,f){const p=Math.cos(c),m=Math.sin(c);return this.set(r*p,r*m,-r*(p*u+m*f)+u+e,-a*m,a*p,-a*(-m*u+p*f)+f+n,0,0,1),this}scale(e,n){return this.premultiply(Ru.makeScale(e,n)),this}rotate(e){return this.premultiply(Ru.makeRotation(-e)),this}translate(e,n){return this.premultiply(Ru.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,r,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,r=e.elements;for(let a=0;a<9;a++)if(n[a]!==r[a])return!1;return!0}fromArray(e,n=0){for(let r=0;r<9;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ru=new ct;function ug(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Ul(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function yx(){const s=Ul("canvas");return s.style.display="block",s}const Yp={};function ko(s){s in Yp||(Yp[s]=!0,console.warn(s))}function Sx(s,e,n){return new Promise(function(r,a){function c(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:a();break;case s.TIMEOUT_EXPIRED:setTimeout(c,n);break;default:r()}}setTimeout(c,n)})}function Mx(s){const e=s.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Ex(s){const e=s.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const yt={enabled:!0,workingColorSpace:Ys,spaces:{},convert:function(s,e,n){return this.enabled===!1||e===n||!e||!n||(this.spaces[e].transfer===Dt&&(s.r=Vi(s.r),s.g=Vi(s.g),s.b=Vi(s.b)),this.spaces[e].primaries!==this.spaces[n].primaries&&(s.applyMatrix3(this.spaces[e].toXYZ),s.applyMatrix3(this.spaces[n].fromXYZ)),this.spaces[n].transfer===Dt&&(s.r=Bs(s.r),s.g=Bs(s.g),s.b=Bs(s.b))),s},fromWorkingColorSpace:function(s,e){return this.convert(s,this.workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===_r?Bl:this.spaces[s].transfer},getLuminanceCoefficients:function(s,e=this.workingColorSpace){return s.fromArray(this.spaces[e].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,e,n){return s.copy(this.spaces[e].toXYZ).multiply(this.spaces[n].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}};function Vi(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Bs(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}const qp=[.64,.33,.3,.6,.15,.06],$p=[.2126,.7152,.0722],Kp=[.3127,.329],Zp=new ct().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Qp=new ct().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);yt.define({[Ys]:{primaries:qp,whitePoint:Kp,transfer:Bl,toXYZ:Zp,fromXYZ:Qp,luminanceCoefficients:$p,workingColorSpaceConfig:{unpackColorSpace:Kn},outputColorSpaceConfig:{drawingBufferColorSpace:Kn}},[Kn]:{primaries:qp,whitePoint:Kp,transfer:Dt,toXYZ:Zp,fromXYZ:Qp,luminanceCoefficients:$p,outputColorSpaceConfig:{drawingBufferColorSpace:Kn}}});let Es;class Tx{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Es===void 0&&(Es=Ul("canvas")),Es.width=e.width,Es.height=e.height;const r=Es.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=Es}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Ul("canvas");n.width=e.width,n.height=e.height;const r=n.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const a=r.getImageData(0,0,e.width,e.height),c=a.data;for(let u=0;u<c.length;u++)c[u]=Vi(c[u]/255)*255;return r.putImageData(a,0,0),n}else if(e.data){const n=e.data.slice(0);for(let r=0;r<n.length;r++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[r]=Math.floor(Vi(n[r]/255)*255):n[r]=Vi(n[r]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let wx=0;class dg{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:wx++}),this.uuid=Ho(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},a=this.data;if(a!==null){let c;if(Array.isArray(a)){c=[];for(let u=0,f=a.length;u<f;u++)a[u].isDataTexture?c.push(Pu(a[u].image)):c.push(Pu(a[u]))}else c=Pu(a);r.url=c}return n||(e.images[this.uuid]=r),r}}function Pu(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Tx.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Ax=0;class Ln extends qs{constructor(e=Ln.DEFAULT_IMAGE,n=Ln.DEFAULT_MAPPING,r=Yr,a=Yr,c=Si,u=qr,f=di,p=Gi,m=Ln.DEFAULT_ANISOTROPY,_=_r){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ax++}),this.uuid=Ho(),this.name="",this.source=new dg(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=a,this.magFilter=c,this.minFilter=u,this.anisotropy=m,this.format=f,this.internalFormat=null,this.type=p,this.offset=new Rt(0,0),this.repeat=new Rt(1,1),this.center=new Rt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ct,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=_,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),n||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Qm)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case gd:e.x=e.x-Math.floor(e.x);break;case Yr:e.x=e.x<0?0:1;break;case vd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case gd:e.y=e.y-Math.floor(e.y);break;case Yr:e.y=e.y<0?0:1;break;case vd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Ln.DEFAULT_IMAGE=null;Ln.DEFAULT_MAPPING=Qm;Ln.DEFAULT_ANISOTROPY=1;class Wt{constructor(e=0,n=0,r=0,a=1){Wt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=r,this.w=a}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,r,a){return this.x=e,this.y=n,this.z=r,this.w=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,r=this.y,a=this.z,c=this.w,u=e.elements;return this.x=u[0]*n+u[4]*r+u[8]*a+u[12]*c,this.y=u[1]*n+u[5]*r+u[9]*a+u[13]*c,this.z=u[2]*n+u[6]*r+u[10]*a+u[14]*c,this.w=u[3]*n+u[7]*r+u[11]*a+u[15]*c,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,r,a,c;const p=e.elements,m=p[0],_=p[4],x=p[8],y=p[1],S=p[5],E=p[9],T=p[2],g=p[6],v=p[10];if(Math.abs(_-y)<.01&&Math.abs(x-T)<.01&&Math.abs(E-g)<.01){if(Math.abs(_+y)<.1&&Math.abs(x+T)<.1&&Math.abs(E+g)<.1&&Math.abs(m+S+v-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const N=(m+1)/2,A=(S+1)/2,j=(v+1)/2,k=(_+y)/4,U=(x+T)/4,B=(E+g)/4;return N>A&&N>j?N<.01?(r=0,a=.707106781,c=.707106781):(r=Math.sqrt(N),a=k/r,c=U/r):A>j?A<.01?(r=.707106781,a=0,c=.707106781):(a=Math.sqrt(A),r=k/a,c=B/a):j<.01?(r=.707106781,a=.707106781,c=0):(c=Math.sqrt(j),r=U/c,a=B/c),this.set(r,a,c,n),this}let D=Math.sqrt((g-E)*(g-E)+(x-T)*(x-T)+(y-_)*(y-_));return Math.abs(D)<.001&&(D=1),this.x=(g-E)/D,this.y=(x-T)/D,this.z=(y-_)/D,this.w=Math.acos((m+S+v-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(n,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this.w=e.w+(n.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Cx extends qs{constructor(e=1,n=1,r={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new Wt(0,0,e,n),this.scissorTest=!1,this.viewport=new Wt(0,0,e,n);const a={width:e,height:n,depth:1};r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Si,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},r);const c=new Ln(a,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace);c.flipY=!1,c.generateMipmaps=r.generateMipmaps,c.internalFormat=r.internalFormat,this.textures=[];const u=r.count;for(let f=0;f<u;f++)this.textures[f]=c.clone(),this.textures[f].isRenderTargetTexture=!0;this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this.depthTexture=r.depthTexture,this.samples=r.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,r=1){if(this.width!==e||this.height!==n||this.depth!==r){this.width=e,this.height=n,this.depth=r;for(let a=0,c=this.textures.length;a<c;a++)this.textures[a].image.width=e,this.textures[a].image.height=n,this.textures[a].image.depth=r;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let r=0,a=e.textures.length;r<a;r++)this.textures[r]=e.textures[r].clone(),this.textures[r].isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new dg(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Kr extends Cx{constructor(e=1,n=1,r={}){super(e,n,r),this.isWebGLRenderTarget=!0}}class fg extends Ln{constructor(e=null,n=1,r=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:r,depth:a},this.magFilter=fi,this.minFilter=fi,this.wrapR=Yr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class bx extends Ln{constructor(e=null,n=1,r=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:r,depth:a},this.magFilter=fi,this.minFilter=fi,this.wrapR=Yr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Vo{constructor(e=0,n=0,r=0,a=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=r,this._w=a}static slerpFlat(e,n,r,a,c,u,f){let p=r[a+0],m=r[a+1],_=r[a+2],x=r[a+3];const y=c[u+0],S=c[u+1],E=c[u+2],T=c[u+3];if(f===0){e[n+0]=p,e[n+1]=m,e[n+2]=_,e[n+3]=x;return}if(f===1){e[n+0]=y,e[n+1]=S,e[n+2]=E,e[n+3]=T;return}if(x!==T||p!==y||m!==S||_!==E){let g=1-f;const v=p*y+m*S+_*E+x*T,D=v>=0?1:-1,N=1-v*v;if(N>Number.EPSILON){const j=Math.sqrt(N),k=Math.atan2(j,v*D);g=Math.sin(g*k)/j,f=Math.sin(f*k)/j}const A=f*D;if(p=p*g+y*A,m=m*g+S*A,_=_*g+E*A,x=x*g+T*A,g===1-f){const j=1/Math.sqrt(p*p+m*m+_*_+x*x);p*=j,m*=j,_*=j,x*=j}}e[n]=p,e[n+1]=m,e[n+2]=_,e[n+3]=x}static multiplyQuaternionsFlat(e,n,r,a,c,u){const f=r[a],p=r[a+1],m=r[a+2],_=r[a+3],x=c[u],y=c[u+1],S=c[u+2],E=c[u+3];return e[n]=f*E+_*x+p*S-m*y,e[n+1]=p*E+_*y+m*x-f*S,e[n+2]=m*E+_*S+f*y-p*x,e[n+3]=_*E-f*x-p*y-m*S,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,r,a){return this._x=e,this._y=n,this._z=r,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const r=e._x,a=e._y,c=e._z,u=e._order,f=Math.cos,p=Math.sin,m=f(r/2),_=f(a/2),x=f(c/2),y=p(r/2),S=p(a/2),E=p(c/2);switch(u){case"XYZ":this._x=y*_*x+m*S*E,this._y=m*S*x-y*_*E,this._z=m*_*E+y*S*x,this._w=m*_*x-y*S*E;break;case"YXZ":this._x=y*_*x+m*S*E,this._y=m*S*x-y*_*E,this._z=m*_*E-y*S*x,this._w=m*_*x+y*S*E;break;case"ZXY":this._x=y*_*x-m*S*E,this._y=m*S*x+y*_*E,this._z=m*_*E+y*S*x,this._w=m*_*x-y*S*E;break;case"ZYX":this._x=y*_*x-m*S*E,this._y=m*S*x+y*_*E,this._z=m*_*E-y*S*x,this._w=m*_*x+y*S*E;break;case"YZX":this._x=y*_*x+m*S*E,this._y=m*S*x+y*_*E,this._z=m*_*E-y*S*x,this._w=m*_*x-y*S*E;break;case"XZY":this._x=y*_*x-m*S*E,this._y=m*S*x-y*_*E,this._z=m*_*E+y*S*x,this._w=m*_*x+y*S*E;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+u)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const r=n/2,a=Math.sin(r);return this._x=e.x*a,this._y=e.y*a,this._z=e.z*a,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,r=n[0],a=n[4],c=n[8],u=n[1],f=n[5],p=n[9],m=n[2],_=n[6],x=n[10],y=r+f+x;if(y>0){const S=.5/Math.sqrt(y+1);this._w=.25/S,this._x=(_-p)*S,this._y=(c-m)*S,this._z=(u-a)*S}else if(r>f&&r>x){const S=2*Math.sqrt(1+r-f-x);this._w=(_-p)/S,this._x=.25*S,this._y=(a+u)/S,this._z=(c+m)/S}else if(f>x){const S=2*Math.sqrt(1+f-r-x);this._w=(c-m)/S,this._x=(a+u)/S,this._y=.25*S,this._z=(p+_)/S}else{const S=2*Math.sqrt(1+x-r-f);this._w=(u-a)/S,this._x=(c+m)/S,this._y=(p+_)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let r=e.dot(n)+1;return r<Number.EPSILON?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Dn(this.dot(e),-1,1)))}rotateTowards(e,n){const r=this.angleTo(e);if(r===0)return this;const a=Math.min(1,n/r);return this.slerp(e,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const r=e._x,a=e._y,c=e._z,u=e._w,f=n._x,p=n._y,m=n._z,_=n._w;return this._x=r*_+u*f+a*m-c*p,this._y=a*_+u*p+c*f-r*m,this._z=c*_+u*m+r*p-a*f,this._w=u*_-r*f-a*p-c*m,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const r=this._x,a=this._y,c=this._z,u=this._w;let f=u*e._w+r*e._x+a*e._y+c*e._z;if(f<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,f=-f):this.copy(e),f>=1)return this._w=u,this._x=r,this._y=a,this._z=c,this;const p=1-f*f;if(p<=Number.EPSILON){const S=1-n;return this._w=S*u+n*this._w,this._x=S*r+n*this._x,this._y=S*a+n*this._y,this._z=S*c+n*this._z,this.normalize(),this}const m=Math.sqrt(p),_=Math.atan2(m,f),x=Math.sin((1-n)*_)/m,y=Math.sin(n*_)/m;return this._w=u*x+this._w*y,this._x=r*x+this._x*y,this._y=a*x+this._y*y,this._z=c*x+this._z*y,this._onChangeCallback(),this}slerpQuaternions(e,n,r){return this.copy(e).slerp(n,r)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),r=Math.random(),a=Math.sqrt(1-r),c=Math.sqrt(r);return this.set(a*Math.sin(e),a*Math.cos(e),c*Math.sin(n),c*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class q{constructor(e=0,n=0,r=0){q.prototype.isVector3=!0,this.x=e,this.y=n,this.z=r}set(e,n,r){return r===void 0&&(r=this.z),this.x=e,this.y=n,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Jp.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Jp.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,r=this.y,a=this.z,c=e.elements;return this.x=c[0]*n+c[3]*r+c[6]*a,this.y=c[1]*n+c[4]*r+c[7]*a,this.z=c[2]*n+c[5]*r+c[8]*a,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,r=this.y,a=this.z,c=e.elements,u=1/(c[3]*n+c[7]*r+c[11]*a+c[15]);return this.x=(c[0]*n+c[4]*r+c[8]*a+c[12])*u,this.y=(c[1]*n+c[5]*r+c[9]*a+c[13])*u,this.z=(c[2]*n+c[6]*r+c[10]*a+c[14])*u,this}applyQuaternion(e){const n=this.x,r=this.y,a=this.z,c=e.x,u=e.y,f=e.z,p=e.w,m=2*(u*a-f*r),_=2*(f*n-c*a),x=2*(c*r-u*n);return this.x=n+p*m+u*x-f*_,this.y=r+p*_+f*m-c*x,this.z=a+p*x+c*_-u*m,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,r=this.y,a=this.z,c=e.elements;return this.x=c[0]*n+c[4]*r+c[8]*a,this.y=c[1]*n+c[5]*r+c[9]*a,this.z=c[2]*n+c[6]*r+c[10]*a,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(n,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const r=e.x,a=e.y,c=e.z,u=n.x,f=n.y,p=n.z;return this.x=a*p-c*f,this.y=c*u-r*p,this.z=r*f-a*u,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const r=e.dot(this)/n;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Du.copy(this).projectOnVector(e),this.sub(Du)}reflect(e){return this.sub(Du.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(Dn(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y,a=this.z-e.z;return n*n+r*r+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,r){const a=Math.sin(n)*e;return this.x=a*Math.sin(r),this.y=Math.cos(n)*e,this.z=a*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,r){return this.x=e*Math.sin(n),this.y=r,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),a=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=r,this.z=a,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,r=Math.sqrt(1-n*n);return this.x=r*Math.cos(e),this.y=n,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Du=new q,Jp=new Vo;class Go{constructor(e=new q(1/0,1/0,1/0),n=new q(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n+=3)this.expandByPoint(li.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,r=e.count;n<r;n++)this.expandByPoint(li.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const r=li.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const c=r.getAttribute("position");if(n===!0&&c!==void 0&&e.isInstancedMesh!==!0)for(let u=0,f=c.count;u<f;u++)e.isMesh===!0?e.getVertexPosition(u,li):li.fromBufferAttribute(c,u),li.applyMatrix4(e.matrixWorld),this.expandByPoint(li);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Qa.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),Qa.copy(r.boundingBox)),Qa.applyMatrix4(e.matrixWorld),this.union(Qa)}const a=e.children;for(let c=0,u=a.length;c<u;c++)this.expandByObject(a[c],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,li),li.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,r;return e.normal.x>0?(n=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),n<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Do),Ja.subVectors(this.max,Do),Ts.subVectors(e.a,Do),ws.subVectors(e.b,Do),As.subVectors(e.c,Do),fr.subVectors(ws,Ts),hr.subVectors(As,ws),Fr.subVectors(Ts,As);let n=[0,-fr.z,fr.y,0,-hr.z,hr.y,0,-Fr.z,Fr.y,fr.z,0,-fr.x,hr.z,0,-hr.x,Fr.z,0,-Fr.x,-fr.y,fr.x,0,-hr.y,hr.x,0,-Fr.y,Fr.x,0];return!Nu(n,Ts,ws,As,Ja)||(n=[1,0,0,0,1,0,0,0,1],!Nu(n,Ts,ws,As,Ja))?!1:(el.crossVectors(fr,hr),n=[el.x,el.y,el.z],Nu(n,Ts,ws,As,Ja))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,li).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(li).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Li[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Li[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Li[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Li[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Li[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Li[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Li[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Li[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Li),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Li=[new q,new q,new q,new q,new q,new q,new q,new q],li=new q,Qa=new Go,Ts=new q,ws=new q,As=new q,fr=new q,hr=new q,Fr=new q,Do=new q,Ja=new q,el=new q,Or=new q;function Nu(s,e,n,r,a){for(let c=0,u=s.length-3;c<=u;c+=3){Or.fromArray(s,c);const f=a.x*Math.abs(Or.x)+a.y*Math.abs(Or.y)+a.z*Math.abs(Or.z),p=e.dot(Or),m=n.dot(Or),_=r.dot(Or);if(Math.max(-Math.max(p,m,_),Math.min(p,m,_))>f)return!1}return!0}const Rx=new Go,No=new q,Lu=new q;class Wo{constructor(e=new q,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const r=this.center;n!==void 0?r.copy(n):Rx.setFromPoints(e).getCenter(r);let a=0;for(let c=0,u=e.length;c<u;c++)a=Math.max(a,r.distanceToSquared(e[c]));return this.radius=Math.sqrt(a),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const r=this.center.distanceToSquared(e);return n.copy(e),r>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;No.subVectors(e,this.center);const n=No.lengthSq();if(n>this.radius*this.radius){const r=Math.sqrt(n),a=(r-this.radius)*.5;this.center.addScaledVector(No,a/r),this.radius+=a}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Lu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(No.copy(e.center).add(Lu)),this.expandByPoint(No.copy(e.center).sub(Lu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ii=new q,Iu=new q,tl=new q,pr=new q,Uu=new q,nl=new q,ku=new q;class nf{constructor(e=new q,n=new q(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ii)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const r=n.dot(this.direction);return r<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Ii.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Ii.copy(this.origin).addScaledVector(this.direction,n),Ii.distanceToSquared(e))}distanceSqToSegment(e,n,r,a){Iu.copy(e).add(n).multiplyScalar(.5),tl.copy(n).sub(e).normalize(),pr.copy(this.origin).sub(Iu);const c=e.distanceTo(n)*.5,u=-this.direction.dot(tl),f=pr.dot(this.direction),p=-pr.dot(tl),m=pr.lengthSq(),_=Math.abs(1-u*u);let x,y,S,E;if(_>0)if(x=u*p-f,y=u*f-p,E=c*_,x>=0)if(y>=-E)if(y<=E){const T=1/_;x*=T,y*=T,S=x*(x+u*y+2*f)+y*(u*x+y+2*p)+m}else y=c,x=Math.max(0,-(u*y+f)),S=-x*x+y*(y+2*p)+m;else y=-c,x=Math.max(0,-(u*y+f)),S=-x*x+y*(y+2*p)+m;else y<=-E?(x=Math.max(0,-(-u*c+f)),y=x>0?-c:Math.min(Math.max(-c,-p),c),S=-x*x+y*(y+2*p)+m):y<=E?(x=0,y=Math.min(Math.max(-c,-p),c),S=y*(y+2*p)+m):(x=Math.max(0,-(u*c+f)),y=x>0?c:Math.min(Math.max(-c,-p),c),S=-x*x+y*(y+2*p)+m);else y=u>0?-c:c,x=Math.max(0,-(u*y+f)),S=-x*x+y*(y+2*p)+m;return r&&r.copy(this.origin).addScaledVector(this.direction,x),a&&a.copy(Iu).addScaledVector(tl,y),S}intersectSphere(e,n){Ii.subVectors(e.center,this.origin);const r=Ii.dot(this.direction),a=Ii.dot(Ii)-r*r,c=e.radius*e.radius;if(a>c)return null;const u=Math.sqrt(c-a),f=r-u,p=r+u;return p<0?null:f<0?this.at(p,n):this.at(f,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/n;return r>=0?r:null}intersectPlane(e,n){const r=this.distanceToPlane(e);return r===null?null:this.at(r,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let r,a,c,u,f,p;const m=1/this.direction.x,_=1/this.direction.y,x=1/this.direction.z,y=this.origin;return m>=0?(r=(e.min.x-y.x)*m,a=(e.max.x-y.x)*m):(r=(e.max.x-y.x)*m,a=(e.min.x-y.x)*m),_>=0?(c=(e.min.y-y.y)*_,u=(e.max.y-y.y)*_):(c=(e.max.y-y.y)*_,u=(e.min.y-y.y)*_),r>u||c>a||((c>r||isNaN(r))&&(r=c),(u<a||isNaN(a))&&(a=u),x>=0?(f=(e.min.z-y.z)*x,p=(e.max.z-y.z)*x):(f=(e.max.z-y.z)*x,p=(e.min.z-y.z)*x),r>p||f>a)||((f>r||r!==r)&&(r=f),(p<a||a!==a)&&(a=p),a<0)?null:this.at(r>=0?r:a,n)}intersectsBox(e){return this.intersectBox(e,Ii)!==null}intersectTriangle(e,n,r,a,c){Uu.subVectors(n,e),nl.subVectors(r,e),ku.crossVectors(Uu,nl);let u=this.direction.dot(ku),f;if(u>0){if(a)return null;f=1}else if(u<0)f=-1,u=-u;else return null;pr.subVectors(this.origin,e);const p=f*this.direction.dot(nl.crossVectors(pr,nl));if(p<0)return null;const m=f*this.direction.dot(Uu.cross(pr));if(m<0||p+m>u)return null;const _=-f*pr.dot(ku);return _<0?null:this.at(_/u,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Vt{constructor(e,n,r,a,c,u,f,p,m,_,x,y,S,E,T,g){Vt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,r,a,c,u,f,p,m,_,x,y,S,E,T,g)}set(e,n,r,a,c,u,f,p,m,_,x,y,S,E,T,g){const v=this.elements;return v[0]=e,v[4]=n,v[8]=r,v[12]=a,v[1]=c,v[5]=u,v[9]=f,v[13]=p,v[2]=m,v[6]=_,v[10]=x,v[14]=y,v[3]=S,v[7]=E,v[11]=T,v[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Vt().fromArray(this.elements)}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],n[9]=r[9],n[10]=r[10],n[11]=r[11],n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],this}copyPosition(e){const n=this.elements,r=e.elements;return n[12]=r[12],n[13]=r[13],n[14]=r[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,r){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,n,r){return this.set(e.x,n.x,r.x,0,e.y,n.y,r.y,0,e.z,n.z,r.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,r=e.elements,a=1/Cs.setFromMatrixColumn(e,0).length(),c=1/Cs.setFromMatrixColumn(e,1).length(),u=1/Cs.setFromMatrixColumn(e,2).length();return n[0]=r[0]*a,n[1]=r[1]*a,n[2]=r[2]*a,n[3]=0,n[4]=r[4]*c,n[5]=r[5]*c,n[6]=r[6]*c,n[7]=0,n[8]=r[8]*u,n[9]=r[9]*u,n[10]=r[10]*u,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,r=e.x,a=e.y,c=e.z,u=Math.cos(r),f=Math.sin(r),p=Math.cos(a),m=Math.sin(a),_=Math.cos(c),x=Math.sin(c);if(e.order==="XYZ"){const y=u*_,S=u*x,E=f*_,T=f*x;n[0]=p*_,n[4]=-p*x,n[8]=m,n[1]=S+E*m,n[5]=y-T*m,n[9]=-f*p,n[2]=T-y*m,n[6]=E+S*m,n[10]=u*p}else if(e.order==="YXZ"){const y=p*_,S=p*x,E=m*_,T=m*x;n[0]=y+T*f,n[4]=E*f-S,n[8]=u*m,n[1]=u*x,n[5]=u*_,n[9]=-f,n[2]=S*f-E,n[6]=T+y*f,n[10]=u*p}else if(e.order==="ZXY"){const y=p*_,S=p*x,E=m*_,T=m*x;n[0]=y-T*f,n[4]=-u*x,n[8]=E+S*f,n[1]=S+E*f,n[5]=u*_,n[9]=T-y*f,n[2]=-u*m,n[6]=f,n[10]=u*p}else if(e.order==="ZYX"){const y=u*_,S=u*x,E=f*_,T=f*x;n[0]=p*_,n[4]=E*m-S,n[8]=y*m+T,n[1]=p*x,n[5]=T*m+y,n[9]=S*m-E,n[2]=-m,n[6]=f*p,n[10]=u*p}else if(e.order==="YZX"){const y=u*p,S=u*m,E=f*p,T=f*m;n[0]=p*_,n[4]=T-y*x,n[8]=E*x+S,n[1]=x,n[5]=u*_,n[9]=-f*_,n[2]=-m*_,n[6]=S*x+E,n[10]=y-T*x}else if(e.order==="XZY"){const y=u*p,S=u*m,E=f*p,T=f*m;n[0]=p*_,n[4]=-x,n[8]=m*_,n[1]=y*x+T,n[5]=u*_,n[9]=S*x-E,n[2]=E*x-S,n[6]=f*_,n[10]=T*x+y}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Px,e,Dx)}lookAt(e,n,r){const a=this.elements;return On.subVectors(e,n),On.lengthSq()===0&&(On.z=1),On.normalize(),mr.crossVectors(r,On),mr.lengthSq()===0&&(Math.abs(r.z)===1?On.x+=1e-4:On.z+=1e-4,On.normalize(),mr.crossVectors(r,On)),mr.normalize(),il.crossVectors(On,mr),a[0]=mr.x,a[4]=il.x,a[8]=On.x,a[1]=mr.y,a[5]=il.y,a[9]=On.y,a[2]=mr.z,a[6]=il.z,a[10]=On.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,a=n.elements,c=this.elements,u=r[0],f=r[4],p=r[8],m=r[12],_=r[1],x=r[5],y=r[9],S=r[13],E=r[2],T=r[6],g=r[10],v=r[14],D=r[3],N=r[7],A=r[11],j=r[15],k=a[0],U=a[4],B=a[8],P=a[12],C=a[1],z=a[5],oe=a[9],J=a[13],de=a[2],he=a[6],ae=a[10],ce=a[14],H=a[3],le=a[7],re=a[11],F=a[15];return c[0]=u*k+f*C+p*de+m*H,c[4]=u*U+f*z+p*he+m*le,c[8]=u*B+f*oe+p*ae+m*re,c[12]=u*P+f*J+p*ce+m*F,c[1]=_*k+x*C+y*de+S*H,c[5]=_*U+x*z+y*he+S*le,c[9]=_*B+x*oe+y*ae+S*re,c[13]=_*P+x*J+y*ce+S*F,c[2]=E*k+T*C+g*de+v*H,c[6]=E*U+T*z+g*he+v*le,c[10]=E*B+T*oe+g*ae+v*re,c[14]=E*P+T*J+g*ce+v*F,c[3]=D*k+N*C+A*de+j*H,c[7]=D*U+N*z+A*he+j*le,c[11]=D*B+N*oe+A*ae+j*re,c[15]=D*P+N*J+A*ce+j*F,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[4],a=e[8],c=e[12],u=e[1],f=e[5],p=e[9],m=e[13],_=e[2],x=e[6],y=e[10],S=e[14],E=e[3],T=e[7],g=e[11],v=e[15];return E*(+c*p*x-a*m*x-c*f*y+r*m*y+a*f*S-r*p*S)+T*(+n*p*S-n*m*y+c*u*y-a*u*S+a*m*_-c*p*_)+g*(+n*m*x-n*f*S-c*u*x+r*u*S+c*f*_-r*m*_)+v*(-a*f*_-n*p*x+n*f*y+a*u*x-r*u*y+r*p*_)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,r){const a=this.elements;return e.isVector3?(a[12]=e.x,a[13]=e.y,a[14]=e.z):(a[12]=e,a[13]=n,a[14]=r),this}invert(){const e=this.elements,n=e[0],r=e[1],a=e[2],c=e[3],u=e[4],f=e[5],p=e[6],m=e[7],_=e[8],x=e[9],y=e[10],S=e[11],E=e[12],T=e[13],g=e[14],v=e[15],D=x*g*m-T*y*m+T*p*S-f*g*S-x*p*v+f*y*v,N=E*y*m-_*g*m-E*p*S+u*g*S+_*p*v-u*y*v,A=_*T*m-E*x*m+E*f*S-u*T*S-_*f*v+u*x*v,j=E*x*p-_*T*p-E*f*y+u*T*y+_*f*g-u*x*g,k=n*D+r*N+a*A+c*j;if(k===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const U=1/k;return e[0]=D*U,e[1]=(T*y*c-x*g*c-T*a*S+r*g*S+x*a*v-r*y*v)*U,e[2]=(f*g*c-T*p*c+T*a*m-r*g*m-f*a*v+r*p*v)*U,e[3]=(x*p*c-f*y*c-x*a*m+r*y*m+f*a*S-r*p*S)*U,e[4]=N*U,e[5]=(_*g*c-E*y*c+E*a*S-n*g*S-_*a*v+n*y*v)*U,e[6]=(E*p*c-u*g*c-E*a*m+n*g*m+u*a*v-n*p*v)*U,e[7]=(u*y*c-_*p*c+_*a*m-n*y*m-u*a*S+n*p*S)*U,e[8]=A*U,e[9]=(E*x*c-_*T*c-E*r*S+n*T*S+_*r*v-n*x*v)*U,e[10]=(u*T*c-E*f*c+E*r*m-n*T*m-u*r*v+n*f*v)*U,e[11]=(_*f*c-u*x*c-_*r*m+n*x*m+u*r*S-n*f*S)*U,e[12]=j*U,e[13]=(_*T*a-E*x*a+E*r*y-n*T*y-_*r*g+n*x*g)*U,e[14]=(E*f*a-u*T*a-E*r*p+n*T*p+u*r*g-n*f*g)*U,e[15]=(u*x*a-_*f*a+_*r*p-n*x*p-u*r*y+n*f*y)*U,this}scale(e){const n=this.elements,r=e.x,a=e.y,c=e.z;return n[0]*=r,n[4]*=a,n[8]*=c,n[1]*=r,n[5]*=a,n[9]*=c,n[2]*=r,n[6]*=a,n[10]*=c,n[3]*=r,n[7]*=a,n[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],a=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,r,a))}makeTranslation(e,n,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,r,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,n,-r,0,0,r,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,0,r,0,0,1,0,0,-r,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,0,r,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const r=Math.cos(n),a=Math.sin(n),c=1-r,u=e.x,f=e.y,p=e.z,m=c*u,_=c*f;return this.set(m*u+r,m*f-a*p,m*p+a*f,0,m*f+a*p,_*f+r,_*p-a*u,0,m*p-a*f,_*p+a*u,c*p*p+r,0,0,0,0,1),this}makeScale(e,n,r){return this.set(e,0,0,0,0,n,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,n,r,a,c,u){return this.set(1,r,c,0,e,1,u,0,n,a,1,0,0,0,0,1),this}compose(e,n,r){const a=this.elements,c=n._x,u=n._y,f=n._z,p=n._w,m=c+c,_=u+u,x=f+f,y=c*m,S=c*_,E=c*x,T=u*_,g=u*x,v=f*x,D=p*m,N=p*_,A=p*x,j=r.x,k=r.y,U=r.z;return a[0]=(1-(T+v))*j,a[1]=(S+A)*j,a[2]=(E-N)*j,a[3]=0,a[4]=(S-A)*k,a[5]=(1-(y+v))*k,a[6]=(g+D)*k,a[7]=0,a[8]=(E+N)*U,a[9]=(g-D)*U,a[10]=(1-(y+T))*U,a[11]=0,a[12]=e.x,a[13]=e.y,a[14]=e.z,a[15]=1,this}decompose(e,n,r){const a=this.elements;let c=Cs.set(a[0],a[1],a[2]).length();const u=Cs.set(a[4],a[5],a[6]).length(),f=Cs.set(a[8],a[9],a[10]).length();this.determinant()<0&&(c=-c),e.x=a[12],e.y=a[13],e.z=a[14],ci.copy(this);const m=1/c,_=1/u,x=1/f;return ci.elements[0]*=m,ci.elements[1]*=m,ci.elements[2]*=m,ci.elements[4]*=_,ci.elements[5]*=_,ci.elements[6]*=_,ci.elements[8]*=x,ci.elements[9]*=x,ci.elements[10]*=x,n.setFromRotationMatrix(ci),r.x=c,r.y=u,r.z=f,this}makePerspective(e,n,r,a,c,u,f=Hi){const p=this.elements,m=2*c/(n-e),_=2*c/(r-a),x=(n+e)/(n-e),y=(r+a)/(r-a);let S,E;if(f===Hi)S=-(u+c)/(u-c),E=-2*u*c/(u-c);else if(f===Il)S=-u/(u-c),E=-u*c/(u-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+f);return p[0]=m,p[4]=0,p[8]=x,p[12]=0,p[1]=0,p[5]=_,p[9]=y,p[13]=0,p[2]=0,p[6]=0,p[10]=S,p[14]=E,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,n,r,a,c,u,f=Hi){const p=this.elements,m=1/(n-e),_=1/(r-a),x=1/(u-c),y=(n+e)*m,S=(r+a)*_;let E,T;if(f===Hi)E=(u+c)*x,T=-2*x;else if(f===Il)E=c*x,T=-1*x;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+f);return p[0]=2*m,p[4]=0,p[8]=0,p[12]=-y,p[1]=0,p[5]=2*_,p[9]=0,p[13]=-S,p[2]=0,p[6]=0,p[10]=T,p[14]=-E,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const n=this.elements,r=e.elements;for(let a=0;a<16;a++)if(n[a]!==r[a])return!1;return!0}fromArray(e,n=0){for(let r=0;r<16;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e[n+9]=r[9],e[n+10]=r[10],e[n+11]=r[11],e[n+12]=r[12],e[n+13]=r[13],e[n+14]=r[14],e[n+15]=r[15],e}}const Cs=new q,ci=new Vt,Px=new q(0,0,0),Dx=new q(1,1,1),mr=new q,il=new q,On=new q,em=new Vt,tm=new Vo;class Wi{constructor(e=0,n=0,r=0,a=Wi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=r,this._order=a}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,r,a=this._order){return this._x=e,this._y=n,this._z=r,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,r=!0){const a=e.elements,c=a[0],u=a[4],f=a[8],p=a[1],m=a[5],_=a[9],x=a[2],y=a[6],S=a[10];switch(n){case"XYZ":this._y=Math.asin(Dn(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-_,S),this._z=Math.atan2(-u,c)):(this._x=Math.atan2(y,m),this._z=0);break;case"YXZ":this._x=Math.asin(-Dn(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(f,S),this._z=Math.atan2(p,m)):(this._y=Math.atan2(-x,c),this._z=0);break;case"ZXY":this._x=Math.asin(Dn(y,-1,1)),Math.abs(y)<.9999999?(this._y=Math.atan2(-x,S),this._z=Math.atan2(-u,m)):(this._y=0,this._z=Math.atan2(p,c));break;case"ZYX":this._y=Math.asin(-Dn(x,-1,1)),Math.abs(x)<.9999999?(this._x=Math.atan2(y,S),this._z=Math.atan2(p,c)):(this._x=0,this._z=Math.atan2(-u,m));break;case"YZX":this._z=Math.asin(Dn(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-_,m),this._y=Math.atan2(-x,c)):(this._x=0,this._y=Math.atan2(f,S));break;case"XZY":this._z=Math.asin(-Dn(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(y,m),this._y=Math.atan2(f,c)):(this._x=Math.atan2(-_,S),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,r){return em.makeRotationFromQuaternion(e),this.setFromRotationMatrix(em,n,r)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return tm.setFromEuler(this),this.setFromQuaternion(tm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Wi.DEFAULT_ORDER="XYZ";class hg{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Nx=0;const nm=new q,bs=new Vo,Ui=new Vt,rl=new q,Lo=new q,Lx=new q,Ix=new Vo,im=new q(1,0,0),rm=new q(0,1,0),sm=new q(0,0,1),om={type:"added"},Ux={type:"removed"},Rs={type:"childadded",child:null},Fu={type:"childremoved",child:null};class yn extends qs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Nx++}),this.uuid=Ho(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=yn.DEFAULT_UP.clone();const e=new q,n=new Wi,r=new Vo,a=new q(1,1,1);function c(){r.setFromEuler(n,!1)}function u(){n.setFromQuaternion(r,void 0,!1)}n._onChange(c),r._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new Vt},normalMatrix:{value:new ct}}),this.matrix=new Vt,this.matrixWorld=new Vt,this.matrixAutoUpdate=yn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=yn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new hg,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return bs.setFromAxisAngle(e,n),this.quaternion.multiply(bs),this}rotateOnWorldAxis(e,n){return bs.setFromAxisAngle(e,n),this.quaternion.premultiply(bs),this}rotateX(e){return this.rotateOnAxis(im,e)}rotateY(e){return this.rotateOnAxis(rm,e)}rotateZ(e){return this.rotateOnAxis(sm,e)}translateOnAxis(e,n){return nm.copy(e).applyQuaternion(this.quaternion),this.position.add(nm.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(im,e)}translateY(e){return this.translateOnAxis(rm,e)}translateZ(e){return this.translateOnAxis(sm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ui.copy(this.matrixWorld).invert())}lookAt(e,n,r){e.isVector3?rl.copy(e):rl.set(e,n,r);const a=this.parent;this.updateWorldMatrix(!0,!1),Lo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ui.lookAt(Lo,rl,this.up):Ui.lookAt(rl,Lo,this.up),this.quaternion.setFromRotationMatrix(Ui),a&&(Ui.extractRotation(a.matrixWorld),bs.setFromRotationMatrix(Ui),this.quaternion.premultiply(bs.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(om),Rs.child=e,this.dispatchEvent(Rs),Rs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(Ux),Fu.child=e,this.dispatchEvent(Fu),Fu.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ui.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ui.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ui),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(om),Rs.child=e,this.dispatchEvent(Rs),Rs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let r=0,a=this.children.length;r<a;r++){const u=this.children[r].getObjectByProperty(e,n);if(u!==void 0)return u}}getObjectsByProperty(e,n,r=[]){this[e]===n&&r.push(this);const a=this.children;for(let c=0,u=a.length;c<u;c++)a[c].getObjectsByProperty(e,n,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Lo,e,Lx),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Lo,Ix,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].updateMatrixWorld(e)}updateWorldMatrix(e,n){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const a=this.children;for(let c=0,u=a.length;c<u;c++)a[c].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",r={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.visibility=this._visibility,a.active=this._active,a.bounds=this._bounds.map(f=>({boxInitialized:f.boxInitialized,boxMin:f.box.min.toArray(),boxMax:f.box.max.toArray(),sphereInitialized:f.sphereInitialized,sphereRadius:f.sphere.radius,sphereCenter:f.sphere.center.toArray()})),a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.geometryCount=this._geometryCount,a.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(a.boundingSphere={center:a.boundingSphere.center.toArray(),radius:a.boundingSphere.radius}),this.boundingBox!==null&&(a.boundingBox={min:a.boundingBox.min.toArray(),max:a.boundingBox.max.toArray()}));function c(f,p){return f[p.uuid]===void 0&&(f[p.uuid]=p.toJSON(e)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=c(e.geometries,this.geometry);const f=this.geometry.parameters;if(f!==void 0&&f.shapes!==void 0){const p=f.shapes;if(Array.isArray(p))for(let m=0,_=p.length;m<_;m++){const x=p[m];c(e.shapes,x)}else c(e.shapes,p)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const f=[];for(let p=0,m=this.material.length;p<m;p++)f.push(c(e.materials,this.material[p]));a.material=f}else a.material=c(e.materials,this.material);if(this.children.length>0){a.children=[];for(let f=0;f<this.children.length;f++)a.children.push(this.children[f].toJSON(e).object)}if(this.animations.length>0){a.animations=[];for(let f=0;f<this.animations.length;f++){const p=this.animations[f];a.animations.push(c(e.animations,p))}}if(n){const f=u(e.geometries),p=u(e.materials),m=u(e.textures),_=u(e.images),x=u(e.shapes),y=u(e.skeletons),S=u(e.animations),E=u(e.nodes);f.length>0&&(r.geometries=f),p.length>0&&(r.materials=p),m.length>0&&(r.textures=m),_.length>0&&(r.images=_),x.length>0&&(r.shapes=x),y.length>0&&(r.skeletons=y),S.length>0&&(r.animations=S),E.length>0&&(r.nodes=E)}return r.object=a,r;function u(f){const p=[];for(const m in f){const _=f[m];delete _.metadata,p.push(_)}return p}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let r=0;r<e.children.length;r++){const a=e.children[r];this.add(a.clone())}return this}}yn.DEFAULT_UP=new q(0,1,0);yn.DEFAULT_MATRIX_AUTO_UPDATE=!0;yn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ui=new q,ki=new q,Ou=new q,Fi=new q,Ps=new q,Ds=new q,am=new q,zu=new q,Bu=new q,Hu=new q,Vu=new Wt,Gu=new Wt,Wu=new Wt;class Qn{constructor(e=new q,n=new q,r=new q){this.a=e,this.b=n,this.c=r}static getNormal(e,n,r,a){a.subVectors(r,n),ui.subVectors(e,n),a.cross(ui);const c=a.lengthSq();return c>0?a.multiplyScalar(1/Math.sqrt(c)):a.set(0,0,0)}static getBarycoord(e,n,r,a,c){ui.subVectors(a,n),ki.subVectors(r,n),Ou.subVectors(e,n);const u=ui.dot(ui),f=ui.dot(ki),p=ui.dot(Ou),m=ki.dot(ki),_=ki.dot(Ou),x=u*m-f*f;if(x===0)return c.set(0,0,0),null;const y=1/x,S=(m*p-f*_)*y,E=(u*_-f*p)*y;return c.set(1-S-E,E,S)}static containsPoint(e,n,r,a){return this.getBarycoord(e,n,r,a,Fi)===null?!1:Fi.x>=0&&Fi.y>=0&&Fi.x+Fi.y<=1}static getInterpolation(e,n,r,a,c,u,f,p){return this.getBarycoord(e,n,r,a,Fi)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(c,Fi.x),p.addScaledVector(u,Fi.y),p.addScaledVector(f,Fi.z),p)}static getInterpolatedAttribute(e,n,r,a,c,u){return Vu.setScalar(0),Gu.setScalar(0),Wu.setScalar(0),Vu.fromBufferAttribute(e,n),Gu.fromBufferAttribute(e,r),Wu.fromBufferAttribute(e,a),u.setScalar(0),u.addScaledVector(Vu,c.x),u.addScaledVector(Gu,c.y),u.addScaledVector(Wu,c.z),u}static isFrontFacing(e,n,r,a){return ui.subVectors(r,n),ki.subVectors(e,n),ui.cross(ki).dot(a)<0}set(e,n,r){return this.a.copy(e),this.b.copy(n),this.c.copy(r),this}setFromPointsAndIndices(e,n,r,a){return this.a.copy(e[n]),this.b.copy(e[r]),this.c.copy(e[a]),this}setFromAttributeAndIndices(e,n,r,a){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,a),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ui.subVectors(this.c,this.b),ki.subVectors(this.a,this.b),ui.cross(ki).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Qn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Qn.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,r,a,c){return Qn.getInterpolation(e,this.a,this.b,this.c,n,r,a,c)}containsPoint(e){return Qn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Qn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const r=this.a,a=this.b,c=this.c;let u,f;Ps.subVectors(a,r),Ds.subVectors(c,r),zu.subVectors(e,r);const p=Ps.dot(zu),m=Ds.dot(zu);if(p<=0&&m<=0)return n.copy(r);Bu.subVectors(e,a);const _=Ps.dot(Bu),x=Ds.dot(Bu);if(_>=0&&x<=_)return n.copy(a);const y=p*x-_*m;if(y<=0&&p>=0&&_<=0)return u=p/(p-_),n.copy(r).addScaledVector(Ps,u);Hu.subVectors(e,c);const S=Ps.dot(Hu),E=Ds.dot(Hu);if(E>=0&&S<=E)return n.copy(c);const T=S*m-p*E;if(T<=0&&m>=0&&E<=0)return f=m/(m-E),n.copy(r).addScaledVector(Ds,f);const g=_*E-S*x;if(g<=0&&x-_>=0&&S-E>=0)return am.subVectors(c,a),f=(x-_)/(x-_+(S-E)),n.copy(a).addScaledVector(am,f);const v=1/(g+T+y);return u=T*v,f=y*v,n.copy(r).addScaledVector(Ps,u).addScaledVector(Ds,f)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const pg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},gr={h:0,s:0,l:0},sl={h:0,s:0,l:0};function ju(s,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?s+(e-s)*6*n:n<1/2?e:n<2/3?s+(e-s)*6*(2/3-n):s}class bt{constructor(e,n,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,r)}set(e,n,r){if(n===void 0&&r===void 0){const a=e;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(e,n,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Kn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,yt.toWorkingColorSpace(this,n),this}setRGB(e,n,r,a=yt.workingColorSpace){return this.r=e,this.g=n,this.b=r,yt.toWorkingColorSpace(this,a),this}setHSL(e,n,r,a=yt.workingColorSpace){if(e=xx(e,1),n=Dn(n,0,1),r=Dn(r,0,1),n===0)this.r=this.g=this.b=r;else{const c=r<=.5?r*(1+n):r+n-r*n,u=2*r-c;this.r=ju(u,c,e+1/3),this.g=ju(u,c,e),this.b=ju(u,c,e-1/3)}return yt.toWorkingColorSpace(this,a),this}setStyle(e,n=Kn){function r(c){c!==void 0&&parseFloat(c)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const u=a[1],f=a[2];switch(u){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,n);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,n);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=a[1],u=c.length;if(u===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,n);if(u===6)return this.setHex(parseInt(c,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Kn){const r=pg[e.toLowerCase()];return r!==void 0?this.setHex(r,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Vi(e.r),this.g=Vi(e.g),this.b=Vi(e.b),this}copyLinearToSRGB(e){return this.r=Bs(e.r),this.g=Bs(e.g),this.b=Bs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Kn){return yt.fromWorkingColorSpace(pn.copy(this),e),Math.round(Dn(pn.r*255,0,255))*65536+Math.round(Dn(pn.g*255,0,255))*256+Math.round(Dn(pn.b*255,0,255))}getHexString(e=Kn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=yt.workingColorSpace){yt.fromWorkingColorSpace(pn.copy(this),n);const r=pn.r,a=pn.g,c=pn.b,u=Math.max(r,a,c),f=Math.min(r,a,c);let p,m;const _=(f+u)/2;if(f===u)p=0,m=0;else{const x=u-f;switch(m=_<=.5?x/(u+f):x/(2-u-f),u){case r:p=(a-c)/x+(a<c?6:0);break;case a:p=(c-r)/x+2;break;case c:p=(r-a)/x+4;break}p/=6}return e.h=p,e.s=m,e.l=_,e}getRGB(e,n=yt.workingColorSpace){return yt.fromWorkingColorSpace(pn.copy(this),n),e.r=pn.r,e.g=pn.g,e.b=pn.b,e}getStyle(e=Kn){yt.fromWorkingColorSpace(pn.copy(this),e);const n=pn.r,r=pn.g,a=pn.b;return e!==Kn?`color(${e} ${n.toFixed(3)} ${r.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(r*255)},${Math.round(a*255)})`}offsetHSL(e,n,r){return this.getHSL(gr),this.setHSL(gr.h+e,gr.s+n,gr.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,r){return this.r=e.r+(n.r-e.r)*r,this.g=e.g+(n.g-e.g)*r,this.b=e.b+(n.b-e.b)*r,this}lerpHSL(e,n){this.getHSL(gr),e.getHSL(sl);const r=bu(gr.h,sl.h,n),a=bu(gr.s,sl.s,n),c=bu(gr.l,sl.l,n);return this.setHSL(r,a,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,r=this.g,a=this.b,c=e.elements;return this.r=c[0]*n+c[3]*r+c[6]*a,this.g=c[1]*n+c[4]*r+c[7]*a,this.b=c[2]*n+c[5]*r+c[8]*a,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const pn=new bt;bt.NAMES=pg;let kx=0;class $s extends qs{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:kx++}),this.uuid=Ho(),this.name="",this.blending=Os,this.side=Sr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=sd,this.blendDst=od,this.blendEquation=jr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new bt(0,0,0),this.blendAlpha=0,this.depthFunc=Hs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Wp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ms,this.stencilZFail=Ms,this.stencilZPass=Ms,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const r=e[n];if(r===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const a=this[n];if(a===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(r):a&&a.isVector3&&r&&r.isVector3?a.copy(r):this[n]=r}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const r={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Os&&(r.blending=this.blending),this.side!==Sr&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==sd&&(r.blendSrc=this.blendSrc),this.blendDst!==od&&(r.blendDst=this.blendDst),this.blendEquation!==jr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Hs&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Wp&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ms&&(r.stencilFail=this.stencilFail),this.stencilZFail!==Ms&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==Ms&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function a(c){const u=[];for(const f in c){const p=c[f];delete p.metadata,u.push(p)}return u}if(n){const c=a(e.textures),u=a(e.images);c.length>0&&(r.textures=c),u.length>0&&(r.images=u)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let r=null;if(n!==null){const a=n.length;r=new Array(a);for(let c=0;c!==a;++c)r[c]=n[c].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Oo extends $s{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new bt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Wi,this.combine=Zm,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Xt=new q,ol=new Rt;class hi{constructor(e,n,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=r,this.usage=jp,this.updateRanges=[],this.gpuType=Bi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,r){e*=this.itemSize,r*=n.itemSize;for(let a=0,c=this.itemSize;a<c;a++)this.array[e+a]=n.array[r+a];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,r=this.count;n<r;n++)ol.fromBufferAttribute(this,n),ol.applyMatrix3(e),this.setXY(n,ol.x,ol.y);else if(this.itemSize===3)for(let n=0,r=this.count;n<r;n++)Xt.fromBufferAttribute(this,n),Xt.applyMatrix3(e),this.setXYZ(n,Xt.x,Xt.y,Xt.z);return this}applyMatrix4(e){for(let n=0,r=this.count;n<r;n++)Xt.fromBufferAttribute(this,n),Xt.applyMatrix4(e),this.setXYZ(n,Xt.x,Xt.y,Xt.z);return this}applyNormalMatrix(e){for(let n=0,r=this.count;n<r;n++)Xt.fromBufferAttribute(this,n),Xt.applyNormalMatrix(e),this.setXYZ(n,Xt.x,Xt.y,Xt.z);return this}transformDirection(e){for(let n=0,r=this.count;n<r;n++)Xt.fromBufferAttribute(this,n),Xt.transformDirection(e),this.setXYZ(n,Xt.x,Xt.y,Xt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let r=this.array[e*this.itemSize+n];return this.normalized&&(r=Po(r,this.array)),r}setComponent(e,n,r){return this.normalized&&(r=Pn(r,this.array)),this.array[e*this.itemSize+n]=r,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Po(n,this.array)),n}setX(e,n){return this.normalized&&(n=Pn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Po(n,this.array)),n}setY(e,n){return this.normalized&&(n=Pn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Po(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Pn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Po(n,this.array)),n}setW(e,n){return this.normalized&&(n=Pn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,r){return e*=this.itemSize,this.normalized&&(n=Pn(n,this.array),r=Pn(r,this.array)),this.array[e+0]=n,this.array[e+1]=r,this}setXYZ(e,n,r,a){return e*=this.itemSize,this.normalized&&(n=Pn(n,this.array),r=Pn(r,this.array),a=Pn(a,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=a,this}setXYZW(e,n,r,a,c){return e*=this.itemSize,this.normalized&&(n=Pn(n,this.array),r=Pn(r,this.array),a=Pn(a,this.array),c=Pn(c,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=a,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==jp&&(e.usage=this.usage),e}}class mg extends hi{constructor(e,n,r){super(new Uint16Array(e),n,r)}}class gg extends hi{constructor(e,n,r){super(new Uint32Array(e),n,r)}}class Yt extends hi{constructor(e,n,r){super(new Float32Array(e),n,r)}}let Fx=0;const $n=new Vt,Xu=new yn,Ns=new q,zn=new Go,Io=new Go,rn=new q;class Sn extends qs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Fx++}),this.uuid=Ho(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(ug(e)?gg:mg)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,r=0){this.groups.push({start:e,count:n,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const c=new ct().getNormalMatrix(e);r.applyNormalMatrix(c),r.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(e),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return $n.makeRotationFromQuaternion(e),this.applyMatrix4($n),this}rotateX(e){return $n.makeRotationX(e),this.applyMatrix4($n),this}rotateY(e){return $n.makeRotationY(e),this.applyMatrix4($n),this}rotateZ(e){return $n.makeRotationZ(e),this.applyMatrix4($n),this}translate(e,n,r){return $n.makeTranslation(e,n,r),this.applyMatrix4($n),this}scale(e,n,r){return $n.makeScale(e,n,r),this.applyMatrix4($n),this}lookAt(e){return Xu.lookAt(e),Xu.updateMatrix(),this.applyMatrix4(Xu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ns).negate(),this.translate(Ns.x,Ns.y,Ns.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const r=[];for(let a=0,c=e.length;a<c;a++){const u=e[a];r.push(u.x,u.y,u.z||0)}this.setAttribute("position",new Yt(r,3))}else{for(let r=0,a=n.count;r<a;r++){const c=e[r];n.setXYZ(r,c.x,c.y,c.z||0)}e.length>n.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Go);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new q(-1/0,-1/0,-1/0),new q(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let r=0,a=n.length;r<a;r++){const c=n[r];zn.setFromBufferAttribute(c),this.morphTargetsRelative?(rn.addVectors(this.boundingBox.min,zn.min),this.boundingBox.expandByPoint(rn),rn.addVectors(this.boundingBox.max,zn.max),this.boundingBox.expandByPoint(rn)):(this.boundingBox.expandByPoint(zn.min),this.boundingBox.expandByPoint(zn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Wo);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new q,1/0);return}if(e){const r=this.boundingSphere.center;if(zn.setFromBufferAttribute(e),n)for(let c=0,u=n.length;c<u;c++){const f=n[c];Io.setFromBufferAttribute(f),this.morphTargetsRelative?(rn.addVectors(zn.min,Io.min),zn.expandByPoint(rn),rn.addVectors(zn.max,Io.max),zn.expandByPoint(rn)):(zn.expandByPoint(Io.min),zn.expandByPoint(Io.max))}zn.getCenter(r);let a=0;for(let c=0,u=e.count;c<u;c++)rn.fromBufferAttribute(e,c),a=Math.max(a,r.distanceToSquared(rn));if(n)for(let c=0,u=n.length;c<u;c++){const f=n[c],p=this.morphTargetsRelative;for(let m=0,_=f.count;m<_;m++)rn.fromBufferAttribute(f,m),p&&(Ns.fromBufferAttribute(e,m),rn.add(Ns)),a=Math.max(a,r.distanceToSquared(rn))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=n.position,a=n.normal,c=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new hi(new Float32Array(4*r.count),4));const u=this.getAttribute("tangent"),f=[],p=[];for(let B=0;B<r.count;B++)f[B]=new q,p[B]=new q;const m=new q,_=new q,x=new q,y=new Rt,S=new Rt,E=new Rt,T=new q,g=new q;function v(B,P,C){m.fromBufferAttribute(r,B),_.fromBufferAttribute(r,P),x.fromBufferAttribute(r,C),y.fromBufferAttribute(c,B),S.fromBufferAttribute(c,P),E.fromBufferAttribute(c,C),_.sub(m),x.sub(m),S.sub(y),E.sub(y);const z=1/(S.x*E.y-E.x*S.y);isFinite(z)&&(T.copy(_).multiplyScalar(E.y).addScaledVector(x,-S.y).multiplyScalar(z),g.copy(x).multiplyScalar(S.x).addScaledVector(_,-E.x).multiplyScalar(z),f[B].add(T),f[P].add(T),f[C].add(T),p[B].add(g),p[P].add(g),p[C].add(g))}let D=this.groups;D.length===0&&(D=[{start:0,count:e.count}]);for(let B=0,P=D.length;B<P;++B){const C=D[B],z=C.start,oe=C.count;for(let J=z,de=z+oe;J<de;J+=3)v(e.getX(J+0),e.getX(J+1),e.getX(J+2))}const N=new q,A=new q,j=new q,k=new q;function U(B){j.fromBufferAttribute(a,B),k.copy(j);const P=f[B];N.copy(P),N.sub(j.multiplyScalar(j.dot(P))).normalize(),A.crossVectors(k,P);const z=A.dot(p[B])<0?-1:1;u.setXYZW(B,N.x,N.y,N.z,z)}for(let B=0,P=D.length;B<P;++B){const C=D[B],z=C.start,oe=C.count;for(let J=z,de=z+oe;J<de;J+=3)U(e.getX(J+0)),U(e.getX(J+1)),U(e.getX(J+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new hi(new Float32Array(n.count*3),3),this.setAttribute("normal",r);else for(let y=0,S=r.count;y<S;y++)r.setXYZ(y,0,0,0);const a=new q,c=new q,u=new q,f=new q,p=new q,m=new q,_=new q,x=new q;if(e)for(let y=0,S=e.count;y<S;y+=3){const E=e.getX(y+0),T=e.getX(y+1),g=e.getX(y+2);a.fromBufferAttribute(n,E),c.fromBufferAttribute(n,T),u.fromBufferAttribute(n,g),_.subVectors(u,c),x.subVectors(a,c),_.cross(x),f.fromBufferAttribute(r,E),p.fromBufferAttribute(r,T),m.fromBufferAttribute(r,g),f.add(_),p.add(_),m.add(_),r.setXYZ(E,f.x,f.y,f.z),r.setXYZ(T,p.x,p.y,p.z),r.setXYZ(g,m.x,m.y,m.z)}else for(let y=0,S=n.count;y<S;y+=3)a.fromBufferAttribute(n,y+0),c.fromBufferAttribute(n,y+1),u.fromBufferAttribute(n,y+2),_.subVectors(u,c),x.subVectors(a,c),_.cross(x),r.setXYZ(y+0,_.x,_.y,_.z),r.setXYZ(y+1,_.x,_.y,_.z),r.setXYZ(y+2,_.x,_.y,_.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,r=e.count;n<r;n++)rn.fromBufferAttribute(e,n),rn.normalize(),e.setXYZ(n,rn.x,rn.y,rn.z)}toNonIndexed(){function e(f,p){const m=f.array,_=f.itemSize,x=f.normalized,y=new m.constructor(p.length*_);let S=0,E=0;for(let T=0,g=p.length;T<g;T++){f.isInterleavedBufferAttribute?S=p[T]*f.data.stride+f.offset:S=p[T]*_;for(let v=0;v<_;v++)y[E++]=m[S++]}return new hi(y,_,x)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Sn,r=this.index.array,a=this.attributes;for(const f in a){const p=a[f],m=e(p,r);n.setAttribute(f,m)}const c=this.morphAttributes;for(const f in c){const p=[],m=c[f];for(let _=0,x=m.length;_<x;_++){const y=m[_],S=e(y,r);p.push(S)}n.morphAttributes[f]=p}n.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let f=0,p=u.length;f<p;f++){const m=u[f];n.addGroup(m.start,m.count,m.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const p=this.parameters;for(const m in p)p[m]!==void 0&&(e[m]=p[m]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const r=this.attributes;for(const p in r){const m=r[p];e.data.attributes[p]=m.toJSON(e.data)}const a={};let c=!1;for(const p in this.morphAttributes){const m=this.morphAttributes[p],_=[];for(let x=0,y=m.length;x<y;x++){const S=m[x];_.push(S.toJSON(e.data))}_.length>0&&(a[p]=_,c=!0)}c&&(e.data.morphAttributes=a,e.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(e.data.groups=JSON.parse(JSON.stringify(u)));const f=this.boundingSphere;return f!==null&&(e.data.boundingSphere={center:f.center.toArray(),radius:f.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone(n));const a=e.attributes;for(const m in a){const _=a[m];this.setAttribute(m,_.clone(n))}const c=e.morphAttributes;for(const m in c){const _=[],x=c[m];for(let y=0,S=x.length;y<S;y++)_.push(x[y].clone(n));this.morphAttributes[m]=_}this.morphTargetsRelative=e.morphTargetsRelative;const u=e.groups;for(let m=0,_=u.length;m<_;m++){const x=u[m];this.addGroup(x.start,x.count,x.materialIndex)}const f=e.boundingBox;f!==null&&(this.boundingBox=f.clone());const p=e.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const lm=new Vt,zr=new nf,al=new Wo,cm=new q,ll=new q,cl=new q,ul=new q,Yu=new q,dl=new q,um=new q,fl=new q;class Jn extends yn{constructor(e=new Sn,n=new Oo){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const a=n[r[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,u=a.length;c<u;c++){const f=a[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=c}}}}getVertexPosition(e,n){const r=this.geometry,a=r.attributes.position,c=r.morphAttributes.position,u=r.morphTargetsRelative;n.fromBufferAttribute(a,e);const f=this.morphTargetInfluences;if(c&&f){dl.set(0,0,0);for(let p=0,m=c.length;p<m;p++){const _=f[p],x=c[p];_!==0&&(Yu.fromBufferAttribute(x,e),u?dl.addScaledVector(Yu,_):dl.addScaledVector(Yu.sub(n),_))}n.add(dl)}return n}raycast(e,n){const r=this.geometry,a=this.material,c=this.matrixWorld;a!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),al.copy(r.boundingSphere),al.applyMatrix4(c),zr.copy(e.ray).recast(e.near),!(al.containsPoint(zr.origin)===!1&&(zr.intersectSphere(al,cm)===null||zr.origin.distanceToSquared(cm)>(e.far-e.near)**2))&&(lm.copy(c).invert(),zr.copy(e.ray).applyMatrix4(lm),!(r.boundingBox!==null&&zr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,n,zr)))}_computeIntersections(e,n,r){let a;const c=this.geometry,u=this.material,f=c.index,p=c.attributes.position,m=c.attributes.uv,_=c.attributes.uv1,x=c.attributes.normal,y=c.groups,S=c.drawRange;if(f!==null)if(Array.isArray(u))for(let E=0,T=y.length;E<T;E++){const g=y[E],v=u[g.materialIndex],D=Math.max(g.start,S.start),N=Math.min(f.count,Math.min(g.start+g.count,S.start+S.count));for(let A=D,j=N;A<j;A+=3){const k=f.getX(A),U=f.getX(A+1),B=f.getX(A+2);a=hl(this,v,e,r,m,_,x,k,U,B),a&&(a.faceIndex=Math.floor(A/3),a.face.materialIndex=g.materialIndex,n.push(a))}}else{const E=Math.max(0,S.start),T=Math.min(f.count,S.start+S.count);for(let g=E,v=T;g<v;g+=3){const D=f.getX(g),N=f.getX(g+1),A=f.getX(g+2);a=hl(this,u,e,r,m,_,x,D,N,A),a&&(a.faceIndex=Math.floor(g/3),n.push(a))}}else if(p!==void 0)if(Array.isArray(u))for(let E=0,T=y.length;E<T;E++){const g=y[E],v=u[g.materialIndex],D=Math.max(g.start,S.start),N=Math.min(p.count,Math.min(g.start+g.count,S.start+S.count));for(let A=D,j=N;A<j;A+=3){const k=A,U=A+1,B=A+2;a=hl(this,v,e,r,m,_,x,k,U,B),a&&(a.faceIndex=Math.floor(A/3),a.face.materialIndex=g.materialIndex,n.push(a))}}else{const E=Math.max(0,S.start),T=Math.min(p.count,S.start+S.count);for(let g=E,v=T;g<v;g+=3){const D=g,N=g+1,A=g+2;a=hl(this,u,e,r,m,_,x,D,N,A),a&&(a.faceIndex=Math.floor(g/3),n.push(a))}}}}function Ox(s,e,n,r,a,c,u,f){let p;if(e.side===Nn?p=r.intersectTriangle(u,c,a,!0,f):p=r.intersectTriangle(a,c,u,e.side===Sr,f),p===null)return null;fl.copy(f),fl.applyMatrix4(s.matrixWorld);const m=n.ray.origin.distanceTo(fl);return m<n.near||m>n.far?null:{distance:m,point:fl.clone(),object:s}}function hl(s,e,n,r,a,c,u,f,p,m){s.getVertexPosition(f,ll),s.getVertexPosition(p,cl),s.getVertexPosition(m,ul);const _=Ox(s,e,n,r,ll,cl,ul,um);if(_){const x=new q;Qn.getBarycoord(um,ll,cl,ul,x),a&&(_.uv=Qn.getInterpolatedAttribute(a,f,p,m,x,new Rt)),c&&(_.uv1=Qn.getInterpolatedAttribute(c,f,p,m,x,new Rt)),u&&(_.normal=Qn.getInterpolatedAttribute(u,f,p,m,x,new q),_.normal.dot(r.direction)>0&&_.normal.multiplyScalar(-1));const y={a:f,b:p,c:m,normal:new q,materialIndex:0};Qn.getNormal(ll,cl,ul,y.normal),_.face=y,_.barycoord=x}return _}class Zr extends Sn{constructor(e=1,n=1,r=1,a=1,c=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:r,widthSegments:a,heightSegments:c,depthSegments:u};const f=this;a=Math.floor(a),c=Math.floor(c),u=Math.floor(u);const p=[],m=[],_=[],x=[];let y=0,S=0;E("z","y","x",-1,-1,r,n,e,u,c,0),E("z","y","x",1,-1,r,n,-e,u,c,1),E("x","z","y",1,1,e,r,n,a,u,2),E("x","z","y",1,-1,e,r,-n,a,u,3),E("x","y","z",1,-1,e,n,r,a,c,4),E("x","y","z",-1,-1,e,n,-r,a,c,5),this.setIndex(p),this.setAttribute("position",new Yt(m,3)),this.setAttribute("normal",new Yt(_,3)),this.setAttribute("uv",new Yt(x,2));function E(T,g,v,D,N,A,j,k,U,B,P){const C=A/U,z=j/B,oe=A/2,J=j/2,de=k/2,he=U+1,ae=B+1;let ce=0,H=0;const le=new q;for(let re=0;re<ae;re++){const F=re*z-J;for(let ie=0;ie<he;ie++){const De=ie*C-oe;le[T]=De*D,le[g]=F*N,le[v]=de,m.push(le.x,le.y,le.z),le[T]=0,le[g]=0,le[v]=k>0?1:-1,_.push(le.x,le.y,le.z),x.push(ie/U),x.push(1-re/B),ce+=1}}for(let re=0;re<B;re++)for(let F=0;F<U;F++){const ie=y+F+he*re,De=y+F+he*(re+1),Z=y+(F+1)+he*(re+1),ue=y+(F+1)+he*re;p.push(ie,De,ue),p.push(De,Z,ue),H+=6}f.addGroup(S,H,P),S+=H,y+=ce}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Zr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Xs(s){const e={};for(const n in s){e[n]={};for(const r in s[n]){const a=s[n][r];a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)?a.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][r]=null):e[n][r]=a.clone():Array.isArray(a)?e[n][r]=a.slice():e[n][r]=a}}return e}function xn(s){const e={};for(let n=0;n<s.length;n++){const r=Xs(s[n]);for(const a in r)e[a]=r[a]}return e}function zx(s){const e=[];for(let n=0;n<s.length;n++)e.push(s[n].clone());return e}function vg(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:yt.workingColorSpace}const Bx={clone:Xs,merge:xn};var Hx=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Vx=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Mr extends $s{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Hx,this.fragmentShader=Vx,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Xs(e.uniforms),this.uniformsGroups=zx(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const a in this.uniforms){const u=this.uniforms[a].value;u&&u.isTexture?n.uniforms[a]={type:"t",value:u.toJSON(e).uuid}:u&&u.isColor?n.uniforms[a]={type:"c",value:u.getHex()}:u&&u.isVector2?n.uniforms[a]={type:"v2",value:u.toArray()}:u&&u.isVector3?n.uniforms[a]={type:"v3",value:u.toArray()}:u&&u.isVector4?n.uniforms[a]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?n.uniforms[a]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?n.uniforms[a]={type:"m4",value:u.toArray()}:n.uniforms[a]={value:u}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const r={};for(const a in this.extensions)this.extensions[a]===!0&&(r[a]=!0);return Object.keys(r).length>0&&(n.extensions=r),n}}class _g extends yn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Vt,this.projectionMatrix=new Vt,this.projectionMatrixInverse=new Vt,this.coordinateSystem=Hi}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const vr=new q,dm=new Rt,fm=new Rt;class Zn extends _g{constructor(e=50,n=1,r=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=a,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Wd*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Pl*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Wd*2*Math.atan(Math.tan(Pl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,r){vr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(vr.x,vr.y).multiplyScalar(-e/vr.z),vr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(vr.x,vr.y).multiplyScalar(-e/vr.z)}getViewSize(e,n){return this.getViewBounds(e,dm,fm),n.subVectors(fm,dm)}setViewOffset(e,n,r,a,c,u){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=a,this.view.width=c,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Pl*.5*this.fov)/this.zoom,r=2*n,a=this.aspect*r,c=-.5*a;const u=this.view;if(this.view!==null&&this.view.enabled){const p=u.fullWidth,m=u.fullHeight;c+=u.offsetX*a/p,n-=u.offsetY*r/m,a*=u.width/p,r*=u.height/m}const f=this.filmOffset;f!==0&&(c+=e*f/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+a,n,n-r,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Ls=-90,Is=1;class Gx extends yn{constructor(e,n,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new Zn(Ls,Is,e,n);a.layers=this.layers,this.add(a);const c=new Zn(Ls,Is,e,n);c.layers=this.layers,this.add(c);const u=new Zn(Ls,Is,e,n);u.layers=this.layers,this.add(u);const f=new Zn(Ls,Is,e,n);f.layers=this.layers,this.add(f);const p=new Zn(Ls,Is,e,n);p.layers=this.layers,this.add(p);const m=new Zn(Ls,Is,e,n);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[r,a,c,u,f,p]=n;for(const m of n)this.remove(m);if(e===Hi)r.up.set(0,1,0),r.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),f.up.set(0,1,0),f.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(e===Il)r.up.set(0,-1,0),r.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),f.up.set(0,-1,0),f.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const m of n)this.add(m),m.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:a}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[c,u,f,p,m,_]=this.children,x=e.getRenderTarget(),y=e.getActiveCubeFace(),S=e.getActiveMipmapLevel(),E=e.xr.enabled;e.xr.enabled=!1;const T=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,a),e.render(n,c),e.setRenderTarget(r,1,a),e.render(n,u),e.setRenderTarget(r,2,a),e.render(n,f),e.setRenderTarget(r,3,a),e.render(n,p),e.setRenderTarget(r,4,a),e.render(n,m),r.texture.generateMipmaps=T,e.setRenderTarget(r,5,a),e.render(n,_),e.setRenderTarget(x,y,S),e.xr.enabled=E,r.texture.needsPMREMUpdate=!0}}class xg extends Ln{constructor(e,n,r,a,c,u,f,p,m,_){e=e!==void 0?e:[],n=n!==void 0?n:Vs,super(e,n,r,a,c,u,f,p,m,_),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Wx extends Kr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},a=[r,r,r,r,r,r];this.texture=new xg(a,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Si}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},a=new Zr(5,5,5),c=new Mr({name:"CubemapFromEquirect",uniforms:Xs(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Nn,blending:xr});c.uniforms.tEquirect.value=n;const u=new Jn(a,c),f=n.minFilter;return n.minFilter===qr&&(n.minFilter=Si),new Gx(1,10,this).update(e,u),n.minFilter=f,u.geometry.dispose(),u.material.dispose(),this}clear(e,n,r,a){const c=e.getRenderTarget();for(let u=0;u<6;u++)e.setRenderTarget(this,u),e.clear(n,r,a);e.setRenderTarget(c)}}const qu=new q,jx=new q,Xx=new ct;class Gr{constructor(e=new q(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,r,a){return this.normal.set(e,n,r),this.constant=a,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,r){const a=qu.subVectors(r,n).cross(jx.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(a,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const r=e.delta(qu),a=this.normal.dot(r);if(a===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const c=-(e.start.dot(this.normal)+this.constant)/a;return c<0||c>1?null:n.copy(e.start).addScaledVector(r,c)}intersectsLine(e){const n=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return n<0&&r>0||r<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const r=n||Xx.getNormalMatrix(e),a=this.coplanarPoint(qu).applyMatrix4(e),c=this.normal.applyMatrix3(r).normalize();return this.constant=-a.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Br=new Wo,pl=new q;class yg{constructor(e=new Gr,n=new Gr,r=new Gr,a=new Gr,c=new Gr,u=new Gr){this.planes=[e,n,r,a,c,u]}set(e,n,r,a,c,u){const f=this.planes;return f[0].copy(e),f[1].copy(n),f[2].copy(r),f[3].copy(a),f[4].copy(c),f[5].copy(u),this}copy(e){const n=this.planes;for(let r=0;r<6;r++)n[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,n=Hi){const r=this.planes,a=e.elements,c=a[0],u=a[1],f=a[2],p=a[3],m=a[4],_=a[5],x=a[6],y=a[7],S=a[8],E=a[9],T=a[10],g=a[11],v=a[12],D=a[13],N=a[14],A=a[15];if(r[0].setComponents(p-c,y-m,g-S,A-v).normalize(),r[1].setComponents(p+c,y+m,g+S,A+v).normalize(),r[2].setComponents(p+u,y+_,g+E,A+D).normalize(),r[3].setComponents(p-u,y-_,g-E,A-D).normalize(),r[4].setComponents(p-f,y-x,g-T,A-N).normalize(),n===Hi)r[5].setComponents(p+f,y+x,g+T,A+N).normalize();else if(n===Il)r[5].setComponents(f,x,T,N).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Br.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Br.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Br)}intersectsSprite(e){return Br.center.set(0,0,0),Br.radius=.7071067811865476,Br.applyMatrix4(e.matrixWorld),this.intersectsSphere(Br)}intersectsSphere(e){const n=this.planes,r=e.center,a=-e.radius;for(let c=0;c<6;c++)if(n[c].distanceToPoint(r)<a)return!1;return!0}intersectsBox(e){const n=this.planes;for(let r=0;r<6;r++){const a=n[r];if(pl.x=a.normal.x>0?e.max.x:e.min.x,pl.y=a.normal.y>0?e.max.y:e.min.y,pl.z=a.normal.z>0?e.max.z:e.min.z,a.distanceToPoint(pl)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let r=0;r<6;r++)if(n[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Sg(){let s=null,e=!1,n=null,r=null;function a(c,u){n(c,u),r=s.requestAnimationFrame(a)}return{start:function(){e!==!0&&n!==null&&(r=s.requestAnimationFrame(a),e=!0)},stop:function(){s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(c){n=c},setContext:function(c){s=c}}}function Yx(s){const e=new WeakMap;function n(f,p){const m=f.array,_=f.usage,x=m.byteLength,y=s.createBuffer();s.bindBuffer(p,y),s.bufferData(p,m,_),f.onUploadCallback();let S;if(m instanceof Float32Array)S=s.FLOAT;else if(m instanceof Uint16Array)f.isFloat16BufferAttribute?S=s.HALF_FLOAT:S=s.UNSIGNED_SHORT;else if(m instanceof Int16Array)S=s.SHORT;else if(m instanceof Uint32Array)S=s.UNSIGNED_INT;else if(m instanceof Int32Array)S=s.INT;else if(m instanceof Int8Array)S=s.BYTE;else if(m instanceof Uint8Array)S=s.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)S=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:y,type:S,bytesPerElement:m.BYTES_PER_ELEMENT,version:f.version,size:x}}function r(f,p,m){const _=p.array,x=p.updateRanges;if(s.bindBuffer(m,f),x.length===0)s.bufferSubData(m,0,_);else{x.sort((S,E)=>S.start-E.start);let y=0;for(let S=1;S<x.length;S++){const E=x[y],T=x[S];T.start<=E.start+E.count+1?E.count=Math.max(E.count,T.start+T.count-E.start):(++y,x[y]=T)}x.length=y+1;for(let S=0,E=x.length;S<E;S++){const T=x[S];s.bufferSubData(m,T.start*_.BYTES_PER_ELEMENT,_,T.start,T.count)}p.clearUpdateRanges()}p.onUploadCallback()}function a(f){return f.isInterleavedBufferAttribute&&(f=f.data),e.get(f)}function c(f){f.isInterleavedBufferAttribute&&(f=f.data);const p=e.get(f);p&&(s.deleteBuffer(p.buffer),e.delete(f))}function u(f,p){if(f.isInterleavedBufferAttribute&&(f=f.data),f.isGLBufferAttribute){const _=e.get(f);(!_||_.version<f.version)&&e.set(f,{buffer:f.buffer,type:f.type,bytesPerElement:f.elementSize,version:f.version});return}const m=e.get(f);if(m===void 0)e.set(f,n(f,p));else if(m.version<f.version){if(m.size!==f.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(m.buffer,f,p),m.version=f.version}}return{get:a,remove:c,update:u}}class Hl extends Sn{constructor(e=1,n=1,r=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:r,heightSegments:a};const c=e/2,u=n/2,f=Math.floor(r),p=Math.floor(a),m=f+1,_=p+1,x=e/f,y=n/p,S=[],E=[],T=[],g=[];for(let v=0;v<_;v++){const D=v*y-u;for(let N=0;N<m;N++){const A=N*x-c;E.push(A,-D,0),T.push(0,0,1),g.push(N/f),g.push(1-v/p)}}for(let v=0;v<p;v++)for(let D=0;D<f;D++){const N=D+m*v,A=D+m*(v+1),j=D+1+m*(v+1),k=D+1+m*v;S.push(N,A,k),S.push(A,j,k)}this.setIndex(S),this.setAttribute("position",new Yt(E,3)),this.setAttribute("normal",new Yt(T,3)),this.setAttribute("uv",new Yt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Hl(e.width,e.height,e.widthSegments,e.heightSegments)}}var qx=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,$x=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Kx=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Zx=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Qx=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Jx=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,e0=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,t0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,n0=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,i0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,r0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,s0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,o0=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,a0=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,l0=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,c0=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,u0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,d0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,f0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,h0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,p0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,m0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,g0=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,v0=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,_0=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,x0=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,y0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,S0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,M0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,E0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,T0="gl_FragColor = linearToOutputTexel( gl_FragColor );",w0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,A0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,C0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,b0=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,R0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,P0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,D0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,N0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,L0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,I0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,U0=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,k0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,F0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,O0=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,z0=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,B0=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,H0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,V0=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,G0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,W0=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,j0=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,X0=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Y0=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,q0=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,$0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,K0=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Z0=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Q0=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,J0=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,ey=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ty=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ny=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,iy=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ry=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,sy=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,oy=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ay=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ly=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,cy=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,uy=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,dy=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,fy=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,hy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,py=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,my=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,gy=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,vy=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,_y=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,xy=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,yy=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Sy=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,My=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Ey=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ty=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,wy=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Ay=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Cy=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,by=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ry=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Py=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Dy=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Ny=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Ly=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Iy=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Uy=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ky=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Fy=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Oy=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,zy=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,By=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Hy=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Vy=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Gy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Wy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,jy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Xy=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Yy=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,qy=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$y=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ky=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Zy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Qy=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Jy=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,eS=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,tS=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,nS=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,iS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,rS=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,sS=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,oS=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,aS=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,lS=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cS=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,uS=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,dS=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,fS=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,hS=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,pS=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,mS=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,gS=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vS=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,_S=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xS=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,yS=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,SS=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,MS=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ES=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,TS=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,wS=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,AS=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ut={alphahash_fragment:qx,alphahash_pars_fragment:$x,alphamap_fragment:Kx,alphamap_pars_fragment:Zx,alphatest_fragment:Qx,alphatest_pars_fragment:Jx,aomap_fragment:e0,aomap_pars_fragment:t0,batching_pars_vertex:n0,batching_vertex:i0,begin_vertex:r0,beginnormal_vertex:s0,bsdfs:o0,iridescence_fragment:a0,bumpmap_pars_fragment:l0,clipping_planes_fragment:c0,clipping_planes_pars_fragment:u0,clipping_planes_pars_vertex:d0,clipping_planes_vertex:f0,color_fragment:h0,color_pars_fragment:p0,color_pars_vertex:m0,color_vertex:g0,common:v0,cube_uv_reflection_fragment:_0,defaultnormal_vertex:x0,displacementmap_pars_vertex:y0,displacementmap_vertex:S0,emissivemap_fragment:M0,emissivemap_pars_fragment:E0,colorspace_fragment:T0,colorspace_pars_fragment:w0,envmap_fragment:A0,envmap_common_pars_fragment:C0,envmap_pars_fragment:b0,envmap_pars_vertex:R0,envmap_physical_pars_fragment:B0,envmap_vertex:P0,fog_vertex:D0,fog_pars_vertex:N0,fog_fragment:L0,fog_pars_fragment:I0,gradientmap_pars_fragment:U0,lightmap_pars_fragment:k0,lights_lambert_fragment:F0,lights_lambert_pars_fragment:O0,lights_pars_begin:z0,lights_toon_fragment:H0,lights_toon_pars_fragment:V0,lights_phong_fragment:G0,lights_phong_pars_fragment:W0,lights_physical_fragment:j0,lights_physical_pars_fragment:X0,lights_fragment_begin:Y0,lights_fragment_maps:q0,lights_fragment_end:$0,logdepthbuf_fragment:K0,logdepthbuf_pars_fragment:Z0,logdepthbuf_pars_vertex:Q0,logdepthbuf_vertex:J0,map_fragment:ey,map_pars_fragment:ty,map_particle_fragment:ny,map_particle_pars_fragment:iy,metalnessmap_fragment:ry,metalnessmap_pars_fragment:sy,morphinstance_vertex:oy,morphcolor_vertex:ay,morphnormal_vertex:ly,morphtarget_pars_vertex:cy,morphtarget_vertex:uy,normal_fragment_begin:dy,normal_fragment_maps:fy,normal_pars_fragment:hy,normal_pars_vertex:py,normal_vertex:my,normalmap_pars_fragment:gy,clearcoat_normal_fragment_begin:vy,clearcoat_normal_fragment_maps:_y,clearcoat_pars_fragment:xy,iridescence_pars_fragment:yy,opaque_fragment:Sy,packing:My,premultiplied_alpha_fragment:Ey,project_vertex:Ty,dithering_fragment:wy,dithering_pars_fragment:Ay,roughnessmap_fragment:Cy,roughnessmap_pars_fragment:by,shadowmap_pars_fragment:Ry,shadowmap_pars_vertex:Py,shadowmap_vertex:Dy,shadowmask_pars_fragment:Ny,skinbase_vertex:Ly,skinning_pars_vertex:Iy,skinning_vertex:Uy,skinnormal_vertex:ky,specularmap_fragment:Fy,specularmap_pars_fragment:Oy,tonemapping_fragment:zy,tonemapping_pars_fragment:By,transmission_fragment:Hy,transmission_pars_fragment:Vy,uv_pars_fragment:Gy,uv_pars_vertex:Wy,uv_vertex:jy,worldpos_vertex:Xy,background_vert:Yy,background_frag:qy,backgroundCube_vert:$y,backgroundCube_frag:Ky,cube_vert:Zy,cube_frag:Qy,depth_vert:Jy,depth_frag:eS,distanceRGBA_vert:tS,distanceRGBA_frag:nS,equirect_vert:iS,equirect_frag:rS,linedashed_vert:sS,linedashed_frag:oS,meshbasic_vert:aS,meshbasic_frag:lS,meshlambert_vert:cS,meshlambert_frag:uS,meshmatcap_vert:dS,meshmatcap_frag:fS,meshnormal_vert:hS,meshnormal_frag:pS,meshphong_vert:mS,meshphong_frag:gS,meshphysical_vert:vS,meshphysical_frag:_S,meshtoon_vert:xS,meshtoon_frag:yS,points_vert:SS,points_frag:MS,shadow_vert:ES,shadow_frag:TS,sprite_vert:wS,sprite_frag:AS},Re={common:{diffuse:{value:new bt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ct},alphaMap:{value:null},alphaMapTransform:{value:new ct},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ct}},envmap:{envMap:{value:null},envMapRotation:{value:new ct},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ct}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ct}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ct},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ct},normalScale:{value:new Rt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ct},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ct}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ct}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ct}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new bt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new bt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ct},alphaTest:{value:0},uvTransform:{value:new ct}},sprite:{diffuse:{value:new bt(16777215)},opacity:{value:1},center:{value:new Rt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ct},alphaMap:{value:null},alphaMapTransform:{value:new ct},alphaTest:{value:0}}},yi={basic:{uniforms:xn([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.fog]),vertexShader:ut.meshbasic_vert,fragmentShader:ut.meshbasic_frag},lambert:{uniforms:xn([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,Re.lights,{emissive:{value:new bt(0)}}]),vertexShader:ut.meshlambert_vert,fragmentShader:ut.meshlambert_frag},phong:{uniforms:xn([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,Re.lights,{emissive:{value:new bt(0)},specular:{value:new bt(1118481)},shininess:{value:30}}]),vertexShader:ut.meshphong_vert,fragmentShader:ut.meshphong_frag},standard:{uniforms:xn([Re.common,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.roughnessmap,Re.metalnessmap,Re.fog,Re.lights,{emissive:{value:new bt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ut.meshphysical_vert,fragmentShader:ut.meshphysical_frag},toon:{uniforms:xn([Re.common,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.gradientmap,Re.fog,Re.lights,{emissive:{value:new bt(0)}}]),vertexShader:ut.meshtoon_vert,fragmentShader:ut.meshtoon_frag},matcap:{uniforms:xn([Re.common,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,{matcap:{value:null}}]),vertexShader:ut.meshmatcap_vert,fragmentShader:ut.meshmatcap_frag},points:{uniforms:xn([Re.points,Re.fog]),vertexShader:ut.points_vert,fragmentShader:ut.points_frag},dashed:{uniforms:xn([Re.common,Re.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ut.linedashed_vert,fragmentShader:ut.linedashed_frag},depth:{uniforms:xn([Re.common,Re.displacementmap]),vertexShader:ut.depth_vert,fragmentShader:ut.depth_frag},normal:{uniforms:xn([Re.common,Re.bumpmap,Re.normalmap,Re.displacementmap,{opacity:{value:1}}]),vertexShader:ut.meshnormal_vert,fragmentShader:ut.meshnormal_frag},sprite:{uniforms:xn([Re.sprite,Re.fog]),vertexShader:ut.sprite_vert,fragmentShader:ut.sprite_frag},background:{uniforms:{uvTransform:{value:new ct},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ut.background_vert,fragmentShader:ut.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ct}},vertexShader:ut.backgroundCube_vert,fragmentShader:ut.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ut.cube_vert,fragmentShader:ut.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ut.equirect_vert,fragmentShader:ut.equirect_frag},distanceRGBA:{uniforms:xn([Re.common,Re.displacementmap,{referencePosition:{value:new q},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ut.distanceRGBA_vert,fragmentShader:ut.distanceRGBA_frag},shadow:{uniforms:xn([Re.lights,Re.fog,{color:{value:new bt(0)},opacity:{value:1}}]),vertexShader:ut.shadow_vert,fragmentShader:ut.shadow_frag}};yi.physical={uniforms:xn([yi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ct},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ct},clearcoatNormalScale:{value:new Rt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ct},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ct},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ct},sheen:{value:0},sheenColor:{value:new bt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ct},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ct},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ct},transmissionSamplerSize:{value:new Rt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ct},attenuationDistance:{value:0},attenuationColor:{value:new bt(0)},specularColor:{value:new bt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ct},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ct},anisotropyVector:{value:new Rt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ct}}]),vertexShader:ut.meshphysical_vert,fragmentShader:ut.meshphysical_frag};const ml={r:0,b:0,g:0},Hr=new Wi,CS=new Vt;function bS(s,e,n,r,a,c,u){const f=new bt(0);let p=c===!0?0:1,m,_,x=null,y=0,S=null;function E(D){let N=D.isScene===!0?D.background:null;return N&&N.isTexture&&(N=(D.backgroundBlurriness>0?n:e).get(N)),N}function T(D){let N=!1;const A=E(D);A===null?v(f,p):A&&A.isColor&&(v(A,1),N=!0);const j=s.xr.getEnvironmentBlendMode();j==="additive"?r.buffers.color.setClear(0,0,0,1,u):j==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,u),(s.autoClear||N)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function g(D,N){const A=E(N);A&&(A.isCubeTexture||A.mapping===zl)?(_===void 0&&(_=new Jn(new Zr(1,1,1),new Mr({name:"BackgroundCubeMaterial",uniforms:Xs(yi.backgroundCube.uniforms),vertexShader:yi.backgroundCube.vertexShader,fragmentShader:yi.backgroundCube.fragmentShader,side:Nn,depthTest:!1,depthWrite:!1,fog:!1})),_.geometry.deleteAttribute("normal"),_.geometry.deleteAttribute("uv"),_.onBeforeRender=function(j,k,U){this.matrixWorld.copyPosition(U.matrixWorld)},Object.defineProperty(_.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(_)),Hr.copy(N.backgroundRotation),Hr.x*=-1,Hr.y*=-1,Hr.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(Hr.y*=-1,Hr.z*=-1),_.material.uniforms.envMap.value=A,_.material.uniforms.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,_.material.uniforms.backgroundBlurriness.value=N.backgroundBlurriness,_.material.uniforms.backgroundIntensity.value=N.backgroundIntensity,_.material.uniforms.backgroundRotation.value.setFromMatrix4(CS.makeRotationFromEuler(Hr)),_.material.toneMapped=yt.getTransfer(A.colorSpace)!==Dt,(x!==A||y!==A.version||S!==s.toneMapping)&&(_.material.needsUpdate=!0,x=A,y=A.version,S=s.toneMapping),_.layers.enableAll(),D.unshift(_,_.geometry,_.material,0,0,null)):A&&A.isTexture&&(m===void 0&&(m=new Jn(new Hl(2,2),new Mr({name:"BackgroundMaterial",uniforms:Xs(yi.background.uniforms),vertexShader:yi.background.vertexShader,fragmentShader:yi.background.fragmentShader,side:Sr,depthTest:!1,depthWrite:!1,fog:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(m)),m.material.uniforms.t2D.value=A,m.material.uniforms.backgroundIntensity.value=N.backgroundIntensity,m.material.toneMapped=yt.getTransfer(A.colorSpace)!==Dt,A.matrixAutoUpdate===!0&&A.updateMatrix(),m.material.uniforms.uvTransform.value.copy(A.matrix),(x!==A||y!==A.version||S!==s.toneMapping)&&(m.material.needsUpdate=!0,x=A,y=A.version,S=s.toneMapping),m.layers.enableAll(),D.unshift(m,m.geometry,m.material,0,0,null))}function v(D,N){D.getRGB(ml,vg(s)),r.buffers.color.setClear(ml.r,ml.g,ml.b,N,u)}return{getClearColor:function(){return f},setClearColor:function(D,N=1){f.set(D),p=N,v(f,p)},getClearAlpha:function(){return p},setClearAlpha:function(D){p=D,v(f,p)},render:T,addToRenderList:g}}function RS(s,e){const n=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},a=y(null);let c=a,u=!1;function f(C,z,oe,J,de){let he=!1;const ae=x(J,oe,z);c!==ae&&(c=ae,m(c.object)),he=S(C,J,oe,de),he&&E(C,J,oe,de),de!==null&&e.update(de,s.ELEMENT_ARRAY_BUFFER),(he||u)&&(u=!1,A(C,z,oe,J),de!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(de).buffer))}function p(){return s.createVertexArray()}function m(C){return s.bindVertexArray(C)}function _(C){return s.deleteVertexArray(C)}function x(C,z,oe){const J=oe.wireframe===!0;let de=r[C.id];de===void 0&&(de={},r[C.id]=de);let he=de[z.id];he===void 0&&(he={},de[z.id]=he);let ae=he[J];return ae===void 0&&(ae=y(p()),he[J]=ae),ae}function y(C){const z=[],oe=[],J=[];for(let de=0;de<n;de++)z[de]=0,oe[de]=0,J[de]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:oe,attributeDivisors:J,object:C,attributes:{},index:null}}function S(C,z,oe,J){const de=c.attributes,he=z.attributes;let ae=0;const ce=oe.getAttributes();for(const H in ce)if(ce[H].location>=0){const re=de[H];let F=he[H];if(F===void 0&&(H==="instanceMatrix"&&C.instanceMatrix&&(F=C.instanceMatrix),H==="instanceColor"&&C.instanceColor&&(F=C.instanceColor)),re===void 0||re.attribute!==F||F&&re.data!==F.data)return!0;ae++}return c.attributesNum!==ae||c.index!==J}function E(C,z,oe,J){const de={},he=z.attributes;let ae=0;const ce=oe.getAttributes();for(const H in ce)if(ce[H].location>=0){let re=he[H];re===void 0&&(H==="instanceMatrix"&&C.instanceMatrix&&(re=C.instanceMatrix),H==="instanceColor"&&C.instanceColor&&(re=C.instanceColor));const F={};F.attribute=re,re&&re.data&&(F.data=re.data),de[H]=F,ae++}c.attributes=de,c.attributesNum=ae,c.index=J}function T(){const C=c.newAttributes;for(let z=0,oe=C.length;z<oe;z++)C[z]=0}function g(C){v(C,0)}function v(C,z){const oe=c.newAttributes,J=c.enabledAttributes,de=c.attributeDivisors;oe[C]=1,J[C]===0&&(s.enableVertexAttribArray(C),J[C]=1),de[C]!==z&&(s.vertexAttribDivisor(C,z),de[C]=z)}function D(){const C=c.newAttributes,z=c.enabledAttributes;for(let oe=0,J=z.length;oe<J;oe++)z[oe]!==C[oe]&&(s.disableVertexAttribArray(oe),z[oe]=0)}function N(C,z,oe,J,de,he,ae){ae===!0?s.vertexAttribIPointer(C,z,oe,de,he):s.vertexAttribPointer(C,z,oe,J,de,he)}function A(C,z,oe,J){T();const de=J.attributes,he=oe.getAttributes(),ae=z.defaultAttributeValues;for(const ce in he){const H=he[ce];if(H.location>=0){let le=de[ce];if(le===void 0&&(ce==="instanceMatrix"&&C.instanceMatrix&&(le=C.instanceMatrix),ce==="instanceColor"&&C.instanceColor&&(le=C.instanceColor)),le!==void 0){const re=le.normalized,F=le.itemSize,ie=e.get(le);if(ie===void 0)continue;const De=ie.buffer,Z=ie.type,ue=ie.bytesPerElement,Se=Z===s.INT||Z===s.UNSIGNED_INT||le.gpuType===Kd;if(le.isInterleavedBufferAttribute){const ve=le.data,Ae=ve.stride,Le=le.offset;if(ve.isInstancedInterleavedBuffer){for(let Ke=0;Ke<H.locationSize;Ke++)v(H.location+Ke,ve.meshPerAttribute);C.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=ve.meshPerAttribute*ve.count)}else for(let Ke=0;Ke<H.locationSize;Ke++)g(H.location+Ke);s.bindBuffer(s.ARRAY_BUFFER,De);for(let Ke=0;Ke<H.locationSize;Ke++)N(H.location+Ke,F/H.locationSize,Z,re,Ae*ue,(Le+F/H.locationSize*Ke)*ue,Se)}else{if(le.isInstancedBufferAttribute){for(let ve=0;ve<H.locationSize;ve++)v(H.location+ve,le.meshPerAttribute);C.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let ve=0;ve<H.locationSize;ve++)g(H.location+ve);s.bindBuffer(s.ARRAY_BUFFER,De);for(let ve=0;ve<H.locationSize;ve++)N(H.location+ve,F/H.locationSize,Z,re,F*ue,F/H.locationSize*ve*ue,Se)}}else if(ae!==void 0){const re=ae[ce];if(re!==void 0)switch(re.length){case 2:s.vertexAttrib2fv(H.location,re);break;case 3:s.vertexAttrib3fv(H.location,re);break;case 4:s.vertexAttrib4fv(H.location,re);break;default:s.vertexAttrib1fv(H.location,re)}}}}D()}function j(){B();for(const C in r){const z=r[C];for(const oe in z){const J=z[oe];for(const de in J)_(J[de].object),delete J[de];delete z[oe]}delete r[C]}}function k(C){if(r[C.id]===void 0)return;const z=r[C.id];for(const oe in z){const J=z[oe];for(const de in J)_(J[de].object),delete J[de];delete z[oe]}delete r[C.id]}function U(C){for(const z in r){const oe=r[z];if(oe[C.id]===void 0)continue;const J=oe[C.id];for(const de in J)_(J[de].object),delete J[de];delete oe[C.id]}}function B(){P(),u=!0,c!==a&&(c=a,m(c.object))}function P(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:f,reset:B,resetDefaultState:P,dispose:j,releaseStatesOfGeometry:k,releaseStatesOfProgram:U,initAttributes:T,enableAttribute:g,disableUnusedAttributes:D}}function PS(s,e,n){let r;function a(m){r=m}function c(m,_){s.drawArrays(r,m,_),n.update(_,r,1)}function u(m,_,x){x!==0&&(s.drawArraysInstanced(r,m,_,x),n.update(_,r,x))}function f(m,_,x){if(x===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,m,0,_,0,x);let S=0;for(let E=0;E<x;E++)S+=_[E];n.update(S,r,1)}function p(m,_,x,y){if(x===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let E=0;E<m.length;E++)u(m[E],_[E],y[E]);else{S.multiDrawArraysInstancedWEBGL(r,m,0,_,0,y,0,x);let E=0;for(let T=0;T<x;T++)E+=_[T]*y[T];n.update(E,r,1)}}this.setMode=a,this.render=c,this.renderInstances=u,this.renderMultiDraw=f,this.renderMultiDrawInstances=p}function DS(s,e,n,r){let a;function c(){if(a!==void 0)return a;if(e.has("EXT_texture_filter_anisotropic")===!0){const U=e.get("EXT_texture_filter_anisotropic");a=s.getParameter(U.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function u(U){return!(U!==di&&r.convert(U)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function f(U){const B=U===Bo&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(U!==Gi&&r.convert(U)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&U!==Bi&&!B)}function p(U){if(U==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";U="mediump"}return U==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let m=n.precision!==void 0?n.precision:"highp";const _=p(m);_!==m&&(console.warn("THREE.WebGLRenderer:",m,"not supported, using",_,"instead."),m=_);const x=n.logarithmicDepthBuffer===!0,y=n.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),S=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),E=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),T=s.getParameter(s.MAX_TEXTURE_SIZE),g=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),v=s.getParameter(s.MAX_VERTEX_ATTRIBS),D=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),N=s.getParameter(s.MAX_VARYING_VECTORS),A=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),j=E>0,k=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:p,textureFormatReadable:u,textureTypeReadable:f,precision:m,logarithmicDepthBuffer:x,reverseDepthBuffer:y,maxTextures:S,maxVertexTextures:E,maxTextureSize:T,maxCubemapSize:g,maxAttributes:v,maxVertexUniforms:D,maxVaryings:N,maxFragmentUniforms:A,vertexTextures:j,maxSamples:k}}function NS(s){const e=this;let n=null,r=0,a=!1,c=!1;const u=new Gr,f=new ct,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(x,y){const S=x.length!==0||y||r!==0||a;return a=y,r=x.length,S},this.beginShadows=function(){c=!0,_(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(x,y){n=_(x,y,0)},this.setState=function(x,y,S){const E=x.clippingPlanes,T=x.clipIntersection,g=x.clipShadows,v=s.get(x);if(!a||E===null||E.length===0||c&&!g)c?_(null):m();else{const D=c?0:r,N=D*4;let A=v.clippingState||null;p.value=A,A=_(E,y,N,S);for(let j=0;j!==N;++j)A[j]=n[j];v.clippingState=A,this.numIntersection=T?this.numPlanes:0,this.numPlanes+=D}};function m(){p.value!==n&&(p.value=n,p.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function _(x,y,S,E){const T=x!==null?x.length:0;let g=null;if(T!==0){if(g=p.value,E!==!0||g===null){const v=S+T*4,D=y.matrixWorldInverse;f.getNormalMatrix(D),(g===null||g.length<v)&&(g=new Float32Array(v));for(let N=0,A=S;N!==T;++N,A+=4)u.copy(x[N]).applyMatrix4(D,f),u.normal.toArray(g,A),g[A+3]=u.constant}p.value=g,p.needsUpdate=!0}return e.numPlanes=T,e.numIntersection=0,g}}function LS(s){let e=new WeakMap;function n(u,f){return f===pd?u.mapping=Vs:f===md&&(u.mapping=Gs),u}function r(u){if(u&&u.isTexture){const f=u.mapping;if(f===pd||f===md)if(e.has(u)){const p=e.get(u).texture;return n(p,u.mapping)}else{const p=u.image;if(p&&p.height>0){const m=new Wx(p.height);return m.fromEquirectangularTexture(s,u),e.set(u,m),u.addEventListener("dispose",a),n(m.texture,u.mapping)}else return null}}return u}function a(u){const f=u.target;f.removeEventListener("dispose",a);const p=e.get(f);p!==void 0&&(e.delete(f),p.dispose())}function c(){e=new WeakMap}return{get:r,dispose:c}}class IS extends _g{constructor(e=-1,n=1,r=1,a=-1,c=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=r,this.bottom=a,this.near=c,this.far=u,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,r,a,c,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=a,this.view.width=c,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let c=r-e,u=r+e,f=a+n,p=a-n;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=m*this.view.offsetX,u=c+m*this.view.width,f-=_*this.view.offsetY,p=f-_*this.view.height}this.projectionMatrix.makeOrthographic(c,u,f,p,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const ks=4,hm=[.125,.215,.35,.446,.526,.582],Xr=20,$u=new IS,pm=new bt;let Ku=null,Zu=0,Qu=0,Ju=!1;const Wr=(1+Math.sqrt(5))/2,Us=1/Wr,mm=[new q(-Wr,Us,0),new q(Wr,Us,0),new q(-Us,0,Wr),new q(Us,0,Wr),new q(0,Wr,-Us),new q(0,Wr,Us),new q(-1,1,-1),new q(1,1,-1),new q(-1,1,1),new q(1,1,1)];class gm{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,r=.1,a=100){Ku=this._renderer.getRenderTarget(),Zu=this._renderer.getActiveCubeFace(),Qu=this._renderer.getActiveMipmapLevel(),Ju=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,r,a,c),n>0&&this._blur(c,0,0,n),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=xm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=_m(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ku,Zu,Qu),this._renderer.xr.enabled=Ju,e.scissorTest=!1,gl(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Vs||e.mapping===Gs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ku=this._renderer.getRenderTarget(),Zu=this._renderer.getActiveCubeFace(),Qu=this._renderer.getActiveMipmapLevel(),Ju=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=n||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,r={magFilter:Si,minFilter:Si,generateMipmaps:!1,type:Bo,format:di,colorSpace:Ys,depthBuffer:!1},a=vm(e,n,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=vm(e,n,r);const{_lodMax:c}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=US(c)),this._blurMaterial=kS(c,e,n)}return a}_compileMaterial(e){const n=new Jn(this._lodPlanes[0],e);this._renderer.compile(n,$u)}_sceneToCubeUV(e,n,r,a){const f=new Zn(90,1,n,r),p=[1,-1,1,1,1,1],m=[1,1,1,-1,-1,-1],_=this._renderer,x=_.autoClear,y=_.toneMapping;_.getClearColor(pm),_.toneMapping=yr,_.autoClear=!1;const S=new Oo({name:"PMREM.Background",side:Nn,depthWrite:!1,depthTest:!1}),E=new Jn(new Zr,S);let T=!1;const g=e.background;g?g.isColor&&(S.color.copy(g),e.background=null,T=!0):(S.color.copy(pm),T=!0);for(let v=0;v<6;v++){const D=v%3;D===0?(f.up.set(0,p[v],0),f.lookAt(m[v],0,0)):D===1?(f.up.set(0,0,p[v]),f.lookAt(0,m[v],0)):(f.up.set(0,p[v],0),f.lookAt(0,0,m[v]));const N=this._cubeSize;gl(a,D*N,v>2?N:0,N,N),_.setRenderTarget(a),T&&_.render(E,f),_.render(e,f)}E.geometry.dispose(),E.material.dispose(),_.toneMapping=y,_.autoClear=x,e.background=g}_textureToCubeUV(e,n){const r=this._renderer,a=e.mapping===Vs||e.mapping===Gs;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=xm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=_m());const c=a?this._cubemapMaterial:this._equirectMaterial,u=new Jn(this._lodPlanes[0],c),f=c.uniforms;f.envMap.value=e;const p=this._cubeSize;gl(n,0,0,3*p,2*p),r.setRenderTarget(n),r.render(u,$u)}_applyPMREM(e){const n=this._renderer,r=n.autoClear;n.autoClear=!1;const a=this._lodPlanes.length;for(let c=1;c<a;c++){const u=Math.sqrt(this._sigmas[c]*this._sigmas[c]-this._sigmas[c-1]*this._sigmas[c-1]),f=mm[(a-c-1)%mm.length];this._blur(e,c-1,c,u,f)}n.autoClear=r}_blur(e,n,r,a,c){const u=this._pingPongRenderTarget;this._halfBlur(e,u,n,r,a,"latitudinal",c),this._halfBlur(u,e,r,r,a,"longitudinal",c)}_halfBlur(e,n,r,a,c,u,f){const p=this._renderer,m=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const _=3,x=new Jn(this._lodPlanes[a],m),y=m.uniforms,S=this._sizeLods[r]-1,E=isFinite(c)?Math.PI/(2*S):2*Math.PI/(2*Xr-1),T=c/E,g=isFinite(c)?1+Math.floor(_*T):Xr;g>Xr&&console.warn(`sigmaRadians, ${c}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Xr}`);const v=[];let D=0;for(let U=0;U<Xr;++U){const B=U/T,P=Math.exp(-B*B/2);v.push(P),U===0?D+=P:U<g&&(D+=2*P)}for(let U=0;U<v.length;U++)v[U]=v[U]/D;y.envMap.value=e.texture,y.samples.value=g,y.weights.value=v,y.latitudinal.value=u==="latitudinal",f&&(y.poleAxis.value=f);const{_lodMax:N}=this;y.dTheta.value=E,y.mipInt.value=N-r;const A=this._sizeLods[a],j=3*A*(a>N-ks?a-N+ks:0),k=4*(this._cubeSize-A);gl(n,j,k,3*A,2*A),p.setRenderTarget(n),p.render(x,$u)}}function US(s){const e=[],n=[],r=[];let a=s;const c=s-ks+1+hm.length;for(let u=0;u<c;u++){const f=Math.pow(2,a);n.push(f);let p=1/f;u>s-ks?p=hm[u-s+ks-1]:u===0&&(p=0),r.push(p);const m=1/(f-2),_=-m,x=1+m,y=[_,_,x,_,x,x,_,_,x,x,_,x],S=6,E=6,T=3,g=2,v=1,D=new Float32Array(T*E*S),N=new Float32Array(g*E*S),A=new Float32Array(v*E*S);for(let k=0;k<S;k++){const U=k%3*2/3-1,B=k>2?0:-1,P=[U,B,0,U+2/3,B,0,U+2/3,B+1,0,U,B,0,U+2/3,B+1,0,U,B+1,0];D.set(P,T*E*k),N.set(y,g*E*k);const C=[k,k,k,k,k,k];A.set(C,v*E*k)}const j=new Sn;j.setAttribute("position",new hi(D,T)),j.setAttribute("uv",new hi(N,g)),j.setAttribute("faceIndex",new hi(A,v)),e.push(j),a>ks&&a--}return{lodPlanes:e,sizeLods:n,sigmas:r}}function vm(s,e,n){const r=new Kr(s,e,n);return r.texture.mapping=zl,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function gl(s,e,n,r,a){s.viewport.set(e,n,r,a),s.scissor.set(e,n,r,a)}function kS(s,e,n){const r=new Float32Array(Xr),a=new q(0,1,0);return new Mr({name:"SphericalGaussianBlur",defines:{n:Xr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:rf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:xr,depthTest:!1,depthWrite:!1})}function _m(){return new Mr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:rf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:xr,depthTest:!1,depthWrite:!1})}function xm(){return new Mr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:rf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:xr,depthTest:!1,depthWrite:!1})}function rf(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function FS(s){let e=new WeakMap,n=null;function r(f){if(f&&f.isTexture){const p=f.mapping,m=p===pd||p===md,_=p===Vs||p===Gs;if(m||_){let x=e.get(f);const y=x!==void 0?x.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==y)return n===null&&(n=new gm(s)),x=m?n.fromEquirectangular(f,x):n.fromCubemap(f,x),x.texture.pmremVersion=f.pmremVersion,e.set(f,x),x.texture;if(x!==void 0)return x.texture;{const S=f.image;return m&&S&&S.height>0||_&&S&&a(S)?(n===null&&(n=new gm(s)),x=m?n.fromEquirectangular(f):n.fromCubemap(f),x.texture.pmremVersion=f.pmremVersion,e.set(f,x),f.addEventListener("dispose",c),x.texture):null}}}return f}function a(f){let p=0;const m=6;for(let _=0;_<m;_++)f[_]!==void 0&&p++;return p===m}function c(f){const p=f.target;p.removeEventListener("dispose",c);const m=e.get(p);m!==void 0&&(e.delete(p),m.dispose())}function u(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:u}}function OS(s){const e={};function n(r){if(e[r]!==void 0)return e[r];let a;switch(r){case"WEBGL_depth_texture":a=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":a=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":a=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":a=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:a=s.getExtension(r)}return e[r]=a,a}return{has:function(r){return n(r)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(r){const a=n(r);return a===null&&ko("THREE.WebGLRenderer: "+r+" extension not supported."),a}}}function zS(s,e,n,r){const a={},c=new WeakMap;function u(x){const y=x.target;y.index!==null&&e.remove(y.index);for(const E in y.attributes)e.remove(y.attributes[E]);for(const E in y.morphAttributes){const T=y.morphAttributes[E];for(let g=0,v=T.length;g<v;g++)e.remove(T[g])}y.removeEventListener("dispose",u),delete a[y.id];const S=c.get(y);S&&(e.remove(S),c.delete(y)),r.releaseStatesOfGeometry(y),y.isInstancedBufferGeometry===!0&&delete y._maxInstanceCount,n.memory.geometries--}function f(x,y){return a[y.id]===!0||(y.addEventListener("dispose",u),a[y.id]=!0,n.memory.geometries++),y}function p(x){const y=x.attributes;for(const E in y)e.update(y[E],s.ARRAY_BUFFER);const S=x.morphAttributes;for(const E in S){const T=S[E];for(let g=0,v=T.length;g<v;g++)e.update(T[g],s.ARRAY_BUFFER)}}function m(x){const y=[],S=x.index,E=x.attributes.position;let T=0;if(S!==null){const D=S.array;T=S.version;for(let N=0,A=D.length;N<A;N+=3){const j=D[N+0],k=D[N+1],U=D[N+2];y.push(j,k,k,U,U,j)}}else if(E!==void 0){const D=E.array;T=E.version;for(let N=0,A=D.length/3-1;N<A;N+=3){const j=N+0,k=N+1,U=N+2;y.push(j,k,k,U,U,j)}}else return;const g=new(ug(y)?gg:mg)(y,1);g.version=T;const v=c.get(x);v&&e.remove(v),c.set(x,g)}function _(x){const y=c.get(x);if(y){const S=x.index;S!==null&&y.version<S.version&&m(x)}else m(x);return c.get(x)}return{get:f,update:p,getWireframeAttribute:_}}function BS(s,e,n){let r;function a(y){r=y}let c,u;function f(y){c=y.type,u=y.bytesPerElement}function p(y,S){s.drawElements(r,S,c,y*u),n.update(S,r,1)}function m(y,S,E){E!==0&&(s.drawElementsInstanced(r,S,c,y*u,E),n.update(S,r,E))}function _(y,S,E){if(E===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,S,0,c,y,0,E);let g=0;for(let v=0;v<E;v++)g+=S[v];n.update(g,r,1)}function x(y,S,E,T){if(E===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let v=0;v<y.length;v++)m(y[v]/u,S[v],T[v]);else{g.multiDrawElementsInstancedWEBGL(r,S,0,c,y,0,T,0,E);let v=0;for(let D=0;D<E;D++)v+=S[D]*T[D];n.update(v,r,1)}}this.setMode=a,this.setIndex=f,this.render=p,this.renderInstances=m,this.renderMultiDraw=_,this.renderMultiDrawInstances=x}function HS(s){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(c,u,f){switch(n.calls++,u){case s.TRIANGLES:n.triangles+=f*(c/3);break;case s.LINES:n.lines+=f*(c/2);break;case s.LINE_STRIP:n.lines+=f*(c-1);break;case s.LINE_LOOP:n.lines+=f*c;break;case s.POINTS:n.points+=f*c;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",u);break}}function a(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:a,update:r}}function VS(s,e,n){const r=new WeakMap,a=new Wt;function c(u,f,p){const m=u.morphTargetInfluences,_=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,x=_!==void 0?_.length:0;let y=r.get(f);if(y===void 0||y.count!==x){let C=function(){B.dispose(),r.delete(f),f.removeEventListener("dispose",C)};var S=C;y!==void 0&&y.texture.dispose();const E=f.morphAttributes.position!==void 0,T=f.morphAttributes.normal!==void 0,g=f.morphAttributes.color!==void 0,v=f.morphAttributes.position||[],D=f.morphAttributes.normal||[],N=f.morphAttributes.color||[];let A=0;E===!0&&(A=1),T===!0&&(A=2),g===!0&&(A=3);let j=f.attributes.position.count*A,k=1;j>e.maxTextureSize&&(k=Math.ceil(j/e.maxTextureSize),j=e.maxTextureSize);const U=new Float32Array(j*k*4*x),B=new fg(U,j,k,x);B.type=Bi,B.needsUpdate=!0;const P=A*4;for(let z=0;z<x;z++){const oe=v[z],J=D[z],de=N[z],he=j*k*4*z;for(let ae=0;ae<oe.count;ae++){const ce=ae*P;E===!0&&(a.fromBufferAttribute(oe,ae),U[he+ce+0]=a.x,U[he+ce+1]=a.y,U[he+ce+2]=a.z,U[he+ce+3]=0),T===!0&&(a.fromBufferAttribute(J,ae),U[he+ce+4]=a.x,U[he+ce+5]=a.y,U[he+ce+6]=a.z,U[he+ce+7]=0),g===!0&&(a.fromBufferAttribute(de,ae),U[he+ce+8]=a.x,U[he+ce+9]=a.y,U[he+ce+10]=a.z,U[he+ce+11]=de.itemSize===4?a.w:1)}}y={count:x,texture:B,size:new Rt(j,k)},r.set(f,y),f.addEventListener("dispose",C)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)p.getUniforms().setValue(s,"morphTexture",u.morphTexture,n);else{let E=0;for(let g=0;g<m.length;g++)E+=m[g];const T=f.morphTargetsRelative?1:1-E;p.getUniforms().setValue(s,"morphTargetBaseInfluence",T),p.getUniforms().setValue(s,"morphTargetInfluences",m)}p.getUniforms().setValue(s,"morphTargetsTexture",y.texture,n),p.getUniforms().setValue(s,"morphTargetsTextureSize",y.size)}return{update:c}}function GS(s,e,n,r){let a=new WeakMap;function c(p){const m=r.render.frame,_=p.geometry,x=e.get(p,_);if(a.get(x)!==m&&(e.update(x),a.set(x,m)),p.isInstancedMesh&&(p.hasEventListener("dispose",f)===!1&&p.addEventListener("dispose",f),a.get(p)!==m&&(n.update(p.instanceMatrix,s.ARRAY_BUFFER),p.instanceColor!==null&&n.update(p.instanceColor,s.ARRAY_BUFFER),a.set(p,m))),p.isSkinnedMesh){const y=p.skeleton;a.get(y)!==m&&(y.update(),a.set(y,m))}return x}function u(){a=new WeakMap}function f(p){const m=p.target;m.removeEventListener("dispose",f),n.remove(m.instanceMatrix),m.instanceColor!==null&&n.remove(m.instanceColor)}return{update:c,dispose:u}}class Mg extends Ln{constructor(e,n,r,a,c,u,f,p,m,_=zs){if(_!==zs&&_!==js)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");r===void 0&&_===zs&&(r=$r),r===void 0&&_===js&&(r=Ws),super(null,a,c,u,f,p,_,r,m),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=f!==void 0?f:fi,this.minFilter=p!==void 0?p:fi,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const Eg=new Ln,ym=new Mg(1,1),Tg=new fg,wg=new bx,Ag=new xg,Sm=[],Mm=[],Em=new Float32Array(16),Tm=new Float32Array(9),wm=new Float32Array(4);function Ks(s,e,n){const r=s[0];if(r<=0||r>0)return s;const a=e*n;let c=Sm[a];if(c===void 0&&(c=new Float32Array(a),Sm[a]=c),e!==0){r.toArray(c,0);for(let u=1,f=0;u!==e;++u)f+=n,s[u].toArray(c,f)}return c}function Qt(s,e){if(s.length!==e.length)return!1;for(let n=0,r=s.length;n<r;n++)if(s[n]!==e[n])return!1;return!0}function Jt(s,e){for(let n=0,r=e.length;n<r;n++)s[n]=e[n]}function Vl(s,e){let n=Mm[e];n===void 0&&(n=new Int32Array(e),Mm[e]=n);for(let r=0;r!==e;++r)n[r]=s.allocateTextureUnit();return n}function WS(s,e){const n=this.cache;n[0]!==e&&(s.uniform1f(this.addr,e),n[0]=e)}function jS(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Qt(n,e))return;s.uniform2fv(this.addr,e),Jt(n,e)}}function XS(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Qt(n,e))return;s.uniform3fv(this.addr,e),Jt(n,e)}}function YS(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Qt(n,e))return;s.uniform4fv(this.addr,e),Jt(n,e)}}function qS(s,e){const n=this.cache,r=e.elements;if(r===void 0){if(Qt(n,e))return;s.uniformMatrix2fv(this.addr,!1,e),Jt(n,e)}else{if(Qt(n,r))return;wm.set(r),s.uniformMatrix2fv(this.addr,!1,wm),Jt(n,r)}}function $S(s,e){const n=this.cache,r=e.elements;if(r===void 0){if(Qt(n,e))return;s.uniformMatrix3fv(this.addr,!1,e),Jt(n,e)}else{if(Qt(n,r))return;Tm.set(r),s.uniformMatrix3fv(this.addr,!1,Tm),Jt(n,r)}}function KS(s,e){const n=this.cache,r=e.elements;if(r===void 0){if(Qt(n,e))return;s.uniformMatrix4fv(this.addr,!1,e),Jt(n,e)}else{if(Qt(n,r))return;Em.set(r),s.uniformMatrix4fv(this.addr,!1,Em),Jt(n,r)}}function ZS(s,e){const n=this.cache;n[0]!==e&&(s.uniform1i(this.addr,e),n[0]=e)}function QS(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Qt(n,e))return;s.uniform2iv(this.addr,e),Jt(n,e)}}function JS(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Qt(n,e))return;s.uniform3iv(this.addr,e),Jt(n,e)}}function eM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Qt(n,e))return;s.uniform4iv(this.addr,e),Jt(n,e)}}function tM(s,e){const n=this.cache;n[0]!==e&&(s.uniform1ui(this.addr,e),n[0]=e)}function nM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Qt(n,e))return;s.uniform2uiv(this.addr,e),Jt(n,e)}}function iM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Qt(n,e))return;s.uniform3uiv(this.addr,e),Jt(n,e)}}function rM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Qt(n,e))return;s.uniform4uiv(this.addr,e),Jt(n,e)}}function sM(s,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a);let c;this.type===s.SAMPLER_2D_SHADOW?(ym.compareFunction=cg,c=ym):c=Eg,n.setTexture2D(e||c,a)}function oM(s,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),n.setTexture3D(e||wg,a)}function aM(s,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),n.setTextureCube(e||Ag,a)}function lM(s,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),n.setTexture2DArray(e||Tg,a)}function cM(s){switch(s){case 5126:return WS;case 35664:return jS;case 35665:return XS;case 35666:return YS;case 35674:return qS;case 35675:return $S;case 35676:return KS;case 5124:case 35670:return ZS;case 35667:case 35671:return QS;case 35668:case 35672:return JS;case 35669:case 35673:return eM;case 5125:return tM;case 36294:return nM;case 36295:return iM;case 36296:return rM;case 35678:case 36198:case 36298:case 36306:case 35682:return sM;case 35679:case 36299:case 36307:return oM;case 35680:case 36300:case 36308:case 36293:return aM;case 36289:case 36303:case 36311:case 36292:return lM}}function uM(s,e){s.uniform1fv(this.addr,e)}function dM(s,e){const n=Ks(e,this.size,2);s.uniform2fv(this.addr,n)}function fM(s,e){const n=Ks(e,this.size,3);s.uniform3fv(this.addr,n)}function hM(s,e){const n=Ks(e,this.size,4);s.uniform4fv(this.addr,n)}function pM(s,e){const n=Ks(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,n)}function mM(s,e){const n=Ks(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,n)}function gM(s,e){const n=Ks(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,n)}function vM(s,e){s.uniform1iv(this.addr,e)}function _M(s,e){s.uniform2iv(this.addr,e)}function xM(s,e){s.uniform3iv(this.addr,e)}function yM(s,e){s.uniform4iv(this.addr,e)}function SM(s,e){s.uniform1uiv(this.addr,e)}function MM(s,e){s.uniform2uiv(this.addr,e)}function EM(s,e){s.uniform3uiv(this.addr,e)}function TM(s,e){s.uniform4uiv(this.addr,e)}function wM(s,e,n){const r=this.cache,a=e.length,c=Vl(n,a);Qt(r,c)||(s.uniform1iv(this.addr,c),Jt(r,c));for(let u=0;u!==a;++u)n.setTexture2D(e[u]||Eg,c[u])}function AM(s,e,n){const r=this.cache,a=e.length,c=Vl(n,a);Qt(r,c)||(s.uniform1iv(this.addr,c),Jt(r,c));for(let u=0;u!==a;++u)n.setTexture3D(e[u]||wg,c[u])}function CM(s,e,n){const r=this.cache,a=e.length,c=Vl(n,a);Qt(r,c)||(s.uniform1iv(this.addr,c),Jt(r,c));for(let u=0;u!==a;++u)n.setTextureCube(e[u]||Ag,c[u])}function bM(s,e,n){const r=this.cache,a=e.length,c=Vl(n,a);Qt(r,c)||(s.uniform1iv(this.addr,c),Jt(r,c));for(let u=0;u!==a;++u)n.setTexture2DArray(e[u]||Tg,c[u])}function RM(s){switch(s){case 5126:return uM;case 35664:return dM;case 35665:return fM;case 35666:return hM;case 35674:return pM;case 35675:return mM;case 35676:return gM;case 5124:case 35670:return vM;case 35667:case 35671:return _M;case 35668:case 35672:return xM;case 35669:case 35673:return yM;case 5125:return SM;case 36294:return MM;case 36295:return EM;case 36296:return TM;case 35678:case 36198:case 36298:case 36306:case 35682:return wM;case 35679:case 36299:case 36307:return AM;case 35680:case 36300:case 36308:case 36293:return CM;case 36289:case 36303:case 36311:case 36292:return bM}}class PM{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.setValue=cM(n.type)}}class DM{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=RM(n.type)}}class NM{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,r){const a=this.seq;for(let c=0,u=a.length;c!==u;++c){const f=a[c];f.setValue(e,n[f.id],r)}}}const ed=/(\w+)(\])?(\[|\.)?/g;function Am(s,e){s.seq.push(e),s.map[e.id]=e}function LM(s,e,n){const r=s.name,a=r.length;for(ed.lastIndex=0;;){const c=ed.exec(r),u=ed.lastIndex;let f=c[1];const p=c[2]==="]",m=c[3];if(p&&(f=f|0),m===void 0||m==="["&&u+2===a){Am(n,m===void 0?new PM(f,s,e):new DM(f,s,e));break}else{let x=n.map[f];x===void 0&&(x=new NM(f),Am(n,x)),n=x}}}class Dl{constructor(e,n){this.seq=[],this.map={};const r=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let a=0;a<r;++a){const c=e.getActiveUniform(n,a),u=e.getUniformLocation(n,c.name);LM(c,u,this)}}setValue(e,n,r,a){const c=this.map[n];c!==void 0&&c.setValue(e,r,a)}setOptional(e,n,r){const a=n[r];a!==void 0&&this.setValue(e,r,a)}static upload(e,n,r,a){for(let c=0,u=n.length;c!==u;++c){const f=n[c],p=r[f.id];p.needsUpdate!==!1&&f.setValue(e,p.value,a)}}static seqWithValue(e,n){const r=[];for(let a=0,c=e.length;a!==c;++a){const u=e[a];u.id in n&&r.push(u)}return r}}function Cm(s,e,n){const r=s.createShader(e);return s.shaderSource(r,n),s.compileShader(r),r}const IM=37297;let UM=0;function kM(s,e){const n=s.split(`
`),r=[],a=Math.max(e-6,0),c=Math.min(e+6,n.length);for(let u=a;u<c;u++){const f=u+1;r.push(`${f===e?">":" "} ${f}: ${n[u]}`)}return r.join(`
`)}const bm=new ct;function FM(s){yt._getMatrix(bm,yt.workingColorSpace,s);const e=`mat3( ${bm.elements.map(n=>n.toFixed(4))} )`;switch(yt.getTransfer(s)){case Bl:return[e,"LinearTransferOETF"];case Dt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function Rm(s,e,n){const r=s.getShaderParameter(e,s.COMPILE_STATUS),a=s.getShaderInfoLog(e).trim();if(r&&a==="")return"";const c=/ERROR: 0:(\d+)/.exec(a);if(c){const u=parseInt(c[1]);return n.toUpperCase()+`

`+a+`

`+kM(s.getShaderSource(e),u)}else return a}function OM(s,e){const n=FM(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function zM(s,e){let n;switch(e){case ex:n="Linear";break;case tx:n="Reinhard";break;case nx:n="Cineon";break;case ix:n="ACESFilmic";break;case sx:n="AgX";break;case ox:n="Neutral";break;case rx:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+s+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const vl=new q;function BM(){yt.getLuminanceCoefficients(vl);const s=vl.x.toFixed(4),e=vl.y.toFixed(4),n=vl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function HM(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Fo).join(`
`)}function VM(s){const e=[];for(const n in s){const r=s[n];r!==!1&&e.push("#define "+n+" "+r)}return e.join(`
`)}function GM(s,e){const n={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let a=0;a<r;a++){const c=s.getActiveAttrib(e,a),u=c.name;let f=1;c.type===s.FLOAT_MAT2&&(f=2),c.type===s.FLOAT_MAT3&&(f=3),c.type===s.FLOAT_MAT4&&(f=4),n[u]={type:c.type,location:s.getAttribLocation(e,u),locationSize:f}}return n}function Fo(s){return s!==""}function Pm(s,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Dm(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const WM=/^[ \t]*#include +<([\w\d./]+)>/gm;function jd(s){return s.replace(WM,XM)}const jM=new Map;function XM(s,e){let n=ut[e];if(n===void 0){const r=jM.get(e);if(r!==void 0)n=ut[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return jd(n)}const YM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Nm(s){return s.replace(YM,qM)}function qM(s,e,n,r){let a="";for(let c=parseInt(e);c<parseInt(n);c++)a+=r.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return a}function Lm(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function $M(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Km?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===L_?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Oi&&(e="SHADOWMAP_TYPE_VSM"),e}function KM(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Vs:case Gs:e="ENVMAP_TYPE_CUBE";break;case zl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function ZM(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Gs:e="ENVMAP_MODE_REFRACTION";break}return e}function QM(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Zm:e="ENVMAP_BLENDING_MULTIPLY";break;case Q_:e="ENVMAP_BLENDING_MIX";break;case J_:e="ENVMAP_BLENDING_ADD";break}return e}function JM(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:r,maxMip:n}}function eE(s,e,n,r){const a=s.getContext(),c=n.defines;let u=n.vertexShader,f=n.fragmentShader;const p=$M(n),m=KM(n),_=ZM(n),x=QM(n),y=JM(n),S=HM(n),E=VM(c),T=a.createProgram();let g,v,D=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(g=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E].filter(Fo).join(`
`),g.length>0&&(g+=`
`),v=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E].filter(Fo).join(`
`),v.length>0&&(v+=`
`)):(g=[Lm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+_:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+p:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Fo).join(`
`),v=[Lm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+m:"",n.envMap?"#define "+_:"",n.envMap?"#define "+x:"",y?"#define CUBEUV_TEXEL_WIDTH "+y.texelWidth:"",y?"#define CUBEUV_TEXEL_HEIGHT "+y.texelHeight:"",y?"#define CUBEUV_MAX_MIP "+y.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+p:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==yr?"#define TONE_MAPPING":"",n.toneMapping!==yr?ut.tonemapping_pars_fragment:"",n.toneMapping!==yr?zM("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",ut.colorspace_pars_fragment,OM("linearToOutputTexel",n.outputColorSpace),BM(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Fo).join(`
`)),u=jd(u),u=Pm(u,n),u=Dm(u,n),f=jd(f),f=Pm(f,n),f=Dm(f,n),u=Nm(u),f=Nm(f),n.isRawShaderMaterial!==!0&&(D=`#version 300 es
`,g=[S,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,v=["#define varying in",n.glslVersion===Xp?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Xp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const N=D+g+u,A=D+v+f,j=Cm(a,a.VERTEX_SHADER,N),k=Cm(a,a.FRAGMENT_SHADER,A);a.attachShader(T,j),a.attachShader(T,k),n.index0AttributeName!==void 0?a.bindAttribLocation(T,0,n.index0AttributeName):n.morphTargets===!0&&a.bindAttribLocation(T,0,"position"),a.linkProgram(T);function U(z){if(s.debug.checkShaderErrors){const oe=a.getProgramInfoLog(T).trim(),J=a.getShaderInfoLog(j).trim(),de=a.getShaderInfoLog(k).trim();let he=!0,ae=!0;if(a.getProgramParameter(T,a.LINK_STATUS)===!1)if(he=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(a,T,j,k);else{const ce=Rm(a,j,"vertex"),H=Rm(a,k,"fragment");console.error("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(T,a.VALIDATE_STATUS)+`

Material Name: `+z.name+`
Material Type: `+z.type+`

Program Info Log: `+oe+`
`+ce+`
`+H)}else oe!==""?console.warn("THREE.WebGLProgram: Program Info Log:",oe):(J===""||de==="")&&(ae=!1);ae&&(z.diagnostics={runnable:he,programLog:oe,vertexShader:{log:J,prefix:g},fragmentShader:{log:de,prefix:v}})}a.deleteShader(j),a.deleteShader(k),B=new Dl(a,T),P=GM(a,T)}let B;this.getUniforms=function(){return B===void 0&&U(this),B};let P;this.getAttributes=function(){return P===void 0&&U(this),P};let C=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=a.getProgramParameter(T,IM)),C},this.destroy=function(){r.releaseStatesOfProgram(this),a.deleteProgram(T),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=UM++,this.cacheKey=e,this.usedTimes=1,this.program=T,this.vertexShader=j,this.fragmentShader=k,this}let tE=0;class nE{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,r=e.fragmentShader,a=this._getShaderStage(n),c=this._getShaderStage(r),u=this._getShaderCacheForMaterial(e);return u.has(a)===!1&&(u.add(a),a.usedTimes++),u.has(c)===!1&&(u.add(c),c.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const r of n)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let r=n.get(e);return r===void 0&&(r=new Set,n.set(e,r)),r}_getShaderStage(e){const n=this.shaderCache;let r=n.get(e);return r===void 0&&(r=new iE(e),n.set(e,r)),r}}class iE{constructor(e){this.id=tE++,this.code=e,this.usedTimes=0}}function rE(s,e,n,r,a,c,u){const f=new hg,p=new nE,m=new Set,_=[],x=a.logarithmicDepthBuffer,y=a.vertexTextures;let S=a.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function T(P){return m.add(P),P===0?"uv":`uv${P}`}function g(P,C,z,oe,J){const de=oe.fog,he=J.geometry,ae=P.isMeshStandardMaterial?oe.environment:null,ce=(P.isMeshStandardMaterial?n:e).get(P.envMap||ae),H=ce&&ce.mapping===zl?ce.image.height:null,le=E[P.type];P.precision!==null&&(S=a.getMaxPrecision(P.precision),S!==P.precision&&console.warn("THREE.WebGLProgram.getParameters:",P.precision,"not supported, using",S,"instead."));const re=he.morphAttributes.position||he.morphAttributes.normal||he.morphAttributes.color,F=re!==void 0?re.length:0;let ie=0;he.morphAttributes.position!==void 0&&(ie=1),he.morphAttributes.normal!==void 0&&(ie=2),he.morphAttributes.color!==void 0&&(ie=3);let De,Z,ue,Se;if(le){const _t=yi[le];De=_t.vertexShader,Z=_t.fragmentShader}else De=P.vertexShader,Z=P.fragmentShader,p.update(P),ue=p.getVertexShaderID(P),Se=p.getFragmentShaderID(P);const ve=s.getRenderTarget(),Ae=s.state.buffers.depth.getReversed(),Le=J.isInstancedMesh===!0,Ke=J.isBatchedMesh===!0,wt=!!P.map,dt=!!P.matcap,qe=!!ce,V=!!P.aoMap,Bt=!!P.lightMap,rt=!!P.bumpMap,at=!!P.normalMap,$e=!!P.displacementMap,Et=!!P.emissiveMap,ze=!!P.metalnessMap,L=!!P.roughnessMap,w=P.anisotropy>0,Q=P.clearcoat>0,me=P.dispersion>0,_e=P.iridescence>0,fe=P.sheen>0,Ge=P.transmission>0,Ce=w&&!!P.anisotropyMap,Ue=Q&&!!P.clearcoatMap,ft=Q&&!!P.clearcoatNormalMap,Me=Q&&!!P.clearcoatRoughnessMap,Fe=_e&&!!P.iridescenceMap,Je=_e&&!!P.iridescenceThicknessMap,et=fe&&!!P.sheenColorMap,Oe=fe&&!!P.sheenRoughnessMap,ht=!!P.specularMap,st=!!P.specularColorMap,At=!!P.specularIntensityMap,W=Ge&&!!P.transmissionMap,be=Ge&&!!P.thicknessMap,se=!!P.gradientMap,pe=!!P.alphaMap,Ne=P.alphaTest>0,Pe=!!P.alphaHash,ot=!!P.extensions;let It=yr;P.toneMapped&&(ve===null||ve.isXRRenderTarget===!0)&&(It=s.toneMapping);const qt={shaderID:le,shaderType:P.type,shaderName:P.name,vertexShader:De,fragmentShader:Z,defines:P.defines,customVertexShaderID:ue,customFragmentShaderID:Se,isRawShaderMaterial:P.isRawShaderMaterial===!0,glslVersion:P.glslVersion,precision:S,batching:Ke,batchingColor:Ke&&J._colorsTexture!==null,instancing:Le,instancingColor:Le&&J.instanceColor!==null,instancingMorph:Le&&J.morphTexture!==null,supportsVertexTextures:y,outputColorSpace:ve===null?s.outputColorSpace:ve.isXRRenderTarget===!0?ve.texture.colorSpace:Ys,alphaToCoverage:!!P.alphaToCoverage,map:wt,matcap:dt,envMap:qe,envMapMode:qe&&ce.mapping,envMapCubeUVHeight:H,aoMap:V,lightMap:Bt,bumpMap:rt,normalMap:at,displacementMap:y&&$e,emissiveMap:Et,normalMapObjectSpace:at&&P.normalMapType===dx,normalMapTangentSpace:at&&P.normalMapType===ux,metalnessMap:ze,roughnessMap:L,anisotropy:w,anisotropyMap:Ce,clearcoat:Q,clearcoatMap:Ue,clearcoatNormalMap:ft,clearcoatRoughnessMap:Me,dispersion:me,iridescence:_e,iridescenceMap:Fe,iridescenceThicknessMap:Je,sheen:fe,sheenColorMap:et,sheenRoughnessMap:Oe,specularMap:ht,specularColorMap:st,specularIntensityMap:At,transmission:Ge,transmissionMap:W,thicknessMap:be,gradientMap:se,opaque:P.transparent===!1&&P.blending===Os&&P.alphaToCoverage===!1,alphaMap:pe,alphaTest:Ne,alphaHash:Pe,combine:P.combine,mapUv:wt&&T(P.map.channel),aoMapUv:V&&T(P.aoMap.channel),lightMapUv:Bt&&T(P.lightMap.channel),bumpMapUv:rt&&T(P.bumpMap.channel),normalMapUv:at&&T(P.normalMap.channel),displacementMapUv:$e&&T(P.displacementMap.channel),emissiveMapUv:Et&&T(P.emissiveMap.channel),metalnessMapUv:ze&&T(P.metalnessMap.channel),roughnessMapUv:L&&T(P.roughnessMap.channel),anisotropyMapUv:Ce&&T(P.anisotropyMap.channel),clearcoatMapUv:Ue&&T(P.clearcoatMap.channel),clearcoatNormalMapUv:ft&&T(P.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Me&&T(P.clearcoatRoughnessMap.channel),iridescenceMapUv:Fe&&T(P.iridescenceMap.channel),iridescenceThicknessMapUv:Je&&T(P.iridescenceThicknessMap.channel),sheenColorMapUv:et&&T(P.sheenColorMap.channel),sheenRoughnessMapUv:Oe&&T(P.sheenRoughnessMap.channel),specularMapUv:ht&&T(P.specularMap.channel),specularColorMapUv:st&&T(P.specularColorMap.channel),specularIntensityMapUv:At&&T(P.specularIntensityMap.channel),transmissionMapUv:W&&T(P.transmissionMap.channel),thicknessMapUv:be&&T(P.thicknessMap.channel),alphaMapUv:pe&&T(P.alphaMap.channel),vertexTangents:!!he.attributes.tangent&&(at||w),vertexColors:P.vertexColors,vertexAlphas:P.vertexColors===!0&&!!he.attributes.color&&he.attributes.color.itemSize===4,pointsUvs:J.isPoints===!0&&!!he.attributes.uv&&(wt||pe),fog:!!de,useFog:P.fog===!0,fogExp2:!!de&&de.isFogExp2,flatShading:P.flatShading===!0,sizeAttenuation:P.sizeAttenuation===!0,logarithmicDepthBuffer:x,reverseDepthBuffer:Ae,skinning:J.isSkinnedMesh===!0,morphTargets:he.morphAttributes.position!==void 0,morphNormals:he.morphAttributes.normal!==void 0,morphColors:he.morphAttributes.color!==void 0,morphTargetsCount:F,morphTextureStride:ie,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:u.numPlanes,numClipIntersection:u.numIntersection,dithering:P.dithering,shadowMapEnabled:s.shadowMap.enabled&&z.length>0,shadowMapType:s.shadowMap.type,toneMapping:It,decodeVideoTexture:wt&&P.map.isVideoTexture===!0&&yt.getTransfer(P.map.colorSpace)===Dt,decodeVideoTextureEmissive:Et&&P.emissiveMap.isVideoTexture===!0&&yt.getTransfer(P.emissiveMap.colorSpace)===Dt,premultipliedAlpha:P.premultipliedAlpha,doubleSided:P.side===zi,flipSided:P.side===Nn,useDepthPacking:P.depthPacking>=0,depthPacking:P.depthPacking||0,index0AttributeName:P.index0AttributeName,extensionClipCullDistance:ot&&P.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ot&&P.extensions.multiDraw===!0||Ke)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:P.customProgramCacheKey()};return qt.vertexUv1s=m.has(1),qt.vertexUv2s=m.has(2),qt.vertexUv3s=m.has(3),m.clear(),qt}function v(P){const C=[];if(P.shaderID?C.push(P.shaderID):(C.push(P.customVertexShaderID),C.push(P.customFragmentShaderID)),P.defines!==void 0)for(const z in P.defines)C.push(z),C.push(P.defines[z]);return P.isRawShaderMaterial===!1&&(D(C,P),N(C,P),C.push(s.outputColorSpace)),C.push(P.customProgramCacheKey),C.join()}function D(P,C){P.push(C.precision),P.push(C.outputColorSpace),P.push(C.envMapMode),P.push(C.envMapCubeUVHeight),P.push(C.mapUv),P.push(C.alphaMapUv),P.push(C.lightMapUv),P.push(C.aoMapUv),P.push(C.bumpMapUv),P.push(C.normalMapUv),P.push(C.displacementMapUv),P.push(C.emissiveMapUv),P.push(C.metalnessMapUv),P.push(C.roughnessMapUv),P.push(C.anisotropyMapUv),P.push(C.clearcoatMapUv),P.push(C.clearcoatNormalMapUv),P.push(C.clearcoatRoughnessMapUv),P.push(C.iridescenceMapUv),P.push(C.iridescenceThicknessMapUv),P.push(C.sheenColorMapUv),P.push(C.sheenRoughnessMapUv),P.push(C.specularMapUv),P.push(C.specularColorMapUv),P.push(C.specularIntensityMapUv),P.push(C.transmissionMapUv),P.push(C.thicknessMapUv),P.push(C.combine),P.push(C.fogExp2),P.push(C.sizeAttenuation),P.push(C.morphTargetsCount),P.push(C.morphAttributeCount),P.push(C.numDirLights),P.push(C.numPointLights),P.push(C.numSpotLights),P.push(C.numSpotLightMaps),P.push(C.numHemiLights),P.push(C.numRectAreaLights),P.push(C.numDirLightShadows),P.push(C.numPointLightShadows),P.push(C.numSpotLightShadows),P.push(C.numSpotLightShadowsWithMaps),P.push(C.numLightProbes),P.push(C.shadowMapType),P.push(C.toneMapping),P.push(C.numClippingPlanes),P.push(C.numClipIntersection),P.push(C.depthPacking)}function N(P,C){f.disableAll(),C.supportsVertexTextures&&f.enable(0),C.instancing&&f.enable(1),C.instancingColor&&f.enable(2),C.instancingMorph&&f.enable(3),C.matcap&&f.enable(4),C.envMap&&f.enable(5),C.normalMapObjectSpace&&f.enable(6),C.normalMapTangentSpace&&f.enable(7),C.clearcoat&&f.enable(8),C.iridescence&&f.enable(9),C.alphaTest&&f.enable(10),C.vertexColors&&f.enable(11),C.vertexAlphas&&f.enable(12),C.vertexUv1s&&f.enable(13),C.vertexUv2s&&f.enable(14),C.vertexUv3s&&f.enable(15),C.vertexTangents&&f.enable(16),C.anisotropy&&f.enable(17),C.alphaHash&&f.enable(18),C.batching&&f.enable(19),C.dispersion&&f.enable(20),C.batchingColor&&f.enable(21),P.push(f.mask),f.disableAll(),C.fog&&f.enable(0),C.useFog&&f.enable(1),C.flatShading&&f.enable(2),C.logarithmicDepthBuffer&&f.enable(3),C.reverseDepthBuffer&&f.enable(4),C.skinning&&f.enable(5),C.morphTargets&&f.enable(6),C.morphNormals&&f.enable(7),C.morphColors&&f.enable(8),C.premultipliedAlpha&&f.enable(9),C.shadowMapEnabled&&f.enable(10),C.doubleSided&&f.enable(11),C.flipSided&&f.enable(12),C.useDepthPacking&&f.enable(13),C.dithering&&f.enable(14),C.transmission&&f.enable(15),C.sheen&&f.enable(16),C.opaque&&f.enable(17),C.pointsUvs&&f.enable(18),C.decodeVideoTexture&&f.enable(19),C.decodeVideoTextureEmissive&&f.enable(20),C.alphaToCoverage&&f.enable(21),P.push(f.mask)}function A(P){const C=E[P.type];let z;if(C){const oe=yi[C];z=Bx.clone(oe.uniforms)}else z=P.uniforms;return z}function j(P,C){let z;for(let oe=0,J=_.length;oe<J;oe++){const de=_[oe];if(de.cacheKey===C){z=de,++z.usedTimes;break}}return z===void 0&&(z=new eE(s,C,P,c),_.push(z)),z}function k(P){if(--P.usedTimes===0){const C=_.indexOf(P);_[C]=_[_.length-1],_.pop(),P.destroy()}}function U(P){p.remove(P)}function B(){p.dispose()}return{getParameters:g,getProgramCacheKey:v,getUniforms:A,acquireProgram:j,releaseProgram:k,releaseShaderCache:U,programs:_,dispose:B}}function sE(){let s=new WeakMap;function e(u){return s.has(u)}function n(u){let f=s.get(u);return f===void 0&&(f={},s.set(u,f)),f}function r(u){s.delete(u)}function a(u,f,p){s.get(u)[f]=p}function c(){s=new WeakMap}return{has:e,get:n,remove:r,update:a,dispose:c}}function oE(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function Im(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Um(){const s=[];let e=0;const n=[],r=[],a=[];function c(){e=0,n.length=0,r.length=0,a.length=0}function u(x,y,S,E,T,g){let v=s[e];return v===void 0?(v={id:x.id,object:x,geometry:y,material:S,groupOrder:E,renderOrder:x.renderOrder,z:T,group:g},s[e]=v):(v.id=x.id,v.object=x,v.geometry=y,v.material=S,v.groupOrder=E,v.renderOrder=x.renderOrder,v.z=T,v.group=g),e++,v}function f(x,y,S,E,T,g){const v=u(x,y,S,E,T,g);S.transmission>0?r.push(v):S.transparent===!0?a.push(v):n.push(v)}function p(x,y,S,E,T,g){const v=u(x,y,S,E,T,g);S.transmission>0?r.unshift(v):S.transparent===!0?a.unshift(v):n.unshift(v)}function m(x,y){n.length>1&&n.sort(x||oE),r.length>1&&r.sort(y||Im),a.length>1&&a.sort(y||Im)}function _(){for(let x=e,y=s.length;x<y;x++){const S=s[x];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:n,transmissive:r,transparent:a,init:c,push:f,unshift:p,finish:_,sort:m}}function aE(){let s=new WeakMap;function e(r,a){const c=s.get(r);let u;return c===void 0?(u=new Um,s.set(r,[u])):a>=c.length?(u=new Um,c.push(u)):u=c[a],u}function n(){s=new WeakMap}return{get:e,dispose:n}}function lE(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new q,color:new bt};break;case"SpotLight":n={position:new q,direction:new q,color:new bt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new q,color:new bt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new q,skyColor:new bt,groundColor:new bt};break;case"RectAreaLight":n={color:new bt,position:new q,halfWidth:new q,halfHeight:new q};break}return s[e.id]=n,n}}}function cE(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Rt};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Rt};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Rt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=n,n}}}let uE=0;function dE(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function fE(s){const e=new lE,n=cE(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)r.probe.push(new q);const a=new q,c=new Vt,u=new Vt;function f(m){let _=0,x=0,y=0;for(let P=0;P<9;P++)r.probe[P].set(0,0,0);let S=0,E=0,T=0,g=0,v=0,D=0,N=0,A=0,j=0,k=0,U=0;m.sort(dE);for(let P=0,C=m.length;P<C;P++){const z=m[P],oe=z.color,J=z.intensity,de=z.distance,he=z.shadow&&z.shadow.map?z.shadow.map.texture:null;if(z.isAmbientLight)_+=oe.r*J,x+=oe.g*J,y+=oe.b*J;else if(z.isLightProbe){for(let ae=0;ae<9;ae++)r.probe[ae].addScaledVector(z.sh.coefficients[ae],J);U++}else if(z.isDirectionalLight){const ae=e.get(z);if(ae.color.copy(z.color).multiplyScalar(z.intensity),z.castShadow){const ce=z.shadow,H=n.get(z);H.shadowIntensity=ce.intensity,H.shadowBias=ce.bias,H.shadowNormalBias=ce.normalBias,H.shadowRadius=ce.radius,H.shadowMapSize=ce.mapSize,r.directionalShadow[S]=H,r.directionalShadowMap[S]=he,r.directionalShadowMatrix[S]=z.shadow.matrix,D++}r.directional[S]=ae,S++}else if(z.isSpotLight){const ae=e.get(z);ae.position.setFromMatrixPosition(z.matrixWorld),ae.color.copy(oe).multiplyScalar(J),ae.distance=de,ae.coneCos=Math.cos(z.angle),ae.penumbraCos=Math.cos(z.angle*(1-z.penumbra)),ae.decay=z.decay,r.spot[T]=ae;const ce=z.shadow;if(z.map&&(r.spotLightMap[j]=z.map,j++,ce.updateMatrices(z),z.castShadow&&k++),r.spotLightMatrix[T]=ce.matrix,z.castShadow){const H=n.get(z);H.shadowIntensity=ce.intensity,H.shadowBias=ce.bias,H.shadowNormalBias=ce.normalBias,H.shadowRadius=ce.radius,H.shadowMapSize=ce.mapSize,r.spotShadow[T]=H,r.spotShadowMap[T]=he,A++}T++}else if(z.isRectAreaLight){const ae=e.get(z);ae.color.copy(oe).multiplyScalar(J),ae.halfWidth.set(z.width*.5,0,0),ae.halfHeight.set(0,z.height*.5,0),r.rectArea[g]=ae,g++}else if(z.isPointLight){const ae=e.get(z);if(ae.color.copy(z.color).multiplyScalar(z.intensity),ae.distance=z.distance,ae.decay=z.decay,z.castShadow){const ce=z.shadow,H=n.get(z);H.shadowIntensity=ce.intensity,H.shadowBias=ce.bias,H.shadowNormalBias=ce.normalBias,H.shadowRadius=ce.radius,H.shadowMapSize=ce.mapSize,H.shadowCameraNear=ce.camera.near,H.shadowCameraFar=ce.camera.far,r.pointShadow[E]=H,r.pointShadowMap[E]=he,r.pointShadowMatrix[E]=z.shadow.matrix,N++}r.point[E]=ae,E++}else if(z.isHemisphereLight){const ae=e.get(z);ae.skyColor.copy(z.color).multiplyScalar(J),ae.groundColor.copy(z.groundColor).multiplyScalar(J),r.hemi[v]=ae,v++}}g>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Re.LTC_FLOAT_1,r.rectAreaLTC2=Re.LTC_FLOAT_2):(r.rectAreaLTC1=Re.LTC_HALF_1,r.rectAreaLTC2=Re.LTC_HALF_2)),r.ambient[0]=_,r.ambient[1]=x,r.ambient[2]=y;const B=r.hash;(B.directionalLength!==S||B.pointLength!==E||B.spotLength!==T||B.rectAreaLength!==g||B.hemiLength!==v||B.numDirectionalShadows!==D||B.numPointShadows!==N||B.numSpotShadows!==A||B.numSpotMaps!==j||B.numLightProbes!==U)&&(r.directional.length=S,r.spot.length=T,r.rectArea.length=g,r.point.length=E,r.hemi.length=v,r.directionalShadow.length=D,r.directionalShadowMap.length=D,r.pointShadow.length=N,r.pointShadowMap.length=N,r.spotShadow.length=A,r.spotShadowMap.length=A,r.directionalShadowMatrix.length=D,r.pointShadowMatrix.length=N,r.spotLightMatrix.length=A+j-k,r.spotLightMap.length=j,r.numSpotLightShadowsWithMaps=k,r.numLightProbes=U,B.directionalLength=S,B.pointLength=E,B.spotLength=T,B.rectAreaLength=g,B.hemiLength=v,B.numDirectionalShadows=D,B.numPointShadows=N,B.numSpotShadows=A,B.numSpotMaps=j,B.numLightProbes=U,r.version=uE++)}function p(m,_){let x=0,y=0,S=0,E=0,T=0;const g=_.matrixWorldInverse;for(let v=0,D=m.length;v<D;v++){const N=m[v];if(N.isDirectionalLight){const A=r.directional[x];A.direction.setFromMatrixPosition(N.matrixWorld),a.setFromMatrixPosition(N.target.matrixWorld),A.direction.sub(a),A.direction.transformDirection(g),x++}else if(N.isSpotLight){const A=r.spot[S];A.position.setFromMatrixPosition(N.matrixWorld),A.position.applyMatrix4(g),A.direction.setFromMatrixPosition(N.matrixWorld),a.setFromMatrixPosition(N.target.matrixWorld),A.direction.sub(a),A.direction.transformDirection(g),S++}else if(N.isRectAreaLight){const A=r.rectArea[E];A.position.setFromMatrixPosition(N.matrixWorld),A.position.applyMatrix4(g),u.identity(),c.copy(N.matrixWorld),c.premultiply(g),u.extractRotation(c),A.halfWidth.set(N.width*.5,0,0),A.halfHeight.set(0,N.height*.5,0),A.halfWidth.applyMatrix4(u),A.halfHeight.applyMatrix4(u),E++}else if(N.isPointLight){const A=r.point[y];A.position.setFromMatrixPosition(N.matrixWorld),A.position.applyMatrix4(g),y++}else if(N.isHemisphereLight){const A=r.hemi[T];A.direction.setFromMatrixPosition(N.matrixWorld),A.direction.transformDirection(g),T++}}}return{setup:f,setupView:p,state:r}}function km(s){const e=new fE(s),n=[],r=[];function a(_){m.camera=_,n.length=0,r.length=0}function c(_){n.push(_)}function u(_){r.push(_)}function f(){e.setup(n)}function p(_){e.setupView(n,_)}const m={lightsArray:n,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:a,state:m,setupLights:f,setupLightsView:p,pushLight:c,pushShadow:u}}function hE(s){let e=new WeakMap;function n(a,c=0){const u=e.get(a);let f;return u===void 0?(f=new km(s),e.set(a,[f])):c>=u.length?(f=new km(s),u.push(f)):f=u[c],f}function r(){e=new WeakMap}return{get:n,dispose:r}}class pE extends $s{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=lx,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class mE extends $s{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const gE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,vE=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function _E(s,e,n){let r=new yg;const a=new Rt,c=new Rt,u=new Wt,f=new pE({depthPacking:cx}),p=new mE,m={},_=n.maxTextureSize,x={[Sr]:Nn,[Nn]:Sr,[zi]:zi},y=new Mr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Rt},radius:{value:4}},vertexShader:gE,fragmentShader:vE}),S=y.clone();S.defines.HORIZONTAL_PASS=1;const E=new Sn;E.setAttribute("position",new hi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const T=new Jn(E,y),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Km;let v=this.type;this.render=function(k,U,B){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||k.length===0)return;const P=s.getRenderTarget(),C=s.getActiveCubeFace(),z=s.getActiveMipmapLevel(),oe=s.state;oe.setBlending(xr),oe.buffers.color.setClear(1,1,1,1),oe.buffers.depth.setTest(!0),oe.setScissorTest(!1);const J=v!==Oi&&this.type===Oi,de=v===Oi&&this.type!==Oi;for(let he=0,ae=k.length;he<ae;he++){const ce=k[he],H=ce.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",ce,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;a.copy(H.mapSize);const le=H.getFrameExtents();if(a.multiply(le),c.copy(H.mapSize),(a.x>_||a.y>_)&&(a.x>_&&(c.x=Math.floor(_/le.x),a.x=c.x*le.x,H.mapSize.x=c.x),a.y>_&&(c.y=Math.floor(_/le.y),a.y=c.y*le.y,H.mapSize.y=c.y)),H.map===null||J===!0||de===!0){const F=this.type!==Oi?{minFilter:fi,magFilter:fi}:{};H.map!==null&&H.map.dispose(),H.map=new Kr(a.x,a.y,F),H.map.texture.name=ce.name+".shadowMap",H.camera.updateProjectionMatrix()}s.setRenderTarget(H.map),s.clear();const re=H.getViewportCount();for(let F=0;F<re;F++){const ie=H.getViewport(F);u.set(c.x*ie.x,c.y*ie.y,c.x*ie.z,c.y*ie.w),oe.viewport(u),H.updateMatrices(ce,F),r=H.getFrustum(),A(U,B,H.camera,ce,this.type)}H.isPointLightShadow!==!0&&this.type===Oi&&D(H,B),H.needsUpdate=!1}v=this.type,g.needsUpdate=!1,s.setRenderTarget(P,C,z)};function D(k,U){const B=e.update(T);y.defines.VSM_SAMPLES!==k.blurSamples&&(y.defines.VSM_SAMPLES=k.blurSamples,S.defines.VSM_SAMPLES=k.blurSamples,y.needsUpdate=!0,S.needsUpdate=!0),k.mapPass===null&&(k.mapPass=new Kr(a.x,a.y)),y.uniforms.shadow_pass.value=k.map.texture,y.uniforms.resolution.value=k.mapSize,y.uniforms.radius.value=k.radius,s.setRenderTarget(k.mapPass),s.clear(),s.renderBufferDirect(U,null,B,y,T,null),S.uniforms.shadow_pass.value=k.mapPass.texture,S.uniforms.resolution.value=k.mapSize,S.uniforms.radius.value=k.radius,s.setRenderTarget(k.map),s.clear(),s.renderBufferDirect(U,null,B,S,T,null)}function N(k,U,B,P){let C=null;const z=B.isPointLight===!0?k.customDistanceMaterial:k.customDepthMaterial;if(z!==void 0)C=z;else if(C=B.isPointLight===!0?p:f,s.localClippingEnabled&&U.clipShadows===!0&&Array.isArray(U.clippingPlanes)&&U.clippingPlanes.length!==0||U.displacementMap&&U.displacementScale!==0||U.alphaMap&&U.alphaTest>0||U.map&&U.alphaTest>0){const oe=C.uuid,J=U.uuid;let de=m[oe];de===void 0&&(de={},m[oe]=de);let he=de[J];he===void 0&&(he=C.clone(),de[J]=he,U.addEventListener("dispose",j)),C=he}if(C.visible=U.visible,C.wireframe=U.wireframe,P===Oi?C.side=U.shadowSide!==null?U.shadowSide:U.side:C.side=U.shadowSide!==null?U.shadowSide:x[U.side],C.alphaMap=U.alphaMap,C.alphaTest=U.alphaTest,C.map=U.map,C.clipShadows=U.clipShadows,C.clippingPlanes=U.clippingPlanes,C.clipIntersection=U.clipIntersection,C.displacementMap=U.displacementMap,C.displacementScale=U.displacementScale,C.displacementBias=U.displacementBias,C.wireframeLinewidth=U.wireframeLinewidth,C.linewidth=U.linewidth,B.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const oe=s.properties.get(C);oe.light=B}return C}function A(k,U,B,P,C){if(k.visible===!1)return;if(k.layers.test(U.layers)&&(k.isMesh||k.isLine||k.isPoints)&&(k.castShadow||k.receiveShadow&&C===Oi)&&(!k.frustumCulled||r.intersectsObject(k))){k.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,k.matrixWorld);const J=e.update(k),de=k.material;if(Array.isArray(de)){const he=J.groups;for(let ae=0,ce=he.length;ae<ce;ae++){const H=he[ae],le=de[H.materialIndex];if(le&&le.visible){const re=N(k,le,P,C);k.onBeforeShadow(s,k,U,B,J,re,H),s.renderBufferDirect(B,null,J,re,k,H),k.onAfterShadow(s,k,U,B,J,re,H)}}}else if(de.visible){const he=N(k,de,P,C);k.onBeforeShadow(s,k,U,B,J,he,null),s.renderBufferDirect(B,null,J,he,k,null),k.onAfterShadow(s,k,U,B,J,he,null)}}const oe=k.children;for(let J=0,de=oe.length;J<de;J++)A(oe[J],U,B,P,C)}function j(k){k.target.removeEventListener("dispose",j);for(const B in m){const P=m[B],C=k.target.uuid;C in P&&(P[C].dispose(),delete P[C])}}}const xE={[ad]:ld,[cd]:fd,[ud]:hd,[Hs]:dd,[ld]:ad,[fd]:cd,[hd]:ud,[dd]:Hs};function yE(s,e){function n(){let W=!1;const be=new Wt;let se=null;const pe=new Wt(0,0,0,0);return{setMask:function(Ne){se!==Ne&&!W&&(s.colorMask(Ne,Ne,Ne,Ne),se=Ne)},setLocked:function(Ne){W=Ne},setClear:function(Ne,Pe,ot,It,qt){qt===!0&&(Ne*=It,Pe*=It,ot*=It),be.set(Ne,Pe,ot,It),pe.equals(be)===!1&&(s.clearColor(Ne,Pe,ot,It),pe.copy(be))},reset:function(){W=!1,se=null,pe.set(-1,0,0,0)}}}function r(){let W=!1,be=!1,se=null,pe=null,Ne=null;return{setReversed:function(Pe){if(be!==Pe){const ot=e.get("EXT_clip_control");be?ot.clipControlEXT(ot.LOWER_LEFT_EXT,ot.ZERO_TO_ONE_EXT):ot.clipControlEXT(ot.LOWER_LEFT_EXT,ot.NEGATIVE_ONE_TO_ONE_EXT);const It=Ne;Ne=null,this.setClear(It)}be=Pe},getReversed:function(){return be},setTest:function(Pe){Pe?ve(s.DEPTH_TEST):Ae(s.DEPTH_TEST)},setMask:function(Pe){se!==Pe&&!W&&(s.depthMask(Pe),se=Pe)},setFunc:function(Pe){if(be&&(Pe=xE[Pe]),pe!==Pe){switch(Pe){case ad:s.depthFunc(s.NEVER);break;case ld:s.depthFunc(s.ALWAYS);break;case cd:s.depthFunc(s.LESS);break;case Hs:s.depthFunc(s.LEQUAL);break;case ud:s.depthFunc(s.EQUAL);break;case dd:s.depthFunc(s.GEQUAL);break;case fd:s.depthFunc(s.GREATER);break;case hd:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}pe=Pe}},setLocked:function(Pe){W=Pe},setClear:function(Pe){Ne!==Pe&&(be&&(Pe=1-Pe),s.clearDepth(Pe),Ne=Pe)},reset:function(){W=!1,se=null,pe=null,Ne=null,be=!1}}}function a(){let W=!1,be=null,se=null,pe=null,Ne=null,Pe=null,ot=null,It=null,qt=null;return{setTest:function(_t){W||(_t?ve(s.STENCIL_TEST):Ae(s.STENCIL_TEST))},setMask:function(_t){be!==_t&&!W&&(s.stencilMask(_t),be=_t)},setFunc:function(_t,Mn,mn){(se!==_t||pe!==Mn||Ne!==mn)&&(s.stencilFunc(_t,Mn,mn),se=_t,pe=Mn,Ne=mn)},setOp:function(_t,Mn,mn){(Pe!==_t||ot!==Mn||It!==mn)&&(s.stencilOp(_t,Mn,mn),Pe=_t,ot=Mn,It=mn)},setLocked:function(_t){W=_t},setClear:function(_t){qt!==_t&&(s.clearStencil(_t),qt=_t)},reset:function(){W=!1,be=null,se=null,pe=null,Ne=null,Pe=null,ot=null,It=null,qt=null}}}const c=new n,u=new r,f=new a,p=new WeakMap,m=new WeakMap;let _={},x={},y=new WeakMap,S=[],E=null,T=!1,g=null,v=null,D=null,N=null,A=null,j=null,k=null,U=new bt(0,0,0),B=0,P=!1,C=null,z=null,oe=null,J=null,de=null;const he=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ae=!1,ce=0;const H=s.getParameter(s.VERSION);H.indexOf("WebGL")!==-1?(ce=parseFloat(/^WebGL (\d)/.exec(H)[1]),ae=ce>=1):H.indexOf("OpenGL ES")!==-1&&(ce=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),ae=ce>=2);let le=null,re={};const F=s.getParameter(s.SCISSOR_BOX),ie=s.getParameter(s.VIEWPORT),De=new Wt().fromArray(F),Z=new Wt().fromArray(ie);function ue(W,be,se,pe){const Ne=new Uint8Array(4),Pe=s.createTexture();s.bindTexture(W,Pe),s.texParameteri(W,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(W,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let ot=0;ot<se;ot++)W===s.TEXTURE_3D||W===s.TEXTURE_2D_ARRAY?s.texImage3D(be,0,s.RGBA,1,1,pe,0,s.RGBA,s.UNSIGNED_BYTE,Ne):s.texImage2D(be+ot,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Ne);return Pe}const Se={};Se[s.TEXTURE_2D]=ue(s.TEXTURE_2D,s.TEXTURE_2D,1),Se[s.TEXTURE_CUBE_MAP]=ue(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),Se[s.TEXTURE_2D_ARRAY]=ue(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Se[s.TEXTURE_3D]=ue(s.TEXTURE_3D,s.TEXTURE_3D,1,1),c.setClear(0,0,0,1),u.setClear(1),f.setClear(0),ve(s.DEPTH_TEST),u.setFunc(Hs),rt(!1),at(Bp),ve(s.CULL_FACE),V(xr);function ve(W){_[W]!==!0&&(s.enable(W),_[W]=!0)}function Ae(W){_[W]!==!1&&(s.disable(W),_[W]=!1)}function Le(W,be){return x[W]!==be?(s.bindFramebuffer(W,be),x[W]=be,W===s.DRAW_FRAMEBUFFER&&(x[s.FRAMEBUFFER]=be),W===s.FRAMEBUFFER&&(x[s.DRAW_FRAMEBUFFER]=be),!0):!1}function Ke(W,be){let se=S,pe=!1;if(W){se=y.get(be),se===void 0&&(se=[],y.set(be,se));const Ne=W.textures;if(se.length!==Ne.length||se[0]!==s.COLOR_ATTACHMENT0){for(let Pe=0,ot=Ne.length;Pe<ot;Pe++)se[Pe]=s.COLOR_ATTACHMENT0+Pe;se.length=Ne.length,pe=!0}}else se[0]!==s.BACK&&(se[0]=s.BACK,pe=!0);pe&&s.drawBuffers(se)}function wt(W){return E!==W?(s.useProgram(W),E=W,!0):!1}const dt={[jr]:s.FUNC_ADD,[U_]:s.FUNC_SUBTRACT,[k_]:s.FUNC_REVERSE_SUBTRACT};dt[F_]=s.MIN,dt[O_]=s.MAX;const qe={[z_]:s.ZERO,[B_]:s.ONE,[H_]:s.SRC_COLOR,[sd]:s.SRC_ALPHA,[Y_]:s.SRC_ALPHA_SATURATE,[j_]:s.DST_COLOR,[G_]:s.DST_ALPHA,[V_]:s.ONE_MINUS_SRC_COLOR,[od]:s.ONE_MINUS_SRC_ALPHA,[X_]:s.ONE_MINUS_DST_COLOR,[W_]:s.ONE_MINUS_DST_ALPHA,[q_]:s.CONSTANT_COLOR,[$_]:s.ONE_MINUS_CONSTANT_COLOR,[K_]:s.CONSTANT_ALPHA,[Z_]:s.ONE_MINUS_CONSTANT_ALPHA};function V(W,be,se,pe,Ne,Pe,ot,It,qt,_t){if(W===xr){T===!0&&(Ae(s.BLEND),T=!1);return}if(T===!1&&(ve(s.BLEND),T=!0),W!==I_){if(W!==g||_t!==P){if((v!==jr||A!==jr)&&(s.blendEquation(s.FUNC_ADD),v=jr,A=jr),_t)switch(W){case Os:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Hp:s.blendFunc(s.ONE,s.ONE);break;case Vp:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Gp:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",W);break}else switch(W){case Os:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Hp:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Vp:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Gp:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",W);break}D=null,N=null,j=null,k=null,U.set(0,0,0),B=0,g=W,P=_t}return}Ne=Ne||be,Pe=Pe||se,ot=ot||pe,(be!==v||Ne!==A)&&(s.blendEquationSeparate(dt[be],dt[Ne]),v=be,A=Ne),(se!==D||pe!==N||Pe!==j||ot!==k)&&(s.blendFuncSeparate(qe[se],qe[pe],qe[Pe],qe[ot]),D=se,N=pe,j=Pe,k=ot),(It.equals(U)===!1||qt!==B)&&(s.blendColor(It.r,It.g,It.b,qt),U.copy(It),B=qt),g=W,P=!1}function Bt(W,be){W.side===zi?Ae(s.CULL_FACE):ve(s.CULL_FACE);let se=W.side===Nn;be&&(se=!se),rt(se),W.blending===Os&&W.transparent===!1?V(xr):V(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),u.setFunc(W.depthFunc),u.setTest(W.depthTest),u.setMask(W.depthWrite),c.setMask(W.colorWrite);const pe=W.stencilWrite;f.setTest(pe),pe&&(f.setMask(W.stencilWriteMask),f.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),f.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),Et(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?ve(s.SAMPLE_ALPHA_TO_COVERAGE):Ae(s.SAMPLE_ALPHA_TO_COVERAGE)}function rt(W){C!==W&&(W?s.frontFace(s.CW):s.frontFace(s.CCW),C=W)}function at(W){W!==D_?(ve(s.CULL_FACE),W!==z&&(W===Bp?s.cullFace(s.BACK):W===N_?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Ae(s.CULL_FACE),z=W}function $e(W){W!==oe&&(ae&&s.lineWidth(W),oe=W)}function Et(W,be,se){W?(ve(s.POLYGON_OFFSET_FILL),(J!==be||de!==se)&&(s.polygonOffset(be,se),J=be,de=se)):Ae(s.POLYGON_OFFSET_FILL)}function ze(W){W?ve(s.SCISSOR_TEST):Ae(s.SCISSOR_TEST)}function L(W){W===void 0&&(W=s.TEXTURE0+he-1),le!==W&&(s.activeTexture(W),le=W)}function w(W,be,se){se===void 0&&(le===null?se=s.TEXTURE0+he-1:se=le);let pe=re[se];pe===void 0&&(pe={type:void 0,texture:void 0},re[se]=pe),(pe.type!==W||pe.texture!==be)&&(le!==se&&(s.activeTexture(se),le=se),s.bindTexture(W,be||Se[W]),pe.type=W,pe.texture=be)}function Q(){const W=re[le];W!==void 0&&W.type!==void 0&&(s.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function me(){try{s.compressedTexImage2D.apply(s,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function _e(){try{s.compressedTexImage3D.apply(s,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function fe(){try{s.texSubImage2D.apply(s,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Ge(){try{s.texSubImage3D.apply(s,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Ce(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Ue(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function ft(){try{s.texStorage2D.apply(s,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Me(){try{s.texStorage3D.apply(s,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Fe(){try{s.texImage2D.apply(s,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Je(){try{s.texImage3D.apply(s,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function et(W){De.equals(W)===!1&&(s.scissor(W.x,W.y,W.z,W.w),De.copy(W))}function Oe(W){Z.equals(W)===!1&&(s.viewport(W.x,W.y,W.z,W.w),Z.copy(W))}function ht(W,be){let se=m.get(be);se===void 0&&(se=new WeakMap,m.set(be,se));let pe=se.get(W);pe===void 0&&(pe=s.getUniformBlockIndex(be,W.name),se.set(W,pe))}function st(W,be){const pe=m.get(be).get(W);p.get(be)!==pe&&(s.uniformBlockBinding(be,pe,W.__bindingPointIndex),p.set(be,pe))}function At(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),u.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),_={},le=null,re={},x={},y=new WeakMap,S=[],E=null,T=!1,g=null,v=null,D=null,N=null,A=null,j=null,k=null,U=new bt(0,0,0),B=0,P=!1,C=null,z=null,oe=null,J=null,de=null,De.set(0,0,s.canvas.width,s.canvas.height),Z.set(0,0,s.canvas.width,s.canvas.height),c.reset(),u.reset(),f.reset()}return{buffers:{color:c,depth:u,stencil:f},enable:ve,disable:Ae,bindFramebuffer:Le,drawBuffers:Ke,useProgram:wt,setBlending:V,setMaterial:Bt,setFlipSided:rt,setCullFace:at,setLineWidth:$e,setPolygonOffset:Et,setScissorTest:ze,activeTexture:L,bindTexture:w,unbindTexture:Q,compressedTexImage2D:me,compressedTexImage3D:_e,texImage2D:Fe,texImage3D:Je,updateUBOMapping:ht,uniformBlockBinding:st,texStorage2D:ft,texStorage3D:Me,texSubImage2D:fe,texSubImage3D:Ge,compressedTexSubImage2D:Ce,compressedTexSubImage3D:Ue,scissor:et,viewport:Oe,reset:At}}function Fm(s,e,n,r){const a=SE(r);switch(n){case ng:return s*e;case rg:return s*e;case sg:return s*e*2;case og:return s*e/a.components*a.byteLength;case Jd:return s*e/a.components*a.byteLength;case ag:return s*e*2/a.components*a.byteLength;case ef:return s*e*2/a.components*a.byteLength;case ig:return s*e*3/a.components*a.byteLength;case di:return s*e*4/a.components*a.byteLength;case tf:return s*e*4/a.components*a.byteLength;case wl:case Al:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Cl:case bl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case xd:case Sd:return Math.max(s,16)*Math.max(e,8)/4;case _d:case yd:return Math.max(s,8)*Math.max(e,8)/2;case Md:case Ed:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Td:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case wd:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Ad:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case Cd:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case bd:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case Rd:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Pd:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case Dd:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Nd:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Ld:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case Id:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Ud:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case kd:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Fd:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Od:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Rl:case zd:case Bd:return Math.ceil(s/4)*Math.ceil(e/4)*16;case lg:case Hd:return Math.ceil(s/4)*Math.ceil(e/4)*8;case Vd:case Gd:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function SE(s){switch(s){case Gi:case Jm:return{byteLength:1,components:1};case zo:case eg:case Bo:return{byteLength:2,components:1};case Zd:case Qd:return{byteLength:2,components:4};case $r:case Kd:case Bi:return{byteLength:4,components:1};case tg:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}function ME(s,e,n,r,a,c,u){const f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new Rt,_=new WeakMap;let x;const y=new WeakMap;let S=!1;try{S=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(L,w){return S?new OffscreenCanvas(L,w):Ul("canvas")}function T(L,w,Q){let me=1;const _e=ze(L);if((_e.width>Q||_e.height>Q)&&(me=Q/Math.max(_e.width,_e.height)),me<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const fe=Math.floor(me*_e.width),Ge=Math.floor(me*_e.height);x===void 0&&(x=E(fe,Ge));const Ce=w?E(fe,Ge):x;return Ce.width=fe,Ce.height=Ge,Ce.getContext("2d").drawImage(L,0,0,fe,Ge),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+_e.width+"x"+_e.height+") to ("+fe+"x"+Ge+")."),Ce}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+_e.width+"x"+_e.height+")."),L;return L}function g(L){return L.generateMipmaps}function v(L){s.generateMipmap(L)}function D(L){return L.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?s.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function N(L,w,Q,me,_e=!1){if(L!==null){if(s[L]!==void 0)return s[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let fe=w;if(w===s.RED&&(Q===s.FLOAT&&(fe=s.R32F),Q===s.HALF_FLOAT&&(fe=s.R16F),Q===s.UNSIGNED_BYTE&&(fe=s.R8)),w===s.RED_INTEGER&&(Q===s.UNSIGNED_BYTE&&(fe=s.R8UI),Q===s.UNSIGNED_SHORT&&(fe=s.R16UI),Q===s.UNSIGNED_INT&&(fe=s.R32UI),Q===s.BYTE&&(fe=s.R8I),Q===s.SHORT&&(fe=s.R16I),Q===s.INT&&(fe=s.R32I)),w===s.RG&&(Q===s.FLOAT&&(fe=s.RG32F),Q===s.HALF_FLOAT&&(fe=s.RG16F),Q===s.UNSIGNED_BYTE&&(fe=s.RG8)),w===s.RG_INTEGER&&(Q===s.UNSIGNED_BYTE&&(fe=s.RG8UI),Q===s.UNSIGNED_SHORT&&(fe=s.RG16UI),Q===s.UNSIGNED_INT&&(fe=s.RG32UI),Q===s.BYTE&&(fe=s.RG8I),Q===s.SHORT&&(fe=s.RG16I),Q===s.INT&&(fe=s.RG32I)),w===s.RGB_INTEGER&&(Q===s.UNSIGNED_BYTE&&(fe=s.RGB8UI),Q===s.UNSIGNED_SHORT&&(fe=s.RGB16UI),Q===s.UNSIGNED_INT&&(fe=s.RGB32UI),Q===s.BYTE&&(fe=s.RGB8I),Q===s.SHORT&&(fe=s.RGB16I),Q===s.INT&&(fe=s.RGB32I)),w===s.RGBA_INTEGER&&(Q===s.UNSIGNED_BYTE&&(fe=s.RGBA8UI),Q===s.UNSIGNED_SHORT&&(fe=s.RGBA16UI),Q===s.UNSIGNED_INT&&(fe=s.RGBA32UI),Q===s.BYTE&&(fe=s.RGBA8I),Q===s.SHORT&&(fe=s.RGBA16I),Q===s.INT&&(fe=s.RGBA32I)),w===s.RGB&&Q===s.UNSIGNED_INT_5_9_9_9_REV&&(fe=s.RGB9_E5),w===s.RGBA){const Ge=_e?Bl:yt.getTransfer(me);Q===s.FLOAT&&(fe=s.RGBA32F),Q===s.HALF_FLOAT&&(fe=s.RGBA16F),Q===s.UNSIGNED_BYTE&&(fe=Ge===Dt?s.SRGB8_ALPHA8:s.RGBA8),Q===s.UNSIGNED_SHORT_4_4_4_4&&(fe=s.RGBA4),Q===s.UNSIGNED_SHORT_5_5_5_1&&(fe=s.RGB5_A1)}return(fe===s.R16F||fe===s.R32F||fe===s.RG16F||fe===s.RG32F||fe===s.RGBA16F||fe===s.RGBA32F)&&e.get("EXT_color_buffer_float"),fe}function A(L,w){let Q;return L?w===null||w===$r||w===Ws?Q=s.DEPTH24_STENCIL8:w===Bi?Q=s.DEPTH32F_STENCIL8:w===zo&&(Q=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===$r||w===Ws?Q=s.DEPTH_COMPONENT24:w===Bi?Q=s.DEPTH_COMPONENT32F:w===zo&&(Q=s.DEPTH_COMPONENT16),Q}function j(L,w){return g(L)===!0||L.isFramebufferTexture&&L.minFilter!==fi&&L.minFilter!==Si?Math.log2(Math.max(w.width,w.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?w.mipmaps.length:1}function k(L){const w=L.target;w.removeEventListener("dispose",k),B(w),w.isVideoTexture&&_.delete(w)}function U(L){const w=L.target;w.removeEventListener("dispose",U),C(w)}function B(L){const w=r.get(L);if(w.__webglInit===void 0)return;const Q=L.source,me=y.get(Q);if(me){const _e=me[w.__cacheKey];_e.usedTimes--,_e.usedTimes===0&&P(L),Object.keys(me).length===0&&y.delete(Q)}r.remove(L)}function P(L){const w=r.get(L);s.deleteTexture(w.__webglTexture);const Q=L.source,me=y.get(Q);delete me[w.__cacheKey],u.memory.textures--}function C(L){const w=r.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),r.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let me=0;me<6;me++){if(Array.isArray(w.__webglFramebuffer[me]))for(let _e=0;_e<w.__webglFramebuffer[me].length;_e++)s.deleteFramebuffer(w.__webglFramebuffer[me][_e]);else s.deleteFramebuffer(w.__webglFramebuffer[me]);w.__webglDepthbuffer&&s.deleteRenderbuffer(w.__webglDepthbuffer[me])}else{if(Array.isArray(w.__webglFramebuffer))for(let me=0;me<w.__webglFramebuffer.length;me++)s.deleteFramebuffer(w.__webglFramebuffer[me]);else s.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&s.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&s.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let me=0;me<w.__webglColorRenderbuffer.length;me++)w.__webglColorRenderbuffer[me]&&s.deleteRenderbuffer(w.__webglColorRenderbuffer[me]);w.__webglDepthRenderbuffer&&s.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const Q=L.textures;for(let me=0,_e=Q.length;me<_e;me++){const fe=r.get(Q[me]);fe.__webglTexture&&(s.deleteTexture(fe.__webglTexture),u.memory.textures--),r.remove(Q[me])}r.remove(L)}let z=0;function oe(){z=0}function J(){const L=z;return L>=a.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+a.maxTextures),z+=1,L}function de(L){const w=[];return w.push(L.wrapS),w.push(L.wrapT),w.push(L.wrapR||0),w.push(L.magFilter),w.push(L.minFilter),w.push(L.anisotropy),w.push(L.internalFormat),w.push(L.format),w.push(L.type),w.push(L.generateMipmaps),w.push(L.premultiplyAlpha),w.push(L.flipY),w.push(L.unpackAlignment),w.push(L.colorSpace),w.join()}function he(L,w){const Q=r.get(L);if(L.isVideoTexture&&$e(L),L.isRenderTargetTexture===!1&&L.version>0&&Q.__version!==L.version){const me=L.image;if(me===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(me.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Z(Q,L,w);return}}n.bindTexture(s.TEXTURE_2D,Q.__webglTexture,s.TEXTURE0+w)}function ae(L,w){const Q=r.get(L);if(L.version>0&&Q.__version!==L.version){Z(Q,L,w);return}n.bindTexture(s.TEXTURE_2D_ARRAY,Q.__webglTexture,s.TEXTURE0+w)}function ce(L,w){const Q=r.get(L);if(L.version>0&&Q.__version!==L.version){Z(Q,L,w);return}n.bindTexture(s.TEXTURE_3D,Q.__webglTexture,s.TEXTURE0+w)}function H(L,w){const Q=r.get(L);if(L.version>0&&Q.__version!==L.version){ue(Q,L,w);return}n.bindTexture(s.TEXTURE_CUBE_MAP,Q.__webglTexture,s.TEXTURE0+w)}const le={[gd]:s.REPEAT,[Yr]:s.CLAMP_TO_EDGE,[vd]:s.MIRRORED_REPEAT},re={[fi]:s.NEAREST,[ax]:s.NEAREST_MIPMAP_NEAREST,[Za]:s.NEAREST_MIPMAP_LINEAR,[Si]:s.LINEAR,[Cu]:s.LINEAR_MIPMAP_NEAREST,[qr]:s.LINEAR_MIPMAP_LINEAR},F={[fx]:s.NEVER,[_x]:s.ALWAYS,[hx]:s.LESS,[cg]:s.LEQUAL,[px]:s.EQUAL,[vx]:s.GEQUAL,[mx]:s.GREATER,[gx]:s.NOTEQUAL};function ie(L,w){if(w.type===Bi&&e.has("OES_texture_float_linear")===!1&&(w.magFilter===Si||w.magFilter===Cu||w.magFilter===Za||w.magFilter===qr||w.minFilter===Si||w.minFilter===Cu||w.minFilter===Za||w.minFilter===qr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(L,s.TEXTURE_WRAP_S,le[w.wrapS]),s.texParameteri(L,s.TEXTURE_WRAP_T,le[w.wrapT]),(L===s.TEXTURE_3D||L===s.TEXTURE_2D_ARRAY)&&s.texParameteri(L,s.TEXTURE_WRAP_R,le[w.wrapR]),s.texParameteri(L,s.TEXTURE_MAG_FILTER,re[w.magFilter]),s.texParameteri(L,s.TEXTURE_MIN_FILTER,re[w.minFilter]),w.compareFunction&&(s.texParameteri(L,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(L,s.TEXTURE_COMPARE_FUNC,F[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===fi||w.minFilter!==Za&&w.minFilter!==qr||w.type===Bi&&e.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||r.get(w).__currentAnisotropy){const Q=e.get("EXT_texture_filter_anisotropic");s.texParameterf(L,Q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,a.getMaxAnisotropy())),r.get(w).__currentAnisotropy=w.anisotropy}}}function De(L,w){let Q=!1;L.__webglInit===void 0&&(L.__webglInit=!0,w.addEventListener("dispose",k));const me=w.source;let _e=y.get(me);_e===void 0&&(_e={},y.set(me,_e));const fe=de(w);if(fe!==L.__cacheKey){_e[fe]===void 0&&(_e[fe]={texture:s.createTexture(),usedTimes:0},u.memory.textures++,Q=!0),_e[fe].usedTimes++;const Ge=_e[L.__cacheKey];Ge!==void 0&&(_e[L.__cacheKey].usedTimes--,Ge.usedTimes===0&&P(w)),L.__cacheKey=fe,L.__webglTexture=_e[fe].texture}return Q}function Z(L,w,Q){let me=s.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(me=s.TEXTURE_2D_ARRAY),w.isData3DTexture&&(me=s.TEXTURE_3D);const _e=De(L,w),fe=w.source;n.bindTexture(me,L.__webglTexture,s.TEXTURE0+Q);const Ge=r.get(fe);if(fe.version!==Ge.__version||_e===!0){n.activeTexture(s.TEXTURE0+Q);const Ce=yt.getPrimaries(yt.workingColorSpace),Ue=w.colorSpace===_r?null:yt.getPrimaries(w.colorSpace),ft=w.colorSpace===_r||Ce===Ue?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,w.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,w.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ft);let Me=T(w.image,!1,a.maxTextureSize);Me=Et(w,Me);const Fe=c.convert(w.format,w.colorSpace),Je=c.convert(w.type);let et=N(w.internalFormat,Fe,Je,w.colorSpace,w.isVideoTexture);ie(me,w);let Oe;const ht=w.mipmaps,st=w.isVideoTexture!==!0,At=Ge.__version===void 0||_e===!0,W=fe.dataReady,be=j(w,Me);if(w.isDepthTexture)et=A(w.format===js,w.type),At&&(st?n.texStorage2D(s.TEXTURE_2D,1,et,Me.width,Me.height):n.texImage2D(s.TEXTURE_2D,0,et,Me.width,Me.height,0,Fe,Je,null));else if(w.isDataTexture)if(ht.length>0){st&&At&&n.texStorage2D(s.TEXTURE_2D,be,et,ht[0].width,ht[0].height);for(let se=0,pe=ht.length;se<pe;se++)Oe=ht[se],st?W&&n.texSubImage2D(s.TEXTURE_2D,se,0,0,Oe.width,Oe.height,Fe,Je,Oe.data):n.texImage2D(s.TEXTURE_2D,se,et,Oe.width,Oe.height,0,Fe,Je,Oe.data);w.generateMipmaps=!1}else st?(At&&n.texStorage2D(s.TEXTURE_2D,be,et,Me.width,Me.height),W&&n.texSubImage2D(s.TEXTURE_2D,0,0,0,Me.width,Me.height,Fe,Je,Me.data)):n.texImage2D(s.TEXTURE_2D,0,et,Me.width,Me.height,0,Fe,Je,Me.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){st&&At&&n.texStorage3D(s.TEXTURE_2D_ARRAY,be,et,ht[0].width,ht[0].height,Me.depth);for(let se=0,pe=ht.length;se<pe;se++)if(Oe=ht[se],w.format!==di)if(Fe!==null)if(st){if(W)if(w.layerUpdates.size>0){const Ne=Fm(Oe.width,Oe.height,w.format,w.type);for(const Pe of w.layerUpdates){const ot=Oe.data.subarray(Pe*Ne/Oe.data.BYTES_PER_ELEMENT,(Pe+1)*Ne/Oe.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,se,0,0,Pe,Oe.width,Oe.height,1,Fe,ot)}w.clearLayerUpdates()}else n.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,se,0,0,0,Oe.width,Oe.height,Me.depth,Fe,Oe.data)}else n.compressedTexImage3D(s.TEXTURE_2D_ARRAY,se,et,Oe.width,Oe.height,Me.depth,0,Oe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else st?W&&n.texSubImage3D(s.TEXTURE_2D_ARRAY,se,0,0,0,Oe.width,Oe.height,Me.depth,Fe,Je,Oe.data):n.texImage3D(s.TEXTURE_2D_ARRAY,se,et,Oe.width,Oe.height,Me.depth,0,Fe,Je,Oe.data)}else{st&&At&&n.texStorage2D(s.TEXTURE_2D,be,et,ht[0].width,ht[0].height);for(let se=0,pe=ht.length;se<pe;se++)Oe=ht[se],w.format!==di?Fe!==null?st?W&&n.compressedTexSubImage2D(s.TEXTURE_2D,se,0,0,Oe.width,Oe.height,Fe,Oe.data):n.compressedTexImage2D(s.TEXTURE_2D,se,et,Oe.width,Oe.height,0,Oe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):st?W&&n.texSubImage2D(s.TEXTURE_2D,se,0,0,Oe.width,Oe.height,Fe,Je,Oe.data):n.texImage2D(s.TEXTURE_2D,se,et,Oe.width,Oe.height,0,Fe,Je,Oe.data)}else if(w.isDataArrayTexture)if(st){if(At&&n.texStorage3D(s.TEXTURE_2D_ARRAY,be,et,Me.width,Me.height,Me.depth),W)if(w.layerUpdates.size>0){const se=Fm(Me.width,Me.height,w.format,w.type);for(const pe of w.layerUpdates){const Ne=Me.data.subarray(pe*se/Me.data.BYTES_PER_ELEMENT,(pe+1)*se/Me.data.BYTES_PER_ELEMENT);n.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,pe,Me.width,Me.height,1,Fe,Je,Ne)}w.clearLayerUpdates()}else n.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,Me.width,Me.height,Me.depth,Fe,Je,Me.data)}else n.texImage3D(s.TEXTURE_2D_ARRAY,0,et,Me.width,Me.height,Me.depth,0,Fe,Je,Me.data);else if(w.isData3DTexture)st?(At&&n.texStorage3D(s.TEXTURE_3D,be,et,Me.width,Me.height,Me.depth),W&&n.texSubImage3D(s.TEXTURE_3D,0,0,0,0,Me.width,Me.height,Me.depth,Fe,Je,Me.data)):n.texImage3D(s.TEXTURE_3D,0,et,Me.width,Me.height,Me.depth,0,Fe,Je,Me.data);else if(w.isFramebufferTexture){if(At)if(st)n.texStorage2D(s.TEXTURE_2D,be,et,Me.width,Me.height);else{let se=Me.width,pe=Me.height;for(let Ne=0;Ne<be;Ne++)n.texImage2D(s.TEXTURE_2D,Ne,et,se,pe,0,Fe,Je,null),se>>=1,pe>>=1}}else if(ht.length>0){if(st&&At){const se=ze(ht[0]);n.texStorage2D(s.TEXTURE_2D,be,et,se.width,se.height)}for(let se=0,pe=ht.length;se<pe;se++)Oe=ht[se],st?W&&n.texSubImage2D(s.TEXTURE_2D,se,0,0,Fe,Je,Oe):n.texImage2D(s.TEXTURE_2D,se,et,Fe,Je,Oe);w.generateMipmaps=!1}else if(st){if(At){const se=ze(Me);n.texStorage2D(s.TEXTURE_2D,be,et,se.width,se.height)}W&&n.texSubImage2D(s.TEXTURE_2D,0,0,0,Fe,Je,Me)}else n.texImage2D(s.TEXTURE_2D,0,et,Fe,Je,Me);g(w)&&v(me),Ge.__version=fe.version,w.onUpdate&&w.onUpdate(w)}L.__version=w.version}function ue(L,w,Q){if(w.image.length!==6)return;const me=De(L,w),_e=w.source;n.bindTexture(s.TEXTURE_CUBE_MAP,L.__webglTexture,s.TEXTURE0+Q);const fe=r.get(_e);if(_e.version!==fe.__version||me===!0){n.activeTexture(s.TEXTURE0+Q);const Ge=yt.getPrimaries(yt.workingColorSpace),Ce=w.colorSpace===_r?null:yt.getPrimaries(w.colorSpace),Ue=w.colorSpace===_r||Ge===Ce?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,w.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,w.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ue);const ft=w.isCompressedTexture||w.image[0].isCompressedTexture,Me=w.image[0]&&w.image[0].isDataTexture,Fe=[];for(let pe=0;pe<6;pe++)!ft&&!Me?Fe[pe]=T(w.image[pe],!0,a.maxCubemapSize):Fe[pe]=Me?w.image[pe].image:w.image[pe],Fe[pe]=Et(w,Fe[pe]);const Je=Fe[0],et=c.convert(w.format,w.colorSpace),Oe=c.convert(w.type),ht=N(w.internalFormat,et,Oe,w.colorSpace),st=w.isVideoTexture!==!0,At=fe.__version===void 0||me===!0,W=_e.dataReady;let be=j(w,Je);ie(s.TEXTURE_CUBE_MAP,w);let se;if(ft){st&&At&&n.texStorage2D(s.TEXTURE_CUBE_MAP,be,ht,Je.width,Je.height);for(let pe=0;pe<6;pe++){se=Fe[pe].mipmaps;for(let Ne=0;Ne<se.length;Ne++){const Pe=se[Ne];w.format!==di?et!==null?st?W&&n.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ne,0,0,Pe.width,Pe.height,et,Pe.data):n.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ne,ht,Pe.width,Pe.height,0,Pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):st?W&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ne,0,0,Pe.width,Pe.height,et,Oe,Pe.data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ne,ht,Pe.width,Pe.height,0,et,Oe,Pe.data)}}}else{if(se=w.mipmaps,st&&At){se.length>0&&be++;const pe=ze(Fe[0]);n.texStorage2D(s.TEXTURE_CUBE_MAP,be,ht,pe.width,pe.height)}for(let pe=0;pe<6;pe++)if(Me){st?W&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,Fe[pe].width,Fe[pe].height,et,Oe,Fe[pe].data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,ht,Fe[pe].width,Fe[pe].height,0,et,Oe,Fe[pe].data);for(let Ne=0;Ne<se.length;Ne++){const ot=se[Ne].image[pe].image;st?W&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ne+1,0,0,ot.width,ot.height,et,Oe,ot.data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ne+1,ht,ot.width,ot.height,0,et,Oe,ot.data)}}else{st?W&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,et,Oe,Fe[pe]):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,ht,et,Oe,Fe[pe]);for(let Ne=0;Ne<se.length;Ne++){const Pe=se[Ne];st?W&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ne+1,0,0,et,Oe,Pe.image[pe]):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ne+1,ht,et,Oe,Pe.image[pe])}}}g(w)&&v(s.TEXTURE_CUBE_MAP),fe.__version=_e.version,w.onUpdate&&w.onUpdate(w)}L.__version=w.version}function Se(L,w,Q,me,_e,fe){const Ge=c.convert(Q.format,Q.colorSpace),Ce=c.convert(Q.type),Ue=N(Q.internalFormat,Ge,Ce,Q.colorSpace),ft=r.get(w),Me=r.get(Q);if(Me.__renderTarget=w,!ft.__hasExternalTextures){const Fe=Math.max(1,w.width>>fe),Je=Math.max(1,w.height>>fe);_e===s.TEXTURE_3D||_e===s.TEXTURE_2D_ARRAY?n.texImage3D(_e,fe,Ue,Fe,Je,w.depth,0,Ge,Ce,null):n.texImage2D(_e,fe,Ue,Fe,Je,0,Ge,Ce,null)}n.bindFramebuffer(s.FRAMEBUFFER,L),at(w)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,me,_e,Me.__webglTexture,0,rt(w)):(_e===s.TEXTURE_2D||_e>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&_e<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,me,_e,Me.__webglTexture,fe),n.bindFramebuffer(s.FRAMEBUFFER,null)}function ve(L,w,Q){if(s.bindRenderbuffer(s.RENDERBUFFER,L),w.depthBuffer){const me=w.depthTexture,_e=me&&me.isDepthTexture?me.type:null,fe=A(w.stencilBuffer,_e),Ge=w.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ce=rt(w);at(w)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ce,fe,w.width,w.height):Q?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ce,fe,w.width,w.height):s.renderbufferStorage(s.RENDERBUFFER,fe,w.width,w.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Ge,s.RENDERBUFFER,L)}else{const me=w.textures;for(let _e=0;_e<me.length;_e++){const fe=me[_e],Ge=c.convert(fe.format,fe.colorSpace),Ce=c.convert(fe.type),Ue=N(fe.internalFormat,Ge,Ce,fe.colorSpace),ft=rt(w);Q&&at(w)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,ft,Ue,w.width,w.height):at(w)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ft,Ue,w.width,w.height):s.renderbufferStorage(s.RENDERBUFFER,Ue,w.width,w.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Ae(L,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(s.FRAMEBUFFER,L),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const me=r.get(w.depthTexture);me.__renderTarget=w,(!me.__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),he(w.depthTexture,0);const _e=me.__webglTexture,fe=rt(w);if(w.depthTexture.format===zs)at(w)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,_e,0,fe):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,_e,0);else if(w.depthTexture.format===js)at(w)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,_e,0,fe):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,_e,0);else throw new Error("Unknown depthTexture format")}function Le(L){const w=r.get(L),Q=L.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==L.depthTexture){const me=L.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),me){const _e=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,me.removeEventListener("dispose",_e)};me.addEventListener("dispose",_e),w.__depthDisposeCallback=_e}w.__boundDepthTexture=me}if(L.depthTexture&&!w.__autoAllocateDepthBuffer){if(Q)throw new Error("target.depthTexture not supported in Cube render targets");Ae(w.__webglFramebuffer,L)}else if(Q){w.__webglDepthbuffer=[];for(let me=0;me<6;me++)if(n.bindFramebuffer(s.FRAMEBUFFER,w.__webglFramebuffer[me]),w.__webglDepthbuffer[me]===void 0)w.__webglDepthbuffer[me]=s.createRenderbuffer(),ve(w.__webglDepthbuffer[me],L,!1);else{const _e=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,fe=w.__webglDepthbuffer[me];s.bindRenderbuffer(s.RENDERBUFFER,fe),s.framebufferRenderbuffer(s.FRAMEBUFFER,_e,s.RENDERBUFFER,fe)}}else if(n.bindFramebuffer(s.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=s.createRenderbuffer(),ve(w.__webglDepthbuffer,L,!1);else{const me=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,_e=w.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,_e),s.framebufferRenderbuffer(s.FRAMEBUFFER,me,s.RENDERBUFFER,_e)}n.bindFramebuffer(s.FRAMEBUFFER,null)}function Ke(L,w,Q){const me=r.get(L);w!==void 0&&Se(me.__webglFramebuffer,L,L.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),Q!==void 0&&Le(L)}function wt(L){const w=L.texture,Q=r.get(L),me=r.get(w);L.addEventListener("dispose",U);const _e=L.textures,fe=L.isWebGLCubeRenderTarget===!0,Ge=_e.length>1;if(Ge||(me.__webglTexture===void 0&&(me.__webglTexture=s.createTexture()),me.__version=w.version,u.memory.textures++),fe){Q.__webglFramebuffer=[];for(let Ce=0;Ce<6;Ce++)if(w.mipmaps&&w.mipmaps.length>0){Q.__webglFramebuffer[Ce]=[];for(let Ue=0;Ue<w.mipmaps.length;Ue++)Q.__webglFramebuffer[Ce][Ue]=s.createFramebuffer()}else Q.__webglFramebuffer[Ce]=s.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){Q.__webglFramebuffer=[];for(let Ce=0;Ce<w.mipmaps.length;Ce++)Q.__webglFramebuffer[Ce]=s.createFramebuffer()}else Q.__webglFramebuffer=s.createFramebuffer();if(Ge)for(let Ce=0,Ue=_e.length;Ce<Ue;Ce++){const ft=r.get(_e[Ce]);ft.__webglTexture===void 0&&(ft.__webglTexture=s.createTexture(),u.memory.textures++)}if(L.samples>0&&at(L)===!1){Q.__webglMultisampledFramebuffer=s.createFramebuffer(),Q.__webglColorRenderbuffer=[],n.bindFramebuffer(s.FRAMEBUFFER,Q.__webglMultisampledFramebuffer);for(let Ce=0;Ce<_e.length;Ce++){const Ue=_e[Ce];Q.__webglColorRenderbuffer[Ce]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,Q.__webglColorRenderbuffer[Ce]);const ft=c.convert(Ue.format,Ue.colorSpace),Me=c.convert(Ue.type),Fe=N(Ue.internalFormat,ft,Me,Ue.colorSpace,L.isXRRenderTarget===!0),Je=rt(L);s.renderbufferStorageMultisample(s.RENDERBUFFER,Je,Fe,L.width,L.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ce,s.RENDERBUFFER,Q.__webglColorRenderbuffer[Ce])}s.bindRenderbuffer(s.RENDERBUFFER,null),L.depthBuffer&&(Q.__webglDepthRenderbuffer=s.createRenderbuffer(),ve(Q.__webglDepthRenderbuffer,L,!0)),n.bindFramebuffer(s.FRAMEBUFFER,null)}}if(fe){n.bindTexture(s.TEXTURE_CUBE_MAP,me.__webglTexture),ie(s.TEXTURE_CUBE_MAP,w);for(let Ce=0;Ce<6;Ce++)if(w.mipmaps&&w.mipmaps.length>0)for(let Ue=0;Ue<w.mipmaps.length;Ue++)Se(Q.__webglFramebuffer[Ce][Ue],L,w,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,Ue);else Se(Q.__webglFramebuffer[Ce],L,w,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,0);g(w)&&v(s.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Ge){for(let Ce=0,Ue=_e.length;Ce<Ue;Ce++){const ft=_e[Ce],Me=r.get(ft);n.bindTexture(s.TEXTURE_2D,Me.__webglTexture),ie(s.TEXTURE_2D,ft),Se(Q.__webglFramebuffer,L,ft,s.COLOR_ATTACHMENT0+Ce,s.TEXTURE_2D,0),g(ft)&&v(s.TEXTURE_2D)}n.unbindTexture()}else{let Ce=s.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(Ce=L.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),n.bindTexture(Ce,me.__webglTexture),ie(Ce,w),w.mipmaps&&w.mipmaps.length>0)for(let Ue=0;Ue<w.mipmaps.length;Ue++)Se(Q.__webglFramebuffer[Ue],L,w,s.COLOR_ATTACHMENT0,Ce,Ue);else Se(Q.__webglFramebuffer,L,w,s.COLOR_ATTACHMENT0,Ce,0);g(w)&&v(Ce),n.unbindTexture()}L.depthBuffer&&Le(L)}function dt(L){const w=L.textures;for(let Q=0,me=w.length;Q<me;Q++){const _e=w[Q];if(g(_e)){const fe=D(L),Ge=r.get(_e).__webglTexture;n.bindTexture(fe,Ge),v(fe),n.unbindTexture()}}}const qe=[],V=[];function Bt(L){if(L.samples>0){if(at(L)===!1){const w=L.textures,Q=L.width,me=L.height;let _e=s.COLOR_BUFFER_BIT;const fe=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ge=r.get(L),Ce=w.length>1;if(Ce)for(let Ue=0;Ue<w.length;Ue++)n.bindFramebuffer(s.FRAMEBUFFER,Ge.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ue,s.RENDERBUFFER,null),n.bindFramebuffer(s.FRAMEBUFFER,Ge.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ue,s.TEXTURE_2D,null,0);n.bindFramebuffer(s.READ_FRAMEBUFFER,Ge.__webglMultisampledFramebuffer),n.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ge.__webglFramebuffer);for(let Ue=0;Ue<w.length;Ue++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(_e|=s.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(_e|=s.STENCIL_BUFFER_BIT)),Ce){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Ge.__webglColorRenderbuffer[Ue]);const ft=r.get(w[Ue]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,ft,0)}s.blitFramebuffer(0,0,Q,me,0,0,Q,me,_e,s.NEAREST),p===!0&&(qe.length=0,V.length=0,qe.push(s.COLOR_ATTACHMENT0+Ue),L.depthBuffer&&L.resolveDepthBuffer===!1&&(qe.push(fe),V.push(fe),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,V)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,qe))}if(n.bindFramebuffer(s.READ_FRAMEBUFFER,null),n.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Ce)for(let Ue=0;Ue<w.length;Ue++){n.bindFramebuffer(s.FRAMEBUFFER,Ge.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ue,s.RENDERBUFFER,Ge.__webglColorRenderbuffer[Ue]);const ft=r.get(w[Ue]).__webglTexture;n.bindFramebuffer(s.FRAMEBUFFER,Ge.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ue,s.TEXTURE_2D,ft,0)}n.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ge.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&p){const w=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[w])}}}function rt(L){return Math.min(a.maxSamples,L.samples)}function at(L){const w=r.get(L);return L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function $e(L){const w=u.render.frame;_.get(L)!==w&&(_.set(L,w),L.update())}function Et(L,w){const Q=L.colorSpace,me=L.format,_e=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||Q!==Ys&&Q!==_r&&(yt.getTransfer(Q)===Dt?(me!==di||_e!==Gi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Q)),w}function ze(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(m.width=L.naturalWidth||L.width,m.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(m.width=L.displayWidth,m.height=L.displayHeight):(m.width=L.width,m.height=L.height),m}this.allocateTextureUnit=J,this.resetTextureUnits=oe,this.setTexture2D=he,this.setTexture2DArray=ae,this.setTexture3D=ce,this.setTextureCube=H,this.rebindTextures=Ke,this.setupRenderTarget=wt,this.updateRenderTargetMipmap=dt,this.updateMultisampleRenderTarget=Bt,this.setupDepthRenderbuffer=Le,this.setupFrameBufferTexture=Se,this.useMultisampledRTT=at}function EE(s,e){function n(r,a=_r){let c;const u=yt.getTransfer(a);if(r===Gi)return s.UNSIGNED_BYTE;if(r===Zd)return s.UNSIGNED_SHORT_4_4_4_4;if(r===Qd)return s.UNSIGNED_SHORT_5_5_5_1;if(r===tg)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===Jm)return s.BYTE;if(r===eg)return s.SHORT;if(r===zo)return s.UNSIGNED_SHORT;if(r===Kd)return s.INT;if(r===$r)return s.UNSIGNED_INT;if(r===Bi)return s.FLOAT;if(r===Bo)return s.HALF_FLOAT;if(r===ng)return s.ALPHA;if(r===ig)return s.RGB;if(r===di)return s.RGBA;if(r===rg)return s.LUMINANCE;if(r===sg)return s.LUMINANCE_ALPHA;if(r===zs)return s.DEPTH_COMPONENT;if(r===js)return s.DEPTH_STENCIL;if(r===og)return s.RED;if(r===Jd)return s.RED_INTEGER;if(r===ag)return s.RG;if(r===ef)return s.RG_INTEGER;if(r===tf)return s.RGBA_INTEGER;if(r===wl||r===Al||r===Cl||r===bl)if(u===Dt)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(r===wl)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Al)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Cl)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===bl)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(r===wl)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Al)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Cl)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===bl)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===_d||r===xd||r===yd||r===Sd)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(r===_d)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===xd)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===yd)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Sd)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Md||r===Ed||r===Td)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(r===Md||r===Ed)return u===Dt?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(r===Td)return u===Dt?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===wd||r===Ad||r===Cd||r===bd||r===Rd||r===Pd||r===Dd||r===Nd||r===Ld||r===Id||r===Ud||r===kd||r===Fd||r===Od)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(r===wd)return u===Dt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Ad)return u===Dt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Cd)return u===Dt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===bd)return u===Dt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Rd)return u===Dt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Pd)return u===Dt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Dd)return u===Dt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Nd)return u===Dt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Ld)return u===Dt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Id)return u===Dt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Ud)return u===Dt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===kd)return u===Dt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Fd)return u===Dt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Od)return u===Dt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Rl||r===zd||r===Bd)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(r===Rl)return u===Dt?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===zd)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Bd)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===lg||r===Hd||r===Vd||r===Gd)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(r===Rl)return c.COMPRESSED_RED_RGTC1_EXT;if(r===Hd)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Vd)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Gd)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Ws?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:n}}class TE extends Zn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Fs extends yn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const wE={type:"move"};class td{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Fs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Fs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new q,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new q),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Fs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new q,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new q),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const r of e.hand.values())this._getHandJoint(n,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,r){let a=null,c=null,u=null;const f=this._targetRay,p=this._grip,m=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(m&&e.hand){u=!0;for(const T of e.hand.values()){const g=n.getJointPose(T,r),v=this._getHandJoint(m,T);g!==null&&(v.matrix.fromArray(g.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,v.jointRadius=g.radius),v.visible=g!==null}const _=m.joints["index-finger-tip"],x=m.joints["thumb-tip"],y=_.position.distanceTo(x.position),S=.02,E=.005;m.inputState.pinching&&y>S+E?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!m.inputState.pinching&&y<=S-E&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else p!==null&&e.gripSpace&&(c=n.getPose(e.gripSpace,r),c!==null&&(p.matrix.fromArray(c.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,c.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(c.linearVelocity)):p.hasLinearVelocity=!1,c.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(c.angularVelocity)):p.hasAngularVelocity=!1));f!==null&&(a=n.getPose(e.targetRaySpace,r),a===null&&c!==null&&(a=c),a!==null&&(f.matrix.fromArray(a.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,a.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(a.linearVelocity)):f.hasLinearVelocity=!1,a.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(a.angularVelocity)):f.hasAngularVelocity=!1,this.dispatchEvent(wE)))}return f!==null&&(f.visible=a!==null),p!==null&&(p.visible=c!==null),m!==null&&(m.visible=u!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const r=new Fs;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[n.jointName]=r,e.add(r)}return e.joints[n.jointName]}}const AE=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,CE=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class bE{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,r){if(this.texture===null){const a=new Ln,c=e.properties.get(a);c.__webglTexture=n.texture,(n.depthNear!=r.depthNear||n.depthFar!=r.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=a}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,r=new Mr({vertexShader:AE,fragmentShader:CE,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Jn(new Hl(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class RE extends qs{constructor(e,n){super();const r=this;let a=null,c=1,u=null,f="local-floor",p=1,m=null,_=null,x=null,y=null,S=null,E=null;const T=new bE,g=n.getContextAttributes();let v=null,D=null;const N=[],A=[],j=new Rt;let k=null;const U=new Zn;U.viewport=new Wt;const B=new Zn;B.viewport=new Wt;const P=[U,B],C=new TE;let z=null,oe=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let ue=N[Z];return ue===void 0&&(ue=new td,N[Z]=ue),ue.getTargetRaySpace()},this.getControllerGrip=function(Z){let ue=N[Z];return ue===void 0&&(ue=new td,N[Z]=ue),ue.getGripSpace()},this.getHand=function(Z){let ue=N[Z];return ue===void 0&&(ue=new td,N[Z]=ue),ue.getHandSpace()};function J(Z){const ue=A.indexOf(Z.inputSource);if(ue===-1)return;const Se=N[ue];Se!==void 0&&(Se.update(Z.inputSource,Z.frame,m||u),Se.dispatchEvent({type:Z.type,data:Z.inputSource}))}function de(){a.removeEventListener("select",J),a.removeEventListener("selectstart",J),a.removeEventListener("selectend",J),a.removeEventListener("squeeze",J),a.removeEventListener("squeezestart",J),a.removeEventListener("squeezeend",J),a.removeEventListener("end",de),a.removeEventListener("inputsourceschange",he);for(let Z=0;Z<N.length;Z++){const ue=A[Z];ue!==null&&(A[Z]=null,N[Z].disconnect(ue))}z=null,oe=null,T.reset(),e.setRenderTarget(v),S=null,y=null,x=null,a=null,D=null,De.stop(),r.isPresenting=!1,e.setPixelRatio(k),e.setSize(j.width,j.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){c=Z,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){f=Z,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||u},this.setReferenceSpace=function(Z){m=Z},this.getBaseLayer=function(){return y!==null?y:S},this.getBinding=function(){return x},this.getFrame=function(){return E},this.getSession=function(){return a},this.setSession=async function(Z){if(a=Z,a!==null){if(v=e.getRenderTarget(),a.addEventListener("select",J),a.addEventListener("selectstart",J),a.addEventListener("selectend",J),a.addEventListener("squeeze",J),a.addEventListener("squeezestart",J),a.addEventListener("squeezeend",J),a.addEventListener("end",de),a.addEventListener("inputsourceschange",he),g.xrCompatible!==!0&&await n.makeXRCompatible(),k=e.getPixelRatio(),e.getSize(j),a.renderState.layers===void 0){const ue={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:c};S=new XRWebGLLayer(a,n,ue),a.updateRenderState({baseLayer:S}),e.setPixelRatio(1),e.setSize(S.framebufferWidth,S.framebufferHeight,!1),D=new Kr(S.framebufferWidth,S.framebufferHeight,{format:di,type:Gi,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}else{let ue=null,Se=null,ve=null;g.depth&&(ve=g.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,ue=g.stencil?js:zs,Se=g.stencil?Ws:$r);const Ae={colorFormat:n.RGBA8,depthFormat:ve,scaleFactor:c};x=new XRWebGLBinding(a,n),y=x.createProjectionLayer(Ae),a.updateRenderState({layers:[y]}),e.setPixelRatio(1),e.setSize(y.textureWidth,y.textureHeight,!1),D=new Kr(y.textureWidth,y.textureHeight,{format:di,type:Gi,depthTexture:new Mg(y.textureWidth,y.textureHeight,Se,void 0,void 0,void 0,void 0,void 0,void 0,ue),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:y.ignoreDepthValues===!1})}D.isXRRenderTarget=!0,this.setFoveation(p),m=null,u=await a.requestReferenceSpace(f),De.setContext(a),De.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return T.getDepthTexture()};function he(Z){for(let ue=0;ue<Z.removed.length;ue++){const Se=Z.removed[ue],ve=A.indexOf(Se);ve>=0&&(A[ve]=null,N[ve].disconnect(Se))}for(let ue=0;ue<Z.added.length;ue++){const Se=Z.added[ue];let ve=A.indexOf(Se);if(ve===-1){for(let Le=0;Le<N.length;Le++)if(Le>=A.length){A.push(Se),ve=Le;break}else if(A[Le]===null){A[Le]=Se,ve=Le;break}if(ve===-1)break}const Ae=N[ve];Ae&&Ae.connect(Se)}}const ae=new q,ce=new q;function H(Z,ue,Se){ae.setFromMatrixPosition(ue.matrixWorld),ce.setFromMatrixPosition(Se.matrixWorld);const ve=ae.distanceTo(ce),Ae=ue.projectionMatrix.elements,Le=Se.projectionMatrix.elements,Ke=Ae[14]/(Ae[10]-1),wt=Ae[14]/(Ae[10]+1),dt=(Ae[9]+1)/Ae[5],qe=(Ae[9]-1)/Ae[5],V=(Ae[8]-1)/Ae[0],Bt=(Le[8]+1)/Le[0],rt=Ke*V,at=Ke*Bt,$e=ve/(-V+Bt),Et=$e*-V;if(ue.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(Et),Z.translateZ($e),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),Ae[10]===-1)Z.projectionMatrix.copy(ue.projectionMatrix),Z.projectionMatrixInverse.copy(ue.projectionMatrixInverse);else{const ze=Ke+$e,L=wt+$e,w=rt-Et,Q=at+(ve-Et),me=dt*wt/L*ze,_e=qe*wt/L*ze;Z.projectionMatrix.makePerspective(w,Q,me,_e,ze,L),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function le(Z,ue){ue===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(ue.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(a===null)return;let ue=Z.near,Se=Z.far;T.texture!==null&&(T.depthNear>0&&(ue=T.depthNear),T.depthFar>0&&(Se=T.depthFar)),C.near=B.near=U.near=ue,C.far=B.far=U.far=Se,(z!==C.near||oe!==C.far)&&(a.updateRenderState({depthNear:C.near,depthFar:C.far}),z=C.near,oe=C.far),U.layers.mask=Z.layers.mask|2,B.layers.mask=Z.layers.mask|4,C.layers.mask=U.layers.mask|B.layers.mask;const ve=Z.parent,Ae=C.cameras;le(C,ve);for(let Le=0;Le<Ae.length;Le++)le(Ae[Le],ve);Ae.length===2?H(C,U,B):C.projectionMatrix.copy(U.projectionMatrix),re(Z,C,ve)};function re(Z,ue,Se){Se===null?Z.matrix.copy(ue.matrixWorld):(Z.matrix.copy(Se.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(ue.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(ue.projectionMatrix),Z.projectionMatrixInverse.copy(ue.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=Wd*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return C},this.getFoveation=function(){if(!(y===null&&S===null))return p},this.setFoveation=function(Z){p=Z,y!==null&&(y.fixedFoveation=Z),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=Z)},this.hasDepthSensing=function(){return T.texture!==null},this.getDepthSensingMesh=function(){return T.getMesh(C)};let F=null;function ie(Z,ue){if(_=ue.getViewerPose(m||u),E=ue,_!==null){const Se=_.views;S!==null&&(e.setRenderTargetFramebuffer(D,S.framebuffer),e.setRenderTarget(D));let ve=!1;Se.length!==C.cameras.length&&(C.cameras.length=0,ve=!0);for(let Le=0;Le<Se.length;Le++){const Ke=Se[Le];let wt=null;if(S!==null)wt=S.getViewport(Ke);else{const qe=x.getViewSubImage(y,Ke);wt=qe.viewport,Le===0&&(e.setRenderTargetTextures(D,qe.colorTexture,y.ignoreDepthValues?void 0:qe.depthStencilTexture),e.setRenderTarget(D))}let dt=P[Le];dt===void 0&&(dt=new Zn,dt.layers.enable(Le),dt.viewport=new Wt,P[Le]=dt),dt.matrix.fromArray(Ke.transform.matrix),dt.matrix.decompose(dt.position,dt.quaternion,dt.scale),dt.projectionMatrix.fromArray(Ke.projectionMatrix),dt.projectionMatrixInverse.copy(dt.projectionMatrix).invert(),dt.viewport.set(wt.x,wt.y,wt.width,wt.height),Le===0&&(C.matrix.copy(dt.matrix),C.matrix.decompose(C.position,C.quaternion,C.scale)),ve===!0&&C.cameras.push(dt)}const Ae=a.enabledFeatures;if(Ae&&Ae.includes("depth-sensing")){const Le=x.getDepthInformation(Se[0]);Le&&Le.isValid&&Le.texture&&T.init(e,Le,a.renderState)}}for(let Se=0;Se<N.length;Se++){const ve=A[Se],Ae=N[Se];ve!==null&&Ae!==void 0&&Ae.update(ve,ue,m||u)}F&&F(Z,ue),ue.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:ue}),E=null}const De=new Sg;De.setAnimationLoop(ie),this.setAnimationLoop=function(Z){F=Z},this.dispose=function(){}}}const Vr=new Wi,PE=new Vt;function DE(s,e){function n(g,v){g.matrixAutoUpdate===!0&&g.updateMatrix(),v.value.copy(g.matrix)}function r(g,v){v.color.getRGB(g.fogColor.value,vg(s)),v.isFog?(g.fogNear.value=v.near,g.fogFar.value=v.far):v.isFogExp2&&(g.fogDensity.value=v.density)}function a(g,v,D,N,A){v.isMeshBasicMaterial||v.isMeshLambertMaterial?c(g,v):v.isMeshToonMaterial?(c(g,v),x(g,v)):v.isMeshPhongMaterial?(c(g,v),_(g,v)):v.isMeshStandardMaterial?(c(g,v),y(g,v),v.isMeshPhysicalMaterial&&S(g,v,A)):v.isMeshMatcapMaterial?(c(g,v),E(g,v)):v.isMeshDepthMaterial?c(g,v):v.isMeshDistanceMaterial?(c(g,v),T(g,v)):v.isMeshNormalMaterial?c(g,v):v.isLineBasicMaterial?(u(g,v),v.isLineDashedMaterial&&f(g,v)):v.isPointsMaterial?p(g,v,D,N):v.isSpriteMaterial?m(g,v):v.isShadowMaterial?(g.color.value.copy(v.color),g.opacity.value=v.opacity):v.isShaderMaterial&&(v.uniformsNeedUpdate=!1)}function c(g,v){g.opacity.value=v.opacity,v.color&&g.diffuse.value.copy(v.color),v.emissive&&g.emissive.value.copy(v.emissive).multiplyScalar(v.emissiveIntensity),v.map&&(g.map.value=v.map,n(v.map,g.mapTransform)),v.alphaMap&&(g.alphaMap.value=v.alphaMap,n(v.alphaMap,g.alphaMapTransform)),v.bumpMap&&(g.bumpMap.value=v.bumpMap,n(v.bumpMap,g.bumpMapTransform),g.bumpScale.value=v.bumpScale,v.side===Nn&&(g.bumpScale.value*=-1)),v.normalMap&&(g.normalMap.value=v.normalMap,n(v.normalMap,g.normalMapTransform),g.normalScale.value.copy(v.normalScale),v.side===Nn&&g.normalScale.value.negate()),v.displacementMap&&(g.displacementMap.value=v.displacementMap,n(v.displacementMap,g.displacementMapTransform),g.displacementScale.value=v.displacementScale,g.displacementBias.value=v.displacementBias),v.emissiveMap&&(g.emissiveMap.value=v.emissiveMap,n(v.emissiveMap,g.emissiveMapTransform)),v.specularMap&&(g.specularMap.value=v.specularMap,n(v.specularMap,g.specularMapTransform)),v.alphaTest>0&&(g.alphaTest.value=v.alphaTest);const D=e.get(v),N=D.envMap,A=D.envMapRotation;N&&(g.envMap.value=N,Vr.copy(A),Vr.x*=-1,Vr.y*=-1,Vr.z*=-1,N.isCubeTexture&&N.isRenderTargetTexture===!1&&(Vr.y*=-1,Vr.z*=-1),g.envMapRotation.value.setFromMatrix4(PE.makeRotationFromEuler(Vr)),g.flipEnvMap.value=N.isCubeTexture&&N.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=v.reflectivity,g.ior.value=v.ior,g.refractionRatio.value=v.refractionRatio),v.lightMap&&(g.lightMap.value=v.lightMap,g.lightMapIntensity.value=v.lightMapIntensity,n(v.lightMap,g.lightMapTransform)),v.aoMap&&(g.aoMap.value=v.aoMap,g.aoMapIntensity.value=v.aoMapIntensity,n(v.aoMap,g.aoMapTransform))}function u(g,v){g.diffuse.value.copy(v.color),g.opacity.value=v.opacity,v.map&&(g.map.value=v.map,n(v.map,g.mapTransform))}function f(g,v){g.dashSize.value=v.dashSize,g.totalSize.value=v.dashSize+v.gapSize,g.scale.value=v.scale}function p(g,v,D,N){g.diffuse.value.copy(v.color),g.opacity.value=v.opacity,g.size.value=v.size*D,g.scale.value=N*.5,v.map&&(g.map.value=v.map,n(v.map,g.uvTransform)),v.alphaMap&&(g.alphaMap.value=v.alphaMap,n(v.alphaMap,g.alphaMapTransform)),v.alphaTest>0&&(g.alphaTest.value=v.alphaTest)}function m(g,v){g.diffuse.value.copy(v.color),g.opacity.value=v.opacity,g.rotation.value=v.rotation,v.map&&(g.map.value=v.map,n(v.map,g.mapTransform)),v.alphaMap&&(g.alphaMap.value=v.alphaMap,n(v.alphaMap,g.alphaMapTransform)),v.alphaTest>0&&(g.alphaTest.value=v.alphaTest)}function _(g,v){g.specular.value.copy(v.specular),g.shininess.value=Math.max(v.shininess,1e-4)}function x(g,v){v.gradientMap&&(g.gradientMap.value=v.gradientMap)}function y(g,v){g.metalness.value=v.metalness,v.metalnessMap&&(g.metalnessMap.value=v.metalnessMap,n(v.metalnessMap,g.metalnessMapTransform)),g.roughness.value=v.roughness,v.roughnessMap&&(g.roughnessMap.value=v.roughnessMap,n(v.roughnessMap,g.roughnessMapTransform)),v.envMap&&(g.envMapIntensity.value=v.envMapIntensity)}function S(g,v,D){g.ior.value=v.ior,v.sheen>0&&(g.sheenColor.value.copy(v.sheenColor).multiplyScalar(v.sheen),g.sheenRoughness.value=v.sheenRoughness,v.sheenColorMap&&(g.sheenColorMap.value=v.sheenColorMap,n(v.sheenColorMap,g.sheenColorMapTransform)),v.sheenRoughnessMap&&(g.sheenRoughnessMap.value=v.sheenRoughnessMap,n(v.sheenRoughnessMap,g.sheenRoughnessMapTransform))),v.clearcoat>0&&(g.clearcoat.value=v.clearcoat,g.clearcoatRoughness.value=v.clearcoatRoughness,v.clearcoatMap&&(g.clearcoatMap.value=v.clearcoatMap,n(v.clearcoatMap,g.clearcoatMapTransform)),v.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=v.clearcoatRoughnessMap,n(v.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),v.clearcoatNormalMap&&(g.clearcoatNormalMap.value=v.clearcoatNormalMap,n(v.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(v.clearcoatNormalScale),v.side===Nn&&g.clearcoatNormalScale.value.negate())),v.dispersion>0&&(g.dispersion.value=v.dispersion),v.iridescence>0&&(g.iridescence.value=v.iridescence,g.iridescenceIOR.value=v.iridescenceIOR,g.iridescenceThicknessMinimum.value=v.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=v.iridescenceThicknessRange[1],v.iridescenceMap&&(g.iridescenceMap.value=v.iridescenceMap,n(v.iridescenceMap,g.iridescenceMapTransform)),v.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=v.iridescenceThicknessMap,n(v.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),v.transmission>0&&(g.transmission.value=v.transmission,g.transmissionSamplerMap.value=D.texture,g.transmissionSamplerSize.value.set(D.width,D.height),v.transmissionMap&&(g.transmissionMap.value=v.transmissionMap,n(v.transmissionMap,g.transmissionMapTransform)),g.thickness.value=v.thickness,v.thicknessMap&&(g.thicknessMap.value=v.thicknessMap,n(v.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=v.attenuationDistance,g.attenuationColor.value.copy(v.attenuationColor)),v.anisotropy>0&&(g.anisotropyVector.value.set(v.anisotropy*Math.cos(v.anisotropyRotation),v.anisotropy*Math.sin(v.anisotropyRotation)),v.anisotropyMap&&(g.anisotropyMap.value=v.anisotropyMap,n(v.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=v.specularIntensity,g.specularColor.value.copy(v.specularColor),v.specularColorMap&&(g.specularColorMap.value=v.specularColorMap,n(v.specularColorMap,g.specularColorMapTransform)),v.specularIntensityMap&&(g.specularIntensityMap.value=v.specularIntensityMap,n(v.specularIntensityMap,g.specularIntensityMapTransform))}function E(g,v){v.matcap&&(g.matcap.value=v.matcap)}function T(g,v){const D=e.get(v).light;g.referencePosition.value.setFromMatrixPosition(D.matrixWorld),g.nearDistance.value=D.shadow.camera.near,g.farDistance.value=D.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:a}}function NE(s,e,n,r){let a={},c={},u=[];const f=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function p(D,N){const A=N.program;r.uniformBlockBinding(D,A)}function m(D,N){let A=a[D.id];A===void 0&&(E(D),A=_(D),a[D.id]=A,D.addEventListener("dispose",g));const j=N.program;r.updateUBOMapping(D,j);const k=e.render.frame;c[D.id]!==k&&(y(D),c[D.id]=k)}function _(D){const N=x();D.__bindingPointIndex=N;const A=s.createBuffer(),j=D.__size,k=D.usage;return s.bindBuffer(s.UNIFORM_BUFFER,A),s.bufferData(s.UNIFORM_BUFFER,j,k),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,N,A),A}function x(){for(let D=0;D<f;D++)if(u.indexOf(D)===-1)return u.push(D),D;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function y(D){const N=a[D.id],A=D.uniforms,j=D.__cache;s.bindBuffer(s.UNIFORM_BUFFER,N);for(let k=0,U=A.length;k<U;k++){const B=Array.isArray(A[k])?A[k]:[A[k]];for(let P=0,C=B.length;P<C;P++){const z=B[P];if(S(z,k,P,j)===!0){const oe=z.__offset,J=Array.isArray(z.value)?z.value:[z.value];let de=0;for(let he=0;he<J.length;he++){const ae=J[he],ce=T(ae);typeof ae=="number"||typeof ae=="boolean"?(z.__data[0]=ae,s.bufferSubData(s.UNIFORM_BUFFER,oe+de,z.__data)):ae.isMatrix3?(z.__data[0]=ae.elements[0],z.__data[1]=ae.elements[1],z.__data[2]=ae.elements[2],z.__data[3]=0,z.__data[4]=ae.elements[3],z.__data[5]=ae.elements[4],z.__data[6]=ae.elements[5],z.__data[7]=0,z.__data[8]=ae.elements[6],z.__data[9]=ae.elements[7],z.__data[10]=ae.elements[8],z.__data[11]=0):(ae.toArray(z.__data,de),de+=ce.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,oe,z.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function S(D,N,A,j){const k=D.value,U=N+"_"+A;if(j[U]===void 0)return typeof k=="number"||typeof k=="boolean"?j[U]=k:j[U]=k.clone(),!0;{const B=j[U];if(typeof k=="number"||typeof k=="boolean"){if(B!==k)return j[U]=k,!0}else if(B.equals(k)===!1)return B.copy(k),!0}return!1}function E(D){const N=D.uniforms;let A=0;const j=16;for(let U=0,B=N.length;U<B;U++){const P=Array.isArray(N[U])?N[U]:[N[U]];for(let C=0,z=P.length;C<z;C++){const oe=P[C],J=Array.isArray(oe.value)?oe.value:[oe.value];for(let de=0,he=J.length;de<he;de++){const ae=J[de],ce=T(ae),H=A%j,le=H%ce.boundary,re=H+le;A+=le,re!==0&&j-re<ce.storage&&(A+=j-re),oe.__data=new Float32Array(ce.storage/Float32Array.BYTES_PER_ELEMENT),oe.__offset=A,A+=ce.storage}}}const k=A%j;return k>0&&(A+=j-k),D.__size=A,D.__cache={},this}function T(D){const N={boundary:0,storage:0};return typeof D=="number"||typeof D=="boolean"?(N.boundary=4,N.storage=4):D.isVector2?(N.boundary=8,N.storage=8):D.isVector3||D.isColor?(N.boundary=16,N.storage=12):D.isVector4?(N.boundary=16,N.storage=16):D.isMatrix3?(N.boundary=48,N.storage=48):D.isMatrix4?(N.boundary=64,N.storage=64):D.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",D),N}function g(D){const N=D.target;N.removeEventListener("dispose",g);const A=u.indexOf(N.__bindingPointIndex);u.splice(A,1),s.deleteBuffer(a[N.id]),delete a[N.id],delete c[N.id]}function v(){for(const D in a)s.deleteBuffer(a[D]);u=[],a={},c={}}return{bind:p,update:m,dispose:v}}class LE{constructor(e={}){const{canvas:n=yx(),context:r=null,depth:a=!0,stencil:c=!1,alpha:u=!1,antialias:f=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:m=!1,powerPreference:_="default",failIfMajorPerformanceCaveat:x=!1,reverseDepthBuffer:y=!1}=e;this.isWebGLRenderer=!0;let S;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");S=r.getContextAttributes().alpha}else S=u;const E=new Uint32Array(4),T=new Int32Array(4);let g=null,v=null;const D=[],N=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Kn,this.toneMapping=yr,this.toneMappingExposure=1;const A=this;let j=!1,k=0,U=0,B=null,P=-1,C=null;const z=new Wt,oe=new Wt;let J=null;const de=new bt(0);let he=0,ae=n.width,ce=n.height,H=1,le=null,re=null;const F=new Wt(0,0,ae,ce),ie=new Wt(0,0,ae,ce);let De=!1;const Z=new yg;let ue=!1,Se=!1;const ve=new Vt,Ae=new Vt,Le=new q,Ke=new Wt,wt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let dt=!1;function qe(){return B===null?H:1}let V=r;function Bt(b,X){return n.getContext(b,X)}try{const b={alpha:!0,depth:a,stencil:c,antialias:f,premultipliedAlpha:p,preserveDrawingBuffer:m,powerPreference:_,failIfMajorPerformanceCaveat:x};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${$d}`),n.addEventListener("webglcontextlost",pe,!1),n.addEventListener("webglcontextrestored",Ne,!1),n.addEventListener("webglcontextcreationerror",Pe,!1),V===null){const X="webgl2";if(V=Bt(X,b),V===null)throw Bt(X)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let rt,at,$e,Et,ze,L,w,Q,me,_e,fe,Ge,Ce,Ue,ft,Me,Fe,Je,et,Oe,ht,st,At,W;function be(){rt=new OS(V),rt.init(),st=new EE(V,rt),at=new DS(V,rt,e,st),$e=new yE(V,rt),at.reverseDepthBuffer&&y&&$e.buffers.depth.setReversed(!0),Et=new HS(V),ze=new sE,L=new ME(V,rt,$e,ze,at,st,Et),w=new LS(A),Q=new FS(A),me=new Yx(V),At=new RS(V,me),_e=new zS(V,me,Et,At),fe=new GS(V,_e,me,Et),et=new VS(V,at,L),Me=new NS(ze),Ge=new rE(A,w,Q,rt,at,At,Me),Ce=new DE(A,ze),Ue=new aE,ft=new hE(rt),Je=new bS(A,w,Q,$e,fe,S,p),Fe=new _E(A,fe,at),W=new NE(V,Et,at,$e),Oe=new PS(V,rt,Et),ht=new BS(V,rt,Et),Et.programs=Ge.programs,A.capabilities=at,A.extensions=rt,A.properties=ze,A.renderLists=Ue,A.shadowMap=Fe,A.state=$e,A.info=Et}be();const se=new RE(A,V);this.xr=se,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){const b=rt.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=rt.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(b){b!==void 0&&(H=b,this.setSize(ae,ce,!1))},this.getSize=function(b){return b.set(ae,ce)},this.setSize=function(b,X,te=!0){if(se.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}ae=b,ce=X,n.width=Math.floor(b*H),n.height=Math.floor(X*H),te===!0&&(n.style.width=b+"px",n.style.height=X+"px"),this.setViewport(0,0,b,X)},this.getDrawingBufferSize=function(b){return b.set(ae*H,ce*H).floor()},this.setDrawingBufferSize=function(b,X,te){ae=b,ce=X,H=te,n.width=Math.floor(b*te),n.height=Math.floor(X*te),this.setViewport(0,0,b,X)},this.getCurrentViewport=function(b){return b.copy(z)},this.getViewport=function(b){return b.copy(F)},this.setViewport=function(b,X,te,ne){b.isVector4?F.set(b.x,b.y,b.z,b.w):F.set(b,X,te,ne),$e.viewport(z.copy(F).multiplyScalar(H).round())},this.getScissor=function(b){return b.copy(ie)},this.setScissor=function(b,X,te,ne){b.isVector4?ie.set(b.x,b.y,b.z,b.w):ie.set(b,X,te,ne),$e.scissor(oe.copy(ie).multiplyScalar(H).round())},this.getScissorTest=function(){return De},this.setScissorTest=function(b){$e.setScissorTest(De=b)},this.setOpaqueSort=function(b){le=b},this.setTransparentSort=function(b){re=b},this.getClearColor=function(b){return b.copy(Je.getClearColor())},this.setClearColor=function(){Je.setClearColor.apply(Je,arguments)},this.getClearAlpha=function(){return Je.getClearAlpha()},this.setClearAlpha=function(){Je.setClearAlpha.apply(Je,arguments)},this.clear=function(b=!0,X=!0,te=!0){let ne=0;if(b){let Y=!1;if(B!==null){const we=B.texture.format;Y=we===tf||we===ef||we===Jd}if(Y){const we=B.texture.type,Ee=we===Gi||we===$r||we===zo||we===Ws||we===Zd||we===Qd,We=Je.getClearColor(),He=Je.getClearAlpha(),tt=We.r,it=We.g,je=We.b;Ee?(E[0]=tt,E[1]=it,E[2]=je,E[3]=He,V.clearBufferuiv(V.COLOR,0,E)):(T[0]=tt,T[1]=it,T[2]=je,T[3]=He,V.clearBufferiv(V.COLOR,0,T))}else ne|=V.COLOR_BUFFER_BIT}X&&(ne|=V.DEPTH_BUFFER_BIT),te&&(ne|=V.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V.clear(ne)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",pe,!1),n.removeEventListener("webglcontextrestored",Ne,!1),n.removeEventListener("webglcontextcreationerror",Pe,!1),Ue.dispose(),ft.dispose(),ze.dispose(),w.dispose(),Q.dispose(),fe.dispose(),At.dispose(),W.dispose(),Ge.dispose(),se.dispose(),se.removeEventListener("sessionstart",Qr),se.removeEventListener("sessionend",ji),Mi.stop()};function pe(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),j=!0}function Ne(){console.log("THREE.WebGLRenderer: Context Restored."),j=!1;const b=Et.autoReset,X=Fe.enabled,te=Fe.autoUpdate,ne=Fe.needsUpdate,Y=Fe.type;be(),Et.autoReset=b,Fe.enabled=X,Fe.autoUpdate=te,Fe.needsUpdate=ne,Fe.type=Y}function Pe(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function ot(b){const X=b.target;X.removeEventListener("dispose",ot),It(X)}function It(b){qt(b),ze.remove(b)}function qt(b){const X=ze.get(b).programs;X!==void 0&&(X.forEach(function(te){Ge.releaseProgram(te)}),b.isShaderMaterial&&Ge.releaseShaderCache(b))}this.renderBufferDirect=function(b,X,te,ne,Y,we){X===null&&(X=wt);const Ee=Y.isMesh&&Y.matrixWorld.determinant()<0,We=Yo(b,X,te,ne,Y);$e.setMaterial(ne,Ee);let He=te.index,tt=1;if(ne.wireframe===!0){if(He=_e.getWireframeAttribute(te),He===void 0)return;tt=2}const it=te.drawRange,je=te.attributes.position;let gt=it.start*tt,Tt=(it.start+it.count)*tt;we!==null&&(gt=Math.max(gt,we.start*tt),Tt=Math.min(Tt,(we.start+we.count)*tt)),He!==null?(gt=Math.max(gt,0),Tt=Math.min(Tt,He.count)):je!=null&&(gt=Math.max(gt,0),Tt=Math.min(Tt,je.count));const mt=Tt-gt;if(mt<0||mt===1/0)return;At.setup(Y,ne,We,te,He);let an,lt=Oe;if(He!==null&&(an=me.get(He),lt=ht,lt.setIndex(an)),Y.isMesh)ne.wireframe===!0?($e.setLineWidth(ne.wireframeLinewidth*qe()),lt.setMode(V.LINES)):lt.setMode(V.TRIANGLES);else if(Y.isLine){let Ye=ne.linewidth;Ye===void 0&&(Ye=1),$e.setLineWidth(Ye*qe()),Y.isLineSegments?lt.setMode(V.LINES):Y.isLineLoop?lt.setMode(V.LINE_LOOP):lt.setMode(V.LINE_STRIP)}else Y.isPoints?lt.setMode(V.POINTS):Y.isSprite&&lt.setMode(V.TRIANGLES);if(Y.isBatchedMesh)if(Y._multiDrawInstances!==null)lt.renderMultiDrawInstances(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount,Y._multiDrawInstances);else if(rt.get("WEBGL_multi_draw"))lt.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else{const Ye=Y._multiDrawStarts,ei=Y._multiDrawCounts,St=Y._multiDrawCount,ln=He?me.get(He).bytesPerElement:1,ti=ze.get(ne).currentProgram.getUniforms();for(let $t=0;$t<St;$t++)ti.setValue(V,"_gl_DrawID",$t),lt.render(Ye[$t]/ln,ei[$t])}else if(Y.isInstancedMesh)lt.renderInstances(gt,mt,Y.count);else if(te.isInstancedBufferGeometry){const Ye=te._maxInstanceCount!==void 0?te._maxInstanceCount:1/0,ei=Math.min(te.instanceCount,Ye);lt.renderInstances(gt,mt,ei)}else lt.render(gt,mt)};function _t(b,X,te){b.transparent===!0&&b.side===zi&&b.forceSinglePass===!1?(b.side=Nn,b.needsUpdate=!0,Jr(b,X,te),b.side=Sr,b.needsUpdate=!0,Jr(b,X,te),b.side=zi):Jr(b,X,te)}this.compile=function(b,X,te=null){te===null&&(te=b),v=ft.get(te),v.init(X),N.push(v),te.traverseVisible(function(Y){Y.isLight&&Y.layers.test(X.layers)&&(v.pushLight(Y),Y.castShadow&&v.pushShadow(Y))}),b!==te&&b.traverseVisible(function(Y){Y.isLight&&Y.layers.test(X.layers)&&(v.pushLight(Y),Y.castShadow&&v.pushShadow(Y))}),v.setupLights();const ne=new Set;return b.traverse(function(Y){if(!(Y.isMesh||Y.isPoints||Y.isLine||Y.isSprite))return;const we=Y.material;if(we)if(Array.isArray(we))for(let Ee=0;Ee<we.length;Ee++){const We=we[Ee];_t(We,te,Y),ne.add(We)}else _t(we,te,Y),ne.add(we)}),N.pop(),v=null,ne},this.compileAsync=function(b,X,te=null){const ne=this.compile(b,X,te);return new Promise(Y=>{function we(){if(ne.forEach(function(Ee){ze.get(Ee).currentProgram.isReady()&&ne.delete(Ee)}),ne.size===0){Y(b);return}setTimeout(we,10)}rt.get("KHR_parallel_shader_compile")!==null?we():setTimeout(we,10)})};let Mn=null;function mn(b){Mn&&Mn(b)}function Qr(){Mi.stop()}function ji(){Mi.start()}const Mi=new Sg;Mi.setAnimationLoop(mn),typeof self<"u"&&Mi.setContext(self),this.setAnimationLoop=function(b){Mn=b,se.setAnimationLoop(b),b===null?Mi.stop():Mi.start()},se.addEventListener("sessionstart",Qr),se.addEventListener("sessionend",ji),this.render=function(b,X){if(X!==void 0&&X.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(j===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),se.enabled===!0&&se.isPresenting===!0&&(se.cameraAutoUpdate===!0&&se.updateCamera(X),X=se.getCamera()),b.isScene===!0&&b.onBeforeRender(A,b,X,B),v=ft.get(b,N.length),v.init(X),N.push(v),Ae.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),Z.setFromProjectionMatrix(Ae),Se=this.localClippingEnabled,ue=Me.init(this.clippingPlanes,Se),g=Ue.get(b,D.length),g.init(),D.push(g),se.enabled===!0&&se.isPresenting===!0){const we=A.xr.getDepthSensingMesh();we!==null&&Ei(we,X,-1/0,A.sortObjects)}Ei(b,X,0,A.sortObjects),g.finish(),A.sortObjects===!0&&g.sort(le,re),dt=se.enabled===!1||se.isPresenting===!1||se.hasDepthSensing()===!1,dt&&Je.addToRenderList(g,b),this.info.render.frame++,ue===!0&&Me.beginShadows();const te=v.state.shadowsArray;Fe.render(te,b,X),ue===!0&&Me.endShadows(),this.info.autoReset===!0&&this.info.reset();const ne=g.opaque,Y=g.transmissive;if(v.setupLights(),X.isArrayCamera){const we=X.cameras;if(Y.length>0)for(let Ee=0,We=we.length;Ee<We;Ee++){const He=we[Ee];Tr(ne,Y,b,He)}dt&&Je.render(b);for(let Ee=0,We=we.length;Ee<We;Ee++){const He=we[Ee];Er(g,b,He,He.viewport)}}else Y.length>0&&Tr(ne,Y,b,X),dt&&Je.render(b),Er(g,b,X);B!==null&&(L.updateMultisampleRenderTarget(B),L.updateRenderTargetMipmap(B)),b.isScene===!0&&b.onAfterRender(A,b,X),At.resetDefaultState(),P=-1,C=null,N.pop(),N.length>0?(v=N[N.length-1],ue===!0&&Me.setGlobalState(A.clippingPlanes,v.state.camera)):v=null,D.pop(),D.length>0?g=D[D.length-1]:g=null};function Ei(b,X,te,ne){if(b.visible===!1)return;if(b.layers.test(X.layers)){if(b.isGroup)te=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(X);else if(b.isLight)v.pushLight(b),b.castShadow&&v.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||Z.intersectsSprite(b)){ne&&Ke.setFromMatrixPosition(b.matrixWorld).applyMatrix4(Ae);const Ee=fe.update(b),We=b.material;We.visible&&g.push(b,Ee,We,te,Ke.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||Z.intersectsObject(b))){const Ee=fe.update(b),We=b.material;if(ne&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Ke.copy(b.boundingSphere.center)):(Ee.boundingSphere===null&&Ee.computeBoundingSphere(),Ke.copy(Ee.boundingSphere.center)),Ke.applyMatrix4(b.matrixWorld).applyMatrix4(Ae)),Array.isArray(We)){const He=Ee.groups;for(let tt=0,it=He.length;tt<it;tt++){const je=He[tt],gt=We[je.materialIndex];gt&&gt.visible&&g.push(b,Ee,gt,te,Ke.z,je)}}else We.visible&&g.push(b,Ee,We,te,Ke.z,null)}}const we=b.children;for(let Ee=0,We=we.length;Ee<We;Ee++)Ei(we[Ee],X,te,ne)}function Er(b,X,te,ne){const Y=b.opaque,we=b.transmissive,Ee=b.transparent;v.setupLightsView(te),ue===!0&&Me.setGlobalState(A.clippingPlanes,te),ne&&$e.viewport(z.copy(ne)),Y.length>0&&Xi(Y,X,te),we.length>0&&Xi(we,X,te),Ee.length>0&&Xi(Ee,X,te),$e.buffers.depth.setTest(!0),$e.buffers.depth.setMask(!0),$e.buffers.color.setMask(!0),$e.setPolygonOffset(!1)}function Tr(b,X,te,ne){if((te.isScene===!0?te.overrideMaterial:null)!==null)return;v.state.transmissionRenderTarget[ne.id]===void 0&&(v.state.transmissionRenderTarget[ne.id]=new Kr(1,1,{generateMipmaps:!0,type:rt.has("EXT_color_buffer_half_float")||rt.has("EXT_color_buffer_float")?Bo:Gi,minFilter:qr,samples:4,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:yt.workingColorSpace}));const we=v.state.transmissionRenderTarget[ne.id],Ee=ne.viewport||z;we.setSize(Ee.z,Ee.w);const We=A.getRenderTarget();A.setRenderTarget(we),A.getClearColor(de),he=A.getClearAlpha(),he<1&&A.setClearColor(16777215,.5),A.clear(),dt&&Je.render(te);const He=A.toneMapping;A.toneMapping=yr;const tt=ne.viewport;if(ne.viewport!==void 0&&(ne.viewport=void 0),v.setupLightsView(ne),ue===!0&&Me.setGlobalState(A.clippingPlanes,ne),Xi(b,te,ne),L.updateMultisampleRenderTarget(we),L.updateRenderTargetMipmap(we),rt.has("WEBGL_multisampled_render_to_texture")===!1){let it=!1;for(let je=0,gt=X.length;je<gt;je++){const Tt=X[je],mt=Tt.object,an=Tt.geometry,lt=Tt.material,Ye=Tt.group;if(lt.side===zi&&mt.layers.test(ne.layers)){const ei=lt.side;lt.side=Nn,lt.needsUpdate=!0,jo(mt,te,ne,an,lt,Ye),lt.side=ei,lt.needsUpdate=!0,it=!0}}it===!0&&(L.updateMultisampleRenderTarget(we),L.updateRenderTargetMipmap(we))}A.setRenderTarget(We),A.setClearColor(de,he),tt!==void 0&&(ne.viewport=tt),A.toneMapping=He}function Xi(b,X,te){const ne=X.isScene===!0?X.overrideMaterial:null;for(let Y=0,we=b.length;Y<we;Y++){const Ee=b[Y],We=Ee.object,He=Ee.geometry,tt=ne===null?Ee.material:ne,it=Ee.group;We.layers.test(te.layers)&&jo(We,X,te,He,tt,it)}}function jo(b,X,te,ne,Y,we){b.onBeforeRender(A,X,te,ne,Y,we),b.modelViewMatrix.multiplyMatrices(te.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),Y.onBeforeRender(A,X,te,ne,b,we),Y.transparent===!0&&Y.side===zi&&Y.forceSinglePass===!1?(Y.side=Nn,Y.needsUpdate=!0,A.renderBufferDirect(te,X,ne,Y,b,we),Y.side=Sr,Y.needsUpdate=!0,A.renderBufferDirect(te,X,ne,Y,b,we),Y.side=zi):A.renderBufferDirect(te,X,ne,Y,b,we),b.onAfterRender(A,X,te,ne,Y,we)}function Jr(b,X,te){X.isScene!==!0&&(X=wt);const ne=ze.get(b),Y=v.state.lights,we=v.state.shadowsArray,Ee=Y.state.version,We=Ge.getParameters(b,Y.state,we,X,te),He=Ge.getProgramCacheKey(We);let tt=ne.programs;ne.environment=b.isMeshStandardMaterial?X.environment:null,ne.fog=X.fog,ne.envMap=(b.isMeshStandardMaterial?Q:w).get(b.envMap||ne.environment),ne.envMapRotation=ne.environment!==null&&b.envMap===null?X.environmentRotation:b.envMapRotation,tt===void 0&&(b.addEventListener("dispose",ot),tt=new Map,ne.programs=tt);let it=tt.get(He);if(it!==void 0){if(ne.currentProgram===it&&ne.lightsStateVersion===Ee)return pi(b,We),it}else We.uniforms=Ge.getUniforms(b),b.onBeforeCompile(We,A),it=Ge.acquireProgram(We,He),tt.set(He,it),ne.uniforms=We.uniforms;const je=ne.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(je.clippingPlanes=Me.uniform),pi(b,We),ne.needsLights=Wl(b),ne.lightsStateVersion=Ee,ne.needsLights&&(je.ambientLightColor.value=Y.state.ambient,je.lightProbe.value=Y.state.probe,je.directionalLights.value=Y.state.directional,je.directionalLightShadows.value=Y.state.directionalShadow,je.spotLights.value=Y.state.spot,je.spotLightShadows.value=Y.state.spotShadow,je.rectAreaLights.value=Y.state.rectArea,je.ltc_1.value=Y.state.rectAreaLTC1,je.ltc_2.value=Y.state.rectAreaLTC2,je.pointLights.value=Y.state.point,je.pointLightShadows.value=Y.state.pointShadow,je.hemisphereLights.value=Y.state.hemi,je.directionalShadowMap.value=Y.state.directionalShadowMap,je.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,je.spotShadowMap.value=Y.state.spotShadowMap,je.spotLightMatrix.value=Y.state.spotLightMatrix,je.spotLightMap.value=Y.state.spotLightMap,je.pointShadowMap.value=Y.state.pointShadowMap,je.pointShadowMatrix.value=Y.state.pointShadowMatrix),ne.currentProgram=it,ne.uniformsList=null,it}function Xo(b){if(b.uniformsList===null){const X=b.currentProgram.getUniforms();b.uniformsList=Dl.seqWithValue(X.seq,b.uniforms)}return b.uniformsList}function pi(b,X){const te=ze.get(b);te.outputColorSpace=X.outputColorSpace,te.batching=X.batching,te.batchingColor=X.batchingColor,te.instancing=X.instancing,te.instancingColor=X.instancingColor,te.instancingMorph=X.instancingMorph,te.skinning=X.skinning,te.morphTargets=X.morphTargets,te.morphNormals=X.morphNormals,te.morphColors=X.morphColors,te.morphTargetsCount=X.morphTargetsCount,te.numClippingPlanes=X.numClippingPlanes,te.numIntersection=X.numClipIntersection,te.vertexAlphas=X.vertexAlphas,te.vertexTangents=X.vertexTangents,te.toneMapping=X.toneMapping}function Yo(b,X,te,ne,Y){X.isScene!==!0&&(X=wt),L.resetTextureUnits();const we=X.fog,Ee=ne.isMeshStandardMaterial?X.environment:null,We=B===null?A.outputColorSpace:B.isXRRenderTarget===!0?B.texture.colorSpace:Ys,He=(ne.isMeshStandardMaterial?Q:w).get(ne.envMap||Ee),tt=ne.vertexColors===!0&&!!te.attributes.color&&te.attributes.color.itemSize===4,it=!!te.attributes.tangent&&(!!ne.normalMap||ne.anisotropy>0),je=!!te.morphAttributes.position,gt=!!te.morphAttributes.normal,Tt=!!te.morphAttributes.color;let mt=yr;ne.toneMapped&&(B===null||B.isXRRenderTarget===!0)&&(mt=A.toneMapping);const an=te.morphAttributes.position||te.morphAttributes.normal||te.morphAttributes.color,lt=an!==void 0?an.length:0,Ye=ze.get(ne),ei=v.state.lights;if(ue===!0&&(Se===!0||b!==C)){const gn=b===C&&ne.id===P;Me.setState(ne,b,gn)}let St=!1;ne.version===Ye.__version?(Ye.needsLights&&Ye.lightsStateVersion!==ei.state.version||Ye.outputColorSpace!==We||Y.isBatchedMesh&&Ye.batching===!1||!Y.isBatchedMesh&&Ye.batching===!0||Y.isBatchedMesh&&Ye.batchingColor===!0&&Y.colorTexture===null||Y.isBatchedMesh&&Ye.batchingColor===!1&&Y.colorTexture!==null||Y.isInstancedMesh&&Ye.instancing===!1||!Y.isInstancedMesh&&Ye.instancing===!0||Y.isSkinnedMesh&&Ye.skinning===!1||!Y.isSkinnedMesh&&Ye.skinning===!0||Y.isInstancedMesh&&Ye.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&Ye.instancingColor===!1&&Y.instanceColor!==null||Y.isInstancedMesh&&Ye.instancingMorph===!0&&Y.morphTexture===null||Y.isInstancedMesh&&Ye.instancingMorph===!1&&Y.morphTexture!==null||Ye.envMap!==He||ne.fog===!0&&Ye.fog!==we||Ye.numClippingPlanes!==void 0&&(Ye.numClippingPlanes!==Me.numPlanes||Ye.numIntersection!==Me.numIntersection)||Ye.vertexAlphas!==tt||Ye.vertexTangents!==it||Ye.morphTargets!==je||Ye.morphNormals!==gt||Ye.morphColors!==Tt||Ye.toneMapping!==mt||Ye.morphTargetsCount!==lt)&&(St=!0):(St=!0,Ye.__version=ne.version);let ln=Ye.currentProgram;St===!0&&(ln=Jr(ne,X,Y));let ti=!1,$t=!1,mi=!1;const Nt=ln.getUniforms(),Hn=Ye.uniforms;if($e.useProgram(ln.program)&&(ti=!0,$t=!0,mi=!0),ne.id!==P&&(P=ne.id,$t=!0),ti||C!==b){$e.buffers.depth.getReversed()?(ve.copy(b.projectionMatrix),Mx(ve),Ex(ve),Nt.setValue(V,"projectionMatrix",ve)):Nt.setValue(V,"projectionMatrix",b.projectionMatrix),Nt.setValue(V,"viewMatrix",b.matrixWorldInverse);const Vn=Nt.map.cameraPosition;Vn!==void 0&&Vn.setValue(V,Le.setFromMatrixPosition(b.matrixWorld)),at.logarithmicDepthBuffer&&Nt.setValue(V,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(ne.isMeshPhongMaterial||ne.isMeshToonMaterial||ne.isMeshLambertMaterial||ne.isMeshBasicMaterial||ne.isMeshStandardMaterial||ne.isShaderMaterial)&&Nt.setValue(V,"isOrthographic",b.isOrthographicCamera===!0),C!==b&&(C=b,$t=!0,mi=!0)}if(Y.isSkinnedMesh){Nt.setOptional(V,Y,"bindMatrix"),Nt.setOptional(V,Y,"bindMatrixInverse");const gn=Y.skeleton;gn&&(gn.boneTexture===null&&gn.computeBoneTexture(),Nt.setValue(V,"boneTexture",gn.boneTexture,L))}Y.isBatchedMesh&&(Nt.setOptional(V,Y,"batchingTexture"),Nt.setValue(V,"batchingTexture",Y._matricesTexture,L),Nt.setOptional(V,Y,"batchingIdTexture"),Nt.setValue(V,"batchingIdTexture",Y._indirectTexture,L),Nt.setOptional(V,Y,"batchingColorTexture"),Y._colorsTexture!==null&&Nt.setValue(V,"batchingColorTexture",Y._colorsTexture,L));const Ti=te.morphAttributes;if((Ti.position!==void 0||Ti.normal!==void 0||Ti.color!==void 0)&&et.update(Y,te,ln),($t||Ye.receiveShadow!==Y.receiveShadow)&&(Ye.receiveShadow=Y.receiveShadow,Nt.setValue(V,"receiveShadow",Y.receiveShadow)),ne.isMeshGouraudMaterial&&ne.envMap!==null&&(Hn.envMap.value=He,Hn.flipEnvMap.value=He.isCubeTexture&&He.isRenderTargetTexture===!1?-1:1),ne.isMeshStandardMaterial&&ne.envMap===null&&X.environment!==null&&(Hn.envMapIntensity.value=X.environmentIntensity),$t&&(Nt.setValue(V,"toneMappingExposure",A.toneMappingExposure),Ye.needsLights&&qo(Hn,mi),we&&ne.fog===!0&&Ce.refreshFogUniforms(Hn,we),Ce.refreshMaterialUniforms(Hn,ne,H,ce,v.state.transmissionRenderTarget[b.id]),Dl.upload(V,Xo(Ye),Hn,L)),ne.isShaderMaterial&&ne.uniformsNeedUpdate===!0&&(Dl.upload(V,Xo(Ye),Hn,L),ne.uniformsNeedUpdate=!1),ne.isSpriteMaterial&&Nt.setValue(V,"center",Y.center),Nt.setValue(V,"modelViewMatrix",Y.modelViewMatrix),Nt.setValue(V,"normalMatrix",Y.normalMatrix),Nt.setValue(V,"modelMatrix",Y.matrixWorld),ne.isShaderMaterial||ne.isRawShaderMaterial){const gn=ne.uniformsGroups;for(let Vn=0,En=gn.length;Vn<En;Vn++){const $o=gn[Vn];W.update($o,ln),W.bind($o,ln)}}return ln}function qo(b,X){b.ambientLightColor.needsUpdate=X,b.lightProbe.needsUpdate=X,b.directionalLights.needsUpdate=X,b.directionalLightShadows.needsUpdate=X,b.pointLights.needsUpdate=X,b.pointLightShadows.needsUpdate=X,b.spotLights.needsUpdate=X,b.spotLightShadows.needsUpdate=X,b.rectAreaLights.needsUpdate=X,b.hemisphereLights.needsUpdate=X}function Wl(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return k},this.getActiveMipmapLevel=function(){return U},this.getRenderTarget=function(){return B},this.setRenderTargetTextures=function(b,X,te){ze.get(b.texture).__webglTexture=X,ze.get(b.depthTexture).__webglTexture=te;const ne=ze.get(b);ne.__hasExternalTextures=!0,ne.__autoAllocateDepthBuffer=te===void 0,ne.__autoAllocateDepthBuffer||rt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ne.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(b,X){const te=ze.get(b);te.__webglFramebuffer=X,te.__useDefaultFramebuffer=X===void 0},this.setRenderTarget=function(b,X=0,te=0){B=b,k=X,U=te;let ne=!0,Y=null,we=!1,Ee=!1;if(b){const He=ze.get(b);if(He.__useDefaultFramebuffer!==void 0)$e.bindFramebuffer(V.FRAMEBUFFER,null),ne=!1;else if(He.__webglFramebuffer===void 0)L.setupRenderTarget(b);else if(He.__hasExternalTextures)L.rebindTextures(b,ze.get(b.texture).__webglTexture,ze.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const je=b.depthTexture;if(He.__boundDepthTexture!==je){if(je!==null&&ze.has(je)&&(b.width!==je.image.width||b.height!==je.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");L.setupDepthRenderbuffer(b)}}const tt=b.texture;(tt.isData3DTexture||tt.isDataArrayTexture||tt.isCompressedArrayTexture)&&(Ee=!0);const it=ze.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(it[X])?Y=it[X][te]:Y=it[X],we=!0):b.samples>0&&L.useMultisampledRTT(b)===!1?Y=ze.get(b).__webglMultisampledFramebuffer:Array.isArray(it)?Y=it[te]:Y=it,z.copy(b.viewport),oe.copy(b.scissor),J=b.scissorTest}else z.copy(F).multiplyScalar(H).floor(),oe.copy(ie).multiplyScalar(H).floor(),J=De;if($e.bindFramebuffer(V.FRAMEBUFFER,Y)&&ne&&$e.drawBuffers(b,Y),$e.viewport(z),$e.scissor(oe),$e.setScissorTest(J),we){const He=ze.get(b.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_CUBE_MAP_POSITIVE_X+X,He.__webglTexture,te)}else if(Ee){const He=ze.get(b.texture),tt=X||0;V.framebufferTextureLayer(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,He.__webglTexture,te||0,tt)}P=-1},this.readRenderTargetPixels=function(b,X,te,ne,Y,we,Ee){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let We=ze.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Ee!==void 0&&(We=We[Ee]),We){$e.bindFramebuffer(V.FRAMEBUFFER,We);try{const He=b.texture,tt=He.format,it=He.type;if(!at.textureFormatReadable(tt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!at.textureTypeReadable(it)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=b.width-ne&&te>=0&&te<=b.height-Y&&V.readPixels(X,te,ne,Y,st.convert(tt),st.convert(it),we)}finally{const He=B!==null?ze.get(B).__webglFramebuffer:null;$e.bindFramebuffer(V.FRAMEBUFFER,He)}}},this.readRenderTargetPixelsAsync=async function(b,X,te,ne,Y,we,Ee){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let We=ze.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Ee!==void 0&&(We=We[Ee]),We){const He=b.texture,tt=He.format,it=He.type;if(!at.textureFormatReadable(tt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!at.textureTypeReadable(it))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(X>=0&&X<=b.width-ne&&te>=0&&te<=b.height-Y){$e.bindFramebuffer(V.FRAMEBUFFER,We);const je=V.createBuffer();V.bindBuffer(V.PIXEL_PACK_BUFFER,je),V.bufferData(V.PIXEL_PACK_BUFFER,we.byteLength,V.STREAM_READ),V.readPixels(X,te,ne,Y,st.convert(tt),st.convert(it),0);const gt=B!==null?ze.get(B).__webglFramebuffer:null;$e.bindFramebuffer(V.FRAMEBUFFER,gt);const Tt=V.fenceSync(V.SYNC_GPU_COMMANDS_COMPLETE,0);return V.flush(),await Sx(V,Tt,4),V.bindBuffer(V.PIXEL_PACK_BUFFER,je),V.getBufferSubData(V.PIXEL_PACK_BUFFER,0,we),V.deleteBuffer(je),V.deleteSync(Tt),we}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(b,X=null,te=0){b.isTexture!==!0&&(ko("WebGLRenderer: copyFramebufferToTexture function signature has changed."),X=arguments[0]||null,b=arguments[1]);const ne=Math.pow(2,-te),Y=Math.floor(b.image.width*ne),we=Math.floor(b.image.height*ne),Ee=X!==null?X.x:0,We=X!==null?X.y:0;L.setTexture2D(b,0),V.copyTexSubImage2D(V.TEXTURE_2D,te,0,0,Ee,We,Y,we),$e.unbindTexture()},this.copyTextureToTexture=function(b,X,te=null,ne=null,Y=0){b.isTexture!==!0&&(ko("WebGLRenderer: copyTextureToTexture function signature has changed."),ne=arguments[0]||null,b=arguments[1],X=arguments[2],Y=arguments[3]||0,te=null);let we,Ee,We,He,tt,it,je,gt,Tt;const mt=b.isCompressedTexture?b.mipmaps[Y]:b.image;te!==null?(we=te.max.x-te.min.x,Ee=te.max.y-te.min.y,We=te.isBox3?te.max.z-te.min.z:1,He=te.min.x,tt=te.min.y,it=te.isBox3?te.min.z:0):(we=mt.width,Ee=mt.height,We=mt.depth||1,He=0,tt=0,it=0),ne!==null?(je=ne.x,gt=ne.y,Tt=ne.z):(je=0,gt=0,Tt=0);const an=st.convert(X.format),lt=st.convert(X.type);let Ye;X.isData3DTexture?(L.setTexture3D(X,0),Ye=V.TEXTURE_3D):X.isDataArrayTexture||X.isCompressedArrayTexture?(L.setTexture2DArray(X,0),Ye=V.TEXTURE_2D_ARRAY):(L.setTexture2D(X,0),Ye=V.TEXTURE_2D),V.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,X.flipY),V.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),V.pixelStorei(V.UNPACK_ALIGNMENT,X.unpackAlignment);const ei=V.getParameter(V.UNPACK_ROW_LENGTH),St=V.getParameter(V.UNPACK_IMAGE_HEIGHT),ln=V.getParameter(V.UNPACK_SKIP_PIXELS),ti=V.getParameter(V.UNPACK_SKIP_ROWS),$t=V.getParameter(V.UNPACK_SKIP_IMAGES);V.pixelStorei(V.UNPACK_ROW_LENGTH,mt.width),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,mt.height),V.pixelStorei(V.UNPACK_SKIP_PIXELS,He),V.pixelStorei(V.UNPACK_SKIP_ROWS,tt),V.pixelStorei(V.UNPACK_SKIP_IMAGES,it);const mi=b.isDataArrayTexture||b.isData3DTexture,Nt=X.isDataArrayTexture||X.isData3DTexture;if(b.isRenderTargetTexture||b.isDepthTexture){const Hn=ze.get(b),Ti=ze.get(X),gn=ze.get(Hn.__renderTarget),Vn=ze.get(Ti.__renderTarget);$e.bindFramebuffer(V.READ_FRAMEBUFFER,gn.__webglFramebuffer),$e.bindFramebuffer(V.DRAW_FRAMEBUFFER,Vn.__webglFramebuffer);for(let En=0;En<We;En++)mi&&V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,ze.get(b).__webglTexture,Y,it+En),b.isDepthTexture?(Nt&&V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,ze.get(X).__webglTexture,Y,Tt+En),V.blitFramebuffer(He,tt,we,Ee,je,gt,we,Ee,V.DEPTH_BUFFER_BIT,V.NEAREST)):Nt?V.copyTexSubImage3D(Ye,Y,je,gt,Tt+En,He,tt,we,Ee):V.copyTexSubImage2D(Ye,Y,je,gt,Tt+En,He,tt,we,Ee);$e.bindFramebuffer(V.READ_FRAMEBUFFER,null),$e.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else Nt?b.isDataTexture||b.isData3DTexture?V.texSubImage3D(Ye,Y,je,gt,Tt,we,Ee,We,an,lt,mt.data):X.isCompressedArrayTexture?V.compressedTexSubImage3D(Ye,Y,je,gt,Tt,we,Ee,We,an,mt.data):V.texSubImage3D(Ye,Y,je,gt,Tt,we,Ee,We,an,lt,mt):b.isDataTexture?V.texSubImage2D(V.TEXTURE_2D,Y,je,gt,we,Ee,an,lt,mt.data):b.isCompressedTexture?V.compressedTexSubImage2D(V.TEXTURE_2D,Y,je,gt,mt.width,mt.height,an,mt.data):V.texSubImage2D(V.TEXTURE_2D,Y,je,gt,we,Ee,an,lt,mt);V.pixelStorei(V.UNPACK_ROW_LENGTH,ei),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,St),V.pixelStorei(V.UNPACK_SKIP_PIXELS,ln),V.pixelStorei(V.UNPACK_SKIP_ROWS,ti),V.pixelStorei(V.UNPACK_SKIP_IMAGES,$t),Y===0&&X.generateMipmaps&&V.generateMipmap(Ye),$e.unbindTexture()},this.copyTextureToTexture3D=function(b,X,te=null,ne=null,Y=0){return b.isTexture!==!0&&(ko("WebGLRenderer: copyTextureToTexture3D function signature has changed."),te=arguments[0]||null,ne=arguments[1]||null,b=arguments[2],X=arguments[3],Y=arguments[4]||0),ko('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(b,X,te,ne,Y)},this.initRenderTarget=function(b){ze.get(b).__webglFramebuffer===void 0&&L.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?L.setTextureCube(b,0):b.isData3DTexture?L.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?L.setTexture2DArray(b,0):L.setTexture2D(b,0),$e.unbindTexture()},this.resetState=function(){k=0,U=0,B=null,$e.reset(),At.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Hi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorspace=yt._getDrawingBufferColorSpace(e),n.unpackColorSpace=yt._getUnpackColorSpace()}}class IE extends yn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Wi,this.environmentIntensity=1,this.environmentRotation=new Wi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class Nl extends $s{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new bt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const kl=new q,Fl=new q,Om=new Vt,Uo=new nf,_l=new Wo,nd=new q,zm=new q;class UE extends yn{constructor(e=new Sn,n=new Nl){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,r=[0];for(let a=1,c=n.count;a<c;a++)kl.fromBufferAttribute(n,a-1),Fl.fromBufferAttribute(n,a),r[a]=r[a-1],r[a]+=kl.distanceTo(Fl);e.setAttribute("lineDistance",new Yt(r,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const r=this.geometry,a=this.matrixWorld,c=e.params.Line.threshold,u=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),_l.copy(r.boundingSphere),_l.applyMatrix4(a),_l.radius+=c,e.ray.intersectsSphere(_l)===!1)return;Om.copy(a).invert(),Uo.copy(e.ray).applyMatrix4(Om);const f=c/((this.scale.x+this.scale.y+this.scale.z)/3),p=f*f,m=this.isLineSegments?2:1,_=r.index,y=r.attributes.position;if(_!==null){const S=Math.max(0,u.start),E=Math.min(_.count,u.start+u.count);for(let T=S,g=E-1;T<g;T+=m){const v=_.getX(T),D=_.getX(T+1),N=xl(this,e,Uo,p,v,D);N&&n.push(N)}if(this.isLineLoop){const T=_.getX(E-1),g=_.getX(S),v=xl(this,e,Uo,p,T,g);v&&n.push(v)}}else{const S=Math.max(0,u.start),E=Math.min(y.count,u.start+u.count);for(let T=S,g=E-1;T<g;T+=m){const v=xl(this,e,Uo,p,T,T+1);v&&n.push(v)}if(this.isLineLoop){const T=xl(this,e,Uo,p,E-1,S);T&&n.push(T)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const a=n[r[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,u=a.length;c<u;c++){const f=a[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=c}}}}}function xl(s,e,n,r,a,c){const u=s.geometry.attributes.position;if(kl.fromBufferAttribute(u,a),Fl.fromBufferAttribute(u,c),n.distanceSqToSegment(kl,Fl,nd,zm)>r)return;nd.applyMatrix4(s.matrixWorld);const p=e.ray.origin.distanceTo(nd);if(!(p<e.near||p>e.far))return{distance:p,point:zm.clone().applyMatrix4(s.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:s}}const Bm=new q,Hm=new q;class id extends UE{constructor(e,n){super(e,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,r=[];for(let a=0,c=n.count;a<c;a+=2)Bm.fromBufferAttribute(n,a),Hm.fromBufferAttribute(n,a+1),r[a]=a===0?0:r[a-1],r[a+1]=r[a]+Bm.distanceTo(Hm);e.setAttribute("lineDistance",new Yt(r,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Xd extends $s{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new bt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Vm=new Vt,Yd=new nf,yl=new Wo,Sl=new q;class Gm extends yn{constructor(e=new Sn,n=new Xd){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const r=this.geometry,a=this.matrixWorld,c=e.params.Points.threshold,u=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),yl.copy(r.boundingSphere),yl.applyMatrix4(a),yl.radius+=c,e.ray.intersectsSphere(yl)===!1)return;Vm.copy(a).invert(),Yd.copy(e.ray).applyMatrix4(Vm);const f=c/((this.scale.x+this.scale.y+this.scale.z)/3),p=f*f,m=r.index,x=r.attributes.position;if(m!==null){const y=Math.max(0,u.start),S=Math.min(m.count,u.start+u.count);for(let E=y,T=S;E<T;E++){const g=m.getX(E);Sl.fromBufferAttribute(x,g),Wm(Sl,g,p,a,e,n,this)}}else{const y=Math.max(0,u.start),S=Math.min(x.count,u.start+u.count);for(let E=y,T=S;E<T;E++)Sl.fromBufferAttribute(x,E),Wm(Sl,E,p,a,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const a=n[r[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,u=a.length;c<u;c++){const f=a[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=c}}}}}function Wm(s,e,n,r,a,c,u){const f=Yd.distanceSqToPoint(s);if(f<n){const p=new q;Yd.closestPointToPoint(s,p),p.applyMatrix4(r);const m=a.ray.origin.distanceTo(p);if(m<a.near||m>a.far)return;c.push({distance:m,distanceToRay:Math.sqrt(f),point:p,index:e,face:null,faceIndex:null,barycoord:null,object:u})}}class Gl extends Sn{constructor(e=[],n=[],r=1,a=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:n,radius:r,detail:a};const c=[],u=[];f(a),m(r),_(),this.setAttribute("position",new Yt(c,3)),this.setAttribute("normal",new Yt(c.slice(),3)),this.setAttribute("uv",new Yt(u,2)),a===0?this.computeVertexNormals():this.normalizeNormals();function f(D){const N=new q,A=new q,j=new q;for(let k=0;k<n.length;k+=3)S(n[k+0],N),S(n[k+1],A),S(n[k+2],j),p(N,A,j,D)}function p(D,N,A,j){const k=j+1,U=[];for(let B=0;B<=k;B++){U[B]=[];const P=D.clone().lerp(A,B/k),C=N.clone().lerp(A,B/k),z=k-B;for(let oe=0;oe<=z;oe++)oe===0&&B===k?U[B][oe]=P:U[B][oe]=P.clone().lerp(C,oe/z)}for(let B=0;B<k;B++)for(let P=0;P<2*(k-B)-1;P++){const C=Math.floor(P/2);P%2===0?(y(U[B][C+1]),y(U[B+1][C]),y(U[B][C])):(y(U[B][C+1]),y(U[B+1][C+1]),y(U[B+1][C]))}}function m(D){const N=new q;for(let A=0;A<c.length;A+=3)N.x=c[A+0],N.y=c[A+1],N.z=c[A+2],N.normalize().multiplyScalar(D),c[A+0]=N.x,c[A+1]=N.y,c[A+2]=N.z}function _(){const D=new q;for(let N=0;N<c.length;N+=3){D.x=c[N+0],D.y=c[N+1],D.z=c[N+2];const A=g(D)/2/Math.PI+.5,j=v(D)/Math.PI+.5;u.push(A,1-j)}E(),x()}function x(){for(let D=0;D<u.length;D+=6){const N=u[D+0],A=u[D+2],j=u[D+4],k=Math.max(N,A,j),U=Math.min(N,A,j);k>.9&&U<.1&&(N<.2&&(u[D+0]+=1),A<.2&&(u[D+2]+=1),j<.2&&(u[D+4]+=1))}}function y(D){c.push(D.x,D.y,D.z)}function S(D,N){const A=D*3;N.x=e[A+0],N.y=e[A+1],N.z=e[A+2]}function E(){const D=new q,N=new q,A=new q,j=new q,k=new Rt,U=new Rt,B=new Rt;for(let P=0,C=0;P<c.length;P+=9,C+=6){D.set(c[P+0],c[P+1],c[P+2]),N.set(c[P+3],c[P+4],c[P+5]),A.set(c[P+6],c[P+7],c[P+8]),k.set(u[C+0],u[C+1]),U.set(u[C+2],u[C+3]),B.set(u[C+4],u[C+5]),j.copy(D).add(N).add(A).divideScalar(3);const z=g(j);T(k,C+0,D,z),T(U,C+2,N,z),T(B,C+4,A,z)}}function T(D,N,A,j){j<0&&D.x===1&&(u[N]=D.x-1),A.x===0&&A.z===0&&(u[N]=j/2/Math.PI+.5)}function g(D){return Math.atan2(D.z,-D.x)}function v(D){return Math.atan2(-D.y,Math.sqrt(D.x*D.x+D.z*D.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Gl(e.vertices,e.indices,e.radius,e.details)}}const Ml=new q,El=new q,rd=new q,Tl=new Qn;class jm extends Sn{constructor(e=null,n=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:n},e!==null){const a=Math.pow(10,4),c=Math.cos(Pl*n),u=e.getIndex(),f=e.getAttribute("position"),p=u?u.count:f.count,m=[0,0,0],_=["a","b","c"],x=new Array(3),y={},S=[];for(let E=0;E<p;E+=3){u?(m[0]=u.getX(E),m[1]=u.getX(E+1),m[2]=u.getX(E+2)):(m[0]=E,m[1]=E+1,m[2]=E+2);const{a:T,b:g,c:v}=Tl;if(T.fromBufferAttribute(f,m[0]),g.fromBufferAttribute(f,m[1]),v.fromBufferAttribute(f,m[2]),Tl.getNormal(rd),x[0]=`${Math.round(T.x*a)},${Math.round(T.y*a)},${Math.round(T.z*a)}`,x[1]=`${Math.round(g.x*a)},${Math.round(g.y*a)},${Math.round(g.z*a)}`,x[2]=`${Math.round(v.x*a)},${Math.round(v.y*a)},${Math.round(v.z*a)}`,!(x[0]===x[1]||x[1]===x[2]||x[2]===x[0]))for(let D=0;D<3;D++){const N=(D+1)%3,A=x[D],j=x[N],k=Tl[_[D]],U=Tl[_[N]],B=`${A}_${j}`,P=`${j}_${A}`;P in y&&y[P]?(rd.dot(y[P].normal)<=c&&(S.push(k.x,k.y,k.z),S.push(U.x,U.y,U.z)),y[P]=null):B in y||(y[B]={index0:m[D],index1:m[N],normal:rd.clone()})}}for(const E in y)if(y[E]){const{index0:T,index1:g}=y[E];Ml.fromBufferAttribute(f,T),El.fromBufferAttribute(f,g),S.push(Ml.x,Ml.y,Ml.z),S.push(El.x,El.y,El.z)}this.setAttribute("position",new Yt(S,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class sf extends Gl{constructor(e=1,n=0){const r=(1+Math.sqrt(5))/2,a=[-1,r,0,1,r,0,-1,-r,0,1,-r,0,0,-1,r,0,1,r,0,-1,-r,0,1,-r,r,0,-1,r,0,1,-r,0,-1,-r,0,1],c=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(a,c,e,n),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:n}}static fromJSON(e){return new sf(e.radius,e.detail)}}class of extends Gl{constructor(e=1,n=0){const r=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],a=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(r,a,e,n),this.type="OctahedronGeometry",this.parameters={radius:e,detail:n}}static fromJSON(e){return new of(e.radius,e.detail)}}class Ol extends Sn{constructor(e=1,n=.4,r=12,a=48,c=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:n,radialSegments:r,tubularSegments:a,arc:c},r=Math.floor(r),a=Math.floor(a);const u=[],f=[],p=[],m=[],_=new q,x=new q,y=new q;for(let S=0;S<=r;S++)for(let E=0;E<=a;E++){const T=E/a*c,g=S/r*Math.PI*2;x.x=(e+n*Math.cos(g))*Math.cos(T),x.y=(e+n*Math.cos(g))*Math.sin(T),x.z=n*Math.sin(g),f.push(x.x,x.y,x.z),_.x=e*Math.cos(T),_.y=e*Math.sin(T),y.subVectors(x,_).normalize(),p.push(y.x,y.y,y.z),m.push(E/a),m.push(S/r)}for(let S=1;S<=r;S++)for(let E=1;E<=a;E++){const T=(a+1)*S+E-1,g=(a+1)*(S-1)+E-1,v=(a+1)*(S-1)+E,D=(a+1)*S+E;u.push(T,g,D),u.push(g,v,D)}this.setIndex(u),this.setAttribute("position",new Yt(f,3)),this.setAttribute("normal",new Yt(p,3)),this.setAttribute("uv",new Yt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ol(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class af extends Sn{constructor(e=1,n=.4,r=64,a=8,c=2,u=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:e,tube:n,tubularSegments:r,radialSegments:a,p:c,q:u},r=Math.floor(r),a=Math.floor(a);const f=[],p=[],m=[],_=[],x=new q,y=new q,S=new q,E=new q,T=new q,g=new q,v=new q;for(let N=0;N<=r;++N){const A=N/r*c*Math.PI*2;D(A,c,u,e,S),D(A+.01,c,u,e,E),g.subVectors(E,S),v.addVectors(E,S),T.crossVectors(g,v),v.crossVectors(T,g),T.normalize(),v.normalize();for(let j=0;j<=a;++j){const k=j/a*Math.PI*2,U=-n*Math.cos(k),B=n*Math.sin(k);x.x=S.x+(U*v.x+B*T.x),x.y=S.y+(U*v.y+B*T.y),x.z=S.z+(U*v.z+B*T.z),p.push(x.x,x.y,x.z),y.subVectors(x,S).normalize(),m.push(y.x,y.y,y.z),_.push(N/r),_.push(j/a)}}for(let N=1;N<=r;N++)for(let A=1;A<=a;A++){const j=(a+1)*(N-1)+(A-1),k=(a+1)*N+(A-1),U=(a+1)*N+A,B=(a+1)*(N-1)+A;f.push(j,k,B),f.push(k,U,B)}this.setIndex(f),this.setAttribute("position",new Yt(p,3)),this.setAttribute("normal",new Yt(m,3)),this.setAttribute("uv",new Yt(_,2));function D(N,A,j,k,U){const B=Math.cos(N),P=Math.sin(N),C=j/A*N,z=Math.cos(C);U.x=k*(2+z)*.5*B,U.y=k*(2+z)*P*.5,U.z=k*Math.sin(C)*.5}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new af(e.radius,e.tube,e.tubularSegments,e.radialSegments,e.p,e.q)}}class kE extends Sn{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){const n=[],r=new Set,a=new q,c=new q;if(e.index!==null){const u=e.attributes.position,f=e.index;let p=e.groups;p.length===0&&(p=[{start:0,count:f.count,materialIndex:0}]);for(let m=0,_=p.length;m<_;++m){const x=p[m],y=x.start,S=x.count;for(let E=y,T=y+S;E<T;E+=3)for(let g=0;g<3;g++){const v=f.getX(E+g),D=f.getX(E+(g+1)%3);a.fromBufferAttribute(u,v),c.fromBufferAttribute(u,D),Xm(a,c,r)===!0&&(n.push(a.x,a.y,a.z),n.push(c.x,c.y,c.z))}}}else{const u=e.attributes.position;for(let f=0,p=u.count/3;f<p;f++)for(let m=0;m<3;m++){const _=3*f+m,x=3*f+(m+1)%3;a.fromBufferAttribute(u,_),c.fromBufferAttribute(u,x),Xm(a,c,r)===!0&&(n.push(a.x,a.y,a.z),n.push(c.x,c.y,c.z))}}this.setAttribute("position",new Yt(n,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}function Xm(s,e,n){const r=`${s.x},${s.y},${s.z}-${e.x},${e.y},${e.z}`,a=`${e.x},${e.y},${e.z}-${s.x},${s.y},${s.z}`;return n.has(r)===!0||n.has(a)===!0?!1:(n.add(r),n.add(a),!0)}class FE{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Ym(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=Ym();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}}function Ym(){return performance.now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:$d}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=$d);function OE({theme:s="dark"}){const e=Ct.useRef(null),[n,r]=Ct.useState("geodesic"),[a,c]=Ct.useState({rx:"0.24",ry:"0.58",zoom:"1.00"}),u=Ct.useRef(n);return Ct.useEffect(()=>{u.current=n},[n]),Ct.useEffect(()=>{const f=e.current;if(!f)return;const p=window.matchMedia("(prefers-reduced-motion: reduce)").matches,m=new IE,_=f.clientWidth||520,x=f.clientHeight||480,y=new Zn(42,_/x,.1,100);y.position.set(0,0,6.2);const S=new LE({antialias:!0,alpha:!0,powerPreference:"high-performance"});S.setSize(_,x),S.setPixelRatio(Math.min(window.devicePixelRatio,2)),f.innerHTML="",f.appendChild(S.domElement);const E=s==="dark",T=E?13041469:5078031,g=E?15592941:1579040,v=E?3684426:12105901,D=new Fs;m.add(D);const N=new sf(1.62,1),A=new jm(N),j=new Nl({color:g,transparent:!0,opacity:E?.34:.45}),k=new id(A,j);D.add(k);const U=new Xd({color:T,size:.055,transparent:!0,opacity:.95}),B=new Gm(N,U);D.add(B);const P=new Fs;D.add(P);const C=qe=>{for(;P.children.length>0;){const ze=P.children[0];ze.geometry&&ze.geometry.dispose(),ze.material&&ze.material.dispose(),P.remove(ze)}let V;qe==="tesseract"?V=new Zr(1.35,1.35,1.35,2,2,2):qe==="manifold"?V=new af(.68,.2,64,12,2,3):V=new of(.98,1);const Bt=new Oo({color:E?723727:16185074,transparent:!0,opacity:.72,polygonOffset:!0,polygonOffsetFactor:1,polygonOffsetUnits:1}),rt=new Jn(V,Bt);P.add(rt);const at=new kE(V),$e=new Nl({color:T,transparent:!0,opacity:E?.88:.95}),Et=new id(at,$e);if(P.add(Et),qe==="tesseract"){const ze=new jm(new Zr(.68,.68,.68)),L=new Nl({color:g,transparent:!0,opacity:.75});P.add(new id(ze,L))}};C(u.current);const z=new Oo({color:T,wireframe:!0,transparent:!0,opacity:.35}),oe=new Oo({color:v,wireframe:!0,transparent:!0,opacity:.45}),J=new Jn(new Ol(2.15,.008,8,96),z);J.rotation.x=Math.PI/2.6,J.rotation.y=Math.PI/8,D.add(J);const de=new Jn(new Ol(2.42,.006,6,80),oe);de.rotation.x=-Math.PI/3.2,de.rotation.y=-Math.PI/5,D.add(de);const he=140,ae=new Float32Array(he*3);for(let qe=0;qe<he;qe++){const V=2.3+Math.random()*1.9,Bt=Math.random()*Math.PI*2,rt=Math.acos(2*Math.random()-1);ae[qe*3]=V*Math.sin(rt)*Math.cos(Bt),ae[qe*3+1]=V*Math.sin(rt)*Math.sin(Bt),ae[qe*3+2]=V*Math.cos(rt)}const ce=new Sn;ce.setAttribute("position",new hi(ae,3));const H=new Xd({color:T,size:.032,transparent:!0,opacity:.65}),le=new Gm(ce,H);m.add(le);let re=.35,F=.55,ie=!1,De={x:0,y:0},Z=u.current;const ue=qe=>{const V=f.getBoundingClientRect(),Bt=(qe.clientX-V.left)/V.width*2-1,rt=-((qe.clientY-V.top)/V.height)*2+1;if(ie){const at=qe.clientX-De.x,$e=qe.clientY-De.y;F+=at*.012,re+=$e*.012,De={x:qe.clientX,y:qe.clientY}}else F=Bt*.85,re=rt*.55},Se=qe=>{ie=!0,De={x:qe.clientX,y:qe.clientY}},ve=()=>{ie=!1};window.addEventListener("pointermove",ue,{passive:!0}),f.addEventListener("pointerdown",Se),window.addEventListener("pointerup",ve);const Ae=()=>{if(!f)return;const qe=f.clientWidth||500,V=f.clientHeight||460;y.aspect=qe/V,y.updateProjectionMatrix(),S.setSize(qe,V)};window.addEventListener("resize",Ae);let Le,Ke=0;const wt=new FE,dt=()=>{Le=requestAnimationFrame(dt);const qe=wt.getElapsedTime();if(u.current!==Z&&(Z=u.current,C(Z)),!p){D.rotation.y+=.0038+(F-D.rotation.y)*.04,D.rotation.x+=(re-D.rotation.x)*.04,P.rotation.y=-qe*.45,P.rotation.z=qe*.25,J.rotation.z=qe*.32,de.rotation.z=-qe*.22,le.rotation.y=qe*.08,le.rotation.x=Math.sin(qe*.2)*.12;const V=1+Math.sin(qe*2.2)*.035;P.scale.set(V,V,V)}S.render(m,y),Ke++,Ke%15===0&&c({rx:D.rotation.x.toFixed(2),ry:(D.rotation.y%(Math.PI*2)).toFixed(2),zoom:"1.00"})};return dt(),()=>{cancelAnimationFrame(Le),window.removeEventListener("pointermove",ue),f.removeEventListener("pointerdown",Se),window.removeEventListener("pointerup",ve),window.removeEventListener("resize",Ae),S.dispose()}},[s]),R.jsxs("div",{className:"relative w-full h-[380px] sm:h-[450px] lg:h-[520px] rounded-lg border border-[#DCDCD4] dark:border-line bg-white/50 dark:bg-surface/60 backdrop-blur-sm overflow-hidden select-none group",children:[R.jsx("span",{className:"pointer-events-none absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-lime-dark dark:border-lime z-10"}),R.jsx("span",{className:"pointer-events-none absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-lime-dark dark:border-lime z-10"}),R.jsx("span",{className:"pointer-events-none absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-lime-dark dark:border-lime z-10"}),R.jsx("span",{className:"pointer-events-none absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-lime-dark dark:border-lime z-10"}),R.jsxs("div",{className:"absolute top-3 left-3.5 right-3.5 flex items-center justify-between font-mono text-[11px] text-[#767685] dark:text-subtle z-10 pointer-events-none",children:[R.jsxs("div",{className:"flex items-center gap-2",children:[R.jsx("span",{className:"inline-block w-2 h-2 rounded-full bg-lime-dark dark:bg-lime animate-pulse"}),R.jsx("span",{children:"WEBGL_3D // INTERACTIVE_MESH"})]}),R.jsx("span",{className:"hidden sm:inline",children:"DRAG OR HOVER TO ORBIT"})]}),R.jsx("div",{ref:e,className:"w-full h-full cursor-grab active:cursor-grabbing",role:"img","aria-label":"Interactive 3D wireframe architectural core that responds to cursor movement"}),R.jsxs("div",{className:"absolute bottom-3 left-3.5 right-3.5 flex flex-wrap items-center justify-between gap-2 z-10",children:[R.jsxs("div",{className:"font-mono text-[11px] text-[#525260] dark:text-muted bg-[#ECECE6]/90 dark:bg-obsidian/85 px-2.5 py-1 rounded border border-[#DCDCD4] dark:border-line",children:[R.jsxs("span",{children:["PITCH: ",a.rx]}),R.jsx("span",{className:"mx-2 text-[#767685] dark:text-subtle",children:"|"}),R.jsxs("span",{children:["YAW: ",a.ry]})]}),R.jsx("div",{className:"flex items-center gap-1 bg-[#ECECE6]/90 dark:bg-obsidian/85 p-1 rounded border border-[#DCDCD4] dark:border-line",role:"group","aria-label":"Switch 3D geometry mode",children:[{id:"geodesic",label:"CORE"},{id:"tesseract",label:"CUBE"},{id:"manifold",label:"TORUS"}].map(f=>R.jsx("button",{type:"button",onClick:()=>r(f.id),className:`font-mono text-[10px] px-2 py-0.5 rounded transition-colors ${n===f.id?"bg-lime text-obsidian font-semibold":"text-[#525260] dark:text-muted hover:text-[#111116] dark:hover:text-offwhite"}`,children:f.label},f.id))})]})]})}function Ll({children:s,className:e="",intensity:n=7,as:r="div"}){const a=Ct.useRef(null),[c,u]=Ct.useState(""),[f,p]=Ct.useState({x:"50%",y:"0%",opacity:0}),m=x=>{if(!a.current||window.matchMedia("(prefers-reduced-motion: reduce)").matches)return;const y=a.current.getBoundingClientRect(),S=x.clientX-y.left,E=x.clientY-y.top,T=y.width/2,g=y.height/2,v=((E-g)/g*-n).toFixed(2),D=((S-T)/T*n).toFixed(2);u(`perspective(1000px) rotateX(${v}deg) rotateY(${D}deg) scale3d(1.01, 1.01, 1.01)`),p({x:`${S}px`,y:`${E}px`,opacity:1})},_=()=>{u("perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)"),p(x=>({...x,opacity:0}))};return R.jsxs(r,{ref:a,onMouseMove:m,onMouseLeave:_,style:{transform:c,transformStyle:"preserve-3d",transition:"transform 260ms cubic-bezier(0.16, 1, 0.3, 1)"},className:`relative overflow-hidden ${e}`,children:[R.jsx("div",{"aria-hidden":"true",className:"pointer-events-none absolute inset-0 transition-opacity duration-300 z-0",style:{opacity:f.opacity,background:`radial-gradient(380px circle at ${f.x} ${f.y}, rgba(198, 255, 61, 0.11), transparent 65%)`}}),R.jsx("div",{className:"relative z-10 h-full flex flex-col justify-between",style:{transform:"translateZ(16px)"},children:s})]})}function zE({name:s,photoUrl:e}){const[n,r]=Ct.useState("portrait");return R.jsxs(Ll,{intensity:9,as:"figure",className:"p-3.5 rounded-lg border border-[#DCDCD4] dark:border-line bg-white/75 dark:bg-surface/80",children:[R.jsx("span",{className:"pointer-events-none absolute top-0 left-0 w-2.5 h-2.5 border-t-2 border-l-2 border-lime-dark dark:border-lime"}),R.jsx("span",{className:"pointer-events-none absolute top-0 right-0 w-2.5 h-2.5 border-t-2 border-r-2 border-lime-dark dark:border-lime"}),R.jsx("span",{className:"pointer-events-none absolute bottom-0 left-0 w-2.5 h-2.5 border-b-2 border-l-2 border-lime-dark dark:border-lime"}),R.jsx("span",{className:"pointer-events-none absolute bottom-0 right-0 w-2.5 h-2.5 border-b-2 border-r-2 border-lime-dark dark:border-lime"}),R.jsxs("div",{className:"flex items-center justify-between pb-2.5 mb-2.5 border-b border-[#DCDCD4] dark:border-line font-mono text-[11px] text-[#767685] dark:text-subtle",children:[R.jsx("span",{children:"ID // FS-ARCHITECT"}),!e&&R.jsxs("div",{className:"flex gap-1",children:[R.jsx("button",{type:"button",onClick:()=>r("portrait"),className:`px-1.5 py-0.5 rounded text-[10px] transition-colors ${n==="portrait"?"bg-lime text-obsidian font-semibold":"hover:text-[#111116] dark:hover:text-offwhite"}`,children:"AVATAR"}),R.jsx("button",{type:"button",onClick:()=>r("layers"),className:`px-1.5 py-0.5 rounded text-[10px] transition-colors ${n==="layers"?"bg-lime text-obsidian font-semibold":"hover:text-[#111116] dark:hover:text-offwhite"}`,children:"3D_STACK"})]})]}),e?R.jsx("img",{src:e,alt:`Portrait of ${s}`,className:"w-full aspect-[4/4.3] object-cover rounded border border-[#DCDCD4] dark:border-line grayscale-[15%] contrast-105",loading:"lazy"}):n==="portrait"?R.jsxs("div",{role:"img","aria-label":`Portrait placeholder for ${s}`,className:"relative w-full aspect-[4/4.2] rounded border border-dashed border-[#C2C2B8] dark:border-line-strong bg-[#ECECE6]/70 dark:bg-obsidian/80 flex flex-col items-center justify-center overflow-hidden",children:[R.jsxs("svg",{viewBox:"0 0 240 260",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"w-4/5 h-auto text-[#111116] dark:text-offwhite","aria-hidden":"true",children:[R.jsx("line",{x1:"0",y1:"65",x2:"240",y2:"65",stroke:"currentColor",strokeOpacity:"0.12",strokeDasharray:"3 3"}),R.jsx("line",{x1:"0",y1:"195",x2:"240",y2:"195",stroke:"currentColor",strokeOpacity:"0.12",strokeDasharray:"3 3"}),R.jsx("line",{x1:"120",y1:"0",x2:"120",y2:"260",stroke:"currentColor",strokeOpacity:"0.12",strokeDasharray:"3 3"}),R.jsx("polygon",{points:"120,28 190,68 190,148 120,188 50,148 50,68",stroke:"currentColor",strokeOpacity:"0.2",strokeWidth:"1"}),R.jsx("circle",{cx:"120",cy:"110",r:"64",stroke:"currentColor",strokeOpacity:"0.16"}),R.jsx("circle",{cx:"120",cy:"92",r:"26",stroke:"currentColor",strokeWidth:"1.5",strokeOpacity:"0.65"}),R.jsx("path",{d:"M68 190C74 154 94 138 120 138C146 138 166 154 172 190",stroke:"currentColor",strokeWidth:"1.5",strokeOpacity:"0.65",strokeLinecap:"round"}),R.jsx("circle",{cx:"120",cy:"28",r:"3",fill:"#C6FF3D"}),R.jsx("circle",{cx:"190",cy:"68",r:"3",fill:"#C6FF3D"}),R.jsx("circle",{cx:"50",cy:"148",r:"3",fill:"#C6FF3D"})]}),R.jsxs("div",{className:"absolute bottom-2.5 inset-x-3 flex items-center justify-between font-mono text-[10px] text-[#767685] dark:text-subtle",children:[R.jsx("span",{children:"PHOTO_SLOT // 4:5"}),R.jsx("span",{className:"text-lime-dark dark:text-lime",children:"EDIT IN portfolioData.js"})]})]}):R.jsx("div",{role:"img","aria-label":"3D layered stack architecture diagram",className:"relative w-full aspect-[4/4.2] rounded border border-[#C2C2B8] dark:border-line-strong bg-[#ECECE6]/70 dark:bg-obsidian/80 flex flex-col items-center justify-center p-4 overflow-hidden",children:R.jsx("div",{className:"w-full max-w-[210px] space-y-3 perspective-1000",children:[{layer:"L4 // UI_VIEWPORT",tech:"React + Three.js",z:"translate-y-0"},{layer:"L3 // API_GATEWAY",tech:"Node.js + GraphQL",z:"translate-y-0.5"},{layer:"L2 // WORKER_RUNTIME",tech:"Python + FastAPI",z:"translate-y-1"},{layer:"L1 // ACID_STORAGE",tech:"PostgreSQL + Redis",z:"translate-y-1.5"}].map((a,c)=>R.jsxs("div",{className:`p-2.5 rounded border border-[#DCDCD4] dark:border-line-strong bg-white/90 dark:bg-panel/90 shadow-sm transform -skew-x-6 hover:skew-x-0 hover:border-lime-dark dark:hover:border-lime transition-all duration-300 ${a.z}`,children:[R.jsxs("div",{className:"flex items-center justify-between font-mono text-[10px] text-[#767685] dark:text-subtle",children:[R.jsx("span",{children:a.layer}),R.jsxs("span",{className:"text-lime-dark dark:text-lime",children:["0",c+1]})]}),R.jsx("div",{className:"font-mono text-xs font-semibold text-[#111116] dark:text-offwhite mt-0.5",children:a.tech})]},a.layer))})}),R.jsxs("figcaption",{className:"flex items-center justify-between pt-3 font-mono text-xs text-[#111116] dark:text-offwhite",children:[R.jsx("span",{className:"font-semibold tracking-tight",children:s.toUpperCase()}),R.jsx("span",{className:"text-[#767685] dark:text-subtle text-[11px]",children:"SYS_ONLINE"})]})]})}function BE(){const s=Ct.useRef(null),e=Ct.useRef(null),n=Ct.useRef(null);return Ct.useEffect(()=>{const r=window.matchMedia("(prefers-reduced-motion: reduce)").matches,a=window.matchMedia("(pointer: fine)").matches;if(r||!a)return;let c=window.innerWidth/2,u=window.innerHeight/2,f=c,p=u,m=!1;const _=S=>{c=S.clientX,u=S.clientY,m||(m=!0,f=c,p=u,s.current&&(s.current.style.opacity="1")),e.current&&(e.current.style.transform=`translate3d(${c-3}px, ${u-3}px, 0)`),s.current&&(s.current.style.transform=`translate3d(${c-280}px, ${u-280}px, 0)`)};window.addEventListener("mousemove",_,{passive:!0});let x;const y=()=>{f+=(c-f)*.18,p+=(u-p)*.18,n.current&&m&&(n.current.style.transform=`translate3d(${f-15}px, ${p-15}px, 0)`),x=requestAnimationFrame(y)};return x=requestAnimationFrame(y),()=>{window.removeEventListener("mousemove",_),cancelAnimationFrame(x)}},[]),R.jsxs(R.Fragment,{children:[R.jsx("div",{ref:s,"aria-hidden":"true",className:"pointer-events-none fixed top-0 left-0 w-[560px] h-[560px] rounded-full opacity-0 transition-opacity duration-500 -z-10 hidden md:block",style:{background:"radial-gradient(circle, rgba(198, 255, 61, 0.055) 0%, rgba(198, 255, 61, 0.015) 38%, transparent 70%)"}}),R.jsx("div",{ref:e,"aria-hidden":"true",className:"pointer-events-none fixed top-0 left-0 w-1.5 h-1.5 rounded-full bg-lime-dark dark:bg-lime z-[9998] hidden md:block -translate-x-24 -translate-y-24"}),R.jsx("div",{ref:n,"aria-hidden":"true",className:"pointer-events-none fixed top-0 left-0 w-[30px] h-[30px] rounded-full border border-lime-dark/40 dark:border-lime/40 z-[9997] hidden md:block -translate-x-24 -translate-y-24"})]})}const qm=[{id:"home",idx:"00",label:"Home"},{id:"about",idx:"01",label:"About"},{id:"skills",idx:"02",label:"Skills"},{id:"projects",idx:"03",label:"Work"},{id:"experience",idx:"04",label:"Resume"},{id:"contact",idx:"05",label:"Contact"}];function HE(){const[s,e]=Ct.useState(()=>{try{return localStorage.getItem("dm_portfolio_theme")||"dark"}catch{return"dark"}}),[n,r]=Ct.useState("home"),[a,c]=Ct.useState(!1),[u,f]=Ct.useState(vt.utcOffset),[p,m]=Ct.useState(!1),[_,x]=Ct.useState({name:"",email:"",message:""}),[y,S]=Ct.useState("");Ct.useEffect(()=>{const g=document.documentElement;s==="dark"?g.classList.add("dark"):g.classList.remove("dark");try{localStorage.setItem("dm_portfolio_theme",s)}catch{}},[s]),Ct.useEffect(()=>{const g=()=>{try{const D=new Intl.DateTimeFormat("en-GB",{timeZone:vt.timezone,hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!1}).format(new Date);f(`${D} ${vt.utcOffset}`)}catch{f(vt.utcOffset)}};g();const v=setInterval(g,1e3);return()=>clearInterval(v)},[]),Ct.useEffect(()=>{const g=document.querySelectorAll("main section[id]"),v=new IntersectionObserver(A=>{A.forEach(j=>{j.isIntersecting&&r(j.target.id)})},{rootMargin:"-30% 0px -55% 0px",threshold:0});g.forEach(A=>v.observe(A));const D=document.querySelectorAll(".reveal-section"),N=new IntersectionObserver((A,j)=>{A.forEach(k=>{k.isIntersecting&&(k.target.classList.add("is-visible"),j.unobserve(k.target))})},{rootMargin:"0px 0px -8% 0px",threshold:.08});return D.forEach(A=>N.observe(A)),()=>{v.disconnect(),N.disconnect()}},[]);const E=async()=>{try{await navigator.clipboard.writeText(vt.links.email),m(!0),setTimeout(()=>m(!1),2200)}catch{}},T=g=>{g.preventDefault();const{name:v,email:D,message:N}=_;if(!v.trim()||!D.trim()||!N.trim()){S("// ERR: Please complete all required fields.");return}if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(D.trim())){S("// ERR: Please enter a valid email address.");return}S("// STATUS: Payload verified. Opening mail client...");const j=encodeURIComponent(`Portfolio Inquiry from ${v.trim()}`),k=encodeURIComponent(`Name: ${v.trim()}
Email: ${D.trim()}

Message:
${N.trim()}`);setTimeout(()=>{window.location.href=`mailto:${vt.links.email}?subject=${j}&body=${k}`,S("// TRANSMITTED: Message ready to send!"),x({name:"",email:"",message:""})},350)};return R.jsxs("div",{id:"top",className:"min-h-screen relative",children:[R.jsx("a",{href:"#main-content",className:"sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999] focus:bg-lime focus:text-obsidian focus:font-mono focus:text-xs focus:font-semibold focus:px-4 focus:py-2 focus:rounded",children:"Skip to main content"}),R.jsx("div",{className:"fixed inset-0 pointer-events-none bg-engineered-grid -z-30","aria-hidden":"true"}),R.jsx("div",{className:"fixed inset-0 pointer-events-none bg-film-grain -z-20","aria-hidden":"true"}),R.jsx(BE,{}),R.jsxs("header",{className:"sticky top-0 z-50 h-[68px] border-b border-[#DCDCD4] dark:border-line bg-[#F6F6F2]/85 dark:bg-obsidian/80 backdrop-blur-md",children:[R.jsxs("div",{className:"max-w-[1120px] mx-auto px-6 h-full flex items-center justify-between gap-4",children:[R.jsxs("a",{href:"#home",className:"inline-flex items-center gap-2 font-mono text-sm font-semibold group","aria-label":`${vt.name} — Home`,children:[R.jsxs("span",{className:"inline-flex items-center justify-center w-7 h-7 rounded border border-[#C2C2B8] dark:border-line-strong bg-[#ECECE6] dark:bg-surface text-xs font-bold",children:["DM",R.jsx("span",{className:"w-1 h-1 rounded-full bg-lime-dark dark:bg-lime ml-0.5"})]}),R.jsx("span",{className:"text-[#767685] dark:text-subtle",children:"/"}),R.jsx("span",{className:"text-[#525260] dark:text-muted group-hover:text-[#111116] dark:group-hover:text-offwhite transition-colors",children:"dushmin.dev"})]}),R.jsx("nav",{"aria-label":"Primary Navigation",className:"hidden md:block",children:R.jsx("ul",{className:"flex items-center gap-1",children:qm.map(g=>{const v=n===g.id;return R.jsx("li",{children:R.jsxs("a",{href:`#${g.id}`,"aria-current":v?"page":void 0,className:`inline-flex items-center gap-1.5 px-3 py-1.5 rounded font-mono text-xs border transition-all ${v?"border-[#C2C2B8] dark:border-line-strong bg-[#ECECE6] dark:bg-surface text-[#111116] dark:text-offwhite":"border-transparent text-[#525260] dark:text-muted hover:text-[#111116] dark:hover:text-offwhite hover:bg-[#ECECE6]/60 dark:hover:bg-surface/60"}`,children:[R.jsx("span",{className:`text-[11px] ${v?"text-lime-dark dark:text-lime font-semibold":"text-[#767685] dark:text-subtle"}`,children:g.idx}),R.jsx("span",{children:g.label})]})},g.id)})})}),R.jsxs("div",{className:"flex items-center gap-2",children:[R.jsxs("button",{type:"button",onClick:()=>e(s==="dark"?"light":"dark"),"aria-label":`Switch to ${s==="dark"?"light":"dark"} theme`,className:"inline-flex items-center gap-2 px-2.5 py-1.5 rounded border border-[#DCDCD4] dark:border-line bg-[#ECECE6] dark:bg-surface font-mono text-xs text-[#525260] dark:text-muted hover:border-lime-dark dark:hover:border-lime hover:text-[#111116] dark:hover:text-offwhite transition-colors",children:[s==="dark"?R.jsx(R_,{className:"w-3.5 h-3.5"}):R.jsx(C_,{className:"w-3.5 h-3.5"}),R.jsx("span",{children:s.toUpperCase()})]}),R.jsx("button",{type:"button",onClick:()=>c(!a),"aria-expanded":a,"aria-label":"Toggle navigation menu",className:"md:hidden inline-flex items-center justify-center w-9 h-9 rounded border border-[#DCDCD4] dark:border-line bg-[#ECECE6] dark:bg-surface text-[#111116] dark:text-offwhite",children:a?R.jsx(P_,{className:"w-4 h-4"}):R.jsx(A_,{className:"w-4 h-4"})})]})]}),a&&R.jsx("nav",{"aria-label":"Mobile Navigation",className:"md:hidden border-b border-[#DCDCD4] dark:border-line bg-[#F6F6F2] dark:bg-obsidian px-6 py-4",children:R.jsx("ul",{className:"flex flex-col gap-1.5",children:qm.map(g=>R.jsx("li",{children:R.jsxs("a",{href:`#${g.id}`,onClick:()=>c(!1),className:`flex items-center gap-2.5 px-3 py-2.5 rounded font-mono text-xs border ${n===g.id?"border-[#C2C2B8] dark:border-line-strong bg-[#ECECE6] dark:bg-surface text-[#111116] dark:text-offwhite":"border-transparent text-[#525260] dark:text-muted"}`,children:[R.jsx("span",{className:"text-lime-dark dark:text-lime",children:g.idx}),R.jsx("span",{children:g.label})]})},g.id))})})]}),R.jsxs("main",{id:"main-content",children:[R.jsxs("section",{id:"home","aria-labelledby":"hero-heading",className:"relative min-h-[calc(100vh-68px)] flex items-center py-12 lg:py-16 border-b border-[#DCDCD4] dark:border-line section-crosshair overflow-hidden",children:[R.jsx("div",{"aria-hidden":"true",className:"pointer-events-none absolute top-10 right-[8%] w-[320px] sm:w-[480px] h-[320px] sm:h-[480px] rounded-full blur-[90px] animate-pulse-glow -z-10",style:{background:"radial-gradient(circle, rgba(198,255,61,0.20) 0%, rgba(90,120,255,0.06) 50%, transparent 72%)"}}),R.jsxs("div",{className:"max-w-[1120px] mx-auto px-6 w-full flex flex-col justify-between gap-10",children:[R.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-4 pb-5 border-b border-[#DCDCD4] dark:border-line",children:[R.jsxs("div",{className:"inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-[#C2C2B8] dark:border-line-strong bg-[#ECECE6] dark:bg-surface font-mono text-xs",children:[R.jsxs("span",{className:"relative flex h-2 w-2",children:[R.jsx("span",{className:"animate-ping absolute inline-flex h-full w-full rounded-full bg-lime opacity-75"}),R.jsx("span",{className:"relative inline-flex rounded-full h-2 w-2 bg-lime-dark dark:bg-lime"})]}),R.jsx("span",{children:vt.availabilityText})]}),R.jsxs("div",{className:"inline-flex items-center gap-2 font-mono text-xs text-[#525260] dark:text-muted",children:[R.jsx("span",{className:"text-[#767685] dark:text-subtle",children:"// LOC:"}),R.jsx("span",{children:vt.location}),R.jsx("span",{className:"text-[#767685] dark:text-subtle",children:"·"}),R.jsx("span",{className:"text-[#767685] dark:text-subtle",children:u})]})]}),R.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-10 items-center",children:[R.jsxs("div",{className:"lg:col-span-7 space-y-6",children:[R.jsxs("p",{className:"font-mono text-xs tracking-wider text-[#767685] dark:text-subtle",children:[R.jsx("span",{className:"text-lime-dark dark:text-lime font-semibold",children:"//"})," 00 — SYSTEM_INIT / 3D_ENGINEERED_PORTFOLIO"]}),R.jsxs("h1",{id:"hero-heading",className:"text-4xl sm:text-6xl lg:text-[4.25rem] font-extrabold tracking-[-0.04em] leading-[1.03]",children:[R.jsx("span",{className:"block text-[#111116] dark:text-offwhite",children:vt.name}),R.jsxs("span",{className:"block text-[#525260] dark:text-muted font-semibold mt-1",children:[vt.role,R.jsx("span",{className:"text-lime-dark dark:text-lime",children:"."})]})]}),R.jsx("p",{className:"text-base sm:text-lg text-[#525260] dark:text-muted max-w-[54ch] leading-relaxed",children:vt.tagline}),R.jsxs("div",{className:"flex flex-wrap items-center gap-3.5 pt-2",children:[R.jsxs("a",{href:"#projects",className:"inline-flex items-center gap-2.5 px-6 py-3.5 rounded bg-lime text-obsidian font-mono text-xs font-semibold hover:-translate-y-0.5 hover:shadow-[0_10px_28px_-6px_rgba(198,255,61,0.35)] transition-all",children:[R.jsx("span",{children:"View Projects"}),R.jsx(x_,{className:"w-4 h-4"})]}),R.jsxs("a",{href:"#contact",className:"inline-flex items-center gap-2.5 px-6 py-3.5 rounded border border-[#C2C2B8] dark:border-line-strong bg-[#ECECE6] dark:bg-surface font-mono text-xs font-semibold hover:border-lime-dark dark:hover:border-lime hover:-translate-y-0.5 transition-all",children:[R.jsx("span",{children:"Contact Me"}),R.jsx("span",{className:"text-[#767685] dark:text-subtle font-normal",children:"// 05"})]})]})]}),R.jsx("div",{className:"lg:col-span-5",children:R.jsx(OE,{theme:s})})]}),R.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-[#DCDCD4] dark:border-line",children:[R.jsxs("div",{className:"flex flex-wrap items-center gap-3",children:[R.jsx("span",{className:"font-mono text-xs text-[#767685] dark:text-subtle",children:"// CORE_STACK"}),R.jsx("ul",{className:"flex flex-wrap gap-1.5","aria-label":"Core Tech Stack",children:vt.coreStack.map(g=>R.jsx("li",{className:"font-mono text-xs px-2.5 py-1 rounded border border-[#DCDCD4] dark:border-line bg-[#ECECE6] dark:bg-surface",children:g},g))})]}),R.jsxs("div",{className:"flex items-center gap-5 font-mono text-xs",children:[R.jsx("span",{className:"text-[#767685] dark:text-subtle hidden sm:inline",children:"// CHANNELS"}),R.jsx("a",{href:vt.links.github,target:"_blank",rel:"noopener noreferrer",className:"text-[#525260] dark:text-muted hover:text-lime-dark dark:hover:text-lime transition-colors",children:"GitHub ↗"}),R.jsx("a",{href:vt.links.linkedin,target:"_blank",rel:"noopener noreferrer",className:"text-[#525260] dark:text-muted hover:text-lime-dark dark:hover:text-lime transition-colors",children:"LinkedIn ↗"}),R.jsx("a",{href:`mailto:${vt.links.email}`,className:"text-[#525260] dark:text-muted hover:text-lime-dark dark:hover:text-lime transition-colors",children:"Email ↗"})]})]})]})]}),R.jsx("section",{id:"about","aria-labelledby":"about-heading",className:"py-24 border-b border-[#DCDCD4] dark:border-line section-crosshair",children:R.jsxs("div",{className:"max-w-[1120px] mx-auto px-6",children:[R.jsxs("div",{className:"mb-14 reveal-section",children:[R.jsxs("div",{className:"inline-flex items-center gap-3 font-mono text-xs mb-3",children:[R.jsx("span",{className:"text-lime-dark dark:text-lime font-medium",children:"// about"}),R.jsx("span",{className:"px-2 py-0.5 rounded border border-[#DCDCD4] dark:border-line bg-[#ECECE6] dark:bg-surface text-[#767685] dark:text-subtle",children:"01 / profile"})]}),R.jsx("h2",{id:"about-heading",className:"text-3xl sm:text-4xl font-bold tracking-tight",children:"Engineered for clarity & scale."})]}),R.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-12",children:[R.jsxs("div",{className:"lg:col-span-7 space-y-5 reveal-section",children:[R.jsx("p",{className:"text-lg sm:text-xl font-medium leading-relaxed text-[#111116] dark:text-offwhite",children:vt.about.lead}),vt.about.paragraphs.map((g,v)=>R.jsx("p",{className:"text-[#525260] dark:text-muted leading-relaxed",children:g},v)),R.jsxs("div",{className:"mt-6 rounded-lg border border-[#DCDCD4] dark:border-line bg-[#ECECE6] dark:bg-surface overflow-hidden",children:[R.jsxs("div",{className:"flex items-center justify-between px-4 py-2 border-b border-[#DCDCD4] dark:border-line bg-black/5 dark:bg-black/25 font-mono text-xs text-[#767685] dark:text-subtle",children:[R.jsxs("div",{className:"flex items-center gap-2",children:[R.jsx("span",{className:"w-2 h-2 rounded-full bg-lime-dark dark:bg-lime"}),R.jsx("span",{children:"architecture.config.ts"})]}),R.jsx("span",{children:"READONLY"})]}),R.jsx("pre",{className:"p-4 font-mono text-xs leading-relaxed overflow-x-auto text-[#525260] dark:text-muted",children:R.jsxs("code",{children:[R.jsx("span",{className:"text-[#111116] dark:text-offwhite font-semibold",children:"export const"})," ","systemProfile = ",`{
`,"  ","stack: [",R.jsx("span",{className:"text-lime-dark dark:text-lime",children:'"React", "Node.js", "Python", "PostgreSQL"'}),"],",`
`,"  ",'principles: ["clean_contracts", "low_latency", "3D_craft"],',`
`,"  ","status:"," ",R.jsx("span",{className:"text-lime-dark dark:text-lime",children:'"ready_to_ship"'}),`
};`]})})]})]}),R.jsx("div",{className:"lg:col-span-5 max-w-sm lg:max-w-none reveal-section",children:R.jsx(zE,{name:vt.name,photoUrl:vt.about.photoUrl})})]}),R.jsx("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-5 reveal-section","aria-label":"Quick facts",children:vt.about.quickFacts.map(g=>R.jsxs(Ll,{intensity:6,as:"article",className:"p-6 rounded-lg border border-[#DCDCD4] dark:border-line bg-white/75 dark:bg-surface/75 hover:border-[#C2C2B8] dark:hover:border-line-strong",children:[R.jsxs("div",{className:"flex items-center justify-between font-mono text-xs mb-3",children:[R.jsx("span",{className:"text-[#767685] dark:text-subtle",children:g.id}),R.jsx("span",{className:"text-lime-dark dark:text-lime",children:g.label})]}),R.jsx("p",{className:"text-2xl font-bold tracking-tight mb-1.5",children:g.value}),R.jsx("p",{className:"text-sm text-[#525260] dark:text-muted leading-relaxed",children:g.description})]},g.id))})]})}),R.jsx("section",{id:"skills","aria-labelledby":"skills-heading",className:"py-24 border-b border-[#DCDCD4] dark:border-line section-crosshair",children:R.jsxs("div",{className:"max-w-[1120px] mx-auto px-6",children:[R.jsxs("div",{className:"mb-14 reveal-section",children:[R.jsxs("div",{className:"inline-flex items-center gap-3 font-mono text-xs mb-3",children:[R.jsx("span",{className:"text-lime-dark dark:text-lime font-medium",children:"// skills"}),R.jsx("span",{className:"px-2 py-0.5 rounded border border-[#DCDCD4] dark:border-line bg-[#ECECE6] dark:bg-surface text-[#767685] dark:text-subtle",children:"02 / stack"})]}),R.jsxs("div",{className:"flex flex-wrap items-end justify-between gap-4",children:[R.jsx("h2",{id:"skills-heading",className:"text-3xl sm:text-4xl font-bold tracking-tight",children:"Technical capabilities."}),R.jsx("p",{className:"text-sm text-[#525260] dark:text-muted max-w-md",children:"Grouped by architectural layer—focused on production reliability, type safety, and clean interfaces."})]})]}),R.jsx("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-6 reveal-section",children:vt.skills.map(g=>R.jsx(Ll,{intensity:5,className:"p-6 rounded-lg border border-[#DCDCD4] dark:border-line bg-white/75 dark:bg-surface/75",children:R.jsxs("div",{children:[R.jsxs("div",{className:"pb-4 mb-4 border-b border-[#DCDCD4] dark:border-line",children:[R.jsx("span",{className:"font-mono text-xs text-lime-dark dark:text-lime",children:g.id}),R.jsx("h3",{className:"text-lg font-bold mt-0.5",children:g.category}),R.jsx("span",{className:"font-mono text-[11px] text-[#767685] dark:text-subtle",children:g.meta})]}),R.jsx("ul",{className:"space-y-2","aria-label":`${g.category} skills`,children:g.items.map(v=>R.jsxs("li",{className:`flex items-center justify-between px-3.5 py-2.5 rounded border border-[#DCDCD4] dark:border-line bg-[#ECECE6]/70 dark:bg-obsidian/70 hover:border-lime-dark dark:hover:border-lime hover:translate-x-1 transition-all ${v.isCore?"border-l-2 border-l-lime-dark dark:border-l-lime":""}`,children:[R.jsx("span",{className:"text-sm font-medium",children:v.name}),R.jsx("span",{className:`font-mono text-[11px] ${v.isCore?"text-lime-dark dark:text-lime font-semibold":"text-[#767685] dark:text-subtle"}`,children:v.role})]},v.name))})]})},g.id))})]})}),R.jsx("section",{id:"projects","aria-labelledby":"projects-heading",className:"py-24 border-b border-[#DCDCD4] dark:border-line section-crosshair",children:R.jsxs("div",{className:"max-w-[1120px] mx-auto px-6",children:[R.jsxs("div",{className:"mb-14 reveal-section",children:[R.jsxs("div",{className:"inline-flex items-center gap-3 font-mono text-xs mb-3",children:[R.jsx("span",{className:"text-lime-dark dark:text-lime font-medium",children:"// work"}),R.jsx("span",{className:"px-2 py-0.5 rounded border border-[#DCDCD4] dark:border-line bg-[#ECECE6] dark:bg-surface text-[#767685] dark:text-subtle",children:"03 / projects"})]}),R.jsxs("div",{className:"flex flex-wrap items-end justify-between gap-4",children:[R.jsx("h2",{id:"projects-heading",className:"text-3xl sm:text-4xl font-bold tracking-tight",children:"Selected engineering work."}),R.jsx("p",{className:"text-sm text-[#525260] dark:text-muted max-w-md",children:"Hover any project card to inspect its 3D depth plane, architecture highlight, and source links."})]})]}),R.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6 reveal-section",children:vt.projects.map((g,v)=>R.jsxs(Ll,{intensity:6,as:"article",className:"p-7 rounded-lg border border-[#DCDCD4] dark:border-line bg-white/80 dark:bg-surface/80 hover:border-[#C2C2B8] dark:hover:border-line-strong group",children:[R.jsxs("div",{children:[R.jsxs("div",{className:"flex items-center justify-between font-mono text-xs mb-5",children:[R.jsxs("span",{className:"text-lime-dark dark:text-lime font-semibold",children:[g.index," / 0",vt.projects.length]}),R.jsx("span",{className:"text-[#767685] dark:text-subtle",children:g.category})]}),R.jsx("h3",{className:"text-xl font-bold tracking-tight mb-3 group-hover:text-lime-dark dark:group-hover:text-lime transition-colors",children:R.jsx("a",{href:g.liveUrl,target:"_blank",rel:"noopener noreferrer",children:g.title})}),R.jsx("p",{className:"text-sm text-[#525260] dark:text-muted leading-relaxed mb-4",children:g.description}),R.jsxs("div",{className:"p-3 rounded-r border-l-2 border-[#C2C2B8] dark:border-line-strong group-hover:border-lime-dark dark:group-hover:border-lime bg-[#ECECE6]/70 dark:bg-obsidian/70 text-xs text-[#525260] dark:text-muted mb-6 transition-colors",children:[R.jsx("span",{className:"font-mono text-lime-dark dark:text-lime font-semibold mr-2",children:"ARCH_NOTE:"}),R.jsx("span",{children:g.archHighlight})]})]}),R.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-[#DCDCD4] dark:border-line",children:[R.jsx("ul",{className:"flex flex-wrap gap-1.5","aria-label":`Technologies used in ${g.title}`,children:g.tags.map(D=>R.jsx("li",{className:"font-mono text-[11px] px-2 py-0.5 rounded border border-[#DCDCD4] dark:border-line bg-[#ECECE6] dark:bg-obsidian text-[#525260] dark:text-muted",children:D},D))}),R.jsxs("div",{className:"flex items-center gap-4 font-mono text-xs font-medium",children:[R.jsxs("a",{href:g.liveUrl,target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center gap-1 hover:text-lime-dark dark:hover:text-lime transition-colors","aria-label":`Live demo of ${g.title}`,children:[R.jsx("span",{children:"Live"}),R.jsx(E_,{className:"w-3.5 h-3.5"})]}),R.jsxs("a",{href:g.githubUrl,target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center gap-1 hover:text-lime-dark dark:hover:text-lime transition-colors","aria-label":`GitHub code for ${g.title}`,children:[R.jsx("span",{children:"GitHub"}),R.jsx(zp,{className:"w-3.5 h-3.5"})]})]})]})]},g.index))})]})}),R.jsx("section",{id:"experience","aria-labelledby":"experience-heading",className:"py-24 border-b border-[#DCDCD4] dark:border-line section-crosshair",children:R.jsxs("div",{className:"max-w-[1120px] mx-auto px-6",children:[R.jsxs("div",{className:"mb-14 reveal-section",children:[R.jsxs("div",{className:"inline-flex items-center gap-3 font-mono text-xs mb-3",children:[R.jsx("span",{className:"text-lime-dark dark:text-lime font-medium",children:"// resume"}),R.jsx("span",{className:"px-2 py-0.5 rounded border border-[#DCDCD4] dark:border-line bg-[#ECECE6] dark:bg-surface text-[#767685] dark:text-subtle",children:"04 / timeline"})]}),R.jsxs("div",{className:"flex flex-wrap items-end justify-between gap-4",children:[R.jsx("h2",{id:"experience-heading",className:"text-3xl sm:text-4xl font-bold tracking-tight",children:"Experience & education."}),R.jsxs("a",{href:vt.links.resumeUrl,download:"Dushmin_Maleesha_Resume.pdf",className:"inline-flex items-center gap-2.5 px-5 py-3 rounded border border-[#C2C2B8] dark:border-line-strong bg-[#ECECE6] dark:bg-surface font-mono text-xs font-semibold hover:border-lime-dark dark:hover:border-lime hover:-translate-y-0.5 transition-all",children:[R.jsx(M_,{className:"w-4 h-4 text-lime-dark dark:text-lime"}),R.jsx("span",{children:"Download Resume"}),R.jsx("span",{className:"text-[#767685] dark:text-subtle font-normal",children:".PDF"})]})]})]}),R.jsx("div",{className:"relative border-l border-[#C2C2B8] dark:border-line-strong ml-2 pl-7 space-y-10 reveal-section",children:vt.timeline.map((g,v)=>R.jsxs("article",{className:"relative grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8 items-start group",children:[R.jsx("span",{"aria-hidden":"true",className:`absolute -left-[33.5px] top-1.5 w-3 h-3 rounded-full border-2 transition-colors ${g.isCurrent?"border-lime-dark dark:border-lime bg-lime":"border-[#C2C2B8] dark:border-line-strong bg-[#F6F6F2] dark:bg-obsidian group-hover:border-lime-dark dark:group-hover:border-lime"}`}),R.jsxs("div",{className:"lg:col-span-3 flex flex-col items-start gap-1.5",children:[R.jsx("span",{className:"font-mono text-xs font-semibold",children:g.period}),R.jsx("span",{className:`font-mono text-[10px] px-2 py-0.5 rounded border ${g.isCurrent?"border-lime-dark dark:border-lime text-lime-dark dark:text-lime bg-lime/10":"border-[#DCDCD4] dark:border-line text-[#767685] dark:text-subtle bg-[#ECECE6] dark:bg-surface"}`,children:g.badge})]}),R.jsxs("div",{className:"lg:col-span-9 p-6 rounded-lg border border-[#DCDCD4] dark:border-line bg-white/75 dark:bg-surface/75",children:[R.jsxs("div",{className:"flex flex-wrap items-baseline justify-between gap-2 mb-2",children:[R.jsx("h3",{className:"text-lg font-bold",children:g.role}),R.jsx("span",{className:"font-mono text-xs text-[#525260] dark:text-muted",children:g.organization})]}),R.jsx("p",{className:"text-sm text-[#525260] dark:text-muted leading-relaxed",children:g.summary}),g.highlights.length>0&&R.jsx("ul",{className:"mt-4 space-y-2",children:g.highlights.map((D,N)=>R.jsxs("li",{className:"relative pl-4 text-sm text-[#525260] dark:text-muted",children:[R.jsx("span",{"aria-hidden":"true",className:"absolute left-0 font-mono font-bold text-lime-dark dark:text-lime",children:"›"}),D]},N))})]})]},v))})]})}),R.jsx("section",{id:"contact","aria-labelledby":"contact-heading",className:"py-24 border-b border-[#DCDCD4] dark:border-line",children:R.jsxs("div",{className:"max-w-[1120px] mx-auto px-6",children:[R.jsxs("div",{className:"mb-14 reveal-section",children:[R.jsxs("div",{className:"inline-flex items-center gap-3 font-mono text-xs mb-3",children:[R.jsx("span",{className:"text-lime-dark dark:text-lime font-medium",children:"// contact"}),R.jsx("span",{className:"px-2 py-0.5 rounded border border-[#DCDCD4] dark:border-line bg-[#ECECE6] dark:bg-surface text-[#767685] dark:text-subtle",children:"05 / initiate"})]}),R.jsx("h2",{id:"contact-heading",className:"text-3xl sm:text-4xl font-bold tracking-tight",children:"Let’s build something precise."})]}),R.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-12 items-start reveal-section",children:[R.jsxs("div",{className:"lg:col-span-5 space-y-7",children:[R.jsx("p",{className:"text-[#525260] dark:text-muted leading-relaxed",children:"Looking for a full-stack developer to architect a new product, optimize backend throughput, or build an interactive web experience? Reach out directly or send a message through the form."}),R.jsxs("div",{className:"p-5 rounded-lg border border-[#DCDCD4] dark:border-line bg-white/75 dark:bg-surface/75",children:[R.jsx("span",{className:"block font-mono text-[11px] text-[#767685] dark:text-subtle mb-2",children:"// DIRECT_TRANSMISSION"}),R.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-3",children:[R.jsx("a",{href:`mailto:${vt.links.email}`,className:"font-mono text-sm sm:text-base font-semibold hover:text-lime-dark dark:hover:text-lime break-all transition-colors",children:vt.links.email}),R.jsx("button",{type:"button",onClick:E,className:"inline-flex items-center gap-1.5 px-3 py-1.5 rounded border border-[#C2C2B8] dark:border-line-strong bg-[#ECECE6] dark:bg-obsidian font-mono text-xs font-semibold hover:border-lime-dark dark:hover:border-lime transition-colors",children:p?R.jsxs(R.Fragment,{children:[R.jsx(y_,{className:"w-3.5 h-3.5 text-lime-dark dark:text-lime"}),R.jsx("span",{children:"COPIED"})]}):R.jsxs(R.Fragment,{children:[R.jsx(S_,{className:"w-3.5 h-3.5"}),R.jsx("span",{children:"COPY"})]})})]})]}),R.jsxs("div",{children:[R.jsx("span",{className:"block font-mono text-[11px] text-[#767685] dark:text-subtle mb-2",children:"// NETWORK_NODES"}),R.jsxs("ul",{className:"border-t border-[#DCDCD4] dark:border-line divide-y divide-[#DCDCD4] dark:divide-line",children:[R.jsx("li",{children:R.jsxs("a",{href:vt.links.github,target:"_blank",rel:"noopener noreferrer",className:"flex items-center justify-between py-3.5 px-1 hover:pl-2.5 hover:text-lime-dark dark:hover:text-lime transition-all",children:[R.jsxs("span",{className:"inline-flex items-center gap-2 text-sm font-medium",children:[R.jsx(zp,{className:"w-4 h-4"}),"GitHub"]}),R.jsxs("span",{className:"font-mono text-xs text-[#525260] dark:text-muted",children:[vt.links.githubHandle," ↗"]})]})}),R.jsx("li",{children:R.jsxs("a",{href:vt.links.linkedin,target:"_blank",rel:"noopener noreferrer",className:"flex items-center justify-between py-3.5 px-1 hover:pl-2.5 hover:text-lime-dark dark:hover:text-lime transition-all",children:[R.jsxs("span",{className:"inline-flex items-center gap-2 text-sm font-medium",children:[R.jsx(T_,{className:"w-4 h-4"}),"LinkedIn"]}),R.jsxs("span",{className:"font-mono text-xs text-[#525260] dark:text-muted",children:[vt.links.linkedinHandle," ↗"]})]})}),R.jsx("li",{children:R.jsxs("a",{href:`mailto:${vt.links.email}`,className:"flex items-center justify-between py-3.5 px-1 hover:pl-2.5 hover:text-lime-dark dark:hover:text-lime transition-all",children:[R.jsxs("span",{className:"inline-flex items-center gap-2 text-sm font-medium",children:[R.jsx(w_,{className:"w-4 h-4"}),"Email"]}),R.jsxs("span",{className:"font-mono text-xs text-[#525260] dark:text-muted",children:[vt.links.email," ↗"]})]})})]})]})]}),R.jsx("div",{className:"lg:col-span-7",children:R.jsxs("form",{onSubmit:T,noValidate:!0,className:"p-7 rounded-lg border border-[#DCDCD4] dark:border-line bg-white/80 dark:bg-surface/80 space-y-5",children:[R.jsxs("div",{className:"flex items-center justify-between pb-3.5 border-b border-[#DCDCD4] dark:border-line font-mono text-xs text-[#767685] dark:text-subtle",children:[R.jsx("span",{children:"// MESSAGE_PAYLOAD"}),R.jsx("span",{children:"STATUS: READY"})]}),R.jsxs("div",{children:[R.jsxs("label",{htmlFor:"name",className:"flex items-center justify-between font-mono text-xs text-[#525260] dark:text-muted mb-2",children:[R.jsx("span",{children:"01 / NAME"}),R.jsx("span",{className:"text-lime-dark dark:text-lime",children:"*"})]}),R.jsx("input",{id:"name",name:"name",type:"text",required:!0,value:_.name,onChange:g=>x({..._,name:g.target.value}),placeholder:"Ada Lovelace",className:"w-full px-3.5 py-2.5 rounded border border-[#C2C2B8] dark:border-line-strong bg-[#ECECE6]/70 dark:bg-obsidian text-sm focus:border-lime-dark dark:focus:border-lime focus:outline-none transition-colors"})]}),R.jsxs("div",{children:[R.jsxs("label",{htmlFor:"email",className:"flex items-center justify-between font-mono text-xs text-[#525260] dark:text-muted mb-2",children:[R.jsx("span",{children:"02 / EMAIL"}),R.jsx("span",{className:"text-lime-dark dark:text-lime",children:"*"})]}),R.jsx("input",{id:"email",name:"email",type:"email",required:!0,value:_.email,onChange:g=>x({..._,email:g.target.value}),placeholder:"ada@analytical.engine",className:"w-full px-3.5 py-2.5 rounded border border-[#C2C2B8] dark:border-line-strong bg-[#ECECE6]/70 dark:bg-obsidian text-sm focus:border-lime-dark dark:focus:border-lime focus:outline-none transition-colors"})]}),R.jsxs("div",{children:[R.jsxs("label",{htmlFor:"message",className:"flex items-center justify-between font-mono text-xs text-[#525260] dark:text-muted mb-2",children:[R.jsx("span",{children:"03 / MESSAGE"}),R.jsx("span",{className:"text-lime-dark dark:text-lime",children:"*"})]}),R.jsx("textarea",{id:"message",name:"message",rows:4,required:!0,value:_.message,onChange:g=>x({..._,message:g.target.value}),placeholder:"Tell me about your project, timeline, or engineering role...",className:"w-full px-3.5 py-2.5 rounded border border-[#C2C2B8] dark:border-line-strong bg-[#ECECE6]/70 dark:bg-obsidian text-sm focus:border-lime-dark dark:focus:border-lime focus:outline-none transition-colors resize-y"})]}),R.jsxs("div",{className:"pt-1 space-y-2.5",children:[R.jsxs("button",{type:"submit",className:"w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded bg-lime text-obsidian font-mono text-xs font-semibold hover:-translate-y-0.5 hover:shadow-[0_10px_28px_-6px_rgba(198,255,61,0.35)] transition-all",children:[R.jsx("span",{children:"Send Transmission"}),R.jsx(b_,{className:"w-3.5 h-3.5"})]}),y&&R.jsx("p",{role:"status","aria-live":"polite",className:"font-mono text-xs text-lime-dark dark:text-lime",children:y})]})]})})]})]})})]}),R.jsx("footer",{className:"py-8",children:R.jsxs("div",{className:"max-w-[1120px] mx-auto px-6 flex flex-wrap items-center justify-between gap-4",children:[R.jsxs("div",{className:"flex items-center gap-3",children:[R.jsx("span",{className:"inline-flex items-center justify-center w-6 h-6 rounded border border-[#C2C2B8] dark:border-line-strong bg-[#ECECE6] dark:bg-surface font-mono text-[11px] font-bold",children:"DM"}),R.jsxs("p",{className:"text-xs text-[#767685] dark:text-subtle",children:["© ",new Date().getFullYear()," ",vt.name,". Engineered with React, Tailwind CSS & Three.js."]})]}),R.jsx("a",{href:"#top",className:"font-mono text-xs text-[#525260] dark:text-muted hover:text-lime-dark dark:hover:text-lime transition-colors",children:"TOP_OF_PAGE ↑"})]})})]})}m_.createRoot(document.getElementById("root")).render(R.jsx(c_.StrictMode,{children:R.jsx(HE,{})}));
