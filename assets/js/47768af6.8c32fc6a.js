"use strict";(self.webpackChunkdev_wiki=self.webpackChunkdev_wiki||[]).push([[2105],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var i=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,l=function(e,t){if(null==e)return{};var n,i,l={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var p=i.createContext({}),c=function(e){var t=i.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return i.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},k=i.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),k=c(n),d=l,s=k["".concat(p,".").concat(d)]||k[d]||m[d]||r;return n?i.createElement(s,a(a({ref:t},u),{},{components:n})):i.createElement(s,a({ref:t},u))}));function d(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,a=new Array(r);a[0]=k;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:l,a[1]=o;for(var c=2;c<r;c++)a[c]=n[c];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}k.displayName="MDXCreateElement"},5535:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>k,frontMatter:()=>a,metadata:()=>p,toc:()=>u});var i=n(7462),l=(n(7294),n(3905)),r=n(4996);const a={id:"link",title:"\u52a0\u8f7d\u94fe\u63a5\u548c\u521d\u59cb\u5316"},o=void 0,p={unversionedId:"java/jvm/link",id:"java/jvm/link",title:"\u52a0\u8f7d\u94fe\u63a5\u548c\u521d\u59cb\u5316",description:"\u8fd0\u884c\u65f6\u5e38\u91cf\u6c60",source:"@site/docs/java/jvm/link.mdx",sourceDirName:"java/jvm",slug:"/java/jvm/link",permalink:"/wiki/docs/java/jvm/link",draft:!1,tags:[],version:"current",frontMatter:{id:"link",title:"\u52a0\u8f7d\u94fe\u63a5\u548c\u521d\u59cb\u5316"},sidebar:"docs",previous:{title:"\u7c7b\u52a0\u8f7d\u5668",permalink:"/wiki/docs/java/jvm/ClassLoader"},next:{title:"JIT \u7f16\u8bd1\u5668",permalink:"/wiki/docs/java/jvm/jit"}},c={},u=[{value:"\u8fd0\u884c\u65f6\u5e38\u91cf\u6c60",id:"\u8fd0\u884c\u65f6\u5e38\u91cf\u6c60",level:2},{value:"\u865a\u62df\u673a\u542f\u52a8",id:"\u865a\u62df\u673a\u542f\u52a8",level:2},{value:"\u52a0\u8f7d",id:"\u52a0\u8f7d",level:2},{value:"\u94fe\u63a5",id:"\u94fe\u63a5",level:2},{value:"\u521d\u59cb\u5316",id:"\u521d\u59cb\u5316",level:2},{value:"<code>&lt;clinit&gt;</code> \u8be6\u89e3",id:"clinit-\u8be6\u89e3",level:3},{value:"\u6d41\u7a0b\u56fe",id:"\u6d41\u7a0b\u56fe",level:2}],m={toc:u};function k(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,i.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"\u8fd0\u884c\u65f6\u5e38\u91cf\u6c60"},"\u8fd0\u884c\u65f6\u5e38\u91cf\u6c60"),(0,l.kt)("p",null,"\u5f53\u7c7b\u6216\u63a5\u53e3\u521b\u5efa\u65f6\uff0c\u5b83\u7684\u4e8c\u8fdb\u5236\u8868\u793a\u4e2d\u7684\u5e38\u91cf\u6c60\u8868\u88ab\u7528\u6765\u6784\u9020\u8fd0\u884c\u65f6\u5e38\u91cf\u6c60\u3002\u8fd0\u884c\u65f6\u5e38\u91cf\u6c60\u4e2d\u7684\u6240\u6709\u5f15\u7528\u6700\u521d\u90fd\u662f\u7b26\u53f7\u5f15\u7528\u3002"),(0,l.kt)("h2",{id:"\u865a\u62df\u673a\u542f\u52a8"},"\u865a\u62df\u673a\u542f\u52a8"),(0,l.kt)("p",null,"\u865a\u62df\u673a\u542f\u52a8\u662f\u901a\u8fc7\u5f15\u5bfc\u7c7b\u52a0\u8f7d\u5668\uff08bootstrap class loader\uff09\u521b\u5efa\u4e00\u4e2a\u521d\u59cb\u7c7b\u6765\u5b8c\u6210\u7684\uff0c\u63a5\u7740 java \u865a\u62df\u673a\u94fe\u63a5\u8fd9\u4e2a\u521d\u59cb\u7c7b\uff0c\u5e76\u8c03\u7528\u5b83\u7684 public static void main(String[])\u65b9\u6cd5\u3002\n\u6b64\u65b9\u6cd5\u7684\u6267\u884c\u5c06\u4f9d\u6b21\u9a71\u52a8\u5176\u4ed6\u7c7b\u548c\u63a5\u53e3\u7684\u52a0\u8f7d\uff0c\u94fe\u63a5\u548c\u521d\u59cb\u5316\u3002"),(0,l.kt)("h2",{id:"\u52a0\u8f7d"},"\u52a0\u8f7d"),(0,l.kt)("p",null,"\u52a0\u8f7d\u662f\u6839\u636e\u7279\u5b9a\u540d\u79f0\u67e5\u627e\u7c7b\u6216\u63a5\u53e3\u7c7b\u578b\u7684\u4e8c\u8fdb\u5236\u8868\u793a\uff0c\u5e76\u7531\u4e8c\u8fdb\u5236\u8868\u793a\u6765\u521b\u5efa\u7c7b\u6216\u63a5\u53e3\u7684\u8fc7\u7a0b\u3002"),(0,l.kt)("p",null,"\u5f53\u4e00\u4e2a\u7c7b\u88ab\u521b\u5efa\u5b9e\u4f8b\u6216\u8005\u88ab\u5176\u5b83\u5bf9\u8c61\u5f15\u7528\u65f6\uff0c\u865a\u62df\u673a\u5728\u6ca1\u6709\u52a0\u8f7d\u8fc7\u8be5\u7c7b\u7684\u60c5\u51b5\u4e0b\uff0c\u4f1a\u901a\u8fc7\u7c7b\u52a0\u8f7d\u5668\u5c06\u5b57\u8282\u7801\u6587\u4ef6\u52a0\u8f7d\u5230\u5185\u5b58\u4e2d\u5728\u7c7b\u52a0\u8f7d\u540e\uff0cclass \u7c7b\u6587\u4ef6\u4e2d\u7684\u5e38\u91cf\u6c60\u4fe1\u606f\u4ee5\u53ca\u5176\u5b83\u6570\u636e\u4f1a\u88ab\u4fdd\u5b58\u5230 JVM \u5185\u5b58\u7684\u65b9\u6cd5\u533a\u4e2d\u3002\u3002"),(0,l.kt)("h2",{id:"\u94fe\u63a5"},"\u94fe\u63a5"),(0,l.kt)("p",null,"\u94fe\u63a5\u662f\u4e3a\u4e86\u8ba9\u7c7b\u6216\u63a5\u53e3\u53ef\u4ee5\u88ab jvm \u6267\u884c\uff0c\u800c\u5c06\u7c7b\u6216\u63a5\u53e3\u5e76\u5165 jvm \u8fd0\u884c\u65f6\u7684\u8fc7\u7a0b\u3002 \u94fe\u63a5\u7c7b\u6216\u63a5\u53e3\u5305\u62ec",(0,l.kt)("strong",{parentName:"p"},"\u9a8c\u8bc1"),"\u548c",(0,l.kt)("strong",{parentName:"p"},"\u51c6\u5907"),"\u7c7b\u6216\u63a5\u53e3\uff0c\u5b83\u7684\u76f4\u63a5\u7236\u7c7b\u3001\u7236\u63a5\u53e3\u3002\u800c\u89e3\u6790\u7c7b\u548c\u63a5\u53e3\u4e2d\u7684\u7b26\u53f7\u5f15\u7528\u5219\u662f\u94fe\u63a5\u8fc7\u7a0b\u4e2d\u7684\u53ef\u9009\u90e8\u5206\u3002"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u9a8c\u8bc1")),(0,l.kt)("p",null,"\u7528\u4e8e\u786e\u4fdd\u7c7b\u548c\u63a5\u53e3\u7684\u4e8c\u8fdb\u5236\u8868\u793a\u662f\u6b63\u786e\u7684"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u51c6\u5907")),(0,l.kt)("p",null,"\u51c6\u5907\u9636\u6bb5\u7684\u4efb\u52a1\u662f\u521b\u5efa\u7c7b\u548c\u63a5\u53e3\u7684\u9759\u6001\u5b57\u6bb5\uff0c\u5e76\u7528\u9ed8\u8ba4\u503c\u521d\u59cb\u5316\u8fd9\u4e9b\u5b57\u6bb5\u3002\u8fd9\u4e2a\u9636\u6bb5\u4e0d\u4f1a\u6267\u884c\u4efb\u4f55\u7684\u865a\u62df\u673a\u6307\u4ee4\uff0c\u800c\u5728\u521d\u59cb\u5316\u9636\u6bb5\u4f1a\u6709\u9ed8\u8ba4\u7684\u663e\u793a\u7684\u521d\u59cb\u5316\u5668\u6765\u521d\u59cb\u5316\u8fd9\u4e9b\u9759\u6001\u5b57\u6bb5\u3002"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u89e3\u6790")),(0,l.kt)("p",null,"\u89e3\u6790\u662f\u6839\u636e\u8fd0\u884c\u65f6\u5e38\u91cf\u6c60\u91cc\u7684\u7b26\u53f7\u5f15\u7528\u6765\u52a8\u6001\u7684\u51b3\u5b9a\u5177\u4f53\u503c\u7684\u8fc7\u7a0b\u3002"),(0,l.kt)("p",null,"\u4e5f\u5c31\u662f\u5c06\u7b26\u53f7\u5f15\u7528\u8f6c\u4e3a\u76f4\u63a5\u5f15\u7528\u7684\u8fc7\u7a0b\u3002\u6211\u4eec\u77e5\u9053\uff0c\u5728\u7f16\u8bd1\u65f6\uff0cJava \u7c7b\u5e76\u4e0d\u77e5\u9053\u6240\u5f15\u7528\u7684\u7c7b\u7684\u5b9e\u9645\u5730\u5740\uff0c\u56e0\u6b64\u53ea\u80fd\u4f7f\u7528\u7b26\u53f7\u5f15\u7528\u6765\u4ee3\u66ff\u3002"),(0,l.kt)("p",null,"\u7c7b\u7ed3\u6784\u6587\u4ef6\u7684\u5e38\u91cf\u6c60\u4e2d\u5b58\u50a8\u4e86\u7b26\u53f7\u5f15\u7528\uff0c\u5305\u62ec\u7c7b\u548c\u63a5\u53e3\u7684\u5168\u9650\u5b9a\u540d\u3001\u7c7b\u5f15\u7528\u3001\u65b9\u6cd5\u5f15\u7528\u4ee5\u53ca\u6210\u5458\u53d8\u91cf\u5f15\u7528\u7b49\u3002\u5982\u679c\u8981\u4f7f\u7528\u8fd9\u4e9b\u7c7b\u548c\u65b9\u6cd5\uff0c\u5c31\u9700\u8981\u628a\u5b83\u4eec\u8f6c\u5316\u4e3a JVM \u53ef\u4ee5\u76f4\u63a5\u83b7\u53d6\u7684\u5185\u5b58\u5730\u5740\u6216\u6307\u9488\uff0c\u5373\u76f4\u63a5\u5f15\u7528\u3002"),(0,l.kt)("h2",{id:"\u521d\u59cb\u5316"},"\u521d\u59cb\u5316"),(0,l.kt)("p",null,"\u5728\u8fd9\u4e2a\u9636\u6bb5\u4e2d\uff0cJVM \u9996\u5148\u4f1a\u6267\u884c\u6784\u9020\u5668 ",(0,l.kt)("inlineCode",{parentName:"p"},"<clinit>"),"\u65b9\u6cd5\u3002"),(0,l.kt)("h3",{id:"clinit-\u8be6\u89e3"},(0,l.kt)("inlineCode",{parentName:"h3"},"<clinit>")," \u8be6\u89e3"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"\uff1cclinit\uff1e")," \u65b9\u6cd5\u662f\u7531\u7f16\u8bd1\u5668\u81ea\u52a8\u6536\u96c6\u7c7b\u4e2d\u7684\u6240\u6709\u7c7b\u53d8\u91cf\u7684\u8d4b\u503c\u52a8\u4f5c\u548c\u9759\u6001\u8bed\u53e5\u5757\uff08static{}\u5757\uff09\u4e2d\u7684\u8bed\u53e5\u5408\u5e76\u4ea7\u751f\u7684\uff0c\u7f16\u8bd1\u5668\u6536\u96c6\u7684\u987a\u5e8f\u662f\u7531\u8bed\u53e5\u5728\u6e90\u6587\u4ef6\u4e2d\u51fa\u73b0\u7684\u987a\u5e8f\u6240\u51b3\u5b9a\u7684\uff0c\u9759\u6001\u8bed\u53e5\u5757\u4e2d\u53ea\u80fd\u8bbf\u95ee\u5230\u5b9a\u4e49\u5728\u9759\u6001\u8bed\u53e5\u5757\u4e4b\u524d\u7684\u53d8\u91cf\uff0c\u5b9a\u4e49\u5728\u5b83\u4e4b\u540e\u7684\u53d8\u91cf\uff0c\u5728\u524d\u9762\u7684\u9759\u6001\u8bed\u53e5\u5757\u53ef\u4ee5\u8d4b\u503c\uff0c\u4f46\u662f\u4e0d\u80fd\u8bbf\u95ee\u3002")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u865a\u62df\u673a\u4f1a\u4fdd\u8bc1\u5728\u5b50\u7c7b\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"\uff1cclinit\uff1e"),"\u65b9\u6cd5\u6267\u884c\u4e4b\u524d\uff0c\u7236\u7c7b\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"\uff1cclinit\uff1e"),"\u65b9\u6cd5\u5df2\u7ecf\u6267\u884c\u5b8c\u6bd5\u3002 \u56e0\u6b64\u5728\u865a\u62df\u673a\u4e2d\u7b2c\u4e00\u4e2a\u88ab\u6267\u884c\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"\uff1cclinit\uff1e"),"\u65b9\u6cd5\u7684\u7c7b\u80af\u5b9a\u662fjava.lang.Object\u3002\u7531\u4e8e\u7236\u7c7b\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"\uff1cclinit\uff1e"),"\u65b9\u6cd5\u5148\u6267\u884c\uff0c\u4e5f\u5c31\u610f\u5473\u7740\u7236\u7c7b\u4e2d\u5b9a\u4e49\u7684\u9759\u6001\u8bed\u53e5\u5757\u8981\u4f18\u5148\u4e8e\u5b50\u7c7b\u7684\u53d8\u91cf\u8d4b\u503c\u64cd\u4f5c")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u63a5\u53e3\u4e2d\u4e0d\u80fd\u4f7f\u7528\u9759\u6001\u8bed\u53e5\u5757\uff0c\u4f46\u4ecd\u7136\u6709\u53d8\u91cf\u521d\u59cb\u5316\u7684\u8d4b\u503c\u64cd\u4f5c\uff0c\u56e0\u6b64\u63a5\u53e3\u4e0e\u7c7b\u4e00\u6837\u90fd\u4f1a\u751f\u6210 ",(0,l.kt)("inlineCode",{parentName:"p"},"\uff1cclinit\uff1e")," \u65b9\u6cd5\u3002 \u4f46\u63a5\u53e3\u4e0e\u7c7b\u4e0d\u540c\u7684\u662f\uff0c\u6267\u884c\u63a5\u53e3\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"\uff1cclinit\uff1e")," \u65b9\u6cd5\u4e0d\u9700\u8981\u5148\u6267\u884c\u7236\u63a5\u53e3\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"\uff1cclinit\uff1e")," \u65b9\u6cd5\u3002 \u53ea\u6709\u5f53\u7236\u63a5\u53e3\u4e2d\u5b9a\u4e49\u7684\u53d8\u91cf\u4f7f\u7528\u65f6\uff0c\u7236\u63a5\u53e3\u624d\u4f1a\u521d\u59cb\u5316\u3002 \u53e6\u5916\uff0c\u63a5\u53e3\u7684\u5b9e\u73b0\u7c7b\u5728\u521d\u59cb\u5316\u65f6\u4e5f\u4e00\u6837\u4e0d\u4f1a\u6267\u884c\u63a5\u53e3\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"\uff1cclinit\uff1e")," \u65b9\u6cd5\u3002"),(0,l.kt)("admonition",{parentName:"li",title:"\u6ce8\u610f",type:"note"},(0,l.kt)("p",{parentName:"admonition"},"\u63a5\u53e3\u4e2d\u7684\u5c5e\u6027\u90fd\u662fstatic final\u7c7b\u578b\u7684\u5e38\u91cf\uff0c\u56e0\u6b64\u5728\u51c6\u5907\u9636\u6bb5\u5c31\u5df2\u7ecf\u521d\u59cb\u5316")))),(0,l.kt)("h2",{id:"\u6d41\u7a0b\u56fe"},"\u6d41\u7a0b\u56fe"),(0,l.kt)("p",{align:"center"},(0,l.kt)("img",{src:(0,r.Z)("/assets/jvm/class_loading_linking_initializing.png"),width:"30%"}),(0,l.kt)("br",null)))}k.isMDXComponent=!0}}]);