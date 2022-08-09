"use strict";(self.webpackChunkdev_wiki=self.webpackChunkdev_wiki||[]).push([[7611],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>y});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),f=u(r),y=a,m=f["".concat(l,".").concat(y)]||f[y]||s[y]||o;return r?n.createElement(m,c(c({ref:t},p),{},{components:r})):n.createElement(m,c({ref:t},p))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,c=new Array(o);c[0]=f;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var u=2;u<o;u++)c[u]=r[u];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},3984:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>s,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var n=r(7462),a=(r(7294),r(3905));const o={id:"safe",title:"\u7ebf\u7a0b\u5b89\u5168\u53ca\u4e0d\u53ef\u53d8\u6027"},c=void 0,i={unversionedId:"java/Concurrency/safe",id:"java/Concurrency/safe",title:"\u7ebf\u7a0b\u5b89\u5168\u53ca\u4e0d\u53ef\u53d8\u6027",description:"\u5f53\u591a\u4e2a\u7ebf\u7a0b\u540c\u65f6\u8bbf\u95ee\u540c\u4e00\u4e2a\u8d44\u6e90\uff0c\u5e76\u4e14\u5176\u4e2d\u7684\u4e00\u4e2a\u6216\u8005\u591a\u4e2a\u7ebf\u7a0b\u5bf9\u8fd9\u4e2a\u8d44\u6e90\u8fdb\u884c\u4e86\u5199\u64cd\u4f5c\uff0c\u624d\u4f1a\u4ea7\u751f\u7ade\u6001\u6761\u4ef6\u3002\u591a\u4e2a\u7ebf\u7a0b\u540c\u65f6\u8bfb\u540c\u4e00\u4e2a\u8d44\u6e90\u4e0d\u4f1a\u4ea7\u751f\u7ade\u6001\u6761\u4ef6\u3002",source:"@site/docs/java/Concurrency/safe.md",sourceDirName:"java/Concurrency",slug:"/java/Concurrency/safe",permalink:"/wiki/docs/java/Concurrency/safe",draft:!1,tags:[],version:"current",frontMatter:{id:"safe",title:"\u7ebf\u7a0b\u5b89\u5168\u53ca\u4e0d\u53ef\u53d8\u6027"},sidebar:"docs",previous:{title:"\u7ebf\u7a0b\u5b89\u5168\u4e0e\u5171\u4eab\u8d44\u6e90",permalink:"/wiki/docs/java/Concurrency/Thread-Safety-and-Shared-Resources"},next:{title:"Java \u5185\u5b58\u6a21\u578b",permalink:"/wiki/docs/java/Concurrency/JMM"}},l={},u=[],p={toc:u};function s(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u5f53\u591a\u4e2a\u7ebf\u7a0b\u540c\u65f6\u8bbf\u95ee\u540c\u4e00\u4e2a\u8d44\u6e90\uff0c\u5e76\u4e14\u5176\u4e2d\u7684\u4e00\u4e2a\u6216\u8005\u591a\u4e2a\u7ebf\u7a0b\u5bf9\u8fd9\u4e2a\u8d44\u6e90\u8fdb\u884c\u4e86\u5199\u64cd\u4f5c\uff0c\u624d\u4f1a\u4ea7\u751f\u7ade\u6001\u6761\u4ef6\u3002\u591a\u4e2a\u7ebf\u7a0b\u540c\u65f6\u8bfb\u540c\u4e00\u4e2a\u8d44\u6e90\u4e0d\u4f1a\u4ea7\u751f\u7ade\u6001\u6761\u4ef6\u3002"),(0,a.kt)("p",null,"\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7\u521b\u5efa\u4e0d\u53ef\u53d8\u7684\u5171\u4eab\u5bf9\u8c61\u6765\u4fdd\u8bc1\u5bf9\u8c61\u5728\u7ebf\u7a0b\u95f4\u5171\u4eab\u65f6\u4e0d\u4f1a\u88ab\u4fee\u6539\uff0c\u4ece\u800c\u5b9e\u73b0\u7ebf\u7a0b\u5b89\u5168\u3002\u5982\u4e0b\u793a\u4f8b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"public class ImmutableValue{\n  private int value = 0;\n\n  public ImmutableValue(int value){\n    this.value = value;\n  }\n  public int getValue(){\n    return this.value;\n  }\n}\n")),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"\u5f15\u7528\u4e0d\u662f\u7ebf\u7a0b\u5b89\u5168\u7684\uff01")),(0,a.kt)("p",null,"\u91cd\u8981\u7684\u662f\u8981\u8bb0\u4f4f\uff0c\u5373\u4f7f\u4e00\u4e2a\u5bf9\u8c61\u662f\u7ebf\u7a0b\u5b89\u5168\u7684\u4e0d\u53ef\u53d8\u5bf9\u8c61\uff0c\u6307\u5411\u8fd9\u4e2a\u5bf9\u8c61\u7684\u5f15\u7528\u4e5f\u53ef\u80fd\u4e0d\u662f\u7ebf\u7a0b\u5b89\u5168\u7684\u3002"))}s.isMDXComponent=!0}}]);