(window.webpackJsonp=window.webpackJsonp||[]).push([[1283],{1419:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return b})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return p}));var r=n(1),a=n(9),o=(n(0),n(1634)),c={title:"Taro.onNetworkStatusChange(CALLBACK)",sidebar_label:"onNetworkStatusChange"},b={id:"version-1.3.42/apis/device/netstat/onNetworkStatusChange",title:"Taro.onNetworkStatusChange(CALLBACK)",description:"\u76d1\u542c\u7f51\u7edc\u72b6\u6001\u53d8\u5316\u3002",source:"@site/versioned_docs/version-1.3.42/apis/device/netstat/onNetworkStatusChange.md",permalink:"/taro/docs/1.3.42/apis/device/netstat/onNetworkStatusChange",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-1.3.42/apis/device/netstat/onNetworkStatusChange.md",version:"1.3.42",sidebar_label:"onNetworkStatusChange",sidebar:"version-1.3.42/API",previous:{title:"Taro.getNetworkType(OBJECT)",permalink:"/taro/docs/1.3.42/apis/device/netstat/getNetworkType"},next:{title:"Taro.getHCEState(OBJECT)",permalink:"/taro/docs/1.3.42/apis/device/nfc/getHCEState"}},i=[{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",children:[]},{value:"API\u652f\u6301\u5ea6",id:"api\u652f\u6301\u5ea6",children:[]}],l={rightToc:i};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"\u76d1\u542c\u7f51\u7edc\u72b6\u6001\u53d8\u5316\u3002"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"CALLBACK \u8fd4\u56de\u53c2\u6570\uff1a")),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"\u53c2\u6570"),Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"\u7c7b\u578b"),Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"\u8bf4\u660e"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"isConnected"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Boolean"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"\u5f53\u524d\u662f\u5426\u6709\u7f51\u7edc\u8fde\u63a5")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"networkType"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"String"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"\u7f51\u7edc\u7c7b\u578b")))),Object(o.b)("p",null,"\u6ce8\u610f\uff1a",Object(o.b)("strong",{parentName:"p"},"H5")," \u7aef\u517c\u5bb9\u60c5\u51b5\u8f83\u5dee\uff0c\u53ea\u6709\u5f53 navigator.connection \u652f\u6301\u76d1\u542c onChange \u4e8b\u4ef6\u65f6\u624d\u4f1a\u751f\u6548\u3002"),Object(o.b)("h2",{id:"\u793a\u4f8b\u4ee3\u7801"},"\u793a\u4f8b\u4ee3\u7801"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),"import Taro from '@tarojs/taro'\n\nTaro.onNetworkStatusChange(res => {\n  console.log(res.isConnected)\n  console.log(res.networkType)\n})\n")),Object(o.b)("h2",{id:"api\u652f\u6301\u5ea6"},"API\u652f\u6301\u5ea6"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"API"),Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"H5"),Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"ReactNative"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"Taro.onNetworkStatusChange"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")))))}p.isMDXComponent=!0},1634:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),p=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):b({},t,{},e)),n},s=function(e){var t=p(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},O={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),s=p(n),u=r,d=s["".concat(c,".").concat(u)]||s[u]||O[u]||o;return n?a.a.createElement(d,b({ref:t},l,{components:n})):a.a.createElement(d,b({ref:t},l))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=u;var b={};for(var i in t)hasOwnProperty.call(t,i)&&(b[i]=t[i]);b.originalType=e,b.mdxType="string"==typeof e?e:r,c[1]=b;for(var l=2;l<o;l++)c[l]=n[l];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);