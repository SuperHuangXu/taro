(window.webpackJsonp=window.webpackJsonp||[]).push([[856],{1634:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return j}));var a=n(0),l=n.n(a);function b(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){b(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},b=Object.keys(e);for(a=0;a<b.length;a++)n=b[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(a=0;a<b.length;a++)n=b[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var u=l.a.createContext({}),i=function(e){var t=l.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},d=function(e){var t=i(e.components);return l.a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return l.a.createElement(l.a.Fragment,{},t)}},O=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,b=e.originalType,r=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=i(n),O=a,j=d["".concat(r,".").concat(O)]||d[O]||p[O]||b;return n?l.a.createElement(j,c({ref:t},u,{components:n})):l.a.createElement(j,c({ref:t},u))}));function j(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var b=n.length,r=new Array(b);r[0]=O;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:a,r[1]=c;for(var u=2;u<b;u++)r[u]=n[u];return l.a.createElement.apply(null,r)}return l.a.createElement.apply(null,n)}O.displayName="MDXCreateElement"},995:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return o})),n.d(t,"default",(function(){return i}));var a=n(1),l=n(9),b=(n(0),n(1634)),r={title:"Taro.updateShareMenu(option)",sidebar_label:"updateShareMenu"},c={id:"apis/share/updateShareMenu",title:"Taro.updateShareMenu(option)",description:"\u66f4\u65b0\u8f6c\u53d1\u5c5e\u6027",source:"@site/docs/apis/share/updateShareMenu.md",permalink:"/taro/docs/next/apis/share/updateShareMenu",editUrl:"https://github.com/nervjs/taro/edit/docs/docs/apis/share/updateShareMenu.md",version:"next",sidebar_label:"updateShareMenu",sidebar:"API",previous:{title:"Taro.chooseLocation(option)",permalink:"/taro/docs/next/apis/location/chooseLocation"},next:{title:"Taro.showShareMenu(option)",permalink:"/taro/docs/next/apis/share/showShareMenu"}},o=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",children:[]},{value:"\u53c2\u6570",id:"\u53c2\u6570",children:[{value:"Option",id:"option",children:[]},{value:"UpdatableMessageFrontEndTemplateInfo",id:"updatablemessagefrontendtemplateinfo",children:[]},{value:"UpdatableMessageFrontEndParameter",id:"updatablemessagefrontendparameter",children:[]}]},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",children:[]},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6",children:[]}],u={rightToc:o};function i(e){var t=e.components,n=Object(l.a)(e,["components"]);return Object(b.b)("wrapper",Object(a.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(b.b)("p",null,"\u66f4\u65b0\u8f6c\u53d1\u5c5e\u6027"),Object(b.b)("blockquote",null,Object(b.b)("p",{parentName:"blockquote"},Object(b.b)("a",Object(a.a)({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/api/share/wx.updateShareMenu.html"}),"\u53c2\u8003\u6587\u6863"))),Object(b.b)("h2",{id:"\u7c7b\u578b"},"\u7c7b\u578b"),Object(b.b)("pre",null,Object(b.b)("code",Object(a.a)({parentName:"pre"},{className:"language-tsx"}),"(option: Option) => Promise<CallbackResult>\n")),Object(b.b)("h2",{id:"\u53c2\u6570"},"\u53c2\u6570"),Object(b.b)("h3",{id:"option"},"Option"),Object(b.b)("table",null,Object(b.b)("thead",null,Object(b.b)("tr",null,Object(b.b)("th",null,"\u53c2\u6570"),Object(b.b)("th",null,"\u7c7b\u578b"),Object(b.b)("th",{style:{textAlign:"center"}},"\u5fc5\u586b"),Object(b.b)("th",null,"\u8bf4\u660e"))),Object(b.b)("tbody",null,Object(b.b)("tr",null,Object(b.b)("td",null,"activityId"),Object(b.b)("td",null,Object(b.b)("code",null,"string")),Object(b.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(b.b)("td",null,"\u52a8\u6001\u6d88\u606f\u7684 activityId\u3002\u901a\u8fc7 ",Object(b.b)("a",{href:"https://developers.weixin.qq.com/miniprogram/dev/api-backend/open-api/updatable-message/updatableMessage.createActivityId.html"},"updatableMessage.createActivityId")," \u63a5\u53e3\u83b7\u53d6")),Object(b.b)("tr",null,Object(b.b)("td",null,"complete"),Object(b.b)("td",null,Object(b.b)("code",null,"(res: CallbackResult) => void")),Object(b.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(b.b)("td",null,"\u63a5\u53e3\u8c03\u7528\u7ed3\u675f\u7684\u56de\u8c03\u51fd\u6570\uff08\u8c03\u7528\u6210\u529f\u3001\u5931\u8d25\u90fd\u4f1a\u6267\u884c\uff09")),Object(b.b)("tr",null,Object(b.b)("td",null,"fail"),Object(b.b)("td",null,Object(b.b)("code",null,"(res: CallbackResult) => void")),Object(b.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(b.b)("td",null,"\u63a5\u53e3\u8c03\u7528\u5931\u8d25\u7684\u56de\u8c03\u51fd\u6570")),Object(b.b)("tr",null,Object(b.b)("td",null,"isUpdatableMessage"),Object(b.b)("td",null,Object(b.b)("code",null,"boolean")),Object(b.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(b.b)("td",null,"\u662f\u5426\u662f\u52a8\u6001\u6d88\u606f\uff0c\u8be6\u89c1",Object(b.b)("a",{href:"https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/share/updatable-message.html"},"\u52a8\u6001\u6d88\u606f"))),Object(b.b)("tr",null,Object(b.b)("td",null,"success"),Object(b.b)("td",null,Object(b.b)("code",null,"(res: CallbackResult) => void")),Object(b.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(b.b)("td",null,"\u63a5\u53e3\u8c03\u7528\u6210\u529f\u7684\u56de\u8c03\u51fd\u6570")),Object(b.b)("tr",null,Object(b.b)("td",null,"templateInfo"),Object(b.b)("td",null,Object(b.b)("code",null,"UpdatableMessageFrontEndTemplateInfo")),Object(b.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(b.b)("td",null,"\u52a8\u6001\u6d88\u606f\u7684\u6a21\u677f\u4fe1\u606f")),Object(b.b)("tr",null,Object(b.b)("td",null,"withShareTicket"),Object(b.b)("td",null,Object(b.b)("code",null,"boolean")),Object(b.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(b.b)("td",null,"\u662f\u5426\u4f7f\u7528\u5e26 shareTicket \u7684\u8f6c\u53d1",Object(b.b)("a",{href:"https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/share.html"},"\u8be6\u60c5"))))),Object(b.b)("h3",{id:"updatablemessagefrontendtemplateinfo"},"UpdatableMessageFrontEndTemplateInfo"),Object(b.b)("p",null,"\u52a8\u6001\u6d88\u606f\u7684\u6a21\u677f\u4fe1\u606f"),Object(b.b)("table",null,Object(b.b)("thead",null,Object(b.b)("tr",null,Object(b.b)("th",null,"\u53c2\u6570"),Object(b.b)("th",null,"\u7c7b\u578b"),Object(b.b)("th",null,"\u8bf4\u660e"))),Object(b.b)("tbody",null,Object(b.b)("tr",null,Object(b.b)("td",null,"parameterList"),Object(b.b)("td",null,Object(b.b)("code",null,"UpdatableMessageFrontEndParameter[]")),Object(b.b)("td",null,"\u53c2\u6570\u5217\u8868")))),Object(b.b)("h3",{id:"updatablemessagefrontendparameter"},"UpdatableMessageFrontEndParameter"),Object(b.b)("p",null,"\u53c2\u6570\u5217\u8868"),Object(b.b)("table",null,Object(b.b)("thead",null,Object(b.b)("tr",null,Object(b.b)("th",null,"\u53c2\u6570"),Object(b.b)("th",null,"\u7c7b\u578b"),Object(b.b)("th",null,"\u8bf4\u660e"))),Object(b.b)("tbody",null,Object(b.b)("tr",null,Object(b.b)("td",null,"name"),Object(b.b)("td",null,Object(b.b)("code",null,"string")),Object(b.b)("td",null,"\u53c2\u6570\u540d")),Object(b.b)("tr",null,Object(b.b)("td",null,"value"),Object(b.b)("td",null,Object(b.b)("code",null,"string")),Object(b.b)("td",null,"\u53c2\u6570\u503c")))),Object(b.b)("h2",{id:"\u793a\u4f8b\u4ee3\u7801"},"\u793a\u4f8b\u4ee3\u7801"),Object(b.b)("pre",null,Object(b.b)("code",Object(a.a)({parentName:"pre"},{className:"language-tsx"}),"Taro.updateShareMenu({\n  withShareTicket: true,\n  success () { }\n})\n")),Object(b.b)("h2",{id:"api-\u652f\u6301\u5ea6"},"API \u652f\u6301\u5ea6"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"API"),Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"H5"),Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"React Native"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"Taro.updateShareMenu"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"center"})),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}))))))}i.isMDXComponent=!0}}]);