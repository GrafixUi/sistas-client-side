(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[859],{939:function(){},6171:function(e,t,n){"use strict";n.d(t,{Z:function(){return X}});var r=n(1413),a=n(6656);function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function o(e,t){if(e){if("string"===typeof e)return u(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?u(e,t):void 0}}function c(e){return function(e){if(Array.isArray(e))return u(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||o(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,u,o,c=[],i=!0,l=!1;try{if(u=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;i=!1}else for(;!(i=(r=u.call(n)).done)&&(c.push(r.value),c.length!==t);i=!0);}catch(e){l=!0,a=e}finally{try{if(!i&&null!=n.return&&(o=n.return(),Object(o)!==o))return}finally{if(l)throw a}}return c}}(e,t)||o(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var l=n(1002),s=n(3967),f=n.n(s),d=n(7294);function v(e){var t=d.useRef();t.current=e;var n=d.useCallback((function(){for(var e,n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return null===(e=t.current)||void 0===e?void 0:e.call.apply(e,[t].concat(r))}),[]);return n}var m="undefined"!==typeof window&&window.document&&window.document.createElement?d.useLayoutEffect:d.useEffect,E=function(e,t){var n=d.useRef(!0);m((function(){return e(n.current)}),t),m((function(){return n.current=!1,function(){n.current=!0}}),[])},h=function(e,t){E((function(t){if(!t)return e()}),t)};function y(e){var t=d.useRef(!1),n=i(d.useState(e),2),r=n[0],a=n[1];return d.useEffect((function(){return t.current=!1,function(){t.current=!0}}),[]),[r,function(e,n){n&&t.current||a(e)}]}function b(e){return void 0!==e}var g={},p=[];function C(e,t){}function M(e,t){}function N(e,t,n){t||g[n]||(e(!1,n),g[n]=!0)}function S(e,t){N(C,e,t)}S.preMessage=function(e){p.push(e)},S.resetWarned=function(){g={}},S.noteOnce=function(e,t){N(M,e,t)};var O=S;var A=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=new Set;function a(e,t){var u=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,o=r.has(e);if(O(!o,"Warning: There may be circular references"),o)return!1;if(e===t)return!0;if(n&&u>1)return!1;r.add(e);var c=u+1;if(Array.isArray(e)){if(!Array.isArray(t)||e.length!==t.length)return!1;for(var i=0;i<e.length;i++)if(!a(e[i],t[i],c))return!1;return!0}if(e&&t&&"object"===(0,l.Z)(e)&&"object"===(0,l.Z)(t)){var s=Object.keys(e);return s.length===Object.keys(t).length&&s.every((function(n){return a(e[n],t[n],c)}))}return!1}return a(e,t)},x=d.createContext({min:0,max:0,direction:"ltr",step:1,includedStart:0,includedEnd:0,tabIndex:0,keyboard:!0,styles:{},classNames:{}}),I=n(7462),_=n(3366);function k(e,t){if(null==e)return{};var n,r,a=(0,_.Z)(e,t);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(r=0;r<u.length;r++)n=u[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var T={MAC_ENTER:3,BACKSPACE:8,TAB:9,NUM_CENTER:12,ENTER:13,SHIFT:16,CTRL:17,ALT:18,PAUSE:19,CAPS_LOCK:20,ESC:27,SPACE:32,PAGE_UP:33,PAGE_DOWN:34,END:35,HOME:36,LEFT:37,UP:38,RIGHT:39,DOWN:40,PRINT_SCREEN:44,INSERT:45,DELETE:46,ZERO:48,ONE:49,TWO:50,THREE:51,FOUR:52,FIVE:53,SIX:54,SEVEN:55,EIGHT:56,NINE:57,QUESTION_MARK:63,A:65,B:66,C:67,D:68,E:69,F:70,G:71,H:72,I:73,J:74,K:75,L:76,M:77,N:78,O:79,P:80,Q:81,R:82,S:83,T:84,U:85,V:86,W:87,X:88,Y:89,Z:90,META:91,WIN_KEY_RIGHT:92,CONTEXT_MENU:93,NUM_ZERO:96,NUM_ONE:97,NUM_TWO:98,NUM_THREE:99,NUM_FOUR:100,NUM_FIVE:101,NUM_SIX:102,NUM_SEVEN:103,NUM_EIGHT:104,NUM_NINE:105,NUM_MULTIPLY:106,NUM_PLUS:107,NUM_MINUS:109,NUM_PERIOD:110,NUM_DIVISION:111,F1:112,F2:113,F3:114,F4:115,F5:116,F6:117,F7:118,F8:119,F9:120,F10:121,F11:122,F12:123,NUMLOCK:144,SEMICOLON:186,DASH:189,EQUALS:187,COMMA:188,PERIOD:190,SLASH:191,APOSTROPHE:192,SINGLE_QUOTE:222,OPEN_SQUARE_BRACKET:219,BACKSLASH:220,CLOSE_SQUARE_BRACKET:221,WIN_KEY:224,MAC_FF_META:224,WIN_IME:229,isTextModifyingKeyEvent:function(e){var t=e.keyCode;if(e.altKey&&!e.ctrlKey||e.metaKey||t>=T.F1&&t<=T.F12)return!1;switch(t){case T.ALT:case T.CAPS_LOCK:case T.CONTEXT_MENU:case T.CTRL:case T.DOWN:case T.END:case T.ESC:case T.HOME:case T.INSERT:case T.LEFT:case T.MAC_FF_META:case T.META:case T.NUMLOCK:case T.NUM_CENTER:case T.PAGE_DOWN:case T.PAGE_UP:case T.PAUSE:case T.PRINT_SCREEN:case T.RIGHT:case T.SHIFT:case T.UP:case T.WIN_KEY:case T.WIN_KEY_RIGHT:return!1;default:return!0}},isCharacterKey:function(e){if(e>=T.ZERO&&e<=T.NINE)return!0;if(e>=T.NUM_ZERO&&e<=T.NUM_MULTIPLY)return!0;if(e>=T.A&&e<=T.Z)return!0;if(-1!==window.navigator.userAgent.indexOf("WebKit")&&0===e)return!0;switch(e){case T.SPACE:case T.QUESTION_MARK:case T.NUM_PLUS:case T.NUM_MINUS:case T.NUM_PERIOD:case T.NUM_DIVISION:case T.SEMICOLON:case T.DASH:case T.EQUALS:case T.COMMA:case T.PERIOD:case T.SLASH:case T.APOSTROPHE:case T.SINGLE_QUOTE:case T.OPEN_SQUARE_BRACKET:case T.BACKSLASH:case T.CLOSE_SQUARE_BRACKET:return!0;default:return!1}}},R=T;function U(e,t,n){return(e-t)/(n-t)}function L(e,t,n,r){var a=U(t,n,r),u={};switch(e){case"rtl":u.right="".concat(100*a,"%"),u.transform="translateX(50%)";break;case"btt":u.bottom="".concat(100*a,"%"),u.transform="translateY(50%)";break;case"ttb":u.top="".concat(100*a,"%"),u.transform="translateY(-50%)";break;default:u.left="".concat(100*a,"%"),u.transform="translateX(-50%)"}return u}function F(e,t){return Array.isArray(e)?e[t]:e}var P=["prefixCls","value","valueIndex","onStartMove","style","render","dragging","onOffsetChange","onChangeComplete"];var w=d.forwardRef((function(e,t){var n,u,o=e.prefixCls,c=e.value,i=e.valueIndex,l=e.onStartMove,s=e.style,v=e.render,m=e.dragging,E=e.onOffsetChange,h=e.onChangeComplete,y=k(e,P),b=d.useContext(x),g=b.min,p=b.max,C=b.direction,M=b.disabled,N=b.keyboard,S=b.range,O=b.tabIndex,A=b.ariaLabelForHandle,_=b.ariaLabelledByForHandle,T=b.ariaValueTextFormatterForHandle,U=b.styles,w=b.classNames,Z="".concat(o,"-handle"),H=function(e){M||l(e,i)},D=L(C,c,g,p),K=d.createElement("div",(0,I.Z)({ref:t,className:f()(Z,(n={},(0,a.Z)(n,"".concat(Z,"-").concat(i+1),S),(0,a.Z)(n,"".concat(Z,"-dragging"),m),n),w.handle),style:(0,r.Z)((0,r.Z)((0,r.Z)({},D),s),U.handle),onMouseDown:H,onTouchStart:H,onKeyDown:function(e){if(!M&&N){var t=null;switch(e.which||e.keyCode){case R.LEFT:t="ltr"===C||"btt"===C?-1:1;break;case R.RIGHT:t="ltr"===C||"btt"===C?1:-1;break;case R.UP:t="ttb"!==C?1:-1;break;case R.DOWN:t="ttb"!==C?-1:1;break;case R.HOME:t="min";break;case R.END:t="max";break;case R.PAGE_UP:t=2;break;case R.PAGE_DOWN:t=-2}null!==t&&(e.preventDefault(),E(t,i))}},onKeyUp:function(e){switch(e.which||e.keyCode){case R.LEFT:case R.RIGHT:case R.UP:case R.DOWN:case R.HOME:case R.END:case R.PAGE_UP:case R.PAGE_DOWN:null===h||void 0===h||h()}},tabIndex:M?null:F(O,i),role:"slider","aria-valuemin":g,"aria-valuemax":p,"aria-valuenow":c,"aria-disabled":M,"aria-label":F(A,i),"aria-labelledby":F(_,i),"aria-valuetext":null===(u=F(T,i))||void 0===u?void 0:u(c),"aria-orientation":"ltr"===C||"rtl"===C?"horizontal":"vertical"},y));return v&&(K=v(K,{index:i,prefixCls:o,value:c,dragging:m})),K})),Z=["prefixCls","style","onStartMove","onOffsetChange","values","handleRender","draggingIndex"];var H=d.forwardRef((function(e,t){var n=e.prefixCls,r=e.style,a=e.onStartMove,u=e.onOffsetChange,o=e.values,c=e.handleRender,i=e.draggingIndex,l=k(e,Z),s=d.useRef({});return d.useImperativeHandle(t,(function(){return{focus:function(e){var t;null===(t=s.current[e])||void 0===t||t.focus()}}})),d.createElement(d.Fragment,null,o.map((function(e,t){return d.createElement(w,(0,I.Z)({ref:function(e){e?s.current[t]=e:delete s.current[t]},dragging:i===t,prefixCls:n,style:F(r,t),key:t,value:e,valueIndex:t,onStartMove:a,onOffsetChange:u,render:c},l))})))}));function D(e){var t="touches"in e?e.touches[0]:e;return{pageX:t.pageX,pageY:t.pageY}}function K(e){var t=e.prefixCls,n=e.style,u=e.children,o=e.value,c=e.onClick,i=d.useContext(x),l=i.min,s=i.max,v=i.direction,m=i.includedStart,E=i.includedEnd,h=i.included,y="".concat(t,"-text"),b=L(v,o,l,s);return d.createElement("span",{className:f()(y,(0,a.Z)({},"".concat(y,"-active"),h&&m<=o&&o<=E)),style:(0,r.Z)((0,r.Z)({},b),n),onMouseDown:function(e){e.stopPropagation()},onClick:function(){c(o)}},u)}function G(e){var t=e.prefixCls,n=e.marks,r=e.onClick,a="".concat(t,"-mark");return n.length?d.createElement("div",{className:a},n.map((function(e){var t=e.value,n=e.style,u=e.label;return d.createElement(K,{key:t,prefixCls:a,style:n,value:t,onClick:r},u)}))):null}function W(e){var t=e.prefixCls,n=e.value,u=e.style,o=e.activeStyle,c=d.useContext(x),i=c.min,l=c.max,s=c.direction,v=c.included,m=c.includedStart,E=c.includedEnd,h="".concat(t,"-dot"),y=v&&m<=n&&n<=E,b=(0,r.Z)((0,r.Z)({},L(s,n,i,l)),"function"===typeof u?u(n):u);return y&&(b=(0,r.Z)((0,r.Z)({},b),"function"===typeof o?o(n):o)),d.createElement("span",{className:f()(h,(0,a.Z)({},"".concat(h,"-active"),y)),style:b})}function B(e){var t=e.prefixCls,n=e.marks,r=e.dots,a=e.style,u=e.activeStyle,o=d.useContext(x),c=o.min,i=o.max,l=o.step,s=d.useMemo((function(){var e=new Set;if(n.forEach((function(t){e.add(t.value)})),r&&null!==l)for(var t=c;t<=i;)e.add(t),t+=l;return Array.from(e)}),[c,i,l,r,n]);return d.createElement("div",{className:"".concat(t,"-step")},s.map((function(e){return d.createElement(W,{prefixCls:t,key:e,value:e,style:a,activeStyle:u})})))}function j(e){var t,n=e.prefixCls,u=e.style,o=e.start,c=e.end,i=e.index,l=e.onStartMove,s=e.replaceCls,v=d.useContext(x),m=v.direction,E=v.min,h=v.max,y=v.disabled,b=v.range,g=v.classNames,p="".concat(n,"-track"),C=U(o,E,h),M=U(c,E,h),N=function(e){!y&&l&&l(e,-1)},S={};switch(m){case"rtl":S.right="".concat(100*C,"%"),S.width="".concat(100*M-100*C,"%");break;case"btt":S.bottom="".concat(100*C,"%"),S.height="".concat(100*M-100*C,"%");break;case"ttb":S.top="".concat(100*C,"%"),S.height="".concat(100*M-100*C,"%");break;default:S.left="".concat(100*C,"%"),S.width="".concat(100*M-100*C,"%")}var O=s||f()(p,(t={},(0,a.Z)(t,"".concat(p,"-").concat(i+1),null!==i&&b),(0,a.Z)(t,"".concat(n,"-track-draggable"),l),t),g.track);return d.createElement("div",{className:O,style:(0,r.Z)((0,r.Z)({},S),u),onMouseDown:N,onTouchStart:N})}function Y(e){var t=e.prefixCls,n=e.style,a=e.values,u=e.startPoint,o=e.onStartMove,c=d.useContext(x),i=c.included,l=c.range,s=c.min,v=c.styles,m=c.classNames,E=d.useMemo((function(){if(!l){if(0===a.length)return[];var e=null!==u&&void 0!==u?u:s,t=a[0];return[{start:Math.min(e,t),end:Math.max(e,t)}]}for(var n=[],r=0;r<a.length-1;r+=1)n.push({start:a[r],end:a[r+1]});return n}),[a,l,u,s]),h=null;return(m.tracks||v.tracks)&&(h=d.createElement(j,{index:null,prefixCls:t,start:E[0].start,end:E[E.length-1].end,replaceCls:f()(m.tracks,"".concat(t,"-tracks")),style:v.tracks})),i?d.createElement(d.Fragment,null,h,E.map((function(e,a){var u=e.start,c=e.end;return d.createElement(j,{index:a,prefixCls:t,style:(0,r.Z)((0,r.Z)({},F(n,a)),v.track),start:u,end:c,key:a,onStartMove:o})}))):null}var V=d.forwardRef((function(e,t){var n,u=e.prefixCls,o=void 0===u?"rc-slider":u,s=e.className,m=e.style,E=e.classNames,g=e.styles,p=e.disabled,C=void 0!==p&&p,M=e.keyboard,N=void 0===M||M,S=e.autoFocus,I=e.onFocus,_=e.onBlur,k=e.min,T=void 0===k?0:k,R=e.max,U=void 0===R?100:R,L=e.step,F=void 0===L?1:L,P=e.value,w=e.defaultValue,Z=e.range,K=e.count,W=e.onChange,j=e.onBeforeChange,V=e.onAfterChange,X=e.onChangeComplete,Q=e.allowCross,z=void 0===Q||Q,J=e.pushable,$=void 0!==J&&J,q=e.draggableTrack,ee=e.reverse,te=e.vertical,ne=e.included,re=void 0===ne||ne,ae=e.startPoint,ue=e.trackStyle,oe=e.handleStyle,ce=e.railStyle,ie=e.dotStyle,le=e.activeDotStyle,se=e.marks,fe=e.dots,de=e.handleRender,ve=e.tabIndex,me=void 0===ve?0:ve,Ee=e.ariaLabelForHandle,he=e.ariaLabelledByForHandle,ye=e.ariaValueTextFormatterForHandle,be=d.useRef(),ge=d.useRef(),pe=d.useMemo((function(){return te?ee?"ttb":"btt":ee?"rtl":"ltr"}),[ee,te]),Ce=d.useMemo((function(){return isFinite(T)?T:0}),[T]),Me=d.useMemo((function(){return isFinite(U)?U:100}),[U]),Ne=d.useMemo((function(){return null!==F&&F<=0?1:F}),[F]),Se=d.useMemo((function(){return"boolean"===typeof $?!!$&&Ne:$>=0&&$}),[$,Ne]),Oe=d.useMemo((function(){return Object.keys(se||{}).map((function(e){var t=se[e],n={value:Number(e)};return t&&"object"===(0,l.Z)(t)&&!d.isValidElement(t)&&("label"in t||"style"in t)?(n.style=t.style,n.label=t.label):n.label=t,n})).filter((function(e){var t=e.label;return t||"number"===typeof t})).sort((function(e,t){return e.value-t.value}))}),[se]),Ae=function(e,t,n,r,a,u){var o=d.useCallback((function(n){var r=isFinite(n)?n:e;return r=Math.min(t,n),Math.max(e,r)}),[e,t]),i=d.useCallback((function(r){if(null!==n){var a=e+Math.round((o(r)-e)/n)*n,u=function(e){return(String(e).split(".")[1]||"").length},c=Math.max(u(n),u(t),u(e)),i=Number(a.toFixed(c));return e<=i&&i<=t?i:null}return null}),[n,e,t,o]),l=d.useCallback((function(a){var u=o(a),c=r.map((function(e){return e.value}));null!==n&&c.push(i(a)),c.push(e,t);var l=c[0],s=t-e;return c.forEach((function(e){var t=Math.abs(u-e);t<=s&&(l=e,s=t)})),l}),[e,t,r,n,o,i]),s=function a(u,o,l){var s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"unit";if("number"===typeof o){var f,d=u[l],v=d+o,m=[];r.forEach((function(e){m.push(e.value)})),m.push(e,t),m.push(i(d));var E=o>0?1:-1;"unit"===s?m.push(i(d+E*n)):m.push(i(v)),m=m.filter((function(e){return null!==e})).filter((function(e){return o<0?e<=d:e>=d})),"unit"===s&&(m=m.filter((function(e){return e!==d})));var h="unit"===s?d:v;f=m[0];var y=Math.abs(f-h);if(m.forEach((function(e){var t=Math.abs(e-h);t<y&&(f=e,y=t)})),void 0===f)return o<0?e:t;if("dist"===s)return f;if(Math.abs(o)>1){var b=c(u);return b[l]=f,a(b,o-E,l,s)}return f}return"min"===o?e:"max"===o?t:void 0},f=function(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"unit",a=e[n],u=s(e,t,n,r);return{value:u,changed:u!==a}},v=function(e){return null===u&&0===e||"number"===typeof u&&e<u};return[l,function(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"unit",o=e.map(l),c=o[n],i=s(o,t,n,r);if(o[n]=i,!1===a){var d=u||0;n>0&&o[n-1]!==c&&(o[n]=Math.max(o[n],o[n-1]+d)),n<o.length-1&&o[n+1]!==c&&(o[n]=Math.min(o[n],o[n+1]-d))}else if("number"===typeof u||null===u){for(var m=n+1;m<o.length;m+=1)for(var E=!0;v(o[m]-o[m-1])&&E;){var h=f(o,1,m);o[m]=h.value,E=h.changed}for(var y=n;y>0;y-=1)for(var b=!0;v(o[y]-o[y-1])&&b;){var g=f(o,-1,y-1);o[y-1]=g.value,b=g.changed}for(var p=o.length-1;p>0;p-=1)for(var C=!0;v(o[p]-o[p-1])&&C;){var M=f(o,-1,p-1);o[p-1]=M.value,C=M.changed}for(var N=0;N<o.length-1;N+=1)for(var S=!0;v(o[N+1]-o[N])&&S;){var O=f(o,1,N+1);o[N+1]=O.value,S=O.changed}}return{value:o[n],values:o}}]}(Ce,Me,Ne,Oe,z,Se),xe=i(Ae,2),Ie=xe[0],_e=xe[1],ke=function(e,t){var n=t||{},r=n.defaultValue,a=n.value,u=n.onChange,o=n.postState,c=i(y((function(){return b(a)?a:b(r)?"function"===typeof r?r():r:"function"===typeof e?e():e})),2),l=c[0],s=c[1],f=void 0!==a?a:l,d=o?o(f):f,m=v(u),E=i(y([f]),2),g=E[0],p=E[1];return h((function(){var e=g[0];l!==e&&m(l,e)}),[g]),h((function(){b(a)||s(a)}),[a]),[d,v((function(e,t){s(e,t),p([f],t)}))]}(w,{value:P}),Te=i(ke,2),Re=Te[0],Ue=Te[1],Le=d.useMemo((function(){var e=null===Re||void 0===Re?[]:Array.isArray(Re)?Re:[Re],t=i(e,1)[0],n=null===Re?[]:[void 0===t?Ce:t];if(Z){if(n=c(e),K||void 0===Re){var r=K>=0?K+1:2;for(n=n.slice(0,r);n.length<r;){var a;n.push(null!==(a=n[n.length-1])&&void 0!==a?a:Ce)}}n.sort((function(e,t){return e-t}))}return n.forEach((function(e,t){n[t]=Ie(e)})),n}),[Re,Z,Ce,K,Ie]),Fe=d.useRef(Le);Fe.current=Le;var Pe=function(e){return Z?e:e[0]},we=function(e){var t=c(e).sort((function(e,t){return e-t}));W&&!A(t,Fe.current,!0)&&W(Pe(t)),Ue(t)},Ze=function(){null===V||void 0===V||V(Pe(Fe.current)),O(!V,"[rc-slider] `onAfterChange` is deprecated. Please use `onChangeComplete` instead."),null===X||void 0===X||X(Pe(Fe.current))},He=function(e,t,n,r,a,u,o,l,s){var f=i(d.useState(null),2),v=f[0],m=f[1],E=i(d.useState(-1),2),h=E[0],y=E[1],b=i(d.useState(n),2),g=b[0],p=b[1],C=i(d.useState(n),2),M=C[0],N=C[1],S=d.useRef(null),O=d.useRef(null);d.useEffect((function(){-1===h&&p(n)}),[n,h]),d.useEffect((function(){return function(){document.removeEventListener("mousemove",S.current),document.removeEventListener("mouseup",O.current),document.removeEventListener("touchmove",S.current),document.removeEventListener("touchend",O.current)}}),[]);var A=function(e,t){g.some((function(t,n){return t!==e[n]}))&&(void 0!==t&&m(t),p(e),o(e))},x=function(e,t){if(-1===e){var n=M[0],o=M[M.length-1],i=r-n,l=a-o,f=t*(a-r);f=Math.max(f,i),f=Math.min(f,l);var d=u(n+f);f=d-n;var v=M.map((function(e){return e+f}));A(v)}else{var m=(a-r)*t,E=c(g);E[e]=M[e];var h=s(E,m,e,"dist");A(h.values,h.value)}},I=d.useRef(x);I.current=x;var _=d.useMemo((function(){var e=c(n).sort((function(e,t){return e-t})),t=c(g).sort((function(e,t){return e-t}));return e.every((function(e,n){return e===t[n]}))?g:n}),[n,g]);return[h,v,_,function(r,a,u){r.stopPropagation();var o=u||n,c=o[a];y(a),m(c),N(o);var i=D(r),s=i.pageX,f=i.pageY,d=function(n){n.preventDefault();var r,u=D(n),o=u.pageX,c=u.pageY,i=o-s,l=c-f,d=e.current.getBoundingClientRect(),v=d.width,m=d.height;switch(t){case"btt":r=-l/m;break;case"ttb":r=l/m;break;case"rtl":r=-i/v;break;default:r=i/v}I.current(a,r)},v=function e(t){t.preventDefault(),document.removeEventListener("mouseup",e),document.removeEventListener("mousemove",d),document.removeEventListener("touchend",e),document.removeEventListener("touchmove",d),S.current=null,O.current=null,y(-1),l()};document.addEventListener("mouseup",v),document.addEventListener("mousemove",d),document.addEventListener("touchend",v),document.addEventListener("touchmove",d),S.current=d,O.current=v}]}(ge,pe,Le,Ce,Me,Ie,we,Ze,_e),De=i(He,4),Ke=De[0],Ge=De[1],We=De[2],Be=De[3],je=function(e,t){if(!C){var n=0,r=Me-Ce;Le.forEach((function(t,a){var u=Math.abs(e-t);u<=r&&(r=u,n=a)}));var a=c(Le);a[n]=e,Z&&!Le.length&&void 0===K&&a.push(e),null===j||void 0===j||j(Pe(a)),we(a),t&&Be(t,n,a)}},Ye=i(d.useState(null),2),Ve=Ye[0],Xe=Ye[1];d.useEffect((function(){if(null!==Ve){var e=Le.indexOf(Ve);e>=0&&be.current.focus(e)}Xe(null)}),[Ve]);var Qe=d.useMemo((function(){return(!q||null!==Ne)&&q}),[q,Ne]),ze=function(e,t){Be(e,t),null===j||void 0===j||j(Pe(Fe.current))},Je=-1!==Ke;d.useEffect((function(){if(!Je){var e=Le.lastIndexOf(Ge);be.current.focus(e)}}),[Je]);var $e=d.useMemo((function(){return c(We).sort((function(e,t){return e-t}))}),[We]),qe=i(d.useMemo((function(){return Z?[$e[0],$e[$e.length-1]]:[Ce,$e[0]]}),[$e,Z,Ce]),2),et=qe[0],tt=qe[1];d.useImperativeHandle(t,(function(){return{focus:function(){be.current.focus(0)},blur:function(){var e=document.activeElement;ge.current.contains(e)&&(null===e||void 0===e||e.blur())}}})),d.useEffect((function(){S&&be.current.focus(0)}),[]);var nt=d.useMemo((function(){return{min:Ce,max:Me,direction:pe,disabled:C,keyboard:N,step:Ne,included:re,includedStart:et,includedEnd:tt,range:Z,tabIndex:me,ariaLabelForHandle:Ee,ariaLabelledByForHandle:he,ariaValueTextFormatterForHandle:ye,styles:g||{},classNames:E||{}}}),[Ce,Me,pe,C,N,Ne,re,et,tt,Z,me,Ee,he,ye,g,E]);return d.createElement(x.Provider,{value:nt},d.createElement("div",{ref:ge,className:f()(o,s,(n={},(0,a.Z)(n,"".concat(o,"-disabled"),C),(0,a.Z)(n,"".concat(o,"-vertical"),te),(0,a.Z)(n,"".concat(o,"-horizontal"),!te),(0,a.Z)(n,"".concat(o,"-with-marks"),Oe.length),n)),style:m,onMouseDown:function(e){e.preventDefault();var t,n=ge.current.getBoundingClientRect(),r=n.width,a=n.height,u=n.left,o=n.top,c=n.bottom,i=n.right,l=e.clientX,s=e.clientY;switch(pe){case"btt":t=(c-s)/a;break;case"ttb":t=(s-o)/a;break;case"rtl":t=(i-l)/r;break;default:t=(l-u)/r}je(Ie(Ce+t*(Me-Ce)),e)}},d.createElement("div",{className:f()("".concat(o,"-rail"),null===E||void 0===E?void 0:E.rail),style:(0,r.Z)((0,r.Z)({},ce),null===g||void 0===g?void 0:g.rail)}),d.createElement(Y,{prefixCls:o,style:ue,values:$e,startPoint:ae,onStartMove:Qe?ze:null}),d.createElement(B,{prefixCls:o,marks:Oe,dots:fe,style:ie,activeStyle:le}),d.createElement(H,{ref:be,prefixCls:o,style:oe,values:We,draggingIndex:Ke,onStartMove:ze,onOffsetChange:function(e,t){if(!C){var n=_e(Le,e,t);null===j||void 0===j||j(Pe(Le)),we(n.values),Xe(n.value)}},onFocus:I,onBlur:_,handleRender:de,onChangeComplete:Ze}),d.createElement(G,{prefixCls:o,marks:Oe,onClick:je})))}));var X=V}}]);