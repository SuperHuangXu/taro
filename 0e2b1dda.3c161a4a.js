(window.webpackJsonp=window.webpackJsonp||[]).push([[98],{1634:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return O}));var a=n(0),r=n.n(a);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=r.a.createContext({}),l=function(e){var t=r.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):b({},t,{},e)),n},s=function(e){var t=l(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,c=e.originalType,o=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),s=l(n),m=a,O=s["".concat(o,".").concat(m)]||s[m]||u[m]||c;return n?r.a.createElement(O,b({ref:t},p,{components:n})):r.a.createElement(O,b({ref:t},p))}));function O(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=n.length,o=new Array(c);o[0]=m;var b={};for(var i in t)hasOwnProperty.call(t,i)&&(b[i]=t[i]);b.originalType=e,b.mdxType="string"==typeof e?e:a,o[1]=b;for(var p=2;p<c;p++)o[p]=n[p];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},231:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return b})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return l}));var a=n(1),r=n(9),c=(n(0),n(1634)),o={title:"Taro.canIUse(schema)",sidebar_label:"canIUse"},b={id:"apis/base/canIUse",title:"Taro.canIUse(schema)",description:"\u5224\u65ad\u5c0f\u7a0b\u5e8f\u7684 API\uff0c\u56de\u8c03\uff0c\u53c2\u6570\uff0c\u7ec4\u4ef6\u7b49\u662f\u5426\u5728\u5f53\u524d\u7248\u672c\u53ef\u7528\u3002",source:"@site/docs/apis/base/canIUse.md",permalink:"/taro/docs/next/apis/base/canIUse",editUrl:"https://github.com/nervjs/taro/edit/docs/docs/apis/base/canIUse.md",version:"next",sidebar_label:"canIUse",sidebar:"API",previous:{title:"General",permalink:"/taro/docs/next/apis/General"},next:{title:"Taro.base64ToArrayBuffer(base64)",permalink:"/taro/docs/next/apis/base/base64ToArrayBuffer"}},i=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",children:[]},{value:"\u53c2\u6570",id:"\u53c2\u6570",children:[]},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",children:[]},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6",children:[]}],p={rightToc:i};function l(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"\u5224\u65ad\u5c0f\u7a0b\u5e8f\u7684 API\uff0c\u56de\u8c03\uff0c\u53c2\u6570\uff0c\u7ec4\u4ef6\u7b49\u662f\u5426\u5728\u5f53\u524d\u7248\u672c\u53ef\u7528\u3002"),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/api/base/wx.canIUse.html"}),"\u53c2\u8003\u6587\u6863"))),Object(c.b)("h2",{id:"\u7c7b\u578b"},"\u7c7b\u578b"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-tsx"}),"(schema: string) => boolean\n")),Object(c.b)("h2",{id:"\u53c2\u6570"},"\u53c2\u6570"),Object(c.b)("p",null,"\u4f7f\u7528 ",Object(c.b)("inlineCode",{parentName:"p"},"${API}.${method}.${param}.${option}")," \u6216\u8005 ",Object(c.b)("inlineCode",{parentName:"p"},"${component}.${attribute}.${option}")," \u65b9\u5f0f\u6765\u8c03\u7528  "),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"\u53c2\u6570\u8bf4\u660e"),"  "),Object(c.b)("p",null,"-"," ",Object(c.b)("inlineCode",{parentName:"p"},"${API}")," \u4ee3\u8868 API \u540d\u5b57",Object(c.b)("br",{parentName:"p"}),"\n","-"," ",Object(c.b)("inlineCode",{parentName:"p"},"${method}")," \u4ee3\u8868\u8c03\u7528\u65b9\u5f0f\uff0c\u6709\u6548\u503c\u4e3areturn, success, object, callback",Object(c.b)("br",{parentName:"p"}),"\n","-"," ",Object(c.b)("inlineCode",{parentName:"p"},"${param}")," \u4ee3\u8868\u53c2\u6570\u6216\u8005\u8fd4\u56de\u503c",Object(c.b)("br",{parentName:"p"}),"\n","-"," ",Object(c.b)("inlineCode",{parentName:"p"},"${option}")," \u4ee3\u8868\u53c2\u6570\u7684\u53ef\u9009\u503c\u6216\u8005\u8fd4\u56de\u503c\u7684\u5c5e\u6027",Object(c.b)("br",{parentName:"p"}),"\n","-"," ",Object(c.b)("inlineCode",{parentName:"p"},"${component}")," \u4ee3\u8868\u7ec4\u4ef6\u540d\u5b57",Object(c.b)("br",{parentName:"p"}),"\n","-"," ",Object(c.b)("inlineCode",{parentName:"p"},"${attribute}")," \u4ee3\u8868\u7ec4\u4ef6\u5c5e\u6027",Object(c.b)("br",{parentName:"p"}),"\n","-"," ",Object(c.b)("inlineCode",{parentName:"p"},"${option}")," \u4ee3\u8868\u7ec4\u4ef6\u5c5e\u6027\u7684\u53ef\u9009\u503c"),Object(c.b)("h2",{id:"\u793a\u4f8b\u4ee3\u7801"},"\u793a\u4f8b\u4ee3\u7801"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-tsx"}),"Taro.canIUse('openBluetoothAdapter')\nTaro.canIUse('getSystemInfoSync.return.screenWidth')\nTaro.canIUse('getSystemInfo.success.screenWidth')\nTaro.canIUse('showToast.object.image')\nTaro.canIUse('onCompassChange.callback.direction')\nTaro.canIUse('request.object.method.GET')\nTaro.canIUse('live-player')\nTaro.canIUse('text.selectable')\nTaro.canIUse('button.open-type.contact')\n")),Object(c.b)("h2",{id:"api-\u652f\u6301\u5ea6"},"API \u652f\u6301\u5ea6"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"API"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"H5"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"React Native"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"Taro.canIUse"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"})),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}))))))}l.isMDXComponent=!0}}]);