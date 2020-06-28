(window.webpackJsonp=window.webpackJsonp||[]).push([[144],{1634:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return f}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var b=o.a.createContext({}),l=function(e){var t=o.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},u=function(e){var t=l(e.components);return o.a.createElement(b.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,b=p(e,["components","mdxType","originalType","parentName"]),u=l(n),d=r,f=u["".concat(i,".").concat(d)]||u[d]||s[d]||a;return n?o.a.createElement(f,c({ref:t},b,{components:n})):o.a.createElement(f,c({ref:t},b))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var b=2;b<a;b++)i[b]=n[b];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},277:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return l}));var r=n(1),o=n(9),a=(n(0),n(1634)),i={title:"\u73af\u5883\u5224\u65ad"},c={id:"version-3.0.0-beta.5/apis/about/env",title:"\u73af\u5883\u5224\u65ad",description:"## Taro.ENV_TYPE\r",source:"@site/versioned_docs/version-3.0.0-beta.5/apis/about/env.md",permalink:"/taro/docs/3.0.0-beta.5/apis/about/env",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-3.0.0-beta.5/apis/about/env.md",version:"3.0.0-beta.5",sidebar:"version-3.0.0-beta.5/API",previous:{title:"Taro.Component",permalink:"/taro/docs/3.0.0-beta.5/apis/about/tarocomponent"},next:{title:"\u6d88\u606f\u673a\u5236",permalink:"/taro/docs/3.0.0-beta.5/apis/about/events"}},p=[{value:"Taro.ENV_TYPE",id:"taroenv_type",children:[]},{value:"Taro.getEnv()",id:"tarogetenv",children:[]}],b={rightToc:p};function l(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"taroenv_type"},"Taro.ENV_TYPE"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"ENV_TYPE.WEAPP")," \u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u73af\u5883"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"ENV_TYPE.SWAN")," \u767e\u5ea6\u5c0f\u7a0b\u5e8f\u73af\u5883"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"ENV_TYPE.ALIPAY")," \u652f\u4ed8\u5b9d\u5c0f\u7a0b\u5e8f\u73af\u5883"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"ENV_TYPE.TT")," \u5b57\u8282\u8df3\u52a8\u5c0f\u7a0b\u5e8f\u73af\u5883"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"ENV_TYPE.WEB")," WEB(H5)\u73af\u5883"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"ENV_TYPE.RN")," ReactNative \u73af\u5883"),Object(a.b)("h2",{id:"tarogetenv"},"Taro.getEnv()"),Object(a.b)("p",null,"\u83b7\u53d6\u5f53\u524d\u73af\u5883\u503c\uff0c\u5177\u4f53\u503c\u5982\u4e0a ",Object(a.b)("inlineCode",{parentName:"p"},"Taro.ENV_TYPE")))}l.isMDXComponent=!0}}]);