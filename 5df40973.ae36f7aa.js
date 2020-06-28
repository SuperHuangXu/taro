(window.webpackJsonp=window.webpackJsonp||[]).push([[582],{1634:function(t,e,n){"use strict";n.d(e,"a",(function(){return i})),n.d(e,"b",(function(){return p}));var b=n(0),r=n.n(b);function c(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(t);e&&(b=b.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,b)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){c(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function O(t,e){if(null==t)return{};var n,b,r=function(t,e){if(null==t)return{};var n,b,r={},c=Object.keys(t);for(b=0;b<c.length;b++)n=c[b],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(t);for(b=0;b<c.length;b++)n=c[b],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var j=r.a.createContext({}),d=function(t){var e=r.a.useContext(j),n=e;return t&&(n="function"==typeof t?t(e):l({},e,{},t)),n},i=function(t){var e=d(t.components);return r.a.createElement(j.Provider,{value:e},t.children)},o={inlineCode:"code",wrapper:function(t){var e=t.children;return r.a.createElement(r.a.Fragment,{},e)}},u=Object(b.forwardRef)((function(t,e){var n=t.components,b=t.mdxType,c=t.originalType,a=t.parentName,j=O(t,["components","mdxType","originalType","parentName"]),i=d(n),u=b,p=i["".concat(a,".").concat(u)]||i[u]||o[u]||c;return n?r.a.createElement(p,l({ref:e},j,{components:n})):r.a.createElement(p,l({ref:e},j))}));function p(t,e){var n=arguments,b=e&&e.mdxType;if("string"==typeof t||b){var c=n.length,a=new Array(c);a[0]=u;var l={};for(var O in e)hasOwnProperty.call(e,O)&&(l[O]=e[O]);l.originalType=t,l.mdxType="string"==typeof t?t:b,a[1]=l;for(var j=2;j<c;j++)a[j]=n[j];return r.a.createElement.apply(null,a)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},721:function(t,e,n){"use strict";n.r(e),n.d(e,"frontMatter",(function(){return a})),n.d(e,"metadata",(function(){return l})),n.d(e,"rightToc",(function(){return O})),n.d(e,"default",(function(){return d}));var b=n(1),r=n(9),c=(n(0),n(1634)),a={title:"Audio",sidebar_label:"Audio"},l={id:"components/media/audio",title:"Audio",description:"\u97f3\u9891\u30021.6.0\u7248\u672c\u5f00\u59cb\uff0c\u8be5\u7ec4\u4ef6\u4e0d\u518d\u7ef4\u62a4\u3002\u5efa\u8bae\u4f7f\u7528\u80fd\u529b\u66f4\u5f3a\u7684 Taro.createInnerAudioContext \u63a5\u53e3",source:"@site/docs/components/media/audio.md",permalink:"/taro/docs/next/components/media/audio",editUrl:"https://github.com/nervjs/taro/edit/docs/docs/components/media/audio.md",version:"next",sidebar_label:"Audio",sidebar:"components",previous:{title:"Navigator",permalink:"/taro/docs/next/components/navig/navigator"},next:{title:"Image",permalink:"/taro/docs/next/components/media/image"}},O=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",children:[]},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",children:[]},{value:"AudioProps",id:"audioprops",children:[{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6",children:[]},{value:"onErrorEventDetail",id:"onerroreventdetail",children:[]},{value:"onTimeUpdateEventDetail",id:"ontimeupdateeventdetail",children:[]},{value:"MediaError",id:"mediaerror",children:[]}]},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6-1",children:[]}],j={rightToc:O};function d(t){var e=t.components,n=Object(r.a)(t,["components"]);return Object(c.b)("wrapper",Object(b.a)({},j,n,{components:e,mdxType:"MDXLayout"}),Object(c.b)("p",null,"\u97f3\u9891\u30021.6.0\u7248\u672c\u5f00\u59cb\uff0c\u8be5\u7ec4\u4ef6\u4e0d\u518d\u7ef4\u62a4\u3002\u5efa\u8bae\u4f7f\u7528\u80fd\u529b\u66f4\u5f3a\u7684 Taro.createInnerAudioContext \u63a5\u53e3"),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},Object(c.b)("a",Object(b.a)({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/component/audio.html"}),"\u53c2\u8003\u6587\u6863"))),Object(c.b)("h2",{id:"\u7c7b\u578b"},"\u7c7b\u578b"),Object(c.b)("pre",null,Object(c.b)("code",Object(b.a)({parentName:"pre"},{className:"language-tsx"}),"ComponentType<AudioProps>\n")),Object(c.b)("h2",{id:"\u793a\u4f8b\u4ee3\u7801"},"\u793a\u4f8b\u4ee3\u7801"),Object(c.b)("pre",null,Object(c.b)("code",Object(b.a)({parentName:"pre"},{className:"language-tsx"}),"export default class PageView extends Component {\n  constructor() {\n    super(...arguments)\n  }\n\n  render() {\n    return (\n      <View className='components-page'>\n        <Audio\n          src='https://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E06DCBDC9AB7C49FD713D632D313AC4858BACB8DDD29067D3C601481D36E62053BF8DFEAF74C0A5CCFADD6471160CAF3E6A&fromtag=46'\n          controls={true}\n          autoplay={false}\n          loop={false}\n          muted={true}\n          initialTime='30'\n          id='video'\n        />\n      </View>\n    )\n  }\n}\n")),Object(c.b)("h2",{id:"audioprops"},"AudioProps"),Object(c.b)("table",null,Object(c.b)("thead",null,Object(c.b)("tr",null,Object(c.b)("th",null,"\u53c2\u6570"),Object(c.b)("th",null,"\u7c7b\u578b"),Object(c.b)("th",{style:{textAlign:"center"}},"\u9ed8\u8ba4\u503c"),Object(c.b)("th",{style:{textAlign:"center"}},"\u5fc5\u586b"),Object(c.b)("th",null,"\u8bf4\u660e"))),Object(c.b)("tbody",null,Object(c.b)("tr",null,Object(c.b)("td",null,"id"),Object(c.b)("td",null,Object(c.b)("code",null,"string")),Object(c.b)("td",{style:{textAlign:"center"}}),Object(c.b)("td",{style:{textAlign:"center"}},"\u662f"),Object(c.b)("td",null,"audio \u7ec4\u4ef6\u7684\u552f\u4e00\u6807\u8bc6\u7b26")),Object(c.b)("tr",null,Object(c.b)("td",null,"src"),Object(c.b)("td",null,Object(c.b)("code",null,"string")),Object(c.b)("td",{style:{textAlign:"center"}}),Object(c.b)("td",{style:{textAlign:"center"}},"\u662f"),Object(c.b)("td",null,"\u8981\u64ad\u653e\u97f3\u9891\u7684\u8d44\u6e90\u5730\u5740")),Object(c.b)("tr",null,Object(c.b)("td",null,"loop"),Object(c.b)("td",null,Object(c.b)("code",null,"boolean")),Object(c.b)("td",{style:{textAlign:"center"}},Object(c.b)("code",null,"false")),Object(c.b)("td",{style:{textAlign:"center"}},"\u662f"),Object(c.b)("td",null,"\u662f\u5426\u5faa\u73af\u64ad\u653e")),Object(c.b)("tr",null,Object(c.b)("td",null,"muted"),Object(c.b)("td",null,Object(c.b)("code",null,"boolean")),Object(c.b)("td",{style:{textAlign:"center"}},Object(c.b)("code",null,"false")),Object(c.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(c.b)("td",null,"\u662f\u5426\u9759\u97f3\u64ad\u653e",Object(c.b)("br",null),Object(c.b)("strong",null,"\u4e0d\u63a8\u8350\u4f7f\u7528"))),Object(c.b)("tr",null,Object(c.b)("td",null,"controls"),Object(c.b)("td",null,Object(c.b)("code",null,"boolean")),Object(c.b)("td",{style:{textAlign:"center"}},Object(c.b)("code",null,"false")),Object(c.b)("td",{style:{textAlign:"center"}},"\u662f"),Object(c.b)("td",null,"\u662f\u5426\u663e\u793a\u9ed8\u8ba4\u63a7\u4ef6")),Object(c.b)("tr",null,Object(c.b)("td",null,"poster"),Object(c.b)("td",null,Object(c.b)("code",null,"string")),Object(c.b)("td",{style:{textAlign:"center"}}),Object(c.b)("td",{style:{textAlign:"center"}},"\u662f"),Object(c.b)("td",null,"\u9ed8\u8ba4\u63a7\u4ef6\u4e0a\u7684\u97f3\u9891\u5c01\u9762\u7684\u56fe\u7247\u8d44\u6e90\u5730\u5740\uff0c\u5982\u679c controls \u5c5e\u6027\u503c\u4e3a false \u5219\u8bbe\u7f6e poster \u65e0\u6548")),Object(c.b)("tr",null,Object(c.b)("td",null,"name"),Object(c.b)("td",null,Object(c.b)("code",null,"string")),Object(c.b)("td",{style:{textAlign:"center"}},Object(c.b)("code",null,'"\u672a\u77e5\u97f3\u9891"')),Object(c.b)("td",{style:{textAlign:"center"}},"\u662f"),Object(c.b)("td",null,"\u9ed8\u8ba4\u63a7\u4ef6\u4e0a\u7684\u97f3\u9891\u540d\u5b57\uff0c\u5982\u679c controls \u5c5e\u6027\u503c\u4e3a false \u5219\u8bbe\u7f6e name \u65e0\u6548")),Object(c.b)("tr",null,Object(c.b)("td",null,"author"),Object(c.b)("td",null,Object(c.b)("code",null,"string")),Object(c.b)("td",{style:{textAlign:"center"}},Object(c.b)("code",null,'"\u672a\u77e5\u4f5c\u8005"')),Object(c.b)("td",{style:{textAlign:"center"}},"\u662f"),Object(c.b)("td",null,"\u9ed8\u8ba4\u63a7\u4ef6\u4e0a\u7684\u4f5c\u8005\u540d\u5b57\uff0c\u5982\u679c controls \u5c5e\u6027\u503c\u4e3a false \u5219\u8bbe\u7f6e author \u65e0\u6548")),Object(c.b)("tr",null,Object(c.b)("td",null,"onError"),Object(c.b)("td",null,Object(c.b)("code",null,"BaseEventOrigFunction<onErrorEventDetail>")),Object(c.b)("td",{style:{textAlign:"center"}}),Object(c.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(c.b)("td",null,"\u5f53\u53d1\u751f\u9519\u8bef\u65f6\u89e6\u53d1 error \u4e8b\u4ef6\uff0cdetail = ","{errMsg: MediaError.code}")),Object(c.b)("tr",null,Object(c.b)("td",null,"onPlay"),Object(c.b)("td",null,Object(c.b)("code",null,"BaseEventOrigFunction<any>")),Object(c.b)("td",{style:{textAlign:"center"}}),Object(c.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(c.b)("td",null,"\u5f53\u5f00\u59cb/\u7ee7\u7eed\u64ad\u653e\u65f6\u89e6\u53d1play\u4e8b\u4ef6")),Object(c.b)("tr",null,Object(c.b)("td",null,"onPause"),Object(c.b)("td",null,Object(c.b)("code",null,"BaseEventOrigFunction<any>")),Object(c.b)("td",{style:{textAlign:"center"}}),Object(c.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(c.b)("td",null,"\u5f53\u6682\u505c\u64ad\u653e\u65f6\u89e6\u53d1 pause \u4e8b\u4ef6")),Object(c.b)("tr",null,Object(c.b)("td",null,"onTimeUpdate"),Object(c.b)("td",null,Object(c.b)("code",null,"BaseEventOrigFunction<onTimeUpdateEventDetail>")),Object(c.b)("td",{style:{textAlign:"center"}}),Object(c.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(c.b)("td",null,"\u5f53\u64ad\u653e\u8fdb\u5ea6\u6539\u53d8\u65f6\u89e6\u53d1 timeupdate \u4e8b\u4ef6\uff0cdetail = ","{currentTime, duration}")),Object(c.b)("tr",null,Object(c.b)("td",null,"onEnded"),Object(c.b)("td",null,Object(c.b)("code",null,"BaseEventOrigFunction<any>")),Object(c.b)("td",{style:{textAlign:"center"}}),Object(c.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(c.b)("td",null,"\u5f53\u64ad\u653e\u5230\u672b\u5c3e\u65f6\u89e6\u53d1 ended \u4e8b\u4ef6")))),Object(c.b)("h3",{id:"api-\u652f\u6301\u5ea6"},"API \u652f\u6301\u5ea6"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(b.a)({parentName:"tr"},{align:"center"}),"API"),Object(c.b)("th",Object(b.a)({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(c.b)("th",Object(b.a)({parentName:"tr"},{align:"center"}),"\u767e\u5ea6\u5c0f\u7a0b\u5e8f"),Object(c.b)("th",Object(b.a)({parentName:"tr"},{align:"center"}),"H5"),Object(c.b)("th",Object(b.a)({parentName:"tr"},{align:"center"}),"React Native"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"AudioProps.id"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"})),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"})),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"AudioProps.src"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"AudioProps.loop"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"AudioProps.muted"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"})),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"})),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"AudioProps.controls"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"AudioProps.poster"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"})),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"AudioProps.name"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"})),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"})),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"AudioProps.author"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"})),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"})),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"AudioProps.onError"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"AudioProps.onPlay"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"AudioProps.onPause"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"AudioProps.onTimeUpdate"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"AudioProps.onEnded"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}))))),Object(c.b)("h3",{id:"onerroreventdetail"},"onErrorEventDetail"),Object(c.b)("table",null,Object(c.b)("thead",null,Object(c.b)("tr",null,Object(c.b)("th",null,"\u53c2\u6570"),Object(c.b)("th",null,"\u7c7b\u578b"))),Object(c.b)("tbody",null,Object(c.b)("tr",null,Object(c.b)("td",null,"errMsg"),Object(c.b)("td",null,Object(c.b)("code",null,"1 | 2 | 3 | 4"))))),Object(c.b)("h3",{id:"ontimeupdateeventdetail"},"onTimeUpdateEventDetail"),Object(c.b)("table",null,Object(c.b)("thead",null,Object(c.b)("tr",null,Object(c.b)("th",null,"\u53c2\u6570"),Object(c.b)("th",null,"\u7c7b\u578b"),Object(c.b)("th",null,"\u8bf4\u660e"))),Object(c.b)("tbody",null,Object(c.b)("tr",null,Object(c.b)("td",null,"currentTime"),Object(c.b)("td",null,Object(c.b)("code",null,"number")),Object(c.b)("td",null,"\u5f53\u524d\u65f6\u95f4")),Object(c.b)("tr",null,Object(c.b)("td",null,"duration"),Object(c.b)("td",null,Object(c.b)("code",null,"number")),Object(c.b)("td",null,"\u6301\u7eed\u65f6\u95f4")))),Object(c.b)("h3",{id:"mediaerror"},"MediaError"),Object(c.b)("h4",{id:"code"},"code"),Object(c.b)("table",null,Object(c.b)("thead",null,Object(c.b)("tr",null,Object(c.b)("th",null,"\u53c2\u6570"),Object(c.b)("th",null,"\u8bf4\u660e"))),Object(c.b)("tbody",null,Object(c.b)("tr",null,Object(c.b)("td",null,"1"),Object(c.b)("td",null,"\u83b7\u53d6\u8d44\u6e90\u88ab\u7528\u6237\u7981\u6b62")),Object(c.b)("tr",null,Object(c.b)("td",null,"2"),Object(c.b)("td",null,"\u7f51\u7edc\u9519\u8bef")),Object(c.b)("tr",null,Object(c.b)("td",null,"3"),Object(c.b)("td",null,"\u89e3\u7801\u9519\u8bef")),Object(c.b)("tr",null,Object(c.b)("td",null,"4"),Object(c.b)("td",null,"\u4e0d\u5408\u9002\u8d44\u6e90")))),Object(c.b)("h2",{id:"api-\u652f\u6301\u5ea6-1"},"API \u652f\u6301\u5ea6"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(b.a)({parentName:"tr"},{align:"center"}),"API"),Object(c.b)("th",Object(b.a)({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(c.b)("th",Object(b.a)({parentName:"tr"},{align:"center"}),"\u767e\u5ea6\u5c0f\u7a0b\u5e8f"),Object(c.b)("th",Object(b.a)({parentName:"tr"},{align:"center"}),"H5"),Object(c.b)("th",Object(b.a)({parentName:"tr"},{align:"center"}),"React Native"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"Audio"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}))))))}d.isMDXComponent=!0}}]);