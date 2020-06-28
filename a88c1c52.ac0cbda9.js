(window.webpackJsonp=window.webpackJsonp||[]).push([[1028],{1166:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return i})),t.d(r,"metadata",(function(){return f})),t.d(r,"rightToc",(function(){return c})),t.d(r,"default",(function(){return u}));var a=t(1),n=t(9),o=(t(0),t(1634)),i={title:"arrayBufferToBase64",sidebar_label:"arrayBufferToBase64"},f={id:"version-3.0.0-beta.5/apis/extend-apis/arrayBufferToBase64",title:"arrayBufferToBase64",description:"## Taro.arrayBufferToBase64(arrayBuffer)",source:"@site/versioned_docs/version-3.0.0-beta.5/apis/extend-apis/arrayBufferToBase64.md",permalink:"/taro/docs/3.0.0-beta.5/apis/extend-apis/arrayBufferToBase64",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-3.0.0-beta.5/apis/extend-apis/arrayBufferToBase64.md",version:"3.0.0-beta.5",sidebar_label:"arrayBufferToBase64",sidebar:"version-3.0.0-beta.5/API",previous:{title:"Taro.stopWifi(OBJECT)",permalink:"/taro/docs/3.0.0-beta.5/apis/device/wifi/stopWifi"},next:{title:"base64ToArrayBuffer",permalink:"/taro/docs/3.0.0-beta.5/apis/extend-apis/base64ToArrayBuffer"}},c=[{value:"Taro.arrayBufferToBase64(arrayBuffer)",id:"taroarraybuffertobase64arraybuffer",children:[]}],s={rightToc:c};function u(e){var r=e.components,t=Object(n.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},s,t,{components:r,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"taroarraybuffertobase64arraybuffer"},"Taro.arrayBufferToBase64(arrayBuffer)"),Object(o.b)("p",null,"\u5c06 ArrayBuffer \u6570\u636e\u8f6c\u6210 Base64 \u5b57\u7b26\u4e32\u3002(\u5c0f\u7a0b\u5e8f\u7aef\u57fa\u7840\u5e93 1.1.0 \u5f00\u59cb\u652f\u6301\uff0c\u4f4e\u7248\u672c\u9700\u505a\u517c\u5bb9\u5904\u7406)"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"\u793a\u4f8b\u4ee3\u7801\uff1a")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"import Taro from '@tarojs/taro'\n\nconst arrayBuffer = new Uint8Array([11, 22, 33])\nconst base64 = Taro.arrayBufferToBase64(arrayBuffer)\n")))}u.isMDXComponent=!0},1634:function(e,r,t){"use strict";t.d(r,"a",(function(){return p})),t.d(r,"b",(function(){return y}));var a=t(0),n=t.n(a);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function f(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var s=n.a.createContext({}),u=function(e){var r=n.a.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):f({},r,{},e)),t},p=function(e){var r=u(e.components);return n.a.createElement(s.Provider,{value:r},e.children)},l={inlineCode:"code",wrapper:function(e){var r=e.children;return n.a.createElement(n.a.Fragment,{},r)}},b=Object(a.forwardRef)((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=u(t),b=a,y=p["".concat(i,".").concat(b)]||p[b]||l[b]||o;return t?n.a.createElement(y,f({ref:r},s,{components:t})):n.a.createElement(y,f({ref:r},s))}));function y(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=b;var f={};for(var c in r)hasOwnProperty.call(r,c)&&(f[c]=r[c]);f.originalType=e,f.mdxType="string"==typeof e?e:a,i[1]=f;for(var s=2;s<o;s++)i[s]=t[s];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);