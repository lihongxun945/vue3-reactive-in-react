var VueReactivity=function(e){"use strict";function t(e,t){const n=Object.create(null),r=e.split(",");for(let e=0;e<r.length;e++)n[r[e]]=!0;return t?e=>!!n[e.toLowerCase()]:e=>!!n[e]}const n={},r=()=>{},o=Object.assign,c=Object.prototype.hasOwnProperty,s=(e,t)=>c.call(e,t),i=Array.isArray,u=e=>"function"==typeof e,a=e=>"symbol"==typeof e,l=e=>null!==e&&"object"==typeof e,f=Object.prototype.toString,_=e=>(e=>f.call(e))(e).slice(8,-1),v=(e,t)=>e!==t&&(e==e||t==t),d=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},h=new WeakMap,g=[];let p;const y=Symbol(""),R=Symbol("");function w(e,t=n){(function(e){return e&&!0===e._isEffect})(e)&&(e=e.raw);const r=function(e,t){const n=function(){if(!n.active)return t.scheduler?void 0:e();if(!g.includes(n)){S(n);try{return k(),g.push(n),p=n,e()}finally{g.pop(),O(),p=g[g.length-1]}}};return n.id=b++,n._isEffect=!0,n.active=!0,n.raw=e,n.deps=[],n.options=t,n}(e,t);return t.lazy||r(),r}let b=0;function S(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let E=!0;const m=[];function k(){m.push(E),E=!0}function O(){const e=m.pop();E=void 0===e||e}function P(e,t,n){if(!E||void 0===p)return;let r=h.get(e);r||h.set(e,r=new Map);let o=r.get(n);o||r.set(n,o=new Set),o.has(p)||(o.add(p),p.deps.push(o))}function j(e,t,n,r,o,c){const s=h.get(e);if(!s)return;const u=new Set,a=e=>{e&&e.forEach(e=>{e!==p&&u.add(e)})};if("clear"===t)s.forEach(a);else if("length"===n&&i(e))s.forEach((e,t)=>{("length"===t||t>=r)&&a(e)});else{void 0!==n&&a(s.get(n));const r="add"===t||"delete"===t&&!i(e);(r||"set"===t&&e instanceof Map)&&a(s.get(i(e)?"length":y)),r&&e instanceof Map&&a(s.get(R))}u.forEach(e=>{e.options.scheduler?e.options.scheduler(e):e()})}const x=new Set(Object.getOwnPropertyNames(Symbol).map(e=>Symbol[e]).filter(a)),M=K(),z=K(!1,!0),T=K(!0),W=K(!0,!0),A={};function K(e=!1,t=!1){return function(n,r,o){if("__v_isReactive"===r)return!e;if("__v_isReadonly"===r)return e;if("__v_raw"===r&&o===(e?n.__v_readonly:n.__v_reactive))return n;const c=i(n);if(c&&s(A,r))return Reflect.get(A,r,o);const u=Reflect.get(n,r,o);return(a(r)?x.has(r):"__proto__"===r||"__v_isRef"===r)?u:(e||P(n,0,r),t?u:Re(u)?c?u:u.value:l(u)?e?ve(u):_e(u):u)}}["includes","indexOf","lastIndexOf"].forEach(e=>{A[e]=function(...t){const n=pe(this);for(let e=0,t=this.length;e<t;e++)P(n,0,e+"");const r=n[e](...t);return-1===r||!1===r?n[e](...t.map(pe)):r}});function I(e=!1){return function(t,n,r,o){const c=t[n];if(!e&&(r=pe(r),!i(t)&&Re(c)&&!Re(r)))return c.value=r,!0;const u=s(t,n),a=Reflect.set(t,n,r,o);return t===pe(o)&&(u?v(r,c)&&j(t,"set",n,r):j(t,"add",n,r)),a}}function C(e,t){const n=Reflect.has(e,t);return a(t)&&x.has(t)||P(e,0,t),n}function L(e){return P(e,0,y),Reflect.ownKeys(e)}const N={get:M,set:I(),deleteProperty:function(e,t){const n=s(e,t),r=Reflect.deleteProperty(e,t);return r&&n&&j(e,"delete",t,void 0),r},has:C,ownKeys:L},V={get:T,has:C,ownKeys:L,set:(e,t)=>!0,deleteProperty:(e,t)=>!0},Y=o({},N,{get:z,set:I(!0)}),q=o({},V,{get:W}),B=e=>l(e)?_e(e):e,D=e=>l(e)?ve(e):e,F=e=>e,G=e=>Reflect.getPrototypeOf(e);function H(e,t,n=!1,r=!1){const o=pe(e=e.__v_raw),c=pe(t);t!==c&&!n&&P(o,0,t),!n&&P(o,0,c);const{has:s}=G(o),i=n?D:r?F:B;return s.call(o,t)?i(e.get(t)):s.call(o,c)?i(e.get(c)):void 0}function J(e,t=!1){const n=this.__v_raw,r=pe(n),o=pe(e);return e!==o&&!t&&P(r,0,e),!t&&P(r,0,o),n.has(e)||n.has(o)}function Q(e,t=!1){return e=e.__v_raw,!t&&P(pe(e),0,y),Reflect.get(e,"size",e)}function U(e){e=pe(e);const t=pe(this),n=G(t),r=n.has.call(t,e),o=n.add.call(t,e);return r||j(t,"add",e,e),o}function X(e,t){t=pe(t);const n=pe(this),{has:r,get:o,set:c}=G(n);let s=r.call(n,e);s||(e=pe(e),s=r.call(n,e));const i=o.call(n,e),u=c.call(n,e,t);return s?v(t,i)&&j(n,"set",e,t):j(n,"add",e,t),u}function Z(e){const t=pe(this),{has:n,get:r,delete:o}=G(t);let c=n.call(t,e);c||(e=pe(e),c=n.call(t,e));r&&r.call(t,e);const s=o.call(t,e);return c&&j(t,"delete",e,void 0),s}function $(){const e=pe(this),t=0!==e.size,n=G(e).clear.call(e);return t&&j(e,"clear",void 0,void 0),n}function ee(e,t){return function(n,r){const o=this,c=pe(o),s=e?D:t?F:B;return!e&&P(c,0,y),G(c).forEach.call(c,(function(e,t){return n.call(r,s(e),s(t),o)}))}}function te(e,t,n){return function(...r){const o=this.__v_raw,c=pe(o),s=c instanceof Map,i="entries"===e||e===Symbol.iterator&&s,u="keys"===e&&s,a=o[e](...r),l=t?D:n?F:B;return!t&&P(c,0,u?R:y),{next(){const{value:e,done:t}=a.next();return t?{value:e,done:t}:{value:i?[l(e[0]),l(e[1])]:l(e),done:t}},[Symbol.iterator](){return this}}}}function ne(e){return function(...t){return"delete"!==e&&this}}const re={get(e){return H(this,e)},get size(){return Q(this)},has:J,add:U,set:X,delete:Z,clear:$,forEach:ee(!1,!1)},oe={get(e){return H(this,e,!1,!0)},get size(){return Q(this)},has:J,add:U,set:X,delete:Z,clear:$,forEach:ee(!1,!0)},ce={get(e){return H(this,e,!0)},get size(){return Q(this,!0)},has(e){return J.call(this,e,!0)},add:ne("add"),set:ne("set"),delete:ne("delete"),clear:ne("clear"),forEach:ee(!0,!1)};function se(e,t){const n=t?oe:e?ce:re;return(t,r,o)=>"__v_isReactive"===r?!e:"__v_isReadonly"===r?e:"__v_raw"===r?t:Reflect.get(s(n,r)&&r in t?n:t,r,o)}["keys","values","entries",Symbol.iterator].forEach(e=>{re[e]=te(e,!1,!1),ce[e]=te(e,!0,!1),oe[e]=te(e,!1,!0)});const ie={get:se(!1,!1)},ue={get:se(!1,!0)},ae={get:se(!0,!1)},le=new Set([Set,Map,WeakMap,WeakSet]),fe=t("Object,Array,Map,Set,WeakMap,WeakSet");function _e(e){return e&&e.__v_isReadonly?e:de(e,!1,N,ie)}function ve(e){return de(e,!0,V,ae)}function de(e,t,n,r){if(!l(e))return e;if(e.__v_raw&&(!t||!e.__v_isReactive))return e;const o=t?"__v_readonly":"__v_reactive";if(s(e,o))return e[o];if((c=e).__v_skip||!fe(_(c))||!Object.isExtensible(c))return e;var c;const i=new Proxy(e,le.has(e.constructor)?r:n);return d(e,o,i),i}function he(e){return ge(e)?he(e.__v_raw):!(!e||!e.__v_isReactive)}function ge(e){return!(!e||!e.__v_isReadonly)}function pe(e){return e&&pe(e.__v_raw)||e}const ye=e=>l(e)?_e(e):e;function Re(e){return!!e&&!0===e.__v_isRef}function we(e,t=!1){if(Re(e))return e;let n=t?e:ye(e);const r={__v_isRef:!0,get value(){return P(r,0,"value"),n},set value(o){v(pe(o),e)&&(e=o,n=t?o:ye(o),j(r,"set","value",o))}};return r}function be(e){return Re(e)?e.value:e}const Se={get:(e,t,n)=>be(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const o=e[t];return Re(o)&&!Re(n)?(o.value=n,!0):Reflect.set(e,t,n,r)}};function Ee(e,t){return{__v_isRef:!0,get value(){return e[t]},set value(n){e[t]=n}}}return e.ITERATE_KEY=y,e.computed=function(e){let t,n;u(e)?(t=e,n=r):(t=e.get,n=e.set);let o,c,s=!0;const i=w(t,{lazy:!0,scheduler:()=>{s||(s=!0,j(c,"set","value"))}});return c={__v_isRef:!0,__v_isReadonly:u(e)||!e.set,effect:i,get value(){return s&&(o=i(),s=!1),P(c,0,"value"),o},set value(e){n(e)}},c},e.customRef=function(e){const{get:t,set:n}=e(()=>P(r,0,"value"),()=>j(r,"set","value")),r={__v_isRef:!0,get value(){return t()},set value(e){n(e)}};return r},e.effect=w,e.enableTracking=k,e.isProxy=function(e){return he(e)||ge(e)},e.isReactive=he,e.isReadonly=ge,e.isRef=Re,e.markRaw=function(e){return d(e,"__v_skip",!0),e},e.pauseTracking=function(){m.push(E),E=!1},e.proxyRefs=function(e){return he(e)?e:new Proxy(e,Se)},e.reactive=_e,e.readonly=ve,e.ref=function(e){return we(e)},e.resetTracking=O,e.shallowReactive=function(e){return de(e,!1,Y,ue)},e.shallowReadonly=function(e){return de(e,!0,q,ae)},e.shallowRef=function(e){return we(e,!0)},e.stop=function(e){e.active&&(S(e),e.options.onStop&&e.options.onStop(),e.active=!1)},e.toRaw=pe,e.toRef=Ee,e.toRefs=function(e){const t={};for(const n in e)t[n]=Ee(e,n);return t},e.track=P,e.trigger=j,e.triggerRef=function(e){j(e,"set","value",void 0)},e.unref=be,e}({});
