(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[20],{14:function(e,t,n){"use strict";n.d(t,{L:function(){return de},Kq:function(){return J},AK:function(){return Ie},eh:function(){return ne},Hf:function(){return ge},xf:function(){return se},LK:function(){return le},zK:function(){return X},nR:function(){return pe},cC:function(){return Ee}});var r=n(178),o=n.n(r),a=n(7294),i=n.t(a,2),c=n(3935);"undefined"!==typeof window&&a.useLayoutEffect;new Map;new Set(["id"]),new Set(["aria-label","aria-labelledby","aria-describedby","aria-details"]);let u=new Map,s=new Set;function f(){if("undefined"===typeof window)return;let e=t=>{let n=u.get(t.target);if(n&&(n.delete(t.propertyName),0===n.size&&(t.target.removeEventListener("transitioncancel",e),u.delete(t.target)),0===u.size)){for(let e of s)e();s.clear()}};document.body.addEventListener("transitionrun",(t=>{let n=u.get(t.target);n||(n=new Set,u.set(t.target,n),t.target.addEventListener("transitioncancel",e)),n.add(t.propertyName)})),document.body.addEventListener("transitionend",e)}"undefined"!==typeof document&&("loading"!==document.readyState?f():document.addEventListener("DOMContentLoaded",f));"undefined"!==typeof window&&window.visualViewport;new Map;function l(e){return"undefined"!==typeof window&&null!=window.navigator&&e.test(window.navigator.platform)}function d(){return l(/^Mac/)}function p(e){return!(0!==e.mozInputSource||!e.isTrusted)||0===e.detail&&!e.pointerType}const m=a.createContext(null);m.displayName="PressResponderContext";let v=null,h=new Set,y=!1,b=!1;const g={Tab:!0,Escape:!0};function w(e,t){for(let n of h)n(e,t)}function E(e){b=!0,function(e){return!(e.metaKey||!d()&&e.altKey||e.ctrlKey)}(e)&&(v="keyboard",w("keyboard",e))}function I(e){v="pointer","mousedown"!==e.type&&"pointerdown"!==e.type||(b=!0,w("pointer",e))}function M(e){p(e)&&(b=!0,v="virtual")}function k(e){e.target!==window&&e.target!==document&&(b||(v="virtual",w("virtual",e)),b=!1)}function Z(){b=!1}function O(){if("undefined"===typeof window||y)return;let e=HTMLElement.prototype.focus;HTMLElement.prototype.focus=function(){b=!0,e.apply(this,arguments)},document.addEventListener("keydown",E,!0),document.addEventListener("keyup",E,!0),document.addEventListener("click",M,!0),window.addEventListener("focus",k,!0),window.addEventListener("blur",Z,!1),"undefined"!==typeof PointerEvent?(document.addEventListener("pointerdown",I,!0),document.addEventListener("pointermove",I,!0),document.addEventListener("pointerup",I,!0)):(document.addEventListener("mousedown",I,!0),document.addEventListener("mousemove",I,!0),document.addEventListener("mouseup",I,!0)),y=!0}function S(){return"pointer"!==v}function j(e){void 0===e&&(e={}),O();let{isTextInput:t,autoFocus:n}=e,[r,o]=(0,a.useState)(n||S());return(0,a.useEffect)((()=>{let e=(e,n)=>{t&&"keyboard"===e&&n instanceof KeyboardEvent&&!g[n.key]||o(S())};return h.add(e),()=>{h.delete(e)}}),[t]),{isFocusVisible:r}}"undefined"!==typeof document&&("loading"!==document.readyState?O():document.addEventListener("DOMContentLoaded",O));new Set;const P=["input:not([disabled]):not([type=hidden])","select:not([disabled])","textarea:not([disabled])","button:not([disabled])","a[href]","area[href]","summary","iframe","object","embed","audio[controls]","video[controls]","[contenteditable]"];P.join(":not([hidden]),");P.push('[tabindex]:not([tabindex="-1"]):not([disabled])');P.join(':not([hidden]):not([tabindex="-1"]),');function N(e){void 0===e&&(e={});let{within:t}=e,[n,r]=(0,a.useState)(!1),[o,i]=(0,a.useState)(!1),{isFocusVisible:c}=j(e),{focusProps:u}=function(e){if(e.isDisabled)return{focusProps:{}};let t,n;return(e.onFocus||e.onFocusChange)&&(t=t=>{t.target===t.currentTarget&&(e.onFocus&&e.onFocus(t),e.onFocusChange&&e.onFocusChange(!0))}),(e.onBlur||e.onFocusChange)&&(n=t=>{t.target===t.currentTarget&&(e.onBlur&&e.onBlur(t),e.onFocusChange&&e.onFocusChange(!1))}),{focusProps:{onFocus:t,onBlur:n}}}({isDisabled:t,onFocusChange:r}),{focusWithinProps:s}=function(e){let t=(0,a.useRef)({isFocusWithin:!1}).current;return e.isDisabled?{focusWithinProps:{}}:{focusWithinProps:{onFocus:n=>{t.isFocusWithin||(e.onFocusWithin&&e.onFocusWithin(n),e.onFocusWithinChange&&e.onFocusWithinChange(!0),t.isFocusWithin=!0)},onBlur:n=>{t.isFocusWithin&&!n.currentTarget.contains(n.relatedTarget)&&(e.onBlurWithin&&e.onBlurWithin(n),e.onFocusWithinChange&&e.onFocusWithinChange(!1),t.isFocusWithin=!1)}}}}({isDisabled:!t,onFocusWithinChange:i});return{isFocused:t?o:n,isFocusVisible:(t?o:n)&&c,focusProps:t?s:u}}function W(){return(W=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function A(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}function C(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function x(e,t){var n;if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=function(e,t){if(e){if("string"===typeof e)return C(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?C(e,t):void 0}}(e))||t&&e&&"number"===typeof e.length){n&&(e=n);var r=0;return function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}return(n=e[Symbol.iterator]()).next.bind(n)}function z(e){return null!=e}function G(e){for(var t={},n=arguments.length,r=new Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];for(var a=0,i=r;a<i.length;a++){var c=i[a];c in e&&(t[c]=e[c])}return t}function F(e){for(var t={},n=arguments.length,r=new Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];for(var a=0,i=Object.keys(e);a<i.length;a++){var c=i[a];r.includes(c)||(t[c]=e[c])}return t}function L(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];if(0!==t.length)return function(e){for(var n,r=e,o=x(t);!(n=o()).done;){r=(0,n.value)(r)}return r}}var Q="undefined"!==typeof window,_=Symbol("NONE"),T=Q?a.useLayoutEffect:a.useEffect;function V(e,t,n){return Array.isArray(n)?a.createElement.apply(a,[e,t].concat(n)):n||"children"in t?a.createElement(e,t,n):a.createElement(e,t)}function R(e){for(var t=W({},e),n=arguments.length,r=new Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];for(var a=0,i=r;a<i.length;a++)for(var c=i[a],u=0,s=Object.keys(c);u<s.length;u++){var f=s[u];t[f]=B(f,t[f],c[f])}return t}function D(e,t){e&&("function"===typeof e?e(t):Object.isFrozen(e)||(e.current=t))}function H(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e){for(var n,r=x(t);!(n=r()).done;){D(n.value,e)}}}function B(e,t,n){return t===_||n===_?null:null==t?n:null==n?t:"className"===e?o()(t,n):"style"===e?W({},t,n):"ref"===e?H(t,n):typeof t!==typeof n?n:e.startsWith("on")&&"function"===typeof t?function(){var e;return"function"===typeof t&&(e=t.apply(void 0,arguments)),"function"===typeof n&&(e=n.apply(void 0,arguments)),e}:n}function K(e,t,n,r){var o=t.children,a=A(t,["children"]),i=Y(o,null!=n&&n);return V(e,W({ref:r},a),i)}function U(e,t){var n=e.as,r=e.hasGap;return K(null!=n?n:"div",A(e,["as","hasGap"]),r,t)}var $=(0,a.forwardRef)(U),q=function(e){return(0,a.forwardRef)((function(t,n){var r=t.hasGap,o=A(t,["hasGap"]);return K(e,o,r,n)}))},J=Object.assign($,{div:q("div"),a:q("a"),button:q("button"),h1:q("h1"),h2:q("h2"),h3:q("h3"),h4:q("h4"),h5:q("h5"),h6:q("h6"),label:q("label"),form:q("form"),section:q("section"),head:q("head"),main:q("main"),nav:q("nav")});function X(e,t,n){if(null==e)return!1;var r=e[t];return null!=r&&(!0===r?n===t:!1!==r&&(Array.isArray(r)?r.includes(n):"string"===typeof r?r===n:void 0!==r[n]&&!1!==r[n]))}function Y(e,t){var n=t?"__wab_flex-container":"__wab_passthrough";return e?Array.isArray(e)?a.createElement.apply(i,["div",{className:n}].concat(e)):(0,a.createElement)("div",{className:n},e):null}function ee(e,t,n,r){var o=ie(e),i=ae(n,o.props);if("render"===o.type)return o.render(i,t);var c=t;"as"===o.type&&o.as&&(t===J?i.as=o.as:c=o.as);var u=i.children;o.wrapChildren&&(u=o.wrapChildren(function(e){return Array.isArray(e)?a.createElement.apply(a,[a.Fragment,{}].concat(e)):e}(u))),r&&(u=Y(u,!0));var s=V(c,i,u);return o.wrap&&(s=o.wrap(s)),s}var te=new Map;function ne(e,t){null==t&&(t={});var n=t["data-plasmic-name"],r=t["data-plasmic-root"],o=t["data-plasmic-for-node"];delete t["data-plasmic-name"],delete t["data-plasmic-root"],delete t["data-plasmic-for-node"];for(var a=arguments.length,i=new Array(a>2?a-2:0),c=2;c<a;c++)i[c-2]=arguments[c];var u=re.apply(void 0,[e,t].concat(i));if(n&&te.set(n,u),r){var s,f=o?null!=(s=te.get(o))?s:null:u;return te.clear(),f}return u}function re(e,t){var n,r=t["data-plasmic-override"],o=t["data-plasmic-wrap-flex-child"],a=null!=(n=t["data-plasmic-trigger-props"])?n:[];delete t["data-plasmic-override"],delete t["data-plasmic-wrap-flex-child"],delete t["data-plasmic-trigger-props"];for(var i=arguments.length,c=new Array(i>2?i-2:0),u=2;u<i;u++)c[u-2]=arguments[u];return ee(r,e,R.apply(void 0,[t,0===c.length?{}:{children:c}].concat(a)),o)}var oe=Symbol("UNSET");function ae(e,t){if(!t)return e;for(var n=W({},e),r=0,o=Object.keys(t);r<o.length;r++){var a=o[r],i=e[a],c=t[a];c===oe?delete n[a]:(null!=c||"className"===a||"style"===a||a.startsWith("on")&&"function"===typeof i||(c=_),n[a]=B(a,i,c))}return n}function ie(e){if(!e)return{type:"default",props:{}};if(function(e){return"string"===typeof e||"number"===typeof e||a.isValidElement(e)}(e))return{type:"default",props:{children:e}};if("object"===typeof e)return"as"in e?W({},e,{props:e.props||{},type:"as"}):"render"in e?W({},e,{type:"render"}):"props"in e?W({},e,{props:e.props||{},type:"default"}):(t=Object.keys(e),n=["wrap","wrapChildren"],t.every((function(e){return n.includes(e)}))?W({},e,{props:{},type:"default"}):{type:"default",props:e});if("function"===typeof e)return{type:"render",render:e};var t,n;throw new Error("Unexpected override: "+e)}function ce(e,t){for(var n={},r=0,o=Array.from(new Set([].concat(Object.keys(e),Object.keys(t))));r<o.length;r++){var a=o[r];n[a]=ue(e[a],t[a])}return n}function ue(e,t){var n,r;if(!e)return t;if(!t)return e;var o=ie(e),a=ie(t),i=L.apply(void 0,[o.wrap,a.wrap].filter(z)),c=L.apply(void 0,[o.wrapChildren,a.wrapChildren].filter(z)),u=ae(null!=(n=o.props)?n:{},a.props);if("render"===a.type)return{render:a.render,props:u,wrap:i,wrapChildren:c};if("render"===o.type)return{render:o.render,props:u,wrap:i,wrapChildren:c};var s=null!=(r="as"===a.type?a.as:void 0)?r:"as"===o.type?o.as:void 0;return W({props:u,wrap:i,wrapChildren:c},s?{as:s}:{})}function se(e,t){var n,r,o,a,i,c,u,s,f=t.name,l=t.descendantNames,d=t.internalVariantPropNames,p=t.internalArgPropNames,m=["variants","args","overrides"],v=(a=F.apply(void 0,[G.apply(void 0,[e].concat(d))].concat(m)),i=null!=(n=e.variants)?n:{},W({},a,i)),h=(c=F.apply(void 0,[G.apply(void 0,[e].concat(p))].concat(m)),u=null!=(r=e.args)?r:{},W({},c,u)),y=ce(F.apply(void 0,[G.apply(void 0,[e].concat(l))].concat(p,d,m)),null!=(o=e.overrides)?o:{}),b=F.apply(void 0,[e,"variants","args","overrides"].concat(l,d,p));Object.keys(b).length>0&&(y=ce(y,((s={})[f]={props:b},s)));return{variants:v,args:h,overrides:y}}var fe={};function le(e){return Object.entries(e).filter((function(e){var t=e[1];return"PLEASE_RENDER_INSIDE_PROVIDER"===t})).forEach((function(t){var n=t[0];e[n]=void 0,fe[n]})),e}function de(e){if("nextjs"===e.platform&&e.href){var t=["href","replace","scroll","shallow","passHref","prefetch","locale"];return a.createElement(e.component,G.apply(void 0,[e].concat(t)),a.createElement("a",Object.assign({},F.apply(void 0,[e,"component","platform"].concat(t)))))}return"gatsby"===e.platform&&(n=e.href,/^\/(?!\/)/.test(n))?a.createElement(e.component,W({},F(e,"component","platform","href"),{to:e.href})):a.createElement("a",Object.assign({},F(e,"component","platform")));var n}function pe(e){var t=e.as,n=e.defaultContents,r=e.value,o=A(e,["as","defaultContents","value"]),i=void 0===r?n:r;if(!i||Array.isArray(i)&&0===i.length)return null;var c=me(i);return c&&(i=(0,a.createElement)("div",{className:"__wab_slot-string-wrapper"},c)),0===Object.keys(o).filter((function(e){return!!o[e]})).length?(0,a.createElement)(a.Fragment,null,i):(0,a.createElement)(t||"div",R({className:"__wab_slot"},o),i)}function me(e){return(0,a.isValidElement)(e)&&e.type===a.Fragment?me(e.props.children):"string"===typeof e?e:Array.isArray(e)&&1===e.length&&"string"===typeof e[0]?e[0]:void 0}var ve=[],he={};function ye(){return Q?Object.entries(he).filter((function(e){var t=e[1];return window.matchMedia(t).matches})).map((function(e){return e[0]})):[]}var be=void 0;function ge(e,t){return Object.assign(he,t),function(){var t=(0,a.useState)()[1],n=(0,a.useRef)(be||[]);return T((function(){var e=function(){be&&n.current.join("")!==be.join("")&&(n.current=be,t({}))};return ve.push(e),void 0===be&&(be=ye()),e(),function(){ve.splice(ve.indexOf(e),1)}}),[]),e?be||[]:be?be[be.length-1]:void 0}}Q&&window.addEventListener("resize",(function(){var e=ye();be&&e.join("")===be.join("")||(be=e,c.unstable_batchedUpdates((function(){return ve.forEach((function(e){return e()}))})))}));var we={useHover:function(){var e=(0,a.useState)(!1),t=e[0],n=e[1];return[t,{onMouseEnter:function(){return n(!0)},onMouseLeave:function(){return n(!1)}}]},useFocused:function(e){var t=N({within:!1,isTextInput:e.isTextInput});return[t.isFocused,t.focusProps]},useFocusVisible:function(e){var t=N({within:!1,isTextInput:e.isTextInput});return[t.isFocusVisible,t.focusProps]},useFocusedWithin:function(e){var t=N({within:!0,isTextInput:e.isTextInput});return[t.isFocused,t.focusProps]},useFocusVisibleWithin:function(e){var t=N({within:!0,isTextInput:e.isTextInput});return[t.isFocusVisible,t.focusProps]},usePressed:function(){var e=(0,a.useState)(!1),t=e[0],n=e[1];return[t,{onMouseDown:function(){return n(!0)},onMouseUp:function(){return n(!1)}}]}};function Ee(e,t){return we[e](t)}var Ie=o()},178:function(e,t){var n;!function(){"use strict";var r={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var a=typeof n;if("string"===a||"number"===a)e.push(n);else if(Array.isArray(n)){if(n.length){var i=o.apply(null,n);i&&e.push(i)}}else if("object"===a)if(n.toString===Object.prototype.toString)for(var c in n)r.call(n,c)&&n[c]&&e.push(c);else e.push(n.toString())}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(n=function(){return o}.apply(t,[]))||(e.exports=n)}()},3646:function(e,t,n){var r=n(7228);e.exports=function(e){if(Array.isArray(e))return r(e)}},9713:function(e){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},676:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}n.d(t,{Z:function(){return r}})},6156:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,{Z:function(){return r}})},7375:function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}n.d(t,{Z:function(){return r}})},4699:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var r=n(2961);function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,o=!1,a=void 0;try{for(var i,c=e[Symbol.iterator]();!(r=(i=c.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(u){o=!0,a=u}finally{try{r||null==c.return||c.return()}finally{if(o)throw a}}return n}}(e,t)||(0,r.Z)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},7329:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var r=n(676);var o=n(2961);function a(e){return function(e){if(Array.isArray(e))return(0,r.Z)(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||(0,o.Z)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},2961:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var r=n(676);function o(e,t){if(e){if("string"===typeof e)return(0,r.Z)(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?(0,r.Z)(e,t):void 0}}},6860:function(e){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},8206:function(e){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},319:function(e,t,n){var r=n(3646),o=n(6860),a=n(379),i=n(8206);e.exports=function(e){return r(e)||o(e)||a(e)||i()}},110:function(e,t,n){"use strict";n.d(t,{ZP:function(){return Y}});var r=n(7294),o=n(434),a=n(1842),i=n(9570),c=n(9783),u=n(1182),s=n(328),f=n(9117),l=n(6387),d=n(1140),p=n(3018),m=n(8777),v=n(8771),h=n(8270),y=n(8491),b=n(9745),g=n(5677),w=n(5576),E=n(3954),I=n(3169),M=n(7201),k=n(4339),Z=n(5522),O=n(7063),S=n(9256),j=n(1258),P=n(1594),N=n(308),W=n(3755),A=n(9557),C=n(6287),x=n(6677),z=n(9068),G=n(9365),F=n(4552),L=n(3904),Q=n(1372),_=n(4540),T=n(5878),V=n(60),R=n(4170),D=n(5100),H=n(5823),B=n(5225),K=n(8862);const U={Feed:o.ZP,ActionButton:a.ZP,Tweet:i.ZP,Avatar:c.ZP,Spacer:u.ZP,Trend:s.ZP,SideSection:f.ZP,Button:l.ZP,Suggestion:d.ZP,MagicIcon:p.Z,ReplyIcon:m.Z,RetweetIcon:v.Z,LikeIcon:h.Z,ShareIcon:y.Z,IconIcon:b.Z,VectorIcon:g.Z,Vector2Icon:w.Z,Vector3Icon:E.Z,Vector4Icon:I.Z,Vector5Icon:M.Z,Vector6Icon:k.Z,Vector7Icon:Z.Z,Vector8Icon:O.Z,HomeActiveIcon:S.Z,SearchActiveIcon:j.Z,HomeIcon:P.Z,NotificationsIcon:N.Z,MessagesIcon:W.Z,SearchIcon:A.Z,NotificationsActiveIcon:C.Z,MessagesActiveIcon:x.C,TwitterIcon:z.C,Icon2Icon:G.Z,BookmarksIcon:F.Z,ListsIcon:L.Z,ProfileIcon:Q.Z,MoreIcon:_.Z,PictureIcon:T.Z,Icon3Icon:V.Z,Icon4Icon:R.Z,Icon5Icon:D.Z,Icon6Icon:H.Z,Icon7Icon:B.Z},$={Screen:{component:K.wd,isContext:!Boolean("ScreenVariantProvider")}},q={Feed:{kgQ1bGzW393oaNmhEftMwm:o.ZP},ActionButton:{kgQ1bGzW393oaNmhEftMwm:a.ZP},Tweet:{kgQ1bGzW393oaNmhEftMwm:i.ZP},Avatar:{kgQ1bGzW393oaNmhEftMwm:c.ZP},Spacer:{kgQ1bGzW393oaNmhEftMwm:u.ZP},Trend:{kgQ1bGzW393oaNmhEftMwm:s.ZP},SideSection:{kgQ1bGzW393oaNmhEftMwm:f.ZP},Button:{kgQ1bGzW393oaNmhEftMwm:l.ZP},Suggestion:{kgQ1bGzW393oaNmhEftMwm:d.ZP},MagicIcon:{kgQ1bGzW393oaNmhEftMwm:p.Z},ReplyIcon:{kgQ1bGzW393oaNmhEftMwm:m.Z},RetweetIcon:{kgQ1bGzW393oaNmhEftMwm:v.Z},LikeIcon:{kgQ1bGzW393oaNmhEftMwm:h.Z},ShareIcon:{kgQ1bGzW393oaNmhEftMwm:y.Z},IconIcon:{kgQ1bGzW393oaNmhEftMwm:b.Z},VectorIcon:{kgQ1bGzW393oaNmhEftMwm:g.Z},Vector2Icon:{kgQ1bGzW393oaNmhEftMwm:w.Z},Vector3Icon:{kgQ1bGzW393oaNmhEftMwm:E.Z},Vector4Icon:{kgQ1bGzW393oaNmhEftMwm:I.Z},Vector5Icon:{kgQ1bGzW393oaNmhEftMwm:M.Z},Vector6Icon:{kgQ1bGzW393oaNmhEftMwm:k.Z},Vector7Icon:{kgQ1bGzW393oaNmhEftMwm:Z.Z},Vector8Icon:{kgQ1bGzW393oaNmhEftMwm:O.Z},HomeActiveIcon:{kgQ1bGzW393oaNmhEftMwm:S.Z},SearchActiveIcon:{kgQ1bGzW393oaNmhEftMwm:j.Z},HomeIcon:{kgQ1bGzW393oaNmhEftMwm:P.Z},NotificationsIcon:{kgQ1bGzW393oaNmhEftMwm:N.Z},MessagesIcon:{kgQ1bGzW393oaNmhEftMwm:W.Z},SearchIcon:{kgQ1bGzW393oaNmhEftMwm:A.Z},NotificationsActiveIcon:{kgQ1bGzW393oaNmhEftMwm:C.Z},MessagesActiveIcon:{kgQ1bGzW393oaNmhEftMwm:x.C},TwitterIcon:{kgQ1bGzW393oaNmhEftMwm:z.C},Icon2Icon:{kgQ1bGzW393oaNmhEftMwm:G.Z},BookmarksIcon:{kgQ1bGzW393oaNmhEftMwm:F.Z},ListsIcon:{kgQ1bGzW393oaNmhEftMwm:L.Z},ProfileIcon:{kgQ1bGzW393oaNmhEftMwm:Q.Z},MoreIcon:{kgQ1bGzW393oaNmhEftMwm:_.Z},PictureIcon:{kgQ1bGzW393oaNmhEftMwm:T.Z},Icon3Icon:{kgQ1bGzW393oaNmhEftMwm:V.Z},Icon4Icon:{kgQ1bGzW393oaNmhEftMwm:R.Z},Icon5Icon:{kgQ1bGzW393oaNmhEftMwm:D.Z},Icon6Icon:{kgQ1bGzW393oaNmhEftMwm:H.Z},Icon7Icon:{kgQ1bGzW393oaNmhEftMwm:B.Z}},J={Screen:{kgQ1bGzW393oaNmhEftMwm:{component:K.wd,isContext:!Boolean(void 0)}}};function X(e,t,n){const o=Object.entries(n||{}).map((([e,n])=>{if($[e]){const{component:t,isContext:r}=$[e];return[r?t.Provider:t,n]}if(!J[e])throw new Error(`The provider ${e} could not be found.`);if(!J[e][t])throw new Error(`The provider ${e} requires a valid projectId. Passed: ${t}. Options: ${Object.keys(J[e])}`);const{component:r,isContext:o}=J[e][t];return[o?r.Provider:r,n]}));return o.length?o.reduce(((e,[t,n])=>r.createElement(t,{value:n},e)),e):e}function Y({projectId:e,component:t,componentProps:n={},providerProps:o={}}){const a=function(e,t){if(U[t])return U[t];if(!q[t])throw new Error(`The component ${t} could not be found.`);if(!q[t][e])throw new Error(`The component ${t} requires a valid projectId. Passed: ${e}. Options: ${Object.keys(q[t])}`);return q[t][e]}(e,t);return X(r.createElement(a,n),e,o)}},6071:function(e,t,n){"use strict";var r=n(3038),o=n(862);t.default=void 0;var a=o(n(7294)),i=n(1689),c=n(2441),u=n(5749),s={};function f(e,t,n,r){if(e&&(0,i.isLocalURL)(t)){e.prefetch(t,n,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;s[t+"%"+n+(o?"%"+o:"")]=!0}}var l=function(e){var t=!1!==e.prefetch,n=(0,c.useRouter)(),o=n&&n.pathname||"/",l=a.default.useMemo((function(){var t=(0,i.resolveHref)(o,e.href,!0),n=r(t,2),a=n[0],c=n[1];return{href:a,as:e.as?(0,i.resolveHref)(o,e.as):c||a}}),[o,e.href,e.as]),d=l.href,p=l.as,m=e.children,v=e.replace,h=e.shallow,y=e.scroll,b=e.locale;"string"===typeof m&&(m=a.default.createElement("a",null,m));var g=a.Children.only(m),w=g&&"object"===typeof g&&g.ref,E=(0,u.useIntersection)({rootMargin:"200px"}),I=r(E,2),M=I[0],k=I[1],Z=a.default.useCallback((function(e){M(e),w&&("function"===typeof w?w(e):"object"===typeof w&&(w.current=e))}),[w,M]);(0,a.useEffect)((function(){var e=k&&t&&(0,i.isLocalURL)(d),r="undefined"!==typeof b?b:n&&n.locale,o=s[d+"%"+p+(r?"%"+r:"")];e&&!o&&f(n,d,p,{locale:r})}),[p,d,k,b,t,n]);var O={ref:Z,onClick:function(e){g.props&&"function"===typeof g.props.onClick&&g.props.onClick(e),e.defaultPrevented||function(e,t,n,r,o,a,c,u){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,i.isLocalURL)(n))&&(e.preventDefault(),null==c&&(c=r.indexOf("#")<0),t[o?"replace":"push"](n,r,{shallow:a,locale:u,scroll:c}))}(e,n,d,p,v,h,y,b)},onMouseEnter:function(e){(0,i.isLocalURL)(d)&&(g.props&&"function"===typeof g.props.onMouseEnter&&g.props.onMouseEnter(e),f(n,d,p,{priority:!0}))}};if(e.passHref||"a"===g.type&&!("href"in g.props)){var S="undefined"!==typeof b?b:n&&n.locale,j=n&&n.isLocaleDomain&&(0,i.getDomainLocale)(p,S,n&&n.locales,n&&n.domainLocales);O.href=j||(0,i.addBasePath)((0,i.addLocale)(p,S,n&&n.defaultLocale))}return a.default.cloneElement(g,O)};t.default=l},5749:function(e,t,n){"use strict";var r=n(3038);t.__esModule=!0,t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!i,u=(0,o.useRef)(),s=(0,o.useState)(!1),f=r(s,2),l=f[0],d=f[1],p=(0,o.useCallback)((function(e){u.current&&(u.current(),u.current=void 0),n||l||e&&e.tagName&&(u.current=function(e,t,n){var r=function(e){var t=e.rootMargin||"",n=c.get(t);if(n)return n;var r=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return c.set(t,n={id:t,observer:o,elements:r}),n}(n),o=r.id,a=r.observer,i=r.elements;return i.set(e,t),a.observe(e),function(){i.delete(e),a.unobserve(e),0===i.size&&(a.disconnect(),c.delete(o))}}(e,(function(e){return e&&d(e)}),{rootMargin:t}))}),[n,t,l]);return(0,o.useEffect)((function(){if(!i&&!l){var e=(0,a.requestIdleCallback)((function(){return d(!0)}));return function(){return(0,a.cancelIdleCallback)(e)}}}),[l]),[p,l]};var o=n(7294),a=n(8391),i="undefined"!==typeof IntersectionObserver;var c=new Map},3367:function(e,t,n){"use strict";var r;t.__esModule=!0,t.AmpStateContext=void 0;var o=((r=n(7294))&&r.__esModule?r:{default:r}).default.createContext({});t.AmpStateContext=o},7845:function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=i,t.useAmp=function(){return i(o.default.useContext(a.AmpStateContext))};var r,o=(r=n(7294))&&r.__esModule?r:{default:r},a=n(3367);function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,o=void 0!==r&&r,a=e.hasQuery,i=void 0!==a&&a;return n||o&&i}},7947:function(e,t,n){"use strict";var r=n(9713);function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}t.__esModule=!0,t.defaultHead=d,t.default=void 0;var a,i=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=l();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var a=r?Object.getOwnPropertyDescriptor(e,o):null;a&&(a.get||a.set)?Object.defineProperty(n,o,a):n[o]=e[o]}n.default=e,t&&t.set(e,n);return n}(n(7294)),c=(a=n(617))&&a.__esModule?a:{default:a},u=n(3367),s=n(4287),f=n(7845);function l(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return l=function(){return e},e}function d(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[i.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(i.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function p(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===i.default.Fragment?e.concat(i.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var m=["name","httpEquiv","charSet","itemProp"];function v(e,t){return e.reduce((function(e,t){var n=i.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(p,[]).reverse().concat(d(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(o){var a=!0,i=!1;if(o.key&&"number"!==typeof o.key&&o.key.indexOf("$")>0){i=!0;var c=o.key.slice(o.key.indexOf("$")+1);e.has(c)?a=!1:e.add(c)}switch(o.type){case"title":case"base":t.has(o.type)?a=!1:t.add(o.type);break;case"meta":for(var u=0,s=m.length;u<s;u++){var f=m[u];if(o.props.hasOwnProperty(f))if("charSet"===f)n.has(f)?a=!1:n.add(f);else{var l=o.props[f],d=r[f]||new Set;"name"===f&&i||!d.has(l)?(d.add(l),r[f]=d):a=!1}}}return a}}()).reverse().map((function(e,n){var a=e.key||n;if(!t.inAmpMode&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css"].some((function(t){return e.props.href.startsWith(t)}))){var c=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e.props||{});return c["data-href"]=c.href,c.href=void 0,i.default.cloneElement(e,c)}return i.default.cloneElement(e,{key:a})}))}function h(e){var t=e.children,n=(0,i.useContext)(u.AmpStateContext),r=(0,i.useContext)(s.HeadManagerContext);return i.default.createElement(c.default,{reduceComponentsToState:v,headManager:r,inAmpMode:(0,f.isInAmpMode)(n)},t)}h.rewind=function(){};var y=h;t.default=y},617:function(e,t,n){"use strict";var r=n(319),o=n(4575),a=n(3913),i=(n(1506),n(2205)),c=n(8585),u=n(9754);function s(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=u(e);if(t){var o=u(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return c(this,n)}}t.__esModule=!0,t.default=void 0;var f=n(7294),l=function(e){i(n,e);var t=s(n);function n(e){var a;return o(this,n),(a=t.call(this,e))._hasHeadManager=void 0,a.emitChange=function(){a._hasHeadManager&&a.props.headManager.updateHead(a.props.reduceComponentsToState(r(a.props.headManager.mountedInstances),a.props))},a._hasHeadManager=a.props.headManager&&a.props.headManager.mountedInstances,a}return a(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(f.Component);t.default=l},1859:function(){},9008:function(e,t,n){e.exports=n(7947)},1664:function(e,t,n){e.exports=n(6071)}}]);