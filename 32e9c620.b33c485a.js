(window.webpackJsonp=window.webpackJsonp||[]).push([[319],{1634:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return j}));var l=n(0),c=n.n(l);function b(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){b(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,l,c=function(e,t){if(null==e)return{};var n,l,c={},b=Object.keys(e);for(l=0;l<b.length;l++)n=b[l],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(l=0;l<b.length;l++)n=b[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}var i=c.a.createContext({}),u=function(e){var t=c.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):a({},t,{},e)),n},p=function(e){var t=u(e.components);return c.a.createElement(i.Provider,{value:t},e.children)},O={inlineCode:"code",wrapper:function(e){var t=e.children;return c.a.createElement(c.a.Fragment,{},t)}},d=Object(l.forwardRef)((function(e,t){var n=e.components,l=e.mdxType,b=e.originalType,r=e.parentName,i=o(e,["components","mdxType","originalType","parentName"]),p=u(n),d=l,j=p["".concat(r,".").concat(d)]||p[d]||O[d]||b;return n?c.a.createElement(j,a({ref:t},i,{components:n})):c.a.createElement(j,a({ref:t},i))}));function j(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var b=n.length,r=new Array(b);r[0]=d;var a={};for(var o in t)hasOwnProperty.call(t,o)&&(a[o]=t[o]);a.originalType=e,a.mdxType="string"==typeof e?e:l,r[1]=a;for(var i=2;i<b;i++)r[i]=n[i];return c.a.createElement.apply(null,r)}return c.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},458:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return a})),n.d(t,"rightToc",(function(){return o})),n.d(t,"default",(function(){return u}));var l=n(1),c=n(9),b=(n(0),n(1634)),r={title:"Taro.openDocument(option)",sidebar_label:"openDocument"},a={id:"apis/files/openDocument",title:"Taro.openDocument(option)",description:"\u65b0\u5f00\u9875\u9762\u6253\u5f00\u6587\u6863\uff0c\u652f\u6301\u683c\u5f0f",source:"@site/docs/apis/files/openDocument.md",permalink:"/taro/docs/next/apis/files/openDocument",editUrl:"https://github.com/nervjs/taro/edit/docs/docs/apis/files/openDocument.md",version:"next",sidebar_label:"openDocument",sidebar:"API",previous:{title:"Taro.removeSavedFile(option)",permalink:"/taro/docs/next/apis/files/removeSavedFile"},next:{title:"Taro.getSavedFileList(option)",permalink:"/taro/docs/next/apis/files/getSavedFileList"}},o=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",children:[]},{value:"\u53c2\u6570",id:"\u53c2\u6570",children:[{value:"Option",id:"option",children:[]},{value:"fileType",id:"filetype",children:[]}]},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",children:[]},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6",children:[]}],i={rightToc:o};function u(e){var t=e.components,n=Object(c.a)(e,["components"]);return Object(b.b)("wrapper",Object(l.a)({},i,n,{components:t,mdxType:"MDXLayout"}),Object(b.b)("p",null,"\u65b0\u5f00\u9875\u9762\u6253\u5f00\u6587\u6863\uff0c\u652f\u6301\u683c\u5f0f"),Object(b.b)("blockquote",null,Object(b.b)("p",{parentName:"blockquote"},Object(b.b)("a",Object(l.a)({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/api/file/wx.openDocument.html"}),"\u53c2\u8003\u6587\u6863"))),Object(b.b)("h2",{id:"\u7c7b\u578b"},"\u7c7b\u578b"),Object(b.b)("pre",null,Object(b.b)("code",Object(l.a)({parentName:"pre"},{className:"language-tsx"}),"(option: Option) => Promise<CallbackResult>\n")),Object(b.b)("h2",{id:"\u53c2\u6570"},"\u53c2\u6570"),Object(b.b)("h3",{id:"option"},"Option"),Object(b.b)("table",null,Object(b.b)("thead",null,Object(b.b)("tr",null,Object(b.b)("th",null,"\u53c2\u6570"),Object(b.b)("th",null,"\u7c7b\u578b"),Object(b.b)("th",{style:{textAlign:"center"}},"\u5fc5\u586b"),Object(b.b)("th",null,"\u8bf4\u660e"))),Object(b.b)("tbody",null,Object(b.b)("tr",null,Object(b.b)("td",null,"filePath"),Object(b.b)("td",null,Object(b.b)("code",null,"string")),Object(b.b)("td",{style:{textAlign:"center"}},"\u662f"),Object(b.b)("td",null,"\u6587\u4ef6\u8def\u5f84\uff0c\u53ef\u901a\u8fc7 downloadFile \u83b7\u5f97")),Object(b.b)("tr",null,Object(b.b)("td",null,"complete"),Object(b.b)("td",null,Object(b.b)("code",null,"(res: CallbackResult) => void")),Object(b.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(b.b)("td",null,"\u63a5\u53e3\u8c03\u7528\u7ed3\u675f\u7684\u56de\u8c03\u51fd\u6570\uff08\u8c03\u7528\u6210\u529f\u3001\u5931\u8d25\u90fd\u4f1a\u6267\u884c\uff09")),Object(b.b)("tr",null,Object(b.b)("td",null,"fail"),Object(b.b)("td",null,Object(b.b)("code",null,"(res: CallbackResult) => void")),Object(b.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(b.b)("td",null,"\u63a5\u53e3\u8c03\u7528\u5931\u8d25\u7684\u56de\u8c03\u51fd\u6570")),Object(b.b)("tr",null,Object(b.b)("td",null,"fileType"),Object(b.b)("td",null,Object(b.b)("code",null,'"doc" | "docx" | "xls" | "xlsx" | "ppt" | "pptx" | "pdf"')),Object(b.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(b.b)("td",null,"\u6587\u4ef6\u7c7b\u578b\uff0c\u6307\u5b9a\u6587\u4ef6\u7c7b\u578b\u6253\u5f00\u6587\u4ef6")),Object(b.b)("tr",null,Object(b.b)("td",null,"success"),Object(b.b)("td",null,Object(b.b)("code",null,"(res: CallbackResult) => void")),Object(b.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(b.b)("td",null,"\u63a5\u53e3\u8c03\u7528\u6210\u529f\u7684\u56de\u8c03\u51fd\u6570")))),Object(b.b)("h3",{id:"filetype"},"fileType"),Object(b.b)("p",null,"\u6587\u4ef6\u7c7b\u578b"),Object(b.b)("table",null,Object(b.b)("thead",null,Object(b.b)("tr",null,Object(b.b)("th",null,"\u53c2\u6570"),Object(b.b)("th",null,"\u8bf4\u660e"))),Object(b.b)("tbody",null,Object(b.b)("tr",null,Object(b.b)("td",null,"doc"),Object(b.b)("td",null,"doc \u683c\u5f0f")),Object(b.b)("tr",null,Object(b.b)("td",null,"docx"),Object(b.b)("td",null,"docx \u683c\u5f0f")),Object(b.b)("tr",null,Object(b.b)("td",null,"xls"),Object(b.b)("td",null,"xls \u683c\u5f0f")),Object(b.b)("tr",null,Object(b.b)("td",null,"xlsx"),Object(b.b)("td",null,"xlsx \u683c\u5f0f")),Object(b.b)("tr",null,Object(b.b)("td",null,"ppt"),Object(b.b)("td",null,"ppt \u683c\u5f0f")),Object(b.b)("tr",null,Object(b.b)("td",null,"pptx"),Object(b.b)("td",null,"pptx \u683c\u5f0f")),Object(b.b)("tr",null,Object(b.b)("td",null,"pdf"),Object(b.b)("td",null,"pdf \u683c\u5f0f")))),Object(b.b)("h2",{id:"\u793a\u4f8b\u4ee3\u7801"},"\u793a\u4f8b\u4ee3\u7801"),Object(b.b)("pre",null,Object(b.b)("code",Object(l.a)({parentName:"pre"},{className:"language-tsx"}),"Taro.downloadFile({\n  url: 'https://example.com/somefile.pdf',\n  success: function (res) {\n    var filePath = res.tempFilePath\n    Taro.openDocument({\n      filePath: filePath,\n      success: function (res) {\n        console.log('\u6253\u5f00\u6587\u6863\u6210\u529f')\n      }\n    })\n  }\n})\n")),Object(b.b)("h2",{id:"api-\u652f\u6301\u5ea6"},"API \u652f\u6301\u5ea6"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(l.a)({parentName:"tr"},{align:"center"}),"API"),Object(b.b)("th",Object(l.a)({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(b.b)("th",Object(l.a)({parentName:"tr"},{align:"center"}),"H5"),Object(b.b)("th",Object(l.a)({parentName:"tr"},{align:"center"}),"React Native"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(l.a)({parentName:"tr"},{align:"center"}),"Taro.openDocument"),Object(b.b)("td",Object(l.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(b.b)("td",Object(l.a)({parentName:"tr"},{align:"center"})),Object(b.b)("td",Object(l.a)({parentName:"tr"},{align:"center"}))))))}u.isMDXComponent=!0}}]);