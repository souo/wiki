"use strict";(self.webpackChunkdev_wiki=self.webpackChunkdev_wiki||[]).push([[9674],{3905:(e,r,t)=>{t.d(r,{Zo:()=>d,kt:()=>f});var n=t(7294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=n.createContext({}),u=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},d=function(e){var r=u(e.components);return n.createElement(l.Provider,{value:r},e.children)},s={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},p=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=u(t),f=a,y=p["".concat(l,".").concat(f)]||p[f]||s[f]||o;return t?n.createElement(y,c(c({ref:r},d),{},{components:t})):n.createElement(y,c({ref:r},d))}));function f(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,c=new Array(o);c[0]=p;var i={};for(var l in r)hasOwnProperty.call(r,l)&&(i[l]=r[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var u=2;u<o;u++)c[u]=t[u];return n.createElement.apply(null,c)}return n.createElement.apply(null,t)}p.displayName="MDXCreateElement"},8169:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>c,default:()=>s,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var n=t(7462),a=(t(7294),t(3905));const o={id:"Thread-Safety-and-Shared-Resources",title:"\u7ebf\u7a0b\u5b89\u5168\u4e0e\u5171\u4eab\u8d44\u6e90"},c=void 0,i={unversionedId:"java/Concurrency/Thread-Safety-and-Shared-Resources",id:"java/Concurrency/Thread-Safety-and-Shared-Resources",title:"\u7ebf\u7a0b\u5b89\u5168\u4e0e\u5171\u4eab\u8d44\u6e90",description:"\u5141\u8bb8\u88ab\u591a\u4e2a\u7ebf\u7a0b\u540c\u65f6\u6267\u884c\u7684\u4ee3\u7801\u79f0\u4f5c\u7ebf\u7a0b\u5b89\u5168\u7684\u4ee3\u7801\u3002\u7ebf\u7a0b\u5b89\u5168\u7684\u4ee3\u7801\u4e0d\u5305\u542b\u7ade\u6001\u6761\u4ef6\u3002 \u5f53\u591a\u4e2a\u7ebf\u7a0b\u540c\u65f6\u66f4\u65b0\u5171\u4eab\u8d44\u6e90\u65f6\u4f1a\u5f15\u53d1\u7ade\u6001\u6761\u4ef6\u3002\u56e0\u6b64\uff0c\u4e86\u89e3Java\u7ebf\u7a0b\u6267\u884c\u65f6\u5171\u4eab\u4e86\u4ec0\u4e48\u8d44\u6e90\u5f88\u91cd\u8981\u3002",source:"@site/docs/java/Concurrency/Thread-Safety-and-Shared-Resources.md",sourceDirName:"java/Concurrency",slug:"/java/Concurrency/Thread-Safety-and-Shared-Resources",permalink:"/wiki/docs/java/Concurrency/Thread-Safety-and-Shared-Resources",draft:!1,tags:[],version:"current",frontMatter:{id:"Thread-Safety-and-Shared-Resources",title:"\u7ebf\u7a0b\u5b89\u5168\u4e0e\u5171\u4eab\u8d44\u6e90"},sidebar:"docs",previous:{title:"\u7ade\u6001\u6761\u4ef6\u4e0e\u4e34\u754c\u533a",permalink:"/wiki/docs/java/Concurrency/race_condition"},next:{title:"\u7ebf\u7a0b\u5b89\u5168\u53ca\u4e0d\u53ef\u53d8\u6027",permalink:"/wiki/docs/java/Concurrency/safe"}},l={},u=[{value:"\u5c40\u90e8\u53d8\u91cf",id:"\u5c40\u90e8\u53d8\u91cf",level:2},{value:"\u5c40\u90e8\u7684\u5bf9\u8c61",id:"\u5c40\u90e8\u7684\u5bf9\u8c61",level:2},{value:"\u5bf9\u8c61\u6210\u5458",id:"\u5bf9\u8c61\u6210\u5458",level:2},{value:"\u7ebf\u7a0b\u63a7\u5236\u9003\u9038\u89c4\u5219",id:"\u7ebf\u7a0b\u63a7\u5236\u9003\u9038\u89c4\u5219",level:2}],d={toc:u};function s(e){let{components:r,...t}=e;return(0,a.kt)("wrapper",(0,n.Z)({},d,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u5141\u8bb8\u88ab\u591a\u4e2a\u7ebf\u7a0b\u540c\u65f6\u6267\u884c\u7684\u4ee3\u7801\u79f0\u4f5c\u7ebf\u7a0b\u5b89\u5168\u7684\u4ee3\u7801\u3002\u7ebf\u7a0b\u5b89\u5168\u7684\u4ee3\u7801\u4e0d\u5305\u542b\u7ade\u6001\u6761\u4ef6\u3002 \u5f53\u591a\u4e2a\u7ebf\u7a0b\u540c\u65f6\u66f4\u65b0\u5171\u4eab\u8d44\u6e90\u65f6\u4f1a\u5f15\u53d1\u7ade\u6001\u6761\u4ef6\u3002\u56e0\u6b64\uff0c\u4e86\u89e3Java\u7ebf\u7a0b\u6267\u884c\u65f6\u5171\u4eab\u4e86\u4ec0\u4e48\u8d44\u6e90\u5f88\u91cd\u8981\u3002"),(0,a.kt)("h2",{id:"\u5c40\u90e8\u53d8\u91cf"},"\u5c40\u90e8\u53d8\u91cf"),(0,a.kt)("p",null,"\u5c40\u90e8\u53d8\u91cf\u5b58\u50a8\u5728\u7ebf\u7a0b\u81ea\u5df1\u7684\u6808\u4e2d\u3002\u4e5f\u5c31\u662f\u8bf4\uff0c\u5c40\u90e8\u53d8\u91cf\u6c38\u8fdc\u4e5f\u4e0d\u4f1a\u88ab\u591a\u4e2a\u7ebf\u7a0b\u5171\u4eab\u3002\u6240\u4ee5\uff0c\u57fa\u7840\u7c7b\u578b\u7684\u5c40\u90e8\u53d8\u91cf\u662f\u7ebf\u7a0b\u5b89\u5168\u7684\u3002"),(0,a.kt)("h2",{id:"\u5c40\u90e8\u7684\u5bf9\u8c61"},"\u5c40\u90e8\u7684\u5bf9\u8c61"),(0,a.kt)("p",null,"\u5c3d\u7ba1\u5f15\u7528\u672c\u8eab\u6ca1\u6709\u88ab\u5171\u4eab\uff0c\u4f46\u5f15\u7528\u6240\u6307\u7684\u5bf9\u8c61\u5e76\u6ca1\u6709\u5b58\u50a8\u5728\u7ebf\u7a0b\u7684\u6808\u5185\u3002\u6240\u6709\u7684\u5bf9\u8c61\u90fd\u5b58\u5728\u5171\u4eab\u5806\u4e2d\u3002\u5982\u679c\u5728\u67d0\u4e2a\u65b9\u6cd5\u4e2d\u521b\u5efa\u7684\u5bf9\u8c61\u4e0d\u4f1a\u9003\u9038\u51fa\uff08\u8bd1\u8005\u6ce8\uff1a\u5373\u8be5\u5bf9\u8c61\u4e0d\u4f1a\u88ab\u5176\u5b83\u65b9\u6cd5\u83b7\u5f97\uff0c\u4e5f\u4e0d\u4f1a\u88ab\u975e\u5c40\u90e8\u53d8\u91cf\u5f15\u7528\u5230\uff09\u8be5\u65b9\u6cd5\uff0c\u90a3\u4e48\u5b83\u5c31\u662f\u7ebf\u7a0b\u5b89\u5168\u7684\u3002\u5b9e\u9645\u4e0a\uff0c\u54ea\u6015\u5c06\u8fd9\u4e2a\u5bf9\u8c61\u4f5c\u4e3a\u53c2\u6570\u4f20\u7ed9\u5176\u5b83\u65b9\u6cd5\uff0c\u53ea\u8981\u522b\u7684\u7ebf\u7a0b\u83b7\u53d6\u4e0d\u5230\u8fd9\u4e2a\u5bf9\u8c61\uff0c\u90a3\u5b83\u4ecd\u662f\u7ebf\u7a0b\u5b89\u5168\u7684\u3002"),(0,a.kt)("h2",{id:"\u5bf9\u8c61\u6210\u5458"},"\u5bf9\u8c61\u6210\u5458"),(0,a.kt)("p",null,"\u5bf9\u8c61\u6210\u5458\u5b58\u50a8\u5728\u5806\u4e0a\u3002\u5982\u679c\u4e24\u4e2a\u7ebf\u7a0b\u540c\u65f6\u66f4\u65b0\u540c\u4e00\u4e2a\u5bf9\u8c61\u7684\u540c\u4e00\u4e2a\u6210\u5458\uff0c\u90a3\u8fd9\u4e2a\u4ee3\u7801\u5c31\u4e0d\u662f\u7ebf\u7a0b\u5b89\u5168\u7684\u3002"),(0,a.kt)("h2",{id:"\u7ebf\u7a0b\u63a7\u5236\u9003\u9038\u89c4\u5219"},"\u7ebf\u7a0b\u63a7\u5236\u9003\u9038\u89c4\u5219"),(0,a.kt)("p",null,"\u5982\u679c\u4e00\u4e2a\u8d44\u6e90\u7684\u521b\u5efa\uff0c\u4f7f\u7528\uff0c\u9500\u6bc1\u90fd\u5728\u540c\u4e00\u4e2a\u7ebf\u7a0b\u5185\u5b8c\u6210\uff0c\u4e14\u6c38\u8fdc\u4e0d\u4f1a\u8131\u79bb\u8be5\u7ebf\u7a0b\u7684\u63a7\u5236\uff0c\u5219\u8be5\u8d44\u6e90\u7684\u4f7f\u7528\u5c31\u662f\u7ebf\u7a0b\u5b89\u5168\u7684\u3002"))}s.isMDXComponent=!0}}]);